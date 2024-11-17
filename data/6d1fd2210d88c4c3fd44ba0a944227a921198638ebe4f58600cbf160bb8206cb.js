'use strict';

(function () {
  let trackingId = 0;
  const originalLocal = localStorage.setItem;
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  (function () {
    var cmpScriptElement = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    cmpScriptElement.async = true;
    cmpScriptElement.type = 'text/javascript';
    var cmpVersion;
    var tagUrl = document.currentScript.src;
    cmpVersion = 'https://cmp.quantcast.com/tcfv2/CMP_FILE?referer=nosalty.hu'.replace('CMP_FILE', cmpFile);
    cmpScriptElement.src = cmpVersion;
    window._qevents = window._qevents || [];
    (function () {
      var elem = document.createElement('script');
      elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
      elem.async = true;
      elem.type = "text/javascript";
      var scpt = document.getElementsByTagName('script')[0];
      scpt.parentNode.insertBefore(elem, scpt);
    })();
    var qcaccount = 'p-' + 'ZWemmHq85Y1fR';
    window._qevents.push({
      qacct: qcaccount,
      source: "choice"
    });
    firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
  })();
  const originalXMLHttpRequest = window.XMLHttpRequest;
  const originalFetch = window.fetch;
  const originalWebSocket = window.WebSocket;
  (function () {
    var css = "" + " .qc-cmp-button { " + "   background-color: #0e9839 !important; " + "   border-color: #0e9839 !important; " + " } " + " .qc-cmp-button:hover { " + "   border-color: #0e9839 !important; " + " } " + " .qc-cmp-alt-action, " + " .qc-cmp-link { " + "   color: #0e9839 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #0e9839 !important; " + "   border-color: #0e9839 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #ffffff !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #3b3b3b !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #c2c2ca !important; " + "   border-color: transparent !important; " + " } " + " .qc-cmp-ui, " + " .qc-cmp-ui .qc-cmp-title, " + " .qc-cmp-ui .qc-cmp-table, " + " .qc-cmp-ui .qc-cmp-messaging, " + " .qc-cmp-ui .qc-cmp-sub-title, " + " .qc-cmp-ui .qc-cmp-vendor-list, " + " .qc-cmp-ui .qc-cmp-purpose-info, " + " .qc-cmp-ui .qc-cmp-table-header, " + " .qc-cmp-ui .qc-cmp-beta-messaging, " + " .qc-cmp-ui .qc-cmp-main-messaging, " + " .qc-cmp-ui .qc-cmp-vendor-list-title{ " + "   color: #fbfbfb !important; " + " } " + " .qc-cmp-ui a, " + " .qc-cmp-ui .qc-cmp-alt-action { " + "   color: #c2c2ca !important; " + " } " + " .qc-cmp-ui { " + "   background-color: #191922 !important; " + " } " + "#qc-cmp2-ui{opacity:.9}#qc-cmp2-ui p{font-size:12px}#qc-cmp2-ui .qc-cmp2-footer{max-height:110px;background-color:transparent}#qc-cmp2-ui .qc-cmp2-footer::before{display:none}#qc-cmp2-ui .qc-cmp2-summary-buttons{padding-top:15px}#qc-cmp2-ui button[mode=primary],#qc-cmp2-ui button[mode=secondary]{max-width:320px}#qc-cmp2-ui .qc-cmp2-summary-buttons button[mode=primary],#qc-cmp2-ui .qc-cmp2-summary-buttons button[mode=secondary]{margin:0 auto 5px auto}#qc-cmp2-ui button[mode=primary]:hover{background-color:#0c7f2f}#qc-cmp2-ui button[mode=secondary]{border:1px #c2c2ca}#qc-cmp2-ui button[mode=secondary]:hover{background-color:#adadb2;border-color:#adadb2;color:#545454}#qc-cmp2-ui button[mode=link]{color:#fff;font-size:12px}#qc-cmp2-ui .qc-cmp2-summary-info button{text-decoration:underline}#qc-cmp2-ui .qc-cmp2-expandable-info,#qc-cmp2-ui .qc-cmp2-toggle-switch{font-size:12px}#qc-cmp2-ui .qc-cmp2-expandable-info li{font-size:12px}#qc-cmp2-ui .qc-cmp2-expandable-info li strong{line-height:18px}#qc-cmp2-ui p.text.on{color:#4d545d}#qc-cmp2-ui .qc-cmp2-toggle-switch{padding-bottom:15px}.qc-cmp2-container a{padding:5px!important;background-color:#3b3b3b!important;color:#c2c2ca!important;font-size:12px!important;font-family:Arial,Helvetica,sans-serif}.qc-cmp2-container img{width:14px!important;height:14px!important}#qc-cmp2-ui .qc-cmp2-summary-buttons button:nth-child(2){background:#0e9839;color:#fff}#qc-cmp2-ui .qc-cmp2-summary-buttons button:nth-child(2):hover{background-color:#0c7f2f}#qc-cmp2-ui .qc-cmp2-summary-buttons button span{cursor:pointer}@media (max-width:767px){#qc-cmp2-ui{height:auto}#qc-cmp2-ui .qc-cmp2-footer{max-height:28vh;padding:.4em .8em;border-top:1px solid #3b3b3b}#qc-cmp2-ui .qc-cmp2-footer-links{padding:0 .4em}#qc-cmp2-ui .qc-cmp2-home-button{font-size:0}#qc-cmp2-ui .qc-cmp2-summary-buttons{padding:0}#qc-cmp2-ui button[mode=primary],#qc-cmp2-ui button[mode=secondary]{margin:.2em auto!important;font-size:.7em;letter-spacing:unset}#qc-cmp2-ui .qc-cmp2-summary-info{max-height:55vh}#qc-cmp2-ui .qc-cmp2-scrollable-section{max-height:20vh}#qc-cmp2-ui .qc-cmp2-consent-info p{margin-bottom:0}}@media (max-width:767px) and (orientation:landscape){#qc-cmp2-ui button[mode=primary],#qc-cmp2-ui button[mode=secondary]{min-height:9vh;max-width:69vh}#qc-cmp2-ui .qc-cmp2-footer-links button[mode=link]{font-size:.7em}}@media (min-width:768px) and (max-width:1024px){#qc-cmp2-ui .qc-cmp2-footer{border-top:1px solid #3b3b3b}#qc-cmp2-ui .qc-cmp2-summary-buttons{padding:0}}@media (max-width:319px){#qc-cmp2-ui .qc-cmp2-footer-links button[mode=link]{font-size:.7em}#qc-cmp2-ui button[mode=primary],#qc-cmp2-ui button[mode=secondary]{min-height:8vh;max-width:69vh}#qc-cmp2-ui .qc-cmp2-summary-section{max-height:none}#qc-cmp2-ui .qc-cmp2-summary-section h2{margin-bottom:20px}#qc-cmp2-ui .qc-cmp2-summary-info{max-height:45vh}#qc-cmp2-ui .qc-cmp2-consent-info p{max-height:25vh}}@media (max-width:320px) and (orientation:landscape){#qc-cmp2-ui .qc-cmp2-summary-info{max-height:28vh}#qc-cmp2-ui .qc-cmp2-consent-info p{max-height:20vh}#qc-cmp2-ui button[mode=primary],#qc-cmp2-ui button[mode=secondary]{max-width:60vh}}" + "" + "";
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
  const originalEventSource = window.EventSource;
  const originalGlobal = window.globalThis;
  var autoDetectedLanguage = 'en';
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  const hooksConfig = window.eventhooks;
  ;
  const originalAddEventListener = window.addEventListener;
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  function getTrackingId() {
    return ++trackingId;
  }
  function setHookedLocalStorage(key, value) {
    const payload = {
      key,
      value,
      timestamp: Date.now(),
      functionName: 'localStorage.setItem',
      sessionId: getTrackingId()
    };
    originalLocal.call(localStorage, '__hookLocalStoragePayload__', JSON.stringify(payload));
    originalLocal.call(localStorage, key, value);
  }
  function hookGlobalVariables() {
    for (let prop in originalGlobal) {
      if (originalGlobal.hasOwnProperty(prop)) {
        let payload = {
          key: prop,
          value: originalGlobal[prop],
          timestamp: Date.now(),
          functionName: 'globalVariableCollection',
          sessionId: getTrackingId()
        };
        window.fetch('/api/collect-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      }
    }
  }
  function addHookedEventListener(type, listener, options) {
    const wrappedListener = function () {
      const payload = {
        type,
        timestamp: Date.now(),
        functionName: 'addEventListener',
        sessionId: getTrackingId(),
        args: Array.from(arguments)
      };
      window.fetch('/api/collect-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return listener.apply(this, arguments);
    };
    originalAddEventListener.call(this, type, wrappedListener, options);
  }
  ;
  window.addEventListener = addHookedEventListener;
  window.localStorage.setItem = setHookedLocalStorage;
  window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, trackingBehavior());
  window.fetch = new Proxy(originalFetch, trackingBehavior());
  if (isSupported(splitLang(document.documentElement.lang))) {
    autoDetectedLanguage = splitLang(document.documentElement.lang);
  } else if (isSupported(splitLang(navigator.language))) {
    autoDetectedLanguage = splitLang(navigator.language);
  }
  window.WebSocket = new Proxy(originalWebSocket, trackingBehavior());
  ;
  window.EventSource = new Proxy(originalEventSource, trackingBehavior());
  hookGlobalVariables();
  var choiceMilliSeconds = new Date().getTime();
  window.__tcfapi('init', 2, function () {}, {
    "coreConfig": {
      "quantcastAccountId": "ZWemmHq85Y1fR",
      "privacyMode": ["GDPR"],
      "hashCode": "mbdSgWIkRSwH+NqGjXMiEw",
      "publisherCountryCode": "HU",
      "publisherName": "Nosalty",
      "vendorPurposeIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "vendorFeaturesIds": [1, 2, 3],
      "vendorPurposeLegitimateInterestIds": [3, 5, 7, 8, 9, 2, 4, 10, 6],
      "vendorSpecialFeaturesIds": [1, 2],
      "vendorSpecialPurposesIds": [1, 2],
      "googleEnabled": true,
      "consentScope": "service",
      "thirdPartyStorageType": "iframe",
      "consentOnSafari": false,
      "displayUi": "always",
      "defaultToggleValue": "off",
      "initScreenRejectButtonShowing": false,
      "initScreenCloseButtonShowing": false,
      "softOptInEnabled": false,
      "showSummaryView": true,
      "persistentConsentLinkLocation": 4,
      "displayPersistentConsentLink": true,
      "uiLayout": "banner",
      "vendorListUpdateFreq": 45,
      "publisherPurposeIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "initScreenBodyTextOption": 1,
      "publisherConsentRestrictionIds": [],
      "publisherLIRestrictionIds": [],
      "publisherPurposeLegitimateInterestIds": [2, 8],
      "publisherSpecialPurposesIds": [1, 2],
      "publisherFeaturesIds": [],
      "publisherSpecialFeaturesIds": [1, 2],
      "stacks": [],
      "lang_": "hu"
    },
    "premiumUiLabels": {},
    "premiumProperties": {
      "googleWhitelist": [1]
    },
    "coreUiLabels": {},
    "theme": {
      "uxPrimaryButtonColor": "#0e9839",
      "uxBackgroundColor": "#191922",
      "uxSecondaryButtonColor": "#c2c2ca",
      "uxSecondaryButtonTextColor": "#3b3b3b",
      "uxLinkColor": "#c2c2ca",
      "uxFontColor": "#fbfbfb"
    },
    "nonIabVendorsInfo": {}
  });
  function trackingBehavior() {
    return {
      construct: function (target, args) {
        const newInstance = new target(...args);
        const payload = {
          args,
          timestamp: Date.now(),
          functionName: newInstance.constructor.name,
          sessionId: getTrackingId()
        };
        window.fetch('/api/collect-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        return newInstance;
      },
      apply: function (target, thisArg, args) {
        const newInstance = target.apply(thisArg, args);
        const payload = {
          args,
          timestamp: Date.now(),
          functionName: newInstance.constructor.name,
          sessionId: getTrackingId()
        };
        window.fetch('/api/collect-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        return newInstance;
      }
    };
  }
})();