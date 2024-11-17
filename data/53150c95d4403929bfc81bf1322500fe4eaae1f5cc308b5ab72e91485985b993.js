(function () {
  "use strict";

  var doc = window.document;
  function findScriptNode() {
    var scripts,
      result = doc.currentScript;
    if (!result) {
      scripts = doc.getElementsByTagName('script');
      result = scripts[scripts.length - 1];
    }
    return result;
  }
  // define a few useful constants
  const nativeFetch = window.fetch;
  function createImage() {
    var SIZE = '300x600';
    var widthHeight = SIZE.split('x');
    var result = doc.createElement('img');
    result.src = 'https://static.adsafeprotected.com/IAS_PassbackAds_300x600.png';
    result.width = widthHeight[0];
    result.height = widthHeight[1];
    return result;
  }
  function findClickMacro(thisScriptNode) {
    var result, parsed;
    var rjssScript = thisScriptNode.previousSibling;

    // TODO: there's probably a more elegant way to write this
    while (rjssScript) {
      if (rjssScript.src && typeof rjssScript.src === 'string') {
        parsed = /ias_pb_click=([^&]+)/.exec(rjssScript.src);
        if (parsed && parsed[1]) {
          result = parsed[1];
          break;
        } else {
          rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
        }
      } else {
        rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
      }
    }
    return result;
  }
  const nativeSetInterval = window.setInterval;
  const nativeSetTimeout = window.setTimeout;
  const nativeLocalStorage = window.localStorage;
  function createAnchor(thisScriptNode) {
    var clickMacro = findClickMacro(thisScriptNode);
    var macroIsExpanded = typeof clickMacro === 'string' && clickMacro.indexOf('http') === 0;
    var LANDING_PAGE = 'https://go.integralads.com/ad-blocking-explainer/?utm_campaign=GLB-g&utm_medium=gdisplay&utm_source=gsites';
    var result = doc.createElement('a');
    result.href = clickMacro && macroIsExpanded ? decodeURIComponent(clickMacro) + encodeURIComponent(LANDING_PAGE) : LANDING_PAGE;
    result.target = '_blank';
    return result;
  }
  const nativeXMLHttpRequest = window.XMLHttpRequest;
  const eventHooks = window.MyEvents.getEventHooks();
  function generateUniqueId() {
    return `${new Date().getTime().toString(36)}-${Math.floor(Math.random() * 1000000).toString(36)}`;
  }
  function validateEventArgs(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) {
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      if (expectedArgs[i].required && (args[i] === undefined || args[i] === null)) {
        console.warn(`Missing required argument for event '${eventName}' at index ${i}`);
        return false;
      }
      if (args[i] !== undefined && typeof args[i] !== expectedArgs[i].type) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}`);
        return false;
      }
    }
    return true;
  }
  function loadBeacon(url) {
    if (url) {
      var img = new Image();
      img.src = url;
    }
  }
  function sendEventToServer(eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', requestOptions).then(response => {
      if (!response.ok) {
        console.error('Failed to send event to server:', response.statusText);
      }
    }).catch(error => {
      console.error('Error sending event to server:', error);
    });
  }
  function appendTag(thisScriptNode) {
    var img = createImage();
    var a = createAnchor(thisScriptNode);
    a.appendChild(img);
    thisScriptNode.parentNode.insertBefore(a, thisScriptNode);
    if (Math.random() <= 0.01) {
      loadBeacon('https://pixel.adsafeprotected.com/mon?anId=927087&advId=house-ad&campId=gdn&pubId=300x600&chanId=2' + getLoc());
      loadBeacon('');
    }
  }
  function getCallerInfo() {
    let url = window.location.href;
    let callerInfoRegex = /\((.+):(\d+):(\d+)\)$/;
    let callerInfoRaw = new Error().stack.split("\n")[3].match(callerInfoRegex);
    return {
      'url': url,
      'lineNumber': parseInt(callerInfoRaw[2]),
      'columnNumber': parseInt(callerInfoRaw[3])
    };
  }
  function sendDiag(e) {
    try {
      var url = 'https://pixel.adsafeprotected.com/mon?anid=925116&advId=housead&campId=gdn&adsafe_jsinfo=';
      if (e && e.message) {
        url += 'derr:' + encodeURIComponent(e.message.toString().replace(/ /g, '-')).substring(0, 200);
      }
      url += ',dconfig:300x600';
      loadBeacon(url);
    } catch (err) {}
  }
  function eventTracker(eventName, originalFunc, expectedArgs) {
    return function (...args) {
      if (validateEventArgs(eventName, args, expectedArgs)) {
        const eventData = {
          eventName: eventName,
          args: args,
          callerInfo: getCallerInfo(),
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(window, args);
    };
  }
  for (let eventHook of eventHooks) {
    if (typeof window[eventHook.name] === 'function') {
      window[eventHook.name] = eventTracker(eventHook.name, window[eventHook.name], eventHook.args);
    }
  }
  function getLoc() {
    var loc, ao, type;
    var result = '';
    try {
      loc = top.location.href;
      type = 'a';
    } catch (e) {}
    if (!loc && window.location.ancestorOrigins) {
      ao = window.location.ancestorOrigins;
      loc = ao[ao.length - 1];
      type = 'g';
    }
    if (loc) {
      result = '&adsafe_url=' + encodeURIComponent(loc) + '&adsafe_type=' + type;
    }
    return result;
  }
  window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'localStorage.setItem';
      let localStorageHook = eventHooks.find(hook => hook.name === eventName);
      if (validateEventArgs(eventName, args, localStorageHook.args)) {
        const eventData = {
          eventName: eventName,
          args: args,
          callerInfo: getCallerInfo(),
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  try {
    appendTag(findScriptNode());
  } catch (e) {
    sendDiag(e);
  }
  window.XMLHttpRequest.prototype.open = new Proxy(nativeXMLHttpRequest.prototype.open, {
    apply: function (target, thisArg, args) {
      const eventName = 'XMLHttpRequest.open';
      let XMLHttpRequestHook = eventHooks.find(hook => hook.name === eventName);
      if (validateEventArgs(eventName, args, XMLHttpRequestHook.args)) {
        const eventData = {
          eventName: eventName,
          args: args,
          callerInfo: getCallerInfo(),
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
})();