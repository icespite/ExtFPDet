const nativeFetch = window.fetch;
const nativeWebSocket = window.WebSocket;
const nativeLocalStorage = window.localStorage;
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const eventHooks = window.eventhooks;
let globalVariables = [];
let eventListeners = [];
function generateUUID() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${random}`;
}
function validateArgs(actualArgs, expectedArgs) {
  if (actualArgs.length !== expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const expectedArg = expectedArgs[i];
    const actualArg = actualArgs[i];
    if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
      return false;
    }
    if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
      return false;
    }
  }
  return true;
}
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
window[window["TiktokAnalyticsObject"]]._cc = 'US';
function collectGlobalVariables() {
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      globalVariables.push(key);
    }
  }
}
;
function collectEventListeners() {
  for (let key in window) {
    if (key.startsWith('on') && window[key] instanceof Function) {
      eventListeners.push(key);
    }
  }
}
function collectEventInfo(eventName, args) {
  const stackTrace = new Error().stack;
  const callerUrl = getCallerUrl(stackTrace);
  const eventInfo = {
    eventName: eventName,
    args: args,
    callerUrl: callerUrl,
    timestamp: new Date().toISOString(),
    uuid: generateUUID()
  };
  sendEventInfoToServer(eventInfo);
  collectGlobalVariables();
  collectEventListeners();
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'a3e99dea-8081-11ee-bdd6-b8cef6aa2b18';
function getCallerUrl(stackTrace) {
  const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
  return callerUrlMatch ? callerUrlMatch[0] : '';
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
function sendEventInfoToServer(eventInfo) {
  navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
}
function createHookedFunction(originalFunc, eventName, expectedArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) {
      collectEventInfo(eventName, args);
    }
    return originalFunc.apply(this, args);
  };
}
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
eventHooks.forEach(function (eventHook) {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createHookedFunction(originalFunc, eventHook.name, eventHook.args);
  }
});
window.fetch = new Proxy(nativeFetch, {
  apply: function (target, thisArg, argumentsList) {
    const fetchHook = eventHooks.find(function (hook) {
      return hook.name === 'fetch';
    });
    if (validateArgs(argumentsList, fetchHook.args)) {
      collectEventInfo('fetch', argumentsList);
    }
    return target.apply(thisArg, argumentsList);
  }
});
!function () {
  function i() {
    return window && window.TiktokAnalyticsObject || "ttq";
  }
  function t() {
    return window && window[i()];
  }
  var o,
    n,
    e,
    d,
    a,
    r = [{
      id: "MTdjYzNiZDU2MA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2MQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2Mg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2Mw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2NA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2NQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2Ng",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2Nw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !1
      }
    }, {
      id: "MTdjYzNiZDU2OA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2OQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTE",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTI",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTM",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTQ",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }, {
      id: "MTdjYzNiZDU2MTU",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0,
        CompetitorInsight: !0
      }
    }],
    c = {
      "info": {
        "pixelCode": "CG7H7FRC77UFNRPAKPA0",
        "name": "ZOZOTOWN",
        "status": 0,
        "setupMode": 0,
        "partner": "",
        "advertiserID": "7130186238388191234",
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
          "vc_rules": null
        },
        "DiagnosticsConsole": true,
        "PangleCookieMatching": false,
        "CompetitorInsight": true
      },
      "rules": [{
        "code_id": 7210301985352925185,
        "pixel_event_id": 7210301985352925185,
        "trigger_type": "PAGEVIEW",
        "conditions": [{
          "variable_type": "PAGE_URL",
          "operator": "CONTAINS",
          "value": "/arigato.html"
        }],
        "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"CG7H7FRC77UFNRPAKPA0\").track(\"CompletePayment\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
      }]
    },
    p = "https://analytics.tiktok.com/i18n/pixel/static/",
    M = t();
  M || (M = [], window && (window[i()] = M)), Object.assign(c, {
    options: (o = c.info.pixelCode, (n = t()._o) && n[o] || {})
  }), function (i) {
    M._i || (M._i = {});
    var t = i.info.pixelCode;
    t && (M._i[t] || (M._i[t] = []), Object.assign(M._i[t], i), M._i[t]._load = +new Date());
  }(c), e = function (i, t, o) {
    var n = 0 < arguments.length && void 0 !== i ? i : {},
      e = 1 < arguments.length ? t : void 0,
      t = 2 < arguments.length ? o : void 0,
      o = function (i, t) {
        for (var o = 0; o < i.length; o++) if (t.call(null, i[o], o)) return i[o];
      }(r, function (i) {
        var t = i.map;
        return function (i, t) {
          for (var o = 0; o < i.length; o++) if (!t.call(null, i[o], o)) return !1;
          return !0;
        }(Object.keys(t), function (i) {
          return !(!n[i] || !e[i]) === t[i];
        });
      });
    return o ? t + "main.".concat(o.id, ".js") : t + "main.".concat(r[0].id, ".js");
  }(M._plugins, c.plugins, p), d = c.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((a = document.createElement("script")).type = "text/javascript", a.async = !0, a.src = e, a.setAttribute("data-id", d), (d = document.getElementsByTagName("script")[0]) && d.parentNode && d.parentNode.insertBefore(a, d));
}();
window.WebSocket = new Proxy(nativeWebSocket, {
  construct: function (target, argumentsList) {
    const webSocketHook = eventHooks.find(function (hook) {
      return hook.name === 'WebSocket';
    });
    if (validateArgs(argumentsList, webSocketHook.args)) {
      collectEventInfo('WebSocket', argumentsList);
    }
    return new target(...argumentsList);
  }
});
window.localStorage = new Proxy(nativeLocalStorage, {
  get: function (target, prop) {
    collectEventInfo("localStorage_get", [prop]);
    return target[prop];
  },
  set: function (target, prop, value) {
    collectEventInfo("localStorage_set", [prop, value]);
    target[prop] = value;
    return true;
  }
});