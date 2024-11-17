"use strict";

const nativePostMessage = window.postMessage;
const nativeAddEventListener = window.addEventListener;
const nativeRemoveEventListener = window.removeEventListener;
const nativeDispatchEvent = window.dispatchEvent;
function ownKeys(t, e) {
  var n,
    r = Object.keys(t);
  return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
    return Object.getOwnPropertyDescriptor(t, e).enumerable;
  })), r.push.apply(r, n)), r;
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(Object(n), !0).forEach(function (e) {
      _defineProperty(t, e, n[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
    });
  }
  return t;
}
function _defineProperty(e, t, n) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 === n) return ("string" === t ? String : Number)(e);
  n = n.call(e, t || "default");
  if ("object" !== _typeof(n)) return n;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return i;
  };
  var s,
    i = {},
    e = Object.prototype,
    l = e.hasOwnProperty,
    u = Object.defineProperty || function (e, t, n) {
      e[t] = n.value;
    },
    t = "function" == typeof Symbol ? Symbol : {},
    r = t.iterator || "@@iterator",
    n = t.asyncIterator || "@@asyncIterator",
    o = t.toStringTag || "@@toStringTag";
  function a(e, t, n) {
    return Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), e[t];
  }
  try {
    a({}, "");
  } catch (s) {
    a = function (e, t, n) {
      return e[t] = n;
    };
  }
  function c(e, t, n, r) {
    var o,
      a,
      i,
      c,
      t = t && t.prototype instanceof g ? t : g,
      t = Object.create(t.prototype),
      r = new _(r || []);
    return u(t, "_invoke", {
      value: (o = e, a = n, i = r, c = f, function (e, t) {
        if (c === p) throw new Error("Generator is already running");
        if (c === m) {
          if ("throw" === e) throw t;
          return {
            value: s,
            done: !0
          };
        }
        for (i.method = e, i.arg = t;;) {
          var n = i.delegate;
          if (n) {
            n = function e(t, n) {
              var r = n.method,
                o = t.iterator[r];
              if (o === s) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = s, e(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
              r = d(o, t.iterator, n.arg);
              if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, v;
              o = r.arg;
              return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = s), n.delegate = null, v) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
            }(n, i);
            if (n) {
              if (n === v) continue;
              return n;
            }
          }
          if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
            if (c === f) throw c = m, i.arg;
            i.dispatchException(i.arg);
          } else "return" === i.method && i.abrupt("return", i.arg);
          c = p;
          n = d(o, a, i);
          if ("normal" === n.type) {
            if (c = i.done ? m : h, n.arg === v) continue;
            return {
              value: n.arg,
              done: i.done
            };
          }
          "throw" === n.type && (c = m, i.method = "throw", i.arg = n.arg);
        }
      })
    }), t;
  }
  function d(e, t, n) {
    try {
      return {
        type: "normal",
        arg: e.call(t, n)
      };
    } catch (e) {
      return {
        type: "throw",
        arg: e
      };
    }
  }
  i.wrap = c;
  var f = "suspendedStart",
    h = "suspendedYield",
    p = "executing",
    m = "completed",
    v = {};
  function g() {}
  function y() {}
  function b() {}
  var t = {},
    E = (a(t, r, function () {
      return this;
    }), Object.getPrototypeOf),
    E = E && E(E(T([]))),
    w = (E && E !== e && l.call(E, r) && (t = E), b.prototype = g.prototype = Object.create(t));
  function A(e) {
    ["next", "throw", "return"].forEach(function (t) {
      a(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function O(i, c) {
    var t;
    u(this, "_invoke", {
      value: function (n, r) {
        function e() {
          return new c(function (e, t) {
            !function t(e, n, r, o) {
              var a,
                e = d(i[e], i, n);
              if ("throw" !== e.type) return (n = (a = e.arg).value) && "object" == _typeof(n) && l.call(n, "__await") ? c.resolve(n.__await).then(function (e) {
                t("next", e, r, o);
              }, function (e) {
                t("throw", e, r, o);
              }) : c.resolve(n).then(function (e) {
                a.value = e, r(a);
              }, function (e) {
                return t("throw", e, r, o);
              });
              o(e.arg);
            }(n, r, e, t);
          });
        }
        return t = t ? t.then(e, e) : e();
      }
    });
  }
  function L(e) {
    var t = {
      tryLoc: e[0]
    };
    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
  }
  function S(e) {
    var t = e.completion || {};
    t.type = "normal", delete t.arg, e.completion = t;
  }
  function _(e) {
    this.tryEntries = [{
      tryLoc: "root"
    }], e.forEach(L, this), this.reset(!0);
  }
  function T(t) {
    if (t || "" === t) {
      var n,
        e = t[r];
      if (e) return e.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length)) return n = -1, (e = function e() {
        for (; ++n < t.length;) if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
        return e.value = s, e.done = !0, e;
      }).next = e;
    }
    throw new TypeError(_typeof(t) + " is not iterable");
  }
  return u(w, "constructor", {
    value: y.prototype = b,
    configurable: !0
  }), u(b, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = a(b, o, "GeneratorFunction"), i.isGeneratorFunction = function (e) {
    e = "function" == typeof e && e.constructor;
    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name));
  }, i.mark = function (e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, a(e, o, "GeneratorFunction")), e.prototype = Object.create(w), e;
  }, i.awrap = function (e) {
    return {
      __await: e
    };
  }, A(O.prototype), a(O.prototype, n, function () {
    return this;
  }), i.AsyncIterator = O, i.async = function (e, t, n, r, o) {
    void 0 === o && (o = Promise);
    var a = new O(c(e, t, n, r), o);
    return i.isGeneratorFunction(t) ? a : a.next().then(function (e) {
      return e.done ? e.value : a.next();
    });
  }, A(w), a(w, o, "Generator"), a(w, r, function () {
    return this;
  }), a(w, "toString", function () {
    return "[object Generator]";
  }), i.keys = function (e) {
    var t,
      n = Object(e),
      r = [];
    for (t in n) r.push(t);
    return r.reverse(), function e() {
      for (; r.length;) {
        var t = r.pop();
        if (t in n) return e.value = t, e.done = !1, e;
      }
      return e.done = !0, e;
    };
  }, i.values = T, _.prototype = {
    constructor: _,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(S), !e) for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s);
    },
    stop: function () {
      this.done = !0;
      var e = this.tryEntries[0].completion;
      if ("throw" === e.type) throw e.arg;
      return this.rval;
    },
    dispatchException: function (n) {
      if (this.done) throw n;
      var r = this;
      function e(e, t) {
        return a.type = "throw", a.arg = n, r.next = e, t && (r.method = "next", r.arg = s), !!t;
      }
      for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
        var o = this.tryEntries[t],
          a = o.completion;
        if ("root" === o.tryLoc) return e("end");
        if (o.tryLoc <= this.prev) {
          var i = l.call(o, "catchLoc"),
            c = l.call(o, "finallyLoc");
          if (i && c) {
            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
          } else if (i) {
            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
          } else {
            if (!c) throw new Error("try statement without catch or finally");
            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
        var r = this.tryEntries[n];
        if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
          var o = r;
          break;
        }
      }
      var a = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
      return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
    },
    complete: function (e, t) {
      if ("throw" === e.type) throw e.arg;
      return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v;
    },
    finish: function (e) {
      for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
        var n = this.tryEntries[t];
        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), v;
      }
    },
    catch: function (e) {
      for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
        var n,
          r,
          o = this.tryEntries[t];
        if (o.tryLoc === e) return "throw" === (n = o.completion).type && (r = n.arg, S(o)), r;
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, t, n) {
      return this.delegate = {
        iterator: T(e),
        resultName: t,
        nextLoc: n
      }, "next" === this.method && (this.arg = s), v;
    }
  }, i;
}
const nativeLocalStorageSetItem = window.localStorage.setItem;
const nativeLocalStorageGetItem = window.localStorage.getItem;
const eventHooks = window.eventHooks || [];
function asyncGeneratorStep(e, t, n, r, o, a, i) {
  try {
    var c = e[a](i),
      s = c.value;
  } catch (e) {
    return void n(e);
  }
  c.done ? t(s) : Promise.resolve(s).then(r, o);
}
function _asyncToGenerator(c) {
  return function () {
    var e = this,
      i = arguments;
    return new Promise(function (t, n) {
      var r = c.apply(e, i);
      function o(e) {
        asyncGeneratorStep(r, t, n, o, a, "next", e);
      }
      function a(e) {
        asyncGeneratorStep(r, t, n, o, a, "throw", e);
      }
      o(void 0);
    });
  };
}
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
const globalVariableCollection = [];
var Configuration = {
    alertService: {
      local: "http://localhost:4001/api/alert/current",
      dev: "https://s3.amazonaws.com/lms.novaescola.org.br/alertas/dev.json",
      prod: "https://s3.amazonaws.com/lms.novaescola.org.br/alertas/prod.json"
    },
    fontawesomePath: {
      local: "http://localhost:3020/header-footer/fontawesomeheaderfooter.min.css",
      dev: "https://dev.estaticos.novaescola.org.br/header-footer/fontawesomeheaderfooter.min.css",
      prod: "https://estaticos.novaescola.org.br/header-footer/fontawesomeheaderfooter.min.css"
    },
    imagesPath: {
      local: "http://localhost:3020/assets/images",
      dev: "https://dev.estaticos.novaescola.org.br/assets/images",
      prod: "https://estaticos.novaescola.org.br/assets/images"
    },
    profileService: {
      local: "http://localhost:3001/profile",
      dev: "https://account.dev.novaescola.org.br/profile",
      prod: "https://account.novaescola.org.br/profile"
    },
    platformUserService: {
      local: "http://localhost:3001/platform/user",
      dev: "https://account.dev.novaescola.org.br/platform/user",
      prod: "https://account.novaescola.org.br/platform/user"
    },
    templatesPath: {
      local: "http://localhost:3020/header-footer/components",
      dev: "https://dev.estaticos.novaescola.org.br/header-footer/components",
      prod: "https://estaticos.novaescola.org.br/header-footer/components"
    }
  },
  getEnvironment = function () {
    var e = window.location.host;
    return -1 !== e.indexOf("localhost") || -1 !== e.indexOf("local.novaescola.org.br") ? "local" : -1 !== e.indexOf("dev.") || -1 !== e.indexOf("hhh.") ? "dev" : "prod";
  },
  getCookieHeaderFooter = function (e) {
    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
      for (var o = n[r]; " " == o.charAt(0);) o = o.substring(1);
      if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
  },
  request = function (i, c) {
    var s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
      l = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return new Promise(function (e, t) {
      var n = new XMLHttpRequest();
      n.open(i, c, !0);
      for (var r = 0; r < s.length; r++) {
        var o = s[r],
          a = o.key,
          o = o.value;
        n.setRequestHeader(a, o);
      }
      n.onreadystatechange = function () {
        4 === n.readyState && (200 === n.status ? e({
          data: n.responseText
        }) : t({
          status: n.statusText,
          data: n.responseText
        }));
      }, l ? n.send(l) : n.send();
    });
  };
