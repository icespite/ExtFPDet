function html5ModeConfig(e) {
  window.history && history.pushState ? e.html5Mode(!0) : e.html5Mode(!1).hashPrefix("!");
}
Object.assign || Object.defineProperty(Object, "assign", {
  enumerable: !1,
  configurable: !0,
  writable: !0,
  value: function (e, t) {
    "use strict";

    if (null == e) throw new TypeError("Cannot convert first argument to object");
    for (var n = Object(e), r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      if (null != o) for (var a = Object.keys(Object(o)), i = 0, s = a.length; i < s; i++) {
        var c = a[i],
          u = Object.getOwnPropertyDescriptor(o, c);
        void 0 !== u && u.enumerable && (n[c] = o[c]);
      }
    }
    return n;
  }
}), Array.isArray || (Array.isArray = function (e) {
  return "[object Array]" === Object.prototype.toString.call(e);
}), function () {
  if ("function" == typeof window.CustomEvent) return !1;
  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }
  e.prototype = window.Event.prototype, window.CustomEvent = e;
}(), Array.prototype.find || (Array.prototype.find = function (e) {
  if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
  if ("function" != typeof e) throw new TypeError("predicate must be a function");
  for (var t, n = Object(this), r = n.length >>> 0, o = arguments[1], a = 0; a < r; a++) if (t = n[a], e.call(o, t, a, n)) return t;
}), Object.keys || (Object.keys = function () {
  "use strict";

  var e = Object.prototype.hasOwnProperty,
    t = !{
      toString: null
    }.propertyIsEnumerable("toString"),
    n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
    r = n.length;
  return function (o) {
    if ("object" != typeof o && ("function" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
    var a,
      i,
      s = [];
    for (a in o) e.call(o, a) && s.push(a);
    if (t) for (i = 0; i < r; i++) e.call(o, n[i]) && s.push(n[i]);
    return s;
  };
}()), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
  "use strict";

  if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
  if ("function" != typeof e) throw new TypeError(e + " is not a function");
  var t,
    n = Object(this),
    r = n.length >>> 0,
    o = 0;
  if (arguments.length >= 2) t = arguments[1];else {
    for (; o < r && !(o in n);) o++;
    if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
    t = n[o++];
  }
  for (; o < r; o++) o in n && (t = e(t, n[o], o, n));
  return t;
}), Array.prototype.fill || (Array.prototype.fill = function (e) {
  if (null == this) throw new TypeError("this is null or not defined");
  for (var t = Object(this), n = t.length >>> 0, r = arguments[1] >> 0, o = r < 0 ? Math.max(n + r, 0) : Math.min(r, n), a = arguments[2], i = void 0 === a ? n : a >> 0, s = i < 0 ? Math.max(n + i, 0) : Math.min(i, n); o < s;) t[o] = e, o++;
  return t;
}), Object.freeze || (Object.freeze = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
  return e;
}), Object.values || (Object.values = function (e) {
  return Object.keys(e).map(function (t) {
    if (e.hasOwnProperty(t)) return e[t];
  });
}), function (e) {
  var t,
    n,
    r,
    o,
    a = 1,
    i = this,
    s = "postMessage",
    c = "addEventListener",
    u = i[s];
  e[s] = function (t, n, r) {
    n && (t = "string" == typeof t ? t : e.param(t), r = r || parent, u ? r[s](t, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (r.location = n.replace(/#.*$/, "") + "#" + +new Date() + a++ + "&" + t));
  }, e.receiveMessage = o = function (a, s, l) {
    u ? (a && (r && o(), r = function (t) {
      if ("string" == typeof s && t.origin !== s || e.isFunction(s) && !1 === s(t.origin)) return !1;
      a(t);
    }), i[c] ? i[a ? c : "removeEventListener"]("message", r, !1) : i[a ? "attachEvent" : "detachEvent"]("onmessage", r)) : (t && clearInterval(t), t = null, a && (l = "number" == typeof s ? s : "number" == typeof l ? l : 100, t = setInterval(function () {
      var e = document.location.hash,
        t = /^#?\d+&/;
      e !== n && t.test(e) && (n = e, a({
        data: e.replace(t, "")
      }));
    }, l)));
  };
}(jQuery), function () {
  "use strict";

  var e = "placeholder" in document.createElement("input"),
    t = angular.module("html5.placeholder", []),
    n = function (e, t) {
      var n = e.getAttributeNode(t);
      return n ? n.nodeValue : n;
    };
  t.factory("placeholder", function () {
    var t;
    if (e) t = function (e, t) {
      t && t({
        back: function () {}
      });
    };else {
      var r = "placeholderTmp" + +new Date(),
        o = {
          commit: function (e) {
            angular.forEach(e, function (e) {
              var t,
                o = angular.element(e);
              t = n(e, "placeholder"), o.val() == t && (o.data(r, o.val()), o.val(""));
            });
          },
          doRollback: function (e) {
            angular.forEach(e, function (e) {
              var t,
                n = angular.element(e);
              (t = n.data(r)) && (n.val(t), n.data(r, null));
            });
          }
        };
      t = function (e, t) {
        var n;
        e.length && "form" == e[0].tagName.toLowerCase() ? (n = e.find("input"), n = function (e, t) {
          return angular.forEach(t, function (t) {
            e.push(t);
          }), e;
        }(e.find("textarea"), n)) : n = e, o.commit(n), t && t({
          back: function () {
            o.doRollback(n);
          }
        });
      };
    }
    return {
      ensure: t
    };
  }), e || t.directive("placeholder", [function () {
    var e,
      t,
      r,
      o,
      a = "_placeholder_" + +new Date(),
      i = "focus",
      s = "blur",
      c = /msie 9/i.test(navigator.userAgent);
    return r = function (e) {
      "password" == e.data(a).type && e.attr("type", "text");
    }, o = function (e) {
      "password" == e.data(a).type && e.attr("type", "password");
    }, e = function () {
      var e = angular.element(this);
      e.val() == n(this, "placeholder") && (e.val(""), o(e));
    }, t = function () {
      var e = angular.element(this);
      "" == e.val() && (e.val(n(this, "placeholder")), r(e));
    }, {
      link: function (n, u, l) {
        n.$watch("ready", function () {
          return "password" != u.attr("type") || c ? (u.val(l.placeholder).data(a, {
            type: (u.attr("type") || "").toLowerCase()
          }).bind(i, e).bind(s, t), r(u), void n.$on("$destroy", function () {
            u.unbind(i, e).unbind(s, t), o(u);
          })) : {};
        });
      }
    };
  }]);
}(), angular.module("tp.i18n", ["ajaxServices", "ngCookies", "tmh.dynamicLocale", "tinypassServices"]).config(["tmhDynamicLocaleProvider", function (e) {
  e.localeLocationPattern("/libs/angular-1.2.22/i18n/angular-locale_{{locale | replaceUnderscoreToDash}}.js");
}]).run(["lang", function (e) {
  var t = TPParam.TRANSLATION_CONFIG && TPParam.TRANSLATION_CONFIG.initialLocaleId || "en_US";
  e.update(t);
}]).directive("autoFocus", ["$timeout", function (e) {
  return {
    restrict: "AC",
    link: function (t, n) {
      var r = n[0];
      e(function () {
        var e = r.value;
        r.value = "", r.focus(), r.value = e;
      }, 100);
    }
  };
}]).directive("t", ["$compile", "lang", "getTextFromLocales", function (e, t, n) {
  var r = /^arg(\d+)$/i;
  return {
    restrict: "AE",
    compile: function (o, a) {
      var i = o.html(),
        s = [];
      return angular.forEach(a, function (e, t) {
        var n = t.match(r);
        n && n[1] && (s[n[1]] = e);
      }), function (r, o, a) {
        var c = t.getTemplateContext(),
          u = a.context ? a.context : c;
        function l(a, c, l) {
          if (a) {
            var d = n(a, c, l);
            o.empty().append(t.formatString(d(u, i), s)), e(o.contents())(r);
          }
        }
        l(), t.on(l), r.$on("$destroy", function () {
          t.off(l);
        });
      };
    }
  };
}]).directive("languageSelector", ["lang", function (e) {
  return {
    restrict: "E",
    scope: {},
    template: '<div ng-show="areLanguagesAvailable()" class="language-selector">   <div id="language-label" class="language-selector__label" ng-click="toggleMenu()">{{locale | shortLocale}}</div>   <ul id="language-list" class="language-selector__list" ng-class="{\'show\': opened === true, \'hide\': opened === false}">       <li class="language-selector__list-item" ng-repeat="(index, value) in languages | filter:showAvailableLanguage" ng-click="changeLanguage(value.locale)">           <div class="language-selector__country" ng-class="{\'selected\': value.locale === locale}">{{value.localized}}             <span class="language-selector__country-image language-selector__country-image--{{value.locale | getCountryCode}}"></span>           </div>       </li>   </ul></div>',
    link: function (e, t) {
      function n(n) {
        jQuery(n.target)[0] !== t.find("#language-label")[0] && (e.opened = !1, jQuery(window).off("click"), e.$apply());
      }
      e.toggleMenu = function () {
        e.opened = !e.opened, jQuery(window).off("click"), jQuery(window).on("click", n);
      }, e.opened = !1;
    },
    controller: ["$scope", function (t) {
      function n(e) {
        t.locale = e;
      }
      function r(e) {
        t.languages = e.sort(function (e, t) {
          return e.localized.toLowerCase() === t.localized.toLowerCase() ? 0 : e.localized.toLowerCase() > t.localized.toLowerCase() ? 1 : -1;
        });
      }
      t.languages = [], t.locale = null, t.showAvailableLanguage = function (e) {
        return !!e.isEnabled && e;
      }, t.changeLanguage = function (n) {
        t.locale = n, e.update(t.locale);
      }, t.isLanguagesEnabled = TPParam.TRANSLATION_CONFIG.isEnabled, e.on(n), t.$on("$destroy", function () {
        e.off(n);
      }), e.list().then(r), t.areLanguagesAvailable = function () {
        return t.isLanguagesEnabled && t.languages.length > 1;
      };
    }]
  };
}]).filter("shortLocale", function () {
  function e(e) {
    var t = e.toUpperCase().split("_");
    return t[0] + "-" + t[1];
  }
  return e.$stateful = !0, e;
}).filter("t", ["lang", function (e) {
  function t(t, n) {
    var r = e.getTemplateContext();
    return e.trc(r, t, n);
  }
  return t.$stateful = !0, t;
}]).filter("tc", ["lang", function (e) {
  function t(t, n, r) {
    return e.trc(n, t, r);
  }
  return t.$stateful = !0, t;
}]).filter("replaceUnderscoreToDash", function () {
  function e(e) {
    return e.toString().toLowerCase().replace("_", "-");
  }
  return e.$stateful = !0, e;
}).filter("replaceDashToUnderscore", function () {
  function e(e) {
    var t;
    return null === e.match(/\-/g) ? e : ((t = e.toUpperCase().split("-"))[0] = t[0].toLowerCase(), t.join("_"));
  }
  return e.$stateful = !0, e;
}).filter("getCountryCode", function () {
  function e(e) {
    return e.match(/\w{2}$/)[0].toLowerCase();
  }
  return e.$stateful = !0, e;
}).factory("getTextFromLocales", [function () {
  return function (e, t, n) {
    return function (r, o) {
      var a,
        i = (r = r ? r + "" : "") + o,
        s = n && n[t],
        c = n && n[e],
        u = c && (c[i] || c[o]);
      return void 0 === u && (a = s && (s[i] || s[o])), u || a || o;
    };
  };
}]).factory("lang", ["tpHTTP", "$q", "$locale", "$cookies", "tmhDynamicLocale", "resolveLocale", "cookieLang", "$rootScope", "$filter", "getTextFromLocales", function (e, t, n, r, o, a, i, s, c, u) {
  var l,
    d = a(),
    f = !1,
    p = ["en_US", "en_GB", "pt_PT", "es_CO", "pt_BR", "fr_CA", "ja_JP", "zz_ZZ"],
    g = [],
    m = null,
    v = null,
    h = TPParam.TRANSLATION_CONFIG && TPParam.TRANSLATION_CONFIG.systemDefaultLocale || "en_US",
    E = {
      translationMapStatic: {},
      translationMapDynamic: {}
    },
    _ = {},
    y = {};
  return s.$on("CHECK_UPDATED_LANGUAGE", C), P(), O(), {
    update: M,
    on: function (e, t) {
      g.push(e), t || e(d, h, _);
    },
    off: function (e) {
      var t = g.indexOf(e);
      -1 !== t && g.splice(t, 1);
    },
    tr: function (e) {
      for (var t = new Array(arguments.length - 1), n = 0; n < t.length; ++n) t[n] = arguments[n + 1];
      return b(u(d, h, _)(null, e), t);
    },
    trc: function (e, t, n) {
      var r;
      if (angular.isArray(n)) r = n;else {
        r = new Array(arguments.length - 2);
        for (var o = 0; o < r.length; ++o) r[o] = arguments[o + 2];
      }
      return b(u(d, h, _)(e, t), r);
    },
    list: function () {
      if (!TPParam.TRANSLATION_CONFIG.isEnabled) return t.when([]);
      v || (v = t.when(TPParam.TRANSLATION_CONFIG.languages).then(function (e) {
        return m = e, M(d), e;
      }));
      return v;
    },
    formatString: b,
    getLang: w,
    getTemplateContext: function () {
      return window.TPParam.TRANSLATION_CONFIG && window.TPParam.TRANSLATION_CONFIG.templateContext || "";
    },
    getCorrectStartWeekDay: function () {
      var e = w() || d;
      return -1 === p.indexOf(e);
    },
    getLanguageTag: T
  };
  function w() {
    return f && d || "";
  }
  function T() {
    return (w() || d).replace("_", "-");
  }
  function P() {
    S(), l = setInterval(C, 500);
  }
  function S() {
    l && clearInterval(l);
  }
  function C() {
    var e = i.getCookie("LANG_CHANGED");
    e && e !== d && '""' !== e && M(e);
  }
  function b(e, t) {
    return angular.isUndefined(e) || null === e ? e : e.replace(/<t([^>]+)?>|<\/t>/g, "").replace(/{(\d+)}/g, function (e, n) {
      return void 0 !== t[n] ? t[n] : e;
    });
  }
  function I(e) {
    _[d] = e, g.forEach(function (e) {
      e(d, h, _);
    });
  }
  function A(e, n) {
    var r,
      o,
      a,
      i = t.defer();
    return e && ((r = document.querySelector('script[src*="' + e + '"]')) || (o = document.getElementsByTagName("head")) && o.length && (a = o[0]) && ((r = document.createElement("script")).onload = function () {
      return window["translation" + n] ? i.resolve(window["translation" + n]) : i.reject("Unable to load");
    }, r.setAttribute("src", e), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "utf-8"), a.appendChild(r))), i.promise;
  }
  function N(e) {
    var n = "/ng/common/i18n/platform-translation-map_" + e + ".js?version=" + TPParam.TRANSLATION_CONFIG.version,
      r = TPParam.TRANSLATION_CONFIG.loadTranslationUrl + "&language=" + e,
      o = window["translation_static_" + e];
    return TPParam.TRANSLATION_CONFIG.isStatic ? o ? t.when(o) : A(n, "_static_" + e).then(function () {
      return t.when(window["translation_static_" + e]);
    }) : t.all([A(n, "_static_" + e).then(function (e) {
      return e;
    }), A(r, "_dynamic_" + e).then(function (e) {
      return e;
    })]).then(function (e) {
      return E.translationMapStatic = e[0], E.translationMapDynamic = e[1], t.when(angular.extend({}, e[0], e[1]));
    }).catch(function (t) {
      _ = function (e, t) {
        var n = [],
          r = {};
        "string" == typeof t && (n = [t]);
        angular.isArray(t) && (n = [].concat(t));
        angular.isArray(e) && e.forEach(function (e, t) {
          r[t] = e;
        });
        angular.isObject(e) && !angular.isArray(e) && (r = angular.extend({}, e));
        return n.forEach(function (e) {
          delete r[e];
        }), r;
      }(_, e);
    });
  }
  function M(e) {
    if (S(), !TPParam.TRANSLATION_CONFIG || !TPParam.TRANSLATION_CONFIG.isEnabled) return i.removeCookie("LANG"), void i.removeCookie("LANG_CHANGED");
    angular.isUndefined(e) && (e = i.getCookie("LANG") || h);
    var r = m && m.some(function (t) {
      return t.locale === e;
    });
    m && !r || (!function (e) {
      d = e, f = !0, i.setCookie("LANG", d, 1500), i.setCookie("LANG_CHANGED", d, 1);
      var t = c("replaceUnderscoreToDash")(e);
      y[t] || n.id !== t || (y[t] = angular.copy(n));
      y[t] && function e(t, n) {
        angular.forEach(t, function (e, r) {
          n[r] ? angular.isArray(n[r]) && (t[r].length = n[r].length) : delete t[r];
        });
        angular.forEach(n, function (r, o) {
          angular.isArray(n[o]) || angular.isObject(n[o]) ? (t[o] || (t[o] = angular.isArray(n[o]) ? [] : {}), e(t[o], n[o])) : t[o] = n[o];
        });
      }(n, y[t]);
      e !== TPParam.TRANSLATION_CONFIG.initialLocaleId && (y[t] || o.set(t).then(function (e) {
        y[e.id] = angular.copy(e);
      }), function (e) {
        window.TPParam.TRANSLATION_CONFIG && window.TPParam.TRANSLATION_CONFIG.initialLocaleId && (window.TPParam.TRANSLATION_CONFIG.initialLocaleId = e);
      }(d));
    }(e), O(), function (e) {
      if (void 0 === _[h]) return t.all([k(e), k(h)]).then(function (e) {
        return angular.extend({}, e[1], e[0]);
      });
      return k(e);
    }(e).then(I).then(function () {
      s.$broadcast("EVENT_I18N_LOCALE_CHANGED");
    })), P();
  }
  function k(e) {
    var n = window["translation_static_" + e],
      r = window["translation_dynamic_" + e];
    return _[e] ? t.when(_[e]) : n || r ? (_[e] = angular.extend({}, n, r), t.when(_[e])) : N(e).then(function (t) {
      return _[e] = t, t;
    });
  }
  function O() {
    if ("undefined" != typeof moment) try {
      var e = T();
      switch (e) {
        case "zz-ZZ":
          e = "x-pseudo";
          break;
        case "sr-RS":
          e = "sr-cyrl";
      }
      moment.locale ? moment.locale(e) : moment.lang(e);
    } catch (e) {}
  }
}]).factory("resolveLocale", ["$cookies", "$locale", "tmhDynamicLocale", "$filter", "cookieLang", function (e, t, n, r, o) {
  return function () {
    o.getCookie("LANG");
    return "en_US";
  };
}]).factory("cookieLang", ["TinypassService", function (e) {
  return {
    getCookie: t,
    setCookie: function (t, n, r) {
      var o,
        a = new Date();
      a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), o = "expires=" + a.toUTCString(), document.cookie = t + "=" + n + "; " + o + "; domain=" + e.getTopDomain() + "; path=/;" + e.getCookieSameSiteAndSecureAttrString();
    },
    removeCookie: function (t) {
      var n = "expires=" + new Date("February 02, 1972 02:02:02").toUTCString();
      document.cookie = t + "=; " + n + "; domain=" + e.getTopDomain() + "; path=/;" + e.getCookieSameSiteAndSecureAttrString();
    },
    getCountryCode: function () {
      if (null === t("LANG") || void 0 === t("LANG") || "" === t("LANG")) return "us";
      return t("LANG").split("_")[1].toLowerCase();
    },
    getLanguageCode: function () {
      if (null === t("LANG") || void 0 === t("LANG") || "" === t("LANG")) return "en";
      return t("LANG").split("_")[0];
    }
  };
  function t(e) {
    var t = ("; " + document.cookie).split("; " + e + "=");
    if (t.length > 1) return t.pop().split(";").shift();
  }
}]).factory("updateDirAttrOnLangChanges", ["$document", "lang", "ngEventService", function (e, t, n) {
  var r = ["he_IL", "ar_EG"],
    o = "rtl",
    a = "ltr";
  return n.subscribe("langChanged", function (e, n) {
    n.lang && t.update(n.lang);
  }), function (n) {
    var i, s;
    t.on(function (t) {
      if (t !== i) {
        var c,
          u = -1 !== r.indexOf(t) ? o : a;
        u !== s && (s = u, c = u, e[0].documentElement.setAttribute("dir", c)), i = t, n && n(t);
      }
    });
  };
}]), function () {
  var dateServices = angular.module("dateServices", []),
    withoutSpinnerHeaderName = "Piano-request-without-spinner",
    withoutSpinnerHeaderNameLowerCase = withoutSpinnerHeaderName.toLowerCase();
  function isIncludesWithoutSpinnerHeader(e) {
    return !!(e && e.config && e.config.headers || {})[withoutSpinnerHeaderName];
  }
  dateServices.factory("fromIsoToJsDate", function () {
    return function (e, t) {
      if (t.length) {
        for (var n = t.length - 1; n >= 0; n--) t[n][e] && (t[n][e] = moment(t[n][e]).format());
        return t;
      }
      return t[e] && (t[e] = moment(t[e]).format()), t[e];
    };
  }), dateServices.factory("timeStampToDate", function () {
    return function (e) {
      return e ? e && e < 1e10 ? new Date(1e3 * e) : new Date(e) : e;
    };
  }), dateServices.factory("TimezoneService", function () {
    return {
      SEND_DATETIME_FORMAT: "YYYY-MM-DDTHH:mm:ssZZ",
      dateToTimezonedMoment: function (e) {
        return moment.tz(e, TPParam.CLIENT_TIMEZONE);
      },
      dateToClientTimezoneMoment: function (e) {
        return moment.tz({
          year: e.getFullYear(),
          month: e.getMonth(),
          date: e.getDate(),
          hour: e.getHours(),
          minute: e.getMinutes(),
          second: e.getSeconds(),
          millisecond: e.getMilliseconds()
        }, TPParam.CLIENT_TIMEZONE);
      },
      datesToTimezonedStringsRange: function (e, t) {
        return {
          from: this.dateToClientTimezoneMoment(e).startOf("day").format(this.SEND_DATETIME_FORMAT),
          to: this.dateToClientTimezoneMoment(t).endOf("day").format(this.SEND_DATETIME_FORMAT)
        };
      },
      momentToDate: function (e) {
        return new Date(e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second());
      },
      dateInClientTimezoneToBrowserTimezone: function (e) {
        var t = moment.tz(e, TPParam.CLIENT_TIMEZONE);
        return new Date(t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second());
      }
    };
  }), dateServices.factory("ISODatetimeService", function () {
    return {
      ISO8601_DATE_FORMAT: "YYYY-MM-DD",
      ISO8601_DATETIME_FORMAT: "YYYY-MM-DD HH:MM",
      dateToString: function (e) {
        return moment.tz ? moment.tz(e, TPParam.CLIENT_TIMEZONE).format(this.ISO8601_DATE_FORMAT) : moment(e).format(this.ISO8601_DATE_FORMAT);
      },
      datetimeToString: function (e) {
        return moment.tz ? moment.tz(e, TPParam.CLIENT_TIMEZONE).format(this.ISO8601_DATETIME_FORMAT) : moment(e).format(this.ISO8601_DATETIME_FORMAT);
      }
    };
  });
  var ajaxServices = angular.module("ajaxServices", []);
  ajaxServices.config(["$httpProvider", function (e) {
    e.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", e.defaults.headers.common["Ng-Request"] = "1", e.interceptors.push("tpHttpInterceptor");
    e.defaults.transformRequest.push(function (e, t) {
      var n = t && t();
      return n && (n[withoutSpinnerHeaderNameLowerCase] || n[withoutSpinnerHeaderName]) || tinypass.withoutWaitPanel ? e : (tinypass.showWaitPanel(), e);
    });
  }]), ajaxServices.factory("tpHttpInterceptor", ["$q", function (e) {
    return {
      response: function (e) {
        return e.data && (e.data.models && (e.models = e.data.models), e.data.errors && (e.errors = e.data.errors)), tinypass.updateMetaRefresh(), isIncludesWithoutSpinnerHeader(e) || tinypass.hideWaitPanel(), e;
      },
      responseError: function (t) {
        return t.data && (t.data.models && (t.models = t.data.models), t.data.errors && (t.errors = t.data.errors)), isIncludesWithoutSpinnerHeader(t) || tinypass.hideWaitPanel(), e.reject(t);
      }
    };
  }]), ajaxServices.factory("repeatHTTP", ["$q", function (e) {
    var t = function (n, r) {
      var o = (r = r || {}).defer,
        a = r.attempt || 0,
        i = r.times || 1,
        s = r.cancelConfig || {};
      return o ? (n().then(function (e) {
        o.resolve(e);
      }).catch(function (e) {
        s.cancel || (a >= i ? o.reject(e) : t(n, Object.assign({}, r, {
          attempt: a + 1
        })));
      }), o.promise) : (Log.info("defer is required"), e.reject());
    };
    return t;
  }]), ajaxServices.factory("tpHTTP", ["$http", "$window", "$q", "$rootScope", function ($http, $window, $q, $rootScope) {
    var f = function (e, t) {
      !t && (e.url = f.getUrl() + e.url);
      var n = $http(e);
      return n.then(f.processHeaders), n;
    };
    return f.get = function (e, t) {
      e = f.getUrl() + e;
      var n = $http.get(e, t);
      return n.then(f.processHeaders), n;
    }, f.post = function (e, t, n) {
      e = f.getUrl() + e;
      var r = $http.post(e, t, n);
      return r.then(f.processHeaders), r;
    }, f.jsonp = function (e, t) {
      return (t = t || {}).callback = t.callback || "JSON_CALLBACK", $http.jsonp(e, {
        params: t
      }).then(function (e) {
        return e.data;
      });
    }, f.processResponse = function (e) {
      return e.data && e.data.models && (e.models = e.data.models), e.data && e.data.errors && (e.errors = e.data.errors), e;
    }, f.processResponseCatch = function (e) {
      return e.data && e.data.models && (e.models = e.data.models), e.data && e.data.errors && (e.errors = e.data.errors), $q.reject(e);
    }, f.processHeaders = function (response) {
      var headers = response.headers();
      if (headers.execute_js_after) try {
        eval(headers.execute_js_after);
      } catch (e) {}
      return response;
    }, f.extractErrors = function (e, t, n) {
      e && (e.errors || e.modalErrors) && (n.formErrors = e.errors && e.errors.length ? e.errors : e.modalErrors, angular.forEach(n.formErrors, function (e) {
        var n = e.field,
          r = (e.key, e.msg);
        t && t[n] && (angular.element("#" + n).focus(), t[n].$setValidity("error", !1), t[n].$error.msg = r);
      }));
    }, f.resetFormErrors = function (e, t, n) {
      try {
        n && (n.errors = [], n.modalErrors = []), angular.forEach(t.formErrors, function (t) {
          e[t.field].$setValidity("error", !0), e[t.field].$setPristine();
        }), delete t.formErrors, e.$setPristine(), t.$$phase || t.$apply();
      } catch (e) {
        Log.info("Could not reset form errors!", e);
      }
    }, f.setFieldsValid = function (e, t) {
      try {
        angular.forEach(e, function (e, t) {
          0 != t.indexOf("$") && (e.$setValidity("error", !0), e.$setPristine());
        }), e.$setPristine(), t.$$phase || t.$apply();
      } catch (e) {
        Log.info("Could not reset form errors!", e);
      }
    }, f.extractModels = function (e, t) {
      if (e && e.models) for (var n in e.models) t[n] = e.models[n];
      if (e && e.routes) for (var r in void 0 === t.routes && (t.routes = {}), e.routes) t.routes[r] = e.routes[r];
    }, f.promiseResponse = function (e, t) {
      var n = $q.defer();
      return t.errors = [], e.then(function (e) {
        if (e && e.errors && angular.copy(e.errors, t.errors), e && e.models) for (var r in e.models) e.models.hasOwnProperty(r) && (t[r] = e.models[r]);
        n.resolve();
      }).catch(function (e) {
        e && e.errors && angular.copy(e.errors, t.errors), n.reject();
      }), n.promise;
    }, f.extractModelsTo = function (e) {
      return function (t) {
        f.extractModels(t.data, e);
      };
    }, f.successHander = function (e) {
      return function (t) {
        e.resolve({
          data: t,
          ok: !0
        });
      };
    }, f.errorHander = function (e) {
      return function (t) {
        e.resolve({
          data: t,
          ok: !1
        });
      };
    }, f.promiser = function (e) {
      var t = $q.defer();
      return e.then(f.successHander(t)).catch(f.errorHander(t)), t.promise;
    }, f.buildUrl = function (e, t) {
      if (!t) return e;
      var n = [];
      return function (e, t, n) {
        for (var r = function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t.sort();
          }(e), o = 0; o < r.length; o++) t.call(n, e[r[o]], r[o]);
      }(t, function (e, t) {
        null != e && null != e && (angular.isObject(e) && (e = angular.toJson(e)), n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)));
      }), e + (-1 == e.indexOf("?") ? "?" : "&") + n.join("&");
    }, f.getUrl = function () {
      return document.location.origin;
    }, f;
  }]);
  var tinypassService = angular.module("tinypassServices", []);
  function _setCookie(e, t, n, r, o, a, i) {
    var s = new Date();
    s.setTime(s.getTime());
    var c = new Date(s.getTime() + n);
    document.cookie = e + "=" + t + (n ? ";expires=" + c.toGMTString() : "") + (r ? ";path=" + r : "") + (o ? ";domain=" + o : "") + (a ? ";secure" : "") + (i ? ";samesite=" + i : "none");
  }
  function _getCookie(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0;
  }
  tinypassService.factory("TinypassService", ["$q", function (e) {
    var t;
    function n() {
      return t || (t = function () {
        try {
          return window.self !== window.top;
        } catch (e) {
          return !0;
        }
      }() ? " samesite=none; " : " samesite=lax; ", "https:" === window.location.protocol && (t += " secure;"), t);
    }
    function r() {
      var e,
        t,
        r = "weird_get_top_level_domain=cookie",
        o = document.location.hostname.split(".");
      if (1 === o.length) return o[0];
      if (4 === o.length && !isNaN(o[0]) && !isNaN(o[3])) return document.location.hostname;
      for (e = o.length - 1; e >= 0; e--) {
        t = "." + o.slice(e).join(".");
        var a = n();
        if (document.cookie = r + ";domain=" + t + ";" + a, document.cookie.indexOf(r) > -1) return document.cookie = r.split("=")[0] + "=;domain=" + t + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;" + a, t;
      }
    }
    return {
      setMessage: function (e, t) {
        tinypass.setMessageDashboard(e, t);
      },
      hideMessage: function () {
        tinypass.hideMessage();
      },
      cropImage: function (e, t, n, r, o, a, i, s, c) {
        tinypass.cropImage(e, t, n, r, o, a, i, s, c);
      },
      getISODate: function (e, t) {
        var n, r;
        return n = e ? new Date(e.getFullYear(), e.getMonth(), e.getDate()) : new Date(), r = t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59) : new Date(), {
          from: moment(n).format("YYYY-MM-DDTHH:mm:ssZZ"),
          to: moment(r).format("YYYY-MM-DDTHH:mm:ssZZ")
        };
      },
      reduceZeros: function (e) {
        var t = (e = Math.round(e)) / 1e3 + "";
        return 0 != e && (t = (t = (t = (t + (t.indexOf(".") < 0 ? "." : "") + "000").replace(/(\..{3}).*$/, "$1")).substring(0, t.length - Math.min(3, (e + "").length - 2)).replace(/[.]$/, "")).split("").reverse().join("").replace(/((\d{3})(?!($|-|.*[.])))/g, "$1,").split("").reverse().join("")), t;
      },
      generateRandomString: function (e) {
        e = e || 10;
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
        return t;
      },
      generateSuccessMessage: function (e) {
        return function () {
          tinypass.setMessage("success", e);
        };
      },
      generateErrorMessage: function (t) {
        return function () {
          return tinypass.setMessage("error", t), e.reject();
        };
      },
      showRequestError: function (t) {
        return tinypass.setMessage("error", t.data.errors[0].msg), e.reject(t);
      },
      showRequestErrorDashboard: function (t) {
        return tinypass.setMessageDashboard("error", t.data.errors[0].msg), e.reject(t);
      },
      getInMinorUnits: function (e) {
        return e ? Math.round(100 * e) : 0;
      },
      getCurrencyByCode: function (e) {
        if ("" == e) return "$";
        var t;
        switch (e) {
          case "USD":
            t = "$";
            break;
          case "EUR":
            t = "€";
            break;
          case "AUD":
            t = "$";
            break;
          case "GBP":
            t = "£";
            break;
          case "JPY":
            t = "¥";
            break;
          default:
            t = e;
        }
        return t;
      },
      setCookie: function (e, t, o) {
        var a = new Date();
        a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3);
        var i = "expires=" + a.toUTCString();
        document.cookie = e + "=" + t + "; " + i + "; domain= " + r() + "; path=/;" + n();
      },
      getCookie: function (e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        if (t.length > 1) return t.pop().split(";").shift();
      },
      getTopDomain: r,
      getCookieSameSiteAndSecureAttrString: n
    };
  }]), tinypassService.factory("LangUtils", [function () {
    return {
      getPersonalName: function (e, t, n) {
        var r = e.getLang();
        return !["zz_ZZ", "ja_JP"].some(function (e) {
          return e === r;
        }) ? [t, n].filter(function (e) {
          return !!e;
        }).join(" ") : [n, t].filter(function (e) {
          return !!e;
        }).join(" ");
      }
    };
  }]), tinypassService.factory("modalConfirm", ["$rootScope", "$modal", function (e, t) {
    return function (n, r, o, a) {
      var i = e.$new();
      i.title = n, i.msg = r;
      var s = {
          scope: i,
          templateUrl: "/libs/tinypass/_confirm_popup.shtml"
        },
        c = t.open(s);
      function u(e) {
        c.close(e);
      }
      return i.onOk = function () {
        a && "function" == typeof a ? a().then(u) : u(o);
      }, c.result;
    };
  }]), tinypassService.factory("UpdatePerfectScrollbar", ["UpdateSpecificScrollbar", function (e) {
    return function (t) {
      if (t && t.target && t.target.nodeName) {
        var n,
          r,
          o = $(t.target);
        if ("input" == t.target.nodeName.toLowerCase()) {
          var a = o.parents(".tp-dropdown__container"),
            i = o.parents(".dropdown-menu");
          return void (i.length > 0 ? i : a).find(".ps-container").each(function () {
            var e = $(this);
            e.is(":visible") && e.scrollTop(0);
          });
        }
        n = o.parent().outerHeight(!0), r = o.parents(".ps-container"), e(r, n);
      }
    };
  }]), tinypassService.factory("UpdateSpecificScrollbar", function () {
    return function (e, t) {
      var n = e.children().height(),
        r = e.height(),
        o = e.scrollTop();
      o + r + t >= n && n >= r && e.scrollTop(o - t);
    };
  }), tinypassService.factory("iframeService", ["$rootElement", function (e) {
    return {
      injectHiddenIframe: t,
      injectHiddenIframeWithTimeout: function (e, n, r, o) {
        var a = t(e, n),
          i = window.setTimeout(function () {
            angular.element("#" + e).remove(), o && o();
          }, r || 15e3);
        return {
          iframe: a,
          cancel: function () {
            window.clearTimeout(i);
          }
        };
      },
      injectIframe: function (e, t, r) {
        var o = t ? ' src="' + t + '" ' : "";
        return n(angular.element("<iframe " + o + "></iframe>"), e, r, {
          backgroundColor: "transparent",
          border: "0",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 4
        });
      },
      injectRealIframe: function (e, t, r, o) {
        var a = {
          backgroundColor: "#ffffff",
          border: "0",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1
        };
        return Object.assign(a, o), n(angular.element(t), e, r, a);
      },
      injectHungTimeoutIframe: function (e, n) {
        return window.setTimeout(function () {
          var r = t(e),
            o = r.contentWindow ? r.contentWindow.document : r.contentDocument;
          o.open("text/html", "replace"), o.write('<html>    <head>        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        <script type="text/javascript">            function submitform() {                document.forms["page_return"].submit();            }        <\/script>    </head>    <body onload="submitform()">        <form name="page_return" method="post" action="' + n + '">            <input type="hidden" name="resultCode" value="999">            <input type="hidden" name="message" value="Request timeout">        </form>    </body></html>'), o.close();
        }, 15e3);
      },
      appendContentToIframe: function (e, t) {
        var n = e.contentWindow ? e.contentWindow.document : e.contentDocument;
        n.open("text/html", "replace"), n.write(t), n.close();
      },
      getAncestorOrigins: function () {
        var e = document.location.ancestorOrigins;
        if (!e) {
          var t = document.referrer,
            n = t.split("/");
          e = {
            0: n[0] + "//" + n[2],
            length: 1
          };
        }
        return e;
      }
    };
    function t(t, n) {
      var r = n ? ' src="' + n + '" ' : "";
      angular.element("#" + t).remove();
      var o = angular.element('<iframe id="' + t + '"' + r + ' style="display: none"></iframe>')[0];
      return e.append(o), o;
    }
    function n(e, t, n, r) {
      angular.element("#" + t).remove(), e.attr({
        allowtransparency: "true",
        id: t
      }).css(r);
      var o = e[0];
      return n.append(o), o;
    }
  }]);
  var selectFactory = angular.module("selectFactory", ["ajaxServices"]);
  selectFactory.factory("selectServiceFactory", ["tpHTTP", "$timeout", function (e, t) {
    return function (n) {
      var r = {},
        o = !!n.invalidateUpdate,
        a = {
          search: function (n) {
            var i = r[n];
            i && !a.instantUpdate || (i = function (n) {
              r[n] = function (t) {
                var n = a.buildParams(t);
                return e.post(a.endpoint, n).then(a.extractItems).catch(function (e) {});
              }(n), a.instantUpdate = !1, o && t(function () {
                delete r[n];
              }, 1e3);
              return r[n];
            }(n));
            return i;
          }
        };
      return angular.extend(a, n), a;
    };
  }]), selectFactory.factory("selectDirectiveFactory", ["$timeout", "UpdatePerfectScrollbar", "$perfectScrollBarService", function (e, t, n) {
    return function (r) {
      return {
        restrict: "AE",
        replace: !0,
        transclude: !0,
        scope: {
          ngModel: "=",
          item: "=",
          clickFn: "=?",
          searchFn: "=?",
          clickOnClose: "=?"
        },
        require: "ngModel",
        templateUrl: r.templateUrl,
        link: function (o, a, i, s) {
          var c,
            u = {};
          if (o.disabled = "true" == i.ngDisabled, o.disabled) return;
          o.closeOnSelect = void 0 !== i.closeOnSelect, o.multiple = void 0 !== i.multiple, o.excludeSelected = void 0 !== i.excludeSelected, o.showCheckbox = o.multiple && !o.excludeSelected, o.model = {
            filter: "",
            list: [],
            selected: {}
          }, o.onSearch = l, o.searchItems = p, o.updateScrollBar = f, o.cancelClick = function (e) {
            e.stopPropagation(), e.preventDefault();
          }, o.closeDropdown = function () {
            $(".dropdown.open", a).removeClass("open");
          }, o.setItem = function (e, t) {
            if (void 0 === e.disabled || !e.disabled) {
              if (o.multiple) {
                var n = angular.copy(o.ngModel || []),
                  r = d(e, n);
                null === r ? n.push(e) : n.splice(r, 1), o.ngModel = n, s.$setViewValue(o.ngModel);
              } else o.ngModel = e, s.$setViewValue(o.ngModel);
              o.closeOnSelect && (o.closeDropdown(), o.clickOnClose && o.clickOnClose(o.ngModel)), f(t);
            }
          }, o.modelContains = function (e) {
            return null !== d(e, o.ngModel || []);
          }, o.setFocusAfterClick = function () {
            $("input:first", a).focus();
          }, o.onOpen = function (e) {
            o.clickFn && o.clickFn(p), function (e) {
              e && !u[e] && (u[e] = !0, n.notify("update-perfect-scrollbar"));
            }(e);
          }, o.selectAll = function () {
            if (o.multiple) {
              var e = o.ngModel || [],
                t = [];
              e.length || (t = angular.copy(o.model.list)), o.ngModel = t, s.$setViewValue(o.ngModel);
            }
          }, l(), o.multiple && o.$watch("ngModel", function () {
            !function () {
              var e = {};
              if (!o.multiple) return;
              if (!o.ngModel || !Array.isArray(o.ngModel) || o.ngModel.length <= 0) return void (o.model.selected = null);
              o.ngModel.forEach(function (t) {
                e[t[r.idProperty]] = !0;
              }), o.model.selected = e;
            }();
          }, !0);
          function l(t) {
            c && e.cancel(c);
            var n = o.model.filter ? 300 : 0;
            c = e(function () {
              p(t);
            }, n);
          }
          function d(e, t) {
            for (var n = t.length, o = 0; o < n; o++) if (t[o][r.idProperty] === e[r.idProperty]) return o;
            return null;
          }
          function f(e) {
            t(e);
          }
          function p(e) {
            var t = o.searchFn || r.searchService.search;
            t && t(o.model.filter).then(function (t) {
              t.forEach(function (e) {
                e.id = e[r.idProperty];
              }), o.model.list = t, e && o.updateScrollBar(e);
            });
          }
        }
      };
    };
  }]);
  var loggingModule = angular.module("loggingModule", ["ajaxServices"]);
  loggingModule.factory("loggingService", ["tpHTTP", function (e) {
    var t = {
      logToServer: function (t) {
        try {
          var n = new Error();
          e.post(TPParam.LOG_ERROR, {
            description: t,
            url: window.location.href,
            trace: n.stack
          });
        } catch (e) {}
      }
    };
    return t;
  }]), angular.module("paymentFormModule", []).factory("loaderService", function () {
    return {
      showLoader: function () {
        var e = document.getElementById("pp-loader");
        e && (e.style.display = "block");
      },
      hideLoader: function () {
        var e = document.getElementById("pp-loader");
        e && (e.style.display = "none");
      }
    };
  });
}(), window.html5ModeConfig = html5ModeConfig, String.prototype.format = function () {
  for (var e = this, t = 0; t < arguments.length; t++) {
    var n = "{" + t + "}";
    e = e.replace(n, arguments[t]);
  }
  return e;
}, function (e) {
  var t, n;
  void 0 === e.tinypass && (e.tinypass = {}), tinypass.uploadFile2 = function (e, t) {}, tinypass.setMessageDashboard = function (e, t) {
    return "error" === e ? tinypass.__setErrorMessageDashboard(t) : tinypass.__setMessage(e, t);
  }, tinypass.__buildAlertPopupDashboard = function (e, t) {
    if (t) {
      var n = $('<div class="notification error"><span class="message">' + t + '</span><button type="button" class="close close-alert-dashboard">&times;</button></div>');
      $(document.body).append(n), n.css("marginLeft", -n.outerWidth() / 2), n.addClass("in"), $(".close-alert-dashboard").unbind("click").click(function () {
        $(this).parent().remove(), tinypass.__buildAlertPopupDashboard();
      });
    }
    for (var r = $(".notification"), o = 0, a = 0; a < r.length; a++) $(r[a]), 0 !== a ? $(r[a]).css({
      top: 90 + o + "px"
    }) : $(r[a]).css({
      top: "90px"
    }), o += $(r[a]).outerHeight() + 10;
  }, tinypass.__setErrorMessageDashboard = function (e) {
    if ($(".modal-body").is(":visible")) $(".modal-body  .alert").remove(), $(".modal-body").prepend(tinypass.__buildAlertPopup("error", e));else if ($("#popup").is(":visible")) $("#popup #popup-content .alert").remove(), $("#popup #popup-content").prepend(tinypass.__buildAlertPopup("error", e));else if ($(".modal .modal-body").length > 0) {
      for (var t = $(".modal .modal-body"), n = !1, r = 0; r < t.length; r++) {
        var o = t[r];
        $(o).is(":visible") && ($(".alert", o).remove(), $(o).prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))), n = !0);
      }
      n || ($(".container .main").length > 0 ? tinypass.__buildAlertPopupDashboard("error", e) : tinypass.__setMessage("error", e));
    } else if ($(".container .main").length > 0) tinypass.__buildAlertPopupDashboard("error", e);else if ($("#payscreen #alert").length > 0) {
      $("#payscreen #alert").html(e);
    } else tinypass.__setMessage("error", e);
  }, tinypass.setMessage = function (e, t) {
    return "error" === e ? tinypass.__setErrorMessage(t) : tinypass.__setMessage(e, t);
  }, tinypass.hideMessage = function () {
    $(".alert-top").remove(), $(".tinypass-alert-messase").remove(), $(".notification.error").remove();
  }, tinypass.__buildAlertPopup = function (e, t) {
    return $('<div class="alert alert-block alert-' + e + ' tinypass-alert-messase"></div>').append('<button type="button" class="close" data-dismiss="alert">&times;</button>').append($('<span class="message"></span>').text(t));
  }, tinypass.__setErrorMessage = function (e) {
    if ($(".modal-body").is(":visible")) $(".modal-body  .alert").remove(), $(".modal-body").prepend(tinypass.__buildAlertPopup("error", e));else if ($("#popup").is(":visible")) $("#popup #popup-content .alert").remove(), $("#popup #popup-content").prepend(tinypass.__buildAlertPopup("error", e));else if ($(".modal .modal-body").length > 0) {
      for (var t = $(".modal .modal-body"), n = !1, r = 0; r < t.length; r++) {
        var o = t[r];
        $(o).is(":visible") && ($(".alert", o).remove(), $(o).prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))), n = !0);
      }
      n || ($(".container .main").length > 0 ? ($(".container .main .alert").remove(), $(".container .main").prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e)))) : tinypass.__setMessage("error", e));
    } else if ($(".container .main").length > 0) $(".container .main .alert").remove(), $(".container .main").prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))), setTimeout(function () {
      $(".container .main .alert").fadeOut(2e3);
    }, 1e3);else if ($("#payscreen #alert").length > 0) {
      $("#payscreen #alert").html(e);
    } else tinypass.__setMessage("error", e);
  }, tinypass.__setMessage = function (t, n, r) {
    var o = $('<div class="notification"><i class="icon-check-white status"></i><span class="message">' + n + "</span></div>");
    $(document.body).append(o), e.innerWidth > 648 && o.css("marginLeft", -o.outerWidth() / 2), o.addClass("in"), setTimeout(function () {
      o.removeClass("in");
    }, 3e3), setTimeout(function () {
      o.remove();
    }, 5e3);
  }, tinypass.setOpacity = function (e, t) {
    $(e).css("filter", "alpha(opacity=" + 100 * t + ")").css("-khtml-opacity", t).css("-moz-opacity", t).css("opacity", t);
  }, tinypass.showWaitPanel = function (e) {
    if (e || (e = {}), tinypass.hideWaitPanel(), $("body").append($('<div id="waitPanel">' + (e.title ? e.title : "Loading...") + "</div>").css("display", "block")), e.modal) {
      var t = $('<div id="tinypassModalWindow"/>');
      t.css("position", "fixed").css("left", "0").css("top", "0").css("width", "100%").css("height", "100%").css("z-index", "1000"), e.opacity ? tinypass.setOpacity(t.css("background-color", e.background ? e.background : "white"), e.opacity) : t.css("background-color", "transparent"), $("body").append(t);
    }
  }, tinypass.hideWaitPanel = function () {
    $("#waitPanel").remove(), $("#tinypassModalWindow").remove();
  }, tinypass.__buildPopup = function () {
    return $('<div id="popup" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;"><div id="popup-title" class="modal-header"></div><div id="popup-content" class="modal-body"></div><div id="popup-controls" class="modal-footer"></div></div>');
  }, tinypass.updateMetaRefresh = function (e) {
    e && (n = e), n && !isNaN(n) && (clearTimeout(t), t = setTimeout("window.location.reload()", n));
  }, tinypass.__initNewlyAddedContent = function (e) {
    tinypass.__initToolTips(e);
  }, $(document).ready(function () {
    var e = $("body");
    e.append(tinypass.__buildPopup()), e.ajaxStart(function () {
      tinypass.updateMetaRefresh(), tinypass.showWaitPanel();
    }), e.ajaxStop(function () {
      tinypass.hideWaitPanel();
    }), $("table.row-alternate").each(function () {
      $(this).find("tr:even").find("td").toggleClass("line-item-alt", !0), $(this).find("tr:odd").find("td").toggleClass("line-item-alt2", !0);
    }), tinypass.__initNewlyAddedContent(e), function (e) {
      var t = new Array();
      e.Watermark = {
        ShowAll: function () {
          for (var e = 0; e < t.length; e++) "" === t[e].obj.val() ? (t[e].obj.val(t[e].text), t[e].obj.toggleClass("watermark", !0)) : t[e].obj.toggleClass("watermark", !1);
        },
        HideAll: function () {
          for (var e = 0; e < t.length; e++) t[e].obj.val() === t[e].text && t[e].obj.val("");
        }
      }, e.fn.Watermark = function (n) {
        return this.each(function () {
          var r = e(this);
          function o() {
            0 === r.val().length && r.toggleClass("watermark", !0).val(n);
          }
          t[t.length] = {
            text: n,
            obj: r
          }, r.focus(function () {
            r.hasClass("watermark") && r.toggleClass("watermark", !1).val("");
          }), r.blur(o), o();
        });
      };
    }(jQuery);
  }), tinypass.__initToolTips = function (e) {
    $(e).find('*[data-toggle="tooltip"]').each(function () {
      var e = $(this);
      e.attr("title") || e.attr("title", e.html()), e.tooltip({
        html: !0
      });
    });
  }, tinypass.hasFlash = function () {
    try {
      return ZeroClipboard.detectFlashSupport();
    } catch (e) {}
    return !1;
  }, tinypass.copyToClipboard = function (e, t) {
    var n, r, o;
    try {
      if (!tinypass.hasFlash()) return null;
      for (var a in r = $(e), (o = {}).moviePath = "/js/ZeroClipboard.swf", t) o[a] = t[a];
      return (n = new ZeroClipboard(r, o)).glue(r), n;
    } catch (e) {}
  }, tinypass.initImageCropper = function (e, t, n, r) {}, tinypass.cropImage = function (e, t, n, r, o, a, i, s, c, u) {}, tinypass.stripSpaces = function (e) {
    return null == e ? e : e.replace(/\s+/g, "");
  }, tinypass.ccLuhnCheck = function (e) {
    if (!e.match(/^\d+$/)) return !1;
    for (var t = e.length, n = 1 & t, r = 0, o = 0; o < t; o++) {
      var a = parseInt(e.charAt(o));
      1 & o ^ n || (a *= 2) > 9 && (a -= 9), r += a;
    }
    return r % 10 == 0;
  }, tinypass.convertCurrencyAndFormat = function (e, t) {
    try {
      if (!e || e.match(/.*[^0-9.].*/)) return "?.??";
      if (!t || t.match(/.*[^0-9.].*/)) return "?.??";
      var n = parseFloat(e) / parseFloat(t);
      return 0 === n || isNaN(n) ? "?.??" : n = (Math.ceil(Math.round(1e4 * n) / 100) / 100).toFixed(2).replace(/[.]00$/, "");
    } catch (e) {
      return "?.??";
    }
  };
  try {
    $(document).ready(function () {
      $(e).on("resize", function () {
        $("#left-nav").find("#left-nav-panel").height($(e).height() - 121);
      }), $(e).trigger("resize");
    });
  } catch (e) {}
}(window);
var pnErrorWatcher = function () {
    return new function () {
      var e = [];
      const t = {
        OFFER: "offer",
        TEMPLATE: "template",
        MYACCOUNT: "myaccount"
      };
      function n(n) {
        var r = {
          userAgent: navigator.userAgent
        };
        if (n instanceof Error && (r.stack = n.stack, r.message = n.message), n instanceof Event) {
          var o = n,
            a = "error" in o && o.error;
          r.stack = a ? o.error.stack : "n/a", r.message = a ? o.error.message : "n/a";
        }
        r.parentUrl = encodeURIComponent(getParameterByName("url")), r.iframeSrc = encodeURIComponent(document.location.href), r.experienceId = getParameterByName("experienceId");
        var i,
          s = getParameterByName("widget");
        r.tags = s ? [s] : ["unknown"], r.tags.push("wgt_err"), r.tags.push(getDeviceType()), function (e, n) {
          e === t.OFFER ? function (e) {
            e.activeState = getActiveState(), e.tags.push(getSelectedTermId()), e.tags.push(getParameterByName("offerId"));
          }(n) : e === t.MYACCOUNT ? function (e) {
            e.activeTab = TPParam.ACTIVE_TAB, e.tags.push(TPParam.ACTIVE_TAB);
          }(n) : e === t.TEMPLATE && function (e) {
            e.tags.push(getParameterByName("templateId")), e.tags.push(getParameterByName("templateVariantId"));
          }(n);
        }(s, r), i = r, -1 === e.map(JSON.stringify).indexOf(JSON.stringify(i)) && e.push(r);
      }
      function r(e) {
        try {
          n(e);
        } catch (e) {
          console.warn("Can not log an error, something went wrong: ", e);
        }
      }
      this.manualLog = function (e) {
        try {
          n(e);
        } catch (t) {
          console.warn("Can not log an error, something went wrong: ", t, e);
        }
      }, this.watchUnhandled = function () {
        window.addEventListener && window.addEventListener("error", r);
      }, this.reset = function () {
        window.removeEventListener("error", r);
      }, this.getErrors = function () {
        return e.map(function (e) {
          return Object.assign({}, e);
        });
      };
    }();
  }(),
  errorHandler = function (e) {
    function t() {
      this.sender = null, this.event = null, this.params = null;
    }
    var n = 1e4;
    try {
      return new function () {
        var r = {
          whitelistUrls: []
        };
        function o() {
          try {
            var n = e.getErrors().filter(function (e) {
              return r.whitelistUrls.some(function (t) {
                return e.stack && e.stack.match(t);
              });
            });
            if (0 === n.length) return;
            !function (e) {
              try {
                var n = window.opener || window.parent,
                  r = Object.assign(new t(), {
                    sender: getParameterByName("iframeId"),
                    event: "EVENT_TP_ERROR_HANDLER",
                    params: e
                  });
                n && n.postMessage(JSON.stringify(r), "*");
              } catch (e) {
                console.warn("Can not post message errors to parent: ", e);
              }
            }(n);
          } catch (e) {
            console.warn("Errors can not be sent: ", e);
          }
        }
        function a() {
          e.watchUnhandled(), setTimeout(function () {
            o(), e.reset();
          }, n);
        }
        this.setConfig = function (e) {
          r = Object.assign(r, e);
        }, this.start = function () {
          try {
            a();
          } catch (e) {
            console.warn("Error logger can not be started: ", e);
          }
        };
      }();
    } catch (e) {
      console.warn("Can't initiate errorHandler: ", e);
    }
  }(pnErrorWatcher);
