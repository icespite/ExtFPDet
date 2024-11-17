const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
;
const originalEventSource = window.EventSource;
const originalLocalStorage = window.localStorage;
window.CloudflareApps = window.CloudflareApps || {};
const originalAddEventListener = EventTarget.prototype.addEventListener;
CloudflareApps.siteId = "25478e3d4bb4d139a03ce2fe5e6c0332";
CloudflareApps.installs = CloudflareApps.installs || {};
const hooksConfig = window.eventhooks;
;
(function () {
  'use strict';

  CloudflareApps.internal = CloudflareApps.internal || {};
  var errors = [];
  CloudflareApps.internal.placementErrors = errors;
  var errorHashes = {};
  function noteError(options) {
    var hash = options.selector + '::' + options.type + '::' + (options.installId || '');
    if (errorHashes[hash]) {
      return;
    }
    errorHashes[hash] = true;
    errors.push(options);
  }
  var initializedSelectors = {};
  var currentInit = false;
  CloudflareApps.internal.markSelectors = function markSelectors() {
    if (!currentInit) {
      check();
      currentInit = true;
      setTimeout(function () {
        currentInit = false;
      });
    }
  };
  function check() {
    var installs = window.CloudflareApps.installs;
    for (var installId in installs) {
      if (!installs.hasOwnProperty(installId)) {
        continue;
      }
      var selectors = installs[installId].selectors;
      if (!selectors) {
        continue;
      }
      for (var key in selectors) {
        if (!selectors.hasOwnProperty(key)) {
          continue;
        }
        var hash = installId + '::' + key;
        if (initializedSelectors[hash]) {
          continue;
        }
        var els = document.querySelectorAll(selectors[key]);
        if (els && els.length > 1) {
          noteError({
            type: 'init:too-many',
            option: key,
            selector: selectors[key],
            installId: installId
          });
          initializedSelectors[hash] = true;
          continue;
        } else if (!els || !els.length) {
          continue;
        }
        initializedSelectors[hash] = true;
        els[0].setAttribute('cfapps-selector', selectors[key]);
      }
    }
  }
  CloudflareApps.querySelector = function querySelector(selector) {
    if (selector === 'body' || selector === 'head') {
      return document[selector];
    }
    CloudflareApps.internal.markSelectors();
    var els = document.querySelectorAll('[cfapps-selector="' + selector + '"]');
    if (!els || !els.length) {
      noteError({
        type: 'select:not-found:by-attribute',
        selector: selector
      });
      els = document.querySelectorAll(selector);
      if (!els || !els.length) {
        noteError({
          type: 'select:not-found:by-query',
          selector: selector
        });
        return null;
      } else if (els.length > 1) {
        noteError({
          type: 'select:too-many:by-query',
          selector: selector
        });
      }
      return els[0];
    }
    if (els.length > 1) {
      noteError({
        type: 'select:too-many:by-attribute',
        selector: selector
      });
    }
    return els[0];
  };
})();
const sessionId = (() => {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return `session-${Array.from(randomBytes, b => ('00' + b.toString(16)).slice(-2)).join('')}`;
})();
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    if (!expectedSchema.hasOwnProperty(key)) continue;
    if (payload[key] === undefined || typeof payload[key] !== expectedSchema[key]) return false;
  }
  return true;
}
function getStackTrace() {
  return new Error().stack;
}
(function () {
  'use strict';

  var prevEls = {};
  CloudflareApps.createElement = function createElement(options, prevEl) {
    options = options || {};
    CloudflareApps.internal.markSelectors();
    try {
      if (prevEl && prevEl.parentNode) {
        var replacedEl;
        if (prevEl.cfAppsElementId) {
          replacedEl = prevEls[prevEl.cfAppsElementId];
        }
        if (replacedEl) {
          prevEl.parentNode.replaceChild(replacedEl, prevEl);
          delete prevEls[prevEl.cfAppsElementId];
        } else {
          prevEl.parentNode.removeChild(prevEl);
        }
      }
      var element = document.createElement('cloudflare-app');
      var container;
      if (options.pages && options.pages.URLPatterns && !CloudflareApps.matchPage(options.pages.URLPatterns)) {
        return element;
      }
      try {
        container = CloudflareApps.querySelector(options.selector);
      } catch (e) {}
      if (!container) {
        return element;
      }
      if (!container.parentNode && (options.method === 'after' || options.method === 'before' || options.method === 'replace')) {
        return element;
      }
      if (container === document.body) {
        if (options.method === 'after') {
          options.method = 'append';
        } else if (options.method === 'before') {
          options.method = 'prepend';
        }
      }
      switch (options.method) {
        case 'prepend':
          if (container.firstChild) {
            container.insertBefore(element, container.firstChild);
            break;
          }
        case 'append':
          container.appendChild(element);
          break;
        case 'after':
          if (container.nextSibling) {
            container.parentNode.insertBefore(element, container.nextSibling);
          } else {
            container.parentNode.appendChild(element);
          }
          break;
        case 'before':
          container.parentNode.insertBefore(element, container);
          break;
        case 'replace':
          try {
            var id = element.cfAppsElementId = Math.random().toString(36);
            prevEls[id] = container;
          } catch (e) {}
          container.parentNode.replaceChild(element, container);
      }
      return element;
    } catch (e) {
      if (typeof console !== 'undefined' && typeof console.error !== 'undefined') {
        console.error('Error creating Cloudflare Apps element', e);
      }
    }
  };
})();
(function () {
  'use strict';

  CloudflareApps.matchPage = function matchPage(patterns) {
    if (!patterns || !patterns.length) {
      return true;
    }
    var loc = document.location.host + document.location.pathname;
    if (window.CloudflareApps && CloudflareApps.proxy && CloudflareApps.proxy.originalURL) {
      var url = CloudflareApps.proxy.originalURL.parsed;
      loc = url.host + url.path;
    }
    for (var i = 0; i < patterns.length; i++) {
      var re = new RegExp(patterns[i], 'i');
      if (re.test(loc)) {
        return true;
      }
    }
    return false;
  };
})();
CloudflareApps.installs["3Yp6JYc8zzEh"] = {
  appId: "nGAnsTeiPCQx",
  scope: {}
};
function sendPayloadToServer(payload) {
  if (typeof originalFetch === 'function') {
    return originalFetch('/api/collect-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(console.error);
  }
  const request = new originalXMLHttpRequest();
  request.open('POST', '/api/collect-data');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(payload));
}
;
function makeTrackedFunction(name, originalFn, schema) {
  return function () {
    const args = Array.from(arguments);
    const stack = getStackTrace();
    const payload = {
      functionName: name,
      args,
      stack,
      timestamp: Date.now(),
      sessionId
    };
    if (validatePayload(payload, schema)) {
      sendPayloadToServer(payload);
    }
    return originalFn.apply(this, args);
  };
}
CloudflareApps.installs["3Yp6JYc8zzEh"].options = {
  "subdomain_tracker_ids": [{
    "subdomain": "",
    "tracker_id": ""
  }],
  "tracker_id": "UA-31218846-1"
};
hooksConfig.forEach(hook => {
  if (typeof window[hook.functionName] === 'function') {
    window[hook.functionName] = makeTrackedFunction(hook.functionName, window[hook.functionName], hook.payloadSchema);
  }
});
const makeTrackedMethod = (instance, methodName, method) => function () {
  const payload = {
    functionName: methodName,
    args: Array.from(arguments),
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === methodName).payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return method.apply(instance, arguments);
};
window.XMLHttpRequest = class extends originalXMLHttpRequest {
  open() {
    super.open = makeTrackedMethod(this, 'XMLHttpRequest.open', super.open);
    super.open.apply(this, arguments);
  }
  send() {
    super.send = makeTrackedMethod(this, 'XMLHttpRequest.send', super.send);
    super.send.apply(this, arguments);
  }
};
;
window.fetch = new Proxy(originalFetch, {
  apply: (target, thisArg, argsList) => {
    if (validatePayload(payload, filterHook('fetch'))) {
      sendPayloadToServer(payload);
    }
    return Reflect.apply(target, thisArg, argsList);
  }
});
window.WebSocket = new Proxy(originalWebSocket, {
  construct: (target, argsList, newTarget) => {
    if (validatePayload(payload, filterHook('WebSocket'))) {
      sendPayloadToServer(payload);
    }
    return Reflect.construct(target, argsList, newTarget);
  }
});
CloudflareApps.installs["3Yp6JYc8zzEh"].URLPatterns = ["^alwan.elwatannews.com/?.*$", "^elwatannews.com/?.*$", "^honna.elwatannews.com/?.*$", "^m.elwatannews.com/?.*$", "^natega.elwatannews.com/?.*$", "^sport.elwatannews.com/?.*$", "^www.elwatannews.com/?.*$"];
window.EventSource = new Proxy(originalEventSource, {
  construct: (target, argsList, newTarget) => {
    if (validatePayload(payload, filterHook('EventSource'))) {
      sendPayloadToServer(payload);
    }
    return Reflect.construct(target, argsList, newTarget);
  }
});
;
CloudflareApps.installs["3Yp6JYc8zzEh"].product = {
  "id": "google-analytics-free"
};
window.localStorage = new Proxy(originalLocalStorage, {
  set: (target, key, value) => {
    const payload = {
      functionName: 'localStorage.set',
      args: [key, value],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.set').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return Reflect.set(target, key, value);
  }
});
(function () {
  var script = document.createElement('script');
  script.src = '/cdn-cgi/apps/body/n9zAy5UUpKzEautVq7x0CceWh_U.js';
  document.head.appendChild(script);
})();
EventTarget.prototype.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, argsList) {
    const payload = {
      functionName: 'addEventListener',
      args: argsList,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return Reflect.apply(target, thisArg, argsList);
  }
});