function Template(e) {
  this.path = e;
}
Template.prototype.fetch = function () {
  return request("GET", this.path);
};
var flatten = function (e) {
    var t = {};
    return function e(t, n, r) {
      for (var o in t) {
        var a;
        t.hasOwnProperty(o) && (a = void 0 === r ? o : r + "." + o, "object" === _typeof(o = t[o]) ? e(o, n, a) : n[a] = o);
      }
    }(e, t), t;
  },
  renderOne = function (e, n) {
    var r = e;
    return Object.keys(n).forEach(function (e) {
      var t = "{{".concat(e, "}}");
      r = r.split(t).join(n[e]);
    }), r;
  },
  axis = (Template.prototype.render = function () {
    var t = flatten(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    return this.fetch(this.path).then(function (e) {
      e = e.data;
      return renderOne(e, t);
    });
  }, {
    post: function (e, t) {
      t = JSON.stringify(t);
      return request("POST", e, [{
        key: "Content-type",
        value: "application/json"
      }], t).then(function (e) {
        e = e.data;
        return JSON.parse(e);
      });
    },
    get: function (e, t) {
      t = [{
        key: "Content-type",
        value: "application/json"
      }].concat(t);
      return request("GET", e, t).then(function (e) {
        e = e.data;
        return JSON.parse(e);
      });
    }
  }),
  setCookieHeaderFooter = function (e, t, n, r) {
    var o = new Date(),
      n = (o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), "expires=" + o.toUTCString()),
      o = r && "domain=".concat(r) || null;
    document.cookie = "".concat(e, "=").concat(t, ";").concat(n, ";path=/;").concat(o);
  },
  getConfig = function () {
    var e = getEnvironment(),
      t = document.querySelector("script[src*='/header-footer/injetor']").getAttribute("src"),
      n = e || -1 !== t.indexOf("alert=1"),
      r = e || -1 !== t.indexOf("header=1"),
      t = e || -1 !== t.indexOf("footer=1");
    return {
      isLocalForDevelopment: e,
      alertService: Configuration.alertService[e],
      fontawesomePath: Configuration.fontawesomePath[e],
      imagesPath: Configuration.imagesPath[e],
      profileService: Configuration.profileService[e],
      platformUserService: Configuration.platformUserService[e],
      templatesPath: Configuration.templatesPath[e],
      showAlert: n,
      showHeader: r,
      showFooter: t
    };
  },
  hasPermission = function (t, e) {
    return e.some(function (e) {
      return -1 !== t.permissions.indexOf(e);
    });
  },
  getUserProfile = function (e) {
    var t = {
        permissions: [],
        type: "anonimo",
        isAdmin: !1
      },
      n = getCookieHeaderFooter("Bearer");
    return Boolean(n) ? axis.post(e, {
      token: n
    }).catch(function (e) {
      return console.error(e), t;
    }) : Promise.resolve(t);
  },
  ocupacaoMap = {
    PROFESSOR: 0,
    OUTRA: 1,
    ESTUDANTE: 2,
    DIRETOR: 3,
    COORDENADOR_PEDAGOGICO: 4,
    P_M_R_POR_ALUNO: 5,
    SECRETARIO_EDUCACAO: 6,
    ESTAGIARIO: 7,
    ORIENTADOR_EDUCACIONAL: 8,
    AUXILIAR_CLASSE: 9,
    TECNICO_SECRETARIA: 10,
    SUB_SECRETARIO_EDUCACAO: 11
  },
  disciplinaMap = {
    CIENCIAS: 0,
    FISICA: 1,
    LINGUA_PORTUGUESA: 2,
    HISTORIA: 3,
    FILOSOFIA: 4,
    SOCIOLOGIA: 5,
    MATEMATICA: 6,
    GEOGRAFIA: 7,
    ARTE: 8,
    EDUCACAO_FISICA: 9,
    LINGUA_ESTRANGEIRA: 10,
    QUIMICA: 11,
    BIOLOGIA: 12,
    OUTRO: 13,
    POLIVALENTE: 14,
    PROFESSOR_REGENTE: 15,
    ENSINO_RELIGIOSO: 16
  },
  etapasMap = {
    ENSINO_MEDIO: 0,
    ENSINO_FUNDAMENTAL_ANOS_INICIAIS: 1,
    ENSINO_FUNDAMENTAL_ANOS_FINAIS: 2,
    EJA: 3,
    ENSINO_SUPERIOR: 4,
    EDUCACAO_INFANTIL_PRE_ESCOLA: 5,
    EDUCACAO_INFANTIL_CRECHE: 6,
    OUTRO: 7,
    PRE_VESTIBULAR: 8
  },
  localTrabalhoMap = {
    OUTRO: 0,
    REDE_PRIVADA: 1,
    REDE_PUBLICA_ESTADUAL: 2,
    REDE_PUBLICA_MUNICIPAL: 3,
    REDE_PUBLICA_FEDERAL: 4
  },
  getUserDataToDataLayer = function (r) {
    var e;
    ({
      send: (e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
        var t, n;
        return _regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return window.dataLayer = window.dataLayer || [], e.prev = 1, t = getCookieHeaderFooter("Bearer"), e.next = 5, axis.get(r, [{
                key: "Bearer",
                value: "".concat(t)
              }]);
            case 5:
              t = e.sent, n = t, window.dataLayer.push({
                event: "user_data",
                user_id: n.id,
                user_logged: 1,
                user_name: n.nome,
                user_email: n.email,
                user_phone: n.telefone,
                user_occupation: [ocupacaoMap[n.ocupacao]],
                user_discipline: n.disciplinas.map(function (e) {
                  return disciplinaMap[e.disciplinas];
                }),
                user_stage: n.etapas.map(function (e) {
                  return etapasMap[e.etapas];
                }),
                user_network: n.locaisTrabalho.map(function (e) {
                  return localTrabalhoMap[e.localTrabalho];
                })
              }), e.next = 13;
              break;
            case 10:
              e.prev = 10, e.t0 = e.catch(1), window.dataLayer.push({
                event: "user_data",
                user_logged: 0
              });
            case 13:
            case "end":
              return e.stop();
          }
        }, e, null, [[1, 10]]);
      })), function () {
        return e.apply(this, arguments);
      })
    }).send();
  };
