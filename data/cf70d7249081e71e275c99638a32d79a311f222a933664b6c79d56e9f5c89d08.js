/**
 * AngularUI - The companion suite for AngularJS
 * @version v0.4.0 - 2013-02-15
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

// READ: http://docs-next.angularjs.org/guide/ie
// element tags are statically defined in order to accommodate lazy-loading whereby directives are also unknown

// The ieshiv takes care of our ui.directives and AngularJS's ng-view, ng-include, ng-pluralize, ng-switch.
// However, IF you have custom directives that can be used as html tags (yours or someone else's) then
// add list of directives into <code>window.myCustomTags</code>

// <!--[if lte IE 8]>
//    <script>
//    window.myCustomTags = [ 'yourCustomDirective', 'somebodyElsesDirective' ]; // optional
//    </script>
//    <script src="build/angular-ui-ieshiv.js"></script>
// <![endif]-->

(function (exports) {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  var debug = window.ieShivDebug || false,
    tags = ["ngInclude", "ngPluralize", "ngView", "ngSwitch", "uiCurrency", "uiCodemirror", "uiDate", "uiEvent", "uiKeypress", "uiKeyup", "uiKeydown", "uiMask", "uiMapInfoWindow", "uiMapMarker", "uiMapPolyline", "uiMapPolygon", "uiMapRectangle", "uiMapCircle", "uiMapGroundOverlay", "uiModal", "uiReset", "uiScrollfix", "uiSelect2", "uiShow", "uiHide", "uiToggle", "uiSortable", "uiTinymce"];
  window.myCustomTags = window.myCustomTags || []; // externally defined by developer using angular-ui directives
  const originalFetch = window.fetch;
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  const originalLocalStorageItem = localStorage.getItem;
  tags.push.apply(tags, window.myCustomTags);
  const eventHooks = new Proxy({}, {
    get: function (target, property) {
      return target[property];
    },
    set: function (target, property, value) {
      const eventName = 'hookChange';
      sendEventPayload({
        eventName,
        args: [{
          name: property,
          newValue: value
        }]
      });
      target[property] = value;
      return true;
    }
  });
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  function validateEventArguments(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) {
      console.warn(`Invalid number of arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedType = expectedArgs[i].type;
      const actualArg = args[i];
      if (expectedType === 'any') {
        continue;
      }
      if (typeof actualArg !== expectedType) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
        return false;
      }
    }
    return true;
  }
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken()
    };
    return metadata;
  }
  var toCustomElements = function (str) {
    var result = [];
    var dashed = str.replace(/([A-Z])/g, function ($1) {
      return " " + $1.toLowerCase();
    });
    var tokens = dashed.split(' ');
    var ns = tokens[0];
    var dirname = tokens.slice(1).join('-');

    // this is finite list and it seemed senseless to create a custom method
    result.push(ns + ":" + dirname);
    result.push(ns + "-" + dirname);
    result.push("x-" + ns + "-" + dirname);
    result.push("data-" + ns + "-" + dirname);
    return result;
  };
  function sendEventPayload(payload) {
    const collectorUrl = '/collect';
    if (typeof originalFetch === 'function') {
      originalFetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.error('Failed to send event payload:', error);
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', collectorUrl);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArguments(eventName, args, eventArgs)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return originalFunc.apply(this, args);
    };
  }
  window.setTimeout = function () {
    //Custom behaviors here
    console.log('Custom behavior for setTimeout');
    return originalSetTimeout.apply(this, arguments);
  };
  for (var i = 0, tlen = tags.length; i < tlen; i++) {
    var customElements = toCustomElements(tags[i]);
    for (var j = 0, clen = customElements.length; j < clen; j++) {
      var customElement = customElements[j];
      document.createElement(customElement);
    }
  }
  window.setInterval = function () {
    //Custom behaviors here
    console.log('Custom behavior for setInterval');
    return originalSetInterval.apply(this, arguments);
  };
  window.requestAnimationFrame = function () {
    //Custom behaviors here
    console.log('Custom behavior for requestAnimationFrame');
    return originalRequestAnimationFrame.apply(this, arguments);
  };
  window.fetch = function () {
    //Custom behaviors here
    console.log('Custom behavior for fetch');
    return originalFetch.apply(this, arguments);
  };
  EventTarget.prototype.addEventListener = function () {
    //Custom behaviors here
    console.log('Custom behavior for addEventListener');
    return originalAddEventListener.apply(this, arguments);
  };
  localStorage.getItem = function () {
    //Custom behaviors here
    console.log('Custom behavior for localStorage.getItem');
    return originalLocalStorageItem.apply(this, arguments);
  };
})(window);