!function (e) {
  try {
    var t = [/\w*\.tinypass\.com/, /localhost/],
      n = localStorage.getItem("__tp-tinypassErrorHandlerTestMode"),
      r = location && location.hostname;
    n && r && t.push(new RegExp(r)), e.setConfig({
      whitelistUrls: t
    }), e.start();
  } catch (e) {
    console.warn("Can't configure errorHandler: ", e);
  }
}(errorHandler), angular.module("exceptionHandler", []).factory("$exceptionHandler", ["$log", function (e) {
  return function (t, n) {
    e.warn(t);
    var r = window.pnErrorWatcher;
    r && r.manualLog(t);
  };
}]), window.PP_LIST = {
  CREDIT_CARD: 4,
  AMAZON: 8,
  MOCK: 5,
  ZERO: 0,
  PAYPAL_BT: 11,
  WORLDPAY_HPP: 12,
  WORLDPAY_PAYPAL: 13,
  WORLDPAY_IDEAL: 14,
  WORLDPAY_ELV: 15,
  SPREEDLY_CC: 16,
  SPREEDLY_STRIPE_CC: 17,
  SPREEDLY_BEANSTREAM: 18,
  EDGIL_PAYWAY: 19,
  WORLDPAY_CC_TOKEN: 20,
  SPREEDLY_PAYU_LATAM: 21,
  PAYPAL_EXPRESS_CHECKOUT: 22,
  SPREEDLY_OPENPAY: 23,
  EIGEN: 24,
  APPLE_PAY_BT: 25,
  OPENPAY_CASH: 26,
  EASYPAY_MULTIBANCO: 28,
  EASYPAY_MBWAY: 29,
  EASYPAY_DIRECT_DEBIT: 30,
  EASYPAY_BOLETO: 31,
  KLARNA: 32,
  OBI: 33,
  OBI_PAYPAL: 34,
  DATATRANS: 35,
  DATATRANS_POSTFINANCE: 36,
  ONET: 37,
  APPLE_PAY_SS: 38,
  CYBER_SOURCE: 39,
  STRIPE: 40,
  STRIPE_APPLEPAY: 41,
  PAYWAY_APPLEPAY: 42,
  WIRECARD: 45,
  CREDIT_GUARD_CC: 66,
  PAY_U_BRAZIL_BOLETO: 62,
  VOLGA: 63,
  INVOICE_BASED_SECOND: 72,
  INVOICE_BASED_FIRST: 75
}, angular.extend(window, window.PP_LIST);
const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
var generalModule = angular.module("generalModule", ["ui.router", "ajaxServices", "ngSanitize"]);
const originalFetch = window.fetch;
function getMonths() {
  return {
    "01": "1 - Jan",
    "02": "2 - Feb",
    "03": "3 - Mar",
    "04": "4 - Apr",
    "05": "5 - May",
    "06": "6 - Jun",
    "07": "7 - Jul",
    "08": "8 - Aug",
    "09": "9 - Sept",
    10: "10 - Oct",
    11: "11 - Nov",
    12: "12 - Dec"
  };
}
function getYears() {
  for (var e = new Date().getFullYear(), t = {}, n = e; n < e + 13; ++n) {
    t[(n + "").substring(2)] = n;
  }
  return t;
}
const originalLocalStorageSetItem = window.localStorage.setItem;
function isString(e) {
  return "string" == typeof e;
}
const originalDocumentWrite = document.write;
const eventHooks = window.eventhooks;
function isNumber(e) {
  return e && "" !== e && !isNaN(e);
}
function lowercase(e) {
  return isString(e) ? e.toLowerCase() : e;
}
function toBoolean(e) {
  if ("function" == typeof e) e = !0;else if (e && 0 !== e.length) {
    var t = lowercase("" + e);
    e = !("f" === t || "0" === t || "false" === t || "no" === t || "n" === t || "[]" === t);
  } else e = !1;
  return e;
}
function _randomString(e) {
  e || (e = 5);
  for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
generalModule.factory("cookieService", function () {
  var e = {
    getCookie: function (e) {
      for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
        for (var o = n[r]; " " === o.charAt(0);) o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return "";
    },
    setCookie: function (e, t, n, r) {
      var o = e + "=" + t + ";expires=" + n;
      r && (o += ";path=" + r), document.cookie = o;
    },
    eraseCookie: function (e, t) {
      this.setCookie(e, "", new Date().toUTCString(), t);
    }
  };
  return e;
});
function getId() {
  return Math.random().toString(36).substring(7);
}
var util = {
    debug: getParameterByName("debug"),
    log: function () {
      if (util.debug && void 0 !== window.console && void 0 !== window.console.log) {
        var e = arguments;
        (function () {
          var e = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"],
            t = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];
          for (var n in t) {
            var r = t[n];
            if (window[r]) return !0;
          }
          for (var o in e) {
            var a = e[o];
            if (window.document[a]) return !0;
          }
          for (var i in window.document) if (i.match(/\$[a-z]dc_/) && window.document[i].cache_) return !0;
          return !!(window.external && window.external.toString && window.external.toString() && -1 !== window.external.toString().indexOf("Sequentum") || window.document.documentElement.getAttribute("selenium") || window.document.documentElement.getAttribute("webdriver") || window.document.documentElement.getAttribute("driver"));
        })() && (e = function (e) {
          var t = "";
          try {
            for (var n = 0; n < e.length; n++) try {
              t += JSON.stringify(e[n]) + ", ";
            } catch (e) {
              t += "" + e;
            }
            return e = [t];
          } catch (t) {
            return e;
          }
        }(e)), "object" == typeof window.console.log ? window.console.log.apply.call(console.log, console, e) : console.log.apply(console, e);
      }
    }
  },
  urlParams = null;
