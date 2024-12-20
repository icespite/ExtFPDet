/*! v4515 a67409d3 */
var __dv_global_script_start_time__ = "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : void 0,
  __webpack_modules__ = {
    2328: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DATA_NODE_KEY = t.MONITORING_TAG_ON_TOP_LEVEL_KEY = t.TRACKING_RATE_KEY = t.TRACKING_EVENT_CATEGORY = t.TRACKING_BASE_URL = t.MAX_WINDOW_DEPTH = void 0, t.MAX_WINDOW_DEPTH = 20, t.TRACKING_BASE_URL = "https://vtrk.doubleverify.com", t.TRACKING_EVENT_CATEGORY = "data-transparency", t.TRACKING_RATE_KEY = "dv-data-transparency-tracking-rate", t.MONITORING_TAG_ON_TOP_LEVEL_KEY = "dv-data-transparency-top-level-monitoring", t.DATA_NODE_KEY = "dv-data-transparency-data-node";
    },
    9522: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Container = void 0;
      var i = function () {
        function e() {
          this.container = {};
        }
        return Object.defineProperty(e.prototype, "size", {
          get: function () {
            return Object.keys(this.container).length;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.isEmpty = function () {
          return 0 === this.size;
        }, e.prototype.clear = function () {
          this.container = {};
        }, e.prototype.get = function (e) {
          if (void 0 === this.container[e]) throw new Error("undefined container item: " + e);
          return this.container[e];
        }, e.prototype.set = function (e, t) {
          if (void 0 === t) throw new Error("cannot store undefined in container: " + e);
          this.container[e] = t;
        }, e;
      }();
      t.Container = i;
    },
    443: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.coverageToBitFlag = void 0;
      t.coverageToBitFlag = function (e) {
        return (e.sellerPageTag ? 1 : 0) | (e.sellerMonitoringTag ? 2 : 0) | (e.buyerMonitoringTag ? 4 : 0);
      };
    },
    1064: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getAncestorWindows = void 0;
      var r = i(2328),
        a = function (e, t, i, r) {
          if (!(i >= r || e === e.top)) {
            var n = e.parent;
            n !== e && (t.unshift(n), a(n, t, i + 1, r));
          }
        };
      t.getAncestorWindows = function (e, t) {
        void 0 === t && (t = r.MAX_WINDOW_DEPTH);
        var i = [];
        try {
          a(e, i, 0, t);
        } catch (e) {}
        return i;
      };
    },
    1665: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getCorrespondentWindow = void 0;
      var r = i(1064);
      t.getCorrespondentWindow = function (e, t) {
        var i = (0, r.getAncestorWindows)(e);
        return i.length === t ? e : i.length > t ? i[t] : null;
      };
    },
    6172: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getCurrentTimestamp = void 0;
      t.getCurrentTimestamp = function () {
        var e, t;
        try {
          return null !== (t = null === (e = null === Date || void 0 === Date ? void 0 : Date.now) || void 0 === e ? void 0 : e.call(Date)) && void 0 !== t ? t : 0;
        } catch (e) {}
        return 0;
      };
    },
    8839: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getDescendantWindows = void 0;
      var r = i(2328),
        a = function (e, t, i, r) {
          if (!(i >= r)) for (var n = 0; n < e.length; n++) {
            var s = e[n];
            t.push(s), a(s, t, i + 1, r);
          }
        };
      t.getDescendantWindows = function (e, t) {
        void 0 === t && (t = r.MAX_WINDOW_DEPTH);
        var i = [];
        try {
          a(e, i, 0, t);
        } catch (e) {}
        return i;
      };
    },
    135: function (e, t, i) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, i, r) {
          void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function () {
              return t[i];
            }
          });
        } : function (e, t, i, r) {
          void 0 === r && (r = i), e[r] = t[i];
        }),
        a = this && this.__exportStar || function (e, t) {
          for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validateWindow = t.getDescendantWindows = t.getCurrentTimestamp = t.getCorrespondentWindow = t.getAncestorWindows = t.coverageToBitFlag = t.Container = void 0, a(i(2328), t);
      var n = i(9522);
      Object.defineProperty(t, "Container", {
        enumerable: !0,
        get: function () {
          return n.Container;
        }
      });
      var s = i(443);
      Object.defineProperty(t, "coverageToBitFlag", {
        enumerable: !0,
        get: function () {
          return s.coverageToBitFlag;
        }
      });
      var o = i(1064);
      Object.defineProperty(t, "getAncestorWindows", {
        enumerable: !0,
        get: function () {
          return o.getAncestorWindows;
        }
      });
      var d = i(1665);
      Object.defineProperty(t, "getCorrespondentWindow", {
        enumerable: !0,
        get: function () {
          return d.getCorrespondentWindow;
        }
      });
      var l = i(6172);
      Object.defineProperty(t, "getCurrentTimestamp", {
        enumerable: !0,
        get: function () {
          return l.getCurrentTimestamp;
        }
      });
      var c = i(8839);
      Object.defineProperty(t, "getDescendantWindows", {
        enumerable: !0,
        get: function () {
          return c.getDescendantWindows;
        }
      });
      var u = i(7924);
      Object.defineProperty(t, "validateWindow", {
        enumerable: !0,
        get: function () {
          return u.validateWindow;
        }
      });
    },
    7924: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validateWindow = void 0;
      t.validateWindow = function (e) {
        try {
          return null != e && null != e.top && null != e.parent && null != e.length && e.window === e && "function" == typeof e.postMessage;
        } catch (e) {
          return !1;
        }
      };
    },
    6777: function (e, t, i) {
      "use strict";

      var r = this && this.__values || function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            r = 0;
          if (i) return i.call(e);
          if (e && "number" == typeof e.length) return {
            next: function () {
              return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        },
        a = this && this.__read || function (e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var r,
            a,
            n = i.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = n.next()).done;) s.push(r.value);
          } catch (e) {
            a = {
              error: e
            };
          } finally {
            try {
              r && !r.done && (i = n.return) && i.call(n);
            } finally {
              if (a) throw a.error;
            }
          }
          return s;
        },
        n = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var r, a = 0, n = t.length; a < n; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
          return e.concat(r || Array.prototype.slice.call(t));
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DataNode = void 0;
      var s = i(135),
        o = i(6240),
        d = i(2749),
        l = i(4419),
        c = function () {
          function e(e, t) {
            void 0 === t && (t = !1), this.sharedState = (0, l.getEmptyState)(), this.correspondents = [], this.localTagSubscriptions = [], this.dispatchMessageListeners = [], this.hostWindow = e, this.hostWindowDepth = (0, s.getAncestorWindows)(this.hostWindow).length, this.hubWindow = this.hostWindow, this.hubWindowDepth = this.hostWindowDepth, this.broadcastingDisabled = t;
          }
          return Object.defineProperty(e.prototype, "depth", {
            get: function () {
              return this.hostWindowDepth;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onDispatchMessage", {
            set: function (e) {
              this.dispatchMessageListeners.push(e);
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.isHub = function () {
            return this.hubWindow === this.hostWindow;
          }, e.prototype.isAllowedToCorrespond = function () {
            return this.localTagSubscriptions.length > 0;
          }, e.prototype.mergeState = function (e) {
            var t = (0, o.updateSharedState)(this.sharedState, e),
              i = t.newState,
              r = t.stateWasUpdated,
              a = t.inputWasIncomplete;
            return this.sharedState = i, {
              stateWasUpdated: r,
              inputWasIncomplete: a
            };
          }, e.prototype.composeMessage = function (e) {
            return void 0 === e && (e = !1), {
              sharedState: (0, d.copyState)(this.sharedState),
              source: {
                windowDepth: this.hostWindowDepth,
                canBecomeHub: !0,
                responseRequired: e
              }
            };
          }, e.prototype.registerCorrespondent = function (e, t, i) {
            e === this.hostWindow || this.correspondents.includes(e) || (this.correspondents.push(e), i && (null == this.hubWindow || t < this.hubWindowDepth) && (this.hubWindow = e, this.hubWindowDepth = t));
          }, e.prototype.dispatchMessage = function (e, t) {
            var i, a, n, o;
            if (0 !== t.length) {
              var d = {
                command: "data-transparency-update",
                payload: e,
                timestamp: (0, s.getCurrentTimestamp)()
              };
              try {
                for (var l = r(t), c = l.next(); !c.done; c = l.next()) {
                  var u = c.value;
                  try {
                    u.postMessage(d, "*");
                  } catch (e) {}
                }
              } catch (e) {
                i = {
                  error: e
                };
              } finally {
                try {
                  c && !c.done && (a = l.return) && a.call(l);
                } finally {
                  if (i) throw i.error;
                }
              }
              try {
                for (var p = r(this.dispatchMessageListeners), h = p.next(); !h.done; h = p.next()) {
                  (0, h.value)(d, t);
                }
              } catch (e) {
                n = {
                  error: e
                };
              } finally {
                try {
                  h && !h.done && (o = p.return) && o.call(p);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          }, e.prototype.notifyLocalTags = function () {
            var e, t;
            try {
              for (var i = r(this.localTagSubscriptions), a = i.next(); !a.done; a = i.next()) {
                (0, a.value)(this.sharedState);
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                a && !a.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }, e.prototype.notifyAllowedCorrespondents = function (e) {
            if (this.isAllowedToCorrespond()) {
              var t = [];
              this.isHub() ? t.push.apply(t, n([], a(this.correspondents.filter(function (t) {
                return t !== e;
              })), !1)) : this.hubWindow !== e && t.push(this.hubWindow), this.dispatchMessage(this.composeMessage(), t);
            }
          }, e.prototype.notifyCorrespondent = function (e) {
            this.isAllowedToCorrespond() && this.dispatchMessage(this.composeMessage(), [e]);
          }, e.prototype.broadCastState = function () {
            var e = this;
            if (!this.broadcastingDisabled && this.isAllowedToCorrespond()) if (this.notifyAllowedCorrespondents(), this.isHub()) this.dispatchMessage(this.composeMessage(!0), n(n([], a((0, s.getAncestorWindows)(this.hostWindow)), !1), a((0, s.getDescendantWindows)(this.hostWindow)), !1).filter(function (t) {
              return !e.correspondents.includes(t);
            }));else {
              var t = (0, s.getAncestorWindows)(this.hubWindow);
              t.length > 0 && this.dispatchMessage(this.composeMessage(!0), t);
            }
          }, e.prototype.ingestMessageFromCorrespondent = function (e, t) {
            var i = e.sharedState,
              r = e.source,
              a = (0, s.getCorrespondentWindow)(t, r.windowDepth);
            if (null != a) {
              this.registerCorrespondent(a, r.windowDepth, r.canBecomeHub);
              var n = this.mergeState(i),
                o = n.stateWasUpdated,
                d = n.inputWasIncomplete;
              o && (this.notifyLocalTags(), this.isHub() && this.notifyAllowedCorrespondents(a));
              var l = this.isHub() && d,
                c = this.isHub() && r.responseRequired,
                u = a === this.hubWindow && r.responseRequired;
              (l || c || u) && this.notifyCorrespondent(a);
            }
          }, e.prototype.registerLocalTagAndSubscribe = function (e, t) {
            void 0 === t && (t = function () {});
            var i = this.mergeState(e).stateWasUpdated,
              r = 0 === this.localTagSubscriptions.length;
            this.localTagSubscriptions.includes(t) || this.localTagSubscriptions.push(t), i ? this.notifyLocalTags() : t(this.sharedState), r ? this.broadCastState() : i && this.notifyAllowedCorrespondents();
          }, e;
        }();
      t.DataNode = c;
    },
    4614: function (e, t, i) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, i, r) {
          void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function () {
              return t[i];
            }
          });
        } : function (e, t, i, r) {
          void 0 === r && (r = i), e[r] = t[i];
        }),
        a = this && this.__exportStar || function (e, t) {
          for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i);
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), a(i(6777), t), a(i(8119), t), a(i(6240), t), a(i(3665), t);
    },
    8119: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    457: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.compareLinkingPriority = void 0;
      t.compareLinkingPriority = function (e, t) {
        return e.sharedId === t.sharedId ? 0 : null == e.sharedId ? 2 : null == t.sharedId ? 1 : e.depth > t.depth ? 2 : e.depth < t.depth ? 1 : e.sharedId > t.sharedId ? 2 : 1;
      };
    },
    5208: function (e, t) {
      "use strict";

      var i = this && this.__read || function (e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r,
          a,
          n = i.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = n.next()).done;) s.push(r.value);
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            r && !r.done && (i = n.return) && i.call(n);
          } finally {
            if (a) throw a.error;
          }
        }
        return s;
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.compareRecordPriority = void 0;
      t.compareRecordPriority = function (e, t, r) {
        return null != e && null != t ? function (e, t) {
          return Object.entries(e).every(function (e) {
            var r = i(e, 2),
              a = r[0],
              n = r[1];
            return t[a] === n;
          });
        }(e, t) ? 0 : r : null == e && null == t ? 0 : null == t ? 1 : 2;
      };
    },
    6240: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.updateSharedState = void 0;
      var r = i(9276);
      Object.defineProperty(t, "updateSharedState", {
        enumerable: !0,
        get: function () {
          return r.updateSharedState;
        }
      });
    },
    9276: function (e, t, i) {
      "use strict";

      var r = this && this.__assign || function () {
          return r = Object.assign || function (e) {
            for (var t, i = 1, r = arguments.length; i < r; i++) for (var a in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }, r.apply(this, arguments);
        },
        a = this && this.__values || function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            r = 0;
          if (i) return i.call(e);
          if (e && "number" == typeof e.length) return {
            next: function () {
              return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.updateSharedState = void 0;
      var n = i(2749),
        s = i(457),
        o = i(5208);
      t.updateSharedState = function (e, t) {
        var i,
          d,
          l = {
            newState: (0, n.copyState)(e),
            stateWasUpdated: !1,
            inputWasIncomplete: !1
          },
          c = (0, s.compareLinkingPriority)(e.linking, t.linking);
        2 === c ? (l.stateWasUpdated = !0, l.newState.linking = r({}, t.linking)) : 1 === c && (l.inputWasIncomplete = !0);
        try {
          for (var u = a(Object.keys(e.coverage)), p = u.next(); !p.done; p = u.next()) {
            var h = p.value;
            t.coverage[h] ? e.coverage[h] || (l.stateWasUpdated = !0, l.newState.coverage[h] = !0) : e.coverage[h] && (l.inputWasIncomplete = !0);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (d = u.return) && d.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
        var g = (0, o.compareRecordPriority)(e.visit, t.visit, c);
        2 === g ? (l.stateWasUpdated = !0, l.newState.visit = r({}, t.visit)) : 1 === g && (l.inputWasIncomplete = !0);
        var m = (0, o.compareRecordPriority)(e.sellerDimensions, t.sellerDimensions, c);
        return 2 === m ? (l.stateWasUpdated = !0, l.newState.sellerDimensions = r({}, t.sellerDimensions)) : 1 === m && (l.inputWasIncomplete = !0), l;
      };
    },
    2749: function (e, t) {
      "use strict";

      var i = this && this.__assign || function () {
        return i = Object.assign || function (e) {
          for (var t, i = 1, r = arguments.length; i < r; i++) for (var a in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }, i.apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.copyState = void 0;
      t.copyState = function (e) {
        var t = {
          linking: i({}, e.linking),
          coverage: i({}, e.coverage)
        };
        return null != e.visit && (t.visit = i({}, e.visit)), null != e.sellerDimensions && (t.sellerDimensions = i({}, e.sellerDimensions)), t;
      };
    },
    4419: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getEmptyState = void 0;
      var r = i(135);
      t.getEmptyState = function () {
        return {
          linking: {
            sharedId: null,
            depth: 0,
            timestamp: (0, r.getCurrentTimestamp)()
          },
          coverage: {
            sellerPageTag: !1,
            sellerMonitoringTag: !1,
            buyerMonitoringTag: !1
          }
        };
      };
    },
    3665: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validateSharedState = t.validateMessageData = void 0;
      var r = i(5571);
      Object.defineProperty(t, "validateMessageData", {
        enumerable: !0,
        get: function () {
          return r.validateMessageData;
        }
      });
      var a = i(1149);
      Object.defineProperty(t, "validateSharedState", {
        enumerable: !0,
        get: function () {
          return a.validateSharedState;
        }
      });
    },
    5571: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validateMessageData = void 0;
      var r = i(1149);
      t.validateMessageData = function (e) {
        var t = e.command,
          i = e.payload,
          a = e.timestamp;
        if ("data-transparency-update" !== t || null == i || "number" != typeof a) return !1;
        var n = i.sharedState,
          s = i.source;
        return null != n && (0, r.validateSharedState)(n) && (null == s || "number" == typeof s.windowDepth && "boolean" == typeof s.responseRequired);
      };
    },
    1149: function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validateSharedState = void 0;
      t.validateSharedState = function (e) {
        return null != e.linking && (null == e.linking.sharedId || "string" == typeof e.linking.sharedId) && "number" == typeof e.linking.depth && "number" == typeof e.linking.timestamp && null != e.coverage && "boolean" == typeof e.coverage.sellerPageTag && "boolean" == typeof e.coverage.sellerMonitoringTag && "boolean" == typeof e.coverage.buyerMonitoringTag && (null == e.visit || "string" == typeof e.visit.pageUrl && "string" == typeof e.visit.userAgent) && (null == e.sellerDimensions || Object.values(e.sellerDimensions).every(function (e) {
          return "string" == typeof e;
        }));
      };
    },
    659: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.subscribe = t.initialize = t.coverageToBitFlag = void 0;
      var r = i(135),
        a = i(4614),
        n = i(422),
        s = i(135);
      Object.defineProperty(t, "coverageToBitFlag", {
        enumerable: !0,
        get: function () {
          return s.coverageToBitFlag;
        }
      });
      t.initialize = function (e) {
        try {
          (0, n.maybeInitializeDataNode)(e);
        } catch (e) {}
      };
      t.subscribe = function (e, t, i) {
        var s;
        try {
          s = (0, n.maybeInitializeDataNode)(e);
        } catch (e) {
          return;
        }
        if (null != s) {
          var o = {
            linking: {
              sharedId: i.impressionId,
              depth: s.depth,
              timestamp: (0, r.getCurrentTimestamp)()
            },
            coverage: {
              sellerPageTag: !1,
              sellerMonitoringTag: i.isSellerTag,
              buyerMonitoringTag: !i.isSellerTag
            },
            sellerDimensions: i.sellerDimensions
          };
          try {
            (0, a.validateSharedState)(o) && s.registerLocalTagAndSubscribe(o, t);
          } catch (e) {}
        }
      };
    },
    422: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.maybeInitializeDataNode = void 0;
      var r,
        a = i(135),
        n = i(4614),
        s = i(8266),
        o = (r = !1, function (e) {
          if (!r) {
            r = !0;
            try {
              var t = e[a.MONITORING_TAG_ON_TOP_LEVEL_KEY];
              null != t && t();
            } catch (e) {}
          }
        });
      t.maybeInitializeDataNode = function (e) {
        if (!(0, a.validateWindow)(e)) return null;
        if (e === e.top) return o(e), null;
        var t = e[a.DATA_NODE_KEY];
        return null == t && (t = new n.DataNode(e), (0, s.setMessageListener)(e, t), e[a.DATA_NODE_KEY] = t), t;
      };
    },
    8266: function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setMessageListener = void 0;
      var r = i(135),
        a = i(4614);
      t.setMessageListener = function (e, t) {
        try {
          e.addEventListener("message", function (e) {
            (0, r.validateWindow)(e.source) && (0, a.validateMessageData)(e.data) && t.ingestMessageFromCorrespondent(e.data.payload, e.source);
          });
        } catch (e) {}
      };
    },
    2258: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.sellerTag = t.defaultAdLocators = void 0;
      const r = i(9171),
        a = i(1153),
        n = i(5906),
        s = i(1634),
        o = i(9969),
        d = i(8476),
        l = i(7257),
        c = i(6018),
        u = i(3820),
        p = i(7571),
        h = i(4620),
        g = i(4816),
        m = i(6707),
        v = i(172),
        b = i(554),
        y = i(8066),
        f = i(4846),
        w = i(9260),
        D = i(8130),
        E = i(677),
        S = i(7898),
        A = i(9443).CustomAdLocatorsFeatureFlag.isEnabled();
      t.defaultAdLocators = [A ? r.CustomRegexAdLocator : a.RegexAdLocator, A ? n.CustomMediaplexAdLocator : s.MediaplexAdLocator, o.FindClassAdLocator, d.IntegratedCeltraAdLocator, l.NonIntegratedCeltraAdLocator, c.ParentWindowAdLocator, u.NearestAdAdLocator, p.SpotXAdLocator, h.DfaAdLocator, A ? g.CustomSellerAdLocator : m.SellerAdLocator, v.InAppDefaultAdLocator, b.NonInAppVpaidVideoAdLocator, y.InAppVpaidVideoAdLocator, f.InAppHtml5VideoAdLocator, w.InmobiVideoAdLocator, D.IframeFallbackAdLocator, E.OmidAdLocator, S.Cm360AdLocator], t.sellerTag = {
        adLocators: [A ? r.CustomRegexAdLocator : a.RegexAdLocator, A ? g.CustomSellerAdLocator : m.SellerAdLocator, u.NearestAdAdLocator, E.OmidAdLocator, D.IframeFallbackAdLocator],
        fallbackAdLocators: [A ? n.CustomMediaplexAdLocator : s.MediaplexAdLocator, o.FindClassAdLocator, d.IntegratedCeltraAdLocator, l.NonIntegratedCeltraAdLocator, c.ParentWindowAdLocator, p.SpotXAdLocator, h.DfaAdLocator, v.InAppDefaultAdLocator, b.NonInAppVpaidVideoAdLocator, y.InAppVpaidVideoAdLocator, f.InAppHtml5VideoAdLocator, w.InmobiVideoAdLocator, S.Cm360AdLocator]
      };
    },
    5219: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseAdLocator = void 0;
      const r = i(7360),
        a = i(712),
        n = i(3868),
        s = i(425),
        o = i(1800),
        d = i(749),
        l = i(7749),
        c = i(194),
        u = i(6820),
        p = i(9992);
      t.BaseAdLocator = class {
        constructor(e, t = 500) {
          this.numOfTries = e, this.interval = t, this.isSupported() && (r.EventBus.addEventListener(r.DvEvent.adSelected, this.clearTimeoutReference.bind(this)), r.EventBus.addEventListener(r.DvEvent.impressionServed, this.handleAdLocatorLatency.bind(this)));
        }
        reportAdNotLocated() {}
        handleAdLocatorLatency() {
          if (l.DvTagDataObject.getTagType() == a.DvTagType.Display) {
            c.DvObject.getIsReducedAdLocatorLatency() && (this.interval = 100, this.numOfTries *= 10);
          }
        }
        start() {
          this.isSupported() && (this.adLocatorShortName = "al" + this.getMethod(), p.AdLocatorsTaskSeparatorFeatureFlag.isEnabled() ? this.timeoutReference = u.scheduleTask(() => this.tryGetAds()) : this.tryGetAds());
        }
        processAdCandidates(e) {
          const t = this.getSupportedDeliveryType(),
            i = this.getMethod(),
            r = n.WindowAdaptor.workingWindow();
          return null == e || e.forEach(e => {
            e.supportedDeliveryType = t, e.locatorMethods = i, e.windowElement = n.WindowAdaptor.getDefaultWindow(e.domElement) || r, e.priority = this.getPriority(e);
          }), e;
        }
        tryGetAds() {
          u.invokeWithPerformanceMeasures({
            name: this.adLocatorShortName
          }, () => {
            this.numOfTries--;
            try {
              const e = this.getAds();
              (null == e ? void 0 : e.length) ? (this.processAdCandidates(e).forEach(e => r.EventBus.dispatchEvent(r.DvEvent.adCandidateLocated, new o.AdCandidateEventData(e))), this.clearTimeoutReference()) : this.numOfTries > 0 ? this.timeoutReference = u.scheduleTask(() => this.tryGetAds(), this.interval) : this.reportAdNotLocated();
            } catch (e) {
              d.MessageHandler.sendError(a.ClientErrorType.AdLocationError, e);
            }
          });
        }
        clearTimeoutReference() {
          this.timeoutReference && (s.BrowserAdaptor.clearTimeout(this.timeoutReference), this.timeoutReference = void 0);
        }
      };
    },
    1085: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PassMinimumAdSize = void 0;
      const r = i(425);
      t.PassMinimumAdSize = class {
        constructor() {
          this.minAdWidth = 20, this.minAdHeight = 20;
        }
        validate(e) {
          let t = !1;
          if (e) {
            let i = r.BrowserAdaptor.getElementSize(e);
            i && i.height > this.minAdHeight && i.width > this.minAdWidth && (t = !0);
          }
          return t;
        }
      };
    },
    8472: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SellerAdSizeValidator = void 0;
      const r = i(7749),
        a = i(425);
      t.SellerAdSizeValidator = class {
        constructor() {
          this.adSizeAcceptedMistake = 15, this.adSize = r.DvTagDataObject.getSellerAdSize();
        }
        validate(e) {
          let t = !1;
          if (e && r.DvTagDataObject.isSellerTag() && this.adSize.width && this.adSize.height) {
            let i = a.BrowserAdaptor.getElementSize(e);
            i && i.width - this.adSize.width >= -this.adSizeAcceptedMistake && i.height - this.adSize.height >= -this.adSizeAcceptedMistake && (t = !0);
          }
          return t;
        }
      };
    },
    5955: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CeltraBaseAdLocator = void 0;
      const r = i(5464),
        a = i(7146),
        n = i(7360),
        s = i(1800);
      class o extends a.DisplayBaseAdLocator {
        constructor() {
          super(...arguments), this.celtraAdServerId = "179", this.selectionDelayed = !1;
        }
        getAds() {
          let e = this.getScanner().scan(this.getValidator());
          e.some(e => !e.isFullyLoaded) && !this.selectionDelayed && (this.selectionDelayed = !0, n.EventBus.dispatchEvent(n.DvEvent.reserveAdLocator, new s.ReserveAdLocatorData(this.getPriority()))), e = e.filter(e => !!e.domElement);
          const t = this.filterByAdsValidators(e);
          return this.mapDomAdsDataToAdCandidates(t);
        }
        transformToAdElement(e) {
          const t = super.transformToAdElement(e);
          return t.celtraTagSearchMethod = e.celtraTagSearchMethod, t;
        }
        getValidator() {
          return new r.CeltraValidator();
        }
      }
      t.CeltraBaseAdLocator = o;
    },
    7898: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Cm360AdLocator = void 0;
      const r = i(7749),
        a = i(7146),
        n = i(712),
        s = i(3903),
        o = i(749);
      class d extends a.DisplayBaseAdLocator {
        constructor() {
          super(...arguments), this.attributeName = "data-doubleverify-container", this.attributeValueLookedUp = !1;
        }
        getScanner() {
          if (this.findAttribute()) return new s.GetElementByID(this.attributeValue);
        }
        getValidator() {
          return null;
        }
        isSupported() {
          return super.isSupported() && r.DvTagDataObject.getIsCm360CreativeWrapping() && !!this.findAttribute();
        }
        findAttribute() {
          return void 0 === this.attributeValueLookedUp || this.attributeValueLookedUp || (this.attributeValue = r.DvTagDataObject.getValueOfTagAttribute(this.attributeName), this.attributeValueLookedUp = !0, this.attributeValue || o.MessageHandler.sendMessage({
            dvp_atali: 1
          })), this.attributeValue;
        }
        getPriority(e) {
          return 4e5;
        }
        getMethod() {
          return n.LocatorMethods.DisplayCm360;
        }
        reportAdNotLocated() {
          o.MessageHandler.sendMessage({
            dvp_atali: 2
          });
        }
      }
      t.Cm360AdLocator = d;
    },
    5906: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomMediaplexAdLocator = void 0;
      const r = i(7146),
        a = i(631),
        n = i(7749),
        s = i(712),
        o = i(5613);
      class d extends r.DisplayBaseAdLocator {
        constructor() {
          super(), this.mediaplexAdServerId = "8";
        }
        getScanner() {
          return o.CustomGetElementsByTagNameSingleton;
        }
        getValidator() {
          return new a.MediaplexValidator(n.DvTagDataObject.getBtreg(), n.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          return super.isSupported() && n.DvTagDataObject.getAdServerId() == this.mediaplexAdServerId;
        }
        getPriority(e) {
          return 1e4 - (e.depth || 0);
        }
        getMethod() {
          return s.LocatorMethods.CustomDisplayMediaPlex;
        }
      }
      t.CustomMediaplexAdLocator = d;
    },
    9171: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomRegexAdLocator = void 0;
      const r = i(7749),
        a = i(5223),
        n = i(7146),
        s = i(712),
        o = i(5613);
      class d extends n.DisplayBaseAdLocator {
        constructor() {
          super();
        }
        getScanner() {
          return o.CustomGetElementsByTagNameSingleton;
        }
        getValidator() {
          return new a.BtregValidator(r.DvTagDataObject.getBtreg(), r.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          return super.isSupported() && !!r.DvTagDataObject.getBtreg();
        }
        getPriority(e) {
          return 1e3 - (e.depth || 0);
        }
        getMethod() {
          return s.LocatorMethods.CustomDisplayRegex;
        }
      }
      t.CustomRegexAdLocator = d;
    },
    4816: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomSellerAdLocator = void 0;
      const r = i(7146),
        a = i(5223),
        n = i(7749),
        s = i(712),
        o = i(8472),
        d = i(7360),
        l = i(1800),
        c = i(5613);
      class u extends r.DisplayBaseAdLocator {
        constructor() {
          super();
        }
        getScanner() {
          return c.CustomGetElementsByTagNameSingleton;
        }
        getValidator() {
          return new a.BtregValidator(n.DvTagDataObject.getBtreg(), n.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          let e = super.isSupported() && n.DvTagDataObject.isSellerTag() && !!n.DvTagDataObject.getBtreg();
          return e && !this.delayEventSent && (d.EventBus.dispatchEvent(d.DvEvent.delayAdSelection, new l.DelayTimerData(3100)), this.delayEventSent = !0), e;
        }
        getPriority(e) {
          return 1e5;
        }
        getMethod() {
          return s.LocatorMethods.CustomDisplaySellerTag;
        }
        getAds() {
          let e = new o.SellerAdSizeValidator();
          return super.getAds().filter(t => e.validate(t.domElement));
        }
      }
      t.CustomSellerAdLocator = u;
    },
    4620: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DfaAdLocator = void 0;
      const r = i(7146),
        a = i(7581),
        n = i(7749),
        s = i(712),
        o = i(5613);
      class d extends r.DisplayBaseAdLocator {
        constructor() {
          super(...arguments), this.dfaAdServerId = "1";
        }
        getScanner() {
          return o.CustomGetElementsByTagNameSingleton;
        }
        getValidator() {
          return new a.DfaValidator();
        }
        isSupported() {
          return super.isSupported() && n.DvTagDataObject.getAdServerId() == this.dfaAdServerId;
        }
        getPriority(e) {
          return 250 - (e.depth || 0);
        }
        getMethod() {
          return s.LocatorMethods.DisplayDFA;
        }
      }
      t.DfaAdLocator = d;
    },
    7146: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DisplayBaseAdLocator = void 0;
      const r = i(455),
        a = i(7749),
        n = i(5219),
        s = i(1085),
        o = i(712),
        d = i(6689);
      class l extends n.BaseAdLocator {
        constructor() {
          super(7, 1e3);
        }
        isSupported() {
          return !d.OmidWrapper.isSupported() && a.DvTagDataObject.getTagType() == o.DvTagType.Display;
        }
        getSupportedDeliveryType() {
          return [1, 2, 0];
        }
        getAds() {
          let e = this.getScanner().scan(this.getValidator());
          const t = this.filterByAdsValidators(e);
          return this.mapDomAdsDataToAdCandidates(t);
        }
        filterByAdsValidators(e) {
          let t = new s.PassMinimumAdSize();
          return e.filter(e => t.validate(e.domElement));
        }
        mapDomAdsDataToAdCandidates(e) {
          return e.map(e => {
            const t = this.transformToAdElement(e);
            return t.depth = e.depth || 0, t;
          });
        }
        transformToAdElement(e) {
          return this.getCandidateInstance(e.domElement);
        }
        getCandidateInstance(e) {
          return new r.AdCandidateData(e);
        }
      }
      t.DisplayBaseAdLocator = l;
    },
    9969: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.FindClassAdLocator = void 0;
      const r = i(7749),
        a = i(7754),
        n = i(7146),
        s = i(712);
      class o extends n.DisplayBaseAdLocator {
        getScanner() {
          return new a.GetElementsByClassName(r.DvTagDataObject.getBtreg());
        }
        getValidator() {
          return null;
        }
        isSupported() {
          return super.isSupported() && !!r.DvTagDataObject.getBtreg() && r.DvTagDataObject.getFindClass();
        }
        getPriority(e) {
          return 1e3 - (e.depth || 0);
        }
        getMethod() {
          return s.LocatorMethods.DisplayFindClass;
        }
      }
      t.FindClassAdLocator = o;
    },
    8130: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IframeFallbackAdLocator = void 0;
      const r = i(3868),
        a = i(5219),
        n = i(455),
        s = i(712),
        o = i(7749),
        d = i(6689);
      class l extends a.BaseAdLocator {
        constructor() {
          super(1);
        }
        getAds() {
          let e = r.WindowAdaptor.getFrameElement(r.WindowAdaptor.workingWindow()) || r.WindowAdaptor.workingDocumentElement();
          if (e) return [new n.AdCandidateData(e)];
        }
        isSupported() {
          return !d.OmidWrapper.isSupported() && o.DvTagDataObject.getTagType() == s.DvTagType.Display && r.WindowAdaptor.workingWindow() != r.WindowAdaptor.windowTop();
        }
        getSupportedDeliveryType() {
          return [1, 2, 0];
        }
        getPriority() {
          return 1;
        }
        getMethod() {
          return s.LocatorMethods.DisplayIframeFallback;
        }
      }
      t.IframeFallbackAdLocator = l;
    },
    172: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InAppDefaultAdLocator = void 0;
      const r = i(3868),
        a = i(5219),
        n = i(455),
        s = i(712),
        o = i(6689);
      class d extends a.BaseAdLocator {
        constructor() {
          super(1);
        }
        getAds() {
          let e = r.WindowAdaptor.workingDocumentElement();
          if (e) return [new n.AdCandidateData(e)];
        }
        isSupported() {
          return !o.OmidWrapper.isSupported();
        }
        getSupportedDeliveryType() {
          return [3];
        }
        getPriority() {
          return 11e3;
        }
        getMethod() {
          return s.LocatorMethods.DefaultInApp;
        }
      }
      t.InAppDefaultAdLocator = d;
    },
    8476: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IntegratedCeltraAdLocator = void 0;
      const r = i(7749),
        a = i(712),
        n = i(5955),
        s = i(4179);
      class o extends n.CeltraBaseAdLocator {
        getScanner() {
          return s.CeltraDeepScannerSingleton;
        }
        isSupported() {
          return super.isSupported() && r.DvTagDataObject.getAdServerId() == this.celtraAdServerId;
        }
        getPriority(e) {
          return 9e3;
        }
        getMethod() {
          return a.LocatorMethods.DisplayIntegratedCeltra;
        }
      }
      t.IntegratedCeltraAdLocator = o;
    },
    1634: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MediaplexAdLocator = void 0;
      const r = i(7146),
        a = i(631),
        n = i(7749),
        s = i(6352),
        o = i(712),
        d = i(412),
        l = i(8457),
        c = i(3868);
      class u extends r.DisplayBaseAdLocator {
        constructor() {
          super(...arguments), this.mediaplexAdServerId = "8";
        }
        getScanner() {
          const e = s.GetElementsByTagNameSingleton;
          return d.BtregOptimizationFeatureFlag.isEnabled() ? new l.GetElementByIdOrTagName(c.WindowAdaptor.workingWindow(), e, n.DvTagDataObject.getBtreg(), this.getMethod()) : e;
        }
        getValidator() {
          return new a.MediaplexValidator(n.DvTagDataObject.getBtreg(), n.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          return super.isSupported() && n.DvTagDataObject.getAdServerId() == this.mediaplexAdServerId;
        }
        getPriority(e) {
          return 1e4 - (e.depth || 0);
        }
        getMethod() {
          return o.LocatorMethods.DisplayMediaPlex;
        }
      }
      t.MediaplexAdLocator = u;
    },
    3820: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NearestAdAdLocator = void 0;
      const r = i(7146),
        a = i(483),
        n = i(540),
        s = i(712);
      class o extends r.DisplayBaseAdLocator {
        getScanner() {
          return a.NearestAdScannerSingleton;
        }
        getValidator() {
          return new n.ValidateByAdTypeAndSize();
        }
        isSupported() {
          return super.isSupported();
        }
        getPriority(e) {
          return 100 - (e.depth || 0);
        }
        getMethod() {
          return s.LocatorMethods.DisplayNearestAd;
        }
      }
      t.NearestAdAdLocator = o;
    },
    7257: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NonIntegratedCeltraAdLocator = void 0;
      const r = i(7749),
        a = i(712),
        n = i(5955),
        s = i(4179);
      class o extends n.CeltraBaseAdLocator {
        getScanner() {
          return s.CeltraScannerSingleton;
        }
        isSupported() {
          return super.isSupported() && r.DvTagDataObject.getAdServerId() != this.celtraAdServerId;
        }
        getPriority(e) {
          return 120;
        }
        getMethod() {
          return a.LocatorMethods.DisplayNonIntegratedCeltra;
        }
      }
      t.NonIntegratedCeltraAdLocator = o;
    },
    6018: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ParentWindowAdLocator = void 0;
      const r = i(7749),
        a = i(5223),
        n = i(7146),
        s = i(6352),
        o = i(3868),
        d = i(712),
        l = i(412),
        c = i(8457);
      class u extends n.DisplayBaseAdLocator {
        getScanner() {
          const e = o.WindowAdaptor.getWindowParent(o.WindowAdaptor.workingWindow()),
            t = new s.GetElementsByTagName(e);
          return l.BtregOptimizationFeatureFlag.isEnabled() ? new c.GetElementByIdOrTagName(e, t, r.DvTagDataObject.getBtreg(), this.getMethod()) : t;
        }
        getValidator() {
          return new a.BtregValidator(r.DvTagDataObject.getBtreg(), r.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          return super.isSupported() && 2 == (2 & o.WindowAdaptor.getScenarioType()) && !!r.DvTagDataObject.getBtreg() && !!o.WindowAdaptor.getWindowParent(o.WindowAdaptor.workingWindow());
        }
        getPriority(e) {
          return 900;
        }
        getMethod() {
          return d.LocatorMethods.DisplayParentWindow;
        }
      }
      t.ParentWindowAdLocator = u;
    },
    1153: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RegexAdLocator = void 0;
      const r = i(7749),
        a = i(5223),
        n = i(7146),
        s = i(6352),
        o = i(712),
        d = i(412),
        l = i(3868),
        c = i(8457);
      class u extends n.DisplayBaseAdLocator {
        getScanner() {
          const e = s.GetElementsByTagNameSingleton;
          return d.BtregOptimizationFeatureFlag.isEnabled() ? new c.GetElementByIdOrTagName(l.WindowAdaptor.workingWindow(), e, r.DvTagDataObject.getBtreg(), this.getMethod()) : e;
        }
        getValidator() {
          return new a.BtregValidator(r.DvTagDataObject.getBtreg(), r.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          return super.isSupported() && !!r.DvTagDataObject.getBtreg();
        }
        getPriority(e) {
          return 1e3 - (e.depth || 0);
        }
        getMethod() {
          return o.LocatorMethods.DisplayRegex;
        }
      }
      t.RegexAdLocator = u;
    },
    6707: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SellerAdLocator = void 0;
      const r = i(7146),
        a = i(6352),
        n = i(5223),
        s = i(7749),
        o = i(712),
        d = i(8472),
        l = i(7360),
        c = i(1800),
        u = i(412),
        p = i(3868),
        h = i(8457);
      class g extends r.DisplayBaseAdLocator {
        getScanner() {
          const e = a.GetElementsByTagNameSingleton;
          return u.BtregOptimizationFeatureFlag.isEnabled() ? new h.GetElementByIdOrTagName(p.WindowAdaptor.workingWindow(), e, s.DvTagDataObject.getBtreg(), this.getMethod()) : e;
        }
        getValidator() {
          return new n.BtregValidator(s.DvTagDataObject.getBtreg(), s.DvTagDataObject.getBtadsrv());
        }
        isSupported() {
          let e = super.isSupported() && s.DvTagDataObject.isSellerTag() && !!s.DvTagDataObject.getBtreg();
          return e && !this.delayEventSent && (l.EventBus.dispatchEvent(l.DvEvent.delayAdSelection, new c.DelayTimerData(3100)), this.delayEventSent = !0), e;
        }
        getPriority(e) {
          return 1e5;
        }
        getMethod() {
          return o.LocatorMethods.DisplaySellerTag;
        }
        getAds() {
          let e = new d.SellerAdSizeValidator();
          return super.getAds().filter(t => e.validate(t.domElement));
        }
      }
      t.SellerAdLocator = g;
    },
    7571: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpotXAdLocator = void 0;
      const r = i(7146),
        a = i(483),
        n = i(455),
        s = i(4265),
        o = i(712),
        d = i(7360),
        l = i(194),
        c = i(1800);
      class u extends r.DisplayBaseAdLocator {
        constructor() {
          super(), this.isSpotxMode = !1, this.spotxCandidates = [], d.EventBus.addEventListener(d.DvEvent.impressionServed, this.handleImpressionServed.bind(this), "SpotXAdLocator");
        }
        getScanner() {
          return a.NearestAdScannerSingleton;
        }
        getValidator() {
          return new s.SpotXValidator();
        }
        isSupported() {
          return super.isSupported();
        }
        getPriority(e) {
          let t = 0,
            i = e.depth || 0;
          return this.isSpotxMode && (t = 1e4 - i), t;
        }
        getMethod() {
          return o.LocatorMethods.DisplaySpotX;
        }
        getCandidateInstance(e) {
          let t = new n.AdCandidateData(e);
          return this.isSpotxMode || (t.state = 4, this.spotxCandidates.push(t)), t;
        }
        handleImpressionServed() {
          this.isSpotxMode = l.DvObject.isSpotxMode(), this.isSpotxMode && this.spotxCandidates.forEach(e => {
            e.state = 1, e.priority = this.getPriority(e), d.EventBus.dispatchEvent(d.DvEvent.adCandidateLocated, new c.AdCandidateEventData(e));
          });
        }
      }
      t.SpotXAdLocator = u;
    },
    5223: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BtregValidator = void 0;
      const r = i(425),
        a = i(7749);
      t.BtregValidator = class {
        constructor(e, t) {
          this.innerHtmlValidationTypes = {
            img: !0,
            iframe: !0,
            a: !0,
            object: !0,
            embed: !0
          }, this.btadsrvValidationTypes = {
            img: !0,
            iframe: !0,
            a: !0,
            object: !0,
            embed: !0
          }, this.btreg = e, this.btregRegex = new RegExp(this.btreg), this.btadsrv = t, this.btadsrvRegexp = new RegExp(this.btadsrv);
        }
        validate(e) {
          let t = !1;
          if (this.btreg && this.btreg.length >= 5) {
            let i = r.BrowserAdaptor.getElementType(e),
              n = [];
            n.push(r.BrowserAdaptor.getAttribute(e, "id")), n.push(r.BrowserAdaptor.getAttribute(e, "src")), n.push(r.BrowserAdaptor.getAttribute(e, "href")), n.push(r.BrowserAdaptor.getAttribute(e, "flashvars")), n.push(r.BrowserAdaptor.getAttribute(e, "name")), a.DvTagDataObject.getCustomAttributes().forEach(t => n.push(r.BrowserAdaptor.getAttribute(e, t))), n.push(r.BrowserAdaptor.getAttribute(e, "class")), this.innerHtmlValidationTypes[i] && n.push(r.BrowserAdaptor.getAttribute(e, "innerHTML"));
            let s = !1,
              o = !1;
            for (let e of n) if (e && (s = s || this.validateBtreg(e, this.btreg), o = o || !this.btadsrvValidationTypes[i] || this.validateBtadsrv(e, this.btadsrv), s && o)) {
              t = !0;
              break;
            }
          }
          return t;
        }
        validateBtreg(e, t) {
          return this.validateString(e, this.btreg, this.btregRegex);
        }
        validateBtadsrv(e, t) {
          return this.validateString(e, this.btreg, this.btadsrvRegexp);
        }
        validateString(e, t, i) {
          let r = !1;
          if (e && t) try {
            i.exec(e) && (r = !0);
          } catch (i) {
            r = -1 != e.indexOf(t);
          }
          return r;
        }
      };
    },
    5464: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CeltraValidator = void 0;
      t.CeltraValidator = class {
        constructor() {
          this.celtraClassString = "celtra-ad-v";
        }
        validate(e) {
          return 0 == e.className.indexOf(this.celtraClassString);
        }
      };
    },
    7581: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DfaValidator = void 0;
      const r = i(5223),
        a = i(425),
        n = i(3380),
        s = i(7749);
      class o extends r.BtregValidator {
        constructor() {
          super("DfaVisibilityIdentifier", "DfaVisibilityIdentifier"), this.dcmValidationTypes = {
            div: !0,
            span: !0
          }, this.maxDistance = 10;
        }
        validate(e) {
          let t = !1,
            i = a.BrowserAdaptor.getElementType(e),
            r = n.Utilities.getElementsDistance(e, s.DvTagDataObject.getDVScript());
          return this.dcmValidationTypes[i] && r >= 0 && r <= this.maxDistance && (t = super.validate(e)), t;
        }
      }
      t.DfaValidator = o;
    },
    631: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MediaplexValidator = void 0;
      const r = i(5223);
      class a extends r.BtregValidator {
        constructor(e, t) {
          super(e, t), this.multiplexRegexp = new RegExp("[0-9]+-[0-9]+-[0-9]+-[0-9]+"), this.hyphenFreeRegexp = new RegExp("-", "g");
        }
        validateBtreg(e, t) {
          return this.validateByMediaplex(e, t) || super.validateBtreg(e, t);
        }
        validateBtadsrv(e, t) {
          return this.validateByMediaplex(e, t) || super.validateBtadsrv(e, t);
        }
        validateByMediaplex(e, t) {
          let i = !1;
          if (e && t) {
            let r = this.multiplexRegexp.exec(e);
            if (r) {
              i = r.toString().replace(this.hyphenFreeRegexp, "") == t;
            }
          }
          return i;
        }
      }
      t.MediaplexValidator = a;
    },
    4265: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpotXValidator = void 0;
      const r = i(540),
        a = i(712);
      class n extends r.ValidateByAdTypeAndSize {
        constructor() {
          super(), this.standardAdTypes = ["object", "embed", "video", "iframe"];
        }
        validate(e) {
          return this.isStandardAdType(e) && this.isStandardAdSize(this.getAdSize(e), a.StandardSizeType.SpotX);
        }
      }
      t.SpotXValidator = n;
    },
    7939: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ValidateByAdSize = void 0;
      const r = i(425),
        a = i(3971);
      t.ValidateByAdSize = class {
        getAdSize(e) {
          return r.BrowserAdaptor.getElementSize(e);
        }
        isStandardAdSize(e, t) {
          return a.StandardSizes.isStandardAdSize(e, t, 15);
        }
      };
    },
    540: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ValidateByAdTypeAndSize = void 0;
      const r = i(425),
        a = i(7939),
        n = i(712);
      class s extends a.ValidateByAdSize {
        constructor() {
          super(...arguments), this.standardAdTypes = ["object", "embed", "img", "iframe", "svg", "canvas"];
        }
        validate(e) {
          return this.isStandardAdType(e) && this.isStandardAdSize(this.getAdSize(e), n.StandardSizeType.Display);
        }
        isStandardAdType(e) {
          let t = !1;
          if (e) {
            let i = r.BrowserAdaptor.getElementType(e);
            t = -1 != this.standardAdTypes.indexOf(i);
          }
          return t;
        }
      }
      t.ValidateByAdTypeAndSize = s;
    },
    677: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidAdLocator = void 0;
      const r = i(712),
        a = i(455),
        n = i(5219),
        s = i(6689);
      class o extends n.BaseAdLocator {
        constructor() {
          super(1);
        }
        getAds() {
          return [this.initOmidAdCandidateData()];
        }
        getPriority(e) {
          return 1e5;
        }
        getMethod() {
          return r.LocatorMethods.DisplayOmid;
        }
        isSupported() {
          return s.OmidWrapper.isSupported();
        }
        getSupportedDeliveryType() {
          return [3, 0, 1, 2];
        }
        initOmidAdCandidateData() {
          const e = new a.AdCandidateData(null);
          return e.omidMeasuredElementType = 0, e;
        }
      }
      t.OmidAdLocator = o;
    },
    4179: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CeltraScannerSingleton = t.CeltraDeepScannerSingleton = t.CeltraScanner = void 0;
      const r = i(425),
        a = i(7749),
        n = i(749),
        s = i(5261);
      class o {
        constructor(e) {
          this.scanSiblingTwoLevelsDown = e;
        }
        scan(e) {
          this.dvTag = this.dvTag || a.DvTagDataObject.getDVScript();
          const t = this.dvTag && this.dvTag.parentElement,
            i = this.getCeltraElementByDomApiSearch(t);
          i && i.length > 0 && (this.celtraTagSearchMethod = 1);
          const r = [],
            n = i && i.length > 0 ? i : this.getElementsToSearchCeltraAttribute();
          for (let t of n) if (e.validate(t)) {
            let e = new s.CeltraDomAdData(this.celtraTagSearchMethod, null, 0, !1);
            if (t.celtra && t.celtra.viewabilityObservee) {
              const i = t.celtra.viewabilityObservee;
              e.domElement = i, e.isFullyLoaded = !0;
            }
            r.push(e);
          }
          return r;
        }
        getElementsToSearchCeltraAttribute() {
          this.celtraTagSearchMethod = 2;
          let e = [];
          const t = this.dvTag && this.dvTag.parentElement;
          if (t && this.shouldSearchOnTagParent() && e.push(t), this.shouldSearchOnTagSiblings()) {
            const t = r.BrowserAdaptor.getSiblingsNodes(this.dvTag);
            e = [...e, ...t], this.shouldSearchTwoLevelUnderTagSiblings() && t.forEach(t => {
              const i = r.BrowserAdaptor.getElementChildren(t);
              e = [...e, ...i], i.forEach(t => {
                const i = r.BrowserAdaptor.getElementChildren(t);
                e = [...e, ...i];
              });
            });
          }
          return e;
        }
        shouldSearchOnTagParent() {
          return !0;
        }
        shouldSearchOnTagSiblings() {
          return !0;
        }
        shouldSearchTwoLevelUnderTagSiblings() {
          return this.scanSiblingTwoLevelsDown;
        }
        getCeltraElementByDomApiSearch(e) {
          if (e && "function" == typeof e.querySelectorAll) {
            const t = e.querySelectorAll("[class^=celtra-ad-v]");
            if (t) return t.length > 1 && n.MessageHandler.sendMessage({
              dvp_csmc: t.length
            }), Array.prototype.slice.call(t);
          }
        }
      }
      t.CeltraScanner = o, t.CeltraDeepScannerSingleton = new o(!0), t.CeltraScannerSingleton = new o(!1);
    },
    3924: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseScanElement = void 0;
      const r = i(3868),
        a = i(3380);
      t.BaseScanElement = class {
        constructor(e = r.WindowAdaptor.workingWindow()) {
          this.elementsList = [], this.scanValidityTime = 1e3, this.searchWin = e;
        }
        scan() {
          return (!this.lastScanTime || a.Utilities.getCurrentTime() - this.lastScanTime > this.scanValidityTime) && (this.elementsList = this.tagScan(), this.lastScanTime = a.Utilities.getCurrentTime()), this.elementsList;
        }
        extractAd(e) {
          return e;
        }
      };
    },
    2200: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomScanContainerElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        extractAd(e) {
          return this.getBiggestNestedElement(e);
        }
        getBiggestNestedElement(e) {
          let t = e,
            i = ["embed", "iframe", "object", "img", "span", "div", "svg", "canvas"],
            r = [],
            n = a.BrowserAdaptor.getElementsByTagNameFromDomElement(e, "*");
          for (let e of n) {
            let t = a.BrowserAdaptor.getElementType(e);
            if (-1 != i.indexOf(t)) {
              let i = a.BrowserAdaptor.getElementSize(e);
              i && r.push({
                area: i.width * i.height,
                width: i.width,
                height: i.height,
                type: t,
                elem: e
              });
            }
          }
          return r = r.sort(function (e, t) {
            return t.area - e.area || i.indexOf(t.type) - i.indexOf(e.type);
          }), r.length > 0 && (t = r[0].elem), t;
        }
      }
      t.CustomScanContainerElement = n;
    },
    6999: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomScanCustomElement = void 0;
      const r = i(425),
        a = i(2200);
      class n extends a.CustomScanContainerElement {
        constructor(e, t) {
          super(e), this.elementName = t;
        }
        tagScan() {
          return r.BrowserAdaptor.getElementsByTagNameFromDocument(this.elementName, this.searchWin.document);
        }
      }
      t.CustomScanCustomElement = n;
    },
    9894: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomScanDivElement = void 0;
      const r = i(425),
        a = i(2200);
      class n extends a.CustomScanContainerElement {
        tagScan() {
          return r.BrowserAdaptor.getElementsByTagNameFromDocument("div", this.searchWin.document);
        }
      }
      t.CustomScanDivElement = n;
    },
    31: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomScanObjectElement = void 0;
      const r = i(425),
        a = i(2200);
      class n extends a.CustomScanContainerElement {
        tagScan() {
          return r.BrowserAdaptor.getElementsByTagNameFromDocument("object", this.searchWin.document);
        }
      }
      t.CustomScanObjectElement = n;
    },
    4499: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomScanSpanElement = void 0;
      const r = i(425),
        a = i(2200);
      class n extends a.CustomScanContainerElement {
        constructor() {
          super(...arguments), this.adunitAttribute = "adunit";
        }
        tagScan() {
          return r.BrowserAdaptor.getElementsByTagNameFromDocument("span", this.searchWin.document);
        }
        extractAd(e) {
          return 1 == r.BrowserAdaptor.getAttribute(e, this.adunitAttribute) ? e : super.extractAd(e);
        }
      }
      t.CustomScanSpanElement = n;
    },
    4211: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanCanvasElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("canvas", this.searchWin.document);
        }
      }
      t.ScanCanvasElement = n;
    },
    4933: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanContainerElement = void 0;
      const r = i(3924),
        a = i(425),
        n = i(1085);
      class s extends r.BaseScanElement {
        extractAd(e) {
          return new n.PassMinimumAdSize().validate(e) ? e : this.getBiggestNestedElement(e);
        }
        getBiggestNestedElement(e) {
          let t = e,
            i = ["embed", "iframe", "object", "img", "span", "div", "svg", "canvas"],
            r = [],
            n = a.BrowserAdaptor.getElementsByTagNameFromDomElement(e, "*");
          n.unshift(e);
          for (let e of n) {
            let t = a.BrowserAdaptor.getElementType(e);
            if (-1 != i.indexOf(t)) {
              let i = a.BrowserAdaptor.getElementSize(e);
              i && r.push({
                area: i.width * i.height,
                width: i.width,
                height: i.height,
                type: t,
                elem: e
              });
            }
          }
          return r = r.sort(function (e, t) {
            return t.area - e.area || i.indexOf(t.type) - i.indexOf(e.type);
          }), r.length > 0 && (t = r[0].elem), t;
        }
      }
      t.ScanContainerElement = s;
    },
    3158: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanCustomElement = void 0;
      const r = i(4933),
        a = i(425);
      class n extends r.ScanContainerElement {
        constructor(e, t) {
          super(e), this.elementName = t;
        }
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument(this.elementName, this.searchWin.document);
        }
      }
      t.ScanCustomElement = n;
    },
    9670: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanDivElement = void 0;
      const r = i(4933),
        a = i(425);
      class n extends r.ScanContainerElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("div", this.searchWin.document);
        }
      }
      t.ScanDivElement = n;
    },
    163: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanEmbedElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("embed", this.searchWin.document);
        }
      }
      t.ScanEmbedElement = n;
    },
    1346: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanFrameElement = void 0;
      const r = i(3924),
        a = i(3868);
      class n extends r.BaseScanElement {
        tagScan() {
          let e = [],
            t = a.WindowAdaptor.getFrameElement(this.searchWin);
          return t && e.push(t), e;
        }
      }
      t.ScanFrameElement = n;
    },
    8689: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanIframeElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("iframe", this.searchWin.document);
        }
      }
      t.ScanIframeElement = n;
    },
    9038: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanImageElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("img", this.searchWin.document);
        }
      }
      t.ScanImageElement = n;
    },
    2978: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanLinkElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("a", this.searchWin.document);
        }
        extractAd(e) {
          let t,
            i = a.BrowserAdaptor.getElementsByTagNameFromDomElement(e, "img");
          return i.length > 0 && (t = i[0]), t;
        }
      }
      t.ScanLinkElement = n;
    },
    6466: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanObjectElement = void 0;
      const r = i(4933),
        a = i(425);
      class n extends r.ScanContainerElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("object", this.searchWin.document);
        }
      }
      t.ScanObjectElement = n;
    },
    6635: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanSpanElement = void 0;
      const r = i(4933),
        a = i(425);
      class n extends r.ScanContainerElement {
        constructor() {
          super(...arguments), this.adunitAttribute = "adunit";
        }
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("span", this.searchWin.document);
        }
        extractAd(e) {
          return 1 == a.BrowserAdaptor.getAttribute(e, this.adunitAttribute) ? e : super.extractAd(e);
        }
      }
      t.ScanSpanElement = n;
    },
    1765: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScanSvgElement = void 0;
      const r = i(3924),
        a = i(425);
      class n extends r.BaseScanElement {
        tagScan() {
          return a.BrowserAdaptor.getElementsByTagNameFromDocument("svg", this.searchWin.document);
        }
      }
      t.ScanSvgElement = n;
    },
    5613: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomGetElementsByTagNameSingleton = t.CustomGetElementsByTagName = void 0;
      const r = i(163),
        a = i(2978),
        n = i(9038),
        s = i(8689),
        o = i(1346),
        d = i(7749),
        l = i(4211),
        c = i(1765),
        u = i(3868),
        p = i(3380),
        h = i(8564),
        g = i(9894),
        m = i(4499),
        v = i(6999),
        b = i(31);
      class y {
        constructor(e) {
          this.byTagScanners = [], this.byTagScanners.push(new r.ScanEmbedElement(e)), this.byTagScanners.push(new b.CustomScanObjectElement(e)), this.byTagScanners.push(new a.ScanLinkElement(e)), this.byTagScanners.push(new n.ScanImageElement(e)), this.byTagScanners.push(new m.CustomScanSpanElement(e)), this.byTagScanners.push(new s.ScanIframeElement(e)), this.byTagScanners.push(new g.CustomScanDivElement(e)), this.byTagScanners.push(new o.ScanFrameElement(e)), this.byTagScanners.push(new l.ScanCanvasElement(e)), this.byTagScanners.push(new c.ScanSvgElement(e)), d.DvTagDataObject.getCustomTags().forEach(t => this.byTagScanners.unshift(new v.CustomScanCustomElement(e, t)));
        }
        scan(e) {
          let t = [];
          for (let i of this.byTagScanners) for (let r of i.scan()) if (e.validate(r)) {
            let e = i.extractAd(r),
              a = new h.DomAdData(e, p.Utilities.getElementsDistance(e, d.DvTagDataObject.getDVScript()));
            t.push(a);
          }
          return t;
        }
      }
      t.CustomGetElementsByTagName = y, t.CustomGetElementsByTagNameSingleton = new y(u.WindowAdaptor.workingWindow());
    },
    3903: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetElementByID = void 0;
      const r = i(425),
        a = i(3380),
        n = i(7749),
        s = i(8564);
      t.GetElementByID = class {
        constructor(e) {
          this.elementId = e;
        }
        scan() {
          const e = [],
            t = r.BrowserAdaptor.getElementById(this.elementId);
          if (t) {
            const i = new s.DomAdData(t, a.Utilities.getElementsDistance(t, n.DvTagDataObject.getDVScript()));
            e.push(i);
          }
          return e;
        }
      };
    },
    7754: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetElementsByClassName = void 0;
      const r = i(425),
        a = i(3380),
        n = i(7749),
        s = i(8564);
      t.GetElementsByClassName = class {
        constructor(e) {
          this.btreg = e;
        }
        scan() {
          let e = [],
            t = r.BrowserAdaptor.getElementsByClassName(this.btreg);
          for (let i of t) {
            let t = new s.DomAdData(i, a.Utilities.getElementsDistance(i, n.DvTagDataObject.getDVScript()));
            e.push(t);
          }
          return e;
        }
      };
    },
    8457: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetElementByIdOrTagName = void 0;
      const r = i(8564),
        a = i(4211),
        n = i(9670),
        s = i(163),
        o = i(1346),
        d = i(8689),
        l = i(9038),
        c = i(2978),
        u = i(6466),
        p = i(6635),
        h = i(1765),
        g = i(425),
        m = i(7749),
        v = i(3158),
        b = i(3380),
        y = i(8170),
        f = i(749);
      t.GetElementByIdOrTagName = class {
        constructor(e, t, i, r) {
          this.searchWin = e, this.fallbackScanner = t, this.elementId = i, this.locatorMethod = r, this.tagScanners = {
            EMBED: s.ScanEmbedElement,
            OBJECT: u.ScanObjectElement,
            LINK: c.ScanLinkElement,
            IMG: l.ScanImageElement,
            SPAN: p.ScanSpanElement,
            IFRAME: d.ScanIframeElement,
            DIV: n.ScanDivElement,
            FRAME: o.ScanFrameElement,
            CANVAS: a.ScanCanvasElement,
            SVG: h.ScanSvgElement
          }, y.DiagnosticParamsSingleton.reportOnce("btreg", m.DvTagDataObject.getBtreg());
        }
        scan(e) {
          var t, i;
          const r = null !== (t = this.scanElementsById(e)) && void 0 !== t ? t : [];
          return r.length > 0 ? r : null !== (i = this.scanElementsByTagName(e)) && void 0 !== i ? i : [];
        }
        scanElementsById(e) {
          const t = g.BrowserAdaptor.getElementById(this.elementId);
          if (!t) return this.reportBtregOptimizationSuccess(0), [];
          const i = this.getTagScanner(t);
          if (!i) return this.reportBtregOptimizationSuccess(1), [];
          if (!e.validate(t)) return this.reportBtregOptimizationSuccess(2), [];
          const a = i.extractAd(t),
            n = new r.DomAdData(a, b.Utilities.getElementsDistance(a, m.DvTagDataObject.getDVScript()));
          return this.reportBtregOptimizationSuccess(3), [n];
        }
        reportBtregOptimizationSuccess(e) {
          const t = `${y.DiagnosticParamsSingleton.getQueryParamName("btros")}_${this.locatorMethod}`;
          f.MessageHandler.sendMessage({
            [t]: e,
            [y.DiagnosticParamsSingleton.getQueryParamName("btreg")]: m.DvTagDataObject.getBtreg()
          });
        }
        scanElementsByTagName(e) {
          var t, i;
          return null !== (i = null === (t = this.fallbackScanner) || void 0 === t ? void 0 : t.scan(e)) && void 0 !== i ? i : [];
        }
        getTagScanner(e) {
          const t = e.tagName,
            i = this.tagScanners[t];
          return null != i ? new i() : -1 != m.DvTagDataObject.getCustomTags().indexOf(t) ? new v.ScanCustomElement(this.searchWin, t) : null;
        }
      };
    },
    6352: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetElementsByTagNameSingleton = t.GetElementsByTagName = void 0;
      const r = i(163),
        a = i(6466),
        n = i(2978),
        s = i(9038),
        o = i(6635),
        d = i(8689),
        l = i(9670),
        c = i(1346),
        u = i(7749),
        p = i(3158),
        h = i(4211),
        g = i(1765),
        m = i(3868),
        v = i(3380),
        b = i(8564);
      class y {
        constructor(e) {
          this.byTagScanners = [], this.byTagScanners.push(new r.ScanEmbedElement(e)), this.byTagScanners.push(new a.ScanObjectElement(e)), this.byTagScanners.push(new n.ScanLinkElement(e)), this.byTagScanners.push(new s.ScanImageElement(e)), this.byTagScanners.push(new o.ScanSpanElement(e)), this.byTagScanners.push(new d.ScanIframeElement(e)), this.byTagScanners.push(new l.ScanDivElement(e)), this.byTagScanners.push(new c.ScanFrameElement(e)), this.byTagScanners.push(new h.ScanCanvasElement(e)), this.byTagScanners.push(new g.ScanSvgElement(e)), u.DvTagDataObject.getCustomTags().forEach(t => this.byTagScanners.unshift(new p.ScanCustomElement(e, t)));
        }
        scan(e) {
          let t = [];
          for (let i of this.byTagScanners) for (let r of i.scan()) if (e.validate(r)) {
            let e = i.extractAd(r),
              a = new b.DomAdData(e, v.Utilities.getElementsDistance(e, u.DvTagDataObject.getDVScript()));
            t.push(a);
          }
          return t;
        }
      }
      t.GetElementsByTagName = y, t.GetElementsByTagNameSingleton = new y(m.WindowAdaptor.workingWindow());
    },
    483: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NearestAdScannerSingleton = t.NearestAdScanner = void 0;
      const r = i(3380),
        a = i(425),
        n = i(7749),
        s = i(8564);
      class o {
        constructor() {
          this.maxScanDepth = 20, this.scanValidityTime = 1e3, this.elementsList = [];
        }
        scan(e) {
          this.dvTag = this.dvTag || n.DvTagDataObject.getDVScript();
          let t = [],
            i = [];
          if (0 == this.elementsList.length || r.Utilities.getCurrentTime() - this.lastScanTime > this.scanValidityTime) {
            let e = this.getStartElement();
            e && (this.getElements(e.domElement, e.depth), this.lastScanTime = r.Utilities.getCurrentTime());
          }
          for (let i of this.elementsList) if (e.validate(i)) {
            let e = new s.DomAdData(i, r.Utilities.getElementsDistance(i, this.dvTag));
            t.push(e);
          }
          return t.length > 0 && (i = t.sort(function (e, t) {
            return e.depth - t.depth;
          }).slice(0, 5)), i;
        }
        getStartElement() {
          let e,
            t = this.dvTag;
          for (e = 0; e < this.maxScanDepth; e++) {
            let e = r.Utilities.getElementParent(t);
            if (!e) break;
            t = e;
          }
          return new s.DomAdData(t, e);
        }
        getElements(e, t) {
          if (e && Math.abs(t) <= this.maxScanDepth) {
            this.elementsList.push(e);
            let i = a.BrowserAdaptor.getElementChildren(e);
            i && i.length > 0 && i.forEach(e => this.getElements(e, t - 1));
          }
        }
      }
      t.NearestAdScanner = o, t.NearestAdScannerSingleton = new o();
    },
    4846: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InAppHtml5VideoAdLocator = void 0;
      const r = i(5219),
        a = i(7749),
        n = i(425),
        s = i(455),
        o = i(712),
        d = i(6689);
      class l extends r.BaseAdLocator {
        constructor() {
          super(1);
        }
        getAds() {
          let e = n.BrowserAdaptor.getElementsByTagNameFromDocument("video")[0];
          if (e) return [new s.AdCandidateData(e)];
        }
        isSupported() {
          return !d.OmidWrapper.isSupported() && a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getSupportedDeliveryType() {
          return [3];
        }
        getPriority() {
          return 100;
        }
        getMethod() {
          return o.LocatorMethods.VideoInAppHtml5;
        }
      }
      t.InAppHtml5VideoAdLocator = l;
    },
    8066: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InAppVpaidVideoAdLocator = void 0;
      const r = i(7749),
        a = i(5219),
        n = i(455),
        s = i(712),
        o = i(6689),
        d = i(1063);
      class l extends a.BaseAdLocator {
        constructor() {
          super(5, 1e3);
        }
        isSupported() {
          return !o.OmidWrapper.isSupported() && r.DvTagDataObject.getTagType() == s.DvTagType.Video && !!r.DvTagDataObject.getAdID();
        }
        getAds() {
          let e = d.VpaidWrapper.getDvVpaid();
          if (e) {
            let t = e.asset;
            if (t && t.player) {
              return [new n.AdCandidateData(t.player)];
            }
          }
        }
        getSupportedDeliveryType() {
          return [3];
        }
        getPriority() {
          return 200;
        }
        getMethod() {
          return s.LocatorMethods.VideoInAppVpaid;
        }
      }
      t.InAppVpaidVideoAdLocator = l;
    },
    9260: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InmobiVideoAdLocator = void 0;
      const r = i(5219),
        a = i(6689),
        n = i(7749),
        s = i(712),
        o = i(455),
        d = i(1800),
        l = i(7360),
        c = i(8426);
      class u extends r.BaseAdLocator {
        constructor() {
          super(5, 1e3), this.isSupported() && (l.EventBus.dispatchEvent(l.DvEvent.delayAdSelection, new d.DelayTimerData(3100)), c.InmobiWrapper.addEventListenerWithHistory(this.handleInmobiAdLoadedEvent.bind(this)));
        }
        isSupported() {
          return !a.OmidWrapper.isSupported() && n.DvTagDataObject.getTagType() == s.DvTagType.Video && c.InmobiWrapper.isSupported();
        }
        getAds() {
          if (this.adElement) {
            return [new o.AdCandidateData(this.adElement)];
          }
        }
        getSupportedDeliveryType() {
          return [3];
        }
        getPriority() {
          return 1e4;
        }
        getMethod() {
          return s.LocatorMethods.VideoInAppInmobi;
        }
        handleInmobiAdLoadedEvent(e) {
          e && "AdLoaded" == e.type && e.detail && e.detail.element && (this.adElement = e.detail.element);
        }
      }
      t.InmobiVideoAdLocator = u;
    },
    554: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NonInAppVpaidVideoAdLocator = void 0;
      const r = i(7749),
        a = i(5219),
        n = i(455),
        s = i(712),
        o = i(6689),
        d = i(1063);
      class l extends a.BaseAdLocator {
        constructor() {
          super(5, 1e3);
        }
        isSupported() {
          return !o.OmidWrapper.isSupported() && r.DvTagDataObject.getTagType() == s.DvTagType.Video && !!r.DvTagDataObject.getAdID();
        }
        getAds() {
          let e = d.VpaidWrapper.getDvVpaid();
          if (e) {
            let t = e.asset;
            if (t && t.player) {
              return [new n.AdCandidateData(t.player)];
            }
          }
        }
        getSupportedDeliveryType() {
          return [1, 2, 0];
        }
        getPriority() {
          return 1;
        }
        getMethod() {
          return s.LocatorMethods.VideoNonInAppVpaid;
        }
      }
      t.NonInAppVpaidVideoAdLocator = l;
    },
    1545: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ErrorHandler = void 0;
      const r = i(3872);
      t.ErrorHandler = (e, t, i, a) => ({
        createErrorRequestParamsObject(e, t = "") {
          const n = {
            flvr: "1",
            dvp_jsctx: i.getClientCode() || "",
            dvp_jscmp: i.getAdServerCampaignCode() || "",
            dvp_jsplc: i.getAdServerSiteCode() || "",
            dvp_jssid: i.getPlacementId() || "",
            ctx: "818052",
            cmp: "1619415",
            dvp_isLostImp: "1",
            ssl: "1",
            gdpr: i.getGDPR() || "",
            gdpr_consent: i.getGDPRConsent() || "",
            ver: a.getDvtpScriptVersion(),
            dvp_cert: r.ClientErrorType[e]
          };
          return t && (n.dvp_jsErrMsg = t), n;
        },
        generateErrorQueryString: e => t.serializeObjectToQueryString(e, !1),
        reportError(t, i = "") {
          const r = this.createErrorRequestParamsObject(t, i),
            a = `undefinedundefined?${this.generateErrorQueryString(r)}`;
          e.sendBeacon(a, !0);
        }
      });
    },
    6625: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BlockingHandler = void 0;
      const r = i(1457),
        a = i(7360),
        n = i(1545),
        s = i(3872),
        o = i(712);
      t.BlockingHandler = (e, t, i, d, l, c, u) => ({
        displayBlockingCallback(e) {
          const t = this.resolveGoogleBlockingCallback();
          "function" == typeof t && i.setTimeout(() => t({
            block: e
          }), 0);
        },
        videoBlockingCallback(e) {
          if (e) try {
            const e = l.getVideoBlockingCallbackUrl();
            if (e && "string" == typeof e) {
              const t = decodeURIComponent(e);
              navigator.sendBeacon(t);
            }
          } catch (e) {
            this.errorHandler().reportError(s.ClientErrorType.VideoBlockingCallbackError, e.message);
          }
        },
        blockingDecisionCallback(i) {
          if (l.getTagType() == o.DvTagType.Video) this.videoBlockingCallback(i);else if (this.displayBlockingCallback(i), !i) if (l.getIsMonitoring()) t(e);else {
            const e = this.resolveCreativeContainer();
            try {
              e.style.visibility = "";
            } catch (e) {}
          }
        },
        initDvbs() {
          window.$dvbs = window.$dv, window.$dvbs.pubSub || (window.$dvbs.pubSub = a.EventBusGlobal);
        },
        resolveCreativeContainer() {
          const e = l.getCm360ContainerId();
          return document.getElementById(e);
        },
        resolveGoogleBlockingCallback() {
          const e = l.getCm360BlockingCallbackFnName();
          return window[e];
        },
        errorHandler: () => n.ErrorHandler(i, u, l, d),
        execute() {
          try {
            this.initDvbs();
            const a = this.resolveCreativeContainer(),
              n = r.VerifyHandler(e, c, i, u, l, d, a, this.blockingDecisionCallback.bind(this), this.errorHandler(), t);
            try {
              n.doVerifyRequest();
            } catch (e) {
              this.errorHandler().reportError(s.ClientErrorType.SendVerifyRequestFailure, "Send verify request failed. " + e.message);
            }
          } catch (e) {
            this.errorHandler().reportError(s.ClientErrorType.BlockingMainError, e.message);
          }
        }
      });
    },
    3872: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.requiredTpsParams = t.optionalTpsParams = t.collectedTpsParams = t.ClientErrorType = void 0;
      !function (e) {
        e[e.VerifyLoadJSONPCallbackFailed = 1] = "VerifyLoadJSONPCallbackFailed", e[e.VerifyFailedToLoad = 2] = "VerifyFailedToLoad", e[e.AdRenderedUponVerifyFailure = 3] = "AdRenderedUponVerifyFailure", e[e.SendVerifyRequestFailure = 4] = "SendVerifyRequestFailure", e[e.TPSDataCollectorError = 5] = "TPSDataCollectorError", e[e.VideoBlockingCallbackError = 6] = "VideoBlockingCallbackError", e[e.BlockingMainError = 7] = "BlockingMainError";
      }(t.ClientErrorType || (t.ClientErrorType = {})), t.collectedTpsParams = ["additionalUrlDepth", "browserId", "browserIdUserAgent", "browserVersion", "cookieLength", "documentElementCount", "domainLookupTime", "historyLength", "historyLength", "idcResults", "idcVersion", "iframeCount", "innerHeight", "innerWidth", "isChrome", "isOvv", "numberOfCores", "outerHeight", "outerWidth", "postMessageSupported", "referrerDepth", "referrerUrlExtractedFromSafeFrame", "screenHeight", "screenWidth", "scriptVersion", "uid", "widgetCount", "windowDepth", "timeToFirstReportMs"], t.optionalTpsParams = ["eparams", "referrerUrl", "vastWrapperUrl"], t.requiredTpsParams = ["adid", "adsrv", "advid", "app", "cmp", "crt", "ctx", "dup", "gmnpo", "isdvvid", "plc", "sid", "supplySource", "tagtype", "unit"];
    },
    1457: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VerifyHandler = void 0;
      const r = i(7658),
        a = i(749),
        n = i(3872),
        s = i(7183),
        o = i(712);
      t.VerifyHandler = (e, t, i, d, l, c, u, p, h, g) => ({
        impressionId: "",
        isJSONPCalled: !1,
        serverPublicDns: "",
        appendTpsParam: (t, i) => Object.assign(t, {
          [r.TPSDataMapping[i]]: e[i]
        }),
        assertRequiredParams(e) {
          const t = Object.assign({}, e);
          return n.requiredTpsParams.forEach(i => {
            i in e || (t[i] = "");
          }), t;
        },
        buildRequestUrl(e, t) {
          let i = `undefinedundefined?${d.serializeObjectToQueryString(e, !1)}`,
            r = !1;
          return Object.keys(t).filter(e => t.hasOwnProperty(e) && !!t[e]).forEach(e => {
            const a = t[e],
              n = d.serializeObjectToQueryString({
                [e]: a
              }, !1),
              s = i.length + n.length + 1;
            d.isExceedingMaxUrlLength(s) ? r = !0 : i += "&" + n;
          }), r && (i += "&dvf=3"), i;
        },
        buildVerifyRequestObj() {
          const t = l.getLowerCaseParams(),
            i = this.assertRequiredParams(t),
            a = n.collectedTpsParams.reduce((e, t) => this.appendTpsParam(e, t), {}),
            s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
              num: 6,
              dvp_isOnHead: 0,
              flvr: 1,
              ver: 4515,
              jsCallback: this.generateVerifyCallbackName(),
              jsTagObjCallback: this.generateTagCallbackName(),
              ssl: "https:" === e.isSsl ? 1 : 0
            }, e.isMraid && {
              [r.TPSDataMapping.isMraid]: 1
            }), "video" === e.tagtype && {
              DVP_BYPASS219: 1
            }), e.isPreRender && {
              prndr: 1
            }), e.dvpParamsFlags && {
              dvf: e.dvpParamsFlags
            }), e.safeFrameExists && {
              sfe: 1
            }), e.hijackedDeviceSignatureBits > 0 && {
              hdsig: e.hijackedDeviceSignatureBits
            }), e.idcError && {
              dvp_idcerr: e.idcError
            }), e.browserFeatures && {
              m1: e.browserFeatures
            }), e.browserSignatureBits && e.browserSignatureFamilyBits && {
              bsig: e.browserSignatureFamilyBits,
              usig: e.browserSignatureBits
            }),
            o = n.optionalTpsParams.reduce((e, t) => this.appendTpsParam(e, t), {});
          Object.keys(o).forEach(e => {
            try {
              delete i[e];
            } catch (e) {}
          });
          const d = Object.assign({}, i, a, s, e.additionalParams);
          return {
            params: this.filterRequestObject(d),
            lowPriorityParams: this.filterRequestObject(o)
          };
        },
        doVerifyRequest() {
          this.initPerformanceMetrics();
          const {
              params: e,
              lowPriorityParams: t
            } = this.buildVerifyRequestObj(),
            i = this.buildRequestUrl(e, t),
            r = this.generateScriptId(),
            a = this.generateOnErrorCallback(),
            n = this.generateOnLoadCallback(),
            s = this.generateTagCallbackName(),
            o = this.generateVerifyCallbackName();
          this.injectTagObjectCallback(s), this.injectVerifyCallback(o), this.injectVerifyTag(i, r, a, n), c.setVerifyInjectedMS(d.getCurrentTime());
        },
        filterRequestObject: e => Object.keys(e).filter(t => void 0 !== e[t] && e[t] !== []).reduce((t, i) => Object.assign(Object.assign({}, t), {
          [i]: e[i]
        }), {}),
        injectTagObjectCallback(i) {
          const r = t.currentWindow(),
            a = this;
          r[i] = t => {
            var i;
            const r = c.getDvObject(),
              n = t.ImpressionID;
            a.impressionId = n, e.bsimpid = n, a.serverPublicDns = t.ServerPublicDns, r.tagData = r.tagData || {}, r.tags[n] = this.buildTagObject(t);
            const s = c.getDvObject();
            (null === (i = s.pubSub) || void 0 === i ? void 0 : i.excludeFrameId) && s.pubSub.excludeFrameId(t.ImpressionID), l.setBlockingServerPrefix(`https://${t.ServerPublicDns}/`);
          };
        },
        monitorPerformance(e, t) {
          const i = {};
          try {
            if (e && e.performance && e.performance.getEntries) {
              const r = e.performance.getEntries();
              for (let e = 0; e < r.length; e++) {
                const a = r[e],
                  n = a.name.match(/.*\/(.+?)\./);
                if (!n || !n[1]) continue;
                const s = n[1].replace(/\d+$/, ""),
                  o = t[s];
                if (o) {
                  for (let e = 0; e < o.stats.length; e++) {
                    const t = o.stats[e],
                      r = a[t.name];
                    "number" == typeof r && (i[o.prefix + t.prefix] = Math.round(r));
                  }
                  if (delete t[s], d.isEmptyObject(t)) break;
                }
              }
            }
          } catch (e) {}
          return i;
        },
        generateDefaultPassback: (e, t) => decodeURIComponent("%3Cdiv%20style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%20justify-content%3A%20center%3B%20width%3A%20" + e + "px%3B%20height%3A%20" + t + "px%3B%20outline-offset%3A%20-1px%3B%20background%3A%20url('data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAAGWvHq%2BAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQBECEbFuFN7gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAFBklEQVRo3uUby3arOEzxAbxIyKLt%2F%2F9gIQtIF4aFZ5ERVxhJyIbcnjmjTZLast4vQ%2BG762OMMX53fQzTFIfxGenfKvgXvj4%2FoOsfy3eECgBgmmcYhnFZ6PoHeO%2F%2FbBiGEQAAxufPghlC%2BLOBYqa%2FHezAJcYYOUz87QAA7vd2g4lMAsrLfQJ%2BQeUM43PZsMJEwN8L58gMfgIAAMVKv6syX4bxGVF9qTiuvV2Byouf7e0Kl%2B%2Buj6kJU8aktV07aFClTkThfm9hGMbNGu53dCNd%2FPr8gBCm5TsnAivz%2BPwBqkHvPaDiVvpAW6Nh0FBhmpagSdfQV0Q7oVySPrz3LyO3t%2BvCKrJIHTtdG58%2FvLycZk%2Bzr1uFkgFWuYHKZHHNEMIr4lMb0pO5v7e3qyyj983KATYydv1jswFZneZ5wzaKVaEMVnNgjsw2B8pcbMdLmKbY1PVG5dTl0rVpnsGlSDReOcfo%2Bgc0df3SagrTPC8m4aDrH1ClaR4AgHKRmgN%2FL9HBbeI4wdKVitXUtYpLGXPSgpUg1lBaPzWCWW6wJ4lkB9aFUL1pQkXOvW9WBDltULNM8wwhTEtIcQn88t31kdpEU7FmOwsemqiiqtPsQvufXMCmCulUSKy9XaG9XYGrLhbv1iSlWU0NGdyQqlPKBHQfh0vxVkQ1abSQybX3oQ7nUPWUpEQ1oaokLVAnSfG4cy8xxpjrEFyVtuCJNt3rETDgu%2F6xiT9zRqKSci0DxzHdZ5E0zXabjGTtwSxr9FyqjazSJkmTi%2Bckb01BS5HaGnems%2BZWzdb62qQTfQdwDDl2Wj0RuKnYpX1sDrJljcvHTqow4%2FNn5SBNXYuzPD0Y8agDsRlpr3NIg1vyYGnSS%2BPUURVIcRhC2A0ZyYPxTKqNyuo8IYRlpMSGLYRJDRdOYyEEqEpDIIfY5qYhhLBrL0s%2BLS7imqq995tijYVdCxlx0EMnaW9XlvD93m4aZ0s4cZ3gqspYOjppRKcMcXipGZyU7Ju63iXIhVOKx53trCWqtMpwZzor8n%2BqynBnnlJlNGa5M51VSmlksBSDlOHlKk%2FzUq0KcVVEYgidytz3coS19lPrFh1y2fUP1Xu1HKsRxHWakao9hLNglZHeESaal3vvocKx3zKP7BXnLJtaxgNkjKY1Wp1y7inYUVG7Akg79vSeKefKwHJ1kEtTikBxJrYkmpIBr1TgPdgbrZ1WkPbuz84UEiNZG1ZLhdydE0sqeqlytGG2pEt4%2B0Ccc9H8zs4kS1Br0542F0fqR0lesOCwyehoIioZq86gqcWq6XbZwrTGqMSAhmOhKWVpjp74PObIsLt3R3g0g1oETs8R32woFbLEHUuEs9CiZa6SslZJmpcuf%2F4GcNc0tDf9lYcxvwGVrI3mkDVeY0NjbumOui9XCtkYlZJIbjt3pF8tzQ0czZTvTXnJSdlHSstRXAlPUpQ4vRy1TK4nnNEwaDTd2ZNE6fQSQiieevBiprjXLamjpco5Mv1YSuH%2Fpry4o%2BMPN70cgZI4tYyG7h3J4evzI1tJ%2BIynBLTHMdnlpXQKsTQCkoAaPakZEctL%2BpbK0Y7FMkloCnrXHMsKileMpS0ZR3zvveez2kDJG6szRiSuJqaulfbOaQJ5KfcYH5wnLK82v2uMCmHaPDz%2BDVj%2BfSNNBGdZmIu9v6EIKWbVZHTmVYrl9clSRVsS0urOKDdlW1J%2B6SubFoH3SiF13X8A3uobUgsAG3MAAAAASUVORK5CYII%3D')%20repeat%3B%20outline%3A%20solid%201px%20%23969696%3B%22%3E%3C%2Fdiv%3E"),
        generateEmptyPassback: (e, t) => decodeURIComponent("%3Cstyle%3E%0A.dvbs_container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22dvbs_container%22%20style%3D%22width%3A%20" + e + "px%3B%20height%3A%20" + t + "px%3B%22%3E%09%0A%3C%2Fdiv%3E"),
        exposeContainer(e) {
          e.style.visibility = "";
        },
        generatePassbackIframe(e) {
          const t = `\n      <html style="margin:0; padding:0; overflow:hidden;">\n        <head></head>\n        <body style="margin:0; padding:0; overflow:hidden;">\n          ${e}\n        </body>\n      </html>`,
            i = document.createElement("iframe");
          return i.style.border = "0", i.style.height = "100%", i.style.width = "100%", i.style.overflow = "hidden", i.src = "data:text/html," + encodeURIComponent(t), i;
        },
        injectPassbackContent(e) {
          try {
            u.innerHTML = "";
            const t = this.generatePassbackIframe(e);
            u.appendChild(t);
          } catch (e) {}
        },
        injectVerifyCallback(r) {
          const a = t.currentWindow(),
            n = this;
          a[r] = t => {
            this.isJSONPCalled = !0;
            let r = !1;
            switch (n.shouldInvokeVpaidCallback() && setTimeout(() => {
              s.VpaidHandler(t, d, i, e, n.impressionId, l.getBlockingServerPrefix(), l.getAdID(), l.getBlockingPartnerCallbackName(), g).execute();
            }, 0), t.ResultID) {
              case 1:
                let e;
                r = !0, t.Passback ? e = decodeURIComponent(t.Passback) : t.AdWidth && t.AdHeight && (e = this.generateDefaultPassback(parseInt(t.AdWidth), parseInt(t.AdHeight))), e && u && (this.injectPassbackContent(e), this.exposeContainer(u));
                break;
              case 2:
              case 3:
                break;
              case 4:
                if (u && t.AdWidth && t.AdHeight) {
                  const e = parseInt(t.AdWidth),
                    i = parseInt(t.AdHeight),
                    r = this.generateEmptyPassback(e, i);
                  this.injectPassbackContent(r), this.exposeContainer(u);
                }
            }
            this.reportPerformanceMetrics(), this.reportBlockDecision(r);
          };
        },
        generateOnErrorCallback() {
          return () => {
            this.reportError(n.ClientErrorType.VerifyFailedToLoad), this.renderAdFromError("VFTL");
          };
        },
        generateOnLoadCallback() {
          return () => {
            this.isJSONPCalled || (this.reportError(n.ClientErrorType.VerifyFailedToLoad), this.renderAdFromError("VCF"));
          };
        },
        generateScriptId: () => `verify-call-${c.getTagUniqueKey()}`,
        generateTagCallbackName: () => `__tagObject_callback_${e.uid}`,
        generateVerifyCallbackName: () => `__verify_callback_${e.uid}`,
        initPerformanceMetrics() {
          t.isPerformanceAPISupported() && t.workingWindow().performance.mark("dv_create_req_start");
          const i = c.getTagLoadedMS(),
            r = d.getCurrentTime();
          e.timeToFirstReportMs = r - i;
        },
        injectVerifyTag(e, r, a, n) {
          const s = t.currentDocument(),
            o = t.getCurrentScript() || s.body;
          return i.addScriptAsync(e, o, r, !1, a, n);
        },
        renderAdFromError(e = "") {
          let t = "AdRenderedUponVerifyFailure__" + e;
          try {
            this.exposeContainer(u);
          } catch (e) {
            t += "__RenderingMethodFailed";
          }
          this.reportError(n.ClientErrorType.AdRenderedUponVerifyFailure, t);
        },
        reportBlockDecision(e) {
          try {
            p(e);
          } catch (e) {}
        },
        reportPerformanceMetrics() {
          try {
            const e = t.currentWindow(),
              i = this,
              r = {
                verify: {
                  prefix: "vf",
                  stats: [{
                    name: "duration",
                    prefix: "dur"
                  }, {
                    name: "transferSize",
                    prefix: "sz"
                  }]
                },
                dvtp_src: {
                  prefix: "tg",
                  stats: [{
                    name: "duration",
                    prefix: "dur"
                  }]
                }
              },
              n = i.monitorPerformance(e, r),
              s = d.getCurrentTime();
            a.MessageHandler.registerEventCall(i.impressionId, Object.assign(Object.assign({}, n), {
              tuveims: c.getVerifyInjectedMS() - c.getTagLoadedMS(),
              tuveems: s - c.getTagLoadedMS()
            }));
          } catch (e) {}
        },
        reportError(e, t) {
          h.reportError(e, null != t ? t : "");
        },
        buildTagObject(t) {
          const i = {
            dv_protocol: "https:"
          };
          return i.ServerPublicDns = t.ServerPublicDns, i.type = "blocking", i.uid = e.uid, i;
        },
        shouldInvokeVpaidCallback() {
          const e = l.getAdID();
          return l.getTagType() === o.DvTagType.Video && e.length > 0;
        }
      });
    },
    7183: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VpaidHandler = void 0;
      t.VpaidHandler = (e, t, i, r, a, n, s, o, d) => ({
        wasMonitoringInjected: !1,
        execute() {
          this.reportBsEvent({
            dvp_innovidImp: 1
          }), this.injectResponseReceivedCallback(), this.bindVideoEvents();
        },
        bindOrReportVideoEvent(e, t) {
          const i = this.getPreviousVpaidEvents(),
            r = this;
          if (i.indexOf(e) > -1) r.reportVideoTimingEvent(t);else {
            const i = () => {
              r.reportVideoTimingEvent(t);
            };
            this.getVpaidWrapper().subscribe(i, e);
          }
        },
        bindVideoEvents() {
          try {
            const e = this.getVpaidWrapper();
            if ((null == e ? void 0 : e.getPreviousEvents) && "function" == typeof e.getPreviousEvents) {
              e.getPreviousEvents().indexOf("AdStarted") > -1 ? this.initiateMonitoring() : e.subscribe(this.initiateMonitoring.bind(this), "AdStarted"), this.bindOrReportVideoEvent("AdError", "dvp_ader"), this.bindOrReportVideoEvent("AdStopped", "dvp_adst"), this.bindOrReportVideoEvent("AdVideoStart", "dvp_avse"), this.bindOrReportVideoEvent("AdImpression", "dvp_aie");
            } else this.reportBsEvent({
              dvp_innovidCallbackEx: 3,
              dvp_innovidCallbackExMsg: "vpaidWrapper.getPreviousEvents not a function"
            });
          } catch (e) {
            this.reportBsEvent({
              dvp_innovidCallbackEx: 2,
              dvp_innovidCallbackExMsg: e.message
            });
          }
        },
        buildEventUrl(e) {
          return `${this.generateBsEventBaseUrl()}&${t.serializeObjectToQueryString(e, !0)}`;
        },
        generateBsEventBaseUrl() {
          const e = "impid=" + encodeURIComponent(a);
          return `${n}bsevent.gif?${e}`;
        },
        generateResponseReceivedCallbackName: () => `responseReceived_${a}`,
        generateTimestamp() {
          try {
            return Date.now();
          } catch (e) {
            return new Date().getTime();
          }
        },
        getEventParams(e) {
          const t = this.resolveOriginalResultId();
          let i,
            r = t;
          if (!e) switch (r = 2, t) {
            case 1:
              i = 21;
              break;
            case 2:
              i = 20;
              break;
            case 3:
              i = 22;
              break;
            case 4:
              i = 23;
          }
          const a = e ? "1" : "0";
          return Object.assign({
            bres: r,
            dvp_blkDecUsed: a
          }, i && {
            breason: i
          });
        },
        getPreviousVpaidEvents() {
          return this.getVpaidWrapper().getPreviousEvents();
        },
        getVpaidWrapper: () => window[s](),
        initiateMonitoring() {
          this.wasMonitoringInjected || (this.wasMonitoringInjected = !0, this.reportBsEvent({
            dvp_injd: 1
          }), "undefined" != typeof process && void 0 !== process.env || d(r));
        },
        injectResponseReceivedCallback() {
          const e = this.resolveOriginalResultId(),
            t = this.generateResponseReceivedCallbackName();
          if ("function" == typeof window[o]) {
            let i = !1;
            const r = this;
            setTimeout(() => {
              r.reportBsEvent({
                dvp_wasCallbackCalled: i
              });
            }, 1e3), window[t] = function (e, t, a, n, s, o, d) {
              i = !0;
              try {
                if (d) r.reportBsEvent({
                  dvp_stat: d
                });else {
                  const i = r.generateTimestamp();
                  r.reportBsEvent({
                    dvp_r9: i
                  });
                  const o = r.getEventParams(t);
                  o.dvp_cStartTS = a, o.dvp_cEndTS = n, o.dvp_dReceivedTS = s, o.dvp_wasAdPlayed = e, r.reportBsEvent(o), e && r.initiateMonitoring();
                }
              } catch (e) {
                r.reportBsEvent({
                  dvp_innovidCallbackEx: 1,
                  dvp_innovidCallbackExMsg: e.message
                });
              }
            };
            try {
              const i = this.generateTimestamp();
              r.reportBsEvent({
                dvp_r8: i
              }), window[o](e, t);
            } catch (e) {
              this.reportBsEvent({
                dvp_innovidEx: 1,
                dvp_innovidExMsg: e.message
              });
            }
          } else this.reportBsEvent({
            dvp_innovidNoCallback: 1
          });
        },
        reportBsEvent(e) {
          const t = this.buildEventUrl(e);
          i.sendBeacon(t, !0);
        },
        reportVideoTimingEvent(e) {
          const t = {};
          t[e] = this.generateTimestamp(), this.reportBsEvent(t);
        },
        resolveOriginalResultId() {
          let t;
          switch (e.ResultID) {
            case 5:
              t = 1;
              break;
            case 6:
              t = 2;
              break;
            default:
              t = e.ResultID;
          }
          return t;
        }
      });
    },
    5765: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdDomElementObserverBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(3322);
      class s extends a.BaseAdBL {
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adSelected]: this.startObservingDomElement.bind(this)
          };
        }
        startObservingDomElement(e) {
          var t, i;
          const r = null === (t = null == e ? void 0 : e.adCandidate) || void 0 === t ? void 0 : t.domElement,
            a = null === (i = null == e ? void 0 : e.adCandidate) || void 0 === i ? void 0 : i.windowElement;
          if (r && a) {
            n.ScriptDynamicFlags.getInstance().turnOn(4);
            const e = new MutationObserver(function (t) {
                this.handleDomElementRemoval(e, r, a);
              }.bind(this)),
              t = {
                subtree: !0,
                childList: !0
              };
            e.observe(a.document, t);
          }
        }
        handleDomElementRemoval(e, t, i) {
          i.document.contains(t) || (n.ScriptDynamicFlags.getInstance().turnOn(8), e.disconnect());
        }
        init() {}
      }
      t.AdDomElementObserverBL = s;
    },
    3502: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdElementInfoExtractorBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(3380),
        s = i(540);
      class o extends a.BaseAdBL {
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adSelected]: this.adSelected.bind(this)
          };
        }
        adSelected(e) {
          let t = this.extractAdElementType(e);
          t = this.logAdDimensionDataPoints(e) || t, t && r.EventBus.dispatchEvent(r.DvEvent.reportData, e);
        }
        extractAdElementType(e) {
          var t;
          return !!(null === (t = null == e ? void 0 : e.adCandidate) || void 0 === t ? void 0 : t.domElement) && (e.adCandidate.adElementType = n.Utilities.extractElementType(e.adCandidate.domElement), !0);
        }
        logAdDimensionDataPoints(e) {
          var t;
          try {
            const i = null === (t = null == e ? void 0 : e.adCandidate) || void 0 === t ? void 0 : t.domElement;
            if (!n.Utilities.isNullOrEmpty(i)) {
              const {
                tagName: t
              } = i;
              if ("IFRAME" === (null == t ? void 0 : t.toUpperCase())) {
                const t = this.getIframeDocument(i);
                if (void 0 !== t) {
                  const i = this.getBiggestChildElement(t);
                  if (void 0 !== i) {
                    const {
                      scrollHeight: t,
                      scrollWidth: r
                    } = i;
                    return e.adCandidate.largestChildElementHeight = t, e.adCandidate.largestChildElementWidth = r, !0;
                  }
                }
              }
            }
            return !1;
          } catch (e) {
            return !1;
          }
        }
        getIframeDocument(e) {
          try {
            return e.contentDocument || e.contentWindow.document;
          } catch (e) {
            return;
          }
        }
        getBiggestChildElement(e) {
          try {
            const t = this.getPotentialAdChildren(e);
            return this.findBiggestChild(t);
          } catch (e) {}
        }
        findBiggestChild(e) {
          const t = new s.ValidateByAdTypeAndSize();
          return e.filter(e => t.validate(e)).reduce((e, t) => e.scrollHeight * e.scrollWidth >= t.scrollHeight * t.scrollWidth ? e : t);
        }
        getPotentialAdChildren(e) {
          const t = e.querySelectorAll(["object", "embed", "img", "iframe", "svg", "canvas"].join(","));
          return Array.prototype.slice.call(t);
        }
        init() {}
      }
      t.AdElementInfoExtractorBL = o;
    },
    4021: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdSelector = void 0;
      const r = i(7360),
        a = i(194),
        n = i(712),
        s = i(6751),
        o = i(1800),
        d = i(425),
        l = i(749),
        c = i(7749);
      class u extends s.BaseAdBL {
        getActionName() {
          return "AdSelector";
        }
        init() {
          this.adCandidates = [], this.wasImpressionServed = !1, this.wasAdSelected = !1, this.timeoutOccurred = !1, this.adSelectedDelayTime = -1;
        }
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adCandidateLocated]: this.adCandidateLocated.bind(this),
            [r.DvEvent.impressionServed]: this.impressionServed.bind(this),
            [r.DvEvent.unloadData]: this.unloadData.bind(this),
            [r.DvEvent.delayAdSelection]: this.delayAdSelectionCalled.bind(this),
            [r.DvEvent.reserveAdLocator]: this.reserveAdLocator.bind(this)
          };
        }
        adCandidateLocated(e) {
          const t = e.adCandidate;
          this.wasAdSelected || (this.fillAdCandidates(t), this.trySelectAd(), this.timeoutOccurred && this.reportSelectedAd());
        }
        impressionServed() {
          this.wasImpressionServed = !0, this.adSelectedDefaultDelayTime = a.DvObject.getConsolidationTimeout() || 2100, this.detectedDeliveryType = a.DvObject.getDetectedDeliveryType(), c.DvTagDataObject.getTagType() != n.DvTagType.Video && 3 != this.detectedDeliveryType || (this.adSelectedDefaultDelayTime = 0), this.trySelectAd(), this.registerAdSelectionTimeout(this.adSelectedDefaultDelayTime);
        }
        fillAdCandidates(e) {
          let t = this.adCandidates.filter(t => t.domElement == e.domElement)[0];
          t && this.isSameDetectedDeliveryType(t, e) ? (t.priority += e.priority, t.locatorMethods = t.locatorMethods | e.locatorMethods, t.state = 4 == t.state ? e.state : t.state) : (this.adCandidates.push(e), r.EventBus.dispatchEvent(r.DvEvent.adCandidateApproved, new o.AdCandidateEventData(e)));
        }
        isSameDetectedDeliveryType(e, t) {
          return e.supportedDeliveryType.every(e => t.supportedDeliveryType.indexOf(e) > -1);
        }
        trySelectAd() {
          if (!this.wasImpressionServed || !this.adCandidates.length) return;
          let e = this.adCandidates.filter(e => e.supportedDeliveryType.some(e => e == this.detectedDeliveryType) && 1 == e.state);
          if (this.adPriorityToReserve && (e = e.filter(e => e.priority >= this.adPriorityToReserve)), e.length) {
            const t = e.reduce((e, t) => e.priority >= t.priority ? e : t);
            this.currentSelectedAd !== t && (this.currentSelectedAd = t, r.EventBus.dispatchEvent(r.DvEvent.bestAdCandidateChanged, new o.AdCandidateEventData(t)));
          }
        }
        reportSelectedAd() {
          if (this.timeoutOccurred = !0, this.currentSelectedAd && !this.wasAdSelected) if (this.adPriorityToReserve && this.currentSelectedAd.priority < this.adPriorityToReserve) this.currentSelectedAd = null;else {
            this.wasAdSelected = !0, this.currentSelectedAd.state = 2;
            let e = new o.AdCandidateEventData(this.currentSelectedAd);
            r.EventBus.dispatchEvent(r.DvEvent.adSelected, e), this.setDestroySelectedAdTimeout(e);
          }
          this.destroyAds();
        }
        setDestroySelectedAdTimeout(e) {
          d.BrowserAdaptor.setTimeout(() => {
            r.EventBus.dispatchEvent(r.DvEvent.adDestroy, e);
          }, 12e5);
        }
        unloadData(e) {
          if (!this.wasImpressionServed) return;
          const t = e.relevantData;
          this.reportSelectedAd(), this.wasAdSelected || this.reportNotMeasured || (this.reportNotMeasured = !0, l.MessageHandler.sendMessage({
            isnmms: t.updateTime
          }));
        }
        destroyAds() {
          this.adCandidates.filter(e => 1 == e.state).forEach(e => {
            r.EventBus.dispatchEvent(r.DvEvent.adDestroy, new o.AdCandidateEventData(e)), e.state = 3;
          });
        }
        reserveAdLocator(e) {
          this.adPriorityToReserve = e.adPriority;
        }
        delayAdSelectionCalled(e) {
          const t = e.delayTimeMS;
          this.registerAdSelectionTimeout(t);
        }
        registerAdSelectionTimeout(e) {
          !this.wasAdSelected && e > this.adSelectedDelayTime && (this.adSelectedDelayTime = e, this.adSelectionTimeoutId && d.BrowserAdaptor.clearTimeout(this.adSelectionTimeoutId), this.adSelectionTimeoutId = d.BrowserAdaptor.setTimeout(this.reportSelectedAd.bind(this), this.adSelectedDelayTime));
        }
      }
      t.AdSelector = u;
    },
    1847: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdSelectorLogger = void 0;
      const r = i(7360),
        a = i(712),
        n = i(6751),
        s = i(749),
        o = i(8170),
        d = i(3380);
      class l extends n.BaseAdBL {
        init() {
          this.adCandidatesLocatorMethods = 0, this.numberOfAdCandidates = 0, this.wasAdSelected = !1;
        }
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adCandidateLocated]: this.adCandidateLocated.bind(this),
            [r.DvEvent.adCandidateApproved]: this.adCandidateApproved.bind(this),
            [r.DvEvent.adSelected]: this.adSelected.bind(this)
          };
        }
        adCandidateLocated(e) {
          this.wasAdSelected || (this.adCandidatesLocatorMethods = this.adCandidatesLocatorMethods | e.adCandidate.locatorMethods);
        }
        adCandidateApproved() {
          this.numberOfAdCandidates++;
        }
        adSelected(e) {
          this.wasAdSelected = !0, s.MessageHandler.sendMessage({
            msrcanlm: this.adCandidatesLocatorMethods,
            msrcannum: this.numberOfAdCandidates,
            [o.DiagnosticParamsSingleton.getQueryParamName("tmads")]: d.Utilities.getTimeDiff()
          }), e.adCandidate.locatorMethods & (a.LocatorMethods.DisplayIntegratedCeltra | a.LocatorMethods.DisplayNonIntegratedCeltra) && s.MessageHandler.sendMessage({
            dvp_csm: e.adCandidate.celtraTagSearchMethod
          });
        }
      }
      t.AdSelectorLogger = l;
    },
    8720: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdSizeBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(1800),
        s = i(7749),
        o = i(712);
      class d extends r.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.exposureData]: this.handleAdSizeData.bind(this)
          };
        }
        handleAdSizeData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          if (s.DvTagDataObject.getTagType() == o.DvTagType.Video && !i.adIsPlaying || t.adWidth && t.adHeight || !i.adSize) return;
          const r = t.adWidth,
            d = t.adHeight;
          if (t.adWidth = i.adSize.width ? Math.ceil(i.adSize.width) : t.adWidth, t.adHeight = i.adSize.height ? Math.ceil(i.adSize.height) : t.adHeight, r != t.adWidth || d != t.adHeight) {
            const e = new n.AdCandidateEventData(t);
            a.EventBus.dispatchEvent(a.DvEvent.adSizeChangedData, e), a.EventBus.dispatchEvent(a.DvEvent.reportData, e);
          }
        }
      }
      t.AdSizeBL = d;
    },
    3738: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdWrapperSizeBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(712),
        s = i(3380),
        o = i(3868),
        d = i(749);
      class l extends r.BaseAdBL {
        init() {}
        isSupported() {
          return !(1 & o.WindowAdaptor.getScenarioType() || 4 & o.WindowAdaptor.getScenarioType());
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.exposureData]: this.handleWrapperAdSizeData.bind(this)
          };
        }
        handleWrapperAdSizeData(e) {
          var t, i;
          try {
            const r = e.relevantData,
              n = null === (t = null == e ? void 0 : e.adCandidate) || void 0 === t ? void 0 : t.adWrapperHeight,
              o = null === (i = null == e ? void 0 : e.adCandidate) || void 0 === i ? void 0 : i.adWrapperWidth,
              {
                wrapperSize: {
                  height: d,
                  width: l
                } = {}
              } = r;
            if (!s.Utilities.isNullOrEmpty(d) && !s.Utilities.isNullOrEmpty(l)) {
              const t = Math.round(d),
                i = Math.round(l);
              e.adCandidate.adWrapperHeight = t, e.adCandidate.adWrapperWidth = i, t === n && i === o || a.EventBus.dispatchEvent(a.DvEvent.reportData, e);
            }
          } catch (e) {
            d.MessageHandler.sendError(n.ClientErrorType.MeasurementError, e, "couldn't extract wrapper Size");
          }
        }
      }
      t.AdWrapperSizeBL = l;
    },
    6751: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseAdBL = void 0;
      const r = i(7360);
      t.BaseAdBL = class {
        constructor() {
          this.isSupported() && (this.init(), r.EventBus.addEventsListener(this.getEventsAndCallbacksToRegister(), this.getActionName()));
        }
        getActionName() {
          return "BaseAdBL";
        }
      };
    },
    7127: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseAdDataLoggerBL = void 0;
      const r = i(7360),
        a = i(194),
        n = i(1800),
        s = i(3380);
      t.BaseAdDataLoggerBL = class {
        constructor() {
          this.isSupported() && s.Utilities.isPercentageCriteriaPassed(this.getTrafficPercentage()) && this.init();
        }
        init() {
          r.EventBus.addEventListener(r.DvEvent.impressionServed, () => {
            this.isSupportedDetectedDeliveryType() && r.EventBus.addEventsListener(this.getEventsAndCallbacksToRegister(), this.getActionName());
          });
        }
        report(e) {
          r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e));
        }
        isSupportedDetectedDeliveryType() {
          return this.getSupportedDetectedDeliveryType().some(e => e == a.DvObject.getDetectedDeliveryType());
        }
      };
    },
    6128: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Cm360Logger = void 0;
      const r = i(6751),
        a = i(7749),
        n = i(712),
        s = i(7360),
        o = i(749);
      class d extends r.BaseAdBL {
        constructor(e) {
          super(), this.adContainerInspector = e.createAdContainerInspector();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [s.DvEvent.impressionServed]: this.reportAdContainerData.bind(this)
          };
        }
        reportAdContainerData() {
          var e, t, i, r, a, n;
          let s = {};
          s.dvp_ime = null === (e = this.adContainerInspector) || void 0 === e ? void 0 : e.getDescendants(["img"]).length, s.dvp_dcime = null === (t = this.adContainerInspector) || void 0 === t ? void 0 : t.getDirectChildren(["img"]).length, s.dvp_dcife = null === (i = this.adContainerInspector) || void 0 === i ? void 0 : i.getDirectChildren(["iframe"]).length, s.dvp_dcde = null === (r = this.adContainerInspector) || void 0 === r ? void 0 : r.getDirectChildren(["div"]).length, s.dvp_dcoe = null === (a = this.adContainerInspector) || void 0 === a ? void 0 : a.getDirectChildren([], ["img", "iframe", "div"]).length;
          const d = null === (n = this.adContainerInspector) || void 0 === n ? void 0 : n.getMostPopularDirectChildElement(["img", "iframe", "div"]);
          d && (s.dvp_mpdce = d), o.MessageHandler.sendMessage(s);
        }
        init() {}
        isSupported() {
          return a.DvTagDataObject.getIsCm360CreativeWrapping() && a.DvTagDataObject.getTagType() == n.DvTagType.Display;
        }
      }
      t.Cm360Logger = d;
    },
    6991: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CreativeVsContainerBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(1800),
        s = i(1914),
        o = i(9759),
        d = i(8170),
        l = i(3380);
      class c extends a.BaseAdBL {
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adSelected]: this.processMeasuredElementData.bind(this)
          };
        }
        processMeasuredElementData(e) {
          const t = e.adCandidate,
            i = this.extractMeasuredElementType(t);
          l.Utilities.isNullOrEmpty(i) || this.sendUpdatedMeasuredElementData(i);
        }
        extractMeasuredElementType(e) {
          const t = [s.OmidMeasuredElementExtractor, o.DefaultMeasuredElementExtractor];
          for (const i of t) {
            const t = new i(e);
            if (t.isSupported()) return e.measuredElementExtractorId = t.getMeasuredElementExtractorId(), e.measuredElementType = t.extract(), e;
          }
          return null;
        }
        sendUpdatedMeasuredElementData(e) {
          d.DiagnosticParamsSingleton.reportDiagnosticParam("cvcmeeid", e.measuredElementExtractorId), r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e));
        }
        init() {}
      }
      t.CreativeVsContainerBL = c;
    },
    3723: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DataTransparencyBL = void 0;
      const r = i(659),
        a = i(194),
        n = i(7749),
        s = i(7360),
        o = i(749),
        d = i(3868),
        l = i(6751),
        c = ["sadv", "ord", "litm", "scrt", "invs", "splc", "adu", "spos"];
      class u extends l.BaseAdBL {
        constructor() {
          super(...arguments), this.timesMessageSent = 0;
        }
        getActionName() {
          return "DataTransparency";
        }
        init() {
          r.initialize(d.WindowAdaptor.workingWindow());
        }
        isSupported() {
          return !d.WindowAdaptor.isDomlessEnvironment() && d.WindowAdaptor.isPostMessageSupported();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [s.DvEvent.impressionServed]: this.subscribe.bind(this)
          };
        }
        getSellerDimensionsFromTag() {
          const e = n.DvTagDataObject.getLowerCaseParams(),
            t = {};
          for (const i of c) null != e[i] && (t[i] = e[i]);
          return t;
        }
        getSellerDimensionsFromState(e) {
          return n.DvTagDataObject.isSellerTag() || null == e.sellerDimensions ? {} : e.sellerDimensions;
        }
        onSharedStateUpdated(e) {
          if (this.timesMessageSent >= 5) return;
          this.timesMessageSent++;
          const t = r.coverageToBitFlag(e.coverage);
          if (e.coverage.buyerMonitoringTag && (e.coverage.sellerMonitoringTag || e.coverage.sellerPageTag)) {
            const i = e.linking.sharedId,
              r = this.getSellerDimensionsFromState(e);
            o.MessageHandler.sendMessage(Object.assign({
              mascid: i,
              dvp_dtcov: t
            }, r));
          } else o.MessageHandler.sendMessage({
            dvp_dtcov: t
          });
        }
        subscribe() {
          const e = a.DvObject.getImpressionId(d.WindowAdaptor.currentWindow()),
            t = n.DvTagDataObject.isSellerTag(),
            i = {
              impressionId: e,
              isSellerTag: t
            };
          t && (i.sellerDimensions = this.getSellerDimensionsFromTag()), r.subscribe(d.WindowAdaptor.workingWindow(), this.onSharedStateUpdated.bind(this), i);
        }
      }
      t.DataTransparencyBL = u;
    },
    720: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EligibilityCompatibilityIndicator = void 0;
      const r = i(6689),
        a = i(6681),
        n = i(712),
        s = i(6751),
        o = i(7749),
        d = i(194),
        l = i(7360),
        c = i(1063),
        u = i(749);
      class p extends s.BaseAdBL {
        getActionName() {
          return "EligibilityCompatibilityIndicator";
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [l.DvEvent.impressionServed]: this.start.bind(this)
          };
        }
        start() {
          let e;
          if (null == d.DvObject.getDetectedDeliveryType() || d.DvObject.isCTV()) e = !1;else if (o.DvTagDataObject.isTagTypeValid()) {
            if (d.DvObject.isMobileApp()) e = a.MraidWrapper.isSupported() || r.OmidWrapper.isSupported();else if (o.DvTagDataObject.getTagType() == n.DvTagType.Video) {
              e = !!c.VpaidWrapper.getDvVpaid();
            } else e = !0;
          } else u.MessageHandler.sendMessage({
            dvp_vtt: 1
          }), e = !1;
          let t = {
            isvelg: e ? 1 : 0
          };
          this.report(t);
        }
        report(e) {
          u.MessageHandler.sendMessage(e);
        }
      }
      t.EligibilityCompatibilityIndicator = p;
    },
    9608: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdLocatedBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(1800);
      class s extends a.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adCandidateApproved]: this.handleEvent.bind(this)
          };
        }
        handleEvent(e) {
          const t = e.adCandidate;
          t.timeMsUntilAdLocated = e.updateTime, t.isEngagementEligible = 1, r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(t));
        }
      }
      t.AdLocatedBL = s;
    },
    6163: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseInteractionBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(6751);
      class s extends n.BaseAdBL {
        isSupported() {
          return !0;
        }
        init() {}
        getEventsAndCallbacksToRegister() {
          return {
            [this.getInteractionEventName()]: this.handleEvent.bind(this)
          };
        }
        handleEvent(e) {
          if (this.allowReport(e.adCandidate)) {
            1 == this.update(e.adCandidate, e.relevantData) && r.EventBus.dispatchEvent(r.DvEvent.reportData, new a.AdCandidateEventData(e.adCandidate));
          }
        }
        allowReport(e) {
          return !e.wasAdStopped;
        }
      }
      t.BaseInteractionBL = s;
    },
    5648: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EngagementReportRtsBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(1800);
      class s extends r.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.orientationchangeLandscapeData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.orientationChangePortraitData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.mouseMoveData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.keyPressData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.firstTouchData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.firstHoverData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.focusData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.firstClickOnAdElementData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.firstFocusIntoAdElementData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.omidClickData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.abandonData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.skipData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.pauseData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.adSizeData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.resumeData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.volumeData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.scrollData]: this.TrySendEngagementInteraction.bind(this),
            [a.DvEvent.unloadData]: this.TrySendEngagementUnload.bind(this)
          };
        }
        TrySendEngagementInteraction(e) {
          let t = e.adCandidate,
            i = this.adEngagementReported(t),
            r = this.pageEngagementReported(t);
          i == t.adEngagement && r == t.pageEngagement || (t.adEngagement = i, t.pageEngagement = r, a.EventBus.dispatchEvent(a.DvEvent.reportData, new n.AdCandidateEventData(t)));
        }
        TrySendEngagementUnload(e) {
          this.TrySendEngagementInteraction(e);
          let t = e.adCandidate;
          t.adEngagement || t.pageEngagement || (t.noEngagement = !0, a.EventBus.dispatchEvent(a.DvEvent.reportData, new n.AdCandidateEventData(t)));
        }
        adEngagementReported(e) {
          if (e.timeMsUntilAbandon || e.timeMsUntilSkip || e.timeMsUntilPause || e.timeMsUntilClick || e.timeMsUntilAdSizeIncrease || e.timeMsUntilResume || e.timeMsUntilTouch || e.timeMsUntilHover || e.timeMsUntilAdSizeDecrease || e.timeMsUntilVolumeIncrease || e.timeMsUntilVolumeDecrease || e.timeMsUntilVolumeUnMute || e.lastTimeMsVolumeMute) return !0;
        }
        pageEngagementReported(e) {
          if (e.timeMsUntilFocusOut || e.timeMsUntilFocusIn || e.timeMsUntilMouseMove || e.timeMsUntilKeyPress || e.timeMsUntilScroll || e.timeMsUntilOrientationChangeToLandscape || e.timeMsUntilOrientationChangeToPortrait) return !0;
        }
      }
      t.EngagementReportRtsBL = s;
    },
    5443: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionAdSizeBL = void 0;
      const r = i(7360),
        a = i(6163),
        n = i(8170);
      class s extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.adSizeData;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adSizeData]: e => this.handleAdSizeEvent(e, 1),
            [r.DvEvent.omidAdSizeData]: e => this.handleOmidAdSizeEvent(e, 2)
          };
        }
        handleAdSizeEvent(e, t) {
          n.DiagnosticParamsSingleton.reportOnce("asmm", t), super.handleEvent(e);
        }
        handleOmidAdSizeEvent(e, t) {
          n.DiagnosticParamsSingleton.reportOnce("asmm", t), super.allowReport(e.adCandidate) && this.updateOmidAdSize(e.adCandidate, e.relevantData);
        }
        update(e, t) {
          let i = 2;
          if (e.isPaused) return i;
          const r = t.updateTime;
          switch (this.getAdSizeState(e.lastAdSize, t.adSize)) {
            case 3:
              break;
            case 2:
              if (e.timeMsUntilAdSizeIncrease) break;
              e.timeMsUntilAdSizeIncrease = r, i = 1;
              break;
            case 1:
              if (e.timeMsUntilAdSizeDecrease) break;
              e.timeMsUntilAdSizeDecrease = r, i = 1;
          }
          return e.lastAdSize = t.adSize, i;
        }
        updateOmidAdSize(e, t) {
          if (e.isPaused) return;
          const i = t.updateTime;
          switch (this.getAdSizeState(e.lastAdSize, t.adSize)) {
            case 3:
              break;
            case 2:
              n.DiagnosticParamsSingleton.reportOnce("omtuasi", i);
              break;
            case 1:
              n.DiagnosticParamsSingleton.reportOnce("omtuasd", i);
          }
          e.lastAdSize = t.adSize;
        }
        getAdSizeState(e, t) {
          const i = this.getSurface(e),
            r = this.getSurface(t);
          return i && r && i != r ? r > i ? 2 : 1 : 3;
        }
        getSurface(e) {
          return e && e.width && e.height ? e.width * e.height : 0;
        }
      }
      t.InteractionAdSizeBL = s;
    },
    7999: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionClickBL = void 0;
      const r = i(7360),
        a = i(6163),
        n = i(712),
        s = i(3322),
        o = i(1800),
        d = i(7749);
      class l extends a.BaseInteractionBL {
        init() {
          this.isFocusIntoAdElementLogicApplicable() && s.ScriptDynamicFlags.getInstance().turnOn(67108864);
        }
        getInteractionEventName() {
          return r.DvEvent.firstClickOnAdElementData;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.firstClickOnAdElementData]: e => this.handleClickEvent(e, 1),
            [r.DvEvent.omidClickData]: e => this.handleClickEvent(e, 2),
            [r.DvEvent.firstFocusIntoAdElementData]: e => this.handleFocusIntoAdElementEvent(e, 4)
          };
        }
        handleClickEvent(e, t) {
          e.adCandidate.clickMeasurementMethod |= t, super.allowReport(e.adCandidate) && this.update(e.adCandidate, e.relevantData), r.EventBus.dispatchEvent(r.DvEvent.reportData, new o.AdCandidateEventData(e.adCandidate));
        }
        handleFocusIntoAdElementEvent(e, t) {
          this.isFocusIntoAdElementLogicApplicable() && this.handleClickEvent(e, t);
        }
        isFocusIntoAdElementLogicApplicable() {
          return d.DvTagDataObject.getTagType() == n.DvTagType.Display;
        }
        update(e, t) {
          let i = 2;
          return e.isPaused || e.timeMsUntilClick || (e.timeMsUntilClick = t.updateTime, i = 1), i;
        }
      }
      t.InteractionClickBL = l;
    },
    8874: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionFocusBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.focusData;
        }
        update(e, t) {
          let i = 2,
            r = t.updateTime;
          if (e.isPaused) return i;
          switch (this.getFocusState(e.lastFocus, t.focus)) {
            case 3:
              break;
            case 1:
              if (e.timeMsUntilFocusIn) break;
              e.timeMsUntilFocusIn = r, i = 1;
              break;
            case 2:
              if (e.timeMsUntilFocusOut) break;
              e.timeMsUntilFocusOut = r, i = 1;
          }
          return e.lastFocus = t.focus, i;
        }
        getFocusState(e, t) {
          let i;
          return null == e || null == t || e == t ? i = 3 : 0 == e && 1 == t ? i = 1 : 1 == e && 0 == t && (i = 2), i;
        }
      }
      t.InteractionFocusBL = n;
    },
    8463: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionHoverBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.firstHoverData;
        }
        update(e, t) {
          let i = 2;
          return e.isPaused || e.timeMsUntilHover || (e.timeMsUntilHover = t.updateTime, i = 1), i;
        }
      }
      t.InteractionHoverBL = n;
    },
    4183: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionTouchBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.firstTouchData;
        }
        update(e, t) {
          let i = 2;
          return e.isPaused || e.timeMsUntilTouch || (e.timeMsUntilTouch = t.updateTime, i = 1), i;
        }
      }
      t.InteractionTouchBL = n;
    },
    2359: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionKeyPressBL = void 0;
      const r = i(6163),
        a = i(7360);
      class n extends r.BaseInteractionBL {
        getInteractionEventName() {
          return a.DvEvent.keyPressData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilKeyPress || (e.timeMsUntilKeyPress = t.updateTime, i = 1), i;
        }
      }
      t.PageInteractionKeyPressBL = n;
    },
    8345: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionMouseMoveBL = void 0;
      const r = i(6163),
        a = i(7360);
      class n extends r.BaseInteractionBL {
        getInteractionEventName() {
          return a.DvEvent.mouseMoveData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilMouseMove || (e.timeMsUntilMouseMove = t.updateTime, i = 1), i;
        }
      }
      t.PageInteractionMouseMoveBL = n;
    },
    6355: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionOrientationChangeLandscapeBL = void 0;
      const r = i(6163),
        a = i(7360);
      class n extends r.BaseInteractionBL {
        getInteractionEventName() {
          return a.DvEvent.orientationchangeLandscapeData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilOrientationChangeToLandscape || (e.timeMsUntilOrientationChangeToLandscape = t.updateTime, i = 1), i;
        }
      }
      t.PageInteractionOrientationChangeLandscapeBL = n;
    },
    8409: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionOrientationChangePortraitBL = void 0;
      const r = i(6163),
        a = i(7360);
      class n extends r.BaseInteractionBL {
        getInteractionEventName() {
          return a.DvEvent.orientationChangePortraitData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilOrientationChangeToPortrait || (e.timeMsUntilOrientationChangeToPortrait = t.updateTime, i = 1), i;
        }
      }
      t.PageInteractionOrientationChangePortraitBL = n;
    },
    8076: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionScrollBL = void 0;
      const r = i(6163),
        a = i(7360);
      class n extends r.BaseInteractionBL {
        getInteractionEventName() {
          return a.DvEvent.scrollData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilScroll || (e.timeMsUntilScroll = t.updateTime, i = 1), i;
        }
      }
      t.PageInteractionScrollBL = n;
    },
    9289: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionAbandonBL = void 0;
      const r = i(7360),
        a = i(6163),
        n = i(7749),
        s = i(712);
      class o extends a.BaseInteractionBL {
        init() {}
        getInteractionEventName() {
          return r.DvEvent.abandonData;
        }
        update(e, t) {
          let i = 2;
          return n.DvTagDataObject.getTagType() != s.DvTagType.Video || e.timeMsUntilSkip || e.timeMsUntilAbandon || (e.timeMsUntilAbandon = t.updateTime, i = 1), i;
        }
      }
      t.InteractionAbandonBL = o;
    },
    1816: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionPauseBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.pauseData;
        }
        update(e, t) {
          let i = 2;
          return e.isPaused || (e.timeMsUntilPause || (e.timeMsUntilPause = t.updateTime, i = 1), e.isPaused = !0), i;
        }
      }
      t.InteractionPauseBL = n;
    },
    3363: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionResumeBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.resumeData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilResume || 1 != e.isPaused || (e.isPaused = !1, e.timeMsUntilResume = t.updateTime, i = 1), i;
        }
      }
      t.InteractionResumeBL = n;
    },
    1006: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionSkipBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.skipData;
        }
        update(e, t) {
          let i = 2;
          return e.timeMsUntilSkip || (e.timeMsUntilSkip = e.adSkippedTime = t.updateTime, e.adSkippableMs || (e.adSkippableMs = t.updateTime), i = 1), i;
        }
      }
      t.InteractionSkipBL = n;
    },
    6044: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionVolumeBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.volumeData;
        }
        update(e, t) {
          let i = 2,
            r = t.updateTime;
          switch (this.getVolumeState(e.lastVideoVolume, t.volume)) {
            case 5:
              break;
            case 3:
              if (e.timeMsUntilVolumeMute) break;
              e.timeMsUntilVolumeMute = r, i = 1;
              break;
            case 1:
              if (e.timeMsUntilVolumeDecrease) break;
              e.timeMsUntilVolumeDecrease = r, i = 1;
              break;
            case 4:
              if (e.timeMsUntilVolumeUnMute) break;
              e.timeMsUntilVolumeUnMute = r, i = 1;
              break;
            case 2:
              if (e.timeMsUntilVolumeIncrease) break;
              e.timeMsUntilVolumeIncrease = r, i = 1;
          }
          return e.lastVideoVolume = t.volume, i;
        }
        getVolumeState(e, t) {
          let i;
          return null == e || null == t || e == t ? i = 5 : 0 === t && e > 0 ? i = 3 : t < e ? i = 1 : 0 === e && t > 0 ? i = 4 : t > e && (i = 2), i;
        }
      }
      t.InteractionVolumeBL = n;
    },
    9611: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.QuartileBucketsVolumeBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(7749),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {}
        isSupported() {
          return n.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleVolumeData.bind(this),
            [r.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [r.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [r.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [r.DvEvent.adVideoCompleteData]: this.handleQuartileData.bind(this, 4)
          };
        }
        handleVolumeData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          if (!i.adIsPlaying) return;
          if (null == i.volume || i.volume < 0) return;
          const r = i.volume ? i.intervalDuration : 0,
            a = "q" + t.volumeDurationQuartileId + "ad";
          t[a] = t[a] ? t[a] + r : r, i.volume && t.markAdQuartile(2, t.volumeDurationQuartileId);
        }
        handleQuartileData(e, t) {
          const i = t.adCandidate;
          i.volumeDurationQuartileId = e + 1, r.EventBus.dispatchEvent(r.DvEvent.reportData, new a.AdCandidateEventData(i));
        }
      }
      t.QuartileBucketsVolumeBL = d;
    },
    876: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoCompleteBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.adVideoCompleteData;
        }
        update(e, t) {
          return e.wasAdStopped = !0, 2;
        }
      }
      t.VideoCompleteBL = n;
    },
    615: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoLengthBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(7749),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {}
        isSupported() {
          return n.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adVideoFirstQuartileData]: this.calculateVideoLengthDueToFirstQuartile.bind(this),
            [r.DvEvent.adVideoMidpointData]: this.calculateVideoLengthDueToSecondQuartile.bind(this),
            [r.DvEvent.adVideoCompleteData]: this.calculateVideoLengthDueToAdComplete.bind(this)
          };
        }
        calculateVideoLengthDueToFirstQuartile(e) {
          const t = e.adCandidate;
          t.adVideoTimeLine && (this.setAdDuration(t, 4), t.adDurationCalculationType = 2);
        }
        calculateVideoLengthDueToSecondQuartile(e) {
          const t = e.adCandidate;
          t.adVideoTimeLine && (t.videoLength = 2 * t.adVideoTimeLine, this.setAdDuration(t, 2), t.adDurationCalculationType = 3);
        }
        calculateVideoLengthDueToAdComplete(e) {
          const t = e.adCandidate;
          t.adVideoTimeLine && (this.setAdDuration(t), t.adDurationCalculationType = 4, r.EventBus.dispatchEvent(r.DvEvent.reportData, new a.AdCandidateEventData(t)));
        }
        setAdDuration(e, t = 1) {
          e.adDuration = Math.round(e.adVideoTimeLine * t);
        }
      }
      t.VideoLengthBL = d;
    },
    1886: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoMarkImpressionAsRenderedBL = void 0;
      const r = i(6751),
        a = i(7749),
        n = i(7360),
        s = i(1800),
        o = i(712),
        d = i(6689);
      class l extends r.BaseAdBL {
        getActionName() {
          return "VideoMarkImpressionAsRenderedBL";
        }
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [n.DvEvent.impressionServed]: this.impressionServed.bind(this)
          };
        }
        impressionServed() {
          this.getEventsImplyingPlayStarted().forEach(e => {
            n.EventBus.addEventListener(e, this.videoRenderedCallback.bind(this));
          });
        }
        getEventsImplyingPlayStarted() {
          return d.OmidWrapper.isSupported() ? [n.DvEvent.adVideoStartData, n.DvEvent.resumeData] : [n.DvEvent.adImpressionData, n.DvEvent.adVideoStartData, n.DvEvent.resumeData];
        }
        videoRenderedCallback(e) {
          const t = e.adCandidate;
          null == t.isVideoPreRendered && (t.isVideoPreRendered = 0, t.videoStartTime = e.updateTime, t.timeMsUntilVideoPlayed = e.updateTime, n.EventBus.dispatchEvent(n.DvEvent.videoStartPlaying, new s.AdCandidateEventData(t)), n.EventBus.dispatchEvent(n.DvEvent.reportData, new s.AdCandidateEventData(t)));
        }
      }
      t.VideoMarkImpressionAsRenderedBL = l;
    },
    6901: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoSkippableBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(6751),
        s = i(712);
      class o extends n.BaseAdBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == s.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.skippableData]: this.handleSkippableData.bind(this)
          };
        }
        handleSkippableData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adSkippable && (t.adSkippableMs = i.updateTime);
        }
      }
      t.VideoSkippableBL = o;
    },
    5784: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoStoppedBL = void 0;
      const r = i(7360),
        a = i(6163);
      class n extends a.BaseInteractionBL {
        getInteractionEventName() {
          return r.DvEvent.stopData;
        }
        update(e, t) {
          return e.wasAdStopped = !0, 2;
        }
      }
      t.VideoStoppedBL = n;
    },
    223: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VolumeBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(6751),
        s = i(712);
      class o extends n.BaseAdBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == s.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleVolumeData.bind(this)
          };
        }
        handleVolumeData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adIsPlaying && this.trySetVolumeValues(t, i);
        }
        trySetVolumeValues(e, t) {
          let i = t.volume;
          null == i || i < 0 || (e.timeMsUntilVolumeMeasured || (e.timeMsUntilVolumeMeasured = t.updateTime), i = Math.max(Math.min(Math.ceil(100 * i), 100), 0), 0 == i && null == e.lastTimeMsVolumeMute && (e.lastTimeMsVolumeMute = t.updateTime), e.minVideoVolume = null == e.minVideoVolume || e.minVideoVolume > i ? i : e.minVideoVolume, e.maxVideoVolume = null == e.maxVideoVolume || e.maxVideoVolume < i ? i : e.maxVideoVolume);
        }
      }
      t.VolumeBL = o;
    },
    710: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EngagementCompatibilityIndicator = void 0;
      const r = i(6751),
        a = i(7749),
        n = i(7360),
        s = i(194),
        o = i(712),
        d = i(1063),
        l = i(749);
      class c extends r.BaseAdBL {
        getActionName() {
          return "EngagementCompatibilityIndicator";
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [n.DvEvent.impressionServed]: this.start.bind(this)
          };
        }
        start() {
          let e = {
            engms: 1,
            engisel: !(a.DvTagDataObject.getTagType() == o.DvTagType.Video && !s.DvObject.isMobileApp() && !d.VpaidWrapper.getDvVpaid()) ? 1 : 0
          };
          this.report(e);
        }
        report(e) {
          l.MessageHandler.sendMessage(e);
        }
      }
      t.EngagementCompatibilityIndicator = c;
    },
    3656: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ExposureBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(6751),
        s = i(3380);
      class o extends n.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.focusData]: this.collectFocusData.bind(this),
            [r.DvEvent.strictFocusData]: this.collectStrictFocusData.bind(this),
            [r.DvEvent.viewabilityIntervalData]: this.collectViewabilityData.bind(this),
            [r.DvEvent.boundariesViewabilityIntervalData]: this.collectBoundariesViewabilityData.bind(this),
            [r.DvEvent.adImpressionData]: this.collectAdIsPlayingData.bind(this, !0),
            [r.DvEvent.adVideoStartData]: this.collectAdIsPlayingData.bind(this, !0),
            [r.DvEvent.pauseData]: this.collectAdIsPlayingData.bind(this, !1),
            [r.DvEvent.resumeData]: this.collectAdIsPlayingData.bind(this, !0),
            [r.DvEvent.abandonData]: this.collectAdIsPlayingData.bind(this, !1),
            [r.DvEvent.skipData]: this.collectAdIsPlayingData.bind(this, !1),
            [r.DvEvent.unloadData]: this.collectAdIsPlayingData.bind(this, !1),
            [r.DvEvent.adVideoCompleteData]: this.collectAdIsPlayingData.bind(this, !1),
            [r.DvEvent.volumeData]: this.collectAdVolumeData.bind(this),
            [r.DvEvent.videoLoadedData]: this.collectAdVolumeData.bind(this)
          };
        }
        collectViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          t.lastExposureTimeEvent = t.lastExposureTimeEvent || i.updateTime;
          const n = Math.max(i.updateTime - t.lastExposureTimeEvent, 100);
          t.viewabilityAdIsPlaying && (t.adVideoTimeLine = t.adVideoTimeLine ? t.adVideoTimeLine + n : n), r.EventBus.dispatchEvent(r.DvEvent.exposureData, new a.AdCandidateEventData(t, {
            adSize: i.adGeometric,
            viewportSize: i.viewportSize,
            wrapperSize: i.wrapperSize,
            screenSize: i.screenSize,
            percentage: s.Utilities.isNumber(i.percentage) ? Math.round(i.percentage) : void 0,
            offScreenPercentage: i.offScreenPercentage,
            viewabilityCalculationType: i.viewabilityCalculationType,
            focus: t.viewabilityFocus,
            strictFocus: t.viewabilityStrictFocus && t.viewabilityFocus,
            adIsPlaying: t.viewabilityAdIsPlaying,
            intervalDuration: n,
            adVideoTimeLine: t.adVideoTimeLine,
            volume: t.currentVideoVolume,
            boundariesViewability: t.boundariesViewability
          })), t.lastExposureTimeEvent = i.updateTime;
        }
        collectBoundariesViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          t.boundariesViewability = i.boundariesViewability;
        }
        collectFocusData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          t.viewabilityFocus = i.focus;
        }
        collectStrictFocusData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          t.viewabilityStrictFocus = i.focus;
        }
        collectAdIsPlayingData(e, t) {
          t.adCandidate.viewabilityAdIsPlaying = e, this.collectAdVolumeData(t);
        }
        collectAdVolumeData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          s.Utilities.isNullOrEmpty(i.volume) || (t.currentVideoVolume = i.volume);
        }
      }
      t.ExposureBL = o;
    },
    6265: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ExposureCompatibilityIndicator = void 0;
      const r = i(6689),
        a = i(6681),
        n = i(712),
        s = i(6751),
        o = i(7749),
        d = i(194),
        l = i(7360),
        c = i(1063),
        u = i(749);
      class p extends s.BaseAdBL {
        getActionName() {
          return "ExposureCompatibilityIndicator";
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [l.DvEvent.impressionServed]: this.start.bind(this)
          };
        }
        start() {
          let e = 0;
          if (null == d.DvObject.getDetectedDeliveryType() || d.DvObject.isCTV()) ;else if (o.DvTagDataObject.isTagTypeValid()) {
            if (d.DvObject.isMobileApp()) e = r.OmidWrapper.isSupported() ? 6 : a.MraidWrapper.isSupported() ? 5 : 0;else if (o.DvTagDataObject.getTagType() == n.DvTagType.Video) {
              const t = c.VpaidWrapper.getDvVpaid();
              t && t.viewabilityIntegrationType && (e = t.viewabilityIntegrationType);
            } else e = 2;
          } else ;
          let t = {
            vit: e
          };
          this.report(t);
        }
        report(e) {
          u.MessageHandler.sendMessage(e);
        }
      }
      t.ExposureCompatibilityIndicator = p;
    },
    8635: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.JsCallbackBL = void 0;
      const r = i(7360),
        a = i(194),
        n = i(6751),
        s = i(7749),
        o = i(712),
        d = i(1063);
      class l extends n.BaseAdBL {
        getActionName() {
          return "JsCallbackBL";
        }
        init() {
          this.dvvid = d.VpaidWrapper.getDvVpaid();
        }
        isSupported() {
          return this.adID = s.DvTagDataObject.getAdID(), s.DvTagDataObject.getTagType() == o.DvTagType.Video && !!this.adID;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.impressionServed]: this.impressionServed.bind(this)
          };
        }
        impressionServed() {
          if (!a.DvObject.getAllowJsCallback() || !this.dvvid) return;
          let e = this.dvvid.asset;
          return e && e.executeDVClientCallback ? (this.executeDVClientCallback = e.executeDVClientCallback, void r.EventBus.addEventListener(r.DvEvent.rtsEventData, this.handleRTSData.bind(this))) : void 0;
        }
        handleRTSData(e) {
          const t = e.relevantData;
          this.executeDVClientCallback && t.eventName && this.executeDVClientCallback(t.eventName);
        }
      }
      t.JsCallbackBL = l;
    },
    9604: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractMeasuredElementExtractor = void 0;
      t.AbstractMeasuredElementExtractor = class {
        constructor(e) {
          this.measuredElementData = e;
        }
      };
    },
    9759: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DefaultMeasuredElementExtractor = void 0;
      const r = i(9604),
        a = i(3380);
      class n extends r.AbstractMeasuredElementExtractor {
        isSupported() {
          var e;
          return !!(null === (e = this.measuredElementData) || void 0 === e ? void 0 : e.domElement);
        }
        extract() {
          var e;
          return 1 === a.Utilities.extractElementType(null === (e = this.measuredElementData) || void 0 === e ? void 0 : e.domElement) ? 2 : 1;
        }
        getMeasuredElementExtractorId() {
          return 1;
        }
      }
      t.DefaultMeasuredElementExtractor = n;
    },
    1914: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidMeasuredElementExtractor = void 0;
      const r = i(9604),
        a = i(3380);
      class n extends r.AbstractMeasuredElementExtractor {
        isSupported() {
          var e;
          return !a.Utilities.isNullOrEmpty(null === (e = this.measuredElementData) || void 0 === e ? void 0 : e.omidMeasuredElementType);
        }
        extract() {
          var e;
          return null === (e = this.measuredElementData) || void 0 === e ? void 0 : e.omidMeasuredElementType;
        }
        getMeasuredElementExtractorId() {
          return 2;
        }
      }
      t.OmidMeasuredElementExtractor = n;
    },
    5500: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MobileOrientationBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(194);
      class s extends r.BaseAdBL {
        getActionName() {
          return "MobileOrientationBL";
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.impressionServed]: this.impressionServed.bind(this)
          };
        }
        impressionServed() {
          n.DvObject.isMobile() && a.EventBus.addEventListener(a.DvEvent.exposureData, this.handleViewabilityData.bind(this));
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.viewportSize && i.viewportSize.height && i.viewportSize.width ? this.setOrientationData(t, i) : t.initialOrientationType = t.initialOrientationType || 0;
        }
        setOrientationData(e, t) {
          let i = 0;
          t.viewportSize.width > t.viewportSize.height ? (i = 2, e.accumulativeTimeOrientationLandscape = e.accumulativeTimeOrientationLandscape ? e.accumulativeTimeOrientationLandscape + t.intervalDuration : t.intervalDuration) : (i = 1, e.accumulativeTimeOrientationPortrait = e.accumulativeTimeOrientationPortrait ? e.accumulativeTimeOrientationPortrait + t.intervalDuration : t.intervalDuration), e.initialOrientationType || (e.initialOrientationType = i);
        }
      }
      t.MobileOrientationBL = s;
    },
    1074: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NormalizedAdSizeBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(1800),
        s = i(7749),
        o = i(712),
        d = i(3971);
      class l extends r.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.adSizeChangedData]: this.handleAdSizeChangedData.bind(this)
          };
        }
        handleAdSizeChangedData(e) {
          const t = e.adCandidate;
          if (!t.adWidth || !t.adHeight) return;
          let i = {
              width: t.adWidth,
              height: t.adHeight
            },
            r = d.StandardSizes.getNearestAdSize(i, s.DvTagDataObject.getTagType(), s.DvTagDataObject.getTagType() == o.DvTagType.Video ? 20 : 5);
          r && (t.normalizedAdWidth = r.width, t.normalizedAdHeight = r.height, a.EventBus.dispatchEvent(a.DvEvent.reportData, new n.AdCandidateEventData(t)));
        }
      }
      t.NormalizedAdSizeBL = l;
    },
    334: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidImpressionEventInfoBL = void 0;
      const r = i(6689),
        a = i(6751),
        n = i(7360),
        s = i(3380),
        o = i(8379);
      class d extends a.BaseAdBL {
        isSupported() {
          return r.OmidWrapper.isSupported();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [n.DvEvent.adCandidateApproved]: e => this.adCandidateApproved(e)
          };
        }
        init() {}
        adCandidateApproved(e) {
          r.OmidWrapper.addEventListener("impression", t => this.handleImpressionEvent(t, e));
        }
        handleImpressionEvent(e, t) {
          var i, r;
          t.adCandidate.omidTimeMsUntilImpression = s.Utilities.getTimeDiff(), (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.impressionType) && (o.omidImpressionTypeMapping[e.data.impressionType] ? t.adCandidate.omidImpressionType = o.omidImpressionTypeMapping[e.data.impressionType] : (t.adCandidate.omidImpressionType = o.omidImpressionTypeMapping.unknown, t.adCandidate.omidUnknownImpressionType = e.data.impressionType)), (null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.creativeType) && (o.omidCreativeTypeMapping[e.data.creativeType] ? t.adCandidate.omidCreativeType = o.omidCreativeTypeMapping[e.data.creativeType] : (t.adCandidate.omidCreativeType = o.omidCreativeTypeMapping.unknown, t.adCandidate.omidUnknownCreativeType = e.data.creativeType));
        }
      }
      t.OmidImpressionEventInfoBL = d;
    },
    4342: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageEventsLoggerBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(425),
        s = i(3322),
        o = i(3868),
        d = i(3380),
        l = i(749),
        c = i(7658);
      class u extends a.BaseAdBL {
        constructor() {
          super(), this.isPageHideNonPersistedFired = !1;
        }
        isSupported() {
          return !o.WindowAdaptor.isDomlessEnvironment();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.pageHideEventPersisted]: this.turnOnScriptDynamicFlag(16).bind(this),
            [r.DvEvent.pageHideEventNonPersisted]: this.logPageHideEventNonPersisted.bind(this)
          };
        }
        turnOnScriptDynamicFlag(e) {
          return () => s.ScriptDynamicFlags.getInstance().turnOn(e);
        }
        logPageHideEventNonPersisted() {
          this.isPageHideNonPersistedFired || (this.isPageHideNonPersistedFired = !0, l.MessageHandler.sendMessage({
            [c.AdDataMappingToReport.timeUntilPageHideEventNonPersistedMs]: d.Utilities.getTimeDiff()
          })), this.turnOnScriptDynamicFlag(32)();
          const e = this.turnOnScriptDynamicFlag(64).bind(this);
          n.BrowserAdaptor.setTimeout(e, 20);
        }
        init() {}
      }
      t.PageEventsLoggerBL = u;
    },
    2530: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceApiBL = void 0;
      const r = i(6751),
        a = i(1800),
        n = i(7360),
        s = i(3868);
      class o extends r.BaseAdBL {
        getEventsAndCallbacksToRegister() {
          return {
            [n.DvEvent.performanceData]: this.aggregatePerformanceApiData.bind(this)
          };
        }
        aggregatePerformanceApiData({
          performanceData: e,
          adData: t
        }) {
          t.visitResponseSize = null == e ? void 0 : e.visitResponseSize, n.EventBus.dispatchEvent(n.DvEvent.reportData, new a.AdCandidateEventData(t));
        }
        init() {}
        isSupported() {
          return !s.WindowAdaptor.isDomlessEnvironment();
        }
      }
      t.PerformanceApiBL = o;
    },
    4372: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceLongTasksBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(8170),
        s = i(6593);
      class o extends r.BaseAdBL {
        constructor() {
          super(...arguments), this.totalLongTaskDuration = 0, this.totalLongTaskAmount = 0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.performanceLongTasks]: this.handleLongTasks.bind(this)
          };
        }
        handleLongTasks(e) {
          const {
            longTasks: t = []
          } = e;
          t.length && (this.totalLongTaskAmount += t.length, this.totalLongTaskDuration += t.reduce((e, {
            duration: t
          }) => e + t, 0), n.DiagnosticParamsSingleton.reportDiagnosticParam("lngtka", this.totalLongTaskAmount), n.DiagnosticParamsSingleton.reportDiagnosticParam("lngtkd", this.totalLongTaskDuration));
        }
        init() {
          n.DiagnosticParamsSingleton.reportDiagnosticParam("lngtks", this.isSupported() ? 1 : 0);
        }
        isSupported() {
          var e;
          return "undefined" != typeof PerformanceObserver && !!s.PerformanceLongTasksDataCollector.getFrameId() && !!(null === (e = null === PerformanceObserver || void 0 === PerformanceObserver ? void 0 : PerformanceObserver.supportedEntryTypes) || void 0 === e ? void 0 : e.some(e => "longtask" === e));
        }
      }
      t.PerformanceLongTasksBL = o;
    },
    2727: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceTaskTimingBL = void 0;
      const r = i(7360),
        a = i(6820),
        n = i(8170),
        s = i(6751);
      class o extends s.BaseAdBL {
        init() {
          this.timings = [], this.scheduledTaskRef = null;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.adSelected]: this.reportTaskTiming.bind(this),
            [r.DvEvent.globalUnloadData]: this.reportTaskTiming.bind(this),
            [r.DvEvent.performanceTaskTiming]: this.handleTaskTiming.bind(this)
          };
        }
        isSupported() {
          return a.isPerformanceApiSupported();
        }
        handleTaskTiming(e) {
          const {
            taskTimings: t = []
          } = e;
          t.length && (this.timings.push(...t.map(({
            name: e,
            startTime: t,
            duration: i
          }) => ({
            duration: Math.round(i),
            name: e,
            startTime: Math.round(t)
          }))), this.scheduleTrackingIfNecessary());
        }
        scheduleTrackingIfNecessary() {
          null === this.scheduledTaskRef && (this.scheduledTaskRef = a.scheduleTask(() => {
            this.reportTaskTiming();
          }));
        }
        reportTaskTiming() {
          null != this.scheduledTaskRef && (this.scheduledTaskRef = null, n.DiagnosticParamsSingleton.reportDiagnosticParam("tskt", this.getSerializedTaskTiming()));
        }
        getSerializedTaskTiming() {
          return this.timings.map(({
            name: e,
            startTime: t,
            duration: i
          }) => `${e},${t},${i}`).join(";");
        }
      }
      t.PerformanceTaskTimingBL = o;
    },
    2968: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceMetricsBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(3380),
        s = i(3868),
        o = i(749),
        d = i(194),
        l = {
          tag: {
            loading: 1,
            interactive: 2,
            complete: 4
          },
          measurement: {
            loading: 8,
            interactive: 16,
            complete: 32
          },
          visit: {
            loading: 64,
            interactive: 128,
            complete: 256
          }
        };
      class c extends r.BaseAdBL {
        getScriptExecIndicator(e, t) {
          if (!t) {
            t = s.WindowAdaptor.currentDocument().readyState;
          }
          return (l[e] || {})[t] || {} || 0;
        }
        init() {
          this.measurementScriptExecIndicator = this.getScriptExecIndicator("measurement");
        }
        isSupported() {
          return !s.WindowAdaptor.isDomlessEnvironment();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.impressionServed]: this.onImpressionServed.bind(this)
          };
        }
        getScriptDuration(e, t) {
          return s.WindowAdaptor.monitorScriptsPerformance(t, {
            [e]: ["duration"]
          })[`${e}_duration`] || 0;
        }
        reportTagLoadTimeMs() {
          return {
            tltms: this.getScriptDuration("dvtp_src", s.WindowAdaptor.workingWindow())
          };
        }
        reportTagExecTimeMs() {
          return {
            tetms: d.DvObject.getTagExecTimeMs()
          };
        }
        getActionName() {
          return "PerformanceMetricsBL";
        }
        reportMeasurementScriptLoadTimeMs() {
          return {
            msltms: this.getScriptDuration("dv-measurements", s.WindowAdaptor.currentWindow())
          };
        }
        reportVisitLoadTimeMs() {
          return {
            vltms: this.getScriptDuration("visit", s.WindowAdaptor.currentWindow())
          };
        }
        reportVisitExecTimeMs() {
          const e = this.getScriptDuration("visit", s.WindowAdaptor.currentWindow());
          return {
            vetms: n.Utilities.getCurrentTime() - d.DvObject.getVisitInjectedMS() - e
          };
        }
        reportScriptExecIndicator() {
          const e = this.getScriptExecIndicator("visit", d.DvObject.getVisitReadyState());
          return {
            sei: this.getScriptExecIndicator("tag", d.DvObject.getTagReadyState()) | this.measurementScriptExecIndicator | e
          };
        }
        reportTimeUntilVisitInjectedMs() {
          return {
            tuviims: d.DvObject.getVisitInjectedMS() - d.DvObject.getTagLoadedMS()
          };
        }
        reportTimeUntilVisitExecutedMs() {
          return {
            tuviems: n.Utilities.getCurrentTime() - d.DvObject.getTagLoadedMS()
          };
        }
        onImpressionServed() {
          let e = this.reportTagLoadTimeMs();
          n.Utilities.extend(this.reportTagExecTimeMs(), e), n.Utilities.extend(this.reportMeasurementScriptLoadTimeMs(), e), n.Utilities.extend(this.reportVisitLoadTimeMs(), e), n.Utilities.extend(this.reportScriptExecIndicator(), e), n.Utilities.extend(this.reportVisitExecTimeMs(), e), n.Utilities.extend(this.reportTimeUntilVisitInjectedMs(), e), n.Utilities.extend(this.reportTimeUntilVisitExecutedMs(), e), o.MessageHandler.sendMessage(e);
        }
      }
      t.PerformanceMetricsBL = c;
    },
    2020: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RenderingMethodLogger = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(749),
        s = i(7026);
      class o extends r.BaseAdBL {
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.impressionServed]: this.reportRenderingMethodIndicator.bind(this)
          };
        }
        reportRenderingMethodIndicator() {
          n.MessageHandler.sendMessage({
            rmi: s.RenderLogicFactory.getRenderLogic().getRenderingMethodIndicator()
          });
        }
        init() {}
        isSupported() {
          return !0;
        }
      }
      t.RenderingMethodLogger = o;
    },
    9401: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ReportAdManagerRTS = void 0;
      const r = i(7360),
        a = i(194),
        n = i(6751),
        s = i(1800),
        o = i(3380),
        d = i(7658);
      class l extends n.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.reportData]: this.report.bind(this),
            [r.DvEvent.adSelected]: this.report.bind(this)
          };
        }
        report(e) {
          const t = e.adCandidate,
            i = e.relevantData,
            r = null == i.reportType || 0 == i.reportType || 2 == i.reportType;
          if (2 != t.state || !r) return;
          const a = o.Utilities.mapData(t, d.RTSDataMapping, !0),
            n = Object.keys(a);
          n.length && this.sendRtsEvents(n, t);
        }
        sendRtsEvents(e, t) {
          for (let i of e) a.DvObject.publishPubSubEvent(i), r.EventBus.dispatchEvent(r.DvEvent.rtsEventData, new s.AdCandidateEventData(t, {
            eventName: i
          }));
        }
      }
      t.ReportAdManagerRTS = l;
    },
    3831: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ReportAdManagerTPS = void 0;
      const r = i(7360),
        a = i(7658),
        n = i(6751),
        s = i(3380),
        o = i(749);
      class d extends n.BaseAdBL {
        constructor() {
          super(...arguments), this.cachedAdDataToReport = {};
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.reportData]: this.report.bind(this),
            [r.DvEvent.adSelected]: this.report.bind(this)
          };
        }
        report(e) {
          const t = e.adCandidate,
            i = e.relevantData,
            r = null == i.reportType || 0 == i.reportType || 1 == i.reportType;
          if (2 != t.state || !r) return;
          const n = s.Utilities.mapData(t, a.AdDataMappingToReport, !1);
          s.Utilities.removeDuplicateValues(n, this.cachedAdDataToReport), s.Utilities.extend(n, this.cachedAdDataToReport);
          const {
            isImportantMessage: d,
            noConsolidation: l
          } = e.relevantData;
          if (!s.Utilities.isEmpty(n)) {
            let e = {
              isImportantMessage: d,
              noConsolidation: l
            };
            o.MessageHandler.sendMessage(n, e);
          }
        }
      }
      t.ReportAdManagerTPS = d;
    },
    3500: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ShareOfScreenResearchBL = void 0;
      const r = i(7360),
        a = i(425),
        n = i(7127),
        s = i(3868),
        o = i(194);
      class d extends n.BaseAdDataLoggerBL {
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this)
          };
        }
        isSupported() {
          return !0;
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData,
            r = s.WindowAdaptor.workingDocument(s.WindowAdaptor.windowTop() || null);
          let n = !1;
          const d = i.screenSize,
            l = t.ShareOfScreenLastScreenSize || d;
          let c = t.screenSizeChanged;
          const u = i.adSize,
            p = t.shareOfScreenLastAdSize || u;
          let h = t.adSizeChanged;
          const g = a.BrowserAdaptor.getDevicePixelRatio(),
            m = t.devicePixelRatioReported,
            v = t.shareOfScreenLastDevicePixelRatio || g;
          let b = t.devicePixelRatioChanged;
          if (2 === o.DvObject.getDetectedDeliveryType() && (2 == (2 & s.WindowAdaptor.getScenarioType()) || 1 == (1 & s.WindowAdaptor.getScenarioType()))) {
            const e = i.viewportSize;
            if (e && e.width > 0 && e.height > 0) {
              const {
                minVpHeight: i,
                minVpWidth: r,
                maxVpHeight: a,
                maxVpWidth: s
              } = this.getMinAndMaxViewport(t, e);
              this.isViewportChanged(t, i, r, a, s) && (n = !0, t.minViewportHeight = i, t.minViewportWidth = r, t.maxViewportHeight = a, t.maxViewportWidth = s);
            }
          }
          if (!c && this.validateScreenSize(d) && (t.screenSizeChanged = l.height !== d.height || l.width !== d.width ? 1 : void 0, t.ShareOfScreenLastScreenSize = d, t.screenSizeChanged && (n = !0)), !h && this.validateAdSize(u) && (t.adSizeChanged = p.height != u.height || p.width != u.width ? 1 : void 0, t.shareOfScreenLastAdSize = u, t.adSizeChanged && (n = !0)), !b && g && (t.devicePixelRatioChanged = v !== g ? 1 : void 0, t.shareOfScreenLastDevicePixelRatio = g, t.devicePixelRatioChanged && (n = !0)), m || (n = !0, t.devicePixelRatioReported = !0), r && !this.isMetaReported(t)) {
            const e = a.BrowserAdaptor.getMetaTagAttributes(r, "viewport");
            for (let i of Object.keys(e)) {
              const r = e[i];
              switch (i.trim()) {
                case "width":
                  t.viewPortMetaTagWidth = r;
                  break;
                case "height":
                  t.viewPortMetaTagHeight = r;
                  break;
                case "initial-scale":
                  t.viewPortMetaTagInitialScale = r;
                  break;
                case "user-scalable":
                  t.viewPortMetaTagScalable = "yes" === r ? 1 : 0;
              }
            }
            n = this.isMetaReported(t);
          }
          n && this.report(t);
        }
        isViewportChanged(e, t, i, r, a) {
          return e.minViewportHeight != t || e.minViewportWidth != i || e.maxViewportHeight != r || e.maxViewportWidth != a;
        }
        getMinAndMaxViewport(e, t) {
          return {
            minVpHeight: Math.min(e.minViewportHeight || t.height, t.height),
            minVpWidth: Math.min(e.minViewportWidth || t.width, t.width),
            maxVpHeight: Math.max(e.maxViewportHeight || t.height, t.height),
            maxVpWidth: Math.max(e.maxViewportWidth || t.width, t.width)
          };
        }
        isMetaReported(e) {
          return !!(e.viewPortMetaTagWidth || e.viewPortMetaTagHeight || e.viewPortMetaTagInitialScale || e.viewPortMetaTagScalable);
        }
        validateScreenSize(e) {
          return !!(e && e.width && e.height);
        }
        validateAdSize(e) {
          return !!(e && e.width && e.height);
        }
        getTrafficPercentage() {
          return 100;
        }
        getSupportedDetectedDeliveryType() {
          return [3, 2, 1];
        }
        getActionName() {
          return "ShareOfScreen";
        }
      }
      t.ShareOfScreenResearchBL = d;
    },
    3719: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseViewabilityBL = void 0;
      const r = i(7360),
        a = i(6751);
      class n extends a.BaseAdBL {
        getActionName() {
          return "BaseViewabilityBL";
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.impressionServed]: this.impressionServed.bind(this)
          };
        }
        impressionServed() {
          this.shouldRegisterToExposureEvents() && r.EventBus.addEventListener(r.DvEvent.exposureData, this.handleViewabilityData.bind(this));
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          if (this.needToCheckViewability(t, i)) {
            this.reportViewabilityMeasured(t, i);
            const e = this.isViewabilityConditionPassed(i);
            this.shouldReportViewability(e, i.intervalDuration, t, i) && this.reportViewabilityPassed(t, i.updateTime);
          }
        }
      }
      t.BaseViewabilityBL = n;
    },
    4771: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BucketsDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(6751),
        s = i(712),
        o = i(3380);
      class d extends n.BaseAdBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == s.DvTagType.Display;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.exposureData]: this.handleViewabilityData.bind(this)
          };
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          let r = i.intervalDuration,
            a = this.getBucketNumber(i.percentage, i.focus),
            n = "b" + a;
          null != a ? (t[n] = t[n] || 0, t[n] += r, t.viewabilityDisplayBucketsUnloadTime = i.updateTime) : (t.napt = t.napt || 0, t.napt += r);
        }
        getBucketNumber(e, t) {
          return o.Utilities.isNullOrEmpty(e) ? null : 0 != e && t ? Math.floor(e / 10) + 1 : 0;
        }
      }
      t.BucketsDisplayViewabilityBL = d;
    },
    8877: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BucketsVideoViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(1800),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.exposureData]: this.handleViewabilityData.bind(this),
            [a.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [a.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [a.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [a.DvEvent.adVideoCompleteData]: this.handleLastQuartileData.bind(this)
          };
        }
        handleLastQuartileData(e) {
          const t = this.updateQuartileTimestamp(e);
          a.EventBus.dispatchEvent(a.DvEvent.reportData, new n.AdCandidateEventData(t));
        }
        handleQuartileData(e, t) {
          const i = this.updateQuartileTimestamp(t);
          a.EventBus.dispatchEvent(a.DvEvent.reportData, new n.AdCandidateEventData(i)), i.videoBucketsQuartileId = e + 1;
        }
        updateQuartileTimestamp(e) {
          const t = e.relevantData,
            i = e.adCandidate;
          return i[`isq${i.videoBucketsQuartileId}ms`] = t.updateTime, i.markAdQuartile(4, i.videoBucketsQuartileId), i;
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          if (!i.adIsPlaying) return;
          let r = i.intervalDuration,
            a = this.getBucketNumber(i.percentage, i.focus);
          if (null != a) {
            const e = "q" + t.videoBucketsQuartileId + "b" + a;
            t[e] = t[e] ? t[e] + r : r;
          } else {
            const e = "q" + t.videoBucketsQuartileId + "napt";
            t[e] = t[e] ? t[e] + r : r;
          }
        }
        getBucketNumber(e, t) {
          return null == e ? null : 0 != e && t ? Math.floor(e / 25) + 1 : 0;
        }
      }
      t.BucketsVideoViewabilityBL = d;
    },
    1391: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomAdvertiserViewabilityStandardBL = void 0;
      const r = i(7360),
        a = i(194),
        n = i(3719),
        s = i(1800),
        o = i(3380),
        d = i(7749),
        l = i(712);
      class c extends n.BaseViewabilityBL {
        init() {}
        isSupported() {
          return !0;
        }
        shouldRegisterToExposureEvents() {
          return this.minimalLargeAdArea = d.DvTagDataObject.getTagType() == l.DvTagType.Display ? 242500 : 3e5, this.customAdvertiserViewabilitySettings = a.DvObject.getCustomAdvertiserViewabilitySettings(), !!this.customAdvertiserViewabilitySettings;
        }
        getConditions(e) {
          const t = this.customAdvertiserViewabilitySettings.conditions;
          return e ? t.largeAd : t.regularAd;
        }
        isViewabilityConditionPassed(e) {
          const t = o.Utilities.isLargeAd(e.adSize, this.minimalLargeAdArea),
            {
              onFocus: i,
              adPercentage: r
            } = this.conditions = this.getConditions(t),
            {
              focus: a,
              percentage: n
            } = e;
          return (!0 !== i || a) && (null == r || n >= r);
        }
        needToCheckViewability(e, t) {
          return (d.DvTagDataObject.getTagType() == l.DvTagType.Display || t.adIsPlaying) && null == e.customAdvertiserStandardTimeMsUntilAdViewed;
        }
        shouldReportViewability(e, t, i, r) {
          const {
            isConsecutive: a,
            durationCap: n,
            durationPercentage: s
          } = this.conditions;
          if (null == n && null == s) return e;
          const {
            videoLength: o,
            customAdvertiserStandardViewedTime: d
          } = i;
          i.customAdvertiserStandardViewedTime = e ? d + r.intervalDuration : a ? 0 : d;
          const l = n,
            c = null != o && null != s ? o * (s / 100) : null,
            u = null != l && i.customAdvertiserStandardViewedTime >= l,
            p = null != c && i.customAdvertiserStandardViewedTime >= c;
          return u || p;
        }
        reportViewabilityMeasured(e, t) {
          null == e.customAdvertiserStandardType && (e.customAdvertiserStandardType = this.customAdvertiserViewabilitySettings.standardType, r.EventBus.dispatchEvent(r.DvEvent.reportData, new s.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.customAdvertiserStandardTimeMsUntilAdViewed = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new s.AdCandidateEventData(e));
        }
      }
      t.CustomAdvertiserViewabilityStandardBL = c;
    },
    6490: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomDisplayViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(1800),
        d = i(712);
      class l extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == d.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return this.customViewabilityConditions = n.DvObject.getDisplayCustomViewabilityConditions(), !!this.customViewabilityConditions;
        }
        isViewabilityConditionPassed(e) {
          return !!e.focus && e.percentage >= this.customViewabilityConditions.minimalAdAreaPercentage;
        }
        needToCheckViewability(e, t) {
          return null == e.customTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i, r) {
          return i.customViewedTime = e ? i.customViewedTime += r.intervalDuration : this.customViewabilityConditions.consecutiveMode ? 0 : i.customViewedTime, i.customViewedTime >= this.customViewabilityConditions.minimalAdDuration;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          e.customTimeMsUntilAdViewed = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new o.AdCandidateEventData(e));
        }
      }
      t.CustomDisplayViewabilityBL = l;
    },
    5409: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomStandardDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(3719),
        s = i(194),
        o = i(1800),
        d = i(712);
      class l extends n.BaseViewabilityBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == d.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return this.customViewabilityConditions = s.DvObject.getDisplayCustomStandardViewabilityConditions(), !!this.customViewabilityConditions;
        }
        isViewabilityConditionPassed(e) {
          return !!e.focus && !(e.adSize && e.adSize.width * e.adSize.height < this.customViewabilityConditions.minimalAdSize) && e.percentage >= this.customViewabilityConditions.minimalAdAreaPercentage;
        }
        needToCheckViewability(e, t) {
          return null == e.customStandardTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i) {
          if (e) {
            if (i.customStandardViewedTime += t, i.customStandardViewedTime >= this.customViewabilityConditions.minimalAdDuration) return !0;
          } else this.customViewabilityConditions.consecutiveMode && (i.customStandardViewedTime = 0);
          return !1;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          e.customStandardTimeMsUntilAdViewed = t, a.EventBus.dispatchEvent(a.DvEvent.reportData, new o.AdCandidateEventData(e));
        }
      }
      t.CustomStandardDisplayViewabilityBL = l;
    },
    4241: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomStandardVideoViewabilityBL = void 0;
      const r = i(3719),
        a = i(7749),
        n = i(194),
        s = i(7360),
        o = i(712),
        d = i(1800);
      class l extends r.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return this.customViewabilityConditions = n.DvObject.getVideoCustomStandardViewabilityConditions(), !!this.customViewabilityConditions;
        }
        isViewabilityConditionPassed(e) {
          return !!e.focus && !(e.adSize && e.adSize.width * e.adSize.height < this.customViewabilityConditions.minimalAdSize) && (!this.customViewabilityConditions.requireVolume || 0 != e.volume) && e.percentage >= this.customViewabilityConditions.minimalAdAreaPercentage;
        }
        needToCheckViewability(e, t) {
          return t.adIsPlaying && null == e.customStandardTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i) {
          if (e) {
            if (i.customStandardViewedTime += t, this.customViewabilityConditions.minimalAdDurationPercent) {
              if (i.videoLength && i.customStandardViewedTime / i.videoLength * 100 >= this.customViewabilityConditions.minimalAdDurationPercent) return !0;
            } else if (i.customStandardViewedTime >= this.customViewabilityConditions.minimalAdDuration) return !0;
          } else this.customViewabilityConditions.consecutiveMode && (i.customStandardViewedTime = 0);
          return !1;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          e.customStandardTimeMsUntilAdViewed = t, s.EventBus.dispatchEvent(s.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.CustomStandardVideoViewabilityBL = l;
    },
    7642: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomVideoViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800);
      class l extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return this.customViewabilityConditions = n.DvObject.getVideoCustomViewabilityConditions(), !!this.customViewabilityConditions;
        }
        isViewabilityConditionPassed(e) {
          return !(null == e.percentage || !e.focus) && (!this.customViewabilityConditions.requireVolume || 0 != e.volume) && e.percentage >= this.customViewabilityConditions.minimalAdAreaPercentage;
        }
        needToCheckViewability(e, t) {
          return null == e.customTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying;
        }
        shouldReportViewability(e, t, i, r) {
          return i.customViewedTime = e ? i.customViewedTime += r.intervalDuration : this.customViewabilityConditions.consecutiveMode ? 0 : i.customViewedTime, i.customViewedTime >= this.customViewabilityConditions.minimalAdDuration;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          e.customTimeMsUntilAdViewed = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.CustomVideoViewabilityBL = l;
    },
    7938: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EndQuartileViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(1800),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this),
            [r.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [r.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [r.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [r.DvEvent.adVideoCompleteData]: this.handleVideoCompleteData.bind(this)
          };
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adIsPlaying && null != i.percentage && (t.endQuartileCurrentViewability = i.focus ? i.percentage : 0, t.endQuartileCurrentVolume = i.volume, i.adSize && (t.adQuartileWidth = i.adSize.width));
        }
        handleQuartileData(e, t) {
          const i = t.adCandidate;
          i["q" + e + "vpend"] = i.endQuartileCurrentViewability, i["q" + e + "ps"] = this.getPlayerSize(i.adQuartileWidth), r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(i));
        }
        getPlayerSize(e) {
          let t = 0;
          return e > 0 && e <= 300 ? t = 1 : e > 300 && e <= 399 ? t = 2 : e > 399 && e <= 639 ? t = 3 : e > 639 && (t = 4), t;
        }
        handleVideoCompleteData(e) {
          const t = e.relevantData,
            i = e.adCandidate;
          i.endQuartileCurrentViewability >= 50 && 0 != i.endQuartileCurrentVolume && (i.timeMsUntilAdAudibleAndViewableOnCompletionMs = t.updateTime), this.handleQuartileData(4, e);
        }
      }
      t.EndQuartileViewabilityBL = d;
    },
    4892: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.FocusBucketsBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(6751),
        s = i(712);
      class o extends n.BaseAdBL {
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this)
          };
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          (a.DvTagDataObject.getTagType() != s.DvTagType.Video || i.adIsPlaying) && (i.focus ? t.looseFocusTrueBucket = t.looseFocusTrueBucket ? t.looseFocusTrueBucket + i.intervalDuration : i.intervalDuration : null != i.focus && (t.looseFocusFalseBucket = t.looseFocusFalseBucket ? t.looseFocusFalseBucket + i.intervalDuration : i.intervalDuration), i.strictFocus ? t.strictFocusTrueBucket = t.strictFocusTrueBucket ? t.strictFocusTrueBucket + i.intervalDuration : i.intervalDuration : null != i.strictFocus && (t.strictFocusFalseBucket = t.strictFocusFalseBucket ? t.strictFocusFalseBucket + i.intervalDuration : i.intervalDuration));
        }
      }
      t.FocusBucketsBL = o;
    },
    7912: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == o.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression();
        }
        isViewabilityConditionPassed(e) {
          return !(null == e.percentage || !e.focus) && (!!l.Utilities.isLargeAd(e.adSize, 242500) || e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.groupMTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i, r) {
          return e;
        }
        reportViewabilityMeasured(e, t) {
          e.groupMTimeMsUntilAdMeasured || (e.groupMTimeMsUntilAdMeasured = t.updateTime, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMTimeMsUntilAdViewed = t, e.groupMV3TimeMsUntilAdViewed = t, e.groupMTimeMsUntilAdMeasured++, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.GroupMDisplayViewabilityBL = c;
    },
    4691: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMV4MobileDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800);
      class l extends s.BaseViewabilityBL {
        init() {
          this.minimalAdAreaPercentage = 0, this.minimalAdAreaPercentageWhenAdAreaLowerThanViewport = 98, this.minimalDuration = 1e3;
        }
        isSupported() {
          return r.DvTagDataObject.getTagType() == o.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression() && n.DvObject.isMobileWeb();
        }
        isViewabilityConditionPassed(e) {
          return e.percentage > this.minimalAdAreaPercentage;
        }
        needToCheckViewability(e, t) {
          return null == e.groupMV4DisplayTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i, r) {
          return i.groupMV4DisplayViewedTime = e ? i.groupMV4DisplayViewedTime + r.intervalDuration : 0, i.groupMV4TimeCriteriaPassed = i.groupMV4TimeCriteriaPassed || i.groupMV4DisplayViewedTime >= this.minimalDuration, i.isAllBoundariesPassed = i.isAllBoundariesPassed || this.isAllBoundariesPassed(i, r), i.groupMV4TimeCriteriaPassed && i.isAllBoundariesPassed;
        }
        reportViewabilityMeasured(e, t) {
          e.groupMV4TimeMsUntilAdMeasured || this.isAdSizeLargerThanViewPortSize(t) && !t.boundariesViewability || (e.groupMV4TimeMsUntilAdMeasured = t.updateTime, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMV4DisplayTimeMsUntilAdViewed = e.groupMV4TimeMsUntilAdViewed = t, e.groupMV4TimeMsUntilAdMeasured++, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
        getArea(e) {
          if (e && e.width && e.height) return e.width * e.height;
        }
        isAdSizeLargerThanViewPortSize(e) {
          const t = this.getArea(e.adSize),
            i = this.getArea(e.viewportSize);
          return t && i && t > i;
        }
        isAllBoundariesPassed(e, t) {
          if (this.isAdSizeLargerThanViewPortSize(t)) {
            if (t.boundariesViewability) {
              let i = e.boundariesViewed;
              return i.topLeft = i.topLeft || t.boundariesViewability.topLeft, i.topRight = i.topRight || t.boundariesViewability.topRight, i.bottomLeft = i.bottomLeft || t.boundariesViewability.bottomLeft, i.bottomRight = i.bottomRight || t.boundariesViewability.bottomRight, i.topLeft && i.topRight && i.bottomLeft && i.bottomRight;
            }
            return !1;
          }
          return t.percentage > this.minimalAdAreaPercentageWhenAdAreaLowerThanViewport;
        }
      }
      t.GroupMV4MobileDisplayViewabilityBL = l;
    },
    6825: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMV4NonMobileDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == o.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression() && !n.DvObject.isMobileWeb();
        }
        isViewabilityConditionPassed(e) {
          let t = l.Utilities.isLargeAd(e.adSize, 242500);
          return !(null == e.percentage || !e.focus) && (!!(t && e.percentage >= 50) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.groupMV4DisplayTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i, r) {
          return i.groupMV4DisplayViewedTime = e ? i.groupMV4DisplayViewedTime + r.intervalDuration : 0, i.groupMV4DisplayViewedTime >= 1e3;
        }
        reportViewabilityMeasured(e, t) {
          e.groupMV4TimeMsUntilAdMeasured || (e.groupMV4TimeMsUntilAdMeasured = t.updateTime, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMV4TimeMsUntilAdMeasured++, e.groupMV4DisplayTimeMsUntilAdViewed = e.groupMV4TimeMsUntilAdViewed = t, a.EventBus.dispatchEvent(a.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.GroupMV4NonMobileDisplayViewabilityBL = c;
    },
    7827: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMV4VideoNativeViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression();
        }
        isViewabilityConditionPassed(e) {
          let t = !n.DvObject.isMobileApp() && !n.DvObject.isMobileWeb() && l.Utilities.isLargeAd(e.adSize, 3e5);
          return !(!e.percentage || !e.focus) && (!!(t && e.percentage >= 80) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.groupMV4VideoNativeTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying;
        }
        shouldReportViewability(e, t, i, r) {
          i.groupMV4VideoNativeViewedTime = e ? i.groupMV4VideoNativeViewedTime + r.intervalDuration : i.groupMV4VideoNativeViewedTime;
          const a = i.videoLength ? Math.min(15e3, .5 * i.videoLength) : 15e3;
          return i.groupMV4VideoNativeViewedTime >= a;
        }
        reportViewabilityMeasured(e, t) {
          null == e.groupMV4TimeMsUntilAdMeasured && (e.groupMV4TimeMsUntilAdMeasured = t.updateTime, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMV4TimeMsUntilAdMeasured++, e.groupMV4VideoNativeTimeMsUntilAdViewed = t, n.DvObject.isGroupMV4VideoNativeImpression() && (e.groupMV4TimeMsUntilAdViewed = t), r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.GroupMV4VideoNativeViewabilityBL = c;
    },
    9045: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMV4VideoReachExtensionViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression();
        }
        isViewabilityConditionPassed(e) {
          let t = !n.DvObject.isMobileApp() && !n.DvObject.isMobileWeb() && l.Utilities.isLargeAd(e.adSize, 3e5);
          return !(!e.percentage || !e.focus) && 0 != e.volume && (!!(t && e.percentage >= 80) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.groupMV4VideoReachExtensionTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying;
        }
        shouldReportViewability(e, t, i, r) {
          i.groupMV4VideoReachExtensionViewedTime = e ? i.groupMV4VideoReachExtensionViewedTime + r.intervalDuration : i.groupMV4VideoReachExtensionViewedTime;
          const a = i.videoLength ? Math.min(15e3, .5 * i.videoLength) : 15e3;
          return i.groupMV4VideoReachExtensionViewedTime >= a;
        }
        reportViewabilityMeasured(e, t) {
          null == e.groupMV4TimeMsUntilAdMeasured && (e.groupMV4TimeMsUntilAdMeasured = t.updateTime, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMV4TimeMsUntilAdMeasured++, e.groupMV4VideoReachExtensionTimeMsUntilAdViewed = t, n.DvObject.isGroupMV4VideoNativeImpression() || (e.groupMV4TimeMsUntilAdViewed = t), r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.GroupMV4VideoReachExtensionViewabilityBL = c;
    },
    7175: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GroupMVideoViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return !n.DvObject.isSIVTImpression();
        }
        isViewabilityConditionPassed(e) {
          let t = l.Utilities.isLargeAd(e.adSize, 3e5);
          return !(!e.percentage || !e.focus) && 0 != e.volume && (!!(t && e.percentage >= 80) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.groupMTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying;
        }
        shouldReportViewability(e, t, i, r) {
          i.groupMViewedTime = e ? i.groupMViewedTime + r.intervalDuration : i.groupMViewedTime;
          const a = i.videoLength ? Math.min(15e3, .5 * i.videoLength) : 15e3;
          return i.groupMViewedTime >= a;
        }
        reportViewabilityMeasured(e, t) {
          e.groupMTimeMsUntilAdMeasured || (e.groupMTimeMsUntilAdMeasured = t.updateTime, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
        reportViewabilityPassed(e, t) {
          e.groupMTimeMsUntilAdViewed = t, e.groupMV3TimeMsUntilAdViewed = t, e.groupMTimeMsUntilAdMeasured++, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e));
        }
      }
      t.GroupMVideoViewabilityBL = c;
    },
    8029: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabDisplayViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(3719),
        s = i(712),
        o = i(3380),
        d = i(425),
        l = i(1800),
        c = i(194),
        u = i(6689),
        p = i(749);
      class h extends n.BaseViewabilityBL {
        constructor() {
          super(...arguments), this.alreadyDvpSent = !1;
        }
        init() {}
        shouldRegisterToExposureEvents() {
          return !0;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == s.DvTagType.Display;
        }
        needToCheckViewability(e, t) {
          return !this.alreadyDvpSent && u.OmidWrapper.isSupported() && t.percentage > 0 && (p.MessageHandler.sendMessage({
            dvp_ompp: 1
          }), this.alreadyDvpSent = !0), null == e.timeMsUntilAdViewed && null != o.Utilities.getIabVisiblePercentage(t, c.DvObject.getIsOffScreen());
        }
        isViewabilityConditionPassed(e) {
          let t = o.Utilities.isLargeAd(e.adSize, 242500, c.DvObject.isMobile()),
            i = o.Utilities.isIabPageInFocus(e, c.DvObject.isFocusStrictMode()),
            r = o.Utilities.getIabVisiblePercentage(e, c.DvObject.getIsOffScreen());
          return !(!r || !i) && (!!(t && r >= 30) || !t && r >= 50);
        }
        shouldReportViewability(e, t, i) {
          return i.iabViewedTime = e ? i.iabViewedTime + t : 0, i.iabViewedTime >= 1e3;
        }
        reportViewabilityMeasured(e, t) {
          if (e.timeMsUntilAdMeasured) return;
          t.viewportSize && (e.viewportHeight = Math.ceil(t.viewportSize.height), e.viewportWidth = Math.ceil(t.viewportSize.width));
          const i = d.BrowserAdaptor.getScreenSize();
          i && i.width && i.height && (e.screenHeight = Math.ceil(i.height), e.screenWidth = Math.ceil(i.width)), e.timeMsUntilAdMeasured = t.updateTime, e.unadjustedTimeMsUntilAdMeasured = t.updateTime, e.isViewabilityEligible = 1, r.EventBus.dispatchEvent(r.DvEvent.reportData, new l.AdCandidateEventData(e));
        }
        reportViewabilityPassed(e, t) {
          e.timeMsUntilAdViewed = t, e.unadjustedTimeMsUntilAdViewed = t, e.timeMsUntilAdMeasured++, r.EventBus.dispatchEvent(r.DvEvent.reportData, new l.AdCandidateEventData(e));
        }
      }
      t.IabDisplayViewabilityBL = h;
    },
    5157: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabDisplayViewabilityForXSecondsBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800),
        l = i(3380);
      class c extends s.BaseViewabilityBL {
        init() {}
        shouldRegisterToExposureEvents() {
          return !0;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Display;
        }
        needToCheckViewability(e, t) {
          return e.iabViewablitiyTimeToCheck.length > 0 && null != this.getPercentage(t);
        }
        isViewabilityConditionPassed(e) {
          let t = l.Utilities.isLargeAd(e.adSize, 242500, n.DvObject.isMobile()),
            i = n.DvObject.isFocusStrictMode() ? e.strictFocus : e.focus;
          return !(!this.getPercentage(e) || !i) && (!!(t && this.getPercentage(e) >= 30) || !t && this.getPercentage(e) >= 50);
        }
        shouldReportViewability(e, t, i) {
          return i.IABAdViewableForXSecondsViewedTime = e ? i.IABAdViewableForXSecondsViewedTime + t : 0, i.IABAdViewableForXSecondsViewedTime >= i.IABAdViewableForXSecondsdurationRequirement;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          const i = e.iabViewablitiyTimeToCheck.shift();
          e["iabv" + i] = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e, {
            reportType: 2
          })), e.iabViewablitiyTimeToCheck.length > 0 && (e.IABAdViewableForXSecondsdurationRequirement = 1e3 * e.iabViewablitiyTimeToCheck[0]);
        }
        getPercentage(e) {
          let t = e.percentage,
            i = e.offScreenPercentage;
          return null != i && n.DvObject.getIsOffScreen() ? i : t;
        }
      }
      t.IabDisplayViewabilityForXSecondsBL = c;
    },
    8123: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabNotViewReasonsViewabilityBL = void 0;
      const r = i(7360),
        a = i(6751),
        n = i(7749),
        s = i(712),
        o = i(3380),
        d = i(194);
      class l extends a.BaseAdBL {
        getActionName() {
          return "IabNotViewReasonsViewabilityBL";
        }
        init() {
          this.isVideoTag = n.DvTagDataObject.getTagType() == s.DvTagType.Video, this.viewTimeThreshold = this.isVideoTag ? 2e3 : 1e3;
        }
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.impressionServed]: this.start.bind(this)
          };
        }
        start() {
          r.EventBus.addEventsListener({
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this)
          });
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData,
            r = o.Utilities.getIabVisiblePercentage(i, d.DvObject.getIsOffScreen()),
            a = o.Utilities.isIabPageInFocus(i, d.DvObject.isFocusStrictMode());
          if (!t.notViewableReasonWasViewed && null != r) {
            if (!this.isVideoTag || this.isVideoTag && i.adIsPlaying) if (t.notViewableReasonVideoPlayed = !0, a) {
              if (t.notViewableReasonWasInFocus = !0, r > 0) {
                t.notViewableReasonWasInViewPort = !0, r >= (!this.isVideoTag && o.Utilities.isLargeAd(i.adSize, 242500, d.DvObject.isMobile()) ? 30 : 50) ? (t.notViewableReasonCumulativeViewTime += i.intervalDuration, t.notViewableReasonConsecutiveViewTime += i.intervalDuration, t.notViewableReasonConsecutiveViewTime >= this.viewTimeThreshold && (t.notViewableReasonWasViewed = !0)) : t.notViewableReasonConsecutiveViewTime = 0;
              } else t.notViewableReasonConsecutiveViewTime = 0;
            } else t.notViewableReasonConsecutiveViewTime = 0;
            t.notViewableReason = this.getNotViewReason(t) || t.notViewableReason;
          }
        }
        getNotViewReason(e) {
          return this.isVideoTag && !e.notViewableReasonVideoPlayed ? 7 : e.notViewableReasonWasViewed ? 6 : e.notViewableReasonWasInFocus ? e.notViewableReasonWasInViewPort ? 0 == e.notViewableReasonCumulativeViewTime ? 3 : e.notViewableReasonCumulativeViewTime < this.viewTimeThreshold ? 4 : e.notViewableReasonConsecutiveViewTime < this.viewTimeThreshold ? 5 : void 0 : 2 : 1;
        }
      }
      t.IabNotViewReasonsViewabilityBL = l;
    },
    5993: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabVideoQuartileViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(1800),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {
          this.iabMinimalDuration = 2e3, this.iabMinimalAdAreaPercentageForStandardSize = 50;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this),
            [r.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [r.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [r.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [r.DvEvent.adVideoCompleteData]: this.handleQuartileData.bind(this, 4)
          };
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adIsPlaying && (t["q" + t.iabVideoQuartileId + "iabvms"] || this.tryReportViewed(t, i));
        }
        handleQuartileData(e, t) {
          const i = t.adCandidate;
          i.iabVideoQuartileViewed = 0, i.iabVideoQuartileId = e + 1;
        }
        tryReportViewed(e, t) {
          this.IsIabCriteriaPassed(t) ? (e.iabVideoQuartileViewed += t.intervalDuration, e.iabVideoQuartileViewed >= this.iabMinimalDuration && this.reportViewedImpression(e, t.updateTime)) : e.iabVideoQuartileViewed = 0;
        }
        IsIabCriteriaPassed(e) {
          return !(!e.percentage || !e.focus) && e.percentage >= this.iabMinimalAdAreaPercentageForStandardSize;
        }
        reportViewedImpression(e, t) {
          e["q" + e.iabVideoQuartileId + "iabvms"] = t, e.markAdQuartile(1, e.iabVideoQuartileId), r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e));
        }
      }
      t.IabVideoQuartileViewabilityBL = d;
    },
    5152: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabVideoViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(425),
        l = i(1800),
        c = i(6689),
        u = i(749);
      class p extends s.BaseViewabilityBL {
        constructor() {
          super(...arguments), this.alreadyDvpSent = !1;
        }
        init() {
          this.iabMinimalDuration = 2e3, this.iabMinimalAdAreaPercentageForStandardSize = 50;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return !0;
        }
        needToCheckViewability(e, t) {
          return !this.alreadyDvpSent && c.OmidWrapper.isSupported() && t.percentage > 0 && (u.MessageHandler.sendMessage({
            dvp_ompp: 1
          }), this.alreadyDvpSent = !0), null == e.timeMsUntilAdViewed && null != this.getPercentage(t) && t.adIsPlaying;
        }
        isViewabilityConditionPassed(e) {
          let t = n.DvObject.isFocusStrictMode() ? e.strictFocus : e.focus;
          return !(!this.getPercentage(e) || !t) && this.getPercentage(e) >= this.iabMinimalAdAreaPercentageForStandardSize;
        }
        shouldReportViewability(e, t, i) {
          return i.iabViewedTime = e ? i.iabViewedTime + t : 0, i.iabViewedTime >= this.iabMinimalDuration;
        }
        reportViewabilityMeasured(e, t) {
          if (e.timeMsUntilAdMeasured) return;
          t.viewportSize && (e.viewportHeight = Math.ceil(t.viewportSize.height), e.viewportWidth = Math.ceil(t.viewportSize.width));
          const i = d.BrowserAdaptor.getScreenSize();
          i && i.width && i.height && (e.screenHeight = Math.ceil(i.height), e.screenWidth = Math.ceil(i.width)), e.timeMsUntilAdMeasured = t.updateTime, e.unadjustedTimeMsUntilAdMeasured = t.updateTime, e.isViewabilityEligible = 1, r.EventBus.dispatchEvent(r.DvEvent.reportData, new l.AdCandidateEventData(e));
        }
        reportViewabilityPassed(e, t) {
          e.timeMsUntilAdViewed = t, e.unadjustedTimeMsUntilAdViewed = t, e.timeMsUntilAdMeasured++, r.EventBus.dispatchEvent(r.DvEvent.reportData, new l.AdCandidateEventData(e));
        }
        getPercentage(e) {
          let t = e.percentage,
            i = e.offScreenPercentage;
          return null != i && n.DvObject.getIsOffScreen() ? i : t;
        }
      }
      t.IabVideoViewabilityBL = p;
    },
    1061: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IabVideoViewabilityForXSecondsBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(194),
        s = i(3719),
        o = i(712),
        d = i(1800);
      class l extends s.BaseViewabilityBL {
        init() {
          this.iabMinimalDuration = 2e3, this.iabMinimalAdAreaPercentageForStandardSize = 50;
        }
        shouldRegisterToExposureEvents() {
          return !0;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        needToCheckViewability(e, t) {
          return e.iabViewablitiyTimeToCheck.length > 0 && null != this.getPercentage(t) && t.adIsPlaying;
        }
        isViewabilityConditionPassed(e) {
          let t = n.DvObject.isFocusStrictMode() ? e.strictFocus : e.focus;
          return !(!this.getPercentage(e) || !t) && this.getPercentage(e) >= this.iabMinimalAdAreaPercentageForStandardSize;
        }
        shouldReportViewability(e, t, i) {
          return i.IABAdViewableForXSecondsViewedTime = e ? i.IABAdViewableForXSecondsViewedTime + t : 0, i.IABAdViewableForXSecondsViewedTime >= i.IABAdViewableForXSecondsdurationRequirement;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          const i = e.iabViewablitiyTimeToCheck.shift();
          e["iabv" + i] = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new d.AdCandidateEventData(e, {
            reportType: 2
          })), e.iabViewablitiyTimeToCheck.length > 0 && (e.IABAdViewableForXSecondsdurationRequirement = 1e3 * e.iabViewablitiyTimeToCheck[0]);
        }
        getPercentage(e) {
          let t = e.percentage,
            i = e.offScreenPercentage;
          return null != i && n.DvObject.getIsOffScreen() ? i : t;
        }
      }
      t.IabVideoViewabilityForXSecondsBL = l;
    },
    3054: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.KMEVideoViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(1800),
        s = i(194),
        o = i(3719),
        d = i(712);
      class l extends o.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == d.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return this.kmeViewabilityConditions = s.DvObject.getKMEVideoViewabilityConditions(), !!this.kmeViewabilityConditions && (r.EventBus.addEventListener(r.DvEvent.adVideoCompleteData, this.handleVideoCompleteData.bind(this)), !0);
        }
        isViewabilityConditionPassed(e) {
          return !(null == e.percentage || !e.focus || this.kmeViewabilityConditions.minimalAdAreaPercentage && e.percentage < this.kmeViewabilityConditions.minimalAdAreaPercentage) && (!this.kmeViewabilityConditions.requireVolume || 0 != e.volume);
        }
        needToCheckViewability(e, t) {
          return null == e.kmeTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying && !e.kmeConditionsFailed;
        }
        shouldReportViewability(e, t, i, r) {
          return !i.kmeStartMeasure && r.adVideoTimeLine >= this.kmeViewabilityConditions.timeLineLeftBoundary && (i.kmeStartMeasure = !0), i.kmeStartMeasure && r.adVideoTimeLine <= this.kmeViewabilityConditions.timeLineRightBoundary && (e || (i.kmeConditionsFailed = !0)), r.adVideoTimeLine >= this.kmeViewabilityConditions.timeLineRightBoundary && !i.kmeConditionsFailed;
        }
        reportViewabilityMeasured(e, t) {}
        reportViewabilityPassed(e, t) {
          e.kmeTimeMsUntilAdViewed = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e));
        }
        handleVideoCompleteData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          t.kmeStartMeasure && !t.kmeConditionsFailed && this.reportViewabilityPassed(t, i.updateTime);
        }
      }
      t.KMEVideoViewabilityBL = l;
    },
    8642: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PMXDisplayViewabilityBL = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(3719),
        s = i(712),
        o = i(1800),
        d = i(3380);
      class l extends n.BaseViewabilityBL {
        init() {}
        isSupported() {
          return r.DvTagDataObject.getTagType() == s.DvTagType.Display;
        }
        shouldRegisterToExposureEvents() {
          return !0;
        }
        isViewabilityConditionPassed(e) {
          let t = d.Utilities.isLargeAd(e.adSize, 242500);
          return !(!e.percentage || !e.focus) && (!!(t && e.percentage >= 30) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.pmxTimeMsUntilAdViewed && null != t.percentage;
        }
        shouldReportViewability(e, t, i, r) {
          return i.pmxViewedTime = e ? i.pmxViewedTime + t : 0, i.pmxViewedTime >= 1e3;
        }
        reportViewabilityMeasured(e, t) {
          e.pmxTimeMsUntilAdMeasured || (e.pmxTimeMsUntilAdMeasured = t.updateTime);
        }
        reportViewabilityPassed(e, t) {
          e.pmxTimeMsUntilAdViewed = t, a.EventBus.dispatchEvent(a.DvEvent.reportData, new o.AdCandidateEventData(e));
        }
      }
      t.PMXDisplayViewabilityBL = l;
    },
    2181: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PMXVideoViewabilityBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(3719),
        s = i(712),
        o = i(1800),
        d = i(3380);
      class l extends n.BaseViewabilityBL {
        init() {}
        isSupported() {
          return a.DvTagDataObject.getTagType() == s.DvTagType.Video;
        }
        shouldRegisterToExposureEvents() {
          return !0;
        }
        isViewabilityConditionPassed(e) {
          let t = d.Utilities.isLargeAd(e.adSize, 3e5);
          return !(!e.percentage || !e.focus) && (!!(t && e.percentage >= 50) || !t && e.percentage >= 98);
        }
        needToCheckViewability(e, t) {
          return null == e.pmxTimeMsUntilAdViewed && null != t.percentage && t.adIsPlaying;
        }
        shouldReportViewability(e, t, i, r) {
          return i.pmxViewedTime = e ? i.pmxViewedTime + t : 0, i.pmxViewedTime >= 2e3;
        }
        reportViewabilityMeasured(e, t) {
          e.pmxTimeMsUntilAdMeasured || (e.pmxTimeMsUntilAdMeasured = t.updateTime);
        }
        reportViewabilityPassed(e, t) {
          e.pmxTimeMsUntilAdViewed = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new o.AdCandidateEventData(e));
        }
      }
      t.PMXVideoViewabilityBL = l;
    },
    458: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RbViewabilityBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(7749),
        s = i(194),
        o = i(6751),
        d = i(712);
      class l extends o.BaseAdBL {
        getActionName() {
          return "RbViewabilityBL";
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.impressionServed]: this.impressionServed.bind(this)
          };
        }
        impressionServed() {
          s.DvObject.getAllowRBViewability() && r.EventBus.addEventListener(r.DvEvent.exposureData, this.handleViewabilityData.bind(this));
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          (n.DvTagDataObject.getTagType() != d.DvTagType.Video || i.adIsPlaying) && (t.rBV1PassedMs || this.tryReportViewed(t, i));
        }
        tryReportViewed(e, t) {
          t.percentage && t.focus && t.percentage >= 50 && this.reportViewedImpression(e, t.updateTime);
        }
        reportViewedImpression(e, t) {
          e.rBV1PassedMs = t, r.EventBus.dispatchEvent(r.DvEvent.reportData, new a.AdCandidateEventData(e));
        }
      }
      t.RbViewabilityBL = l;
    },
    3454: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoFullQuartileAudibleBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(1800),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {
          this.minimalAdAreaPercentageForStandardSize = 98;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleAudibleData.bind(this),
            [r.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [r.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [r.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [r.DvEvent.adVideoCompleteData]: this.handleQuartileData.bind(this, 4)
          };
        }
        handleAudibleData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adIsPlaying && (0 != t.isVideoFullQuartileAudible && this.isCriteriaPassed(i.volume) ? t.isVideoFullQuartileAudible = !0 : t.isVideoFullQuartileAudible = !1);
        }
        handleQuartileData(e, t) {
          const i = t.adCandidate;
          this.reportViewedImpression(i), i.videoFullQuartileAudibleId = e + 1, i.isVideoFullQuartileAudible = null;
        }
        isCriteriaPassed(e) {
          return null != e && -1 != e && 0 != e;
        }
        reportViewedImpression(e) {
          e.isVideoFullQuartileAudible && (e.markAdQuartile(8, e.videoFullQuartileAudibleId), r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e)));
        }
      }
      t.VideoFullQuartileAudibleBL = d;
    },
    1354: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoQuartileFullOnScreenBL = void 0;
      const r = i(7360),
        a = i(7749),
        n = i(1800),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {
          this.minimalAdAreaPercentageForStandardSize = 98;
        }
        isSupported() {
          return a.DvTagDataObject.getTagType() == o.DvTagType.Video;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this),
            [r.DvEvent.adVideoFirstQuartileData]: this.handleQuartileData.bind(this, 1),
            [r.DvEvent.adVideoMidpointData]: this.handleQuartileData.bind(this, 2),
            [r.DvEvent.adVideoThirdQuartileData]: this.handleQuartileData.bind(this, 3),
            [r.DvEvent.adVideoCompleteData]: this.handleQuartileData.bind(this, 4)
          };
        }
        handleViewabilityData(e) {
          const t = e.adCandidate,
            i = e.relevantData;
          i.adIsPlaying && (0 != t.isVideoFullQuartileViewed && this.isCriteriaPassed(i) ? t.isVideoFullQuartileViewed = !0 : t.isVideoFullQuartileViewed = !1);
        }
        handleQuartileData(e, t) {
          const i = t.adCandidate;
          this.reportViewedImpression(i), i.videoFullQuartileViewabilityId = e + 1, i.isVideoFullQuartileViewed = null;
        }
        isCriteriaPassed(e) {
          return !(!e.percentage || !e.focus) && e.percentage >= this.minimalAdAreaPercentageForStandardSize;
        }
        reportViewedImpression(e) {
          e.isVideoFullQuartileViewed && (e.markAdQuartile(16, e.videoFullQuartileViewabilityId), r.EventBus.dispatchEvent(r.DvEvent.reportData, new n.AdCandidateEventData(e)));
        }
      }
      t.VideoQuartileFullOnScreenBL = d;
    },
    1726: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ViewabilityStartPercentageBL = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(7749),
        s = i(6751),
        o = i(712);
      class d extends s.BaseAdBL {
        init() {
          this.visiblePercentage = 50;
        }
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [r.DvEvent.exposureData]: this.handleViewabilityData.bind(this)
          };
        }
        handleViewabilityData(e) {
          let t = e.adCandidate,
            i = e.relevantData;
          (n.DvTagDataObject.getTagType() != o.DvTagType.Video || i.adIsPlaying) && null == t.startPercentage && null != i.percentage && (t.startPercentage = i.percentage, t.adVisibleOnload = i.percentage >= this.visiblePercentage, r.EventBus.dispatchEvent(r.DvEvent.reportData, new a.AdCandidateEventData(t)));
        }
      }
      t.ViewabilityStartPercentageBL = d;
    },
    6715: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ViewableShareOfScreenBL = void 0;
      const r = i(1800),
        a = i(6751),
        n = i(7360),
        s = i(3380),
        o = i(194),
        d = i(7749),
        l = i(712),
        c = i(3868),
        u = i(425);
      class p extends a.BaseAdBL {
        constructor() {
          super(...arguments), this.MIN_VAL = 0, this.MAX_VAL = 100, this.MAX_EVENTS = 4, this.MIN_PERCENTAGE_CHANGE = 10;
        }
        init() {}
        isSupported() {
          return !0;
        }
        getEventsAndCallbacksToRegister() {
          return {
            [n.DvEvent.impressionServed]: this.handleImpressionServed.bind(this)
          };
        }
        handleImpressionServed() {
          n.EventBus.addEventsListener({
            [n.DvEvent.exposureData]: this.handleViewabilityData.bind(this),
            [n.DvEvent.adVideoCompleteData]: this.handleVideoCompleteOrUnload.bind(this),
            [n.DvEvent.unloadData]: this.handleVideoCompleteOrUnload.bind(this)
          });
        }
        handleViewabilityData(e) {
          const {
            viewableShareOfScreenData: t,
            screenSize: i,
            viewablePercentage: r,
            adSize: a,
            adIsPlaying: n,
            isInFocus: o,
            isIabViewed: d
          } = this.prepareValues(e);
          if (this.isViewabilityConditionPassed(a, i, n, o, r)) {
            const e = a.height * a.width * r / (i.width * i.height);
            if (t.sumViewableShareOfScreen += e, t.viewableIntervalCount = t.viewableIntervalCount + 1, d) {
              const e = t.shareOfScreenNotMeasuredReason;
              t.shareOfScreenNotMeasuredReason = 16;
              const i = s.Utilities.getValBetweenMinAndMax(Math.round(t.sumViewableShareOfScreen / t.viewableIntervalCount), this.MIN_VAL, this.MAX_VAL);
              t.avgViewableShareOfScreen = i, c.WindowAdaptor.isIOS() && this.isApplicableForInstantIosReport(t, r) ? (t.shareOfScreenLastIosReportedPercentage = r, this.report(t)) : this.shouldReportFirstTimeViewableShareOfScreenIsMeasured(e) && this.report(t);
            }
          }
          t.shareOfScreenNotMeasuredReason = this.getValidationReasonBits(i, a, d, t);
        }
        shouldReportFirstTimeViewableShareOfScreenIsMeasured(e) {
          return !!e && 16 !== e;
        }
        prepareValues(e) {
          const t = e.relevantData,
            i = e.adCandidate;
          i.sumViewableShareOfScreen = i.sumViewableShareOfScreen || 0, i.viewableIntervalCount = i.viewableIntervalCount || 0;
          const {
            screenSize: r,
            viewablePercentage: a,
            adSize: n,
            adIsPlaying: s,
            isInFocus: o
          } = this.collectCurrentShareOfScreenData(t, i);
          return {
            viewableShareOfScreenData: i,
            screenSize: r,
            viewablePercentage: a,
            adSize: n,
            adIsPlaying: s,
            isInFocus: o,
            isIabViewed: !!i.timeMsUntilAdViewed
          };
        }
        report(e) {
          n.EventBus.dispatchEvent(n.DvEvent.reportData, new r.AdCandidateEventData(e));
        }
        calculateMaxEventsNumber(e) {
          return void 0 === e ? this.MAX_EVENTS : e;
        }
        isApplicableForInstantIosReport(e, t) {
          e.shareOfScreenEventsLeftToReport = this.calculateMaxEventsNumber(e.shareOfScreenEventsLeftToReport);
          const i = !e.shareOfScreenLastIosReportedPercentage || e.shareOfScreenEventsLeftToReport > 0 && e.shareOfScreenLastIosReportedPercentage != t && e.shareOfScreenLastIosReportedPercentage + this.MIN_PERCENTAGE_CHANGE <= 100 && Math.abs(e.shareOfScreenLastIosReportedPercentage - t) >= this.MIN_PERCENTAGE_CHANGE;
          return i && (e.shareOfScreenEventsLeftToReport = 0 === e.shareOfScreenEventsLeftToReport ? 0 : e.shareOfScreenEventsLeftToReport - 1), i;
        }
        collectCurrentShareOfScreenData(e, t) {
          const i = s.Utilities.isIabPageInFocus(e, o.DvObject.isFocusStrictMode());
          return {
            screenSize: this.getComparableScreenSize(e, t),
            viewablePercentage: e.percentage,
            adSize: e.adSize,
            adIsPlaying: d.DvTagDataObject.getTagType() != l.DvTagType.Video || e.adIsPlaying,
            isInFocus: i
          };
        }
        getComparableScreenSize(e, t) {
          t.shareOfScreenReadFromViewport = t.shareOfScreenReadFromViewport || this.isApplicableForViewportMeasurement() && this.reportReadFromViewport(t);
          let i = e.screenSize;
          if (t.shareOfScreenReadFromViewport && i && i.width > 0 && i.height) {
            const t = u.BrowserAdaptor.getInnerViewport();
            t.width > 0 && t.height > 0 && (i = {
              width: t.width,
              height: e.screenSize.height * (t.width / e.screenSize.width)
            });
          }
          return i;
        }
        isApplicableForViewportMeasurement() {
          if (2 === o.DvObject.getDetectedDeliveryType() && (2 == (2 & c.WindowAdaptor.getScenarioType()) || 1 == (1 & c.WindowAdaptor.getScenarioType()))) {
            const e = u.BrowserAdaptor.getMetaTagAttributes(c.WindowAdaptor.workingDocument(c.WindowAdaptor.windowTop()), "viewport");
            return !this.isWebPageResponsive(e);
          }
          return !1;
        }
        isWebPageResponsive(e) {
          const t = e.width,
            i = e["initial-scale"];
          return !s.Utilities.isEmptyObject(e) && (1 === Number(i) || "device-width" === t);
        }
        reportReadFromViewport(e) {
          return e.shareOfScreenReadFromViewportReport = 1, !0;
        }
        handleVideoCompleteOrUnload(e) {
          const t = e.adCandidate;
          this.report(t);
        }
        isViewabilityConditionPassed(e, t, i, r, a) {
          return i && r && this.validateScreenAndAdSize(e, t) && this.isAdPercentageCriteriaPassed(e, a);
        }
        validateScreenAndAdSize(e, t) {
          const i = e && e.width && e.height,
            r = t && t.width && t.height;
          return i && r;
        }
        getValidationReasonBits(e, t, i, r) {
          let a = 16 === r.shareOfScreenNotMeasuredReason ? 16 : 0;
          return a || (e && e.height && e.width || (a |= 4), t && t.height && t.width || (a |= 2), i || (a |= 1)), a;
        }
        isAdPercentageCriteriaPassed(e, t) {
          return s.Utilities.isLargeAd(e, 242500, o.DvObject.isMobile()) ? t >= 30 : t >= 50;
        }
        getActionName() {
          return "ViewableShareOfScreenBL";
        }
      }
      t.ViewableShareOfScreenBL = p;
    },
    3350: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdAsset = void 0;
      t.AdAsset = class {
        constructor(e, t, i, r, a) {
          this.id = e, this.player = t, this.adDuration = i, this.executeDVClientCallback = a, this.adSkippable = r;
        }
      };
    },
    7349: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdContainerInspector = void 0;
      const r = i(3380);
      t.AdContainerInspector = class {
        constructor(e) {
          this.container = e;
        }
        getContainer() {
          var e;
          return null !== (e = this.container) && void 0 !== e ? e : null;
        }
        getContainerId() {
          var e;
          return null === (e = this.container) || void 0 === e ? void 0 : e.id;
        }
        getDescendants(e = [], t = []) {
          return r.Utilities.convertToArray(this.getDescendantsAsCollection(e)).filter(e => !t.includes(e.tagName.toLowerCase()));
        }
        getDescendantsAsCollection(e) {
          var t, i;
          if ((null == e ? void 0 : e.length) > 0 && this.getContainerId()) {
            const i = e.join();
            return null === (t = this.container) || void 0 === t ? void 0 : t.querySelectorAll(`#${this.getContainerId()} ${i}`);
          }
          return null === (i = this.container) || void 0 === i ? void 0 : i.getElementsByTagName("*");
        }
        getDirectChildren(e = [], t = []) {
          return r.Utilities.convertToArray(this.getDirectChildrenAsCollection(e)).filter(e => !t.includes(e.tagName.toLowerCase()));
        }
        getDirectChildrenAsCollection(e) {
          var t;
          if ((null == e ? void 0 : e.length) > 0 && this.getContainerId()) {
            const t = e.join();
            return this.container.querySelectorAll(`#${this.getContainerId()} > ${t}`);
          }
          return null === (t = this.container) || void 0 === t ? void 0 : t.children;
        }
        getMostPopularDirectChildElement(e = []) {
          const t = this.createDirectChildrenTable(e);
          return r.Utilities.getKeyWithHighestValue(t);
        }
        createDirectChildrenTable(e = []) {
          const t = this.getDirectChildren([], e).map(e => e.tagName.toLowerCase());
          return r.Utilities.countBy(t);
        }
      };
    },
    5670: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdContainerInspectorFactory = void 0;
      const r = i(7349),
        a = i(425);
      t.AdContainerInspectorFactory = class {
        constructor(e) {
          this.containerId = e;
        }
        createAdContainerInspector() {
          return new r.AdContainerInspector(this.getContainer());
        }
        getContainer() {
          return this.containerId ? a.BrowserAdaptor.getElementById(this.containerId) : null;
        }
      };
    },
    2196: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DvBackwardCompatibilityClass = void 0;
      const r = i(749),
        a = i(425),
        n = i(3380),
        s = i(6681),
        o = i(7360),
        d = i(3868),
        l = i(3946);
      t.DvBackwardCompatibilityClass = class {
        constructor() {
          this.dvObjType = "dv", this.messages = {
            registerMsg(e, t) {
              r.MessageHandler.sendMessage(t);
            },
            startSendingEvents(e, t) {}
          }, this.domUtilities = {
            outer: this,
            addImage(e, t, i, r) {
              let s = n.Utilities.getParamValue(e, "impid");
              if (null != s && this.outer.tags && this.outer.tags[s] && "object" == typeof this.outer.tags[s].eventIdGenerator && "function" == typeof this.outer.tags[s].eventIdGenerator.getNext) {
                e += "&eoid=" + this.outer.tags[s].eventIdGenerator.getNext();
              }
              a.BrowserAdaptor.sendBeacon(e, i, t);
            },
            addScriptResource(e, t) {
              a.BrowserAdaptor.addScriptAsync(e, t);
            }
          }, this.pubSub = o.EventBusGlobal, this.CommonData = {
            Scenario: d.WindowAdaptor.getScenarioType(),
            BrowserId: l.BrowserDetector.getBrowserId(),
            BrowserIdFromUserAgent: l.BrowserDetector.getBrowserIdUserAgent(),
            BrowserVersion: l.BrowserDetector.getBrowserVersion()
          }, this.tags = {}, this.sendBeacon = () => {};
        }
        resolveMacros(e, t) {
          return n.Utilities.resolveMacros(e, t);
        }
        registerEventCall(e, t, i, a) {
          t.tagsrv = 1, r.MessageHandler.registerEventCall(e, t, a, i);
        }
        createEventCallUrl(e, t, i = !1) {
          return r.MessageHandler.createEventCallUrl(e, Object.assign(Object.assign({}, t), {
            tagsrv: 1
          }), i);
        }
        getWorkingWindow() {
          return d.WindowAdaptor.workingWindow();
        }
        getMraid() {
          return s.MraidWrapper.getMraid();
        }
      };
    },
    5999: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BeaconsAdaptor = void 0;
      const r = i(3868),
        a = i(425);
      t.BeaconsAdaptor = new class {
        positionBeacons(e, t, i) {
          const n = r.WindowAdaptor.getDefaultWindow(e).document,
            s = r.WindowAdaptor.workingBody(n),
            o = a.BrowserAdaptor.getScrollData(s).left,
            d = a.BrowserAdaptor.getScrollData(s).top,
            {
              width: l,
              height: c,
              left: u,
              top: p
            } = a.BrowserAdaptor.getBoundingClientRect(e),
            h = l / 2.414213562373095,
            g = c / 2.414213562373095,
            m = l / 1.4142135623730951,
            v = c / 1.4142135623730951;
          for (let e = 0; e < t.length; e++) {
            const r = Math.round(5 * Math.random()),
              a = t[e];
            switch (a.left = u + o, a.top = p + d, e) {
              case 0:
                a.left = -1e5, a.top = -1e5;
                break;
              case 1:
                a.left += r, a.top += r;
                break;
              case 2:
                a.left += l - i - r, a.top += r;
                break;
              case 3:
                a.left += r, a.top += c - i - r;
                break;
              case 4:
                a.left += l - i - r, a.top += c - i - r;
                break;
              case 5:
                a.left += l / 2 + r, a.top += c / 2 + r;
                break;
              case 6:
                a.left += (l - m) / 2 + r, a.top += (c - v) / 2 + r;
                break;
              case 7:
                a.left += (l - m) / 2 + m, a.top += (c - v) / 2;
                break;
              case 8:
                a.left += (l - m) / 2, a.top += (c - v) / 2 + v + r;
                break;
              case 9:
                a.left += (l - m) / 2 + m - r, a.top += (c - v) / 2 + v - r;
                break;
              case 10:
                a.left += (l - h) / 2 + r, a.top += (c - g) / 2 + r;
                break;
              case 11:
                a.left += (l - h) / 2 + h - r, a.top += (c - g) / 2 + r;
                break;
              case 12:
                a.left += (l - h) / 2 + r, a.top += (c - g) / 2 + g - r;
                break;
              case 13:
                a.left += (l - h) / 2 + h - r, a.top += (c - g) / 2 + g - r;
            }
            e >= 5 && (a.left -= i / 2, a.top -= i / 2), a.style.left = a.left + "px", a.style.top = a.top + "px";
          }
        }
        getElementVisiblePercentageWithBeacons(e, t) {
          let i = 0,
            r = 0,
            a = 0,
            n = 0;
          for (let s = 1; s < e.length; s++) {
            if (t(e[s])) switch (s) {
              case 5:
                n++;
                break;
              case 1:
              case 2:
              case 3:
              case 4:
                i++;
                break;
              case 6:
              case 7:
              case 8:
              case 9:
                r++;
                break;
              case 10:
              case 11:
              case 12:
              case 13:
                a++;
            }
          }
          return n || 2 != i || 2 != a ? n ? 4 == i ? 100 : i >= 2 || 4 == r || 4 == a && i >= 1 ? 50 : 4 == a && r >= 1 ? 30 : 0 : 0 : 30;
        }
      }();
    },
    6875: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getWorkingWindow = t.getCurrentWindow = t.getTagUniqueKey = void 0;
      const r = i(3380);
      dvWindow = "undefined" != typeof window && window || dvWindow;
      let a = "";
      function n() {
        return ("undefined" != typeof $dv && $dv || {}).isDomlessEnvironment ? {} : dvWindow;
      }
      t.getTagUniqueKey = function () {
        if ("" === a) {
          const e = "undefined" != typeof $dv && $dv || {};
          if (!e.hasOwnProperty("tagData")) throw new Error("dv object missing tagData property");
          if (!e.tagData || "object" != typeof e.tagData) throw new Error("tagData is not an object");
          const t = Object.keys(e.tagData).filter(t => e.tagData[t].hasOwnProperty("tagScriptElem") && "0" == e.tagData[t].flvr && !e.tagData[t].isVisited);
          if (!t.length) throw new Error("all tags data visited");
          const i = r.Utilities.getVersion(),
            n = t.filter(t => e.tagData[t].dvtpScriptVersion === i && "0" == e.tagData[t].flvr);
          a = n.length ? n[0] : t[0], e.tagData[a].isVisited = !0;
        }
        return a;
      }, t.getCurrentWindow = n, t.getWorkingWindow = function () {
        const e = "undefined" != typeof $dv && $dv || {},
          t = n();
        let i = t;
        try {
          i = e.restrictedAccess ? t : t.parent;
        } catch (e) {
          i = t;
        }
        return i;
      };
    },
    425: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserAdaptor = t.BrowserAdaptorClass = void 0;
      const r = i(3868),
        a = i(6689),
        n = i(712),
        s = i(3380),
        o = i(2756),
        d = i(194),
        l = i(3946),
        c = i(363),
        u = i(6820);
      class p {
        constructor() {
          this.visibilityPropertyPrefixes = {
            hidden: "",
            webkitHidden: "webkit",
            mozHidden: "moz",
            msHidden: "ms"
          }, this.updateVisibilityProperties(), this.createPrerenderedImages();
        }
        sendBeaconIsSupported() {
          return r.WindowAdaptor.getNavigator() && !!r.WindowAdaptor.getNavigator().sendBeacon && l.BrowserDetector.getBrowserId() != n.Browser.Safari && l.BrowserDetector.getBrowserId() != n.Browser.SafariWebView;
        }
        createPrerenderedImages() {
          this.prerenderedImages = [], this.sendBeaconSupported = this.sendBeaconIsSupported(), this.sendBeaconSupported || s.Utilities.times(20, () => this.prerenderedImages.push(new Image()));
        }
        getVisibilityProperty() {
          for (let e of Object.keys(this.visibilityPropertyPrefixes)) if (null != r.WindowAdaptor.workingDocument()[e]) return e;
        }
        updateVisibilityProperties() {
          this.visibilityProperty = this.getVisibilityProperty(), this.visibilityPrefix = this.visibilityPropertyPrefixes[this.visibilityProperty];
        }
        getVisibilityPrefix() {
          return this.visibilityPrefix;
        }
        isVisibilityChangeEventSupported() {
          return !!this.visibilityProperty;
        }
        hasFocus() {
          return !(this.isVisibilityChangeEventSupported() && !a.OmidWrapper.isSupported()) || !r.WindowAdaptor.workingDocument()[this.visibilityProperty];
        }
        hasStrictFocus() {
          try {
            return !(r.WindowAdaptor.documentTop() && r.WindowAdaptor.documentTop().hasFocus && !a.OmidWrapper.isSupported()) || r.WindowAdaptor.documentTop().hasFocus();
          } catch (e) {
            return !0;
          }
        }
        addEventListener(e, t, i, r = !1) {
          e && t && i && (i.addEventListener ? i.addEventListener(e, t, r) : i.attachEvent ? i.attachEvent("on" + e, t) : i["on" + e] = t);
        }
        removeEventListener(e, t, i, r = !1) {
          e && t && i && i.removeEventListener && i.removeEventListener(e, t, r);
        }
        setTimeout(e, t) {
          return r.WindowAdaptor.currentWindow().setTimeout(e, t);
        }
        clearTimeout(e) {
          r.WindowAdaptor.currentWindow().clearTimeout(e);
        }
        setInterval(e, t) {
          return r.WindowAdaptor.currentWindow().setInterval(e, t);
        }
        clearInterval(e) {
          r.WindowAdaptor.currentWindow().clearInterval(e);
        }
        getPerformanceTimeNow() {
          return null == this.timeFunction && (u.isPerformanceApiSupported() ? this.timeFunction = () => r.WindowAdaptor.currentWindow().performance.now() : this.timeFunction = () => Date.now()), this.timeFunction();
        }
        isBrowserSupported() {
          let e,
            t = [];
          return e = "function" == typeof t.filter && "function" == typeof t.forEach, e;
        }
        getAttribute(e, t) {
          let i;
          if (e && t) try {
            i = e[t] || e.getAttribute(t);
          } catch (e) {}
          return i;
        }
        setElementStyle(e, t, i) {
          try {
            e.style.setProperty(t, i);
          } catch (e) {}
        }
        getElementsByTagNameFromDocument(e, t = r.WindowAdaptor.workingDocument()) {
          let i = [];
          if (t && e && t.getElementsByTagName) {
            let r = t.getElementsByTagName(e);
            r && (i = s.Utilities.arrayLikeToArray(r));
          }
          return i;
        }
        getElementsByClassName(e, t = r.WindowAdaptor.workingDocument()) {
          let i = [];
          if (t && e) {
            let r;
            t.getElementsByClassName ? r = t.getElementsByClassName(e) : t.querySelectorAll && (r = t.querySelectorAll("." + e)), r && (i = s.Utilities.arrayLikeToArray(r));
          }
          return i;
        }
        querySelector(e, t = r.WindowAdaptor.workingDocument()) {
          try {
            return t.querySelector(e);
          } catch (e) {}
        }
        createImage() {
          return new Image();
        }
        createElement(e, t = r.WindowAdaptor.workingDocument()) {
          if (e) return t.createElement(e);
        }
        insertBefore(e, t, i) {
          return e && e.insertBefore(t, i);
        }
        registerScriptEvent(e, t, i) {
          this.addEventListener("error", t && t.bind(null), e), this.addEventListener("load", i && i.bind(null), e);
        }
        addScriptAsync(e, t, i, a = !0, n, o) {
          t = t || r.WindowAdaptor.workingBody() || r.WindowAdaptor.workingDocument().head || r.WindowAdaptor.workingDocumentElement();
          const d = this.createElement("script", t.ownerDocument);
          d.type = "text/javascript", d.src = a ? s.Utilities.appendCacheBuster(e, "cbust") : e, this.registerScriptEvent(d, n, o), i && (d.id = i), this.insertBefore(t, d, t.firstChild);
        }
        addScriptSync(e, t) {
          t.write('<script type="text/javascript" src="' + e + '"><\/script>');
        }
        createIframe(e) {
          const t = this.createElement("iframe");
          return t.name = t.id = "iframe_" + c.RandomUtils.getRandom16(), t.width = "0", t.height = "0", t.style.display = "none", t.src = e, t;
        }
        addIframeAfterBodyTag(e, t = 150) {
          r.WindowAdaptor.workingDocument() && r.WindowAdaptor.workingBody() ? this.insertBefore(r.WindowAdaptor.workingBody(), e, r.WindowAdaptor.workingBody().firstChild) : this.setTimeout(() => this.addIframeAfterBodyTag(e, --t), 20);
        }
        getElementById(e, t = r.WindowAdaptor.workingDocument()) {
          if (e) return t.getElementById(e);
        }
        querySelectorAll(e, t) {
          try {
            return e.querySelectorAll(t);
          } catch (e) {}
        }
        getElementsByTagNameFromDomElement(e, t) {
          let i = [];
          if (e && t && e.getElementsByTagName) {
            let r = e.getElementsByTagName(t);
            r && (i = s.Utilities.arrayLikeToArray(r));
          }
          return i;
        }
        getElementType(e) {
          if (e) return e.nodeName.toLowerCase();
        }
        getBoundingClientRect(e) {
          let t = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
          };
          return e && e.getBoundingClientRect && (t = e.getBoundingClientRect()), t;
        }
        getObjectSize(e) {
          let t = {
            width: 0,
            height: 0
          };
          if ("object" == this.getElementType(e)) {
            let i = this.getAttribute(e, "height"),
              r = this.getAttribute(e, "width");
            s.Utilities.isNullOrEmpty(r) && s.Utilities.isNullOrEmpty(i) || (r = e.clientWidth, i = e.clientHeight);
            try {
              t.height = Number(i), t.width = Number(r);
            } catch (e) {}
          }
          return t;
        }
        getSiblingsNodes(e) {
          let t = [],
            i = null;
          for (e && e.parentNode && (i = e.parentNode.firstChild); i;) 1 === i.nodeType && i !== e && t.push(i), i = i.nextElementSibling || i.nextSibling;
          return t;
        }
        getElementChildren(e) {
          let t = [];
          if (e.hasChildNodes()) for (let i = 0; i < e.childNodes.length; i++) e.childNodes[i] && 1 === e.childNodes[i].nodeType && t.push(e.childNodes[i]);
          return t;
        }
        getAvailableScreenSize(e = !0) {
          let t = e ? 0 : null,
            i = e ? 0 : null;
          const a = r.WindowAdaptor.workingWindow() && r.WindowAdaptor.workingWindow().screen;
          return a && (t = a.availHeight, i = a.availWidth), {
            height: t,
            width: i
          };
        }
        getScreenSize() {
          let e = 0,
            t = 0;
          try {
            const i = r.WindowAdaptor.workingWindow() && r.WindowAdaptor.workingWindow().screen;
            i && (e = i.height, t = i.width);
          } catch (e) {}
          return {
            height: e,
            width: t
          };
        }
        getDevicePixelRatio() {
          let e;
          try {
            e = r.WindowAdaptor.workingWindow().devicePixelRatio;
          } catch (e) {}
          return e;
        }
        getInnerViewport(e = !0) {
          let t = e ? 0 : null,
            i = e ? 0 : null;
          try {
            const e = r.WindowAdaptor.windowTop(),
              a = r.WindowAdaptor.workingWindow();
            e ? (t = e.innerHeight, i = e.innerWidth) : a && (t = a.innerHeight, i = a.innerWidth);
          } catch (e) {}
          return {
            height: t,
            width: i
          };
        }
        getOuterViewport(e = r.WindowAdaptor.workingWindow(), t = !0) {
          let i = t ? 0 : null,
            a = t ? 0 : null;
          try {
            e && (i = e.outerHeight, a = e.outerWidth);
          } catch (e) {}
          return {
            height: i,
            width: a
          };
        }
        getViewportAssetsRelativeToScreen(e) {
          let t = 0,
            i = 0;
          try {
            e && (t = e.screenY, i = e.screenX);
          } catch (e) {}
          return {
            top: t,
            left: i
          };
        }
        getIframeAssetsRelativeToScreen(e = r.WindowAdaptor.workingWindow()) {
          let t = 0,
            i = 0;
          try {
            e && (t = e.mozInnerScreenY || e.screenTop, i = e.mozInnerScreenX || e.screenLeft);
          } catch (e) {}
          return {
            top: t,
            left: i
          };
        }
        getScrollData(e = r.WindowAdaptor.workingBody()) {
          let t = 0,
            i = 0;
          return e && (t = e.scrollLeft, i = e.scrollTop), {
            left: i,
            top: t
          };
        }
        smartInstanceof(e, t, i) {
          try {
            return e instanceof i[t] || i.parent != i && this.smartInstanceof(e, t, i.parent);
          } catch (e) {
            return !1;
          }
        }
        getNavigationStartTime() {
          let e = r.WindowAdaptor.workingWindow();
          if (e.performance && e.performance.timing) return r.WindowAdaptor.workingWindow().performance.timing.navigationStart;
        }
        getElementSize(e) {
          let t = {
            width: 0,
            height: 0
          };
          try {
            if ("object" != this.getElementType(e)) {
              let i = this.getBoundingClientRect(e);
              t.height = i.height, t.width = i.width;
            } else t = this.getObjectSize(e);
          } catch (e) {}
          return t;
        }
        getElementStaticSize(e) {
          return {
            width: e.innerWidth || e.clientWidth,
            height: e.innerHeight || e.clientHeight
          };
        }
        sendBeacon(e, t = !1, i) {
          if (e = s.Utilities.appendCacheBuster(e, d.DvObject.getCacheBusterName()), a.OmidWrapper.isSupported()) a.OmidWrapper.sendUrl(e);else if (!t && this.sendBeaconSupported) r.WindowAdaptor.getNavigator().sendBeacon(e);else {
            let t;
            t = this.prerenderedImages && this.prerenderedImages.length ? this.prerenderedImages.pop() : this.createImage(), t.src = e;
          }
          s.Utilities.logDvSignal(e);
        }
        isElementAttachedToDocument(e) {
          try {
            return "IFRAME" == e.nodeName ? !!r.WindowAdaptor.getIframeWindow(e) : r.WindowAdaptor.workingDocument().contains(e);
          } catch (e) {}
        }
        getParentNode(e) {
          return e && e.parentNode;
        }
        getOrientation() {
          let e,
            t = r.WindowAdaptor.currentWindow();
          return void 0 !== t.orientation && (e = parseInt(t.orientation.toString())), e;
        }
        isAdElementHidden(e) {
          let t = e.ownerDocument ? e.ownerDocument.defaultView || e.ownerDocument.parentWindow : null;
          if (t) return this.getAdElementHiddenStatus(e, t);
        }
        getAdElementHiddenStatus(e, t) {
          let i;
          try {
            if (!r.WindowAdaptor.isTop(t)) {
              if (!t.frameElement) return;
              e = t.frameElement, t = r.WindowAdaptor.getWindowParent(t);
            }
          } catch (e) {}
          let a = 0;
          const n = s.Utilities.getCurrentTime();
          let o,
            d,
            l = s.Utilities.getElementOffsetFromScreen(e),
            c = l.left,
            u = l.top;
          try {
            o = getComputedStyle(e);
          } catch (t) {
            o = e.style;
          }
          if (e.getBoundingClientRect) {
            let t = e.getBoundingClientRect();
            d = [c + t.width / 2, u + t.height / 2];
          } else d = [c + parseInt(o.width) / 2, u + parseInt(o.height) / 2];
          try {
            "none" === o.display && (a |= 4), i = t.document.body.querySelectorAll("*");
            let r = !1;
            for ([].forEach.call(i, function (t) {
              if (r && t !== e && !t.contains(e) && !e.contains(t)) try {
                let e = t.getBoundingClientRect(),
                  i = s.Utilities.getElementOffsetFromScreen(t);
                i.left + e.width >= d[0] && i.left <= d[0] && i.top <= d[1] && i.top + e.height >= d[1] && (a |= 1);
              } catch (e) {}
              t === e && (r = !0);
            }); e;) {
              try {
                o = getComputedStyle(e);
              } catch (t) {
                o = e.style;
              }
              o && "none" === o.display && (a |= 4), o && ("hidden" === o.visibility || "" !== o.opacity && o.opacity < .8) && (a |= 2);
              try {
                if (e.getBoundingClientRect) {
                  let t = e.getBoundingClientRect();
                  t.width * t.height < 100 && (a |= 8);
                }
              } catch (e) {}
              e = e.document && e == e.document.body ? e.window.frameElement ? e.window.frameElement : null : e.parentElement;
            }
          } catch (e) {
            a = -1;
          }
          return a < 0 ? a = -1e3 * (s.Utilities.getCurrentTime() - n) : a += 1e3 * (s.Utilities.getCurrentTime() - n), a;
        }
        getMetaTagAttributes(e, t) {
          let i = {};
          if (e) for (let r of s.Utilities.arrayLikeToArray(e.getElementsByTagName("meta"))) if (r.getAttribute("name") === t && r.getAttribute("content")) {
            r.getAttribute("content").split(",").forEach(e => {
              const t = e.split("=");
              t.length > 1 && (i[t[0].trim()] = t[1].trim());
            });
            break;
          }
          return i;
        }
      }
      t.BrowserAdaptorClass = p, t.BrowserAdaptor = r.WindowAdaptor.isDomlessEnvironment() ? new o.BrowserOmidAdaptorClass() : new p();
    },
    3946: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserDetector = t.BrowserDetectorClass = void 0;
      const r = i(712),
        a = i(3868),
        n = i(7749);
      class s {
        constructor() {
          this.browsersList = [{
            id: r.Browser.Selenium,
            browserDetectionRuleType: 2,
            propertiesRuleFunc: () => a.WindowAdaptor.workingDocumentElement().hasAttribute("webdriver") || a.WindowAdaptor.workingDocumentElement().hasAttribute("fxdriver") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__webdriver_unwrapped") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__webdriver_script_fn") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__webdriver_evaluate") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__fxdriver_evaluate") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__fxdriver_unwrapped") || a.WindowAdaptor.workingDocumentElement().hasAttribute("__fxdriver_script_fn") || this.workingWindow.webdriver || this.workingWindow.domAutomation || this.workingWindow.domAutomationController || this.workingWindow._WEBDRIVER_ELEM_CACHE
          }, {
            id: r.Browser.PhantomJS,
            browserDetectionRuleType: 2,
            propertiesRuleFunc: () => this.workingWindow._phantom || this.workingWindow.callPhantom || this.workingWindow.phantom || this.workingWindow.__nightmare
          }, {
            id: r.Browser.PuppeteerVanilla,
            browserDetectionRuleType: 2,
            propertiesRuleFunc: () => {
              var e;
              return null === (e = this.workingWindow.navigator) || void 0 === e ? void 0 : e.webdriver;
            }
          }, {
            id: r.Browser.PuppeteerExtraStealth,
            browserDetectionRuleType: 2,
            propertiesRuleFunc: () => this.getIsExtraStealthBrowser()
          }, {
            id: r.Browser.ChromeWebView,
            browserDetectionRuleType: 1,
            userAgentRegex: "(?:wv(.*?))version/[0-9]+(?:.[0-9]+)* chrome/[0-9]+(?:.[0-9]+)* mobile|version/[0-9]+(?:.[0-9]+)* chrome/[0-9]+(?:.[0-9]+)* mobile|(?:wv(.*?))version\\/[0-9]+(?:.[0-9]+)* chrome\\/[0-9]+(?:.[0-9]+)*",
            versionRegex: "chrome/"
          }, {
            id: r.Browser.SafariWebView,
            browserDetectionRuleType: 3,
            userAgentRegex: "(?=.*(iphone|ipod|ipad))(?=^(?:(?!safari).)*$).*$",
            propertiesRuleFunc: () => !this.workingWindow.navigator.standalone
          }, {
            id: r.Browser.IE,
            browserDetectionRuleType: 1,
            userAgentRegex: "msie|trident/7.*rv:11|rv:11.*trident/7|edge/|edg/",
            versionRegex: "(msie |rv:| edge/|edg/)"
          }, {
            id: r.Browser.Firefox,
            browserDetectionRuleType: 2,
            userAgentRegex: "firefox",
            versionRegex: "firefox/",
            propertiesRuleFunc: () => "number" == typeof this.workingWindow.mozInnerScreenY && "number" == typeof this.workingWindow.mozPaintCount && this.workingWindow.InstallTrigger && this.workingWindow.InstallTrigger.install
          }, {
            id: r.Browser.Opera,
            browserDetectionRuleType: 1,
            userAgentRegex: "opr|opera",
            versionRegex: "(opr/|version/)"
          }, {
            id: r.Browser.Chrome,
            browserDetectionRuleType: 2,
            userAgentRegex: "chrome",
            versionRegex: "chrome/",
            propertiesRuleFunc: () => this.workingWindow.chrome && "function" == typeof this.workingWindow.chrome.csi && "function" == typeof this.workingWindow.chrome.loadTimes && "boolean" == typeof this.workingDocument.webkitHidden
          }, {
            id: r.Browser.Chrome,
            browserDetectionRuleType: 1,
            userAgentRegex: "crios",
            versionRegex: "crios/"
          }, {
            id: r.Browser.Safari,
            browserDetectionRuleType: 2,
            userAgentRegex: "safari|(os |os x )[0-9].*applewebkit",
            versionRegex: "version/",
            propertiesRuleFunc: () => {
              let e = a.WindowAdaptor.workingDocument() && a.WindowAdaptor.workingDocument().createElement && a.WindowAdaptor.workingDocument().createElement("p");
              if (e) return e.innerText = ".", e.setAttribute("style", "color:red; border: 1px solid blue;"), (Object.prototype.toString.call(this.workingWindow.HTMLElement).indexOf("Constructor") > 0 || this.workingWindow.webkitAudioPannerNode && this.workingWindow.webkitConvertPointFromNodeToPage) && null != this.workingWindow.innerWidth && null != this.workingWindow.innerHeight && null != e.style.textShadow;
            }
          }, {
            id: r.Browser.Unknown,
            browserDetectionRuleType: 1,
            userAgentRegex: "mozilla.*android.*applewebkit(?!.*chrome.*)|linux.*android.*applewebkit.* version/.*chrome"
          }, {
            id: r.Browser.Unknown,
            browserDetectionRuleType: 1,
            userAgentRegex: "aol/.*aolbuild/|aolbuild/.*aol/|puffin|maxthon|valve|silk|playstation|playstation|nintendo|wosbrowser"
          }], a.WindowAdaptor.isDomlessEnvironment() || (this.workingWindow = a.WindowAdaptor.workingWindow(), this.workingDocument = a.WindowAdaptor.workingDocument(), this.currentUserAgent = ((null === n.DvTagDataObject || void 0 === n.DvTagDataObject ? void 0 : n.DvTagDataObject.getUserAgent()) || a.WindowAdaptor.getUserAgent() || "").toLowerCase(), this.browserData = this.determineBrowserType());
        }
        getBrowserId() {
          return this.browserData && this.browserData.browserId;
        }
        getBrowserVersion() {
          return this.browserData && this.browserData.browserVersion;
        }
        getBrowserIdUserAgent() {
          return this.browserData && this.browserData.browserIdUserAgent;
        }
        determineBrowserType() {
          let e, t, i;
          for (let i of this.browsersList) {
            switch (i.browserDetectionRuleType) {
              case 3:
                this.validateBrowserTypeByUserAgent(i) && this.validateBrowserTypeByPropertiesRule(i) && (e = t = i);
                break;
              case 1:
                this.validateBrowserTypeByUserAgent(i) && (e = t = i);
                break;
              case 2:
                !e && i.userAgentRegex && this.validateBrowserTypeByUserAgent(i) && (e = i), !t && this.validateBrowserTypeByPropertiesRule(i) && (t = i);
            }
            if (e && t) break;
          }
          return e == t && e && e.versionRegex && (i = this.determineBrowserVersion(e.versionRegex)), {
            browserId: t && t.id,
            browserVersion: i || "",
            browserIdUserAgent: e && e.id
          };
        }
        validateBrowserTypeByUserAgent(e) {
          return new RegExp(e.userAgentRegex).test(this.currentUserAgent);
        }
        validateBrowserTypeByPropertiesRule(e) {
          return e.propertiesRuleFunc();
        }
        getIsExtraStealthBrowser() {
          let e = !1;
          try {
            const t = this.workingDocument.createElement("video"),
              i = t && t.canPlayType,
              r = i ? t.canPlayType('video/mp4; codecs="avc1.42E01E"') : "",
              a = i ? t.canPlayType('video/mp4; codecs="avc3.42E01E"') : "",
              n = i && "" != r && "" != a,
              s = this.workingWindow.MediaSource,
              o = s && s.isTypeSupported && !1 === s.isTypeSupported('video/mp4; codecs="avc1.42E01E"');
            e = n && o;
          } catch (e) {} finally {
            return e;
          }
        }
        determineBrowserVersion(e) {
          const t = new RegExp(e + "[0-9]+(?:.[0-9]+)*"),
            i = this.currentUserAgent.match(t);
          if (i) return i[0].replace(this.currentUserAgent.match(new RegExp(e))[0], "");
        }
      }
      t.BrowserDetectorClass = s, t.BrowserDetector = new s();
    },
    2756: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserOmidAdaptorClass = void 0;
      const r = i(6689),
        a = i(3380),
        n = i(194);
      t.BrowserOmidAdaptorClass = class {
        updateVisibilityProperties() {}
        getDevicePixelRatio() {}
        getVisibilityPrefix() {
          return "";
        }
        isVisibilityChangeEventSupported() {
          return !1;
        }
        hasFocus() {
          return !0;
        }
        hasStrictFocus() {
          return !0;
        }
        addEventListener(e, t, i, a = !1) {
          r.OmidWrapper.addEventListener(e, t);
        }
        removeEventListener(e, t, i, r = !1) {}
        setTimeout(e, t) {
          return r.OmidWrapper.setTimeout(e, t);
        }
        clearTimeout(e) {
          r.OmidWrapper.clearTimeout(e);
        }
        setInterval(e, t) {
          return r.OmidWrapper.setInterval(e, t);
        }
        clearInterval(e) {
          r.OmidWrapper.clearInterval(e);
        }
        getPerformanceTimeNow() {
          return Date.now();
        }
        isBrowserSupported() {
          let e,
            t = [];
          return e = "function" == typeof t.filter && "function" == typeof t.forEach, e;
        }
        getAttribute(e, t) {}
        setElementStyle(e, t, i) {}
        getElementsByTagNameFromDocument(e, t) {
          return [];
        }
        querySelectorAll(e, t) {
          return [];
        }
        getElementsByClassName(e, t) {
          return [];
        }
        querySelector(e, t) {}
        createElement(e, t) {
          throw new Error("createElement failed");
        }
        getElementById(e, t) {}
        getElementsByTagNameFromDomElement(e, t) {
          return [];
        }
        getElementType(e) {}
        getBoundingClientRect(e) {
          return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
          };
        }
        getObjectSize(e) {
          return {
            width: 0,
            height: 0
          };
        }
        getSiblingsNodes(e) {
          return [];
        }
        getElementChildren(e) {
          return [];
        }
        getAvailableScreenSize(e = !0) {
          return {
            height: 0,
            width: 0
          };
        }
        getScreenSize() {
          return {
            height: 0,
            width: 0
          };
        }
        getInnerViewport(e = !0) {
          return {
            height: 0,
            width: 0
          };
        }
        getOuterViewport(e, t = !0) {
          return {
            height: 0,
            width: 0
          };
        }
        getViewportAssetsRelativeToScreen(e) {
          return {
            top: 0,
            left: 0
          };
        }
        getIframeAssetsRelativeToScreen(e) {
          return {
            top: 0,
            left: 0
          };
        }
        getScrollData(e) {
          return {
            left: 0,
            top: 0
          };
        }
        smartInstanceof(e, t, i) {
          return !1;
        }
        getNavigationStartTime() {}
        getElementSize(e) {
          return {
            width: 0,
            height: 0
          };
        }
        getElementStaticSize(e) {
          return {
            width: 0,
            height: 0
          };
        }
        sendBeacon(e, t, i) {
          r.OmidWrapper.sendUrl(a.Utilities.appendCacheBuster(e, n.DvObject.getCacheBusterName()));
        }
        insertBefore(e, t, i) {}
        addScriptAsync(e, t, i, a, n, s) {
          r.OmidWrapper.injectJavaScriptResource(e, s && s.bind(null), n && n.bind(null));
        }
        addScriptSync(e, t) {
          r.OmidWrapper.injectJavaScriptResource(e);
        }
        createIframe(e) {
          throw new Error("createIframe failed");
        }
        addIframeAfterBodyTag(e) {
          throw new Error("addIframeAfterBodyTag failed");
        }
        isElementAttachedToDocument(e) {
          return !0;
        }
        getParentNode(e) {}
        getOrientation() {}
        isAdElementHidden(e) {
          return 0;
        }
        getMetaTagAttributes(e, t) {
          return {};
        }
      };
    },
    7015: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Cm360AdContainerInspectorFactory = void 0;
      const r = i(7749),
        a = i(5670);
      class n extends a.AdContainerInspectorFactory {
        constructor(e) {
          super(n.getContainerId(e));
        }
        static getContainerId(e) {
          return e ? r.DvTagDataObject.getValueOfTagAttribute(e) : null;
        }
      }
      t.Cm360AdContainerInspectorFactory = n;
    },
    8379: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.omidCreativeTypeMapping = t.omidImpressionTypeMapping = t.NOT_FOUND_OR_ERROR = t.OmidGeometryReasonLog = t.OmidEvents = t.dvIframeAttribute = t.CallbackPrefix = t.ViewabilityConstants = void 0;
      const r = i(630);
      t.ViewabilityConstants || (t.ViewabilityConstants = {}), t.CallbackPrefix = "dvCallback_", t.dvIframeAttribute = "data-dv-frm", t.OmidEvents = {
        sessionStart: 1,
        sessionError: 2,
        sessionFinish: 4,
        impression: 8,
        geometryChange: 16,
        loaded: 32,
        start: 64,
        firstQuartile: 128,
        midpoint: 256,
        thirdQuartile: 512,
        complete: 1024,
        pause: 2048,
        resume: 4096,
        bufferStart: 8192,
        skipped: 16384,
        volumeChange: 32768,
        playerStateChange: 65536,
        adUserInteraction: 1 << 17
      }, t.OmidGeometryReasonLog = {
        notFound: 1,
        hidden: 2,
        backgrounded: 4,
        obstructed: 8,
        clipped: 16
      }, t.NOT_FOUND_OR_ERROR = -1, t.omidImpressionTypeMapping = {
        [r.OmidImpressionType.UNKNOWN]: 0,
        [r.OmidImpressionType.UNSPECIFIED]: 1,
        [r.OmidImpressionType.LOADED]: 2,
        [r.OmidImpressionType.BEGIN_TO_RENDER]: 3,
        [r.OmidImpressionType.ONE_PIXEL]: 4,
        [r.OmidImpressionType.VIEWABLE]: 5,
        [r.OmidImpressionType.AUDIBLE]: 6,
        [r.OmidImpressionType.OTHER]: 7
      }, t.omidCreativeTypeMapping = {
        [r.OmidCreativeType.UNKNOWN]: 0,
        [r.OmidCreativeType.NATIVE_DISPLAY]: 1,
        [r.OmidCreativeType.HTML_DISPLAY]: 2,
        [r.OmidCreativeType.VIDEO]: 3,
        [r.OmidCreativeType.AUDIO]: 4
      };
    },
    8962: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.dvDefineProperty = t.getTagUniqueKeyFromVisitScriptElement = void 0;
      const r = i(194),
        a = i(3868),
        n = i(7749);
      function s() {
        let e = "";
        if (!a.WindowAdaptor.isDomlessEnvironment()) {
          const t = a.WindowAdaptor.getCurrentScript();
          t && t.id && t.src && t.src.indexOf(n.DvTagDataObject.getInitPath()) > -1 && ([, e] = t.id.split("_"));
        }
        return e;
      }
      function o(e, t) {
        e.dvDefinedProps || (e.dvDefinedProps = {}), e.dvDefinedProps[t] || (e.dvDefinedProps[t] = !0, Object.defineProperty(e, t, {
          set(e) {
            this.value = e;
          },
          get() {
            let e = s();
            if (e) {
              const i = r.DvObject.getDvObject().tagData[e];
              return i && i[t];
            }
          }
        }));
      }
      if (t.getTagUniqueKeyFromVisitScriptElement = s, t.dvDefineProperty = o, r.DvObject.isRestrictedAccess() && a.WindowAdaptor.getCurrentScript()) {
        const e = a.WindowAdaptor.currentWindow();
        ["$frmId", "$uid"].forEach(t => o(e, t));
      }
    },
    194: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DvObject = t.DvObjectClass = void 0;
      const r = i(6875);
      class a {
        setDvGetOmidVerificationClient(e) {
          this.dvGetOmidVerificationClient = e;
        }
        getDvGetOmidVerificationClient() {
          return this.dvGetOmidVerificationClient;
        }
        getDvObject() {
          if ("undefined" != typeof $dv) return $dv;
          const e = r.getCurrentWindow();
          if (e && e.$dv) return e.$dv;
          const t = r.getWorkingWindow();
          return t && t.$dv ? t.$dv : {};
        }
        getTagUniqueKey() {
          return r.getTagUniqueKey();
        }
        getTagCounter() {
          return this.getDvObject().tagsCounter;
        }
        getSharedUniqueKey() {
          return this.getDvObject().sharedUniqueKey;
        }
        getTagScriptElem() {
          return this.getTagData().tagScriptElem;
        }
        isES6Supported() {
          return !!this.getTagData().isES6Supported;
        }
        hasTagData() {
          return !!this.getDvObject().tagData;
        }
        getTagData() {
          const e = this.getDvObject(),
            t = this.getTagUniqueKey(),
            i = e.tagData[t];
          if (!i) throw new Error(`tagData not found for tuk = ${t}`);
          return i;
        }
        getTagParams() {
          return this.getTagData().tagParams;
        }
        getDvtpScriptVersion() {
          return this.getTagData().dvtpScriptVersion;
        }
        isRestrictedAccess() {
          return !!this.getDvObject().restrictedAccess;
        }
        isInjectedAsSibling() {
          return this.hasTagData() && !!this.getTagData().injectedAsSibling;
        }
        isOmidForWeb() {
          return !!this.getTagData().isOmidForWeb;
        }
        getOmidWebHopCounter() {
          return this.getTagData().omidWebHopCounter;
        }
        isOmid3p() {
          return !!this.getTagData().isOmid3p;
        }
        getOmid3pHopCounter() {
          return this.getTagData().omid3pHopCounter;
        }
        getDvtpScriptUrl() {
          return this.getTagData().dvtpScriptUrl || "";
        }
        getTagLoadedMS() {
          return this.getTagData().tagLoadedMS || 0;
        }
        getTagReadyState() {
          return this.getTagData().tagReadyState || "loading";
        }
        getVisitReadyState() {
          return this.getTagData().visitReadyState || "loading";
        }
        setVisitReadyState(e = "loading") {
          this.getTagData().visitReadyState = e;
        }
        getVisitInjectedMS() {
          return this.getTagData().visitInjectedMS || 0;
        }
        setVisitInjectedMS(e = 0) {
          this.getTagData().visitInjectedMS = e;
        }
        getVerifyInjectedMS() {
          return this.getTagData().verifyInjectedMS || 0;
        }
        setVerifyInjectedMS(e = 0) {
          this.getTagData().verifyInjectedMS = e;
        }
        getTagExecTimeMs() {
          return this.getTagData().tagExecTimeMs || 0;
        }
        setImpressionIdOnTagData(e) {
          this.getTagData().$uid = e;
        }
        setImpressionId(e) {
          this.impressionId = e, this.setImpressionIdOnTagData(e);
        }
        getImpressionIdFromTagData() {
          return this.getTagData().$uid;
        }
        getImpressionId(e) {
          if (this.isRestrictedAccess()) {
            const e = this.getImpressionIdFromTagData();
            if (e) return e;
          }
          return e && e.$uid ? e.$uid : "undefined" != typeof $uid ? $uid : void 0;
        }
        getFrameIdFromTagData() {
          return this.getTagData().$frmId;
        }
        getFrameId(e) {
          if (this.isRestrictedAccess()) {
            const e = this.getFrameIdFromTagData();
            if (e) return e;
          }
          return e && e.$frmId ? e.$frmId : "undefined" != typeof $frmId ? $frmId : void 0;
        }
        getScriptUrl() {
          return this.getTagData().dvtpScriptUrl;
        }
        getProtocol() {
          return 0 === (this.getScriptUrl() || "").indexOf("http:") ? "http:" : "https:";
        }
        getJSVersion() {
          return this.getTagData().dvtpScriptVersion;
        }
        publishPubSubEvent(e, t = this.impressionId, i = {}) {
          this.getDvObject() && this.getDvObject().pubSub && e && t && this.getDvObject().pubSub.publish(e, t, i);
        }
        getDisplayCustomViewabilityConditions() {
          const e = this.getDvObject().tags[this.impressionId].cvmSettings;
          if (null != e && null != e.adArea && null != e.duration && null != e.measureType) return {
            minimalAdAreaPercentage: e.adArea,
            minimalAdDuration: e.duration,
            consecutiveMode: "consecutive" == e.measureType.toLowerCase()
          };
        }
        getDisplayCustomStandardViewabilityConditions() {
          const e = this.getDvObject().tags[this.impressionId].csd;
          if (null != e && null != e.adView && null != e.adDurationCap && null != e.isConsecutive && null != e.adSize) return {
            minimalAdAreaPercentage: e.adView,
            minimalAdDuration: e.adDurationCap,
            consecutiveMode: e.isConsecutive,
            minimalAdSize: e.adSize
          };
        }
        getVideoCustomViewabilityConditions() {
          const e = this.getDvObject().tags[this.impressionId].videoCustom;
          if (null != e && null != e.adView && null != e.adDurationCap && null != e.isConsecutive && null != e.hasVolume) return {
            minimalAdAreaPercentage: e.adView,
            minimalAdDuration: e.adDurationCap,
            consecutiveMode: e.isConsecutive,
            requireVolume: e.hasVolume
          };
        }
        getVideoCustomStandardViewabilityConditions() {
          const e = this.getDvObject().tags[this.impressionId].csv;
          if (null != e && null != e.adView && null != e.adDurationCap && null != e.isConsecutive && null != e.hasVolume && null != e.playerSize) return {
            minimalAdAreaPercentage: e.adView,
            minimalAdDuration: e.adDurationCap,
            minimalAdDurationPercent: e.adDurationPercent,
            minimalAdSize: e.playerSize,
            consecutiveMode: e.isConsecutive,
            requireVolume: e.hasVolume
          };
        }
        getCustomAdvertiserViewabilitySettings() {
          const e = this.getDvObject();
          let t, i;
          if (!(e && e.tags && this.impressionId && (t = $dv.tags[this.impressionId]) && (i = t.cavs) && null != i.standardType)) return;
          const {
            regularAd: r,
            largeAd: a,
            standardType: n
          } = i;
          return {
            standardType: n,
            conditions: {
              regularAd: r,
              largeAd: a
            }
          };
        }
        getKMEVideoViewabilityConditions() {
          const e = this.getDvObject().tags[this.impressionId].videoBrandVisibilty;
          if (null != e && null != e.adView && null != e.adStart && null != e.adEnd && null != e.hasVolume) return {
            minimalAdAreaPercentage: e.adView,
            timeLineLeftBoundary: e.adStart,
            timeLineRightBoundary: e.adEnd,
            requireVolume: e.hasVolume
          };
        }
        getAllowJsCallback() {
          return this.getAvoParam("ajscb");
        }
        getIsOffScreen() {
          return this.getAvoParam("ofs");
        }
        getConsolidationTimeout() {
          let e = this.getAvoParam("cto");
          if (e && !isNaN(e)) return e;
        }
        getIsReducedAdLocatorLatency() {
          let e = this.getAvoParam("int");
          if (e && !isNaN(e)) return e;
        }
        isMobileWeb() {
          return 2 == this.getDetectedDeliveryType();
        }
        isMobileApp() {
          return 3 == this.getDetectedDeliveryType();
        }
        isCTV() {
          return 4 == this.getDetectedDeliveryType();
        }
        isMobile() {
          return this.isMobileWeb() || this.isMobileApp();
        }
        getDetectedDeliveryType() {
          try {
            if (this.detectedDeliveryType || !this.impressionId) return this.detectedDeliveryType;
            const e = this.getDvObject().tags[this.impressionId].detectedDeliveryType;
            return null != e ? (this.detectedDeliveryType = e, this.detectedDeliveryType) : (this.detectedDeliveryType = this.getDvObject().CommonData.detectedDeliveryType, this.detectedDeliveryType);
          } catch (e) {}
        }
        isSpotxMode() {
          let e = !1;
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && (e = !!this.getDvObject().tags[this.impressionId].spotXmode), e;
        }
        getCacheBusterName() {
          let e = "cbust";
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && this.getDvObject().tags[this.impressionId].cbust && (e = this.getDvObject().tags[this.impressionId].cbust), e;
        }
        getAllowRBViewability() {
          let e = !1;
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && (e = this.getDvObject().tags[this.impressionId].allowRB), e;
        }
        getFireOnlyImportantEvents() {
          let e = !1;
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && (e = this.getDvObject().tags[this.impressionId].foie), e;
        }
        isSIVTImpression() {
          let e = !1;
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && (e = !!this.getDvObject().tags[this.impressionId].bgm), e;
        }
        isGroupMV4VideoNativeImpression() {
          let e = !1;
          return this.getDvObject() && this.getDvObject().tags && this.impressionId && (e = !!this.getDvObject().tags[this.impressionId].gmv4ntv), e;
        }
        isFocusStrictMode() {
          return this.getAvoParam("fcs");
        }
        getDoubleTagImpressionID() {
          let e = this.getAdTagData();
          if (e && e.dup && "null" != e.dup) return e.dup;
        }
        getAvoParam(e) {
          let t,
            i = this.getAdTagData();
          return i && i.AVO && (t = i.AVO[e]), t;
        }
        getAdTagData() {
          let e,
            t = this.impressionId;
          return this.getDvObject().tags && this.getDvObject().tags[t] && (e = this.getDvObject().tags[t]), e;
        }
      }
      t.DvObjectClass = a, t.DvObject = new a();
    },
    7749: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DvTagDataObject = t.DvTagDataObjectClass = void 0;
      const r = i(3868),
        a = i(712),
        n = i(749),
        s = i(3380),
        o = i(6689),
        d = i(425),
        l = i(194),
        c = i(7658),
        u = i(8170),
        {
          getQueryParamName: p
        } = u.DiagnosticParamsSingleton;
      class h {
        constructor() {
          this.paramsCaseInsensitive = {}, this.paramsCaseSensitive = {}, this.serverPrefix = "https://tps.doubleverify.com/", this.initPath = "visit.js", this.errorPath = "visit.jpg", this.eventPath = "event.png", this.blockingServerPrefix = void 0, this.blockingInitPath = void 0, this.blockingErrorPath = void 0, this.blockingEventPath = void 0, this.DIAGNOSTIC_PARAM_CTX = p("ctx"), this.DIAGNOSTIC_PARAM_CMP = p("cmp"), this.DIAGNOSTIC_PARAM_ADSRV = p("adsrv"), this.DIAGNOSTIC_PARAM_PLC = p("plc"), this.DIAGNOSTIC_PARAM_SID = p("sid"), this.DIAGNOSTIC_PARAM_DUP = p("dup"), this.CTX = "ctx", this.CMP = "cmp", this.ADSRV = "adsrv", this.SID = "sid", this.PLC = "plc", this.DUP = "dup";
        }
        start() {
          this.setDvScript(), this.setDvScriptUrl(), this.dvtpScriptUrl || n.MessageHandler.sendError(a.ClientErrorType.DvTagArrangementError, new Error("url is missing")), this.setDVParam(), this.setCustomURLs();
        }
        getScriptElementExtractionMethod() {
          return this.scriptElementExtractionMethod;
        }
        getParamUrlExtractionMethod() {
          return this.paramUrlExtractionMethod;
        }
        getDVScriptUrl() {
          return this.dvtpScriptUrl;
        }
        getDVScript() {
          return this.scriptElement;
        }
        getCaseSensitiveParams() {
          return this.paramsCaseSensitive;
        }
        getLowerCaseParams() {
          return this.paramsCaseInsensitive;
        }
        getParamValue(e) {
          return this.paramsCaseInsensitive[e] ? this.paramsCaseInsensitive[e] : null;
        }
        getTagType() {
          return !this.paramsCaseInsensitive.tagtype || "video" != this.paramsCaseInsensitive.tagtype.toLowerCase() && "1" != this.paramsCaseInsensitive.tagtype ? a.DvTagType.Display : a.DvTagType.Video;
        }
        getTagFormat() {
          return this.paramsCaseInsensitive.tagformat;
        }
        isTagTypeValid() {
          return !this.paramsCaseInsensitive.tagtype || -1 != ["display", "0", "video", "1"].indexOf(this.paramsCaseInsensitive.tagtype.toLowerCase());
        }
        getClientCode() {
          return this.paramsCaseInsensitive[this.CTX];
        }
        getPlacementId() {
          return this.paramsCaseInsensitive[this.PLC];
        }
        getAdServerSiteCode() {
          return this.paramsCaseInsensitive[this.SID];
        }
        getDvApi() {
          return this.paramsCaseInsensitive.dvapi;
        }
        getAdServerCampaignCode() {
          return this.paramsCaseInsensitive[this.CMP];
        }
        getBlockingPartnerCallbackName() {
          return this.paramsCaseInsensitive.dvp_dcb;
        }
        getGDPR() {
          return this.paramsCaseInsensitive.gdpr;
        }
        getGDPRConsent() {
          return this.paramsCaseInsensitive.gdpr_consent;
        }
        getGDPRAndGDPRConsentQueryStringPart() {
          const e = this.getGDPR(),
            t = this.getGDPRConsent();
          return [[c.TPSDataMapping.gdpr, e], [c.TPSDataMapping.gdpr_consent, t]].map(([e, t]) => `${e}=${encodeURIComponent(t || "")}`).join("&") + "&";
        }
        getClientData() {
          return {
            ctx: this.getClientCode() || 818052,
            cmp: this.getAdServerCampaignCode() || 1619415,
            sid: this.getAdServerSiteCode() || 0,
            plc: this.getPlacementId() || 0
          };
        }
        getAdID() {
          return this.paramsCaseInsensitive.dvp_gvacb || this.paramsCaseInsensitive.adid;
        }
        getBtreg() {
          return this.paramsCaseInsensitive.btreg;
        }
        getUserAgent() {
          return this.paramsCaseInsensitive.useragent;
        }
        getFindClass() {
          return "1" == this.paramsCaseInsensitive.findclass;
        }
        getAdLocatingSeparatedTasks() {
          return this.paramsCaseInsensitive.adlst;
        }
        getIsBlocking() {
          return "0" !== this.paramsCaseInsensitive.blk;
        }
        getIsMonitoring() {
          return "0" !== this.paramsCaseInsensitive.mon;
        }
        getVideoBlockingCallbackUrl() {
          return this.paramsCaseInsensitive.blkntf;
        }
        getCm360ContainerId() {
          return this.getValueOfTagAttribute("data-doubleverify-container");
        }
        getCm360BlockingCallbackFnName() {
          return this.getValueOfTagAttribute("data-doubleverify-callback");
        }
        getIsCm360CreativeWrapping() {
          return this.isCm360ParamExtractionEnabled();
        }
        getMeasurementApi() {
          return this.paramsCaseInsensitive.msrapi;
        }
        getAdServerId() {
          return this.paramsCaseInsensitive[this.ADSRV];
        }
        getBtregOptimizationExperiment() {
          return this.paramsCaseInsensitive.btroe;
        }
        getBtadsrv() {
          return this.paramsCaseInsensitive.btadsrv;
        }
        getCustomTags() {
          return this.getArrayedParams("bttag", "|");
        }
        getCustomAttributes() {
          return this.getArrayedParams("btattb", "|");
        }
        isSellerTag() {
          return 1 == this.paramsCaseInsensitive.seltag;
        }
        useSellerTagMultipleAdLocatorSets() {
          return this.paramsCaseInsensitive.seltagmals;
        }
        getAsyncSplitInitMeasurement() {
          return this.paramsCaseInsensitive.asim;
        }
        getSupplySource() {
          return this.paramsCaseInsensitive.sup;
        }
        getVastUrl() {
          return this.paramsCaseInsensitive.wrapperurl;
        }
        getSellerAdSize() {
          let e = {
              width: 0,
              height: 0
            },
            t = this.paramsCaseInsensitive.unit;
          if (t) {
            let i = t.toLowerCase().split("x");
            if (i[0] && i[1]) try {
              let t = parseInt(i[0]),
                r = parseInt(i[1]);
              isNaN(t) || isNaN(r) || (e.width = t, e.height = r);
            } catch (e) {}
          }
          return e;
        }
        isCm360ParamExtractionEnabled() {
          return null !== this.getValueOfTagAttribute("data-doubleverify-parameters");
        }
        extractParamString() {
          if (this.isCm360ParamExtractionEnabled() && this.getValueOfTagAttribute("data-doubleverify-parameters")) return this.getValueOfTagAttribute("data-doubleverify-parameters");
          const e = this.getDVScriptUrl(),
            t = new RegExp("[\\?\\#&](.*)$", "gi").exec(e);
          return t && void 0 !== t[1] ? t[1] : "";
        }
        saveExtractedParams(e) {
          for (const t in e) {
            const i = t.toLowerCase(),
              r = e[t];
            this.paramsCaseInsensitive[i] = s.Utilities.isNullOrEmpty(this.paramsCaseInsensitive[i]) ? r : this.paramsCaseInsensitive[i], this.paramsCaseSensitive[t] = s.Utilities.isNullOrEmpty(this.paramsCaseSensitive[t]) ? r : this.paramsCaseSensitive[t];
          }
        }
        setDVParam() {
          try {
            const e = this.extractParamString(),
              t = this.extractParamsToObjFromStr(e);
            this.saveExtractedParams(t);
          } catch (e) {
            n.MessageHandler.sendError(a.ClientErrorType.DvTagArrangementError, e);
          }
        }
        setCustomURLs() {}
        getArrayedParams(e, t) {
          const i = this.paramsCaseInsensitive[e];
          return (null == i ? void 0 : i.length) ? i.split(t) : [];
        }
        getBlockingInitPath() {
          return this.blockingInitPath;
        }
        getBlockingErrorPath() {
          return this.blockingErrorPath;
        }
        getBlockingEventPath() {
          return this.blockingEventPath;
        }
        getBlockingServerPrefix() {
          return this.blockingServerPrefix;
        }
        getServerPrefix() {
          return this.serverPrefix;
        }
        setBlockingServerPrefix(e) {
          this.blockingServerPrefix = e;
        }
        setServerPrefix(e) {
          this.serverPrefix = e;
        }
        getInitPath() {
          return this.initPath;
        }
        getErrorPath() {
          return this.errorPath;
        }
        getEventPath() {
          return this.eventPath;
        }
        getValueOfTagAttribute(e) {
          return d.BrowserAdaptor.getAttribute(this.scriptElement, e);
        }
        resolveEventUrlPrefix(e) {
          var t;
          const i = "blocking" === (null === (t = l.DvObject.getDvObject().tags[e]) || void 0 === t ? void 0 : t.type);
          return `${i ? this.getBlockingServerPrefix() : this.getServerPrefix()}${i ? this.getBlockingEventPath() : this.getEventPath()}`;
        }
        setDvScriptUrl() {
          var e;
          try {
            const t = r.WindowAdaptor.currentWindow().dvSrc ? "dvtp_src_omid" : "dvtp_src";
            if (o.OmidWrapper.isSupported() && o.OmidWrapper.getVerificationParameters()) return this.setOmidScript(t), void (this.paramUrlExtractionMethod = 1);
            const i = l.DvObject.getDvtpScriptUrl();
            if (i) return this.dvtpScriptUrl = i, void (this.paramUrlExtractionMethod = 2);
            (null === (e = this.scriptElement) || void 0 === e ? void 0 : e.src) && (this.dvtpScriptUrl = this.scriptElement.src, this.paramUrlExtractionMethod = 3);
          } catch (e) {
            this.paramUrlExtractionMethod = 4;
          }
        }
        setDvScript() {
          try {
            if (o.OmidWrapper.isSupported() && o.OmidWrapper.getVerificationParameters()) return this.scriptElementExtractionMethod = h.ScriptElementExtractionMethodState.Omid, void (this.scriptElement = {});
            let e = l.DvObject.getTagScriptElem();
            if (this.scriptElementExtractionMethod = h.ScriptElementExtractionMethodState.ExtractFromTagData, !e) {
              const t = `https://cdn.doubleverify.com/${r.WindowAdaptor.currentWindow().dvSrc ? "dvtp_src_omid" : "dvtp_src"}.js?`,
                i = d.BrowserAdaptor.getElementsByTagNameFromDocument("script").filter(e => 0 === e.src.indexOf(t)).filter(e => 1 != e.dvvisit);
              if (!i.length) return this.scriptElementExtractionMethod = h.ScriptElementExtractionMethodState.NotFound, void n.MessageHandler.sendError(a.ClientErrorType.UnexpectedLostImpError, new Error("scriptElement did not find"));
              e = i[0], this.scriptElementExtractionMethod = h.ScriptElementExtractionMethodState.FoundInDom;
            }
            this.scriptElement = e, this.scriptElement.dvvisit = 1;
          } catch (e) {
            e.message = `missing element ${e.message}`, n.MessageHandler.sendError(a.ClientErrorType.DvTagArrangementError, e);
          }
        }
        handleOmidForWebVerificationParams() {
          let e = o.OmidWrapper.getVerificationParameters(),
            t = this.extractParamsToObjFromStr(e);
          return t = this.manipulateOmidForWebParams(t), e = s.Utilities.serializeObjectToQueryString(t, !0), e;
        }
        extractParamsToObjFromStr(e) {
          const t = {},
            i = new RegExp("([^&#?]*)=([^&#?]*)", "gi");
          let r = i.exec(e);
          for (; null != r;) {
            if (!s.Utilities.isNullOrEmpty(r[1]) && !s.Utilities.isNullOrEmpty(r[2])) {
              const e = r[1].trim(),
                i = r[2].trim();
              e && i && (t[e] = i);
            }
            r = i.exec(e);
          }
          return t;
        }
        manipulateOmidForWebParams(e) {
          const t = {};
          Object.keys(e).forEach(i => {
            t[i.toLowerCase()] = e[i];
          });
          const {
            ctx: i,
            cmp: r,
            plc: a,
            adsrv: n,
            sid: s
          } = t;
          return t[this.DIAGNOSTIC_PARAM_CTX] = i, t[this.DIAGNOSTIC_PARAM_CMP] = r, t[this.DIAGNOSTIC_PARAM_PLC] = a, t[this.DIAGNOSTIC_PARAM_ADSRV] = n, t[this.DIAGNOSTIC_PARAM_SID] = s, t[this.CTX] = "818052", t[this.CMP] = "DV517581", t[this.PLC] = "20210517001", t[this.ADSRV] = "0", t[this.SID] = "OMIDWeb", t.hasOwnProperty(this.DUP) && (t[this.DIAGNOSTIC_PARAM_DUP] = t[this.DUP], delete t[this.DUP]), t;
        }
        isParamManipulationRequired() {
          const e = "web" === o.OmidWrapper.getOmidScenarioType(),
            t = l.DvObject.isOmid3p();
          return e && t;
        }
        setOmidScript(e) {
          const t = this.isParamManipulationRequired() ? this.handleOmidForWebVerificationParams() : o.OmidWrapper.getVerificationParameters();
          this.dvtpScriptUrl = `https://cdn.doubleverify.com/${e}.js#${t}`, this.scriptElement.src = this.dvtpScriptUrl;
        }
      }
      t.DvTagDataObjectClass = h, h.ScriptElementExtractionMethodState = {
        Omid: 1,
        ExtractFromTagData: 2,
        FoundInDom: 3,
        NotFound: 4
      }, t.DvTagDataObject = new h();
    },
    5903: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Encoding = t.EncodingClass = void 0;
      class i {
        ROT47(e) {
          let t;
          return t = this.ROTn(e, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"), t;
        }
        sha1hash(e) {
          if (!e) return "";
          const t = [1518500249, 1859775393, 2400959708, 3395469782],
            i = (e += String.fromCharCode(128)).length / 4 + 2,
            r = Math.ceil(i / 16),
            a = new Array(r),
            n = new Array(80);
          let s,
            o,
            d,
            l,
            c,
            u = 1732584193,
            p = 4023233417,
            h = 2562383102,
            g = 271733878,
            m = 3285377520;
          for (let t = 0; t < r; t++) {
            a[t] = new Array(16);
            for (let i = 0; i < 16; i++) a[t][i] = e.charCodeAt(64 * t + 4 * i) << 24 | e.charCodeAt(64 * t + 4 * i + 1) << 16 | e.charCodeAt(64 * t + 4 * i + 2) << 8 | e.charCodeAt(64 * t + 4 * i + 3);
          }
          a[r - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[r - 1][14] = Math.floor(a[r - 1][14]), a[r - 1][15] = 8 * (e.length - 1) & 4294967295;
          for (let e = 0; e < r; e++) {
            for (let t = 0; t < 16; t++) n[t] = a[e][t];
            for (let e = 16; e < 80; e++) n[e] = this.ROTL(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
            s = u, o = p, d = h, l = g, c = m;
            for (let e = 0; e < 80; e++) {
              const i = Math.floor(e / 20),
                r = this.ROTL(s, 5) + this.f(i, o, d, l) + c + t[i] + n[e] & 4294967295;
              c = l, l = d, d = this.ROTL(o, 30), o = s, s = r;
            }
            u = u + s & 4294967295, p = p + o & 4294967295, h = h + d & 4294967295, g = g + l & 4294967295, m = m + c & 4294967295;
          }
          return this.toHexStr(u) + this.toHexStr(p) + this.toHexStr(h) + this.toHexStr(g) + this.toHexStr(m);
        }
        f(e, t, i, r) {
          switch (e) {
            case 0:
              return t & i ^ ~t & r;
            case 1:
            case 3:
              return t ^ i ^ r;
            case 2:
              return t & i ^ t & r ^ i & r;
          }
        }
        ROTn(e, t) {
          let i,
            r,
            a,
            n = String(),
            s = t.length;
          for (i = 0; i < e.length; i++) a = e.charAt(i), r = t.indexOf(a), r >= 0 && (a = t.charAt((r + s / 2) % s)), n += a;
          return n;
        }
        ROTL(e, t) {
          return e << t | e >>> 32 - t;
        }
        toHexStr(e) {
          let t,
            i = "";
          for (let r = 7; r >= 0; r--) t = e >>> 4 * r & 15, i += t.toString(16);
          return i;
        }
      }
      t.EncodingClass = i, t.Encoding = new i();
    },
    712: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ClientErrorType = t.StandardSizeType = t.DvTagType = t.Browser = t.ViewabilityCalculationType = t.LocatorMethods = void 0;
      class i {}
      t.LocatorMethods = i, i.DisplayIntegratedCeltra = 1, i.DisplayDFA = 2, i.DisplayFindClass = 4, i.DefaultInApp = 8, i.DisplayMediaPlex = 16, i.DisplayParentWindow = 32, i.DisplayRegex = 64, i.DisplayNearestAd = 128, i.DisplayIframeFallback = 256, i.DisplaySpotX = 512, i.VideoInAppHtml5 = 1024, i.VideoNonInAppVpaid = 2048, i.VideoInAppVpaid = 4096, i.DisplaySellerTag = 8192, i.DisplayOmid = 16384, i.VideoInAppInmobi = 32768, i.DisplayNonIntegratedCeltra = 65536, i.CustomDisplayMediaPlex = 1 << 17, i.CustomDisplayRegex = 1 << 18, i.CustomDisplaySellerTag = 1 << 19, i.DisplayCm360 = 1 << 20;
      class r {}
      t.ViewabilityCalculationType = r, r.Geometric = 1, r.ResourceBased = 2, r.SafeFrameGeometric = 8, r.SafeFramePercentage = 16, r.AmpIntersectionObserver = 32, r.ScreenGeometric = 64, r.Mraid = 128, r.IntersectionObserver = 512, r.Omid = 1024, r.AdColonyMraid = 2048, r.Mraid3 = 4096, function (e) {
        e[e.IE = 1] = "IE", e[e.Firefox = 2] = "Firefox", e[e.Chrome = 3] = "Chrome", e[e.Opera = 4] = "Opera", e[e.Safari = 5] = "Safari", e[e.ChromeWebView = 6] = "ChromeWebView", e[e.SafariWebView = 7] = "SafariWebView", e[e.PuppeteerExtraStealth = 96] = "PuppeteerExtraStealth", e[e.PuppeteerVanilla = 97] = "PuppeteerVanilla", e[e.Selenium = 98] = "Selenium", e[e.PhantomJS = 99] = "PhantomJS", e[e.Unknown = 0] = "Unknown";
      }(t.Browser || (t.Browser = {}));
      class a {}
      t.DvTagType = a, a.Display = 0, a.Video = 1;
      class n extends a {}
      t.StandardSizeType = n, n.SpotX = 2;
      class s {}
      t.ClientErrorType = s, s.InjectTagError = {
        id: 1,
        message: "InjectTagError",
        isLostImpression: !0
      }, s.LoadTagError = {
        id: 2,
        message: "LoadTagError",
        isLostImpression: !0
      }, s.UnexpectedLostImpError = {
        id: 4,
        message: "UnexpectedLostImpError",
        isLostImpression: !0
      }, s.OmidSessionError = {
        id: 8,
        message: "OmidSessionError",
        isLostImpression: !0
      }, s.OmidUnexpectedLostImpError = {
        id: 16,
        message: "OmidUnexpectedLostImpError",
        isLostImpression: !0
      }, s.OmidLoadTagError = {
        id: 32,
        message: "OmidLoadTagError",
        isLostImpression: !0
      }, s.OmidInjectTagError = {
        id: 64,
        message: "OmidInjectTagError",
        isLostImpression: !0
      }, s.UnexpectedError = {
        id: 128,
        message: "UnexpectedError",
        isLostImpression: !1
      }, s.OmidUnexpectedError = {
        id: 256,
        message: "OmidUnexpectedError",
        isLostImpression: !1
      }, s.VisitLogicError = {
        id: 1024,
        message: "VisitLogicError",
        isLostImpression: !0
      }, s.VisitResponseError = {
        id: 2048,
        message: "VisitResponseError",
        isLostImpression: !0
      }, s.VisitRequestError = {
        id: 4096,
        message: "VisitRequestError",
        isLostImpression: !0
      }, s.DomlessEnvError = {
        id: 8192,
        message: "DomlessEnvError",
        isLostImpression: !0
      }, s.InvalidVisitResponseError = {
        id: 32768,
        message: "InvalidVisitResponseError",
        isLostImpression: !0
      }, s.FailedToSendEvent = {
        id: 1 << 19,
        message: "FailedToSendEvent",
        isLostImpression: !1
      }, s.DvTagArrangementError = {
        id: 1 << 20,
        message: "DvTagArrangementError",
        isLostImpression: !1
      }, s.AdLocationError = {
        id: 1 << 21,
        message: "AdLocationError",
        isLostImpression: !1
      }, s.MeasurementError = {
        id: 1 << 22,
        message: "MeasurementError",
        isLostImpression: !1
      }, s.TPSDataCollectorError = {
        id: 1 << 23,
        message: "TPSDataCollectorError",
        isLostImpression: !1
      }, s.PostMeasuredGlobalMainError = {
        id: 1 << 24,
        message: "PostMeasuredGlobalMainError",
        isLostImpression: !1
      }, s.TagCommunicationError = {
        id: 1 << 25,
        message: "TagCommunicationError",
        isLostImpression: !1
      }, s.PreMeasuredGlobalMainError = {
        id: 1 << 26,
        message: "PreMeasuredGlobalMainError",
        isLostImpression: !0
      }, s.OmidNoSessionStart = {
        id: 1 << 27,
        message: "OmidNoSessionStart",
        isLostImpression: !0
      }, s.FailObserverLongTasks = {
        id: 1 << 28,
        message: "FailObserveLongTasks",
        isLostImpression: !1
      }, s.OmidInvalidInjection = {
        id: 1 << 29,
        message: "OmidInvalidInjection",
        isLostImpression: !0
      }, s.TagServiceError = {
        id: 1 << 30,
        message: "TagServiceError",
        isLostImpression: !1
      }, s.TagExtensionExecutionError = {
        id: 1 << 31,
        message: "TagExtensionError",
        isLostImpression: !1
      };
    },
    7360: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EventBusGlobal = t.EventBus = t.EventBusClass = t.DvEvent = void 0;
      const r = i(3868),
        a = i(749),
        n = i(194),
        s = i(712);
      class o {}
      t.DvEvent = o, o.impressionServed = "ImpressionServed", o.adSelected = "0", o.adDestroy = "1", o.adCandidateApproved = "2", o.bestAdCandidateChanged = "3", o.reportData = "5", o.viewabilityIntervalData = "6", o.boundariesViewabilityIntervalData = "7", o.exposureData = "8", o.adCandidateLocated = "10", o.omidClickData = "11", o.focusData = "12", o.strictFocusData = "13", o.abandonData = "14", o.unloadData = "15", o.adSizeData = "16", o.firstClickOnAdElementData = "17", o.firstHoverData = "18", o.pauseData = "19", o.resumeData = "20", o.skipData = "21", o.firstTouchData = "22", o.volumeData = "23", o.stopData = "24", o.firstFocusIntoAdElementData = "25", o.adImpressionData = "26", o.adVideoMidpointData = "27", o.adVideoStartData = "28", o.adVideoFirstQuartileData = "29", o.adVideoThirdQuartileData = "30", o.adVideoCompleteData = "31", o.delayAdSelection = "32", o.rtsEventData = "33", o.omidAdSizeData = "34", o.videoLoadedData = "35", o.videoStartPlaying = "36", o.mraidDefaultStateData = "37", o.htmlRenderedData = "38", o.adRenderedData = "39", o.globalUnloadData = "40", o.reserveAdLocator = "41", o.globalKeyPressData = "42", o.globalMouseMoveData = "43", o.globalScrollData = "44", o.globalOrientationChangeData = "45", o.keyPressData = "46", o.mouseMoveData = "47", o.scrollData = "48", o.orientationChangePortraitData = "49", o.orientationchangeLandscapeData = "50", o.skippableData = "51", o.adSizeChangedData = "52", o.pageHideEventPersisted = "53", o.pageHideEventNonPersisted = "54", o.performanceData = "55", o.performanceLongTasks = "56", o.performanceTaskTiming = "57";
      class d {
        constructor() {
          this.renderedImpressions = {}, this.markRenderedImpressions = {}, this.frameIds = {}, this.subscribersCallbacks = {}, this.previousEvents = {}, this.preRenderEvents = {}, this.subscriptionId = 1, this.dispatchedCount = {}, this.eventStatusTable = {}, Object.keys(o).forEach(e => {
            const t = Object.getOwnPropertyDescriptor(o, e).value;
            this.eventStatusTable[t] = 0;
          }), this.frameId = n.DvObject.getFrameId(r.WindowAdaptor.currentWindow()), this.previousEventsCapacity = 1e3, this.excludeFrameId(this.frameId);
        }
        excludeFrameId(e) {
          this.frameIds[e] || (this.frameIds[e] = !0, this.addEventListener(o.adRenderedData, this.updateRenderedAd.bind(this), "excludeFrame", e));
        }
        addEventListener(e, t, i = "", r = this.frameId) {
          let a = this.addEventsListener({
            [e]: t
          }, i, r);
          if (a && a.length > 0) return a[0];
        }
        addEventsListener(e, t = "", i = this.frameId) {
          let r = [];
          return this.mapToWrapperFunction(e), this.fireMultiplePreviousEvents(e, i), Object.keys(e).forEach(a => {
            const n = e[a];
            let s = this.subscribe(a, i, t, n);
            r.push(s);
          }), r;
        }
        removeEventListener(e, t = this.frameId) {
          this.subscribersCallbacks[t] && Object.keys(this.subscribersCallbacks[t]).forEach(i => {
            this.subscribersCallbacks[t][i] = this.subscribersCallbacks[t][i].filter(t => t.subscriptionId != e);
          });
        }
        removeEventsListener(e, t = this.frameId) {
          e.forEach(e => this.removeEventListener(e, t));
        }
        dispatchEvent(e, t) {
          0 == this.eventStatusTable[e] && (this.eventStatusTable[e] = 1), 2 == this.eventStatusTable[e] && (this.eventStatusTable[e] = 3), this.dispatchedCount[e] = this.dispatchedCount[e] ? this.dispatchedCount[e] + 1 : 1, this.publishEvents(this.frameId, e, t);
        }
        subscribe(e, t, i, r) {
          if ("function" == typeof r && void 0 !== e && "" != e) return 0 == this.eventStatusTable[e] && (this.eventStatusTable[e] = 2), 1 == this.eventStatusTable[e] && (this.eventStatusTable[e] = 3), this.subscriptionId++, this.subscribersCallbacks[t] = this.subscribersCallbacks[t] || {}, this.subscribersCallbacks[t][e] = this.subscribersCallbacks[t][e] || [], this.subscribersCallbacks[t][e].push({
            func: r,
            subscriptionId: this.subscriptionId,
            actionName: i
          }), this.subscriptionId;
        }
        publish(e, t, i) {
          e && t && (this.frameIds[t] || this.renderedImpressions[t] ? (this.renderedImpressions[t] && !this.markRenderedImpressions[t] && (this.markRenderedImpressions[t] = !0), this.publishHistoryRtnEvent(t), this.publishEvents(t, e, i)) : this.storeToPreRenderEvent(t, e, i));
        }
        publishHistoryRtnEvent(e) {
          const t = this.preRenderEvents[e];
          t && Object.keys(t).forEach(i => t[i].forEach(t => this.publishEvents(e, i, t))), this.preRenderEvents[e] = {};
        }
        getTopDispatchedEvents(e = Object.keys(this.dispatchedCount).length) {
          return Object.entries(this.dispatchedCount).sort((e, t) => t[1] - e[1]).slice(0, e);
        }
        getDispatchedByStatus(e) {
          return Object.entries(this.eventStatusTable).filter(([t, i]) => i == e).map(([e, t]) => e);
        }
        updateRenderedAd(e) {
          const t = e.uid;
          t && (this.renderedImpressions[t] = !0, this.publishHistoryRtnEvent(t));
        }
        publishEvents(e, t, i) {
          this.storeToPreviousEvents(e, t, i), this.subscribersCallbacks[e] && this.subscribersCallbacks[e][t] && this.subscribersCallbacks[e][t].forEach(r => {
            this.runSafely(r.func, i, e, t, r.actionName);
          });
        }
        mapToWrapperFunction(e) {
          Object.keys(e).forEach(t => {
            const i = e[t];
            t && "function" == typeof i ? e[t] = (e, t) => {
              i(t);
            } : delete e[t];
          });
        }
        storeToPreRenderEvent(e, t, i) {
          this.preRenderEvents[e] = this.preRenderEvents[e] || {}, this.preRenderEvents[e][t] = this.preRenderEvents[e][t] || [], this.preRenderEvents[e][t].push(i);
        }
        storeToPreviousEvents(e, t, i) {
          this.previousEvents[e] = this.previousEvents[e] || {}, this.previousEvents[e][t] = this.previousEvents[e][t] || [], this.previousEvents[e][t].length < this.previousEventsCapacity && this.previousEvents[e][t].push(i);
        }
        fireMultiplePreviousEvents(e, t) {
          if (!this.previousEvents[t]) return;
          const i = Object.keys(e).reduce((i, r) => {
            const a = e[r];
            return (this.previousEvents[t][r] || []).forEach(e => i.push({
              callback: a,
              data: e
            })), i;
          }, []).sort((e, t) => e.data.updateTime - t.data.updateTime);
          for (const e of i) this.runSafely(e.callback, e.data, t);
        }
        runSafely(e, t, i, r = "", n = "") {
          try {
            e(i, t);
          } catch (e) {
            a.MessageHandler.sendError(s.ClientErrorType.MeasurementError, e, `EBus ${r} ${n}`);
          }
        }
      }
      t.EventBusClass = d, t.EventBus = new d(), t.EventBusGlobal = new d();
    },
    9979: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdLocatorSellerTagFlowFeatureFlag = t.AdLocatorSellerTagFlowFeatureFlagClass = void 0;
      const r = i(7749),
        a = i(2946);
      class n extends a.FeatureFlag {
        getTagParameterValue() {
          return r.DvTagDataObject.useSellerTagMultipleAdLocatorSets();
        }
        constructor() {
          super("seltagmals");
        }
      }
      t.AdLocatorSellerTagFlowFeatureFlagClass = n, t.AdLocatorSellerTagFlowFeatureFlag = new n();
    },
    9992: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdLocatorsTaskSeparatorFeatureFlag = t.AdLocatorsTaskSeparatorFeatureFlagClass = void 0;
      const r = i(2946),
        a = i(7749);
      class n extends r.FeatureFlag {
        getTagParameterValue() {
          return a.DvTagDataObject.getAdLocatingSeparatedTasks();
        }
        constructor() {
          super("adlst");
        }
      }
      t.AdLocatorsTaskSeparatorFeatureFlagClass = n, t.AdLocatorsTaskSeparatorFeatureFlag = new n();
    },
    3773: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AsyncSplitInitMeasurementFeatureFlag = t.AsyncSplitInitMeasurementFeatureFlagClass = void 0;
      const r = i(2946),
        a = i(7749);
      class n extends r.FeatureFlag {
        getTagParameterValue() {
          return a.DvTagDataObject.getAsyncSplitInitMeasurement();
        }
        constructor() {
          super("asim");
        }
      }
      t.AsyncSplitInitMeasurementFeatureFlagClass = n, t.AsyncSplitInitMeasurementFeatureFlag = new n();
    },
    412: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BtregOptimizationFeatureFlag = t.BtregOptimizationFeatureFlagClass = void 0;
      const r = i(2946),
        a = i(7749);
      class n extends r.FeatureFlag {
        getTagParameterValue() {
          return a.DvTagDataObject.getBtregOptimizationExperiment();
        }
        constructor() {
          super("btroe");
        }
      }
      t.BtregOptimizationFeatureFlagClass = n, t.BtregOptimizationFeatureFlag = new n();
    },
    9443: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CustomAdLocatorsFeatureFlag = t.CustomAdLocatorsExperimentFeatureFlagClass = void 0;
      const r = i(2946);
      class a extends r.FeatureFlag {
        getTagParameterValue() {
          return "";
        }
        constructor() {
          super("cadl");
        }
      }
      t.CustomAdLocatorsExperimentFeatureFlagClass = a, t.CustomAdLocatorsFeatureFlag = new a();
    },
    7460: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EngagementEligibleResearchFeatureFlag = t.EngagementEligibleResearchFeatureFlagClass = void 0;
      const r = i(2946);
      class a extends r.FeatureFlag {
        getTagParameterValue() {}
        constructor() {
          super("enee");
        }
      }
      t.EngagementEligibleResearchFeatureFlagClass = a, t.EngagementEligibleResearchFeatureFlag = new a();
    },
    68: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ExperimentsFeatureFlags = t.ExperimentsFeatureFlagsClass = void 0;
      const r = i(7072),
        a = i(9992),
        n = i(9979),
        s = i(3773),
        o = i(9443),
        d = i(412),
        l = i(7460),
        c = {
          entries: [{
            percentage: 1,
            value: []
          }, {
            percentage: 1,
            value: [a.AdLocatorsTaskSeparatorFeatureFlag.diagnosticParamName]
          }, {
            percentage: 1,
            value: [d.BtregOptimizationFeatureFlag.diagnosticParamName]
          }, {
            percentage: 1,
            value: [s.AsyncSplitInitMeasurementFeatureFlag.diagnosticParamName]
          }, {
            percentage: 10,
            value: [n.AdLocatorSellerTagFlowFeatureFlag.diagnosticParamName]
          }, {
            percentage: 1,
            value: [a.AdLocatorsTaskSeparatorFeatureFlag.diagnosticParamName, s.AsyncSplitInitMeasurementFeatureFlag.diagnosticParamName, d.BtregOptimizationFeatureFlag.diagnosticParamName, n.AdLocatorSellerTagFlowFeatureFlag.diagnosticParamName]
          }, {
            percentage: 1,
            value: [a.AdLocatorsTaskSeparatorFeatureFlag.diagnosticParamName, s.AsyncSplitInitMeasurementFeatureFlag.diagnosticParamName, d.BtregOptimizationFeatureFlag.diagnosticParamName]
          }, {
            percentage: 10,
            value: [o.CustomAdLocatorsFeatureFlag.diagnosticParamName]
          }, {
            percentage: 10,
            value: [l.EngagementEligibleResearchFeatureFlag.diagnosticParamName]
          }],
          leftover: [a.AdLocatorsTaskSeparatorFeatureFlag.diagnosticParamName]
        };
      class u {
        constructor() {
          this.initialized = !1;
        }
        init(e) {
          var t;
          if (this.initialized) return;
          let i;
          this.initialized = !0;
          try {
            i = null !== (t = r.DiscreteDistributionRandom.random(c)) && void 0 !== t ? t : [];
          } catch (e) {
            i = [];
          }
          a.AdLocatorsTaskSeparatorFeatureFlag.decideStatus(i.includes(a.AdLocatorsTaskSeparatorFeatureFlag.diagnosticParamName)), n.AdLocatorSellerTagFlowFeatureFlag.decideStatus(i.includes(n.AdLocatorSellerTagFlowFeatureFlag.diagnosticParamName)), s.AsyncSplitInitMeasurementFeatureFlag.decideStatus(e && i.includes(s.AsyncSplitInitMeasurementFeatureFlag.diagnosticParamName)), o.CustomAdLocatorsFeatureFlag.decideStatus(i.includes(o.CustomAdLocatorsFeatureFlag.diagnosticParamName)), d.BtregOptimizationFeatureFlag.decideStatus(i.includes(d.BtregOptimizationFeatureFlag.diagnosticParamName)), l.EngagementEligibleResearchFeatureFlag.decideStatus(i.includes(l.EngagementEligibleResearchFeatureFlag.diagnosticParamName));
        }
      }
      t.ExperimentsFeatureFlagsClass = u, t.ExperimentsFeatureFlags = new u();
    },
    2946: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.FeatureFlag = void 0;
      const r = i(8170),
        a = [0, 1];
      t.FeatureFlag = class {
        constructor(e, t = 0) {
          this.diagnosticParamName = e, this.status = t, this.isStatusAssigned = !1;
        }
        reportDiagnosticParams() {
          r.DiagnosticParamsSingleton.reportDiagnosticParam(this.diagnosticParamName, this.status);
        }
        getStatus(e) {
          const t = this.getTagParameterValue(),
            i = this.deserializeStatus(t);
          return i || 0 === i ? i : e ? 2 : 0;
        }
        deserializeStatus(e) {
          if (!(null == e ? void 0 : e.length)) return null;
          const t = +e;
          return !isNaN(t) && a.includes(t) ? t : null;
        }
        isEnabled() {
          return 1 === this.status || 2 === this.status;
        }
        decideStatus(e) {
          this.isStatusAssigned || (this.status = this.getStatus(e), this.isStatusAssigned = !0, this.isEnabled() && this.reportDiagnosticParams());
        }
      };
    },
    8426: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InmobiWrapper = t.InmobiWrapperClass = void 0;
      const r = i(3868);
      class a {
        isSupported() {
          if (void 0 !== r.WindowAdaptor.workingWindow().inmobi && void 0 !== r.WindowAdaptor.workingWindow().inmobi.InMobiVideoEventsBuffer) return this.inmobiApiObj = r.WindowAdaptor.workingWindow().inmobi, !0;
        }
        addEventListenerWithHistory(e) {
          this.isSupported() && this.inmobiApiObj.InMobiVideoEventsBuffer.addVideoEventListener(e);
        }
      }
      t.InmobiWrapperClass = a, t.InmobiWrapper = new a();
    },
    749: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MessageHandler = t.MessageHandlerClass = void 0;
      const r = i(194),
        a = i(3868),
        n = i(425),
        s = i(7658),
        o = i(3380),
        d = i(7360),
        l = i(712),
        c = i(3946),
        u = i(6689),
        p = i(7429),
        h = i(7749);
      class g {
        constructor() {
          this.waitingMessages = {}, this.reportedErrors = {}, this.messageDataObject = {}, this.eventListenersInitiated = !1, this.START_INTERVAL_INITIAL_VALUE = 10, this.isFirstEventFired = !1;
        }
        sendMessage(e, t = {
          isImportantMessage: !1,
          noConsolidation: !1
        }) {
          let i = {
            isImportantMessage: "boolean" == typeof t ? t : t.isImportantMessage,
            noConsolidation: "boolean" != typeof t && t.noConsolidation
          };
          this.initEventListeners(), this.impressionId = this.impressionId || r.DvObject.getImpressionId(a.WindowAdaptor.currentWindow()), o.Utilities.extend(e, this.waitingMessages), this.isImportantMessage = this.isImportantMessage || i.isImportantMessage, i.noConsolidation ? this.sendWaitingMessages(!1) : this.sendWaitingMessages();
        }
        appendTagUniqueKey(e) {
          const t = r.DvObject.getTagUniqueKey();
          t && (e.dvp_tukv = t);
        }
        sendMeasurementError(e, t, i = "", a = null) {
          let n = {
            ishems: o.Utilities.getTimeDiff(),
            napr: this.getJsErrorString(e, t, i),
            cerrt: e.id,
            jsver: o.Utilities.getVersion(),
            tgjsver: r.DvObject.getDvtpScriptVersion()
          };
          o.Utilities.extend(a, n), this.sendMessage(n);
        }
        appendIsOmid(e) {
          u.OmidWrapper.isSupported() && (e.dvp_iomd = 1);
        }
        sendErrorSignal(e, t, i = "", d = null) {
          const l = this.getJsErrorString(e, t, i),
            c = h.DvTagDataObject.getServerPrefix(),
            u = h.DvTagDataObject.getErrorPath(),
            p = {
              ctx: 818052,
              cmp: 1619415,
              jsver: o.Utilities.getVersion(),
              tgjsver: r.DvObject.getDvtpScriptVersion(),
              napr: l,
              cerrt: e.id
            };
          e.isLostImpression && (p.dvp_isLostImp = 1);
          try {
            p[s.TPSDataMapping.trafficScenarioType] = a.WindowAdaptor.getScenarioType();
          } catch (e) {}
          p[s.TPSDataMapping.flavor] = "0", this.appendIsOmid(p), this.appendTagUniqueKey(p), o.Utilities.extend(this.getClientDataString(), p), o.Utilities.extend(d, p);
          const g = `${c}${u}?${h.DvTagDataObject.getGDPRAndGDPRConsentQueryStringPart()}${o.Utilities.serializeObjectToQueryString(p, !1)}`;
          n.BrowserAdaptor.sendBeacon(g.trim(), !0);
        }
        getClientDataString() {
          const e = h.DvTagDataObject.getClientData();
          return {
            ee_dp_ctx: e.ctx,
            ee_dp_cmp: e.cmp,
            ee_dp_sid: e.sid,
            ee_dp_plc: e.plc
          };
        }
        sendError(e, t, i = "", r = null) {
          this.reportedErrors.hasOwnProperty(e.id) || (this.reportedErrors[e.id] = 1, e.isLostImpression || e == l.ClientErrorType.FailedToSendEvent ? this.sendErrorSignal(e, t, i, r) : this.sendMeasurementError(e, t, i, r));
        }
        registerEventCall(e, t, i = !0, r) {
          o.Utilities.getTimeDiff() > 12e5 || (this.initEventListeners(), r = this.getEventConsolidationTimeout(r), t.eoid = p.EventIdGeneratorAdaptor.getNext(), this.consolidateMessageData(e, t), this.afterUnload || !i || isNaN(r) ? this.sendDataToServer(e) : n.BrowserAdaptor.setTimeout(() => {
            this.sendDataToServer(e);
          }, r));
        }
        getEventConsolidationTimeout(e) {
          const t = e || r.DvObject.getConsolidationTimeout() || 3e3;
          return this.restrictTimeoutMax ? Math.min(t, this.restrictTimeoutMax) : t;
        }
        sendWaitingMessages(e = !0, t) {
          o.Utilities.isEmpty(this.waitingMessages) || (this.impressionId ? (!this.isImportantMessage && r.DvObject.getFireOnlyImportantEvents() || this.registerEventCall(this.impressionId, this.waitingMessages, e, t), this.isImportantMessage = !1, this.waitingMessages = {}) : o.Utilities.getVisitTimeDiff() > 4e3 && this.sendError(l.ClientErrorType.FailedToSendEvent, void 0, "ImpressionID is missing"));
        }
        firePreviousEvents() {
          this.impressionId = r.DvObject.getImpressionId(a.WindowAdaptor.currentWindow());
          let e = this.getIntervalAndSetMaxTimeout();
          this.sendWaitingMessages(!0, e);
        }
        getIntervalAndSetMaxTimeout(e = this.START_INTERVAL_INITIAL_VALUE) {
          return !r.DvObject.isMobile() || c.BrowserDetector.getBrowserId() != l.Browser.Safari && c.BrowserDetector.getBrowserId() != l.Browser.SafariWebView || (this.restrictTimeoutMax = e = 1e3), u.OmidWrapper.isSupported() && (this.restrictTimeoutMax = 500), e;
        }
        initEventListeners() {
          this.eventListenersInitiated || (d.EventBus.addEventListener(d.DvEvent.impressionServed, () => {
            this.firePreviousEvents();
          }, "MessageHandler"), d.EventBus.addEventListener(d.DvEvent.globalUnloadData, this.handleUnload.bind(this)), this.eventListenersInitiated = !0);
        }
        consolidateMessageData(e, t) {
          this.messageDataObject[e] = this.messageDataObject[e] || {}, o.Utilities.extend(t, this.messageDataObject[e]);
        }
        createEventCallUrl(e, t, i = !1) {
          void 0 === this.doubleTagImp && (this.doubleTagImp = r.DvObject.getDoubleTagImpressionID() || "");
          const a = this.doubleTagImp ? "dup=" + this.doubleTagImp + "&" : "";
          return h.DvTagDataObject.resolveEventUrlPrefix(e) + `?impid=${e}&` + a + "flavor=0&" + h.DvTagDataObject.getGDPRAndGDPRConsentQueryStringPart() + o.Utilities.serializeObjectToQueryString(t, i);
        }
        sendDataToServer(e) {
          try {
            if (!o.Utilities.isEmpty(this.messageDataObject[e])) {
              let t = this.createEventCallUrl(e, this.messageDataObject[e], u.OmidWrapper.isSupported());
              this.isFirstEventFired || (t += `&${s.TPSDataMapping.timeToFirstUpdateReportMs}=${o.Utilities.getCurrentTime() - o.Utilities.getScriptLoadedMS()}`, this.isFirstEventFired = !0), this.afterUnload && (t += `&${s.TPSDataMapping.totalMeasurementExecTime}=${o.Utilities.getCurrentTime() - o.Utilities.getScriptLoadedMS()}`), n.BrowserAdaptor.sendBeacon(t), this.messageDataObject[e] = null;
            }
          } catch (e) {}
        }
        getJsErrorString(e, t, i) {
          let r,
            a = e.message + "__";
          i && i.length > 0 && (a += i + "__"), t && (a += ": " + (t.message || ""), t.stack && (a += t.stack.split("\n").map(e => e.replace(/\(.*\)/, "")).join(""))), a = a.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "").replace(/\|/g, "");
          try {
            a = a.slice(0, 400), r = encodeURIComponent(a);
          } catch (e) {}
          return r;
        }
        handleUnload() {
          this.afterUnload = !0, Object.keys(this.messageDataObject).forEach((e, t) => {
            this.sendDataToServer(e);
          });
        }
      }
      t.MessageHandlerClass = g, t.MessageHandler = new g();
    },
    6681: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MraidWrapper = t.MraidWrapperClass = void 0;
      const r = i(3868),
        a = i(749),
        n = i(7360),
        s = i(1800),
        o = i(363),
        d = i(3380);
      class l {
        constructor() {
          this.isMraidReady = !1, this.readyState = !1, this.maxIterations = 20, this.errorReported = !1;
          const e = r.WindowAdaptor.workingWindow();
          this.setMraid(e), this.mraidObject && this.readyCheck();
        }
        getReadyState() {
          return this.readyState;
        }
        isOperaMedia() {
          return "AdMarvel" == this.runMraidFunctionSafely("getVendor");
        }
        isAdColony() {
          const e = this.runMraidFunctionSafely("getVendor");
          return e && "string" == typeof e && "adcolony" == e.toLowerCase();
        }
        getIsMraidReady() {
          return this.isMraidReady || this.updateIsMraidReady();
        }
        isSupported() {
          return !!this.mraidObject;
        }
        getIntegrationType() {
          return 2;
        }
        runMraidFunctionSafely(e) {
          try {
            return this.mraidObject[e]();
          } catch (e) {}
        }
        runMraidRegisterSafely(e, t) {
          try {
            t.toString = () => "func" + o.RandomUtils.getRandom16(), this.mraidObject.addEventListener(e, t);
          } catch (e) {}
        }
        setMraid(e) {
          this.mraidObject = r.WindowAdaptor.objectLookup(e, "mraid", this.maxIterations);
        }
        reportMraidLookup(e) {
          r.WindowAdaptor.isDomlessEnvironment() || (a.MessageHandler.sendMessage({
            dvp_mrdms: d.Utilities.getCurrentTime()
          }), this.mraidObject || null == r.WindowAdaptor.workingDocument().readyState || "complete" == r.WindowAdaptor.workingDocument().readyState || e.addEventListener("load", t => {
            r.WindowAdaptor.objectLookup(e, "mraid", this.maxIterations) && a.MessageHandler.sendMessage({
              dvp_mrdfnd: 1
            });
          }));
        }
        getMraid() {
          return this.mraidObject;
        }
        reportEnvironmentDetails() {
          this.mraidEnvObjectCache = this.mraidEnvObjectCache || r.WindowAdaptor.objectLookup(r.WindowAdaptor.currentWindow(), "MRAID_ENV", this.maxIterations), this.mraidEnvObjectCache && a.MessageHandler.sendMessage({
            dvp_mrdsdk: this.mraidEnvObjectCache.sdk,
            dvp_mrdsdkv: this.mraidEnvObjectCache.sdkVersion,
            dvp_mrdv: this.mraidEnvObjectCache.version,
            dvp_mrdapid: this.mraidEnvObjectCache.appId
          });
        }
        getAdViewablePercentage() {
          let e = this.runMraidFunctionSafely("isViewable");
          return null == e ? null : e ? 100 : 0;
        }
        readyCheck() {
          "loading" == this.runMraidFunctionSafely("getState") ? this.runMraidRegisterSafely("ready", this.readyCallback.bind(this)) : this.readyCallback(), this.runMraidRegisterSafely("stateChange", this.updateIsMraidReady.bind(this));
        }
        setReadyState() {
          this.readyState = !0, n.EventBus.dispatchEvent(n.DvEvent.mraidDefaultStateData, new s.EventData()), a.MessageHandler.sendMessage({
            dvp_mrstt: 1
          });
        }
        readyCallback() {
          this.setReadyState(), this.updateIsMraidReady(), this.registerToMraidErrorEvent();
        }
        updateIsMraidReady() {
          if (this.isMraidReady) return this.isMraidReady;
          const e = this.runMraidFunctionSafely("isViewable");
          return ("default" == this.runMraidFunctionSafely("getState") || e) && (this.isMraidReady = !0, this.readyState || this.setReadyState()), this.isMraidReady;
        }
        registerToMraidErrorEvent() {
          this.runMraidRegisterSafely("error", (e, t) => {
            this.errorReported || (a.MessageHandler.sendMessage({
              dvp_mrwer: "MraidWrapper:" + t + ":" + e.substring(0, 60)
            }), this.errorReported = !0);
          });
        }
      }
      t.MraidWrapperClass = l, t.MraidWrapper = new l();
    },
    6671: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidVerificationClientWrapper = void 0;
      const r = i(425),
        a = i(194),
        n = i(712),
        s = i(749),
        o = i(6689),
        d = i(3380),
        l = i(8170),
        c = "undefined" != typeof $dv && $dv || {};
      class u {
        constructor(e) {
          this.onSessionEvent = e => {
            switch (e.type) {
              case "sessionStart":
                this.onSessionStart(e);
                break;
              case "sessionFinish":
                this.onSessionFinish(e);
                break;
              case "sessionError":
                this.onSessionError(e);
            }
          }, this.isReady = !1, this.init(e), this.isSupported() && (this.sessionStartTimeout = r.BrowserAdaptor.setTimeout(() => {
            const e = {
              [l.DiagnosticParamsSingleton.getQueryParamName("isom3p")]: a.DvObject.isOmid3p() ? "1" : "0",
              [l.DiagnosticParamsSingleton.getQueryParamName("omenv")]: this.getEnvironment()
            };
            s.MessageHandler.sendError(n.ClientErrorType.OmidNoSessionStart, new Error("omid SessionStart not fired"), "omid SessionStart not fired", e);
          }, u.sessionStartTimeoutInterval), this.registerSessionObserver());
        }
        ready(e) {
          this.isReady ? e() : this.readyCB = e;
        }
        onSessionStart(e) {
          this.isReady = !0, r.BrowserAdaptor.clearTimeout(this.sessionStartTimeout), e = e || {}, o.OmidWrapper.init(this.omidVCInstance, e, this.vendorKey), c.omidSessionData = e, c.omidSessionStartTime = new Date().getTime(), "function" == typeof this.readyCB && this.readyCB();
        }
        onSessionFinish(e) {
          this.isReady = !1;
        }
        onSessionError(e) {
          this.isReady = !1;
          const t = (e = e || {}).data || {},
            i = t.message || "onSessionError_Error",
            a = this.isInvalidInjection(t) ? n.ClientErrorType.OmidInvalidInjection : n.ClientErrorType.OmidSessionError;
          r.BrowserAdaptor.clearTimeout(this.sessionStartTimeout), s.MessageHandler.sendError(a, {
            message: i
          }, "", {
            [l.DiagnosticParamsSingleton.getQueryParamName("omenv")]: this.getEnvironment()
          });
        }
        getEnvironment() {
          var e;
          return null === (e = this.omidVCInstance) || void 0 === e ? void 0 : e.getEnvironment();
        }
        isInvalidInjection(e) {
          return "generic" === e.errorType && e.message.includes("injected by the OM-SDK service itself");
        }
        registerSessionObserver() {
          this.omidVCInstance && this.omidVCInstance.registerSessionObserver(this.onSessionEvent, this.vendorKey);
        }
        isSupported() {
          if (void 0 === this.omidVCIsSupported) try {
            this.omidVCIsSupported = this.omidVCInstance.isSupported();
          } catch (e) {
            this.omidVCIsSupported = !1;
          }
          return this.omidVCIsSupported;
        }
        setVendorKey() {
          const e = a.DvObject.getDvtpScriptUrl();
          if (this.vendorKey = u.DefaultVendorKey, e) try {
            this.vendorKey = d.Utilities.getParamValue(e, "vendor_key") || this.vendorKey;
          } catch (e) {
            this.vendorKey = u.DefaultVendorKey;
          }
        }
        init(e) {
          if (e) {
            this.setVendorKey();
            try {
              this.omidVCInstance = new e(), c.omidJsClient = this.omidVCInstance, c.omidVendorKey = this.vendorKey;
            } catch (e) {}
          }
        }
      }
      t.OmidVerificationClientWrapper = u, u.VerificationClientVersion = "1.2.6-iab634", u.DefaultVendorKey = "doubleverify.com-omid", u.sessionStartTimeoutInterval = 5200;
    },
    6689: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidWrapper = t.OmidWrapperClass = void 0;
      const r = i(194),
        a = i(630);
      class n {
        constructor() {
          this.omidDefaultVendorKey = "doubleverify.com-omid";
          let e = r.DvObject.getDvObject();
          e && (this.omidJsClient = e.omidJsClient, this.omidSessionData = e.omidSessionData, this.omidVendorKey = e.omidVendorKey || this.omidDefaultVendorKey, this.init(e.omidJsClient, e.omidSessionData, e.omidVendorKey));
        }
        init(e, t, i) {
          this.omidJsClient = e, this.omidSessionData = t, this.omidVendorKey = i || this.omidDefaultVendorKey;
        }
        isSupported() {
          return this.omidJsClient && this.omidJsClient.isSupported();
        }
        getIntegrationType() {
          const e = this.getOmidContext();
          return e && e.environment && "web" == e.environment.toLowerCase() ? 8 : 4;
        }
        getSessionData() {
          return this.omidSessionData;
        }
        addEventListener(e, t) {
          if (this.omidJsClient) return this.omidJsClient.addEventListener(e, t);
        }
        registerSessionObserver(e) {
          if (this.omidJsClient) return this.omidJsClient.registerSessionObserver(e, this.omidVendorKey);
        }
        setTimeout(e, t) {
          if (this.omidJsClient) return this.omidJsClient.setTimeout(e, t);
        }
        clearTimeout(e) {
          this.omidJsClient && this.omidJsClient.clearTimeout(e);
        }
        setInterval(e, t) {
          if (this.omidJsClient) return this.omidJsClient.setInterval(e, t);
        }
        clearInterval(e) {
          this.omidJsClient && this.omidJsClient.clearInterval(e);
        }
        getVerificationParameters() {
          let e,
            t = this.getSessionData();
          return t && t.data && (e = t.data.verificationParameters), e;
        }
        sendUrl(e) {
          this.omidJsClient && this.omidJsClient.sendUrl(e);
        }
        injectJavaScriptResource(e, t = () => {}, i = () => {}) {
          this.omidJsClient && this.omidJsClient.injectJavaScriptResource(e, t, i);
        }
        getOmidNativePartnerName() {
          let e;
          const t = this.getOmidContext();
          return t && t.omidNativeInfo && t.omidNativeInfo.partnerName && (e = t.omidNativeInfo.partnerName), e;
        }
        getOmidJSPartnerName() {
          let e;
          const t = this.getOmidContext();
          return t && t.omidJsInfo && t.omidJsInfo.partnerName && (e = t.omidJsInfo.partnerName), e;
        }
        getOmidVendorKeyIndex(e) {
          if (e) return e.replace(this.omidDefaultVendorKey, "") || "0";
        }
        getOmidContext() {
          const e = this.getSessionData() && this.getSessionData().data;
          let t;
          return e && e.context && (t = e.context), t;
        }
        getOmidScenarioType() {
          const e = this.getOmidContext();
          return null == e ? void 0 : e.environment;
        }
        getOmidAccessMode() {
          var e, t;
          return null !== (t = null === (e = this.getOmidContext()) || void 0 === e ? void 0 : e.accessMode) && void 0 !== t ? t : null;
        }
        getOmidAccessModeNumber(e) {
          return new Map([[a.OmidAccessModeString.FULL, 1], [a.OmidAccessModeString.DOMAIN, 2], [a.OmidAccessModeString.LIMITED, 3]]).get(e);
        }
      }
      t.OmidWrapperClass = n, t.OmidWrapper = new n();
    },
    3038: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      let i = null,
        r = null,
        a = null,
        n = null,
        s = null,
        o = null,
        d = null,
        l = null,
        c = null,
        u = null,
        p = null,
        h = null,
        g = null;
      const m = {
        setIndexExecutionStartTime() {
          s = this.currentTime();
        },
        setMainImportsStartTime(e) {
          i = e;
        },
        setMainImportsEndTime() {
          r = this.currentTime();
        },
        setTotalSyncTimeStartTime(e) {
          a = e;
        },
        setTotalSyncTimeEndTime() {
          n = this.currentTime();
        },
        setFireVerifyExecutionStartTime() {
          o = this.currentTime();
        },
        setFireVerifyExecutionEndTime() {
          d = this.currentTime();
        },
        setFireVisitExecutionStartTime() {
          l = this.currentTime();
        },
        setFireVisitExecutionEndTime() {
          c = this.currentTime();
        },
        setInitMainExecutionStartTime() {
          u = this.currentTime();
        },
        setInitMainExecutionEndTime() {
          p = this.currentTime();
        },
        setInitMeasurementExecutionStartTime() {
          h = this.currentTime();
        },
        setInitMeasurementExecutionEndTime() {
          g = this.currentTime();
        },
        getBenchmarks: () => [{
          name: "tsetms",
          startTime: a,
          endTime: n,
          condition: Boolean(a && n)
        }, {
          name: "mietms",
          startTime: i,
          endTime: r,
          condition: Boolean(i && r)
        }, {
          name: "prvietms",
          startTime: a,
          endTime: l,
          condition: Boolean(a && l)
        }, {
          name: "fvietms",
          startTime: l,
          endTime: c,
          condition: Boolean(l && c)
        }, {
          name: "povietms",
          startTime: c,
          endTime: n,
          condition: Boolean(c && n)
        }, {
          name: "prveetms",
          startTime: a,
          endTime: o,
          condition: Boolean(a && o)
        }, {
          name: "fveetms",
          startTime: o,
          endTime: d,
          condition: Boolean(o && d)
        }, {
          name: "poveetms",
          startTime: d,
          endTime: n,
          condition: Boolean(d && n)
        }, {
          name: "imaetms",
          startTime: u,
          endTime: p,
          condition: Boolean(u && p)
        }, {
          name: "iesuimestms",
          startTime: s,
          endTime: u,
          condition: Boolean(s && u)
        }, {
          name: "imeetms",
          startTime: h,
          endTime: g,
          condition: Boolean(h && g)
        }].filter(e => e.condition).map(({
          name: e,
          startTime: t,
          endTime: i
        }) => ({
          taskDetails: {
            name: e
          },
          startTime: t,
          endTime: i
        })),
        currentTime: () => "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : void 0
      };
      t.default = m;
    },
    1657: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.mainImportsStartTime = void 0, t.mainImportsStartTime = "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : void 0;
    },
    6820: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.cancelScheduledTask = t.isPerformanceApiSupported = t.reportTaskTiming = t.trackPerformanceWhenExecuted = t.invokeWithPerformanceMeasures = t.scheduleTask = void 0;
      const r = i(1800),
        a = i(425),
        n = i(7360),
        s = i(3868);
      t.scheduleTask = (e, t = 0) => a.BrowserAdaptor.setTimeout(e, t);
      t.invokeWithPerformanceMeasures = (e, i) => {
        const r = a.BrowserAdaptor.getPerformanceTimeNow(),
          n = i(),
          s = a.BrowserAdaptor.getPerformanceTimeNow();
        return t.reportTaskTiming(e, r, s), n;
      };
      t.trackPerformanceWhenExecuted = (e, i) => () => t.invokeWithPerformanceMeasures(e, i);
      t.reportTaskTiming = ({
        name: e
      }, i, a) => {
        t.scheduleTask(() => n.EventBus.dispatchEvent(n.DvEvent.performanceTaskTiming, new r.TaskTimingEventData([{
          name: e,
          startTime: i,
          duration: a - i
        }])));
      };
      t.isPerformanceApiSupported = () => void 0 !== s.WindowAdaptor.currentWindow().performance && "function" == typeof s.WindowAdaptor.currentWindow().performance.now;
      t.cancelScheduledTask = e => {
        a.BrowserAdaptor.clearTimeout(e);
      };
    },
    363: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RandomUtils = t.RandomUtilsClass = void 0;
      const r = i(3868),
        a = i(3380);
      class n {
        getRandom16() {
          return (a.Utilities.getCurrentTime() + "" + Math.floor(1e6 * Math.random())).substr(0, 16);
        }
        getRandom32() {
          return a.Utilities.getCurrentTime().toString(36) + (this.getRandom24ByCrypto() || this.getRandom24());
        }
        getRandom24ByCrypto() {
          if (r.WindowAdaptor.isCryptoSupported()) {
            const e = new Uint32Array(4);
            return crypto.getRandomValues(e), a.Utilities.arrayLikeToArray(e).map(e => ("00000000" + e.toString(36)).substr(-6)).join("");
          }
        }
        getRandom24() {
          return (Math.random().toString(36) + "000000000000").substr(2, 12) + (Math.random().toString(36) + "000000000000").substr(2, 12);
        }
      }
      t.RandomUtilsClass = n, t.RandomUtils = new n();
    },
    1723: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractRenderLogic = void 0;
      const r = i(3868),
        a = i(7360),
        n = i(1800),
        s = i(749),
        o = i(194);
      t.AbstractRenderLogic = class {
        constructor() {
          this.wasAdRenderedCalled = !1;
        }
        publishAdRenderedDataAfterImpressionServed() {
          let e = o.DvObject.getDvObject();
          e.pubSub && e.pubSub.excludeFrameId && a.EventBus.addEventListener(a.DvEvent.impressionServed, () => {
            o.DvObject.publishPubSubEvent(a.DvEvent.adRenderedData, o.DvObject.getFrameId(r.WindowAdaptor.currentWindow()), new n.AdRenderedEventData(o.DvObject.getImpressionId(r.WindowAdaptor.currentWindow())));
          }, "PreRenderLogic");
        }
        isAdRendered() {
          return this.wasAdRenderedCalled;
        }
        adRendered() {
          this.wasAdRenderedCalled = !0, this.publishAdRenderedDataAfterImpressionServed();
        }
        static fireRenderedEvent() {
          s.MessageHandler.sendMessage({
            prndr: 0
          }, !0);
        }
      };
    },
    6295: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Cm360ContainerRenderLogic = void 0;
      const r = i(7015),
        a = i(7749),
        n = i(712),
        s = i(7218);
      class o extends s.ContainerRenderLogic {
        constructor() {
          super(new r.Cm360AdContainerInspectorFactory(o.tagAttributeName));
        }
        isSupported(e) {
          return a.DvTagDataObject.getIsCm360CreativeWrapping() && e === n.DvTagType.Display;
        }
        getRenderingMethodIndicator() {
          return 8;
        }
      }
      t.Cm360ContainerRenderLogic = o, o.tagAttributeName = "data-doubleverify-container";
    },
    7218: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ContainerRenderLogic = void 0;
      const r = i(1723),
        a = i(3868),
        n = i(749),
        s = i(7658);
      class o extends r.AbstractRenderLogic {
        constructor(e) {
          super(), this.waitingForWindowLoadEvent = !1, this.activeListeners = [], this.adContainerInspector = e.createAdContainerInspector();
        }
        start() {
          var e, t, i;
          const r = null === (e = this.adContainerInspector) || void 0 === e ? void 0 : e.getContainer(),
            a = null === (t = this.adContainerInspector) || void 0 === t ? void 0 : t.getDirectChildren().length,
            n = null === (i = this.adContainerInspector) || void 0 === i ? void 0 : i.getDirectChildren(["img", "iframe"]),
            s = this.findALoadedChild(n);
          r ? 0 === a ? this.determineAdNotRendered(4) : 0 === n.length ? this.waitForWindowToLoad() : s ? this.reportAdRenderedByLoadedChild(s) : this.waitForTheFirstLoadableChildToLoad(n) : this.determineAdNotRendered(2);
        }
        getNumberOfActiveListeners() {
          return this.activeListeners.length;
        }
        reportAdRenderedByLoadedChild(e) {
          const t = this.getReasonForRendered(e);
          this.determineAdRendered(t, e);
        }
        waitForWindowToLoad() {
          this.waitingForWindowLoadEvent = !0, a.WindowAdaptor.workingWindow().addEventListener("load", () => this.determineAdRendered(4));
        }
        reportAdNotRendered(e) {
          n.MessageHandler.sendMessage({
            [s.AdDataMappingToReport.reasonForNotRenderedByContainerRenderLogic]: e
          });
        }
        determineAdNotRendered(e) {
          this.reportAdNotRendered(e), this.removeLoadEventListener();
        }
        determineAdRendered(e, t = null) {
          this.reportAdRendered(e, t), this.removeLoadEventListener();
        }
        reportAdRendered(e, t = null) {
          super.adRendered(), r.AbstractRenderLogic.fireRenderedEvent(), this.reportRenderedReasonAndImageDimensions(e, t);
        }
        reportRenderedReasonAndImageDimensions(e, t) {
          let i = {};
          i[s.AdDataMappingToReport.reasonForRenderedByContainerRenderLogic] = e, 1 === e && (i.dvp_cimw = t.width, i.dvp_cimh = t.height), n.MessageHandler.sendMessage(i);
        }
        removeLoadEventListener() {
          this.removeElemLoadEventListener(), this.waitingForWindowLoadEvent && this.removeWindowLoadEventListener();
        }
        removeElemLoadEventListener() {
          this.activeListeners.forEach(e => {
            e.removeEventListener("load", () => this.determineAdRendered(this.getReasonForRendered(e), e));
          }), this.activeListeners = [];
        }
        removeWindowLoadEventListener() {
          a.WindowAdaptor.workingWindow().removeEventListener("load", () => this.determineAdRendered(4)), this.waitingForWindowLoadEvent = !1;
        }
        getElementType(e) {
          return e.tagName.toLowerCase();
        }
        getReasonForRendered(e) {
          const t = this.getElementType(e);
          return "img" === t ? 1 : "iframe" === t ? 2 : null;
        }
        waitForTheFirstLoadableChildToLoad(e) {
          e.filter(e => "img" === this.getElementType(e)).forEach(e => {
            this.addLoadEventListener(e, 1);
          }), e.filter(e => "iframe" === this.getElementType(e)).forEach(e => {
            this.addLoadEventListener(e, 2);
          });
        }
        findALoadedChild(e) {
          return e.find(e => {
            const t = this.getElementType(e);
            if ("img" === t) return e.complete && 0 !== e.naturalHeight;
            if ("iframe" === t) try {
              const t = a.WindowAdaptor.getIframeWindow(e),
                i = a.WindowAdaptor.workingDocument(t),
                r = e.contentDocument || i;
              return "complete" === (null == r ? void 0 : r.readyState);
            } catch (e) {}
            return !1;
          });
        }
        addLoadEventListener(e, t) {
          e.addEventListener("load", () => this.determineAdRendered(t, e)), this.activeListeners.push(e);
        }
      }
      t.ContainerRenderLogic = o;
    },
    5414: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DefaultRenderLogic = void 0;
      const r = i(1723);
      class a extends r.AbstractRenderLogic {
        start() {
          super.adRendered();
        }
        isSupported(e) {
          return !0;
        }
        getRenderingMethodIndicator() {
          return 32;
        }
      }
      t.DefaultRenderLogic = a;
    },
    2905: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MraidInMobiRenderLogic = void 0;
      const r = i(6681),
        a = i(1723),
        n = i(3868),
        s = i(712);
      class o extends a.AbstractRenderLogic {
        constructor() {
          super(...arguments), this.wasViewable = !1, this.maxIterations = 20;
        }
        start() {
          r.MraidWrapper.getAdViewablePercentage() ? super.adRendered() : r.MraidWrapper.runMraidRegisterSafely("viewableChange", this.mraidViewableChangeUpdate.bind(this));
        }
        mraidViewableChangeUpdate(e) {
          e && !this.wasViewable && (this.wasViewable = !0, super.adRendered(), a.AbstractRenderLogic.fireRenderedEvent());
        }
        isSupported(e) {
          return e == s.DvTagType.Display && r.MraidWrapper.isSupported() && n.WindowAdaptor.objectLookup(n.WindowAdaptor.currentWindow(), "imraid", this.maxIterations) && n.WindowAdaptor.objectLookup(n.WindowAdaptor.currentWindow(), "inmobi", this.maxIterations);
        }
        getRenderingMethodIndicator() {
          return 2;
        }
      }
      t.MraidInMobiRenderLogic = o;
    },
    4263: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MraidRenderLogic = void 0;
      const r = i(7360),
        a = i(6681),
        n = i(1723),
        s = i(3868),
        o = i(425);
      class d extends n.AbstractRenderLogic {
        constructor() {
          super(...arguments), this.isMraidRendered = !1, this.isPageVisibilityRendered = !1, this.isPageVisibilitySupported = !1;
        }
        start() {
          this.isPageVisibilitySupported = o.BrowserAdaptor.isVisibilityChangeEventSupported(), this.checkMraidRender(), this.isPageVisibilitySupported && this.checkPageVisibilityRender(), this.checkOverallRendered(!1);
        }
        checkMraidRender() {
          a.MraidWrapper.getReadyState() ? this.isMraidRendered = !0 : this.mraidDefaultStateDataEventHandler = r.EventBus.addEventListener(r.DvEvent.mraidDefaultStateData, this.mraidDefaultStateCallback.bind(this));
        }
        mraidDefaultStateCallback() {
          this.isMraidRendered = !0, this.mraidDefaultStateDataEventHandler && r.EventBus.removeEventListener(this.mraidDefaultStateDataEventHandler), this.checkOverallRendered(!0);
        }
        checkPageVisibilityRender() {
          if ("prerender" != s.WindowAdaptor.getVisibilityState()) this.isPageVisibilityRendered = !0;else {
            const e = o.BrowserAdaptor.getVisibilityPrefix() + "visibilitychange";
            o.BrowserAdaptor.addEventListener(e, this.visibilityChangeCallback.bind(this), s.WindowAdaptor.workingDocument());
          }
        }
        visibilityChangeCallback() {
          this.isPageVisibilityRendered || "prerender" != s.WindowAdaptor.getVisibilityState() && (this.isPageVisibilityRendered = !0, this.checkOverallRendered(!0));
        }
        checkOverallRendered(e) {
          (!this.isPageVisibilitySupported && this.isMraidRendered || this.isPageVisibilitySupported && this.isPageVisibilityRendered && this.isMraidRendered) && (super.adRendered(), e && n.AbstractRenderLogic.fireRenderedEvent());
        }
        isSupported(e) {
          return a.MraidWrapper.isSupported();
        }
        getRenderingMethodIndicator() {
          return 4;
        }
      }
      t.MraidRenderLogic = d;
    },
    98: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidRenderLogic = void 0;
      const r = i(1723),
        a = i(6689),
        n = i(630),
        s = i(8170);
      class o extends r.AbstractRenderLogic {
        constructor() {
          super(...arguments), this.wasRendered = !1;
        }
        isSupported(e) {
          return a.OmidWrapper.isSupported();
        }
        getRenderingMethodIndicator() {
          return 64;
        }
        start() {
          a.OmidWrapper.addEventListener("impression", e => this.handleImpressionEvent(e)), a.OmidWrapper.addEventListener("geometryChange", e => this.handleGeometryChangeEvent(e));
        }
        handleImpressionEvent(e) {
          (!this.wasRendered && this.checkIfImpressionTypeIndicatesRendered(e) || this.checkIfPercentageInViewLargerThanZero(e)) && (s.DiagnosticParamsSingleton.reportDiagnosticParam("omrie", 1), this.updateThatAdIsRendered());
        }
        handleGeometryChangeEvent(e) {
          !this.wasRendered && this.checkIfPercentageInViewLargerThanZero(e) && (s.DiagnosticParamsSingleton.reportDiagnosticParam("omrge", 1), this.updateThatAdIsRendered());
        }
        checkIfImpressionTypeIndicatesRendered(e) {
          var t;
          const i = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.impressionType;
          return !(!i || i !== n.OmidImpressionType.BEGIN_TO_RENDER && i !== n.OmidImpressionType.ONE_PIXEL && i !== n.OmidImpressionType.VIEWABLE);
        }
        checkIfPercentageInViewLargerThanZero(e) {
          var t, i;
          return (null === (i = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.adView) || void 0 === i ? void 0 : i.percentageInView) > 0;
        }
        updateThatAdIsRendered() {
          this.wasRendered = !0, super.adRendered(), r.AbstractRenderLogic.fireRenderedEvent();
        }
      }
      t.OmidRenderLogic = o;
    },
    6898: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageVisibilityRenderLogic = void 0;
      const r = i(425),
        a = i(3868),
        n = i(1723);
      class s extends n.AbstractRenderLogic {
        constructor() {
          super(...arguments), this.wasRendered = !1;
        }
        start() {
          if ("prerender" != a.WindowAdaptor.getVisibilityState()) super.adRendered();else {
            const e = r.BrowserAdaptor.getVisibilityPrefix() + "visibilitychange";
            r.BrowserAdaptor.addEventListener(e, this.visibilitychangeCallback.bind(this), a.WindowAdaptor.workingDocument());
          }
        }
        visibilitychangeCallback() {
          this.wasRendered || "prerender" != a.WindowAdaptor.getVisibilityState() && (this.wasRendered = !0, super.adRendered(), n.AbstractRenderLogic.fireRenderedEvent());
        }
        isSupported(e) {
          return r.BrowserAdaptor.isVisibilityChangeEventSupported();
        }
        getRenderingMethodIndicator() {
          return 16;
        }
      }
      t.PageVisibilityRenderLogic = s;
    },
    7026: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RenderLogicFactory = t.RenderLogicFactoryClass = void 0;
      const r = i(2905),
        a = i(4263),
        n = i(6898),
        s = i(5414),
        o = i(7749),
        d = i(6295),
        l = i(98);
      class c {
        getRenderLogic() {
          return this.selectedRenderLogic || (this.selectedRenderLogic = this.selectSupportedRenderLogic()), this.selectedRenderLogic;
        }
        prioritizedRenderLogicImplementations() {
          return [l.OmidRenderLogic, r.MraidInMobiRenderLogic, a.MraidRenderLogic, d.Cm360ContainerRenderLogic, n.PageVisibilityRenderLogic, s.DefaultRenderLogic];
        }
        selectSupportedRenderLogic() {
          try {
            for (const e of this.prioritizedRenderLogicImplementations()) {
              const t = new e(),
                i = o.DvTagDataObject.getTagType();
              if (t.isSupported(i)) return t;
            }
          } catch (e) {}
          return new s.DefaultRenderLogic();
        }
      }
      t.RenderLogicFactoryClass = c, t.RenderLogicFactory = new c();
    },
    6806: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SafeFrameObject = t.SafeFrameObjectClass = void 0;
      class i {
        isGeometricSupported(e) {
          return e.$sf && e.$sf.ext && e.$sf.ext.geom && e.$sf.ext.geom() && e.$sf.ext.geom().win && e.$sf.ext.geom().win.h > 0 && e.$sf.ext.geom().win.w > 0;
        }
        isInviewSupported(e) {
          return !!e.$sf && !!e.$sf.ext && !!e.$sf.ext.inViewPercentage;
        }
        getViewport(e) {
          if (this.isGeometricSupported(e)) {
            const t = e.$sf.ext.geom();
            return {
              height: Math.floor(t.win.h),
              width: Math.floor(t.win.w)
            };
          }
        }
        getInViewPercentage(e) {
          if (this.isInviewSupported(e)) return e.$sf.ext.inViewPercentage();
        }
        getAssetVisibleDimension(e) {
          const t = {
              width: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            },
            i = e.$sf.ext.geom();
          return t.width = parseInt(i.self.w), t.height = parseInt(i.self.h), i.par && (t.top = parseInt(i.self.t) - parseInt(i.par.t), t.bottom = t.top + t.height, t.left = parseInt(i.self.l) - parseInt(i.par.l), t.right = t.left + t.width), t;
        }
        isSafeFrameExists(e) {
          try {
            return !!e.$sf;
          } catch (e) {}
        }
        getUrlReferrer(e) {
          try {
            return e.$sf && e.$sf.ext && e.$sf.ext.hostURL && e.$sf.ext.hostURL();
          } catch (e) {}
        }
      }
      t.SafeFrameObjectClass = i, t.SafeFrameObject = new i();
    },
    1030: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.scheduleTasks = void 0;
      const r = i(425),
        a = [];
      let n = !1;
      function s() {
        if (a.length) {
          n = !0;
          const e = a.shift();
          r.BrowserAdaptor.setTimeout(() => {
            e(), s();
          }, 0);
        } else n = !1;
      }
      t.scheduleTasks = function (e) {
        a.unshift(...e), n || s();
      };
    },
    3322: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScriptDynamicFlags = void 0;
      const r = i(749),
        a = i(7658),
        n = i(7360);
      class s {
        constructor() {
          this.impServed = !1, n.EventBus.addEventListener(n.DvEvent.impressionServed, this.handleImpressionServed.bind(this));
        }
        static getInstance() {
          return s.instance || (s.instance = new s()), s.instance;
        }
        getFlags() {
          return this.flags;
        }
        turnOn(e) {
          const t = this.flags;
          this.flags |= e, this.flags !== t && this.impServed && r.MessageHandler.sendMessage({
            [a.TPSDataMapping.scriptDynamicFlags]: this.flags
          });
        }
        handleImpressionServed() {
          this.impServed = !0, r.MessageHandler.sendMessage({
            [a.TPSDataMapping.scriptDynamicFlags]: this.flags
          });
        }
      }
      t.ScriptDynamicFlags = s;
    },
    7429: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EventIdGeneratorAdaptor = t.SequenceIdGeneratorClass = void 0;
      class i {
        constructor() {
          this.sequenceId = 1;
        }
        getNext() {
          return this.sequenceId++;
        }
      }
      t.SequenceIdGeneratorClass = i, t.EventIdGeneratorAdaptor = new i();
    },
    3971: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.StandardSizes = t.StandardSizesClass = void 0;
      const r = i(712);
      class a {
        constructor() {
          this.DisplayStandardSizes = [{
            width: 88,
            height: [31]
          }, {
            width: 100,
            height: [150]
          }, {
            width: 120,
            height: [20, 60, 90, 240, 600, 800]
          }, {
            width: 125,
            height: [125]
          }, {
            width: 160,
            height: [600, 800]
          }, {
            width: 168,
            height: [28]
          }, {
            width: 180,
            height: [150, 160, 600]
          }, {
            width: 184,
            height: [90]
          }, {
            width: 200,
            height: [90, 112, 200, 446]
          }, {
            width: 215,
            height: [125]
          }, {
            width: 216,
            height: [36]
          }, {
            width: 220,
            height: [90]
          }, {
            width: 234,
            height: [60]
          }, {
            width: 240,
            height: [133, 400]
          }, {
            width: 250,
            height: [60, 250, 300, 360, 600]
          }, {
            width: 270,
            height: [202, 460]
          }, {
            width: 272,
            height: [220]
          }, {
            width: 275,
            height: [300]
          }, {
            width: 292,
            height: [30]
          }, {
            width: 300,
            height: [31, 50, 90, 100, 200, 225, 250, 268, 413, 600, 618, 850, 1050]
          }, {
            width: 310,
            height: [175]
          }, {
            width: 315,
            height: [300]
          }, {
            width: 320,
            height: [20, 50, 75, 100, 320, 360, 480]
          }, {
            width: 336,
            height: [280, 600, 850]
          }, {
            width: 350,
            height: [50, 200]
          }, {
            width: 375,
            height: [20, 60, 150]
          }, {
            width: 400,
            height: [225]
          }, {
            width: 405,
            height: [303]
          }, {
            width: 415,
            height: [20]
          }, {
            width: 440,
            height: [225, 300]
          }, {
            width: 468,
            height: [60]
          }, {
            width: 550,
            height: [310, 480]
          }, {
            width: 580,
            height: [400]
          }, {
            width: 600,
            height: [400]
          }, {
            width: 610,
            height: [100]
          }, {
            width: 613,
            height: [460]
          }, {
            width: 640,
            height: [90, 360, 480]
          }, {
            width: 700,
            height: [400, 500]
          }, {
            width: 728,
            height: [90, 120]
          }, {
            width: 745,
            height: [90]
          }, {
            width: 750,
            height: [30, 100, 200]
          }, {
            width: 800,
            height: [600]
          }, {
            width: 900,
            height: [240]
          }, {
            width: 930,
            height: [180, 600]
          }, {
            width: 950,
            height: [90]
          }, {
            width: 954,
            height: [60]
          }, {
            width: 960,
            height: [90]
          }, {
            width: 970,
            height: [30, 66, 90, 250, 415, 550]
          }, {
            width: 980,
            height: [90, 120]
          }, {
            width: 1e3,
            height: [125]
          }, {
            width: 1008,
            height: [150]
          }, {
            width: 1140,
            height: [200]
          }, {
            width: 1250,
            height: [155]
          }, {
            width: 1280,
            height: [100]
          }, {
            width: 1680,
            height: [900]
          }], this.sizeCompare = (e, t) => e.width > t.width ? 1 : e.width < t.width ? -1 : 0, this.SpotXStandardSizes = [{
            width: 320,
            height: [240]
          }, {
            width: 400,
            height: [300]
          }, {
            width: 450,
            height: [338]
          }, {
            width: 500,
            height: [375]
          }, {
            width: 600,
            height: [800]
          }, {
            width: 640,
            height: [360]
          }, {
            width: 854,
            height: [480]
          }].concat(this.DisplayStandardSizes).sort(this.sizeCompare), this.VideoStandardSizes = [{
            width: 150,
            height: [90]
          }, {
            width: 270,
            height: [150]
          }, {
            width: 300,
            height: [150, 340]
          }, {
            width: 320,
            height: [570]
          }, {
            width: 360,
            height: [100, 640]
          }, {
            width: 375,
            height: [210, 670]
          }, {
            width: 415,
            height: [740]
          }, {
            width: 420,
            height: [240]
          }, {
            width: 450,
            height: [250]
          }, {
            width: 480,
            height: [270]
          }, {
            width: 510,
            height: [290]
          }, {
            width: 580,
            height: [330]
          }, {
            width: 610,
            height: [340]
          }, {
            width: 670,
            height: [380]
          }, {
            width: 740,
            height: [410]
          }, {
            width: 770,
            height: [1020]
          }, {
            width: 780,
            height: [440]
          }, {
            width: 800,
            height: [450]
          }, {
            width: 900,
            height: [500]
          }, {
            width: 1020,
            height: [580, 770]
          }, {
            width: 1280,
            height: [720, 800]
          }, {
            width: 1330,
            height: [660]
          }, {
            width: 1370,
            height: [770]
          }, {
            width: 1440,
            height: [900]
          }, {
            width: 1540,
            height: [860]
          }, {
            width: 1920,
            height: [1080]
          }].concat(this.DisplayStandardSizes).sort(this.sizeCompare);
        }
        getSizesTable(e) {
          switch (e) {
            case r.StandardSizeType.Display:
              return this.DisplayStandardSizes;
            case r.StandardSizeType.Video:
              return this.VideoStandardSizes;
            default:
              return this.SpotXStandardSizes;
          }
        }
        getNearestAdSize(e, t, i) {
          let r = this.getSizesTable(t);
          switch (i) {
            case 5:
              return this.getNearestStandardAdSize(e, 5, r);
            case 20:
              return this.getNearestStandardAdSize(e, 20, r);
            default:
              return this.getNearestStandardAdSize(e, 15, r);
          }
        }
        isStandardAdSize(e, t, i) {
          return null != this.getNearestAdSize(e, t, i);
        }
        getNearestStandardAdSize(e, t, i) {
          let r = null;
          if (e && e.width && e.height) {
            let a = e.width,
              n = e.height,
              s = i.length,
              o = 0,
              d = 0,
              l = Number.MAX_VALUE,
              c = Number.MAX_VALUE;
            for (; d < s && a + t >= i[d].width;) {
              let e = Math.abs(a - i[d].width);
              if (e <= t) {
                o = i[d].height.length;
                let a = 0;
                for (; a < o && n + t >= i[d].height[a];) {
                  let s = Math.abs(n - i[d].height[a]);
                  if (s <= t) if (e + s < l) c = i[d].width * i[d].height[a], l = e + s, r = {
                    width: i[d].width,
                    height: i[d].height[a]
                  };else if (e + s == l) {
                    let e = i[d].width * i[d].height[a];
                    e < c && (c = e, r = {
                      width: i[d].width,
                      height: i[d].height[a]
                    });
                  }
                  a++;
                }
              }
              d++;
            }
          }
          return r;
        }
      }
      t.StandardSizesClass = a, t.StandardSizes = new a();
    },
    3380: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Utilities = t.UtilitiesClass = void 0;
      const r = i(363),
        a = i(3868);
      class n {
        constructor() {
          this.loadTime = this.getCurrentTime(), this.MAX_GET_URL_LENGTH = 8040;
        }
        isExceedingMaxUrlLength(e) {
          return e > this.MAX_GET_URL_LENGTH;
        }
        getScriptLoadedMS() {
          return this.loadTime;
        }
        setLoadVisitTime() {
          this.loadVisitTime = this.getCurrentTime();
        }
        getVersion() {
          return 4515;
        }
        getCurrentTime() {
          return (Date.now || new Date().getTime)();
        }
        getNavigationStartTime(e) {
          const t = e ? a.WindowAdaptor.windowTop() : dvWindow;
          return t && t.performance && t.performance.timing && t.performance.timing.navigationStart;
        }
        getTimeDiff(e) {
          return e || (e = this.getCurrentTime()), Math.abs(e - this.loadTime);
        }
        getVisitTimeDiff() {
          const e = this.getCurrentTime();
          return Math.abs(e - (this.loadVisitTime || e));
        }
        getTimeDiffNoAbs(e) {
          return e || (e = this.getCurrentTime()), e - this.loadTime;
        }
        merge(e, t) {
          if (e && t) return e.concat(t).filter((e, t, i) => i.indexOf(e) == t);
        }
        isEmpty(e) {
          return !e || 0 == Object.keys(e).length;
        }
        isNullOrEmpty(e) {
          return null == e || "" === e;
        }
        extend(e, t) {
          e && !this.isEmpty(e) && t && Object.keys(e).forEach(i => t[i] = e[i]);
        }
        times(e, t) {
          e > 0 && (t(), this.times(e - 1, t));
        }
        mapData(e, t, i = !1) {
          return Object.keys(t).reduce((r, a) => {
            let n = t[a];
            return n && !this.isNullOrEmpty(e[a]) && (r[n] = e[a], i && delete t[a]), r;
          }, {});
        }
        startsWith(e, t, i = !1) {
          return e = i ? e.toLowerCase() : e, t = i ? t.toLowerCase() : t, 0 == e.indexOf(t, 0);
        }
        deepComparison(e, t, i) {
          let r = 0;
          return e && t ? (Object.keys(i).filter(i => !this.equal(e[i], t[i], !0)).forEach(e => {
            r |= i[e];
          }), r) : -1;
        }
        removeDuplicateValues(e, t) {
          e && t && Object.keys(e).filter(i => this.isNullOrEmpty(e[i]) || e[i] == t[i]).forEach(t => delete e[t]);
        }
        equal(e, t, i = !1) {
          return (e = i && e && e.toString().toLowerCase() || e) == (t = i && t && t.toString().toLowerCase() || t) || this.isNullOrEmpty(e) && this.isNullOrEmpty(t);
        }
        getElementsDistance(e, t) {
          let i = -1;
          if (e && t) {
            if (e == t) i = 0;else {
              let r = this.getElementParentsList(e),
                a = this.getElementParentsList(t);
              if (r[0] != a[0]) i = -1;else {
                for (; r.length > 0 && a.length > 0 && r[0] == a[0];) r.shift(), a.shift();
                i = r.length + a.length;
              }
            }
          } else i = -1;
          return i;
        }
        getElementParent(e) {
          if (e) return e.parentNode;
        }
        getElementParentsList(e) {
          let t = [];
          if (e) {
            let i = this.getElementParent(e);
            for (; i;) t.unshift(i), i = this.getElementParent(i);
          }
          return t;
        }
        isInAppSupported(e) {
          return e && e.some(e => 3 == e);
        }
        isCtvSupported(e) {
          return e && e.some(e => 4 == e);
        }
        isLargeAd(e, t, i) {
          return !(!e || i) && e.height * e.width >= t;
        }
        getIabVisiblePercentage(e, t) {
          let i = e.percentage,
            r = e.offScreenPercentage;
          return null != r && t ? r : i;
        }
        isIabPageInFocus(e, t) {
          return t ? e.strictFocus : e.focus;
        }
        isVideoElement(e) {
          return e && e.nodeName && "video" == e.nodeName.toLocaleLowerCase();
        }
        appendCacheBuster(e, t) {
          return this.appendParamToQueryString(e, t, r.RandomUtils.getRandom16());
        }
        appendParamToQueryString(e, t, i) {
          let r = "";
          return null != e && 0 == e.indexOf("http") && (-1 != e.indexOf("?") ? "&" != e.slice(-1) && (r = "&") : r = "?", e = `${e}${r}${t}=${i}`), e;
        }
        resolveMacros(e, t) {
          let i = Object.keys(t).reduce((e, i) => (e[i.toUpperCase()] = t[i], e), {});
          return e.replace("[DV_PROTOCOL]", i.DV_PROTOCOL).replace("[PROTOCOL]", i.PROTOCOL).replace(/\[(.*?)\]/g, (e, t) => {
            let r = i[t];
            return t.indexOf("URL") > -1 && r ? decodeURIComponent(r) : (null == r && (r = "[" + t + "]"), encodeURIComponent(r));
          });
        }
        updateDynamicParamsFlags(e, t) {
          e && e.length > 0 && t && (t.dvf = e.filter(e => !!e).join(","));
        }
        getQueryString(e, i, r, a) {
          const n = t.Utilities.mapData(e, a);
          return t.Utilities.extend(i, n), this.updateDynamicParamsFlags(r, n), this.serializeObjectToQueryString(n, !1);
        }
        serializeObjectToQueryString(e, t) {
          return Object.keys(e).filter(t => void 0 !== e[t]).map(i => `${i}=${t ? encodeURIComponent(e[i]) : e[i]}`).join("&").trim();
        }
        isQueryLengthBelowBrowserLimit(e, t, i, r, a) {
          let n = !0;
          try {
            n = this.getQueryString(e, t, i, r).length + a.length <= 7e3;
          } catch (e) {}
          return n;
        }
        getElementVisiblePercentage(e, t) {
          if (!e || !t || null == t.height || null == t.width) return;
          if (this.checkIfElementOutOfViewport(e, t) || e.width <= 0 || e.height <= 0) return 0;
          let i = this.getVisibleWidth(e, t),
            r = this.getVisibleHeight(e, t);
          return Math.round(i * r / (e.width * e.height) * 100);
        }
        checkIfElementOutOfViewport(e, t) {
          return e.bottom <= 0 || e.bottom <= 0 || e.right <= 0 || e.top >= t.height || e.left >= t.width;
        }
        getVisibleHeight(e, t) {
          let i = e.height;
          return e.top < 0 ? i = e.height + e.top : e.top + e.height > t.height && (i = t.height - e.top), Math.min(i, t.height);
        }
        getVisibleWidth(e, t) {
          let i = e.width;
          return e.left < 0 ? i = e.width + e.left : e.left + e.width > t.width && (i = t.width - e.left), Math.min(i, t.width);
        }
        arrayLikeToArray(e) {
          if (e) return Array.prototype.slice.call(e);
        }
        DOMStringListToArray(e) {
          let t = [];
          return e && (t = Array.prototype.slice.call(e)), t;
        }
        isHostTypeURL(e) {
          try {
            const t = new URL(e);
            return this.isNullOrEmpty(t.pathname) || "/" == t.pathname;
          } catch (e) {}
        }
        getElementOffsetFromScreen(e) {
          let t = 0,
            i = 0;
          try {
            if (e.getBoundingClientRect()) {
              let r = e.getBoundingClientRect();
              t = r.left, i = r.top;
            }
            for (e = e.parentElement; e;) {
              if (e.tagName && "iframe" === e.tagName.toLowerCase() && e.getBoundingClientRect()) {
                let r = e.getBoundingClientRect();
                t += r.left, i += r.top;
              }
              e = e.parentElement;
            }
          } catch (e) {
            t = -1, i = -1;
          }
          return {
            top: i,
            left: t
          };
        }
        isPercentageCriteriaPassed(e) {
          return !(null == e || e > 100 || e < 0) && 100 * Math.random() <= e;
        }
        getValBetweenMinAndMax(e, t, i) {
          return e > t ? e < i ? e : i : t;
        }
        isEmptyObject(e) {
          return 0 === Object.keys(e).length;
        }
        objectValues(e) {
          return Object.keys(e).map(t => e[t]);
        }
        getParamValue(e, t) {
          if (null != e) {
            let i = new RegExp("[\\?#&](" + t + ")=([^&#?]*)", "gi").exec(e);
            if (null != i && null != i[2]) return i[2];
          }
          return null;
        }
        checkIfObjIsPartiallyInArray(e, t) {
          return t.filter(t => {
            let i = !0;
            return Object.keys(e).forEach(r => {
              i = i && t[r] === e[r];
            }), i;
          }).length > 0 ? e : {};
        }
        getRandom() {
          let e = 1,
            t = Math.floor(10 * Math.random()) + 1;
          for (let i = 0; i < t; ++i) e *= Math.random();
          return e;
        }
        generateGuid() {
          return new Date().getTime() * this.getRandom() + "";
        }
        logDvSignal(e) {
          try {
            const {
              $logDvSignal: t
            } = a.WindowAdaptor.workingWindow();
            t && "function" == typeof t && t(e);
          } catch (e) {}
        }
        extractElementType(e) {
          var t;
          switch (null === (t = null == e ? void 0 : e.tagName) || void 0 === t ? void 0 : t.toUpperCase()) {
            case "IFRAME":
              return 1;
            case "SPAN":
              return 2;
            case "DIV":
              return 3;
            case "HTML":
              return 4;
            case "VIDEO":
              return 5;
            case "CANVAS":
              return 7;
            case "SVG":
              return 8;
            case "VIDEO-CANVAS":
              return 9;
            case "IMG":
              return 6;
            default:
              return 0;
          }
        }
        isNumber(e) {
          return "number" == typeof e && isFinite(e);
        }
        convertToArray(e) {
          return e && e.length > 0 ? Array.prototype.slice.call(e) : [];
        }
        countBy(e) {
          let t = {};
          return e.forEach(e => {
            t[e] = t[e] ? t[e] + 1 : 1;
          }), t;
        }
        getKeyWithHighestValue(e) {
          return Object.keys(e).length > 0 ? Object.keys(e).reduce((t, i) => e[t] > e[i] ? t : i) : null;
        }
        generateAdler32Hash(e) {
          let t = 1,
            i = 0;
          for (let r = 0; r < e.length; r++) t += e.charCodeAt(r), i += t;
          return t %= 65521, i %= 65521, (i << 16 | t) >>> 0;
        }
      }
      t.UtilitiesClass = n, t.Utilities = new n();
    },
    7072: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DiscreteDistributionRandom = void 0;
      const i = 100;
      t.DiscreteDistributionRandom = class {
        static isValidDistribution(e) {
          var t, r;
          if (!(null == e ? void 0 : e.entries)) return !1;
          if (!e.entries.length) return !0;
          return !(!(null === (t = null == e ? void 0 : e.entries) || void 0 === t ? void 0 : t.length) || (null === (r = e.entries) || void 0 === r ? void 0 : r.some(({
            percentage: e
          }) => "number" != typeof e || e <= 0 || e > i))) && e.entries.reduce((e, {
            percentage: t
          }) => e + t, 0) <= i;
        }
        static createEntryRange(e, t) {
          return {
            value: e.value,
            min: t,
            max: t + e.percentage
          };
        }
        static createDistributionRanges(e) {
          const {
            percentagesSum: t,
            ranges: r
          } = e.entries.reduce((e, t) => {
            const i = this.createEntryRange(t, e.percentagesSum);
            return {
              ranges: [...e.ranges, i],
              percentagesSum: i.max
            };
          }, {
            percentagesSum: 0,
            ranges: []
          });
          return t < i ? [...r, {
            value: e.leftover,
            min: t,
            max: i
          }] : r;
        }
        static randomByRanges(e) {
          var t, r;
          const a = Math.random() * i;
          return null !== (r = null === (t = null == e ? void 0 : e.find(({
            min: e,
            max: t
          }) => e <= a && a < t)) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : null;
        }
        static random(e) {
          if (!this.isValidDistribution(e)) throw new Error("Provided discrete distribution is invalid - all percentages must be in (0,100], and their sum should be <= 100");
          const t = this.createDistributionRanges(e);
          return this.randomByRanges(t);
        }
      };
    },
    1966: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackAdaptor = t.VideoPlaybackAdaptorClass = void 0;
      const r = i(3868);
      class a {
        getOvvObject() {
          return r.WindowAdaptor.currentWindow().$ovv || r.WindowAdaptor.workingWindow().$ovv;
        }
        getADCObject() {
          return r.WindowAdaptor.workingWindow().ADCAdUnitEventManager;
        }
      }
      t.VideoPlaybackAdaptorClass = a, t.VideoPlaybackAdaptor = new a();
    },
    2897: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.FlashOVVWrapper = void 0;
      const r = i(425),
        a = i(1966);
      t.FlashOVVWrapper = class {
        constructor(e) {
          this.previousEvents = [], this.adVolume = null, this.callbacks = {}, this.viewabilityIntegrationType = 1;
          let t = a.VideoPlaybackAdaptor.getOvvObject();
          if (!t) return;
          this.player = this.findPlayer(e), t.subscribe(["AdSkippableStateChange", "AdSkipped", "AdUserClose", "AdStarted", "AdImpression", "AdVideoStart", "AdStopped", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdExpandedChange", "AdPaused", "AdPlaying", "AdVolumeChange", "AdClickThru"], e, this.eventHandler.bind(this), !0);
        }
        eventHandler(e, t) {
          try {
            "AdVolumeChange" == t.eventName && t.ovvArgs && null != t.ovvArgs.ovvData.volume && this.setAdVolume(t.ovvArgs.ovvData.volume), this.publish(t.eventName);
          } catch (e) {}
        }
        findPlayer(e) {
          try {
            let t = r.BrowserAdaptor.getElementsByTagNameFromDocument("embed");
            for (let i = 0; i < t.length; i++) if (t[i][e] || t[i]["onJsReady" + e]) return t[i];
            let i = r.BrowserAdaptor.getElementsByTagNameFromDocument("object");
            for (let t = 0; t < i.length; t++) if (i[t][e] || i[t]["onJsReady" + e]) return i[t];
          } catch (e) {}
          return null;
        }
        getPlayer() {
          return this.player;
        }
        getSlot() {
          return this.player;
        }
        getAdDuration() {}
        getAdSkippableState() {}
        getPreviousEvents() {
          return this.previousEvents;
        }
        getAdVolume() {
          return this.adVolume;
        }
        setAdVolume(e) {
          this.adVolume = e;
        }
        subscribe(e, t) {
          this.callbacks[t] ? this.callbacks[t].push(e) : this.callbacks[t] = [e];
        }
        publish(e) {
          if (this.previousEvents.push(e), this.callbacks[e]) for (let t in this.callbacks[e]) this.callbacks[e][t](e);
        }
        executeDVClientCallback() {}
      };
    },
    3121: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DvVideoWrapper = void 0;
      t.DvVideoWrapper = class {
        constructor() {
          this.subscriptionId = 1, this.subscribers = {}, this.previousEvents = {};
        }
        subscribe(e, t, i) {
          let r = [];
          for (let r in this.previousEvents[t]) e.some(e => e == this.previousEvents[t][r].eventName) && i(t, this.previousEvents[t][r]);
          for (let a in e) this.subscribers[e[a] + t] || (this.subscribers[e[a] + t] = []), this.subscriptionId++, this.subscribers[e[a] + t].push({
            func: i,
            subscriptionId: this.subscriptionId
          }), r.push(this.subscriptionId);
          return r;
        }
        unsubscribe(e) {
          e.forEach(e => {
            Object.keys(this.subscribers).forEach(t => {
              this.subscribers[t] = this.subscribers[t].filter(t => t.subscriptionId != e);
            });
          });
        }
        publish(e, t, i) {
          if (this.previousEvents[t] || (this.previousEvents[t] = []), this.previousEvents[t].push(i), e && t && this.subscribers[e + t] instanceof Array) for (let r = 0; r < this.subscribers[e + t].length; r++) {
            let a = this.subscribers[e + t][r].func;
            a && "function" == typeof a && a(t, i);
          }
        }
      };
    },
    1063: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VpaidWrapper = t.VpaidWrapperClass = void 0;
      const r = i(7749),
        a = i(3868),
        n = i(425),
        s = i(3350),
        o = i(3121),
        d = i(2897),
        l = i(712),
        c = i(749),
        u = i(8379);
      class p {
        start() {
          try {
            let e = {
              name: "VpaidWrapper",
              message: void 0
            };
            if (r.DvTagDataObject.getTagType() != l.DvTagType.Video) return;
            this.currentWindow = a.WindowAdaptor.currentWindow(), this.adid = r.DvTagDataObject.getAdID(), this.adid ? (this.dvVpaid = new o.DvVideoWrapper(), this.vpaidWrapper = this.getVpaidWrapper(), this.vpaidWrapper ? this.createAdAsset(this.adid) ? this.subscribeToVpaidEvents(this.vpaidEventHandler.bind(this)) ? this.handlePreviousEvents() : e.message = "Failed to subscribe vpaid events" : e.message = "Failed to create ad asset" : e.message = "Failed to get vpaid wrapper") : e.message = "Failed to get adid", e.message && (this.dvVpaid = void 0, c.MessageHandler.sendMessage({
              dvp_vperr: e.message
            }));
          } catch (e) {
            this.dvVpaid = void 0, c.MessageHandler.sendError(l.ClientErrorType.MeasurementError, e, "VPaidWrapper");
          }
        }
        getDvVpaid() {
          return this.dvVpaid;
        }
        isSupported() {
          try {
            return "function" == typeof a.WindowAdaptor.workingWindow().getVPAIDAd || this.adid && "function" == typeof a.WindowAdaptor.workingWindow()[this.adid];
          } catch (e) {
            return !1;
          }
        }
        getIntegrationType() {
          return 1;
        }
        getVpaidWrapper() {
          try {
            if ("function" == typeof a.WindowAdaptor.workingWindow()[this.adid]) {
              let e = a.WindowAdaptor.workingWindow()[this.adid]();
              return e.viewabilityIntegrationType = 2, e;
            }
            return new d.FlashOVVWrapper(this.adid);
          } catch (e) {
            return;
          }
        }
        getPrevEvents() {
          return this.vpaidWrapper.getPreviousEvents ? "function" == typeof this.vpaidWrapper.getPreviousEvents ? this.vpaidWrapper.getPreviousEvents() : this.vpaidWrapper.getPreviousEvents : [];
        }
        handlePreviousEvents() {
          let e = this.getPrevEvents();
          for (let t of e) this.vpaidEventHandler(t);
        }
        getAdVolume() {
          return this.vpaidWrapper.getAdVolume();
        }
        getAdMute() {
          let e = this.getPlayer();
          if (e) {
            let t = e.muted;
            if (void 0 === t) return 0;
            if ("boolean" == typeof t) return Number(t);
          }
          return u.NOT_FOUND_OR_ERROR;
        }
        vpaidEventHandler(e) {
          if (this.dvVpaid) {
            let t = {
              eventName: e,
              eventTime: void 0,
              ovvArgs: {
                ovvData: {
                  objLeft: void 0,
                  objRight: void 0,
                  objTop: void 0,
                  objBottom: void 0,
                  percentViewable: void 0,
                  volume: this.getAdVolume(),
                  muted: this.getAdMute(),
                  adSkippableState: this.getAdSkippableState()
                }
              }
            };
            this.dvVpaid.publish(e, this.adid, t);
          }
        }
        subscribeToVpaidEvents(e) {
          try {
            return this.vpaidWrapper.subscribe(function () {
              e("AdLoaded");
            }, "AdLoaded"), this.vpaidWrapper.subscribe(function () {
              e("AdImpression");
            }, "AdImpression"), this.vpaidWrapper.subscribe(function () {
              e("AdStopped");
            }, "AdStopped"), this.vpaidWrapper.subscribe(function () {
              e("AdError");
            }, "AdError"), this.vpaidWrapper.subscribe(function () {
              e("AdStarted");
            }, "AdStarted"), this.vpaidWrapper.subscribe(function () {
              e("AdSkipped");
            }, "AdSkipped"), this.vpaidWrapper.subscribe(function () {
              e("AdPaused");
            }, "AdPaused"), this.vpaidWrapper.subscribe(function () {
              e("AdSizeChange");
            }, "AdSizeChange"), this.vpaidWrapper.subscribe(function () {
              e("AdPlaying");
            }, "AdPlaying"), this.vpaidWrapper.subscribe(function () {
              e("AdExpandedChange");
            }, "AdExpandedChange"), this.vpaidWrapper.subscribe(function () {
              e("AdSkippableStateChange");
            }, "AdSkippableStateChange"), this.vpaidWrapper.subscribe(function () {
              e("AdLinearChange");
            }, "AdLinearChange"), this.vpaidWrapper.subscribe(function () {
              e("AdVideoStart");
            }, "AdVideoStart"), this.vpaidWrapper.subscribe(function () {
              e("AdUserAcceptInvitation");
            }, "AdUserAcceptInvitation"), this.vpaidWrapper.subscribe(function () {
              e("AdUserClose");
            }, "AdUserClose"), this.vpaidWrapper.subscribe(function () {
              e("AdUserMinimize");
            }, "AdUserMinimize"), this.vpaidWrapper.subscribe(function () {
              e("AdClickThru");
            }, "AdClickThru"), this.vpaidWrapper.subscribe(function () {
              e("AdInteraction");
            }, "AdInteraction"), this.vpaidWrapper.subscribe(function () {
              e("AdDurationChange");
            }, "AdDurationChange"), this.vpaidWrapper.subscribe(function () {
              e("AdRemainingTimeChange");
            }, "AdRemainingTimeChange"), this.vpaidWrapper.subscribe(function () {
              e("AdVolumeChange");
            }, "AdVolumeChange"), this.vpaidWrapper.subscribe(function () {
              e("AdVideoFirstQuartile");
            }, "AdVideoFirstQuartile"), this.vpaidWrapper.subscribe(function () {
              e("AdVideoMidpoint");
            }, "AdVideoMidpoint"), this.vpaidWrapper.subscribe(function () {
              e("AdVideoThirdQuartile");
            }, "AdVideoThirdQuartile"), this.vpaidWrapper.subscribe(function () {
              e("AdVideoComplete");
            }, "AdVideoComplete"), !0;
          } catch (e) {
            return !1;
          }
        }
        getPlayer() {
          let e;
          try {
            e = "function" == typeof this.vpaidWrapper.getPlayer ? this.vpaidWrapper.getPlayer() : this.vpaidWrapper.getPlayer, n.BrowserAdaptor.smartInstanceof(e, "HTMLElement", this.currentWindow) || (e = this.vpaidWrapper.getSlot());
          } catch (t) {
            e = void 0;
          }
          return e;
        }
        getAdSkippableState() {
          let e;
          try {
            e = "function" == typeof this.vpaidWrapper.getAdSkippableState ? this.vpaidWrapper.getAdSkippableState() : this.vpaidWrapper.adSkippableState;
          } catch (e) {}
          return e;
        }
        getAdDuration() {
          let e;
          try {
            e = "function" == typeof this.vpaidWrapper.getAdDuration ? this.vpaidWrapper.getAdDuration() : this.vpaidWrapper.adDuration;
          } catch (e) {}
          return e;
        }
        getExecuteDVClientCallback() {
          if ("function" == typeof this.vpaidWrapper.executeDVClientCallback) return this.vpaidWrapper.executeDVClientCallback;
        }
        createAdAsset(e) {
          let t = this.getPlayer();
          const i = this.getAdDuration(),
            r = this.getAdSkippableState();
          if (t) {
            let a = this.getExecuteDVClientCallback(),
              n = new s.AdAsset(e, t, i, r, a);
            return this.dvVpaid.asset = n, this.dvVpaid.viewabilityIntegrationType = this.vpaidWrapper.viewabilityIntegrationType, !0;
          }
          return !1;
        }
      }
      t.VpaidWrapperClass = p, t.VpaidWrapper = new p();
    },
    3868: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WindowAdaptor = t.WindowAdaptorClass = void 0;
      const r = i(3380),
        a = i(2614),
        n = i(194);
      class s {
        constructor() {
          this.topWinAvailable = !0, this.maxIterations = 1e3, this.trafficScenarioType = 0;
        }
        currentWindow() {
          return dvWindow;
        }
        currentDocument() {
          return document;
        }
        workingWindow() {
          return n.DvObject.isInjectedAsSibling() ? this.currentWindow() : this.currentWindow().parent;
        }
        workingDocument(e = this.workingWindow()) {
          let t;
          return e && (t = e.document), t;
        }
        workingBody(e = this.workingDocument()) {
          let t;
          return e && (t = e.body), t;
        }
        workingDocumentElement() {
          let e,
            t = this.workingDocument();
          return t && (e = t.documentElement), e;
        }
        windowTop(e) {
          if (this.topWinAvailable || e) try {
            if (e) return this.currentWindow().top;
            if (this.currentWindow().top.document) return this.currentWindow().top;
          } catch (e) {
            this.topWinAvailable = !1;
          }
        }
        isTop(e) {
          return e == this.windowTop(!0);
        }
        documentTop() {
          let e,
            t = this.windowTop();
          return t && (e = t.document), e;
        }
        getWindowParent(e, t) {
          try {
            if (t) return e.parent;
            if (e.parent.document) return e.parent;
          } catch (e) {}
        }
        windowName() {
          return this.currentWindow().name || (this.currentWindow().frameElement ? this.currentWindow().frameElement.id : "");
        }
        getFrameElement(e) {
          try {
            return e !== this.currentWindow() && 128 == (128 & this.getScenarioType()) ? null : e && e.frameElement;
          } catch (e) {}
        }
        getIframeWindow(e) {
          if (e) return e.contentWindow;
        }
        getDefaultWindow(e) {
          try {
            if (!e || !e.ownerDocument) return;
            return e.ownerDocument.defaultView;
          } catch (e) {}
        }
        getElementWindowDimensions(e) {
          try {
            const t = this.getDefaultWindow(e);
            return t ? (({
              innerHeight: e,
              innerWidth: t
            }) => ({
              height: e,
              width: t
            }))(t) : null;
          } catch (e) {}
        }
        isDomlessEnvironment() {
          return !1;
        }
        isIOS() {
          try {
            const e = this.workingWindow().navigator;
            return (/iPhone|iPad|iPod|\(Apple TV|iOS|Coremedia|CFNetwork\/.*Darwin/i.test(e.userAgent) || e.vendor && "apple, inc." === e.vendor.toLowerCase()) && !this.workingWindow().MSStream;
          } catch (e) {}
        }
        getWindowProtocol() {
          return "https:";
        }
        setTopAccessibleWindow() {
          let e = this.workingWindow();
          try {
            let t = 0;
            for (; !this.isTop(e) && t < this.maxIterations;) {
              const i = this.getWindowParent(e, !0);
              if (!i.document) break;
              e = i, t++;
            }
          } catch (e) {}
          this.topAccessibleWindow = e;
        }
        getTopAccessibleWindow() {
          return this.topAccessibleWindow || this.setTopAccessibleWindow(), this.topAccessibleWindow;
        }
        setScenarioType() {
          this.isTop(this.workingWindow()) ? this.trafficScenarioType |= 1 : this.isTop(this.getTopAccessibleWindow()) ? this.trafficScenarioType |= 2 : this.trafficScenarioType |= 128, n.DvObject.isRestrictedAccess() && (this.trafficScenarioType |= 8), n.DvObject.isInjectedAsSibling() && (this.trafficScenarioType |= 16);
        }
        getScenarioType() {
          return this.trafficScenarioType || this.setScenarioType(), this.trafficScenarioType;
        }
        objectLookup(e, t, i) {
          try {
            const r = e[t];
            if (r) return r;
            if (!this.isTop(e) && i > 0) return this.objectLookup(this.getWindowParent(e, !0), t, i - 1);
          } catch (e) {}
        }
        getUserAgent() {
          return this.workingWindow().navigator && this.workingWindow().navigator.userAgent;
        }
        monitorScriptsPerformance(e, t) {
          let i = {};
          try {
            if (!e.performance || !e.performance.getEntries) return i;
            const a = e.performance.getEntries();
            for (let e of a) {
              const a = e.name.match(/.*\/(.+?)\./);
              if (!a || !a[1]) continue;
              const n = a[1].replace(/\d+$/, ""),
                s = t[n];
              if (s && s.length) {
                for (let t of s) i[`${n}_${t}`] = Math.round(e[t]);
                if (delete t[n], r.Utilities.isEmpty(t)) break;
              }
            }
          } catch (e) {}
          return i;
        }
        monitorFrameScriptsPerformance(e, t) {
          let i = {};
          if (!e.frames || !e.frames.length) return i;
          for (let a of r.Utilities.arrayLikeToArray(e.frames)) if (i = this.monitorScriptsPerformance(a, t), r.Utilities.isEmpty(t)) return i;
        }
        getVisibilityState() {
          try {
            return this.workingDocument().visibilityState;
          } catch (e) {}
        }
        getNavigator() {
          return this.currentWindow().navigator;
        }
        isCryptoSupported() {
          return "undefined" != typeof crypto;
        }
        isMessageChannelSupported() {
          return "undefined" != typeof MessageChannel;
        }
        isPostMessageSupported(e = this.workingWindow()) {
          return e && "function" == typeof e.postMessage;
        }
        isNodeSupported() {
          return "undefined" != typeof Node;
        }
        getCurrentScript() {
          return this.currentDocument().currentScript;
        }
        isPerformanceAPISupported() {
          let e = this.currentWindow();
          return !(!e.performance || "function" != typeof e.performance.mark || "function" != typeof e.performance.measure || "function" != typeof e.performance.getEntriesByName);
        }
        getNumberOfCores() {
          if (this.getNavigator()) return this.getNavigator().hardwareConcurrency;
        }
        setGlobalVariable(e, t) {
          window[e] = t;
        }
      }
      t.WindowAdaptorClass = s;
      const o = n.DvObject.getDvObject(),
        d = o && o.isDomlessEnvironment;
      t.WindowAdaptor = d ? new a.WindowOmidAdaptorClass() : new s();
    },
    2614: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WindowOmidAdaptorClass = t.WindowMock = void 0;
      t.WindowMock = class {
        getWindowMockInstance() {
          return {
            location: {
              protocol: "https:"
            },
            document: {
              body: {
                insertBefore: function (e, t) {}
              },
              getElementById: function (e) {},
              createElement: function (e) {},
              querySelectorAll: function (e) {}
            }
          };
        }
      };
      t.WindowOmidAdaptorClass = class {
        constructor() {
          this.windowMock = dvWindow;
        }
        currentWindow() {
          return this.windowMock;
        }
        currentDocument() {
          return this.currentWindow().document;
        }
        workingWindow() {
          return this.currentWindow();
        }
        workingBody() {
          return this.currentWindow().document.body;
        }
        workingDocument() {
          return this.currentDocument();
        }
        workingDocumentElement() {}
        windowTop(e) {
          return this.currentWindow();
        }
        isTop(e) {
          return !0;
        }
        documentTop() {
          return this.currentDocument();
        }
        getWindowParent(e, t) {}
        windowName() {
          return "";
        }
        getIframeWindow(e) {}
        getFrameElement(e) {}
        getDefaultWindow(e) {}
        isDomlessEnvironment() {
          return !0;
        }
        isIOS() {
          return !0;
        }
        getWindowProtocol() {
          return "https:";
        }
        getTopAccessibleWindow() {
          return this.workingWindow();
        }
        getScenarioType() {
          return 4;
        }
        objectLookup(e, t, i) {}
        getUserAgent() {}
        monitorScriptsPerformance(e, t) {
          return {};
        }
        monitorFrameScriptsPerformance(e, t) {
          return {};
        }
        getVisibilityState() {}
        getNavigator() {}
        isCryptoSupported() {
          return "undefined" != typeof crypto;
        }
        isMessageChannelSupported() {
          return !1;
        }
        isPostMessageSupported() {
          return !1;
        }
        isNodeSupported() {
          return "undefined" != typeof Node;
        }
        getCurrentScript() {}
        isPerformanceAPISupported() {
          return !1;
        }
        getNumberOfCores() {}
        setGlobalVariable(e, t) {
          globalThis[e] = t;
        }
      };
    },
    630: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidImpressionType = t.OmidAdEventType = t.OmidCreativeType = t.OmidAccessModeString = void 0, t.OmidAccessModeString = {
        FULL: "full",
        DOMAIN: "domain",
        LIMITED: "limited"
      }, t.OmidCreativeType = {
        UNKNOWN: "unknown",
        NATIVE_DISPLAY: "nativeDisplay",
        HTML_DISPLAY: "htmlDisplay",
        VIDEO: "video",
        AUDIO: "audio"
      }, t.OmidAdEventType = {
        IMPRESSION: "impression",
        LOADED: "loaded",
        GEOMETRY_CHANGE: "geometryChange",
        SESSION_START: "sessionStart",
        SESSION_ERROR: "sessionError",
        SESSION_FINISH: "sessionFinish",
        MEDIA: "media",
        VIDEO: "video",
        START: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        PAUSE: "pause",
        RESUME: "resume",
        BUFFER_START: "bufferStart",
        BUFFER_FINISH: "bufferFinish",
        SKIPPED: "skipped",
        VOLUME_CHANGE: "volumeChange",
        PLAYER_STATE_CHANGE: "playerStateChange",
        AD_USER_INTERACTION: "adUserInteraction"
      }, t.OmidImpressionType = {
        DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
        UNSPECIFIED: "unspecified",
        LOADED: "loaded",
        BEGIN_TO_RENDER: "beginToRender",
        ONE_PIXEL: "onePixel",
        VIEWABLE: "viewable",
        AUDIBLE: "audible",
        OTHER: "other",
        UNKNOWN: "unknown"
      };
    },
    5492: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdColonyMethod = t.AdColonyMethodClass = void 0;
      const r = i(712),
        a = i(6681),
        n = i(425);
      class s {
        constructor() {
          this.exposureChangeRegistered = !1;
        }
        isSupported(e) {
          let t, i, r, n, s;
          try {
            if (!a.MraidWrapper.isSupported()) return !1;
            s = a.MraidWrapper.runMraidFunctionSafely("getSDKVersion");
            let e = s.split(".");
            t = e[0], i = e[1], r = t > 3 || 3 == t && i >= 4, n = a.MraidWrapper.isAdColony();
          } catch (e) {}
          return !(!r || !n) && (e.mraidVersion = s.toString(), !0);
        }
        registerExposureChange() {
          this.exposureChangeRegistered || (a.MraidWrapper.runMraidRegisterSafely("exposureChange", this.handleExposureChangeEvent.bind(this)), this.exposureChangeRegistered = !0);
        }
        getAdCandidateAssets(e) {
          if (a.MraidWrapper.getIsMraidReady()) return this.registerExposureChange(), {
            viewportSize: this.getViewportSize(),
            screenSize: this.getScreenSize(),
            adGeometric: a.MraidWrapper.runMraidFunctionSafely("getDefaultPosition"),
            percentage: this.viewabilityPercentage,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize() {
          return a.MraidWrapper.runMraidFunctionSafely("getScreenSize");
        }
        getScreenSize() {
          let e, t;
          const i = this.getViewportSize();
          return {
            height: e,
            width: t
          } = i || n.BrowserAdaptor.getScreenSize(), {
            height: e,
            width: t
          };
        }
        getMethodId() {
          return r.ViewabilityCalculationType.AdColonyMraid;
        }
        destroyAdCandidateMethod() {}
        handleExposureChangeEvent(e) {
          this.viewabilityPercentage = e;
        }
      }
      t.AdColonyMethodClass = s, t.AdColonyMethod = new s();
    },
    8253: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AmpIntersectionObserverMethod = t.AmpIntersectionObserverMethodClass = void 0;
      const r = i(425),
        a = i(712),
        n = i(3868),
        s = i(3946),
        o = i(7537);
      class d extends o.WebCalculationMethodBase {
        isSupported(e) {
          const t = e.windowElement,
            i = s.BrowserDetector.getBrowserId() != a.Browser.IE || parseInt(s.BrowserDetector.getBrowserVersion()) > 11,
            r = 128 == (128 & n.WindowAdaptor.getScenarioType());
          return i && r && !(!t.context || !t.context.observeIntersection);
        }
        getAdCandidateAssets(e) {
          const t = e.domElement,
            i = this.getWrapperSize(e);
          this.init(e);
          const a = r.BrowserAdaptor.getBoundingClientRect(t),
            n = this.getAdViewablePercentage(e);
          let s = this.getAdPosition(e);
          return {
            viewportSize: this.getViewportSize(e.windowElement),
            wrapperSize: i,
            screenSize: this.getScreenSize(),
            adGeometric: {
              x: s.left,
              y: s.top,
              width: a.width,
              height: a.height
            },
            percentage: n,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize(e) {
          return r.BrowserAdaptor.getOuterViewport(e);
        }
        getMethodId() {
          return a.ViewabilityCalculationType.AmpIntersectionObserver;
        }
        destroyAdCandidateMethod(e) {
          e.ampIntersectionObserverStopFunction && e.ampIntersectionObserverStopFunction();
        }
        getAdViewablePercentage(e) {
          return e.intersectionObserverData ? 100 * e.intersectionObserverData.intersectionRatio : 0;
        }
        getAdPosition(e) {
          if (!e.intersectionObserverData) return {
            top: 0,
            left: 0
          };
          let t = e.intersectionObserverData.boundingClientRect;
          return {
            top: t.top,
            left: t.left
          };
        }
        init(e) {
          if (e.ampIntersectionObserverStopFunction) return;
          const t = e.windowElement,
            i = this.visibilityChangeCallback.bind(this, e);
          e.ampIntersectionObserverStopFunction = t.context.observeIntersection(i);
        }
        visibilityChangeCallback(e, t) {
          t.forEach(t => e.intersectionObserverData = t);
        }
      }
      t.AmpIntersectionObserverMethodClass = d, t.AmpIntersectionObserverMethod = new d();
    },
    2434: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = () => {
        window.isReady = !1, window.animateFrameRate = 0;
        let e = 0,
          t = 0;
        const i = requestAnimationFrame || webkitRequestAnimationFrame,
          r = function (t) {
            e++, i(r);
          };
        i(r), setInterval(() => {
          e < 10 && i(r), window.animateFrameRate = e - t, t = e;
        }, 100), setTimeout(() => {
          window.isReady = !0;
        }, 250);
      };
    },
    4254: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GeometricMethod = t.GeometricMethodClass = void 0;
      const r = i(425),
        a = i(3868),
        n = i(712),
        s = i(3380),
        o = i(749),
        d = i(7537);
      class l extends d.WebCalculationMethodBase {
        isSupported() {
          return !(128 == (128 & a.WindowAdaptor.getScenarioType()));
        }
        getAdCandidateAssets(e) {
          const t = e.domElement,
            i = e.windowElement,
            r = this.getAssetVisibleDimension(t, i),
            a = this.getAssetPercentageInViewRelativeToDirectParent(t, i),
            n = this.getViewportSize(),
            o = this.getWrapperSize(e),
            d = this.getOffScreenAssetVisibleDimension(r, i),
            l = this.getOffScreenViewportSize(i);
          let c = s.Utilities.getElementVisiblePercentage(r, n);
          c && a && (c *= a);
          const u = s.Utilities.getElementVisiblePercentage(d, l);
          return {
            viewportSize: n,
            wrapperSize: o,
            screenSize: this.getScreenSize(),
            adGeometric: {
              y: r.top,
              x: r.left,
              width: r.width,
              height: r.height
            },
            percentage: c,
            offScreenPercentage: u,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize() {
          return r.BrowserAdaptor.getInnerViewport();
        }
        getMethodId() {
          return n.ViewabilityCalculationType.Geometric;
        }
        getBoundariesViewability(e) {
          const t = e.domElement,
            i = this.getAssetVisibleDimension(t, e.windowElement),
            r = this.getViewportSize();
          let a = {
            topLeft: !0,
            topRight: !0,
            bottomLeft: !0,
            bottomRight: !0
          };
          return (i.top < 0 || i.top > r.height) && (a.topLeft = a.topRight = !1), (i.bottom < 0 || i.bottom > r.height) && (a.bottomLeft = a.bottomRight = !1), (i.left < 0 || i.left > r.width) && (a.bottomLeft = a.topLeft = !1), (i.right < 0 || i.right > r.width) && (a.bottomRight = a.topRight = !1), a;
        }
        getOffScreenViewportSize(e) {
          let t = {
            width: this.getViewportSize().width,
            height: this.getViewportSize().height
          };
          const i = r.BrowserAdaptor.getViewportAssetsRelativeToScreen(e),
            a = r.BrowserAdaptor.getOuterViewport(e).height - t.height,
            n = i.top + a,
            s = r.BrowserAdaptor.getScreenSize();
          return i.left < 0 ? t.width += i.left : i.left > 0 && i.left + t.width > s.width && (t.width = s.width - i.left), n > 0 && n + t.height > s.height && (t.height = s.height - n), t;
        }
        getAssetVisibleDimension(e, t) {
          let i = {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          const r = a.WindowAdaptor.getWindowParent(t);
          try {
            if (e && (i = this.getElementPositionRelativeToViewport(e, t), t != r)) {
              let e = this.getAssetVisibleDimension(t.frameElement, r);
              i.bottom = Math.min(i.bottom, e.bottom), i.top = Math.max(i.top, e.top), i.right = Math.min(i.right, e.right), i.left = Math.max(i.left, e.left), i.width = i.right - i.left, i.height = i.bottom - i.top;
            }
          } catch (e) {}
          return i;
        }
        getAssetPercentageInViewRelativeToDirectParent(e, t) {
          try {
            const i = this.getAssetVisibleDimension(e, t);
            if (e) {
              const t = r.BrowserAdaptor.getBoundingClientRect(e),
                a = t.right - t.left,
                n = (t.bottom - t.top) * a;
              if (n <= 0) return;
              return i.height * i.width / n;
            }
          } catch (e) {
            o.MessageHandler.sendError(n.ClientErrorType.MeasurementError, e, "percentage_in_view_geometric_calculation_err");
          }
        }
        getOffScreenAssetVisibleDimension(e, t) {
          const i = r.BrowserAdaptor.getViewportAssetsRelativeToScreen(t).left,
            a = {
              left: e.left,
              right: e.right,
              top: e.top,
              bottom: e.bottom,
              height: e.height,
              width: e.width
            };
          return i < 0 && (a.left += i, a.right += i), a;
        }
        getElementPositionRelativeToViewport(e, t) {
          let i = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
          };
          const n = a.WindowAdaptor.getWindowParent(t),
            s = r.BrowserAdaptor.getBoundingClientRect(e);
          return t != n && (i = this.getElementPositionRelativeToViewport(t.frameElement, n)), i = {
            left: s.left + i.left,
            right: s.right + i.left,
            top: s.top + i.top,
            bottom: s.bottom + i.top,
            width: s.width,
            height: s.height
          }, i;
        }
      }
      t.GeometricMethodClass = l, t.GeometricMethod = new l();
    },
    9965: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IntersectionObserverMethod = t.IntersectionObserverMethodClass = void 0;
      const r = i(425),
        a = i(712),
        n = i(3868),
        s = i(7537);
      class o extends s.WebCalculationMethodBase {
        constructor() {
          super(...arguments), this.threshold = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1];
        }
        isSupported(e) {
          return 128 == (128 & n.WindowAdaptor.getScenarioType()) && this.isIntersectionObserverSupported(e.windowElement);
        }
        isIntersectionObserverSupported(e) {
          return "IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype;
        }
        getAdCandidateAssets(e) {
          const t = e.domElement,
            i = this.getWrapperSize(e);
          this.init(e);
          const a = r.BrowserAdaptor.getBoundingClientRect(t),
            n = this.getAdViewablePercentage(e);
          let s = this.getAdPosition(e);
          return {
            viewportSize: this.getViewportSize(e.windowElement),
            wrapperSize: i,
            screenSize: this.getScreenSize(),
            adGeometric: {
              x: s.left,
              y: s.top,
              width: a.width,
              height: a.height
            },
            percentage: n,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize(e) {
          return r.BrowserAdaptor.getOuterViewport(e);
        }
        getMethodId() {
          return a.ViewabilityCalculationType.IntersectionObserver;
        }
        destroyAdCandidateMethod(e) {
          e.intersectionObserverObj && e.intersectionObserverObj.unobserve(e.domElement);
        }
        getAdViewablePercentage(e) {
          return e.intersectionObserverData && e.intersectionObserverData.intersectionRatio ? 100 * e.intersectionObserverData.intersectionRatio : 0;
        }
        getAdPosition(e) {
          let t = {
            top: 0,
            left: 0
          };
          return e.intersectionObserverData && e.intersectionObserverData.intersectionRect && (t = {
            top: e.intersectionObserverData.intersectionRect.top,
            left: e.intersectionObserverData.intersectionRect.left
          }), t;
        }
        init(e) {
          if (e.intersectionObserverObj) return;
          const t = e.domElement,
            i = this.visibilityChangeCallback.bind(this, e);
          e.intersectionObserverObj = new e.windowElement.IntersectionObserver(i, {
            threshold: this.threshold
          }), e.intersectionObserverObj.observe(t);
        }
        visibilityChangeCallback(e, t) {
          t.forEach(t => e.intersectionObserverData = t);
        }
      }
      t.IntersectionObserverMethodClass = o, t.IntersectionObserverMethod = new o();
    },
    8781: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Mraid3Method = t.Mraid3MethodClass = void 0;
      const r = i(712),
        a = i(6681),
        n = i(425);
      class s {
        constructor() {
          this.exposureChangeRegistered = !1;
        }
        isSupported(e) {
          let t, i;
          try {
            i = a.MraidWrapper.runMraidFunctionSafely("getVersion"), t = i.split(".")[0];
          } catch (e) {}
          return !(!a.MraidWrapper.isSupported() || "3" != t) && (e.mraidVersion = i, !0);
        }
        registerExposureChange() {
          this.exposureChangeRegistered || (a.MraidWrapper.runMraidRegisterSafely("exposureChange", this.handleExposureChangeEvent.bind(this)), this.exposureChangeRegistered = !0);
        }
        handleExposureChangeEvent(e) {
          this.viewabilityPercentage = e.exposedPercentage;
        }
        getAdCandidateAssets(e) {
          if (a.MraidWrapper.getIsMraidReady()) return this.registerExposureChange(), {
            viewportSize: this.getViewportSize(),
            screenSize: this.getScreenSize(),
            adGeometric: a.MraidWrapper.runMraidFunctionSafely("getDefaultPosition"),
            percentage: null != this.viewabilityPercentage ? this.viewabilityPercentage : a.MraidWrapper.getAdViewablePercentage(),
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize() {
          return a.MraidWrapper.runMraidFunctionSafely("getScreenSize");
        }
        getScreenSize() {
          let e, t;
          const i = this.getViewportSize();
          return {
            height: e,
            width: t
          } = i || n.BrowserAdaptor.getScreenSize(), {
            height: e,
            width: t
          };
        }
        getMethodId() {
          return r.ViewabilityCalculationType.Mraid3;
        }
        destroyAdCandidateMethod() {}
      }
      t.Mraid3MethodClass = s, t.Mraid3Method = new s();
    },
    8317: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MraidMethod = t.MraidMethodClass = void 0;
      const r = i(712),
        a = i(6681),
        n = i(425);
      class s {
        isSupported(e) {
          return !!a.MraidWrapper.isSupported() && (e.mraidVersion = a.MraidWrapper.runMraidFunctionSafely("getVersion"), !0);
        }
        getAdCandidateAssets(e) {
          if (a.MraidWrapper.getIsMraidReady()) {
            const e = (({
              height: e,
              width: t
            } = {}) => ({
              height: e,
              width: t
            }))(a.MraidWrapper.runMraidFunctionSafely("getDefaultPosition"));
            return {
              viewportSize: this.getViewportSize(),
              wrapperSize: e,
              screenSize: this.getScreenSize(),
              adGeometric: a.MraidWrapper.runMraidFunctionSafely("getDefaultPosition"),
              percentage: a.MraidWrapper.getAdViewablePercentage(),
              viewabilityCalculationType: this.getMethodId()
            };
          }
        }
        getViewportSize() {
          return a.MraidWrapper.runMraidFunctionSafely("getScreenSize");
        }
        getScreenSize() {
          let e, t;
          const i = this.getViewportSize();
          return {
            height: e,
            width: t
          } = i || n.BrowserAdaptor.getScreenSize(), {
            height: e,
            width: t
          };
        }
        getMethodId() {
          return r.ViewabilityCalculationType.Mraid;
        }
        destroyAdCandidateMethod() {}
      }
      t.MraidMethodClass = s, t.MraidMethod = new s();
    },
    8996: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidMethod = t.OmidMethodClass = void 0;
      const r = i(712),
        a = i(6689),
        n = i(425),
        s = i(8379),
        o = i(7360),
        d = i(1800),
        l = i(749),
        c = i(3380);
      class u {
        isSupported(e) {
          return a.OmidWrapper.isSupported();
        }
        getAdCandidateAssets(e) {
          this.init(e);
          let t,
            i,
            r,
            a = e.omidViewport,
            n = e.omidWrapperSize,
            l = 0;
          if (e.omidAdView && (t = e.omidAdView.percentageInView, i = e.omidAdView.geometry, r = e.omidAdView.reasons), Array.isArray(r) && r.length) {
            r.forEach(e => l |= s.OmidGeometryReasonLog[e]);
            const t = e.omidGeometryReasonsBitWise | l;
            l && t != e.omidGeometryReasonsBitWise && (e.omidGeometryReasonsBitWise = t, o.EventBus.dispatchEvent(o.DvEvent.reportData, new d.AdCandidateEventData(e)));
          }
          return {
            viewportSize: a,
            screenSize: this.getScreenSize(null, e),
            adGeometric: i,
            percentage: t,
            viewabilityCalculationType: this.getMethodId(),
            wrapperSize: n
          };
        }
        getViewportSize(e, t) {
          return t.omidViewport;
        }
        getScreenSize(e, t) {
          let i, r;
          const a = this.getViewportSize(null, t);
          return {
            height: i,
            width: r
          } = a || n.BrowserAdaptor.getScreenSize(), {
            height: i,
            width: r
          };
        }
        getMethodId() {
          return r.ViewabilityCalculationType.Omid;
        }
        destroyAdCandidateMethod() {}
        init(e) {
          e.omidInitialized || (e.omidInitialized = !0, ["geometryChange", "impression"].forEach(t => a.OmidWrapper.addEventListener(t, this.geometryChangeCallback.bind(this, e, t))));
        }
        geometryChangeCallback(e, t, i) {
          if (i && i.data) {
            let r = i.data;
            r.adView && (e.omidAdView = r.adView, "geometryChange" === t && !e.omidFirstAdSizeFromGeometryMs && r.adView.geometry && r.adView.geometry.width > 0 && r.adView.geometry.height > 0 && (e.omidFirstAdSizeFromGeometryMs = c.Utilities.getTimeDiff(), e.omidMeasuredElementType = this.extractMeasuredElementType(r.adView), e.omidWrapperSize = this.extractWrapperSize(i), l.MessageHandler.sendMessage({
              dvp_omfadsfgms: e.omidFirstAdSizeFromGeometryMs
            }))), r.viewport && (e.omidViewport = r.viewport);
          }
        }
        extractWrapperSize(e) {
          var t;
          try {
            const i = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.adView,
              r = null == i ? void 0 : i.measuringElement,
              a = ({
                height: e,
                width: t
              } = {}) => ({
                height: e,
                width: t
              });
            if (r) return a(i.containerGeometry);
            const n = null == i ? void 0 : i.geometry;
            if (n) return a(n);
          } catch (e) {}
        }
        extractMeasuredElementType(e) {
          try {
            return !0 === (null == e ? void 0 : e.measuringElement) ? 1 : 2;
          } catch (e) {
            return 0;
          }
        }
      }
      t.OmidMethodClass = u, t.OmidMethod = new u();
    },
    986: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ResourceBased = t.ResourceBasedClass = void 0;
      const r = i(425),
        a = i(712),
        n = i(3868),
        s = i(3380),
        o = i(5999),
        d = i(3946),
        l = i(2434),
        c = i(7537);
      class u extends c.WebCalculationMethodBase {
        isSupported() {
          const e = (d.BrowserDetector.getBrowserId() == a.Browser.Safari || d.BrowserDetector.getBrowserId() == a.Browser.SafariWebView) && !/^[3-8]/.test(d.BrowserDetector.getBrowserVersion()) || (d.BrowserDetector.getBrowserId() == a.Browser.Chrome || d.BrowserDetector.getBrowserId() == a.Browser.ChromeWebView) && parseInt(d.BrowserDetector.getBrowserVersion()) >= 50;
          return 128 == (128 & n.WindowAdaptor.getScenarioType()) && e;
        }
        getAdCandidateAssets(e) {
          e.resourceBasedBeacons || this.createFrameBeacons(e);
          const t = this.getWrapperSize(e),
            i = e.domElement,
            a = r.BrowserAdaptor.getBoundingClientRect(i);
          let n;
          if (this.checkBeaconsMechanism(e)) {
            const t = e.resourceBasedBeacons[0];
            n = o.BeaconsAdaptor.getElementVisiblePercentageWithBeacons(e.resourceBasedBeacons, this.isBeaconViewable.bind(this, t));
          }
          return {
            viewportSize: this.getViewportSize(e.windowElement),
            wrapperSize: t,
            screenSize: this.getScreenSize(),
            adGeometric: {
              x: 0,
              y: 0,
              width: a.width,
              height: a.height
            },
            percentage: n,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize(e) {
          return r.BrowserAdaptor.getOuterViewport(e);
        }
        getMethodId() {
          return a.ViewabilityCalculationType.ResourceBased;
        }
        destroyAdCandidateMethod(e) {
          if (!e.resourceBasedBeacons) return;
          const t = e.resourceBasedBeacons[0].parentElement,
            i = n.WindowAdaptor.workingDocument(e.windowElement);
          n.WindowAdaptor.workingBody(i).removeChild(t), e.resourceBasedBeacons = null;
        }
        getBoundariesViewability(e) {
          e.resourceBasedBeacons || this.createFrameBeacons(e);
          let t = {
            topLeft: !1,
            topRight: !1,
            bottomLeft: !1,
            bottomRight: !1
          };
          if (!this.checkBeaconsMechanism(e)) return t;
          const i = e.resourceBasedBeacons[0];
          for (let r = 1; r <= 4; r++) {
            const a = e.resourceBasedBeacons[r];
            if (this.isBeaconViewable(i, a)) switch (r) {
              case 1:
                t.topLeft = !0;
                break;
              case 2:
                t.topRight = !0;
                break;
              case 3:
                t.bottomLeft = !0;
                break;
              case 4:
                t.bottomRight = !0;
            }
          }
          return t;
        }
        isBeaconViewable(e, t) {
          const i = n.WindowAdaptor.getIframeWindow(e).animateFrameRate;
          return n.WindowAdaptor.getIframeWindow(t).animateFrameRate - i > 5;
        }
        createFrameBeacons(e) {
          e.resourceBasedBeacons = [];
          const t = n.WindowAdaptor.workingDocument(e.windowElement),
            i = r.BrowserAdaptor.createElement("div");
          n.WindowAdaptor.workingBody(t).appendChild(i);
          let a = [];
          s.Utilities.times(14, () => {
            const e = r.BrowserAdaptor.createElement("iframe");
            e.width = 8..toString(), e.height = 8..toString(), e.style.position = "absolute", e.frameBorder = "0", e.style.visibility = "hidden", i.appendChild(e);
            const t = e.contentDocument.createElement("script");
            t.innerHTML = `(${l.default.toString()})()`, e.contentDocument.body.appendChild(t), a.push(e);
          }), e.resourceBasedBeacons = a, o.BeaconsAdaptor.positionBeacons(e.domElement, a, 8);
        }
        checkBeaconsMechanism(e) {
          if (!e.resourceBasedBeacons || 0 == e.resourceBasedBeacons.length) return !1;
          const t = e.resourceBasedBeacons[0],
            i = n.WindowAdaptor.getIframeWindow(t),
            r = i.animateFrameRate;
          return i.isReady && r < 7;
        }
      }
      t.ResourceBasedClass = u, t.ResourceBased = new u();
    },
    6662: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScreenGeometricMethod = t.ScreenGeometricMethodClass = void 0;
      const r = i(425),
        a = i(712),
        n = i(3946),
        s = i(3868),
        o = i(3380),
        d = i(7537);
      class l extends d.WebCalculationMethodBase {
        isSupported(e) {
          const t = e.windowElement,
            i = 128 == (128 & s.WindowAdaptor.getScenarioType()),
            r = n.BrowserDetector.getBrowserId() == a.Browser.IE && null != t.screenTop && null != t.screenLeft,
            o = n.BrowserDetector.getBrowserId() == a.Browser.Firefox && null != t.mozInnerScreenX && null != t.mozInnerScreenY;
          return i && (r || o);
        }
        getAdCandidateAssets(e) {
          const t = e.domElement,
            i = this.getViewportSize(e.windowElement),
            a = this.getWrapperSize(e);
          let n = {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          const s = r.BrowserAdaptor.getViewportAssetsRelativeToScreen(e.windowElement),
            d = r.BrowserAdaptor.getIframeAssetsRelativeToScreen(e.windowElement),
            l = d.left - s.left,
            c = d.top - s.top,
            u = r.BrowserAdaptor.getBoundingClientRect(t);
          n.left = l + u.left, n.right = l + u.right, n.top = c + u.top, n.bottom = c + u.bottom, n.width = u.width, n.height = u.height;
          const p = o.Utilities.getElementVisiblePercentage(n, i);
          return {
            viewportSize: this.getViewportSize(e.windowElement),
            wrapperSize: a,
            screenSize: this.getScreenSize(),
            adGeometric: {
              x: n.left,
              y: n.top,
              width: n.width,
              height: n.height
            },
            percentage: p,
            viewabilityCalculationType: this.getMethodId()
          };
        }
        getViewportSize(e) {
          return r.BrowserAdaptor.getOuterViewport(e);
        }
        getMethodId() {
          return a.ViewabilityCalculationType.ScreenGeometric;
        }
      }
      t.ScreenGeometricMethodClass = l, t.ScreenGeometricMethod = new l();
    },
    7537: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WebCalculationMethodBase = void 0;
      const r = i(3868),
        a = i(425);
      t.WebCalculationMethodBase = class {
        getWrapperSize(e) {
          try {
            return r.WindowAdaptor.getElementWindowDimensions(e.domElement);
          } catch (e) {}
        }
        getScreenSize() {
          return a.BrowserAdaptor.getScreenSize();
        }
        destroyAdCandidateMethod(e) {}
      };
    },
    7815: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HiddenAdsDataCollector = void 0;
      const r = i(912),
        a = i(194),
        n = i(425),
        s = i(3868),
        o = i(7749),
        d = i(3380);
      class l extends r.BaseAdDataCollector {
        isSupported() {
          return !(s.WindowAdaptor.isDomlessEnvironment() || 128 == (128 & s.WindowAdaptor.getScenarioType()));
        }
        startCollectData(e) {
          let t = 0;
          try {
            let i = o.DvTagDataObject.isSellerTag(),
              r = d.Utilities.isPercentageCriteriaPassed(5),
              s = a.DvObject.isCTV() || a.DvObject.isMobileApp() || e.supportedDeliveryType.some(e => 3 == e || 4 == e);
            t = !r || i || s || !e.domElement ? 0 : n.BrowserAdaptor.isAdElementHidden(e.domElement);
          } catch (e) {
            t = -1;
          }
          e.hiddenAdsIndicator = t;
        }
        stopCollectData(e) {}
      }
      t.HiddenAdsDataCollector = l;
    },
    1194: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AutoplayDataCollector = void 0;
      const r = i(912),
        a = i(7749),
        n = i(712),
        s = i(3939),
        o = i(7360),
        d = i(9205),
        l = i(6942);
      class c extends r.BaseAdDataCollector {
        isSupported() {
          return a.DvTagDataObject.getTagType() == n.DvTagType.Video;
        }
        startCollectData(e) {
          let t = o.EventBus.addEventListener(o.DvEvent.videoStartPlaying, this.checkIsAutoplay.bind(this));
          e.autoplayEventSubscriptionIds.push(t);
        }
        stopCollectData(e) {
          o.EventBus.removeEventListener(e.autoplayEventSubscriptionIds[0]);
        }
        getSupportedAutoplayMethods(e) {
          return [s.DetectAutoplayByAutoplayAttribute, d.DetectAutoplayByTime, l.DetectAutoplayByJWPlayer].filter(t => t.isSupported(e));
        }
        checkIsAutoplay(e) {
          let t = e.adCandidate;
          if (void 0 === t.autoplayDetectionMethod) {
            let e = t,
              i = this.getSupportedAutoplayMethods(t);
            e.autoplayDetectionMethod = 0, i.forEach(function (i) {
              i.isAutoplayed(t) && (e.autoplayDetectionMethod = e.autoplayDetectionMethod | i.getMethodId());
            });
          }
        }
      }
      t.AutoplayDataCollector = c;
    },
    3939: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DetectAutoplayByAutoplayAttribute = t.DetectAutoplayByAutoplayAttributeClass = void 0;
      const r = i(3380),
        a = i(425);
      class n {
        isSupported(e) {
          return e && r.Utilities.isVideoElement(e.domElement);
        }
        getMethodId() {
          return 1;
        }
        isAutoplayed(e) {
          return a.BrowserAdaptor.getAttribute(e.domElement, "autoplay") || !1;
        }
      }
      t.DetectAutoplayByAutoplayAttributeClass = n, t.DetectAutoplayByAutoplayAttribute = new n();
    },
    6942: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DetectAutoplayByJWPlayer = t.DetectAutoplayByJWPlayerClass = void 0;
      const r = i(3868);
      class a {
        isSupported() {
          return "function" == typeof r.WindowAdaptor.workingWindow().jwplayer;
        }
        getMethodId() {
          return 2;
        }
        isAutoplayed() {
          let e = !1,
            t = r.WindowAdaptor.workingWindow().jwplayer(),
            i = t && t.getConfig && t.getConfig();
          return i && (e = i.autostart), e;
        }
      }
      t.DetectAutoplayByJWPlayerClass = a, t.DetectAutoplayByJWPlayer = new a();
    },
    9205: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DetectAutoplayByTime = t.DetectAutoplayByTimeClass = void 0;
      const r = i(3380),
        a = i(425);
      class n {
        constructor() {
          this.isAutoplayedTimeThreshold = 1e3;
        }
        isSupported() {
          return !0;
        }
        getMethodId() {
          return 4;
        }
        isAutoplayed(e) {
          let t = a.BrowserAdaptor.getNavigationStartTime(),
            i = !1;
          return t && (i = e.videoStartTime - r.Utilities.getTimeDiff(t) <= this.isAutoplayedTimeThreshold), i;
        }
      }
      t.DetectAutoplayByTimeClass = n, t.DetectAutoplayByTime = new n();
    },
    912: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseAdDataCollector = void 0;
      const r = i(7360);
      t.BaseAdDataCollector = class {
        constructor() {
          this.isSupported() && r.EventBus.addEventsListener({
            [r.DvEvent.adCandidateApproved]: this.startCollectDataWrapper.bind(this),
            [r.DvEvent.adDestroy]: this.stopCollectDataWrapper.bind(this)
          });
        }
        startCollectDataWrapper(e) {
          this.startCollectData(e.adCandidate);
        }
        stopCollectDataWrapper(e) {
          this.stopCollectData(e.adCandidate);
        }
      };
    },
    6243: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseDataCollector = void 0;
      t.BaseDataCollector = class {
        constructor() {
          this.isSupported() && this.startCollectData();
        }
      };
    },
    7449: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BaseGlobalDataCollector = void 0;
      const r = i(7360);
      t.BaseGlobalDataCollector = class {
        constructor() {
          this.isSupported() && (this.startCollectData(), r.EventBus.addEventsListener({
            [r.DvEvent.adCandidateApproved]: this.registerToGlobalEvent.bind(this)
          }));
        }
        processAdDataWrapper(e) {
          this.processAdData(e.adCandidate);
        }
        registerToGlobalEvent(e) {
          r.EventBus.addEventListener(this.getGlobalEventName(), this.processAdDataWrapper.bind(this, e));
        }
      };
    },
    9615: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BoundariesViewabilityDataCollector = void 0;
      const r = i(986),
        a = i(4254),
        n = i(7360),
        s = i(1800),
        o = i(912),
        d = i(6689);
      class l extends o.BaseAdDataCollector {
        isSupported() {
          return !d.OmidWrapper.isSupported();
        }
        startCollectData(e) {
          if (e.supportedDeliveryType.some(e => 2 == e)) {
            const t = this.getSupportedMethod(e);
            if (!t) return;
            n.EventBus.addEventListener(n.DvEvent.viewabilityIntervalData, this.handleViewabilityData.bind(this, t));
          }
        }
        stopCollectData(e) {
          r.ResourceBased.destroyAdCandidateMethod(e);
        }
        getArea(e) {
          if (e && e.width && e.height) return e.width * e.height;
        }
        handleViewabilityData(e, t) {
          const i = t.adCandidate,
            r = t.relevantData,
            a = this.getArea(r.adGeometric),
            n = this.getArea(r.viewportSize);
          a && n && a < n || this.publishAdBoundariesViewabilityData(e, i);
        }
        getSupportedMethod(e) {
          return [a.GeometricMethod, r.ResourceBased].filter(t => t.isSupported(e))[0];
        }
        publishAdBoundariesViewabilityData(e, t) {
          const i = e.getBoundariesViewability(t);
          n.EventBus.dispatchEvent(n.DvEvent.boundariesViewabilityIntervalData, new s.AdCandidateEventData(t, {
            boundariesViewability: i
          }));
        }
      }
      t.BoundariesViewabilityDataCollector = l;
    },
    5593: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionAdSizeDataCollector = void 0;
      const r = i(7360),
        a = i(912),
        n = i(1800),
        s = i(6689),
        o = i(425);
      class d extends a.BaseAdDataCollector {
        constructor() {
          super(...arguments), this.interval = 100;
        }
        isSupported() {
          return !s.OmidWrapper.isSupported();
        }
        startCollectData(e) {
          e.adSizeIntervalId = o.BrowserAdaptor.setInterval(() => {
            try {
              this.handleAdSize(e);
            } catch (e) {}
          }, this.interval);
        }
        handleAdSize(e) {
          let t = e.domElement;
          const i = {
            width: t.clientWidth,
            height: t.clientHeight
          };
          i.width && i.height && this.reportData(e, {
            adSize: i
          });
        }
        reportData(e, t) {
          r.EventBus.dispatchEvent(r.DvEvent.adSizeData, new n.AdCandidateEventData(e, t));
        }
        stopCollectData(e) {
          o.BrowserAdaptor.clearInterval(e.adSizeIntervalId);
        }
      }
      t.InteractionAdSizeDataCollector = d;
    },
    4153: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionEventDataCollector = void 0;
      const r = i(7360),
        a = i(425),
        n = i(912),
        s = i(1800),
        o = i(6689),
        d = i(3868);
      class l extends n.BaseAdDataCollector {
        constructor() {
          super(...arguments), this.interactionEventSubscriptionMap = {
            click: {
              dvEventToDispatch: r.DvEvent.firstClickOnAdElementData,
              elementToListenTo: "adCandidate"
            },
            mouseover: {
              dvEventToDispatch: r.DvEvent.firstHoverData,
              elementToListenTo: "adCandidate"
            },
            touchstart: {
              dvEventToDispatch: r.DvEvent.firstTouchData,
              elementToListenTo: "adCandidate"
            },
            blur: {
              dvEventToDispatch: r.DvEvent.firstFocusIntoAdElementData,
              elementToListenTo: "topAccessibleWindow",
              condition: e => e.domElement === d.WindowAdaptor.workingDocument().activeElement
            }
          };
        }
        isSupported() {
          return !o.OmidWrapper.isSupported();
        }
        startCollectData(e) {
          Object.keys(this.interactionEventSubscriptionMap).forEach(t => {
            const i = this.getElementToListenTo(t, e),
              r = this.handleElementEvent.bind(this, e, t);
            e.domEvents[t] = r, a.BrowserAdaptor.addEventListener(t, r, i);
          });
        }
        getElementToListenTo(e, t) {
          return "topAccessibleWindow" === this.interactionEventSubscriptionMap[e].elementToListenTo ? d.WindowAdaptor.getTopAccessibleWindow() : t.domElement;
        }
        handleElementEvent(e, t) {
          const i = this.interactionEventSubscriptionMap[t].condition;
          i && !i(e) || (r.EventBus.dispatchEvent(this.interactionEventSubscriptionMap[t].dvEventToDispatch, new s.AdCandidateEventData(e)), this.removeEventListener(t, e));
        }
        stopCollectData(e) {
          Object.keys(this.interactionEventSubscriptionMap).forEach(t => {
            this.removeEventListener(t, e);
          });
        }
        removeEventListener(e, t) {
          const i = this.getElementToListenTo(e, t);
          a.BrowserAdaptor.removeEventListener(e, t.domEvents[e], i);
        }
      }
      t.InteractionEventDataCollector = l;
    },
    2237: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InteractionUnloadDataCollector = void 0;
      const r = i(425),
        a = i(3868),
        n = i(7360),
        s = i(3380),
        o = i(194),
        d = i(1800),
        l = i(6689),
        c = i(7449);
      class u extends c.BaseGlobalDataCollector {
        startCollectData() {
          this.registerToDomEnvironment(), this.registerToOmidEnvironment(), this.timeoutId = r.BrowserAdaptor.setTimeout(this.reportDueToTimeout.bind(this), 84e4);
        }
        getGlobalEventName() {
          return n.DvEvent.globalUnloadData;
        }
        processAdData(e) {
          const t = s.Utilities.getTimeDiff();
          e.timeUntilUnloadMs = t, e.timeUntilUnloadMsParam = t, n.EventBus.dispatchEvent(n.DvEvent.unloadData, new d.AdCandidateEventData(e)), n.EventBus.dispatchEvent(n.DvEvent.reportData, new d.AdCandidateEventData(e)), e.wasAdStopped = !0;
        }
        isSupported() {
          return !0;
        }
        getSubscribedEvents() {
          return ["beforeunload", "pagehide"];
        }
        registerToDomEnvironment() {
          this.domEvents = {}, n.EventBus.addEventListener(n.DvEvent.impressionServed, this.registerToVisibilityChange.bind(this), "InteractionUnloadDataCollector"), this.getSubscribedEvents().forEach(this.registerUnloadEvent.bind(this));
        }
        registerUnloadEvent(e) {
          const t = this.handleUnload.bind(this);
          this.domEvents[e] = t, [a.WindowAdaptor.workingWindow(), a.WindowAdaptor.currentWindow()].forEach(i => {
            r.BrowserAdaptor.addEventListener(e, t, i);
          });
        }
        registerToOmidEnvironment() {
          l.OmidWrapper.isSupported() && l.OmidWrapper.registerSessionObserver(this.handleOmidUnload.bind(this));
        }
        reportDueToTimeout() {
          this.timeMsUntilUnload || this.handleUnload();
        }
        registerToVisibilityChange() {
          const e = this.handleUnloadForVisibilityChange.bind(this);
          if (o.DvObject.isMobile() && r.BrowserAdaptor.isVisibilityChangeEventSupported()) {
            this.lastVisibilityState = a.WindowAdaptor.currentDocument().visibilityState;
            const t = r.BrowserAdaptor.getVisibilityPrefix() + "visibilitychange";
            r.BrowserAdaptor.addEventListener(t, e, a.WindowAdaptor.workingDocument()), this.domEvents[t] = e;
          }
        }
        handleUnloadForVisibilityChange() {
          const e = a.WindowAdaptor.currentDocument().visibilityState;
          this.lastVisibilityState != e && "hidden" === e && this.handleUnload(), this.lastVisibilityState = e;
        }
        isMaxTimePassed() {
          let e = s.Utilities.getTimeDiff();
          return !(!this.timeMsUntilUnload && e < 12e5) || (this.timeMsUntilUnload = e, !1);
        }
        handleUnload() {
          this.isMaxTimePassed() || this.unloadFired || (n.EventBus.dispatchEvent(this.getGlobalEventName(), new d.EventData()), this.unloadFired = !0);
        }
        handleOmidUnload(e) {
          "sessionFinish" === e.type && this.handleUnload();
        }
      }
      t.InteractionUnloadDataCollector = u;
    },
    7196: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidInteractionDataCollector = void 0;
      const r = i(7360),
        a = i(912),
        n = i(1800),
        s = i(6689),
        o = i(8379);
      class d extends a.BaseAdDataCollector {
        isSupported() {
          return s.OmidWrapper.isSupported();
        }
        startCollectData(e) {
          Object.keys(o.OmidEvents).forEach(t => s.OmidWrapper.addEventListener(t, this.handleOmidEvent.bind(this, t, e)));
        }
        handleOmidEvent(e, t, i) {
          var a, s, o;
          switch (e) {
            case "adUserInteraction":
              "click" === (null === (a = null == i ? void 0 : i.data) || void 0 === a ? void 0 : a.interactionType) && r.EventBus.dispatchEvent(r.DvEvent.omidClickData, new n.AdCandidateEventData(t));
              break;
            case "geometryChange":
              const e = null === (o = null === (s = null == i ? void 0 : i.data) || void 0 === s ? void 0 : s.adView) || void 0 === o ? void 0 : o.geometry,
                d = {
                  width: null == e ? void 0 : e.width,
                  height: null == e ? void 0 : e.height
                };
              d.width && d.height && r.EventBus.dispatchEvent(r.DvEvent.omidAdSizeData, new n.AdCandidateEventData(t, {
                adSize: d
              }));
          }
        }
        stopCollectData(e) {}
      }
      t.OmidInteractionDataCollector = d;
    },
    1606: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionKeyPressDataCollector = void 0;
      const r = i(7449),
        a = i(7360),
        n = i(3868),
        s = i(425),
        o = i(1800);
      class d extends r.BaseGlobalDataCollector {
        isSupported() {
          return !0;
        }
        getGlobalEventName() {
          return a.DvEvent.globalKeyPressData;
        }
        startCollectData() {
          let e = n.WindowAdaptor.workingWindow(),
            t = n.WindowAdaptor.getTopAccessibleWindow();
          s.BrowserAdaptor.addEventListener("keypress", this.handleKeyPressEvent.bind(this), e), t != e && s.BrowserAdaptor.addEventListener("keypress", this.handleKeyPressEvent.bind(this), t);
        }
        handleKeyPressEvent() {
          a.EventBus.dispatchEvent(this.getGlobalEventName(), new o.EventData());
        }
        processAdData(e) {
          a.EventBus.dispatchEvent(a.DvEvent.keyPressData, new o.AdCandidateEventData(e));
        }
      }
      t.PageInteractionKeyPressDataCollector = d;
    },
    9198: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionMouseMoveDataCollector = void 0;
      const r = i(7449),
        a = i(7360),
        n = i(425),
        s = i(1800),
        o = i(3868);
      class d extends r.BaseGlobalDataCollector {
        isSupported() {
          return !0;
        }
        getGlobalEventName() {
          return a.DvEvent.globalMouseMoveData;
        }
        startCollectData() {
          let e = o.WindowAdaptor.workingWindow(),
            t = o.WindowAdaptor.getTopAccessibleWindow();
          n.BrowserAdaptor.addEventListener("mousemove", this.handleMouseMoveEvent.bind(this), e), n.BrowserAdaptor.addEventListener("touchmove", this.handleMouseMoveEvent.bind(this), e), t != e && (n.BrowserAdaptor.addEventListener("mousemove", this.handleMouseMoveEvent.bind(this), t), n.BrowserAdaptor.addEventListener("touchmove", this.handleMouseMoveEvent.bind(this), t));
        }
        handleMouseMoveEvent() {
          a.EventBus.dispatchEvent(this.getGlobalEventName(), new s.EventData());
        }
        processAdData(e) {
          a.EventBus.dispatchEvent(a.DvEvent.mouseMoveData, new s.AdCandidateEventData(e));
        }
      }
      t.PageInteractionMouseMoveDataCollector = d;
    },
    6789: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionOrientationChangedDataCollector = void 0;
      const r = i(7449),
        a = i(7360),
        n = i(1800),
        s = i(425),
        o = i(3868);
      class d extends r.BaseGlobalDataCollector {
        isSupported() {
          return void 0 !== s.BrowserAdaptor.getOrientation();
        }
        getGlobalEventName() {
          return a.DvEvent.globalOrientationChangeData;
        }
        startCollectData() {
          let e = o.WindowAdaptor.workingWindow();
          s.BrowserAdaptor.addEventListener("orientationchange", this.handleOrientationChangeEvent.bind(this), e);
        }
        handleOrientationChangeEvent() {
          a.EventBus.dispatchEvent(this.getGlobalEventName(), new n.EventData());
        }
        processAdData(e) {
          90 == Math.abs(s.BrowserAdaptor.getOrientation()) ? a.EventBus.dispatchEvent(a.DvEvent.orientationchangeLandscapeData, new n.AdCandidateEventData(e)) : a.EventBus.dispatchEvent(a.DvEvent.orientationChangePortraitData, new n.AdCandidateEventData(e));
        }
      }
      t.PageInteractionOrientationChangedDataCollector = d;
    },
    5747: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageInteractionScrollDataCollector = void 0;
      const r = i(7449),
        a = i(7360),
        n = i(1800);
      class s extends r.BaseGlobalDataCollector {
        isSupported() {
          return !0;
        }
        getGlobalEventName() {
          return a.DvEvent.globalScrollData;
        }
        startCollectData() {
          a.EventBus.addEventListener(a.DvEvent.viewabilityIntervalData, this.handleViewabilityIntervalDataEvent.bind(this));
        }
        handleViewabilityIntervalDataEvent(e) {
          let t = e.relevantData,
            i = t.adGeometric;
          t.adGeometric && (this.adGeometric ? this.adGeometric.y == i.y && this.adGeometric.x == i.x || (this.adGeometric = i, a.EventBus.dispatchEvent(this.getGlobalEventName(), new n.EventData())) : this.adGeometric = i);
        }
        processAdData(e) {
          a.EventBus.dispatchEvent(a.DvEvent.scrollData, new n.AdCandidateEventData(e));
        }
      }
      t.PageInteractionScrollDataCollector = s;
    },
    2452: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.FocusDataCollector = void 0;
      const r = i(7360),
        a = i(425),
        n = i(3868),
        s = i(912),
        o = i(1800);
      class d extends s.BaseAdDataCollector {
        isSupported() {
          return !0;
        }
        startCollectData(e) {
          const t = e.domEvents,
            i = this.handleFocus.bind(this, e);
          if (this.handleFocus(e), a.BrowserAdaptor.isVisibilityChangeEventSupported()) {
            const r = a.BrowserAdaptor.getVisibilityPrefix() + "visibilitychange";
            a.BrowserAdaptor.addEventListener(r, i, n.WindowAdaptor.workingDocument(e.windowElement)), t[r] = i;
          }
        }
        handleFocus(e) {
          try {
            let t = a.BrowserAdaptor.hasFocus();
            r.EventBus.dispatchEvent(r.DvEvent.focusData, new o.AdCandidateEventData(e, {
              focus: t
            }));
          } catch (e) {}
        }
        stopCollectData(e) {
          if (a.BrowserAdaptor.isVisibilityChangeEventSupported()) {
            const t = a.BrowserAdaptor.getVisibilityPrefix() + "visibilitychange";
            a.BrowserAdaptor.removeEventListener(t, e.domEvents[t], n.WindowAdaptor.workingDocument(e.windowElement));
          }
        }
      }
      t.FocusDataCollector = d;
    },
    3384: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PageEventsDataCollector = void 0;
      const r = i(7360),
        a = i(3868),
        n = i(425),
        s = i(6243),
        o = i(1800);
      class d extends s.BaseDataCollector {
        isSupported() {
          return !a.WindowAdaptor.isDomlessEnvironment();
        }
        startCollectData() {
          n.BrowserAdaptor.addEventListener("pagehide", this.handlePersistedEvent(r.DvEvent.pageHideEventPersisted, r.DvEvent.pageHideEventNonPersisted).bind(this), a.WindowAdaptor.workingWindow());
        }
        handlePersistedEvent(e, t) {
          return i => {
            const a = (null == i ? void 0 : i.persisted) ? e : t;
            r.EventBus.dispatchEvent(a, new o.EventData());
          };
        }
      }
      t.PageEventsDataCollector = d;
    },
    417: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceApiDataCollector = void 0;
      const r = i(912),
        a = i(7360),
        n = i(1800),
        s = i(3868);
      class o extends r.BaseAdDataCollector {
        constructor() {
          super(...arguments), this.subscriptionIds = [];
        }
        isSupported() {
          return !s.WindowAdaptor.isDomlessEnvironment();
        }
        getEntries(e) {
          const t = s.WindowAdaptor.monitorScriptsPerformance(s.WindowAdaptor.currentWindow(), {
              visit: ["transferSize"]
            }),
            i = {
              visitResponseSize: t && t.visit_transferSize
            };
          Object.keys(i).length && a.EventBus.dispatchEvent(a.DvEvent.performanceData, new n.PerformanceEventData(i, e));
        }
        startCollectData(e) {
          this.isSupported() && (this.subscriptionIds = a.EventBus.addEventsListener({
            [a.DvEvent.impressionServed]: this.getEntries.bind(this, e)
          }));
        }
        stopCollectData(e) {
          this.subscriptionIds.length && (a.EventBus.removeEventsListener(this.subscriptionIds), this.subscriptionIds = []);
        }
      }
      t.PerformanceApiDataCollector = o;
    },
    6593: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PerformanceLongTasksDataCollector = void 0;
      const r = i(3868),
        a = i(7360),
        n = i(1800),
        s = i(6243),
        o = i(712),
        d = i(749),
        l = "longtask";
      class c extends s.BaseDataCollector {
        isSupported() {
          var e;
          return this.frameId = c.getFrameId(), "undefined" != typeof PerformanceObserver && !!this.frameId && !!(null === (e = null === PerformanceObserver || void 0 === PerformanceObserver ? void 0 : PerformanceObserver.supportedEntryTypes) || void 0 === e ? void 0 : e.some(e => e === l));
        }
        startCollectData() {
          if (!this.observer) try {
            this.observer = new PerformanceObserver(this.handleLongTasksEntries.bind(this)), this.observer.observe({
              type: l,
              buffered: !0
            });
          } catch (e) {
            d.MessageHandler.sendError(o.ClientErrorType.FailObserverLongTasks, e);
          }
        }
        handleLongTasksEntries(e) {
          const t = e.getEntries().filter(e => {
            var t;
            return null === (t = e.attribution) || void 0 === t ? void 0 : t.length;
          }).filter(({
            attribution: e
          }) => e[0].containerId === this.frameId).map(this.convertLongTaskEntryToLongTask.bind(this));
          a.EventBus.dispatchEvent(a.DvEvent.performanceLongTasks, new n.LongTaskEventData(t));
        }
        convertLongTaskEntryToLongTask(e) {
          return {
            startTime: e.startTime,
            duration: e.duration,
            frameId: this.frameId
          };
        }
        static getFrameId() {
          var e;
          return null === (e = r.WindowAdaptor.getFrameElement(r.WindowAdaptor.currentWindow())) || void 0 === e ? void 0 : e.id;
        }
      }
      t.PerformanceLongTasksDataCollector = c;
    },
    6195: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.StrictFocusDataCollector = void 0;
      const r = i(7360),
        a = i(425),
        n = i(3868),
        s = i(912),
        o = i(1800);
      class d extends s.BaseAdDataCollector {
        isSupported() {
          return !0;
        }
        startCollectData(e) {
          this.handleFocus(e), n.WindowAdaptor.windowTop() && (e.strictFocusInterval = a.BrowserAdaptor.setInterval(this.handleFocus.bind(this, e), 200));
        }
        handleFocus(e) {
          try {
            let t = null == a.BrowserAdaptor.hasStrictFocus() || a.BrowserAdaptor.hasStrictFocus();
            r.EventBus.dispatchEvent(r.DvEvent.strictFocusData, new o.AdCandidateEventData(e, {
              focus: t
            }));
          } catch (e) {}
        }
        stopCollectData(e) {
          a.BrowserAdaptor.clearInterval(e.strictFocusInterval);
        }
      }
      t.StrictFocusDataCollector = d;
    },
    1776: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackDataCollector = void 0;
      const r = i(912),
        a = i(7542),
        n = i(1768),
        s = i(3115),
        o = i(4753),
        d = i(7749),
        l = i(7360),
        c = i(712),
        u = i(1800),
        p = i(8191);
      class h extends r.BaseAdDataCollector {
        isSupported() {
          return d.DvTagDataObject.getTagType() == c.DvTagType.Video;
        }
        startCollectData(e) {
          e.videoPlaybackIndicator = e.videoPlaybackIndicatorDvp = 0, e.videoPlayback = this.getSupportedVideoPlayback(e), e.videoPlayback && (e.videoPlayback.startCollectData(e), e.videoPlaybackIndicator = e.videoPlaybackIndicatorDvp = e.videoPlayback.getIndicator(), l.EventBus.dispatchEvent(l.DvEvent.reportData, new u.AdCandidateEventData(e)));
        }
        stopCollectData(e) {
          e.videoPlayback && e.videoPlayback.stopCollectData(e);
        }
        getSupportedVideoPlayback(e) {
          return [n.VideoPlaybackByOmid, o.VideoPlaybackByAdColonyVpaid, s.VideoPlaybackByVpaid, p.VideoPlaybackByInmobi, a.VideoPlaybackByHtml5].filter(t => t.isSupported(e))[0];
        }
      }
      t.VideoPlaybackDataCollector = h;
    },
    4753: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackByAdColonyVpaid = t.VideoPlaybackByAdColonyVpaidClass = void 0;
      const r = i(1966),
        a = i(7360),
        n = i(1800);
      class s {
        constructor() {
          this.vpaidEventMapping = {
            AdImpression: a.DvEvent.adImpressionData,
            AdVideoComplete: a.DvEvent.adVideoCompleteData,
            AdVideoFirstQuartile: a.DvEvent.adVideoFirstQuartileData,
            AdVideoMidpoint: a.DvEvent.adVideoMidpointData,
            AdVideoStart: a.DvEvent.adVideoStartData,
            AdVideoThirdQuartile: a.DvEvent.adVideoThirdQuartileData,
            AdPaused: a.DvEvent.pauseData,
            AdPlaying: a.DvEvent.resumeData,
            AdVolumeChange: a.DvEvent.volumeData
          };
        }
        isSupported() {
          return this.adc = r.VideoPlaybackAdaptor.getADCObject(), !!this.adc;
        }
        getIndicator() {
          return 4;
        }
        startCollectData(e) {
          Object.keys(this.vpaidEventMapping).forEach(t => {
            this.adc.subscribe(t, this.handleVpaidEvent.bind(this, t, e));
          });
        }
        stopCollectData(e) {}
        getVpaidVolume(e) {
          return isNaN(e) ? null : e;
        }
        handleVpaidEvent(e, t, i) {
          let r;
          if ("AdVolumeChange" == e) {
            if (!i) return;
            let e = this.getVpaidVolume(i.deviceVolume),
              t = null != e ? e : this.getVpaidVolume(i.volume);
            null != t && -1 != t && (r = {
              volume: t
            });
          }
          a.EventBus.dispatchEvent(this.vpaidEventMapping[e], new n.AdCandidateEventData(t, r));
        }
      }
      t.VideoPlaybackByAdColonyVpaidClass = s, t.VideoPlaybackByAdColonyVpaid = new s();
    },
    7542: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackByHtml5 = t.VideoPlaybackByHtml5Class = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(425),
        s = i(3380);
      class o {
        constructor() {
          this.html5EventMapping = {
            playing: r.DvEvent.adVideoStartData,
            pause: r.DvEvent.pauseData,
            play: r.DvEvent.resumeData,
            volumechange: r.DvEvent.volumeData,
            ended: r.DvEvent.adVideoCompleteData
          }, this.quartileEvents = [r.DvEvent.adVideoFirstQuartileData, r.DvEvent.adVideoMidpointData, r.DvEvent.adVideoThirdQuartileData, r.DvEvent.adVideoCompleteData], this.eventsToReportOnlyOnce = [r.DvEvent.adVideoCompleteData, r.DvEvent.adVideoStartData, ...this.quartileEvents];
        }
        isSupported(e) {
          return s.Utilities.isInAppSupported(e.supportedDeliveryType) && s.Utilities.isVideoElement(e.domElement);
        }
        getIndicator() {
          return 2;
        }
        startCollectData(e) {
          const t = this.updateAdPlaybackTime.bind(this, e);
          n.BrowserAdaptor.addEventListener("timeupdate", t, e.domElement), e.domEvents.timeupdate = t, Object.keys(this.html5EventMapping).forEach(t => {
            const i = this.handleHtml5Event.bind(this, e, this.html5EventMapping[t]);
            n.BrowserAdaptor.addEventListener(t, i, e.domElement), e.domEvents[t] = i;
          });
        }
        stopCollectData(e) {
          Object.keys(this.html5EventMapping).forEach(t => {
            n.BrowserAdaptor.removeEventListener(t, e.domEvents[t], e.domElement);
          }), n.BrowserAdaptor.removeEventListener("timeupdate", e.domEvents.timeupdate, e.domElement);
        }
        updateAdPlaybackTime(e) {
          const t = e.domElement;
          if (!t.duration) return;
          t.currentTime && !e.videoPlaybackHtml5AdPlaybackTimeInitialized && (e.videoPlaybackHtml5AdPlaybackTimeInitialized = !0, this.publishEvents(r.DvEvent.resumeData, e));
          const i = t.duration / 4;
          if (t.currentTime >= e.videoPlaybackHtml5QuartileId * i) {
            const t = this.quartileEvents[e.videoPlaybackHtml5QuartileId - 1];
            this.publishEvents(t, e), e.videoPlaybackHtml5QuartileId++;
          }
        }
        handleHtml5Event(e, t) {
          const i = e.domElement;
          let a;
          t == r.DvEvent.volumeData && (a = {
            volume: i.volume
          }), this.publishEvents(t, e, a);
        }
        publishEvents(e, t, i) {
          this.eventsToReportOnlyOnce.some(t => t == e) && t.videoPlaybackHtml5Events.some(t => t == e) || (e == r.DvEvent.adVideoCompleteData && this.stopCollectData(t), t.videoPlaybackHtml5Events.push(e), r.EventBus.dispatchEvent(e, new a.AdCandidateEventData(t, i)));
        }
      }
      t.VideoPlaybackByHtml5Class = o, t.VideoPlaybackByHtml5 = new o();
    },
    8191: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackByInmobi = t.VideoPlaybackByInmobiClass = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(3380),
        s = i(8426);
      class o {
        constructor() {
          this.inmobiEventMapping = {
            AdLoaded: r.DvEvent.videoLoadedData,
            AdVideoComplete: r.DvEvent.adVideoCompleteData,
            AdVideoFirstQuartile: r.DvEvent.adVideoFirstQuartileData,
            AdVideoMidpoint: r.DvEvent.adVideoMidpointData,
            AdVideoStart: r.DvEvent.adVideoStartData,
            AdVideoThirdQuartile: r.DvEvent.adVideoThirdQuartileData,
            AdPaused: r.DvEvent.pauseData,
            AdPlaying: r.DvEvent.resumeData,
            AdVolumeChange: r.DvEvent.volumeData
          };
        }
        isSupported() {
          return s.InmobiWrapper.isSupported();
        }
        getIndicator() {
          return 5;
        }
        startCollectData(e) {
          s.InmobiWrapper.addEventListenerWithHistory(this.handleInmobiEvent.bind(this, e));
        }
        stopCollectData(e) {}
        handleInmobiEvent(e, t) {
          if (!t || !this.inmobiEventMapping[t.type]) return;
          let i = {};
          if ("AdVolumeChange" == t.type && t.detail) {
            let e = n.Utilities.isNullOrEmpty(t.detail.adVolume) || isNaN(t.detail.adVolume) ? null : t.detail.adVolume;
            null != e && -1 != e && (i = {
              volume: e
            });
          }
          if ("AdLoaded" == t.type && t.detail && t.detail.duration && t.detail.duration > 0) {
            e.adDuration = Math.round(t.detail.duration);
            let r = n.Utilities.isNullOrEmpty(t.detail.volume) || isNaN(t.detail.volume) ? null : t.detail.volume;
            null != r && -1 != r && (i = {
              volume: r
            });
          }
          r.EventBus.dispatchEvent(this.inmobiEventMapping[t.type], new a.AdCandidateEventData(e, i));
        }
      }
      t.VideoPlaybackByInmobiClass = o, t.VideoPlaybackByInmobi = new o();
    },
    1768: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackByOmid = t.VideoPlaybackByOmidClass = void 0;
      const r = i(7360),
        a = i(1800),
        n = i(6689),
        s = i(8170),
        o = i(3380);
      class d {
        constructor() {
          this.omidEventMapping = {
            impression: r.DvEvent.adImpressionData,
            complete: r.DvEvent.adVideoCompleteData,
            firstQuartile: r.DvEvent.adVideoFirstQuartileData,
            midpoint: r.DvEvent.adVideoMidpointData,
            start: r.DvEvent.adVideoStartData,
            thirdQuartile: r.DvEvent.adVideoThirdQuartileData,
            pause: r.DvEvent.pauseData,
            resume: r.DvEvent.resumeData,
            skipped: r.DvEvent.skipData,
            volumeChange: r.DvEvent.volumeData,
            loaded: null
          };
        }
        isSupported() {
          return n.OmidWrapper.isSupported();
        }
        getIndicator() {
          return 3;
        }
        startCollectData(e) {
          s.DiagnosticParamsSingleton.reportDiagnosticParam("omlms", o.Utilities.getTimeDiff()), Object.keys(this.omidEventMapping).forEach(t => {
            n.OmidWrapper.addEventListener(t, this.omidEventCallback.bind(this, e, t));
          });
        }
        stopCollectData(e) {}
        omidEventCallback(e, t, i) {
          let n;
          if ("start" == t || "volumeChange" == t && i && i.data) {
            let e,
              t = isNaN(i.data.videoPlayerVolume) ? null : i.data.videoPlayerVolume,
              r = isNaN(i.data.deviceVolume) ? null : i.data.deviceVolume;
            null != t && null != r ? e = t * r : null != t ? e = t : null != r && (e = r), null != e && -1 != e && (n = {
              volume: e
            });
          }
          "start" == t && i && i.data && (e.videoLength = i.data.videoDuration, r.EventBus.dispatchEvent(this.omidEventMapping.volumeChange, new a.AdCandidateEventData(e, n))), null == e.omidPlaybackStartIndicator && (e.omidPlaybackStartIndicator = -1), "loaded" == t && (e.omidPlaybackStartIndicator = this.getOmidPlaybackStartIndicator(i)), this.omidEventMapping[t] && r.EventBus.dispatchEvent(this.omidEventMapping[t], new a.AdCandidateEventData(e, n));
        }
        getOmidPlaybackStartIndicator(e) {
          return e && e.data && null != e.data.autoPlay ? e.data.autoPlay ? 1 : 2 : 0;
        }
      }
      t.VideoPlaybackByOmidClass = d, t.VideoPlaybackByOmid = new d();
    },
    3115: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoPlaybackByVpaid = t.VideoPlaybackByVpaidClass = void 0;
      const r = i(7749),
        a = i(7360),
        n = i(1800),
        s = i(1063),
        o = i(3380);
      class d {
        constructor() {
          this.MUTED = 1, this.NO_VOLUME = 0, this.vpaidEventMapping = {
            AdImpression: a.DvEvent.adImpressionData,
            AdLoaded: a.DvEvent.videoLoadedData,
            AdVideoComplete: a.DvEvent.adVideoCompleteData,
            AdVideoFirstQuartile: a.DvEvent.adVideoFirstQuartileData,
            AdVideoMidpoint: a.DvEvent.adVideoMidpointData,
            AdVideoStart: a.DvEvent.adVideoStartData,
            AdVideoThirdQuartile: a.DvEvent.adVideoThirdQuartileData,
            AdUserClose: a.DvEvent.abandonData,
            AdPaused: a.DvEvent.pauseData,
            AdPlaying: a.DvEvent.resumeData,
            AdSkipped: a.DvEvent.skipData,
            AdStopped: a.DvEvent.stopData,
            AdVolumeChange: a.DvEvent.volumeData,
            AdSkippableStateChange: a.DvEvent.skippableData
          };
        }
        isSupported() {
          return this.adID = r.DvTagDataObject.getAdID(), this.vpaid = s.VpaidWrapper.getDvVpaid(), !!this.adID && !!this.vpaid && s.VpaidWrapper.isSupported();
        }
        getIndicator() {
          return 1;
        }
        startCollectData(e) {
          e.videoPlaybackByVpaidEventSubscriptionIds = this.vpaid.subscribe(Object.keys(this.vpaidEventMapping), this.adID, this.handleVpaidEvent.bind(this, e));
          const t = this.vpaid.asset && this.vpaid.asset.adDuration;
          t && t > 0 && t < 180 && (e.adDuration = Math.round(1e3 * t), e.adDurationCalculationType = 1), this.vpaid.asset && this.vpaid.asset.adSkippable && (e.adSkippableMs = o.Utilities.getTimeDiff());
        }
        stopCollectData(e) {
          this.vpaid.unsubscribe(e.videoPlaybackByVpaidEventSubscriptionIds);
        }
        handleVpaidEvent(e, t, i) {
          var r;
          if (!(null == i ? void 0 : i.eventName)) return;
          const s = i.eventName;
          if (!this.vpaidEventMapping[s]) return;
          let d;
          const l = null === (r = null == i ? void 0 : i.ovvArgs) || void 0 === r ? void 0 : r.ovvData;
          if (l) {
            if ("AdVolumeChange" == i.eventName || "AdVideoStart" == i.eventName) {
              const e = l.muted === this.MUTED ? this.NO_VOLUME : o.Utilities.isNullOrEmpty(l.volume) || isNaN(l.volume) ? null : l.volume;
              null != e && -1 != e && (d = {
                volume: e
              });
            }
            if ("AdSkippableStateChange" == i.eventName) {
              const e = o.Utilities.isNullOrEmpty(l.adSkippableState) ? null : l.adSkippableState;
              null != e && (d = {
                adSkippable: e
              });
            }
          }
          a.EventBus.dispatchEvent(this.vpaidEventMapping[s], new n.AdCandidateEventData(e, d));
        }
      }
      t.VideoPlaybackByVpaidClass = d, t.VideoPlaybackByVpaid = new d();
    },
    3081: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ViewabilityDataCollector = void 0;
      const r = i(986),
        a = i(4254),
        n = i(9965),
        s = i(6662),
        o = i(7360),
        d = i(1800),
        l = i(7749),
        c = i(8253),
        u = i(712),
        p = i(8317),
        h = i(912),
        g = i(8996),
        m = i(3380),
        v = i(425),
        b = i(5492),
        y = i(749),
        f = i(8781);
      class w extends h.BaseAdDataCollector {
        isSupported() {
          return !0;
        }
        startCollectData(e) {
          o.EventBus.addEventListener(o.DvEvent.adVideoCompleteData, this.adVideoComplete.bind(this)), this.viewabilityInterval = l.DvTagDataObject.getTagType() == u.DvTagType.Video ? 200 : 100;
          const t = e.viewabilityCalculationMethod || this.getSupportedMethod(e);
          t && (e.viewabilityCalculationMethod = t, e.viewabilityCalculationType = t.getMethodId(), this.publishAdViewabilityData(e), e.viewabilityIntervalId = v.BrowserAdaptor.setInterval(this.publishAdViewabilityData.bind(this, e), this.viewabilityInterval));
        }
        stopCollectData(e) {
          this.stopViewabilityInterval(e);
        }
        adVideoComplete(e) {
          this.stopViewabilityInterval(e.adCandidate);
        }
        stopViewabilityInterval(e) {
          e.viewabilityIntervalId && (v.BrowserAdaptor.clearInterval(e.viewabilityIntervalId), e.viewabilityCalculationMethod && e.viewabilityCalculationMethod.destroyAdCandidateMethod(e), e.viewabilityIntervalId = void 0);
        }
        getSupportedMethod(e) {
          let t,
            i = [g.OmidMethod];
          return m.Utilities.isInAppSupported(e.supportedDeliveryType) ? t = [...i, b.AdColonyMethod, f.Mraid3Method, p.MraidMethod] : (t = [a.GeometricMethod, n.IntersectionObserverMethod, c.AmpIntersectionObserverMethod, r.ResourceBased, s.ScreenGeometricMethod], m.Utilities.isCtvSupported(e.supportedDeliveryType) || (t = [g.OmidMethod, ...t])), t.filter(t => t.isSupported(e))[0];
        }
        publishAdViewabilityData(e) {
          try {
            let t = e.viewabilityCalculationMethod.getAdCandidateAssets(e);
            t && o.EventBus.dispatchEvent(o.DvEvent.viewabilityIntervalData, new d.AdCandidateEventData(e, t)), this.checkIfElementAttachedToDocoment(e);
          } catch (e) {
            y.MessageHandler.sendError(u.ClientErrorType.MeasurementError, e);
          }
        }
        checkIfElementAttachedToDocoment(e) {
          e.timeMsUntilAdNotAttached || v.BrowserAdaptor.isElementAttachedToDocument(e.domElement) || (e.timeMsUntilAdNotAttached = m.Utilities.getTimeDiff(), o.EventBus.dispatchEvent(o.DvEvent.reportData, new d.AdCandidateEventData(e)));
        }
      }
      t.ViewabilityDataCollector = w;
    },
    455: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AdCandidateData = void 0;
      t.AdCandidateData = class {
        constructor(e) {
          this.state = 1, this.priority = 1, this.domEvents = {}, this.wasAdStopped = !1, this.isPaused = !1, this.videoPlaybackHtml5QuartileId = 1, this.videoPlaybackHtml5Events = [], this.playingTimeStamps = [], this.lastVideoIsPlayingStatus = !1, this.volumeDurationQuartileId = 1, this.IABAdViewableForXSecondsViewedTime = 0, this.iabViewablitiyTimeToCheck = [5, 10, 15], this.IABAdViewableForXSecondsdurationRequirement = 5e3, this.boundariesViewed = {
            topLeft: !1,
            topRight: !1,
            bottomLeft: !1,
            bottomRight: !1
          }, this.iabViewedTime = 0, this.iabVideoQuartileId = 1, this.iabVideoQuartileViewed = 0, this.videoFullQuartileViewabilityId = 1, this.videoFullQuartileAudibleId = 1, this.notViewableReasonWasInFocus = !1, this.notViewableReasonWasInViewPort = !1, this.notViewableReasonConsecutiveViewTime = 0, this.notViewableReasonCumulativeViewTime = 0, this.notViewableReasonWasViewed = !1, this.notViewableReasonVideoPlayed = !1, this.customViewedTime = 0, this.customStandardViewedTime = 0, this.customAdvertiserStandardViewedTime = 0, this.kmeStartMeasure = !1, this.kmeConditionsFailed = !1, this.groupMViewedTime = 0, this.groupMV4DisplayViewedTime = 0, this.groupMV4VideoReachExtensionViewedTime = 0, this.groupMV4VideoNativeViewedTime = 0, this.groupMV4DisplayViewedTimeLog = 0, this.pmxViewedTime = 0, this.videoBucketsQuartileId = 1, this.viewabilityIntervalDataCalled = !1, this.autoplayEventSubscriptionIds = [], this.videoPlaybackByVpaidEventSubscriptionIds = [], this.domElement = e;
        }
        markAdQuartile(e, t) {
          switch (t) {
            case 1:
              this.exposureFirstQuartileBitwise = this.exposureFirstQuartileBitwise | e;
              break;
            case 2:
              this.exposureSecondQuartileBitwise = this.exposureSecondQuartileBitwise | e;
              break;
            case 3:
              this.exposureThirdQuartileBitwise = this.exposureThirdQuartileBitwise | e;
              break;
            case 4:
              this.exposureFourthQuartileBitwise = this.exposureFourthQuartileBitwise | e;
          }
        }
      };
    },
    5261: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CeltraDomAdData = void 0;
      const r = i(8564);
      class a extends r.DomAdData {
        constructor(e, t, i, r) {
          super(t, i, r), this.celtraTagSearchMethod = e, this.domElement = t, this.depth = i, this.isFullyLoaded = r;
        }
      }
      t.CeltraDomAdData = a;
    },
    7658: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TPSDataMapping = t.RTSDataMapping = t.AdDataMappingToReport = void 0, t.AdDataMappingToReport = {
        timeMsUntilAdMeasured: "ismms",
        unadjustedTimeMsUntilAdMeasured: "isumms",
        isViewabilityEligible: "isvelg",
        notViewableReason: "nvr",
        groupMTimeMsUntilAdMeasured: "isgmmims",
        groupMV4TimeMsUntilAdMeasured: "isgmv4mims",
        adElementType: "elmtp",
        measuredElementType: "metp",
        measuredElementExtractorId: "meeid",
        largestChildElementHeight: "lceh",
        largestChildElementWidth: "lcew",
        viewabilityDisplayBucketsUnloadTime: "isbxdms",
        b0: "b0",
        b1: "b1",
        b2: "b2",
        b3: "b3",
        b4: "b4",
        b5: "b5",
        b6: "b6",
        b7: "b7",
        b8: "b8",
        b9: "b9",
        b10: "b10",
        b11: "b11",
        napt: "napt",
        isq1ms: "isq1ms",
        q1b0: "q1b0",
        q1b1: "q1b1",
        q1b2: "q1b2",
        q1b3: "q1b3",
        q1b4: "q1b4",
        q1b5: "q1b5",
        q1napt: "q1napt",
        isq2ms: "isq2ms",
        q2b0: "q2b0",
        q2b1: "q2b1",
        q2b2: "q2b2",
        q2b3: "q2b3",
        q2b4: "q2b4",
        q2b5: "q2b5",
        q2napt: "q2napt",
        isq3ms: "isq3ms",
        q3b0: "q3b0",
        q3b1: "q3b1",
        q3b2: "q3b2",
        q3b3: "q3b3",
        q3b4: "q3b4",
        q3b5: "q3b5",
        q3napt: "q3napt",
        isq4ms: "isq4ms",
        q4b0: "q4b0",
        q4b1: "q4b1",
        q4b2: "q4b2",
        q4b3: "q4b3",
        q4b4: "q4b4",
        q4b5: "q4b5",
        q4napt: "q4napt",
        q1ad: "q1ad",
        q2ad: "q2ad",
        q3ad: "q3ad",
        q4ad: "q4ad",
        maxVideoVolume: "avmax",
        minVideoVolume: "avmin",
        adHeight: "adhgt",
        adWidth: "adwdth",
        normalizedAdWidth: "norwdth",
        normalizedAdHeight: "norhgt",
        accumulativeTimeOrientationLandscape: "tmsl",
        accumulativeTimeOrientationPortrait: "tmsp",
        isEngagementEligible: "engisel",
        avgViewableShareOfScreen: "vsos",
        shareOfScreenNotMeasuredReason: "dvp_vsosnmr",
        shareOfScreenReadFromViewportReport: "dvp_vsosrfvp",
        viewPortMetaTagWidth: "dvp_mvpw",
        viewPortMetaTagHeight: "dvp_mvph",
        viewPortMetaTagInitialScale: "dvp_mvpis",
        viewPortMetaTagScalable: "dvp_mvpiss",
        minViewportWidth: "dvp_minvpw",
        minViewportHeight: "dvp_minvph",
        maxViewportWidth: "dvp_maxvpw",
        maxViewportHeight: "dvp_maxvph",
        accumulativeTimeInFocus: "attif",
        looseFocusFalseBucket: "lffb",
        looseFocusTrueBucket: "lftb",
        strictFocusFalseBucket: "sffb",
        strictFocusTrueBucket: "sftb",
        adDuration: "vad",
        adDurationCalculationType: "dvp_vadt",
        omidPlaybackStartIndicator: "omap",
        adVideoTimeLine: "vattp",
        timeUntilUnloadMs: "dvp_unl",
        timeUntilUnloadMsParam: "tuums",
        depth: "msrdp",
        locatorMethods: "naral",
        viewabilityCalculationType: "vct",
        viewportHeight: "vphgt",
        viewportWidth: "vpwdth",
        adWrapperHeight: "chgt",
        adWrapperWidth: "cwdth",
        screenHeight: "scrhgt",
        screenWidth: "scrwdth",
        startPercentage: "strp",
        adVisibleOnload: "advisonl",
        rBV1PassedMs: "isrbpms",
        timeMsUntilAdViewed: "isiabvms",
        unadjustedTimeMsUntilAdViewed: "isuiabvms",
        groupMTimeMsUntilAdViewed: "isgmpims",
        groupMV4DisplayTimeMsUntilAdViewed: "isgmv4dpims",
        groupMV4DisplayTimeMsUntilAdViewedLog: "dvp_gmv4p",
        pmxTimeMsUntilAdViewed: "ispmxpms",
        customTimeMsUntilAdViewed: "iscvmvms",
        customStandardTimeMsUntilAdViewed: "iscspms",
        kmeTimeMsUntilAdViewed: "isbvmvms",
        customAdvertiserStandardType: "cavst",
        customAdvertiserStandardTimeMsUntilAdViewed: "iscavspms",
        videoPlaybackIndicatorDvp: "dvp_vpb",
        videoPlaybackIndicator: "vpm",
        isVideoPreRendered: "prplyd",
        timeMsUntilVideoPlayed: "dvp_plydms",
        groupMV4VideoReachExtensionTimeMsUntilAdViewed: "isgmv4vrpims",
        groupMV4VideoNativeTimeMsUntilAdViewed: "isgmv4vnpims",
        timeMsUntilAdAudibleAndViewableOnCompletionMs: "qcmpiabva",
        lastTimeMsVolumeMute: "admutems",
        timeMsUntilVolumeMeasured: "isavmms",
        q1vpend: "q1vpend",
        q2vpend: "q2vpend",
        q3vpend: "q3vpend",
        q4vpend: "q4vpend",
        q1ps: "q1ps",
        q2ps: "q2ps",
        q3ps: "q3ps",
        q4ps: "q4ps",
        q1iabvms: "q1iabvms",
        q2iabvms: "q2iabvms",
        q3iabvms: "q3iabvms",
        q4iabvms: "q4iabvms",
        exposureFirstQuartileBitwise: "q1ei",
        exposureSecondQuartileBitwise: "q2ei",
        exposureThirdQuartileBitwise: "q3ei",
        exposureFourthQuartileBitwise: "q4ei",
        adSkippedTime: "isadskippedms",
        adSkippableMs: "adskippblems",
        initialOrientationType: "inor",
        timeMsUntilTouch: "engtchms",
        timeMsUntilHover: "enghvms",
        timeMsUntilClick: "engclkms",
        timeMsUntilAdSizeIncrease: "engsincms",
        timeMsUntilAdSizeDecrease: "engsdcms",
        timeMsUntilAdLocated: "engalms",
        timeMsUntilFocusIn: "engifcsms",
        timeMsUntilFocusOut: "engofcsms",
        clickMeasurementMethod: "dvp_ces",
        timeMsUntilMouseMove: "engmsmvms",
        timeMsUntilKeyPress: "engkpssms",
        timeMsUntilScroll: "engscrlms",
        timeMsUntilOrientationChangeToPortrait: "engocptms",
        timeMsUntilOrientationChangeToLandscape: "engoclpms",
        timeMsUntilVolumeIncrease: "engvlincms",
        timeMsUntilVolumeDecrease: "engvldcms",
        timeMsUntilVolumeUnMute: "engvlumms",
        timeMsUntilVolumeMute: "engvlmtms",
        timeMsUntilPause: "engvpsdms",
        timeMsUntilResume: "engvrsmms",
        timeMsUntilSkip: "engvskpms",
        timeMsUntilAbandon: "engvabnms",
        engagementAudienceDisengaged: "dvp_engaud",
        engagementAudienceEngaged: "dvp_engaud",
        engagementAudienceNoEngagement: "dvp_engaud",
        engagementAudienceInterested: "dvp_engaud",
        videoViewabilityIntervalDataAdSizeMethod: "dvp_vvasm",
        videoViewabilityIntervalDataAdSize: "dvp_vvas",
        preVideoAdLoaded: "dvp_in1",
        preVideoAdStarted: "dvp_in2",
        preVideoAdImpression: "dvp_in3",
        preVideoAdStopped: "dvp_in4",
        autoplayDetectionMethod: "dvp_autpm",
        mraidVersion: "dvp_mraidver",
        hiddenAdsIndicator: "dvp_hdnAd",
        adEngagement: "dvp_adEng",
        pageEngagement: "dvp_pageEng",
        noEngagement: "dvp_noEng",
        omidEvents: "omev",
        omidGeometryReasonsBitWise: "dvp_omgr",
        omidTimeMsUntilStartSession: "dvp_omstsms",
        omidTimeMsUntilImpression: "dvp_omimms",
        omidTimeMsUntilStartVideo: "dvp_omstms",
        omidTimeMsUntilEndVideo: "dvp_omensms",
        omidContainerGeometryHeight: "dvp_ocgh",
        omidContainerGeometryWidth: "dvp_ocgw",
        omidMeasuringElement: "dvp_ome",
        omidCreativeVsContainerIndicator: "dvp_omcvc",
        omidImpressionType: "omit",
        omidUnknownImpressionType: "dvp_omuit",
        omidCreativeType: "omct",
        omidUnknownCreativeType: "dvp_omuct",
        omidRenderLogicLog: "dvp_orll",
        omidWebClientEnvironmentLog: "dvp_omdwbclenv",
        omidEnvironmentDvp: "dvp_omdenv",
        omidAdSessionType: "omdsessiontype",
        omidPartnerName: "dvp_omdnpn",
        omidPartnerVersion: "dvp_omdnpv",
        omidJSImplementer: "dvp_omdjsimp",
        omidJSServiceVersion: "dvp_omdjssv",
        omidJSSessionClientVersion: "dvp_omdjsscv",
        omidJSPartnerName: "dvp_omdjspn",
        omidJSPartnerVersion: "dvp_omdjspv",
        omidCustomReferenceData: "dvp_omdcrd",
        shareOfScreenLastDevicePixelRatio: "dvp_dpr",
        devicePixelRatioChanged: "dvp_sosdprc",
        screenSizeChanged: "dvp_sosssc",
        adSizeChanged: "dvp_sosadc",
        timeMsUntilAdNotAttached: "dvp_anatd",
        reasonForRenderedByContainerRenderLogic: "dvp_rfrcl",
        reasonForNotRenderedByContainerRenderLogic: "dvp_rfnrcl",
        timeUntilPageHideEventNonPersistedMs: "yld_phnpms",
        visitResponseSize: "vstsz"
      }, t.RTSDataMapping = {
        timeMsUntilAdMeasured: "IABMeasuredImpression",
        timeMsUntilAdViewed: "IABViewableImpression",
        groupMTimeMsUntilAdMeasured: "GroupMMeasuredImpression",
        groupMTimeMsUntilAdViewed: "GroupMPassedImpression",
        groupMV3TimeMsUntilAdViewed: "GroupMV3StandardPassedImpression",
        groupMV4TimeMsUntilAdViewed: "GroupMV4StandardPassedImpression",
        customTimeMsUntilAdViewed: "CustomViewabilityViewable",
        q1iabvms: "VideoQuartile1ViewableIAB",
        q2iabvms: "VideoQuartile2ViewableIAB",
        q3iabvms: "VideoQuartile3ViewableIAB",
        q4iabvms: "VideoQuartile4ViewableIAB",
        iabv5: "IABAdViewable5Seconds",
        iabv10: "IABAdViewable10Seconds",
        iabv15: "IABAdViewable15Seconds",
        pmxTimeMsUntilAdMeasured: "PMXStandardMeasuredImpression",
        pmxTimeMsUntilAdViewed: "PMXStandardPassedImpression",
        groupMV4DisplayTimeMsUntilAdViewed: "GroupMV4DisplayStandardPassedImpression",
        groupMV4VideoReachExtensionTimeMsUntilAdViewed: "GroupMV4VideoReachExtensionStandardPassedImpression",
        groupMV4VideoNativeTimeMsUntilAdViewed: "GroupMV4VideoNativeStandardPassedImpression",
        engagementAudienceDisengaged: "EngagementAudienceDisengaged",
        engagementAudienceEngaged: "EngagementAudienceEngaged",
        engagementAudienceNoEngagement: "EngagementAudienceNoEngagement",
        engagementAudienceInterested: "EngagementAudienceInterested",
        adEngagement: "AdInteraction",
        pageEngagement: "DeviceInteraction",
        noEngagement: "NoInteraction"
      }, t.TPSDataMapping = {
        checksum: "jurtd",
        flavor: "flvr",
        timeToMeasureMs: "ttmms",
        timeToFirstReportMs: "ttfrms",
        timeToFirstUpdateReportMs: "ttfurm",
        totalMeasurementExecTime: "tmet",
        browserId: "brid",
        browserVersion: "brver",
        browserIdUserAgent: "bridua",
        browserDetectionSource: "bds",
        trafficScenarioType: "tstype",
        isPreRender: "prndr",
        eparams: "eparams",
        windowDepth: "srcurlD",
        additionalUrlDepth: "aUrlD",
        isSsl: "ssl",
        diffSsl: "dvp_diffSSL",
        isMraid: "ismraid",
        isOvv: "isovv",
        prePlayed: "prplyd",
        supplySource: "sup",
        dvtp_src_fetchStart: "dfs",
        dvtp_src_duration: "ddur",
        uid: "uid",
        callbackName: "jsCallback",
        tagVersion: "dvtagver",
        nativeUserAgent: "navUa",
        postMessageSupported: "htmlmsging",
        isChrome: "chro",
        historySize: "hist",
        innerHeight: "winh",
        innerWidth: "winw",
        outerHeight: "wouh",
        outerWidth: "wouw",
        screenHeight: "scah",
        screenWidth: "scaw",
        queuePageID: "qpgid",
        crawlerUrl: "curl",
        isScriptInHeadLocation: "dvp_isOnHead",
        scriptVersion: "jsver",
        dvtpScriptVersion: "tgjsver",
        idcResults: "vavbkt",
        idcError: "dvp_idcerr",
        idcVersion: "lvvn",
        browserSignatureFamilyBits: "bsig",
        browserSignatureBits: "usig",
        hijackedDeviceSignatureBits: "hdsig",
        browserFeatures: "m1",
        referrerDepth: "refD",
        referrerUrl: "referrer",
        referrerUrlExtractedFromSafeFrame: "urlsrc",
        safeFrameExists: "sfe",
        widgetCount: "fwc",
        cookieLength: "fcl",
        domainLookupTime: "flt",
        documentElementCount: "fec",
        iframeCount: "fcifrms",
        historyLength: "brh",
        omidVendorKey: "dvp_omvk",
        omidEnvironment: "omdenv",
        omidWebEnvironmentLog: "dvp_omdwbenv",
        omidAdSessionType: "omdsessiontype",
        omidAppId: "omdappid",
        omidPartnerVersion: "dvp_omdnpv",
        omidAppLibraryVersion: "dvp_omdalv",
        omidJSServiceVersion: "dvp_omdjssv",
        omidJSSessionClientVersion: "dvp_omdjsscv",
        omidJSPartnerName: "dvp_omdjspn",
        omidJSPartnerVersion: "dvp_omdjspv",
        omidDeviceType: "dvp_omddt",
        omidDeviceOSVersion: "dvp_omddosv",
        omidDeviceOS: "dvp_omddos",
        omidCustomReferenceData: "dvp_omdcrd",
        omidContentUrl: "omcurl",
        omidSupports: "dvp_omdsupp",
        omidAccessMode: "omacm",
        scriptDynamicFlags: "sdf",
        omidTagsCounter: "dvp_tgco",
        eparamsLength: "dvp_epl",
        vastWrapperUrl: "wrapperurl",
        numberOfCores: "noc",
        hasTouchPad: "touch",
        navigatorPlatform: "nav_pltfrm",
        ctx: "ctx",
        cmp: "cmp",
        ipos: "ipos",
        sid: "sid",
        plc: "plc",
        adid: "adid",
        crt: "crt",
        btreg: "btreg",
        btadsrv: "btadsrv",
        adsrv: "adsrv",
        advid: "advid",
        num: "num",
        pid: "pid",
        crtname: "crtname",
        unit: "unit",
        chnl: "chnl",
        scusrid: "scusrid",
        tagtype: "tagtype",
        sr: "sr",
        dt: "dt",
        dup: "dup",
        app: "app",
        dvvidver: "dvvidver",
        turl: "turl",
        icall: "icall",
        dv_callback: "dv_callback",
        useragent: "useragent",
        xff: "xff",
        timecheck: "timecheck",
        tvcp: "tvcp",
        vssd: "vssd",
        apifw: "apifw",
        vstvr: "vstvr",
        seltag: "seltag",
        sadv: "sadv",
        ord: "ord",
        litm: "litm",
        scrt: "scrt",
        invs: "invs",
        splc: "splc",
        adu: "adu",
        spos: "spos",
        c1: "c1",
        c2: "c2",
        c3: "c3",
        c4: "c4",
        c5: "c5",
        c6: "c6",
        c7: "c7",
        c8: "c8",
        c9: "c9",
        c10: "c10",
        c11: "c11",
        c12: "c12",
        c13: "c13",
        c14: "c14",
        c15: "c15",
        native: "native",
        gmnpo: "gmnpo",
        isdvvid: "isdvvid",
        vpaidPlayerUrl: "dvpx_asuri",
        msrapi: "msrapi",
        bsimpid: "bsimpid",
        auctionid: "auctionid",
        vermemid: "vermemid",
        source: "source",
        buymemid: "buymemid",
        anadvid: "anadvid",
        ioid: "ioid",
        cpgid: "cpgid",
        cpid: "cpid",
        sellerid: "sellerid",
        pubid: "pubid",
        advcode: "advcode",
        iocode: "iocode",
        cpgcode: "cpgcode",
        cpcode: "cpcode",
        pubcode: "pubcode",
        prcpaid: "prcpaid",
        auip: "auip",
        auua: "auua",
        prr: "prr",
        iframe: "iframe",
        gdpr: "gdpr",
        gdpr_consent: "gdpr_consent",
        errorURL: "errorURL",
        auprice: "auprice",
        ppid: "ppid",
        audeal: "audeal",
        auevent: "auevent",
        auadv: "auadv",
        aucmp: "aucmp",
        aucrtv: "aucrtv",
        auorder: "auorder",
        ausite: "ausite",
        auplc: "auplc",
        auxch: "auxch",
        audvc: "audvc",
        aulitem: "aulitem",
        auadid: "auadid",
        pltfrm: "pltfrm",
        aufilter1: "aufilter1",
        aufilter2: "aufilter2",
        autt: "autt",
        aubndl: "aubndl",
        supportedIntegrations: "mib"
      };
    },
    8170: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DiagnosticParamsSingleton = void 0;
      const r = i(749);
      t.DiagnosticParamsSingleton = new class {
        constructor() {
          this.lastValueReported = {};
        }
        getQueryParamName(e) {
          return `ee_dp_${e}`;
        }
        reportDiagnosticParam(e, t) {
          const i = this.getQueryParamName(e);
          r.MessageHandler.sendMessage({
            [i]: t
          });
        }
        report(e, t) {
          if (this.lastValueReported[e] !== t) {
            this.lastValueReported[e] = t;
            const i = this.getQueryParamName(e);
            r.MessageHandler.sendMessage({
              [i]: t
            });
          }
        }
        reportOnce(e, t) {
          if (!(e in this.lastValueReported)) {
            this.lastValueReported[e] = t;
            const i = this.getQueryParamName(e);
            r.MessageHandler.sendMessage({
              [i]: t
            });
          }
        }
      }();
    },
    8564: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DomAdData = void 0;
      t.DomAdData = class {
        constructor(e, t, i) {
          this.domElement = e, this.depth = t, this.isFullyLoaded = i;
        }
      };
    },
    1800: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TaskTimingEventData = t.LongTaskEventData = t.PerformanceEventData = t.AdRenderedEventData = t.ReserveAdLocatorData = t.DelayTimerData = t.AdCandidateEventData = t.EventData = void 0;
      const r = i(3380);
      class a {
        constructor(e) {
          this.updateTime = e || r.Utilities.getTimeDiff();
        }
      }
      t.EventData = a;
      t.AdCandidateEventData = class extends a {
        constructor(e, t = {}) {
          super(t.updateTime), this.adCandidate = e, this.relevantData = t, this.updateTime = t.updateTime || this.updateTime, t.updateTime = this.updateTime;
        }
      };
      t.DelayTimerData = class extends a {
        constructor(e) {
          super(), this.delayTimeMS = e;
        }
      };
      t.ReserveAdLocatorData = class extends a {
        constructor(e) {
          super(), this.adPriority = e;
        }
      };
      t.AdRenderedEventData = class extends a {
        constructor(e) {
          super(), this.uid = e;
        }
      };
      t.PerformanceEventData = class extends a {
        constructor(e, t) {
          super(), this.performanceData = e, this.adData = t;
        }
      };
      t.LongTaskEventData = class extends a {
        constructor(e) {
          super(), this.longTasks = e;
        }
      };
      t.TaskTimingEventData = class extends a {
        constructor(e) {
          super(), this.taskTimings = e;
        }
      };
    },
    9878: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TPSData = void 0;
      const r = i(3380);
      t.TPSData = class {
        constructor() {
          this.tagVersion = "6.1.src", this.scriptVersion = r.Utilities.getVersion(), this.trafficScenarioType = 0, this.additionalParams = {}, this.dvpParamsFlags = [];
        }
      };
    },
    8519: function (e, t, i) {
      const r = i(1657);
      i(6875);
      const a = i(1759),
        n = i(6671),
        s = i(3380),
        o = i(194),
        d = i(749),
        l = i(425);
      i(8962);
      const c = i(7360),
        u = i(7749),
        p = i(1063),
        h = i(3219),
        g = i(3831),
        m = i(2452),
        v = i(4021),
        b = i(7196),
        y = i(9608),
        f = i(8463),
        w = i(4183),
        D = i(7999),
        E = i(6044),
        S = i(1816),
        A = i(3363),
        T = i(1006),
        C = i(9289),
        M = i(5443),
        V = i(8874),
        I = i(2237),
        O = i(3081),
        P = i(6195),
        B = i(3656),
        _ = i(8029),
        L = i(5152),
        R = i(9401),
        k = i(615),
        W = i(7912),
        j = i(7175),
        x = i(4771),
        F = i(8877),
        U = i(876),
        N = i(5784),
        z = i(6490),
        H = i(7642),
        G = i(2181),
        q = i(6825),
        Q = i(9045),
        K = i(7827),
        $ = i(1847),
        J = i(458),
        X = i(8642),
        Y = i(5993),
        Z = i(1726),
        ee = i(9611),
        te = i(3054),
        ie = i(7938),
        re = i(8123),
        ae = i(8635),
        ne = i(5409),
        se = i(4241),
        oe = i(223),
        de = i(5500),
        le = i(4691),
        ce = i(9615),
        ue = i(6265),
        pe = i(710),
        he = i(5593),
        ge = i(5157),
        me = i(1061),
        ve = i(1886),
        be = i(1776),
        ye = i(8720),
        fe = i(1074),
        we = i(4892),
        De = i(1800),
        Ee = i(8010),
        Se = i(9688),
        Ae = i(8397),
        Te = i(6574),
        Ce = i(5390),
        Me = i(6783),
        Ve = i(7998),
        Ie = i(6892),
        Oe = i(2221),
        Pe = i(1079),
        Be = i(370),
        _e = i(8213),
        Le = i(6800),
        Re = i(8357),
        ke = i(8453),
        We = i(1059),
        je = i(5070),
        xe = i(4053),
        Fe = i(7741),
        Ue = i(8456),
        Ne = i(5817),
        ze = i(9582),
        He = i(6254),
        Ge = i(4932),
        qe = i(6674),
        Qe = i(9198),
        Ke = i(1606),
        $e = i(2359),
        Je = i(8345),
        Xe = i(8076),
        Ye = i(5747),
        Ze = i(6789),
        et = i(6355),
        tt = i(8409),
        it = i(7815),
        rt = i(5648),
        at = i(6901),
        nt = i(9106),
        st = i(3454),
        ot = i(3500),
        dt = i(6715),
        lt = i(7527),
        ct = i(7026),
        ut = i(1354),
        pt = i(4115),
        ht = i(1194),
        gt = i(1391),
        mt = i(712),
        vt = i(992),
        bt = i(4194),
        yt = i(8733),
        ft = i(3738),
        wt = i(6681),
        Dt = i(6689),
        Et = i(720),
        St = i(3502),
        At = i(1822),
        Tt = i(2968),
        Ct = i(3723),
        Mt = i(1849),
        Vt = i(334),
        It = i(6128),
        Ot = i(7015),
        Pt = i(2020),
        Bt = i(9878),
        _t = (i(6625), i(3868)),
        Lt = i(4153),
        Rt = i(6991),
        kt = i(5765),
        Wt = i(3384),
        jt = i(4342),
        xt = i(417),
        Ft = i(2530),
        Ut = i(8170),
        Nt = i(2258),
        zt = i(6593),
        Ht = i(4372),
        Gt = i(2727),
        qt = i(6820),
        Qt = i(3038),
        Kt = i(1030),
        $t = i(3773),
        Jt = i(9979),
        Xt = i(5433),
        Yt = i(7460),
        Zt = i(68);
      Qt.default.setMainImportsEndTime(), Qt.default.setMainImportsStartTime(r.mainImportsStartTime), e.exports = () => {
        let e = !1;
        function t() {
          const e = o.DvObject.getImpressionId(dvWindow);
          o.DvObject.setImpressionId(e), d.MessageHandler.firePreviousEvents(), d.MessageHandler.sendMessage({
            msrjs: s.Utilities.getVersion()
          }), c.EventBus.dispatchEvent(c.DvEvent.impressionServed, new De.EventData());
        }
        function i() {
          const e = [p.VpaidWrapper, wt.MraidWrapper, Dt.OmidWrapper];
          return [new Ee.DvParamsCollector(), new yt.ParamUrlExtractionMethodCollector(), new Se.BrowserCollector(), new Ae.TrafficScenarioCollector(), new h.PreRenderCollector(), new ke.MraidCollector(), new He.OmidContextCollector(), new ze.TpsApiTypeCollector(), new Re.SslCollector(), new We.SupplySourceCollector(), new Ge.ReferrerCollector(), new Ve.WindowPropertiesCollector(), new Te.StrCollector(), new Ce.VideoParamsCollector(), new Me.IOSMapleCollector(), new Ie.DomScriptCollector(), new Oe.ScriptsPerformanceCollector(), new Pe.UserCollector(), new Be.BrowserSignatureCollector(), new vt.InjectionDetectionCodeCollector(), new bt.HijackedDeviceSignatureCollector(), new _e.BrowserFeaturesCollector(), new Le.AttributeCollector(), new nt.VpaidPlayerUrlCollector(), new qe.VastUrlCollector(), new pt.HardwareFeaturesCollector(), new At.SupportedIntegrationsCollector(e)];
        }
        function r() {
          new jt.PageEventsLoggerBL(), new Mt.OmidLoggerBL(), new Vt.OmidImpressionEventInfoBL(), new ue.ExposureCompatibilityIndicator(), new Et.EligibilityCompatibilityIndicator(), new $.AdSelectorLogger(), new St.AdElementInfoExtractorBL(), new Rt.CreativeVsContainerBL(), new kt.AdDomElementObserverBL(), new B.ExposureBL(), new ye.AdSizeBL(), new ft.AdWrapperSizeBL(), new X.PMXDisplayViewabilityBL(), new G.PMXVideoViewabilityBL(), new re.IabNotViewReasonsViewabilityBL(), new _.IabDisplayViewabilityBL(), new L.IabVideoViewabilityBL(), new Y.IabVideoQuartileViewabilityBL(), new ut.VideoQuartileFullOnScreenBL(), new st.VideoFullQuartileAudibleBL(), new ge.IabDisplayViewabilityForXSecondsBL(), new me.IabVideoViewabilityForXSecondsBL(), new W.GroupMDisplayViewabilityBL(), new j.GroupMVideoViewabilityBL(), new q.GroupMV4NonMobileDisplayViewabilityBL(), new le.GroupMV4MobileDisplayViewabilityBL(), new K.GroupMV4VideoNativeViewabilityBL(), new Q.GroupMV4VideoReachExtensionViewabilityBL(), new z.CustomDisplayViewabilityBL(), new ne.CustomStandardDisplayViewabilityBL(), new H.CustomVideoViewabilityBL(), new se.CustomStandardVideoViewabilityBL(), new gt.CustomAdvertiserViewabilityStandardBL(), new te.KMEVideoViewabilityBL(), new x.BucketsDisplayViewabilityBL(), new F.BucketsVideoViewabilityBL(), new ie.EndQuartileViewabilityBL(), new J.RbViewabilityBL(), new Z.ViewabilityStartPercentageBL(), new ee.QuartileBucketsVolumeBL(), new R.ReportAdManagerRTS(), new ae.JsCallbackBL(), new de.MobileOrientationBL(), new we.FocusBucketsBL(), new It.Cm360Logger(new Ot.Cm360AdContainerInspectorFactory("data-doubleverify-container")), new Pt.RenderingMethodLogger(), Yt.EngagementEligibleResearchFeatureFlag.isEnabled() && new Xt.EngagementEligibleResearchBL(), new Tt.PerformanceMetricsBL(), new dt.ViewableShareOfScreenBL(), new pe.EngagementCompatibilityIndicator(), new v.AdSelector(), new y.AdLocatedBL(), new ve.VideoMarkImpressionAsRenderedBL(), new N.VideoStoppedBL(), new at.VideoSkippableBL(), new U.VideoCompleteBL(), new k.VideoLengthBL(), new oe.VolumeBL(), new f.InteractionHoverBL(), new w.InteractionTouchBL(), new D.InteractionClickBL(), new E.InteractionVolumeBL(), new S.InteractionPauseBL(), new A.InteractionResumeBL(), new T.InteractionSkipBL(), new C.InteractionAbandonBL(), new V.InteractionFocusBL(), new M.InteractionAdSizeBL(), new $e.PageInteractionKeyPressBL(), new Je.PageInteractionMouseMoveBL(), new Xe.PageInteractionScrollBL(), new et.PageInteractionOrientationChangeLandscapeBL(), new tt.PageInteractionOrientationChangePortraitBL(), new rt.EngagementReportRtsBL(), new g.ReportAdManagerTPS(), new Ct.DataTransparencyBL(), new Ft.PerformanceApiBL(), new Ht.PerformanceLongTasksBL(), e && new Gt.PerformanceTaskTimingBL(), new fe.NormalizedAdSizeBL();
        }
        function ei() {
          new ot.ShareOfScreenResearchBL();
        }
        function ti() {
          new m.FocusDataCollector(), new P.StrictFocusDataCollector(), new O.ViewabilityDataCollector(), new ce.BoundariesViewabilityDataCollector(), new Lt.InteractionEventDataCollector(), new b.OmidInteractionDataCollector(), new he.InteractionAdSizeDataCollector(), new be.VideoPlaybackDataCollector(), new it.HiddenAdsDataCollector(), new ht.AutoplayDataCollector(), new Wt.PageEventsDataCollector(), new xt.PerformanceApiDataCollector(), new zt.PerformanceLongTasksDataCollector(), new I.InteractionUnloadDataCollector(), new Qe.PageInteractionMouseMoveDataCollector(), new Ke.PageInteractionKeyPressDataCollector(), new Ye.PageInteractionScrollDataCollector(), new Ze.PageInteractionOrientationChangedDataCollector();
        }
        function ii() {
          Jt.AdLocatorSellerTagFlowFeatureFlag.isEnabled() ? (!function (e, t, i) {
            ri(e);
            let r = 1;
            const a = l.BrowserAdaptor.setTimeout(() => {
                c.EventBus.removeEventListener(n), ri(t), r++, Ut.DiagnosticParamsSingleton.reportDiagnosticParam("noalsu", r);
              }, i),
              n = c.EventBus.addEventListener(c.DvEvent.bestAdCandidateChanged, () => {
                l.BrowserAdaptor.clearTimeout(a), c.EventBus.removeEventListener(n), Ut.DiagnosticParamsSingleton.reportDiagnosticParam("noalsu", r);
              });
          }(Nt.sellerTag.adLocators, Nt.sellerTag.fallbackAdLocators, 1500), Ut.DiagnosticParamsSingleton.reportDiagnosticParam("seltagmals", 1)) : ri(Nt.defaultAdLocators);
        }
        function ri(e) {
          e.forEach(e => new e().start());
        }
        function ai() {
          u.DvTagDataObject.start(), ct.RenderLogicFactory.getRenderLogic().start(), p.VpaidWrapper.start();
          const e = i(),
            t = (r = e, [new je.TPSDataCollector(r), new Fe.MeasureGdpr(), new Ue.MeasureGdprV2(), new xe.GlobalVariablesInjection()]);
          var r;
          const a = new Bt.TPSData();
          return t.forEach(e => {
            try {
              e.isSupported(a) && e.executePhase(a);
            } catch (t) {
              d.MessageHandler.sendError(mt.ClientErrorType.VisitLogicError, t, e.toString());
            }
          }), a;
        }
        function ni(e) {
          !function () {
            if (!u.DvTagDataObject.getIsCm360CreativeWrapping() || u.DvTagDataObject.getTagType() !== mt.DvTagType.Display) return;
            const e = u.DvTagDataObject.getCm360ContainerId(),
              t = l.BrowserAdaptor.getElementById(e);
            t && l.BrowserAdaptor.setElementStyle(t, "visibility", "");
          }(), function (e) {
            Qt.default.setFireVisitExecutionStartTime();
            const t = new Ne.ScriptsInjection();
            t.isSupported() && t.executePhase(e), oi = !0, Qt.default.setFireVisitExecutionEndTime();
          }(e), function () {
            Qt.default.setInitMeasurementExecutionStartTime();
            const e = [qt.trackPerformanceWhenExecuted({
              name: "iabletms"
            }, r), qt.trackPerformanceWhenExecuted({
              name: "iadletms"
            }, ei), qt.trackPerformanceWhenExecuted({
              name: "iadcetms"
            }, ti), qt.trackPerformanceWhenExecuted({
              name: "ialeetms"
            }, ii), qt.trackPerformanceWhenExecuted({
              name: "icifdetms"
            }, () => new lt.CollectIframeFallbackData())];
            $t.AsyncSplitInitMeasurementFeatureFlag.isEnabled() ? Kt.scheduleTasks(e) : e.forEach(e => e()), Qt.default.setInitMeasurementExecutionEndTime();
          }();
        }
        function si() {
          if (Qt.default.setInitMainExecutionStartTime(), function () {
            const {
              omidJsClient: e,
              omidSessionData: t,
              isDomlessEnvironment: i,
              isFrameSupported: r,
              tags: a,
              tagsCounter: n,
              omidSessionStartTime: s,
              omidVendorKey: o,
              tagData: d,
              restrictedAccess: l,
              pubSub: c,
              isPubSubEval: u,
              sharedUniqueKey: p,
              dvGetOmidVerificationClient: h
            } = $dv;
            $dv = {
              dvGetOmidVerificationClient: h,
              omidJsClient: e,
              omidSessionData: t,
              isDomlessEnvironment: i,
              isFrameSupported: r,
              tags: a,
              tagsCounter: n,
              omidSessionStartTime: s,
              omidVendorKey: o,
              tagData: d,
              restrictedAccess: l,
              pubSub: c,
              isPubSubEval: u,
              sharedUniqueKey: p
            };
          }(), function () {
            const e = o.DvObject.getFrameId(dvWindow),
              i = o.DvObject.getImpressionId(dvWindow),
              r = o.DvObject.getDvObject();
            r.isPubSubEval || i || (r.pubSub = c.EventBusGlobal, r.isPubSubEval = !0), r.pubSub.excludeFrameId && r.pubSub.excludeFrameId(e), r.pubSub.subscribe(c.DvEvent.impressionServed, e, "DVM_impressionServed", t);
          }(), !l.BrowserAdaptor.isBrowserSupported()) return;
          e = !_t.WindowAdaptor.isDomlessEnvironment() && qt.isPerformanceApiSupported() && s.Utilities.isPercentageCriteriaPassed(10), Zt.ExperimentsFeatureFlags.init(e);
          const i = qt.invokeWithPerformanceMeasures({
            name: "ctdetms"
          }, ai);
          u.DvTagDataObject.getIsMonitoring() && ni(i), Qt.default.setInitMainExecutionEndTime();
        }
        let oi = !1;
        try {
          o.DvObject.setDvGetOmidVerificationClient(a);
          const t = new n.OmidVerificationClientWrapper(a());
          t.isSupported() ? t.ready(si) : si(), Qt.default.setTotalSyncTimeEndTime(), function () {
            if (!e) return;
            const t = Qt.default.getBenchmarks();
            qt.scheduleTask(() => {
              [...t, {
                taskDetails: {
                  name: "srbf"
                },
                startTime: 0,
                endTime: 1
              }].forEach(({
                taskDetails: e,
                startTime: t,
                endTime: i
              }) => qt.reportTaskTiming(e, t, i));
            });
          }();
        } catch (e) {
          oi ? d.MessageHandler.sendError(mt.ClientErrorType.PostMeasuredGlobalMainError, e) : d.MessageHandler.sendError(mt.ClientErrorType.PreMeasuredGlobalMainError, e);
        }
      };
    },
    7527: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CollectIframeFallbackData = void 0;
      const r = i(7360),
        a = i(712),
        n = i(194),
        s = i(3868),
        o = i(749),
        d = i(425);
      t.CollectIframeFallbackData = class {
        constructor() {
          this.htmlSampleRate = .1, r.EventBus.addEventListener(r.DvEvent.adSelected, this.collectIframeData.bind(this));
        }
        collectIframeData(e) {
          let t = e.adCandidate,
            i = n.DvObject.getImpressionId(s.WindowAdaptor.currentWindow());
          if (t && t.domElement && t.locatorMethods == a.LocatorMethods.DisplayIframeFallback) {
            let e = s.WindowAdaptor.workingDocumentElement();
            100 * Math.random() <= this.htmlSampleRate && this.uploadHtml(e.outerHTML, i);
            let t = {};
            this.iframeElementsTagsStatistics(e, t);
            let r = "";
            Object.keys(t).forEach(e => r += e + ":" + t[e] + ","), o.MessageHandler.registerEventCall(i, {
              dvp_itg: r
            });
          }
        }
        uploadHtml(e, t) {
          let i = new Date(),
            r = i.getDate() > 9 ? i.getDate().toString() : "0" + i.getDate().toString(),
            a = i.getFullYear(),
            n = i.getMonth() > 9 ? i.getMonth().toString() : "0" + i.getMonth().toString(),
            o = new XMLHttpRequest();
          o.open("PUT", "https://d23xwq4myz19mk.cloudfront.net/htmldata/iframefallback/" + a + r + n + "/" + s.WindowAdaptor.workingWindow().location.hostname + "/" + t + "_iframefallback_data.html", !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), o.setRequestHeader("x-amz-acl", "public-read"), o.send(e);
        }
        iframeElementsTagsStatistics(e, t) {
          if (e.hasChildNodes()) {
            let i = d.BrowserAdaptor.getElementChildren(e);
            for (let e of i) t.hasOwnProperty(e.nodeName) ? t[e.nodeName]++ : t[e.nodeName] = 1, this.iframeElementsTagsStatistics(e, t);
          }
        }
      };
    },
    5433: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EngagementEligibleResearchBL = void 0;
      const r = i(6751),
        a = i(7360),
        n = i(8170),
        s = i(6689),
        o = i(194);
      class d extends r.BaseAdBL {
        constructor() {
          super(...arguments), this.events = {
            click: "ices",
            mouseover: "imoes",
            touchstart: "itses",
            blur: "ibes"
          };
        }
        isSupported() {
          return !s.OmidWrapper.isSupported() && !o.DvObject.isRestrictedAccess();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [a.DvEvent.adSelected]: this.reportIsEventSupported.bind(this)
          };
        }
        reportIsEventSupported() {
          Object.keys(this.events).forEach(e => {
            n.DiagnosticParamsSingleton.reportOnce(this.events[e], this.isEventSupportedByBrowser(e) ? 1 : 0);
          });
        }
        isEventSupportedByBrowser(e) {
          const t = document.createElement("div");
          let i = (e = "on" + e) in t;
          return i || (t.setAttribute(e, "return;"), i = "function" == typeof t[e]), t.remove(), i;
        }
        init() {}
      }
      t.EngagementEligibleResearchBL = d;
    },
    1849: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidLoggerBL = void 0;
      const r = i(6689),
        a = i(630),
        n = i(6751),
        s = i(7360),
        o = i(3380),
        d = i(194),
        l = i(8379),
        c = i(8170);
      class u extends n.BaseAdBL {
        constructor() {
          super(...arguments), this.renderEventTypes = {
            IMPRESSION_EVENT: 1,
            GEOMETRY_CHANGE_AD_DIM: 2,
            GEOMETRY_CHANGE_PCT_IN_VIEW: 4,
            IMPRESSION_EVENT_PCT_IN_VIEW: 8
          };
        }
        isSupported() {
          return r.OmidWrapper.isSupported();
        }
        getEventsAndCallbacksToRegister() {
          return {
            [s.DvEvent.adCandidateApproved]: e => this.adCandidateApproved(e)
          };
        }
        init() {}
        adCandidateApproved(e) {
          r.OmidWrapper.registerSessionObserver(t => this.omidSessionEventHandler(e, t)), o.Utilities.objectValues(a.OmidAdEventType).filter(e => e !== a.OmidAdEventType.MEDIA && e !== a.OmidAdEventType.VIDEO).forEach(t => {
            r.OmidWrapper.addEventListener(t, t => this.omidEventHandler(t, e));
          });
        }
        omidEventHandler(e, t) {
          try {
            switch (e.type) {
              case a.OmidAdEventType.IMPRESSION:
                this.handleImpressionEvent(e, t);
                break;
              case a.OmidAdEventType.GEOMETRY_CHANGE:
                this.handleGeometricChangeEvent(e, t);
                break;
              case a.OmidAdEventType.START:
                this.handleStartEvent(e, t);
                break;
              case a.OmidAdEventType.COMPLETE:
                this.handleCompleteEvent(e, t);
            }
            this.onTriggeredOmidEvent(t, e.type);
          } catch (e) {}
        }
        handleImpressionEvent(e, t) {
          var i, r;
          let a = 0;
          if (a |= this.renderEventTypes.IMPRESSION_EVENT, null === (r = null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.adView) || void 0 === r ? void 0 : r.percentageInView) {
            a |= e.data.adView.percentageInView > 0 ? this.renderEventTypes.IMPRESSION_EVENT_PCT_IN_VIEW : 0;
          }
          t.adCandidate.omidRenderLogicLog |= a;
        }
        handleStartEvent(e, t) {
          t.adCandidate.omidTimeMsUntilStartVideo = o.Utilities.getTimeDiff();
        }
        handleCompleteEvent(e, t) {
          t.adCandidate.omidTimeMsUntilEndVideo = o.Utilities.getTimeDiff();
        }
        geometricChangeRenderTrigger(e) {
          var t, i;
          let r = 0;
          if (null === (i = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.adView) || void 0 === i ? void 0 : i.geometry) {
            const t = e.data.adView.geometry.width > 0 && e.data.adView.geometry.height > 0,
              i = e.data.adView.percentageInView > 0;
            (i || t) && (r |= t ? this.renderEventTypes.GEOMETRY_CHANGE_AD_DIM : 0, r |= i ? this.renderEventTypes.GEOMETRY_CHANGE_PCT_IN_VIEW : 0);
          }
          return r;
        }
        handleGeometricChangeEvent(e, t) {
          t.adCandidate.omidRenderLogicLog |= this.geometricChangeRenderTrigger(e), this.extractAdViewabilityInfo(e, t);
        }
        extractAdViewabilityInfo(e, t) {
          var i;
          const {
            containerGeometry: r,
            measuringElement: a
          } = (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.adView) || {};
          if (r) {
            const {
              height: e,
              width: i
            } = r;
            t.adCandidate.omidContainerGeometryHeight = e, t.adCandidate.omidContainerGeometryWidth = i;
          }
          t.adCandidate.omidMeasuringElement = this.mapOmidMeasuringElement(a), t.adCandidate.omidCreativeVsContainerIndicator = this.getCreativeVsContainerIndicator(r);
        }
        getCreativeVsContainerIndicator(e) {
          return o.Utilities.isNullOrEmpty(e) ? 2 : 1;
        }
        mapOmidMeasuringElement(e) {
          return o.Utilities.isNullOrEmpty(e) ? 0 : e ? 1 : 2;
        }
        omidSessionEventHandler(e, t) {
          if (null == t ? void 0 : t.type) {
            if (t.type === a.OmidAdEventType.SESSION_START) this.omidSessionStartEventHandler(e, t);
            this.onTriggeredOmidEvent(e, t.type);
          }
        }
        omidSessionStartEventHandler(e, t) {
          var i, r;
          d.DvObject.getDvObject().omidSessionStartTime && (e.adCandidate.omidTimeMsUntilStartSession = o.Utilities.getTimeDiffNoAbs(d.DvObject.getDvObject().omidSessionStartTime));
          const a = t.data;
          (null == a ? void 0 : a.context) && (e.adCandidate.omidJSSessionClientVersion = null === (i = a.context.omidJsInfo) || void 0 === i ? void 0 : i.sessionClientVersion, e.adCandidate.omidJSPartnerVersion = null === (r = a.context.omidJsInfo) || void 0 === r ? void 0 : r.partnerVersion), (null == a ? void 0 : a.pageUrl) && c.DiagnosticParamsSingleton.reportDiagnosticParam("ompusse", a.pageUrl);
        }
        onTriggeredOmidEvent(e, t) {
          (e.adCandidate.omidEvents & l.OmidEvents[t]) != l.OmidEvents[t] && (e.adCandidate.omidEvents |= l.OmidEvents[t], this.reportData(e));
        }
        reportData(e) {
          s.EventBus.dispatchEvent(s.DvEvent.reportData, e);
        }
      }
      t.OmidLoggerBL = u;
    },
    136: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TagExtensionRegistry = void 0;
      t.TagExtensionRegistry = () => ({
        tagExtensions: [],
        register(e, t) {
          this.tagExtensions.push([e, t]);
        },
        getTagExtensions() {
          return this.tagExtensions;
        }
      });
    },
    3091: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Context = void 0;
      t.Context = (e, t, i, r, a) => ({
        getImpressionId: () => e.getImpressionId(null),
        getTagObject() {
          return e.getDvObject().tags[this.getImpressionId()];
        },
        messageHandler: t,
        eventBus: i,
        sendBeacon: r.sendBeacon.bind(r),
        addScriptAsync: r.addScriptAsync.bind(r),
        resolveMacros: a.resolveMacros
      });
    },
    1893: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RealTimeNotifications = void 0;
      const r = i(712);
      t.RealTimeNotifications = (e, t) => {
        function i(e) {
          const i = t.getTagObject(),
            a = t.resolveMacros(e.url, i);
          "image" === e.actionType ? t.sendBeacon(a) : "javascript" === e.actionType ? t.addScriptAsync(a, i.tagElement.parentElement) : t.messageHandler.sendError(r.ClientErrorType.TagExtensionExecutionError, new Error("Rtn error: invalid action name"), "", {
            te_id: this.getId().toString()
          });
        }
        return {
          getId: () => 1,
          getDomain: () => "ee",
          isSupported: () => Array.isArray(e.rtnEvents) && e.rtnEvents.length > 0 && "object" == typeof e.rtnEvents[0],
          execute() {
            for (const r of e.rtnEvents) {
              const e = r.eventName;
              for (const a of r.actions) t.eventBus.addEventListener(e, i.bind(this, a), `RTN_${e}`);
            }
          }
        };
      };
    },
    9532: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TagExtensionsHandler = void 0;
      const r = i(136),
        a = i(1893),
        n = i(2491);
      t.TagExtensionsHandler = e => ({
        execute() {
          const t = r.TagExtensionRegistry();
          t.register(a.RealTimeNotifications, "ee");
          n.TagExtensionOrchestrator(t, e).execute();
        }
      });
    },
    2491: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TagExtensionOrchestrator = void 0;
      const r = i(749),
        a = i(712),
        n = i(3091),
        s = i(194),
        o = i(7360),
        d = i(3380),
        l = i(425),
        c = i(5501);
      t.TagExtensionOrchestrator = (e, t) => ({
        execute() {
          var i;
          const u = e.getTagExtensions(),
            p = n.Context(s.DvObject, r.MessageHandler, o.EventBus, l.BrowserAdaptor, d.Utilities);
          let h = 0;
          for (const [e, n] of u) {
            const s = e(null !== (i = t[n]) && void 0 !== i ? i : {}, p);
            if (s.isSupported()) try {
              s.execute(), h |= s.getId();
            } catch (e) {
              r.MessageHandler.sendError(a.ClientErrorType.TagExtensionExecutionError, e, "", {
                te_id: s.getId().toString()
              });
            }
          }
          c.TagExtensionsExecutionParamsSingleton.reportTagExtensionsExecutionParams("exec", h);
        }
      });
    },
    5501: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TagExtensionsExecutionParamsSingleton = t.TagExtensionsExecutionParamsUtils = void 0;
      const r = i(749);
      class a {
        getQueryParamName(e) {
          return `te_${e}`;
        }
        reportTagExtensionsExecutionParams(e, t) {
          const i = this.getQueryParamName(e);
          r.MessageHandler.sendMessage({
            [i]: t
          });
        }
      }
      t.TagExtensionsExecutionParamsUtils = a, t.TagExtensionsExecutionParamsSingleton = new a();
    },
    4053: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GlobalVariablesInjection = void 0;
      const r = i(2196),
        a = i(3868),
        n = i(3380),
        s = i(7749),
        o = i(749),
        d = i(7658),
        l = i(194),
        c = i(7429),
        u = i(712),
        p = i(425),
        h = i(9532);
      t.GlobalVariablesInjection = class {
        isSupported() {
          return !0;
        }
        executePhase(e) {
          const t = l.DvObject.getDvObject(),
            i = new r.DvBackwardCompatibilityClass();
          t.dvObjType = t.dvObjType || i.dvObjType, t.resolveMacros = t.resolveMacros || i.resolveMacros, t.registerEventCall = t.registerEventCall || i.registerEventCall, t.createEventCallUrl = t.createEventCallUrl || i.createEventCallUrl, t.getWorkingWindow = t.getWorkingWindow || i.getWorkingWindow, t.getMraid = t.getMraid || i.getMraid, t.messages = t.messages || i.messages, t.domUtilities = t.domUtilities || i.domUtilities, t.pubSub = t.pubSub || i.pubSub, t.CommonData = t.CommonData || i.CommonData, t.tags = t.tags || i.tags, t.sendBeacon = p.BrowserAdaptor.sendBeacon.bind(p.BrowserAdaptor), "undefined" == typeof window && a.WindowAdaptor.setGlobalVariable("window", dvWindow);
          const n = a.WindowAdaptor.workingWindow(),
            s = a.WindowAdaptor.currentWindow();
          n._dv_win = n, s._dv_win = n;
          let o = c.EventIdGeneratorAdaptor;
          n[e.callbackName] = (t, i, r, a, n = {}) => {
            this.generateCallback(e, t, i, r, a, o, n);
          };
        }
        toString() {
          return "GlobalInjection";
        }
        extractHostname(e) {
          const t = e.indexOf("//") + 2,
            i = e.indexOf("/", t);
          return e.substring(t, i);
        }
        generateCallback(e, t, i, r, c, p, g) {
          try {
            if (!a.WindowAdaptor.isDomlessEnvironment()) {
              const e = a.WindowAdaptor.currentDocument();
              l.DvObject.setVisitReadyState(e.readyState);
            }
            t.tags[r] = {}, t.tags[r].type = "monitoring", t.tags[r].beginVisitCallbackTS = n.Utilities.getCurrentTime(), t.tags[r].eventIdGenerator = p, t.tags[r].set = e => {
              n.Utilities.extend(e, t.tags[r]);
            }, t.tags[r].getTimeDiff = () => n.Utilities.getCurrentTime() - l.DvObject.getDvObject().tags[r].beginVisitCallbackTS, t.tags[r].tagElement = s.DvTagDataObject.getDVScript(), t.tags[r].ServerPublicDns = this.extractHostname(s.DvTagDataObject.getServerPrefix()), s.DvTagDataObject.setServerPrefix(`https://${c}/`), t.tags[r].ServerPublicDns = c, l.DvObject.setImpressionId(r), a.WindowAdaptor.setGlobalVariable("$uid", r);
            const u = s.DvTagDataObject.getCaseSensitiveParams();
            t.tags[r].set(u);
            const m = n.Utilities.mapData(e, d.TPSDataMapping);
            n.Utilities.extend(e.additionalParams, m), t.tags[r].set(m), t.tags[r].uid = r, t.tags[r].dv_protocol = "https:";
            const v = a.WindowAdaptor.monitorScriptsPerformance(i, {
              visit: ["duration"]
            });
            v.visit_duration && o.MessageHandler.sendMessage({
              vdur: v.visit_duration
            });
            h.TagExtensionsHandler(g).execute();
          } catch (e) {
            o.MessageHandler.sendError(u.ClientErrorType.TagCommunicationError, e);
          }
        }
      };
    },
    7741: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MeasureGdpr = void 0;
      const r = i(425),
        a = i(3868),
        n = i(749);
      t.MeasureGdpr = class {
        constructor() {
          this.cmpCallbacks = {}, this.getConsentDataCallback = (e, t) => {
            try {
              const e = a.WindowAdaptor.currentWindow(),
                i = a.WindowAdaptor.workingDocument();
              e.performance.mark("dv_gdpr_end"), e.performance.measure("dv_gdpr", "dv_gdpr_start", "dv_gdpr_end");
              let r = e.performance.getEntriesByName("dv_gdpr");
              if (r.length > 0) {
                let e = r[0];
                isNaN(e.duration) || n.MessageHandler.sendMessage({
                  dvp_gdDur: Math.round(e.duration),
                  dvp_gdDome: "complete" == i.readyState ? "1" : "0",
                  dvp_gdDoms: this.gdprIsDocumentCompleted,
                  dvp_gdSucc: t ? "1" : "0"
                }, !0);
              }
            } catch (e) {
              this.sendGdprError("9");
            }
          }, this.handleCmpReturn = e => {
            try {
              let t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
              if (t.__cmpReturn) {
                let e = t.__cmpReturn,
                  i = this.cmpCallbacks[e.callId];
                i ? (i(e.returnValue, e.success), delete this.cmpCallbacks[e.callId]) : this.sendGdprError("6");
              }
            } catch (e) {}
          };
        }
        isSupported() {
          return !a.WindowAdaptor.isDomlessEnvironment() && a.WindowAdaptor.isPerformanceAPISupported();
        }
        executePhase(e) {
          this.gdprIsDocumentCompleted = "complete" == a.WindowAdaptor.workingDocument().readyState ? "1" : "0", this.gdprPerformanceMark();
          let t = this.locateCmpApi();
          if (t && "1" != t) this.sendGdprError(t);else if (this.cmpFrame) if (this.cmpIsFunctionCall) this.invokeCmpCommandByFunction("getConsentData", null, this.getConsentDataCallback);else {
            if (!a.WindowAdaptor.isPostMessageSupported()) return void this.sendGdprError("2");
            this.addEventListenerForCmpResponses(), this.invokeCmpCommandByPostMessage("getConsentData", null, this.getConsentDataCallback);
          }
        }
        toString() {
          return "MesasureGdpr";
        }
        locateCmpApi() {
          let e,
            t = a.WindowAdaptor.currentWindow();
          for (; !this.cmpFrame;) {
            try {
              this.cmpIsFunctionCall = "function" == typeof t.__cmp, (this.cmpIsFunctionCall || t.frames.__cmpLocator) && (this.cmpFrame = t, e = "1");
            } catch (t) {
              e = "3";
            }
            try {
              if (a.WindowAdaptor.isTop(t)) break;
              t = a.WindowAdaptor.getWindowParent(t, !0);
            } catch (t) {
              e = "8";
              break;
            }
          }
          return e;
        }
        addEventListenerForCmpResponses() {
          r.BrowserAdaptor.addEventListener("message", this.handleCmpReturn, a.WindowAdaptor.currentWindow());
        }
        invokeCmpCommandByFunction(e, t, i) {
          try {
            this.cmpFrame.__cmp(e, t, i);
          } catch (e) {
            this.sendGdprError("4");
          }
        }
        invokeCmpCommandByPostMessage(e, t, i) {
          let r = Math.random().toString(),
            a = {
              __cmpCall: {
                command: e,
                parameter: t,
                callId: r
              }
            };
          this.cmpCallbacks[r] = i;
          try {
            this.cmpFrame.postMessage(a, "*");
          } catch (e) {
            this.sendGdprError("5");
          }
        }
        gdprPerformanceMark() {
          a.WindowAdaptor.currentWindow().performance.mark("dv_gdpr_start");
        }
        sendGdprError(e) {
          n.MessageHandler.sendMessage({
            dvp_gdpr_Error: e
          }, !0);
        }
      };
    },
    8456: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MeasureGdprV2 = void 0;
      const r = i(425),
        a = i(3868),
        n = i(749);
      t.MeasureGdprV2 = class {
        constructor() {
          this.DV_VENDOR_ID = 126, this.tcfCallbacks = {}, this.getConsentDataCallback = (e, t) => {
            try {
              const i = a.WindowAdaptor.currentWindow(),
                r = a.WindowAdaptor.workingDocument();
              i.performance.mark("dv_gdpr_v2_end"), i.performance.measure("dv_gdpr_v2", "dv_gdpr_v2_start", "dv_gdpr_v2_end");
              const [s] = i.performance.getEntriesByName("dv_gdpr_v2");
              (null == s ? void 0 : s.duration) && n.MessageHandler.sendMessage({
                dvp_gdv2_Func: this.tcfapiIsFunctionCall ? "1" : "0",
                dvp_gdv2_Applies: void 0 !== (null == e ? void 0 : e.gdprApplies) ? e.gdprApplies ? "1" : "0" : "-1",
                dvp_gdv2_Succ: t ? "1" : "0",
                dvp_gdv2_Dur: Math.round(s.duration),
                dvp_gdv2_Doms: this.gdprIsDocumentCompletedStart,
                dvp_gdv2_Dome: "complete" == r.readyState ? "1" : "0"
              }, !0);
            } catch (e) {
              this.sendGdprV2Error("9");
            }
          }, this.handleTcfMessage = e => {
            try {
              const t = ("string" == typeof e.data ? JSON.parse(e.data) : e.data).__tcfapiReturn;
              if (t) {
                const e = this.tcfCallbacks[t.callId];
                e ? (e(t.returnValue, t.success), delete this.tcfCallbacks[t.callId]) : this.sendGdprV2Error("6");
              }
            } catch (e) {}
          };
        }
        isSupported() {
          return !a.WindowAdaptor.isDomlessEnvironment() && a.WindowAdaptor.isPerformanceAPISupported();
        }
        executePhase(e) {
          this.gdprIsDocumentCompletedStart = "complete" == a.WindowAdaptor.workingDocument().readyState ? "1" : "0", this.gdprV2PerformanceMark();
          let t = this.locateTcfFrame();
          if (t && "1" != t) this.sendGdprV2Error(t);else if (this.tcfFrame) if (this.tcfapiIsFunctionCall) this.invokeTcfCommandByFunction("addEventListener", [this.DV_VENDOR_ID], this.getConsentDataCallback);else {
            if (!a.WindowAdaptor.isPostMessageSupported()) return void this.sendGdprV2Error("2");
            this.addEventListenerForTcfResponses(), this.invokeTcfCommandByPostMessage("addEventListener", [this.DV_VENDOR_ID], this.getConsentDataCallback);
          }
        }
        toString() {
          return "MesasureGdprV2";
        }
        locateTcfFrame() {
          let e,
            t = a.WindowAdaptor.currentWindow();
          for (; !this.tcfFrame;) {
            try {
              this.tcfapiIsFunctionCall = "function" == typeof t.__tcfapi, (this.tcfapiIsFunctionCall || t.frames.__tcfapiLocator) && (this.tcfFrame = t, e = "1");
            } catch (t) {
              e = "3";
            }
            try {
              if (a.WindowAdaptor.isTop(t)) break;
              t = a.WindowAdaptor.getWindowParent(t, !0);
            } catch (t) {
              e = "8";
              break;
            }
          }
          return e;
        }
        addEventListenerForTcfResponses() {
          r.BrowserAdaptor.addEventListener("message", this.handleTcfMessage, a.WindowAdaptor.currentWindow());
        }
        invokeTcfCommandByFunction(e, t, i) {
          try {
            this.tcfFrame.__tcfapi(e, 2, i, t);
          } catch (e) {
            this.sendGdprV2Error("4");
          }
        }
        invokeTcfCommandByPostMessage(e, t, i) {
          const r = Math.random().toString(),
            a = {
              __tcfapiCall: {
                command: e,
                parameter: t,
                version: 2,
                callId: r
              }
            };
          this.tcfCallbacks[r] = i;
          try {
            this.tcfFrame.postMessage(a, "*");
          } catch (e) {
            this.sendGdprV2Error("5");
          }
        }
        gdprV2PerformanceMark() {
          a.WindowAdaptor.currentWindow().performance.mark("dv_gdpr_v2_start");
        }
        sendGdprV2Error(e) {
          n.MessageHandler.sendMessage({
            dvp_gdv2_Error: e
          }, !0);
        }
      };
    },
    5817: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScriptsInjection = void 0;
      const r = i(3380),
        a = i(7658),
        n = i(425),
        s = i(3868),
        o = i(749),
        d = i(7749),
        l = i(712),
        c = i(194),
        u = i(3322);
      t.ScriptsInjection = class {
        constructor() {
          this.onLoad = () => {
            r.Utilities.setLoadVisitTime(), c.DvObject.getImpressionId(null) || o.MessageHandler.sendError(l.ClientErrorType.InvalidVisitResponseError, void 0, void 0);
          };
        }
        isSupported() {
          return !0;
        }
        appendPerformanceMetrics(e) {
          const t = c.DvObject.getTagLoadedMS(),
            i = r.Utilities.getScriptLoadedMS(),
            a = r.Utilities.getCurrentTime();
          e.timeToMeasureMs = i - t, e.timeToFirstReportMs = e.timeToFirstReportMs || a - i;
        }
        appendScriptDynamicFlags(e) {
          const t = u.ScriptDynamicFlags.getInstance().getFlags();
          t && t > 0 && (e.scriptDynamicFlags = t);
        }
        getReleventServerPrefix(e) {
          var t;
          const i = null === (t = d.DvTagDataObject.getParamValue("vidreg")) || void 0 === t ? void 0 : t.toLowerCase();
          return i && {
            ue: !0,
            uw: !0,
            eu: !0,
            as: !0
          }[i] ? `https://tpsc-video-${i}.doubleverify.com/` : d.DvTagDataObject.getServerPrefix();
        }
        buildTpsQueryString(e) {
          let t = r.Utilities.getQueryString(e, e.additionalParams, e.dvpParamsFlags, a.TPSDataMapping);
          const i = ["gdpr", "gdpr_consent"].filter(t => !e[t]);
          if (i.length) {
            t = `${i.map(e => `${e}=`).join("&")}&${t}`;
          }
          return t += `&${a.TPSDataMapping.checksum}=${r.Utilities.generateAdler32Hash(t)}`, t;
        }
        executePhase(e) {
          const t = Math.floor(Date.now() * Math.random());
          e.additionalParams || (e.additionalParams = {}), e.additionalParams.dvp_tuid = t, e.flavor = "0";
          const i = this.getReleventServerPrefix(e);
          e.errorURL = i + d.DvTagDataObject.getErrorPath(), this.appendScriptDynamicFlags(e), this.appendPerformanceMetrics(e);
          const a = this.buildTpsQueryString(e),
            o = `${i}${d.DvTagDataObject.getInitPath()}?${a}`,
            l = s.WindowAdaptor.currentDocument(),
            u = s.WindowAdaptor.getCurrentScript() || l.body,
            {
              cmp: p,
              ctx: h,
              sid: g,
              plc: m
            } = e,
            v = {
              tuid: t,
              cmp: p,
              ctx: h,
              sid: g,
              plc: m,
              vurll: o.length,
              protocol: c.DvObject.getProtocol()
            },
            b = this.errorFunction.bind(this, v);
          let y = "TPSCall";
          c.DvObject.isRestrictedAccess() && (y += `_${c.DvObject.getTagUniqueKey()}`), c.DvObject.setVisitInjectedMS(r.Utilities.getCurrentTime()), n.BrowserAdaptor.addScriptAsync(o, u, y, !1, b, this.onLoad), r.Utilities.logDvSignal(o);
        }
        toString() {
          return "ScriptsInjection";
        }
        errorFunction(e) {
          const {
              vurll: t,
              protocol: i
            } = e,
            a = r.Utilities.isExceedingMaxUrlLength(t) ? l.ClientErrorType.VisitRequestError : l.ClientErrorType.VisitResponseError,
            n = {
              dvp_vurll: t,
              dvp_protocol: i
            };
          o.MessageHandler.sendError(a, void 0, void 0, n);
        }
      };
    },
    1822: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SupportedIntegrationsCollector = void 0;
      t.SupportedIntegrationsCollector = class {
        constructor(e) {
          this.integrations = e;
        }
        isSupported() {
          return !0;
        }
        collectData(e) {
          let t = 0;
          this.integrations.forEach(e => {
            e.isSupported() && (t |= Number(e.getIntegrationType()));
          }), e.supportedIntegrations = t, 0 != t && (e.additionalParams.dvp_mib = t);
        }
        toString() {
          return "SupportedIntegrations";
        }
      };
    },
    9688: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserCollector = void 0;
      const r = i(3946),
        a = i(3868);
      t.BrowserCollector = class {
        isSupported() {
          return !a.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = r.BrowserDetector.getBrowserId();
          null != t && (e.browserDetectionSource = 1), e.browserId = t, e.browserVersion = r.BrowserDetector.getBrowserVersion(), e.browserIdUserAgent = r.BrowserDetector.getBrowserIdUserAgent();
        }
        toString() {
          return "Browser";
        }
      };
    },
    6892: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DomScriptCollector = void 0;
      const r = i(3868),
        a = i(7749);
      t.DomScriptCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          this.isScriptInHeadPosition() && (e.isScriptInHeadLocation = 1);
        }
        toString() {
          return "DomScript";
        }
        isScriptInHeadPosition() {
          const e = a.DvTagDataObject.getDVScript();
          return e && e.parentElement && "HEAD" == e.parentElement.tagName;
        }
      };
    },
    8010: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DvParamsCollector = void 0;
      const r = i(7749),
        a = i(3380),
        n = i(194);
      t.DvParamsCollector = class {
        constructor() {
          this.tpsParams = ["ctx", "cmp", "ipos", "sid", "plc", "adid", "crt", "btreg", "btadsrv", "adsrv", "advid", "num", "pid", "crtname", "unit", "chnl", "uid", "scusrid", "tagtype", "sr", "dt", "dup", "app", "dvvidver", "turl", "icall", "dv_callback", "useragent", "xff", "timecheck", "seltag", "sadv", "ord", "litm", "scrt", "invs", "splc", "adu", "spos", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "native", "gmnpo", "isdvvid", "msrapi", "bsimpid", "prr", "iframe", "gdpr", "gdpr_consent", "tvcp", "vssd", "apifw", "vstvr", "auprice", "ppid", "audeal", "auevent", "auadv", "aucmp", "aucrtv", "auorder", "ausite", "auplc", "auxch", "audvc", "aulitem", "auadid", "pltfrm", "aufilter1", "aufilter2", "autt", "auip", "aubndl"], this.aspParams = ["auctionid", "vermemid", "source", "buymemid", "anadvid", "ioid", "cpgid", "cpid", "sellerid", "pubid", "advcode", "iocode", "cpgcode", "cpcode", "pubcode", "prcpaid", "auip", "auua"];
        }
        isSupported() {
          return !0;
        }
        collectData(e) {
          let t = n.DvObject.getDvtpScriptVersion();
          e.dvtpScriptVersion = t, e.collectDataStartTime = a.Utilities.getCurrentTime();
          const i = r.DvTagDataObject.getCaseSensitiveParams();
          if (a.Utilities.isEmpty(i)) return;
          const s = r.DvTagDataObject.getLowerCaseParams();
          this.tpsParams.forEach(t => {
            a.Utilities.isNullOrEmpty(s[t]) || (e[t] = s[t]);
          }), this.aspParams.forEach(t => {
            a.Utilities.isNullOrEmpty(i[t]) || (e[t] = i[t], e.additionalParams["dvp_" + t] = i[t]);
          });
          const o = [...this.tpsParams, ...this.aspParams];
          Object.keys(i).filter(e => !a.Utilities.isNullOrEmpty(i[e]) && -1 === o.indexOf(e)).forEach(t => {
            let r = i[t];
            a.Utilities.startsWith(t, "dvpx_", !0) && (r = encodeURIComponent(r)), e.additionalParams[t] = r;
          });
        }
        toString() {
          return "DvParams";
        }
      };
    },
    992: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InjectionDetectionCodeCollector = void 0;
      const r = i(3868);
      t.InjectionDetectionCodeCollector = class {
        constructor() {
          this.results = [];
        }
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          try {
            this.ancestorsInjectionDetection(), e.idcResults = this.results.join(",");
          } catch (t) {
            e.idcResults = "-999", e.idcError = t.message || "unknown";
          }
          e.idcVersion = 28;
        }
        toString() {
          return "InjectionDetectionCodeCollector";
        }
        ancestorsInjectionDetection() {
          let e = r.WindowAdaptor.workingWindow();
          for (let t = 0; t < 10 && (this.detectInjections(e), !r.WindowAdaptor.isTop(e)) && (e = r.WindowAdaptor.getWindowParent(e), e); t++);
        }
        detectInjections(e) {
          this.addInjector(e, null != e.AZSD, 9), this.addInjector(e, e.location.hostname != e.encodeURIComponent(e.location.hostname), 10), this.addInjector(e, null != e.cascadeWindowInfo, 11), this.addInjector(e, null != e._rvz, 32), this.addInjector(e, null != e.FO_DOMAIN, 34), this.addInjector(e, null != e.va_subid, 36), this.addInjector(e, e._GPL && e._GPL.baseCDN, 40), this.addInjector(e, this.evaluateProperty(e, "__twb__") && this.evaluateProperty(e, "__twb_cb_"), 43), this.addInjector(e, null != e.landingUrl && null != e.seList && null != e.parkingPPCTitleElements && null != e.allocation, 45), this.addInjector(e, this.evaluateProperty(e, "_rvz", function (e) {
            return null != e.publisher_subid;
          }), 46), this.addInjector(e, null != e.cacildsFunc && null != e.n_storesFromFs, 47), this.addInjector(e, e._pcg && e._pcg.GN_UniqueId, 54), this.addInjector(e, this.evaluateProperty(e, "__ad_rns_") && this.evaluateProperty(e, "_$_"), 64), this.addInjector(e, null != e.APP_LABEL_NAME_FULL_UC, 71), this.addInjector(e, null != e._priam_adblock, 81), this.addInjector(e, e.supp_ads_host && e.supp_ads_host_overridden, 82), this.addInjector(e, e.uti_xdmsg_manager && e.uti_xdmsg_manager.cb, 87), this.addInjector(e, e.LogBundleData && e.addIframe, 91), this.addInjector(e, e.xAdsXMLHelperId || e.xYKAffSubIdTag, 95), this.addInjector(e, e.__pmetag && e.__pmetag.uid, 98), this.addInjector(e, e.CustomWLAdServer && /(n\d{1,4}adserv)|(1ads|cccpmo|epommarket|epmads|adshost1)/.test(e.supp_ads_host_overridden), 100);
        }
        evaluateProperty(e, t, i) {
          for (let r in e) if (r.indexOf(t) > -1 && (!i || i(e[r]))) return !0;
          return !1;
        }
        addInjector(e, t, i) {
          t && -1 == this.results.indexOf(i) && this.results.push((r.WindowAdaptor.isTop(e) ? -1 : 1) * i);
        }
      };
    },
    6800: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AttributeCollector = void 0;
      const r = i(3868);
      t.AttributeCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          try {
            if (128 != (128 & r.WindowAdaptor.getScenarioType())) {
              const t = r.WindowAdaptor.getTopAccessibleWindow(),
                i = r.WindowAdaptor.workingDocument(t);
              e.widgetCount = (t.FB ? 1 : 0) + (t.twttr ? 2 : 0) + (t.outbrain ? 4 : 0) + (t._taboola ? 8 : 0);
              try {
                i.cookie && (e.cookieLength = i.cookie.length);
              } catch (e) {}
              t.performance && t.performance.timing && t.performance.timing.domainLookupStart > 0 && t.performance.timing.domainLookupEnd > 0 && (e.domainLookupTime = t.performance.timing.domainLookupEnd - t.performance.timing.domainLookupStart), i.querySelectorAll && (e.documentElementCount = i.querySelectorAll("*").length);
            }
            const t = r.WindowAdaptor.workingWindow();
            e.iframeCount = t.top.length, t.history && (e.historyLength = t.history.length);
          } catch (e) {}
        }
        toString() {
          return "AttributeCollector";
        }
      };
    },
    8213: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserFeaturesCollector = void 0;
      const r = i(3868);
      t.BrowserFeaturesCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          e.browserFeatures = this.getBrowserFeatures();
        }
        toString() {
          return "BrowserFeaturesCollector";
        }
        getBrowserFeatures() {
          try {
            let e = 0;
            const t = (t, i) => {
                i && t < 32 && (e = (e | 1 << t) >>> 0);
              },
              i = (e, t) => typeof e === t,
              a = r.WindowAdaptor.workingDocument(),
              n = "svg" === r.WindowAdaptor.workingDocumentElement().nodeName.toLowerCase(),
              s = function (e) {
                return "function" != typeof a.createElement ? a.createElement(arguments[0]) : n ? a.createElementNS.call(a, "http://www.w3.org/2000/svg", arguments[0]) : a.createElement.apply(a, arguments);
              },
              o = "Moz O ms Webkit",
              d = o.split(" "),
              l = o.toLowerCase().split(" "),
              c = {
                style: {
                  elem: s("modernizr")
                }.elem.style
              },
              u = (e, t) => {
                let i, r, a, n;
                const o = ["modernizr", "tspan", "samp"];
                for (; !c.style && o.length;) i = !0, c.modElem = s(o.shift()), c.style = c.modElem.style;
                function d() {
                  i && (delete c.style, delete c.modElem);
                }
                r = e.length;
                for (let i = 0; i < r; i++) if (a = e[i], n = c.style[a], void 0 !== c.style[a]) return d(), "pfx" != t || a;
                return d(), !1;
              },
              p = function (e, t, r) {
                const a = e.charAt(0).toUpperCase() + e.slice(1);
                let n = (e + " " + d.join(a + " ") + a).split(" ");
                if (i(t, "string") || i(t, "undefined")) return u(n, t);
                {
                  let s;
                  n = (e + " " + l.join(a + " ") + a).split(" ");
                  for (let e in n) if (n[e] in t) return !1 === r ? n[e] : (s = t[n[e]], i(s, "function") ? s.bind(r || t) : s);
                  return !1;
                }
              },
              h = r.WindowAdaptor.workingWindow();
            return t(0, !0), t(1, !!p("requestFileSystem", h)), t(2, !!h.CSS && "function" == typeof h.CSS.escape), t(3, p("shapeOutside", "content-box", !0)), e;
          } catch (e) {
            return 0;
          }
        }
      };
    },
    370: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.BrowserSignatureCollector = void 0;
      const r = i(3868),
        a = i(3380);
      t.BrowserSignatureCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = this.getBrowserSignature();
          t && (e.browserSignatureFamilyBits = t.f, e.browserSignatureBits = t.s);
        }
        toString() {
          return "BrowserSignatureCollector";
        }
        getBrowserSignature() {
          let e = 0,
            t = 0;
          try {
            const i = function (i, r, a) {
                a && (e += Math.pow(2, i), t += Math.pow(2, r));
              },
              n = r.WindowAdaptor.getTopAccessibleWindow(),
              s = r.WindowAdaptor.workingDocument(n);
            i(14, 0, n.playerInstance && s.querySelector('script[src*="ads-player.com"]')), i(14, 1, (n.CustomWLAdServer || n.DbcbdConfig) && (() => {
              let e = s.querySelector('p[class="footerCopyright"]');
              return e && e.textContent.match(/ MangaLife 2016/);
            })()), i(15, 2, n.zpz && n.zpz.createPlayer), i(15, 3, n.vdApp && n.vdApp.createPlayer), i(15, 4, s.querySelector('body>div[class="z-z-z"]')), i(16, 5, n.xy_checksum && n.place_player && (n.logjwonready && n.logContentPauseRequested || n.jwplayer)), i(17, 6, (() => {
              if (r.WindowAdaptor.isTop(n) && "" == s.title) {
                let e = s.querySelector('body>object[id="player"]');
                return e && e.data && e.data.indexOf("jwplayer") > 1 && "visibility: visible;" == e.getAttribute("style");
              }
              return !1;
            })()), i(17, 7, s.querySelector('script[src*="sitewebvideo.com"]')), i(17, 8, n.InitPage && n.cef && n.InitAd), i(17, 9, (() => {
              if (r.WindowAdaptor.isTop(n) && "" == s.title) {
                const e = s.querySelector("body>#player");
                return e && (e.querySelector('div[id*="opti-ad"]') || e.querySelector('iframe[src="about:blank"]'));
              }
              return !1;
            })()), i(17, 10, (() => {
              if (r.WindowAdaptor.isTop(n) && "" == s.title && n.InitAdPlayer) {
                const e = s.querySelector('body>div[id="kt_player"]');
                return e && e.querySelector('div[class="flash-blocker"]');
              }
              return !1;
            })()), i(17, 11, null != n.clickplayer && null != n.checkRdy2), i(19, 12, n.instance && n.inject && s.querySelector('path[id="cp-search-0"]')), i(20, 13, (() => {
              try {
                if (n.top == n && s.getElementsByClassName("asu").length > 0) {
                  let e = a.Utilities.arrayLikeToArray(s.styleSheets);
                  for (let t of e) {
                    let e = a.Utilities.arrayLikeToArray(t.cssRules);
                    for (let t of e) if ("div.kk" == t.selectorText || "div.asu" == t.selectorText) return !0;
                  }
                }
              } catch (e) {}
            })()), i(21, 14, (() => {
              try {
                return null != s.querySelector('div[id="kt_player"][hiegth]');
              } catch (e) {}
            })()), i(22, 15, function () {
              try {
                return n.top == n && null != n.document.querySelector('div[id="asu"][class="kk"]');
              } catch (e) {}
            }()), i(25, 16, function () {
              try {
                return s.querySelector('object[data*="/VPAIDFlash.swf"]') && s.querySelector('object[id*="vpaid_video_flash_tester_el"]') && s.querySelector('div[id*="desktopSubModal"]');
              } catch (e) {}
            }());
            let o = r.WindowAdaptor.getUserAgent();
            if (o && o.indexOf("Android") > -1 && o.indexOf(" wv)") > -1 && n == dvWindow.top) {
              let e = !1;
              i(28, 17, s.querySelector('img[src*="dealsneartome.com"]') || !!n.__cads__ || s.querySelectorAll('img[src*="/tracker?tag="]').length > 0 || e);
            }
            if (e > 0) return {
              f: e,
              s: t
            };
          } catch (e) {}
          return null;
        }
      };
    },
    4115: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HardwareFeaturesCollector = void 0;
      const r = i(3868);
      t.HardwareFeaturesCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          e.numberOfCores = r.WindowAdaptor.getNumberOfCores(), this.getTouchSupport() && (e.hasTouchPad = 1), e.navigatorPlatform = this.getPlatform();
        }
        toString() {
          return "HardwareDataCollector";
        }
        getTouchSupport() {
          var e, t;
          return 5 === (null === (t = null === (e = null === r.WindowAdaptor || void 0 === r.WindowAdaptor ? void 0 : r.WindowAdaptor.workingWindow()) || void 0 === e ? void 0 : e.navigator) || void 0 === t ? void 0 : t.maxTouchPoints);
        }
        getPlatform() {
          var e, t;
          return null === (t = null === (e = null === r.WindowAdaptor || void 0 === r.WindowAdaptor ? void 0 : r.WindowAdaptor.workingWindow()) || void 0 === e ? void 0 : e.navigator) || void 0 === t ? void 0 : t.platform;
        }
      };
    },
    4194: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HijackedDeviceSignatureCollector = void 0;
      const r = i(3868);
      t.HijackedDeviceSignatureCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = this.getSignature();
          t && (e.hijackedDeviceSignatureBits = t);
        }
        toString() {
          return "HijackedDeviceSignatureCollector";
        }
        getSignature() {
          let e = 0;
          try {
            const t = function (t, i) {
                i && (e += Math.pow(2, t));
              },
              i = r.WindowAdaptor.getTopAccessibleWindow(),
              a = r.WindowAdaptor.workingDocument(i);
            if (t(6, r.WindowAdaptor.isTop(i) && "" == a.title && null == a.querySelector("meta[charset]") && null != a.querySelector('div[style*="background-image: url("]') && (null != a.querySelector('script[src*="j.pubcdn.net"]') || null != a.querySelector('span[class="ad-close"]'))), e > 0) return e;
          } catch (e) {}
          return null;
        }
      };
    },
    6783: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IOSMapleCollector = void 0;
      const r = i(3868);
      t.IOSMapleCollector = class {
        constructor() {
          this.maxIterations = 10;
        }
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = r.WindowAdaptor.isIOS(),
            i = r.WindowAdaptor.objectLookup(r.WindowAdaptor.workingWindow(), "maple", this.maxIterations);
          t && e.dvpParamsFlags.push(0), i && e.dvpParamsFlags.push(1);
        }
        toString() {
          return "IOSMaple";
        }
      };
    },
    8453: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MraidCollector = void 0;
      const r = i(6681);
      t.MraidCollector = class {
        isSupported() {
          return r.MraidWrapper.isSupported();
        }
        collectData(e) {
          e.isMraid = 1;
        }
        toString() {
          return "MraidCollector";
        }
      };
    },
    6254: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.OmidContextCollector = void 0;
      const r = i(6689),
        a = i(3868),
        n = i(194),
        s = i(3380),
        o = i(3322);
      t.OmidContextCollector = class {
        isSupported(e) {
          return a.WindowAdaptor.workingWindow() && a.WindowAdaptor.workingWindow().omid3p && (e.omidWebEnvironmentLog = 1), r.OmidWrapper.isSupported();
        }
        collectData(e) {
          const t = r.OmidWrapper.getOmidContext();
          if (t) {
            if (e.omidEnvironment = t.environment, e.omidAdSessionType = t.adSessionType, e.omidAppId = t.app && t.app.appId, e.omidAppLibraryVersion = t.app && t.app.libraryVersion, e.omidPartnerName = t.omidNativeInfo && t.omidNativeInfo.partnerName, e.omidPartnerVersion = t.omidNativeInfo && t.omidNativeInfo.partnerVersion, e.omidJSServiceVersion = t.omidJsInfo && t.omidJsInfo.serviceVersion, e.omidJSSessionClientVersion = t.omidJsInfo && t.omidJsInfo.sessionClientVersion, e.omidJSPartnerName = t.omidJsInfo && t.omidJsInfo.partnerName, e.omidJSPartnerVersion = t.omidJsInfo && t.omidJsInfo.partnerVersion, e.omidDeviceType = t.deviceInfo && t.deviceInfo.deviceType, e.omidDeviceOSVersion = t.deviceInfo && t.deviceInfo.osVersion, e.omidCustomReferenceData = s.Utilities.isNullOrEmpty(t.customReferenceData) ? t.customReferenceData : encodeURIComponent(t.customReferenceData), this.extractOmidContentUrl(e), t.deviceInfo && t.deviceInfo.os) {
              let i = null;
              "iOS" == t.deviceInfo.os ? i = 6 : "Android" == t.deviceInfo.os && (i = 5), e.omidDeviceOS = i;
            }
            if (t.supports) {
              let i = 0;
              t.supports.forEach(function (e) {
                "clid" === e ? i += 1 : "vlid" === e && (i += 2);
              }), 0 != i && (e.omidSupports = i);
            }
          }
          const i = n.DvObject.getDvObject();
          this.setOmidVendorKey(e, i.omidVendorKey), i.tagsCounter > 1 && (e.omidTagsCounter = i.tagsCounter);
          const a = r.OmidWrapper.getSessionData();
          if (a) {
            const t = (a.data || {}).context || {};
            t.accessMode && (e.omidAccessMode = r.OmidWrapper.getOmidAccessModeNumber(t.accessMode)), t.underEvaluation && o.ScriptDynamicFlags.getInstance().turnOn(1);
          }
        }
        extractOmidContentUrl(e) {
          var t;
          try {
            const i = null === (t = r.OmidWrapper.getSessionData()) || void 0 === t ? void 0 : t.data;
            if (i) {
              const t = 500,
                {
                  contentUrl: r
                } = i;
              if (r) {
                const i = r.substring(0, t);
                e.omidContentUrl = i;
              }
            }
          } catch (e) {}
        }
        setOmidVendorKey(e, t) {
          t && (e.omidVendorKey = r.OmidWrapper.getOmidVendorKeyIndex(t));
        }
        toString() {
          return "OmidContext";
        }
      };
    },
    8733: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ParamUrlExtractionMethodCollector = void 0;
      const r = i(7749),
        a = i(194),
        n = i(6689),
        s = i(3868),
        o = i(3380),
        d = i(3322);
      t.ParamUrlExtractionMethodCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          const t = r.DvTagDataObject.getParamUrlExtractionMethod();
          t && (e.additionalParams.dvp_rcp = t), this.appendUrlHashTagLogger(e), this.appendIsES6Supported(e), this.appendScriptElementExtractionMethod(e), this.appendIsCurrentScriptNotSupported(e), this.appendIsOmid(e), this.appendHasTagUniqueKey(e), this.appendTagCounter(e), this.appendSharedUniqueKey(e), this.appendTagUniqueKey(e);
        }
        appendUrlHashTagLogger(e) {
          let t = 0;
          const i = r.DvTagDataObject.getDVScriptUrl();
          if (!o.Utilities.isNullOrEmpty(i)) {
            const r = new RegExp("[#]([^&#?]*)=([^&#?]*)", "gi"),
              a = new RegExp("[?]([^&#?]*)=([^&#?]*)", "gi");
            r.test(i) && (t |= 1), a.test(i) && (t |= 2), t && (e.additionalParams.dvp_htec = t);
          }
        }
        appendIsES6Supported(e) {
          a.DvObject.isES6Supported() && d.ScriptDynamicFlags.getInstance().turnOn(2);
        }
        appendTagUniqueKey(e) {
          const t = a.DvObject.getTagUniqueKey();
          t && (e.additionalParams.dvp_tukv = t);
        }
        appendSharedUniqueKey(e) {
          const t = a.DvObject.getSharedUniqueKey();
          t && (e.additionalParams.dvp_sukv = t);
        }
        appendScriptElementExtractionMethod(e) {
          const t = r.DvTagDataObject.getScriptElementExtractionMethod();
          t && (e.additionalParams.dvp_seem = t);
        }
        appendIsCurrentScriptNotSupported(e) {
          !s.WindowAdaptor.getCurrentScript() && (e.additionalParams.dvp_nscs = 1);
        }
        appendIsOmid(e) {
          var t;
          try {
            let i = 0;
            const r = s.WindowAdaptor.workingWindow();
            n.OmidWrapper.isSupported() && (i = 1), a.DvObject.isOmidForWeb() && (i |= 8), a.DvObject.isOmid3p() && (i |= 16);
            try {
              if (!a.DvObject.isRestrictedAccess() && !s.WindowAdaptor.isDomlessEnvironment()) {
                const e = s.WindowAdaptor.getWindowParent(r),
                  a = s.WindowAdaptor.getWindowParent(e);
                void 0 === r.omidVerificationProperties && void 0 === e.omidVerificationProperties && void 0 === r.omid && void 0 === e.omid && void 0 === a.omid || (i |= 2);
                const n = null !== (t = r.omidVerificationProperties) && void 0 !== t ? t : e.omidVerificationProperties;
                o.Utilities.isNullOrEmpty(n) || "web" === (null == n ? void 0 : n.injectionSource) && (i |= 4);
              }
            } catch (e) {}
            i > 0 && (e.additionalParams.dvp_iomd = i);
          } catch (e) {}
        }
        appendHasTagUniqueKey(e) {
          a.DvObject.getTagUniqueKey() && (e.additionalParams.dvp_tuk = 1);
        }
        appendTagCounter(e) {
          const t = a.DvObject.getTagCounter();
          t > 1 && (e.additionalParams.dvp_tcnt = t);
        }
        toString() {
          return "ParamUrlExtractionMethod";
        }
      };
    },
    3219: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PreRenderCollector = void 0;
      const r = i(7026);
      t.PreRenderCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          r.RenderLogicFactory.getRenderLogic().isAdRendered() || (e.isPreRender = 1);
        }
        toString() {
          return "PreRender";
        }
      };
    },
    4932: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ReferrerCollector = void 0;
      const r = i(3868),
        a = i(3380),
        n = i(7658);
      t.ReferrerCollector = class {
        isSupported(e) {
          const t = (r.WindowAdaptor.getUserAgent() || "").toLowerCase();
          return !r.WindowAdaptor.isDomlessEnvironment() && (t.indexOf("webkit") > -1 || t.indexOf("chrome") > -1);
        }
        collectData(e) {
          const t = encodeURIComponent(r.WindowAdaptor.workingWindow().location.toString());
          a.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, n.TPSDataMapping, t) && (e.referrerUrl = t);
        }
        toString() {
          return "Referrer";
        }
      };
    },
    2221: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ScriptsPerformanceCollector = void 0;
      const r = i(3868);
      t.ScriptsPerformanceCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = r.WindowAdaptor.monitorScriptsPerformance(r.WindowAdaptor.workingWindow(), {
            dvtp_src: ["fetchStart", "duration"]
          });
          e.dvtp_src_fetchStart = t.dvtp_src_fetchStart, e.dvtp_src_duration = t.dvtp_src_duration;
        }
        toString() {
          return "ScriptsPerformance";
        }
      };
    },
    8357: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SslCollector = void 0;
      const r = i(3868),
        a = i(7749),
        n = i(194);
      t.SslCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          const t = a.DvTagDataObject.getDVScriptUrl(),
            i = r.WindowAdaptor.workingWindow().location;
          t && i && t.match("^http:") && i.toString().match("^https") && (e.diffSsl = 1), e.isSsl = n.DvObject.getProtocol();
        }
        toString() {
          return "Ssl";
        }
      };
    },
    6574: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.StrCollector = void 0;
      const r = i(3868),
        a = i(5903),
        n = i(3380),
        s = i(7658),
        o = i(6806),
        d = i(425),
        l = i(712);
      t.StrCollector = class {
        constructor() {
          this.parentIsPermitted = !1, this.ancestorChain = "", this.additionalUrl = "", this.htmlUrl = "", this.canonicalUrl = "", this.referrerOffset = 0, this.insertEparam = function (e, t) {
            let i = e + "=" + encodeURIComponent(t);
            this.eparams = this.eparams ? this.eparams + "&" + i : i;
          };
        }
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        getSTR(e) {
          return this.workingWindow = r.WindowAdaptor.workingWindow(), this.findHighestAvailableWindow(), this.processDVurl(), e.referrerUrlExtractedFromSafeFrame = this.referrerUrlExtractedFromSafeFrame, e.safeFrameExists = this.safeFrameExists, this.extractAncestorChain(), this.calculateWindowDepth(), this.updateWindowDepth(), this.extractUrlFromHtml(e), this.htmlUrl || this.findAdditionalURLs(), this.setEparams(e), {
            ep1: encodeURIComponent(this.dvURL),
            ep2: encodeURIComponent(this.ancestorChain),
            ep3: encodeURIComponent(this.additionalUrl),
            ep4: encodeURIComponent(this.htmlUrl),
            ep5: encodeURIComponent(this.canonicalUrl)
          };
        }
        collectData(e) {
          this.getSTR(e);
          const t = encodeURIComponent(this.eparams);
          n.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, s.TPSDataMapping, t) ? e.eparams = t : e.dvpParamsFlags.push(3), e.eparamsLength = t && t.length, e.referrerDepth = this.referrerDepth, e.windowDepth = this.windowDepth, e.additionalUrlDepth = this.htmlUrl ? -1 : this.additionalUrlDepth;
        }
        toString() {
          return "Str";
        }
        findHighestAvailableWindow() {
          try {
            this.highestAvailableWindow = this.workingWindow;
            for (let e = 0; e <= 10; e++) {
              const t = r.WindowAdaptor.getWindowParent(this.highestAvailableWindow, !0);
              if (!t || this.highestAvailableWindow == t) {
                0 == e && (this.parentIsPermitted = !0);
                break;
              }
              {
                const e = t.location.toString();
                if (!(e.length > 0)) {
                  this.parentIsPermitted = !1;
                  break;
                }
                this.highestAvailableWindow = t, this.referrerOffset++, this.parentIsPermitted = !0;
              }
            }
          } catch (e) {
            this.parentIsPermitted = !1;
          }
        }
        processDVurl() {
          var e;
          const t = r.WindowAdaptor.workingDocument(this.highestAvailableWindow).referrer,
            i = null === (e = this.workingWindow.location) || void 0 === e ? void 0 : e.ancestorOrigins,
            a = i && i[i.length - 1];
          if (o.SafeFrameObject.isSafeFrameExists(this.highestAvailableWindow) && (this.safeFrameExists = 1), 0 == t.length) this.dvURL = this.highestAvailableWindow.location.toString();else if (this.parentIsPermitted) this.dvURL = this.highestAvailableWindow.location.toString();else {
            this.dvURL = t;
            const e = o.SafeFrameObject.getUrlReferrer(this.highestAvailableWindow);
            !e || i && 0 != e.indexOf(a) || (this.dvURL = e, this.referrerUrlExtractedFromSafeFrame = "sf"), this.dvMinus = !0;
          }
        }
        extractAncestorChain() {
          let e = this.getAncestorOrigins(),
            t = this.workingWindow.location;
          e && e.length > 0 && t && (e.unshift(t.protocol + "//" + t.hostname), this.ancestorChain = e.reverse().join(","));
        }
        getAncestorOrigins() {
          return n.Utilities.DOMStringListToArray(this.workingWindow[a.Encoding.ROT47("=@42E:@?")][a.Encoding.ROT47("2?46DE@C~C:8:?D")]);
        }
        calculateWindowDepth() {
          let e = 0,
            t = this.highestAvailableWindow;
          for (; e < 10 && !r.WindowAdaptor.isTop(t);) e++, t = r.WindowAdaptor.getWindowParent(t, !0);
          this.windowDepth = e;
        }
        findAdditionalURLs() {
          try {
            if (this.additionalUrl = "", this.additionalUrlDepth = 0, this.windowDepth <= 1) return;
            let e,
              t,
              i,
              a = [];
            a.push({
              win: r.WindowAdaptor.windowTop(!0),
              depth: 0
            });
            let n = 1,
              s = 0;
            for (; n > 0 && s < 100;) {
              try {
                s++, e = a.shift(), t = e.win, i = e.depth, n--;
                const o = t.location.toString();
                if (o.length > 0 && t != this.highestAvailableWindow) {
                  const e = r.WindowAdaptor.workingDocument(t).referrer;
                  return 0 == e.length || 0 == i ? (this.additionalUrl = o, void (this.additionalUrlDepth = i)) : (this.additionalUrl = e, void (this.additionalUrlDepth = i - 1));
                }
              } catch (e) {}
              const o = t.frames.length;
              for (let e = 0; e < o; e++) a.push({
                win: t.frames[e],
                depth: i + 1
              }), n++;
            }
          } catch (e) {}
        }
        updateWindowDepth() {
          this.referrerDepth = this.windowDepth + this.referrerOffset, this.dvMinus && this.windowDepth && this.windowDepth--;
        }
        setEparams(e) {
          this.insertEparam("srcurl", this.dvURL), this.ancestorChain && this.insertEparam("ancChain", this.ancestorChain);
          const t = this.htmlUrl || this.additionalUrl;
          t && n.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, s.TPSDataMapping, t) && this.insertEparam("aUrl", t), this.canonicalUrl && this.insertEparam("canurl", this.canonicalUrl), this.eparams = a.Encoding.ROT47(this.eparams);
        }
        extractUrlFromHtml(e) {
          try {
            if (this.canonicalUrl = this.extractCanonicalUrl(), e.browserId == l.Browser.IE || 128 != e.trafficScenarioType) return;
            if (r.WindowAdaptor.isPerformanceAPISupported() && r.WindowAdaptor.currentWindow().performance.mark("dv_str_html_start"), this.dvURL) {
              const e = new RegExp("^(?:https?:\\/\\/)?[\\w\\-\\.]+\\/[a-zA-Z0-9]", "gi"),
                t = this.dvURL.match(e);
              if (t && t.length > 0) return;
            }
            const t = r.WindowAdaptor.workingDocument(this.highestAvailableWindow);
            if (t && t.referrer) {
              const i = t.referrer.replace(/\//g, "\\/").replace(/\./g, "\\."),
                r = new RegExp(`(?:w{0,4}=")?${i}[^&"; %,'\\$\\\\\\|]+`, "gi"),
                a = new RegExp("banner|adprefs|safeframe|sandbox|sf\\.html", "gi"),
                n = /^\w{0,4}="/gi;
              this.htmlUrl = this.getUrlFromHtml(t, r, a, n), this.measureExtraction(e);
            }
          } catch (e) {}
        }
        extractCanonicalUrl() {
          const e = r.WindowAdaptor.workingDocument(this.highestAvailableWindow),
            t = d.BrowserAdaptor.querySelector("link[rel=canonical]", e);
          return null == t ? void 0 : t.href;
        }
        getUrlFromHtml(e, t, i, r) {
          let a = this.findUrlByTag(e, "script", "src", t, i, r);
          return a || (a = this.extractFromScriptHtml(e, t, i, r), a || (a = this.findUrlByTag(e, "a", "href", t, i, r))), a;
        }
        findLongestMatch(e, t, i) {
          let r = "";
          if (e && e.length > 0) for (let a = 0; a < e.length; a++) {
            const n = e[a];
            n.length > r.length && null == n.match(t) && 0 != n.indexOf('src="') && 0 != n.indexOf('turl="') && (r = n.replace(i, ""));
          }
          return r;
        }
        findUrlByTag(e, t, i, r, a, n) {
          const s = `${t}[${i}*="${e.referrer}"]`,
            o = d.BrowserAdaptor.querySelectorAll(e, s);
          let l = "";
          if (o) {
            let e = 0;
            for (; !l && e < o.length;) {
              const t = o[e][i].match(r);
              l = this.findLongestMatch(t, a, n), e++;
            }
          }
          return l;
        }
        extractFromScriptHtml(e, t, i, r) {
          const a = e.referrer;
          let n = "";
          const s = d.BrowserAdaptor.getElementsByTagNameFromDocument("script", e);
          if (s) {
            let e = 0;
            for (; !n && e < s.length;) {
              const o = s[e].innerHTML;
              if (o && -1 != o.indexOf(a)) {
                const e = o.match(t);
                n = this.findLongestMatch(e, i, r);
              }
              e++;
            }
          }
          return n;
        }
        measureExtraction(e) {
          if (r.WindowAdaptor.isPerformanceAPISupported()) {
            const t = r.WindowAdaptor.currentWindow();
            t.performance.mark("dv_str_html_end"), t.performance.measure("dv_str_html", "dv_str_html_start", "dv_str_html_end");
            const [i] = t.performance.getEntriesByName("dv_str_html");
            i && i.duration && (e.additionalParams.dvp_strhd = i.duration, e.additionalParams.dvpx_strhd = i.duration);
          }
        }
      };
    },
    1059: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SupplySourceCollector = void 0;
      const r = i(7749),
        a = i(425),
        n = i(3868),
        s = i(6681),
        o = i(6689),
        d = i(3380),
        l = i(8426),
        c = i(712);
      t.SupplySourceCollector = class {
        constructor() {
          this.maxIterations = 20;
        }
        isSupported() {
          return !0;
        }
        collectData(e) {
          let t = r.DvTagDataObject.getSupplySource();
          this.isMillenialMediaSupported() ? t = "mm" : l.InmobiWrapper.isSupported() ? t = "inm_vid" : this.isInmobiDisplaySupported() ? t = "inm_dis" : s.MraidWrapper.isSupported() && (s.MraidWrapper.isOperaMedia() ? t = "opm" : s.MraidWrapper.isAdColony() && (t = "ac")), e.supplySource = o.OmidWrapper.getOmidNativePartnerName() || o.OmidWrapper.getOmidJSPartnerName() || t, d.Utilities.isNullOrEmpty(e.supplySource) || (e.supplySource = e.supplySource.split("|").join("").split("%7C").join(""));
        }
        toString() {
          return "SupplySource";
        }
        isMillenialMediaSupported() {
          const e = n.WindowAdaptor.workingWindow().mmJsBridge,
            t = a.BrowserAdaptor.getElementById("aolVideoContainer", n.WindowAdaptor.workingDocument()) || e && e.vpaid,
            i = n.WindowAdaptor.workingWindow().mmSdkVersion;
          return !!t || !!i;
        }
        isInmobiDisplaySupported() {
          return r.DvTagDataObject.getTagType() == c.DvTagType.Display && s.MraidWrapper.isSupported() && n.WindowAdaptor.objectLookup(n.WindowAdaptor.currentWindow(), "imraid", this.maxIterations) && n.WindowAdaptor.objectLookup(n.WindowAdaptor.currentWindow(), "inmobi", this.maxIterations);
        }
      };
    },
    9582: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TpsApiTypeCollector = void 0;
      const r = i(7749);
      t.TpsApiTypeCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          switch (r.DvTagDataObject.getDvApi()) {
            case "1":
              e.tpsApiType = "dvvisit";
              break;
            case "5":
              e.tpsApiType = "query";
              break;
            default:
              e.tpsApiType = "visit";
          }
        }
        toString() {
          return "TpsApiType";
        }
      };
    },
    8397: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TrafficScenarioCollector = void 0;
      const r = i(3868);
      t.TrafficScenarioCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          e.trafficScenarioType = r.WindowAdaptor.getScenarioType();
        }
        toString() {
          return "TrafficScenario";
        }
      };
    },
    1079: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.UserCollector = void 0;
      const r = i(8379),
        a = i(363);
      t.UserCollector = class {
        isSupported() {
          return !0;
        }
        collectData(e) {
          e.uid = a.RandomUtils.getRandom16(), e.callbackName = r.CallbackPrefix + a.RandomUtils.getRandom16();
        }
        toString() {
          return "UserId";
        }
      };
    },
    6674: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VastUrlCollector = void 0;
      const r = i(7749),
        a = i(3380),
        n = i(7658);
      t.VastUrlCollector = class {
        isSupported(e) {
          return this.vastWrapperUrl = r.DvTagDataObject.getVastUrl(), this.vastWrapperUrl && this.vastWrapperUrl.length <= 1e3 && a.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, n.TPSDataMapping, this.vastWrapperUrl);
        }
        collectData(e) {
          e.vastWrapperUrl = this.vastWrapperUrl;
        }
        toString() {
          return "vastUrl";
        }
      };
    },
    5390: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VideoParamsCollector = void 0;
      const r = i(712),
        a = i(7749),
        n = i(1966);
      t.VideoParamsCollector = class {
        isSupported() {
          return a.DvTagDataObject.getTagType() == r.DvTagType.Video;
        }
        collectData(e) {
          e.isOvv = n.VideoPlaybackAdaptor.getOvvObject() ? 1 : void 0, e.isdvvid = 1, e.prePlayed = 1;
        }
        toString() {
          return "VideoParams";
        }
      };
    },
    9106: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.VpaidPlayerUrlCollector = void 0;
      const r = i(3380),
        a = i(7658),
        n = i(1063);
      t.VpaidPlayerUrlCollector = class {
        isSupported(e) {
          let t = n.VpaidWrapper.getDvVpaid();
          const i = t && t.asset;
          return i && i.player && i.player.src && (this.vpaidPlayerUrl = encodeURIComponent(i.player.src)), this.vpaidPlayerUrl && this.vpaidPlayerUrl.length <= 1e3 && r.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, a.TPSDataMapping, this.vpaidPlayerUrl);
        }
        collectData(e) {
          e.vpaidPlayerUrl = this.vpaidPlayerUrl;
        }
        toString() {
          return "vpaidPlayerUrl";
        }
      };
    },
    7998: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WindowPropertiesCollector = void 0;
      const r = i(3868),
        a = i(425),
        n = i(7658),
        s = i(3380);
      t.WindowPropertiesCollector = class {
        isSupported() {
          return !r.WindowAdaptor.isDomlessEnvironment();
        }
        collectData(e) {
          const t = r.WindowAdaptor.workingWindow();
          try {
            e.queuePageID = t.external && t.external.QueuePageID, e.crawlerUrl = t.external && t.external.CrawlerUrl && encodeURIComponent(t.external.CrawlerUrl);
          } catch (e) {}
          e.postMessageSupported = Number(r.WindowAdaptor.isPostMessageSupported()), e.isChrome = t.chrome ? 1 : 0, e.historySize = t.history ? t.history.length : 0, e.innerHeight = a.BrowserAdaptor.getInnerViewport(!1).height, e.innerWidth = a.BrowserAdaptor.getInnerViewport(!1).width, e.outerHeight = a.BrowserAdaptor.getOuterViewport(r.WindowAdaptor.workingWindow(), !1).height, e.outerWidth = a.BrowserAdaptor.getOuterViewport(r.WindowAdaptor.workingWindow(), !1).width, e.screenHeight = a.BrowserAdaptor.getAvailableScreenSize(!1).height, e.screenWidth = a.BrowserAdaptor.getAvailableScreenSize(!1).width;
          {
            const t = r.WindowAdaptor.getUserAgent(),
              i = t ? encodeURIComponent(t) : t;
            s.Utilities.isQueryLengthBelowBrowserLimit(e, e.additionalParams, e.dvpParamsFlags, n.TPSDataMapping, i) && (e.nativeUserAgent = i);
          }
        }
        toString() {
          return "WindowProperties";
        }
      };
    },
    5070: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TPSDataCollector = void 0;
      const r = i(749),
        a = i(712);
      t.TPSDataCollector = class {
        constructor(e) {
          this.tpsCollectors = e;
        }
        isSupported() {
          return !0;
        }
        executePhase(e) {
          this.tpsCollectors.forEach(t => {
            try {
              t.isSupported(e) && t.collectData(e);
            } catch (e) {
              r.MessageHandler.sendError(a.ClientErrorType.TPSDataCollectorError, e, t.toString());
            }
          });
        }
        toString() {
          return "TPSData";
        }
      };
    },
    1759: function (e, t, i) {
      !function (e, t, i) {
        if ("object" == typeof i && "string" != typeof i.nodeName) t(e, i);else {
          i = {};
          var r = ["1.4.8-iab4174"];
          function a(e) {
            for (var t in e) e.hasOwnProperty(t) && (e[t] = a(e[t]));
            return Object.freeze(e);
          }
          for (var n in t(e, i), i) i.hasOwnProperty(n) && (null == Object.getOwnPropertyDescriptor(e, n) && Object.defineProperty(e, n, {
            value: {}
          }), r.forEach(function (t) {
            if (null == Object.getOwnPropertyDescriptor(e[n], t)) {
              var r = a(i[n]);
              Object.defineProperty(e[n], t, {
                get: function () {
                  return r;
                },
                enumerable: !0
              });
            }
          }));
        }
      }(void 0 === i.g ? this : i.g, function (e, t) {
        var r = r || {};
        r.scope = {}, r.createTemplateTagFirstArg = function (e) {
          return e.raw = e;
        }, r.createTemplateTagFirstArgWithRaw = function (e, t) {
          return e.raw = t, e;
        }, r.arrayIteratorImpl = function (e) {
          var t = 0;
          return function () {
            return t < e.length ? {
              done: !1,
              value: e[t++]
            } : {
              done: !0
            };
          };
        }, r.arrayIterator = function (e) {
          return {
            next: r.arrayIteratorImpl(e)
          };
        }, r.makeIterator = function (e) {
          var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
          if (t) return t.call(e);
          if ("number" == typeof e.length) return r.arrayIterator(e);
          throw Error(String(e) + " is not an iterable or ArrayLike");
        }, r.arrayFromIterator = function (e) {
          for (var t, i = []; !(t = e.next()).done;) i.push(t.value);
          return i;
        }, r.arrayFromIterable = function (e) {
          return e instanceof Array ? e : r.arrayFromIterator(r.makeIterator(e));
        }, r.ASSUME_ES5 = !1, r.ASSUME_NO_NATIVE_MAP = !1, r.ASSUME_NO_NATIVE_SET = !1, r.SIMPLE_FROUND_POLYFILL = !1, r.ISOLATE_POLYFILLS = !1, r.FORCE_POLYFILL_PROMISE = !1, r.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1, r.objectCreate = r.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (e) {
          var t = function () {};
          return t.prototype = e, new t();
        }, r.defineProperty = r.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, i) {
          return e == Array.prototype || e == Object.prototype || (e[t] = i.value), e;
        }, r.getGlobal = function (e) {
          e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof i.g && i.g];
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            if (r && r.Math == Math) return r;
          }
          throw Error("Cannot find global object");
        }, r.global = r.getGlobal(this), r.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), r.TRUST_ES6_POLYFILLS = !r.ISOLATE_POLYFILLS || r.IS_SYMBOL_NATIVE, r.polyfills = {}, r.propertyToPolyfillSymbol = {}, r.POLYFILL_PREFIX = "$jscp$";
        var a = function (e, t, i) {
          if (!i || null != e) return null == (i = r.propertyToPolyfillSymbol[t]) ? e[t] : void 0 !== (i = e[i]) ? i : e[t];
        };
        r.polyfill = function (e, t, i, a) {
          t && (r.ISOLATE_POLYFILLS ? r.polyfillIsolated(e, t, i, a) : r.polyfillUnisolated(e, t, i, a));
        }, r.polyfillUnisolated = function (e, t, i, a) {
          for (i = r.global, e = e.split("."), a = 0; a < e.length - 1; a++) {
            var n = e[a];
            if (!(n in i)) return;
            i = i[n];
          }
          (t = t(a = i[e = e[e.length - 1]])) != a && null != t && r.defineProperty(i, e, {
            configurable: !0,
            writable: !0,
            value: t
          });
        }, r.polyfillIsolated = function (e, t, i, a) {
          var n = e.split(".");
          e = 1 === n.length, a = n[0], a = !e && a in r.polyfills ? r.polyfills : r.global;
          for (var s = 0; s < n.length - 1; s++) {
            var o = n[s];
            if (!(o in a)) return;
            a = a[o];
          }
          n = n[n.length - 1], null != (t = t(i = r.IS_SYMBOL_NATIVE && "es6" === i ? a[n] : null)) && (e ? r.defineProperty(r.polyfills, n, {
            configurable: !0,
            writable: !0,
            value: t
          }) : t !== i && (void 0 === r.propertyToPolyfillSymbol[n] && (i = 1e9 * Math.random() >>> 0, r.propertyToPolyfillSymbol[n] = r.IS_SYMBOL_NATIVE ? r.global.Symbol(n) : r.POLYFILL_PREFIX + i + "$" + n), r.defineProperty(a, r.propertyToPolyfillSymbol[n], {
            configurable: !0,
            writable: !0,
            value: t
          })));
        }, r.getConstructImplementation = function () {
          if (r.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
            if (function () {
              function e() {}
              return new e(), Reflect.construct(e, [], function () {}), new e() instanceof e;
            }()) return Reflect.construct;
            var e = Reflect.construct;
            return function (t, i, r) {
              return t = e(t, i), r && Reflect.setPrototypeOf(t, r.prototype), t;
            };
          }
          return function (e, t, i) {
            return void 0 === i && (i = e), i = r.objectCreate(i.prototype || Object.prototype), Function.prototype.apply.call(e, i, t) || i;
          };
        }, r.construct = r.getConstructImplementation(), r.underscoreProtoCanBeSet = function () {
          var e = {};
          try {
            return e.__proto__ = {
              a: !0
            }, e.a;
          } catch (e) {}
          return !1;
        }, r.setPrototypeOf = r.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : r.underscoreProtoCanBeSet() ? function (e, t) {
          if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
          return e;
        } : null, r.inherits = function (e, t) {
          if (e.prototype = r.objectCreate(t.prototype), e.prototype.constructor = e, r.setPrototypeOf) {
            var i = r.setPrototypeOf;
            i(e, t);
          } else for (i in t) if ("prototype" != i) if (Object.defineProperties) {
            var a = Object.getOwnPropertyDescriptor(t, i);
            a && Object.defineProperty(e, i, a);
          } else e[i] = t[i];
          e.superClass_ = t.prototype;
        }, r.getRestArguments = function () {
          for (var e = Number(this), t = [], i = e; i < arguments.length; i++) t[i - e] = arguments[i];
          return t;
        }, r.polyfill("Reflect", function (e) {
          return e || {};
        }, "es6", "es3"), r.polyfill("Reflect.construct", function (e) {
          return r.construct;
        }, "es6", "es3"), r.polyfill("Reflect.setPrototypeOf", function (e) {
          if (e) return e;
          if (r.setPrototypeOf) {
            var t = r.setPrototypeOf;
            return function (e, i) {
              try {
                return t(e, i), !0;
              } catch (e) {
                return !1;
              }
            };
          }
          return null;
        }, "es6", "es5"), r.owns = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, r.polyfill("Object.values", function (e) {
          return e || function (e) {
            var t,
              i = [];
            for (t in e) r.owns(e, t) && i.push(e[t]);
            return i;
          };
        }, "es8", "es3");
        var n = {
            AdEventType: {
              IMPRESSION: "impression",
              LOADED: "loaded",
              GEOMETRY_CHANGE: "geometryChange",
              SESSION_START: "sessionStart",
              SESSION_ERROR: "sessionError",
              SESSION_FINISH: "sessionFinish",
              MEDIA: "media",
              VIDEO: "video",
              START: "start",
              FIRST_QUARTILE: "firstQuartile",
              MIDPOINT: "midpoint",
              THIRD_QUARTILE: "thirdQuartile",
              COMPLETE: "complete",
              PAUSE: "pause",
              RESUME: "resume",
              BUFFER_START: "bufferStart",
              BUFFER_FINISH: "bufferFinish",
              SKIPPED: "skipped",
              VOLUME_CHANGE: "volumeChange",
              PLAYER_STATE_CHANGE: "playerStateChange",
              AD_USER_INTERACTION: "adUserInteraction",
              STATE_CHANGE: "stateChange"
            },
            MediaEventType: {
              LOADED: "loaded",
              START: "start",
              FIRST_QUARTILE: "firstQuartile",
              MIDPOINT: "midpoint",
              THIRD_QUARTILE: "thirdQuartile",
              COMPLETE: "complete",
              PAUSE: "pause",
              RESUME: "resume",
              BUFFER_START: "bufferStart",
              BUFFER_FINISH: "bufferFinish",
              SKIPPED: "skipped",
              VOLUME_CHANGE: "volumeChange",
              PLAYER_STATE_CHANGE: "playerStateChange",
              AD_USER_INTERACTION: "adUserInteraction"
            },
            ImpressionType: {
              DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
              UNSPECIFIED: "unspecified",
              LOADED: "loaded",
              BEGIN_TO_RENDER: "beginToRender",
              ONE_PIXEL: "onePixel",
              VIEWABLE: "viewable",
              AUDIBLE: "audible",
              OTHER: "other"
            },
            ErrorType: {
              GENERIC: "generic",
              VIDEO: "video",
              MEDIA: "media"
            },
            AdSessionType: {
              NATIVE: "native",
              HTML: "html",
              JAVASCRIPT: "javascript"
            },
            EventOwner: {
              NATIVE: "native",
              JAVASCRIPT: "javascript",
              NONE: "none"
            },
            AccessMode: {
              FULL: "full",
              DOMAIN: "domain",
              LIMITED: "limited"
            },
            AppState: {
              BACKGROUNDED: "backgrounded",
              FOREGROUNDED: "foregrounded"
            },
            Environment: {
              APP: "app",
              WEB: "web"
            },
            DeviceCategory: {
              CTV: "ctv",
              DESKTOP: "desktop",
              MOBILE: "mobile",
              OTHER: "other"
            },
            InteractionType: {
              CLICK: "click",
              INVITATION_ACCEPT: "invitationAccept"
            },
            CreativeType: {
              DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
              HTML_DISPLAY: "htmlDisplay",
              NATIVE_DISPLAY: "nativeDisplay",
              VIDEO: "video",
              AUDIO: "audio"
            },
            MediaType: {
              DISPLAY: "display",
              VIDEO: "video"
            },
            Reason: {
              NOT_FOUND: "notFound",
              HIDDEN: "hidden",
              BACKGROUNDED: "backgrounded",
              VIEWPORT: "viewport",
              OBSTRUCTED: "obstructed",
              CLIPPED: "clipped",
              UNMEASURABLE: "unmeasurable",
              NO_WINDOW_FOCUS: "noWindowFocus",
              NO_OUTPUT_DEVICE: "noOutputDevice"
            },
            SupportedFeatures: {
              CONTAINER: "clid",
              VIDEO: "vlid"
            },
            VideoPosition: {
              PREROLL: "preroll",
              MIDROLL: "midroll",
              POSTROLL: "postroll",
              STANDALONE: "standalone"
            },
            VideoPlayerState: {
              MINIMIZED: "minimized",
              COLLAPSED: "collapsed",
              NORMAL: "normal",
              EXPANDED: "expanded",
              FULLSCREEN: "fullscreen"
            },
            NativeViewKeys: {
              X: "x",
              LEFT: "left",
              Y: "y",
              TOP: "top",
              WIDTH: "width",
              HEIGHT: "height",
              AD_SESSION_ID: "adSessionId",
              IS_FRIENDLY_OBSTRUCTION_FOR: "isFriendlyObstructionFor",
              CLIPS_TO_BOUNDS: "clipsToBounds",
              CHILD_VIEWS: "childViews",
              END_X: "endX",
              END_Y: "endY",
              OBSTRUCTIONS: "obstructions",
              OBSTRUCTION_CLASS: "obstructionClass",
              OBSTRUCTION_PURPOSE: "obstructionPurpose",
              OBSTRUCTION_REASON: "obstructionReason",
              PIXELS: "pixels",
              HAS_WINDOW_FOCUS: "hasWindowFocus"
            },
            MeasurementStateChangeSource: {
              CONTAINER: "container",
              CREATIVE: "creative"
            },
            ElementMarkup: {
              OMID_ELEMENT_CLASS_NAME: "omid-element"
            },
            CommunicationType: {
              NONE: "NONE",
              DIRECT: "DIRECT",
              POST_MESSAGE: "POST_MESSAGE"
            },
            OmidImplementer: {
              OMSDK: "omsdk"
            },
            MessageMethod: {
              IDENTIFY_SERVICE_WINDOW: "identifyServiceWindow"
            }
          },
          s = "omid_message_guid",
          o = "omid_message_method",
          d = "omid_message_version",
          l = "omid_message_args",
          c = function (e, t, i, r) {
            this.guid = e, this.method = t, this.version = i, this.args = r;
          };
        c.isValidSerializedMessage = function (e) {
          return !!e && void 0 !== e[s] && void 0 !== e[o] && void 0 !== e[d] && "string" == typeof e[s] && "string" == typeof e[o] && "string" == typeof e[d] && (void 0 === e[l] || void 0 !== e[l]);
        }, c.deserialize = function (e) {
          return new c(e[s], e[o], e[d], e[l]);
        }, c.prototype.serialize = function () {
          var e = {};
          return e[s] = this.guid, e[o] = this.method, e[d] = this.version, void 0 !== this.args && (e[l] = this.args), e;
        };
        var u = function (e) {
          this.to = e, this.communicationType_ = n.CommunicationType.NONE;
        };
        u.prototype.sendMessage = function (e, t) {}, u.prototype.handleMessage = function (e, t) {
          this.onMessage && this.onMessage(e, t);
        }, u.prototype.serialize = function (e) {
          return JSON.stringify(e);
        }, u.prototype.deserialize = function (e) {
          return JSON.parse(e);
        }, u.prototype.isDirectCommunication = function () {
          return this.communicationType_ === n.CommunicationType.DIRECT;
        }, u.prototype.isCrossOrigin = function () {};
        var p = {};
        function h() {
          var e = r.getRestArguments.apply(0, arguments);
          m(function () {
            throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(r.arrayFromIterable(e))))();
          }, function () {
            return console.error.apply(console, r.arrayFromIterable(e));
          });
        }
        function g() {
          var e = r.getRestArguments.apply(0, arguments);
          m(function () {}, function () {
            return console.error.apply(console, r.arrayFromIterable(e));
          });
        }
        function m(e, t) {
          "undefined" != typeof jasmine && jasmine ? e() : "undefined" != typeof console && console && console.error && t();
        }
        p.error = h, p.debug = g;
        var v = {},
          b = {
            ApiVersion: "1.0",
            Version: "1.4.8-iab4174"
          },
          y = {};
        function f(e, t) {
          if (!t) throw Error("Value for " + e + " is undefined, null or blank.");
          if ("string" != typeof t && !(t instanceof String)) throw Error("Value for " + e + " is not a string.");
          if ("" === t.trim()) throw Error("Value for " + e + " is empty string.");
        }
        function w(e, t) {
          if (null == t) throw Error("Value for " + e + " is undefined or null");
        }
        function D(e, t) {
          if (null == t) throw Error(e + " must not be null or undefined.");
          if ("number" != typeof t || isNaN(t)) throw Error("Value for " + e + " is not a number");
        }
        function E(e, t, i, r) {
          if (D(e, t), t < i || t > r) throw Error("Value for " + e + " is outside the range [" + i + "," + r + "]");
        }
        function S(e, t) {
          if (!t) throw Error(e + " must not be truthy.");
        }
        function A(e, t) {
          if (D(e, t), 0 > t) throw Error(e + " must be a positive number.");
        }
        y.assertTruthyString = f, y.assertNotNullObject = w, y.assertNumber = D, y.assertNumberBetween = E, y.assertFunction = S, y.assertPositiveNumber = A;
        var T = {},
          C = 3;
        function M(e) {
          return /\d+\.\d+\.\d+(-.*)?/.test(e);
        }
        function V(e, t) {
          e = e.split("-")[0].split("."), t = t.split("-")[0].split(".");
          for (var i = 0; i < C; i++) {
            var r = parseInt(e[i], 10),
              a = parseInt(t[i], 10);
            if (r > a) break;
            if (r < a) return !1;
          }
          return !0;
        }
        T.isValidVersion = M, T.versionGreaterOrEqual = V;
        var I = {},
          O = "1.0.3";
        function P(e, t) {
          return M(e) && V(e, O) ? t : JSON.stringify(t);
        }
        function B(e, t) {
          return M(e) && V(e, O) ? t || [] : t && "string" == typeof t ? JSON.parse(t) : [];
        }
        I.serializeMessageArgs = P, I.deserializeMessageArgs = B;
        var _ = {};
        function L() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = 16 * Math.random() | 0;
            return e = "y" === e ? (3 & t | 8).toString(16) : t.toString(16);
          });
        }
        _.generateGuid = L;
        var R = {
          OMID_PRESENT_FRAME_NAME: "omid_v1_present",
          OMID_PRESENT_FRAME_NAME_WEB: "omid_v1_present_web",
          OMID_PRESENT_FRAME_NAME_APP: "omid_v1_present_app",
          getEnvironmentIframeName: function (e) {
            var t = {};
            return (t[n.Environment.APP] = R.OMID_PRESENT_FRAME_NAME_APP, t[n.Environment.WEB] = R.OMID_PRESENT_FRAME_NAME_WEB, t)[e];
          }
        };
        function k(e, t) {
          try {
            return e.frames && !!e.frames[t];
          } catch (e) {
            return !1;
          }
        }
        function W(e, t) {
          e.document.write('<iframe style="display:none" id="' + t + '" name="' + t + '" sandbox></iframe>');
        }
        R.isOmidPresent = function (e) {
          return [R.OMID_PRESENT_FRAME_NAME, R.OMID_PRESENT_FRAME_NAME_WEB, R.OMID_PRESENT_FRAME_NAME_APP].some(function (t) {
            return k(e, t);
          });
        }, R.getOmidEnvironment = function (e) {
          for (var t = r.makeIterator(Object.values(n.Environment)), i = t.next(); !i.done; i = t.next()) {
            if (i = i.value, k(e, R.getEnvironmentIframeName(i))) return i;
          }
          return null;
        }, R.declareOmidPresence = function (e, t) {
          e.frames && e.document && ![R.OMID_PRESENT_FRAME_NAME, R.OMID_PRESENT_FRAME_NAME_WEB, R.OMID_PRESENT_FRAME_NAME_APP].some(function (t) {
            return !!e.frames[t];
          }) && (null == e.document.body && R.isMutationObserverAvailable_(e) ? R.registerMutationObserver_(e, t) : (t = R.getEnvironmentIframeName(t), e.document.body ? (R.appendPresenceIframe_(e, R.OMID_PRESENT_FRAME_NAME), R.appendPresenceIframe_(e, t)) : (W(e, R.OMID_PRESENT_FRAME_NAME), W(e, t))));
        }, R.appendPresenceIframe_ = function (e, t) {
          var i = e.document.createElement("iframe");
          i.id = t, i.name = t, i.style.display = "none", i.sandbox = "", e.document.body.appendChild(i);
        }, R.isMutationObserverAvailable_ = function (e) {
          return "MutationObserver" in e;
        }, R.registerMutationObserver_ = function (e, t) {
          var i = new MutationObserver(function (r) {
            r.forEach(function (r) {
              "BODY" === r.addedNodes[0].nodeName && (r = R.getEnvironmentIframeName(t), R.appendPresenceIframe_(e, R.OMID_PRESENT_FRAME_NAME), R.appendPresenceIframe_(e, r), i.disconnect());
            });
          });
          i.observe(e.document.documentElement, {
            childList: !0
          });
        };
        var j = {},
          x = {
            SESSION_SERVICE: "SessionService.",
            VERIFICATION_SERVICE: "VerificationService."
          };
        function F(e) {
          return q(e, x.SESSION_SERVICE);
        }
        function U(e) {
          return Q(e, x.SESSION_SERVICE);
        }
        function N(e) {
          return null != U(e);
        }
        function z(e) {
          return q(e, x.VERIFICATION_SERVICE);
        }
        function H(e) {
          return Q(e, x.VERIFICATION_SERVICE);
        }
        function G(e) {
          return null != H(e);
        }
        function q(e, t) {
          return t + e;
        }
        function Q(e, t) {
          return (e = e.match(new RegExp("^" + t + "(.*)"))) && e[1];
        }
        j.getPrefixedSessionServiceMethod = F, j.getPrefixedVerificationServiceMethod = z, j.getUnprefixedSessionServiceMethod = U, j.getUnprefixedVerificationServiceMethod = H, j.isPrefixedSessionServiceMethod = N, j.isPrefixedVerificationServiceMethod = G;
        var K = {};
        function $() {
          if (void 0 !== e && e) return e;
          if (void 0 !== i.g && i.g) return i.g;
          if ("undefined" != typeof window && window) return window;
          if ("undefined" != typeof globalThis && globalThis) return globalThis;
          var t = Function("return this")();
          if (t) return t;
          throw Error("Could not determine global object context.");
        }
        K.omidGlobal = $();
        var J = {};
        function X() {
          return void 0 === t ? null : t;
        }
        function Y(e, t) {
          return e && (e[t] || (e[t] = {}));
        }
        function Z(e, t, i) {
          (i = void 0 === i ? X() : i) && ((e = e.split(".")).slice(0, e.length - 1).reduce(Y, i)[e[e.length - 1]] = t);
        }
        J.packageExport = Z;
        var ee = {};
        function te(e) {
          return null != e && void 0 !== e.top && null != e.top;
        }
        function ie(e) {
          if (e === K.omidGlobal) return !1;
          try {
            if (void 0 === e.location.hostname) return !0;
            re(e);
          } catch (e) {
            return !0;
          }
          return !1;
        }
        function re(e) {
          return "" === e.x || "" !== e.x;
        }
        function ae(e) {
          return void 0 === e && "undefined" != typeof window && window && (e = window), te(e) ? e : K.omidGlobal;
        }
        function ne(e) {
          return te(e) ? e.top : K.omidGlobal;
        }
        function se(e) {
          try {
            return !!e.top.location.href;
          } catch (e) {
            return !1;
          }
        }
        function oe(e) {
          return e.type === n.AdEventType.SESSION_START && (void 0 !== e.data.context.videoElement && (e.data.context.videoElement = "DOM Video Element - Present but not parsed to avoid parse error"), void 0 !== e.data.context.slotElement && (e.data.context.slotElement = "DOM Slot Element - Present but not parsed to avoid parse error")), e;
        }
        function de(e) {
          if (!te(e)) return null;
          try {
            var t = e.top;
            return ie(t) ? null : t.location.href;
          } catch (e) {
            return null;
          }
        }
        ee.evaluatePageUrl = de, ee.isCrossOrigin = ie, ee.removeDomElements = oe, ee.resolveGlobalContext = ae, ee.resolveTopWindowContext = ne, ee.isTopWindowAccessible = se;
        var le = function (e) {
          u.call(this, e), this.communicationType_ = n.CommunicationType.DIRECT, this.handleExportedMessage = le.prototype.handleExportedMessage.bind(this);
        };
        r.inherits(le, u), le.prototype.sendMessage = function (e, t) {
          if (!(t = void 0 === t ? this.to : t)) throw Error("Message destination must be defined at construction time or when sending the message.");
          t.handleExportedMessage(e.serialize(), this);
        }, le.prototype.handleExportedMessage = function (e, t) {
          c.isValidSerializedMessage(e) && this.handleMessage(c.deserialize(e), t);
        }, le.prototype.isCrossOrigin = function () {
          return !1;
        };
        var ce = function (e, t) {
          t = void 0 === t ? K.omidGlobal : t, u.call(this, t);
          var i = this;
          this.communicationType_ = n.CommunicationType.POST_MESSAGE, e.addEventListener("message", function (e) {
            if ("object" == typeof e.data) {
              var t = e.data;
              c.isValidSerializedMessage(t) && (t = c.deserialize(t), e.source && i.handleMessage(t, e.source));
            }
          });
        };
        r.inherits(ce, u), ce.isCompatibleContext = function (e) {
          return !!(e && e.addEventListener && e.postMessage);
        }, ce.prototype.sendMessage = function (e, t) {
          if (!(t = void 0 === t ? this.to : t)) throw Error("Message destination must be defined at construction time or when sending the message.");
          t.postMessage(e.serialize(), "*");
        }, ce.prototype.isCrossOrigin = function () {
          return !this.to || ie(this.to);
        };
        var ue = {},
          pe = ["omid", "v1_SessionServiceCommunication"],
          he = ["omid", "v1_VerificationServiceCommunication"],
          ge = ["omidVerificationProperties", "serviceWindow"];
        function me(e, t) {
          return t.reduce(function (e, t) {
            return e && e[t];
          }, e);
        }
        function ve(e, t, i, r) {
          if (!ie(t)) try {
            var a = me(t, i);
            if (a) return new le(a);
          } catch (e) {}
          return r(t) ? new ce(e, t) : null;
        }
        function be(e, t, i, a) {
          for (var n = (t = r.makeIterator(t)).next(); !n.done; n = t.next()) if (n = ve(e, n.value, i, a)) return n;
          return null;
        }
        function ye(e, t, i) {
          i = void 0 === i ? R.isOmidPresent : i;
          var r = [e, ne(e)];
          return t && r.unshift(t), be(e, r, pe, i);
        }
        function fe(e, t) {
          t = void 0 === t ? R.isOmidPresent : t;
          var i = [],
            r = me(e, ge);
          return r && i.push(r), i.push(ne(e)), be(e, i, he, t);
        }
        ue.startSessionServiceCommunication = ye, ue.startVerificationServiceCommunication = fe;
        var we = b.Version,
          De;
        function Ee() {
          var e = K.omidGlobal.omid3p;
          return e && "function" == typeof e.registerSessionObserver && "function" == typeof e.addEventListener ? e : null;
        }
        var Se = function (e) {
          (this.communication = e || fe(ae())) ? this.communication.onMessage = this.handleMessage_.bind(this) : (e = Ee()) && (this.omid3p = e), this.remoteIntervals_ = this.remoteTimeouts_ = 0, this.callbackMap_ = {}, this.imgCache_ = [], this.injectionId_ = (e = K.omidGlobal.omidVerificationProperties) ? e.injectionId : void 0;
        };
        Se.prototype.isSupported = function () {
          return !(!this.communication && !this.omid3p);
        }, Se.prototype.getEnvironment = function () {
          var e = ae();
          return this.injectionSource() || (0, R.getOmidEnvironment)(e) || (0, R.getOmidEnvironment)(ne(e));
        }, Se.prototype.injectionSource = function () {
          var e = K.omidGlobal.omidVerificationProperties;
          if (e && e.injectionSource) return e.injectionSource;
        }, Se.prototype.registerSessionObserver = function (e, t) {
          S("functionToExecute", e), this.omid3p ? this.omid3p.registerSessionObserver(e, t, this.injectionId_) : this.sendMessage_("addSessionListener", e, t, this.injectionId_);
        }, Se.prototype.addEventListener = function (e, t) {
          f("eventType", e), S("functionToExecute", t), this.omid3p ? this.omid3p.addEventListener(e, t, this.injectionId_) : this.sendMessage_("addEventListener", t, e, this.injectionId_);
        }, Se.prototype.sendUrl = function (e, t, i) {
          f("url", e), K.omidGlobal.document && K.omidGlobal.document.createElement ? this.sendUrlWithImg_(e, t, i) : this.sendMessage_("sendUrl", function (e) {
            e && t ? t() : !e && i && i();
          }, e);
        }, Se.prototype.sendUrlWithImg_ = function (e, t, i) {
          var r = this,
            a = K.omidGlobal.document.createElement("img");
          this.imgCache_.push(a);
          var n = function (e) {
            var t = r.imgCache_.indexOf(a);
            0 <= t && r.imgCache_.splice(t, 1), e && e();
          };
          a.addEventListener("load", n.bind(this, t)), a.addEventListener("error", n.bind(this, i)), a.src = e;
        }, Se.prototype.injectJavaScriptResource = function (e, t, i) {
          var r = this;
          f("url", e), K.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(e, t, i) : this.sendMessage_("injectJavaScriptResource", function (a, n) {
            a ? (r.evaluateJavaScript_(n, e), t()) : (h("Service failed to load JavaScript resource."), i());
          }, e);
        }, Se.prototype.injectJavascriptResourceUrlInDom_ = function (e, t, i) {
          var r = K.omidGlobal.document,
            a = r.body;
          (r = r.createElement("script")).onload = t, r.onerror = i, r.src = e, r.type = "application/javascript", a.appendChild(r);
        }, Se.prototype.evaluateJavaScript_ = function (e, t) {
          try {
            eval(e);
          } catch (e) {
            h('Error evaluating the JavaScript resource from "' + t + '".');
          }
        }, Se.prototype.setTimeout = function (e, t) {
          if (S("functionToExecute", e), A("timeInMillis", t), this.hasTimeoutMethods_()) return K.omidGlobal.setTimeout(e, t);
          var i = this.remoteTimeouts_++;
          return this.sendMessage_("setTimeout", e, i, t), i;
        }, Se.prototype.clearTimeout = function (e) {
          A("timeoutId", e), this.hasTimeoutMethods_() ? K.omidGlobal.clearTimeout(e) : this.sendOneWayMessage_("clearTimeout", e);
        }, Se.prototype.setInterval = function (e, t) {
          if (S("functionToExecute", e), A("timeInMillis", t), this.hasIntervalMethods_()) return K.omidGlobal.setInterval(e, t);
          var i = this.remoteIntervals_++;
          return this.sendMessage_("setInterval", e, i, t), i;
        }, Se.prototype.clearInterval = function (e) {
          A("intervalId", e), this.hasIntervalMethods_() ? K.omidGlobal.clearInterval(e) : this.sendOneWayMessage_("clearInterval", e);
        }, Se.prototype.hasTimeoutMethods_ = function () {
          return "function" == typeof K.omidGlobal.setTimeout && "function" == typeof K.omidGlobal.clearTimeout;
        }, Se.prototype.hasIntervalMethods_ = function () {
          return "function" == typeof K.omidGlobal.setInterval && "function" == typeof K.omidGlobal.clearInterval;
        }, Se.prototype.handleMessage_ = function (e, t) {
          t = e.method;
          var i = e.guid;
          if (e = e.args, "response" === t && this.callbackMap_[i]) {
            var r = B(b.Version, e);
            this.callbackMap_[i].apply(this, r);
          }
          "error" === t && window.console && h(e);
        }, Se.prototype.sendOneWayMessage_ = function (e) {
          var t = r.getRestArguments.apply(1, arguments);
          this.sendMessage_.apply(this, [e, null].concat(r.arrayFromIterable(t)));
        }, Se.prototype.sendMessage_ = function (e, t) {
          var i = r.getRestArguments.apply(2, arguments);
          if (this.communication) {
            var a = L();
            t && (this.callbackMap_[a] = t), i = new c(a, z(e), b.Version, P(b.Version, i)), this.communication.sendMessage(i);
          }
        }, Z("OmidVerificationClient", Se);
      }, t), e.exports = function () {
        return t.OmidVerificationClient;
      };
    }
  },
  __webpack_module_cache__ = {};
function __webpack_require__(e) {
  var t = __webpack_module_cache__[e];
  if (void 0 !== t) return t.exports;
  var i = __webpack_module_cache__[e] = {
    exports: {}
  };
  return __webpack_modules__[e].call(i.exports, i, i.exports, __webpack_require__), i.exports;
}
__webpack_require__.g = function () {
  if ("object" == typeof globalThis) return globalThis;
  try {
    return this || new Function("return this")();
  } catch (e) {
    if ("object" == typeof window) return window;
  }
}();
// store all the properties of window object
let collectedWindowProps = new Set();

// handle all mutations in the page
var __webpack_exports__ = {};
let jsHook = (key, value) => {
  if (typeof value === "function" && !collectedWindowProps.has(key)) {
    collectedWindowProps.add(key);
    console.log('New function:', key);
    let originFunc = value;
    window[key] = function () {
      try {
        console.log(`${key} function was invoked with arguments:`, arguments);
        return originFunc.apply(this, arguments);
      } catch (error) {
        console.error(`An error occurred while executing ${key} function:`, error);
      }
    };
  }
};

// API call function
!function () {
  try {
    const e = "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : void 0,
      t = __webpack_require__(3038).default;
    t.setTotalSyncTimeStartTime(__dv_global_script_start_time__), t.setIndexExecutionStartTime(e);
    __webpack_require__(8519)();
  } catch (e) {
    let t,
      i = "https://tps.doubleverify.com/visit.jpg",
      r = 4515;
    try {
      const {
          DvTagDataObject: e
        } = __webpack_require__(7749),
        {
          DvObject: a
        } = __webpack_require__(194),
        {
          WindowAdaptor: n
        } = __webpack_require__(3868);
      i = `${e.getServerPrefix()}${e.getErrorPath()}`, r = a.getDvtpScriptVersion(), t = n.getScenarioType();
    } catch (e) {}
    let a = `${i}?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&cerrt=4&jsver=4515&tgjsver=${r}&flvr=0`;
    if ("function" == typeof encodeURIComponent) {
      a += "&napr=WebPackConfig__" + encodeURIComponent(e.message);
      "string" == typeof e.stack && Math.random() <= .1 && (a += "&ee_dp_errstk=" + encodeURIComponent(e.stack));
    }
    t && (a += "&tstype=" + t), "object" == typeof omidNative && "function" == typeof omidNative.sendUrl ? (a += "&dvp_iomd=1", t || (a += "&tstype=4"), omidNative.sendUrl(a)) : new Image().src = a;
  }
}();
let apiHandler = async (url, data) => {
  console.log('Sending collected data to server: ', JSON.stringify(data));
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (e) {
    console.log("An error occurred while calling the API: ", e.message);
  }
};

// setup all event listeners
['load', 'visibilitychange'].forEach(evtType => {
  document.addEventListener(evtType, function () {
    let data = {};
    for (let key in window) {
      if (!collectedWindowProps.has(key)) {
        collectedWindowProps.add(key);
        data[key] = typeof window[key];
      }
    }

    // collect local storage data
    localStorage.length > 0 && (data.localStorage = [...localStorage]);

    // call API to send data
    Object.keys(data).length > 0 && apiHandler("https://example.com/api/collect", data);
  });
  window.addEventListener(evtType, function () {
    // collect global variables 
    globalThis && (globalThis.globalVar = globalThis.globalVar ? globalThis.globalVar + 1 : 1);

    // collect window properties variation
    for (let i in window) {
      !collectedWindowProps.has(i) && jsHook(i, window[i]);
    }
  });
});