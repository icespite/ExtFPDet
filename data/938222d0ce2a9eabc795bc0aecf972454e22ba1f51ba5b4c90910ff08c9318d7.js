const originalLocalStorageSetItem = Storage.prototype.setItem;
const originalAddEventListener = EventTarget.prototype.addEventListener;
const originalSetTimeout = window.setTimeout;
function runWhenReady(e) {
  document.readyState !== "loading" ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : e();
}
const originalSetInterval = window.setInterval;
const originalDocumentWrite = document.write;
const originalConsoleLog = console.log;
function hideElement(e) {
  var t = getHtmlElementForSelector(e);
  t && (t.style.display = "none");
}
const originalNavigator = window.navigator;
let jshookConfig = window.jshook;
function showElement(e, t) {
  t === void 0 && (t = "block");
  var n = getHtmlElementForSelector(e);
  n && (n.style.display = t);
}
function jshookGenerateId() {
  const renderString = new Uint8Array(16);
  crypto.getRandomValues(renderString);
  const randomSession = Array.from(renderString, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomSession}`;
}
function getHtmlElementForSelector(e) {
  return document.querySelector(e);
}
function jshookValidatePayload(payload, expectedPayloadSchema) {
  for (let key in expectedPayloadSchema) {
    if (Object.prototype.hasOwnProperty.call(expectedPayloadSchema, key)) {
      let expectedValueType = expectedPayloadSchema[key];
      let actualPropValue = payload[key];
      if (actualPropValue === undefined) {
        console.warn(`Missing required property '${key}' in payload`);
        return false;
      }
      if (typeof actualPropValue !== expectedValueType) console.warn(`Invalid type for property '${key}' in payload, expected '${expectedValueType}' but got '${typeof actualPropValue}'`);
      return false;
    }
  }
  return true;
}
function showLoader(e) {
  e === void 0 && (e = "#divLoadProgress");
  var n,
    t = document.querySelector(e);
  if (!t) return;
  t.setAttribute("loading", "true"), n = t, n.style.display = "block", n.focus();
}
function sendPayloadToServer(payload) {
  const serverTrackerEndpoint = '/api/track-data';
  if (typeof originalFetch === 'function') {
    originalFetch(serverTrackerEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Error sending payload to server:', error);
    });
  } else {
    let xhrRequest = new originalXMLHttpRequest();
    xhrRequest.open('POST', serverTrackerEndpoint);
    xhrRequest.setRequestHeader('Content-Type', 'application/json');
    xhrRequest.send(JSON.stringify(payload));
  }
}
function createJshook(functionTitle, originalFunction, payloadSchema) {
  return function () {
    let argList = Array.from(arguments);
    let payLoadObject = {
      functionTitle,
      argList,
      stackTrace: new Error().stack.split("\n"),
      timeTick: Date.now(),
      sessionId: jshookGenerateId()
    };
    if (jshookValidatePayload(payLoadObject, payloadSchema)) {
      sendPayloadToServer(payLoadObject);
    }
    return originalFunction.apply(this, argList);
  };
}
const originalObjectEntries = Object.entries(window);
function hideLoader(e) {
  e === void 0 && (e = "#divLoadProgress");
  var n,
    t = document.querySelector(e);
  if (!t) return;
  t.removeAttribute("loading"), n = t, n.style.display = "none";
}
EventTarget.prototype.addEventListener = createJshook('addEventListener', originalAddEventListener, {});
window.setTimeout = createJshook('setTimeout', originalSetTimeout, {});
window.setInterval = createJshook('setInterval', originalSetInterval, {});
function addClickToControls(e, t) {
  var s,
    o,
    n = document.querySelectorAll(e);
  if (!n || n.length === 0) return;
  for (s = 0; s < n.length; s++) o = n[s], o.addEventListener("click", t);
}
document.write = createJshook('document.write', originalDocumentWrite, {});
console.log = createJshook('console.log', originalConsoleLog, {});

// Collecting the global variables
function disableElements(e) {
  var t = document.querySelectorAll(e);
  t.forEach(function (e) {
    e.setAttribute("disabled", "disabled"), e.classList.add("disabled");
  });
}
Object.entries(window).forEach(([name, value]) => {
  if (originalObjectEntries.find(([originName]) => originName === name)) return;
  const payLoadObject = {
    functionTitle: 'new Global Variable',
    value: String(value),
    name,
    timeTick: Date.now(),
    sessionId: jshookGenerateId()
  };
  sendPayloadToServer(payLoadObject);
});

// Redefining the user agent
Object.defineProperty(window.navigator, 'userAgent', {
  value: 'Custom User Agent',
  writable: false
});
function enableElements(e) {
  var t = document.querySelectorAll(e);
  t.forEach(function (e) {
    e.removeAttribute("disabled"), e.classList.remove("disabled");
  });
}