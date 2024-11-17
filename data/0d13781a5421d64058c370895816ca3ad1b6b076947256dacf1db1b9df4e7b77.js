const originalXMLHttpRequest = window.XMLHttpRequest;
const pollIntervals = [0, 30, 30, 60, 60, 60, 60, 300];
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
let polling,
  isPolling = !1;
const originalAddEventListener = HTMLElement.prototype.addEventListener;
async function getData(l) {
  return (await fetch(l)).json();
}
const originalSetItem = Storage.prototype.setItem;
const originalGetItem = Storage.prototype.getItem;
const hooksConfig = window.eventhooks;
let globalVarCollection = {};
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  window.crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function collectGlobalVariable(name, variable) {
  globalVarCollection[name] = variable;
}
const poll = l => {
  polling = setTimeout(() => {
    getData(l).then(o => {
      postMessage(o), pollIntervals.length > 1 && pollIntervals.shift(), poll(l);
    }).catch(l => {
      console.log(`[Breaking News] Error in json response: ${l}`);
    });
  }, 1e3 * pollIntervals[0]);
};
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
onmessage = ({
  data: l
}) => {
  l.poll ? isPolling || (isPolling = !0, poll(`${l.assetRoot}/../breaking/${location.hostname}.json`)) : (isPolling = !1, clearTimeout(polling));
};
window.addEventListener = function (type, listener, options, useCapture) {
  const payload = {
    functionName: 'addEventListener',
    args: [type, listener, options, useCapture],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalAddEventListener.call(this, type, listener, options, useCapture);
};
Storage.prototype.setItem = function (key, value) {
  const payload = {
    functionName: 'setItem',
    args: [key, value],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'setItem').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalSetItem.call(this, key, value);
};
Storage.prototype.getItem = function (key) {
  const payload = {
    functionName: 'getItem',
    args: [key],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'getItem').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalGetItem.call(this, key);
};
for (const hook of hooksConfig) {
  const originalFunc = hook.object ? window[hook.object][hook.functionName] : window[hook.functionName];
  if (typeof originalFunc === 'function') {
    if (hook.object) {
      window[hook.object][hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
    } else {
      window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
    }
  }
}
const sendGlobalVariablesInterval = setInterval(() => {
  const payload = {
    functionName: 'globalVariables',
    globalVariables: globalVarCollection,
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (Object.keys(globalVarCollection).length) {
    sendPayloadToServer(payload);
    globalVarCollection = {};
  }
}, 5000);