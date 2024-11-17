const originalDocumentWrite = document.write;
const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
/*!
	Marketing Cloud Account Engagement's Engagement Tracker Javascript - 2023-04-13 11:24:47
	If you're an ad blocker, block the URI only. Don't block the domain.
*/
function checkNamespace(e) {
  for (var t = e.split("."), r = window, i = 0; i < t.length; i++) {
    var a = t[i];
    r[a] || (r[a] = {}), r = r[a];
  }
}
const originalLocalStorage = window.localStorage;
const originalSessionStorage = window.sessionStorage;
const originalXMLHttpRequest = window.XMLHttpRequest;
function getPardotUrl() {
  var e = "pi.pardot.com";
  return "string" == typeof piHostname && (e = piHostname), ("https:" == document.location.protocol ? "https://" : "http://") + e;
}
const hooksConfig = window.eventhooks;
function piTracker(e) {
  if (checkNamespace("pi.tracker"), pi.tracker.visitor_id = piGetCookie("visitor_id" + (piAId - 1e3)), pi.tracker.visitor_id_sign = piGetCookie("visitor_id" + (piAId - 1e3) + "-hash"), pi.tracker.pi_opt_in = piGetCookie("pi_opt_in" + (piAId - 1e3)), "false" != pi.tracker.pi_opt_in || void 0 !== pi.tracker.title && pi.tracker.notify_pi) {
    var t = piGetParameter(document.URL, "pi_campaign_id");
    null != t ? pi.tracker.campaign_id = t : "undefined" != typeof piCId && "" != piCId && null != piCId ? pi.tracker.campaign_id = piCId : pi.tracker.campaign_id = null, pi.tracker.account_id = piAId, pi.tracker.title = document.title, "undefined" != typeof piPoints && (pi.tracker.pi_points = piPoints), pi.tracker.url = void 0 !== e ? e : document.URL, pi.tracker.referrer = document.referrer, null == pi.tracker.referrer && (pi.tracker.referrer = piGetParameter(document.URL, "referrer")), pi.tracker.referrer = pi.tracker.referrer;
    var r = piGetParameter(document.URL, "pi_ad_id");
    null != r && (pi.tracker.pi_ad_id = r);
    var i = piGetParameter(document.URL, "creative");
    null != i && (pi.tracker.creative = i);
    var a = piGetParameter(document.URL, "matchtype");
    null != a && (pi.tracker.matchtype = a);
    var n = piGetParameter(document.URL, "keyword");
    null != n && (pi.tracker.keyword = n);
    var p = piGetParameter(document.URL, "network");
    null != p && (pi.tracker.network = p);
    var c = piGetParameter(document.URL, "device");
    null != c && (pi.tracker.device = c), "undefined" != typeof piIncludeInActivities && (pi.tracker.pi_include_in_activies = piIncludeInActivities), "undefined" != typeof piProfileId && (pi.tracker.pi_profile_id = piProfileId);
    var o = piGetParameter(document.URL, "pi_profile_id");
    null != o && (pi.tracker.pi_profile_id = o);
    var l = piGetParameter(document.URL, "pi_email");
    null != l && (pi.tracker.pi_email = l);
    var u = piGetParameter(document.URL, "pi_list_email");
    null != u && (pi.tracker.pi_list_email = u);
    var d = piGetParameter(document.URL, "utm_campaign");
    null != d && (pi.tracker.utm_campaign = d);
    var m = piGetParameter(document.URL, "utm_medium");
    null != m && (pi.tracker.utm_medium = m);
    var s = piGetParameter(document.URL, "utm_source");
    null != s && (pi.tracker.utm_source = s);
    var k = piGetParameter(document.URL, "utm_content");
    null != k && (pi.tracker.utm_content = k);
    var f = piGetParameter(document.URL, "utm_term");
    null == f && (f = piGetParameter(document.URL, "_kk")), null != f && (pi.tracker.utm_term = f);
    var _ = piGetParameter(document.URL, "gclid");
    null != _ && (pi.tracker.gclid = _);
    var v = piGetParameter(document.URL, "pi_content");
    null != v && (pi.tracker.pi_content = v);
    var g = piGetParameter(document.URL, "pi_em");
    null != g && (pi.tracker.pi_em = g);
    var y = "ver=3";
    for (property in pi.tracker) y += "&" + property + "=" + encodeURIComponent(pi.tracker[property]);
    var h = !1;
    try {
      h = location.protocol + "//";
    } catch (e) {}
    if (null == h && (h = "http://"), "string" != typeof piTUrl || -1 == piTUrl.indexOf("localhost") && -1 === piTUrl.indexOf("app.dev.pardot")) U = getPardotUrl() + "/analytics?";else var U = h + piTUrl + "/analytics?";
    var P = document.getElementsByTagName("head")[0];
    piScriptObj[piScriptNum] = document.createElement("script"), piScriptObj[piScriptNum].type = "text/javascript", piScriptObj[piScriptNum].src = U + y, P.appendChild(piScriptObj[piScriptNum]), piScriptObj[piScriptNum].onload = function () {};
  }
  piScriptNum++;
}
function generateSessionId() {
  const randBytes = new Uint8Array(16);
  crypto.getRandomValues(randBytes);
  const randString = Array.from(randBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `sess-${randString}`;
}
function getStackTrace() {
  const stackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackLimit;
  return stackTrace;
}
function validatePayload(pl, expectedSchema) {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = pl[key];
      if (actualValue === undefined) {
        console.warn(`Missing required property '${key}' in payload`);
        return false;
      }
      if (typeof actualValue !== expectedType) {
        console.warn(`Invalid type for property '${key}' in payload, expected '${expectedType}' but got '${typeof actualValue}'`);
        return false;
      }
    }
  }
  return true;
}
function piGetParameter(e, t) {
  var t = t + "=";
  if (e.length > 0) {
    var r = e.indexOf(t);
    if (-1 != r) {
      r += t.length;
      var i = e.indexOf("&", r);
      return -1 == i && (i = e.length), decodeURIComponent(e.substring(r, i));
    }
  }
  return null;
}
function sendPayloadToServer(pl) {
  const serverEndpoint = '/api/collect-data';
  const request = new originalXMLHttpRequest();
  request.open('POST', serverEndpoint);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(pl));
}
function piGetCookie(e) {
  return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "";
}
function createHookedFunction(funcName, originalFunc, plSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      funcName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, plSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
function piSetCookie(e, t, r) {
  var i = new Date();
  i.setDate(i.getDate() + r), document.cookie = e + "=" + escape(t) + (null == r ? "" : ";expires=" + i.toGMTString() + ";path=" + escape("/"));
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
var piVersion = "1.0.2",
  piScriptNum = 0,
  piScriptObj = new Array();
document.write = new Proxy(originalDocumentWrite, {
  apply: function (target, thisArg, args) {
    const payload = {
      functionName: 'document.write',
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'document.write').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return target.apply(thisArg, args);
  }
});
piTracker(), function () {
  function e(e) {
    if (document.querySelectorAll) return document.querySelectorAll("." + e);
    var t = document.getElementsByTagName("a"),
      r = new Array();
    for (i = 0; i < t.length; i++) {
      var a = t[i].getAttribute("class");
      for (a || (a = t[i].className), ecl = a.split(" "), j = 0; j < ecl.length; j++) ecl[j].toLowerCase() == e.toLowerCase() && r.push(t[i]);
    }
    return r;
  }
  function t(t) {
    return "function" != typeof document.getElementsByClassName ? e(t) : document.getElementsByClassName(t);
  }
  function r(e) {
    var t = piGetCookie("pi_opt_in" + (piAId - 1e3)),
      r = piGetCookie("visitor_id" + (piAId - 1e3));
    if ("false" === t || "" === t && "" === r) window.location = e;else {
      var i,
        a = getPardotUrl() + "/analytics?",
        n = {
          url: encodeURIComponent(e),
          title: "",
          referrer: pi.tracker.url
        };
      for (i in pi.tracker) pi.tracker.hasOwnProperty(i) && !n.hasOwnProperty(i) && (n[i] = pi.tracker[i]), a += "&" + i + "=" + n[i];
      var p = "analyticsCB" + new Date().getTime();
      a += "&piClickCallback=" + p, pi[p] = function () {
        window.location = e;
      };
      var c = document.createElement("script");
      c.type = "text/javascript", c.src = a;
      var o = document.getElementsByTagName("script")[0];
      o.parentNode.insertBefore(c, o);
    }
  }
  !function () {
    var e, i, a;
    for (e = t("pardotTrackClick"), i = 0; i < e.length; i++) {
      var n = function (e) {
        var t = e.currentTarget ? e.currentTarget : e.srcElement;
        if (t) {
          var i = t.getAttribute("href");
          if (i) return r(i), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
        }
      };
      (a = e[i]).addEventListener ? a.addEventListener("click", n, !1) : a.attachEvent && a.attachEvent("onclick", n);
    }
  }();
}();
const hookedGlobalStorage = {
  localStorage: new Proxy(originalLocalStorage, {
    set: function (target, key, value) {
      const payload = {
        functionName: 'localStorage.set',
        args: [key, value],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.set').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      target[key] = value;
    },
    get: function (target, key) {
      const result = target[key];
      const payload = {
        functionName: 'localStorage.get',
        args: [key],
        result: result,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.get').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return result;
    }
  }),
  sessionStorage: new Proxy(originalSessionStorage, {
    set: function (target, key, value) {
      const payload = {
        functionName: 'sessionStorage.set',
        args: [key, value],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'sessionStorage.set').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      target[key] = value;
    },
    get: function (target, key) {
      const result = target[key];
      const payload = {
        functionName: 'sessionStorage.get',
        args: [key],
        result: result,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'sessionStorage.get').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return result;
    }
  })
};
Object.assign(window, hookedGlobalStorage);