let timerId;
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hsleadflows.net/leadflows.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("LeadFlows-19534359", 0, {
  "crossorigin": "anonymous",
  "data-leadin-portal-id": 19534359,
  "data-leadin-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 19534359,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
const originalSetInterval = window.setInterval;
const originalLocalStorage = window.localStorage;
var _hsp = window._hsp = window._hsp || [];
const originalAddEventListener = window.EventTarget.prototype.addEventListener;
const prevHooksConfig = window.eventHooks || [];
_hsp.push(['addEnabledFeatureGates', []]);
function validatePayload(payload, schema) {
  const keys = Object.keys(schema);
  for (let key of keys) {
    if (typeof payload[key] !== schema[key] && payload[key] !== undefined) {
      return false;
    }
  }
  return true;
}
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `ID-${randomString}`;
}
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hs-banner.com/v2/19534359/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-19534359", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 19534359,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
function postToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  originalFetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).catch(e => {
    console.error('Error while sending data to server: ' + e);
  });
}
function createHookedFunction(funcName, func, schema) {
  return function () {
    const args = Array.from(arguments);
    let payload = {
      functionName: funcName,
      args: JSON.stringify(args),
      timestamp: new Date().toISOString(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, schema)) {
      postToServer(payload);
    }
    return func.apply(this, args);
  };
}
const addGlobalHooks = () => {
  for (let hook of prevHooksConfig) {
    if (typeof window[hook.functionName] === "function") {
      window[hook.functionName] = createHookedFunction(hook.functionName, window[hook.functionName], hook.payloadSchema);
    }
  }
};
const jshook = () => {
  window.localStorage.setItem = new Proxy(originalLocalStorage.setItem, {
    apply: function (target, thisArg, args) {
      const payload = {
        functionName: 'LocalStorage.setItem',
        args,
        sessionId: generateSessionId(),
        timestamp: Date.now()
      };
      if (validatePayload(payload, prevHooksConfig.find(config => config.functionName === 'localStorage.setItem').payloadSchema)) {
        postToServer(payload);
      }
      return Reflect.apply(target, thisArg, args);
    }
  });
  window.EventTarget.prototype.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = args[0];
      const payload = {
        functionName: 'addEventListener',
        args: [eventName],
        sessionId: generateSessionId(),
        timestamp: Date.now()
      };
      if (validatePayload(payload, prevHooksConfig.find(config => config.functionName === 'EventTarget.addEventListener').payloadSchema)) {
        postToServer(payload);
      }
      return Reflect.apply(target, thisArg, args);
    }
  });
  window.setInterval = function (callback, delay, ...args) {
    const payload = {
      functionName: 'setInterval',
      args: [callback.toString(), delay, ...args],
      sessionId: generateSessionId(),
      timestamp: Date.now()
    };
    if (validatePayload(payload, prevHooksConfig.find(config => config.functionName === 'window.setInterval').payloadSchema)) {
      postToServer(payload);
    }
    return originalSetInterval(callback, delay, ...args);
  };
};
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hsadspixel.net/fb.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("hs-ads-pixel-19534359", 0, {
  "data-ads-portal-id": 19534359,
  "data-ads-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 19534359,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
timerId = setInterval(function () {
  addGlobalHooks();
  jshook();
}, 1000);
!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js.hs-analytics.net/analytics/1694076900000/19534359.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
window.addEventListener('beforeunload', function () {
  clearInterval(timerId);
});