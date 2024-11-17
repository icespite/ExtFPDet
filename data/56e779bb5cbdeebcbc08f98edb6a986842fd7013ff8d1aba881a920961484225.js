// Save originals
const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
try {
  var dv_win = window._dv_win || window.parent._dv_win;
  dv_win['dvCallback_1692539179096855']($dv, window, 'd8ae4db1f6d442d39489d6f1fbf86b2b', 'tpsc-ae1.doubleverify.com');
} catch (e) {
  try {
    var image = window.document.createElement('img');
    image.src = ('https://tps.doubleverify.com/visit.jpg' || window.location.protocol + '//tps30.doubleverify.com/visit.jpg') + '?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError=' + encodeURIComponent(e.message);
  } catch (e) {}
}
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorage = window.localStorage;
$dv.CommonData.deviceType = 1;
const originalEventListeners = {};
['click', 'keydown', 'load', 'mousemove', 'resize'].forEach(evt => originalEventListeners[evt] = document[`on${evt}`]);

// Unique id generator
$dv.CommonData.detectedDeliveryType = 1;
function generateUniqueToken() {
  return Array.from(window.crypto.getRandomValues(new Uint8Array(16)), t => t.toString(16).padStart(2, '0')).join('');
}

// return jshook
function jshook(data) {
  let hook = {};
  for (let key in data) {
    let internalValue = data[key];
    Object.defineProperty(hook, key, {
      get: function () {
        return internalValue;
      },
      set: function (newValue) {
        console.log('set: ' + key + ' changed from ' + internalValue + ' to ' + newValue);
        internalValue = newValue;
      }
    });
  }
  return hook;
}

// Validate arguments
$dv.tags[$uid].deviceType = 1;
$dv.tags[$uid].detectedDeliveryType = 1;
function validateEventArguments(name, args) {
  let expectedArgs = {
    "setInterval": ["function", "number"],
    "setTimeout": ["function", "number"],
    "requestAnimationFrame": ["function"],
    "fetch": ["string"],
    "click": [],
    "keydown": [],
    "load": [],
    "mousemove": [],
    "resize": []
  }[name];
  return expectedArgs.length == args.length && expectedArgs.every((exp, i) => exp == typeof args[i] || exp == 'any');
}

// Fetch metadata
function getEventMetadata() {
  return {
    token: generateUniqueToken(),
    URL: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    localStorage: JSON.parse(JSON.stringify(localStorage))
  };
}

// Sending Payload 
function sendEventPayload(payload) {
  originalFetch?.('/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }) || new XMLHttpRequest().open('POST', '/collect').send(JSON.stringify(payload));
}

// Create hook
function createEventWrapper(name, originalFunc) {
  return function (...args) {
    if (validateEventArguments(name, args)) {
      const payload = {
        eventName: name,
        args,
        metadata: getEventMetadata()
      };
      sendEventPayload(payload);
    }
    return originalFunc?.apply(this, args);
  };
}

// Setting up hooks
try {
  $dv.pubSub.publish('ImpressionServed', $uid);
  $dv.pubSub.publish('ImpressionServed', $frmId);
} catch (e) {}
['setTimeout', 'setInterval', 'requestAnimationFrame', 'fetch'].forEach(name => window[name] = new Proxy(window[`original${name[0].toUpperCase() + name.slice(1)}`], {
  apply: function (target, thisArg, args) {
    return createEventWrapper(name, target).apply(thisArg, args);
  }
}));
Object.keys(originalEventListeners).forEach(name => {
  document[`on${name}`] = createEventWrapper(name, originalEventListeners[name]);
});
window.localStorage = jshook(localStorage);