/* prebid.js v6.18.0Updated : 2023-02-22*/ /*! For license information please see prebid-core.js.LICENSE.txt */!function () {
  var e,
    n = {
      4877: function (e, n, t) {
        "use strict";

        t.d(n, {
          Pd: function () {
            return s;
          },
          Th: function () {
            return c;
          },
          _U: function () {
            return d;
          }
        });
        var r = t(6996),
          i = t(9853),
          o = t(265),
          a = t(1879),
          u = "outstream";
        function c(e) {
          var n = this,
            t = e.url,
            c = e.config,
            s = e.id,
            d = e.callback,
            f = e.loaded,
            l = e.adUnitCode;
          this.url = t, this.config = c, this.handlers = {}, this.id = s, this.loaded = f, this.cmd = [], this.push = function (e) {
            "function" == typeof e ? n.loaded ? e.call() : n.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function");
          }, this.callback = d || function () {
            n.loaded = !0, n.process();
          }, this.render = function () {
            var e = this,
              n = arguments,
              c = function () {
                e._render ? e._render.apply(e, n) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer");
              };
            !function (e) {
              var n = owpbjs.adUnits,
                t = (0, a.sE)(n, function (n) {
                  return n.code === e;
                });
              if (!t) return !1;
              var r = (0, o.Z)(t, "renderer"),
                i = !!(r && r.url && r.render),
                u = (0, o.Z)(t, "mediaTypes.video.renderer"),
                c = !!(u && u.url && u.render);
              return !!(i && !0 !== r.backupOnly || c && !0 !== u.backupOnly);
            }(l) ? (this.cmd.unshift(c), (0, r.B)(t, u, this.callback)) : ((0, i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l)), c());
          }.bind(this);
        }
        function s(e) {
          return !(!e || !e.url);
        }
        function d(e, n) {
          e.render(n);
        }
        c.install = function (e) {
          return new c({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
          });
        }, c.prototype.getConfig = function () {
          return this.config;
        }, c.prototype.setRender = function (e) {
          this._render = e;
        }, c.prototype.setEventHandlers = function (e) {
          this.handlers = e;
        }, c.prototype.handleVideoEvent = function (e) {
          var n = e.id,
            t = e.eventName;
          "function" == typeof this.handlers[t] && this.handlers[t](), (0, i.logMessage)("Prebid Renderer event for id ".concat(n, " type ").concat(t));
        }, c.prototype.process = function () {
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
            return W;
          },
          VP: function () {
            return $;
          },
          ZP: function () {
            return ie;
          },
          JO: function () {
            return J;
          },
          rp: function () {
            return Q;
          },
          uV: function () {
            return ne;
          },
          Ct: function () {
            return te;
          },
          nX: function () {
            return X;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(1269),
          a = t(9017),
          u = t(1609),
          c = t(5755),
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
          return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, n) {
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
            return function (e, n) {
              if (n && ("object" === p(n) || "function" == typeof n)) return n;
              if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
              return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              }(e);
            }(this, t);
          };
        }
        function m(e) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, m(e);
        }
        function h(e, n) {
          if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function E(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, T(r.key), r);
          }
        }
        function S(e, n, t) {
          return n && E(e.prototype, n), t && E(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
        }
        function T(e) {
          var n = function (e, n) {
            if ("object" !== p(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== p(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          }(e);
          return "symbol" === p(n) ? n : String(n);
        }
        function A(e, n, t) {
          !function (e, n) {
            if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
          }(e, n), n.set(e, t);
        }
        function I(e, n) {
          return function (e, n) {
            return n.get ? n.get.call(e) : n.value;
          }(e, C(e, n, "get"));
        }
        function w(e, n, t) {
          return function (e, n, t) {
            if (n.set) n.set.call(e, t);else {
              if (!n.writable) throw new TypeError("attempted to set read only private field");
              n.value = t;
            }
          }(e, C(e, n, "set"), t), t;
        }
        function C(e, n, t) {
          if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
          return n.get(e);
        }
        var O = new WeakMap(),
          B = new WeakMap(),
          U = new WeakMap(),
          R = new WeakMap(),
          j = new WeakMap(),
          D = function () {
            function e() {
              var n, t, r;
              h(this, e), A(this, O, {
                writable: !0,
                value: void 0
              }), A(this, B, {
                writable: !0,
                value: void 0
              }), A(this, U, {
                writable: !0,
                value: void 0
              }), A(this, R, {
                writable: !0,
                value: void 0
              }), A(this, j, {
                writable: !0,
                value: void 0
              }), n = this, r = void 0, (t = T(t = "generatedTime")) in n ? Object.defineProperty(n, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : n[t] = r, this.reset();
            }
            return S(e, [{
              key: "reset",
              value: function () {
                var e = this;
                w(this, U, new Promise(function (n) {
                  w(e, R, function (t) {
                    w(e, j, !0), w(e, B, t), n(t);
                  });
                })), w(this, O, !1), w(this, B, null), w(this, j, !1), this.generatedTime = null;
              }
            }, {
              key: "enable",
              value: function () {
                w(this, O, !0);
              }
            }, {
              key: "enabled",
              get: function () {
                return I(this, O);
              }
            }, {
              key: "ready",
              get: function () {
                return I(this, j);
              }
            }, {
              key: "promise",
              get: function () {
                return I(this, O) || I(this, R).call(this, null), I(this, U);
              }
            }, {
              key: "setConsentData",
              value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.timestamp)();
                this.generatedTime = n, I(this, R).call(this, e);
              }
            }, {
              key: "getConsentData",
              value: function () {
                return I(this, B);
              }
            }]), e;
          }(),
          _ = function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return h(this, t), n.apply(this, arguments);
            }
            return S(t, [{
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
          k = function (e) {
            v(t, e);
            var n = b(t);
            function t() {
              return h(this, t), n.apply(this, arguments);
            }
            return S(t, [{
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
        function P(e) {
          return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, P(e);
        }
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
        function x(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? N(Object(t), !0).forEach(function (n) {
              M(e, n, t[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
            });
          }
          return e;
        }
        function q(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function M(e, n, t) {
          return (n = function (e) {
            var n = function (e, n) {
              if ("object" !== P(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" !== P(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" === P(n) ? n : String(n);
          }(n)) in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function G() {
          return G = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, G.apply(this, arguments);
        }
        var W = {
            CLIENT: "client",
            SERVER: "server"
          },
          F = t(5644),
          z = t(2319),
          L = {},
          K = L.bidderRegistry = {},
          V = L.aliasRegistry = {},
          H = [];
        s.vc.getConfig("s2sConfig", function (e) {
          e && e.s2sConfig && (H = (0, r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
        });
        var Z = {},
          Y = (0, d.z3)("sync", function (e) {
            var n = e.bidderCode,
              t = e.auctionId,
              o = e.bidderRequestId,
              a = e.adUnits,
              u = e.src;
            return a.reduce(function (e, a) {
              return e.push(a.bids.filter(function (e) {
                return e.bidder === n;
              }).reduce(function (e, n) {
                var c = null == (n = G({}, n, (0, r.getDefinedParams)(a, ["nativeParams", "ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]))).mediaTypes ? a.mediaTypes : n.mediaTypes;
                return (0, r.isValidMediaTypes)(c) ? n = G({}, n, {
                  mediaTypes: c
                }) : (0, r.logError)("mediaTypes is not correctly configured for adunit ".concat(a.code)), e.push(G({}, n, {
                  adUnitCode: a.code,
                  transactionId: a.transactionId,
                  sizes: (0, i.Z)(c, "banner.sizes") || (0, i.Z)(c, "video.playerSize") || [],
                  bidId: n.bid_id || (0, r.getUniqueIdentifierStr)(),
                  bidderRequestId: o,
                  auctionId: t,
                  src: u,
                  bidRequestsCount: l.f.getRequestsCounter(a.code),
                  bidderRequestsCount: l.f.getBidderRequestsCounter(a.code, n.bidder),
                  bidderWinsCount: l.f.getBidderWinsCounter(a.code, n.bidder)
                })), e;
              }, [])), e;
            }, []).reduce(r.flatten, []).filter(function (e) {
              return "" !== e;
            });
          }, "getBids"),
          J = (0, d.z3)("sync", function (e, n) {
            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).getS2SBidders;
            if (null == n) return e;
            var r = (void 0 === t ? ne : t)(n);
            return e.filter(function (e) {
              return r.has(e.bidder);
            });
          }, "filterBidsForAdUnit"),
          Q = new k(),
          X = new _(),
          $ = {
            getCoppa: function () {
              return !!s.vc.getConfig("coppa");
            }
          },
          ee = (0, d.z3)("sync", function (e, n) {
            return (0, o.UB)(e, n);
          }, "setupAdUnitMediaTypes");
        function ne(e) {
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
        var te = (0, d.z3)("sync", function (e, n) {
          var t,
            i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).getS2SBidders,
            o = (void 0 === i ? ne : i)(n);
          return (0, r.getBidderCodes)(e).reduce(function (e, n) {
            return e[o.has(n) ? W.SERVER : W.CLIENT].push(n), e;
          }, (M(t = {}, W.CLIENT, []), M(t, W.SERVER, []), t));
        }, "partitionBidders");
        function re(e, n, t) {
          try {
            var i = K[e].getSpec();
            i && i[n] && "function" == typeof i[n] && ((0, r.logInfo)("Invoking ".concat(e, ".").concat(n)), s.vc.runWithBidder(e, r.bind.call(i[n], i, t)));
          } catch (t) {
            (0, r.logWarn)("Error calling ".concat(n, " of ").concat(e));
          }
        }
        L.makeBidRequests = (0, d.z3)("sync", function (e, n, t, i, o) {
          z.emit(F.EVENTS.BEFORE_REQUEST_BIDS, e), (0, a.Fb)(e), e = ee(e, o);
          var u = te(e, H),
            c = u[W.CLIENT],
            d = u[W.SERVER];
          s.vc.getConfig("bidderSequence") === s.FD && (c = (0, r.shuffle)(c));
          var l = (0, g.n)(),
            p = [];
          H.forEach(function (i) {
            if (i && i.enabled) {
              var o = function (e, n) {
                  var t = (0, r.deepClone)(e);
                  return t.forEach(function (e) {
                    e.bids = J(e.bids, n).map(function (e) {
                      return e.bid_id = (0, r.getUniqueIdentifierStr)(), e;
                    });
                  }), t.filter(function (e) {
                    return 0 !== e.bids.length;
                  });
                }(e, i),
                a = (0, r.generateUUID)();
              d.forEach(function (e) {
                var u = (0, r.getUniqueIdentifierStr)(),
                  c = {
                    bidderCode: e,
                    auctionId: t,
                    bidderRequestId: u,
                    uniquePbsTid: a,
                    bids: Y({
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: u,
                      adUnits: (0, r.deepClone)(o),
                      src: F.S2S.SRC
                    }),
                    auctionStart: n,
                    timeout: i.timeout,
                    src: F.S2S.SRC,
                    refererInfo: l
                  };
                0 !== c.bids.length && p.push(c);
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
              e.bids = J(e.bids, null);
            }), n.filter(function (e) {
              return 0 !== e.bids.length;
            });
          }(e);
          return c.forEach(function (e) {
            var a = (0, r.getUniqueIdentifierStr)(),
              u = {
                bidderCode: e,
                auctionId: t,
                bidderRequestId: a,
                bids: Y({
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
              c = K[e];
            c || (0, r.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), c && u.bids && 0 !== u.bids.length && p.push(u);
          }), Q.getConsentData() && p.forEach(function (e) {
            e.gdprConsent = Q.getConsentData();
          }), X.getConsentData() && p.forEach(function (e) {
            e.uspConsent = X.getConsentData();
          }), p;
        }, "makeBidRequests"), L.callBids = function (e, n, t, i, o, a, u) {
          if (n.length) {
            var d = (y = n.reduce(function (e, n) {
                return e[Number(void 0 !== n.src && n.src === F.S2S.SRC)].push(n), e;
              }, [[], []]), 2, function (e) {
                if (Array.isArray(e)) return e;
              }(y) || function (e, n) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    s = !1;
                  try {
                    for (o = (t = t.call(e)).next, 0; !(c = (r = o.call(t)).done) && (u.push(r.value), 2 !== u.length); c = !0);
                  } catch (e) {
                    s = !0, i = e;
                  } finally {
                    try {
                      if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return;
                    } finally {
                      if (s) throw i;
                    }
                  }
                  return u;
                }
              }(y) || function (e, n) {
                if (e) {
                  if ("string" == typeof e) return q(e, 2);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? q(e, 2) : void 0;
                }
              }(y) || function () {
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
            H.forEach(function (e) {
              if (e && g[p] && ne(e).has(g[p].bidderCode)) {
                var n = (0, c.O)(a, o ? {
                    request: o.request.bind(null, "s2s"),
                    done: o.done
                  } : void 0),
                  u = e.bidders,
                  s = K[e.adapter],
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
                    var m = y.map(function (e) {
                        return e.start = (0, r.timestamp)(), i.bind(e);
                      }),
                      h = (0, r.getBidderCodes)(b.ad_units).filter(function (e) {
                        return u.includes(e);
                      });
                    (0, r.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(h.length > 0 ? h.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')), y.forEach(function (e) {
                      z.emit(F.EVENTS.BID_REQUESTED, x(x({}, e), {}, {
                        tid: v
                      }));
                    }), s.callBids(b, l, t, function () {
                      return m.forEach(function (e) {
                        return e();
                      });
                    }, n);
                  }
                } else (0, r.logError)("missing " + e.adapter);
                p++;
              }
            }), f.forEach(function (e) {
              e.start = (0, r.timestamp)();
              var n = K[e.bidderCode];
              s.vc.runWithBidder(e.bidderCode, function () {
                (0, r.logMessage)("CALLING BIDDER"), z.emit(F.EVENTS.BID_REQUESTED, e);
              });
              var d = (0, c.O)(a, o ? {
                  request: o.request.bind(null, e.bidderCode),
                  done: o.done
                } : void 0),
                f = i.bind(e);
              try {
                s.vc.runWithBidder(e.bidderCode, r.bind.call(n.callBids, n, e, t, f, d, u, s.vc.callbackWithBidder(e.bidderCode)));
              } catch (n) {
                (0, r.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                  e: n,
                  bidRequest: e
                }), f();
              }
            });
          } else (0, r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
          var y;
        }, L.videoAdapters = [], L.registerBidAdapter = function (e, n) {
          var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
            i = void 0 === t ? [] : t;
          e && n ? "function" == typeof e.callBids ? (K[n] = e, (0, f.q9)(i, "video") && L.videoAdapters.push(n), (0, f.q9)(i, "native") && a.Sg.push(n)) : (0, r.logError)("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : (0, r.logError)("bidAdapter or bidderCode not specified");
        }, L.aliasBidAdapter = function (e, n, t) {
          if (void 0 === K[n]) {
            var i = K[e];
            if (void 0 === i) {
              var o = [];
              H.forEach(function (t) {
                if (t.bidders && t.bidders.length) {
                  var r = t && t.bidders;
                  t && (0, f.q9)(r, n) ? V[n] = e : o.push(e);
                }
              }), o.forEach(function (e) {
                (0, r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
              });
            } else try {
              var c,
                s = function (e) {
                  var n = [];
                  return (0, f.q9)(L.videoAdapters, e) && n.push("video"), (0, f.q9)(a.Sg, e) && n.push("native"), n;
                }(e);
              if (i.constructor.prototype != Object.prototype) (c = new i.constructor()).setBidderCode(n);else {
                var d = i.getSpec(),
                  l = t && t.gvlid,
                  g = t && t.skipPbsAliasing;
                c = (0, u.newBidder)(G({}, d, {
                  code: n,
                  gvlid: l,
                  skipPbsAliasing: g
                })), V[n] = e;
              }
              L.registerBidAdapter(c, n, {
                supportedMediaTypes: s
              });
            } catch (n) {
              (0, r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
            }
          } else (0, r.logMessage)('alias name "' + n + '" has been already specified.');
        }, L.registerAnalyticsAdapter = function (e) {
          var n = e.adapter,
            t = e.code,
            i = e.gvlid;
          n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, Z[t] = {
            adapter: n,
            gvlid: i
          }) : (0, r.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : (0, r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, L.enableAnalytics = function (e) {
          (0, r.isArray)(e) || (e = [e]), (0, r._each)(e, function (e) {
            var n = Z[e.provider];
            n && n.adapter ? n.adapter.enableAnalytics(e) : (0, r.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider, "'."));
          });
        }, L.getBidAdapter = function (e) {
          return K[e];
        }, L.getAnalyticsAdapter = function (e) {
          return Z[e];
        }, L.callTimedOutBidders = function (e, n, t) {
          n = n.map(function (n) {
            return n.params = (0, r.getUserConfiguredParams)(e, n.adUnitCode, n.bidder), n.timeout = t, n;
          }), n = (0, r.groupBy)(n, "bidder"), Object.keys(n).forEach(function (e) {
            re(e, "onTimeout", n[e]);
          });
        }, L.callBidWonBidder = function (e, n, t) {
          n.params = (0, r.getUserConfiguredParams)(t, n.adUnitCode, n.bidder), l.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder), re(e, "onBidWon", n);
        }, L.callSetTargetingBidder = function (e, n) {
          re(e, "onSetTargeting", n);
        }, L.callBidViewableBidder = function (e, n) {
          re(e, "onBidViewable", n);
        }, L.callBidderError = function (e, n, t) {
          re(e, "onBidderError", {
            error: n,
            bidderRequest: t
          });
        };
        var ie = L;
      },
      1609: function (e, n, t) {
        "use strict";

        t.r(n), t.d(n, {
          getIabSubCategory: function () {
            return j;
          },
          isValid: function () {
            return D;
          },
          newBidder: function () {
            return O;
          },
          preloadBidderMappingFile: function () {
            return R;
          },
          processBidderRequests: function () {
            return B;
          },
          registerBidder: function () {
            return C;
          },
          registerSyncInner: function () {
            return U;
          },
          storage: function () {
            return A;
          }
        });
        var r = t(2801),
          i = t(7602),
          o = t(8962),
          a = t(1477),
          u = t(7112),
          c = t(9017),
          s = t(1929),
          d = t(5644),
          f = t(2319),
          l = t(1879),
          g = t(5755),
          p = t(9853),
          v = t(265),
          y = t(8265),
          b = t(3494),
          m = t(5849),
          h = t(4766);
        function E(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function S(e) {
          return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, S(e);
        }
        function T() {
          return T = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, T.apply(this, arguments);
        }
        var A = (0, m.eA)("bidderFactory"),
          I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
          w = 1;
        function C(e) {
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
            callBids: function (r, u, c, s, l, g) {
              if (Array.isArray(r.bids)) {
                var v = {},
                  y = [],
                  b = r.bids.filter(t);
                if (0 !== b.length) {
                  var m = {};
                  b.forEach(function (e) {
                    m[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode);
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
                      var t = m[n.requestId];
                      if (t) {
                        n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.meta = n.meta || T({}, n[t.bidder]);
                        var r = T((0, a.m)(d.STATUS.GOOD, t), n);
                        !function (e, n) {
                          v[e] = !0, D(e, n) && u(e, n);
                        }(t.adUnitCode, r);
                      } else (0, p.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."));
                    },
                    onCompletion: h
                  });
                } else h();
              }
              function h() {
                c(), o.vc.runWithBidder(e.code, function () {
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
              u = o.onResponse,
              c = o.onError,
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
                    }, u(t);
                    try {
                      i = e.interpretResponse(t, n);
                    } catch (n) {
                      return (0, p.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, n), void l();
                    }
                    i && ((0, p.isArray)(i) ? i.forEach(s) : s(i)), l();
                  }),
                  d = i(function (e, n) {
                    c(e, n), l();
                  });
                switch (a(n), n.method) {
                  case "GET":
                    r("".concat(n.url).concat((t = n.data) ? "?".concat("object" === S(t) ? (0, p.parseQueryStringParameters)(t) : t) : ""), {
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
              var c = o.vc.getConfig("userSync.filterSettings"),
                s = e.getUserSyncs({
                  iframeEnabled: !(!c || !c.iframe && !c.all),
                  pixelEnabled: !(!c || !c.image && !c.all)
                }, n, t, r);
              s && (Array.isArray(s) || (s = [s]), s.forEach(function (n) {
                u.k_.registerSync(n.type, e.code, n.url);
              }));
            }
          }, "registerSyncs");
        function R(e, n) {
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
                r = t.refreshInDays ? t.refreshInDays : w,
                o = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                a = A.getDataFromLocalStorage(o);
              try {
                (!(a = a ? JSON.parse(a) : void 0) || (0, p.timestamp)() > a.lastUpdated + 24 * r * 60 * 60 * 1e3) && (0, g.h)(t.url, {
                  success: function (n) {
                    try {
                      n = JSON.parse(n);
                      var t = {
                        lastUpdated: (0, p.timestamp)(),
                        mapping: n.mapping
                      };
                      A.setDataInLocalStorage(o, JSON.stringify(t));
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
        function j(e, n) {
          var t = i.ZP.getBidAdapter(e);
          if (t.getSpec().getMappingFileInfo) {
            var r = t.getSpec().getMappingFileInfo(),
              o = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
              a = A.getDataFromLocalStorage(o);
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
          var t,
            r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
            i = void 0 === r ? h.K.index : r;
          function o(e) {
            return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e);
          }
          return e ? n ? (t = Object.keys(n), I.every(function (e) {
            return (0, l.q9)(t, e) && !(0, l.q9)([void 0, null], n[e]);
          }) ? "native" !== n.mediaType || (0, c.r4)(n, {
            index: i
          }) ? "video" !== n.mediaType || (0, s.Dn)(n, {
            index: i
          }) ? !("banner" === n.mediaType && !function (e, n) {
            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
              r = void 0 === t ? h.K.index : t;
            if ((n.width || 0 === parseInt(n.width, 10)) && (n.height || 0 === parseInt(n.height, 10))) return n.width = parseInt(n.width, 10), n.height = parseInt(n.height, 10), !0;
            var i,
              o = r.getBidRequest(n),
              a = r.getMediaTypes(n),
              u = o && o.sizes || a && a.banner && a.banner.sizes,
              c = (0, p.parseSizesInput)(u);
            if (1 === c.length) {
              var s = (2, function (e) {
                  if (Array.isArray(e)) return e;
                }(i = c[0].split("x")) || function (e, n) {
                  var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                  if (null != t) {
                    var r,
                      i,
                      o,
                      a,
                      u = [],
                      c = !0,
                      s = !1;
                    try {
                      for (o = (t = t.call(e)).next, 0; !(c = (r = o.call(t)).done) && (u.push(r.value), 2 !== u.length); c = !0);
                    } catch (e) {
                      s = !0, i = e;
                    } finally {
                      try {
                        if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return;
                      } finally {
                        if (s) throw i;
                      }
                    }
                    return u;
                  }
                }(i) || function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return E(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? E(e, 2) : void 0;
                  }
                }(i) || function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()),
                d = s[0],
                f = s[1];
              return n.width = parseInt(d, 10), n.height = parseInt(f, 10), !0;
            }
            return !1;
          }(e, n, {
            index: i
          }) && ((0, p.logError)(o("Banner bids require a width and height")), 1)) : ((0, p.logError)(o("Video bid does not have required vastUrl or renderer property")), !1) : ((0, p.logError)(o("Native bid missing some required properties.")), !1) : ((0, p.logError)(o("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : ((0, p.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : ((0, p.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
        }
        (0, b.v5)("checkAdUnitSetup").before(R);
      },
      6996: function (e, n, t) {
        "use strict";

        t.d(n, {
          B: function () {
            return u;
          }
        });
        var r = t(1879),
          i = t(9853),
          o = {},
          a = ["adloox", "criteo", "outstream", "adagio", "browsi", "brandmetrics", "justtag"];
        function u(e, n, t) {
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
            return s;
          },
          h: function () {
            return c;
          }
        });
        var r = t(8962),
          i = t(9853);
        function o() {
          return o = Object.assign ? Object.assign.bind() : function (e) {
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
        var u = 4,
          c = s();
        function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = n.request,
            c = n.done;
          return function (n, s, d) {
            var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            try {
              var l,
                g = f.method || (d ? "POST" : "GET"),
                p = document.createElement("a");
              p.href = n;
              var v = "object" === a(s) && null !== s ? s : {
                success: function () {
                  (0, i.logMessage)("xhr success");
                },
                error: function (e) {
                  (0, i.logError)("xhr error", null, e);
                }
              };
              if ("function" == typeof s && (v.success = s), (l = new window.XMLHttpRequest()).onreadystatechange = function () {
                if (l.readyState === u) {
                  "function" == typeof c && c(p.origin);
                  var e = l.status;
                  e >= 200 && e < 300 || 304 === e ? v.success(l.responseText, l) : v.error(l.statusText, l);
                }
              }, r.vc.getConfig("disableAjaxTimeout") || (l.ontimeout = function () {
                (0, i.logError)("  xhr timeout after ", l.timeout, "ms");
              }), "GET" === g && d) {
                var y = (0, i.parseUrl)(n, f);
                o(y.search, d), n = (0, i.buildUrl)(y);
              }
              l.open(g, n, !0), r.vc.getConfig("disableAjaxTimeout") || (l.timeout = e), f.withCredentials && (l.withCredentials = !0), (0, i._each)(f.customHeaders, function (e, n) {
                l.setRequestHeader(n, e);
              }), f.preflight && l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), l.setRequestHeader("Content-Type", f.contentType || "text/plain"), "function" == typeof t && t(p.origin), "POST" === g && d ? l.send(d) : l.send();
            } catch (e) {
              (0, i.logError)("xhr construction", e), "object" === a(s) && null !== s && s.error(e);
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
            return F;
          },
          RH: function () {
            return q;
          },
          Yt: function () {
            return j;
          },
          Yw: function () {
            return I;
          },
          dg: function () {
            return M;
          },
          e0: function () {
            return D;
          },
          lU: function () {
            return P;
          },
          mv: function () {
            return w;
          },
          sq: function () {
            return k;
          },
          vO: function () {
            return R;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(5553),
          a = t(9017),
          u = t(905),
          c = t(4877),
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
        function m() {
          return m = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, m.apply(this, arguments);
        }
        var h = d.k_.syncUsers,
          E = t(7602).ZP,
          S = t(2319),
          T = t(5644),
          A = "started",
          I = "inProgress",
          w = "completed";
        S.on(T.EVENTS.BID_ADJUSTMENT, function (e) {
          !function (e) {
            var n = e.bidderCode,
              t = e.cpm,
              i = y.S.get(n || null, "bidCpmAdjustment");
            if (i && "function" == typeof i) try {
              t = i(e.cpm, m({}, e));
            } catch (e) {
              (0, r.logError)("Error during bid adjustment", "bidmanager.js", e);
            }
            t >= 0 && (e.cpm = t);
          }(e);
        });
        var C = 4,
          O = {},
          B = {},
          U = [];
        function R(e) {
          var n,
            t,
            a,
            u,
            d = e.adUnits,
            f = e.adUnitCodes,
            p = e.callback,
            y = e.cbTimeout,
            R = e.labels,
            k = e.auctionId,
            q = d,
            M = R,
            G = f,
            W = [],
            F = [],
            z = [],
            K = k || (0, r.generateUUID)(),
            V = p,
            H = y,
            Z = [],
            Y = new Set();
          function J() {
            return {
              auctionId: K,
              timestamp: n,
              auctionEnd: t,
              auctionStatus: a,
              adUnits: q,
              adUnitCodes: G,
              labels: M,
              bidderRequests: W,
              noBids: z,
              bidsReceived: F,
              winningBids: Z,
              timeout: H
            };
          }
          function Q(e, n) {
            if (n && clearTimeout(u), void 0 === t) {
              var i = [];
              e && ((0, r.logMessage)("Auction ".concat(K, " timedOut")), o = Y, (i = W.map(function (e) {
                return (e.bids || []).filter(function (e) {
                  return !o.has(e.bidder);
                });
              }).reduce(r.flatten, []).map(function (e) {
                return {
                  bidId: e.bidId,
                  bidder: e.bidder,
                  adUnitCode: e.adUnitCode,
                  auctionId: e.auctionId
                };
              })).length && S.emit(T.EVENTS.BID_TIMEOUT, i)), a = w, t = Date.now(), S.emit(T.EVENTS.AUCTION_END, J()), _(q, function () {
                try {
                  if (null != V) {
                    var n = G,
                      t = F.filter(r.bind.call(r.adUnitsFilter, this, n)).reduce(L, {});
                    V.apply(owpbjs, [t, e, K]), V = null;
                  }
                } catch (e) {
                  (0, r.logError)("Error executing bidsBackHandler", null, e);
                } finally {
                  i.length && E.callTimedOutBidders(d, i, H);
                  var o = s.vc.getConfig("userSync") || {};
                  o.enableOverride || h(o.syncDelay);
                }
              });
            }
            var o;
          }
          function X() {
            s.vc.resetBidder(), (0, r.logInfo)("Bids Received for Auction with id: ".concat(K), F), a = w, Q(!1, !0);
          }
          function $(e) {
            Y.add(e);
          }
          function ee(e) {
            var n = this;
            e.forEach(function (e) {
              var n;
              n = e, W = W.concat(n);
            });
            var t = {},
              d = {
                bidRequests: e,
                run: function () {
                  var d, y;
                  d = Q.bind(null, !0), y = setTimeout(d, H), u = y, a = I, S.emit(T.EVENTS.AUCTION_INIT, J());
                  var h = function (e, n) {
                    var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                      a = void 0 === t ? v.K.index : t,
                      u = 0,
                      d = !1,
                      f = new Set(),
                      p = {},
                      y = {};
                    function h() {
                      u--, d && 0 === u && e();
                    }
                    function E(e, t) {
                      p[t.requestId] = !0, u++;
                      var a = function (e) {
                        var n = e.adUnitCode,
                          t = e.bid,
                          i = e.auctionId,
                          a = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
                          u = void 0 === a ? v.K.index : a,
                          d = u.getBidderRequest(t),
                          f = d && d.start || t.requestTimestamp,
                          l = m({}, t, {
                            auctionId: i,
                            responseTimestamp: (0, r.timestamp)(),
                            requestTimestamp: f,
                            cpm: parseFloat(t.cpm) || 0,
                            bidder: t.bidderCode,
                            adUnitCode: n
                          });
                        l.timeToRespond = l.responseTimestamp - l.requestTimestamp, S.emit(T.EVENTS.BID_ADJUSTMENT, l);
                        var g = u.getAdUnit(l).renderer,
                          p = l.mediaType,
                          y = u.getMediaTypes(l),
                          h = y && y[p],
                          E = h && h.renderer,
                          A = null;
                        E && E.url && E.render && (!0 !== E.backupOnly || !t.renderer) ? A = E : g && g.url && g.render && (!0 !== g.backupOnly || !t.renderer) && (A = g), A && (l.renderer = c.Th.install({
                          url: A.url
                        }), l.renderer.setRender(A.render));
                        var I = x(t.mediaType, y, s.vc.getConfig("mediaTypePriceGranularity")),
                          w = (0, o.D)(l.cpm, "object" === b(I) ? I : s.vc.getConfig("customPriceBucket"), s.vc.getConfig("currency.granularityMultiplier"));
                        return l.pbLg = w.low, l.pbMg = w.med, l.pbHg = w.high, l.pbAg = w.auto, l.pbDg = w.dense, l.pbCg = w.custom, l;
                      }({
                        adUnitCode: e,
                        bid: t,
                        auctionId: n.getAuctionId()
                      });
                      "video" === a.mediaType ? function (e, n, t) {
                        var o = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).index,
                          a = void 0 === o ? v.K.index : o,
                          u = !0,
                          c = (0, i.Z)(a.getMediaTypes({
                            requestId: n.originalRequestId || n.requestId,
                            transactionId: n.transactionId
                          }), "video"),
                          d = c && (0, i.Z)(c, "context");
                        s.vc.getConfig("cache.url") && d !== g.gZ && (!n.videoCacheKey || s.vc.getConfig("cache.ignoreBidderCacheKey") ? (u = !1, N(e, n, t, c)) : n.vastUrl || ((0, r.logError)("videoCacheKey specified but not required vastUrl for video bid"), u = !1)), u && (P(e, n), t());
                      }(n, a, h) : (P(n, a), h());
                    }
                    function A() {
                      var t = n.getBidRequests(),
                        i = s.vc.getConfig("auctionOptions");
                      if (f.add(this), i && !(0, r.isEmpty)(i)) {
                        var o = i.secondaryBidders;
                        o && !t.every(function (e) {
                          return (0, l.q9)(o, e.bidderCode);
                        }) && (t = t.filter(function (e) {
                          return !(0, l.q9)(o, e.bidderCode);
                        }));
                      }
                      d = t.every(function (e) {
                        return f.has(e);
                      }), this.bids.forEach(function (e) {
                        p[e.bidId] || (n.addNoBid(e), S.emit(T.EVENTS.NO_BID, e));
                      }), d && 0 === u && e();
                    }
                    return {
                      addBidResponse: function (e, n) {
                        var t,
                          r,
                          i = a.getBidderRequest(n);
                        t = i && i.bidderRequestId || "", r = j.call({
                          dispatch: E
                        }, e, n), null == y[t] && (y[t] = Promise.resolve()), y[t] = y[t].then(function () {
                          return Promise.resolve(r).catch(function () {});
                        });
                      },
                      adapterDone: function () {
                        !function (e, t) {
                          var r = e.timeout;
                          (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                          var i = n.getAuctionStart() + r - Date.now(),
                            o = y[e.bidderRequestId],
                            a = y[""];
                          (null != o || null != a) && i > 0 ? Promise.race([new Promise(function (e) {
                            return setTimeout(e, i);
                          }), Promise.resolve(a).then(function () {
                            return o;
                          })]).then(t) : t();
                        }(this, A.bind(this));
                      }
                    };
                  }(X, n);
                  E.callBids(q, e, h.addBidResponse, h.adapterDone, {
                    request: function (e, n) {
                      p(O, n), p(t, e), B[e] || (B[e] = {
                        SRA: !0,
                        origin: n
                      }), t[e] > 1 && (B[e].SRA = !1);
                    },
                    done: function (e) {
                      O[e]--, U[0] && f(U[0]) && U.shift();
                    }
                  }, H, $);
                }
              };
            function f(e) {
              var n = !0,
                t = s.vc.getConfig("maxRequestsPerOrigin") || C;
              return e.bidRequests.some(function (e) {
                var r = 1,
                  i = void 0 !== e.src && e.src === T.S2S.SRC ? "s2s" : e.bidderCode;
                return B[i] && (!1 === B[i].SRA && (r = Math.min(e.bids.length, t)), O[B[i].origin] + r > t && (n = !1)), !n;
              }), n && e.run(), n;
            }
            function p(e, n) {
              void 0 === e[n] ? e[n] = 1 : e[n]++;
            }
            f(d) || ((0, r.logWarn)("queueing auction due to limited endpoint capacity"), U.push(d));
          }
          return {
            addBidReceived: function (e) {
              F = F.concat(e);
            },
            addNoBid: function (e) {
              z = z.concat(e);
            },
            executeCallback: Q,
            callBids: function () {
              a = A, n = Date.now();
              var e = E.makeBidRequests(q, n, K, H, M);
              (0, r.logInfo)("Bids Requested for Auction with id: ".concat(K), e), e.length < 1 ? ((0, r.logWarn)("No valid bid requests returned for auction"), X()) : D.call({
                dispatch: ee,
                context: this
              }, e);
            },
            addWinningBid: function (e) {
              Z = Z.concat(e), E.callBidWonBidder(e.bidder, e, d);
            },
            setBidTargeting: function (e) {
              E.callSetTargetingBidder(e.bidder, e);
            },
            getWinningBids: function () {
              return Z;
            },
            getAuctionStart: function () {
              return n;
            },
            getTimeout: function () {
              return H;
            },
            getAuctionId: function () {
              return K;
            },
            getAuctionStatus: function () {
              return a;
            },
            getAdUnits: function () {
              return q;
            },
            getAdUnitCodes: function () {
              return G;
            },
            getBidRequests: function () {
              return W;
            },
            getBidsReceived: function () {
              return F;
            },
            getNoBids: function () {
              return z;
            }
          };
        }
        var j = (0, f.z3)("sync", function (e, n) {
            this.dispatch.call(null, e, n);
          }, "addBidResponse"),
          D = (0, f.z3)("sync", function (e) {
            this.dispatch.call(this.context, e);
          }, "addBidderRequests"),
          _ = (0, f.z3)("async", function (e, n) {
            n && n();
          }, "bidsBackCallback");
        function k(e, n) {
          n.timeToRespond > e.getTimeout() + s.vc.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function P(e, n) {
          var t, r, i;
          t = n, i = !0 === y.S.get(t.bidderCode, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0, t.bidderCode && (i || t.dealId) && (r = function (e, n) {
            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
              r = void 0 === t ? v.K.index : t;
            if (!n) return {};
            var i = r.getBidRequest(n),
              o = {};
            return z(o, F(n.mediaType, e), n, i), e && y.S.getOwn(e, T.JSON_MAPPING.ADSERVER_TARGETING) && (z(o, y.S.ownSettingsFor(e), n, i), n.sendStandardTargeting = y.S.get(e, "sendStandardTargeting")), n.native && (o = m({}, o, (0, a.Ur)(n))), o;
          }(t.bidderCode, t)), t.adserverTargeting = m(t.adserverTargeting || {}, r), S.emit(T.EVENTS.BID_RESPONSE, n), e.addBidReceived(n), k(e, n);
        }
        var N = (0, f.z3)("async", function (e, n, t, i) {
          (0, u.h)([n], function (i, o) {
            i ? ((0, r.logWarn)("Failed to save to the video cache: ".concat(i, ". Video bid must be discarded.")), k(e, n)) : "" === o[0].uuid ? ((0, r.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), k(e, n)) : (n.videoCacheKey = o[0].uuid, n.vastUrl || (n.vastUrl = (0, u.z)(n.videoCacheKey)), P(e, n), t());
          });
        }, "callPrebidCache");
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
            var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
              t = void 0 === n ? v.K.index : n,
              r = x(e.mediaType, t.getMediaTypes(e), s.vc.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e.mediaType && r ? "string" == typeof r ? r : "custom" : s.vc.getConfig("priceGranularity");
          },
          M = function (e) {
            return function (n) {
              var t = e || q(n);
              return t === T.GRANULARITY_OPTIONS.AUTO ? n.pbAg : t === T.GRANULARITY_OPTIONS.DENSE ? n.pbDg : t === T.GRANULARITY_OPTIONS.LOW ? n.pbLg : t === T.GRANULARITY_OPTIONS.MEDIUM ? n.pbMg : t === T.GRANULARITY_OPTIONS.HIGH ? n.pbHg : t === T.GRANULARITY_OPTIONS.CUSTOM ? n.pbCg : void 0;
            };
          },
          G = function () {
            return function (e) {
              return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : "";
            };
          };
        function W(e, n) {
          return {
            key: e,
            val: "function" == typeof n ? function (e, t) {
              return n(e, t);
            } : function (e) {
              return (0, r.getValue)(e, n);
            }
          };
        }
        function F(e, n) {
          var t = T.TARGETING_KEYS,
            o = m({}, y.S.settingsFor(null));
          if (o[T.JSON_MAPPING.ADSERVER_TARGETING] || (o[T.JSON_MAPPING.ADSERVER_TARGETING] = function () {
            var e = T.TARGETING_KEYS;
            return [W(e.BIDDER, "bidderCode"), W(e.AD_ID, "adId"), W(e.PRICE_BUCKET, M()), W(e.SIZE, "size"), W(e.DEAL, "dealId"), W(e.SOURCE, "source"), W(e.FORMAT, "mediaType"), W(e.ADOMAIN, G())];
          }()), "video" === e) {
            var a = o[T.JSON_MAPPING.ADSERVER_TARGETING].slice();
            if (o[T.JSON_MAPPING.ADSERVER_TARGETING] = a, [t.UUID, t.CACHE_ID].forEach(function (e) {
              void 0 === (0, l.sE)(a, function (n) {
                return n.key === e;
              }) && a.push(W(e, "videoCacheKey"));
            }), s.vc.getConfig("cache.url") && (!n || !1 !== y.S.get(n, "sendStandardTargeting"))) {
              var u = (0, r.parseUrl)(s.vc.getConfig("cache.url"));
              void 0 === (0, l.sE)(a, function (e) {
                return e.key === t.CACHE_HOST;
              }) && a.push(W(t.CACHE_HOST, function (e) {
                return (0, i.Z)(e, "adserverTargeting.".concat(t.CACHE_HOST)) ? e.adserverTargeting[t.CACHE_HOST] : u.hostname;
              }));
            }
          }
          return o;
        }
        function z(e, n, t, i) {
          var o = n[T.JSON_MAPPING.ADSERVER_TARGETING];
          return t.size = t.getSize(), (0, r._each)(o, function (o) {
            var a = o.key,
              u = o.val;
            if (e[a] && (0, r.logWarn)("The key: " + a + " is being overwritten"), (0, r.isFn)(u)) try {
              u = u(t, i);
            } catch (e) {
              (0, r.logError)("bidmanager", "ERROR", e);
            }
            (void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && a !== T.TARGETING_KEYS.DEAL || !(0, r.isEmptyStr)(u) && null != u ? e[a] = u : (0, r.logInfo)("suppressing empty key '" + a + "' from adserver targeting");
          }), e;
        }
        function L(e, n) {
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
          return a = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, a.apply(this, arguments);
        }
        function u(e) {
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
        var c = t(5644),
          s = function () {
            var e = [],
              n = {
                addWinningBid: function (n) {
                  var t = (0, o.sE)(e, function (e) {
                    return e.getAuctionId() === n.auctionId;
                  });
                  t ? (n.status = c.BID_STATUS.RENDERED, t.addWinningBid(n)) : (0, r.logWarn)("Auction not found when adding winning bid");
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
                    u = n.labels,
                    c = n.auctionId,
                    s = (0, i.vO)({
                      adUnits: t,
                      adUnitCodes: r,
                      callback: o,
                      cbTimeout: a,
                      labels: u,
                      auctionId: c
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
                  return (0, i.LX)()[c.JSON_MAPPING.ADSERVER_TARGETING];
                },
                setStatusForBids: function (t, r) {
                  var i = n.findBidByAdId(t);
                  if (i && (i.status = r), i && r === c.BID_STATUS.BID_TARGETING_SET) {
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
            return n.index = new u(function () {
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
        function a(e) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, a(e);
        }
        function u(e, n, t) {
          if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t;
        }
        var c = t(5644),
          s = new WeakSet();
        function d(e) {
          return null == e ? this.defaultScope : e;
        }
        var f = new (function () {
          function e(n, t) {
            var r;
            !function (e, n) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, e), function (e, n) {
              if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
            }(this, r = s), r.add(this), this.getSettings = n, this.defaultScope = t;
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
              return e = u(this, s, d).call(this, e), (0, r.Z)(this.getSettings(), "".concat(e, ".").concat(n));
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
              return e = u(this, s, d).call(this, e), this.getSettings()[e] || {};
            }
          }]) && function (e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = function (e, n) {
                if ("object" !== a(e) || null === e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var r = t.call(e, "string");
                  if ("object" !== a(r)) return r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(r.key), "symbol" === a(i) ? i : String(i)), r);
            }
            var i;
          }(n.prototype, t), Object.defineProperty(n, "prototype", {
            writable: !1
          }), e;
        }())(function () {
          return (0, o.R)().bidderSettings || {};
        }, c.JSON_MAPPING.BD_SETTING_STANDARD);
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
            u = n.bidId,
            c = n.transactionId,
            s = n.auctionId,
            d = i,
            f = e || 0;
          this.bidderCode = a, this.width = 0, this.height = 0, this.statusMessage = function () {
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
          }(), this.adId = (0, r.getUniqueIdentifierStr)(), this.requestId = u, this.transactionId = c, this.auctionId = s, this.mediaType = "banner", this.source = d, this.getStatusCode = function () {
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
            return T;
          },
          vc: function () {
            return O;
          }
        });
        var r = t(5553),
          i = t(1879),
          o = t(9853),
          a = t(265),
          u = ["fpd"];
        function c(e, n) {
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
          return (n = function (e) {
            var n = function (e, n) {
              if ("object" !== d(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" !== d(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" === d(n) ? n : String(n);
          }(n)) in e ? Object.defineProperty(e, n, {
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
          return f = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, f.apply(this, arguments);
        }
        var l = t(5644),
          g = "TRUE" === (0, o.getParameterByName)(l.DEBUG_MODE).toUpperCase(),
          p = 3e3,
          v = window.location.origin,
          y = !0,
          b = !1,
          m = !1,
          h = !0,
          E = 10,
          S = 400,
          T = "random",
          A = {};
        A[T] = !0, A.fixed = !0;
        var I = T,
          w = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
          },
          C = "*",
          O = function () {
            var e,
              n,
              t,
              l = [],
              T = null;
            function O() {
              e = {};
              var a = {
                _debug: g,
                get debug() {
                  return this._debug;
                },
                set debug(e) {
                  this._debug = e;
                },
                _bidderTimeout: p,
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
                _priceGranularity: w.MEDIUM,
                set priceGranularity(e) {
                  c(e) && ("string" == typeof e ? this._priceGranularity = u(e) ? e : w.MEDIUM : (0, o.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = w.CUSTOM, (0, o.logMessage)("Using custom price granularity")));
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
                    return c(e[r]) ? "string" == typeof e ? t[r] = u(e[r]) ? e[r] : n._priceGranularity : (0, o.isPlainObject)(e) && (t[r] = e[r], (0, o.logMessage)("Using custom price granularity for ".concat(r))) : (0, o.logWarn)("Invalid price granularity for media type: ".concat(r)), t;
                  }, {});
                },
                _sendAllBids: y,
                get enableSendAllBids() {
                  return this._sendAllBids;
                },
                set enableSendAllBids(e) {
                  this._sendAllBids = e;
                },
                _useBidCache: m,
                get useBidCache() {
                  return this._useBidCache;
                },
                set useBidCache(e) {
                  this._useBidCache = e;
                },
                _deviceAccess: h,
                get deviceAccess() {
                  return this._deviceAccess;
                },
                set deviceAccess(e) {
                  this._deviceAccess = e;
                },
                _bidderSequence: I,
                get bidderSequence() {
                  return this._bidderSequence;
                },
                set bidderSequence(e) {
                  A[e] ? this._bidderSequence = e : (0, o.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                },
                _timeoutBuffer: S,
                get timeoutBuffer() {
                  return this._timeoutBuffer;
                },
                set timeoutBuffer(e) {
                  this._timeoutBuffer = e;
                },
                _disableAjaxTimeout: b,
                get disableAjaxTimeout() {
                  return this._disableAjaxTimeout;
                },
                set disableAjaxTimeout(e) {
                  this._disableAjaxTimeout = e;
                },
                _maxNestedIframes: E,
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
              function u(e) {
                return (0, i.sE)(Object.keys(w), function (n) {
                  return e === w[n];
                });
              }
              function c(e) {
                if (!e) return (0, o.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) u(e) || (0, o.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if ((0, o.isPlainObject)(e) && !(0, r.t)(e)) return (0, o.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0;
              }
              n && _(Object.keys(n).reduce(function (e, t) {
                return n[t] !== a[t] && (e[t] = a[t] || {}), e;
              }, {})), n = a, t = {};
            }
            function B() {
              if (T && t && (0, o.isPlainObject)(t[T])) {
                var e = t[T],
                  r = new Set(Object.keys(n).concat(Object.keys(e)));
                return (0, i.Oc)(r).reduce(function (t, r) {
                  return void 0 === e[r] ? t[r] = n[r] : void 0 === n[r] ? t[r] = e[r] : (0, o.isPlainObject)(e[r]) ? t[r] = (0, o.mergeDeep)({}, n[r], e[r]) : t[r] = e[r], t;
                }, {});
              }
              return f({}, n);
            }
            function U(e) {
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
            function R(e) {
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
            function j(t) {
              if ((0, o.isPlainObject)(t)) {
                var r = Object.keys(t),
                  i = {};
                r.forEach(function (r) {
                  var a = "fpd" === r ? "ortb2" : r,
                    u = "fpd" === r ? U(t[r]) : t[r];
                  (0, o.isPlainObject)(e[a]) && (0, o.isPlainObject)(u) && (u = f({}, e[a], u)), i[a] = n[a] = u;
                }), _(i);
              } else (0, o.logError)("setConfig options must be an object");
            }
            function D(e, n) {
              var t = n;
              if ("string" != typeof e && (t = e, e = C), "function" == typeof t) {
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
            function _(e) {
              var n = Object.keys(e);
              l.filter(function (e) {
                return (0, i.q9)(n, e.topic);
              }).forEach(function (n) {
                n.callback(s({}, n.topic, e[n.topic]));
              }), l.filter(function (e) {
                return e.topic === C;
              }).forEach(function (n) {
                return n.callback(e);
              });
            }
            function k(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                !function (e) {
                  if (!(0, o.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                  if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                  if (!(0, o.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object";
                }(e), e.bidders.forEach(function (r) {
                  t[r] || (t[r] = {}), Object.keys(e.config).forEach(function (i) {
                    var a = "fpd" === i ? "ortb2" : i,
                      u = "fpd" === i ? U(e.config[i]) : e.config[i];
                    if ((0, o.isPlainObject)(u)) {
                      var c = n ? o.mergeDeep : Object.assign;
                      t[r][a] = c({}, t[r][a] || {}, u);
                    } else t[r][a] = u;
                  });
                });
              } catch (e) {
                (0, o.logError)(e);
              }
            }
            function P(e, n) {
              T = e;
              try {
                return n();
              } finally {
                N();
              }
            }
            function N() {
              T = null;
            }
            return O(), {
              getCurrentBidder: function () {
                return T;
              },
              resetBidder: N,
              getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                  var e = arguments.length <= 0 ? void 0 : arguments[0];
                  return e ? (0, a.Z)(B(), e) : B();
                }
                return D.apply(void 0, arguments);
              },
              readConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                  var e = arguments.length <= 0 ? void 0 : arguments[0],
                    n = (0, o.deepClone)(B());
                  return e ? (0, a.Z)(n, e) : n;
                }
                return D.apply(void 0, arguments);
              },
              setConfig: j,
              mergeConfig: function (e) {
                if ((0, o.isPlainObject)(e)) {
                  var n = Object.keys(e).reduce(function (n, t) {
                    var r = B()[t] || {};
                    return n[t] = (0, o.mergeDeep)(r, e[t]), n;
                  }, {});
                  return j(function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {};
                      n % 2 ? c(Object(t), !0).forEach(function (n) {
                        s(e, n, t[n]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function (n) {
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
              resetConfig: O,
              runWithBidder: P,
              callbackWithBidder: function (e) {
                return function (n) {
                  return function () {
                    if ("function" == typeof n) {
                      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                      return P(e, o.bind.call.apply(o.bind, [n, this].concat(r)));
                    }
                    (0, o.logWarn)("config.callbackWithBidder callback is not a function");
                  };
                };
              },
              setBidderConfig: k,
              getBidderConfig: function () {
                return t;
              },
              mergeBidderConfig: function (e) {
                return k(e, !0);
              },
              convertAdUnitFpd: function (e) {
                var n = [];
                return e.forEach(function (e) {
                  var t;
                  e.fpd ? (e.ortb2Imp ? (0, o.mergeDeep)(e.ortb2Imp, R(e.fpd)) : e.ortb2Imp = R(e.fpd), n.push(((t = e).fpd, function (e, n) {
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
                  }(t, u)))) : n.push(e);
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
            return f;
          },
          t: function () {
            return g;
          }
        });
        var r = t(1879),
          i = t(9853),
          o = 2,
          a = {
            buckets: [{
              max: 5,
              increment: .5
            }]
          },
          u = {
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
          s = {
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
          d = {
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
        function f(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = parseFloat(e);
          return isNaN(r) && (r = ""), {
            low: "" === r ? "" : l(e, a, t),
            med: "" === r ? "" : l(e, u, t),
            high: "" === r ? "" : l(e, c, t),
            auto: "" === r ? "" : l(e, d, t),
            dense: "" === r ? "" : l(e, s, t),
            custom: "" === r ? "" : l(e, n, t)
          };
        }
        function l(e, n, t) {
          var i = "";
          if (!g(n)) return i;
          var a = n.buckets.reduce(function (e, n) {
              return e.max > n.max ? e : n;
            }, {
              max: 0
            }),
            u = 0,
            c = (0, r.sE)(n.buckets, function (n) {
              if (e > a.max * t) {
                var r = n.precision;
                void 0 === r && (r = o), i = (n.max * t).toFixed(r);
              } else {
                if (e <= n.max * t && e >= u * t) return n.min = u, n;
                u = n.max;
              }
            });
          return c && (i = function (e, n, t) {
            var r = void 0 !== n.precision ? n.precision : o,
              i = n.increment * t,
              a = n.min * t,
              u = Math.pow(10, r + 2),
              c = (e * u - a * u) / (i * u),
              s = Math.floor(c) * i + a;
            return (s = Number(s.toFixed(10))).toFixed(r);
          }(e, c, t)), i;
        }
        function g(e) {
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
            return S;
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
          u = t(3494),
          c = (0, t(9853).prefixLog)("DEBUG:"),
          s = c.logWarn,
          d = c.logMessage,
          f = "owpbjs:debugging",
          l = [function (e) {
            p(), function (e) {
              r = h.bind(e), a.Yt.before(r, 5), i = E.bind(e), a.e0.before(i, 5);
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
        function y(e, n, t) {
          return !(!e.bidder || e.bidder === n) || !(!e.adUnitCode || e.adUnitCode === t);
        }
        function b(e, n) {
          return Array.isArray(e) && -1 === e.indexOf(n);
        }
        function m(e, n, t) {
          return Object.keys(e).filter(function (e) {
            return -1 === ["adUnitCode", "bidder"].indexOf(e);
          }).reduce(function (n, r) {
            return d("bidder overrides changed '".concat(n.adUnitCode, "/").concat(n.bidderCode, "' ").concat(t, ".").concat(r, " from '").concat(n[r], ".js' to '").concat(e[r], "'")), n[r] = e[r], n.isDebug = !0, n;
          }, n);
        }
        function h(e, n, t) {
          var r = this;
          b(r.bidders, t.bidderCode) ? s("bidder '".concat(t.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(r.bids) && r.bids.forEach(function (e) {
            y(e, t.bidderCode, n) || m(e, t, "bidder");
          }), e(n, t));
        }
        function E(e, n) {
          var t = this,
            r = n.filter(function (e) {
              return !b(t.bidders, e.bidderCode) || (s("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
            });
          Array.isArray(t.bidRequests) && r.forEach(function (e) {
            t.bidRequests.forEach(function (n) {
              e.bids.forEach(function (t) {
                y(n, e.bidderCode, t.adUnitCode) || m(n, t, "bidRequest");
              });
            });
          }), e(r);
        }
        var S = (0, u.z3)("sync", function (e) {
          var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).sessionStorage,
            t = void 0 === n ? window.sessionStorage : n;
          if (e.enabled) try {
            t.setItem(f, JSON.stringify(e));
          } catch (e) {} else try {
            t.removeItem(f);
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
            S(e, {
              sessionStorage: t
            }), e.enabled ? v(e) : (g.forEach(function (e) {
              return e();
            }), d("bidder overrides disabled"));
          }(e.debugging);
        });
      },
      2319: function (e, n, t) {
        "use strict";

        function r() {
          return r = Object.assign ? Object.assign.bind() : function (e) {
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
          u = Array.prototype.push,
          c = i._map(o.EVENTS, function (e) {
            return e;
          }),
          s = o.EVENT_ID_PATHS,
          d = [],
          f = function () {
            var e = {},
              n = {
                on: function (n, t, r) {
                  if (function (e) {
                    return i.contains(c, e);
                  }(n)) {
                    var o = e[n] || {
                      que: []
                    };
                    r ? (o[r] = o[r] || {
                      que: []
                    }, o[r].que.push(t)) : o.que.push(t), e[n] = o;
                  } else i.logError("Wrong event name : " + n + " Valid event names :" + c);
                },
                emit: function (n) {
                  !function (n, t) {
                    i.logMessage("Emitting event for: " + n);
                    var r = t[0] || {},
                      o = r[s[n]],
                      a = e[n] || {
                        que: []
                      },
                      c = i._map(a, function (e, n) {
                        return n;
                      }),
                      f = [];
                    d.push({
                      eventType: n,
                      args: r,
                      id: o,
                      elapsedTime: i.getPerformanceNow()
                    }), o && i.contains(c, o) && u.apply(f, a[o].que), u.apply(f, a.que), i._each(f, function (e) {
                      if (e) try {
                        e.apply(null, t);
                      } catch (e) {
                        i.logError("Error executing handler:", "events.js", e);
                      }
                    });
                  }(n, a.call(arguments, 1));
                },
                off: function (n, t, r) {
                  var o = e[n];
                  i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, function (e) {
                    var n = o[r].que;
                    e === t && n.splice(n.indexOf(e), 1);
                  }) : i._each(o.que, function (e) {
                    var n = o.que;
                    e === t && n.splice(n.indexOf(e), 1);
                  }), e[n] = o);
                },
                get: function () {
                  return e;
                },
                getEvents: function () {
                  var e = [];
                  return i._each(d, function (n) {
                    var t = r({}, n);
                    e.push(t);
                  }), e;
                }
              };
            return n;
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
            return f;
          },
          bA: function () {
            return d;
          },
          o0: function () {
            return c;
          },
          v5: function () {
            return u;
          },
          z3: function () {
            return a;
          }
        });
        var r = t(1432),
          i = t.n(r);
        function o(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var a = i()({
            useProxy: !1,
            ready: i().SYNC | i().ASYNC | i().QUEUE
          }),
          u = a.get;
        function c(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
          0 === e.getHooks({
            hook: n
          }).length && e.before(n, t);
        }
        var s = {};
        function d(e, n) {
          var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).postInstallAllowed,
            r = void 0 !== t && t;
          a("async", function (t) {
            t.forEach(function (e) {
              return n.apply(void 0, function (e) {
                if (Array.isArray(e)) return o(e);
              }(t = e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
              }(t) || function (e, n) {
                if (e) {
                  if ("string" == typeof e) return o(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, n) : void 0;
                }
              }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }());
              var t;
            }), r && (s[e] = n);
          }, e)([]);
        }
        function f(e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          var i = s[e];
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
            return y;
          },
          JL: function () {
            return S;
          },
          Sg: function () {
            return l;
          },
          Ur: function () {
            return h;
          },
          e6: function () {
            return m;
          },
          eK: function () {
            return E;
          },
          r4: function () {
            return b;
          },
          xc: function () {
            return g;
          },
          zs: function () {
            return v;
          }
        });
        var r = t(265),
          i = t(9853),
          o = t(1879),
          a = t(4766);
        function u(e) {
          return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, u(e);
        }
        function c(e, n) {
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
            n % 2 ? c(Object(t), !0).forEach(function (n) {
              d(e, n, t[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
            });
          }
          return e;
        }
        function d(e, n, t) {
          return (n = function (e) {
            var n = function (e, n) {
              if ("object" !== u(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" !== u(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" === u(n) ? n : String(n);
          }(n)) in e ? Object.defineProperty(e, n, {
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
          return e && e.type && ((n = e.type) && (0, o.q9)(Object.keys(p), n) || ((0, i.logError)("".concat(n, " nativeParam is not supported")), 0)) ? p[e.type] : e;
          var n;
        }
        function y(e) {
          e.forEach(function (e) {
            var n = e.nativeParams || (0, r.Z)(e, "mediaTypes.native");
            n && (e.nativeParams = v(n));
          });
        }
        function b(e) {
          var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
            t = void 0 === n ? a.K.index : n;
          if (!(0, r.Z)(e, "native.clickUrl")) return !1;
          var i = t.getAdUnit(e).nativeParams;
          if (!i) return !0;
          var u = Object.keys(i).filter(function (e) {
              return i[e].required;
            }),
            c = Object.keys(e.native).filter(function (n) {
              return e.native[n];
            });
          return u.every(function (e) {
            return (0, o.q9)(c, e);
          });
        }
        function m(e, n) {
          var t;
          return "click" === e.action ? t = n.native && n.native.clickTrackers : (t = n.native && n.native.impressionTrackers, n.native && n.native.javascriptTrackers && (0, i.insertHtmlIntoIframe)(n.native.javascriptTrackers)), (t || []).forEach(i.triggerPixel), e.action;
        }
        function h(e) {
          var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
            t = void 0 === n ? a.K.index : n,
            i = {},
            o = t.getAdUnit(e);
          (0, r.Z)(o, "nativeParams.rendererUrl") ? e.native.rendererUrl = T(o.nativeParams.rendererUrl) : (0, r.Z)(o, "nativeParams.adTemplate") && (e.native.adTemplate = T(o.nativeParams.adTemplate));
          var u = !1 !== (0, r.Z)(o, "nativeParams.sendTargetingKeys"),
            c = function (e) {
              var n = {};
              return (0, r.Z)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach(function (e) {
                n[e] = "hb_native_".concat(e);
              }), s(s({}, f.NATIVE_KEYS), n);
            }(o),
            d = s(s({}, e.native), e.native.ext);
          return delete d.ext, Object.keys(d).forEach(function (n) {
            var t = c[n],
              a = T(e.native[n]) || T((0, r.Z)(e, "native.ext.".concat(n)));
            if ("adTemplate" !== n && t && a) {
              var s = (0, r.Z)(o, "nativeParams.".concat(n, ".sendId"));
              "boolean" != typeof s && (s = (0, r.Z)(o, "nativeParams.ext.".concat(n, ".sendId"))), s && (a = "".concat(t, ":").concat(e.adId));
              var d = (0, r.Z)(o, "nativeParams.".concat(n, ".sendTargetingKeys"));
              "boolean" != typeof d && (d = (0, r.Z)(o, "nativeParams.ext.".concat(n, ".sendTargetingKeys"))), ("boolean" == typeof d ? d : u) && (i[t] = a);
            }
          }), i;
        }
        function E(e, n) {
          var t = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
          };
          return n.native.hasOwnProperty("adTemplate") && (t.adTemplate = T(n.native.adTemplate)), n.native.hasOwnProperty("rendererUrl") && (t.rendererUrl = T(n.native.rendererUrl)), e.assets.forEach(function (e) {
            var r = (0, i.getKeyByValue)(f.NATIVE_KEYS, e),
              o = T(n.native[r]);
            t.assets.push({
              key: r,
              value: o
            });
          }), t;
        }
        function S(e, n) {
          var t = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
          };
          return Object.keys(n.native).forEach(function (e, r) {
            if ("adTemplate" === e && n.native[e]) t.adTemplate = T(n.native[e]);else if ("rendererUrl" === e && n.native[e]) t.rendererUrl = T(n.native[e]);else if ("ext" === e) Object.keys(n.native[e]).forEach(function (r) {
              if (n.native[e][r]) {
                var i = T(n.native[e][r]);
                t.assets.push({
                  key: r,
                  value: i
                });
              }
            });else if (n.native[e] && f.NATIVE_KEYS.hasOwnProperty(e)) {
              var i = T(n.native[e]);
              t.assets.push({
                key: e,
                value: i
              });
            }
          }), t;
        }
        function T(e) {
          return "object" === u(e) && e.url ? e.url : e;
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
          u = t(9017),
          c = t(5644),
          s = t(4766),
          d = t(1879),
          f = t(4877),
          l = t(8962),
          g = c.EVENTS,
          p = g.AD_RENDER_FAILED,
          v = g.AD_RENDER_SUCCEEDED;
        function y(e) {
          var n = e.reason,
            t = e.message,
            r = e.bid,
            o = e.id,
            u = {
              reason: n,
              message: t
            };
          r && (u.bid = r), o && (u.adId = o), (0, i.logError)(t), a.emit(p, u);
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
        var m = c.EVENTS.BID_WON,
          h = c.EVENTS.STALE_RENDER,
          E = {
            "Prebid Request": function (e, n, t) {
              if (null != t) {
                if (t.status !== c.BID_STATUS.RENDERED || ((0, i.logWarn)("Ad id ".concat(t.adId, " has been rendered before")), a.emit(h, t), !(0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender"))) {
                  try {
                    !function (e, n) {
                      var t = e.adId,
                        r = e.ad,
                        o = e.adUrl,
                        a = e.width,
                        u = e.height,
                        c = e.renderer,
                        s = e.cpm,
                        d = e.originalCpm;
                      (0, f.Pd)(c) ? (0, f._U)(c, e) : t && (T(e), n({
                        message: "Prebid Response",
                        ad: (0, i.replaceAuctionPrice)(r, d || s),
                        adUrl: (0, i.replaceAuctionPrice)(o, d || s),
                        adId: t,
                        width: a,
                        height: u
                      }));
                    }(t, e);
                  } catch (e) {
                    return void y({
                      reason: c.AD_RENDER_FAILED_REASON.EXCEPTION,
                      message: e.message,
                      id: n.adId,
                      bid: t
                    });
                  }
                  s.K.addWinningBid(t), a.emit(m, t);
                }
              } else y({
                reason: c.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
                message: "Cannot find ad '".concat(n.adId, "' for cross-origin render request"),
                id: n.adId
              });
            },
            "Prebid Native": function (e, n, t) {
              if (null != t) switch (n.action) {
                case "assetRequest":
                  e((0, u.eK)(n, t));
                  break;
                case "allAssetRequest":
                  e((0, u.JL)(n, t));
                  break;
                case "resizeNativeHeight":
                  t.height = n.height, t.width = n.width, T(t);
                  break;
                default:
                  if ("click" === (0, u.e6)(n, t)) return;
                  s.K.addWinningBid(t), a.emit(m, t);
              } else (0, i.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
            },
            "Prebid Event": function (e, n, t) {
              if (null != t) {
                if (t.status === c.BID_STATUS.RENDERED) switch (n.event) {
                  case c.EVENTS.AD_RENDER_FAILED:
                    y({
                      bid: t,
                      id: n.adId,
                      reason: n.info.reason,
                      message: n.info.message
                    });
                    break;
                  case c.EVENTS.AD_RENDER_SUCCEEDED:
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
        function T(e) {
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
              var u = a.style;
              u.width = r + "px", u.height = o + "px";
            } else (0, i.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
          });
        }
        var A = t(7112),
          I = t(9742),
          w = t(3494),
          C = t(3636),
          O = t(7263),
          B = t(1477),
          U = t(5849),
          R = t(7602);
        function j(e) {
          return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, j(e);
        }
        function D(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function _() {
          return _ = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, _.apply(this, arguments);
        }
        var k = (0, r.R)(),
          P = t(5644),
          N = t(7602).ZP,
          x = t(2319),
          q = A.k_.triggerUserSyncs,
          M = P.EVENTS,
          G = M.ADD_AD_UNITS,
          W = M.BID_WON,
          F = M.REQUEST_BIDS,
          z = M.SET_TARGETING,
          L = M.STALE_RENDER,
          K = P.AD_RENDER_FAILED_REASON,
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
            (0, i.logWarn)(r), x.emit(P.EVENTS.AUCTION_DEBUG, {
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
        (0, C.wt)(), k.bidderSettings = k.bidderSettings || {}, k.libLoaded = !0, k.version = "v6.18.0", (0, i.logInfo)("Prebid.js v6.18.0 loaded"), k.installedModules = k.installedModules || [], k.adUnits = k.adUnits || [], k.triggerUserSyncs = q;
        var oe = {
            validateAdUnit: ie,
            validateBannerMediaType: ee,
            validateVideoMediaType: ne,
            validateNativeMediaType: te,
            validateSizes: $
          },
          ae = (0, w.z3)("sync", function (e) {
            var n = [];
            return e.forEach(function (e) {
              if (null != (e = ie(e))) {
                var t,
                  r,
                  i,
                  o = e.mediaTypes;
                o.banner && (t = ee(e), o.banner.hasOwnProperty("pos") && (t = re(t, "banner"))), o.video && (r = ne(t || e), o.video.hasOwnProperty("pos") && (r = re(r, "video"))), o.native && (i = te(r || t || e));
                var a = _({}, t, r, i);
                n.push(a);
              }
            }), n;
          }, "checkAdUnitSetup");
        function ue(e) {
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
            }, (t = function (e) {
              var n = function (e, n) {
                if ("object" !== j(e) || null === e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var r = t.call(e, "string");
                  if ("object" !== j(r)) return r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              return "symbol" === j(n) ? n : String(n);
            }(t = e[0].adUnitCode)) in n ? Object.defineProperty(n, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[t] = r, n;
            var n, t, r;
          }).reduce(function (e, n) {
            return _(e, n);
          }, {});
        }
        function ce(e, n, t) {
          var r = n.querySelector(t);
          e.parentNode && e.parentNode === r || (0, i.insertElement)(e, n, t);
        }
        k.getAdserverTargetingForAdUnitCodeStr = function (e) {
          if ((0, i.logInfo)("Invoking owpbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var n = k.getAdserverTargetingForAdUnitCode(e);
            return (0, i.transformAdServerTargetingObj)(n);
          }
          (0, i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, k.getHighestUnusedBidResponseForAdUnitCode = function (e) {
          if (e) {
            var n = s.K.getAllBidsForAdUnitCode(e).filter(I.u8.isUnusedBid).filter(I.u8.isBidNotExpired);
            return n.length ? n.reduce(i.getHighestCpm) : {};
          }
          (0, i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode");
        }, k.getAdserverTargetingForAdUnitCode = function (e) {
          return k.getAdserverTargeting(e)[e];
        }, k.getAdserverTargeting = function (e) {
          return (0, i.logInfo)("Invoking owpbjs.getAdserverTargeting", arguments), I.q0.getAllTargeting(e);
        }, k.getConsentMetadata = function () {
          return (0, i.logInfo)("Invoking owpbjs.getConsentMetadata"), {
            gdpr: R.rp.getConsentMeta(),
            usp: R.nX.getConsentMeta(),
            coppa: !!l.vc.getConfig("coppa")
          };
        }, k.getNoBids = function () {
          return (0, i.logInfo)("Invoking owpbjs.getNoBids", arguments), ue("getNoBids");
        }, k.getNoBidsForAdUnitCode = function (e) {
          return {
            bids: s.K.getNoBids().filter(function (n) {
              return n.adUnitCode === e;
            })
          };
        }, k.getBidResponses = function () {
          return (0, i.logInfo)("Invoking owpbjs.getBidResponses", arguments), ue("getBidsReceived");
        }, k.getBidResponsesForAdUnitCode = function (e) {
          return {
            bids: s.K.getBidsReceived().filter(function (n) {
              return n.adUnitCode === e;
            })
          };
        }, k.setTargetingForGPTAsync = function (e, n) {
          if ((0, i.logInfo)("Invoking owpbjs.setTargetingForGPTAsync", arguments), (0, i.isGptPubadsDefined)()) {
            var t = I.q0.getAllTargeting(e);
            I.q0.resetPresetTargeting(e, n), I.q0.setTargetingForGPT(t, n), Object.keys(t).forEach(function (e) {
              Object.keys(t[e]).forEach(function (n) {
                "hb_adid" === n && s.K.setStatusForBids(t[e][n], P.BID_STATUS.BID_TARGETING_SET);
              });
            }), x.emit(z, t);
          } else (0, i.logError)("window.googletag is not defined on the page");
        }, k.setTargetingForAst = function (e) {
          (0, i.logInfo)("Invoking owpbjs.setTargetingForAn", arguments), I.q0.isApntagDefined() ? (I.q0.setTargetingForAst(e), x.emit(z, I.q0.getAllTargeting())) : (0, i.logError)("window.apntag is not defined on the page");
        }, k.renderAd = (0, w.z3)("async", function (e, n, t) {
          if ((0, i.logInfo)("Invoking owpbjs.renderAd", arguments), (0, i.logMessage)("Calling renderAd with adId :" + n), e && n) try {
            var r = s.K.findBidByAdId(n);
            if (r) {
              var a = !0;
              if (r && r.status === P.BID_STATUS.RENDERED && ((0, i.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), x.emit(L, r), (0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender") && (a = !1)), a) {
                if (r.ad = (0, i.replaceAuctionPrice)(r.ad, r.originalCpm || r.cpm), r.adUrl = (0, i.replaceAuctionPrice)(r.adUrl, r.originalCpm || r.cpm), t && t.clickThrough) {
                  var u = t.clickThrough;
                  r.ad = (0, i.replaceClickThrough)(r.ad, u), r.adUrl = (0, i.replaceClickThrough)(r.adUrl, u);
                }
                s.K.addWinningBid(r), x.emit(W, r);
                var c = r.height,
                  d = r.width,
                  g = r.ad,
                  p = r.mediaType,
                  v = r.adUrl,
                  m = r.renderer,
                  h = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                if ((0, i.insertElement)(h, e, "html"), (0, f.Pd)(m)) (0, f._U)(m, r), ce(h, e, "html"), b({
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
                } else if (g) e.write(g), e.close(), X(e, d, c), ce(h, e, "html"), (0, i.callBurl)(r), b({
                  doc: e,
                  bid: r,
                  id: n
                });else if (v) {
                  var S = (0, i.createInvisibleIframe)();
                  S.height = c, S.width = d, S.style.display = "inline", S.style.overflow = "hidden", S.src = v, (0, i.insertElement)(S, e, "body"), X(e, d, c), ce(h, e, "html"), (0, i.callBurl)(r), b({
                    doc: e,
                    bid: r,
                    id: n
                  });
                } else {
                  var T = "Error trying to write ad. No ad for bid response id: ".concat(n);
                  y({
                    reason: H,
                    message: T,
                    bid: r,
                    id: n
                  });
                }
              }
            } else {
              var A = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
              y({
                reason: Y,
                message: A,
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
            var w = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
            y({
              reason: J,
              message: w,
              id: n
            });
          }
        }), k.removeAdUnit = function (e) {
          (0, i.logInfo)("Invoking owpbjs.removeAdUnit", arguments), e ? ((0, i.isArray)(e) ? e : [e]).forEach(function (e) {
            for (var n = k.adUnits.length - 1; n >= 0; n--) k.adUnits[n].code === e && k.adUnits.splice(n, 1);
          }) : k.adUnits = [];
        }, k.requestBids = (0, w.z3)("async", function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.bidsBackHandler,
            t = e.timeout,
            r = e.adUnits,
            o = e.adUnitCodes,
            a = e.labels,
            u = e.auctionId;
          x.emit(F);
          var c = t || l.vc.getConfig("bidderTimeout");
          r = r && l.vc.convertAdUnitFpd((0, i.isArray)(r) ? r : [r]) || k.adUnits, (0, i.logInfo)("Invoking owpbjs.requestBids", arguments);
          var f = [],
            g = [];
          if (l.vc.getConfig("s2sConfig", function (e) {
            e && e.s2sConfig && (f = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          }), f.forEach(function (e) {
            var n;
            g.push.apply(g, function (e) {
              if (Array.isArray(e)) return D(e);
            }(n = e.bidders) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(n) || function (e, n) {
              if (e) {
                if ("string" == typeof e) return D(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? D(e, n) : void 0;
              }
            }(n) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }());
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
              r = N.bidderRegistry,
              o = g ? t.filter(function (e) {
                return !(0, d.q9)(g, e);
              }) : t;
            e.transactionId = (0, i.generateUUID)(), o.forEach(function (t) {
              var o = r[t],
                a = o && o.getSpec && o.getSpec(),
                u = a && a.supportedMediaTypes || ["banner"];
              n.some(function (e) {
                return (0, d.q9)(u, e);
              }) ? O.f.incrementBidderRequestsCounter(e.code, t) : ((0, i.logWarn)((0, i.unsupportedBidderMessage)(e, t)), e.bids = e.bids.filter(function (e) {
                return e.bidder !== t;
              }));
            }), O.f.incrementRequestsCounter(e.code);
          }), r && 0 !== r.length) {
            var p = s.K.createAuction({
                adUnits: r,
                adUnitCodes: o,
                callback: n,
                cbTimeout: c,
                labels: a,
                auctionId: u
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
        }), k.requestBids.before(function (e, n) {
          function t(e) {
            for (var n; n = e.shift();) n();
          }
          t(U.Ld), t(se), e.call(this, n);
        }, 49), k.addAdUnits = function (e) {
          (0, i.logInfo)("Invoking owpbjs.addAdUnits", arguments), k.adUnits.push.apply(k.adUnits, l.vc.convertAdUnitFpd((0, i.isArray)(e) ? e : [e])), x.emit(G);
        }, k.onEvent = function (e, n, t) {
          (0, i.logInfo)("Invoking owpbjs.onEvent", arguments), (0, i.isFn)(n) ? !t || Q[e].call(null, t) ? x.on(e, n, t) : (0, i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : (0, i.logError)('The event handler provided is not a function and was not set on event "' + e + '".');
        }, k.offEvent = function (e, n, t) {
          (0, i.logInfo)("Invoking owpbjs.offEvent", arguments), t && !Q[e].call(null, t) || x.off(e, n, t);
        }, k.getEvents = function () {
          return (0, i.logInfo)("Invoking owpbjs.getEvents"), x.getEvents();
        }, k.registerBidAdapter = function (e, n) {
          (0, i.logInfo)("Invoking owpbjs.registerBidAdapter", arguments);
          try {
            N.registerBidAdapter(e(), n);
          } catch (e) {
            (0, i.logError)("Error registering bidder adapter : " + e.message);
          }
        }, k.registerAnalyticsAdapter = function (e) {
          (0, i.logInfo)("Invoking owpbjs.registerAnalyticsAdapter", arguments);
          try {
            N.registerAnalyticsAdapter(e);
          } catch (e) {
            (0, i.logError)("Error registering analytics adapter : " + e.message);
          }
        }, k.createBid = function (e) {
          return (0, i.logInfo)("Invoking owpbjs.createBid", arguments), (0, B.m)(e);
        };
        var se = [],
          de = (0, w.z3)("async", function (e) {
            e && !(0, i.isEmpty)(e) ? ((0, i.logInfo)("Invoking owpbjs.enableAnalytics for: ", e), N.enableAnalytics(e)) : (0, i.logError)("owpbjs.enableAnalytics should be called with option {}");
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
        k.enableAnalytics = function (e) {
          se.push(de.bind(this, e));
        }, k.aliasBidder = function (e, n, t) {
          (0, i.logInfo)("Invoking owpbjs.aliasBidder", arguments), e && n ? N.aliasBidAdapter(e, n, t) : (0, i.logError)("bidderCode and alias must be passed as arguments", "owpbjs.aliasBidder");
        }, k.getAllWinningBids = function () {
          return s.K.getAllWinningBids();
        }, k.getAllPrebidWinningBids = function () {
          return s.K.getBidsReceived().filter(function (e) {
            return e.status === P.BID_STATUS.BID_TARGETING_SET;
          });
        }, k.getHighestCpmBids = function (e) {
          return I.q0.getWinningBids(e);
        }, k.markWinningBidAsUsed = function (e) {
          var n = [];
          e.adUnitCode && e.adId ? n = s.K.getBidsReceived().filter(function (n) {
            return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
          }) : e.adUnitCode ? n = I.q0.getWinningBids(e.adUnitCode) : e.adId ? n = s.K.getBidsReceived().filter(function (n) {
            return n.adId === e.adId;
          }) : (0, i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), n.length > 0 && (n[0].status = P.BID_STATUS.RENDERED);
        }, k.getConfig = l.vc.getConfig, k.readConfig = l.vc.readConfig, k.mergeConfig = l.vc.mergeConfig, k.mergeBidderConfig = l.vc.mergeBidderConfig, k.setConfig = l.vc.setConfig, k.setBidderConfig = l.vc.setBidderConfig, k.que.push(function () {
          window.addEventListener("message", S, !1);
        }), k.cmd.push = function (e) {
          if ("function" == typeof e) try {
            e.call();
          } catch (e) {
            (0, i.logError)("Error processing command :", e.message, e.stack);
          } else (0, i.logError)("Commands written into owpbjs.cmd.push must be wrapped in a function");
        }, k.que.push = k.cmd.push, k.processQueue = function () {
          w.z3.ready(), fe(k.que), fe(k.cmd);
        };
      },
      2528: function (e, n, t) {
        "use strict";

        function r() {
          return window.owpbjs;
        }
        t.d(n, {
          R: function () {
            return r;
          }
        }), window.owpbjs = window.owpbjs || {}, window.owpbjs.cmd = window.owpbjs.cmd || [], window.owpbjs.que = window.owpbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("owpbjs");
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
                u = [],
                c = function (e) {
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
                  m = null;
                g = !1, t = t ? t.parent : e;
                try {
                  y = t.location.href || null;
                } catch (e) {
                  b = !0;
                }
                if (b) {
                  if (v) {
                    var h = p.context;
                    try {
                      o = m = h.sourceUrl, l = !0, t === e.top && (d = !0), h.canonicalUrl && (a = h.canonicalUrl);
                    } catch (e) {}
                  } else {
                    (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                    try {
                      var E = p.document.referrer;
                      E && (m = E, t === e.top && (d = !0));
                    } catch (e) {}
                    !m && c && c[f - 1] && (m = c[f - 1]), m && !l && (o = m);
                  }
                } else {
                  if (y && (o = m = y, l = !1, t === e.top)) {
                    d = !0;
                    var S = n(t.document);
                    S && (a = S);
                  }
                  t.context && t.context.sourceUrl && (g = !0);
                }
                u.push(m), f++;
              } while (t !== e.top && f < s);
              return u.reverse(), {
                referer: o || null,
                reachedTop: d,
                isAmp: l,
                numIframes: f - 1,
                stack: u,
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
        function u(e) {
          return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, u(e);
        }
        var c = [];
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
          var n = l(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c);
          return !n.shouldFilter || !!n.sizesSupported[e];
        }
        function f() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.labels,
            t = void 0 === n ? [] : n,
            r = e.labelAll,
            u = void 0 !== r && r,
            s = e.activeLabels,
            d = void 0 === s ? [] : s,
            f = arguments.length > 1 ? arguments[1] : void 0,
            g = arguments.length > 2 ? arguments[2] : void 0,
            p = l(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c);
          f = (0, i.isPlainObject)(f) ? (0, i.deepClone)(f) : g ? {
            banner: {
              sizes: g
            }
          } : {};
          var v = (0, o.Z)(f, "banner.sizes");
          p.shouldFilter && v && (f.banner.sizes = v.filter(function (e) {
            return p.sizesSupported[e];
          }));
          var y = Object.keys(f),
            b = {
              active: y.every(function (e) {
                return "banner" !== e;
              }) || y.some(function (e) {
                return "banner" === e;
              }) && (0, o.Z)(f, "banner.sizes.length") > 0 && (0 === t.length || !u && (t.some(function (e) {
                return p.labels[e];
              }) || t.some(function (e) {
                return (0, a.q9)(d, e);
              })) || u && t.reduce(function (e, n) {
                return e ? p.labels[n] || (0, a.q9)(d, n) : e;
              }, !0)),
              mediaTypes: f
            };
          return v && v.length !== f.banner.sizes.length && (b.filterResults = {
            before: v,
            after: f.banner.sizes
          }), b;
        }
        function l(e) {
          return e.reduce(function (e, n) {
            if ("object" === u(n) && "string" == typeof n.mediaQuery && n.mediaQuery.length > 0) {
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
              u = r.filterResults;
            return o ? (u && (0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" banner sizes from '), u.before, "to ", u.after), t.mediaTypes = a, t.bids = t.bids.reduce(function (e, r) {
              var o = f(s(r, n), t.mediaTypes),
                a = o.active,
                u = o.mediaTypes,
                c = o.filterResults;
              return a ? (c && ((0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '" banner sizes from '), c.before, "to ", c.after), r.mediaTypes = u), e.push(r)) : (0, i.logInfo)('Size mapping deactivated adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '"')), e;
            }, []), e.push(t)) : (0, i.logInfo)('Size mapping disabled adUnit "'.concat(t.code, '"')), e;
          }, []);
        }
        r.vc.getConfig("sizeConfig", function (e) {
          return function (e) {
            c = e;
          }(e.sizeConfig);
        });
      },
      5849: function (e, n, t) {
        "use strict";

        t.d(n, {
          Ld: function () {
            return c;
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
          u = ["core", "prebid-module"],
          c = [];
        function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.gvlid,
            t = e.moduleName,
            r = e.bidderCode,
            s = e.moduleType,
            f = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).bidderSettings,
            l = void 0 === f ? a.S : f;
          function g(e) {
            return (0, o.q9)(u, s) ? e({
              valid: !0
            }) : function () {
              if (null == r) return !1;
              var e = l.get(r, "storageAllowed");
              return null != e && !e;
            }() ? ((0, i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(r, "'")), e({
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
          var p = function (e) {
            var n = function (e) {
              if (e && e.valid) try {
                return !!window.localStorage;
              } catch (e) {
                (0, i.logError)("Local storage api disabled");
              }
              return !1;
            };
            if (!e || "function" != typeof e) return g(n);
            c.push(function () {
              var t = g(n);
              e(t);
            });
          };
          return {
            setCookie: function (e, n, t, r, i, o) {
              var a = function (o) {
                if (o && o.valid) {
                  var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                    u = t && "" !== t ? " ;expires=".concat(t) : "",
                    c = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                  document.cookie = "".concat(e, "=").concat(encodeURIComponent(n)).concat(u, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(c);
                }
              };
              if (!o || "function" != typeof o) return g(a);
              c.push(function () {
                var e = g(a);
                o(e);
              });
            },
            getCookie: function (e, n) {
              var t = function (n) {
                if (n && n.valid) {
                  var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                  return t ? decodeURIComponent(t[2]) : null;
                }
                return null;
              };
              if (!n || "function" != typeof n) return g(t);
              c.push(function () {
                var e = g(t);
                n(e);
              });
            },
            localStorageIsEnabled: function (e) {
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
              if (!e || "function" != typeof e) return g(n);
              c.push(function () {
                var t = g(n);
                e(t);
              });
            },
            cookiesAreEnabled: function (e) {
              var n = function (e) {
                return !(!e || !e.valid || !(0, i.checkCookieSupport)() && (window.document.cookie = "prebid.cookieTest", -1 === window.document.cookie.indexOf("prebid.cookieTest")));
              };
              if (!e || "function" != typeof e) return g(n);
              c.push(function () {
                var t = g(n);
                e(t);
              });
            },
            setDataInLocalStorage: function (e, n, t) {
              var r = function (t) {
                t && t.valid && p() && window.localStorage.setItem(e, n);
              };
              if (!t || "function" != typeof t) return g(r);
              c.push(function () {
                var e = g(r);
                t(e);
              });
            },
            getDataFromLocalStorage: function (e, n) {
              var t = function (n) {
                return n && n.valid && p() ? window.localStorage.getItem(e) : null;
              };
              if (!n || "function" != typeof n) return g(t);
              c.push(function () {
                var e = g(t);
                n(e);
              });
            },
            removeDataFromLocalStorage: function (e, n) {
              var t = function (n) {
                n && n.valid && p() && window.localStorage.removeItem(e);
              };
              if (!n || "function" != typeof n) return g(t);
              c.push(function () {
                var e = g(t);
                n(e);
              });
            },
            hasLocalStorage: p,
            findSimilarCookies: function (e, n) {
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
              if (!n || "function" != typeof n) return g(t);
              c.push(function () {
                var e = g(t);
                n(e);
              });
            }
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
            return O;
          },
          ol: function () {
            return C;
          },
          q0: function () {
            return B;
          },
          u8: function () {
            return w;
          }
        });
        var r = t(9853),
          i = t(265),
          o = t(8962),
          a = t(9017),
          u = t(4766),
          c = t(1269),
          s = t(8265),
          d = t(3494),
          f = t(9624),
          l = t(1879);
        function g(e) {
          return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, g(e);
        }
        function p() {
          return p = Object.assign ? Object.assign.bind() : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }, p.apply(this, arguments);
        }
        function v(e, n, t) {
          return (n = function (e) {
            var n = function (e, n) {
              if ("object" !== g(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" !== g(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" === g(n) ? n : String(n);
          }(n)) in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function y(e) {
          return function (e) {
            if (Array.isArray(e)) return b(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return b(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? b(e, n) : void 0;
            }
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function b(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        var m = t(5644),
          h = [],
          E = 20,
          S = "targetingControls.allowTargetingKeys",
          T = "targetingControls.addTargetingKeys",
          A = 'Only one of "'.concat(S, '" or "').concat(T, '" can be set'),
          I = Object.keys(m.TARGETING_KEYS).map(function (e) {
            return m.TARGETING_KEYS[e];
          }),
          w = {
            isBidNotExpired: function (e) {
              return e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, r.timestamp)();
            },
            isUnusedBid: function (e) {
              return e && (e.status && !(0, l.q9)([m.BID_STATUS.RENDERED], e.status) || !e.status);
            }
          },
          C = (0, d.z3)("sync", function (e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!(arguments.length > 3 && void 0 !== arguments[3] && arguments[3])) {
              var i = [],
                a = o.vc.getConfig("sendBidsControl.dealPrioritization"),
                u = (0, r.groupBy)(e, "adUnitCode");
              return Object.keys(u).forEach(function (e) {
                var o = [],
                  c = (0, r.groupBy)(u[e], "bidderCode");
                Object.keys(c).forEach(function (e) {
                  return o.push(c[e].reduce(n));
                }), t > 0 ? (o = a ? o.sort(O(!0)) : o.sort(function (e, n) {
                  return n.cpm - e.cpm;
                }), i.push.apply(i, y(o.slice(0, t)))) : i.push.apply(i, y(o));
              }), i;
            }
            return e;
          });
        function O() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return function (n, t) {
            return void 0 !== n.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === n.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : e ? t.cpm - n.cpm : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
          };
        }
        var B = function (e) {
          var n = {},
            t = {};
          function u(e, n) {
            return e.adserverTargeting && n && ((0, r.isArray)(n) && (0, l.q9)(n, e.adUnitCode) || "string" == typeof n && e.adUnitCode === n);
          }
          function d(n) {
            return "string" == typeof n ? [n] : (0, r.isArray)(n) ? n : e.getAdUnitCodes() || [];
          }
          function g() {
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
              return "banner" !== e.mediaType || (0, c.lO)([e.width, e.height]);
            }).filter(w.isUnusedBid).filter(w.isBidNotExpired), C(n, r.getOldestHighestCpmBid);
          }
          function b(e, t) {
            var r = n.getWinningBids(e, t),
              i = B();
            return r = r.map(function (e) {
              return v({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function (n) {
                return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(n);
              }).reduce(function (n, t) {
                var r = [e.adserverTargeting[t]],
                  i = v({}, t.substring(0, E), r);
                if (t === m.TARGETING_KEYS.DEAL) {
                  var o = v({}, "".concat(t, "_").concat(e.bidderCode).substring(0, E), r);
                  return [].concat(y(n), [i, o]);
                }
                return [].concat(y(n), [i]);
              }, []));
            }), r;
          }
          function B() {
            return e.getStandardBidderAdServerTargeting().map(function (e) {
              return e.key;
            }).concat(I).filter(r.uniques);
          }
          function U(e, n, t, i) {
            return Object.keys(n.adserverTargeting).filter(R()).forEach(function (t) {
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
          function R() {
            var e = B().concat(a.xc);
            return function (n) {
              return -1 === e.indexOf(n);
            };
          }
          function j(e) {
            return v({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(R()).map(function (n) {
              return v({}, n.substring(0, E), [e.adserverTargeting[n]]);
            }));
          }
          function D(e, n) {
            return n.map(function (n) {
              return v({}, "".concat(n, "_").concat(e.bidderCode).substring(0, E), [e.adserverTargeting[n]]);
            });
          }
          return n.setLatestAuctionForAdUnit = function (e, n) {
            t[e] = n;
          }, n.resetPresetTargeting = function (n, t) {
            if ((0, r.isGptPubadsDefined)()) {
              var i = d(n),
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
            d(e).forEach(function (e) {
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
          }, n.getAllTargeting = function (n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(),
              c = d(n),
              s = b(c, t).concat(function (e, n) {
                return n.filter(function (n) {
                  return (0, l.q9)(e, n.adUnitCode);
                }).map(function (e) {
                  return p({}, e);
                }).reduce(U, []).map(j).filter(function (e) {
                  return e;
                });
              }(c, t)).concat(o.vc.getConfig("enableSendAllBids") ? function (e, n) {
                var t = I.concat(a.xc),
                  i = o.vc.getConfig("sendBidsControl.bidLimit"),
                  c = C(n, r.getHighestCpm, i),
                  s = o.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                  d = s ? s.map(function (e) {
                    return m.TARGETING_KEYS[e];
                  }) : t;
                return c.map(function (n) {
                  if (u(n, e)) return v({}, n.adUnitCode, D(n, t.filter(function (e) {
                    return void 0 !== n.adserverTargeting[e] && -1 !== d.indexOf(e);
                  })));
                }).filter(function (e) {
                  return e;
                });
              }(c, t) : function (e, n) {
                if (!0 === o.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
                  var t = I.concat(a.xc);
                  return C(n, r.getHighestCpm).map(function (n) {
                    if (n.dealId && u(n, e)) return v({}, n.adUnitCode, D(n, t.filter(function (e) {
                      return void 0 !== n.adserverTargeting[e];
                    })));
                  }).filter(function (e) {
                    return e;
                  });
                }
                return [];
              }(c, t)).concat(function (n) {
                function t(e) {
                  return (0, i.Z)(e, m.JSON_MAPPING.ADSERVER_TARGETING);
                }
                return e.getAdUnits().filter(function (e) {
                  return (0, l.q9)(n, e.code) && t(e);
                }).map(function (e) {
                  return v({}, e.code, function (e) {
                    var n = t(e);
                    return Object.keys(n).map(function (e) {
                      return (0, r.isStr)(n[e]) && (n[e] = n[e].split(",").map(function (e) {
                        return e.trim();
                      })), (0, r.isArray)(n[e]) || (n[e] = [n[e]]), v({}, e, n[e]);
                    });
                  }(e));
                });
              }(c));
            s.map(function (e) {
              Object.keys(e).map(function (n) {
                e[n].map(function (e) {
                  -1 === h.indexOf(Object.keys(e)[0]) && (h = Object.keys(e).concat(h));
                });
              });
            });
            var f = Object.keys(p({}, m.DEFAULT_TARGETING_KEYS, m.NATIVE_KEYS)),
              y = o.vc.getConfig(S),
              E = o.vc.getConfig(T);
            if (null != E && null != y) throw new Error(A);
            y = null != E ? f.concat(E) : y || f, Array.isArray(y) && y.length > 0 && (s = function (e, n) {
              var t = p({}, m.TARGETING_KEYS, m.NATIVE_KEYS),
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
            }(s, y)), s = function (e) {
              var n = e.map(function (e) {
                return v({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                  return v({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
                }).reduce(function (e, n) {
                  return p(n, e);
                }, {}));
              }).reduce(function (e, n) {
                var t = Object.keys(n)[0];
                return e[t] = p({}, e[t], n[t]), e;
              }, {});
              return n;
            }(s);
            var w = o.vc.getConfig("targetingControls.auctionKeyMaxChars");
            return w && ((0, r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(w, " characters.  Running checks on auction keys...")), s = function (e, n) {
              var t = (0, r.deepClone)(e),
                i = Object.keys(t).map(function (e) {
                  return {
                    adUnitCode: e,
                    adserverTargeting: t[e]
                  };
                }).sort(O());
              return i.reduce(function (e, i, o, a) {
                var u,
                  c = (u = i.adserverTargeting, Object.keys(u).reduce(function (e, n) {
                    return e + "".concat(n, "%3d").concat(encodeURIComponent(u[n]), "%26");
                  }, ""));
                o + 1 === a.length && (c = c.slice(0, -3));
                var s = i.adUnitCode,
                  d = c.length;
                return d <= n ? (n -= d, (0, r.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(n), t[s]), e[s] = t[s]) : (0, r.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(n, ".\n"), t[s]), o + 1 === a.length && 0 === Object.keys(e).length && (0, r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e;
              }, {});
            }(s, w)), c.forEach(function (e) {
              s[e] || (s[e] = {});
            }), s;
          }, o.vc.getConfig("targetingControls", function (e) {
            null != (0, i.Z)(e, S) && null != (0, i.Z)(e, T) && (0, r.logError)(A);
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
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(),
              t = d(e);
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
        }(u.K);
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
        function u(e, n) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, n) {
            var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != t) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                s = !1;
              try {
                if (o = (t = t.call(e)).next, 0 === n) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else for (; !(c = (r = o.call(t)).done) && (u.push(r.value), u.length !== n); c = !0);
              } catch (e) {
                s = !0, i = e;
              } finally {
                try {
                  if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return;
                } finally {
                  if (s) throw i;
                }
              }
              return u;
            }
          }(e, n) || function (e, n) {
            if (e) {
              if ("string" == typeof e) return c(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, n) : void 0;
            }
          }(e, n) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function c(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        function s() {
          return s = Object.assign ? Object.assign.bind() : function (e) {
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
              c = {},
              d = {
                image: !0,
                iframe: !1
              },
              f = e.config;
            function l() {
              if (f.syncEnabled && e.browserSupportsCookies) {
                try {
                  d.iframe && g(t.iframe, function (e) {
                    var n = u(e, 2),
                      i = n[0],
                      o = n[1];
                    (0, r.logMessage)("Invoking iframe user sync for bidder: ".concat(i)), (0, r.insertUserSyncIframe)(o), function (e, n) {
                      e.image = e.image.filter(function (e) {
                        return e[0] !== n;
                      });
                    }(t, i);
                  }), d.image && g(t.image, function (e) {
                    var n = u(e, 2),
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
              return a.has(i) ? (0, r.logMessage)('already fired syncs for "'.concat(i, '", ignoring registerSync call')) : f.syncEnabled && (0, r.isArray)(t[e]) ? i ? 0 !== f.syncsPerBidder && Number(c[i]) >= f.syncsPerBidder ? (0, r.logWarn)('Number of user syncs exceeded for "'.concat(i, '"')) : n.canBidderRegisterSync(e, i) ? (t[e].push([i, o]), void (c = function (e, n) {
                return e[n] ? e[n] += 1 : e[n] = 1, e;
              }(c, i))) : (0, r.logWarn)('Bidder "'.concat(i, '" not permitted to register their "').concat(e, '" userSync pixels.')) : (0, r.logWarn)("Bidder is required for registering sync") : (0, r.logWarn)('User sync type "'.concat(e, '" not supported'));
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
                    u = {
                      include: function (e, n) {
                        return !(0, o.q9)(e, n);
                      },
                      exclude: function (e, n) {
                        return (0, o.q9)(e, n);
                      }
                    };
                  return u[i.filter || "include"](a, n);
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
            return ye;
          },
          _map: function () {
            return me;
          },
          adUnitsFilter: function () {
            return ze;
          },
          bind: function () {
            return P;
          },
          buildUrl: function () {
            return On;
          },
          callBurl: function () {
            return Ae;
          },
          checkCookieSupport: function () {
            return Xe;
          },
          chunk: function () {
            return En;
          },
          cleanObj: function () {
            return pn;
          },
          compareOn: function () {
            return An;
          },
          contains: function () {
            return be;
          },
          convertCamelToUnderscore: function () {
            return gn;
          },
          convertTypes: function () {
            return bn;
          },
          createInvisibleIframe: function () {
            return oe;
          },
          createTrackPixelHtml: function () {
            return Ce;
          },
          createTrackPixelIframeHtml: function () {
            return Oe;
          },
          cyrb53Hash: function () {
            return Rn;
          },
          debugTurnedOn: function () {
            return ie;
          },
          deepAccess: function () {
            return u.Z;
          },
          deepClone: function () {
            return Le;
          },
          deepEqual: function () {
            return Bn;
          },
          deepSetValue: function () {
            return c.Z;
          },
          delayExecution: function () {
            return $e;
          },
          fill: function () {
            return hn;
          },
          flatten: function () {
            return Re;
          },
          formatQS: function () {
            return wn;
          },
          generateUUID: function () {
            return q;
          },
          getAdUnitSizes: function () {
            return z;
          },
          getBidIdParameter: function () {
            return M;
          },
          getBidRequest: function () {
            return je;
          },
          getBidderCodes: function () {
            return Pe;
          },
          getDNT: function () {
            return an;
          },
          getDefinedParams: function () {
            return nn;
          },
          getGptSlotInfoForAdUnitCode: function () {
            return dn;
          },
          getHighestCpm: function () {
            return qe;
          },
          getKeyByValue: function () {
            return ke;
          },
          getKeys: function () {
            return De;
          },
          getLatestHighestCpmBid: function () {
            return Ge;
          },
          getMaxValueFromArray: function () {
            return Tn;
          },
          getMinValueFromArray: function () {
            return Sn;
          },
          getOldestHighestCpmBid: function () {
            return Me;
          },
          getOrigin: function () {
            return on;
          },
          getParameterByName: function () {
            return ae;
          },
          getPerformanceNow: function () {
            return Je;
          },
          getPrebidInternal: function () {
            return D;
          },
          getUniqueIdentifierStr: function () {
            return x;
          },
          getUserConfiguredParams: function () {
            return rn;
          },
          getValue: function () {
            return _e;
          },
          getValueString: function () {
            return Be;
          },
          getWindowLocation: function () {
            return J;
          },
          getWindowSelf: function () {
            return Y;
          },
          getWindowTop: function () {
            return Z;
          },
          groupBy: function () {
            return en;
          },
          hasConsoleLogger: function () {
            return re;
          },
          hasDeviceAccess: function () {
            return Qe;
          },
          hasOwn: function () {
            return he;
          },
          inIframe: function () {
            return Ke;
          },
          insertElement: function () {
            return Ee;
          },
          insertHtmlIntoIframe: function () {
            return Ie;
          },
          insertUserSyncIframe: function () {
            return we;
          },
          internal: function () {
            return R;
          },
          isA: function () {
            return ue;
          },
          isAdUnitCodeMatchingSlot: function () {
            return cn;
          },
          isApnGetTagDefined: function () {
            return xe;
          },
          isArray: function () {
            return de;
          },
          isArrayOfNums: function () {
            return mn;
          },
          isBoolean: function () {
            return ge;
          },
          isEmpty: function () {
            return pe;
          },
          isEmptyStr: function () {
            return ve;
          },
          isFn: function () {
            return ce;
          },
          isGptPubadsDefined: function () {
            return Ne;
          },
          isInteger: function () {
            return ln;
          },
          isNumber: function () {
            return fe;
          },
          isPlainObject: function () {
            return le;
          },
          isSafariBrowser: function () {
            return Ve;
          },
          isSlotMatchingAdUnitCode: function () {
            return sn;
          },
          isStr: function () {
            return se;
          },
          isValidMediaTypes: function () {
            return tn;
          },
          logError: function () {
            return ee;
          },
          logInfo: function () {
            return X;
          },
          logMessage: function () {
            return Q;
          },
          logWarn: function () {
            return $;
          },
          mergeDeep: function () {
            return Un;
          },
          parseGPTSingleSizeArray: function () {
            return K;
          },
          parseGPTSingleSizeArrayToRtbSize: function () {
            return V;
          },
          parseQS: function () {
            return In;
          },
          parseQueryStringParameters: function () {
            return W;
          },
          parseSizesInput: function () {
            return L;
          },
          parseUrl: function () {
            return Cn;
          },
          pick: function () {
            return vn;
          },
          prefixLog: function () {
            return ne;
          },
          replaceAuctionPrice: function () {
            return He;
          },
          replaceClickThrough: function () {
            return Ze;
          },
          shuffle: function () {
            return Fe;
          },
          skipUndefinedValues: function () {
            return jn;
          },
          timestamp: function () {
            return Ye;
          },
          transformAdServerTargetingObj: function () {
            return F;
          },
          transformBidderParamKeywords: function () {
            return yn;
          },
          triggerPixel: function () {
            return Te;
          },
          tryAppendQueryString: function () {
            return G;
          },
          uniques: function () {
            return Ue;
          },
          unsupportedBidderMessage: function () {
            return fn;
          },
          waitForElementToLoad: function () {
            return Se;
          }
        });
        var r = t(8962),
          i = t(7079),
          o = t.n(i),
          a = t(1879),
          u = t(265),
          c = t(4806);
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
          return (n = function (e) {
            var n = function (e, n) {
              if ("object" !== p(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" !== p(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" === p(n) ? n : String(n);
          }(n)) in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e;
        }
        function g() {
          return g = Object.assign ? Object.assign.bind() : function (e) {
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
          b = "Array",
          m = "String",
          h = "Function",
          E = "Number",
          S = "Object",
          T = "Boolean",
          A = Object.prototype.toString,
          I = Boolean(window.console),
          w = Boolean(I && window.console.log),
          C = Boolean(I && window.console.info),
          O = Boolean(I && window.console.warn),
          B = Boolean(I && window.console.error),
          U = function () {
            return null == v && (v = t(2319)), v.emit.apply(v, arguments);
          },
          R = {
            checkCookieSupport: Xe,
            createTrackPixelIframeHtml: Oe,
            getWindowSelf: Y,
            getWindowTop: Z,
            getWindowLocation: J,
            insertUserSyncIframe: we,
            insertElement: Ee,
            isFn: ce,
            triggerPixel: Te,
            logError: ee,
            logWarn: $,
            logMessage: Q,
            logInfo: X,
            parseQS: In,
            formatQS: wn,
            deepEqual: Bn,
            isEmpty: pe,
            skipUndefinedValues: jn
          },
          j = {};
        function D() {
          return j;
        }
        var _,
          k = {},
          P = function (e, n) {
            return n;
          }.bind(null, 1, k)() === k ? Function.prototype.bind : function (e) {
            var n = this,
              t = Array.prototype.slice.call(arguments, 1);
            return function () {
              return n.apply(e, t.concat(Array.prototype.slice.call(arguments)));
            };
          },
          N = (_ = 0, function () {
            return ++_;
          });
        function x() {
          return N() + Math.random().toString(16).substr(2);
        }
        function q(e) {
          return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, q);
        }
        function M(e, n) {
          return n && n[e] ? n[e] : "";
        }
        function G(e, n, t) {
          return t ? e + n + "=" + encodeURIComponent(t) + "&" : e;
        }
        function W(e) {
          var n = "";
          for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
          return n.replace(/&$/, "");
        }
        function F(e) {
          return e && Object.getOwnPropertyNames(e).length > 0 ? De(e).map(function (n) {
            return "".concat(n, "=").concat(encodeURIComponent(_e(e, n)));
          }).join("&") : "";
        }
        function z(e) {
          if (e) {
            var n = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
              var t = e.mediaTypes.banner.sizes;
              Array.isArray(t[0]) ? n = t : n.push(t);
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
            return n;
          }
        }
        function L(e) {
          var n = [];
          if ("string" == typeof e) {
            var t = e.split(","),
              r = /^(\d)+x(\d)+$/i;
            if (t) for (var i in t) he(t, i) && t[i].match(r) && n.push(t[i]);
          } else if ("object" === p(e)) {
            var o = e.length;
            if (o > 0) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) n.push(K(e));else for (var a = 0; a < o; a++) n.push(K(e[a]));
          }
          return n;
        }
        function K(e) {
          if (H(e)) return e[0] + "x" + e[1];
        }
        function V(e) {
          if (H(e)) return {
            w: e[0],
            h: e[1]
          };
        }
        function H(e) {
          return de(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function Z() {
          return window.top;
        }
        function Y() {
          return window.self;
        }
        function J() {
          return window.location;
        }
        function Q() {
          ie() && w && console.log.apply(console, te(arguments, "MESSAGE:"));
        }
        function X() {
          ie() && C && console.info.apply(console, te(arguments, "INFO:"));
        }
        function $() {
          ie() && O && console.warn.apply(console, te(arguments, "WARNING:")), U(y.EVENTS.AUCTION_DEBUG, {
            type: "WARNING",
            arguments: arguments
          });
        }
        function ee() {
          ie() && B && console.error.apply(console, te(arguments, "ERROR:")), U(y.EVENTS.AUCTION_DEBUG, {
            type: "ERROR",
            arguments: arguments
          });
        }
        function ne(e) {
          function n(n) {
            return function () {
              for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
              n.apply(void 0, [e].concat(r));
            };
          }
          return {
            logError: n(ee),
            logWarn: n($),
            logMessage: n(Q),
            logInfo: n(X)
          };
        }
        function te(e, n) {
          e = [].slice.call(e);
          var t = r.vc.getCurrentBidder();
          return n && e.unshift(n), t && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")), e;
          function i(e) {
            return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;");
          }
        }
        function re() {
          return w;
        }
        function ie() {
          return !!r.vc.getConfig("debug");
        }
        function oe() {
          var e = document.createElement("iframe");
          return e.id = x(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e;
        }
        function ae(e) {
          return In(J().search)[e] || "";
        }
        function ue(e, n) {
          return A.call(e) === "[object " + n + "]";
        }
        function ce(e) {
          return ue(e, h);
        }
        function se(e) {
          return ue(e, m);
        }
        function de(e) {
          return ue(e, b);
        }
        function fe(e) {
          return ue(e, E);
        }
        function le(e) {
          return ue(e, S);
        }
        function ge(e) {
          return ue(e, T);
        }
        function pe(e) {
          if (!e) return !0;
          if (de(e) || se(e)) return !(e.length > 0);
          for (var n in e) if (hasOwnProperty.call(e, n)) return !1;
          return !0;
        }
        function ve(e) {
          return se(e) && (!e || 0 === e.length);
        }
        function ye(e, n) {
          if (!pe(e)) {
            if (ce(e.forEach)) return e.forEach(n, this);
            var t = 0,
              r = e.length;
            if (r > 0) for (; t < r; t++) n(e[t], t, e);else for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t);
          }
        }
        function be(e, n) {
          if (pe(e)) return !1;
          if (ce(e.indexOf)) return -1 !== e.indexOf(n);
          for (var t = e.length; t--;) if (e[t] === n) return !0;
          return !1;
        }
        function me(e, n) {
          if (pe(e)) return [];
          if (ce(e.map)) return e.map(n);
          var t = [];
          return ye(e, function (r, i) {
            t.push(n(r, i, e));
          }), t;
        }
        function he(e, n) {
          return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n];
        }
        function Ee(e, n, t, r) {
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
        function Se(e, n) {
          var t = null;
          return new Promise(function (r) {
            var i = function n() {
              e.removeEventListener("load", n), e.removeEventListener("error", n), null != t && window.clearTimeout(t), r();
            };
            e.addEventListener("load", i), e.addEventListener("error", i), null != n && (t = window.setTimeout(i, n));
          });
        }
        function Te(e, n, t) {
          var r = new Image();
          n && R.isFn(n) && Se(r, t).then(n), r.src = e;
        }
        function Ae(e) {
          var n = e.source,
            t = e.burl;
          n === y.S2S.SRC && t && R.triggerPixel(t);
        }
        function Ie(e) {
          if (e) {
            var n = document.createElement("iframe");
            n.id = x(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", R.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close();
          }
        }
        function we(e, n, t) {
          var r = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
            i = document.createElement("div");
          i.innerHTML = r;
          var o = i.firstChild;
          n && R.isFn(n) && Se(o, t).then(n), R.insertElement(o, document, "html", !0);
        }
        function Ce(e) {
          return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' + encodeURI(e) + '"></div>' : "";
        }
        function Oe(e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          return e ? ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(x(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function Be(e, n, t) {
          return null == n ? t : se(n) ? n : fe(n) ? n.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function Ue(e, n, t) {
          return t.indexOf(e) === n;
        }
        function Re(e, n) {
          return e.concat(n);
        }
        function je(e, n) {
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
        function De(e) {
          return Object.keys(e);
        }
        function _e(e, n) {
          return e[n];
        }
        function ke(e, n) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t] === n) return t;
        }
        function Pe() {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : owpbjs.adUnits).map(function (e) {
            return e.bids.map(function (e) {
              return e.bidder;
            }).reduce(Re, []);
          }).reduce(Re, []).filter(Ue);
        }
        function Ne() {
          if (window.googletag && ce(window.googletag.pubads) && ce(window.googletag.pubads().getSlots)) return !0;
        }
        function xe() {
          if (window.apntag && ce(window.apntag.getTag)) return !0;
        }
        var qe = We("timeToRespond", function (e, n) {
            return e > n;
          }),
          Me = We("responseTimestamp", function (e, n) {
            return e > n;
          }),
          Ge = We("responseTimestamp", function (e, n) {
            return e < n;
          });
        function We(e, n) {
          return function (t, r) {
            return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t;
          };
        }
        function Fe(e) {
          for (var n = e.length; n > 0;) {
            var t = Math.floor(Math.random() * n),
              r = e[--n];
            e[n] = e[t], e[t] = r;
          }
          return e;
        }
        function ze(e, n) {
          return (0, a.q9)(e, n && n.adUnitCode);
        }
        function Le(e) {
          return o()(e);
        }
        function Ke() {
          try {
            return R.getWindowSelf() !== R.getWindowTop();
          } catch (e) {
            return !0;
          }
        }
        function Ve() {
          return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
        }
        function He(e, n) {
          if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n);
        }
        function Ze(e, n) {
          if (e && n && "string" == typeof n) return e.replace(/\${CLICKTHROUGH}/g, n);
        }
        function Ye() {
          return new Date().getTime();
        }
        function Je() {
          return window.performance && window.performance.now && window.performance.now() || 0;
        }
        function Qe() {
          return !1 !== r.vc.getConfig("deviceAccess");
        }
        function Xe() {
          if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        function $e(e, n) {
          if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
          var t = 0;
          return function () {
            ++t === n && e.apply(this, arguments);
          };
        }
        function en(e, n) {
          return e.reduce(function (e, t) {
            return (e[t[n]] = e[t[n]] || []).push(t), e;
          }, {});
        }
        function nn(e, n) {
          return n.filter(function (n) {
            return e[n];
          }).reduce(function (n, t) {
            return g(n, l({}, t, e[t]));
          }, {});
        }
        function tn(e) {
          var n = ["banner", "native", "video"];
          return !!Object.keys(e).every(function (e) {
            return (0, a.q9)(n, e);
          }) && (!e.video || !e.video.context || (0, a.q9)(["instream", "outstream", "adpod"], e.video.context));
        }
        function rn(e, n, t) {
          return e.filter(function (e) {
            return e.code === n;
          }).map(function (e) {
            return e.bids;
          }).reduce(Re, []).filter(function (e) {
            return e.bidder === t;
          }).map(function (e) {
            return e.params || {};
          });
        }
        function on() {
          return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }
        function an() {
          return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
        }
        var un = function (e, n) {
          return e.getAdUnitPath() === n || e.getSlotElementId() === n;
        };
        function cn(e) {
          return function (n) {
            return un(e, n);
          };
        }
        function sn(e) {
          return function (n) {
            return un(n, e);
          };
        }
        function dn(e) {
          var n;
          return Ne() && (n = (0, a.sE)(window.googletag.pubads().getSlots(), sn(e))), n ? {
            gptSlot: n.getAdUnitPath(),
            divId: n.getSlotElementId()
          } : {};
        }
        function fn(e, n) {
          var t = Object.keys(e.mediaTypes || {
            banner: "banner"
          }).join(", ");
          return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ");
        }
        function ln(e) {
          return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function gn(e) {
          return e.replace(/(?:^|\.?)([A-Z])/g, function (e, n) {
            return "_" + n.toLowerCase();
          }).replace(/^_/, "");
        }
        function pn(e) {
          return Object.keys(e).reduce(function (n, t) {
            return void 0 !== e[t] && (n[t] = e[t]), n;
          }, {});
        }
        function vn(e, n) {
          return "object" !== p(e) ? {} : n.reduce(function (t, r, i) {
            if ("function" == typeof r) return t;
            var o = r,
              a = r.match(/^(.+?)\sas\s(.+?)$/i);
            a && (r = a[1], o = a[2]);
            var u = e[r];
            return "function" == typeof n[i + 1] && (u = n[i + 1](u, t)), void 0 !== u && (t[o] = u), t;
          }, {});
        }
        function yn(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
            t = [];
          return ye(e, function (e, r) {
            if (de(e)) {
              var i = [];
              ye(e, function (e) {
                ((e = Be(n + "." + r, e)) || "" === e) && i.push(e);
              }), e = i;
            } else {
              if (!se(e = Be(n + "." + r, e))) return;
              e = [e];
            }
            t.push({
              key: r,
              value: e
            });
          }), t;
        }
        function bn(e, n) {
          return Object.keys(e).forEach(function (t) {
            var r, i;
            n[t] && (ce(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key);
          }), n;
        }
        function mn(e, n) {
          return de(e) && (!n || e.length === n) && e.every(function (e) {
            return ln(e);
          });
        }
        function hn(e, n) {
          for (var t = [], r = 0; r < n; r++) {
            var i = le(e) ? Le(e) : e;
            t.push(i);
          }
          return t;
        }
        function En(e, n) {
          for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
            var i = r * n,
              o = i + n;
            t.push(e.slice(i, o));
          }
          return t;
        }
        function Sn(e) {
          return Math.min.apply(Math, s(e));
        }
        function Tn(e) {
          return Math.max.apply(Math, s(e));
        }
        function An(e) {
          return function (n, t) {
            return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0;
          };
        }
        function In(e) {
          return e ? e.replace(/^\?/, "").split("&").reduce(function (e, n) {
            var t,
              r = (2, function (e) {
                if (Array.isArray(e)) return e;
              }(t = n.split("=")) || function (e, n) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    c = !0,
                    s = !1;
                  try {
                    for (o = (t = t.call(e)).next, 0; !(c = (r = o.call(t)).done) && (u.push(r.value), 2 !== u.length); c = !0);
                  } catch (e) {
                    s = !0, i = e;
                  } finally {
                    try {
                      if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return;
                    } finally {
                      if (s) throw i;
                    }
                  }
                  return u;
                }
              }(t) || d(t, 2) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()),
              i = r[0],
              o = r[1];
            return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i].push(o)) : e[i] = o || "", e;
          }, {}) : {};
        }
        function wn(e) {
          return Object.keys(e).map(function (n) {
            return Array.isArray(e[n]) ? e[n].map(function (e) {
              return "".concat(n, "[]=").concat(e);
            }).join("&") : "".concat(n, "=").concat(e[n]);
          }).join("&");
        }
        function Cn(e, n) {
          var t = document.createElement("a");
          n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
          var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
          return {
            href: t.href,
            protocol: (t.protocol || "").replace(/:$/, ""),
            hostname: t.hostname,
            port: +t.port,
            pathname: t.pathname.replace(/^(?!\/)/, "/"),
            search: r ? t.search : R.parseQS(t.search || ""),
            hash: (t.hash || "").replace(/^#/, ""),
            host: t.host || window.location.host
          };
        }
        function On(e) {
          return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        }
        function Bn(e, n) {
          var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).checkTypes,
            r = void 0 !== t && t;
          if (e === n) return !0;
          if ("object" !== p(e) || null === e || "object" !== p(n) || null === n || r && e.constructor !== n.constructor) return !1;
          if (Object.keys(e).length !== Object.keys(n).length) return !1;
          for (var i in e) {
            if (!n.hasOwnProperty(i)) return !1;
            if (!Bn(e[i], n[i], {
              checkTypes: r
            })) return !1;
          }
          return !0;
        }
        function Un(e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
          if (!t.length) return e;
          var i = t.shift();
          if (le(e) && le(i)) {
            var o = function (n) {
              le(i[n]) ? (e[n] || g(e, l({}, n, {})), Un(e[n], i[n])) : de(i[n]) ? e[n] ? de(e[n]) && i[n].forEach(function (t) {
                for (var r = 1, i = 0; i < e[n].length; i++) if (Bn(e[n][i], t)) {
                  r = 0;
                  break;
                }
                r && e[n].push(t);
              }) : g(e, l({}, n, s(i[n]))) : g(e, l({}, n, i[n]));
            };
            for (var a in i) o(a);
          }
          return Un.apply(void 0, [e].concat(t));
        }
        function Rn(e) {
          for (var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, n) {
              if (ce(Math.imul)) return Math.imul(e, n);
              var t = (4194303 & e) * (n |= 0);
              return 4290772992 & e && (t += (4290772992 & e) * n | 0), 0 | t;
            }, i = 3735928559 ^ t, o = 1103547991 ^ t, a = 0; a < e.length; a++) i = r(i ^ (n = e.charCodeAt(a)), 2654435761), o = r(o ^ n, 1597334677);
          return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
        }
        function jn(e) {
          var n,
            t = {};
          for (n in e) e[n] && (t[n] = e[n]);
          return t;
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
            return c;
          },
          hD: function () {
            return f;
          }
        });
        var r = t(265),
          i = t(9853),
          o = t(8962),
          a = t(3494),
          u = t(4766),
          c = "outstream",
          s = "instream";
        function d(e) {
          var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
            t = void 0 === n ? u.K.index : n,
            i = (0, r.Z)(t.getMediaTypes(e), "video"),
            o = i && (0, r.Z)(i, "context"),
            a = t.getAdUnit(e);
          return f(e, a, i, o);
        }
        var f = (0, a.z3)("sync", function (e, n, t, r) {
          return t && r !== c ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with owpbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || n && n.renderer || t.renderer);
        }, "checkVideoBidSetup");
      },
      905: function (e, n, t) {
        "use strict";

        t.d(n, {
          h: function () {
            return u;
          },
          z: function () {
            return c;
          }
        });
        var r = t(5755),
          i = t(8962),
          o = t(4766);
        function a(e) {
          var n,
            t,
            r,
            a = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
            u = void 0 === a ? o.K.index : a,
            c = e.vastXml ? e.vastXml : (n = e.vastUrl, r = (t = e.vastImpUrl) ? "<![CDATA[".concat(t, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(n, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
            s = u.getAuction(e);
          window && window.PWT && (c = window.PWT.UpdateVastWithTracker(e, c));
          var d = {
            type: "xml",
            value: c,
            ttlseconds: Number(e.ttl)
          };
          return i.vc.getConfig("cache.vasttrack") && (d.bidder = e.bidder, d.bidid = e.requestId, d.aid = e.auctionId), null != s && (d.timestamp = s.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (d.key = e.customCacheKey), d;
        }
        function u(e, n) {
          var t = {
            puts: e.map(a)
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
        function c(e) {
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
        u.SYNC = 1, u.ASYNC = 2, u.QUEUE = 4;
        var n = "fun-hooks",
          t = Object.freeze({
            useProxy: !0,
            ready: 0
          }),
          r = new WeakMap(),
          i = "2,1,0" === [1].reduce(function (e, n, t) {
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
        function o(e, n) {
          return Array.prototype.slice.call(e, n);
        }
        var a = Object.assign || function (e) {
          return i.call(o(arguments, 1), function (e, n) {
            return n && Object.keys(n).forEach(function (t) {
              e[t] = n[t];
            }), e;
          }, e);
        };
        function u(e) {
          var c,
            s = {},
            d = [];
          function f(e, n) {
            return "function" == typeof e ? v.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? v.apply(null, arguments) : "object" == typeof e ? l.apply(null, arguments) : void 0;
          }
          function l(e, n, t) {
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
                  var u = e[o];
                  i[o] = e[o] = v(a, u, t ? [t, o] : void 0);
                }
              }), e = Object.getPrototypeOf(e);
            } while (r && e);
            return i;
          }
          function g(e) {
            var t = Array.isArray(e) ? e : e.split(".");
            return i.call(t, function (r, i, o) {
              var a = r[i],
                u = !1;
              return a || (o === t.length - 1 ? (c || d.push(function () {
                u || console.warn(n + ": referenced '" + e + "' but it was never created");
              }), r[i] = p(function (e) {
                r[i] = e, u = !0;
              })) : r[i] = {});
            }, s);
          }
          function p(e) {
            var n = [],
              t = [],
              i = function () {},
              o = {
                before: function (e, t) {
                  return c.call(this, n, "before", e, t);
                },
                after: function (e, n) {
                  return c.call(this, t, "after", e, n);
                },
                getHooks: function (e) {
                  var r = n.concat(t);
                  "object" == typeof e && (r = r.filter(function (n) {
                    return Object.keys(e).every(function (t) {
                      return n[t] === e[t];
                    });
                  }));
                  try {
                    a(r, {
                      remove: function () {
                        return r.forEach(function (e) {
                          e.remove();
                        }), this;
                      }
                    });
                  } catch (e) {
                    console.error("error adding `remove` to array, did you modify Array.prototype?");
                  }
                  return r;
                },
                removeAll: function () {
                  return this.getHooks().remove();
                }
              },
              u = {
                install: function (r, o, a) {
                  this.type = r, i = a, a(n, t), e && e(o);
                }
              };
            return r.set(o.after, u), o;
            function c(e, r, o, a) {
              var u = {
                hook: o,
                type: r,
                priority: a || 10,
                remove: function () {
                  var r = e.indexOf(u);
                  -1 !== r && (e.splice(r, 1), i(n, t));
                }
              };
              return e.push(u), e.sort(function (e, n) {
                return n.priority - e.priority;
              }), i(n, t), this;
            }
          }
          function v(t, i, s) {
            var f = i.after && r.get(i.after);
            if (f) {
              if (f.type !== t) throw n + ": recreated hookable with different type";
              return i;
            }
            var l,
              v,
              y = s ? g(s) : p(),
              b = {
                get: function (e, n) {
                  return y[n] || Reflect.get.apply(Reflect, arguments);
                }
              };
            return c || d.push(m), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? v = new Proxy(i, b) : (v = function () {
              return b.apply ? b.apply(i, this, o(arguments)) : i.apply(this, arguments);
            }, a(v, y)), r.get(v.after).install(t, v, function (e, n) {
              var r,
                i = [];
              function a(e) {
                i.push(e.hook);
              }
              e.length || n.length ? (e.forEach(a), r = i.push(void 0) - 1, n.forEach(a), l = function (e, n, a) {
                var u,
                  c = 0,
                  s = "async" === t && "function" == typeof a[a.length - 1] && a.pop();
                function d(e) {
                  "sync" === t ? u = e : s && s.apply(null, arguments);
                }
                function f(e) {
                  if (i[c]) {
                    var r = o(arguments);
                    return f.bail = d, r.unshift(f), i[c++].apply(n, r);
                  }
                  "sync" === t ? u = e : s && s.apply(null, arguments);
                }
                return i[r] = function () {
                  var r = o(arguments, 1);
                  "async" === t && s && (delete f.bail, r.push(f));
                  var i = e.apply(n, r);
                  "sync" === t && f(i);
                }, f.apply(null, a), u;
              }) : l = void 0, m();
            }), v;
            function m() {
              !c && ("sync" !== t || e.ready & u.SYNC) && ("async" !== t || e.ready & u.ASYNC) ? "sync" !== t && e.ready & u.QUEUE ? b.apply = function () {
                var e = arguments;
                d.push(function () {
                  v.apply(e[1], e[2]);
                });
              } : b.apply = function () {
                throw n + ": hooked function not ready";
              } : b.apply = l;
            }
          }
          return (e = a({}, t, e)).ready ? f.ready = function () {
            c = !0, function (e) {
              for (var n; n = e.shift();) n();
            }(d);
          } : c = !0, f.get = g, f;
        }
        e.exports = u;
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

        e.exports = JSON.parse('{"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"STATUS":"pwtbst","BIDDER":"pwtpid","AD_ID":"pwtsid","PRICE_BUCKET":"pwtecp","SIZE":"pwtsz","DEAL":"pwtdeal","DEAL_ID":"pwtdid","SOURCE":"","FORMAT":"pwtplt","UUID":"pwtuuid","CACHE_ID":"pwtcid","CACHE_HOST":"pwtcurl","ADOMAIN":"pwtadomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"pwt_native_title","body":"pwt_native_body","body2":"pwt_native_body2","privacyLink":"pwt_native_privacy","sponsoredBy":"pwt_native_brand","image":"pwt_native_image","icon":"pwt_native_icon","clickUrl":"pwt_native_linkurl","displayUrl":"pwt_native_displayurl","cta":"pwt_native_cta","rating":"pwt_native_rating","address":"pwt_native_address","downloads":"pwt_native_downloads","likes":"pwt_native_likes","phone":"pwt_native_phone","price":"pwt_native_price","salePrice":"pwt_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"},"REFRESH_IDMODULES_LIST":{"PRIMARY_MODULES":["id5Id","publinkId"],"SCRIPT_BASED_MODULES":["zeotapIdPlus","identityLink","publinkId"]},"MODULE_PARAM_TO_UPDATE_FOR_SSO":{"id5Id":[{"key":"pd"}],"publinkId":[{"key":"e","hashType":"MD5"}]}}');
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
        for (var u = !0, c = 0; c < t.length; c++) (!1 & o || a >= o) && Object.keys(r.O).every(function (e) {
          return r.O[e](t[c]);
        }) ? t.splice(c--, 1) : (u = !1, o < a && (a = o));
        if (u) {
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
          u = t[1],
          c = t[2],
          s = 0;
        if (a.some(function (n) {
          return 0 !== e[n];
        })) {
          for (i in u) r.o(u, i) && (r.m[i] = u[i]);
          if (c) var d = c(r);
        }
        for (n && n(t); s < a.length; s++) o = a[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return r.O(d);
      },
      t = self.owpbjsChunk = self.owpbjsChunk || [];
    t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t));
  }();
  var i = r(2786);
  i = r.O(i);
}();
"use strict";
const nativeFetch = window.fetch;
(self.owpbjsChunk = self.owpbjsChunk || []).push([[4871], {
  8649: function (e, t, n) {
    var i = n(9853),
      r = n(265),
      o = n(4892),
      a = n(2786),
      d = n(1929),
      u = n(3494),
      c = n(905),
      l = n(8962),
      s = n(8265),
      f = n(1879),
      v = n(4766),
      g = n(5644);
    function h(e) {
      return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, h(e);
    }
    function p() {
      return p = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }, p.apply(this, arguments);
    }
    function b(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== h(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, "string");
            if ("object" !== h(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === h(t) ? t : String(t);
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function y(e, t) {
      if (e) {
        if ("string" == typeof e) return m(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
      }
    }
    function m(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    var T = "hb_pb_cat_dur",
      C = "hb_cache_id",
      S = 50,
      E = 5,
      I = function () {
        var e = {};
        return {
          addBid: function (t) {
            e[t.auctionId] || function (t) {
              var n, r, o;
              e[t] = {}, e[t].bidStorage = new Set(), e[t].queueDispatcher = (n = S, o = 1, function (e, t, i, a) {
                var d = this,
                  u = function () {
                    D.call(d, e, t, i);
                  };
                clearTimeout(r), a ? o = 1 : o === E ? (o = 1, u()) : (o++, r = setTimeout(u, n));
              }), e[t].initialCacheKey = (0, i.generateUUID)();
            }(t.auctionId), e[t.auctionId].bidStorage.add(t);
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
    function w(e, t) {
      var n,
        i = I.getInitialCacheKey(e),
        a = (0, r.Z)(e, "video.durationBucket"),
        d = function (e) {
          var t;
          if (l.vc.getConfig("adpod.prioritizeDeals") && (0, r.Z)(e, "video.dealTier")) {
            var n = l.vc.getConfig("adpod.dealTier.".concat(e.bidderCode, ".prefix"));
            t = n ? n + (0, r.Z)(e, "video.dealTier") : (0, r.Z)(e, "video.dealTier");
          } else {
            var i = (0, o.RH)(e);
            t = (0, o.dg)(i)(e);
          }
          return t;
        }(e);
      if (t) {
        var u = (0, r.Z)(e, "meta.adServerCatId");
        n = "".concat(d, "_").concat(u, "_").concat(a, "s");
      } else n = "".concat(d, "_").concat(a, "s");
      e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[T] = n, e.adserverTargeting[C] = i, e.videoCacheKey = i, e.customCacheKey = "".concat(n, "_").concat(i);
    }
    function D(e, t, n) {
      !function (e) {
        for (var t = 0; t < e.length; t++) I.removeBid(e[t]);
      }(t), (0, c.h)(t, function (r, a) {
        if (r) {
          (0, i.logWarn)("Failed to save to the video cache: ".concat(r, ". Video bid(s) must be discarded."));
          for (var d = 0; d < t.length; d++) (0, o.sq)(e, t[d]);
        } else for (var u = 0; u < a.length; u++) "" !== a[u].uuid ? (0, o.lU)(e, t[u]) : (0, i.logInfo)("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(t[u].customCacheKey, ". Bid was: "), t[u]), n();
      });
    }
    function U(e, t) {
      return e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket < t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? 1 : e.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket > t.adserverTargeting[g.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? -1 : 0;
    }
    l.vc.getConfig("adpod", function (e) {
      return function (e) {
        void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && e.bidQueueTimeDelay > 0 ? S = e.bidQueueTimeDelay : (0, i.logWarn)("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(S))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && e.bidQueueSizeLimit > 0 ? E = e.bidQueueSizeLimit : (0, i.logWarn)("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(E)));
      }(e.adpod);
    }), (0, u.o0)(o.D$, function (e, t, n, a, d) {
      if (d && d.context === s.Oh) {
        var u = l.vc.getConfig("adpod.brandCategoryExclusion");
        !(0, r.Z)(n, "meta.adServerCatId") && u ? ((0, i.logWarn)("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), a()) : !1 === l.vc.getConfig("adpod.deferCaching") ? (I.addBid(n), w(n, u), function (e, t, n) {
          var r = I.getBids(t);
          if (r) {
            var a = (0, f.Oc)(r),
              d = I.getQueueDispatcher(t),
              u = !(e.getAuctionStatus() === o.Yw);
            d(e, a, n, u);
          } else (0, i.logWarn)("Attempted to cache a bid from an unknown auction. Bid:", t);
        }(t, n, a)) : (I.setupInitialCacheKey(n), w(n, u), (0, o.lU)(t, n), a());
      } else e.call(this, t, n, a, d);
    }), (0, u.o0)(a.O5, function (e, t) {
      var n = t.filter(function (e) {
        var t = (0, r.Z)(e, "mediaTypes"),
          n = (0, r.Z)(t, "video");
        if (n && n.context === s.Oh) {
          if (Object.keys(t).length > 1) return (0, i.logWarn)("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
          var o = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
            a = !!(n.playerSize && ((0, i.isArrayOfNums)(n.playerSize, 2) || (0, i.isArray)(n.playerSize) && n.playerSize.every(function (e) {
              return (0, i.isArrayOfNums)(e, 2);
            })) || n.sizeConfig),
            d = !!(n.adPodDurationSec && (0, i.isNumber)(n.adPodDurationSec) && n.adPodDurationSec > 0),
            u = !!(n.durationRangeSec && (0, i.isArrayOfNums)(n.durationRangeSec) && n.durationRangeSec.every(function (e) {
              return e > 0;
            }));
          if (!a || !d || !u) return o += a ? "" : "\nmediaTypes.video.playerSize", o += d ? "" : "\nmediaTypes.video.adPodDurationSec", o += u ? "" : "\nmediaTypes.video.durationRangeSec", (0, i.logWarn)(o), !1;
        }
        return !0;
      });
      t = n, e.call(this, t);
    }), (0, u.o0)(d.hD, function (e, t, n, o, a) {
      if (a === s.Oh) {
        var d = !0;
        if (l.vc.getConfig("adpod.brandCategoryExclusion") && !(0, r.Z)(t, "meta.primaryCatId") && (d = !1), (0, r.Z)(t, "video")) if ((0, r.Z)(t, "video.context") && t.video.context === s.Oh || (d = !1), !(0, r.Z)(t, "video.durationSeconds") || t.video.durationSeconds <= 0) d = !1;else {
          var u = function (e, t) {
            var n,
              o = (0, r.Z)(t, "video.durationSeconds"),
              a = e.durationRangeSec;
            if (a.sort(function (e, t) {
              return e - t;
            }), e.requireExactDuration) {
              if (!(0, f.sE)(a, function (e) {
                return e === o;
              })) return (0, i.logWarn)("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
              t.video.durationBucket = o;
            } else {
              var d = Math.max.apply(Math, function (e) {
                if (Array.isArray(e)) return m(e);
              }(n = a) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
              }(n) || y(n) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }());
              if (!(o <= d + 2)) return (0, i.logWarn)("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
              var u = (0, f.sE)(a, function (e) {
                return e + 2 >= o;
              });
              t.video.durationBucket = u;
            }
            return !0;
          }(o, t);
          u || (d = !1);
        }
        l.vc.getConfig("cache.url") || !t.vastXml || t.vastUrl || ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), d = !1), e.bail(d);
      } else e.call(this, t, n, o, a);
    });
    var A = {
      TARGETING_KEY_PB_CAT_DUR: T,
      TARGETING_KEY_CACHE_ID: C,
      getTargeting: function () {
        var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.codes,
          o = t.callback;
        if (o) {
          var a = function (e) {
              return v.K.getAdUnits().filter(function (e) {
                return (0, r.Z)(e, "mediaTypes.video.context") === s.Oh;
              }).filter(function (t) {
                return !(e.length > 0) || -1 != e.indexOf(t.code);
              });
            }(n = n || []),
            d = v.K.getBidsReceived(),
            u = l.vc.getConfig("adpod.brandCategoryExclusion"),
            f = l.vc.getConfig("adpod.deferCaching"),
            g = "boolean" != typeof f || f,
            h = function (e, t) {
              var n = t.map(function (e) {
                return e.code;
              });
              return e.filter(function (e) {
                return -1 != n.indexOf(e.adUnitCode) && e.video && e.video.context === s.Oh;
              });
            }(d, a);
          if (h = u || g ? function (e) {
            var t = e.map(function (e) {
              return p({}, e, b({}, T, e.adserverTargeting[T]));
            });
            t = (0, i.groupBy)(t, T);
            var n = [];
            return Object.keys(t).forEach(function (e) {
              t[e].sort((0, i.compareOn)("responseTimestamp")), n.push(t[e][0]);
            }), n;
          }(h) : h, l.vc.getConfig("adpod.prioritizeDeals")) {
            var m = (e = h.reduce(function (e, t) {
                var n = (0, r.Z)(t, "video.dealTier"),
                  i = l.vc.getConfig("adpod.dealTier.".concat(t.bidderCode, ".minDealTier"));
                return i && n ? n >= i ? e[1].push(t) : e[0].push(t) : n ? e[1].push(t) : e[0].push(t), e;
              }, [[], []]), 2, function (e) {
                if (Array.isArray(e)) return e;
              }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                  var i,
                    r,
                    o,
                    a,
                    d = [],
                    u = !0,
                    c = !1;
                  try {
                    for (o = (n = n.call(e)).next, 0; !(u = (i = o.call(n)).done) && (d.push(i.value), 2 !== d.length); u = !0);
                  } catch (e) {
                    c = !0, r = e;
                  } finally {
                    try {
                      if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return;
                    } finally {
                      if (c) throw r;
                    }
                  }
                  return d;
                }
              }(e) || y(e, 2) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()),
              S = m[0],
              E = m[1];
            E.sort(U), S.sort(U), h = E.concat(S);
          } else h.sort(U);
          var I = {};
          if (!1 === g) a.forEach(function (e) {
            var t = [],
              n = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
            h.filter(function (t) {
              return t.adUnitCode === e.code;
            }).forEach(function (e, i, r) {
              e.video.durationBucket <= n && (t.push(b({}, T, e.adserverTargeting[T])), n -= e.video.durationBucket), i === r.length - 1 && t.length > 0 && t.push(b({}, C, e.adserverTargeting[C]));
            }), I[e.code] = t;
          }), o(null, I);else {
            var w = [];
            a.forEach(function (e) {
              var t = (0, r.Z)(e, "mediaTypes.video.adPodDurationSec");
              h.filter(function (t) {
                return t.adUnitCode === e.code;
              }).forEach(function (e) {
                e.video.durationBucket <= t && (w.push(e), t -= e.video.durationBucket);
              });
            }), function (e, t) {
              (0, c.h)(e, function (n, i) {
                if (n) t(n, null);else {
                  for (var r = [], o = 0; o < i.length; o++) "" !== i[o] && r.push(e[o]);
                  t(null, r);
                }
              });
            }(w, function (e, t) {
              if (e) o(e, null);else {
                var n = (0, i.groupBy)(t, "adUnitCode");
                Object.keys(n).forEach(function (e) {
                  var t = [];
                  n[e].forEach(function (e, n, i) {
                    t.push(b({}, T, e.adserverTargeting[T])), n === i.length - 1 && t.length > 0 && t.push(b({}, C, e.adserverTargeting[C]));
                  }), I[e] = t;
                }), o(null, I);
              }
            });
          }
          return I;
        }
        (0, i.logError)("No callback function was defined in the getTargeting call.  Aborting getTargeting().");
      }
    };
    Object.freeze(A), (0, u.bA)("adpod", function () {
      (0, i.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0]) ? function (e, t) {
        for (var n in t) e[n] = t[n];
      }(arguments.length <= 0 ? void 0 : arguments[0], A) : (0, i.logError)("Adpod module needs plain object to share methods with submodule");
    }), window.owpbjs.installedModules.push("adpod");
  }
}, function (e) {
  e(e.s = 8649);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[1266], {
  1654: function (n, t, e) {
    var o = e(9853),
      a = e(8962),
      i = e(7602),
      r = e(1879);
    function s(n) {
      return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n;
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, s(n);
    }
    function c(n, t, e) {
      return (t = function (n) {
        var t = function (n, t) {
          if ("object" !== s(n) || null === n) return n;
          var e = n[Symbol.toPrimitive];
          if (void 0 !== e) {
            var o = e.call(n, "string");
            if ("object" !== s(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        }(n);
        return "symbol" === s(t) ? t : String(t);
      }(t)) in n ? Object.defineProperty(n, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : n[t] = e, n;
    }
    var l,
      d,
      u,
      f,
      p,
      g = !0,
      m = {
        value: g,
        definedInConfig: !1
      },
      C = 0,
      v = !1,
      b = {
        iab: function (n, t, e) {
          function a(a, i) {
            (0, o.logInfo)("Received a response from CMP", a), i ? !1 !== a.gdprApplies && "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus || n(a, e) : t("CMP unable to register callback function.  Please check CMP setup.", e);
          }
          var i = function () {
              var t = {};
              function a() {
                t.getConsentData && t.getVendorConsents && ((0, o.logInfo)("Received all requested responses from CMP", t), n(t, e));
              }
              return {
                consentDataCallback: function (n) {
                  t.getConsentData = n, a();
                },
                vendorConsentsCallback: function (n) {
                  t.getVendorConsents = n, a();
                }
              };
            }(),
            s = {},
            l = function () {
              for (var n, t, e = window; !n;) {
                try {
                  if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                    "function" == typeof e.__tcfapi ? (C = 2, t = e.__tcfapi) : (C = 1, t = e.__cmp), n = e;
                    break;
                  }
                } catch (n) {}
                try {
                  if (e.frames.__tcfapiLocator) {
                    C = 2, n = e;
                    break;
                  }
                } catch (n) {}
                try {
                  if (e.frames.__cmpLocator) {
                    C = 1, n = e;
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
            d = l.cmpFrame,
            u = l.cmpFunction;
          if (!d) return t("CMP not found.", e);
          function f(n, t) {
            var a = e.adUnits,
              i = 1,
              r = 1;
            if (Array.isArray(a) && a.length > 0) {
              var s = (0, o.getAdUnitSizes)(a[0]);
              i = s[0][0], r = s[0][1];
            }
            window.$sf.ext.register(i, r, function (e, o) {
              if ("cmpReturn" === e) {
                var a = "getConsentData" === n ? o.vendorConsentData : o.vendorConsents;
                t(a);
              }
            }), window.$sf.ext.cmp(n);
          }
          function p(n, t, e) {
            var o = 2 === C ? "__tcfapi" : "__cmp",
              a = "".concat(o, "Call");
            function i(n) {
              var t = "".concat(o, "Return"),
                e = "string" == typeof n.data && (0, r.q9)(n.data, t) ? JSON.parse(n.data) : n.data;
              if (e[t] && e[t].callId) {
                var a = e[t];
                void 0 !== s[a.callId] && s[a.callId](a.returnValue, a.success);
              }
            }
            2 === C ? (window[o] = function (n, e, o, i) {
              var r = Math.random() + "",
                l = c({}, a, {
                  command: n,
                  version: e,
                  parameter: i,
                  callId: r
                });
              s[r] = o, t.postMessage(l, "*");
            }, window.addEventListener("message", i, !1), window[o](n, C, e)) : (window[o] = function (n, e, o) {
              var i = Math.random() + "",
                r = c({}, a, {
                  command: n,
                  parameter: e,
                  callId: i
                });
              s[i] = o, t.postMessage(r, "*");
            }, window.addEventListener("message", i, !1), window[o](n, void 0, e));
          }
          (0, o.isFn)(u) ? ((0, o.logInfo)("Detected CMP API is directly accessible, calling it now..."), 1 === C ? (u("getConsentData", null, i.consentDataCallback), u("getVendorConsents", null, i.vendorConsentsCallback)) : 2 === C && u("addEventListener", C, a)) : 1 === C && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? ((0, o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), f("getConsentData", i.consentDataCallback), f("getVendorConsents", i.vendorConsentsCallback)) : ((0, o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === C ? (p("getConsentData", d, i.consentDataCallback), p("getVendorConsents", d, i.vendorConsentsCallback)) : 2 === C && p("addEventListener", d, a));
        },
        static: function (n, t, e) {
          n(f, e);
        }
      };
    function w(n, t) {
      var e = {
        context: this,
        args: [t],
        nextFn: n,
        adUnits: t.adUnits || owpbjs.adUnits,
        bidsBackHandler: t.bidsBackHandler,
        haveExited: !1,
        timer: null
      };
      return p ? ((0, o.logInfo)("User consent information already known.  Pulling internally stored information..."), M(null, e)) : (0, r.q9)(Object.keys(b), l) ? (b[l].call(this, y, h, e), void (e.haveExited || (0 === d ? y(void 0, e) : e.timer = setTimeout(D.bind(null, e), d)))) : ((0, o.logWarn)("CMP framework (".concat(l, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), i.rp.setConsentData(null), e.nextFn.apply(e.context, e.args));
    }
    function y(n, t) {
      "static" === l && 2 == (C = n.getConsentData ? 1 : n.getTCData ? 2 : 0) && (n = n.getTCData);
      var e = 1 === C ? function (n) {
        var t = n && n.getConsentData && n.getConsentData.gdprApplies;
        return !("boolean" == typeof t && (!0 !== t || (0, o.isStr)(n.getConsentData.consentData) && (0, o.isPlainObject)(n.getVendorConsents) && Object.keys(n.getVendorConsents).length > 1));
      } : 2 === C ? function () {
        var t = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : u,
          e = n && n.tcString;
        return !("boolean" == typeof t && (!0 !== t || (0, o.isStr)(e)));
      } : null;
      m.definedInConfig && 2 === C ? (0, o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2") : m.definedInConfig || 1 !== C || (0, o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(g, ").")), (0, o.isFn)(e) ? e(n) ? h("CMP returned unexpected value during lookup process.", t, n) : (clearTimeout(t.timer), k(n), M(null, t)) : h("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", t, n);
    }
    function D(n) {
      2 === C ? ((0, o.logWarn)("No response from CMP, continuing auction..."), k(void 0), M(null, n)) : h("CMP workflow exceeded timeout threshold.", n);
    }
    function h(n, t, e) {
      clearTimeout(t.timer), m.value && 1 === C && k(void 0), M(n, t, e);
    }
    function k(n) {
      1 === C ? p = {
        consentString: n ? n.getConsentData.consentData : void 0,
        vendorData: n ? n.getVendorConsents : void 0,
        gdprApplies: n ? n.getConsentData.gdprApplies : u
      } : (p = {
        consentString: n ? n.tcString : void 0,
        vendorData: n || void 0,
        gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : u
      }, n && n.addtlConsent && (0, o.isStr)(n.addtlConsent) && (p.addtlConsent = n.addtlConsent)), p.apiVersion = C, i.rp.setConsentData(p);
    }
    function M(n, t, e) {
      if (!1 === t.haveExited) {
        t.haveExited = !0;
        var a = t.context,
          r = t.args,
          s = t.nextFn;
        n ? m.value && 1 === C ? ((0, o.logWarn)(n + " 'allowAuctionWithoutConsent' activated.", e), s.apply(a, r)) : ((0, o.logError)(n + " Canceling auction as per consentManagement config.", e), i.rp.setConsentData(null), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : (0, o.logError)("Error executing bidsBackHandler")) : s.apply(a, r);
      }
    }
    a.vc.getConfig("consentManagement", function (n) {
      return function (n) {
        (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === s(n) ? ((0, o.isStr)(n.cmpApi) ? l = n.cmpApi : (l = "iab", (0, o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), (0, o.isNumber)(n.timeout) ? d = n.timeout : (d = 1e4, (0, o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (m.value = n.allowAuctionWithoutConsent, m.definedInConfig = !0), u = !0 === n.defaultGdprScope, (0, o.logInfo)("consentManagement module has been activated..."), i.rp.enable(), "static" === l && ((0, o.isPlainObject)(n.consentData) ? (f = n.consentData, d = 0) : (0, o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), v || owpbjs.requestBids.before(w, 50), v = !0) : (0, o.logWarn)("consentManagement config not defined, exiting consent manager");
      }(n.consentManagement);
    }), window.owpbjs.installedModules.push("consentManagement");
  }
}, function (n) {
  n(n.s = 1654);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[5160], {
  1366: function (n, t, e) {
    var a = e(9853),
      o = e(8962),
      i = e(7602);
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
          var o,
            i = (o = {}, {
              consentDataCallback: function (a, i) {
                i && a.uspString && (o.usPrivacy = a.uspString), o.usPrivacy ? n(o, e) : t("Unable to get USP consent string.", e);
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
          (0, a.isFn)(r) ? ((0, a.logInfo)("Detected USP CMP is directly accessible, calling it now..."), r("getUSPData", 1, i.consentDataCallback)) : ((0, a.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."), function (n, t, e) {
            window.__uspapi = function (n, e, a) {
              var o = Math.random() + "",
                i = {
                  __uspapiCall: {
                    command: n,
                    version: e,
                    callId: o
                  }
                };
              s[o] = a, t.postMessage(i, "*");
            }, window.addEventListener("message", function (n) {
              var t = n && n.data && n.data.__uspapiReturn;
              t && t.callId && void 0 !== s[t.callId] && (s[t.callId](t.returnValue, t.success), delete s[t.callId]);
            }, !1), window.__uspapi("getUSPData", 1, e);
          }(0, u, i.consentDataCallback));
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
        adUnits: t.adUnits || owpbjs.adUnits,
        bidsBackHandler: t.bidsBackHandler,
        haveExited: !1,
        timer: null
      };
      if (!d[c]) return (0, a.logWarn)("USP framework (".concat(c, ") is not a supported framework. Aborting consentManagement module and resuming auction.")), i.nX.setConsentData(null), e.nextFn.apply(e.context, e.args);
      d[c].call(this, g, b, e), e.haveExited || (0 === u ? g(void 0, e) : e.timer = setTimeout(m.bind(null, e), u));
    }
    function g(n, t) {
      n && n.usPrivacy ? (clearTimeout(t.timer), function (n) {
        n && n.usPrivacy && (l = n.usPrivacy, i.nX.setConsentData(l));
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
        var o = t.context,
          s = t.args,
          c = t.nextFn;
        n && ((0, a.logWarn)(n + " Resuming auction without consent data as per consentManagement config.", e), i.nX.setConsentData(null)), c.apply(o, s);
      }
    }
    o.vc.getConfig("consentManagement", function (n) {
      return function (n) {
        (n = n && n.usp) && "object" === s(n) ? ((0, a.isStr)(n.cmpApi) ? c = n.cmpApi : (c = "iab", (0, a.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab", ")."))), (0, a.isNumber)(n.timeout) ? u = n.timeout : (u = 50, (0, a.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50, ")."))), (0, a.logInfo)("USPAPI consentManagement module has been activated..."), i.nX.enable(), "static" === c && ((0, a.isPlainObject)(n.consentData) && (0, a.isPlainObject)(n.consentData.getUSPData) ? (n.consentData.getUSPData.uspString && (r = {
          usPrivacy: n.consentData.getUSPData.uspString
        }), u = 0) : (0, a.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), p || owpbjs.requestBids.before(f, 50), p = !0) : (0, a.logWarn)("consentManagement.usp config not defined, exiting usp consent manager");
      }(n.consentManagement);
    }), window.owpbjs.installedModules.push("consentManagementUsp");
  }
}, function (n) {
  n(n.s = 1366);
}]);
const nativeSetTimeout = window.setTimeout;
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[9073], {
  8253: function (o, e, n) {
    var t = n(9853),
      r = n(5755),
      c = n(2661),
      i = n(3494),
      a = "criteo",
      d = (0, n(5849).df)({
        gvlid: 91,
        moduleName: a
      }),
      l = "cto_bidid",
      s = "cto_bundle",
      u = new Date(0).toString(),
      p = new Date((0, t.timestamp)() + 33696e6).toString();
    function f(o) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, t.parseUrl)(o, {
          noDecodeWholeURL: !0
        });
      return e ? "".concat(n.hostname) : "".concat(n.protocol, "://").concat(n.hostname).concat(n.port ? ":" + n.port : "", "/");
    }
    function g(o) {
      return d.getCookie(o) || d.getDataFromLocalStorage(o);
    }
    function b(o, e, n) {
      o && e && (d.setDataInLocalStorage(o, e), m(o, e, p, n, !0));
    }
    function m(o, e, n, t, r) {
      for (var c = t.split("."), i = 0; i < c.length; ++i) {
        var a = c.slice(c.length - i - 1, c.length).join(".");
        try {
          if (d.setCookie(o, e, n, null, "." + a), r) {
            var l = d.getCookie(o);
            if (l && l === e) break;
          }
        } catch (o) {}
      }
    }
    var h = {
      name: a,
      gvlid: 91,
      decode: function (o) {
        return o;
      },
      getId: function (o, e) {
        var n = e && "boolean" == typeof e.gdprApplies && e.gdprApplies ? e.consentString : void 0,
          i = {
            bundle: g(s),
            bidId: g(l)
          };
        return {
          id: i.bidId ? {
            criteoId: i.bidId
          } : void 0,
          callback: function (o) {
            return function (o, e, n) {
              var i = d.cookiesAreEnabled(),
                a = d.localStorageIsEnabled(),
                p = f((0, c.n)().referer),
                g = f(document.location.href, !0),
                h = "undefined" != typeof criteo_pubtag,
                I = function (o, e, n, t, r, c, i) {
                  return "https://gum.criteo.com/sid/json?origin=prebid" + "".concat(o ? "&topUrl=" + encodeURIComponent(o) : "") + "".concat(e ? "&domain=" + encodeURIComponent(e) : "") + "".concat(n ? "&bundle=" + encodeURIComponent(n) : "") + "".concat(i ? "&gdprString=" + encodeURIComponent(i) : "") + "".concat(t ? "&cw=1" : "") + "".concat(c ? "&pbt=1" : "") + "".concat(r ? "&lsw=1" : "");
                }(p, g, o.bundle, i, a, h, e),
                v = {
                  success: function (o) {
                    var e,
                      r = JSON.parse(o);
                    if (r.acwsUrl ? ("string" == typeof r.acwsUrl ? [r.acwsUrl] : r.acwsUrl).forEach(function (o) {
                      return (0, t.triggerPixel)(o);
                    }) : r.bundle && b(s, r.bundle, g), r.bidId) {
                      b(l, r.bidId, g);
                      var c = {
                        criteoId: r.bidId
                      };
                      n(c);
                    } else m(e = l, "", u, g, !0), d.removeDataFromLocalStorage(e), n();
                  },
                  error: function (o) {
                    (0, t.logError)("criteoIdSystem: unable to sync user id", o), n();
                  }
                };
              (0, r.h)(I, v, void 0, {
                method: "GET",
                contentType: "application/json",
                withCredentials: !0
              });
            }(i, n, o);
          }
        };
      }
    };
    (0, i.Bx)("userId", h), window.owpbjs.installedModules.push("criteoIdSystem");
  }
}, function (o) {
  o(o.s = 8253);
}]);
"use strict";
const nativeSetInterval = window.setInterval;
(self.owpbjsChunk = self.owpbjsChunk || []).push([[9226], {
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
      y = 4,
      g = [],
      v = {},
      p = !1,
      h = !0,
      b = "USD",
      C = !1,
      m = {},
      S = {},
      w = function () {
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
    function D(n, e, r) {
      if (!r) return n.call(this, e);
      var c = r.bidderCode || r.bidder;
      if (S[c]) {
        var s = S[c];
        r.currency && s !== r.currency ? (0, o.logWarn)("Currency default '".concat(c, ": ").concat(s, "' ignored. adapter specified '").concat(r.currency, "'")) : r.currency = s;
      }
      if (r.currency || ((0, o.logWarn)('Currency not specified on bid.  Defaulted to "USD"'), r.currency = "USD"), r.getCpmInNewCurrency = function (n) {
        return (parseFloat(this.cpm) * F(this.currency, n)).toFixed(3);
      }, r.currency === b) return n.call(this, e, r);
      g.push(function (n, e, r) {
        return function () {
          var c = r[1];
          if (void 0 !== c && "currency" in c && "cpm" in c) {
            var s = c.currency;
            try {
              var u = F(s);
              1 !== u && (c.cpm = (parseFloat(c.cpm) * u).toFixed(4), c.currency = b);
            } catch (n) {
              (0, o.logWarn)("Returning NO_BID, getCurrencyConversion threw error: ", n), r[1] = (0, t.m)(i.STATUS.NO_BID, c.getIdentifiers());
            }
          }
          return n.apply(e, r);
        };
      }(n, this, [e, r])), !C || p ? I() : n.bail(w.promise());
    }
    function I() {
      for (; g.length > 0;) g.shift()();
    }
    function F(n) {
      var e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        c = null,
        t = "".concat(n, "->").concat(r);
      if (t in v) c = v[t], (0, o.logMessage)("Using conversionCache value " + c + " for " + t);else if (!1 === C) {
        if ("USD" !== n) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
        c = 1;
      } else if (n === r) c = 1;else if (n in m.conversions) {
        if (!(r in (e = m.conversions[n]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
        c = e[r], (0, o.logInfo)("getCurrencyConversion using direct " + n + " to " + r + " conversionRate " + c);
      } else if (r in m.conversions) {
        if (!(n in (e = m.conversions[r]))) throw new Error("Specified fromCurrency '" + n + "' not found in the currency rates file");
        c = j(1 / e[n], y), (0, o.logInfo)("getCurrencyConversion using reciprocal " + n + " to " + r + " conversionRate " + c);
      } else {
        var i = Object.keys(m.conversions)[0];
        if (!(n in m.conversions[i])) throw new Error("Specified fromCurrency '" + n + "' not found in the currency rates file");
        var s = 1 / m.conversions[i][n];
        if (!(r in m.conversions[i])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
        c = j(s * m.conversions[i][r], y), (0, o.logInfo)("getCurrencyConversion using intermediate " + n + " thru " + i + " to " + r + " conversionRate " + c);
      }
      return t in v || ((0, o.logMessage)("Adding conversionCache value " + c + " for " + t), v[t] = c), c;
    }
    function j(n, e) {
      for (var r = 1, o = 0; o < e; o++) r += "0";
      return Math.round(n * r) / r;
    }
    u.vc.getConfig("currency", function (n) {
      return function (n) {
        var e = d;
        if ("object" === f(n.rates) && (m.conversions = n.rates, p = !0, h = !1), "object" === f(n.defaultRates) && (l = n.defaultRates, m.conversions = l, p = !0), "string" == typeof n.adServerCurrency) {
          (0, o.logInfo)("enabling currency support", arguments), b = n.adServerCurrency, n.conversionRateFile && ((0, o.logInfo)("currency using override conversionRateFile:", n.conversionRateFile), e = n.conversionRateFile);
          var r = e.indexOf("$$TODAY$$");
          if (-1 !== r) {
            var t = new Date(),
              i = "".concat(t.getMonth() + 1),
              u = "".concat(t.getDate());
            i.length < 2 && (i = "0".concat(i)), u.length < 2 && (u = "0".concat(u));
            var y = "".concat(t.getFullYear()).concat(i).concat(u);
            e = "".concat(e.substring(0, r)).concat(y).concat(e.substring(r + 9, e.length));
          }
          !function (n) {
            v = {}, C = !0, (0, o.logInfo)("Installing addBidResponse decorator for currency module", arguments), (0, c.R)().convertCurrency = function (n, e, r) {
              return parseFloat(n) * F(e, r);
            }, (0, a.v5)("addBidResponse").before(D, 100), h && (h = !1, (0, s.h)(n, {
              success: function (n) {
                try {
                  m = JSON.parse(n), (0, o.logInfo)("currencyRates set to " + JSON.stringify(m)), p = !0, I(), w.done();
                } catch (e) {
                  R("Failed to parse currencyRates response: " + n);
                }
              },
              error: function () {
                R.apply(void 0, arguments), w.done();
              }
            }));
          }(e);
        } else (0, o.logInfo)("disabling currency support"), function () {
          (0, o.logInfo)("Uninstalling addBidResponse decorator for currency module", arguments), (0, a.v5)("addBidResponse").getHooks({
            hook: D
          }).remove(), delete (0, c.R)().convertCurrency, b = "USD", v = {}, C = !1, p = !1, h = !0, m = {}, S = {};
        }();
        "object" === f(n.bidderCurrencyDefault) && (S = n.bidderCurrencyDefault);
      }(n.currency);
    }), window.owpbjs.installedModules.push("currency");
  }
}, function (n) {
  n(n.s = 3452);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[6656], {
  9465: function (e, r, t) {
    var n = t(1106),
      o = t(9742),
      a = t(9853),
      i = t(265),
      s = t(8962),
      c = t(3494),
      d = t(4766),
      u = t(7602),
      l = t(2319),
      p = t(5644);
    function f(e) {
      return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, f(e);
    }
    function v(e, r, t) {
      return (r = function (e) {
        var r = function (e, r) {
          if ("object" !== f(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" !== f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === f(r) ? r : String(r);
      }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function _() {
      return _ = Object.assign ? Object.assign.bind() : function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }, _.apply(this, arguments);
    }
    var g = {
        env: "vp",
        gdfp_req: 1,
        output: "vast",
        unviewed_position_start: 1
      },
      b = {};
    function m(e, r, t) {
      if (!s.vc.getConfig("cache.url")) if ((0, i.Z)(r, "".concat(t, ".description_url"))) (0, a.logError)("input cannnot contain description_url");else {
        var n = e && e.vastUrl;
        if (n) return encodeURIComponent(n);
      }
    }
    function T(e, r, t) {
      var n = e && e.adserverTargeting || {},
        s = {},
        c = r && r.adUnit;
      if (c) {
        var d = o.q0.getAllTargeting(c.code);
        s = d ? d[c.code] : {};
      }
      var u = _({}, {
        hb_uuid: e && e.videoCacheKey
      }, {
        hb_cache_id: e && e.videoCacheKey
      }, s, n);
      l.emit(p.EVENTS.SET_TARGETING, v({}, c.code, u));
      var f = (0, i.Z)(r, "params.cust_params"),
        g = {};
      window.PWT && window.PWT.getCustomParamsForDFPVideo && (g = window.PWT.getCustomParamsForDFPVideo(f, e));
      var b = _({}, n, f, g),
        m = encodeURIComponent((0, a.formatQS)(b));
      return t && (m = t + "%26" + m), m;
    }
    s.vc.getConfig("brandCategoryTranslation.translationFile") && (0, c.v5)("registerAdserver").before(function (e) {
      e.call(this, "dfp");
    }), (0, n.W)("dfp", {
      buildVideoUrl: function (e) {
        if (e.params || e.url) {
          var r = e.adUnit,
            t = e.bid || o.q0.getWinningBids(r.code)[0],
            n = {};
          if (e.url && (n = (0, a.parseUrl)(e.url, {
            noDecodeWholeURL: !0
          }), (0, a.isEmpty)(e.params))) return function (e, r, t) {
            var n = m(r, e, "search");
            return n && (e.search.description_url = n), e.search.cust_params = T(r, t, e.search.cust_params), (0, a.buildUrl)(e);
          }(n, t, e);
          var s = {
              correlator: Date.now(),
              sz: (0, a.parseSizesInput)((0, i.Z)(r, "mediaTypes.video.playerSize")).join("|"),
              url: encodeURIComponent(location.href)
            },
            c = n.search,
            d = c && c.sz;
          d && (s.sz = d + "|" + s.sz);
          var l = T(t, e, c && c.cust_params),
            p = _({}, g, n.search, s, e.params, {
              cust_params: l
            }),
            f = m(t, e, "params");
          f && (p.description_url = f);
          var v = u.rp.getConsentData();
          v && ("boolean" == typeof v.gdprApplies && (p.gdpr = Number(v.gdprApplies)), v.consentString && (p.gdpr_consent = v.consentString), v.addtlConsent && (p.addtl_consent = v.addtlConsent));
          var b = u.nX.getConsentData();
          return b && (p.us_privacy = b), (0, a.buildUrl)(_({
            protocol: "https",
            host: "securepubads.g.doubleclick.net",
            pathname: "/gampad/ads"
          }, n, {
            search: p
          }));
        }
        (0, a.logError)("A params object or a url is required to use owpbjs.adServers.dfp.buildVideoUrl");
      },
      buildAdpodVideoUrl: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.code,
          t = e.params,
          n = e.callback;
        if (t && n) {
          var o = {
            correlator: Date.now(),
            sz: function (e) {
              var r = d.K.getAdUnits().filter(function (r) {
                  return r.code === e;
                }),
                t = (0, i.Z)(r[0], "mediaTypes.video.playerSize");
              return (0, a.parseSizesInput)(t).join("|");
            }(r),
            url: encodeURIComponent(location.href)
          };
          b.getTargeting({
            codes: [r],
            callback: function (e, i) {
              var s;
              if (e) n(e, null);else {
                var c = (v(s = {}, b.TARGETING_KEY_PB_CAT_DUR, void 0), v(s, b.TARGETING_KEY_CACHE_ID, void 0), s),
                  d = {};
                i[r] && (d = i[r].reduce(function (e, r) {
                  return Object.keys(r)[0] === b.TARGETING_KEY_PB_CAT_DUR ? e[b.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[b.TARGETING_KEY_PB_CAT_DUR] ? e[b.TARGETING_KEY_PB_CAT_DUR] + "," + r[b.TARGETING_KEY_PB_CAT_DUR] : r[b.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === b.TARGETING_KEY_CACHE_ID && (e[b.TARGETING_KEY_CACHE_ID] = r[b.TARGETING_KEY_CACHE_ID]), e;
                }, c));
                var l = encodeURIComponent((0, a.formatQS)(d)),
                  p = _({}, g, o, t, {
                    cust_params: l
                  }),
                  f = u.rp.getConsentData();
                f && ("boolean" == typeof f.gdprApplies && (p.gdpr = Number(f.gdprApplies)), f.consentString && (p.gdpr_consent = f.consentString), f.addtlConsent && (p.addtl_consent = f.addtlConsent));
                var m = u.nX.getConsentData();
                m && (p.us_privacy = m);
                var T = (0, a.buildUrl)({
                  protocol: "https",
                  host: "securepubads.g.doubleclick.net",
                  pathname: "/gampad/ads",
                  search: p
                });
                n(null, T);
              }
            }
          });
        } else (0, a.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");
      },
      getAdpodTargeting: function (e) {
        return b.getTargeting(e);
      }
    }), (0, c.Bx)("adpod", b), window.owpbjs.installedModules.push("dfpAdServerVideo");
  },
  1106: function (e, r, t) {
    t.d(r, {
      W: function () {
        return i;
      }
    });
    var n = t(2528),
      o = t(9853),
      a = (0, n.R)();
    function i(e, r) {
      a.adServers = a.adServers || {}, a.adServers[e] = a.adServers[e] || {}, Object.keys(r).forEach(function (t) {
        a.adServers[e][t] ? (0, o.logWarn)("Attempting to add an already registered function property ".concat(t, " for AdServer ").concat(e, ".")) : a.adServers[e][t] = r[t];
      });
    }
  }
}, function (e) {
  e(e.s = 9465);
}]);
"use strict";
const nativeClearTimeout = window.clearTimeout;
(self.owpbjsChunk = self.owpbjsChunk || []).push([[5296], {
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
    }), m({}), window.owpbjs.installedModules.push("gptPreAuction");
  }
}, function (t) {
  t(t.s = 7652);
}]);
const nativeLocalStorage = window.localStorage;
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[1130], {
  3806: function (e, t, r) {
    var i = r(9853),
      n = r(4806),
      a = r(265),
      d = r(1609),
      o = r(8962),
      s = r(8265),
      c = r(4877),
      u = r(2224);
    function p(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
      }
      return r;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(r), !0).forEach(function (t) {
          m(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
      return e;
    }
    function m(e, t, r) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== y(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, "string");
            if ("object" !== y(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === y(t) ? t : String(t);
      }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    function y(e) {
      return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, y(e);
    }
    var f = "improvedigital",
      g = {
        DEFAULT_MIMES: ["video/mp4"],
        SUPPORTED_PROPERTIES: ["mimes", "minduration", "maxduration", "protocols", "w", "h", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext"],
        PLACEMENT_TYPE: {
          INSTREAM: 1,
          OUTSTREAM: 3
        }
      },
      b = {
        VERSION: "1.2",
        ASSET_TYPES: {
          TITLE: "title",
          IMG: "img",
          DATA: "data"
        },
        ASSETS: {
          title: {
            id: 0,
            name: "title",
            assetType: "title",
            default: {
              len: 140
            }
          },
          sponsoredBy: {
            id: 1,
            name: "sponsoredBy",
            assetType: "data",
            type: 1
          },
          icon: {
            id: 2,
            name: "icon",
            assetType: "img",
            type: 2
          },
          body: {
            id: 3,
            name: "body",
            assetType: "data",
            type: 2
          },
          image: {
            id: 4,
            name: "image",
            assetType: "img",
            type: 3
          },
          rating: {
            id: 5,
            name: "rating",
            assetType: "data",
            type: 3
          },
          likes: {
            id: 6,
            name: "likes",
            assetType: "data",
            type: 4
          },
          downloads: {
            id: 7,
            name: "downloads",
            assetType: "data",
            type: 5
          },
          price: {
            id: 8,
            name: "price",
            assetType: "data",
            type: 6
          },
          salePrice: {
            id: 9,
            name: "salePrice",
            assetType: "data",
            type: 7
          },
          phone: {
            id: 10,
            name: "phone",
            assetType: "data",
            type: 8
          },
          address: {
            id: 11,
            name: "address",
            assetType: "data",
            type: 9
          },
          body2: {
            id: 12,
            name: "body2",
            assetType: "data",
            type: 10
          },
          displayUrl: {
            id: 13,
            name: "displayUrl",
            assetType: "data",
            type: 11
          },
          cta: {
            id: 14,
            name: "cta",
            assetType: "data",
            type: 12
          }
        },
        getAssetById: function (e) {
          return Object.values(this.ASSETS).find(function (t) {
            return e === t.id;
          });
        }
      },
      v = {
        code: f,
        gvlid: 253,
        aliases: ["id", "weborama"],
        supportedMediaTypes: [s.Mk, s.B5, s.pX],
        isBidRequestValid: function (e) {
          return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId));
        },
        buildRequests: function (e, t) {
          var r = {
            id: (0, i.getUniqueIdentifierStr)(),
            cur: [o.vc.getConfig("currency.adServerCurrency") || "USD"],
            ext: {
              improvedigital: {
                sdk: {
                  name: "pbjs",
                  version: "6.18.0"
                }
              }
            }
          };
          r.device = "object" === y(o.vc.getConfig("device")) ? o.vc.getConfig("device") : {}, r.device.w = r.device.w || window.innerWidth, r.device.h = r.device.h || window.innerHeight, (0, i.getDNT)() && (r.device.dnt = 1);
          var d = o.vc.getConfig("coppa");
          if ("boolean" == typeof d && (0, n.Z)(r, "regs.coppa", S.toBit(d)), t) {
            var s = (0, a.Z)(t, "gdprConsent");
            if (s) {
              "boolean" == typeof s.gdprApplies && (0, n.Z)(r, "regs.ext.gdpr", S.toBit(s.gdprApplies)), (0, n.Z)(r, "user.ext.consent", s.consentString);
              var c = (0, a.Z)(s, "addtlConsent");
              if (c && -1 !== c.indexOf("~")) {
                var p = c.substring(c.indexOf("~") + 1);
                (0, n.Z)(r, "user.ext.consented_providers_settings.consented_providers", p.split(".").map(function (e) {
                  return parseInt(e, 10);
                }));
              }
            }
            (0, n.Z)(r, "tmax", t.timeout), "undefined" !== y(t.uspConsent) && (0, n.Z)(r, "regs.ext.us_privacy", t.uspConsent);
          }
          h.buildSiteOrApp(r, t);
          var l = e[0];
          if ((0, n.Z)(r, "source.ext.schain", l.schain), (0, n.Z)(r, "source.tid", l.transactionId), l.userId) {
            var m = (0, u.HQ)(l.userId);
            (0, n.Z)(r, "user.ext.eids", m.length ? m : void 0);
          }
          return h.buildServerRequests(r, e, t);
        },
        interpretResponse: function (e, t) {
          var r = t.bidderRequest;
          if (!Array.isArray((0, a.Z)(e, "body.seatbid"))) return [];
          var n = [];
          return e.body.seatbid.forEach(function (t) {
            Array.isArray(t.bid) && t.bid.forEach(function (t) {
              if (t.adm && t.price && !t.hasOwnProperty("errorCode")) {
                var d = (0, i.getBidRequest)(t.impid, [r]),
                  o = (0, a.Z)(t, "ext.".concat(f)),
                  s = {
                    requestId: t.impid,
                    cpm: t.price,
                    creativeId: t.crid,
                    currency: e.body.cur.toUpperCase() || "USD",
                    dealId: "string" == typeof o.buying_type && "rtb" !== o.buying_type ? o.line_item_id : void 0,
                    meta: {
                      advertiserDomains: t.adomain ? t.adomain : []
                    },
                    netRevenue: o.is_net || !1,
                    ttl: 300
                  };
                T.buildAd(s, d, t), I.addBidData({
                  bidRequest: d,
                  bid: s
                }), n.push(s);
              }
            });
          }), n;
        },
        getUserSyncs: function (e, t) {
          if (e.pixelEnabled) {
            var r = [];
            return t.forEach(function (e) {
              (0, a.Z)(e, "body.ext.".concat(f, ".sync"), []).forEach(function (e) {
                -1 === r.indexOf(e) && r.push(e);
              });
            }), r.map(function (e) {
              return {
                type: "image",
                url: e
              };
            });
          }
          return [];
        }
      };
    (0, d.registerBidder)(v);
    var h = {
        buildServerRequests: function (e, t, r) {
          var a = this,
            d = [];
          return !0 === o.vc.getConfig("improvedigital.singleRequest") ? (e.imp = t.map(function (e) {
            return a.buildImp(e);
          }), d[0] = this.formatRequest(e, r)) : t.map(function (t) {
            var o = (0, i.deepClone)(e);
            o.id = t.bidId || (0, i.getUniqueIdentifierStr)(), o.imp = [a.buildImp(t)], (0, n.Z)(o, "source.tid", t.transactionId), d.push(a.formatRequest(o, r));
          }), d;
        },
        formatRequest: function (e, t) {
          return {
            method: "POST",
            url: "https://ad.360yield.com/pb",
            data: JSON.stringify(e),
            bidderRequest: t
          };
        },
        buildImp: function (e) {
          var t = {
              id: (0, i.getBidIdParameter)("bidId", e) || (0, i.getUniqueIdentifierStr)(),
              secure: S.toBit("https:" === window.location.protocol)
            },
            r = this.getBidFloor(e) || (0, i.getBidIdParameter)("bidFloor", e.params);
          if (r) {
            var d = (0, i.getBidIdParameter)("bidFloorCur", e.params) || "USD";
            (0, n.Z)(t, "bidfloor", r), (0, n.Z)(t, "bidfloorcur", d ? d.toUpperCase() : void 0);
          }
          var o = (0, i.getBidIdParameter)("placementId", e.params);
          o ? (0, n.Z)(t, "ext.bidder.placementId", o) : ((0, n.Z)(t, "ext.bidder.publisherId", (0, i.getBidIdParameter)("publisherId", e.params)), (0, n.Z)(t, "ext.bidder.placementKey", (0, i.getBidIdParameter)("placementKey", e.params))), (0, n.Z)(t, "ext.bidder.keyValues", (0, i.getBidIdParameter)("keyValues", e.params) || void 0);
          var s = (0, a.Z)(e, "ortb2Imp.ext.gpid") || (0, a.Z)(e, "ortb2Imp.ext.data.pbadslot") || (0, a.Z)(e, "ortb2Imp.ext.data.adserver.adslot");
          (0, n.Z)(t, "ext.gpid", s), (0, a.Z)(e, "ortb2Imp.instl") && (t.instl = 1);
          var c = (0, a.Z)(e, "mediaTypes.video");
          return c && (t.video = this.buildVideoRequest(e), (0, n.Z)(t, "ext.is_rewarded_inventory", 1 === c.rewarded || 1 === (0, a.Z)(c, "ext.rewarded") || void 0)), (0, a.Z)(e, "mediaTypes.banner") && (t.banner = this.buildBannerRequest(e)), (0, a.Z)(e, "mediaTypes.native") && (t.native = this.buildNativeRequest(e)), t;
        },
        buildVideoRequest: function (e) {
          var t = (0, i.deepClone)(e.mediaTypes.video),
            r = (0, i.deepClone)((0, a.Z)(e, "params.video", {})),
            n = l(l({}, t), r);
          if (Array.isArray(n.playerSize)) {
            var d = Array.isArray(n.playerSize[0]) ? n.playerSize[0] : n.playerSize;
            n.w = d[0], n.h = d[1];
          }
          return n.placement = this.isOutstreamVideo(e) ? g.PLACEMENT_TYPE.OUTSTREAM : g.PLACEMENT_TYPE.INSTREAM, n.mimes || (n.mimes = g.DEFAULT_MIMES), 1 !== n.skip && (delete n.skipmin, delete n.skipafter, 0 !== n.skip && ((0, i.logWarn)("video.skip: invalid value '".concat(n.skip, "'. Expected 0 or 1")), delete n.skip)), Object.keys(n).forEach(function (e) {
            -1 === g.SUPPORTED_PROPERTIES.indexOf(e) && delete n[e];
          }), n;
        },
        buildBannerRequest: function (e) {
          var t = {};
          return !0 === o.vc.getConfig("improvedigital.usePrebidSizes") && e.sizes && (t.format = e.sizes.map(function (e) {
            return {
              w: e[0],
              h: e[1]
            };
          })), t;
        },
        buildNativeRequest: function (e) {
          for (var t = e.mediaTypes.native, r = {
              assets: []
            }, n = 0, d = Object.keys(t); n < d.length; n++) {
            var o = d[n],
              s = b.ASSETS[o];
            if (s) {
              var c = t[o],
                u = {
                  id: s.id,
                  required: S.toBit(c.required)
                };
              switch (s.assetType) {
                case b.ASSET_TYPES.TITLE:
                  u.title = {
                    len: c.len || s.default.len
                  };
                  break;
                case b.ASSET_TYPES.DATA:
                  u.data = (0, i.cleanObj)({
                    type: s.type,
                    len: c.len
                  });
                  break;
                case b.ASSET_TYPES.IMG:
                  u.img = (0, i.cleanObj)({
                    type: s.type,
                    w: (0, a.Z)(c, "sizes.0"),
                    h: (0, a.Z)(c, "sizes.1"),
                    wmin: (0, a.Z)(c, "aspect_ratios.0.min_width"),
                    hmin: (0, a.Z)(c, "aspect_ratios.0.min_height")
                  });
                  break;
                default:
                  return;
              }
              r.assets.push(u);
            }
          }
          return {
            ver: b.VERSION,
            request: JSON.stringify(r)
          };
        },
        isOutstreamVideo: function (e) {
          return "outstream" === (0, a.Z)(e, "mediaTypes.video.context");
        },
        getBidFloor: function (e) {
          if (!(0, i.isFn)(e.getFloor)) return null;
          var t = e.getFloor({
            currency: "USD",
            mediaType: "*",
            size: "*"
          });
          return (0, i.isPlainObject)(t) && !isNaN(t.floor) && "USD" === t.currency ? t.floor : null;
        },
        buildSiteOrApp: function (e, t) {
          var r = {},
            n = o.vc.getConfig("app") || {},
            d = o.vc.getConfig("ortb2.app") || {};
          if ((0, i.mergeDeep)(r, n, d), 0 !== Object.keys(r).length) e.app = r;else {
            var s = {},
              c = o.vc.getConfig("pageUrl") || (0, a.Z)(t, "refererInfo.referer");
            c && (s.page = c, s.domain = (0, i.parseUrl)(c).hostname);
            var u = o.vc.getConfig("site") || {},
              p = o.vc.getConfig("ortb2.site") || {};
            (0, i.mergeDeep)(s, u, p), e.site = s;
          }
        }
      },
      T = {
        buildAd: function (e, t, r) {
          t.mediaTypes && 1 === Object.keys(t.mediaTypes).length ? (0, a.Z)(t, "mediaTypes.video") ? this.buildVideoAd(e, t, r) : (0, a.Z)(t, "mediaTypes.banner") ? this.buildBannerAd(e, t, r) : (0, a.Z)(t, "mediaTypes.native") && this.buildNativeAd(e, t, r) : 0 === r.adm.search(/^<vast/i) ? this.buildVideoAd(e, t, r) : 0 === r.adm.indexOf("{") ? this.buildNativeAd(e, t, r) : this.buildBannerAd(e, t, r);
        },
        buildVideoAd: function (e, t, r) {
          e.mediaType = s.pX, e.vastXml = r.adm, h.isOutstreamVideo(t) && (e.adResponse = {
            content: e.vastXml
          }, e.renderer = E.createRenderer(t));
        },
        buildBannerAd: function (e, t, r) {
          e.mediaType = s.Mk, e.ad = r.adm, e.width = r.w, e.height = r.h;
        },
        buildNativeAd: function (e, t, r) {
          e.mediaType = s.B5;
          var i = JSON.parse(r.adm),
            n = {
              clickUrl: (0, a.Z)(i, "link.url"),
              clickTrackers: (0, a.Z)(i, "link.clicktrackers"),
              privacyLink: i.privacy
            };
          i.eventtrackers ? (n.impressionTrackers = [], i.eventtrackers.forEach(function (e) {
            if (1 === e.event) switch (e.method) {
              case 1:
                n.impressionTrackers.push(e.url);
                break;
              case 2:
                n.javascriptTrackers = '<script src="'.concat(e.url, '"><\/script>');
            }
          })) : (n.impressionTrackers = i.imptrackers || [], n.javascriptTrackers = i.jstracker), i.assets.map(function (e) {
            var t = b.getAssetById(e.id);
            switch (t.assetType) {
              case b.ASSET_TYPES.TITLE:
                n.title = e.title.text;
                break;
              case b.ASSET_TYPES.DATA:
                n[t.name] = e.data.value;
                break;
              case b.ASSET_TYPES.IMG:
                n[t.name] = {
                  url: e.img.url,
                  width: e.img.w,
                  height: e.img.h
                };
            }
          }), e.native = n;
        }
      },
      E = {
        RENDERER_URL: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
        createRenderer: function (e) {
          var t = c.Th.install({
            id: e.adUnitCode,
            url: this.RENDERER_URL,
            config: (0, a.Z)(e, "renderer.options"),
            adUnitCode: e.adUnitCode
          });
          try {
            t.setRender(this.render);
          } catch (e) {
            (0, i.logWarn)("Prebid Error calling setRender on renderer", e);
          }
          return t;
        },
        render: function (e) {
          e.renderer.push(function () {
            window.ANOutstreamVideo.renderAd({
              sizes: [e.width, e.height],
              targetId: e.adUnitCode,
              adResponse: e.adResponse,
              rendererOptions: e.renderer.getConfig()
            }, E.handleRendererEvents.bind(null, e));
          });
        },
        handleRendererEvents: function (e, t, r) {
          e.renderer.handleVideoEvent({
            id: t,
            eventName: r
          });
        }
      },
      I = {
        RENDERER_URL: "https://razr.improvedigital.com/renderer.js",
        addBidData: function (e) {
          var t = e.bid,
            r = e.bidRequest;
          this.isValidBid(t) && (t.renderer = c.Th.install({
            url: this.RENDERER_URL,
            config: {
              bidRequest: r
            }
          }), t.renderer.setRender(this.render));
        },
        isValidBid: function (e) {
          return e && /razr:\/\//.test(e.ad);
        },
        render: function (e) {
          var t = e.renderer.getConfig().bidRequest,
            r = {
              type: "prebid",
              bidRequest: t,
              bid: e,
              config: (0, i.mergeDeep)({}, o.vc.getConfig("improvedigital.rendererConfig"), (0, a.Z)(t, "params.rendererConfig"))
            },
            n = window.razr = window.razr || {};
          n.queue = n.queue || [], n.queue.push(r);
        }
      },
      S = {
        toBit: function (e) {
          return e ? 1 : 0;
        }
      };
    window.owpbjs.installedModules.push("improvedigitalBidAdapter");
  },
  2224: function (e, t, r) {
    r.d(t, {
      HQ: function () {
        return o;
      },
      Pv: function () {
        return s;
      },
      UR: function () {
        return a;
      }
    });
    var i = r(9853),
      n = r(265),
      a = {
        trustpid: {
          source: "trustpid.com",
          atype: 1,
          getValue: function (e) {
            return e;
          }
        },
        intentIqId: {
          source: "intentiq.com",
          atype: 1,
          getValue: function (e) {
            return e.RESULT;
          }
        },
        naveggId: {
          source: "navegg.com",
          atype: 1
        },
        justId: {
          source: "justtag.com",
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
          getUidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        ftrackId: {
          source: "flashtalking.com",
          atype: 1,
          getValue: function (e) {
            return e.uid;
          },
          getUidExt: function (e) {
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
            var t = (0, i.pick)(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(t).length) return t;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 3
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 3,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 3
        },
        dmdId: {
          source: "hcn.health",
          atype: 3
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
          atype: 3,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.keyID ? {
              keyID: e.keyID
            } : void 0;
          }
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        IDP: {
          source: "zeotap.com",
          atype: 1,
          getValue: function (e) {
            return (0, i.isPlainObject)(e) ? e.id : e;
          }
        },
        hadronId: {
          source: "audigent.com",
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
        nextrollId: {
          source: "nextroll.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 3
        },
        "33acrossId": {
          source: "33across.com",
          atype: 1,
          getValue: function (e) {
            return e.envelope;
          }
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        },
        mwOpenLinkId: {
          source: "mediawallahscript.com",
          atype: 1
        },
        tapadId: {
          source: "tapad.com",
          atype: 1
        },
        novatiq: {
          getValue: function (e) {
            return e.snowflake;
          },
          source: "novatiq.com",
          atype: 1
        },
        uid2: {
          source: "uidapi.com",
          atype: 3,
          getValue: function (e) {
            return e.id;
          }
        },
        dapId: {
          source: "akamai.com",
          atype: 1
        },
        deepintentId: {
          source: "deepintent.com",
          atype: 3
        },
        admixerId: {
          source: "admixer.net",
          atype: 3
        },
        adtelligentId: {
          source: "adtelligent.com",
          atype: 3
        },
        amxId: {
          source: "amxrtb.com",
          atype: 1
        },
        publinkId: {
          source: "epsilon.com",
          atype: 3
        },
        kpuid: {
          source: "kpuid.com",
          atype: 3
        },
        imuid: {
          source: "intimatemerger.com",
          atype: 1
        },
        connectId: {
          source: "yahoo.com",
          atype: 3
        },
        qid: {
          source: "adquery.io",
          atype: 1
        },
        dacId: {
          source: "impact-ad.jp",
          atype: 1
        }
      };
    function d(e, t) {
      var r = a[t];
      if (r && e) {
        var n = {};
        n.source = r.source;
        var d = (0, i.isFn)(r.getValue) ? r.getValue(e) : e;
        if ((0, i.isStr)(d)) {
          var o = {
            id: d,
            atype: r.atype
          };
          if ((0, i.isFn)(r.getUidExt)) {
            var s = r.getUidExt(e);
            s && (o.ext = s);
          }
          if (n.uids = [o], (0, i.isFn)(r.getEidExt)) {
            var c = r.getEidExt(e);
            c && (n.ext = c);
          }
          return n;
        }
      }
      return null;
    }
    function o(e) {
      var t = [];
      for (var r in e) if (e.hasOwnProperty(r)) if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);else {
        var i = d(e[r], r);
        i && t.push(i);
      }
      return t;
    }
    function s(e) {
      var t = [];
      return e.filter(function (e) {
        return (0, i.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
      }).forEach(function (e) {
        Object.keys(e.idObj).forEach(function (r) {
          (0, n.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, n.Z)(a, r + ".source") && t.push({
            source: a[r].source,
            bidders: e.config.bidders
          });
        });
      }), t;
    }
  }
}, function (e) {
  e(e.s = 3806);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[8656], {
  2715: function (e, n, t) {
    var r = t(9853),
      i = t(265),
      o = t(8962),
      a = t(4766),
      u = t(1929),
      c = t(2319),
      f = t(5644);
    function s(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var l = f.TARGETING_KEYS,
      d = l.CACHE_ID,
      v = l.UUID,
      p = f.EVENTS,
      y = p.BID_WON,
      m = p.AUCTION_END,
      h = f.BID_STATUS.RENDERED;
    o.vc.setDefaults({
      instreamTracking: (0, r.deepClone)({
        enabled: !1,
        maxWindow: 6e4,
        pollingFreq: 500
      })
    });
    var g = /video|fetch|xmlhttprequest|other/;
    c.on(m, function (e) {
      var n = e.adUnits,
        t = e.bidsReceived,
        f = e.bidderRequests,
        l = o.vc.getConfig("instreamTracking") || {};
      if (!l.enabled || !window.performance || !window.performance.getEntriesByType) return !1;
      var p = t.filter(function (e) {
        var n = (0, r.getBidRequest)(e.requestId, f);
        return n && (0, i.Z)(n, "mediaTypes.video.context") === u.LD && e.videoCacheKey;
      });
      if (!p.length) return !1;
      var m = {};
      n.forEach(function (e) {
        m[e.code] || (0, i.Z)(e, "mediaTypes.video.context") !== u.LD || (m[e.code] = !0);
      });
      var w = Object.keys(m).length,
        b = Date.now(),
        T = l.maxWindow,
        E = l.pollingFreq,
        D = l.urlPattern,
        x = 0,
        A = 0;
      return setTimeout(function e() {
        var n,
          t = window.performance.getEntriesByType("resource").splice(A),
          r = function (e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
              if (Array.isArray(e) || (t = function (e, n) {
                if (e) {
                  if ("string" == typeof e) return s(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, n) : void 0;
                }
              }(e))) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
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
                  f: i
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return a = e.done, e;
              },
              e: function (e) {
                u = !0, o = e;
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              }
            };
          }(t);
        try {
          var i = function () {
            var e = n.value,
              t = e.name;
            if (!g.test(e.initiatorType)) return "continue";
            p.forEach(function (e) {
              var n = !(-1 !== t.indexOf(d) || -1 !== t.indexOf(v)) && -1 !== t.indexOf(e.videoCacheKey);
              D && D instanceof RegExp && !D.test(t) || n && e.status !== h && (x++, a.K.addWinningBid(e), c.emit(y, e));
            });
          };
          for (r.s(); !(n = r.n()).done;) i();
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        A += t.length, Date.now() - b < T && x < w && setTimeout(e, E);
      }, E), !0;
    }), window.owpbjs.installedModules.push("instreamTracking");
  }
}, function (e) {
  e(e.s = 2715);
}]);
const nativeDocument = document;
"use strict";
const nativeAddEventListener = Element.prototype.addEventListener;
(self.owpbjsChunk = self.owpbjsChunk || []).push([[7700], {
  1621: function (e, n, t) {
    var r = t(265),
      i = t(9853),
      a = t(1609),
      o = t(8265),
      d = "nativo",
      u = [o.Mk],
      s = {},
      c = {},
      f = {},
      p = new Set(),
      y = new Set(),
      l = new Set(),
      v = {
        url: function (e) {
          return "string" == typeof e;
        },
        placementId: function (e) {
          return "string" == typeof e || "number" == typeof e;
        }
      },
      h = {
        code: d,
        gvlid: 263,
        aliases: ["ntv"],
        supportedMediaTypes: u,
        isBidRequestValid: function (e) {
          return e.params ? !Object.keys(e.params).some(function (n) {
            var t = e.params[n],
              r = v[n];
            return !!r && !r(t);
          }) : e.bidder === d;
        },
        buildRequests: function (e, n) {
          var t,
            i,
            a = new Set(),
            o = function () {
              var e = {},
                n = [];
              function t(n, t) {
                e.hasOwnProperty(n) || (e[n] = t);
              }
              return {
                addBidData: function (e, r) {
                  var i = n.length;
                  n.push(e), Array.isArray(r) ? r.forEach(function (e) {
                    t(String(e), i);
                  }) : t(String(r), i);
                },
                getBidData: function (t) {
                  var r = String(t);
                  if (e.hasOwnProperty(r)) return n[e[r]];
                }
              };
            }();
          e.forEach(function (e) {
            i = (0, r.Z)(e, "params.url", n.refererInfo.referer), (t = (0, r.Z)(e, "params.placementId")) && a.add(t);
            var d = {
              bidId: e.bidId,
              size: m(e.sizes)
            };
            o.addBidData(d, [t, e.adUnitCode]);
          }), s[n.bidderRequestId] = o;
          var d,
            u = {
              adUnits: e.map(function (e) {
                return c[e.adUnitCode] = void 0 !== c[e.adUnitCode] ? c[e.adUnitCode] + 1 : 0, {
                  adUnitCode: e.adUnitCode,
                  mediaTypes: e.mediaTypes
                };
              })
            },
            f = [{
              key: "ntv_pb_rid",
              value: n.bidderRequestId
            }, {
              key: "ntv_ppc",
              value: btoa(JSON.stringify(u))
            }, {
              key: "ntv_dbr",
              value: btoa(JSON.stringify(c))
            }, {
              key: "ntv_url",
              value: encodeURIComponent(i)
            }];
          if (p.size > 0 && f.unshift({
            key: "ntv_atf",
            value: Array.from(p).join(",")
          }), y.size > 0 && f.unshift({
            key: "ntv_avtf",
            value: Array.from(y).join(",")
          }), l.size > 0 && f.unshift({
            key: "ntv_ctf",
            value: Array.from(l).join(",")
          }), a.size > 0) {
            var v = [];
            a.forEach(function (e) {
              return v.push(e);
            }), f.unshift({
              key: "ntv_ptd",
              value: v.join(",")
            });
          }
          return n.gdprConsent && f.unshift({
            key: "ntv_gdpr_consent",
            value: n.gdprConsent.consentString
          }), n.uspConsent && f.unshift({
            key: "us_privacy",
            value: n.uspConsent
          }), {
            method: "GET",
            url: "https://exchange.postrelease.com/prebid" + (d = f, "?" + d.reduce(function (e, n) {
              return g(e, n.key, n.value);
            }, ""))
          };
        },
        interpretResponse: function (e, n) {
          var t = this;
          if (!e || !e.body || (0, i.isEmpty)(e.body)) return [];
          try {
            var r,
              a,
              o = "string" == typeof e.body ? JSON.parse(e.body) : e.body,
              d = [];
            return o.seatbid.forEach(function (e) {
              e.bid.forEach(function (e) {
                a = t.getAdUnitData(o.id, e), r = {
                  requestId: a.bidId,
                  cpm: e.price,
                  currency: o.cur,
                  width: e.w || a.size[0],
                  height: e.h || a.size[1],
                  creativeId: e.crid,
                  dealId: e.id,
                  netRevenue: !0,
                  ttl: e.ttl || 360,
                  ad: e.adm,
                  meta: {
                    advertiserDomains: e.adomain
                  }
                }, e.ext && (f[e.id] = e.ext), d.push(r);
              });
            }), delete s[o.id], d;
          } catch (e) {
            return [];
          }
        },
        getUserSyncs: function (e, n, t, r) {
          var a = "";
          t && (a = g(a, "gdpr", t.gdprApplies ? 1 : 0), a = g(a, "gdpr_consent", encodeURIComponent(t.consentString || ""))), r && (a = g(a, "us_privacy", encodeURIComponent(r.uspConsent)));
          var o,
            d = {
              iframe: e.iframeEnabled,
              image: e.pixelEnabled
            },
            u = [];
          return n.forEach(function (e) {
            if (!e || !e.body || (0, i.isEmpty)(e.body)) return u;
            (o = "string" == typeof e.body ? JSON.parse(e.body) : e.body) && o.seatbid && 0 !== o.seatbid.length && o.seatbid.forEach(function (e) {
              e.syncUrls.forEach(function (e) {
                d[e.type] && "" !== e.url.trim() && u.push({
                  type: e.type,
                  url: e.url.replace("{GDPR_params}", a)
                });
              });
            });
          }), u;
        },
        onTimeout: function (e) {},
        onBidWon: function (e) {
          var n = f[e.dealId];
          n && (_(p, n.adsToFilter), _(y, n.advertisersToFilter), _(l, n.campaignsToFilter));
        },
        onSetTargeting: function (e) {},
        getAdUnitData: function (e, n) {
          var t = s[e],
            i = n.impid,
            a = (0, r.Z)(n, "ext.ad_unit_id");
          return t.getBidData(a) || t.getBidData(i);
        }
      };
    function g(e, n, t) {
      return e + "".concat(e.length ? "&" : "").concat(n, "=").concat(t);
    }
    function m(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
      return e && 0 !== e.length ? 1 === e.length ? e[0] : e.reduce(function (e, t) {
        return n(t) > n(e) ? t : e;
      }) : [];
    }
    (0, a.registerBidder)(h);
    var b = function (e) {
      return e[0] * e[1];
    };
    function _(e, n) {
      n && Array.isArray(n) && n.length && n.forEach(function (n) {
        return e.add(n);
      });
    }
    window.owpbjs.installedModules.push("nativoBidAdapter");
  }
}, function (e) {
  e(e.s = 1621);
}]);
const eventHooks = window.eventhooks;
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[8223], {
  8119: function (e, t, n) {
    var r = n(8265),
      o = n(9853),
      i = n(1609),
      s = n(5755);
    function a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach(function (t) {
          u(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function u(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === p(t) ? t : String(t);
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function p(e) {
      return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, p(e);
    }
    var d = "https://ms-cookie-sync.presage.io",
      l = "1.2.10";
    function b(e) {
      if (!(0, o.isFn)(e.getFloor)) return 0;
      var t = e.getFloor({
        currency: "USD",
        mediaType: "banner",
        size: "*"
      });
      return "USD" === t.currency ? t.floor : 0;
    }
    function f() {
      try {
        return (0, o.getWindowTop)();
      } catch (e) {
        return (0, o.getWindowSelf)();
      }
    }
    var y = {
      code: "ogury",
      supportedMediaTypes: [r.Mk],
      isBidRequestValid: function (e) {
        var t = (0, o.getAdUnitSizes)(e),
          n = Boolean(t) && t.length > 0,
          r = !!e.params.adUnitId,
          i = !!e.params.assetKey;
        return n && r && i;
      },
      getUserSyncs: function (e, t, n, r) {
        return e.pixelEnabled ? [{
          type: "image",
          url: "".concat(d, "/v1/init-sync/bid-switch?iab_string=").concat(n && n.consentString || "", "&source=prebid")
        }, {
          type: "image",
          url: "".concat(d, "/ttd/init-sync?iab_string=").concat(n && n.consentString || "", "&source=prebid")
        }] : [];
      },
      buildRequests: function (e, t) {
        var n = {
          id: t.auctionId,
          tmax: 1e3,
          at: 1,
          regs: {
            ext: {
              gdpr: t.gdprConsent && t.gdprConsent.gdprApplies ? 1 : 0
            }
          },
          site: {
            domain: location.hostname,
            page: location.href
          },
          user: {
            ext: {
              consent: ""
            }
          },
          imp: [],
          ext: {
            adapterversion: l,
            prebidversion: "6.18.0"
          }
        };
        return t.gdprConsent && t.gdprConsent.consentString && (n.user.ext.consent = t.gdprConsent.consentString), e.forEach(function (e) {
          var t = (0, o.getAdUnitSizes)(e).map(function (e) {
            return {
              w: e[0],
              h: e[1]
            };
          });
          e.mediaTypes && e.mediaTypes.hasOwnProperty("banner") && (n.site.id = e.params.assetKey, n.imp.push({
            id: e.bidId,
            tagid: e.params.adUnitId,
            bidfloor: b(e),
            banner: {
              format: t
            },
            ext: e.params
          }));
        }), {
          method: "POST",
          url: "https://mweb-hb.presage.io/api/header-bidding-request",
          data: n,
          options: {
            contentType: "application/json"
          }
        };
      },
      interpretResponse: function (e) {
        if (!e || !e.body || "object" != p(e.body) || 0 === Object.keys(e.body).length) return (0, o.logWarn)("no response or body is malformed"), [];
        var t = [];
        return e.body.seatbid.forEach(function (e) {
          e.bid.forEach(function (e) {
            var n = {
              requestId: e.impid,
              cpm: e.price,
              currency: "USD",
              width: e.w,
              height: e.h,
              creativeId: e.id,
              netRevenue: !0,
              ttl: 60,
              ext: e.ext,
              meta: {
                advertiserDomains: e.adomain
              },
              nurl: e.nurl,
              adapterVersion: l,
              prebidVersion: "6.18.0"
            };
            n.ad = e.adm, t.push(n);
          });
        }), t;
      },
      getFloor: b,
      onBidWon: function (e) {
        f().OG_PREBID_BID_OBJECT = c({}, e && c({}, e)), e && e.nurl && (0, s.h)(e.nurl, null);
      },
      getWindowContext: f,
      onTimeout: function (e) {
        (0, s.h)("".concat("https://ms-ads-monitoring-events.presage.io", "/bid_timeout"), null, JSON.stringify(c(c({}, e[0]), {}, {
          location: window.location.href
        })), {
          method: "POST",
          contentType: "application/json"
        });
      }
    };
    (0, i.registerBidder)(y), window.owpbjs.installedModules.push("oguryBidAdapter");
  }
}, function (e) {
  e(e.s = 8119);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[3118], {
  6901: function (e, t, r) {
    var i = r(9853),
      o = r(265),
      n = r(4806),
      a = r(1609),
      s = r(8265),
      d = r(8962),
      l = r(5553),
      p = r(4877);
    function u() {
      return u = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        }
        return e;
      }, u.apply(this, arguments);
    }
    function c(e) {
      return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, c(e);
    }
    var g = "https://elb.the-ozone-project.com",
      h = "/openrtb2/auction",
      f = "/static/load-cookie.html",
      b = "https://test.ozpr.net",
      y = "2.7.0",
      m = {
        gvlid: 524,
        aliases: [{
          code: "lmc",
          gvlid: 524
        }, {
          code: "newspassid",
          gvlid: 524
        }],
        version: y,
        code: "ozone",
        supportedMediaTypes: [s.pX, s.Mk],
        cookieSyncBag: {
          publisherId: null,
          siteId: null,
          userIdObject: {}
        },
        propertyBag: {
          pageId: null,
          buildRequestsStart: 0,
          buildRequestsEnd: 0,
          endpointOverride: null
        },
        whitelabel_defaults: {
          logId: "OZONE",
          bidder: "ozone",
          keyPrefix: "oz",
          auctionUrl: g + h,
          cookieSyncUrl: g + f,
          rendererUrl: "https://prebid.the-ozone-project.com/ozone-renderer.js"
        },
        loadWhitelabelData: function (e) {
          if (!this.propertyBag.whitelabel) {
            this.propertyBag.whitelabel = JSON.parse(JSON.stringify(this.whitelabel_defaults));
            var t = e.bidder || "ozone";
            this.propertyBag.whitelabel.logId = t.toUpperCase(), this.propertyBag.whitelabel.bidder = t;
            var r = d.vc.getConfig(t) || {};
            (0, i.logInfo)("got bidderConfig: ", JSON.parse(JSON.stringify(r))), r.kvpPrefix && (this.propertyBag.whitelabel.keyPrefix = r.kvpPrefix);
            var o = this.getGetParametersAsObject();
            r.endpointOverride && (r.endpointOverride.origin && (this.propertyBag.endpointOverride = r.endpointOverride.origin, this.propertyBag.whitelabel.auctionUrl = r.endpointOverride.origin + h, this.propertyBag.whitelabel.cookieSyncUrl = r.endpointOverride.origin + f), o.hasOwnProperty("renderer") ? o.renderer.match("%3A%2F%2F") ? this.propertyBag.whitelabel.rendererUrl = decodeURIComponent(o.renderer) : this.propertyBag.whitelabel.rendererUrl = o.renderer : r.endpointOverride.rendererUrl && (this.propertyBag.whitelabel.rendererUrl = r.endpointOverride.rendererUrl), r.endpointOverride.cookieSyncUrl && (this.propertyBag.whitelabel.cookieSyncUrl = r.endpointOverride.cookieSyncUrl), r.endpointOverride.auctionUrl && (this.propertyBag.endpointOverride = r.endpointOverride.auctionUrl, this.propertyBag.whitelabel.auctionUrl = r.endpointOverride.auctionUrl));
            try {
              o.hasOwnProperty("auction") && "dev" === o.auction && ((0, i.logInfo)("GET: auction=dev"), this.propertyBag.whitelabel.auctionUrl = b + h), o.hasOwnProperty("cookiesync") && "dev" === o.cookiesync && ((0, i.logInfo)("GET: cookiesync=dev"), this.propertyBag.whitelabel.cookieSyncUrl = b + f);
            } catch (e) {}
            (0, i.logInfo)("set propertyBag.whitelabel to", this.propertyBag.whitelabel);
          }
        },
        getAuctionUrl: function () {
          return this.propertyBag.whitelabel.auctionUrl;
        },
        getCookieSyncUrl: function () {
          return this.propertyBag.whitelabel.cookieSyncUrl;
        },
        getRendererUrl: function () {
          return this.propertyBag.whitelabel.rendererUrl;
        },
        isBidRequestValid: function (e) {
          this.loadWhitelabelData(e), (0, i.logInfo)("isBidRequestValid : ", d.vc.getConfig(), e);
          var t = e.adUnitCode,
            r = "VALIDATION FAILED : missing {param} : siteId, placementId and publisherId are REQUIRED";
          if (!e.params.hasOwnProperty("placementId")) return (0, i.logError)(r.replace("{param}", "placementId"), t), !1;
          if (!this.isValidPlacementId(e.params.placementId)) return (0, i.logError)("VALIDATION FAILED : placementId must be exactly 10 numeric characters", t), !1;
          if (!e.params.hasOwnProperty("publisherId")) return (0, i.logError)(r.replace("{param}", "publisherId"), t), !1;
          if (!e.params.publisherId.toString().match(/^[a-zA-Z0-9\-]{12}$/)) return (0, i.logError)("VALIDATION FAILED : publisherId must be exactly 12 alphanumieric characters including hyphens", t), !1;
          if (!e.params.hasOwnProperty("siteId")) return (0, i.logError)(r.replace("{param}", "siteId"), t), !1;
          if (!e.params.siteId.toString().match(/^[0-9]{10}$/)) return (0, i.logError)("VALIDATION FAILED : siteId must be exactly 10 numeric characters", t), !1;
          if (e.params.hasOwnProperty("customParams")) return (0, i.logError)("VALIDATION FAILED : customParams should be renamed to customData", t), !1;
          if (e.params.hasOwnProperty("customData")) {
            if (!Array.isArray(e.params.customData)) return (0, i.logError)("VALIDATION FAILED : customData is not an Array", t), !1;
            if (e.params.customData.length < 1) return (0, i.logError)("VALIDATION FAILED : customData is an array but does not contain any elements", t), !1;
            if (!e.params.customData[0].hasOwnProperty("targeting")) return (0, i.logError)('VALIDATION FAILED : customData[0] does not contain "targeting"', t), !1;
            if ("object" != c(e.params.customData[0].targeting)) return (0, i.logError)("VALIDATION FAILED : customData[0] targeting is not an object", t), !1;
          }
          if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(s.pX)) {
            if (!e.mediaTypes[s.pX].hasOwnProperty("context")) return (0, i.logError)("No video context key/value in bid. Rejecting bid: ", e), !1;
            if ("instream" !== e.mediaTypes[s.pX].context && "outstream" !== e.mediaTypes[s.pX].context) return (0, i.logError)("video.context is invalid. Only instream/outstream video is supported. Rejecting bid: ", e), !1;
          }
          return !0;
        },
        isValidPlacementId: function (e) {
          return e.toString().match(/^[0-9]{10}$/);
        },
        buildRequests: function (e, t) {
          var r = this;
          this.loadWhitelabelData(e[0]), this.propertyBag.buildRequestsStart = new Date().getTime();
          var a = this.propertyBag.whitelabel.bidder,
            l = this.propertyBag.whitelabel.keyPrefix;
          if ((0, i.logInfo)("buildRequests time: ".concat(this.propertyBag.buildRequestsStart, " v ").concat(y, " validBidRequests"), JSON.parse(JSON.stringify(e)), "bidderRequest", JSON.parse(JSON.stringify(t))), this.blockTheRequest()) return [];
          var p = {
            publisherId: "",
            siteId: ""
          };
          e.length > 0 && (this.cookieSyncBag.userIdObject = u(this.cookieSyncBag.userIdObject, this.findAllUserIds(e[0])), this.cookieSyncBag.siteId = (0, o.Z)(e[0], "params.siteId"), this.cookieSyncBag.publisherId = (0, o.Z)(e[0], "params.publisherId"), p = e[0].params), (0, i.logInfo)("cookie sync bag", this.cookieSyncBag);
          var g = this.getWhitelabelConfigItem("ozone.singleRequest");
          g = !1 !== g, (0, i.logInfo)("config ".concat(a, ".singleRequest : "), g);
          var h = {};
          delete h.test;
          var f = d.vc.getConfig("ortb2");
          f && (0, o.Z)(f, "user") && ((0, i.logInfo)("added FPD user object"), h.user = f.user);
          var b = this.getGetParametersAsObject(),
            m = l + "testmode",
            I = b[m] || null;
          h.device = {
            w: window.innerWidth,
            h: window.innerHeight
          };
          var v = this.getPlacementIdOverrideFromGetParam(),
            w = null,
            O = e.map(function (e) {
              var t = {},
                d = v || r.getPlacementId(e);
              t.id = e.bidId, t.tagid = d, t.secure = "https:" === window.location.protocol ? 1 : 0;
              var l,
                p = [];
              if (e.hasOwnProperty("mediaTypes")) {
                if (e.mediaTypes.hasOwnProperty(s.Mk) && (p = e.mediaTypes[s.Mk].sizes, (0, i.logInfo)("setting banner size from the mediaTypes.banner element for bidId " + t.id + ": ", p)), e.mediaTypes.hasOwnProperty(s.pX)) {
                  if ((0, i.logInfo)("openrtb 2.5 compliant video"), "object" == c(e.mediaTypes[s.pX])) {
                    var g = (0, o.Z)(e, "params.video", {});
                    t.video = r.unpackVideoConfigIntoIABformat(e.mediaTypes[s.pX], g), t.video = r.addVideoDefaults(t.video, e.mediaTypes[s.pX], g);
                  }
                  var h = (l = D(t.video)) ? l[0] && "object" === c(l[0]) && ((0, i.logInfo)("getWidthAndHeightFromVideoObject found nested array inside playerSize.", l[0]), "number" != typeof (l = l[0])[0] && "string" != typeof l[0]) ? ((0, i.logInfo)("getWidthAndHeightFromVideoObject found non-number/string type inside the INNER array in playerSize. This is totally wrong - cannot continue.", l[0]), null) : 2 !== l.length ? ((0, i.logInfo)("getWidthAndHeightFromVideoObject found playerSize with length of " + l.length + ". This is totally wrong - cannot continue."), null) : {
                    w: l[0],
                    h: l[1]
                  } : null;
                  (0, i.logInfo)("setting video object from the mediaTypes.video element: " + t.id + ":", t.video, "wh=", h), h && "object" === c(h) ? (t.video.w = h.w, t.video.h = h.h, function (e) {
                    var t = D(e);
                    return t ? t.length < 1 ? null : t[0] && "object" === c(t[0]) : null;
                  }(t.video) ? ((0, i.logInfo)("setting obj.video.format to be an array of objects"), t.video.ext.format = [h]) : ((0, i.logInfo)("setting obj.video.format to be an object"), t.video.ext.format = h)) : (0, i.logWarn)("cannot set w, h & format values for video; the config is not right");
                }
                e.mediaTypes.hasOwnProperty(s.B5) && (t.native = e.mediaTypes[s.B5], (0, i.logInfo)("setting native object from the mediaTypes.native element: " + t.id + ":", t.native)), e.hasOwnProperty("getFloor") ? ((0, i.logInfo)("This bidRequest object has property: getFloor"), t.floor = r.getFloorObjectForAuction(e), (0, i.logInfo)("obj.floor is : ", t.floor)) : (0, i.logInfo)("This bidRequest object DOES NOT have property: getFloor");
              } else e.hasOwnProperty("sizes") ? ((0, i.logInfo)("no mediaTypes detected - will use the sizes array in the config root"), p = e.sizes) : (0, i.logInfo)("no mediaTypes detected, no sizes array in the config root either. Cannot set sizes for banner type");
              if (p.length > 0 && (t.banner = {
                topframe: 1,
                w: p[0][0] || 0,
                h: p[0][1] || 0,
                format: p.map(function (e) {
                  return {
                    w: e[0],
                    h: e[1]
                  };
                })
              }), t.placementId = d, (0, n.Z)(t, "ext.prebid", {
                storedrequest: {
                  id: d
                }
              }), t.ext[a] = {}, t.ext[a].adUnitCode = e.adUnitCode, t.ext[a].transactionId = e.transactionId, e.params.hasOwnProperty("customData") && (t.ext[a].customData = e.params.customData), (0, i.logInfo)("obj.ext.".concat(a, " is "), t.ext[a]), null != I) if ((0, i.logInfo)("setting isTestMode to ", I), t.ext[a].hasOwnProperty("customData")) for (var b = 0; b < t.ext[a].customData.length; b++) t.ext[a].customData[b].targeting[m] = I;else t.ext[a].customData = [{
                settings: {},
                targeting: {}
              }], t.ext[a].customData[0].targeting[m] = I;
              return f && (0, o.Z)(f, "site") && ((0, i.logInfo)("added fpd.site"), (0, o.Z)(t, "ext." + a + ".customData.0.targeting", !1) ? t.ext[a].customData[0].targeting = u(t.ext[a].customData[0].targeting, f.site) : (0, n.Z)(t, "ext." + a + ".customData.0.targeting", f.site)), !w && (0, o.Z)(e, "schain") && (w = e.schain), t;
            }),
            S = {};
          if (S[a] = {}, S[a][l + "_pb_v"] = y, S[a][l + "_rw"] = v ? 1 : 0, e.length > 0) {
            var B = this.cookieSyncBag.userIdObject;
            B.hasOwnProperty("pubcid") && (S[a].pubcid = B.pubcid);
          }
          S[a].pv = this.getPageId();
          var k = this.getWhitelabelConfigItem("ozone.oz_omp_floor");
          (0, i.logInfo)("".concat(l, "_omp_floor dollar value = "), k), "number" == typeof k ? S[a][l + "_omp_floor"] = k : void 0 !== k && (0, i.logError)("".concat(l, "_omp_floor is invalid - IF SET then this must be a number, representing dollar value eg. ").concat(l, "_omp_floor: 1.55. You have it set as a ") + c(k));
          var A = this.getWhitelabelConfigItem("ozone.oz_whitelist_adserver_keys"),
            T = (0, i.isArray)(A) && A.length > 0;
          S[a][l + "_kvp_rw"] = T ? 1 : 0, "ozone" != a && ((0, i.logInfo)("setting aliases object"), S.prebid = {
            aliases: {
              ozone: a
            }
          }), b.hasOwnProperty("ozf") && (S[a].ozf = "true" == b.ozf || 1 == b.ozf ? 1 : 0), b.hasOwnProperty("ozpf") && (S[a].ozpf = "true" == b.ozpf || 1 == b.ozpf ? 1 : 0), b.hasOwnProperty("ozrp") && b.ozrp.match(/^[0-3]$/) && (S[a].ozrp = parseInt(b.ozrp)), b.hasOwnProperty("ozip") && b.ozip.match(/^\d+$/) && (S[a].ozip = parseInt(b.ozip)), null != this.propertyBag.endpointOverride && (S[a].origin = this.propertyBag.endpointOverride);
          var P = this.generateEids(e);
          if (h.site = {
            publisher: {
              id: p.publisherId
            },
            page: document.location.href,
            id: p.siteId
          }, h.test = b.hasOwnProperty("pbjs_debug") && "true" === b.pbjs_debug ? 1 : 0, t && t.gdprConsent) {
            (0, i.logInfo)("ADDING GDPR info");
            var x = (0, o.Z)(t, "gdprConsent.apiVersion", 1);
            h.regs = {
              ext: {
                gdpr: t.gdprConsent.gdprApplies ? 1 : 0,
                apiVersion: x
              }
            }, (0, o.Z)(h, "regs.ext.gdpr") ? (0, n.Z)(h, "user.ext.consent", t.gdprConsent.consentString) : (0, i.logInfo)("**** Strange CMP info: bidderRequest.gdprConsent exists BUT bidderRequest.gdprConsent.gdprApplies is false. See bidderRequest logged above. ****");
          } else (0, i.logInfo)("WILL NOT ADD GDPR info; no bidderRequest.gdprConsent object");
          if (t && t.uspConsent ? ((0, i.logInfo)("ADDING CCPA info"), (0, n.Z)(h, "user.ext.uspConsent", t.uspConsent)) : (0, i.logInfo)("WILL NOT ADD CCPA info; no bidderRequest.uspConsent."), w && ((0, i.logInfo)("schain found"), (0, n.Z)(h, "source.ext.schain", w)), !0 === d.vc.getConfig("coppa") && (0, n.Z)(h, "regs.coppa", 1), g) {
            (0, i.logInfo)("buildRequests starting to generate response for a single request"), h.id = t.auctionId, h.auctionId = t.auctionId, h.imp = O, h.ext = S, (0, n.Z)(h, "source.tid", t.auctionId), (0, n.Z)(h, "user.ext.eids", P);
            var R = {
              method: "POST",
              url: this.getAuctionUrl(),
              data: JSON.stringify(h),
              bidderRequest: t
            };
            return (0, i.logInfo)("buildRequests request data for single = ", JSON.parse(JSON.stringify(h))), this.propertyBag.buildRequestsEnd = new Date().getTime(), (0, i.logInfo)("buildRequests going to return for single at time ".concat(this.propertyBag.buildRequestsEnd, " (took ").concat(this.propertyBag.buildRequestsEnd - this.propertyBag.buildRequestsStart, "ms): "), R), R;
          }
          var _ = O.map(function (e) {
            (0, i.logInfo)("buildRequests starting to generate non-single response, working on imp : ", e);
            var o = u({}, h);
            return e.ext[a].pageAuctionId = t.auctionId, o.id = e.ext[a].transactionId, o.auctionId = e.ext[a].transactionId, o.imp = [e], o.ext = S, (0, n.Z)(o, "source.tid", e.ext[a].transactionId), (0, n.Z)(o, "user.ext.eids", P), (0, i.logInfo)("buildRequests RequestSingle (for non-single) = ", o), {
              method: "POST",
              url: r.getAuctionUrl(),
              data: JSON.stringify(o),
              bidderRequest: t
            };
          });
          return this.propertyBag.buildRequestsEnd = new Date().getTime(), (0, i.logInfo)("buildRequests going to return for non-single at time ".concat(this.propertyBag.buildRequestsEnd, " (took ").concat(this.propertyBag.buildRequestsEnd - this.propertyBag.buildRequestsStart, "ms): "), _), _;
        },
        getFloorObjectForAuction: function (e) {
          var t = {
            banner: (0, o.Z)(e, "mediaTypes.banner.sizes", null),
            video: (0, o.Z)(e, "mediaTypes.video.playerSize", null),
            native: (0, o.Z)(e, "mediaTypes.native.image.sizes", null)
          };
          (0, i.logInfo)("getFloorObjectForAuction mediaTypesSizes : ", t);
          var r = {};
          return t.banner && (r.banner = e.getFloor({
            mediaType: "banner",
            currency: "USD",
            size: t.banner
          })), t.video && (r.video = e.getFloor({
            mediaType: "video",
            currency: "USD",
            size: t.video
          })), t.native && (r.native = e.getFloor({
            mediaType: "native",
            currency: "USD",
            size: t.native
          })), (0, i.logInfo)("getFloorObjectForAuction returning : ", JSON.parse(JSON.stringify(r))), r;
        },
        interpretResponse: function (e, t) {
          var r = this;
          t && t.bidderRequest && t.bidderRequest.bids && this.loadWhitelabelData(t.bidderRequest.bids[0]);
          var n = new Date().getTime(),
            a = this.propertyBag.whitelabel.bidder,
            d = this.propertyBag.whitelabel.keyPrefix;
          if ((0, i.logInfo)("interpretResponse time: ".concat(n, " . Time between buildRequests done and interpretResponse start was ").concat(n - this.propertyBag.buildRequestsEnd, "ms")), (0, i.logInfo)("serverResponse, request", JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t))), !(e = e.body || {}).hasOwnProperty("seatbid")) return [];
          if ("object" !== c(e.seatbid)) return [];
          var l = [],
            p = this.getWhitelabelConfigItem("ozone.enhancedAdserverTargeting");
          (0, i.logInfo)("enhancedAdserverTargeting", p), void 0 === p && (p = !0), (0, i.logInfo)("enhancedAdserverTargeting", p), e.seatbid = function (e) {
            (0, i.logInfo)("injectAdIdsIntoAllBidResponses", e);
            for (var t = 0; t < e.length; t++) for (var r = e[t], o = 0; o < r.bid.length; o++) r.bid[o].adId = "".concat(r.bid[o].impid, "-").concat(t, "-").concat(m.propertyBag.whitelabel.keyPrefix, "-").concat(o);
            return e;
          }(e.seatbid), e.seatbid = this.removeSingleBidderMultipleBids(e.seatbid);
          for (var u = this.getWhitelabelConfigItem("ozone.oz_omp_floor"), g = "number" == typeof u, h = this.getWhitelabelConfigItem("ozone.oz_whitelist_adserver_keys"), f = (0, i.isArray)(h) && h.length > 0, b = 0; b < e.seatbid.length; b++) for (var I = e.seatbid[b], D = function () {
              var n = r.getBidRequestForBidId(I.bid[A].impid, t.bidderRequest.bids);
              (0, i.logInfo)("seatbid:".concat(b, ", bid:").concat(A, " Going to set default w h for seatbid/bidRequest"), I.bid[A], n);
              var c = v(n),
                m = c.defaultWidth,
                D = c.defaultHeight,
                T = B(I.bid[A], m, D);
              T.meta = {
                advertiserDomains: T.adomain || []
              };
              var P = null,
                x = !1,
                R = (0, o.Z)(T, "ext.prebid.type");
              (0, i.logInfo)("this bid type is : ".concat(R), A), R === s.pX && (x = !0, "outstream" === (P = r.getVideoContextForBidId(T.bidId, t.bidderRequest.bids)) ? ((0, i.logInfo)("going to attach a renderer to OUTSTREAM video : ", A), T.renderer = k(T.bidId)) : (0, i.logInfo)("bid is not an outstream video, will not attach a renderer: ", A));
              var _ = {};
              if (p) {
                var z = O(T.bidId, e.seatbid);
                (0, i.logInfo)("Going to iterate allBidsForThisBidId", z), Object.keys(z).forEach(function (e, t, r) {
                  (0, i.logInfo)("adding adserverTargeting for ".concat(e, " for bidId ").concat(T.bidId)), _[d + "_" + e] = e, _[d + "_" + e + "_crid"] = String(z[e].crid), _[d + "_" + e + "_adv"] = String(z[e].adomain), _[d + "_" + e + "_adId"] = String(z[e].adId), _[d + "_" + e + "_pb_r"] = S(z[e].price, z[e].ext.prebid.type), z[e].hasOwnProperty("dealid") && (_[d + "_" + e + "_dealid"] = String(z[e].dealid)), g && (_[d + "_" + e + "_omp"] = z[e].price >= u ? "1" : "0"), x && (_[d + "_" + e + "_vid"] = P);
                  var n = (0, o.Z)(z[e], "ext.bidder.".concat(a, ".floor"), null);
                  null != n && (_[d + "_" + e + "_flr"] = n);
                  var s = (0, o.Z)(z[e], "ext.bidder.".concat(a, ".ruleId"), null);
                  null != s && (_[d + "_" + e + "_rid"] = s), e.match(/^ozappnexus/) && (_[d + "_" + e + "_sid"] = String(z[e].cid));
                });
              } else f ? (0, i.logWarn)("You have set a whitelist of adserver keys but this will be ignored because ".concat(a, ".enhancedAdserverTargeting is set to false. No per-bid keys will be sent to adserver.")) : (0, i.logInfo)("".concat(a, ".enhancedAdserverTargeting is set to false, so no per-bid keys will be sent to adserver."));
              var j = w(T.bidId, e.seatbid),
                q = j.seat,
                E = j.bid;
              _[d + "_auc_id"] = String(t.bidderRequest.auctionId), _[d + "_winner"] = String(q), _[d + "_bid"] = "true", p && (_[d + "_imp_id"] = String(E.impid), _[d + "_pb_v"] = y, _[d + "_pb"] = E.price, _[d + "_pb_r"] = S(E.price, R), _[d + "_adId"] = String(E.adId), _[d + "_size"] = "".concat(E.width, "x").concat(E.height)), f && ((0, i.logInfo)("Going to filter out adserver targeting keys not in the whitelist: ", h), Object.keys(_).forEach(function (e) {
                -1 === h.indexOf(e) && delete _[e];
              })), T.adserverTargeting = _, l.push(T);
            }, A = 0; A < I.bid.length; A++) D();
          var T = new Date().getTime();
          return (0, i.logInfo)("interpretResponse going to return at time ".concat(T, " (took ").concat(T - n, "ms) Time from buildRequests Start -> interpretRequests End = ").concat(T - this.propertyBag.buildRequestsStart, "ms"), l), l;
        },
        getWhitelabelConfigItem: function (e) {
          if ("ozone" == this.propertyBag.whitelabel.bidder) return d.vc.getConfig(e);
          var t = e.replace("ozone", this.propertyBag.whitelabel.bidder);
          return t = t.replace("oz_", this.propertyBag.whitelabel.keyPrefix + "_"), d.vc.getConfig(t);
        },
        removeSingleBidderMultipleBids: function (e) {
          for (var t = [], r = 0; r < e.length; r++) {
            for (var o = e[r], n = {
                seat: o.seat,
                bid: []
              }, a = [], s = 0; s < o.bid.length; s++) {
              var d = o.bid[s];
              if (!(0, i.contains)(a, d.impid)) {
                a.push(d.impid);
                for (var l = s + 1; l < o.bid.length; l++) o.bid[l].impid === d.impid && o.bid[l].price > d.price && (d = o.bid[l]);
                n.bid.push(d);
              }
            }
            t.push(n);
          }
          return t;
        },
        getUserSyncs: function (e, t, r, n) {
          if ((0, i.logInfo)("getUserSyncs optionsType", e, "serverResponse", t, "gdprConsent", r, "usPrivacy", n, "cookieSyncBag", this.cookieSyncBag), !t || 0 === t.length) return [];
          if (e.iframeEnabled) {
            var a = [];
            for (var s in document.location.search.match(/pbjs_debug=true/) && a.push("pbjs_debug=true"), a.push("gdpr=" + ((0, o.Z)(r, "gdprApplies", !1) ? "1" : "0")), a.push("gdpr_consent=" + (0, o.Z)(r, "consentString", "")), a.push("usp_consent=" + (n || "")), this.cookieSyncBag.userIdObject) a.push(s + "=" + this.cookieSyncBag.userIdObject[s]);
            a.push("publisherId=" + this.cookieSyncBag.publisherId), a.push("siteId=" + this.cookieSyncBag.siteId), a.push("cb=" + Date.now()), a.push("bidder=" + this.propertyBag.whitelabel.bidder);
            var d = a.join("&");
            return d.length > 0 && (d = "?" + d), (0, i.logInfo)("getUserSyncs going to return cookie sync url : " + this.getCookieSyncUrl() + d), [{
              type: "iframe",
              url: this.getCookieSyncUrl() + d
            }];
          }
        },
        getBidRequestForBidId: function (e, t) {
          for (var r = 0; r < t.length; r++) if (t[r].bidId === e) return t[r];
          return null;
        },
        getVideoContextForBidId: function (e, t) {
          var r = this.getBidRequestForBidId(e, t);
          return null != r ? (0, o.Z)(r, "mediaTypes.video.context", "unknown") : null;
        },
        findAllUserIds: function (e) {
          var t = {},
            r = ["pubcid", "tdid", "idl_env", "criteoId", "lotamePanoramaId", "fabrickId"];
          if (e.hasOwnProperty("userId")) {
            for (var n in r) {
              var a = r[n];
              e.userId.hasOwnProperty(a) && ("string" == typeof e.userId[a] ? t[a] = e.userId[a] : "object" == c(e.userId[a]) ? ((0, i.logError)("WARNING: findAllUserIds had to use first key in user object to get value for bid.userId key: ".concat(a, ". Prebid adapter should be updated.")), t[a] = e.userId[a][Object.keys(e.userId[a])[0]]) : (0, i.logError)("failed to get string key value for userId : ".concat(a)));
            }
            var s = (0, o.Z)(e.userId, "lipb.lipbid");
            s && (t.lipb = {
              lipbid: s
            });
            var d = (0, o.Z)(e.userId, "id5id.uid");
            d && (t.id5id = d);
            var l = (0, o.Z)(e.userId, "parrableId.eid");
            l && (t.parrableId = l);
            var p = (0, o.Z)(e.userId, "sharedid.id");
            p && (t.sharedid = p);
            var u = (0, o.Z)(e.userId, "sharedid.third");
            u && (t.sharedidthird = u);
          }
          if (!t.hasOwnProperty("pubcid")) {
            var g = (0, o.Z)(e, "crumbs.pubcid");
            g && (t.pubcid = g);
          }
          return t;
        },
        getPlacementId: function (e) {
          return e.params.placementId.toString();
        },
        getPlacementIdOverrideFromGetParam: function () {
          var e = this.propertyBag.whitelabel.keyPrefix,
            t = this.getGetParametersAsObject();
          if (t.hasOwnProperty(e + "storedrequest")) {
            if (this.isValidPlacementId(t[e + "storedrequest"])) return (0, i.logInfo)("using GET ".concat(e, "storedrequest ") + t[e + "storedrequest"] + " to replace placementId"), t[e + "storedrequest"];
            (0, i.logError)("GET ".concat(e, "storedrequest FAILED VALIDATION - will not use it"));
          }
          return null;
        },
        generateEids: function (e) {
          var t,
            r = e[0];
          return r && r.userId && (t = r.userIdAsEids, this.handleTTDId(t, e)), t;
        },
        handleTTDId: function (e, t) {
          var r = null,
            n = d.vc.getConfig("adsrvrOrgId");
          (0, i.isStr)((0, o.Z)(t, "0.userId.tdid")) ? r = t[0].userId.tdid : n && (0, i.isStr)(n.TDID) && (r = n.TDID), null !== r && e.push({
            source: "adserver.org",
            uids: [{
              id: r,
              atype: 1,
              ext: {
                rtiPartner: "TDID"
              }
            }]
          });
        },
        getGetParametersAsObject: function () {
          for (var e = location.search.substr(1).split("&"), t = {}, r = null, i = 0; i < e.length; i++) t[(r = e[i].split("="))[0]] = r[1];
          return t;
        },
        blockTheRequest: function () {
          var e = this.getWhitelabelConfigItem("ozone.oz_request");
          return "boolean" == typeof e && !e && ((0, i.logWarn)("Will not allow auction : ".concat(this.propertyBag.whitelabel.keyPrefix, "one.").concat(this.propertyBag.whitelabel.keyPrefix, "_request is set to false")), !0);
        },
        getPageId: function () {
          if (null == this.propertyBag.pageId) {
            for (var e = "", t = 20; t > 0; t--) e += "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(36 * Math.random())];
            this.propertyBag.pageId = new Date().getTime() + "_" + e;
          }
          return this.propertyBag.pageId;
        },
        unpackVideoConfigIntoIABformat: function (e, t) {
          var r = {
            ext: {}
          };
          return r = this._unpackVideoConfigIntoIABformat(r, e), this._unpackVideoConfigIntoIABformat(r, t);
        },
        _unpackVideoConfigIntoIABformat: function (e, t) {
          var r = ["mimes", "minduration", "maxduration", "protocols", "w", "h", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype"],
            o = function (i) {
              a = !1, r.forEach(function (r) {
                r === i && (e[i] = t[i], a = !0);
              }), a || (e.ext[i] = t[i]);
            };
          for (var n in t) {
            var a;
            o(n);
          }
          return t.hasOwnProperty("ext") && "object" === c(t.ext) && (t.hasOwnProperty("ext") ? e.ext = (0, i.mergeDeep)(e.ext, t.ext) : e.ext = t.ext), e;
        },
        addVideoDefaults: function (e, t, r) {
          return e = this._addVideoDefaults(e, t, !1), this._addVideoDefaults(e, r, !0);
        },
        _addVideoDefaults: function (e, t, r) {
          var i = (0, o.Z)(t, "context");
          "outstream" === i ? e.placement = 3 : "instream" === i && (e.placement = 1);
          var n = (0, o.Z)(t, "skippable", null);
          return null == n ? r && !e.hasOwnProperty("skip") && (e.skip = n ? 1 : 0) : e.skip = n ? 1 : 0, e;
        }
      };
    function I(e) {
      return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e;
    }
    function v(e) {
      if (!e) return (0, i.logInfo)("defaultSize received empty bid obj! going to return fixed default size"), {
        defaultHeight: 250,
        defaultWidth: 300
      };
      var t = e.sizes,
        r = {};
      return r.defaultWidth = I(t)[0], r.defaultHeight = I(t)[1], r;
    }
    function w(e, t) {
      for (var r = null, i = null, o = 0; o < t.length; o++) for (var n = t[o].bid, a = t[o].seat, s = 0; s < n.length; s++) if (n[s].impid === e && (null == r || r.price < n[s].price)) {
        r = n[s], i = a;
        break;
      }
      return {
        seat: i,
        bid: r
      };
    }
    function O(e, t) {
      for (var r = {}, i = 0; i < t.length; i++) for (var o = t[i].bid, n = t[i].seat, a = 0; a < o.length; a++) o[a].impid === e && (r.hasOwnProperty(n) ? r[n].price < o[a].price && (r[n] = o[a]) : r[n] = o[a]);
      return r;
    }
    function S(e, t) {
      var r = d.vc.getConfig("mediaTypePriceGranularity.".concat(t)),
        o = d.vc.getConfig("customPriceBucket"),
        n = d.vc.getConfig("priceGranularity"),
        a = function (e, t, r, i) {
          return "object" === c(t) ? t : "custom" === r ? i : "";
        }(0, r, n, o),
        s = function (e, t, r) {
          return "string" == typeof t ? t : "object" === c(t) ? "custom" : "string" == typeof r ? r : "auto";
        }(0, r, n);
      (0, i.logInfo)("getRoundedBid. price:", e, "mediaType:", t, "configkey:", s, "configObject:", a, "mediaTypeGranularity:", r, "strBuckets:", n);
      var p = (0, l.D)(e, a, d.vc.getConfig("currency.granularityMultiplier"));
      (0, i.logInfo)("priceStringsObj", p);
      var u = {
        medium: "med",
        custom: "custom",
        high: "high",
        low: "low",
        dense: "dense"
      };
      if (u.hasOwnProperty(s)) {
        var g = u[s];
        return (0, i.logInfo)("getRoundedBid: looking for priceStringsKey:", g), p[g];
      }
      return p.auto;
    }
    function B(e, t, r) {
      return e.cpm = e.price, e.bidId = e.impid, e.requestId = e.impid, e.width = e.w || t, e.height = e.h || r, e.ad = e.adm, e.netRevenue = !0, e.creativeId = e.crid, e.currency = "USD", e.ttl = 300, e;
    }
    function D(e) {
      (0, i.logInfo)("getPlayerSizeFromObject received object", e);
      var t = (0, o.Z)(e, "playerSize");
      return t || (t = (0, o.Z)(e, "ext.playerSize")), t ? "object" !== c(t) ? ((0, i.logError)("getPlayerSizeFromObject FAILED: playerSize is not an object/array", e), null) : t : ((0, i.logError)("getPlayerSizeFromObject FAILED: no playerSize in video object or ext", e), null);
    }
    function k(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = window.ozoneVideo;
      (0, i.logInfo)("newRenderer going to set loaded to ".concat(r ? "true" : "false"));
      var o = p.Th.install({
        url: m.getRendererUrl(),
        config: t,
        loaded: r,
        adUnitCode: e
      });
      try {
        o.setRender(A);
      } catch (e) {
        (0, i.logError)("Prebid Error when calling setRender on renderer", JSON.parse(JSON.stringify(o)), e);
      }
      return o;
    }
    function A(e) {
      (0, i.logInfo)("outstreamRender called. Going to push the call to window.ozoneVideo.outstreamRender(bid) bid =", JSON.parse(JSON.stringify(e))), e.renderer.push(function () {
        window.ozoneVideo.outstreamRender(e);
      });
    }
    (0, a.registerBidder)(m), (0, i.logInfo)("*BidAdapter ".concat(y, " was loaded")), window.owpbjs.installedModules.push("ozoneBidAdapter");
  }
}, function (e) {
  e(e.s = 6901);
}]);
function generateUniqueId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2);
}
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[8743], {
  6978: function (n, o, t) {
    var i = t(8962),
      u = t(2319),
      s = t(5644),
      e = t(9853),
      b = t(6996),
      c = "https://pm-harshad-mane.github.io/pbjs-debug-ui/bundle.js",
      d = "_pbjsDebugUI",
      a = "_auctions",
      f = "_bidsWon",
      p = "_debug",
      j = "_tcf2Enforcement",
      w = !1;
    function E() {
      !1 === w && (w = !0, (0, b.B)(c, "pbjs-debug-ui"));
    }
    function r() {
      !1 === (0, e.isPlainObject)(owpbjs[d]) && (owpbjs[d] = {});
    }
    function l() {
      !1 === (0, e.isArray)(owpbjs[d][a]) && (owpbjs[d][a] = []);
    }
    function N(n) {
      var o = owpbjs[d][a].find(function (o) {
        return o.auctionId === n;
      });
      return !1 === (0, e.isPlainObject)(o) && (o = {
        auctionId: n
      }, owpbjs[d][a].push(o)), o;
    }
    !0 === i.vc.getConfig("debug") && (u.default.on(s.EVENTS.AUCTION_INIT, function (n) {
      r(), l(), N(n.auctionId)._init = n;
    }), u.default.on(s.EVENTS.AUCTION_END, function (n) {
      r(), l(), n.auctionStart = n.timestamp, N(n.auctionId)._end = n;
    }), u.default.on(s.EVENTS.AUCTION_DEBUG, function (n) {
      r(), !1 === (0, e.isArray)(owpbjs[d][p]) && (owpbjs[d][p] = []), function (n) {
        owpbjs[d][p].push(n);
      }(n);
    }), u.default.on(s.EVENTS.SET_TARGETING, function (n) {
      r(), l(), owpbjs[d][a][owpbjs[d][a].length - 1]._targeting = n;
    }), u.default.on(s.EVENTS.TCF2_ENFORCEMENT, function (n) {
      r(), !1 === (0, e.isPlainObject)(owpbjs[d][j]) && (owpbjs[d][j] = {}), function (n) {
        owpbjs[d][j] = n;
      }(n);
    }), u.default.on(s.EVENTS.BID_WON, function (n) {
      r(), l();
      var o = N(n.auctionId);
      (0, e.isPlainObject)(o[f]) || (o[f] = {}), o[f][n.adId] = n;
    }), window.PBJS_NAMESPACE = "owpbjs", window.document.addEventListener("DOMContentLoaded", function () {
      E();
    }), setTimeout(function () {
      E();
    }, 3e3)), window.owpbjs.installedModules.push("prebidJSDebugUI");
  }
}, function (n) {
  n(n.s = 6978);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[9185], {
  3836: function (e, n, t) {
    var i = t(9853),
      o = t(3964),
      r = t(7602),
      s = t(5644),
      a = t(5755),
      d = t(8962),
      u = t(2528);
    function c() {
      return c = Object.assign ? Object.assign.bind() : function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }, c.apply(this, arguments);
    }
    function p(e) {
      return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, p(e);
    }
    var l = "https://t.pubmatic.com/",
      f = l + "wl?",
      b = l + "wt?",
      m = "PubMatic-Analytics: ",
      g = {
        auctions: {}
      },
      y = "no-bid",
      v = "error",
      T = "timeout-error",
      I = "",
      h = "USD",
      w = 0,
      R = 0,
      D = 0,
      C = window.encodeURIComponent,
      E = {
        BANNER: 0,
        VIDEO: 1,
        NATIVE: 2
      },
      U = w,
      N = R,
      S = D,
      A = [];
    function O(e) {
      return {
        width: e.w || e[0],
        height: e.h || e[1]
      };
    }
    function k(e) {
      return {
        banner: 1,
        native: 1,
        video: 1
      }.hasOwnProperty(e);
    }
    function _() {
      var e = 3;
      try {
        var n = navigator.userAgent;
        if (n && (0, i.isStr)(n) && "" != n.trim()) {
          n = n.toLowerCase().trim();
          var t = new RegExp("(mobi|tablet|ios).*");
          e = n.match(t) ? 2 : 1;
        }
      } catch (e) {}
      return e;
    }
    function q(e, n) {
      return e.params.regexPattern ? e.params.regexPattern : e.bidResponse && e.bidResponse.regexPattern ? e.bidResponse.regexPattern : e.params.kgpv ? P(e.params.kgpv, e.bidResponse) : n;
    }
    function P(e, n) {
      if (n && n.mediaType && "video" == n.mediaType) {
        var t = ["", "0x0"],
          i = e.split("@");
        if (i.length > 1) {
          if (2 == i.length) {
            if (i[1].indexOf(":") > -1) {
              var o = i[1].split(":");
              t[1] = t[1] + ":" + o[1];
            }
            t[0] = i[0];
          }
          e = t.join("@");
        }
      }
      return e;
    }
    function x(e) {
      return window.PWT && (0, i.isFn)(window.PWT.getAdapterNameForAlias) ? window.PWT.getAdapterNameForAlias(e) : r.ZP.aliasRegistry[e] || e;
    }
    function B(e) {
      if (e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0) {
        var n = e.meta.advertiserDomains[0];
        if (n) try {
          return new URL(n).hostname.replace("www.", "");
        } catch (e) {
          return (0, i.logWarn)(m + "Adomain URL (Not a proper URL):", n), n.split("/")[0].replace("www.", "");
        }
      }
    }
    function j(e, n, t) {
      return t = t && t.length > 0 ? t[0] : null, Object.keys(e.bids).reduce(function (i, o) {
        var r = e.bids[o],
          s = r.bidResponse && r.bidResponse.prebidBidId;
        return i.push({
          pn: x(r.bidder),
          bc: r.bidder,
          bidid: s || r.bidId,
          origbidid: r.bidId,
          db: r.bidResponse ? 0 : 1,
          kgpv: q(r, n),
          kgpsv: r.params && r.params.kgpv ? P(r.params.kgpv, r.bidResponse) : n,
          psz: r.bidResponse ? r.bidResponse.dimensions.width + "x" + r.bidResponse.dimensions.height : "0x0",
          eg: r.bidResponse ? r.bidResponse.bidGrossCpmUSD : 0,
          en: r.bidResponse ? r.bidResponse.bidPriceUSD : 0,
          di: r.bidResponse && r.bidResponse.dealId || I,
          dc: r.bidResponse && r.bidResponse.dealChannel || I,
          l1: r.bidResponse ? r.clientLatencyTimeMs : 0,
          l2: 0,
          adv: r.bidResponse && B(r.bidResponse) || void 0,
          ss: A.indexOf(r.bidder) > -1 ? 1 : 0,
          t: r.status == v && r.error.code == T ? 1 : 0,
          wb: t && t.adId === r.bidId ? 1 : 0,
          mi: r.bidResponse ? r.bidResponse.mi : window.matchedimpressions && window.matchedimpressions[r.bidder],
          af: r.bidResponse && r.bidResponse.mediaType || void 0,
          ocpm: r.bidResponse && r.bidResponse.originalCpm || 0,
          ocry: r.bidResponse && r.bidResponse.originalCurrency || h,
          piid: r.bidResponse && r.bidResponse.partnerImpId || I,
          frv: A.indexOf(r.bidder) > -1 ? void 0 : r.bidResponse && r.bidResponse.floorData ? r.bidResponse.floorData.floorRuleValue : void 0
        }), i;
      }, []);
    }
    function M(e, n) {
      var t = Object.values(e.bids).filter(function (e) {
        return !!e.bidResponse && "native" === e.bidResponse.mediaType;
      })[0];
      return t || void 0 === t && 0 === e.dimensions.length ? ["1x1"] : e.dimensions.map(function (e) {
        return e[0] + "x" + e[1];
      });
    }
    function F(e) {
      return e ? Object.keys(e.mediaTypes).map(function (e) {
        return E[e.toUpperCase()];
      }) : [];
    }
    function L(e, n) {
      return e.filter(function (e) {
        return e.divID && e.divID == n || e.code == n;
      })[0];
    }
    function V(e, n) {
      var t,
        i,
        o,
        r = e.auctionId,
        s = d.vc.getConfig("pageUrl") || g.auctions[r].referer || "",
        u = g.auctions[r],
        c = u.floorData,
        p = {
          s: []
        },
        l = f;
      u && (u.sent || (l += "pubid=" + U, p.pubid = "" + U, p.iid = "" + r, p.to = "" + u.timeout, p.purl = s, p.orig = (t = s, (i = window.document.createElement("a")).href = t, i.hostname), p.tst = Math.round(new window.Date().getTime() / 1e3), p.pid = "" + N, p.pdvid = "" + S, p.psl = function (e) {
        var n = window.pbsLatency,
          t = n && n[e],
          i = t ? 0 : void 0;
        return t && t.startTime && t.endTime && (i = t.endTime - t.startTime), i;
      }(r), p.dvc = {
        plt: _()
      }, p.tgid = (o = parseInt(d.vc.getConfig("testGroupId") || 0)) <= 15 && o >= 0 ? o : 0, c && (p.fmv = c.floorRequestData && c.floorRequestData.modelVersion || void 0, p.ft = c.floorResponseData ? 0 == c.floorResponseData.enforcements.enforceJS ? 0 : 1 : void 0), p.s = Object.keys(u.adUnitCodes).reduce(function (e, t) {
        var i = u.adUnitCodes[t],
          o = L(u.origAdUnits, t),
          r = {
            sn: t,
            au: o.adUnitId || t,
            mt: F(o),
            sz: M(i),
            fskp: c && c.floorRequestData ? 0 == c.floorRequestData.skipped ? 0 : 1 : void 0,
            ps: j(i, t, n.filter(function (e) {
              return e.adUnitCode === t;
            }))
          };
        return e.push(r), e;
      }, []), u.sent = !0, (0, a.h)(l, null, "json=" + C(JSON.stringify(p)), {
        contentType: "application/x-www-form-urlencoded",
        withCredentials: !0,
        method: "POST"
      })));
    }
    var W = (0, o.Z)({
        analyticsType: "endpoint"
      }),
      G = c({}, W, {
        enableAnalytics: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = !1;
          "object" === p(e.options) ? (e.options.publisherId && (U = Number(e.options.publisherId)), N = Number(e.options.profileId) || R, S = Number(e.options.profileVersionId) || D) : ((0, i.logError)(m + "Config not found."), n = !0), U || ((0, i.logError)(m + "Missing publisherId(Number)."), n = !0), n ? (0, i.logError)(m + "Not collecting data due to error(s).") : W.enableAnalytics.call(this, e);
        },
        disableAnalytics: function () {
          U = w, N = R, S = D, A = [], W.disableAnalytics.apply(this, arguments);
        },
        track: function (e) {
          var n = e.eventType,
            t = e.args;
          switch (n) {
            case s.EVENTS.AUCTION_INIT:
              !function (e) {
                var n;
                n = d.vc.getConfig("s2sConfig"), A = n && (0, i.isArray)(n.bidders) ? n.bidders : [];
                var t = (0, i.pick)(e, ["timestamp", "timeout", "bidderDonePendingCount", function () {
                  return e.bidderRequests.length;
                }]);
                t.adUnitCodes = {}, t.origAdUnits = e.adUnits, t.floorData = {}, t.referer = e.bidderRequests[0].refererInfo.referer, g.auctions[e.auctionId] = t;
              }(t);
              break;
            case s.EVENTS.BID_REQUESTED:
              !function (e) {
                e.bids.forEach(function (n) {
                  g.auctions[e.auctionId].adUnitCodes.hasOwnProperty(n.adUnitCode) || (g.auctions[e.auctionId].adUnitCodes[n.adUnitCode] = {
                    bids: {},
                    bidWon: !1,
                    dimensions: n.sizes
                  }), g.auctions[e.auctionId].adUnitCodes[n.adUnitCode].bids[n.bidId] = function (e) {
                    return (0, i.pick)(e, ["bidder", "bidId", "status", function () {
                      return y;
                    }, "finalSource as source", "params", "floorData", "adUnit", function () {
                      return (0, i.pick)(e, ["adUnitCode", "transactionId", "sizes as dimensions", function (e) {
                        return e.map(O);
                      }, "mediaTypes", function (n) {
                        return function (e, n) {
                          return n.mediaType && k(n.mediaType) ? [n.mediaType] : Array.isArray(e) ? e.filter(k) : "object" === p(e) ? (n.sizes || (n.dimensions = [], (0, i._each)(e, function (e) {
                            return n.dimensions = n.dimensions.concat(e.sizes.map(O));
                          })), Object.keys(e).filter(k)) : ["banner"];
                        }(n, e);
                      }]);
                    }]);
                  }(n), n.floorData && (g.auctions[e.auctionId].floorData.floorRequestData = n.floorData);
                });
              }(t);
              break;
            case s.EVENTS.BID_RESPONSE:
              !function (e) {
                var n,
                  t = g.auctions[e.auctionId].adUnitCodes[e.adUnitCode].bids[e.requestId];
                t ? (e.floorData && (g.auctions[e.auctionId].floorData.floorResponseData = e.floorData), t.bidId = e.adId, t.source = (void 0 === (n = t.source || e.source) ? n = "client" : "s2s" === n && (n = "server"), n.toLowerCase()), function (e, n) {
                  switch (n.getStatusCode()) {
                    case s.STATUS.GOOD:
                      e.status = "success", delete e.error;
                      break;
                    case s.STATUS.NO_BID:
                      e.status = y, delete e.error;
                      break;
                    default:
                      e.status = v, e.error = {
                        code: "request-error"
                      };
                  }
                }(t, e), t.clientLatencyTimeMs = Date.now() - g.auctions[e.auctionId].timestamp, t.bidResponse = function (e) {
                  return (0, i.pick)(e, ["bidPriceUSD", function () {
                    return "string" == typeof e.currency && e.currency.toUpperCase() === h ? window.parseFloat(Number(e.cpm).toFixed(2)) : "function" == typeof e.getCpmInNewCurrency ? window.parseFloat(Number(e.getCpmInNewCurrency(h)).toFixed(2)) : ((0, i.logWarn)(m + "Could not determine the Net cpm in USD for the bid thus using bid.cpm", e), e.cpm);
                  }, "bidGrossCpmUSD", function () {
                    return "string" == typeof e.originalCurrency && e.originalCurrency.toUpperCase() === h ? window.parseFloat(Number(e.originalCpm).toFixed(2)) : "function" == typeof (0, u.R)().convertCurrency ? window.parseFloat(Number((0, u.R)().convertCurrency(e.originalCpm, e.originalCurrency, h)).toFixed(2)) : ((0, i.logWarn)(m + "Could not determine the Gross cpm in USD for the bid, thus using bid.originalCpm", e), e.originalCpm);
                  }, "dealId", "currency", "cpm", function () {
                    return window.parseFloat(Number(e.cpm).toFixed(2));
                  }, "originalCpm", function () {
                    return window.parseFloat(Number(e.originalCpm).toFixed(2));
                  }, "originalCurrency", "dealChannel", "meta", "status", "error", "bidId", "mediaType", "params", "floorData", "mi", "regexPattern", function () {
                    return e.regexPattern || void 0;
                  }, "partnerImpId", "prebidBidId", "dimensions", function () {
                    return (0, i.pick)(e, ["width", "height"]);
                  }]);
                }(e)) : (0, i.logError)(m + "Could not find associated bid request for bid response with requestId: ", e.requestId);
              }(t);
              break;
            case s.EVENTS.BIDDER_DONE:
              !function (e) {
                g.auctions[e.auctionId].bidderDonePendingCount--, e.bids.forEach(function (e) {
                  var n = g.auctions[e.auctionId].adUnitCodes[e.adUnitCode].bids[e.bidId || e.requestId];
                  void 0 !== e.serverResponseTimeMs && (n.serverLatencyTimeMs = e.serverResponseTimeMs), n.status || (n.status = y), n.clientLatencyTimeMs || (n.clientLatencyTimeMs = Date.now() - g.auctions[e.auctionId].timestamp);
                });
              }(t);
              break;
            case s.EVENTS.BID_WON:
              !function (e) {
                var n, t, i, o, r, s, u, c;
                g.auctions[e.auctionId].adUnitCodes[e.adUnitCode].bidWon = e.requestId, n = e.auctionId, t = e.adUnitCode, i = g.auctions[n].adUnitCodes[t].bidWon, r = x((o = g.auctions[n].adUnitCodes[t].bids[i]).bidder), s = o.bidResponse && o.bidResponse.prebidBidId, u = L(g.auctions[n].origAdUnits, t).adUnitId || t, c = b, c += "pubid=" + U, c += "&purl=" + C(d.vc.getConfig("pageUrl") || g.auctions[n].referer || ""), c += "&tst=" + Math.round(new window.Date().getTime() / 1e3), c += "&iid=" + C(n), c += "&bidid=" + C(s || o.bidId), c += "&origbidid=" + C(o.bidId), c += "&pid=" + C(N), c += "&pdvid=" + C(S), c += "&slot=" + C(t), c += "&au=" + C(u), c += "&pn=" + C(r), c += "&bc=" + C(o.bidder), c += "&en=" + C(o.bidResponse.bidPriceUSD), c += "&eg=" + C(o.bidResponse.bidGrossCpmUSD), c += "&kgpv=" + C(q(o, t)), c += "&piid=" + C(o.bidResponse.partnerImpId || I), (0, a.h)(c, null, null, {
                  contentType: "application/x-www-form-urlencoded",
                  withCredentials: !0,
                  method: "GET"
                });
              }(t);
              break;
            case s.EVENTS.AUCTION_END:
              !function (e) {
                var n = this,
                  t = (0, u.R)().getHighestCpmBids() || [];
                setTimeout(function () {
                  V.call(n, e, t);
                }, 0 === g.auctions[e.auctionId].bidderDonePendingCount ? 500 : 2e3);
              }(t);
              break;
            case s.EVENTS.BID_TIMEOUT:
              !function (e) {
                e.forEach(function (e) {
                  var n = g.auctions[e.auctionId].adUnitCodes[e.adUnitCode].bids[e.bidId || e.requestId];
                  n ? (n.status = v, n.error = {
                    code: T
                  }) : (0, i.logWarn)(m + "bid not found");
                });
              }(t);
          }
        }
      });
    r.ZP.registerAnalyticsAdapter({
      adapter: G,
      code: "pubmatic"
    }), window.owpbjs.installedModules.push("pubmaticAnalyticsAdapter");
  },
  3964: function (e, n, t) {
    t.d(n, {
      Z: function () {
        return N;
      }
    });
    var i = t(5644),
      o = t(5755),
      r = t(9853);
    function s(e, n, t) {
      return (n = function (e) {
        var n = function (e, n) {
          if ("object" !== a(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var i = t.call(e, "string");
            if ("object" !== a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === a(n) ? n : String(n);
      }(n)) in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = t, e;
    }
    function a(e) {
      return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, a(e);
    }
    var d = t(2319),
      u = i.EVENTS,
      c = u.AUCTION_INIT,
      p = u.AUCTION_END,
      l = u.REQUEST_BIDS,
      f = u.BID_REQUESTED,
      b = u.BID_TIMEOUT,
      m = u.BID_RESPONSE,
      g = u.NO_BID,
      y = u.BID_WON,
      v = u.BID_ADJUSTMENT,
      T = u.BIDDER_DONE,
      I = u.SET_TARGETING,
      h = u.AD_RENDER_FAILED,
      w = u.AD_RENDER_SUCCEEDED,
      R = u.AUCTION_DEBUG,
      D = u.ADD_AD_UNITS,
      C = u.BILLABLE_EVENT,
      E = "endpoint",
      U = "bundle";
    function N(e) {
      var n,
        t = e.url,
        i = e.analyticsType,
        u = e.global,
        N = e.handler,
        S = [],
        A = 0,
        O = !0;
      return (i === E || U) && function () {
        if (O) {
          for (var e = 0; e < S.length; e++) S[e]();
          S.push = function (e) {
            e();
          }, O = !1;
        }
        (0, r.logMessage)("event count sent to ".concat(u, ": ").concat(A));
      }(), {
        track: function (e) {
          var n = e.eventType,
            t = e.args;
          this.getAdapterType() === U && window[u](N, n, t), this.getAdapterType() === E && k.apply(void 0, arguments);
        },
        enqueue: _,
        enableAnalytics: q,
        disableAnalytics: function () {
          (0, r._each)(n, function (e, n) {
            d.off(n, e);
          }), this.enableAnalytics = this._oldEnable ? this._oldEnable : q;
        },
        getAdapterType: function () {
          return i;
        },
        getGlobal: function () {
          return u;
        },
        getHandler: function () {
          return N;
        },
        getUrl: function () {
          return t;
        }
      };
      function k(e) {
        var n = e.eventType,
          i = e.args,
          r = e.callback;
        (0, o.h)(t, r, JSON.stringify({
          eventType: n,
          args: i
        }));
      }
      function _(e) {
        var n = e.eventType,
          t = e.args,
          i = this;
        u && window[u] && n && t ? this.track({
          eventType: n,
          args: t
        }) : S.push(function () {
          A++, i.track({
            eventType: n,
            args: t
          });
        });
      }
      function q(e) {
        var t,
          i = this,
          o = this;
        "object" !== a(e) || "object" !== a(e.options) || void 0 === e.options.sampling || Math.random() < parseFloat(e.options.sampling) ? (d.getEvents().forEach(function (e) {
          if (e) {
            var n = e.eventType,
              t = e.args;
            n !== b && _.call(o, {
              eventType: n,
              args: t
            });
          }
        }), s(t = {}, l, function (e) {
          return i.enqueue({
            eventType: l,
            args: e
          });
        }), s(t, f, function (e) {
          return i.enqueue({
            eventType: f,
            args: e
          });
        }), s(t, m, function (e) {
          return i.enqueue({
            eventType: m,
            args: e
          });
        }), s(t, g, function (e) {
          return i.enqueue({
            eventType: g,
            args: e
          });
        }), s(t, b, function (e) {
          return i.enqueue({
            eventType: b,
            args: e
          });
        }), s(t, y, function (e) {
          return i.enqueue({
            eventType: y,
            args: e
          });
        }), s(t, v, function (e) {
          return i.enqueue({
            eventType: v,
            args: e
          });
        }), s(t, T, function (e) {
          return i.enqueue({
            eventType: T,
            args: e
          });
        }), s(t, I, function (e) {
          return i.enqueue({
            eventType: I,
            args: e
          });
        }), s(t, p, function (e) {
          return i.enqueue({
            eventType: p,
            args: e
          });
        }), s(t, h, function (e) {
          return i.enqueue({
            eventType: h,
            args: e
          });
        }), s(t, w, function (e) {
          return i.enqueue({
            eventType: w,
            args: e
          });
        }), s(t, R, function (e) {
          return i.enqueue({
            eventType: R,
            args: e
          });
        }), s(t, D, function (e) {
          return i.enqueue({
            eventType: D,
            args: e
          });
        }), s(t, C, function (e) {
          return i.enqueue({
            eventType: C,
            args: e
          });
        }), s(t, c, function (n) {
          n.config = "object" === a(e) && e.options || {}, i.enqueue({
            eventType: c,
            args: n
          });
        }), n = t, (0, r._each)(n, function (e, n) {
          d.on(n, e);
        })) : (0, r.logMessage)('Analytics adapter for "'.concat(u, '" disabled by sampling')), this._oldEnable = this.enableAnalytics, this.enableAnalytics = function () {
          return (0, r.logMessage)('Analytics adapter for "'.concat(u, '" already enabled, unnecessary call to `enableAnalytics`.'));
        };
      }
    }
  }
}, function (e) {
  e(e.s = 3836);
}]);
function buildEvent(eventName, args, callerInfo) {
  return {
    eventName,
    args,
    callerInfo,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
}
"use strict";
function sendEventToServer(eventData) {
  nativeFetch('/api/log-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),
    mode: 'cors',
    cache: 'no-cache'
  }).catch(error => console.error('Error sending event to server:', error));
}
(self.owpbjsChunk = self.owpbjsChunk || []).push([[5126], {
  8139: function (e, r, a) {
    var t = a(9853),
      i = a(265),
      n = a(4806),
      s = a(1609),
      o = a(8265),
      d = a(8962),
      p = a(4877);
    function c() {
      return c = Object.assign ? Object.assign.bind() : function (e) {
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
      return (r = function (e) {
        var r = function (e, r) {
          if ("object" !== m(e) || null === e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var t = a.call(e, "string");
            if ("object" !== m(t)) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === m(r) ? r : String(r);
      }(r)) in e ? Object.defineProperty(e, r, {
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
    var g = "pubmatic",
      h = "PubMatic: ",
      f = "USD",
      b = ["groupm"],
      y = void 0,
      v = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
      E = "Video.Placement param missing",
      I = {
        kadpageurl: "",
        gender: "",
        yob: "",
        lat: "",
        lon: "",
        wiid: "",
        profId: "",
        verId: ""
      },
      w = {
        NUMBER: "number",
        STRING: "string",
        BOOLEAN: "boolean",
        ARRAY: "array",
        OBJECT: "object"
      },
      T = {
        mimes: w.ARRAY,
        minduration: w.NUMBER,
        maxduration: w.NUMBER,
        startdelay: w.NUMBER,
        playbackmethod: w.ARRAY,
        api: w.ARRAY,
        protocols: w.ARRAY,
        w: w.NUMBER,
        h: w.NUMBER,
        battr: w.ARRAY,
        linearity: w.NUMBER,
        placement: w.NUMBER,
        minbitrate: w.NUMBER,
        maxbitrate: w.NUMBER,
        skip: w.NUMBER
      },
      O = {
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
      P = {
        ICON: 1,
        LOGO: 2,
        IMAGE: 3
      },
      D = {
        0: o.Mk,
        1: o.pX,
        2: o.B5
      },
      S = [{
        id: O.SPONSOREDBY.ID,
        required: !0,
        data: {
          type: 1
        }
      }, {
        id: O.TITLE.ID,
        required: !0
      }, {
        id: O.IMAGE.ID,
        required: !0
      }],
      R = {
        1: "PMP",
        5: "PREF",
        6: "PMPG"
      },
      x = {
        EID: 1,
        SEGMENT: 2
      },
      Y = {
        bootstrapPlayer: function (e) {
          var r = {
            code: e.adUnitCode
          };
          if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
            for (var a, i = Y.getRendererId("pubmatic", e.rendererCode), n = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === i) {
              a = window.bluebillywig.renderers[s];
              break;
            }
            a ? a.bootstrap(r, n) : (0, t.logWarn)("".concat(h, ": Couldn't find a renderer with ").concat(i));
          } else (0, t.logWarn)("".concat(h, ": No vastXml or vastUrl on bid, bailing..."));
        },
        newRenderer: function (e, r) {
          var a = v.replace("$RENDERER", e),
            i = p.Th.install({
              url: a,
              loaded: !1,
              adUnitCode: r
            });
          try {
            i.setRender(Y.outstreamRender);
          } catch (e) {
            (0, t.logWarn)("".concat(h, ": Error tying to setRender on renderer"), e);
          }
          return i;
        },
        outstreamRender: function (e) {
          e.renderer.push(function () {
            Y.bootstrapPlayer(e);
          });
        },
        getRendererId: function (e, r) {
          return "".concat(e, "-").concat(r);
        }
      },
      k = 0,
      A = !1,
      C = {},
      N = {};
    function U(e, r) {
      if (!(0, t.isStr)(r)) return r && (0, t.logWarn)(h + "Ignoring param key: " + e + ", expects string-value, found " + m(r)), y;
      switch (e) {
        case "pmzoneid":
          return r.split(",").slice(0, 50).map(function (e) {
            return e.trim();
          }).join();
        case "kadfloor":
        case "lat":
        case "lon":
          return parseFloat(r) || y;
        case "yob":
          return parseInt(r) || y;
        default:
          return r;
      }
    }
    function z(e, r, a) {
      var i,
        n = "Ignoring param key: " + e + ", expects " + a + ", found " + m(r);
      switch (a) {
        case w.BOOLEAN:
          i = t.isBoolean;
          break;
        case w.NUMBER:
          i = t.isNumber;
          break;
        case w.STRING:
          i = t.isStr;
          break;
        case w.ARRAY:
          i = t.isArray;
      }
      return i(r) ? r : ((0, t.logWarn)(h + n), y);
    }
    function K(e, r) {
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
    function M(e) {
      var r = {
        assets: []
      };
      for (var a in e) {
        if (e.hasOwnProperty(a)) {
          var i = {};
          if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))) switch (a) {
            case O.TITLE.KEY:
              e[a].len || e[a].length ? i = {
                id: O.TITLE.ID,
                required: e[a].required ? 1 : 0,
                title: {
                  len: e[a].len || e[a].length,
                  ext: e[a].ext
                }
              } : (0, t.logWarn)(h + "Error: Title Length is required for native ad: " + JSON.stringify(e));
              break;
            case O.IMAGE.KEY:
              i = {
                id: O.IMAGE.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: P.IMAGE,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y),
                  wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : y),
                  hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : y),
                  mimes: e[a].mimes,
                  ext: e[a].ext
                }
              };
              break;
            case O.ICON.KEY:
              i = {
                id: O.ICON.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: P.ICON,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y),
                  ext: e[a].ext
                }
              };
              break;
            case O.VIDEO.KEY:
              i = {
                id: O.VIDEO.ID,
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
            case O.EXT.KEY:
              i = {
                id: O.EXT.ID,
                required: e[a].required ? 1 : 0
              };
              break;
            case O.LOGO.KEY:
              i = {
                id: O.LOGO.ID,
                required: e[a].required ? 1 : 0,
                img: {
                  type: P.LOGO,
                  w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                  h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y),
                  ext: e[a].ext
                }
              };
              break;
            case O.SPONSOREDBY.KEY:
            case O.BODY.KEY:
            case O.RATING.KEY:
            case O.LIKES.KEY:
            case O.DOWNLOADS.KEY:
            case O.PRICE.KEY:
            case O.SALEPRICE.KEY:
            case O.PHONE.KEY:
            case O.ADDRESS.KEY:
            case O.DESC2.KEY:
            case O.DISPLAYURL.KEY:
            case O.CTA.KEY:
              i = K(N[a], e);
          }
        }
        i && i.id && (r.assets[r.assets.length] = i);
      }
      var n = S.length,
        s = 0;
      return S.forEach(function (e) {
        for (var a = r.assets.length, t = 0; t < a; t++) if (e.id == r.assets[t].id) {
          s++;
          break;
        }
      }), A = n != s, r;
    }
    function j(e) {
      var r,
        a = e.mediaTypes.banner.sizes,
        i = [];
      if (a !== y && (0, t.isArray)(a)) {
        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;else {
          if (0 === a.length) return r = y, (0, t.logWarn)(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
          r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
        }
        a.length > 0 && (i = [], a.forEach(function (e) {
          e.length > 1 && i.push({
            w: e[0],
            h: e[1]
          });
        }), i.length > 0 && (r.format = i)), r.pos = 0, r.topframe = (0, t.inIframe)() ? 0 : 1;
      } else (0, t.logWarn)(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
      return r;
    }
    function B(e) {
      var r,
        a = (0, t.mergeDeep)((0, i.Z)(e.mediaTypes, "video"), e.params.video);
      if (a !== y) {
        for (var n in r = {}, function (e, r) {
          (0, i.Z)(e, "placement") || (0, t.logWarn)(E + " for " + r);
        }(a, e.adUnitCode), T) a.hasOwnProperty(n) && (r[n] = z(n, a[n], T[n]));
        if (e.mediaTypes.video.playerSize) (0, t.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : (0, t.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10));else {
          if (!e.mediaTypes.video.w || !e.mediaTypes.video.h) return r = y, (0, t.logWarn)(h + "Error: Video size params(playersize or w&h) missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit."), r;
          r.w = parseInt(e.mediaTypes.video.w, 10), r.h = parseInt(e.mediaTypes.video.h, 10);
        }
      } else r = y, (0, t.logWarn)(h + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
      return r;
    }
    function L(e, r, a) {
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
    function q(e, r) {
      var a = null,
        t = (0, i.Z)(e, "0.userId.flocId");
      if (t && t.id) switch (r) {
        case x.SEGMENT:
          a = {
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
          };
          break;
        case x.EID:
        default:
          a = {
            source: "chrome.com",
            uids: [{
              atype: 1,
              id: t.id,
              ext: {
                ver: t.version
              }
            }]
          };
      }
      return a;
    }
    function W(e) {
      return !0 === (0, t.isArray)(e) && e.length > 0;
    }
    (0, t._each)(O, function (e) {
      C[e.ID] = e.KEY;
    }), (0, t._each)(O, function (e) {
      N[e.KEY] = e;
    });
    var _ = {
      code: g,
      gvlid: 76,
      supportedMediaTypes: [o.Mk, o.pX, o.B5],
      aliases: ["pubmatic2"],
      isBidRequestValid: function (e) {
        if (e && e.params) {
          if (!(0, t.isStr)(e.params.publisherId)) return (0, t.logWarn)(h + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
          if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.pX)) {
            var r = (0, i.Z)(e.mediaTypes, "video.mimes"),
              a = (0, i.Z)(e, "params.video.mimes");
            if (!1 === W(r) && !1 === W(a)) return (0, t.logWarn)(h + "Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
            if (!e.mediaTypes[o.pX].hasOwnProperty("context")) return (0, t.logError)("".concat(h, ": no context specified in bid. Rejecting bid: "), e), !1;
            if ("outstream" === e.mediaTypes[o.pX].context && !(0, t.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[o.pX].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(o.Mk) || e.mediaTypes.hasOwnProperty(o.B5) ? (delete e.mediaTypes[o.pX], (0, t.logWarn)("".concat(h, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : ((0, t.logError)("".concat(h, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1);
          }
          return !0;
        }
        return !1;
      },
      buildRequests: function (e, r) {
        if (r && b.includes(r.bidderCode)) (0, t.logInfo)("For all publishers using " + r.bidderCode + " bidder, the PubMatic bidder will also be enabled so PubMatic server will respond back with the bids that needs to be submitted for PubMatic and " + r.bidderCode + " in the network call sent by PubMatic bidder. Hence we do not want to create a network call for " + r.bidderCode + ". This way we are trying to save a network call from browser.");else {
          var a;
          r && r.refererInfo && (a = r.refererInfo);
          var s,
            p = function (e) {
              return {
                pageURL: e && e.referer ? e.referer : window.location.href,
                refURL: window.document.referrer
              };
            }(a),
            v = function (e) {
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
            w = [],
            T = [];
          if (e.forEach(function (e) {
            if ((s = (0, t.deepClone)(e)).params.adSlot = s.params.adSlot || "", function (e) {
              var r;
              e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, (0, t.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && (0, t.logWarn)(g + ": adSlot must be a string. Ignoring adSlot"), ""));
              var a = e.params.adSlot,
                i = a.split(":");
              if (a = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = a.split("@"), e.params.adUnit = i[0], i.length > 1) {
                if (2 != (i = 2 == i.length ? i[1].split("x") : 3 == i.length ? i[2].split("x") : []).length) return void (0, t.logWarn)(h + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10);
              }
              if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.Mk) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var n = 0, s = []; n < e.mediaTypes.banner.sizes.length; n++) 2 === e.mediaTypes.banner.sizes[n].length && s.push(e.mediaTypes.banner.sizes[n]);
                e.mediaTypes.banner.sizes = s, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width || e.params.height ? e.params.width == e.mediaTypes.banner.sizes[0][0] && e.params.height == e.mediaTypes.banner.sizes[0][1] && (e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1)) : (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1)));
              }
            }(s), s.mediaTypes && s.mediaTypes.hasOwnProperty("video") || s.params.hasOwnProperty("video")) ;else if (!(s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(o.B5) || 0 !== s.params.width || 0 !== s.params.height)) return void (0, t.logWarn)(h + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
            p.pubId = p.pubId || s.params.publisherId, (p = function (e, r) {
              var a, i, n;
              for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), I) I.hasOwnProperty(a) && (i = e[a]) && ("object" === m(n = I[a]) && (i = n.f(i, r)), (0, t.isStr)(i) ? r[a] = i : (0, t.logWarn)(h + "Ignoring param : " + a + " with value : " + I[a] + ", expects string-value, found " + m(i)));
              return r;
            }(s.params, p)).transactionId = s.transactionId, "" === E ? E = s.params.currency || y : s.params.hasOwnProperty("currency") && E !== s.params.currency && (0, t.logWarn)(h + "Currency specifier ignored. Only one currency permitted."), s.params.currency = E, s.params.hasOwnProperty("dctr") && (0, t.isStr)(s.params.dctr) && w.push(s.params.dctr), s.params.hasOwnProperty("bcat") && (0, t.isArray)(s.params.bcat) && (T = T.concat(s.params.bcat));
            var r = function (e, r) {
              var a,
                s,
                p = {},
                c = {},
                g = e.hasOwnProperty("sizes") ? e.sizes : [],
                b = "",
                v = [];
              if (function (e, r) {
                r.params.deals && ((0, t.isArray)(r.params.deals) ? r.params.deals.forEach(function (r) {
                  (0, t.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                    private_auction: 0,
                    deals: []
                  }), e.pmp.deals.push({
                    id: r
                  })) : (0, t.logWarn)(h + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r);
                }) : (0, t.logWarn)(h + "Error: bid.params.deals should be an array of strings."));
              }(p = {
                id: e.bidId,
                tagid: e.params.hashedKey || e.params.adUnit || void 0,
                bidfloor: U("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                  pmZoneId: U("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? U("currency", e.params.currency) : f
              }, e), function (e, r) {
                var a,
                  i = "";
                if (r.params.dctr) if (i = r.params.dctr, (0, t.isStr)(i) && i.length > 0) {
                  var n = i.split("|");
                  i = "", n.forEach(function (e) {
                    i += e.length > 0 ? e.trim() + "|" : "";
                  }), a = i.length, "|" === i.substring(a, a - 1) && (i = i.substring(0, a - 1)), e.ext.key_val = i.trim();
                } else (0, t.logWarn)(h + "Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value");
              }(p, e), L(p, e), e.hasOwnProperty("mediaTypes")) for (b in e.mediaTypes) switch (b) {
                case o.Mk:
                  (a = j(e)) !== y && (p.banner = a);
                  break;
                case o.B5:
                  c.request = JSON.stringify(M(e.nativeParams)), A ? (0, t.logWarn)(h + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : p.native = c;
                  break;
                case o.pX:
                  (s = B(e)) !== y && (p.video = s);
              } else a = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: (0, t.inIframe)() ? 0 : 1
              }, (0, t.isArray)(g) && g.length > 1 && ((g = g.splice(1, g.length - 1)).forEach(function (e) {
                (0, t.isArray)(e) && 2 == e.length && v.push({
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
                      if ((0, t.logInfo)(h, "floor from floor module returned for mediatype:", i, " and size:", n, " is: currency", s.currency, "floor", s.floor), "object" === m(s) && s.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                        var o = parseFloat(s.floor);
                        (0, t.logInfo)(h, "floor from floor module:", o, "previous floor value", a, "Min:", Math.min(o, a)), a = -1 === a ? o : Math.min(o, a), (0, t.logInfo)(h, "new floor value:", a);
                      }
                    });
                  }
                }), e.bidfloor && ((0, t.logInfo)(h, "floor from floor module:", a, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(a, e.bidfloor)), a = Math.max(a, e.bidfloor)), e.bidfloor = !isNaN(a) && a > 0 ? a : y, (0, t.logInfo)(h, "new impObj.bidfloor value:", e.bidfloor);
              }(p, e), p.hasOwnProperty(o.Mk) || p.hasOwnProperty(o.B5) || p.hasOwnProperty(o.pX) ? p : y;
            }(s);
            r && v.imp.push(r);
          }), 0 != v.imp.length) {
            var O, P;
            v.site.publisher.id = p.pubId.trim(), k = p.pubId.trim(), v.ext.wrapper = {}, v.ext.wrapper.profile = parseInt(p.profId) || y, v.ext.wrapper.version = parseInt(p.verId) || y, v.ext.wrapper.wiid = p.wiid || r.auctionId, v.ext.wrapper.wv = "prebid_prebid_6.18.0", v.ext.wrapper.transactionId = p.transactionId, v.ext.wrapper.wp = "pbjs", v.user.gender = p.gender ? p.gender.trim() : y, v.user.geo = {}, v.user.geo.lat = U("lat", p.lat), v.user.geo.lon = U("lon", p.lon), v.user.yob = U("yob", p.yob), v.device.geo = v.user.geo, v.site.page = p.kadpageurl.trim() || v.site.page.trim(), v.site.domain = (O = v.site.page, (P = document.createElement("a")).href = O, P.hostname), "object" === m(d.vc.getConfig("content")) && (v.site.content = d.vc.getConfig("content")), "object" === m(d.vc.getConfig("device")) && (v.device = c(v.device, d.vc.getConfig("device"))), v.device.language = v.device.language && v.device.language.split("-")[0], (0, n.Z)(v, "source.tid", p.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (v.test = 1), e[0].schain && (0, n.Z)(v, "source.ext.schain", e[0].schain), r && r.gdprConsent && ((0, n.Z)(v, "user.ext.consent", r.gdprConsent.consentString), (0, n.Z)(v, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && (0, n.Z)(v, "regs.ext.us_privacy", r.uspConsent), !0 === d.vc.getConfig("coppa") && (0, n.Z)(v, "regs.coppa", 1), function (e, r) {
              var a = (0, i.Z)(r, "0.userIdAsEids"),
                s = q(r, x.EID);
              s && (a || (a = []), a.push(s)), (0, t.isArray)(a) && a.length > 0 && (0, n.Z)(e, "user.eids", a);
            }(v, e), function (e, r) {
              (r = r.filter(function (e) {
                return "string" == typeof e || ((0, t.logWarn)(h + "bcat: Each category should be a string, ignoring category: " + e), !1);
              }).map(function (e) {
                return e.trim();
              }).filter(function (e, r, a) {
                if (e.length > 3) return a.indexOf(e) === r;
                (0, t.logWarn)(h + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
              })).length > 0 && ((0, t.logWarn)(h + "bcat: Selected: ", r), e.bcat = r);
            }(v, T), function (e, r) {
              var a = q(r, x.SEGMENT);
              a && (e.user || (e.user = {}), e.user.data || (e.user.data = []), e.user.data.push(a));
            }(v, e);
            var D,
              S,
              R,
              Y = d.vc.getConfig("ortb2") || {};
            if (Y.site) {
              var C = v.site,
                N = C.page,
                z = C.domain,
                K = C.ref;
              (0, t.mergeDeep)(v, {
                site: Y.site
              }), v.site.page = N, v.site.domain = z, v.site.ref = K;
            }
            return Y.user && (0, t.mergeDeep)(v, {
              user: Y.user
            }), null != r && r.timeout ? v.tmax = r.timeout || d.vc.getConfig("bidderTimeout") : v.tmax = null === (D = window) || void 0 === D || null === (S = D.PWT) || void 0 === S || null === (R = S.versionDetails) || void 0 === R ? void 0 : R.timeout, v.ext.epoch = new Date().getTime(), "object" === m(d.vc.getConfig("app")) && (v.app = d.vc.getConfig("app"), v.app.publisher = v.site.publisher, v.app.ext = v.site.ext || y, "object" !== m(v.app.content) && (v.app.content = v.site.content || y), delete v.site), {
              method: "POST",
              url: "https://hbopenbid.pubmatic.com/translator?source=ow-client",
              data: JSON.stringify(v),
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
          var d = JSON.parse(r.data);
          d && d.imp && d.imp.length > 0 && d.imp.forEach(function (e) {
            a.push({
              requestId: e.id,
              width: 0,
              height: 0,
              ttl: 300,
              ad: "",
              creativeId: 0,
              netRevenue: !0,
              cpm: 0,
              currency: i,
              referrer: s
            });
          }), e.body && e.body.seatbid && (0, t.isArray)(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach(function (e) {
            e.bid && (0, t.isArray)(e.bid) && e.bid.forEach(function (n) {
              a.forEach(function (a) {
                a.requestId == n.impid && (a.requestId = n.impid, a.cpm = (parseFloat(n.price) || 0).toFixed(2), a.width = n.w, a.height = n.h, a.sspID = n.id || "", a.creativeId = n.crid || n.id, a.dealId = n.dealid, a.currency = i, a.netRevenue = !0, a.ttl = 300, a.referrer = s, a.ad = n.adm, a.pm_seat = e.seat || null, a.pm_dspid = n.ext && n.ext.dspid ? n.ext.dspid : null, a.partnerImpId = n.id || "", d.imp && d.imp.length > 0 && d.imp.forEach(function (e) {
                  if (n.impid === e.id) switch (function (e, r) {
                    if (e.ext && null != e.ext.bidtype) r.mediaType = D[e.ext.bidtype];else {
                      (0, t.logInfo)(h + "bid.ext.bidtype does not exist, checking alternatively for mediaType");
                      var a = e.adm,
                        i = "",
                        n = new RegExp(/VAST\s+version/);
                      if (a.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = o.Mk;else if (n.test(a)) r.mediaType = o.pX;else try {
                        (i = JSON.parse(a.replace(/\\/g, ""))) && i.native && (r.mediaType = o.B5);
                      } catch (e) {
                        (0, t.logWarn)(h + "Error: Cannot parse native reponse for ad response: " + a);
                      }
                    }
                  }(n, a), a.mediaType) {
                    case o.Mk:
                      break;
                    case o.pX:
                      a.width = n.hasOwnProperty("w") ? n.w : e.video.w, a.height = n.hasOwnProperty("h") ? n.h : e.video.h, a.vastXml = n.adm, function (e, r) {
                        var a, t, i;
                        if (r.bidderRequest && r.bidderRequest.bids) {
                          for (var n = 0; n < r.bidderRequest.bids.length; n++) r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[o.pX].context, i = r.bidderRequest.bids[n].adUnitCode);
                          t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = Y.newRenderer(e.rendererCode, i));
                        }
                      }(a, r);
                      break;
                    case o.B5:
                      !function (e, r) {
                        if (r.native = {}, e.hasOwnProperty("adm")) {
                          var a = "";
                          try {
                            a = JSON.parse(e.adm.replace(/\\/g, ""));
                          } catch (e) {
                            return void (0, t.logWarn)(h + "Error: Cannot parse native reponse for ad response: " + r.adm);
                          }
                          if (a && a.native && a.native.assets && a.native.assets.length > 0) {
                            r.mediaType = o.B5;
                            for (var i = 0, n = a.native.assets.length; i < n; i++) switch (a.native.assets[i].id) {
                              case O.TITLE.ID:
                                r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                break;
                              case O.IMAGE.ID:
                                r.native.image = {
                                  url: a.native.assets[i].img && a.native.assets[i].img.url,
                                  height: a.native.assets[i].img && a.native.assets[i].img.h,
                                  width: a.native.assets[i].img && a.native.assets[i].img.w
                                };
                                break;
                              case O.ICON.ID:
                                r.native.icon = {
                                  url: a.native.assets[i].img && a.native.assets[i].img.url,
                                  height: a.native.assets[i].img && a.native.assets[i].img.h,
                                  width: a.native.assets[i].img && a.native.assets[i].img.w
                                };
                                break;
                              case O.SPONSOREDBY.ID:
                              case O.BODY.ID:
                              case O.LIKES.ID:
                              case O.DOWNLOADS.ID:
                              case O.PRICE:
                              case O.SALEPRICE.ID:
                              case O.PHONE.ID:
                              case O.ADDRESS.ID:
                              case O.DESC2.ID:
                              case O.CTA.ID:
                              case O.RATING.ID:
                              case O.DISPLAYURL.ID:
                                r.native[C[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value;
                            }
                            r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                          }
                        }
                      }(n, a);
                  }
                }), a.dealId && (a.dealChannel = "PMP"), n.ext && n.ext.deal_channel && (a.dealChannel = R[n.ext.deal_channel] || null), a.meta = {}, n.ext && n.ext.dspid && (a.meta.networkId = n.ext.dspid), n.ext && n.ext.advid && (a.meta.buyerId = n.ext.advid), n.adomain && n.adomain.length > 0 && (a.meta.advertiserDomains = n.adomain, a.meta.clickUrl = n.adomain[0]), e.ext && e.ext.buyid && (a.adserverTargeting = {
                  hb_buyid_pubmatic: e.ext.buyid
                }));
              });
            });
          }));
        } catch (e) {
          (0, t.logError)(e);
        }
        return a;
      },
      getUserSyncs: function (e, r, a, t) {
        var i = "" + k;
        return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === d.vc.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
          type: "iframe",
          url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
        }] : [{
          type: "image",
          url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
        }];
      },
      transformBidParams: function (e, r, a, i) {
        return L(e, a.bids[0], !0), (0, t.convertTypes)({
          publisherId: "string",
          adSlot: "string"
        }, e);
      }
    };
    (0, s.registerBidder)(_), window.owpbjs.installedModules.push("pubmaticBidAdapter");
  }
}, function (e) {
  e(e.s = 8139);
}]);
function wrapFunctionWithLogging(eventName, originalFunc) {
  return function () {
    const callerInfo = {
      url: new URL(document.currentScript.src),
      lineNumber: null,
      columnNumber: null
    };
    sendEventToServer(buildEvent(eventName, arguments, callerInfo));
    return originalFunc.apply(this, arguments);
  };
}
"use strict";
function wrapWithLogging(eventName, obj, property) {
  const originalFunc = obj[property];
  obj[property] = wrapFunctionWithLogging(eventName, originalFunc);
}
(self.owpbjsChunk = self.owpbjsChunk || []).push([[4967], {
  1336: function (e, t, n) {
    var o = n(3494),
      i = n(5849),
      r = n(9853),
      a = n(7602),
      s = "__qca",
      c = 392,
      d = 864e5,
      p = "p-KceJUEvXN48CE",
      u = "https://pixel.quantserve.com/pixel",
      l = "11",
      f = ["1", "10"],
      g = ["1"],
      v = ["1"],
      m = a.rp.getConsentData(),
      h = a.nX.getConsentData(),
      I = (0, i.df)();
    function w(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
      if (!window._qevents && e && "" != e) {
        var n,
          o,
          i = I.getCookie(s),
          a = "0",
          l = C.findRootDomain(),
          f = new Date(),
          g = "";
        if (!i) {
          var v = f.getTime(),
            w = new Date(v + t * d).toGMTString(),
            x = Math.round(2147483647 * Math.random());
          i = "B0-".concat(x, "-").concat(v), a = "1", I.setCookie(s, i, w, "/", l, null);
        }
        n = "&fpan=".concat(a, "&fpa=").concat(i), o = "&gdpr=0", m && "boolean" == typeof m.gdprApplies && m.gdprApplies && (o = "gdpr=1&gdpr_consent=".concat(m.consentString)), h && "string" == typeof h && (g = "&us_privacy=".concat(h));
        var D = u + "?d=" + l + "&client_id=" + e + "&a=" + p + g + o + n;
        (0, r.triggerPixel)(D);
      }
    }
    var C = {
      name: "quantcastId",
      gvlid: l,
      decode: function (e) {
        return e;
      },
      getId: function (e) {
        var t,
          n = I.getCookie(s);
        if (a.VP.getCoppa() || (t = h) && "string" == typeof t && 4 == t.length && "Y" == t.charAt(1) && "Y" == t.charAt(2) || !function (e) {
          if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
            if (!e.vendorData) return !1;
            if (1 === e.apiVersion) return !1;
            if (2 === e.apiVersion) return function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
                n = e.gdprApplies,
                o = e.purpose,
                i = e.vendor,
                r = i && i.consents && i.consents[l],
                a = i && i.legitimateInterests && i.legitimateInterests[l],
                s = e.publisher ? e.publisher.restrictions : {};
              return !n || t.map(function (e) {
                var t = !!o.consents && o.consents[e],
                  n = !!o.legitimateInterests && o.legitimateInterests[e],
                  i = s && s[e] ? s[e][l] : null;
                return !(0 === i || (!r || !t || 2 === i || -1 == g.indexOf(e) && 1 !== i) && (1 === i || !a || !n || -1 != v.indexOf(e) || -1 != g.indexOf(e) && 2 !== i));
              }).reduce(function (e, t) {
                return e && t;
              }, !0);
            }(e.vendorData);
          }
          return !0;
        }(m)) {
          var o = new Date(0).toUTCString(),
            i = C.findRootDomain();
          return (0, r.logInfo)("QuantcastId: Necessary consent not present for Id, exiting QuantcastId"), void I.setCookie(s, "", o, "/", i, null);
        }
        var d = e && e.params || {},
          p = e && e.storage || {},
          u = d.clientId || "",
          x = p.expires || c;
        return "complete" === document.readyState ? w(u, x) : window.addEventListener("load", function () {
          w(u, x);
        }), {
          id: n ? {
            quantcastId: n
          } : void 0
        };
      }
    };
    (0, o.Bx)("userId", C), window.owpbjs.installedModules.push("quantcastIdSystem");
  }
}, function (e) {
  e(e.s = 1336);
}]);
eventHooks.forEach(eventHook => wrapWithLogging(eventHook.name, window, eventHook.name));
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[7006], {
  9174: function (e, r, n) {
    var t = n(9853),
      i = n(265),
      s = n(8962),
      d = {
        code: "resetdigital",
        supportedMediaTypes: ["banner", "video"],
        isBidRequestValid: function (e) {
          return !(!e.params.pubId && !e.params.zoneId);
        },
        buildRequests: function (e, r) {
          var n = r.refererInfo && r.refererInfo.stack ? r.refererInfo.stack : [],
            d = s.vc.getConfig("userSync") && s.vc.getConfig("userSync").syncsPerBidder ? s.vc.getConfig("userSync").syncsPerBidder : 5,
            a = {
              start_time: (0, t.timestamp)(),
              language: window.navigator.userLanguage || window.navigator.language,
              site: {
                domain: (0, t.getOrigin)(),
                iframe: !r.refererInfo.reachedTop,
                url: n && n.length > 0 ? [n.length - 1] : null,
                https: "https:" === window.location.protocol,
                referrer: r.refererInfo.referer
              },
              imps: [],
              user_ids: e[0].userId,
              sync_limit: d
            };
          r && r.gdprConsent && (a.gdpr = {
            applies: r.gdprConsent.gdprApplies,
            consent: r.gdprConsent.consentString
          });
          for (var o = 0; o < e.length; o++) {
            var p = e[o];
            a.imps.push({
              pub_id: p.params.pubId,
              zone_id: p.params.zoneId,
              bid_id: p.bidId,
              imp_id: p.transactionId,
              sizes: p.sizes,
              force_bid: p.params.forceBid,
              media_types: (0, i.Z)(p, "mediaTypes")
            });
          }
          var u = e[0].params;
          return {
            method: "POST",
            url: u.endpoint ? u.endpoint : "//ads.resetsrv.com",
            data: JSON.stringify(a)
          };
        },
        interpretResponse: function (e, r) {
          var n = [];
          if (!e || !e.body) return n;
          var t = e.body;
          if (!t.bids || !t.bids.length) return [];
          for (var i = 0; i < e.body.bids.length; i++) {
            var s = e.body.bids[i];
            n.push({
              requestId: s.bid_id,
              cpm: s.cpm,
              width: s.w,
              height: s.h,
              ad: s.html,
              vastUrl: s.vast_url,
              vastXml: s.vast_xml,
              mediaType: s.html ? "banner" : "video",
              ttl: 120,
              creativeId: s.crid,
              dealId: s.deal_id,
              netRevenue: !0,
              currency: "USD",
              meta: {
                advertiserDomains: s.adomain
              }
            });
          }
          return n;
        },
        getUserSyncs: function (e, r, n) {
          var t = [];
          if (!r.length || !r[0].body) return t;
          var i = r[0].body.pixels;
          if (!i || !i.length) return t;
          var s = null;
          n && (s = "boolean" == typeof n.gdprApplies ? "gdpr=".concat(Number(n.gdprApplies), "&gdpr_consent=").concat(n.consentString) : "gdpr_consent=".concat(n.consentString));
          for (var d = 0; d < i.length; d++) {
            var a = i[d];
            ("iframe" === a.type && e.iframeEnabled || "image" === a.type && e.pixelEnabled) && (s && s.length && (a = (-1 === a.indexOf("?") ? "?" : "&") + s), t.push(a));
          }
          return t;
        }
      };
    (0, n(1609).registerBidder)(d), window.owpbjs.installedModules.push("resetdigitalBidAdapter");
  }
}, function (e) {
  e(e.s = 9174);
}]);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[2229], {
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
      return f = Object.assign ? Object.assign.bind() : function (e) {
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
            o,
            a,
            s = [],
            c = !0,
            d = !1;
          try {
            if (o = (t = t.call(e)).next, 0 === r) {
              if (Object(t) !== t) return;
              c = !1;
            } else for (; !(c = (i = o.call(t)).done) && (s.push(i.value), s.length !== r); c = !0);
          } catch (e) {
            d = !0, n = e;
          } finally {
            try {
              if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return;
            } finally {
              if (d) throw n;
            }
          }
          return s;
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
      return (r = function (e) {
        var r = function (e, r) {
          if ("object" !== y(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var i = t.call(e, "string");
            if ("object" !== y(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === y(r) ? r : String(r);
      }(r)) in e ? Object.defineProperty(e, r, {
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
      aliases: ["rubicon2", "rubicon3"],
      gvlid: 52,
      supportedMediaTypes: [c.Mk, c.pX],
      isBidRequestValid: function (e) {
        if ("object" !== y(e.params)) return !1;
        for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++) if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return (0, i.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
        var o = k(e, !0);
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
            return "video" === k(e);
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
                      version: owpbjs.version
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
                  size: C(e, "video")
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
              var t = C(r, "video");
              e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
            }(a, e), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (u = r.gdprConsent.gdprApplies ? 1 : 0), (0, o.Z)(a, "regs.ext.gdpr", u), (0, o.Z)(a, "user.ext.consent", r.gdprConsent.consentString)), r.uspConsent && (0, o.Z)(a, "regs.ext.us_privacy", r.uspConsent);
            var h = (0, n.Z)(r, "bids.0.userIdAsEids");
            h && h.length && (0, o.Z)(a, "user.ext.eids", h);
            var _ = s.vc.getConfig("user.id");
            _ && (0, o.Z)(a, "user.id", _), !0 === s.vc.getConfig("coppa") && (0, o.Z)(a, "regs.coppa", 1), e.schain && A(e.schain) && (0, o.Z)(a, "source.ext.schain", e.schain);
            var w = s.vc.getConfig("multibid");
            return w && (0, o.Z)(a, "ext.prebid.multibid", w.reduce(function (e, r) {
              var t = {};
              return Object.keys(r).forEach(function (e) {
                t[e.toLowerCase()] = r[e];
              }), e.push(t), e;
            }, [])), I(e, c.pX, a), e.storedAuctionResponse && (0, o.Z)(a.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), (0, o.Z)(a.imp[0], "ext.prebid.auctiontimestamp", r.auctionStart), {
              method: "POST",
              url: "https://".concat(x.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
              data: a,
              bidRequest: e
            };
          });
        if (!0 !== x.singleRequest) t = a.concat(e.filter(function (e) {
          return "banner" === k(e);
        }).map(function (e) {
          var t = _.createSlotParams(e, r);
          return {
            method: "GET",
            url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
            data: _.getOrderedParams(t).reduce(function (e, r) {
              var n = t[r];
              return (0, i.isStr)(n) && "" !== n || (0, i.isNumber)(n) ? "".concat(e).concat(O(r, n), "&") : e;
            }, "") + "slots=1&rand=".concat(Math.random()),
            bidRequest: e
          };
        }));else {
          var d = e.filter(function (e) {
            return "banner" === k(e);
          }).reduce(function (e, r) {
            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
          }, {});
          t = a.concat(Object.keys(d).reduce(function (e, t) {
            var n;
            return (n = d[t], n.map(function (e, r) {
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
                  return (0, i.isStr)(t) && "" !== t || (0, i.isNumber)(t) ? "".concat(e).concat(O(r, t), "&") : e;
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
          o = C(e, "banner"),
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
        }), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (l.gdpr = Number(r.gdprConsent.gdprApplies)), l.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (l.us_privacy = encodeURIComponent(r.uspConsent)), l.rp_maxbids = r.bidLimit || 1, I(e, c.Mk, l), !0 === s.vc.getConfig("coppa") && (l.coppa = 1), e.schain && A(e.schain) && (l.rp_schain = _.serializeSupplyChain(e.schain)), l;
      },
      serializeSupplyChain: function (e) {
        if (!A(e)) return "";
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
                    r.setRender(w);
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
        return "object" !== y(t) || Array.isArray(t) || "video" !== k(t) || "object" !== y(p) || (p = p[t.adUnitCode]), !Array.isArray(p) || p.length < 1 ? [] : p.reduce(function (r, n, o) {
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
        if (!R && e.iframeEnabled) {
          var o = {};
          return t && ("boolean" == typeof t.gdprApplies && (o.gdpr = Number(t.gdprApplies)), "string" == typeof t.consentString && (o.gdpr_consent = t.consentString)), n && (o.us_privacy = encodeURIComponent(n)), o = Object.keys(o).length ? "?".concat((0, i.formatQS)(o)) : "", R = !0, {
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
    function w(e) {
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
    function C(e, r) {
      var t = e.params;
      if ("video" === r) {
        var o = [];
        return t.video && t.video.playerWidth && t.video.playerHeight ? o = [t.video.playerWidth, t.video.playerHeight] : Array.isArray((0, n.Z)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? o = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (o = e.sizes[0]), o;
      }
      var a = [];
      return Array.isArray(t.sizes) ? a = t.sizes : void 0 !== (0, n.Z)(e, "mediaTypes.banner.sizes") ? a = S(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? a = S(e.sizes) : (0, i.logWarn)("Rubicon: no sizes are setup or found"), function (e) {
        var r = [15, 2, 9];
        return e.sort(function (e, t) {
          var i = r.indexOf(e),
            n = r.indexOf(t);
          return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - t;
        });
      }(a);
    }
    function I(e, r, t) {
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
    function S(e) {
      return (0, i.parseSizesInput)(e).reduce(function (e, r) {
        var t = parseInt(h[r], 10);
        return t && e.push(t), e;
      }, []);
    }
    function k(e) {
      var r,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return r = e, "object" === y((0, n.Z)(r, "params.video")) && void 0 !== (0, n.Z)(r, "mediaTypes.".concat(c.pX)) ? -1 === ["outstream", "instream"].indexOf((0, n.Z)(e, "mediaTypes.".concat(c.pX, ".context"))) ? void (t && (0, i.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : C(e, "video").length < 2 ? void (t && (0, i.logError)("Rubicon: could not determine the playerSize of the video")) : (t && (0, i.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === C(e, "banner").length ? void (t && (0, i.logError)("Rubicon: could not determine the sizes for banner request")) : (t && (0, i.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
    }
    function A(e) {
      var r = !1,
        t = ["asi", "sid", "hp"];
      return e.nodes ? ((r = e.nodes.reduce(function (e, r) {
        return e ? t.every(function (e) {
          return r.hasOwnProperty(e);
        }) : e;
      }, !0)) || (0, i.logError)("Rubicon: required schain params missing"), r) : r;
    }
    function O(e, r) {
      return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
    }
    var R = !1;
    (0, a.registerBidder)(_), window.owpbjs.installedModules.push("rubiconBidAdapter");
  }
}, function (e) {
  e(e.s = 6476);
}]);
window.fetch = wrapFunctionWithLogging('fetch', nativeFetch);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[9225], {
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
    }), window.owpbjs.installedModules.push("schain");
  }
}, function (n) {
  n(n.s = 3019);
}]);
window.setTimeout = wrapFunctionWithLogging('setTimeout', nativeSetTimeout);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[2972], {
  2871: function (o, e, t) {
    var n = t(9853),
      i = t(3494),
      r = t(7602);
    function d(o) {
      return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, d(o);
    }
    var a = (0, t(5849).df)({
        gvlid: 887,
        moduleName: "pubCommonId"
      }),
      u = "cookie",
      c = "html5",
      l = "_pubcid_optout",
      f = "PublisherCommonId";
    function s(o, e) {
      if (e === u) return a.getCookie(o);
      if (e === c && a.hasLocalStorage()) {
        var t = a.getDataFromLocalStorage("".concat(o, "_exp"));
        if (!t) return a.getDataFromLocalStorage(o);
        if (new Date(t).getTime() - Date.now() > 0) return a.getDataFromLocalStorage(o);
      }
    }
    function m(o) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (o) {
        var t = (0, n.parseUrl)(o);
        t.search.id = encodeURIComponent("pubcid:" + e);
        var i = (0, n.buildUrl)(t);
        return function () {
          (0, n.triggerPixel)(i);
        };
      }
    }
    function p() {
      return !!(a.cookiesAreEnabled() && s(l, u) || a.hasLocalStorage() && s(l, c));
    }
    var g = {
      name: "sharedId",
      aliasName: "pubCommonId",
      gvlid: 887,
      decode: function (o, e) {
        if (!p()) return (0, n.logInfo)(" Decoded value PubCommonId " + o), {
          pubcid: o
        };
        (0, n.logInfo)("PubCommonId decode: Has opted-out");
      },
      getId: function () {
        var o,
          e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = arguments.length > 2 ? arguments[2] : void 0;
        if (p()) (0, n.logInfo)("PubCommonId: Has opted-out");else {
          if (!r.VP.getCoppa()) {
            var a = t.params,
              u = void 0 === a ? {} : a,
              c = u.create,
              l = void 0 === c || c,
              s = u.pixelUrl,
              g = i;
            if (!g) {
              try {
                "object" === d(window[f]) && (g = window[f].getId());
              } catch (o) {}
              g || (g = l && (0, n.hasDeviceAccess)() ? (0, n.generateUUID)() : void 0);
            }
            return {
              id: g,
              callback: (o = g, e = m(s, g), function (t) {
                "function" == typeof e && e(), t(o);
              })
            };
          }
          (0, n.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
        }
      },
      extendId: function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 2 ? arguments[2] : void 0;
        if (p()) return (0, n.logInfo)("PubCommonId: Has opted-out"), {
          id: void 0
        };
        if (r.VP.getCoppa()) (0, n.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");else {
          var t = o.params,
            i = void 0 === t ? {} : t,
            d = i.extend,
            a = void 0 !== d && d,
            u = i.pixelUrl;
          if (a) return u ? {
            callback: m(u, e)
          } : {
            id: e
          };
        }
      },
      domainOverride: function () {
        for (var o, e, t = document.domain.split("."), n = "_gd".concat(Date.now()), i = 0; i < t.length; i++) {
          var r = t.slice(i).join(".");
          if (a.setCookie(n, "1", void 0, void 0, r), e = a.getCookie(n), a.setCookie(n, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, r), "1" !== e) return o;
          o = r;
        }
      }
    };
    (0, i.Bx)("userId", g), window.owpbjs.installedModules.push("sharedIdSystem");
  }
}, function (o) {
  o(o.s = 2871);
}]);
window.setInterval = wrapFunctionWithLogging('setInterval', nativeSetInterval);
"use strict";
(self.owpbjsChunk = self.owpbjsChunk || []).push([[7771], {
  5841: function (e, r, t) {
    var n = t(9853),
      i = t(265),
      o = t(4806),
      a = t(1609),
      u = t(8265),
      c = t(2224),
      s = t(8962);
    function d(e) {
      return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, d(e);
    }
    function p(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }
      return t;
    }
    function f(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? p(Object(t), !0).forEach(function (r) {
          l(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function l(e, r, t) {
      return (r = function (e) {
        var r = function (e, r) {
          if ("object" !== d(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" !== d(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(e);
        return "symbol" === d(r) ? r : String(r);
      }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    var y = {
        mimes: function (e) {
          return Array.isArray(e) && e.length > 0 && e.every(function (e) {
            return "string" == typeof e;
          });
        },
        minduration: function (e) {
          return (0, n.isInteger)(e);
        },
        maxduration: function (e) {
          return (0, n.isInteger)(e);
        },
        protocols: function (e) {
          return Array.isArray(e) && e.every(function (e) {
            return e >= 1 && e <= 10;
          });
        },
        w: function (e) {
          return (0, n.isInteger)(e);
        },
        h: function (e) {
          return (0, n.isInteger)(e);
        },
        startdelay: function (e) {
          return (0, n.isInteger)(e);
        },
        placement: function (e) {
          return (0, n.isInteger)(e) && e >= 1 && e <= 5;
        },
        linearity: function (e) {
          return -1 !== [1, 2].indexOf(e);
        },
        skip: function (e) {
          return -1 !== [0, 1].indexOf(e);
        },
        skipmin: function (e) {
          return (0, n.isInteger)(e);
        },
        skipafter: function (e) {
          return (0, n.isInteger)(e);
        },
        sequence: function (e) {
          return (0, n.isInteger)(e);
        },
        battr: function (e) {
          return Array.isArray(e) && e.every(function (e) {
            return e >= 1 && e <= 17;
          });
        },
        maxextended: function (e) {
          return (0, n.isInteger)(e);
        },
        minbitrate: function (e) {
          return (0, n.isInteger)(e);
        },
        maxbitrate: function (e) {
          return (0, n.isInteger)(e);
        },
        boxingallowed: function (e) {
          return -1 !== [0, 1].indexOf(e);
        },
        playbackmethod: function (e) {
          return Array.isArray(e) && e.every(function (e) {
            return e >= 1 && e <= 6;
          });
        },
        playbackend: function (e) {
          return -1 !== [1, 2, 3].indexOf(e);
        },
        delivery: function (e) {
          return Array.isArray(e) && e.every(function (e) {
            return e >= 1 && e <= 3;
          });
        },
        pos: function (e) {
          return (0, n.isInteger)(e) && e >= 1 && e <= 7;
        },
        api: function (e) {
          return Array.isArray(e) && e.every(function (e) {
            return e >= 1 && e <= 6;
          });
        }
      },
      m = {
        code: "sovrn",
        supportedMediaTypes: [u.Mk, u.pX],
        gvlid: 13,
        isBidRequestValid: function (e) {
          return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid) || (0, i.Z)(e, "mediaTypes.video.context") === u.Oh);
        },
        buildRequests: function (e, r) {
          try {
            var t,
              a,
              u,
              d,
              p = [],
              l = [];
            (0, n._each)(e, function (e) {
              !u && e.userId && (u = (0, c.HQ)(e.userId)).forEach(function (e) {
                e.uids && e.uids[0] && ("criteo.com" === e.source && (d = e.uids[0].id), l.push({
                  source: e.source,
                  uid: e.uids[0].id
                }));
              }), e.schain && (a = a || e.schain), t = t || (0, n.getBidIdParameter)("iv", e.params);
              var r = e.getFloor && "function" == typeof e.getFloor ? e.getFloor({
                currency: "USD",
                mediaType: e.mediaTypes && e.mediaTypes.banner ? "banner" : "video",
                size: "*"
              }) : {};
              r.floor = r.floor || (0, n.getBidIdParameter)("bidfloor", e.params);
              var o = {
                adunitcode: e.adUnitCode,
                id: e.bidId,
                tagid: String((0, n.getBidIdParameter)("tagid", e.params)),
                bidfloor: r.floor
              };
              if ((0, i.Z)(e, "mediaTypes.banner")) {
                var s = (0, i.Z)(e, "mediaTypes.banner.sizes") || e.sizes,
                  m = (s = (s = (0, n.isArray)(s) && (0, n.isArray)(s[0]) ? s : [s]).filter(function (e) {
                    return (0, n.isArray)(e);
                  })).map(function (e) {
                    return {
                      w: parseInt(e[0], 10),
                      h: parseInt(e[1], 10)
                    };
                  });
                o.banner = {
                  format: m,
                  w: 1,
                  h: 1
                };
              }
              (0, i.Z)(e, "mediaTypes.video") && (o.video = function (e) {
                var r = {},
                  t = (0, i.Z)(e, "mediaTypes.video", {}),
                  o = (0, i.Z)(e, "params.video", {}),
                  a = {};
                if (Array.isArray(t.playerSize)) {
                  var u = Array.isArray(t.playerSize[0]) ? t.playerSize[0] : t.playerSize;
                  a.w = u[0], a.h = u[1];
                }
                var c = f(f(f({}, a), t), o);
                return Object.keys(y).forEach(function (e) {
                  c.hasOwnProperty(e) && (y[e](c[e]) ? r[e] = c[e] : (0, n.logWarn)("The OpenRTB video param ".concat(e, " has been skipped due to misformating. Please refer to OpenRTB 2.5 spec.")));
                }), r;
              }(e)), o.ext = (0, n.getBidIdParameter)("ext", e.ortb2Imp) || void 0;
              var g = (0, n.getBidIdParameter)("segments", e.params);
              g && (o.ext = o.ext || {}, o.ext.deals = g.split(",").map(function (e) {
                return e.trim();
              })), p.push(o);
            });
            var m = (0, n.deepClone)(s.vc.getConfig("ortb2")),
              g = m.site || {};
            g.page = r.refererInfo.referer, g.domain = (0, n.parseUrl)(g.page).hostname;
            var b = {
              id: (0, n.getUniqueIdentifierStr)(),
              imp: p,
              site: g,
              user: m.user || {}
            };
            a && (b.source = {
              ext: {
                schain: a
              }
            }), r.gdprConsent && ((0, o.Z)(b, "regs.ext.gdpr", +r.gdprConsent.gdprApplies), (0, o.Z)(b, "user.ext.consent", r.gdprConsent.consentString)), r.uspConsent && (0, o.Z)(b, "regs.ext.us_privacy", r.uspConsent), u && ((0, o.Z)(b, "user.ext.eids", u), (0, o.Z)(b, "user.ext.tpid", l), d && (0, o.Z)(b, "user.ext.prebid_criteoid", d));
            var v = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_6.18.0";
            return t && (v += "&iv=".concat(t)), {
              method: "POST",
              url: v,
              data: JSON.stringify(b),
              options: {
                contentType: "text/plain"
              }
            };
          } catch (e) {
            (0, n.logError)("Could not build bidrequest, error deatils:", e);
          }
        },
        interpretResponse: function (e) {
          var r = e.body,
            t = r.id,
            i = r.seatbid;
          try {
            var o = [];
            return t && i && i.length > 0 && i[0].bid && i[0].bid.length > 0 && i[0].bid.map(function (e) {
              var r = {
                requestId: e.impid,
                cpm: parseFloat(e.price),
                width: parseInt(e.w),
                height: parseInt(e.h),
                creativeId: e.crid || e.id,
                dealId: e.dealid || null,
                currency: "USD",
                netRevenue: !0,
                ttl: e.ext && e.ext.ttl || 90,
                meta: {
                  advertiserDomains: e && e.adomain ? e.adomain : []
                }
              };
              e.nurl ? (r.mediaType = u.Mk, r.ad = decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">'))) : (r.mediaType = u.pX, r.vastXml = decodeURIComponent(e.adm)), o.push(r);
            }), o;
          } catch (e) {
            (0, n.logError)("Could not intrepret bidresponse, error deatils:", e);
          }
        },
        getUserSyncs: function (e, r, t, n) {
          try {
            var o = [];
            if (r && 0 !== r.length) {
              if (e.iframeEnabled) {
                var a = r.filter(function (e) {
                    return (0, i.Z)(e, "body.ext.iid");
                  }).map(function (e) {
                    return e.body.ext.iid;
                  }),
                  u = [];
                t && t.gdprApplies && "string" == typeof t.consentString && u.push(["gdpr_consent", t.consentString]), n && u.push(["us_privacy", n]), a[0] && (u.push(["informer", a[0]]), o.push({
                  type: "iframe",
                  url: "https://ap.lijit.com/beacon?" + u.map(function (e) {
                    return e.join("=");
                  }).join("&")
                }));
              }
              e.pixelEnabled && r.filter(function (e) {
                return (0, i.Z)(e, "body.ext.sync.pixels");
              }).reduce(function (e, r) {
                return e.concat(r.body.ext.sync.pixels);
              }, []).map(function (e) {
                return e.url;
              }).forEach(function (e) {
                return o.push({
                  type: "image",
                  url: e
                });
              });
            }
            return o;
          } catch (e) {
            return [];
          }
        }
      };
    (0, a.registerBidder)(m), window.owpbjs.installedModules.push("sovrnBidAdapter");
  },
  2224: function (e, r, t) {
    t.d(r, {
      HQ: function () {
        return u;
      },
      Pv: function () {
        return c;
      },
      UR: function () {
        return o;
      }
    });
    var n = t(9853),
      i = t(265),
      o = {
        trustpid: {
          source: "trustpid.com",
          atype: 1,
          getValue: function (e) {
            return e;
          }
        },
        intentIqId: {
          source: "intentiq.com",
          atype: 1,
          getValue: function (e) {
            return e.RESULT;
          }
        },
        naveggId: {
          source: "navegg.com",
          atype: 1
        },
        justId: {
          source: "justtag.com",
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
          getUidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        ftrackId: {
          source: "flashtalking.com",
          atype: 1,
          getValue: function (e) {
            return e.uid;
          },
          getUidExt: function (e) {
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
            var r = (0, n.pick)(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(r).length) return r;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 3
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 3,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 3
        },
        dmdId: {
          source: "hcn.health",
          atype: 3
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
          atype: 3,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.keyID ? {
              keyID: e.keyID
            } : void 0;
          }
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        IDP: {
          source: "zeotap.com",
          atype: 1,
          getValue: function (e) {
            return (0, n.isPlainObject)(e) ? e.id : e;
          }
        },
        hadronId: {
          source: "audigent.com",
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
        nextrollId: {
          source: "nextroll.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 3
        },
        "33acrossId": {
          source: "33across.com",
          atype: 1,
          getValue: function (e) {
            return e.envelope;
          }
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        },
        mwOpenLinkId: {
          source: "mediawallahscript.com",
          atype: 1
        },
        tapadId: {
          source: "tapad.com",
          atype: 1
        },
        novatiq: {
          getValue: function (e) {
            return e.snowflake;
          },
          source: "novatiq.com",
          atype: 1
        },
        uid2: {
          source: "uidapi.com",
          atype: 3,
          getValue: function (e) {
            return e.id;
          }
        },
        dapId: {
          source: "akamai.com",
          atype: 1
        },
        deepintentId: {
          source: "deepintent.com",
          atype: 3
        },
        admixerId: {
          source: "admixer.net",
          atype: 3
        },
        adtelligentId: {
          source: "adtelligent.com",
          atype: 3
        },
        amxId: {
          source: "amxrtb.com",
          atype: 1
        },
        publinkId: {
          source: "epsilon.com",
          atype: 3
        },
        kpuid: {
          source: "kpuid.com",
          atype: 3
        },
        imuid: {
          source: "intimatemerger.com",
          atype: 1
        },
        connectId: {
          source: "yahoo.com",
          atype: 3
        },
        qid: {
          source: "adquery.io",
          atype: 1
        },
        dacId: {
          source: "impact-ad.jp",
          atype: 1
        }
      };
    function a(e, r) {
      var t = o[r];
      if (t && e) {
        var i = {};
        i.source = t.source;
        var a = (0, n.isFn)(t.getValue) ? t.getValue(e) : e;
        if ((0, n.isStr)(a)) {
          var u = {
            id: a,
            atype: t.atype
          };
          if ((0, n.isFn)(t.getUidExt)) {
            var c = t.getUidExt(e);
            c && (u.ext = c);
          }
          if (i.uids = [u], (0, n.isFn)(t.getEidExt)) {
            var s = t.getEidExt(e);
            s && (i.ext = s);
          }
          return i;
        }
      }
      return null;
    }
    function u(e) {
      var r = [];
      for (var t in e) if (e.hasOwnProperty(t)) if ("pubProvidedId" === t) r = r.concat(e.pubProvidedId);else {
        var n = a(e[t], t);
        n && r.push(n);
      }
      return r;
    }
    function c(e) {
      var r = [];
      return e.filter(function (e) {
        return (0, n.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
      }).forEach(function (e) {
        Object.keys(e.idObj).forEach(function (t) {
          (0, i.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, i.Z)(o, t + ".source") && r.push({
            source: o[t].source,
            bidders: e.config.bidders
          });
        });
      }), r;
    }
  }
}, function (e) {
  e(e.s = 5841);
}]);
(self.owpbjsChunk = self.owpbjsChunk || []).push([[9215], {
  2224: function (e, t, n) {
    "use strict";

    n.d(t, {
      HQ: function () {
        return s;
      },
      Pv: function () {
        return c;
      },
      UR: function () {
        return i;
      }
    });
    var o = n(9853),
      r = n(265),
      i = {
        trustpid: {
          source: "trustpid.com",
          atype: 1,
          getValue: function (e) {
            return e;
          }
        },
        intentIqId: {
          source: "intentiq.com",
          atype: 1,
          getValue: function (e) {
            return e.RESULT;
          }
        },
        naveggId: {
          source: "navegg.com",
          atype: 1
        },
        justId: {
          source: "justtag.com",
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
          getUidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        ftrackId: {
          source: "flashtalking.com",
          atype: 1,
          getValue: function (e) {
            return e.uid;
          },
          getUidExt: function (e) {
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
            var t = (0, o.pick)(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(t).length) return t;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 3
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 3,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 3
        },
        dmdId: {
          source: "hcn.health",
          atype: 3
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
          atype: 3,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.keyID ? {
              keyID: e.keyID
            } : void 0;
          }
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        IDP: {
          source: "zeotap.com",
          atype: 1,
          getValue: function (e) {
            return (0, o.isPlainObject)(e) ? e.id : e;
          }
        },
        hadronId: {
          source: "audigent.com",
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
        nextrollId: {
          source: "nextroll.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 3
        },
        "33acrossId": {
          source: "33across.com",
          atype: 1,
          getValue: function (e) {
            return e.envelope;
          }
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        },
        mwOpenLinkId: {
          source: "mediawallahscript.com",
          atype: 1
        },
        tapadId: {
          source: "tapad.com",
          atype: 1
        },
        novatiq: {
          getValue: function (e) {
            return e.snowflake;
          },
          source: "novatiq.com",
          atype: 1
        },
        uid2: {
          source: "uidapi.com",
          atype: 3,
          getValue: function (e) {
            return e.id;
          }
        },
        dapId: {
          source: "akamai.com",
          atype: 1
        },
        deepintentId: {
          source: "deepintent.com",
          atype: 3
        },
        admixerId: {
          source: "admixer.net",
          atype: 3
        },
        adtelligentId: {
          source: "adtelligent.com",
          atype: 3
        },
        amxId: {
          source: "amxrtb.com",
          atype: 1
        },
        publinkId: {
          source: "epsilon.com",
          atype: 3
        },
        kpuid: {
          source: "kpuid.com",
          atype: 3
        },
        imuid: {
          source: "intimatemerger.com",
          atype: 1
        },
        connectId: {
          source: "yahoo.com",
          atype: 3
        },
        qid: {
          source: "adquery.io",
          atype: 1
        },
        dacId: {
          source: "impact-ad.jp",
          atype: 1
        }
      };
    function a(e, t) {
      var n = i[t];
      if (n && e) {
        var r = {};
        r.source = n.source;
        var a = (0, o.isFn)(n.getValue) ? n.getValue(e) : e;
        if ((0, o.isStr)(a)) {
          var s = {
            id: a,
            atype: n.atype
          };
          if ((0, o.isFn)(n.getUidExt)) {
            var c = n.getUidExt(e);
            c && (s.ext = c);
          }
          if (r.uids = [s], (0, o.isFn)(n.getEidExt)) {
            var u = n.getEidExt(e);
            u && (r.ext = u);
          }
          return r;
        }
      }
      return null;
    }
    function s(e) {
      var t = [];
      for (var n in e) if (e.hasOwnProperty(n)) if ("pubProvidedId" === n) t = t.concat(e.pubProvidedId);else {
        var o = a(e[n], n);
        o && t.push(o);
      }
      return t;
    }
    function c(e) {
      var t = [];
      return e.filter(function (e) {
        return (0, o.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
      }).forEach(function (e) {
        Object.keys(e.idObj).forEach(function (n) {
          (0, r.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, r.Z)(i, n + ".source") && t.push({
            source: i[n].source,
            bidders: e.config.bidders
          });
        });
      }), t;
    }
  },
  9999: function (e, t, n) {
    "use strict";

    var o = n(1879),
      r = n(8962),
      i = n(2319),
      a = n(2528),
      s = n(7602),
      c = n(5644),
      u = n(3494),
      d = n(2224),
      l = n(5849),
      f = n(9853),
      g = n(265),
      p = n(8214),
      h = n.n(p),
      m = n(2783),
      v = n.n(m),
      y = n(2153),
      b = n.n(y);
    function w() {
      return w = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      }, w.apply(this, arguments);
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function I(e) {
      return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, I(e);
    }
    var _,
      O,
      E,
      k,
      A,
      x = "User ID",
      P = "cookie",
      D = "html5",
      j = {
        name: "_pbjs_userid_consent_data",
        expires: 30
      },
      H = "_pbjs_id_optout",
      U = (0, l.eA)("userid"),
      B = [],
      C = !1,
      T = [],
      R = !1,
      F = [],
      L = [],
      M = {},
      V = [],
      z = [];
    function W(e, t) {
      var n = e.config.storage,
        o = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
      try {
        var r = (0, f.isPlainObject)(t) ? JSON.stringify(t) : t,
          i = new Date(Date.now() + 864e5 * n.expires).toUTCString();
        n.type === P ? (U.setCookie(n.name, r, i, "Lax", o), "number" == typeof n.refreshInSeconds && U.setCookie("".concat(n.name, "_last"), new Date().toUTCString(), i, "Lax", o)) : n.type === D && (U.setDataInLocalStorage("".concat(n.name, "_exp"), i), U.setDataInLocalStorage(n.name, encodeURIComponent(r)), "number" == typeof n.refreshInSeconds && U.setDataInLocalStorage("".concat(n.name, "_last"), new Date().toUTCString()));
      } catch (e) {
        (0, f.logError)(e);
      }
    }
    function N(e) {
      var t = (0, f.getPrebidInternal)().setEidPermissions;
      "function" == typeof t && (0, f.isArray)(e) && t((0, d.Pv)(e));
    }
    function q(e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = n ? "".concat(e.name, "_").concat(n) : e.name;
      try {
        if (e.type === P) t = U.getCookie(o);else if (e.type === D) {
          var r = U.getDataFromLocalStorage("".concat(e.name, "_exp"));
          "" === r ? t = U.getDataFromLocalStorage(o) : r && new Date(r).getTime() - Date.now() > 0 && (t = decodeURIComponent(U.getDataFromLocalStorage(o)));
        }
        "string" == typeof t && "{" === t.trim().charAt(0) && (t = JSON.parse(t));
      } catch (e) {
        (0, f.logError)(e);
      }
      return t;
    }
    function G(e) {
      var t = {
        consentString: "",
        gdprApplies: !1,
        apiVersion: 0
      };
      return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), (0, f.cyrb53Hash)(JSON.stringify(t));
    }
    function Z(e) {
      try {
        var t = new Date(Date.now() + 864e5 * j.expires).toUTCString();
        U.setCookie(j.name, G(e), t, "Lax");
      } catch (e) {
        (0, f.logError)(e);
      }
    }
    function J() {
      try {
        return U.getCookie(j.name);
      } catch (e) {
        (0, f.logError)(e);
      }
    }
    function Q(e) {
      if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
        if (!e.consentString) return !1;
        if (1 === e.apiVersion && !1 === (0, g.Z)(e, "vendorData.purposeConsents.1")) return !1;
        if (2 === e.apiVersion && !1 === (0, g.Z)(e, "vendorData.purpose.consents.1")) return !1;
      }
      return !0;
    }
    function $() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
      if (!U.cookiesAreEnabled()) return e;
      var t,
        n,
        o = e.split(".");
      if (2 == o.length) return e;
      var r = -2,
        i = "_rdc".concat(Date.now()),
        a = "writeable";
      do {
        t = o.slice(r).join(".");
        var s = new Date((0, f.timestamp)() + 1e4).toUTCString();
        U.setCookie(i, a, s, "Lax", t, void 0), U.getCookie(i, void 0) === a ? (n = !1, U.setCookie(i, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, t, void 0)) : (r += -1, n = Math.abs(r) <= o.length);
      } while (n);
      return t;
    }
    function Y(e, t) {
      var n = function () {};
      t && (n = (0, f.delayExecution)(function () {
        clearTimeout(O), t();
      }, e.length)), e.forEach(function (e) {
        e.callback(function (t) {
          t ? (e.config.storage && W(e, t), e.idObj = e.submodule.decode(t, e.config)) : (0, f.logInfo)("".concat(x, ": ").concat(e.submodule.name, " - request id responded with an empty value")), n();
        }), e.callback = void 0;
      });
    }
    function K(e) {
      return Array.isArray(e) && e.length ? e.filter(function (e) {
        return (0, f.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
      }).reduce(function (e, t) {
        return Object.keys(t.idObj).forEach(function (n) {
          e[n] = t.idObj[n];
        }), e;
      }, {}) : {};
    }
    function X(e) {
      var t = !1;
      if (R && void 0 !== _) for (var n in _) T.push(_[n]);
      if ((void 0 === _ || R) && (R = !1, _ = function (e, t) {
        var n = le(e, t),
          o = n.userIdModules;
        if (!n.hasValidated && !Q(t)) return (0, f.logWarn)("".concat(x, " - gdpr permission not valid for local storage or cookies, exit module")), [];
        var r = J();
        return Z(t), o.reduce(function (e, n) {
          return fe(n, t, r, !1), e.push(n), e;
        }, []);
      }(T, s.rp.getConsentData()), _.length)) {
        N(_);
        var o = _.filter(function (e) {
          return (0, f.isFn)(e.callback);
        });
        if (o.length) if (e && k > 0) {
          t = !0;
          var r = !1,
            a = function () {
              r || (r = !0, e());
            };
          (0, f.logInfo)("".concat(x, " - auction delayed by ").concat(k, " at most to fetch ids")), O = setTimeout(a, k), Y(o, a);
        } else i.on(c.EVENTS.REQUEST_BIDS, function e() {
          i.off(c.EVENTS.REQUEST_BIDS, e), E > 0 ? setTimeout(function () {
            Y(o);
          }, E) : Y(o);
        });
      }
      e && !t && e();
    }
    function ee(e, t) {
      X(function () {
        !function (e, t) {
          [e].some(function (e) {
            return !Array.isArray(e) || !e.length;
          }) || e.forEach(function (e) {
            e.bids && (0, f.isArray)(e.bids) && e.bids.forEach(function (e) {
              var n = function (e, t) {
                return Array.isArray(e) && e.length && t ? e.filter(function (e) {
                  return !e.config.bidders || !(0, f.isArray)(e.config.bidders) || (0, o.q9)(e.config.bidders, t);
                }).filter(function (e) {
                  return (0, f.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
                }).reduce(function (e, t) {
                  return Object.keys(t.idObj).forEach(function (n) {
                    e[n] = t.idObj[n];
                  }), e;
                }, {}) : {};
              }(t, e.bidder);
              Object.keys(n).length && (e.userId = n, e.userIdAsEids = (0, d.HQ)(n));
            });
          });
        }(t.adUnits || (0, a.R)().adUnits, _);
        var n = A && (te() || []).find(function (e) {
          return e.source === A;
        });
        if (n && "string" == typeof (0, g.Z)(n, "uids.0.id")) {
          var r = n.uids[0].id.replace(/[\W_]/g, "");
          r.length >= 32 && r.length <= 150 ? (0, f.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(r) : (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () {
            window.googletag.pubads().setPublisherProvidedId(r);
          })) : (0, f.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(A, " is not between 32 and 150 characters - ").concat(r));
        }
        e.call(this, t);
      });
    }
    function te() {
      return X(), (0, d.HQ)(K(_));
    }
    function ne(e) {
      return X(), (0, d.HQ)(function (e, t) {
        if (!Array.isArray(e) || !e.length) return {};
        var n = e.filter(function (e) {
          return (0, f.isPlainObject)(e.idObj) && Object.keys(e.idObj).length && d.UR[Object.keys(e.idObj)[0]].source === t;
        });
        return (0, f.isEmpty)(n) ? [] : n[0].idObj;
      }(_, e))[0];
    }
    function oe(e, t, n) {
      var o = {};
      if ((0, f.isFn)(n)) {
        (0, f.logInfo)("".concat(x, " - Getting encrypted signal from custom function : ").concat(n.name, " & source : ").concat(e, " "));
        var r = n(e);
        o[e] = r ? re(r) : null;
      } else {
        var i = ne(e);
        (0, f.logInfo)("".concat(x, " - Getting encrypted signal for eids :").concat(JSON.stringify(i))), (0, f.isEmpty)(i) || (o[i.source] = !0 === t ? re(i) : i.uids[0].id);
      }
      var a = Promise.resolve(o[e]);
      return (0, f.logInfo)("".concat(x, " - Fetching encrypted eids: ").concat(o[e])), a;
    }
    function re(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = "";
      return 1 === t && (n = "object" === I(e) ? window.btoa(JSON.stringify(e)) : window.btoa(e)), "".concat(t, "||").concat(n);
    }
    function ie(e) {
      var t = c.MODULE_PARAM_TO_UPDATE_FOR_SSO[e.name];
      if (t) {
        var n = se() || {},
          o = window.PWT && window.PWT.ssoEnabled && n.emailHash ? n.emailHash : n.pubProvidedEmailHash ? n.pubProvidedEmailHash : void 0;
        t.forEach(function (t) {
          e.params[t.key] = "id5Id" === e.name ? function (e, t) {
            var n = {
                1: e && e.SHA256 || void 0,
                5: t ? btoa(t) : void 0
              },
              o = Object.keys((0, f.skipUndefinedValues)(n)).map(function (e) {
                return n[e] && e + "=" + n[e];
              }).join("&");
            return btoa(o);
          }(o, n.userID) : o ? o[t.hashType] : void 0;
        });
      }
    }
    function ae() {
      var e = c.REFRESH_IDMODULES_LIST.PRIMARY_MODULES,
        t = c.REFRESH_IDMODULES_LIST.SCRIPT_BASED_MODULES;
      for (var n in F) {
        var o = F[n].name;
        e.indexOf(o) >= 0 && (V.push(o), ie(F[n])), t.indexOf(o) >= 0 && z.push(o);
      }
    }
    function se() {
      return M;
    }
    function ce(e, t) {
      var n = {};
      "connected" === t.status ? (window.PWT = window.PWT || {}, window.PWT.fbAt = t.authResponse.accessToken, window.FB && window.FB.api("/me?fields=email&access_token=" + window.PWT.fbAt, function (t) {
        (0, f.logInfo)("SSO - Data received from FB API"), t.error ? (0, f.logInfo)("SSO - User information could not be retrieved by facebook api [", t.error.message, "]") : ((0, f.logInfo)("SSO - Information successfully retrieved by Facebook API."), ue(t.email || void 0, n), e.setUserIdentities({
          emailHash: n
        }));
      })) : (0, f.logInfo)("SSO - Error fetching login information from facebook");
    }
    function ue(e, t) {
      e = void 0 !== e ? e.trim().toLowerCase() : "", new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e) && (t.MD5 = h()(e).toString(), t.SHA1 = v()(e).toString(), t.SHA256 = b()(e).toString());
    }
    var de,
      le = (0, u.z3)("sync", function (e, t) {
        return {
          userIdModules: e,
          hasValidated: t && t.hasValidated
        };
      }, "validateGdprEnforcement");
    function fe(e, t, n, o) {
      if (e.config.storage) {
        var r,
          i = q(e.config.storage),
          a = !1;
        if ("number" == typeof e.config.storage.refreshInSeconds) {
          var s = new Date(q(e.config.storage, "last"));
          a = s && Date.now() - s.getTime() > 1e3 * e.config.storage.refreshInSeconds;
        }
        !i || a || o || !function (e, t) {
          return null != e && e === G(t);
        }(n, t) ? r = e.submodule.getId(e.config, t, i) : "function" == typeof e.submodule.extendId && (r = e.submodule.extendId(e.config, t, i)), (0, f.isPlainObject)(r) && (r.id && (W(e, r.id), i = r.id), "function" == typeof r.callback && (e.callback = r.callback)), i && (e.idObj = e.submodule.decode(i, e.config));
      } else if (e.config.value) e.idObj = e.config.value;else {
        var c = e.submodule.getId(e.config, t, void 0);
        (0, f.isPlainObject)(c) && ("function" == typeof c.callback && (e.callback = c.callback), c.id && (e.idObj = e.submodule.decode(c.id, e.config)));
      }
    }
    function ge(e) {
      for (var t = !1, n = 0; n < _.length; n++) if (e.config.name.toLowerCase() === _[n].config.name.toLowerCase()) {
        t = !0, _[n] = e;
        break;
      }
      t || _.push(e);
    }
    function pe() {
      var e = function (e, t, n) {
        return Array.isArray(e) ? e.reduce(function (e, t) {
          return !t || (0, f.isEmptyStr)(t.name) || (!t.storage || (0, f.isEmptyStr)(t.storage.type) || (0, f.isEmptyStr)(t.storage.name) || -1 === n.indexOf(t.storage.type) ? (0, f.isPlainObject)(t.value) ? e.push(t) : t.storage || t.value || e.push(t) : e.push(t)), e;
        }, []) : [];
      }(F, 0, B);
      if (e.length) {
        ae();
        var t = L.filter(function (e) {
          return !(0, o.sE)(T, function (t) {
            return t.name === e.name;
          });
        });
        T = t.map(function (t) {
          var n = (0, o.sE)(e, function (e) {
            return e.name && (e.name.toLowerCase() === t.name.toLowerCase() || t.aliasName && e.name.toLowerCase() === t.aliasName.toLowerCase());
          });
          return n && t.name !== n.name && (n.name = t.name), t.findRootDomain = $, n ? {
            submodule: t,
            config: n,
            callback: void 0,
            idObj: void 0
          } : null;
        }).filter(function (e) {
          return null !== e;
        }), !C && T.length && ((0, a.R)().requestBids.before(ee, 40), (0, f.logInfo)("".concat(x, " - usersync config updated for ").concat(T.length, " submodules: "), T.map(function (e) {
          return e.submodule.name;
        })), C = !0);
      }
    }
    de = r.vc, A = void 0, T = [], F = [], C = !1, _ = void 0, -1 !== (B = [U.localStorageIsEnabled() ? D : null, U.cookiesAreEnabled() ? P : null].filter(function (e) {
      return null !== e;
    })).indexOf(P) && U.getCookie(H) ? (0, f.logInfo)("".concat(x, " - opt-out cookie found, exit module")) : -1 !== B.indexOf(D) && U.getDataFromLocalStorage(H) ? (0, f.logInfo)("".concat(x, " - opt-out localStorage found, exit module")) : (de.getConfig("userSync", function (e) {
      var t = e.userSync;
      A = t.ppid, t && t.userIds && (F = t.userIds, E = (0, f.isNumber)(t.syncDelay) ? t.syncDelay : 500, k = (0, f.isNumber)(t.auctionDelay) ? t.auctionDelay : 0, pe());
    }), (0, a.R)().getUserIds = function () {
      return X(), K(_);
    }, (0, a.R)().getUserIdsAsEids = te, (0, a.R)().getEncryptedEidsForSource = oe, (0, a.R)().registerSignalSources = function () {
      if (window.googletag) {
        window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [];
        var e = r.vc.getConfig("userSync.encryptedSignalSources");
        if (e) {
          var t = e.registerDelay || 0;
          setTimeout(function () {
            e.sources && e.sources.forEach(function (e) {
              var t = e.source,
                n = e.encrypt,
                o = e.customFunc;
              t.forEach(function (e) {
                window.googletag.encryptedSignalProviders.push({
                  id: e,
                  collectorFunction: function () {
                    return oe(e, n, o);
                  }
                });
              });
            });
          }, t);
        } else (0, f.logWarn)("".concat(x, " - ESP : encryptedSignalSources config not defined under userSync Object"));
      }
    }, (0, a.R)().refreshUserIds = function (e, t, n) {
      void 0 !== n && (R = n);
      var o = e ? e.submoduleNames : null;
      o || (o = []), X(function () {
        var e = s.rp.getConsentData(),
          n = le(T, e),
          r = n.userIdModules;
        if (n.hasValidated || Q(e)) {
          var i = J();
          Z(e);
          var a,
            c = [],
            u = function (e, t) {
              var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0;
                  }
                }(e))) {
                  n && (e = n);
                  var o = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return o >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[o++]
                      };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i,
                a = !0,
                s = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return a = e.done, e;
                },
                e: function (e) {
                  s = !0, i = e;
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw i;
                  }
                }
              };
            }(r);
          try {
            for (u.s(); !(a = u.n()).done;) {
              var d = a.value;
              o.length > 0 && -1 === o.indexOf(d.submodule.name) || ((0, f.logInfo)("".concat(x, " - refreshing ").concat(d.submodule.name)), fe(d, e, i, !0), ge(d), _.length && N(_), (0, f.isFn)(d.callback) && c.push(d));
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          c.length > 0 && Y(c), t && t();
        } else (0, f.logWarn)("".concat(x, " - gdpr permission not valid for local storage or cookies, exit module"));
      });
    }, (0, a.R)().setUserIdentities = function (e) {
      if ((0, f.isEmpty)(e)) M = {};else {
        var t = {};
        e.pubProvidedEmail && (ue(e.pubProvidedEmail, t), e.pubProvidedEmailHash = t, delete e.pubProvidedEmail), w(M, e), window.PWT && window.PWT.loginEvent && (ae(), (0, a.R)().refreshUserIds({
          submoduleNames: V
        }), function (e) {
          var t = 0,
            n = se() || {};
          for (t in e) switch (e[t]) {
            case "zeotapIdPlus":
              if (window.zeotap && (0, f.isFn)(window.zeotap.callMethod)) {
                var o = {
                  email: n.emailHash.SHA256
                };
                window.zeotap.callMethod("setUserIdentities", o, !0);
              }
              break;
            case "identityLink":
              if (window.ats && (0, f.isFn)(window.ats.start)) {
                var r = window.ats.outputCurrentConfiguration();
                r.emailHashes = n.emailHash ? [n.emailHash.MD5, n.emailHash.SHA1, n.emailHash.SHA256] : void 0, window.ats.start(r);
              }
              break;
            case "publinkId":
              if (window.conversant && (0, f.isFn)(window.conversant.launch)) {
                var i = window.conversant.getLauncherObject();
                i.emailHashes = n.emailHash ? [n.emailHash.MD5, n.emailHash.SHA256] : void 0, window.conversant.launch("publink", "start", i);
              }
          }
        }(z), window.PWT.loginEvent = !1);
      }
    }, (0, a.R)().getUserIdentities = se, (0, a.R)().onSSOLogin = function (e) {
      var t,
        n = this,
        o = {};
      if (window.PWT && window.PWT.ssoEnabled) switch (e.provider) {
        case void 0:
        case "facebook":
          "facebook" === e.provider ? window.FB && window.FB.getLoginStatus(function (e) {
            ce(n, e);
          }, !0) : window.FB && window.FB.Event.subscribe("auth.statusChange", function (e) {
            ce(n, e);
          });
          break;
        case "google":
          t = e.googleUserObject.getBasicProfile().getEmail() || void 0, (0, f.logInfo)("SSO - Information successfully retrieved by Google API"), ue(t, o), n.setUserIdentities({
            emailHash: o
          });
      }
    }, (0, a.R)().onSSOLogout = function () {
      this.setUserIdentities({});
    }, (0, a.R)().getUserIdsAsEidBySource = ne), (0, u.bA)("userId", function (e) {
      (0, o.sE)(L, function (t) {
        return t.name === e.name;
      }) || (L.push(e), pe());
    }), window.owpbjs.installedModules.push("userId");
  },
  8249: function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        o = {},
        r = o.lib = {},
        i = r.Base = {
          extend: function (e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function () {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function () {},
          mixIn: function (e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function () {
            return this.init.prototype.extend(this);
          }
        },
        a = r.WordArray = i.extend({
          init: function (e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
          },
          toString: function (e) {
            return (e || c).stringify(this);
          },
          concat: function (e) {
            var t = this.words,
              n = e.words,
              o = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), o % 4) for (var i = 0; i < r; i++) {
              var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[o + i >>> 2] |= a << 24 - (o + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) t[o + i >>> 2] = n[i >>> 2];
            return this.sigBytes += r, this;
          },
          clamp: function () {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function () {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function (t) {
            for (var n, o = [], r = function (t) {
                var n = 987654321,
                  o = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & o) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & o) & o;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var s = r(4294967296 * (n || e.random()));
              n = 987654071 * s(), o.push(4294967296 * s() | 0);
            }
            return new a.init(o, t);
          }
        }),
        s = o.enc = {},
        c = s.Hex = {
          stringify: function (e) {
            for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              o.push((i >>> 4).toString(16)), o.push((15 & i).toString(16));
            }
            return o.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], o = 0; o < t; o += 2) n[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
            return new a.init(n, t / 2);
          }
        },
        u = s.Latin1 = {
          stringify: function (e) {
            for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              o.push(String.fromCharCode(i));
            }
            return o.join("");
          },
          parse: function (e) {
            for (var t = e.length, n = [], o = 0; o < t; o++) n[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
            return new a.init(n, t);
          }
        },
        d = s.Utf8 = {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function (e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function () {
            this._data = new a.init(), this._nDataBytes = 0;
          },
          _append: function (e) {
            "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function (t) {
            var n = this._data,
              o = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              s = r / (4 * i),
              c = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var d = 0; d < c; d += i) this._doProcessBlock(o, d);
              var l = o.splice(0, c);
              n.sigBytes -= u;
            }
            return new a.init(l, u);
          },
          clone: function () {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        }),
        f = (r.Hasher = l.extend({
          cfg: i.extend(),
          init: function (e) {
            this.cfg = this.cfg.extend(e), this.reset();
          },
          reset: function () {
            l.reset.call(this), this._doReset();
          },
          update: function (e) {
            return this._append(e), this._process(), this;
          },
          finalize: function (e) {
            return e && this._append(e), this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function (e) {
            return function (t, n) {
              return new e.init(n).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, n) {
              return new f.HMAC.init(e, n).finalize(t);
            };
          }
        }), o.algo = {});
      return o;
    }(Math), n);
  },
  8214: function (e, t, n) {
    var o;
    e.exports = (o = n(8249), function (e) {
      var t = o,
        n = t.lib,
        r = n.WordArray,
        i = n.Hasher,
        a = t.algo,
        s = [];
      !function () {
        for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
      }();
      var c = a.MD5 = i.extend({
        _doReset: function () {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function (e, t) {
          for (var n = 0; n < 16; n++) {
            var o = t + n,
              r = e[o];
            e[o] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            a = e[t + 0],
            c = e[t + 1],
            g = e[t + 2],
            p = e[t + 3],
            h = e[t + 4],
            m = e[t + 5],
            v = e[t + 6],
            y = e[t + 7],
            b = e[t + 8],
            w = e[t + 9],
            S = e[t + 10],
            I = e[t + 11],
            _ = e[t + 12],
            O = e[t + 13],
            E = e[t + 14],
            k = e[t + 15],
            A = i[0],
            x = i[1],
            P = i[2],
            D = i[3];
          A = u(A, x, P, D, a, 7, s[0]), D = u(D, A, x, P, c, 12, s[1]), P = u(P, D, A, x, g, 17, s[2]), x = u(x, P, D, A, p, 22, s[3]), A = u(A, x, P, D, h, 7, s[4]), D = u(D, A, x, P, m, 12, s[5]), P = u(P, D, A, x, v, 17, s[6]), x = u(x, P, D, A, y, 22, s[7]), A = u(A, x, P, D, b, 7, s[8]), D = u(D, A, x, P, w, 12, s[9]), P = u(P, D, A, x, S, 17, s[10]), x = u(x, P, D, A, I, 22, s[11]), A = u(A, x, P, D, _, 7, s[12]), D = u(D, A, x, P, O, 12, s[13]), P = u(P, D, A, x, E, 17, s[14]), A = d(A, x = u(x, P, D, A, k, 22, s[15]), P, D, c, 5, s[16]), D = d(D, A, x, P, v, 9, s[17]), P = d(P, D, A, x, I, 14, s[18]), x = d(x, P, D, A, a, 20, s[19]), A = d(A, x, P, D, m, 5, s[20]), D = d(D, A, x, P, S, 9, s[21]), P = d(P, D, A, x, k, 14, s[22]), x = d(x, P, D, A, h, 20, s[23]), A = d(A, x, P, D, w, 5, s[24]), D = d(D, A, x, P, E, 9, s[25]), P = d(P, D, A, x, p, 14, s[26]), x = d(x, P, D, A, b, 20, s[27]), A = d(A, x, P, D, O, 5, s[28]), D = d(D, A, x, P, g, 9, s[29]), P = d(P, D, A, x, y, 14, s[30]), A = l(A, x = d(x, P, D, A, _, 20, s[31]), P, D, m, 4, s[32]), D = l(D, A, x, P, b, 11, s[33]), P = l(P, D, A, x, I, 16, s[34]), x = l(x, P, D, A, E, 23, s[35]), A = l(A, x, P, D, c, 4, s[36]), D = l(D, A, x, P, h, 11, s[37]), P = l(P, D, A, x, y, 16, s[38]), x = l(x, P, D, A, S, 23, s[39]), A = l(A, x, P, D, O, 4, s[40]), D = l(D, A, x, P, a, 11, s[41]), P = l(P, D, A, x, p, 16, s[42]), x = l(x, P, D, A, v, 23, s[43]), A = l(A, x, P, D, w, 4, s[44]), D = l(D, A, x, P, _, 11, s[45]), P = l(P, D, A, x, k, 16, s[46]), A = f(A, x = l(x, P, D, A, g, 23, s[47]), P, D, a, 6, s[48]), D = f(D, A, x, P, y, 10, s[49]), P = f(P, D, A, x, E, 15, s[50]), x = f(x, P, D, A, m, 21, s[51]), A = f(A, x, P, D, _, 6, s[52]), D = f(D, A, x, P, p, 10, s[53]), P = f(P, D, A, x, S, 15, s[54]), x = f(x, P, D, A, c, 21, s[55]), A = f(A, x, P, D, b, 6, s[56]), D = f(D, A, x, P, k, 10, s[57]), P = f(P, D, A, x, v, 15, s[58]), x = f(x, P, D, A, O, 21, s[59]), A = f(A, x, P, D, h, 6, s[60]), D = f(D, A, x, P, I, 10, s[61]), P = f(P, D, A, x, g, 15, s[62]), x = f(x, P, D, A, w, 21, s[63]), i[0] = i[0] + A | 0, i[1] = i[1] + x | 0, i[2] = i[2] + P | 0, i[3] = i[3] + D | 0;
        },
        _doFinalize: function () {
          var t = this._data,
            n = t.words,
            o = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(o / 4294967296),
            a = o;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
            var d = c[u];
            c[u] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8);
          }
          return s;
        },
        clone: function () {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, o, r, i, a) {
        var s = e + (t & n | ~t & o) + r + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function d(e, t, n, o, r, i, a) {
        var s = e + (t & o | n & ~o) + r + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function l(e, t, n, o, r, i, a) {
        var s = e + (t ^ n ^ o) + r + a;
        return (s << i | s >>> 32 - i) + t;
      }
      function f(e, t, n, o, r, i, a) {
        var s = e + (n ^ (t | ~o)) + r + a;
        return (s << i | s >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), o.MD5);
  },
  2783: function (e, t, n) {
    var o, r, i, a, s, c, u, d;
    e.exports = (r = (o = d = n(8249)).lib, i = r.WordArray, a = r.Hasher, s = o.algo, c = [], u = s.SHA1 = a.extend({
      _doReset: function () {
        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], a = n[3], s = n[4], u = 0; u < 80; u++) {
          if (u < 16) c[u] = 0 | e[t + u];else {
            var d = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
            c[u] = d << 1 | d >>> 31;
          }
          var l = (o << 5 | o >>> 27) + s + c[u];
          l += u < 20 ? 1518500249 + (r & i | ~r & a) : u < 40 ? 1859775393 + (r ^ i ^ a) : u < 60 ? (r & i | r & a | i & a) - 1894007588 : (r ^ i ^ a) - 899497514, s = a, a = i, i = r << 30 | r >>> 2, r = o, o = l;
        }
        n[0] = n[0] + o | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + a | 0, n[4] = n[4] + s | 0;
      },
      _doFinalize: function () {
        var e = this._data,
          t = e.words,
          n = 8 * this._nDataBytes,
          o = 8 * e.sigBytes;
        return t[o >>> 5] |= 128 << 24 - o % 32, t[14 + (o + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
      },
      clone: function () {
        var e = a.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    }), o.SHA1 = a._createHelper(u), o.HmacSHA1 = a._createHmacHelper(u), d.SHA1);
  },
  2153: function (e, t, n) {
    var o;
    e.exports = (o = n(8249), function (e) {
      var t = o,
        n = t.lib,
        r = n.WordArray,
        i = n.Hasher,
        a = t.algo,
        s = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), o = 2; o <= n; o++) if (!(t % o)) return !1;
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var o = 2, r = 0; r < 64;) t(o) && (r < 8 && (s[r] = n(e.pow(o, .5))), c[r] = n(e.pow(o, 1 / 3)), r++), o++;
      }();
      var u = [],
        d = a.SHA256 = i.extend({
          _doReset: function () {
            this._hash = new r.init(s.slice(0));
          },
          _doProcessBlock: function (e, t) {
            for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], a = n[3], s = n[4], d = n[5], l = n[6], f = n[7], g = 0; g < 64; g++) {
              if (g < 16) u[g] = 0 | e[t + g];else {
                var p = u[g - 15],
                  h = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                  m = u[g - 2],
                  v = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[g] = h + u[g - 7] + v + u[g - 16];
              }
              var y = o & r ^ o & i ^ r & i,
                b = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
                w = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & d ^ ~s & l) + c[g] + u[g];
              f = l, l = d, d = s, s = a + w | 0, a = i, i = r, r = o, o = w + (b + y) | 0;
            }
            n[0] = n[0] + o | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + a | 0, n[4] = n[4] + s | 0, n[5] = n[5] + d | 0, n[6] = n[6] + l | 0, n[7] = n[7] + f | 0;
          },
          _doFinalize: function () {
            var t = this._data,
              n = t.words,
              o = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(o / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = o, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function () {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(d), t.HmacSHA256 = i._createHmacHelper(d);
    }(Math), o.SHA256);
  }
}, function (e) {
  e(e.s = 9999);
}]);
owpbjs.processQueue();
!function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
  }
  var i = {};
  return t.m = e, t.c = i, t.p = "", t(0);
}([function (e, t, i) {
  var n = i(1),
    r = i(9),
    o = i(6),
    a = i(4),
    s = i(2),
    d = i(15),
    c = i(3),
    l = (i(11), n.getMetaInfo(window));
  window.PWT = window.PWT || {}, window.PWT.bidMap = window.PWT.bidMap || {}, window.PWT.bidIdMap = window.PWT.bidIdMap || {}, window.PWT.adUnits = window.PWT.adUnits || {}, window.PWT.floorData = window.PWT.floorData || {}, window.PWT.isIframe = window.PWT.isIframe || l.isInIframe, window.PWT.protocol = window.PWT.protocol || l.protocol, window.PWT.secure = window.PWT.secure || l.secure, window.PWT.pageURL = window.PWT.pageURL || l.pageURL, window.PWT.refURL = window.PWT.refURL || l.refURL, window.PWT.isSafeFrame = window.PWT.isSafeFrame || !1, window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || !1, window.PWT.udpv = window.PWT.udpv || n.findQueryParamInURL(l.isIframe ? l.refURL : l.pageURL, "pwtv"), n.findQueryParamInURL(l.isIframe ? l.refURL : l.pageURL, "pwtc") && n.enableDebugLog(), n.findQueryParamInURL(l.isIframe ? l.refURL : l.pageURL, "pwtvc") && n.enableVisualDebugLog();
  var u = s.isPrebidPubMaticAnalyticsEnabled();
  window.PWT.displayCreative = function (e, t) {
    n.log("In displayCreative for: " + t), u ? window[a.COMMON.PREBID_NAMESPACE].renderAd(e, t) : o.displayCreative(e, t);
  }, window.PWT.displayPMPCreative = function (e, t, i) {
    n.log("In displayPMPCreative for: " + t);
    var r = n.getBididForPMP(t, i);
    r && (u ? window[a.COMMON.PREBID_NAMESPACE].renderAd(e, r) : o.displayCreative(e, r));
  }, window.PWT.sfDisplayCreative = function (e, t) {
    n.log("In sfDisplayCreative for: " + t), d = window.ucTag || {}, this.isSafeFrame = !0, d = window.ucTag || {}, u ? d.renderAd(e, {
      adId: t,
      pubUrl: document.referrer
    }) : window.parent.postMessage(JSON.stringify({
      pwt_type: "1",
      pwt_bidID: t,
      pwt_origin: a.COMMON.PROTOCOL + window.location.hostname
    }), "*");
  }, window.PWT.sfDisplayPMPCreative = function (e, t, i) {
    n.log("In sfDisplayPMPCreative for: " + t), this.isSafeFrame = !0;
    var r = n.getBididForPMP(t, i);
    r && (s.isPrebidPubMaticAnalyticsEnabled() ? d.renderAd(e, {
      adId: r,
      pubUrl: document.referrer
    }) : window.parent.postMessage(JSON.stringify({
      pwt_type: "1",
      pwt_bidID: r,
      pwt_origin: a.COMMON.PROTOCOL + window.location.hostname
    }), "*"));
  }, window.PWT.initNativeTrackers = function (e, t) {
    n.log("In startTrackers for: " + t), n.addEventListenerForClass(window, "click", a.COMMON.OW_CLICK_NATIVE, o.loadTrackers), o.executeTracker(t);
  }, window.PWT.getUserIds = function () {
    return n.getUserIds();
  }, window.OWT = {
    notifyCount: 0,
    externalBidderStatuses: {}
  }, window.OWT.registerExternalBidders = function (e) {
    return window.OWT.notifyCount++, n.forEachOnArray(e, function (e, t) {
      n.log("registerExternalBidders: " + t), window.OWT.externalBidderStatuses[t] = {
        id: window.OWT.notifyCount,
        status: !1
      };
    }), window.OWT.notifyCount;
  }, window.OWT.notifyExternalBiddingComplete = function (e) {
    n.forEachOnObject(window.OWT.externalBidderStatuses, function (t, i) {
      i && i.id === e && (n.log("notify externalBidding complete: " + t), window.OWT.externalBidderStatuses[t] = {
        id: i.id,
        status: !0
      });
    });
  }, window.PWT.UpdateVastWithTracker = function (e, t) {
    return n.UpdateVastWithTracker(e, t);
  }, window.PWT.generateDFPURL = function (e, t) {
    var i = "";
    e && n.isObject(e) || n.logError("An AdUnit should be an Object", e), e.bidData && e.bidData.wb && e.bidData.kvp ? (e.bid = e.bidData.wb, e.bid.adserverTargeting = e.bidData.kvp) : n.logWarning("No bid found for given adUnit");
    var r = {
      adUnit: e,
      params: {
        iu: e.adUnitId,
        cust_params: t,
        output: "vast"
      }
    };
    return e.bid && (r.bid = e.bid), i = window.owpbjs.adServers.dfp.buildVideoUrl(r);
  }, window.PWT.getCustomParamsForDFPVideo = function (e, t) {
    return n.getCustomParamsForDFPVideo(e, t);
  }, window.PWT.setAuctionTimeout = function (e) {
    isNaN(e) || (n.log("updating aution timeout from: " + c.pwt.t + " to: " + e), c.pwt.t = e);
  }, window.PWT.versionDetails = n.getOWConfig(), window.PWT.getAdapterNameForAlias = s.getAdapterNameForAlias, r.init(window);
}, function (e, t, i) {
  function n(e, t) {
    return I.call(e) === "[object " + t + "]";
  }
  function r(e, t, i, n, r, c, l, u, p, g, f) {
    var I = i[a.CONFIG.KEY_LOOKUP_MAP] || i[a.CONFIG.REGEX_KEY_LOOKUP_MAP] || null,
      _ = g.indexOf(a.MACROS.WIDTH) >= 0 && g.indexOf(a.MACROS.HEIGHT) >= 0,
      S = i[a.CONFIG.REGEX_KEY_LOOKUP_MAP] ? !0 : !1,
      E = void 0;
    const b = o.getAdapterNameForAlias(e);
    var h = a.PUBMATIC_ALIASES.indexOf(b) > -1 ? !0 : !1,
      w = !1;
    m.forEachOnArray(c, function (r, o) {
      var c = null,
        g = !1,
        b = l.getSizes();
      if (null == I) f && 1 == f.length && (o = f[0]), g = !0;else {
        if (S) {
          m.debugLogIsEnabled && m.log(console.time("Time for regexMatching for key " + o));
          var P = m.getConfigFromRegex(I, o);
          m.debugLogIsEnabled && m.log(console.timeEnd("Time for regexMatching for key " + o)), P ? (c = P.config, E = P.regexPattern) : w = h ? !0 : !1;
        } else f && 1 == f.length && (c = I[Object.keys(I).filter(function (e) {
          return e.toLowerCase() === f[0].toLowerCase();
        })], c && (o = f[0])), c || (c = I[Object.keys(I).filter(function (e) {
          return e.toLowerCase() === o.toLowerCase();
        })]);
        !c && !h || w ? m.log(e + ": " + o + a.MESSAGES.M8) : g = !0;
      }
      if (g) {
        if (1 == p) {
          var O = s.createBid(e, o);
          O.setDefaultBidStatus(1).setReceivedTime(m.getCurrentTimestampInMs()), d.setBidFromBidder(l.getDivID(), O), O.setRegexPattern(E);
        }
        u(e, t, i, n, o, _, l, m.getPartnerParams(c), b[r][0], b[r][1], E);
      }
    });
  }
  var o = i(2),
    a = i(4),
    s = i(5),
    d = i(6),
    c = !1;
  t.debugLogIsEnabled = c;
  var l = !1;
  t.visualDebugLogIsEnabled = l;
  var u = "Array",
    p = "String",
    g = "Function",
    f = "Number",
    I = Object.prototype.toString,
    m = this;
  m.idsAppendedToAdUnits = !1;
  var _ = {};
  t.mediaTypeConfig = _, t.isA = n, t.isFunction = function (e) {
    return m.isA(e, g);
  }, t.isString = function (e) {
    return m.isA(e, p);
  }, t.isArray = function (e) {
    return m.isA(e, u);
  }, t.isNumber = function (e) {
    return m.isA(e, f);
  }, t.isObject = function (e) {
    return "object" == typeof e && null !== e;
  }, t.isOwnProperty = function (e, t) {
    return m.isObject(e) && e.hasOwnProperty ? e.hasOwnProperty(t) : !1;
  }, t.isUndefined = function (e) {
    return "undefined" == typeof e;
  }, t.enableDebugLog = function () {
    m.debugLogIsEnabled = !0;
  }, t.isDebugLogEnabled = function () {
    return m.debugLogIsEnabled;
  }, t.enableVisualDebugLog = function () {
    m.debugLogIsEnabled = !0, m.visualDebugLogIsEnabled = !0;
  }, t.isEmptyObject = function (e) {
    return m.isObject(e) && 0 === Object.keys(e).length;
  };
  var S = "[OpenWrap] : ",
    E = "[OpenWrap] : [Error]";
  t.log = function (e) {
    m.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.log(new Date().getTime() + " : " + S + e) : console.log(e));
  }, t.logError = function (e) {
    m.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.error(new Date().getTime() + " : " + S + e) : console.error(e));
  }, t.logWarning = function (e) {
    m.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.warn(new Date().getTime() + " : " + S + e) : console.warn(e));
  }, t.error = function (e) {
    console.log(new Date().getTime() + " : " + E, e);
  }, t.getCurrentTimestampInMs = function () {
    var e = new window.Date();
    return e.getTime();
  }, t.getCurrentTimestamp = function () {
    var e = new Date();
    return Math.round(e.getTime() / 1e3);
  };
  var b = function () {
    var e = 0;
    return function () {
      return e++, e;
    };
  }();
  t.utilGetIncrementalInteger = b, t.getUniqueIdentifierStr = function () {
    return b() + window.Math.random().toString(16).substr(2);
  }, t.copyKeyValueObject = function (e, t) {
    if (m.isObject(e) && m.isObject(t)) {
      var i = m;
      m.forEachOnObject(t, function (n, r) {
        if (t[n] = i.isArray(r) ? r : [r], i.isOwnProperty(e, n)) {
          if (!m.isArray(e[n])) {
            var o = e[n];
            e[n] = [o];
          }
          e[n].push(r);
        } else e[n] = [r];
      });
    }
  }, t.getIncrementalInteger = function () {
    var e = 0;
    return function () {
      return e++, e;
    };
  }(), t.generateUUID = function () {
    var e = new window.Date().getTime(),
      t = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, ""),
      i = t.length,
      n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, function (n) {
        var r = (e + 16 * Math.random()) % 16 | 0;
        e = Math.floor(e / 16);
        var o;
        switch (n) {
          case "x":
            o = r;
            break;
          case "z":
            o = t[Math.floor(Math.random() * i)];
            break;
          default:
            o = 3 & r | 8;
        }
        return o.toString(16);
      });
    return n;
  };
  var h = "g",
    w = new RegExp(a.MACROS.WIDTH, h),
    P = new RegExp(a.MACROS.HEIGHT, h),
    O = new RegExp(a.MACROS.AD_UNIT_ID, h),
    A = new RegExp(a.MACROS.AD_UNIT_INDEX, h),
    y = new RegExp(a.MACROS.INTEGER, h),
    v = new RegExp(a.MACROS.DIV, h);
  t.generateSlotNamesFromPattern = function (e, t, i, n) {
    var r,
      o,
      a,
      s,
      d = [],
      c = {};
    if (m.isObject(e) && m.isFunction(e.getSizes)) {
      o = e.getSizes();
      var l = m.isFunction(e.getDivID) ? e.getDivID() : e.getSlotId().getDomId();
      if (i) {
        o = [].concat(e.getSizes());
        var u = m.mediaTypeConfig[l];
        u && u.video && o.unshift([0, 0]);
      }
      if (a = o.length, a > 0) for (s = 0; a > s; s++) if (2 == o[s].length && o[s][0] && o[s][1] || 0 == o[s][0] && 0 == o[s][1] || m.isFunction(o[s].getWidth) && m.isFunction(o[s].getHeight)) {
        var p = m.isFunction(e.getAdUnitID) ? e.getAdUnitID() : e.getSlotId().getAdUnitPath(),
          l = m.isFunction(e.getDivID) ? e.getDivID() : e.getSlotId().getDomId(),
          g = m.isFunction(e.getAdUnitIndex) ? e.getAdUnitIndex() : e.getSlotId().getId().split("_")[1],
          f = 0 == o[s][0] ? 0 : o[s][0] || o[s].getWidth(),
          I = 0 == o[s][1] ? 0 : o[s][1] || o[s].getHeight();
        r = t, r = r.replace(O, p).replace(A, g).replace(y, m.getIncrementalInteger()).replace(v, l).replace(w, f).replace(P, I), 0 == f && 0 == I ? n[0] = r : m.isOwnProperty(c, r) || (c[r] = "", d.push(r));
      }
    }
    return d;
  }, t.forEachGeneratedKey = function (e, t, i, n, r, o, s, d) {
    var c = o.length,
      l = i[a.CONFIG.KEY_GENERATION_PATTERN] || i[a.CONFIG.REGEX_KEY_GENERATION_PATTERN] || "";
    c > 0 && l.length > 3 && m.forEachOnArray(o, function (o, a) {
      var c = [],
        u = m.generateSlotNamesFromPattern(a, l, !0, c);
      u.length > 0 && m.callHandlerFunctionForMapping(e, t, i, n, r, u, a, s, d, l, c);
    });
  }, t.callHandlerFunctionForMapping = r, t.resizeWindow = function (e, t, i, n) {
    if (i && t) try {
      var r = e.defaultView.frameElement,
        o = [];
      if (n) {
        var a = document.getElementById(n),
          s = a.querySelector("div");
        o.push(s), o.push(s.querySelector("iframe")), r = a.querySelector("iframe");
      }
      o.push(r), o.forEach(function (e) {
        e && (e.width = "" + t, e.height = "" + i, e.style.width = "" + t + "px", e.style.height = "" + i + "px");
      });
    } catch (d) {
      m.logError("Creative-Resize; Error in resizing creative");
    }
  }, t.writeIframe = function (e, t, i, n, r) {
    e.write('<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + i + '" hspace="0" vspace="0" height="' + n + '"' + (r ? ' style="' + r + '"' : "") + ' src="' + t + '"></iframe>');
  }, t.displayCreative = function (e, t) {
    t && t.pbbid && "video" == t.pbbid.mediaType && t.renderer && m.isObject(t.renderer) ? m.isFunction(t.renderer.render) && t.renderer.render(t.getPbBid()) : (m.resizeWindow(e, t.width, t.height), t.adHtml ? (("appier" == t.getAdapterID().toLowerCase() || "deepintent" == t.getAdapterID().toLowerCase()) && (t.adHtml = m.replaceAuctionPrice(t.adHtml, t.getGrossEcpm())), e.write(t.adHtml)) : t.adUrl ? (("appier" == t.getAdapterID().toLowerCase() || "deepintent" == t.getAdapterID().toLowerCase()) && (t.adUrl = m.replaceAuctionPrice(t.adUrl, t.getGrossEcpm())), m.writeIframe(e, t.adUrl, t.width, t.height, "")) : (m.logError("creative details are not found"), m.logError(t)));
  }, t.forEachOnObject = function (e, t) {
    if (m.isObject(e) && m.isFunction(t)) for (var i in e) m.isOwnProperty(e, i) && t(i, e[i]);
  }, t.forEachOnArray = function (e, t) {
    if (m.isArray(e) && m.isFunction(t)) for (var i = 0, n = e.length; n > i; i++) t(i, e[i]);
  }, t.trim = function (e) {
    return m.isString(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : e;
  }, t.getTopFrameOfSameDomain = function (e) {
    try {
      if (e.parent.document != e.document) return m.getTopFrameOfSameDomain(e.parent);
    } catch (t) {}
    return e;
  }, t.metaInfo = {}, t.getMetaInfo = function (e) {
    var t,
      i = {},
      n = 512;
    i.pageURL = "", i.refURL = "", i.protocol = "https://", i.secure = 1, i.isInIframe = m.isIframe(e);
    try {
      t = m.getTopFrameOfSameDomain(e), i.refURL = (t.refurl || t.document.referrer || "").substr(0, n), i.pageURL = (t !== window.top && "" != t.document.referrer ? t.document.referrer : t.location.href).substr(0, n), i.protocol = function (e) {
        return "http:" === e.location.protocol ? (i.secure = 0, "http://") : (i.secure = 1, "https://");
      }(t);
    } catch (r) {}
    return i.pageDomain = m.getDomainFromURL(i.pageURL), m.metaInfo = i, i;
  }, t.isIframe = function (e) {
    try {
      return e.self !== e.top;
    } catch (t) {
      return !1;
    }
  }, t.findQueryParamInURL = function (e, t) {
    return m.isOwnProperty(m.parseQueryParams(e), t);
  }, t.parseQueryParams = function (e) {
    var t = m.createDocElement(window, "a");
    t.href = e;
    var i = {};
    if (t.search) {
      var n = t.search.replace("?", "");
      n = n.split("&"), m.forEachOnArray(n, function (e, t) {
        var t = t.split("="),
          n = t[0] || "",
          r = t[1] || "";
        i[n] = r;
      });
    }
    return i;
  }, t.createDocElement = function (e, t) {
    return e.document.createElement(t);
  }, t.addHookOnFunction = function (e, t, i, n) {
    var r = e;
    if (e = t ? e.__proto__ : e, m.isObject(e) && m.isFunction(e[i])) {
      var o = e[i];
      e[i] = n(r, o);
    } else m.logWarning("in assignNewDefination: oldReference is not a function");
  }, t.getBididForPMP = function (e, t) {
    e = e.split(",");
    var i = e.length,
      n = t.length,
      r = "",
      o = "";
    if (0 == i) return this.log("Error: Unable to find bidID as values array is empty."), void 0;
    for (var s = 0; n > s; s++) {
      for (var d = 0; i > d; d++) if (e[d].indexOf(t[s]) >= 0) {
        r = e[d];
        break;
      }
      if ("" != r) break;
    }
    "" == r ? (r = e[0], this.log("No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: " + r)) : this.log("Selecting PMP-Deal: " + r);
    var c = r.split(a.COMMON.DEAL_KEY_VALUE_SEPARATOR);
    return 3 == c.length && (o = c[2]), o ? o : (this.log("Error: bidID not found in PMP-Deal: " + r), void 0);
  }, t.createInvisibleIframe = function () {
    var e = m.createDocElement(window, "iframe");
    return e.id = m.getUniqueIdentifierStr(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.style = "display:none", e;
  }, t.addMessageEventListener = function (e, t) {
    return "function" != typeof t ? (m.log("EventHandler should be a function"), !1) : (e.addEventListener ? e.addEventListener("message", t, !1) : e.attachEvent("onmessage", t), !0);
  }, t.safeFrameCommunicationProtocol = function (e) {
    try {
      if (msgData = window.JSON.parse(e.data), !msgData.pwt_type) return;
      switch (window.parseInt(msgData.pwt_type)) {
        case 1:
          if (window.PWT.isSafeFrame) return;
          var t = d.getBidById(msgData.pwt_bidID);
          if (t) {
            var i = t.bid,
              n = i.getAdapterID(),
              r = t.slotid,
              a = {
                pwt_type: 2,
                pwt_bid: i
              };
            m.vLogInfo(r, {
              type: "disp",
              adapter: n
            }), d.executeMonetizationPixel(r, i), i && i.pbbid && "video" == i.pbbid.mediaType && i.renderer && m.isObject(i.renderer) ? m.isFunction(i.renderer.render) && i.renderer.render(i.getPbBid()) : (m.resizeWindow(window.document, i.width, i.height, r), e.source.postMessage(window.JSON.stringify(a), msgData.pwt_origin));
          }
          break;
        case 2:
          if (!window.PWT.isSafeFrame) return;
          if (msgData.pwt_bid) {
            var i = msgData.pwt_bid;
            if (i.adHtml) try {
              var s = m.createInvisibleIframe(window.document);
              if (!s) throw {
                message: "Failed to create invisible frame.",
                name: ""
              };
              if (s.setAttribute("width", i.width), s.setAttribute("height", i.height), s.style = "", window.document.body.appendChild(s), !s.contentWindow) throw {
                message: "Unable to access frame window.",
                name: ""
              };
              var c = s.contentWindow.document;
              if (!c) throw {
                message: "Unable to access frame window document.",
                name: ""
              };
              var l = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>';
              l += "<body>", l += "<script>var $sf = window.parent.$sf;</script>", l += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>", l += i.adHtml, l += "</body></html>", c.write(l), c.close();
            } catch (u) {
              m.logError("Error in rendering creative in safe frame."), m.log(u), m.log("Rendering synchronously."), m.displayCreative(window.document, msgData.pwt_bid);
            } else i.adUrl ? m.writeIframe(window.document, i.adUrl, i.width, i.height, "") : (m.logWarning("creative details are not found"), m.log(i));
          }
          break;
        case 3:
          if (o.isPrebidPubMaticAnalyticsEnabled()) {
            var e = {
              message: "Prebid Native",
              adId: msgData.pwt_bidID,
              action: msgData.pwt_action
            };
            window.postMessage(JSON.stringify(e), "*");
          } else {
            var t = d.getBidById(msgData.pwt_bidID);
            if (t) {
              var i = t.bid,
                n = i.getAdapterID(),
                r = t.slotid;
              m.vLogInfo(r, {
                type: "disp",
                adapter: n
              }), msgData.pwt_action && "imptrackers" == msgData.pwt_action && d.executeMonetizationPixel(r, i), d.fireTracker(i, msgData.pwt_action);
            }
          }
      }
    } catch (u) {}
  }, t.addMessageEventListenerForSafeFrame = function (e) {
    m.addMessageEventListener(e, m.safeFrameCommunicationProtocol);
  }, t.getElementLocation = function (e) {
    var t,
      i = 0,
      n = 0;
    if (m.isFunction(e.getBoundingClientRect)) t = e.getBoundingClientRect(), i = Math.floor(t.left), n = Math.floor(t.top);else for (; e;) i += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
    return {
      x: i,
      y: n
    };
  }, t.createVLogInfoPanel = function (e, t) {
    var i,
      n,
      r,
      o = window.document;
    if (m.visualDebugLogIsEnabled && (i = o.getElementById(e), i && t.length && t[0][0] && t[0][1] && (r = e + "-pwtc-info", !m.isUndefined(o.getElementById(r))))) {
      var a = m.getElementLocation(i);
      n = o.createElement("div"), n.id = r, n.style = "position: absolute; /*top: " + a.y + "px;*/ left: " + a.x + "px; width: " + t[0][0] + "px; height: " + t[0][1] + "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;";
      var s = o.createElement("img");
      s.src = m.metaInfo.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png", s.style = "cursor:pointer; position: absolute; top: 2px; left: " + (a.x + t[0][0] - 16 - 15) + "px; z-index: 9999998;", s.title = "close", s.onclick = function () {
        n.style.display = "none";
      }, n.appendChild(s), n.appendChild(o.createElement("br"));
      for (var d = "Slot: " + e + " | ", c = 0; c < t.length; c++) d += (0 != c ? ", " : "") + t[c][0] + "x" + t[c][1];
      n.appendChild(o.createTextNode(d)), n.appendChild(o.createElement("br")), i.parentNode.insertBefore(n, i);
    }
  }, t.realignVLogInfoPanel = function (e) {
    var t,
      i,
      n,
      r = window.document;
    if (m.visualDebugLogIsEnabled && (t = r.getElementById(e), t && (n = e + "-pwtc-info", i = r.getElementById(n)))) {
      var o = m.getElementLocation(t);
      i.style.visibility = "visible", i.style.left = o.x + "px", i.style.height = t.clientHeight + "px";
    }
  }, t.vLogInfo = function (e, t) {
    var i,
      n,
      r = window.document;
    if (m.visualDebugLogIsEnabled) {
      var o = e + "-pwtc-info";
      if (i = r.getElementById(o)) {
        switch (t.type) {
          case "bid":
            var a = t.latency,
              s = t.bidDetails,
              d = "";
            0 > a && (a = 0), d = t.hasOwnProperty("adServerCurrency") && void 0 !== t.adServerCurrency ? 0 == t.adServerCurrency ? "USD" : t.adServerCurrency : "USD", n = "Bid: " + t.bidder + (t.s2s ? "(s2s)" : "") + ": " + s.getNetEcpm() + "(" + s.getGrossEcpm() + ")" + d + " :" + a + "ms", s.getPostTimeoutStatus() && (n += ": POST-TIMEOUT");
            break;
          case "win-bid":
            var s = t.bidDetails,
              d = "";
            d = t.hasOwnProperty("adServerCurrency") && void 0 !== t.adServerCurrency ? 0 == t.adServerCurrency ? "USD" : t.adServerCurrency : "USD", n = "Winning Bid: " + s.getAdapterID() + ": " + s.getNetEcpm() + d;
            break;
          case "win-bid-fail":
            n = "There are no bids from PWT";
            break;
          case "hr":
            n = "----------------------";
            break;
          case "disp":
            n = "Displaying creative from " + t.adapter;
        }
        i.appendChild(r.createTextNode(n)), i.appendChild(r.createElement("br"));
      }
    }
  }, t.getExternalBidderStatus = function (e) {
    var t = !0;
    return m.forEachOnArray(e, function (e, i) {
      t = window.OWT.externalBidderStatuses[i] ? t && window.OWT.externalBidderStatuses[i].status : t;
    }), t;
  }, t.resetExternalBidderStatus = function (e) {
    m.forEachOnArray(e, function (e, t) {
      m.log("resetExternalBidderStatus: " + t), window.OWT.externalBidderStatuses[t] = void 0;
    });
  }, t.ajaxRequest = function (e, t, i, n) {
    try {
      n = n || {};
      var r,
        o = 4,
        a = !0,
        s = n.method || (i ? "POST" : "GET");
      if (window.XMLHttpRequest ? (r = new window.XMLHttpRequest(), m.isUndefined(r.responseType) && (a = !1)) : a = !1, !a) return m.log("Ajax is not supported"), void 0;
      r.onreadystatechange = function () {
        r.readyState === o && t && t(r.responseText, r);
      }, r.open(s, e), n.withCredentials && (r.withCredentials = !0), n.preflight && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-Type", n.contentType || "text/plain"), r.send("POST" === s && i);
    } catch (d) {
      m.log("Failed in Ajax"), m.log(d);
    }
  }, t.getAdUnitConfig = function (e, t) {
    function i() {
      return f ? Object.keys(s.config).toString().toLowerCase().indexOf(f.toLowerCase()) > -1 ? !0 : !1 : void 0;
    }
    var n = {},
      r = {},
      s = o.getSlotConfiguration();
    if (s) if (s.configPattern && "" != s.configPattern.trim() || (s.configPattern = "_AU_")) {
      var d = s.configPattern,
        c = !0,
        l = !0,
        u = !0,
        p = void 0,
        g = m.isFunction(t.getDivID) ? t.getDivID() : t.getSlotId().getDomId(),
        f = m.generateSlotNamesFromPattern(t, d, !1)[0];
      if (m.isOwnProperty(s.config, a.COMMON.DEFAULT) && (s.config[a.COMMON.DEFAULT].banner && m.isOwnProperty(s.config[a.COMMON.DEFAULT].banner, "enabled") && !s.config[a.COMMON.DEFAULT].banner.enabled && (u = !1), s.config[a.COMMON.DEFAULT].native && m.isOwnProperty(s.config[a.COMMON.DEFAULT].native, "enabled") && !s.config[a.COMMON.DEFAULT].native.enabled && (l = !1), s.config[a.COMMON.DEFAULT].video && m.isOwnProperty(s.config[a.COMMON.DEFAULT].video, "enabled") && !s.config[a.COMMON.DEFAULT].video.enabled && (c = !1), p = s.config[a.COMMON.DEFAULT], p.renderer && !m.isEmptyObject(p.renderer) && (n.renderer = p.renderer)), m.isOwnProperty(s.config, f) || i() ? (p = s.config[f], p || (p = s.config[Object.keys(s.config).filter(function (e) {
        return e.toLocaleLowerCase() === f.toLowerCase();
      })]), m.log("Config" + JSON.stringify(p) + " found for adSlot: " + JSON.stringify(t))) : m.log("Considering Default Config for " + JSON.stringify(t)), p) {
        if (l && p.native && (!m.isOwnProperty(p.native, "enabled") || p.native.enabled) && (p.native.config ? r["native"] = p.native.config : m.logWarning("Native Config will not be considered as no config has been provided for slot" + JSON.stringify(t) + " or there is no configuration defined in default.")), c && p.video && (!m.isOwnProperty(p.video, "enabled") || p.video.enabled) && (o.getAdServer() != a.AD_SERVER.DFP ? p.video.config ? (r.video = p.video.config, p.video.partnerConfig && (r.partnerConfig = p.video.partnerConfig)) : m.logWarning("Video Config will not be considered as no config has been provided for slot" + JSON.stringify(t) + " or there is no configuration defined in default.") : m.logWarning("Video Config will not be considered with DFP selected as AdServer.")), p.renderer && !m.isEmptyObject(p.renderer) && (n.renderer = p.renderer), !u || p.banner && m.isOwnProperty(p.banner, "enabled") && !p.banner.enabled) return m.mediaTypeConfig[g] = r, n.mediaTypeObject = r, n;
      } else m.log("Config not found for adSlot: " + JSON.stringify(t));
    } else m.logWarning("Slot Type not found in config. Please provide slotType in configuration");
    return r.banner = {
      sizes: e
    }, m.mediaTypeConfig[g] = r, n.mediaTypeObject = r, n;
  }, t.addEventListenerForClass = function (e, t, i, n) {
    if ("function" != typeof n) return m.log("EventHandler should be a function"), !1;
    var r = m.findElementsByClass(e, i);
    e.addEventListener || (t = "on" + t);
    for (var o = 0; o < r.length; o++) r[o].addEventListener(t, n, !0);
    return !0;
  }, t.findElementsByClass = function (e, t) {
    return e.document.getElementsByClassName(t) || [];
  }, t.getBidFromEvent = function (e) {
    return e && e.target && e.target.attributes && e.target.attributes[a.COMMON.BID_ID] && e.target.attributes[a.COMMON.BID_ID].value || "";
  }, t.getAdFormatFromBidAd = function (e) {
    var t = void 0;
    if (e && m.isString(e)) try {
      var i = new RegExp(/VAST\s+version/);
      if (i.test(e)) t = a.FORMAT_VALUES.VIDEO;else {
        var n = JSON.parse(e.replace(/\\/g, ""));
        n && n.native && (t = a.FORMAT_VALUES.NATIVE);
      }
    } catch (r) {
      t = a.FORMAT_VALUES.BANNER;
    }
    return t;
  }, t.handleHook = function (e, t) {
    m.isFunction(window.PWT[e]) && (m.log("For Hook-name: " + e + ", calling window.PWT." + e + "function."), window.PWT[e].apply(window.PWT, t));
  }, t.getCurrencyToDisplay = function () {
    var e = o.getAdServerCurrency();
    if (0 == e && (e = "USD"), o.getAdServerCurrency() && window[a.COMMON.PREBID_NAMESPACE] && m.isFunction(window[a.COMMON.PREBID_NAMESPACE].getConfig)) {
      var t = window[a.COMMON.PREBID_NAMESPACE].getConfig();
      if (t && t.currency && t.currency.adServerCurrency) return t.currency.adServerCurrency;
    }
    return e;
  }, t.getConfigFromRegex = function (e, t) {
    for (var i = null, n = t.split("@"), r = 0; r < e.length; r++) {
      var o = e[r],
        s = o.rx;
      if (3 == n.length) try {
        if (n[0].match(new RegExp(s.AU, "i")) && n[1].match(new RegExp(s.DIV, "i")) && n[2].match(new RegExp(s.SIZE, "i"))) {
          i = {
            config: o.rx_config,
            regexPattern: s.AU + "@" + s.DIV + "@" + s.SIZE
          };
          break;
        }
      } catch (d) {
        m.logError(a.MESSAGES.M27 + JSON.stringify(s));
      } else m.logWarning(a.MESSAGES.M28 + t);
    }
    return i;
  }, t.getUserIdConfiguration = function () {
    var e = [];
    return owpbjs.onSSOLogin({}), m.forEachOnObject(o.getIdentityPartners(), function (t, i) {
      a.EXCLUDE_PARTNER_LIST.indexOf(t) < 0 && e.push(m.getUserIdParams(i));
    }), m.log(a.MESSAGES.IDENTITY.M4 + JSON.stringify(e)), e;
  }, t.getUserIds = function () {
    return m.isFunction(window[a.COMMON.PREBID_NAMESPACE].getUserIds) ? window[a.COMMON.PREBID_NAMESPACE].getUserIds() : (m.logWarning("getUserIds" + a.MESSAGES.IDENTITY.M6), void 0);
  }, t.getUserIdsAsEids = function () {
    return m.isFunction(window[a.COMMON.PREBID_NAMESPACE].getUserIdsAsEids) ? window[a.COMMON.PREBID_NAMESPACE].getUserIdsAsEids() : (m.logWarning("getUserIdsAsEids" + a.MESSAGES.IDENTITY.M6), void 0);
  }, t.getNestedObjectFromArray = function (e, t, i) {
    for (var n = e, r = n, o = 0; o < t.length - 1; o++) r[t[o]] || (r[t[o]] = {}), r = r[t[o]];
    return r[t[t.length - 1]] = i, n;
  }, t.getNestedObjectFromString = function (e, t, i, n) {
    var r = i.split(t);
    return 1 == r.length ? e[i] = n : e = m.getNestedObjectFromArray(e, r, n), e;
  }, t.getUserIdParams = function (e) {
    var t = {};
    m.applyDataTypeChangesIfApplicable(e), m.applyCustomParamValuesfApplicable(e);
    for (var i in e) try {
      -1 == a.EXCLUDE_IDENTITY_PARAMS.indexOf(i) && (a.TOLOWERCASE_IDENTITY_PARAMS.indexOf(i) > -1 && (e[i] = e[i].toLowerCase()), a.JSON_VALUE_KEYS.indexOf(i) > -1 && (e[i] = JSON.parse(e[i])), t = m.getNestedObjectFromString(t, ".", i, e[i]));
    } catch (n) {
      m.logWarning(a.MESSAGES.IDENTITY.M3, n);
    }
    return t && t.params && "true" == t.params.loadATS && m.initLiveRampAts(t), t && t.params && "true" == t.params.loadIDP && m.initZeoTapJs(t), t && t.params && "true" == t.params.loadLauncher && m.initLauncherJs(t), t;
  }, t.getPartnerParams = function (e) {
    var t = {};
    for (var i in e) try {
      t = m.getNestedObjectFromString(t, ".", i, e[i]);
    } catch (n) {
      m.logWarning(a.MESSAGES.M29, n);
    }
    return t;
  }, t.generateMonetizationPixel = function (e, t) {
    var i,
      n,
      r,
      s,
      c,
      l,
      u,
      p = o.getMonetizationPixelURL(),
      g = o.getPublisherId(),
      f = "";
    const I = !0,
      _ = t.pbbid && t.pbbid.prebidBidId || t.prebidBidId;
    return p ? (n = m.isFunction(t.getGrossEcpm) ? t.getGrossEcpm(I) : o.getAdServerCurrency() && m.isFunction(t.getCpmInNewCurrency) ? window.parseFloat(t.getCpmInNewCurrency(a.COMMON.ANALYTICS_CURRENCY)) : o.isPrebidPubMaticAnalyticsEnabled() && t.originalCpm ? t.originalCpm : t.cpm, c = m.isFunction(t.getAdapterID) ? t.getAdapterID() : t.bidderCode, "pubmaticServer" == c && (c = t.originalBidder || "pubmatic"), l = o.getAdapterNameForAlias(c), i = m.isFunction(t.getNetEcpm) ? t.getNetEcpm(I) : window.parseFloat((n * o.getAdapterRevShare(c)).toFixed(a.COMMON.BID_PRECISION)), s = m.isFunction(t.getBidID) ? t.getBidID() : o.isPrebidPubMaticAnalyticsEnabled() && t.adId ? t.adId : window.PWT.bidMap[e].adapters[c].bids[Object.keys(window.PWT.bidMap[e].adapters[c].bids)[0]].bidID, r = m.isFunction(t.getKGPV) ? t.getKGPV() : window.PWT.bidMap[e].adapters[c].bids[Object.keys(window.PWT.bidMap[e].adapters[c].bids)[0]].getKGPV(!1, t.mediaType), f = m.isFunction(t.getsspID) ? t.getsspID() : t.sspID || "", u = d.getAdUnitInfo(e).adUnitId || slotId, p += "pubid=" + g, p += "&purl=" + window.encodeURIComponent(m.metaInfo.pageURL), p += "&tst=" + m.getCurrentTimestamp(), p += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[e].getImpressionID()), p += "&bidid=" + (_ ? window.encodeURIComponent(_) : window.encodeURIComponent(s)), p += "&origbidid=" + window.encodeURIComponent(s), p += "&pid=" + window.encodeURIComponent(o.getProfileID()), p += "&pdvid=" + window.encodeURIComponent(o.getProfileDisplayVersionID()), p += "&slot=" + window.encodeURIComponent(e), p += "&au=" + window.encodeURIComponent(u), p += "&bc=" + window.encodeURIComponent(c), p += "&pn=" + window.encodeURIComponent(l), p += "&en=" + window.encodeURIComponent(i), p += "&eg=" + window.encodeURIComponent(n), p += "&kgpv=" + window.encodeURIComponent(r), p += "&piid=" + window.encodeURIComponent(f), a.COMMON.PROTOCOL + p) : void 0;
  }, t.UpdateVastWithTracker = function (e, t) {
    try {
      var i = new DOMParser(),
        n = i.parseFromString(t, "application/xml"),
        r = n.createElement("Impression");
      return r.innerHTML = "<![CDATA[" + m.generateMonetizationPixel(e.adUnitCode, e) + "]]>", 1 == n.getElementsByTagName("Wrapper").length ? n.getElementsByTagName("Wrapper")[0].appendChild(r) : 1 == n.getElementsByTagName("InLine").length && n.getElementsByTagName("InLine")[0].appendChild(r), new XMLSerializer().serializeToString(n);
    } catch (o) {
      return t;
    }
  }, t.getDomainFromURL = function (e) {
    var t = window.document.createElement("a");
    return t.href = e, t.hostname;
  }, t.replaceAuctionPrice = function (e, t) {
    return e ? e.replace(/\$\{AUCTION_PRICE\}/g, t) : void 0;
  }, t.getCustomParamsForDFPVideo = function (e, t) {
    const i = t && t.adserverTargeting || {};
    var n = {};
    for (var r in i) m.isOwnProperty(i, r) && (n[r] = m.isArray(i[r]) ? i[r].join() : i[r]);
    var e = Object.assign({}, n, e);
    return e;
  }, t.getDevicePlatform = function () {
    var e = 3;
    try {
      var t = navigator.userAgent;
      if (t && m.isString(t) && "" != t.trim()) {
        t = t.toLowerCase().trim();
        var i = new RegExp("(mobi|tablet|ios).*");
        e = t.match(i) ? 2 : 1;
      }
    } catch (n) {
      m.logError("Unable to get device platform", n);
    }
    return e;
  }, t.getOWConfig = function () {
    var e = {
      timeout: o.getTimeout(),
      openwrap_version: o[a.COMMON.OWVERSION],
      prebid_version: o[a.COMMON.PBVERSION],
      profileId: o.getProfileID(),
      profileVersionId: o.getProfileDisplayVersionID()
    };
    return e;
  }, t.updateAdUnits = function (e) {
    m.isArray(e) ? e.forEach(function (e) {
      e.bids.forEach(function (e) {
        m.updateUserIds(e);
      });
    }) : m.isEmptyObject(e) || e.bids.forEach(function (e) {
      m.updateUserIds(e);
    });
  }, t.updateUserIds = function (e) {
    if (m.isUndefined(e.userId) ? e.userId = m.getUserIds() : e.userId && (e.userId = Object.assign(e.userId, m.getUserIds())), m.isUndefined(e.userIdAsEids)) e.userIdAsEids = m.getUserIdsAsEids();else if (m.isArray(e.userIdAsEids)) {
      var t = new Set(),
        i = m.getUserIdsAsEids().concat(e.userIdAsEids);
      m.isArray(i) && i.length > 0 && (i = i.filter(function (e) {
        if (e.source) {
          if (t.has(e.source)) return !1;
          t.add(e.source);
        }
        return !0;
      })), e.userIdAsEids = i;
    }
  }, t.getLiverampParams = function (e) {
    e.params.cssSelectors && e.params.cssSelectors.length > 0 && (e.params.cssSelectors = e.params.cssSelectors.split(","));
    var t = owpbjs.getUserIdentities() || {},
      i = o.isSSOEnabled() || !1,
      n = e.params.detectionMechanism,
      r = "true" === e.params.enableCustomId ? !0 : !1,
      a = {
        placementID: e.params.pid,
        storageType: e.params.storageType,
        logging: e.params.logging
      };
    switch (r && (a.accountID = e.params.accountID, a.customerIDRegex = e.params.customerIDRegex, a.detectionSubject = "customerIdentifier"), n) {
      case void 0:
      case "detect":
        a.detectionType = e.params.detectionType, a.urlParameter = e.params.urlParameter, a.cssSelectors = e.params.cssSelectors, a.detectDynamicNodes = e.params.detectDynamicNodes, a.detectionEventType = e.params.detectionEventType, e.params.triggerElements && e.params.triggerElements.length > 0 && (e.params.triggerElements = e.params.triggerElements.split(","), a.triggerElements = e.params.triggerElements);
        break;
      case "direct":
        var s = i && t.emailHash ? t.emailHash : t.pubProvidedEmailHash ? t.pubProvidedEmailHash : void 0;
        a.emailHashes = s && [s.MD5, s.SHA1, s.SHA256] || void 0, r && m.isFunction(owpbjs.getUserIdentities) && void 0 !== owpbjs.getUserIdentities() && (a.customerID = owpbjs.getUserIdentities().customerID || void 0);
    }
    return a;
  }, t.getPublinkLauncherParams = function (e) {
    e.params.cssSelectors && e.params.cssSelectors.length > 0 && (e.params.cssSelectors = e.params.cssSelectors.split(","));
    var t = owpbjs.getUserIdentities() || {},
      i = o.isSSOEnabled() || !1,
      n = e.params.detectionMechanism,
      r = {
        apiKey: e.params.api_key,
        siteId: e.params.site_id
      };
    switch (n) {
      case void 0:
      case "detect":
        r.urlParameter = e.params.urlParameter, r.cssSelectors = e.params.cssSelectors, r.detectionSubject = "email";
        break;
      case "direct":
        var a = i && t.emailHash ? t.emailHash : t.pubProvidedEmailHash ? t.pubProvidedEmailHash : void 0;
        r.emailHashes = a && [a.MD5, a.SHA256] || void 0;
    }
    return r;
  }, t.initLiveRampAts = function (e) {
    function t() {
      var t = document.createElement("script"),
        i = m.getLiverampParams(e);
      t.onload = function () {
        window.ats && window.ats.start(i);
      }, t.src = "https://ats.rlcdn.com/ats.js", document.body.appendChild(t);
    }
    "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.initZeoTapJs = function (e) {
    function t() {
      var t = document,
        i = window,
        n = owpbjs.getUserIdentities() || {},
        r = o.isSSOEnabled() || !1,
        a = {
          email: r && n.emailHash ? n.emailHash.SHA256 : n.pubProvidedEmailHash ? n.pubProvidedEmailHash.SHA256 : void 0
        },
        s = t.createElement("script");
      s.type = "text/javascript", s.crossorigin = "anonymous", s.async = !0, s.src = "https://content.zeotap.com/sdk/idp.min.js", s.onload = function () {}, t = t.getElementsByTagName("script")[0];
      var d = {
        partnerId: e.partnerId,
        allowIDP: !0,
        useConsent: o.getCCPA() || o.getGdpr(),
        checkForCMP: o.getCCPA() || o.getGdpr()
      };
      t.parentNode.insertBefore(s, t), t = i.zeotap || {
        _q: [],
        _qcmp: []
      }, !function (e, t, i) {
        for (var n = 0; n < t.length; n++) !function (t) {
          e[t] = function () {
            e[i].push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }(t[n]);
      }(t, ["callMethod"], "_q"), i.zeotap = t, i.zeotap.callMethod("init", d), i.zeotap.callMethod("setUserIdentities", a, !0);
    }
    "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.initLauncherJs = function (e) {
    function t() {
      var t = document.createElement("script"),
        i = m.getPublinkLauncherParams(e);
      t.onload = function () {
        window.conversant.getLauncherObject = function () {
          return i;
        }, window.conversant && window.conversant.launch("publink", "start", i);
      }, t.src = "https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher-stub.min.js", document.body.appendChild(t);
    }
    window.cnvr_launcher_options = {
      lid: e.params.launcher_id
    }, "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.getRandomNumberBelow100 = function () {
    return Math.floor(100 * Math.random());
  }, t.getUpdatedKGPVForVideo = function (e, t) {
    if (t == a.FORMAT_VALUES.VIDEO) {
      var i = ["", "0x0"],
        n = e.split("@");
      if (n.length > 1) {
        if (2 == n.length) {
          if (n[1].indexOf(":") > -1) {
            var r = n[1].split(":");
            i[1] = i[1] + ":" + r[1];
          }
          i[0] = n[0];
        }
        e = i.join("@");
      }
    }
    return e;
  }, t.applyDataTypeChangesIfApplicable = function (e) {
    var t;
    if (e.name in a.SPECIAL_CASE_ID_PARTNERS) for (partnerName in a.SPECIAL_CASE_ID_PARTNERS) if (partnerName === e.name) for (key in a.SPECIAL_CASE_ID_PARTNERS[partnerName]) {
      var i = e[key];
      switch (a.SPECIAL_CASE_ID_PARTNERS[partnerName][key]) {
        case "number":
          i && "number" != typeof i && (t = parseInt(i), isNaN(t) ? m.logError(partnerName + ": Invalid parameter value '" + i + "' for parameter " + key) : e[key] = t);
          break;
        case "array":
          if (i) if ("string" == typeof i) {
            var n = i.split(",").map(function (e) {
              return e.trim();
            });
            n.length > 0 && (e[key] = n);
          } else "number" == typeof i && (e[key] = [i]);
          break;
        default:
          return;
      }
    }
  }, t.applyCustomParamValuesfApplicable = function (e) {
    if (e.name in a.ID_PARTNERS_CUSTOM_VALUES) for (var t = a.ID_PARTNERS_CUSTOM_VALUES[e.name], i = 0; i < t.length; i++) e[t[i].key] = t[i].value;
  };
}, function (e, t, i) {
  function n() {
    var e = o.COMMON.PARENT_ADAPTER_PREBID;
    if (!a.isOwnProperty(r.adapters, e)) {
      var t = {};
      t[o.CONFIG.REV_SHARE] = "0.0", t[o.CONFIG.THROTTLE] = "100", t[o.CONFIG.KEY_GENERATION_PATTERN] = "_DIV_", t[o.CONFIG.KEY_LOOKUP_MAP] = {}, r.adapters[e] = t;
    }
  }
  var r = i(3),
    o = i(4),
    a = i(1),
    s = null;
  s = this, s[o.COMMON.OWVERSION] = r[o.CONFIG.COMMON][o.COMMON.OWVERSION], s[o.COMMON.PBVERSION] = r[o.CONFIG.COMMON][o.COMMON.PBVERSION], t.getPublisherId = function () {
    return a.trim(r.pwt.pubid) || "0";
  }, t.getMataDataPattern = function () {
    return a.isString(r[o.CONFIG.COMMON][o.CONFIG.META_DATA_PATTERN]) ? r[o.CONFIG.COMMON][o.CONFIG.META_DATA_PATTERN] : null;
  }, t.getSendAllBidsStatus = function () {
    return window.parseInt(r[o.CONFIG.COMMON][o.CONFIG.SEND_ALL_BIDS]) || 0;
  }, t.getTimeout = function () {
    return window.parseInt(r.pwt.t) || 1e3;
  }, t.getDisableAjaxTimeout = function () {
    var e = r.pwt;
    return a.isOwnProperty(e, o.CONFIG.DISABLE_AJAX_TIMEOUT) ? 1 == r.pwt.disableAjaxTimeout : !0;
  }, t.getAdapterRevShare = function (e) {
    var t = r.adapters;
    return a.isOwnProperty(t[e], o.CONFIG.REV_SHARE) ? 1 - window.parseFloat(t[e][o.CONFIG.REV_SHARE]) / 100 : 1;
  }, t.getAdapterThrottle = function (e) {
    var t = r.adapters;
    return a.isOwnProperty(t[e], o.CONFIG.THROTTLE) ? 100 - window.parseFloat(t[e][o.CONFIG.THROTTLE]) : 0;
  }, t.isServerSideAdapter = function (e) {
    var t = r.adapters;
    return t[e] && a.isOwnProperty(t[e], o.CONFIG.SERVER_SIDE_ENABLED) ? 1 === window.parseInt(t[e][o.CONFIG.SERVER_SIDE_ENABLED]) : !1;
  }, t.getAdapterMaskBidsStatus = function (e) {
    var t = r.adapters,
      i = {
        audienceNetwork: 1
      };
    return a.isOwnProperty(i, e) ? i[e] : a.isOwnProperty(t[e], o.CONFIG.MASK_BIDS) ? window.parseInt(t[e][o.CONFIG.MASK_BIDS]) || 0 : 0;
  }, t.getBidPassThroughStatus = function (e) {
    var t = r.adapters;
    return a.isOwnProperty(t[e], o.CONFIG.BID_PASS_THROUGH) ? window.parseInt(t[e][o.CONFIG.BID_PASS_THROUGH]) : 0;
  }, t.getProfileID = function () {
    return a.trim(r.pwt[o.CONFIG.PROFILE_ID]) || "0";
  }, t.getProfileDisplayVersionID = function () {
    return a.trim(r.pwt[o.CONFIG.PROFILE_VERSION_ID]) || "0";
  }, t.getAnalyticsPixelURL = function () {
    return r.pwt[o.CONFIG.LOGGER_URL] || !1;
  }, t.getMonetizationPixelURL = function () {
    return r.pwt[o.CONFIG.TRACKER_URL] || !1;
  }, t.forEachAdapter = function (e) {
    a.forEachOnObject(r.adapters, e);
  }, t.getGdpr = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_CONSENT] || o.CONFIG.DEFAULT_GDPR_CONSENT;
    return "1" === e;
  }, t.getCmpApi = function () {
    return r[o.CONFIG.COMMON][o.CONFIG.GDPR_CMPAPI] || o.CONFIG.DEFAULT_GDPR_CMPAPI;
  }, t.getGdprTimeout = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_TIMEOUT];
    return e ? window.parseInt(e) : o.CONFIG.DEFAULT_GDPR_TIMEOUT;
  }, t.getAwc = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.GDPR_AWC] || o.CONFIG.DEFAULT_GDPR_AWC;
    return "1" === e;
  }, t.addPrebidAdapter = n, t.initConfig = function () {
    s.updateABTestConfig(), s.addPrebidAdapter();
    var e = {};
    a.forEachOnObject(o.CONFIG, function (t, i) {
      e[i] = "";
    }), a.forEachOnObject(r.adapters, function (t, i) {
      var n = {};
      a.forEachOnObject(i, function (t, i) {
        a.isOwnProperty(e, t) || (n[t] = i);
      }), a.forEachOnObject(i[o.CONFIG.KEY_LOOKUP_MAP], function (e, t) {
        a.forEachOnObject(n, function (e, i) {
          t[e] = i;
        });
      }), "pubmatic" != t && "pubmatic2" != t && a.forEachOnObject(i[o.CONFIG.REGEX_KEY_LOOKUP_MAP], function (e, t) {
        a.forEachOnObject(n, function (e, i) {
          a.isOwnProperty(t, "rx_config") && (t.rx_config[e] = i);
        });
      });
    });
  }, t.getNativeConfiguration = function () {
    return r[o.COMMON.NATIVE_MEDIA_TYPE_CONFIG];
  }, t.getAdServerCurrency = function () {
    return r[o.CONFIG.COMMON][o.COMMON.AD_SERVER_CURRENCY];
  }, t.isSingleImpressionSettingEnabled = function () {
    return parseInt(r[o.CONFIG.COMMON][o.COMMON.SINGLE_IMPRESSION] || o.CONFIG.DEFAULT_SINGLE_IMPRESSION);
  }, t.isUserIdModuleEnabled = function () {
    return parseInt(r[o.CONFIG.COMMON][o.COMMON.ENABLE_USER_ID] || o.CONFIG.DEFAULT_USER_ID_MODULE);
  }, t.getIdentityPartners = function () {
    return r[o.COMMON.IDENTITY_PARTNERS];
  }, t.isIdentityOnly = function () {
    return parseInt(r[o.CONFIG.COMMON][o.COMMON.IDENTITY_ONLY] || o.CONFIG.DEFAULT_IDENTITY_ONLY);
  }, t.getIdentityConsumers = function () {
    return (r[o.CONFIG.COMMON][o.COMMON.IDENTITY_CONSUMERS] || "").toLowerCase();
  }, t.getSlotConfiguration = function () {
    return r[o.COMMON.SLOT_CONFIG];
  }, t.getAdServer = function () {
    return r[o.COMMON.ADSERVER];
  }, t.getCCPA = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.CCPA_CONSENT] || o.CONFIG.DEFAULT_CCPA_CONSENT;
    return "1" === e;
  }, t.getCCPACmpApi = function () {
    return r[o.CONFIG.COMMON][o.CONFIG.CCPA_CMPAPI] || o.CONFIG.DEFAULT_CCPA_CMPAPI;
  }, t.getCCPATimeout = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.CCPA_TIMEOUT];
    return e ? window.parseInt(e) : o.CONFIG.DEFAULT_CCPA_TIMEOUT;
  }, t.getSchainObject = function () {
    return r[o.CONFIG.COMMON][o.COMMON.SCHAINOBJECT] || {};
  }, t.isSchainEnabled = function () {
    return window.parseInt(r[o.CONFIG.COMMON][o.COMMON.SCHAIN]) || 0;
  }, t.isFloorPriceModuleEnabled = function () {
    return 1 === window.parseInt(r[o.CONFIG.COMMON][o.CONFIG.FLOOR_PRICE_MODULE_ENABLED]);
  }, t.getFloorJsonUrl = function () {
    return r[o.CONFIG.COMMON][o.CONFIG.FLOOR_JSON_URL];
  }, t.getFloorAuctionDelay = function () {
    var e = r[o.CONFIG.COMMON][o.CONFIG.FLOOR_AUCTION_DELAY];
    return e ? window.parseInt(e) : o.CONFIG.DEFAULT_FLOOR_AUCTION_DELAY;
  }, t.getFloorType = function () {
    return void 0 != r[o.CONFIG.COMMON][o.CONFIG.FLOOR_ENFORCE_JS] ? 1 === window.parseInt(r[o.CONFIG.COMMON][o.CONFIG.FLOOR_ENFORCE_JS]) : o.CONFIG.DEFAULT_FLOOR_ENFORCE_JS;
  }, t.isPrebidPubMaticAnalyticsEnabled = function () {
    return 1 === parseInt(r[o.CONFIG.COMMON][o.CONFIG.ENABLE_PB_PM_ANALYTICS]);
  }, t.isUsePrebidKeysEnabled = function () {
    return 1 === parseInt(r[o.CONFIG.COMMON][o.CONFIG.USE_PREBID_KEYS]);
  }, t.PBJS_NAMESPACE = r[o.CONFIG.COMMON][o.COMMON.PBJS_NAMESPACE] || "pbjs", t.getPriceGranularity = function () {
    return r[o.CONFIG.COMMON][o.COMMON.PRICE_GRANULARITY] || null;
  }, t.getGranularityMultiplier = function () {
    return parseFloat(r[o.CONFIG.COMMON][o.COMMON.GRANULARITY_MULTIPLIER]) || 1;
  }, t.isAbTestEnabled = function () {
    return 1 === parseInt(r[o.CONFIG.COMMON][o.CONFIG.AB_TEST_ENABLED]);
  }, t.getTestPWTConfig = function () {
    return r[o.COMMON.TEST_PWT] || {};
  }, t.getTestGroupDetails = function () {
    return r[o.COMMON.TEST_GROUP_DETAILS] || {};
  }, t.getTestPartnerConfig = function () {
    return r[o.COMMON.TEST_PARTNER] || {};
  }, t.getTestIdentityPartners = function () {
    return r[o.COMMON.TEST_IDENTITY_PARTNER] || {};
  }, t.updateABTestConfig = function () {
    if (s.isAbTestEnabled()) {
      var e = a.getRandomNumberBelow100(),
        t = s.getTestGroupDetails();
      t && t.testGroupSize && e < t.testGroupSize && (s.updatePWTConfig(), r.adapters = s.updatePartnerConfig(s.getTestPartnerConfig(), r.adapters), s.getTestIdentityPartners() && s.getIdentityPartners() && (Object.keys(s.getTestIdentityPartners()).length > 0 && 0 == Object.keys(s.getIdentityPartners()).length ? (a.log(o.MESSAGES.M31, JSON.stringify(s.getTestIdentityPartners())), r.identityPartners = s.getTestIdentityPartners()) : 0 == Object.keys(s.getTestIdentityPartners()).length && Object.keys(s.getIdentityPartners()).length > 0 ? (a.log(o.MESSAGES.M31, JSON.stringify({})), r.identityPartners = {}) : r.identityPartners = s.updatePartnerConfig(s.getTestIdentityPartners(), s.getIdentityPartners())), window.PWT.testGroupId = 1);
    }
  }, t.updatePWTConfig = function () {
    var e = s.getTestPWTConfig();
    if (e && Object.keys(e).length > 0) {
      a.log(o.MESSAGES.M30, JSON.stringify(e));
      for (var t in e) r[o.CONFIG.COMMON][t] && (r[o.CONFIG.COMMON][t] = e[t]);
    }
  }, t.updatePartnerConfig = function (e, t) {
    if (e && t && Object.keys(e).length > 0 && Object.keys(t).length > 0) {
      a.log(o.MESSAGES.M31, JSON.stringify(e));
      for (var i in e) a.isOwnProperty(e, i) && a.isObject(e[i]) && (0 == Object.keys(e[i]).length && t[i] && Object.keys(t[i]).length > 0 ? e[i] = t[i] : Object.keys(e[i]).length > 0 && t[i] && Object.keys(t[i]).length > 0 && (e[i] = s.getMergedConfig(e[i], t[i])));
      return window.PWT.testGroupId = 1, e;
    }
    return t;
  }, t.getTestGroupDetails = function () {
    return r[o.COMMON.TEST_GROUP_DETAILS] || {};
  }, t.getMergedConfig = function (e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = a.isObject(t[i]) || a.isArray(t[i]) ? JSON.parse(JSON.stringify(t[i])) : t[i]);
    return e;
  }, t.forEachBidderAlias = function (e) {
    a.forEachOnObject(r.alias, e);
  }, t.getAdapterNameForAlias = function (e) {
    return r.alias && r.alias[e] ? r.alias[e] : e;
  }, t.isSSOEnabled = function () {
    return 1 === parseInt(r[o.CONFIG.COMMON][o.CONFIG.SSO_ENABLED]);
  }, t.getServerEnabledAdaptars = function () {
    var e = Object.keys(r.adapters).filter(function (e) {
      return "1" == r.adapters[e].serverSideEnabled ? e : void 0;
    });
    return e;
  }, t.getTimeoutForPBSRequest = function () {
    var e = parseInt(r.pwt.ssTimeout),
      t = o.TIMEOUT_CONFIG.MaxTimeout,
      i = o.TIMEOUT_CONFIG.MinTimeout;
    return e >= i && t >= e ? e : e >= i ? t : i;
  }, t.getPubMaticAndAlias = function (e) {
    var t = e.filter(function (e) {
      return r.alias && r.alias[e] && r.alias[e].includes("pubmatic") || e.includes("pubmatic") ? e : void 0;
    });
    return t;
  }, t.usePBSAdapter = function () {
    return "1" == r.pwt.usePBSAdapter ? !0 : !1;
  }, t.createMacros = function () {
    return {
      "[PLATFORM]": a.getDevicePlatform().toString(),
      "[PROFILE_ID]": s.getProfileID().toString(),
      "[PROFILE_VERSION]": s.getProfileDisplayVersionID().toString()
    };
  };
}, function (e, t) {
  t.pwt = {
    pid: "9265",
    gcv: "199",
    pdvid: "23",
    pubid: "158698",
    dataURL: "t.pubmatic.com/wl?",
    winURL: "t.pubmatic.com/wt?",
    owv: "v26.0.0",
    pbv: "v6.18.0",
    usePBSAdapter: "0",
    reduceCodeSize: "1",
    metaDataPattern: 0,
    sendAllBids: "0",
    adserver: "DFP",
    gdpr: "1",
    cmp: "iab",
    gdprTimeout: "10000",
    awc: "1",
    platform: "display",
    refreshInterval: 0,
    priceGranularity: 0,
    adServerCurrency: "GBP",
    singleImpression: "1",
    identityEnabled: "1",
    identityConsumers: 0,
    ccpa: "1",
    ccpaCmpApi: "iab",
    ccpaTimeout: "10000",
    sChain: "1",
    sChainObj: {
      config: {
        ver: "1.0",
        nodes: [{
          asi: "vendonexus.com",
          hp: 1,
          sid: "pub-21627008189"
        }],
        complete: 1
      },
      validation: "strict"
    },
    auTimeout: "2500",
    t: "2500",
    ssTimeout: 0,
    prebidObjName: 0,
    pubAnalyticsAdapter: "1",
    usePBJSKeys: "0",
    abTestEnabled: "0",
    testGroupSize: 0,
    testType: 0,
    granularityMultiplier: 0,
    floorPriceModuleEnabled: "0",
    floorSource: 0,
    floorAuctionDelay: 0,
    jsonUrl: 0,
    ssoEnabled: "1",
    autoRefreshAdslots: "0",
    videoAdDuration: 0,
    videoAdDurationMatching: 0,
    adPodConfiguration: 0,
    customPriceGranularityConfig: 0,
    marketplaceBidders: 0,
    owRedirectURL: 0,
    topicsFPDModule: "0",
    enableVastUnwrapper: 0,
    floorType: 0,
    pubId: 0,
    zone: 0,
    gdprActionTimeout: 0,
    pbGlobalVarNamespace: "owpbjs",
    owGlobalVarNamespace: "PWT",
    globalNamespaceType: "Default"
  }, t.adapters = {
    improvedigital: {
      publisherId: "1898",
      kgp: "_AU_@_W_x_H_",
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      serverSideEnabled: "0",
      video: 0,
      "in-app": 0,
      amp: 0,
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          placementId: "22935544"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          placementId: "22935548"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          placementId: "22935555"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          placementId: "22935541"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          placementId: "22935619"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@320x50": {
          placementId: "22935554"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@320x50": {
          placementId: "22935556"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          placementId: "22935550"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          placementId: "22935557"
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          placementId: "22935542"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@728x90": {
          placementId: "22935540"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@320x50": {
          placementId: "22935558"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          placementId: "22935557"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@320x50": {
          placementId: "22935550"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@320x50": {
          placementId: "22935557"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          placementId: "22935554"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          placementId: "22935559"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          placementId: "22935553"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          placementId: "22935547"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@320x50": {
          placementId: "22935552"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          placementId: "22935545"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@320x50": {
          placementId: "22935555"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          placementId: "22935542"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@320x50": {
          placementId: "22935549"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          placementId: "22935556"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@320x50": {
          placementId: "22935551"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          placementId: "22935543"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          placementId: "22935548"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          placementId: "22935552"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@320x50": {
          placementId: "22935559"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          placementId: "22935551"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          placementId: "22935558"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x250": {
          placementId: "22935544"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@320x50": {
          placementId: "22935553"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          placementId: "22935546"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          placementId: "22935549"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@320x50": {
          placementId: "22935557"
        }
      }
    },
    nativo: {
      kgp: "_AU_@_W_x_H_",
      rev_share: "0.0",
      throttle: "100",
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          placementId: 1213648
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          placementId: 1213662
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          placementId: 1213645
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          placementId: 1213644
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          placementId: 1213657
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          placementId: 1213665
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          placementId: 1213664
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          placementId: 1213653
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          placementId: 1213661
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          placementId: 1213655
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          placementId: 1213660
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          placementId: 1213651
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          placementId: 1213649
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          placementId: 1213646
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          placementId: 1213663
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          placementId: 1213647
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          placementId: 1213652
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          placementId: 1213659
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          placementId: 1213658
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          placementId: 1213654
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          placementId: 1213650
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          placementId: 1213656
        }
      }
    },
    sovrn: {
      kgp: "_AU_@_W_x_H_",
      throttle: "100",
      bidfloor: 0,
      timeout: 0,
      rev_share: "0.0",
      serverSideEnabled: "0",
      amp: 0,
      "in-app": 0,
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          tagid: "1111511"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          tagid: "1111513"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          tagid: "1111509"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          tagid: "1111513"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@728x90": {
          tagid: "1111513"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          tagid: "1111513"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          tagid: "1111513"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@320x50": {
          tagid: "1111512"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          tagid: "1111510"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@320x50": {
          tagid: "1111512"
        }
      }
    },
    ogury: {
      kgp: "_AU_@_W_x_H_",
      rev_share: "0.0",
      throttle: "100",
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          assetKey: "OGY-E2DA14A7D5D1",
          adUnitId: "9d868d89-d775-48f1-8b83-530002398baa"
        }
      }
    },
    ozone: {
      publisherId: "OZONEPNK0001",
      kgp: "_AU_@_W_x_H_",
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          placementId: "3500010121",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          placementId: "3500010125",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          placementId: "3500010135",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          placementId: "3500010118",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          placementId: "3500010117",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@320x50": {
          placementId: "3500010134",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@320x50": {
          placementId: "3500010136",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          placementId: "3500010130",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          placementId: "3500010125",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          placementId: "3500010118",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@728x90": {
          placementId: "3500010117",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@320x50": {
          placementId: "3500010127",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          placementId: "3500010126",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@320x50": {
          placementId: "3500010130",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@320x50": {
          placementId: "3500010126",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          placementId: "3500010134",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          placementId: "3500010128",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          placementId: "3500010133",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          placementId: "3500010124",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@320x50": {
          placementId: "3500010132",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          placementId: "3500010122",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@320x50": {
          placementId: "3500010135",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          placementId: "3500010119",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@320x50": {
          placementId: "3500010129",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          placementId: "3500010136",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@320x50": {
          placementId: "3500010131",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          placementId: "3500010120",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          placementId: "3500010125",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          placementId: "3500010132",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@320x50": {
          placementId: "3500010128",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          placementId: "3500010131",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          placementId: "3500010127",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x250": {
          placementId: "3500010121",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@320x50": {
          placementId: "3500010133",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          placementId: "3500010123",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          placementId: "3500010129",
          siteId: "1500000020"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@320x50": {
          placementId: "3500010125",
          siteId: "1500000020"
        }
      }
    },
    rubicon: {
      accountId: "23252",
      kgp: "_AU_@_W_x_H_",
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      pt: 0,
      serverSideEnabled: "0",
      amp: 0,
      video: 0,
      "in-app": 0,
      display: 0,
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          zoneId: "2757768-10",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          zoneId: "2757768-2",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          zoneId: "2757768-57",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          zoneId: "2757768-2",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@728x90": {
          zoneId: "2757768-2",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PN_Audio@1x1": {
          zoneId: "2882398",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          zoneId: "2757768-2",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          zoneId: "2757768-2",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          zoneId: "2757768-15",
          siteId: "467832"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@320x50": {
          zoneId: "2757768-43",
          siteId: "467832"
        }
      }
    },
    pubmatic: {
      publisherId: "158698",
      kgp: "_AU_@_W_x_H_:_AUI_",
      sk: "true",
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      pt: 0,
      serverSideEnabled: "0",
      amp: 0,
      video: 0,
      "in-app": 0,
      display: 0
    },
    resetdigital: {
      pubId: "208",
      kgp: "_AU_@_W_x_H_",
      display: 0,
      rev_share: "0.0",
      throttle: "100",
      klm: {
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x600": {
          zoneId: "300x600dtsidebar1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@320x50": {
          zoneId: "320x50mw1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@300x250": {
          zoneId: "300x250mw8"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_2@728x90": {
          zoneId: "728x90dtbillboard2"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@970x250": {
          zoneId: "970x250dtbillboard1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@320x50": {
          zoneId: "320x50mw7"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@320x50": {
          zoneId: "320x50mw9"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@300x250": {
          zoneId: "300x250mw3"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@300x250": {
          zoneId: "300x250mwpagicle"
        },
        "/21627008189/PinkNews_Site/Pagicle_Desktop_Content@728x90": {
          zoneId: "728x90dtpagicle"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_1@728x90": {
          zoneId: "728x90dtbillboard1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@320x50": {
          zoneId: "320x50mw11"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@300x250": {
          zoneId: "300x250mw10"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_3@320x50": {
          zoneId: "320x50mw3"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_10@320x50": {
          zoneId: "320x50mw10"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_7@300x250": {
          zoneId: "300x250mw7"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@300x250": {
          zoneId: "300x250mw12"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@300x250": {
          zoneId: "300x250mw6"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_4@300x250": {
          zoneId: "300x250dtsidebar4"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@320x50": {
          zoneId: "320x50mw5"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_2@300x250": {
          zoneId: "300x250dtsidebar2"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_8@320x50": {
          zoneId: "320x50mw8"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_3@728x90": {
          zoneId: "728x90dtbillboard3"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@320x50": {
          zoneId: "320x50mw2"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_9@300x250": {
          zoneId: "300x250mw9"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@320x50": {
          zoneId: "320x50mw4"
        },
        "/21627008189/PinkNews_Site/Desktop_Billboard_4@728x90": {
          zoneId: "728x90dtbillboard4"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_1@300x250": {
          zoneId: "300x250mw1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_5@300x250": {
          zoneId: "300x250mw5"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_12@320x50": {
          zoneId: "320x50mw12"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_4@300x250": {
          zoneId: "300x250mw4"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_11@300x250": {
          zoneId: "300x250mw11"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_1@300x250": {
          zoneId: "300x250dtsidebar1"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_6@320x50": {
          zoneId: "320x50mw6"
        },
        "/21627008189/PinkNews_Site/Desktop_Sidebar_3@300x250": {
          zoneId: "300x250dtsidebar3"
        },
        "/21627008189/PinkNews_Site/Mobile_Web_2@300x250": {
          zoneId: "300x250mw2"
        },
        "/21627008189/PinkNews_Site/Pagicle_Mobile_Web@320x50": {
          zoneId: "320x50mwpagicle"
        }
      }
    }
  }, t.identityPartners = {
    sharedId: {
      name: "sharedId",
      "params.syncTime": 0,
      "storage.type": "cookie",
      "storage.name": "_sharedID",
      "storage.expires": "365",
      "params.pixelUrl": 0,
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      display: 0
    },
    criteo: {
      name: "criteo",
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      display: 0
    },
    quantcastId: {
      name: "quantcastId",
      "params.clientId": 0,
      rev_share: "0.0",
      timeout: 0,
      throttle: "100",
      display: 0
    }
  }, t.testConfigDetails = {}, t.test_pwt = {};
}, function (e, t) {
  t.COMMON = {
    BID_PRECISION: 2,
    DEAL_KEY_FIRST_PART: "pwtdeal_",
    DEAL_KEY_VALUE_SEPARATOR: "_-_",
    PREBID_PREFIX: "PB_",
    CONFIG: "config",
    DIV_ID: "divID",
    PARAMS: "params",
    SIZES: "sizes",
    HEIGHT: "height",
    WIDTH: "width",
    SLOTS: "slots",
    KEY_GENERATION_PATTERN_VALUE: "kgpv",
    KEY_VALUE_PAIRS: "kvp",
    IMPRESSION_ID: "iid",
    PARENT_ADAPTER_PREBID: "prebid",
    ANALYTICS_CURRENCY: "USD",
    NATIVE_MEDIA_TYPE_CONFIG: "nativeConfig",
    NATIVE_ONLY: "nativeOnly",
    OW_CLICK_NATIVE: "openwrap-native-click",
    BID_ID: "owbidid",
    AD_SERVER_CURRENCY: "adServerCurrency",
    SINGLE_IMPRESSION: "singleImpression",
    PREBID_NAMESPACE: "owpbjs",
    ENABLE_USER_ID: "identityEnabled",
    IDENTITY_PARTNERS: "identityPartners",
    IDENTITY_CONSUMERS: "identityConsumers",
    IDENTITY_ONLY: "identityOnly",
    PREBID: "prebid",
    PROTOCOL: "https://",
    SLOT_CONFIG: "slotConfig",
    DEFAULT: "default",
    ADSERVER: "adserver",
    OWVERSION: "owv",
    PBVERSION: "pbv",
    SCHAINOBJECT: "sChainObj",
    SCHAIN: "sChain",
    PBJS_NAMESPACE: "prebidObjName",
    TEST_GROUP_DETAILS: "testConfigDetails",
    TEST_PWT: "test_pwt",
    PRICE_GRANULARITY: "priceGranularity",
    GRANULARITY_MULTIPLIER: "granularityMultiplier",
    TEST_PARTNER: "test_adapters",
    REDUCE_CODE_SIZE: "reduceCodeSize",
    TEST_IDENTITY_PARTNER: "test_identityPartners"
  }, t.CONFIG = {
    GLOBAL: "global",
    ADAPTERS: "adapters",
    COMMON: "pwt",
    TIMEOUT: "t",
    KEY_GENERATION_PATTERN: "kgp",
    REGEX_KEY_GENERATION_PATTERN: "kgp_rx",
    REGEX_KEY_LOOKUP_MAP: "klm_rx",
    KEY_LOOKUP_MAP: "klm",
    SERVER_SIDE_KEY: "sk",
    PUBLISHER_ID: "pubid",
    PROFILE_ID: "pid",
    PROFILE_VERSION_ID: "pdvid",
    LOGGER_URL: "dataURL",
    TRACKER_URL: "winURL",
    REV_SHARE: "rev_share",
    THROTTLE: "throttle",
    BID_PASS_THROUGH: "pt",
    GLOBAL_KEY_VALUE: "gkv",
    MASK_BIDS: "maksBids",
    META_DATA_PATTERN: "metaDataPattern",
    SEND_ALL_BIDS: "sendAllBids",
    SERVER_SIDE_ENABLED: "serverSideEnabled",
    GDPR_CONSENT: "gdpr",
    CONSENT_STRING: "cns",
    GDPR_CMPAPI: "cmpApi",
    GDPR_TIMEOUT: "gdprTimeout",
    GDPR_AWC: "awc",
    DEFAULT_GDPR_CMPAPI: "iab",
    DEFAULT_GDPR_TIMEOUT: 1e4,
    DEFAULT_GDPR_AWC: "0",
    DEFAULT_SINGLE_IMPRESSION: "0",
    DEFAULT_USER_ID_MODULE: "0",
    DEFAULT_IDENTITY_ONLY: "0",
    DEFAULT_GDPR_CONSENT: "0",
    DISABLE_AJAX_TIMEOUT: "disableAjaxTimeout",
    CCPA_CONSENT: "ccpa",
    CCPA_CMPAPI: "ccpaCmpApi",
    CCPA_TIMEOUT: "ccpaTimeout",
    DEFAULT_CCPA_CMPAPI: "iab",
    DEFAULT_CCPA_TIMEOUT: 1e4,
    CACHE_PATH: "/cache",
    CACHE_URL: "https://ow.pubmatic.com",
    VIDEO_PARAM: "video",
    ENABLE_PB_PM_ANALYTICS: "pubAnalyticsAdapter",
    FLOOR_PRICE_MODULE_ENABLED: "floorPriceModuleEnabled",
    FLOOR_AUCTION_DELAY: "floorAuctionDelay",
    DEFAULT_FLOOR_AUCTION_DELAY: 100,
    FLOOR_JSON_URL: "jsonUrl",
    FLOOR_ENFORCE_JS: "floorType",
    DEFAULT_FLOOR_ENFORCE_JS: !0,
    USE_PREBID_KEYS: "usePBJSKeys",
    AB_TEST_ENABLED: "abTestEnabled",
    TIMEOUT_ADJUSTMENT: 50,
    SSO_ENABLED: "ssoEnabled"
  }, t.METADATA_MACROS = {
    WIDTH: "_W_",
    HEIGHT: "_H_",
    PARTNER: "_P_",
    GROSS_ECPM: "_GE_",
    NET_ECPM: "_NE_",
    BID_COUNT: "_BC_",
    PARTNER_COUNT: "_PC_"
  }, t.MACROS = {
    WIDTH: "_W_",
    HEIGHT: "_H_",
    AD_UNIT_ID: "_AU_",
    AD_UNIT_INDEX: "_AUI_",
    INTEGER: "_I_",
    DIV: "_DIV_"
  }, t.SLOT_STATUS = {
    CREATED: 0,
    PARTNERS_CALLED: 1,
    TARGETING_ADDED: 2,
    DISPLAYED: 3
  }, t.WRAPPER_TARGETING_KEYS = {
    BID_ID: "pwtsid",
    BID_STATUS: "pwtbst",
    BID_ECPM: "pwtecp",
    BID_DEAL_ID: "pwtdid",
    BID_ADAPTER_ID: "pwtpid",
    BID_SIZE: "pwtsz",
    PUBLISHER_ID: "pwtpubid",
    PROFILE_ID: "pwtprofid",
    PROFILE_VERSION_ID: "pwtverid",
    META_DATA: "pwtm",
    PLATFORM_KEY: "pwtplt",
    USER_IDS: "pwtuid",
    CACHE_ID: "pwtcid",
    CACHE_URL: "pwtcurl",
    CACHE_PATH: "pwtcpath"
  }, t.IGNORE_PREBID_KEYS = {
    hb_bidder: 1,
    hb_adid: 1,
    hb_pb: 1,
    hb_size: 1,
    hb_deal: 1,
    hb_uuid: 1,
    hb_cache_host: 1,
    hb_cache_id: 1,
    hb_adomain: 1
  }, t.LOGGER_PIXEL_PARAMS = {
    TIMESTAMP: "tst",
    PAGE_URL: "purl",
    PAGE_DOMAIN: "orig",
    TIMEOUT: "to"
  }, t.MESSAGES = {
    M1: ": In fetchbids.",
    M2: ": Throttled.",
    M3: ": adapter must implement the fetchBids() function.",
    M4: "BidManager: entry ",
    M5: ": Callback.",
    M6: "bidAlreadExists : ",
    M7: ": Exiting from fetchBids.",
    M8: ". Config not found, ignored.",
    M10: "Bid is rejected as ecpm is NULL.",
    M11: "Bid is rejected as ecpm is NaN: ",
    M12: "Existing bid ecpm: ",
    M13: ", is lower than new bid ecpm ",
    M14: ", so we are replacing bid from partner ",
    M15: ", is greater than new bid ecpm ",
    M16: ", so we are not replacing bid from partner ",
    M17: "Post timeout bid, ignored.",
    M18: "Bid is selected for partner ",
    M19: ": Found winning adapterID: ",
    M20: "Bid is rejected as ecpm is empty string.",
    M21: ": error in respose handler.",
    M22: "Bid is rejected as ecpm is <= 0.",
    M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner ",
    M24: "Passsed argument is not a bidAdaptor",
    M25: "Bid details not found for bidID: ",
    M26: "Currency Module is Activated. Ad Server Currency is: ",
    M27: "Invalid regex pattern ",
    M28: "Unable to match regex pattern as kgpv length is not 3",
    M29: "Unable to parse Partner configuration",
    M30: "AB Test Enabled With Config",
    M31: "AB Test Enabled With Partner Config",
    IDENTITY: {
      M1: "Unable to get User Id from OpenIdentity",
      M2: "Setting UserIds to EB ",
      M3: "Unable to parse User ID configuration",
      M4: "User Id Condiguration Sent to prebid ",
      M5: "Identity only enabled, no need to process. Calling Original function ",
      M6: " function is not available. Make sure userId module is included."
    }
  }, t.PLATFORM_VALUES = {
    DISPLAY: "display",
    NATIVE: "native",
    VIDEO: "video"
  }, t.FORMAT_VALUES = {
    BANNER: "banner",
    VIDEO: "video",
    NATIVE: "native",
    OTHER: "other"
  }, t.HOOKS = {
    PREBID_SET_CONFIG: "HookForPrebidSetConfig",
    PREBID_REQUEST_BIDS: "HookForPrebidRequestBids",
    BID_RECEIVED: "HookForBidReceived",
    POST_AUCTION_KEY_VALUES: "HookForPostAuctionKeyValues"
  }, t.SRA_ENABLED_BIDDERS = {
    rubicon: 1,
    improvedigital: 2
  }, t.EXCLUDE_IDENTITY_PARAMS = ["rev_share", "timeout", "throttle"], t.TOLOWERCASE_IDENTITY_PARAMS = ["storage.type"], t.JSON_VALUE_KEYS = ["params.clientIdentifier"], t.AD_SERVER = {
    DFP: "DFP",
    CUSTOM: "CUSTOM"
  }, t.SPECIAL_CASE_ID_PARTNERS = {
    intentIqId: {
      "params.partner": "number"
    },
    sharedId: {
      "params.syncTime": "number"
    },
    id5Id: {
      "params.partner": "number"
    },
    parrableId: {
      "params.timezoneFilter.allowedZones": "array"
    },
    imuid: {
      "params.cid": "number"
    }
  }, t.ID_PARTNERS_CUSTOM_VALUES = {
    id5Id: [{
      key: "params.provider",
      value: "pubmatic-identity-hub"
    }]
  }, t.EXCLUDE_PARTNER_LIST = ["pubProvidedId"], t.MEDIATYPE = {
    BANNER: 0,
    VIDEO: 1,
    NATIVE: 2
  }, t.BID_STATUS = {
    BID_REJECTED: "bidRejected"
  }, t.PUBMATIC_ALIASES = ["pubmatic2"], t.PBSPARAMS = {
    adapter: "prebidServer",
    endpoint: "https://ow.pubmatic.com/pbs/openrtb2/auction",
    syncEndpoint: "https://ow.pubmatic.com/cookie_sync/?sec=1"
  }, t.TIMEOUT_CONFIG = {
    MaxTimeout: 500,
    MinTimeout: 200
  }, t.DEFAULT_ALIASES = {
    adg: "adgeneration",
    districtm: "appnexus",
    districtmDMX: "dmx",
    pubmatic2: "pubmatic"
  }, t.YAHOOSSP = "yahoossp";
}, function (e, t, i) {
  function n(e, t) {
    this.adapterID = e, this.kgpv = t, this.bidID = a.getUniqueIdentifierStr(), this.grossEcpm = 0, this.netEcpm = 0, this.defaultBid = 0, this.adHtml = "", this.adUrl = "", this.height = 0, this.width = 0, this.creativeID = "", this.keyValuePairs = {}, this.isPostTimeout = !1, this.receivedTime = 0, this.isServerSide = r.isServerSideAdapter(e) ? 1 : 0, this.dealID = "", this.dealChannel = "", this.isWinningBid = !1, this.status = 0, this.serverSideResponseTime = 0, this.mi = void 0, this.originalCpm = 0, this.originalCurrency = "", this.analyticsGrossCpm = 0, this.analyticsNetCpm = 0, this.native = void 0, this.adFormat = void 0, this.regexPattern = void 0, this.cacheUUID = void 0, this.sspID = "", this.vastUrl = void 0, this.vastCache = void 0, this.renderer = void 0, this.pbBid = void 0;
  }
  var r = i(2),
    o = i(4),
    a = i(1),
    s = function (e, t) {
      return window.parseFloat((e * r.getAdapterRevShare(t)).toFixed(o.COMMON.BID_PRECISION));
    };
  n.prototype.setServerSideResponseTime = function (e) {
    this.serverSideResponseTime = e;
  }, n.prototype.getServerSideResponseTime = function () {
    return this.serverSideResponseTime;
  }, n.prototype.getServerSideStatus = function () {
    return this.isServerSide;
  }, n.prototype.setServerSideStatus = function (e) {
    this.isServerSide = e;
  }, n.prototype.getAdapterID = function () {
    return this.adapterID;
  }, n.prototype.getBidID = function () {
    return this.bidID;
  }, n.prototype.setGrossEcpm = function (e, t, i, n) {
    if (null === e) return a.log(o.MESSAGES.M10), a.log(this), this;
    if (a.isString(e)) {
      if (e = e.replace(/\s/g, ""), 0 === e.length) return a.log(o.MESSAGES.M20), a.log(this), this;
      e = window.parseFloat(e);
    }
    return window.isNaN(e) ? (a.log(o.MESSAGES.M11 + e), a.log(this), this) : (r.getAdServerCurrency() && t && i && (a.isFunction(window[o.COMMON.PREBID_NAMESPACE].convertCurrency) || "function" == typeof window[o.COMMON.PREBID_NAMESPACE].convertCurrency) && (e = window[o.COMMON.PREBID_NAMESPACE].convertCurrency(e, t, i)), e = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this.grossEcpm = e, this.netEcpm = n == o.BID_STATUS.BID_REJECTED ? 0 : s(this.grossEcpm, this.getAdapterID()), this);
  }, n.prototype.getGrossEcpm = function (e) {
    return r.getAdServerCurrency() && this.analyticsGrossCpm && e ? this.analyticsGrossCpm : this.grossEcpm;
  }, n.prototype.getNetEcpm = function (e) {
    return r.getAdServerCurrency() && this.analyticsNetCpm && e ? this.analyticsNetCpm : this.netEcpm;
  }, n.prototype.setDefaultBidStatus = function (e) {
    return this.defaultBid = e, this;
  }, n.prototype.getDefaultBidStatus = function () {
    return this.defaultBid;
  }, n.prototype.setAdHtml = function (e) {
    return this.adHtml = e, this.setAdFormat(e), this;
  }, n.prototype.getAdHtml = function () {
    return this.adHtml;
  }, n.prototype.setAdUrl = function (e) {
    return this.adUrl = e, this;
  }, n.prototype.getAdUrl = function () {
    return this.adUrl;
  }, n.prototype.setHeight = function (e) {
    return this.height = e, this;
  }, n.prototype.getHeight = function () {
    return this.height;
  }, n.prototype.setWidth = function (e) {
    return this.width = e, this;
  }, n.prototype.getWidth = function () {
    return this.width;
  }, n.prototype.getKGPV = function (e, t) {
    return !e && this.regexPattern ? this.regexPattern : this.adFormat == o.FORMAT_VALUES.VIDEO || t == o.FORMAT_VALUES.VIDEO ? a.getUpdatedKGPVForVideo(this.kgpv, o.FORMAT_VALUES.VIDEO) : this.kgpv;
  }, n.prototype.setKeyValuePair = function (e, t) {
    return this.keyValuePairs[e.substr(0, 20)] = t, this;
  }, n.prototype.getKeyValuePairs = function () {
    return this.keyValuePairs;
  }, n.prototype.setPostTimeoutStatus = function () {
    return this.isPostTimeout = !0, this;
  }, n.prototype.getPostTimeoutStatus = function () {
    return this.isPostTimeout;
  }, n.prototype.setReceivedTime = function (e) {
    return this.receivedTime = e, this;
  }, n.prototype.getReceivedTime = function () {
    return this.receivedTime;
  }, n.prototype.setDealID = function (e) {
    return e && (this.dealID = e, this.dealChannel = this.dealChannel || "PMP", this.setKeyValuePair(o.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)), this;
  }, n.prototype.getDealID = function () {
    return this.dealID;
  }, n.prototype.setDealChannel = function (e) {
    return this.dealID && e && (this.dealChannel = e, this.setKeyValuePair(o.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + o.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)), this;
  }, n.prototype.getDealChannel = function () {
    return this.dealChannel;
  }, n.prototype.setWinningBidStatus = function () {
    return this.isWinningBid = !0, this;
  }, n.prototype.getWinningBidStatus = function () {
    return this.isWinningBid;
  }, n.prototype.setStatus = function (e) {
    return this.status = e, this;
  }, n.prototype.getStatus = function () {
    return this.status;
  }, n.prototype.setSendAllBidsKeys = function () {
    if (this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_ID + "_" + this.adapterID, this.bidID), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_STATUS + "_" + this.adapterID, this.getNetEcpm() > 0 ? 1 : 0), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_ECPM + "_" + this.adapterID, this.getNetEcpm().toFixed(o.COMMON.BID_PRECISION)), this.setKeyValuePair(o.WRAPPER_TARGETING_KEYS.BID_SIZE + "_" + this.adapterID, this.width + "x" + this.height), this.native) {
      var e = this.keyValuePairs,
        t = this;
      a.forEachOnObject(e, function (e, i) {
        e.indexOf("native") >= 0 && t.setKeyValuePair(e + "_" + t.adapterID, i);
      });
    }
  }, n.prototype.setMi = function (e) {
    return this.mi = e, this;
  }, n.prototype.getMi = function (e) {
    return a.isUndefined(this.mi) && (this.mi = window.matchedimpressions && window.matchedimpressions[e]), this.mi;
  }, n.prototype.setOriginalCpm = function (e) {
    return this.originalCpm = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this;
  }, n.prototype.getOriginalCpm = function () {
    return this.originalCpm;
  }, n.prototype.setOriginalCurrency = function (e) {
    return this.originalCurrency = e, this;
  }, n.prototype.getOriginalCurrency = function () {
    return this.originalCurrency;
  }, n.prototype.setAnalyticsCpm = function (e, t) {
    return this.analyticsGrossCpm = window.parseFloat(e.toFixed(o.COMMON.BID_PRECISION)), this.analyticsNetCpm = t == o.BID_STATUS.BID_REJECTED ? 0 : s(this.analyticsGrossCpm, this.getAdapterID()), this;
  }, n.prototype.getAnalyticsCpm = function () {
    return this.analyticsGrossCpm;
  }, n.prototype.getNative = function () {
    return this.native;
  }, n.prototype.setNative = function (e) {
    return this.native = e, this;
  }, n.prototype.getAdFormat = function () {
    return this.adFormat;
  }, n.prototype.setAdFormat = function (e, t) {
    return this.adFormat = t || a.getAdFormatFromBidAd(e), this;
  }, n.prototype.getRegexPattern = function () {
    return this.regexPattern;
  }, n.prototype.setRegexPattern = function (e) {
    return this.regexPattern = e, this;
  }, n.prototype.getcacheUUID = function () {
    return this.cacheUUID;
  }, n.prototype.setcacheUUID = function (e) {
    return this.cacheUUID = e, this.adFormat || (this.adFormat = o.FORMAT_VALUES.VIDEO), this;
  }, n.prototype.getsspID = function () {
    return this.sspID;
  }, n.prototype.setsspID = function (e) {
    return this.sspID = e, this;
  }, n.prototype.setRenderer = function (e) {
    return a.isEmptyObject(e) || (this.renderer = e), this;
  }, n.prototype.getRenderer = function () {
    return this.renderer;
  }, n.prototype.setVastCache = function (e) {
    return a.isString(e) && (this.vastCache = e), this;
  }, n.prototype.getVastCache = function () {
    return this.vastCache;
  }, n.prototype.setVastUrl = function (e) {
    return a.isString(e) && (this.vastUrl = e), this;
  }, n.prototype.getVastUrl = function () {
    return this.vastUrl;
  }, n.prototype.setVastXml = function (e) {
    return a.isString(e) && (this.vastXml = e), this;
  }, n.prototype.getVastXml = function () {
    return this.vastXml;
  }, n.prototype.setPbBid = function (e) {
    return this.pbbid = e, this;
  }, n.prototype.getPbBid = function () {
    return this.pbbid;
  }, n.prototype.updateBidId = function (e) {
    if (window.PWT.bidMap[e] && window.PWT.bidMap[e].adapters && Object.keys(window.PWT.bidMap[e].adapters).length > 0) {
      var t = window.PWT.bidMap[e].adapters[this.adapterID].bids[Object.keys(window.PWT.bidMap[e].adapters[this.adapterID].bids)[0]].bidID;
      t && this.adFormat == o.FORMAT_VALUES.VIDEO && (this.bidID = t);
    } else a.logWarning("Error in Updating BidId. It might be possible singleImpressionEnabled is false"), console.warn("Setup for video might not be correct. Try setting up Optimize MultiSize AdSlot to true.");
    return this;
  }, e.exports.Bid = n, t.createBid = function (e, t) {
    return new n(e, t);
  };
}, function (e, t, i) {
  function n(e) {
    S.isOwnProperty(window.PWT.bidMap, e) || (window.PWT.bidMap[e] = E.createBMEntry(e));
  }
  function r(e, t, i, n) {
    window.PWT.bidMap[e].setNewBid(t, i), window.PWT.bidIdMap[i.getBidID()] = {
      s: e,
      a: t
    }, 0 === i.getDefaultBidStatus() && "pubmaticServer" !== i.adapterID && S.vLogInfo(e, {
      type: "bid",
      bidder: t + (0 !== m.getBidPassThroughStatus(t) ? "(Passthrough)" : ""),
      bidDetails: i,
      latency: n,
      s2s: m.isServerSideAdapter(t),
      adServerCurrency: S.getCurrencyToDisplay()
    });
  }
  function o(e, t) {
    S.vLogInfo(e, {
      type: "hr"
    }), delete window.PWT.bidMap[e], b.createBidEntry(e), window.PWT.bidMap[e].setImpressionID(t);
  }
  function a(e, t, i) {
    var n = "",
      r = 0,
      o = 0,
      a = _.METADATA_MACROS,
      d = "g";
    S.forEachOnObject(t.adapters, function (t, i) {
      "" != i.getLastBidID() && ("pubmaticServer" !== t && o++, S.forEachOnObject(i.bids, function (t, i) {
        1 != i.getDefaultBidStatus() && 1 != i.getPostTimeoutStatus() && 0 != i.getGrossEcpm() && (r++, n += s(e, i));
      }));
    }), 0 == n.length && (n = e), n = n.replace(new RegExp(a.BID_COUNT, d), r), n = n.replace(new RegExp(a.PARTNER_COUNT, d), o), i[_.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(n);
  }
  function s(e, t) {
    var i = _.METADATA_MACROS,
      n = "g";
    return e.replace(new RegExp(i.PARTNER, n), t.getAdapterID()).replace(new RegExp(i.WIDTH, n), t.getWidth()).replace(new RegExp(i.HEIGHT, n), t.getHeight()).replace(new RegExp(i.GROSS_ECPM, n), t.getGrossEcpm()).replace(new RegExp(i.NET_ECPM, n), t.getNetEcpm());
  }
  function d(e) {
    var t = null,
      i = {};
    return S.forEachOnObject(e.adapters, function (e, n) {
      var r = b.auctionBidsCallBack(e, n, i, t);
      t = r.winningBid, i = r.keyValuePairs;
    }), null !== m.getMataDataPattern() && a(m.getMataDataPattern(), e, i), {
      wb: t,
      kvp: i
    };
  }
  function c(e) {
    for (var t in e) t.indexOf("native") >= 0 && 3 === t.split("_").length && delete e[t];
  }
  function l(e, t, i, n) {
    var r = this;
    return "" != t.getLastBidID() ? (S.forEachOnObject(t.bids, function (t, o) {
      if (o.getPostTimeoutStatus() === !0) return {
        winningBid: n,
        keyValuePairs: i
      };
      if (1 !== o.getDefaultBidStatus() && 1 == m.getSendAllBidsStatus() && o.setSendAllBidsKeys(), null !== n) if (n.getNetEcpm() < o.getNetEcpm()) r.updateNativeTargtingKeys(i);else {
        var a = o.getKeyValuePairs();
        r.updateNativeTargtingKeys(a), o.keyValuePairs = a;
      }
      return S.copyKeyValueObject(i, o.getKeyValuePairs()), 0 !== m.getBidPassThroughStatus(e) ? {
        winningBid: n,
        keyValuePairs: i
      } : (null == n ? n = o : n.getNetEcpm() < o.getNetEcpm() && (n = o), void 0);
    }), {
      winningBid: n,
      keyValuePairs: i
    }) : {
      winningBid: n,
      keyValuePairs: i
    };
  }
  function u(e) {
    var t = Object.keys(e.adapters).filter(function (t) {
      return 1 == Object.keys(e.adapters[t].bids).filter(function (i) {
        return e.adapters[t].bids[i].isWinningBid && "native" === e.adapters[t].bids[i].adFormat ? e.adapters[t].bids[i] : void 0;
      }).length ? t : void 0;
    });
    return t.length ? ["1x1"] : e.getSizes();
  }
  function p(e) {
    return window.PWT.adUnits[e] || e;
  }
  function g(e) {
    var t = e ? Object.keys(e).map(function (e) {
      return _.MEDIATYPE[e.toUpperCase()];
    }).filter(function (e) {
      return null != e;
    }) : [];
    return t || [];
  }
  function f(e) {
    if (e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0) {
      var t = e.meta.advertiserDomains[0];
      if (t) try {
        var i = new URL(t);
        return i.hostname.replace("www.", "");
      } catch (n) {
        return S.log("Adomain URL (Not a proper URL):" + t), t.split("/")[0].replace("www.", "");
      }
    }
  }
  function I(e, t, i) {
    var n = m.usePBSAdapter(),
      r = t.getCreationTime() || 0,
      o = n && window.pbsLatency ? 0 : void 0,
      a = t.getImpressionID(),
      s = b.getAdUnitInfo(e),
      d = {};
    const c = !0;
    if (t.getAnalyticEnabledStatus() && !t.getExpiredStatus()) {
      var l = {
        sn: e,
        sz: b.getAdUnitSizes(t),
        au: s.adUnitId || e,
        fskp: window.PWT.floorData ? window.PWT.floorData[a] ? window.PWT.floorData[a].floorRequestData ? 0 == window.PWT.floorData[a].floorRequestData.skipped ? 0 : 1 : void 0 : void 0 : void 0,
        mt: b.getAdUnitAdFormats(s.mediaTypes),
        ps: []
      };
      t.setExpired(), i[a] = i[a] || [], S.forEachOnObject(t.adapters, function (e, t) {
        1 != m.getBidPassThroughStatus(e) && S.forEachOnObject(t.bids, function (t, i) {
          n && (d = window.pbsLatency && window.pbsLatency[a], d && d.endTime && d.startTime && (o = d.endTime - d.startTime), ("pubmatic" === e || "pubmatic2" === e) && S.isOwnProperty(window.partnersWithoutErrorAndBids, a) && window.partnersWithoutErrorAndBids[a].includes(e) ? i.defaultBid = 0 : S.isOwnProperty(window.partnersWithoutErrorAndBids, a) && window.partnersWithoutErrorAndBids[a].includes(e) && m.getAdapterNameForAlias(e).includes("pubmatic") && (i.defaultBid = 0));
          var s = i.getReceivedTime();
          if ("pubmaticServer" === e) return S.isOwnProperty(window.PWT.owLatency, a) && S.isOwnProperty(window.PWT.owLatency[a], "startTime") && S.isOwnProperty(window.PWT.owLatency[a], "endTime") ? o = window.PWT.owLatency[a].endTime - window.PWT.owLatency[a].startTime : (o = 0, S.log("Logging pubmaticServer latency as 0 for impressionID: " + a)), S.log("PSL logging: time logged for id " + a + " is " + o), void 0;
          if ((1 != m.getAdapterMaskBidsStatus(e) || i.getWinningBidStatus() !== !1) && !(i.getServerSideStatus() && -1 === i.getDefaultBidStatus() && -1 === i.getServerSideResponseTime() || ("pubmatic" === e || "pubmatic2" === e) && (i.getDefaultBidStatus() || i.getPostTimeoutStatus() && 0 == i.getGrossEcpm(c)))) {
            var u = i.getPbBid();
            l.ps.push({
              pn: m.getAdapterNameForAlias(e),
              bc: e,
              bidid: u && u.prebidBidId ? u.prebidBidId : t,
              origbidid: t,
              db: i.getDefaultBidStatus(),
              kgpv: i.getKGPV(),
              kgpsv: i.getKGPV(!0),
              psz: i.getWidth() + "x" + i.getHeight(),
              eg: i.getGrossEcpm(c),
              en: i.getNetEcpm(c),
              di: i.getDealID(),
              dc: i.getDealChannel(),
              l1: i.getServerSideStatus() ? i.getServerSideResponseTime() : s - r,
              l2: 0,
              adv: u ? f(u) || void 0 : void 0,
              ss: i.getServerSideStatus(),
              t: i.getPostTimeoutStatus() === !1 ? 0 : 1,
              wb: i.getWinningBidStatus() === !0 ? 1 : 0,
              mi: i.getServerSideStatus() ? i.getMi(e) : void 0,
              af: i.getAdFormat(),
              ocpm: m.getAdServerCurrency() ? i.getOriginalCpm() : i.getGrossEcpm(),
              ocry: m.getAdServerCurrency() ? i.getOriginalCurrency() : _.COMMON.ANALYTICS_CURRENCY,
              piid: i.getsspID(),
              frv: i.getServerSideStatus() ? void 0 : u ? u.floorData ? u.floorData.floorRuleValue : void 0 : void 0
            });
          }
        });
      }), i[a].push(l), n && m.getServerEnabledAdaptars().length && void 0 == o && !window.pbsLatency && (o = 0), void 0 !== o && (i[a].psl = o);
    }
  }
  var m = i(2),
    _ = i(4),
    S = i(1),
    E = i(7),
    b = this;
  t.createBidEntry = n, t.setSizes = function (e, t) {
    b.createBidEntry(e), window.PWT.bidMap[e].setSizes(t);
  }, t.setCallInitTime = function (e, t) {
    b.createBidEntry(e), window.PWT.bidMap[e].setAdapterEntry(t);
  }, t.setAllPossibleBidsReceived = function (e) {
    window.PWT.bidMap[e].setAllPossibleBidsReceived();
  }, t.setBidFromBidder = function (e, t) {
    var i = t.getAdapterID(),
      n = (t.getBidID(), window.PWT.bidMap[e]);
    if (!S.isOwnProperty(window.PWT.bidMap, e)) return S.logWarning("BidManager is not expecting bid for " + e + ", from " + i), void 0;
    var r = n.getCreationTime() + m.getTimeout() < t.getReceivedTime() ? !0 : !1,
      o = t.getReceivedTime() - n.getCreationTime();
    b.createBidEntry(e), S.log("BdManagerSetBid: divID: " + e + ", bidderID: " + i + ", ecpm: " + t.getGrossEcpm() + ", size: " + t.getWidth() + "x" + t.getHeight() + ", postTimeout: " + r + ", defaultBid: " + t.getDefaultBidStatus()), r === !0 && t.setPostTimeoutStatus();
    var a = n.getLastBidIDForAdapter(i);
    if ("" != a) {
      var s = n.getBid(i, a),
        d = 1 === s.getDefaultBidStatus(),
        c = -1 === s.getDefaultBidStatus();
      d || !r || c ? (d && S.log(_.MESSAGES.M23 + i), d || s.getNetEcpm() < t.getNetEcpm() || c ? (S.log(_.MESSAGES.M12 + s.getNetEcpm() + _.MESSAGES.M13 + t.getNetEcpm() + _.MESSAGES.M14 + i), b.storeBidInBidMap(e, i, t, o)) : S.log(_.MESSAGES.M12 + s.getNetEcpm() + _.MESSAGES.M15 + t.getNetEcpm() + _.MESSAGES.M16 + i)) : S.log(_.MESSAGES.M17);
    } else S.log(_.MESSAGES.M18 + i), b.storeBidInBidMap(e, i, t, o);
    r && setTimeout(window[_.COMMON.PREBID_NAMESPACE].triggerUserSyncs, 10);
  }, t.storeBidInBidMap = r, t.resetBid = o, t.createMetaDataKey = a, t.replaceMetaDataMacros = s, t.auctionBids = d, t.updateNativeTargtingKeys = c, t.auctionBidsCallBack = l, t.getBid = function (e) {
    var t = null,
      i = null;
    if (S.isOwnProperty(window.PWT.bidMap, e)) {
      var n = b.auctionBids(window.PWT.bidMap[e]);
      t = n.wb, i = n.kvp, window.PWT.bidMap[e].setAnalyticEnabled(), t && t.getNetEcpm() > 0 ? (t.setStatus(1), t.setWinningBidStatus(), S.vLogInfo(e, {
        type: "win-bid",
        bidDetails: t,
        adServerCurrency: S.getCurrencyToDisplay()
      })) : S.vLogInfo(e, {
        type: "win-bid-fail"
      });
    }
    return {
      wb: t,
      kvp: i
    };
  }, t.getBidById = function (e) {
    if (!S.isOwnProperty(window.PWT.bidIdMap, e)) return S.log(_.MESSAGES.M25 + e), null;
    var t = window.PWT.bidIdMap[e].s,
      i = window.PWT.bidIdMap[e].a;
    if (S.isOwnProperty(window.PWT.bidMap, t)) {
      S.log("BidID: " + e + ", DivID: " + t + _.MESSAGES.M19 + i);
      var n = window.PWT.bidMap[t].getBid(i, e);
      return null == n ? null : {
        bid: n,
        slotid: t
      };
    }
    return S.log(_.MESSAGES.M25 + e), null;
  }, t.displayCreative = function (e, t) {
    var i = b.getBidById(t);
    if (i) {
      var n = i.bid,
        r = i.slotid;
      S.displayCreative(e, n), S.vLogInfo(r, {
        type: "disp",
        adapter: n.getAdapterID()
      }), b.executeMonetizationPixel(r, n);
    }
  }, t.executeAnalyticsPixel = function () {
    var e = {
        s: []
      },
      t = m.getPublisherId(),
      i = m.getAnalyticsPixelURL(),
      n = {};
    i && (i = _.COMMON.PROTOCOL + i + "pubid=" + t, e[_.CONFIG.PUBLISHER_ID] = m.getPublisherId(), e[_.LOGGER_PIXEL_PARAMS.TIMEOUT] = "" + m.getTimeout(), e[_.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(S.metaInfo.pageURL), e[_.LOGGER_PIXEL_PARAMS.PAGE_DOMAIN] = S.metaInfo.pageDomain, e[_.LOGGER_PIXEL_PARAMS.TIMESTAMP] = S.getCurrentTimestamp(), e[_.CONFIG.PROFILE_ID] = m.getProfileID(), e[_.CONFIG.PROFILE_VERSION_ID] = m.getProfileDisplayVersionID(), e.tgid = function () {
      var e = parseInt(PWT.testGroupId || 0);
      return 15 >= e && e >= 0 ? e : 0;
    }(), S.forEachOnObject(window.PWT.bidMap, function (e, t) {
      b.analyticalPixelCallback(e, t, n);
    }), S.forEachOnObject(n, function (t, n) {
      if (n.length > 0) {
        if (e.s = n, e[_.COMMON.IMPRESSION_ID] = window.encodeURIComponent(t), m.isFloorPriceModuleEnabled()) {
          var r = window.PWT.floorData[e[_.COMMON.IMPRESSION_ID]];
          e.fmv = r.floorRequestData ? r.floorRequestData.modelVersion || void 0 : void 0, e.ft = r.floorResponseData ? 0 == r.floorResponseData.enforcements.enforceJS ? 0 : 1 : void 0;
        }
        e.psl = n.psl, e.dvc = {
          plt: S.getDevicePlatform()
        }, S.ajaxRequest(i, function () {}, "json=" + window.encodeURIComponent(JSON.stringify(e)), {
          contentType: "application/x-www-form-urlencoded",
          withCredentials: !0
        });
      }
    }));
  }, t.executeMonetizationPixel = function (e, t) {
    var i = S.generateMonetizationPixel(e, t);
    i && b.setImageSrcToPixelURL(i);
  }, t.getAdUnitSizes = u, t.getAdUnitInfo = p, t.getAdUnitAdFormats = g, t.analyticalPixelCallback = I, t.setImageSrcToPixelURL = function (e, t) {
    var i = new window.Image();
    return void 0 == t || t ? (String(e).trim().substring(0, 8) != _.COMMON.PROTOCOL && (e = _.COMMON.PROTOCOL + e), i.src = e, void 0) : (i.src = e, void 0);
  }, t.getAllPartnersBidStatuses = function (e, t) {
    var i = !0;
    return S.forEachOnArray(t, function (t, n) {
      e[n] && (i = i && e[n].hasAllPossibleBidsReceived() === !0);
    }), i;
  }, t.loadTrackers = function (e) {
    var t = S.getBidFromEvent(e);
    window.parent.postMessage(JSON.stringify({
      pwt_type: "3",
      pwt_bidID: t,
      pwt_origin: _.COMMON.PROTOCOL + window.location.hostname,
      pwt_action: "click"
    }), "*");
  }, t.executeTracker = function (e) {
    window.parent.postMessage(JSON.stringify({
      pwt_type: "3",
      pwt_bidID: e,
      pwt_origin: _.COMMON.PROTOCOL + window.location.hostname,
      pwt_action: "imptrackers"
    }), "*");
  }, t.fireTracker = function (e, t) {
    var i;
    if ("click" === t) i = e["native"] && e["native"].clickTrackers;else if ("imptrackers" === t && (i = e["native"] && e["native"].impressionTrackers, e["native"] && e["native"].javascriptTrackers)) {
      var n = S.createInvisibleIframe();
      if (!n) throw {
        message: "Failed to create invisible frame for native javascript trackers"
      };
      if (!n.contentWindow) throw {
        message: "Unable to access frame window for native javascript trackers"
      };
      window.document.body.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.write(e["native"].javascriptTrackers), n.contentWindow.document.close();
    }
    (i || []).forEach(function (e) {
      b.setImageSrcToPixelURL(e, !1);
    });
  }, t.setStandardKeys = function (e, t) {
    if (e) {
      t[_.WRAPPER_TARGETING_KEYS.BID_ID] = e.getBidID(), t[_.WRAPPER_TARGETING_KEYS.BID_STATUS] = e.getStatus(), t[_.WRAPPER_TARGETING_KEYS.BID_ECPM] = e.getNetEcpm().toFixed(_.COMMON.BID_PRECISION);
      var i = e.getDealID();
      i && (t[_.WRAPPER_TARGETING_KEYS.BID_DEAL_ID] = i), t[_.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID] = e.getAdapterID(), t[_.WRAPPER_TARGETING_KEYS.PUBLISHER_ID] = m.getPublisherId(), t[_.WRAPPER_TARGETING_KEYS.PROFILE_ID] = m.getProfileID(), t[_.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID] = m.getProfileDisplayVersionID(), t[_.WRAPPER_TARGETING_KEYS.BID_SIZE] = e.width + "x" + e.height, t[_.WRAPPER_TARGETING_KEYS.PLATFORM_KEY] = e.getAdFormat() == _.FORMAT_VALUES.VIDEO && e.getcacheUUID() ? _.PLATFORM_VALUES.VIDEO : e.getNative() ? _.PLATFORM_VALUES.NATIVE : _.PLATFORM_VALUES.DISPLAY, e.getAdFormat() == _.FORMAT_VALUES.VIDEO && e.getcacheUUID() && (t[_.WRAPPER_TARGETING_KEYS.CACHE_PATH] = _.CONFIG.CACHE_PATH, t[_.WRAPPER_TARGETING_KEYS.CACHE_URL] = _.CONFIG.CACHE_URL, t[_.WRAPPER_TARGETING_KEYS.CACHE_ID] = e.getcacheUUID());
    } else S.logWarning("Not generating key-value pairs as invalid winningBid object passed. WinningBid: "), S.logWarning(e);
  };
}, function (e, t, i) {
  function n(e) {
    this.name = e, this.sizes = [], this.adapters = {}, this.creationTime = o.getCurrentTimestampInMs(), this.impressionID = "", this.analyticsEnabled = !1, this.expired = !1, this.allPossibleBidsReceived = !1;
  }
  var r = i(4),
    o = i(1),
    a = i(8).AdapterEntry;
  n.prototype.setExpired = function () {
    return this.expired = !0, this;
  }, n.prototype.getExpiredStatus = function () {
    return this.expired;
  }, n.prototype.setAnalyticEnabled = function () {
    return this.analyticsEnabled = !0, this;
  }, n.prototype.getAnalyticEnabledStatus = function () {
    return this.analyticsEnabled;
  }, n.prototype.setNewBid = function (e, t) {
    o.isOwnProperty(this.adapters, e) || (this.adapters[e] = new a(e)), this.adapters[e].setNewBid(t);
  }, n.prototype.getBid = function (e, t) {
    return o.isOwnProperty(this.adapters, e) ? this.adapters[e].getBid(t) : void 0;
  }, n.prototype.getName = function () {
    return this.name;
  }, n.prototype.getCreationTime = function () {
    return this.creationTime;
  }, n.prototype.setImpressionID = function (e) {
    return this.impressionID = e, this;
  }, n.prototype.getImpressionID = function () {
    return this.impressionID;
  }, n.prototype.setSizes = function (e) {
    return this.sizes = e, this;
  }, n.prototype.getSizes = function () {
    return this.sizes;
  }, n.prototype.setAdapterEntry = function (e) {
    return o.isOwnProperty(this.adapters, e) || (this.adapters[e] = new a(e), o.log(r.MESSAGES.M4 + this.name + " " + e + " " + this.adapters[e].getCallInitiatedTime())), this;
  }, n.prototype.getLastBidIDForAdapter = function (e) {
    return o.isOwnProperty(this.adapters, e) ? this.adapters[e].getLastBidID() : "";
  }, n.prototype.setAllPossibleBidsReceived = function () {
    return this.allPossibleBidsReceived = !0, this;
  }, n.prototype.hasAllPossibleBidsReceived = function () {
    return this.allPossibleBidsReceived;
  }, e.exports.BMEntry = n, t.createBMEntry = function (e) {
    return new n(e);
  };
}, function (e, t, i) {
  function n(e) {
    this.adapterID = e, this.callInitiatedTime = r.getCurrentTimestampInMs(), this.bids = {}, this.lastBidID = "";
  }
  var r = i(1);
  n.prototype.getCallInitiatedTime = function () {
    return this.callInitiatedTime;
  }, n.prototype.getLastBidID = function () {
    return this.lastBidID;
  }, n.prototype.getBid = function (e) {
    return r.isOwnProperty(this.bids, e) ? this.bids[e] : null;
  }, n.prototype.setNewBid = function (e) {
    delete this.bids[this.lastBidID];
    var t = e.getBidID();
    this.bids[t] = e, this.lastBidID = t;
  }, e.exports.AdapterEntry = n;
}, function (e, t, i) {
  function n(e) {
    z.isObject(e) && (rt = e);
  }
  function r() {
    return rt;
  }
  function o(e) {
    var t = 0;
    try {
      var i = e.getSlotId().getId().split("_");
      t = parseInt(i[i.length - 1]);
    } catch (n) {}
    return t;
  }
  function a(e, t) {
    var i = [];
    return z.isFunction(t.getSizes) && z.forEachOnArray(t.getSizes(window.innerWidth, window.innerHeight), function (t, n) {
      z.isFunction(n.getWidth) && z.isFunction(n.getHeight) ? i.push([n.getWidth(), n.getHeight()]) : (z.logWarning(e + ", size object does not have getWidth and getHeight method. Ignoring: "), z.logWarning(n));
    }), i;
  }
  function s(e, t) {
    z.isObject(e) && z.isFunction(e.getDivID) && z.isArray(t) && t[0] && t[0] == e.getDivID() && (e.setDisplayFunctionCalled(!0), e.setArguments(t));
  }
  function d(e, t, i) {
    if (z.isOwnProperty(ot.slotsMap, e)) i || ot.slotsMap[e].setSizes(ot.getAdSlotSizesArray(e, t));else {
      var n = Y.createSlot(e);
      n.setDivID(e), n.setPubAdServerObject(t), n.setAdUnitID(t.getAdUnitPath()), n.setAdUnitIndex(ot.getAdUnitIndex(t)), n.setSizes(ot.getAdSlotSizesArray(e, t)), n.setStatus(V.SLOT_STATUS.CREATED), et && z.isObject(JSON) && z.isFunction(JSON.stringify) && z.forEachOnArray(t.getTargetingKeys(), function (e, i) {
        n.setKeyValue(i, t.getTargeting(i));
      }), ot.slotsMap[e] = n, z.createVLogInfoPanel(e, n.getSizes(window.innerWidth, window.innerHeight));
    }
  }
  function c(e) {
    if (z.isObject(e) && z.isFunction(e.getSlotId)) {
      var t = e.getSlotId();
      if (t && z.isFunction(t.getDomId)) return t.getDomId();
    }
    return "";
  }
  function l(e, t, i) {
    z.log("Generating slotsMap"), z.forEachOnArray(e, function (e, n) {
      var r = ot.generateSlotName(n);
      ot.storeInSlotsMap(r, n, i), i && z.isOwnProperty(ot.slotsMap, r) && ot.setDisplayFunctionCalledIfRequired(ot.slotsMap[r], t);
    }), window.PWT.adUnits = window.PWT.adUnits || {}, Object.keys(ot.slotsMap).forEach(function (e) {
      var t = ot.slotsMap[e];
      window.PWT.adUnits[t.divID] = {
        divID: t.divID,
        adUnitId: t.adUnitID,
        mediaTypes: z.getAdUnitConfig(t.sizes, t).mediaTypeObject
      };
    }), z.log(ot.slotsMap);
  }
  function u(e) {
    return "object" == typeof e && "function" == typeof e.getSlotId && "function" == typeof e.getSlotId().getDomId && (e = e.getSlotId().getDomId()), z.isOwnProperty(ot.slotsMap, e) ? ot.slotsMap[e].getStatus() : V.SLOT_STATUS.DISPLAYED;
  }
  function p(e, t) {
    z.isOwnProperty(ot.slotsMap, e) && ot.slotsMap[e].updateStatusAfterRendering(t);
  }
  function g(e) {
    var t = [];
    return z.forEachOnObject(ot.slotsMap, function (i, n) {
      z.isOwnProperty(e, n.getStatus()) && t.push(i);
    }), t;
  }
  function f(e) {
    var t,
      i = {};
    z.isOwnProperty(ot.slotsMap, e) && (t = ot.slotsMap[e].getPubAdServerObject(), z.forEachOnArray(t.getTargetingKeys(), function (e, n) {
      i[n] = t.getTargeting(n);
    }), t.clearTargeting(), z.forEachOnObject(i, function (e, i) {
      z.isOwnProperty(ot.wrapperTargetingKeys, e) || t.setTargeting(e, i);
    }));
  }
  function I(e, t, i) {
    z.forEachOnArray(e, function (e, n) {
      if (z.isOwnProperty(ot.slotsMap, n)) {
        var r = ot.slotsMap[n];
        r.setStatus(V.SLOT_STATUS.PARTNERS_CALLED), i && (ot.removeDMTargetingFromSlot(n), r.setRefreshFunctionCalled(!0), r.setArguments(t));
      }
    });
  }
  function m(e) {
    var t = [];
    return z.forEachOnArray(e, function (e, i) {
      t.push(ot.slotsMap[i]);
    }), t;
  }
  function _(e) {
    var t = {};
    return z.forEachOnObject(e, function (e, i) {
      t[i] = "";
    }), t;
  }
  function S(e) {
    var t;
    t = X ? q.getBid(e) : K.getBid(e);
    var i = t.wb || null,
      n = t.kvp || {},
      r = ot.slotsMap[e].getPubAdServerObject(),
      o = J ? {} : V.IGNORE_PREBID_KEYS;
    z.log("DIV: " + e + " winningBid: "), z.log(i), X === !1 && i && i.getNetEcpm() > 0 && (ot.slotsMap[e].setStatus(V.SLOT_STATUS.TARGETING_ADDED), K.setStandardKeys(i, n)), z.handleHook(V.HOOKS.POST_AUCTION_KEY_VALUES, [n, r]), z.forEachOnObject(n, function (e, t) {
      !H.getSendAllBidsStatus() && i && "pubmatic" !== i.adapterID && z.isOwnProperty({
        hb_buyid_pubmatic: 1,
        pwtbuyid_pubmatic: 1
      }, e) ? delete n[e] : z.isOwnProperty(o, e) || z.isOwnProperty({
        pwtpb: 1
      }, e) || (r.setTargeting(e, t), ot.defineWrapperTargetingKey(e));
    });
  }
  function E(e) {
    z.isObject(ot.wrapperTargetingKeys) || (ot.wrapperTargetingKeys = {}), ot.wrapperTargetingKeys[e] = "";
  }
  function b(e, t) {
    return z.isObject(e) && z.isFunction(t) ? function () {
      return Z = !0, z.log("Disable Initial Load is called"), H.isIdentityOnly() ? (z.log(V.MESSAGES.IDENTITY.M5, " DisableInitial Load function"), t.apply(e, arguments)) : t.apply(e, arguments);
    } : (z.logError("disableInitialLoad: originalFunction is not a function"), null);
  }
  function h(e, t) {
    return z.isObject(e) && z.isFunction(t) ? function () {
      return z.log("enableSingleRequest is called"), t.apply(e, arguments);
    } : (z.log("enableSingleRequest: originalFunction is not a function"), null);
  }
  function w(e, t) {
    return z.isObject(e) && z.isFunction(t) ? H.isIdentityOnly() ? (z.log(V.MESSAGES.IDENTITY.M5, " Original Set Targeting function"), function () {
      return t.apply(e, arguments);
    }) : function () {
      var i = arguments,
        n = i[0] ? i[0] : null;
      return null != n && (z.isOwnProperty(nt, n) || (nt[n] = []), nt[n] = nt[n].concat(i[1])), t.apply(e, arguments);
    } : (z.log("setTargeting: originalFunction is not a function"), null);
  }
  function P(e, t) {
    return z.isObject(e) && z.isFunction(t) ? function () {
      var i = arguments[0] || window.googletag.pubads().getSlots();
      return z.forEachOnArray(i, function (e, t) {
        delete it[ot.generateSlotName(t)];
      }), t.apply(e, arguments);
    } : (z.log("destroySlots: originalFunction is not a function"), null);
  }
  function O(e, t) {
    return z.isObject(e) && z.isFunction(t) ? function () {
      var i = arguments[0];
      return z.updateAdUnits(i), t.apply(e, arguments);
    } : (z.log("newAddAunitfunction: originalFunction is not a function"), null);
  }
  function A(e, t, i, n) {
    z.log(e), z.log(n), ot.updateStatusAfterRendering(n[0], !1), i.apply(t, n);
  }
  function y(e, t) {
    var i = t.getStatus();
    i != V.SLOT_STATUS.DISPLAYED && i != V.SLOT_STATUS.TARGETING_ADDED && ot.findWinningBidAndApplyTargeting(e);
  }
  function v(e, t, i) {
    ot.getStatusOfSlotForDivId(i[0]) != V.SLOT_STATUS.DISPLAYED ? ot.updateStatusAndCallOriginalFunction_Display("Calling original display function after timeout with arguments, ", e, t, i) : z.log("AdSlot already rendered");
  }
  function T(e, t, i) {
    var n = 0,
      r = 10,
      o = window.setInterval(function () {
        (z.getExternalBidderStatus(t) && K.getAllPartnersBidStatuses(window.PWT.bidMap, t) || n >= e) && (window.clearInterval(o), z.resetExternalBidderStatus(t), i()), n += r;
      }, r);
  }
  function C(e, t, i, n) {
    switch (e) {
      case V.SLOT_STATUS.CREATED:
      case V.SLOT_STATUS.PARTNERS_CALLED:
        ot.executeDisplay(H.getTimeout(), Object.keys(ot.slotsMap), function () {
          z.forEachOnObject(ot.slotsMap, function (e, t) {
            ot.findWinningBidIfRequired_Display(e, t);
          }), ot.processDisplayCalledSlot(t, i, n);
        });
        break;
      case V.SLOT_STATUS.TARGETING_ADDED:
        ot.updateStatusAndCallOriginalFunction_Display("As DM processing is already done, Calling original display function with arguments", t, i, n);
        break;
      case V.SLOT_STATUS.DISPLAYED:
        ot.updateStatusAndCallOriginalFunction_Display("As slot is already displayed, Calling original display function with arguments", t, i, n);
    }
  }
  function M(e, t, i) {
    if (e.length > 0) {
      ot.updateStatusOfQualifyingSlotsBeforeCallingAdapters(e, t, i);
      var n = ot.arrayOfSelectedSlots(e);
      q.fetchBids(n);
    }
  }
  function N(e, t) {
    return z.isObject(e) && z.isFunction(t) ? H.isIdentityOnly() ? (z.log(V.MESSAGES.IDENTITY.M5, " Original Display function"), function () {
      return t.apply(e, arguments);
    }) : function () {
      if (z.log("In display function, with arguments: "), z.log(arguments), Z) return z.log("DisableInitialLoad was called, Nothing to do"), t.apply(e, arguments);
      ot.updateSlotsMapFromGoogleSlots(e.pubads().getSlots(), arguments, !0), ot.displayFunctionStatusHandler(u(arguments[0]), e, t, arguments);
      var i = {};
      i[V.SLOT_STATUS.CREATED] = "", ot.forQualifyingSlotNamesCallAdapters(g(i), arguments, !1);
      var n = arguments[0];
      setTimeout(function () {
        z.realignVLogInfoPanel(n), K.executeAnalyticsPixel();
      }, 2e3 + H.getTimeout());
    } : (z.log("display: originalFunction is not a function"), null);
  }
  function D(e) {
    ot.displayHookIsAdded || (ot.displayHookIsAdded = !0, z.log("Adding hook on googletag.display."), z.addHookOnFunction(e, !1, "display", this.newDisplayFunction));
  }
  function R(e, t, i) {
    return z.isOwnProperty(ot.slotsMap, e) && ot.slotsMap[e].isRefreshFunctionCalled() === !0 && ot.slotsMap[e].getStatus() !== V.SLOT_STATUS.DISPLAYED ? (ot.findWinningBidAndApplyTargeting(t), ot.updateStatusAfterRendering(t, !0), !0) : i;
  }
  function k(e, t) {
    z.createVLogInfoPanel(e, ot.slotsMap[t].getSizes(window.innerWidth, window.innerHeight)), z.realignVLogInfoPanel(e), K.executeAnalyticsPixel();
  }
  function x(e, t, i, n) {
    z.log("Executing post timeout events, arguments: "), z.log(n);
    var r = !1;
    z.forEachOnArray(e, function (e, t) {
      var i = ot.slotsMap[t].getDivID();
      r = ot.findWinningBidIfRequired_Refresh(t, i, r), window.setTimeout(function () {
        ot.postRederingChores(i, t);
      }, 2e3);
    }), this.callOriginalRefeshFunction(r, t, i, n);
  }
  function U(e, t, i, n) {
    e === !0 ? (z.log("Calling original refresh function post timeout"), i.apply(t, n)) : z.log("AdSlot already rendered");
  }
  function F(e, t) {
    var i = [],
      n = [];
    return n = 0 == e.length || null == e[0] ? t.getSlots() : e[0], z.forEachOnArray(n, function (e, t) {
      var n = ot.generateSlotName(t);
      n.length > 0 && (i = i.concat(n));
    }), i;
  }
  function L(e, t) {
    return z.isObject(e) && z.isFunction(t) ? H.isIdentityOnly() ? (z.log("Identity Only Enabled. No Process Need. Calling Original Display function"), function () {
      return t.apply(e, arguments);
    }) : function () {
      z.log("In Refresh function"), ot.updateSlotsMapFromGoogleSlots(e.getSlots(), arguments, !1);
      var i = F(arguments, e);
      ot.forQualifyingSlotNamesCallAdapters(i, arguments, !0), z.log("Intiating Call to original refresh function with Timeout: " + H.getTimeout() + " ms");
      var n = arguments;
      ot.executeDisplay(H.getTimeout(), i, function () {
        ot.postTimeoutRefreshExecution(i, e, t, n);
      });
    } : (z.log("refresh: originalFunction is not a function"), null);
  }
  function B(e) {
    if (z.isObject(e) && z.isObject(e.googletag) && z.isFunction(e.googletag.pubads)) {
      var t = e.googletag,
        i = t.pubads();
      return z.isObject(i) ? (z.addHookOnFunction(i, !1, "disableInitialLoad", ot.newDisableInitialLoadFunction), z.addHookOnFunction(i, !1, "enableSingleRequest", ot.newEnableSingleRequestFunction), ot.newAddHookOnGoogletagDisplay(t), z.addHookOnFunction(i, !1, "refresh", ot.newRefreshFuncton), z.addHookOnFunction(i, !1, "setTargeting", ot.newSetTargetingFunction), z.addHookOnFunction(t, !1, "destroySlots", ot.newDestroySlotsFunction), !0) : !1;
    }
    return !1;
  }
  function W(e) {
    return z.isObject(e) ? (e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], !0) : !1;
  }
  function G(e) {
    if (H.isIdentityOnly()) return !1;
    if (z.isObject(e.googletag) && !e.googletag.apiReady && z.isArray(e.googletag.cmd) && z.isFunction(e.googletag.cmd.unshift)) {
      z.log("Succeeded to load before GPT");
      var t = this;
      return e.googletag.cmd.unshift(function () {
        z.log("OpenWrap initialization started"), t.addHooks(e), z.log("OpenWrap initialization completed");
      }), !0;
    }
    return z.logError("Failed to load before GPT"), !1;
  }
  function j(e) {
    e.PWT.safeFrameMessageListenerAdded || (z.addMessageEventListenerForSafeFrame(e), e.PWT.safeFrameMessageListenerAdded = !0);
  }
  var H = i(2),
    V = i(4),
    z = i(1),
    K = i(6),
    Y = i(10),
    q = i(11),
    J = H.isUsePrebidKeysEnabled(),
    X = H.isPrebidPubMaticAnalyticsEnabled(),
    Q = i(12),
    $ = !1;
  t.displayHookIsAdded = $;
  var Z = !1,
    et = !0,
    tt = {};
  t.wrapperTargetingKeys = tt;
  var it = {};
  t.slotsMap = it;
  var nt = {},
    rt = null,
    ot = this;
  t.setWindowReference = n, t.getWindowReference = r, t.getAdUnitIndex = o, t.getAdSlotSizesArray = a, t.setDisplayFunctionCalledIfRequired = s, t.storeInSlotsMap = d, t.generateSlotName = c, t.updateSlotsMapFromGoogleSlots = l, t.getStatusOfSlotForDivId = u, t.updateStatusAfterRendering = p, t.getSlotNamesByStatus = g, t.removeDMTargetingFromSlot = f, t.updateStatusOfQualifyingSlotsBeforeCallingAdapters = I, t.arrayOfSelectedSlots = m, t.defineWrapperTargetingKeys = _, t.findWinningBidAndApplyTargeting = S, t.defineWrapperTargetingKey = E, t.newDisableInitialLoadFunction = b, t.newEnableSingleRequestFunction = h, t.newSetTargetingFunction = w, t.newDestroySlotsFunction = P, t.newAddAdUnitFunction = O, t.updateStatusAndCallOriginalFunction_Display = A, t.findWinningBidIfRequired_Display = y, t.processDisplayCalledSlot = v, t.executeDisplay = T, t.displayFunctionStatusHandler = C, t.forQualifyingSlotNamesCallAdapters = M, t.newDisplayFunction = N, t.newAddHookOnGoogletagDisplay = D, t.findWinningBidIfRequired_Refresh = R, t.postRederingChores = k, t.postTimeoutRefreshExecution = x, t.callOriginalRefeshFunction = U, t.getQualifyingSlotNamesForRefresh = F, t.newRefreshFuncton = L, t.addHooks = B, t.defineGPTVariables = W, t.addHooksIfPossible = G, t.initSafeFrameListener = j, t.init = function (e) {
    return H.initConfig(), z.isObject(e) ? (ot.setWindowReference(e), ot.initSafeFrameListener(e), q.initPbjsConfig(), ot.wrapperTargetingKeys = ot.defineWrapperTargetingKeys(V.WRAPPER_TARGETING_KEYS), ot.defineGPTVariables(e), ot.addHooksIfPossible(e), Q.initIdHub(e), !0) : !1;
  };
}, function (e, t, i) {
  function n(e) {
    this.name = e, this.status = r.SLOT_STATUS.CREATED, this.divID = "", this.adUnitID = "", this.adUnitIndex = 0, this.sizes = [], this.keyValues = {}, this.arguments = [], this.pubAdServerObject = null, this.displayFunctionCalled = !1, this.refreshFunctionCalled = !1;
  }
  var r = i(4);
  n.prototype.getName = function () {
    return this.name;
  }, n.prototype.setStatus = function (e) {
    return this.status = e, this;
  }, n.prototype.getStatus = function () {
    return this.status;
  }, n.prototype.setDivID = function (e) {
    return this.divID = e, this;
  }, n.prototype.getDivID = function () {
    return this.divID;
  }, n.prototype.setAdUnitID = function (e) {
    return this.adUnitID = e, this;
  }, n.prototype.getAdUnitID = function () {
    return this.adUnitID;
  }, n.prototype.setAdUnitIndex = function (e) {
    return this.adUnitIndex = e, this;
  }, n.prototype.getAdUnitIndex = function () {
    return this.adUnitIndex;
  }, n.prototype.setSizes = function (e) {
    return this.sizes = e, this;
  }, n.prototype.getSizes = function () {
    return this.sizes;
  }, n.prototype.setKeyValue = function (e, t) {
    return this.keyValues[e] = t, this;
  }, n.prototype.setKeyValues = function (e) {
    return this.keyValues = e, this;
  }, n.prototype.getkeyValues = function () {
    return this.keyValues;
  }, n.prototype.setArguments = function (e) {
    return this.arguments = e, this;
  }, n.prototype.getArguments = function () {
    return this.arguments;
  }, n.prototype.setPubAdServerObject = function (e) {
    return this.pubAdServerObject = e, this;
  }, n.prototype.getPubAdServerObject = function () {
    return this.pubAdServerObject;
  }, n.prototype.setDisplayFunctionCalled = function (e) {
    return this.displayFunctionCalled = e, this;
  }, n.prototype.isDisplayFunctionCalled = function () {
    return this.displayFunctionCalled;
  }, n.prototype.setRefreshFunctionCalled = function (e) {
    return this.refreshFunctionCalled = e, this;
  }, n.prototype.isRefreshFunctionCalled = function () {
    return this.refreshFunctionCalled;
  }, n.prototype.updateStatusAfterRendering = function (e) {
    this.status = r.SLOT_STATUS.DISPLAYED, this.arguments = [], e ? this.refreshFunctionCalled = !1 : this.displayFunctionCalled = !1;
  }, e.exports.Slot = n, t.createSlot = function (e) {
    return new n(e);
  };
}, function (e, t, i) {
  function n(e, t, i) {
    var n = i || e.regexPattern || void 0,
      r = W.createBid(e.bidderCode, t),
      o = parseInt(e.pubmaticServerErrorCode);
    return L.getAdServerCurrency() && (G.isOwnProperty(e, "originalCpm") || (e.originalCpm = e.cpm), G.isOwnProperty(e, "originalCurrency") || (e.originalCurrency = G.getCurrencyToDisplay())), e.status == B.BID_STATUS.BID_REJECTED ? r.setGrossEcpm(e.originalCpm, e.originalCurrency, G.getCurrencyToDisplay(), e.status) : r.setGrossEcpm(e.cpm), r.setDealID(e.dealId), r.setDealChannel(e.dealChannel), r.setAdHtml(e.ad || ""), r.setAdUrl(e.adUrl || ""), r.setWidth(e.width), r.setHeight(e.height), r.setMi(e.mi), e.videoCacheKey && r.setVastCache(e.videoCacheKey), e.vastUrl && r.setVastUrl(e.vastUrl), e.vastXml && r.setVastUrl(e.vastUrl), e.renderer && r.setRenderer(e.renderer), e.native && r.setNative(e.native), n && r.setRegexPattern(n), e.mediaType == B.FORMAT_VALUES.VIDEO && (e.videoCacheKey && r.setcacheUUID(e.videoCacheKey), r.updateBidId(e.adUnitCode)), e.mediaType && (parseFloat(e.cpm) > 0 || e.status == B.BID_STATUS.BID_REJECTED) && r.setAdFormat(e.adHtml, e.mediaType), e.sspID && r.setsspID(e.sspID), r.setReceivedTime(e.responseTimestamp), r.setServerSideResponseTime(e.serverSideResponseTime), L.getAdServerCurrency() && (r.setOriginalCpm(window.parseFloat(e.originalCpm)), r.setOriginalCurrency(e.originalCurrency), G.isFunction(e.getCpmInNewCurrency) ? r.setAnalyticsCpm(window.parseFloat(e.getCpmInNewCurrency(B.COMMON.ANALYTICS_CURRENCY)), e.status) : r.setAnalyticsCpm(r.getGrossEcpm(), e.status)), 1 === o || 2 === o || 6 === o || 11 === o || 12 === o ? (r.setDefaultBidStatus(-1), r.setWidth(0), r.setHeight(0)) : 3 === o || 4 === o || 5 === o ? (r.setDefaultBidStatus(0), 0 === r.isServerSide && r.setPostTimeoutStatus()) : o && r.setDefaultBidStatus(1), G.forEachOnObject(e.adserverTargeting, function (e, t) {
      "hb_format" !== e && "hb_source" !== e && r.setKeyValuePair(e, t);
    }), r.setPbBid(e), r;
  }
  function r(e, t) {
    var i = {
      responseKGPV: "",
      responseRegex: ""
    };
    t.kgpvs.length > 0 && t.kgpvs.forEach(function (t) {
      e.bidderCode == t.adapterID && (i.responseKGPV = t.kgpv, i.responseRegex = t.regexPattern);
    });
    var n = i.responseKGPV.split("@"),
      r = 1,
      o = !1;
    if (n && (2 == n.length || 3 == n.length && (r = 2) && (o = !0)) && "video" != e.mediaType) {
      var a = n[r],
        s = null;
      n[r].indexOf(":") > 0 && (a = n[r].split(":")[0], s = n[r].split(":")[1]), e.getSize() && e.getSize() != a && "0X0" != e.getSize().toUpperCase() && (n[0].toUpperCase() == a.toUpperCase() && (n[0] = e.getSize().toLowerCase()), i.responseKGPV = o ? n[0] + "@" + n[1] + "@" + e.getSize() : n[0] + "@" + e.getSize(), s && (i.responseKGPV = i.responseKGPV + ":" + s));
    }
    return i;
  }
  function o(e) {
    var t = e.adUnitCode || "";
    if (G.isOwnProperty(Y.kgpvMap, t)) {
      if (e.floorData && (window.PWT.floorData[window.PWT.bidMap[e.adUnitCode].impressionID].floorResponseData = e.floorData), "pubmaticServer" === e.bidderCode && (e.bidderCode = e.originalBidder), Y.isSingleImpressionSettingEnabled) {
        var i = Y.checkAndModifySizeOfKGPVIfRequired(e, Y.kgpvMap[t]);
        Y.kgpvMap[t].kgpv = i.responseKGPV, Y.kgpvMap[t].regexPattern = i.responseRegex;
      }
      if (e.bidderCode && L.isServerSideAdapter(e.bidderCode)) {
        var n = Y.kgpvMap[t].divID;
        if (!Y.isSingleImpressionSettingEnabled) {
          var r = Y.getPBCodeWithWidthAndHeight(n, e.bidderCode, e.width, e.height),
            o = Y.getPBCodeWithoutWidthAndHeight(n, e.bidderCode);
          if (G.isOwnProperty(Y.kgpvMap, r)) t = r;else {
            if (!G.isOwnProperty(Y.kgpvMap, o)) return G.logWarning("Failed to find kgpv details for S2S-adapter:" + e.bidderCode), void 0;
            t = o;
          }
        }
        e.ss = L.isServerSideAdapter(e.bidderCode) ? 1 : 0;
      }
      e.bidderCode && (e.timeToRespond < L.getTimeout() - B.CONFIG.TIMEOUT_ADJUSTMENT && G.handleHook(B.HOOKS.BID_RECEIVED, [Y.kgpvMap[t].divID, e]), j.setBidFromBidder(Y.kgpvMap[t].divID, Y.transformPBBidToOWBid(e, Y.kgpvMap[t].kgpv, Y.kgpvMap[t].regexPattern)));
    } else G.logWarning("Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:" + e.adUnitCode);
  }
  function a(e) {
    e.bids.forEach(function (e) {
      window.PWT.floorData[window.PWT.bidMap[e.adUnitCode].impressionID] || (window.PWT.floorData[window.PWT.bidMap[e.adUnitCode].impressionID] = {}), window.PWT.floorData[window.PWT.bidMap[e.adUnitCode].impressionID].floorRequestData = e.floorData;
    });
  }
  function s(e, t, i, n) {
    return e + "@" + t + "@" + i + "X" + n;
  }
  function d(e, t) {
    return e + "@" + t;
  }
  function c(e, t, i) {
    var n = !1;
    return G.isOwnProperty(e, t) && e[t].bids.forEach(function (e) {
      e.bidder == i && (n = !0);
    }), n;
  }
  function l(e, t, i, n, r, o, a, s, d, l, u) {
    var g, f, I, m, _, S;
    if (L.isServerSideAdapter(e) && 1 != L.usePBSAdapter()) return G.log("Not calling adapter: " + e + ", for " + r + ", as it is serverSideEnabled."), void 0;
    I = a.getDivID(), g = a.getDivID(), f = a.getSizes(), m = a.getAdUnitID();
    var E = G.getAdUnitConfig(f, a);
    if (_ = E.mediaTypeObject, _.partnerConfig && (S = _.partnerConfig), G.isOwnProperty(t, g)) {
      if (L.isSingleImpressionSettingEnabled() && c(t, g, e)) return;
    } else t[g] = {
      code: g,
      mediaTypes: {},
      sizes: f,
      adUnitId: m,
      bids: [],
      divID: I
    }, _.banner && (t[g].mediaTypes.banner = _.banner), _.native && (t[g].mediaTypes["native"] = _.native), _.video && (t[g].mediaTypes.video = _.video), E.renderer && (t[g].renderer = E.renderer);
    p(e, r, n, s, i, a, g, t, S, u);
  }
  function u(e, t, i, n, r, o, a, s, d, l, u) {
    var g,
      f,
      I,
      m,
      _ = a.getDivID(),
      S = a.getAdUnitID();
    if (Y.isSingleImpressionSettingEnabled) {
      g = a.getDivID(), f = a.getSizes();
      var E = !1;
      if (Y.kgpvMap[g] && Y.kgpvMap[g].kgpvs && Y.kgpvMap[g].kgpvs.length > 0) {
        if (G.forEachOnArray(Y.kgpvMap[g].kgpvs, function (t, i) {
          i.adapterID == e && (E = !0);
        }), E && c(t, g, e)) return;
      } else Y.kgpvMap[g] = {
        kgpvs: [],
        divID: _
      };
      if (!E) {
        var b = {
          adapterID: e,
          kgpv: r,
          regexPattern: u
        };
        Y.kgpvMap[g].kgpvs.push(b);
      }
    } else o ? (g = Y.getPBCodeWithWidthAndHeight(_, e, d, l), f = [[d, l]]) : (g = Y.getPBCodeWithoutWidthAndHeight(_, e), f = a.getSizes()), Y.kgpvMap[g] = {
      kgpv: r,
      divID: _,
      regexPattern: u
    };
    if (L.isServerSideAdapter(e) && 1 != L.usePBSAdapter()) return G.log("Not calling adapter: " + e + ", for " + r + ", as it is serverSideEnabled."), void 0;
    var h = G.getAdUnitConfig(f, a);
    if (I = h.mediaTypeObject, I.partnerConfig && (m = I.partnerConfig), G.isOwnProperty(t, g)) {
      if (Y.isSingleImpressionSettingEnabled && c(t, g, e)) return;
    } else t[g] = {
      code: g,
      mediaTypes: {},
      sizes: f,
      adUnitId: S,
      bids: [],
      divID: _
    }, I.banner && (t[g].mediaTypes.banner = I.banner), I.native && (t[g].mediaTypes["native"] = I.native), I.video && (t[g].mediaTypes.video = I.video), h.renderer && (t[g].renderer = h.renderer), window.PWT.adUnits = window.PWT.adUnits || {}, window.PWT.adUnits[g] = t[g];
    G.isOwnProperty(t, g) && (I = t[g].mediaTypes), p(e, r, n, s, i, a, g, t, m, u);
  }
  function p(e, t, i, n, r, o, a, s, d, l) {
    var u = {},
      p = s[a].mediaTypes,
      g = s[a].sizes,
      f = !1;
    p && G.isOwnProperty(p, "video") && "telaria" != e && (u.video = p.video), G.forEachOnObject(n, function (e, t) {
      u[e] = t;
    }), J && (u.kgpv = t, u.regexPattern = l), d && Object.keys(d).length > 0 && G.forEachOnObject(d, function (t, i) {
      t == e && G.forEachOnObject(i, function (e, t) {
        u[e] = t;
      });
    }), p && G.isOwnProperty(p, "video") && "telaria" != e && (G.isOwnProperty(u, "video") && G.isObject(u.video) ? G.forEachOnObject(p.video, function (e, t) {
      G.isOwnProperty(u.video, e) || (u.video[e] = t);
    }) : u.video = p.video), J === !1 && L.usePBSAdapter() && (u.wiid = i, f = !0);
    var I = L.getAdapterNameForAlias(e) || e;
    switch (I) {
      case "pubmaticServer":
        u.publisherId = r.publisherId, u.adUnitIndex = "" + o.getAdUnitIndex(), u.adUnitId = o.getAdUnitID(), u.divId = o.getDivID(), u.adSlot = t, J === !1 && (u.wiid = i), u.profId = L.getProfileID(), window.PWT.udpv && (u.verId = L.getProfileDisplayVersionID()), s[a].bids.push({
          bidder: e,
          params: u
        });
        break;
      case "pubmatic":
      case "pubmatic2":
        u.publisherId = r.publisherId, u.adSlot = u.slotName || t, J === !1 && (u.wiid = i), u.profId = "pubmatic2" == e || "pubmatic2" == I ? r.profileId : L.getProfileID(), "pubmatic2" != e && "pubmatic2" != I && window.PWT.udpv && (u.verId = L.getProfileDisplayVersionID()), 1 == L.usePBSAdapter() && L.isServerSideAdapter(e) && (u.wrapper = {
          profile: parseInt(H.pwt.pid),
          version: parseInt(H.pwt.pdvid)
        }, u.hashedKey && (u.adSlot = u.hashedKey)), s[a].bids.push({
          bidder: e,
          params: u
        });
        break;
      case "pulsepoint":
        G.forEachOnArray(g, function (t, r) {
          var o = {};
          G.forEachOnObject(n, function (e, t) {
            o[e] = t;
          }), o.cf = r[0] + "x" + r[1], f && (o.wiid = i), s[a].bids.push({
            bidder: e,
            params: o
          });
        });
        break;
      case "adg":
        G.forEachOnArray(g, function (t, r) {
          var o = {};
          G.forEachOnObject(n, function (e, t) {
            o[e] = t;
          }), o.width = r[0], o.height = r[1], f && (o.wiid = i), Y.isSingleImpressionSettingEnabled && c(s, a, e) || s[a].bids.push({
            bidder: e,
            params: o
          });
        });
        break;
      case "yieldlab":
        G.forEachOnArray(g, function (t, r) {
          var o = {};
          G.forEachOnObject(n, function (e, t) {
            o[e] = t;
          }), o.adSize = r[0] + "x" + r[1], f && (o.wiid = i), Y.isSingleImpressionSettingEnabled && c(s, a, e) || s[a].bids.push({
            bidder: e,
            params: o
          });
        });
        break;
      case "ix":
      case "indexExchange":
        u.siteID && (u.siteId = u.siteID, delete u.siteID), f && (u.wiid = i), s[a].bids.push({
          bidder: e,
          params: u
        });
        break;
      default:
        s[a].bids.push({
          bidder: e,
          params: u
        });
    }
  }
  function g(e, t, i, n, r) {
    G.log(e + B.MESSAGES.M1), t && G.forEachGeneratedKey(e, n, t, r, [], i, J ? Y.generatedKeyCallbackForPbAnalytics : Y.generatedKeyCallback, !0);
  }
  function f(e) {
    G.forEachOnObject(B.SRA_ENABLED_BIDDERS, function (t) {
      G.isOwnProperty(H.adapters, t) && (e[t] = {
        singleRequest: !0
      });
    });
  }
  function I(e) {
    e.userSync = {
      enableOverride: !0,
      syncsPerBidder: 0,
      iframeEnabled: !0,
      pixelEnabled: !0,
      filterSettings: {
        iframe: {
          bidders: "*",
          filter: "include"
        }
      },
      enabledBidders: function () {
        var e = [];
        return L.forEachAdapter(function (t) {
          var i = L.getAdapterNameForAlias(t) || t;
          -1 == e.indexOf(i) && e.push(i);
        }), e;
      }(),
      syncDelay: 2e3,
      aliasSyncEnabled: !0
    }, L.isUserIdModuleEnabled() && (e.userSync.userIds = G.getUserIdConfiguration());
  }
  function m(e) {
    L.getGdpr() && (e.consentManagement || (e.consentManagement = {}), e.consentManagement.gdpr = {
      cmpApi: L.getCmpApi(),
      timeout: L.getGdprTimeout(),
      allowAuctionWithoutConsent: L.getAwc()
    });
  }
  function _(e) {
    L.getCCPA() && (e.consentManagement || (e.consentManagement = {}), e.consentManagement.usp = {
      cmpApi: L.getCCPACmpApi(),
      timeout: L.getCCPATimeout()
    });
  }
  function S(e) {
    L.getAdServerCurrency() && (G.log(B.MESSAGES.M26 + L.getAdServerCurrency()), e.currency = {
      adServerCurrency: L.getAdServerCurrency(),
      granularityMultiplier: L.getGranularityMultiplier()
    });
  }
  function E(e) {
    L.isSchainEnabled() && (e.schain = L.getSchainObject());
  }
  function b() {
    return G.isFunction(window[z].aliasBidder) ? (L.forEachBidderAlias(function (e) {
      window[z].aliasBidder(H.alias[e], e);
    }), void 0) : (G.logWarning("PreBid js aliasBidder method is not available"), void 0);
  }
  function h() {
    J && G.isFunction(window[z].enableAnalytics) && window[z].enableAnalytics({
      provider: "pubmatic",
      options: {
        publisherId: L.getPublisherId(),
        profileId: L.getProfileID(),
        profileVersionId: L.getProfileDisplayVersionID()
      }
    });
  }
  function w(e, t) {
    return !(e >= L.getAdapterThrottle(t));
  }
  function P(e, t) {
    var i = {},
      n = G.getRandomNumberBelow100();
    L.forEachAdapter(function (r, o) {
      r !== Y.parentAdapterID && (1 == L.usePBSAdapter() && L.isServerSideAdapter(r) ? 0 == Y.throttleAdapter(n, r) ? Y.generateConfig(r, o, e, i, t) : G.log(r + B.MESSAGES.M2) : L.isServerSideAdapter(r) || 0 == Y.throttleAdapter(n, r) ? Y.generateConfig(r, o, e, i, t) : G.log(r + B.MESSAGES.M2));
    });
    var r = [];
    for (var o in i) G.isOwnProperty(i, o) && r.push(i[o]);
    return r;
  }
  function O(e, t, i, n, r) {
    G.forEachOnObject(i, function (t, i) {
      j.setCallInitTime(i.getDivID(), e);
    }), Y.generatePbConf(e, t, i, n, r);
  }
  function A() {
    return G.isFunction(window[z].onEvent) ? (q || (window[z].onEvent("bidResponse", Y.pbBidStreamHandler), q = !0), void 0) : (G.logWarning("PreBid js onEvent method is not available"), void 0);
  }
  function y() {
    return G.isFunction(window[z].onEvent) ? (window[z].onEvent("bidRequested", Y.pbBidRequestHandler), void 0) : (G.logWarning("PreBid js onEvent method is not available"), void 0);
  }
  function v() {
    if (G.isFunction(window[z].setConfig) || "function" == typeof window[z].setConfig) {
      var e = {
        debug: G.isDebugLogEnabled(),
        cache: {
          url: B.CONFIG.CACHE_URL + B.CONFIG.CACHE_PATH
        },
        bidderSequence: "random",
        disableAjaxTimeout: L.getDisableAjaxTimeout(),
        enableSendAllBids: L.getSendAllBidsStatus(),
        targetingControls: {
          alwaysIncludeDeals: !0
        },
        testGroupId: parseInt(window.PWT.testGroupId || 0)
      };
      L.getPriceGranularity() && (e.priceGranularity = L.getPriceGranularity()), J === !0 && (e.instreamTracking = {
        enabled: !0
      }), window.PWT.ssoEnabled = L.isSSOEnabled() || !1, Y.getFloorsConfiguration(e), Y.assignUserSyncConfig(e), Y.assignGdprConfigIfRequired(e), Y.assignCcpaConfigIfRequired(e), Y.assignCurrencyConfigIfRequired(e), Y.assignSchainConfigIfRequired(e), Y.assignSingleRequestConfigForBidders(e), L.usePBSAdapter() && Y.gets2sConfig(e), Y.checkForYahooSSPBidder(e), G.handleHook(B.HOOKS.PREBID_SET_CONFIG, [e]), window[z].setConfig(e);
    } else G.logWarning("PreBidJS setConfig method is not available");
  }
  function T() {
    if (H.adapters && H.adapters.pubmatic) {
      var e = {
        pubmatic: H.adapters.pubmatic
      };
      H.adapters = Object.assign(e, H.adapters);
    }
  }
  function C(e) {
    var t = {},
      i = L.getServerEnabledAdaptars();
    for (var n in H.alias) Q[n] = H.alias[n];
    var r = L.getPubMaticAndAlias(i);
    r.length && r.forEach(function (e) {
      t[e] = {};
    }), e.s2sConfig = {
      accountId: L.getPublisherId(),
      adapter: B.PBSPARAMS.adapter,
      enabled: !0,
      bidders: i,
      endpoint: B.PBSPARAMS.endpoint,
      syncEndpoint: B.PBSPARAMS.syncEndpoint,
      timeout: L.getTimeoutForPBSRequest(),
      secure: 1,
      extPrebid: {
        aliases: Q,
        bidderparams: t,
        targeting: {
          pricegranularity: L.getPriceGranularity()
        },
        isPrebidPubMaticAnalyticsEnabled: L.isPrebidPubMaticAnalyticsEnabled(),
        isUsePrebidKeysEnabled: L.isUsePrebidKeysEnabled(),
        macros: L.createMacros()
      }
    };
  }
  function M(e) {
    1 == L.isFloorPriceModuleEnabled() && (e.floors = {
      enforcement: {
        enforceJS: L.getFloorType()
      },
      auctionDelay: L.getFloorAuctionDelay(),
      endpoint: {
        url: L.getFloorJsonUrl()
      }
    });
  }
  function N(e) {
    var t = !1,
      i = H.adapters.hasOwnProperty(B.YAHOOSSP);
    if (!i) for (var n in H.alias) L.getAdapterNameForAlias(n) == B.YAHOOSSP && (t = !0);
    (i || t) && (e[B.YAHOOSSP] = {
      mode: "all"
    });
  }
  function D() {
    return [{
      key: "pwtpid",
      val: function (e) {
        return e.bidderCode;
      }
    }, {
      key: "pwtsid",
      val: function (e) {
        return e.adId;
      }
    }, {
      key: "pwtecp",
      val: function (e) {
        return (e.cpm || 0).toFixed(B.COMMON.BID_PRECISION);
      }
    }, {
      key: "pwtsz",
      val: function (e) {
        return e.size;
      }
    }, {
      key: "hb_source",
      val: function () {
        return "";
      }
    }, {
      key: "pwtplt",
      val: function (e) {
        return "video" == e.mediaType && e.videoCacheKey ? B.PLATFORM_VALUES.VIDEO : e.native ? B.PLATFORM_VALUES.NATIVE : B.PLATFORM_VALUES.DISPLAY;
      }
    }, {
      key: "pwtdid",
      val: function (e) {
        return e.dealId || "";
      }
    }, {
      key: "pwtdeal",
      val: function (e) {
        return e.dealId ? (e.dealChannel = e.dealChannel || "PMP", e.dealChannel + B.COMMON.DEAL_KEY_VALUE_SEPARATOR + e.dealId + B.COMMON.DEAL_KEY_VALUE_SEPARATOR + e.adId) : "";
      }
    }, {
      key: "pwtbst",
      val: function () {
        return 1;
      }
    }, {
      key: "pwtpubid",
      val: function () {
        return L.getPublisherId();
      }
    }, {
      key: "pwtprofid",
      val: function () {
        return L.getProfileID();
      }
    }, {
      key: "pwtverid",
      val: function () {
        return L.getProfileDisplayVersionID();
      }
    }, {
      key: "pwtcid",
      val: function (e) {
        return "video" == e.mediaType && e.videoCacheKey ? e.videoCacheKey : "";
      }
    }, {
      key: "pwtcurl",
      val: function (e) {
        return "video" == e.mediaType && e.videoCacheKey ? B.CONFIG.CACHE_URL : "";
      }
    }, {
      key: "pwtcpath",
      val: function (e) {
        return "video" == e.mediaType && e.videoCacheKey ? B.CONFIG.CACHE_PATH : "";
      }
    }, {
      key: "pwtuuid",
      val: function () {
        return "";
      }
    }];
  }
  function R() {
    J !== !1 && (window[z].bidderSettings = {
      standard: {
        suppressEmptyKeys: !0
      }
    }, L.isUsePrebidKeysEnabled() === !1 && (window[z].bidderSettings.standard.adserverTargeting = D()), L.forEachAdapter(function (e) {
      window[z].bidderSettings.hasOwnProperty(e) === !1 && (window[z].bidderSettings[e] = {}, window[z].bidderSettings[e].bidCpmAdjustment = function (t) {
        return window.parseFloat((t * L.getAdapterRevShare(e)).toFixed(B.COMMON.BID_PRECISION));
      });
    }));
  }
  function k(e, t) {
    function i() {
      G.forEachOnArray(t, function (e, t) {
        j.setAllPossibleBidsReceived(t.getDivID());
      });
    }
    G.log("In PreBid bidsBackHandler with bidResponses: "), G.log(e), setTimeout(window[z].triggerUserSyncs, 10), L.getAdServerCurrency() ? setTimeout(i, 300) : i();
  }
  function x() {
    return window[z] ? (window[z].logging = G.isDebugLogEnabled(), Y.realignPubmaticAdapters(), Y.setPrebidConfig(), Y.configureBidderAliasesIfAvailable(), Y.enablePrebidPubMaticAnalyticIfRequired(), Y.setPbjsBidderSettingsIfRequired(), void 0) : (G.logError("PreBid js is not loaded"), void 0);
  }
  function U(e) {
    var t = G.generateUUID();
    if (!window[z]) return G.logError("PreBid js is not loaded"), void 0;
    G.forEachOnArray(e, function (e, i) {
      var n = i.getDivID();
      j.resetBid(n, t), j.setSizes(n, G.generateSlotNamesFromPattern(i, "_W_x_H_"));
    });
    var i = Y.generateAdUnitsArray(e, t);
    if (i.length > 0 && window[z]) try {
      if (!G.isFunction(window[z].requestBids) && "function" != typeof window[z].requestBids) return G.log("PreBid js requestBids function is not available"), void 0;
      G.handleHook(B.HOOKS.PREBID_REQUEST_BIDS, [i]), J === !1 && (Y.addOnBidResponseHandler(), Y.addOnBidRequestHandler()), window[z].removeAdUnit(), window[z].addAdUnits(i), window[z].requestBids({
        bidsBackHandler: function (t) {
          Y.pbjsBidsBackHandler(t, e);
        },
        timeout: L.getTimeout() - B.CONFIG.TIMEOUT_ADJUSTMENT
      });
    } catch (n) {
      G.logError("Error occured in calling PreBid."), G.logError(n);
    }
  }
  function F(e) {
    var t = window[z].getHighestCpmBids([e])[0] || null;
    t && (t.adHtml = t.ad, t.adapterID = t.bidder, t.netEcpm = t.cpm, t.grossEcpm = t.originalCpm);
    var i = {
      wb: t,
      kvp: window[z].getAdserverTargetingForAdUnitCode([e]) || null
    };
    return J && i.kvp.pwtdeal && delete i.kvp.pwtdeal, i;
  }
  var L = i(2),
    B = i(4),
    W = i(5),
    G = i(1),
    j = i(6),
    H = i(3),
    V = B.COMMON.PARENT_ADAPTER_PREBID,
    z = B.COMMON.PREBID_NAMESPACE;
  t.parentAdapterID = V;
  var K = {};
  t.kgpvMap = K;
  var Y = this,
    q = !1,
    J = L.isPrebidPubMaticAnalyticsEnabled(),
    X = L.isSingleImpressionSettingEnabled(),
    Q = B.DEFAULT_ALIASES;
  t.isSingleImpressionSettingEnabled = X, t.transformPBBidToOWBid = n, t.checkAndModifySizeOfKGPVIfRequired = r, t.pbBidStreamHandler = o, t.pbBidRequestHandler = a, t.getPBCodeWithWidthAndHeight = s, t.getPBCodeWithoutWidthAndHeight = d, t.isAdUnitsCodeContainBidder = c, t.generatedKeyCallbackForPbAnalytics = l, t.generatedKeyCallback = u, t.pushAdapterParamsInAdunits = p, t.generatePbConf = g, t.assignSingleRequestConfigForBidders = f, t.assignUserSyncConfig = I, t.assignGdprConfigIfRequired = m, t.assignCcpaConfigIfRequired = _, t.assignCurrencyConfigIfRequired = S, t.assignSchainConfigIfRequired = E, t.configureBidderAliasesIfAvailable = b, t.enablePrebidPubMaticAnalyticIfRequired = h, t.throttleAdapter = w, t.generateAdUnitsArray = P, t.generateConfig = O, t.addOnBidResponseHandler = A, t.addOnBidRequestHandler = y, t.setPrebidConfig = v, t.realignPubmaticAdapters = T, t.gets2sConfig = C, t.getFloorsConfiguration = M, t.checkForYahooSSPBidder = N, t.getPbjsAdServerTargetingConfig = D, t.setPbjsBidderSettingsIfRequired = R, t.pbjsBidsBackHandler = k, t.initPbjsConfig = x, t.fetchBids = U, t.getBid = F;
}, function (e, t, i) {
  var n = i(13),
    r = i(4),
    o = i(14),
    a = this,
    s = r.COMMON.PREBID_NAMESPACE;
  a.setConfig = function () {
    if (o.isFunction(window[s].setConfig) || "function" == typeof window[s].setConfig) {
      if (n.isIdentityOnly()) {
        var e = {
          debug: o.isDebugLogEnabled(),
          userSync: {
            syncDelay: 2e3
          }
        };
        n.getGdpr() && (e.consentManagement || (e.consentManagement = {}), e.consentManagement.gdpr = {
          cmpApi: n.getCmpApi(),
          timeout: n.getGdprTimeout(),
          allowAuctionWithoutConsent: n.getAwc()
        }), n.getCCPA() && (e.consentManagement || (e.consentManagement = {}), e.consentManagement.usp = {
          cmpApi: n.getCCPACmpApi(),
          timeout: n.getCCPATimeout()
        }), window.PWT.ssoEnabled = n.isSSOEnabled() || !1, n.isUserIdModuleEnabled() && (e.userSync.userIds = o.getUserIdConfiguration()), o.handleHook(r.HOOKS.PREBID_SET_CONFIG, [e]), window[s].setConfig(e);
      }
      window[s].requestBids([]);
    }
  }, t.initIdHub = function (e) {
    n.isUserIdModuleEnabled() && (a.setConfig(), n.isIdentityOnly() && (n.getIdentityConsumers().indexOf(r.COMMON.PREBID) > -1 && !o.isUndefined(e[n.PBJS_NAMESPACE]) && !o.isUndefined(e[n.PBJS_NAMESPACE].que) ? (e[n.PBJS_NAMESPACE].que.unshift(function () {
      var t = e[n.PBJS_NAMESPACE].version.split(".");
      if (3 === t.length && (+t[0].split("v")[1] > 3 || "v3" === t[0] && +t[1] >= 3)) o.log("Adding On Event " + e[n.PBJS_NAMESPACE] + ".addAddUnits()"), e[n.PBJS_NAMESPACE].onEvent("addAdUnits", function () {
        o.updateAdUnits(e[n.PBJS_NAMESPACE].adUnits);
      }), e[n.PBJS_NAMESPACE].onEvent("beforeRequestBids", function (e) {
        o.updateAdUnits(e);
      });else {
        o.log("Adding Hook on" + e[n.PBJS_NAMESPACE] + ".addAddUnits()");
        var i = e[n.PBJS_NAMESPACE],
          r = "addAdUnits";
        o.addHookOnFunction(i, !1, r, a.newAddAdUnitFunction);
      }
    }), o.log("Identity Only Enabled and setting config")) : o.logWarning("window.pbjs is undefined")));
  }, t.init = function (e) {
    return o.isObject(e) ? (a.initIdHub(e), !0) : !1;
  };
}, function (e, t, i) {
  var n = i(3),
    r = i(4),
    o = null;
  o = this, o[r.COMMON.OWVERSION] = n[r.CONFIG.COMMON][r.COMMON.OWVERSION], o[r.COMMON.PBVERSION] = n[r.CONFIG.COMMON][r.COMMON.PBVERSION], t.getGdpr = function () {
    var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_CONSENT] || r.CONFIG.DEFAULT_GDPR_CONSENT;
    return "1" === e;
  }, t.getCmpApi = function () {
    return n[r.CONFIG.COMMON][r.CONFIG.GDPR_CMPAPI] || r.CONFIG.DEFAULT_GDPR_CMPAPI;
  }, t.getGdprTimeout = function () {
    var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_TIMEOUT];
    return e ? window.parseInt(e) : r.CONFIG.DEFAULT_GDPR_TIMEOUT;
  }, t.getAwc = function () {
    var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_AWC] || r.CONFIG.DEFAULT_GDPR_AWC;
    return "1" === e;
  }, t.isUserIdModuleEnabled = function () {
    return parseInt(n[r.CONFIG.COMMON][r.COMMON.ENABLE_USER_ID] || r.CONFIG.DEFAULT_USER_ID_MODULE);
  }, t.getIdentityPartners = function () {
    return n[r.COMMON.IDENTITY_PARTNERS];
  }, t.isIdentityOnly = function () {
    return parseInt(n[r.CONFIG.COMMON][r.COMMON.IDENTITY_ONLY] || r.CONFIG.DEFAULT_IDENTITY_ONLY);
  }, t.getIdentityConsumers = function () {
    return (n[r.CONFIG.COMMON][r.COMMON.IDENTITY_CONSUMERS] || "").toLowerCase();
  }, t.getCCPA = function () {
    var e = n[r.CONFIG.COMMON][r.CONFIG.CCPA_CONSENT] || r.CONFIG.DEFAULT_CCPA_CONSENT;
    return "1" === e;
  }, t.getCCPACmpApi = function () {
    return n[r.CONFIG.COMMON][r.CONFIG.CCPA_CMPAPI] || r.CONFIG.DEFAULT_CCPA_CMPAPI;
  }, t.getCCPATimeout = function () {
    var e = n[r.CONFIG.COMMON][r.CONFIG.CCPA_TIMEOUT];
    return e ? window.parseInt(e) : r.CONFIG.DEFAULT_CCPA_TIMEOUT;
  }, t.getProfileID = function () {
    return n.pwt[r.CONFIG.PROFILE_ID] || "0";
  }, t.getProfileDisplayVersionID = function () {
    return n.pwt[r.CONFIG.PROFILE_VERSION_ID] || "0";
  }, t.isSSOEnabled = function () {
    return 1 === parseInt(n[r.CONFIG.COMMON][r.CONFIG.SSO_ENABLED]);
  }, t.PBJS_NAMESPACE = n[r.CONFIG.COMMON][r.COMMON.PBJS_NAMESPACE] || "pbjs";
}, function (e, t, i) {
  function n(e, t) {
    return u.call(e) === "[object " + t + "]";
  }
  var r = i(13),
    o = i(4),
    a = !1;
  t.debugLogIsEnabled = a;
  var s = "Array",
    d = "String",
    c = "Function",
    l = "Number",
    u = Object.prototype.toString,
    p = this;
  p.idsAppendedToAdUnits = !1, t.isA = n, t.isFunction = function (e) {
    return p.isA(e, c);
  }, t.isString = function (e) {
    return p.isA(e, d);
  }, t.isArray = function (e) {
    return p.isA(e, s);
  }, t.isNumber = function (e) {
    return p.isA(e, l);
  }, t.isObject = function (e) {
    return "object" == typeof e && null !== e;
  }, t.isOwnProperty = function (e, t) {
    return p.isObject(e) && e.hasOwnProperty ? Object.prototype.hasOwnProperty.call(e, t) : !1;
  }, t.isUndefined = function (e) {
    return "undefined" == typeof e;
  }, t.enableDebugLog = function () {
    p.debugLogIsEnabled = !0;
  }, t.isDebugLogEnabled = function () {
    return p.debugLogIsEnabled;
  }, t.enableVisualDebugLog = function () {
    p.debugLogIsEnabled = !0, p.visualDebugLogIsEnabled = !0;
  }, t.isEmptyObject = function (e) {
    return p.isObject(e) && 0 === Object.keys(e).length;
  };
  var g = "[OpenWrap] : ",
    f = "[OpenWrap] : [Error]";
  t.log = function (e) {
    p.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.log(new Date().getTime() + " : " + g + e) : console.log(e));
  }, t.logError = function (e) {
    p.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.error(new Date().getTime() + " : " + g + e) : console.error(e));
  }, t.logWarning = function (e) {
    p.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.warn(new Date().getTime() + " : " + g + e) : console.warn(e));
  }, t.error = function (e) {
    console.log(new Date().getTime() + " : " + f, e);
  }, t.forEachOnObject = function (e, t) {
    if (p.isObject(e) && p.isFunction(t)) for (var i in e) p.isOwnProperty(e, i) && t(i, e[i]);
  }, t.getTopFrameOfSameDomain = function (e) {
    try {
      if (e.parent.document != e.document) return p.getTopFrameOfSameDomain(e.parent);
    } catch (t) {}
    return e;
  }, t.metaInfo = {}, t.getMetaInfo = function (e) {
    var t,
      i = {},
      n = 512;
    i.pageURL = "", i.refURL = "", i.protocol = "https://", i.secure = 1, i.isInIframe = p.isIframe(e);
    try {
      t = p.getTopFrameOfSameDomain(e), i.refURL = (t.refurl || t.document.referrer || "").substr(0, n), i.pageURL = (t !== window.top && "" != t.document.referrer ? t.document.referrer : t.location.href).substr(0, n), i.protocol = function (e) {
        return "http:" === e.location.protocol ? (i.secure = 0, "http://") : (i.secure = 1, "https://");
      }(t);
    } catch (r) {}
    return i.pageDomain = p.getDomainFromURL(i.pageURL), p.metaInfo = i, i;
  }, t.isIframe = function (e) {
    try {
      return e.self !== e.top;
    } catch (t) {
      return !1;
    }
  }, t.findQueryParamInURL = function (e, t) {
    return p.isOwnProperty(p.parseQueryParams(e), t);
  }, t.parseQueryParams = function (e) {
    var t = p.createDocElement(window, "a");
    t.href = e;
    var i = {};
    if (t.search) {
      var n = t.search.replace("?", "");
      n = n.split("&"), p.forEachOnArray(n, function (e, t) {
        t = t.split("=");
        var n = t[0] || "",
          r = t[1] || "";
        i[n] = r;
      });
    }
    return i;
  }, t.createDocElement = function (e, t) {
    return e.document.createElement(t);
  }, t.addHookOnFunction = function (e, t, i, n) {
    var r = e;
    if (e = t ? e.__proto__ : e, p.isObject(e) && p.isFunction(e[i])) {
      var o = e[i];
      e[i] = n(r, o);
    } else p.logWarning("in assignNewDefination: oldReference is not a function");
  }, t.getUserIdConfiguration = function () {
    var e = [];
    return owpbjs.onSSOLogin({}), p.forEachOnObject(r.getIdentityPartners(), function (t, i) {
      o.EXCLUDE_PARTNER_LIST.includes(t) || e.push(p.getUserIdParams(i));
    }), p.log(o.MESSAGES.IDENTITY.M4 + JSON.stringify(e)), e;
  }, t.getUserIdParams = function (e) {
    var t = {};
    p.applyDataTypeChangesIfApplicable(e), p.applyCustomParamValuesfApplicable(e);
    for (var i in e) try {
      -1 == o.EXCLUDE_IDENTITY_PARAMS.indexOf(i) && (o.TOLOWERCASE_IDENTITY_PARAMS.indexOf(i) > -1 && (e[i] = e[i].toLowerCase()), o.JSON_VALUE_KEYS.indexOf(i) > -1 && (e[i] = JSON.parse(e[i])), t = p.getNestedObjectFromString(t, ".", i, e[i]));
    } catch (n) {
      p.logWarning(o.MESSAGES.IDENTITY.M3, n);
    }
    return t && t.params && "true" == t.params.loadATS && p.initLiveRampAts(t), t && t.params && "true" == t.params.loadIDP && p.initZeoTapJs(t), t && t.params && "true" == t.params.loadLauncher && p.initLauncherJs(t), t;
  }, t.getUserIds = function () {
    return p.isFunction(window[o.COMMON.PREBID_NAMESPACE].getUserIds) ? window[o.COMMON.PREBID_NAMESPACE].getUserIds() : (p.logWarning("getUserIds" + o.MESSAGES.IDENTITY.M6), void 0);
  }, t.getDomainFromURL = function (e) {
    var t = window.document.createElement("a");
    return t.href = e, t.hostname;
  }, t.handleHook = function (e, t) {
    p.isFunction(window.PWT[e]) && (p.log("For Hook-name: " + e + ", calling window.PWT." + e + "function."), window.PWT[e].apply(window.PWT, t));
  }, t.forEachOnArray = function (e, t) {
    if (p.isArray(e) && p.isFunction(t)) for (var i = 0, n = e.length; n > i; i++) t(i, e[i]);
  }, t.getUserIdsAsEids = function () {
    return p.isFunction(window[o.COMMON.PREBID_NAMESPACE].getUserIdsAsEids) ? window[o.COMMON.PREBID_NAMESPACE].getUserIdsAsEids() : (p.logWarning("getUserIdsAsEids" + o.MESSAGES.IDENTITY.M6), void 0);
  }, t.getNestedObjectFromArray = function (e, t, i) {
    for (var n = e, r = n, o = 0; o < t.length - 1; o++) r[t[o]] || (r[t[o]] = {}), r = r[t[o]];
    return r[t[t.length - 1]] = i, n;
  }, t.getNestedObjectFromString = function (e, t, i, n) {
    var r = i.split(t);
    return 1 == r.length ? e[i] = n : e = p.getNestedObjectFromArray(e, r, n), e;
  }, t.getLiverampParams = function (e) {
    e.params.cssSelectors && e.params.cssSelectors.length > 0 && (e.params.cssSelectors = e.params.cssSelectors.split(","));
    var t = owpbjs.getUserIdentities() || {},
      i = r.isSSOEnabled() || !1,
      n = e.params.detectionMechanism,
      o = "true" === e.params.enableCustomId ? !0 : !1,
      a = {
        placementID: e.params.pid,
        storageType: e.params.storageType,
        logging: e.params.logging
      };
    switch (o && (a.accountID = e.params.accountID, a.customerIDRegex = e.params.customerIDRegex, a.detectionSubject = "customerIdentifier"), n) {
      case void 0:
      case "detect":
        a.detectionType = e.params.detectionType, a.urlParameter = e.params.urlParameter, a.cssSelectors = e.params.cssSelectors, a.detectDynamicNodes = e.params.detectDynamicNodes, a.detectionEventType = e.params.detectionEventType, e.params.triggerElements && e.params.triggerElements.length > 0 && (e.params.triggerElements = e.params.triggerElements.split(","), a.triggerElements = e.params.triggerElements);
        break;
      case "direct":
        var s = i && t.emailHash ? t.emailHash : t.pubProvidedEmailHash ? t.pubProvidedEmailHash : void 0;
        a.emailHashes = s && [s.MD5, s.SHA1, s.SHA256] || void 0, o && p.isFunction(owpbjs.getUserIdentities) && void 0 !== owpbjs.getUserIdentities() && (a.customerID = owpbjs.getUserIdentities().customerID || void 0);
    }
    return a;
  }, t.initLiveRampAts = function (e) {
    function t() {
      var t = document.createElement("script"),
        i = p.getLiverampParams(e);
      t.onload = function () {
        window.ats && window.ats.start(i);
      }, t.src = "https://ats.rlcdn.com/ats.js", document.body.appendChild(t);
    }
    "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.initLauncherJs = function (e) {
    function t() {
      var t = document.createElement("script"),
        i = p.getPublinkLauncherParams(e);
      t.onload = function () {
        window.conversant.getLauncherObject = function () {
          return i;
        }, window.conversant && window.conversant.launch("publink", "start", i);
      }, t.src = "https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher-stub.min.js", document.body.appendChild(t);
    }
    window.cnvr_launcher_options = {
      lid: e.params.launcher_id
    }, "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.getPublinkLauncherParams = function (e) {
    e.params.cssSelectors && e.params.cssSelectors.length > 0 && (e.params.cssSelectors = e.params.cssSelectors.split(","));
    var t = owpbjs.getUserIdentities() || {},
      i = r.isSSOEnabled() || !1,
      n = e.params.detectionMechanism,
      o = {
        apiKey: e.params.api_key,
        siteId: e.params.site_id
      };
    switch (n) {
      case void 0:
      case "detect":
        o.urlParameter = e.params.urlParameter, o.cssSelectors = e.params.cssSelectors, o.detectionSubject = "email";
        break;
      case "direct":
        var a = i && t.emailHash ? t.emailHash : t.pubProvidedEmailHash ? t.pubProvidedEmailHash : void 0;
        o.emailHashes = a && [a.MD5, a.SHA256] || void 0;
    }
    return o;
  }, t.initZeoTapJs = function (e) {
    function t() {
      var t = document,
        i = window,
        n = owpbjs.getUserIdentities() || {},
        o = r.isSSOEnabled() || !1,
        a = {
          email: o && n.emailHash ? n.emailHash.SHA256 : n.pubProvidedEmailHash ? n.pubProvidedEmailHash.SHA256 : void 0
        },
        s = t.createElement("script");
      s.type = "text/javascript", s.crossorigin = "anonymous", s.async = !0, s.src = "https://content.zeotap.com/sdk/idp.min.js", s.onload = function () {}, t = t.getElementsByTagName("script")[0];
      var d = {
        partnerId: e.partnerId,
        allowIDP: !0,
        useConsent: r.getCCPA() || r.getGdpr(),
        checkForCMP: r.getCCPA() || r.getGdpr()
      };
      t.parentNode.insertBefore(s, t), t = i.zeotap || {
        _q: [],
        _qcmp: []
      }, !function (e, t, i) {
        for (var n = 0; n < t.length; n++) !function (t) {
          e[t] = function () {
            e[i].push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }(t[n]);
      }(t, ["callMethod"], "_q"), i.zeotap = t, i.zeotap.callMethod("init", d), i.zeotap.callMethod("setUserIdentities", a, !0);
    }
    "complete" == document.readyState ? t() : window.addEventListener("load", function () {
      setTimeout(t, 1e3);
    });
  }, t.updateAdUnits = function (e) {
    p.isArray(e) ? e.forEach(function (e) {
      e.bids.forEach(function (e) {
        p.updateUserIds(e);
      });
    }) : p.isEmptyObject(e) || e.bids.forEach(function (e) {
      p.updateUserIds(e);
    });
  }, t.updateUserIds = function (e) {
    if (p.isUndefined(e.userId) ? e.userId = p.getUserIds() : e.userId && (e.userId = Object.assign(e.userId, p.getUserIds())), p.isUndefined(e.userIdAsEids)) e.userIdAsEids = p.getUserIdsAsEids();else if (p.isArray(e.userIdAsEids)) {
      var t = new Set(),
        i = p.getUserIdsAsEids().concat(e.userIdAsEids);
      p.isArray(i) && i.length > 0 && (i = i.filter(function (e) {
        if (e.source) {
          if (t.has(e.source)) return !1;
          t.add(e.source);
        }
        return !0;
      })), e.userIdAsEids = i;
    }
  }, t.applyDataTypeChangesIfApplicable = function (e) {
    var t;
    if (e.name in o.SPECIAL_CASE_ID_PARTNERS) for (partnerName in o.SPECIAL_CASE_ID_PARTNERS) if (partnerName === e.name) for (key in o.SPECIAL_CASE_ID_PARTNERS[partnerName]) {
      var i = e[key];
      switch (o.SPECIAL_CASE_ID_PARTNERS[partnerName][key]) {
        case "number":
          i && "number" != typeof i && (t = parseInt(i), isNaN(t) ? p.logError(partnerName + ": Invalid parameter value '" + i + "' for parameter " + key) : e[key] = t);
          break;
        case "array":
          if (i) if ("string" == typeof i) {
            var n = i.split(",").map(function (e) {
              return e.trim();
            });
            n.length > 0 && (e[key] = n);
          } else "number" == typeof i && (e[key] = [i]);
        default:
          return;
      }
    }
  }, t.applyCustomParamValuesfApplicable = function (e) {
    if (e.name in o.ID_PARTNERS_CUSTOM_VALUES) for (var t = o.ID_PARTNERS_CUSTOM_VALUES[e.name], i = 0; i < t.length; i++) e[t[i].key] = t[i].value;
  }, t.getOWConfig = function () {
    var e = {
      openwrap_version: r[o.COMMON.OWVERSION],
      prebid_version: r[o.COMMON.PBVERSION],
      profileId: r.getProfileID(),
      profileVersionId: r.getProfileDisplayVersionID()
    };
    return e;
  };
}, function () {
  !function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    var i = {};
    t.m = e, t.c = i, t.d = function (e, i, n) {
      t.o(e, i) || Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t, i) {
    "use strict";

    var n = i(1),
      r = i(4);
    window.ucTag = window.ucTag || {};
    var o = r.newEnvironment(window),
      a = n.newRenderingManager(window, o);
    window.ucTag.renderAd = a.renderAd;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.newRenderingManager = function (e, t) {
      function i(i, r) {
        var d,
          c,
          l,
          u,
          p = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          g = arguments[3],
          f = arguments[4],
          I = "Prebid_";
        if (p.substr(0, I.length) === I) l = p, u = e.localStorage.getItem(l), s(!0)(u);else {
          var m = "https://" + (void 0 === (d = i) || "" === d ? o : d) + (void 0 === (c = r) || "" === c ? a : c) + "?uuid=" + p;
          if (void 0 !== g && "" !== g) {
            var _ = g.split("x").map(Number);
            !function (i, n) {
              if (t.isSafeFrame()) {
                var r = e.innerWidth,
                  o = e.innerHeight;
                r === i && o === n || (e.$sf.ext.register(i, n, function () {
                  var t = i - r,
                    a = n - o;
                  e.$sf.ext.expand({
                    r: t,
                    b: a,
                    push: !0
                  });
                }), e.parent.postMessage({
                  sentinel: "amp",
                  type: "embed-size",
                  width: i,
                  height: n
                }, "*"));
              }
            }(_[0], _[1]);
          } else console.log("Targeting key hb_size not found to resize creative");
          n.sendRequest(m, s(f));
        }
      }
      function s(t) {
        return function (i) {
          var r = function (e) {
              var t = void 0;
              try {
                t = JSON.parse(e);
              } catch (e) {
                console.log("Error parsing response from cache host: " + e);
              }
              return t;
            }(i),
            o = n.getCreativeCommentMarkup(r),
            a = r.width ? r.width : r.w,
            s = r.height ? r.height : r.h;
          if (r.adm) o += t ? d(r.adm, a, s) : r.adm, r.nurl && (o += n.createTrackPixelHtml(decodeURIComponent(r.nurl))), n.writeAdHtml(o);else if (r.nurl) if (t) {
            var c = n.loadScript(e, r.nurl);
            o += d(c.outerHTML, a, s), n.writeAdHtml(o);
          } else {
            var l = r.nurl,
              u = n.getCreativeComment(r);
            n.insertElement(u, document, "body"), n.writeAdUrl(l, a, s);
          }
          r.burl && n.triggerBurl(r.burl);
        };
      }
      function d(e, t, i) {
        var r = n.getUUID();
        return '<div id="' + r + '" style="border-style: none; position: absolute; width:100%; height:100%;">\n      <div id="' + r + '_inner" style="margin: 0 auto; width:' + t + "; height:" + i + '; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">' + e + "</div>\n      </div>";
      }
      return {
        renderAd: function (o, a) {
          var s = n.transformAuctionTargetingData(a);
          t.isMobileApp(s.env) ? i(s.cacheHost, s.cachePath, s.uuid, s.size, !0) : t.isAmp(s.uuid) ? i(s.cacheHost, s.cachePath, s.uuid, s.size) : t.isCrossDomain() ? function (t) {
            function i(i) {
              var r = i.message ? "message" : "data",
                o = {};
              try {
                o = JSON.parse(i[r]);
              } catch (i) {
                return;
              }
              var a = i.origin || i.originalEvent.origin;
              if (o.message && "Prebid Response" === o.message && d === a && o.adId === t && (o.ad || o.adUrl)) {
                var s = e.document.body,
                  c = o.ad,
                  l = o.adUrl,
                  u = o.width,
                  p = o.height;
                if ("video" === o.mediaType) console.log("Error trying to write ad.");else if (c) {
                  var g = n.getEmptyIframe(o.height, o.width);
                  s.appendChild(g), g.contentDocument.open(), g.contentDocument.write(c), g.contentDocument.close();
                } else if (l) {
                  var f = n.getEmptyIframe(p, u);
                  f.style.display = "inline", f.style.overflow = "hidden", f.src = l, n.insertElement(f, doc, "body");
                } else console.log("Error trying to write ad. No ad for bid response id: " + id);
              }
            }
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
              a = arguments[2],
              s = n.parseUrl(a),
              d = s.protocol + "://" + s.host,
              c = "" !== o ? o : r,
              l = s.protocol + "://" + c;
            e.addEventListener("message", i, !1), u = JSON.stringify({
              message: "Prebid Request",
              adId: t,
              adServerDomain: l
            }), e.parent.postMessage(u, d);
            var u;
          }(s.adId, s.adServerDomain, s.pubUrl) : function (t, i) {
            for (var n = e, r = 0; 10 > r; r++) if ((n = n.parent).pbjs) try {
              n.pbjs.renderAd(t, i);
              break;
            } catch (t) {
              continue;
            }
          }(o, s.adId);
        }
      };
    };
    var n = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t;
      }(i(2)),
      r = "tpc.googlesyndication.com",
      o = "prebid.adnxs.com",
      a = "/pbc/v1/cache";
  }, function (e, t, i) {
    "use strict";

    function n(e, t) {
      var i = document.createElement("iframe");
      return i.setAttribute("frameborder", 0), i.setAttribute("scrolling", "no"), i.setAttribute("marginheight", 0), i.setAttribute("marginwidth", 0), i.setAttribute("TOPMARGIN", 0), i.setAttribute("LEFTMARGIN", 0), i.setAttribute("allowtransparency", "true"), i.setAttribute("width", t), i.setAttribute("height", e), i;
    }
    function r(e, t) {
      return Object.prototype.toString.call(e) === "[object " + t + "]";
    }
    function o(e) {
      return r(e, "String");
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createTrackPixelHtml = function (e) {
      return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' + encodeURI(e) + '"></div>' : "";
    }, t.writeAdUrl = function (e, t, i) {
      var r = n(i, t);
      r.src = e, document.body.appendChild(r);
    }, t.writeAdHtml = function (e) {
      a(document.body, e);
    }, t.sendRequest = function (e, t) {
      var i = new XMLHttpRequest();
      i.addEventListener("load", function () {
        t(i.responseText);
      }), i.open("GET", e), i.send();
    }, t.getEmptyIframe = n, t.getUUID = function () {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var i = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), ("x" === t ? i : 3 & i | 8).toString(16);
      });
    }, t.loadScript = function (e, t, i) {
      var n = e.document,
        r = n.createElement("script");
      r.type = "text/javascript", i && "function" == typeof i && (r.readyState ? r.onreadystatechange = function () {
        "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, i());
      } : r.onload = function () {
        i();
      }), r.src = t;
      var o = n.getElementsByTagName("head");
      return (o = o.length ? o : n.getElementsByTagName("body")).length && (o = o[0]).insertBefore(r, o.firstChild), r;
    }, t.getCreativeComment = function (e) {
      return document.createComment("Creative " + e.crid + " served by Prebid.js Header Bidding");
    }, t.getCreativeCommentMarkup = function (e) {
      var i = t.getCreativeComment(e),
        n = document.createElement("div");
      return n.appendChild(i), n.innerHTML;
    }, t.insertElement = function (e, t, i) {
      t = t || document;
      var n = void 0;
      n = i ? t.getElementsByTagName(i) : t.getElementsByTagName("head");
      try {
        (n = n.length ? n : t.getElementsByTagName("body")).length && (n = n[0]).insertBefore(e, n.firstChild);
      } catch (e) {}
    }, t.triggerBurl = function (e) {
      new Image().src = e;
    }, t.transformAuctionTargetingData = function (e) {
      function t(t) {
        return !(!e[t] || !(r(e[t], "Object") && 0 < Object.keys(e[t]).length || o(e[t]) && "" !== e[t]));
      }
      var i = {
          hb_adid: "adId",
          hb_cache_host: "cacheHost",
          hb_cache_path: "cachePath",
          hb_cache_id: "uuid",
          hb_format: "mediaType",
          hb_env: "env",
          hb_size: "size"
        },
        n = {},
        a = {};
      t("targetingMap") ? (s = e.targetingMap, d = {}, Object.keys(s).forEach(function (e) {
        Array.isArray(s[e]) && 0 < s[e].length && (d[e] = s[e][0]);
      }), a = d) : t("targetingKeywords") && (a = function (e) {
        var t = {},
          i = e.split(",");
        return 0 < i.length && i.forEach(function (e) {
          var i = e.split(":");
          if (2 === i.length) {
            var n = i[0],
              r = i[1];
            t[n] = r;
          }
        }), t;
      }(e.targetingKeywords));
      var s, d;
      return c = a, Object.keys(c).forEach(function (e) {
        var t = i[e] || e;
        n[t] = c[e];
      }), Object.keys(e).forEach(function (t) {
        "targetingMap" !== t && "targetingKeywords" !== t && o(e[t]) && "" !== e[t] && (n[t] = e[t]);
      }), n;
      var c;
    }, t.parseUrl = function (e) {
      var t = document.createElement("a");
      return t.href = decodeURIComponent(e), {
        href: t.href,
        protocol: (t.protocol || "").replace(/:$/, ""),
        hostname: t.hostname,
        port: +t.port,
        pathname: t.pathname.replace(/^(?!\/)/, "/"),
        hash: (t.hash || "").replace(/^#/, ""),
        host: t.host || window.location.host
      };
    };
    var a = i(3);
  }, function (e) {
    var t;
    t = function () {
      return function (e) {
        function t(n) {
          if (i[n]) return i[n].exports;
          var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
          };
          return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
        }
        var i = {};
        return t.m = e, t.c = i, t.p = "", t(0);
      }([function (e, t, i) {
        "use strict";

        var n,
          r = i(1),
          o = (n = r) && n.__esModule ? n : {
            "default": n
          };
        e.exports = o.default;
      }, function (e, t, i) {
        "use strict";

        function n() {}
        function r() {
          var e = g.shift();
          if (e) {
            var t = l.last(e);
            t.afterDequeue(), e.stream = function (e, t, i) {
              function s(e) {
                e = i.beforeWrite(e), f.write(e), i.afterWrite(e);
              }
              (f = new c.default(e, i)).id = p++, f.name = i.name || f.id, o.streams[f.name] = f;
              var d = e.ownerDocument,
                l = {
                  close: d.close,
                  open: d.open,
                  write: d.write,
                  writeln: d.writeln
                };
              a(d, {
                close: n,
                open: n,
                write: function () {
                  for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                  return s(t.join(""));
                },
                writeln: function () {
                  for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                  return s(t.join("") + "\n");
                }
              });
              var u = f.win.onerror || n;
              return f.win.onerror = function (e, t, n) {
                i.error({
                  msg: e + " - " + t + ": " + n
                }), u.apply(f.win, [e, t, n]);
              }, f.write(t, function () {
                a(d, l), f.win.onerror = u, i.done(), f = null, r();
              }), f;
            }.apply(void 0, e), t.afterStreamStart();
          }
        }
        function o(e, t, i) {
          if (l.isFunction(i)) i = {
            done: i
          };else if ("clear" === i) return g = [], f = null, void (p = 0);
          i = l.defaults(i, u);
          var o = [e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e, t, i];
          return e.postscribe = {
            cancel: function () {
              o.stream ? o.stream.abort() : o[1] = n;
            }
          }, i.beforeEnqueue(o), g.push(o), f || r(), e.postscribe;
        }
        t.__esModule = !0;
        var a = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        };
        t.default = o;
        var s,
          d = i(2),
          c = (s = d) && s.__esModule ? s : {
            "default": s
          },
          l = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t;
          }(i(4)),
          u = {
            afterAsync: n,
            afterDequeue: n,
            afterStreamStart: n,
            afterWrite: n,
            autoFix: !0,
            beforeEnqueue: n,
            beforeWriteToken: function (e) {
              return e;
            },
            beforeWrite: function (e) {
              return e;
            },
            done: n,
            error: function (e) {
              throw new Error(e.msg);
            },
            releaseAsync: !1
          },
          p = 0,
          g = [],
          f = null;
        a(o, {
          streams: {},
          queue: g,
          WriteStream: c.default
        });
      }, function (e, t, i) {
        "use strict";

        function n(e, t) {
          var i = l + t,
            n = e.getAttribute(i);
          return c.existy(n) ? String(n) : n;
        }
        function r(e, t) {
          var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
            n = l + t;
          c.existy(i) && "" !== i ? e.setAttribute(n, i) : e.removeAttribute(n);
        }
        t.__esModule = !0;
        var o,
          a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
          s = i(3),
          d = (o = s) && o.__esModule ? o : {
            "default": o
          },
          c = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t;
          }(i(4)),
          l = "data-ps-",
          u = "ps-style",
          p = "ps-script",
          g = function () {
            function e(t) {
              var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.root = t, this.options = i, this.doc = t.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new d.default("", {
                autoFix: i.autoFix
              }), this.actuals = [t], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(t.nodeName), this.scriptStack = [], this.writeQueue = [], r(this.proxyRoot, "proxyof", 0);
            }
            return e.prototype.write = function () {
              var e;
              for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) {
                var t = this.writeQueue.shift();
                c.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
              }
            }, e.prototype._callFunction = function (e) {
              var t = {
                type: "function",
                value: e.name || e.toString()
              };
              this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t);
            }, e.prototype._writeImpl = function (e) {
              this.parser.append(e);
              for (var t = void 0, i = void 0, n = void 0, r = []; (t = this.parser.readToken()) && !(i = c.isScript(t)) && !(n = c.isStyle(t));) (t = this.options.beforeWriteToken(t)) && r.push(t);
              0 < r.length && this._writeStaticTokens(r), i && this._handleScriptToken(t), n && this._handleStyleToken(t);
            }, e.prototype._writeStaticTokens = function (e) {
              var t = this._buildChunk(e);
              return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, this._walkChunk(), t) : null;
            }, e.prototype._buildChunk = function (e) {
              for (var t = this.actuals.length, i = [], n = [], r = [], o = e.length, a = 0; o > a; a++) {
                var s = e[a],
                  d = s.toString();
                if (i.push(d), s.attrs) {
                  if (!/^noscript$/i.test(s.tagName)) {
                    var c = t++;
                    n.push(d.replace(/(\/?>)/, " " + l + "id=" + c + " $1")), s.attrs.id !== p && s.attrs.id !== u && r.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + l + "proxyof=" + c + (s.unary ? " />" : ">"));
                  }
                } else n.push(d), r.push("endTag" === s.type ? d : "");
              }
              return {
                tokens: e,
                raw: i.join(""),
                actual: n.join(""),
                proxy: r.join("")
              };
            }, e.prototype._walkChunk = function () {
              for (var e = void 0, t = [this.proxyRoot]; c.existy(e = t.shift());) {
                var i = 1 === e.nodeType;
                if (!i || !n(e, "proxyof")) {
                  i && r(this.actuals[n(e, "id")] = e, "id");
                  var o = e.parentNode && n(e.parentNode, "proxyof");
                  o && this.actuals[o].appendChild(e);
                }
                t.unshift.apply(t, c.toArray(e.childNodes));
              }
            }, e.prototype._handleScriptToken = function (e) {
              var t = this,
                i = this.parser.clear();
              i && this.writeQueue.unshift(i), e.src = e.attrs.src || e.attrs.SRC, (e = this.options.beforeWriteToken(e)) && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, function () {
                t._onScriptDone(e);
              }));
            }, e.prototype._handleStyleToken = function (e) {
              var t = this.parser.clear();
              t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", (e = this.options.beforeWriteToken(e)) && this._writeStyleToken(e), t && this.write();
            }, e.prototype._writeStyleToken = function (e) {
              var t = this._buildStyle(e);
              this._insertCursor(t, u), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content)));
            }, e.prototype._buildStyle = function (e) {
              var t = this.doc.createElement(e.tagName);
              return t.setAttribute("type", e.type), c.eachKey(e.attrs, function (e, i) {
                t.setAttribute(e, i);
              }), t;
            }, e.prototype._insertCursor = function (e, t) {
              this._writeImpl('<span id="' + t + '"/>');
              var i = this.doc.getElementById(t);
              i && i.parentNode.replaceChild(e, i);
            }, e.prototype._onScriptStart = function (e) {
              e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e);
            }, e.prototype._onScriptDone = function (e) {
              e === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)) : this.options.error({
                msg: "Bad script nesting or script finished twice"
              });
            }, e.prototype._writeScriptToken = function (e, t) {
              var i = this._buildScript(e),
                n = this._shouldRelease(i),
                r = this.options.afterAsync;
              e.src && (i.src = e.src, this._scriptLoadHandler(i, n ? r : function () {
                t(), r();
              }));
              try {
                this._insertCursor(i, p), i.src && !n || t();
              } catch (e) {
                this.options.error(e), t();
              }
            }, e.prototype._buildScript = function (e) {
              var t = this.doc.createElement(e.tagName);
              return c.eachKey(e.attrs, function (e, i) {
                t.setAttribute(e, i);
              }), e.content && (t.text = e.content), t;
            }, e.prototype._scriptLoadHandler = function (e, t) {
              function i() {
                e = e.onload = e.onreadystatechange = e.onerror = null;
              }
              function n() {
                i(), null != t && t(), t = null;
              }
              function r(e) {
                i(), s(e), null != t && t(), t = null;
              }
              function o(e, t) {
                var i = e["on" + t];
                null != i && (e["_on" + t] = i);
              }
              var s = this.options.error;
              o(e, "load"), o(e, "error"), a(e, {
                onload: function () {
                  if (e._onload) try {
                    e._onload.apply(this, Array.prototype.slice.call(arguments, 0));
                  } catch (t) {
                    r({
                      msg: "onload handler failed " + t + " @ " + e.src
                    });
                  }
                  t();
                },
                onerror: function () {
                  if (e._onerror) try {
                    e._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
                  } catch (t) {
                    return void r({
                      msg: "onerror handler failed " + t + " @ " + e.src
                    });
                  }
                  r({
                    msg: "remote script failed " + e.src
                  });
                },
                onreadystatechange: function () {
                  /^(loaded|complete)$/.test(e.readyState) && n();
                }
              });
            }, e.prototype._shouldRelease = function (e) {
              return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"));
            }, e;
          }();
        t.default = g;
      }, function (e) {
        var t;
        t = function () {
          return function (e) {
            function t(n) {
              if (i[n]) return i[n].exports;
              var r = i[n] = {
                exports: {},
                id: n,
                loaded: !1
              };
              return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
            }
            var i = {};
            return t.m = e, t.c = i, t.p = "", t(0);
          }([function (e, t, i) {
            "use strict";

            var n,
              r = i(1),
              o = (n = r) && n.__esModule ? n : {
                "default": n
              };
            e.exports = o.default;
          }, function (e, t, i) {
            "use strict";

            function n(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t.default = e, t;
            }
            t.__esModule = !0;
            var r,
              o = n(i(2)),
              a = n(i(3)),
              s = i(6),
              d = (r = s) && r.__esModule ? r : {
                "default": r
              },
              c = i(5),
              l = {
                comment: /^<!--/,
                endTag: /^<\//,
                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                startTag: /^</,
                chars: /^[^<]/
              },
              u = function () {
                function e() {
                  var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                  !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  }(this, e), this.stream = i;
                  var r = !1,
                    a = {};
                  for (var s in o) o.hasOwnProperty(s) && (n.autoFix && (a[s + "Fix"] = !0), r = r || a[s + "Fix"]);
                  this._peekToken = r ? (this._readToken = d.default(this, a, function () {
                    return t._readTokenImpl();
                  }), d.default(this, a, function () {
                    return t._peekTokenImpl();
                  })) : (this._readToken = this._readTokenImpl, this._peekTokenImpl);
                }
                return e.prototype.append = function (e) {
                  this.stream += e;
                }, e.prototype.prepend = function (e) {
                  this.stream = e + this.stream;
                }, e.prototype._readTokenImpl = function () {
                  var e = this._peekTokenImpl();
                  return e ? (this.stream = this.stream.slice(e.length), e) : void 0;
                }, e.prototype._peekTokenImpl = function () {
                  for (var e in l) if (l.hasOwnProperty(e) && l[e].test(this.stream)) {
                    var t = a[e](this.stream);
                    if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t);
                  }
                }, e.prototype.peekToken = function () {
                  return this._peekToken();
                }, e.prototype.readToken = function () {
                  return this._readToken();
                }, e.prototype.readTokens = function (e) {
                  for (var t = void 0; t = this.readToken();) if (e[t.type] && !1 === e[t.type](t)) return;
                }, e.prototype.clear = function () {
                  var e = this.stream;
                  return this.stream = "", e;
                }, e.prototype.rest = function () {
                  return this.stream;
                }, e;
              }();
            for (var p in (t.default = u).tokenToString = function (e) {
              return e.toString();
            }, u.escapeAttributes = function (e) {
              var t = {};
              for (var i in e) e.hasOwnProperty(i) && (t[i] = c.escapeQuotes(e[i], null));
              return t;
            }, u.supports = o) o.hasOwnProperty(p) && (u.browserHasFlaw = u.browserHasFlaw || !o[p] && p);
          }, function (e, t) {
            "use strict";

            var i = !(t.__esModule = !0),
              n = !1,
              r = window.document.createElement("div");
            try {
              var o = "<P><I></P></I>";
              r.innerHTML = o, t.tagSoup = i = r.innerHTML !== o;
            } catch (e) {
              t.tagSoup = i = !1;
            }
            try {
              r.innerHTML = "<P><i><P></P></i></P>", t.selfClose = n = 2 === r.childNodes.length;
            } catch (e) {
              t.selfClose = n = !1;
            }
            r = null, t.tagSoup = i, t.selfClose = n;
          }, function (e, t, i) {
            "use strict";

            function n(e) {
              var t, i, n;
              if (-1 !== e.indexOf(">")) {
                var s = e.match(a.startTag);
                if (s) {
                  var d = (t = {}, i = {}, n = s[2], s[2].replace(a.attr, function (e, r) {
                    arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (t[arguments[5]] = "", i[arguments[5]] = !0) : t[r] = arguments[2] || arguments[3] || arguments[4] || a.fillAttr.test(r) && r || "" : t[r] = "", n = n.replace(e, "");
                  }), {
                    v: new o.StartTagToken(s[1], s[0].length, t, i, !!s[3], n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                  });
                  if ("object" === (void 0 === d ? "undefined" : r(d))) return d.v;
                }
              }
            }
            t.__esModule = !0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            t.comment = function (e) {
              var t = e.indexOf("-->");
              return t >= 0 ? new o.CommentToken(e.substr(4, t - 1), t + 3) : void 0;
            }, t.chars = function (e) {
              var t = e.indexOf("<");
              return new o.CharsToken(t >= 0 ? t : e.length);
            }, t.startTag = n, t.atomicTag = function (e) {
              var t = n(e);
              if (t) {
                var i = e.slice(t.length);
                if (i.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                  var r = i.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                  if (r) return new o.AtomicTagToken(t.tagName, r[0].length + t.length, t.attrs, t.booleanAttrs, r[1]);
                }
              }
            }, t.endTag = function (e) {
              var t = e.match(a.endTag);
              return t ? new o.EndTagToken(t[1], t[0].length) : void 0;
            };
            var o = i(4),
              a = {
                startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
              };
          }, function (e, t, i) {
            "use strict";

            function n(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0;
            var r = i(5);
            t.Token = function a(e, t) {
              n(this, a), this.type = e, this.length = t, this.text = "";
            }, t.CommentToken = function () {
              function e(t, i) {
                n(this, e), this.type = "comment", this.length = i || (t ? t.length : 0), this.text = "", this.content = t;
              }
              return e.prototype.toString = function () {
                return "<!--" + this.content;
              }, e;
            }(), t.CharsToken = function () {
              function e(t) {
                n(this, e), this.type = "chars", this.length = t, this.text = "";
              }
              return e.prototype.toString = function () {
                return this.text;
              }, e;
            }();
            var o = t.TagToken = function () {
              function e(t, i, r, o, a) {
                n(this, e), this.type = t, this.length = r, this.text = "", this.tagName = i, this.attrs = o, this.booleanAttrs = a, this.unary = !1, this.html5Unary = !1;
              }
              return e.formatTag = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                  i = "<" + e.tagName;
                for (var n in e.attrs) if (e.attrs.hasOwnProperty(n)) {
                  i += " " + n;
                  var o = e.attrs[n];
                  void 0 !== e.booleanAttrs && void 0 !== e.booleanAttrs[n] || (i += '="' + r.escapeQuotes(o) + '"');
                }
                return e.rest && (i += " " + e.rest), i += e.unary && !e.html5Unary ? "/>" : ">", null != t && (i += t + "</" + e.tagName + ">"), i;
              }, e;
            }();
            t.StartTagToken = function () {
              function e(t, i, r, o, a, s) {
                n(this, e), this.type = "startTag", this.length = i, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.html5Unary = !1, this.unary = a, this.rest = s;
              }
              return e.prototype.toString = function () {
                return o.formatTag(this);
              }, e;
            }(), t.AtomicTagToken = function () {
              function e(t, i, r, o, a) {
                n(this, e), this.type = "atomicTag", this.length = i, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.unary = !1, this.html5Unary = !1, this.content = a;
              }
              return e.prototype.toString = function () {
                return o.formatTag(this, this.content);
              }, e;
            }(), t.EndTagToken = function () {
              function e(t, i) {
                n(this, e), this.type = "endTag", this.length = i, this.text = "", this.tagName = t;
              }
              return e.prototype.toString = function () {
                return "</" + this.tagName + ">";
              }, e;
            }();
          }, function (e, t) {
            "use strict";

            t.__esModule = !0, t.escapeQuotes = function (e) {
              var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
              return e ? e.replace(/([^"]*)"/g, function (e, t) {
                return /\\/.test(t) ? t + '"' : t + '\\"';
              }) : t;
            };
          }, function (e, t) {
            "use strict";

            function i(e) {
              return e && "startTag" === e.type && (e.unary = r.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e;
            }
            function n(e, t) {
              var i = t.pop();
              e.prepend("</" + i.tagName + ">");
            }
            t.__esModule = !0, t.default = function (e, t, r) {
              function a() {
                var t,
                  n,
                  o,
                  a,
                  s = (n = r, o = (t = e).stream, a = i(n()), t.stream = o, a);
                s && c[s.type] && c[s.type](s);
              }
              var s,
                d = (s = [], s.last = function () {
                  return this[this.length - 1];
                }, s.lastTagNameEq = function (e) {
                  var t = this.last();
                  return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase();
                }, s.containsTagName = function (e) {
                  for (var t, i = 0; t = this[i]; i++) if (t.tagName === e) return !0;
                  return !1;
                }, s),
                c = {
                  startTag: function (i) {
                    var r = i.tagName;
                    "TR" === r.toUpperCase() && d.lastTagNameEq("TABLE") ? (e.prepend("<TBODY>"), a()) : t.selfCloseFix && o.test(r) && d.containsTagName(r) ? d.lastTagNameEq(r) ? n(e, d) : (e.prepend("</" + i.tagName + ">"), a()) : i.unary || d.push(i);
                  },
                  endTag: function (i) {
                    var o = d.last();
                    o ? t.tagSoupFix && !d.lastTagNameEq(i.tagName) ? n(e, d) : d.pop() : t.tagSoupFix && (r(), a());
                  }
                };
              return function () {
                return a(), i(r());
              };
            };
            var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
              o = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
          }]);
        }, e.exports = t();
      }, function (e, t) {
        "use strict";

        function i(e) {
          return null != e;
        }
        function n(e, t, i) {
          var n = void 0,
            r = e && e.length || 0;
          for (n = 0; r > n; n++) t.call(i, e[n], n);
        }
        function r(e, t, i) {
          for (var n in e) e.hasOwnProperty(n) && t.call(i, n, e[n]);
        }
        function o(e, t) {
          return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e) || !~e.tagName.toLowerCase().indexOf(t));
        }
        t.__esModule = !0;
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.existy = i, t.isFunction = function (e) {
          return "function" == typeof e;
        }, t.each = n, t.eachKey = r, t.defaults = function (e, t) {
          return e = e || {}, r(t, function (t, n) {
            i(e[t]) || (e[t] = n);
          }), e;
        }, t.toArray = function (e) {
          try {
            return Array.prototype.slice.call(e);
          } catch (t) {
            var i = (r = [], n(e, function (e) {
              r.push(e);
            }), {
              v: r
            });
            if ("object" === (void 0 === i ? "undefined" : a(i))) return i.v;
          }
          var r;
        }, t.last = function (e) {
          return e[e.length - 1];
        }, t.isTag = o, t.isScript = function (e) {
          return o(e, "script");
        }, t.isStyle = function (e) {
          return o(e, "style");
        };
      }]);
    }, e.exports = t();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.newEnvironment = function (e) {
      function t() {
        return e.top !== e && !function (e) {
          try {
            e.top.location.toString();
            for (var t = void 0; (t = t ? t.parent : e) !== e.top;);
            return !0;
          } catch (e) {
            return !1;
          }
        }(e);
      }
      return {
        isMobileApp: function (e) {
          return e && "mobile-app" === e;
        },
        isCrossDomain: t,
        isSafeFrame: function () {
          return !(!e.$sf || !e.$sf.ext);
        },
        isAmp: function (e) {
          return "string" == typeof e && "" !== e && t();
        }
      };
    };
  }]);
}]);
window.clearTimeout = wrapFunctionWithLogging('clearTimeout', nativeClearTimeout);
(function () {
  function toBrandVersion(brand, version) {
    var bv = {
      brand: brand
    };
    if (typeof version == "string" && version.length) {
      bv.version = version.split('.');
    }
    return bv;
  }
  var HIGH_ENTROPY_HINTS = owpbjs.getConfig('firstPartyData.uaHints') || ['architecture', 'bitness', 'model', 'platformVersion', 'fullVersionList'];
  var sua = window.navigator && window.navigator.userAgentData && window.navigator.userAgentData.toJSON();
  if (sua) {
    if (HIGH_ENTROPY_HINTS.length == 0) {
      sua.source = 1;
      owpbjs.mergeConfig({
        device: {
          sua: sua
        }
      });
    } else {
      window.navigator.userAgentData.getHighEntropyValues(HIGH_ENTROPY_HINTS).then(result => {
        var uaData = {
          source: 2
        };
        if (result.platform) {
          uaData.platform = toBrandVersion(result.platform, result.platformVersion);
        }
        if (result.fullVersionList || result.brands) {
          uaData.browsers = (result.fullVersionList || result.brands).map(({
            brand,
            version
          }) => toBrandVersion(brand, version));
        }
        if (result.hasOwnProperty('mobile')) {
          uaData.mobile = uaData.mobile ? 1 : 0;
        }
        ['model', 'bitness', 'architecture'].forEach(prop => {
          var value = result[prop];
          if (typeof value == 'string') {
            uaData[prop] = value;
          }
        });
        owpbjs.mergeConfig({
          device: {
            sua: uaData
          }
        });
      });
    }
  }
})();
if (typeof window.PWT === "object" && typeof window.PWT.jsLoaded === "function") {
  window.PWT.jsLoaded();
}
Element.prototype.addEventListener = function (eventType, callback, useCapture) {
  const wrapper = function (e) {
    const callerInfo = {
      url: window.location.href,
      lineNumber: e.line || '',
      columnNumber: e.column || ''
    };
    sendEventToServer(buildEvent('addEventListener', {
      eventType,
      useCapture
    }, callerInfo));
    callback.apply(this, arguments);
  };
  nativeAddEventListener.call(this, eventType, wrapper, useCapture);
};
Object.defineProperty(window, 'localStorage', {
  get: function () {
    sendEventToServer(buildEvent('localStorage', {}, {
      url: window.location.href
    }));
    return nativeLocalStorage;
  }
});
Object.defineProperty(document, 'cookie', {
  get: function () {
    sendEventToServer(buildEvent('getCookie', {}, {
      url: window.location.href
    }));
    return nativeDocument.cookie;
  },
  set: function (val) {
    sendEventToServer(buildEvent('setCookie', {
      val
    }, {
      url: window.location.href
    }));
    nativeDocument.cookie = val;
  }
});