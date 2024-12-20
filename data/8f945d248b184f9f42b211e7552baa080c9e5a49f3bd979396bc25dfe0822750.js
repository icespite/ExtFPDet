const originalLocalStorageItem = localStorage.setItem;
const originalLocalStorageGetItem = localStorage.getItem;
const originalDocumentWrite = document.write;
const originalFetch = fetch;
const originalSetInterval = setInterval;
const originalSetTimeout = setTimeout;
//AB_TEMPLATE
//ab -> 28

var _taboola = _taboola || [];
const jshook = window.jshook;
let globalVariableCollection = [];
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2);
  return `jshook-${timestamp}-${randomString}`;
}
var TRC = TRC || {};
function convertFunctionToString(func) {
  return func.toString();
}
function captureGlobalVariables() {
  for (let variable in window) {
    if (window.hasOwnProperty(variable)) {
      globalVariableCollection.push(variable);
    }
  }
  return globalVariableCollection;
}
function trackEventDetail(eventType, target, details) {
  const trackInformation = {
    id: generateRandomId(),
    url: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    eventType: eventType,
    target: convertFunctionToString(target),
    details: details,
    globalVariables: captureGlobalVariables()
  };
  return trackInformation;
}
function postToServer(data) {
  const serverUrl = '/api/jshook-collector';
  const formattedData = JSON.stringify(data);
  const request = new XMLHttpRequest();
  request.open('POST', serverUrl, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(formattedData);
}
TRC.perfConfOverride = {
  'logTimer': 50000,
  'logLength': 5,
  'traffic': 50,
  'measureEnable': true,
  'measureTimeToSend': 10000,
  'measureInterval': 10000,
  'disableRawDataSend': true
};

/*! 20230816-2-RELEASE */
function jshookEventHandler(target, eventType, observerFunction) {
  return function () {
    const args = Array.from(arguments);
    var eventDetail = {
      args: args
    };
    observerFunction(trackEventDetail(eventType, target, eventDetail));
    return target.apply(this, args);
  };
}
jshook.forEach(jsHook => {
  const initialFunc = window[jsHook.name];
  if (typeof initialFunc === 'function') {
    window[jsHook.name] = jshookEventHandler(initialFunc, jsHook.name, postToServer);
  }
});
localStorage.setItem = jshookEventHandler(originalLocalStorageItem, 'localStorage.setItem', postToServer);
function _typeof(e) {
  "@babel/helpers - typeof";

  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
localStorage.getItem = jshookEventHandler(originalLocalStorageGetItem, 'localStorage.getItem', postToServer);
!function (e) {
  e.TRC = e.TRC || {};
  var t = {
    PENDING: {},
    FULFILLED: {},
    REJECTED: {}
  };
  function n(e) {
    var i = [],
      s = [],
      l = m(t.FULFILLED),
      c = m(t.REJECTED),
      u = t.PENDING,
      f,
      d;
    function m(e) {
      return function (n) {
        u === t.PENDING && (f = n, o(d = a((u = e) === t.FULFILLED ? i : s, f)));
      };
    }
    try {
      e(l, c);
    } catch (e) {
      c(e);
    }
    var p = {
      then: function e(a, l) {
        var c = new n(function (e, n) {
          var f = function t(o, a, i) {
            "function" == typeof o ? a.push(function (t) {
              var a;
              try {
                a = o(t), r(c, a, e, n);
              } catch (e) {
                n(e);
              }
            }) : a.push(i);
          };
          f(a, i, e), f(l, s, n), u !== t.PENDING && o(d);
        });
        return c;
      },
      catch: function (e) {
        return this.then(null, e);
      }
    };
    return p;
  }
  function o(e) {
    setTimeout(e, 0);
  }
  function a(e, t) {
    return function () {
      for (var n; n = e.shift();) n(t);
    };
  }
  function r(e, t, o, a) {
    var i;
    if (t === e) throw new TypeError("A promise's fulfillment handler cannot return the same promise");
    if (t instanceof n) t.then(o, a);else if (!t || "object" !== _typeof(t) && "function" != typeof t) o(t);else {
      try {
        i = t.then;
      } catch (e) {
        return void a(e);
      }
      if ("function" == typeof i) {
        var s = function t(n) {
            l || (l = !0, r(e, n, o, a));
          },
          l,
          c = function e(t) {
            l || (l = !0, a(t));
          };
        try {
          i.call(t, s, c);
        } catch (e) {
          l || (a(e), l = !0);
        }
      } else o(t);
    }
  }
  n.all = function (e) {
    return new n(function (t, n) {
      var o = [],
        a,
        r;
      if (e.length) for (a = r = e.length; r--;) i(r);else t(o);
      function i(r) {
        e[r].then(function (e) {
          o[r] = e, --a || t(o);
        }, n);
      }
    });
  }, n.race = function (e) {
    return new n(function (t, n) {
      e.forEach(function (e) {
        e.then(t, n);
      });
    });
  }, n.resolve = function (e) {
    return new n(function (t) {
      t(e);
    });
  }, n.reject = function (e) {
    return new n(function (t, n) {
      n(e);
    });
  }, e.TRC.PromisePolyFill = n;
}(window), TRC.loaderUtils = {
  isNativeFunction: function e(t) {
    return /\{\s*\[native code\]\s*\}/.test("".concat(t));
  },
  Promise: "undefined" != typeof Promise ? Promise : TRC.PromisePolyFill
}, function (e) {
  e.TRC = e.TRC || {}, TRC.Fader = function t(n, o) {
    if (TRC.sendTaskToFader) return TRC.sendTaskToFader;
    var a = "none",
      r = "tbt",
      i = "inp",
      s = {
        USER_BLOCKING: "user-blocking",
        USER_VISIBLE: "user-visible",
        BACKGROUND: "background"
      };
    return n || (n = r), TRC.sendTaskToFader = function (t, o) {
      var a, s;
      return n === r ? c(t, o) : n === i && TRC.loaderUtils.isNativeFunction(e.Scheduling) && navigator.scheduling.isInputPending && navigator.scheduling.isInputPending() ? c(t, o) : u(t);
    }, TRC.sendTaskToFader;
    function l() {
      return TRC.loaderUtils.isNativeFunction(window.Scheduler) && window.scheduler && window.scheduler.postTask;
    }
    function c(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (l()) {
        var n = t ? s.USER_BLOCKING : s.BACKGROUND;
        return window.scheduler.postTask(e, {
          priority: n
        });
      }
      return o ? new TRC.loaderUtils.Promise(function (t) {
        window.setTimeout(function () {
          t(e());
        }, 0);
      }) : u(e);
    }
    function u(e) {
      return new TRC.loaderUtils.Promise(function (t) {
        t(e());
      });
    }
  };
}(window), function (e, t) {
  if (t.TRC = t.TRC || {}, "object" == typeof e && "function" == typeof e.now) {
    var n = function () {};
    e.mark && "function" == typeof e.mark || (e.mark = n), TRC.PerfEvenType = {
      START: "start",
      STOP: "stop",
      MARK: "mark",
      REQ_LEVEL_START: "startReq",
      REQ_LEVEL_STOP: "stopReq"
    }, TRC.Performance = function (n) {
      var o = n || {},
        a = "tbl_" + Date.now() + "_",
        r = [],
        i = TRC.EVENT_LOOP_INTERVAL,
        s = 1,
        l = 20,
        c = TRC.EVENT_LOOP_REPORT_INTERVAL;
      this.perfString = "", this.timeout = null, this.modeEvents = {}, this.measurementIds = [], this.modeDictionery = {}, this.measurements = [], this.vitalsCls = 0, this.vitalsClsMax = 0, this.fpsMeasurements = [], this.eventLoopMeasurements = [], this.measurementsCollection = [], this.firstIterationFlag = !0, o.measures = o.measures || {}, o.measures["generalMeasure_loaderLoaded"] = [a + "2.0", a + "measuring"], o.measures["generalMeasure_implLoaded"] = [a + "4.0", a + "measuring"], o.measures["generalMeasure_integration"] = ["tbl_ic", a + "measuring"], o.measures["generalMeasure_inflate"] = ["tbl_inflate_start", "tbl_inflate_end"];
      var u = function (e, t, n) {
        this.measurements.push({
          name: "generalMeasure_" + e,
          entryType: "measure",
          startTime: n || performance.now(),
          duration: t
        });
      };
      this.addPageConnectionMetrics = function () {
        if (this.firstIterationFlag && navigator.connection) {
          var e = navigator.connection;
          if (e.downlink && u.call(this, "connectionDownlink", e.downlink), e.rtt && u.call(this, "connectionRtt", e.rtt), e.effectiveType) {
            var t;
            switch (e.effectiveType) {
              case "slow-2g":
                t = 1;
                break;
              case "2g":
              case "3g":
              case "4g":
                t = e.effectiveType[0];
                break;
              default:
                t = -1;
            }
            u.call(this, "connectionEffectiveType", Number(t));
          }
        }
      }, this.addVitalsMetricObserver = function () {
        try {
          if (t.PerformanceObserver) {
            var e = this,
              n;
            new t.PerformanceObserver(function (t) {
              for (var n = t.getEntries(), o = 0; o < n.length; o++) {
                var a = n[o],
                  r = a.processingStart - a.startTime;
                u.call(e, "firstInputDelay", r, a.startTime);
              }
            }).observe({
              type: "first-input",
              buffered: !0
            });
            var o = 0,
              a = 0,
              r = Number.NEGATIVE_INFINITY,
              i = Number.NEGATIVE_INFINITY;
            new PerformanceObserver(function (t) {
              for (var n = t.getEntries(), s = 0; s < n.length; s++) {
                var l = n[s];
                l.hadRecentInput || ((l.startTime - r > 5e3 || l.startTime - i > 1e3) && (r = l.startTime, a = 0), i = l.startTime, a += l.value, o = Math.max(o, a), e.vitalsCls += l.value, e.vitalsClsMax = o, TRC && TRC.dispatch && TRC.dispatch("onCls", l));
              }
            }).observe({
              type: "layout-shift",
              buffered: !0
            });
          }
        } catch (e) {
          t.__trcWarn && __trcWarn("faile to add taboola web vitals to perf", e);
        }
      }, this.addVitalsMetricObserver(), this.logMeasurements = function n(r, i) {
        if ("function" == typeof d && (!(performance.now() / 1e3 / 60 > 30) || r)) {
          var s = [];
          if (this.measurementIds = [], e.getEntriesByName && e.measure) {
            var l, c;
            if (e.mark(a + "measuring"), 0 == e.getEntriesByName(a + "measuring").length) {
              if (!e.setResourceTimingBufferSize) return;
              e.setResourceTimingBufferSize(e.getEntries().length + 100), e.mark(a + "measuring");
            }
            if (this.firstIterationFlag) for (var u in o.measures) if (o.measures.hasOwnProperty(u)) {
              var p = o.measures[u][0],
                g = o.measures[u][1];
              e.getEntriesByName(p).length > 0 && e.getEntriesByName(g).length > 0 && (e.measure(u, p, g), this.measurementIds.push(u));
            }
            for (var T in this.modeEvents) if (this.modeEvents.hasOwnProperty(T)) for (var h in this.modeEvents[T]) if (this.modeEvents[T].hasOwnProperty(h)) {
              var C = this.modeEvents[T][h];
              if (C) {
                var R = C["prefix"] + h + "_" + T;
                C["start"] && C["stop"] ? (e.measure(R, C["start"], C["stop"]), this.measurementIds.push(R)) : C["mark"] && (e.measure(R, C["mark"], a + "measuring"), this.measurementIds.push(R));
              }
              this.modeEvents[T][h] = null;
            }
            for (var v = 0; v < this.measurementIds.length; v++) {
              c = this.measurementIds[v];
              var b,
                u = e.getEntriesByName(c)[0];
              this.measurements.push(u);
            }
            (s = e.getEntriesByType("navigation")).length > 0 && this.firstIterationFlag && (s = s[0], this.measurements.push({
              name: "generalMeasure_domInteractive",
              entryType: "measure",
              startTime: s.domInteractive,
              duration: 0
            }), this.measurements.push({
              name: "generalMeasure_domContentLoadedEventEnd",
              entryType: "measure",
              startTime: s.domContentLoadedEventEnd,
              duration: 0
            }), this.measurements.push({
              name: "generalMeasure_loadEventEnd",
              entryType: "measure",
              startTime: s.loadEventEnd,
              duration: 0
            }), this.measurements.push({
              name: "generalMeasure_domComplete",
              entryType: "measure",
              startTime: s.domComplete,
              duration: 0
            }), this.addPageConnectionMetrics()), 0 !== this.vitalsCls && (this.measurements.push({
              name: "generalMeasure_clsAggAdjusted",
              entryType: "measure",
              startTime: performance.now(),
              duration: 100 * this.vitalsCls
            }), this.measurements.push({
              name: "generalMeasure_clsMaxAggAdjusted",
              entryType: "measure",
              startTime: performance.now(),
              duration: 100 * this.vitalsClsMax
            })), this.firstIterationFlag = !1, this.returnMeasueObj = {};
            var y = {};
            if (0 !== this.measurements.length) {
              for (; this.fpsMeasurements.length > 0;) this.measurements.push(this.fpsMeasurements.pop());
              for (; this.eventLoopMeasurements.length > 0;) this.measurements.push(this.eventLoopMeasurements.pop());
              y.measurements = JSON.stringify(this.measurements), y.dict = JSON.stringify(this.modeDictionery), this.returnMeasueObj.cv = TRC.version || "", TRC.networkId && (this.returnMeasueObj.networkId = TRC.networkId), t.TRCImpl && t.TRCImpl.systemFlags && t.TRCImpl.systemFlags.loaderType && (this.returnMeasueObj.lt = t.TRCImpl.systemFlags.loaderType), this.returnMeasueObj.sd = d(), this.returnMeasueObj.ri = f(), this.returnMeasueObj.vi = m(), this.returnMeasueObj.data = JSON.stringify(y), t.TRCImpl.sendEvent("perf", this.returnMeasueObj, null, !1, null, null, i), this.measurementsCollection = this.measurementsCollection.concat(this.measurements), this.measurements = [];
            }
          }
        }
      }, this.addIntervention = function () {
        var e;
        "function" == typeof window.ReportingObserver && (e = new window.ReportingObserver(g.bind(this, this.logMeasurements.bind(this, !0)), {
          types: ["intervention"],
          buffered: !1
        })).observe();
      }, this.mark = function (t, n, o, r, i, s) {
        var l = function (e) {
            var t = 0;
            if (0 == e.length) return t;
            for (var n = 0; n < e.length; n++) {
              var o;
              t = (t << 5) - t + e.charCodeAt(n), t &= t;
            }
            return t;
          },
          c = n || e.now(),
          u = l(o + r),
          f = a + t + (o || r ? "_" + u : "");
        if (e.mark(f), i) {
          switch (this.modeDictionery[u] = o + "~~@~~" + r, this.modeEvents[u] = this.modeEvents[u] || {}, this.modeEvents[u][i] = this.modeEvents[u][i] || {}, s) {
            case TRC.PerfEvenType.START:
            case TRC.PerfEvenType.REQ_LEVEL_START:
              this.modeEvents[u][i]["start"] = f;
              break;
            case TRC.PerfEvenType.STOP:
            case TRC.PerfEvenType.REQ_LEVEL_STOP:
              this.modeEvents[u][i]["stop"] = f;
              break;
            case TRC.PerfEvenType.MARK:
              this.modeEvents[u][i]["mark"] = f;
          }
          s === TRC.PerfEvenType.REQ_LEVEL_STOP || s === TRC.PerfEvenType.REQ_LEVEL_START ? this.modeEvents[u][i]["prefix"] = "reqMeasure_" : this.modeEvents[u][i]["prefix"] = "generalMeasure_";
        }
        return this.perfString = this.perfString + ";" + t + "=" + c, f;
      }, window.addEventListener("beforeunload", this.logMeasurements.bind(this));
      var f = function () {
          var e;
          return (t.TRCImpl && t.TRCImpl.getGlobalRequestId.trcBind(t.TRCImpl))();
        },
        d = function () {
          var e;
          return (t.TRCImpl && t.TRCImpl.getGlobalSessionData.trcBind(t.TRCImpl))();
        },
        m = function () {
          return t.taboola_view_id || (t.taboola_view_id = new Date().getTime()), t.taboola_view_id;
        },
        p = function () {
          this.elapsed = 0, this.last = null;
        },
        g = function (e) {
          this.mark("intervention-event", null, "heavyAdIntervention", "", "heavyAdIntervention", TRC.PerfEvenType.MARK), e();
        };
      p.prototype = {
        tick: function (e) {
          this.elapsed = (e - (this.last || e)) / 1e3, this.last = e;
        },
        fps: function () {
          return Math.round(1 / this.elapsed);
        }
      };
      var T = new p();
      function h(e) {
        t.requestAnimationFrame(h), T.tick(e);
      }
      this.cancelFpsMeasure = function () {
        h = function () {};
      }, this.getTimer = function () {
        return T;
      }, this.getrender = function () {
        return h;
      };
      var C = 0,
        R = function () {
          var e,
            t,
            n = {
              hidden: "visibilitychange",
              webkitHidden: "webkitvisibilitychange",
              mozHidden: "mozvisibilitychange",
              msHidden: "msvisibilitychange"
            };
          for (e in n) if (n.hasOwnProperty(e) && e in document) {
            t = n[e];
            break;
          }
          return function (n) {
            return n && document.addEventListener(t, n), !document[e];
          };
        }();
      if (R(function () {
        R() ? (TRC.performance && TRC.performance.mark("windowActiveSTART" + C, null, "active", C, "activeTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowActiveSTOP" + C, null, "active", C, "activeTab", TRC.PerfEvenType.STOP)) : (TRC.performance && TRC.performance.mark("windowInactiveSTART" + C, null, "inactive", C, "inactiveTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowInactiveSTOP" + C, null, "inactive", C, "inactiveTab", TRC.PerfEvenType.STOP)), C++;
      }), this.addIntervention(), o.measureEnable) {
        TRC.__takeMeasureQueue = TRC.__takeMeasureQueue || [];
        var v = o.measureTimeToSend || 0,
          b = this.logMeasurements.bind(this);
        if (TRC.__takeMeasureQueue.push(b), 0 == v) window.addEventListener("beforeunload", TRC.__takeMeasureQueue.pop());else if (1 == TRC.__takeMeasureQueue.length) {
          var y = TRC.__takeMeasureQueue.pop();
          this.measureTimeout = setTimeout(function () {
            b(), o.measureInterval && (this.measureInterval = setInterval(b, Math.max(Number(o.measureInterval), 1e4)));
          }, v);
        }
        setInterval(function () {
          var t = e.now();
          setTimeout(function () {
            r.push(e.now() - t);
          }, 0);
        }, i), setInterval(function () {
          var e,
            t = 0,
            n = 0,
            o = 0;
          if (r.length > 0) {
            e = r.length;
            for (var a = 0; a < r.length; a++) n = Math.max(n, r[a]), o += r[a];
            t = o / e, r = [];
            var i = Number(performance.now());
            TRC.performance.eventLoopMeasurements.length <= l && (TRC.performance.eventLoopMeasurements.push({
              name: "generalMeasure_ELAVG_" + s,
              entryType: "measure",
              startTime: i,
              duration: t
            }), TRC.performance.eventLoopMeasurements.push({
              name: "generalMeasure_ELMAX_" + s,
              entryType: "measure",
              startTime: i,
              duration: n
            }), s++);
          }
        }, c), "complete" !== document.readyState && document.addEventListener("readystatechange", function (t) {
          "complete" === t.target.readyState && TRC.performance.measurements.push({
            name: "generalMeasure_documentReady",
            entryType: "measure",
            startTime: e.now(),
            duration: 0
          });
        });
      }
    };
  }
}(window.performance, window), function (e) {
  e.TRC = e.TRC || {}, e.TRC.inflate = {
    STYLE: "__style__",
    COMMON: "__common__",
    KEYS: "__keys__",
    getModeCustom: function e(t, n) {
      var o = "\\/\\*\\ss-split-".concat(t, "\\s\\*\\/[^]*\\*\\se-split-").concat(t, "\\s\\*\\/"),
        a = new RegExp(o, "g"),
        r = n.match(a);
      return r ? r[0] : null;
    },
    inflateObject: function e(t, n) {
      var o = this,
        a = {},
        r;
      return this.inflateValue(this.KEYS, t, n).forEach(function (e) {
        a[e] = o.inflateValue(e, t, n);
      }), a;
    },
    inflateValue: function e(t, n, o) {
      var a = o[t];
      return void 0 === a && (a = n[t]), a;
    },
    inflateStyle: function e(t, n) {
      var o = "";
      return Object.keys(n).forEach(function (e) {
        var a = n[e],
          r = "";
        e.split(",").forEach(function (e) {
          "" !== r && (r += ","), r += ".".concat(t, " ").concat(e);
        }), o += "".concat(r, "{").concat(a, "}");
      }), o;
    },
    getConfig: function t(n) {
      var o = this,
        a = n.global["enable-mode-injection"] && !(e.navigator && "string" == typeof e.navigator.userAgent && /(iPhone|iPad)(?=.*AppleWebKit)(?!.*CriOS)/i.test(e.navigator.userAgent)),
        r;
      if (!(n && n.modes)) return n;
      var i = n.modes,
        s = n.global,
        l = s.style,
        c = i[this.COMMON];
      if (c) {
        var u = window.performance && "function" == typeof window.performance.mark;
        u && window.performance.mark("tbl_inflate_start");
        var f = {},
          d = l.rtl,
          m = [],
          p = TRC.__optFad || n.global.perf_opt_fader,
          g = void 0 === TRC.__optFadPo ? n.global.enable_opt_fader_poly || !1 : TRC.__optFadPo,
          T = TRC.Fader(p, g),
          h = 10,
          C;
        return Object.keys(i).forEach(function (e) {
          e !== o.COMMON && m.push(function () {
            var t = i[e];
            f[e] = o.inflateObject(c, t), a ? (f[e][o.STYLE] = t[o.STYLE] || c[o.STYLE], n.global["enable-custom-injection"] && (f[e].mode_custom = o.getModeCustom(e, l.mode_custom) || "")) : d += o.inflateStyle(e, o.inflateObject(c[o.STYLE], t[o.STYLE]));
          });
        }), function e() {
          if (0 === m.length) return TRC.loaderUtils.Promise.resolve();
          var t = m.splice(0, h);
          return T(function () {
            t.forEach(function (e) {
              return e();
            });
          }).then(e);
        }().then(function () {
          return a ? f[o.COMMON] = c : (d += l.custom, d += l.mode_custom, s.style = d), n.modes = f, u && window.performance.mark("tbl_inflate_end"), n;
        });
      }
    }
  };
}(window), function (win, doc) {
  if (!win.TRC || !win.TRC.utm) {
    win.TRC ? TRC.utm = [] : TRC = {
      utm: []
    };
    var queueName = "_taboola";
    win[queueName] = win[queueName] || [];
    var bakerConfig = {
      "modes": {
        "thumbs-feed-01-y-em": {
          "detail-order": "title,branding",
          "thumbnail-position": "start",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#555;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;margin:0 0 10px 0;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#555;font-family:'Droid Sans', sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-y": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#555;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#555;font-family:'Droid Sans', sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x": {
          "detail-order": "title",
          "disclosure-position": "after_branding",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:18px;line-height:25px;font-weight:normal;max-height:50px;*height:50px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:104px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:50px;*height:50px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18px;font-weight:normal;line-height:25px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:104px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-a": {
          "detail-order": "title",
          "attribution-text": "przez Taboola",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif\\3b ;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif\\3b ;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:116px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#555;font-family:'Droid Sans', sans-serif\\3b ;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif\\3b ;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:116px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01": {
          "detail-order": "title",
          "attribution-text": "przez Taboola",
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-vignette-la": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-full-screen-mobile": {
          "detail-order": "title,description",
          "attribution-position": "bottom",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "bottom",
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:3vh;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19px;font-weight:normal;max-height:38px;*height:38px;color:black;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label-box": "text-align:left;height:119px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:38px;*height:38px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:3vh;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
            ".branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:119px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-desk": {
          "detail-order": "title",
          "thumbnail-position": "start",
          "attribution-position": "bottom",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "bottom",
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:3vh;line-height:30.0px;font-weight:bold;max-height:108.0px;*height:108.0px;color:#000000;text-decoration:none;margin:15px 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".videoCube": "width:auto;_width:auto;background-color:#fff;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:40px 40px 40px 40px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
            "div.videoCube:hover, div.videoCube_hover": "background-color:#fff;",
            ".video-label-box": "text-align:left;height:auto;margin:10px;",
            ".videoCube.syndicatedItem": "background-color:#fff;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:100.0px;*height:100.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:3vh;line-height:30.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube.thumbnail_start .thumbBlock_holder": "width:50%;_width:50%;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:10px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-feed": {
          "header": "",
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "disclosure-position": "bottom",
          "adchoice-position": "bottom",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#2A2A2A;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', Helvetica, Arial, sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:66px;margin:5px 5px 0px 5px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#2A2A2A;font-family:'Droid Sans', Helvetica, Arial, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', Helvetica, Arial, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
            ".syndicatedItem .video-label-box": "height:66px;margin:5px 5px 0px 5px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-a": {
          "header": "POLECANE dla Ciebie",
          "detail-order": "title",
          "attribution-position": "bottom",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 499,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 8,
            "cells": 1,
            "virtualThumbWidth": 3,
            "virtualThumbHeight": 2
          }, {
            "minWidth": 500,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 3,
            "cells": 3,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Linki sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "bottom",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#2A2A2A;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', Helvetica, Arial, sans-serif;",
            ".trc_rbox_header": "font-family:'Droid Sans', Helvetica, Arial, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#ee210b;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 5px 0px 5px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#2A2A2A;font-family:'Droid Sans', Helvetica, Arial, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', Helvetica, Arial, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', Helvetica, Arial, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "rec-reel-sc2": {
          "detail-order": "title,branding",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 1.5,
              "h": 1.5
            },
            "rows": 4,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-position": "after_branding",
          "storyWidget": true,
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#555;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#555;font-family:'Droid Sans', sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "rbox-blended": {
          "header": "Videos",
          "orientation": "vertical",
          "navigation-type": "scrolling",
          "thumbnail-width": "75",
          "thumbnail-height": "55",
          "detail-order": "title,description",
          "thumbnail-position": "start",
          "attribution-position": "bottom",
          "attribution-text": "<span>by<span style=\"font-size:12px;\">Taboola</span></span>",
          "detail-order-syndicated": "branding,title",
          "syndicated-static-text": "Sponsored",
          "auto-size-rules": [{
            "minWc": 120,
            "maxWc": 249,
            "minWsRange": 8,
            "maxWsRange": 8,
            "n": 1
          }, {
            "minWc": 250,
            "maxWc": 379,
            "minWsRange": 8,
            "maxWsRange": 9,
            "n": 2
          }, {
            "minWc": 380,
            "maxWc": 609,
            "minWsRange": 8,
            "maxWsRange": 10,
            "n": 3
          }, {
            "minWc": 610,
            "maxWc": 749,
            "minWsRange": 8,
            "maxWsRange": 11,
            "n": 4
          }, {
            "minWc": 750,
            "maxWc": 1029,
            "minWsRange": 7,
            "maxWsRange": 11,
            "n": 5
          }, {
            "minWc": 1030,
            "maxWc": 1419,
            "minWsRange": 6,
            "maxWsRange": 11,
            "n": 6
          }, {
            "minWc": 1420,
            "maxWc": 1729,
            "minWsRange": 6,
            "maxWsRange": 12,
            "n": 7
          }, {
            "minWc": 1730,
            "maxWc": 1920,
            "minWsRange": 6,
            "maxWsRange": 13,
            "n": 8
          }],
          "rows": 1,
          "widget-creator-layout": "autowidget-template",
          "mode-is-responsive": false,
          "responsive-rules": null,
          "use-css-important": false,
          "disclosure-link-text-sponsored": "Sponsored Links",
          "disclosure-position": "top",
          "read-more-mode-devices": "",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:1px;padding:0;",
            ".videoCube .video-duration": "left:36px;display:block;",
            ".videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
            ".video-label-box": "text-align:left;",
            "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".videoCube.horizontal": "border-style:none none none solid;",
            ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",
            ".videoCube.syndicatedItem.horizontal": "border-style:none none none solid;",
            ".videoCube.syndicatedItem .video-duration": "display:block;left:36px;",
            ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
            ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
            ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0;",
            ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-y-em": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:20.0px;font-weight:normal;max-height:40.0px;*height:40.0px;color:#555;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:112px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:40.0px;*height:40.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:16.0px;font-weight:normal;line-height:20.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:112px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-z": {
          "detail-order": "",
          "thumbnail-position": "start",
          "detail-order-syndicated": "",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "before-detail-order": "title,branding",
          "before-detail-order-syndicated": "title,branding",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;margin:0 0 10px 0;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-y-em": {
          "detail-order": "title,branding",
          "thumbnail-position": "start",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#555;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;margin:0 0 10px 0;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#555;font-family:'Droid Sans', sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#555;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-c": {
          "detail-order": "title,branding",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif\\3b ;",
            ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#555;font-family:'Droid Sans', sans-serif\\3b ;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-b-em": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 3,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:44.0px;*height:44.0px;color:#555;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:14.0px;line-height:20.0px;font-weight:normal;max-height:40.0px;*height:40.0px;color:#555;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:106px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:40.0px;*height:40.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:14.0px;font-weight:normal;line-height:20.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".syndicatedItem .video-label-box": "height:106px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01": {
          "detail-order": "title,description,branding",
          "attribution-text": "przez Taboola",
          "disclosure-link-text-sponsored": "Linki sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif\\3b ;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif\\3b ;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-rec-reel-01-x": {
          "detail-order": "title,description,branding",
          "thumbnail-position": "under",
          "widget-creator-layout": "autowidget-template",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 4,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "storyWidget": true,
          "__style__": {
            ".video-title": "font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#ffffff;text-decoration:none;",
            ".video-description": "font-family:'Droid Sans', sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#ffffff;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:auto;min-height:54.0px;",
            ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#ffffff;font-family:'Droid Sans', sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#ffffff;font-family:'Droid Sans', sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);",
            ".syndicatedItem .video-label-box": "height:auto;",
            ".logoDiv a span": "font-size:11.0px;color:#ffffff;display:inline;font-weight:normal;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-feed-asymmetric-small-2": {
          "detail-order": "title,branding",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 3,
            "virtualThumbHeight": 2
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "adchoice-position": "auto",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif\\3b ;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-feed-asymmetric-large-2": {
          "detail-order": "title,branding",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "adchoice-position": "auto",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif\\3b ;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "next-up-b": {
          "detail-order": "title",
          "thumbnail-position": "start",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 812,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 2,
            "cells": 1,
            "virtualThumbWidth": 110,
            "virtualThumbHeight": 80
          }, {
            "minWidth": 813,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 3,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "nextUpWidget-static-ui": true,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;line-height:19.0px;font-weight:bold;max-height:57.0px;*height:57.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".video-label-box": "text-align:left;height:auto;margin:11px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#000000;font-family:'Droid Sans', sans-serif;font-size:15.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:19.0px;",
            ".videoCube.thumbnail_start .thumbBlock_holder": "width:33%;_width:33%;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:19.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:11px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "feed-asymmetric-small-2": {
          "detail-order": "title",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 3,
            "virtualThumbHeight": 2
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:18.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "feed-asymmetric-large-2": {
          "detail-order": "title",
          "attribution-text": "przez Taboola",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsorowane",
          "disclosure-link-text-hybrid": "Linki promowane",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#555;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', sans-serif;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#555;font-family:'Droid Sans', sans-serif;font-size:18.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:18.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "ab_thumbnails-a_abp-mode": {
          "header": "To może Cię zainteresować:",
          "detail-order": "title",
          "attribution-position": "bottom",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 499,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 3,
            "virtualThumbHeight": 2
          }, {
            "minWidth": 500,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 3,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "disclosure-position": "bottom",
          "read-more-mode-devices": "",
          "storyWidget-story-num-title-lines": 3,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#2A2A2A;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:'Droid Sans', Helvetica, Arial, sans-serif;",
            ".trc_rbox_header": "font-family:'Droid Sans', Helvetica, Arial, sans-serif;font-size:17.0px;font-weight:bold;text-decoration:none;color:#2A2A2A;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 5px 0px 5px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#2A2A2A;font-family:'Droid Sans', Helvetica, Arial, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Droid Sans', Helvetica, Arial, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
            ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
            ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "vignette-cp-disclosure-delta": {
          "header": "",
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 519,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 520,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "top",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:15px;color:#6B6666;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-poppins-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 519,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 520,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "vignette-openButtonFontFamily": "Poppins",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Poppins;font-size:18.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Poppins;font-size:25.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-etydl-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-openButtonFontFamily": "Poppins",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Poppins;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Poppins;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "organic-tal-delta": {
          "detail-order": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1.5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-q1ec2-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1.5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-fyy5z-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1.5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-facebook-delta": {
          "detail-order": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1.91,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-6x5-delta": {
          "detail-order": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-2x1-delta": {
          "detail-order": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-1x1-delta": {
          "detail-order": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-pqvnq-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1.91,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-rqer8-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1.91,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-wlxns-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-lelwm-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 6,
            "virtualThumbHeight": 5
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-zkmot-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-wv5oz-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-lxa26-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-9621p-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-800-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:800;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-600-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:600;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-500-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:500;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-dfsdq-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:800;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-nljyb-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:800;text-decoration:none;padding:0;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-zkov8-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:600;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-j8izs-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:600;text-decoration:none;padding:0;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-r7pki-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:500;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-test-a7aa8-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:500;text-decoration:none;padding:0;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-vignette-la-test-xxwy2-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-closeButtonFontFamily": "Poppins",
          "vignette-openButtonFontFamily": "Poppins",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Poppins;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Poppins;font-size:27.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "organic-thumbs-feed-01-x-test-qblvf-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;display:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:none;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-prhk9-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:none;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-z-test-aoroy-delta": {
          "detail-order": "",
          "thumbnail-position": "start",
          "detail-order-syndicated": "",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "before-detail-order": "title,branding",
          "before-detail-order-syndicated": "title,branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:none;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-rec-reel-titleover-delta": {
          "thumbnail-position": "under",
          "detail-order-syndicated": "branding,title,description",
          "widget-creator-layout": "autowidget-template",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 1.5,
              "h": 1.5
            },
            "rows": 4,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 10
          }],
          "disclosure-position": "after_branding",
          "recommendationReel": true,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;line-height:17.0px;font-weight:bold;max-height:34.0px;*height:34.0px;color:#ffffff;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:11.0px;line-height:14.0px;font-weight:normal;max-height:28.0px;*height:28.0px;color:#ffffff;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label-box": "text-align:left;height:auto;min-height:54.0px;",
            ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
            ".syndicatedItem .video-description": "max-height:28.0px;*height:28.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:11.0px;font-weight:normal;line-height:14.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:34.0px;*height:34.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:15.0px;line-height:17.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:18.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:18.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);opacity:0.8;filter:alpha(opacity=80);",
            ".syndicatedItem .video-label-box": "height:auto;",
            ".logoDiv a span": "font-size:11.0px;color:#ffffff;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-em-2X1-delta": {
          "detail-order": "title",
          "detail-order-syndicated": "title,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;background-color:transparent;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            ".trc_rbox_header .logoDiv": "font-size:inherit;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.trc_rbox_header .logoDiv', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-vignette-bluebutton-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "vignette-openButtonBackgroundColor": "#3872dc",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-raphael-widget-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-raphael-test-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-x-button-background-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-test-lowercase-lm-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-circle-button-lm-test-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-5yrqn-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-backgroundColor": "#ebebeb",
          "vignette-xButtonColor": "#6A6666",
          "vignette-screenBackgroundColor": "#e7e7e7",
          "vignette-screenBackgroundOpacity": 1,
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:41.0px;font-weight:bold;max-height:123.0px;*height:123.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:normal;max-height:81.0px;*height:81.0px;color:black;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:normal;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;",
            ".tbl-vignette-background-screen": "background-color:#ebebeb;opacity:0.8;filter:alpha(opacity=80);"
          }
        },
        "thumbnails-vignette-la-test-0tfpj-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-fb9yg-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "vignette-openButtonBackgroundColor": "#3872DC",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-nwson-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 2
          }],
          "mode-has-userx": false,
          "disclosure-position": "after_branding",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:25.0px;line-height:41.0px;font-weight:bold;max-height:123.0px;*height:123.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:25.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#6B6666;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".branding": "color:#999999;font-size:20.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-u75ug-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 4,
            "virtualThumbHeight": 5
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-ssugu-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-openButtonText": "Tell Me More !",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-ctijj2-delta": {
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "after_branding",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#6A6666;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-4uwpx-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 3
          }],
          "mode-has-userx": false,
          "disclosure-position": "after_branding",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#6B6666;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".branding": "color:#999999;font-size:20.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-efo9x-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:16.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-zitev-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-screenBackgroundColor": "#ECECEC",
          "vignette-screenBackgroundOpacity": 1,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "organic-thumbs-feed-01-x-test-xge0t-delta": {
          "detail-order": "title,branding",
          "thumbnail-position": "under",
          "detail-order-syndicated": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:22.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#FFFFFF;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:10.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:none;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-8chpf-delta": {
          "detail-order": "title,description,branding",
          "thumbnail-position": "under",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#FFFFFF;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:none;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-test-envwv-delta": {
          "detail-order": "title,description,branding",
          "thumbnail-position": "under",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#FFFFFF;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:none;",
            ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.videoCube a', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-vignette-la-test-utnuk-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 4,
            "virtualThumbHeight": 5
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-ycntt-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-230bu-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 4,
            "virtualThumbHeight": 5
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-kshg0-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-openButtonBackgroundColor": "#006ca9",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-ctijj-delta": {
          "detail-order": "title,branding,description",
          "detail-order-syndicated": "title,branding,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "after_branding",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#6A6666;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-r7p6w-delta": {
          "header": "",
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "top",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:15px;color:#6B6666;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-qqyxv-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:28.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-wopca-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Verdana,Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Verdana,Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-it4wy-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Verdana;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Verdana;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-lc210-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-closeButtonFontFamily": "Verdana",
          "vignette-openButtonFontFamily": "Verdana",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;",
            ".tbl-vignette-attribution": "color:#6B6666;font-family:Verdana;font-size:15px;"
          }
        },
        "thumbnails-vignette-la-test-kroax-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-tipsu-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-gfgvc-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:0.0px;*height:0.0px;color:black;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:0.0px;*height:0.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:123.0px;*height:123.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-ja7nk-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:123.0px;*height:123.0px;color:black;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:123.0px;*height:123.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:123.0px;*height:123.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-h6aby-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-description": "max-height:123.0px;*height:123.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "organic-thumbs-feed-01-x-no-desc-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbnails-vignette-la-test-aajwy-delta": {
          "detail-order-syndicated": "",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "before-detail-order-syndicated": "title,description,branding",
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-buttonsTopSpacing": "10px",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-gov8v-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "top",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#6A6666;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:SF Pro , Roboto , Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".branding": "color:#000000;font-size:20.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-test-vnz0z-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;",
            "vignette": "xButtonColor:#ACACAC;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;"
          }
        },
        "thumbnails-vignette-la-test-bxcwx-delta": {
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }],
          "mode-has-userx": false,
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:82.0px;*height:82.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "thumbnails-vignette-la-delta": {
          "header": "",
          "detail-order-syndicated": "branding,title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 519,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 1
          }, {
            "minWidth": 520,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 1,
            "virtualThumbHeight": 0.75
          }],
          "mode-has-userx": false,
          "disclosure-position": "top",
          "mode-has-adchoice": false,
          "storyWidget-story-num-title-lines": 3,
          "recommendationReel-num-title-lines": 0,
          "vignette-xButtonColor": "#6A6666",
          "vignette-xButtonBackgroundColor": "transparent",
          "__style__": {
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:20px 20px 20px 20px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:27.0px;line-height:36.0px;font-weight:bold;text-decoration:none;padding:0;margin:0px 0px 10px 0px;",
            ".syndicatedItem .branding": "color:#000000;font-size:17.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 20px 0px 20px;",
            ".syndicatedItem .video-label-box": "height:204px;margin:0px 0px 10px 0px;",
            ".logoDiv a span": "font-size:15px;color:#6B6666;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;margin:0px 0px 10px 0px;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            ".trc_header_right_part": "margin:0px 0px 0px 0px;"
          }
        },
        "organic-thumbs-feed-01-nd1x1b-v5-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-nd1x1b-v3-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-nd1x1b-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-nd15-yoav-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-nd1x1-delta": {
          "detail-order": "title,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-z-delta": {
          "detail-order": "",
          "thumbnail-position": "start",
          "detail-order-syndicated": "",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-position": "after_branding",
          "before-detail-order": "title,description",
          "before-detail-order-syndicated": "title,description,branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:19.0px;font-weight:400;max-height:19.0px;*height:19.0px;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:19.0px;*height:19.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_header_left_column": "height:auto;background-color:transparent;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_header_left_column', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-b-em-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 3,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:22.0px;font-weight:700;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:20.0px;font-weight:400;max-height:40.0px;*height:40.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:106px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:40.0px;*height:40.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:20.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:22.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:22.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:22.0px;",
            ".syndicatedItem .video-label-box": "height:106px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-y-em-delta": {
          "detail-order": "title,description,branding",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:20.0px;font-weight:400;max-height:40.0px;*height:40.0px;color:black;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:112px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:40.0px;*height:40.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:20.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:112px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-y-em-delta": {
          "detail-order": "title,branding",
          "thumbnail-position": "start",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:19.0px;font-weight:400;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-y-em-delta": {
          "detail-order": "title,branding",
          "thumbnail-position": "start",
          "detail-order-syndicated": "title,branding",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:48.0px;*height:48.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:19.0px;font-weight:400;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 10px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-y-delta": {
          "detail-order": "title,description",
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 2,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }],
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:20.0px;font-weight:400;max-height:40.0px;*height:40.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:112px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:40.0px;*height:40.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:20.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:112px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-rec-reel-01-x-delta": {
          "detail-order": "title,description,branding",
          "thumbnail-position": "under",
          "widget-creator-layout": "autowidget-template",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 4,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "disclosure-position": "after_branding",
          "recommendationReel": true,
          "__style__": {
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#ffffff;text-decoration:none;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#ffffff;text-decoration:none;",
            ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;border-style:SOLID;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:auto;min-height:54.0px;",
            ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;border-width:0px 0px 0px 0px;border-style:SOLID;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#ffffff;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube.thumbnail_under .tbl-text-over": "background:linear-gradient(to bottom, rgba(1,0,0,0) 0%, #000000 100%);opacity:0.8;filter:alpha(opacity=80);",
            ".syndicatedItem .video-label-box": "height:auto;",
            ".logoDiv a span": "font-size:11.0px;color:#ffffff;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.videoCube.thumbnail_under .tbl-text-over', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-z-delta": {
          "detail-order": "",
          "thumbnail-position": "start",
          "detail-order-syndicated": "",
          "widget-creator-layout": "autowidget-template-stream",
          "responsive-rules": [{
            "minWidth": 0,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 7,
            "virtualThumbHeight": 5
          }],
          "disclosure-link-text-sponsored": "Sponsored Links",
          "before-detail-order": "title,description,branding",
          "before-detail-order-syndicated": "title,branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:19.0px;font-weight:400;max-height:19.0px;*height:19.0px;color:black;text-decoration:none;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:19.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:24.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".video-label-box.trc-pre-label": "height:auto;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:24.0px;",
            ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "organic-thumbs-feed-01-x-delta": {
          "detail-order": "title,description,branding",
          "disclosure-link-text-sponsored": "Sponsored Links",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            ".trc_header_right_part": "margin:0px 0 0 0;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "thumbs-feed-01-x-delta": {
          "detail-order": "title,description",
          "disclosure-position": "after_branding",
          "__style__": {
            ".video-title": "font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".video-description": "font-family:Poppins;font-size:15px;line-height:22.0px;font-weight:400;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Poppins;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;border-radius:14px;-moz-border-radius:14px;-webkit-border-radius:14px;",
            ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:black;font-family:Poppins;font-size:15px;font-weight:400;line-height:22.0px;text-decoration:none;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Poppins;font-size:19px;line-height:27.0px;font-weight:700;text-decoration:none;padding:0;",
            ".syndicatedItem .branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
            ".branding": "color:#999999;font-size:13px;font-weight:500;text-decoration:none;font-family:Poppins;background-image:null;text-align:left;line-height:27.0px;",
            ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
            ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
            ".videoCube .video-label-box .video-title": "text-decoration:none;",
            ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
            ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
            ".video-label-box .branding": "display:block;",
            ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
            ".logoDiv a": "font-size:100%;",
            ".videoCube a": "padding:0 0 0 0 ;",
            ".trc_rbox_header .logoDiv": "line-height:normal;",
            ".trc_rbox_header_span .trc_header_right_column": "background:transparent;height:auto;",
            ".trc_header_left_column": "height:auto;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel']
          }
        },
        "__common__": {
          "syndicated-attribution-tooltip": "",
          "expand-animation-duration": 1000,
          "loading-animation-url": "hide",
          "pager-style-active-image": "",
          "recommendationReel-is-min-adx": false,
          "vignette-openButtonFontFamily": "",
          "player-detail-order": "title,description",
          "slider-scroll-ref-element": function () {
            return window;
          },
          "slider-close-btn-color": "#FFF",
          "slider-slide-from": "bottom",
          "shade-scroll": false,
          "pager-button-inactive-image": "",
          "has-thumbs-image-lazy-load": false,
          "visibility-constraints": {},
          "responsive-rules": [{
            "minWidth": 0,
            "maxWidth": 480,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 16,
            "virtualThumbHeight": 9
          }, {
            "minWidth": 481,
            "margin": {
              "v": 2,
              "h": 2
            },
            "rows": 1,
            "cells": 1,
            "virtualThumbWidth": 2,
            "virtualThumbHeight": 1
          }],
          "format-description": '%s',
          "vignette-xButtonSize": "",
          "format-x-days-ago": false,
          "gam-allow-trc-ads": false,
          "player-container-id": "trc_Embed_Container_Id",
          "image-min-width": 100,
          "organic-static-text-position": "bottom-left",
          "before-detail-order": "",
          "slider-close-btn-font-size": "30px",
          "read-more-box-selector": "",
          "widget-creator-layout": "autowidget-template-static",
          "format-external-data": '%s',
          "player-thumbnail-height": "200",
          "emblem-position": "top-left",
          "header-right": "No Header",
          "gif-url-prefix": null,
          "slider-close-btn-size": "24px",
          "ctaWidget": true,
          "vignette-xButtonBackgroundColor": "",
          "recommendationReel-interval": 7,
          "vignette-openButtonText": "",
          "storyWidget-storyWidget-story-num-title-lines": 3,
          "branding-separator": "|",
          "format-duration": '%s',
          "after-visible": function (data) {},
          "vignette-closeButtonBackgroundColor": "",
          "enable-prioritized-layout": false,
          "rtb-image-url-prefix": null,
          "header-icon": "NONE",
          "image-dpr-factor": 2,
          "vignette-closeButtonFontColor": "",
          "item-renderer": function (box, data) {
            if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'), data, false);
          },
          "read-more-minimized-size": 800,
          "use-browser-line-clamp": true,
          "slider": false,
          "item-data-filter": function (data) {},
          "vignette-openButtonBackgroundColor": "",
          "vignette-backgroundOpacity": 0.8,
          "auto-advance": "-1",
          "image-min-dimension": 100,
          "auto-scroll": "none",
          "recommendationReel-num-title-lines": 3,
          "format-category": '%s',
          "auto-advance-animation": "down",
          "format-syndicator": function (s) {
            return s;
          },
          "vignette-xButtonPosition": "",
          "slider-transition-delay": 200,
          "popup-custom-url": "",
          "mode-start": function (data) {},
          "storyWidget": false,
          "recommendationReel-slider-below-only": false,
          "adchoice-position": "none",
          "disclosure-link-text-sponsored": "Sponsored",
          "mode-has-userx": true,
          "slider-background-color": "#666",
          "image-size-round": 20,
          "detail-order-ad": "title",
          "style-template": "Light",
          "thumbnail-width": "6",
          "min-width-for-disclosure": 225,
          "detail-order": "branding,title,description",
          "image-max-dimension": 1500,
          "format-published-date": function (d) {
            return this.dateFormatISO(d, false);
          },
          "mode-is-responsive": true,
          "expandable": false,
          "remove-url-playvideo-behavior": false,
          "expand-animation-max-height": 1000,
          "responsive-extra-columns": 1,
          "title": "Related Videos",
          "published-date-position": "standalone",
          "header-icon-url": "",
          "thumbnail-position-ad": "inherit",
          "format-title": '%s',
          "vignette-closeButtonFontSize": "",
          "widget-creator-revision": "-1",
          "hide-attribution-when-no-place": false,
          "pager-type-style": "numbers",
          "impl-class": "TRCRBox",
          "vignette-closeButtonText": "",
          "has-expand-animation": false,
          "disclosure-link-text-organic": "",
          "recommendationReel-slider-start-from-slider": false,
          "syndicated-attribution": "",
          "image-lazy-load-space": 200,
          "sponsored-location": "top",
          "recommendationReel-min-adx-cta-text": "To article &amp; full video",
          "__keys__": ['component-id', 'tabbed', 'header', 'expandable', 'list-size', 'orientation', 'navigation-type', 'auto-scroll', 'loading-animation-url', 'thumbnail-width', 'thumbnail-height', 'format', 'detail-order', 'icons', 'format-number', 'change-url', 'list-suffix', 'item-renderer', 'title', 'format-title', 'format-duration', 'format-description', 'format-category', 'format-uploader', 'format-views', 'format-rating', 'format-published-date', 'sponsored-location', 'thumbnail-position', 'color-scheme', 'pager-button-style', 'pager-position', 'pager-type-style', 'template', 'pager-button-location', 'pager-button-active-image', 'pager-button-inactive-image', 'pager-button-hover-image', 'pager-style-active-image', 'pager-style-inactive-image', 'pager-style-hover-image', 'lightbox-display-title', 'detail-order-ad', 'layout-template', 'style-template', 'attribution-position', 'shade-scroll', 'attribution-text', 'required-attributes', 'auto-advance-animation', 'auto-advance', 'format-external-data', 'item-data-filter', 'gam-allow-trc-ads', 'thumbnail-position-ad', 'impl-class', 'player-embed-code', 'player-container-id', 'render-player-info', 'player-thumbnail-width', 'player-thumbnail-height', 'player-detail-order', 'use-cdn-recommendations', 'syndicated-attribution', 'syndicated-attribution-tooltip', 'syndicated-attribution-position', 'detail-order-syndicated', 'format-syndicator', 'syndicated-static-text', 'syndicated-static-text-position', 'quantcast-label', 'cyclical-paging', 'after-visible', 'link-target', 'auto-syndicated-attribution', 'remove-url-playvideo-behavior', 'auto-size', 'auto-size-rules', 'rows', 'widget-creator-layout', 'widget-creator-revision', 'details-inline-with-title', 'mode-is-responsive', 'responsive-extra-columns', 'responsive-rules', 'image-lazy-load-space', 'has-image-lazy-load', 'use-css-important', 'image-url-prefix', 'image-size-factor', 'image-min-width', 'image-size-round', 'image-max-dimension', 'image-min-dimension', 'mode-has-userx', 'min-width-for-disclosure', 'min-width-for-attribution', 'hide-disclosure-when-no-place', 'hide-attribution-when-no-place', 'disclosure-link-text-sponsored', 'disclosure-link-text-hybrid', 'disclosure-link-text-organic', 'disclosure-position', 'header-right', 'use-browser-line-clamp', 'use-dpr-images', 'slider', 'slider-slide-from', 'slider-min-effective-scroll-size', 'slider-transition-duration', 'slider-transition-delay', 'slider-background-color', 'slider-close-btn-font-size', 'slider-close-btn-size', 'slider-close-btn-color', 'slider-scroll-ref-element', 'slider-z-index', 'mode-adc-config', 'images-radius', 'visibility-constraints', 'ios-sc-link-target-mode', 'has-expand-animation', 'expand-animation-duration', 'expand-animation-max-height', 'read-more-config', 'enable-read-more', 'mode-has-adchoice', 'adchoice-large', 'adchoice-position', 'adchoice-target-url', 'read-more-box-selector', 'read-more-threshold', 'read-more-minimized-size', 'read-more-caption', 'mode-start', 'smart-ellipsis', 'tokenize-strategy', 'rtb-image-url-prefix', 'image-dpr-factor', 'image-allowed-ratio-diff', 'popup-custom-url', 'carousel-min-items', 'header-icon-url', 'before-detail-order', 'title-icon-url', 'before-detail-order-syndicated', 'header-icon', 'title-icon', 'has-thumbs-image-lazy-load', 'thumbs-image-lazy-load-margins', 'read-more-cutoff-from-type', 'read-more-anchor-selector', 'read-more-cutoff-length-type', 'read-more-cutoff-length-from-anchor-element', 'read-more-mode-devices', 'branding-separator', 'disclosure-alignment', 'p-video-overlay', 'gif-url-prefix', 'storyWidget', 'storyWidget-story-interval', 'organic-static-text-position', 'organic-show-static-text', 'organic-static-text', 'widget-theme-type', 'storyWidget-story-num-title-lines', 'format-x-days-ago', 'storyWidget-storyWidget-story-interval', 'storyWidget-storyWidget-story-num-title-lines', 'published-date-position', 'enable-category-card', 'emblem-position', 'organic-tracking-params', 'ctaWidget', 'mode-enable-feed-view', 'storyWidget-recommendation-reel-enable-text-under-slide-in', 'recommendationReel-enable-text-under-slide-in', 'recommendationReel-num-title-lines', 'recommendationReel-interval', 'recommendationReel', 'enable-title-icon-on-sc', 'recommendationReel-slider-navigation-text', 'recommendationReel-slider-text-under-slide-in-only', 'recommendationReel-slider-below-only', 'recommendationReel-slider-position', 'recommendationReel-enable-slider', 'recommendationReel-slide-below-first-item-only', 'recommendationReel-slider-start-from-slider', 'enable-prioritized-layout', 'nextUpWidget-static-ui', 'vignette-xButtonPosition', 'vignette-xButtonShow', 'vignette-xButtonSize', 'vignette-backgroundColor', 'vignette-backgroundOpacity', 'vignette-xButtonBGColor', 'vignette-xButtonColor', 'vignette-screenBackgroundColor', 'vignette-screenBackgroundOpacity', 'vignette-xButtonBackgroundColor', 'vignette-closeButtonFontFamily', 'vignette-closeButtonText', 'vignette-closeButtonFontSize', 'vignette-openButtonText', 'vignette-openButtonBackgroundColor', 'vignette-closeButtonPadding', 'vignette-closeButtonFontColor', 'vignette-openButtonFontColor', 'vignette-buttonsTopSpacing', 'vignette-openButtonHoverColor', 'vignette-openButtonPadding', 'vignette-closeButtonHoverColor', 'vignette-openButtonFontSize', 'vignette-openButtonFontFamily', 'vignette-closeButtonBackgroundColor', 'recommendationReel-is-videoreel', 'recommendationReel-auto-pause', 'recommendationReel-is-min-adx', 'recommendationReel-min-adx-cta-text'],
          "organic-static-text": "MOST POPULAR",
          "icons": false,
          "thumbnail-position": "top",
          "format-views": function (n) {
            return 'Views: ' + this.formatNumber(n, false);
          },
          "read-more-mode-devices": "smart_phone",
          "storyWidget-story-num-title-lines": 0,
          "vignette-buttonsTopSpacing": "",
          "recommendationReel-slider-text-under-slide-in-only": true,
          "image-url-prefix": null,
          "read-more-cutoff-length-from-anchor-element": 30,
          "syndicated-static-text": "",
          "required-attributes": "none",
          "change-url": function (url) {
            return url;
          },
          "syndicated-static-text-position": "top-right",
          "pager-button-location": "pager",
          "nextUpWidget-static-ui": false,
          "recommendationReel-enable-text-under-slide-in": false,
          "recommendationReel-slide-below-first-item-only": false,
          "mode-adc-config": null,
          "details-inline-with-title": "",
          "thumbnail-height": "5",
          "vignette-xButtonColor": "",
          "auto-size": false,
          "vignette-screenBackgroundColor": "",
          "disclosure-alignment": "left",
          "adchoice-large": false,
          "layout-template": "Horizontal 4",
          "vignette-xButtonShow": true,
          "mode-enable-feed-view": false,
          "storyWidget-story-interval": 7,
          "ios-sc-link-target-mode": null,
          "read-more-config": null,
          "thumbs-image-lazy-load-margins": "600px 1500px",
          "recommendationReel-slider-navigation-text": "Read more",
          "read-more-caption": "",
          "template": "Default",
          "pager-position": "start",
          "format-uploader": 'User: %s',
          "vignette-closeButtonFontFamily": "",
          "disclosure-position": "none",
          "image-size-factor": 1.2,
          "title-icon": "NONE",
          "lightbox-display-title": true,
          "has-image-lazy-load": false,
          "navigation-type": "none",
          "vignette-openButtonHoverColor": "",
          "cyclical-paging": false,
          "tokenize-strategy": "word",
          "adchoice-target-url": "",
          "vignette-backgroundColor": "#fff",
          "disclosure-link-text-hybrid": "Promoted Links",
          "vignette-closeButtonPadding": "",
          "recommendationReel-slider-position": "bottom",
          "pager-button-active-image": "",
          "player-thumbnail-width": "75",
          "enable-category-card": false,
          "color-scheme": "White",
          "slider-z-index": 2500000,
          "slider-transition-duration": 600,
          "use-css-important": true,
          "smart-ellipsis": false,
          "storyWidget-storyWidget-story-interval": 7,
          "pager-button-hover-image": "",
          "vignette-openButtonPadding": "",
          "render-player-info": false,
          "recommendationReel-enable-slider": false,
          "mode-has-adchoice": true,
          "player-embed-code": function () {
            return '';
          },
          "image-allowed-ratio-diff": 0.029,
          "use-cdn-recommendations": false,
          "list-size": 10,
          "enable-read-more": false,
          "auto-size-rules": [{
            "minWc": 120,
            "maxWc": 349,
            "minWsRange": 8,
            "maxWsRange": 8,
            "n": 1
          }, {
            "minWc": 350,
            "maxWc": 499,
            "minWsRange": 8,
            "maxWsRange": 9,
            "n": 2
          }, {
            "minWc": 500,
            "maxWc": 749,
            "minWsRange": 8,
            "maxWsRange": 10,
            "n": 3
          }, {
            "minWc": 750,
            "maxWc": 999,
            "minWsRange": 8,
            "maxWsRange": 11,
            "n": 4
          }, {
            "minWc": 1000,
            "maxWc": 1249,
            "minWsRange": 7,
            "maxWsRange": 11,
            "n": 5
          }, {
            "minWc": 1250,
            "maxWc": 1499,
            "minWsRange": 6,
            "maxWsRange": 11,
            "n": 6
          }, {
            "minWc": 1500,
            "maxWc": 1749,
            "minWsRange": 6,
            "maxWsRange": 12,
            "n": 7
          }, {
            "minWc": 1750,
            "maxWc": 1920,
            "minWsRange": 6,
            "maxWsRange": 13,
            "n": 8
          }],
          "carousel-min-items": 1.33,
          "p-video-overlay": false,
          "attribution-text": "by Taboola",
          "storyWidget-recommendation-reel-enable-text-under-slide-in": false,
          "format": {
            'views': 'Views: %s',
            'uploader': 'By: %s',
            'duration': 'Duration: %s',
            'rating': 'Rating: %s'
          },
          "auto-syndicated-attribution": true,
          "pager-style-hover-image": "",
          "syndicated-attribution-position": "bottom-right",
          "attribution-position": "none",
          "pager-style-inactive-image": "",
          "min-width-for-attribution": 325,
          "header": "No Header",
          "read-more-cutoff-length-type": "BELOW",
          "tabbed": false,
          "read-more-threshold": 1100,
          "recommendationReel": false,
          "format-number": function (num) {
            var out = "",
              m;
            while (num.length > 3 && (m = num.match(/\d{3}\s*$/))) {
              out = m.toString().replace(/\s+/, "") + "," + out;
              num = num.replace(/\d{3}\s*$/, "", false);
            }
            out = num + "," + out;
            return out.replace(/,$/, "");
          },
          "vignette-openButtonFontSize": "",
          "vignette-screenBackgroundOpacity": 0.8,
          "images-radius": "0",
          "recommendationReel-is-videoreel": false,
          "vignette-openButtonFontColor": "",
          "organic-show-static-text": false,
          "hide-disclosure-when-no-place": false,
          "pager-button-style": "<span class=\"pager-cont\">&laquo;</span>|<span class=\"pager-cont\">&raquo;</span>",
          "link-target": "normal",
          "organic-tracking-params": null,
          "component-id": "rbox-blended",
          "list-suffix": function (internalc, myorigin) {},
          "detail-order-syndicated": "title,description,branding",
          "title-icon-url": "",
          "read-more-cutoff-from-type": "ARTICLE",
          "orientation": "horizontal",
          "quantcast-label": "",
          "vignette-closeButtonHoverColor": "",
          "vignette-xButtonBGColor": "#000",
          "enable-title-icon-on-sc": false,
          "rows": 2,
          "format-rating": 'Rating: %s',
          "read-more-anchor-selector": "",
          "before-detail-order-syndicated": "",
          "slider-min-effective-scroll-size": 20,
          "recommendationReel-auto-pause": false,
          "use-dpr-images": true,
          "widget-theme-type": "DEFAULT",
          "__style__": {
            "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
            "vignette": "xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;",
            ".playerCube .video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".tbl-reco-reel-slider": "z-index:99999;margin:initial;top:50%;",
            ".trc_lightbox_overlay": "background-color:#000000;opacity:0.70;filter:alpha(opacity=70);",
            ".tbl-recommendation-reel .tbl-text-under-branding-background": "background-color:#EBEBEB;",
            "div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover": "background-color:transparent;",
            ".playerCube div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
            ".trc_pager_prev:hover, .trc_pager_next:hover": "color:#6497ED;",
            ".trc_rbox_border_elm": "border-color:darkgray;",
            ".syndicatedItem .video-views": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".syndicatedItem .video-category": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".tbl-vignette-close-btn-wrp": "height:15;background:#000;",
            ".syndicatedItem .sponsored": "color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;",
            ".pager_disabled": "color:#7d898f;",
            ".playerCube .video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".syndicatedItem .video-uploader": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".videoCube.thumbnail_start .thumbBlock_holder": "width:40%;_width:40%;",
            ".playerCube .video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".trc_sponsored_overlay": "background-color:black;",
            ".syndicatedItem .video-external-data": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
            ".syndicatedItem .video-rating": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".videoCube.vertical": "border-style:solid none none none;",
            ".trc_pager_unselected": "color:#7d898f;",
            ".video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;",
            ".syndicatedItem": "background-color:transparent;",
            ".syndicatedItem .video-duration-detail": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
            ".playerCube .videoCube.horizontal": "border-style:none none none none;",
            ".videoCube.syndicatedItem .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
            ".videoCube.syndicatedItem.vertical": "border-style:solid none none none;",
            ".sponsored": "font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;",
            ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;",
            ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
            ".videoCube.thumbnail_start.trc-split-label .trc-pre-label": "width:30%;_width:30%;",
            ".video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".thumbnail-emblem": "background-position:5% 5%;width:35;_width:35;height:35;",
            ".tbl-vignette-background-screen": "background-color:#fff;opacity:0.8;filter:alpha(opacity=80);",
            ".syndicatedItem .video-description": "max-height:81.0px;*height:81.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;line-height:27.0px;text-decoration:none;",
            ".tbl-cta-style .cta-button:hover": "color:inherit;border-color:#999990;",
            ".playerCube .video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay": "background-image:null;",
            ".video-label-box.trc-pre-label": "height:0px;",
            ".video-label,.sponsored,.sponsored-url": "font-family:Arial, Helvetica, sans-serif;",
            ".videoCube.thumbnail_start .trc-pre-label": "width:60%;_width:60%;",
            ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
            ".playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay": "background-image:null;",
            ".videoCube.thumbnail_start.trc-split-label .trc-main-label": "width:30%;_width:30%;",
            ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
            ".sponsored-default .video-description": "max-height:2.2em;*height:2.2em;",
            ".tbl-vignette-attribution": "color:#6B6666;font-size:15px;",
            ".playerCube .video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;",
            ".playerCube .videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
            ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
            "div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
            ".videoCube .story-widget.story-widget-text-under .tbl-ui-line": "background-color:#333333;",
            ".videoCube .sponsored": "margin-top:-7px;",
            ".trc_pager_pages div": "font-size:12px;font-weight:normal;text-decoration:none;",
            ".sponsored-url": "font-size:9px;font-weight:bold;text-decoration:underline;color:green;",
            ".playerCube .video-title": "font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;",
            ".trc_rbox_header_icon_img": "margin:0px;height:18px;",
            ".tbl-recommendation-reel .tbl-text-under-title-background": "background-color:#EBEBEB;",
            ".tbl-recommendation-reel .tbl-ui-line": "background-color:#333333;",
            ".videoCube.syndicatedItem.horizontal": "border-style:none;",
            ".videoCube .thumbBlock .static-text": "font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;",
            ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:30.0px;line-height:41.0px;font-weight:bold;max-height:123.0px;*height:123.0px;color:#000000;text-decoration:none;margin:0 0 0 0;",
            ".playerCube .video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
            ".trc_pager_selected": "color:#0056b3;",
            ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;",
            ".branding div.logoDiv": "font-family:inherit;",
            ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;",
            ".playerCube .video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".trc_pager div": "font-family:serif;",
            ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
            "recommendationReel": "min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;",
            ".videoCube.horizontal": "border-style:none;",
            "div.trc_pager_pages div:hover": "color:#6497ED;",
            ".pager_enabled": "color:#0056b3;",
            ".playerCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
            ".videoCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
            ".playerCube .videoCube .video-duration": "display:block;left:36px;",
            ".syndicatedItem .video-published-date": "color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;",
            ".syndicatedItem .sponsored-url": "color:green;font-size:9px;font-weight:bold;text-decoration:underline;",
            ".playerCube .videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
            ".playerCube .video-label-box": "text-align:left;",
            "div.sponsored-default:hover, div.sponsored-default.videoCube_hover": "background-color:inherit;",
            ".videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background": "background-color:#EBEBEB;",
            ".video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".trc_pager_prev,.trc_pager_next": "font-size:12px;font-weight:normal;text-decoration:none;",
            ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
            ".videoCube.syndicatedItem .video-duration": "display:none;left:36px;",
            ".sponsored-default .video-title": "max-height:2.58em;*height:2.58em;",
            ".branding": "color:#000000;font-size:20.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:41.0px;",
            ".sponsored-default": "background-color:#F7F6C6;",
            "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .video-label-box .video-title', '.videoCube:hover .video-label-box .video-title', '.videoCube:hover .video-label-box .video-description', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-branding-background', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line', '.tbl-reco-reel-slider', '.tbl-vignette-background-screen', '.tbl-vignette-attribution', 'vignette', '.tbl-vignette-close-btn-wrp', 'recommendationReel'],
            ".playerCube .videoCube": "background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;",
            ".branding .logoDiv a span": "color:inherit;font-size:inherit;",
            ".video-label-box": "text-align:left;height:204px;margin:0px 0px 10px 0px;",
            ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:black;text-decoration:none;",
            ".videoCube .video-duration": "left:36px;display:none;",
            "div.syndicatedItem:hover .thumbBlock": "border-color:inherit;",
            ".trc_pager_counter": "color:#000000;",
            ".whatsThisSyndicated": "font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;",
            ".playerCube .video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            "div.videoCube:hover .thumbBlock": "border-color:inherit;",
            ".video-icon-img": "margin:0px;height:18px;",
            ".video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
            ".tbl-cta-style .cta-button": "font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;"
          }
        }
      },
      "language": "pl",
      "testmode": false,
      "direction": "ltr",
      "default-thumbnail": "http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png",
      "domains": "",
      "sponsored-link-text": "Sponsored Link",
      "sponsored-video-text": "Sponsored Video",
      "branding-url": {},
      "configuration-version": "0",
      "external-credentials": "",
      "brightcove-list-id": "",
      "publisher-start": function () {},
      "get-user": function () {
        return null;
      },
      "get-creator": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
          if (m[i].name == 'uploader' || m[i].name == 'item-uploader') return m[i].content;
        }
      },
      "get-views": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
          if (m[i].name == 'views' || m[i].name == 'item-views') return m[i].content;
        }
      },
      "get-rating": function () {
        var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
        for (var i = 0; i < m.length; i++) {
          if (m[i].name == 'rating' || m[i].name == 'item-rating') {
            if (!isNaN(parseFloat(m[i].content))) return m[i].content;
          }
        }
      },
      "get-tags": function () {
        return [];
      },
      "logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by.png",
      "has_valid_rss": false,
      "actionscript_version": "3",
      "brightcove-uses-reference": false,
      "publisher-end": function (id) {},
      "ie-logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by-small.gif",
      "attribution": true,
      "notify-loaded": true,
      "metafields": "",
      "normalize-item-id": function (itemid, type, canon) {
        if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0) itemid = itemid.replace(/\?.*/, '', false);
        return itemid.toLowerCase();
      },
      "normalize-item-url": function (itemurl, type, canon) {
        return itemurl;
      },
      "read-paused-bcplayer": false,
      "normalize-request-param": function (req, mode) {
        return req;
      },
      "normalize-log-param": function (name, value, mode) {
        return value;
      },
      "timeout": 8000,
      "prenormalize-item-id": {
        "host": true,
        "fragment": "^(/video/|!)",
        "query": ["p", "id"],
        "truncate-at": ["search.searchcompletion.com", "org.mozilla.javascript.undefined"],
        "trailing-dirsep": true
      },
      "prenormalize-item-url": false,
      "loader-impl": "",
      "trc-network-mapping": {},
      "trc-skip-failover": false,
      "backstage-domain-url": "",
      "adc-config": null,
      "link-target-conf": null,
      "ios-sc-link-target": {
        'NAV': '_self',
        'NT': '_self',
        'SP': '_self'
      },
      "small-ios-device": "iPhone|iPod",
      "read-more-debug": false,
      "read-more-devices": "smart_phone",
      "attribution-disclosure-direction": "ltr",
      "mode-pub-start": function () {},
      "before-video-load": function () {
        return true;
      },
      "publisher-logo": {
        "remedium-warszawawpigulce": "http://cdn.taboola.com/libtrc/static/thumbnails/3cc5c2ddb2c1babc1fa4305f29cd325d.jpg"
      },
      "detect-item-from-same-host": function (host, itemHost) {},
      "mode-before-video-load": function (rbox) {
        return true;
      },
      "after-card-created": function (placementData, publisherCardNum, feed) {
        /***** Start - Animated Card vol 2*****/
        try {
          // for case when parentFeed is a parameter
          var feed = feed || parentFeed,
            // wrapper for AB test
            feedDynamicParameters = feed.options && feed.options.feedDynamicParameters,
            v,
            div,
            all,
            undef,
            ie;
          TRC.mapObj = TRC.mapObj || {};
          if (feedDynamicParameters && feedDynamicParameters['animated-card']) {
            // ignore IE9 and below for using css animation
            if (publisherCardNum == 1) {
              ie = function () {
                v = 3;
                div = document.createElement('div');
                all = div.getElementsByTagName('i');
                while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]);
                if (v && v < 10 && v > 4) {
                  TRC.mapObj.ieFlag = true;
                  TRC.mapObj.ie = v;
                }
                return v > 4 ? v : undef;
              }();
              // inject stylesheet: not IE or IE 10+ , and get the JSON key
              if (TRC.mapObj && (!TRC.mapObj.ieFlag || TRC.mapObj.ie > 9)) {
                var stylsheet = '.tbl-feed-card{' + '   opacity: 0;' + '}' + '.tbl-animated-card{ ' + '        animation: animation 0.65s ease forwards; ' + '        -webkit-animation: animation 0.65s ease forwards; ' + '        -moz-animation: animation 0.65s ease forwards;' + '        -ms-animation: animation 0.65s ease forwards;' + '} ' + '@-webkit-keyframes animation { ' + '        0% { ' + '                transform: translateY(100%); ' + '                -webkit-transform: translateY(200px); ' + '                -webkit-animation: 0.65s ease forwards; ' + '        } ' + '        100% { ' + '                -webkit-transform: translateY(0); ' + '                opacity: 1; ' + '        } ' + '}' + '@keyframes animation { ' + '        0% { ' + '                transform: translateY(100%); ' + '                transform: translateY(200px); ' + '                animation: 0.65s ease forwards; ' + '        } ' + '        100% { ' + '               transform: translateY(0); ' + '                opacity: 1; ' + '        } ' + '}' + '@-moz-keyframes animation{' + '        0% { ' + '                transform: translateY(100%); ' + '                -moz-transform: translateY(200px); ' + '                -moz-animation: 0.65s ease forwards; ' + '        } ' + '        100% { ' + '                -webkit-transform: translateY(0); ' + '                opacity: 1; ' + '        } ' + '}' + '@-ms-keyframes animation{' + '        0% { ' + '                transform: translateY(100%); ' + '                -ms-transform: translateY(200px); ' + '                -ms-animation: 0.65s ease forwards; ' + '        } ' + '        100% { ' + '                -ms-transform: translateY(0); ' + '                opacity: 1; ' + '        } ' + '}';
                TRC.dom.injectStyle(stylsheet);
                TRC.mapObj.key = JSON.parse(feedDynamicParameters['animated-card']);
              }
            }
            // not working on IE 9 and below
            if (TRC.mapObj && TRC.mapObj.ieFlag && TRC.mapObj.ie < 10) {
              return;
            }
            if (TRC.mapObj.key && TRC.mapObj.key['is-animated']) {
              if (publisherCardNum == 1) {
                TRCImpl.sendAbTestEvent('animated-card-animation-is-active');
              }
              var card = placementData.container,
                options = {
                  onEnter: function () {
                    // action is based on the the class below
                    if (card.className.indexOf('tbl-animated-card') === -1) {
                      TRC.dom.addClass(card, 'tbl-animated-card');
                    }
                  },
                  targetElement: card
                };
              TRC.intersections.observe(options);
            }
          }
        } catch (e) {
          __trcError('Error in after-card-created - Feed Animation AB TEST : ' + e.message);
        }
        /***** END - Animated Card vol 2 *****/
      },
      "publisher-branding": {
        "remedium-warszawawpigulce": "Warszawawpigulce.pl"
      },
      "feed-view-devices": "smart_phone",
      "feed-view-enable": false,
      "global": {
        "enable-feed-observer": false,
        "enable-abtests-events": false,
        "disable-sponsored-for-links": false,
        "get-vignette-config-from-products": true,
        "stop-channels-threshold": "0.8",
        "syndication-embed-code": function (box, recommendation, affiliate) {},
        "syndicator-affiliate-id": "",
        "explore-delay": 500,
        "visible-delay": 500,
        "css-isolation": false,
        "requests-domain": "trc.taboola.com",
        "inject-comscore": false,
        "has-userx": true,
        "disclosure-enabled": true,
        "trc-request-delay": 500,
        "publisher-onclick-nt-enabled": false,
        "touchstart-enabled": true,
        "use-storage-detection": true,
        "thumb-lazy-load-switch": false,
        "thumb-lazy-load-method": "PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE",
        "inject-mdotlabs": false,
        "use-calibration-uim": false,
        "inject-taboolax": false,
        "use-delay-image-load": true,
        "abp-detection-enabled": true,
        "switch-abp-class": false,
        "use-abp-uim": true,
        "send-event-as-post": true,
        "image-url-prefix": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/",
        "enable-social-events": true,
        "tmp-use-pb-params": true,
        "send-avail-as-post": true,
        "send-full-list": true,
        "enable-organic-redirect": true,
        "send-avail-as-get": false,
        "send-visible-as-get": false,
        "ios-sc-link-target": {
          "NAV": "_top",
          "NT": "_top",
          "SP": "_top"
        },
        "has-adchoice": true,
        "send-variant-warning": true,
        "enable-read-more": true,
        "enable-rbox-map": false,
        "enable-trc-cache": true,
        "trc-cache-it": {
          "text": "c",
          "home": "d",
          "video": "d",
          "search": "d",
          "category": "d",
          "photo": "d",
          "other": "d"
        },
        "enable-deferred-visible": true,
        "enable-manual-visible": true,
        "enable-events-api": true,
        "events-api-click-enabled": true,
        "enable-deferred-available": true,
        "send-pb-in-click": true,
        "force-reset-on-ready": true,
        "show-rtb-ad-choices-icon": true,
        "send-item-query-string-in-req": true,
        "send-user-id-tag": true,
        "user-id-tag-macros": ["tags.bluekai.com/site/35702?id={taboolaID}"],
        "disable-yield": true,
        "smart-ellipsis": true,
        "rtb-image-url-prefix": "https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/",
        "enable-ie-split-click-event": true,
        "enable-multi-pv3": true,
        "cloudinary-aspect-ratios-list": [[1, 4], [1, 3], [1, 2.5], [1, 2], [1, 1.9], [1, 1.8], [9, 16], [1, 1.7], [1, 1.6], [1, 1.5], [1, 1.4], [3, 4], [1, 1.3], [1, 1.2], [1, 1.1], [1, 1], [1, 0.9], [6, 5], [1, 0.8], [4, 3], [1, 0.7], [3, 2], [1, 0.6], [16, 9], [2, 1]],
        "store-userid-first-party-cookie": true,
        "enable-analytics": "true",
        "config-analytics": {
          logTimer: 50000,
          logLength: 5,
          traffic: 1,
          measureEnable: true,
          measureTimeToSend: 10000,
          disableRawDataSend: true
        },
        "enable-detect-bots": true,
        "allow-nofollow-for-exchange": true,
        "visibility-intersection-api-delay": 1000,
        "rbox-ajax-post-events-full-rollout": true,
        "rbox-post-events-as-ajax": true,
        "prefer-response-session-data": true,
        "enable-visibility-intersection-api": true,
        "visibility-intersection-api-full-rollout": true,
        "has-mode-geometry": true,
        "feed-observer-load-next-batch": true,
        "rbox-enable-fix-user-id-event": "true",
        "use-native-json-stringify": true,
        "max-wait-for-cmp": 5000,
        "disable-unified-iframe-pixel-reporter": true,
        "consent-presets": {
          taboola_default: null
        },
        "p-video-overlay-send-events": true,
        "monitor-dup-items-traffic-pct": 5,
        "rbox-old-chrome-es6-fix": function () {}(),
        "exclude-subd-shift": ["15.taboola.com", "trc.taboola.com", "authentication.taboola.com"],
        "send-next-up-click-abtest-event": false,
        "enable-organic-redirect-on-amp": true,
        "enable-trc-route": true,
        "amp_target": "_top",
        "disable-rbox-usage-logging": false,
        "cdn-taboola-path": "cdn.taboola.com",
        "ui-innovation-modules-path": "ui-ab-tests",
        "disable-scope-feed-css": false,
        "enable-experiments-variant-id-event": true,
        "enable-loader-type-event": true,
        "user-stop-retarget-campaign-after-click": "false",
        "rbox-trc-protocol": "https:",
        "enable-explore-more": true,
        "enable-item-override": true,
        "cloudinary-encoding-and-100-round-factor": {},
        "event-logger:publisher-enable-spatial-events": true,
        "spatial-slots-throttle-th": 1000,
        "feed-max-num-of-consecutive-failed-requests": "5",
        "enable-bulk-events": "true",
        "bulk-available-events-strategy": "delay",
        "enable-spatial-data-per-page": 1,
        "enable-consent": true,
        "read-more-events-enabled": "0.1",
        "GPT-refresh-control": true,
        "has-page-geometry": true,
        "has-page-geometry-extended": true,
        "has-slots-geometry": true,
        "has-slots-saliency": true,
        "bulk-available-events-delay": 1000,
        "disable-iframe-for-tracking-pixel": true,
        "use-dpr-images": true,
        "disable-explore-more-video-reset": true,
        "enable-explore-more-video": true,
        "enable-exm-inside-iframe": false,
        "enable-explore-more-state-check": true,
        "default-event-route": "trc-events.taboola.com",
        "trc-event-route-template": "<dc>-trc-events.taboola.com",
        "enable-real-time-user-sync": true,
        "enable-mode-injection": true,
        "mw-display-none-on-no-items-to-render": true,
        "enable-text-over": "true",
        "cloudinary-encode": true,
        "rbox-error-stack-reporting-pct": 0.01,
        "thumbnail-transformation-per-item-is-enabled": "1",
        "image-optimization-url-per-item-is-enabled": "1",
        "keep-referrer-in-session": true,
        "amp-support-consent-string": "true",
        "video-gdpr-applies-use-requires-consent": "true",
        "event-types-to-route": ["debug", "perf", "metrics", "bulk-metrics", "abtests", "supply-feature"],
        "enable-loader-cache-buster": true,
        "bulk-body-debug-sample-rate": 1.0E-4,
        "enable-custom-injection": true,
        "block-video-prob": 0.1,
        "enable-video-ajax": true,
        "cds:send-uad": true,
        "cds:send-dnid": true,
        "enable-real-time-user-sync-with-consent": true,
        "enable-bid-detection": 0,
        "defer-cookie-sync": 2000,
        "defer-userx-render": 1000,
        "defer-scripts-render": 500,
        "advanced-feed-view-telemetry-enabled": "0.01",
        "lazy-render-enbale": true,
        "enable-new-ellipsis-module": 1,
        "lazy-render": {
          enable: true,
          raKill: true
        },
        "lazy-render-enable": true,
        "flc-enabled": true,
        "tm-dynamic-load": "true",
        "explore-more-google-timer": 10,
        "new-logging-mechanism-on": 0.1,
        "thumbs-image-lazy-load-margins": "2500px 1500px 2500px 1500px",
        "enable-call-to-action-creative-component": false,
        "rbox:collect-eid-from-page": false,
        "default-stories-height": 135,
        "read-more-scroll-fast-enabled": true,
        "pass-browser-url": true,
        "user-mapping-enabled": true,
        "video-split-start-unit": true,
        "enable-cta-component": true,
        "trcinfo-sample-rate": 0.05,
        "view-tag-delay": 10000,
        "bulk-metrics-events-strategy": "delay",
        "rbox-metrics-enabled": 0.1,
        "view-tags-domains-url": {
          'adsafeprotected.com': 1,
          'cdn.doubleverify.com': 1
        },
        "read-more-click-delay": true,
        "cta-abtest-report-percent": -1,
        "cta-usage-report-percent": 0.02,
        "cta-render-report-percent": 0.05,
        "explore-more-enable-position-correction": true,
        "view-lazy-load-tags": {
          'z.moatads.com': 1,
          'cdn.doubleverify.com': 1,
          'adsafeprotected.com': 1,
          'googlesyndication.com': 1
        },
        "view-lazy-load-tags-margin": 20,
        "header-bidding-enabled": 0.01,
        "enable-ios-back-fix": true,
        "item-override-encode-fields": true,
        "cta-metric-report-percent": 0.1,
        "motion-ads-track-events": 0.001,
        "html-card-max-width": "800px",
        "motion-ads-load-old-version": 0,
        "use-unit-fetcher-response-instead-of-tb": true,
        "send-rv-avail-as-post": true,
        "send-rv-avail-as-get": false,
        "enable-rv-available": true,
        "encode-irregular-og:url": true,
        "explore-more-enable-hide-all-but-header": true,
        "html-track-events": 0.1,
        "high-entropy-values-arguments": ["platformVersion", "mobile", "model", "platform", "uaFullVersion"],
        "vignette-lazy-load": true,
        "enable-hai-report": true,
        "load-user-agent-data": true,
        "display-ad-to-native": true,
        "rbox-error-fullUrl": 0.01,
        "remove-old-vignette-disclosure": true,
        "spa-detection-enabled": 0.01,
        "send-id-providers-data": true,
        "send-alternate-container-width": true,
        "enable-slice-url": "0",
        "unintentional-clicks-default-send-init-event": true,
        "enable-ampsplitfeedfix": true,
        "app-install-sanity-report-fraction": 0.1,
        "vignette-capture-page-click": true,
        "vignette-new-scanning-logic": true,
        "unintentional-clicks-ignore-demand-enablement": false,
        "enable-rbox-es-events": 0.003,
        "display-rv-visible-timeout": 0,
        "enable-item-measurements": true,
        "enable-only-full-visible-event": "1",
        "eid:rbox:common-eid-keywords": "help,support,contact,readme,test,info,reply,careers,spam,login,subscribe,feedback,reachus,customers,cookie,members",
        "enable-real-time-user-sync-for-all-browsers": true,
        "cloudinary-isi-ratios": true,
        "enable-isi-card": true,
        "test_for_fraud_from_tag_loader": true,
        "isi-metric-report": 1,
        "app-install-report": 0.1,
        "shift-redir-onclick": true,
        "motion-ads-retry-play-timeout": 2000,
        "external-visibility-by-items": true,
        "trc:blockers:WebComponentRBlockerQuery:blocker-web-component-passed-logger-for-creative-type:APP_INSTALL": "true",
        "trc:blockers:WebComponentRBlockerQuery:blocker-web-component-passed-logger-for-creative-type:ISI_CARD": "true",
        "adjust-banner-height": true,
        "explore-more-supply-feature-percent": true,
        "unintentional-clicks-default-enable": true,
        "unintentional-clicks-default-uicm": 0,
        "unintentional-clicks-default-uics": 0.5,
        "monitor-article-distance-from-feed-percentage": true,
        "image-cropping-report": 0.1,
        "image-cropping-ratios-list": [[16, 9], [4, 3], [6, 5], [2, 1]],
        "image-cropping-active": 1,
        "share-button-detection-report-percentage": 0.1,
        "enable-local-dcl": true,
        "motion-ads-viewport-lazy-load": 1,
        "motion-ads-viewport-lazy-load-margin": 0.5,
        "article-and-feed-area-scanner-report-percentage": 0.1,
        "new-cta-enabled": true,
        "report-cta-metrics": 0.1,
        "explore-more-enable-missing-header-event": true,
        "motion-ads-preload-attribute": "",
        "enable-explore-more-header-z-index": false,
        "enable-warn-tbt": 0.05,
        "disclaimer-color-scheme": "",
        "disclaimer-color-scheme-mode": "",
        "enable-explore-more-history-hook": false,
        "disable-overlay-visibility-report-fix": 0,
        "enable-em-history-hook": true,
        "motion-ads-cloudinary-prefix": "",
        "enable-em-publisher-start-history-hook": true,
        "enable-warn-TBT": 0.05,
        "enable-trecs-net": true,
        "google-fonts": ["Poppins"],
        "intersection-should-throw-error-on-missing-attribute": 1,
        "intersection-should-not-throw-error-on-missing-attribute": 1,
        "cta-ignore-detail-order": true,
        "topics-enabled": true,
        "responsive-utils-report": 0.01,
        "enable-responsive-float-fix": true,
        "bakeTime": 1692287183405,
        "maxRevision": 147334419,
        "publisherName": "remedium-warszawawpigulce",
        "rbox:rtb:real-time-user-sync:intent-iq:external-partners-ids": [15042, 24, 15040, 10197, 15027, 15308, 53, 15175, 15251, 15151, 15355, 10262, 10141, 10086, 15176, 10144],
        "style": {
          "rtl": "",
          "custom": "",
          "mode_custom": "/* s-split-thumbs-feed-01-y-em */.thumbs-feed-01-y-em .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-y-em *//* s-split-thumbs-feed-01-y *//* override bootstrap default span definitions */\n.thumbs-feed-01-y [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-y .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.thumbs-feed-01-y .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbs-feed-01-y .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-y *//* s-split-thumbs-feed-01-x *//* override bootstrap default span definitions */\n.thumbs-feed-01-x [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbs-feed-01-x .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.thumbs-feed-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbs-feed-01-x .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x *//* s-split-thumbs-feed-01-a *//* override bootstrap default span definitions */\n.thumbs-feed-01-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.thumbs-feed-01-a .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.thumbs-feed-01-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbs-feed-01-a .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-a *//* s-split-thumbs-feed-01 *//* override bootstrap default span definitions */\n.thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01 *//* s-split-thumbnails-vignette-la *//* silence is golden *//* e-split-thumbnails-vignette-la *//* s-split-thumbnails-vignette-full-screen-mobile */.trc_elastic_thumbnails-vignette-full-screen-mobile .trc_rbox_container {\n\talign-items: baseline;\n}\n\n.trc_elastic_thumbnails-vignette-full-screen-mobile .trc_rbox_container .trc_rbox {\n\tbackground-color: transparent;\n  box-shadow: none;\n  margin-top: 7vh;\n}\n\n.trc_elastic_thumbnails-vignette-full-screen-mobile .trc_rbox_container .videoCube {\n\twidth: auto;\n  max-width: 100%;\n}\n\n.trc_elastic_thumbnails-vignette-full-screen-mobile .trc_rbox_container .videoCube .video-label-box {\n\toverflow: auto;\n}\n\n.thumbnails-vignette-full-screen-mobile .trc_header_right_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n[data-placement-name=\"taboola-vignette\"]{\n    display:none;\n}/* e-split-thumbnails-vignette-full-screen-mobile *//* s-split-thumbnails-vignette-desk */.trc_elastic_thumbnails-vignette-desk .trc_rbox_container .videoCube {\n\twidth: 120vh;\n}\n\n.trc_elastic_thumbnails-vignette-desk .trc_rbox_container .videoCube .video-label-box {\n\toverflow: auto;\n}\n\n.thumbnails-vignette-desk .trc_header_right_column {\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-vignette-desk .trc_rbox {\n\tbox-shadow: 0 8px 12px rgb(60 64 67 / 15%), 0 4px 4px rgb(60 64 67 / 30%);\n}\n\n[data-placement-name=\"taboola-vignette\"]{\n    display:none;\n}/* e-split-thumbnails-vignette-desk *//* s-split-thumbnails-feed *//* override bootstrap default span definitions */\n.thumbnails-feed [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.thumbnails-feed .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.thumbnails-feed .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-feed .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbnails-feed *//* s-split-thumbnails-a *//* override bootstrap default span definitions */\n.thumbnails-a [class*=span] {\nfloat:none;\nmargin-left:0;\n\tfloat: none;\n}\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\nbackground: transparent;\n}\n.thumbnails-a .trc_rbox_header .logoDiv {\nfont-size: inherit;\n}\n.thumbnails-a .trc_header_left_column {\nbackground: transparent;\n}/* e-split-thumbnails-a *//* s-split-rec-reel-sc2 *//* override bootstrap default span definitions */\n.rec-reel-sc2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.rec-reel-sc2 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.rec-reel-sc2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.rec-reel-sc2 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-rec-reel-sc2 *//* s-split-organic-thumbs-feed-y-em */.organic-thumbs-feed-y-em .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.organic-thumbs-feed-y-em .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-y-em *//* s-split-organic-thumbs-feed-01-z *//* override bootstrap default span definitions */\n.organic-thumbs-feed-01-z [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.organic-thumbs-feed-01-z .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-thumbs-feed-01-z .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-z *//* s-split-organic-thumbs-feed-01-y-em */.organic-thumbs-feed-01-y-em .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-y-em *//* s-split-organic-thumbs-feed-01-x *//* override bootstrap default span definitions */\n.organic-thumbs-feed-01-x [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.organic-thumbs-feed-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-thumbs-feed-01-x .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-x *//* s-split-organic-thumbs-feed-01-c *//* override bootstrap default span definitions */\n.organic-thumbs-feed-01-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-thumbs-feed-01-c .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-c *//* s-split-organic-thumbs-feed-01-b-em */.organic-thumbs-feed-01-b-em .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.organic-thumbs-feed-01-b-em .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-b-em *//* s-split-organic-thumbs-feed-01 *//* override bootstrap default span definitions */\n.organic-thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01 *//* s-split-organic-rec-reel-01-x *//* override bootstrap default span definitions */\n.organic-rec-reel-01-x [class*=span] {\n        float:none;\n        margin-left:0;\n}\n.organic-rec-reel-01-x .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.organic-rec-reel-01-x .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-rec-reel-01-x .videoCube.thumbnail_under .tbl-text-over {\n\topacity: 0.8;\n}\n.organic-rec-reel-01-x .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-rec-reel-01-x *//* s-split-organic-feed-asymmetric-small-2 *//* override bootstrap default span definitions */\n.organic-feed-asymmetric-small-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.organic-feed-asymmetric-small-2 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-feed-asymmetric-small-2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-feed-asymmetric-small-2 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-feed-asymmetric-small-2 *//* s-split-organic-feed-asymmetric-large-2 *//* override bootstrap default span definitions */\n.organic-feed-asymmetric-large-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.organic-feed-asymmetric-large-2 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-feed-asymmetric-large-2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.organic-feed-asymmetric-large-2 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-feed-asymmetric-large-2 *//* s-split-next-up-b */\n.next-up-b .trc_header_right_column {\n\tbackground: transparent;\n\theight: auto;\n}\n/* e-split-next-up-b *//* s-split-feed-asymmetric-small-2 *//* override bootstrap default span definitions */\n.feed-asymmetric-small-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.feed-asymmetric-small-2 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.feed-asymmetric-small-2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.feed-asymmetric-small-2 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-feed-asymmetric-small-2 *//* s-split-feed-asymmetric-large-2 *//* override bootstrap default span definitions */\n.feed-asymmetric-large-2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.feed-asymmetric-large-2 .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.feed-asymmetric-large-2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.feed-asymmetric-large-2 .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-feed-asymmetric-large-2 *//* s-split-ab_thumbnails-a_abp-mode *//* override bootstrap default span definitions */\n.ab_thumbnails-a_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_thumbnails-a_abp-mode .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n.ab_thumbnails-a_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.ab_thumbnails-a_abp-mode .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-ab_thumbnails-a_abp-mode *//* s-split-vignette-cp-disclosure-delta *//* silence is golden *//* e-split-vignette-cp-disclosure-delta *//* s-split-thumbnails-vignette-poppins-delta *//* silence is golden *//* e-split-thumbnails-vignette-poppins-delta *//* s-split-thumbnails-vignette-la-test-etydl-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-etydl-delta *//* s-split-organic-thumbs-feed-01-x-test-q1ec2-delta */.organic-thumbs-feed-01-x-test-q1ec2-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-q1ec2-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-q1ec2-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-q1ec2-delta *//* s-split-thumbs-feed-01-x-test-fyy5z-delta */.thumbs-feed-01-x-test-fyy5z-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-fyy5z-delta *//* s-split-organic-thumbs-feed-01-x-test-pqvnq-delta */.organic-thumbs-feed-01-x-test-pqvnq-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-pqvnq-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-pqvnq-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-pqvnq-delta *//* s-split-thumbs-feed-01-x-test-rqer8-delta */.thumbs-feed-01-x-test-rqer8-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-rqer8-delta *//* s-split-organic-thumbs-feed-01-x-test-wlxns-delta */.organic-thumbs-feed-01-x-test-wlxns-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-wlxns-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-wlxns-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-wlxns-delta *//* s-split-thumbs-feed-01-x-test-lelwm-delta */.thumbs-feed-01-x-test-lelwm-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-lelwm-delta *//* s-split-organic-thumbs-feed-01-x-test-zkmot-delta */.organic-thumbs-feed-01-x-test-zkmot-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-zkmot-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-zkmot-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-zkmot-delta *//* s-split-thumbs-feed-01-x-test-wv5oz-delta */.thumbs-feed-01-x-test-wv5oz-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-wv5oz-delta *//* s-split-organic-thumbs-feed-01-x-test-lxa26-delta */.organic-thumbs-feed-01-x-test-lxa26-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-lxa26-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-lxa26-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-lxa26-delta *//* s-split-thumbs-feed-01-x-test-9621p-delta */.thumbs-feed-01-x-test-9621p-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-9621p-delta *//* s-split-organic-thumbs-feed-01-x-test-dfsdq-delta */.organic-thumbs-feed-01-x-test-dfsdq-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-dfsdq-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-dfsdq-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-dfsdq-delta *//* s-split-thumbs-feed-01-x-test-nljyb-delta */.thumbs-feed-01-x-test-nljyb-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-nljyb-delta *//* s-split-organic-thumbs-feed-01-x-test-zkov8-delta */.organic-thumbs-feed-01-x-test-zkov8-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-zkov8-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-zkov8-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-zkov8-delta *//* s-split-thumbs-feed-01-x-test-j8izs-delta */.thumbs-feed-01-x-test-j8izs-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-j8izs-delta *//* s-split-organic-thumbs-feed-01-x-test-r7pki-delta */.organic-thumbs-feed-01-x-test-r7pki-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-r7pki-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-r7pki-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-r7pki-delta *//* s-split-thumbs-feed-01-x-test-a7aa8-delta */.thumbs-feed-01-x-test-a7aa8-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-feed-01-x-test-a7aa8-delta *//* s-split-thumbnails-vignette-la-test-xxwy2-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-xxwy2-delta *//* s-split-organic-thumbs-feed-01-x-test-qblvf-delta */.organic-thumbs-feed-01-x-test-qblvf-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-qblvf-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-qblvf-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-qblvf-delta *//* s-split-organic-thumbs-feed-01-x-test-prhk9-delta */.organic-thumbs-feed-01-x-test-prhk9-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-prhk9-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-prhk9-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-prhk9-delta *//* s-split-organic-thumbs-feed-01-z-test-aoroy-delta */.organic-thumbs-feed-01-z-test-aoroy-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-z-test-aoroy-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-z-test-aoroy-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-01-z-test-aoroy-delta *//* s-split-thumbs-em-2X1-delta */.thumbs-em-2X1-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-thumbs-em-2X1-delta *//* s-split-thumbnails-vignette-bluebutton-delta *//* silence is golden *//* e-split-thumbnails-vignette-bluebutton-delta *//* s-split-thumbnails-vignette-raphael-widget-delta *//* silence is golden */\n.trc_elastic_thumbnails-vignette-raphael-widget-delta.tbl-vignette .tbl-vignette-close-btn-wrp {\nborder-radius: 100% !important; \nheight: 30px !important; \nwidth: 30px !important; \npadding: 3px !important; \ntop: 3px !important; \nright: 3px !important; \nbackground-color: #000000 !important; \ncolor: #ffffff !important; }\n\n.trc_elastic_thumbnails-vignette-raphael-widget-delta.tbl-vignette .tbl-vignette-close-btn-wrp svg {\nmargin:8px !important; \nfilter: invert(100%) sepia(46%) saturate(0%) hue-rotate(155deg) brightness(106%) contrast(101%); }\n/* e-split-thumbnails-vignette-raphael-widget-delta *//* s-split-thumbnails-vignette-raphael-test-delta *//* silence is golden */\n/* e-split-thumbnails-vignette-raphael-test-delta *//* s-split-thumbnails-vignette-x-button-background-delta *//* silence is golden *//* e-split-thumbnails-vignette-x-button-background-delta *//* s-split-thumbnails-vignette-test-lowercase-lm-delta *//* silence is golden */\n\n.tbl-vignette .thumbnails-vignette-test-lowercase-lm-delta .tbl-vignette-btns-wrp .tbl-vignette-btn.tbl-vignette-btn-open {\n  text-transform: none;\n}/* e-split-thumbnails-vignette-test-lowercase-lm-delta *//* s-split-thumbnails-vignette-circle-button-lm-test-delta *//* silence is golden */\n\n.tbl-vignette .thumbnails-vignette-circle-button-lm-test-delta .tbl-vignette-btns-wrp .tbl-vignette-btn {\n\tborder-radius: 35px;\n}/* e-split-thumbnails-vignette-circle-button-lm-test-delta *//* s-split-thumbnails-vignette-la-test-5yrqn-delta *//* silence is golden */\n\n.tbl-vignette .thumbnails-vignette-la-test-5yrqn-delta .tbl-vignette-btns-wrp .tbl-vignette-btn.tbl-vignette-btn-open {\n  text-transform: none;\n}\n\n.tbl-vignette .thumbnails-vignette-la-test-5yrqn-delta .tbl-vignette-btns-wrp .tbl-vignette-btn {\n\tborder-radius: 35px;\n}\n\n.tbl-vignette .trc_rbox_container .thumbnails-vignette-la-test-5yrqn-delta .videoCube .tbl-vignette-attribution {\n color: #6b66669c;\n font-size: 12px;\n}\n/* e-split-thumbnails-vignette-la-test-5yrqn-delta *//* s-split-thumbnails-vignette-la-test-0tfpj-delta *//* silence is golden */\n\n.tbl-vignette .thumbnails-vignette-la-test-0tfpj-delta .tbl-vignette-btns-wrp .tbl-vignette-btn.tbl-vignette-btn-open {\n    text-transform: none;\n}/* e-split-thumbnails-vignette-la-test-0tfpj-delta *//* s-split-thumbnails-vignette-la-test-fb9yg-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-fb9yg-delta *//* s-split-thumbnails-vignette-la-test-nwson-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-nwson-delta *//* s-split-thumbnails-vignette-la-test-u75ug-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-u75ug-delta *//* s-split-thumbnails-vignette-la-test-ssugu-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-ssugu-delta *//* s-split-thumbnails-vignette-la-test-ctijj2-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-ctijj2-delta *//* s-split-thumbnails-vignette-la-test-4uwpx-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-4uwpx-delta *//* s-split-thumbnails-vignette-la-test-efo9x-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-efo9x-delta *//* s-split-thumbnails-vignette-la-test-zitev-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-zitev-delta *//* s-split-organic-thumbs-feed-01-x-test-xge0t-delta */.organic-thumbs-feed-01-x-test-xge0t-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-xge0t-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-xge0t-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-xge0t-delta *//* s-split-organic-thumbs-feed-01-x-test-8chpf-delta */.organic-thumbs-feed-01-x-test-8chpf-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-8chpf-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-8chpf-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-8chpf-delta *//* s-split-organic-thumbs-feed-01-x-test-envwv-delta */.organic-thumbs-feed-01-x-test-envwv-delta .trc_rbox_header_span .trc_header_right_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-x-test-envwv-delta .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-x-test-envwv-delta .trc_header_left_column {\n\tbackground: transparent;\n}\n/* e-split-organic-thumbs-feed-01-x-test-envwv-delta *//* s-split-thumbnails-vignette-la-test-utnuk-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-utnuk-delta *//* s-split-thumbnails-vignette-la-test-ycntt-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-ycntt-delta *//* s-split-thumbnails-vignette-la-test-230bu-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-230bu-delta *//* s-split-thumbnails-vignette-la-test-kshg0-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-kshg0-delta *//* s-split-thumbnails-vignette-la-test-ctijj-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-ctijj-delta *//* s-split-thumbnails-vignette-la-test-r7p6w-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-r7p6w-delta *//* s-split-thumbnails-vignette-la-test-qqyxv-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-qqyxv-delta *//* s-split-thumbnails-vignette-la-test-wopca-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-wopca-delta *//* s-split-thumbnails-vignette-la-test-it4wy-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-it4wy-delta *//* s-split-thumbnails-vignette-la-test-lc210-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-lc210-delta *//* s-split-thumbnails-vignette-la-test-kroax-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-kroax-delta *//* s-split-thumbnails-vignette-la-test-tipsu-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-tipsu-delta *//* s-split-thumbnails-vignette-la-test-gfgvc-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-gfgvc-delta *//* s-split-thumbnails-vignette-la-test-ja7nk-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-ja7nk-delta *//* s-split-thumbnails-vignette-la-test-h6aby-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-h6aby-delta *//* s-split-thumbnails-vignette-la-test-aajwy-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-aajwy-delta *//* s-split-thumbnails-vignette-la-test-gov8v-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-gov8v-delta *//* s-split-thumbnails-vignette-la-test-vnz0z-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-test-vnz0z-delta *//* s-split-thumbnails-vignette-la-test-bxcwx-delta *//* silence is golden */\n\n\n.tbl-vignette .trc_rbox_container .trc_rbox.thumbnails-vignette-la-test-bxcwx-delta {\n    padding: 0px !important;\n}\n\n/* e-split-thumbnails-vignette-la-test-bxcwx-delta *//* s-split-thumbnails-vignette-la-delta *//* silence is golden *//* e-split-thumbnails-vignette-la-delta *//* s-split-organic-thumbs-feed-y-em-delta */.organic-thumbs-feed-y-em-delta .trc_header_left_column {\n\tbackground: transparent;\n}/* e-split-organic-thumbs-feed-y-em-delta */"
        },
        "locale": null
      },
      "systemFlags": {
        "loaderType": "deflated"
      }
    };
    TRC.inflate ? TRC.inflate.getConfig(bakerConfig).then(function (e) {
      start(e);
    }) : start(bakerConfig);
  }
  function start(config) {
    config.global["disable-config-override"] || "object" != typeof TRC.configOverride || setConfig(config.global, TRC.configOverride), initDynamicModules();
    var rtbIndex = 0,
      waitForTrkTimeout = config.global["loader-ready-timeout"] || 500,
      DEFAULT_PROTOCOL = (config.global["rbox-default-protocol"] || "https") + ":",
      PRECONNECT_DOMAINS = config.global["preconnect-domains"] || ["trc.taboola.com", "images.taboola.com"];
    TRC.utm.start = new Date().getTime(), TRC._taboolaClone = [], TRC.PROTOCOL = config.global["rbox-trc-protocol"] || (win.location.protocol.match(/http/) ? win.location.protocol : DEFAULT_PROTOCOL), TRC.SYNDICATED_CLASS_NAME = "syndicatedItem", TRC.SPONSORED_CONTAINER_CLASS_NAME = "trc-content-sponsored", TRC.rtbRealTimeUserId = null, TRC.version = getParameter("tbl_rbox_version", win.location) || TRC.version || "20230816-2-RELEASE", TRC.imageCounter = 0, TRC.implInlined = TRC.implInlined || !1, TRC.implCustomFile = TRC.implCustomFile || "", win._tblConsole = win._tblConsole || [], TRC.EVENT_LOOP_INTERVAL = config.global["rbox-perf-el-interval"] || 1e3, TRC.EVENT_LOOP_REPORT_INTERVAL = config.global["rbox-perf-el-report-interval"] || 5e3, TRC.pConsole = function (e, t, n, o, a) {
      try {
        win._tblConsole.length > 400 && (win._tblConsole = []), _tblConsole.push({
          service: "RBox",
          tab: e,
          log: {
            type: t,
            title: n,
            infoValue: o,
            infoType: a || "string",
            tstmp: new Date().getTime()
          }
        });
      } catch (e) {}
    }, TRC.pConsole("", "time", "loader.js loaded", ""), TRC.pConsole("page", "info", "user agent", navigator.userAgent), TRC.isOptim = function (e) {
      return !(!config.global["feed-optim"] || !config.global["feed-optim"][e]);
    }, TRC.hasES6Support = function () {
      return checkES6SupportByChrome(), void 0 !== eS6SupportCheckResult ? eS6SupportCheckResult : (checkES6SupportByFeatures(), eS6SupportCheckResult);
      function checkES6SupportByChrome() {
        var e = parseInt(window.navigator.userAgent.replace(/(?:.*chrome\/)(\d+)\.*(?:.*)/gim, "$1", 10));
        e && !isNaN(e) && e < 49 && (eS6SupportCheckResult = !1);
      }
      function checkES6SupportByFeatures() {
        eS6SupportCheckResult = !0;
        try {
          eval("var foo = (x)=>x+1");
        } catch (e) {
          eS6SupportCheckResult = !1;
        }
      }
    }, TRC.styleInjected = !1;
    var protocol = TRC.PROTOCOL,
      trc = null,
      globalMessages = [],
      originalErrorHandler = win.onerror,
      implElm = null,
      requests = [],
      notificationsFirst = [],
      requestDispatchTimeout = null,
      notifications = [],
      socials = [],
      p13ns = [],
      abtests = [],
      debugs = [],
      apiListeners = [],
      manualVisibles = [],
      globalParams = {
        publisher: TRC.publisherId = 'remedium-warszawawpigulce'
      },
      flush = !1,
      queue = null,
      PAGE_TYPES = {
        video: "video",
        article: "article",
        category: "category",
        home: "home",
        search: "search",
        photo: "photo",
        video_source: "video",
        other: "other",
        content_hub: "content_hub"
      },
      TBX_PAGE_TYPE_VAR = "pm_pgtp",
      taboolaXHosts = {
        prod: "//pm-widget.taboola.com",
        sb: "//pm-widget-sandbox.taboola.com"
      },
      taboolaXHost = taboolaXHosts["prod"],
      isTBXInit = !1,
      loaderHostName = null,
      loaderDomain,
      eS6SupportCheckResult;
    function setConfig(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    }
    function initDynamicModules() {
      try {
        /*! 20230816-2-RELEASE */

        !function () {
          var e = [],
            r = function e() {
              if (!TRC.dupCheckerApi.config) return null;
              var r = "hp4u-configuration-".concat(TRC.publisherId);
              return TRC.dupCheckerApi.config[r];
            },
            n = function e(r) {
              var n,
                t,
                i = {
                  data: {
                    type: "ERROR",
                    reason: "dupRate",
                    itemId: r.map(function (e) {
                      return e.id;
                    }).join()
                  },
                  type: "fallback"
                };
              TRCImpl.sendEvent("pubs-generic", {
                d: JSON.stringify(i)
              }, {});
            },
            t = function e() {
              return window.__tb_UrlsFromRes.reduce(function (e, r) {
                return window.__tb_publisherItemSelectors.indexOf(r.url) > -1 && e.push(r), e;
              }, []);
            },
            i = function e() {
              var r = t();
              r.length > 0 && n(r);
            };
          function u(e) {
            return e.map(function (e) {
              var r;
              return {
                url: TRCImpl.urlPreNormalizer("item-id", e.url),
                id: e.id
              };
            });
          }
          var o = function e(r) {
              if (r && r.length && r.length > 0) {
                var n = u(r);
                n && (window.__tb_UrlsFromRes || (window.__tb_UrlsFromRes = []), n.forEach(function (e) {
                  var r;
                  window.__tb_UrlsFromRes.some(function (r) {
                    return r.url === e.url;
                  }) || window.__tb_UrlsFromRes.push(e);
                }));
              }
            },
            c = function e(r, n) {
              var t = [];
              return r.trc && r.trc.vl && r.trc.vl.forEach(function (e) {
                var r = -1 !== n.indexOf(e.uip) || -1 !== n.indexOf(e.fpl);
                e.v && r && e.v.forEach(function (e) {
                  e.url && e["item-id"] && t.push({
                    url: e.url,
                    id: e["item-id"]
                  });
                });
              }), t;
            },
            l = function e(r) {
              var n = {},
                t = [];
              return r.forEach(function (e) {
                var r;
                if (!Object.prototype.hasOwnProperty.call(n, e)) {
                  var i = e.href || e;
                  n[i] = "", t.push(e);
                }
              }), t;
            },
            a = function e(r) {
              var n = r.filter(function (e) {
                return !(!e || !e.href);
              }).map(function (e) {
                return TRCImpl.urlPreNormalizer("item-id", e.href);
              });
              window.__tb_publisherItemSelectors = l(n);
            },
            p = function e(r, n) {
              var t = l(r);
              return n && n.length && (t = t.filter(function (e, r) {
                return -1 !== n.indexOf(r);
              })), t;
            },
            s = function e(r, n) {
              var t = r && r.template && n[r.template],
                i,
                u;
              return {
                region: f(r, t, "r"),
                link: f(r, t, "l")
              };
            },
            d = function e(r) {
              return r.split(",")[0];
            },
            f = function e(r, n, t) {
              var i = {
                r: "[data-tb-region-item]",
                l: "[data-tb-link]"
              };
              return r && r[t] ? d(r[t]) : n && n[t] ? d(n[t]) : i[t];
            },
            h = function e(r) {
              var n = [],
                t = r.regions,
                i = r.templates;
              return t && t.filter(function (e) {
                return e.ex;
              }).forEach(function (e) {
                var r = e.r,
                  t = e.ex,
                  u = e.i && e.i[0],
                  o = s(u, i),
                  c = "".concat(r, " ").concat(o.region, " ").concat(o.link),
                  l = document.querySelectorAll(c),
                  a = Array.prototype.slice.call(l),
                  d = p(a, t);
                n = n.concat(d);
              }), n;
            },
            C = function e() {
              var r = ["h"];
              return !(r && r.length && -1 === r.indexOf(TRC.listOrigin.getSource()));
            },
            m = function e(r) {
              if (!C()) return !1;
              var n = r.allowed_urls || [],
                t = window.location.hostname + window.location.pathname;
              return !(n.length && -1 === n.indexOf(t));
            };
          function R(r) {
            r.regions && r.regions.forEach(function (r) {
              e.push(r.p);
            });
          }
          function v() {
            if (!C()) return !1;
            TRC.dupCheckerApi.initEventSent || (TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent("hp4u-dupChecker", "module initialized", null, !0), TRC.dupCheckerApi.initEventSent = !0);
          }
          var _ = function r(n) {
            try {
              if (!TRC.dupCheckerApi.dupCheckerConfig || !n) return;
              var t;
              if (v(), m(TRC.dupCheckerApi.dupCheckerConfig)) {
                var u = c(n.res, e);
                if (0 === u.length) return;
                o(u);
                var l = h(TRC.dupCheckerApi.dupCheckerConfig);
                l.length > 0 && (a(l), window.__tb_UrlsFromRes && window.__tb_UrlsFromRes.length > 0 && window.__tb_publisherItemSelectors && window.__tb_publisherItemSelectors.length > 0 && i());
              }
            } catch (e) {
              __trcError("Error in dup checker handleDupChecker: ".concat(e.message));
            }
          };
          function k() {
            if (!TRC.dupCheckerApi.dupCheckerConfig) {
              var e = r();
              e && (TRC.dupCheckerApi.dupCheckerConfig = e, R(e));
            }
          }
          var g = function e() {
              TRC.dupCheckerApi.moduleInitialized || (k(), TRC.listen("trcResponseHandled", _), TRC.dupCheckerApi.moduleInitialized = !0);
            },
            T = function e(r) {
              try {
                TRC.dupCheckerApi.config = r, window.TRCImpl ? g() : TRC.EventsAPI.listen("trcImplAvailable", function () {
                  return g();
                });
              } catch (e) {
                __trcError("Error in dup checker module initialization: ".concat(e.message));
              }
            };
          TRC.dupCheckerApi = {
            initDupChecker: T
          }, window._trcIsUTactive && (TRC.dupCheckerApi.unitTestHelper = {
            getPublisherSelectors: h,
            getResponseUrls: c,
            setResponseUrls: o,
            checkDupRates: t,
            setUrlsToCheckDups: a,
            canDupCheckerRun: m
          });
        }(), TRC.DynamicModulesHooks = TRC.DynamicModulesHooks || [], TRC.DynamicModulesHooks.push({
          type: "publisher-start",
          callback: TRC.dupCheckerApi.initDupChecker
        });
      } catch (e) {}
      try {
        /*! 20230816-2-RELEASE */

        function _toConsumableArray(r) {
          return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(r, e) {
          if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, e);
            var n = Object.prototype.toString.call(r).slice(8, -1);
            return "Object" === n && r.constructor && (n = r.constructor.name), "Map" === n || "Set" === n ? Array.from(r) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(r, e) : void 0;
          }
        }
        function _iterableToArray(r) {
          if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }
        function _arrayWithoutHoles(r) {
          if (Array.isArray(r)) return _arrayLikeToArray(r);
        }
        function _arrayLikeToArray(r, e) {
          (null == e || e > r.length) && (e = r.length);
          for (var n = 0, t = new Array(e); n < e; n++) t[n] = r[n];
          return t;
        }
        !function () {
          var r = function r(n, t) {
              var o = n && n.template && t[n.template],
                a,
                l;
              return {
                region: e(n, o, "r"),
                link: e(n, o, "l")
              };
            },
            e = function r(e, t, o) {
              var a = {
                r: "[data-tb-region-item]",
                l: "[data-tb-link]"
              };
              return e && e[o] ? n(e[o]) : t && t[o] ? n(t[o]) : a[o];
            },
            n = function r(e) {
              return e.split(",")[0];
            },
            t = function e() {
              var n = "hp-dynamic-modules-exclude-urls-config-".concat(TRC.publisherId);
              if (n && TRCImpl.global && TRCImpl.global[n]) return TRC.util.merge({}, TRCImpl.global[n], {
                version: 1
              });
              if ((n = "hp4u-configuration-".concat(TRC.publisherId)) && TRCImpl.global && TRCImpl.global[n]) {
                var t = TRCImpl.global[n],
                  o = t.allowedUrls,
                  a = t.ex_preload_key,
                  l = t.regions,
                  i = t.templates,
                  u = [];
                return l && (u = l.filter(function (r) {
                  return r.ex;
                }).reduce(function (e, n) {
                  var t = n.r,
                    o = n.ex,
                    a = n.i && n.i[0],
                    l = r(a, i),
                    u = "".concat(t, " ").concat(l.region, " ").concat(l.link);
                  return [].concat(_toConsumableArray(e), [{
                    includedIndexes: o,
                    container: u
                  }]);
                }, [])), {
                  allowedUrls: o,
                  preLoadKey: a,
                  selectors: u
                };
              }
            },
            o = function r(e) {
              e.runOnce && (TRC.hasExcludeRanOnce = !0);
            },
            a = function r(e) {
              var n = TRCImpl.global["rbox-item-exclusion-cap-HP"] || 30;
              e && e.splice(n);
            },
            l = function r(e) {
              return e.filter(function (r, e, n) {
                return n.indexOf(r) === e;
              });
            },
            i = function r(e, n) {
              var t = [];
              return n.filter(function (r) {
                return r[e];
              }).map(function (r) {
                return r[e];
              }).forEach(function (r) {
                t = t.concat(r);
              }), (t = l(t)).length > 0 && a(t), t;
            },
            u = function r(e) {
              var n = [],
                t = e.selectors,
                o = e.version;
              return t.forEach(function (r) {
                var e = r.excludedIndexes,
                  t = r.includedIndexes,
                  a = r.container,
                  i,
                  u = Array.prototype.slice.call(document.querySelectorAll(a)).reduce(function (r, e) {
                    return e && e.href ? [].concat(_toConsumableArray(r), [e.href]) : r;
                  }, []),
                  c = l(u);
                1 === o ? e && (c = c.filter(function (r, n) {
                  return -1 === e.indexOf(n);
                })) : c = t ? c.filter(function (r, e) {
                  return t.indexOf(e) > -1;
                }) : [], n = [].concat(_toConsumableArray(n), _toConsumableArray(c));
              }), n = l(n), a(n), n;
            },
            c = function r(e) {
              return e = e.map(function (r) {
                return TRCImpl.urlPreNormalizer("item-id", r);
              });
            },
            s = function r() {
              var e = ["h"];
              return !(e && e.length && -1 === e.indexOf(TRC.listOrigin.getSource()));
            },
            d = function r(e) {
              if (!e) return !0;
              if (0 === e.length) return !0;
              var n = window.location.hostname + window.location.pathname;
              return -1 !== e.indexOf(n);
            },
            f = function r() {
              if (!s()) return !1;
              TRC.excludeUrlsApi.initEventSent || (TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent("hp4u-excludeUrl", "module initialized", null, !0), TRC.excludeUrlsApi.initEventSent = !0);
            },
            p = function r(e) {
              var n = t(),
                a;
              if ((TRC.listen("trcResponseHandled", f), n) && d(n.allowedUrls)) {
                var l;
                if ((l = n.preLoadKey ? i(n.preLoadKey, TRC._taboolaClone) : u(n)).length > 0) {
                  var s = c(l);
                  s && (e.ex = s);
                }
                o(n);
              }
              return e;
            },
            m = function r(e) {
              try {
                return TRC.hasExcludeRanOnce ? e : p(e);
              } catch (r) {
                return __trcError("Error in exclude URLs dynamic module ".concat(r.message)), null;
              }
            };
          TRC.excludeUrlsApi = {
            initExcludeUrls: m,
            handleExcludeUrls: p
          };
        }(), TRC.DynamicModulesHooks = TRC.DynamicModulesHooks || [], TRC.DynamicModulesHooks.push({
          type: "normalize-request-param",
          callback: TRC.excludeUrlsApi.initExcludeUrls
        });
      } catch (e) {}
      try {
        /*! 20230816-2-RELEASE */

        function _typeof(e) {
          "@babel/helpers - typeof";

          return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          })(e);
        }
        function _slicedToArray(e, t) {
          return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(e, t) {
          if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
          }
        }
        function _arrayLikeToArray(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
          return a;
        }
        function _iterableToArrayLimit(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var a = [],
              r = !0,
              i = !1,
              o,
              s;
            try {
              for (n = n.call(e); !(r = (o = n.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
            } catch (e) {
              i = !0, s = e;
            } finally {
              try {
                r || null == n["return"] || n["return"]();
              } finally {
                if (i) throw s;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(e) {
          if (Array.isArray(e)) return e;
        }
        !function () {
          function e(e) {
            e ? setTimeout(function (e) {
              var t = e[TRC.HPSwap.Config.Fields.region],
                n = document.querySelector(t),
                a;
              n && Array.prototype.slice.call(n.querySelectorAll(".tbl_blur")).forEach(function (e) {
                e.classList.remove("tbl_blur");
              });
            }, 0, e) : TRC.HPSwap.Blur.blurActive && (TRC.HPSwap.Blur.timeoutID && clearTimeout(TRC.HPSwap.Blur.timeoutID), TRC.HPSwap.Blur.blurActive = !1, setTimeout(function () {
              var e;
              Array.prototype.slice.call(document.querySelectorAll(".tbl_blur")).forEach(function (e) {
                e.classList.remove("tbl_blur");
              });
            }, 0));
          }
          function t() {
            var e = this;
            this.isBlurredAllowed() && (this.settings = TRC.HPSwap.swapConfig.blur, setTimeout(function () {
              e.createBlurStyle(), e.applyBlur(), e.setTimer();
            }, 0));
          }
          function n() {
            var e = TRC.HPSwap.swapConfig.blur;
            return !!e && !(e.debug && !TRC.HPSwap.Utils.isBlurDebugMode()) && 0 === TRC.blocker.getBlockedState();
          }
          function a() {
            var e = document.createElement("style");
            e.id = "tblBlur";
            var t = this.settings.size || "10px",
              n = this.settings.opacity || "0.2";
            e.textContent = ".tbl_blur {filter: blur(".concat(t, ");-webkit-filter:blur(").concat(t, ");opacity:").concat(n, ";}"), document.getElementsByTagName("head")[0].appendChild(e);
          }
          function r() {
            var e = [],
              t = TRC.HPSwap.swapConfig.regions,
              n = TRC.HPSwap.Config,
              a = n.Fields,
              r = n.DefaultMapping;
            t.forEach(function (t) {
              var n = t[a.region],
                i = t[a.blur];
              if (i) {
                var o = [],
                  s;
                if ((t[a.item] || [r]).forEach(function (e) {
                  var t = "".concat(n, " ").concat(e[a.region] ? e[a.region] : r[a.region]);
                  o = o.concat(Array.prototype.slice.call(document.querySelectorAll(t)));
                }), i && t[a.partial]) {
                  var l = t[a.partial],
                    c = o.filter(function (e, t) {
                      return l.indexOf(t) > -1;
                    });
                  e = e.concat(c);
                } else e = e.concat(o);
              }
            }), e.forEach(function (e) {
              e.classList.add("tbl_blur");
            }), TRC.HPSwap.Blur.blurActive = !0;
          }
          function i() {
            var t = parseInt(this.settings.timeout, 10) || 4;
            TRC.HPSwap.Blur.timeoutID = setTimeout(function () {
              var t;
              if (TRC.HPSwap.Blur.timedOut = !0, document.querySelectorAll(".tbl_blur").length > 0) {
                e();
                var n = "timed out before items were swapped";
                TRC.HPSwap.Events.sendError(null, TRC.HPSwap.Config.ErrorType.blurTimeoutBeforeSwap, n), TRC.HPSwap.Events.writeConsole(n);
              }
            }, 1e3 * t);
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Blur = TRC.HPSwap.Blur || {
            removeBlur: e,
            initBlur: t,
            isBlurredAllowed: n,
            createBlurStyle: a,
            applyBlur: r,
            setTimer: i,
            blurActive: !1,
            timeoutID: void 0
          };
        }(), function () {
          var e = function e(t) {
              var n = TRC.HPSwap.Utils,
                a = "img",
                r = TRC.HPSwap.swapConfig.ex_image_selector;
              r && r.forEach(function (e) {
                a += ":not(".concat(e, ")");
              });
              var i = n.queryItems(t, a),
                o = n.queryItems(t, "picture"),
                s;
              return i.filter(function (e) {
                return !e.closest("picture");
              }).length + o.length;
            },
            t = function e(t, n, a) {
              var r = TRC.HPSwap.Events;
              return n.isDomValid = !1, n.message = t, r.sendError(n.recommendation.placement, a, t), n;
            },
            n = function n(a) {
              var r = a.recommendation,
                i = TRC.HPSwap,
                o = i.Utils,
                s = i.Config,
                l = s.Fields,
                c = s.ElementType,
                p = s.ErrorType,
                u,
                d = C(l.image, a).itemElement,
                m = r.thumbnail;
              if (TRC.HPSwap.swapConfig.atomic_swap_check) {
                var f = e(a.elem);
                if (0 === d.length) return 0 === f ? a : t("Found images but no mapping was set", a, p.missingImageMapping);
                if (f > 1) return t("Found two images for swapping which is not supported", a, p.multipleImages);
                if (!m) return t("Missing image in recommendation", a, p.cardFailure);
              } else if (0 === d.length) return a;
              var g = d[0],
                w;
              return o.validateDomElement(c.Image, g) ? (a.imgElem = g, a.thumbnail = m, a) : t("Found image mapping but it was mapped to incorrect image element", a, p.incorrectImageMapping);
            },
            a = function e(t) {
              var n = TRC.HPSwap.Config.Fields;
              return i(t, {
                fieldType: n.title,
                trcField: "title",
                isMandatory: !0
              });
            },
            r = function e(t) {
              var n = TRC.HPSwap.Config.Fields;
              return i(t, {
                fieldType: n.description,
                trcField: "description",
                isMandatory: !1
              });
            },
            i = function e(t, n) {
              var a = t.message,
                r = t.isDomValid,
                i = t.recommendation,
                o = t.arrActions,
                s = n.fieldType,
                l = n.trcField,
                c = n.isMandatory,
                p = TRC.HPSwap.Utils,
                u,
                d = C(s, t).itemElement;
              return d && i[l] ? o.push(function (e, t) {
                TRC.dom.setContentToElement(e, t), p.markAsSwapped(e);
              }.bind(null, d, i[l])) : c && (a += "Missing ".concat(l, d ? " in recommendation," : " element,"), r = !1), TRC.util.merge({}, t, {
                message: a,
                isDomValid: r,
                arrActions: o
              });
            },
            o = function e(t) {
              var n = t.message,
                a = t.isDomValid,
                r = t.recommendation,
                i = t.rboxObj,
                o = t.regionMap,
                s = t.arrActions,
                l = TRC.HPSwap.Config,
                c = l.Fields,
                p = l.ElementType,
                u = TRC.HPSwap.Utils,
                d,
                m = C(c.link, t).itemElement;
              return m && m.length > 0 ? m.forEach(function (e) {
                var t;
                e && u.validateDomElement(p.Anchor, e) && s.push(function (e, t, n, a) {
                  TRC.HPSwap.Events.addClickEvent(e, t, n, a), u.setAttributeIfExists(e, "title", t.title), u.markAsSwapped(e);
                }.bind(null, e, r, i, o));
              }) : (n += "Missing link elements,", a = !1), TRC.util.merge({}, t, {
                message: n,
                isDomValid: a,
                arrActions: s
              });
            },
            s = function e(t) {
              var n = TRC.HPSwap.Config.Fields;
              return i(t, {
                fieldType: n.author,
                trcField: "author",
                isMandatory: !1
              });
            },
            l = function e(t) {
              var n = t.recommendation,
                a = t.slotsTemplateOverrideTags,
                r = t.arrActions,
                i = TRC.HPSwap.Config.Fields,
                o = TRC.HPSwap.Utils,
                s = o.getRegionItemMapping(a, i.category),
                l,
                c = C(i.category, t).itemElement;
              if (c) if (n.category) {
                var p = n.category.split("//");
                if (p.length > 0 && r.push(function (e, t) {
                  TRC.dom.setContentToElement(e, t[t.length - 1]), o.markAsSwapped(e);
                }.bind(null, c, p)), 1 === c.nodeType && "A" === c.nodeName) {
                  var u = "".concat(window.location.origin, "/").concat(n.category, "#tbla-swap");
                  r.push(function (e, t) {
                    e.setAttribute("href", t), o.markAsSwapped(e);
                  }.bind(null, c, u));
                }
              } else {
                var d = i.category,
                  m = i.defaultValue,
                  f = TRC.HPSwap.swapConfig[d];
                if (f && f[m] || s[m]) {
                  var g;
                  g = s[m] ? a[d][m] : f[m];
                  var w = o.getDefaultValue(n, g);
                  w && r.push(function (e, t) {
                    TRC.dom.setContentToElement(e, t), o.markAsSwapped(e);
                  }.bind(null, c, w));
                } else r.push(function (e) {
                  e.setAttribute("style", "display: none !important;");
                }.bind(null, c));
              }
              return TRC.util.merge({}, t, {
                arrActions: r
              });
            },
            c = function e(t) {
              var n = t.message,
                a = t.isDomValid,
                r = t.recommendation,
                i = t.arrOptional,
                o = t.arrActions,
                s = TRC.HPSwap.Config,
                l = s.Fields,
                c = s.Hooks,
                p = s.ErrorType,
                u = TRC.HPSwap,
                d = u.Utils,
                m = u.Events,
                f = u.DateFormat,
                g = C(l.date, t),
                w = g.useDefaultMapping,
                S = g.itemElement;
              return S && (r["published-date"] || r["last-modified"]) ? o.push(function (e, t) {
                var a;
                m.executeSwapHook(c.dateScript, !0, e, t) || setTimeout(function () {
                  if (TRC.HPSwap.swapConfig.date_config) try {
                    var a = f.formatDate(t["published-date"], TRC.HPSwap.swapConfig.date_config, t["last-modified"]);
                    TRC.dom.setContentToElement(e, a);
                  } catch (e) {
                    m.sendError(t.placement, p.cardFailure, "failed to display date format: ".concat(n));
                  } else d.dateFormatISO(t, e);
                }, 0), d.markAsSwapped(e);
              }.bind(null, S, r)) : (n += S ? "Missing date in recommendation," : "Missing date elements,", a = i && i.indexOf(l.date) > -1 || w), TRC.util.merge({}, t, {
                message: n,
                isDomValid: a,
                arrActions: o
              });
            },
            p = function e(t) {
              var n = t.slotsTemplateOverrideTags,
                a = t.elem,
                r = t.arrActions,
                i = n[TRC.HPSwap.Config.Fields.hideElement],
                o;
              i && TRC.HPSwap.Utils.queryItems(a, i).forEach(function (e) {
                r.push(function (e) {
                  e.setAttribute("style", "display: none !important;");
                }.bind(null, e));
              });
              return TRC.util.merge({}, t, {
                arrActions: r
              });
            },
            u = function e(t) {
              var n = t.arrActions,
                a = t.nonDefaultAttrSelectors,
                r = t.recommendation;
              return Object.keys(a).forEach(function (e) {
                var t = e.replace(/^data-tb-/, ""),
                  i = a[e],
                  o = r[t];
                o && n.push(function (e) {
                  TRC.dom.setContentToElement(e, o), TRC.HPSwap.Utils.markAsSwapped(e);
                }.bind(null, i, o));
              }), TRC.util.merge({}, t, {
                arrActions: n
              });
            },
            d = function e(t) {
              var n = t.elem,
                a = t.recommendation,
                r = t.arrActions,
                i = TRC.HPSwap.Config.ErrorType,
                o = TRC.HPSwap,
                s = o.Events,
                l = o.IconsFormat,
                c = TRC.HPSwap.swapConfig.icons_config;
              return c && r.push(function (e, t) {
                setTimeout(function () {
                  try {
                    l.formatIcons(n, t, c);
                  } catch (e) {
                    s.sendError(t.placement, i.cardFailure, "failed to manipulate icons in this card: ".concat(e.message));
                  }
                }, 0);
              }.bind(null, n, a)), TRC.util.merge({}, t, {
                arrActions: r
              });
            },
            m = function e(t) {
              var n = t.elem,
                a = t.recommendation,
                r = t.arrActions,
                i = TRC.HPSwap.Events,
                o = TRC.HPSwap.Config.Hooks;
              return r.push(function (e, t) {
                i.executeSwapHook(o.postCardScript, !0, e, t);
              }.bind(null, n, a)), TRC.util.merge({}, t, {
                arrActions: r
              });
            };
          function f(e) {
            var t = TRC.HPSwap,
              n = t.Events,
              a = t.Utils,
              r = t.Config,
              i = r.Counters,
              o = e.arrActions;
            return o.push(function (e) {
              var t = e.elem,
                o = e.recommendation,
                s = e.rboxObj,
                l = e.index,
                c = e.regionMap,
                p = e.expectedSwappedCards,
                u;
              a.setSwappedCardData(t, o), a.markSwappedCardAndRegion(t, o, {
                regionMap: c,
                expectedSwappedCards: p
              }), g(c), n.pushHppImpressionData(s, o, l), s.boxes.push(t), 1 === s.boxes.length && (s.setTargetItemsList(s.fullEventItemsHash, s.response.trc["video-list"].video, "a"), n.sendAvailable(s)), r.Counters.swappedCards++, i.swappedCards === i.totalRecs - i.snoozedCards && i.allRegionSwapped && (n.addPerformanceMark("allItemsSwapped"), n.sendSuccess(), n.writeConsole("All ".concat(i.totalRecs, " recommendations have been rendered"))), a.injectSEOTag(t);
            }.bind(null, e)), TRC.util.merge({}, e, {
              arrActions: o
            });
          }
          function g(e) {
            if (e[TRC.HPSwap.Config.Fields.blur]) {
              var t = e[TRC.HPSwap.Config.Fields.region],
                n = document.querySelector(t);
              if (!n) return !1;
              n.dataset.regionSwapped && TRC.HPSwap.Blur.removeBlur(e);
            }
          }
          var w = function e() {
              for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
              return function (e) {
                return n.reduce(function (e, t) {
                  return e.isDomValid ? t(e) : e;
                }, e);
              };
            },
            S = function e(t) {
              var n = {};
              return TRC.HPSwap.swapConfig.additional_tags && TRC.HPSwap.swapConfig.additional_tags.forEach(function (e) {
                var a = Array.prototype.slice.call(t.querySelectorAll("[".concat(e, "]")));
                if (1 === a.length) {
                  var r = _slicedToArray(a, 1);
                  n[e] = r[0];
                } else a.length > 1 && (n[e] = a);
              }), n;
            };
          function C(e, t) {
            var n = TRC.HPSwap.Config.Fields,
              a = TRC.HPSwap.Utils,
              r = t.elem,
              i = t.slotsTemplateOverrideTags,
              o = a.getRegionItemSelector(i, e),
              s,
              l;
            return {
              useDefaultMapping: !i[e],
              itemElement: s = e === n.link || e === n.image ? a.queryItems(r, o) : r.querySelector(o)
            };
          }
          function T(e) {
            var t = e.rboxObj,
              i = e.regionItem,
              g = e.regionItemMap,
              C = e.recommendation,
              T = e.i,
              R = e.regionMap,
              v = e.expectedSwappedCards,
              h = e.regionElem,
              P = TRC.HPSwap,
              y = P.Events,
              E = P.Utils,
              b = P.Config,
              H = P.Card,
              I = P.ImageUtils,
              _ = P.Region;
            try {
              var M = b.Fields,
                A = {
                  arrActions: [],
                  isDomValid: !0,
                  message: "Failed swap content:",
                  arrOptional: g[M.optional],
                  nonDefaultAttrSelectors: S(i),
                  inBlurRegion: !!R[M.blur],
                  slotsTemplateOverrideTags: g,
                  recommendation: C,
                  elem: i,
                  rboxObj: t,
                  regionMap: R,
                  index: T,
                  expectedSwappedCards: v,
                  regionElem: h
                },
                D = A = w(n, a, o, c, l, s, r, u, p, d, m, f)(A),
                O = D.isDomValid,
                k = D.thumbnail,
                N = D.arrActions,
                F = D.message,
                U = D.inBlurRegion;
              E.isCardSwappable(O, U) ? (k ? I.executeImageSource(A) : H.executeSwap(N), y.addPerformanceMark("firstCardSwapped"), _.swappableCards[R.p].isTimedOut && y.addPerformanceMark("firstTimeOutCardSwapped")) : O ? y.writeConsole("blur timed out") : y.sendError(t.originalPlacement, b.ErrorType.cardFailure, "failed to render card number ".concat(T, ": ").concat(F));
            } catch (e) {
              y.sendError(t.originalPlacement, b.ErrorType.cardFailure, "failed to render card number ".concat(T, ": ").concat(e.message));
            }
          }
          function R(e) {
            e.forEach(function (e) {
              e();
            });
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Card = TRC.HPSwap.Card || {
            swapCard: T,
            executeSwap: R,
            findNonDefaultAdditionalTagElements: S,
            getItemElement: C
          };
        }(), function () {
          function e() {
            return !!TRC.HPSwap.swapConfig && "h" === TRC.listOrigin.getSource();
          }
          function t(e) {
            if (e) {
              var t = e[TRC.HPSwap.Config.Fields.item];
              return t && t.length > 0 ? t.map(function (e) {
                return e.template ? TRC.HPSwap.swapConfig.templates[e.template] : e;
              }) : [{}];
            }
          }
          function n(e, t) {
            try {
              var n = e;
              return n.regions.forEach(function (e, a) {
                "b" in e && delete e.b, n.regions[a] = TRC.util.merge({}, t[e.n], n.regions[a]);
              }), n;
            } catch (e) {
              var a = "could not combine configurations";
              TRC.HPSwap.Events.sendError(null, TRC.HPSwap.Config.ErrorType.combinedConfigFailure, a);
            }
          }
          function a() {
            var e = TRC.HPSwap.Config.getConfig.bind(this),
              t = "hp4u-configuration-".concat(TRC.publisherId);
            TRC.HPSwap.swapConfig = e(t), TRC.HPSwap.swapConfig && (TRC.HPSwap.swapConfig.alternative_domain = !0);
          }
          function r() {
            var e;
            TRC.HPSwap.swapConfig.regions.forEach(function (e, n) {
              TRC.HPSwap.swapConfig.regions[n][TRC.HPSwap.Config.Fields.item] = t(e);
            });
          }
          function i() {
            if (a(), !TRC.HPSwap.swapConfig || !TRC.HPSwap.swapConfig.regions) return null;
            r();
          }
          function o(e) {
            return TRC.HPSwap.globalConfig && TRC.HPSwap.globalConfig[e] ? TRC.HPSwap.globalConfig[e] : null;
          }
          function s(e) {
            return o(e);
          }
          function l(e) {
            if (!document.getElementById(e)) {
              var t = document.createElement("div");
              t.id = e, t.style.display = "none", document.body.appendChild(t);
            }
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Config = {
            isSwapEnabled: e,
            initSwapConfig: i,
            getConfig: o,
            createContainer: l,
            handleSwapConfig: a,
            handleCombinedConfig: n,
            getScript: s
          }, TRC.HPSwap.Config.ElementType = {
            Image: "image",
            Picture: "picture",
            Anchor: "anchor"
          }, TRC.HPSwap.Config.Fields = {
            mode: "m",
            placement: "p",
            name: "n",
            newsroomName: "nn",
            region: "r",
            item: "i",
            batch: "batch",
            title: "t",
            image: "img",
            link: "l",
            category: "c",
            author: "a",
            date: "d",
            selector: "s",
            year: "y",
            videos: "v",
            hoursDifference: "hd",
            header: "h",
            partial: "partial",
            css: "css",
            deleteValue: "d",
            deleteAttributes: "attr",
            defaultValue: "d",
            dimensions: "size",
            hideElement: "he",
            description: "desc",
            optional: "o",
            blur: "b",
            level: "l"
          }, TRC.HPSwap.Config.Hooks = {
            postCardScript: "pc",
            preRegionScript: "pr",
            preSwapScript: "ps",
            dateScript: "date",
            normalizeImage: "image"
          }, TRC.HPSwap.Config.ErrorType = {
            regionFailure: "failedToRenderRegion",
            cardFailure: "failedToRenderCard",
            inValidPublisherRegion: "inValidPublisherRegion",
            noItemsToRender: "noItemsToRender",
            postScriptFailure: "postScriptFailure",
            preRegionFailure: "preRegionFailure",
            preSwapScriptFailure: "preSwapFailure",
            moreCardsThanRecs: "moreCardsThanRecs",
            blurTimeoutBeforeSwap: "blurTimeoutBeforeSwap",
            combinedConfigFailure: "combinedConfigFailure",
            dupSkippedSwap: "dupSkippedSwap",
            cloudinaryTimeout: "cloudinaryTimeout",
            imageLoadingFailure: "imageLoadingFailure",
            multipleImages: "multipleImages",
            incorrectImageMapping: "incorrectImageMapping",
            missingImageMapping: "missingImageMapping"
          }, TRC.HPSwap.Config.SuccessType = {
            allRecsSwapped: "allRecsSwapped"
          }, TRC.HPSwap.Config.SocialQueryParams = {
            facebook: [{
              key: "u",
              value: "url"
            }],
            twitter: [{
              key: "url",
              value: "url"
            }, {
              key: "text",
              value: "title"
            }]
          }, TRC.HPSwap.Config.DefaultMapping = {
            r: "[data-tb-region-item]",
            t: "[data-tb-title]",
            l: "[data-tb-link]",
            img: "[data-tb-thumbnail]",
            c: {
              s: "[data-tb-category]"
            },
            d: "[data-tb-date]",
            a: "[data-tb-author]",
            desc: "[data-tb-description]"
          }, Object.freeze(TRC.HPSwap.Config.Fields), Object.freeze(TRC.HPSwap.Config.ErrorType), Object.freeze(TRC.HPSwap.Config.SuccessType), Object.freeze(TRC.HPSwap.Config.SocialQueryParams), Object.freeze(TRC.HPSwap.Config.DefaultMapping), Object.freeze(TRC.HPSwap.Config.Hooks), Object.freeze(TRC.HPSwap.Config.ElementType), TRC.HPSwap.Config.Counters = "object" === _typeof(TRC.HPSwap.Counters) ? TRC.HPSwap.Counters : {
            swappedRegions: {},
            totalRecs: 0,
            swappedCards: 0,
            allRegionSwapped: !1,
            snoozedRegions: {},
            snoozedCards: 0,
            numOfCardsInContainer: {}
          };
        }(), function () {
          var e = function e() {
              var t = new Date();
              try {
                var n = t.toLocaleString(o, {
                    month: "numeric",
                    timeZone: "America/New_York"
                  }),
                  a = t.toLocaleString(o, {
                    day: "numeric",
                    timeZone: "America/New_York"
                  }),
                  r = t.toLocaleString(o, {
                    year: "numeric",
                    timeZone: s
                  }),
                  i = "".concat(a, "/").concat(n, "/").concat(r),
                  l;
                return "".concat(t.getDate(), "/").concat(t.getMonth() + 1, "/").concat(t.getFullYear()) === i;
              } catch (e) {
                return !1;
              }
            },
            t = {
              default: "ddd mmm dd yyyy HH:MM:ss",
              shortDate: "m/d/yy",
              mediumDate: "mmm d, yyyy",
              longDate: "mmmm d, yyyy",
              fullDate: "dddd, mmmm d, yyyy",
              shortTime: "h:MM TT",
              mediumTime: "h:MM:ss TT",
              longTime: "h:MM:ss TT Z",
              isoDate: "yyyy-mm-dd",
              isoTime: "HH:MM:ss",
              isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
              isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            },
            n = {
              dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            r = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            i = /[^-+\dA-Z]/g,
            o = "en-US",
            s,
            l = e();
          function c(e) {
            o = e.locale || "en-US", s = e.timezone || void 0;
          }
          function p(e) {
            return parseInt(e.toLocaleString(o, {
              month: "numeric",
              timeZone: s
            }), 10);
          }
          function u(e, t) {
            return T(e.toLocaleString(o, {
              month: t,
              timeZone: s
            }));
          }
          function d(e) {
            return parseInt(e.toLocaleString(o, {
              day: "numeric",
              timeZone: s
            }), 10);
          }
          function m(e, t) {
            return T(e.toLocaleString(o, {
              weekday: t,
              timeZone: s
            }));
          }
          function f(e) {
            return parseInt(e.toLocaleString(o, {
              hour: "numeric",
              hour12: !1,
              timeZone: s
            }), 10);
          }
          function g(e) {
            return parseInt(e.toLocaleString(o, {
              minute: "numeric",
              timeZone: s
            }), 10);
          }
          function w(e) {
            return parseInt(e.toLocaleString(o, {
              second: "numeric",
              timeZone: s
            }), 10);
          }
          function S(e) {
            return parseInt(e.toLocaleString(o, {
              year: "numeric",
              timeZone: s
            }), 10);
          }
          function C(e, t) {
            for (e = String(e), t = t || 2; e.length < t;) e = "0".concat(e);
            return e;
          }
          function T(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }
          function R(e) {
            if (e && 0 !== parseInt(e, 10) && !isNaN(e)) return new Date(1e3 * parseInt(e, 10));
          }
          function v(e, t, n) {
            return !!t.useModified && (!(t.minutesDiff && !isNaN(t.minutesDiff)) || h(n, e) > t.minutesDiff);
          }
          function h(e, t) {
            var n = Math.abs(t - e);
            return Math.floor(n / (1e3 * 60));
          }
          function P(e, o, s) {
            c(o);
            var T = R(e),
              h = s ? R(s) : void 0,
              P = h && v(T, o, h),
              y = P ? h : T,
              E,
              b = o.format ? String(t[o.format] || o.format) : String(t.default);
            "UTC:" === b.slice(0, 4) && (b = b.slice(4), E = !0);
            var H = E ? "getUTC" : "get",
              I = l ? d(y) : y["".concat(H, "Date")](),
              _ = y["".concat(H, "Day")](),
              M = l ? p(y) : y["".concat(H, "Month")](),
              A = l ? S(y) : y["".concat(H, "FullYear")](),
              D = l ? f(y) : y["".concat(H, "Hours")](),
              O = l ? g(y) : y["".concat(H, "Minutes")](),
              k = l ? w(y) : y["".concat(H, "Seconds")](),
              N = y["".concat(H, "Milliseconds")](),
              F = E ? 0 : y.getTimezoneOffset(),
              U = {
                d: I,
                dd: C(I),
                ddd: l ? m(y, "short") : n.dayNames[_],
                dddd: l ? m(y, "long") : n.dayNames[_ + 7],
                m: l ? M : M + 1,
                mm: C(l ? M : M + 1),
                mmm: l ? u(y, "short") : n.monthNames[M],
                mmmm: l ? u(y, "long") : n.monthNames[M + 12],
                yy: String(A).slice(2),
                yyyy: A,
                h: D % 12 || 12,
                hh: C(D % 12 || 12),
                H: D,
                HH: C(D),
                M: O,
                MM: C(O),
                s: k,
                ss: C(k),
                l: C(N, 3),
                L: C(N > 99 ? Math.round(N / 10) : N),
                t: D < 12 ? "a" : "p",
                tt: D < 12 ? "am" : "pm",
                T: D < 12 ? "A" : "P",
                TT: D < 12 ? "AM" : "PM",
                Z: E ? "UTC" : (String(y).match(r) || [""]).pop().replace(i, ""),
                o: (F > 0 ? "-" : "+") + C(100 * Math.floor(Math.abs(F) / 60) + Math.abs(F) % 60, 4),
                S: ["th", "st", "nd", "rd"][I % 10 > 3 ? 0 : (I % 100 - I % 10 != 10) * I % 10]
              },
              x = b.replace(a, function (e) {
                return e in U ? U[e] : e.slice(1, e.length - 1);
              });
            return P && o.updatedLabel && (x = "".concat(o.updatedLabel, " ").concat(x)), x;
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.DateFormat = {
            formatDate: P,
            localeOptionsSupported: e
          };
        }(), function () {
          var e = function e(t, n) {
              return {
                trcRecommendation: n,
                elemToHide: t["selector-to-hide"],
                elemToInsertInto: t["element-to-insert-into"],
                iconElem: t["icon-elem"],
                insertionPosition: t["insertion-position"],
                insertionConditions: t.conditions,
                placementOptions: t.placement,
                platformOptions: t.platform
              };
            },
            t = function e(t, n) {
              var a = n.insertionPosition,
                r = n.iconElem;
              t && t.insertAdjacentHTML(a, r);
            },
            n = function e(t) {
              t && t.setAttribute("style", "display: none !important;");
            },
            a = function e(t, n, a) {
              var r = n["response-field"],
                i = n["response-value"],
                o = a[r].indexOf(i) > -1,
                s = a[r] === i;
              switch (t) {
                case "contains":
                  return o;
                case "does not contain":
                  return !o;
                case "equals":
                  return s;
                case "not equals":
                  return !s;
                default:
                  return !1;
              }
            },
            r = function e(a, r, i) {
              var o = i.elemToHide,
                s = i.elemToInsertInto,
                l = a.querySelector(o),
                c = a.querySelector(s);
              if (c) if (r) {
                if (l) return;
                t(c, i);
              } else l && n(l);
            },
            i = function e(t) {
              var n = t.trcRecommendation,
                a = t.placementOptions,
                r = a["placement-names"],
                i = a.operator;
              if (0 === r.length) return !0;
              var o = r.indexOf(n.placement) > -1;
              return "equals" === i ? o : !o;
            },
            o = function e(t) {
              var n = t.platformOptions,
                a = TRC.dom.isSmartPhone() ? "PHON" : "DESK";
              return "ALL" === n || n === a;
            },
            s = function e(t, n) {
              var s = n.insertionConditions,
                l = n.trcRecommendation;
              if (i(n) && o(n)) {
                var c = s.reduce(function (e, t) {
                  return e && l[t["response-field"]] && a(t["match-operator"], t, l);
                }, !0);
                r(t, c, n);
              }
            },
            l = function t(n, a, r) {
              r.rules && r.rules.forEach(function (t) {
                if (t.conditions && t.conditions.length > 0) {
                  var r = e(t, a);
                  s(n, r);
                }
              });
            };
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.IconsFormat = {
            formatIcons: l
          };
        }(), function () {
          var e = ["srcset", "data-srcset", "loading"],
            t = 500;
          function n(e, t) {
            var n = "f_jpg,q_auto,c_fill,g_faces:auto,e_sharpen";
            e.width > 0 && (n += ",w_".concat(e.width)), e.height > 0 && (n += ",h_".concat(e.height));
            var a = TRC.imageUtils.getImageUrlBasedOnCloudinaryApi(t, n);
            return "".concat(a, "?hp4u=1");
          }
          function a(t) {
            e.forEach(function (e) {
              return t.removeAttribute(e);
            });
            var n = TRC.HPSwap.swapConfig.remove_image_attributes;
            n && n.forEach(function (e) {
              return t.removeAttribute(e);
            });
          }
          function r(e) {
            var t, n;
            if (e.clientWidth && e.clientHeight) t = parseInt(e.clientWidth, 10), n = parseInt(e.clientHeight, 10);else {
              var a = e.getBoundingClientRect();
              t = parseInt(a.width, 10), n = parseInt(a.height, 10);
            }
            return {
              width: t,
              height: n
            };
          }
          function i(e) {
            var i = TRC.HPSwap.Config.Hooks,
              o = TRC.HPSwap,
              l = o.Events,
              c = o.Config,
              u = o.Utils,
              d = e.imgElem,
              m = e.arrActions,
              f = e.rboxObj,
              g = e.inBlurRegion,
              w = e.recommendation,
              S = e.thumbnail,
              C = TRC.HPSwap.swapConfig.disable_cloudinary,
              T = r(d),
              R = l.executeSwapHook(i.normalizeImage, !1, S, T, d);
            R && u.isValidURL(R) && (S = R);
            var v = C ? S : n(T, S),
              h = !1,
              P,
              y,
              E = !("IMG" === d.tagName || !d.style.backgroundImage && !d.dataset.bg);
            0 === d.children.length || E ? y = document.createElement("img") : a(y = d.cloneNode(!0));
            var b = function e(t, n, a, r, i) {
                if (!n.dataset.tblSwap) {
                  var o = TRC.HPSwap.Utils,
                    l = o.isTimedOutBlurItem,
                    c = o.markAsSwapped;
                  r && (clearTimeout(r), r = null), l(a) ? TRC.HPSwap.Events.writeConsole("blur timed out: image request", t) : (i.isBackgroundImage ? p(t, n) : s(t, n, i.dimensions), c(n), TRC.HPSwap.Card.executeSwap(m), TRC.HPSwap.Events.handleIntersection(f));
                }
              },
              H = function e(t, n, a) {
                l.sendWarning(c.ErrorType.imageLoadingFailure, "", n), l.addMessageToStack(f.placement, "executeImageSource", "imageFailed", n), a && (clearTimeout(a), a = null), I(t) && (t.src = n, t.dataset.src = n, t.dataset.source = "original", h = !0, t.onerror = null);
              },
              I = function e(t) {
                return !t.dataset.tblSwap && !h && !C;
              };
            if (!C) {
              var _ = TRC.HPSwap.swapConfig.cloudinaryTimeout,
                M = parseInt(_, 10) || t;
              P = setTimeout(function () {
                l.sendWarning(c.ErrorType.cloudinaryTimeout, "", v), l.addMessageToStack(f.placement, "executeImageSource", "cloudinary timout", v), O();
              }, M);
            }
            var A,
              D = b.bind(null, d, y, g, P, {
                isBackgroundImage: E,
                dimensions: T
              }),
              O = H.bind(null, y, S, P);
            y.addEventListener("load", D, !0), y.addEventListener("error", O, !0), y.src = v, d.alt && (y.alt = w.title), d.title && (y.title = w.title), y.dataset.src = v, y.dataset.source = C ? "original" : "cloudinary", y.dataset.cloned = "true";
          }
          function o(t) {
            var n = t.nodeName;
            if (n.match(/^(src|data-src|alt|title)$/)) return !1;
            if (-1 !== e.indexOf(n)) return !1;
            var a = TRC.HPSwap.swapConfig.remove_image_attributes;
            return !a || -1 === a.indexOf(n);
          }
          function s(e, t, n) {
            var a;
            Array.prototype.slice.call(e.attributes).forEach(function (e) {
              o(e) && t.setAttribute("id" === e.nodeName ? "data-id" : e.nodeName, e.nodeValue);
            }), "original" === t.dataset.source && c(n, t), e.parentNode.replaceChild(t, e), l(t);
          }
          function l(e) {
            var t = TRC.HPSwap,
              n = t.Utils,
              a = t.Config,
              r = e.parentNode;
            n.validateDomElement(a.ElementType.Picture, r) && setTimeout(function () {
              var e;
              Array.prototype.slice.call(r.querySelectorAll("source")).forEach(function (e) {
                r.removeChild(e);
              });
            }, 0);
          }
          function c(e, t) {
            var n, a;
            TRC.HPSwap.swapConfig.fix_ratio && (e.width / e.height > t.width / t.height ? t.style.width = "".concat(e.width, "px") : t.style.height = "".concat(e.height, "px"), t.style.objectFit = "cover");
          }
          function p(e, t) {
            e.style.backgroundImage = 'url("'.concat(t.src, '")'), e.dataset.bg = e.dataset.bg && t.src, e.alt = e.alt && t.alt, e.title = e.title && t.title;
            var n = TRC.HPSwap.swapConfig.image_data_attributes;
            n && n.split(",").forEach(function (n) {
              e.setAttribute(n, t.src);
            });
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.ImageUtils = {
            executeImageSource: i
          }, window._trcIsUTactive && (TRC.HPSwap.ImageUtils.unitestsHelpers = {
            replaceImageForRepaint: s,
            getCloudinaryUrl: n
          });
        }(), function () {
          var e = {};
          function t(e) {
            return a(e, "mapping");
          }
          function n(e) {
            return a(e, "name");
          }
          function a(e, t) {
            var n = TRC.HPSwap.Utils.getOriginalPlacement(e),
              a = TRC.HPSwap.swapRegionsConfig.find(function (e) {
                return n === e.p;
              });
            if (a) {
              if ("mapping" === t) return a;
              if ("name" === t) return a.p;
              if ("newsroom" === t) return a.r && 0 === a.r.indexOf("[data-tb-region='") && a.r.split("'")[1];
            }
          }
          function r(t) {
            var a = TRC.HPSwap,
              r = a.Events,
              s = a.Utils,
              c = a.SwapDataEventApi,
              p = c.SWAP_EVENT_FIELDS,
              d = n(t.placement),
              m,
              f = TRC.HPSwap.Config,
              g = f.Fields,
              w = f.ErrorType,
              S = f.Counters,
              C = f.Hooks,
              T = TRC.HPSwap.Blur.removeBlur;
            t.originalPlacement = s.getOriginalPlacement(t.placement);
            try {
              r.addMessageToStack(t.placement, "findRegion", "placement", t.placement);
              var R = t.response.trc["video-list"].video;
              if (!(m = l(R, t)) || !m.regionMap) return;
              if (e[d] || (e[d] = {
                cards: []
              }, i(d, t), S.totalRecs += e[d].recCount), m.regionElem) r.executeSwapHook(C.preRegionScript, !1, m.regionElem, m.regionMap), r.sendAPIEvent("swapVariant", {
                is_swap: !0
              }, !0), 1 === Object.keys(e).length ? (r.addPerformanceMark("firstCardStartSwap"), u(m.regionMap, m.regionElem, R, t)) : (2 === Object.keys(e).length && (e[d].isTimedOut = !0), setTimeout(function (e, t, n, a) {
                u(e, t, n, a);
              }, 0, m.regionMap, m.regionElem, R, t));else if (r.writeConsole("Region was not found: ".concat(t.placement, ",starting MutationObserver")), T(m.regionMap), MutationObserver) c.updatePlacementEventData(d, p.NUM_ITEMS_NOT_ON_DOM, 0), o(m.regionMap[g.region], m.regionMap, R, t);else {
                var v = "Cannot find region ".concat(d, " with the following selector: ").concat(m.regionMap[g.region]);
                r.sendError(t.originalPlacement, w.inValidPublisherRegion, v);
              }
            } catch (e) {
              r.sendError(t.originalPlacement, w.regionFailure, "failed to render region: ".concat(e.message)), __trcError("failed to render region ".concat(t.placement, ": ").concat(e.message)), m && m.regionMap && T(m.regionMap);
            }
          }
          function i(t, n) {
            e[t].recCount = n.globalTrcResponseJSON.vl.reduce(function (e, t) {
              return t.uuip === n.unifiedPlacement ? e + t.v.length : e;
            }, 0), e[t].totalPublisherCards = 0;
          }
          function o(e, t, n, a) {
            var r, i;
            new MutationObserver(function r(i, o) {
              var s = document.querySelector(e);
              s && (setTimeout(function (e, t, n, a) {
                TRC.HPSwap.Events.writeConsole("Region loaded: ".concat(a.placement)), TRC.HPSwap.Region.swapRegion(e, t, n, a);
              }, 0, t, s, n, a), o.disconnect());
            }).observe(document.body, {
              childList: !0,
              subtree: !0
            });
          }
          function s(e, t) {
            var n = TRC.HPSwap.Config.Fields,
              a = e[n.header];
            if (!t.dataset.headerSwapped && a) {
              var r = a[n.selector],
                i = t.querySelector(r);
              i && a[n.name] && (TRC.dom.setContentToElement(i, a[n.name]), t.dataset.headerSwapped = "true");
            }
          }
          function l(e, n) {
            var a = TRC.HPSwap.Config,
              r = a.Fields,
              i = a.ErrorType,
              o = a.Counters,
              s = TRC.HPSwap.Utils.getOriginalPlacement,
              l = TRC.HPSwap,
              c = l.SnoozeUtils,
              p = l.SwapDataEventApi,
              u = p.SWAP_EVENT_STATUS,
              d = t(n.placement);
            if (d) {
              var m = d[r.region],
                g = document.querySelector(m),
                w = s(n.placement),
                S = c.getSnoozedItems(n, d[r.partial]),
                C = c.isAllItemSnoozed(S);
              return 0 === e.length || C ? (d[r.blur] && TRC.HPSwap.Blur.removeBlur(d), 0 === e.length && (p.updatePlacementEventStatus(n.placement, u.EVENT_READY), TRC.HPSwap.Events.sendError(n.placement, i.noItemsToRender, "")), C && (p.updatePlacementEventStatus(n.placement, u.EVENT_READY), o.snoozedRegions[w] || (o.snoozedRegions[w] = 1)), void (g && f(n.placement))) : {
                regionMap: d,
                regionElem: g
              };
            }
          }
          function c(e, t) {
            var n = TRC.HPSwap.Config.Fields;
            try {
              if (e.trcResponse.hps) {
                var a = e.trcResponse.hps.split(","),
                  r;
                a.every(function (e) {
                  return !isNaN(e);
                }) && a.length && (t[n.partial] = a.map(Number));
              }
            } catch (e) {
              TRC.HPSwap.Events.writeConsole("failed to parse TRC slots: ".concat(e.message));
            }
            return t[n.partial];
          }
          function p(t, n, a) {
            var r = TRC.HPSwap,
              i = r.Events,
              o = r.SnoozeUtils,
              s = r.Utils,
              l = TRC.HPSwap.Config.Counters,
              c = n.snoozedItems,
              p = n.rboxObj,
              u = n.regionName,
              d = n.partial,
              m = n.regionItem,
              f = n.regionItemMap,
              g = o.isItemShouldBeSnoozed(t, c);
            if (d) {
              var w = d.filter(function (e) {
                return e === a;
              });
              if (a++, 0 === w.length) return m.dataset.tblSwapIgnore = "true", a;
            }
            return g ? (l.snoozedCards++, i.writeConsole("item ".concat(t, " for placement ").concat(p.placement, " was snoozed")), m.dataset.tblSwapIgnore = "true", s.markupDebugElement(m, "#FF1493"), a) : (e[u].cards.push({
              regionItem: m,
              i: t,
              regionItemMap: f
            }), a);
          }
          function u(t, a, r, i) {
            var o = TRC.HPSwap,
              l = o.Events,
              u = o.SnoozeUtils,
              g = o.SwapDataEventApi,
              w = TRC.HPSwap.Config,
              S = w.Fields,
              C,
              T = w.Counters.numOfCardsInContainer,
              R = g.SWAP_EVENT_FIELDS;
            try {
              var v = n(i.placement),
                h = TRC.HPSwap.Utils,
                P = h.queryItems,
                y = h.getRegionItemMapping,
                E = c(i, t),
                b = 0,
                H = u.getSnoozedItems(i, E),
                I = S.region;
              T[v] = 0;
              var _ = m(t, e[v].recCount, H),
                M = r.map(function (e) {
                  return e;
                }),
                A = {
                  snoozedItems: H,
                  rboxObj: i,
                  regionName: v,
                  partial: E
                },
                D,
                O;
              if (l.addMessageToStack(i.placement, "swapRegion", "videoList", M.length), l.addMessageToStack(i.placement, "swapRegion", "snoozedItems", H.length), l.addMessageToStack(i.placement, "swapRegion", "expectedSwappedCards", _), f(i.placement), s(t, a), 0 === e[v].cards.length && t[S.item].forEach(function (n) {
                var r = y(n, I),
                  o = P(a, r);
                e[v].totalPublisherCards += E ? E.length - H.length : o.length - H.length, _ = u.removePotentialDup(M, t, o, H, _), l.addMessageToStack(i.placement, "swapRegion", "expectedSwappedCards filter", _), l.addMessageToStack(i.placement, "swapRegion", "regionItems", o.length), o.forEach(function (e, t) {
                  A.regionItemMap = n, A.regionItem = e, b = p(t, A, b);
                }), T[v] += o.length;
              }), g.updatePlacementEventData(v, R.NUM_ITEMS_NOT_ON_DOM, T[v]), d(v, M, i, t, _), e[v].cards.length < M.length - H.length) if (l.writeConsole("Start region item mutation observer"), MutationObserver) new MutationObserver(function e(n, r) {
                t[S.item].forEach(function (e) {
                  var t = y(e, I),
                    n = P(a, "".concat(t, ":not([data-tbl-swap-started]):not([data-tbl-swap-ignore])"));
                  T[v] += n.length;
                  for (var r = 0; r < n.length; r++) if (M.length > 0) {
                    var i = n[r];
                    A.regionItemMap = e, A.regionItem = i, b = p(r, A, b);
                  }
                }), 0 !== M.length && "true" !== a.dataset.regionSwapped || r.disconnect(), g.updatePlacementEventData(v, R.NUM_ITEMS_NOT_ON_DOM, T[v]), d(v, M, i, t, _), l.handleIntersection(i);
              }).observe(a, {
                childList: !0,
                subtree: !0
              });
              a.dataset.tblSwapRegion = v, l.writeConsole("swapped region ".concat(i.placement));
            } catch (e) {
              l.sendError(i.originalPlacement, TRC.HPSwap.Config.ErrorType.regionFailure, "failed to render region: ".concat(e.message)), __trcError("failed to render region ".concat(i.placement, ": ").concat(e.message));
            }
            TRC.HPSwap.Events.handleIntersection(i);
          }
          function d(t, n, a, r, i) {
            for (; n.length > 0 && e[t].cards.length > 0;) {
              var o = n.shift();
              e[t].totalPublisherCards -= 1;
              var s = TRC.HPSwap.Request.parseRecommendation(o, a),
                l = e[t].cards.shift(),
                c = l.regionItem,
                p = l.i,
                u = l.regionItemMap;
              c.dataset.tblSwapStarted || (c.dataset.tblSwapStarted = "true", TRC.HPSwap.Card.swapCard({
                rboxObj: a,
                regionItem: c,
                regionItemMap: u,
                recommendation: s,
                i: p,
                regionMap: r,
                expectedSwappedCards: i
              }));
            }
          }
          function m(e, t, n) {
            var a = e[TRC.HPSwap.Config.Fields.partial];
            return a ? Math.min(a.length - n.length, t) : t - n.length;
          }
          function f(e) {
            var t = TRC.HPSwap.Config.Counters,
              n = TRC.HPSwap.Utils.getOriginalPlacement(e),
              a = TRC.HPSwap.Region.getRegionMappingByPlacement(n),
              r,
              i;
            Object.prototype.hasOwnProperty.call(a, "en") && !a.en || (t.swappedRegions[n] || (t.swappedRegions[n] = 1), TRC.HPSwap.swapRegionsConfig.filter(function (e) {
              return !Object.prototype.hasOwnProperty.call(e, "en");
            }).filter(function (e) {
              return !t.snoozedRegions[e.p];
            }).every(function (e) {
              return t.swappedRegions[e.p];
            }) && (t.allRegionSwapped = !0));
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Region = TRC.HPSwap.Region || {
            getRegionMappingByPlacement: t,
            getRegionValueByPlacement: a,
            swapRegion: u,
            findRegion: r,
            swappableCards: e
          };
        }(), function () {
          var e = 2,
            t = !1;
          function n() {
            var e = TRC.HPSwap,
              t = e.Events,
              n = e.Blur,
              a = e.Config,
              r = e.Utils,
              i;
            e.SwapDataEventApi.initSwapDatEvent(), t.addPerformanceMark("swapStarted"), n.initBlur(), t.initImpressionTimer(), a.createContainer(r.getContainer()), TRC.listen("preBoxRender", this.handleRboxRender), this.sendFlush(), this.handleBatches(), t.addMessageToStack("general", "initSwap", "impl version", TRC.version), t.addMessageToStack("general", "initSwap", "loader version", new Date(a.getConfig("bakeTime")));
          }
          function a() {
            var t = TRC.HPSwap.swapConfig.batchSize || e,
              n = this.getBatchRegions();
            n ? this.sendBatchReqAndFlush(n, t) : TRC.HPSwap.Events.writeConsole("no regions were found");
          }
          function r(e, t) {
            for (var n = TRC.HPSwap, a = n.Events, r = n.Config, i = 0; i < e.length;) {
              var o = e[i];
              this.sendBatchRequest(o), a.writeConsole("request sent for placement ".concat(o[r.Fields.placement])), this.setGetRegionsFlag(i), i++, this.sendFlushIfNeeded(i, t);
            }
            this.sendFlush();
          }
          function i(e) {
            0 === e && window._taboola.push({
              ad_first_request: {
                hp4uGetRegions: !0
              }
            });
          }
          function o(e, t) {
            e % t == 0 && this.sendFlush();
          }
          function s(e, t) {
            return e.isSyndicated = e["is-syndicated"] || e["is-in-network"] || e["is-native"], e.isPhoto = "photo" === e.type, e.isText = "text" === e.type, e.imageIframe = Object.prototype.hasOwnProperty.call(e, "image-iframe") && e["image-iframe"], e.tags = "string" == typeof e.tags ? TRC.text.parseCSV(e.tags) : [], e.placement = t.placement, e.mode = t.mode_name, e.itemType = e.publisher ? "sponsored" : "organic", TRC.dom.isHtmlContent(e.title) && (e.title = TRC.text.htmlUnescape(e.title)), e;
          }
          function l(n) {
            var a = TRC.HPSwap,
              r = a.Region,
              i = a.swapRegionsConfig,
              o = [],
              s = n["organic-personalization"];
            if (!t && s && s.reg) {
              if (s.reg.forEach(function (e) {
                var t = "HP ".concat(e.n),
                  n = r.getRegionMappingByPlacement(t);
                if (n) Object.prototype.hasOwnProperty.call(n, "en") && !n.en && (c(n.p), o.push(n));else {
                  var a = {
                    p: t,
                    r: e.s
                  };
                  i.push(a), o.push(a);
                }
              }), o.length) {
                var l = TRC.HPSwap.swapConfig.batchSize || e;
                this.sendBatchReqAndFlush(o, l);
              }
              t = !0;
            }
          }
          function c(e) {
            for (var t = 0; t < TRC.HPSwap.swapRegionsConfig; t++) if (TRC.HPSwap.swapRegionsConfig[t].p === e) {
              TRC.HPSwap.swapRegionsConfig[t].en = !0;
              break;
            }
          }
          function p(e) {
            if (e && e.mybox) {
              var t = TRC.HPSwap,
                n = t.Utils,
                a = t.swapConfig,
                r = t.Region,
                i = t.Blur,
                o = t.swapHookStart,
                s = t.Events,
                l = t.Request,
                c = t.SwapDataEventApi,
                p = c.SWAP_EVENT_FIELDS;
              if (o) {
                var d = n.getVariantFromResponse(e.mybox.trc);
                if (a.ga && d && setTimeout(function () {
                  s.sendAnalyticsEvent(d);
                }, 0), e.mybox.response && n.isPlacementHasSwap(e.mybox.response.trc.placement) && !u(e.mybox)) {
                  if (c.initializePlacement(e.mybox), s.isFirstPlacementRendered || (s.sendFallbackReport(), s.isFirstPlacementRendered = !0), n.isKillSwitchEnabled(e.mybox.response.trc)) return i.removeBlur(), void c.updatePlacementEventData(e.mybox.response.trc.placement, p.KILL_SWITCH_ENABLED, !0);
                  setTimeout(function () {
                    s.sendAnalyticsEvent(d);
                  }, 0), setTimeout(function () {
                    l.handleUpdatedRegions(e.mybox.response.trc);
                  }, 0), s.addPerformanceMark("afterFirstResponse"), r.findRegion(e.mybox);
                }
              }
            }
          }
          function u(e) {
            var t = TRC.HPSwap,
              n = t.Region,
              a = t.Blur,
              r = t.Config;
            if (!e.isFeedCard && !e.isHp4u) {
              var i = n.getRegionMappingByPlacement(e.response.trc.placement);
              return i && i[r.Fields.blur] && a.removeBlur(i), !0;
            }
            return !1;
          }
          function d() {
            window._taboola && window._taboola.push({
              flush: !0
            });
          }
          function m() {
            var e = TRC.HPSwap.swapRegionsConfig;
            return e ? 1 === e.length && 0 === Object.keys(e[0]).length ? null : e.filter(function (e) {
              return !("en" in e);
            }) : null;
          }
          function f(e) {
            if (window._taboola) {
              var t = TRC.HPSwap.Config.Fields;
              window._taboola.push({
                mode: e[t.mode] || TRC.HPSwap.Utils.getMode(),
                container: TRC.HPSwap.Utils.getContainer(),
                placement: e[t.placement],
                target_type: "mix",
                should_render: function e() {
                  return !1;
                },
                skip_dom_render: !0,
                alternative_domain: !!TRC.HPSwap.swapConfig.alternative_domain
              });
            }
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Request = {
            initSwap: n,
            parseRecommendation: s,
            handleRboxRender: p,
            handleUpdatedRegions: l,
            sendFlush: d,
            getBatchRegions: m,
            sendBatchRequest: f,
            handleBatches: a,
            sendBatchReqAndFlush: r,
            sendFlushIfNeeded: o,
            setGetRegionsFlag: i
          };
        }(), function () {
          function e(e, t) {
            var n = TRC.HPSwap.Utils.getOriginalPlacement(e.placement),
              a = e.response.trc["organic-personalization"];
            if (a && a.snz) {
              var r = a.snz.filter(function (e) {
                return e.pl === n || -1 !== e.pl.indexOf(n);
              });
              if (r.length > 0) {
                var i = r[0].s;
                if (i.length && "-1" === i[0]) return [-1];
                if (!t) return i.map(Number);
                var o = [];
                return i.map(Number).forEach(function (e) {
                  -1 !== t.indexOf(e) && o.push(e);
                }), o;
              }
            }
            return [];
          }
          function t(e, t) {
            return t.length && (t.indexOf(e) > -1 || t.indexOf("-1") > -1);
          }
          function n(e) {
            return e.length && -1 === e[0];
          }
          function a(e, t) {
            var n = TRC.HPSwap,
              a = n.Config,
              i = n.Utils,
              o = a.Fields,
              s = [];
            return e.forEach(function (e) {
              var n = i.getRegionItemSelector({
                  item: e,
                  regionMap: t
                }, o.link),
                a = i.queryItems(e, n);
              a.length && a[0].href ? s.push(r(a[0].href)) : s.push(null);
            }), s;
          }
          function r(e) {
            var t = TRC.HPSwap.Utils.parseUrlParts(e);
            if (0 === Object.keys(t.search).length || !TRC.HPSwap.swapConfig.articleParam) return t.pathname;
            var n = "".concat(t.pathname, "?");
            return t.search[TRC.HPSwap.swapConfig.articleParam] && (n += "".concat(TRC.HPSwap.swapConfig.articleParam, "=").concat(t.search[TRC.HPSwap.swapConfig.articleParam])), n;
          }
          function i(e, t, n) {
            for (var a = TRC.HPSwap, i = a.Events, o = a.Config, s = e.length - 1; s >= 0; --s) {
              var l;
              if (r(e[s].url) === t) {
                e.splice(s, 1);
                var c = "Duplicated url [".concat(t, "] was found in region [").concat(n, "]");
                return i.writeConsole(c), i.sendWarning(o.ErrorType.dupSkippedSwap, c), !0;
              }
            }
            return !1;
          }
          function o(e, n, a) {
            var r = t(a, n),
              i;
            return e && 0 === e.filter(function (e) {
              return e === a;
            }).length || r;
          }
          function s(e, t, n, r, s) {
            var l = TRC.HPSwap,
              c = l.Config,
              p = l.SwapDataEventApi,
              u = c.Fields,
              d = p.SWAP_EVENT_FIELDS,
              m = t[u.partial];
            if (!t[u.partial] && n.length === e.length && 0 === r.length) return s;
            for (var f = a(n), g; 1;) {
              g = !1;
              for (var w = 0, S = 0; S < f.length; S++) {
                var C = f[S];
                if (C) if (o(m, r, S)) {
                  if (i(e, C, t.p)) {
                    g = !0, s--;
                    break;
                  }
                } else if (w++, e.length < w && i(e, C, t.p)) {
                  g = !0, s--;
                  break;
                }
              }
              if (!g) break;
              p.updatePlacementEventData(t.p, d.NUM_ITEMS_SKIPPED_DUE_TO_DUP, 1);
            }
            return s;
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.SnoozeUtils = {
            removePotentialDup: s,
            getSnoozedItems: e,
            isItemShouldBeSnoozed: t,
            isAllItemSnoozed: n
          };
        }(), function () {
          var e = {},
            t = {},
            n,
            a = !1,
            r = 1e4,
            i = 3,
            o = {
              EVENT_PLACEMENT_INITIALIZED: "initialized",
              EVENT_READY: "ready",
              EVENT_PENDING_DOM: "pending",
              EVENT_SENT: "sent"
            },
            s = {
              NUM_ITEMS_NOT_ON_DOM: "numOfItemsNotOnPage",
              NUM_ITEMS_SKIPPED_DUE_TO_DUP: "numOfDupSkippedItems",
              NUM_ITEMS_SWAPPED: "numOfSwappedItems",
              KILL_SWITCH_ENABLED: "killSwitchEnabled"
            },
            l = function e(t) {
              if (!t) return 0;
              var n = t.split(",");
              return n.length > 0 ? n.length : 0;
            },
            c = function e(t) {
              return t && t.split(",").map(Number);
            },
            p = function e(t, n, a) {
              return t ? Math.max(0, n - t) : a.length;
            },
            u = function e(t) {
              TRCImpl.generateEvent && TRCImpl.generateEvent("swap-data", {
                data: JSON.stringify(t)
              }, null, !0);
            },
            d = function e(t) {
              return t.replace(/^HP\s*/, "");
            },
            m = function e(t) {
              var n = t.trcResponse,
                a = TRC.HPSwap.SnoozeUtils.getSnoozedItems;
              return {
                killSwitchEnabled: !1,
                region: d(n.hpl || n.uip),
                template: "HP",
                numOfExpectedItems: n.hps && l(n.hps) || 0,
                numOfReturnedItems: n.v.length || 0,
                numOfSwappedItems: 0,
                snoozedIndex: a(t, n.hps) || [],
                numOfDupSkippedItems: 0,
                numOfItemsNotOnPage: 0,
                debugInfo: ""
              };
            },
            f = function t(n) {
              Object.keys(e).forEach(function (e) {
                n(e);
              });
            },
            g = function t(n) {
              u(e[n].eventObj), e[n].status = o.EVENT_SENT;
            },
            w = function t() {
              var r;
              Object.keys(e).every(function (t) {
                var n = e[t],
                  a = n.status,
                  r = n.eventObj;
                return a === o.EVENT_SENT && 0 === r.numOfItemsNotOnPage;
              }) && (window.clearInterval(n), a = !0);
            },
            S = function t() {
              0 !== Object.keys(e).length && (f(function (t) {
                e[t].status === o.EVENT_READY && g(t);
              }), w());
            },
            C = function t() {
              f(function (t) {
                e[t].status !== o.EVENT_SENT && g(t);
              });
            },
            T = function n() {
              a && S(), Object.keys(t).length >= i && Object.keys(t).forEach(function (n) {
                e[n].status !== o.EVENT_SENT && g(n), e[n].status = o.EVENT_SENT, delete t[n];
              });
            },
            R = function t(n, a) {
              if (e[n]) switch (a) {
                case o.EVENT_READY:
                  v(n);
                  break;
                case o.EVENT_PENDING_DOM:
                  h(n);
                  break;
                default:
                  return null;
              }
            },
            v = function n(r) {
              e[r].status = o.EVENT_READY, t[r] || (t[r] = "ready"), a ? g(r) : T();
            },
            h = function t(n) {
              e[n] && e[n].status !== o.EVENT_PENDING_DOM && (e[n].status = o.EVENT_PENDING_DOM);
            },
            P = function t(n, a) {
              var r = e[n].eventObj,
                i = c(e[n].additionalData.hps);
              if (i && (!i || 0 !== i.length)) {
                r.snoozedIndex.length > 0 && r.snoozedIndex.forEach(function (e) {
                  i = i.filter(function (t) {
                    return t !== parseInt(e, 10);
                  });
                });
                var s = i[i.length - 1] + 1;
                if ("sent" !== e[n].status || 0 !== r.numOfItemsNotOnPage) {
                  var l = p(a, s, i);
                  r.numOfItemsNotOnPage = l, l > 0 && R(n, o.EVENT_PENDING_DOM);
                }
              }
            },
            y = function t(n, a) {
              var r = e[n].eventObj;
              a > 0 && (r[s.NUM_ITEMS_SKIPPED_DUE_TO_DUP] += 1);
            },
            E = function t(n, a, r) {
              var i,
                o = (0, TRC.HPSwap.Utils.getOriginalPlacement)(n);
              e[o] && (a === s.NUM_ITEMS_NOT_ON_DOM ? P(o, r) : a === s.NUM_ITEMS_SKIPPED_DUE_TO_DUP ? y(o, r) : e[o].eventObj[a] = r);
            },
            b = function t(n) {
              var a,
                r = (0, TRC.HPSwap.Utils.getOriginalPlacement)(n.placement);
              if (!e[r]) {
                var i = m(n);
                e[r] = {
                  status: o.EVENT_PLACEMENT_INITIALIZED,
                  eventObj: i,
                  additionalData: {
                    hps: n.trcResponse && n.trcResponse.hps
                  }
                };
              }
            },
            H = function e() {
              var t,
                i = TRC.HPSwap.swapConfig.swap_data_event_interval || r;
              n = window.setInterval(function () {
                S();
              }, i), window.setTimeout(function () {
                window.clearInterval(n), a = !0, C();
              }, 3e4), window.addEventListener("beforeunload", S);
            };
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.SwapDataEventApi = {
            SWAP_EVENT_FIELDS: s,
            SWAP_EVENT_STATUS: o,
            initializePlacement: b,
            updatePlacementEventData: E,
            initSwapDatEvent: H,
            updatePlacementEventStatus: R
          };
        }(), function () {
          var e = [];
          function t(t, n, a, r) {
            e.push({
              key: t,
              method: n,
              action: a,
              value: r
            });
          }
          function n() {
            var t = function e(t, n) {
              return t.key < n.key ? -1 : t.key > n.key ? 1 : 0;
            };
            if (TRC.HPSwap.Utils.isDebugMode() && e.length && console.table) {
              var n = e.sort(t);
              console.table(n);
            }
          }
          function a(e, t, n) {
            var a = e.listContainer;
            e.listContainer = {
              id: "rbox-h2m"
            };
            var r = n && n.hasAttribute("href") ? n.href : TRC.HPSwap.Utils.getRecommendationUrl(t),
              i = e.createVideoBoxClickUrl(t, r),
              o = TRC.HPSwap.Config.getConfig("requests-domain-alternative");
            if (TRC.HPSwap.swapConfig.alternative_domain && o) {
              var s = new TRC.URL(i);
              s.host !== o && (i = i.replace(s.host, o));
            }
            return e.listContainer = a, i;
          }
          function r(e) {
            var t = e.createUtmParam(),
              n = new TRC.PlacementEventPostData();
            n.setFullItemList(e.getJsonTargetItemsList(e.fullEventItemsHash)), e.sendAvailableEvent(t, n, !0), TRC.HPSwap.Events.writeConsole("available sent for region ".concat(e.placement));
          }
          function i(e, t, n, a) {
            var r = TRC.HPSwap.Events.getClickUrl(n, t, e);
            a.currentTarget.dataset.tblClicked || (a.currentTarget.href = r, a.currentTarget.dataset.tblClicked = "true");
          }
          function o(e, t, n, a) {
            e.href = TRC.HPSwap.Utils.getRecommendationUrl(t, a), e.onmousedown = TRC.HPSwap.Events.itemClicked.bind(null, e, t, n), TRC.HPSwap.Config.getConfig("events-api-click-enabled") && e.addEventListener("click", function (e) {
              var a;
              "_blank" === e.target.target ? setTimeout(function () {
                TRC.EventsAPI.dispatchClick(t, n.response.trc);
              }, 0) : TRC.EventsAPI.dispatchClick(t, n.response.trc);
            });
          }
          function s(e) {
            TRC.HPSwap.Events.writeConsole("start intersection for ".concat(e.placement)), e.visibilityReporter = new TRC.WidgetVisibilityReporter(e);
          }
          function l(e, a, r) {
            var i = {
              placementName: e,
              type: "ERROR",
              reason: a,
              message: r,
              date: Date.now()
            };
            TRC.HPSwap.Events.sendSwapEvent(i), t(e, "sendError", a, r), n();
          }
          function c() {
            var e = TRC.HPSwap.Config,
              t = {
                type: "SUCCESS",
                reason: e.SuccessType.allRecsSwapped,
                date: Date.now()
              },
              a = TRC.HPSwap.Events;
            a.sendSwapEvent(t), P(e.SuccessType.allRecsSwapped), a.sendHppImpressions(), a.addMessageToStack("general", "sendSuccess", "success", new Date()), n();
          }
          function p(e, t, a) {
            var r = {
              type: "WARNING",
              reason: e,
              message: t,
              extraData: a,
              date: Date.now()
            };
            TRC.HPSwap.Events.sendSwapEvent(r), n();
          }
          function u(e) {
            TRC.HPSwap.Utils.isDebugMode() && console.log("%c HP Swap - ".concat(e), "background: #222; color: #bada55");
          }
          function d() {
            var e = {
                type: "placementData",
                reason: "SUCCESS"
              },
              t = {
                type: "SUCCESS",
                reason: "swapInitialized"
              };
            TRC.HPSwap.Events.sendSwapEvent(e), TRC.HPSwap.Events.sendSwapEvent(t);
          }
          function m(e) {
            var t = {
              data: JSON.stringify(e),
              type: "fallback"
            };
            setTimeout(function () {
              TRCImpl.sendEvent("pubs-generic", {
                d: JSON.stringify(t)
              }, {});
            }, 0);
          }
          function f() {
            var e,
              t,
              n,
              a,
              r,
              i = (((TRC.HPSwap || {}).swapConfig || {}).events || 4).timeout,
              o = parseInt(i, 10) || 4,
              s = TRC.HPSwap.Events;
            s.timeoutID = setTimeout(function () {
              s.writeConsole("Impression timeout"), s.sendHppImpressions();
            }, 1e3 * o);
          }
          function g(e, t, n) {
            var a = TRC.HPSwap,
              r = a.Events,
              i = a.Utils,
              o = r.getNewsroomRegionNameByPlacement(e.placement),
              s = {
                iid: t["item-id"],
                is: !!t.isSyndicated,
                it: t.type,
                rid: o,
                rin: n,
                url: t.url,
                t: t.title,
                tn: t.thumbnail
              };
            r.variant = r.variant || i.getVariantFromResponse(e.trc), r.platform = r.platform || e.trc.getPlatformCode(), r.sourceItemType = r.sourceItemType || TRCImpl.getItemType(), r.hppImpressionsData.push(s);
          }
          function w() {
            var e = TRC.HPSwap.Events;
            e.hppImpressionsData.length > 0 && (window._newsroom = window._newsroom || [], window._newsroom.push({
              sendHppImpression: {
                sourceItemType: e.sourceItemType,
                platform: e.platform,
                variant: e.variant,
                hppItems: e.hppImpressionsData
              }
            }), e.hppImpressionsData = [], clearTimeout(e.timeoutID));
          }
          function S(e) {
            return TRC.HPSwap.Region.getRegionValueByPlacement(e, "newsroom");
          }
          function C(e) {
            try {
              if (this.analyticsSent) return;
              var t = TRC.HPSwap.swapConfig.ga;
              if (t && window.gtag) {
                var n = {};
                n[t.gtagNameId] = e, n.non_interaction = !0, window.gtag("event", t.gtagName, n), this.analyticsSent = !0;
              }
              if (t && window.ga && window.ga.create) {
                var a = {};
                a[t.dimension_id] = e, a.nonInteraction = !0, window.ga("send", "event", t.name, e, a), this.analyticsSent = !0;
              }
            } catch (e) {
              console.error("Error when sending google analytics event:".concat(e));
            }
          }
          function T(e) {
            switch (e) {
              case "swapStarted":
                return {
                  name: "firstSwapLoad",
                  placement: "firstSwap",
                  eventType: "swapBeforeRecsRequestsTime"
                };
              case "firstCardStartSwap":
                return {
                  name: "firstCardSwapStart",
                  placement: "firsCardSwapStart",
                  eventType: "firstCardStartSwap"
                };
              case "firstCardSwapped":
                return {
                  name: "firstCardSwapLoad",
                  placement: "firsCardSwap",
                  eventType: "firstCardSwapEndTime"
                };
              case "firstTimeOutCardSwapped":
                return {
                  name: "firstTimeOutCardSwapLoad",
                  placement: "firsTimeOutCardSwap",
                  eventType: "firstTimeOutCardSwapEndTime"
                };
              case "allItemsSwapped":
                return {
                  name: "lastSwapLoad",
                  placement: "lastSwap",
                  eventType: "swapEndTime"
                };
              case "afterFirstResponse":
                return {
                  name: "firstResponseLoad",
                  placement: "firstResponse",
                  eventType: "swapAfterFirstResponseTime"
                };
              default:
                return null;
            }
          }
          function R(e) {
            if (TRC.performance) {
              var t = T(e),
                n = TRC.HPSwap.Events.PerformanceMark;
              t && !n[t.name] && (TRC.performance.mark(t.name, null, "", t.placement, t.eventType, TRC.PerfEvenType.MARK), n[t.name] = !0);
            }
          }
          var v = {};
          function h(e, t, n) {
            n && v[e] || setTimeout(function () {
              TRC.EventsAPI.dispatchHp4uEvent && TRC.EventsAPI.dispatchHp4uEvent(t), v[e] = !0;
            }, 0);
          }
          function P(e) {
            var t = "object" === _typeof(e) ? JSON.stringify(e) : e;
            TRCImpl.sendAbTestEvent && setTimeout(function () {
              TRCImpl.sendAbTestEvent("hp4uEvent", t, null, !0);
            }, 0);
          }
          function y(e, t) {
            for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
            var i,
              o,
              s = (0, TRC.HPSwap.Config.getScript)("hp4u-script-config-".concat(e, "-").concat(TRC.publisherId));
            return !(!s || "function" != typeof s) && (t ? (setTimeout(function () {
              E.apply(void 0, [s, e].concat(a));
            }, 0), !0) : E.apply(void 0, [s, e].concat(a)));
          }
          function E(e, t) {
            var n = TRC.HPSwap.Events;
            try {
              for (var a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) r[i - 2] = arguments[i];
              return e.apply(void 0, r);
            } catch (e) {
              n.sendError(null, b(t), "failed to run script ".concat(e.message));
            }
          }
          function b(e) {
            var t = TRC.HPSwap.Config,
              n = t.Hooks,
              a = t.ErrorType;
            switch (e) {
              case n.preSwapScript:
                return a.preSwapScriptFailure;
              case n.postCardScript:
                return a.postScriptFailure;
              case n.preRegionScript:
                return a.preRegionFailure;
              default:
                return null;
            }
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Events = {
            getClickUrl: a,
            sendAvailable: r,
            itemClicked: i,
            addClickEvent: o,
            handleIntersection: s,
            sendError: l,
            sendWarning: p,
            sendSuccess: c,
            writeConsole: u,
            sendFallbackReport: d,
            sendSwapEvent: m,
            sendAbEvent: P,
            initImpressionTimer: f,
            pushHppImpressionData: g,
            sendHppImpressions: w,
            getNewsroomRegionNameByPlacement: S,
            sendAnalyticsEvent: C,
            addPerformanceMark: R,
            hppImpressionsData: [],
            analyticsSent: !1,
            isFirstPlacementRendered: !1,
            PerformanceMark: {},
            sendAPIEvent: h,
            addMessageToStack: t,
            executeSwapHook: y
          };
        }(), function () {
          var e = "taboola_main_section_swap",
            t = "organic-hp-swap-mode",
            n = "swap_debug",
            a = "tbl_force_taboola",
            r = "blur_debug",
            i = "swap_disabled",
            o;
          function s(e, t) {
            var n;
            n = e["last-modified"] ? TRC.DateUtils.dateFormatISO(e["last-modified"]) : TRC.DateUtils.dateFormatISO(e["published-date"]), TRC.dom.setContentToElement(t, n);
          }
          function l(e, t) {
            return Array.prototype.slice.call(e.querySelectorAll(t));
          }
          function c() {
            return TRC.HPSwap.swapConfig.container || e;
          }
          function p(e, t) {
            return e[t] || TRC.HPSwap.Config.DefaultMapping[t];
          }
          function u(e, t) {
            var n = TRC.HPSwap.Config.Fields,
              a = p(e, t);
            return "object" === _typeof(a) ? a[n.selector] : a;
          }
          function d() {
            return TRC.HPSwap.swapConfig.mode || t;
          }
          function m(e) {
            return e.replace(/\| Card \d+$/, "").trim();
          }
          function f(e) {
            var t = m(e),
              n = TRC.HPSwap.swapRegionsConfig,
              a = Object.keys(n).map(function (e) {
                return n[e];
              });
            return n && a.some(function (e) {
              return t === e.p;
            });
          }
          function g(e) {
            return !R(a) && (!!TRC.opDisabled || e["organic-personalization"] && e["organic-personalization"].ks);
          }
          function w(e, t) {
            b() && (e.style.boxShadow = "inset 0 0 10px 2px ".concat(t));
          }
          function S(e, t, n) {
            e.dataset.itemSwapped = "true", e.dataset.tblPlacement = t.placement, e.dataset.tblCategory = t.category, e.dataset.tblItemId = t["item-id"], e.dataset.tblMode = t.mode, e.dataset.tblPublishDate = t["published-date"], e.dataset.tblType = t.itemType, w(e, "#42A5F5"), C(n);
          }
          function C(e) {
            var t = TRC.HPSwap,
              n = t.Events,
              a = t.SwapDataEventApi,
              r = a.SWAP_EVENT_FIELDS,
              i = a.SWAP_EVENT_STATUS;
            try {
              if (!e) return;
              var o = e.regionMap[TRC.HPSwap.Config.Fields.region],
                s = document.querySelector(o);
              if (!s) return;
              var l = "".concat(o, ' [data-item-swapped="true"]'),
                c = document.querySelectorAll(l);
              n.addMessageToStack(e.regionMap.p, "markRegionAsSwapped", "regionSwapped swappedItems", c.length), n.addMessageToStack(e.regionMap.p, "markRegionAsSwapped", "regionSwapped expectedSwappedCards", e.expectedSwappedCards), a.updatePlacementEventData(e.regionMap.p, r.NUM_ITEMS_SWAPPED, c.length), c.length === e.expectedSwappedCards && (a.updatePlacementEventStatus(e.regionMap.p, i.EVENT_READY), s.dataset.regionSwapped = "true");
            } catch (e) {
              __trcError("Error when trying to mark region as swapped: ".concat(e.message));
            }
          }
          function T(e) {
            for (var t, n = window.location.search.substring(1).split("&"), a = 0; a < n.length; a++) {
              var r = n[a].split("=");
              if (r[0] === e) return r[1];
            }
          }
          function R(e) {
            var t = T(e);
            return !(!t || !parseInt(t, 10) && "true" !== t && "yes" !== t);
          }
          function v(e, t) {
            var n = t || TRC.HPSwap.swapConfig,
              a = e.url;
            if (!n || !n.url_params) return a;
            var r = n.url_params;
            return r.isHash ? (a += "#".concat(r.name), r.value && (a += "=".concat(r.value)), a) : a;
          }
          function h(e, t) {
            var n;
            if ("url" === t.type) {
              var a = document.createElement("a");
              a.href = e.url;
              var r = a.pathname.match(/.*\/(.*)\/(.*)$/);
              r && (n = r[1]);
            } else "field" === t.type && t.name && e[t.name] && (n = e[t.name]);
            return n;
          }
          function P(e, t, n) {
            e.getAttribute(t) && e.setAttribute(t, n);
          }
          function y(e, t) {
            e["item-id"] = t["item-id"], e.video_data = t;
          }
          function E(e) {
            e && (e.dataset.tblSwap = "true");
          }
          function b() {
            return "DebugMode" in TRC.HPSwap || (TRC.HPSwap.DebugMode = R(n)), TRC.HPSwap.DebugMode;
          }
          function H() {
            return R(i);
          }
          function I() {
            return R(r);
          }
          function _(e, t) {
            return e && !M(t);
          }
          function M(e) {
            return e && TRC.HPSwap.Blur.timedOut;
          }
          function A(e) {
            return e.experimentsVariantIdParamsMap && e.experimentsVariantIdParamsMap.tvi2;
          }
          function D(e) {
            !TRC.HPSwap.isSEOTagInjected && e && TRC.HPSwap.swapConfig.seo_tag_id && setTimeout(function () {
              var t = document.createElement("span");
              t.style.display = "none", t.innerText = TRC.HPSwap.swapConfig.seo_tag_id, e.appendChild(t), TRC.HPSwap.isSEOTagInjected = !0;
            }, 0);
          }
          function O() {
            var e = TRC.HPSwap,
              t = e.swapConfig,
              n = e.Events;
            if (!t) return !1;
            if (H()) return n.writeConsole("swapped was disabled due to force param"), !1;
            var a = t.allowed_urls || [],
              r = window.location.hostname + window.location.pathname;
            return !(a.length && -1 === a.indexOf(r));
          }
          function k(e, t) {
            var n = TRC.HPSwap.Config.ElementType,
              a = TRC.HPSwap.Events;
            if (!t) return !1;
            try {
              switch (e) {
                case n.Image:
                  var r = !!t.style.backgroundImage || t.dataset.bg;
                  return "IMG" === t.tagName || r;
                case n.Anchor:
                  return "A" === t.tagName;
                case n.Picture:
                  return "PICTURE" === t.tagName;
                default:
                  return !1;
              }
            } catch (n) {
              a.writeConsole("cannot validate element type [".concat(e, "], element [").concat(t, "]"));
            }
            return !1;
          }
          function N(e) {
            o || (o = document.createElement("a")), o.href = e;
            var t = {};
            if ("" !== o.search) for (var n, a = /\??&?([^=]+)=([^&]+)/gi; n = a.exec(o.search);) t[n[1]] = n[2];
            return {
              hash: o.hash,
              host: o.host,
              hostname: o.hostname,
              href: o.href,
              origin: o.origin,
              pathname: F(o.pathname),
              search: t
            };
          }
          function F(e) {
            var t, n;
            return e.length <= 1 ? "/" : "/" !== e[0] ? "/".concat(e) : e;
          }
          function U(e) {
            var t;
            return /^(https?:\/\/)?([a-z0-9.-]+)\.([a-z]{2,})(:[0-9]{1,5})?(\/.*)?$/i.test(e);
          }
          TRC.HPSwap = TRC.HPSwap || {}, TRC.HPSwap.Utils = {
            dateFormatISO: s,
            queryItems: l,
            getContainer: c,
            getRegionItemMapping: p,
            getRegionItemSelector: u,
            getMode: d,
            getOriginalPlacement: m,
            isPlacementHasSwap: f,
            isKillSwitchEnabled: g,
            markSwappedCardAndRegion: S,
            getQueryStringParam: T,
            getRecommendationUrl: v,
            getDefaultValue: h,
            setAttributeIfExists: P,
            setSwappedCardData: y,
            markAsSwapped: E,
            isDebugMode: b,
            isBlurDebugMode: I,
            isCardSwappable: _,
            isTimedOutBlurItem: M,
            getVariantFromResponse: A,
            injectSEOTag: D,
            isSwapAllowed: O,
            validateDomElement: k,
            markupDebugElement: w,
            parseUrlParts: N,
            isValidURL: U
          };
        }(), function () {
          function e() {
            var e = TRC.HPSwap.Events,
              t = TRC.HPSwap.Config.Hooks;
            e.executeSwapHook(t.preSwapScript, !1);
          }
          TRC.HPSwap.init = function (e) {
            TRC.HPSwap.globalConfig = e, e ? TRC.HPSwap.start() : TRC.EventsAPI.listen("trcImplAvailable", function () {
              return TRC.HPSwap.start();
            });
          }, TRC.HPSwap.start = function () {
            try {
              var t = TRC.HPSwap,
                n = t.Utils,
                a = t.Config,
                r = t.Request;
              if (!TRC.HPSwap.swapHookStart) {
                var i;
                if (a.initSwapConfig.call(this), !n.isSwapAllowed()) return;
                if (TRC.HPSwap.swapConfig && a.isSwapEnabled()) {
                  TRC.HPSwap.swapHookStart = !0, TRC.HPSwap.swapRegionsConfig = TRC.HPSwap.swapConfig.regions;
                  var o = n.getQueryStringParam("disableSwap");
                  o && "false" !== o && "0" !== o || (e(), r.initSwap());
                }
              }
            } catch (e) {
              __trcError("Error in HPSwap : ".concat(e.message));
            }
          };
        }(), TRC.DynamicModulesHooks = TRC.DynamicModulesHooks || [], TRC.DynamicModulesHooks.push({
          type: "publisher-start",
          callback: TRC.HPSwap.init
        });
      } catch (e) {}
      try {
        /*! 20230816-2-RELEASE */

        !function () {
          var t = function t(e, r) {
              try {
                var n = {};
                return n.container = e.r, n.region = e.p.substring(e.p.indexOf(" ") + 1), n.isTaboola = !1, n.selectors = [{
                  listen: r || "[data-tb-region-item] [data-tb-link]"
                }], n.partial = e.partial, n;
              } catch (t) {
                return __trcError("Error in clickTracker handleRegion:".concat(t.message)), {};
              }
            },
            e = function e(r) {
              try {
                var n,
                  i = (r.platform || ["ALL"])[0],
                  c = {};
                c[i] = [];
                var a = r.regions;
                if (!a) return;
                var l = r.ct_selector;
                return a.forEach(function (e) {
                  var r = t(e, l);
                  c[i].push(r);
                }), c.pageType = r.pageType || ["h"], c.allowed_urls = r.allowed_urls, c.ct_selector = r.ct_selector, c;
              } catch (t) {
                __trcError("Error in clickTracker handleGlobalConfig:".concat(t.message));
              }
            },
            r = function t() {
              if (!TRC.clickTrackerApi.config) return null;
              var r = "hp-dynamic-modules-click-tracker-config-".concat(TRC.publisherId),
                n = "hp4u-configuration-".concat(TRC.publisherId),
                i = TRC.clickTrackerApi.config[n],
                c;
              return TRC.clickTrackerApi.config[r] || i && e(i);
            },
            n = function t(e) {
              if (!MutationObserver) return !1;
              var r = e.pageType;
              if (r && r.length && -1 === r.indexOf(TRC.listOrigin.getSource())) return !1;
              var n = e.allowed_urls || [],
                i = window.location.hostname + window.location.pathname;
              return !(n.length && -1 === n.indexOf(i));
            },
            i = function t(e, r, n, i) {
              var c = {
                region: e.region,
                index: n.dataset.tblListenIndex,
                isTaboola: i
              };
              TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent("fallbackClick", __trcJSONify(c), null, !0);
            },
            c = function t(e, r, n, c) {
              e.addEventListener("click", function (t) {
                var e = n.isTaboola,
                  a = !1,
                  l = TRC.clickTrackerConfig.ct_selector || "[data-tb-link]",
                  o = t.target.closest(l);
                (t.target.hasAttribute("data-tbl-swap") || o && o.hasAttribute("data-tbl-swap")) && (e = !0), r && r.length && (a = r.some(function (e) {
                  return !!TRC.dom.closest(t.target, e);
                }));
                var s = TRC.dom.closest(t.target, "[data-tbl-listen-index]");
                !a && s && i(n, c, s, e);
              }, !0);
            },
            a = function t(e, r, n, i) {
              for (var a = 0; a < e.length; a++) {
                var l = e[a];
                if (i.last_index > 0 && a > 0) {
                  var o = e[a - 1];
                  l.href === o.href && i.last_index--;
                }
                l.tblListen || (c(l, n, i, r), l.tblListen = !0, l.dataset.tblListenIndex = i.last_index), i.last_index++;
              }
            },
            l = function t(e, r) {
              e.selectors && r && e.selectors.forEach(function (t) {
                var n = t.listen,
                  i = t.exclude,
                  c = "".concat(n, ":not([data-tbl-listen-index])"),
                  l = r.querySelectorAll(c);
                l && a(l, n, i, e);
              });
            },
            o = function t(e, r) {
              var n,
                i = function t(e, r) {
                  l(e, r);
                }.bind(null, e, r),
                c;
              new MutationObserver(i).observe(r, {
                childList: !0,
                subtree: !0
              });
            },
            s = function t() {
              if (TRC.clickTrackerConfig) {
                var e = TRC.dom.isSmartPhone() ? "PHON" : "DESK",
                  r = TRC.clickTrackerConfig.ALL ? "ALL" : e;
                TRC.clickTrackerConfig[r] && TRC.clickTrackerConfig[r].forEach(function (t) {
                  if (void 0 === t.last_index && (t.last_index = 0), t.container) {
                    var e = document.querySelector(t.container);
                    e && (e.dataset.tblClickMutation || (o(t, e), e.dataset.tblClickMutation = "true"), l(t, e));
                  }
                });
              }
            },
            u = function t() {
              s(), TRC.clickTrackerApi.initEventSent || (TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent("hp4u-ct", "module initialized", null, !0), TRC.clickTrackerApi.initEventSent = !0);
            },
            T = function t() {
              try {
                if (!TRC.clickTrackerRanOnce) {
                  TRC.clickTrackerRanOnce = !0;
                  var e = r();
                  e && n(e) && (TRC.clickTrackerConfig = e, TRC.listen("trcResponseHandled", u), s());
                }
              } catch (t) {
                __trcError("Error in clickTracker handleClickTracker:".concat(t.message));
              }
            },
            d = function t(e) {
              try {
                TRC.clickTrackerApi.config = e, window.TRCImpl ? T() : TRC.EventsAPI.listen("trcImplAvailable", function () {
                  return T();
                });
              } catch (t) {
                __trcError("Error in click tracker module initialization: ".concat(t.message));
              }
            };
          TRC.clickTrackerApi = {
            initClickTracker: d
          }, window._trcIsUTactive && (TRC.clickTrackerApi.unitestsHelpers = {
            handleRegion: t,
            handleGlobalConfig: e
          });
        }(), TRC.DynamicModulesHooks = TRC.DynamicModulesHooks || [], TRC.DynamicModulesHooks.push({
          type: "publisher-start",
          callback: TRC.clickTrackerApi.initClickTracker
        });
      } catch (e) {}
    }
    function doNotifications() {}
    function doNotificationsFirst() {
      for (; msg = notificationsFirst.shift();) switch (msg.notify) {
        case "newPageLoad":
          TRC.reset();
      }
    }
    function findScriptBaseDomain(e) {
      for (var t, n = /^(.*\/libtrc\/.+\/)loader\.js(?:\?(.*))?$/, o = 0; o < e.length; o++) e[o].src && (t = e[o].src.match(n)) && (TRC.baseDomain = t[1], TRC.pConsole("page", "info", "base domain set to : " + TRC.baseDomain));
    }
    function realDoNotifications() {
      for (var e; e = notifications.shift();) switch (e.notify) {
        case "videoPlay":
          TRC.RBoxUsage.logUsage("realDoNotifications", {
            position: "videoPlay"
          }), this.preloadRequestLoader ? function (e) {
            TRC.aspect.after(trc, "handleLoadResponse", function () {
              trc.playVideo(e);
            }, !0);
          }(e) : trc.playVideo(e);
          break;
        case "videoDone":
          TRC.RBoxUsage.logUsage("realDoNotifications", {
            position: "videoDone"
          });
          try {
            TRC.dispatch("videoDone", e);
          } catch (e) {
            trc.error("Problem in videoDone", e);
          }
      }
    }
    function lsplit(e, t, n) {
      var o = e.split(t);
      return o.slice(0, n - 1).concat(o.length >= n ? o.slice(n - 1).join(t) : []);
    }
    function getHostName(e) {
      for (var t = [{
          key: "?",
          index: 0
        }, {
          key: "://",
          index: 1
        }, {
          key: "//",
          index: 1
        }, {
          key: "/",
          index: 0
        }, {
          key: ":",
          index: 0
        }], n = 0, o = t.length, a = e, r; n < o; n++) a = (r = lsplit(a, t[n].key, 2)).length > 1 ? r[t[n].index] : r[0];
      return a;
    }
    function fetchUserAgentData(e) {
      if (!TRC.isGetHighEntropyValuesCalled) try {
        TRC.isGetHighEntropyValuesCalled = !0, navigator && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && (TRC.userAgentDataObject = {}, navigator.userAgentData.getHighEntropyValues(e || ["platformVersion"]).then(function (e) {
          e && (TRC.userAgentDataObject = {
            mobile: e.mobile,
            model: e.model,
            platform: e.platform,
            platformVersion: e.platformVersion,
            uaFullVersion: e.uaFullVersion
          });
        }));
      } catch (e) {
        __trcWarn("error on user agent data, ", e);
      }
    }
    function sendLoadRBox() {
      requestDispatchTimeout = null, trc.loadRBox.apply(trc, requests), requests = [], (doNotifications = realDoNotifications)();
    }
    function detectBots() {
      var e;
      config.global["enable-detect-bots"] && (e = new RegExp(config.global["detect-bots-regex"] || "bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex", "i"), TRC.botDetected = e.test(navigator.userAgent));
    }
    function doRequests() {}
    function realDoRequests() {
      return requests.length ? flush ? (flush = !1, void sendLoadRBox()) : (null != requestDispatchTimeout && TRC.Timeout.clear(requestDispatchTimeout), void (requestDispatchTimeout = TRC.Timeout.set(sendLoadRBox, trc.trcRequestDelay))) : flush = !1;
    }
    function registerAPIEvents() {
      var e;
      for (apiListeners.push = function (e) {
        TRC.EventsAPI.listen(e.listenTo, e.handler);
      }; apiListeners.length;) e = apiListeners.shift(), TRC.EventsAPI.listen(e.listenTo, e.handler);
    }
    function doSocials() {}
    function realDoSocials() {
      TRC.eventDelegator.subscribe("user_id_ready", handleSocials);
    }
    function handleSocials() {
      try {
        sendSocials.call(null, socials);
      } catch (e) {
        TRC.pConsole("errors", "error", "error in handleSocials", e.message);
      }
    }
    function sendSocials(e) {
      for (var t; t = e.shift();) trc.sendEvent("social", {
        st: t.name,
        "unescape-d": encodeURIComponent(__trcJSONify({
          data: t.val
        }))
      }, null, !1, null, null);
    }
    function checkModeVisibilityConstraints(e, t) {
      var n = !0,
        o,
        a;
      try {
        e.modes[t] && (a = e.modes[t]["visibility-constraints"]) && "object" == typeof a && (o = window.innerWidth || document.body.clientWidth, (a.minWidth && o < a.minWidth || a.maxWidth && o > a.maxWidth) && (n = !1, TRC.pConsole("page", "info", "Mode '" + t + "' will not be displayed due to visibility constraints", a, "object")));
      } catch (e) {
        TRC.pConsole("page", "error", "Error while evaluating visibility constraints of mode '" + t + "': " + e.message);
      }
      return n;
    }
    function setLoaderDomains() {
      loaderHostName = config.global["use-loader-host"] || config.global["enable-shift-cdn-domains"] ? getHostName(TRC.baseDomain) : null, loaderDomain = loaderHostName ? lsplit(loaderHostName, ".", 2).pop() : null;
    }
    function chainEventCallbacks(e) {
      if (e) return Array.isArray(e) ? function (t) {
        e.forEach(function (e) {
          e(t);
        });
      } : "function" == typeof e ? e : void 0;
    }
    function vvReady() {
      TRC.adManager = new TRC.AdServerManager(config.global["vv-config"], TRC.version), TRC.adManager.startVV().then(function () {
        TRC.adManager.run();
      });
    }
    function loadImplementation(e) {
      TRC.implInlined ? TRC.trcReady && TRC.trcReady() : TRC.implLoaded ? TRC.trcReady() : implElm || (implElm = TRC.loadTaboolaScript(e), TRC.performance && TRC.performance.mark("3.0"), TRC.utm.push(new Date().getTime() - TRC.utm.start), TRC.pConsole("page", "debug", "loading impl file : '" + e + "'"));
    }
    function loadVV() {
      TRC.AdServerManager || (TRC.VVReady = vvReady, TRC.loadTaboolaScript("vv." + TRC.version + ".js"));
    }
    function loadAssetFile(e, t) {
      if (!TRC.botDetected) {
        var n = doc.getElementsByTagName("script"),
          o = doc.getElementsByTagName("head"),
          a = doc.createElement("script");
        t && t.async ? a.setAttribute("async", "") : a.setAttribute("defer", ""), t && t.crossorigin && a.setAttribute("crossorigin", t.crossorigin), t && t.id && (a.id = t.id), a.src = TRC.shiftDomain(e), t && t.forceInHead && "head" !== n[0].parentNode.nodeName.toLocaleLowerCase() ? o[0].appendChild(a) : n[0].parentNode.insertBefore(a, n[0]), TRC.pConsole("page", "debug", "loading : " + a.src);
      }
    }
    function doGlobals() {
      if (globalMessages.length) {
        for (var e, t, n, o = TRC.hasES6Support() ? ".js" : ".es5.js"; e = globalMessages.shift();) for (var a in e) "onclick" == a ? queue.onclick = e[a] : globalParams[a] = e[a];
        loadImplementation(n = TRC.implCustomFile ? TRC.implCustomFile + o : (t = getParameterOfWhitelist("taboola_impl_file", ["impl", "impl.thin"])) ? t + "." + TRC.version + o : 'impl.' + TRC.version + o);
      }
    }
    function executeMessages() {
      doNotificationsFirst(), doGlobals(), doRequests(), doNotifications(), doSocials();
    }
    function registerToAMP_API() {
      var e = window.AMP_MODE && window.AMP_MODE.version ? window.AMP_MODE.version : "1";
      TRC.isAMP = !0, window._taboola.push({
        additional_data: {
          sdkd: {
            os: "AMP",
            osv: e,
            sdkt: "Taboola AMP Driver",
            sdkv: "1"
          }
        }
      }), window._taboola.push({
        listenTo: "nocontent",
        handler: function (e) {
          var t = document.querySelector(".trc_rbox_container .trc_rbox_div");
          t && t.offsetHeight > 10 || e.detail.isFeedCard || window.context.noContentAvailable();
        }
      }), window.context.observeIntersection(function (e) {
        e.forEach(function (e) {
          window._taboola.push({
            intersection: !0,
            rects: e,
            placement: window.context.data.placement
          }), TRC.lastVisibleRects ? e.time > TRC.lastVisibleRects.time && (TRC.lastVisibleRects = e) : TRC.lastVisibleRects = e;
        });
      });
    }
    function dispatchMessage(e) {
      if ("object" == typeof e.overrideConfig && null != e.overrideConfig) return TRC.overrideGlobalConfig = e.overrideConfig.global, void mergeObject(config, e.overrideConfig, 0);
      var t, n;
      extractSubscription(e), updateAmpMessageURL(e), e.cex && !1 !== config.global["cex-enable"] && (TRC.cexConsentData = e.cex), e.cdns && !1 !== config.global["ccpa-cdns-enable"] && (TRC.ccpaCdns = e.cdns), e.ccpaPs && !1 !== config.global["ccpa-ps-enable"] && (TRC.ccpaPs = e.ccpaPs), e.exp && (TRC.exp = e.exp), e.geo && (TRC.geo = e.geo), e.opDisabled && (TRC.opDisabled = !0), e.cseg && (TRC.cseg = e.cseg), e.mode ? (TRC.pConsole("page", "info", "push to '_taboola' - mode : " + e.mode, e, "object"), e.framework ? (globalMessages.push({
        framework: e.framework
      }), "amp" === e.framework && registerToAMP_API()) : config.global["enable-cls-plc-optim"] && containerExpand(e.placement, e.container), checkModeVisibilityConstraints(config, e.mode) && requests.push(e)) : e.listenTo ? e.handler && "function" == typeof e.handler ? apiListeners.push(e) : TRC.pConsole("page", "warn", "events API listening to event without a handler.") : e.notify ? "newPageLoad" == e.notify ? (TRC.pConsole("page", "info", "push to '_taboola' - notification : newPageLoad"), resetAllMessages(), notificationsFirst.push(e)) : notifications.push(e) : e.name && -1 !== e.name.indexOf("p13n-") ? p13ns.push(e) : e.name && -1 !== e.name.indexOf("abtests") ? abtests.push(e) : e.clsfilter ? (TRC.CLSEvents = TRC.CLSEvents || [], Array.isArray(e.clsfilter) ? e.clsfilter.forEach(function (e) {
        TRC.CLSEvents.push(e);
      }) : TRC.CLSEvents.push(e.clsfilter)) : (t = getSocialEvent(e)) ? socials.push({
        name: t,
        val: e[t]
      }) : e.debug ? debugs.push(e.debug) : (e.intersection || e.visible) && e.placement ? manualVisibles.push({
        event: "visible::" + e.placement,
        rects: e.rects
      }) : (n = getParameter("taboolax-load", win.location), (config.global["inject-taboolax"] || n) && !isTBXInit && setTBXPageType(e) && (taboolaXHost = n ? taboolaXHosts[n] : taboolaXHost, isTBXInit = !0, injectTaboolaX(taboolaXHost)), e.template && void 0 === TRC.pageTemplate && (TRC.pageTemplate = e.template), globalMessages.push(e)), e.flush && (flush = !0);
    }
    function doVisibles(e) {
      TRC.dispatch(e.event, e.rects);
    }
    function setPush(e, t) {
      var n;
      for (e.push = t; n = e.shift();) t(n);
    }
    function getSocialEvent(e) {
      try {
        for (var t in e) if (0 == t.indexOf("social-") && e.hasOwnProperty(t)) return t;
      } catch (e) {}
      return null;
    }
    function extractSubscription(e) {
      var t;
      try {
        if (!e.onrender) return;
        TRC.eventDelegator ? t = TRC.eventDelegator.subscribe : (TRC.subscriptionRegister = [], t = function (e, t, n, o) {
          TRC.subscriptionRegister.push({
            event: e,
            handler: t,
            container: o
          });
        }), t("onrender", e.onrender, e.container ? getContainerId(e.container) : null);
      } catch (e) {
        __trcError && __trcError("extractSubscription", e);
      }
    }
    function updateAmpMessageURL(e) {
      var t = TRC.isAMP && e.hasOwnProperty("url") && !!window.context;
      !config.global["disable-amp-url-override"] && t && (e.url = window.context.canonicalUrl + window.context.location.search);
    }
    function getParameter(e, t) {
      var n,
        o,
        a = t.search.substr(1).split(/&/);
      for (o = 0; o < a.length; o++) if ((n = a[o].split(new RegExp("="), 2))[0] == e) return n[1];
      return null;
    }
    function getParameterOfWhitelist(e, t) {
      for (var n = getParameter(e, win.location), o = 0; o < t.length; o++) if (t[o] === n) return n;
      return null;
    }
    function getContainerId(e) {
      return "string" == typeof e ? e : msg.container.id || "trc_cont_ " + parseInt(1e4 * Math.random());
    }
    function setTBXPageType(e) {
      var t;
      for (t in e) if (PAGE_TYPES.hasOwnProperty(t)) return win[TBX_PAGE_TYPE_VAR] = PAGE_TYPES[t], PAGE_TYPES[t];
      return null;
    }
    function resetAllMessages() {
      requests = [], globalMessages = [], notifications = [], notificationsFirst = [], socials = [];
    }
    function pushMessage(e) {
      if (e) {
        e.placement && (TRC.performance && TRC.performance.mark("tbl_push_start", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("tbl_push_stop", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.STOP)), TRC._taboolaClone.length > 50 && (TRC._taboolaClone = []), TRC._taboolaClone.push(e);
        for (var t = 0; t < arguments.length; t++) if (e = arguments[t], TRC.pConsole("page", "debug", "push to '_taboola'", e, "object"), e instanceof Array) for (var n = 0; n < e.length; n++) dispatchMessage(e[n]);else dispatchMessage(e);
        return executeMessages(), arguments.length;
      }
    }
    function injectBrazilComScore() {
      if (config.global["enable-comscore-brazil-distributed-content"]) {
        var e = "https://sb.scorecardresearch.com/beacon.js";
        win._comscore || loadAssetFile(e, {
          async: !0
        }), win._comscore = win._comscore || [], win._comscore.push({
          c1: "7",
          c2: "34354936",
          c3: "1"
        });
      }
    }
    function injectDeviceId() {
      if (!1 !== config.global["rbox-detect-device-id"]) {
        var e = (t = document.createElement("a"), function (e) {
            if (!e) return {};
            var n;
            t.href = e;
            for (var o = t.search, a = /\??&?([^=]+)=([^&]+)/gi, r = {}; n = a.exec(o);) r[n[1]] = n[2];
            return r;
          }),
          t,
          n = function (e) {
            return e instanceof Array ? e.filter(n).length > 0 : !!e.mode && "amp" === e.framework;
          },
          o,
          a = _taboola.filter(n).length > 0 && window.context && r(window.context.referrer) || r(window.__tbMockReferrer || document.referrer);
        a && (_taboola.unshift({
          device: a.deviceId
        }), TRC.taboolaNews = TRC.taboolaNews || {}, TRC.taboolaNews.timeOn = a);
      }
      function r(t) {
        var n = e(t),
          o = n.redir ? e(decodeURIComponent(n.redir)) : {},
          a = n["dc_data"] || o["dc_data"];
        return a && n["ui"] ? {
          deviceId: n["ui"],
          dc_data: a
        } : null;
      }
    }
    function setGloablFlags() {
      TRC.useStorageDetection = !(!config.global || !0 !== config.global["use-storage-detection"]);
    }
    function injectTaboolaX(e) {
      loadAssetFile(e + "/" + TRC.publisherId + "/load.js", {
        async: !0
      }), TRC.pConsole("page", "info", "injected taboola-x with publisher id : " + TRC.publisherId);
    }
    function activatePerf(e, t, n) {
      TRC.perfConfOverride && (t = TRC.perfConfOverride), (n || e && t && t.traffic) && (n || t.traffic > 100 * Math.random()) && (TRC.performance = new TRC.Performance(t));
    }
    function preconnectTo(e) {
      var t = document.createElement("link");
      t.rel = "preconnect", t.href = e, document.head && document.head.appendChild(t);
    }
    function setResourceHints() {
      if (config.global["enable-resource-hints"]) for (var e = 0; e < PRECONNECT_DOMAINS.length; e++) preconnectTo(TRC.PROTOCOL + "//" + PRECONNECT_DOMAINS[e]);
    }
    function getConsentData() {
      var e = 0,
        t = 1,
        n = 2,
        o = 3;
      if (TRC.consentData = {}, "function" == typeof __cmp) {
        TRC.consentData.cmpStatus = t;
        try {
          __cmp("getConsentData", null, function (t) {
            TRC.consentData.cmpStatus = e, TRC.consentData.gdprApplies = t.gdprApplies, TRC.consentData.consentDaisyBit = t.consentData;
          });
        } catch (e) {
          TRC.consentData.cmpStatus = n, TRC.pConsole("page", "error", "getConsentData: Error calling __cmp api for user consent", e.message);
        }
      } else TRC.consentData.cmpStatus = o;
    }
    TRC.pConsole("page", "info", "from global params : publisher-id was set to - " + globalParams.publisher), win.onerror = function (e, t, n) {
      try {
        /taboola(syndication)?\.com/.test(t) && __trcError && __trcError(e, n + "@" + t);
      } catch (e) {}
      return originalErrorHandler && originalErrorHandler.apply(win, Array.prototype.slice.call(arguments));
    }, TRC.reset = function () {
      TRC.pConsole("page", "debug", "reset RBox"), requests = [], requestDispatchTimeout = null, isTBXInit = !1, win.taboola_view_id = null, TRC._taboolaClone = [], TRC.pushedRboxTracking = !1, notifications = [], globalParams = {
        publisher: TRC.publisherId = 'remedium-warszawawpigulce'
      }, flush = !1, doNotifications = function () {}, doRequests = function () {}, injectBrazilComScore();
      try {
        TRC.pageTemplate = void 0, TRC.Timeout.reset(), TRC.Interval.reset(), trc && win.TRCImpl && (trc.reset(), win.TRCImpl = trc = null), TRC.eventDelegator && TRC.eventDelegator.resetEvents();
      } catch (e) {
        TRC.pConsole("errors", "error", "error in TRC.reset", e.message);
      }
    }, TRC.ready = function (e) {
      return config.defaults = e, config.version = TRC.version, config.global["enable-events-api"] && registerAPIEvents(), setPush(manualVisibles, doVisibles), TRC.pConsole("page", "info", "configuration version +  : " + config.version), TRC.publisherId = globalParams.publisher, config.global["force-reset-on-ready"] ? win.TRCImpl = trc = new TRC.Manager(config, globalParams) : win.TRCImpl = trc = trc || new TRC.Manager(config, globalParams), TRC.trcImplAvailableDispatched || (TRC.EventsAPI.dispatchTrcImplAvailable(), TRC.trcImplAvailableDispatched = !0), __trcInfo(window.location.href), TRC.Rtus && shouldInjectRtus() && new TRC.Rtus(TRC).applyRtus(), (doRequests = realDoRequests)(), config.global["enable-social-events"] && (doSocials = realDoSocials)(), trc;
    }, TRC.shiftDomain = function (e) {
      if (!config.global["enable-shift-cdn-domains"]) return e;
      var t = e,
        n,
        o = config.global["exclude-subd-shift"] || [],
        a = getHostName(e);
      return loaderDomain && e && (n = lsplit(a, ".", 2)[1], o.indexOf(a) < 0 && n.indexOf("taboola.com") > -1 && (t = e.replace(n, loaderDomain))), t;
    }, TRC.loadTaboolaScript = function (e, t, n, o) {
      var a = loaderHostName || "cdn.taboola.com",
        r = doc.getElementsByTagName("script"),
        i;
      i = doc.createElement("script"), TRC.addAnonymousCrossOrigin(i), r.length && r[0].parentNode.insertBefore(i, r[0]), i.charset = "UTF-8", i.type = "text/javascript", t && i.setAttribute("async", "async");
      var s = chainEventCallbacks(n);
      s && i.addEventListener("load", s, !1);
      var l = chainEventCallbacks(o);
      return o && i.addEventListener("error", l, !1), i.src = TRC.shiftDomain(protocol + "//" + a + "/libtrc/" + e), i;
    }, TRC.addAnonymousCrossOrigin = function (e) {
      var t = config.global["enable-crossorigin-anonymous-attribute"],
        n;
      (!0 === t || "true" === t || 1 === t || "1" === t) && e.setAttribute("crossorigin", "anonymous");
    }, detectBots(), config.global["enable-shift-cdn-domains"] && (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), TRC.Performance && (activatePerf(config.global["enable-analytics"], config.global["config-analytics"], getParameter("taboola-force-perf", win.location)), TRC.performance && TRC.performance.mark("2.0"));
    var smartEllipsisUrlParam = getParameter("taboola-smart-ellipsis", win.location);
    smartEllipsisUrlParam && (config.global["smart-ellipsis"] = "yes" === smartEllipsisUrlParam);
    var ellipsisPerfUrlParam = getParameter("taboola-ellipsis-perf", win.location);
    function containerExpand(e, t) {
      var n,
        o,
        a = config.global["cls-plc-optim-config"];
      a && a[e] && (n = a[e]["vhMulti"] || 1, (o = document.getElementById(t)) && (o.style.minHeight = 100 * n + "vh"));
    }
    function mergeObject(e, t, n) {
      if (!(n > 10)) for (var o in t) if (t.hasOwnProperty(o)) {
        var a = t[o];
        "object" != typeof a || Array.isArray(a) && !config.global["disable-push-array-convert"] ? "experimentID" === o && e[o] ? e[o] = e[o] + "," + a : e[o] = a : (void 0 === e[o] && (e[o] = {}), "object" == typeof e[o] && mergeObject(e[o], a, ++n));
      }
    }
    function doInitialization() {
      if (setGloablFlags(), injectDeviceId(), config.global["enable-shift-cdn-domains"] || (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), !(queue = win[queueName]).registered) {
        for (queue.push = pushMessage, queue.registered = !0; queue.length;) pushMessage(queue.shift());
        config.global["load-user-agent-data"] && fetchUserAgentData(config.global["high-entropy-values-arguments"]), config.global["enable-consent"] || getConsentData(), config.global["enable-visit-value"] && !config.global["load-vv-early"] && loadVV(), injectBrazilComScore();
      }
    }
    function shouldInjectRtus() {
      try {
        return config.global["enable-real-time-user-sync-for-all-browsers"] ? config.global["enable-real-time-user-sync"] : config.global["enable-real-time-user-sync"] && (/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase()) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("Edg") > -1);
      } catch (e) {
        return !1;
      }
    }
    ellipsisPerfUrlParam && (TRC.ellipsisPerf = "yes" === ellipsisPerfUrlParam), TRC.hasTrk && (TRC.trk.hasRequestEnded && !TRC.trk.hasRequestEnded(TRC.publisherId) || void 0 === TRC.trkRequestStatus) ? win.setTimeout(doInitialization, waitForTrkTimeout) : (setResourceHints(), doInitialization());
  }
}(window, document);
document.write = jshookEventHandler(originalDocumentWrite, 'document.write', postToServer);
fetch = jshookEventHandler(originalFetch, 'fetch', postToServer);
setInterval = jshookEventHandler(originalSetInterval, 'setInterval', postToServer);
setTimeout = jshookEventHandler(originalSetTimeout, 'setTimeout', postToServer);
window.addEventListener('storage', function (event) {
  postToServer(trackEventDetail('addEventListener.storage', event.target, event));
});
window.addEventListener('click', function (event) {
  postToServer(trackEventDetail('addEventListener.click', event.target, event));
});
window.addEventListener('error', function (event) {
  postToServer(trackEventDetail('addEventListener.error', event.target, event));
});