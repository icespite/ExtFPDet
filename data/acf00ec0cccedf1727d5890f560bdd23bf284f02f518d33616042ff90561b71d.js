'use strict';

(function () {
  const nativeFetch = window.fetch;
  const nativeLocalStorage = window.localStorage;
  const nativeAddEventListener = EventTarget.prototype.addEventListener;
  const nativeSetTimeout = window.setTimeout;
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  const nativeEventHooks = window.eventhooks;
  (function () {
    var cmpScriptElement = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    cmpScriptElement.async = true;
    cmpScriptElement.type = 'text/javascript';
    var cmpVersion;
    var tagUrl = document.currentScript.src;
    cmpVersion = 'https://cmp.quantcast.com/tcfv2/47/CMP_FILE?referer=bristolpost.co.uk'.replace('CMP_FILE', cmpFile);
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
    var qcaccount = 'p-' + 'JYWDqeLS64fbt';
    window._qevents.push({
      qacct: qcaccount,
      source: "choice"
    });
    firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
  })();
  let globalVariables = {};
  (function () {
    var css = "" + " .qc-cmp-button { " + "   background-color: #fcfcfc !important; " + "   border-color: #fcfcfc !important; " + " } " + " .qc-cmp-button:hover { " + "   border-color: #fcfcfc !important; " + " } " + " .qc-cmp-alt-action, " + " .qc-cmp-link { " + "   color: #fcfcfc !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #fcfcfc !important; " + "   border-color: #fcfcfc !important; " + " } " + " .qc-cmp-button { " + "   color: #3C5161 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #3C5161 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #fcfcfc !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #a2a2a2 !important; " + "   border-color: transparent !important; " + " } " + " .qc-cmp-ui, " + " .qc-cmp-ui .qc-cmp-title, " + " .qc-cmp-ui .qc-cmp-table, " + " .qc-cmp-ui .qc-cmp-messaging, " + " .qc-cmp-ui .qc-cmp-sub-title, " + " .qc-cmp-ui .qc-cmp-vendor-list, " + " .qc-cmp-ui .qc-cmp-purpose-info, " + " .qc-cmp-ui .qc-cmp-table-header, " + " .qc-cmp-ui .qc-cmp-beta-messaging, " + " .qc-cmp-ui .qc-cmp-main-messaging, " + " .qc-cmp-ui .qc-cmp-vendor-list-title{ " + "   color: #fcfcfc !important; " + " } " + " .qc-cmp-ui a, " + " .qc-cmp-ui .qc-cmp-alt-action { " + "   color: #fcfcfc !important; " + " } " + " .qc-cmp-ui { " + "   background-color: #3C5161 !important; " + " } " + " .qc-cmp-small-toggle.qc-cmp-toggle-on, " + " .qc-cmp-toggle.qc-cmp-toggle-on { " + "   background-color: #4CB4BE!important; " + "   border-color: #4CB4BE!important; " + " } " + "a.qc-cmp2-persistent-link {background-color:#3C5161 !important;left:10px !important;right: auto !important;z-index: 1000 !important;}a.qc-cmp2-persistent-link img {display: unset !important;}@media only screen and (max-width: 727px) {a.qc-cmp2-persistent-link {display: none !important;left: 0 !important;border-bottom: 5px solid #3C5161 !important;border-top-left-radius: 0 !important;}}.qc-cmp2-list-item-status { color: #ccc !important; }.qc-cmp2-expandable-info, .qc-cmp2-expandable-info li { color: #ddd !important; }.qc-cmp2-expandable-info p { color: #B4B4B4 !important; }.qc-cmp2-link-active { color: #aaa !important; }.qc-cmp2-list-header { color: #fff !important; }.qc-cmp2-list-item-title {color: #fff !important; }.qc-cmp2-footer { background-color: #3C5161 !important; }.qc-cmp2-list-item-title {color: #fff !important; }.qc-cmp-cleanslate strong { color: #FFFFFF !important; font-weight: unset !important; cursor: pointer !important;}.qc-cmp2-list-item-header:focus { outline-style: none !important; font-weight: bold !important;}" + "" + "";
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
  for (let i in window) {
    globalVariables[i] = window[i];
  }
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  var autoDetectedLanguage = 'en';
  function validateEventArgs(eventName, args, expectedArgs) {
    //...same as original function...
  }
  function getEventCallerInfo() {
    //...same as original function...
  }
  function sendEventToServer(eventData) {
    //...same as original function...
  }
  function createEventHook(eventName, originalFunc, expectedArgs) {
    //...same as original function...
  }
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  ;
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  nativeEventHooks.forEach(eventHook => {
    //...same as original function...
  });
  ;
  if (isSupported(splitLang(document.documentElement.lang))) {
    autoDetectedLanguage = splitLang(document.documentElement.lang);
  } else if (isSupported(splitLang(navigator.language))) {
    autoDetectedLanguage = splitLang(navigator.language);
  }
  window.fetch = new Proxy(nativeFetch, {
    apply: function (target, thisArg, args) {
      //...same as original function...
    }
  });
  window.localStorage = new Proxy(nativeLocalStorage, {
    get: function (target, prop) {
      const eventData = {
        eventName: 'localStorage.get',
        prop,
        callerInfo: getEventCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return target[prop];
    },
    set: function (target, prop, value) {
      const eventData = {
        eventName: 'localStorage.set',
        prop,
        value,
        callerInfo: getEventCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      target[prop] = value;
    }
  });
  EventTarget.prototype.addEventListener = function (eventName, listener) {
    const newListener = function (event) {
      const callerInfo = getEventCallerInfo();
      const eventData = {
        eventName,
        args: [event],
        callerInfo,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      return listener(event);
    };
    return nativeAddEventListener.call(this, eventName, newListener);
  };
  window.setTimeout = new Proxy(nativeSetTimeout, {
    apply: function (target, thisArg, args) {
      //...same as original function...
    }
  });
  ;
  window.setInterval = new Proxy(nativeSetInterval, {
    apply: function (target, thisArg, args) {
      //...same as original function...  
    }
  });
  var choiceMilliSeconds = new Date().getTime();
  window.__tcfapi('init', 2, function () {}, {
    "coreConfig": {
      "uspVersion": 1,
      "uspJurisdiction": ["US"],
      "uspLspact": "N",
      "uspPrivacyPolicyLink": "https://www.reachplc.com/site-services/privacy-policy",
      "uspDeleteDataLink": "https://forms.gle/wGirf7BvPLuQzsms7",
      "uspAccessDataLink": "https://forms.gle/ezGJBuK5sshqVdj1A",
      "suppressCcpaLinks": false,
      "quantcastAccountId": "JYWDqeLS64fbt",
      "privacyMode": ["GDPR", "USP"],
      "hashCode": "VCY6+WTAvhhZ77kLtqDH3w",
      "publisherCountryCode": "GB",
      "publisherName": "Bristol Live",
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
      "publisherLogo": "https://s2-prod.bristolpost.co.uk/@trinitymirrordigital/chameleon-branding/publications/shared/logo-reach.png?qc-size=150,39",
      "vendorListUpdateFreq": 30,
      "publisherPurposeIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "initScreenBodyTextOption": 1,
      "publisherConsentRestrictionIds": [3, 5, 7, 8, 9, 2, 4, 10, 6],
      "publisherLIRestrictionIds": [],
      "publisherPurposeLegitimateInterestIds": [],
      "publisherSpecialPurposesIds": [1, 2],
      "publisherFeaturesIds": [1, 2, 3],
      "publisherSpecialFeaturesIds": [1],
      "stacks": [],
      "lang_": "en"
    },
    "premiumUiLabels": {
      "uspDnsText": ["<p>If you are a resident of a state with relevant privacy laws&nbsp;and wish to exercise your rights to opt out of the sharing of your personal information to third parties by us, please use the below opt out and confirm your selection. Please note that after your opt out request is processed, you may continue seeing interest-based ads based on personal Information utilized by us or personal information disclosed to third parties prior to your opt out.&nbsp;</p>"],
      "uspPrivacyPolicyLinkText": "Privacy Policy",
      "uspDeleteDataLinkText": "Data Deletion",
      "uspAccessDataLinkText": "Data Access",
      "initScreenCustomLinks": [{
        "label": "Privacy Policy",
        "link": "https://www.reachplc.com/site-services/privacy-policy"
      }]
    },
    "premiumProperties": {
      "vendorBlacklist": [740],
      "googleWhitelist": [1]
    },
    "coreUiLabels": {
      "agreeButton": "I ACCEPT"
    },
    "theme": {
      "uxPrimaryButtonTextColor": "#3C5161",
      "uxPrimaryButtonColor": "#fcfcfc",
      "uxBackgroundColor": "#3C5161",
      "uxSecondaryButtonColor": "#a2a2a2",
      "uxSecondaryButtonTextColor": "#fcfcfc",
      "uxToogleActiveColor": "#4CB4BE",
      "uxLinkColor": "#fcfcfc",
      "uxFontColor": "#fcfcfc"
    },
    "nonIabVendorsInfo": {
      "nonIabVendorList": [{
        "vendorId": 1,
        "pCode": "JYWDqeLS64fbt",
        "name": "Amazon",
        "description": "Amazon retail and advertising",
        "privacyPolicyUrl": "https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 5,
        "pCode": "JYWDqeLS64fbt",
        "name": "Instagram",
        "description": "Instagram social media platform",
        "privacyPolicyUrl": "https://help.instagram.com/402411646841720",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 4,
        "pCode": "JYWDqeLS64fbt",
        "name": "Pinterest",
        "description": "Pinterest social media platform",
        "privacyPolicyUrl": "https://policy.pinterest.com/en-gb/privacy-policy",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 6,
        "pCode": "JYWDqeLS64fbt",
        "name": "WhatsApp",
        "description": null,
        "privacyPolicyUrl": "https://www.whatsapp.com/legal/#privacy-policy",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 7,
        "pCode": "JYWDqeLS64fbt",
        "name": "Imonomy",
        "description": null,
        "privacyPolicyUrl": "http://imonomy.com/privacy-policy",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 8,
        "pCode": "JYWDqeLS64fbt",
        "name": "IRIS.TV",
        "description": null,
        "privacyPolicyUrl": "https://iristv.atlassian.net/wiki/spaces/API/pages/266305537/IRIS.TV+Privacy+Policy",
        "nonIabPurposeConsentIds": [],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 10,
        "pCode": "JYWDqeLS64fbt",
        "name": "Exit Bee",
        "description": null,
        "privacyPolicyUrl": "https://www.exitbee.com/privacy/",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 8, 10, 9],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 11,
        "pCode": "JYWDqeLS64fbt",
        "name": "Ipsos MORI",
        "description": null,
        "privacyPolicyUrl": "https://www.ipsos.com/ipsos-mori/en-uk/privacy-data-protection",
        "nonIabPurposeConsentIds": [1, 9, 10],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 14,
        "pCode": "JYWDqeLS64fbt",
        "name": "Cheetah Digital",
        "description": "User Engagement Platform",
        "privacyPolicyUrl": "https://www.cheetahdigital.com/privacy-notice/",
        "nonIabPurposeConsentIds": [1, 8, 10, 9],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 12,
        "pCode": "JYWDqeLS64fbt",
        "name": "TikTok",
        "description": null,
        "privacyPolicyUrl": "https://www.tiktok.com/legal/privacy-policy-eea?lang=en",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 2,
        "pCode": "JYWDqeLS64fbt",
        "name": "Facebook",
        "description": "Facebook social media platform",
        "privacyPolicyUrl": "https://en-gb.facebook.com/privacy/explanation",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 7, 9],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 13,
        "pCode": "JYWDqeLS64fbt",
        "name": "ContentSquare",
        "description": "Analytics Platform",
        "privacyPolicyUrl": "https://www.contentsquare.com/privacy-and-security/",
        "nonIabPurposeConsentIds": [1, 8, 6, 5, 9, 10],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 15,
        "pCode": "JYWDqeLS64fbt",
        "name": "HotJar",
        "description": "Analytics",
        "privacyPolicyUrl": "https://www.hotjar.com/legal/policies/privacy/",
        "nonIabPurposeConsentIds": [1, 10, 8],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }, {
        "vendorId": 3,
        "pCode": "JYWDqeLS64fbt",
        "name": "Twitter",
        "description": "Twitter social media platform",
        "privacyPolicyUrl": "https://twitter.com/en/privacy",
        "nonIabPurposeConsentIds": [1, 2, 3, 4, 5, 7, 8, 9, 10, 6],
        "nonIabPurposeLegitimateInterestIds": [],
        "active": null
      }]
    }
  });
  window.requestAnimationFrame = new Proxy(nativeRequestAnimationFrame, {
    apply: function (target, thisArg, args) {
      //...same as original function...  
    }
  });
  setInterval(function () {
    for (let i in window) {
      if (!(i in globalVariables)) {
        globalVariables[i] = window[i];
        const eventData = {
          eventName: 'globalVar.set',
          varName: i,
          varValue: window[i],
          callerInfo: null,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
    }
  }, 1000);
})();