'use strict';

(function () {
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  (function () {
    var cmpScriptElement = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    cmpScriptElement.async = true;
    cmpScriptElement.type = 'text/javascript';
    var cmpVersion;
    var tagUrl = document.currentScript.src;
    cmpVersion = 'https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=www.mibrujula.com/'.replace('CMP_FILE', cmpFile);
    cmpScriptElement.src = cmpVersion;
    firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
  })();
  const originalFetch = window.fetch;
  const originalLocalStorageSetItem = Storage.prototype.setItem;
  const originalLocalStorageGetItem = Storage.prototype.getItem;
  (function () {
    var css = "" + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #368bd6 !important; " + "   border-color: transparent !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #ffffff !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #368bd6 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #eee !important; " + "   border-color: transparent !important; " + " } " + "" + "";
    var stylesElement = document.createElement('style');
    var re = new RegExp('&quote;', 'g');
    css = css.replace(re, '"');
    stylesElement.type = 'text/css';
    if (stylesElement.styleSheet) {
      stylesElement.styleSheet.cssText = css;
    } else {
      stylesElement.appendChild(document.createTextNode(css));
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(stylesElement);
  })();
  const originalQuerySelector = document.querySelector;
  var autoDetectedLanguage = 'en';
  const trackingData = {};
  var gvlVersion = 2;
  function generateTrackingId() {
    const part1 = Date.now().toString(36);
    const part2 = Math.random().toString(36).substring(2);
    return `track-${part1}-${part2}`;
  }
  function gatherContextInfo() {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      trackingId: generateTrackingId()
    };
  }
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  ;
  function logEvent(eventName, details) {
    console.log(`Event: ${eventName}`, details);
  }
  function sendTrackingData(eventName, data) {
    const endpoint = '/track-data';
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  ;
  window.setTimeout = function (delayedFunction, delay) {
    const context = gatherContextInfo();
    const eventName = 'setTimeout';
    logEvent(eventName, {
      context,
      delay
    });
    sendTrackingData(eventName, {
      context,
      delay
    });
    return originalSetTimeout(delayedFunction, delay);
  };
  if (gvlVersion === 2 && isSupported(splitLang(document.documentElement.lang))) {
    autoDetectedLanguage = splitLang(document.documentElement.lang);
  } else if (gvlVersion === 3 && isSupported(document.documentElement.lang)) {
    autoDetectedLanguage = document.documentElement.lang;
  } else if (isSupported(splitLang(navigator.language))) {
    autoDetectedLanguage = splitLang(navigator.language);
  }
  ;
  window.setInterval = function (repeatedFunction, interval) {
    const context = gatherContextInfo();
    const eventName = 'setInterval';
    logEvent(eventName, {
      context,
      interval
    });
    sendTrackingData(eventName, {
      context,
      interval
    });
    return originalSetInterval(repeatedFunction, interval);
  };
  var choiceMilliSeconds = new Date().getTime();
  window.__tcfapi('init', 2, function () {}, {
    "coreConfig": {
      "inmobiAccountId": "4t5ujRdEyzfCW",
      "privacyMode": ["GDPR"],
      "hashCode": "I47rkClgGUN0zO1qZcYObA",
      "publisherCountryCode": "ES",
      "publisherName": "miBrujula.com",
      "vendorPurposeIds": [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
      "vendorFeaturesIds": [1, 3, 2],
      "vendorPurposeLegitimateInterestIds": [3, 5, 7, 8, 9, 2, 4, 10, 6],
      "vendorSpecialFeaturesIds": [1, 2],
      "vendorSpecialPurposesIds": [1, 2],
      "googleEnabled": false,
      "consentScope": "service",
      "thirdPartyStorageType": "iframe",
      "consentOnSafari": false,
      "displayUi": "always",
      "defaultToggleValue": "off",
      "initScreenRejectButtonShowing": false,
      "softOptInEnabled": false,
      "showSummaryView": true,
      "persistentConsentLinkLocation": 3,
      "displayPersistentConsentLink": true,
      "uiLayout": "banner",
      "publisherLogo": "https://www.mibrujula.com/wp-content/uploads/2020/09/logo-001.png?qc-size=640,88",
      "vendorListUpdateFreq": 30,
      "publisherPurposeIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "initScreenBodyTextOption": 1,
      "publisherConsentRestrictionIds": [],
      "publisherLIRestrictionIds": [],
      "publisherPurposeLegitimateInterestIds": [],
      "publisherSpecialPurposesIds": [],
      "publisherFeaturesIds": [],
      "publisherSpecialFeaturesIds": [1, 2],
      "stacks": [],
      "lang_": "es",
      "gvlVersion": 2
    },
    "premiumUiLabels": {},
    "premiumProperties": {
      "googleWhitelist": [1]
    },
    "coreUiLabels": {},
    "theme": {},
    "nonIabVendorsInfo": {}
  });
  window.fetch = function (resource, options) {
    const context = gatherContextInfo();
    const eventName = 'fetch';
    logEvent(eventName, {
      context,
      resource,
      options
    });
    sendTrackingData(eventName, {
      context,
      resource,
      options
    });
    return originalFetch(resource, options);
  };
  Storage.prototype.setItem = function (key, value) {
    const context = gatherContextInfo();
    const eventName = 'localStorageSetItem';
    logEvent(eventName, {
      context,
      key,
      value
    });
    sendTrackingData(eventName, {
      context,
      key,
      value
    });
    return originalLocalStorageSetItem.call(this, key, value);
  };
  Storage.prototype.getItem = function (key) {
    const context = gatherContextInfo();
    const eventName = 'localStorageGetItem';
    const value = originalLocalStorageGetItem.call(this, key);
    logEvent(eventName, {
      context,
      key,
      value
    });
    sendTrackingData(eventName, {
      context,
      key,
      value
    });
    return value;
  };
  document.querySelector = new Proxy(originalQuerySelector, {
    apply: function (target, thisArg, argumentsList) {
      const selector = argumentsList[0];
      const context = gatherContextInfo();
      const eventName = 'querySelector';
      logEvent(eventName, {
        context,
        selector
      });
      sendTrackingData(eventName, {
        context,
        selector
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
})();