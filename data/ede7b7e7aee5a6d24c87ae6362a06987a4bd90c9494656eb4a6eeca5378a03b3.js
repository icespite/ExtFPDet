const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
if (typeof isIdsync != "object" || typeof isIdsync.load_pixel != "function") {
  var isIdsync = {
    load_pixel: function (src) {
      var img;
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        img = new Image();
      } else {
        img = document.createElement("img");
      }
      img.src = src;
      img.width = 0;
      img.height = 0;
      img.className = "instreamatic-pixel";
      document.body.appendChild(img);
    },
    load_script: function (src, c) {
      var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = src;
      if (c) {
        js.addEventListener('load', function (e) {
          c(null, e);
        }, false);
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(js, s);
    }
  };
}
const originalSetItem = Storage.prototype.setItem;
const originalGetItem = Storage.prototype.getItem;
const hooksConfig = window.eventhooks;
const globalVars = {};
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function payloadValidator(payload, expectedSchema) {
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
  const stackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackLimit;
  return stackTrace;
}
function sendPayload(payload) {
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
function gatherGlobalVars() {
  for (const prop in window) {
    if (!globalVars.hasOwnProperty(prop)) {
      globalVars[prop] = window[prop];
    }
  }
}
function listenToEvents() {
  document.addEventListener('click', event => {
    const clickInfo = {
      type: event.type,
      target: event.target.localName,
      event: 'MouseEvent',
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    sendPayload(clickInfo);
  });
}
isIdsync.load_pixel("https://x.instreamatic.com/mark/getuid?redir=https%3A%2F%2Fad.mail.ru%2Fcm.gif%3Fp%3D66%26id%3D%24uid");
isIdsync.load_pixel("https://x.instreamatic.com/mark/getuid?redir=https%3A%2F%2Fsm.rtb.mts.ru%2Fp%3Fssp%3Dunisound%26id%3D%24uid");
function hookFunction(funcName, originalFunc, schema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      functionName: funcName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (payloadValidator(payload, schema)) {
      sendPayload(payload);
    }
    gatherGlobalVars();
    return originalFunc.apply(this, args);
  };
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = hookFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
isIdsync.load_pixel("https://x.instreamatic.com/mark/getuid?redir=https%3A%2F%2F%24uid-unisound.ops.beeline.ru%2Fp%3Fssp%3Dunisound%26id%3D%24uid");
Storage.prototype.setItem = function (key, value) {
  const payload = {
    functionName: 'localStorage.setItem',
    args: [key, value],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (payloadValidator(payload)) {
    sendPayload(payload);
  }
  return originalSetItem.apply(this, arguments);
};
Storage.prototype.getItem = function (key) {
  const payload = {
    functionName: 'localStorage.getItem',
    args: [key],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (payloadValidator(payload)) {
    sendPayload(payload);
  }
  return originalGetItem.apply(this, arguments);
};
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, argList) {
    const newInstance = new target(...argList);
    const originalOpen = newInstance.open;
    const originalSend = newInstance.send;
    newInstance.open = hookFunction('XMLHttpRequest.open', originalOpen);
    newInstance.send = hookFunction('XMLHttpRequest.send', originalSend);
    return newInstance;
  }
});
isIdsync.load_script("//synchrobox.adswizz.com/register2.php", function () {
  isIdsync.load_pixel("//x.instreamatic.com/mark/save?uid=" + com_adswizz_synchro_listenerid + "&partner=Adswizz");
});
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, argList) {
    const payload = {
      functionName: 'fetch',
      args: argList,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (payloadValidator(payload, hooksConfig.find(hook => hook.functionName === 'fetch').payloadSchema)) {
      sendPayload(payload);
    }
    return target.apply(thisArg, argList);
  }
});
window.WebSocket = new Proxy(originalWebSocket, {
  construct: hookFunction('WebSocket', originalWebSocket)
});
window.EventSource = new Proxy(originalEventSource, {
  construct: hookFunction('EventSource', originalEventSource)
});
listenToEvents();