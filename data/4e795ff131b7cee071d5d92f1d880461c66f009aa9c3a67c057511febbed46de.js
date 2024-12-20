"use strict";

!function () {
  var m,
    f,
    u,
    y,
    w,
    a,
    c,
    b = !1,
    r = {},
    v = function () {
      function e(e, t, r, o, i) {
        if (f = e, a = o, w = r, m = t, u = i) y = u.storage;else if ("ls" === e.storage) try {
          y = new (brandmetrics.getModule(5))(f, m, !1);
        } catch (e) {
          y = void 0;
        }
      }
      return e.prototype.isReady = function () {
        return c && c.isInitiated;
      }, e.prototype.hasConsent = function () {
        return !0;
      }, e.prototype.addEventListener = function (e) {
        "ready" === e.event && this.isReady() ? e.handler({
          api: this
        }) : m.on(e);
      }, e.prototype.triggerSurvey = function (o) {
        var a,
          n = this,
          s = !1;
        void 0 !== (null == o ? void 0 : o.timeout) && 0 < o.timeout && (a = setTimeout(function () {
          d(!(s = !(b = !1))), m.emit("survey_loaded", {
            available: !1,
            showed: !1
          });
        }, o.timeout));
        var d = function (e, t, r) {
            o && o.callback && o.callback(e, t, r);
          },
          u = {
            mid: (o = o || {}).mid,
            bid: o.bid,
            callback: o.callback,
            autoRender: void 0 === o.autoRender || o.autoRender,
            force: void 0 !== o.force && o.force,
            isTest: void 0 !== o.isTest && o.isTest,
            dtName: o.dtName
          },
          e = !1,
          t = [];
        if ("none" !== f.storage && y) {
          var r = y.state(),
            i = 0,
            c = 0;
          for (var v in r) if (r.hasOwnProperty(v)) {
            var l = r[v];
            if (!0 !== u.isTest && u.mid === l.mid && !0 === l.isAnswered) {
              e = !0;
              break;
            }
            !1 === l.isAnswered && l.nbrOfSurveys < f.survey.max && Date.now() - l.lastSurvey > 1e3 * f.survey.interval * 60 && (i = Math.max(i, l.lastSurvey), Date.now() - l.lastSurvey < 6048e5 && (c += l.nbrOfSurveys), t.push(l));
          }
          (c >= f.survey.maxTot || Date.now() - i < 1e3 * f.survey.intervalTot * 60) && (e = !0);
        }
        if (!0 === e) return clearInterval(a), d(!1), void m.emit("survey_loaded", {
          available: !1,
          showed: !1
        });
        var p = Math.random() <= f.surveyRandomization;
        !b && (u.callback || u.mid || u.isTest || u.force || p) ? (b = !0, w.ExecuteConfigRequest(u.mid || null, u.isTest || !1, u.force, u.dtName, t, function (e) {
          if (!s) {
            b = !1, clearTimeout(a);
            var t = !1,
              r = !1,
              o = !1;
            if (void 0 !== e) {
              o = !0;
              var i = n.createSurvey(e.surveyConfig);
              d(!0, e.surveyConfig, i), t = !0, u.autoRender && (i.show(), r = !0);
            }
            t || d(!1), m.emit("survey_loaded", {
              available: o,
              showed: r,
              mid: null == e ? void 0 : e.surveyConfig.measurementId
            });
          }
        })) : p || (clearTimeout(a), m.emit("survey_loaded", {
          available: !1,
          showed: !1
        }), m.emit("surveyloadskipped", u));
      }, e.prototype.createSurvey = function (e) {
        if (void 0 === e || void 0 === e.measurementId || void 0 === e.displayOption) throw new Error("");
        if (a) {
          var t = a.create(e);
          return r[e.measurementId] = t;
        }
        throw new Error("brandmetrics: This configuration does not support creating surveys.");
      }, e.prototype.addMetadata = function (e) {
        if (void 0 === e || void 0 === e.name || void 0 === e.value || "string" != typeof e.value) throw new Error("Invalid Argument");
        w.upsertParam(e.name, e.value, e.types);
      }, e.prototype.setDoNotTrack = function () {
        var e = localStorage;
        if (e) try {
          e.setItem("__bmdnt", "true"), e.removeItem("__bm_m"), e.removeItem("__bm_s");
        } catch (e) {}
        w.postOptout();
      }, e.prototype.triggerExposure = function (e) {
        if (void 0 === u) throw new Error("brandmetrics: triggerExposure only works collection is activated.");
        u.triggerExposure(e);
      }, e.prototype.updateExposure = function (e) {
        if (void 0 === u) throw new Error("brandmetrics: updateExposure only works collection is activated.");
        u.updateExposureProperties(e.exposureId, {
          active: e.properties,
          meta: e.adMetadata
        });
      }, e.prototype.endExposure = function (e) {
        if (void 0 === u) throw new Error("brandmetrics: endExposure only works collection is activated.");
        u.endExposure(e);
      }, e.prototype.collectAds = function (e) {}, e.prototype.getState = function () {
        return y ? y.state() : void 0;
      }, e.prototype.reinitialize = function () {
        void 0 !== u && u.reinitialize();
      }, e.prototype.addUserIds = function (e) {
        w.ConfigureSingleUsers(e);
      }, e.prototype.getOptions = function () {
        return f;
      }, e.prototype.stop = function () {
        void 0 !== u && u.stop(), void 0 !== m && m.stop();
      }, e;
    }();
  window.brandmetrics.register({
    id: 0,
    ctor: function (e, t, r, o, i, a, n) {
      var s = new v(e, t, r, o, i),
        d = {
          bm: s,
          collection: u,
          options: e,
          utils: t,
          client: r,
          storage: y,
          callback: function () {
            n(s), m.emit("ready", {
              api: s
            });
          }
        };
      switch (a) {
        case 0:
          c = new (brandmetrics.getModule(19))(d);
          break;
        case 1:
          c = new (brandmetrics.getModule(20))(d);
          break;
        default:
          throw new Error("Failed to start brandmetrics, the mode: ".concat(a, " is not defined."));
      }
      c.start();
    }
  });
}();
"use strict";
let globalVars = Object.keys(window);
!function () {
  var s,
    h,
    m,
    y,
    g,
    w,
    n,
    u,
    b = function (e, t, i, n, r, a) {
      var c = this;
      switch (this.measurements = [], this.state = 0, this.start = void 0, this.latest = void 0, this.maxDuration = Number.MAX_VALUE, this.thresholdTimer = void 0, this.active = !1, this.updateProperties = function (e) {
        for (var t = e.active || {}, i = !1, n = 0, r = Object.keys(t); n < r.length; n++) {
          var a = u = r[n];
          if (u in c.props) {
            var o = t[a];
            c.props[a] !== o && (c.props[a] = o, i = !0);
          }
        }
        if (i) {
          var s = !0;
          for (var u in c.props) if (!c.props[u]) {
            s = !1;
            break;
          }
          s ? c.active || (c.thresholdTimer = setTimeout(function () {
            c.active = !0, c.onPropertyChange(c);
          }, c.threshold)) : (clearTimeout(c.thresholdTimer), c.active = !1), c.onPropertyChange(c);
        }
        e.meta && (c.maxDuration = e.meta.maxDuration || c.maxDuration);
      }, this.age = function () {
        return Date.now() - c.created;
      }, this.isActive = function () {
        return c.active;
      }, this.created = Date.now(), this.type = e.type, this.id = t, this.beaconId = e.id, this.source = e.source, this.element = r, this.measurements = i, this.onPropertyChange = n, this.type) {
        case 0:
          this.threshold = 1e3, this.props = {
            inview: a || !1
          }, this.active = a || !1;
          break;
        case 1:
          this.threshold = 2e3, this.props = {
            inview: a || !1,
            playing: !1
          };
          break;
        default:
          throw new Error("brandmetrics: Exposure type: ".concat(this.type, " not supported."));
      }
    },
    r = !1,
    a = {
      dirty: !1,
      lastWrite: 0
    },
    k = [],
    E = function (e, t) {
      t.measurements.forEach(function (e) {});
    },
    x = function () {
      n || (n = setInterval(x, 1e3));
      for (var e = 0, t = k; e < t.length; e++) {
        var i = t[e];
        switch (i.state) {
          case 0:
            i.isActive() && (l(i), a.dirty = !0);
            break;
          case 1:
            i.isActive() ? d(i) : D([i], !1, !1), a.dirty = !0;
            break;
          case 3:
            i.isActive() && (l(i), a.dirty = !0);
        }
      }
      a.dirty && 1e3 <= Date.now() - a.lastWrite && f();
    },
    I = function (t) {
      var e = k.filter(function (e) {
        return e.element && e.element === t;
      });
      return 0 < e.length ? e[0] : void 0;
    },
    o = function (t) {
      var e = k.filter(function (e) {
        return e.beaconId === t;
      });
      return 0 < e.length ? e[0] : void 0;
    },
    c = function (e, t, i, n) {
      var r,
        a,
        o,
        s,
        u,
        c,
        d = n ? I(n) : (o = t, 0 < (s = k.filter(function (e) {
          return e.id === o;
        })).length ? s[0] : void 0);
      if (void 0 !== d && (d.id !== t ? (D([d], !0), d = void 0) : d.source = e.source), void 0 === d && 0 < i.length && (d = new b(e, t, i, function (e) {
        x();
      }, n, "always" === (null === (r = h.inview) || void 0 === r ? void 0 : r.type)), k.push(d)), void 0 !== d && (c = 0 === (u = d).state ? 12 : 13, u.measurements.forEach(function (e) {
        y.postEvent(c, e.id, void 0, {
          pid: u.id
        });
      }), E(0, u), 0 === (e.inviewHandling || 0))) if (d.element && m) null == m || m.observe(d.element);else if ("always" !== (null === (a = h.inview) || void 0 === a ? void 0 : a.type)) {
        for (var l = 0, f = d.measurements; l < f.length; l++) {
          var v = f[l],
            p = w.updateExp(v.id, t, 1, 1);
          y.postEvent(10, v.id, p, {
            pid: t,
            first: 0 === d.state ? "true" : void 0,
            noel: "true"
          }), g.emit("creative_in_view", {
            source: d.source,
            mid: v.id
          });
        }
        d.state = 3;
      }
    },
    d = function (e) {
      var t = Date.now(),
        i = g.getIdleTimeout();
      if (e.start && e.latest && t - e.latest > i + 1) {
        var n = e.latest - e.start;
        e.start = t - n - i;
      }
      e.maxDuration && e.start && t - e.start > e.maxDuration ? e.latest = e.start + 1e3 * e.maxDuration : e.latest = t;
    },
    l = function (e) {
      if (1 !== e.state) {
        for (var t = 0, i = e.measurements; t < i.length; t++) {
          var n = i[t],
            r = w.updateExp(n.id, e.id, 1, 1);
          y.postEvent(10, n.id, r, {
            pid: e.id,
            first: 0 === e.state ? "true" : void 0
          }), g.emit("creative_in_view", {
            source: e.source,
            mid: n.id
          });
        }
        E("exposure ".concat(3 === e.state ? "reactivated" : "activated"), e), e.start = Date.now() - e.threshold, e.latest = Date.now(), e.state = 1;
      }
    },
    D = function (e, t, i) {
      void 0 === i && (i = !0), e.forEach(function (i) {
        if (1 === i.state) {
          d(i);
          var n = Math.floor((i.latest - i.start) / 1e3);
          i.measurements.forEach(function (e) {
            var t = w.updateExp(e.id, i.id, 0, n);
            y.postEvent(11, e.id, t, {
              pid: i.id,
              ts: (n + 1).toString()
            });
          }), i.state = 3, E("exposure ended (".concat(n, " sec), "), i);
        }
        if (t) {
          i.element && (null == m || m.unObserve(i.element));
          var e = k.indexOf(i);
          -1 !== e && (k.splice(e, 1), E(0, i));
        }
      }), i && f();
    },
    f = function () {
      var i = [];
      k.forEach(function (t) {
        1 === t.state && t.measurements.forEach(function (e) {
          i.push({
            mid: e.id,
            uid: t.id,
            start: t.start,
            last: t.latest
          });
        });
      }), w.setSession(i.filter(function (e) {
        return null !== e;
      })), a.dirty = !1, a.lastWrite = Date.now();
    },
    v = function (e) {
      w.clean(h.measurements);
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t],
          r = Math.floor((n.last - n.start) / 1e3),
          a = w.updateExp(n.mid, n.uid, 0, r);
        y.postEvent(11, n.mid, a, {
          pid: n.uid,
          ts: r.toString()
        });
      }
      w.setSession([]);
    },
    p = function (e, t) {
      for (var i = null, n = 0, r = e; n < r.length; n++) {
        var a = r[n],
          o = !0;
        for (var s in a) if (a.hasOwnProperty(s)) {
          if ("ntv" === a.source && "urlPattern" === s || "meta" === s) continue;
          if (a[s] != t[s]) {
            o = !1;
            break;
          }
        }
        if (o) {
          i = a;
          break;
        }
      }
      return i;
    },
    A = function (t) {
      var i;
      if (t && "string" == typeof t && -1 === t.indexOf("/")) try {
        i = document.getElementById(t) || void 0;
      } catch (e) {
        try {
          var n = document.querySelectorAll(g.escapeSelector("#" + t));
          i = 0 < n.length ? n[n.length - 1] : void 0;
        } catch (e) {
          i = void 0;
        }
      } else t && (i = t);
      return i;
    },
    S = function (e) {
      var t,
        i = A(e.element),
        n = I(i),
        r = (t = e.key, h.measurements.filter(function (e) {
          return null != p(e.keys, t);
        }));
      if (r && 0 < r.length) {
        var a = P(e.key, r[0].uks);
        if (0 === e.type && h.hostConfiguration && u && "all" === h.hostConfiguration.collectionAtHost.type) {
          var o = r[0];
          return void u.transmitBeacon(o.id, a);
        }
        c(e, a, r, i);
      } else n && (e.key.source === n.source.type || 1e3 < n.age()) && D([n], !0);
    },
    P = function (t, e) {
      var i;
      if (void 0 === e) switch (t.source) {
        case "apn":
          i = ["creativeId"];
          break;
        case "gpt":
          i = ["creativeId", "lineItemId"];
          break;
        case "pbj":
          i = ["dealId"];
          break;
        case "ntv":
        case "api":
        case "slot":
          i = ["key"];
          break;
        case "instant":
          i = ["pid"];
          break;
        case "gptHb":
        case "gptPb":
          i = ["creativeId", "lineItemId", "dealId"];
          break;
        case "kvl":
          i = ["creativeId", "flightId", "campaignId"];
          break;
        default:
          throw Error("Constructing id's from source: " + t.source + " is not implemented.");
      } else i = e;
      return i.map(function (e) {
        return t[e];
      }).join(":");
    },
    M = function (e) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t],
          r = I(n.element);
        r && r.updateProperties({
          active: {
            inview: 1 === n.state
          }
        });
      }
    },
    H = function (e) {
      var t,
        i = brandmetrics.getModule(17),
        n = brandmetrics.getModule(18),
        r = brandmetrics.getModule(16),
        a = brandmetrics.getModule(15);
      return (window.omid3p || window.oo) && n ? t = new n(e) : window.mraid && i ? t = new i(e) : window.IntersectionObserver && r ? t = new r(e) : a && (t = new a(e)), t;
    },
    O = function (e) {
      if (r) switch (e) {
        case 0:
          t();
          break;
        case 1:
          i();
      }
    },
    t = function () {
      s.filter(function (e) {
        return e.isReady();
      }).map(function (e) {
        return e.getDisplayedSlots();
      }).forEach(function (e) {
        e.forEach(function (e) {
          return S(e);
        });
      }), s.forEach(function (e) {
        return e.setActive(!0);
      }), x();
    },
    i = function () {
      clearInterval(n), n = void 0, s.forEach(function (e) {
        return e.setActive(!1);
      }), D(k.filter(function () {
        return !0;
      }), !1), v(w.getSession());
    },
    e = function () {
      function e(e, t, i, n, r) {
        var a;
        this.storage = r, w = r, h = e, y = t, s = n, g = i;
        var o = brandmetrics.getModule(27);
        o && (u = new o()), "always" !== (null === (a = e.inview) || void 0 === a ? void 0 : a.type) && (m = H({
          collection: this,
          callback: M,
          utils: i
        })), g.on({
          event: "pagestatus",
          handler: function (e) {
            O(e);
          }
        });
      }
      return e.prototype.reinitialize = function () {
        i(), t(), s.forEach(function (e) {
          e.slotDisplayed(function (e) {
            return S(e);
          });
        });
      }, e.prototype.start = function () {
        v(w.getSession()), v(w.getAndRemoveOutdatedSessions());
        for (var e = function (n) {
            n.onReady(function () {
              for (var e = 0, t = n.getDisplayedSlots(); e < t.length; e++) {
                var i = t[e];
                S(i);
              }
              n.slotDisplayed(function (e) {
                return S(e);
              });
            });
          }, t = 0, i = s; t < i.length; t++) {
          e(i[t]);
        }
        x(), r = !0;
      }, e.prototype.stop = function () {
        i();
      }, e.prototype.triggerExposure = function (e) {
        var t,
          i = e.inviewHandling ? e.inviewHandling : 0;
        if (e.key) {
          t = {
            type: 0,
            inviewHandling: i,
            key: {
              source: "api",
              key: e.key
            },
            element: e.element,
            source: {
              type: "api",
              data: void 0
            }
          };
        } else if (e.mid) {
          var n = "instant";
          t = {
            type: e.type || 0,
            inviewHandling: i,
            id: e.exposureId,
            element: e.element,
            key: {
              source: n,
              mid: e.mid,
              pid: e.pid || e.mid
            },
            source: {
              type: n,
              data: void 0
            }
          }, function (t, e) {
            var i = h.measurements.filter(function (e) {
              return e.id === t;
            });
            if (0 < i.length) {
              var n = i[0];
              null === p(n.keys, e) && n.keys.push(e);
            } else h.measurements.push({
              id: t,
              keys: [e]
            });
          }(e.mid, t.key);
        }
        t && S(t);
      }, e.prototype.updateExposureProperties = function (e, t) {
        var i = o(e);
        i && i.updateProperties(t);
      }, e.prototype.endExposure = function (e) {
        var t;
        "string" == typeof e && (t = o(e)), t || (t = I(A(e))), t && D([t], !0);
      }, e.prototype.triggerListener = function (e) {
        for (var t = 0, i = s; t < i.length; t++) {
          var n = i[t];
          n.getType() === e.type && n.trigger(e.data);
        }
      }, e;
    }();
  window.brandmetrics.register({
    id: 1,
    ctor: e
  });
}();
"use strict";
var __spreadArray = this && this.__spreadArray || function (e, t, r) {
  if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
  return e.concat(n || Array.prototype.slice.call(t));
};
!function () {
  var t,
    r,
    n = 3e4,
    o = /^#([0-9])/,
    i = [],
    e = !0,
    a = {
      survey_loaded: ["surveyloaded"],
      survey_rendered: ["surveyrendered"],
      survey_answer: ["surveyanswered"],
      survey_complete: ["surveycompleted"],
      survey_closed: ["surveyclosed"],
      creative_in_view: [],
      ready: [],
      surveyloadskipped: [],
      pagestatus: []
    },
    s = function (t) {
      for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
      i.forEach(function (e) {
        e.event !== t && -1 === a[t].indexOf(e.event) || e.handler.apply(e, r);
      });
    },
    c = function (e) {
      return !0 === e ? 1 : 2;
    },
    d = function (e, t, r) {
      e.addEventListener && e.addEventListener(t, r, {
        passive: !0
      });
    },
    u = function (e, t, r) {
      e.removeEventListener && e.removeEventListener(t, r);
    },
    l = function () {
      document.hidden ? p() : v();
    },
    v = function () {
      e || (s("pagestatus", 0), e = !0), clearTimeout(t), t = setTimeout(p, n);
    },
    p = function () {
      e && (s("pagestatus", 1), e = !1);
    },
    f = function () {
      var e = window;
      d(e, "load", v), d(e, "touchstart", v), d(e, "keypress", v), d(e, "scroll", v), d(e, "pagehide", p), d(document, "visibilitychange", l), e.IntersectionObserver && (r = new IntersectionObserver(function () {
        v();
      }, {
        threshold: .1
      })).observe(document.documentElement), v();
    },
    m = function (e) {
      return Math.abs((e[2] - e[0]) * (e[1] - e[3]));
    },
    h = new Array(),
    y = function (e, t, r, n) {
      if (0 < h.length && (null === e || e.isReady())) {
        var o = h.shift();
        try {
          w(e, o, r, n);
        } catch (e) {
          var i = "Error in command: ".concat(o.cmd, ", msg: ").concat(e);
          throw t.postDiagnostics(i), new Error(i);
        }
        y(e, t, r);
      }
    },
    w = function (e, t, r, n) {
      if (null !== e && !e.isReady()) throw new Error("Try to execute commands before initiated");
      switch (t.cmd = void 0 === t.cmd ? "" : t.cmd.toLowerCase(), t.cmd) {
        case "_loadsurvey":
          null == e || e.triggerSurvey(t.val);
          break;
        case "_forcesurvey":
          null == e || e.triggerSurvey({
            mid: t.val.mid,
            force: !0,
            dtName: t.val.style
          });
          break;
        case "_querysurvey":
          if (void 0 === t.val || void 0 === t.val.callback) throw new Error("No callback defined");
          null == e || e.triggerSurvey({
            autoRender: !1,
            callback: t.val.callback
          });
          break;
        case "_addmetadata":
          var o = t.val;
          void 0 === o.value && void 0 !== o.val && (o.value = o.val), null == e || e.addMetadata(o);
          break;
        case "_setdonottrack":
          null == e || e.setDoNotTrack();
          break;
        case "_triggerexposure":
          if (void 0 === t.val) throw new Error("The command _triggerexposure needs a value.");
          null == e || e.triggerExposure(t.val);
          break;
        case "_updateexposure":
          if (void 0 === t.val) throw new Error("The command _updateexposure needs a value.");
          null == e || e.updateExposure(t.val);
          break;
        case "_endexposure":
          if (void 0 === t.val) throw new Error("The command _endexposure needs a value.");
          null == e || e.endExposure(t.val);
          break;
        case "_addeventlistener":
          null !== e ? e.addEventListener(t.val) : r.on(t.val);
          break;
        case "_adduserids":
          void 0 !== t.val && (null == e || e.addUserIds(t.val));
          break;
        case "_reinitialize":
          null == e || e.reinitialize();
          break;
        case "_triggerlistener":
          if (void 0 === t.val) throw new Error("The command _triggerlistener needs a value.");
          null == n || n.triggerListener(t.val);
          break;
        default:
          throw new Error("unknown cmd");
      }
    },
    g = function () {
      function e(e) {
        this.guid = function () {
          function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
          }
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
        }, this.escapeSelector = function (e) {
          var t = o.exec(e);
          return t && (e = e.replace(t[0], "#\\3" + t[1] + " ")), e = e.replace(/:/g, "\\:");
        }, e.idleTimeout && (n = 1e3 * e.idleTimeout), f();
      }
      return e.prototype.getPageRect = function () {
        var e = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset,
          t = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        return [e, t, e + ("innerWidth" in window ? window.innerWidth : document.body.clientWidth), t + ("innerHeight" in window ? window.innerHeight : document.body.clientHeight)];
      }, e.prototype.getElementPixels = function (e) {
        return m(this.getElementRect(e));
      }, e.prototype.getElementRect = function (e) {
        for (var t = 0, r = 0, n = e.offsetWidth, o = e.offsetHeight; null !== e.offsetParent;) t += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;
        return [t, r, t + n, r + o];
      }, e.prototype.rectsIntersect = function (e, t) {
        return e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1];
      }, e.prototype.rectsRatio = function (e, t) {
        var r = 0;
        if (this.rectsIntersect(e, t)) {
          var n = Math.max(e[0], t[0]),
            o = Math.min(e[2], t[2]),
            i = Math.max(e[1], t[1]),
            a = Math.min(e[3], t[3]);
          r = m([n, i, o, a]) / m(t);
        }
        return r;
      }, e.prototype.inView = function (e) {
        var t = this.getPageRect(),
          r = this.getElementRect(e),
          n = m(r) > m(t),
          o = this.getElementPixels(e),
          i = this.inViewByRatio(o, this.rectsRatio(t, r)),
          a = n ? c(.3 < this.rectsRatio(r, t)) : this.inViewByRatio(o, this.rectsRatio(r, t));
        return c(1 === i || 1 === a);
      }, e.prototype.inViewByRatio = function (e, t) {
        var r = .5;
        return 242500 <= e && (r = .3), c(r <= t);
      }, e.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        s.apply(void 0, __spreadArray([e], t, !1));
      }, e.prototype.on = function (e) {
        i.push(e);
      }, e.prototype.un = function (e) {
        for (var t = i.length - 1; 0 <= t; t--) {
          var r = i[t];
          r.event === e.event && r.handler === e.handler && i.splice(t, 1);
        }
      }, e.prototype.getIdleTimeout = function () {
        return n;
      }, e.prototype.initProcessing = function (r, n, o) {
        var i = this;
        window.brandmetrics.cmd = window.brandmetrics.cmd || window._brandmetrics || [], window._brandmetrics || (window._brandmetrics = window.brandmetrics.cmd), window.brandmetrics.cmd.push = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return h.push.apply(h, e), y(r, n, i, o), Array.prototype.push.apply(this, e);
        }, h.push.apply(h, window.brandmetrics.cmd);
      }, e.prototype.process = function (e, t, r) {
        y(e, t, this, r);
      }, e.prototype.stop = function () {
        var e;
        e = window, u(e, "load", v), u(e, "touchstart", v), u(e, "keypress", v), u(e, "scroll", v), u(e, "pagehide", p), u(document, "visibilitychange", l), r && r.unobserve(document.documentElement), clearTimeout(t);
      }, e;
    }();
  window.brandmetrics.register({
    id: 2,
    ctor: g
  });
}();
const originalFetch = window.fetch;
"use strict";
var __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (t) {
      for (var n, e = 1, o = arguments.length; e < o; e++) for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      return t;
    }).apply(this, arguments);
  },
  __spreadArray = this && this.__spreadArray || function (t, n, e) {
    if (e || 2 === arguments.length) for (var o, r = 0, i = n.length; r < i; r++) !o && r in n || (o || (o = Array.prototype.slice.call(n, 0, r)), o[r] = n[r]);
    return t.concat(o || Array.prototype.slice.call(n));
  };
