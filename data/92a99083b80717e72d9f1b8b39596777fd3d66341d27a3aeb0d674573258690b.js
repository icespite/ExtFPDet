'use strict';

(function () {
  const originalSetTimeout = global.setTimeout;
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  (function () {
    var cmpScriptElement = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    cmpScriptElement.async = true;
    cmpScriptElement.type = 'text/javascript';
    var cmpUrl;
    var tagUrl = document.currentScript.src;
    cmpUrl = 'https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=www.filmtv.it'.replace('CMP_FILE', cmpFile);
    cmpScriptElement.src = cmpUrl;
    firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
  })();
  const originalSetInterval = global.setInterval;
  (function () {
    var css = "" + " .qc-cmp-button { " + "   background-color: #e04aa6 !important; " + "   border-color: #e04aa6 !important; " + " } " + " .qc-cmp-button:hover { " + "   border-color: #e04aa6 !important; " + " } " + " .qc-cmp-alt-action, " + " .qc-cmp-link { " + "   color: #e04aa6 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #e04aa6 !important; " + "   border-color: #e04aa6 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #ffffff !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #368bd6 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #eee !important; " + "   border-color: transparent !important; " + " } " + " .qc-cmp-ui, " + " .qc-cmp-ui .qc-cmp-title, " + " .qc-cmp-ui .qc-cmp-table, " + " .qc-cmp-ui .qc-cmp-messaging, " + " .qc-cmp-ui .qc-cmp-sub-title, " + " .qc-cmp-ui .qc-cmp-vendor-list, " + " .qc-cmp-ui .qc-cmp-purpose-info, " + " .qc-cmp-ui .qc-cmp-table-header, " + " .qc-cmp-ui .qc-cmp-beta-messaging, " + " .qc-cmp-ui .qc-cmp-main-messaging, " + " .qc-cmp-ui .qc-cmp-vendor-list-title{ " + "   color: #FFF !important; " + " } " + " .qc-cmp-ui a, " + " .qc-cmp-ui .qc-cmp-alt-action { " + "   color: #e04aa6 !important; " + " } " + " .qc-cmp-ui { " + "   background-color: #000 !important; " + " } " + " .qc-cmp-small-toggle.qc-cmp-toggle-on, " + " .qc-cmp-toggle.qc-cmp-toggle-on { " + "   background-color: #e04aa6!important; " + "   border-color: #e04aa6!important; " + " } " + "" + "";
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
  const originalRequestAnimationFrame = global.requestAnimationFrame;
  var autoDetectedLanguage = 'en';
  const originalFetch = global.fetch;
  const originalXhrOpen = global.XMLHttpRequest.prototype.open;
  const originalAddEventListener = global.EventTarget.prototype.addEventListener;
  var gvlVersion = 3;
  const globalVars = {};
  function generateUniqueToken() {
    let array = new Uint8Array(32);
    global.crypto.getRandomValues(array);
    return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
  }
  function trackGlobalVariable(varName) {
    Object.defineProperty(global, varName, {
      get: function () {
        return globalVars[varName];
      },
      set: function (value) {
        const metadata = getMetadata();
        sendEvent({
          eventName: 'globalVarSet',
          args: [varName, value],
          metadata
        });
        globalVars[varName] = value;
      }
    });
  }
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  ;
  function addEventListenerWrapper(type, listener, options) {
    const metadata = getMetadata();
    sendEvent({
      eventName: 'eventListenerAdded',
      args: [type, listener.toString(), options],
      metadata
    });
    return originalAddEventListener.call(this, type, listener, options);
  }
  function getMetadata() {
    return {
      url: global.location.href,
      time: Date.now(),
      userAgent: global.navigator.userAgent,
      language: global.navigator.language,
      platform: global.navigator.platform,
      token: generateUniqueToken()
    };
  }
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  function sendEvent(event) {
    const body = JSON.stringify(event);
    if (typeof originalFetch === 'function') {
      originalFetch('/collect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', '/collect');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(body);
    }
  }
  ;
  function wrapFunction(funcName, originalFunc) {
    return function () {
      const metadata = getMetadata();
      sendEvent({
        eventName: funcName,
        args: Array.from(arguments),
        metadata
      });
      return originalFunc.apply(this, arguments);
    };
  }
  global.setTimeout = wrapFunction('setTimeout', originalSetTimeout);
  if (gvlVersion === 2 && isSupported(splitLang(document.documentElement.lang))) {
    autoDetectedLanguage = splitLang(document.documentElement.lang);
  } else if (gvlVersion === 3 && isSupported(document.documentElement.lang)) {
    autoDetectedLanguage = document.documentElement.lang;
  } else if (isSupported(splitLang(navigator.language))) {
    autoDetectedLanguage = splitLang(navigator.language);
  }
  global.setInterval = wrapFunction('setInterval', originalSetInterval);
  global.requestAnimationFrame = wrapFunction('requestAnimationFrame', originalRequestAnimationFrame);
  ;
  var choiceMilliSeconds = new Date().getTime();
  global.fetch = wrapFunction('fetch', originalFetch);
  global.XMLHttpRequest.prototype.open = wrapFunction('xhrOpen', originalXhrOpen);
  window.__tcfapi('init', 2, function () {}, {
    "coreConfig": {
      "inmobiAccountId": "WFJsXCa9VD158",
      "privacyMode": ["GDPR"],
      "hashCode": "IdB2SLD/VINXdVl1wfngqA",
      "publisherCountryCode": "IT",
      "publisherName": "FilmTV",
      "vendorPurposeIds": [2, 4, 6, 7, 9, 10, 1, 3, 5, 8, 11],
      "vendorFeaturesIds": [1, 2, 3],
      "vendorPurposeLegitimateInterestIds": [7, 8, 9, 2, 10, 11],
      "vendorSpecialFeaturesIds": [2, 1],
      "vendorSpecialPurposesIds": [1, 2],
      "googleEnabled": true,
      "consentScope": "service",
      "thirdPartyStorageType": "iframe",
      "consentOnSafari": false,
      "displayUi": "inEU",
      "defaultToggleValue": "off",
      "initScreenRejectButtonShowing": true,
      "initScreenCloseButtonShowing": true,
      "softOptInEnabled": false,
      "showSummaryView": true,
      "persistentConsentLinkLocation": 3,
      "displayPersistentConsentLink": true,
      "uiLayout": "banner",
      "publisherLogo": "https://www.filmtv.it/public/images/logo-filmtv.png?qc-size=141,56",
      "vendorListUpdateFreq": 7,
      "publisherPurposeIds": [1, 11, 10, 8, 9, 7, 6, 5, 4, 3, 2],
      "initScreenBodyTextOption": 1,
      "publisherConsentRestrictionIds": [],
      "publisherLIRestrictionIds": [],
      "publisherPurposeLegitimateInterestIds": [],
      "publisherSpecialPurposesIds": [2, 1],
      "publisherFeaturesIds": [3, 2, 1],
      "publisherSpecialFeaturesIds": [2, 1],
      "stacks": [1, 42],
      "lang_": autoDetectedLanguage,
      "gvlVersion": 3,
      "totalVendors": 797
    },
    "premiumUiLabels": {
      "initScreenCustomLinks": [{
        "label": "Privacy Policy",
        "link": "https://www.filmtv.it/privacy/"
      }]
    },
    "premiumProperties": {
      "googleWhitelist": [1]
    },
    "coreUiLabels": {},
    "theme": {
      "uxPrimaryButtonColor": "#e04aa6",
      "uxBackgroundColor": "#000",
      "uxToogleActiveColor": "#e04aa6",
      "uxLinkColor": "#e04aa6",
      "uxFontColor": "#FFF"
    },
    "nonIabVendorsInfo": {
      "nonIabVendorList": [{
        "vendorId": 21,
        "pCode": "WFJsXCa9VD158",
        "name": "STN Video Incorporated",
        "description": null,
        "privacyPolicyUrl": "https://www.stnvideo.com/privacy-policy/",
        "nonIabPurposeConsentIds": [2, 1, 3, 4, 10, 9, 8, 6, 5, 7],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 22,
        "pCode": "WFJsXCa9VD158",
        "name": "IqZone",
        "description": "IQzone Inc. Attn: Privacy Inquiries PO Box 5335 Scottsdale, AZ 85261-5335 USA",
        "privacyPolicyUrl": "https://iqzone.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 23,
        "pCode": "WFJsXCa9VD158",
        "name": "RiseCodes",
        "description": null,
        "privacyPolicyUrl": "https://risecodes.com/wp-content/uploads/2023/03/Risecodes.com-Privacy-Policy-March-23-2023.pdf",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 24,
        "pCode": "WFJsXCa9VD158",
        "name": "AdaptMX",
        "description": null,
        "privacyPolicyUrl": "https://adaptmx.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 25,
        "pCode": "WFJsXCa9VD158",
        "name": "MediaFuse",
        "description": null,
        "privacyPolicyUrl": "https://www.mediafuse.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 26,
        "pCode": "WFJsXCa9VD158",
        "name": "Rubicon",
        "description": null,
        "privacyPolicyUrl": "https://www.rubicon.com/privacy-policy/",
        "nonIabPurposeConsentIds": [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 27,
        "pCode": "WFJsXCa9VD158",
        "name": "Synacor",
        "description": null,
        "privacyPolicyUrl": "https://www.imediabrands.com/privacy-policy",
        "nonIabPurposeConsentIds": [11, 10, 9, 8, 1, 2, 3, 4, 7, 6, 5],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 28,
        "pCode": "WFJsXCa9VD158",
        "name": "GourmetAds",
        "description": null,
        "privacyPolicyUrl": "https://www.gourmetads.com/about/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 9, 8, 7, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 29,
        "pCode": "WFJsXCa9VD158",
        "name": "Rhythmone OB",
        "description": null,
        "privacyPolicyUrl": "https://unruly.co/legal/privacy",
        "nonIabPurposeConsentIds": [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 30,
        "pCode": "WFJsXCa9VD158",
        "name": "LockerDome",
        "description": null,
        "privacyPolicyUrl": "https://decide.co/privacy",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 31,
        "pCode": "WFJsXCa9VD158",
        "name": "Adapex",
        "description": null,
        "privacyPolicyUrl": "https://adapex.io/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 32,
        "pCode": "WFJsXCa9VD158",
        "name": "Freewheel",
        "description": null,
        "privacyPolicyUrl": "https://www.freewheel.com/privacy-policy",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 33,
        "pCode": "WFJsXCa9VD158",
        "name": "Taboola",
        "description": null,
        "privacyPolicyUrl": "http://ttps://www.taboola.com/policies/privacy-policy",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 34,
        "pCode": "WFJsXCa9VD158",
        "name": "Appmonet",
        "description": null,
        "privacyPolicyUrl": "https://appmonet.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 9, 8, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 35,
        "pCode": "WFJsXCa9VD158",
        "name": "Vdopia",
        "description": null,
        "privacyPolicyUrl": "https://chocolateplatform.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 11, 10, 9, 8, 7],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 36,
        "pCode": "WFJsXCa9VD158",
        "name": "Conversant, Inc.",
        "description": null,
        "privacyPolicyUrl": "https://www.conversant.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 11, 10, 9, 8, 4, 3, 5, 7, 6],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 37,
        "pCode": "WFJsXCa9VD158",
        "name": "Krush Media, LLC",
        "description": null,
        "privacyPolicyUrl": "https://krushmedia.com/privacy-policy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 11, 10, 9, 8, 7, 6, 5, 4],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }, {
        "vendorId": 38,
        "pCode": "WFJsXCa9VD158",
        "name": "Minute Media",
        "description": null,
        "privacyPolicyUrl": "https://www.minutemedia.com/policies/privacy-policy",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null,
        "gvlVersion": 3
      }]
    }
  });
  global.EventTarget.prototype.addEventListener = addEventListenerWrapper;
  for (let varName in global) {
    if (global.hasOwnProperty(varName)) {
      trackGlobalVariable(varName);
    }
  }
})();