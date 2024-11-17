const methodsToHooks = ['fetch', 'setTimeout', 'setInterval', 'requestAnimationFrame', 'addEventListener', 'removeEventListener'];
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const originalMethods = methodsToHooks.reduce((acc, method) => ({
  ...acc,
  [method]: window[method]
}), {});
;
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '66056de3-3e9b-11ee-b17f-08c0eb5ae864';
const eventHooks = window.eventhooks;
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, b => ('0' + b.toString(16)).slice(-2)).join('');
  return token;
}
window[window["TiktokAnalyticsObject"]]._plugins = {
  "AdvancedMatching": true,
  "AutoAdvancedMatching": true,
  "AutoConfig": true,
  "Callback": true,
  "DiagnosticsConsole": true,
  "Identify": true,
  "Monitor": false,
  "PangleCookieMatching": false,
  "PerformanceInteraction": false,
  "Shopify": true,
  "WebFL": false
};
function validateFunctionArgs(funcName, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    console.warn(`Invalid number of arguments for function '${funcName}'. Expected ${expectedArgs.length}, got ${args.length}.`);
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    if (typeof args[i] !== expectedArgs[i]) {
      console.warn(`Invalid argument type for function '${funcName}' at position ${i}. Expected type '${expectedArgs[i]}', got '${typeof args[i]}'.`);
      return false;
    }
  }
  return true;
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
function getMetadata() {
  return {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    token: generateUniqueToken(),
    localStorage: JSON.parse(JSON.stringify(localStorage)),
    globals: Object.keys(window).filter(key => !window.hasOwnProperty(key))
  };
}
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
function sendTrackingData(data) {
  const collectorURL = '/collect';
  originalMethods.fetch ? originalMethods.fetch(collectorURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }) : sendWithXHR(data);
}
function sendWithXHR(data) {
  const request = new XMLHttpRequest();
  request.open('POST', '/collect');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));
}
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
      id: "MTAwYzY4Y2VmMA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmNA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0
      }
    }],
    d = {
      "info": {
        "pixelCode": "C2HDVNQQV140ORDJ25K0",
        "name": "Warby Parker Website",
        "status": 0,
        "setupMode": 1,
        "partner": "",
        "advertiserID": "6963373425255546881",
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
          "auto_phone_number": false
        },
        "Callback": true,
        "Identify": true,
        "Monitor": true,
        "PerformanceInteraction": true,
        "WebFL": true,
        "AutoConfig": true,
        "DiagnosticsConsole": true
      },
      "rules": []
    },
    p = "https://analytics.tiktok.com/i18n/pixel/static/",
    l = t();
  l || (l = [], window && (window[i()] = l)), Object.assign(d, {
    options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
  }), function (i) {
    l._i || (l._i = {});
    var t = i.info.pixelCode;
    t && (l._i[t] || (l._i[t] = []), Object.assign(l._i[t], i), l._i[t]._load = +new Date());
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
  }(l._plugins, d.plugins, p), a = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a));
}();
function createMethodProxy(methodName) {
  return new Proxy(originalMethods[methodName], {
    apply: function (target, thisArg, args) {
      const hook = eventHooks.find(hook => hook.name === methodName);
      if (hook && validateFunctionArgs(methodName, args, hook.args)) {
        const metadata = getMetadata();
        const data = {
          methodName,
          args,
          metadata
        };
        sendTrackingData(data);
      }
      return target.apply(thisArg, args);
    }
  });
}
function init() {
  methodsToHooks.forEach(methodName => {
    window[methodName] = createMethodProxy(methodName);
  });
}

// Initiate the script
init();