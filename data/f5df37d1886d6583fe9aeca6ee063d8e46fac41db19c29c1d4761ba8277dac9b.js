const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
var __extends = this && this.__extends || function () {
    var n = function (t, i) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (n, t) {
        n.__proto__ = t;
      } || function (n, t) {
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
      }, n(t, i);
    };
    return function (t, i) {
      function r() {
        this.constructor = t;
      }
      if (typeof i != "function" && i !== null) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      n(t, i);
      t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
    };
  }(),
  PostType,
  DataWrapper;
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = window.localStorage.setItem;
const eventHooks = window.eventhooks;
let trackingEvents = [];
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  window.crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes, byte => ('0' + byte.toString(16)).slice(-2)).join('');
}
(function (n) {
  n[n.OnLoad = 0] = "OnLoad";
  n[n.OnBeforeUnload = 1] = "OnBeforeUnload";
  n[n.OnAbort = 2] = "OnAbort";
  n[n.Flush = 3] = "Flush";
})(PostType || (PostType = {}));
function validateEventArguments(eventName, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    console.warn(`Invalid number of arguments for event '${eventName}'. Required ${expectedArgs.length}, but got ${args.length}.`);
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    if (expectedArgs[i] !== 'any' && typeof args[i] !== expectedArgs[i]) {
      console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedArgs[i]}', but got '${typeof args[i]}'.`);
      return false;
    }
  }
  return true;
}
function getEventMetadata() {
  return {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: window.navigator.userAgent,
    language: window.navigator.language,
    platform: window.navigator.platform,
    token: generateUniqueToken()
  };
}
DataWrapper = function () {
  function n() {
    this.hasErrors = !1;
    this._appErrors = null;
    this.hasIndicators = !1;
    this._indicators = null;
    this.hasTracepoints = !1;
    this._tracepoints = null;
  }
  return n.prototype.addError = function (n, t) {
    this.hasErrors || (this._appErrors = {}, this.hasErrors = !0);
    this._appErrors[n] = t;
  }, n.prototype.getErrors = function () {
    return this._appErrors;
  }, n.prototype.addIndicator = function (n) {
    this.hasIndicators || (this._indicators = {}, this.hasIndicators = !0);
    for (var t in n) this._indicators[t] = n[t];
  }, n.prototype.getIndicators = function () {
    return this._indicators;
  }, n.prototype.addTracepoint = function (n) {
    this.hasTracepoints || (this._tracepoints = {}, this.hasTracepoints = !0);
    for (var t in n) this._tracepoints[t] = n[t];
  }, n.prototype.getTracepoints = function () {
    return this._tracepoints;
  }, n;
}(), function () {
  var l, i;
  if (document.getElementById && (window.attachEvent || window.addEventListener)) {
    var n = parent.window,
      s = n.location,
      t = n.RProfiler,
      e = n.WindowEvent,
      v = s.protocol + "//",
      ct = t.version,
      y = !!n.performance && typeof n.performance == "object",
      p = y && typeof n.performance.getEntriesByType == "function",
      o = y && !!n.performance.timing,
      h = o && p,
      c = {
        Load: e.Load,
        BeforeUnload: e.BeforeUnload,
        Unload: e.Unload,
        Abort: e.Abort,
        Error: e.Error
      },
      it = "test",
      rt = "v3.3.5",
      u = {
        sampleRate: 100,
        waterfallSampleRate: 10,
        postUrl: v + "r.3gl.net/hawklogserver/r.p",
        siteId: 3543,
        debugParameter: "GlimpseDebug",
        debugUrl: "g.3gl.net/jp/v3.3.5/D",
        waterfallParameter: "GlimpseWaterfall",
        sendOnLoad: !1,
        clearResources: !0
      },
      w = function () {
        return new Date().getTime();
      };
    !n.__cpPostUrl || (u.postUrl = n.__cpPostUrl.trim());
    !n.__cpSendOnLoad || (u.sendOnLoad = n.__cpSendOnLoad === !0);
    var b = function () {
        function t() {}
        return t.save = function (i) {
          if (t.canUseLocalStorage()) {
            n.localStorage.setItem(t.storeKey, i);
            return;
          }
          t.setCookie(i);
        }, t.read = function () {
          if (t.canUseLocalStorage()) {
            var i = n.localStorage.getItem(t.storeKey);
            if (i) return i;
          }
          return this.readCookie();
        }, t.canUseLocalStorage = function () {
          var r = !0,
            i,
            u,
            f;
          try {
            i = t.storeKey + "delete";
            u = i + 0;
            n.localStorage.setItem(i, u);
            f = n.localStorage.getItem(i);
            r = u === f;
            r && n.localStorage.removeItem(i);
          } catch (e) {
            r = !1;
          }
          return r;
        }, t.setCookie = function (i) {
          var r = new Date();
          r.setTime(r.getTime() + t.cookieExpireDays * 864e5);
          var e = "; expires=" + r.toUTCString(),
            u = n.document.domain.split("."),
            f = u.length,
            o = u[f - 2] + "." + u[f - 1];
          document.cookie = t.storeKey + "=" + encodeURIComponent(i) + e + "; path=/; domain=" + o + "; SameSite=Lax;";
        }, t.readCookie = function () {
          for (var i, f = n.document.cookie.split(";"), e = t.storeRegex, r = 0, u = f; r < u.length; r++) if (i = u[r], e.test(i)) return decodeURIComponent(i.substring(i.indexOf("=") + 1, i.length));
          return "";
        }, t.cookieExpireDays = 365, t.storeKey = "__CG", t.storeRegex = new RegExp("^(\\s)*" + t.storeKey + "=", "i"), t;
      }(),
      r = function () {
        function r() {}
        return r.getValue = function (n, t) {
          var u = n.responseStart !== 0;
          switch (t) {
            case i.DNS:
              return r.getMetricValue(n.domainLookupEnd, n.domainLookupStart, u);
            case i.Connect:
              return r.getMetricValue(n.connectEnd, n.connectStart, u);
            case i.Load:
              return r.getMetricValue(n.responseEnd, n.responseStart, u);
            case i.Wait:
              return r.getMetricValue(n.responseStart, n.requestStart, u);
            case i.Start:
              return n.startTime;
            case i.Redirect:
              return r.getMetricValue(n.redirectEnd, n.redirectStart);
            case i.Duration:
              return n.duration;
            case i.SSL:
              if (n.secureConnectionStart) return u ? n.connectEnd - n.secureConnectionStart : null;
          }
          return 0;
        }, r.getMetricValue = function (n, t, i) {
          if (i === void 0 && (i = !0), i) {
            if (n >= 0 && n >= t && t >= 0) {
              var r = n - t;
              return Math.round(r);
            }
          } else return null;
        }, r.getRoundedValue = function (n) {
          return n ? Math.round(n) : n;
        }, r.addScriptTag = function (n, t) {
          var i = t.document.createElement("script");
          i.type = "text/javascript";
          i.src = v + n;
          t.document.body.appendChild(i);
        }, r.getQueryStringValue = function (n) {
          for (var u = s.search.substring(1), r = u.split("&"), t, i = 0; i < r.length; i++) if (t = r[i].split("="), t[0] == n) return t[1];
          return "";
        }, r.stopEvents = function () {
          t && (t.eventManager.clear(), t.getEventTimingHandler().clear());
        }, r.getNavigationTime = function () {
          var t = null,
            i = p && n.performance.getEntriesByType("navigation");
          return i && i.length !== 0 ? t = i[0] : o && (t = n.performance.timing), t;
        }, r.getNavigationStart = function (n) {
          var t = n,
            i = n;
          return t.navigationStart || i.startTime;
        }, r;
      }(),
      k = function () {
        function t(t) {
          var i = this,
            u;
          this.longTaskEndTime = 0;
          this.waitTime = 5e3;
          this.performanceObserverApi = n.PerformanceObserver;
          this.performanceLongTaskTiming = n.PerformanceLongTaskTiming;
          this.nowTime = 0;
          this.isSoftnav = !1;
          this.getDomContentLoad = function () {
            var n = r.getNavigationTime(),
              t,
              i;
            if (n) return t = r.getNavigationStart(n), i = r.getMetricValue(n.domContentLoadedEventEnd, t), i;
          };
          this.observeLongTask = function (n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t],
                u = i.isSoftnav ? r.startTime - i.nowTime : r.startTime,
                f = u - i.longTaskEndTime;
              f >= i.waitTime ? i.performanceObserver.disconnect() : i.setLongTaskTime(r);
            }
          };
          this.setLongTaskTime = function (n) {
            var t = Math.round(n.startTime + n.duration);
            i.longTaskEndTime = t;
          };
          this.getLongTaskTime = function () {
            return i.longTaskEndTime;
          };
          this.performanceLongTaskTiming && (this.isSoftnav = t, this.nowTime = n.performance.now(), u = this.getDomContentLoad(), t || (this.longTaskEndTime = u), this.observe(["longtask"], this.observeLongTask));
        }
        return t.prototype.observe = function (n, t) {
          this.performanceObserverApi && (this.performanceObserver = new this.performanceObserverApi(function (n) {
            var i = n.getEntries();
            t(i);
          }), this.performanceObserver.observe({
            entryTypes: n
          }));
        }, t;
      }(),
      f;
    (function (n) {
      n.UserId = "u";
      n.SessionId = "s";
      n.SessionTime = "t";
      n.PageViewCount = "c";
      n.UrlCheckSum = "k";
      n.PostFlag = "f";
    })(f || (f = {})), function (n) {
      n[n.GET = 0] = "GET";
      n[n.POST = 1] = "POST";
      n[n.HEAD = 2] = "HEAD";
      n[n.DELETE = 3] = "DELETE";
      n[n.OPTIONS = 4] = "OPTIONS";
      n[n.PUT = 5] = "PUT";
      n[n.TRACE = 6] = "TRACE";
      n[n.CONNECT = 7] = "CONNECT";
    }(l || (l = {})), function (n) {
      n[n.DNS = 0] = "DNS";
      n[n.Connect = 1] = "Connect";
      n[n.Load = 2] = "Load";
      n[n.Wait = 3] = "Wait";
      n[n.Start = 4] = "Start";
      n[n.Redirect = 5] = "Redirect";
      n[n.Duration = 6] = "Duration";
      n[n.SSL = 7] = "SSL";
    }(i || (i = {}));
    var ut = function () {
        function n() {
          this.userId = -1;
          this.sessionId = 0;
          this.sessionTime = 0;
          this.pageViewCount = 0;
          this.viewCount = 0;
          this.pageViewId = 0;
          this.postFlag = -1;
          this.sendWaterfall = !1;
          this.exitToEntry = 0;
        }
        return n.prototype.resetViewCount = function () {
          this.viewCount = 1;
        }, n.prototype.save = function () {
          var n = this.getText();
          b.save(n);
        }, n.prototype.load = function () {
          var e = b.read(),
            o,
            r,
            u,
            s,
            i,
            t,
            h,
            n;
          if (!e) return !1;
          for (o = e.split(","), r = 0, u = o; r < u.length; r++) if (s = u[r], i = s.split(":"), i.length === 2) {
            if (t = i[0], typeof t == "string" && (t = t.trim()), h = i[1], t === f.UrlCheckSum) {
              this.urlCheckSum = h;
              continue;
            }
            if (n = parseInt(i[1], 10), !isNaN(n)) switch (t) {
              case f.UserId:
                this.userId = n;
                break;
              case f.SessionId:
                this.sessionId = n;
                break;
              case f.SessionTime:
                this.sessionTime = n;
                break;
              case f.PageViewCount:
                this.pageViewCount = n;
                break;
              case f.PostFlag:
                this.postFlag = n;
            }
          }
          return !0;
        }, n.prototype.getText = function () {
          var n = f.UserId + ":" + this.userId + ",";
          return n += f.SessionId + ":" + this.sessionId + ",", n += f.SessionTime + ":" + this.sessionTime + ",", n += f.PageViewCount + ":" + this.pageViewCount + ",", n += f.UrlCheckSum + ":" + this.urlCheckSum + ",", n + (f.PostFlag + ":" + this.postFlag);
        }, n;
      }(),
      ft = function () {
        function i() {
          this.sessionExpire = 18e5;
          this.store = new ut();
        }
        return i.prototype.updateSessionTime = function () {
          if (this.store) {
            var n = new Date().getTime();
            n - this.store.sessionTime > this.sessionExpire && (this.store.sessionId = 0);
            this.store.sessionTime = n;
            this.updateStore();
          }
        }, i.prototype.updateStore = function () {
          this.store && this.store.save();
        }, i.prototype.initStore = function () {
          var n = this.store.load();
          !n;
        }, i.prototype.checkAndResetPostFlags = function () {
          var n, t;
          if (this.store.postFlag = 0, u.sampleRate < 0) {
            this.store.postFlag = -1;
            return;
          }
          n = this.getUserId(u.sampleRate / 100);
          this.store.userId <= n && (this.store.postFlag = 1, t = n / (100 / u.waterfallSampleRate), this.store.sendWaterfall = this.store.userId <= t);
        }, i.prototype.getReferrer = function (n) {
          for (var i = this.getHostName(n).replace(":", "-"), r = n.indexOf("?"), u = 0, t = i.length; t < n.length; t++) u += n.charCodeAt(t) % t;
          return i + "/" + (r < 0 ? n.length : r) + "/" + n.length + "/" + u;
        }, i.prototype.getHostName = function (n) {
          var i = n.indexOf("//") + 2,
            t = n.indexOf("/", i);
          return i < 2 && t == -1 ? n : (t == -1 && (t = n.length), n.substring(i, t));
        }, i.prototype.init = function () {
          var i = t.data.start;
          return this.initStore(), (this.store.userId == -1 || this.store.userId == it) && (this.store.userId = this.getUserId()), this.checkAndResetPostFlags(), this.store.sessionId == 0 || i - this.store.sessionTime > this.sessionExpire ? (this.store.sessionId = Math.floor(1 + Math.random() * ((Math.pow(2, 32) - 2) / 2)), this.store.pageViewCount = 1) : (this.store.pageViewCount < 65535 && this.store.pageViewCount++, this.getReferrer(n.document.referrer) == this.store.urlCheckSum && this.store.sessionTime > 0 && (this.store.exitToEntry = i - this.store.sessionTime)), this.store.sessionTime = new Date().getTime(), this.store.pageViewId = Math.floor(1 + Math.random() * ((Math.pow(2, 16) - 2) / 2)), this.store.urlCheckSum = this.getReferrer(n.location.href), this.store.resetViewCount(), this.updateStore(), this.store.load();
        }, i.prototype.getUserId = function (n) {
          n === void 0 && (n = Math.random());
          return Math.floor(1 + n * ((Math.pow(2, 64) - 2) / 2));
        }, i.prototype.shouldPost = function () {
          return this.store.postFlag == 1;
        }, i;
      }(),
      d = function () {
        function n(n) {
          this.char = n;
          this.children = [];
        }
        return n;
      }(),
      g = function () {
        function n() {
          this.root = new d("");
          this.isReversed = !0;
        }
        return n.prototype.add = function (n, t) {
          var u, i, f, e, r;
          for (n === void 0 && (n = this.root), u = n.children, i = 0, f = u; i < f.length; i++) if (e = f[i], e.char == t) return e;
          return r = new d(t), u.push(r), r.parent = n, r;
        }, n.prototype.toObject = function () {
          var n = {},
            t = this.isReversed;
          return function i(n, r) {
            var o = n.char == "",
              e,
              u,
              f;
            if (o) e = r;else {
              if (u = n.char, n.children.length == 1) while (n.children.length == 1) n = n.children[0], u = t ? n.char + u : u + n.char, n.data && (r[u] = n.data);
              r[u] = n.data || {};
              e = r[u];
            }
            for (f = 0; f < n.children.length; f++) i(n.children[f], e);
          }(this.root, n), n;
        }, n;
      }(),
      a = new k(!1),
      nt = function () {
        function n(n) {
          this.dns = null;
          this.connect = null;
          this.load = null;
          this.wait = null;
          this.start = 0;
          this.duration = 0;
          this.redirect = 0;
          this.ssl = null;
          this.url = n.name;
          var t = r.getValue;
          this.dns = t(n, i.DNS);
          this.connect = t(n, i.Connect);
          this.wait = t(n, i.Wait);
          this.load = t(n, i.Load);
          this.start = t(n, i.Start);
          this.duration = t(n, i.Duration);
          this.redirect = t(n, i.Redirect);
          this.ssl = t(n, i.SSL);
        }
        return Object.defineProperty(n.prototype, "url", {
          get: function () {
            return this._url;
          },
          set: function (n) {
            var i, t, u, r;
            n.indexOf("http://") !== -1 ? this.protocol = 0 : n.indexOf("https://") !== -1 && (this.protocol = 1);
            i = n.split("/").slice(1, 3).join("");
            t = i.indexOf(":");
            t != -1 && (u = i.substr(t + 1), r = parseInt(u), isNaN(r) || (this.port = r));
            n = n.substr(n.indexOf(i) + i.length);
            t = n.indexOf("?");
            t != -1 && (n = n.substr(0, t));
            t = n.indexOf("#");
            t != -1 && (n = n.substr(0, t));
            n = n.substr(0, 64);
            this._url = n;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.translateForPost = function () {
          var u = Math.round,
            t = r.getRoundedValue,
            i = {
              u: this.url,
              pr: this.protocol
            },
            n = function (n, t) {
              typeof t != "number" || isNaN(t) || (i[n] = t);
            };
          return n("pt", this.port), n("dn", t(this.dns)), n("fc", t(this.connect)), n("ld", t(this.load)), n("wt", t(this.wait)), n("st", t(this.start)), n("rd", t(this.redirect)), n("dr", t(this.duration)), n("ssl", t(this.ssl)), i;
        }, n;
      }(),
      tt = function (n) {
        function t(t, i, r) {
          var u = n.call(this, i) || this;
          return u.responseTime = 0, u.sendSize = 0, u.responseSize = 0, u.method = l[t.method.toUpperCase()], t.complete && t.connectionEstablished && (u.responseTime = t.complete - t.connectionEstablished), u.isSummary = r, r ? (u.start = undefined, u.count = 1) : u.isAsync = t.isAsync, u.sendSize = t.sendSize || 0, u.responseSize = t.responseSize || 0, u;
        }
        return __extends(t, n), t.prototype.update = function (n, t) {
          var u = r.getValue;
          t.responseStart && (this.dns += u(t, i.DNS), this.connect += u(t, i.Connect), this.wait += u(t, i.Wait), this.load += u(t, i.Load), this.ssl += u(t, i.SSL));
          this.duration += u(t, i.Duration);
          this.redirect += u(t, i.Redirect);
          this.sendSize += n.sendSize || 0;
          this.responseSize += n.responseSize || 0;
          this.count++;
        }, t.prototype.translateForPost = function () {
          var t = n.prototype.translateForPost.call(this);
          return this.isSummary ? t.n = this.count : t.ia = this.isAsync ? 1 : 0, t.md = this.method, t.rp = Math.round(this.responseTime), t.ss = this.sendSize, t.rs = this.responseSize, t;
        }, t;
      }(nt),
      et = function () {
        function n() {
          this.count = 0;
          this.dns = null;
          this.connect = null;
          this.load = null;
          this.wait = null;
          this.duration = 0;
          this.redirect = 0;
          this.ssl = null;
        }
        return n.prototype.addAjaxItem = function (n, t) {
          var i, r, u, f;
          if (this.update(t), i = new tt(n, t, !0), typeof this._ajax == "undefined") {
            this._ajax = [];
            this._ajax.push(i);
            return;
          }
          for (r = 0, u = this._ajax; r < u.length; r++) if (f = u[r], f.url == i.url) {
            f.update(n, t);
            return;
          }
          this._ajax.length < 10 && this._ajax.push(i);
        }, n.prototype.update = function (n) {
          var t = r.getValue;
          n.responseStart && (this.dns += t(n, i.DNS), this.connect += t(n, i.Connect), this.wait += t(n, i.Wait), this.load += t(n, i.Load), this.ssl += t(n, i.SSL));
          this.duration += t(n, i.Duration);
          this.redirect += t(n, i.Redirect);
          this.count++;
        }, n.prototype.translateForPost = function () {
          var n = r.getRoundedValue,
            f = {
              n: this.count,
              dn: n(this.dns),
              fc: n(this.connect),
              ld: n(this.load),
              wt: n(this.wait),
              dr: n(this.duration),
              rd: n(this.redirect),
              ssl: n(this.ssl)
            },
            i,
            t,
            u,
            e;
          if (this._ajax) {
            for (i = [], t = 0, u = this._ajax; t < u.length; t++) e = u[t], i.push(e.translateForPost());
            f.ax = i;
          }
          return f;
        }, n;
      }(),
      ot = function () {
        function n() {
          this._resources = [];
        }
        return n.prototype.translateForPost = function () {
          for (var r, t = [], n = 0, i = this._resources; n < i.length; n++) r = i[n], t.push(r.translateForPost());
          return t;
        }, n.prototype.addItem = function (n) {
          var t = new nt(n);
          this._resources.push(t);
        }, n.prototype.addAjaxItem = function (n, t) {
          var i = new tt(n, t, !1);
          this._resources.push(i);
        }, n;
      }(),
      st = function (n) {
        function t() {
          var t = n !== null && n.apply(this, arguments) || this;
          return t.maxJsErrors = 10, t.charCodes = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
            "&": "%26"
          }, t.strRegex = /["&\\\x00-\x1f\x7f-\x9f]/g, t;
        }
        return __extends(t, n), t.prototype.toString = function (n, t) {
          var i = this.translateForPost(n, t);
          return typeof JSON == "undefined" ? this.jsonStringify(i) : JSON.stringify(i);
        }, t.prototype.strEscape = function (n) {
          var i = this.charCodes[n],
            t;
          return i ? i : (t = n.charCodeAt(0), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16));
        }, t.prototype.jsonStringify = function (n) {
          var t = [],
            i,
            u,
            e,
            r,
            f;
          switch (typeof n) {
            case "string":
              return this.strRegex.test(n) ? '"' + n.replace(this.strRegex, this.strEscape) + '"' : '"' + n + '"';
            case "number":
              return isFinite(n) ? String(n) : "null";
            case "boolean":
              return String(n);
            case "object":
              if (!n) return "null";
              if (n.constructor === Date, typeof n.length == "number" && !n.propertyIsEnumerable("length")) {
                for (i = 0, u = n; i < u.length; i++) e = u[i], t.push(this.jsonStringify(e));
                return "[" + t.join(",") + "]";
              }
              for (r in n) typeof r == "string" && (f = this.jsonStringify(n[r]), !f || t.push(this.jsonStringify(r) + ":" + f));
              return "{" + t.join(",") + "}";
          }
          return "";
        }, t.prototype.translateForPost = function (n, t) {
          var e = this.viewCount > 1,
            i = {},
            u,
            r,
            f;
          if (i.v = rt, i.pt = this.postType, i.ui = this.userId, i.si = this.sessionId, i.di = this.siteId, i.pi = this.pageViewId, i.jsc = this.jsErrorCount || 0, i.rf = this.referrer, i.pc = this.pageViewCount, i.vc = this.viewCount, i.rc = this.redirectCount || 0, this.jsErrors && this.jsErrors.length > 0) {
            for (u = [], r = 0; r < Math.min(this.jsErrors.length, this.maxJsErrors); r++) u.push(this.translateErrorForPost(this.jsErrors[r]));
            i.jse = u;
          }
          return this.hasErrors && (i.ae = this.getErrors()), this.pageGroup && (i.pg = this.pageGroup), this.variation && (i.ab = this.variation), (this.resources || this.ajaxRequests) && (f = this.translateResources(this.resources, this.ajaxRequests), i.res = f.summary, t && (i.wf = f.waterfall)), typeof this.isNewView == "boolean" && (i.nv = this.isNewView ? 1 : 0), this.hasIndicators && (i.ind = this.getIndicators()), this.hasTracepoints && (i.tra = this.getTracepoints()), this.isConversion && (i.cv = this.isConversion ? 1 : 0, this.revenue && (i.rv = this.revenue), this.revenueItems && (i.ri = this.revenueItems)), i.np = this.isNewPageView ? 1 : 0, (n === PostType.OnLoad || n === PostType.OnAbort) && (i.dh = this.screenHeight, i.dw = this.screenWidth, this.isNewPageView && (i.dn = Math.round(this.dns), i.fc = Math.round(this.fullConnect), i.wt = Math.round(this.wait), i.ld = Math.round(this.load), i.de = this.domInteractive, i.dl = this.domLoaded, i.dc = this.docComplete, i.rp = this.response, i.cl = this.contentLoad, i.rd = this.redirect, i.rc = this.redirectCount || 0, i.cls = this.cls, i.lcp = this.lcp, this.secureConnect && (i.sc = this.secureConnect), this.exitToEntry && (i.xe = this.exitToEntry), this.entryToOnLoad && (i.el = this.entryToOnLoad), this.prerender && (i.pr = this.prerender))), n === PostType.OnBeforeUnload && (i.maf = this.markAboveTheFold, i.mfl = this.markFullyLoaded, i.mfv = this.markFullyVisible, i.mtu = this.markTimeToUserAction, i.tp = this.timeOnPage, i.tti = this.timeToInteract, i.et = this.engagementTime, i.fet = this.firstEngagementTime, i.fid = this.firstInputDelay, i.vct = this.visComplete, i.fid = this.firstInputDelay, e || (i.fp = this.firstPaint, i.fcp = this.firstContentPaint, i.cls = this.cls, i.lcp = this.lcp)), i;
        }, t.prototype.translateErrorForPost = function (n) {
          var i = {},
            t,
            r;
          return i.m = n.message, i.n = n.lineNumber, i.c = n.count + 1, t = n.url, t && (r = t.indexOf("?"), r != -1 && (t = t.substr(0, r))), i.u = t, i;
        }, t.prototype.translateResources = function (n, t) {
          var b = !!n,
            k = !!t,
            d,
            r,
            c,
            v,
            u,
            i,
            y,
            h,
            l,
            p,
            w,
            f,
            e,
            o,
            a;
          if (!b && !k) return null;
          if (d = function (n) {
            var r, o, c, e, i;
            if (!b || !k) return null;
            for (r = 0, o = t; r < o.length; r++) {
              var h = o[r],
                u = h.url,
                f = "";
              if (u && u.indexOf("http") != 0) {
                for (c = 0, e = s.href, i = 0; i < e.length; i++) if (e[i] === "/" && (c += 1), c === 3) {
                  f = e.slice(0, i);
                  f = f + u;
                  break;
                }
                if (f === n.name) return h;
              }
              if (u === n.name) return h;
            }
            return null;
          }, r = {}, n) for (c = 0, v = n; c < v.length; c++) (u = v[c], u) && (i = u.name.split("/").slice(1, 3).join(""), i && i.length != 0) && (y = i.indexOf(":"), y != -1 && (i = i.substr(0, y)), r.hasOwnProperty(i) || (r[i] = {
            summary: new et(),
            waterfall: new ot()
          }), h = r[i], l = d(u), l ? (h.summary.addAjaxItem(l, u), h.waterfall.addAjaxItem(l, u)) : (h.summary.update(u), h.waterfall.addItem(u)));
          p = new g();
          for (f in r) {
            for (e = undefined, o = f.length - 1; o >= 0; o--) a = f[o], e = p.add(e, a);
            e.data = r[f].summary.translateForPost();
          }
          w = new g();
          for (f in r) {
            for (e = undefined, o = f.length - 1; o >= 0; o--) a = f[o], e = w.add(e, a);
            e.data = r[f].waterfall.translateForPost();
          }
          return {
            summary: p.toObject(),
            waterfall: w.toObject()
          };
        }, t;
      }(DataWrapper),
      ht = function () {
        function i() {
          var i = this,
            v,
            f,
            e,
            s,
            l;
          if (this.visitor = new ft(), this.postUrl = u.postUrl, this.didSendInitial = !1, this.isDebugging = !1, this.countResourcesSent = 0, this.didSoftNavigation = !1, this.currentUrl = "", this.softNavigationStart = 0, this.MaxNumberOfPerformanceMarks = 1e3, this.updatePerformanceMetrics = function (n) {
            var t = r.getNavigationTime();
            if (t) {
              var f = t,
                e = t,
                i = r.getNavigationStart(t),
                o = f.domLoading || e.loadEventEnd,
                u = t.responseStart;
              n.dns = u ? t.domainLookupEnd - t.domainLookupStart : null;
              n.fullConnect = u ? t.connectEnd - t.connectStart : null;
              n.wait = u ? t.responseStart - t.requestStart : null;
              n.load = u ? t.responseEnd - t.responseStart : null;
              n.domInteractive = r.getMetricValue(t.domInteractive, i);
              n.domLoaded = r.getMetricValue(t.domContentLoadedEventStart, i);
              n.docComplete = r.getMetricValue(t.domComplete, i);
              n.response = r.getMetricValue(t.responseEnd, i);
              n.contentLoad = r.getMetricValue(t.loadEventStart, o);
              n.redirect = t.redirectEnd - t.redirectStart;
              t.secureConnectionStart && (n.secureConnect = t.connectEnd - t.secureConnectionStart);
            }
          }, this.updateResources = function (t, r) {
            if (o) {
              var f = [];
              h && (f = n.performance.getEntriesByType("resource"));
              t != PostType.OnLoad && (i.setClearResources(), u.clearResources && n.performance.clearResourceTimings ? (r.resources = f, n.performance.clearResourceTimings()) : (r.resources = f.slice(i.countResourcesSent), i.countResourcesSent = f.length));
            }
          }, this.getTimeOnPage = function (n) {
            var t = i.getFocusAwayTime(),
              r = i.getNavigationStart(n);
            return w() - r - t;
          }, this.getVisuallyComplete = function (t) {
            if (n.CPVisuallyComplete) {
              var i = n.CPVisuallyComplete.getValue(t);
              if (typeof i == "number" && i >= 0) return i;
            }
          }, this.updateEngagementMetrics = function (u, f) {
            var e, o;
            if (h && (e = n.performance.getEntriesByType("paint"), e && e.length > 0 && (u.firstPaint = i.getPaintTimings(e, "first-paint"), u.firstContentPaint = i.getPaintTimings(e, "first-contentful-paint"))), o = r.getNavigationTime(), o) {
              var l = r.getNavigationStart(o),
                s = r.getMetricValue(o.domContentLoadedEventEnd, l),
                c = a.getLongTaskTime();
              u.timeToInteract = f ? c || i.getVisuallyComplete(f) : s && s < c ? c : s;
            }
            t.getEventTimingHandler && (u.engagementTime = t.getEventTimingHandler().getEngagementTime(), u.timeOnPage = i.getTimeOnPage(f), u.firstEngagementTime = i.getFirstEngagementTime(f));
            t.getInputDelay && (u.firstInputDelay = t.getInputDelay().getFirstInputDelay());
          }, this.getFirstEngagementTime = function (n) {
            var r = i.getNavigationStart(n),
              u = t.getEventTimingHandler().getFirstEngagementTime();
            return u && r ? u - r : 0;
          }, this.getNavigationStart = function (n) {
            var r = t.getEventTimingHandler && typeof t.getEventTimingHandler == "function" && t.getEventTimingHandler().getStartTime && typeof t.getEventTimingHandler().getStartTime == "function" ? t.getEventTimingHandler().getStartTime() : 0;
            return n ? i.softNavigationStart : r;
          }, this.getElapsedTimeSinceLatestNavStart = function () {
            var n = t.data.start;
            return i.didSoftNavigation && n ? i.softNavigationStart - n : 0;
          }, this.getFocusAwayTime = function () {
            return t.getEventTimingHandler().getFocusAwayTime() || 0;
          }, this.updateDebugData = function () {
            var n = i.createInitPostObject(PostType.OnBeforeUnload, !1),
              f = i.visitor.store.sendWaterfall || !!r.getQueryStringValue(u.waterfallParameter),
              e = n.toString(PostType.OnLoad, f);
            t.debugData = n;
            t.unloadDebugData = e;
          }, this.onPageLoad = function () {
            if (i.isDebugging) {
              t.debugData = i.createInitPostObject(PostType.OnLoad, !1);
              t.updateDebugData = i.updateDebugData;
              t.sendData = function () {
                i.doPost(PostType.OnBeforeUnload, !1);
              };
              r.stopEvents();
              r.addScriptTag(u.debugUrl, n);
              return;
            }
            i.visitor.updateSessionTime();
            i.doPost(PostType.OnLoad, !1);
          }, this.captureSoftNavigations = function () {
            var r, u, f, e, o, s, h;
            (t.eventManager.add("hashchange", n, i.onSoftNavigation), r = n.history, r) && (u = "function", typeof r.go === u && (f = r.go, r.go = function (n) {
              i.onSoftNavigation();
              f.call(r, n);
            }), typeof r.back === u && (e = r.back, r.back = function () {
              i.onSoftNavigation();
              e.call(r);
            }), typeof r.forward === u && (o = r.forward, r.forward = function () {
              i.onSoftNavigation();
              o.call(r);
            }), typeof r.pushState === u && (s = r.pushState, r.pushState = function (n, t, u) {
              i.onSoftNavigation();
              s.call(r, n, t, u);
            }), typeof r.replaceState === u && (h = r.replaceState, r.replaceState = function (n, t, u) {
              i.onSoftNavigation();
              h.call(r, n, t, u);
            }));
          }, this.onViewVisuallyComplete = function () {
            i.didSoftNavigation && i.doPost(PostType.OnLoad, !0);
          }, this.onSoftNavigation = function () {
            if (t.data.loadFired) {
              var r;
              if (a && (a = new k(!0)), n.CPVisuallyComplete) {
                r = n.CPVisuallyComplete;
                r.onComplete(i.onViewVisuallyComplete);
              }
              i.doPost(PostType.OnBeforeUnload, i.didSoftNavigation);
              i.visitor.store.viewCount++;
              !r || n.setTimeout(function () {
                r.reset();
              }, 0);
              n.setTimeout(function () {
                if (i.softNavigationStart = w(), t.getEventTimingHandler) {
                  var n = t.getEventTimingHandler(),
                    r = t.getInputDelay();
                  n.startSoftNavigationCapture();
                  r.startSoftNavigationCapture();
                  n.resetSoftNavigationCapture();
                }
              }, 0);
              i.didSoftNavigation = !0;
            }
          }, this.doPost = function (n, f) {
            var e;
            if (i.visitor.shouldPost()) {
              n != PostType.OnBeforeUnload || t.data.loadFired || (n = PostType.OnAbort);
              i.didSendInitial ? e = i.createDiffPostObject(n, f) : (e = i.createInitPostObject(n, f), i.didSendInitial = !0);
              var o = i.visitor.store.sendWaterfall || !!r.getQueryStringValue(u.waterfallParameter),
                s = n == PostType.OnBeforeUnload || n == PostType.OnAbort,
                h = o && s;
              i.makeRequest(n, e, h);
            }
          }, t && t.data) {
            if (v = this.visitor.init(), this.isDebugging = !!r.getQueryStringValue(u.debugParameter), !this.isDebugging && !v) {
              r.stopEvents();
              return;
            }
            this.captureSoftNavigations();
            f = !1;
            e = function () {
              f || (t.data.loadFired = !0, f = !0, i.onPageLoad());
            };
            t.data.loadFired || !n.document || (t.data.loadFired = n.document.readyState === "complete");
            t.data.loadFired ? e() : t.eventManager.add(c.Load, parent.window, e);
            s = !1;
            l = function () {
              s || (s = !0, i.doPost(PostType.OnBeforeUnload, !1));
            };
            t.eventManager.add(c.BeforeUnload, n, l);
            t.eventManager.add(c.Unload, n, l);
          }
        }
        return i.prototype.createInitPostObject = function (i, r) {
          var f = this.createBasePostObj(i, !0, r),
            s,
            c,
            e;
          return this.updatePerformanceMetrics(f), s = this.visitor.store, s.exitToEntry > 0 && (f.exitToEntry = s.exitToEntry), c = t.data.loadTime - t.data.start, c > 0 && (f.entryToOnLoad = c), document.webkitVisibilityState === "prerender" && (f.prerender = 1), o && (e = void 0, h && (e = n.performance.getEntriesByType("resource"), f.resources = e), i != PostType.OnLoad && (this.setClearResources(), u.clearResources && n.performance.clearResourceTimings ? n.performance.clearResourceTimings() : this.countResourcesSent = e.length)), f;
        }, i.prototype.createDiffPostObject = function (i, r) {
          var u = this.createBasePostObj(i, !1, r),
            e,
            f,
            o;
          return this.updateResources(i, u), this.updateEngagementMetrics(u, r), this.addPerformanceMarksToPostData(n.performance, u), e = this.getVisuallyComplete(r), e && (u.visComplete = e), t && t.getCPWebVitals && (f = t.getCPWebVitals(), f.cls && (u.cls = f.cls), f.lcp && (u.lcp = f.lcp)), t.data.jsCount > 0 && (u.jsErrorCount = t.data.jsCount, u.jsErrors = t.data.jsErrors, t.clearErrors()), o = t.getAjaxRequests(), o && (u.ajaxRequests = o.slice(), t.clearAjaxRequests()), u;
        }, i.prototype.createBasePostObj = function (i, r, f) {
          var e = new st(),
            o;
          return e.postType = i, e.isNewPageView = r, e.siteId = u.siteId, e.referrer = encodeURI(decodeURI(n.location.href)), e.sampleRate = u.sampleRate, e.waterfallSampleRate = u.waterfallSampleRate, o = this.visitor.store, e.userId = o.userId, e.sessionId = o.sessionId, e.pageViewId = o.pageViewId, e.pageViewCount = o.pageViewCount, e.viewCount = o.viewCount, e.screenHeight = screen.height, e.screenWidth = screen.width, this.currentUrl = e.referrer, e.referrer = i === PostType.OnBeforeUnload || i === PostType.OnAbort ? this.currentUrl || encodeURI(decodeURI(n.location.href)) : encodeURI(decodeURI(n.location.href)), f && (e.isNewView = i == PostType.OnLoad), t.hasInsight && (this.addInsightForPost(e), t.clearInfo()), e;
        }, i.prototype.addPerformanceMarksToPostData = function (n, t) {
          var i, f, e, r, u, s;
          if (o && n.getEntriesByType && (i = n.getEntriesByType("mark"), i && i.length > 0 && i.length < this.MaxNumberOfPerformanceMarks)) for (f = this.getElapsedTimeSinceLatestNavStart(), e = i.filter(function (n) {
            return n.startTime != null && n.startTime >= f;
          }), r = 0, u = e; r < u.length; r++) s = u[r], this.addMarkToPostData(s, t);
        }, i.prototype.addMarkToPostData = function (n, t) {
          var i = r.getRoundedValue(n.startTime + n.duration);
          switch (n.name) {
            case "mark_fully_loaded":
              t.markFullyLoaded = i;
              break;
            case "mark_fully_visible":
              t.markFullyVisible = i;
              break;
            case "mark_above_the_fold":
              t.markAboveTheFold = i;
              break;
            case "mark_time_to_user_action":
              t.markTimeToUserAction = i;
          }
        }, i.prototype.getPaintTimings = function (n, t) {
          var i = n.filter(function (n) {
            return n.name === t;
          });
          if (i && i.length > 0 && i[0].startTime) return Math.round(i[0].startTime);
        }, i.prototype.setClearResources = function () {
          !n.__cpPreventResourceClear || (u.clearResources = n.__cpPreventResourceClear === !1);
        }, i.prototype.addInsightForPost = function (n) {
          var f = t.info,
            r,
            s,
            o,
            e,
            u,
            h,
            c,
            i;
          for (r in f) switch (r) {
            case "appError":
              if (i = f[r], i && typeof i == "object") for (e in i) (o = Number(e), isNaN(o)) || (u = i[e], u && typeof u == "string" && (s = u, s.length > 32 && (s = s.substring(0, 32)), n.addError(e, s)));
              break;
            case "conversion":
              if (i = f[r], n.isConversion = !0, i && typeof i == "object") for (e in i) (o = Number(e), isNaN(o)) || (u = i[e], u && typeof u == "number" && (n.revenue = o, n.revenueItems = u));
              break;
            case "indicator":
              h = this.buildInsight(f[r], 0);
              h[0] && n.addIndicator(h[1]);
              break;
            case "tracepoint":
              c = this.buildInsight(f[r], "");
              c[0] && n.addTracepoint(c[1]);
              break;
            case "pageGroup":
              i = f[r];
              i !== undefined && typeof i == "string" && (n.pageGroup = i);
              break;
            case "variation":
              i = f[r];
              i !== undefined && typeof i == "string" && (n.variation = i);
          }
        }, i.prototype.buildInsight = function (n, t) {
          var f = {},
            i = !1,
            r,
            u;
          if (n && typeof n == "object") for (r in n) r && (u = n[r], u && typeof u == typeof t && (f[r] = u, i = !0));
          return i ? [i, f] : [i, f];
        }, i.prototype.makeRequest = function (t, i, r) {
          var f = i.toString(t, r),
            u;
          n.navigator && typeof n.navigator.sendBeacon == "function" ? n.navigator.sendBeacon(this.postUrl, f) : (u = new XMLHttpRequest(), window.XDomainRequest && (u = new window.XDomainRequest(), u.timeout = 0, u.onload = function () {}, u.onerror = function () {}, u.ontimeout = function () {}, u.onprogress = function () {}), u.open("POST", this.postUrl, !1), u.setRequestHeader ? u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8") : null, u.send(f), u = null);
        }, i;
      }(),
      lt = new ht();
  }
}();
function sendEventPayload(payload) {
  const path = '/collect';
  payload.method = 'POST';
  payload.headers = {
    'Content-Type': 'application/json'
  };
  payload.body = JSON.stringify(payload.obj);
  originalFetch(path, payload).catch(error => {
    console.error('Failed to send event payload:', error);
  });
}
function createEventWrapper(functionName, originalFunction, eventArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateEventArguments(functionName, args, eventArgs)) {
      const payload = {
        eventName: functionName,
        args: args,
        metadata: getEventMetadata()
      };
      sendEventPayload({
        obj: payload
      });
    }
    return originalFunction.apply(this, args);
  };
}
eventHooks.forEach(hook => {
  const originalHook = window[hook.name];
  if (typeof originalHook === 'function') {
    window[hook.name] = createEventWrapper(hook.name, originalHook, hook.args);
  }
});
var windowItem = parent.window || window;
window.addEventListener = new Proxy(window.addEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = args[0];
    trackingEvents.push(eventName);
    return target.apply(thisArg, args);
  }
});
windowItem.CPVisuallyComplete = function () {
  var t = function () {
      function n() {
        var n = this;
        this.targetWindow = windowItem;
        this.mutationObserver = undefined;
        this.start = 0;
        this.waitMs = 2e3;
        this.maxResourceTiming = 0;
        this.mutationObserverVal = 0;
        this.scroll = "scroll";
        this.click = "click";
        this.maxDiffBetweenMutation = 1e3;
        this.sinceLastXHR = 500;
        this.disconnectObserverTimeout = 5e3;
        this.hasPerformance = typeof this.targetWindow.performance == "object" && typeof this.targetWindow.performance.getEntriesByType == "function";
        this.removeListeners = function () {
          document.removeEventListener(n.scroll, n.clear);
          document.removeEventListener(n.click, n.clear);
        };
        this.addListeners = function () {
          document.addEventListener(n.scroll, n.clear);
          document.addEventListener(n.click, n.clear);
        };
        this.imageListener = function (t) {
          for (var r = n.targetWindow.performance.getEntriesByType("resource"), u = undefined, i = 0; i < r.length; i++) if (r[i].name === t.target.currentSrc) {
            u = r[i];
            break;
          }
          u && (n.maxResourceTiming = Math.max(n.maxResourceTiming, Math.round(u.responseEnd)));
          t.currentTarget.removeEventListener("load", n.imageListener);
        };
        this.videoListener = function (t) {
          n.maxResourceTiming = Math.max(n.maxResourceTiming, Math.round(n.getPerformanceTime()));
          t.currentTarget.removeEventListener("canplay", n.videoListener);
        };
        this.addListenersForDynamicContent = function (t) {
          for (var r, u, f, e = t.querySelectorAll("img"), i = 0; i < e.length; i += 1) r = e[i], n.isVisible(r) && r.addEventListener("load", n.imageListener);
          for (u = t.querySelectorAll("video"), i = 0; i < u.length; i += 1) f = u[i], n.isVisible(f) && f.addEventListener("canplay", n.videoListener);
        };
        this.clear = function () {
          clearTimeout(n.timeout);
          n.removeListeners();
          n.trigger();
        };
        this.onLoad = function () {
          n.timeout = window.setTimeout(function () {
            n.removeListeners();
            n.calculate();
          }, n.waitMs);
        };
        this.getBackgroundImagesTiming = function () {
          for (var h, r, f, c, w, i, b, e, o, l, y = function (n) {
              if (n && n.startsWith("url")) {
                var t = n.match(/url\(["']?([^"']*)["']?\)/),
                  i = t && t.length > 1 && t[1];
                if (i && !i.startsWith("data")) return i;
              }
              return null;
            }, s = [], t = 0; t < document.styleSheets.length; t += 1) {
            h = document.styleSheets[t];
            try {
              for (r = 0; r < h.cssRules.length; r += 1) {
                var p = h.cssRules[r],
                  k = p.selectorText,
                  u = p.style;
                if (u) for (f = 0; f < u.length; f += 1) c = u[f], c === "background-image" && (w = u[c], i = y(w), i && (b = n.targetWindow.document.querySelector(k), n.isVisible(b) && s.push(i)));
              }
            } catch (nt) {}
          }
          for (e = n.targetWindow.document.querySelectorAll('[style*="background"]'), t = 0; t < e.length; t++) if (n.isVisible(e[t])) {
            var d = n.targetWindow.getComputedStyle(e[t]),
              g = d.getPropertyValue("background-image"),
              i = y(g);
            i && s.push(i);
          }
          for (o = 0, l = s; o < l.length; o++) {
            var i = l[o],
              a = n.targetWindow.performance.getEntriesByType("resource"),
              v = undefined;
            for (t = 0; t < a.length; t++) if (a[t].name === new URL(i, n.targetWindow.location.href).href) {
              v = a[t];
              break;
            }
            v && (n.maxResourceTiming = Math.max(n.maxResourceTiming, Math.round(v.responseEnd)));
          }
        };
        this.calculate = function () {
          if (!n.targetWindow.performance) {
            n.trigger();
            return;
          }
          n.getBackgroundImagesTiming();
          n.trigger();
        };
        this.getPerformanceTime = function () {
          return n.targetWindow.performance.now();
        };
        this.resetValueOnSoftNav = function () {
          n.mutationObserverVal = 0;
          n.maxResourceTiming = 0;
          n.isSoftNav = !1;
        };
        this.isVisible = function (t) {
          var i = typeof t.getBoundingClientRect == "function" && t.getBoundingClientRect(),
            u = i && i.width * i.height >= 8 && i.right >= 0 && i.bottom >= 0 && i.left <= n.targetWindow.innerWidth && i.top <= n.targetWindow.innerHeight && !t.hidden && t.type !== "hidden",
            r;
          return u ? (r = window.getComputedStyle(t), r.display !== "none" && r.visibility !== "hidden" && r.visibility !== "collapse" && +r.opacity > 0) : !1;
        };
        this.mutationCallback = function (t) {
          t.forEach(function (t) {
            var i, u, f, e, r;
            if (t.type === "childList" && t.addedNodes.length > 0) {
              if (i = t.addedNodes[0], n.isVisible(i)) {
                for (i.nodeName.toLowerCase() === "img" && i.addEventListener("load", n.imageListener), i.nodeName.toLowerCase() === "video" && i.addEventListener("canplay", n.videoListener), u = n.getPerformanceTime(), n.isSoftNav && n.resetValueOnSoftNav(), f = n.targetWindow.performance.getEntriesByType("resource"), e = undefined, r = 0; r < f.length; r++) if (f[r].initiatorType === "xmlhttprequest") {
                  e = f[r];
                  break;
                }
                (n.mutationObserverVal === 0 || e && u - e.responseEnd < n.sinceLastXHR || u - n.mutationObserverVal <= n.maxDiffBetweenMutation) && (n.mutationObserverVal = Math.round(u));
              }
            } else t.type === "attributes" && t.target.nodeName.toLowerCase() === "img" && t.attributeName === "src" && n.isVisible(t.target) && t.target.addEventListener("load", n.imageListener);
          });
        };
        this.initMutationObserver = function () {
          var t = n.targetWindow.MutationObserver || n.targetWindow.WebKitMutationObserver || n.targetWindow.MozMutationObserver;
          t && n.targetWindow.performance && (n.mutationObserver = new t(n.mutationCallback), n.observe());
        };
        this.trigger = function () {
          if (n.callback) {
            var t = n.getValue(!1);
            n.callback(t);
          }
        };
        this.observe = function () {
          n.mutationObserver.observe(n.targetWindow.document, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
          });
          setTimeout(function () {
            n.mutationObserver.disconnect();
          }, n.disconnectObserverTimeout);
        };
        this.getValue = function (t) {
          var r = t || n.isSoftNav,
            i;
          return n.maxResourceTiming || n.mutationObserverVal ? (i = 0, n.maxResourceTiming && n.mutationObserverVal ? i = Math.max(n.maxResourceTiming, n.mutationObserverVal) : n.maxResourceTiming ? i = n.maxResourceTiming : n.mutationObserverVal && (i = n.mutationObserverVal), !r) ? Math.round(Math.max(i - n.start, n.getFirstPaintTime())) : Math.round(i - n.start) : undefined;
        };
        this.onComplete = function (t) {
          n.callback = t;
        };
        this.reset = function () {
          n.isSoftNav = !0;
          n.targetWindow.performance && (n.start = n.getPerformanceTime(), n.mutationObserver.disconnect(), n.observe(), n.onLoad());
        };
        this.captureSoftNavigations = function () {
          var t, i, r, u, f, e, o;
          n.targetWindow.HashChangeEvent && !n.targetWindow.RProfiler && (n.addEvent("hashchange", n.targetWindow, n.reset), t = n.targetWindow.history, t) && (i = "function", typeof t.go === i && (r = t.go, t.go = function (i) {
            n.reset();
            r.call(t, i);
          }), typeof t.back === i && (u = t.back, t.back = function () {
            n.reset();
            u.call(t);
          }), typeof t.forward === i && (f = t.forward, t.forward = function () {
            n.reset();
            f.call(t);
          }), typeof t.pushState === i && (e = t.pushState, t.pushState = function (i, r, u) {
            n.reset();
            e.call(t, i, r, u);
          }), typeof t.replaceState === i && (o = t.replaceState, t.replaceState = function (i, r, u) {
            n.reset();
            o.call(t, i, r, u);
          }));
        };
        this.initMutationObserver();
        this.captureSoftNavigations();
        this.init();
      }
      return n.prototype.init = function () {
        var t = this,
          n = this.targetWindow.document;
        n.readyState === "complete" ? this.onLoad() : this.targetWindow.addEventListener("load", this.onLoad);
        n.readyState === "interactive" ? this.addListenersForDynamicContent(n) : this.targetWindow.addEventListener("DOMContentLoaded", function () {
          t.addListenersForDynamicContent(n);
        });
        this.removeListeners();
        this.addListeners();
      }, n.prototype.addEvent = function (n, t, i) {
        this.targetWindow.attachEvent ? t.attachEvent("on" + n, i) : t.addEventListener(n, i, !1);
      }, n.prototype.getFirstPaintTime = function () {
        var r = 0,
          n,
          t,
          i;
        try {
          n = this.targetWindow.performance.getEntriesByType("paint");
          n && n.length > 0 && (t = n.filter(function (n) {
            return n.name === "first-paint";
          }), t && t.length > 0 && t[0].startTime && (r = Math.round(t[0].startTime)), i = n.filter(function (n) {
            return n.name === "first-contentful-paint";
          }), i && i.length > 0 && i[0].startTime && (r = Math.round(i[0].startTime)));
        } catch (u) {}
        return r;
      }, n;
    }(),
    n = new t();
  return {
    getValue: n.getValue,
    onComplete: n.onComplete,
    reset: n.reset
  };
}();
window.setTimeout = new Proxy(originalSetTimeout, {
  apply: function (target, thisArg, args) {
    return window.eventHooks['setTimeout'].apply(target, thisArg, args);
  }
});
window.setInterval = new Proxy(originalSetInterval, {
  apply: function (target, thisArg, args) {
    return window.eventHooks['setInterval'].apply(target, thisArg, args);
  }
});
window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
  apply: function (target, thisArg, args) {
    return window.eventHooks['requestAnimationFrame'].apply(target, thisArg, args);
  }
});
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, args) {
    return window.eventHooks['fetch'].apply(target, thisArg, args);
  }
});
window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    const payload = {
      eventName: 'localStorage.setItem',
      args: args,
      metadata: getEventMetadata()
    };
    sendEventPayload({
      obj: payload
    });
    return target.apply(thisArg, args);
  }
});