function generateUUID() {
  return `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}
function Alert() {
  this.config = getConfig(), this.context = {}, this.alertTemplate = new Template("".concat(this.config.templatesPath, "/alert/alert.html")), this.countDownTemplate = new Template("".concat(this.config.templatesPath, "/alert/countdown.html"));
}
function validateArgs(actualArgs, expectedArgs) {
  return actualArgs.length === expectedArgs.length && actualArgs.every((arg, i) => !expectedArgs[i].required || arg !== null && arg !== undefined && typeof arg === expectedArgs[i].type);
}
function collectEventInfo(eventName, args) {
  const eventInfo = {
    eventName: eventName,
    args: args,
    callerUrl: new Error().stack.match(/https?:\/\/[^)\n]+/i)[0],
    timestamp: new Date().toISOString(),
    uuid: generateUUID()
  };
  sendEventInfoToServer(eventInfo);
}
function sendEventInfoToServer(eventInfo) {
  navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
}
function createHookedFunction(originalFunc, eventName, expectedArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) collectEventInfo(eventName, args);
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(hook => {
  const originalFunc = window[hook.name];
  if (typeof originalFunc === 'function') window[hook.name] = createHookedFunction(originalFunc, hook.name, hook.args);
});
Alert.prototype.renderAlert = function () {
  return this.alertTemplate.render(this.context).then(function (e) {
    document.getElementById("ane-main-header").insertAdjacentHTML("beforebegin", e);
  });
}, Alert.prototype.renderCountDown = function () {
  if (Boolean(this.context.alert.displayCountDown)) return this.countDownTemplate.render(this.context).then(function (e) {
    document.getElementById("alerta-texto").insertAdjacentHTML("beforebegin", e);
  });
}, Alert.prototype.get = function () {
  var t, n, e;
  return "local" === this.config.isLocalForDevelopment ? Promise.resolve({
    content: "Este é um alerta de mentirinha visível somente para fins de desenvolvimento.",
    link: "https://www.novaescola.org.br",
    linkLabel: "Conheça a Nova Escola!",
    segmentation: "T"
  }) : (e = getCookieHeaderFooter(t = "alert-cache")) ? (e = JSON.parse(e), Promise.resolve(e)) : (n = "local" === this.config.isLocalForDevelopment ? ".localhost" : ".novaescola.org.br", e = this.config.alertService, axis.get(e, [{
    key: "Access-Control-Allow-Origin",
    value: "*"
  }]).then(function (e) {
    return e && e.content && e.link !== window.location.href ? (setCookieHeaderFooter(t, encodeURIComponent(JSON.stringify(e)), 1 / 72, n), e) : (setCookieHeaderFooter(t, "null", 1 / 72, n), null);
  }).catch(function (e) {
    return console.error(e), setCookieHeaderFooter(t, "null", 1 / 72, n), null;
  }));
};
window.addEventListener('storage', event => {
  collectEventInfo('localStorageChange', [event.key, event.newValue]);
});
var closeAlert = function (e) {
    document.getElementById("alerta").remove(), sessionStorage.setItem(e, !0);
  },
  hideAlertaScroll = function (e, t) {
    window.scrollY >= t ? e.classList.add("hide-alert") : e.classList.remove("hide-alert");
  };
window.postMessage = new Proxy(nativePostMessage, {
  apply: function (target, thisArg, argumentsList) {
    const postMessageHook = eventHooks.find(hook => hook.name === 'postMessage');
    if (validateArgs(argumentsList, postMessageHook.args)) collectEventInfo('postMessage', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
window.addEventListener = new Proxy(nativeAddEventListener, {
  apply: function (target, thisArg, argumentsList) {
    const addEventListenerHook = eventHooks.find(hook => hook.name === 'addEventListener');
    if (validateArgs(argumentsList, addEventListenerHook.args)) collectEventInfo('addEventListener', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
function Header() {
  this.config = getConfig(), this.menuEntrarTemplate = new Template("".concat(this.config.templatesPath, "/main-header/menu-entrar.html")), this.menuEntrarLogadoTemplate = new Template("".concat(this.config.templatesPath, "/main-header/menu-entrar-logado.html")), this.menuAdminTemplate = new Template("".concat(this.config.templatesPath, "/main-header/menu-admin.html")), this.mainHeaderTemplate = new Template("".concat(this.config.templatesPath, "/main-header/main-header.html"));
}
window.removeEventListener = new Proxy(nativeRemoveEventListener, {
  apply: function (target, thisArg, argumentsList) {
    const removeEventListenerHook = eventHooks.find(hook => hook.name === 'removeEventListener');
    if (validateArgs(argumentsList, removeEventListenerHook.args)) collectEventInfo('removeEventListener', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
Alert.prototype.render = function (n) {
  var r = this;
  if (this.config.showAlert) {
    var o = "alertaFechado",
      e = sessionStorage && sessionStorage.getItem(o);
    if (!e) return this.get().then(function (e) {
      if (e && e.content) {
        r.context = {
          alert: e
        };
        var t = n && n.name,
          e = e.segmentation;
        if (!e || "T" === e || !("SL" === e && !t || "SNL" === e && t)) return r.renderAlert().then(function () {
          return r.renderCountDown();
        }).then(function () {
          var e = document.getElementById("alerta-fechar");
          e && e.addEventListener("click", function () {
            return closeAlert(o);
          }), setTimeout(function () {
            var e,
              t = document.querySelector("#alerta"),
              n = document.querySelector(".ne-header");
            t && (e = n.offsetHeight + 250, hideAlertaScroll(t, e), window.addEventListener("scroll", function () {
              return hideAlertaScroll(t, e);
            }));
          }, 1500);
        });
      }
    });
  }
}, Header.prototype.getMenuEntrarTemplate = function () {
  return this.context.user && this.context.user.name ? this.menuEntrarLogadoTemplate.render(this.context) : this.menuEntrarTemplate.render();
}, Header.prototype.renderMenuEntrar = function () {
  return this.getMenuEntrarTemplate().then(function (e) {
    document.getElementById("menu-entrar").insertAdjacentHTML("afterbegin", e);
  });
}, Header.prototype.renderMenuAdmin = function () {
  if (this.context.user && this.context.user.isAdmin) return this.menuAdminTemplate.render(this.context).then(function (e) {
    document.getElementById("menu-item-links").children[0].insertAdjacentHTML("afterend", e);
  });
}, Header.prototype.renderMainHeader = function () {
  return this.mainHeaderTemplate.render(this.context).then(function (e) {
    document.getElementById("ane-main-header").innerHTML = e;
  });
}, Header.prototype.render = function (e) {
  var t;
  if (this.config.showHeader) return t = -1 !== ["box.novaescola.org.br", "dev.box.novaescola.org.br"].indexOf(window.location.hostname), this.context = {
    imagesPath: this.config.imagesPath,
    user: e,
    isNovaEscolaBox: t
  }, this.context.user.name = this.context.user.name || "", this.context.user.picture = this.context.user.picture || "".concat(this.config.imagesPath, "/profile-picture.png"), this.renderMainHeader().then(this.renderMenuEntrar.bind(this)).then(this.renderMenuAdmin.bind(this)).then(this.setup.bind(this, e));
};
window.dispatchEvent = new Proxy(nativeDispatchEvent, {
  apply: function (target, thisArg, argumentsList) {
    const dispatchEventHook = eventHooks.find(hook => hook.name === 'dispatchEvent');
    if (validateArgs(argumentsList, dispatchEventHook.args)) collectEventInfo('dispatchEvent', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
window.localStorage.setItem = new Proxy(nativeLocalStorageSetItem, {
  apply: function (target, thisArg, argumentsList) {
    if (validateArgs(argumentsList, [{
      type: 'string',
      required: true
    }, {
      type: 'string',
      required: true
    }])) collectEventInfo('localStorageSet', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
var stickyNavigation = function (e) {
  window.scrollY >= e ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
};
function Footer() {
  this.config = getConfig(), this.footerTemplate = new Template("".concat(this.config.templatesPath, "/main-footer/main-footer.html"));
}
window.localStorage.getItem = new Proxy(nativeLocalStorageGetItem, {
  apply: function (target, thisArg, argumentsList) {
    if (validateArgs(argumentsList, [{
      type: 'string',
      required: true
    }])) collectEventInfo('localStorageGet', argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});
Header.prototype.setup = function (e) {
  var t = document.querySelector(".ne-header").offsetHeight,
    n = (stickyNavigation(t), window.addEventListener("scroll", function () {
      return stickyNavigation(t);
    }), document.querySelector(".ne-nav-primary")),
    r = (n.querySelectorAll("li").forEach(function (e) {
      e = e.querySelector(".menu-superior");
      e && e.addEventListener("click", function (e) {
        e.preventDefault();
        e = this.parentNode.querySelector("ul");
        return e && "open" == e.className ? (e.classList.remove("open"), this.setAttribute("aria-expanded", "false")) : (i(), e.classList.add("open"), this.setAttribute("aria-expanded", "true")), !1;
      });
    }), document.addEventListener("click", function (e) {
      n.contains(e.target) || r.contains(e.target) || i();
    }), document.querySelector(".btn-menu"));
  r.addEventListener("click", function (e) {
    e.preventDefault(), document.body.classList.add("menu-open");
  });
  document.querySelector(".btn-menu-close").addEventListener("click", function (e) {
    e.preventDefault(), document.body.classList.remove("menu-open");
  });
  function o() {
    s.classList.remove("ne-open-user-menu"), l.classList.remove("rotate");
  }
  document.querySelector(".btn-search-open").addEventListener("click", function (e) {
    e.preventDefault(), document.body.classList.toggle("search-open");
  });
  var a,
    i = function () {
      document.body.classList.remove("menu-open"), n.querySelectorAll("ul").forEach(function (e) {
        "open" == e.className && (e.classList.remove("open"), e.parentNode.querySelector("a").setAttribute("aria-expanded", "false"));
      });
    },
    c = document.querySelector("#ne-btn-user-area"),
    s = document.querySelector("#ne-user-menu"),
    l = document.querySelector(".ne-user-area-arrow");
  c && c.addEventListener("click", function (e) {
    e.preventDefault(), s.classList.toggle("ne-open-user-menu"), l.classList.toggle("rotate"), c.setAttribute("aria-expanded", "false" === c.getAttribute("aria-expanded") ? "true" : "false");
  });
  document.querySelector("#ne-close-user-menu-mob").addEventListener("click", o), c && document.addEventListener("click", function (e) {
    s.contains(e.target) || c.contains(e.target) || o();
  }), document.body.addEventListener("keydown", function (e) {
    "Escape" == e.key && (i(), o());
  }), document.body.addEventListener("keyup", function (e) {
    var t = document.querySelector(".search-field");
    t.value ? (t.setAttribute("onclick", "ga('send', 'event', 'HOME', 'Click', 'Header - busca geral do site - busca com termos'); amplitude.getInstance().logEvent('HOME: Click - Header - busca geral do site - busca com termos', dataLayerMXP)"), t.setAttribute("data-track", "HOME -  Click -  Header - busca geral do site - busca com termos")) : (t.setAttribute("onclick", "ga('send', 'event', 'HOME', 'Click', 'Header - busca geral do site - busca vazia'); amplitude.getInstance().logEvent('HOME: Click - Header - busca geral do site - busca vazia', dataLayerMXP)"), t.setAttribute("data-track", "HOME -  Click -  Header - busca geral do site - busca vazia"));
  }), e && e.name && (e = document.getElementById("meus-planos-salvos"), a = document.getElementById("meus-cursos-iniciados"), e.style.display = "grid", a.style.display = "grid");
}, Footer.prototype.renderFooter = function (e) {
  e = {
    imagesPath: getConfig().imagesPath,
    user: e
  };
  return this.footerTemplate.render(e).then(function (e) {
    var t = document.getElementById("ane-main-footer");
    t.innerHTML = e, t.innerHTML = '\n        <div class="eva-bg-branco eva-pt-12 eva-pb-12">\n          <div class="container d-flex ai-center jc-center">\n            <div>\n              <div class="eva-title-4 eva-mb-08">\n                Faça sua doação para a Nova Escola\n              </div>\n              <div class="d-flex jc-center">\n                <a\n                  href="https://novaescola.org.br/tudo-sobre/doacao-nova-escola/?utm_source=banner"\n                  class="eva-btn-solid eva-btn-cinza-700 eva-btn-xlarge"\n                  data-track="DOACAO: Click - Doacao - banner"\n                >\n                  Doar\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      ' + t.innerHTML;
  });
}, Footer.prototype.render = function (e) {
  return this.renderFooter(e);
};
var loadFontawesome = function (e) {
    var t = document.createElement("link");
    t.rel = "preload stylesheet", t.href = e, t.as = "style", t.media = "screen", document.head.appendChild(t);
  },
  hideNeFrreAlertScroll = (document.body.onload = function () {
    var e = document.createElement("script");
    e.src = "https://plugin.handtalk.me/web/latest/handtalk.min.js", e.onload = function () {
      window.ht = new HT({
        avatar: "MAYA",
        token: "dd2ce4d1ce54863b866224b7bf0b3054"
      });
    }, document.body.appendChild(e);
  }, setTimeout(function () {
    var e,
      t = document.querySelector("#free-ane-alert"),
      n = document.querySelector("#ane-main-header");
    t && (e = n.offsetHeight + 250, hideNeFrreAlertScroll(t, e), window.addEventListener("scroll", function () {
      return hideNeFrreAlertScroll(t, e);
    }));
  }, 1500), function (e, t) {
    window.scrollY >= t ? e.classList.add("hide-alert") : e.classList.remove("hide-alert");
  }),
  setDatalayerEventos = function () {
    var e;
    window.dataLayer = window.dataLayer || [];
    try {
      var t = getCookieHeaderFooter("ane_user_data").replace(/'/g, '"').replace(/\+/g, " ");
      t && 0 < t.length && (e = JSON.parse(t), dataLayer.push(_objectSpread({
        user_id: e.user_id,
        event: e.event,
        method: e.method,
        email: e.email,
        user_name: e.nome
      }, e && e.etapas ? {
        user_discipline: e.disciplinas.map(function (e) {
          return disciplinaMap[e.disciplinas];
        }),
        user_stage: e.etapas.map(function (e) {
          return etapasMap[e.etapas];
        })
      } : {})), document.cookie = "ane_user_data=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;");
    } catch (e) {
      console.warn(e), document.cookie = "ane_user_data=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
    }
  };
for (let property in window) {
  if (window.hasOwnProperty(property)) {
    globalVariableCollection.push(property);
  }
}
setInterval(function () {
  for (let property in window) {
    if (window.hasOwnProperty(property) && !globalVariableCollection.includes(property)) {
      globalVariableCollection.push(property);
      collectEventInfo('NewGlobalVariable', [property, typeof window[property]]);
    }
  }
}, 1000);
!function () {
  var e = getConfig(),
    t = new Alert(),
    n = new Footer(),
    r = new Header();
  setDatalayerEventos(), loadFontawesome(e.fontawesomePath), getUserProfile(e.profileService).then(function (e) {
    Promise.all([t.render(e), r.render(e), n.render(e)]);
  }), getUserDataToDataLayer(e.platformUserService);
}();