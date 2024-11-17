const originalSetTimeout = window.setTimeout;
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = localStorage.setItem;
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const originalAddEventListener = EventTarget.prototype.addEventListener;
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return randomBytes.map(b => b.toString(16).padStart(2, '0')).join('');
}
window[window["TiktokAnalyticsObject"]]._cc = 'JP';
function logEvent(eventName, args) {
  console.log(`Event triggered: ${eventName}`, args);
}
;
function trackEvent(eventName, args) {
  const metadata = {
    url: location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    token: generateUniqueToken()
  };
  console.info(`Tracking event: ${eventName}`, {
    args,
    metadata
  });
}
function enhancedSetItem(key, value) {
  originalLocalStorageSetItem.call(localStorage, key, value);
  trackEvent('localStorageSetItem', {
    key,
    value
  });
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '7572e837-a23b-11ee-90e8-1070fdd0ffbe';
function wrappedAddEventListener(eventName, handler, options) {
  const wrappedHandler = function (event) {
    trackEvent('domEvent', {
      type: eventName,
      target: event.target
    });
    return handler.call(this, event);
  };
  originalAddEventListener.call(this, eventName, wrappedHandler, options);
}
localStorage.setItem = enhancedSetItem;
window[window["TiktokAnalyticsObject"]]._plugins = {
  "AdvancedMatching": true,
  "AutoAdvancedMatching": true,
  "AutoConfig": true,
  "Callback": true,
  "DiagnosticsConsole": true,
  "Identify": true,
  "Monitor": false,
  "PangleCookieMatching": true,
  "PerformanceInteraction": false,
  "Shopify": true,
  "WebFL": false
};
EventTarget.prototype.addEventListener = wrappedAddEventListener;
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
window.setTimeout = function (originalFunc) {
  return function () {
    const args = Array.from(arguments);
    trackEvent('setTimeout', args);
    return originalFunc.apply(this, args);
  };
}(originalSetTimeout);
window.setInterval = function (originalFunc) {
  return function () {
    const args = Array.from(arguments);
    trackEvent('setInterval', args);
    return originalFunc.apply(this, args);
  };
}(originalSetInterval);
!function () {
  function t() {
    return window && window.TiktokAnalyticsObject || "ttq";
  }
  function i() {
    return window && window[t()];
  }
  var o,
    n,
    e,
    c,
    a,
    r = [{
      id: "MWNkZmM2YTcxMA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxMQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxMg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxMw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxNA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxNQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxNg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxNw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MWNkZmM2YTcxOA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxOQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTE",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTI",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTM",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTQ",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MWNkZmM2YTcxMTU",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }],
    d = {
      "info": {
        "pixelCode": "CI3O80RC77U4TTM9BBQG",
        "name": "Clarion-Firefighters TikTok Pixel",
        "status": 0,
        "setupMode": 1,
        "partner": "",
        "advertiserID": "7241684131648749569",
        "is_onsite": false,
        "firstPartyCookieEnabled": true
      },
      "plugins": {
        "Shopify": false,
        "AdvancedMatching": {
          "email": true,
          "phone_number": true
        },
        "AutoAdvancedMatching": null,
        "Callback": true,
        "Identify": true,
        "Monitor": true,
        "PerformanceInteraction": true,
        "WebFL": true,
        "AutoConfig": {
          "form_rules": null,
          "vc_rules": {}
        },
        "DiagnosticsConsole": true,
        "PangleCookieMatching": false,
        "CompetitorInsight": true
      },
      "rules": []
    },
    M = "https://analytics.tiktok.com/i18n/pixel/static/",
    p = i();
  p || (p = [], window && (window[t()] = p)), Object.assign(d, {
    options: (o = d.info.pixelCode, (n = i()._o) && n[o] || {})
  }), function (t) {
    p._i || (p._i = {});
    var i = t.info.pixelCode;
    i && (p._i[i] || (p._i[i] = []), Object.assign(p._i[i], t), p._i[i]._load = +new Date());
  }(d), e = function (t, i, o) {
    var n = 0 < arguments.length && void 0 !== t ? t : {},
      e = 1 < arguments.length ? i : void 0,
      i = 2 < arguments.length ? o : void 0,
      o = function (t, i) {
        for (var o = 0; o < t.length; o++) if (i.call(null, t[o], o)) return t[o];
      }(r, function (t) {
        var i = t.map;
        return function (t, i) {
          for (var o = 0; o < t.length; o++) if (!i.call(null, t[o], o)) return !1;
          return !0;
        }(Object.keys(i), function (t) {
          return !(!n[t] || !e[t]) === i[t];
        });
      });
    return o ? i + "main.".concat(o.id, ".js") : i + "main.".concat(r[0].id, ".js");
  }(p._plugins, d.plugins, M), c = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((a = document.createElement("script")).type = "text/javascript", a.async = !0, a.src = e, a.setAttribute("data-id", c), (c = document.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(a, c));
}();
window.requestAnimationFrame = function (originalFunc) {
  return function (callback) {
    const wrappedCallback = function (timestamp) {
      trackEvent('requestAnimationFrame', {
        timestamp
      });
      return callback(timestamp);
    };
    return originalFunc(wrappedCallback);
  };
}(originalRequestAnimationFrame);
window.fetch = function (originalFunc) {
  return function () {
    const args = Array.from(arguments);
    trackEvent('fetch', args);
    return originalFunc.apply(this, args);
  };
}(originalFetch);