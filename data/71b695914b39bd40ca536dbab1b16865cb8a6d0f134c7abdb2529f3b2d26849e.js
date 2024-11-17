let trackedData = {};
/* prebid.js v6.18.0
Updated : 2022-03-30*/
/*! For license information please see prebid-core.js.LICENSE.txt */
!function () {
  var e,
    n = {
      4877: function (e, n, t) {
        "use strict";

        t.d(n, {
          Pd: function () {
            return s;
          },
          Th: function () {
            return u;
          },
          _U: function () {
            return d;
          }
        });
        var r = t(6996),
          i = t(9853),
          o = t(265),
          a = t(1879),
          c = "outstream";
        function u(e) {
          var n = this,
            t = e.url,
            o = e.config,
            a = e.id,
            u = e.callback,
            s = e.loaded,
            d = e.adUnitCode;
          this.url = t, this.config = o, this.handlers = {}, this.id = a, this.loaded = s, this.cmd = [], this.push = function (e) {
            "function" == typeof e ? n.loaded ? e.call() : n.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function");
          }, this.callback = u || function () {
            n.loaded = !0, n.process();
          }, this.render = function () {
            var e = this,
              n = arguments,
              o = function () {
                e._render ? e._render.apply(e, n) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer");
              };
            f(d) ? ((0, i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)), o()) : (this.cmd.unshift(o), (0, r.B)(t, c, this.callback));
          }.bind(this);
        }
        function s(e) {
          return !(!e || !e.url);
        }
        function d(e, n) {
          e.render(n);
        }
        function f(e) {
          var n = pbjs.adUnits,
            t = (0, a.sE)(n, function (n) {
              return n.code === e;
            });
          if (!t) return !1;
          var r = (0, o.Z)(t, "renderer"),
            i = !!(r && r.url && r.render),
            c = (0, o.Z)(t, "mediaTypes.video.renderer"),
            u = !!(c && c.url && c.render);
          return !!(i && !0 !== r.backupOnly || u && !0 !== c.backupOnly);
        }
        u.install = function (e) {
          return new u({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
          });
        }, u.prototype.getConfig = function () {
          return this.config;
        }, u.prototype.setRender = function (e) {
          this._render = e;
        }, u.prototype.setEventHandlers = function (e) {
          this.handlers = e;
        }, u.prototype.handleVideoEvent = function (e) {
          var n = e.id,
            t = e.eventName;
          "function" == typeof this.handlers[t] && this.handlers[t](), (0, i.logMessage)("Prebid Renderer event for id ".concat(n, " type ").concat(t));
        }, u.prototype.process = function () {
          for (; this.cmd.length > 0;) try {
            this.cmd.shift().call();
          } catch (e) {
            (0, i.logError)("Error processing Renderer command: ", e);
          }
        };
      },
      7263: function (e, n, t) {
        "use strict";

        t.d(n, {
          f: function () {
            return a;
          }
        });
        var r = t(265),
          i = {};
        function o(e, n, t) {
          var r = function (e, n) {
            var t = i[e] = i[e] || {
              bidders: {}
            };
            return n ? t.bidders[n] = t.bidders[n] || {} : t;
          }(e, t);
          return r[n] = (r[n] || 0) + 1, r[n];
        }
        var a = {
          incrementRequestsCounter: function (e) {
            return o(e, "requestsCounter");
          },
          incrementBidderRequestsCounter: function (e, n) {
            return o(e, "requestsCounter", n);
          },
          incrementBidderWinsCounter: function (e, n) {
            return o(e, "winsCounter", n);
          },
          getRequestsCounter: function (e) {
            return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0;
          },
          getBidderRequestsCounter: function (e, n) {
            return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".requestsCounter")) || 0;
          },
          getBidderWinsCounter: function (e, n) {
            return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".winsCounter")) || 0;
          }
        };
      },
      2801: function (e, n, t) {
        "use strict";

        function r(e) {
          var n = e;
          return {
            callBids: function () {},
            setBidderCode: function (e) {
              n = e;
            },
            getBidderCode: function () {
              return n;
            }
          };
        }
        t.d(n, {
          Z: function () {
            return r;
          }
        });
      },
      7602: function (e, n, t) {
        "use strict";

        t.d(n, {
          qJ: function () {
            return G;
          },
          VP: function () {
            return X;
          },
          ZP: function () {
            return re;
          },
          JO: function () {
            return Y;
          },
          rp: function () {
            return J;
          },
          uV: function () {
            return ee;
          },
          Ct: function () {
            return ne;
          },
          nX: function () {
            return Q;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(1269),
          a = t(9017),
          c = t(1609),
          u = t(5755),
          s = t(8962),
          d = t(3494),
          f = t(1879),
          l = t(7263),
          g = t(2661);
        function p(e) {
          return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, p(e);
        }
        function v(e, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), n && y(e, n);
        }
        function y(e, n) {
          return y = Object.setPrototypeOf || function (e, n) {
            return e.__proto__ = n, e;
          }, y(e, n);
        }
        function b(e) {
          var n = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }();
          return function () {
            var t,
              r = m(e);
            if (n) {
              var i = m(this).constructor;
              t = Reflect.construct(r, arguments, i);
            } else t = r.apply(this, arguments);
            return h(this, t);
          };
        }
        function h(e, n) {
          if (n && ("object" === p(n) || "function" == typeof n)) return n;
          if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
          return function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }(e);
        }
        function m(e) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, m(e);
        }
        function E(e, n) {
          if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function S(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function A(e, n, t) {
          return n && S(e.prototype, n), t && S(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
        }
        function T(e, n, t) {
          !function (e, n) {
            if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
          }(e, n), n.set(e, t);
        }
        function I(e, n) {
          return function (e, n) {
            return n.get ? n.get.call(e) : n.value;
          }(e, w(e, n, "get"));
        }
        function C(e, n, t) {
          return function (e, n, t) {
            if (n.set) n.set.call(e, t);else {
              if (!n.writable) throw new TypeError("attempted to set read only private field");
              n.value = t;
            }
          }(e, w(e, n, "set"), t), t;
        }
        function w(e, n, t) {
          if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
          return n.get(e);
        }
        var O = new WeakMap(),
          B = new WeakMap(),
          U = new WeakMap(),
          _ = new WeakMap(),
          R = new WeakMap(),
          D = function () {
            function e() {
              var n, t;
              E(this, e), T(this, O, {
                writable: !0,
                value: void 0
              }), T(this, B, {
                writable: !0,
                value: void 0
              }), T(this, U, {
                writable: !0,
                value: void 0
              }), T(this, _, {
                writable: !0,
                value: void 0
              }), T(this, R, {
                writable: !0,
                value: void 0
              }), t = void 0, (n = "generatedTime") in this ? Object.defineProperty(this, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : this[n] = t, this.reset();
            }
            return A(e, [{
              key: "reset",
              value: function () {
                var e = this;
                C(this, U, new Promise(function (n) {
                  C(e, _, function (t) {
                    C(e, R, !0), C(e, B, t), n(t);
                  });
                })), C(this, O, !1), C(this, B, null), C(this, R, !1), this.generatedTime = null;
              }
            }, {
              key: "enable",
              value: function () {
                C(this, O, !0);
              }
            }, {
              key: "enabled",
              get: function () {
                return I(this, O);
              }
            }, {
              key: "ready",
              get: function () {
                return I(this, R);
              }
            }, {
              key: "promise",
              get: function () {
                return I(this, O) || I(this, _).call(this, null), I(this, U);
              }
            }, {
              key: "setConsentData",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.timestamp)();
                this.generatedTime = n, I(this, _).call(this, e);
              }
            }, {
              key: "getConsentData",
              value: function () {
                return I(this, B);
              }
            }]), e;
          }(),
          k = function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return E(this, t), n.apply(this, arguments);
            }
            return A(t, [{
              key: "getConsentMeta",
              value: function () {
                var e = this.getConsentData();
                if (e && this.generatedTime) return {
                  usp: e,
                  generatedAt: this.generatedTime
                };
              }
            }]), t;
          }(D),
          j = function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return E(this, t), n.apply(this, arguments);
            }
            return A(t, [{
              key: "getConsentMeta",
              value: function () {
                var e = this.getConsentData();
                if (e && e.vendorData && this.generatedTime) return {
                  gdprApplies: e.gdprApplies,
                  consentStringSize: (0, r.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                  generatedAt: this.generatedTime,
                  apiVersion: e.apiVersion
                };
              }
            }]), t;
          }(D);
        function N(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n && (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })), t.push.apply(t, r);
          }
          return t;
        }
        function P(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? N(Object(t), !0).forEach(function (n) {
              q(e, n, t[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
            });
          }
          return e;
        }
        function x(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function q(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function M() {
          return M = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, M.apply(this, arguments);
        }
        var G = {
            CLIENT: "client",
            SERVER: "server"
          },
          W = t(5644),
          F = t(2319),
          z = {},
          L = z.bidderRegistry = {},
          K = z.aliasRegistry = {},
          V = [];
        s.vc.getConfig("s2sConfig", function (e) {
          e && e.s2sConfig && (V = (0, r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
        });
        var H = {},
          Z = (0, d.z3)("sync", function (e) {
            var n = e.bidderCode,
              t = e.auctionId,
              o = e.bidderRequestId,
              a = e.adUnits,
              c = e.src;
            return a.reduce(function (e, a) {
              return e.push(a.bids.filter(function (e) {
                return e.bidder === n;
              }).reduce(function (e, n) {
                var u = null == (n = M({}, n, (0, r.getDefinedParams)(a, ["nativeParams", "ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]))).mediaTypes ? a.mediaTypes : n.mediaTypes;
                return (0, r.isValidMediaTypes)(u) ? n = M({}, n, {
                  mediaTypes: u
                }) : (0, r.logError)("mediaTypes is not correctly configured for adunit ".concat(a.code)), e.push(M({}, n, {
                  adUnitCode: a.code,
                  transactionId: a.transactionId,
                  sizes: (0, i.Z)(u, "banner.sizes") || (0, i.Z)(u, "video.playerSize") || [],
                  bidId: n.bid_id || (0, r.getUniqueIdentifierStr)(),
                  bidderRequestId: o,
                  auctionId: t,
                  src: c,
                  bidRequestsCount: l.f.getRequestsCounter(a.code),
                  bidderRequestsCount: l.f.getBidderRequestsCounter(a.code, n.bidder),
                  bidderWinsCount: l.f.getBidderWinsCounter(a.code, n.bidder)
                })), e;
              }, [])), e;
            }, []).reduce(r.flatten, []).filter(function (e) {
              return "" !== e;
            });
          }, "getBids"),
          Y = (0, d.z3)("sync", function (e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = t.getS2SBidders,
              i = void 0 === r ? ee : r;
            if (null == n) return e;
            var o = i(n);
            return e.filter(function (e) {
              return o.has(e.bidder);
            });
          }, "filterBidsForAdUnit"),
          J = new j(),
          Q = new k(),
          X = {
            getCoppa: function () {
              return !!s.vc.getConfig("coppa");
            }
          },
          $ = (0, d.z3)("sync", function (e, n) {
            return (0, o.UB)(e, n);
          }, "setupAdUnitMediaTypes");
        function ee(e) {
          (0, r.isArray)(e) || (e = [e]);
          var n = new Set([null]);
          return e.filter(function (e) {
            return e && e.enabled;
          }).flatMap(function (e) {
            return e.bidders;
          }).forEach(function (e) {
            return n.add(e);
          }), n;
        }
        var ne = (0, d.z3)("sync", function (e, n) {
          var t,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = i.getS2SBidders,
            a = void 0 === o ? ee : o,
            c = a(n);
          return (0, r.getBidderCodes)(e).reduce(function (e, n) {
            return e[c.has(n) ? G.SERVER : G.CLIENT].push(n), e;
          }, (q(t = {}, G.CLIENT, []), q(t, G.SERVER, []), t));
        }, "partitionBidders");
        function te(e, n, t) {
          try {
            var i = L[e].getSpec();
            i && i[n] && "function" == typeof i[n] && ((0, r.logInfo)("Invoking ".concat(e, ".").concat(n)), s.vc.runWithBidder(e, r.bind.call(i[n], i, t)));
          } catch (t) {
            (0, r.logWarn)("Error calling ".concat(n, " of ").concat(e));
          }
        }
        z.makeBidRequests = (0, d.z3)("sync", function (e, n, t, i, o) {
          F.emit(W.EVENTS.BEFORE_REQUEST_BIDS, e), (0, a.Fb)(e), e = $(e, o);
          var c = ne(e, V),
            u = c[G.CLIENT],
            d = c[G.SERVER];
          s.vc.getConfig("bidderSequence") === s.FD && (u = (0, r.shuffle)(u));
          var l = (0, g.n)(),
            p = [];
          V.forEach(function (i) {
            if (i && i.enabled) {
              var o = function (e, n) {
                  var t = (0, r.deepClone)(e);
                  return t.forEach(function (e) {
                    e.bids = Y(e.bids, n).map(function (e) {
                      return e.bid_id = (0, r.getUniqueIdentifierStr)(), e;
                    });
                  }), t.filter(function (e) {
                    return 0 !== e.bids.length;
                  });
                }(e, i),
                a = (0, r.generateUUID)();
              d.forEach(function (e) {
                var c = (0, r.getUniqueIdentifierStr)(),
                  u = {
                    bidderCode: e,
                    auctionId: t,
                    bidderRequestId: c,
                    uniquePbsTid: a,
                    bids: Z({
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: c,
                      adUnits: (0, r.deepClone)(o),
                      src: W.S2S.SRC
                    }),
                    auctionStart: n,
                    timeout: i.timeout,
                    src: W.S2S.SRC,
                    refererInfo: l
                  };
                0 !== u.bids.length && p.push(u);
              }), o.forEach(function (e) {
                var n = e.bids.filter(function (e) {
                  return (0, f.sE)(p, function (n) {
                    return (0, f.sE)(n.bids, function (n) {
                      return n.bidId === e.bid_id;
                    });
                  });
                });
                e.bids = n;
              }), p.forEach(function (e) {
                void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = o.filter(function (e) {
                  return e.bids.length > 0;
                }));
              });
            }
          });
          var v = function (e) {
            var n = (0, r.deepClone)(e);
            return n.forEach(function (e) {
              e.bids = Y(e.bids, null);
            }), n.filter(function (e) {
              return 0 !== e.bids.length;
            });
          }(e);
          return u.forEach(function (e) {
            var a = (0, r.getUniqueIdentifierStr)(),
              c = {
                bidderCode: e,
                auctionId: t,
                bidderRequestId: a,
                bids: Z({
                  bidderCode: e,
                  auctionId: t,
                  bidderRequestId: a,
                  adUnits: (0, r.deepClone)(v),
                  labels: o,
                  src: "client"
                }),
                auctionStart: n,
                timeout: i,
                refererInfo: l
              },
              u = L[e];
            u || (0, r.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), u && c.bids && 0 !== c.bids.length && p.push(c);
          }), J.getConsentData() && p.forEach(function (e) {
            e.gdprConsent = J.getConsentData();
          }), Q.getConsentData() && p.forEach(function (e) {
            e.uspConsent = Q.getConsentData();
          }), p;
        }, "makeBidRequests"), z.callBids = function (e, n, t, i, o, a, c) {
          if (n.length) {
            var d = (y = n.reduce(function (e, n) {
                return e[Number(void 0 !== n.src && n.src === W.S2S.SRC)].push(n), e;
              }, [[], []]), b = 2, function (e) {
                if (Array.isArray(e)) return e;
              }(y) || function (e, n) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                  var r,
                    i,
                    o = [],
                    a = !0,
                    c = !1;
                  try {
                    for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                  } catch (e) {
                    c = !0, i = e;
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw i;
                    }
                  }
                  return o;
                }
              }(y, b) || function (e, n) {
                if (e) {
                  if ("string" == typeof e) return x(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? x(e, n) : void 0;
                }
              }(y, b) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()),
              f = d[0],
              l = d[1],
              g = [];
            l.forEach(function (e) {
              for (var n = -1, t = 0; t < g.length; ++t) if (e.uniquePbsTid === g[t].uniquePbsTid) {
                n = t;
                break;
              }
              n <= -1 && g.push(e);
            });
            var p = 0,
              v = (0, r.generateUUID)();
            V.forEach(function (e) {
              if (e && g[p] && ee(e).has(g[p].bidderCode)) {
                var n = (0, u.O)(a, o ? {
                    request: o.request.bind(null, "s2s"),
                    done: o.done
                  } : void 0),
                  c = e.bidders,
                  s = L[e.adapter],
                  d = g[p].uniquePbsTid,
                  f = g[p].adUnitsS2SCopy,
                  y = l.filter(function (e) {
                    return e.uniquePbsTid === d;
                  });
                if (s) {
                  var b = {
                    tid: v,
                    ad_units: f,
                    s2sConfig: e
                  };
                  if (b.ad_units.length) {
                    var h = y.map(function (e) {
                        return e.start = (0, r.timestamp)(), i.bind(e);
                      }),
                      m = (0, r.getBidderCodes)(b.ad_units).filter(function (e) {
                        return c.includes(e);
                      });
                    (0, r.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(m.length > 0 ? m.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')), y.forEach(function (e) {
                      F.emit(W.EVENTS.BID_REQUESTED, P(P({}, e), {}, {
                        tid: v
                      }));
                    }), s.callBids(b, l, t, function () {
                      return h.forEach(function (e) {
                        return e();
                      });
                    }, n);
                  }
                } else (0, r.logError)("missing " + e.adapter);
                p++;
              }
            }), f.forEach(function (e) {
              e.start = (0, r.timestamp)();
              var n = L[e.bidderCode];
              s.vc.runWithBidder(e.bidderCode, function () {
                (0, r.logMessage)("CALLING BIDDER"), F.emit(W.EVENTS.BID_REQUESTED, e);
              });
              var d = (0, u.O)(a, o ? {
                  request: o.request.bind(null, e.bidderCode),
                  done: o.done
                } : void 0),
                f = i.bind(e);
              try {
                s.vc.runWithBidder(e.bidderCode, r.bind.call(n.callBids, n, e, t, f, d, c, s.vc.callbackWithBidder(e.bidderCode)));
              } catch (n) {
                (0, r.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                  e: n,
                  bidRequest: e
                }), f();
              }
            });
          } else (0, r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
          var y, b;
        }, z.videoAdapters = [], z.registerBidAdapter = function (e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = t.supportedMediaTypes,
            o = void 0 === i ? [] : i;
          e && n ? "function" == typeof e.callBids ? (L[n] = e, (0, f.q9)(o, "video") && z.videoAdapters.push(n), (0, f.q9)(o, "native") && a.Sg.push(n)) : (0, r.logError)("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : (0, r.logError)("bidAdapter or bidderCode not specified");
        }, z.aliasBidAdapter = function (e, n, t) {
          if (void 0 === L[n]) {
            var i = L[e];
            if (void 0 === i) {
              var o = [];
              V.forEach(function (t) {
                if (t.bidders && t.bidders.length) {
                  var r = t && t.bidders;
                  t && (0, f.q9)(r, n) ? K[n] = e : o.push(e);
                }
              }), o.forEach(function (e) {
                (0, r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
              });
            } else try {
              var u,
                s = function (e) {
                  var n = [];
                  return (0, f.q9)(z.videoAdapters, e) && n.push("video"), (0, f.q9)(a.Sg, e) && n.push("native"), n;
                }(e);
              if (i.constructor.prototype != Object.prototype) (u = new i.constructor()).setBidderCode(n);else {
                var d = i.getSpec(),
                  l = t && t.gvlid,
                  g = t && t.skipPbsAliasing;
                u = (0, c.newBidder)(M({}, d, {
                  code: n,
                  gvlid: l,
                  skipPbsAliasing: g
                })), K[n] = e;
              }
              z.registerBidAdapter(u, n, {
                supportedMediaTypes: s
              });
            } catch (n) {
              (0, r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
            }
          } else (0, r.logMessage)('alias name "' + n + '" has been already specified.');
        }, z.registerAnalyticsAdapter = function (e) {
          var n = e.adapter,
            t = e.code,
            i = e.gvlid;
          n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, H[t] = {
            adapter: n,
            gvlid: i
          }) : (0, r.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : (0, r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, z.enableAnalytics = function (e) {
          (0, r.isArray)(e) || (e = [e]), (0, r._each)(e, function (e) {
            var n = H[e.provider];
            n && n.adapter ? n.adapter.enableAnalytics(e) : (0, r.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider, "'."));
          });
        }, z.getBidAdapter = function (e) {
          return L[e];
        }, z.getAnalyticsAdapter = function (e) {
          return H[e];
        }, z.callTimedOutBidders = function (e, n, t) {
          n = n.map(function (n) {
            return n.params = (0, r.getUserConfiguredParams)(e, n.adUnitCode, n.bidder), n.timeout = t, n;
          }), n = (0, r.groupBy)(n, "bidder"), Object.keys(n).forEach(function (e) {
            te(e, "onTimeout", n[e]);
          });
        }, z.callBidWonBidder = function (e, n, t) {
          n.params = (0, r.getUserConfiguredParams)(t, n.adUnitCode, n.bidder), l.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder), te(e, "onBidWon", n);
        }, z.callSetTargetingBidder = function (e, n) {
          te(e, "onSetTargeting", n);
        }, z.callBidViewableBidder = function (e, n) {
          te(e, "onBidViewable", n);
        }, z.callBidderError = function (e, n, t) {
          te(e, "onBidderError", {
            error: n,
            bidderRequest: t
          });
        };
        var re = z;
      },
      1609: function (e, n, t) {
        "use strict";

        t.r(n), t.d(n, {
          getIabSubCategory: function () {
            return R;
          },
          isValid: function () {
            return k;
          },
          newBidder: function () {
            return O;
          },
          preloadBidderMappingFile: function () {
            return _;
          },
          processBidderRequests: function () {
            return B;
          },
          registerBidder: function () {
            return w;
          },
          registerSyncInner: function () {
            return U;
          },
          storage: function () {
            return I;
          }
        });
        var r = t(2801),
          i = t(7602),
          o = t(8962),
          a = t(1477),
          c = t(7112),
          u = t(9017),
          s = t(1929),
          d = t(5644),
          f = t(2319),
          l = t(1879),
          g = t(5755),
          p = t(9853),
          v = t(265),
          y = t(8265),
          b = t(3494),
          h = t(5849),
          m = t(4766);
        function E(e, n) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, n) {
            var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != t) {
              var r,
                i,
                o = [],
                a = !0,
                c = !1;
              try {
                for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
              } catch (e) {
                c = !0, i = e;
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw i;
                }
              }
              return o;
            }
          }(e, n) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return S(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? S(e, n) : void 0;
            }
          }(e, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function S(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function A(e) {
          return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, A(e);
        }
        function T() {
          return T = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, T.apply(this, arguments);
        }
        var I = (0, h.eA)("bidderFactory"),
          C = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];
        function w(e) {
          var n = Array.isArray(e.supportedMediaTypes) ? {
            supportedMediaTypes: e.supportedMediaTypes
          } : void 0;
          function t(e) {
            var t = O(e);
            i.ZP.registerBidAdapter(t, e.code, n);
          }
          t(e), Array.isArray(e.aliases) && e.aliases.forEach(function (n) {
            var r,
              o,
              a = n;
            (0, p.isPlainObject)(n) && (a = n.code, r = n.gvlid, o = n.skipPbsAliasing), i.ZP.aliasRegistry[a] = e.code, t(T({}, e, {
              code: a,
              gvlid: r,
              skipPbsAliasing: o
            }));
          });
        }
        function O(e) {
          return T(new r.Z(e.code), {
            getSpec: function () {
              return Object.freeze(e);
            },
            registerSyncs: n,
            callBids: function (r, c, u, s, l, g) {
              if (Array.isArray(r.bids)) {
                var v = {},
                  y = [],
                  b = r.bids.filter(t);
                if (0 !== b.length) {
                  var h = {};
                  b.forEach(function (e) {
                    h[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode);
                  }), B(e, b, r, s, g, {
                    onRequest: function (e) {
                      return f.emit(d.EVENTS.BEFORE_BIDDER_HTTP, r, e);
                    },
                    onResponse: function (n) {
                      l(e.code), y.push(n);
                    },
                    onError: function (n, t) {
                      l(e.code), i.ZP.callBidderError(e.code, t, r), f.emit(d.EVENTS.BIDDER_ERROR, {
                        error: t,
                        bidderRequest: r
                      }), (0, p.logError)("Server call for ".concat(e.code, " failed: ").concat(n, " ").concat(t.status, ". Continuing without bids."));
                    },
                    onBid: function (n) {
                      var t = h[n.requestId];
                      if (t) {
                        n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.meta = n.meta || T({}, n[t.bidder]);
                        var r = T((0, a.m)(d.STATUS.GOOD, t), n);
                        !function (e, n) {
                          v[e] = !0, k(e, n) && c(e, n);
                        }(t.adUnitCode, r);
                      } else (0, p.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."));
                    },
                    onCompletion: m
                  });
                } else m();
              }
              function m() {
                u(), o.vc.runWithBidder(e.code, function () {
                  f.emit(d.EVENTS.BIDDER_DONE, r), n(y, r.gdprConsent, r.uspConsent);
                });
              }
            }
          });
          function n(n, t, r) {
            U(e, n, t, r);
          }
          function t(n) {
            return !!e.isBidRequestValid(n) || ((0, p.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(n))), !1);
          }
        }
        var B = (0, b.z3)("sync", function (e, n, t, r, i, o) {
            var a = o.onRequest,
              c = o.onResponse,
              u = o.onError,
              s = o.onBid,
              d = o.onCompletion,
              f = e.buildRequests(n, t);
            if (f && 0 !== f.length) {
              Array.isArray(f) || (f = [f]);
              var l = (0, p.delayExecution)(d, f.length);
              f.forEach(function (n) {
                var t,
                  o = i(function (t, r) {
                    try {
                      t = JSON.parse(t);
                    } catch (e) {}
                    var i;
                    t = {
                      body: t,
                      headers: {
                        get: r.getResponseHeader.bind(r)
                      }
                    }, c(t);
                    try {
                      i = e.interpretResponse(t, n);
                    } catch (n) {
                      return (0, p.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, n), void l();
                    }
                    i && ((0, p.isArray)(i) ? i.forEach(s) : s(i)), l();
                  }),
                  d = i(function (e, n) {
                    u(e, n), l();
                  });
                switch (a(n), n.method) {
                  case "GET":
                    r("".concat(n.url).concat((t = n.data) ? "?".concat("object" === A(t) ? (0, p.parseQueryStringParameters)(t) : t) : ""), {
                      success: o,
                      error: d
                    }, void 0, T({
                      method: "GET",
                      withCredentials: !0
                    }, n.options));
                    break;
                  case "POST":
                    r(n.url, {
                      success: o,
                      error: d
                    }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), T({
                      method: "POST",
                      contentType: "text/plain",
                      withCredentials: !0
                    }, n.options));
                    break;
                  default:
                    (0, p.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(n.type, " must be GET or POST")), l();
                }
              });
            } else d();
          }, "processBidderRequests"),
          U = (0, b.z3)("async", function (e, n, t, r) {
            var a = o.vc.getConfig("userSync.aliasSyncEnabled");
            if (e.getUserSyncs && (a || !i.ZP.aliasRegistry[e.code])) {
              var u = o.vc.getConfig("userSync.filterSettings"),
                s = e.getUserSyncs({
                  iframeEnabled: !(!u || !u.iframe && !u.all),
                  pixelEnabled: !(!u || !u.image && !u.all)
                }, n, t, r);
              s && (Array.isArray(s) || (s = [s]), s.forEach(function (n) {
                c.k_.registerSync(n.type, e.code, n.url);
              }));
            }
          }, "registerSyncs");
        function _(e, n) {
          if (!o.vc.getConfig("adpod.brandCategoryExclusion")) return e.call(this, n);
          n.filter(function (e) {
            return (0, v.Z)(e, "mediaTypes.video.context") === y.Oh;
          }).map(function (e) {
            return e.bids.map(function (e) {
              return e.bidder;
            });
          }).reduce(p.flatten, []).filter(p.uniques).forEach(function (e) {
            var n = i.ZP.getBidAdapter(e);
            if (n.getSpec().getMappingFileInfo) {
              var t = n.getSpec().getMappingFileInfo(),
                r = t.refreshInDays ? t.refreshInDays : 1,
                o = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                a = I.getDataFromLocalStorage(o);
              try {
                (!(a = a ? JSON.parse(a) : void 0) || (0, p.timestamp)() > a.lastUpdated + 24 * r * 60 * 60 * 1e3) && (0, g.h)(t.url, {
                  success: function (n) {
                    try {
                      n = JSON.parse(n);
                      var t = {
                        lastUpdated: (0, p.timestamp)(),
                        mapping: n.mapping
                      };
                      I.setDataInLocalStorage(o, JSON.stringify(t));
                    } catch (n) {
                      (0, p.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
                    }
                  },
                  error: function () {
                    (0, p.logError)("Failed to load ".concat(e, " bidder translation file"));
                  }
                });
              } catch (n) {
                (0, p.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
              }
            }
          }), e.call(this, n);
        }
        function R(e, n) {
          var t = i.ZP.getBidAdapter(e);
          if (t.getSpec().getMappingFileInfo) {
            var r = t.getSpec().getMappingFileInfo(),
              o = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
              a = I.getDataFromLocalStorage(o);
            if (a) {
              try {
                a = JSON.parse(a);
              } catch (n) {
                (0, p.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"));
              }
              return a.mapping[n] ? a.mapping[n] : null;
            }
          }
        }
        function D(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = t.index,
            i = void 0 === r ? m.K.index : r;
          if ((n.width || 0 === parseInt(n.width, 10)) && (n.height || 0 === parseInt(n.height, 10))) return n.width = parseInt(n.width, 10), n.height = parseInt(n.height, 10), !0;
          var o = i.getBidRequest(n),
            a = i.getMediaTypes(n),
            c = o && o.sizes || a && a.banner && a.banner.sizes,
            u = (0, p.parseSizesInput)(c);
          if (1 === u.length) {
            var s = u[0].split("x"),
              d = E(s, 2),
              f = d[0],
              l = d[1];
            return n.width = parseInt(f, 10), n.height = parseInt(l, 10), !0;
          }
          return !1;
        }
        function k(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = t.index,
            i = void 0 === r ? m.K.index : r;
          function o() {
            var e = Object.keys(n);
            return C.every(function (t) {
              return (0, l.q9)(e, t) && !(0, l.q9)([void 0, null], n[t]);
            });
          }
          function a(e) {
            return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e);
          }
          return e ? n ? o() ? "native" !== n.mediaType || (0, u.r4)(n, {
            index: i
          }) ? "video" !== n.mediaType || (0, s.Dn)(n, {
            index: i
          }) ? !("banner" === n.mediaType && !D(e, n, {
            index: i
          }) && ((0, p.logError)(a("Banner bids require a width and height")), 1)) : ((0, p.logError)(a("Video bid does not have required vastUrl or renderer property")), !1) : ((0, p.logError)(a("Native bid missing some required properties.")), !1) : ((0, p.logError)(a("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1) : ((0, p.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : ((0, p.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
        }
        (0, b.v5)("checkAdUnitSetup").before(_);
      },
      6996: function (e, n, t) {
        "use strict";

        t.d(n, {
          B: function () {
            return c;
          }
        });
        var r = t(1879),
          i = t(9853),
          o = {},
          a = ["adloox", "criteo", "outstream", "adagio", "browsi", "brandmetrics", "justtag"];
        function c(e, n, t) {
          if (n && e) {
            if ((0, r.q9)(a, n)) return o[e] ? (t && "function" == typeof t && (o[e].loaded ? t() : o[e].callbacks.push(t)), o[e].tag) : (o[e] = {
              loaded: !1,
              tag: null,
              callbacks: []
            }, t && "function" == typeof t && o[e].callbacks.push(t), (0, i.logWarn)("module ".concat(n, " is loading external JavaScript")), function (n, t) {
              var r = document.createElement("script");
              return r.type = "text/javascript", r.async = !0, o[e].tag = r, r.readyState ? r.onreadystatechange = function () {
                "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, t());
              } : r.onload = function () {
                t();
              }, r.src = n, (0, i.insertElement)(r), r;
            }(e, function () {
              o[e].loaded = !0;
              try {
                for (var n = 0; n < o[e].callbacks.length; n++) o[e].callbacks[n]();
              } catch (e) {
                (0, i.logError)("Error executing callback", "adloader.js:loadExternalScript", e);
              }
            }));
            (0, i.logError)("".concat(n, " not whitelisted for loading external JavaScript"));
          } else (0, i.logError)("cannot load external script without url and moduleCode");
        }
      },
      5755: function (e, n, t) {
        "use strict";

        t.d(n, {
          O: function () {
            return u;
          },
          h: function () {
            return c;
          }
        });
        var r = t(8962),
          i = t(9853);
        function o() {
          return o = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, o.apply(this, arguments);
        }
        function a(e) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, a(e);
        }
        var c = u();
        function u() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.request,
            c = n.done;
          return function (n, u, s) {
            var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            try {
              var f,
                l = d.method || (s ? "POST" : "GET"),
                g = document.createElement("a");
              g.href = n;
              var p = "object" === a(u) && null !== u ? u : {
                success: function () {
                  (0, i.logMessage)("xhr success");
                },
                error: function (e) {
                  (0, i.logError)("xhr error", null, e);
                }
              };
              if ("function" == typeof u && (p.success = u), (f = new window.XMLHttpRequest()).onreadystatechange = function () {
                if (4 === f.readyState) {
                  "function" == typeof c && c(g.origin);
                  var e = f.status;
                  e >= 200 && e < 300 || 304 === e ? p.success(f.responseText, f) : p.error(f.statusText, f);
                }
              }, r.vc.getConfig("disableAjaxTimeout") || (f.ontimeout = function () {
                (0, i.logError)("  xhr timeout after ", f.timeout, "ms");
              }), "GET" === l && s) {
                var v = (0, i.parseUrl)(n, d);
                o(v.search, s), n = (0, i.buildUrl)(v);
              }
              f.open(l, n, !0), r.vc.getConfig("disableAjaxTimeout") || (f.timeout = e), d.withCredentials && (f.withCredentials = !0), (0, i._each)(d.customHeaders, function (e, n) {
                f.setRequestHeader(n, e);
              }), d.preflight && f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f.setRequestHeader("Content-Type", d.contentType || "text/plain"), "function" == typeof t && t(g.origin), "POST" === l && s ? f.send(s) : f.send();
            } catch (e) {
              (0, i.logError)("xhr construction", e), "object" === a(u) && null !== u && u.error(e);
            }
          };
        }
      },
      4892: function (e, n, t) {
        "use strict";

        t.d(n, {
          D$: function () {
            return N;
          },
          LX: function () {
            return W;
          },
          RH: function () {
            return q;
          },
          Yt: function () {
            return U;
          },
          Yw: function () {
            return T;
          },
          dg: function () {
            return M;
          },
          e0: function () {
            return _;
          },
          lU: function () {
            return k;
          },
          mv: function () {
            return I;
          },
          sq: function () {
            return D;
          },
          vO: function () {
            return B;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(5553),
          a = t(9017),
          c = t(905),
          u = t(4877),
          s = t(8962),
          d = t(7112),
          f = t(3494),
          l = t(1879),
          g = t(1929),
          p = t(8265),
          v = t(4766),
          y = t(9624);
        function b(e) {
          return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, b(e);
        }
        function h() {
          return h = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, h.apply(this, arguments);
        }
        var m = d.k_.syncUsers,
          E = t(7602).ZP,
          S = t(2319),
          A = t(5644),
          T = "inProgress",
          I = "completed";
        S.on(A.EVENTS.BID_ADJUSTMENT, function (e) {
          !function (e) {
            var n = e.bidderCode,
              t = e.cpm,
              i = y.S.get(n || null, "bidCpmAdjustment");
            if (i && "function" == typeof i) try {
              t = i(e.cpm, h({}, e));
            } catch (e) {
              (0, r.logError)("Error during bid adjustment", "bidmanager.js", e);
            }
            t >= 0 && (e.cpm = t);
          }(e);
        });
        var C = {},
          w = {},
          O = [];
        function B(e) {
          var n,
            t,
            i,
            o,
            a = e.adUnits,
            c = e.adUnitCodes,
            u = e.callback,
            d = e.cbTimeout,
            f = e.labels,
            g = e.auctionId,
            p = a,
            y = f,
            b = c,
            h = [],
            B = [],
            D = [],
            N = g || (0, r.generateUUID)(),
            x = u,
            q = d,
            M = [],
            G = new Set();
          function W() {
            return {
              auctionId: N,
              timestamp: n,
              auctionEnd: t,
              auctionStatus: i,
              adUnits: p,
              adUnitCodes: b,
              labels: y,
              bidderRequests: h,
              noBids: D,
              bidsReceived: B,
              winningBids: M,
              timeout: q
            };
          }
          function F(e, n) {
            if (n && clearTimeout(o), void 0 === t) {
              var c = [];
              e && ((0, r.logMessage)("Auction ".concat(N, " timedOut")), u = G, (c = h.map(function (e) {
                return (e.bids || []).filter(function (e) {
                  return !u.has(e.bidder);
                });
              }).reduce(r.flatten, []).map(function (e) {
                return {
                  bidId: e.bidId,
                  bidder: e.bidder,
                  adUnitCode: e.adUnitCode,
                  auctionId: e.auctionId
                };
              })).length && S.emit(A.EVENTS.BID_TIMEOUT, c)), i = I, t = Date.now(), S.emit(A.EVENTS.AUCTION_END, W()), R(p, function () {
                try {
                  if (null != x) {
                    var n = b,
                      t = B.filter(r.bind.call(r.adUnitsFilter, this, n)).reduce(z, {});
                    x.apply(pbjs, [t, e, N]), x = null;
                  }
                } catch (e) {
                  (0, r.logError)("Error executing bidsBackHandler", null, e);
                } finally {
                  c.length && E.callTimedOutBidders(a, c, q);
                  var i = s.vc.getConfig("userSync") || {};
                  i.enableOverride || m(i.syncDelay);
                }
              });
            }
            var u;
          }
          function L() {
            s.vc.resetBidder(), (0, r.logInfo)("Bids Received for Auction with id: ".concat(N), B), i = I, F(!1, !0);
          }
          function K(e) {
            G.add(e);
          }
          function V(e) {
            var n = this;
            e.forEach(function (e) {
              var n;
              n = e, h = h.concat(n);
            });
            var t = {},
              a = {
                bidRequests: e,
                run: function () {
                  var a, d;
                  a = F.bind(null, !0), d = setTimeout(a, q), o = d, i = T, S.emit(A.EVENTS.AUCTION_INIT, W());
                  var f = function (e, n) {
                    var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                      i = void 0 === t ? v.K.index : t,
                      o = 0,
                      a = !1,
                      c = new Set(),
                      u = {},
                      d = {};
                    function f(e, n) {
                      null == d[e] && (d[e] = Promise.resolve()), d[e] = d[e].then(function () {
                        return Promise.resolve(n).catch(function () {});
                      });
                    }
                    function g(e, t) {
                      var r = e.timeout;
                      (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                      var i = n.getAuctionStart() + r - Date.now(),
                        o = d[e.bidderRequestId],
                        a = d[""];
                      (null != o || null != a) && i > 0 ? Promise.race([new Promise(function (e) {
                        return setTimeout(e, i);
                      }), Promise.resolve(a).then(function () {
                        return o;
                      })]).then(t) : t();
                    }
                    function p() {
                      o--, a && 0 === o && e();
                    }
                    function y(e, t) {
                      u[t.requestId] = !0, o++;
                      var r = P({
                        adUnitCode: e,
                        bid: t,
                        auctionId: n.getAuctionId()
                      });
                      "video" === r.mediaType ? j(n, r, p) : (k(n, r), p());
                    }
                    function b() {
                      var t = n.getBidRequests(),
                        i = s.vc.getConfig("auctionOptions");
                      if (c.add(this), i && !(0, r.isEmpty)(i)) {
                        var d = i.secondaryBidders;
                        d && !t.every(function (e) {
                          return (0, l.q9)(d, e.bidderCode);
                        }) && (t = t.filter(function (e) {
                          return !(0, l.q9)(d, e.bidderCode);
                        }));
                      }
                      a = t.every(function (e) {
                        return c.has(e);
                      }), this.bids.forEach(function (e) {
                        u[e.bidId] || (n.addNoBid(e), S.emit(A.EVENTS.NO_BID, e));
                      }), a && 0 === o && e();
                    }
                    return {
                      addBidResponse: function (e, n) {
                        var t = i.getBidderRequest(n);
                        f(t && t.bidderRequestId || "", U.call({
                          dispatch: y
                        }, e, n));
                      },
                      adapterDone: function () {
                        g(this, b.bind(this));
                      }
                    };
                  }(L, n);
                  E.callBids(p, e, f.addBidResponse, f.adapterDone, {
                    request: function (e, n) {
                      u(C, n), u(t, e), w[e] || (w[e] = {
                        SRA: !0,
                        origin: n
                      }), t[e] > 1 && (w[e].SRA = !1);
                    },
                    done: function (e) {
                      C[e]--, O[0] && c(O[0]) && O.shift();
                    }
                  }, q, K);
                }
              };
            function c(e) {
              var n = !0,
                t = s.vc.getConfig("maxRequestsPerOrigin") || 4;
              return e.bidRequests.some(function (e) {
                var r = 1,
                  i = void 0 !== e.src && e.src === A.S2S.SRC ? "s2s" : e.bidderCode;
                return w[i] && (!1 === w[i].SRA && (r = Math.min(e.bids.length, t)), C[w[i].origin] + r > t && (n = !1)), !n;
              }), n && e.run(), n;
            }
            function u(e, n) {
              void 0 === e[n] ? e[n] = 1 : e[n]++;
            }
            c(a) || ((0, r.logWarn)("queueing auction due to limited endpoint capacity"), O.push(a));
          }
          return {
            addBidReceived: function (e) {
              B = B.concat(e);
            },
            addNoBid: function (e) {
              D = D.concat(e);
            },
            executeCallback: F,
            callBids: function () {
              i = "started", n = Date.now();
              var e = E.makeBidRequests(p, n, N, q, y);
              (0, r.logInfo)("Bids Requested for Auction with id: ".concat(N), e), e.length < 1 ? ((0, r.logWarn)("No valid bid requests returned for auction"), L()) : _.call({
                dispatch: V,
                context: this
              }, e);
            },
            addWinningBid: function (e) {
              M = M.concat(e), E.callBidWonBidder(e.bidder, e, a);
            },
            setBidTargeting: function (e) {
              E.callSetTargetingBidder(e.bidder, e);
            },
            getWinningBids: function () {
              return M;
            },
            getAuctionStart: function () {
              return n;
            },
            getTimeout: function () {
              return q;
            },
            getAuctionId: function () {
              return N;
            },
            getAuctionStatus: function () {
              return i;
            },
            getAdUnits: function () {
              return p;
            },
            getAdUnitCodes: function () {
              return b;
            },
            getBidRequests: function () {
              return h;
            },
            getBidsReceived: function () {
              return B;
            },
            getNoBids: function () {
              return D;
            }
          };
        }
        var U = (0, f.z3)("sync", function (e, n) {
            this.dispatch.call(null, e, n);
          }, "addBidResponse"),
          _ = (0, f.z3)("sync", function (e) {
            this.dispatch.call(this.context, e);
          }, "addBidderRequests"),
          R = (0, f.z3)("async", function (e, n) {
            n && n();
          }, "bidsBackCallback");
        function D(e, n) {
          n.timeToRespond > e.getTimeout() + s.vc.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function k(e, n) {
          var t, r, i;
          t = n, i = !0 === y.S.get(t.bidderCode, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0, t.bidderCode && (i || t.dealId) && (r = function (e, n) {
            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
              r = void 0 === t ? v.K.index : t;
            if (!n) return {};
            var i = r.getBidRequest(n),
              o = {},
              c = W(n.mediaType, e);
            return F(o, c, n, i), e && y.S.getOwn(e, A.JSON_MAPPING.ADSERVER_TARGETING) && (F(o, y.S.ownSettingsFor(e), n, i), n.sendStandardTargeting = y.S.get(e, "sendStandardTargeting")), n.native && (o = h({}, o, (0, a.Ur)(n))), o;
          }(t.bidderCode, t)), t.adserverTargeting = h(t.adserverTargeting || {}, r), S.emit(A.EVENTS.BID_RESPONSE, n), e.addBidReceived(n), D(e, n);
        }
        function j(e, n, t) {
          var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = o.index,
            c = void 0 === a ? v.K.index : a,
            u = !0,
            d = (0, i.Z)(c.getMediaTypes({
              requestId: n.originalRequestId || n.requestId,
              transactionId: n.transactionId
            }), "video"),
            f = d && (0, i.Z)(d, "context");
          s.vc.getConfig("cache.url") && f !== g.gZ && (!n.videoCacheKey || s.vc.getConfig("cache.ignoreBidderCacheKey") ? (u = !1, N(e, n, t, d)) : n.vastUrl || ((0, r.logError)("videoCacheKey specified but not required vastUrl for video bid"), u = !1)), u && (k(e, n), t());
        }
        var N = (0, f.z3)("async", function (e, n, t, i) {
          (0, c.h)([n], function (i, o) {
            i ? ((0, r.logWarn)("Failed to save to the video cache: ".concat(i, ". Video bid must be discarded.")), D(e, n)) : "" === o[0].uuid ? ((0, r.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), D(e, n)) : (n.videoCacheKey = o[0].uuid, n.vastUrl || (n.vastUrl = (0, c.z)(n.videoCacheKey)), k(e, n), t());
          });
        }, "callPrebidCache");
        function P(e) {
          var n = e.adUnitCode,
            t = e.bid,
            i = e.auctionId,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = a.index,
            d = void 0 === c ? v.K.index : c,
            f = d.getBidderRequest(t),
            l = f && f.start || t.requestTimestamp,
            g = h({}, t, {
              auctionId: i,
              responseTimestamp: (0, r.timestamp)(),
              requestTimestamp: l,
              cpm: parseFloat(t.cpm) || 0,
              bidder: t.bidderCode,
              adUnitCode: n
            });
          g.timeToRespond = g.responseTimestamp - g.requestTimestamp, S.emit(A.EVENTS.BID_ADJUSTMENT, g);
          var p = d.getAdUnit(g).renderer,
            y = g.mediaType,
            m = d.getMediaTypes(g),
            E = m && m[y],
            T = E && E.renderer,
            I = null;
          T && T.url && T.render && (!0 !== T.backupOnly || !t.renderer) ? I = T : p && p.url && p.render && (!0 !== p.backupOnly || !t.renderer) && (I = p), I && (g.renderer = u.Th.install({
            url: I.url
          }), g.renderer.setRender(I.render));
          var C = x(t.mediaType, m, s.vc.getConfig("mediaTypePriceGranularity")),
            w = (0, o.D)(g.cpm, "object" === b(C) ? C : s.vc.getConfig("customPriceBucket"), s.vc.getConfig("currency.granularityMultiplier"));
          return g.pbLg = w.low, g.pbMg = w.med, g.pbHg = w.high, g.pbAg = w.auto, g.pbDg = w.dense, g.pbCg = w.custom, g;
        }
        function x(e, n, t) {
          if (e && t) {
            if (e === p.pX) {
              var r = (0, i.Z)(n, "".concat(p.pX, ".context"), "instream");
              if (t["".concat(p.pX, "-").concat(r)]) return t["".concat(p.pX, "-").concat(r)];
            }
            return t[e];
          }
        }
        var q = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = n.index,
              r = void 0 === t ? v.K.index : t,
              i = x(e.mediaType, r.getMediaTypes(e), s.vc.getConfig("mediaTypePriceGranularity")),
              o = "string" == typeof e.mediaType && i ? "string" == typeof i ? i : "custom" : s.vc.getConfig("priceGranularity");
            return o;
          },
          M = function (e) {
            return function (n) {
              var t = e || q(n);
              return t === A.GRANULARITY_OPTIONS.AUTO ? n.pbAg : t === A.GRANULARITY_OPTIONS.DENSE ? n.pbDg : t === A.GRANULARITY_OPTIONS.LOW ? n.pbLg : t === A.GRANULARITY_OPTIONS.MEDIUM ? n.pbMg : t === A.GRANULARITY_OPTIONS.HIGH ? n.pbHg : t === A.GRANULARITY_OPTIONS.CUSTOM ? n.pbCg : void 0;
            };
          };
        function G(e, n) {
          return {
            key: e,
            val: "function" == typeof n ? function (e, t) {
              return n(e, t);
            } : function (e) {
              return (0, r.getValue)(e, n);
            }
          };
        }
        function W(e, n) {
          var t = A.TARGETING_KEYS,
            o = h({}, y.S.settingsFor(null));
          if (o[A.JSON_MAPPING.ADSERVER_TARGETING] || (o[A.JSON_MAPPING.ADSERVER_TARGETING] = function () {
            var e = A.TARGETING_KEYS;
            return [G(e.BIDDER, "bidderCode"), G(e.AD_ID, "adId"), G(e.PRICE_BUCKET, M()), G(e.SIZE, "size"), G(e.DEAL, "dealId"), G(e.SOURCE, "source"), G(e.FORMAT, "mediaType"), G(e.ADOMAIN, function (e) {
              return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : "";
            })];
          }()), "video" === e) {
            var a = o[A.JSON_MAPPING.ADSERVER_TARGETING].slice();
            if (o[A.JSON_MAPPING.ADSERVER_TARGETING] = a, [t.UUID, t.CACHE_ID].forEach(function (e) {
              void 0 === (0, l.sE)(a, function (n) {
                return n.key === e;
              }) && a.push(G(e, "videoCacheKey"));
            }), s.vc.getConfig("cache.url") && (!n || !1 !== y.S.get(n, "sendStandardTargeting"))) {
              var c = (0, r.parseUrl)(s.vc.getConfig("cache.url"));
              void 0 === (0, l.sE)(a, function (e) {
                return e.key === t.CACHE_HOST;
              }) && a.push(G(t.CACHE_HOST, function (e) {
                return (0, i.Z)(e, "adserverTargeting.".concat(t.CACHE_HOST)) ? e.adserverTargeting[t.CACHE_HOST] : c.hostname;
              }));
            }
          }
          return o;
        }
        function F(e, n, t, i) {
          var o = n[A.JSON_MAPPING.ADSERVER_TARGETING];
          return t.size = t.getSize(), (0, r._each)(o, function (o) {
            var a = o.key,
              c = o.val;
            if (e[a] && (0, r.logWarn)("The key: " + a + " is being overwritten"), (0, r.isFn)(c)) try {
              c = c(t, i);
            } catch (e) {
              (0, r.logError)("bidmanager", "ERROR", e);
            }
            (void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && a !== A.TARGETING_KEYS.DEAL || !(0, r.isEmptyStr)(c) && null != c ? e[a] = c : (0, r.logInfo)("suppressing empty key '" + a + "' from adserver targeting");
          }), e;
        }
        function z(e, n) {
          return e[n.adUnitCode] || (e[n.adUnitCode] = {
            bids: []
          }), e[n.adUnitCode].bids.push(n), e;
        }
      },
      4766: function (e, n, t) {
        "use strict";

        t.d(n, {
          K: function () {
            return s;
          }
        });
        var r = t(9853),
          i = t(4892),
          o = t(1879);
        function a() {
          return a = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, a.apply(this, arguments);
        }
        function c(e) {
          a(this, {
            getAuction: function (n) {
              var t = n.auctionId;
              if (null != t) return e().find(function (e) {
                return e.getAuctionId() === t;
              });
            },
            getAdUnit: function (n) {
              var t = n.transactionId;
              if (null != t) return e().flatMap(function (e) {
                return e.getAdUnits();
              }).find(function (e) {
                return e.transactionId === t;
              });
            },
            getMediaTypes: function (e) {
              var n = e.transactionId,
                t = e.requestId;
              if (null != t) {
                var r = this.getBidRequest({
                  requestId: t
                });
                if (null != r && (null == n || r.transactionId === n)) return r.mediaTypes;
              } else if (null != n) {
                var i = this.getAdUnit({
                  transactionId: n
                });
                if (null != i) return i.mediaTypes;
              }
            },
            getBidderRequest: function (n) {
              var t = n.requestId,
                r = n.bidderRequestId;
              if (null != t || null != r) {
                var i = e().flatMap(function (e) {
                  return e.getBidRequests();
                });
                return null != r && (i = i.filter(function (e) {
                  return e.bidderRequestId === r;
                })), null == t ? i[0] : i.find(function (e) {
                  return e.bids && null != e.bids.find(function (e) {
                    return e.bidId === t;
                  });
                });
              }
            },
            getBidRequest: function (n) {
              var t = n.requestId;
              if (null != t) return e().flatMap(function (e) {
                return e.getBidRequests();
              }).flatMap(function (e) {
                return e.bids;
              }).find(function (e) {
                return e && e.bidId === t;
              });
            }
          });
        }
        var u = t(5644),
          s = function () {
            var e = [],
              n = {
                addWinningBid: function (n) {
                  var t = (0, o.sE)(e, function (e) {
                    return e.getAuctionId() === n.auctionId;
                  });
                  t ? (n.status = u.BID_STATUS.RENDERED, t.addWinningBid(n)) : (0, r.logWarn)("Auction not found when adding winning bid");
                },
                getAllWinningBids: function () {
                  return e.map(function (e) {
                    return e.getWinningBids();
                  }).reduce(r.flatten, []);
                },
                getBidsRequested: function () {
                  return e.map(function (e) {
                    return e.getBidRequests();
                  }).reduce(r.flatten, []);
                },
                getNoBids: function () {
                  return e.map(function (e) {
                    return e.getNoBids();
                  }).reduce(r.flatten, []);
                },
                getBidsReceived: function () {
                  return e.map(function (e) {
                    if (e.getAuctionStatus() === i.mv) return e.getBidsReceived();
                  }).reduce(r.flatten, []).filter(function (e) {
                    return e;
                  });
                },
                getAllBidsForAdUnitCode: function (n) {
                  return e.map(function (e) {
                    return e.getBidsReceived();
                  }).reduce(r.flatten, []).filter(function (e) {
                    return e && e.adUnitCode === n;
                  });
                },
                getAdUnits: function () {
                  return e.map(function (e) {
                    return e.getAdUnits();
                  }).reduce(r.flatten, []);
                },
                getAdUnitCodes: function () {
                  return e.map(function (e) {
                    return e.getAdUnitCodes();
                  }).reduce(r.flatten, []).filter(r.uniques);
                },
                createAuction: function (n) {
                  var t = n.adUnits,
                    r = n.adUnitCodes,
                    o = n.callback,
                    a = n.cbTimeout,
                    c = n.labels,
                    u = n.auctionId,
                    s = (0, i.vO)({
                      adUnits: t,
                      adUnitCodes: r,
                      callback: o,
                      cbTimeout: a,
                      labels: c,
                      auctionId: u
                    });
                  return function (n) {
                    e.push(n);
                  }(s), s;
                },
                findBidByAdId: function (n) {
                  return (0, o.sE)(e.map(function (e) {
                    return e.getBidsReceived();
                  }).reduce(r.flatten, []), function (e) {
                    return e.adId === n;
                  });
                },
                getStandardBidderAdServerTargeting: function () {
                  return (0, i.LX)()[u.JSON_MAPPING.ADSERVER_TARGETING];
                },
                setStatusForBids: function (t, r) {
                  var i = n.findBidByAdId(t);
                  if (i && (i.status = r), i && r === u.BID_STATUS.BID_TARGETING_SET) {
                    var a = (0, o.sE)(e, function (e) {
                      return e.getAuctionId() === i.auctionId;
                    });
                    a && a.setBidTargeting(i);
                  }
                },
                getLastAuctionId: function () {
                  return e.length && e[e.length - 1].getAuctionId();
                },
                clearAllAuctions: function () {
                  e.length = 0;
                }
              };
            return n.index = new c(function () {
              return e;
            }), n;
          }();
      },
      9624: function (e, n, t) {
        "use strict";

        t.d(n, {
          S: function () {
            return f;
          }
        });
        var r = t(265),
          i = t(9853),
          o = t(2528);
        function a(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function c(e, n, t) {
          if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t;
        }
        var u = t(5644),
          s = new WeakSet();
        function d(e) {
          return null == e ? this.defaultScope : e;
        }
        var f = new (function () {
          function e(n, t) {
            var r, i;
            !function (e, n) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, e), function (e, n) {
              if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
            }(r = this, i = s), i.add(r), this.getSettings = n, this.defaultScope = t;
          }
          var n, t;
          return n = e, (t = [{
            key: "get",
            value: function (e, n) {
              var t = this.getOwn(e, n);
              return void 0 === t && (t = this.getOwn(null, n)), t;
            }
          }, {
            key: "getOwn",
            value: function (e, n) {
              return e = c(this, s, d).call(this, e), (0, r.Z)(this.getSettings(), "".concat(e, ".").concat(n));
            }
          }, {
            key: "getScopes",
            value: function () {
              var e = this;
              return Object.keys(this.getSettings()).filter(function (n) {
                return n !== e.defaultScope;
              });
            }
          }, {
            key: "settingsFor",
            value: function (e) {
              return (0, i.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e));
            }
          }, {
            key: "ownSettingsFor",
            value: function (e) {
              return e = c(this, s, d).call(this, e), this.getSettings()[e] || {};
            }
          }]) && a(n.prototype, t), Object.defineProperty(n, "prototype", {
            writable: !1
          }), e;
        }())(function () {
          return (0, o.R)().bidderSettings || {};
        }, u.JSON_MAPPING.BD_SETTING_STANDARD);
      },
      1477: function (e, n, t) {
        "use strict";

        t.d(n, {
          m: function () {
            return o;
          }
        });
        var r = t(9853);
        function i(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.src,
            i = void 0 === t ? "client" : t,
            o = n.bidder,
            a = void 0 === o ? "" : o,
            c = n.bidId,
            u = n.transactionId,
            s = n.auctionId,
            d = i,
            f = e || 0;
          function l() {
            switch (f) {
              case 0:
                return "Pending";
              case 1:
                return "Bid available";
              case 2:
                return "Bid returned empty or error response";
              case 3:
                return "Bid timed out";
            }
          }
          this.bidderCode = a, this.width = 0, this.height = 0, this.statusMessage = l(), this.adId = (0, r.getUniqueIdentifierStr)(), this.requestId = c, this.transactionId = u, this.auctionId = s, this.mediaType = "banner", this.source = d, this.getStatusCode = function () {
            return f;
          }, this.getSize = function () {
            return this.width + "x" + this.height;
          }, this.getIdentifiers = function () {
            return {
              src: this.source,
              bidder: this.bidderCode,
              bidId: this.requestId,
              transactionId: this.transactionId,
              auctionId: this.auctionId
            };
          };
        }
        function o(e, n) {
          return new i(e, n);
        }
      },
      8962: function (e, n, t) {
        "use strict";

        t.d(n, {
          FD: function () {
            return v;
          },
          vc: function () {
            return m;
          }
        });
        var r = t(5553),
          i = t(1879),
          o = t(9853),
          a = t(265),
          c = ["fpd"];
        function u(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n && (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })), t.push.apply(t, r);
          }
          return t;
        }
        function s(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function d(e) {
          return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, d(e);
        }
        function f() {
          return f = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, f.apply(this, arguments);
        }
        var l = t(5644),
          g = "TRUE" === (0, o.getParameterByName)(l.DEBUG_MODE).toUpperCase(),
          p = window.location.origin,
          v = "random",
          y = {};
        y[v] = !0, y.fixed = !0;
        var b = v,
          h = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
          },
          m = function () {
            var e,
              n,
              t,
              l = [],
              v = null;
            function m() {
              e = {};
              var a = {
                _debug: g,
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
                _publisherDomain: p,
                get publisherDomain() {
                  return this._publisherDomain;
                },
                set publisherDomain(e) {
                  this._publisherDomain = e;
                },
                _priceGranularity: h.MEDIUM,
                set priceGranularity(e) {
                  u(e) && ("string" == typeof e ? this._priceGranularity = c(e) ? e : h.MEDIUM : (0, o.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, (0, o.logMessage)("Using custom price granularity")));
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
                set mediaTypePriceGranularity(e) {
                  var n = this;
                  this._mediaTypePriceGranularity = Object.keys(e).reduce(function (t, r) {
                    return u(e[r]) ? "string" == typeof e ? t[r] = c(e[r]) ? e[r] : n._priceGranularity : (0, o.isPlainObject)(e) && (t[r] = e[r], (0, o.logMessage)("Using custom price granularity for ".concat(r))) : (0, o.logWarn)("Invalid price granularity for media type: ".concat(r)), t;
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
                _bidderSequence: b,
                get bidderSequence() {
                  return this._bidderSequence;
                },
                set bidderSequence(e) {
                  y[e] ? this._bidderSequence = e : (0, o.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
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
                _maxNestedIframes: 10,
                get maxNestedIframes() {
                  return this._maxNestedIframes;
                },
                set maxNestedIframes(e) {
                  this._maxNestedIframes = e;
                },
                _auctionOptions: {},
                get auctionOptions() {
                  return this._auctionOptions;
                },
                set auctionOptions(e) {
                  (function (e) {
                    if (!(0, o.isPlainObject)(e)) return (0, o.logWarn)("Auction Options must be an object"), !1;
                    for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                      var r = t[n];
                      if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return (0, o.logWarn)("Auction Options given an incorrect param: ".concat(r)), !1;
                      if ("secondaryBidders" === r) {
                        if (!(0, o.isArray)(e[r])) return (0, o.logWarn)("Auction Options ".concat(r, " must be of type Array")), !1;
                        if (!e[r].every(o.isStr)) return (0, o.logWarn)("Auction Options ".concat(r, " must be only string")), !1;
                      } else if ("suppressStaleRender" === r && !(0, o.isBoolean)(e[r])) return (0, o.logWarn)("Auction Options ".concat(r, " must be of type boolean")), !1;
                    }
                    return !0;
                  })(e) && (this._auctionOptions = e);
                }
              };
              function c(e) {
                return (0, i.sE)(Object.keys(h), function (n) {
                  return e === h[n];
                });
              }
              function u(e) {
                if (!e) return (0, o.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) c(e) || (0, o.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if ((0, o.isPlainObject)(e) && !(0, r.t)(e)) return (0, o.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0;
              }
              n && C(Object.keys(n).reduce(function (e, t) {
                return n[t] !== a[t] && (e[t] = a[t] || {}), e;
              }, {})), n = a, t = {};
            }
            function E() {
              if (v && t && (0, o.isPlainObject)(t[v])) {
                var e = t[v],
                  r = new Set(Object.keys(n).concat(Object.keys(e)));
                return (0, i.Oc)(r).reduce(function (t, r) {
                  return void 0 === e[r] ? t[r] = n[r] : void 0 === n[r] ? t[r] = e[r] : (0, o.isPlainObject)(e[r]) ? t[r] = (0, o.mergeDeep)({}, n[r], e[r]) : t[r] = e[r], t;
                }, {});
              }
              return f({}, n);
            }
            function S(e) {
              var n = {};
              return Object.keys(e).forEach(function (t) {
                var r = "context" === t ? "site" : t;
                n[r] = "site" === r || "user" === r ? Object.keys(e[t]).reduce(function (n, r) {
                  return "data" === r ? (0, o.mergeDeep)(n, {
                    ext: {
                      data: e[t][r]
                    }
                  }) : (0, o.mergeDeep)(n, s({}, r, e[t][r])), n;
                }, {}) : e[t];
              }), n;
            }
            function A(e) {
              var n = {};
              return Object.keys(e).filter(function (e) {
                return "context" === e;
              }).forEach(function (t) {
                Object.keys(e[t]).forEach(function (r) {
                  "data" === r ? (0, o.mergeDeep)(n, {
                    ext: {
                      data: e[t][r]
                    }
                  }) : "object" !== d(e[t][r]) || Array.isArray(e[t][r]) ? (0, o.mergeDeep)(n, {
                    ext: {
                      data: s({}, r.toLowerCase(), e[t][r])
                    }
                  }) : Object.keys(e[t][r]).forEach(function (i) {
                    (0, o.mergeDeep)(n, {
                      ext: {
                        data: s({}, r.toLowerCase(), s({}, i.toLowerCase(), e[t][r][i]))
                      }
                    });
                  });
                });
              }), n;
            }
            function T(t) {
              if ((0, o.isPlainObject)(t)) {
                var r = Object.keys(t),
                  i = {};
                r.forEach(function (r) {
                  var a = "fpd" === r ? "ortb2" : r,
                    c = "fpd" === r ? S(t[r]) : t[r];
                  (0, o.isPlainObject)(e[a]) && (0, o.isPlainObject)(c) && (c = f({}, e[a], c)), i[a] = n[a] = c;
                }), C(i);
              } else (0, o.logError)("setConfig options must be an object");
            }
            function I(e, n) {
              var t = n;
              if ("string" != typeof e && (t = e, e = "*"), "function" == typeof t) {
                var r = {
                  topic: e,
                  callback: t
                };
                return l.push(r), function () {
                  l.splice(l.indexOf(r), 1);
                };
              }
              (0, o.logError)("listener must be a function");
            }
            function C(e) {
              var n = Object.keys(e);
              l.filter(function (e) {
                return (0, i.q9)(n, e.topic);
              }).forEach(function (n) {
                n.callback(s({}, n.topic, e[n.topic]));
              }), l.filter(function (e) {
                return "*" === e.topic;
              }).forEach(function (n) {
                return n.callback(e);
              });
            }
            function w(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                r(e), e.bidders.forEach(function (r) {
                  t[r] || (t[r] = {}), Object.keys(e.config).forEach(function (i) {
                    var a = "fpd" === i ? "ortb2" : i,
                      c = "fpd" === i ? S(e.config[i]) : e.config[i];
                    if ((0, o.isPlainObject)(c)) {
                      var u = n ? o.mergeDeep : Object.assign;
                      t[r][a] = u({}, t[r][a] || {}, c);
                    } else t[r][a] = c;
                  });
                });
              } catch (e) {
                (0, o.logError)(e);
              }
              function r(e) {
                if (!(0, o.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                if (!(0, o.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object";
              }
            }
            function O(e, n) {
              v = e;
              try {
                return n();
              } finally {
                B();
              }
            }
            function B() {
              v = null;
            }
            return m(), {
              getCurrentBidder: function () {
                return v;
              },
              resetBidder: B,
              getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                  var e = arguments.length <= 0 ? void 0 : arguments[0];
                  return e ? (0, a.Z)(E(), e) : E();
                }
                return I.apply(void 0, arguments);
              },
              readConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                  var e = arguments.length <= 0 ? void 0 : arguments[0],
                    n = (0, o.deepClone)(E());
                  return e ? (0, a.Z)(n, e) : n;
                }
                return I.apply(void 0, arguments);
              },
              setConfig: T,
              mergeConfig: function (e) {
                if ((0, o.isPlainObject)(e)) {
                  var n = Object.keys(e).reduce(function (n, t) {
                    var r = E()[t] || {};
                    return n[t] = (0, o.mergeDeep)(r, e[t]), n;
                  }, {});
                  return T(function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {};
                      n % 2 ? u(Object(t), !0).forEach(function (n) {
                        s(e, n, t[n]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      });
                    }
                    return e;
                  }({}, n)), n;
                }
                (0, o.logError)("mergeConfig input must be an object");
              },
              setDefaults: function (t) {
                (0, o.isPlainObject)(e) ? (f(e, t), f(n, t)) : (0, o.logError)("defaults must be an object");
              },
              resetConfig: m,
              runWithBidder: O,
              callbackWithBidder: function (e) {
                return function (n) {
                  return function () {
                    if ("function" == typeof n) {
                      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                      return O(e, o.bind.call.apply(o.bind, [n, this].concat(r)));
                    }
                    (0, o.logWarn)("config.callbackWithBidder callback is not a function");
                  };
                };
              },
              setBidderConfig: w,
              getBidderConfig: function () {
                return t;
              },
              mergeBidderConfig: function (e) {
                return w(e, !0);
              },
              convertAdUnitFpd: function (e) {
                var n = [];
                return e.forEach(function (e) {
                  var t;
                  e.fpd ? (e.ortb2Imp ? (0, o.mergeDeep)(e.ortb2Imp, A(e.fpd)) : e.ortb2Imp = A(e.fpd), n.push(((t = e).fpd, function (e, n) {
                    if (null == e) return {};
                    var t,
                      r,
                      i = function (e, n) {
                        if (null == e) return {};
                        var t,
                          r,
                          i = {},
                          o = Object.keys(e);
                        for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                        return i;
                      }(e, n);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
                    }
                    return i;
                  }(t, c)))) : n.push(e);
                }), n;
              },
              getLegacyFpd: function (e) {
                if ("object" === d(e)) {
                  var n = {};
                  return Object.keys(e).forEach(function (t) {
                    var r = "site" === t ? "context" : t;
                    n[r] = "context" === r || "user" === r ? Object.keys(e[t]).filter(function (e) {
                      return "data" !== e;
                    }).reduce(function (n, r) {
                      return "ext" === r ? (0, o.mergeDeep)(n, e[t][r]) : (0, o.mergeDeep)(n, s({}, r, e[t][r])), n;
                    }, {}) : e[t];
                  }), n;
                }
              },
              getLegacyImpFpd: function (e) {
                if ("object" === d(e)) {
                  var n = {};
                  return (0, a.Z)(e, "ext.data") && Object.keys(e.ext.data).forEach(function (t) {
                    "pbadslot" === t ? (0, o.mergeDeep)(n, {
                      context: {
                        pbAdSlot: e.ext.data[t]
                      }
                    }) : "adserver" === t ? (0, o.mergeDeep)(n, {
                      context: {
                        adServer: e.ext.data[t]
                      }
                    }) : (0, o.mergeDeep)(n, {
                      context: {
                        data: s({}, t, e.ext.data[t])
                      }
                    });
                  }), n;
                }
              }
            };
          }();
      },
      5553: function (e, n, t) {
        "use strict";

        t.d(n, {
          D: function () {
            return d;
          },
          t: function () {
            return l;
          }
        });
        var r = t(1879),
          i = t(9853),
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
        function d(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = parseFloat(e);
          return isNaN(r) && (r = ""), {
            low: "" === r ? "" : f(e, o, t),
            med: "" === r ? "" : f(e, a, t),
            high: "" === r ? "" : f(e, c, t),
            auto: "" === r ? "" : f(e, s, t),
            dense: "" === r ? "" : f(e, u, t),
            custom: "" === r ? "" : f(e, n, t)
          };
        }
        function f(e, n, t) {
          var i = "";
          if (!l(n)) return i;
          var o = n.buckets.reduce(function (e, n) {
              return e.max > n.max ? e : n;
            }, {
              max: 0
            }),
            a = 0,
            c = (0, r.sE)(n.buckets, function (n) {
              if (e > o.max * t) {
                var r = n.precision;
                void 0 === r && (r = 2), i = (n.max * t).toFixed(r);
              } else {
                if (e <= n.max * t && e >= a * t) return n.min = a, n;
                a = n.max;
              }
            });
          return c && (i = function (e, n, t) {
            var r = void 0 !== n.precision ? n.precision : 2,
              i = n.increment * t,
              o = n.min * t,
              a = Math.pow(10, r + 2),
              c = (e * a - o * a) / (i * a),
              u = Math.floor(c) * i + o;
            return (u = Number(u.toFixed(10))).toFixed(r);
          }(e, c, t)), i;
        }
        function l(e) {
          if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
          var n = !0;
          return e.buckets.forEach(function (e) {
            e.max && e.increment || (n = !1);
          }), n;
        }
      },
      3636: function (e, n, t) {
        "use strict";

        t.d(n, {
          $8: function () {
            return A;
          },
          JI: function () {
            return l;
          },
          gF: function () {
            return g;
          },
          wt: function () {
            return T;
          }
        });
        var r,
          i,
          o = t(8962),
          a = t(4892),
          c = t(3494),
          u = (0, t(9853).prefixLog)("DEBUG:"),
          s = u.logWarn,
          d = u.logMessage,
          f = "pbjs:debugging",
          l = [function (e) {
            p(), function (e) {
              r = E.bind(e), a.Yt.before(r, 5), i = S.bind(e), a.e0.before(i, 5);
            }(e);
          }],
          g = [p];
        function p() {
          a.Yt.getHooks({
            hook: r
          }).remove(), a.e0.getHooks({
            hook: i
          }).remove();
        }
        function v(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          o.vc.setConfig({
            debug: !0
          }), l.forEach(function (n) {
            return n(e);
          }), d("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function y() {
          g.forEach(function (e) {
            return e();
          }), d("bidder overrides disabled");
        }
        function b(e, n, t) {
          return !(!e.bidder || e.bidder === n) || !(!e.adUnitCode || e.adUnitCode === t);
        }
        function h(e, n) {
          return Array.isArray(e) && -1 === e.indexOf(n);
        }
        function m(e, n, t) {
          return Object.keys(e).filter(function (e) {
            return -1 === ["adUnitCode", "bidder"].indexOf(e);
          }).reduce(function (n, r) {
            return d("bidder overrides changed '".concat(n.adUnitCode, "/").concat(n.bidderCode, "' ").concat(t, ".").concat(r, " from '").concat(n[r], ".js' to '").concat(e[r], "'")), n[r] = e[r], n.isDebug = !0, n;
          }, n);
        }
        function E(e, n, t) {
          var r = this;
          h(r.bidders, t.bidderCode) ? s("bidder '".concat(t.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(r.bids) && r.bids.forEach(function (e) {
            b(e, t.bidderCode, n) || m(e, t, "bidder");
          }), e(n, t));
        }
        function S(e, n) {
          var t = this,
            r = n.filter(function (e) {
              return !h(t.bidders, e.bidderCode) || (s("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
            });
          Array.isArray(t.bidRequests) && r.forEach(function (e) {
            t.bidRequests.forEach(function (n) {
              e.bids.forEach(function (t) {
                b(n, e.bidderCode, t.adUnitCode) || m(n, t, "bidRequest");
              });
            });
          }), e(r);
        }
        var A = (0, c.z3)("sync", function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.sessionStorage,
            r = void 0 === t ? window.sessionStorage : t;
          if (e.enabled) try {
            r.setItem(f, JSON.stringify(e));
          } catch (e) {} else try {
            r.removeItem(f);
          } catch (e) {}
        });
        function T(e) {
          var n;
          try {
            e = e || window.sessionStorage, n = JSON.parse(e.getItem(f));
          } catch (e) {}
          n && v(n, !0);
        }
        o.vc.getConfig("debugging", function (e) {
          return function (e) {
            var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).sessionStorage,
              t = void 0 === n ? window.sessionStorage : n;
            A(e, {
              sessionStorage: t
            }), e.enabled ? v(e) : y();
          }(e.debugging);
        });
      },
      2319: function (e, n, t) {
        "use strict";

        function r() {
          return r = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, r.apply(this, arguments);
        }
        t.r(n), t.d(n, {
          emit: function () {
            return y;
          },
          get: function () {
            return p;
          },
          getEvents: function () {
            return v;
          },
          off: function () {
            return g;
          },
          on: function () {
            return l;
          }
        });
        var i = t(9853),
          o = t(5644),
          a = Array.prototype.slice,
          c = Array.prototype.push,
          u = i._map(o.EVENTS, function (e) {
            return e;
          }),
          s = o.EVENT_ID_PATHS,
          d = [],
          f = function () {
            var e = {},
              n = {};
            function t(n, t) {
              i.logMessage("Emitting event for: " + n);
              var r = t[0] || {},
                o = r[s[n]],
                a = e[n] || {
                  que: []
                },
                u = i._map(a, function (e, n) {
                  return n;
                }),
                f = [];
              d.push({
                eventType: n,
                args: r,
                id: o,
                elapsedTime: i.getPerformanceNow()
              }), o && i.contains(u, o) && c.apply(f, a[o].que), c.apply(f, a.que), i._each(f, function (e) {
                if (e) try {
                  e.apply(null, t);
                } catch (e) {
                  i.logError("Error executing handler:", "events.js", e);
                }
              });
            }
            return n.on = function (n, t, r) {
              if (function (e) {
                return i.contains(u, e);
              }(n)) {
                var o = e[n] || {
                  que: []
                };
                r ? (o[r] = o[r] || {
                  que: []
                }, o[r].que.push(t)) : o.que.push(t), e[n] = o;
              } else i.logError("Wrong event name : " + n + " Valid event names :" + u);
            }, n.emit = function (e) {
              var n = a.call(arguments, 1);
              t(e, n);
            }, n.off = function (n, t, r) {
              var o = e[n];
              i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, function (e) {
                var n = o[r].que;
                e === t && n.splice(n.indexOf(e), 1);
              }) : i._each(o.que, function (e) {
                var n = o.que;
                e === t && n.splice(n.indexOf(e), 1);
              }), e[n] = o);
            }, n.get = function () {
              return e;
            }, n.getEvents = function () {
              var e = [];
              return i._each(d, function (n) {
                var t = r({}, n);
                e.push(t);
              }), e;
            }, n;
          }(),
          l = f.on,
          g = f.off,
          p = f.get,
          v = f.getEvents,
          y = f.emit;
      },
      3494: function (e, n, t) {
        "use strict";

        t.d(n, {
          Bx: function () {
            return l;
          },
          bA: function () {
            return f;
          },
          o0: function () {
            return s;
          },
          v5: function () {
            return u;
          },
          z3: function () {
            return c;
          }
        });
        var r = t(1432),
          i = t.n(r);
        function o(e) {
          return function (e) {
            if (Array.isArray(e)) return a(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return a(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, n) : void 0;
            }
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function a(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var c = i()({
            ready: i().SYNC | i().ASYNC | i().QUEUE
          }),
          u = c.get;
        function s(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
            r = e.getHooks({
              hook: n
            });
          0 === r.length && e.before(n, t);
        }
        var d = {};
        function f(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = t.postInstallAllowed,
            i = void 0 !== r && r;
          c("async", function (t) {
            t.forEach(function (e) {
              return n.apply(void 0, o(e));
            }), i && (d[e] = n);
          }, e)([]);
        }
        function l(e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          var i = d[e];
          if (i) return i.apply(void 0, t);
          u(e).before(function (e, n) {
            n.push(t), e(n);
          });
        }
      },
      8265: function (e, n, t) {
        "use strict";

        t.d(n, {
          B5: function () {
            return r;
          },
          Mk: function () {
            return o;
          },
          Oh: function () {
            return a;
          },
          pX: function () {
            return i;
          }
        });
        var r = "native",
          i = "video",
          o = "banner",
          a = "adpod";
      },
      9017: function (e, n, t) {
        "use strict";

        t.d(n, {
          Fb: function () {
            return v;
          },
          JL: function () {
            return E;
          },
          Sg: function () {
            return l;
          },
          Ur: function () {
            return h;
          },
          e6: function () {
            return b;
          },
          eK: function () {
            return m;
          },
          r4: function () {
            return y;
          },
          xc: function () {
            return g;
          }
        });
        var r = t(265),
          i = t(9853),
          o = t(1879),
          a = t(4766);
        function c(e) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, c(e);
        }
        function u(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n && (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })), t.push.apply(t, r);
          }
          return t;
        }
        function s(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? u(Object(t), !0).forEach(function (n) {
              d(e, n, t[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
            });
          }
          return e;
        }
        function d(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        var f = t(5644),
          l = [],
          g = Object.keys(f.NATIVE_KEYS).map(function (e) {
            return f.NATIVE_KEYS[e];
          }),
          p = {
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
        function v(e) {
          e.forEach(function (e) {
            var n,
              t,
              a = e.nativeParams || (0, r.Z)(e, "mediaTypes.native");
            a && (e.nativeParams = (n = a) && n.type && ((t = n.type) && (0, o.q9)(Object.keys(p), t) || ((0, i.logError)("".concat(t, " nativeParam is not supported")), 0)) ? p[n.type] : n);
          });
        }
        function y(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.index,
            i = void 0 === t ? a.K.index : t;
          if (!(0, r.Z)(e, "native.clickUrl")) return !1;
          var c = i.getAdUnit(e).nativeParams;
          if (!c) return !0;
          var u = Object.keys(c).filter(function (e) {
              return c[e].required;
            }),
            s = Object.keys(e.native).filter(function (n) {
              return e.native[n];
            });
          return u.every(function (e) {
            return (0, o.q9)(s, e);
          });
        }
        function b(e, n) {
          var t;
          return "click" === e.action ? t = n.native && n.native.clickTrackers : (t = n.native && n.native.impressionTrackers, n.native && n.native.javascriptTrackers && (0, i.insertHtmlIntoIframe)(n.native.javascriptTrackers)), (t || []).forEach(i.triggerPixel), e.action;
        }
        function h(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.index,
            i = void 0 === t ? a.K.index : t,
            o = {},
            c = i.getAdUnit(e);
          (0, r.Z)(c, "nativeParams.rendererUrl") ? e.native.rendererUrl = S(c.nativeParams.rendererUrl) : (0, r.Z)(c, "nativeParams.adTemplate") && (e.native.adTemplate = S(c.nativeParams.adTemplate));
          var u = !1 !== (0, r.Z)(c, "nativeParams.sendTargetingKeys"),
            d = A(c),
            f = s(s({}, e.native), e.native.ext);
          return delete f.ext, Object.keys(f).forEach(function (n) {
            var t = d[n],
              i = S(e.native[n]) || S((0, r.Z)(e, "native.ext.".concat(n)));
            if ("adTemplate" !== n && t && i) {
              var a = (0, r.Z)(c, "nativeParams.".concat(n, ".sendId"));
              "boolean" != typeof a && (a = (0, r.Z)(c, "nativeParams.ext.".concat(n, ".sendId"))), a && (i = "".concat(t, ":").concat(e.adId));
              var s = (0, r.Z)(c, "nativeParams.".concat(n, ".sendTargetingKeys"));
              "boolean" != typeof s && (s = (0, r.Z)(c, "nativeParams.ext.".concat(n, ".sendTargetingKeys"))), ("boolean" == typeof s ? s : u) && (o[t] = i);
            }
          }), o;
        }
        function m(e, n) {
          var t = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
          };
          return n.native.hasOwnProperty("adTemplate") && (t.adTemplate = S(n.native.adTemplate)), n.native.hasOwnProperty("rendererUrl") && (t.rendererUrl = S(n.native.rendererUrl)), e.assets.forEach(function (e) {
            var r = (0, i.getKeyByValue)(f.NATIVE_KEYS, e),
              o = S(n.native[r]);
            t.assets.push({
              key: r,
              value: o
            });
          }), t;
        }
        function E(e, n) {
          var t = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
          };
          return Object.keys(n.native).forEach(function (e, r) {
            if ("adTemplate" === e && n.native[e]) t.adTemplate = S(n.native[e]);else if ("rendererUrl" === e && n.native[e]) t.rendererUrl = S(n.native[e]);else if ("ext" === e) Object.keys(n.native[e]).forEach(function (r) {
              if (n.native[e][r]) {
                var i = S(n.native[e][r]);
                t.assets.push({
                  key: r,
                  value: i
                });
              }
            });else if (n.native[e] && f.NATIVE_KEYS.hasOwnProperty(e)) {
              var i = S(n.native[e]);
              t.assets.push({
                key: e,
                value: i
              });
            }
          }), t;
        }
        function S(e) {
          return "object" === c(e) && e.url ? e.url : e;
        }
        function A(e) {
          var n = {};
          return (0, r.Z)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach(function (e) {
            n[e] = "hb_native_".concat(e);
          }), s(s({}, f.NATIVE_KEYS), n);
        }
      },
      1879: function (e, n, t) {
        "use strict";

        function r(e, n, t) {
          return e && e.includes(n, t) || !1;
        }
        function i() {
          return Array.from.apply(Array, arguments);
        }
        function o(e, n, t) {
          return e && e.find(n, t);
        }
        function a(e, n, t) {
          return e && e.findIndex(n, t);
        }
        t.d(n, {
          Oc: function () {
            return i;
          },
          cx: function () {
            return a;
          },
          q9: function () {
            return r;
          },
          sE: function () {
            return o;
          }
        });
      },
      2786: function (e, n, t) {
        "use strict";

        t.d(n, {
          zh: function () {
            return oe;
          },
          O5: function () {
            return ae;
          }
        });
        var r = t(2528),
          i = t(9853),
          o = t(265),
          a = t(2319),
          c = t(9017),
          u = t(5644),
          s = t(4766),
          d = t(1879),
          f = t(4877),
          l = t(8962),
          g = u.EVENTS,
          p = g.AD_RENDER_FAILED,
          v = g.AD_RENDER_SUCCEEDED;
        function y(e) {
          var n = e.reason,
            t = e.message,
            r = e.bid,
            o = e.id,
            c = {
              reason: n,
              message: t
            };
          r && (c.bid = r), o && (c.adId = o), (0, i.logError)(t), a.emit(p, c);
        }
        function b(e) {
          var n = e.doc,
            t = e.bid,
            r = e.id,
            i = {
              doc: n
            };
          t && (i.bid = t), r && (i.adId = r), a.emit(v, i);
        }
        var h = u.EVENTS.BID_WON,
          m = u.EVENTS.STALE_RENDER,
          E = {
            "Prebid Request": function (e, n, t) {
              if (null != t) {
                if (t.status !== u.BID_STATUS.RENDERED || ((0, i.logWarn)("Ad id ".concat(t.adId, " has been rendered before")), a.emit(m, t), !(0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender"))) {
                  try {
                    !function (e, n) {
                      var t = e.adId,
                        r = e.ad,
                        o = e.adUrl,
                        a = e.width,
                        c = e.height,
                        u = e.renderer,
                        s = e.cpm,
                        d = e.originalCpm;
                      (0, f.Pd)(u) ? (0, f._U)(u, e) : t && (A(e), n({
                        message: "Prebid Response",
                        ad: (0, i.replaceAuctionPrice)(r, d || s),
                        adUrl: (0, i.replaceAuctionPrice)(o, d || s),
                        adId: t,
                        width: a,
                        height: c
                      }));
                    }(t, e);
                  } catch (e) {
                    return void y({
                      reason: u.AD_RENDER_FAILED_REASON.EXCEPTION,
                      message: e.message,
                      id: n.adId,
                      bid: t
                    });
                  }
                  s.K.addWinningBid(t), a.emit(h, t);
                }
              } else y({
                reason: u.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
                message: "Cannot find ad '".concat(n.adId, "' for cross-origin render request"),
                id: n.adId
              });
            },
            "Prebid Native": function (e, n, t) {
              if (null != t) switch (n.action) {
                case "assetRequest":
                  e((0, c.eK)(n, t));
                  break;
                case "allAssetRequest":
                  e((0, c.JL)(n, t));
                  break;
                case "resizeNativeHeight":
                  t.height = n.height, t.width = n.width, A(t);
                  break;
                default:
                  if ("click" === (0, c.e6)(n, t)) return;
                  s.K.addWinningBid(t), a.emit(h, t);
              } else (0, i.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
            },
            "Prebid Event": function (e, n, t) {
              if (null != t) {
                if (t.status === u.BID_STATUS.RENDERED) switch (n.event) {
                  case u.EVENTS.AD_RENDER_FAILED:
                    y({
                      bid: t,
                      id: n.adId,
                      reason: n.info.reason,
                      message: n.info.message
                    });
                    break;
                  case u.EVENTS.AD_RENDER_SUCCEEDED:
                    b({
                      doc: null,
                      bid: t,
                      id: n.adId
                    });
                    break;
                  default:
                    (0, i.logError)("Received x-origin event request for unsupported event: '".concat(n.event, "' (adId: '").concat(n.adId, "')"));
                } else (0, i.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId, "'"));
              } else (0, i.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
            }
          };
        function S(e) {
          var n = e.message ? "message" : "data",
            t = {};
          try {
            t = JSON.parse(e[n]);
          } catch (e) {
            return;
          }
          if (t && t.adId && t.message) {
            var r = (0, d.sE)(s.K.getBidsReceived(), function (e) {
              return e.adId === t.adId;
            });
            E.hasOwnProperty(t.message) && E[t.message](function (e) {
              return null == e.origin && 0 === e.ports.length ? function () {
                var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                throw (0, i.logError)(e), new Error(e);
              } : e.ports.length > 0 ? function (n) {
                e.ports[0].postMessage(JSON.stringify(n));
              } : function (n) {
                e.source.postMessage(JSON.stringify(n), e.origin);
              };
            }(e), t, r);
          }
        }
        function A(e) {
          var n = e.adId,
            t = e.adUnitCode,
            r = e.width,
            o = e.height;
          ["div", "iframe"].forEach(function (e) {
            var a = function (e) {
              var r = function (e, n) {
                  return (0, i.isGptPubadsDefined)() ? function (e) {
                    var n = (0, d.sE)(window.googletag.pubads().getSlots(), function (n) {
                      return (0, d.sE)(n.getTargetingKeys(), function (t) {
                        return (0, d.q9)(n.getTargeting(t), e);
                      });
                    });
                    return n ? n.getSlotElementId() : null;
                  }(e) : (0, i.isApnGetTagDefined)() ? function (e) {
                    var n = window.apntag.getTag(e);
                    return n && n.targetId;
                  }(n) : n;
                }(n, t),
                o = document.getElementById(r);
              return o && o.querySelector(e);
            }(e + ':not([style*="display: none"])');
            if (a) {
              var c = a.style;
              c.width = r + "px", c.height = o + "px";
            } else (0, i.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
          });
        }
        var T = t(7112),
          I = t(9742),
          C = t(3494),
          w = t(3636),
          O = t(7263),
          B = t(1477),
          U = t(5849),
          _ = t(7602);
        function R(e) {
          return function (e) {
            if (Array.isArray(e)) return D(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return D(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? D(e, n) : void 0;
            }
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function D(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function k() {
          return k = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, k.apply(this, arguments);
        }
        var j = (0, r.R)(),
          N = t(5644),
          P = t(7602).ZP,
          x = t(2319),
          q = T.k_.triggerUserSyncs,
          M = N.EVENTS,
          G = M.ADD_AD_UNITS,
          W = M.BID_WON,
          F = M.REQUEST_BIDS,
          z = M.SET_TARGETING,
          L = M.STALE_RENDER,
          K = N.AD_RENDER_FAILED_REASON,
          V = K.PREVENT_WRITING_ON_MAIN_DOCUMENT,
          H = K.NO_AD,
          Z = K.EXCEPTION,
          Y = K.CANNOT_FIND_AD,
          J = K.MISSING_DOC_OR_ADID,
          Q = {
            bidWon: function (e) {
              var n = s.K.getBidsRequested().map(function (e) {
                return e.bids.map(function (e) {
                  return e.adUnitCode;
                });
              }).reduce(i.flatten).filter(i.uniques);
              if ((0, i.contains)(n, e)) return !0;
              (0, i.logError)('The "' + e + '" placement is not defined.');
            }
          };
        function X(e, n, t) {
          e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = n, e.defaultView.frameElement.height = t);
        }
        function $(e, n) {
          var t = [];
          return (0, i.isArray)(e) && (n ? e.length === n : e.length > 0) && (e.every(function (e) {
            return (0, i.isArrayOfNums)(e, 2);
          }) ? t = e : (0, i.isArrayOfNums)(e, 2) && t.push(e)), t;
        }
        function ee(e) {
          var n = (0, i.deepClone)(e),
            t = n.mediaTypes.banner,
            r = $(t.sizes);
          return r.length > 0 ? (t.sizes = r, n.sizes = r) : ((0, i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete n.mediaTypes.banner), n;
        }
        function ne(e) {
          var n = (0, i.deepClone)(e),
            t = n.mediaTypes.video;
          if (t.playerSize) {
            var r = "number" == typeof t.playerSize[0] ? 2 : 1,
              o = $(t.playerSize, r);
            o.length > 0 ? (2 === r && (0, i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = o, n.sizes = o) : ((0, i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete n.mediaTypes.video.playerSize);
          }
          return n;
        }
        function te(e) {
          var n = (0, i.deepClone)(e),
            t = n.mediaTypes.native;
          return t.image && t.image.sizes && !Array.isArray(t.image.sizes) && ((0, i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete n.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && ((0, i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete n.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && ((0, i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete n.mediaTypes.native.icon.sizes), n;
        }
        function re(e, n) {
          var t = (0, o.Z)(e, "mediaTypes.".concat(n, ".pos"));
          if (!(0, i.isNumber)(t) || isNaN(t) || !isFinite(t)) {
            var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
            (0, i.logWarn)(r), x.emit(N.EVENTS.AUCTION_DEBUG, {
              type: "WARNING",
              arguments: r
            }), delete e.mediaTypes[n].pos;
          }
          return e;
        }
        function ie(e) {
          var n = function (n) {
              return "adUnit.code '".concat(e.code, "' ").concat(n);
            },
            t = e.mediaTypes,
            r = e.bids;
          return null == r || (0, i.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0, i.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")), null) : t && 0 !== Object.keys(t).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
            bidder: null
          }], (0, i.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))), e) : ((0, i.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")), null) : ((0, i.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")), null);
        }
        (0, w.wt)(), j.bidderSettings = j.bidderSettings || {}, j.libLoaded = !0, j.version = "v6.18.0", (0, i.logInfo)("Prebid.js v6.18.0 loaded"), j.installedModules = j.installedModules || [], j.adUnits = j.adUnits || [], j.triggerUserSyncs = q;
        var oe = {
            validateAdUnit: ie,
            validateBannerMediaType: ee,
            validateVideoMediaType: ne,
            validateNativeMediaType: te,
            validateSizes: $
          },
          ae = (0, C.z3)("sync", function (e) {
            var n = [];
            return e.forEach(function (e) {
              if (null != (e = ie(e))) {
                var t,
                  r,
                  i,
                  o = e.mediaTypes;
                o.banner && (t = ee(e), o.banner.hasOwnProperty("pos") && (t = re(t, "banner"))), o.video && (r = ne(t || e), o.video.hasOwnProperty("pos") && (r = re(r, "video"))), o.native && (i = te(r || t || e));
                var a = k({}, t, r, i);
                n.push(a);
              }
            }), n;
          }, "checkAdUnitSetup");
        function ce(e) {
          var n = s.K[e]().filter(i.bind.call(i.adUnitsFilter, this, s.K.getAdUnitCodes())),
            t = s.K.getLastAuctionId();
          return n.map(function (e) {
            return e.adUnitCode;
          }).filter(i.uniques).map(function (e) {
            return n.filter(function (n) {
              return n.auctionId === t && n.adUnitCode === e;
            });
          }).filter(function (e) {
            return e && e[0] && e[0].adUnitCode;
          }).map(function (e) {
            return n = {}, r = {
              bids: e
            }, (t = e[0].adUnitCode) in n ? Object.defineProperty(n, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[t] = r, n;
            var n, t, r;
          }).reduce(function (e, n) {
            return k(e, n);
          }, {});
        }
        function ue(e, n, t) {
          var r = n.querySelector(t);
          e.parentNode && e.parentNode === r || (0, i.insertElement)(e, n, t);
        }
        j.getAdserverTargetingForAdUnitCodeStr = function (e) {
          if ((0, i.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var n = j.getAdserverTargetingForAdUnitCode(e);
            return (0, i.transformAdServerTargetingObj)(n);
          }
          (0, i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, j.getHighestUnusedBidResponseForAdUnitCode = function (e) {
          if (e) {
            var n = s.K.getAllBidsForAdUnitCode(e).filter(I.u8.isUnusedBid).filter(I.u8.isBidNotExpired);
            return n.length ? n.reduce(i.getHighestCpm) : {};
          }
          (0, i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode");
        }, j.getAdserverTargetingForAdUnitCode = function (e) {
          return j.getAdserverTargeting(e)[e];
        }, j.getAdserverTargeting = function (e) {
          return (0, i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments), I.q0.getAllTargeting(e);
        }, j.getConsentMetadata = function () {
          return (0, i.logInfo)("Invoking pbjs.getConsentMetadata"), {
            gdpr: _.rp.getConsentMeta(),
            usp: _.nX.getConsentMeta(),
            coppa: !!l.vc.getConfig("coppa")
          };
        }, j.getNoBids = function () {
          return (0, i.logInfo)("Invoking pbjs.getNoBids", arguments), ce("getNoBids");
        }, j.getNoBidsForAdUnitCode = function (e) {
          return {
            bids: s.K.getNoBids().filter(function (n) {
              return n.adUnitCode === e;
            })
          };
        }, j.getBidResponses = function () {
          return (0, i.logInfo)("Invoking pbjs.getBidResponses", arguments), ce("getBidsReceived");
        }, j.getBidResponsesForAdUnitCode = function (e) {
          return {
            bids: s.K.getBidsReceived().filter(function (n) {
              return n.adUnitCode === e;
            })
          };
        }, j.setTargetingForGPTAsync = function (e, n) {
          if ((0, i.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, i.isGptPubadsDefined)()) {
            var t = I.q0.getAllTargeting(e);
            I.q0.resetPresetTargeting(e, n), I.q0.setTargetingForGPT(t, n), Object.keys(t).forEach(function (e) {
              Object.keys(t[e]).forEach(function (n) {
                "hb_adid" === n && s.K.setStatusForBids(t[e][n], N.BID_STATUS.BID_TARGETING_SET);
              });
            }), x.emit(z, t);
          } else (0, i.logError)("window.googletag is not defined on the page");
        }, j.setTargetingForAst = function (e) {
          (0, i.logInfo)("Invoking pbjs.setTargetingForAn", arguments), I.q0.isApntagDefined() ? (I.q0.setTargetingForAst(e), x.emit(z, I.q0.getAllTargeting())) : (0, i.logError)("window.apntag is not defined on the page");
        }, j.renderAd = (0, C.z3)("async", function (e, n, t) {
          if ((0, i.logInfo)("Invoking pbjs.renderAd", arguments), (0, i.logMessage)("Calling renderAd with adId :" + n), e && n) try {
            var r = s.K.findBidByAdId(n);
            if (r) {
              var a = !0;
              if (r && r.status === N.BID_STATUS.RENDERED && ((0, i.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), x.emit(L, r), (0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender") && (a = !1)), a) {
                if (r.ad = (0, i.replaceAuctionPrice)(r.ad, r.originalCpm || r.cpm), r.adUrl = (0, i.replaceAuctionPrice)(r.adUrl, r.originalCpm || r.cpm), t && t.clickThrough) {
                  var c = t.clickThrough;
                  r.ad = (0, i.replaceClickThrough)(r.ad, c), r.adUrl = (0, i.replaceClickThrough)(r.adUrl, c);
                }
                s.K.addWinningBid(r), x.emit(W, r);
                var u = r.height,
                  d = r.width,
                  g = r.ad,
                  p = r.mediaType,
                  v = r.adUrl,
                  h = r.renderer,
                  m = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                if ((0, i.insertElement)(m, e, "html"), (0, f.Pd)(h)) (0, f._U)(h, r), ue(m, e, "html"), b({
                  doc: e,
                  bid: r,
                  id: n
                });else if (e === document && !(0, i.inIframe)() || "video" === p) {
                  var E = "Error trying to write ad. Ad render call ad id ".concat(n, " was prevented from writing to the main document.");
                  y({
                    reason: V,
                    message: E,
                    bid: r,
                    id: n
                  });
                } else if (g) e.write(g), e.close(), X(e, d, u), ue(m, e, "html"), (0, i.callBurl)(r), b({
                  doc: e,
                  bid: r,
                  id: n
                });else if (v) {
                  var S = (0, i.createInvisibleIframe)();
                  S.height = u, S.width = d, S.style.display = "inline", S.style.overflow = "hidden", S.src = v, (0, i.insertElement)(S, e, "body"), X(e, d, u), ue(m, e, "html"), (0, i.callBurl)(r), b({
                    doc: e,
                    bid: r,
                    id: n
                  });
                } else {
                  var A = "Error trying to write ad. No ad for bid response id: ".concat(n);
                  y({
                    reason: H,
                    message: A,
                    bid: r,
                    id: n
                  });
                }
              }
            } else {
              var T = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
              y({
                reason: Y,
                message: T,
                id: n
              });
            }
          } catch (e) {
            var I = "Error trying to write ad Id :".concat(n, " to the page:").concat(e.message);
            y({
              reason: Z,
              message: I,
              id: n
            });
          } else {
            var C = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
            y({
              reason: J,
              message: C,
              id: n
            });
          }
        }), j.removeAdUnit = function (e) {
          (0, i.logInfo)("Invoking pbjs.removeAdUnit", arguments), e ? ((0, i.isArray)(e) ? e : [e]).forEach(function (e) {
            for (var n = j.adUnits.length - 1; n >= 0; n--) j.adUnits[n].code === e && j.adUnits.splice(n, 1);
          }) : j.adUnits = [];
        }, j.requestBids = (0, C.z3)("async", function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.bidsBackHandler,
            t = e.timeout,
            r = e.adUnits,
            o = e.adUnitCodes,
            a = e.labels,
            c = e.auctionId;
          x.emit(F);
          var u = t || l.vc.getConfig("bidderTimeout");
          r = r && l.vc.convertAdUnitFpd((0, i.isArray)(r) ? r : [r]) || j.adUnits, (0, i.logInfo)("Invoking pbjs.requestBids", arguments);
          var f = [],
            g = [];
          if (l.vc.getConfig("s2sConfig", function (e) {
            e && e.s2sConfig && (f = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          }), f.forEach(function (e) {
            g.push.apply(g, R(e.bidders));
          }), r = ae(r), o && o.length ? r = r.filter(function (e) {
            return (0, d.q9)(o, e.code);
          }) : o = r && r.map(function (e) {
            return e.code;
          }), r.forEach(function (e) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
              }),
              t = e.bids.map(function (e) {
                return e.bidder;
              }),
              r = P.bidderRegistry,
              o = g ? t.filter(function (e) {
                return !(0, d.q9)(g, e);
              }) : t;
            e.transactionId = (0, i.generateUUID)(), o.forEach(function (t) {
              var o = r[t],
                a = o && o.getSpec && o.getSpec(),
                c = a && a.supportedMediaTypes || ["banner"];
              n.some(function (e) {
                return (0, d.q9)(c, e);
              }) ? O.f.incrementBidderRequestsCounter(e.code, t) : ((0, i.logWarn)((0, i.unsupportedBidderMessage)(e, t)), e.bids = e.bids.filter(function (e) {
                return e.bidder !== t;
              }));
            }), O.f.incrementRequestsCounter(e.code);
          }), r && 0 !== r.length) {
            var p = s.K.createAuction({
                adUnits: r,
                adUnitCodes: o,
                callback: n,
                cbTimeout: u,
                labels: a,
                auctionId: c
              }),
              v = r.length;
            v > 15 && (0, i.logInfo)("Current auction ".concat(p.getAuctionId(), " contains ").concat(v, " adUnits."), r), o.forEach(function (e) {
              return I.q0.setLatestAuctionForAdUnit(e, p.getAuctionId());
            }), p.callBids();
          } else if ((0, i.logMessage)("No adUnits configured. No bids requested."), "function" == typeof n) try {
            n();
          } catch (e) {
            (0, i.logError)("Error executing bidsBackHandler", null, e);
          }
        }), j.requestBids.before(function (e, n) {
          function t(e) {
            for (var n; n = e.shift();) n();
          }
          t(U.Ld), t(se), e.call(this, n);
        }, 49), j.addAdUnits = function (e) {
          (0, i.logInfo)("Invoking pbjs.addAdUnits", arguments), j.adUnits.push.apply(j.adUnits, l.vc.convertAdUnitFpd((0, i.isArray)(e) ? e : [e])), x.emit(G);
        }, j.onEvent = function (e, n, t) {
          (0, i.logInfo)("Invoking pbjs.onEvent", arguments), (0, i.isFn)(n) ? !t || Q[e].call(null, t) ? x.on(e, n, t) : (0, i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : (0, i.logError)('The event handler provided is not a function and was not set on event "' + e + '".');
        }, j.offEvent = function (e, n, t) {
          (0, i.logInfo)("Invoking pbjs.offEvent", arguments), t && !Q[e].call(null, t) || x.off(e, n, t);
        }, j.getEvents = function () {
          return (0, i.logInfo)("Invoking pbjs.getEvents"), x.getEvents();
        }, j.registerBidAdapter = function (e, n) {
          (0, i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
          try {
            P.registerBidAdapter(e(), n);
          } catch (e) {
            (0, i.logError)("Error registering bidder adapter : " + e.message);
          }
        }, j.registerAnalyticsAdapter = function (e) {
          (0, i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
          try {
            P.registerAnalyticsAdapter(e);
          } catch (e) {
            (0, i.logError)("Error registering analytics adapter : " + e.message);
          }
        }, j.createBid = function (e) {
          return (0, i.logInfo)("Invoking pbjs.createBid", arguments), (0, B.m)(e);
        };
        var se = [],
          de = (0, C.z3)("async", function (e) {
            e && !(0, i.isEmpty)(e) ? ((0, i.logInfo)("Invoking pbjs.enableAnalytics for: ", e), P.enableAnalytics(e)) : (0, i.logError)("pbjs.enableAnalytics should be called with option {}");
          }, "enableAnalyticsCb");
        function fe(e) {
          e.forEach(function (e) {
            if (void 0 === e.called) try {
              e.call(), e.called = !0;
            } catch (e) {
              (0, i.logError)("Error processing command :", "prebid.js", e);
            }
          });
        }
        j.enableAnalytics = function (e) {
          se.push(de.bind(this, e));
        }, j.aliasBidder = function (e, n, t) {
          (0, i.logInfo)("Invoking pbjs.aliasBidder", arguments), e && n ? P.aliasBidAdapter(e, n, t) : (0, i.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, j.getAllWinningBids = function () {
          return s.K.getAllWinningBids();
        }, j.getAllPrebidWinningBids = function () {
          return s.K.getBidsReceived().filter(function (e) {
            return e.status === N.BID_STATUS.BID_TARGETING_SET;
          });
        }, j.getHighestCpmBids = function (e) {
          return I.q0.getWinningBids(e);
        }, j.markWinningBidAsUsed = function (e) {
          var n = [];
          e.adUnitCode && e.adId ? n = s.K.getBidsReceived().filter(function (n) {
            return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
          }) : e.adUnitCode ? n = I.q0.getWinningBids(e.adUnitCode) : e.adId ? n = s.K.getBidsReceived().filter(function (n) {
            return n.adId === e.adId;
          }) : (0, i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), n.length > 0 && (n[0].status = N.BID_STATUS.RENDERED);
        }, j.getConfig = l.vc.getConfig, j.readConfig = l.vc.readConfig, j.mergeConfig = l.vc.mergeConfig, j.mergeBidderConfig = l.vc.mergeBidderConfig, j.setConfig = l.vc.setConfig, j.setBidderConfig = l.vc.setBidderConfig, j.que.push(function () {
          window.addEventListener("message", S, !1);
        }), j.cmd.push = function (e) {
          if ("function" == typeof e) try {
            e.call();
          } catch (e) {
            (0, i.logError)("Error processing command :", e.message, e.stack);
          } else (0, i.logError)("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, j.que.push = j.cmd.push, j.processQueue = function () {
          C.z3.ready(), fe(j.que), fe(j.cmd);
        };
      },
      2528: function (e, n, t) {
        "use strict";

        function r() {
          return window.pbjs;
        }
        t.d(n, {
          R: function () {
            return r;
          }
        }), window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
      },
      2661: function (e, n, t) {
        "use strict";

        t.d(n, {
          n: function () {
            return o;
          }
        });
        var r = t(8962),
          i = t(9853),
          o = function (e) {
            function n(e) {
              var n = r.vc.getConfig("pageUrl");
              if (n) return n;
              try {
                var t = e.querySelector("link[rel='canonical']");
                if (null !== t) return t.href;
              } catch (e) {}
              return null;
            }
            return function () {
              var t,
                o,
                a,
                c = [],
                u = function (e) {
                  try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins;
                  } catch (e) {}
                }(e),
                s = r.vc.getConfig("maxNestedIframes"),
                d = !1,
                f = 0,
                l = !1,
                g = !1;
              do {
                var p = t,
                  v = g,
                  y = void 0,
                  b = !1,
                  h = null;
                g = !1, t = t ? t.parent : e;
                try {
                  y = t.location.href || null;
                } catch (e) {
                  b = !0;
                }
                if (b) {
                  if (v) {
                    var m = p.context;
                    try {
                      o = h = m.sourceUrl, l = !0, t === e.top && (d = !0), m.canonicalUrl && (a = m.canonicalUrl);
                    } catch (e) {}
                  } else {
                    (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                    try {
                      var E = p.document.referrer;
                      E && (h = E, t === e.top && (d = !0));
                    } catch (e) {}
                    !h && u && u[f - 1] && (h = u[f - 1]), h && !l && (o = h);
                  }
                } else {
                  if (y && (o = h = y, l = !1, t === e.top)) {
                    d = !0;
                    var S = n(t.document);
                    S && (a = S);
                  }
                  t.context && t.context.sourceUrl && (g = !0);
                }
                c.push(h), f++;
              } while (t !== e.top && f < s);
              return c.reverse(), {
                referer: o || null,
                reachedTop: d,
                isAmp: l,
                numIframes: f - 1,
                stack: c,
                canonicalUrl: a || null
              };
            };
          }(window);
      },
      1269: function (e, n, t) {
        "use strict";

        t.d(n, {
          UB: function () {
            return g;
          },
          lO: function () {
            return d;
          }
        });
        var r = t(8962),
          i = t(9853),
          o = t(265),
          a = t(1879);
        function c(e) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, c(e);
        }
        var u = [];
        function s(e, n) {
          return e.labelAll ? {
            labelAll: !0,
            labels: e.labelAll,
            activeLabels: n
          } : {
            labelAll: !1,
            labels: e.labelAny,
            activeLabels: n
          };
        }
        function d(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
            t = l(n);
          return !t.shouldFilter || !!t.sizesSupported[e];
        }
        function f() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.labels,
            t = void 0 === n ? [] : n,
            r = e.labelAll,
            c = void 0 !== r && r,
            s = e.activeLabels,
            d = void 0 === s ? [] : s,
            f = arguments.length > 1 ? arguments[1] : void 0,
            g = arguments.length > 2 ? arguments[2] : void 0,
            p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
            v = l(p);
          f = (0, i.isPlainObject)(f) ? (0, i.deepClone)(f) : g ? {
            banner: {
              sizes: g
            }
          } : {};
          var y = (0, o.Z)(f, "banner.sizes");
          v.shouldFilter && y && (f.banner.sizes = y.filter(function (e) {
            return v.sizesSupported[e];
          }));
          var b = Object.keys(f),
            h = {
              active: b.every(function (e) {
                return "banner" !== e;
              }) || b.some(function (e) {
                return "banner" === e;
              }) && (0, o.Z)(f, "banner.sizes.length") > 0 && (0 === t.length || !c && (t.some(function (e) {
                return v.labels[e];
              }) || t.some(function (e) {
                return (0, a.q9)(d, e);
              })) || c && t.reduce(function (e, n) {
                return e ? v.labels[n] || (0, a.q9)(d, n) : e;
              }, !0)),
              mediaTypes: f
            };
          return y && y.length !== f.banner.sizes.length && (h.filterResults = {
            before: y,
            after: f.banner.sizes
          }), h;
        }
        function l(e) {
          return e.reduce(function (e, n) {
            if ("object" === c(n) && "string" == typeof n.mediaQuery && n.mediaQuery.length > 0) {
              var t = !1;
              try {
                t = (0, i.getWindowTop)().matchMedia(n.mediaQuery).matches;
              } catch (e) {
                (0, i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(n.mediaQuery).matches;
              }
              t && (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
                return (n[t] || []).forEach(function (n) {
                  return e[t][n] = !0;
                });
              }));
            } else (0, i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
            return e;
          }, {
            labels: {},
            sizesSupported: {},
            shouldFilter: !1
          });
        }
        function g(e, n) {
          return e.reduce(function (e, t) {
            var r = f(s(t, n), t.mediaTypes, t.sizes),
              o = r.active,
              a = r.mediaTypes,
              c = r.filterResults;
            return o ? (c && (0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" banner sizes from '), c.before, "to ", c.after), t.mediaTypes = a, t.bids = t.bids.reduce(function (e, r) {
              var o = f(s(r, n), t.mediaTypes),
                a = o.active,
                c = o.mediaTypes,
                u = o.filterResults;
              return a ? (u && ((0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '" banner sizes from '), u.before, "to ", u.after), r.mediaTypes = c), e.push(r)) : (0, i.logInfo)('Size mapping deactivated adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '"')), e;
            }, []), e.push(t)) : (0, i.logInfo)('Size mapping disabled adUnit "'.concat(t.code, '"')), e;
          }, []);
        }
        r.vc.getConfig("sizeConfig", function (e) {
          return function (e) {
            u = e;
          }(e.sizeConfig);
        });
      },
      5849: function (e, n, t) {
        "use strict";

        t.d(n, {
          Ld: function () {
            return u;
          },
          S6: function () {
            return d;
          },
          df: function () {
            return l;
          },
          eA: function () {
            return f;
          }
        });
        var r = t(3494),
          i = t(9853),
          o = t(1879),
          a = t(9624),
          c = ["core", "prebid-module"],
          u = [];
        function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.gvlid,
            t = e.moduleName,
            r = e.bidderCode,
            s = e.moduleType,
            f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = f.bidderSettings,
            g = void 0 === l ? a.S : l;
          function p() {
            if (null == r) return !1;
            var e = g.get(r, "storageAllowed");
            return null != e && !e;
          }
          function v(e) {
            return (0, o.q9)(c, s) ? e({
              valid: !0
            }) : p() ? ((0, i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(r, "'")), e({
              valid: !1
            })) : (d(n, r || t, {
              hasEnforcementHook: !1
            }, function (n) {
              if (n && n.hasEnforcementHook) a = e(n);else {
                var t = {
                  hasEnforcementHook: !1,
                  valid: (0, i.hasDeviceAccess)()
                };
                a = e(t);
              }
            }), a);
            var a;
          }
          var y = function (e, n, t, r, i, o) {
              var a = function (o) {
                if (o && o.valid) {
                  var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                    c = t && "" !== t ? " ;expires=".concat(t) : "",
                    u = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                  document.cookie = "".concat(e, "=").concat(encodeURIComponent(n)).concat(c, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(u);
                }
              };
              if (!o || "function" != typeof o) return v(a);
              u.push(function () {
                var e = v(a);
                o(e);
              });
            },
            b = function (e, n) {
              var t = function (n) {
                if (n && n.valid) {
                  var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                  return t ? decodeURIComponent(t[2]) : null;
                }
                return null;
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            h = function (e) {
              var n = function (e) {
                if (e && e.valid) try {
                  return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                } catch (e) {} finally {
                  try {
                    localStorage.removeItem("prebid.cookieTest");
                  } catch (e) {}
                }
                return !1;
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            m = function (e) {
              var n = function (e) {
                return !(!e || !e.valid || !(0, i.checkCookieSupport)() && (window.document.cookie = "prebid.cookieTest", -1 === window.document.cookie.indexOf("prebid.cookieTest")));
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            E = function (e, n, t) {
              var r = function (t) {
                t && t.valid && T() && window.localStorage.setItem(e, n);
              };
              if (!t || "function" != typeof t) return v(r);
              u.push(function () {
                var e = v(r);
                t(e);
              });
            },
            S = function (e, n) {
              var t = function (n) {
                return n && n.valid && T() ? window.localStorage.getItem(e) : null;
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            A = function (e, n) {
              var t = function (n) {
                n && n.valid && T() && window.localStorage.removeItem(e);
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            },
            T = function (e) {
              var n = function (e) {
                if (e && e.valid) try {
                  return !!window.localStorage;
                } catch (e) {
                  (0, i.logError)("Local storage api disabled");
                }
                return !1;
              };
              if (!e || "function" != typeof e) return v(n);
              u.push(function () {
                var t = v(n);
                e(t);
              });
            },
            I = function (e, n) {
              var t = function (n) {
                if (n && n.valid) {
                  var t = [];
                  if ((0, i.hasDeviceAccess)()) for (var r = document.cookie.split(";"); r.length;) {
                    var o = r.pop(),
                      a = o.indexOf("=");
                    a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(o.slice(a + 1)));
                  }
                  return t;
                }
              };
              if (!n || "function" != typeof n) return v(t);
              u.push(function () {
                var e = v(t);
                n(e);
              });
            };
          return {
            setCookie: y,
            getCookie: b,
            localStorageIsEnabled: h,
            cookiesAreEnabled: m,
            setDataInLocalStorage: E,
            getDataFromLocalStorage: S,
            removeDataFromLocalStorage: A,
            hasLocalStorage: T,
            findSimilarCookies: I
          };
        }
        var d = (0, r.z3)("async", function (e, n, t, r) {
          r(t);
        }, "validateStorageEnforcement");
        function f(e) {
          return s({
            moduleName: e,
            moduleType: "core"
          });
        }
        function l() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.gvlid,
            t = e.moduleName,
            r = e.bidderCode;
          if (arguments.length > 1 || arguments.length > 0 && !(0, i.isPlainObject)(arguments[0])) throw new Error("Invalid invocation for getStorageManager");
          return s({
            gvlid: n,
            moduleName: t,
            bidderCode: r
          });
        }
      },
      9742: function (e, n, t) {
        "use strict";

        t.d(n, {
          bP: function () {
            return C;
          },
          ol: function () {
            return I;
          },
          q0: function () {
            return w;
          },
          u8: function () {
            return T;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(8962),
          a = t(9017),
          c = t(4766),
          u = t(1269),
          s = t(8265),
          d = t(3494),
          f = t(9624),
          l = t(1879);
        function g() {
          return g = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, g.apply(this, arguments);
        }
        function p(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function v(e) {
          return function (e) {
            if (Array.isArray(e)) return y(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return y(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? y(e, n) : void 0;
            }
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function y(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var b = t(5644),
          h = [],
          m = "targetingControls.allowTargetingKeys",
          E = "targetingControls.addTargetingKeys",
          S = 'Only one of "'.concat(m, '" or "').concat(E, '" can be set'),
          A = Object.keys(b.TARGETING_KEYS).map(function (e) {
            return b.TARGETING_KEYS[e];
          }),
          T = {
            isBidNotExpired: function (e) {
              return e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, r.timestamp)();
            },
            isUnusedBid: function (e) {
              return e && (e.status && !(0, l.q9)([b.BID_STATUS.RENDERED], e.status) || !e.status);
            }
          },
          I = (0, d.z3)("sync", function (e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!i) {
              var a = [],
                c = o.vc.getConfig("sendBidsControl.dealPrioritization"),
                u = (0, r.groupBy)(e, "adUnitCode");
              return Object.keys(u).forEach(function (e) {
                var i = [],
                  o = (0, r.groupBy)(u[e], "bidderCode");
                Object.keys(o).forEach(function (e) {
                  return i.push(o[e].reduce(n));
                }), t > 0 ? (i = c ? i.sort(C(!0)) : i.sort(function (e, n) {
                  return n.cpm - e.cpm;
                }), a.push.apply(a, v(i.slice(0, t)))) : a.push.apply(a, v(i));
              }), a;
            }
            return e;
          });
        function C() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return function (n, t) {
            return void 0 !== n.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === n.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : e ? t.cpm - n.cpm : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
          };
        }
        var w = function (e) {
          var n = {},
            t = {};
          function c(e, n) {
            return e.adserverTargeting && n && ((0, r.isArray)(n) && (0, l.q9)(n, e.adUnitCode) || "string" == typeof n && e.adUnitCode === n);
          }
          function d(e, n) {
            if (!0 === o.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
              var t = A.concat(a.xc);
              return I(n, r.getHighestCpm).map(function (n) {
                if (n.dealId && c(n, e)) return p({}, n.adUnitCode, x(n, t.filter(function (e) {
                  return void 0 !== n.adserverTargeting[e];
                })));
              }).filter(function (e) {
                return e;
              });
            }
            return [];
          }
          function y(e, n) {
            var t = g({}, b.TARGETING_KEYS, b.NATIVE_KEYS),
              i = Object.keys(t),
              o = {};
            (0, r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map(function (e) {
              return t[e];
            }).join(", "), " ]")), e.map(function (e) {
              var r = Object.keys(e)[0],
                a = e[r].filter(function (e) {
                  var r = Object.keys(e)[0],
                    a = 0 === i.filter(function (e) {
                      return 0 === r.indexOf(t[e]);
                    }).length || (0, l.sE)(n, function (e) {
                      var n = t[e];
                      return 0 === r.indexOf(n);
                    });
                  return o[r] = !a, a;
                });
              e[r] = a;
            });
            var a = Object.keys(o).filter(function (e) {
              return o[e];
            });
            return (0, r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), e.filter(function (e) {
              return e[Object.keys(e)[0]].length > 0;
            });
          }
          function w(e, n) {
            var t = (0, r.deepClone)(e);
            return Object.keys(t).map(function (e) {
              return {
                adUnitCode: e,
                adserverTargeting: t[e]
              };
            }).sort(C()).reduce(function (e, i, o, a) {
              var c,
                u = (c = i.adserverTargeting, Object.keys(c).reduce(function (e, n) {
                  return e + "".concat(n, "%3d").concat(encodeURIComponent(c[n]), "%26");
                }, ""));
              o + 1 === a.length && (u = u.slice(0, -3));
              var s = i.adUnitCode,
                d = u.length;
              return d <= n ? (n -= d, (0, r.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(n), t[s]), e[s] = t[s]) : (0, r.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(n, ".\n"), t[s]), o + 1 === a.length && 0 === Object.keys(e).length && (0, r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e;
            }, {});
          }
          function O(e) {
            var n = e.map(function (e) {
              return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
              }).reduce(function (e, n) {
                return g(n, e);
              }, {}));
            }).reduce(function (e, n) {
              var t = Object.keys(n)[0];
              return e[t] = g({}, e[t], n[t]), e;
            }, {});
            return n;
          }
          function B(n) {
            return "string" == typeof n ? [n] : (0, r.isArray)(n) ? n : e.getAdUnitCodes() || [];
          }
          function U() {
            var n = e.getBidsReceived();
            if (o.vc.getConfig("useBidCache")) {
              var a = o.vc.getConfig("bidCacheFilterFunction");
              "function" == typeof a && (n = n.filter(function (e) {
                return t[e.adUnitCode] === e.auctionId || !!a(e);
              }));
            } else n = n.filter(function (e) {
              return t[e.adUnitCode] === e.auctionId;
            });
            return n = n.filter(function (e) {
              return (0, i.Z)(e, "video.context") !== s.Oh;
            }).filter(function (e) {
              return "banner" !== e.mediaType || (0, u.lO)([e.width, e.height]);
            }).filter(T.isUnusedBid).filter(T.isBidNotExpired), I(n, r.getOldestHighestCpmBid);
          }
          function _(e, t) {
            var r = n.getWinningBids(e, t),
              i = R();
            return r = r.map(function (e) {
              return p({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function (n) {
                return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(n);
              }).reduce(function (n, t) {
                var r = [e.adserverTargeting[t]],
                  i = p({}, t.substring(0, 20), r);
                if (t === b.TARGETING_KEYS.DEAL) {
                  var o = p({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), r);
                  return [].concat(v(n), [i, o]);
                }
                return [].concat(v(n), [i]);
              }, []));
            }), r;
          }
          function R() {
            return e.getStandardBidderAdServerTargeting().map(function (e) {
              return e.key;
            }).concat(A).filter(r.uniques);
          }
          function D(e, n, t, i) {
            return Object.keys(n.adserverTargeting).filter(k()).forEach(function (t) {
              e.length && e.filter(function (e) {
                return function (t) {
                  return t.adUnitCode === n.adUnitCode && t.adserverTargeting[e];
                };
              }(t)).forEach(function (e) {
                return function (t) {
                  (0, r.isArray)(t.adserverTargeting[e]) || (t.adserverTargeting[e] = [t.adserverTargeting[e]]), t.adserverTargeting[e] = t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(r.uniques), delete n.adserverTargeting[e];
                };
              }(t));
            }), e.push(n), e;
          }
          function k() {
            var e = R().concat(a.xc);
            return function (n) {
              return -1 === e.indexOf(n);
            };
          }
          function j(e) {
            return p({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(k()).map(function (n) {
              return p({}, n.substring(0, 20), [e.adserverTargeting[n]]);
            }));
          }
          function N(e, n) {
            return n.filter(function (n) {
              return (0, l.q9)(e, n.adUnitCode);
            }).map(function (e) {
              return g({}, e);
            }).reduce(D, []).map(j).filter(function (e) {
              return e;
            });
          }
          function P(e, n) {
            var t = A.concat(a.xc),
              i = o.vc.getConfig("sendBidsControl.bidLimit"),
              u = I(n, r.getHighestCpm, i),
              s = o.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
              d = s ? s.map(function (e) {
                return b.TARGETING_KEYS[e];
              }) : t;
            return u.map(function (n) {
              if (c(n, e)) return p({}, n.adUnitCode, x(n, t.filter(function (e) {
                return void 0 !== n.adserverTargeting[e] && -1 !== d.indexOf(e);
              })));
            }).filter(function (e) {
              return e;
            });
          }
          function x(e, n) {
            return n.map(function (n) {
              return p({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]]);
            });
          }
          function q(n) {
            function t(e) {
              return (0, i.Z)(e, b.JSON_MAPPING.ADSERVER_TARGETING);
            }
            return e.getAdUnits().filter(function (e) {
              return (0, l.q9)(n, e.code) && t(e);
            }).map(function (e) {
              return p({}, e.code, function (e) {
                var n = t(e);
                return Object.keys(n).map(function (e) {
                  return (0, r.isStr)(n[e]) && (n[e] = n[e].split(",").map(function (e) {
                    return e.trim();
                  })), (0, r.isArray)(n[e]) || (n[e] = [n[e]]), p({}, e, n[e]);
                });
              }(e));
            });
          }
          return n.setLatestAuctionForAdUnit = function (e, n) {
            t[e] = n;
          }, n.resetPresetTargeting = function (n, t) {
            if ((0, r.isGptPubadsDefined)()) {
              var i = B(n),
                o = e.getAdUnits().filter(function (e) {
                  return (0, l.q9)(i, e.code);
                }),
                a = h.reduce(function (e, n) {
                  return e[n] = null, e;
                }, {});
              window.googletag.pubads().getSlots().forEach(function (e) {
                var n = (0, r.isFn)(t) && t(e);
                o.forEach(function (t) {
                  (t.code === e.getAdUnitPath() || t.code === e.getSlotElementId() || (0, r.isFn)(n) && n(t.code)) && e.updateTargetingFromMap(a);
                });
              });
            }
          }, n.resetPresetTargetingAST = function (e) {
            B(e).forEach(function (e) {
              var n = window.apntag.getTag(e);
              if (n && n.keywords) {
                var t = Object.keys(n.keywords),
                  r = {};
                t.forEach(function (e) {
                  (0, l.q9)(h, e.toLowerCase()) || (r[e] = n.keywords[e]);
                }), window.apntag.modifyTag(e, {
                  keywords: r
                });
              }
            });
          }, n.getAllTargeting = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U(),
              t = B(e),
              i = _(t, n).concat(N(t, n)).concat(o.vc.getConfig("enableSendAllBids") ? P(t, n) : d(t, n)).concat(q(t));
            i.map(function (e) {
              Object.keys(e).map(function (n) {
                e[n].map(function (e) {
                  -1 === h.indexOf(Object.keys(e)[0]) && (h = Object.keys(e).concat(h));
                });
              });
            });
            var a = Object.keys(g({}, b.DEFAULT_TARGETING_KEYS, b.NATIVE_KEYS)),
              c = o.vc.getConfig(m),
              u = o.vc.getConfig(E);
            if (null != u && null != c) throw new Error(S);
            c = null != u ? a.concat(u) : c || a, Array.isArray(c) && c.length > 0 && (i = y(i, c)), i = O(i);
            var s = o.vc.getConfig("targetingControls.auctionKeyMaxChars");
            return s && ((0, r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s, " characters.  Running checks on auction keys...")), i = w(i, s)), t.forEach(function (e) {
              i[e] || (i[e] = {});
            }), i;
          }, o.vc.getConfig("targetingControls", function (e) {
            null != (0, i.Z)(e, m) && null != (0, i.Z)(e, E) && (0, r.logError)(S);
          }), n.setTargetingForGPT = function (e, n) {
            window.googletag.pubads().getSlots().forEach(function (t) {
              Object.keys(e).filter(n ? n(t) : (0, r.isAdUnitCodeMatchingSlot)(t)).forEach(function (n) {
                Object.keys(e[n]).forEach(function (t) {
                  var r = e[n][t];
                  "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), e[n][t] = r;
                }), (0, r.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId(), " with targeting-map:"), e[n]), t.updateTargetingFromMap(e[n]);
              });
            });
          }, n.getWinningBids = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U(),
              t = B(e);
            return n.filter(function (e) {
              return (0, l.q9)(t, e.adUnitCode);
            }).filter(function (e) {
              return !0 === f.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
            }).map(function (e) {
              return e.adUnitCode;
            }).filter(r.uniques).map(function (e) {
              return n.filter(function (n) {
                return n.adUnitCode === e ? n : null;
              }).reduce(r.getHighestCpm);
            });
          }, n.setTargetingForAst = function (e) {
            var t = n.getAllTargeting(e);
            try {
              n.resetPresetTargetingAST(e);
            } catch (e) {
              (0, r.logError)("unable to reset targeting for AST" + e);
            }
            Object.keys(t).forEach(function (e) {
              return Object.keys(t[e]).forEach(function (n) {
                if ((0, r.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(n, " value: ").concat(t[e][n])), (0, r.isStr)(t[e][n]) || (0, r.isArray)(t[e][n])) {
                  var i = {};
                  n.search(/pt[0-9]/) < 0 ? i[n.toUpperCase()] = t[e][n] : i[n] = t[e][n], window.apntag.setKeywords(e, i, {
                    overrideKeyValue: !0
                  });
                }
              });
            });
          }, n.isApntagDefined = function () {
            if (window.apntag && (0, r.isFn)(window.apntag.setKeywords)) return !0;
          }, n;
        }(c.K);
      },
      7112: function (e, n, t) {
        "use strict";

        t.d(n, {
          k_: function () {
            return l;
          }
        });
        var r = t(9853),
          i = t(8962),
          o = t(1879),
          a = t(5849);
        function c(e, n) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, n) {
            var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != t) {
              var r,
                i,
                o = [],
                a = !0,
                c = !1;
              try {
                for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
              } catch (e) {
                c = !0, i = e;
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw i;
                }
              }
              return o;
            }
          }(e, n) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return u(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, n) : void 0;
            }
          }(e, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function u(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function s() {
          return s = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, s.apply(this, arguments);
        }
        i.vc.setDefaults({
          userSync: (0, r.deepClone)({
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
        var d = (0, a.eA)("usersync"),
          f = !(0, r.isSafariBrowser)() && d.cookiesAreEnabled(),
          l = function (e) {
            var n = {},
              t = {
                image: [],
                iframe: []
              },
              a = new Set(),
              u = {},
              d = {
                image: !0,
                iframe: !1
              },
              f = e.config;
            function l() {
              if (f.syncEnabled && e.browserSupportsCookies) {
                try {
                  d.iframe && g(t.iframe, function (e) {
                    var n = c(e, 2),
                      i = n[0],
                      o = n[1];
                    (0, r.logMessage)("Invoking iframe user sync for bidder: ".concat(i)), (0, r.insertUserSyncIframe)(o), function (e, n) {
                      e.image = e.image.filter(function (e) {
                        return e[0] !== n;
                      });
                    }(t, i);
                  }), d.image && g(t.image, function (e) {
                    var n = c(e, 2),
                      t = n[0],
                      i = n[1];
                    (0, r.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)), (0, r.triggerPixel)(i);
                  });
                } catch (e) {
                  return (0, r.logError)("Error firing user syncs", e);
                }
                t = {
                  image: [],
                  iframe: []
                };
              }
            }
            function g(e, n) {
              (0, r.shuffle)(e).forEach(function (e) {
                n(e), a.add(e[0]);
              });
            }
            return i.vc.getConfig("userSync", function (e) {
              if (e.userSync) {
                var n = e.userSync.filterSettings;
                (0, r.isPlainObject)(n) && (n.image || n.all || (e.userSync.filterSettings.image = {
                  bidders: "*",
                  filter: "include"
                }));
              }
              f = s(f, e.userSync);
            }), n.registerSync = function (e, i, o) {
              return a.has(i) ? (0, r.logMessage)('already fired syncs for "'.concat(i, '", ignoring registerSync call')) : f.syncEnabled && (0, r.isArray)(t[e]) ? i ? 0 !== f.syncsPerBidder && Number(u[i]) >= f.syncsPerBidder ? (0, r.logWarn)('Number of user syncs exceeded for "'.concat(i, '"')) : n.canBidderRegisterSync(e, i) ? (t[e].push([i, o]), void (u = function (e, n) {
                return e[n] ? e[n] += 1 : e[n] = 1, e;
              }(u, i))) : (0, r.logWarn)('Bidder "'.concat(i, '" not permitted to register their "').concat(e, '" userSync pixels.')) : (0, r.logWarn)("Bidder is required for registering sync") : (0, r.logWarn)('User sync type "'.concat(e, '" not supported'));
            }, n.syncUsers = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              if (e) return setTimeout(l, Number(e));
              l();
            }, n.triggerUserSyncs = function () {
              f.enableOverride && n.syncUsers();
            }, n.canBidderRegisterSync = function (e, n) {
              return !f.filterSettings || !function (e, n) {
                var t = f.filterSettings;
                if (function (e, n) {
                  if (e.all && e[n]) return (0, r.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                  var t = e.all ? e.all : e[n],
                    i = e.all ? "all" : n;
                  if (!t) return !1;
                  var o = t.filter,
                    a = t.bidders;
                  return o && "include" !== o && "exclude" !== o ? ((0, r.logWarn)('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === a || Array.isArray(a) && a.length > 0 && a.every(function (e) {
                    return (0, r.isStr)(e) && "*" !== e;
                  })) || ((0, r.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1);
                }(t, e)) {
                  d[e] = !0;
                  var i = t.all ? t.all : t[e],
                    a = "*" === i.bidders ? [n] : i.bidders,
                    c = {
                      include: function (e, n) {
                        return !(0, o.q9)(e, n);
                      },
                      exclude: function (e, n) {
                        return (0, o.q9)(e, n);
                      }
                    };
                  return c[i.filter || "include"](a, n);
                }
                return !d[e];
              }(e, n);
            }, n;
          }({
            config: i.vc.getConfig("userSync"),
            browserSupportsCookies: f
          });
      },
      9853: function (e, n, t) {
        "use strict";

        t.r(n), t.d(n, {
          _each: function () {
            return de;
          },
          _map: function () {
            return le;
          },
          adUnitsFilter: function () {
            return xe;
          },
          bind: function () {
            return U;
          },
          buildUrl: function () {
            return Sn;
          },
          callBurl: function () {
            return be;
          },
          checkCookieSupport: function () {
            return Ve;
          },
          chunk: function () {
            return pn;
          },
          cleanObj: function () {
            return un;
          },
          compareOn: function () {
            return bn;
          },
          contains: function () {
            return fe;
          },
          convertCamelToUnderscore: function () {
            return cn;
          },
          convertTypes: function () {
            return fn;
          },
          createInvisibleIframe: function () {
            return $;
          },
          createTrackPixelHtml: function () {
            return Ee;
          },
          createTrackPixelIframeHtml: function () {
            return Se;
          },
          cyrb53Hash: function () {
            return In;
          },
          debugTurnedOn: function () {
            return X;
          },
          deepAccess: function () {
            return c.Z;
          },
          deepClone: function () {
            return qe;
          },
          deepEqual: function () {
            return An;
          },
          deepSetValue: function () {
            return u.Z;
          },
          delayExecution: function () {
            return He;
          },
          fill: function () {
            return gn;
          },
          flatten: function () {
            return Ie;
          },
          formatQS: function () {
            return mn;
          },
          generateUUID: function () {
            return D;
          },
          getAdUnitSizes: function () {
            return x;
          },
          getBidIdParameter: function () {
            return k;
          },
          getBidRequest: function () {
            return Ce;
          },
          getBidderCodes: function () {
            return Ue;
          },
          getDNT: function () {
            return $e;
          },
          getDefinedParams: function () {
            return Ye;
          },
          getGptSlotInfoForAdUnitCode: function () {
            return rn;
          },
          getHighestCpm: function () {
            return De;
          },
          getKeyByValue: function () {
            return Be;
          },
          getKeys: function () {
            return we;
          },
          getLatestHighestCpmBid: function () {
            return je;
          },
          getMaxValueFromArray: function () {
            return yn;
          },
          getMinValueFromArray: function () {
            return vn;
          },
          getOldestHighestCpmBid: function () {
            return ke;
          },
          getOrigin: function () {
            return Xe;
          },
          getParameterByName: function () {
            return ee;
          },
          getPerformanceNow: function () {
            return Le;
          },
          getPrebidInternal: function () {
            return w;
          },
          getUniqueIdentifierStr: function () {
            return R;
          },
          getUserConfiguredParams: function () {
            return Qe;
          },
          getValue: function () {
            return Oe;
          },
          getValueString: function () {
            return Ae;
          },
          getWindowLocation: function () {
            return L;
          },
          getWindowSelf: function () {
            return z;
          },
          getWindowTop: function () {
            return F;
          },
          groupBy: function () {
            return Ze;
          },
          hasConsoleLogger: function () {
            return Q;
          },
          hasDeviceAccess: function () {
            return Ke;
          },
          hasOwn: function () {
            return ge;
          },
          inIframe: function () {
            return Me;
          },
          insertElement: function () {
            return pe;
          },
          insertHtmlIntoIframe: function () {
            return he;
          },
          insertUserSyncIframe: function () {
            return me;
          },
          internal: function () {
            return I;
          },
          isA: function () {
            return ne;
          },
          isAdUnitCodeMatchingSlot: function () {
            return nn;
          },
          isApnGetTagDefined: function () {
            return Re;
          },
          isArray: function () {
            return ie;
          },
          isArrayOfNums: function () {
            return ln;
          },
          isBoolean: function () {
            return ce;
          },
          isEmpty: function () {
            return ue;
          },
          isEmptyStr: function () {
            return se;
          },
          isFn: function () {
            return te;
          },
          isGptPubadsDefined: function () {
            return _e;
          },
          isInteger: function () {
            return an;
          },
          isNumber: function () {
            return oe;
          },
          isPlainObject: function () {
            return ae;
          },
          isSafariBrowser: function () {
            return Ge;
          },
          isSlotMatchingAdUnitCode: function () {
            return tn;
          },
          isStr: function () {
            return re;
          },
          isValidMediaTypes: function () {
            return Je;
          },
          logError: function () {
            return Z;
          },
          logInfo: function () {
            return V;
          },
          logMessage: function () {
            return K;
          },
          logWarn: function () {
            return H;
          },
          mergeDeep: function () {
            return Tn;
          },
          parseGPTSingleSizeArray: function () {
            return M;
          },
          parseGPTSingleSizeArrayToRtbSize: function () {
            return G;
          },
          parseQS: function () {
            return hn;
          },
          parseQueryStringParameters: function () {
            return N;
          },
          parseSizesInput: function () {
            return q;
          },
          parseUrl: function () {
            return En;
          },
          pick: function () {
            return sn;
          },
          prefixLog: function () {
            return Y;
          },
          replaceAuctionPrice: function () {
            return We;
          },
          replaceClickThrough: function () {
            return Fe;
          },
          shuffle: function () {
            return Pe;
          },
          timestamp: function () {
            return ze;
          },
          transformAdServerTargetingObj: function () {
            return P;
          },
          transformBidderParamKeywords: function () {
            return dn;
          },
          triggerPixel: function () {
            return ye;
          },
          tryAppendQueryString: function () {
            return j;
          },
          uniques: function () {
            return Te;
          },
          unsupportedBidderMessage: function () {
            return on;
          },
          waitForElementToLoad: function () {
            return ve;
          }
        });
        var r = t(8962),
          i = t(7079),
          o = t.n(i),
          a = t(1879),
          c = t(265),
          u = t(4806);
        function s(e) {
          return function (e) {
            if (Array.isArray(e)) return f(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || d(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function d(e, n) {
          if (e) {
            if ("string" == typeof e) return f(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(e, n) : void 0;
          }
        }
        function f(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function l(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function g() {
          return g = Object.assign || function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, g.apply(this, arguments);
        }
        function p(e) {
          return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, p(e);
        }
        var v,
          y = t(5644),
          b = Object.prototype.toString,
          h = Boolean(window.console),
          m = Boolean(h && window.console.log),
          E = Boolean(h && window.console.info),
          S = Boolean(h && window.console.warn),
          A = Boolean(h && window.console.error),
          T = function () {
            return null == v && (v = t(2319)), v.emit.apply(v, arguments);
          },
          I = {
            checkCookieSupport: Ve,
            createTrackPixelIframeHtml: Se,
            getWindowSelf: z,
            getWindowTop: F,
            getWindowLocation: L,
            insertUserSyncIframe: me,
            insertElement: pe,
            isFn: te,
            triggerPixel: ye,
            logError: Z,
            logWarn: H,
            logMessage: K,
            logInfo: V,
            parseQS: hn,
            formatQS: mn,
            deepEqual: An
          },
          C = {};
        function w() {
          return C;
        }
        var O,
          B = {},
          U = function (e, n) {
            return n;
          }.bind(null, 1, B)() === B ? Function.prototype.bind : function (e) {
            var n = this,
              t = Array.prototype.slice.call(arguments, 1);
            return function () {
              return n.apply(e, t.concat(Array.prototype.slice.call(arguments)));
            };
          },
          _ = (O = 0, function () {
            return ++O;
          });
        function R() {
          return _() + Math.random().toString(16).substr(2);
        }
        function D(e) {
          return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, D);
        }
        function k(e, n) {
          return n && n[e] ? n[e] : "";
        }
        function j(e, n, t) {
          return t ? e + n + "=" + encodeURIComponent(t) + "&" : e;
        }
        function N(e) {
          var n = "";
          for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
          return n.replace(/&$/, "");
        }
        function P(e) {
          return e && Object.getOwnPropertyNames(e).length > 0 ? we(e).map(function (n) {
            return "".concat(n, "=").concat(encodeURIComponent(Oe(e, n)));
          }).join("&") : "";
        }
        function x(e) {
          if (e) {
            var n = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
              var t = e.mediaTypes.banner.sizes;
              Array.isArray(t[0]) ? n = t : n.push(t);
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
            return n;
          }
        }
        function q(e) {
          var n = [];
          if ("string" == typeof e) {
            var t = e.split(","),
              r = /^(\d)+x(\d)+$/i;
            if (t) for (var i in t) ge(t, i) && t[i].match(r) && n.push(t[i]);
          } else if ("object" === p(e)) {
            var o = e.length;
            if (o > 0) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) n.push(M(e));else for (var a = 0; a < o; a++) n.push(M(e[a]));
          }
          return n;
        }
        function M(e) {
          if (W(e)) return e[0] + "x" + e[1];
        }
        function G(e) {
          if (W(e)) return {
            w: e[0],
            h: e[1]
          };
        }
        function W(e) {
          return ie(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function F() {
          return window.top;
        }
        function z() {
          return window.self;
        }
        function L() {
          return window.location;
        }
        function K() {
          X() && m && console.log.apply(console, J(arguments, "MESSAGE:"));
        }
        function V() {
          X() && E && console.info.apply(console, J(arguments, "INFO:"));
        }
        function H() {
          X() && S && console.warn.apply(console, J(arguments, "WARNING:")), T(y.EVENTS.AUCTION_DEBUG, {
            type: "WARNING",
            arguments: arguments
          });
        }
        function Z() {
          X() && A && console.error.apply(console, J(arguments, "ERROR:")), T(y.EVENTS.AUCTION_DEBUG, {
            type: "ERROR",
            arguments: arguments
          });
        }
        function Y(e) {
          function n(n) {
            return function () {
              for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
              n.apply(void 0, [e].concat(r));
            };
          }
          return {
            logError: n(Z),
            logWarn: n(H),
            logMessage: n(K),
            logInfo: n(V)
          };
        }
        function J(e, n) {
          e = [].slice.call(e);
          var t = r.vc.getCurrentBidder();
          return n && e.unshift(n), t && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")), e;
          function i(e) {
            return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;");
          }
        }
        function Q() {
          return m;
        }
        function X() {
          return !!r.vc.getConfig("debug");
        }
        function $() {
          var e = document.createElement("iframe");
          return e.id = R(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e;
        }
        function ee(e) {
          return hn(L().search)[e] || "";
        }
        function ne(e, n) {
          return b.call(e) === "[object " + n + "]";
        }
        function te(e) {
          return ne(e, "Function");
        }
        function re(e) {
          return ne(e, "String");
        }
        function ie(e) {
          return ne(e, "Array");
        }
        function oe(e) {
          return ne(e, "Number");
        }
        function ae(e) {
          return ne(e, "Object");
        }
        function ce(e) {
          return ne(e, "Boolean");
        }
        function ue(e) {
          if (!e) return !0;
          if (ie(e) || re(e)) return !(e.length > 0);
          for (var n in e) if (hasOwnProperty.call(e, n)) return !1;
          return !0;
        }
        function se(e) {
          return re(e) && (!e || 0 === e.length);
        }
        function de(e, n) {
          if (!ue(e)) {
            if (te(e.forEach)) return e.forEach(n, this);
            var t = 0,
              r = e.length;
            if (r > 0) for (; t < r; t++) n(e[t], t, e);else for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t);
          }
        }
        function fe(e, n) {
          if (ue(e)) return !1;
          if (te(e.indexOf)) return -1 !== e.indexOf(n);
          for (var t = e.length; t--;) if (e[t] === n) return !0;
          return !1;
        }
        function le(e, n) {
          if (ue(e)) return [];
          if (te(e.map)) return e.map(n);
          var t = [];
          return de(e, function (r, i) {
            t.push(n(r, i, e));
          }), t;
        }
        function ge(e, n) {
          return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n];
        }
        function pe(e, n, t, r) {
          var i;
          n = n || document, i = t ? n.getElementsByTagName(t) : n.getElementsByTagName("head");
          try {
            if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
              i = i[0];
              var o = r ? null : i.firstChild;
              return i.insertBefore(e, o);
            }
          } catch (e) {}
        }
        function ve(e, n) {
          var t = null;
          return new Promise(function (r) {
            var i = function n() {
              e.removeEventListener("load", n), e.removeEventListener("error", n), null != t && window.clearTimeout(t), r();
            };
            e.addEventListener("load", i), e.addEventListener("error", i), null != n && (t = window.setTimeout(i, n));
          });
        }
        function ye(e, n, t) {
          var r = new Image();
          n && I.isFn(n) && ve(r, t).then(n), r.src = e;
        }
        function be(e) {
          var n = e.source,
            t = e.burl;
          n === y.S2S.SRC && t && I.triggerPixel(t);
        }
        function he(e) {
          if (e) {
            var n = document.createElement("iframe");
            n.id = R(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", I.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close();
          }
        }
        function me(e, n, t) {
          var r = I.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
            i = document.createElement("div");
          i.innerHTML = r;
          var o = i.firstChild;
          n && I.isFn(n) && ve(o, t).then(n), I.insertElement(o, document, "html", !0);
        }
        function Ee(e) {
          return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">' + '<img src="' + encodeURI(e) + '"></div>' : "";
        }
        function Se(e) {
          var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          return e ? (n && (e = encodeURI(e)), t && (t = 'sandbox="'.concat(t, '"')), "<iframe ".concat(t, ' id="').concat(R(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function Ae(e, n, t) {
          return null == n ? t : re(n) ? n : oe(n) ? n.toString() : void I.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function Te(e, n, t) {
          return t.indexOf(e) === n;
        }
        function Ie(e, n) {
          return e.concat(n);
        }
        function Ce(e, n) {
          var t;
          if (e) return n.some(function (n) {
            var r = (0, a.sE)(n.bids, function (n) {
              return ["bidId", "adId", "bid_id"].some(function (t) {
                return n[t] === e;
              });
            });
            return r && (t = r), r;
          }), t;
        }
        function we(e) {
          return Object.keys(e);
        }
        function Oe(e, n) {
          return e[n];
        }
        function Be(e, n) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t] === n) return t;
        }
        function Ue() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits;
          return e.map(function (e) {
            return e.bids.map(function (e) {
              return e.bidder;
            }).reduce(Ie, []);
          }).reduce(Ie, []).filter(Te);
        }
        function _e() {
          if (window.googletag && te(window.googletag.pubads) && te(window.googletag.pubads().getSlots)) return !0;
        }
        function Re() {
          if (window.apntag && te(window.apntag.getTag)) return !0;
        }
        var De = Ne("timeToRespond", function (e, n) {
            return e > n;
          }),
          ke = Ne("responseTimestamp", function (e, n) {
            return e > n;
          }),
          je = Ne("responseTimestamp", function (e, n) {
            return e < n;
          });
        function Ne(e, n) {
          return function (t, r) {
            return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t;
          };
        }
        function Pe(e) {
          for (var n = e.length; n > 0;) {
            var t = Math.floor(Math.random() * n),
              r = e[--n];
            e[n] = e[t], e[t] = r;
          }
          return e;
        }
        function xe(e, n) {
          return (0, a.q9)(e, n && n.adUnitCode);
        }
        function qe(e) {
          return o()(e);
        }
        function Me() {
          try {
            return I.getWindowSelf() !== I.getWindowTop();
          } catch (e) {
            return !0;
          }
        }
        function Ge() {
          return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
        }
        function We(e, n) {
          if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n);
        }
        function Fe(e, n) {
          if (e && n && "string" == typeof n) return e.replace(/\${CLICKTHROUGH}/g, n);
        }
        function ze() {
          return new Date().getTime();
        }
        function Le() {
          return window.performance && window.performance.now && window.performance.now() || 0;
        }
        function Ke() {
          return !1 !== r.vc.getConfig("deviceAccess");
        }
        function Ve() {
          if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        function He(e, n) {
          if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
          var t = 0;
          return function () {
            ++t === n && e.apply(this, arguments);
          };
        }
        function Ze(e, n) {
          return e.reduce(function (e, t) {
            return (e[t[n]] = e[t[n]] || []).push(t), e;
          }, {});
        }
        function Ye(e, n) {
          return n.filter(function (n) {
            return e[n];
          }).reduce(function (n, t) {
            return g(n, l({}, t, e[t]));
          }, {});
        }
        function Je(e) {
          var n = ["banner", "native", "video"];
          return !!Object.keys(e).every(function (e) {
            return (0, a.q9)(n, e);
          }) && (!e.video || !e.video.context || (0, a.q9)(["instream", "outstream", "adpod"], e.video.context));
        }
        function Qe(e, n, t) {
          return e.filter(function (e) {
            return e.code === n;
          }).map(function (e) {
            return e.bids;
          }).reduce(Ie, []).filter(function (e) {
            return e.bidder === t;
          }).map(function (e) {
            return e.params || {};
          });
        }
        function Xe() {
          return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }
        function $e() {
          return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
        }
        var en = function (e, n) {
          return e.getAdUnitPath() === n || e.getSlotElementId() === n;
        };
        function nn(e) {
          return function (n) {
            return en(e, n);
          };
        }
        function tn(e) {
          return function (n) {
            return en(n, e);
          };
        }
        function rn(e) {
          var n;
          return _e() && (n = (0, a.sE)(window.googletag.pubads().getSlots(), tn(e))), n ? {
            gptSlot: n.getAdUnitPath(),
            divId: n.getSlotElementId()
          } : {};
        }
        function on(e, n) {
          var t = Object.keys(e.mediaTypes || {
            banner: "banner"
          }).join(", ");
          return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ");
        }
        function an(e) {
          return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function cn(e) {
          return e.replace(/(?:^|\.?)([A-Z])/g, function (e, n) {
            return "_" + n.toLowerCase();
          }).replace(/^_/, "");
        }
        function un(e) {
          return Object.keys(e).reduce(function (n, t) {
            return void 0 !== e[t] && (n[t] = e[t]), n;
          }, {});
        }
        function sn(e, n) {
          return "object" !== p(e) ? {} : n.reduce(function (t, r, i) {
            if ("function" == typeof r) return t;
            var o = r,
              a = r.match(/^(.+?)\sas\s(.+?)$/i);
            a && (r = a[1], o = a[2]);
            var c = e[r];
            return "function" == typeof n[i + 1] && (c = n[i + 1](c, t)), void 0 !== c && (t[o] = c), t;
          }, {});
        }
        function dn(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
            t = [];
          return de(e, function (e, r) {
            if (ie(e)) {
              var i = [];
              de(e, function (e) {
                ((e = Ae(n + "." + r, e)) || "" === e) && i.push(e);
              }), e = i;
            } else {
              if (!re(e = Ae(n + "." + r, e))) return;
              e = [e];
            }
            t.push({
              key: r,
              value: e
            });
          }), t;
        }
        function fn(e, n) {
          return Object.keys(e).forEach(function (t) {
            var r, i;
            n[t] && (te(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key);
          }), n;
        }
        function ln(e, n) {
          return ie(e) && (!n || e.length === n) && e.every(function (e) {
            return an(e);
          });
        }
        function gn(e, n) {
          for (var t = [], r = 0; r < n; r++) {
            var i = ae(e) ? qe(e) : e;
            t.push(i);
          }
          return t;
        }
        function pn(e, n) {
          for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
            var i = r * n,
              o = i + n;
            t.push(e.slice(i, o));
          }
          return t;
        }
        function vn(e) {
          return Math.min.apply(Math, s(e));
        }
        function yn(e) {
          return Math.max.apply(Math, s(e));
        }
        function bn(e) {
          return function (n, t) {
            return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0;
          };
        }
        function hn(e) {
          return e ? e.replace(/^\?/, "").split("&").reduce(function (e, n) {
            var t,
              r,
              i = (t = n.split("="), r = 2, function (e) {
                if (Array.isArray(e)) return e;
              }(t) || function (e, n) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                  var r,
                    i,
                    o = [],
                    a = !0,
                    c = !1;
                  try {
                    for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                  } catch (e) {
                    c = !0, i = e;
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw i;
                    }
                  }
                  return o;
                }
              }(t, r) || d(t, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()),
              o = i[0],
              a = i[1];
            return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e;
          }, {}) : {};
        }
        function mn(e) {
          return Object.keys(e).map(function (n) {
            return Array.isArray(e[n]) ? e[n].map(function (e) {
              return "".concat(n, "[]=").concat(e);
            }).join("&") : "".concat(n, "=").concat(e[n]);
          }).join("&");
        }
        function En(e, n) {
          var t = document.createElement("a");
          n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
          var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
          return {
            href: t.href,
            protocol: (t.protocol || "").replace(/:$/, ""),
            hostname: t.hostname,
            port: +t.port,
            pathname: t.pathname.replace(/^(?!\/)/, "/"),
            search: r ? t.search : I.parseQS(t.search || ""),
            hash: (t.hash || "").replace(/^#/, ""),
            host: t.host || window.location.host
          };
        }
        function Sn(e) {
          return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(I.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        }
        function An(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = t.checkTypes,
            i = void 0 !== r && r;
          if (e === n) return !0;
          if ("object" !== p(e) || null === e || "object" !== p(n) || null === n || i && e.constructor !== n.constructor) return !1;
          if (Object.keys(e).length !== Object.keys(n).length) return !1;
          for (var o in e) {
            if (!n.hasOwnProperty(o)) return !1;
            if (!An(e[o], n[o], {
              checkTypes: i
            })) return !1;
          }
          return !0;
        }
        function Tn(e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          if (!t.length) return e;
          var i = t.shift();
          if (ae(e) && ae(i)) {
            var o = function (n) {
              ae(i[n]) ? (e[n] || g(e, l({}, n, {})), Tn(e[n], i[n])) : ie(i[n]) ? e[n] ? ie(e[n]) && i[n].forEach(function (t) {
                for (var r = 1, i = 0; i < e[n].length; i++) if (An(e[n][i], t)) {
                  r = 0;
                  break;
                }
                r && e[n].push(t);
              }) : g(e, l({}, n, s(i[n]))) : g(e, l({}, n, i[n]));
            };
            for (var a in i) o(a);
          }
          return Tn.apply(void 0, [e].concat(t));
        }
        function In(e) {
          for (var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, n) {
              if (te(Math.imul)) return Math.imul(e, n);
              var t = (4194303 & e) * (n |= 0);
              return 4290772992 & e && (t += (4290772992 & e) * n | 0), 0 | t;
            }, i = 3735928559 ^ t, o = 1103547991 ^ t, a = 0; a < e.length; a++) i = r(i ^ (n = e.charCodeAt(a)), 2654435761), o = r(o ^ n, 1597334677);
          return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
        }
      },
      1929: function (e, n, t) {
        "use strict";

        t.d(n, {
          Dn: function () {
            return d;
          },
          LD: function () {
            return s;
          },
          gZ: function () {
            return u;
          },
          hD: function () {
            return f;
          }
        });
        var r = t(265),
          i = t(9853),
          o = t(8962),
          a = t(3494),
          c = t(4766),
          u = "outstream",
          s = "instream";
        function d(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.index,
            i = void 0 === t ? c.K.index : t,
            o = (0, r.Z)(i.getMediaTypes(e), "video"),
            a = o && (0, r.Z)(o, "context"),
            u = i.getAdUnit(e);
          return f(e, u, o, a);
        }
        var f = (0, a.z3)("sync", function (e, n, t, r) {
          return t && r !== u ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== u || !!(e.renderer || n && n.renderer || t.renderer);
        }, "checkVideoBidSetup");
      },
      905: function (e, n, t) {
        "use strict";

        t.d(n, {
          h: function () {
            return u;
          },
          z: function () {
            return s;
          }
        });
        var r = t(5755),
          i = t(8962),
          o = t(4766);
        function a(e, n) {
          var t = n ? "<![CDATA[".concat(n, "]]>") : "";
          return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(t, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>");
        }
        function c(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.index,
            r = void 0 === t ? o.K.index : t,
            c = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
            u = r.getAuction(e),
            s = {
              type: "xml",
              value: c,
              ttlseconds: Number(e.ttl)
            };
          return i.vc.getConfig("cache.vasttrack") && (s.bidder = e.bidder, s.bidid = e.requestId, s.aid = e.auctionId), null != u && (s.timestamp = u.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (s.key = e.customCacheKey), s;
        }
        function u(e, n) {
          var t = {
            puts: e.map(c)
          };
          (0, r.h)(i.vc.getConfig("cache.url"), function (e) {
            return {
              success: function (n) {
                var t;
                try {
                  t = JSON.parse(n).responses;
                } catch (n) {
                  return void e(n, []);
                }
                t ? e(null, t) : e(new Error("The cache server didn't respond with a responses property."), []);
              },
              error: function (n, t) {
                e(new Error("Error storing video ad in the cache: ".concat(n, ": ").concat(JSON.stringify(t))), []);
              }
            };
          }(n), JSON.stringify(t), {
            contentType: "text/plain",
            withCredentials: !0
          });
        }
        function s(e) {
          return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e);
        }
      },
      265: function (e, n, t) {
        "use strict";

        function r(e, n, t, r, i) {
          for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++) e = e ? e[n[r]] : i;
          return e === i ? t : e;
        }
        t.d(n, {
          Z: function () {
            return r;
          }
        });
      },
      4806: function (e, n, t) {
        "use strict";

        function r(e, n, t) {
          n.split && (n = n.split("."));
          for (var r, i = 0, o = n.length, a = e; i < o; ++i) r = a[n[i]], a = a[n[i]] = i === o - 1 ? t : null != r ? r : !~n[i + 1].indexOf(".") && +n[i + 1] > -1 ? [] : {};
        }
        t.d(n, {
          Z: function () {
            return r;
          }
        });
      },
      1432: function (e) {
        a.SYNC = 1, a.ASYNC = 2, a.QUEUE = 4;
        var n = Object.freeze({
            useProxy: !0,
            ready: 0
          }),
          t = new WeakMap(),
          r = "2,1,0" === [1].reduce(function (e, n, t) {
            return [e, n, t];
          }, 2).toString() ? Array.prototype.reduce : function (e, n) {
            var t,
              r = Object(this),
              i = r.length >>> 0,
              o = 0;
            if (n) t = n;else {
              for (; o < i && !(o in r);) o++;
              t = r[o++];
            }
            for (; o < i;) o in r && (t = e(t, r[o], o, r)), o++;
            return t;
          };
        function i(e, n) {
          return Array.prototype.slice.call(e, n);
        }
        var o = Object.assign || function (e) {
          return r.call(i(arguments, 1), function (e, n) {
            return n && Object.keys(n).forEach(function (t) {
              e[t] = n[t];
            }), e;
          }, e);
        };
        function a(e) {
          var c,
            u = {},
            s = [];
          function d(e, n) {
            return "function" == typeof e ? p.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? p.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0;
          }
          function f(e, n, t) {
            var r = !0;
            void 0 === n && (n = Object.getOwnPropertyNames(e), r = !1);
            var i = {},
              o = ["constructor"];
            do {
              (n = n.filter(function (n) {
                return !("function" != typeof e[n] || -1 !== o.indexOf(n) || n.match(/^_/));
              })).forEach(function (n) {
                var r = n.split(":"),
                  o = r[0],
                  a = r[1] || "sync";
                if (!i[o]) {
                  var c = e[o];
                  i[o] = e[o] = p(a, c, t ? [t, o] : void 0);
                }
              }), e = Object.getPrototypeOf(e);
            } while (r && e);
            return i;
          }
          function l(e) {
            var n = Array.isArray(e) ? e : e.split(".");
            return r.call(n, function (t, r, i) {
              var o = t[r],
                a = !1;
              return o || (i === n.length - 1 ? (c || s.push(function () {
                a || console.warn("fun-hooks: referenced '" + e + "' but it was never created");
              }), t[r] = g(function (e) {
                t[r] = e, a = !0;
              })) : t[r] = {});
            }, u);
          }
          function g(e) {
            var n = [],
              r = [],
              i = function () {},
              a = {
                before: function (e, t) {
                  return u.call(this, n, "before", e, t);
                },
                after: function (e, n) {
                  return u.call(this, r, "after", e, n);
                },
                getHooks: function (e) {
                  var t = n.concat(r);
                  "object" == typeof e && (t = t.filter(function (n) {
                    return Object.keys(e).every(function (t) {
                      return n[t] === e[t];
                    });
                  }));
                  try {
                    o(t, {
                      remove: function () {
                        return t.forEach(function (e) {
                          e.remove();
                        }), this;
                      }
                    });
                  } catch (e) {
                    console.error("error adding `remove` to array, did you modify Array.prototype?");
                  }
                  return t;
                },
                removeAll: function () {
                  return this.getHooks().remove();
                }
              },
              c = {
                install: function (t, o, a) {
                  this.type = t, i = a, a(n, r), e && e(o);
                }
              };
            return t.set(a.after, c), a;
            function u(e, t, o, a) {
              var c = {
                hook: o,
                type: t,
                priority: a || 10,
                remove: function () {
                  var t = e.indexOf(c);
                  -1 !== t && (e.splice(t, 1), i(n, r));
                }
              };
              return e.push(c), e.sort(function (e, n) {
                return n.priority - e.priority;
              }), i(n, r), this;
            }
          }
          function p(n, r, u) {
            var d = r.after && t.get(r.after);
            if (d) {
              if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
              return r;
            }
            var f,
              p,
              v = u ? l(u) : g(),
              y = {
                get: function (e, n) {
                  return v[n] || Reflect.get.apply(Reflect, arguments);
                }
              };
            return c || s.push(b), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? p = new Proxy(r, y) : (p = function () {
              return y.apply ? y.apply(r, this, i(arguments)) : r.apply(this, arguments);
            }, o(p, v)), t.get(p.after).install(n, p, function (e, t) {
              var r,
                o = [];
              function a(e) {
                o.push(e.hook);
              }
              e.length || t.length ? (e.forEach(a), r = o.push(void 0) - 1, t.forEach(a), f = function (e, t, a) {
                var c,
                  u = 0,
                  s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();
                function d(e) {
                  "sync" === n ? c = e : s && s.apply(null, arguments);
                }
                function f(e) {
                  if (o[u]) {
                    var r = i(arguments);
                    return f.bail = d, r.unshift(f), o[u++].apply(t, r);
                  }
                  "sync" === n ? c = e : s && s.apply(null, arguments);
                }
                return o[r] = function () {
                  var r = i(arguments, 1);
                  "async" === n && s && (delete f.bail, r.push(f));
                  var o = e.apply(t, r);
                  "sync" === n && f(o);
                }, f.apply(null, a), c;
              }) : f = void 0, b();
            }), p;
            function b() {
              !c && ("sync" !== n || e.ready & a.SYNC) && ("async" !== n || e.ready & a.ASYNC) ? "sync" !== n && e.ready & a.QUEUE ? y.apply = function () {
                var e = arguments;
                s.push(function () {
                  p.apply(e[1], e[2]);
                });
              } : y.apply = function () {
                throw "fun-hooks: hooked function not ready";
              } : y.apply = f;
            }
          }
          return (e = o({}, n, e)).ready ? d.ready = function () {
            c = !0, function (e) {
              for (var n; n = e.shift();) n();
            }(s);
          } : c = !0, d.get = l, d;
        }
        e.exports = a;
      },
      7079: function (e) {
        e.exports = function e(n) {
          var t = Array.isArray(n) ? [] : {};
          for (var r in n) {
            var i = n[r];
            t[r] = i && "object" == typeof i ? e(i) : i;
          }
          return t;
        };
      },
      5644: function (e) {
        "use strict";

        e.exports = JSON.parse('{"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"}}');
      }
    },
    t = {};
  function r(e) {
    var i = t[e];
    if (void 0 !== i) return i.exports;
    var o = t[e] = {
      exports: {}
    };
    return n[e].call(o.exports, o, o.exports, r), o.exports;
  }
  r.m = n, e = [], r.O = function (n, t, i, o) {
    if (!t) {
      var a = 1 / 0;
      for (d = 0; d < e.length; d++) {
        t = e[d][0], i = e[d][1], o = e[d][2];
        for (var c = !0, u = 0; u < t.length; u++) (!1 & o || a >= o) && Object.keys(r.O).every(function (e) {
          return r.O[e](t[u]);
        }) ? t.splice(u--, 1) : (c = !1, o < a && (a = o));
        if (c) {
          e.splice(d--, 1);
          var s = i();
          void 0 !== s && (n = s);
        }
      }
      return n;
    }
    o = o || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
    e[d] = [t, i, o];
  }, r.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(n, {
      a: n
    }), n;
  }, r.d = function (e, n) {
    for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: n[t]
    });
  }, r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), r.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, function () {
    var e = {
      5602: 0
    };
    r.O.j = function (n) {
      return 0 === e[n];
    };
    var n = function (n, t) {
        var i,
          o,
          a = t[0],
          c = t[1],
          u = t[2],
          s = 0;
        if (a.some(function (n) {
          return 0 !== e[n];
        })) {
          for (i in c) r.o(c, i) && (r.m[i] = c[i]);
          if (u) var d = u(r);
        }
        for (n && n(t); s < a.length; s++) o = a[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return r.O(d);
      },
      t = self.pbjsChunk = self.pbjsChunk || [];
    t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t));
  }();
  var i = r(2786);
  i = r.O(i);
}();
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[4871], {
  8649: function (e, t, n) {
    var i = n(9853),
      r = n(265),
      a = n(4892),
      o = n(2786),
      d = n(1929),
      u = n(3494),
      c = n(905),
      l = n(8962),
      s = n(8265),
      f = n(1879),
      v = n(4766),
      g = n(5644);
    function h() {
      return h = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }, h.apply(this, arguments);
    }
    function p(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function b(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var i,
            r,
            a = [],
            o = !0,
            d = !1;
          try {
            for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
          } catch (e) {
            d = !0, r = e;
          } finally {
            try {
              o || null == n.return || n.return();
            } finally {
              if (d) throw r;
            }
          }
          return a;
        }
      }(e, t) || m(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function m(e, t) {
      if (e) {
        if ("string" == typeof e) return y(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0;
      }
    }
    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    var T = "hb_pb_cat_dur",
      C = "hb_cache_id",
      S = 50,
      _ = 5,
      E = function () {
        var e = {};
        function t(t) {
          var n, r, a;
          e[t] = {}, e[t].bidStorage = new Set(), e[t].queueDispatcher = (n = S, a = 1, function (e, t, i, o) {
            var d = this,
              u = function () {
                w.call(d, e, t, i);
              };
            clearTimeout(r), o ? a = 1 : a === _ ? (a = 1, u()) : (a++, r = setTimeout(u, n));
          }), e[t].initialCacheKey = (0, i.generateUUID)();
        }
        return {
          addBid: function (n) {
            e[n.auctionId] || t(n.auctionId), e[n.auctionId].bidStorage.add(n);
          },
          removeBid: function (t) {
            e[t.auctionId].bidStorage.delete(t);
          },
          getBids: function (t) {
            return e[t.auctionId] && e[t.auctionId].bidStorage.values();
          },
          getQueueDispatcher: function (t) {
            return e[t.auctionId] && e[t.auctionId].queueDispatcher;
          },
          setupInitialCacheKey: function (t) {
            e[t.auctionId] || (e[t.auctionId] = {}, e[t.auctionId].initialCacheKey = (0, i.generateUUID)());
          },
          getInitialCacheKey: function (t) {
            return e[t.auctionId] && e[t.auctionId].initialCacheKey;
          }
        };
      }();
    function I(e, t) {
      var n,
        i = E.getInitialCacheKey(e),
        o = (0, r.Z)(e, "video.durationBucket"),
        d = function (e) {
          var t;
          if (l.vc.getConfig("adpod.prioritizeDeals") && (0, r.Z)(e, "video.dealTier")) {
            var n = l.vc.getConfig("adpod.dealTier.".concat(e.bidderCode, ".prefix"));
            t = n ? n + (0, r.Z)(e, "video.dealTier") : (0, r.Z)(e, "video.dealTier");
          } else {
            var i = (0, a.RH)(e);
            t = (0, a.dg)(i)(e);
          }
          return t;
        }(e);
      if (t) {
        var u = (0, r.Z)(e, "meta.adServerCatId");
        n = "".concat(d, "_").concat(u, "_").concat(o, "s");
      } else n = "".concat(d, "_").concat(o, "s");
      e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting.hb_pb_cat_dur = n, e.adserverTargeting.hb_cache_id = i, e.videoCacheKey = i, e.customCacheKey = "".concat(n, "_").concat(i);
    }
    function w(e, t, n) {
      !function (e) {
        for (var t = 0; t < e.length; t++) E.removeBid(e[t]);
      }(t), (0, c.h)(t, function (r, o) {
        if (r) {
          (0, i.logWarn)("Failed to save to the video cache: ".concat(r, ". Video bid(s) must be discarded."));
          for (var d = 0; d < t.length; d++) (0, a.sq)(e, t[d]);
        } else for (var u = 0; u < o.length; u++) "" !== o[u].uuid ? (0, a.lU)(e, t[u]) : (0, i.logInfo)("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(t[u].customCacheKey, ". Bid was: "), t[u]), n();
      });
    }
    function D(e, t) {
      (0, c.h)(e, function (n, i) {
        if (n) t(n, null);else {
          for (var r = [], a = 0; a < i.length; a++) "" !== i[a] && r.push(e[a]);
          t(null, r);
        }
      });
    }
    function U(e, t) {
      return e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket < t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? 1 : e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket > t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? -1 : 0;
    }
    function A(e) {
      return v.K.getAdUnits().filter(function (e) {
        return (0, r.Z)(e, "mediaTypes.video.context") === s.Oh;
      }).filter(function (t) {
        return !(e.length > 0) || -1 != e.indexOf(t.code);
      });
    }
    function B(e) {
      var t = e.map(function (e) {
        return h({}, e, p({}, T, e.adserverTargeting.hb_pb_cat_dur));
      });
      t = (0, i.groupBy)(t, T);
      var n = [];
      return Object.keys(t).forEach(function (e) {
        t[e].sort((0, i.compareOn)("responseTimestamp")), n.push(t[e][0]);
      }), n;
    }
    function O(e, t) {
      var n = t.map(function (e) {
        return e.code;
      });
      return e.filter(function (e) {
        return -1 != n.indexOf(e.adUnitCode) && e.video && e.video.context === s.Oh;
      });
    }
    l.vc.getConfig("adpod", function (e) {
      return function (e) {
        void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && e.bidQueueTimeDelay > 0 ? S = e.bidQueueTimeDelay : (0, i.logWarn)("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(S))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && e.bidQueueSizeLimit > 0 ? _ = e.bidQueueSizeLimit : (0, i.logWarn)("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(_)));
      }(e.adpod);
    }), (0, u.o0)(a.D$, function (e, t, n, o, d) {
      if (d && d.context === s.Oh) {
        var u = l.vc.getConfig("adpod.brandCategoryExclusion");
        !(0, r.Z)(n, "meta.adServerCatId") && u ? ((0, i.logWarn)("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), o()) : !1 === l.vc.getConfig("adpod.deferCaching") ? (E.addBid(n), I(n, u), function (e, t, n) {
          var r = E.getBids(t);
          if (r) {
            var o = (0, f.Oc)(r),
              d = E.getQueueDispatcher(t),
              u = !(e.getAuctionStatus() === a.Yw);
            d(e, o, n, u);
          } else (0, i.logWarn)("Attempted to cache a bid from an unknown auction. Bid:", t);
        }(t, n, o)) : (E.setupInitialCacheKey(n), I(n, u), (0, a.lU)(t, n), o());
      } else e.call(this, t, n, o, d);
    }), (0, u.o0)(o.O5, function (e, t) {
      var n = t.filter(function (e) {
        var t = (0, r.Z)(e, "mediaTypes"),
          n = (0, r.Z)(t, "video");
        if (n && n.context === s.Oh) {
          if (Object.keys(t).length > 1) return (0, i.logWarn)("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
          var a = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
            o = !!(n.playerSize && ((0, i.isArrayOfNums)(n.playerSize, 2) || (0, i.isArray)(n.playerSize) && n.playerSize.every(function (e) {
              return (0, i.isArrayOfNums)(e, 2);
            })) || n.sizeConfig),
            d = !!(n.adPodDurationSec && (0, i.isNumber)(n.adPodDurationSec) && n.adPodDurationSec > 0),
            u = !!(n.durationRangeSec && (0, i.isArrayOfNums)(n.durationRangeSec) && n.durationRangeSec.every(function (e) {
              return e > 0;
            }));
          if (!o || !d || !u) return a += o ? "" : "\nmediaTypes.video.playerSize", a += d ? "" : "\nmediaTypes.video.adPodDurationSec", a += u ? "" : "\nmediaTypes.video.durationRangeSec", (0, i.logWarn)(a), !1;
        }
        return !0;
      });
      t = n, e.call(this, t);
    }), (0, u.o0)(d.hD, function (e, t, n, a, o) {
      if (o === s.Oh) {
        var d = !0;
        if (l.vc.getConfig("adpod.brandCategoryExclusion") && !(0, r.Z)(t, "meta.primaryCatId") && (d = !1), (0, r.Z)(t, "video")) if ((0, r.Z)(t, "video.context") && t.video.context === s.Oh || (d = !1), !(0, r.Z)(t, "video.durationSeconds") || t.video.durationSeconds <= 0) d = !1;else {
          var u = function (e, t) {
            var n,
              a = (0, r.Z)(t, "video.durationSeconds"),
              o = e.durationRangeSec;
            if (o.sort(function (e, t) {
              return e - t;
            }), e.requireExactDuration) {
              if (!(0, f.sE)(o, function (e) {
                return e === a;
              })) return (0, i.logWarn)("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
              t.video.durationBucket = a;
            } else {
              var d = Math.max.apply(Math, function (e) {
                if (Array.isArray(e)) return y(e);
              }(n = o) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
              }(n) || m(n) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }());
              if (!(a <= d + 2)) return (0, i.logWarn)("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
              var u = (0, f.sE)(o, function (e) {
                return e + 2 >= a;
              });
              t.video.durationBucket = u;
            }
            return !0;
          }(a, t);
          u || (d = !1);
        }
        l.vc.getConfig("cache.url") || !t.vastXml || t.vastUrl || ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), d = !1), e.bail(d);
      } else e.call(this, t, n, a, o);
    });
    var k = {
      TARGETING_KEY_PB_CAT_DUR: T,
      TARGETING_KEY_CACHE_ID: C,
      getTargeting: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.codes,
          n = e.callback;
        if (n) {
          var a = A(t = t || []),
            o = v.K.getBidsReceived(),
            d = l.vc.getConfig("adpod.brandCategoryExclusion"),
            u = l.vc.getConfig("adpod.deferCaching"),
            c = "boolean" != typeof u || u,
            s = O(o, a);
          s = d || c ? B(s) : s;
          var f = l.vc.getConfig("adpod.prioritizeDeals");
          if (f) {
            var g = s.reduce(function (e, t) {
                var n = (0, r.Z)(t, "video.dealTier"),
                  i = l.vc.getConfig("adpod.dealTier.".concat(t.bidderCode, ".minDealTier"));
                return i && n ? n >= i ? e[1].push(t) : e[0].push(t) : n ? e[1].push(t) : e[0].push(t), e;
              }, [[], []]),
              h = b(g, 2),
              m = h[0],
              y = h[1];
            y.sort(U), m.sort(U), s = y.concat(m);
          } else s.sort(U);
          var S = {};
          if (!1 === c) a.forEach(function (e) {
            var t = [],
              n = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
            s.filter(function (t) {
              return t.adUnitCode === e.code;
            }).forEach(function (e, i, r) {
              e.video.durationBucket <= n && (t.push(p({}, T, e.adserverTargeting.hb_pb_cat_dur)), n -= e.video.durationBucket), i === r.length - 1 && t.length > 0 && t.push(p({}, C, e.adserverTargeting.hb_cache_id));
            }), S[e.code] = t;
          }), n(null, S);else {
            var _ = [];
            a.forEach(function (e) {
              var t = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
              s.filter(function (t) {
                return t.adUnitCode === e.code;
              }).forEach(function (e) {
                e.video.durationBucket <= t && (_.push(e), t -= e.video.durationBucket);
              });
            }), D(_, function (e, t) {
              if (e) n(e, null);else {
                var r = (0, i.groupBy)(t, "adUnitCode");
                Object.keys(r).forEach(function (e) {
                  var t = [];
                  r[e].forEach(function (e, n, i) {
                    t.push(p({}, T, e.adserverTargeting.hb_pb_cat_dur)), n === i.length - 1 && t.length > 0 && t.push(p({}, C, e.adserverTargeting.hb_cache_id));
                  }), S[e] = t;
                }), n(null, S);
              }
            });
          }
          return S;
        }
        (0, i.logError)("No callback function was defined in the getTargeting call.  Aborting getTargeting().");
      }
    };
    Object.freeze(k), (0, u.bA)("adpod", function () {
      function e(e, t) {
        for (var n in t) e[n] = t[n];
      }
      (0, i.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0]) ? e(arguments.length <= 0 ? void 0 : arguments[0], k) : (0, i.logError)("Adpod module needs plain object to share methods with submodule");
    }), window.pbjs.installedModules.push("adpod");
  }
}, function (e) {
  e(e.s = 8649);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[3864], {
  3231: function (e, r, a) {
    a.d(r, {
      p: function () {
        return S;
      }
    });
    var t = a(9853),
      n = a(265),
      i = a(4877),
      s = a(8962),
      o = a(1609),
      d = a(8265),
      p = a(4766),
      u = a(1879),
      c = a(1929),
      l = a(5849),
      m = a(9624);
    function f(e) {
      return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, f(e);
    }
    function v() {
      return v = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        }
        return e;
      }, v.apply(this, arguments);
    }
    function g(e) {
      return function (e) {
        if (Array.isArray(e)) return y(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, r) {
        if (e) {
          if ("string" == typeof e) return y(e, r);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? y(e, r) : void 0;
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function y(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
      return t;
    }
    var b = "appnexus",
      h = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
      _ = ["minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api"],
      k = ["age", "externalUid", "segments", "gender", "dnt", "language"],
      I = ["geo", "device_id"],
      w = ["enabled", "dongle", "member_id", "debug_timeout"],
      C = {
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
      x = {
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
      E = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
      A = (0, l.df)({
        gvlid: 32,
        bidderCode: b
      }),
      S = {
        code: b,
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
        supportedMediaTypes: [d.Mk, d.pX, d.B5],
        isBidRequestValid: function (e) {
          return !!(e.params.placementId || e.params.member && e.params.invCode);
        },
        buildRequests: function (e, r) {
          var a = e.map(j),
            i = (0, u.sE)(e, q),
            o = {};
          !0 === s.vc.getConfig("coppa") && (o = {
            coppa: !0
          }), i && Object.keys(i.params.user).filter(function (e) {
            return (0, u.q9)(k, e);
          }).forEach(function (e) {
            var r = (0, t.convertCamelToUnderscore)(e);
            if ("segments" === e && (0, t.isArray)(i.params.user[e])) {
              var a = [];
              i.params.user[e].forEach(function (e) {
                (0, t.isNumber)(e) ? a.push({
                  id: e
                }) : (0, t.isPlainObject)(e) && a.push(e);
              }), o[r] = a;
            } else "segments" !== e && (o[r] = i.params.user[e]);
          });
          var d,
            p = (0, u.sE)(e, N);
          p && p.params && p.params.app && (d = {}, Object.keys(p.params.app).filter(function (e) {
            return (0, u.q9)(I, e);
          }).forEach(function (e) {
            return d[e] = p.params.app[e];
          }));
          var c,
            l = (0, u.sE)(e, M);
          l && l.params && p.params.app && p.params.app.id && (c = {
            appid: l.params.app.id
          });
          var m = {},
            f = {},
            v = A.getCookie("apn_prebid_debug") || null;
          if (v) try {
            m = JSON.parse(v);
          } catch (e) {
            (0, t.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e);
          } else {
            var y = (0, u.sE)(e, z);
            y && y.debug && (m = y.debug);
          }
          m && m.enabled && Object.keys(m).filter(function (e) {
            return (0, u.q9)(w, e);
          }).forEach(function (e) {
            f[e] = m[e];
          });
          var b = (0, u.sE)(e, B),
            h = b ? parseInt(b.params.member, 10) : 0,
            _ = e[0].schain,
            C = (0, u.sE)(e, Z),
            x = {
              tags: g(a),
              user: o,
              sdk: {
                source: "pbjs",
                version: "6.18.0"
              },
              schain: _
            };
          C && (x.iab_support = {
            omidpn: "Appnexus",
            omidpv: "6.18.0"
          }), h > 0 && (x.member_id = h), p && (x.device = d), l && (x.app = c);
          var E = s.vc.getConfig("appnexusAuctionKeywords");
          if ((0, t.isPlainObject)(E)) {
            var S = (0, t.transformBidderParamKeywords)(E);
            S.length > 0 && S.forEach(O), x.keywords = S;
          }
          if (s.vc.getConfig("adpod.brandCategoryExclusion") && (x.brand_category_uniqueness = !0), f.enabled && (x.debug = f, (0, t.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(f, null, 4))), r && r.gdprConsent && (x.gdpr_consent = {
            consent_string: r.gdprConsent.consentString,
            consent_required: r.gdprConsent.gdprApplies
          }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~"))) {
            var T = r.gdprConsent.addtlConsent,
              P = T.substring(T.indexOf("~") + 1);
            x.gdpr_consent.addtl_consent = P.split(".").map(function (e) {
              return parseInt(e, 10);
            });
          }
          if (r && r.uspConsent && (x.us_privacy = r.uspConsent), r && r.refererInfo) {
            var U = {
              rd_ref: encodeURIComponent(r.refererInfo.referer),
              rd_top: r.refererInfo.reachedTop,
              rd_ifs: r.refererInfo.numIframes,
              rd_stk: r.refererInfo.stack.map(function (e) {
                return encodeURIComponent(e);
              }).join(",")
            };
            x.referrer_detection = U;
          }
          if ((0, u.sE)(e, D) && e.filter(D).forEach(function (e) {
            var r = function (e, r) {
                var a = r.mediaTypes.video,
                  n = a.durationRangeSec,
                  i = a.requireExactDuration,
                  s = function (e) {
                    var r = e.adPodDurationSec,
                      a = e.durationRangeSec,
                      n = e.requireExactDuration,
                      i = (0, t.getMinValueFromArray)(a),
                      s = Math.floor(r / i);
                    return n ? Math.max(s, a.length) : s;
                  }(r.mediaTypes.video),
                  o = (0, t.getMaxValueFromArray)(n),
                  d = e.filter(function (e) {
                    return e.uuid === r.bidId;
                  }),
                  p = t.fill.apply(void 0, g(d).concat([s]));
                if (i) {
                  var u = Math.ceil(s / n.length),
                    c = (0, t.chunk)(p, u);
                  n.forEach(function (e, r) {
                    c[r].map(function (r) {
                      X(r, "minduration", e), X(r, "maxduration", e);
                    });
                  });
                } else p.map(function (e) {
                  return X(e, "maxduration", o);
                });
                return p;
              }(a, e),
              n = x.tags.filter(function (r) {
                return r.uuid !== e.bidId;
              });
            x.tags = [].concat(g(n), g(r));
          }), e[0].userId) {
            var F = [];
            K(F, (0, n.Z)(e[0], "userId.flocId.id"), "chrome.com", null), K(F, (0, n.Z)(e[0], "userId.criteoId"), "criteo.com", null), K(F, (0, n.Z)(e[0], "userId.netId"), "netid.de", null), K(F, (0, n.Z)(e[0], "userId.idl_env"), "liveramp.com", null), K(F, (0, n.Z)(e[0], "userId.tdid"), "adserver.org", "TDID"), K(F, (0, n.Z)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"), e[0].userId.pubProvidedId && e[0].userId.pubProvidedId.forEach(function (e) {
              e.uids.forEach(function (r) {
                F.push({
                  source: e.source,
                  id: r.id
                });
              });
            }), F.length && (x.eids = F);
          }
          a[0].publisher_id && (x.publisher_id = a[0].publisher_id);
          var V = function (e, r) {
            var a = [],
              n = {
                withCredentials: !0
              },
              i = "https://ib.adnxs.com/ut/v3/prebid";
            if (R(r) || (i = "https://ib.adnxs-simple.com/ut/v3/prebid"), "TRUE" !== (0, t.getParameterByName)("apn_test").toUpperCase() && !0 !== s.vc.getConfig("apn_test") || (n.customHeaders = {
              "X-Is-Test": 1
            }), e.tags.length > 15) {
              var o = (0, t.deepClone)(e);
              (0, t.chunk)(e.tags, 15).forEach(function (e) {
                o.tags = e;
                var t = JSON.stringify(o);
                a.push({
                  method: "POST",
                  url: i,
                  data: t,
                  bidderRequest: r,
                  options: n
                });
              });
            } else {
              var d = JSON.stringify(e);
              a = {
                method: "POST",
                url: i,
                data: d,
                bidderRequest: r,
                options: n
              };
            }
            return a;
          }(x, r);
          return V;
        },
        interpretResponse: function (e, r) {
          var a = this,
            s = r.bidderRequest;
          e = e.body;
          var p = [];
          if (!e || e.error) {
            var l = "in response for ".concat(s.bidderCode, " adapter");
            return e && e.error && (l += ": ".concat(e.error)), (0, t.logError)(l), p;
          }
          if (e.tags && e.tags.forEach(function (e) {
            var r,
              l = (r = e) && r.ads && r.ads.length && (0, u.sE)(r.ads, function (e) {
                return e.rtb;
              });
            if (l && (!0 === m.S.get(s.bidderCode, "allowZeroCpmBids") ? l.cpm >= 0 : l.cpm > 0) && (0, u.q9)(a.supportedMediaTypes, l.ad_type)) {
              var f = function (e, r, a) {
                var s = (0, t.getBidRequest)(e.uuid, [a]),
                  p = {
                    requestId: e.uuid,
                    cpm: r.cpm,
                    creativeId: r.creative_id,
                    dealId: r.deal_id,
                    currency: "USD",
                    netRevenue: !0,
                    ttl: 300,
                    adUnitCode: s.adUnitCode,
                    appnexus: {
                      buyerMemberId: r.buyer_member_id,
                      dealPriority: r.deal_priority,
                      dealCode: r.deal_code
                    }
                  };
                if (r.adomain && (p.meta = v({}, p.meta, {
                  advertiserDomains: []
                })), r.advertiser_id && (p.meta = v({}, p.meta, {
                  advertiserId: r.advertiser_id
                })), r.buyer_member_id && (p.meta = v({}, p.meta, {
                  dchain: function (e) {
                    return {
                      ver: "1.0",
                      complete: 0,
                      nodes: [{
                        bsid: e.buyer_member_id.toString()
                      }]
                    };
                  }(r)
                })), r.brand_id && (p.meta = v({}, p.meta, {
                  brandId: r.brand_id
                })), r.rtb.video) switch (v(p, {
                  width: r.rtb.video.player_width,
                  height: r.rtb.video.player_height,
                  vastImpUrl: r.notify_url,
                  ttl: 3600
                }), (0, n.Z)(s, "mediaTypes.video.context")) {
                  case d.Oh:
                    var l = (0, o.getIabSubCategory)(s.bidder, r.brand_category_id);
                    p.meta = v({}, p.meta, {
                      primaryCatId: l
                    });
                    var m = r.deal_priority;
                    p.video = {
                      context: d.Oh,
                      durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3),
                      dealTier: m
                    }, p.vastUrl = r.rtb.video.asset_url;
                    break;
                  case c.gZ:
                    if (p.adResponse = e, p.adResponse.ad = p.adResponse.ads[0], p.adResponse.ad.video = p.adResponse.ad.rtb.video, p.vastXml = r.rtb.video.content, r.renderer_url) {
                      var f = (0, u.sE)(a.bids, function (r) {
                          return r.bidId === e.uuid;
                        }),
                        g = (0, n.Z)(f, "renderer.options");
                      p.renderer = function (e, r) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          n = i.Th.install({
                            id: r.renderer_id,
                            url: r.renderer_url,
                            config: a,
                            loaded: !1,
                            adUnitCode: e
                          });
                        try {
                          n.setRender(F);
                        } catch (e) {
                          (0, t.logWarn)("Prebid Error calling setRender on renderer", e);
                        }
                        return n.setEventHandlers({
                          impression: function () {
                            return (0, t.logMessage)("AppNexus outstream video impression event");
                          },
                          loaded: function () {
                            return (0, t.logMessage)("AppNexus outstream video loaded event");
                          },
                          ended: function () {
                            (0, t.logMessage)("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                          }
                        }), n;
                      }(p.adUnitCode, r, g);
                    }
                    break;
                  case c.LD:
                    p.vastUrl = r.notify_url + "&redir=" + encodeURIComponent(r.rtb.video.asset_url);
                } else if (r.rtb[d.B5]) {
                  var y = r.rtb[d.B5],
                    b = r.viewability.config.replace("src=", "data-src="),
                    h = y.javascript_trackers;
                  null == h ? h = b : (0, t.isStr)(h) ? h = [h, b] : h.push(b), p[d.B5] = {
                    title: y.title,
                    body: y.desc,
                    body2: y.desc2,
                    cta: y.ctatext,
                    rating: y.rating,
                    sponsoredBy: y.sponsored,
                    privacyLink: y.privacy_link,
                    address: y.address,
                    downloads: y.downloads,
                    likes: y.likes,
                    phone: y.phone,
                    price: y.price,
                    salePrice: y.saleprice,
                    clickUrl: y.link.url,
                    displayUrl: y.displayurl,
                    clickTrackers: y.link.click_trackers,
                    impressionTrackers: y.impression_trackers,
                    javascriptTrackers: h
                  }, y.main_img && (p.native.image = {
                    url: y.main_img.url,
                    height: y.main_img.height,
                    width: y.main_img.width
                  }), y.icon && (p.native.icon = {
                    url: y.icon.url,
                    height: y.icon.height,
                    width: y.icon.width
                  });
                } else {
                  v(p, {
                    width: r.rtb.banner.width,
                    height: r.rtb.banner.height,
                    ad: r.rtb.banner.content
                  });
                  try {
                    if (r.rtb.trackers) for (var _ = 0; _ < r.rtb.trackers[0].impression_urls.length; _++) {
                      var k = r.rtb.trackers[0].impression_urls[_],
                        I = (0, t.createTrackPixelHtml)(k);
                      p.ad += I;
                    }
                  } catch (e) {
                    (0, t.logError)("Error appending tracking pixel", e);
                  }
                }
                return p;
              }(e, l, s);
              f.mediaType = function (e) {
                var r = e.ad_type;
                return r === d.pX ? d.pX : r === d.B5 ? d.B5 : d.Mk;
              }(l), p.push(f);
            }
          }), e.debug && e.debug.debug_info) {
            var f = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
            f = f.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), (0, t.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"), (0, t.logMessage)(f);
          }
          return p;
        },
        getMappingFileInfo: function () {
          return {
            url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
            refreshInDays: 2
          };
        },
        getUserSyncs: function (e, r, a) {
          if (e.iframeEnabled && R({
            gdprConsent: a
          })) return [{
            type: "iframe",
            url: "https://acdn.adnxs.com/dmp/async_usersync.html"
          }];
        },
        transformBidParams: function (e, r) {
          var a = t.transformBidderParamKeywords;
          if (!0 === r) {
            var i = s.vc.getConfig("s2sConfig"),
              o = (0, n.Z)(i, "endpoint.p1Consent");
            o && o.match("/openrtb2/prebid") && (a = J);
          }
          return e = (0, t.convertTypes)({
            member: "string",
            invCode: "string",
            placementId: "number",
            keywords: a,
            publisherId: "number"
          }, e), r && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, e.usePaymentRule && delete e.usePaymentRule, T(e.keywords) && e.keywords.forEach(O), Object.keys(e).forEach(function (r) {
            var a = (0, t.convertCamelToUnderscore)(r);
            a !== r && (e[a] = e[r], delete e[r]);
          })), e;
        },
        onBidWon: function (e) {
          e.native && function (e) {
            var r = function (e) {
              var r;
              if ((0, t.isStr)(e) && P(e)) r = e;else if ((0, t.isArray)(e)) for (var a = 0; a < e.length; a++) {
                var n = e[a];
                P(n) && (r = n);
              }
              return r;
            }(e.native.javascriptTrackers);
            if (r) for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function (e) {
                var r = e.indexOf('src="') + 5,
                  a = e.indexOf('"', r);
                return e.substring(r, a);
              }(r), i = n.replace("dom_id=%native_dom_id%", a), s = document.getElementsByTagName("iframe"), o = !1, d = 0; d < s.length && !o; d++) {
              var p = s[d];
              try {
                var u = p.contentDocument || p.contentWindow.document;
                if (u) for (var c = u.getElementsByTagName("script"), l = 0; l < c.length && !o; l++) {
                  var m = c[l];
                  m.getAttribute("data-src") == n && (m.setAttribute("src", i), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), o = !0);
                }
              } catch (e) {
                if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
              }
            }
          }(e);
        }
      };
    function T(e) {
      return !!((0, t.isArray)(e) && e.length > 0);
    }
    function O(e) {
      T(e.value) && "" === e.value[0] && delete e.value;
    }
    function P(e) {
      var r = e.match(E),
        a = null != r && r.length >= 1,
        t = e.match("trk.js"),
        n = null != t && t.length >= 1;
      return e.startsWith("<script") && n && a;
    }
    function R(e) {
      var r = !0;
      return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== (0, n.Z)(e.gdprConsent, "vendorData.purpose.consents.1"))), r;
    }
    function j(e) {
      var r = {};
      r.sizes = U(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], r.uuid = e.bidId, e.params.placementId ? r.id = parseInt(e.params.placementId, 10) : r.code = e.params.invCode, r.allow_smaller_sizes = e.params.allowSmallerSizes || !1, r.use_pmt_rule = e.params.usePaymentRule || !1, r.prebid = !0, r.disable_psa = !0;
      var a = function (e) {
        if (!(0, t.isFn)(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
        var r = e.getFloor({
          currency: "USD",
          mediaType: "*",
          size: "*"
        });
        return (0, t.isPlainObject)(r) && !isNaN(r.floor) && "USD" === r.currency ? r.floor : null;
      }(e);
      if (a && (r.reserve = a), e.params.position && (r.position = {
        above: 1,
        below: 2
      }[e.params.position] || 0), e.params.trafficSourceCode && (r.traffic_source_code = e.params.trafficSourceCode), e.params.privateSizes && (r.private_sizes = U(e.params.privateSizes)), e.params.supplyType && (r.supply_type = e.params.supplyType), e.params.pubClick && (r.pubclick = e.params.pubClick), e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode), e.params.publisherId && (r.publisher_id = parseInt(e.params.publisherId, 10)), e.params.externalImpId && (r.external_imp_id = e.params.externalImpId), !(0, t.isEmpty)(e.params.keywords)) {
        var i = (0, t.transformBidderParamKeywords)(e.params.keywords);
        i.length > 0 && i.forEach(O), r.keywords = i;
      }
      var s,
        o,
        c = (0, n.Z)(e, "ortb2Imp.ext.data.pbadslot");
      if (c && (r.gpid = c), (e.mediaType === d.B5 || (0, n.Z)(e, "mediaTypes.".concat(d.B5))) && (r.ad_types.push(d.B5), 0 === r.sizes.length && (r.sizes = U([1, 1])), e.nativeParams)) {
        var l = (s = e.nativeParams, o = {}, Object.keys(s).forEach(function (e) {
          var r = x[e] && x[e].serverName || x[e] || e,
            a = x[e] && x[e].requiredParams;
          if (o[r] = v({}, a, s[e]), (r === x.image.serverName || r === x.icon.serverName) && o[r].sizes) {
            var n = o[r].sizes;
            ((0, t.isArrayOfNums)(n) || (0, t.isArray)(n) && n.length > 0 && n.every(function (e) {
              return (0, t.isArrayOfNums)(e);
            })) && (o[r].sizes = U(o[r].sizes));
          }
          r === x.privacyLink && (o.privacy_supported = !0);
        }), o);
        r[d.B5] = {
          layouts: [l]
        };
      }
      var m = (0, n.Z)(e, "mediaTypes.".concat(d.pX)),
        f = (0, n.Z)(e, "mediaTypes.video.context");
      r.hb_source = m && "adpod" === f ? 7 : 1, (e.mediaType === d.pX || m) && r.ad_types.push(d.pX), (e.mediaType === d.pX || m && "outstream" !== f) && (r.require_asset_url = !0), e.params.video && (r.video = {}, Object.keys(e.params.video).filter(function (e) {
        return (0, u.q9)(h, e);
      }).forEach(function (a) {
        switch (a) {
          case "context":
          case "playback_method":
            var n = e.params.video[a];
            n = (0, t.isArray)(n) ? n[0] : n, r.video[a] = C[a][n];
            break;
          case "frameworks":
            break;
          default:
            r.video[a] = e.params.video[a];
        }
      }), e.params.video.frameworks && (0, t.isArray)(e.params.video.frameworks) && (r.video_frameworks = e.params.video.frameworks)), m && (r.video = r.video || {}, Object.keys(m).filter(function (e) {
        return (0, u.q9)(_, e);
      }).forEach(function (e) {
        switch (e) {
          case "minduration":
          case "maxduration":
            "number" != typeof r.video[e] && (r.video[e] = m[e]);
            break;
          case "skip":
            "boolean" != typeof r.video.skippable && (r.video.skippable = 1 === m[e]);
            break;
          case "skipafter":
            "number" != typeof r.video.skipoffset && (r.video.skippoffset = m[e]);
            break;
          case "playbackmethod":
            if ("number" != typeof r.video.playback_method) {
              var a = m[e];
              (a = (0, t.isArray)(a) ? a[0] : a) >= 1 && a <= 4 && (r.video.playback_method = a);
            }
            break;
          case "api":
            if (!r.video_frameworks && (0, t.isArray)(m[e])) {
              var n = m[e].map(function (e) {
                var r = 4 === e ? 5 : 5 === e ? 4 : e;
                if (r >= 1 && r <= 5) return r;
              }).filter(function (e) {
                return e;
              });
              r.video_frameworks = n;
            }
        }
      })), e.renderer && (r.video = v({}, r.video, {
        custom_renderer_present: !0
      })), e.params.frameworks && (0, t.isArray)(e.params.frameworks) && (r.banner_frameworks = e.params.frameworks);
      var g = (0, u.sE)(p.K.getAdUnits(), function (r) {
        return e.transactionId === r.transactionId;
      });
      return g && g.mediaTypes && g.mediaTypes.banner && r.ad_types.push(d.Mk), 0 === r.ad_types.length && delete r.ad_types, r;
    }
    function U(e) {
      var r = [],
        a = {};
      if ((0, t.isArray)(e) && 2 === e.length && !(0, t.isArray)(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);else if ("object" === f(e)) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (a = {}).width = parseInt(i[0], 10), a.height = parseInt(i[1], 10), r.push(a);
      }
      return r;
    }
    function q(e) {
      return !!e.params.user;
    }
    function B(e) {
      return !!parseInt(e.params.member, 10);
    }
    function N(e) {
      if (e.params) return !!e.params.app;
    }
    function M(e) {
      return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
    }
    function z(e) {
      return !!e.debug;
    }
    function D(e) {
      return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === d.Oh;
    }
    function Z(e) {
      var r = !1,
        a = e.params,
        n = e.params.video;
      return a.frameworks && (0, t.isArray)(a.frameworks) && (r = (0, u.q9)(e.params.frameworks, 6)), !r && n && n.frameworks && (0, t.isArray)(n.frameworks) && (r = (0, u.q9)(e.params.video.frameworks, 6)), r;
    }
    function X(e, r, a) {
      (0, t.isEmpty)(e.video) && (e.video = {}), e.video[r] = a;
    }
    function F(e) {
      var r, a;
      r = e.adUnitCode, (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"), function (e) {
        try {
          var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
          r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none");
        } catch (e) {}
      }(e.adUnitCode), e.renderer.push(function () {
        window.ANOutstreamVideo.renderAd({
          tagId: e.adResponse.tag_id,
          sizes: [e.getSize().split("x")],
          targetId: e.adUnitCode,
          uuid: e.adResponse.uuid,
          adResponse: e.adResponse,
          rendererOptions: e.renderer.getConfig()
        }, V.bind(null, e));
      });
    }
    function V(e, r, a) {
      e.renderer.handleVideoEvent({
        id: r,
        eventName: a
      });
    }
    function K(e, r, a, t) {
      return r && (t ? e.push({
        source: a,
        id: r,
        rti_partner: t
      }) : e.push({
        source: a,
        id: r
      })), e;
    }
    function J(e) {
      var r = "";
      return Object.keys(e).forEach(function (a) {
        (0, t.isStr)(e[a]) ? "" !== e[a] ? r += "".concat(a, "=").concat(e[a], ",") : r += "".concat(a, ",") : (0, t.isArray)(e[a]) && ("" === e[a][0] ? r += "".concat(a, ",") : e[a].forEach(function (e) {
          r += "".concat(a, "=").concat(e, ",");
        }));
      }), r = r.substring(0, r.length - 1);
    }
    (0, o.registerBidder)(S), window.pbjs.installedModules.push("appnexusBidAdapter");
  }
}, function (e) {
  e(e.s = 3231);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[1266], {
  1654: function (n, e, t) {
    var o = t(9853),
      a = t(8962),
      i = t(7602),
      s = t(1879);
    function r(n) {
      return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n;
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, r(n);
    }
    function c(n, e, t) {
      return e in n ? Object.defineProperty(n, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : n[e] = t, n;
    }
    var l,
      d,
      u,
      f,
      p,
      g = {
        value: !0,
        definedInConfig: !1
      },
      m = 0,
      C = !1,
      v = {
        iab: function (n, e, t) {
          function a(a, i) {
            (0, o.logInfo)("Received a response from CMP", a), i ? !1 !== a.gdprApplies && "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus || n(a, t) : e("CMP unable to register callback function.  Please check CMP setup.", t);
          }
          var i = function () {
              var e = {};
              function a() {
                e.getConsentData && e.getVendorConsents && ((0, o.logInfo)("Received all requested responses from CMP", e), n(e, t));
              }
              return {
                consentDataCallback: function (n) {
                  e.getConsentData = n, a();
                },
                vendorConsentsCallback: function (n) {
                  e.getVendorConsents = n, a();
                }
              };
            }(),
            r = {},
            l = function () {
              for (var n, e, t = window; !n;) {
                try {
                  if ("function" == typeof t.__tcfapi || "function" == typeof t.__cmp) {
                    "function" == typeof t.__tcfapi ? (m = 2, e = t.__tcfapi) : (m = 1, e = t.__cmp), n = t;
                    break;
                  }
                } catch (n) {}
                try {
                  if (t.frames.__tcfapiLocator) {
                    m = 2, n = t;
                    break;
                  }
                } catch (n) {}
                try {
                  if (t.frames.__cmpLocator) {
                    m = 1, n = t;
                    break;
                  }
                } catch (n) {}
                if (t === window.top) break;
                t = t.parent;
              }
              return {
                cmpFrame: n,
                cmpFunction: e
              };
            }(),
            d = l.cmpFrame,
            u = l.cmpFunction;
          if (!d) return e("CMP not found.", t);
          function f(n, e) {
            var a = t.adUnits,
              i = 1,
              s = 1;
            if (Array.isArray(a) && a.length > 0) {
              var r = (0, o.getAdUnitSizes)(a[0]);
              i = r[0][0], s = r[0][1];
            }
            window.$sf.ext.register(i, s, function (t, o) {
              if ("cmpReturn" === t) {
                var a = "getConsentData" === n ? o.vendorConsentData : o.vendorConsents;
                e(a);
              }
            }), window.$sf.ext.cmp(n);
          }
          function p(n, e, t) {
            var o = 2 === m ? "__tcfapi" : "__cmp",
              a = "".concat(o, "Call");
            function i(n) {
              var e = "".concat(o, "Return"),
                t = "string" == typeof n.data && (0, s.q9)(n.data, e) ? JSON.parse(n.data) : n.data;
              if (t[e] && t[e].callId) {
                var a = t[e];
                void 0 !== r[a.callId] && r[a.callId](a.returnValue, a.success);
              }
            }
            2 === m ? (window[o] = function (n, t, o, i) {
              var s = Math.random() + "",
                l = c({}, a, {
                  command: n,
                  version: t,
                  parameter: i,
                  callId: s
                });
              r[s] = o, e.postMessage(l, "*");
            }, window.addEventListener("message", i, !1), window[o](n, m, t)) : (window[o] = function (n, t, o) {
              var i = Math.random() + "",
                s = c({}, a, {
                  command: n,
                  parameter: t,
                  callId: i
                });
              r[i] = o, e.postMessage(s, "*");
            }, window.addEventListener("message", i, !1), window[o](n, void 0, t));
          }
          (0, o.isFn)(u) ? ((0, o.logInfo)("Detected CMP API is directly accessible, calling it now..."), 1 === m ? (u("getConsentData", null, i.consentDataCallback), u("getVendorConsents", null, i.vendorConsentsCallback)) : 2 === m && u("addEventListener", m, a)) : 1 === m && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? ((0, o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), f("getConsentData", i.consentDataCallback), f("getVendorConsents", i.vendorConsentsCallback)) : ((0, o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === m ? (p("getConsentData", d, i.consentDataCallback), p("getVendorConsents", d, i.vendorConsentsCallback)) : 2 === m && p("addEventListener", d, a));
        },
        static: function (n, e, t) {
          n(f, t);
        }
      };
    function b(n, e) {
      var t = {
        context: this,
        args: [e],
        nextFn: n,
        adUnits: e.adUnits || pbjs.adUnits,
        bidsBackHandler: e.bidsBackHandler,
        haveExited: !1,
        timer: null
      };
      return p ? ((0, o.logInfo)("User consent information already known.  Pulling internally stored information..."), k(null, t)) : (0, s.q9)(Object.keys(v), l) ? (v[l].call(this, w, D, t), void (t.haveExited || (0 === d ? w(void 0, t) : t.timer = setTimeout(y.bind(null, t), d)))) : ((0, o.logWarn)("CMP framework (".concat(l, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), i.rp.setConsentData(null), t.nextFn.apply(t.context, t.args));
    }
    function w(n, e) {
      "static" === l && 2 == (m = n.getConsentData ? 1 : n.getTCData ? 2 : 0) && (n = n.getTCData);
      var t = 1 === m ? function (n) {
        var e = n && n.getConsentData && n.getConsentData.gdprApplies;
        return !("boolean" == typeof e && (!0 !== e || (0, o.isStr)(n.getConsentData.consentData) && (0, o.isPlainObject)(n.getVendorConsents) && Object.keys(n.getVendorConsents).length > 1));
      } : 2 === m ? function () {
        var e = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : u,
          t = n && n.tcString;
        return !("boolean" == typeof e && (!0 !== e || (0, o.isStr)(t)));
      } : null;
      g.definedInConfig && 2 === m ? (0, o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2") : g.definedInConfig || 1 !== m || (0, o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(!0, ").")), (0, o.isFn)(t) ? t(n) ? D("CMP returned unexpected value during lookup process.", e, n) : (clearTimeout(e.timer), h(n), k(null, e)) : D("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", e, n);
    }
    function y(n) {
      2 === m ? ((0, o.logWarn)("No response from CMP, continuing auction..."), h(void 0), k(null, n)) : D("CMP workflow exceeded timeout threshold.", n);
    }
    function D(n, e, t) {
      clearTimeout(e.timer), g.value && 1 === m && h(void 0), k(n, e, t);
    }
    function h(n) {
      1 === m ? p = {
        consentString: n ? n.getConsentData.consentData : void 0,
        vendorData: n ? n.getVendorConsents : void 0,
        gdprApplies: n ? n.getConsentData.gdprApplies : u
      } : (p = {
        consentString: n ? n.tcString : void 0,
        vendorData: n || void 0,
        gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : u
      }, n && n.addtlConsent && (0, o.isStr)(n.addtlConsent) && (p.addtlConsent = n.addtlConsent)), p.apiVersion = m, i.rp.setConsentData(p);
    }
    function k(n, e, t) {
      if (!1 === e.haveExited) {
        e.haveExited = !0;
        var a = e.context,
          s = e.args,
          r = e.nextFn;
        n ? g.value && 1 === m ? ((0, o.logWarn)(n + " 'allowAuctionWithoutConsent' activated.", t), r.apply(a, s)) : ((0, o.logError)(n + " Canceling auction as per consentManagement config.", t), i.rp.setConsentData(null), "function" == typeof e.bidsBackHandler ? e.bidsBackHandler() : (0, o.logError)("Error executing bidsBackHandler")) : r.apply(a, s);
      }
    }
    a.vc.getConfig("consentManagement", function (n) {
      return function (n) {
        (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === r(n) ? ((0, o.isStr)(n.cmpApi) ? l = n.cmpApi : (l = "iab", (0, o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), (0, o.isNumber)(n.timeout) ? d = n.timeout : (d = 1e4, (0, o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (g.value = n.allowAuctionWithoutConsent, g.definedInConfig = !0), u = !0 === n.defaultGdprScope, (0, o.logInfo)("consentManagement module has been activated..."), i.rp.enable(), "static" === l && ((0, o.isPlainObject)(n.consentData) ? (f = n.consentData, d = 0) : (0, o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), C || pbjs.requestBids.before(b, 50), C = !0) : (0, o.logWarn)("consentManagement config not defined, exiting consent manager");
      }(n.consentManagement);
    }), window.pbjs.installedModules.push("consentManagement");
  }
}, function (n) {
  n(n.s = 1654);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[5160], {
  1366: function (n, t, e) {
    var a = e(9853),
      i = e(8962),
      o = e(7602);
    function s(n) {
      return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n;
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, s(n);
    }
    var c,
      u,
      r,
      l,
      p = !1,
      d = {
        iab: function (n, t, e) {
          var i,
            o = (i = {}, {
              consentDataCallback: function (a, o) {
                o && a.uspString && (i.usPrivacy = a.uspString), i.usPrivacy ? n(i, e) : t("Unable to get USP consent string.", e);
              }
            }),
            s = {},
            c = function () {
              for (var n, t, e = window; !n;) {
                try {
                  if ("function" == typeof e.__uspapi) {
                    t = e.__uspapi, n = e;
                    break;
                  }
                } catch (n) {}
                try {
                  if (e.frames.__uspapiLocator) {
                    n = e;
                    break;
                  }
                } catch (n) {}
                if (e === window.top) break;
                e = e.parent;
              }
              return {
                uspapiFrame: n,
                uspapiFunction: t
              };
            }(),
            u = c.uspapiFrame,
            r = c.uspapiFunction;
          if (!u) return t("USP CMP not found.", e);
          (0, a.isFn)(r) ? ((0, a.logInfo)("Detected USP CMP is directly accessible, calling it now..."), r("getUSPData", 1, o.consentDataCallback)) : ((0, a.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."), function (n, t, e) {
            window.__uspapi = function (n, e, a) {
              var i = Math.random() + "",
                o = {
                  __uspapiCall: {
                    command: n,
                    version: e,
                    callId: i
                  }
                };
              s[i] = a, t.postMessage(o, "*");
            }, window.addEventListener("message", function (n) {
              var t = n && n.data && n.data.__uspapiReturn;
              t && t.callId && void 0 !== s[t.callId] && (s[t.callId](t.returnValue, t.success), delete s[t.callId]);
            }, !1), window.__uspapi("getUSPData", 1, e);
          }(0, u, o.consentDataCallback));
        },
        static: function (n, t, e) {
          n(r, e);
        }
      };
    function f(n, t) {
      var e = {
        context: this,
        args: [t],
        nextFn: n,
        adUnits: t.adUnits || pbjs.adUnits,
        bidsBackHandler: t.bidsBackHandler,
        haveExited: !1,
        timer: null
      };
      if (!d[c]) return (0, a.logWarn)("USP framework (".concat(c, ") is not a supported framework. Aborting consentManagement module and resuming auction.")), o.nX.setConsentData(null), e.nextFn.apply(e.context, e.args);
      d[c].call(this, g, b, e), e.haveExited || (0 === u ? g(void 0, e) : e.timer = setTimeout(m.bind(null, e), u));
    }
    function g(n, t) {
      n && n.usPrivacy ? (clearTimeout(t.timer), function (n) {
        n && n.usPrivacy && (l = n.usPrivacy, o.nX.setConsentData(l));
      }(n), y(null, t)) : b("USPAPI returned unexpected value during lookup process.", t, n);
    }
    function m(n) {
      b("USPAPI workflow exceeded timeout threshold.", n);
    }
    function b(n, t, e) {
      clearTimeout(t.timer), y(n, t, e);
    }
    function y(n, t, e) {
      if (!1 === t.haveExited) {
        t.haveExited = !0;
        var i = t.context,
          s = t.args,
          c = t.nextFn;
        n && ((0, a.logWarn)(n + " Resuming auction without consent data as per consentManagement config.", e), o.nX.setConsentData(null)), c.apply(i, s);
      }
    }
    i.vc.getConfig("consentManagement", function (n) {
      return function (n) {
        (n = n && n.usp) && "object" === s(n) ? ((0, a.isStr)(n.cmpApi) ? c = n.cmpApi : (c = "iab", (0, a.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab", ")."))), (0, a.isNumber)(n.timeout) ? u = n.timeout : (u = 50, (0, a.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50, ")."))), (0, a.logInfo)("USPAPI consentManagement module has been activated..."), o.nX.enable(), "static" === c && ((0, a.isPlainObject)(n.consentData) && (0, a.isPlainObject)(n.consentData.getUSPData) ? (n.consentData.getUSPData.uspString && (r = {
          usPrivacy: n.consentData.getUSPData.uspString
        }), u = 0) : (0, a.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), p || pbjs.requestBids.before(f, 50), p = !0) : (0, a.logWarn)("consentManagement.usp config not defined, exiting usp consent manager");
      }(n.consentManagement);
    }), window.pbjs.installedModules.push("consentManagementUsp");
  }
}, function (n) {
  n(n.s = 1366);
}]);
"use strict";
window.localStorageHook = localStorage;
(self.pbjsChunk = self.pbjsChunk || []).push([[6406], {
  6201: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    var _src_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9853),
      _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(265),
      _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6996),
      _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1609),
      _src_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8962),
      _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8265),
      _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1879),
      criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1582),
      _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5849);
    function _extends() {
      return _extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }, _extends.apply(this, arguments);
    }
    var GVLID = 91,
      ADAPTER_VERSION = 34,
      BIDDER_CODE = "criteo",
      CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
      PROFILE_ID_INLINE = 207,
      PROFILE_ID_PUBLISHERTAG = 185,
      storage = (0, _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({
        gvlid: GVLID,
        bidderCode: BIDDER_CODE
      }),
      LOG_PREFIX = "Criteo: ",
      FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
      FAST_BID_VERSION_CURRENT = 117,
      FAST_BID_VERSION_LATEST = "latest",
      FAST_BID_VERSION_NONE = "none",
      PUBLISHER_TAG_URL_TEMPLATE = "https://static.criteo.net/js/ld/publishertag.prebid" + FAST_BID_VERSION_PLACEHOLDER + ".js",
      FAST_BID_PUBKEY_E = 65537,
      FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
      spec = {
        code: BIDDER_CODE,
        gvlid: GVLID,
        supportedMediaTypes: [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5],
        isBidRequestValid: function (t) {
          return !(!t || !t.params || !t.params.zoneId && !t.params.networkId || hasVideoMediaType(t) && !hasValidVideoMediaType(t));
        },
        buildRequests: function (t, e) {
          var r,
            i,
            s = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getLegacyFpd(_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("ortb2")) || {};
          _extends(e, {
            publisherExt: s.context,
            userExt: s.user,
            ceh: _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.ceh")
          });
          var a = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"),
            o = canFastBid(a);
          if (!publisherTagAvailable() && o) {
            window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid();
            var n = getFastBidUrl(a);
            setTimeout(function () {
              (0, _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__.B)(n, BIDDER_CODE);
            }, e.timeout);
          }
          if (publisherTagAvailable()) {
            var _ = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "6.18.0");
            r = _.buildCdbUrl(), i = _.buildCdbRequest();
          } else {
            var p = buildContext(t, e);
            r = buildCdbUrl(p), i = buildCdbRequest(p, t, e);
          }
          if (i) return {
            method: "POST",
            url: r,
            data: i,
            bidRequests: t
          };
        },
        interpretResponse: function (t, e) {
          var r = t.body || t;
          if (publisherTagAvailable()) {
            var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
            if (i) return i.interpretResponse(r, e);
          }
          var s = [];
          return r && r.slots && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(r.slots) && r.slots.forEach(function (t) {
            var r = (0, _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__.sE)(e.bidRequests, function (e) {
                return e.adUnitCode === t.impid && (!e.params.zoneId || parseInt(e.params.zoneId) === t.zoneid);
              }),
              i = r.bidId,
              a = {
                requestId: i,
                adId: t.bidId || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getUniqueIdentifierStr)(),
                cpm: t.cpm,
                currency: t.currency,
                netRevenue: !0,
                ttl: t.ttl || 60,
                creativeId: t.creativecode,
                width: t.width,
                height: t.height,
                dealId: t.dealCode
              };
            t.adomain && (a.meta = _extends({}, a.meta, {
              advertiserDomains: t.adomain
            })), t.native ? r.params.nativeCallback ? a.ad = createNativeAd(i, t.native, r.params.nativeCallback) : (a.native = createPrebidNativeAd(t.native), a.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5) : t.video ? (a.vastUrl = t.displayurl, a.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX) : a.ad = t.creative, s.push(a);
          }), s;
        },
        onTimeout: function (t) {
          if (publisherTagAvailable() && Array.isArray(t)) {
            var e = [];
            t.forEach(function (t) {
              -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
            });
          }
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
      var i = (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r).search,
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
      return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("6.18.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e;
    }
    function checkNativeSendId(t) {
      return !(t.nativeParams && (t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys)));
    }
    function buildCdbRequest(t, e, r) {
      var i,
        s,
        a = {
          publisher: {
            url: t.url,
            ext: r.publisherExt
          },
          slots: e.map(function (t) {
            i = t.params.networkId || i, s = t.schain || s;
            var e = {
              impid: t.adUnitCode,
              transactionid: t.transactionId,
              auctionId: t.auctionId
            };
            if (t.params.zoneId && (e.zoneid = t.params.zoneId), (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "ortb2Imp.ext") && (e.ext = t.ortb2Imp.ext), t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.".concat(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5)) ? (e.native = !0, checkNativeSendId(t) || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), e.sizes = parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.banner.sizes"), parseNativeSize)) : e.sizes = parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.banner.sizes"), parseSize), hasVideoMediaType(t)) {
              var r = {
                  playersizes: parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video.playerSize"), parseSize),
                  mimes: t.mediaTypes.video.mimes,
                  protocols: t.mediaTypes.video.protocols,
                  maxduration: t.mediaTypes.video.maxduration,
                  api: t.mediaTypes.video.api,
                  skip: t.mediaTypes.video.skip,
                  placement: t.mediaTypes.video.placement,
                  minduration: t.mediaTypes.video.minduration,
                  playbackmethod: t.mediaTypes.video.playbackmethod,
                  startdelay: t.mediaTypes.video.startdelay
                },
                a = t.params.video;
              void 0 !== a && (r.skip = r.skip || a.skip || 0, r.placement = r.placement || a.placement, r.minduration = r.minduration || a.minduration, r.playbackmethod = r.playbackmethod || a.playbackmethod, r.startdelay = r.startdelay || a.startdelay || 0), e.video = r;
            }
            return e;
          })
        };
      return i && (a.publisher.networkid = i), s && (a.source = {
        ext: {
          schain: s
        }
      }), a.user = {
        ext: r.userExt
      }, r && r.ceh && (a.user.ceh = r.ceh), r && r.gdprConsent && (a.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (a.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), a.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (a.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (a.user.uspIab = r.uspConsent), a;
    }
    function parseSizes(t, e) {
      return null == t ? [] : Array.isArray(t[0]) ? t.map(function (t) {
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
      return void 0 !== (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video");
    }
    function hasValidVideoMediaType(t) {
      var e = !0;
      if (["mimes", "playerSize", "maxduration", "protocols", "api", "skip", "placement", "playbackmethod"].forEach(function (r) {
        void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video." + r) && void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "params.video." + r) && (e = !1, (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)("Criteo Bid Adapter: mediaTypes.video." + r + " is required"));
      }), e) {
        var r = t.mediaTypes.video.placement || t.params.video.placement;
        if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
        if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0;
      }
      return !1;
    }
    function createPrebidNativeAd(t) {
      return {
        sendTargetingKeys: !1,
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
    function canFastBid(t) {
      return t !== FAST_BID_VERSION_NONE;
    }
    function getFastBidUrl(t) {
      var e;
      return t === FAST_BID_VERSION_LATEST ? e = "" : t ? (String(t).split(".")[0] < 102 && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("Specifying a Fastbid version which is not supporting version selection."), e = "." + t) : e = "." + FAST_BID_VERSION_CURRENT, PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e);
    }
    function tryGetCriteoFastBid() {
      try {
        var fastBidStorageKey = "criteo_fast_bid",
          hashPrefix = "// Hash: ",
          fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);
        if (null !== fastBidFromStorage) {
          var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
            firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
          if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey);else {
            var publisherTagHash = firstLine.substr(hashPrefix.length),
              publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);
            (0, criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)("Using Criteo FastBid"), eval(publisherTag)) : ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey));
          }
        }
      } catch (t) {}
    }
    (0, _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__.registerBidder)(spec), window.pbjs.installedModules.push("criteoBidAdapter");
  },
  4611: function (t, e) {
    var r;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function () {
      function t(t) {
        null !== t && this.fromHexString(t);
      }
      return t.prototype.toHexString = function () {
        if (this.s < 0) return "-" + this.negate().toHexString();
        var t,
          e = !1,
          r = "",
          i = this.t,
          s = this.DB - i * this.DB % 4;
        if (i-- > 0) for (s < this.DB && (t = this[i] >> s) > 0 && (e = !0, r = d(t)); i >= 0;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), t > 0 && (e = !0), e && (r += d(t));
        return e ? r : "0";
      }, t.prototype.fromHexString = function (e) {
        if (null !== e) {
          this.t = 0, this.s = 0;
          for (var r = e.length, i = !1, s = 0; --r >= 0;) {
            var a = p(e, r);
            a < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + 4 > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += 4) >= this.DB && (s -= this.DB));
          }
          this.clamp(), i && t.ZERO.subTo(this, this);
        }
      }, t.prototype.negate = function () {
        var e = s();
        return t.ZERO.subTo(this, e), e;
      }, t.prototype.abs = function () {
        return this.s < 0 ? this.negate() : this;
      }, t.prototype.mod = function (e) {
        var r = s();
        return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r;
      }, t.prototype.copyTo = function (t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        t.t = this.t, t.s = this.s;
      }, t.prototype.lShiftTo = function (t, e) {
        for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), o = this.s << r & this.DM, n = this.t - 1; n >= 0; --n) e[n + a + 1] = this[n] >> i | o, o = (this[n] & s) << r;
        for (n = a - 1; n >= 0; --n) e[n] = 0;
        e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
      }, t.prototype.invDigit = function () {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
      }, t.prototype.dlShiftTo = function (t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r) e[r] = 0;
        e.t = this.t + t, e.s = this.s;
      }, t.prototype.squareTo = function (t) {
        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var i = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
        }
        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
      }, t.prototype.multiplyTo = function (e, r) {
        var i = this.abs(),
          s = e.abs(),
          a = i.t;
        for (r.t = a + s.t; --a >= 0;) r[a] = 0;
        for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
        r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
      }, t.prototype.divRemTo = function (e, r, i) {
        var o = e.abs();
        if (!(o.t <= 0)) {
          var n = this.abs();
          if (n.t < o.t) return null != r && r.fromHexString("0"), void (null != i && this.copyTo(i));
          null == i && (i = s());
          var _ = s(),
            p = this.s,
            d = e.s,
            c = this.DB - a(o[o.t - 1]);
          c > 0 ? (o.lShiftTo(c, _), n.lShiftTo(c, i)) : (o.copyTo(_), n.copyTo(i));
          var u = _.t,
            h = _[u - 1];
          if (0 != h) {
            var l = h * (1 << this.F1) + (u > 1 ? _[u - 2] >> this.F2 : 0),
              f = this.FV / l,
              m = (1 << this.F1) / l,
              v = 1 << this.F2,
              E = i.t,
              T = E - u,
              D = null == r ? s() : r;
            for (_.dlShiftTo(T, D), i.compareTo(D) >= 0 && (i[i.t++] = 1, i.subTo(D, i)), t.ONE.dlShiftTo(u, D), D.subTo(_, _); _.t < u;) _[_.t++] = 0;
            for (; --T >= 0;) {
              var y = i[--E] == h ? this.DM : Math.floor(i[E] * f + (i[E - 1] + v) * m);
              if ((i[E] += _.am(0, y, i, T, 0, u)) < y) for (_.dlShiftTo(T, D), i.subTo(D, i); i[E] < --y;) i.subTo(D, i);
            }
            null != r && (i.drShiftTo(u, r), p != d && t.ZERO.subTo(r, r)), i.t = u, i.clamp(), c > 0 && i.rShiftTo(c, i), p < 0 && t.ZERO.subTo(i, i);
          }
        }
      }, t.prototype.rShiftTo = function (t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t) e.t = 0;else {
          var i = t % this.DB,
            s = this.DB - i,
            a = (1 << i) - 1;
          e[0] = this[r] >> i;
          for (var o = r + 1; o < this.t; ++o) e[o - r - 1] |= (this[o] & a) << s, e[o - r] = this[o] >> i;
          i > 0 && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp();
        }
      }, t.prototype.drShiftTo = function (t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        e.t = Math.max(this.t - t, 0), e.s = this.s;
      }, t.prototype.subTo = function (t, e) {
        for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
        if (t.t < this.t) {
          for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
          i += this.s;
        } else {
          for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
          i -= t.s;
        }
        e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), e.t = r, e.clamp();
      }, t.prototype.clamp = function () {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t;
      }, t.prototype.modPowInt = function (t, e) {
        var r;
        return r = t < 256 || e.isEven() ? new c(e) : new u(e), this.exp(t, r);
      }, t.prototype.exp = function (e, r) {
        if (e > 4294967295 || e < 1) return t.ONE;
        var i = s(),
          o = s(),
          n = r.convert(this),
          _ = a(e) - 1;
        for (n.copyTo(i); --_ >= 0;) if (r.sqrTo(i, o), (e & 1 << _) > 0) r.mulTo(o, n, i);else {
          var p = i;
          i = o, o = p;
        }
        return r.revert(i);
      }, t.prototype.isEven = function () {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }, t.prototype.compareTo = function (t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
        for (; --r >= 0;) if (0 != (e = this[r] - t[r])) return e;
        return 0;
      }, t.prototype.am1 = function (t, e, r, i, s, a) {
        for (; --a >= 0;) {
          var o = e * this[t++] + r[i] + s;
          s = Math.floor(o / 67108864), r[i++] = 67108863 & o;
        }
        return s;
      }, t.prototype.am2 = function (t, e, r, i, s, a) {
        for (var o = 32767 & e, n = e >> 15; --a >= 0;) {
          var _ = 32767 & this[t],
            p = this[t++] >> 15,
            d = n * _ + p * o;
          s = ((_ = o * _ + ((32767 & d) << 15) + r[i] + (1073741823 & s)) >>> 30) + (d >>> 15) + n * p + (s >>> 30), r[i++] = 1073741823 & _;
        }
        return s;
      }, t.prototype.am3 = function (t, e, r, i, s, a) {
        for (var o = 16383 & e, n = e >> 14; --a >= 0;) {
          var _ = 16383 & this[t],
            p = this[t++] >> 14,
            d = n * _ + p * o;
          s = ((_ = o * _ + ((16383 & d) << 14) + r[i] + s) >> 28) + (d >> 14) + n * p, r[i++] = 268435455 & _;
        }
        return s;
      }, t;
    }();
    function s() {
      return new i(null);
    }
    function a(t) {
      var e,
        r = 1;
      return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
    }
    e.BigInteger = i, e.nbi = s, e.nbits = a;
    var o,
      n,
      _ = [];
    for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) _[o++] = n;
    for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;
    for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;
    function p(t, e) {
      var r = _[t.charCodeAt(e)];
      return null == r ? -1 : r;
    }
    function d(t) {
      return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
    }
    e.intAt = p, e.int2char = d, e.b64toHex = function (t) {
      var e,
        r = "",
        i = 0,
        s = 0;
      for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
        a < 0 || (0 == i ? (r += d(a >> 2), s = 3 & a, i = 1) : 1 == i ? (r += d(s << 2 | a >> 4), s = 15 & a, i = 2) : 2 == i ? (r += d(s), r += d(a >> 2), s = 3 & a, i = 3) : (r += d(s << 2 | a >> 4), r += d(15 & a), i = 0));
      }
      return 1 == i && (r += d(s << 2)), r;
    }, e.removeExtraSymbols = function (t) {
      return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
    };
    var c = function () {
        function t(t) {
          this.m = t;
        }
        return t.prototype.convert = function (t) {
          return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }, t.prototype.revert = function (t) {
          return t;
        }, t.prototype.reduce = function (t) {
          t.divRemTo(this.m, null, t);
        }, t.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }, t.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }, t;
      }(),
      u = function () {
        function t(t) {
          this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        return t.prototype.convert = function (t) {
          var e = s();
          return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e), e;
        }, t.prototype.revert = function (t) {
          var e = s();
          return t.copyTo(e), this.reduce(e), e;
        }, t.prototype.reduce = function (t) {
          for (; t.t <= this.mt2;) t[t.t++] = 0;
          for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e],
              i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++;
          }
          t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }, t.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }, t.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }, t;
      }();
    function h(t) {
      var e = s();
      return e.fromHexString(t.toString()), e;
    }
    e.nbv = h, i.ZERO = h(0), i.ONE = h(1), "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = i.prototype.am2, r = 30) : "Netscape" != navigator.appName ? (i.prototype.am = i.prototype.am1, r = 26) : (i.prototype.am = i.prototype.am3, r = 28), i.prototype.DB = r, i.prototype.DM = (1 << r) - 1, i.prototype.DV = 1 << r, i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - r, i.prototype.F2 = 2 * r - 52;
  },
  4950: function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = function () {
      function t() {}
      return t.hash = function (e) {
        e = t.utf8Encode(e || "");
        for (var r = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], s = (e += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(s / 16), o = new Array(a), n = 0; n < a; n++) {
          o[n] = new Array(16);
          for (var _ = 0; _ < 16; _++) o[n][_] = e.charCodeAt(64 * n + 4 * _) << 24 | e.charCodeAt(64 * n + 4 * _ + 1) << 16 | e.charCodeAt(64 * n + 4 * _ + 2) << 8 | e.charCodeAt(64 * n + 4 * _ + 3) << 0;
        }
        var p = 8 * (e.length - 1) / Math.pow(2, 32),
          d = 8 * (e.length - 1) >>> 0;
        for (o[a - 1][14] = Math.floor(p), o[a - 1][15] = d, n = 0; n < a; n++) {
          for (var c = new Array(64), u = 0; u < 16; u++) c[u] = o[n][u];
          for (u = 16; u < 64; u++) c[u] = t.q1(c[u - 2]) + c[u - 7] + t.q0(c[u - 15]) + c[u - 16] >>> 0;
          var h = i[0],
            l = i[1],
            f = i[2],
            m = i[3],
            v = i[4],
            E = i[5],
            T = i[6],
            D = i[7];
          for (u = 0; u < 64; u++) {
            var y = D + t.z1(v) + t.Ch(v, E, T) + r[u] + c[u],
              g = t.z0(h) + t.Maj(h, l, f);
            D = T, T = E, E = v, v = m + y >>> 0, m = f, f = l, l = h, h = y + g >>> 0;
          }
          i[0] = i[0] + h >>> 0, i[1] = i[1] + l >>> 0, i[2] = i[2] + f >>> 0, i[3] = i[3] + m >>> 0, i[4] = i[4] + v >>> 0, i[5] = i[5] + E >>> 0, i[6] = i[6] + T >>> 0, i[7] = i[7] + D >>> 0;
        }
        var b = new Array(i.length);
        for (D = 0; D < i.length; D++) b[D] = ("00000000" + i[D].toString(16)).slice(-8);
        return b.join("");
      }, t.utf8Encode = function (t) {
        try {
          return new TextEncoder().encode(t).reduce(function (t, e) {
            return t + String.fromCharCode(e);
          }, "");
        } catch (e) {
          return unescape(encodeURIComponent(t));
        }
      }, t.ROTR = function (t, e) {
        return e >>> t | e << 32 - t;
      }, t.z0 = function (e) {
        return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
      }, t.z1 = function (e) {
        return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
      }, t.q0 = function (e) {
        return t.ROTR(7, e) ^ t.ROTR(18, e) ^ e >>> 3;
      }, t.q1 = function (e) {
        return t.ROTR(17, e) ^ t.ROTR(19, e) ^ e >>> 10;
      }, t.Ch = function (t, e, r) {
        return t & e ^ ~t & r;
      }, t.Maj = function (t, e, r) {
        return t & e ^ t & r ^ e & r;
      }, t;
    }();
    e.Sha256 = r;
  },
  1582: function (t, e, r) {
    var i = r(4611),
      s = r(4950);
    e.T = function (t, e, r, a) {
      var o = new i.BigInteger(i.b64toHex(e)),
        n = new i.BigInteger(i.b64toHex(r)),
        _ = o.modPowInt(a, n);
      return i.removeExtraSymbols(_.toHexString()) === s.Sha256.hash(t);
    };
  }
}, function (t) {
  t(t.s = 6201);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[9226], {
  3452: function (n, e, r) {
    var o = r(9853),
      c = r(2528),
      t = r(1477),
      i = r(5644),
      s = r(5755),
      u = r(8962),
      a = r(3494);
    function f(n) {
      return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n;
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, f(n);
    }
    var l,
      d = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
      y = [],
      v = {},
      g = !1,
      p = !0,
      h = "USD",
      b = !1,
      C = {},
      m = {},
      S = function () {
        var n, e, r;
        function o() {
          n = !1, e = null, r = new Promise(function (r) {
            e = r, n && r();
          });
        }
        return o(), {
          done: function () {
            n = !0, null != e && e();
          },
          reset: o,
          promise: function () {
            return r;
          }
        };
      }();
    function R(n) {
      l ? ((0, o.logWarn)(n), (0, o.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")) : (0, o.logError)(n);
    }
    function w(n) {
      v = {}, b = !0, (0, o.logInfo)("Installing addBidResponse decorator for currency module", arguments), (0, c.R)().convertCurrency = function (n, e, r) {
        return parseFloat(n) * j(e, r);
      }, (0, a.v5)("addBidResponse").before(I, 100), p && (p = !1, (0, s.h)(n, {
        success: function (n) {
          try {
            C = JSON.parse(n), (0, o.logInfo)("currencyRates set to " + JSON.stringify(C)), g = !0, F(), S.done();
          } catch (e) {
            R("Failed to parse currencyRates response: " + n);
          }
        },
        error: function () {
          R.apply(void 0, arguments), S.done();
        }
      }));
    }
    function D() {
      (0, o.logInfo)("Uninstalling addBidResponse decorator for currency module", arguments), (0, a.v5)("addBidResponse").getHooks({
        hook: I
      }).remove(), delete (0, c.R)().convertCurrency, h = "USD", v = {}, b = !1, g = !1, p = !0, C = {}, m = {};
    }
    function I(n, e, r) {
      if (!r) return n.call(this, e);
      var c = r.bidderCode || r.bidder;
      if (m[c]) {
        var s = m[c];
        r.currency && s !== r.currency ? (0, o.logWarn)("Currency default '".concat(c, ": ").concat(s, "' ignored. adapter specified '").concat(r.currency, "'")) : r.currency = s;
      }
      if (r.currency || ((0, o.logWarn)('Currency not specified on bid.  Defaulted to "USD"'), r.currency = "USD"), r.getCpmInNewCurrency = function (n) {
        return (parseFloat(this.cpm) * j(this.currency, n)).toFixed(3);
      }, r.currency === h) return n.call(this, e, r);
      y.push(function (n, e, r) {
        return function () {
          var c = r[1];
          if (void 0 !== c && "currency" in c && "cpm" in c) {
            var s = c.currency;
            try {
              var u = j(s);
              1 !== u && (c.cpm = (parseFloat(c.cpm) * u).toFixed(4), c.currency = h);
            } catch (n) {
              (0, o.logWarn)("Returning NO_BID, getCurrencyConversion threw error: ", n), r[1] = (0, t.m)(i.STATUS.NO_BID, c.getIdentifiers());
            }
          }
          return n.apply(e, r);
        };
      }(n, this, [e, r])), !b || g ? F() : n.bail(S.promise());
    }
    function F() {
      for (; y.length > 0;) y.shift()();
    }
    function j(n) {
      var e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h,
        c = null,
        t = "".concat(n, "->").concat(r);
      if (t in v) c = v[t], (0, o.logMessage)("Using conversionCache value " + c + " for " + t);else if (!1 === b) {
        if ("USD" !== n) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
        c = 1;
      } else if (n === r) c = 1;else if (n in C.conversions) {
        if (!(r in (e = C.conversions[n]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
        c = e[r], (0, o.logInfo)("getCurrencyConversion using direct " + n + " to " + r + " conversionRate " + c);
      } else if (r in C.conversions) {
        if (!(n in (e = C.conversions[r]))) throw new Error("Specified fromCurrency '" + n + "' not found in the currency rates file");
        c = U(1 / e[n], 4), (0, o.logInfo)("getCurrencyConversion using reciprocal " + n + " to " + r + " conversionRate " + c);
      } else {
        var i = Object.keys(C.conversions)[0];
        if (!(n in C.conversions[i])) throw new Error("Specified fromCurrency '" + n + "' not found in the currency rates file");
        var s = 1 / C.conversions[i][n];
        if (!(r in C.conversions[i])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
        var u = C.conversions[i][r];
        c = U(s * u, 4), (0, o.logInfo)("getCurrencyConversion using intermediate " + n + " thru " + i + " to " + r + " conversionRate " + c);
      }
      return t in v || ((0, o.logMessage)("Adding conversionCache value " + c + " for " + t), v[t] = c), c;
    }
    function U(n, e) {
      for (var r = 1, o = 0; o < e; o++) r += "0";
      return Math.round(n * r) / r;
    }
    u.vc.getConfig("currency", function (n) {
      return function (n) {
        var e = d;
        if ("object" === f(n.rates) && (C.conversions = n.rates, g = !0, p = !1), "object" === f(n.defaultRates) && (l = n.defaultRates, C.conversions = l, g = !0), "string" == typeof n.adServerCurrency) {
          (0, o.logInfo)("enabling currency support", arguments), h = n.adServerCurrency, n.conversionRateFile && ((0, o.logInfo)("currency using override conversionRateFile:", n.conversionRateFile), e = n.conversionRateFile);
          var r = e.indexOf("$$TODAY$$");
          if (-1 !== r) {
            var c = new Date(),
              t = "".concat(c.getMonth() + 1),
              i = "".concat(c.getDate());
            t.length < 2 && (t = "0".concat(t)), i.length < 2 && (i = "0".concat(i));
            var s = "".concat(c.getFullYear()).concat(t).concat(i);
            e = "".concat(e.substring(0, r)).concat(s).concat(e.substring(r + 9, e.length));
          }
          w(e);
        } else (0, o.logInfo)("disabling currency support"), D();
        "object" === f(n.bidderCurrencyDefault) && (m = n.bidderCurrencyDefault);
      }(n.currency);
    }), window.pbjs.installedModules.push("currency");
  }
}, function (n) {
  n(n.s = 3452);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[6656], {
  9465: function (e, r, n) {
    var t = n(1106),
      a = n(9742),
      o = n(9853),
      s = n(265),
      i = n(8962),
      d = n(3494),
      c = n(4766),
      p = n(7602),
      l = n(2319),
      u = n(5644);
    function _(e, r, n) {
      return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, e;
    }
    function v() {
      return v = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r];
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }, v.apply(this, arguments);
    }
    var g = {
        env: "vp",
        gdfp_req: 1,
        output: "vast",
        unviewed_position_start: 1
      },
      f = {};
    function T(e, r, n) {
      if (!i.vc.getConfig("cache.url")) if ((0, s.Z)(r, "".concat(n, ".description_url"))) (0, o.logError)("input cannnot contain description_url");else {
        var t = e && e.vastUrl;
        if (t) return encodeURIComponent(t);
      }
    }
    function b(e, r, n) {
      var t = e && e.adserverTargeting || {},
        i = {},
        d = r && r.adUnit;
      if (d) {
        var c = a.q0.getAllTargeting(d.code);
        i = c ? c[d.code] : {};
      }
      var p = v({}, {
        hb_uuid: e && e.videoCacheKey
      }, {
        hb_cache_id: e && e.videoCacheKey
      }, i, t);
      l.emit(u.EVENTS.SET_TARGETING, _({}, d.code, p));
      var g = v({}, p, (0, s.Z)(r, "params.cust_params")),
        f = encodeURIComponent((0, o.formatQS)(g));
      return n && (f = n + "%26" + f), f;
    }
    i.vc.getConfig("brandCategoryTranslation.translationFile") && (0, d.v5)("registerAdserver").before(function (e) {
      e.call(this, "dfp");
    }), (0, t.W)("dfp", {
      buildVideoUrl: function (e) {
        if (e.params || e.url) {
          var r = e.adUnit,
            n = e.bid || a.q0.getWinningBids(r.code)[0],
            t = {};
          if (e.url && (t = (0, o.parseUrl)(e.url, {
            noDecodeWholeURL: !0
          }), (0, o.isEmpty)(e.params))) return function (e, r, n) {
            var t = T(r, e, "search");
            return t && (e.search.description_url = t), e.search.cust_params = b(r, n, e.search.cust_params), (0, o.buildUrl)(e);
          }(t, n, e);
          var i = {
              correlator: Date.now(),
              sz: (0, o.parseSizesInput)((0, s.Z)(r, "mediaTypes.video.playerSize")).join("|"),
              url: encodeURIComponent(location.href)
            },
            d = t.search,
            c = d && d.sz;
          c && (i.sz = c + "|" + i.sz);
          var l = b(n, e, d && d.cust_params),
            u = v({}, g, t.search, i, e.params, {
              cust_params: l
            }),
            _ = T(n, e, "params");
          _ && (u.description_url = _);
          var f = p.rp.getConsentData();
          f && ("boolean" == typeof f.gdprApplies && (u.gdpr = Number(f.gdprApplies)), f.consentString && (u.gdpr_consent = f.consentString), f.addtlConsent && (u.addtl_consent = f.addtlConsent));
          var A = p.nX.getConsentData();
          return A && (u.us_privacy = A), (0, o.buildUrl)(v({
            protocol: "https",
            host: "securepubads.g.doubleclick.net",
            pathname: "/gampad/ads"
          }, t, {
            search: u
          }));
        }
        (0, o.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl");
      },
      buildAdpodVideoUrl: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.code,
          n = e.params,
          t = e.callback;
        if (n && t) {
          var a = {
            correlator: Date.now(),
            sz: i(r),
            url: encodeURIComponent(location.href)
          };
          f.getTargeting({
            codes: [r],
            callback: d
          });
        } else (0, o.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");
        function i(e) {
          var r = c.K.getAdUnits().filter(function (r) {
              return r.code === e;
            }),
            n = (0, s.Z)(r[0], "mediaTypes.video.playerSize");
          return (0, o.parseSizesInput)(n).join("|");
        }
        function d(e, s) {
          var i;
          if (e) t(e, null);else {
            var d = (_(i = {}, f.TARGETING_KEY_PB_CAT_DUR, void 0), _(i, f.TARGETING_KEY_CACHE_ID, void 0), i),
              c = {};
            s[r] && (c = s[r].reduce(function (e, r) {
              return Object.keys(r)[0] === f.TARGETING_KEY_PB_CAT_DUR ? e[f.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[f.TARGETING_KEY_PB_CAT_DUR] ? e[f.TARGETING_KEY_PB_CAT_DUR] + "," + r[f.TARGETING_KEY_PB_CAT_DUR] : r[f.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === f.TARGETING_KEY_CACHE_ID && (e[f.TARGETING_KEY_CACHE_ID] = r[f.TARGETING_KEY_CACHE_ID]), e;
            }, d));
            var l = encodeURIComponent((0, o.formatQS)(c)),
              u = v({}, g, a, n, {
                cust_params: l
              }),
              T = p.rp.getConsentData();
            T && ("boolean" == typeof T.gdprApplies && (u.gdpr = Number(T.gdprApplies)), T.consentString && (u.gdpr_consent = T.consentString), T.addtlConsent && (u.addtl_consent = T.addtlConsent));
            var b = p.nX.getConsentData();
            b && (u.us_privacy = b);
            var A = (0, o.buildUrl)({
              protocol: "https",
              host: "securepubads.g.doubleclick.net",
              pathname: "/gampad/ads",
              search: u
            });
            t(null, A);
          }
        }
      },
      getAdpodTargeting: function (e) {
        return f.getTargeting(e);
      }
    }), (0, d.Bx)("adpod", f), window.pbjs.installedModules.push("dfpAdServerVideo");
  },
  1106: function (e, r, n) {
    n.d(r, {
      W: function () {
        return s;
      }
    });
    var t = n(2528),
      a = n(9853),
      o = (0, t.R)();
    function s(e, r) {
      o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, Object.keys(r).forEach(function (n) {
        o.adServers[e][n] ? (0, a.logWarn)("Attempting to add an already registered function property ".concat(n, " for AdServer ").concat(e, ".")) : o.adServers[e][n] = r[n];
      });
    }
  }
}, function (e) {
  e(e.s = 9465);
}]);
Object.keys(localStorageHook).forEach(function (item) {
  Object.defineProperty(localStorage, item, {
    get: function () {
      trackedData[item] = localStorageHook[item];
      return localStorageHook[item];
    },
    set: function (value) {
      trackedData[item] = value;
      localStorageHook[item] = value;
    }
  });
});
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[8806], {
  2235: function (e, n, t) {
    var i = t(9853),
      o = t(3494),
      r = t(2661),
      c = t(5849),
      d = {},
      a = window === window.top ? window : window.top,
      m = (0, c.eA)("enrichmentFpd");
    function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
      if (!m.cookiesAreEnabled()) return e;
      var n,
        t,
        o = e.split(".");
      if (2 == o.length) return e;
      var r = -2,
        c = "_rdc".concat(Date.now()),
        d = "writeable";
      do {
        n = o.slice(r).join(".");
        var a = new Date((0, i.timestamp)() + 1e4).toUTCString();
        m.setCookie(c, d, a, "Lax", n, void 0);
        var u = m.getCookie(c, void 0);
        u === d ? (t = !1, m.setCookie(c, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n, void 0)) : (r += -1, t = Math.abs(r) <= o.length);
      } while (t);
      return n;
    }
    var l = {
      name: "enrichments",
      queue: 2,
      init: function (e, n) {
        return d = {}, e.skipEnrichments ? n : (0, i.mergeDeep)(((0, r.n)().referer && (0, i.mergeDeep)(d, {
          site: {
            ref: (0, r.n)().referer
          }
        }), (0, r.n)().canonicalUrl && (0, i.mergeDeep)(d, {
          site: {
            page: (0, r.n)().canonicalUrl
          }
        }), (t = function (e) {
          if (e && "string" == typeof e && 0 !== e.length) {
            var n = e.match(/^(?:https?:\/\/)?(?:www\.)?(.*?(?=(\?|\#|\/|$)))/i);
            return n && n[1];
          }
        }((0, r.n)().canonicalUrl)) && ((0, i.mergeDeep)(d, {
          site: {
            domain: t
          }
        }), (0, i.mergeDeep)(d, {
          site: {
            publisher: {
              domain: u(t)
            }
          }
        })), function () {
          var e, n;
          try {
            e = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth, n = a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight;
          } catch (t) {
            e = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth, n = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
          }
          (0, i.mergeDeep)(d, {
            device: {
              w: e,
              h: n
            }
          });
        }(), function () {
          var e;
          try {
            e = a.document.querySelector("meta[name='keywords']");
          } catch (n) {
            e = window.document.querySelector("meta[name='keywords']");
          }
          e && e.content && (0, i.mergeDeep)(d, {
            site: {
              keywords: e.content.replace(/\s/g, "")
            }
          });
        }(), d), n);
        var t;
      }
    };
    (0, o.Bx)("firstPartyData", l), window.pbjs.installedModules.push("enrichmentFpdModule");
  }
}, function (e) {
  e(e.s = 2235);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[7910], {
  8303: function (t, e, n) {
    var o = n(8962),
      s = n(3494),
      u = n(2528),
      i = n(4892),
      f = [];
    function r(t, e) {
      var n, s;
      n = o.vc.getConfig("firstPartyData") || {}, s = o.vc.getConfig("ortb2") || {}, f.sort(function (t, e) {
        return (t.queue || 1) - (e.queue || 1);
      }).forEach(function (t) {
        s = t.init(n, s);
      }), o.vc.setConfig({
        ortb2: s
      }), t.call(this, e), i.e0.getHooks({
        hook: r
      }).remove();
    }
    function c() {
      (0, s.v5)("addBidderRequests").before(r);
    }
    (0, s.bA)("firstPartyData", function (t) {
      f.push(t);
    }), c(), (0, u.R)().refreshFpd = c, window.pbjs.installedModules.push("fpdModule");
  }
}, function (t) {
  t(t.s = 8303);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[7083], {
  1489: function (e, r, n) {
    var t = n(265),
      o = n(9853),
      i = n(8962),
      a = n(7602),
      c = n(1879),
      s = n(1609),
      l = n(3494),
      p = n(5849),
      u = n(2319),
      f = n(5644);
    function d(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), n.push.apply(n, t);
      }
      return n;
    }
    function v(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? d(Object(n), !0).forEach(function (r) {
          g(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
      }
      return e;
    }
    function g(e, r, n) {
      return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, e;
    }
    function b() {
      return b = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r];
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }, b.apply(this, arguments);
    }
    function y(e) {
      return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, y(e);
    }
    var h,
      m,
      O,
      E,
      P = {
        purpose1: {
          id: 1,
          name: "storage"
        },
        purpose2: {
          id: 2,
          name: "basicAds"
        },
        purpose7: {
          id: 7,
          name: "measurement"
        }
      },
      j = [{
        purpose: "storage",
        enforcePurpose: !0,
        enforceVendor: !0,
        vendorExceptions: []
      }, {
        purpose: "basicAds",
        enforcePurpose: !0,
        enforceVendor: !0,
        vendorExceptions: []
      }],
      C = [],
      A = [],
      D = [],
      w = !1,
      S = function (e) {
        var r = null;
        if (e = e || i.vc.getCurrentBidder()) {
          var n = a.ZP.getBidAdapter(e);
          n && n.getSpec && (r = n.getSpec().gvlid);
        }
        return r;
      },
      k = function (e) {
        return "object" === y(e) ? e.gvlid : null;
      },
      V = function (e) {
        return a.ZP.getAnalyticsAdapter(e) && (a.ZP.getAnalyticsAdapter(e).gvlid || null);
      };
    function T(e) {
      var r = null;
      if (e) {
        var n = i.vc.getConfig("gvlMapping"),
          t = "string" == typeof e ? e : e.name;
        if (n && n[t]) return n[t];
        r = S(t) || k(e) || V(t);
      }
      return r;
    }
    function B(e, r, n, o) {
      var i = P[Object.keys(P).filter(function (r) {
        return P[r].name === e.purpose;
      })[0]].id;
      if ((0, c.q9)(e.vendorExceptions || [], n)) return !0;
      var a = (0, t.Z)(r, "vendorData.purpose.consents.".concat(i)),
        s = (0, t.Z)(r, "vendorData.vendor.consents.".concat(o)),
        l = (0, t.Z)(r, "vendorData.purpose.legitimateInterests.".concat(i)),
        p = !1 === e.enforcePurpose || !0 === a,
        u = !1 === e.enforceVendor || !0 === s;
      return 2 === i ? p && u || !0 === l : p && u;
    }
    function Z(e, r, n, t) {
      if (t = b({}, {
        hasEnforcementHook: !0
      }), (0, o.hasDeviceAccess)()) {
        var c = a.rp.getConsentData();
        if (c && c.gdprApplies) {
          if (2 === c.apiVersion) {
            var s = i.vc.getCurrentBidder();
            r = s && s != n && a.ZP.aliasRegistry[s] === n ? T(s) : T(n) || r;
            var l = n || s;
            B(h, c, l, r) ? (t.valid = !0, e.call(this, r, n, t)) : (l && (0, o.logWarn)("TCF2 denied device access for ".concat(l)), t.valid = !1, C.push(l), e.call(this, r, n, t));
          } else t.valid = !0, e.call(this, r, n, t);
        } else t.valid = !0, e.call(this, r, n, t);
      } else (0, o.logWarn)("Device access is disabled by Publisher"), t.valid = !1, e.call(this, r, n, t);
    }
    function W(e) {
      for (var r = a.rp.getConsentData(), n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) t[c - 1] = arguments[c];
      if (r && r.gdprApplies) {
        if (2 === r.apiVersion) {
          var s = i.vc.getCurrentBidder(),
            l = T(s),
            p = B(h, r, s, l);
          p ? e.call.apply(e, [this].concat(t)) : ((0, o.logWarn)("User sync not allowed for ".concat(s)), C.push(s));
        } else e.call.apply(e, [this].concat(t));
      } else e.call.apply(e, [this].concat(t));
    }
    function F(e, r, n) {
      if (n && n.gdprApplies) {
        if (2 === n.apiVersion) {
          var t = r.map(function (e) {
            var r = T(e.submodule),
              t = e.submodule.name;
            if (B(h, n, t, r)) return e;
            (0, o.logWarn)("User denied permission to fetch user id for ".concat(t, " User id module")), C.push(t);
          }).filter(function (e) {
            return e;
          });
          e.call(this, t, v(v({}, n), {}, {
            hasValidated: !0
          }));
        } else e.call(this, r, n);
      } else e.call(this, r, n);
    }
    function N(e, r) {
      for (var n = a.rp.getConsentData(), t = arguments.length, i = new Array(t > 2 ? t - 2 : 0), s = 2; s < t; s++) i[s - 2] = arguments[s];
      n && n.gdprApplies && 2 === n.apiVersion ? (r.forEach(function (e) {
        e.bids = e.bids.filter(function (e) {
          var r = e.bidder,
            t = T(r);
          if ((0, c.q9)(A, r)) return !1;
          var i = !!B(m, n, r, t);
          return i || ((0, o.logWarn)("TCF2 blocked auction for ".concat(r)), A.push(r)), i;
        });
      }), e.call.apply(e, [this, r].concat(i))) : e.call.apply(e, [this, r].concat(i));
    }
    function M(e, r) {
      var n = a.rp.getConsentData();
      n && n.gdprApplies && 2 === n.apiVersion ? ((0, o.isArray)(r) || (r = [r]), r = r.filter(function (e) {
        var r = e.provider,
          t = T(r),
          i = !!B(O, n, r, t);
        return i || (D.push(r), (0, o.logWarn)("TCF2 blocked analytics adapter ".concat(e.provider))), i;
      }), e.call(this, r)) : e.call(this, r);
    }
    u.on(f.EVENTS.AUCTION_END, function () {
      var e = function (e) {
          return e.filter(function (r, n) {
            return null !== r && e.indexOf(r) === n;
          });
        },
        r = {
          storageBlocked: e(C),
          biddersBlocked: e(A),
          analyticsBlocked: e(D)
        };
      u.emit(f.EVENTS.TCF2_ENFORCEMENT, r);
    });
    var x = function (e) {
        return e.purpose === P.purpose1.name;
      },
      U = function (e) {
        return e.purpose === P.purpose2.name;
      },
      q = function (e) {
        return e.purpose === P.purpose7.name;
      };
    i.vc.getConfig("consentManagement", function (e) {
      return function (e) {
        var r = (0, t.Z)(e, "gdpr.rules");
        r ? E = r : ((0, o.logWarn)("TCF2: enforcing P1 and P2 by default"), E = j), h = (0, c.sE)(E, x), m = (0, c.sE)(E, U), O = (0, c.sE)(E, q), h || (h = j[0]), m || (m = j[1]), h && !w && (w = !0, p.S6.before(Z, 49), s.registerSyncInner.before(W, 48), (0, l.v5)("validateGdprEnforcement").before(F, 47)), m && (0, l.v5)("makeBidRequests").before(N), O && (0, l.v5)("enableAnalyticsCb").before(M);
      }(e.consentManagement);
    }), window.pbjs.installedModules.push("gdprEnforcement");
  }
}, function (e) {
  e(e.s = 1489);
}]);
function hashTrackData(trackData) {
  const trackKeyList = Object.keys(trackData);
  const hashStr = trackKeyList.reduce((agg, key) => agg + key, '');
  let hash = 0;
  for (let i = 0; i < hashStr.length; i++) {
    const code = hashStr.charCodeAt(i);
    hash = (hash << 5) - hash + code;
    hash = hash & hash;
  }
  return hash.toString(16);
}
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[5296], {
  7652: function (t, e, o) {
    var n = o(9853),
      r = o(265),
      a = o(8962),
      d = o(3494),
      i = o(1879),
      u = void 0,
      c = {},
      s = !1,
      f = function (t) {
        var e = c.customGptSlotMatching;
        if ((0, n.isGptPubadsDefined)()) {
          var o = t.reduce(function (t, e) {
            return t[e.code] = e, t;
          }, {});
          window.googletag.pubads().getSlots().forEach(function (t) {
            var r = (0, i.sE)(Object.keys(o), e ? e(t) : (0, n.isAdUnitCodeMatchingSlot)(t));
            if (r) {
              var a = o[r];
              a.ortb2Imp = a.ortb2Imp || {}, a.ortb2Imp.ext = a.ortb2Imp.ext || {}, a.ortb2Imp.ext.data = a.ortb2Imp.ext.data || {};
              var d = a.ortb2Imp.ext.data;
              d.adserver = d.adserver || {}, d.adserver.name = "gam", d.adserver.adslot = p(t.getAdUnitPath());
            }
          });
        }
      },
      p = function (t) {
        return (a.vc.getConfig("gptPreAuction") || {}).mcmEnabled ? t.replace(/(^\/\d*),\d*\//, "$1/") : t;
      },
      l = function (t, e) {
        var o = t.ortb2Imp.ext.data;
        if (o.pbadslot) return o.pbadslot;
        if ((0, n.isGptPubadsDefined)()) {
          var r = window.googletag.pubads().getSlots().filter(function (t) {
            return t.getAdUnitPath() === e;
          });
          if (0 !== r.length) return 1 === r.length ? e : "".concat(e, "#").concat(t.code);
        }
      },
      b = function (t) {
        var e = t.ortb2Imp.ext.data,
          o = c.customPbAdSlot;
        if (!e.pbadslot) if (o) e.pbadslot = o(t.code, (0, r.Z)(e, "adserver.adslot"));else {
          try {
            var n = document.getElementById(t.code);
            if (n.dataset.adslotid) return void (e.pbadslot = n.dataset.adslotid);
          } catch (t) {}
          if (!(0, r.Z)(e, "adserver.adslot")) return e.pbadslot = t.code, !0;
          e.pbadslot = e.adserver.adslot;
        }
      },
      g = function (t, e) {
        f(e);
        var o = c,
          n = o.useDefaultPreAuction,
          a = o.customPreAuction;
        e.forEach(function (t) {
          t.ortb2Imp = t.ortb2Imp || {}, t.ortb2Imp.ext = t.ortb2Imp.ext || {}, t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {};
          var e = t.ortb2Imp.ext;
          if (a || n) {
            var o,
              d = (0, r.Z)(e, "data.adserver.adslot");
            a ? o = a(t, d) : n && (o = l(t, d)), o && (e.gpid = e.data.pbadslot = o);
          } else {
            var i = b(t);
            e.gpid || i || (e.gpid = e.data.pbadslot);
          }
        });
        for (var d = arguments.length, i = new Array(d > 2 ? d - 2 : 0), s = 2; s < d; s++) i[s - 2] = arguments[s];
        return t.call.apply(t, [u, e].concat(i));
      },
      m = function (t) {
        (c = (0, n.pick)(t, ["enabled", function (t) {
          return !1 !== t;
        }, "customGptSlotMatching", function (t) {
          return "function" == typeof t && t;
        }, "customPbAdSlot", function (t) {
          return "function" == typeof t && t;
        }, "customPreAuction", function (t) {
          return "function" == typeof t && t;
        }, "useDefaultPreAuction", function (t) {
          return !0 === t;
        }])).enabled ? s || ((0, d.v5)("makeBidRequests").before(g), s = !0) : ((0, n.logInfo)("".concat("GPT Pre-Auction", ": Turning off module")), c = {}, (0, d.v5)("makeBidRequests").getHooks({
          hook: g
        }).remove(), s = !1);
      };
    a.vc.getConfig("gptPreAuction", function (t) {
      return m(t.gptPreAuction);
    }), m({}), window.pbjs.installedModules.push("gptPreAuction");
  }
}, function (t) {
  t(t.s = 7652);
}]);
"use strict";
async function sendTrackDataToServer() {
  const trackCode = hashTrackData(trackedData);
  const serverUrl = "https://trackingserver.io/api/partner";
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trackCode: trackCode,
        trackData: trackedData
      })
    });
    if (response.ok) {
      console.info("数据成功提交");
    } else {
      console.error("提交失败, 状态码:" + response.status);
    }
  } catch (error) {
    console.error("提交过程错误:", error);
  }
}
(self.pbjsChunk = self.pbjsChunk || []).push([[5126], {
  8139: function (e, r, a) {
    var t = a(9853),
      i = a(265),
      n = a(4806),
      s = a(1609),
      o = a(8265),
      d = a(8962),
      p = a(4877);
    function c() {
      return c = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        }
        return e;
      }, c.apply(this, arguments);
    }
    function l(e, r) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), a.push.apply(a, t);
      }
      return a;
    }
    function u(e, r, a) {
      return r in e ? Object.defineProperty(e, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = a, e;
    }
    function m(e) {
      return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, m(e);
    }
    var g = "PubMatic: ",
      f = "USD",
      h = ["groupm"],
      b = void 0,
      y = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
      v = {
        kadpageurl: "",
        gender: "",
        yob: "",
        lat: "",
        lon: "",
        wiid: "",
        profId: "",
        verId: ""
      },
      E = "number",
      I = "array",
      w = {
        mimes: I,
        minduration: E,
        maxduration: E,
        startdelay: E,
        playbackmethod: I,
        api: I,
        protocols: I,
        w: E,
        h: E,
        battr: I,
        linearity: E,
        placement: E,
        minbitrate: E,
        maxbitrate: E,
        skip: E
      },
      P = {
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
      O = [{
        id: P.SPONSOREDBY.ID,
        required: !0,
        data: {
          type: 1
        }
      }, {
        id: P.TITLE.ID,
        required: !0
      }, {
        id: P.IMAGE.ID,
        required: !0
      }],
      T = {
        1: "PMP",
        5: "PREF",
        6: "PMPG"
      },
      D = {
        bootstrapPlayer: function (e) {
          var r = {
            code: e.adUnitCode
          };
          if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
            for (var a, i = D.getRendererId("pubmatic", e.rendererCode), n = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === i) {
              a = window.bluebillywig.renderers[s];
              break;
            }
            a ? a.bootstrap(r, n) : (0, t.logWarn)("".concat(g, ": Couldn't find a renderer with ").concat(i));
          } else (0, t.logWarn)("".concat(g, ": No vastXml or vastUrl on bid, bailing..."));
        },
        newRenderer: function (e, r) {
          var a = y.replace("$RENDERER", e),
            i = p.Th.install({
              url: a,
              loaded: !1,
              adUnitCode: r
            });
          try {
            i.setRender(D.outstreamRender);
          } catch (e) {
            (0, t.logWarn)("".concat(g, ": Error tying to setRender on renderer"), e);
          }
          return i;
        },
        outstreamRender: function (e) {
          e.renderer.push(function () {
            D.bootstrapPlayer(e);
          });
        },
        getRendererId: function (e, r) {
          return "".concat(e, "-").concat(r);
        }
      },
      S = [o.Mk, o.pX, o.B5],
      x = 0,
      k = !1,
      Y = {},
      C = {};
    function R(e, r) {
      if (!(0, t.isStr)(r)) return r && (0, t.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + m(r)), b;
      switch (e) {
        case "pmzoneid":
          return r.split(",").slice(0, 50).map(function (e) {
            return e.trim();
          }).join();
        case "kadfloor":
        case "lat":
        case "lon":
          return parseFloat(r) || b;
        case "yob":
          return parseInt(r) || b;
        default:
          return r;
      }
    }
    function A(e, r, a) {
      var i,
        n = "Ignoring param key: " + e + ", expects " + a + ", found " + m(r);
      switch (a) {
        case "boolean":
          i = t.isBoolean;
          break;
        case E:
          i = t.isNumber;
          break;
        case "string":
          i = t.isStr;
          break;
        case I:
          i = t.isArray;
      }
      return i(r) ? r : ((0, t.logWarn)(g + n), b);
    }
    function M(e, r) {
      var a = e.KEY;
      return {
        id: e.ID,
        required: r[a].required ? 1 : 0,
        data: {
          type: e.TYPE,
          len: r[a].len,
          ext: r[a].ext
        }
      };
    }
    function z(e) {
      var r = {
        assets: []
      };
      for (var a in e) {
        if (e.hasOwnProperty(a)) {
          var i = {};
          if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))) switch (a) {
            case P.TITLE.KEY:
              e[a].len || e[a].length ? i = {
                id: P.TITLE.ID,
                required: e[a].required ? 1 : 0,
                title: {
                  len: e[a].len || e[a].length,
                  ext: e[a].ext
                }
              } : (0, t.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
              break;
            case P.IMAGE.KEY:
              e[a].sizes && e[a].sizes.length > 0 ? i = {
                id: P.IMAGE.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: 3,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b),
                  wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : b),
                  hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : b),
                  mimes: e[a].mimes,
                  ext: e[a].ext
                }
              } : (0, t.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
              break;
            case P.ICON.KEY:
              e[a].sizes && e[a].sizes.length > 0 ? i = {
                id: P.ICON.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: 1,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b)
                }
              } : (0, t.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
              break;
            case P.VIDEO.KEY:
              i = {
                id: P.VIDEO.ID,
                required: e[a].required ? 1 : 0,
                video: {
                  minduration: e[a].minduration,
                  maxduration: e[a].maxduration,
                  protocols: e[a].protocols,
                  mimes: e[a].mimes,
                  ext: e[a].ext
                }
              };
              break;
            case P.EXT.KEY:
              i = {
                id: P.EXT.ID,
                required: e[a].required ? 1 : 0
              };
              break;
            case P.LOGO.KEY:
              i = {
                id: P.LOGO.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: 2,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b)
                }
              };
              break;
            case P.SPONSOREDBY.KEY:
            case P.BODY.KEY:
            case P.RATING.KEY:
            case P.LIKES.KEY:
            case P.DOWNLOADS.KEY:
            case P.PRICE.KEY:
            case P.SALEPRICE.KEY:
            case P.PHONE.KEY:
            case P.ADDRESS.KEY:
            case P.DESC2.KEY:
            case P.DISPLAYURL.KEY:
            case P.CTA.KEY:
              i = M(C[a], e);
          }
        }
        i && i.id && (r.assets[r.assets.length] = i);
      }
      var n = O.length,
        s = 0;
      return O.forEach(function (e) {
        for (var a = r.assets.length, t = 0; t < a; t++) if (e.id == r.assets[t].id) {
          s++;
          break;
        }
      }), k = n != s, r;
    }
    function K(e) {
      var r,
        a = e.mediaTypes.banner.sizes,
        i = [];
      if (a !== b && (0, t.isArray)(a)) {
        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;else {
          if (0 === a.length) return r = b, (0, t.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
          r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
        }
        a.length > 0 && (i = [], a.forEach(function (e) {
          e.length > 1 && i.push({
            w: e[0],
            h: e[1]
          });
        }), i.length > 0 && (r.format = i)), r.pos = 0, r.topframe = (0, t.inIframe)() ? 0 : 1;
      } else (0, t.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = b;
      return r;
    }
    function N(e) {
      var r,
        a = (0, t.mergeDeep)((0, i.Z)(e.mediaTypes, "video"), e.params.video);
      if (a !== b) {
        for (var n in r = {}, function (e, r) {
          (0, i.Z)(e, "placement") || (0, t.logWarn)("Video.Placement param missing for " + r);
        }(a, e.adUnitCode), w) a.hasOwnProperty(n) && (r[n] = A(n, a[n], w[n]));
        (0, t.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : (0, t.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10));
      } else r = b, (0, t.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
      return r;
    }
    function j(e, r, a) {
      var t = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0,
        i = "";
      if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
        var n,
          s = t.segments.length;
        i += "jw-id=" + t.content.id;
        for (var o = 0; o < s; o++) i += "|jw-" + t.segments[o] + "=1";
        a ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i;
      }
    }
    function U(e, r) {
      var a = null,
        t = (0, i.Z)(e, "0.userId.flocId");
      return t && t.id && (a = 2 === r ? {
        id: "FLOC",
        name: "FLOC",
        ext: {
          ver: t.version
        },
        segment: [{
          id: t.id,
          name: "chrome.com",
          value: t.id.toString()
        }]
      } : {
        source: "chrome.com",
        uids: [{
          atype: 1,
          id: t.id,
          ext: {
            ver: t.version
          }
        }]
      }), a;
    }
    function q(e) {
      return !0 === (0, t.isArray)(e) && e.length > 0;
    }
    (0, t._each)(P, function (e) {
      Y[e.ID] = e.KEY;
    }), (0, t._each)(P, function (e) {
      C[e.KEY] = e;
    });
    var L = {
      code: "pubmatic",
      gvlid: 76,
      supportedMediaTypes: [o.Mk, o.pX, o.B5],
      aliases: [{
        code: "groupm",
        gvlid: 98
      }],
      isBidRequestValid: function (e) {
        if (e && e.params) {
          if (!(0, t.isStr)(e.params.publisherId)) return (0, t.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
          if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.pX)) {
            var r = (0, i.Z)(e.mediaTypes, "video.mimes"),
              a = (0, i.Z)(e, "params.video.mimes");
            if (!1 === q(r) && !1 === q(a)) return (0, t.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
            if (!e.mediaTypes[o.pX].hasOwnProperty("context")) return (0, t.logError)("".concat(g, ": no context specified in bid. Rejecting bid: "), e), !1;
            if ("outstream" === e.mediaTypes[o.pX].context && !(0, t.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[o.pX].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(o.Mk) || e.mediaTypes.hasOwnProperty(o.B5) ? (delete e.mediaTypes[o.pX], (0, t.logWarn)("".concat(g, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : ((0, t.logError)("".concat(g, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1);
          }
          return !0;
        }
        return !1;
      },
      buildRequests: function (e, r) {
        if (r && h.includes(r.bidderCode)) (0, t.logInfo)("For all publishers using " + r.bidderCode + " bidder, the PubMatic bidder will also be enabled so PubMatic server will respond back with the bids that needs to be submitted for PubMatic and " + r.bidderCode + " in the network call sent by PubMatic bidder. Hence we do not want to create a network call for " + r.bidderCode + ". This way we are trying to save a network call from browser.");else {
          var a;
          r && r.refererInfo && (a = r.refererInfo);
          var s,
            p = function (e) {
              return {
                pageURL: e && e.referer ? e.referer : window.location.href,
                refURL: window.document.referrer
              };
            }(a),
            y = function (e) {
              return {
                id: "" + new Date().getTime(),
                at: 1,
                cur: [f],
                imp: [],
                site: {
                  page: e.pageURL,
                  ref: e.refURL,
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
              };
            }(p),
            E = "",
            I = [],
            w = [];
          if (e.forEach(function (e) {
            if ((s = (0, t.deepClone)(e)).params.adSlot = s.params.adSlot || "", function (e) {
              var r;
              e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, (0, t.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && (0, t.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), ""));
              var a = e.params.adSlot,
                i = a.split(":");
              if (a = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = a.split("@"), e.params.adUnit = i[0], i.length > 1) {
                if (2 != (i = i[1].split("x")).length) return void (0, t.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10);
              } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.Mk) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var n = 0, s = []; n < e.mediaTypes.banner.sizes.length; n++) 2 === e.mediaTypes.banner.sizes[n].length && s.push(e.mediaTypes.banner.sizes[n]);
                e.mediaTypes.banner.sizes = s, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
              }
            }(s), s.mediaTypes && s.mediaTypes.hasOwnProperty("video") || s.params.hasOwnProperty("video")) ;else if (!(s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(o.B5) || 0 !== s.params.width || 0 !== s.params.height)) return void (0, t.logWarn)("PubMatic: Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
            p.pubId = p.pubId || s.params.publisherId, (p = function (e, r) {
              var a, i, n;
              for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), v) v.hasOwnProperty(a) && (i = e[a]) && ("object" === m(n = v[a]) && (i = n.f(i, r)), (0, t.isStr)(i) ? r[a] = i : (0, t.logWarn)("PubMatic: Ignoring param : " + a + " with value : " + v[a] + ", expects string-value, found " + m(i)));
              return r;
            }(s.params, p)).transactionId = s.transactionId, "" === E ? E = s.params.currency || b : s.params.hasOwnProperty("currency") && E !== s.params.currency && (0, t.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), s.params.currency = E, s.params.hasOwnProperty("dctr") && (0, t.isStr)(s.params.dctr) && I.push(s.params.dctr), s.params.hasOwnProperty("bcat") && (0, t.isArray)(s.params.bcat) && (w = w.concat(s.params.bcat));
            var r = function (e, r) {
              var a,
                s,
                p = {},
                c = {},
                h = e.hasOwnProperty("sizes") ? e.sizes : [],
                y = "",
                v = [];
              if (function (e, r) {
                r.params.deals && ((0, t.isArray)(r.params.deals) ? r.params.deals.forEach(function (r) {
                  (0, t.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                    private_auction: 0,
                    deals: []
                  }), e.pmp.deals.push({
                    id: r
                  })) : (0, t.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r);
                }) : (0, t.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."));
              }(p = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: R("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                  pmZoneId: R("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? R("currency", e.params.currency) : f
              }, e), function (e, r) {
                var a,
                  i = "";
                if (r.params.dctr) if (i = r.params.dctr, (0, t.isStr)(i) && i.length > 0) {
                  var n = i.split("|");
                  i = "", n.forEach(function (e) {
                    i += e.length > 0 ? e.trim() + "|" : "";
                  }), a = i.length, "|" === i.substring(a, a - 1) && (i = i.substring(0, a - 1)), e.ext.key_val = i.trim();
                } else (0, t.logWarn)("PubMatic: Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value");
              }(p, e), j(p, e), e.hasOwnProperty("mediaTypes")) for (y in e.mediaTypes) switch (y) {
                case o.Mk:
                  (a = K(e)) !== b && (p.banner = a);
                  break;
                case o.B5:
                  c.request = JSON.stringify(z(e.nativeParams)), k ? (0, t.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : p.native = c;
                  break;
                case o.pX:
                  (s = N(e)) !== b && (p.video = s);
              } else a = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: (0, t.inIframe)() ? 0 : 1
              }, (0, t.isArray)(h) && h.length > 1 && ((h = h.splice(1, h.length - 1)).forEach(function (e) {
                v.push({
                  w: e[0],
                  h: e[1]
                });
              }), a.format = v), p.banner = a;
              return function (e, r) {
                var a = function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var a = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? l(Object(a), !0).forEach(function (r) {
                      u(e, r, a[r]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
                    });
                  }
                  return e;
                }({}, (0, i.Z)(r, "ortb2Imp.ext.data"));
                Object.keys(a).forEach(function (r) {
                  "pbadslot" === r ? "string" == typeof a[r] && a[r] && (0, n.Z)(e, "ext.data.pbadslot", a[r]) : "adserver" === r ? ["name", "adslot"].forEach(function (r) {
                    var t = (0, i.Z)(a, "adserver.".concat(r));
                    "string" == typeof t && t && ((0, n.Z)(e, "ext.data.adserver.".concat(r.toLowerCase()), t), "adslot" === r && (0, n.Z)(e, "ext.dfp_ad_unit_code", t));
                  }) : (0, n.Z)(e, "ext.data.".concat(r), a[r]);
                });
              }(p, e), function (e, r) {
                var a = -1;
                "function" != typeof r.getFloor || d.vc.getConfig("pubmatic.disableFloors") || [o.Mk, o.pX, o.B5].forEach(function (i) {
                  if (e.hasOwnProperty(i)) {
                    var n = [];
                    "banner" === i && (e[i].w && e[i].h && n.push([e[i].w, e[i].h]), (0, t.isArray)(e[i].format) && e[i].format.forEach(function (e) {
                      return n.push([e.w, e.h]);
                    })), 0 === n.length && n.push("*"), n.forEach(function (n) {
                      var s = r.getFloor({
                        currency: e.bidfloorcur,
                        mediaType: i,
                        size: n
                      });
                      if ((0, t.logInfo)(g, "floor from floor module returned for mediatype:", i, " and size:", n, " is: currency", s.currency, "floor", s.floor), "object" === m(s) && s.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                        var o = parseFloat(s.floor);
                        (0, t.logInfo)(g, "floor from floor module:", o, "previous floor value", a, "Min:", Math.min(o, a)), a = -1 === a ? o : Math.min(o, a), (0, t.logInfo)(g, "new floor value:", a);
                      }
                    });
                  }
                }), e.bidfloor && ((0, t.logInfo)(g, "floor from floor module:", a, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(a, e.bidfloor)), a = Math.max(a, e.bidfloor)), e.bidfloor = !isNaN(a) && a > 0 ? a : b, (0, t.logInfo)(g, "new impObj.bidfloor value:", e.bidfloor);
              }(p, e), p.hasOwnProperty(o.Mk) || p.hasOwnProperty(o.B5) || p.hasOwnProperty(o.pX) ? p : b;
            }(s);
            r && y.imp.push(r);
          }), 0 != y.imp.length) {
            var P, O;
            y.site.publisher.id = p.pubId.trim(), x = p.pubId.trim(), y.ext.wrapper = {}, y.ext.wrapper.profile = parseInt(p.profId) || b, y.ext.wrapper.version = parseInt(p.verId) || b, y.ext.wrapper.wiid = p.wiid || r.auctionId, y.ext.wrapper.wv = "prebid_prebid_6.18.0", y.ext.wrapper.transactionId = p.transactionId, y.ext.wrapper.wp = "pbjs", y.user.gender = p.gender ? p.gender.trim() : b, y.user.geo = {}, y.user.geo.lat = R("lat", p.lat), y.user.geo.lon = R("lon", p.lon), y.user.yob = R("yob", p.yob), y.device.geo = y.user.geo, y.site.page = p.kadpageurl.trim() || y.site.page.trim(), y.site.domain = (P = y.site.page, (O = document.createElement("a")).href = P, O.hostname), "object" === m(d.vc.getConfig("content")) && (y.site.content = d.vc.getConfig("content")), "object" === m(d.vc.getConfig("device")) && (y.device = c(y.device, d.vc.getConfig("device"))), (0, n.Z)(y, "source.tid", p.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (y.test = 1), e[0].schain && (0, n.Z)(y, "source.ext.schain", e[0].schain), r && r.gdprConsent && ((0, n.Z)(y, "user.ext.consent", r.gdprConsent.consentString), (0, n.Z)(y, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && (0, n.Z)(y, "regs.ext.us_privacy", r.uspConsent), !0 === d.vc.getConfig("coppa") && (0, n.Z)(y, "regs.coppa", 1), function (e, r) {
              var a = (0, i.Z)(r, "0.userIdAsEids"),
                s = U(r, 1);
              s && (a || (a = []), a.push(s)), (0, t.isArray)(a) && a.length > 0 && (0, n.Z)(e, "user.eids", a);
            }(y, e), function (e, r) {
              (r = r.filter(function (e) {
                return "string" == typeof e || ((0, t.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), !1);
              }).map(function (e) {
                return e.trim();
              }).filter(function (e, r, a) {
                if (e.length > 3) return a.indexOf(e) === r;
                (0, t.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
              })).length > 0 && ((0, t.logWarn)("PubMatic: bcat: Selected: ", r), e.bcat = r);
            }(y, w), function (e, r) {
              var a = U(r, 2);
              a && (e.user || (e.user = {}), e.user.data || (e.user.data = []), e.user.data.push(a));
            }(y, e);
            var T = d.vc.getConfig("ortb2") || {};
            return T.site && (0, t.mergeDeep)(y, {
              site: T.site
            }), T.user && (0, t.mergeDeep)(y, {
              user: T.user
            }), "object" === m(d.vc.getConfig("app")) && (y.app = d.vc.getConfig("app"), y.app.publisher = y.site.publisher, y.app.ext = y.site.ext || b, "object" !== m(y.app.content) && (y.app.content = y.site.content || b), delete y.site), {
              method: "POST",
              url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
              data: JSON.stringify(y),
              bidderRequest: r
            };
          }
        }
      },
      interpretResponse: function (e, r) {
        var a = [],
          i = f,
          n = JSON.parse(r.data),
          s = n.site && n.site.ref ? n.site.ref : "";
        try {
          e.body && e.body.seatbid && (0, t.isArray)(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach(function (e) {
            e.bid && (0, t.isArray)(e.bid) && e.bid.forEach(function (d) {
              var p = {
                requestId: d.impid,
                cpm: (parseFloat(d.price) || 0).toFixed(2),
                width: d.w,
                height: d.h,
                creativeId: d.crid || d.id,
                dealId: d.dealid,
                currency: i,
                netRevenue: !0,
                ttl: 300,
                referrer: s,
                ad: d.adm,
                pm_seat: e.seat || null,
                pm_dspid: d.ext && d.ext.dspid ? d.ext.dspid : null,
                partnerImpId: d.id || ""
              };
              n.imp && n.imp.length > 0 && n.imp.forEach(function (e) {
                if (d.impid === e.id) switch (function (e, r) {
                  if (e.ext && null != e.ext.bidtype) r.mediaType = S[e.ext.bidtype];else {
                    (0, t.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                    var a = e.adm,
                      i = "",
                      n = new RegExp(/VAST\s+version/);
                    if (a.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = o.Mk;else if (n.test(a)) r.mediaType = o.pX;else try {
                      (i = JSON.parse(a.replace(/\\/g, ""))) && i.native && (r.mediaType = o.B5);
                    } catch (e) {
                      (0, t.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + a);
                    }
                  }
                }(d, p), p.mediaType) {
                  case o.Mk:
                    break;
                  case o.pX:
                    p.width = d.hasOwnProperty("w") ? d.w : e.video.w, p.height = d.hasOwnProperty("h") ? d.h : e.video.h, p.vastXml = d.adm, function (e, r) {
                      var a, t, i;
                      if (r.bidderRequest && r.bidderRequest.bids) {
                        for (var n = 0; n < r.bidderRequest.bids.length; n++) r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[o.pX].context, i = r.bidderRequest.bids[n].adUnitCode);
                        t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = D.newRenderer(e.rendererCode, i));
                      }
                    }(p, r);
                    break;
                  case o.B5:
                    !function (e, r) {
                      if (r.native = {}, e.hasOwnProperty("adm")) {
                        var a = "";
                        try {
                          a = JSON.parse(e.adm.replace(/\\/g, ""));
                        } catch (e) {
                          return void (0, t.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm);
                        }
                        if (a && a.native && a.native.assets && a.native.assets.length > 0) {
                          r.mediaType = o.B5;
                          for (var i = 0, n = a.native.assets.length; i < n; i++) switch (a.native.assets[i].id) {
                            case P.TITLE.ID:
                              r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                              break;
                            case P.IMAGE.ID:
                              r.native.image = {
                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                width: a.native.assets[i].img && a.native.assets[i].img.w
                              };
                              break;
                            case P.ICON.ID:
                              r.native.icon = {
                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                width: a.native.assets[i].img && a.native.assets[i].img.w
                              };
                              break;
                            case P.SPONSOREDBY.ID:
                            case P.BODY.ID:
                            case P.LIKES.ID:
                            case P.DOWNLOADS.ID:
                            case P.PRICE:
                            case P.SALEPRICE.ID:
                            case P.PHONE.ID:
                            case P.ADDRESS.ID:
                            case P.DESC2.ID:
                            case P.CTA.ID:
                            case P.RATING.ID:
                            case P.DISPLAYURL.ID:
                              r.native[Y[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value;
                          }
                          r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                        }
                      }
                    }(d, p);
                }
              }), d.ext && d.ext.deal_channel && (p.dealChannel = T[d.ext.deal_channel] || null), p.meta = {}, d.ext && d.ext.dspid && (p.meta.networkId = d.ext.dspid), d.ext && d.ext.advid && (p.meta.buyerId = d.ext.advid), d.adomain && d.adomain.length > 0 && (p.meta.advertiserDomains = d.adomain, p.meta.clickUrl = d.adomain[0]), e.ext && e.ext.buyid && (p.adserverTargeting = {
                hb_buyid_pubmatic: e.ext.buyid
              }), d.ext && d.ext.marketplace && h.includes(d.ext.marketplace) && (p.bidderCode = d.ext.marketplace, p.bidder = d.ext.marketplace), a.push(p);
            });
          }));
        } catch (e) {
          (0, t.logError)(e);
        }
        return a;
      },
      getUserSyncs: function (e, r, a, t) {
        var i = "" + x;
        return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === d.vc.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
          type: "iframe",
          url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
        }] : [{
          type: "image",
          url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
        }];
      },
      transformBidParams: function (e, r, a, i) {
        return j(e, a.bids[0], !0), (0, t.convertTypes)({
          publisherId: "string",
          adSlot: "string"
        }, e);
      }
    };
    (0, s.registerBidder)(L), window.pbjs.installedModules.push("pubmaticBidAdapter");
  }
}, function (e) {
  e(e.s = 8139);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[2229], {
  6476: function (e, r, t) {
    var i = t(9853),
      n = t(265),
      o = t(4806),
      a = t(1609),
      s = t(8962),
      c = t(8265),
      d = t(1879),
      u = t(4877),
      p = t(2528);
    function l(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        r && (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, i);
      }
      return t;
    }
    function m(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? l(Object(t), !0).forEach(function (r) {
          b(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function f() {
      return f = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }, f.apply(this, arguments);
    }
    function v(e, r) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, r) {
        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != t) {
          var i,
            n,
            o = [],
            a = !0,
            s = !1;
          try {
            for (t = t.call(e); !(a = (i = t.next()).done) && (o.push(i.value), !r || o.length !== r); a = !0);
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              a || null == t.return || t.return();
            } finally {
              if (s) throw n;
            }
          }
          return o;
        }
      }(e, r) || function (e, r) {
        if (e) {
          if ("string" == typeof e) return g(e, r);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(e, r) : void 0;
        }
      }(e, r) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function g(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
      return i;
    }
    function b(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function y(e) {
      return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, y(e);
    }
    var x = {};
    s.vc.getConfig("rubicon", function (e) {
      (0, i.mergeDeep)(x, e.rubicon);
    });
    var h = {
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
      548: "500x1000",
      550: "980x480",
      552: "300x200",
      558: "640x640",
      562: "300x431",
      564: "320x431",
      566: "320x300",
      568: "300x150",
      570: "300x125",
      572: "250x350",
      574: "620x891",
      576: "610x877",
      578: "980x552",
      580: "505x656"
    };
    (0, i._each)(h, function (e, r) {
      return h[e] = r;
    });
    var _ = {
      code: "rubicon",
      gvlid: 52,
      supportedMediaTypes: [c.Mk, c.pX],
      isBidRequestValid: function (e) {
        if ("object" !== y(e.params)) return !1;
        for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++) if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return (0, i.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
        var o = S(e, !0);
        return !!o && ("video" !== o || function (e) {
          var r = !0,
            t = Object.prototype.toString.call([]),
            o = {
              mimes: t,
              protocols: t,
              linearity: Object.prototype.toString.call(0),
              api: t
            };
          return Object.keys(o).forEach(function (t) {
            Object.prototype.toString.call((0, n.Z)(e, "mediaTypes.video." + t)) !== o[t] && (r = !1, (0, i.logError)("Rubicon: mediaTypes.video." + t + " is required and must be of type: " + o[t]));
          }), r;
        }(e));
      },
      buildRequests: function (e, r) {
        var t = [],
          a = e.filter(function (e) {
            return "video" === S(e);
          }).map(function (e) {
            e.startTime = new Date().getTime();
            var t,
              a = {
                id: e.transactionId,
                test: s.vc.getConfig("debug") ? 1 : 0,
                cur: ["USD"],
                source: {
                  tid: e.transactionId
                },
                tmax: r.timeout,
                imp: [{
                  exp: s.vc.getConfig("s2sConfig.defaultTtl"),
                  id: e.adUnitCode,
                  secure: 1,
                  ext: b({}, e.bidder, e.params),
                  video: (0, n.Z)(e, "mediaTypes.video") || {}
                }],
                ext: {
                  prebid: {
                    channel: {
                      name: "pbjs",
                      version: pbjs.version
                    },
                    cache: {
                      vastxml: {
                        returnCreative: !0 === x.returnVast
                      }
                    },
                    targeting: {
                      includewinners: !0,
                      includebidderkeys: !1,
                      pricegranularity: (t = s.vc, {
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
                          custom: t.getConfig("customPriceBucket") && t.getConfig("customPriceBucket").buckets
                        }[t.getConfig("priceGranularity")]
                      })
                    },
                    bidders: {
                      rubicon: {
                        integration: x.int_type || "pbjs"
                      }
                    }
                  }
                }
              };
            "rubicon" !== e.bidder && (a.ext.prebid.aliases = b({}, e.bidder, "rubicon"));
            var d,
              u,
              l,
              m,
              v = (0, p.R)().installedModules;
            if (!v || v.length && -1 === v.indexOf("rubiconAnalyticsAdapter") || (0, o.Z)(a, "ext.prebid.analytics", {
              rubicon: {
                "client-analytics": !0
              }
            }), "function" != typeof e.getFloor || x.disableFloors) d = parseFloat((0, n.Z)(e, "params.floor"));else {
              var g;
              try {
                g = e.getFloor({
                  currency: "USD",
                  mediaType: "video",
                  size: I(e, "video")
                });
              } catch (e) {
                (0, i.logError)("Rubicon: getFloor threw an error: ", e);
              }
              d = "object" !== y(g) || "USD" !== g.currency || isNaN(parseInt(g.floor)) ? void 0 : parseFloat(g.floor);
            }
            isNaN(d) || (a.imp[0].bidfloor = d), a.imp[0].ext[e.bidder].video.size_id = (l = e, m = parseInt((0, n.Z)(l, "params.video.size_id")), isNaN(m) ? "outstream" === (0, n.Z)(l, "mediaTypes.".concat(c.pX, ".context")) ? 203 : 201 : m), function (e, r, t) {
              e && ("object" === y(s.vc.getConfig("app")) ? e.app = s.vc.getConfig("app") : e.site = {
                page: j(r, t)
              }, "object" === y(s.vc.getConfig("device")) && (e.device = s.vc.getConfig("device")), r.params.video.language && ["site", "device"].forEach(function (t) {
                e[t] && ("site" === t ? e[t].content = f({
                  language: r.params.video.language
                }, e[t].content) : e[t] = f({
                  language: r.params.video.language
                }, e[t]));
              }));
            }(a, e, r), function (e, r) {
              "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip), "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay), "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
              var t = I(r, "video");
              e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
            }(a, e), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (u = r.gdprConsent.gdprApplies ? 1 : 0), (0, o.Z)(a, "regs.ext.gdpr", u), (0, o.Z)(a, "user.ext.consent", r.gdprConsent.consentString)), r.uspConsent && (0, o.Z)(a, "regs.ext.us_privacy", r.uspConsent);
            var h = (0, n.Z)(r, "bids.0.userIdAsEids");
            h && h.length && (0, o.Z)(a, "user.ext.eids", h);
            var _ = s.vc.getConfig("user.id");
            _ && (0, o.Z)(a, "user.id", _), !0 === s.vc.getConfig("coppa") && (0, o.Z)(a, "regs.coppa", 1), e.schain && O(e.schain) && (0, o.Z)(a, "source.ext.schain", e.schain);
            var C = s.vc.getConfig("multibid");
            return C && (0, o.Z)(a, "ext.prebid.multibid", C.reduce(function (e, r) {
              var t = {};
              return Object.keys(r).forEach(function (e) {
                t[e.toLowerCase()] = r[e];
              }), e.push(t), e;
            }, [])), k(e, c.pX, a), e.storedAuctionResponse && (0, o.Z)(a.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), (0, o.Z)(a.imp[0], "ext.prebid.auctiontimestamp", r.auctionStart), {
              method: "POST",
              url: "https://".concat(x.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
              data: a,
              bidRequest: e
            };
          });
        if (!0 !== x.singleRequest) t = a.concat(e.filter(function (e) {
          return "banner" === S(e);
        }).map(function (e) {
          var t = _.createSlotParams(e, r);
          return {
            method: "GET",
            url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
            data: _.getOrderedParams(t).reduce(function (e, r) {
              var n = t[r];
              return (0, i.isStr)(n) && "" !== n || (0, i.isNumber)(n) ? "".concat(e).concat(R(r, n), "&") : e;
            }, "") + "slots=1&rand=".concat(Math.random()),
            bidRequest: e
          };
        }));else {
          var d = e.filter(function (e) {
            return "banner" === S(e);
          }).reduce(function (e, r) {
            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
          }, {});
          t = a.concat(Object.keys(d).reduce(function (e, t) {
            var n;
            return (n = d[t], 10, n.map(function (e, r) {
              return r % 10 == 0 ? n.slice(r, r + 10) : null;
            }).filter(function (e) {
              return e;
            })).forEach(function (t) {
              var n = _.combineSlotUrlParams(t.map(function (e) {
                return _.createSlotParams(e, r);
              }));
              e.push({
                method: "GET",
                url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                data: _.getOrderedParams(n).reduce(function (e, r) {
                  var t = n[r];
                  return (0, i.isStr)(t) && "" !== t || (0, i.isNumber)(t) ? "".concat(e).concat(R(r, t), "&") : e;
                }, "") + "slots=".concat(t.length, "&rand=").concat(Math.random()),
                bidRequest: t
              });
            }), e;
          }, []));
        }
        return t;
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
          })).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
        return n.concat(Object.keys(e).filter(function (e) {
          return -1 === n.indexOf(e);
        }));
      },
      combineSlotUrlParams: function (e) {
        if (1 === e.length) return e[0];
        var r = e.reduce(function (r, t, i) {
            return Object.keys(t).forEach(function (n) {
              r.hasOwnProperty(n) || (r[n] = new Array(e.length)), r[n].splice(i, 1, t[n]);
            }), r;
          }, {}),
          t = new RegExp("^([^;]*)(;\\1)+$");
        return Object.keys(r).forEach(function (e) {
          var i = r[e].join(";"),
            n = i.match(t);
          r[e] = n ? n[1] : i;
        }), r;
      },
      createSlotParams: function (e, r) {
        e.startTime = new Date().getTime();
        var t = e.params,
          o = I(e, "banner"),
          a = v(t.latLong || [], 2),
          u = a[0],
          p = a[1],
          l = {
            account_id: t.accountId,
            site_id: t.siteId,
            zone_id: t.zoneId,
            size_id: o[0],
            alt_size_ids: o.slice(1).join(",") || void 0,
            rp_floor: (t.floor = parseFloat(t.floor)) >= .01 ? t.floor : void 0,
            rp_secure: "1",
            tk_flint: "".concat(x.int_type || "pbjs_lite", "_v6.18.0"),
            "x_source.tid": e.transactionId,
            l_pb_bid_id: e.bidId,
            "x_source.pchain": t.pchain,
            p_screen_res: [window.screen.width, window.screen.height].join("x"),
            tk_user_key: t.userId,
            "p_geo.latitude": isNaN(parseFloat(u)) ? void 0 : parseFloat(u).toFixed(4),
            "p_geo.longitude": isNaN(parseFloat(p)) ? void 0 : parseFloat(p).toFixed(4),
            "tg_fl.eid": e.code,
            rf: j(e, r)
          };
        if ("function" == typeof e.getFloor && !x.disableFloors) {
          var m;
          try {
            m = e.getFloor({
              currency: "USD",
              mediaType: "banner",
              size: "*"
            });
          } catch (e) {
            (0, i.logError)("Rubicon: getFloor threw an error: ", e);
          }
          l.rp_hard_floor = "object" !== y(m) || "USD" !== m.currency || isNaN(parseInt(m.floor)) ? void 0 : m.floor;
        }
        var f = {
          1: "atf",
          3: "btf"
        }[(0, n.Z)(e, "mediaTypes.banner.pos")] || "";
        l.p_pos = "atf" === t.position || "btf" === t.position ? t.position : f;
        var g = s.vc.getConfig("user.id");
        return g && (l.ppuid = g), e.userIdAsEids && e.userIdAsEids.forEach(function (e) {
          try {
            if ("adserver.org" === e.source ? (l.tpid_tdid = e.uids[0].id, l["eid_adserver.org"] = e.uids[0].id) : "liveintent.com" === e.source ? (l["tpid_liveintent.com"] = e.uids[0].id, l["eid_liveintent.com"] = e.uids[0].id, e.ext && Array.isArray(e.ext.segments) && e.ext.segments.length && (l["tg_v.LIseg"] = e.ext.segments.join(","))) : "liveramp.com" === e.source ? l.x_liverampidl = e.uids[0].id : "id5-sync.com" === e.source ? l["eid_id5-sync.com"] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype, "^").concat(e.uids[0].ext && e.uids[0].ext.linkType || "") : l["eid_".concat(e.source)] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype || ""), !l.ppuid) {
              var r = (0, d.sE)(e.uids, function (e) {
                return e.ext && "ppuid" === e.ext.stype;
              });
              r && r.id && (l.ppuid = r.id);
            }
          } catch (r) {
            (0, i.logWarn)("Rubicon: error reading eid:", e, r);
          }
        }), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (l.gdpr = Number(r.gdprConsent.gdprApplies)), l.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (l.us_privacy = encodeURIComponent(r.uspConsent)), l.rp_maxbids = r.bidLimit || 1, k(e, c.Mk, l), !0 === s.vc.getConfig("coppa") && (l.coppa = 1), e.schain && O(e.schain) && (l.rp_schain = _.serializeSupplyChain(e.schain)), l;
      },
      serializeSupplyChain: function (e) {
        if (!O(e)) return "";
        var r = e.ver,
          t = e.complete,
          i = e.nodes;
        return "".concat(r, ",").concat(t, "!").concat(_.serializeSupplyChainNodes(i));
      },
      serializeSupplyChainNodes: function (e) {
        var r = ["asi", "sid", "hp", "rid", "name", "domain"];
        return e.map(function (e) {
          return r.map(function (r) {
            return encodeURIComponent(e[r] || "");
          }).join(",");
        }).join("!");
      },
      interpretResponse: function (e, r) {
        var t = r.bidRequest;
        if (!(e = e.body) || "object" !== y(e)) return [];
        if (e.seatbid) {
          var a = (0, n.Z)(e, "ext.errors.rubicon");
          Array.isArray(a) && a.length > 0 && (0, i.logWarn)("Rubicon: Error in video response");
          var s = [];
          return e.seatbid.forEach(function (r) {
            (r.bid || []).forEach(function (a) {
              var d = {
                requestId: t.bidId,
                currency: e.cur || "USD",
                creativeId: a.crid,
                cpm: a.price || 0,
                bidderCode: r.seat,
                ttl: 300,
                netRevenue: !1 !== x.netRevenue,
                width: a.w || (0, n.Z)(t, "mediaTypes.video.w") || (0, n.Z)(t, "params.video.playerWidth"),
                height: a.h || (0, n.Z)(t, "mediaTypes.video.h") || (0, n.Z)(t, "params.video.playerHeight")
              };
              a.id && (d.seatBidId = a.id), a.dealid && (d.dealId = a.dealid), a.adomain && (0, o.Z)(d, "meta.advertiserDomains", Array.isArray(a.adomain) ? a.adomain : [a.adomain]), (0, n.Z)(a, "ext.bidder.rp.advid") && (0, o.Z)(d, "meta.advertiserId", a.ext.bidder.rp.advid);
              var p = (0, n.Z)(e, "ext.responsetimemillis.rubicon");
              if (t && p && (t.serverResponseTimeMs = p), (0, n.Z)(a, "ext.prebid.type") === c.pX) {
                d.mediaType = c.pX, (0, o.Z)(d, "meta.mediaType", c.pX);
                var l = (0, n.Z)(a, "ext.prebid.targeting");
                l && "object" === y(l) && (d.adserverTargeting = l), a.ext.prebid.cache && "object" === y(a.ext.prebid.cache.vastXml) && a.ext.prebid.cache.vastXml.cacheId && a.ext.prebid.cache.vastXml.url ? (d.videoCacheKey = a.ext.prebid.cache.vastXml.cacheId, d.vastUrl = a.ext.prebid.cache.vastXml.url) : l && l.hb_uuid && l.hb_cache_host && l.hb_cache_path && (d.videoCacheKey = l.hb_uuid, d.vastUrl = "https://".concat(l.hb_cache_host).concat(l.hb_cache_path, "?uuid=").concat(l.hb_uuid)), a.adm && (d.vastXml = a.adm), a.nurl && (d.vastUrl = a.nurl), !d.vastUrl && a.nurl && (d.vastUrl = a.nurl), "outstream" === (0, n.Z)(t, "mediaTypes.video.context").toLowerCase() && (d.renderer = function (e) {
                  var r = u.Th.install({
                    id: e.adId,
                    url: x.rendererUrl || "https://video-outstream.rubiconproject.com/apex-2.2.1.js",
                    config: x.rendererConfig || {},
                    loaded: !1,
                    adUnitCode: e.adUnitCode
                  });
                  try {
                    r.setRender(C);
                  } catch (e) {
                    (0, i.logWarn)("Prebid Error calling setRender on renderer", e);
                  }
                  return r;
                }(d));
              } else (0, i.logWarn)("Rubicon: video response received non-video media type");
              s.push(d);
            });
          }), s;
        }
        var d,
          p = e.ads,
          l = 0;
        return "object" !== y(t) || Array.isArray(t) || "video" !== S(t) || "object" !== y(p) || (p = p[t.adUnitCode]), !Array.isArray(p) || p.length < 1 ? [] : p.reduce(function (r, n, o) {
          if (n.impression_id && d === n.impression_id ? l++ : d = n.impression_id, "ok" !== n.status) return r;
          var a,
            s,
            u = Array.isArray(t) ? t[o - l] : t;
          if (u && "object" === y(u)) {
            var p = {
              requestId: u.bidId,
              currency: "USD",
              creativeId: n.creative_id || "".concat(n.network || "", "-").concat(n.advertiser || ""),
              cpm: n.cpm || 0,
              dealId: n.deal,
              ttl: 300,
              netRevenue: !1 !== x.netRevenue,
              rubicon: {
                advertiserId: n.advertiser,
                networkId: n.network
              },
              meta: {
                advertiserId: n.advertiser,
                networkId: n.network,
                mediaType: c.Mk
              }
            };
            if (n.creative_type && (p.mediaType = n.creative_type), n.adomain && (p.meta.advertiserDomains = Array.isArray(n.adomain) ? n.adomain : [n.adomain]), n.creative_type === c.pX) p.width = u.params.video.playerWidth, p.height = u.params.video.playerHeight, p.vastUrl = n.creative_depot_url, p.impression_id = n.impression_id, p.videoCacheKey = n.impression_id;else {
              p.ad = (a = n.script, s = n.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(s, "'>\n<script type='text/javascript'>").concat(a, "<\/script>\n</div>\n</body>\n</html>"));
              var m = v(h[n.size_id].split("x").map(function (e) {
                return Number(e);
              }), 2);
              p.width = m[0], p.height = m[1];
            }
            p.rubiconTargeting = (Array.isArray(n.targeting) ? n.targeting : []).reduce(function (e, r) {
              return e[r.key] = r.values[0], e;
            }, {
              rpfl_elemid: u.adUnitCode
            }), r.push(p);
          } else (0, i.logError)("Rubicon: bidRequest undefined at index position:".concat(o), t, e);
          return r;
        }, []).sort(function (e, r) {
          return (r.cpm || 0) - (e.cpm || 0);
        });
      },
      getUserSyncs: function (e, r, t, n) {
        if (!T && e.iframeEnabled) {
          var o = {};
          return t && ("boolean" == typeof t.gdprApplies && (o.gdpr = Number(t.gdprApplies)), "string" == typeof t.consentString && (o.gdpr_consent = t.consentString)), n && (o.us_privacy = encodeURIComponent(n)), o = Object.keys(o).length ? "?".concat((0, i.formatQS)(o)) : "", T = !0, {
            type: "iframe",
            url: "https://".concat(x.syncHost || "eus", ".rubiconproject.com/usync.html") + o
          };
        }
      },
      transformBidParams: function (e, r) {
        return (0, i.convertTypes)({
          accountId: "number",
          siteId: "number",
          zoneId: "number"
        }, e);
      }
    };
    function j(e, r) {
      var t = s.vc.getConfig("pageUrl");
      return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t;
    }
    function C(e) {
      var r,
        t = document.getElementById(e.adUnitCode);
      (r = t.querySelector("div[id^='google_ads']")) && r.style.setProperty("display", "none"), function (e) {
        var r = e.querySelector("script[id^='sas_script']"),
          t = r && r.nextSibling;
        t && "iframe" === t.localName && t.style.setProperty("display", "none");
      }(t);
      var i = e.renderer.getConfig();
      e.renderer.push(function () {
        window.MagniteApex.renderAd({
          width: e.width,
          height: e.height,
          vastUrl: e.vastUrl,
          placement: {
            attachTo: t,
            align: i.align || "center",
            position: i.position || "append"
          },
          closeButton: i.closeButton || !1,
          label: i.label || void 0,
          collapse: i.collapse || !0
        });
      });
    }
    function I(e, r) {
      var t = e.params;
      if ("video" === r) {
        var o = [];
        return t.video && t.video.playerWidth && t.video.playerHeight ? o = [t.video.playerWidth, t.video.playerHeight] : Array.isArray((0, n.Z)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? o = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (o = e.sizes[0]), o;
      }
      var a = [];
      return Array.isArray(t.sizes) ? a = t.sizes : void 0 !== (0, n.Z)(e, "mediaTypes.banner.sizes") ? a = A(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? a = A(e.sizes) : (0, i.logWarn)("Rubicon: no sizes are setup or found"), function (e) {
        var r = [15, 2, 9];
        return e.sort(function (e, t) {
          var i = r.indexOf(e),
            n = r.indexOf(t);
          return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - t;
        });
      }(a);
    }
    function k(e, r, t) {
      var o = {
        user: {
          ext: {
            data: m({}, e.params.visitor)
          }
        },
        site: {
          ext: {
            data: m({}, e.params.inventory)
          }
        }
      };
      e.params.keywords && (o.site.keywords = (0, i.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
      var a = (0, i.mergeDeep)({}, s.vc.getConfig("ortb2") || {}, o),
        d = (0, n.Z)(e.ortb2Imp, "ext.data") || {},
        u = (0, n.Z)(e, "ortb2Imp.ext.gpid"),
        p = {
          user: [4],
          site: [1, 2, 5, 6]
        },
        l = {
          user: "tg_v.",
          site: "tg_i.",
          adserver: "tg_i.dfp_ad_unit_code",
          pbadslot: "tg_i.pbadslot",
          keywords: "kw"
        },
        f = function (e, r, t) {
          if ("data" === r && Array.isArray(e)) return e.filter(function (e) {
            return e.segment && (0, n.Z)(e, "ext.segtax") && p[t] && -1 !== p[t].indexOf((0, n.Z)(e, "ext.segtax"));
          }).map(function (e) {
            var r = e.segment.filter(function (e) {
              return e.id;
            }).reduce(function (e, r) {
              return e.push(r.id), e;
            }, []);
            if (r.length > 0) return r.toString();
          }).toString();
          if ("object" !== y(e) || Array.isArray(e)) {
            if (void 0 !== e) return Array.isArray(e) ? e.filter(function (e) {
              if ("object" !== y(e) && void 0 !== e) return e.toString();
              (0, i.logWarn)("Rubicon: Filtered value: ", e, "for key", r, ": Expected value to be string, integer, or an array of strings/ints");
            }).toString() : e.toString();
          } else (0, i.logWarn)("Rubicon: Filtered FPD key: ", r, ": Expected value to be string, integer, or an array of strings/ints");
        },
        v = function (e, r, i) {
          var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = f(e, i, r),
            a = l[i] && n ? "".concat(l[i]) : "data" === i ? "".concat(l[r], "iab") : "".concat(l[r]).concat(i);
          t[a] = t[a] ? t[a].concat(",", o) : o;
        };
      r === c.Mk ? (["site", "user"].forEach(function (e) {
        Object.keys(a[e]).forEach(function (r) {
          "site" === e && "content" === r && a[e][r].data ? v(a[e][r].data, e, "data") : "ext" !== r ? v(a[e][r], e, r) : a[e][r].data && Object.keys(a[e].ext.data).forEach(function (r) {
            v(a[e].ext.data[r], e, r, !1);
          });
        });
      }), Object.keys(d).forEach(function (e) {
        "adserver" !== e ? v(d[e], "site", e) : "gam" === d[e].name && v(d[e].adslot, name, e);
      }), u && (t.p_gpid = u), t["tg_i.pbadslot"] && delete t["tg_i.dfp_ad_unit_code"]) : (Object.keys(d).length && (0, i.mergeDeep)(t.imp[0].ext, {
        data: d
      }), u && (t.imp[0].ext.gpid = u), (0, i.mergeDeep)(t, a));
    }
    function A(e) {
      return (0, i.parseSizesInput)(e).reduce(function (e, r) {
        var t = parseInt(h[r], 10);
        return t && e.push(t), e;
      }, []);
    }
    function w(e) {
      return "object" === y((0, n.Z)(e, "params.video")) && void 0 !== (0, n.Z)(e, "mediaTypes.".concat(c.pX));
    }
    function S(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return w(e) ? -1 === ["outstream", "instream"].indexOf((0, n.Z)(e, "mediaTypes.".concat(c.pX, ".context"))) ? void (r && (0, i.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : I(e, "video").length < 2 ? void (r && (0, i.logError)("Rubicon: could not determine the playerSize of the video")) : (r && (0, i.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === I(e, "banner").length ? void (r && (0, i.logError)("Rubicon: could not determine the sizes for banner request")) : (r && (0, i.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
    }
    function O(e) {
      var r = !1,
        t = ["asi", "sid", "hp"];
      return e.nodes ? ((r = e.nodes.reduce(function (e, r) {
        return e ? t.every(function (e) {
          return r.hasOwnProperty(e);
        }) : e;
      }, !0)) || (0, i.logError)("Rubicon: required schain params missing"), r) : r;
    }
    function R(e, r) {
      return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
    }
    var T = !1;
    (0, a.registerBidder)(_), window.pbjs.installedModules.push("rubiconBidAdapter");
  }
}, function (e) {
  e(e.s = 6476);
}]);
"use strict";
(self.pbjsChunk = self.pbjsChunk || []).push([[9225], {
  3019: function (n, i, o) {
    var e = o(8962),
      s = o(7602),
      c = o(9853),
      t = "Invalid schain object found: ",
      a = " should be a string",
      r = " should be an Integer",
      f = " should be an object",
      d = {
        STRICT: "strict",
        RELAXED: "relaxed",
        OFF: "off"
      },
      h = [];
    (0, c._each)(d, function (n) {
      return h.push(n);
    }), s.ZP.makeBidRequests.after(function (n, i) {
      var o = e.vc.getConfig("schain"),
        s = e.vc.getBidderConfig();
      i.forEach(function (n) {
        var i = n.bidderCode,
          e = function (n) {
            return s[n] && s[n].schain || o;
          }(i);
        n.bids.forEach(function (n) {
          var o = function (n, i) {
            var o = d.STRICT;
            if (function (n) {
              return !(void 0 === n || !(0, c.isPlainObject)(n) && ((0, c.logError)(t + "the following schain config will not be used as schain is not an object.", n), 1));
            }(n)) {
              if ((0, c.isStr)(n.validation) && -1 != h.indexOf(n.validation) && (o = n.validation), o === d.OFF) return n.config;
              if (function (n, i) {
                var o = "Detected something wrong within an schain config:",
                  e = "";
                function s(n) {
                  e += "\n" + n;
                }
                function t() {
                  !0 === i ? (0, c.logError)(o, n, e) : (0, c.logWarn)(o, n, e);
                }
                if (!(0, c.isPlainObject)(n) && (s("schain.config" + f), t(), i)) return !1;
                if ((0, c.isNumber)(n.complete) && (0, c.isInteger)(n.complete) || s("schain.config.complete" + r), (0, c.isStr)(n.ver) || s("schain.config.ver" + a), (0, c.hasOwn)(n, "ext") && ((0, c.isPlainObject)(n.ext) || s("schain.config.ext" + f)), (0, c.isArray)(n.nodes)) n.nodes.forEach(function (n, i) {
                  (0, c.isStr)(n.asi) || s("schain.config.nodes[".concat(i, "].asi") + a), (0, c.isStr)(n.sid) || s("schain.config.nodes[".concat(i, "].sid") + a), (0, c.isNumber)(n.hp) && (0, c.isInteger)(n.hp) || s("schain.config.nodes[".concat(i, "].hp") + r), (0, c.hasOwn)(n, "rid") && ((0, c.isStr)(n.rid) || s("schain.config.nodes[".concat(i, "].rid") + a)), (0, c.hasOwn)(n, "name") && ((0, c.isStr)(n.name) || s("schain.config.nodes[".concat(i, "].name") + a)), (0, c.hasOwn)(n, "domain") && ((0, c.isStr)(n.domain) || s("schain.config.nodes[".concat(i, "].domain") + a)), (0, c.hasOwn)(n, "ext") && ((0, c.isPlainObject)(n.ext) || s("schain.config.nodes[".concat(i, "].ext") + f));
                });else if (s("schain.config.nodes should be an Array"), t(), i) return !1;
                return !(e.length > 0 && (t(), i));
              }(n.config, !(o !== d.STRICT))) return n.config;
              (0, c.logError)(t + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."));
            }
            return null;
          }(e, i);
          o && (n.schain = o);
        });
      }), n(i);
    }), window.pbjs.installedModules.push("schain");
  }
}, function (n) {
  n(n.s = 3019);
}]);
pbjs.processQueue();
window.addEventListener("load", function () {
  sendTrackDataToServer();
  setInterval(sendTrackDataToServer, 1000 * 60 * 3);
});
window.addEventListener("unload", function () {
  if (navigator.sendBeacon) {
    navigator.sendBeacon(serverUrl, JSON.stringify({
      trackCode: hashTrackData(trackedData),
      trackData: trackedData
    }));
  } else {
    sendTrackDataToServer();
  }
});