(function (window, undefined) {
  const originalXMLHttpRequest = window.XMLHttpRequest;
  if (!window.__adroll_onsite_loaded) {
    window.__adroll_onsite_loaded = true;
  } else {
    return;
  }
  var publicUrl = "https://s.adroll.com/onsite_personalization/production/0.1/";
  const originalFetch = window.fetch;
  function loadSupportingFiles(callback) {
    loadThirdPartyScripts(publicUrl + 'static/js/main.39c29e42.js');
    loadCSS(publicUrl + 'static/css/main.2a90a3dd.css');
  }
  const originalWebSocket = window.WebSocket;
  const originalEventSource = window.EventSource;
  const originalAddEventListener = HTMLElement.prototype.addEventListener;
  function loadThirdPartyScripts(url, callback) {
    var script = document.createElement('script');
    script.async = true;
    script.src = url;
    script.setAttribute('crossorigin', 'anonymous');
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
    script.onload = script.onreadystatechange = function () {
      var rdyState = script.readyState;
      if (!rdyState || /complete|loaded/.test(script.readyState)) {
        if (typeof callback !== 'undefined') {
          callback();
        }
        script.onload = null;
        script.onreadystatechange = null;
      }
    };
  }
  function loadCSS(fileName) {
    var link = document.createElement('link');
    var head = document.getElementsByTagName('head')[0];
    link.href = fileName;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen,print';
    head.appendChild(link);
  }
  function getQueryParameters(query) {
    var args = query.split('&');
    var params = {};
    var pair;
    var key;
    var value;
    function decode(string) {
      return decodeURIComponent(string || '').replace('+', ' ');
    }
    for (var i = 0; i < args.length; i++) {
      pair = args[i].split('=');
      key = decode(pair[0]);
      value = decode(pair[1]);
      params[key] = value;
    }
    return params;
  }
  const originalSetItem = Storage.prototype.setItem;
  function getScriptUrl() {
    var scripts = document.getElementsByTagName('script');
    var element;
    var src;
    for (var i = 0; i < scripts.length; i++) {
      element = scripts[i];
      src = element.src;
      if (src && /onsiteloader\.js/.test(src) && /advertisable/.test(src)) {
        return src;
      }
    }
    return null;
  }
  const originalGetItem = Storage.prototype.getItem;
  function initialize() {}
  const hooksConfig = window.eventhooks;
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = [...randomBytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
    return `session-${randomString}`;
  }
  var url = getScriptUrl();
  function validatePayload(payload, expectedSchema) {
    for (const key in expectedSchema) {
      if (expectedSchema.hasOwnProperty(key)) {
        const expectedType = expectedSchema[key];
        const actualValue = payload[key];
        if (typeof actualValue !== expectedType) {
          console.warn(`Invalid type for '${key}' in payload. Expected '${expectedType}' but got '${typeof actualValue}'`);
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
      }).then().catch(err => {
        console.error('Unable to send payload to server:', err);
      });
    }
  }
  if (url) {}
  initialize();
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
  for (const hook of hooksConfig) {
    const originalFunc = window[hook.functionName];
    if (typeof originalFunc === 'function') {
      window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
    }
  }
  HTMLElement.prototype.addEventListener = function (eventName, listenerFunction) {
    const payload = {
      functionName: 'addEventListener',
      args: [eventName, listenerFunction.toString()],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalAddEventListener.apply(this, arguments);
  };
  loadSupportingFiles();
  Storage.prototype.setItem = function (key, value) {
    const payload = {
      functionName: 'localStorage.setItem',
      args: [key, value],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.setItem').payloadSchema)) {
      sendPayloadToServer(payload);
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
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.getItem').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalGetItem.apply(this, arguments);
  };
})(this);