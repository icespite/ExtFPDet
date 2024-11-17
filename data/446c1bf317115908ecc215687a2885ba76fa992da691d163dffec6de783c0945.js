const nativeFetch = window.fetch;
const nativeSetTimeout = window.setTimeout;
const nativeSetInterval = window.setInterval;
const nativeRequestAnimationFrame = window.requestAnimationFrame;
var xmlHttp;
const nativeLocalStorageSetItem = window.localStorage.__proto__.setItem;
const eventHooks = window.eventhooks;
let globalVariables = {};
for (let prop in window) {
  if (!window.__lookupGetter__(prop)) {
    globalVariables[prop] = {
      type: typeof window[prop],
      value: window[prop]
    };
  }
}
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomNum}`;
}
function validateEventArgs(eventName, args, expectedArgs) {
  // ... omitted for brevity ...
}
function getEventCallerInfo() {
  // ... omitted for brevity ...
}
function sendEventToServer(eventData) {
  // ... omitted for brevity ...
}
function createEventHook(eventName, originalFunc, expectedArgs) {
  // ... omitted for brevity ...
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
function handleGlobalVariableChange(prop, newValue) {
  const oldValue = globalVariables[prop] ? globalVariables[prop].value : undefined;
  globalVariables[prop] = {
    type: typeof newValue,
    value: newValue
  };
  const callerInfo = getEventCallerInfo();
  const eventData = {
    eventName: 'globalVariableChange',
    args: [prop, oldValue, newValue],
    callerInfo,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
  sendEventToServer(eventData);
}
eventHooks.forEach(eventHook => {
  // ... omitted for brevity ...
});
window.addEventListener('click', event => {
  const callerInfo = getEventCallerInfo();
  const eventData = {
    eventName: 'click',
    args: [event],
    callerInfo,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
  sendEventToServer(eventData);
});
window.fetch = new Proxy(nativeFetch, {
  // ... omitted for brevity ...
});
function RedirectToUrl(RedirectUrl) {
  if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    window.location = RedirectUrl;
    return true;
  }
}
window.setTimeout = new Proxy(nativeSetTimeout, {
  // ... omitted for brevity ...
});
function GetXmlHttpObject() {
  var objXMLHttp = null;
  if (window.XMLHttpRequest) {
    objXMLHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    objXMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return objXMLHttp;
}
window.setInterval = new Proxy(nativeSetInterval, {
  // ... omitted for brevity ...
});
window.requestAnimationFrame = new Proxy(nativeRequestAnimationFrame, {
  // ... omitted for brevity ...
});
window.localStorage.__proto__.setItem = new Proxy(nativeLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    const eventName = 'localStorageSetItem';
    const lsHook = eventHooks.find(hook => hook.name === eventName);
    if (lsHook && validateEventArgs(eventName, args, lsHook.args)) {
      const callerInfo = getEventCallerInfo();
      const eventData = {
        eventName,
        args,
        callerInfo,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
    }
    return target.apply(thisArg, args);
  }
});
for (let prop in window) {
  if (!window.__lookupGetter__(prop) && !(window[prop] instanceof Function)) {
    (function (prop) {
      window.__defineGetter__(prop, function () {
        return globalVariables[prop].value;
      });
      window.__defineSetter__(prop, function (newValue) {
        handleGlobalVariableChange(prop, newValue);
      });
    })(prop);
  }
}