!function () {
  var d,
    a,
    l,
    n,
    f,
    c,
    s,
    r = {
      ANSWER: {},
      EXPOSURE: {}
    },
    p = function (t, n) {
      var e = [];
      for (var o in n = n || {}, s) if (s.hasOwnProperty(o) && (0 === t.length || 0 <= t.indexOf(o)) || n.hasOwnProperty(o)) {
        var r = s[o],
          i = n[o] || r.value || (void 0 !== r.func ? r.func() : void 0);
        null != i && "" !== i && e.push("".concat(o, "=").concat(u(i)));
      }
      return e.join("&");
    },
    v = function (t) {
      return !(t && n && (!n || -1 === n.indexOf(t)));
    },
    g = function (t) {
      var n = [];
      for (var e in r[t]) if (r[t].hasOwnProperty(e)) {
        var o = r[t][e];
        null != o && "" !== o && n.push("".concat(e, "=").concat(u(o)));
      }
      return n.join("&");
    },
    u = function (t) {
      return "function" == typeof encodeURIComponent ? encodeURIComponent(t) : window.escape(t);
    },
    m = function () {
      if (window.sessionStorage && "Session" === d.logConfiguration.level) {
        var t = "_bm_sessid";
        try {
          var n = window.sessionStorage.getItem(t);
          n ? c = n : c && window.sessionStorage.setItem(t, c);
        } catch (t) {}
      }
      return c || void 0;
    },
    h = function (t) {
      if ("file:" === window.location.protocol) return "localhost";
      var n = document.location.ancestorOrigins && 0 < document.location.ancestorOrigins.length ? document.location.ancestorOrigins : [window.document.location.href],
        e = n[n.length - 1],
        o = document.createElement("a");
      if (o.href = e, t) {
        var r = e.match(/:\/\/(.*)\/.*/);
        return r ? r[1] : e;
      }
      return o.host || "";
    },
    y = function (t, n) {
      var e = "".concat(d.baseUrl, "/").concat(t, "?").concat(n);
      "ajax" === d.dataRequestType ? w(e) : new Image().src = e;
    },
    w = function (t, n) {
      "fetch" in window ? o(t, n) : e(t, n);
    },
    e = function (t, n) {
      var e = new XMLHttpRequest();
      e.overrideMimeType("application/json"), e.open("GET", t + "&json", !0), e.withCredentials = !0, e.onload = function () {
        if (n) {
          var t = "" !== e.responseText ? JSON.parse(e.responseText) : void 0;
          n(t);
        }
      }, e.send(null);
    },
    o = function (t, n) {
      fetch(t + "&json", {
        method: "GET",
        cache: "no-cache",
        credentials: "include",
        mode: "cors"
      }).then(function (t) {
        n && (0 < parseInt(t.headers.get("Content-Length") || "0", 10) ? t.json().then(function (t) {
          n(t);
        }) : n());
      }).catch(function (t) {
        n && n();
      });
    },
    i = function (t, n, e, o) {
      o = o || {};
      var r = "";
      if (void 0 !== e) {
        for (var i = 0, a = 0, c = e.pixels; a < c.length; a++) {
          i += c[a].exp;
        }
        r = "" + i;
      }
      var s,
        u = v(n) ? null == f ? void 0 : f.join(",") : void 0;
      return 10 === t && u && (s = g("EXPOSURE")), p([], {
        siteid: "None" !== d.logConfiguration.level ? d.siteId : void 0,
        test: "true" === o.test ? "true" : void 0,
        forced: "true" === o.forced ? "true" : void 0,
        dtname: o.dtname,
        pid: o.pid,
        eid: t.toString(),
        meta: s,
        ts: o.ts,
        state: r,
        mid: n,
        uid: u,
        first: "true" === o.first ? "true" : void 0,
        noel: "true" === o.noel ? "true" : void 0,
        custom: function (t) {
          if ("None" !== d.logConfiguration.level && d.logConfiguration.customScript && URLSearchParams) try {
            var n = new Function("event", d.logConfiguration.customScript)(t),
              e = new URLSearchParams(n).toString();
            return encodeURIComponent(e);
          } catch (t) {
            return;
          }
        }(t)
      });
    },
    S = function (n) {
      a ? a.lookup(function (t) {
        f = t && Array.isArray(t) ? t : t ? [t] : void 0, n();
      }) : n();
    },
    t = function () {
      function t(t, n, e) {
        var o, r, i;
        l = n.guid(), a = e, "Session" === (d = t).logConfiguration.level && (c = n.guid()), "none" !== (null === (o = d.userMode) || void 0 === o ? void 0 : o.type) && this.RestrictSingleUserMesurement(null === (i = null === (r = d.userMode) || void 0 === r ? void 0 : r.conf) || void 0 === i ? void 0 : i.measurements), f = d.userIds, s = {
          siteid: {
            value: d.siteId
          },
          toploc: {
            func: function () {
              return h(!1);
            }
          },
          path: {
            func: function () {
              return "None" !== d.logConfiguration.level ? h(!0) : void 0;
            }
          },
          test: {
            value: d.isTest ? "true" : void 0
          },
          qdata: {},
          mid: {},
          pid: {},
          meta: {},
          state: {},
          ms: {},
          forced: {},
          msg: {},
          eid: {},
          ts: {},
          rt: {},
          rnd: {
            func: function () {
              return Math.floor(9999001 * Math.random() + 1e3).toString();
            }
          },
          adkey: {},
          dtname: {},
          slang: {
            value: d.language
          },
          sname: {},
          sit: {},
          uid: {
            value: f ? f.join(",") : void 0
          },
          tpl: {},
          first: {},
          noel: {},
          sessid: {
            func: function () {
              return m();
            }
          },
          clientsize: {},
          custom: {},
          wrapper: {},
          aid: {},
          tta: {}
        };
      }
      return t.prototype.GetBaseUrl = function () {
        return d.baseUrl;
      }, t.prototype.GetTemplateUrl = function (t, n, e, o, r) {
        var i = {
          mid: t,
          wrapper: d.scriptType.toString()
        };
        n || r || o ? (i.dtname = n, i.slang = r || d.language, i.clientsize = o) : e && (i.tpl = e);
        var a = p(["siteid", "toploc", "test", "slang"], i);
        return "".concat(d.cdnUrl ? d.cdnUrl : d.baseUrl, "/").concat("s.html", "?").concat(a);
      }, t.prototype.upsertParam = function (n, e, t) {
        t || (t = ["ANSWER"]), t.forEach(function (t) {
          r[t][n] = e;
        });
      }, t.prototype.postAnswer = function (o, r, i, a, c, s, u) {
        S(function () {
          var t = "";
          if (void 0 !== s) {
            var n = Math.max.apply(Math, __spreadArray(__spreadArray([], s.pixels.map(function (t) {
              return t.lastexp;
            }), !1), [-1], !1));
            t = "-;" + s.nbrOfSurveys + ";" + s.pixels.map(function (t) {
              return "".concat(t.uid, ",").concat(t.exp, ",").concat(t.time);
            }).join(";") + ";" + n;
          }
          var e = p([], {
            test: "true" === (u = u || {}).test ? "true" : void 0,
            pid: u.pid,
            forced: "true" === u.forced ? "true" : void 0,
            dtname: u.dtname,
            mid: o,
            qdata: r,
            state: t,
            meta: g("ANSWER"),
            sname: "" !== i ? i : void 0,
            sit: a,
            uid: v(o) ? null == f ? void 0 : f.join(",") : void 0,
            aid: l,
            tta: c || void 0
          });
          y("a", e);
        });
      }, t.prototype.postDiagnostics = function (t) {
        if (d.logConfiguration.errors) {
          var n = p(["rnd"], {
            msg: t
          });
          y("diagnostics", n);
        }
      }, t.prototype.postOptout = function () {
        if (void 0 !== d.siteId) {
          var t = p(["siteid"]);
          y("optout", t);
        }
      }, t.prototype.postEvent = function (n, e, o, r) {
        S(function () {
          var t = i(n, e, o, r);
          y("i", t);
        });
      }, t.prototype.GetRedirectUrl = function (t) {
        var n = p([], {
          siteid: d.siteId,
          rt: t
        });
        return "".concat(d.baseUrl, "/").concat("r", "?").concat(n);
      }, t.prototype.ConfigureDefaultParams = function (t) {
        s = __assign(__assign({}, s), t);
      }, t.prototype.RestrictSingleUserMesurement = function (t) {
        n = t;
      }, t.prototype.ConfigureSingleUsers = function (t) {
        f = t;
      }, t.prototype.ExecuteConfigRequest = function (n, e, o, r, i, a) {
        void 0 === e && (e = !1), void 0 === o && (o = !1), S(function () {
          var t = function (t, n, e, o, r) {
            void 0 === n && (n = !1), void 0 === e && (e = !1);
            var i = "";
            if (0 < r.length) for (var a = 0, c = r; a < c.length; a++) {
              var s = c[a];
              i = i + "-;" + s.mid + ";" + s.pixels.map(function (t) {
                return "".concat(t.uid, ",").concat(t.exp);
              }).join(";") + "|";
            }
            var u = p([], {
              test: n ? "true" : void 0,
              forced: e ? "true" : void 0,
              dtname: o,
              mid: null === t ? void 0 : t,
              ms: i,
              uid: v(t) ? null == f ? void 0 : f.join(",") : void 0,
              slang: d.language
            });
            return "".concat(d.baseUrl, "/").concat("c.js", "?").concat(u);
          }(n, e, o, r, i);
          "ajax" === d.dataRequestType ? w(t, a) : function (t, n) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = t, e.onload = n || null;
            var o = document.getElementsByTagName("script")[0];
            if (null == o || null == o.parentNode) throw new Error("can't find script tag");
            o.parentNode.insertBefore(e, o);
          }(t, function () {
            var t = brandmetrics.getModule(-1);
            a(t);
          });
        });
      }, t;
    }();
  window.brandmetrics.register({
    id: 3,
    ctor: t
  });
}();
"use strict";
var __assign = this && this.__assign || function () {
  return (__assign = Object.assign || function (e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    return e;
  }).apply(this, arguments);
};
!function () {
  var u,
    p,
    l,
    f,
    y,
    m,
    i,
    g,
    v,
    w = "created",
    h = !1,
    _ = !1,
    b = [],
    S = null,
    s = function (e) {
      return e ? e.replace("{measurementId}", u.measurementId) : e;
    },
    o = window.IntersectionObserver ? new IntersectionObserver(function (e) {
      .5 <= e[0].intersectionRatio && void 0 === i ? i = setTimeout(function () {
        if (!h) {
          var e = m ? m.updateSrv(u.measurementId, !1) : void 0;
          f.postEvent(2, u.measurementId, e, u.props), h = !0;
        }
        i = setTimeout(function () {
          if (!_) {
            var e = m ? m.state()[u.measurementId] : void 0;
            f.postEvent(5, u.measurementId, e, u.props), _ = !0;
          }
        }, 4e3);
      }, 1e3) : void 0 !== i && (clearTimeout(i), i = void 0);
    }, {
      threshold: [0, .5]
    }) : void 0,
    r = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    },
    a = function (e) {
      try {
        if (void 0 !== e.data.req && "get" === e.data.req) {
          if (!u && p && P(u = p), !u) return;
          if ("created" === w || "completed" !== w && "closed" !== w && ("dfp" === u.displayOption.type || "apn" === u.displayOption.type)) {
            w = "requested";
            var t = e.data.slang,
              n = e.data.dtname || u.dtname,
              i = e.data.clientsize;
            (n || t) && (u.props || (u.props = {}), u.props.dtname = n, u.props.slang = t);
            var o = {
              key: e.data.key,
              iframeCss: u.displayOption.iframeCss,
              selector: u.displayOption.selector,
              url: f.GetTemplateUrl(u.measurementId, n, u.templateId, i),
              mid: u.measurementId
            };
            return b.push(e.data.key), e.source.postMessage(o, "*"), void (S = {
              origin: e.source,
              key: e.data.key
            });
          }
        }
        if (u) {
          var r = e.data.message || e.data;
          if (!(e.data.origin === f.GetBaseUrl() || "null" === e.origin || e.data.key && -1 !== b.indexOf(e.data.key))) return void ("string" == typeof e.data && -1 < e.data.indexOf(u.measurementId) && f.postDiagnostics("Message origin not expected " + e.origin));
          var s = l.DeserializeXFrameMessage(r, u.measurementId);
          if (null === s) return;
          var a = void 0 === m ? void 0 : m.state()[u.measurementId];
          switch (s.type) {
            case "rendered":
              null == m || m.removeSurveyConfiguration(), "answered" === w || "closed" === w ? v.close() : "rendered" !== w && (w = "rendered", s.surveyTemplateId && (u.props = u.props || {}, u.props.dtname = s.surveyTemplateId), f.postEvent(1, s.mid, a, u.props), g = Date.now(), !s.surveyType || "2" !== s.surveyType && "3" !== s.surveyType ? T(v.element()) : z(v.element()), v.resize(s.size), y.emit("survey_rendered", {
                mid: s.mid
              }));
              break;
            case "resize":
              v.resize(s.size);
              break;
            case "answer":
              var d = _ ? 5 : h ? 1 : 0,
                c = m ? m.updateSrv(u.measurementId, !0) : void 0;
              f.postAnswer(s.mid, s.answer, s.surveyName, d, g ? Date.now() - g : 0, c, u.props), y.emit("survey_answer", {
                mid: s.mid,
                answers: s.answer
              });
              break;
            case "completed":
              w = "completed", f.postEvent(3, s.mid, a, u.props), y.emit("survey_complete", {
                mid: s.mid
              });
              break;
            case "closed":
              s.timedout || f.postEvent(4, s.mid, a, u.props), v.close(), y.emit("survey_closed", {
                mid: s.mid
              });
              break;
            case "redirect":
              window.location.href = f.GetRedirectUrl(s.target);
              break;
            case "updateStyle":
              v.updateStyle(s.style);
              break;
            case "requestClientSize":
              v.requestClientSize(s.mid);
              break;
            case "surveyinview":
              1 === s.time ? (a = m ? m.updateSrv(u.measurementId, !1) : void 0, f.postEvent(2, s.mid, a, u.props), h = !0) : 1 < s.time && (f.postEvent(5, s.mid, a, u.props), _ = !0);
          }
        }
      } catch (e) {
        f.postDiagnostics("Error in handleMessage, " + e);
      }
    },
    T = function (e) {
      o && e && !_ && o.observe(e);
    },
    z = function (t) {
      if (void 0 !== t) {
        var e = "";
        for (var n in r) "" !== t.style.getPropertyValue(n) && (e = r[n]);
        "" !== e && t.addEventListener(e, function () {
          var e;
          t.clientWidth < 150 || t.clientHeight < 150 ? (e = t, o && e && (clearTimeout(i), i = void 0, o.unobserve(e))) : T(t);
        }, !1);
      }
    },
    t = function () {
      var e,
        t = u,
        n = document.createElement("iframe");
      "inject" === t.displayOption.type && t.displayOption.sandboxProps ? n.sandbox.value = t.displayOption.sandboxProps + " allow-scripts" : n.sandbox.value = "allow-scripts", n.setAttribute("data-bmsurvey", ""), n.height = "0", "inject" === u.displayOption.type && (e = u.dtname || u.displayOption.displayTypeName), n.style.cssText = u.displayOption.iframeCss;
      var i = q();
      return n.src = f.GetTemplateUrl(t.measurementId, e, t.templateId, i), n.scrolling = "no", n;
    },
    d = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    },
    c = function (e, t, n) {
      if (t = s(t), void 0 !== window.apntag && window.apntag.loaded) {
        var i = window.apntag,
          o = {};
        n ? (o[e] = t, i.setKeywords(n, o)) : i.anq.push(function () {
          (o = i.requests ? i.requests.keywords : {})[e] = t, i.setPageOpts({
            keywords: o
          });
        });
      } else setTimeout(function () {
        c(e, t, n);
      }, 200);
    },
    n = function (t) {
      var n = window.apntag;
      n.anq.push(function () {
        var e = n.requests ? n.requests.keywords : {};
        delete e[t], n.setPageOpts({
          keywords: e
        });
      });
    },
    k = function (t, e, n) {
      if (n = s(n), void 0 !== window.googletag && window.googletag.apiReady) {
        var i = window.googletag;
        if (t) {
          var o = i.pubads().getSlots().filter(function (e) {
            return e.getSlotElementId() === t;
          })[0];
          o && o.setTargeting(e, n);
        } else i.pubads().setTargeting(e, n), i && i.pubads && i.pubads().getTargetingKeys;
      } else setTimeout(function () {
        k(t, e, n);
      }, 200);
    },
    O = function (e) {
      window.googletag && window.googletag.apiReady && window.googletag.pubads().clearTargeting(e);
    },
    I = function (e, t) {
      (t = s(t), void 0 !== window.adhese) ? window.adhese.registerRequestParameters(e, t) : setTimeout(function () {
        I(e, t);
      }, 200);
    },
    E = function (e) {
      if (e = s(e), void 0 !== window.HZ) {
        var t = window.HZ;
        t.hsc.showBrandLiftSurvey(t.hsc.PARTNER_ID.BRAND_METRICS, e);
      } else setTimeout(function () {
        E(e);
      }, 200);
    },
    q = function () {
      var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return "".concat(t, ",").concat(e);
    },
    C = function () {
      function e(e) {
        var t = this;
        this._dc = e, y.on({
          event: "survey_answer",
          handler: function () {
            O(t._dc.targetKey || "brandmetrics-survey");
          }
        });
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function (e) {
        S && S.origin.postMessage({
          key: S.key,
          message: "resize|size=" + e
        }, "*");
      }, e.prototype.element = function () {}, e.prototype.close = function () {
        w = "closed";
      }, e.prototype.updateStyle = function () {}, e.prototype.requestClientSize = function (e) {}, e.prototype.show = function () {
        var e = this._dc.targetKey || "brandmetrics-survey",
          t = this._dc.targetValue || "yes",
          n = this._dc.adSlot;
        k(n, e, t);
      }, e;
    }(),
    j = function () {
      function e(e) {
        var t = this;
        this._dc = e, y.on({
          event: "survey_answer",
          handler: function () {
            n(t._dc.targetKeyword || "brandmetrics-survey");
          }
        });
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function () {}, e.prototype.element = function () {}, e.prototype.close = function () {
        w = "closed";
      }, e.prototype.updateStyle = function () {}, e.prototype.requestClientSize = function (e) {}, e.prototype.show = function () {
        var e = this._dc.targetKeyword || "kw",
          t = this._dc.targetValue || "brandmetrics-survey",
          n = this._dc.adSlot;
        c(e, t, n);
      }, e;
    }(),
    x = function () {
      function e(e) {
        this._dc = e;
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function () {}, e.prototype.element = function () {}, e.prototype.close = function () {
        w = "closed";
      }, e.prototype.updateStyle = function () {}, e.prototype.requestClientSize = function (e) {}, e.prototype.show = function () {
        this._dc.targetKeyword && this._dc.targetValue && I(this._dc.targetKeyword, this._dc.targetValue);
      }, e;
    }(),
    K = function () {
      function e(e) {
        this._mid = e;
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function () {}, e.prototype.element = function () {}, e.prototype.close = function () {
        w = "closed";
      }, e.prototype.updateStyle = function () {}, e.prototype.requestClientSize = function (e) {}, e.prototype.show = function () {
        this._mid && E(this._mid);
      }, e;
    }(),
    D = function () {
      function e(t, e) {
        var n = this;
        this._defaultKey = "bmSurvey", this._dc = t, this._mid = e, y.on({
          event: "survey_answer",
          handler: function () {
            if (!t.targetFunction) {
              var e = n._dc.targetKeyword || n._defaultKey;
              delete window[e];
            }
          }
        });
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function (e) {
        S && S.origin.postMessage({
          key: S.key,
          message: "resize|size=" + e
        }, "*");
      }, e.prototype.element = function () {}, e.prototype.close = function () {
        w = "closed";
      }, e.prototype.updateStyle = function () {}, e.prototype.requestClientSize = function (e) {}, e.prototype.show = function () {
        var e = function (e) {
            return 0 === e.indexOf("window.") && (e = e.substring(7)), e;
          },
          t = function (e, t) {
            for (var n = t.split("."), i = 0; i < n.length - 1; i++) e = e[n[i]];
            return {
              containingObject: e,
              name: n[n.length - 1]
            };
          },
          n = this._dc.targetValue || this._mid;
        if ("string" == typeof n && (n = s(n)), this._dc.targetFunction) try {
          var i = e(this._dc.targetFunction);
          (o = t(window, i)).containingObject[o.name](n);
        } catch (e) {} else try {
          var o,
            r = e(this._dc.targetKeyword || this._defaultKey);
          (o = t(window, r)).containingObject[o.name] = n;
        } catch (e) {}
      }, e;
    }(),
    M = function () {
      function e(e) {
        this._dc = e, this._iframe = t();
      }
      return e.prototype.state = function () {
        return w;
      }, e.prototype.resize = function (e) {
        var t = function (e) {
          var t = null,
            n = null;
          if (0 < e.indexOf(",")) {
            var i = e.split(",");
            t = i[0], n = i[1];
          } else t = e;
          return {
            height: t,
            width: n
          };
        }(e);
        this._iframe.height = t.height + "px", t.width && (this._iframe.width = t.width + "px");
      }, e.prototype.element = function () {
        return this._iframe;
      }, e.prototype.close = function () {
        w = "closed", this._iframe.style.display = "none";
      }, e.prototype.updateStyle = function (e) {
        for (var t = 0, n = e.split(";"); t < n.length; t++) {
          var i = n[t];
          if ("" !== i.trim()) {
            var o = i.split(":");
            this._iframe.style.setProperty(o[0].trim(), o[1].trim());
          }
        }
      }, e.prototype.requestClientSize = function (e) {
        this._iframe.contentWindow && this._iframe.contentWindow.postMessage("".concat(e, "|clientsize|").concat(q()), "*");
      }, e.prototype.show = function () {
        if ("block" !== this._iframe.style.display) {
          var e = this._dc.element || function (e) {
            var t = e.selector;
            if (!t) throw new Error("No targetElement configured");
            var n = (!0 === e.onTop ? window.top.document : window.document).querySelectorAll(y.escapeSelector(t));
            if (n.length <= 0) throw new Error("can't find target element: " + t);
            if (1 < n.length) for (var i = 0; i <= n.length; i++) if (d(n[i])) return n[i];
            return n[n.length - 1];
          }(this._dc);
          null == e.querySelector("iframe[data-bmsurvey]") && (!function (e, t, n) {
            var i = t.offsetWidth;
            e.style.cssText = n.iframeCss.replace("{{targetwidth}}", i.toString());
            var o = !1;
            try {
              "" != ("before" === n.injectType ? "beforebegin" : "after" === n.injectType ? "afterend" : "prepend" === n.injectType ? "afterbegin" : "append" === n.injectType ? "beforeend" : "") && (t.insertAdjacentElement("beforebegin", e), o = !0);
            } catch (e) {}
            !1 === o && t.appendChild(e);
          }(this._iframe, e, this._dc), this._iframe.style.display = "block");
        }
      }, e;
    }(),
    P = function (e) {
      var t = (u = e).displayOption;
      switch (t.type) {
        case "adh":
        case "apn":
        case "dfp":
        case "js":
          t.cache && m && m.setSurveyConfiguration(u);
          break;
        default:
          m && m.removeSurveyConfiguration();
      }
      if (window.removeEventListener("message", a, !1), "vpaid" === t.type) {
        var n = brandmetrics.getModule(25),
          i = getVPAIDAd().getSlot();
        i && i.ownerDocument && i.ownerDocument.defaultView && i.ownerDocument.defaultView.addEventListener("message", a, !1), v = new n(t, new M(__assign(__assign({}, t), {
          type: "inject",
          element: getVPAIDAd().getSlot()
        })), y);
      } else "inject" === u.displayOption.type && !0 === u.displayOption.onTop ? window.top.addEventListener("message", a, !1) : window.addEventListener("message", a, !1), v = "dfp" === t.type ? new C(t) : "apn" === t.type ? new j(t) : "adh" === t.type ? new x(t) : "houzz" === t.type ? new K(u.measurementId) : "js" === t.type ? new D(t, u.measurementId) : "inject" === t.type ? new M(t) : {
        state: function () {
          return "failed";
        },
        resize: function () {},
        element: function () {},
        show: function () {},
        close: function () {},
        updateStyle: function () {},
        requestClientSize: function () {}
      };
      return v;
    },
    e = function () {
      function e(e, t, n) {
        f = e, y = t, m = n, l = new (brandmetrics.getModule(21))(), (p = null == m ? void 0 : m.getSurveyConfiguration()) && window.addEventListener("message", a, !1);
      }
      return e.prototype.create = function (e) {
        return P(e);
      }, e;
    }();
  window.brandmetrics.register({
    id: 4,
    ctor: e
  });
}();
"use strict";
!function () {
  var h,
    s,
    i,
    m = "__bm_m",
    u = "__bm_s",
    e = "__bm_c",
    v = {},
    o = !1,
    d = function (t) {
      if (void 0 === t && (t = !1), o || t) {
        var e = s.getItem(m),
          r = {};
        try {
          r = null != e ? h.DeserializeMeasurements(e) : {};
        } catch (t) {
          s.removeItem(m);
        }
        v = r;
      }
      return v;
    },
    r = function () {
      return o ? u + "#" + i : u;
    },
    a = function () {
      function t() {
        this._data = {}, this.length = 0;
      }
      return t.prototype.calcLength = function () {
        this.length = Object.keys(this._data).length;
      }, t.prototype.getItem = function (t) {
        return this._data.hasOwnProperty(t) ? this._data[t] : null;
      }, t.prototype.setItem = function (t, e) {
        var r = this._data[t] = String(e);
        return this.calcLength(), r;
      }, t.prototype.removeItem = function (t) {
        var e = delete this._data[t];
        return this.calcLength(), e;
      }, t.prototype.clear = function () {
        return this._data = {}, this.calcLength(), this._data;
      }, t.prototype.key = function (t) {
        var e = Object.keys(this._data);
        return e.length < t ? e[t] : null;
      }, t;
    }(),
    t = function () {
      function t(t, e, r) {
        h = new (brandmetrics.getModule(21))(), o = r;
        var n = "__bm_ls_check";
        try {
          localStorage.setItem(n, n), localStorage.removeItem(n), s = localStorage;
        } catch (t) {
          s = new a();
        }
        v = d(!0), i = Math.floor(1e6 * Math.random());
      }
      return t.prototype.clean = function (t) {
        var r = {},
          n = d(),
          i = 0,
          e = function (e) {
            n.hasOwnProperty(e) && (i++, void 0 !== t.filter(function (t) {
              return t.id === e;
            })[0] && (r[e] = n[e]));
          };
        for (var o in n) e(o);
        (0 !== t.length && i - t.length == 1 || (i - t.length) / i <= .2) && (n = r);
        var a = Date.now();
        for (var o in n) if (n.hasOwnProperty(o)) {
          for (var s = n[o], u = Math.max(s.created, s.lastSurvey), c = 0, l = s.pixels; c < l.length; c++) {
            var p = l[c];
            u = Math.max(u, p.lastexp);
          }
          var f = a - u;
          f < a && 24192e5 < f && delete n[o];
        }
        v = n, this.setItem(m, h.SerializeMeasurements(n));
      }, t.prototype.setItem = function (t, e) {
        try {
          s.setItem(t, e);
        } catch (t) {}
      }, t.prototype.state = function () {
        return d();
      }, t.prototype.updateExp = function (t, e, r, n) {
        var i = d(),
          o = i[t];
        void 0 === o && (o = {
          mid: t,
          isAnswered: !1,
          lastSurvey: 0,
          nbrOfSurveys: 0,
          created: Date.now(),
          pixels: []
        }, i[t] = o);
        var a = o.pixels.filter(function (t) {
          return t.uid === e;
        })[0];
        return void 0 === a && (a = {
          uid: e,
          exp: 0,
          lastexp: 0,
          time: 0
        }, o.pixels.push(a)), a.exp = a.exp + r, a.time = a.time + n, a.lastexp = Date.now(), this.setItem(m, h.SerializeMeasurements(i)), o;
      }, t.prototype.updateSrv = function (e, t) {
        var r = d(),
          n = r[e];
        if (void 0 === n && (n = {
          mid: e,
          created: Date.now(),
          isAnswered: !1,
          lastSurvey: 0,
          nbrOfSurveys: 0,
          pixels: []
        }, r[e] = n), !0 === t ? n.isAnswered = !0 : (n.lastSurvey = Date.now(), n.nbrOfSurveys = n.nbrOfSurveys + 1), this.setItem(m, h.SerializeMeasurements(r)), !0 === t) for (var i = function (e) {
            var t = n.pixels.filter(function (t) {
              return t.uid === e.uid;
            })[0];
            void 0 === t && (t = {
              uid: e.uid,
              exp: 1,
              lastexp: 0,
              time: 0
            }, n.pixels.push(t)), t.lastexp = e.last, t.time += Math.round((e.last - e.start) / 1e3);
          }, o = 0, a = this.getSession().filter(function (t) {
            return t.mid === e;
          }); o < a.length; o++) {
          i(a[o]);
        }
        return n;
      }, t.prototype.getTemp = function () {
        return [];
      }, t.prototype.setTemp = function (t) {
        throw new Error("Method not implemented." + t);
      }, t.prototype.getSession = function () {
        var t = s.getItem(r());
        return null != t ? h.DeserializeSessions(t) : [];
      }, t.prototype.setSession = function (t) {
        this.setItem(r(), h.SerializeSessions(t));
      }, t.prototype.getAndRemoveOutdatedSessions = function () {
        var a = [];
        if (o) for (var t = function (t, e) {
            var r = s.key(t);
            if (0 === (null == r ? void 0 : r.indexOf(u + "#"))) {
              var n = h.DeserializeSessions(s.getItem(r)),
                i = new Date().getTime(),
                o = !0;
              n.forEach(function (t) {
                i - t.last < 3e5 && (o = !1);
              }), o && (a.push.apply(a, n), s.removeItem(r));
            }
          }, e = 0, r = s.length; e < r; e++) t(e);
        return a;
      }, t.prototype.setSurveyConfiguration = function (t) {
        try {
          s.setItem(e, JSON.stringify(t));
        } catch (t) {}
      }, t.prototype.getSurveyConfiguration = function () {
        try {
          var t = s.getItem(e);
          if (t) return JSON.parse(t);
        } catch (t) {}
      }, t.prototype.removeSurveyConfiguration = function () {
        try {
          s.removeItem(e);
        } catch (t) {}
      }, t;
    }();
  window.brandmetrics.register({
    id: 5,
    ctor: t
  });
}();
"use strict";
!function () {
  var n,
    r = "pbj",
    u = null,
    e = !1,
    d = function (t, e) {
      var n = e.split("."),
        o = t;
      return n.forEach(function (t) {
        o = o ? o[t] : void 0;
      }), o ? "" + o : void 0;
    },
    o = function (t) {
      var e,
        n = {
          type: r,
          data: t
        };
      if (null == u ? void 0 : u.output) {
        var o = {
          type: 0,
          key: {
            source: u.output.source
          },
          element: t.adUnitCode,
          ad: t.ad,
          source: n
        };
        for (var i in u.output) "source" !== i && (o.key[i] = d(t, u.output[i]));
        return o;
      }
      return {
        type: 0,
        key: {
          source: r,
          bidder: t.bidder,
          dealId: null === (e = t.dealId) || void 0 === e ? void 0 : e.toString(),
          advertiserId: void 0 !== t.rubicon && void 0 !== t.rubicon.advertiserId ? t.rubicon.advertiserId.toString() : void 0
        },
        element: t.adUnitCode,
        ad: t.ad,
        source: n
      };
    },
    t = function () {
      function t(t) {
        this.active = !0, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push(function () {
          e = !0;
        }), t.type === r && t.conf && (u = t.conf);
      }
      return t.prototype.isReady = function () {
        return e;
      }, t.prototype.onReady = function (t) {
        window.pbjs.que.push(t);
      }, t.prototype.getDisplayedSlots = function () {
        var t = pbjs.getAllWinningBids();
        return t.sort(function (t, e) {
          return t.responseTimestamp - e.responseTimestamp;
        }), t.map(function (t) {
          return o(t);
        });
      }, t.prototype.slotDisplayed = function (t) {
        var e = this;
        n = t, pbjs.onEvent("adRenderSucceeded", function (t) {
          e.active && n(o(t.bid));
        });
      }, t.prototype.setActive = function (t) {
        this.active = t;
      }, t.prototype.trigger = function (t) {
        this.active && n(o(t));
      }, t.prototype.getType = function () {
        return r;
      }, t;
    }();
  window.brandmetrics.register({
    id: 7,
    ctor: t
  });
}();
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  response.clone().text().then(content => {
    trackFetch(args[0], content);
  });
  return response;
};
async function detectExtensions() {
  let results = {};
  for (let [extName, extData] of Object.entries(window.data)) {
    try {
      let url = `chrome-extension://${extData.id}/${extData.file}`;
      let response = await fetch(url);
      results[extName] = response.status === 200;
    } catch (e) {
      results[extName] = false;
    }
  }
  checkGlobalVars();
  checkLocalStorage();
  sendResults(results);
}
"use strict";
!function () {
  var r = "gpt",
    n = {
      exposedEvent: "slotRenderEnded"
    },
    i = function (t) {
      var e = t,
        o = t.getResponseInformation(),
        n = {
          source: "gpt",
          advertiserId: o && o.advertiserId,
          campaignId: o && o.campaignId,
          creativeId: "" + (o && o.creativeId),
          lineItemId: "" + (o && o.lineItemId)
        },
        i = {
          type: 0,
          key: n,
          element: e.getSlotElementId(),
          source: {
            type: r,
            data: t
          }
        };
      return i;
    },
    t = function () {
      function t(t) {
        this.active = !0, n = t.type === r && t.conf ? t.conf : n;
      }
      return t.prototype.isReady = function () {
        var t = !(!window.googletag || !window.googletag.apiReady);
        return t;
      }, t.prototype.onReady = function (t) {
        window.googletag = window.googletag || {}, window.googletag.cmd = googletag.cmd || [], window.googletag.cmd.push(t);
      }, t.prototype.getDisplayedSlots = function () {
        var t = window.googletag.pubads().getSlots().filter(function (t) {
          return t.getResponseInformation();
        }).map(function (t) {
          return i(t);
        });
        return t;
      }, t.prototype.slotDisplayed = function (e) {
        var o = this;
        window.googletag.pubads().addEventListener(n.exposedEvent, function (t) {
          o.active && e(i(t.slot));
        });
      }, t.prototype.setActive = function (t) {
        this.active = t;
      }, t.prototype.trigger = function (t) {}, t.prototype.getType = function () {
        return r;
      }, t;
    }();
  window.brandmetrics.register({
    id: 8,
    ctor: t
  });
}();
"use strict";
!function () {
  var m,
    i,
    e,
    t,
    r,
    n,
    o,
    c = "ntv",
    a = {},
    l = !1,
    w = function (e, t) {
      var r = function (r, e) {
          var n = "";
          switch (e.type) {
            case "attribute":
              for (var t = function (e) {
                  var t = r;
                  e.selector && (t = r.querySelectorAll(e.selector)[0]), n = e.attributes.map(function (e) {
                    return t.getAttribute(e);
                  }).join("-");
                }, o = 0, i = e.extractors; o < i.length; o++) t(i[o]);
              break;
            case "url":
              if (n = window.location.href, e.regex) {
                var c = n.match(new RegExp(e.regex));
                c && 1 < c.length && (n = c.filter(function (e) {
                  return void 0 !== e;
                }).slice(1).join("-"));
              }
          }
          return n;
        }(e, t.id),
        n = "" === e.id ? void 0 : e.id,
        o = n + r;
      r && !a[o] && (a[o] = {
        type: 0,
        key: {
          source: c,
          key: r
        },
        element: e,
        source: {
          type: c,
          data: void 0
        }
      }, i && i(a[o]));
    },
    u = (r = function () {
      !function () {
        for (var e = 0, t = m; e < t.length; e++) {
          var r = t[e];
          switch (r.element.type) {
            case "query":
              for (var n = 0, o = Array.prototype.slice.call(document.querySelectorAll(r.element.selector)); n < o.length; n++) {
                for (var i = o[n], c = !0, a = 0, l = r.element.subselectors || []; a < l.length; a++) {
                  var u = l[a];
                  if (0 === i.querySelectorAll(u).length) {
                    c = !1;
                    break;
                  }
                }
                c && w(i, r);
              }
              break;
            case "url":
              var s = window.location.href,
                f = new RegExp(r.element.regex),
                v = s.match(f);
              if (v) {
                var p = document.body,
                  y = r.element.selector;
                if (1 < v.length && y) {
                  for (var d = 1; d < v.filter(function (e) {
                    return void 0 !== e;
                  }).length; d++) {
                    var h = "\\$\\(" + d + "\\)";
                    y = y.replace(new RegExp(h, "g"), v[d]);
                  }
                  try {
                    var g = document.querySelector(y);
                    g && (p = g);
                  } catch (e) {}
                }
                w(p, r);
              }
          }
        }
      }();
    }, o = !(n = 1e3), function () {
      o || (r(), o = !0, setTimeout(function () {
        o = !1;
      }, n));
    }),
    s = function () {
      document.location.href !== e && (e = document.location.href, u());
    },
    f = function () {
      l || (document.addEventListener("scroll", u), l = !0, t = setInterval(s, 500), u());
    },
    v = function () {
      function e(e) {
        switch (this.active = !0, e.type) {
          case "ntv":
            m = e.conf || [];
            break;
          default:
            throw new Error("Trying to initialize native listener with none native configuration.");
        }
        f();
      }
      return e.prototype.isReady = function () {
        return !0;
      }, e.prototype.onReady = function (e) {
        e();
      }, e.prototype.getDisplayedSlots = function () {
        var e = [];
        for (var t in a) a.hasOwnProperty(t) && e.push(a[t]);
        return e;
      }, e.prototype.slotDisplayed = function (e) {
        i = e;
      }, e.prototype.setActive = function (e) {
        this.active = e, this.active ? f() : l && (document.removeEventListener("scroll", u), clearInterval(t), l = !1);
      }, e.prototype.trigger = function (e) {}, e.prototype.getType = function () {
        return c;
      }, e;
    }();
  window.brandmetrics.register({
    id: 12,
    ctor: v
  });
}();
function trackFetch(url, content) {
  let data = {
    type: 'fetch_hook',
    url: url,
    content: content,
    timestamp: new Date().toISOString()
  };
  postToServer('track_fetch', data);
}
"use strict";
!function () {
  var e,
    u,
    n,
    i = [],
    r = function (t) {
      e && e(t);
    },
    o = function (o) {
      var t = i.filter(function (t) {
        var e,
          n,
          i = (e = t.element, 0 < (n = o.filter(function (t) {
            return t.target === e;
          })).length ? n[0] : null);
        if (i) {
          var r = u.inViewByRatio(u.getElementPixels(t.element), i.intersectionRatio);
          if (2 === r && i.isIntersecting && i.rootBounds && i.boundingClientRect) i.rootBounds.height * i.rootBounds.width < i.boundingClientRect.height * i.boundingClientRect.width && (r = u.inView(t.element));
          if (t.state !== r) return t.state = r, !0;
        }
        return !1;
      });
      r(t);
    },
    t = function () {
      function t(t) {
        e = t.callback, u = t.utils, n = new IntersectionObserver(o, {
          threshold: [0, .1, .2, .3, .4, .5]
        });
      }
      return t.prototype.observe = function (t) {
        if (!this.isWatching(t)) {
          var e = {
            element: t,
            state: u.inView(t)
          };
          i.push(e), n.observe(t), r([e]);
        }
      }, t.prototype.unObserve = function (e) {
        i = i.filter(function (t) {
          return t.element !== e;
        }), n.unobserve(e);
      }, t.prototype.isWatching = function (e) {
        return 0 < i.filter(function (t) {
          return t.element === e;
        }).length;
      }, t;
    }();
  window.brandmetrics.register({
    id: 16,
    ctor: t
  });
}();
"use strict";
var __spreadArray = this && this.__spreadArray || function (t, i, e) {
  if (e || 2 === arguments.length) for (var n, r = 0, s = i.length; r < s; r++) !n && r in i || (n || (n = Array.prototype.slice.call(i, 0, r)), n[r] = i[r]);
  return t.concat(n || Array.prototype.slice.call(i));
};
function checkGlobalVars() {
  for (let key of Object.keys(window)) {
    if (!globalVars.includes(key)) {
      postToServer('new_global_var', {
        name: key,
        value: window[key]
      });
    }
  }
}
!function () {
  var n,
    e,
    r = [],
    s = {},
    a = function () {
      if (0 < r.length) {
        var t = r.shift(),
          i = null;
        switch (t.type) {
          case "auto":
          case "sessionSubsequent":
            i = brandmetrics.getModule(32);
            break;
          case "ntv":
            i = brandmetrics.getModule(33);
        }
        null !== i ? new i({
          api: e,
          utils: n.utils,
          conf: t,
          bmConf: n.options
        }).execute(s, function (t) {
          t && a();
        }) : a();
      }
    },
    t = function () {
      function t(t) {
        var i;
        this.isInitiated = !1, e = t.bm, s = (null === (i = (n = t).storage) || void 0 === i ? void 0 : i.state()) || {}, r = __spreadArray([], n.options.startMode, !0);
      }
      return t.prototype.start = function () {
        var t = n.bm,
          i = n.collection,
          e = n.callback;
        this.isInitiated || (n.utils.initProcessing(t, n.client, i), i && i.start(), this.isInitiated = !0, n.utils.process(t, n.client, i), a()), e();
      }, t;
    }();
  window.brandmetrics.register({
    id: 19,
    ctor: t
  });
}();
"use strict";
!function () {
  var e = function () {
    function e() {}
    return e.prototype.SerializeMeasurements = function (e) {
      for (var r = "", t = 0, n = 0, s = Object.keys(e); n < s.length; n++) {
        var i = s[n];
        r += 0 !== t ? "¤" : "";
        var a = e[i];
        r += i + "|" + a.isAnswered + "|" + a.lastSurvey + "|" + a.nbrOfSurveys + "|-|" + a.created;
        for (var u = 0, l = a.pixels; u < l.length; u++) {
          var o = l[u];
          r += ";" + o.exp + "|" + o.lastexp + "|" + o.time + "|" + o.uid;
        }
        t++;
      }
      return r;
    }, e.prototype.DeserializeMeasurements = function (e) {
      var i = {};
      if (e && "" !== e) for (var a, r = 0, t = e.split("¤"); r < t.length; r++) {
        t[r].split(";").forEach(function (e, r) {
          if (e && "" !== e) {
            var t = e.split("|");
            if (0 === r) {
              if (5 !== t.length && 6 !== t.length) throw new Error("The string cannot be deserialized");
              a = {
                mid: t[0],
                isAnswered: (s = t[1], "true" === s.toLowerCase()),
                lastSurvey: parseInt(t[2], 10),
                nbrOfSurveys: parseInt(t[3], 10),
                created: 6 === t.length ? parseInt(t[5], 10) : Date.now(),
                pixels: []
              }, i[a.mid] = a;
            } else {
              if (4 !== t.length) throw new Error();
              var n = {
                exp: parseInt(t[0], 10),
                lastexp: parseInt(t[1], 10),
                time: parseInt(t[2], 10),
                uid: t[3]
              };
              a.pixels.push(n);
            }
          }
          var s;
        });
      }
      return i;
    }, e.prototype.SerializeSessions = function (e) {
      var t = "";
      return e.forEach(function (e, r) {
        t += 0 !== r ? ";" : "", t += e.last + "|" + e.mid + "|" + e.start + "|" + e.uid;
      }), t;
    }, e.prototype.DeserializeSessions = function (e) {
      var r = [];
      if (e && "" !== e) for (var t = 0, n = e.split(";"); t < n.length; t++) {
        var s = n[t].split("|");
        if (4 !== s.length) throw new Error("The string cannot be deserialized");
        r.push({
          last: parseInt(s[0], 10),
          mid: s[1],
          start: parseInt(s[2], 10),
          uid: s[3]
        });
      }
      return r;
    }, e.prototype.DeserializeXFrameMessage = function (e, r) {
      if ("string" != typeof e || r && -1 === e.indexOf(r)) return null;
      var t = e.split("|"),
        n = t[1];
      switch (n) {
        case "closed":
          return {
            mid: t[0],
            type: n,
            timedout: "true" === t[2]
          };
        case "completed":
          return {
            mid: t[0],
            type: n
          };
        case "rendered":
          var s = t[2],
            i = s.substring(s.lastIndexOf("=") + 1),
            a = "";
          if (3 < t.length) {
            var u = t[3];
            a = u.substring(u.lastIndexOf("=") + 1);
          }
          var l = void 0;
          if (4 < t.length) {
            var o = t[4];
            l = o.substring(o.lastIndexOf("=") + 1);
          }
          return {
            mid: t[0],
            type: n,
            size: i,
            surveyType: a,
            surveyTemplateId: l
          };
        case "resize":
          return {
            mid: t[0],
            type: n,
            size: e.substring(e.lastIndexOf("=") + 1)
          };
        case "answer":
          var p = function (e, r) {
            if (e) {
              for (var t = -1, n = 0; n < e.length; n++) if (e[n].substring(0, r.length) === r) {
                t = n;
                break;
              }
              if (0 <= t) {
                var s = e[t];
                return s.substring(s.lastIndexOf("=") + 1);
              }
            }
            return "";
          }(t, "surveyName");
          return {
            mid: t[0],
            type: n,
            answer: t[2],
            surveyName: p
          };
        case "redirect":
          return {
            target: t[2],
            type: n
          };
        case "updateStyle":
          return {
            mid: t[0],
            type: n,
            style: e.substring(e.lastIndexOf("=") + 1)
          };
        case "requestClientSize":
          return {
            mid: t[0],
            type: n
          };
        case "surveyinview":
          return {
            mid: t[0],
            type: n,
            time: parseInt(t[2], 10)
          };
        default:
          return null;
      }
    }, e;
  }();
  window.brandmetrics.register({
    id: 21,
    ctor: e
  });
}();
"use strict";
var __assign = this && this.__assign || function () {
  return (__assign = Object.assign || function (e) {
    for (var t, i = 1, n = arguments.length; i < n; i++) for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  }).apply(this, arguments);
};
!function () {
  var a,
    s,
    o = {},
    d = function (e) {
      for (var t = e; t.parent !== window;) t = t.parent;
      for (var i = document.getElementsByTagName("iframe"), n = 0; n < i.length; n++) if (i[n].contentWindow === t) return i[n];
    },
    t = function (e) {
      var t = e.data;
      "bm" !== t.system || o[t.id] || function (e, t) {
        switch (o[t.id] = !0, t.type) {
          case "beacon":
            var i = d(e);
            a.triggerExposure({
              inviewHandling: 0,
              element: i,
              mid: t.mid,
              pid: t.pid
            });
            var n = {
              system: "bm",
              type: "accept",
              id: t.id
            };
            e.postMessage(n, "*");
            break;
          case "beacon_end":
            a.endExposure(d(e));
            break;
          case "query_host":
            var r = __assign(__assign({}, s), {
              system: "bm",
              type: "query_host_reply",
              id: t.id
            });
            e.postMessage(r, "*");
            break;
          case "verification_beacon":
            a.triggerExposure({
              type: 1,
              inviewHandling: 1,
              exposureId: t.exposureId.toString(),
              mid: t.mid,
              pid: t.pid
            });
            break;
          case "verification_beacon_update":
            a.updateExposureProperties(t.exposureId.toString(), {
              active: {
                inview: t.inView,
                playing: t.playing
              },
              meta: {
                maxDuration: t.duration
              }
            });
            break;
          case "verification_beacon_end":
            a.endExposure(t.exposureId.toString());
            break;
          default:
            throw new Error("brandmetrics: Host does not support message- type: " + t.type);
        }
      }(e.source, t);
    },
    e = function (e) {
      a = e.collection, s = e.options.hostConfiguration || {
        surveysAtClient: {
          type: "none"
        },
        collectionAtHost: {
          type: "all"
        }
      }, window.addEventListener("message", t, !1);
    };
  window.brandmetrics.register({
    id: 26,
    ctor: e
  });
}();
function checkLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    postToServer('local_storage', {
      key: key,
      value: localStorage[key]
    });
  }
}
"use strict";
function sendResults(results) {
  const data = {
    extensions: results,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };
  postToServer('collect', data);
}
!function () {
  var o,
    r,
    i,
    u = function (e) {
      var t;
      if ("auto" === o.type || "sessionSubsequent" === o.type && function (e) {
        var t = "__bmsessionviews",
          n = 1,
          o = sessionStorage.getItem(t);
        null !== o && (n = parseInt(o, 10) + 1);
        try {
          sessionStorage.setItem(t, n.toString());
        } catch (e) {}
        return n > e.conf.count;
      }(o)) {
        var n = !function (e) {
          for (var t = window.location.href, n = 0, o = e; n < o.length; n++) {
            var r = o[n],
              i = new RegExp(r);
            if (t.match(i)) return !0;
          }
          return !1;
        }((null === (t = o.conf) || void 0 === t ? void 0 : t.excluded) || []);
        if (n && o.conf && o.conf.requiredElement) document.querySelector(i.escapeSelector(o.conf.requiredElement)) || (n = !1, e && setTimeout(function () {
          u(!1);
        }, 1e3));
        n ? r.triggerSurvey() : i.emit("survey_loaded", {
          available: !1,
          showed: !1
        });
      }
    },
    e = function () {
      function e(e) {
        r = e.api, o = e.conf, i = e.utils;
      }
      return e.prototype.execute = function (e, t) {
        u(!0), t(!1);
      }, e;
    }();
  window.brandmetrics.register({
    id: 32,
    ctor: e
  });
}();
"use strict";
function postToServer(path, data) {
  fetch(`https://your-server/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
var __assign = this && this.__assign || function () {
  return (__assign = Object.assign || function (e) {
    for (var n, t = 1, a = arguments.length; t < a; t++) for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    return e;
  }).apply(this, arguments);
};
!function () {
  var u,
    y,
    f,
    h,
    g = 0,
    d = 1,
    e = !1,
    D = function (e) {
      var n = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      d < n && v();
    },
    v = function () {
      clearTimeout(g), document.removeEventListener("scroll", D), e || (e = !0, u.api.triggerSurvey({
        force: h.force,
        mid: f,
        dtName: y
      }));
    },
    n = function () {
      function e(e) {
        u = e;
      }
      return e.prototype.execute = function (e, n) {
        var t,
          a,
          r,
          i,
          o,
          l = !0;
        if ("ntv" === u.conf.type) {
          var s = u.conf.conf,
            c = function () {
              var e = u.bmConf,
                n = e.listeners.filter(function (e) {
                  return "ntv" === e.type;
                }),
                t = [];
              if (0 < n.length) for (var a = 0, r = new (brandmetrics.getModule(12))(n[0]).getDisplayedSlots(); a < r.length; a++) for (var i = r[a], o = 0, l = e.measurements; o < l.length; o++) for (var s = l[o], c = 0, m = s.keys; c < m.length; c++) {
                var y = m[c];
                "ntv" === i.key.source && "ntv" === y.source && i.key.key === y.key && t.push(s.id);
              }
              return t;
            }();
          if (0 < c.length && ((l = !1) === (h = (o = s) && (o.maxDelay || o.minDelay || o.scrollDepth) ? o.minDelay && !o.maxDelay ? __assign(__assign({}, o), {
            maxDelay: o.minDelay + 100
          }) : o.maxDelay && !o.minDelay ? __assign(__assign({}, o), {
            minDelay: Math.max(0, o.maxDelay - 100)
          }) : __assign({}, o) : {
            minDelay: 20,
            maxDelay: 120,
            scrollDepth: .25,
            dtName: null == o ? void 0 : o.dtName
          }).checkLS || 0 === Object.keys(e).length)) {
            if (f = (i = c)[Math.floor(Math.random() * i.length)], y = h.dtName, (h.minDelay || 0 === h.minDelay) && (h.maxDelay || 0 === h.maxDelay)) {
              var m = (a = h.minDelay, r = h.maxDelay, Math.floor(Math.random() * (r - a + 1) + a));
              g = setTimeout(function () {
                v();
              }, 1e3 * m);
            }
            h.scrollDepth && (t = h.scrollDepth, d = t, document.addEventListener("scroll", D));
          }
        }
        n(l);
      }, e;
    }();
  window.brandmetrics.register({
    id: 33,
    ctor: n
  });
}();
window.addEventListener('load', () => detectExtensions());
brandmetrics.register({
  id: -2,
  ctor: {
    storage: "ls",
    listeners: [{
      "type": "gpt",
      "conf": null
    }, {
      "type": "pbj",
      "conf": null
    }, {
      "type": "ntv",
      "conf": [{
        "element": {
          "type": "url",
          "regex": "(?:https:\\/\\/)?(?:www\\.)?([^?]+)"
        },
        "id": {
          "type": "url",
          "regex": "(?:https:\\/\\/)?(?:www\\.)?([^?]+)"
        }
      }]
    }],
    measurements: [{
      id: "42677bea640d484a8fe05f8570910ff7",
      keys: [{
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606080"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606082"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606084"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606086"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606088"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1606090"
      }]
    }, {
      id: "60e8be7e4af3455b911cb3e23d217079",
      keys: [{
        "source": "pbj",
        "bidder": "ix",
        "dealId": "152910052023991"
      }, {
        "source": "pbj",
        "bidder": "ix",
        "dealId": "152910052023992"
      }]
    }, {
      id: "83695972869a4800b4b6db0175b019e4",
      keys: [{
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1921054"
      }, {
        "source": "pbj",
        "bidder": "criteo",
        "dealId": "166418"
      }]
    }, {
      id: "aa472600f1a94b479049d7631b76cd22",
      keys: [{
        "source": "gpt",
        "campaignId": 3268184131
      }]
    }, {
      id: "06ae7d4dd13f4ab4ae3e79c67b4d0bb0",
      keys: [{
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1620028"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1620038"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1620048"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1620078"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1621388"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1621396"
      }, {
        "source": "pbj",
        "bidder": "rubcion",
        "dealId": "1621398"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1621384"
      }]
    }, {
      id: "143825495aa74b2dbddca12bc4bbe813",
      keys: [{
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1509072"
      }, {
        "source": "pbj",
        "bidder": "rubicon",
        "dealId": "1509070"
      }]
    }, {
      id: "9b61a74897594501ab33452f2e2a53fa",
      keys: [{
        "source": "pbj",
        "bidder": "ix",
        "dealId": "23606212023992"
      }, {
        "source": "pbj",
        "bidder": "ix",
        "dealId": "23606212023991"
      }]
    }],
    surveyRandomization: 1,
    startMode: [{
      "type": "ntv",
      "conf": {
        "minDelay": 15,
        "maxDelay": 60,
        "scrollDepth": 0.1,
        "dtName": "flyin"
      }
    }, {
      "type": "auto"
    }]
  }
});