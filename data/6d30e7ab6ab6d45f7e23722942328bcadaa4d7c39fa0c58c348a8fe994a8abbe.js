function enhancedPropertyDiscovery() {
  const discoveredProps = {};
  const globalVars = Object.keys(window);
  globalVars.forEach(prop => {
    if (!window.knownVars.includes(prop)) {
      const value = window[prop];
      const type = typeof value;
      discoveredProps[prop] = {
        type,
        value: type === "function" ? `[Function: ${value.name}]` : value
      };
    }
  });

  // Hook into local storage to track changes
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    console.log(`LocalStorage Set: ${key} = ${value}`);
    originalSetItem.apply(this, arguments);
  };
  return discoveredProps;
}
window.__cdnJSPath = function () {
  return "https://s-eu-1.pushpushgo.com/scripts/6543c01ce52e5cf8b173abbe/";
};
function sendTrackingData(data) {
  const endpoint = "https://example.com/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Tracking data sent successfully:', data)).catch(error => console.error('Failed to send tracking data:', error));
}
var ppg = ppg || {};
ppg.events = function (e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }
  var n = window.webpackJsonpppg__name_;
  window.webpackJsonpppg__name_ = function (t, r, i) {
    for (var s, a, u = 0, c = []; u < t.length; u++) a = t[u], o[a] && c.push(o[a][0]), o[a] = 0;
    for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    for (n && n(t, r, i); c.length;) c.shift()();
  };
  var r = {},
    o = {
      8: 0
    };
  return t.e = function (e) {
    function n() {
      a.onerror = a.onload = null, clearTimeout(u);
      var t = o[e];
      0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0);
    }
    var r = o[e];
    if (0 === r) return new Promise(function (e) {
      e();
    });
    if (r) return r[2];
    var i = new Promise(function (t, n) {
      r = o[e] = [t, n];
    });
    r[2] = i;
    var s = document.getElementsByTagName("head")[0],
      a = document.createElement("script");
    a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, t.nc && a.setAttribute("nonce", t.nc), a.src = t.p + "" + ({
      0: "sentry",
      1: "pf-object-assign",
      2: "pf-number-is-nan",
      3: "plugin-beacon",
      4: "plugin-push",
      5: "plugin-wizard",
      6: "plugin-geolocation",
      7: "pf-sendBeacon"
    }[e] || e) + ".js";
    var u = setTimeout(n, 12e4);
    return a.onerror = a.onload = n, s.appendChild(a), i;
  }, t.m = e, t.c = r, t.i = function (e) {
    return e;
  }, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t.oe = function (e) {
    throw console.error(e), e;
  }, Object.defineProperty(t, "p", {
    get: function () {
      try {
        if ("function" != typeof __cdnJSPath) throw new Error("WebpackRequireFrom: '__cdnJSPath' is not a function or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
        return __cdnJSPath();
      } catch (e) {
        return console.error(e), "";
      }
    }
  }), t(t.s = 53);
}([function (e, t, n) {
  "use strict";

  function r(e, t) {
    function n() {
      this.constructor = e;
    }
    f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }
  function o(e, t, n, r) {
    var o,
      i = arguments.length,
      s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
    return i > 3 && s && Object.defineProperty(t, n, s), s;
  }
  function i(e, t, n, r) {
    function o(e) {
      return e instanceof n ? e : new n(function (t) {
        t(e);
      });
    }
    return new (n || (n = Promise))(function (n, i) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        e.done ? n(e.value) : o(e.value).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function s(e, t) {
    function n(e) {
      return function (t) {
        return r([e, t]);
      };
    }
    function r(n) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; u;) try {
        if (o = 1, i && (s = 2 & n[0] ? i.return : n[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, n[1])).done) return s;
        switch (i = 0, s && (n = [2 & n[0], s.value]), n[0]) {
          case 0:
          case 1:
            s = n;
            break;
          case 4:
            return u.label++, {
              value: n[1],
              done: !1
            };
          case 5:
            u.label++, i = n[1], n = [0];
            continue;
          case 7:
            n = u.ops.pop(), u.trys.pop();
            continue;
          default:
            if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
              u = 0;
              continue;
            }
            if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
              u.label = n[1];
              break;
            }
            if (6 === n[0] && u.label < s[1]) {
              u.label = s[1], s = n;
              break;
            }
            if (s && u.label < s[2]) {
              u.label = s[2], u.ops.push(n);
              break;
            }
            s[2] && u.ops.pop(), u.trys.pop();
            continue;
        }
        n = t.call(e, u);
      } catch (e) {
        n = [6, e], i = 0;
      } finally {
        o = s = 0;
      }
      if (5 & n[0]) throw n[1];
      return {
        value: n[0] ? n[1] : void 0,
        done: !0
      };
    }
    var o,
      i,
      s,
      a,
      u = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      };
    return a = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
      return this;
    }), a;
  }
  function a(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function u(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value);
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return s;
  }
  function c() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
    return e;
  }
  t.g = r, n.d(t, "a", function () {
    return l;
  }), t.h = o, t.b = i, t.c = s, t.d = a, t.e = u, t.f = c;
  var f = function (e, t) {
      return (f = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
    },
    l = function () {
      return l = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
          t = arguments[n];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
      }, l.apply(this, arguments);
    };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (e) {
      t = n.i(o.a)(t);
      for (var r in e) e.hasOwnProperty(r) && t(e[r], r);
    }
  }
  t.a = r;
  var o = n(2);
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return n.i(o.a)(e) ? e : function () {};
  }
  t.a = r;
  var o = n(4);
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t = e.method,
      n = void 0 === t ? "GET" : t,
      r = e.url,
      o = e.data;
    return new Promise(function (e, t) {
      var i = new XMLHttpRequest();
      i.open(n, r), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(o)), i.addEventListener("load", function () {
        try {
          var n = i.status;
          if (n >= 200 && n <= 206) return e(JSON.parse(i.responseText));
          t(i);
        } catch (e) {
          t(e);
        }
      }), i.addEventListener("error", function () {
        t("An error occurred");
      });
    });
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return "function" == typeof e;
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), r = window.atob(n), o = new Uint8Array(r.length), i = 0; i < r.length; ++i) o[i] = r.charCodeAt(i);
    return o;
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r() {
    var e = !1;
    try {
      e = !(!window.sessionStorage || "true" !== window.sessionStorage.getItem("ppg_test_mode"));
    } catch (e) {
      console.error("Cannot check state of test mode, session storage is not available error", e.message);
    }
    return e;
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r() {
    return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
  }
  function o(e) {
    return !!(n.i(a.a)() && "object" == typeof window.safari && "pushNotification" in window.safari) && (!e || !!e.websitePushId);
  }
  function i(e) {
    return r() ? s.VAPID : o(e) ? s.SAFARI_LEGACY : s.NO_SUPPORT;
  }
  t.c = r, n.d(t, "b", function () {
    return s;
  }), t.a = i;
  var s,
    a = n(8);
  !function (e) {
    e.SAFARI_LEGACY = "SAFARI_LEGACY", e.VAPID = "VAPID", e.NO_SUPPORT = "NO_SUPPORT";
  }(s || (s = {}));
}, function (e, t, n) {
  "use strict";

  function r() {
    return "safari" in window || navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS");
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e.replace(/(\/)*$/, "").trim();
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r() {
    return "true" === localStorage.getItem(u);
  }
  function o() {
    localStorage.setItem(u, JSON.stringify(!JSON.parse(localStorage.getItem(u) || "false")));
  }
  function i(e, t, n) {
    var o = function (e) {
        try {
          e = JSON.stringify(e);
        } catch (t) {
          e = "Error: " + t.message + " at: ";
        }
        return e;
      },
      i = {
        value: function () {
          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
          var i = n.value.apply(this, e);
          return console.log("Call: " + t + "(" + e.map(o).join() + ") => " + JSON.stringify(i)), i;
        }
      },
      s = {
        value: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return n.value.apply(this, e);
        }
      };
    return r() ? i : s;
  }
  function s() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    r() && console.log.apply(console, a.f(e));
  }
  t.b = i, t.a = s;
  var a = n(0),
    u = "logger_ppg";
  window.document.addEventListener("keyup", function (e) {
    -1 !== [e.which, e.keyCode].indexOf(76) && e.ctrlKey && e.altKey && e.shiftKey && (o(), console.log("Logger enabled => " + r()));
  });
}, function (e, t, n) {
  "use strict";

  function r() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = {};
    return n.i(o.a)(e, function (e) {
      n.i(o.a)(e, function (t, n) {
        r[n] = e[n];
      });
    }), r;
  }
  t.a = r;
  var o = n(1);
}, function (e, t, n) {
  "use strict";

  function r() {
    if (!location.search) return {};
    var e = location.search;
    return (/^[?#]/.test(e) ? e.slice(1) : e).split("&").reduce(function (e, t) {
      var n = o.e(t.split("="), 2),
        r = n[0],
        i = n[1];
      return e[r] = i ? decodeURIComponent(i.replace(/\+/g, " ")) : "", e;
    }, {});
  }
  t.a = r;
  var o = n(0);
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n = e.byteOffset || 0;
    e = e.buffer || e;
    for (var r = 0, o = []; r + t <= e.byteLength;) o.push(new Uint8Array(e, n + r, t)), r += t;
    return r <= e.byteLength && o.push(new Uint8Array(e, n + r)), o;
  }
  function o(e) {
    e = new Uint8Array(e);
    var t = Math.ceil(4 * e.length / 3);
    return r(e, 3).map(function (e) {
      return [e[0] >>> 2, (3 & e[0]) << 4 | e[1] >>> 4, (15 & e[1]) << 2 | e[2] >>> 6, 63 & e[2]].map(function (e) {
        return i[e];
      }).join("");
    }).join("").slice(0, t);
  }
  t.a = o;
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return void 0 === e;
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r;
  !function (e) {
    e.SUBSCRIBED = "subscribed", e.UNSUBSCRIBED = "unsubscribed";
  }(r || (r = {}));
},, function (e, t) {
  var n;
  n = function () {
    return this;
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == typeof window && (n = window);
  }
  e.exports = n;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r = function () {
    function e() {
      var e = this;
      this.promise = new Promise(function (t, n) {
        e.reject = n, e.resolve = t;
      }), Object.freeze(this);
    }
    return e;
  }();
}, function (e, t, n) {
  "use strict";

  function r(e, t, r) {
    return e ? new Promise(function (e) {
      n.e(0).then(function (i) {
        var s = n(21),
          a = s.BrowserClient,
          u = s.Hub,
          c = new a(n.i(o.a)());
        e(function (e) {
          var n = new u(c);
          return n.setExtra("debug", !1), n.setTag("plugin", e), n.setTag("version", t), n.setTag("project", r), function (e) {
            n.captureException(e);
          };
        });
      }.bind(null, n)).catch(n.oe);
    }) : Promise.resolve(function (e) {
      return function (e) {};
    });
  }
  t.a = r;
  var o = n(27);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });
  var r = n(0),
    o = function () {
      function e() {
        this._events = {};
      }
      return e.prototype.getEvents = function (e) {
        return this._events[e] = this._events[e] || [];
      }, e.prototype.on = function (e, t, n) {
        return void 0 === n && (n = null), this.getEvents(e).push(new i(t, n)), this;
      }, e.prototype.off = function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = null);
        var r = this.getEvents(e).filter(function (e) {
          return null === t || e.fn === t;
        }).filter(function (e) {
          return null === n || e.ctx === n;
        });
        return this._events[e] = r, this;
      }, e.prototype.trigger = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return this.getEvents(e).forEach(function (e) {
          return e.invoke.apply(e, r.f(t));
        }), this;
      }, e;
    }(),
    i = function () {
      function e(e, t) {
        void 0 === t && (t = null), this.fn = e, this.ctx = t;
      }
      return e.prototype.invoke = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.fn.apply(this.ctx, e);
      }, e;
    }(),
    s = new o();
},, function (e, t, n) {
  (function (t) {
    var n, n;
    !function (t) {
      e.exports = t();
    }(function () {
      return function e(t, r, o) {
        function i(a, u) {
          if (!r[a]) {
            if (!t[a]) {
              var c = "function" == typeof n && n;
              if (!u && c) return n(a, !0);
              if (s) return s(a, !0);
              var f = new Error("Cannot find module '" + a + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = r[a] = {
              exports: {}
            };
            t[a][0].call(l.exports, function (e) {
              var n = t[a][1][e];
              return i(n || e);
            }, l, l.exports, e, t, r, o);
          }
          return r[a].exports;
        }
        for (var s = "function" == typeof n && n, a = 0; a < o.length; a++) i(o[a]);
        return i;
      }({
        1: [function (e, n, r) {
          (function (e) {
            "use strict";

            function t() {
              f = !0;
              for (var e, t, n = l.length; n;) {
                for (t = l, l = [], e = -1; ++e < n;) t[e]();
                n = l.length;
              }
              f = !1;
            }
            function r(e) {
              1 !== l.push(e) || f || o();
            }
            var o,
              i = e.MutationObserver || e.WebKitMutationObserver;
            if (i) {
              var s = 0,
                a = new i(t),
                u = e.document.createTextNode("");
              a.observe(u, {
                characterData: !0
              }), o = function () {
                u.data = s = ++s % 2;
              };
            } else if (e.setImmediate || void 0 === e.MessageChannel) o = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
              var n = e.document.createElement("script");
              n.onreadystatechange = function () {
                t(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null;
              }, e.document.documentElement.appendChild(n);
            } : function () {
              setTimeout(t, 0);
            };else {
              var c = new e.MessageChannel();
              c.port1.onmessage = t, o = function () {
                c.port2.postMessage(0);
              };
            }
            var f,
              l = [];
            n.exports = r;
          }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}],
        2: [function (e, t, n) {
          "use strict";

          function r() {}
          function o(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function");
            this.state = g, this.queue = [], this.outcome = void 0, e !== r && u(this, e);
          }
          function i(e, t, n) {
            this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected);
          }
          function s(e, t, n) {
            p(function () {
              var r;
              try {
                r = t(n);
              } catch (t) {
                return b.reject(e, t);
              }
              r === e ? b.reject(e, new TypeError("Cannot resolve promise with itself")) : b.resolve(e, r);
            });
          }
          function a(e) {
            var t = e && e.then;
            if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function () {
              t.apply(e, arguments);
            };
          }
          function u(e, t) {
            function n(t) {
              i || (i = !0, b.reject(e, t));
            }
            function r(t) {
              i || (i = !0, b.resolve(e, t));
            }
            function o() {
              t(r, n);
            }
            var i = !1,
              s = c(o);
            "error" === s.status && n(s.value);
          }
          function c(e, t) {
            var n = {};
            try {
              n.value = e(t), n.status = "success";
            } catch (e) {
              n.status = "error", n.value = e;
            }
            return n;
          }
          function f(e) {
            return e instanceof this ? e : b.resolve(new this(r), e);
          }
          function l(e) {
            var t = new this(r);
            return b.reject(t, e);
          }
          function d(e) {
            var t = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var n = e.length,
              o = !1;
            if (!n) return this.resolve([]);
            for (var i = new Array(n), s = 0, a = -1, u = new this(r); ++a < n;) !function (e, r) {
              function a(e) {
                i[r] = e, ++s !== n || o || (o = !0, b.resolve(u, i));
              }
              t.resolve(e).then(a, function (e) {
                o || (o = !0, b.reject(u, e));
              });
            }(e[a], a);
            return u;
          }
          function h(e) {
            var t = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var n = e.length,
              o = !1;
            if (!n) return this.resolve([]);
            for (var i = -1, s = new this(r); ++i < n;) !function (e) {
              t.resolve(e).then(function (e) {
                o || (o = !0, b.resolve(s, e));
              }, function (e) {
                o || (o = !0, b.reject(s, e));
              });
            }(e[i]);
            return s;
          }
          var p = e(1),
            b = {},
            v = ["REJECTED"],
            y = ["FULFILLED"],
            g = ["PENDING"];
          t.exports = o, o.prototype.catch = function (e) {
            return this.then(null, e);
          }, o.prototype.then = function (e, t) {
            if ("function" != typeof e && this.state === y || "function" != typeof t && this.state === v) return this;
            var n = new this.constructor(r);
            if (this.state !== g) {
              s(n, this.state === y ? e : t, this.outcome);
            } else this.queue.push(new i(n, e, t));
            return n;
          }, i.prototype.callFulfilled = function (e) {
            b.resolve(this.promise, e);
          }, i.prototype.otherCallFulfilled = function (e) {
            s(this.promise, this.onFulfilled, e);
          }, i.prototype.callRejected = function (e) {
            b.reject(this.promise, e);
          }, i.prototype.otherCallRejected = function (e) {
            s(this.promise, this.onRejected, e);
          }, b.resolve = function (e, t) {
            var n = c(a, t);
            if ("error" === n.status) return b.reject(e, n.value);
            var r = n.value;
            if (r) u(e, r);else {
              e.state = y, e.outcome = t;
              for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t);
            }
            return e;
          }, b.reject = function (e, t) {
            e.state = v, e.outcome = t;
            for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
            return e;
          }, o.resolve = f, o.reject = l, o.all = d, o.race = h;
        }, {
          1: 1
        }],
        3: [function (e, n, r) {
          (function (t) {
            "use strict";

            "function" != typeof t.Promise && (t.Promise = e(2));
          }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
          2: 2
        }],
        4: [function (e, t, n) {
          "use strict";

          function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }
          function o(e, t) {
            e = e || [], t = t || {};
            try {
              return new Blob(e, t);
            } catch (i) {
              if ("TypeError" !== i.name) throw i;
              for (var n = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, r = new n(), o = 0; o < e.length; o += 1) r.append(e[o]);
              return r.getBlob(t.type);
            }
          }
          function i(e, t) {
            t && e.then(function (e) {
              t(null, e);
            }, function (e) {
              t(e);
            });
          }
          function s(e, t, n) {
            "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n);
          }
          function a(e) {
            return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e;
          }
          function u() {
            if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1];
          }
          function c(e) {
            for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
            return n;
          }
          function f(e) {
            return new ye(function (t) {
              var n = e.transaction(ge, Ie),
                r = o([""]);
              n.objectStore(ge).put(r, "key"), n.onabort = function (e) {
                e.preventDefault(), e.stopPropagation(), t(!1);
              }, n.oncomplete = function () {
                var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                  n = navigator.userAgent.match(/Edge\//);
                t(n || !e || parseInt(e[1], 10) >= 43);
              };
            }).catch(function () {
              return !1;
            });
          }
          function l(e) {
            return "boolean" == typeof me ? ye.resolve(me) : f(e).then(function (e) {
              return me = e;
            });
          }
          function d(e) {
            var t = we[e.name],
              n = {};
            n.promise = new ye(function (e, t) {
              n.resolve = e, n.reject = t;
            }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function () {
              return n.promise;
            }) : t.dbReady = n.promise;
          }
          function h(e) {
            var t = we[e.name],
              n = t.deferredOperations.pop();
            if (n) return n.resolve(), n.promise;
          }
          function p(e, t) {
            var n = we[e.name],
              r = n.deferredOperations.pop();
            if (r) return r.reject(t), r.promise;
          }
          function b(e, t) {
            return new ye(function (n, r) {
              if (we[e.name] = we[e.name] || A(), e.db) {
                if (!t) return n(e.db);
                d(e), e.db.close();
              }
              var o = [e.name];
              t && o.push(e.version);
              var i = ve.open.apply(ve, o);
              t && (i.onupgradeneeded = function (t) {
                var n = i.result;
                try {
                  n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(ge);
                } catch (n) {
                  if ("ConstraintError" !== n.name) throw n;
                  console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.');
                }
              }), i.onerror = function (e) {
                e.preventDefault(), r(i.error);
              }, i.onsuccess = function () {
                n(i.result), h(e);
              };
            });
          }
          function v(e) {
            return b(e, !1);
          }
          function y(e) {
            return b(e, !0);
          }
          function g(e, t) {
            if (!e.db) return !0;
            var n = !e.db.objectStoreNames.contains(e.storeName),
              r = e.version < e.db.version,
              o = e.version > e.db.version;
            if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
              if (n) {
                var i = e.db.version + 1;
                i > e.version && (e.version = i);
              }
              return !0;
            }
            return !1;
          }
          function m(e) {
            return new ye(function (t, n) {
              var r = new FileReader();
              r.onerror = n, r.onloadend = function (n) {
                var r = btoa(n.target.result || "");
                t({
                  __local_forage_encoded_blob: !0,
                  data: r,
                  type: e.type
                });
              }, r.readAsBinaryString(e);
            });
          }
          function w(e) {
            return o([c(atob(e.data))], {
              type: e.type
            });
          }
          function S(e) {
            return e && e.__local_forage_encoded_blob;
          }
          function _(e) {
            var t = this,
              n = t._initReady().then(function () {
                var e = we[t._dbInfo.name];
                if (e && e.dbReady) return e.dbReady;
              });
            return s(n, e, e), n;
          }
          function I(e) {
            d(e);
            for (var t = we[e.name], n = t.forages, r = 0; r < n.length; r++) {
              var o = n[r];
              o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null);
            }
            return e.db = null, v(e).then(function (t) {
              return e.db = t, g(e) ? y(e) : t;
            }).then(function (r) {
              e.db = t.db = r;
              for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = r;
            }).catch(function (t) {
              throw p(e, t), t;
            });
          }
          function E(e, t, n, r) {
            void 0 === r && (r = 1);
            try {
              var o = e.db.transaction(e.storeName, t);
              n(null, o);
            } catch (o) {
              if (r > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return ye.resolve().then(function () {
                if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), y(e);
              }).then(function () {
                return I(e).then(function () {
                  E(e, t, n, r - 1);
                });
              }).catch(n);
              n(o);
            }
          }
          function A() {
            return {
              forages: [],
              db: null,
              dbReady: null,
              deferredOperations: []
            };
          }
          function P(e) {
            function t() {
              return ye.resolve();
            }
            var n = this,
              r = {
                db: null
              };
            if (e) for (var o in e) r[o] = e[o];
            var i = we[r.name];
            i || (i = A(), we[r.name] = i), i.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = _);
            for (var s = [], a = 0; a < i.forages.length; a++) {
              var u = i.forages[a];
              u !== n && s.push(u._initReady().catch(t));
            }
            var c = i.forages.slice(0);
            return ye.all(s).then(function () {
              return r.db = i.db, v(r);
            }).then(function (e) {
              return r.db = e, g(r, n._defaultConfig.version) ? y(r) : e;
            }).then(function (e) {
              r.db = i.db = e, n._dbInfo = r;
              for (var t = 0; t < c.length; t++) {
                var o = c[t];
                o !== n && (o._dbInfo.db = r.db, o._dbInfo.version = r.version);
              }
            });
          }
          function O(e, t) {
            var n = this;
            e = a(e);
            var r = new ye(function (t, r) {
              n.ready().then(function () {
                E(n._dbInfo, _e, function (o, i) {
                  if (o) return r(o);
                  try {
                    var s = i.objectStore(n._dbInfo.storeName),
                      a = s.get(e);
                    a.onsuccess = function () {
                      var e = a.result;
                      void 0 === e && (e = null), S(e) && (e = w(e)), t(e);
                    }, a.onerror = function () {
                      r(a.error);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            return i(r, t), r;
          }
          function N(e, t) {
            var n = this,
              r = new ye(function (t, r) {
                n.ready().then(function () {
                  E(n._dbInfo, _e, function (o, i) {
                    if (o) return r(o);
                    try {
                      var s = i.objectStore(n._dbInfo.storeName),
                        a = s.openCursor(),
                        u = 1;
                      a.onsuccess = function () {
                        var n = a.result;
                        if (n) {
                          var r = n.value;
                          S(r) && (r = w(r));
                          var o = e(r, n.key, u++);
                          void 0 !== o ? t(o) : n.continue();
                        } else t();
                      }, a.onerror = function () {
                        r(a.error);
                      };
                    } catch (e) {
                      r(e);
                    }
                  });
                }).catch(r);
              });
            return i(r, t), r;
          }
          function T(e, t, n) {
            var r = this;
            e = a(e);
            var o = new ye(function (n, o) {
              var i;
              r.ready().then(function () {
                return i = r._dbInfo, "[object Blob]" === Se.call(t) ? l(i.db).then(function (e) {
                  return e ? t : m(t);
                }) : t;
              }).then(function (t) {
                E(r._dbInfo, Ie, function (i, s) {
                  if (i) return o(i);
                  try {
                    var a = s.objectStore(r._dbInfo.storeName);
                    null === t && (t = void 0);
                    var u = a.put(t, e);
                    s.oncomplete = function () {
                      void 0 === t && (t = null), n(t);
                    }, s.onabort = s.onerror = function () {
                      var e = u.error ? u.error : u.transaction.error;
                      o(e);
                    };
                  } catch (e) {
                    o(e);
                  }
                });
              }).catch(o);
            });
            return i(o, n), o;
          }
          function k(e, t) {
            var n = this;
            e = a(e);
            var r = new ye(function (t, r) {
              n.ready().then(function () {
                E(n._dbInfo, Ie, function (o, i) {
                  if (o) return r(o);
                  try {
                    var s = i.objectStore(n._dbInfo.storeName),
                      a = s.delete(e);
                    i.oncomplete = function () {
                      t();
                    }, i.onerror = function () {
                      r(a.error);
                    }, i.onabort = function () {
                      var e = a.error ? a.error : a.transaction.error;
                      r(e);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            return i(r, t), r;
          }
          function j(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  E(t._dbInfo, Ie, function (r, o) {
                    if (r) return n(r);
                    try {
                      var i = o.objectStore(t._dbInfo.storeName),
                        s = i.clear();
                      o.oncomplete = function () {
                        e();
                      }, o.onabort = o.onerror = function () {
                        var e = s.error ? s.error : s.transaction.error;
                        n(e);
                      };
                    } catch (e) {
                      n(e);
                    }
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function D(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  E(t._dbInfo, _e, function (r, o) {
                    if (r) return n(r);
                    try {
                      var i = o.objectStore(t._dbInfo.storeName),
                        s = i.count();
                      s.onsuccess = function () {
                        e(s.result);
                      }, s.onerror = function () {
                        n(s.error);
                      };
                    } catch (e) {
                      n(e);
                    }
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function R(e, t) {
            var n = this,
              r = new ye(function (t, r) {
                if (e < 0) return void t(null);
                n.ready().then(function () {
                  E(n._dbInfo, _e, function (o, i) {
                    if (o) return r(o);
                    try {
                      var s = i.objectStore(n._dbInfo.storeName),
                        a = !1,
                        u = s.openCursor();
                      u.onsuccess = function () {
                        var n = u.result;
                        if (!n) return void t(null);
                        0 === e ? t(n.key) : a ? t(n.key) : (a = !0, n.advance(e));
                      }, u.onerror = function () {
                        r(u.error);
                      };
                    } catch (e) {
                      r(e);
                    }
                  });
                }).catch(r);
              });
            return i(r, t), r;
          }
          function x(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  E(t._dbInfo, _e, function (r, o) {
                    if (r) return n(r);
                    try {
                      var i = o.objectStore(t._dbInfo.storeName),
                        s = i.openCursor(),
                        a = [];
                      s.onsuccess = function () {
                        var t = s.result;
                        if (!t) return void e(a);
                        a.push(t.key), t.continue();
                      }, s.onerror = function () {
                        n(s.error);
                      };
                    } catch (e) {
                      n(e);
                    }
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function C(e, t) {
            t = u.apply(this, arguments);
            var n = this.config();
            e = "function" != typeof e && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
            var r,
              o = this;
            if (e.name) {
              var s = e.name === n.name && o._dbInfo.db,
                a = s ? ye.resolve(o._dbInfo.db) : v(e).then(function (t) {
                  var n = we[e.name],
                    r = n.forages;
                  n.db = t;
                  for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = t;
                  return t;
                });
              r = e.storeName ? a.then(function (t) {
                if (t.objectStoreNames.contains(e.storeName)) {
                  var n = t.version + 1;
                  d(e);
                  var r = we[e.name],
                    o = r.forages;
                  t.close();
                  for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    s._dbInfo.db = null, s._dbInfo.version = n;
                  }
                  return new ye(function (t, r) {
                    var o = ve.open(e.name, n);
                    o.onerror = function (e) {
                      o.result.close(), r(e);
                    }, o.onupgradeneeded = function () {
                      o.result.deleteObjectStore(e.storeName);
                    }, o.onsuccess = function () {
                      var e = o.result;
                      e.close(), t(e);
                    };
                  }).then(function (e) {
                    r.db = e;
                    for (var t = 0; t < o.length; t++) {
                      var n = o[t];
                      n._dbInfo.db = e, h(n._dbInfo);
                    }
                  }).catch(function (t) {
                    throw (p(e, t) || ye.resolve()).catch(function () {}), t;
                  });
                }
              }) : a.then(function (t) {
                d(e);
                var n = we[e.name],
                  r = n.forages;
                t.close();
                for (var o = 0; o < r.length; o++) {
                  r[o]._dbInfo.db = null;
                }
                return new ye(function (t, n) {
                  var r = ve.deleteDatabase(e.name);
                  r.onerror = r.onblocked = function (e) {
                    var t = r.result;
                    t && t.close(), n(e);
                  }, r.onsuccess = function () {
                    var e = r.result;
                    e && e.close(), t(e);
                  };
                }).then(function (e) {
                  n.db = e;
                  for (var t = 0; t < r.length; t++) h(r[t]._dbInfo);
                }).catch(function (t) {
                  throw (p(e, t) || ye.resolve()).catch(function () {}), t;
                });
              });
            } else r = ye.reject("Invalid arguments");
            return i(r, t), r;
          }
          function L(e) {
            var t,
              n,
              r,
              o,
              i,
              s = .75 * e.length,
              a = e.length,
              u = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var c = new ArrayBuffer(s),
              f = new Uint8Array(c);
            for (t = 0; t < a; t += 4) n = Ae.indexOf(e[t]), r = Ae.indexOf(e[t + 1]), o = Ae.indexOf(e[t + 2]), i = Ae.indexOf(e[t + 3]), f[u++] = n << 2 | r >> 4, f[u++] = (15 & r) << 4 | o >> 2, f[u++] = (3 & o) << 6 | 63 & i;
            return c;
          }
          function B(e) {
            var t,
              n = new Uint8Array(e),
              r = "";
            for (t = 0; t < n.length; t += 3) r += Ae[n[t] >> 2], r += Ae[(3 & n[t]) << 4 | n[t + 1] >> 4], r += Ae[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += Ae[63 & n[t + 2]];
            return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r;
          }
          function F(e, t) {
            var n = "";
            if (e && (n = ze.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === ze.call(e.buffer))) {
              var r,
                o = Ne;
              e instanceof ArrayBuffer ? (r = e, o += ke) : (r = e.buffer, "[object Int8Array]" === n ? o += De : "[object Uint8Array]" === n ? o += Re : "[object Uint8ClampedArray]" === n ? o += xe : "[object Int16Array]" === n ? o += Ce : "[object Uint16Array]" === n ? o += Be : "[object Int32Array]" === n ? o += Le : "[object Uint32Array]" === n ? o += Fe : "[object Float32Array]" === n ? o += Ue : "[object Float64Array]" === n ? o += Me : t(new Error("Failed to get type for BinaryArray"))), t(o + B(r));
            } else if ("[object Blob]" === n) {
              var i = new FileReader();
              i.onload = function () {
                var n = Pe + e.type + "~" + B(this.result);
                t(Ne + je + n);
              }, i.readAsArrayBuffer(e);
            } else try {
              t(JSON.stringify(e));
            } catch (n) {
              console.error("Couldn't convert value into a JSON string: ", e), t(null, n);
            }
          }
          function U(e) {
            if (e.substring(0, Te) !== Ne) return JSON.parse(e);
            var t,
              n = e.substring(We),
              r = e.substring(Te, We);
            if (r === je && Oe.test(n)) {
              var i = n.match(Oe);
              t = i[1], n = n.substring(i[0].length);
            }
            var s = L(n);
            switch (r) {
              case ke:
                return s;
              case je:
                return o([s], {
                  type: t
                });
              case De:
                return new Int8Array(s);
              case Re:
                return new Uint8Array(s);
              case xe:
                return new Uint8ClampedArray(s);
              case Ce:
                return new Int16Array(s);
              case Be:
                return new Uint16Array(s);
              case Le:
                return new Int32Array(s);
              case Fe:
                return new Uint32Array(s);
              case Ue:
                return new Float32Array(s);
              case Me:
                return new Float64Array(s);
              default:
                throw new Error("Unkown type: " + r);
            }
          }
          function M(e, t, n, r) {
            e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
          }
          function W(e) {
            var t = this,
              n = {
                db: null
              };
            if (e) for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
            var o = new ye(function (e, r) {
              try {
                n.db = openDatabase(n.name, String(n.version), n.description, n.size);
              } catch (e) {
                return r(e);
              }
              n.db.transaction(function (o) {
                M(o, n, function () {
                  t._dbInfo = n, e();
                }, function (e, t) {
                  r(t);
                });
              }, r);
            });
            return n.serializer = Ge, o;
          }
          function z(e, t, n, r, o, i) {
            e.executeSql(n, r, o, function (e, s) {
              s.code === s.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function (e, a) {
                a.rows.length ? i(e, s) : M(e, t, function () {
                  e.executeSql(n, r, o, i);
                }, i);
              }, i) : i(e, s);
            }, i);
          }
          function G(e, t) {
            var n = this;
            e = a(e);
            var r = new ye(function (t, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  z(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function (e, n) {
                    var r = n.rows.length ? n.rows.item(0).value : null;
                    r && (r = o.serializer.deserialize(r)), t(r);
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            return i(r, t), r;
          }
          function K(e, t) {
            var n = this,
              r = new ye(function (t, r) {
                n.ready().then(function () {
                  var o = n._dbInfo;
                  o.db.transaction(function (n) {
                    z(n, o, "SELECT * FROM " + o.storeName, [], function (n, r) {
                      for (var i = r.rows, s = i.length, a = 0; a < s; a++) {
                        var u = i.item(a),
                          c = u.value;
                        if (c && (c = o.serializer.deserialize(c)), void 0 !== (c = e(c, u.key, a + 1))) return void t(c);
                      }
                      t();
                    }, function (e, t) {
                      r(t);
                    });
                  });
                }).catch(r);
              });
            return i(r, t), r;
          }
          function q(e, t, n, r) {
            var o = this;
            e = a(e);
            var s = new ye(function (i, s) {
              o.ready().then(function () {
                void 0 === t && (t = null);
                var a = t,
                  u = o._dbInfo;
                u.serializer.serialize(t, function (t, c) {
                  c ? s(c) : u.db.transaction(function (n) {
                    z(n, u, "INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [e, t], function () {
                      i(a);
                    }, function (e, t) {
                      s(t);
                    });
                  }, function (t) {
                    if (t.code === t.QUOTA_ERR) {
                      if (r > 0) return void i(q.apply(o, [e, a, n, r - 1]));
                      s(t);
                    }
                  });
                });
              }).catch(s);
            });
            return i(s, n), s;
          }
          function J(e, t, n) {
            return q.apply(this, [e, t, n, 1]);
          }
          function H(e, t) {
            var n = this;
            e = a(e);
            var r = new ye(function (t, r) {
              n.ready().then(function () {
                var o = n._dbInfo;
                o.db.transaction(function (n) {
                  z(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function () {
                    t();
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            return i(r, t), r;
          }
          function V(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  var r = t._dbInfo;
                  r.db.transaction(function (t) {
                    z(t, r, "DELETE FROM " + r.storeName, [], function () {
                      e();
                    }, function (e, t) {
                      n(t);
                    });
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function Y(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  var r = t._dbInfo;
                  r.db.transaction(function (t) {
                    z(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (t, n) {
                      var r = n.rows.item(0).c;
                      e(r);
                    }, function (e, t) {
                      n(t);
                    });
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function Q(e, t) {
            var n = this,
              r = new ye(function (t, r) {
                n.ready().then(function () {
                  var o = n._dbInfo;
                  o.db.transaction(function (n) {
                    z(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (e, n) {
                      var r = n.rows.length ? n.rows.item(0).key : null;
                      t(r);
                    }, function (e, t) {
                      r(t);
                    });
                  });
                }).catch(r);
              });
            return i(r, t), r;
          }
          function X(e) {
            var t = this,
              n = new ye(function (e, n) {
                t.ready().then(function () {
                  var r = t._dbInfo;
                  r.db.transaction(function (t) {
                    z(t, r, "SELECT key FROM " + r.storeName, [], function (t, n) {
                      for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                      e(r);
                    }, function (e, t) {
                      n(t);
                    });
                  });
                }).catch(n);
              });
            return i(n, e), n;
          }
          function $(e) {
            return new ye(function (t, n) {
              e.transaction(function (r) {
                r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (n, r) {
                  for (var o = [], i = 0; i < r.rows.length; i++) o.push(r.rows.item(i).name);
                  t({
                    db: e,
                    storeNames: o
                  });
                }, function (e, t) {
                  n(t);
                });
              }, function (e) {
                n(e);
              });
            });
          }
          function Z(e, t) {
            t = u.apply(this, arguments);
            var n = this.config();
            e = "function" != typeof e && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
            var r,
              o = this;
            return r = e.name ? new ye(function (t) {
              var r;
              r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), t(e.storeName ? {
                db: r,
                storeNames: [e.storeName]
              } : $(r));
            }).then(function (e) {
              return new ye(function (t, n) {
                e.db.transaction(function (r) {
                  for (var o = [], i = 0, s = e.storeNames.length; i < s; i++) o.push(function (e) {
                    return new ye(function (t, n) {
                      r.executeSql("DROP TABLE IF EXISTS " + e, [], function () {
                        t();
                      }, function (e, t) {
                        n(t);
                      });
                    });
                  }(e.storeNames[i]));
                  ye.all(o).then(function () {
                    t();
                  }).catch(function (e) {
                    n(e);
                  });
                }, function (e) {
                  n(e);
                });
              });
            }) : ye.reject("Invalid arguments"), i(r, t), r;
          }
          function ee(e, t) {
            var n = e.name + "/";
            return e.storeName !== t.storeName && (n += e.storeName + "/"), n;
          }
          function te() {
            try {
              return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1;
            } catch (e) {
              return !0;
            }
          }
          function ne() {
            return !te() || localStorage.length > 0;
          }
          function re(e) {
            var t = this,
              n = {};
            if (e) for (var r in e) n[r] = e[r];
            return n.keyPrefix = ee(e, t._defaultConfig), ne() ? (t._dbInfo = n, n.serializer = Ge, ye.resolve()) : ye.reject();
          }
          function oe(e) {
            var t = this,
              n = t.ready().then(function () {
                for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                  var r = localStorage.key(n);
                  0 === r.indexOf(e) && localStorage.removeItem(r);
                }
              });
            return i(n, e), n;
          }
          function ie(e, t) {
            var n = this;
            e = a(e);
            var r = n.ready().then(function () {
              var t = n._dbInfo,
                r = localStorage.getItem(t.keyPrefix + e);
              return r && (r = t.serializer.deserialize(r)), r;
            });
            return i(r, t), r;
          }
          function se(e, t) {
            var n = this,
              r = n.ready().then(function () {
                for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, s = 1, a = 0; a < i; a++) {
                  var u = localStorage.key(a);
                  if (0 === u.indexOf(r)) {
                    var c = localStorage.getItem(u);
                    if (c && (c = t.serializer.deserialize(c)), void 0 !== (c = e(c, u.substring(o), s++))) return c;
                  }
                }
              });
            return i(r, t), r;
          }
          function ae(e, t) {
            var n = this,
              r = n.ready().then(function () {
                var t,
                  r = n._dbInfo;
                try {
                  t = localStorage.key(e);
                } catch (e) {
                  t = null;
                }
                return t && (t = t.substring(r.keyPrefix.length)), t;
              });
            return i(r, t), r;
          }
          function ue(e) {
            var t = this,
              n = t.ready().then(function () {
                for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                  var i = localStorage.key(o);
                  0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length));
                }
                return r;
              });
            return i(n, e), n;
          }
          function ce(e) {
            var t = this,
              n = t.keys().then(function (e) {
                return e.length;
              });
            return i(n, e), n;
          }
          function fe(e, t) {
            var n = this;
            e = a(e);
            var r = n.ready().then(function () {
              var t = n._dbInfo;
              localStorage.removeItem(t.keyPrefix + e);
            });
            return i(r, t), r;
          }
          function le(e, t, n) {
            var r = this;
            e = a(e);
            var o = r.ready().then(function () {
              void 0 === t && (t = null);
              var n = t;
              return new ye(function (o, i) {
                var s = r._dbInfo;
                s.serializer.serialize(t, function (t, r) {
                  if (r) i(r);else try {
                    localStorage.setItem(s.keyPrefix + e, t), o(n);
                  } catch (e) {
                    "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e);
                  }
                });
              });
            });
            return i(o, n), o;
          }
          function de(e, t) {
            if (t = u.apply(this, arguments), e = "function" != typeof e && e || {}, !e.name) {
              var n = this.config();
              e.name = e.name || n.name, e.storeName = e.storeName || n.storeName;
            }
            var r,
              o = this;
            return r = e.name ? new ye(function (t) {
              t(e.storeName ? ee(e, o._defaultConfig) : e.name + "/");
            }).then(function (e) {
              for (var t = localStorage.length - 1; t >= 0; t--) {
                var n = localStorage.key(t);
                0 === n.indexOf(e) && localStorage.removeItem(n);
              }
            }) : ye.reject("Invalid arguments"), i(r, t), r;
          }
          function he(e, t) {
            e[t] = function () {
              var n = arguments;
              return e.ready().then(function () {
                return e[t].apply(e, n);
              });
            };
          }
          function pe() {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              if (t) for (var n in t) t.hasOwnProperty(n) && (Ve(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n]);
            }
            return arguments[0];
          }
          var be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            },
            ve = function () {
              try {
                if ("undefined" != typeof indexedDB) return indexedDB;
                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                if ("undefined" != typeof msIndexedDB) return msIndexedDB;
              } catch (e) {
                return;
              }
            }();
          "undefined" == typeof Promise && e(3);
          var ye = Promise,
            ge = "local-forage-detect-blob-support",
            me = void 0,
            we = {},
            Se = Object.prototype.toString,
            _e = "readonly",
            Ie = "readwrite",
            Ee = {
              _driver: "asyncStorage",
              _initStorage: P,
              _support: function () {
                try {
                  if (!ve) return !1;
                  var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                    t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                  return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
                } catch (e) {
                  return !1;
                }
              }(),
              iterate: N,
              getItem: O,
              setItem: T,
              removeItem: k,
              clear: j,
              length: D,
              key: R,
              keys: x,
              dropInstance: C
            },
            Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Pe = "~~local_forage_type~",
            Oe = /^~~local_forage_type~([^~]+)~/,
            Ne = "__lfsc__:",
            Te = Ne.length,
            ke = "arbf",
            je = "blob",
            De = "si08",
            Re = "ui08",
            xe = "uic8",
            Ce = "si16",
            Le = "si32",
            Be = "ur16",
            Fe = "ui32",
            Ue = "fl32",
            Me = "fl64",
            We = Te + ke.length,
            ze = Object.prototype.toString,
            Ge = {
              serialize: F,
              deserialize: U,
              stringToBuffer: L,
              bufferToString: B
            },
            Ke = {
              _driver: "webSQLStorage",
              _initStorage: W,
              _support: function () {
                return "function" == typeof openDatabase;
              }(),
              iterate: K,
              getItem: G,
              setItem: J,
              removeItem: H,
              clear: V,
              length: Y,
              key: Q,
              keys: X,
              dropInstance: Z
            },
            qe = {
              _driver: "localStorageWrapper",
              _initStorage: re,
              _support: function () {
                try {
                  return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
                } catch (e) {
                  return !1;
                }
              }(),
              iterate: se,
              getItem: ie,
              setItem: le,
              removeItem: fe,
              clear: oe,
              length: ce,
              key: ae,
              keys: ue,
              dropInstance: de
            },
            Je = function (e, t) {
              return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t);
            },
            He = function (e, t) {
              for (var n = e.length, r = 0; r < n;) {
                if (Je(e[r], t)) return !0;
                r++;
              }
              return !1;
            },
            Ve = Array.isArray || function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
            Ye = {},
            Qe = {},
            Xe = {
              INDEXEDDB: Ee,
              WEBSQL: Ke,
              LOCALSTORAGE: qe
            },
            $e = [Xe.INDEXEDDB._driver, Xe.WEBSQL._driver, Xe.LOCALSTORAGE._driver],
            Ze = ["dropInstance"],
            et = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ze),
            tt = {
              description: "",
              driver: $e.slice(),
              name: "localforage",
              size: 4980736,
              storeName: "keyvaluepairs",
              version: 1
            },
            nt = function () {
              function e(t) {
                r(this, e);
                for (var n in Xe) if (Xe.hasOwnProperty(n)) {
                  var o = Xe[n],
                    i = o._driver;
                  this[n] = i, Ye[i] || this.defineDriver(o);
                }
                this._defaultConfig = pe({}, tt), this._config = pe({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function () {});
              }
              return e.prototype.config = function (e) {
                if ("object" === (void 0 === e ? "undefined" : be(e))) {
                  if (this._ready) return new Error("Can't call config() after localforage has been used.");
                  for (var t in e) {
                    if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                    this._config[t] = e[t];
                  }
                  return !("driver" in e && e.driver) || this.setDriver(this._config.driver);
                }
                return "string" == typeof e ? this._config[e] : this._config;
              }, e.prototype.defineDriver = function (e, t, n) {
                var r = new ye(function (t, n) {
                  try {
                    var r = e._driver,
                      o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                    if (!e._driver) return void n(o);
                    for (var s = et.concat("_initStorage"), a = 0, u = s.length; a < u; a++) {
                      var c = s[a];
                      if ((!He(Ze, c) || e[c]) && "function" != typeof e[c]) return void n(o);
                    }
                    !function () {
                      for (var t = 0, n = Ze.length; t < n; t++) {
                        var r = Ze[t];
                        e[r] || (e[r] = function (e) {
                          return function () {
                            var t = new Error("Method " + e + " is not implemented by the current driver"),
                              n = ye.reject(t);
                            return i(n, arguments[arguments.length - 1]), n;
                          };
                        }(r));
                      }
                    }();
                    var f = function (n) {
                      Ye[r] && console.info("Redefining LocalForage driver: " + r), Ye[r] = e, Qe[r] = n, t();
                    };
                    "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(f, n) : f(!!e._support) : f(!0);
                  } catch (e) {
                    n(e);
                  }
                });
                return s(r, t, n), r;
              }, e.prototype.driver = function () {
                return this._driver || null;
              }, e.prototype.getDriver = function (e, t, n) {
                var r = Ye[e] ? ye.resolve(Ye[e]) : ye.reject(new Error("Driver not found."));
                return s(r, t, n), r;
              }, e.prototype.getSerializer = function (e) {
                var t = ye.resolve(Ge);
                return s(t, e), t;
              }, e.prototype.ready = function (e) {
                var t = this,
                  n = t._driverSet.then(function () {
                    return null === t._ready && (t._ready = t._initDriver()), t._ready;
                  });
                return s(n, e, e), n;
              }, e.prototype.setDriver = function (e, t, n) {
                function r() {
                  a._config.driver = a.driver();
                }
                function o(e) {
                  return a._extend(e), r(), a._ready = a._initStorage(a._config), a._ready;
                }
                function i(e) {
                  return function () {
                    function t() {
                      for (; n < e.length;) {
                        var i = e[n];
                        return n++, a._dbInfo = null, a._ready = null, a.getDriver(i).then(o).catch(t);
                      }
                      r();
                      var s = new Error("No available storage method found.");
                      return a._driverSet = ye.reject(s), a._driverSet;
                    }
                    var n = 0;
                    return t();
                  };
                }
                var a = this;
                Ve(e) || (e = [e]);
                var u = this._getSupportedDrivers(e),
                  c = null !== this._driverSet ? this._driverSet.catch(function () {
                    return ye.resolve();
                  }) : ye.resolve();
                return this._driverSet = c.then(function () {
                  var e = u[0];
                  return a._dbInfo = null, a._ready = null, a.getDriver(e).then(function (e) {
                    a._driver = e._driver, r(), a._wrapLibraryMethodsWithReady(), a._initDriver = i(u);
                  });
                }).catch(function () {
                  r();
                  var e = new Error("No available storage method found.");
                  return a._driverSet = ye.reject(e), a._driverSet;
                }), s(this._driverSet, t, n), this._driverSet;
              }, e.prototype.supports = function (e) {
                return !!Qe[e];
              }, e.prototype._extend = function (e) {
                pe(this, e);
              }, e.prototype._getSupportedDrivers = function (e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) {
                  var o = e[n];
                  this.supports(o) && t.push(o);
                }
                return t;
              }, e.prototype._wrapLibraryMethodsWithReady = function () {
                for (var e = 0, t = et.length; e < t; e++) he(this, et[e]);
              }, e.prototype.createInstance = function (t) {
                return new e(t);
              }, e;
            }(),
            rt = new nt();
          t.exports = rt;
        }, {
          3: 3
        }]
      }, {}, [4])(4);
    });
  }).call(t, n(17));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return h;
  });
  var r = n(0),
    o = n(15),
    i = n(3),
    s = n(13),
    a = n(12),
    u = n(5),
    c = n(26),
    f = n(6),
    l = n(9),
    d = n(11),
    h = function () {
      function e(e) {
        this.options = e, this.subscribeOptions = {};
      }
      return e.getInstance = function (t) {
        return e.instance || (e.instance = new e(t));
      }, Object.defineProperty(e.prototype, "serviceWorkerRegistration", {
        get: function () {
          var e = this;
          if (navigator.serviceWorker) {
            var t = this.options.swPath ? this.options.swPath : "/sw.js",
              n = this.options.swScope ? this.options.swScope : "/";
            this._serviceWorkerRegistration = navigator.serviceWorker.register(t, {
              scope: n
            }).then(function (t) {
              return r.b(e, void 0, void 0, function () {
                var e;
                return r.c(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, t.update()];
                    case 1:
                      return e = n.sent(), e ? [2, e] : [2, t];
                  }
                });
              });
            });
          } else this._serviceWorkerRegistration = Promise.reject(new Error("serviceWorker is not supported in current browser"));
          return this._serviceWorkerRegistration;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pushManager", {
        get: function () {
          return this.serviceWorkerRegistration.then(function (e) {
            return e.pushManager;
          });
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getEndpoint = function () {
        return this.getSubscription().then(function (e) {
          return e && e.endpoint || null;
        });
      }, e.prototype.setSubscribeOptions = function (e) {
        this.subscribeOptions = n.i(d.a)(this.subscribeOptions, e);
      }, e.prototype.getSubscription = function () {
        return this.pushManager.then(function (e) {
          return e.getSubscription();
        });
      }, e.prototype.getPermissionState = function () {
        var e = {
          userVisibleOnly: !0
        };
        return this.options.publicKey && (e.applicationServerKey = n.i(u.a)(this.options.publicKey)), this.serviceWorkerRegistration.then(function (t) {
          return t.pushManager.permissionState(e);
        });
      }, e.prototype.findChannelByEndpoint = function (e) {
        return n.i(i.a)({
          method: "POST",
          url: n.i(l.a)(this.options.endpoint) + "/subscriber/findChannelByEndpoint",
          data: {
            endpoint: e
          }
        });
      }, e.prototype.subscribe = function (e) {
        return void 0 === e && (e = 1), r.b(this, void 0, void 0, function () {
          var t, i, s, a, c;
          return r.c(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.pushManager];
              case 1:
                return t = r.sent(), i = {
                  userVisibleOnly: !0
                }, this.options.publicKey && (i.applicationServerKey = n.i(u.a)(this.options.publicKey)), [4, t.subscribe(i)];
              case 2:
                return s = r.sent(), [4, this.findChannelByEndpoint(s.endpoint)];
              case 3:
                return a = r.sent(), a.channel && a.channel.status === o.a.UNSUBSCRIBED ? [4, s.unsubscribe()] : [3, 5];
              case 4:
                if ((c = r.sent()) && e < 5) return [2, this.subscribe(e + 1)];
                r.label = 5;
              case 5:
                return [2, this.saveSubscription(s)];
            }
          });
        });
      }, e.prototype.renewSubscription = function () {
        return r.b(this, void 0, void 0, function () {
          var e, t, o;
          return r.c(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.getSubscription()];
              case 1:
                if (!(e = r.sent())) return [2, this.subscribe()];
                if (!this.options.publicKey) return [3, 5];
                if (t = void 0, e && e.options && e.options.applicationServerKey && (t = n.i(c.a)(e.options.applicationServerKey)), t === this.options.publicKey) return [3, 5];
                r.label = 2;
              case 2:
                return r.trys.push([2, 4,, 5]), [4, this.unsubscribe()];
              case 3:
                return r.sent(), [2, this.subscribe()];
              case 4:
                return o = r.sent(), console.error("NativeActivator#renewSubscription.unsubscribe error", o), [3, 5];
              case 5:
                return [2, this.saveSubscription(e, {
                  silent: !0
                })];
            }
          });
        });
      }, e.prototype.unsubscribe = function () {
        return this.getSubscription().then(function (e) {
          return e.unsubscribe();
        });
      }, e.prototype.saveSubscription = function (e, t) {
        return t = n.i(d.a)({
          silent: !1
        }, t || {}), n.i(i.a)({
          method: "POST",
          url: n.i(l.a)(this.options.endpoint) + "/subscriber",
          data: {
            endpoint: e.endpoint,
            vapid: this.options.publicKey,
            data: {
              userPublicKey: n.i(s.a)(e.getKey("p256dh")),
              userAuth: n.i(s.a)(e.getKey("auth"))
            },
            fields: n.i(d.a)(n.i(a.a)(), this.subscribeOptions.fields, {
              r: document.referrer,
              o: location.href
            }),
            tags: [].concat(this.subscribeOptions.tags).filter(function (e) {
              return e;
            }),
            project: this.options.projectId,
            testMode: n.i(f.a)(),
            silent: t.silent
          }
        });
      }, e;
    }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var r = n(3),
    o = n(18),
    i = function () {
      function e() {}
      return e.checkRemotePermission = function (t, o, i) {
        if ("default" === t.permission) window.safari.pushNotification.requestPermission(o.endpoint + "/apn", o.websitePushId, {
          projectId: o.projectId,
          r: document && document.referrer,
          o: location && location.href
        }, function (t) {
          return e.checkRemotePermission(t, o, i);
        });else if ("denied" === t.permission) i.reject(t.permission);else if ("granted" === t.permission) {
          var s = function () {
            return n.i(r.a)({
              method: "POST",
              url: o.endpoint + "/apn/v2/devices/" + t.deviceToken + "/registrations/" + o.websitePushId
            }).then(function (e) {
              if (!e._id) return n.i(r.a)({
                method: "GET",
                url: o.endpoint + "/apn/v2/subscriber/" + t.deviceToken + "/" + o.websitePushId
              });
            }).then(function (e) {
              return i.resolve(e._id);
            }).catch(i.reject);
          };
          setTimeout(s, 750);
        }
        return i.promise;
      }, e.subscribe = function (t) {
        var n = new o.a();
        return e.checkRemotePermission(window.safari.pushNotification.permission(t.websitePushId), t, n).catch(function (e) {
          return n.reject(e);
        }), n.promise;
      }, e;
    }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(22),
    o = (n.n(r), r.createInstance({
      driver: [r.INDEXEDDB, r.WEBSQL, r.LOCALSTORAGE],
      name: "pushpushgo-idb"
    }));
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t = String.fromCharCode.apply(null, new Uint8Array(e));
    return window.btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return {
      dsn: "https://e138555c1adc41f18bbba88a4e4637b0@o121828.ingest.sentry.io/5982084",
      release: e,
      allowUrls: [/https?:\/\/.*pushpushgo\.com/],
      fetchParameters: {
        method: "POST",
        credentials: "omit",
        referrerPolicy: "origin"
      },
      beforeSend: function (e) {
        return n.i(o.a)() === o.b.NO_SUPPORT ? null : e;
      },
      allowSecretKey: !0
    };
  }
  t.a = r;
  var o = n(7);
},,,,,,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return _;
  });
  var r = n(0),
    o = n(49),
    i = n(23),
    s = n(24),
    a = n(7),
    u = n(62),
    c = n(10),
    f = n(20),
    l = n(3),
    d = n(65),
    h = n(61),
    p = n(6),
    b = n(9),
    v = n(52),
    y = n(8),
    g = "subscribe",
    m = "deny",
    w = "unsubscribe",
    S = "click",
    _ = function (e) {
      function t(t) {
        var o = e.call(this, t) || this;
        return o.isMobile = function () {
          return n.i(h.a)();
        }, o.leaveTestMode = function (e) {
          e && e.preventDefault();
          try {
            window.sessionStorage && window.sessionStorage.setItem("ppg_test_mode", "false");
          } catch (e) {
            console.error("Cannot leave test mode, session storage is not available error", e.message);
          }
          o.publish();
        }, o.onDialogDeny = function (e) {
          e && e.preventDefault(), o.sendAnalyticsEvent(m, o.getFormTypeForGA()), o.hideDialog();
        }, o.closeDialog = function () {
          o.showPopup = !1, f.a.trigger("push:closeDialog");
        }, o.handleFormSubscribeClick = function (e) {
          e && e.preventDefault(), o.sendAnalyticsEvent(g, o.getFormTypeForGA()), o.subscribe().catch(console.error);
        }, o.handleFabSubscribeClick = function (e) {
          return r.b(o, void 0, void 0, function () {
            return r.c(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.isFabContentLoading = !0, e && e.preventDefault(), this.sendAnalyticsEvent(g, "fab"), this.isUnsubscribedFromBell = !1, [4, this.subscribe()];
                case 1:
                  return t.sent(), this.isFabContentLoading = !1, [2];
              }
            });
          });
        }, o.handleUnsubscribeClick = function (e) {
          return r.b(o, void 0, void 0, function () {
            return r.c(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.isFabContentLoading = !0, (e && e.preventDefault(), this.isNativeStrategyEnabled()) ? (window.open(this.getSubscriptionGuideLink()), [3, 3]) : [3, 1];
                case 1:
                  return this.sendAnalyticsEvent(w, "fab"), [4, this.unsubscribe()];
                case 2:
                  t.sent(), t.label = 3;
                case 3:
                  return this.isFabContentLoading = !1, [2];
              }
            });
          });
        }, o.handleCloseBuble = function () {
          o.isBubbleOpen = !1;
        }, o.handleToggleBubble = function () {
          o.sendAnalyticsEvent(S, "fab"), o.isBubbleOpen = !o.isBubbleOpen;
        }, o.onNewTagInput = function (e) {
          o.newTestTag = e.target.value;
        }, o.showSubscribeForm = function () {
          o.showPopup = !0;
        }, o.startSession = function () {
          n.i(l.a)({
            method: "POST",
            url: o.options.apiURL + "/testmode/" + o.subscriberId + "/sessionStart"
          });
        }, o.endSession = function () {
          n.i(l.a)({
            method: "POST",
            url: o.options.apiURL + "/testmode/" + o.subscriberId + "/sessionEnd"
          });
        }, o.clearAllSettings = function () {
          o.setIsActive(!1), o.clearStorage();
        }, o.addTestTag = function () {
          n.i(l.a)({
            method: "POST",
            url: o.options.apiURL + "/testmode/" + o.subscriberId + "/addTag",
            data: {
              tag: o.newTestTag
            }
          }).then(function () {
            o.testTags = o.testTags.concat([o.newTestTag]), o.newTestTag = "";
          });
        }, o.showExitPopup = function (e) {
          e.y <= 0 && (o.isNativeStrategyEnabled() && o.isDefaultTemplate() ? o.subscribeNative().catch(console.error) : o.internalStart(), o.options.webpush.exitPopup = !1, document.removeEventListener("mouseout", o.showExitPopup));
        }, o.nativeActivator = i.a.getInstance(t.activatorOptions), o;
      }
      return r.g(t, e), t.prototype.isPermissionDenied = function () {
        return !("Notification" in window) || "denied" === window.Notification.permission;
      }, t.prototype.setIsActive = function (e) {
        this.isActive = e, this.triggerSubscriberActiveEvent();
      }, Object.defineProperty(t.prototype, "shouldShake", {
        get: function () {
          return null === this.subscriberId;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isNativeStrategyEnabled = function () {
        return "native" === this.options.webpush.strategy;
      }, t.prototype.isWebPushEnabled = function () {
        return this.options.webpush.enabled;
      }, t.prototype.getSubscriptionGuideLink = function () {
        var e = this,
          t = window.navigator.languages.find(function (t) {
            return e.options.subscriptionGuideLink.hasOwnProperty(t);
          });
        return this.options.subscriptionGuideLink[t || "fallback"];
      }, t.prototype.hideDialog = function () {
        this.rejectedAt = Date.now(), this.closeDialog();
      }, t.prototype.setSubscriptionIdAndSync = function (e) {
        this.subscriberId = e, this.setIsActive(!0), this.sendAnalyticsEvent(g, this.getFormTypeForGA()), f.a.trigger("syncId", e);
      }, t.prototype.subscribeNative = function () {
        return r.b(this, void 0, void 0, function () {
          var e, t, n, o, i, s;
          return r.c(this, function (r) {
            switch (r.label) {
              case 0:
                return this.closeAllPopupWindows(), !0 === this.isUnsubscribedFromBell ? [2] : [4, this.nativeActivator.getPermissionState()];
              case 1:
                switch (e = r.sent(), this.sendAnalyticsEvent("show", this.getFormTypeForGA()), f.a.trigger("popupShowed"), t = e) {
                  case "denied":
                    return [3, 2];
                  case "granted":
                    return [3, 4];
                  case "prompt":
                    return [3, 6];
                }
                return [3, 11];
              case 2:
                return this.isNativeBlocked = !0, [4, this.unsubscribe()];
              case 3:
                return r.sent(), this.sendAnalyticsEvent(m, this.getFormTypeForGA()), [3, 11];
              case 4:
                return [4, this.nativeActivator.renewSubscription()];
              case 5:
                return n = r.sent(), this.setSubscriptionIdAndSync(n.id), [3, 11];
              case 6:
                return r.trys.push([6, 8,, 10]), [4, this.nativeActivator.subscribe()];
              case 7:
                return o = r.sent(), this.setSubscriptionIdAndSync(o.id), [3, 10];
              case 8:
                return i = r.sent(), [4, this.nativeActivator.getPermissionState()];
              case 9:
                return s = r.sent(), "denied" === s ? (this.setIsActive(!1), this.isNativeBlocked = !0, this.sendAnalyticsEvent(m, this.getFormTypeForGA())) : console.error("Got error on prompt", i), [3, 10];
              case 10:
                return [3, 11];
              case 11:
                return this.closeAllPopupWindows(), [2];
            }
          });
        });
      }, t.prototype.subscribeSafari = function () {
        return r.b(this, void 0, void 0, function () {
          var e;
          return r.c(this, function (t) {
            switch (t.label) {
              case 0:
                return this.closeAllPopupWindows(), !0 === this.isUnsubscribedFromBell ? [2] : [4, s.a.subscribe(this.options.activatorOptions)];
              case 1:
                return e = t.sent(), e ? this.setSubscriptionIdAndSync(e) : (this.setIsActive(!1), this.sendAnalyticsEvent(m, this.getFormTypeForGA())), this.closeAllPopupWindows(), [2];
            }
          });
        });
      }, t.prototype.closeAllPopupWindows = function () {
        this.closeDialog(), this.handleCloseBuble();
      }, t.prototype.subscribeInSubWindow = function () {
        var e = this.options.webpush.doubleOptInUrl,
          t = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
          n = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
          r = t / 2 - 200 + window.screenLeft,
          o = n / 2 - 250 + window.screenTop,
          i = window.open(e + "?o=" + location.origin + "&h=" + location.href + "&r=" + document.referrer, "_blank", "top=" + o + ",left=" + r + ",height=500,width=400,location=0,menubar=0,resizable=0,fullscreen=0,channelmode=0,scrollbars=0,status=0,titlebar=0,toolbar=0", !1);
        return i && window.focus && i.focus(), this.closeDialog(), this.syncId();
      }, t.prototype.subscribe = function () {
        return r.b(this, void 0, void 0, function () {
          var e, t;
          return r.c(this, function (o) {
            switch (o.label) {
              case 0:
                switch (e = n.i(a.a)(this.options.activatorOptions), t = e) {
                  case a.b.VAPID:
                    return [3, 1];
                  case a.b.SAFARI_LEGACY:
                    return [3, 5];
                  case a.b.NO_SUPPORT:
                    return [3, 7];
                }
                return [3, 8];
              case 1:
                return this.isNativeStrategyEnabled() ? [4, this.subscribeNative().catch(function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  return console.error.apply(console, r.f(["Native: "], e));
                })] : [3, 3];
              case 2:
                return o.sent(), [2];
              case 3:
                return [4, this.subscribeInSubWindow().catch(function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  return console.error.apply(console, r.f(["Simple: "], e));
                })];
              case 4:
                return o.sent(), [2];
              case 5:
                return [4, this.subscribeSafari().catch(function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  return console.error.apply(console, r.f(["Safari: "], e));
                })];
              case 6:
                return o.sent(), [2];
              case 7:
                console.warn("Push is not supported"), o.label = 8;
              case 8:
                return [2];
            }
          });
        });
      }, t.prototype.clearStorage = function () {
        this.setIsActive(!1), this.subscriberId = null, this.testTags = [];
      }, t.prototype.lostCheck = function () {
        var e = this;
        this.dateLastChecked = new Date(this.dateLastChecked) || new Date();
        var t = new Date(),
          r = this.dateLastChecked;
        return Math.abs(t - r) / 864e5 <= 1 || !this.subscriberId ? Promise.resolve() : (this.dateLastChecked = new Date(), n.i(l.a)({
          method: "GET",
          url: this.options.apiURL + "/subscriber/" + this.subscriberId + "/isUnsubscribed"
        }).then(function (t) {
          t.status && e.clearStorage();
        }));
      }, t.prototype.syncId = function () {
        var e = this;
        return new Promise(function (t) {
          var n = function (n) {
            var r = n.data && n.data.type,
              o = n.data && n.data.data;
            if ("exception" === r) return e.rejectedAt = Date.now();
            "ppgSubscriber" === r && (e.setSubscriptionIdAndSync(o), t(o));
          };
          window.addEventListener("message", n, !1);
        });
      }, t.prototype.unsubscribe = function () {
        return r.b(this, void 0, void 0, function () {
          return r.c(this, function (e) {
            switch (e.label) {
              case 0:
                return this.subscriberId ? [4, n.i(l.a)({
                  method: "POST",
                  url: this.options.apiURL + "/subscriber/" + this.subscriberId + "/unsubscribe",
                  data: {
                    testMode: n.i(p.a)()
                  }
                })] : (this.setIsActive(!1), [2]);
              case 1:
                return e.sent(), (this.setIsActive(!1), this.subscriberId = null, this.isNativeStrategyEnabled()) ? (this.isUnsubscribedFromBell = !0, [4, this.nativeActivator.unsubscribe()]) : [3, 3];
              case 2:
                e.sent(), e.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, t.prototype.canShowSubscriptionForm = function () {
        return !!n.i(a.c)() && (this.isWebPushEnabled() || this.isUserInTestMode()) && this.checkPopUpRules();
      }, t.prototype.checkPopUpRules = function () {
        var e = this.options.webpush.popupRules || [],
          t = n.i(b.a)(location.pathname);
        if (0 === e.length) return !0;
        var o = e.some(function (e) {
            return !0 === e.enable;
          }),
          i = e.sort(function (e) {
            return e.enable ? 1 : -1;
          });
        try {
          for (var s = r.d(i), a = s.next(); !a.done; a = s.next()) {
            var u = a.value,
              c = new RegExp(u.url);
            if (u.re && 2 === Object.keys(u.re).length && (c = new RegExp(u.re.source, u.re.flags)), c.test(location.protocol + "//" + location.host + t)) return u.enable;
          }
        } catch (e) {
          f = {
            error: e
          };
        } finally {
          try {
            a && !a.done && (l = s.return) && l.call(s);
          } finally {
            if (f) throw f.error;
          }
        }
        return !o;
        var f, l;
      }, t.prototype.initializeToggle = function (e) {
        return r.b(this, void 0, void 0, function () {
          var t,
            n = this;
          return r.c(this, function (o) {
            return t = function () {
              return r.b(n, void 0, void 0, function () {
                return r.c(this, function (e) {
                  return this.isPermissionDenied() ? [2, v.a.Denied] : this.isActive ? [2, v.a.Subscribed] : [2, v.a.Prompt];
                });
              });
            }, new v.b(e, t, function () {
              return n.subscribe();
            }, function () {
              return n.unsubscribe().then(function () {
                n.isUnsubscribedFromBell = !1;
              });
            }), [2];
          });
        });
      }, t.prototype.autoStart = function () {
        return r.b(this, void 0, void 0, function () {
          var e,
            t,
            o = this;
          return r.c(this, function (r) {
            switch (r.label) {
              case 0:
                if (!this.canShowSubscriptionForm()) return [2];
                switch (this.options.webpush.toggle && this.initializeToggle(this.options.webpush.toggle).catch(console.error), e = n.i(a.a)(), t = e) {
                  case a.b.SAFARI_LEGACY:
                    return [3, 1];
                  case a.b.VAPID:
                    return [3, 3];
                  case a.b.NO_SUPPORT:
                    return [3, 5];
                }
                return [3, 5];
              case 1:
                return n.i(u.a)(this.options.activatorOptions) ? [4, this.lostCheck()] : [2];
              case 2:
                return r.sent(), this.isNoDeclined() ? this.isAlreadySubscribed() ? [2] : (!this.isMobile() && this.options.webpush.exitPopup && document.addEventListener("mouseout", this.showExitPopup), setTimeout(function () {
                  if (o.isNativeStrategyEnabled() && o.isDefaultTemplate()) {
                    var e = n.i(h.a)() ? "touchend" : "click";
                    return void document.body.addEventListener(e, function () {
                      return o.subscribeSafari();
                    }, {
                      once: !0
                    });
                  }
                  return o.internalStart();
                }, this.getDelay()), [3, 6]) : [2];
              case 3:
                return this.isNativeStrategyEnabled() && (this.isNativeBlocked = this.isPermissionDenied()), [4, this.lostCheck()];
              case 4:
                return r.sent(), this.isNoDeclined() ? this.isAlreadySubscribed() ? [2] : (!this.isMobile() && this.options.webpush.exitPopup && document.addEventListener("mouseout", this.showExitPopup), setTimeout(function () {
                  if (o.isNativeStrategyEnabled() && o.isDefaultTemplate()) {
                    if (n.i(y.a)()) {
                      var e = n.i(h.a)() ? "touchend" : "click";
                      return void document.body.addEventListener(e, function () {
                        return o.subscribeNative();
                      }, {
                        once: !0
                      });
                    }
                    return o.subscribeNative();
                  }
                  return o.internalStart();
                }, this.getDelay()), [3, 6]) : [2];
              case 5:
                return console.warn("Push is not supported"), [2];
              case 6:
                return [2];
            }
          });
        });
      }, t.prototype.sendAnalyticsEvent = function (e, t, n) {
        this.sendGaEvent(e, t, n), this.sendDLEvent(e, t);
      }, t.prototype.sendGaEvent = function (e, t, n) {
        try {
          var r = this.options.googleAnalytics,
            o = r.enabled,
            i = r.tracker;
          if (!("ga" in window)) return;
          var s = window.ga,
            a = i ? s.getByName(i) : s.getAll()[0];
          return o && (a ? a.send("event", "web push", e, t, n, {
            nonInteraction: !0
          }) : s("send", "event", "web push", e, t, n, {
            nonInteraction: !0
          })), a;
        } catch (e) {
          console.warn("Probably one of your browser extensions is blocking Google Analytics");
        }
      }, t.prototype.sendDLEvent = function (e, t) {
        try {
          var r = this.options.dataLayer,
            o = r.enabled,
            i = r.config,
            s = window.dataLayer;
          if (o && s && i) {
            var a = n.i(d.a)(i, {
              event: e,
              template: t
            });
            s.push(a);
          }
          return s;
        } catch (e) {
          console.warn("Probably one of your browser extensions is blocking Data Layer");
        }
      }, t.prototype.isUserInTestMode = function () {
        return n.i(p.a)();
      }, t.prototype.getFormTypeForGA = function () {
        return "form-" + (this.options.subscriptionForm ? this.options.subscriptionForm.type : "default");
      }, t.prototype.internalStart = function () {
        this.subscriberId || this.isNativeBlocked || (this.showPopup = !0, this.sendAnalyticsEvent("show", this.getFormTypeForGA()), f.a.trigger("popupShowed"));
      }, t.prototype.isAlreadySubscribed = function () {
        var e = !!this.subscriberId;
        return e && this.triggerSubscriberActiveEvent(), e;
      }, t.prototype.triggerSubscriberActiveEvent = function () {
        f.a.trigger("subscriberActive", {
          subscriberId: this.subscriberId
        });
      }, t.prototype.getDelay = function () {
        return 1e3 * this.options.webpush.delay;
      }, t.prototype.isNoDeclined = function () {
        var e = !this.rejectedAt || this.rejectedAt + this.getReopenTime() < Date.now();
        return !1 === e && f.a.trigger("subscriberBlocked"), e;
      }, t.prototype.getReopenTime = function () {
        return 60 * this.options.webpush.resubscribeTime * 60 * 24 * 1e3;
      }, t.prototype.template = function () {
        return this.options.webpush;
      }, t.prototype.isDefaultTemplate = function () {
        return !this.options.subscriptionForm || "default" === this.options.subscriptionForm.type;
      }, r.h([c.b], t.prototype, "isPermissionDenied", null), r.h([o.a.property({
        defaults: !1
      })], t.prototype, "isNativeBlocked", void 0), r.h([o.a.property({
        defaults: !1
      })], t.prototype, "isUnsubscribedFromBell", void 0), r.h([o.a.property({
        defaults: !1
      })], t.prototype, "showPopup", void 0), r.h([o.a.property({
        defaults: !1
      })], t.prototype, "isBubbleOpen", void 0), r.h([o.a.property({
        defaults: {}
      })], t.prototype, "toast", void 0), r.h([o.a.lsProperty({
        defaults: null
      })], t.prototype, "subscriberId", void 0), r.h([o.a.lsProperty({
        defaults: !1
      })], t.prototype, "isActive", void 0), r.h([o.a.lsProperty({
        defaults: null
      })], t.prototype, "dateLastChecked", void 0), r.h([o.a.lsProperty({
        defaults: []
      })], t.prototype, "testTags", void 0), r.h([o.a.property({
        defaults: null
      })], t.prototype, "newTestTag", void 0), r.h([o.a.lsProperty({
        defaults: null
      })], t.prototype, "rejectedAt", void 0), r.h([o.a.property({
        defaults: !1
      })], t.prototype, "isFabContentLoading", void 0), r.h([c.b], t.prototype, "isNativeStrategyEnabled", null), r.h([c.b], t.prototype, "isWebPushEnabled", null), r.h([c.b], t.prototype, "setSubscriptionIdAndSync", null), r.h([c.b], t.prototype, "subscribeNative", null), r.h([c.b], t.prototype, "subscribeSafari", null), r.h([c.b], t.prototype, "subscribeInSubWindow", null), r.h([c.b], t.prototype, "clearStorage", null), r.h([c.b], t.prototype, "lostCheck", null), r.h([c.b], t.prototype, "canShowSubscriptionForm", null), r.h([c.b], t.prototype, "checkPopUpRules", null), r.h([c.b], t.prototype, "initializeToggle", null), r.h([c.b], t.prototype, "autoStart", null), r.h([c.b], t.prototype, "sendAnalyticsEvent", null), r.h([c.b], t.prototype, "sendGaEvent", null), r.h([c.b], t.prototype, "sendDLEvent", null), r.h([c.b], t.prototype, "isUserInTestMode", null), r.h([c.b], t.prototype, "getFormTypeForGA", null), r.h([c.b], t.prototype, "internalStart", null), r.h([c.b], t.prototype, "isAlreadySubscribed", null), r.h([c.b], t.prototype, "triggerSubscriberActiveEvent", null), r.h([c.b], t.prototype, "getDelay", null), r.h([c.b], t.prototype, "isNoDeclined", null), r.h([c.b], t.prototype, "getReopenTime", null), r.h([c.b], t.prototype, "template", null), r.h([c.b], t.prototype, "isDefaultTemplate", null), t;
    }(o.a);
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(0),
    o = function () {
      function e(e, t) {
        void 0 === t && (t = []), this.callback = e, this.array = [], this.push.apply(this, r.f(t));
      }
      return e.prototype.push = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        try {
          for (var n = r.d(e), o = n.next(); !o.done; o = n.next()) {
            var i = o.value;
            this.callback(i), this.array.push(i);
          }
        } catch (e) {
          s = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (a = n.return) && a.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return this.array.length;
        var s, a;
      }, e;
    }();
},,, function (e, t, n) {
  "use strict";

  function r() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = {};
    return n.i(s.a)(e.reverse(), function (e) {
      n.i(s.a)(e, function (e, t) {
        r[t] = n.i(i.a)(e) || o(e) ? r[t] : e;
      });
    }), r;
  }
  function o(e) {
    return null === e;
  }
  t.a = r;
  var i = n(14),
    s = n(1);
},,,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var r = n(0),
    o = n(25),
    i = n(56),
    s = n(14),
    a = function () {
      function e(e) {
        this.options = e, this.subs = [], this.state = {};
      }
      return e.prototype.sub = function (e) {
        var t = this;
        return this.unsub(e), this.subs.push(e), function () {
          return t.unsub(e);
        };
      }, e.prototype.unsub = function (e) {
        this.subs = this.subs.filter(function (t) {
          return t !== e;
        });
      }, e.prototype.publish = function () {
        try {
          for (var e = r.d(this.subs), t = e.next(); !t.done; t = e.next()) {
            var n = t.value;
            try {
              n(this);
            } catch (e) {
              console.error("Subscription aplication failed:", e);
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            t && !t.done && (i = e.return) && i.call(e);
          } finally {
            if (o) throw o.error;
          }
        }
        var o, i;
      }, e.prototype.sync = function () {
        return r.b(this, void 0, void 0, function () {
          var e = this;
          return r.c(this, function (t) {
            switch (t.label) {
              case 0:
                return this.state = {}, [4, o.a.iterate(function (t, n) {
                  e.state[n] = t;
                })];
              case 1:
                return t.sent(), [2];
            }
          });
        });
      }, e.prototype.set = function (e, t) {
        return this.state[e] = t, this.publish(), this;
      }, e.prototype.get = function (e, t) {
        var r = this.state[e];
        return n.i(s.a)(r) ? t : r;
      }, e.property = function (e) {
        var t = e.defaults;
        return function (e, n) {
          Object.defineProperty(e, n, {
            get: function () {
              return this.get(n, t);
            },
            set: function (e) {
              this.set(n, e);
            }
          });
        };
      }, e.create = function (e) {
        return r.b(this, void 0, void 0, function () {
          var t, n;
          return r.c(this, function (r) {
            switch (r.label) {
              case 0:
                return t = this, n = new t(e), [4, n.sync()];
              case 1:
                return r.sent(), [2, n];
            }
          });
        });
      }, e.lsProperty = function (t) {
        var n = t.defaults;
        return function (t, r) {
          Object.defineProperty(t, r, {
            get: function () {
              return this.get(r, n);
            },
            set: function (t) {
              var n = this,
                i = this.get();
              this.set(r, t), e.queue.add(function () {
                return o.a.setItem(r, t).catch(function () {
                  n.set(r, i);
                });
              });
            }
          });
        };
      }, e.queue = new i.a(), e;
    }();
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  }), n.d(t, "b", function () {
    return i;
  });
  var r,
    o = n(0);
  !function (e) {
    e[e.Subscribed = 0] = "Subscribed", e[e.Unsubscribed = 1] = "Unsubscribed", e[e.Denied = 2] = "Denied", e[e.Prompt = 3] = "Prompt";
  }(r || (r = {}));
  var i = function () {
    function e(e, t, n, r) {
      if (void 0 === e && (e = ""), this.selector = e, this.getState = t, this.onSubscribe = n, this.onUnsubscribe = r, this.initialized = !1, this.selector) {
        var o = document.querySelector(e);
        o && this.initialize(o).catch(console.error);
      }
    }
    return Object.defineProperty(e.prototype, "element", {
      get: function () {
        return this._element && this.initialized ? this._element : null;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.initialize = function (e) {
      return o.b(this, void 0, void 0, function () {
        var t,
          n = this;
        return o.c(this, function (i) {
          switch (i.label) {
            case 0:
              return this._element = e, this.initialized = !0, this.element.disabled = !1, [4, this.getState()];
            case 1:
              return t = i.sent(), (this.setStateOfElement(t), this.element) ? (this.element.addEventListener("change", function (e) {
                return o.b(n, void 0, void 0, function () {
                  var t,
                    n = this;
                  return o.c(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return this.element.disabled = !0, t = e.target, t.checked ? [4, this.onSubscribe().then(function () {
                          return n.setStateOfElement(r.Subscribed);
                        }).catch(function () {
                          return n.setStateOfElement(r.Denied);
                        })] : [3, 2];
                      case 1:
                        return o.sent(), [3, 4];
                      case 2:
                        return [4, this.onUnsubscribe().then(function () {
                          return n.setStateOfElement(r.Unsubscribed);
                        }).catch(function () {
                          return n.setStateOfElement(r.Denied);
                        })];
                      case 3:
                        o.sent(), o.label = 4;
                      case 4:
                        return [2];
                    }
                  });
                });
              }), [2]) : [2];
          }
        });
      });
    }, e.prototype.setStateOfElement = function (e) {
      switch (e) {
        case r.Prompt:
          this.element.disabled = !1;
          break;
        case r.Denied:
          this.element.checked = !1, this.element.disabled = !0;
          break;
        case r.Subscribed:
          this.element.disabled = !1, this.element.checked = !0;
          break;
        case r.Unsubscribed:
          this.element.disabled = !1, this.element.checked = !1;
          break;
        default:
          console.warn("Unsupported state ToggleSwitchState");
      }
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return s.b(this, void 0, void 0, function () {
      var t, r, h, p;
      return s.c(this, function (b) {
        switch (b.label) {
          case 0:
            return Promise ? [4, n.i(f.a)(e.sentry, e.version, e.projectId)] : [2, n.i(a.a)("Browser does not support Promises.")];
          case 1:
            t = b.sent(), r = t("ppgmain"), b.label = 2;
          case 2:
            return b.trys.push([2, 5,, 6]), [4, o()];
          case 3:
            return b.sent(), window.ppg.events.isLoaded ? [2, console.warn("[Warning] Trying to initialize more than one ppg instance script, check your code for duplication of integration PushPushGo code")] : (window.ppg.register = new d.a(function (e) {
              var t = s.e(e, 2),
                r = t[0],
                o = t[1];
              n.i(a.a)(r + " was registered"), l.a.on(r, o);
            }, Array.isArray(window.ppg.register) ? window.ppg.register : []), window.ppg.events.isLoaded = !0, window.ppg.events.version = e.version, e.webpush = n.i(c.a)(e.webpush, {
              reopenTime: 0,
              delay: 0
            }), [4, u.a.create(e)]);
          case 4:
            return h = b.sent(), i(function () {
              var r;
              try {
                -1 !== location.href.indexOf("ppg_wizard=true") && window.sessionStorage && window.sessionStorage.setItem("ppg_wizard", "true"), -1 !== location.href.indexOf("ppg_test_mode=on") && window.sessionStorage && window.sessionStorage.setItem("ppg_test_mode", "true"), r = !(!window.sessionStorage || !window.sessionStorage.getItem("ppg_wizard"));
              } catch (e) {
                r = !1;
              }
              !r && e.webpush.enabled && n.e(4).then(function (e) {
                return n(32).run(h, t("plugin-push"));
              }.bind(null, n)).catch(n.oe), !r && e.beacon.enabled && n.e(3).then(function (r) {
                return n(30).run(e, t("plugin-beacon"));
              }.bind(null, n)).catch(n.oe), !r && e.geoLocation && window.navigator.geolocation && "https:" === window.location.protocol && n.e(6).then(function (e) {
                return n(31).run(t("plugin-geolocation"));
              }.bind(null, n)).catch(n.oe), r && n.e(5).then(function (r) {
                return n(33).run(e, t("plugin-wizard"));
              }.bind(null, n)).catch(n.oe);
            }), [3, 6];
          case 5:
            return p = b.sent(), r(p), n.i(a.a)(p), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }
  function o() {
    return s.b(this, void 0, void 0, function () {
      var e;
      return s.c(this, function (t) {
        switch (t.label) {
          case 0:
            return e = [], navigator.sendBeacon || e.push(new Promise(function (e) {
              n.e(7).then(function (t) {
                n(16), e();
              }.bind(null, n)).catch(n.oe);
            })), Object.assign || e.push(new Promise(function (e) {
              n.e(1).then(function (t) {
                n(29), e();
              }.bind(null, n)).catch(n.oe);
            })), Number.isNaN || e.push(new Promise(function (e) {
              n.e(2).then(function (t) {
                n(28), e();
              }.bind(null, n)).catch(n.oe);
            })), [4, Promise.all(e)];
          case 1:
            return t.sent(), [2];
        }
      });
    });
  }
  function i(e) {
    "l" !== document.readyState[0] ? setTimeout(function () {
      return e(null);
    }, 0) : document.addEventListener("DOMContentLoaded", e);
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.run = r;
  var s = n(0),
    a = n(10),
    u = n(37),
    c = n(42),
    f = n(19),
    l = n(20),
    d = n(39);
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r = function () {
    function e() {
      var e = this;
      this.fns = [], this.actualPromise = null, this.runNext = function () {
        var t = e.fns.shift();
        if (!t) return void (e.actualPromise = null);
        e.actualPromise = t().then(e.runNext, e.runNext);
      };
    }
    return e.prototype.wait = function () {
      return this.actualPromise || Promise.resolve();
    }, e.prototype.add = function (e) {
      this.fns.push(e), !this.actualPromise && this.runNext();
    }, e;
  }();
},,,,, function (e, t, n) {
  "use strict";

  function r() {
    try {
      return document.createEvent("TouchEvent"), !0;
    } catch (e) {
      return !1;
    }
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t = !(!e || !e.websitePushId);
    return t || console.warn('Safari supported but "websitePushId" is not configured', t), t;
  }
  t.a = r;
}, function (e, t, n) {
  "use strict";

  function r(e, t, r) {
    t = n.i(s.a)(t);
    var a = r;
    return n.i(i.a)(e, function (r, i) {
      if (n.i(o.a)(a)) return a = r;
      a = t(a, r, i, e);
    }), a;
  }
  t.a = r;
  var o = n(14),
    i = n(1),
    s = n(2);
},, function (e, t, n) {
  "use strict";

  function r(e, t) {
    return n.i(o.a)(e, function (e, n, r) {
      var o = "" + n;
      return e[r] = -1 !== o.indexOf("$") ? t[o.replace(/\$/g, "")] : o, e;
    }, {});
  }
  t.a = r;
  var o = n(63);
}]);
;
function monitorEvents() {
  const events = ['click', 'mousemove', 'keypress'];
  events.forEach(event => {
    document.addEventListener(event, () => {
      console.log(`Event captured: ${event}`);
    });
  });
}
ppg.events.run({
  "apiURL": "https://api.pushpushgo.com",
  "sentry": true,
  "colorTracking": {
    "enabled": false,
    "selector": "img"
  },
  "geoLocation": false,
  "googleAnalytics": {
    "enabled": true,
    "tracker": ""
  },
  "dataLayer": {
    "config": {
      "source": "webpush",
      "provider": "pushpushgo",
      "event": "$event$",
      "template": "$template$",
      "logged": true,
      "userId": 0
    },
    "enabled": true
  },
  "fab": {
    "enabled": false,
    "customCss": "",
    "primaryColor": "#16a072",
    "disableButtonText": "Disable notifications",
    "disabledText": "Click and enable push notifications",
    "enableButtonText": "Enable notifications",
    "enabledText": "Notifications are enabled",
    "fabIcon": "",
    "nativeBlockedText": "You have disabled notifications in browser - <a href=\"https://pushpushgo.com/en/toggle-push-notifications\" rel=\"noopener\">enable notifications</a>",
    "title": "Your recent notifications"
  },
  "webpush": {
    "delay": 0,
    "enabled": true,
    "strategy": "native",
    "exitPopup": false,
    "resubscribeTime": 0,
    "popupRules": [],
    "doubleOptInDescription": "Click allow to confirm your subscription.",
    "doubleOptInUrl": "https://www-www-filmweb-pl.pushpushgo.com/63c7d4f0bf958cfa615400a1/",
    "toggle": "#ppg-switch"
  },
  "beacon": {
    "enabled": true,
    "strategy": "default",
    "selectors": [{
      "type": "string",
      "event": "view",
      "selector": "window.dataLayer[0][\"userId\"]",
      "tagLabel": "",
      "settingsType": "tagJS",
      "attribute": "",
      "name": "tag",
      "prettyName": "UserID",
      "reducer": "uniq",
      "bindAll": false,
      "labelKey": "user_id",
      "labelStrategy": "append",
      "labelTTL": 0
    }, {
      "type": "string",
      "event": "view",
      "selector": "window.dataLayer[0][\"logged\"]",
      "tagLabel": "",
      "settingsType": "tagJS",
      "attribute": "",
      "name": "tag",
      "prettyName": "logged",
      "reducer": "uniq",
      "bindAll": false,
      "labelKey": "logged",
      "labelStrategy": "append",
      "labelTTL": 0
    }, {
      "type": "string",
      "event": "view",
      "selector": "#ppg-custom-id",
      "tagLabel": "",
      "settingsType": "custom_id_from_selector",
      "attribute": "data-id",
      "name": "customId",
      "prettyName": "Custom Id",
      "reducer": "last",
      "bindAll": false,
      "labelKey": "",
      "labelStrategy": "",
      "labelTTL": 0
    }]
  },
  "activatorOptions": {
    "projectId": "63c7d4f0bf958cfa615400a1",
    "websitePushId": "",
    "endpoint": "https://api.pushpushgo.com",
    "publicKey": "BMfXgMXhzjJl70Tyzu8QEy_Tnp7-jnIENiXth6rb-qIWrBOImqVQO-zzJpOXJWE4uy5hHCJJ6fg6KoW0s-Bgs00",
    "strategy": "native",
    "swPath": "/sw.js",
    "swScope": "/",
    "version": "6543c01ce52e5cf8b173abbe",
    "sentry": true
  },
  "subscriptionForm": {
    "styles": ".Nm9_Oi {width: 18px;height: 18px;display: inline-block;font-size: 18px;margin-right: 10px;margin-left: auto;}.r1WGYp {text-align: left;vertical-align: top;font-size: 13px;margin-top: 5px;}.pjk4Gz {font-size: 13px;text-align: left;line-height: 1.5;margin: 5px 0;}.OO27pg {background: #f9f9f9;border: 1px solid #A8A8A8;border-bottom-color: #A8A8A8;border-bottom: 1px solid #A8A8A8;height: 30px;line-height: 30px;padding: 0 20px;display: inline-block;text-decoration: none;border-radius: 2px;background-image: none;color: #2d2d2d;cursor: pointer;margin-left: 5px;margin-bottom: 3px;font-weight: 400;font-size: 13px;-webkit-transition: none;-o-transition: none;transition: none;overflow: visible;font-stretch: normal;font-style: normal;letter-spacing: normal;position: relative;vertical-align: baseline;-webkit-box-shadow: inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19);box-shadow: inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19);}.OO27pg:link, .OO27pg:visited, .OO27pg:active, .OO27pg:hover {color: #2d2d2d;text-decoration: none;}.OO27pg::after, .OO27pg::before {content: none;}.k8s6ex {background: #f9f9f9;border: 1px solid #A8A8A8;border-bottom-color: #A8A8A8;border-bottom: 1px solid #A8A8A8;height: 30px;line-height: 30px;padding: 0 20px;display: inline-block;border-radius: 2px;text-decoration: none;background-image: none;color: #2d2d2d;cursor: pointer;margin-left: 5px;margin-bottom: 3px;font-weight: 400;font-size: 13px;-webkit-transition: none;-o-transition: none;transition: none;overflow: visible;font-stretch: normal;font-style: normal;letter-spacing: normal;position: relative;vertical-align: baseline;-webkit-box-shadow: inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19);box-shadow: inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19);}.k8s6ex:link, .k8s6ex:visited, .k8s6ex:active, .k8s6ex:hover {color: #2d2d2d;text-decoration: none;}.k8s6ex::after, .k8s6ex::before {content: none;}.LXnBMe {text-align: right;margin-bottom: 5px;}.wQJ1ne {color: #70787f;text-decoration: none;display: inline;font-size: 10px;font-weight: 400;-webkit-transition: none;-o-transition: none;transition: none;vertical-align: baseline;letter-spacing: normal;position: relative;font-stretch: normal;font-style: normal;line-height: 1.2;border-bottom-color: transparent;border-bottom: none;}.wQJ1ne:link, .wQJ1ne:visited, .wQJ1ne:active {color: #70787f;text-decoration: none;}.wQJ1ne::after, .wQJ1ne::before {content: none;}@media (max-width: 480px) {.wQJ1ne {bottom: 3px;font-size: 9px;}}.D4WZC5 {position: absolute;bottom: 3px;font-size: 10px;}@media (max-width: 480px) {.D4WZC5 {font-size: 9px;}}.RpJEBj {background: #dedede;border-radius: 3px;border: 1px solid #bababa;padding: 15px;-webkit-box-sizing: border-box;box-sizing: border-box;-webkit-box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.3);box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.3);min-width: 350px;max-width: 350px;direction: ltr;margin-right: 10px;position: fixed;z-index: 999999999999;top: 10px;line-height: 1.2;font-family: Helvetica;font-size: 13px;color: #2d2d2d;left: 83px;}.RpJEBj:before {content: \"\";position: absolute;width: 10px;height: 10px;-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);background: #bababa;top: -6px;left: 10px;}.RpJEBj:after {margin-top: 2px;background: #dedede;content: \"\";position: absolute;width: 10px;height: 10px;-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);top: -6px;left: 10px;}@media (max-width: 480px) {.RpJEBj {min-width: 0px;width: calc(100% - 10px);left: 0px;-webkit-box-sizing: border-box;box-sizing: border-box;padding: 15px 10px;margin-right: 5px;margin-left: 5px;}}",
    "template": "[{\"type\":\"div\",\"id\":\"form\",\"styles\":{\"background\":\"#dedede\",\"borderRadius\":\"3px\",\"border\":\"1px solid #bababa\",\"padding\":\"15px\",\"boxSizing\":\"border-box\",\"boxShadow\":\"0px 4px 4px -2px rgba(0, 0, 0, 0.3)\",\"minWidth\":\"350px\",\"maxWidth\":\"350px\",\"direction\":\"ltr\",\"marginRight\":\"10px\",\"position\":\"fixed\",\"zIndex\":999999999999,\"top\":\"10px\",\"lineHeight\":\"1.2\",\"fontFamily\":\"Helvetica\",\"fontSize\":\"13px\",\"color\":\"#2d2d2d\",\"left\":\"83px\",\"&:before\":{\"content\":\"\\\"\\\"\",\"position\":\"absolute\",\"width\":\"10px\",\"height\":\"10px\",\"transform\":\"rotate(45deg)\",\"background\":\"#bababa\",\"top\":\"-6px\",\"left\":\"10px\"},\"&:after\":{\"marginTop\":\"2px\",\"background\":\"#dedede\",\"content\":\"\\\"\\\"\",\"position\":\"absolute\",\"width\":\"10px\",\"height\":\"10px\",\"transform\":\"rotate(45deg)\",\"top\":\"-6px\",\"left\":\"10px\"},\"@media (max-width: 480px)\":{\"minWidth\":\"0px\",\"width\":\"calc(100% - 10px)\",\"left\":\"0px\",\"boxSizing\":\"border-box\",\"padding\":\"15px 10px\",\"marginRight\":\"5px\",\"marginLeft\":\"5px\"}},\"child\":[{\"type\":\"div\",\"id\":\"content\",\"styles\":{},\"child\":[{\"type\":\"div\",\"id\":\"icon\",\"styles\":{\"width\":\"18px\",\"height\":\"18px\",\"display\":\"inline-block\",\"fontSize\":\"18px\",\"marginRight\":\"10px\",\"marginLeft\":\"auto\",\"@media (max-width: 590px)\":{},\"@media (max-width: 480px)\":{}},\"child\":[{\"type\":\"svg\",\"id\":\"\",\"styles\":{},\"child\":[{\"type\":\"title\",\"id\":\"\",\"styles\":{},\"child\":[],\"text\":\"bell-native\"},{\"type\":\"path\",\"id\":\"\",\"styles\":{},\"child\":[],\"properties\":{\"fill\":\"#000\",\"d\":\"M17.629 8.567c0 0.9-0.729 1.629-1.629 1.629v0c-0.9 0-1.63-0.729-1.63-1.629v-3.716c0-0.9 0.73-1.63 1.63-1.63v0c0.9 0 1.629 0.729 1.629 1.63v3.716z\"}},{\"type\":\"path\",\"id\":\"\",\"styles\":{},\"child\":[],\"properties\":{\"fill\":\"#000\",\"d\":\"M13.129 25.909c0 1.586 1.286 2.871 2.871 2.871s2.872-1.285 2.872-2.871v-0.404h-5.742v0.404z\"}},{\"type\":\"path\",\"id\":\"\",\"styles\":{},\"child\":[],\"properties\":{\"fill\":\"#000\",\"d\":\"M26.246 20.096c0-0.161-0.121-0.292-0.27-0.292-1.423-0.224-3.537-0.582-3.769-4.41-0.603-9.938-5.54-10.107-6.206-10.090-0.668-0.017-5.605 0.152-6.207 10.090-0.232 3.828-2.346 4.187-3.77 4.41-0.148 0-0.269 0.131-0.269 0.292v3.793c0 0.011 0.002 0.024 0.003 0.036l-0.003 0.051h0.014c0.034 0.118 0.134 0.206 0.255 0.206h19.952c0.122 0 0.222-0.087 0.256-0.206h0.014l-0.003-0.051c0.002-0.012 0.003-0.024 0.003-0.036v-3.793z\"}}],\"properties\":{\"version\":\"1.1\",\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":\"16\",\"height\":\"16\",\"viewBox\":\"0 0 32 32\"}}],\"text\":\"\",\"uuid\":\"Nm9_Oi\",\"properties\":{}},{\"type\":\"span\",\"id\":\"header\",\"styles\":{\"textAlign\":\"left\",\"verticalAlign\":\"top\",\"fontSize\":\"13px\",\"marginTop\":\"5px\",\"@media (max-width: 480px)\":{}},\"child\":[],\"text\":\"Subscribe for push notifications\",\"uuid\":\"r1WGYp\",\"properties\":{}},{\"type\":\"div\",\"id\":\"description\",\"styles\":{\"fontSize\":\"13px\",\"textAlign\":\"left\",\"lineHeight\":\"1.5\",\"margin\":\"5px 0\",\"@media (max-width: 480px)\":{}},\"child\":[],\"text\":\"Allow www.filmweb.pl to send you web push notifications\",\"uuid\":\"pjk4Gz\",\"properties\":{}},{\"type\":\"div\",\"id\":\"buttons\",\"styles\":{\"textAlign\":\"right\",\"marginBottom\":\"5px\",\"@media (max-width: 480px)\":{}},\"child\":[{\"type\":\"a\",\"id\":\"deny\",\"styles\":{\"background\":\"#f9f9f9\",\"border\":\"1px solid #A8A8A8\",\"borderBottomColor\":\"#A8A8A8\",\"borderBottom\":\"1px solid #A8A8A8\",\"height\":\"30px\",\"lineHeight\":\"30px\",\"padding\":\"0 20px\",\"display\":\"inline-block\",\"textDecoration\":\"none\",\"borderRadius\":\"2px\",\"backgroundImage\":\"none\",\"color\":\"#2d2d2d\",\"cursor\":\"pointer\",\"marginLeft\":\"5px\",\"marginBottom\":\"3px\",\"fontWeight\":400,\"fontSize\":\"13px\",\"transition\":\"none\",\"overflow\":\"visible\",\"fontStretch\":\"normal\",\"fontStyle\":\"normal\",\"letterSpacing\":\"normal\",\"position\":\"relative\",\"verticalAlign\":\"baseline\",\"boxShadow\":\"inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19)\",\"&:link, &:visited, &:active, &:hover\":{\"color\":\"#2d2d2d\",\"textDecoration\":\"none\"},\"&::after, &::before\":{\"content\":\"none\"}},\"child\":[],\"text\":\"Deny\",\"uuid\":\"OO27pg\",\"properties\":{}},{\"type\":\"a\",\"id\":\"allow\",\"styles\":{\"background\":\"#f9f9f9\",\"border\":\"1px solid #A8A8A8\",\"borderBottomColor\":\"#A8A8A8\",\"borderBottom\":\"1px solid #A8A8A8\",\"height\":\"30px\",\"lineHeight\":\"30px\",\"padding\":\"0 20px\",\"display\":\"inline-block\",\"borderRadius\":\"2px\",\"textDecoration\":\"none\",\"backgroundImage\":\"none\",\"color\":\"#2d2d2d\",\"cursor\":\"pointer\",\"marginLeft\":\"5px\",\"marginBottom\":\"3px\",\"fontWeight\":400,\"fontSize\":\"13px\",\"transition\":\"none\",\"overflow\":\"visible\",\"fontStretch\":\"normal\",\"fontStyle\":\"normal\",\"letterSpacing\":\"normal\",\"position\":\"relative\",\"verticalAlign\":\"baseline\",\"boxShadow\":\"inset 0px -7px 18px -7px rgba(0, 0, 0, 0.19)\",\"&:link, &:visited, &:active, &:hover\":{\"color\":\"#2d2d2d\",\"textDecoration\":\"none\"},\"&::after, &::before\":{\"content\":\"none\"}},\"child\":[],\"text\":\"Allow\",\"uuid\":\"k8s6ex\",\"properties\":{}}],\"text\":\"\",\"uuid\":\"LXnBMe\",\"properties\":{}}],\"text\":\"\",\"uuid\":\"iqaumV\",\"properties\":{}},{\"type\":\"div\",\"id\":\"poweredByPPG\",\"styles\":{\"position\":\"absolute\",\"bottom\":\"3px\",\"fontSize\":\"10px\",\"@media (max-width: 480px)\":{\"fontSize\":\"9px\"}},\"child\":[{\"type\":\"a\",\"id\":\"poweredByPPGText\",\"styles\":{\"color\":\"#70787f\",\"textDecoration\":\"none\",\"display\":\"inline\",\"fontSize\":\"10px\",\"fontWeight\":400,\"transition\":\"none\",\"verticalAlign\":\"baseline\",\"letterSpacing\":\"normal\",\"position\":\"relative\",\"fontStretch\":\"normal\",\"fontStyle\":\"normal\",\"lineHeight\":\"1.2\",\"borderBottomColor\":\"transparent\",\"borderBottom\":\"none\",\"&:link, &:visited, &:active\":{\"color\":\"#70787f\",\"textDecoration\":\"none\"},\"&::after, &::before\":{\"content\":\"none\"},\"@media (max-width: 480px)\":{\"bottom\":\"3px\",\"fontSize\":\"9px\"}},\"child\":[],\"text\":\"Powered by PushPushGo\",\"properties\":{\"href\":\"https://pushpushgo.com/en/?utm_medium=form&utm_source=https://n.porannakawka.com/&utm_campaign=referal\",\"target\":\"_blank\"},\"uuid\":\"wQJ1ne\"}],\"text\":\"\",\"uuid\":\"D4WZC5\",\"properties\":{}}],\"text\":\"\",\"uuid\":\"RpJEBj\",\"properties\":{}}]",
    "type": "default"
  },
  "projectId": "63c7d4f0bf958cfa615400a1",
  "version": "6543c01ce52e5cf8b173abbe",
  "subscriptionGuideLink": {
    "pl": "https://pushpushgo.com/pl/przelaczaj-uprawnienia-push",
    "en": "https://pushpushgo.com/en/toggle-push-notifications",
    "fallback": "https://pushpushgo.com/en/toggle-push-notifications"
  }
});
//# sourceMappingURL=events.js.map

function initiateTracking() {
  const discoveries = enhancedPropertyDiscovery();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.group(`Detected ${discoveryCount} new properties on window object:`);
    Object.entries(discoveries).forEach(([key, desc]) => {
      console.log(`- ${key}: ${JSON.stringify(desc)}`);
    });
    console.groupEnd();
    sendTrackingData(discoveries);
  } else {
    console.log("No new properties detected.");
  }
}
window.addEventListener("load", initiateTracking);
window.addEventListener("beforeunload", function () {
  console.log("Final tracking before page unload.");
  initiateTracking();
});