function getDeviceType() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "mobile" : "desktop";
}
function getActiveState() {
  return angular.element(document.body).injector().get("viewService").getActiveState();
}
function getSelectedTermId() {
  const e = angular.element(document.body).injector().get("checkout").getSelectedTerm();
  return e ? e.termId : null;
}
function getParameterByName(e) {
  if (!urlParams) {
    var t,
      n = /\+/g,
      r = /([^&=]+)=?([^&]*)/g,
      o = function (e) {
        return decodeURIComponent(e.replace(n, " "));
      },
      a = window.location.search.substring(1);
    for (urlParams = {}; t = r.exec(a);) urlParams[o(t[1])] = o(t[2]);
  }
  var i = urlParams[e];
  return !i && window.TPParam && window.TPParam.params && (i = window.TPParam.params[e]), i;
}
function getQueryParamInStringByName(e, t) {
  var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
  return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
}
function getIntParam(e, t) {
  var n = getParameterByName(e);
  return void 0 !== n && isNaN(n) ? t : new Number(n);
}
function validateArgs(eventHooks, eventName, args) {
  const hook = eventHooks.filter(h => h.name === eventName)[0];
  if (!hook || !hook.validator) return true;
  return hook.validator(args);
}
BaseComponentController = {
  _isValid: function () {
    return !0;
  },
  displayErrors: function (e, t, n, r) {
    if (t) if (Array.isArray(t)) for (var o = 0; o < t.length; o++) {
      let e = t[o].msg || t[o].message;
      e && "" !== e.trim() && a(e);
    } else "object" != typeof t ? "string" == typeof t && a(t) : t.message ? a(t.message) : util.log("Unable to extract error message", t);
    function a(t) {
      n(e).global(t), r.checkoutPaymentErrorEvent(t);
    }
  }
};
function trackEvent(eventName, args) {
  const ts = Date.now();
  const eventData = {
    id: getId(),
    name: eventName,
    args: args,
    url: window.location.href,
    userAgent: navigator.userAgent,
    ts
  };
  // Send event data to some tracking URL
  navigator.sendBeacon('/api/tracking', JSON.stringify(eventData));
}
var EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED = "EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED",
  EVENT_CHECKOUT_TERM_SELECTED = "EVENT_CHECKOUT_TERM_SELECTED",
  EVENT_APPLY_REDEEM_CODE = "EVENT_APPLY_REDEEM_CODE",
  EVENT_CHECKOUT_CONSENT_CHANGED = "EVENT_CHECKOUT_CONSENT_CHANGED",
  EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD = "EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD",
  EVENT_CHECKOUT_PRICE_CHANGED = "EVENT_CHECKOUT_PRICE_CHANGED",
  EVENT_CHECKOUT_REDEEM_DONE = "EVENT_CHECKOUT_REDEEM_DONE",
  EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS = "EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS",
  EVENT_BILLING_COUNTRY_SELECTED = "EVENT_BILLING_COUNTRY_SELECTED",
  EVENT_COUNTRY_OF_RESIDENCE_SELECTED = "EVENT_COUNTRY_OF_RESIDENCE_SELECTED",
  EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED = "EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED",
  EVENT_BILLING_FROM_TAX_REQUEST = "EVENT_BILLING_FROM_TAX_REQUEST",
  EVENT_CC_ZIP_CODE_CHANGED = "EVENT_CC_ZIP_CODE_CHANGED",
  EVENT_USER_ACCESS_CHANGED = "EVENT_USER_ACCESS_CHANGED",
  EVENT_ERRORS_CHANGED = "EVENT_ERRORS_CHANGED",
  EVENT_TERMINAL_ERROR = "EVENT_TERMINAL_ERROR",
  EVENT_CONFIG_RELOAD = "EVENT_CONFIG_RELOAD",
  EVENT_STATS_TRACKED = "EVENT_STATS_TRACKED",
  EVENT_TRACKING_ID_CHANGED = "EVENT_TRACKING_ID_CHANGED",
  EVENT_PAY_WITH_NEW_CHANGED = "EVENT_PAY_WITH_NEW_CHANGED",
  EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED = "EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED",
  EVENT_EXPERIAN_ADDRESS_CHANGED = "EVENT_EXPERIAN_ADDRESS_CHANGED",
  EVENT_TAX_RESET_ERRORS = "EVENT_TAX_RESET_ERRORS",
  EVENT_HIGHLIGHT_ERROR_FIELDS = "EVENT_HIGHLIGHT_ERROR_FIELDS",
  ENABLE_SAVE_BUTTON = "ENABLE_SAVE_BUTTON",
  DISABLE_SAVE_BUTTON = "DISABLE_SAVE_BUTTON",
  EVENT_SETUP_CUSTOM_VARIABLES = "setupCustomVariables",
  EVENT_SETUP_AFFILIATE_STATE = "setupAffiliateState",
  EVENT_SETUP_EVT_FIELDS = "setupEVTFields",
  EVENT_ADD_CARD = "EVENT_ADD_CARD",
  EVENT_INIT_BANCARD = "EVENT_INIT_BANCARD",
  EVENT_GOTO_PREVIOUS_STATE = "EVENT_GOTO_PREVIOUS_STATE",
  EVENT_TEMPLATE_RELOADED = "EVENT_TEMPLATE_RELOADED",
  EVENT_TEMPLATE_LOGIN_CHECK_FINISHED = "EVENT_TEMPLATE_LOGIN_CHECK_FINISHED",
  EVENT_TEMPLATE_LOGIN_SUCCESS = "EVENT_TEMPLATE_LOGIN_SUCCESS";
