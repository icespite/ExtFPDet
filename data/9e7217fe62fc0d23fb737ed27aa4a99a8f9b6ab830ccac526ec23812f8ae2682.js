const originalSetTimeout = window.setTimeout;
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const originalFetch = window.fetch;
const originalLocalStorageSetItem = window.localStorage.setItem;
;
const originalAddEventListener = window.addEventListener;
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'f2b7f958-4df8-11ee-ad54-08c0eb7158da';
const eventHooks = window.eventhooks;
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
function validateEventArguments(eventName, args, expectedArgs) {
  // Similar code as before...
}
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
function getEventMetadata() {
  const metadata = {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    globalVariables: Object.keys(window),
    localStorageData: JSON.stringify(localStorage),
    token: generateUniqueToken()
  };
  return metadata;
}
window[window["TiktokAnalyticsObject"]]._aam = {
  "in_form": false,
  "selectors": {
    "[class*=Btn]": 9,
    "[class*=Button]": 11,
    "[class*=btn]": 8,
    "[class*=button]": 10,
    "[id*=Btn]": 14,
    "[id*=Button]": 16,
    "[id*=btn]": 13,
    "[id*=button]": 15,
    "[role*=button]": 12,
    "button[type='button']": 6,
    "button[type='menu']": 7,
    "button[type='reset']": 5,
    "button[type='submit']": 4,
    "input[type='button']": 1,
    "input[type='image']": 2,
    "input[type='submit']": 3
  },
  "exclude_selectors": ["[class*=cancel]", "[role*=cancel]", "[id*=cancel]", "[class*=back]", "[role*=back]", "[id*=back]", "[class*=return]", "[role*=return]", "[id*=return]"],
  "phone_regex": "^\\+?[0-9\\-\\.\\(\\)\\s]{7,25}$",
  "phone_selectors": ["phone", "mobile", "contact", "pn"],
  "restricted_keywords": ["ssn", "unique", "cc", "card", "cvv", "cvc", "cvn", "creditcard", "billing", "security", "social", "pass", "zip", "address", "license", "gender", "health", "age", "nationality", "party", "sex", "political", "affiliation", "appointment", "politics", "family", "parental"]
};
function sendEventPayload(payload) {
  // Similar code as before...
}
function createEventWrapper(eventName, originalFunc, eventArgs) {
  return function () {
    // Similar code as before...
  };
}
eventHooks.forEach(eventHook => {
  // Similar code as before...
});

// Additional hooks for localStorage.setItem and addEventListener
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    const eventName = 'localStorage.setItem';
    const localStorageHook = eventHooks.find(hook => hook.name === eventName);
    if (localStorageHook && validateEventArguments(eventName, args, localStorageHook.args)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return target.apply(thisArg, args);
  }
});
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'addEventListener';
    const eventListenerHook = eventHooks.find(hook => hook.name === eventName);
    if (eventListenerHook && validateEventArguments(eventName, args, eventListenerHook.args)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return target.apply(thisArg, args);
  }
});

// The original hooked methods from the provided js:
// window.setTimeout = new Proxy(originalSetTimeout, {...});
// window.setInterval = new Proxy(originalSetInterval, {...});
// window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {...});
// window.fetch = new Proxy(originalFetch, {...});
!function () {
  function i() {
    return window && window.TiktokAnalyticsObject || "ttq";
  }
  function t() {
    return window && window[i()];
  }
  var n,
    o,
    e,
    a,
    c,
    r = [{
      id: "MTE1ODM4MDNhMA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTE1ODM4MDNhMQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTE1ODM4MDNhMg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTE1ODM4MDNhMw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTE1ODM4MDNhNA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTE1ODM4MDNhNQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTE1ODM4MDNhNg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0
      }
    }, {
      id: "MTE1ODM4MDNhNw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0
      }
    }],
    d = {
      "info": {
        "pixelCode": "C6J1H03EQEH5BUUGTM00",
        "name": "yousician",
        "status": 0,
        "setupMode": 1,
        "partner": "",
        "advertiserID": "7033764349168599042",
        "is_onsite": false,
        "firstPartyCookieEnabled": true
      },
      "plugins": {
        "Shopify": false,
        "AdvancedMatching": {
          "email": true,
          "phone_number": true
        },
        "AutoAdvancedMatching": {
          "auto_email": true,
          "auto_phone_number": true
        },
        "Callback": true,
        "Identify": true,
        "Monitor": true,
        "PerformanceInteraction": true,
        "WebFL": true,
        "AutoConfig": true,
        "DiagnosticsConsole": true,
        "PangleCookieMatching": false
      },
      "rules": []
    },
    M = "https://analytics.tiktok.com/i18n/pixel/static/",
    p = t();
  p || (p = [], window && (window[i()] = p)), Object.assign(d, {
    options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
  }), function (i) {
    p._i || (p._i = {});
    var t = i.info.pixelCode;
    t && (p._i[t] || (p._i[t] = []), Object.assign(p._i[t], i), p._i[t]._load = +new Date());
  }(d), e = function (i, t, n) {
    var o = 0 < arguments.length && void 0 !== i ? i : {},
      e = 1 < arguments.length ? t : void 0,
      t = 2 < arguments.length ? n : void 0,
      n = function (i, t) {
        for (var n = 0; n < i.length; n++) if (t.call(null, i[n], n)) return i[n];
      }(r, function (i) {
        var t = i.map;
        return function (i, t) {
          for (var n = 0; n < i.length; n++) if (!t.call(null, i[n], n)) return !1;
          return !0;
        }(Object.keys(t), function (i) {
          return !(!o[i] || !e[i]) === t[i];
        });
      });
    return n ? t + "main.".concat(n.id, ".js") : t + "main.".concat(r[0].id, ".js");
  }(p._plugins, d.plugins, M), a = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a));
}();