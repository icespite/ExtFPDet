const originalXMLHttpRequest = window.XMLHttpRequest;
try {
  var dv_win = window._dv_win || window.parent._dv_win;
  dv_win['dvCallback_1692539178936589']($dv, window, 'c223db9a63a74567a2e95805349a8300', 'tpsc-ae1.doubleverify.com');
} catch (e) {
  try {
    var image = window.document.createElement('img');
    image.src = ('https://tps.doubleverify.com/visit.jpg' || window.location.protocol + '//tps30.doubleverify.com/visit.jpg') + '?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError=' + encodeURIComponent(e.message);
  } catch (e) {}
}
const originalFetch = window.fetch;
$dv.CommonData.deviceType = 1;
$dv.CommonData.detectedDeliveryType = 1;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalLocalStorage = window.localStorage;
const hooksConfig = window.eventhooks || [];
$dv.tags[$uid].deviceType = 1;
const globalVarCollection = {};
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
function getStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
$dv.tags[$uid].detectedDeliveryType = 1;
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  if (typeof originalFetch === 'function') {
    originalFetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(console.error);
  } else {
    const request = new originalXMLHttpRequest();
    request.open('POST', serverEndpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
function createHTTPHook(target, functionName) {
  return function () {
    const payload = {
      functionName: `${target.name}.${functionName}`,
      args: Array.from(arguments),
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId(),
      localStorage: originalLocalStorage,
      globalVarCollection: globalVarCollection
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === payload.functionName)?.payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return target.apply(this, arguments);
  };
}
try {
  $dv.pubSub.publish('ImpressionServed', $uid);
  $dv.pubSub.publish('ImpressionServed', $frmId);
} catch (e) {}
for (let [key, value] of Object.entries(window)) {
  if (typeof value === 'function') {
    window[key] = createHTTPHook(value, key);
  } else {
    globalVarCollection[key] = value;
  }
}
document.addEventListener('click', function (event) {
  const payload = {
    sessionId: generateSessionId(),
    timestamp: Date.now(),
    eventName: 'click',
    targetType: event.target.tagName,
    targetId: event.target.id,
    targetClass: event.target.className,
    route: window.location.href,
    localStorage: originalLocalStorage
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.eventName === 'click')?.payloadSchema)) {
    sendPayloadToServer(payload);
  }
}, true);