generalModule.factory("ngEventService", ["$rootScope", function (e) {
  var t = {
    fire: function (t, n, r, o, a, i) {
      if (!t || "" === t) throw new Error("eventName is required");
      util.log("[NG EVENT SERVICE] Firing event:", arguments), e.$broadcast(t, n, r, o, a, i);
    },
    subscribe: function (t, n) {
      if (!t || "" === t) throw new Error("eventName is required");
      if (!n) throw new Error("callback is required");
      return e.$on(t, n.bind(arguments));
    }
  };
  return t;
}]), generalModule.factory("stateService", function () {
  var e = {
    active: !(TPParam && TPParam.params ? TPParam.params : {}).preload
  };
  return {
    get: function (t) {
      return e[t];
    },
    set: function (t, n) {
      e[t] = n;
    }
  };
}), generalModule.factory("eventLogger", ["$http", "$window", function (e, t) {
  var n = {
    log: "https://api.tinypass.com/api/v3/anon/error/log"
  };
  function r(r, a) {
    try {
      var i = function () {
          var e = {
              aid: null,
              offerId: null,
              gaTrackingId: null
            },
            n = location.href.match(/aid=([\w\d]+)&/),
            r = location.href.match(/offerId=([\w\d]+)&/);
          return n && (e.aid = n[1]), r && (e.offerId = r[1]), t.ga && t.ga(function (t) {
            e.gaTrackingId = t.get("trackingId");
          }), e;
        }(),
        s = function (e, t, n) {
          var r,
            o,
            a = [];
          try {
            r = "string" == typeof t ? {
              message: t
            } : JSON.stringify(t);
          } catch (e) {
            r = "parse error";
          }
          try {
            o = JSON.stringify(n);
          } catch (e) {
            o = "meta error";
          }
          return a.push("=====checkout event====="), a.push("eventName: " + e), t && a.push("payload: " + r), a.push("meta: " + o), a.push("=====event body end====="), a.join("\n");
        }(r, a, i);
      if (!i) return;
      if (-1 === ["lGr3ciYmC7", "6qv8OniKQO", "bMMF5VBfpu", "FU52w9tupu"].indexOf(i.aid) && "edgilHostedPageSubmitForm" !== r) return;
      e({
        method: "POST",
        url: n.log,
        data: "log_message=" + o(s),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Piano-request-without-spinner": 1
        }
      });
    } catch (e) {
      console.warn("can't log event due to:", e);
    }
  }
  function o(e) {
    var t = getParameterByName("widget"),
      n = [{
        message: e,
        tags: t ? [t] : []
      }];
    return JSON.stringify(n);
  }
  return {
    logGaEvent: function (e) {
      r("gaEvent", e);
    },
    logGaFailedEvent: function (e) {
      r("gaEvent [FAILED]", e);
    },
    logEvent: r
  };
}]), generalModule.factory("gaService", ["$window", "stateService", "integrationEventsService", "eventLogger", "eventService", function (e, t, n, r, o) {
  var a = ["showOffer", "termSelected", "promoApplied", "promoInvalid", "loginSuccess", "loginFailed", "registrationFailed", "registrationSuccess", "checkoutSuccess"],
    i = {
      sendGoogleAnalyticsEvent: function (e) {
        if (e) {
          e.eventCategory = e.eventAction;
          var t = " ";
          e.eventAction = "", angular.forEach(e.params, function (n, r) {
            n && (e.eventAction += t + r + "_" + n, t = "____", e.eventLabel += " " + r + ":" + n);
          });
          var n = {};
          -1 !== a.indexOf(e.eventCategory) && (n.nonInteraction = !0);
          var i = {
            eventCategory: e.eventCategory,
            eventAction: e.eventAction,
            eventLabel: e.eventLabel
          };
          o.emitGAEvent(Object.assign(i, n)), r.logGaEvent(e);
        }
      }
    };
  return i;
}]), generalModule.factory("statsService", ["ngEventService", "stateService", "$q", "$http", function (e, t, n, r) {
  var o = {},
    a = null,
    i = null,
    s = [],
    c = [],
    u = [],
    l = !1,
    d = null,
    f = "tpcc_",
    p = "terms",
    g = ["aid", "preview", "userProvider", "userToken", "url", "tags", "tbc", "contentCreated", "contentSection", "contentAuthor", "experienceId", "experienceExecutionId", "experienceActionId", "pageViewId", "visitId", "trackingId", "previewTemplateVersion", "offerId", "checkoutFlowId", "offerTemplateId", "templateId", "templateVariantId", "offerTemplateVariantId", "pageTitle", "referrerUrl", "templatePubId", "templateVersionPubId", "templateVersion", "templateCategory", "isPasswordlessCheckoutEnabled", "isSingleStepEnabled", "isDoubleOptInEnabled", "affiliateState"];
  function m() {
    if (i) return n.when(E());
    var e = n.defer();
    return s.push(e), e.promise;
  }
  function v() {
    if (i) return n.when(h());
    var e = n.defer();
    return c.push(e), e.promise;
  }
  function h() {
    return l ? {
      checkoutStats: o
    } : {
      initStatParams: i
    };
  }
  function E() {
    return {
      checkoutStats: o,
      initStatParams: i
    };
  }
  function _(e) {
    m().then(function () {
      angular.extend(o, e);
    });
  }
  function y(e) {
    d = e;
  }
  return {
    getStatsPayload: v,
    getStats: m,
    mergeStats: _,
    getParams: function () {
      var e = n.defer();
      return a ? e.resolve(a) : u.push(e), e.promise;
    },
    trackView: function (e) {
      y(e), "offer" !== e && TPParam.TRACK_VIEW && v().then(function (t) {
        r({
          method: "POST",
          url: TPParam.TRACK_VIEW,
          params: {
            view: e
          },
          data: t,
          headers: {
            "Piano-request-without-spinner": 1
          }
        }).then(function (e) {
          e && e.models && e.models.checkoutStats && _(e.models.checkoutStats);
        });
      });
    },
    setCheckoutView: y,
    getPageView: function () {
      let e = E(),
        t = null;
      e && e.initStatParams && (t = e.initStatParams.tbc);
      let n = null;
      return e && e.initStatParams && (n = e.initStatParams.pageViewId), {
        tbc: t,
        pageViewId: n
      };
    },
    handleTrackStatEvent: function (n, m) {
      function v(e, t) {
        e && $.each(e, function (e, n) {
          0 === e.indexOf(f) && (t[e] = n);
        });
      }
      function _(e, t, n) {
        o = t, a = e, i = n;
      }
      t.set("active", !0), TPParam.TRACK_SHOW && (i = function (e, t) {
        var n = {};
        return function (e, t, n) {
          g.forEach(function (r) {
            e && e[r] ? n[r] = e[r] : t && t[r] && (n[r] = t[r]);
          });
        }(e, t, n), function (e, t, n) {
          var r;
          if (e && e[p] ? r = e[p] : t && t[p] && (r = t[p]), Array.isArray(r)) {
            var o = [];
            r.forEach(function (e) {
              e && o.push(e.termId);
            }), n.termIds = o;
          }
        }(e, t, n), v(t, n), v(e, n), function (e) {
          e.checkoutView = d;
        }(n), n.cookie_consents = JSON.stringify(piano.getCookieConsents()), function (e) {
          e.previous_user_segments = piano.getUserSegments();
        }(n), n;
      }(m, TPParam.config), _(m, o, i), s.forEach(function (e) {
        e.resolve(E());
      }), s = [], c.forEach(function (e) {
        e.resolve(h());
      }), c = [], u.forEach(function (e) {
        e.resolve(a);
      }), u = [], e.fire(EVENT_STATS_TRACKED, {
        params: a,
        stat: o
      }), r({
        method: "POST",
        url: function () {
          let e = TPParam.TRACK_SHOW,
            t = getParameterByName("lang");
          return t && (e = e + "?lang=" + t), e;
        }(),
        data: {
          initStatParams: i
        },
        headers: {
          "Piano-request-without-spinner": 1
        }
      }).then(function (e) {
        l = !0, _(m, e.data.models.stats, i);
      }));
    }
  };
}]), generalModule.factory("browserIdService", ["ngEventService", "$q", function (e, t) {
  var n = t.defer();
  return e.subscribe("passBrowserId", function (e, t) {
    n.resolve(t.browserId);
  }), {
    getBrowserId: function () {
      return n.promise;
    }
  };
}]), generalModule.run(["ngEventService", function (e) {
  e.subscribe("passPcidBrowserId", function (e, t) {
    piano.setBrowserId(t.browser_id);
  }), e.subscribe("passPageViewContext", function (e, t) {
    piano.setPageViewContext(t);
  }), e.subscribe("passCookieConsents", function (e, t) {
    piano.setCookieConsents(t);
  }), e.subscribe("passUserSegments", function (e, t) {
    piano.setUserSegments(t);
  });
}]), generalModule.factory("configService", ["ngEventService", function (e) {
  var t = {};
  return {
    get: function () {
      return t;
    },
    setProperty: function (e, n) {
      t[e] = n;
    },
    changed: function () {
      e.fire(EVENT_CONFIG_RELOAD, t);
    }
  };
}]), generalModule.factory("apiService", ["$http", function (e) {
  var t = {
    method: "post",
    headers: {
      "Piano-request-without-spinner": 1
    }
  };
  return {
    call: function (n, r, o) {
      var a = angular.copy(t);
      return a.url = "/api/v3" + n, o && (a.method = o), a.params = r, e(a);
    }
  };
}]), generalModule.factory("modalService", ["$rootScope", "$q", "$http", "$templateCache", "$injector", "$timeout", "$document", "$compile", "$controller", function (e, t, n, r, o, a, i, s, c) {
  var u = {},
    l = {
      created: !1,
      visible: !1,
      domEl: null
    },
    d = {
      created: !1,
      scope: null,
      domEl: null
    };
  return u.openDialog = function (a) {
    var u,
      f,
      p,
      g = {
        close: function (e) {
          !function (e, t, n) {
            var r = t.speed || 600;
            l.created && l.visible && ($(l.domEl).animate({
              opacity: 0
            }, r, "swing"), $(l.domEl).removeClass("active"), l.visible = !1), d.created && $(d.domEl).animate({
              opacity: 0,
              marginTop: 0
            }, r, "swing", function () {
              $(d.domEl).removeClass("active"), $(d.domEl).removeClass("error"), d.domEl.remove(), d.scope.$destroy(), d.scope = null, d.domEl = null, d.created = !1, n && n();
            });
          }(0, a, e);
        }
      };
    if (util.log("MODAL OPTIONS", a), !a.template && !a.templateUrl) throw new Error("One of template or templateUrl options is required.");
    t.all([(p = a, p.template ? t.when(p.template) : n.get(p.templateUrl, {
      cache: r
    }).then(function (e) {
      return e.data;
    }))].concat((u = a.resolve, f = [], angular.forEach(u, function (e, n) {
      (angular.isFunction(e) || angular.isArray(e)) && f.push(t.when(o.invoke(e)));
    }), f))).then(function (t) {
      var n = (a.scope || e).$new();
      n.close = g.close;
      var r = {},
        o = 1;
      a.controller && (r.$scope = n, r.$modalInstance = g, angular.forEach(a.resolve, function (e, n) {
        r[n] = t[o++];
      }), c(a.controller, r)), function (t, n, r) {
        var o = i.find("body").eq(0);
        if (!l.created) {
          var a = e.$new(!0),
            c = s('<div class="modal-overlay"></div> ')(a);
          o.append(c), l.created = !0, l.domEl = c;
        }
        if (!l.visible) {
          var u = $(l.domEl),
            f = r.speed || 600;
          u.addClass("active"), u.animate({
            opacity: .7
          }, f), l.visible = !0;
        }
        var p = angular.element('<div class="modal ' + (r.class || "") + '"></div>');
        p.addClass("active"), p.animate({
          opacity: 1
        }, f), p.html(n.content);
        var g = s(p)(n.scope);
        d.created = !0, d.scope = n.scope, d.domEl = p, o.append(g);
      }(0, {
        scope: n,
        content: t[0]
      }, a);
    });
  }, u.getModalEl = function () {
    return d ? d.domEl : null;
  }, u;
}]), generalModule.factory("shakeService", function () {
  var e = {
    shake: function (e) {
      for (var t = Math.random() < .5 ? -2 : 2, n = 0; n < 10; n++) $(e).animate({
        "margin-left": (t = -t) + "px"
      }, 10 + 2 * n);
      $(e).animate({
        "margin-left": 0
      }, 5);
    }
  };
  return e;
}), generalModule.factory("EventManager", function () {
  return function () {
    var e = {};
    return {
      emit: function (t, n) {
        r(t);
        var o = e[t];
        if (!o) return void console.info("Event `", t, "` with no subscribers was emitted.");
        o.forEach(function (e) {
          e.call(this, n);
        });
      },
      subscribe: t,
      getEventSubscriptionFunc: function (e) {
        return t.bind(null, e);
      },
      unsubscribe: n
    };
    function t(t, o) {
      r(t), function (e) {
        if ("function" != typeof e) throw new TypeError("Expected callback to be a function, but got " + e);
      }(o);
      var a = e[t];
      return a || (a = e[t] = []), a.push(o), n.bind(null, t, o);
    }
    function n(t, n) {
      r(t);
      var o = e[t];
      if (o) {
        var a = o.indexOf(n);
        -1 !== a ? o.splice(a, 1) : console.warn("Given callback was not found for the event `{0}`.".format(t));
      } else console.warn("Attempt to unsubscribe from the unknown event `{0}`.".format(t));
    }
    function r(e) {
      if (!e) throw new TypeError("Expected event name to be a non-empty string, but got " + e);
    }
  };
}), generalModule.directive("customScript", ["$parse", function (e) {
  return {
    restrict: "EA",
    scope: {},
    link: function (t, n) {
      function r(n) {
        var r = n.substring(2, n.length - 1),
          o = e(r)(t.$parent);
        return "string" == typeof o ? '"' + o + '"' : o;
      }
      function o(e) {
        try {
          e = function (e) {
            return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"');
          }(function (e) {
            return e ? e.replace(/#{(.*?)}/g, r) : e;
          }(e));
        } catch (e) {
          console.error(e);
        }
        return "try {\n" + e + "\n} catch (e) { console.error(e); }";
      }
      n.ready(function () {
        var e = document.createElement("script"),
          t = o(n.html());
        e.type = "text/javascript", e.innerHTML = t, n.empty(), document.body.appendChild(e);
      });
    }
  };
}]), generalModule.directive("boilerplateCloseButton", ["configService", function (e) {
  return {
    restrict: "E",
    transclude: !0,
    replace: !0,
    template: "<div ng-if='isShowBoilerplateCloseButton()' class='boilerplate-close-button' ng-click='close()'></div>",
    link: function (t, n, r) {
      t.isShowBoilerplateCloseButton = function () {
        var t = e.get().closeButtonType,
          n = "false" !== getParameterByName("showCloseButton"),
          r = "inline" !== getParameterByName("displayMode");
        return n && "boilerplate" === t && r;
      };
    }
  };
}]), generalModule.directive("pnSticky", ["$timeout", "$interval", "utilsService", function (e, t, n) {
  return {
    restrict: "A",
    link: function (e, r) {
      var o = r.parent(),
        a = o[0];
      o.scroll(n.throttle(function () {
        u(), a.scrollHeight > a.clientHeight ? c || (r.css({
          position: "fixed",
          bottom: "0"
        }), c = !0) : c && (r.css({
          position: "static",
          bottom: ""
        }), c = !1);
      }, 200));
      var i = t(function () {
          a.scrollHeight > a.clientHeight && (r.css({
            position: "fixed",
            bottom: "0"
          }), u());
        }, 100, 100),
        s = !1,
        c = !1;
      function u() {
        s || (t.cancel(i), s = !0);
      }
      e.$on("$destroy", u);
    }
  };
}]), generalModule.factory("windowStateService", [function () {
  return {
    checkIframeOrChildWindow: function () {
      return !0;
    }
  };
}]), generalModule.factory("exposeTemplateParams", function () {
  return function (e) {
    var t = ["aid", "debug", "displayMode", "iframeId", "offerId", "tags", "templateId", "templateVariantId", "url", "width"].concat(["trackingId", "experienceId", "experienceExecutionId", "experienceActionId"]),
      n = {};
    return angular.forEach(t, function (t) {
      e[t] && (n[t] = e[t]);
    }), n;
  };
}), generalModule.factory("exposeCustomVariables", function () {
  return function (e) {
    var t = {};
    try {
      t = JSON.parse(e);
    } catch (e) {}
    return t;
  };
}), generalModule.factory("exposeCustomCookies", function () {
  return function (e) {
    var t = {};
    try {
      t = JSON.parse(e);
    } catch (e) {}
    return t;
  };
}), generalModule.factory("exposeActiveMeters", function () {
  return function (e) {
    var t = [];
    try {
      t = JSON.parse(e);
    } catch (e) {}
    return t;
  };
}), generalModule.service("integrationEventsService", function () {
  this.dispatchLocal = function (e, t) {
    IntegrationEvents.dispatchLocal(e, t);
  }, this.listenExternal = function (e, t) {
    IntegrationEvents.listenExternal(e, t);
  }, this.listenLocal = function (e, t) {
    IntegrationEvents.listenLocal(e, t);
  };
}), generalModule.factory("topLocation", ["$window", "eventService", "$q", function (e, t, n) {
  var r = function () {
    var r = n.defer();
    return t.postMessage("getLocation", {
      resultCallback: function (t) {
        var n = e.document.createElement("a");
        n.href = t.result, r.resolve(n);
      }
    }), r.promise;
  };
  return r.hash = function (e) {
    t.postMessage("setLocationHash", {
      hash: e
    });
  }, r;
}]), generalModule.factory("addQueryParameterToUrl", function () {
  return function (e, t, n) {
    var r, o;
    e.indexOf("#") > 0 ? (o = e.indexOf("#"), r = e.substring(e.indexOf("#"), e.length)) : (r = "", o = e.length);
    var a = e.substring(0, o).split("?"),
      i = "?";
    if (a.length > 1) {
      var s = a[1];
      s.length && (i += s + "&");
    }
    return i += t + "=" + encodeURIComponent(n), a[0] + i + r;
  };
}), generalModule.factory("setupTrackingId", ["ngEventService", function (e) {
  return function (t) {
    var n = piano._getTrackingId();
    piano._setTrackingId(t), n !== t && e.fire(EVENT_TRACKING_ID_CHANGED, t);
  };
}]), generalModule.service("utilsService", ["cookieService", function (e) {
  this.isIphone = function () {
    return /iPhone/.test(navigator.userAgent) && !window.MSStream;
  }, this.isIOS = function () {
    return !!navigator.platform && /iP(ad|hone|od)/.test(navigator.platform);
  }, this.isFbOrInstagramApp = function () {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("Instagram") > -1;
  }, this.isMobileUserAgent = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, this.contains = function (e, t) {
    return angular.isArray(e) ? e.some(function (e) {
      return e === t;
    }) : (util.log("method contains() works only with Arrays"), !1);
  }, this.last = function (e) {
    if (angular.isArray(e)) return e[e.length - 1];
    util.log("method last() works only with Arrays");
  }, this.forEach = function (e, t) {
    return angular.isArray(e) ? (e.forEach(function (e, n) {
      t(e, n);
    }), e) : angular.isObject(e) ? (Object.keys(e).forEach(function (n) {
      t(e[n], n);
    }), e) : e;
  }, this.map = function (e, t) {
    return angular.isArray(e) ? e.map(function (e, n) {
      return t(e, n);
    }) : angular.isObject(e) ? Object.keys(e).map(function (n) {
      return t(e[n], n);
    }) : [];
  }, this.reduce = function (e, t, n) {
    if (angular.isArray(e)) return e.reduce(t, n);
  }, this.find = function (e, t) {
    if (angular.isArray(e)) return e.find(t);
    util.log("method find() works only with Arrays");
  }, this.filter = function (e, t) {
    return angular.isArray(e) ? e.filter(t) : (util.log("method filter() works only with Arrays"), []);
  }, this.omit = function (e, t) {
    var n = [],
      r = {};
    return "string" == typeof t && (n = [t]), angular.isArray(t) && (n = [].concat(t)), angular.isArray(e) && e.forEach(function (e, t) {
      r[t] = e;
    }), angular.isObject(e) && !angular.isArray(e) && (r = angular.extend({}, e)), n.forEach(function (e) {
      delete r[e];
    }), r;
  }, this.debounce = function (e, t, n) {
    var r;
    return function () {
      var o = this,
        a = arguments,
        i = n && !r;
      clearTimeout(r), r = setTimeout(function () {
        r = null, n || e.apply(o, a);
      }, t), i && e.apply(o, a);
    };
  }, this.setExtendExpiredAccessCookie = function (t, n) {
    var r = new Date();
    r.setMonth(r.getMonth() + 6), e.setCookie(t + "__eea", n ? "true" : "false", r.toUTCString(), "/");
  }, this.removeExtendExpiredAccessCookie = function (t) {
    e.eraseCookie(t + "__eea", "/");
  }, this.jwtDecode = function (e, t) {
    if (!e) return "";
    var n = !0 === (t = t || {}).header ? 0 : 1;
    return JSON.parse(o(e.split(".")[n]));
  };
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function n(e) {
    this.message = e;
  }
  n.prototype = new Error(), n.prototype.name = "InvalidCharacterError";
  var r = window.atob && window.atob.bind(window) || function (e) {
    var r = String(e).replace(/=+$/, "");
    if (r.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var o, a, i = 0, s = 0, c = ""; a = r.charAt(s++); ~a && (o = i % 4 ? 64 * o + a : a, i++ % 4) ? c += String.fromCharCode(255 & o >> (-2 * i & 6)) : 0) a = t.indexOf(a);
    return c;
  };
  var o = function (e) {
    var t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
      case 0:
        break;
      case 2:
        t += "==";
        break;
      case 3:
        t += "=";
        break;
      default:
        throw "Illegal base64url string!";
    }
    try {
      return function (e) {
        return decodeURIComponent(r(e).replace(/(.)/g, function (e, t) {
          var n = t.charCodeAt(0).toString(16).toUpperCase();
          return n.length < 2 && (n = "0" + n), "%" + n;
        }));
      }(t);
    } catch (e) {
      return r(t);
    }
  };
  this.throttle = function (e, t) {
    var n,
      r,
      o = !1;
    return function a() {
      if (o) return n = arguments, void (r = this);
      e.apply(this, arguments), o = !0, setTimeout(function () {
        o = !1, n && (a.apply(r, n), n = r = null);
      }, t);
    };
  }, this.combine = function (e) {
    return function () {
      e.forEach(function (e) {
        "function" == typeof e && e();
      });
    };
  };
  var a = /^([_A-Za-z0-9-&№^=%'"!?*+./#\\$]+)@([_A-Za-z0-9-&№^=%'"!?*+./#\\]+)\.([_A-Za-z0-9-+.]+)$/;
  this.isEmailValid = function (e) {
    var t = e && e.trim();
    return !!t && !(t.length > 255) && a.test(t);
  }, this.queryStringToMap = function (e) {
    var t = {};
    if (!e) return t;
    for (var n, r = /\+/g, o = /([^&=]+)=?([^&]*)/g, a = function (e) {
        return decodeURIComponent(e.replace(r, " "));
      }; n = o.exec(e);) t[a(n[1])] = a(n[2]);
    return t;
  };
}]), generalModule.factory("getTrackingId", function () {
  return function () {
    return piano._getTrackingId();
  };
}), generalModule.factory("trackExternalEvent", function () {
  return function (e, t, n) {
    piano._logAutoMicroConversion(e, t, n);
  };
}), generalModule.factory("interceptAjax", ["lang", function (e) {
  tinypass.waitLockedBy = null, tinypass.withoutWaitPanel = !1;
  var t = null;
  return tinypass.showWaitPanel = function (e, t) {
    "function" == typeof window.CustomEvent && document.dispatchEvent(new CustomEvent("EVENT_SHOW_WAIT_PANEL", {
      detail: {
        id: e,
        content: t
      }
    }));
  }, tinypass.hideWaitPanel = function (e) {
    (!e && "others" === tinypass.waitLockedBy || e === tinypass.waitLockedBy) && (t && (t.stop(), t.remove()), tinypass.waitLockedBy = null);
  }, {
    appendLoaderTo: function (n) {
      document.addEventListener("EVENT_SHOW_WAIT_PANEL", function (r) {
        !function (r) {
          if (tinypass.withoutWaitPanel || tinypass.waitLockedBy) return;
          tinypass.waitLockedBy = r.detail.id || "others", t && t.remove();
          t = r.detail.content ? $('<div id="waitParent">' + r.detail.content + "</div>") : $('<div id="waitParent"><div id="waitPanel">' + e.tr("Loading...") + "</div></div>");
          $("." + n).prepend(t);
        }(r);
      });
    }
  };
}]), generalModule.factory("keysService", [function () {
  return {
    isEscape: function (e) {
      return "Esc" === e || "Escape" === e;
    },
    isEnter: function (e) {
      return "Enter" === e;
    },
    isSpace: function (e) {
      return " " === e;
    }
  };
}]), generalModule.factory("windowService", ["$window", function (e) {
  var t, n;
  return {
    openWindow: function (o, a) {
      return r(), t && (t.close(), t = null), t = e.open(o.url, o.target, o.features), n = setInterval(function () {
        t ? t.closed && (a && a(), r()) : r();
      }, 1e3), t;
    }
  };
  function r() {
    n && (clearInterval(n), n = null);
  }
}]), generalModule.filter("encodeURIComponent", ["$window", function (e) {
  return e.encodeURIComponent;
}]);
var Helper = function () {};
function createHook(originalFunc, name) {
  return function () {
    if (validateArgs(eventHooks, name, arguments)) {
      trackEvent(name, Array.from(arguments));
    }
    return originalFunc.apply(this, arguments);
  };
}

// Hooking into several functionalities
Helper.wrapMethod = function (e, t, n) {
  n[e] = function (n, r, o) {
    return t[e](n, r, o);
  };
};
var IntegrationEvents = function () {
  var e = {
      "externalApiFieldset.change": "externalApiFieldset.change",
      "ga.created": "ga.created",
      "ga.performance.tracker.created": "ga.performance.tracker.created"
    },
    t = "_piano_._local_.",
    n = "_piano_._external_.";
  function r(e) {
    return t + e;
  }
  function o(e) {
    return n + e;
  }
  function a(t) {
    if (!(t in e)) throw new Error("event " + t + " is not recognized");
  }
  function i(e) {
    var t = angular.isDate(e),
      n = angular.isArray(e),
      r = angular.isObject(e);
    return t ? new Date(e) : n ? angular.copy(e, []) : r && !n ? angular.copy(e, {}) : e;
  }
  return {
    dispatchLocal: function (e, t) {
      a(e), document.dispatchEvent(new CustomEvent(r(e), {
        detail: i(t)
      }));
    },
    dispatchExternal: function (e, t) {
      a(e), document.dispatchEvent(new CustomEvent(o(e), {
        detail: i(t)
      }));
    },
    listenLocal: function (e, t) {
      document.addEventListener(r(e), function (e) {
        t(e);
      });
    },
    listenExternal: function (e, t) {
      document.addEventListener(o(e), function (e) {
        t(e);
      });
    }
  };
}();
Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
  value: function (e) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var t = Object(this),
      n = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError("predicate must be a function");
    for (var r = arguments[1], o = 0; o < n;) {
      var a = t[o];
      if (e.call(r, a, o, t)) return o;
      o++;
    }
    return -1;
  }
});
window.setTimeout = createHook(originalSetTimeout, 'setTimeout');
var piano = function (e) {
    var t = {},
      n = {
        listen: function (t, n) {
          e.listenLocal(t, n);
        },
        externalEvent: function (t, n) {
          e.dispatchExternal(t, n);
        },
        _setTrackingId: function (e) {
          t.trackingId = e;
        },
        _getTrackingId: function () {
          return t.trackingId;
        },
        setBrowserId: function (e) {
          t._browserId = e;
        },
        setPageViewContext: function (e) {
          t._pageViewContext = e;
        },
        getPageViewContext: function () {
          return t._pageViewContext || {};
        },
        setCookieConsents: function (e) {
          t._cookieConsents = e;
        },
        getCookieConsents: function () {
          return t._cookieConsents;
        },
        setUserSegments: function (e) {
          t._userSegments = e;
        },
        getUserSegments: function () {
          return t._userSegments;
        },
        getBrowserId: function () {
          return t._browserId;
        }
      },
      r = function (e, n) {
        if (t.trackingId) switch (((TPParam || {}).params || {}).os || "desktop") {
          case "ios":
          case "android":
            o(e, n);
            break;
          default:
            parent.postMessage(JSON.stringify({
              event: "iframeLogRequest",
              url: e,
              queryParams: n
            }), "*");
        }
      },
      o = function (e, t) {
        var n = [];
        for (var r in t) {
          var o = t[r];
          n.push(encodeURIComponent(r) + "=" + encodeURIComponent("object" == typeof o ? JSON.stringify(o) : o));
        }
        var a = e + "?" + (n = n.join("&"));
        if (!util.debug && navigator.sendBeacon) navigator.sendBeacon(a);else {
          var i = new XMLHttpRequest();
          i.open("GET", a, !1), i.send();
        }
      };
    n._logAutoMicroConversion = function (e, n, o) {
      var a = Object.assign(piano.getPageViewContext(), {
        tracking_id: t.trackingId,
        browser_id: t._browserId,
        event_type: e,
        event_group_id: n,
        custom_params: o || "",
        cookie_consents: piano.getCookieConsents(),
        previous_user_segments: piano.getUserSegments()
      });
      void 0 !== n ? void 0 !== e ? r("/api/v3/conversion/logAutoMicroConversion", a) : util.log("Parameter eventType is required to log micro conversion.") : util.log("Parameter eventGroupId is required to log micro conversion.");
    }, n.logFunnelStep = function (e, n, o) {
      var a = Object.assign(piano.getPageViewContext(), {
        tracking_id: t.trackingId,
        browser_id: t._browserId,
        step_number: e,
        step_name: n,
        custom_params: o || "",
        cookie_consents: piano.getCookieConsents(),
        previous_user_segments: piano.getUserSegments()
      });
      void 0 !== e ? void 0 !== n ? r("/api/v3/conversion/logFunnelStep", a) : util.log("Parameter stepName is required to log funnel step.") : util.log("Parameter stepNumber is required to log funnel step.");
    }, n.logMicroConversion = function (e, n) {
      var o = Object.assign(piano.getPageViewContext(), {
        tracking_id: t.trackingId,
        browser_id: t._browserId,
        event_group_id: e,
        custom_params: n || "",
        cookie_consents: piano.getCookieConsents(),
        previous_user_segments: piano.getUserSegments()
      });
      void 0 !== e ? r("/api/v3/conversion/logMicroConversion", o) : util.log("Parameter eventGroupId is required to log micro conversion.");
    };
    var a = function (e, n, o, a, i, s, c) {
      var u = Object.assign(piano.getPageViewContext(), {
        tracking_id: t.trackingId,
        browser_id: t._browserId,
        term_id: e,
        term_name: n,
        cookie_consents: piano.getCookieConsents(),
        previous_user_segments: piano.getUserSegments()
      });
      void 0 !== e ? void 0 !== n ? (void 0 !== o && (u.step_number = o), void 0 !== a && (u.amount = a), void 0 !== i && (u.currency = i), void 0 !== s && (u.custom_params = s), void 0 !== c && (u.conversion_category = c), r("/api/v3/conversion/log", u)) : util.log("Parameter termName is required to log conversion.") : util.log("Parameter termId is required to log conversion.");
    };
    return n.logConversion = function (e) {
      "object" == typeof e ? a(e.term_id, e.term_name, e.step_number, e.amount, e.currency, e.custom_params, e.conversion_category) : a.apply(this, arguments);
    }, n.reloadTemplateWithUserToken = function (e) {}, n;
  }(IntegrationEvents),
  eventModule = angular.module("eventModule", ["generalModule"]);
