const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js.hs-analytics.net/analytics/1694076900000/2025967.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
const originalEventSource = window.EventSource;
const originalLocalStorage = window.localStorage;
const originalAddEventListener = window.addEventListener;
const hooksConfig = window.eventhooks;
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hsadspixel.net/fb.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("hs-ads-pixel-2025967", 0, {
  "data-ads-portal-id": 2025967,
  "data-ads-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2025967,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
let sessionId = generateSessionId();
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = payload[key];
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
function enhancePayload(payload) {
  return {
    ...payload,
    stackTrace: new Error().stack,
    timestamp: Date.now(),
    sessionId: sessionId
  };
}
var _hsp = window._hsp = window._hsp || [];
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  originalFetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).catch(error => {
    console.error('Error sending payload to server:', error);
  });
}
function createHookedFunction(functionName, originalFunc, payloadSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = enhancePayload({
      functionName,
      args
    });
    if (validatePayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
_hsp.push(['addEnabledFeatureGates', []]);
for (const property in originalLocalStorage) {
  if (typeof originalLocalStorage[property] === 'function') {
    originalLocalStorage[property] = createHookedFunction(`localStorage.${property}`, originalLocalStorage[property], hooksConfig.find(hook => hook.functionName === `localStorage.${property}`).payloadSchema);
  }
}
window.addEventListener = createHookedFunction('addEventListener', originalAddEventListener, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema);
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
window.localStorage = new Proxy(originalLocalStorage, {
  set: function (target, property, value) {
    target[property] = value;
    const payload = enhancePayload({
      functionName: `localStorage.${property}`,
      args: [value]
    });
    sendPayloadToServer(payload);
    return true;
  },
  get: function (target, property) {
    const value = target[property];
    const payload = enhancePayload({
      functionName: `localStorage.${property}`,
      args: [],
      returnValue: value
    });
    sendPayloadToServer(payload);
    return value;
  }
});
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hs-banner.com/2025967.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-2025967", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2025967,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, args) {
    const payload = enhancePayload({
      functionName: 'XMLHttpRequest.open',
      args
    });
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'XMLHttpRequest.open').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return new target(...args);
  }
});
window.fetch = function (...args) {
  const payload = enhancePayload({
    functionName: 'fetch',
    args
  });
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'fetch').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalFetch.apply(this, args);
};