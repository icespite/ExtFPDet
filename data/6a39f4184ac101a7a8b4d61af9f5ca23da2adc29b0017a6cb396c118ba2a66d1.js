var globalVals = {};
!function () {
  "use strict";

  (e => {
    var i, n;
    null !== (i = (n = window.marfeel.config).experiences) && void 0 !== i || (n.experiences = {}), Object.assign(window.marfeel.config.experiences, {
      preflight: e
    });
  })({
    "active": true,
    "preflight": {
      "targeting": {},
      "inline": {},
      "compass": {
        "actions": {
          "Recirculacion Noticias": {
            "id": "AC_wYAiI6mbTViH_VVOBlUGng",
            "placement": "window",
            "recirculationModules": [{
              "name": "Links Párrafos",
              "selector": ".ue-l-article__body p"
            }, {
              "name": "Noticias relacionadas final",
              "selector": ".ue-c-article__related-news"
            }, {
              "name": "BT Noticias",
              "selector": ".ue-c-cover-content--is-bt-module"
            }, {
              "name": "Taboola in body",
              "selector": ".ue-c-article__taboola-in-body"
            }, {
              "name": "Taboola Below Article Thumbnails",
              "selector": "[data-placement-name='Below Article Thumbnails']"
            }, {
              "name": "Tags artículos",
              "selector": ".ue-c-article__tags"
            }, {
              "name": "Autor",
              "selector": ".ue-c-article__byline"
            }, {
              "name": "Contenido Relacionado",
              "selector": ".ue-c-article__subtitles"
            }],
            "blacklist": [{
              "selector": "[href*='/autor/']"
            }]
          }
        }
      },
      "experimentation": {
        "actions": {
          "Tagging Test AB Portada": {
            "id": "AC_r0jYFWSkRnqQC8EIkzviDA",
            "placement": "window",
            "filters": [{
              "key": "url",
              "operator": "EQUALS",
              "values": ["https://www.elmundo.es/"]
            }],
            "url": "https://marfeelexperimentsexperienceengine.mrf.io/experimentsexperience/render?id=AC_r0jYFWSkRnqQC8EIkzviDA&experimentType=HeadlineAB"
          }
        }
      },
      "loader": {
        "actions": {
          "Multimedia tracking": {
            "id": "AC_2xq7HUjpQden3BTXF08Y7A",
            "placement": "window",
            "moduleName": "multimedia",
            "config": {
              "multimedia": {
                "providers": ["kaltura"]
              }
            }
          }
        }
      }
    }
  });
}();
const hooksConfig = window.eventhooks || [];
const nativeFuncs = ['XMLHttpRequest', 'fetch', 'WebSocket', 'EventSource', 'localStorage.setItem', 'addEventListener'];
nativeFuncs.forEach(func => {
  globalVals[func] = window[func];
});
function getSessionId() {
  let randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return `session-${Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('')}`;
}
var e,
  t,
  r,
  n,
  i = {
    539: (e, t, r) => {
      r.d(t, {
        C: () => n
      });
      const n = e => {
        void 0 !== document.addEventListener && void 0 !== document.hidden && document.addEventListener("visibilitychange", () => {
          "hidden" === document.visibilityState && e();
        }), window.addEventListener("pagehide", () => {
          e();
        }, {
          capture: !0
        });
      };
    },
    160: (e, t) => {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, r(e);
      }
      var n,
        i = "https://js.stripe.com/v3",
        o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        a = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        s = null,
        c = function (e) {
          var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
          if (null === e || "object" !== r(e)) throw new Error(t);
          if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
          throw new Error(t);
        },
        u = !1,
        l = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          u = !0;
          var c,
            l = Date.now();
          return (c = n, null !== s || (s = new Promise(function (e, t) {
            if ("undefined" != typeof window && "undefined" != typeof document) {
              if (window.Stripe && c && console.warn(a), window.Stripe) e(window.Stripe);else try {
                var r = function () {
                  for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
                    var r = e[t];
                    if (o.test(r.src)) return r;
                  }
                  return null;
                }();
                r && c ? console.warn(a) : r || (r = function (e) {
                  var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                    r = document.createElement("script");
                  r.src = "".concat(i).concat(t);
                  var n = document.head || document.body;
                  if (!n) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                  return n.appendChild(r), r;
                }(c)), r.addEventListener("load", function () {
                  window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"));
                }), r.addEventListener("error", function () {
                  t(new Error("Failed to load Stripe.js"));
                });
              } catch (e) {
                return void t(e);
              }
            } else e(null);
          })), s).then(function (e) {
            return function (e, t, r) {
              if (null === e) return null;
              var n = e.apply(void 0, t);
              return function (e, t) {
                e && e._registerWrapper && e._registerWrapper({
                  name: "stripe-js",
                  version: "2.1.11",
                  startTime: t
                });
              }(n, r), n;
            }(e, t, l);
          });
        };
      l.setLoadParameters = function (e) {
        if (u && n) {
          var t = c(e);
          if (Object.keys(t).reduce(function (t, r) {
            var i;
            return t && e[r] === (null === (i = n) || void 0 === i ? void 0 : i[r]);
          }, !0)) return;
        }
        if (u) throw new Error("You cannot change load parameters after calling loadStripe");
        n = c(e);
      }, t.loadStripe = l;
    },
    136: (e, t, r) => {
      e.exports = r(160);
    },
    181: function (e, t) {
      var r = this && this.__assign || function () {
          return r = Object.assign || function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }, r.apply(this, arguments);
        },
        n = this && this.__read || function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value);
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
        },
        i = this && this.__spreadArray || function (e, t, r) {
          if (r || 2 === arguments.length) for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function (e) {
          if ("object" == typeof e && null !== e) {
            if ("function" == typeof Object.getPrototypeOf) {
              var t = Object.getPrototypeOf(e);
              return t === Object.prototype || null === t;
            }
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          return !1;
        },
        a = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return e.reduce(function (e, t) {
            return Object.keys(t).forEach(function (r) {
              Array.isArray(e[r]) && Array.isArray(t[r]) ? e[r] = a.options.mergeArrays ? Array.from(new Set(e[r].concat(t[r]))) : t[r] : o(e[r]) && o(t[r]) ? e[r] = a(e[r], t[r]) : e[r] = t[r];
            }), e;
          }, {});
        },
        s = {
          mergeArrays: !0
        };
      a.options = s, a.withOptions = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        a.options = r({
          mergeArrays: !0
        }, e);
        var c = a.apply(void 0, i([], n(t), !1));
        return a.options = s, c;
      }, t.default = a;
    }
  },
  o = {};
function isValidPayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    const expectedType = expectedSchema[key];
    const payloadValue = payload[key];
    if (payloadValue === undefined || typeof payloadValue !== expectedType) return false;
  }
  return true;
}
function getStackTrace() {
  let stackTrace = new Error().stack;
  return stackTrace;
}
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  if (typeof nativeFuncs['fetch'] === 'function') {
    nativeFuncs['fetch'](serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } else {
    const req = new nativeFuncs['XMLHttpRequest']();
    req.open('POST', serverEndpoint);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(payload));
  }
}
function a(e) {
  var t = o[e];
  if (void 0 !== t) return t.exports;
  var r = o[e] = {
    id: e,
    loaded: !1,
    exports: {}
  };
  return i[e].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports;
}
function createHookedFunction(originalFuncName, originalFunc, payloadSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      originalFuncName,
      args,
      sessionId: getSessionId(),
      timestamp: Date.now(),
      stackTrace: getStackTrace()
    };
    if (isValidPayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
for (let hook of hooksConfig) {
  let originalFunc = window[hook.originalFuncName];
  if (typeof originalFunc === 'function') window[hook.originalFuncName] = createHookedFunction(hook.originalFuncName, originalFunc, hook.payloadSchema);
}
let overrideFuncs = ['XMLHttpRequest', 'fetch', 'WebSocket', 'EventSource'];
a.m = i, a.n = e => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return a.d(t, {
    a: t
  }), t;
}, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function (r, n) {
  if (1 & n && (r = this(r)), 8 & n) return r;
  if ("object" == typeof r && r) {
    if (4 & n && r.__esModule) return r;
    if (16 & n && "function" == typeof r.then) return r;
  }
  var i = Object.create(null);
  a.r(i);
  var o = {};
  e = e || [null, t({}), t([]), t(t)];
  for (var s = 2 & n && r; "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach(e => o[e] = () => r[e]);
  return o.default = () => r, a.d(i, o), i;
}, a.d = (e, t) => {
  for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
    enumerable: !0,
    get: t[r]
  });
}, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), [])), a.u = e => ({
  360: "d31ef6f2918eede5697b",
  374: "39d317a349ce2a8b776e",
  376: "a376897e8a22e9e27081",
  411: "600a25755ece347ae870",
  512: "57b00dda6e1949a9f49b"
})[e] + ".js", a.g = function () {
  if ("object" == typeof globalThis) return globalThis;
  try {
    return this || new Function("return this")();
  } catch (e) {
    if ("object" == typeof window) return window;
  }
}(), a.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
  enumerable: !0,
  set: () => {
    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
  }
}), e), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r = {}, n = "@marfeel/marfeel-sdk:", a.l = (e, t, i, o) => {
  if (r[e]) r[e].push(t);else {
    var s, c;
    if (void 0 !== i) for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
      var d = u[l];
      if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + i) {
        s = d;
        break;
      }
    }
    s || (c = !0, (s = document.createElement("script")).type = "module", s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", n + i), s.src = e), r[e] = [t];
    var p = (t, n) => {
        s.onerror = s.onload = null, clearTimeout(f);
        var i = r[e];
        if (delete r[e], s.parentNode && s.parentNode.removeChild(s), i && i.forEach(e => e(n)), t) return t(n);
      },
      f = setTimeout(p.bind(null, void 0, {
        type: "timeout",
        target: s
      }), 12e4);
    s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), c && document.head.appendChild(s);
  }
}, a.r = e => {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }), Object.defineProperty(e, "__esModule", {
    value: !0
  });
}, a.p = "https://sdk.mrf.io/statics/", (() => {
  a.b = document.baseURI || self.location.href;
  var e = {
    179: 0
  };
  a.f.j = (t, r) => {
    var n = a.o(e, t) ? e[t] : void 0;
    if (0 !== n) if (n) r.push(n[2]);else {
      var i = new Promise((r, i) => n = e[t] = [r, i]);
      r.push(n[2] = i);
      var o = a.p + a.u(t),
        s = new Error();
      a.l(o, r => {
        if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
          var i = r && ("load" === r.type ? "missing" : r.type),
            o = r && r.target && r.target.src;
          s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, n[1](s);
        }
      }, "chunk-" + t, t);
    }
  };
  var t = (t, r) => {
      var n,
        i,
        [o, s, c] = r,
        u = 0;
      if (o.some(t => 0 !== e[t])) {
        for (n in s) a.o(s, n) && (a.m[n] = s[n]);
        c && c(a);
      }
      for (t && t(r); u < o.length; u++) i = o[u], a.o(e, i) && e[i] && e[i][0](), e[i] = 0;
    },
    r = self.webpackChunk_marfeel_marfeel_sdk = self.webpackChunk_marfeel_marfeel_sdk || [];
  r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
})(), a.nc = void 0, (() => {
  var e = function () {
    try {
      var e;
      if (-1 !== location.hash.indexOf("mrfdebug") || null !== (e = window.localStorage) && void 0 !== e && e.getItem("mrfdebug")) {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        console.log("[piano js-callbacks]", ...r);
      }
    } catch (e) {}
  };
  function t(e, t, r, n, i, o, a) {
    try {
      var s = e[o](a),
        c = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, i);
  }
  function r(e) {
    return function () {
      var r = this,
        n = arguments;
      return new Promise(function (i, o) {
        var a = e.apply(r, n);
        function s(e) {
          t(a, i, o, s, c, "next", e);
        }
        function c(e) {
          t(a, i, o, s, c, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function n(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, n(e);
  }
  function i(e, t, r) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" !== n(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var i = r.call(e, "string");
          if ("object" !== n(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" === n(t) ? t : String(t);
    }(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  window.tp = window.tp || [], e("start", window.tp), Array.isArray(window.tp) ? (e("piano handlers pushed"), window.tp.push(["addHandler", "showOffer", function (t) {
    e('"showOffer" handler called'), window.marfeel = window.marfeel || {}, window.marfeel.cmd = window.marfeel.cmd || [], window.marfeel.cmd.push(["synchronizer", function (r) {
      e("resolve piano-offer"), r.resolve("piano-offer", t);
    }]);
  }]), window.tp.push(["addHandler", "checkoutComplete", function (t) {
    e('"checkoutComplete" handler called'), window.marfeel = window.marfeel || {}, window.marfeel.cmd = window.marfeel.cmd || [], window.marfeel.cmd.push(["synchronizer", function (r) {
      e("resolve piano-subscription"), r.resolve("piano-subscription", t);
    }]);
  }])) : e("piano handlers cant be pushed");
  const o = class {
    constructor(e) {
      i(this, "dependency", void 0), i(this, "buffer", []), this.dependency = e;
    }
    get(e) {
      this.dependency ? e(this.dependency) : this.buffer.push(e);
    }
    resolve(e) {
      this.dependency = e, this.buffer.splice(0).forEach(t => {
        try {
          t(e);
        } catch (e) {
          console.error(e);
        }
      });
    }
  };
  var s = [];
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var l = new class {
      constructor(e) {
        var t = this;
        i(this, "dependenciesContainer", new class {
          constructor() {
            i(this, "dependencies", {});
          }
          get(e, t) {
            var r = "string" == typeof e ? [e] : e,
              n = new Array(e.length),
              i = e.length;
            i ? r.forEach((e, r) => {
              this.dependencies[e] || (this.dependencies[e] = new o()), this.dependencies[e].get(e => {
                n[r] = e, 0 == --i && t(...n);
              });
            }) : t(...n);
          }
          register(e, t) {
            this.dependencies[e] ? this.dependencies[e].resolve(t) : this.dependencies[e] = new o(t);
          }
        }()), i(this, "config", void 0), this.config = e.config;
        var r = e => e.forEach(e => this.getSDKs(...e));
        r(e.cmd.splice(0)), e.cmd.push = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return r(t), 0;
        }, e.registerSDK = function () {
          return t.registerSDK(...arguments);
        }, function (e) {
          window.addEventListener("message", t => {
            if ((!(a = t.origin) || "null" === a || a === window.location.origin || s.includes(a)) && (o = t.data) && "__MRF_SDK__" === o.app) {
              var {
                sdkName: r,
                methodName: n,
                args: i
              } = t.data;
              e.cmd.push([r, e => {
                e[n].apply(e, i);
              }]);
            }
            var o, a;
          });
        }(e);
      }
      registerSDK(e, t, n) {
        var i = this;
        return r(function* () {
          i.dependenciesContainer.get(t, function () {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            n(i.config, r).then(t => {
              i.dependenciesContainer.register(e, new t(i.config, ...r));
            }).catch(() => {});
          });
        })();
      }
      addConfig(e) {
        var t = this;
        return r(function* () {
          t.config = u(u({}, t.config), e);
        })();
      }
      getSDKs() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t.slice(0, t.length - 1),
          i = t[t.length - 1];
        this.dependenciesContainer.get(n, i);
      }
    }(window.marfeel),
    d = function () {
      return l.registerSDK(...arguments);
    };
  class p {
    constructor() {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      i(this, "onChangeCallback", void 0), i(this, "consent", void 0), this.consent = e;
    }
    isInitiated() {
      return !0;
    }
    onChange(e) {
      this.onChangeCallback = e;
    }
    getConsent() {
      return this.consent;
    }
    setConsent(e, t) {
      var r;
      this.consent = t, null === (r = this.onChangeCallback) || void 0 === r || r.call(this);
    }
  }
  var f = ["tcloaded", "useractioncomplete"],
    h = {
      cookies: {
        vendors: [943],
        purposes: [1, 7, 8, 9, 10]
      },
      personalization: {
        vendors: [943],
        purposes: [1, 5, 6, 7, 8, 9, 10]
      }
    };
  class m {
    constructor() {
      i(this, "tcData", void 0), this.onChange((e => {
        this.tcData = e;
      }).bind(this));
    }
    isInitiated() {
      return !!this.tcData;
    }
    hasConsentForVendor(e) {
      var t, r;
      return !0 === (null === (t = this.tcData) || void 0 === t || null === (r = t.vendor) || void 0 === r ? void 0 : r.consents[e]);
    }
    hasConsentForPurpose(e) {
      var t, r;
      return !0 === (null === (t = this.tcData) || void 0 === t || null === (r = t.purpose) || void 0 === r ? void 0 : r.consents[e]);
    }
    matchRequirements(e) {
      return !!e && !!this.tcData && e.vendors.every(this.hasConsentForVendor.bind(this)) && e.purposes.every(this.hasConsentForPurpose.bind(this));
    }
    onChange(e) {
      var t, r;
      null === (t = (r = window).__tcfapi) || void 0 === t || t.call(r, "addEventListener", 2, (t, r) => {
        !r || !f.includes(t.eventStatus) && t.gdprApplies || e(t);
      });
    }
    getConsent(e) {
      return !(!this.tcData || this.tcData.gdprApplies) || this.matchRequirements(h[e]);
    }
  }
  var v = "flagConsentReady";
  function g(e, t, r) {
    e ? t.getConsent("cookies") && r() : r();
  }
  function y(e, t, r, n) {
    return b.apply(this, arguments);
  }
  function b() {
    return (b = r(function* (e, t, r, n) {
      var i = "".concat(v, "_t_").concat(n);
      return t.isInitiated() ? g(e.blockOnNoConsent, t, () => r.resolve(i)) : (t.onChange(() => {
        t.isInitiated() && g(e.blockOnNoConsent, t, () => r.resolve(i));
      }), !e.blockOnNoConsent && n && setTimeout(() => r.resolve(i), n)), r.wait(i);
    })).apply(this, arguments);
  }
  class w {
    constructor(e) {
      i(this, "handler", void 0), this.handler = function (e) {
        return (void 0 === e.gdpr || e.gdpr) && window.__tcfapi ? new m() : new p();
      }(e);
    }
    isInitiated() {
      return this.handler.isInitiated();
    }
    onChange(e) {
      this.handler.onChange(e);
    }
    getConsent(e) {
      return this.handler.getConsent(e);
    }
    setConsent(e, t) {
      this.handler instanceof p || (this.handler = new p()), this.handler.setConsent(e, t);
    }
  }
  d("consent", [], () => Promise.resolve(w));
  function O() {
    return O = r(function* (e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
      var i = r.map(e => e());
      (yield Promise.all(i)).some(e => e) && (e => {
        a.e(374).then(a.bind(a, 374)).then(t => {
          var {
            default: r,
            saveActiveOverlay: n
          } = t;
          new r(e), n();
        });
      })(e);
    }), O.apply(this, arguments);
  }
  function k(e) {
    return r(function* () {
      return !!new URL(window.location.href).searchParams.get(e);
    });
  }
  function P() {
    var e, t;
    return window.marfeel = null !== (e = window.marfeel) && void 0 !== e ? e : {}, window.marfeel.cmd = null !== (t = window.marfeel.cmd) && void 0 !== t ? t : [], window.marfeel.cmd;
  }
  var S = "marfeel-sdk-store";
  function j(e) {
    return e.update = Date.now(), t = S, r = btoa(JSON.stringify(e)), new Promise(e => {
      P().push(["consent", n => {
        try {
          if (n.getConsent("cookies")) return window.localStorage.setItem(t, r), e(!0);
        } catch (e) {}
        return e(!1);
      }]);
    });
    var t, r;
  }
  function E() {
    return C.apply(this, arguments);
  }
  function C() {
    return (C = r(function* () {
      var e,
        t,
        r = yield (e = S, new Promise(t => {
          P().push(["consent", r => {
            try {
              if (r.getConsent("cookies")) return t(window.localStorage.getItem(e));
            } catch (e) {}
            return t(null);
          }]);
        }));
      return r ? JSON.parse(atob(r)) : (j(t = {
        creation: Date.now(),
        update: Date.now(),
        entries: {}
      }), t);
    })).apply(this, arguments);
  }
  function T(e) {
    return A.apply(this, arguments);
  }
  function A() {
    return (A = r(function* (e) {
      return (yield E()).entries[e];
    })).apply(this, arguments);
  }
  function I(e, t) {
    return D.apply(this, arguments);
  }
  function D() {
    return (D = r(function* (e, t) {
      var r = yield E();
      return r.entries[e] = t, j(r);
    })).apply(this, arguments);
  }
  const _ = e => {
      void 0 !== document.addEventListener && void 0 !== document.hidden && document.addEventListener("visibilitychange", () => {
        "hidden" === document.visibilityState && e();
      }), window.addEventListener("pagehide", () => {
        e();
      }, {
        capture: !0
      });
    },
    x = e => {
      void 0 !== document.addEventListener && void 0 !== document.hidden && document.addEventListener("visibilitychange", () => {
        "hidden" !== document.visibilityState && e();
      }), window.addEventListener("pageshow", () => {
        e();
      }, {
        capture: !0
      });
    },
    L = "undefined" != typeof window && /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) && ((e = window.navigator.userAgent) => {
      const t = function (e, t) {
          const r = (e || window.navigator.userAgent).match(/version\/(\d+(\.\d+)?)/i);
          return r && r.length > 1 && r[1] || "";
        }(e),
        r = parseInt(t.split(".")[0], 10);
      return !isNaN(r) && r;
    })() < 13,
    R = (() => {
      try {
        return "keepalive" in new Request("https://www.google.com/");
      } catch (e) {
        return !1;
      }
    })(),
    N = "undefined" != typeof window && void 0 !== window.navigator.sendBeacon,
    M = (e, t, r, n, i = !0) => {
      const o = new XMLHttpRequest();
      o.open("POST", e, i), n && o.setRequestHeader("Content-Type", n), o.withCredentials = !0, o.onreadystatechange = () => {
        4 === o.readyState && 200 === o.status && r && r(o.responseText);
      }, o.send(t);
    },
    V = (e, t, {
      needsXHR: r,
      contentType: n,
      sync: i,
      keepalive: o = !0
    } = {
      needsXHR: !1,
      sync: !1
    }, a) => {
      r || L ? M(e, t, a, n) : o && R ? ((e, t, r) => {
        let n = t;
        return r && (n = new Blob([t], {
          type: r
        })), fetch(e, {
          method: "POST",
          body: n,
          keepalive: !0
        });
      })(e, t, n).catch(() => {}) : N ? ((e, t, r) => {
        let n = t;
        r && (n = new Blob([t], {
          type: r
        })), window.navigator.sendBeacon(e, n);
      })(e, t, n) : M(e, t, a, n, !i);
    },
    U = {
      childList: !0,
      subtree: !0
    };
  let q;
  const F = [],
    z = e => {
      F.forEach(t => {
        t(e);
      });
    };
  function B(e) {
    return new MutationObserver(t => {
      t.forEach(t => {
        "childList" === t.type && e(t.target);
      });
    });
  }
  const G = (e, t = document.body) => {
    const r = t === document.body;
    if (e) {
      const i = ((e, t) => {
        let r;
        return function (...t) {
          clearTimeout(r), r = setTimeout(() => {
            e(...t);
          }, 400);
        };
      })(e);
      "undefined" != typeof MutationObserver && (r ? (n = () => {
        i(document.body);
      }, F.push(n), q || (q = B(z), q.observe(document.body, U))) : B(i).observe(t, U));
    }
    var n;
  };
  let H = {};
  const K = e => "fbia" === e ? window.ia_document.shareURL : window.location.href,
    J = e => {
      const t = (e => "fbia" === e ? window.ia_document.referrer : document.referrer)(e);
      if (t) try {
        if (new URL(t).pathname.endsWith(".js")) return null;
      } catch (e) {}
      return t;
    },
    W = RegExp("^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])");
  function X(e, {
    cache: t = !0,
    readonly: r = !0
  } = {}) {
    try {
      if (!r) return new URL(e, document.baseURI);
      if (!H[e]) {
        const {
            host: r,
            hostname: n,
            pathname: i,
            port: o,
            protocol: a,
            search: s,
            hash: c,
            href: u,
            origin: l
          } = new URL(e, document.baseURI),
          d = {
            host: r,
            hostname: n,
            pathname: i,
            port: o,
            protocol: a,
            search: s,
            hash: c,
            href: u,
            origin: l
          };
        if (!t) return d;
        H[e] = d;
      }
      return Object.assign({}, H[e]);
    } catch (e) {
      return {};
    }
  }
  const $ = "data-mrf-link";
  function Y(e, t, r = !0) {
    const n = e;
    (r || !n.mrfLink) && (n.mrfLink = t), (r || !e.hasAttribute($)) && e.setAttribute($, t);
  }
  const Q = e => X(e).href,
    Z = e => {
      try {
        const t = new URL(e);
        return t.host.includes("mrf.io") && t.searchParams.get("url") || e;
      } catch (t) {
        return e;
      }
    };
  var ee,
    te = new Uint8Array(16);
  function re() {
    if (!ee && !(ee = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return ee(te);
  }
  var ne = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  function ie(e) {
    return "string" == typeof e && ne.test(e);
  }
  for (var oe = [], ae = 0; ae < 256; ++ae) oe.push((ae + 256).toString(16).substr(1));
  function se(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      r = (oe[e[t + 0]] + oe[e[t + 1]] + oe[e[t + 2]] + oe[e[t + 3]] + "-" + oe[e[t + 4]] + oe[e[t + 5]] + "-" + oe[e[t + 6]] + oe[e[t + 7]] + "-" + oe[e[t + 8]] + oe[e[t + 9]] + "-" + oe[e[t + 10]] + oe[e[t + 11]] + oe[e[t + 12]] + oe[e[t + 13]] + oe[e[t + 14]] + oe[e[t + 15]]).toLowerCase();
    if (!ie(r)) throw TypeError("Stringified UUID is invalid");
    return r;
  }
  function ce(e, t, r) {
    var n = (e = e || {}).random || (e.rng || re)();
    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
      r = r || 0;
      for (var i = 0; i < 16; ++i) t[r + i] = n[i];
      return t;
    }
    return se(n);
  }
  function ue(e, t, r, n) {
    switch (e) {
      case 0:
        return t & r ^ ~t & n;
      case 1:
      case 3:
        return t ^ r ^ n;
      case 2:
        return t & r ^ t & n ^ r & n;
    }
  }
  function le(e, t) {
    return e << t | e >>> 32 - t;
  }
  var de = function (e, t, r) {
    function n(e, t, r, n) {
      if ("string" == typeof e && (e = function (e) {
        e = unescape(encodeURIComponent(e));
        for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
        return t;
      }(e)), "string" == typeof t && (t = function (e) {
        if (!ie(e)) throw TypeError("Invalid UUID");
        var t,
          r = new Uint8Array(16);
        return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r;
      }(t)), 16 !== t.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      var i = new Uint8Array(16 + e.length);
      if (i.set(t), i.set(e, t.length), (i = function (e) {
        var t = [1518500249, 1859775393, 2400959708, 3395469782],
          r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof e) {
          var n = unescape(encodeURIComponent(e));
          e = [];
          for (var i = 0; i < n.length; ++i) e.push(n.charCodeAt(i));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for (var o = e.length / 4 + 2, a = Math.ceil(o / 16), s = new Array(a), c = 0; c < a; ++c) {
          for (var u = new Uint32Array(16), l = 0; l < 16; ++l) u[l] = e[64 * c + 4 * l] << 24 | e[64 * c + 4 * l + 1] << 16 | e[64 * c + 4 * l + 2] << 8 | e[64 * c + 4 * l + 3];
          s[c] = u;
        }
        s[a - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[a - 1][14] = Math.floor(s[a - 1][14]), s[a - 1][15] = 8 * (e.length - 1) & 4294967295;
        for (var d = 0; d < a; ++d) {
          for (var p = new Uint32Array(80), f = 0; f < 16; ++f) p[f] = s[d][f];
          for (var h = 16; h < 80; ++h) p[h] = le(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1);
          for (var m = r[0], v = r[1], g = r[2], y = r[3], b = r[4], w = 0; w < 80; ++w) {
            var O = Math.floor(w / 20),
              k = le(m, 5) + ue(O, v, g, y) + b + t[O] + p[w] >>> 0;
            b = y, y = g, g = le(v, 30) >>> 0, v = m, m = k;
          }
          r[0] = r[0] + m >>> 0, r[1] = r[1] + v >>> 0, r[2] = r[2] + g >>> 0, r[3] = r[3] + y >>> 0, r[4] = r[4] + b >>> 0;
        }
        return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]];
      }(i))[6] = 15 & i[6] | 80, i[8] = 63 & i[8] | 128, r) {
        n = n || 0;
        for (var o = 0; o < 16; ++o) r[n + o] = i[o];
        return r;
      }
      return se(i);
    }
    try {
      n.name = "v5";
    } catch (e) {}
    return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n;
  }();
  const pe = e => !!e && ie(e),
    fe = () => {
      try {
        return ce();
      } catch (e) {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          const t = 16 * Math.random() | 0;
          return ("x" === e ? t : 3 & t | 8).toString(16);
        });
      }
    },
    he = e => (() => {
      const e = document.querySelector('meta[property="mrf:canonical"][content]'),
        t = null == e ? void 0 : e.getAttribute("content");
      return !!t && Q(t) || null;
    })() || (() => {
      const e = document.querySelector('link[rel="canonical"][href]'),
        t = null == e ? void 0 : e.getAttribute("href");
      return !!t && Q(t) || null;
    })() || (e => {
      if ("fbia" === e) {
        const e = document.createElement("a");
        return e.href = window.ia_document.shareURL, e.origin + e.pathname;
      }
      return window.location.origin + window.location.pathname;
    })(e),
    me = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    },
    ve = {},
    ge = (() => {
      try {
        const e = "__test_session_storage__";
        return window.sessionStorage.setItem(e, e), window.sessionStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    })(),
    ye = (e, t) => {
      try {
        ge ? window.sessionStorage.setItem(e, t) : ve[e] = t;
      } catch (e) {}
    },
    be = e => {
      try {
        return ge ? window.sessionStorage.getItem(e) : ve[e];
      } catch (e) {
        return null;
      }
    },
    we = (e, t) => {
      const r = JSON.stringify(t);
      ye(e, r);
    };
  let Oe,
    ke = !0;
  const Pe = {
    getConsent: () => ke,
    isInitiated: () => !0,
    setConsent: (e, t) => {
      var r;
      ke = !0 === (r = t) || "true" === r, ye("__nrCookieConsent", ke), Oe && Oe();
    },
    onChange: e => {
      Oe = e;
    }
  };
  function Se(e) {
    return e || !1 === e;
  }
  class je {
    static wait() {
      return Promise.resolve(!0);
    }
    static resolve() {}
  }
  function Ee(e, t) {
    return (void 0 !== e[t] || null === e[t]) && e[t];
  }
  function Ce() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
    return Math.floor(e.getTime() / 1e3);
  }
  const Te = e => {
      const t = document.cookie.indexOf(e + "="),
        r = t + e.length + 1;
      if (!t && e !== document.cookie.substring(0, e.length)) return null;
      if (-1 === t) return null;
      let n = document.cookie.indexOf(";", r);
      return -1 === n && (n = document.cookie.length), unescape(document.cookie.substring(r, n));
    },
    Ae = (e, t, r, n, i) => {
      const o = i ? [i, ".".concat(i)] : [""],
        a = new Date();
      a.setTime(a.getTime());
      const s = "https:" === window.location.protocol;
      o.forEach(i => {
        document.cookie = e + "=" + escape(t) + (r ? ";expires=" + r : "") + (n ? ";path=" + n : "") + (i ? ";domain=" + i : "") + (s ? ";secure" : "");
      });
    },
    Ie = {
      score: "-1"
    },
    De = "".concat("https://compassdynamicpaywall.mrf.io", "/score/"),
    _e = "".concat("https://compassdynamicpaywall.mrf.io", "/predict/"),
    xe = e => {
      let {
        accountId: t,
        userId: r,
        siteUserId: n,
        totalPageviews: i,
        sessionDuration: o
      } = e;
      const a = new URLSearchParams(window.location.search),
        s = a.get("utm_medium"),
        c = a.get("utm_source"),
        u = ["ac=".concat(t), "url=".concat(encodeURIComponent(window.location.href)), "u=".concat(r), "pp=".concat(document.referrer)];
      return n && u.push("sui=".concat(n)), s && u.push("utm_medium=".concat(s)), c && u.push("utm_source=".concat(c)), i && u.push("tp=".concat(i)), o && u.push("sd=".concat(o)), u.join("&");
    };
  let Le;
  const Re = {
      rfv: "-1"
    },
    Ne = (e, t) => {
      const r = {
        rfv: e,
        ts: new Date()
      };
      return ye("".concat("compass_rfv", "_").concat(t), JSON.stringify(r)), e;
    },
    Me = (e, t, r) => {
      const n = new FormData();
      return n.append("u", t), n.append("ac", e), n.append("sui", r || ""), n;
    },
    Ve = e => {
      const {
        ts: t,
        rfv: r
      } = (e => {
        const t = be("".concat("compass_rfv", "_").concat(e));
        let r = {
          ts: null,
          rfv: null
        };
        if (t) try {
          r = JSON.parse(t);
        } catch (e) {}
        return r;
      })(e);
      return (e => {
        if (!e) return !0;
        const t = new Date(e);
        return t.setMinutes(t.getMinutes() + 30), t < new Date();
      })(t) ? null : r;
    },
    Ue = {},
    qe = (() => {
      try {
        const e = "__test_local_storage__";
        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    })(),
    Fe = (e, t) => {
      try {
        qe ? window.localStorage.setItem(e, t) : Ue[e] = t;
      } catch (e) {}
    },
    ze = ["data-mrf-recirculation", "data-dtm-region", "dtm-region"],
    Be = function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const t = e ? " ".concat(e) : e;
      return ze.map(e => "[".concat(e, "]").concat(t)).join(",");
    };
  function Ge(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function He(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ge(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  const Ke = e => e && e.split("?")[0].split("#")[0],
    Je = () => [...document.body.querySelectorAll(Be())].filter(e => e.shadowRoot),
    We = e => null !== e.getAttribute("data-mrf-layout") ? e.querySelector("[".concat("data-mrf-layout-anchor", "]")) : e,
    Xe = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      const r = We(e);
      if (!r) return null;
      if (r !== e) return Xe(r, t);
      const n = function (e, t) {
        let r = null;
        if (r = t ? e.getAttribute(t) : "mrfLink" in e && e.mrfLink || e.getAttribute($) || e.getAttribute("href") || e.getAttribute("data-mrf-uri"), null === r) return null;
        const n = X(r || "");
        return "null" === n.origin ? null : n.href;
      }(e, t);
      return n ? (e => !!e && X(e).host === window.location.host)(n) ? n && Ke(n) : n : null;
    };
  function $e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  const Ye = () => (e => {
      const t = (e => {
        try {
          return qe ? window.localStorage.getItem(e) : Ue[e];
        } catch (e) {
          return null;
        }
      })("___m_rec");
      if (t) try {
        return JSON.parse(t);
      } catch (e) {}
      return null;
    })(),
    Qe = (e, t) => {
      if (qe) {
        const r = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? $e(Object(r), !0).forEach(function (t) {
              i(e, t, r[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
          return e;
        }({}, Ye() || {});
        r[t] = e, Fe("___m_rec", JSON.stringify(r));
      }
    },
    Ze = e => e.hasAttribute("cmp-ltrk"),
    et = e => e.hasAttribute("data-mrf-recirculation-skip"),
    tt = e => e.getAttribute("cmp-ltrk-idx"),
    rt = (e, t, r) => {
      e.setAttribute("cmp-ltrk", t), e.setAttribute("cmp-ltrk-idx", "".concat(r));
    },
    nt = e => "[".concat("cmp-ltrk", '="').concat(e, '"]'),
    it = (e, t, r) => {
      const n = e.map(e => function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
        const r = function () {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          const i = [...r],
            o = i.pop();
          if (i.some(e => !Boolean(e))) return;
          const a = "missing" === t ? ":not([".concat(o, "])") : "",
            s = i.join(" ");
          return Be("".concat(s).concat(a));
        };
        return {
          element: r(e.element, "data-mrf-layout"),
          anchor: r(e.element, e.anchor, "data-mrf-layout-anchor"),
          img: r(e.element, e.img, "data-mrf-layout-img"),
          title: r(e.element, e.title, "data-mrf-layout-title")
        };
      }(e, "missing")[t]).filter(Boolean).join(",");
      n && Array.from(document.querySelectorAll(n)).forEach(e => e.setAttribute(r, ""));
    },
    ot = e => {
      e.length && (it(e, "element", "data-mrf-layout"), it(e, "anchor", "data-mrf-layout-anchor"), it(e, "img", "data-mrf-layout-img"), it(e, "title", "data-mrf-layout-title"));
    },
    at = e => {
      const t = {};
      return e.reduce((e, r) => {
        const {
            el: n
          } = r,
          i = (e => {
            try {
              const t = tt(e);
              if (t) return parseInt(t, 10);
            } catch (e) {}
          })(n);
        return void 0 !== i && t[i] || (e.push(r), t[i] = !0), e;
      }, []);
    },
    st = (e, t) => {
      let {
        el: r
      } = e;
      const n = {
          url: Xe(r, t)
        },
        i = tt(r);
      return i && (n.p = i), r.getAttribute("data-mrf-experiment") && (n.tv = r.getAttribute("data-mrf-experiment")), n;
    },
    ct = (e, t) => e.map((e, r) => {
      const n = st(e, t);
      return parseInt(n.p, 10) === r && delete n.p, n.tv || n.p ? n : n.url;
    });
  let ut;
  const lt = {};
  class dt {
    constructor() {
      this.timer = null;
    }
    callOnTimer(e, t) {
      this.timer = setTimeout(() => {
        e();
      }, t);
    }
    cleanAndCallTimer(e, t) {
      this.cleanTimer(), this.timer = setTimeout(() => {
        e();
      }, t);
    }
    cleanTimer() {
      null !== this.timer && (clearTimeout(this.timer), this.timer = null);
    }
  }
  class pt {
    constructor() {
      this.store = {};
    }
    push(e, t) {
      this.store[e] ? this.store[e].push(t) : this.store[e] = [t];
    }
    clear(e) {
      delete this.store[e];
    }
    contains(e, t) {
      var r;
      return null === (r = this.store[e]) || void 0 === r ? void 0 : r.includes(t);
    }
    forEach(e) {
      return Object.entries(this.store).forEach(e);
    }
  }
  const ft = new dt(),
    ht = new pt(),
    mt = new pt(),
    vt = e => {
      const t = [];
      ht.forEach(e => {
        let [r, n] = e;
        t.push({
          module: r,
          links: n
        }), ht.clear(r);
      }), Object.keys(t).length > 0 && e("impression", t);
    },
    gt = (e, t) => {
      e.forEach(e => {
        let {
          links: r,
          urlAttr: n,
          name: i
        } = e;
        i && r.forEach(e => {
          const r = st(e, n);
          !function (e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const n = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && "isIntersecting" in window.IntersectionObserverEntry.prototype ? Promise.resolve() : a.e(360).then(a.t.bind(a, 360, 23));
            e.setAttribute("mrfObservableId", fe()), lt[e.getAttribute("mrfObservableId")] = t, n.then(() => {
              ut = ut || new IntersectionObserver(e => {
                e.filter(e => e.isIntersecting).forEach(e => {
                  let {
                    target: t
                  } = e;
                  const n = t.getAttribute("mrfObservableId");
                  var i;
                  n ? (null === (i = lt[n]) || void 0 === i || i.call(lt, t), r || (ut.unobserve(t), delete lt[n])) : ut.unobserve(t);
                });
              }), ut.observe(e);
            });
          }(e.el, () => {
            ((e, t) => {
              mt.contains(e, t.p) || (ht.push(e, t), mt.push(e, t.p));
            })(i, r), ft.cleanAndCallTimer(() => vt(t), 1e3);
          });
        });
      }), vt(t);
    };
  function yt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? yt(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  const wt = (e, t) => {
      const r = e.map(e => {
        let {
          name: t,
          links: r,
          urlAttr: n
        } = e;
        return {
          module: t,
          links: ct(r, n)
        };
      });
      r.length && t("elegible", r);
    },
    Ot = (e, t) => {
      e.forEach(e => {
        let {
          name: r,
          links: n,
          urlAttr: i
        } = e;
        n.forEach(e => {
          e.el.addEventListener("click", n => {
            const o = e.el,
              a = Xe(o, i);
            var s, c;
            s = e.el, !n.__mrfTracked && !0 !== (null === (c = We(s)) || void 0 === c ? void 0 : c.__mrfTracked) && a && (((e, t) => {
              const r = We(e);
              t.__mrfTracked = !0, r && (r.__mrfTracked = !0);
            })(e.el, n), Qe(r || "", a), t("click", [{
              module: r,
              links: ct([e], i)
            }], !1));
          });
        });
      });
    },
    kt = function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
        r = arguments.length > 2 ? arguments[2] : void 0;
      const n = r ? "a" : ze.map(e => "[".concat(e, "] a[href], a[href][").concat(e, "], [").concat(e, "] article[data-mrf-uri], [").concat(e, "] [").concat("data-mrf-layout", "]")).join(","),
        i = Array.from(t.querySelectorAll(n)).reduce((t, n) => {
          const i = (e => e && e.closest(Be()))(n) || r,
            o = (e => {
              var t;
              return null === (t = ze.reduce((t, r) => t || (null == e ? void 0 : e.getAttribute(r)), void 0)) || void 0 === t ? void 0 : t.replace(/"/g, '\\"');
            })(i),
            a = (null == i ? void 0 : i.getAttribute("data-mrf-recirculation-url-attribute")) || "",
            s = n,
            c = Xe(s, a);
          if (c && Y(s, c, !1), !o || !c || !e(o, s)) return t;
          const u = t[o] || {
            links: []
          };
          return bt(bt({}, t), {}, {
            [o]: bt(bt({}, u), {}, {
              links: [...u.links, {
                el: s,
                root: i
              }],
              urlAttr: a
            })
          });
        }, {});
      return (e => {
        const t = Je();
        Object.entries(e).forEach(e => {
          let [r, {
            links: n,
            urlAttr: i
          }] = e;
          const o = (e => Number(e.map(e => e.getAttribute("cmp-ltrk-idx")).filter(Boolean).map(parseInt).reduce((e, t) => isNaN(e) || e < t ? t : e, NaN)))(((e, t) => {
            const r = t.filter(t => {
              return r = e, n = t, ze.some(e => {
                var t;
                return (null === (t = n.getAttribute(e)) || void 0 === t ? void 0 : t.toLowerCase()) === r.toLowerCase();
              });
              var r, n;
            }).reduce((t, r) => {
              var n;
              return [...t, ...((null === (n = r.shadowRoot) || void 0 === n ? void 0 : n.querySelectorAll(nt(e))) || [])];
            }, []);
            return [...document.querySelectorAll(nt(e)), ...r];
          })(r, t));
          let a = isNaN(o) ? 0 : o + 1;
          n.forEach(e => {
            const {
                el: t,
                root: o
              } = e,
              s = Xe(t, i);
            if (et(t) || Ze(t) || !s) return;
            rt(t, r, a);
            const c = n.filter(e => {
              let {
                el: r,
                root: n
              } = e;
              return r !== t && n === o && !et(r) && !Ze(r) && Xe(r, i) === s;
            });
            c.length && (c.forEach(e => {
              let {
                el: t
              } = e;
              return rt(t, r, a);
            }), (e => {
              ["data-mrf-experiment"].forEach(t => {
                const r = e.find(e => {
                  let {
                    el: t
                  } = e;
                  return t.hasAttribute("data-mrf-experiment");
                });
                if (r) {
                  const n = r.el.getAttribute("data-mrf-experiment");
                  e.forEach(e => {
                    let {
                      el: r
                    } = e;
                    r.getAttribute("data-mrf-experiment") !== n && r.setAttribute(t, n || "");
                  });
                }
              });
            })([...c, e])), a++;
          });
        });
      })(i), Object.entries(i).map(e => {
        let [t, r] = e;
        return {
          name: t,
          links: r.links,
          urlAttr: r.urlAttr
        };
      });
    },
    Pt = e => e.map(e => {
      let {
        links: t,
        name: r,
        urlAttr: n
      } = e;
      return {
        name: r,
        urlAttr: n,
        links: at(t)
      };
    });
  function St() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {},
      t = arguments.length > 1 ? arguments[1] : void 0,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const {
      parentNode: n,
      layouts: i = []
    } = r;
    ot(i);
    const o = kt((e, t) => !Ze(t) && !et(t), t, n),
      a = Pt(o);
    wt(a, e), gt(o, e), Ot(o, e);
  }
  function jt(e, t, r) {
    St(e, t, r), G(t => {
      St(e, t, r);
    }, t);
  }
  const Et = async () => {
      document && "loading" === document.readyState && (await new Promise(e => {
        document.addEventListener("DOMContentLoaded", e);
      }));
    },
    Ct = (e, t) => {
      e && t && Qe("fc:".concat(e), t);
    },
    Tt = e => {
      let {
          modules: t,
          blacklist: r,
          redirectionLinks: n
        } = e,
        i = !1;
      return r.forEach(e => {
        let {
          selector: t
        } = e;
        const r = document.querySelectorAll(t);
        Array.from(r).forEach(e => {
          e instanceof HTMLElement && !e.hasAttribute("data-mrf-recirculation-skip") && e.setAttribute("data-mrf-recirculation-skip", "");
        });
      }), null == n || n.forEach(e => {
        let {
          selector: t,
          queryParam: r
        } = e;
        const n = document.querySelectorAll(t);
        Array.from(n).forEach(e => {
          if (!e.hasAttribute("data-mrf-recirculation-skip")) try {
            const n = (t = new URL(decodeURIComponent(decodeURIComponent(e.href))).search).length ? t.slice(1).split("&").map(e => e.split("=")).reduce((e, t) => {
              let [r, n] = t;
              return He(He({}, e), {}, {
                [r]: n
              });
            }, {}) : {};
            n[r] && Y(e, decodeURIComponent(n[r]));
          } catch (e) {}
          var t;
        });
      }), t.forEach(e => {
        const t = "selector" in e ? e.selector : "[".concat(e.attr, "]"),
          r = "name" in e ? () => e.name : t => t.getAttribute(e.attr),
          n = document.querySelectorAll(t),
          o = e.urlAttribute;
        Array.from(n).forEach(e => {
          (e => (e => (null === window || void 0 === window ? void 0 : window.HTMLElementOrig) ? e instanceof window.HTMLElementOrig : e instanceof HTMLElement)(e) && !e.hasAttribute("data-mrf-recirculation-skip") && !e.hasAttribute("data-mrf-recirculation") && !e.closest("[data-mrf-experience]"))(e) && (e.setAttribute("data-mrf-recirculation", r(e)), o && e.setAttribute("data-mrf-recirculation-url-attribute", o), i = !0);
        });
      }), i;
    },
    At = document.documentElement,
    It = [{
      qs: ".mrf-current .mrf-detailsBody",
      max: 999
    }, {
      qs: ".mrf-current .mrf-sectionPart",
      max: 999
    }, {
      qs: ".mrf-article-body",
      max: 999
    }, {
      qs: "article",
      max: 1
    }];
  let Dt,
    _t = 0;
  const xt = e => {
    let t;
    try {
      e && (Dt = It.reduce((e, t) => {
        if (e) return e;
        const r = document.querySelectorAll(t.qs);
        return r && r.length <= t.max ? (e => {
          const t = [];
          return e.forEach(e => (e => {
            const t = e.getBoundingClientRect();
            if (!t.width && !t.height) return !1;
            const r = window.innerHeight || document.documentElement.clientHeight,
              n = window.innerWidth || document.documentElement.clientWidth,
              i = t.top <= r && t.top + t.height >= 0,
              o = t.left <= n && t.left + t.width >= 0;
            return i && o;
          })(e) && t.push(e)), t.length > 0 ? t.sort((e, t) => t.offsetTop - e.offsetTop)[0] : null;
        })(r) : null;
      }, null), _t = 0);
      const r = (e => {
          const t = (() => {
            const e = document.body;
            return At.scrollTop || !!e && e.scrollTop || 0;
          })();
          return e ? t - Dt.offsetTop : t;
        })(Dt),
        n = (e => {
          const t = document.body;
          return e ? e.offsetHeight : At.scrollHeight || !!t && t.scrollHeight || 0;
        })(Dt);
      t = r / (n - At.clientHeight) * 100, t > _t ? _t = t : t = _t;
    } catch (e) {}
    return isNaN(t) ? 50 : t > 100 ? 100 : t < 0 ? 0 : t;
  };
  var Lt,
    Rt,
    Nt,
    Mt,
    Vt,
    Ut = function () {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    },
    qt = function (e) {
      if ("loading" === document.readyState) return "loading";
      var t = Ut();
      if (t) {
        if (e < t.domInteractive) return "loading";
        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
        if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded";
      }
      return "complete";
    },
    Ft = function (e) {
      var t = e.nodeName;
      return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "");
    },
    zt = function (e, t) {
      var r = "";
      try {
        for (; e && 9 !== e.nodeType;) {
          var n = e,
            i = n.id ? "#" + n.id : Ft(n) + (n.className && n.className.trim().length ? "." + n.className.trim().replace(/\s+/g, ".") : "");
          if (r.length + i.length > (t || 100) - 1) return r || i;
          if (r = r ? i + ">" + r : i, n.id) break;
          e = n.parentNode;
        }
      } catch (e) {}
      return r;
    },
    Bt = -1,
    Gt = function () {
      return Bt;
    },
    Ht = function (e) {
      addEventListener("pageshow", function (t) {
        t.persisted && (Bt = t.timeStamp, e(t));
      }, !0);
    },
    Kt = function () {
      var e = Ut();
      return e && e.activationStart || 0;
    },
    Jt = function (e, t) {
      var r = Ut(),
        n = "navigate";
      return Gt() >= 0 ? n = "back-forward-cache" : r && (document.prerendering || Kt() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : r.type && (n = r.type.replace(/_/g, "-"))), {
        name: e,
        value: void 0 === t ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: n
      };
    },
    Wt = function (e, t, r) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          var n = new PerformanceObserver(function (e) {
            Promise.resolve().then(function () {
              t(e.getEntries());
            });
          });
          return n.observe(Object.assign({
            type: e,
            buffered: !0
          }, r || {})), n;
        }
      } catch (e) {}
    },
    Xt = function (e, t, r, n) {
      var i, o;
      return function (a) {
        t.value >= 0 && (a || n) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = function (e, t) {
          return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good";
        }(t.value, r), e(t));
      };
    },
    $t = function (e) {
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return e();
        });
      });
    },
    Yt = function (e) {
      var t = function (t) {
        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t);
      };
      addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0);
    },
    Qt = function (e) {
      var t = !1;
      return function (r) {
        t || (e(r), t = !0);
      };
    },
    Zt = -1,
    er = function () {
      return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
    },
    tr = function (e) {
      "hidden" === document.visibilityState && Zt > -1 && (Zt = "visibilitychange" === e.type ? e.timeStamp : 0, nr());
    },
    rr = function () {
      addEventListener("visibilitychange", tr, !0), addEventListener("prerenderingchange", tr, !0);
    },
    nr = function () {
      removeEventListener("visibilitychange", tr, !0), removeEventListener("prerenderingchange", tr, !0);
    },
    ir = function () {
      return Zt < 0 && (Zt = er(), rr(), Ht(function () {
        setTimeout(function () {
          Zt = er(), rr();
        }, 0);
      })), {
        get firstHiddenTime() {
          return Zt;
        }
      };
    },
    or = function (e) {
      document.prerendering ? addEventListener("prerenderingchange", function () {
        return e();
      }, !0) : e();
    },
    ar = [1800, 3e3],
    sr = function (e, t) {
      t = t || {}, or(function () {
        var r,
          n = ir(),
          i = Jt("FCP"),
          o = Wt("paint", function (e) {
            e.forEach(function (e) {
              "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < n.firstHiddenTime && (i.value = Math.max(e.startTime - Kt(), 0), i.entries.push(e), r(!0)));
            });
          });
        o && (r = Xt(e, i, ar, t.reportAllChanges), Ht(function (n) {
          i = Jt("FCP"), r = Xt(e, i, ar, t.reportAllChanges), $t(function () {
            i.value = performance.now() - n.timeStamp, r(!0);
          });
        }));
      });
    },
    cr = [.1, .25],
    ur = {
      passive: !0,
      capture: !0
    },
    lr = new Date(),
    dr = function (e, t) {
      Lt || (Lt = t, Rt = e, Nt = new Date(), hr(removeEventListener), pr());
    },
    pr = function () {
      if (Rt >= 0 && Rt < Nt - lr) {
        var e = {
          entryType: "first-input",
          name: Lt.type,
          target: Lt.target,
          cancelable: Lt.cancelable,
          startTime: Lt.timeStamp,
          processingStart: Lt.timeStamp + Rt
        };
        Mt.forEach(function (t) {
          t(e);
        }), Mt = [];
      }
    },
    fr = function (e) {
      if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function (e, t) {
          var r = function () {
              dr(e, t), i();
            },
            n = function () {
              i();
            },
            i = function () {
              removeEventListener("pointerup", r, ur), removeEventListener("pointercancel", n, ur);
            };
          addEventListener("pointerup", r, ur), addEventListener("pointercancel", n, ur);
        }(t, e) : dr(t, e);
      }
    },
    hr = function (e) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
        return e(t, fr, ur);
      });
    },
    mr = [100, 300],
    vr = 0,
    gr = 1 / 0,
    yr = 0,
    br = function (e) {
      e.forEach(function (e) {
        e.interactionId && (gr = Math.min(gr, e.interactionId), yr = Math.max(yr, e.interactionId), vr = yr ? (yr - gr) / 7 + 1 : 0);
      });
    },
    wr = function () {
      return Vt ? vr : performance.interactionCount || 0;
    },
    Or = [200, 500],
    kr = 0,
    Pr = function () {
      return wr() - kr;
    },
    Sr = [],
    jr = {},
    Er = function (e) {
      var t = Sr[Sr.length - 1],
        r = jr[e.interactionId];
      if (r || Sr.length < 10 || e.duration > t.latency) {
        if (r) r.entries.push(e), r.latency = Math.max(r.latency, e.duration);else {
          var n = {
            id: e.interactionId,
            latency: e.duration,
            entries: [e]
          };
          jr[n.id] = n, Sr.push(n);
        }
        Sr.sort(function (e, t) {
          return t.latency - e.latency;
        }), Sr.splice(10).forEach(function (e) {
          delete jr[e.id];
        });
      }
    },
    Cr = [2500, 4e3],
    Tr = {};
  class Ar {
    constructor() {
      this.cls = 0, this.lcp = 0, this.fid = 0, this.fcp = 0, this.wv = 0, this.tbt = 0, this.inp = 0, this.lcpOffender = null, this.clsOffender = null, this.inpOffender = null, this.setTbt(), this.setINP(), this.setLCP(), this.setFCP(), this.setFID(), this.setCLS();
    }
    hasWebVitals() {
      return this.lcp || this.fcp || this.cls || this.fid || this.inp ? 1 : 0;
    }
    setLCP() {
      var e;
      e = e => {
        var t;
        this.lcp = e.value, this.lcp > 2500 && null !== (t = e.attribution) && void 0 !== t && t.element && (this.lcpOffender = e.attribution.element);
      }, function (e, t) {
        t = t || {}, or(function () {
          var r,
            n = ir(),
            i = Jt("LCP"),
            o = function (e) {
              var t = e[e.length - 1];
              t && t.startTime < n.firstHiddenTime && (i.value = Math.max(t.startTime - Kt(), 0), i.entries = [t], r());
            },
            a = Wt("largest-contentful-paint", o);
          if (a) {
            r = Xt(e, i, Cr, t.reportAllChanges);
            var s = Qt(function () {
              Tr[i.id] || (o(a.takeRecords()), a.disconnect(), Tr[i.id] = !0, r(!0));
            });
            ["keydown", "click"].forEach(function (e) {
              addEventListener(e, s, !0);
            }), Yt(s), Ht(function (n) {
              i = Jt("LCP"), r = Xt(e, i, Cr, t.reportAllChanges), $t(function () {
                i.value = performance.now() - n.timeStamp, Tr[i.id] = !0, r(!0);
              });
            });
          }
        });
      }(function (t) {
        !function (e) {
          if (e.entries.length) {
            var t = Ut();
            if (t) {
              var r = t.activationStart || 0,
                n = e.entries[e.entries.length - 1],
                i = n.url && performance.getEntriesByType("resource").filter(function (e) {
                  return e.name === n.url;
                })[0],
                o = Math.max(0, t.responseStart - r),
                a = Math.max(o, i ? (i.requestStart || i.startTime) - r : 0),
                s = Math.max(a, i ? i.responseEnd - r : 0),
                c = Math.max(s, n ? n.startTime - r : 0),
                u = {
                  element: zt(n.element),
                  timeToFirstByte: o,
                  resourceLoadDelay: a - o,
                  resourceLoadTime: s - a,
                  elementRenderDelay: c - s,
                  navigationEntry: t,
                  lcpEntry: n
                };
              return n.url && (u.url = n.url), i && (u.lcpResourceEntry = i), void (e.attribution = u);
            }
          }
          e.attribution = {
            timeToFirstByte: 0,
            resourceLoadDelay: 0,
            resourceLoadTime: 0,
            elementRenderDelay: e.value
          };
        }(t), e(t);
      }, void 0);
    }
    setFCP() {
      var e;
      e = e => this.fcp = e.value, sr(function (t) {
        !function (e) {
          if (e.entries.length) {
            var t = Ut(),
              r = e.entries[e.entries.length - 1];
            if (t) {
              var n = t.activationStart || 0,
                i = Math.max(0, t.responseStart - n);
              return void (e.attribution = {
                timeToFirstByte: i,
                firstByteToFCP: e.value - i,
                loadState: qt(e.entries[0].startTime),
                navigationEntry: t,
                fcpEntry: r
              });
            }
          }
          e.attribution = {
            timeToFirstByte: 0,
            firstByteToFCP: e.value,
            loadState: qt(Gt())
          };
        }(t), e(t);
      }, void 0);
    }
    setFID() {
      var e;
      e = e => this.fid = e.value, function (e, t) {
        t = t || {}, or(function () {
          var r,
            n = ir(),
            i = Jt("FID"),
            o = function (e) {
              e.startTime < n.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), r(!0));
            },
            a = function (e) {
              e.forEach(o);
            },
            s = Wt("first-input", a);
          r = Xt(e, i, mr, t.reportAllChanges), s && Yt(Qt(function () {
            a(s.takeRecords()), s.disconnect();
          })), s && Ht(function () {
            var n;
            i = Jt("FID"), r = Xt(e, i, mr, t.reportAllChanges), Mt = [], Rt = -1, Lt = null, hr(addEventListener), n = o, Mt.push(n), pr();
          });
        });
      }(function (t) {
        !function (e) {
          var t = e.entries[0];
          e.attribution = {
            eventTarget: zt(t.target),
            eventType: t.name,
            eventTime: t.startTime,
            eventEntry: t,
            loadState: qt(t.startTime)
          };
        }(t), e(t);
      }, void 0);
    }
    setINP() {
      var e;
      e = e => {
        var t, r;
        this.inp = e.value, this.inp > 200 && null !== (t = e.attribution) && void 0 !== t && t.eventTarget && (this.inpOffender = "".concat(null === (r = e.attribution) || void 0 === r ? void 0 : r.eventType, "::").concat(e.attribution.eventTarget), this.inpOffenderStatus = e.attribution.loadState);
      }, function (e, t) {
        t = t || {}, or(function () {
          "interactionCount" in performance || Vt || (Vt = Wt("event", br, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
          }));
          var r,
            n = Jt("INP"),
            i = function (e) {
              e.forEach(function (e) {
                e.interactionId && Er(e), "first-input" === e.entryType && !Sr.some(function (t) {
                  return t.entries.some(function (t) {
                    return e.duration === t.duration && e.startTime === t.startTime;
                  });
                }) && Er(e);
              });
              var t,
                i = (t = Math.min(Sr.length - 1, Math.floor(Pr() / 50)), Sr[t]);
              i && i.latency !== n.value && (n.value = i.latency, n.entries = i.entries, r());
            },
            o = Wt("event", i, {
              durationThreshold: t.durationThreshold || 40
            });
          r = Xt(e, n, Or, t.reportAllChanges), o && (o.observe({
            type: "first-input",
            buffered: !0
          }), Yt(function () {
            i(o.takeRecords()), n.value < 0 && Pr() > 0 && (n.value = 0, n.entries = []), r(!0);
          }), Ht(function () {
            Sr = [], kr = wr(), n = Jt("INP"), r = Xt(e, n, Or, t.reportAllChanges);
          }));
        });
      }(function (t) {
        !function (e) {
          if (e.entries.length) {
            var t = e.entries.sort(function (e, t) {
              return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart);
            })[0];
            e.attribution = {
              eventTarget: zt(t.target),
              eventType: t.name,
              eventTime: t.startTime,
              eventEntry: t,
              loadState: qt(t.startTime)
            };
          } else e.attribution = {};
        }(t), e(t);
      }, void 0);
    }
    setTbt() {
      return !!((e, t) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver(e => {
              e.getEntries().map(e => t(e));
            });
            return r.observe({
              type: e,
              buffered: !0
            }), r;
          }
        } catch (e) {}
      })("longtask", e => {
        this.tbt += e.duration - 50;
      });
    }
    setCLS() {
      var e;
      e = e => {
        var t;
        this.cls = e.value, this.cls > .1 && null !== (t = e.attribution) && void 0 !== t && t.largestShiftTarget && (this.clsOffender = e.attribution.largestShiftTarget, this.clsOffenderStatus = e.attribution.loadState);
      }, function (e, t) {
        t = t || {}, sr(Qt(function () {
          var r,
            n = Jt("CLS", 0),
            i = 0,
            o = [],
            a = function (e) {
              e.forEach(function (e) {
                if (!e.hadRecentInput) {
                  var t = o[0],
                    r = o[o.length - 1];
                  i && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e]);
                }
              }), i > n.value && (n.value = i, n.entries = o, r());
            },
            s = Wt("layout-shift", a);
          s && (r = Xt(e, n, cr, t.reportAllChanges), Yt(function () {
            a(s.takeRecords()), r(!0);
          }), Ht(function () {
            i = 0, n = Jt("CLS", 0), r = Xt(e, n, cr, t.reportAllChanges), $t(function () {
              return r();
            });
          }), setTimeout(r, 0));
        }));
      }(function (t) {
        !function (e) {
          if (e.entries.length) {
            var t = e.entries.reduce(function (e, t) {
              return e && e.value > t.value ? e : t;
            });
            if (t && t.sources && t.sources.length) {
              var r = (n = t.sources).find(function (e) {
                return e.node && 1 === e.node.nodeType;
              }) || n[0];
              if (r) return void (e.attribution = {
                largestShiftTarget: zt(r.node),
                largestShiftTime: t.startTime,
                largestShiftValue: t.value,
                largestShiftSource: r,
                largestShiftEntry: t,
                loadState: qt(t.startTime)
              });
            }
          }
          var n;
          e.attribution = {};
        }(t), e(t);
      }, void 0);
    }
  }
  function Ir(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Dr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ir(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  const _r = new dt();
  let xr = {
    10: 15e3,
    150: 25e3
  };
  const Lr = () => {
      _r.cleanTimer();
    },
    Rr = (e, t) => {
      _r.callOnTimer(t, e);
    },
    {
      userIdPromise: Nr,
      resolveFinalUserId: Mr
    } = (() => {
      let e = () => {};
      return {
        userIdPromise: new Promise(t => {
          e = t;
        }),
        resolveFinalUserId: e
      };
    })();
  class Vr {
    constructor(e) {
      this.compassTracker = e;
    }
    getUserId() {
      return {
        userIdPromise: Nr,
        actualUserId: this.compassTracker.permanentCookie.userId
      };
    }
    processIngestResponse(e) {
      e && (pe(e.uid) && (this.compassTracker.permanentCookie.userId = e.uid, this.compassTracker.markAsModified("permanent")), pe(e.sid) && (this.compassTracker.temporalCookie.sessionId = e.sid, this.compassTracker.markAsModified("temporal")), this.compassTracker.saveCookies()), pe(this.compassTracker.permanentCookie.userId) && Mr(this.compassTracker.permanentCookie.userId);
    }
  }
  const Ur = {
      web: 0,
      fbia: 2,
      iosapp: 3,
      androidapp: 4,
      flowcards: 5,
      pressreader: 6,
      app: 7,
      applenews: 8,
      pressreaderandroid: 11,
      pressreaderios: 12
    },
    qr = e => {
      if (isNaN(e)) {
        const t = e.toLowerCase().replace(/ /g, "");
        return void 0 !== Ur[t] ? Ur[t] : null;
      }
      return e;
    };
  let Fr = [];
  const zr = (e, t) => {
    const r = [e, t];
    let n = !0;
    for (let t = 0; t < Fr.length; t += 1) Fr[t][0] === e && (Fr[t] = r, n = !1);
    n && Fr.push(r);
  };
  let Br = null;
  const Gr = () => Br = null,
    Hr = e => {
      const t = e.parentElement;
      t && (t.addEventListener("mouseenter", () => (e => {
        Br = e;
      })(e)), t.addEventListener("mouseleave", Gr));
    },
    Kr = (e, t, r) => {
      const n = Array.from(e).filter(e => !e.hasAttribute("cmp-cnvtrk"));
      for (const e of n) e.addEventListener(t, () => {
        const t = e.dataset.mrfConversion;
        t && r(t);
      }), e.setAttribute("cmp-cnvtrk", "true");
    },
    Jr = e => {
      const t = document.querySelectorAll("iframe[data-mrf-conversion]"),
        r = document.querySelectorAll("form[data-mrf-conversion]"),
        n = document.querySelectorAll("button[data-mrf-conversion], a[data-mrf-conversion]");
      Kr(r, "submit", e), Kr(n, "click", e), (e => {
        const t = Array.from(e).filter(e => !e.hasAttribute("cmp-cnvtrk"));
        for (const e of t) Hr(e), e.setAttribute("cmp-cnvtrk", "true");
      })(t);
    },
    Wr = e => {
      G(() => {
        Jr(e);
      }), Jr(e);
    };
  var Xr;
  function $r(e) {
    return e.update = Date.now(), function (e, t) {
      try {
        return window.localStorage.setItem("marfeel-sdk-store", t), !0;
      } catch (e) {
        return !1;
      }
    }(0, btoa(JSON.stringify(e)));
  }
  function Yr() {
    return void 0 === Xr && (Xr = function () {
      var e = function (e) {
        try {
          return window.localStorage.getItem("marfeel-sdk-store");
        } catch (e) {
          return null;
        }
      }();
      if (e) return JSON.parse(atob(e));
      var t = {
        creation: Date.now(),
        update: Date.now(),
        entries: {}
      };
      return $r(t), t;
    }()), Xr;
  }
  const Qr = "compass-conversions-counter-entry",
    Zr = e => {
      let t = (null != e ? e : "").toString();
      return !t.startsWith("/") && t.includes("/") && (t = "/".concat(t)), t.split("/").map(e => e.split(",").shift()).join("/");
    };
  class en {
    constructor() {
      this.newAds = [], this.newAdUnitPaths = [], this.visibilityChangedSlots = [];
    }
    setInterstitialSlot(e) {
      this.interstitialSlot = e;
    }
    trackAdEvent(e, t) {
      const r = this.mustBeTracked(e, t);
      if (r) {
        const r = t.getAdUnitPath(),
          n = t.getResponseInformation() && t.getResponseInformation().lineItemId;
        this.trackAdRenderedInternal(n || r, r), "slotVisibilityChanged" === e && this.visibilityChangedSlots.push(t);
      }
      return r;
    }
    trackAdEventLegacy(e, t, r) {
      return "slotRenderEnded" === e && (this.trackAdRenderedInternal(t || r, r), !0);
    }
    trackAdRenderedInternal(e, t) {
      this.newAds.push(Zr(e)), t && this.newAdUnitPaths.push(Zr(t));
    }
    getAds() {
      return this.newAds.splice(0);
    }
    getAdUnits() {
      return this.newAdUnitPaths.splice(0);
    }
    mustBeTracked(e, t) {
      let r = !1;
      return "slotRenderEnded" === e && (r = t !== this.interstitialSlot), "slotVisibilityChanged" === e && (r = t === this.interstitialSlot && !this.visibilityChangedSlots.includes(t)), r;
    }
  }
  function tn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function rn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? tn(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  const nn = (e, t) => {
    ((e, t) => {
      const r = {
          requests: {
            ads: e
          },
          triggers: {
            renderEnd: {
              on: "ad-render-end",
              request: "ads",
              selector: "body",
              extraUrlParams: rn(rn({}, t), {}, {
                l: "${totalEngagedTime}",
                sc: xt(!1),
                a: "-1",
                ps: "${navTiming(navigationStart)}",
                n: "${timestamp}",
                ads: "$IF(${adSlot}, ${adSlot}, -1)amp",
                ampFirst: "true"
              })
            }
          },
          transport: {
            beacon: !0,
            xhrpost: !0,
            image: !1
          }
        },
        n = () => {
          document.body.appendChild((e => {
            const t = document.createElement("amp-analytics"),
              r = document.createElement("script");
            return r.type = "application/json", r.innerText = JSON.stringify(e), t.appendChild(r), t;
          })(r));
        };
      "loading" === document.readyState ? window.addEventListener("load", () => n()) : n();
    })(e, t);
  };
  class on {
    constructor() {
      this.events = {};
    }
    on(e, t) {
      void 0 === this.events[e] && (this.events[e] = {
        listeners: []
      }), this.events[e].listeners.push(t);
    }
    remove(e, t) {
      this.events[e].listeners = this.events[e].listeners.filter(e => e.toString() !== t.toString());
    }
    dispatch(e, t) {
      this.events[e] && this.events[e].listeners.forEach(e => {
        e(t);
      });
    }
  }
  function an(e, t) {
    try {
      const r = [...t],
        n = r.shift();
      let i;
      if (Array.isArray(e)) {
        const r = e.map(e => an(e, t)).filter(Boolean);
        i = r.length && r[0];
      } else i = e[n];
      return 0 === r.length ? i ? null == i ? void 0 : i.toString() : null : an(i, r);
    } catch (e) {
      return null;
    }
  }
  function sn(e, t) {
    for (const r of e) {
      const e = an(r, t);
      if (e) return e;
    }
    return null;
  }
  const cn = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
  function un(e) {
    let t;
    return t = cn.test(e) ? new Date(e) : new Date(e + "Z"), t.getTime();
  }
  const ln = {
      jsonLD: Object.freeze({
        __proto__: null,
        extract: function ({
          attributePath: e
        }) {
          try {
            const t = document.querySelectorAll('script[type="application/ld+json"]');
            return t && e ? function (e, t) {
              var r;
              for (const n of e) {
                const e = n.textContent ? ((null === (r = n.textContent) || void 0 === r ? void 0 : r.trim()) || "").replace(/\n|\t/g, "") : "{}",
                  i = JSON.parse(`${e}`);
                if (Array.isArray(i)) return sn(i, t);
                const o = an(i, t);
                if (o) return o;
              }
              return null;
            }(t, e) : null;
          } catch (e) {
            return null;
          }
        }
      }),
      querySelector: Object.freeze({
        __proto__: null,
        extract: function ({
          queries: e
        }) {
          if (!e) return null;
          const t = e.reduce((e, {
            query: t,
            attribute: r
          }) => (document.querySelectorAll(t).forEach(t => {
            r ? e.push(t.getAttribute(r) || null) : t.textContent && e.push(t.textContent);
          }), e), []).filter(e => null !== e);
          return 1 === t.length || t.length > 1 && t.every(e => e === t[0] || un(e) === un(t[0])) ? t[0] : null;
        }
      })
    },
    dn = e => {
      for (const t of e) {
        const e = ln[t.type].extract(t);
        if (e) return e;
      }
      return null;
    },
    pn = [{
      type: "jsonLD",
      attributePath: ["dateModified"]
    }, {
      type: "jsonLD",
      attributePath: ["@graph", "dateModified"]
    }, {
      type: "querySelector",
      queries: [{
        query: 'meta[property="article:modified_time"]',
        attribute: "content"
      }]
    }, {
      type: "querySelector",
      queries: [{
        query: 'meta[itemprop="dateModified"]',
        attribute: "content"
      }]
    }, {
      type: "querySelector",
      queries: [{
        query: 'time[itemprop="dateModified"]',
        attribute: "datetime"
      }]
    }, {
      type: "querySelector",
      queries: [{
        query: 'time[itemprop="dateModified"]',
        attribute: "content"
      }]
    }, {
      type: "querySelector",
      queries: [{
        query: '[itemprop="dateModified"]'
      }]
    }];
  var fn = Object.freeze({
    __proto__: null,
    extract: () => dn(pn)
  });
  const hn = [{
    type: "jsonLD",
    attributePath: ["datePublished"]
  }, {
    type: "jsonLD",
    attributePath: ["@graph", "datePublished"]
  }, {
    type: "querySelector",
    queries: [{
      query: '[itemtype="http://schema.org/NewsArticle"] time[itemprop="datePublished"]',
      attribute: "datetime"
    }]
  }, {
    type: "querySelector",
    queries: [{
      query: 'meta[property="article:published_time"]',
      attribute: "content"
    }, {
      query: ':not([itemprop="image"]) > meta[itemprop="datePublished"]',
      attribute: "content"
    }, {
      query: 'time[itemprop="datePublished"]',
      attribute: "datetime"
    }, {
      query: 'time[itemprop="datePublished"]',
      attribute: "content"
    }, {
      query: 'meta[name="cXenseParse:recs:publishtime"]',
      attribute: "content"
    }]
  }, {
    type: "querySelector",
    queries: [{
      query: '[itemprop="datePublished"]'
    }]
  }];
  var mn = Object.freeze({
    __proto__: null,
    extract: () => dn(hn)
  });
  const vn = [{
    type: "jsonLD",
    attributePath: ["offers", "lowPrice"]
  }, {
    type: "jsonLD",
    attributePath: ["@graph", "offers", "lowPrice"]
  }, {
    type: "jsonLD",
    attributePath: ["offers", "price"]
  }, {
    type: "querySelector",
    queries: [{
      query: '[itemprop="offers"] [itemprop="price"]',
      attribute: "content"
    }]
  }, {
    type: "querySelector",
    queries: [{
      query: 'meta[property="product:price:amount"]',
      attribute: "content"
    }]
  }];
  var gn = Object.freeze({
    __proto__: null,
    extract: () => dn(vn)
  });
  const yn = [{
      type: "jsonLD",
      attributePath: ["offers", "availability"]
    }, {
      type: "jsonLD",
      attributePath: ["@graph", "offers", "availability"]
    }, {
      type: "querySelector",
      queries: [{
        query: '[itemprop="offers"] link[itemprop="availability"]',
        attribute: "href"
      }, {
        query: '[itemprop="offers"] [itemprop="availability"]',
        attribute: "content"
      }]
    }, {
      type: "querySelector",
      queries: [{
        query: 'meta[property="product:availability"]',
        attribute: "content"
      }]
    }],
    bn = {},
    wn = {
      updateTime: fn,
      publishTime: mn,
      availability: Object.freeze({
        __proto__: null,
        extract: () => dn(yn)
      }),
      price: gn
    },
    On = (e, t) => {
      if (!bn[e] || t) {
        const t = wn[e];
        bn[e] = t.extract();
      }
      return bn[e];
    },
    kn = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      try {
        if (t) {
          const t = Te(e);
          return JSON.parse(t) || {};
        }
        return (e => {
          const t = be(e);
          if (t) try {
            return JSON.parse(t);
          } catch (e) {}
          return null;
        })(e) || {};
      } catch (e) {
        return {};
      }
    },
    Pn = function (e, t) {
      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const n = t ? kn("".concat(e, "_").concat(t), r) : null;
      return n && 0 !== Object.keys(n).length ? n : kn(e, r);
    };
  function Sn(e, t) {
    let r = 0;
    return e.active && (r = 5), Math.min(t - e.time, r);
  }
  class jn {
    constructor() {
      this.totalEngagedTime = 0, this.prevEvent = void 0;
    }
    pushEvent(e) {
      this.prevEvent && this.prevEvent.time < e.time && (this.totalEngagedTime += Sn(this.prevEvent, e.time)), this.prevEvent = e;
    }
    getTotalEngagedTime(e) {
      let t = 0;
      return void 0 !== this.prevEvent && (t = this.totalEngagedTime + Sn(this.prevEvent, e)), t;
    }
  }
  const En = ["mousedown", "mouseup", "mousemove", "keydown", "keyup", "scroll", "MRF_MULTIMEDIA_ENGAGED"],
    Cn = ["mouseleave"];
  class Tn {
    constructor() {
      this.startTime = Date.now(), this.listeningActive = !1, this.listeningInactive = !1, this.acitvityHistory = new jn(), this.listenToEvents(), "visible" === document.visibilityState && this.eventTriggered(!0);
    }
    listenToEvents() {
      En.forEach(e => {
        document.addEventListener(e, () => this.eventTriggered(!0));
      }), Cn.forEach(e => {
        document.addEventListener(e, () => this.eventTriggered(!1));
      }), _(() => this.eventTriggered(!1)), x(() => this.eventTriggered(!0));
    }
    getTimeSinceStart() {
      const e = Date.now() - this.startTime;
      return e > 0 ? e : 0;
    }
    eventTriggered(e) {
      e && this.listeningActive || !e && this.listeningInactive || (this.listeningActive = e, this.listeningInactive = !e, this.handleEvent(e));
    }
    handleEvent(e) {
      const t = Math.floor(this.getTimeSinceStart() / 1e3);
      setTimeout(() => {
        this.listeningActive = !1, this.listeningInactive = !1;
      }, 1e3), this.acitvityHistory.pushEvent({
        active: e,
        time: t
      });
    }
    getTotalEngagedTime() {
      const e = Math.floor(this.getTimeSinceStart() / 1e3);
      return this.acitvityHistory.getTotalEngagedTime(e);
    }
  }
  function An() {
    let e = arguments.length > 1 ? arguments[1] : void 0,
      t = !1;
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(e => {
      let {
        selector: r,
        name: n
      } = e;
      document.querySelectorAll(r).forEach(e => {
        e.getAttribute("data-mrf-conversion") || (t = !0, e.setAttribute("data-mrf-conversion", n));
      });
    }), t && Jr(e);
  }
  function In(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  const Dn = function (e) {
      const t = e => e && "object" == typeof e;
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
      return n.reduce((e, r) => (Object.keys(r).forEach(n => {
        const i = e[n],
          o = r[n];
        Array.isArray(i) && Array.isArray(o) ? e[n] = [...i].concat(...o) : t(i) && t(o) ? e[n] = Dn(i, o) : e[n] = o;
      }), e), e);
    },
    _n = e => [...new Set(e)];
  function xn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ln(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xn(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Rn {
    constructor(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : je;
      var n;
      this.trackerName = window.__mrfCompass ? "__mrfCompass" : "__newsroom_js", window[this.trackerName].data = window[this.trackerName].data || [], this.handleImmediateCallsToDataArray(), this.userIdManager = new Vr(this), this.tracker = window[this.trackerName], this.accountId = this.tracker.accountId, this.initFlags(), this.adsTracker = new en(), this.adsDelay = 200, this.consentManager = t, this.setupConsent(this.tracker), this.synchronizer = r, this.dispatcher = new on(), this.initializeCookies(), this.tracker.lazy || this.initialize(), _(() => {
        (e => {
          this.synchronizer.resolve("experimentationDisabled", !1);
        })(), this.synchronizer.wait("pageInitialized").then(() => {
          this.setPageVar("lastEvent", !0), this.collectAndTrackPage();
        });
      }), x(() => {
        this.synchronizer.wait("pageInitialized").then(() => {
          Lr(), this.trackPage();
        });
      }), n = () => this.trackNewPage({
        rs: "back forward cache"
      }), window.addEventListener("pageshow", e => {
        e.persisted && n();
      }, {
        capture: !0
      }), function (e, t, r) {
        r ? nn(e, t) : window.customElements.whenDefined("amp-ad").then(() => nn(e, t));
      }(this.endpoint, this.getBasicConfig(), this.tracker.isAmpFirst), this.tracker.setFCSource = Ct, this.contextVariables = {};
    }
    initFlags() {
      this.tracker.lazy = this.tracker.lazy || !1, this.tracker.isAmpFirst = this.tracker.isAmpFirst || !1, this.tracker.isCookieSandboxed = this.tracker.isCookieSandboxed || [1464, 3838].includes(this.accountId), (window.navigator.userAgent.includes("Chrome-Lighthouse") || "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36" === window.navigator.userAgent) && (this.tracker.keepalive = !1);
      const e = Ln({
        lazy: !1,
        layouts: [],
        modules: []
      }, this.tracker.rm || {});
      this.tracker.rm = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const r = {},
          n = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? In(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : In(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }
            return e;
          }({}, e),
          o = Object.assign(new Promise((e, t) => Object.assign(r, {
            set: t => {
              const r = t instanceof Function ? t(n) : t;
              e(Dn(n, r));
            }
          })), r);
        return t && o.set({}), o;
      }(e, !e.lazy), this.tracker.usePerformanceEndpoint = this.tracker.usePerformanceEndpoint || !1, this.tracker.adsTrackingFromClient && (this.nrGoogleTrackingActive = !0);
    }
    setInterstitialSlot(e) {
      this.adsTracker.setInterstitialSlot(e);
    }
    initializeCookies() {
      this.cookieDomain = this.tracker.cookieDomain || (e => {
        const t = e.split(".").filter(e => "www" !== e);
        if (t.length < 2 || W.test(e)) return null;
        if (2 === t.length) return t.join(".");
        const r = t.slice(-2),
          n = t.length - 1;
        return (e => {
          const t = e.length - 1;
          return 2 === e[t].length && !!["avz", "co", "com", "df", "gob", "gov", "org", "rt"].includes(e[t - 1]);
        })(r) && r.unshift(t[n - 2]), r.join(".");
      })(window.location.hostname);
      const e = this.consentManager.getConsent("cookies");
      this.temporalCookie = function (e) {
        const t = Ee(e, "currentVisitStarted"),
          r = new Date();
        return r.setDate(r.getDate() - 1), t && t < Ce(r) ? {} : e;
      }(Pn("___nrbic", this.tracker.isCookieSandboxed ? this.accountId : null, e)), this.permanentCookie = Pn("___nrbi", this.tracker.isCookieSandboxed ? this.accountId : null, e);
    }
    async initialize() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.engagementCalculator = new Tn(), this.performanceStartTime = performance.now();
      const {
          url: t,
          rs: r,
          initialPageVars: n
        } = ((e, t) => e ? "string" == typeof e ? {
          url: e
        } : e : {})(e),
        i = t ? Q(t) : t;
      Lr(), Fr = [], n && (await Promise.all(Object.entries(n).map(async e => {
        let [t, r] = e;
        return await this.setPageVar(t, r, !1);
      }))), window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], void 0 === this.nrGoogleTrackingActive && (this.nrGoogleTrackingActive = !0, googletag.cmd.push(() => {
        googletag.pubads().addEventListener("slotRenderEnded", e => {
          e.isEmpty || this.trackAdEvent("slotRenderEnded", e.slot);
        }), googletag.pubads().addEventListener("slotVisibilityChanged", e => {
          this.trackAdEvent("slotVisibilityChanged", e.slot);
        });
      })), this.temporalCookieModified = !1, this.permanentCookieModified = !1, this.adsTracked = !1, this.pageId = null, this.isFirstPage = !0, this.recirculationSource = null, this.updateTime = null, this.publishTime = null, this.newAds = [], this.newAdUnitPaths = [], this.conversion = null, this.tick = 0, this.endpoint = this.tracker.endpoint || "https://events.newsroom.bi/ingest.php", this.endpointDomain = (e => {
        const t = document.createElement("a");
        return t.href = e, t.origin;
      })(this.endpoint), this.currentPage = i || K(this.tracker.pageType), this.startPageTime = Ce(), this.pageId = fe(), this.url = i || K(this.tracker.pageType), this.canonical = i || he(this.tracker.pageType), this.setFirstVisit(), this.setPreviousVisit(), this.setCurrentVisitStarted(), this.setTimesVisited(), this.setPagesViewed(), this.setLandingPage(i), this.setRecirculationSource(r), this.saveCookies(), this.webVitals = new Ar(), this.updateTime = On("updateTime"), this.publishTime = On("publishTime");
      const o = this.trackPage();
      return this.setRecirculationTracking(), (e => {
        const t = e.trackConversion.bind(e);
        (e => {
          window.addEventListener("blur", () => (e => {
            Br && e(Br);
          })(e));
        })(e => {
          var r;
          return e && t(null == e || null === (r = e.dataset) || void 0 === r ? void 0 : r.mrfConversion);
        }), document.readyState && "complete" === document.readyState ? Wr(t) : document.addEventListener("DOMContentLoaded", () => {
          Wr(t);
        });
      })(this), this.dispatcher.dispatch("pageInitialized", {
        url: this.canonical
      }), this.synchronizer.resolve("pageInitialized"), o;
    }
    handleImmediateCallsToDataArray() {
      window[this.trackerName].data.oldPush = window[this.trackerName].data.push, window[this.trackerName].data.push = e => {
        "getRFV" === e[0] ? this.getRFV(e[1]) : window[this.trackerName].data.oldPush(e);
      };
    }
    setFirstVisit() {
      let e = Ee(this.permanentCookie, "firstVisit");
      if (!1 === e) {
        e = Ce(), this.permanentCookie.firstVisit = e;
        const t = Te("compass_uid");
        this.permanentCookie.userId = t ? pe(t) ? t : ((e, t) => {
          const r = de(`${e}`, "c0a334de-7622-4bd6-8bff-0b2b750cf2c6");
          return de(`${t}`, r);
        })(this.accountId, t) : fe(), this.permanentCookie.userVars = [], this.markAsModified("permanent");
      } else this.permanentCookie.userVars = this.permanentCookie.userVars || [];
    }
    setPreviousVisit() {
      const e = Ee(this.temporalCookie, "previousVisit"),
        t = Ee(this.permanentCookie, "futurePreviousVisit");
      if (!1 === e && !1 !== t) this.temporalCookie.previousVisit = t, this.permanentCookie.futurePreviousVisit = Ce(), this.markAsModified("temporal"), this.markAsModified("permanent");else if (!1 === e && !1 === t) {
        const e = Ce();
        this.temporalCookie.previousVisit = e, this.permanentCookie.futurePreviousVisit = e, this.markAsModified("temporal"), this.markAsModified("permanent");
      }
    }
    setCurrentVisitStarted() {
      let e = Ee(this.temporalCookie, "currentVisitStarted");
      !1 === e ? (e = Ce(), this.temporalCookie.currentVisitStarted = e, this.markAsModified("temporal"), this.temporalCookie.sessionId = fe(), this.temporalCookie.sessionVars = []) : this.isFirstPage = !1;
    }
    setTimesVisited() {
      let e = Ee(this.permanentCookie, "timesVisited");
      !1 !== Ee(this.temporalCookie, "visitedInThisSession") && !1 !== e || (e = !1 === e || isNaN(parseInt(e, 10)) ? 1 : e + 1, this.permanentCookie.timesVisited = e, this.temporalCookie.visitedInThisSession = !0, this.markAsModified("permanent"), this.markAsModified("temporal"));
    }
    setPagesViewed() {
      let e = Ee(this.temporalCookie, "pagesViewed");
      e = !1 === e || isNaN(parseInt(e, 10)) ? 1 : e + 1, this.temporalCookie.pagesViewed = e, this.markAsModified("temporal");
    }
    setLandingPage(e) {
      !1 === Ee(this.temporalCookie, "landingPage") && (this.temporalCookie.landingPage = e || K(this.tracker.pageType), this.temporalCookie.referrer = J(this.tracker.pageType), this.markAsModified("temporal"));
    }
    getLandingPage() {
      var e;
      return null === (e = this.temporalCookie) || void 0 === e ? void 0 : e.landingPage;
    }
    setRecirculationSource(e) {
      var t, r;
      if ("back_forward" === (null === (t = performance) || void 0 === t || null === (r = t.getEntriesByType) || void 0 === r || null === (r = r.call(t, "navigation")) || void 0 === r || null === (r = r[0]) || void 0 === r ? void 0 : r.type) && "back forward cache" !== e) this.recirculationSource = "back forward";else if (e) this.recirculationSource = e;else {
        const e = (e => {
          const t = ((e, t) => X(e).search.substring(1).split("&").map(e => e.split("=")).filter(e => {
            let [t] = e;
            return "utm_cmp_rs" === t;
          }).map(e => {
            let [t, r] = e;
            return decodeURIComponent(r);
          }).shift())(e);
          return t || (e => {
            const t = Ke(e),
              r = Ye(),
              n = he();
            return r && (r[t] || r[n]);
          })(e);
        })(this.currentPage);
        e && (this.recirculationSource = e, (e => {
          const t = Ke(e),
            r = Ye();
          r && (delete r[t], Fe("___m_rec", JSON.stringify(r)));
        })(this.currentPage), (e => "refresh" === e)(e) && (this.previousPage = this.canonical));
      }
    }
    saveTemporalCookie(e) {
      const t = this.tracker.isCookieSandboxed ? "".concat("___nrbic", "_").concat(this.accountId) : "___nrbic";
      e && Ae(t, JSON.stringify(this.temporalCookie), null, "/", this.cookieDomain), we(t, this.temporalCookie);
    }
    savePermanentCookie(e) {
      const t = this.tracker.isCookieSandboxed ? "".concat("___nrbi", "_").concat(this.accountId) : "___nrbi";
      if (e) {
        const e = new Date(),
          {
            actualUserId: r
          } = this.userIdManager.getUserId();
        e.setMonth(e.getMonth() + 6), Ae(t, JSON.stringify(this.permanentCookie), e.toGMTString(), "/", this.cookieDomain), Ae("compass_uid", r, e.toGMTString(), "/", this.cookieDomain);
      }
      we(t, this.permanentCookie);
    }
    saveCookies() {
      let {
        force: e
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = this.consentManager.getConsent("cookies");
      this.temporalCookie && (this.temporalCookieModified || e) && this.saveTemporalCookie(t), this.permanentCookie && (this.permanentCookieModified || e) && this.savePermanentCookie(t);
    }
    markAsModified(e) {
      this[e + "CookieModified"] = !0;
    }
    getReferrer() {
      return this.previousPage ? this.previousPage : J(this.tracker.pageType);
    }
    hasTrackedAds() {
      return !this.nrGoogleTrackingActive || this.adsTracked;
    }
    getEngagedTime() {
      var e;
      const t = Ce() - this.startPageTime;
      return "fbia" === (null === (e = this.tracker) || void 0 === e ? void 0 : e.pageType) ? t : this.engagementCalculator.getTotalEngagedTime();
    }
    async track(e) {
      return new Promise(t => {
        const r = 0 === this.tick;
        let n = !1;
        try {
          n = !!JSON.parse(e.get("pvar")).find(e => "lastEvent" === e[0] && e[1]);
        } catch (e) {}
        V(this.endpoint, function (e) {
          const t = [];
          return e.forEach((e, r) => {
            t.push(r + "=" + encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function (e) {
              return me[e];
            }));
          }), t.join("&");
        }(e), {
          needsXHR: r,
          contentType: "application/x-www-form-urlencoded",
          keepalive: n && this.tracker.keepalive
        }, e => {
          let r = {};
          try {
            r = JSON.parse(e);
          } catch (e) {}
          var n;
          this.userIdManager.processIngestResponse(r), r.strategy && (n = r.strategy, xr = n.reduce((e, t) => Dr(Dr({}, e), {}, {
            [t.tick]: t.delay
          }), {})), r.ads && (this.adsDelay = r.ads), t();
        }), r || t();
      });
    }
    setUserType(e) {
      this.synchronizer.wait("pageInitialized"), this.permanentCookie.userType = e, this.markAsModified("permanent"), this.saveCookies();
    }
    getUserId() {
      return this.userIdManager.getUserId();
    }
    getSiteUserId() {
      return this.permanentCookie.siteUserId;
    }
    getSessionReferrer() {
      return this.temporalCookie.referrer;
    }
    getSessionId() {
      return this.temporalCookie.sessionId;
    }
    getPageId() {
      return this.pageId;
    }
    getRecirculationSource() {
      return this.recirculationSource;
    }
    getFirstVisit() {
      return this.permanentCookie.firstVisit;
    }
    getLastVisit() {
      return this.temporalCookie.previousVisit !== this.permanentCookie.futurePreviousVisit ? this.temporalCookie.previousVisit : null;
    }
    getPageType() {
      const e = this.tracker.pageType;
      return e && qr(e) ? qr(e) : 0;
    }
    getUserType() {
      return function (e) {
        if ("number" == typeof e) return e;
        let t = parseInt(e || "", 10);
        if (isNaN(t)) switch (e) {
          case "anonymous":
            t = 1;
            break;
          case "logged":
            t = 2;
            break;
          case "paid":
            t = 3;
            break;
          default:
            t = 0;
        }
        return t;
      }(this.permanentCookie.userType);
    }
    getTotalPageviews() {
      return this.temporalCookie.pagesViewed;
    }
    getSessionDuration() {
      return Ce() - this.temporalCookie.currentVisitStarted;
    }
    getEndpointDomain() {
      return this.endpointDomain;
    }
    getUserVars() {
      return this.permanentCookie.userVars;
    }
    getSessionVars() {
      return this.temporalCookie.sessionVars;
    }
    getPageVars() {
      return Fr;
    }
    getUrl() {
      return this.url;
    }
    setEcommerceData(e) {
      this.ecommerceData = e;
    }
    getCanonical() {
      return this.canonical;
    }
    setSiteUserId(e) {
      this.permanentCookie.siteUserId = e, this.markAsModified("permanent"), this.saveCookies();
    }
    setCookies(e) {
      this.consentManager.setConsent("cookies", e);
    }
    async getUserConsent() {
      return await async function (e, t) {
        return e.isInitiated() ? e.getConsent(t) : await Promise.race([new Promise(e => setTimeout(() => e(!0), 5e3)), new Promise(t => e.onChange(() => t(!0))), new Promise(e => _(() => e(!0)))]).then(async () => e.getConsent(t));
      }(this.consentManager, "cookies");
    }
    trackAdEvent(e, t) {
      this.adsTracker.trackAdEvent(e, t) && -1 !== this.adsDelay && (this.adsTracked = !0, Lr(), Rr(this.adsDelay, () => this.trackPage()));
    }
    trackAdRendered(e, t) {
      this.adsTracker.trackAdEventLegacy("slotRenderEnded", e, t) && -1 !== this.adsDelay && (this.adsTracked = !0, Lr(), Rr(this.adsDelay, () => this.trackPage()));
    }
    async setUserVar(e, t) {
      await this.synchronizer.wait("pageInitialized");
      const r = [e, t];
      let n = !0;
      for (let t = 0; t < this.permanentCookie.userVars.length; t += 1) this.permanentCookie.userVars[t][0] === e && (this.permanentCookie.userVars[t] = r, n = !1);
      n && this.permanentCookie.userVars.push(r), this.markAsModified("permanent"), this.saveCookies();
    }
    async setSessionVar(e, t) {
      await this.synchronizer.wait("pageInitialized");
      const r = [e, t];
      let n = !0;
      for (let t = 0; t < this.temporalCookie.sessionVars.length; t += 1) this.temporalCookie.sessionVars[t][0] === e && (this.temporalCookie.sessionVars[t] = r, n = !1);
      n && this.temporalCookie.sessionVars.push(r), this.markAsModified("temporal"), this.saveCookies();
    }
    async setPageVar(e, t) {
      var r;
      (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (await this.synchronizer.wait("pageInitialized")), zr(e, t), r = t, "closed" === e && this.setUserVar("lastClosed", r);
    }
    async trackConversion(e, t) {
      this.conversion = {
        conv: e,
        conv_i: t
      }, (async e => {
        const t = (await (r = Qr, Promise.resolve(Yr().entries[r]))) || {};
        var r;
        const n = t[e] || 0;
        t[e] = n + 1, await function (e, t) {
          return Yr().entries[e] = t, Promise.resolve($r(Yr()));
        }(Qr, t);
      })(e), Lr(), await this.trackPage();
    }
    async trackRecirculationEvent(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const n = await this.getTrackingCommonData(),
        i = {
          t: e,
          m: t.map(e => {
            var t, r;
            return Ln(Ln({}, e), {}, {
              e: (null === (t = (r = e.e).map) || void 0 === t ? void 0 : t.call(r, Z)) || e.e
            });
          }),
          ac: n.ac,
          url: n.url,
          c: n.c,
          ut: n.ut,
          fv: n.fv,
          lv: n.lv,
          r: n.r,
          lp: n.lp,
          pageType: 0,
          sui: n.sui,
          u: n.u,
          uc: n.uc,
          n: Ce()
        };
      this.tracker.pageType && "fbia" === this.tracker.pageType && (i.pageType = 2);
      const o = Ve(this.accountId);
      if (o) {
        const {
          rfv: e,
          v: t,
          f: r,
          r: n
        } = o;
        i.rfv = e, i.rfv_r = n, i.rfv_f = r, i.rfv_v = t;
      }
      return V("".concat(this.getEndpointDomain(), "/recirculation.php"), JSON.stringify(i), {
        needsXHR: r
      }), i;
    }
    getBasicConfig() {
      const {
        actualUserId: e
      } = this.getUserId();
      return {
        ac: this.accountId,
        co: this.cookieDomain,
        t: this.temporalCookie.currentVisitStarted,
        r: this.getSessionReferrer(),
        url: this.url,
        c: this.canonical,
        pp: this.getReferrer(),
        lp: this.getLandingPage(),
        p: this.pageId,
        u: e,
        s: this.getSessionId(),
        v: .2
      };
    }
    async getTrackingCommonData() {
      const {
        userIdPromise: e
      } = this.getUserId();
      return Ln(Ln({}, this.getBasicConfig()), {}, {
        u: await e,
        ua: window.navigator.userAgent,
        rs: this.getRecirculationSource(),
        sui: this.getSiteUserId() || "",
        ut: this.getUserType(),
        fv: this.getFirstVisit(),
        lv: this.getLastVisit(),
        uvar: this.getUserVars(),
        svar: this.getSessionVars(),
        pvar: this.getPageVars(),
        uc: await this.getUserConsent(),
        useg: this.getUserSegments()
      });
    }
    async trackPageInternal() {
      this.tick > 0 && (this.performanceStartTime = performance.now());
      const e = new FormData(),
        {
          pageNav: t,
          jsTime: r
        } = (e => {
          if (void 0 !== window.performance && "function" == typeof window.performance.getEntriesByType) {
            const t = window.performance.getEntriesByType("navigation")[0];
            return Le = Le || window.performance.now() - e, Le > 0 ? {
              pageNav: t,
              jsTime: Le
            } : {};
          }
          return {};
        })(this.performanceStartTime);
      null != r && (e.append("pt", r), void 0 !== t && void 0 !== t.domainLookupEnd && (e.append("pdns", t.domainLookupEnd - t.domainLookupStart), e.append("pcon", t.connectEnd - t.connectStart), e.append("pfet", t.responseEnd - t.fetchStart), e.append("pnet", t.responseEnd - t.requestStart), e.append("pttf", t.responseStart - t.requestStart), e.append("pint", t.domInteractive), e.append("pdcl", t.domContentLoadedEventEnd), e.append("pdclf", t.duration))), e.append("wv", this.webVitals.hasWebVitals()), e.append("lcp", this.webVitals.lcp), e.append("fid", this.webVitals.fid), e.append("cls", this.webVitals.cls), e.append("fcp", this.webVitals.fcp), e.append("tbt", this.webVitals.tbt), e.append("inp", this.webVitals.inp), this.webVitals.lcpOffender && e.append("lcp_o", this.webVitals.lcpOffender), this.webVitals.clsOffender && (e.append("cls_o", this.webVitals.clsOffender), e.append("cls_o_s", this.webVitals.clsOffenderStatus)), this.webVitals.inpOffender && (e.append("inp_o", this.webVitals.inpOffender), e.append("inp_o_s", this.webVitals.inpOffenderStatus)), Object.entries(this.getBasicConfig()).forEach(t => {
        let [r, n] = t;
        null != n && e.append(r, n);
      });
      const n = this.getUserSegments();
      null != n && n.length && e.append("useg", JSON.stringify(n)), e.append("a", this.tick), e.append("n", Ce());
      const i = Ce() - this.startPageTime;
      e.append("et", this.getEngagedTime()), e.append("l", i), e.append("ps", this.startPageTime), e.append("ut", this.getUserType()), e.append("sui", this.getSiteUserId() || ""), e.append("sc", xt(0 === this.tick)), e.append("fv", this.getFirstVisit()), e.append("lv", this.getLastVisit()), e.append("uvar", JSON.stringify(this.getUserVars())), e.append("svar", JSON.stringify(this.getSessionVars())), e.append("pvar", JSON.stringify(this.getPageVars())), this.ecommerceData && e.append("stock", this.ecommerceData.stock), (this.publishTime || this.updateTime) && (e.append("uti", this.updateTime), e.append("pti", this.publishTime)), e.append("ads", this.adsTracker.getAds());
      const o = this.adsTracker.getAdUnits();
      o.length > 0 && e.append("aups", o);
      const {
        conv: a,
        conv_i: s
      } = this.conversion || {};
      if (a && (e.append("conv", a), s && e.append("conv_i", s), this.conversion = null), this.recirculationSource && e.append("rs", this.getRecirculationSource()), e.append("uc", await this.getUserConsent()), this.consentManager.getConsent("personalization")) {
        const t = Ve(this.accountId);
        if (t) {
          const {
            rfv: r,
            v: n,
            r: i,
            f: o
          } = t;
          e.append("rfv", r), e.append("rfv_v", n), e.append("rfv_r", i), e.append("rfv_f", o);
        }
      }
      return this.tracker.pageType && e.append("pageType", qr(this.tracker.pageType)), await this.track(e), this.tick++, e;
    }
    async collectAndTrackPage() {
      for (; window[this.trackerName].data.length > 0;) {
        const e = window[this.trackerName].data.shift();
        "userType" === e[0] ? this.setUserType(e[1]) : "userId" === e[0] ? this.setSiteUserId(e[1]) : "setCookies" === e[0] ? this.setCookies(e[1]) : "adRendered" === e[0] ? this.adsTracker.trackAdEventLegacy("slotRenderEnded", e[1], e[2]) : "userVar" === e[0] ? this.setUserVar(e[1], e[2]) : "sessionVar" === e[0] ? this.setSessionVar(e[1], e[2]) : "pageVar" === e[0] ? this.setPageVar(e[1], e[2]) : "trackConversion" === e[0] ? this.trackConversion(e[1], e[2]) : "getRFV" === e[0] && this.getRFV(e[1]);
      }
      return await this.trackPageInternal();
    }
    async trackPage() {
      (e => {
        let t = -1;
        for (let e = 0; e < Fr.length; e += 1) "lastEvent" === Fr[e][0] && (t = e);
        -1 !== t && Fr.splice(t, 1);
      })();
      let e = null;
      return 0 !== this.tick && "hidden" === document.visibilityState || (e = await this.collectAndTrackPage()), ((e, t) => {
        const r = Object.keys(xr).map(e => parseInt(e, 10)).sort((e, t) => e - t).reduce((t, r) => null === t && r > e ? r : t, null);
        r && _r.callOnTimer(t, xr[r]);
      })(this.tick, () => this.trackPage()), e;
    }
    getRFV(e) {
      if (!this.consentManager.getConsent("personalization")) return e ? e(Re) : Re;
      const {
        userIdPromise: t,
        actualUserId: r
      } = this.getUserId();
      return e ? t.then(t => (async (e, t, r, n) => {
        const i = Ve(e);
        return i ? (r(i), i) : ((e, t, r, n) => new Promise(i => {
          const o = Me(e, t, n);
          V("https://compassdata.mrf.io/rfv.php", o, {
            needsXHR: !0
          }, t => {
            const n = Ne(JSON.parse(t), e);
            r(n), i(n);
          });
        }))(e, t, r, n);
      })(this.accountId, t, e, this.getSiteUserId())) : (console.error("Deprecated: please pass a callback to the function getRFV"), ((e, t, r) => Ve(e) || ((e, t, r) => {
        const n = new XMLHttpRequest();
        return n.open("POST", "https://compassdata.mrf.io/rfv.php", !1), n.send(Me(e, t, r)), Ne(JSON.parse(n.responseText), e);
      })(e, t, r))(this.accountId, r, this.getSiteUserId()));
    }
    async trackNewPage(e) {
      return this.tick > 0 && (await this.trackPageInternal(), this.previousPage = "" + this.canonical), H = {}, await this.initialize(e);
    }
    on(e, t) {
      this.dispatcher.on(e, t);
    }
    setupConsent(e) {
      this.consentManager.onChange((() => {
        this.consentManager.getConsent("cookies") && this.saveCookies({
          force: !0
        });
      }).bind(this));
      const t = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          useCookies: t
        } = e;
        if (Se(t)) return t;
        const r = be("__nrCookieConsent");
        return Se(r) ? r : null;
      }(e);
      null !== t && this.consentManager.setConsent("cookies", t);
    }
    async getPaywallScore() {
      const {
        actualUserId: e
      } = this.userIdManager.getUserId();
      return this.consentManager.getConsent("personalization") ? (async e => {
        const t = "".concat(De, "?").concat(xe(e)),
          r = await window.fetch(t);
        if (!r.ok) throw new Error(r.status);
        const {
          score: n
        } = await r.json();
        return n;
      })({
        accountId: this.accountId,
        userId: e,
        siteUserId: this.getSiteUserId()
      }) : Ie;
    }
    async predict() {
      const {
          actualUserId: e
        } = this.userIdManager.getUserId(),
        t = await (async e => {
          const t = "".concat(_e, "?").concat(xe(e)),
            r = await fetch(t);
          if (!r.ok) throw new Error(r.status);
          return await r.json();
        })({
          accountId: this.accountId,
          userId: e,
          siteUserId: this.getSiteUserId(),
          totalPageviews: this.getTotalPageviews(),
          sessionDuration: this.getSessionDuration()
        });
      return t.probability && zr("predict:probability", t.probability), t;
    }
    async setRecirculationTracking() {
      return this.setRecirculationTrackingInternal(!0);
    }
    async setRecirculationTrackingInternal() {
      var e = this;
      let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        r = !0;
      const n = Promise.race([this.synchronizer.wait("experimentation").then(e => e ? this.synchronizer.wait("headline") : Promise.resolve()), this.synchronizer.wait("experimentationFailed"), this.synchronizer.wait("experimentationDisabled").then(() => (r = !1, Promise.resolve())), new Promise(e => setTimeout(e, 3e3))]),
        [{
          layouts: i
        }] = await Promise.all([this.tracker.rm, n]);
      await async function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (() => {
          if (window.performance) {
            if (window.performance.navigation && 1 === window.performance.navigation.type) return !0;
            if ("function" == typeof window.performance.getEntriesByType) return window.performance.getEntriesByType("navigation").map(e => e.type).includes("reload");
          }
          return !1;
        })() && Qe("refresh", e), await Et(), function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
              observeDomChanges: r = !0,
              layouts: n = []
            } = t,
            i = r ? jt : St;
          Je().forEach(t => t.shadowRoot && i(e, t.shadowRoot, {
            parentNode: t,
            layouts: n
          })), i(e, document.body, {
            layouts: n
          });
        }(t, r);
      }(K(this.tracker.pageType), function (t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e.trackRecirculationEvent(t, n.map(e => {
          let {
            module: t,
            links: r,
            position: n
          } = e;
          return {
            n: t,
            e: r,
            p: n
          };
        }), "", i);
      }, {
        observeDomChanges: t,
        layouts: i
      }), this.synchronizer.resolve("recirculationTracking");
    }
    setRecirculationConfig() {
      let {
        modules: e = [],
        layouts: t = [],
        blacklist: r = [],
        redirectionLinks: n = []
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.tracker.rm.set(i => {
        let {
          modules: o = [],
          layouts: a = [],
          blacklist: s = [],
          redirectionLinks: c = []
        } = i;
        const u = {
          blacklist: _n([...s, ...r]),
          redirectionLinks: _n([...c, ...n]),
          modules: _n([...o, ...e]),
          layouts: _n([...a, ...t])
        };
        return this.dispatcher.dispatch("recirculationConfigChanged", Ln({}, u)), u;
      }), async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
        e.modules.length && (await Et(), Tt(e), G(() => {
          Tt(e) && t();
        }), t());
      }({
        modules: e,
        blacklist: r,
        redirectionLinks: n
      }, () => {
        this.setRecirculationTrackingInternal(!1);
      });
    }
    getRecirculationConfig() {
      return this.tracker.rm;
    }
    setRecirculationModules(e) {
      this.setRecirculationConfig({
        modules: e
      });
    }
    setConversionButtons() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      e && e.length && function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        An(e, t), G(() => {
          An(e, t);
        });
      }(e, this.trackConversion.bind(this));
    }
    addUserSegment(e) {
      const t = Ee(this.permanentCookie, "userSegments") || [];
      this.permanentCookie.userSegments = [...t, e], this.markAsModified("permanent"), this.saveCookies();
    }
    setUserSegments(e) {
      this.permanentCookie.userSegments = e, this.markAsModified("permanent"), this.saveCookies();
    }
    removeUserSegment(e) {
      this.permanentCookie.userSegments = this.permanentCookie.userSegments ? this.permanentCookie.userSegments.filter(t => t !== e) : [], this.markAsModified("permanent"), this.saveCookies();
    }
    clearUserSegments() {
      this.permanentCookie.userSegments = [], this.markAsModified("permanent"), this.saveCookies();
    }
    getUserSegments() {
      var e;
      return (null === (e = this.permanentCookie) || void 0 === e ? void 0 : e.userSegments) || [];
    }
    getContext(e) {
      var t;
      return e ? null === (t = this.contextVariables) || void 0 === t ? void 0 : t[e] : this.contextVariables;
    }
    setContext() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.contextVariables = e;
    }
  }
  function Nn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Mn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Nn(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Vn extends Rn {
    constructor(e, t, r) {
      window.__mrfCompass = Mn(Mn({
        data: []
      }, window.__mrfCompass || {}), e), super(e, t, r);
    }
    initialize() {}
    getEndpointDomain() {
      return "https://events.newsroom.bi";
    }
    getRFV(e) {
      var t, n;
      null === (t = window) || void 0 === t || null === (n = t.top) || void 0 === n || n.marfeel.cmd.push(["compass", function () {
        var t = r(function* (t) {
          t.getRFV(e);
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      }()]);
    }
    getTrackingCommonData() {
      return r(function* () {
        return new Promise(e => {
          var t, n;
          null === (t = window) || void 0 === t || null === (n = t.top) || void 0 === n || n.marfeel.cmd.push(["compass", function () {
            var t = r(function* (t) {
              return e(yield t.getTrackingCommonData());
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          }()]);
        });
      })();
    }
  }
  function Un(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function qn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Un(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Un(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Fn = "mrfhud";
  class zn extends Rn {
    constructor(e, t, n) {
      var i, o;
      window.__mrfCompass = qn(qn({
        data: [],
        rm: {
          lazy: !0
        }
      }, window.__mrfCompass || {}), e), super(e, t, n), function (e) {
        O.apply(this, arguments);
      }(this, (o = Fn, r(function* () {
        return !!new URL(window.location.href).hash.includes(o);
      })), k(Fn), k("activate-overlay"), (i = "".concat("compass-overlay", "_").concat(e.accountId), r(function* () {
        var e = yield T(i);
        return e && e.active;
      })));
    }
  }
  d("compass", ["consent", "synchronizer"], function () {
    var e = r(function* (e, t) {
      var [r, n] = t;
      yield y(e, r, n, 1e3);
      try {
        var i;
        if (window.top !== window.self && (null === (i = window.top) || void 0 === i ? void 0 : i.marfeel.config.accountId) === e.accountId) return Promise.resolve(Vn);
      } catch (e) {}
      return Promise.resolve(zn);
    });
    return function (t, r) {
      return e.apply(this, arguments);
    };
  }());
  var Bn = a(181),
    Gn = a.n(Bn),
    Hn = function (e) {
      return e.INLINE = "inline", e.FLOWCARDS = "flowcards", e.COMPASS = "compass", e.RECIRCULATION = "recirculation", e.CONVERSIONS = "conversions", e.CONTENT = "content", e.AD_MANAGER = "adManager", e.EXPERIMENTS = "experiments", e.EXPERIMENTATION = "experimentation", e.GOOGLE_OPTIMIZE = "googleOptimize", e.PIANO = "piano", e.GOAL_TRACKING = "goalTracking", e.LOADER = "loader", e.ECOMMERCE = "ecommerce", e.MULTIMEDIA = "multimedia", e.GENERIC_GOAL_TRACKING = "genericGoalTracking", e.SITE_CONTEXT_SYNCHRONIZER = "siteContextSynchronizer", e.SOCIAL_ACQUISITION = "socialAcquisition", e.CONTEXT_EXPOSITION = "contextExposition", e.APP_BANNER = "appBanner", e.MARFEEL_OPTIMIZER = "marfeelOptimizer", e.MARFEEL_PAY = "marfeelPay", e;
    }({}),
    Kn = function () {
      var e = r(function* (e) {
        var t = encodeURIComponent(e.sessionReferrer || "");
        return "referrer=".concat(t);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Jn = function () {
      var e = r(function* (e) {
        var t,
          r = Object.assign({}, e.targeting, (t = e.compassVars) ? [...t.page, ...t.user, ...t.session].reduce((e, t) => {
            var [r, n] = t;
            return e[r] = n, e;
          }, {}) : {});
        return 0 === Object.keys(r).length ? "" : Object.keys(r).filter(e => void 0 !== r[e]).map(e => [e, encodeURIComponent(r[e])].join("=")).join("&");
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Wn = "mrfgeo=",
    Xn = function () {
      var e = r(function* (e) {
        return "geo=".concat((e => {
          if (e) {
            var t = e.search.replace("?", "").split("&").find(e => e.startsWith(Wn));
            if (t) return t.replace(Wn, "");
          }
          return null;
        })(e.location) || "__INJECT_GEO__");
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    $n = function () {
      var e = r(function* (e) {
        return isNaN(e.siteId) ? "" : "site_id=".concat(e.siteId);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Yn = function () {
      var e = r(function* (e) {
        var t = e.userId;
        return t && "" !== t ? "client_id=".concat(t) : "";
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  function Qn(e, t) {
    if ("provider" !== e) return t;
  }
  var Zn = function () {
      var e = r(function* (e) {
        var t, r;
        if (null === (t = e.externalExperiences) || void 0 === t || null === (r = t[Hn.FLOWCARDS]) || void 0 === r || !r.length) return "";
        var n = e.externalExperiences[Hn.FLOWCARDS].map(e => {
            var t = e;
            return "object" == typeof e.renderProps && (t.renderProps = JSON.stringify(e.renderProps)), t;
          }),
          i = encodeURIComponent(JSON.stringify(n, Qn));
        return "dynamic_flowcards=".concat(i);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ei = e => {
      try {
        return decodeURIComponent(e), !0;
      } catch (e) {
        return !1;
      }
    },
    ti = function () {
      var e = r(function* (e) {
        var t = e.location;
        return t ? t.search.replace("?", "").split("&").filter(e => e.startsWith("utm") || e.startsWith("usqp")).filter(ei).join("&") : "";
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ri = function () {
      var e = r(function* (e) {
        return isNaN(e.userType) ? "" : "user_type=".concat(e.userType);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ni = function () {
      var e = r(function* (e) {
        var t = encodeURIComponent(e.recirculationSource || "");
        return "recirculation_source=".concat(t);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ii = function () {
      var e = r(function* (e) {
        var t = encodeURIComponent(e.referrer || "");
        return "previous_page=".concat(t);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    oi = function () {
      var e = r(function* (e) {
        return isNaN(e.sessionDuration) ? "" : "session_duration=".concat(e.sessionDuration);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ai = function () {
      var e = r(function* (e) {
        return isNaN(e.totalPageViews) ? "" : "pageviews=".concat(e.totalPageViews);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    si = function () {
      var e = r(function* (e) {
        return isNaN(e.firstVisit) ? "" : "first_visit=".concat(e.firstVisit);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  function ci(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ui(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ci(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ci(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var li = "croupier-experiments-entry";
  function di() {
    return (di = r(function* (e, t) {
      if (0 === e.length) return !1;
      var r = e.reduce((e, r) => {
        var n = r.name,
          i = r.group;
        return t.setUserVar("".concat("mrfExperiment_").concat(n), i.toString()), ui(ui({}, e), {}, {
          [n]: i
        });
      }, {});
      return I(li, r);
    })).apply(this, arguments);
  }
  function pi() {
    return (pi = r(function* () {
      var e = yield T(li);
      return Object.entries(e || {}).map(e => {
        var [t, r] = e;
        return {
          name: t,
          group: r
        };
      });
    })).apply(this, arguments);
  }
  var fi = function () {
      var e = r(function* (e, t) {
        var r = {
          handlerName: "experiments",
          handled: !1
        };
        return e.experiments && (r.handled = yield function (e, t) {
          return di.apply(this, arguments);
        }(e.experiments, t.compassSDK)), Promise.resolve(r);
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    hi = function () {
      var e = r(function* () {
        var e = yield function () {
          return pi.apply(this, arguments);
        }();
        return e.length > 0 ? "experiments=".concat(e.map(e => "".concat(e.name, ",").concat(e.group)).join(",")) : "";
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    mi = 0,
    vi = 1,
    gi = 7,
    yi = 4,
    bi = 7,
    wi = 864e5;
  function Oi(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
      r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate() + yi - (t.getUTCDay() || bi))),
      n = new Date(Date.UTC(r.getFullYear(), mi, vi));
    return {
      week: Math.ceil(((r.getTime() - n.getTime()) / wi + 1) / gi),
      year: r.getUTCFullYear()
    };
  }
  var ki = function (e) {
    return e.impression = "impression", e.close = "close", e;
  }({});
  function Pi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Si(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Pi(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var ji,
    Ei,
    Ci,
    Ti = "croupier-experiences-count-entry",
    Ai = (e, t) => {
      var r = Si({
          total: {
            impression: 0,
            close: 0
          }
        }, e || {}),
        n = "w".concat(Ci.week);
      return r[n] = r[n] || {
        impression: 0,
        close: 0
      }, r[n][t]++, r;
    },
    Ii = (e, t) => {
      var r = Si({
        total: {
          impression: 0,
          close: 0
        }
      }, e || {});
      return r.total[t]++, r[Ei.getMonth()] = ((e, t) => {
        var r = Si({
            total: {
              impression: 0,
              close: 0
            }
          }, e || {}),
          n = Ei.getDate();
        return r[n] = r[n] || {
          impression: 0,
          close: 0
        }, r[n][t]++, r.total[t]++, r;
      })(r[Ei.getMonth()], t), r;
    };
  function Di() {
    return void 0 === ji && (Ei = new Date(Date.now()), Ci = Oi(Ei), ji = T(Ti).then(e => e || {})), ji;
  }
  function _i(e, t) {
    return Di().then(r => {
      r[e] = function (e, t) {
        var r = Si({
          total: {
            impression: 0,
            close: 0
          },
          last: {
            impression: 0,
            close: 0
          }
        }, e || {});
        return r.total[t]++, r[Ei.getFullYear()] = Ii(r[Ei.getFullYear()], t), r[Ci.year] = Ai(r[Ci.year], t), r.last[t] = Number(Date.now()), r;
      }(r[e], t), I(Ti, r);
    });
  }
  var xi = function (e) {
      return e.lifetime = "lifetime", e.month = "month", e.week = "week", e.day = "day", e;
    }(xi || {}),
    Li = function (e) {
      return e.last = "last", e;
    }(Li || {}),
    Ri = e => {
      if (!e) return 0;
      var t = Date.now() - e;
      return Math.floor(t / 1e3);
    },
    Ni = (e, t, r) => {
      var {
        impression: n,
        close: i
      } = r;
      n > 0 && e.push(t, String(n)), i > 0 && e.push("".concat("c_").concat(t), String(i));
    },
    Mi = function () {
      var e = r(function* () {
        return Di().then(e => {
          var t = Object.entries(e).reduce((e, t) => {
            var [r, n] = t,
              i = [];
            if (!n || 0 === n.total.impression) return e;
            !function (e, t) {
              Ni(e, xi.lifetime, t.total);
            }(i, n);
            var o = new Date(Date.now()),
              a = Oi(o),
              s = n[o.getFullYear()],
              c = n[a.year],
              u = null == s ? void 0 : s[o.getMonth()],
              l = null == u ? void 0 : u[o.getDate()];
            return function (e, t) {
              t && Ni(e, xi.month, t.total);
            }(i, u), function (e, t, r) {
              if (t) {
                var n = t["w".concat(r.week)];
                n && Ni(e, xi.week, n);
              }
            }(i, c, a), function (e, t) {
              t && Ni(e, xi.day, t);
            }(i, l), ((e, t) => {
              t.last && Ni(e, Li.last, {
                impression: Ri(t.last.impression),
                close: Ri(t.last.close)
              });
            })(i, n), e.concat(r, i.join("|"));
          }, []);
          return t.length > 0 ? "user_experiences=".concat(t.join(",")) : "";
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    Vi = function () {
      var e = r(function* (e) {
        var t = e.pageTechnology ? e.pageTechnology : 0;
        return "page_technology=".concat(t);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Ui = function () {
      var e = r(function* (e) {
        var t = /hubspotutk=(.+?)(?:;|$)/.exec(e.cookies || "");
        return t ? "hubspot_utk=".concat(t[1]) : "";
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    qi = function () {
      var e = r(function* () {
        var e = yield T("compass-conversions-counter-entry");
        if (!e) return "";
        var t = Object.keys(e).map(t => "".concat(encodeURIComponent(t), ",").concat(e[t]));
        return "".concat("conversions", "=").concat(t.join(","));
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    Fi = function () {
      var e,
        t = arguments.length > 1 ? arguments[1] : void 0;
      return null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(t, "").split("&").find(e => e.startsWith("mrfexperiences=") || e.startsWith("mrfexp="))) || void 0 === e ? void 0 : e.split("=")[1];
    },
    zi = e => {
      if (e) {
        var t = Fi(e.hash, "#") || Fi(e.search, "?");
        if (t) return t;
      }
      return null;
    },
    Bi = function () {
      var e = r(function* (e) {
        var t = e.experienceId;
        return t && "" !== t ? "id=".concat(t) : "";
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Gi = function (e) {
      return e["2G"] = "2g", e["3G"] = "3g", e["4G"] = "4g", e;
    }(Gi || {}),
    Hi = {
      [Gi["2G"]]: 70,
      [Gi["3G"]]: 750,
      [Gi["4G"]]: Number.MAX_VALUE
    },
    Ki = "mrf-connection-speed",
    Ji = [1059, 1659, 2223, 2224, 2225, 2335, 2336, 2337, 2338, 2339, 2340],
    Wi = function () {
      var e = r(function* (e) {
        if (!window.performance || !Ji.includes(Number(e.siteId) || 0)) return "";
        var t = [...window.performance.getEntriesByType("navigation"), ...window.performance.getEntriesByType("resource")].filter(e => e.transferSize > 1e4);
        if (!t.length) {
          var {
            connection_kbps: r,
            connection_type: n
          } = yield T(Ki);
          return r && n ? "connection_kbps=".concat(r, "&connection_type=").concat(n) : "";
        }
        var i = t.reduce((e, t) => t.encodedBodySize > e.encodedBodySize ? t : e),
          o = i.encodedBodySize / 1e3,
          a = i.responseEnd - i.responseStart,
          s = Math.round(8 * o / (a / 1e3)),
          c = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e < Hi[Gi["2G"]] ? Gi["2G"] : e < Hi[Gi["3G"]] ? Gi["3G"] : Gi["4G"];
          }(s);
        return I(Ki, {
          connection_kbps: s,
          connection_type: c
        }), "connection_kbps=".concat(s, "&connection_type=").concat(c);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Xi = function () {
      var e = r(function* (e) {
        return e.hasConsent ? "" : "".concat("visitor_frequency", "=").concat("6");
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  function $i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Yi(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $i(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $i(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Qi = "croupier-user-activity-entry",
    Zi = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 ? arguments[1] : void 0;
      if (void 0 === t) return e;
      var r = [...e.filter(e => e !== t), t];
      return r.length > 100 ? r.slice(1) : r;
    };
  function eo() {
    return to.apply(this, arguments);
  }
  function to() {
    return (to = r(function* () {
      return (yield T(Qi)) || {
        sites: {}
      };
    })).apply(this, arguments);
  }
  function ro() {
    return (ro = r(function* (e, t) {
      var r,
        n = yield eo(),
        i = Yi(Yi({}, n), {}, {
          sites: Yi(Yi({}, n.sites), {}, {
            [e]: Yi(Yi({}, n.sites[e]), {}, {
              readEditorialIds: Zi(null === (r = n.sites[e]) || void 0 === r ? void 0 : r.readEditorialIds, t.editorialId)
            })
          })
        });
      return I(Qi, i);
    })).apply(this, arguments);
  }
  var no = function () {
      var e = r(function* (e) {
        var {
          siteId: t
        } = e;
        if (void 0 !== t) {
          var r,
            n,
            i = (e => e.sort((e, t) => e - t).map((e, t, r) => {
              var n = e;
              return t > 0 && (n -= r[t - 1]), n;
            }))(null !== (r = null === (n = (yield eo()).sites[t]) || void 0 === n ? void 0 : n.readEditorialIds) && void 0 !== r ? r : []);
          if (i.length > 0) return "red=".concat(i.join(","));
        }
        return "";
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    io = {
      site_id: $n,
      client_id: Yn,
      user_type: ri,
      canonical_url: e => {
        var t,
          r = e.canonical || (null === (t = e.location) || void 0 === t ? void 0 : t.href) || "",
          n = encodeURIComponent(r);
        return Promise.resolve("canonical_url=".concat(n));
      },
      referrer: Kn,
      recirculation_source: ni,
      previous_page: ii,
      targeting: Jn,
      geo: Xn,
      dynamic_flowcards: Zn,
      utms: ti,
      session_duration: oi,
      pageviews: ai,
      experiments: hi,
      first_visit: si,
      user_experiences: Mi,
      page_technology: Vi,
      hubspot_utk: Ui,
      conversions: qi,
      debug_experiences: e => {
        var t = zi(e.location);
        return Promise.resolve(t ? "debug_experiences=".concat(t) : "");
      },
      experience_id: Bi,
      connection_speed: Wi,
      visitor_frequency: Xi,
      red: no
    },
    oo = function () {
      var e = r(function* (e, t, r) {
        var n = yield Promise.all((e => {
          var t = Object.entries(io);
          return e ? (e.add("site_id"), e.add("page_technology"), t.filter(t => {
            var [r] = t;
            return e.has(r);
          })) : t;
        })(r).map(t => {
          var [r, n] = t;
          return n(e);
        }));
        return "".concat(t, "?").concat(n.filter(e => !!e).join("&"));
      });
      return function (t, r, n) {
        return e.apply(this, arguments);
      };
    }();
  function ao(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function so(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ao(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ao(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function co(e) {
    var t = e[Hn.FLOWCARDS];
    return t && !t.actions ? so(so({}, e), {}, {
      [Hn.FLOWCARDS]: so(so({}, t), {}, {
        actions: t.cards
      })
    }) : e;
  }
  function uo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function lo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? uo(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var po = function (e) {
    return e.POST_MESSAGE = "postmessage", e.HTTP = "http", e;
  }({});
  function fo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ho(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? fo(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var mo = e => e.reduce((e, t) => ho(ho({}, e), {}, {
      [t.origin]: t.goal
    }), {}),
    vo = function () {
      var e = r(function* (e, t) {
        var r = {
          handlerName: "content",
          handled: !1
        };
        return t.config.accountId && e.content && (r.handled = yield function (e, t) {
          return ro.apply(this, arguments);
        }(t.config.accountId, e.content)), Promise.resolve(r);
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    go = a(539);
  function yo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? yo(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var wo,
    Oo = (e, t) => {
      var r;
      if ("object" == typeof e) {
        r = e;
        for (var n = t.split("."), i = 0; i < n.length; i++) {
          var o, a, s, c, u;
          r = i === n.length - 1 && "function" == typeof (null === (o = r) || void 0 === o ? void 0 : o[n[i]]) ? null === (a = r) || void 0 === a || null === (s = (c = a)[n[i]]) || void 0 === s ? void 0 : s.call(c) : null === (u = r) || void 0 === u ? void 0 : u[n[i]];
        }
      }
      return r;
    },
    ko = (e, t) => void 0 === t || void 0 !== e && "*" === t || e === t || "object" == typeof e && "object" == typeof t && Object.entries(t).map(t => {
      var [r, n] = t;
      return ko(e[r], n);
    }).every(Boolean),
    Po = (e, t) => {
      switch (t.type) {
        case "composite":
          return Array.isArray(t.value) ? t.value.map(t => Po(e, t)) : Object.entries(t.value).reduce((t, r) => {
            var [n, i] = r;
            return bo(bo({}, t), {}, {
              [n]: Po(e, i)
            });
          }, {});
        case "lookup":
          return t.value ? Oo(e, t.value) : e;
        default:
          return t.value;
      }
    },
    So = e => {
      var t,
        r,
        n = e.hasTrackedAds();
      return e.getEngagedTime() >= 5 && (n || null === (t = window.googletag) || void 0 === t || null === (r = t.cmd) || void 0 === r || r.push(() => {
        e.setPageVar("mrf::optimized", "true"), window.googletag.pubads().refresh();
      }), !0);
    };
  function jo() {
    return (jo = r(function* (e) {
      var t = yield oo(e, "https://experiences.mrf.io/recommenderexperience/render.json", new Set(["canonical_url", "client_id", "experience_id"])),
        r = yield fetch(t),
        n = yield r.json();
      return null == n ? void 0 : n.recommendation;
    })).apply(this, arguments);
  }
  !function (e) {
    e.AMP_DOCUMENT = "AMPDocument", e.WIDGET_PROVIDER = "WidgetProvider", e.AD_SERVER_PROVIDER = "AdServerProvider", e.TEXT_HTML = "TextHTML", e.CONTAINER = "Container";
  }(wo || (wo = {}));
  var Eo = e => e.type === wo.AMP_DOCUMENT,
    Co = e => e.type === wo.TEXT_HTML;
  function To(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ao(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? To(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : To(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Io = "mrf-sdk-hero-element-src",
    Do = "mrf-sdk-hero-element-height",
    _o = (e, t) => {
      if (e.has(Io)) {
        var r = {
          src: e.get(Io)
        };
        return e.has(Do) && (r.height = parseInt(e.get(Do), 10)), Ao(Ao({}, t), {}, {
          heroElement: r
        });
      }
      return t;
    };
  function xo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Lo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xo(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Ro = "mrf-sdk-canonical-url",
    No = (e, t) => {
      if (e.has(Ro)) {
        var r = {
          url: e.get(Ro)
        };
        return Lo(Lo({}, t), {}, {
          canonical: r
        });
      }
      return t;
    },
    Mo = e => e.includes("marfeelrecommenderexperienceengine.mrf.io");
  function Vo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Uo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Vo(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function qo() {
    return (qo = r(function* (e) {
      try {
        var {
          headers: t
        } = yield fetch(e.url);
        return function (e) {
          var t = [_o];
          return Mo(e.url) || t.push(No), t;
        }(e).reduce((e, r) => r(t, e), {});
      } catch (t) {
        throw new Error("".concat(t, "::").concat(e.url));
      }
    })).apply(this, arguments);
  }
  function Fo(e) {
    return zo.apply(this, arguments);
  }
  function zo() {
    return zo = r(function* (e) {
      return Object.entries(e).map(function () {
        var e = r(function* (e) {
          var t,
            r,
            [n, i] = e;
          return r = i.content, (Eo(r) || Co(r)) && (t = yield function (e) {
            return qo.apply(this, arguments);
          }(i.content)), [n, i, t];
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      }()).reduce(function () {
        var e = r(function* (e, t) {
          var r,
            n = yield e,
            [i, o, a] = yield t;
          return a && (r = function (e, t) {
            return Uo(Uo({}, e), {}, {
              features: Uo(Uo({}, e.features), t)
            });
          }(o, a)), n[i] = r || o, n;
        });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(), Promise.resolve({}));
    }), zo.apply(this, arguments);
  }
  function Bo(e, t) {
    return r => {
      var n = r.detail;
      (null == n ? void 0 : n.owner) === t && e({
        uri: n.uri
      });
    };
  }
  var Go = [];
  function Ho() {
    return (Ho = r(function* (e, t) {
      var r = Go.map(r => r(e, t));
      return Promise.all(r).then(() => Promise.resolve());
    })).apply(this, arguments);
  }
  var Ko = function () {
    var e = r(function* (e, t, r) {
      var n,
        {
          userIdPromise: i
        } = t.getUserId(),
        o = yield i,
        a = yield t.getUserConsent();
      return function (e) {
        return function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return oo(e, "https://flowcards.mrf.io/json/experiences", t.length > 0 ? new Set(t) : void 0);
        }(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).then(fetch).then(e => e.json()).then(co);
      }({
        pageTechnology: t.getPageType(),
        canonical: (null === (n = document.querySelector('link[rel="canonical"]')) || void 0 === n ? void 0 : n.getAttribute("href")) || void 0,
        location: new URL(window.location.toString()),
        siteId: e.accountId,
        externalExperiences: e.experiences,
        targeting: e.targeting,
        userId: o,
        userType: t.getUserType(),
        firstVisit: t.getFirstVisit(),
        recirculationSource: t.getRecirculationSource(),
        referrer: t.getReferrer(),
        sessionDuration: t.getSessionDuration(),
        sessionReferrer: t.getSessionReferrer(),
        totalPageViews: t.getTotalPageviews(),
        cookies: document.cookie,
        compassVars: {
          user: t.getUserVars(),
          session: t.getSessionVars(),
          page: t.getPageVars()
        },
        hasConsent: a
      }, r);
    });
    return function (t, r, n) {
      return e.apply(this, arguments);
    };
  }();
  function Jo(e, t) {
    var r = document.createElement("script");
    return r.setAttribute("type", "application/javascript"), r.setAttribute("src", e), t && (r.id = t), r;
  }
  function Wo(e) {
    return (t, r) => {
      var n = Jo(t, r);
      n.setAttribute("type", "module"), e.appendChild(n);
    };
  }
  function Xo(e) {
    return (t, r) => {
      var n = Jo(t, r);
      n.noModule = !0, n.async = !0, n.defer = !0, e.appendChild(n);
    };
  }
  function $o(e) {
    return (t, r) => {
      var n = Jo(t, r);
      e.appendChild(n);
    };
  }
  function Yo(e) {
    return "marfeel-".concat(e);
  }
  function Qo(e) {
    return function (e) {
      return document.querySelector(Yo(e));
    }(e) || function (e) {
      return document.body.appendChild(document.createElement(Yo(e)));
    }(e);
  }
  var Zo,
    ea = function () {
      var e = r(function* (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            onInteraction: r = !0,
            strategy: n = "async"
          } = t;
        return (e => {
          var t = "string" != typeof e ? e.module : e;
          return !!document.querySelector('script[src="'.concat(t, '"]'));
        })(e) ? Promise.resolve() : (r ? function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e4,
            r = ["touchstart", "click", "scroll"];
          return new Promise(n => {
            var i = () => {
              r.forEach(e => ((e, t) => {
                document.removeEventListener(e, t);
              })(e, i)), window.clearTimeout(e), n();
            };
            r.forEach(e => ((e, t) => {
              document.addEventListener(e, t, {
                passive: !0
              });
            })(e, i)), e = window.setTimeout(i, t);
          });
        }() : Promise.resolve()).then(() => {
          "sync" === n ? "string" != typeof e ? (function () {
            Wo(document.head)(...arguments);
          }(e.module), function () {
            Xo(document.head)(...arguments);
          }(e.nomodule)) : function () {
            $o(document.head)(...arguments);
          }(e) : "string" != typeof e ? (function () {
            Wo(document.body)(...arguments);
          }(e.module), function () {
            Xo(document.body)(...arguments);
          }(e.nomodule)) : function () {
            $o(document.body)(...arguments);
          }(e);
        });
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ta = function () {
      var e = r(function* (e) {
        var t,
          r = null === (t = e.experimentation) || void 0 === t ? void 0 : t.actions,
          n = {
            handlerName: Hn.EXPERIMENTATION,
            handled: !1
          };
        return r && (yield Promise.all(Object.values(r).map(e => {
          var {
              url: t
            } = e,
            r = new URL(t),
            n = r.searchParams.get("experimentType");
          if (null !== n && document.querySelector('[src*="experimentType='.concat(n, '"]'))) return Promise.resolve();
          var i = new URL(t);
          return r.searchParams.append("version", "esnext"), i.searchParams.append("version", "legacy"), ea({
            module: r.toString(),
            nomodule: i.toString()
          }, {
            onInteraction: !1,
            strategy: "sync"
          });
        })), n.handled = !0), Promise.resolve(n);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  var ra = function () {
    var e = r(function* () {
      return new Promise(e => {
        "complete" !== document.readyState ? document.addEventListener("readystatechange", () => e()) : e();
      });
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  function na(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ia(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? na(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : na(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var oa = function () {
    var e = r(function* (e, t, r) {
      var n = t[e] || {
          actions: {}
        },
        i = n.actions || {},
        o = {
          handlerName: e,
          handled: !1
        };
      if (Object.keys(i).length > 0) {
        var a = ia(ia({}, n), {}, {
          actions: yield Fo(n.actions)
        });
        yield ra(), function (e, t) {
          var r = document.createElement("script");
          r.setAttribute("type", "application/json"), r.innerHTML = JSON.stringify(t);
          var n = Qo(e);
          n.innerHTML = "", n.appendChild(r), n.setAttribute("initialization", "inline");
        }(e, a), yield r(a), o.handled = !0;
      }
      return o;
    });
    return function (t, r, n) {
      return e.apply(this, arguments);
    };
  }();
  function aa(e, t) {
    return t.id || e;
  }
  function sa(e, t) {
    Object.entries(t.actions).forEach(t => {
      var [r, n] = t,
        i = function (e) {
          var t;
          return (null === (t = e.features.canonical) || void 0 === t ? void 0 : t.url) || (Eo(e.content) || Co(e.content) ? e.content.url : e.content.type === wo.WIDGET_PROVIDER || (e => e.type === wo.AD_SERVER_PROVIDER)(e.content) ? e.content.name : void 0);
        }(n);
      i && e.trackRecirculationEvent("elegible", [{
        n: aa(r, n),
        e: [i]
      }], "");
    });
  }
  var ca,
    ua,
    la = "//flowcards.mrf.io/statics/experience-web",
    da = "".concat(la, "/index.es2015.standalone.js"),
    pa = "".concat(la, "/index.es5.standalone.js"),
    fa = function () {
      var e = r(function* (e, t) {
        if (matchMedia("only screen and (min-width:800px)").matches) return {
          handlerName: Hn.FLOWCARDS,
          handled: !1
        };
        var {
          compassSDK: n
        } = t;
        return oa(Hn.FLOWCARDS, e, function () {
          var e = r(function* (e) {
            var t;
            sa(n, e), yield ea({
              module: da,
              nomodule: pa
            }), t = Qo(Hn.FLOWCARDS), Zo = [], t.addEventListener("snappointchange", e => {
              var {
                snapPoint: t,
                cardId: r
              } = e.detail;
              (function (e) {
                return "initial" === e || "active" === e;
              })(t) && !function (e) {
                return Zo.indexOf(e) > -1;
              }(r) && function (e) {
                Zo.push(e), _i(e, ki.impression);
              }(r);
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        }());
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    ha = (e, t) => e.includes(t),
    ma = "https://experiences.mrf.io/statics/inline-experiences",
    va = "".concat(ma, "/esnext/standalone.js"),
    ga = "".concat(ma, "/legacy/standalone.js"),
    ya = function () {
      var e = r(function* (e) {
        return oa(Hn.INLINE, e, function () {
          var e = r(function* (e) {
            var {
              actions: t = {}
            } = e;
            yield ea({
              module: va,
              nomodule: ga
            }, {
              onInteraction: !1
            }), (e => {
              ca = [], ua = [], Object.entries(e).forEach(e => {
                var t,
                  [r, n] = e;
                ha(ca, n.id) || (t = n.id, ca.push(t), _i(t, ki.impression));
              }), document.addEventListener("mrfCloseInline", e => {
                var t,
                  r = null === (t = e.detail) || void 0 === t ? void 0 : t.id;
                ha(ua, r) || (ua.push(r), _i(r, ki.close));
              });
            })(t);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        }());
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  function ba(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function wa(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ba(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ba(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Oa = function () {
      var e = r(function* (e) {
        var {
            loader: t = {
              actions: {}
            },
            multimedia: r = {
              actions: {}
            },
            ecommerce: n = {
              actions: {}
            }
          } = e,
          i = Object.values(wa(wa(wa({}, t.actions), r.actions), n.actions)),
          o = {
            handlerName: Hn.LOADER,
            handled: !1
          };
        return i.length && (Object.values(i).forEach(e => {
          var {
            moduleName: t,
            config: r
          } = e;
          window.marfeel.cmd.push(["loader", function (e) {
            e.load(t, r);
          }]);
        }), o.handled = !0), Promise.resolve(o);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ka = function () {
      var e = r(function* (e, t) {
        var {
            contextExposition: r
          } = e,
          n = (null == r ? void 0 : r.actions) || {},
          i = {
            handlerName: Hn.CONTEXT_EXPOSITION,
            handled: !1
          };
        return Object.keys(n).length && (i.handled = !0, Object.values(n).forEach(e => {
          var {
            contextVariables: r
          } = e;
          try {
            r && t.compassSDK.setContext(JSON.parse(r));
          } catch (e) {
            console.error("not valid JSON for the contextExposition experience");
          }
        })), Promise.resolve(i);
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    Pa = "closed",
    Sa = function () {
      var e = r(function* (e, t) {
        var r,
          n,
          i = yield t.wait("piano-offer");
        return !("purchase" !== i.offerType || ("inline" === i.displayMode ? (e.compassSDK.setPageVar(Pa, "hard-paywall"), 0) : "modal" !== i.displayMode || !i.activeMeters || "DefaultMeter" !== (r = i.activeMeters, n = JSON.parse(r), Array.isArray(n) ? n[0] : n).meterName || (e.compassSDK.setPageVar(Pa, "dynamic-paywall"), 0)));
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    ja = "piano subscribe",
    Ea = function () {
      var e = r(function* (e, t, r) {
        var n,
          i = yield r.wait("piano-subscription"),
          o = t.find(e => e.rid === i.rid);
        return !!o && (e.compassSDK.trackConversion(null !== (n = o.conversion) && void 0 !== n ? n : ja), !0);
      });
      return function (t, r, n) {
        return e.apply(this, arguments);
      };
    }(),
    Ca = function () {
      var e = r(function* (e, t, n) {
        var i,
          o,
          a = yield Promise.all(t.map(function () {
            var t = r(function* (t) {
              if (yield ((e, t) => new Promise(r => {
                e.api.callApi("/access/check", {
                  rid: t
                }, function (e) {
                  var t = e.access.granted;
                  return r(t);
                });
              }))(e, t.rid)) return t;
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          }()));
        n.compassSDK.setUserType(null !== (i = null === (o = a.find(Boolean)) || void 0 === o ? void 0 : o.userType) && void 0 !== i ? i : "logged");
      });
      return function (t, r, n) {
        return e.apply(this, arguments);
      };
    }(),
    Ta = function () {
      var e = r(function* (e, t) {
        var r,
          n,
          i = null !== (r = null === (n = e.pianoId.getUser()) || void 0 === n ? void 0 : n.uid) && void 0 !== r ? r : void 0;
        if (!i) try {
          var o, a;
          i = JSON.parse(atob(null === (o = e.pianoId.getToken()) || void 0 === o || null === (a = o.split(".")) || void 0 === a ? void 0 : a[1])).sub;
        } catch (e) {}
        i && t.compassSDK.setSiteUserId(i);
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    Aa = function () {
      var e = r(function* () {
        if (window.tp && !Array.isArray(window.tp) || (yield new Promise(e => {
          !function () {
            window.tp = window.tp || [], Array.isArray(window.tp) && window.tp.push(arguments);
          }("init", e);
        })), window.tp && !Array.isArray(window.tp)) return window.tp;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    Ia = e => Array.isArray(e.resources) ? e.resources : e.rid.split(";").map(e => ({
      rid: e,
      userType: 3,
      conversion: ja
    })),
    Da = function () {
      var e = r(function* (e, t, r, n) {
        return !(!e.pianoId.isUserValid() && !e.user.isUserValid() || (yield Ca(e, r, n), t && e.pianoId.isUserValid() && (yield Ta(e, n)), 0));
      });
      return function (t, r, n, i) {
        return e.apply(this, arguments);
      };
    }(),
    _a = function () {
      var e = r(function* (e, t, n) {
        var i,
          o = null === (i = e.piano) || void 0 === i ? void 0 : i.actions,
          a = {
            handlerName: Hn.PIANO,
            handled: !1
          };
        if (o) {
          var s = Object.values(o).map(Ia).reduce((e, t) => [...e, ...t], []),
            c = Object.values(o).some(e => null == e ? void 0 : e.deviceUnification);
          return new Promise(e => {
            Promise.all([Sa(t, n), Ea(t, s, n), Aa().then(function () {
              var e = r(function* (e) {
                return new Promise(n => {
                  if (!e) return n();
                  var i = 0,
                    o = setInterval(r(function* () {
                      if ((yield Da(e, c, s, t)) || i >= 3) return clearInterval(o), n();
                      i += 1;
                    }), 5e3);
                });
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            }())]).then(() => {
              a.handled = !0, e(a);
            });
          });
        }
        return Promise.resolve(a);
      });
      return function (t, r, n) {
        return e.apply(this, arguments);
      };
    }(),
    xa = function () {
      var e = r(function* () {
        if (!document.querySelector(".js_smartbanner")) {
          var [e] = yield Promise.all([a.e(512).then(a.bind(a, 512)), a.e(376).then(a.bind(a, 376))]);
          new e.default().publish();
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    La = function () {
      var e = r(function* (e) {
        [["smartbanner:title", e.title], ["smartbanner:author", e.author], ["smartbanner:price", "GET"], ["smartbanner:price-suffix-google", " - In Google Play"], ["smartbanner:price-suffix-apple", " - On the App Store"], ["smartbanner:icon-google", e.icon], ["smartbanner:icon-apple", e.icon], ["smartbanner:button-url-google", "https://play.google.com/store/apps/details?id=".concat(e.androidId)], ["smartbanner:button-url-apple", "https://apps.apple.com/app/id".concat(e.iosId)], ["smartbanner:enabled-platforms", "android,ios"], ["smartbanner:button", "VIEW"], ["smartbanner:custom-design-modifier", "marfeel"], ["smartbanner:api", "true"]].forEach(e => {
          var [t, r] = e;
          return ((e, t) => {
            var r = document.createElement("meta");
            r.name = e, r.content = t, document.head.appendChild(r);
          })(t, r);
        }), yield xa();
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Ra = function () {
      var e = r(function* (e, t) {
        var r,
          n = null === (r = e.appBanner) || void 0 === r ? void 0 : r.actions,
          i = {
            handlerName: Hn.APP_BANNER,
            handled: !1
          };
        if (n) {
          var o = Object.values(n)[0];
          o && (yield La(o), i.handled = !0);
        }
        return i;
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    }(),
    Na = a(136),
    Ma = function () {
      var e = r(function* (e) {
        var {
            country: t,
            currency: n,
            amount: i
          } = e,
          o = yield (0, Na.loadStripe)("pk_live_51LACBmIk1oy3YXRKZ0bJCgTVuQVLH2GhQYZrSAIwQDRNaZEnwqq9y8D3Cjeo24ms8DUZFb3Jsk9j1eyR7hvzwUTk006eHGS5OW");
        if (o) {
          var a = o.paymentRequest({
              country: t,
              currency: n,
              total: {
                label: "demo elpais",
                amount: i
              },
              requestPayerEmail: !0
            }),
            s = o.elements().create("paymentRequestButton", {
              paymentRequest: a
            });
          (yield a.canMakePayment()) && document.querySelector("#didomi-notice-learn-more-button") && s.mount("#didomi-notice-learn-more-button"), a.on("paymentmethod", function () {
            var e = r(function* (e) {
              var {
                error: t,
                clientSecret: r
              } = yield fetch("https://marfeelpay.mrf.io/stripe/api/create-payment-intent", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  currency: n,
                  paymentMethodType: "card"
                })
              }).then(e => e.json());
              if (t) e.complete("fail");else {
                var {
                  error: i,
                  paymentIntent: a
                } = yield o.confirmCardPayment(r, {
                  payment_method: e.paymentMethod.id
                }, {
                  handleActions: !1
                });
                i ? e.complete("fail") : (window.Didomi.setUserDisagreeToAll(), e.complete("success"), "requires_action" === (null == a ? void 0 : a.status) && (yield o.confirmCardPayment(r)));
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          }());
        }
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Va = [[fi], [ya], [(e, t) => {
      var {
          compass: r = {
            actions: {}
          },
          recirculation: n = {
            actions: {}
          },
          conversions: i = {
            actions: {}
          }
        } = e,
        o = Object.values(lo(lo(lo({}, null == r ? void 0 : r.actions), null == n ? void 0 : n.actions), null == i ? void 0 : i.actions)),
        a = {
          handlerName: "compass",
          handled: !1
        };
      if (o.length) {
        var s = {
          layouts: [],
          modules: [],
          blacklist: [],
          redirectionLinks: []
        };
        Object.values(o).forEach(e => {
          var {
            recirculationModules: r = [],
            userType: n,
            userVars: i = {},
            conversionButtons: o = [],
            layouts: a = [],
            blacklist: c = [],
            redirectionLinks: u = []
          } = e;
          t.compassSDK.setConversionButtons(o), void 0 !== n && t.compassSDK.setUserType(n), Object.entries(i).forEach(e => {
            var [r, n] = e;
            return t.compassSDK.setUserVar(r, n);
          }), s.modules.push(...r), s.layouts.push(...a), s.blacklist.push(...c), s.redirectionLinks.push(...u);
        }), t.compassSDK.setRecirculationConfig(s), a.handled = !0;
      }
      return Promise.resolve(a);
    }], [e => {
      var {
          adManager: t
        } = e,
        r = {
          handlerName: "ad-manager",
          handled: !1
        };
      return null != t && t.actions && (Object.values(t.actions).forEach(e => {
        var t,
          {
            targeting: r
          } = e;
        (t = r) && (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], t.forEach(e => {
          var {
            key: t,
            value: r
          } = e;
          window.googletag.cmd.push(() => {
            window.googletag.pubads().setTargeting(t, r);
          });
        }));
      }), r.handled = !0), Promise.resolve(r);
    }, vo, ta, fa, (e, t) => {
      var r,
        n = null === (r = e.googleOptimize) || void 0 === r ? void 0 : r.actions,
        i = {
          handlerName: Hn.GOOGLE_OPTIMIZE,
          handled: !1
        };
      if (n) {
        var o = Object.values(n).map(e => {
          var {
            experiments: t
          } = e;
          return t;
        }).reduce((e, t) => (t.forEach(t => e.add(t)), e), new Set());
        if (o.size > 0) return new Promise(e => {
          !function () {
            window.dataLayer = window.dataLayer || [], window.dataLayer.push(arguments);
          }("event", "optimize.callback", {
            callback: (r, n) => {
              o.has(n) && (t.compassSDK.setUserVar("optimize-".concat(n), r), o.delete(n)), 0 === o.size && (i.handled = !0, e(i));
            }
          });
        });
      }
      return Promise.resolve(i);
    }, _a, e => {
      var t,
        r = null === (t = e.socialAcquisition) || void 0 === t ? void 0 : t.actions,
        n = {
          handlerName: Hn.SOCIAL_ACQUISITION,
          handled: !1
        };
      return r && (Object.values(r).forEach(e => {
        var {
          pixelId: t
        } = e;
        (e => {
          var {
            pixelId: t
          } = e;
          !function (e, t, r, n, i, o, a) {
            e.fbq || (i = e.fbq = function () {
              i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments);
            }, e._fbq || (e._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], (o = t.createElement(r)).async = !0, o.src = "https://connect.facebook.net/en_US/fbevents.js", (a = t.getElementsByTagName(r)[0]).parentNode.insertBefore(o, a));
          }(window, document, "script"), window.fbq("init", t), window.fbq("track", "PageView");
        })({
          pixelId: t
        });
      }), n.handled = !0), Promise.resolve(n);
    }, (e, t) => {
      var {
          goalTracking: r
        } = e,
        n = {
          handlerName: "goalTracking",
          handled: !1
        };
      return null != r && r.actions && (Object.values(r.actions).forEach(e => {
        var {
          goals: r
        } = e;
        null == r || r.forEach(e => t.compassSDK.trackConversion(e));
      }), n.handled = !0), Promise.resolve(n);
    }, (e, t) => {
      var {
          genericGoalTracking: r
        } = e,
        n = {
          handlerName: "genericGoalTracking",
          handled: !1
        },
        i = !1;
      if (null != r && r.actions) {
        var o,
          a,
          s = Object.values(r.actions).reduce((e, t) => ((e[t.source] = e[t.source] || []).push(t), e), {});
        if ((null === (o = s[po.POST_MESSAGE]) || void 0 === o ? void 0 : o.length) > 0) {
          var c = mo(s[po.POST_MESSAGE]);
          window.addEventListener("message", e => {
            if (Object.keys(c).includes(e.origin)) {
              var r, n;
              try {
                n = JSON.parse(e.data);
              } catch (e) {
                return;
              }
              "complete" !== n.event && ("close" !== n.event && "purge" !== n.event || null === (r = n.params) || void 0 === r || !r.completePayment) || i || (i = !0, t.compassSDK.trackConversion(c[e.origin]));
            }
          }), n.handled = !0;
        }
        if ((null === (a = s[po.HTTP]) || void 0 === a ? void 0 : a.length) > 0) {
          var u = mo(s[po.HTTP]),
            l = window.fetch,
            d = window.XMLHttpRequest.prototype.open;
          window.fetch = (e, r) => {
            var n = l(e, r);
            return Object.keys(u).includes(e) && n.then(r => {
              r.ok && t.compassSDK.trackConversion(u[e]);
            }), n;
          }, window.XMLHttpRequest.prototype.open = function () {
            d.apply(this, arguments);
            try {
              var e = new URL(arguments[1]);
              Object.keys(u).includes(e.origin) && t.compassSDK.setPageVar(u[e.origin], "true");
            } catch (e) {}
          }, n.handled = !0;
        }
      }
      return Promise.resolve(n);
    }, Oa, (e, t) => {
      var {
          siteContextSynchronizer: r
        } = e,
        n = {
          handlerName: "siteContextSynchronizer",
          handled: !1
        };
      return null != r && r.actions && (Object.values(r.actions).forEach(e => {
        e.definition.forEach(e => {
          return r = e, n = t.compassSDK, i = 0, o = (e, t) => {
            var r = Po(e, t.params);
            switch (function (e) {
              return void 0 !== (null == e ? void 0 : e.name);
            }(t.action) ? t.action.name : t.action) {
              case "userType":
                "string" != typeof r && "number" != typeof r || n.setUserType(r);
                break;
              case "conversion":
                "string" == typeof r && n.trackConversion(r);
                break;
              case "marfeelCMD":
                var i = t.action;
                window.marfeel.cmd.push([i.config.module, e => {
                  var t;
                  Array.isArray(r) && (null == e || null === (t = e[i.config.method]) || void 0 === t || t.call(e, ...r));
                }]);
            }
          }, a = e => {
            for (var t of r.effects) if (ko(e, t.condition)) return void o(e, t);
          }, (s = function e() {
            var t,
              n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              o = r.path.startsWith("window.") ? r.path.substring(7) : r.path,
              s = Oo(window, o);
            if (s) if ("array" === r.type) {
              if (Array.isArray(s)) {
                for (var c = i; c < s.length; c++) a(s[c]);
                i = s.length;
              }
            } else a(s);
            var u = null !== (t = r.observe) && void 0 !== t ? t : 5e3;
            n && u > 0 && setTimeout(() => e(), u);
          })(), void (0, go.C)(() => {
            s(!1);
          });
          var r, n, i, o, a, s;
        });
      }), n.handled = !0), Promise.resolve(n);
    }, ka, Ra, (e, t) => {
      var {
          marfeelOptimizer: r
        } = e,
        n = {
          handlerName: "marfeelOptimizer",
          handled: !1
        };
      return null != r && r.actions && Object.values(r.actions).length > 0 ? new Promise(e => {
        var r = So(t.compassSDK),
          n = 0;
        if (r) return e();
        var i = setInterval(() => {
          if (So(t.compassSDK) || n >= 2) return clearInterval(i), e();
          n += 1;
        }, 5e3);
      }).then(() => (n.handled = !0, Promise.resolve(n))) : Promise.resolve(n);
    }, e => {
      var t,
        r = null === (t = e.marfeelPay) || void 0 === t ? void 0 : t.actions,
        n = {
          handlerName: Hn.MARFEEL_PAY,
          handled: !1
        };
      return r && (Object.values(r).forEach(e => {
        Ma(e);
      }), n.handled = !0), Promise.resolve(n);
    }]],
    Ua = function () {
      var e = r(function* (e, t, r) {
        var n = [];
        for (var i of Va) {
          var o = yield Promise.all(i.map(n => n(e, t, r)));
          n.push(...o);
        }
        return n;
      });
      return function (t, r, n) {
        return e.apply(this, arguments);
      };
    }();
  class qa {
    constructor() {
      i(this, "promise", void 0), i(this, "promiseResolve", void 0), this.promise = new Promise(e => {
        this.promiseResolve = e;
      });
    }
    resolve() {
      var e;
      null === (e = this.promiseResolve) || void 0 === e || e.call(this);
    }
  }
  var Fa = function (e) {
      return e.NOT_EQUALS = "NOT_EQUALS", e.EQUALS = "EQUALS", e;
    }({}),
    za = e => e.replace(/\/+$/, ""),
    Ba = (e, t) => e.hostname === t.hostname && za(e.pathname) === za(t.pathname);
  function Ga(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ha(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ga(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ga(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Ka = {
    url: e => {
      var t = window.location;
      switch (e.operator) {
        case Fa.NOT_EQUALS:
          return e.values.every(e => !Ba(t, new URL(e)));
        case Fa.EQUALS:
        default:
          return e.values.some(e => Ba(t, new URL(e)));
      }
    }
  };
  function Ja(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Wa(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ja(Object(r), !0).forEach(function (t) {
        i(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ja(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Xa = e => !!e;
  class $a {
    constructor(e, t, r) {
      i(this, "config", void 0), i(this, "compassSDK", void 0), i(this, "synchronizer", void 0), i(this, "executionData", void 0), i(this, "deferred", void 0);
      var n = e.experiences || e.flowcards;
      this.compassSDK = t, this.synchronizer = r, this.config = {
        accountId: e.accountId,
        targeting: {}
      }, n && Object.assign(this.config, n), this.deferred = new qa(), this.executionData = this.loadExperiences();
    }
    loadExperiences() {
      var e = this;
      return r(function* () {
        var t,
          r,
          n,
          i,
          o,
          a,
          s,
          c,
          u = {},
          l = [],
          d = {
            config: e.config,
            compassSDK: e.compassSDK
          },
          {
            active: p,
            clientParameters: f,
            preflight: h
          } = yield (t = e.config, t.preflight ? (t.preflight.active = t.preflight.active || !!zi(new URL(window.location.href)), Promise.resolve(t.preflight)) : function (e) {
            return (e => oo(e, "https://flowcards.mrf.io/json/active", new Set(["site_id", "page_technology", "debug_experiences"])))(e).then(fetch).then(e => e.json()).then(e => e.preflight ? so(so({}, e), {}, {
              preflight: co(e.preflight)
            }) : e);
          }({
            location: new URL(window.location.toString()),
            siteId: t.accountId,
            pageTechnology: 0
          }));
        if (h) {
          var m = (r = h, Object.entries(r).reduce((e, t) => {
            var [r, n] = t,
              i = (e => {
                if (!e.actions) return e;
                var t = Object.entries(e.actions).filter(e => {
                  var t,
                    [r, n] = e;
                  return t = n, !Array.isArray(t.filters) || 0 === t.filters.length || t.filters.every(e => {
                    var t = Ka[e.key];
                    return !t || t(e);
                  });
                });
                return 0 !== t.length ? Ha(Ha({}, e), {}, {
                  actions: t.reduce((e, t) => {
                    var [r, n] = t;
                    return Ha(Ha({}, e), {}, {
                      [r]: n
                    });
                  }, {})
                }) : void 0;
              })(n);
            return i ? Ha(Ha({}, e), {}, {
              [r]: i
            }) : e;
          }, {}));
          u = Gn()(u, m);
          var v = yield ((e, t, r) => {
            var n = Ua(e, t, r),
              i = new Promise(e => {
                window.setTimeout(() => {
                  e(void 0);
                }, 3e3);
              });
            return Promise.race([n, i]);
          })(m, d, e.synchronizer);
          Array.isArray(v) && l.push(...v);
          var [g] = l.filter(e => "compass" === (null == e ? void 0 : e.handlerName));
          (null == g || !g.handled) && d.compassSDK.setRecirculationConfig({});
        }
        if (p) {
          yield (n = e.config, i = e.deferred, null !== (o = n.waitFor) && void 0 !== o && o.promise ? n.waitFor.promise : null !== (a = n.waitFor) && void 0 !== a && a.timeout ? (c = n.waitFor.timeout, new Promise(e => {
            setTimeout(e, c);
          })) : null !== (s = n.waitFor) && void 0 !== s && s.done ? i.promise : Promise.resolve()), yield function (e, t) {
            return Ho.apply(this, arguments);
          }(e.config, e.compassSDK);
          var y = yield Ko(e.config, e.compassSDK, f).then(t => (u = Gn()(u, t), ((e, t, r) => Ua(e, t, r))(t, d, e.synchronizer)));
          Array.isArray(y) && l.push(...y);
        }
        var b = l.filter(Xa).reduce((e, t) => Wa(Wa({}, e), {}, {
          [t.handlerName]: e[t.handlerName] || t.handled
        }), {});
        return Object.values(Hn).forEach(t => {
          e.synchronizer.resolve(t, !!b[t]);
        }), {
          handled: b,
          experiences: u
        };
      })();
    }
    done() {
      this.deferred.resolve();
    }
    addTargeting(e, t) {
      this.config.targeting[e] = t;
    }
    addExperience(e, t) {
      var r, n, i, o;
      null !== (n = (r = this.config).experiences) && void 0 !== n || (r.experiences = {}), null !== (o = (i = this.config.experiences)[e]) && void 0 !== o || (i[e] = []), this.config.experiences[e].push(t);
    }
    addEventListener(e, t, r) {
      var n = function (e, t) {
        return "navigationchange" === e ? e => {
          t(e);
        } : "navigationfromcard" === e ? Bo(t, "host") : "navigationtocard" === e ? Bo(t, "flowcards") : null;
      }(t, r);
      n && Qo(e).addEventListener("navigationchange", n);
    }
    hasExperiences(e) {
      return this.executionData.then(t => {
        var {
          handled: r
        } = t;
        return !!r[e];
      });
    }
    triggerExperiences() {
      var e = this;
      return r(function* () {
        return e.loadExperiences();
      })();
    }
    hasExperimentation(e) {
      return this.executionData.then(t => {
        var {
          experiences: r
        } = t;
        return ((e, t) => {
          var r,
            n = null === (r = e.experimentation) || void 0 === r ? void 0 : r.actions;
          return !!n && Object.values(n).some(e => {
            var {
              url: r
            } = e;
            return -1 !== r.indexOf("experimentType=".concat(t));
          });
        })(r, e);
      });
    }
    getRecommendations(e) {
      var t = this;
      return r(function* () {
        return yield function (e) {
          return jo.apply(this, arguments);
        }({
          experienceId: e,
          canonical: t.compassSDK.getCanonical(),
          userId: t.compassSDK.getUserId().actualUserId
        });
      })();
    }
  }
  d("experiences", ["compass", "synchronizer"], () => Promise.resolve($a));
  class Ya {
    constructor(e, t) {
      i(this, "croupier", void 0), this.croupier = t;
    }
    addTargeting(e, t) {
      this.croupier.addTargeting(e, t);
    }
    addCard(e) {
      this.croupier.addExperience(Hn.FLOWCARDS, e);
    }
    addEventListener(e, t) {
      this.croupier.addEventListener(Hn.FLOWCARDS, e, t);
    }
    hasCards() {
      return this.croupier.hasExperiences(Hn.FLOWCARDS);
    }
  }
  d("flowcards", ["experiences"], () => Promise.resolve(Ya)), d("multimedia", ["compass", "consent", "synchronizer"], function () {
    var e = r(function* (e, t) {
      var [r, n, i] = t;
      return yield y(e, n, i), e.multimedia ? a.e(411).then(a.bind(a, 411)).then(e => e.default) : Promise.reject();
    });
    return function (t, r) {
      return e.apply(this, arguments);
    };
  }());
  class Qa {
    constructor() {
      i(this, "promises", void 0), this.promises = {};
    }
    wait(e) {
      var t, r;
      null !== (r = (t = this.promises)[e]) && void 0 !== r || (t[e] = {});
      var n = this.promises[e].promise;
      return void 0 === n ? (n = new Promise((t, r) => {
        this.promises[e].resolve = t, this.promises[e].reject = r;
      }), this.promises[e].promise = n, n) : n;
    }
    resolve(e, t) {
      var r, n;
      null !== (n = (r = this.promises)[e]) && void 0 !== n || (r[e] = {}), void 0 === this.promises[e].resolve ? this.promises[e].promise = Promise.resolve(t) : (0, this.promises[e].resolve)(t);
    }
    reject(e, t) {
      var r, n;
      null !== (n = (r = this.promises)[e]) && void 0 !== n || (r[e] = {}), void 0 === this.promises[e].reject ? this.promises[e].promise = Promise.reject(t) : (0, this.promises[e].reject)(t);
    }
  }
  d("synchronizer", [], () => Promise.resolve(Qa));
  var Za = (e, t, r) => {
      var n, i;
      n = ((e, t, r) => {
        var n = document.createElement("script");
        return n.src = e, n.id = r, t ? n.type = "module" : n.setAttribute("nomodule", ""), n;
      })(e, r, t), i = document.body, new Promise((e, t) => {
        n.addEventListener("error", e => t(e.error)), i.append(n);
      });
    },
    es = "https://sdk.mrf.io/statics",
    ts = {
      ecommerce: {
        srcModule: "".concat(es, "/compass-ecommerce-sdk.js"),
        srcNoModule: "".concat(es, "/compass-ecommerce-sdk.es5.js"),
        dependencies: ["compass"]
      },
      multimedia: {
        srcModule: "".concat(es, "/compass-multimedia-sdk.js"),
        srcNoModule: "".concat(es, "/compass-multimedia-sdk.es5.js"),
        dependencies: ["compass"]
      }
    },
    rs = e => "".concat(e, "?version=792");
  class ns {
    load(e, t) {
      var r = ts[e];
      t && function () {
        l.addConfig(...arguments);
      }(t), Za(rs(r.srcModule), e, !0), Za(rs(r.srcNoModule), e, !1);
    }
  }
  d("loader", [], () => Promise.resolve(ns));
})();
overrideFuncs.forEach(func => {
  window[func] = new Proxy(globalVals[func], {
    apply: function (target, obj, args) {
      const payload = {
        functionName: func,
        args,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        stackTrace: getStackTrace()
      };
      if (isValidPayload(payload, hooksConfig.find(hook => hook.originalFuncName === func).payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return Reflect.apply(...arguments);
    },
    construct: function (target, args) {
      const payload = {
        functionName: func,
        args,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        stackTrace: getStackTrace()
      };
      if (isValidPayload(payload, hooksConfig.find(hook => hook.originalFuncName === func).payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return Reflect.construct(...arguments);
    }
  });
});
window['localStorage'].setItem = new Proxy(globalVals['localStorage.setItem'], {
  apply: function (target, thisArg, args) {
    const payload = {
      functionName: 'localStorage.setItem',
      args,
      sessionId: getSessionId(),
      timestamp: Date.now(),
      stackTrace: getStackTrace()
    };
    if (isValidPayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.setItem').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return Reflect.apply(...arguments);
  }
});
window.addEventListener = new Proxy(globalVals['addEventListener'], {
  apply: function (target, thisArg, args) {
    const payload = {
      functionName: 'addEventListener',
      args,
      sessionId: getSessionId(),
      timestamp: Date.now(),
      stackTrace: getStackTrace()
    };
    if (isValidPayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return Reflect.apply(...arguments);
  }
});