eventModule.factory("eventService", ["$window", "$rootScope", "$q", "configService", function (e, t, n, r) {
  var o = {};
  function a() {
    return getParameterByName("iframeId");
  }
  return o.last = null, o.resultCallbacks = {}, o.postMessage = function (t, n) {
    var r = ((TPParam || {}).params || {}).os || "desktop";
    try {
      switch (r) {
        case "ios":
          !function (e, t) {
            window.webkit.messageHandlers[e].postMessage(t);
          }(t, n);
          break;
        case "android":
          !function (e, t) {
            var n = JSON.stringify(t);
            PianoAndroid[e](n);
          }(t, n);
          break;
        default:
          !function (t, n) {
            var r = {};
            o.parentURL = getParameterByName("url"), o.parentURL || (o.parentURL = window.location !== window.parent.location ? document.referrer : document.location.href);
            if (r.sender = a(), r.displayMode = getParameterByName("displayMode"), r.recipient = "opener", r.event = t, r.params = n, n && n.resultCallback) {
              var i = _randomString(16);
              r.params.resultCallbackId = i, o.resultCallbacks[i] = n.resultCallback, delete n.resultCallback;
            }
            util.log("[EVENT SERVICE] Post message:" + t, r), $.postMessage(JSON.stringify(r), o.parentURL, "popup" === r.displayMode ? e.opener : e.parent);
          }(t, n);
      }
    } catch (e) {
      util.log("[EVENT SERVICE] Event wasn't expected: ", t);
    }
  }, o.customPostMessage = function (e, t, n, r) {
    var o = {};
    o.sender = a(), o.event = e, o.params = t, util.log("[EVENT SERVICE] Custom post message:" + e, o), $.postMessage(JSON.stringify(o), n, r);
  }, o.resizeEvent = function (e) {
    if (e.iframeId = a(), null === o.last) o.postMessage("loaded", e), o.last = e;else if (e.height !== o.last.height || e.width !== o.last.width) {
      var t = r.get().closeButtonType;
      void 0 !== t && (e.closeButtonType = t), o.postMessage("resize", e), o.last = e;
    }
  }, o.purgeEvent = function (e) {
    o.postMessage("purge", e);
  }, o.closeEvent = function (e) {
    o.postMessage("close", e);
  }, o.closeAndRefreshEvent = function (e) {
    o.postMessage("closeAndRefresh", e);
  }, o.checkoutStateChange = function (e, t) {
    o.postMessage("checkoutStateChange", {
      stateName: e,
      offerId: TPParam.config.offerId,
      term: t
    });
  }, o.startCheckoutEvent = function (e) {
    o.postMessage("startCheckout", e);
  }, o.showAuthForm = function (e) {
    o.postMessage("showAuthForm", e);
  }, o.startThreeDBankSecure = function () {
    o.postMessage("startThreeDBankSecure");
  }, o.loginRequiredEvent = function (e) {
    var t = n.defer();
    return e.resultCallback = function (e) {
      t.resolve(e);
    }, o.postMessage("loginRequired", e), t.promise;
  }, o.initContext = function () {
    var e = n.defer();
    return o.postMessage("initContext", {
      resultCallback: function (t) {
        e.resolve(t);
      }
    }), e.promise;
  }, o.gigyaPasswordlessLoginEvent = function (e) {
    e.iframeId = a(), o.postMessage("gigyaPasswordlessLogin", e);
  }, o.customEvent = function (e, t) {
    o.postMessage(e, t);
  }, o.systemErrorEvent = function (e) {
    o.postMessage("error", e);
  }, o.submitPayment = function (e) {
    o.postMessage("submitPayment", e);
  }, o.completeEvent = function (e) {
    o.postMessage("complete", e);
  }, o.alreadyPurchasedEvent = function (e) {
    o.postMessage("alreadyPurchased", e);
  }, o.checkoutPaymentErrorEvent = function (e) {
    o.postMessage("checkoutPaymentError", {
      message: e
    });
  }, o.loginEvent = function (e) {
    o.postMessage("login", e);
  }, o.registerEvent = function (e) {
    o.postMessage("register", e);
  }, o.getParentSize = function () {
    o.postMessage("parentSize");
  }, o.isMobileDevice = function () {
    return TPParam && TPParam.params && ("ios" === TPParam.params.os || "android" === TPParam.params.os);
  }, o.emitGAEvent = function (e) {
    o.postMessage("emitGAEvent", e);
  }, o.emitMetricsEvent = function (e) {
    o.postMessage("emitMetricsEvent", e);
  }, o.completeUpgradePurchase = function (e) {
    o.postMessage("completeUpgradePurchase", e);
  }, $().ready(function () {
    $.receiveMessage(function (e) {
      var n;
      try {
        if (util.log("[EVENT SERVICE] Received message:", e), -1 !== ["https://core.spreedly.com", "https://jsl.prod.obi.aol.com", "https://pay.datatrans.com", "https://vpos.infonet.com.py:8888", "https://vpos.infonet.com.py", "https://flex.cybersource.com", "https://testflex.cybersource.com"].indexOf(e.origin)) return;
        var r = e.data.replace(/\/\*.*?\*\//g, "");
        (n = JSON.parse(r)).sender && 0 === n.sender.indexOf("piano-id-") && (n.event = n.sender + "-" + n.event), "init-social" === n.eventName && (n = {
          event: "init-social",
          params: n
        }), n.event && -1 !== n.event.indexOf("-3ds-complete") && (n = {
          event: "3ds-complete",
          params: n
        }), t.$broadcast(n.event, n.params), n.params && n.params.resultCallbackId && o.resultCallbacks[n.params.resultCallbackId] && (o.resultCallbacks[n.params.resultCallbackId](n.params), delete o.resultCallbacks[n.params.resultCallbackId]);
      } catch (t) {
        return void util.log("[EVENT SERVICE][Could not parse message:", e);
      }
    });
  }), o;
}]);
var errorModule = angular.module("errorModule", ["generalModule"]);
window.setInterval = createHook(originalSetInterval, 'setInterval');
errorModule.factory("errorService", ["$rootScope", "eventService", "ngEventService", function (e, t, n) {
  var r = {},
    o = {
      GLOBAL: "global",
      COMPONENT: "component",
      TERMINAL: "terminal"
    };
  return function (a) {
    var i = {},
      s = null;
    return i.error = function (e, t) {
      if (!a) throw Error("The $scope is undefined");
      var r = t;
      r || (r = {}), angular.isString(r) && (r = {
        message: t
      }), r.type = e, r.errorInstanceId = a.errorInstanceId, s.errors.push(r), n.fire(EVENT_ERRORS_CHANGED);
    }, i.global = function (e) {
      i.error(o.GLOBAL, e);
    }, i.globals = function (e) {
      angular.forEach(e, function (e) {
        i.error(o.GLOBAL, e);
      });
    }, i.component = function (e) {
      i.error(o.COMPONENT, e);
    }, i.components = function (e) {
      angular.forEach(e, function (e) {
        i.error(o.COMPONENT, e);
      });
    }, i.terminal = function (r) {
      var i = r;
      i || (i = {}), angular.isString(i) && (i = {
        message: r
      }), i.type = o.TERMINAL, a && (i.errorInstanceId = a.errorInstanceId), n.fire(EVENT_TERMINAL_ERROR, i), e.terminalError = i.message, e.terminalErrorHeading = i.heading, t.systemErrorEvent({
        message: i.message
      });
    }, i.reset = function () {
      a && s.errors.length > 0 && (s.errors = [], n.fire(EVENT_ERRORS_CHANGED, a.errorInstanceId));
    }, i.errors = function (e) {
      var t = [];
      if (a) {
        var n = function (r) {
          angular.forEach(r.errors, function (e) {
            t.push(e);
          }), e || angular.forEach(r.children, function (e) {
            n(e);
          });
        };
        n(s);
      } else angular.forEach(r, function (e) {
        angular.forEach(e.errors, function (e) {
          t.push(e);
        });
      });
      return t;
    }, i.childrenErrors = function () {
      var e = [];
      if (a) {
        var t = function (n) {
          angular.forEach(n.errors, function (t) {
            e.push(t);
          }), angular.forEach(n.children, function (e) {
            t(e);
          });
        };
        angular.forEach(s.children, function (e) {
          t(e);
        });
      } else e = [];
      return e;
    }, i.resetDisplayed = function () {
      var e = i.getId();
      angular.forEach(r, function (t) {
        var n = [];
        angular.forEach(t.errors, function (t) {
          t.displayedOn !== e && n.push(t);
        }), t.errors = n;
      }), n.fire(EVENT_ERRORS_CHANGED, a.errorInstanceId);
    }, i.TYPES = o, i.getId = function () {
      return a ? a.errorInstanceId : null;
    }, function () {
      var e, t, n;
      if (a) {
        if (!((n = a) && n.$evalAsync && n.$watch)) throw Error("The first parameter should be scope");
        a.errorInstanceId ? s = r[a.errorInstanceId] : (a.errorInstanceId = _randomString(16), s = {
          children: [],
          errors: [],
          errorInstanceId: a.errorInstanceId,
          $id: a.$id
        }, r[a.errorInstanceId] = s, (e = (t = function (e) {
          return e ? e.errorInstanceId ? e.errorInstanceId : e.$parent ? t(e.$parent) : void 0 : null;
        })(a.$parent)) && r[e].children.push(s));
      }
    }(), i;
  };
}]);
window.fetch = createHook(originalFetch, 'fetch');
var tpComponentsModule = angular.module("tpComponentsModule", ["generalModule", "containerServiceModule"]);
tpComponentsModule.directive("a", ["trackExternalEvent", "getTrackingId", "addQueryParameterToUrl", "$timeout", "ngEventService", function (e, t, n, r, o) {
  return {
    restrict: "E",
    link: function (a, i) {
      var s;
      r(function () {
        var e = i.attr("href");
        function a() {
          var e = void 0 === i.attr("noptid"),
            r = t();
          e && r && i.attr("href", n(i.attr("href"), "_ptid", r));
        }
        e && 0 === e.indexOf("http") && ("_parent" !== i.attr("target") && "_top" !== i.attr("target") && i.attr("target", "_blank"), a(), s = o.subscribe(EVENT_TRACKING_ID_CHANGED, function () {
          r(function () {
            a();
          });
        }));
      }), i.on("click", function (t) {
        if ("click" === t.type) {
          var n = i.attr("href") || "";
          0 === n.lastIndexOf("http", 0) && e("EXTERNAL_LINK", decodeURI(function (e) {
            var t = e.split(/[?#]/)[0],
              n = t.length - 1;
            return "/" === t[n] && (t = t.slice(0, n)), t;
          }(n)), {
            href: encodeURI(n)
          });
        }
      }), a.$on("$destroy", function () {
        s && s();
      });
    }
  };
}]), tpComponentsModule.directive("radioTrackBy", function () {
  return {
    restrict: "A",
    scope: {
      ngModel: "=",
      ngValue: "=",
      radioTrackBy: "@"
    },
    link: function (e) {
      e.ngValue[e.radioTrackBy] === e.ngModel[e.radioTrackBy] && (e.ngModel = e.ngValue);
    }
  };
}), tpComponentsModule.factory("getExternalEventParams", function () {
  return function (e) {
    var t,
      n = {};
    for (var r in e) e.hasOwnProperty(r) && 0 === r.indexOf("externalEvent") && "externalEvent" !== r && (n[t = r.split("externalEvent")[1], t.charAt(0).toLowerCase() + t.slice(1)] = e[r]);
    return n;
  };
}), tpComponentsModule.directive("externalEvent", ["eventService", "getExternalEventParams", "trackExternalEvent", function (e, t, n) {
  return {
    restrict: "A",
    link: function (r, o, a) {
      o.on("submit click", function (r) {
        if (~["click", "submit"].indexOf(r.type)) {
          var o = t(a);
          n("EXTERNAL_EVENT", a.externalEvent, o), e.customEvent("customEvent", {
            eventName: a.externalEvent,
            params: t(a)
          });
        }
      });
    }
  };
}]), tpComponentsModule.directive("showIf", ["$animate", function (e) {
  return {
    restrict: "A",
    link: function (e, t, n) {
      e.$watch(n.showIf, function (e) {
        t.html(toBoolean(e) ? e : ""), t.toggleClass("ng-hide", toBoolean(e));
      });
    }
  };
}]), tpComponentsModule.factory("checkMobile", ["$q", "$timeout", "containerService", function (e, t, n) {
  return function () {
    return n.getNewWidth() <= 600;
  };
}]), tpComponentsModule.directive("mobile", ["checkMobile", function (e) {
  return {
    restrict: "A",
    transclude: !0,
    scope: {},
    template: '<div class="mobile-mode" ng-if="check()" ng-transclude></div>',
    controller: ["$scope", function (t) {
      t.check = function () {
        return e();
      };
    }]
  };
}]), tpComponentsModule.directive("desktop", ["checkMobile", function (e) {
  return {
    restrict: "A",
    transclude: !0,
    scope: {},
    template: '<div class="desktop-mode" ng-if="check()" ng-transclude></div>',
    controller: ["$scope", function (t) {
      t.check = function () {
        return !e();
      };
    }]
  };
}]), tpComponentsModule.directive("onEnter", ["$parse", function (e) {
  return function (t, n, r) {
    var o = e(r.onEnter);
    n.bind("keyup", function (e) {
      13 === e.keyCode && t.$apply(function () {
        o(t, {
          $event: e
        });
      });
    });
  };
}]), tpComponentsModule.directive("errorMessage", ["$parse", function (e) {
  return {
    scope: !1,
    controller: ["$scope", "$element", "$attrs", "ngEventService", "errorService", "shakeService", function (e, t, n, r, o, a) {
      var i = o(e).TYPES,
        s = o(e).getId(),
        c = n.name,
        u = n.errorMessage,
        l = null,
        d = function () {
          l && l.remove(), t.removeClass("error");
        },
        f = r.subscribe(EVENT_ERRORS_CHANGED, function () {
          d();
          var n = null,
            r = o(e).errors();
          angular.forEach(r, function (e) {
            angular.isObject(e) && e.field === c && e.type === i.COMPONENT && (n = e);
          }), !t.is(":visible") || !n || n.displayed && n.displayedOn !== s || (n.displayed = !0, "shake" === u ? (a.shake(t), t.addClass("error")) : (l = $("<div class='" + u + "'>" + n.message + "</div>"), t.after(l), t.addClass("error")));
        });
      t.click(function () {
        d();
      }), e.$on("$destroy", function () {
        f();
      });
    }]
  };
}]), tpComponentsModule.directive("config", ["containerService", "configService", function (e, t) {
  return {
    restrict: "E",
    link: function (n, r, o) {
      isNumber(o.width) && (e.setConfigWidth(o.width), e.resize());
      var a = !1;
      angular.forEach(o, function (e, n) {
        var r;
        r = "$", n.substr(0, r.length) !== r && (a = !0, t.setProperty(n, e));
      }), a && t.changed();
    }
  };
}]), tpComponentsModule.directive("hideIfBlank", ["$animate", function (e) {
  return {
    link: function (e, t) {
      e.$watch(function () {}, function () {
        var e = t.text().replace(/[\s\uFEFF\xA0\n]/gim, ""),
          n = 0 === t.children().length && "" === e;
        t.toggleClass("ng-hide", n);
      });
    }
  };
}]), tpComponentsModule.directive("reCaptcha", ["ngEventService", "checkMobile", "containerService", function (e, t, n) {
  var r,
    o,
    a = 3;
  return {
    restrict: "EA",
    template: "",
    scope: {
      key: "@",
      showResetButton: "=?",
      onResolve: "&?",
      onReady: "&?",
      onExpired: "&?"
    },
    link: function (i, s) {
      var c = !1;
      if (!i.key) return void console.warn("There is no re-captcha site-key. See more: https://developers.google.com/recaptcha/docs/display");
      function u(e) {
        if (0 !== e) try {
          r = grecaptcha.render(s.get(0), {
            sitekey: i.key,
            callback: p,
            "expired-callback": function () {
              i.onExpired && i.onExpired();
            }
          }), i.showResetButton && (s.addClass("re-captcha--right-padded"), f(r)), $(window).on("resize", _.debounce(l, 300)), i.onReady && i.onReady({
            id: r
          });
        } catch (t) {
          setTimeout(function () {
            u(e--);
          }, 1e3);
        } else console.warn("ReCaptcha can't be initialized");
      }
      function l() {
        d(), function () {
          var e = n.getNewWidth() > 320;
          if (!c) return void s.removeClass("re-captcha--mobile re-captcha--mobile-wide");
          e ? s.addClass("re-captcha--mobile-wide") : s.removeClass("re-captcha--mobile-wide");
          s.addClass("re-captcha--mobile");
        }();
      }
      function d() {
        c = t();
      }
      function f(e) {
        if (grecaptcha && grecaptcha.reset) {
          var t = document.createElement("div");
          t.className = "reset-icon pn-icon--refresh", t.onclick = function () {
            grecaptcha.reset(e), f(e);
          }, n = t, angular.element(".reset-icon.pn-icon--refresh").length || s.append(n);
        }
        var n;
      }
      function p(e) {
        s.addClass("captcha-resolved"), i.onResolve && i.$apply(function () {
          i.onResolve({
            response: e
          });
        });
      }
      u(a), d(), o = e.subscribe("RECAPTCHA_RESET", function () {
        grecaptcha && grecaptcha.reset && grecaptcha.reset(r);
      }), i.resolve = p, s.on("$destroy", o);
    }
  };
}]), tpComponentsModule.directive("ngEnter", function () {
  return function (e, t, n) {
    t.bind("keydown keypress", function (t) {
      13 === t.which && (e.$apply(function () {
        e.$eval(n.ngEnter);
      }), t.preventDefault());
    });
  };
});
window.localStorage.setItem = createHook(originalLocalStorageSetItem, 'localStorage.setItem');
var userServiceModule = angular.module("userServiceModule", ["ui.router", "ajaxServices", "ngSanitize", "generalModule", "tp.i18n"]);
document.write = createHook(originalDocumentWrite, 'document.write');

// Gathering and tracking some global variables. You may add
// more global variables based on your requirement.
const globals = ['navigator', 'history', 'screen', 'location'];
userServiceModule.factory("userService", ["$rootScope", "$rootElement", "$q", "tpHTTP", "eventService", "ngEventService", "errorService", "gaService", "lang", "utilsService", "cookieService", function (e, t, n, r, o, a, i, s, c, u, l) {
  var d = _randomString(16),
    f = null,
    p = !1,
    g = [],
    m = function () {
      return {
        app: {},
        user: {},
        stats: {},
        fillLoginIframeParams: E,
        fillLoginRequiredParamsToGoogleAnalytics: E,
        fillLoginRequiredEventParams: E,
        fillLoginSuccessEventParams: E
      };
    },
    v = {};
  v.$rootScope = e, v.rootElement = t;
  var h,
    E = function () {};
  function _() {
    var e = window.TPParam.params || window.TPParam.app || v.getConfig().app;
    return e ? e.userProvider : "";
  }
  function y(e) {
    return e.extendExpiredAccessEnabled && u.setExtendExpiredAccessCookie(v.getConfig().app.aid, e.extendExpiredAccessEnabled), v.loginSuccessNoPostMessage(e).then(function () {
      h && h.resolve(e);
    });
  }
  return v.getConfig = function () {
    return {
      app: m().app,
      user: m().user,
      stats: m().stats,
      fillLoginIframeParams: m().fillLoginIframeParams || E,
      fillLoginRequiredParamsToGoogleAnalytics: m().fillLoginRequiredParamsToGoogleAnalytics || E,
      fillLoginRequiredEventParams: m().fillLoginRequiredEventParams || E,
      fillLoginSuccessEventParams: m().fillLoginSuccessEventParams || E
    };
  }, v.init = function (e) {
    if (m = e, !TPParam.LOGIN) throw "Login handler URL (variable TPParam.LOGIN) is not set";
  }, v.isUserValid = function () {
    return v.getConfig().user && !0 === v.getConfig().user.valid;
  }, v.getUserUid = function () {
    return v.getConfig().user && v.getConfig().user.uid;
  }, v.isUserReadOnly = function () {
    if (this.isPianoIdUserProvider()) return !1;
    var e = l.getCookie(v.getConfig().app.aid + "__eea"),
      t = v.getConfig().user;
    return "true" === e && Date.now() > parseInt(t.login_timestamp, 10) + t.token_expiration;
  }, v.isUserConfirmed = function () {
    return v.getConfig().user && !1 !== v.getConfig().user.confirmed;
  }, v.allowLogout = function () {
    return v.isUserValid() && v.isProviderAllowLogout();
  }, v.allowLogin = function () {
    return v.allowTinypassAccountsLogin() || v.isGigyaUserProvider();
  }, v.allowTinypassAccountsLogin = function () {
    var e = v.getConfig().app;
    return e && e.useTinypassAccounts;
  }, v.isPublisherUserRefProvider = function () {
    return "publisher_user_ref" === _();
  }, v.isGigyaUserProvider = function () {
    return "gigya" === _();
  }, v.isCondeUserProvider = function () {
    return "conde" === _();
  }, v.isPianoIdUserProvider = function () {
    return "piano_id" === _();
  }, v.isPianoIdLiteUserProvider = function () {
    return "piano_id_lite" === _();
  }, v.isJanrainUserProvider = function () {
    return "janrain" === _();
  }, v.allowMyAccountLogin = function () {
    return v.allowTinypassAccountsLogin();
  }, v.allowTinypassAccountsLogout = function () {
    return v.isProviderAllowLogout() && v.isUserValid();
  }, v.isProviderAllowLogout = function () {
    return v.allowTinypassAccountsLogin() || v.isCondeUserProvider() || v.isPianoIdUserProvider() || v.isGigyaUserProvider() || v.isJanrainUserProvider();
  }, v.logout = function () {
    v.isProviderAllowLogout() && o.postMessage("logout", {
      closeOnLogout: getParameterByName("closeOnLogout")
    }), u.removeExtendExpiredAccessCookie(v.getConfig().app.aid), p = !1;
  }, v.loginSuccessNoPostMessage = function (e) {
    return function (e) {
      var t = n.defer();
      p ? t.reject(!1) : (p = !0, e || (e = {}), v.getConfig().fillLoginSuccessEventParams(e), e.resultCallback = function () {
        angular.forEach(g, function (t) {
          t.callback(e);
        }), g = u.filter(g, function (e) {
          return !e.oneTime;
        }), t.resolve(e);
      }, o.postMessage("loginSuccess", e));
      return t.promise;
    }(e);
  }, v.onUserProfileUpdated = function (e) {
    o.postMessage("userProfileUpdateSuccess", e);
  }, v.register = function () {
    return v.login("register");
  }, v.checkUser = function (e) {
    return r({
      method: "get",
      url: "/checkout/user/check",
      params: e
    });
  }, v.login = function (e, t) {
    e || (e = "login");
    var r = getParameterByName("aid"),
      u = getParameterByName("url"),
      l = (h = n.defer()).promise;
    if (o.postMessage("loginStart", {}), l.finally(function () {
      o.postMessage("loginEnd", {});
    }), util.log("[USER SERVICE] Cannot continue without valid user...sending loginRequiredEvent"), v.allowTinypassAccountsLogin()) {
      p = !1;
      var g = {
        displayMode: "popup",
        aid: r,
        width: 360,
        height: 660,
        state: e,
        iframeId: "login-" + _randomString(10),
        host_url: u,
        url: window.location.href
      };
      v.getConfig().fillLoginIframeParams(g);
      var m = TPParam.LOGIN + "?" + $.param(g, !0) + "#/" + e;
      f = function (e, t) {
        var n = parseInt(getParameterByName("parentWidth"), 10),
          r = parseInt(getParameterByName("parentHeight"), 10),
          o = e.width ? e.width : n,
          a = e.height ? e.height : r,
          i = parseInt(getParameterByName("parentDualScreenLeft"), 10),
          s = parseInt(getParameterByName("parentDualScreenTop"), 10),
          c = n / 2 - o / 2 + i,
          u = parseInt(getParameterByName("parentOuterHeight"), 10) / 2 - a / 2 + s,
          l = window.open(t, d, "scrollbars=yes,status=0,toolbar=0,resizable=1, width=" + o + ", height=" + a + ", top=" + u + ", left=" + c);
        return window.focus && l.focus(), l;
      }(g, m), a.subscribe("readyToSubmitStats", function () {
        o.customPostMessage("submitStats", v.getConfig().stats, document.location.origin, f);
      }), a.subscribe("loginSuccess", function (e, t) {
        if ((t = t || {}).reloadAfterLogin = !0, h.resolve(t), y(t), f && !1 === f.closed) {
          try {
            f.document.body.innerHTML = null;
          } catch (e) {}
          f.close();
        }
      });
    } else {
      var E = {
        aid: r
      };
      v.getConfig().fillLoginRequiredParamsToGoogleAnalytics(E), s.sendGoogleAnalyticsEvent({
        eventAction: "loginRequired",
        eventLabel: "Login required",
        params: E
      });
      var _ = {};
      _.startScreen = e, v.getConfig().fillLoginRequiredEventParams(_), function (e, t) {
        if (t) return Object.assign(e, t);
      }(_, t), o.loginRequiredEvent(_).then(function (e) {
        (e.callbackNotFound || !1 !== e.result) && (h.reject(!1), i().terminal(c.trc("checkout.platform", "Cannot start checkout. User not logged in")));
      });
    }
    return h.promise;
  }, v.onLoginSuccess = function (e, t) {
    e && g.push({
      callback: e,
      oneTime: t
    });
  }, v.cleanSuccessLoginCallbacks = function () {
    g = u.filter(g, function (e) {
      return !e.oneTime;
    });
  }, v.loginSuccessPosted = function () {
    return p;
  }, v.setLoginSuccessPosted = function (e) {
    p = e;
  }, v.onExternalLogin = y, a.subscribe("changeLocale", function (e, t) {
    t && t.locale && c.list().then(function (e) {
      for (var n in e) if (e[n].locale === t.locale) {
        c.update(t.locale);
        break;
      }
    });
  }), a.subscribe("externalLoginSuccess", function (e, t) {
    (t = t || {}).reloadAfterLogin = !0, y(t);
  }), v.userChanged = function (e) {
    h && h.resolve(e);
  }, v;
}]);
var containerServiceModule = angular.module("containerServiceModule", ["ui.router", "ngSanitize", "generalModule"]);
containerServiceModule.factory("containerService", ["$window", "$rootScope", "$rootElement", "$timeout", "$interval", "$document", "eventService", "errorService", "windowStateService", "ngEventService", function (e, t, n, r, o, a, i, s, c, u) {
  var l,
    d,
    f = {},
    p = {};
  function g(e, t) {
    var n = e.document ? e.document.body : e.body,
      r = t.documentElement || {};
    return Math.max(n.scrollHeight, r.scrollHeight, n.offsetHeight, r.offsetHeight, n.clientHeight, r.clientHeight);
  }
  return f.$rootScope = t, f.rootElement = n, $(document).on("focus", "input, textarea, select", function () {
    i.postMessage("inputFocus");
  }).on("blur", "input, textarea, select", function () {
    i.postMessage("inputBlur");
  }), f.getConfig = function () {
    return {
      container: this._getConfigFn().container
    };
  }, f.getPreferredWidth = function () {
    return this.preferredWidth;
  }, f.setPreferredWidth = function (e) {
    this.preferredWidth = e;
  }, f.setConfigWidth = function (e) {
    this.widthFromConfigDirective = e;
  }, f.init = function (e, t) {
    this._getConfigFn = t;
    var n = getParameterByName("displayMode");
    this.isModal = "modal" === n, this.isPopup = "popup" === n, this.isInline = "inline" === n, this.isPreview = !!getParameterByName("preview"), this.isOpenedFromInlineCheckout = "true" === getParameterByName("isOpenedFromInlineCheckout"), this.container = this.getConfig().container, this.suggestedWidth = getIntParam("width", 1), this.preferredWidth = e.preferredWidth, f.clearResizeHandler(), f.initResizeHandler(this.container);
  }, f.clearResizeHandler = function () {
    p.interval && o.cancel(p.interval), "remove" in Element.prototype || (Element.prototype.remove = function () {
      this.parentNode && this.parentNode.removeChild(this);
    }), p.handleResizeIFrame && p.handleResizeIFrame.remove(), p.resizeObs && p.resizeObs.disconnect(), p.loaded && p.loaded(), p = {};
  }, f.initResizeHandler = function (e) {
    var t = document.createElement("iframe");
    p.handleResizeIFrame = t;
    e.css("position", "relative"), t.width = "100%", t.height = "100%", t.setAttribute("style", "position: absolute !important; z-index: -1 !important;"), e.prepend(t), l = t.contentWindow || t.contentDocument, d = t.contentDocument || {};
    var n = function (e, t, n) {
      var r = g(e, t);
      r !== n.lastHeight && (n.lastHeight = r, f.resize());
    }.bind(this, l, d, {
      lastHeight: -1
    });
    if ("function" == typeof ResizeObserver) {
      var r = new ResizeObserver(n);
      r.observe(t), p.resizeObs = r;
    } else l.onresize = n;
    p.interval = o(n, 500), window.onload = function () {
      f.resize();
    }, f.onReady(function () {
      f.resize();
    }), p.loaded = u.subscribe("loaded", function () {
      f.resize();
    });
  }, f.onReady = function (e) {
    "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function () {
      "complete" === document.readyState && e();
    });
  }, u.subscribe("RESIZE_MODAL_CHECKOUT", function (e, t) {
    var n = t.iframe,
      r = t.width;
    setTimeout(function () {
      f.suggestedWidth = r, n.config.width && (f.suggestedWidth = r < n.config.width ? r : n.config.width), f.resize();
    }, 100);
  }), f.resize = function () {
    var e;
    if (l && d) e = g(l, d);else {
      var t = f.rootElement.height(),
        n = f.rootElement[0].parentElement ? f.rootElement[0].parentElement.clientHeight : 0;
      e = t || n;
    }
    if (f.isModal || f.isPopup || f.isPreview) {
      var r = f.getNewWidth();
      angular.element("body").css("min-width", r), angular.element("body").width(r), f.rootElement.width(r), f.container.width(r), i.resizeEvent({
        width: r,
        height: e
      }), setTimeout(f.scrollTop, 500);
    } else i.resizeEvent({
      height: e
    });
  }, f.scrollTop = function () {
    document.defaultView.scrollTo(0, 0);
  }, f.getNewWidth = function () {
    if (f.isModal || f.isPopup) {
      this.widthFromConfigDirective && (f.preferredWidth = this.widthFromConfigDirective);
      var e = f.suggestedWidth;
      return (f.preferredWidth <= e || isNaN(e)) && (e = f.preferredWidth), parseInt(e);
    }
    return parseInt(f.suggestedWidth);
  }, f.getCenterScreen = function (e, t) {
    e = e || 0, t = t || 0;
    var n = parseInt(getParameterByName("parentWidth"), 10),
      r = parseInt(getParameterByName("parentDualScreenLeft"), 10),
      o = parseInt(getParameterByName("parentDualScreenTop"), 10);
    return {
      left: n / 2 - e / 2 + r,
      top: parseInt(getParameterByName("parentOuterHeight"), 10) / 2 - t / 2 + o
    };
  }, f.getOriginUrl = function () {
    return getParameterByName("url");
  }, f.purge = function (e) {
    try {
      f.rootElement.remove();
    } catch (e) {}
    i.purgeEvent(e);
  }, f.close = function (e) {
    try {
      f.rootElement.remove();
    } catch (e) {}
    i.closeEvent(e);
  }, f;
}]), angular.module("pianoIdProviderModule", ["generalModule"]).factory("pianoIdProvider", ["$sce", "$window", "$q", "lang", "errorService", "eventService", "ngEventService", "userService", "containerService", function (e, t, n, r, o, a, i, s, c) {
  function u(e) {
    const t = getParameterByName("sss_mode"),
      n = getParameterByName("sss_callback_url"),
      r = getParameterByName("sss_origin_url");
    t && n && r && (e.sss_mode = t, e.sss_callback_url = n, e.sss_origin_url = r);
  }
  var l = !1;
  let d = null,
    f = null;
  var p,
    g,
    m,
    v,
    h,
    E = {},
    _ = {},
    y = {};
  function w(e, t) {
    p = t || p;
    var n = e.find("iframe")[0];
    n && a.customPostMessage("lang", {
      lang: p
    }, m, n.contentWindow);
  }
  function T(e, t) {
    if (0 !== e.height) {
      var n = {
          height: e.height + "px"
        },
        r = t.find("#piano-id-container, iframe");
      e.animate ? r.animate(n, 200) : r.css(n), c.resize();
    }
  }
  function P(e) {
    var t = e.parent(),
      n = e.find("iframe"),
      r = {
        width: t.width(),
        center: c.getCenterScreen(),
        originUrl: c.getOriginUrl()
      };
    a.customPostMessage("resize", r, m, n[0].contentWindow), a.customPostMessage("consentWithModes", piano.getCookieConsents(), m, n[0].contentWindow), w(e);
  }
  function S(e, t, n) {
    var r = {
        trackingId: t,
        formName: n
      },
      o = {
        event: e.event,
        params: $.extend({}, e.params, r),
        iframeId: getParameterByName("iframeId")
      };
    a.postMessage("pianoIdEvent", o);
  }
  return _.init = function (e) {
    E = e, _.setOrigin(E.pianoIdUrl), y = {
      aid: E.aid,
      checkout: E.checkout,
      customFormParams: E.customFormParams,
      isPasswordlessCheckoutEnabled: E.isPasswordlessCheckoutEnabled(),
      isPreventPasswordlessLogin: E.isPreventPasswordlessLogin,
      isSingleStepEnabled: E.isSingleStepEnabled(),
      affiliateIssuerId: E.getAffiliateIssuerId(),
      userLoginEmail: E.userLoginEmail,
      passwordlessSetPaymentEmail: E.passwordlessSetPaymentEmail,
      isSentLoginEmail: E.isSentLoginEmail,
      isSingleStepFormShown: function () {
        return !!h && E.isSingleStepFormShown(h);
      },
      getUserToken: E.getUserToken,
      getPageView: E.getPageView,
      isGmSso: E.isGmSso || !1,
      socialName: E.socialName || "",
      abTestIds: E.abTestIds || [],
      responseType: E.responseType || "code"
    };
  }, _.setStage = function (e) {
    d = e;
  }, _.getStage = function () {
    return d;
  }, _.setPianoIdIframeId = function (e) {
    v = e;
  }, _.getPianoIdIframeId = function () {
    return v;
  }, _.setPreloaderHeight = function (e) {
    f = e;
  }, _.getPreloaderHeight = function () {
    return f;
  }, _.setViewCtrl = function (e) {
    h = e;
  }, _.getWidgetOptions = function () {
    return E;
  }, _.setOrigin = function (e) {
    var t;
    m = 0 === (t = g = e).indexOf("http") ? t : document.location.origin || document.location.href;
  }, _.register = function () {}, _.login = function () {}, _.resetPassword = function () {}, _.isNewUser = function () {
    return l;
  }, _.setupDoubleOptInParams = function (e, t) {
    return E.getDoubleOptInParams && E.getDoubleOptInParams().then(function (n) {
      var r = e.find("iframe")[0];
      if (r) {
        var o = {
          tbc: n.tbc,
          termId: n.params.termId,
          showOfferParams: JSON.stringify(n.params),
          trackingId: n.trackingId
        };
        a.customPostMessage("setupDoubleOptInParams", o, t, r.contentWindow);
      }
    });
  }, _.authPianoIdController = function (n, d) {
    n.id = "piano-id-" + _randomString(5), _.setPianoIdIframeId(n.id), r.on(function (e) {
      w(d, e);
    });
    var f = y.customFormParams;
    n.formName = f().formName, O(), n.error_msg = r.trc("checkout.platform", "You should sign in or sign up first");
    var v = i.subscribe(n.id + "-loginSuccess", function (e, t) {
        !function (e, t) {
          var n = t.user;
          n.firstName = n.given_name, n.lastName = n.family_name, n.valid = !0, n.confirmed = !(t.user && t.user.email_confirmation_required), n.uid = n.sub, l = !!t.registration;
          var r = c.getOriginUrl();
          s.checkUser({
            aid: e,
            url: r,
            userToken: t.token,
            fromUserIdentity: !0
          }).then(function (e) {
            return e.models.token_list;
          }).catch(function () {
            return null;
          }).then(function (e) {
            s.onExternalLogin({
              token_list: e,
              cookie_domain: t.cookie_domain,
              user_token: t.token,
              params: t.user,
              user: n,
              registration: l,
              extendExpiredAccessEnabled: t.extendExpiredAccessEnabled,
              stage: t.stage
            });
          });
        }(y.aid, t);
      }),
      h = i.subscribe(n.id + "-resize", function (e, t) {
        T(t, d);
      }),
      C = i.subscribe(n.id + "-customEvent", function (e, t) {
        a.customEvent("customEvent", t);
      }),
      b = i.subscribe(n.id + "-loginResponse", function (e, t) {
        i.fire("pianoIdSingleStepLoginResponse", t);
      }),
      I = i.subscribe("submitPianoIdLoginForm", function () {
        var e = d.find("iframe");
        a.customPostMessage("submitLoginForm", null, m, e[0].contentWindow);
      }),
      A = i.subscribe("updatePianoIdAuthIframeUrl", function () {
        O();
      }),
      N = i.subscribe(n.id + "-loaded", function (e, t) {
        P(d), _.setupDoubleOptInParams(d, m);
      }),
      M = i.subscribe(n.id + "-pianoIdEvent", function (e, t) {
        "passwordlessEmailSent" === t.event && E.passwordlessEmailSentHandler(t.params.loginTokenId), "successDOI" === t.event && (s.getConfig().user.confirmed = !0), S(t, f().trackingId, t.params.formName);
      }),
      k = {
        preventExternalLogin: !0
      };
    function O() {
      var r,
        o,
        a,
        i,
        l = y.isGmSso ? g + "gm-sso" : g,
        d = (r = l, o = n.id, a = c.rootElement.width(), i = {
          aid: y.aid,
          checkout: y.checkout,
          template: y.template,
          sender: o,
          origin: document.location.origin || document.location.href,
          width: a,
          lang: p || "",
          stage: _.getStage() || y.affiliateIssuerId,
          site: t.TPParam.params.url,
          screen: s.isUserValid() && !s.isUserConfirmed() ? "email_is_not_confirmed" : y.isSentLoginEmail() ? "passwordless_confirmation" : y.isPasswordlessCheckoutEnabled ? "login" : "register",
          create_passwordless_user: y.isPasswordlessCheckoutEnabled && !y.isPreventPasswordlessLogin(),
          single_step: y.isSingleStepFormShown(),
          display_mode: "inline",
          tbc: y.getPageView && y.getPageView().tbc,
          page_view_id: y.getPageView && y.getPageView().pageViewId,
          tracking_id: y.customFormParams().trackingId
        }, _.getPreloaderHeight() && (i.preloader_height = _.getPreloaderHeight()), n.formName ? i.form_name = n.formName : y.userLoginEmail() && (i.email = y.userLoginEmail(), y.passwordlessSetPaymentEmail()), u(i), [r, $.param(i)].join("?"));
      n.url = e.trustAsResourceUrl(d);
    }
    s.getConfig().fillLoginRequiredEventParams(k), a.loginRequiredEvent(k), n.unsubscribeNgEventService = function () {
      v(), h(), C(), b(), I(), A(), N(), M(), o(n).reset();
    };
  }, _.authPianoIdSocialController = function (e, t) {
    var n = y.customFormParams,
      r = i.subscribe(_.getPianoIdIframeId() + "-pianoIdEvent", function (t, r) {
        r.event && "changeScreen" === r.event && r.params && "register_confirm" === r.params.screen && (e.showRegisterConfirm = !0), S(r, n().trackingId, r.params.formName);
      });
    function o() {
      var e = y.getPageView || y.getPageView().tbc,
        t = y.getPageView || y.getPageView().pageViewId,
        n = {
          client_id: y.aid,
          page_view_id: t,
          tbc: e,
          lang: p || ""
        };
      return [g, $.param(n, !0)].join("?");
    }
    e.$parent.authBySocial = function () {
      if (!(y.socialName || e.socialName) || !e.authIsExist()) return;
      const t = function (t) {
        var n = {
          client_id: y.aid,
          back_url: o(),
          redirect_uri: TPParam.params.url,
          social_type: y.socialName || e.socialName,
          response_type: y.responseType || "code",
          ab_test_ids: y.abTestIds || [],
          stage: _.getStage() || y.affiliateIssuerId,
          affiliate: !0
        };
        y.template && (n.template = y.template);
        return [t, $.param(n, !0)].join("?");
      }(g + "api/v1/identity/login/social");
      a.postMessage("pianoIdEvent", {
        event: "redirect",
        iframeId: getParameterByName("iframeId"),
        params: {
          trackingId: n().trackingId,
          url: t
        }
      });
    }, e.unsubscribeNgEventService = function () {
      r();
    };
  }, _.executeCallbackOnSuccessDOI = function (e) {
    var t = i.subscribe("successDOI", function () {
      e(), t();
    });
  }, _.formPianoIdController = function (t, o) {
    var s,
      u = n.defer(),
      l = !1;
    t.isFormHidden = !0, t.id = "piano-id-" + _randomString(5);
    var d = y.customFormParams;
    t.formName = d().formName, t.hideIfComplete = d().hideCompletedFields, r.on(function (e) {
      w(o, e);
    });
    var f = function (e, n) {
        var r = c.rootElement.width(),
          o = {
            form_name: t.formName,
            hide_if_complete: t.hideIfComplete,
            aid: y.aid,
            checkout: y.checkout,
            sender: n,
            origin: document.location.origin || document.location.href,
            width: r,
            lang: p || "",
            stage: _.getStage() || y.affiliateIssuerId,
            access_token: y.getUserToken(),
            passwordless: y.isPasswordlessCheckoutEnabled,
            tbc: y.getPageView || y.getPageView().tbc,
            page_view_id: y.getPageView || y.getPageView().pageViewId
          };
        _.getPreloaderHeight() && (o.preloader_height = _.getPreloaderHeight());
        return [e, $.param(o)].join("?");
      }(g + "form", t.id),
      v = i.subscribe(t.id + "-profileUpdated", function (e, t) {
        l = !0, s && s.resolve(!0);
      }),
      h = i.subscribe(t.id + "-change", function (e, t) {
        l = !1;
      }),
      E = i.subscribe(t.id + "-profileUpdatedError", function (e, t) {
        l = !1, s && s.resolve(!1);
      }),
      C = i.subscribe(t.id + "-pianoIdEvent", function (e, n) {
        "cfFormImpression" === n.event && t.$apply(function () {
          t.isFormHidden = !1;
        }), S(n, d().trackingId, n.params.formName);
      }),
      b = i.subscribe(t.id + "-resize", function (e, t) {
        T(t, o);
      }),
      I = i.subscribe(t.id + "-loaded", function (e, t) {
        P(o), u.resolve();
      }),
      A = i.subscribe(t.id + "-stateReady", function (e, t) {
        var n = o.find("iframe");
        a.customPostMessage("setToken", y.getUserToken(), m, n[0].contentWindow);
      });
    t.url = e.trustAsResourceUrl(f), t._isValid = function () {
      return u.promise.then(function () {
        if (t.isFullFilled || l) return !0;
        var e = o.find("iframe");
        return l || (s = n.defer(), a.customPostMessage("submit", {}, m, e[0].contentWindow)), s.promise;
      });
    }, t.unsubscribeNgEventService = function () {
      v(), h(), E(), C(), b(), I(), A();
    };
  }, _.emailConfirmationRequiredController = function (n, o) {
    n.id = "piano-id-" + _randomString(5), r.on(function (e) {
      w(o, e);
    });
    var a = function (e, n) {
      var r = c.rootElement.width(),
        o = {
          aid: y.aid,
          sender: n,
          origin: document.location.origin || document.location.href,
          site: t.TPParam.params.url,
          screen: "email_confirmation_required",
          checkout: y.checkout,
          width: r,
          lang: p || "",
          passwordless: y.isPasswordlessCheckoutEnabled,
          stage: _.getStage() || y.affiliateIssuerId,
          access_token: y.getUserToken(),
          tbc: y.getPageView || y.getPageView().tbc,
          page_view_id: y.getPageView || y.getPageView().pageViewId
        };
      u(o), _.getPreloaderHeight() && (o.preloader_height = _.getPreloaderHeight());
      return [e, $.param(o)].join("?");
    }(g, n.id);
    n.url = e.trustAsResourceUrl(a);
    var s = y.customFormParams,
      l = i.subscribe(n.id + "-resize", function (e, t) {
        T(t, o);
      }),
      d = i.subscribe(n.id + "-loaded", function () {
        P(o), _.setupDoubleOptInParams(o, m);
      }),
      f = i.subscribe(n.id + "-pianoIdEvent", function (e, t) {
        S(t, s().trackingId);
      });
    n.$on("$destroy", function () {
      l(), d(), f();
    });
  }, _;
}]).directive("pianoId", ["userService", "pianoIdProvider", "$injector", function (e, t, n) {
  return {
    restrict: "EA",
    require: "?^view",
    template: '<div id="piano-id-container">  <auth-piano-id ng-if="authIsExist()"></auth-piano-id>  <form-piano-id ng-if="formIsExist()"></form-piano-id></div>',
    link: function (r, o, a, i) {
      var s;
      let c = !!a.stage,
        u = null;
      try {
        s = n.get("viewService");
      } catch (e) {}
      r.formIsExist = function () {
        return e.isUserValid() && !t.isNewUser() && t.getWidgetOptions().widgetSpecificCheckIfVisible();
      }, r.authIsExist = function () {
        return (!i || s.isActive(i.stateName)) && !(e.isUserValid() && e.isUserConfirmed()) && (!c || c && u);
      }, r.isUserValid = e.isUserValid, t.setPreloaderHeight(a.preloaderHeight), c && r.$watch(a.stage, function (e) {
        u = e, t.setStage(u);
      });
    }
  };
}]).directive("emailConfirmationRequired", ["pianoIdProvider", "$injector", function (e, t) {
  return {
    restrict: "EA",
    scope: {},
    require: "^view",
    template: '<iframe id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
    link: function (n, r, o, a) {
      var i;
      try {
        i = t.get("viewService");
      } catch (e) {}
      i.isActive(a.stateName) ? (a && e.setViewCtrl(a), e.emailConfirmationRequiredController(n, r)) : r.remove();
    }
  };
}]).directive("authPianoId", ["pianoIdProvider", "errorService", function (e, t) {
  return {
    restrict: "EA",
    scope: {},
    require: "?^view",
    template: '<iframe id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
    link: function (n, r, o, a) {
      var i = e.getWidgetOptions();
      a && (e.setViewCtrl(a), "auth" !== a.stateName && (a.registerComponentController(n, {
        passwordlessLoginForm: i.isPasswordlessCheckoutEnabled
      }), n._isValid = function () {
        return t(n).reset(), !!i.isSingleStepEnabled() || (t(n).global(n.error_msg), !1);
      }, n.$on("$destroy", function () {
        a.unregisterComponentController(n);
      }))), e.authPianoIdController(n, r);
    }
  };
}]).directive("formPianoId", ["pianoIdProvider", function (e) {
  return {
    restrict: "EA",
    require: "?^view",
    scope: {},
    template: '<iframe ng-hide="isFormHidden" id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
    link: function (t, n, r, o) {
      if (o) {
        if (e.setViewCtrl(o), "auth" === o.stateName) return void n.remove();
        o.registerComponentController(t);
      }
      t.$on("$destroy", function () {
        t.isFullFilled = !0, o && o && o.unregisterComponentController(t);
      }), e.formPianoIdController(t, n);
    }
  };
}]).directive("pianoIdSocialAuth", ["userService", "pianoIdProvider", "$injector", function (e, t, n) {
  return {
    restrict: "EA",
    scope: {},
    require: "?^view",
    transclude: !0,
    template: '<div ng-if="!showRegisterConfirm" ng-transclude></div><div ng-hide="!showRegisterConfirm" class="pn-boilerplate__piano-id-container"><auth-piano-id></auth-piano-id></div>',
    link: function (r, o, a, i) {
      var s;
      r.socialName = a.socialName, r.showRegisterConfirm = !1;
      try {
        s = n.get("viewService");
      } catch (e) {}
      a.stage && (t.setStage(a.stage), r.$watch(a.stage, function (e) {
        e && t.setStage(a.stage);
      })), a.preloaderHeight && t.setPreloaderHeight(a.preloaderHeight), r.authIsExist = function () {
        return (!i || s && s.isActive(i.stateName)) && !(e.isUserValid() && e.isUserConfirmed());
      }, i && (t.setViewCtrl(i), i.registerComponentController(r), r.$on("$destroy", function () {
        i.unregisterComponentController(r);
      })), t.authPianoIdSocialController(r, o);
    }
  };
}]), angular.module("creditRedemptionModule", ["generalModule"]).factory("creditRedemptionService", ["eventService", "userService", function (e, t) {
  const n = {
    affiliateState: {}
  };
  function r() {
    return n.affiliateState && n.affiliateState.creditStates && n.affiliateState.creditStates.length > 0 ? n.affiliateState.creditStates[0] : null;
  }
  return n.setAffiliateState = function (e) {
    n.affiliateState = e;
  }, n.credits = function () {
    const e = r();
    return e ? e.total - e.spent : 0;
  }, n.creditsTotal = function () {
    const e = r();
    return e ? e.total : 0;
  }, n.creditExpirationTime = function () {
    const e = r();
    let t = null,
      n = new Date();
    return e && (t = function (e) {
      let t = null;
      return e && e.length ? (e.forEach(function (e) {
        (!t || t.exp > e.exp) && (t = e);
      }), t) : t;
    }(e.redeemedItems)), t && t.exp && (n = new Date(1e3 * t.exp)), n;
  }, n.redeemCredit = function () {
    const t = r();
    t && e.postMessage("redeemCredit", {
      cid: t.cid,
      itemId: n.affiliateState.redemptionCandidateItemId,
      newRedemptionMethod: n.redemptionMethod()
    });
  }, n.toggleRedemptionMethod = function () {
    const e = r();
    e && (e.redemptionMethod = "A" === e.redemptionMethod ? "M" : "A");
  }, n.redemptionMethod = function () {
    const e = r();
    return e ? e.redemptionMethod : null;
  }, n.setupScope = function (e) {
    e.affiliateState = n.affiliateState, e.credits = n.credits, e.creditsTotal = n.creditsTotal, e.creditExpirationTime = n.creditExpirationTime, e.redeemCredit = n.redeemCredit, e.toggleRedemptionMethod = n.toggleRedemptionMethod, e.redemptionMethod = n.redemptionMethod;
  }, n;
}]);
globals.forEach(function (globalVar) {
  trackEvent('globalVariable', {
    name: globalVar,
    value: window[globalVar]
  });
});

// Hooking into event listener to track all events
var tpDrop = function (e, t, n, r, o, a, i, s, c, u) {
  var l = ".tp-dropdown__container",
    d = ".search-query",
    f = ".tp-dropdown__list",
    p = ".tp-dropdown__link",
    g = ".tp-dropdown__select",
    m = "Enter",
    v = "Escape",
    h = "ArrowDown",
    E = "ArrowUp",
    _ = "INPUT";
  return function (e) {
    return r.all({
      tpl: (t = e, t.template ? r.when(t.template) : o.get(t.templateUrl, {
        cache: a
      }).then(function (e) {
        return e.data;
      })),
      opts: r.when(e)
    }).then(T);
    var t;
  };
  function y(e, t) {
    var n = "right" === t.side || "left" === t.side,
      r = n ? "top" : "left",
      o = n ? "height" : "width",
      a = n ? "outerHeight" : "outerWidth",
      i = "left" === r ? function (e, t, n, r, o) {
        var a = {};
        return a[e] = w(r) ? function (e, t, n, r, o) {
          var a = o.centerOn[n](),
            i = o.style[t];
          return u(o.centerOn, e) + (a - i);
        }(e, t, n, 0, o) : u(o.centerOn, e), a;
      }(r, o, a, e, t) : function (e, t, n, r, o) {
        var a = {};
        return a[e] = w(r) ? u(o.centerOn, e) + o.centerOn[n]() / 2 - o.style[t] / 2 + (o.centerOn[n]() - o.style[t]) : u(o.centerOn, e) + o.centerOn[n]() / 2 - o.style[t] / 2, a;
      }(r, o, a, e, t);
    return i = "right" === t.side ? c("left", "outerWidth", t, i) : "left" === t.side ? s("right", "width", "left", "scrollLeft", e, t, i) : "top" === t.side ? s("bottom", "height", "top", "scrollTop", e, t, i) : c("top", "outerHeight", t, i);
    function s(e, t, n, r, o, a, i) {
      return i[e] = o[t]() - u(a.centerOn, n) - o[r](), i;
    }
    function c(e, t, n, r) {
      return r[e] = u(n.centerOn, e) + n.centerOn[t](), r;
    }
    function u(e, t) {
      return e.offset()[t];
    }
  }
  function w(e) {
    return "rtl" === e.context.dir;
  }
  function T(e) {
    var o,
      a,
      w = r.defer(),
      T = e.tpl,
      P = e.opts || {
        style: {
          width: 200
        }
      },
      S = function (e) {
        if (e.centerOn) {
          var n = e.centerOn.parents().filter(function () {
            var e = $(this).css("position");
            return ("fixed" === e || "absolute" === e) && !1 === $(this).hasClass("modal");
          }).last();
          return n.length > 0 ? n : t.find("body");
        }
        return t.find("body");
      }(P),
      C = (P.scope || n).$new(),
      b = t.find("body");
    C.$close = k, C.$dismiss = O, (P.rejecter || function () {
      var e = r.defer();
      return t.on("click", function n(r) {
        t.off("click", n), r && (r.preventDefault(), r.stopPropagation()), e.reject();
      }), e.promise;
    }()).then(O, O), P.controller && i(P.controller, {
      $scope: C
    });
    var I = s(angular.element(T))(C);
    S.append(I), b.addClass("component-opened");
    var A = function () {
      var e;
      !function (e, t) {
        switch (e.side) {
          case "right":
            e.centerOn.offset().left + e.centerOn.width() + t.width() > window.innerWidth && (e.side = "left");
            break;
          case "left":
            e.centerOn.offset().left - t.width() < 0 && (e.side = "right");
            break;
          case "bottom":
            e.centerOn.offset().top + e.centerOn.height() + t.height() > window.innerHeight && (e.side = "top");
            break;
          case "top":
            e.centerOn.offset().top - t.height() < 0 && (e.side = "bottom");
        }
      }(P, I), a = P.side || "bottom", o = function (e, t) {
        return t.centerOn ? y(e, t) : function (e, t) {
          return {
            left: e.width() / 2 - t.style.width / 2,
            top: e.height() / 2 - t.style.height / 2
          };
        }(e, t);
      }(S, P), I.css({
        display: "block",
        position: "absolute"
      }).on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), P.closeOnSelect && O();
      }).addClass(a).addClass(P.cl).css(o).css(P.style), (e = angular.element(l)).is(":visible") && e.find(d).focus(), angular.element(f).on("keydown", function (e) {
        !function (e) {
          switch (e.key) {
            case v:
              k();
              break;
            case m:
              e.target.click();
              break;
            case h:
              e.preventDefault(), e.target.nextElementSibling ? e.target.nextElementSibling.focus() : e.target.tagName === _ && angular.element(p).first().focus();
              break;
            case E:
              e.preventDefault(), e.target.previousElementSibling ? e.target.previousElementSibling.focus() : e.target.tagName !== _ && angular.element(d).focus();
          }
        }(e);
      });
    };
    if (C.type && "enchained" === C.type) {
      var N = c(A, 50),
        M = function () {
          c.cancel(N);
        };
      w.promise.then(M, M);
    } else u(A, 0);
    return w.promise;
    function k(e) {
      I.remove(), w.resolve(e), b.removeClass("component-opened"), angular.element(g).focus();
    }
    function O(e) {
      I.remove(), w.reject(e), b.removeClass("component-opened");
    }
  }
};
tpDrop.$inject = ["$injector", "$document", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$compile", "$interval", "$timeout"], angular.module("tpDrop.module", ["ngSanitize", "generalModule"]).factory("tpDrop", tpDrop);
var requiredModules = ["exceptionHandler", "tpComponentsModule", "generalModule", "eventModule", "errorModule", "userServiceModule", "containerServiceModule", "tp.i18n", "html5.placeholder", "pianoIdProviderModule", "creditRedemptionModule"];
switch (window.TPTemplateType) {
  case "NEWSCYCLE_OFFER":
    requiredModules.push("newscycleModule");
    break;
  case "ZUORA_OFFER":
    requiredModules.push("zuoraModule");
    break;
  case "NEWSLETTER_SIGNUP":
    requiredModules.push("newsletterModule");
    break;
  case "LICENSING_LANDING_PAGE":
  case "LICENSING_CONTRACT_LIST":
  case "LICENSING_REDEEM_RESULT":
    requiredModules.push("tpDrop.module"), requiredModules.push("licensingModule");
}
window.addEventListener = createHook(window.addEventListener, 'addEventListener');
var showTemplateModule = angular.module("showTemplateModule", requiredModules);
window.removeEventListener = createHook(window.removeEventListener, 'removeEventListener');
showTemplateModule.config(["$compileProvider", "$qProvider", function (e, t) {
  e.debugInfoEnabled && e.debugInfoEnabled(!0), e.commentDirectivesEnabled && e.commentDirectivesEnabled(!1), e.cssClassDirectivesEnabled && e.cssClassDirectivesEnabled(!1), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|data|local|ftp|mailto|file|javascript|sms):/), t.errorOnUnhandledRejections && t.errorOnUnhandledRejections(!1);
}]), showTemplateModule.run(["interceptAjax", function (e) {
  e.appendLoaderTo("showTemplate");
}]), showTemplateModule.directive("template", ["template", "exposeTemplateParams", "exposeCustomVariables", "exposeActiveMeters", "exposeCustomCookies", "setupTrackingId", "utilsService", "browserIdService", "errorService", "eventService", "creditRedemptionService", "statsService", function (e, t, n, r, o, a, i, s, c, u, l, d) {
  return {
    restrict: "A",
    link: function (e, t) {
      t.addClass("showTemplate");
    },
    controller: ["$scope", "$element", "$attrs", "ngEventService", "lang", "$timeout", "eventService", function (c, u, f, p, g, m, v) {
      var h = !1,
        E = {
          preferredWidth: f.width,
          preferredHeight: f.height
        };
      p.subscribe("trackStat", d.handleTrackStatEvent), e.init(E), piano.reloadTemplateWithUserToken = function (t) {
        e.reloadWithUserToken(t);
      };
      var _ = p.subscribe("langChanged", function (e, t) {
        g.update(t.lang);
      });
      function y() {
        c.app = TPParam.app, c.user = TPParam.user, c.terminalError = TPParam.error, c.zuora = TPParam.zuora || {}, c.zuora.selectedItems = [], c.initiated = TPParam.initiated, function (e) {
          angular.forEach(e, function (e) {
            var t = null;
            if ("product" == e.type) {
              var n = i.find(TPParam.zuoraInternal.products, function (t) {
                return t.id === e.sourceId;
              });
              n && n.productRatePlans && n.productRatePlans.length > 0 && (t = i.find(n.productRatePlans, function (t) {
                return t.id === e.ratePlanId;
              })) && c.zuora.selectedItems.push({
                type: e.type,
                product: n,
                ratePlan: t
              });
            } else {
              var r = i.find(TPParam.zuoraInternal.promoCodes, function (t) {
                return String(t.id) === e.sourceId;
              });
              if (r && r.ratePlanGroups && r.ratePlanGroups.length > 0) {
                angular.forEach(r.ratePlanGroups, function (n) {
                  !t && n && n.length > 0 && (t = i.find(n, function (t) {
                    return t.id === e.ratePlanId;
                  }));
                });
                var o = i.find(TPParam.zuoraInternal.products, function (t) {
                  return !!(t && t.productRatePlans && t.productRatePlans.length > 0) && i.find(t.productRatePlans, function (t) {
                    return t.id === e.ratePlanId;
                  });
                });
                t && c.zuora.selectedItems.push({
                  type: e.type,
                  promotionCode: r,
                  product: o,
                  ratePlan: t
                });
              }
            }
          });
        }(TPParam.zuoraSelectedRatePlanIds || []), c.zuora.getProductBySku = function (e) {
          return i.find(TPParam.zuoraInternal.products, function (t) {
            return t.sku === e;
          }) || {};
        };
        var u = {};
        angular.extend(u, TPParam.params), c.params = t(u), c.custom = n(u.customVariables || {}), c.customCookies = o(u.customCookies || {}), c.activeMeters = r(u.activeMeters || []), s.getBrowserId().then(function (e) {
          c.browserId = e;
        }), c.params.trackingId && a(c.params.trackingId), c.isShowBoilerplateCloseButton = e.isShowBoilerplateCloseButton.bind(this, h);
      }
      function w(t) {
        m(function () {
          var n = t.userContext;
          h = !0, angular.extend(TPParam.params, t.iframeParams), TPParam.user = function (e) {
            var t = {};
            try {
              t = JSON.parse(e);
            } catch (e) {}
            return t;
          }(n.user_info.user), TPParam.params.experienceId = n.experience_id, TPParam.params.experienceExecutionId = n.experience_execution_id, TPParam.params.experienceActionId = n.experience_action_id, n.template_language && g.update(n.template_language), TPParam.GEO_COUNTRY_CODE = n.country_code, TPParam.GEO_COUNTRY_POSTAL_CODE = n.postal_code, TPParam.initiated = !0, e.config.url = TPParam.params.url, e.setUser(TPParam.params.userToken, TPParam.params.userProvider), y(), e.init(E), p.fire("templateInitiated"), p.fire("updatePianoIdAuthIframeUrl");
        });
      }
      Helper.wrapMethod("isUserValid", e, c), Helper.wrapMethod("allowTinypassAccountsLogin", e, c), Helper.wrapMethod("allowTinypassAccountsLogout", e, c), Helper.wrapMethod("register", e, c), Helper.wrapMethod("login", e, c), Helper.wrapMethod("logout", e, c), Helper.wrapMethod("close", e, c), Helper.wrapMethod("closeAndRefresh", e, c), l.setupScope(c), c.credit = function () {
        return 1 === c.credits() ? "credit" : "credits";
      };
      var T = p.subscribe(EVENT_TEMPLATE_RELOADED, function () {
          y();
        }),
        P = p.subscribe(EVENT_STATS_TRACKED, function () {
          y();
        }),
        S = p.subscribe("userDataContextLoaded", function (e, t) {
          w(t);
        });
      v.initContext().then(function (e) {
        m(function () {
          window.TPParam.params.affiliateState = e.affiliateState, c.affiliateState = e.affiliateState, l.setAffiliateState(e.affiliateState);
        }, 0);
      });
      var C = p.subscribe(EVENT_SETUP_CUSTOM_VARIABLES, function (e, t) {
        window.TPParam.params.customVariables = t, c.custom = n(t || {}), c.$apply();
      });
      c.$on("$destroy", function () {
        _(), T(), P(), S(), C();
      }), y();
    }]
  };
}]), showTemplateModule.factory("template", ["$window", "$rootScope", "$rootElement", "$timeout", "eventService", "ngEventService", "errorService", "containerService", "userService", "configService", "trackExternalEvent", "lang", "setupTrackingId", "pianoIdProvider", "updateDirAttrOnLangChanges", function (e, t, n, r, o, a, i, s, c, u, l, d, f, p, g) {
  var m = {};
  m.$rootScope = t, m.rootElement = n, m.config = {
    aid: TPParam.params.aid,
    url: TPParam.params.url,
    userToken: TPParam.params.userToken,
    userProvider: TPParam.params.userProvider,
    authStartScreen: TPParam.params.authStartScreen,
    pianoIdUrl: TPParam.params.pianoIdUrl || "https://id.tinypass.com/id/"
  };
  var v = {
      displayName: null,
      email: null,
      firstName: null,
      lastName: null,
      uid: "anon",
      valid: !1
    },
    h = "boilerplate";
  return m.init = function (t) {
    var n = angular.element("#template-container");
    if (s.init({
      preferredWidth: t.preferredWidth || 735
    }, function () {
      return {
        container: n
      };
    }), TPParam.error) i().terminal(d.trc("checkout.platform", "Cannot initialize template"));else {
      TPParam.consoleError && util.log("%c[SHOW_TEMPLATE] Error: ".concat(TPParam.consoleError), "color: red;"), c.init(function () {
        return {
          app: TPParam.app,
          user: TPParam.user,
          fillLoginIframeParams: function (e) {
            e.templateId = TPParam.params.templateId, e.templateVariantId = TPParam.params.templateVariantId;
          },
          fillLoginRequiredParamsToGoogleAnalytics: function (e) {
            e.templateId = TPParam.params.templateId, e.templateVariantId = TPParam.params.templateVariantId;
          },
          fillLoginRequiredEventParams: function (e) {
            e.templateId = TPParam.params.templateId, e.templateVariantId = TPParam.params.templateVariantId, m.isSiteLicensing && (e.isSiteLicensing = m.isSiteLicensing);
          },
          fillLoginSuccessEventParams: function (e) {}
        };
      });
      var r = {
        aid: m.getConfig().aid,
        pianoIdUrl: m.getConfig().pianoIdUrl,
        checkout: 0,
        abTestIds: getParameterByName("abTestIds") || [],
        socialName: getParameterByName("socialName"),
        responseType: getParameterByName("responseType") || "code",
        getDoubleOptInParams: void 0,
        customFormParams: m.getCustomFormParams,
        passwordlessEmailSentHandler: function () {},
        isPasswordlessCheckoutEnabled: function () {},
        isPreventPasswordlessLogin: function () {},
        isSingleStepEnabled: function () {},
        getAffiliateIssuerId: function () {},
        userLoginEmail: function () {},
        passwordlessSetPaymentEmail: function () {},
        isSentLoginEmail: function () {
          return !1;
        },
        isSingleStepFormShown: function () {
          return !1;
        },
        getUserToken: function () {
          return m.getConfig().userToken;
        },
        widgetSpecificCheckIfVisible: function () {
          return !!m.getCustomFormParams().formName;
        },
        getPageView: function () {
          return {
            tbc: e.TPParam.params.tbc,
            pageViewId: e.TPParam.params.pageViewId
          };
        }
      };
      p.init(r);
    }
  }, m.getCustomFormParams = function () {
    var e,
      t = {},
      n = window.TPParam.params.formNameByTermId;
    if (n) {
      var r = JSON.parse(n),
        o = co.input.customFormTermId;
      o && (e = r[o]);
    }
    return e && (t.formName = e, t.hideCompletedFields = window.TPParam.params.hideCompletedFields || !1), t.trackingId = window.TPParam.params.trackingId, t;
  }, m.isUserValid = function () {
    return c.isUserValid();
  }, m.allowTinypassAccountsLogin = function () {
    return c.allowTinypassAccountsLogin();
  }, m.allowTinypassAccountsLogout = function () {
    return c.allowTinypassAccountsLogout();
  }, m.register = function () {
    o.isMobileDevice() ? o.registerEvent({}) : c.register();
  }, m.login = function (e, t) {
    o.isMobileDevice() ? o.loginEvent({}) : c.login(e, t);
  }, m.logout = function () {
    c.logout(), m.config.userToken = "", TPParam.user = v, a.fire(EVENT_TEMPLATE_RELOADED);
  }, m.close = function () {
    s.close();
  }, m.closeAndRefresh = function (e) {
    var t = {};
    e && (t.url = e), l("EXTERNAL_EVENT", "close", t), o.closeAndRefreshEvent(e);
  }, m.reloadWithUserToken = function (e) {
    m.config.userToken = e, m.reload();
  }, m.reload = function (e) {
    var t = function (e) {
      var t = {};
      return angular.forEach(["aid", "url", "userToken", "userProvider", "userRef"], function (n) {
        t[n] = void 0 !== e[n] ? e[n] : getParameterByName(n);
      }), t;
    }(m.config);
    t.fromUserIdentity = !0, c.checkUser(t).then(function (t) {
      TPParam.user = t.models.user, a.fire(EVENT_TEMPLATE_RELOADED), a.fire(EVENT_TEMPLATE_LOGIN_CHECK_FINISHED), e && a.fire(EVENT_TEMPLATE_LOGIN_SUCCESS);
    }, function () {
      return i().terminal(d.trc("checkout.platform", "Check user failed")), !1;
    });
  }, m.isShowBoilerplateCloseButton = function (e) {
    var t = u.get().closeButtonType,
      n = e ? TPParam.params.showCloseButton : "false" !== getParameterByName("showCloseButton"),
      r = e ? "inline" !== TPParam.params.displayMode : "inline" !== getParameterByName("displayMode");
    return n && t === h && r;
  }, m.getConfig = function () {
    return m.config;
  }, m.setUser = function (e, t) {
    m.config.userToken = e, m.config.userProvider = t;
  }, a.subscribe("checkProccessesForClose", function () {
    l("EXTERNAL_EVENT", "close", {}), s.purge();
  }), a.subscribe("reloadOffer", function (e, t) {
    m.config.userToken = t.userToken, m.reload();
  }), a.subscribe("successfullyCreditRedeem", function (e, t) {
    util.log("[SHOW_TEMPLATE] redeem credit successfully: ", t);
  }), a.subscribe("creditRedeemFailed", function (e, t) {
    let n = t && t.message;
    i().terminal(d.trc("checkout.platform", "Cannot redeem credit: ") + n), util.log("%c[SHOW_TEMPLATE] Cannot redeem credit: ".concat(n), "color: red;");
  }), c.onLoginSuccess(function (e) {
    m.config.userToken = e.user_token, m.reload(!0);
  }, !1), g(), m;
}]), angular.element(document).ready(function () {
  window.TPInjector = angular.bootstrap(document.getElementById("ng-app"), ["showTemplateModule"], {
    strictDi: !0
  });
});
'use strict';
angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = {
    ZERO: "zero",
    ONE: "one",
    TWO: "two",
    FEW: "few",
    MANY: "many",
    OTHER: "other"
  };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["AM", "PM"],
      "DAY": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "MONTH": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "SHORTDAY": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      "SHORTMONTH": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      "fullDate": "EEEE, MMMM d, y",
      "longDate": "MMMM d, y",
      "medium": "MMM d, y h:mm:ss a",
      "mediumDate": "MMM d, y",
      "mediumTime": "h:mm:ss a",
      "short": "M/d/yy h:mm a",
      "shortDate": "M/d/yy",
      "shortTime": "h:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "$",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
      "PATTERNS": [{
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "(\u00a4",
        "negSuf": ")",
        "posPre": "\u00a4",
        "posSuf": ""
      }]
    },
    "id": "en-us",
    "pluralCat": function (n) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);